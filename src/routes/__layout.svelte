<script>
	import '../style/app.scss';
    import Header from '../components/header/index.svelte'
    import Footer from '../components/footer.svelte'
    import Debug from '../components/debug.svelte'
    import Collection from '../components/icons/collection.svelte'
</script>

<Header />

<Collection />

<main class="app">
	<slot />
</main>

<Footer/>

<Debug />
