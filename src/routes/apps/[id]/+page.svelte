<script>
	import { Li, List, Heading, Secondary } from 'flowbite-svelte';

	function loadComponent() {
		import('$lib/components/Test.svelte').then((res) => (Test = res.default));
	}

	export let data;

	$: ({ AppById } = data);
</script>

{#if $AppById.fetching}
	fetching
{:else}
	<div class="grid grid-cols-12">
		<div class="col-span-3" />
		<div class="col-span-9">
			<Heading tag="h4"
				>{$AppById.data.apps_by_id.name}<br />
				<Secondary class="ml-2">{$AppById.data.apps_by_id.id}</Secondary></Heading
			>
			<List tag="ul" class="divide-y divide-gray-200 dark:divide-gray-700">
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
