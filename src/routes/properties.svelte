<script context="module">
  export const prerender = true;
  import Hero from '../components/hero.svelte'
  import Forms from '../components/forms.svelte'
  import AspectRatio from "../components/carbon/AspectRatio.svelte";
  import IconBeds from '../components/icons/beds.svelte'
  import IconPool from '../components/icons/pool.svelte'
  import IconWharf from '../components/icons/wharf.svelte'
  const {log} = console, {stringify} = JSON

  const properties = [
    {
      shares: {total: 8, left: 2},
      summary: '5 Beds, 4 Baths + Self Contained Granny',
      address: 'Bungan Beach, Sydney',
      thumb: 'image9',
      beds: 5,
      pool: 1
    },
    {
      shares: {total: 8, left: 3},
      summary: '4 Beds, 4 Baths + Jetty',
      address: 'Clareville Beach, Sydney',
      thumb: 'pexels-amanda-klamrowski-1464793',
      beds: 4,
      pool: 1,
      wharf: 1
    },
    {
      shares: {total: 8, left: 1},
      summary: '6 Beds, 4 Baths + 2 Kitchens',
      address: 'Avalon Beach, Sydney',
      thumb: 'dusk_35_elaine',
      beds: 6,
      pool: 1
    },
    {
      shares: {total: 8, left: 2},
      summary: '5 Beds, 4 Baths + Self Contained Granny',
      address: 'Whale Beach, Sydney',
      thumb: 'james1',
      beds: 5,
      pool: 1
    },
    {
      shares: {total: 8, left: 4},
      summary: '4 Beds, 3 Baths',
      address: 'Palm Beach, Sydney',
      thumb: 'james3',
      beds: 4,
      pool: 1
    },
    {
      shares: {total: 8, left: 4},
      summary: '6 Beds, 4 Baths + 2 Kitchens',
      address: 'Avalon Beach, Sydney',
      thumb: 'james2',
      beds: 6,
      pool: 1,
      wharf: 1
    },
  ]

  log(stringify(properties))
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
    <div class="row px div mo-fw mo-between mb6">
        {#each properties as p, n}
            <figure class="col-4 mb1 mo-mb0">
                <AspectRatio ratio="1x1" crop center>
                    <img class="cabs" src="/property/{p.thumb}.png" alt="house {n}">
                </AspectRatio>
                <figcaption class="flex" style="height:2vw; margin: 1vw 0">
                    <div style="width:2vw; height: 2vw; margin-right: .125vw">
                        <IconBeds beds={p.beds}/>
                    </div>
                    {#if p.pool }
                        <div style="width:2vw; height: 2vw; margin-right: .125vw">
                            <IconPool/>
                        </div>
                    {/if}
                    {#if p.wharf }
                        <div style="width:2vw; height: 2vw; margin-right: .125vw">
                            <IconWharf/>
                        </div>
                    {/if}
                    <div class="flex-col" style="margin-left:.5vw; font-size:.9em; line-height: 1vw">
                        <div >{p.summary}</div>
                        <div ><strong>{p.address}</strong></div>
                    </div>
                </figcaption>
            </figure>
        {/each}
    </div>

</section>

<!--forms-->
<Forms/>
