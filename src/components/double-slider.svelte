<script>
  import DoubleSlider from './double-slider-control.svelte'

  export let start;
  export let end;

  const nice = d => {
    if (!d && d !== 0) return '';
    return d.toFixed(2);
  }

</script>

<div>
    <DoubleSlider bind:start bind:end />
    <div class="labels">
        <div class="label">{nice(start)}</div>
        <div class="label">{nice(end)}</div>
    </div>
</div>

<style>
    .labels {
        display: flex;
        justify-content: space-between;
    }
</style>
