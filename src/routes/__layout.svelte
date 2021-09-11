<script>
	import '../style/app.scss';
	import Collection from '../components/icons/collection.svelte'
    import Header from '../components/header/index.svelte'
    import Footer from '../components/footer.svelte'
    import Debug from '../components/debug.svelte'
</script>

<Collection />

<main class="app">
	<slot />
</main>

<Header />

<Footer/>

<Debug />
