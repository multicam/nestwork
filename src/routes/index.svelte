<script context="module">
  export const prerender = true;
  import Hero from '../components/hero.svelte'
</script>
<script>
    import AspectRatio from "../components/carbon/AspectRatio.svelte";
</script>

<svelte:head>
    <title>NestLove | Investment | Lifestyle</title>
</svelte:head>

<section>
    <Hero/>
</section>

<!--// own-->
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
            <a class="font-0_77vw hover-blue decoration-none semibold text-black" href="/#/co-ownership-is-for-me">
                Is Co-ownership for you, find out more
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="ml1 mo-ml1"
                     style="top:0.15em;position:relative;height:1.1em;transform:rotate(-45deg);transform-origin:center center">
                    <path fill="currentColor"
                          d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
            </a>
        </div>
        <div class="col-4 off-1 pt9 pb9  mo-pt7 mo-pb7">
            <div class="font-1_25vw mo-mb2">
                <p>
                    Our target areas for property acquisition are prestige holiday locations around Australia. We create specific purpose Trusts for each home with 5 or 6 shares. We then vet and fund our co-owners (NestLovers) into each shareholding. NestLovers have the advantage of diversifying their property holdings into the most sought after areas in Australia. <strong>You own, we handle all the details. So that you together with your co-owners will enjoy 100% ownership of the home.</strong> NestLove does not retain any shares.
                </p>
            </div>
        </div>
    </div>
</section>

<!--// relax-->
<section>
    <div class="row  px mo-flex-col">
        <div class="col-4 off-1 pt9 pb9  mo-pt7 mo-pb7">
            <div class="font-1_25vw mo-mb2">
                <p>
                    You just show up and relax. We take care of the typical holiday homeownership hassles such as renovation, interior design, repairs, utilities and property management. So that you can look forward to booking your next holidays with our easy to use app and calendar. As part of our acquisition program NestLove takes care of furnishings to make sure properties meet our high standard of presentation. All ongoing property management is then seamlessly managed by NestLove to ensure you just show up and enjoy. <strong>You own, we handle all the details.</strong>
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
            <a class="flex font-0_77vw hover-blue decoration-none semibold text-black" href="/#/nestlovers">
                How NestLove takes care of NestLovers
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="ml1 mo-ml1"
                     style="top:0.15em;position:relative;height:1.1em;transform:rotate(-45deg);transform-origin:center center">
                    <path fill="currentColor"
                          d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
            </a>
        </div>
    </div>
</section>

