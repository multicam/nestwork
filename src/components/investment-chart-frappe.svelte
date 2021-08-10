<script>
  import Chart from 'svelte-frappe-charts';

  export let property
  export let stats
  export let years

  const {stringify} = JSON, {log} = console

  $: log('---', data)

  const yearNow = new Date().getFullYear()

  const compound = (length, initial, rate) => {
    let acc = initial / (1 + rate), res = []
    while (length--) {
      acc *= 1. + rate
      res.push(Math.round(acc))
    }
    return res
  }

  $: data = {
    labels: new Array(years).fill(yearNow).map((i, n) => i + n),
    datasets: [
      {
        name: "5y Median",
        chartType: "line",
        values: compound(years, property.sharePrice, stats.median_5y),
      },
      {
        name: "10y Average",
        chartType: "line",
        values: compound(years, property.sharePrice, stats.average_10y_annual),
      },
    ],

    axisOptions: {
      xAxisMode: 'tick' // default: 'span'
    },

    // yMarkers: [{ label: "y Marker", value: 50 }],
    //
    // yRegions: [{ label: "y Region", start: -10, end: 10 }, { label: "hey", start: 40, end: 70 }]

  }

</script>

<Chart data={data} colors={['red','grey']}/>
<pre>{stringify({years, stats, property}, null, 2)}</pre>
