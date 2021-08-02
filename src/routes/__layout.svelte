<script>
	import '../app.css';
    import Header from '../components/header.svelte'
    import Footer from '../components/footer.svelte'
</script>

<Header />

<main class="app">
	<slot />
</main>

<Footer/>
