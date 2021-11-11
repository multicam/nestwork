<script context="module">
    export const prerender = true;
    import Hero from '$lib/components/hero.svelte'
    import Forms from '$lib/components/forms.svelte'
    import AspectRatio from "$lib/components/carbon/AspectRatio.svelte";
    import LinkArrow from "$lib/components/bits/LinkArrow.svelte";
</script>

<!--head-->
<svelte:head>
    <title>NestLove | Own, Relax, Enjoy</title>
</svelte:head>

<!--hero-->
<section>
    <Hero/>
</section>

<!--own-->
<section>
    <div class="mt4 mb4 px row">
        <h2 class="col-12 normal mb0 text-center font-6vw">
            What is Nestlove
        </h2>
    </div>
    <div class="row  px mo-flex-col">
        <div class="col-4 off-1 pt9 pb9 mo-pt7 mo-pb7">
            <h5 class="book uc mo-font-0_77vw mo-normal">
                Own
            </h5>
            <h3 class="mo-mt2 mo-mb2 mt2 mb2">
                Exclusive <strong>Investment Co-ownership.</strong>
            </h3>
            <LinkArrow
                class="font-0_77vw hover-blue decoration-none semibold text-black"
                url="/#/co-ownership-is-for-me"
                label="Is Co-ownership for you, find out more"
            />
        </div>
        <div class="col-4 off-1 pt9 pb9  mo-pt7 mo-pb7">
            <div class="font-1_25vw mo-mb2">
                <p>
                    Our target areas for property acquisition are prestige holiday locations around Australia. We create
                    specific purpose Trusts for each home with 5 or 6 shares. We then vet and fund our co-owners
                    (NestLovers) into each shareholding. NestLovers have the advantage of diversifying their property
                    holdings into the most sought after areas in Australia. <strong>You own, we handle all the details.
                    So that you together with your co-owners will enjoy 100% ownership of the home.</strong> NestLove
                    does not retain any shares.
                </p>
            </div>
        </div>
    </div>
</section>

<!--relax-->
<section>
    <div class="row  px mo-flex-col">
        <div class="col-4 off-1 pt9 pb9  mo-pt7 mo-pb7">
            <div class="font-1_25vw mo-mb2">
                <p>
                    You just show up and relax. We take care of the typical holiday home ownership hassles such as
                    renovation, interior design, repairs, utilities and property management. So that you can look
                    forward to booking your next holidays with our easy to use app and calendar. As part of our
                    acquisition program NestLove takes care of furnishings to make sure properties meet our high
                    standard of presentation. All ongoing property management is then seamlessly managed by NestLove to
                    ensure you just show up and enjoy. <strong>You own, we handle all the details.</strong>
                </p>
            </div>
        </div>
        <div class="col-4 off-1 pt9 pb9 mo-pt7 mo-pb7">
            <h5 class="book uc mo-font-0_77vw mo-normal">
                Relax
            </h5>
            <h3 class="mo-mt2 mo-mb2 mt2 mb2">
                Show Up & Relax. <strong>We Take Care of You.</strong>
            </h3>
            <LinkArrow
                class="font-0_77vw hover-blue decoration-none semibold text-black"
                label="How NestLove takes care of NestLovers"
                url="/#/nestlovers"
            />
        </div>
    </div>
</section>

