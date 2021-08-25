<script>
    import SingleSlider from './single-slider.svelte'
    import DoubleSlider from './double-slider.svelte'
    export let min, max, value
</script>

<SingleSlider bind:value bind:min bind:max percent />
<DoubleSlider bind:start={min} bind:end={max}/>
