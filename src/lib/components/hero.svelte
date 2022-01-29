<script>
    import AspectRatio from "./carbon/AspectRatio.svelte";
    import {fade} from 'svelte/transition'
    import {hslide} from './hslide2.js';
    import {onMount} from "svelte";

    const {min, max} = Math

    const slides = [
        {
            title: 'Property'
        },
        {
            title: 'Prestige Locations'
        },
        {
            title: 'Stunning&nbsp;Holiday Destinations'
        }
    ]

    let currentSlide = 0
    const transitionIn = { duration: 2000 }, transitionOut = { duration: 500 }

    function prev(e) {
        currentSlide = (--currentSlide) % slides.length
    }

    function next(e) {
        currentSlide = (++currentSlide) % slides.length
    }

    onMount(() => {
        let interval = setInterval(() => next(), transitionIn.duration)
        return () => clearInterval(interval)
    })

</script>

<div class="container">
    <AspectRatio ratio="16x9">
        <video
            src="/video/newport_video.mp4"
            autoplay
            muted
            playsinline
            loop
        ></video>
    </AspectRatio>
    <div class="slides row">
        <div class="slides-inner col-8 off-1">
            <div class="slide-prefix font-4_2vw bold">We love</div>
            {#each slides as slide, id}
                {#if id === currentSlide}
                    <div
                        class="slide"
                        in:hslide={transitionIn}
                        out:hslide={transitionOut}
                    >
                        <div class="title font-7_29vw semibold">{@html slides[currentSlide].title}</div>
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</div>
<style>

  .container {
    overflow: hidden;
    position: relative;
  }

  .slides {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .slides-inner {
    top: 18vw;
    position: relative;
    max-width: 1200px;
    padding: 4vw;
  }

  .slide {
    text-align: left;
    position: absolute;
  }

  .slide-prefix, .title {
    white-space: nowrap;
    color: snow!important;
    font-weight: 500;
    line-height: 1;
    text-shadow: 0 0 2vw rgba(0, 0, 0, .2);
  }


  .title {
    word-break: normal;
    white-space: normal;
  }

  video {
    width: calc(100%);
  }

</style>
