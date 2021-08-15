<script context="module">
	export const prerender = true;
	import Banner from '../components/banner.svelte'
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<Banner />

<section>
    <a href="/calculator">Go to Calculator</a>
</section>
