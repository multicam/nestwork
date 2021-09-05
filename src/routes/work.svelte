<script context="module">
	export const prerender = true;
</script>

<script>
    import aside from '../data/aside.json'
    import content from '../data/content.json'
    const {log} = console, {isArray} = Array, {stringify} = JSON
    log(aside,content)

    const contentParse = async data => {
      if( isArray(data) ) {
        log('-- coll --', data)
        for(let i of data) {
          await contentParse(i)
        }
      }
      else {
        log('-- leaf --', data)
      }
    }

    contentParse(content).then(log)
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<section>
    <aside>aside</aside>
    <main>
        {#each content as row}
            <article>
                {#if isArray(row)}
                    Arr -- {stringify(row)} --
                {:else}
                    {row}
                {/if}
            </article>
        {/each}
    </main>
</section>

<style>

    :global(body) {
        overflow: hidden;
    }

    section {
        display: flex;
        flex:1;
    }

    aside {
        flex-basis: 27vw;
        background: rgba(0,0,0,.1);
        display: flex;
    }

    main {
        flex:1;
        max-height: 100vh;
        overflow-y: auto;
    }

    article {
        min-height: 27vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
