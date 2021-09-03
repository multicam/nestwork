<script>
    import Headroom from 'svelte-headroom'
    import Logo from "../icons/logo.svelte"

    const {log} = console
    const pin = e => {
      log('pin', e)
    }
    const unpin = e => {
      log('unpin',e)
    }
</script>

<Headroom duration="200ms" on:pin={pin} on:unpin={unpin}>
    <header class="px">
        <Logo/>
    </header>
</Headroom>

<style>
    header {
        display: flex;
        height: 5vw;
    }
</style>
