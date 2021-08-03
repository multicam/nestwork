<script>
	import '../app.css';
    import Header from '../components/header.svelte'
    import Footer from '../components/footer.svelte'
    import Collection from '../components/icons/collection.svelte'
</script>

<Header />
<Collection />

<main class="app">
	<slot />
</main>

<Footer/>
