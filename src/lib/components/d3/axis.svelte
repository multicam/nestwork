<script>
  import {select, selectAll} from 'd3-selection';
  import {axisBottom, axisLeft} from 'd3-axis';

  export let width;
  export let height;
  export let margin;
  export let position;
  export let scale;
  let transform;
  let g;
  $: {
    select(g).selectAll('*').remove()

    let axis;
    switch (position) {
      case 'bottom':
        axis = axisBottom(scale).tickSizeOuter(0)
        transform = `translate(0, ${height - margin})`
        break
      case 'left':
        axis = axisLeft(scale).tickSizeOuter(0)
        transform = `translate(0, 0)`;
    }

    const ttmp = select(g).call(axis)

    ttmp.selectAll(".tick line")
      .attr("stroke", "rgba(12,33,80,0.8)")
      .attr("stroke-width", "3")
      .attr("opacity", ".8")

    ttmp.selectAll(".tick text")
      .attr("font-size", "16")
      .attr("font-weight", "600")

    switch(position) {
      case 'bottom':
        ttmp.selectAll(".tick text")
            .attr('dy', '-1em')
        ttmp.selectAll(".tick line")
            .attr('y2', '-.5em')
        break
      case 'left':
        ttmp.selectAll(".tick text")
            .attr('x', '0')
            .attr('dx', '70')
        ttmp.selectAll(".tick line")
          .attr('x2', '.5em')
        break
    }
  }
</script>

<g class='axis' bind:this={g} {transform}></g>
