<script>
  import Headroom from 'svelte-headroom'
  import Logo from "../icons/logo.svelte"
  const {log} = console

  const links = [
    {
      label: 'Own',
      url: '/about#co-ownership'
    },
    {
      label: 'Relax',
      url: '/about#nestlovers'
    },
    {
      label: 'Case Study',
      url: '/case-study'
    },
    {
      label: 'Properties',
      url: '/properties'
    },
    {
      label: 'FAQs',
      url: '/faqs'
    },
    {
      label: 'About Us',
      url: '/about'
    },
  ]
  const pin = e => {
    // log('pin', e)
  }
  const unpin = e => {
    // log('unpin', e)
  }
</script>

<Headroom duration="200ms" on:pin={pin} on:unpin={unpin}>
    <header class="px">
        <a class="logo" href="/">
            <Logo />
        </a>
        <nav>
            {#each links as link}
                <a href="{link.url}">{link.label}</a>
            {/each}
        </nav>
    </header>
</Headroom>

<style lang="scss">

  header {
    display: flex;
    justify-content: space-between;
    height: 5vw;
    font-weight: 800
  }

  nav {
    display: flex;

  }

  a {
    padding: .5vw;
    white-space: nowrap;
    align-self: center;
    text-decoration: none;
    font-weight: 800;
    color: #123;
    font-size: clamp(1em,1vw,1vw);

    &:hover {
      color: white
    }

    &:last-of-type {
      padding-right: 0;
    }
  }

  .logo {
    padding: 1vw 0;
  }

</style>
