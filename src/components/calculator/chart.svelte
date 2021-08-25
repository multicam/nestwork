<script>
  import Chart from 'svelte-frappe-charts';

  let data = {
    labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am", "12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am" ],
    datasets: [
      {
        name: "Some Data",
        chartType: "line",
        values: [ 25, 40, 30, 35, 8, 52, 17, -4 ],
      },
      {
        name: "Another Set",
        chartType: "line",
        values: [ 25, 55, -10, 15, 18, 32, 27, 14 ],
      }
    ],

    yMarkers: [{ label: "y Marker", value: 50 }],

    yRegions: [{ label: "y Region", start: -10, end: 10 }, { label: "hey", start: 40, end: 70 }]

  }

</script>

<Chart data={data} colors={['red','grey']}/>