<!--property-->
<section>
    <div class="mt4 mb4 px row">
        <h2 class="col-12 normal mb0 text-center font-7_29vw">
            Property to NestLove
        </h2>
    </div>
    <div class="row px div mo-fw mo-between mb6">
        {#each ['image9', 'pexels-amanda-klamrowski-1464793', 'dusk_35_elaine'] as house, n}
            <div class="col-4 mb1 mo-mb0">
                <AspectRatio ratio="1x1" crop center>
                    <img class="cabs" src="/property/{house}.png" alt="house {n}">
                </AspectRatio>
            </div>
        {/each}
    </div>
</section>

<!--enjoy-->
<section>
    <div class="row  px mo-flex-col">
        <div class="col-4 off-1 pt9 pb9 mo-pt7 mo-pb7">
            <h5 class="book uc mo-font-0_77vw mo-normal">
                Enjoy
            </h5>
            <h3 class="mo-mt2 mo-mb2 mt2 mb2">
                Holidays made easy. <strong>Investment Maximised.</strong>
            </h3>
            <LinkArrow
                class="font-0_77vw hover-blue decoration-none semibold text-black"
                label="Holidaying in your own NestLove"
                url="/#/holidaying"
            />
        </div>
        <div class="col-4 off-1 pt9 pb9  mo-pt7 mo-pb7">
            <div class="font-1_25vw mo-mb2">
                <p>
                    Through our world class booking platform and app co-owners can ensure that they can access their
                    property in peak times throughout the year. <strong>No more paying for expensive holidays in the
                    most sought after locations. You own it.</strong> NestLove also provides an annual expense statement
                    to ensure the tax benefits of investment property are maximised.
                </p>
                <p>
                    NestLove has an easy to use exclusive co-ownership <strong>Expense Calculator</strong> see if owning
                    a NestLove property works for you.
                </p>
            </div>
        </div>
    </div>
</section>

<!--in action-->
<section>
    <div class="row grey10 px">
        <div class="col-6 grey30 tail-left">
            <AspectRatio ratio="16x9" crop center relative pointer grey30>
                <div class=" absolute w100 h100" style="bottom:0;left:0;height:20%">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="text-white h100 px1 py1 ">
                        <path fill="currentColor"
                              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                              class=""></path>
                    </svg>
                </div>
            </AspectRatio>
        </div>
        <div class="col-1 grey30 mo-display-none"></div>
        <div class="col-4 off-1 pt9 pb8 mo-pt7 mo-pb7">
            <h3 class=" mb2 mo-mt2 mo-mb2">
                NestLove in Action
            </h3>
            <div class="font-1_25vw book mo-mb2">
                <p>Get a better grip on what NestLove is and how it can work for you, learn how to use the calculator
                    too!</p>
                <LinkArrow
                    class="font-0_77vw hover-blue decoration-none semibold text-black"
                    label="I'm ready to use the calculator"
                    url="/#/calculator"
                />
            </div>
        </div>
    </div>
</section>

<!--reviews-->
<section>
    {#each [
        {
            title: 'Brilliant Service',
            body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis '
        },
        {
            title: 'A Dream Come True',
            body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis '
        },
        {
            title: 'Awesome!',
            body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis '
        },
    ] as review }
    {/each}
</section>

<!--faqs-->
<section>
    <div class="row grey20 px pt6 pb7 mt4 mo-pt7 mo-pb7">
        <div class="col-5 off-1"><h5 class="book uc mb2 mo-font-0_77vw mo-normal">Faqs</h5>
            <h3 class="normal mb2 mo-mt2 mo-mb3 font-3_3vw mo-font-3_12vw">
                NestLove’s most
                <strong>frequently loved questions.</strong>
            </h3></div>
        <div class="off-1 col-4">
            <div>
                {#each [
                    {
                        q: 'Can we only buy one share in a property?',
                        a: 'No at NestLove our co-owners can buy one share or all the shares in the property'
                    },
                    {q: 'How does NestLove determine where it buys?', a: 'Lorem'},
                    {q: 'What about liquidity if I need to get out? ', a: 'Lorem'},
                    {q: 'I’m buying a Trust that owns a property?', a: 'Lorem'},
                    {q: 'Will NestLove lend money for the purchase?', a: 'Lorem'},
                    {q: 'Can I rent out my allocation to my property?', a: 'Lorem'},
                ] as faq }
                    <div>
                        <div class="flex between py1  mo-pt2 mo-pb1 mo-mb2 b-bot-grey50" q="{faq.q}"
                             a="{faq.a}"
                             style="cursor:pointer" show=""><h5 class="mb0">{faq.q}</h5><h5 class="mb0">
                            +</h5></div>
                        <div class="smooth-reveal">
                            <div><p class="pt1">{faq.a}</p></div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<!--gram-->
<section>
    <div class="row px mt4 mb4 mo-mt8 mo-mb4">
        <div class="col-6 off-3 center"><h3 class="font-3_3vw mo-font-3_12vw">Nestlovers on the <a
                class="text-black decoration-none hover-blue" href="https://www.instagram.com/thegraphicdesignschool/"
                target="_blank" rel="noopener">Gram</a></h3>
            <p class="font-1_25vw">Be the first to know when a new property is released.<br>Share the love with other
                NestLovers. @nestloveproperties</p>
        </div>
    </div>
    <div class="row px mb4 mo-mb4">
        {#each ['indy', 'stritt-P-Bungan-Headland-Residence-01-1100x825', 'pexels-vincent-rivaud-2233368', 'pixasquare-4ojhpgKpS68-unsplash'] as im, n }
            <div class="col-3 mb1 mo-mb0">
                <AspectRatio ratio="1x1" crop center>
                    <img class="cabs" src="/gram/{im}.png" alt="gram image {n}">
                </AspectRatio>
            </div>
        {/each}
    </div>
</section>

<!--forms-->
<Forms/>
