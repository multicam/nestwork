<script>
  import TopSection from '../header/top-section.svelte'
  import MenuContent from '../header/menu-content.svelte'
  import BottomBar from '../header/bottombar.svelte'
</script>

<div id="main-navigation" class="header js-header collapsable _listing-page _light _no-max-width" data-user-menu-path="/render_user_menu">
    <div class="header__container">

        <TopSection/>

        <MenuContent/>

        <BottomBar/>

    </div>
</div>

<style lang="scss">

  .header {
    box-sizing: border-box;
    top: 0;
    color: var(--text-color);
    height: var(--header-height);
    display: flex;
    justify-content: center;
    position: sticky;
    z-index: 300;
    font-family: var(--font-sans);

    --bg-color: #151515;
    --bg-color-bottmobar: #fff;
    --text-color: #EEEDE7;
    --text-color-inactive: #6F6763;
    --text-hover-color: #AE8C6D;
    --border-color: #292929;
    --border-color-bottmobar: #F1F1F1;
    --transition-speed: 120ms;
    --header-height: 60px;
    --bottom-bar-height: 60px;
    background-color: var(--bg-color);

    @media (max-width: 1199px) {
      --header-height: 50px;
      top: 0;
      width: 100%
    }

    &.with-filters {
      top: calc(var(--header-height) * -1);
      transition: transform var(--transition-speed) ease;

      @media (min-width: 1200px) {
        &.visible {
          transform: translate3d(0, 100%, 0)
        }

        @media (max-width: 1199px) {
          .header__top-section {
            transition: transform var(--transition-speed) ease;
          }
        }
      }

      @media (max-width: 1199px) {
        &.visible .header__top-section {
          transform: translate3d(0, 100%, 0)
        }
      }
    }

    &:not(.collapsable) {
      top: 0;
      @media (min-width: 1200px) {
        transform: translate3d(0, 0, 0)
      }
    }

  }

  .header__container {
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: space-between;
    align-items: stretch;
    font-size: 16px;
    box-sizing: border-box;
    max-width: calc(1920px - 10vw);
    position: relative;
    z-index: 2;

    @media (min-width: 768px) and (max-width: 1199px) {
      width: 50%
    }

    @media (max-width: 767px) {
      width: 100%
    }

    @media (max-width: 1199px) {
      padding: 0
    }
  }


  //.header__spacer {
  //  display: none;
  //
  //  @media (min-width: 1200px) {
  //    flex: 1;
  //    display: block
  //  }
  //}

  //
  //@media (max-width: 1199px) {
  //  .header.with-menu .header-menu {
  //    display: flex
  //  }
  //
  //  .header.with-menu-visible .header-menu {
  //    background-color: rgba(0, 0, 0, 0.5)
  //  }
  //
  //  .header.with-menu-visible .header-menu__content {
  //    transform: translate3d(0, 0, 0)
  //  }
  //
  //  .header.with-menu-scaled .header-menu__container {
  //    transform: scale(0.9);
  //    opacity: 0.5
  //  }
  //}

  .header._light {
    --bg-color: #fff;
    --text-color: #151515;
    --text-hover-color: #151515;
    --color-transition: 100ms;
    --hover-border-color: #151515;
    top: 0;
    position: sticky;
    font-family: var(--font-sans);
    transition: transform var(--transition-speed) ease, background-color 250ms ease, color 250ms ease;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #E0E0E0;

    @media (min-width: 1200px) {
      padding: 0 5vw
    }

    svg {
      transition: fill var(--transition-speed) ease
    }

    a {
      transition: color var(--transition-speed) ease
    }

    @media (min-width: 1200px) {
      &._floating {
        top: 0;
        left: 0;
        width: 100%;
        position: sticky;
        margin-bottom: calc(var(--header-height) * -1)
      }
    }

    @media (min-width: 1200px) {
      &._transparent {
        --bg-color: rgba(255, 255, 255, 0);
        --text-color: white
      }
    }

    @media (min-width: 1200px) {
      .header-submenus {
        box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.1)
      }
    }

    @media (min-width: 1200px) {
      & .header-menu__item__label, & .header-button, & .header__switchers {
        border-bottom: 1px solid transparent
      }

      & .header-menu__item__label:hover, & .header-button:hover, & .header__switchers:hover {
        opacity: 1;
        border-bottom-color: var(--hover-border-color)
      }

      & .header-menu__item__label:hover {
        opacity: 1
      }

      & .header-button, & .header__switchers {
        margin-bottom: -1px
      }

      & .header__switchers {
        padding-left: 0;
        margin-left: 25px
      }

      & .header-button__saved__counter {
        background: none;
        font-weight: 400;
        color: #606060;
        font-size: 16px;
        line-height: 18px;
        padding: 0;
        margin-left: 3px
      }

      & .header-button__avatar {
        display: none
      }
    }

    @media (min-width: 1200px) {
      &._transparent {
        --text-hover-color: white;
        --hover-border-color: white;
        box-shadow: none;
        border-bottom: none;

        .header__container {
          border-bottom: 1px solid rgba(255, 255, 255, 0.3)
        }
      }
    }

    @media (min-width: 1200px) {

      &._transparent .header-submenus {
        --border-color: none;
        box-shadow: none
      }

      &._transparent .header-menu__item__label:hover {
        opacity: 1;
        border-bottom: 1px solid var(--hover-border-color)
      }

      &._transparent .header-button__saved__counter {
        color: #fff
      }
    }

    &.with-submenu-visible .header-menu__item div {
      border-bottom-color: var(--hover-border-color)
    }

    @media (min-width: 1200px) {
      &._no-max-width {
        padding: 0 40px
      }
    }

    @media (min-width: 1200px) {
      &._no-max-width .header__container {
        max-width: none
      }
    }

  }

</style>
