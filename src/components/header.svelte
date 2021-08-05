<script>
  import Logo from '../components/icons/logo.svelte'
</script>

<div id="main-navigation" class="header js-header collapsable _listing-page _light _no-max-width" data-user-menu-path="/render_user_menu">
    <div class="header__container">
        <div class="header__top-section">
            <div class="header__hamburger">
                <div class="hamburger-button js-hamburger-menu _light"></div>
            </div>
            <a class="header__logo" aria-label="NestLove" href="/">
                <Logo />
            </a>      <div class="header__options _hide-on-mobile">
            <a class="header-button header-link header-link__sell je-desktop-only" href="#">Sell</a>
        </div>
            <div class="header__switchers _only-mobile js-header-switchers">
                <svg viewBox="0 0 24 24">
                    <path d="M21 15.75C21.45 14.625 21.75 13.35 21.75 12C21.75 10.65 21.45 9.375 21 8.25C19.5 4.725 16.05 2.25 12 2.25C7.95 2.25 4.5 4.725 3 8.25C2.55 9.375 2.25 10.65 2.25 12C2.25 13.35 2.55 14.625 3 15.75C4.5 19.275 7.95 21.75 12 21.75C16.05 21.75 19.5 19.275 21 15.75ZM12 20.25C10.725 20.25 9.375 18.525 8.7 15.75H15.3C14.625 18.525 13.275 20.25 12 20.25ZM8.4 14.25C8.325 13.575 8.25 12.825 8.25 12C8.25 11.175 8.325 10.425 8.4 9.75H15.6C15.675 10.425 15.75 11.175 15.75 12C15.75 12.825 15.675 13.575 15.6 14.25H8.4ZM3.75 12C3.75 11.25 3.9 10.5 4.05 9.75H6.9C6.825 10.5 6.75 11.25 6.75 12C6.75 12.75 6.825 13.5 6.9 14.25H4.05C3.9 13.5 3.75 12.75 3.75 12ZM12 3.75C13.275 3.75 14.625 5.475 15.3 8.25H8.7C9.375 5.475 10.725 3.75 12 3.75ZM17.1 9.75H19.95C20.175 10.5 20.25 11.25 20.25 12C20.25 12.75 20.1 13.5 19.95 14.25H17.1C17.175 13.5 17.25 12.75 17.25 12C17.25 11.25 17.175 10.5 17.1 9.75ZM19.35 8.25H16.875C16.575 6.75 16.05 5.475 15.375 4.5C17.1 5.25 18.45 6.6 19.35 8.25ZM8.625 4.5C7.95 5.475 7.5 6.825 7.125 8.25H4.65C5.55 6.6 6.9 5.25 8.625 4.5ZM4.65 15.75H7.125C7.425 17.25 7.95 18.525 8.625 19.5C6.9 18.75 5.55 17.4 4.65 15.75ZM15.375 19.5C16.05 18.525 16.5 17.175 16.875 15.75H19.35C18.45 17.4 17.1 18.75 15.375 19.5Z"></path>
                </svg>

            </div>
        </div>
        <div class="header-menu js-header-menu">
            <div class="header-menu__content">
                <div class="header-menu__container">
                    <div class=" header-menu__item">
                        <a class="header-menu__item__label" title="Real Estate" href="#">Real Estate</a>
                    </div>
                    <div class=" header-menu__item">
                        <a class="header-menu__item__label" title="Cars" href="#">Cars</a>
                    </div>
                    <div class=" header-menu__item">
                        <a class="header-menu__item__label" title="Yachts" href="#">Yachts</a>
                    </div>
                    <div class=" header-menu__item">
                        <a class="header-menu__item__label" title="Jets" href="#">Jets</a>
                    </div>
                    <div class=" header-menu__item" data-submenu="others" data-submenu-label="Other">
                        <div class="header-menu__item__label">Other</div>
                        <div class="header-menu__item__arrow"><svg height="14px" viewBox="0 0 8 14" width="8px"><use xlink:href="#arrow-right"></use></svg></div>
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

        <div class="header__bottombar">
            <div class="listing-page__contact-buttons">

                <form id="in-contact-buttons">
                    <div data-sitekey="xoxo" data-size="invisible"></div>
                    <a href="#" class="button js-phone-button listing-page__bottom-button _cyan _uppercase" data-error="Try again later." data-fetch-phone-numbers-url="/listings/11521677/fetch-phones-numbers" data-missing-number-error="Currently unavailable" data-location="Listing page">
                        <svg viewBox="0 0 16 16">
                            <path d="M4.35002 1.5C4.10002 1.5 3.85002 1.6 3.60002 1.75H3.55002L2.00002 3.4C1.50002 3.85 1.35002 4.5 1.60002 5.1C2.00002 6.3 3.10002 8.65 5.20002 10.75C7.30002 12.85 9.70002 13.9 10.85 14.35C11.45 14.55 12.1 14.4 12.6 14L14.2 12.4C14.6 12 14.6 11.25 14.2 10.85L12.15 8.8V8.75C11.75 8.35 11 8.35 10.6 8.75L9.60002 9.75C9.25002 9.6 8.40002 9.15 7.55002 8.35C6.75002 7.55 6.30002 6.65 6.15002 6.3L7.15002 5.3C7.55002 4.9 7.60002 4.2 7.15002 3.75L7.10002 3.7L5.10002 1.65H5.05002C4.85002 1.6 4.60002 1.5 4.35002 1.5Z"></path>
                        </svg>

                        <span>Call agent</span>
                    </a>
                    <div class="je3-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </form>


                <a href="#seller-contacts" class="button listing-page__bottom-button _cyan _uppercase">
                    <svg class="je2-icon" width="14" height="14" viewBox="0 0 14 14"><use xlink:href="#message-bubble"></use></svg>
                    <span>Message agent</span>
                </a>
            </div>

        </div>

        <div class="header-user-controls js-user-controls">
            <div class="header-user-controls__container">
    <span class="header-button header-button__explore je-mobile-only js-explore-button active" data-link="#">
      Explore
      <i class="header-button__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
  <circle cx="10" cy="10" r="9" stroke="#000" stroke-width="2"></circle>
  <path fill-rule="evenodd" d="M14.5 5.5l-2.572 6.428L5.5 14.5l2.571-6.428L14.5 5.5zm-5.143 5.143a.91.91 0 101.286-1.286.91.91 0 00-1.286 1.286z" clip-rule="evenodd"></path>