<!--// property-->
<section>
    <div class="mt4 mb4 px row">
        <h2 class="col-12 normal mb0 text-center font-7_29vw">
            Property to NestLove
        </h2>
    </div>
    <div class="row px div mo-fw mo-between mb6">
        {#each ['image9','pexels-amanda-klamrowski-1464793','dusk_35_elaine'] as house}
            <div class="col-4 mb1 mo-mb0">
            <AspectRatio ratio="1x1" crop center>
                <img class="cabs" src="/property/{house}.png" alt="house 1">
            </AspectRatio>
            </div>
        {/each}
    </div>
</section>

<!--// enjoy-->
<section>
    <div class="row  px mo-flex-col">
        <div class="col-4 off-1 pt9 pb9 mo-pt7 mo-pb7">
            <h5 class="book uc mo-font-0_77vw mo-normal">
                Enjoy
            </h5>
            <h3 class="mo-mt2 mo-mb2 mt2 mb2">
                Holidays made easy. <strong>Investment Maximised.</strong>
            </h3>
            <a class="flex font-0_77vw hover-blue decoration-none semibold text-black" href="/#/nestlovers">
                Holidaying in your own NestLove
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="ml1 mo-ml1"
                     style="top:0.15em;position:relative;height:1.1em;transform:rotate(-45deg);transform-origin:center center">
                    <path fill="currentColor"
                          d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
            </a>
        </div>
        <div class="col-4 off-1 pt9 pb9  mo-pt7 mo-pb7">
            <div class="font-1_25vw mo-mb2">
                <p>
                    Through our world class booking platform and app co-owners can ensure that they can access their property in peak times throughout the year. <strong>No more paying for expensive holidays in the most sought after locations. You own it.</strong> NestLove also provides an annual expense statement to ensure the tax benefits of investment property are maximised.
                </p>
                <p>
                    NestLove has an easy to use exclusive co-ownership <strong>Expense Calculator</strong> see if owning a NestLove property works for you.
                </p>
            </div>
        </div>
    </div>
</section>

<!--in action-->
<section>
    <div class="row grey10 px">
        <div class="col-6 pt6 pb6 grey30 tail-left">
            <button class="video-modal__HoverButton-sc-1lm9vy-2 fCQoun h25vw relative pointer">
                <div data-gatsby-image-wrapper="" class="gatsby-image-wrapper h100 shadow-lite">
                    <div aria-hidden="true" style="padding-top: 71.5522%;"></div>
                    <img aria-hidden="true" data-placeholder-image="" decoding="async"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVQ4y2PQY9j0n5qYgeYG6jJshLP1GREYXY4oA2EaQLQOw8b/mgwb4BhmgR4jfoMZ0A3TgRrmJrf7f1P6xf/+mvv+24vuAMupM6wHG67PhN1HWL2szbDhf57fyf9GrJv/L+q7839u++3/Gxc8+u8ivet/oPb+/37q+/4rM6wDW4rsI5xeNmTZ/L8+6fz/ydXX/+9c9fR/W/al/6f3v/4/oeLa/2n1N8CWWQts/28tsA2r91G9zLgJ7CVLvm3/965//r8w6NT/LYsf/y8IPPV/95pn/7cuffy/q/DK/2jzQ/9zvE/8t+DZ+l8bn5cNmTf/l2VY/X9q3Y3/G+Y/+l8UfPp/X9nV/8ZsW/5ne5/4H2508L+t0Hawd20EtxMOQ1BgqzCs+5/peeJ/W84lcDgaMG8GG6DKsB4spwWNcRCNNwx1YYHMCIlN9IAHWYYcuzhjWZdh0z8Y1gPTG//pM276Z8AE4cPE9JDU4cMMemAbqIdBLvxCTQwAjl4pt/mAM4sAAAAASUVORK5CYII="
                         alt="" style="opacity: 0; transition: opacity 500ms linear 0s; object-fit: cover;">
                    <picture>
                        <source type="image/webp" srcset="/static/7c6da3209235cc7c06c540162545017a/d5219/video-thumbnail-the.webp 750w,
/static/7c6da3209235cc7c06c540162545017a/a1a58/video-thumbnail-the.webp 1080w,
/static/7c6da3209235cc7c06c540162545017a/a15f6/video-thumbnail-the.webp 1366w,
/static/7c6da3209235cc7c06c540162545017a/6cdc6/video-thumbnail-the.webp 1733w" sizes="100vw">
                        <img width="1" height="0.7155222158107329" data-main-image="" sizes="100vw" decoding="async"
                             src="/static/7c6da3209235cc7c06c540162545017a/bd41d/video-thumbnail-the.png" srcset="/static/7c6da3209235cc7c06c540162545017a/0c19c/video-thumbnail-the.png 750w,
/static/7c6da3209235cc7c06c540162545017a/5c916/video-thumbnail-the.png 1080w,
/static/7c6da3209235cc7c06c540162545017a/7333a/video-thumbnail-the.png 1366w,
/static/7c6da3209235cc7c06c540162545017a/bd41d/video-thumbnail-the.png 1733w" alt="video-thumbnail-the.png"
                             style="object-fit: cover; opacity: 1;"></picture>
                    <noscript></noscript>
                </div>
                <div class=" absolute w100 h100" style="bottom:0;left:0;height:20%">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="text-white h100 px1 py1 ">
                        <path fill="currentColor"
                              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                              class=""></path>
                    </svg>
                </div>
            </button>
        </div>
        <div class="col-1 grey30 mo-display-none"></div>
        <div class="col-4 off-1 pt9 pb8 mo-pt7 mo-pb7">
            <h3 class=" mb2 mo-mt2 mo-mb2">
                NestLove in Action
            </h3>
            <div class="font-1_25vw book mo-mb2">
                <p>Get a better grip on what NestLove is and how it can work for you, learn how to use the calculator too!</p>
                <a class="flex font-0_77vw hover-blue decoration-none semibold text-black" href="/#/nestlovers">
                    I'm ready to use the calculator
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="ml1 mo-ml1"
                         style="top:0.15em;position:relative;height:1.1em;transform:rotate(-45deg);transform-origin:center center">
                        <path fill="currentColor"
                              d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                    </svg>
                </a>

            </div>
        </div>
    </div>
</section>

<section>
<!--    <div id="" class="rich-blue px  row pt7 pb7  text-white mo-mb4 mo-mt0 mo-pt0 mo-pb0 mo-pr5 mo-pl5 ">-->
<!--        <div class="slick-slider star-reviews__StyledSlider-sc-1bx2mpz-1 bfUJHJ slick-initialized" dir="ltr">-->
<!--            <div class="slick-list">-->
<!--                <div class="slick-track" style="width: 11700px; opacity: 1; transform: translate3d(-1404px, 0px, 0px);">-->
<!--                    <div data-index="-3" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Thank you-->
<!--                                TGDS!!</h4>-->
<!--                                <p class="mb2">Everything was well laid out and the support from the staff and teachers-->
<!--                                    was fantastic. I thought long and hard before enrolling on which school would be-->
<!--                                    best for me but I'm very glad I chose The Graphic Design School.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="-2" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Highly-->
<!--                                Recommended</h4>-->
<!--                                <p class="mb2">I couldn't recommend a course more highly!! The staff were absolutely-->
<!--                                    incredible and always helped when you needed. The content was very interesting and-->
<!--                                    covered a broad range of design projects.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="-1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Super-->
<!--                                Helpful</h4>-->
<!--                                <p class="mb2">I LOVED my studies at the Graphic Design School! Especially throughout-->
<!--                                    the whole Covid thing, me and my studies wasn’t bothered at all by that! I learned-->
<!--                                    everything that was initially planned and the tutors are super helpful!</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false"-->
<!--                         style="outline: none; width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Brilliant-->
<!--                                Course</h4>-->
<!--                                <p class="mb2">Any folks wanting to expand their learning in a practical and creative-->
<!--                                    way then this is the course for you. The course is all kinds of awesomeness and I-->
<!--                                    highly recommend it!</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="1" class="slick-slide slick-active" tabindex="-1" aria-hidden="false"-->
<!--                         style="outline: none; width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Awesome-->
<!--                                Support</h4>-->
<!--                                <p class="mb2">I was able to work from home after the course. I also didn’t ever feel-->
<!--                                    alone, I was always on the forum and teacher’s portal working through any-->
<!--                                    challenges.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="2" class="slick-slide slick-active" tabindex="-1" aria-hidden="false"-->
<!--                         style="outline: none; width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Study-->
<!--                                Anywhere</h4>-->
<!--                                <p class="mb2">You can take it anywhere with you and it ﬁts in nicely with the rest of-->
<!--                                    life. I now work as a freelance designer in my hometown of Melbourne.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="3" class="slick-slide" tabindex="-1" aria-hidden="true"-->
<!--                         style="outline: none; width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Highly-->
<!--                                Recommended</h4>-->
<!--                                <p class="mb2">TGDS worked with me and took the time for me to understand the course-->
<!--                                    before signing up. They made me feel like I was in good hands, they even helped me-->
<!--                                    with the important decision of which Mac to buy!</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="4" class="slick-slide" tabindex="-1" aria-hidden="true"-->
<!--                         style="outline: none; width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Amazing-->
<!--                                Support</h4>-->
<!--                                <p class="mb2">The best international on-line design school you could ever ask for,-->
<!--                                    especially during the lockdown. The theory is structured very thoughtful, the video-->
<!--                                    tutorials are really helpful, especially if English is not your native language.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="5" class="slick-slide" tabindex="-1" aria-hidden="true"-->
<!--                         style="outline: none; width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Fun &amp;-->
<!--                                Helpful</h4>-->
<!--                                <p class="mb2">Simply put, I would not have been able to study graphic design in depth-->
<!--                                    and at this level, if the TDGS wasn’t around. I really appreciate the availability-->
<!--                                    of such a program and the flexibility that it offers.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="6" class="slick-slide" tabindex="-1" aria-hidden="true"-->
<!--                         style="outline: none; width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Loved my-->
<!--                                time at TGDS</h4>-->
<!--                                <p class="mb2">The Tutors and Support staff are all gems, and are always willing to help-->
<!--                                    you out at any time. I loved my time at TGDS ... if anyone is looking for a future-->
<!--                                    involving graphic design - TGDS is a must!</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="7" class="slick-slide" tabindex="-1" aria-hidden="true"-->
<!--                         style="outline: none; width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Unbelievable-->
<!--                                Kind</h4>-->
<!--                                <p class="mb2">I had the best experience studying with TGDS. The content and whole-->
<!--                                    learning system was amazing, I have advanced such a long way in my skills and-->
<!--                                    knowledge of Graphic Design since undertaking this course.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="8" class="slick-slide" tabindex="-1" aria-hidden="true"-->
<!--                         style="outline: none; width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Thank you-->
<!--                                TGDS!!</h4>-->
<!--                                <p class="mb2">Everything was well laid out and the support from the staff and teachers-->
<!--                                    was fantastic. I thought long and hard before enrolling on which school would be-->
<!--                                    best for me but I'm very glad I chose The Graphic Design School.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="9" class="slick-slide" tabindex="-1" aria-hidden="true"-->
<!--                         style="outline: none; width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Highly-->
<!--                                Recommended</h4>-->
<!--                                <p class="mb2">I couldn't recommend a course more highly!! The staff were absolutely-->
<!--                                    incredible and always helped when you needed. The content was very interesting and-->
<!--                                    covered a broad range of design projects.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="10" class="slick-slide" tabindex="-1" aria-hidden="true"-->
<!--                         style="outline: none; width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Super-->
<!--                                Helpful</h4>-->
<!--                                <p class="mb2">I LOVED my studies at the Graphic Design School! Especially throughout-->
<!--                                    the whole Covid thing, me and my studies wasn’t bothered at all by that! I learned-->
<!--                                    everything that was initially planned and the tutors are super helpful!</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="11" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Brilliant-->
<!--                                Course</h4>-->
<!--                                <p class="mb2">Any folks wanting to expand their learning in a practical and creative-->
<!--                                    way then this is the course for you. The course is all kinds of awesomeness and I-->
<!--                                    highly recommend it!</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="12" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Awesome-->
<!--                                Support</h4>-->
<!--                                <p class="mb2">I was able to work from home after the course. I also didn’t ever feel-->
<!--                                    alone, I was always on the forum and teacher’s portal working through any-->
<!--                                    challenges.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="13" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Study-->
<!--                                Anywhere</h4>-->
<!--                                <p class="mb2">You can take it anywhere with you and it ﬁts in nicely with the rest of-->
<!--                                    life. I now work as a freelance designer in my hometown of Melbourne.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="14" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Highly-->
<!--                                Recommended</h4>-->
<!--                                <p class="mb2">TGDS worked with me and took the time for me to understand the course-->
<!--                                    before signing up. They made me feel like I was in good hands, they even helped me-->
<!--                                    with the important decision of which Mac to buy!</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="15" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Amazing-->
<!--                                Support</h4>-->
<!--                                <p class="mb2">The best international on-line design school you could ever ask for,-->
<!--                                    especially during the lockdown. The theory is structured very thoughtful, the video-->
<!--                                    tutorials are really helpful, especially if English is not your native language.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="16" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Fun &amp;-->
<!--                                Helpful</h4>-->
<!--                                <p class="mb2">Simply put, I would not have been able to study graphic design in depth-->
<!--                                    and at this level, if the TDGS wasn’t around. I really appreciate the availability-->
<!--                                    of such a program and the flexibility that it offers.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="17" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Loved my-->
<!--                                time at TGDS</h4>-->
<!--                                <p class="mb2">The Tutors and Support staff are all gems, and are always willing to help-->
<!--                                    you out at any time. I loved my time at TGDS ... if anyone is looking for a future-->
<!--                                    involving graphic design - TGDS is a must!</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="18" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Unbelievable-->
<!--                                Kind</h4>-->
<!--                                <p class="mb2">I had the best experience studying with TGDS. The content and whole-->
<!--                                    learning system was amazing, I have advanced such a long way in my skills and-->
<!--                                    knowledge of Graphic Design since undertaking this course.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="19" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Thank you-->
<!--                                TGDS!!</h4>-->
<!--                                <p class="mb2">Everything was well laid out and the support from the staff and teachers-->
<!--                                    was fantastic. I thought long and hard before enrolling on which school would be-->
<!--                                    best for me but I'm very glad I chose The Graphic Design School.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="20" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Highly-->
<!--                                Recommended</h4>-->
<!--                                <p class="mb2">I couldn't recommend a course more highly!! The staff were absolutely-->
<!--                                    incredible and always helped when you needed. The content was very interesting and-->
<!--                                    covered a broad range of design projects.</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div data-index="21" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"-->
<!--                         style="width: 468px;">-->
<!--                        <div>-->
<!--                            <div class="col-12 center pr2 pl2 x" tabindex="-1"-->
<!--                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Super-->
<!--                                Helpful</h4>-->
<!--                                <p class="mb2">I LOVED my studies at the Graphic Design School! Especially throughout-->
<!--                                    the whole Covid thing, me and my studies wasn’t bothered at all by that! I learned-->
<!--                                    everything that was initially planned and the tutors are super helpful!</p>-->
<!--                                <div class="flex between pr8 pl8 pt0_5 mt1">-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"-->
<!--                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"-->
<!--                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">-->
<!--                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>-->
<!--                                    </svg>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
</section>

<section>
    {#each [
        { title: 'Brilliant Service', body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis ' },
        { title: 'A Dream Come True', body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis ' },
        { title: 'Awesome!', body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis ' },
    ] as review }
    {/each}
</section>
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

                    </div>
                {/each}
                <div>
                    <div class="flex between py1  mo-pt2 mo-pb1 mo-mb2 b-bot-grey50" q="Can we only buy one share in a property?"
                         a="No at NestLove our co-owners can buy one share or all the shares in the property."
                         style="cursor:pointer" show=""><h5 class="mb0">Can we only buy one share in a property?</h5><h5 class="mb0">
                        +</h5></div>
                    <div class="smooth-reveal__StyledSmoothShow-sc-6jq5gk-0 ceGycN">
                        <div class="home__Div-sc-19rx2jc-0 bLnZOJ"><p class="pt1">No at NestLove our co-owners can buy one share or all the shares in the property.</p></div>
                    </div>
                </div>
                <div>
                    <div class="flex between py1  mo-pt2 mo-pb1 mo-mb2 b-bot-grey50"
                         q="What is the criteria for enrolling?"
                         a="You must be 18 and over.<br/> <br/>  We like to talk to all students before they enrol, choosing the right course requires a tailored approach. Reach out us via <a href='mailto:info@thegraphicdesignschool.com'>email</a> or if you're a Chatty Cathy (take's one to know one) request a callback in the form found in our footer. <br/> <br/> If you've read this website backwards and forwards and would like the more nitty-gritty stuff, our <a href='/student-handbook'>support page</a> is where the nits and grits live. <br/> <br/> Web design students must be qualified graphic designers or experience developers to enrol, if you are unsure about your eligibility please contact us."
                         style="cursor:pointer" show=""><h5 class="mb0">What is the criteria for enrolling?</h5><h5
                            class="mb0">+</h5></div>
                    <div class="smooth-reveal__StyledSmoothShow-sc-6jq5gk-0 ceGycN">
                        <div class="home__Div-sc-19rx2jc-0 bLnZOJ"><p class="pt1">You must be 18 and over.<br> <br> We
                            like to talk to all students before they enrol, choosing the right course requires a
                            tailored approach. Reach out us via <a
                                    href="mailto:info@thegraphicdesignschool.com">email</a> or if you're a Chatty Cathy
                            (take's one to know one) request a callback in the form found in our footer. <br> <br> If
                            you've read this website backwards and forwards and would like the more nitty-gritty stuff,
                            our <a href="/student-handbook">support page</a> is where the nits and grits live. <br> <br>
                            Web design students must be qualified graphic designers or experience developers to enrol,
                            if you are unsure about your eligibility please contact us.</p></div>
                    </div>
                </div>
                <div>
                    <div class="flex between py1  mo-pt2 mo-pb1 mo-mb2 b-bot-grey50" q="Do I need previous experience?"
                         a="There’s no need to have any prior knowledge for our graphic design courses. We'll teach you from the ground up you’ll gain all the knowledge and skills you need to become a graphic designer, as well as learning the major design software packages Adobe Illustrator, Photoshop and InDesign.<br/> <br/> Please note the Design@Work course teaches only InDesign. <br/> <br/> Web design students must be qualified graphic designers or experience developers to enrol, if you are unsure about your eligibility please contact us."
                         style="cursor:pointer" show=""><h5 class="mb0">Do I need previous experience?</h5><h5
                            class="mb0">+</h5></div>
                    <div class="smooth-reveal__StyledSmoothShow-sc-6jq5gk-0 ceGycN">
                        <div class="home__Div-sc-19rx2jc-0 bLnZOJ"><p class="pt1">There’s no need to have any prior
                            knowledge for our graphic design courses. We'll teach you from the ground up you’ll gain all
                            the knowledge and skills you need to become a graphic designer, as well as learning the
                            major design software packages Adobe Illustrator, Photoshop and InDesign.<br> <br> Please
                            note the Design@Work course teaches only InDesign. <br> <br> Web design students must be
                            qualified graphic designers or experience developers to enrol, if you are unsure about your
                            eligibility please contact us.</p></div>
                    </div>
                </div>
                <div>
                    <div class="flex between py1  mo-pt2 mo-pb1 mo-mb2 b-bot-grey50" q="How do I enrol?"
                         a="Enrolment is easy, you may enrol any day of the year. Be online and studing within a matter of seconds after enrolling through our <a href='/prices'>enrolments page</a>. <br/> <br/> If you need to pay the CUA40720 Certificate IV in Design course upfront you may only do so through a registered business (individuals must use the payment plan on the enrolments page). Please contact our <a href='mailto:accounts@thegraphicdesignschool.com'>accounts team</a> with your full name and business details and we will issue you an invoice. <br/> <br/> If you need an invoice or a quote before you enrol, please contact our <a href='mailto:accounts@thegraphicdesignschool.com'>accounts team</a>."
                         style="cursor:pointer" show=""><h5 class="mb0">How do I enrol?</h5><h5 class="mb0">+</h5></div>
                    <div class="smooth-reveal__StyledSmoothShow-sc-6jq5gk-0 ceGycN">
                        <div class="home__Div-sc-19rx2jc-0 bLnZOJ"><p class="pt1">Enrolment is easy, you may enrol any
                            day of the year. Be online and studing within a matter of seconds after enrolling through
                            our <a href="/prices">enrolments page</a>. <br> <br> If you need to pay the CUA40720
                            Certificate IV in Design course upfront you may only do so through a registered business
                            (individuals must use the payment plan on the enrolments page). Please contact our <a
                                    href="mailto:accounts@thegraphicdesignschool.com">accounts team</a> with your full
                            name and business details and we will issue you an invoice. <br> <br> If you need an invoice
                            or a quote before you enrol, please contact our <a
                                    href="mailto:accounts@thegraphicdesignschool.com">accounts team</a>.</p></div>
                    </div>
                </div>
                <div>
                    <div class="flex between py1  mo-pt2 mo-pb1 mo-mb2 b-bot-grey50" q="When can I start my studies?"
                         a="You may enrol any day of the year. Be online and studing within a matter of seconds after enrolling through our <a href='/prices'>enrolments page</a>."
                         style="cursor:pointer" show=""><h5 class="mb0">When can I start my studies?</h5><h5
                            class="mb0">+</h5></div>
                    <div class="smooth-reveal__StyledSmoothShow-sc-6jq5gk-0 ceGycN">
                        <div class="home__Div-sc-19rx2jc-0 bLnZOJ"><p class="pt1">You may enrol any day of the year. Be
                            online and studing within a matter of seconds after enrolling through our <a href="/prices">enrolments
                                page</a>.</p></div>
                    </div>
                </div>
                <div>
                    <div class="flex between py1  mo-pt2 mo-pb1 mo-mb2 b-bot-grey50"
                         q="Will I graduate with a portfolio?"
                         a="In Module 11 of the Intensive Foundation Course and the CUA40720 Certificate IV in Design course you will focus on creating your portfolio.<br/> <br/>  Want to see what other students have produced in Module 11? Check out our <a href='/students'>student work</a>."
                         style="cursor:pointer" show=""><h5 class="mb0">Will I graduate with a portfolio?</h5><h5
                            class="mb0">+</h5></div>
                    <div class="smooth-reveal__StyledSmoothShow-sc-6jq5gk-0 ceGycN">
                        <div class="home__Div-sc-19rx2jc-0 bLnZOJ"><p class="pt1">In Module 11 of the Intensive
                            Foundation Course and the CUA40720 Certificate IV in Design course you will focus on
                            creating your portfolio.<br> <br> Want to see what other students have produced in Module
                            11? Check out our <a href="/students">student work</a>.</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <a href="/calculator">Go to Calculator</a>
</section>
