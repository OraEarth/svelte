<script>
	  import { Card, MenuButton, Dropdown, DropdownItem, Avatar, Button } from "flowbite-svelte";
	import { goto } from '$app/navigation';

	export let data;
	$: ({ Apps } = data); 
</script>

<h1 class="text-3xl dark:text-white">All apps</h1>

<div class="grid grid-cols-4 gap-4">
	
	{#if $Apps.fetching}
fetching
{:else}

{#each $Apps.data.apps as app }
	<div on:click={() => goto("/apps/"+ app.id)}>
		<Card img="https://images.unsplash.com/photo-1679939099455-6fb0ec91e794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80">
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{app.name}</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{app.id}</p>
		</Card>
	</div>
{/each}
{/if}
</div>
