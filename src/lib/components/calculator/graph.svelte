<script>
  import {scaleTime} from "d3-scale";

  export let data
  const {log} = console, {stringify} = JSON, {keys} = Object
  import Chart from '../d3/line-chart.svelte'

  let years = data.labelYears.map(i => `${i}-01-01`)
  let charData

  $: charData =
    keys(data).filter(i => i !== 'labelYears').reduce((r, i) => {
      r[i] = years.map((j, n) => ([ new Date(j), data[i][n] ]))
      return r
    }, {})

</script>
<Chart data={charData}/>
