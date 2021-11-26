<script>
  import Headroom from 'svelte-headroom'
  import Logo from "../icons/logo.svelte"
  import links from './links'

  const {log} = console

  let navElement, dropdownEl, open = false

  const clickMenu = () => {
    open = !open
  }

</script>

<header>
    <nav bind:this={navElement} class:dropdown-opened={open}>
        <a class="logo" href="/" on:click={() => open && clickMenu()}>
            <img src="https://placekitten.com/g/100/50" alt="Logo cat"/>
        </a>
        <div class="dropdown-link-container" bind:this={dropdownEl}>
            {#each links as link}
                <a href={link.url} on:click={clickMenu}>{link.label}</a>
            {/each}
        </div>
        <button class="mobile-dropdown-toggle" aria-hidden="true" on:click={clickMenu}>
            Menu
        </button>
    </nav>
</header>
<style lang="scss">

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }

  nav {
    max-width: 1200px;
    display: flex;
    align-items: center;
    margin: auto;
  }

  .logo {
    margin-right: auto;
  }

  .dropdown-link-container > a {
    margin-left: 20px;
  }

  .mobile-dropdown-toggle {
    display: none;
  }

  @media (max-width: 768px) {
    .logo,
    .mobile-dropdown-toggle {
      z-index: 1;
    }

    .mobile-dropdown-toggle {
      display: initial;
    }

    .dropdown-link-container {
      /* first, make our dropdown cover the screen */
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 100vh;
      /* fix nav height on mobile safari, where 100vh is a little off */
      height: -webkit-fill-available;

      /* then, arrange our links top to bottom */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;

      /* add margins and padding to taste */
      margin: 0;
      padding-left: 7vw;
      padding-right: 7vw;

      background: lightblue;
      z-index: 0;

      opacity: 0;
      transform: translateY(-100%);
      transition: transform 0.2s, opacity 0.2s;
    }

    nav.dropdown-opened > .dropdown-link-container {
      opacity: 1;
      transform: translateY(0);
    }
  }

</style>
