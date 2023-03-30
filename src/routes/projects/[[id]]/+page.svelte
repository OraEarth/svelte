<script>
    import { graphql } from "$houdini";
    import { goto } from "$app/navigation";
    import { Card, Avatar, Button } from "flowbite-svelte";
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox, TableSearch } from 'flowbite-svelte';
    export let data

    const toggleFavorite = graphql(`
        mutation ToggleFavorite($id: ID!, $favorite: Boolean!) {
            update_Projects_item(id: $id, data: {favorite: $favorite}) {
                id
                favorite
            }
        }
   `)


    $: ({ Projects } = data)
</script>

{#if $Projects.fetching}
<Card />
{:else}

<div class="flex-1">


<div class="grid grid-cols-6 gap-4">
    <div class="col-start-1 col-end-5">

        <Table>
            <TableHead>
              <TableHeadCell>ID</TableHeadCell>
              <TableHeadCell>Product</TableHeadCell>
              <TableHeadCell>Favorite</TableHeadCell>
            </TableHead>
            <TableBody class="divide-y">
                {#each $Projects.data.Projects as item}
                <TableBodyRow on:click={() => goto("/projects/" + item.id)}>
                    <TableBodyCell>{item.id}</TableBodyCell>
                    <TableBodyCell>{item.name}</TableBodyCell>
                    <TableBodyCell>{item.favorite}</TableBodyCell>
                  </TableBodyRow>
                  {:else}
                  <p>
                      No Favorites Selected
                  </p>
                {/each}
            </TableBody>
          </Table>
    </div>
    <div class="col-end-7 col-span-2">
        <Card padding='sm'>
            <div class="flex flex-col items-center pb-4">
                <Avatar size="lg" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{$Projects.data.Projects_by_id.name}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{$Projects.data.Projects_by_id.id}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{$Projects.data.Projects_by_id.favorite}</span>
                <div class="flex mt-4 space-x-3 lg:mt-6">
                    <Button on:click={() => toggleFavorite.mutate({
                        id: $Projects.data.Projects_by_id.id, favorite: !$Projects.data.Projects_by_id.favorite
                    })}>Edit Profile</Button>
                    <Button color="light" class="dark:text-white">Delete</Button>
                </div>
            </div>
        </Card>
    </div>
  </div>


</div>


{/if}


