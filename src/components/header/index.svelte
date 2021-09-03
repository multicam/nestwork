<script>
    import Headroom from 'svelte-headroom'
    const {log} = console
    const pin = e => {
      log('pin', e)
    }
    const unpin = e => {
      log('unpin',e)
    }
</script>

<Headroom duration="200ms" on:pin={pin} on:unpin={unpin}>
    <header>
        <h1>Coucou</h1>
    </header>
</Headroom>

<style>
    header {
        display: flex;
    }
</style>
