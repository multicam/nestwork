<script>
    import Headroom from 'svelte-headroom'
    import Logo from "../icons/logo.svelte"

    const {log} = console

    const links = [
        {
            label: 'Own',
            url: '/#'
        },
        {
            label: 'Relax',
            url: '/#'
        },
        {
            label: 'Holiday',
            url: '/#'
        },
        {
            label: 'Properties',
            url: '/#'
        },
        {
            label: 'FAQs',
            url: '/#'
        },
        {
            label: 'About Us',
            url: '/#'
        },
    ]
    const pin = e => {
      log('pin', document.getElementsByTagName('body')[0].scrollTop)
    }
    const unpin = e => {
        log('unpin', document.getElementsByTagName('body')[0].scrollTop)
    }
</script>

<Headroom duration="200ms" on:pin={pin} on:unpin={unpin}>
    <header class="px">
        <Logo/>
        <nav>
            {#each links as link}
                <a href="{link.url}">{link.label}</a>
            {/each}
        </nav>
    </header>
</Headroom>

<style>
    header {
        display: flex;
        justify-content: space-between;
        height: 4vw;
    }

    nav {
        display: flex
    }

    a {
        padding: .5vw;
        white-space: nowrap;
    }
</style>
