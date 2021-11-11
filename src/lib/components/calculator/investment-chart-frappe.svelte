<script>
  import Chart from 'svelte-frappe-charts';
  import {compound} from '$lib/financials'
  import {formatMoney} from "$lib/utils";

  export let years
  export let property
  export let stats

  const {stringify} = JSON, {log} = console

  // $: log('---', data)

  const yearNow = new Date().getFullYear()

  $: data = {
    labels: new Array(years).fill(yearNow).map((i, n) => i + n),
    datasets: [

      {
        name: "10y Average",
        chartType: "line",
        values: compound(years, property.purchasePrice, stats.average_10y_annual),
      },

    ],

    axisOptions: {
      xAxisMode: 'tick' // default: 'span'
    },

  }

</script>
<table>
    <tr class="bold text-right">
        <td>&nbsp;</td>
        {#each data.labels as year }
            <td>{year}</td>
        {/each}
    </tr>
    <tr>
        <td>
            <strong>Property Value</strong>
        </td>
        {#each data.datasets[0].values as val }
            <td class="text-mono">{formatMoney(val)}</td>
        {/each}
    </tr>
</table>
<Chart data={data} colors={['red','grey']}/>
<!--<pre>{stringify({years, stats, property}, null, 2)}</pre>-->
