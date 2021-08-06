<div class="header-submenus">
    <div class="header-submenus__container js-submenu-container">
        <div class="header-submenus__header">
            <div class="header-submenus__header__back js-header-menu-back">
                <svg>
                    <use xlink:href="#arrow-right"></use>
                </svg>
            </div>
            <div class="header-submenus__header__title js-header-submenu-title">Real estate</div>
        </div>
        <div class="header-submenu js-header-submenu" data-submenu="others">
            <div class="header-submenu__content">
                <div class="header-submenu__container">
                    <div class="header-menu__section je-row">
                        <div class="header-menu__section__column je-col-2 je-offset-2">
                            <div class="header-menu__item"><a class="header-menu__item__label" title="Motorcycles"
                                                              href="/#">Motorcycles</a></div>
                            <div class="header-menu__item"><a class="header-menu__item__label" title="Watches"
                                                              href="/#">Watches</a></div>
                            <div class="header-menu__item"><a class="header-menu__item__label" title="Helicopters"
                                                              href="/#">Helicopters</a></div>
                            <div class="header-menu__item"><a class="header-menu__item__label"
                                                              title="Extraordinaire" href="/#">Extraordinaire</a>
                            </div>
                            <div class="header-menu__item"><a class="header-menu__item__label" title="Jewelry"
                                                              href="/#">Jewelry</a></div>
                        </div>
                        <div class="header-menu__section__column je-col-2">
                            <div class="header-menu__item"><a class="header-menu__item__label"
                                                              title="Lifestyle &amp; Collectibles" href="/#">Lifestyle
                                &amp; Collectibles</a></div>
                            <div class="header-menu__item"><a class="header-menu__item__label"
                                                              title="Vacation rentals" href="/#?rental=true">Vacation
                                rentals</a></div>
                            <div class="header-menu__item"><a class="header-menu__item__label" title="Yacht rental"
                                                              href="/#?rental=true">Yacht rental</a></div>
                            <div class="header-menu__item"><a class="header-menu__item__label" title="Jet Charter"
                                                              href="/#?rental=true">Jet Charter</a></div>
                            <div class="header-menu__item"><a class="header-menu__item__label" title="Experiences"
                                                              href="/#">Experiences</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style lang="scss">

  .header-submenus {
    left: 0;
    top: var(--header-height);
    width: 100%;
    z-index: 1;
    display: none;
    position: absolute;
    overflow: hidden
  }

  .header-submenus__container {
    margin: 0 auto;
    transform: translate3d(0, -100%, 0);
    transition: all 0.25s cubic-bezier(0.29, 0.71, 0.53, 1)
  }

  @media (max-width: 1199px) {
    .header-submenus__container {
      width: 100%
    }
  }

  .header-submenus__container.visible {
    transform: translate3d(0, 0, 0)
  }

  @media (max-width: 1199px) {
    .header-submenus {
      left: 0;
      top: var(--header-height);
      bottom: 0;
      height: auto;
      overflow: auto;
      position: fixed;
      z-index: 100;
      transform: translate3d(-100%, 0, 0);
      background-color: transparent;
      flex-direction: column-reverse;
      transition: all 0.25s cubic-bezier(0.29, 0.71, 0.53, 1)
    }

    .header-submenus__container {
      flex: 1;
      padding: 0 15px;
      transform: translate3d(100%, 0, 0);
      background-color: var(--bg-color);
      box-sizing: border-box
    }
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    .header-submenus {
      width: 50%
    }
  }

  @media (max-width: 767px) {
    .header-submenus {
      width: 100%
    }
  }

  .header-submenus__header {
    display: none
  }

  @media (max-width: 1199px) {
    .header-submenus__header {
      height: var(--header-height);
      display: flex;
      border-bottom: 1px solid #E0E0E0
    }

    .header-submenus__header__back {
      display: flex;
      width: 60px;
      height: 60px;
      align-self: center;
      justify-content: center;
      align-items: center;
      margin-right: -45px;
      margin-left: -15px;
      padding-right: 10px;
      box-sizing: border-box;
      z-index: 1
    }

    .header-submenus__header__back svg {
      width: 8px;
      stroke: currentColor;
      transform: rotate(-180deg)
    }

    .header-submenus__header__title {
      flex: 1;
      display: flex;
      align-self: center;
      justify-content: center;
      font-size: 16px
    }
  }

  .header-submenu {
    display: none;
    width: 100%;
    min-height: var(--header-height);
    background-color: var(--bg-color);
    justify-content: center;
    align-items: center
  }

  @media (max-width: 1199px) {
    .header-submenu {
      flex: 1;
      display: none;
      position: static;
      align-items: flex-start;
      border-top: none
    }
  }

  .header-submenu__container {
    margin: 0 auto;
    max-width: 1920px;
    padding: 0 calc(100vw * 0.1 / 2)
  }

  @media (max-width: 1199px) {
    .header-submenu__container {
      padding: 0
    }
  }

  .header-submenu__content {
    width: 100%;
    box-sizing: border-box
  }

  @media (max-width: 1199px) {
    .header-submenu__content {
      padding: 0
    }
  }

  .header-submenu.current {
    display: flex
  }

  @media (max-width: 1199px) {
    .header-submenu.current {
      display: block
    }
  }

  @media (min-width: 1200px) {
    .header-submenu .header-menu__item {
      height: 40px;
      margin: 0
    }

    .header-submenu .header-menu__item a {
      border: none !important
    }

    .header-submenu .header-menu__item a:hover {
      text-decoration: underline
    }
  }

  .header.with-submenu .header-submenus {
    display: block
  }

  @media (max-width: 1199px) {
    .header.with-submenu .header-submenus {
      display: flex
    }
  }

  @media (min-width: 1200px) {
    .header.submenu-will-show .header-submenus {
      display: block
    }
  }

  @media (max-width: 1199px) {
    .header.submenu-will-show .header-submenus {
      transform: translate3d(0, 0, 0)
    }
  }

  .header.with-menu-visible, .header.with-submenu-visible {
    z-index: 1000
  }

  .header.with-submenu-visible .header-submenus__container {
    transform: translate3d(0, 0, 0)
  }


</style>
