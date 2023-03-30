<script>
    import { graphql } from "$houdini";
    import { goto } from "$app/navigation";
    import { Star } from "svelte-heros-v2";
    import { Card, Avatar, Button, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
    export let data

    const createProject = graphql(`
        mutation CreateProject($name: String!) {
            create_Projects_item(data: {name: $name}) {
                id
                name
                favorite
            }
        }
           
   `)
    const toggleFavorite = graphql(`
        mutation ToggleFavorite($id: ID!, $favorite: Boolean!) {
            update_Projects_item(id: $id, data: {favorite: $favorite}) {
                id
                name
                favorite
            }
        }
   `)
    const deleteProject = graphql(`
        mutation DeleteProject($id: ID!) {
            delete_Projects_item(id: $id) {
                id
            }
        }
   `)

    $: ({ Projects } = data)
</script>

{#if $Projects.fetching}
    fetching
{:else}

<div class="flex-1">


<div class="grid grid-cols-6 gap-4">
    <div class="col-start-1 col-end-5">
        <Button on:click={() => createProject.mutate({name: "Test"})}>Create New</Button>
        <Table>
            <TableHead>
              <TableHeadCell>ID</TableHeadCell>
              <TableHeadCell>Product</TableHeadCell>
              <TableHeadCell>Favorite</TableHeadCell>
            </TableHead>
            <TableBody>
                {#each $Projects.data.Projects as item}
                <TableBodyRow on:click={() => goto("/projects/" + item.id)}>
                    <TableBodyCell>{item.id}</TableBodyCell>
                    <TableBodyCell>{item.name}</TableBodyCell>
                    <TableBodyCell>  
                        {#if item.favorite}
                        <Star size="20" variation="solid" class="text-yellow-300" />
                       {:else}
                       <Star size="20" class="text-gray-300" />
                   {/if}</TableBodyCell>
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
                {#if $Projects.data.Projects_by_id.favorite}
                     <Star size="50" variation="solid" class="text-yellow-300" />
                    {:else}
                    <Star size="50" class="text-gray-300" />
                {/if}
                <div class="flex mt-4 space-x-3 lg:mt-6">
                    <Button color="yellow" on:click={() => toggleFavorite.mutate({
                        id: $Projects.data.Projects_by_id.id, favorite: !$Projects.data.Projects_by_id.favorite
                    })}>Favorite</Button>
                    <Button on:click={() => deleteProject.mutate({id: $Projects.data.Projects_by_id.id })} color="red" class="dark:text-white">Delete</Button>
                </div>
            </div>
        </Card>
    </div>
  </div>


</div>


{/if}