</svg>

      </i>
</span>

                <a class="header-button header-button__login js-login" data-link="#" href="#">
      <span class="header-button__user__name">
        Log in
      </span>
                    <i class="header-button__icon js-notification-circle">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 24C4.47715 24 0 19.5228 0 14C0 8.47715 4.47715 4 10 4C15.5228 4 20 8.47715 20 14C20 19.5228 15.5228 24 10 24Z"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6377 20.1801C6.07367 21.427 7.94852 22.1818 9.99965 22.1818C12.0508 22.1818 13.9256 21.427 15.3616 20.1801C14.5915 19.1774 13.4474 18.5454 12.1815 18.5454H7.81783C6.55188 18.5454 5.40785 19.1774 4.6377 20.1801H4.6377Z"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.39408 18.8282C4.4879 17.5388 6.06055 16.7273 7.81836 16.7273H12.182C13.9398 16.7273 15.5125 17.5388 16.6063 18.8282C17.597 17.4749 18.182 15.8058 18.182 14.0001C18.182 9.48136 14.5189 5.81824 10.0002 5.81824C5.48148 5.81824 1.81836 9.48136 1.81836 14.0001C1.81836 15.8058 2.40332 17.4749 3.39408 18.8282Z" fill="#635A56"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.39408 18.8282C4.4879 17.5388 6.06055 16.7273 7.81836 16.7273H12.182C13.9398 16.7273 15.5125 17.5388 16.6063 18.8282C17.597 17.4749 18.182 15.8058 18.182 14.0001C18.182 9.48136 14.5189 5.81824 10.0002 5.81824C5.48148 5.81824 1.81836 9.48136 1.81836 14.0001C1.81836 15.8058 2.40332 17.4749 3.39408 18.8282Z" fill="white"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0001 15.8181C7.99182 15.8181 6.36377 14.1901 6.36377 12.1818C6.36377 10.1735 7.99182 8.54541 10.0001 8.54541C12.0084 8.54541 13.6365 10.1735 13.6365 12.1818C13.6365 14.1901 12.0084 15.8181 10.0001 15.8181Z"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99982 14C11.004 14 11.818 13.186 11.818 12.1818C11.818 11.1777 11.004 10.3636 9.99982 10.3636C8.99567 10.3636 8.18164 11.1777 8.18164 12.1818C8.18164 13.186 8.99567 14 9.99982 14Z"></path>
                            <circle cx="18" cy="6" r="5" fill="#F4382C" stroke="white" stroke-width="2"></circle>
                        </svg>

                    </i>
                    <span class="notification-circle js-notification-circle"> </span>
                </a>  </div>
        </div>

        <div class="header__switchers js-header-switchers">
            <svg class="icon" width="32" height="32" viewBox="0 0 32 32"><use xlink:href="#globe-alt"></use></svg>
        </div>
    </div>
    <div class="header-submenus">
        <div class="header-submenus__container js-submenu-container">
            <div class="header-submenus__header">
                <div class="header-submenus__header__back js-header-menu-back"><svg><use xlink:href="#arrow-right"></use></svg></div>
                <div class="header-submenus__header__title js-header-submenu-title">Real estate</div>
            </div>
            <div class="header-submenu js-header-submenu" data-submenu="others">
                <div class="header-submenu__content">
                    <div class="header-submenu__container">
                        <div class="header-menu__section je-row">
                            <div class="header-menu__section__column je-col-2 je-offset-2">
                                <div class="header-menu__item"><a class="header-menu__item__label" title="Motorcycles" href="/#">Motorcycles</a></div>
                                <div class="header-menu__item"><a class="header-menu__item__label" title="Watches" href="/#">Watches</a></div>
                                <div class="header-menu__item"><a class="header-menu__item__label" title="Helicopters" href="/#">Helicopters</a></div>
                                <div class="header-menu__item"><a class="header-menu__item__label" title="Extraordinaire" href="/#">Extraordinaire</a></div>
                                <div class="header-menu__item"><a class="header-menu__item__label" title="Jewelry" href="/#">Jewelry</a></div>
                            </div>
                            <div class="header-menu__section__column je-col-2">
                                <div class="header-menu__item"><a class="header-menu__item__label" title="Lifestyle &amp; Collectibles" href="/#">Lifestyle &amp; Collectibles</a></div>
                                <div class="header-menu__item"><a class="header-menu__item__label" title="Vacation rentals" href="/#?rental=true">Vacation rentals</a></div>
                                <div class="header-menu__item"><a class="header-menu__item__label" title="Yacht rental" href="/#?rental=true">Yacht rental</a></div>
                                <div class="header-menu__item"><a class="header-menu__item__label" title="Jet Charter" href="/#?rental=true">Jet Charter</a></div>
                                <div class="header-menu__item"><a class="header-menu__item__label" title="Experiences" href="/#">Experiences</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        --bottom-bar-height: 60px;background-color: var(--bg-color);

        @media (max-width: 1199px) {
            --header-height: 50px
        }

      &.with-filters {
        top: calc(var(--header-height) * -1);
        transition: transform var(--transition-speed) ease;

        @media (min-width: 1200px) {
          &.visible {
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

    @media (max-width: 1199px) {
        .header.with-filters .header__top-section {
            transition: transform var(--transition-speed) ease;
        }
    }

    @media (max-width: 1199px) {
        .header.with-filters.visible .header__top-section {
            transform: translate3d(0, 100%, 0)
        }
    }

    @media (max-width: 1199px) {
        .header {
            top:0;
            width: 100%
        }
    }

    .header__logo {
        color: var(--text-color);
        display: flex;
        align-self: center;
        justify-content: center;
        width: 166px;
        height: 100%;
        box-sizing: border-box;
        padding: 0 13px;

        @media (min-width: 1200px) {
            margin-left:-13px
        }

        @media (max-width: 1199px) {
          left:50%;
          position: absolute;
          transform: translateX(-50%)
        }
    }

    .header__logo:hover,.header__logo:focus {
        color: var(--text-color)
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
            width:50%
        }

        @media (max-width: 767px) {
          width:100%
        }

        @media (max-width: 1199px) {
          padding:0
        }
    }

    .header__top-section {
        flex: 1;
        display: flex;
        justify-content: space-between
    }

    .header__hamburger {
        display: none;

        @media (max-width: 1199px) {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 64px;
        }
    }

    .header__options {
        display: flex;
        height: 100%;
        margin-left: auto;

        @media (max-width: 1199px) {
          &._hide-on-mobile {
            display:none
          }
        }
    }

    .header__spacer {
        display: none;

        @media (min-width: 1200px) {
            flex: 1;
            display: block
        }
    }

    .header__bottombar {
        left: 0;
        bottom: 0;
        width: 100%;
        display: none;
        position: fixed;
        align-items: center;
        justify-content: center;
        background-color: var(--bg-color);
        box-sizing: content-box;
        padding-bottom: env(safe-area-inset-bottom);

        @media (max-width: 1199px) {
            display: flex;
            color: #0ebab4;
            box-sizing: border-box
        }

      @media (max-width: 1199px) {
        &+.header-user-controls {
          display:none
        }

        &+.header-user-controls._show {
          display: flex;
          height: 67px
        }
      }
    }

    .header-menu {
        flex: 1;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        height: 100%;
        flex-wrap: nowrap;

        @media (min-width: 1200px) {
            position:absolute;
            left: 50%;
            transform: translate3d(-50%, 0, 0)
        }

        @media (max-width: 1199px) {
          position:fixed;
          top: var(--header-height);
          bottom: 0;
          left: 0;
          padding: 0;
          z-index: 20;
          height: auto;
          display: none;
          width: 100%;
          justify-content: flex-start;
          background-color: rgba(0,0,0,0);
          transition: background-color 0.25s cubic-bezier(0.29, 0.71, 0.53, 1)
        }

    }

    .header-menu__container {
        display: flex;
        height: 100%;
        flex-wrap: nowrap;
        box-sizing: border-box;

        @media (max-width: 1199px) {
            top:0;
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
            top:0;
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
          width:50%
        }
    }

    @media (max-width: 767px) {
        .header-menu__content {
            width:100%
        }
    }

    .header-menu__item {
        height: 100%;
        padding: 0 10px;

        @media (min-width: 1200px) {
            padding:0 25px
        }

      @media (min-width: 1200px) and (max-width: 1300px) {
          padding:0 15px
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

        .header-menu__item__label:focus,.header-menu__item__label:active {
            color: var(--text-color);
            text-decoration: none
        }

        .header-menu__item__label:hover,.header-menu__item__label:active {
            opacity: 0.6;
            color: var(--text-color);
            text-decoration: none
        }

        .header-menu__item__label:visited {
            text-decoration: none
        }

        @media (max-width: 1199px) {
          font-size:16px;
          width: 100%;
          color: var(--text-color) -mobile
        }
    }

    .header-menu__item__arrow {
        display: none
    }

    @media (max-width: 1199px) {
        .header-menu__item {
            height:var(--header-height);
            min-height: var(--header-height);
            display: flex;
            padding: 0
        }

        .header-menu__item[data-submenu] .header-menu__item__arrow {
            width: 8px;
            height: 100%;
            display: flex;
            align-items: center
        }

        .header-menu__item[data-submenu] .header-menu__item__arrow svg {
            stroke: currentColor
        }
    }

    @media (max-width: 1199px) {
        .header-menu__item+.header-menu__item {
            border-top:1px solid #E0E0E0
        }
    }

    .header-menu__section {
        margin: 0;
        border-bottom: 1px solid rgba(255,255,255,0.3)
    }

    @media (min-width: 1200px) {
        .header-menu__section {
            padding:20px 0
        }
    }

    @media (max-width: 1199px) {
        .header-menu__section__column+.header-menu__section__column {
            border-top:1px solid #E0E0E0
        }
    }

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
            width:100%
        }
    }

    .header-submenus__container.visible {
        transform: translate3d(0, 0, 0)
    }

    @media (max-width: 1199px) {
        .header-submenus {
            left:0;
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
            width:50%
        }
    }

    @media (max-width: 767px) {
        .header-submenus {
            width:100%
        }
    }

    .header-submenus__header {
        display: none
    }

    @media (max-width: 1199px) {
        .header-submenus__header {
            height:var(--header-height);
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
            padding:0
        }
    }

    .header-submenu__content {
        width: 100%;
        box-sizing: border-box
    }

    @media (max-width: 1199px) {
        .header-submenu__content {
            padding:0
        }
    }

    .header-submenu.current {
        display: flex
    }

    @media (max-width: 1199px) {
        .header-submenu.current {
            display:block
        }
    }

    @media (min-width: 1200px) {
        .header-submenu .header-menu__item {
            height:40px;
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
            display:block
        }
    }

    @media (max-width: 1199px) {
        .header.submenu-will-show .header-submenus {
            transform: translate3d(0, 0, 0)
        }
    }

    .header.with-menu-visible,.header.with-submenu-visible {
        z-index: 1000
    }

    .header.with-submenu-visible .header-submenus__container {
        transform: translate3d(0, 0, 0)
    }

    @media (max-width: 1199px) {
        .header.with-menu .header-menu {
            display: flex
        }

        .header.with-menu-visible .header-menu {
            background-color: rgba(0,0,0,0.5)
        }

        .header.with-menu-visible .header-menu__content {
            transform: translate3d(0, 0, 0)
        }

        .header.with-menu-scaled .header-menu__container {
            transform: scale(0.9);
            opacity: 0.5
        }
    }

    .header._no-footer .header-user-controls {
        display: none
    }

    .header-user-controls {
        display: flex
    }

    @media (max-width: 1199px) {
        .header-user-controls {
            left:0;
            bottom: 0;
            width: 100%;
            display: flex;
            position: fixed;
            align-items: center;
            justify-content: center;
            box-sizing: content-box;
            height: 62px;
            transition: transform var(--transition-speed) ease;
            background-color: var(--bg-color-bottmobar);
            padding-bottom: env(safe-area-inset-bottom);
            border-top: 1px solid var(--border-color-bottmobar)
        }
    }

    @media (max-width: 1199px) {
        .header-user-controls.collapsed {
            transform: translate3d(0, 100%, 0)
        }
    }

    .header-user-controls__container {
        flex: 1;
        display: flex;
        white-space: nowrap
    }

    @media (max-width: 1199px) {
        .header-user-controls__container {
            flex: none;
            width: 100%;
            display: flex;
            justify-content: space-evenly
        }
    }

    .header-button {
        flex: 1;
        color: var(--text-color);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: opacity 150ms ease
    }

    @media (max-width: 1199px) {
        .header-button {
            margin:0;
            font-size: 12px;
            margin: 0 10px;
            width: 57px;
            color: #8C8C8C;
            font-weight: 500;
            text-align: center;
            flex-direction: column-reverse
        }
    }

    .header-button__user__name {
        max-width: 75px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden
    }

    @media (min-width: 1200px) {
        .header-button__user__name {
            color:var(--text-color)
        }
    }

    .header-button__saved__counter {
        height: 18px;
        min-width: 17px;
        border-radius: 9px;
        background-color: #313131;
        font-size: 12px;
        box-sizing: border-box;
        padding: 0 5px;
        line-height: 18px;
        margin-left: 5px;
        text-align: center
    }

    @media (max-width: 1199px) {
        .header-button__saved__counter {
            display:none
        }
    }

    .header-button__avatar {
        width: 30px;
        height: 30px;
        font-size: 14px;
        border-radius: 100%;
        background-color: #423E3C;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center
    }

    @media (max-width: 1199px) {
        .header-button__avatar {
            width:22px;
            height: 22px;
            font-size: 12px;
            margin-left: 0;
            margin-bottom: 6px;
            color: var(--text-color) -active;
            line-height: 22px
        }
    }

    .header-button__icon {
        display: none
    }

    @media (max-width: 1199px) {
        .header-button__icon {
            width:20px;
            height: 20px;
            margin-bottom: 5px;
            display: inline-flex
        }

        .header-button__icon svg {
            fill: #8C8C8C
        }

        .header-button__icon._active svg circle {
            fill: #F4382C;
            stroke-width: 2
        }
    }

    .header-button:focus,.header-button:active {
        color: var(--text-color);
        text-decoration: none
    }

    .header-button:hover,.header-button:active {
        opacity: 0.6;
        color: var(--text-color);
        text-decoration: none
    }

    .header-button:visited {
        text-decoration: none
    }

    .header-button+.header-button {
        margin-left: 25px
    }

    .header-button+.header-button__login {
        margin-left: 15px
    }

    .header-button+.header-button__login i {
        width: 24px;
        height: 24px;
        margin-left: 3px
    }

    @media (min-width: 1200px) {
        .header-button+.header-button {
            margin-left:30px
        }

        .header-button+.header-button__login {
            margin-left: 20px;
            position: relative
        }
    }

    @media (max-width: 1199px) {
        .header-button+.header-button {
            margin-left:0
        }
    }

    .header-button.active {
        color: #000
    }

    .header-button__explore svg {
        fill: #8C8C8C
    }

    .header-button__explore svg circle {
        fill: #fff;
        stroke: #8C8C8C
    }

    .header-button__explore.active svg {
        fill: #000
    }

    .header-button__explore.active svg circle {
        fill: #000;
        stroke: #000
    }

    .header-button__explore.active svg path {
        fill: #fff
    }

    .header-button__login svg circle {
        fill: none;
        stroke-width: 0
    }

    .header-button__login svg path:nth-child(2) {
        fill: #fff
    }

    .header-button__login svg path:last-of-type {
        fill: #fff
    }

    .header-button__login.active svg {
        fill: #000
    }

    .header-button__login.active svg path:nth-child(2) {
        fill: #000
    }

    .header-button__login.active svg path:last-of-type {
        fill: #000
    }

    .header-button__saved i {
        width: 24px;
        height: 24px
    }

    .header-button__saved i svg {
        stroke: currentColor;
        fill: white;
        stroke-width: 2
    }

    .header-button__saved.active svg {
        fill: #000
    }

    @media (max-width: 1199px) {
        .header-button.active {
            color:var(--text-color)
        }
    }

    .header-link {
        flex: 1;
        height: 100%;
        display: inline-flex;
        color: var(--text-color);
        text-decoration: none;
        text-align: center;
        justify-content: center;
        align-self: center
    }

    @media (max-width: 1199px) {
        .header-link__sell {
            color:#706B65
        }
    }

    .header-link:focus,.header-link:active {
        color: var(--text-color);
        text-decoration: none
    }

    .header-link:hover,.header-link:active {
        opacity: 0.6;
        color: var(--text-color);
        text-decoration: none
    }

    .header-link:visited {
        text-decoration: none
    }

    .header__switchers {
        margin-left: 15px;
        padding-left: 10px;
        width: 24px;
        display: flex;
        align-items: center;
        color: var(--text-color);
        cursor: pointer
    }

    @media (max-width: 1199px) {
        .header__switchers {
            width:50px;
            padding: 0;
            justify-content: center;
            display: none
        }
    }

    .header__switchers:hover {
        opacity: 0.6;
        color: var(--text-hover-color)
    }

    .header__switchers._only-mobile {
        display: none
    }

    @media (max-width: 1199px) {
        .header__switchers._only-mobile {
            display: flex
        }
    }

    .header__switchers svg {
        width: 24px;
        height: 24px
    }

    .header._light {
        --bg-color: #fff;
        --text-color: #151515;
        --text-hover-color: #151515;
        --color-transition: 100ms;
        --hover-border-color: #151515;
        top: 0;
        position: sticky;
        font-family: var(--font-sans);
        transition: transform var(--transition-speed) ease,background-color 250ms ease,color 250ms ease;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.1);
        border-bottom: 1px solid #E0E0E0
    }

    @media (min-width: 1200px) {
        .header._light {
            padding:0 5vw
        }
    }

    .header._light svg {
        transition: fill var(--transition-speed) ease
    }

    .header._light a {
        transition: color var(--transition-speed) ease
    }

    @media (min-width: 1200px) {
        .header._light._floating {
            top:0;
            left: 0;
            width: 100%;
            position: sticky;
            margin-bottom: calc(var(--header-height) * -1)
        }
    }

    @media (min-width: 1200px) {
        .header._light._transparent {
            --bg-color: rgba(255,255,255,0);
            --text-color: white}
    }

    @media (min-width: 1200px) {
        .header._light .header-submenus {
            box-shadow:0px 5px 5px -5px rgba(0,0,0,0.1)
        }
    }

    @media (min-width: 1200px) {
        .header._light .header-menu__item__label,.header._light .header-button,.header._light .header__switchers {
            border-bottom:1px solid transparent
        }

        .header._light .header-menu__item__label:hover,.header._light .header-button:hover,.header._light .header__switchers:hover {
            opacity: 1;
            border-bottom-color: var(--hover-border-color)
        }

        .header._light .header-menu__item__label:hover {
            opacity: 1
        }

        .header._light .header-button,.header._light .header__switchers {
            margin-bottom: -1px
        }

        .header._light .header__switchers {
            padding-left: 0;
            margin-left: 25px
        }

        .header._light .header-button__saved__counter {
            background: none;
            font-weight: 400;
            color: #606060;
            font-size: 16px;
            line-height: 18px;
            padding: 0;
            margin-left: 3px
        }

        .header._light .header-button__avatar {
            display: none
        }
    }

    @media (min-width: 1200px) {
        .header._light._transparent {
            --text-hover-color: white;
            --hover-border-color: white;
            box-shadow: none;
            border-bottom: none
        }
    }

    @media (min-width: 1200px) {
        .header._light._transparent .header__container {
            border-bottom:1px solid rgba(255,255,255,0.3)
        }

        .header._light._transparent .header-submenus {
            --border-color: none;box-shadow: none
        }

        .header._light._transparent .header-menu__item__label:hover {
            opacity: 1;
            border-bottom: 1px solid var(--hover-border-color)
        }

        .header._light._transparent .header-button__saved__counter {
            color: #fff
        }
    }

    .header._light.with-submenu-visible .header-menu__item div {
        border-bottom-color: var(--hover-border-color)
    }

    @media (min-width: 1200px) {
        .header._light._no-max-width {
            padding:0 40px
        }
    }

    @media (min-width: 1200px) {
        .header._light._no-max-width .header__container {
            max-width:none
        }
    }

    .header._serp-page {
        box-shadow: none
    }

    @media (min-width: 1200px) {
        .header._serp-page {
            border-bottom:none
        }
    }

    @media (min-width: 1200px) {
        .header._serp-page .header-submenus {
            border-top:1px solid #E0E0E0
        }
    }

    @media (max-width: 767px) {
        .header._seller-panel .header-user-controls {
            display:none
        }
    }


    .header__bottombar {
        left: 0;
        bottom: 0;
        width: 100%;
        display: none;
        position: fixed;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        background-color: var(--bg-color);
        box-sizing: content-box;
        padding-bottom: env(safe-area-inset-bottom)
    }

    @media (max-width: 1199px) {
        .header__bottombar {
            display:-webkit-box;
            display: -ms-flexbox;
            display: flex;
            color: #0ebab4;
            box-sizing: border-box
        }
    }

    @media (max-width: 1199px) {
        .header__bottombar+.header-user-controls {
            display:none
        }

        .header__bottombar+.header-user-controls._show {
            display: flex;
            height: 67px
        }
    }


    .listing-page__contact-buttons {
        display: flex;
        padding: 10px 20px;
        justify-content: space-between;
        width: 100%;
        box-shadow: 0 0 5px rgba(0,0,0,0.1)
    }

    .listing-page__contact-buttons .button,
    .listing-page__contact-buttons form {
        width: calc(50% - 10px);
        height: 48px;
        overflow: hidden
    }

    .listing-page__contact-buttons .button .je3-spinner,
    .listing-page__contact-buttons form .je3-spinner {
        display: none
    }
    //
    //.listing-page__contact-buttons .button .button,.listing-page__contact-buttons form .button {
    //    width: 100%;
    //    height: 100%
    //}
    //
    //.listing-page__contact-buttons .button .button._waiting,.listing-page__contact-buttons form .button._waiting {
    //    display: none
    //}
    //
    //.listing-page__contact-buttons .button .button._waiting+.je3-spinner,.listing-page__contact-buttons form .button._waiting+.je3-spinner {
    //    display: flex;
    //    width: 100%;
    //    height: 100%;
    //    border: 1px solid #E0E0E0;
    //    box-sizing: border-box
    //}

</style>
