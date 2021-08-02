<script>
	import '../app.css';
    import Logo from '../components/logo.svelte'
</script>

<header>
    <Logo/>
</header>

<main class="app">
	<slot />
</main>

<style>

    * {
        box-sizing: border-box;
    }

	main.app {
		display: flex;
        flex-direction: column;
		width: 100vw;
        height: 100vh;
        overflow: hidden;
	}

</style>
