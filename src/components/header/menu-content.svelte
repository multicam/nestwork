<div class="header-menu js-header-menu">
    <div class="header-menu__content">
        <div class="header-menu__container">
            <div class=" header-menu__item">
                <a class="header-menu__item__label" title="Real Estate" href="#">Item 1</a>
            </div>
            <div class=" header-menu__item">
                <a class="header-menu__item__label" title="Cars" href="#">Item 2</a>
            </div>
            <div class=" header-menu__item">
                <a class="header-menu__item__label" title="Yachts" href="#">Item 3</a>
            </div>
            <div class=" header-menu__item">
                <a class="header-menu__item__label" title="Jets" href="#">Item 4</a>
            </div>
            <div class=" header-menu__item" data-submenu="others" data-submenu-label="Other">
                <div class="header-menu__item__label">Other</div>
                <div class="header-menu__item__arrow">
                    <svg height="14px" viewBox="0 0 8 14" width="8px">
                        <use xlink:href="#arrow-right"></use>
                    </svg>
                </div>
            </div>
            <div class=" header-menu__item">
                <a class="header-menu__item__label" title="Journal" href="https://www.jamesedition.com/stories">Journal</a>
            </div>
            <div class="je-mobile-only header-menu__item">
                <a class="header-menu__item__label" title="Sell" href="#">Sell</a>
            </div>
            <div class="js-intercom-show-message je-mobile-only header-menu__item">
                <a class="header-menu__item__label" title="Help" href="#">Help</a>
            </div>
        </div>
    </div>
</div>

<style lang="scss">

  .header-menu {
    flex: 1;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
    flex-wrap: nowrap;

    @media (min-width: 1200px) {
      position: absolute;
      left: 50%;
      transform: translate3d(-50%, 0, 0)
    }

    @media (max-width: 1199px) {
      position: fixed;
      top: var(--header-height);
      bottom: 0;
      left: 0;
      padding: 0;
      z-index: 20;
      height: auto;
      display: none;
      width: 100%;
      justify-content: flex-start;
      background-color: rgba(0, 0, 0, 0);
      transition: background-color 0.25s cubic-bezier(0.29, 0.71, 0.53, 1)
    }

  }

  .header-menu__container {
    display: flex;
    height: 100%;
    flex-wrap: nowrap;
    box-sizing: border-box;

    @media (max-width: 1199px) {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      padding: 0 15px;
      position: absolute;
      flex-wrap: nowrap;
      flex-direction: column;
      transform: translate3d(0%, 0, 0);
      transition: transform 0.25s cubic-bezier(0.29, 0.71, 0.53, 1), opacity 0.25s cubic-bezier(0.29, 0.71, 0.53, 1);
    }
  }

  .header-menu__content {
    display: flex;
    height: 100%;
    flex-wrap: nowrap;

    @media (max-width: 1199px) {
      top: 0;
      left: 0;
      height: 100%;
      display: flex;
      overflow: hidden;
      position: absolute;
      flex-direction: column;
      box-sizing: border-box;
      transform: translate3d(-100%, 0, 0);
      transition: transform 0.25s cubic-bezier(0.29, 0.71, 0.53, 1);
      background-color: var(--bg-color)
    }

    @media (min-width: 768px) and (max-width: 1199px) {
      width: 50%
    }

    @media (max-width: 767px) {
      width: 100%
    }
  }

  .header-menu__item {
    height: 100%;
    padding: 0 10px;

    @media (min-width: 1200px) {
      padding: 0 25px
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
      padding: 0 15px
    }

    @media (max-width: 1199px) {
      height: var(--header-height);
      min-height: var(--header-height);
      display: flex;
      padding: 0;

      &[data-submenu] .header-menu__item__arrow {
        width: 8px;
        height: 100%;
        display: flex;
        align-items: center;

        svg {
          stroke: currentColor
        }
      }
    }

    @media (max-width: 1199px) {
      & + & {
        border-top: 1px solid #E0E0E0
      }
    }
  }

  .header-menu__item__label {
    opacity: 1;
    height: 100%;
    color: var(--text-color);
    align-items: center;
    font-weight: normal;
    white-space: nowrap;
    display: inline-flex;
    text-decoration: none;
    transition: opacity 150ms ease;

    .header-menu__item__label:not([href]) {
      cursor: default
    }

    .header-menu__item__label:focus, .header-menu__item__label:active {
      color: var(--text-color);
      text-decoration: none
    }

    .header-menu__item__label:hover, .header-menu__item__label:active {
      opacity: 0.6;
      color: var(--text-color);
      text-decoration: none
    }

    .header-menu__item__label:visited {
      text-decoration: none
    }

    @media (max-width: 1199px) {
      font-size: 16px;
      width: 100%;
      color: var(--text-color) -mobile
    }
  }

  .header-menu__item__arrow {
    display: none
  }

  .header-menu__section {
    margin: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    @media (min-width: 1200px) {
      padding: 20px 0
    }

    @media (max-width: 1199px) {
      & + .header-menu__section__column {
        border-top: 1px solid #E0E0E0
      }
    }
  }

</style>
