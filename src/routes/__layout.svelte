<script>
	import '../style/app.scss';
	import Collection from '$lib/components/icons/collection.svelte'
    import Header from '$lib/components/header/index.svelte'
    import Footer from '$lib/components/footer.svelte'
</script>

<Collection />

<main>
	<slot />
</main>

<Header />

<Footer/>

<style>
	@media screen and (max-width: 1024px) {
		main {
			padding-top: 10vw
		}
	}
</style>