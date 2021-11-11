<script>
    import {formatPercent} from "$lib/utils";

    export let value, min, max, percent
    import SingleSlider from './single-slider-control.svelte'


</script>

<div>
    <SingleSlider bind:value/>
    <div>{percent ? formatPercent(Math.max(value,min))+'|'+formatPercent(Math.min(value,max)) : value}</div>
</div>
