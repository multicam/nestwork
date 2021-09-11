<script>
    export let property
    const {log} = console

    $: current = 0

    const goPrevious = () => {
        current = (current - 1) % property.images.length
    }

    const goNext = () => {
        current = (current + 1) % property.images.length
    }

</script>

<div class="listing-gallery">
    <div class="listing-gallery__current-image">
        <div class="listing-gallery__current-image-scroll ">

            {#each property.images as image,n }
                <div class="listing-gallery__current-image-item" class:_active={n === current}>
                    <img alt="{property.address} {n+1}" class="lazy-load _loaded" importance="high"
                         data-src="/property/{property.slug}/{image}.jpg"
                         data-type="gallery" data-watermark=""
                         src="/property/{property.slug}/{image}.jpg" >
                </div>
            {/each}
        </div>
        <div class="listing-gallery__controls">
            <button class="listing-gallery__toggle_fullscreen" aria-label="Toggle Fullscreen">
                <svg viewBox="0 0 24 24">
                    <path d="M3 3V9.75H4.5V5.55L10.95 12L4.5 18.45V14.25H3V21H9.75V19.5H5.55L12 13.05L18.45 19.5H14.25V21H21V14.25H19.5V18.45L13.05 12L19.5 5.55V9.75H21V3H14.25V4.5H18.45L12 10.95L5.55 4.5H9.75V3H3Z"></path>
                </svg>

            </button>
            <button class="listing-gallery__arrow _left" on:click={goPrevious}>
                <svg class="icon" width="8" height="12" viewBox="0 0 8 12">
                    <use xlink:href="#arrow-left"></use>
                </svg>
            </button>
            <button class="listing-gallery__arrow _right" on:click={goNext}>
                <svg class="icon" width="8" height="12" viewBox="0 0 8 12">
                    <use xlink:href="#arrow-right"></use>
                </svg>
            </button>
            <div class="listing-gallery__counter">
                1 / 37
            </div>
            <div class="listing-gallery__more">
                <svg viewBox="0 0 20 20">
                    <path d="M1.25 3.125V16.875H18.75V3.125H1.25ZM2.5 4.375H17.5V13.0625L14.1875 9.75L13.75 9.3125L10.9375 12.125L7.3125 8.5L6.875 8.0625L2.5 12.4375V4.375ZM15 5.625C14.3125 5.625 13.75 6.1875 13.75 6.875C13.75 7.5625 14.3125 8.125 15 8.125C15.6875 8.125 16.25 7.5625 16.25 6.875C16.25 6.1875 15.6875 5.625 15 5.625ZM6.875 9.8125L12.625 15.625H2.5V14.1875L6.875 9.8125ZM13.75 11.0625L17.5 14.8125V15.625H14.375L11.75 13L13.75 11.0625Z"></path>
                </svg>
                View 37 images
            </div>
        </div>
    </div>

    <div class="listing-gallery__images px">

        {#each property.images as image, n}
            <div class="listing-gallery__image" class:_active={n === current}>
                <img class="lazy-load _loaded" alt="House {n+1}"
                     data-src="/property/{property.slug}/{image}-thumb.jpg"
                     src="/property/{property.slug}/{image}-thumb.jpg" >
            </div>
        {/each}

    </div>
</div>

<style lang="scss">

  .listing-gallery {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    --images-count: 4;
    --transition-duration: 300ms;
    --previews-height: calc((100vw / var(--images-count) * .6 - var(--previews-offset)));
    --previews-offset: 1vw;
    --main-image-height: calc(100% - (var(--previews-height) + var(--previews-offset)))
  }

  .listing-gallery__current-image {
    position: relative;
    height: var(--main-image-height);
    min-height: var(--main-image-height);
    max-height: var(--main-image-height);

    @media (max-width: 1199px) {
      height: calc(100vw * 0.5);
      max-height: calc(100vh * 0.5)
    }
  }

  .listing-gallery__current-image-scroll {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-wrap: nowrap;
    position: relative
  }

  .listing-gallery__current-image-item {
    flex: 1;
    display: flex;
    min-width: 100%;
    min-height: 100%;
    align-items: center;
    justify-content: center;
    background-color: #efefef;
    transition: opacity var(--transition-duration) cubic-bezier(0.41, 0.98, 0.76, 1.01);
    background-size: cover;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover
    }

    //&:nth-child(2) {
    //  padding-left: 1px
    //}
    //
    //&._active {
    //  padding-left: 0
    //}

    &._no-background {
      background: none
    }

    &._video .video {
      padding: 0;
      width: 100%;
      height: 100%;
      min-height: 250px;
      position: relative;

      iframe {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%
      }
    }
  }

  .listing-gallery__toggle_fullscreen {
    top: 20px;
    right: 20px;
    position: absolute;
    background: #fff;
    border: none;
    width: 40px;
    height: 40px;
    padding: 8px;
    box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #151515;
    outline: none;

    @media (max-width: 1199px) {
      display: none
    }
  }

  @media (min-width: 1200px) {
    .listing-gallery:hover .listing-gallery__arrow {
      display: flex
    }
  }

  .listing-gallery__arrow {
    top: 50%;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    display: none;
    padding: 0;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: #2C2C2C;
    background-color: #fff;
    position: absolute;
    transform: translateY(-50%);
    box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &._left {
      left: 20px
    }

    &._right {
      right: 20px
    }

    & svg {
      width: 8px;
      height: 12px;
      stroke: currentColor
    }

    @media (max-width: 1199px) {
      display: none
    }
  }

  .listing-gallery__counter, .listing-gallery__more {
    background: rgba(21, 21, 21, 0.8);
    border-radius: 100px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 3px 14px;
    //font: normal 500 12px/20px var(--font-sans);
    color: white;
    right: 20px;
    bottom: 22px;
    position: absolute;
    display: flex;
    pointer-events: none
  }

  .listing-gallery__counter svg,
  .listing-gallery__more svg {
    width: 20px;
    height: 20px;
    margin-right: 10px
  }

  @media (max-width: 1199px) {
    .listing-gallery__counter {
      display: none
    }
  }

  .listing-gallery__more {
    left: 20px;
    right: auto;
    padding: 8px 12px;
    bottom: 16px
  }

  @media (min-width: 1200px) {
    .listing-gallery__more {
      display: none
    }
  }

  .listing-gallery__images {
    overflow: hidden;
    display: grid;
    height: var(--previews-height);
    padding-top: 10px;
    position: relative;
    box-sizing: content-box;
    grid-auto-flow: column;
    grid-auto-columns: calc((100% - 10px * (var(--images-count) - 1)) / var(--images-count));
    grid-auto-rows: var(--previews-height);
    grid-column-gap: 10px;

    @media (max-width: 1199px) {
      display: none
    }
  }

  .listing-gallery__image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: #efefef
  }

  .listing-gallery__image > img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover
  }

  .listing-gallery__image svg {
    position: absolute;
    width: 24px;
    height: 24px;
    color: white;
    z-index: 1
  }

  .listing-gallery__image._video svg {
    width: 40px;
    height: 40px
  }

    .listing-gallery__image._active > img {
      transition: opacity 300ms linear;
      opacity: 0.3
    }





  .listing-gallery._fullscreen {
    --images-count: 11;
    --previews-height: 80px
  }

  @media (max-width: 1199px) {
    .listing-gallery:not(._fullscreen) .listing-gallery__current-image-item._video {
      display: none
    }
  }

  @media (max-width: 1199px) {
    .listing-gallery._fullscreen .listing-gallery__current-image {
      min-width: 0;
      display: block;
      height: 100%;
      max-height: initial
    }
  }

  .listing-gallery._fullscreen .listing-gallery__current-image-scroll {
    width: calc(100% - 170px);
    max-width: 1600px;
    margin: 0 auto
  }

  @media (max-width: 1199px) {
    .listing-gallery._fullscreen .listing-gallery__current-image-scroll {
      width: 100%;
      display: block;
      height: 100%;
      margin: 0;
      overflow-x: hidden;
      overflow-y: auto
    }
  }

  .listing-gallery._fullscreen .listing-gallery__current-image-item {
    background-color: transparent
  }

  @media (max-width: 1199px) {
    .listing-gallery._fullscreen .listing-gallery__current-image-item {
      width: 100%;
      min-height: 0
    }
  }

  .listing-gallery._fullscreen .listing-gallery__current-image-item > img {
    -o-object-fit: contain;
    object-fit: contain
  }

  @media (max-width: 1199px) {
    .listing-gallery._fullscreen .listing-gallery__current-image-item + .listing-gallery__current-image-item {
      margin-top: var(--offset-s)
    }
  }

  .listing-gallery._fullscreen .listing-gallery__counter, .listing-gallery._fullscreen .listing-gallery__more, .listing-gallery._fullscreen .listing-gallery__toggle_fullscreen {
    display: none
  }

  .listing-gallery._fullscreen .listing-gallery__image._active {
    background: #151515
  }

  .listing-gallery._fullscreen .listing-gallery__arrow {
    background: none;
    width: 80px;
    height: 120px;
    border-radius: 0;
    box-shadow: none;
    right: -16px;
    color: #fff;
    cursor: pointer
  }

  @media (min-width: 1200px) {
    .listing-gallery._fullscreen .listing-gallery__arrow {
      display: flex
    }
  }

  .listing-gallery._fullscreen .listing-gallery__arrow svg {
    width: 40px;
    height: 40px;
    stroke: none;
    fill: currentColor
  }

  .listing-gallery._fullscreen .listing-gallery__arrow._left {
    left: -10px
  }

  .listing-gallery._fullscreen .listing-gallery__arrow._right {
    right: -10px
  }

  .listing-gallery__overlay {
    top: 0;
    left: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    z-index: 1000;
    position: fixed;
    background-color: #151515;
    transform: scale(1.05);
    transition: transform 200ms cubic-bezier(0.41, 0.98, 0.76, 1.01), opacity 200ms cubic-bezier(0.41, 0.98, 0.76, 1.01);
  }

  @media (max-width: 1199px) {
    .listing-gallery__overlay {
      background-color: #fff
    }
  }

  .listing-gallery__overlay._visible {
    opacity: 1;
    transform: scale(1)
  }

  .listing-gallery__overlay-wrapper {
    padding: 0 10px 10px;
    height: calc(100% - 80px);
    box-sizing: border-box
  }

  @media (max-width: 1199px) {
    .listing-gallery__overlay-wrapper {
      height: calc(100% - 48px);
      padding: 0
    }
  }


</style>
