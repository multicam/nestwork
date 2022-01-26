<script>
  import {scaleTime, scaleLinear} from 'd3-scale';
  import {extent, max} from 'd3-array';
  import {line} from 'd3-shape';
  import Axis from './axis.svelte';

  const {log} = console, {keys, values} = Object, {stringify} = JSON

  export let data;
  export let setScaleY

  let height = 600;
  let margin = 10;
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

  $: dataPrint = keys(data).map(k => {
    return data[k].map(i => [xScale(i[0]), yScale(i[1])])
  })

  const colors = [
    '#253d98',
    'orangered',
    'red'
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
                        stroke-width={4}
                        stroke-linecap='round'
                        fill='none'
                    />
                    <pre>{stringify(d)}</pre>
                {/each}

            </svg>
        {/if}
    </div>

{/if}
