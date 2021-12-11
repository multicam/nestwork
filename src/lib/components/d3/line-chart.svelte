<script>
  import {scaleTime, scaleLinear} from 'd3-scale';
  import {extent, max} from 'd3-array';
  import {line} from 'd3-shape';
  import Axis from './axis.svelte';

  const {log} = console, {keys, values} = Object, {stringify} = JSON

  export let data;
  export let setScaleY

  let height = 600;
  let margin = 80;
  let width;

  $: xScale =
    scaleTime()
      .domain(extent(data.equity3y, d => d[0]))
      .range([margin, width - margin]);

  $: yScale =
    setScaleY ?
      scaleLinear()
        .domain([0, setScaleY])
        .range([height - margin, margin]) :
      scaleLinear()
        .domain([0, max(data.equity3y, d => +d[1])])
        .range([height - margin, margin])

  $: lineGenerator =
    line()
      .x(d => xScale(d[0]))
      .y(d => yScale(+d[1]));

  // const reveal =
  //   (node, {duration}) => {
  //     if (!xScale || !yScale) return;
  //     const length = node.getTotalLength();
  //     node.style.strokeDasharray = length;
  //     return {
  //       duration,
  //       css: (t, u) => `stroke-dashoffset: ${u * length}`
  //     };
  //   }

  $: dataPrint = keys(data).map(k => {
    return data[k].map(i => [xScale(i[0]), yScale(i[1])])
  })

  const colors = [
    'blue',
    'orangered',
    'green'
  ]
</script>

{#if data}
    <div class='line-chart' style="width:100%" bind:clientWidth={width}>
        {#if width && height }
            <svg width={width} height={height}>

                <Axis {width} {height} {margin} scale={xScale} position='bottom'/>
                <Axis {width} {height} {margin} scale={yScale} position='left'/>

                {#each dataPrint as d, i}
                    <path
                            d={line()(d)}
                            stroke={colors[i]}
                            stroke-width={2}
                            stroke-linecap='round'
                            fill='none'
                    />
                {/each}

            </svg>
        {/if}
    </div>
{/if}
