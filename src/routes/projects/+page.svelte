<script>
    import {Card } from 'flowbite-svelte'
    export let data
    
    $: ({ Projects } = data)
</script>

<div>
    {#each $Projects.data.Projects as project}
        <Card>
            <h1>{project.name}</h1>
        </Card>
    {/each}
</div>
