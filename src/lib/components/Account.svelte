<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from '@teamhanko/hanko-elements';
	import { Hanko } from '@teamhanko/hanko-frontend-sdk';
	import { Button } from 'flowbite-svelte';
	import { goto } from '$app/navigation';
	import { config } from '$lib/config.js';

	const api = config.hanko;
	const hanko = new Hanko(config.hanko);

	let element;

	let user;

	let error: Error | null = null;

	onMount(async () => {
		register({ shadow: true }).catch((e) => (error = e));
		element;

		user = await hanko.user.getCurrent();
	});

	const logout = () => {
		hanko.user.logout();
		goto('/');
	};
</script>

{#if error}
	<div class="error">{error?.message}</div>
{/if}

{#if user}
	<div>
		<div class="dark:text-white p-2">Welcome {user.email}</div>
		<Button color="red" on:click={logout}>Logout</Button>
	</div>
{:else}
	not logged in
{/if}

<hanko-profile {api} />
