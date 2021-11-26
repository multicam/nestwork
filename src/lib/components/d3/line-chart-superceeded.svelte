<script>
  import {scaleTime, scaleLinear} from 'd3-scale';
  import {extent, max} from 'd3-array';
  import {line} from 'd3-shape';
  import Axis from './axis.svelte';

  const {log} = console

  export let data;
  let height = 600;
  let margin = 40;
  let width;

  $: xScale =
    scaleTime()
      .domain(extent(data, d => new Date(d.date)))
      .range([margin, width - margin]);

  $: yScale =
    scaleLinear()
      .domain([0, max(data, d => +d.value)])
      .range([height - margin, margin]);

  $: lineGenerator =
    line()
      .x(d => xScale(new Date(d.date)))
      .y(d => yScale(+d.value));

  const reveal =
    (node, {duration}) => {
      if (!xScale || !yScale) return;
      const length = node.getTotalLength();
      node.style.strokeDasharray = length;
      return {
        duration,
        css: (t, u) => `stroke-dashoffset: ${u * length}`
      };
    }


</script>

<div class='line-chart' style="width:100%" bind:clientWidth={width}>
    <pre>{width} | {height}</pre>
    {#if width && height }
        <svg width={width} height={height}>
            <Axis {width} {height} {margin} scale={xScale} position='bottom'/>
            <Axis {width} {height} {margin} scale={yScale} position='left'/>
            <path
                d={lineGenerator(data)}
                stroke='orangered'
                stroke-width={2}
                stroke-linecap='round'
                fill='none'
                in:reveal={{ duration: 800 }}
            />
        </svg>
    {/if}
</div>
