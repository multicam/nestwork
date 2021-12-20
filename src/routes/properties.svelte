<script context="module">
  export const prerender = true;
  import Hero from '$lib/components/hero.svelte'
  import Forms from '$lib/components/forms.svelte'
  import AspectRatio from "$lib/components/carbon/AspectRatio.svelte";
  import IconBeds from '$lib/components/icons/beds.svelte'
  import IconPool from '$lib/components/icons/pool.svelte'
  import IconWharf from '$lib/components/icons/wharf.svelte'

  const {log} = console, {stringify} = JSON

  import properties from '../data/properties.json'
</script>
<!--head-->
<svelte:head>
    <title>NestLove | Properties</title>
</svelte:head>

<!--hero-->
<section>
    <Hero/>
</section>

<!--own-->
<section>
    <div class="mt4 mb4 px row">
        <h2 class="col-12 normal mb0 text-center font-6vw">
            Current Nests to Love
        </h2>
    </div>
    <div class="px div mo-wrap mo-between mb6">
        {#each properties as p, n}
            <figure class="col-4 mb1">
                <a href="/property/{p.slug}">
                    <AspectRatio ratio="1x1" crop center>
                        <img class="cabs" src="/property/{p.thumb}.png" alt="house {n}">
                    </AspectRatio>
                </a>
                <figcaption class="flex" style="height:2vw; margin: 1vw 0">
                    <div style="width:2vw; height: 2vw; margin-right: .5vw">
                        <IconBeds beds={p.beds}/>
                    </div>
                    {#if p.pool }
                        <div style="width:2vw; height: 2vw; margin-right: .5vw">
                            <IconPool/>
                        </div>
                    {/if}
                    {#if p.wharf }
                        <div style="width:2vw; height: 2vw; margin-right: .5vw">
                            <IconWharf/>
                        </div>
                    {/if}
                    <div class="flex-col"
                         style="font-size:.9em; line-height: 1vw;">
                        <div>{p.summary}</div>
                        <div><strong>{p.address}</strong></div>
                    </div>
                </figcaption>
            </figure>
        {/each}
    </div>

</section>

<!--forms-->
<Forms/>

<style lang="scss">
  @media (min-width: 1028px) {
  }

  a {
      text-decoration: none;
      color: #123;

    &:hover {
      color: #DEF;
    }
  }

</style>
