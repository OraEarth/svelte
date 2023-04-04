<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { register } from '@teamhanko/hanko-elements';
	import { Hanko } from '@teamhanko/hanko-frontend-sdk';
	import { Button, Modal } from 'flowbite-svelte';

	let defaultModal = false;

	const api = import.meta.env.VITE_HANKO_API;
	const hanko = new Hanko(import.meta.env.VITE_HANKO_API);

	let element;
	let user;

	let error: Error | null = null;

	onMount(async () => {
		register({ shadow: true }).catch((e) => (error = e));
		user = await hanko.user.getCurrent();
	});
</script>

{#if !user}
	<Button on:click={() => (defaultModal = true)}>Login</Button>
{/if}

<Modal title="Profile" bind:open={defaultModal} autoclose>
	{#if error}
		<div class="error">{error?.message}</div>
	{/if}
	<hanko-auth bind:this={element} {api} />
</Modal>
