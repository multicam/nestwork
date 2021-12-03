<script>
  import AspectRatio from "./carbon/AspectRatio.svelte";
  import {hslide} from './hslide2.js';
  import {onMount} from "svelte";

  const {min,max} = Math

  const slides = [
    {
      title: 'Property'
    },
    {
      title: 'Prestige Locations'
    },
    {
      title: 'Stunning Holiday Destinations'
    }
  ]
  let currentSlide = 0
  const transitionArgs = {
    duration: 4000,
  }

  const clamp = (num, mini, maxi) => min(max(num, mini), maxi);

  function prev(e) {
    currentSlide = --currentSlide%slides.length
  }

  function next(e) {
    currentSlide = (++currentSlide)%slides.length
  }

  onMount(() => {
    let interval = setInterval(() => next(), 4000)
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
    <div class="slides">
        {#each slides as slide, id}
            {#if id === currentSlide}
                <div
                        class="slide"
                        in:hslide={transitionArgs}
                        out:hslide={transitionArgs}
                >
                    <div class="slide-prefix font-1_77vw bold">We love</div>
                    <div class="title font-7_29vw semibold">{slides[currentSlide].title}</div>
                </div>
            {/if}
        {/each}

    </div>
</div>
<style lang="scss">

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

    .slide {
        padding: 5vw;
        text-align: left;

        position: absolute;
        bottom: 0;
        right: 0;
    }

    .prefix, .title {
        white-space: nowrap;
        color: snow;
        line-height: 1;
        text-shadow: 0 0 2vw rgba(0, 0, 0, .2);
    }

    video {
        width: calc(100%);
    }

</style>
