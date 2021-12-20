<script>
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
        <a class="logo mt1 " href="/" on:click={() => open && clickMenu()}>
            <Logo color={open?'snow':'black'}/>
        </a>
        <div class="dropdown-link-container" bind:this={dropdownEl}>
            {#each links as link}
                <a href={link.url} on:click={clickMenu}>{link.label}</a>
            {/each}
        </div>
        <div class="mobile-dropdown-toggle mo-mr4" aria-hidden="true" on:click={clickMenu}>
            {#if open}
                Close
            {:else}
                Menu
            {/if}
        </div>
    </nav>
</header>
<style lang="scss">

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 0 4vw;
  }

  nav {
    max-width: 1200px;
    display: flex;
    align-items: center;
    margin: auto;
    justify-content: space-between;
    > * {
      display:block;
    }
  }

  .mobile-dropdown-toggle {
    display: none;
    background: black;
    color: snow;
    padding: 1vw 2vw;
    border-radius: 1vw;
  }

  .dropdown-link-container > a {
    margin-left: 20px;
    font-size: clamp(12px, 1.25vw, 3vw);
    font-weight: bold;
    color: var(--black);
    text-decoration: none;


    &:hover {
      color: red;
    }

    @media (max-width: 1028px) {
      color: snow;
      text-decoration: none !important;
      font-size: clamp(16px, 5.2vw, 32px);
      padding: 2vw 0;
      display: block;
    }
  }

  .logo {
    height: 12vw;
  }

  @media (max-width: 1028px) {
    .logo, .mobile-dropdown-toggle {
      z-index: 100;
    }

    .logo {
      padding: 2vw;
      height: 8vw;
    }

    .mobile-dropdown-toggle {
      display: initial;
    }

    .dropdown-link-container {

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

      background-color: var(--bg-color);
      z-index: 0;

      opacity: 0;
      transform: translateY(-100%);
      transition: transform 0.3s, opacity 0.3s;
    }

    nav.dropdown-opened > .dropdown-link-container {
      opacity: 1;
      transform: translateY(0);
    }
  }

</style>
