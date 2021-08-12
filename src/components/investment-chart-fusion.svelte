<script>
  // import FusionCharts from 'fusioncharts';
  // import Maps from 'fusioncharts/fusioncharts.maps';
  // import World from 'fusioncharts/maps/fusioncharts.world';
  // import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
  // import SvelteFC, { fcRoot } from 'svelte-fusioncharts';

  // Always set FusionCharts as the first parameter
  // fcRoot(FusionCharts, Maps, World, FusionTheme);
  import {compound} from '$lib/financials'

  export let property
  export let stats
  export let years

  const {stringify} = JSON, {log} = console

  $: log('---', data)

  const yearNow = new Date().getFullYear()


  $: data = {
    coucou: 123
  }

</script>

<pre>{stringify({data}, null, 2)}</pre>
<pre>{stringify({years, stats, property}, null, 2)}</pre>
