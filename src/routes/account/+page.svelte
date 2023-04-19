<script>
	import Account from '$lib/components/Account.svelte';
	import { Hanko } from '@teamhanko/hanko-frontend-sdk';
	import { onMount } from 'svelte';
	import { generatePashword } from '@pashword/pashword-lib';
	import { Button } from 'flowbite-svelte';
	import { config } from '$lib/config';

	const hanko = new Hanko(config.hanko);

	let user;

	onMount(async () => {
		user = await hanko.user.getCurrent();
	});

	async function signUpDirectusUser() {
		let pashedPassword = await generatePashword(
			JSON.stringify(user.webauthn_credentials[0].id + config.pashword),
			32,
			'https://ora.earth',
			user.email
		);
		// Create new directus user
		const object = {
			email: user.email,
			password: pashedPassword,
			role: 'b0f4301f-a315-4b95-8352-9016a8f95f2d'
		};

		const responseCreate = await fetch('https://data.ora.earth/users', {
			method: 'POST',
			body: JSON.stringify(object),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const responseText = await responseCreate.json();
		console.log(responseText);
	}

	async function authDirectusUser() {
		let pashedPassword = await generatePashword(
			JSON.stringify(user.webauthn_credentials[0].id + import.meta.env.VITE_PASHWORD_SALT),
			32,
			'https://ora.earth',
			user.email
		);

		const object = {
			email: user.email,
			password: pashedPassword
		};

		const response = await fetch('https://data.ora.earth/auth/login', {
			method: 'POST',
			body: JSON.stringify(object),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const responseOutput = await response.json();
		console.log(responseOutput.data.access_token);
	}
</script>

<div class="h-full w-full grid overflow-scroll p-12">
	<div>
		<Button on:click={signUpDirectusUser}>Create Directus User</Button>
		<Button color="yellow" on:click={authDirectusUser}>Authenticate</Button>
		<Account />
	</div>
</div>
