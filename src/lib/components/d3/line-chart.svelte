<script>
  import {scaleTime, scaleLinear} from 'd3-scale';
  import {extent, max} from 'd3-array';
  import {line} from 'd3-shape';
  import Axis from './axis.svelte';

  const {log} = console, {keys, values} = Object, {stringify} = JSON

  export let data;
  let height = 600;
  let margin = 40;
  let width;

  $: xScale = data =>
    scaleTime()
      .domain(extent(data, d => new Date(d.date)))
      .range([margin, width - margin]);

  $: yScale = data =>
    scaleLinear()
      .domain([0, max(data, d => +d.value)])
      .range([height - margin, margin]);

  $: lineGenerator =
    line()
      .x(d => xScale(new Date(d.date)))
      .y(d => yScale(+d.value));

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
    return data[k].map(i => [
      new Date(i.date),
      i.value
    ])
  })

  const colors = [
    'blue',
    'orangered',
    'green'
  ]
</script>
<!--{#each keys(data) as k}-->
<!--&lt;!&ndash;    <pre>{stringify(data[k])}</pre>&ndash;&gt;-->
<!--    <div>{lineGenerator(data[k])}</div>-->
<!--{/each}-->

{#if data}
    <div class='line-chart' style="width:100%" bind:clientWidth={width}>
        {#if width && height }
            <svg width={width} height={height}>

                <Axis {width} {height} {margin} scale={xScale(data.costBase)} position='bottom'/>
                <Axis {width} {height} {margin} scale={yScale(data.equity3y)} position='left'/>

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
