<script>
	import { Li, List, Heading, Secondary } from 'flowbite-svelte';
	import OraItem from '$lib/components/OraItem.svelte';
	import OraItem2 from '$lib/components/OraItem2.svelte';
	import OraList from '$lib/components/OraList.svelte';
	import { ListPlaceholder } from 'flowbite-svelte';

	export let data;

	let comps = [
		{
			name: 'component 1',
			component: OraItem
		},
		{
			name: 'Component 2',
			component: OraItem2
		}
	];

	$: ({ AppById } = data);
</script>

{#if $AppById.fetching}
	fetching
{:else}
	<div class="h-full w-full grid areas overflow-hidden">
		<div style="grid-area: left" class="overflow-scroll p-4">
			<Heading tag="h5">
				{$AppById.data.apps_by_id.name}<br />
				<Secondary>{$AppById.data.apps_by_id.id}</Secondary>
			</Heading>
			<OraList {comps} />
		</div>
		<div style="grid-area: right" class="overflow-scroll p-4">
			<Heading tag="h5"
				>Todos<br />
				<Secondary>Listing related todos</Secondary></Heading
			>
			<List tag="ul" class="divide-y divide-gray-200">
				{#each $AppById.data.apps_by_id.todos as todo}
					<Li class="py-2 sm:py-2" icon>
						<div class="flex items-center space-x-2">
							<div class="flex-shrink-0" />
							<div class="flex-1 min-w-0">
								<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
									{todo.todos_id.name}
								</p>
								<p class="text-sm text-gray-500 truncate dark:text-gray-400">{todo.todos_id.id}</p>
							</div>
						</div>
					</Li>
				{/each}
			</List>
		</div>
	</div>
{/if}

<style>
	.areas {
		grid-template-columns: 1fr 3fr;
		grid-template-areas: 'left right';
	}
</style>
