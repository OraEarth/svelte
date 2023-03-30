<script>
	import {
		Li,
		List,
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		Heading,
		Secondary
	} from 'flowbite-svelte';
	let spanClass = 'flex-1 ml-3 whitespace-nowrap';

	export let data;

	$: ({ AppById } = data);
</script>

{#if $AppById.fetching}
	fetching
{:else}
	<div class="grid grid-cols-12">
		<div class="col-span-3">
			<Sidebar>
				<SidebarWrapper>
					<SidebarGroup>
						<SidebarItem label="List Of Views">
							<svelte:fragment slot="icon">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-6 h-6"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
									/><path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
									/></svg
								>
							</svelte:fragment>
						</SidebarItem>
					</SidebarGroup>
				</SidebarWrapper>
			</Sidebar>
		</div>
		<div class="col-span-9">
			<Heading tag="h4"
				>{$AppById.data.apps_by_id.name}<br />
				<Secondary class="ml-2">{$AppById.data.apps_by_id.id}</Secondary></Heading
			>
			<List tag="ul" class="space-y-1">
				{#each $AppById.data.apps_by_id.todos as todo}
					<Li>{todo.todos_id.name}</Li>
				{/each}
			</List>
		</div>
	</div>
{/if}
