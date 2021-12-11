<script>
  import RangeSlider from "svelte-range-slider-pips";
  export let values = []
</script>
<RangeSlider
    bind:values
    springValues={{ stiffness: 0.12, damping: 0.7 }}
/>
<style>

    :root {
        --range-slider: #d7dada; /* slider main background color */
        --range-handle-inactive: #ad652c; /* inactive handle color */
        --range-handle: orange; /* non-focussed handle color */
        --range-handle-focus: orangered; /* focussed handle color */
        --range-handle-border: var(--range-handle);
        --range-range-inactive: var(--range-handle-inactive); /* inactive range bar background color */
        --range-range: var(--range-handle-focus); /* active range bar background color */
        --range-float-inactive: var(--range-handle-inactive); /* inactive floating label background color */
        --range-float: var(--range-handle-focus); /* floating label background color */
        --range-float-text: white; /* text color on floating label */
    }

    :global(.rangeSlider) {
        margin: 0;
    }

    :global(.rangeHandle:focus) {
        outline: none;
    }

</style>
