<script>
    import {scaleTime} from "d3-scale";

    export let data
    const {log} = console, {stringify} = JSON
    import Chart from '../d3/line-chart.svelte'

    let years = data.labelYears.map(i => `${i}-01-01`)

    $: charData = data.labelYears.map(i => `${i}-01-01`).map((i,n) => ({
      date: i,
      value: data.costBase[n]
    }))

    $: log(charData)

</script>
<Chart data={charData} />
