<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { register } from '@teamhanko/hanko-elements';
	import { Hanko } from '@teamhanko/hanko-frontend-sdk';
	import { Button, Modal } from 'flowbite-svelte';
	import { config } from '$lib/config.js';

	let defaultModal = false;

	const api = config.hanko;
	const hanko = new Hanko(config.hanko);

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
