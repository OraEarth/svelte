<script>
	export let comps = [];
</script>

<div>
	{#each comps as item}
		<svelte:component this={item.component} name={item.name} />
	{/each}
</div>
