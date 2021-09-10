<script context="module">
  export const prerender = true;
  import Hero from '../components/hero.svelte'
  import Forms from '../components/forms.svelte'
  import AspectRatio from "../components/carbon/AspectRatio.svelte";
  import IconBeds from '../components/icons/beds.svelte'
  import IconPool from '../components/icons/pool.svelte'
  import IconWharf from '../components/icons/wharf.svelte'

  const {log} = console, {stringify} = JSON

  import properties from '../data/properties.json'
</script>
<style lang="scss">
  a {
    text-decoration: none;
    color: #123;

    &:hover {
      color: #DEF;
    }
  }
</style>
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
    <div class="row px div mo-fw mo-between mb6">
        {#each properties as p, n}
            <figure class="col-4 mb1 mo-mb0">
                <a href="/property/{p.slug}">
                    <AspectRatio ratio="1x1" crop center>
                        <img class="cabs" src="/property/{p.thumb}.png" alt="house {n}">
                    </AspectRatio>
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
                </a>
            </figure>
        {/each}
    </div>

</section>

<!--forms-->
<Forms/>
