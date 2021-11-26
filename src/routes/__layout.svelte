<script>
	import '../style/app.scss';
	import Collection from '$lib/components/icons/collection.svelte'
    import Header from '$lib/components/header/index.svelte'
    import Footer from '$lib/components/footer.svelte'
    // import Debug from '$lib/components/debug.svelte'
</script>

<Collection />

<main>
	<slot />
</main>

<Header />

<Footer/>

<!--<Debug />-->
