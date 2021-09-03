<script>
	import '../style/app.scss';
    import Header from '../components/header/index.svelte'
    import Footer from '../components/footer.svelte'
    import Debug from '../components/debug.svelte'
</script>

<main class="app">
	<slot />
</main>

<Header />

<Footer/>

<Debug />
