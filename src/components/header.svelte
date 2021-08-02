<script>
  import Logo from '../components/icons/logo.svelte'
</script>
<div class="header header js-header collapsable _light _floating _transparent ">
    <div class="header__container">
        <a class="header__logo">
            <Logo/>
        </a>
    </div>
</div>

<style>

    .header {
        box-sizing: border-box;
        top: 0;
        color: var(--text-color);
        height: var(--header-height);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: -webkit-sticky;
        position: sticky;
        z-index: 300;
        font-family: var(--font-sans);
        font-display: fallback;
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
    }

    @media (max-width: 1199px) {
        .header {
            --header-height: 50px
        }
    }

    .header.with-filters {
        top: calc(var(--header-height) * -1);
        transition: transform var(--transition-speed) ease;
    }

    @media (min-width: 1200px) {
        .header.with-filters.visible {
            transform: translate3d(0, 100%, 0)
        }
    }

    @media (max-width: 1199px) {
        .header.with-filters .header__top-section {
            transition: transform var(--transition-speed) ease;
        }
    }

    @media (max-width: 1199px) {
        .header.with-filters.visible .header__top-section {
            -webkit-transform:translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0)
        }
    }

    .header:not(.collapsable) {
        top: 0
    }

    @media (min-width: 1200px) {
        .header:not(.collapsable) {
            -webkit-transform:translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0)
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-self: center;
        justify-content: center;
        width: 166px;
        height: 100%;
        box-sizing: border-box;
        padding: 0 13px
    }

    @media (min-width: 1200px) {
        .header__logo {
            margin-left:-13px
        }
    }

    @media (max-width: 1199px) {
        .header__logo {
            left:50%;
            position: absolute;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%)
        }
    }

    .header__logo:hover,.header__logo:focus {
        color: var(--text-color)
    }

    .header__container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        height: 100%;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: stretch;
        -ms-flex-align: stretch;
        align-items: stretch;
        font-size: 16px;
        box-sizing: border-box;
        max-width: calc(1920px - 10vw);
        position: relative;
        z-index: 2
    }

    @media (min-width: 768px) and (max-width: 1199px) {
        .header__container {
            width:50%
        }
    }

    @media (max-width: 767px) {
        .header__container {
            width:100%
        }
    }

    @media (max-width: 1199px) {
        .header__container {
            padding:0
        }
    }

    .header__top-section {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between
    }

    .header__hamburger {
        display: none
    }

    @media (max-width: 1199px) {
        .header__hamburger {
            display:-webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            width: 64px
        }
    }

    .header__options {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        margin-left: auto
    }

    @media (max-width: 1199px) {
        .header__options._hide-on-mobile {
            display:none
        }
    }

    .header__spacer {
        display: none
    }

    @media (min-width: 1200px) {
        .header__spacer {
            -webkit-box-flex:1;
            -ms-flex: 1;
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
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            height: 67px
        }
    }

    .header-menu {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        box-sizing: border-box;
        height: 100%;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap
    }

    @media (min-width: 1200px) {
        .header-menu {
            position:absolute;
            left: 50%;
            -webkit-transform: translate3d(-50%, 0, 0);
            transform: translate3d(-50%, 0, 0)
        }
    }

    @media (max-width: 1199px) {
        .header-menu {
            position:fixed;
            top: var(--header-height);
            bottom: 0;
            left: 0;
            padding: 0;
            z-index: 20;
            height: auto;
            display: none;
            width: 100%;
            -webkit-box-pack: start;
            -ms-flex-pack: start;
            justify-content: flex-start;
            background-color: rgba(0,0,0,0);
            -webkit-transition: background-color 0.25s cubic-bezier(0.29, 0.71, 0.53, 1);
            transition: background-color 0.25s cubic-bezier(0.29, 0.71, 0.53, 1)
        }
    }

    .header-menu__container {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        box-sizing: border-box
    }

    @media (max-width: 1199px) {
        .header-menu__container {
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            padding: 0 15px;
            position: absolute;
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-transform: translate3d(0%, 0, 0);
            transform: translate3d(0%, 0, 0);
            -webkit-transition: opacity 0.25s cubic-bezier(0.29, 0.71, 0.53, 1), -webkit-transform 0.25s cubic-bezier(0.29, 0.71, 0.53, 1);
            transition: opacity 0.25s cubic-bezier(0.29, 0.71, 0.53, 1), -webkit-transform 0.25s cubic-bezier(0.29, 0.71, 0.53, 1);
            transition: transform 0.25s cubic-bezier(0.29, 0.71, 0.53, 1), opacity 0.25s cubic-bezier(0.29, 0.71, 0.53, 1);
            transition: transform 0.25s cubic-bezier(0.29, 0.71, 0.53, 1), opacity 0.25s cubic-bezier(0.29, 0.71, 0.53, 1), -webkit-transform 0.25s cubic-bezier(0.29, 0.71, 0.53, 1)
        }
    }

    .header-menu__content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap
    }

    @media (max-width: 1199px) {
        .header-menu__content {
            top:0;
            left: 0;
            height: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            overflow: hidden;
            position: absolute;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            box-sizing: border-box;
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
            -webkit-transition: -webkit-transform 0.25s cubic-bezier(0.29, 0.71, 0.53, 1);
            transition: -webkit-transform 0.25s cubic-bezier(0.29, 0.71, 0.53, 1);
            transition: transform 0.25s cubic-bezier(0.29, 0.71, 0.53, 1);
            transition: transform 0.25s cubic-bezier(0.29, 0.71, 0.53, 1), -webkit-transform 0.25s cubic-bezier(0.29, 0.71, 0.53, 1);
            background-color: var(--bg-color)
        }
    }

    @media (min-width: 768px) and (max-width: 1199px) {
        .header-menu__content {
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
        padding: 0 10px
    }

    @media (min-width: 1200px) {
        .header-menu__item {
            padding:0 25px
        }
    }

    @media (min-width: 1200px) and (max-width: 1300px) {
        .header-menu__item {
            padding:0 15px
        }
    }

    .header-menu__item__label {
        opacity: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        color: var(--text-color);
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-weight: normal;
        white-space: nowrap;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        text-decoration: none;
        -webkit-transition: opacity 150ms ease;
        transition: opacity 150ms ease
    }

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
        .header-menu__item__label {
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
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            padding: 0
        }

        .header-menu__item[data-submenu] .header-menu__item__arrow {
            width: 8px;
            height: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
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
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
        -webkit-transition: all 0.25s cubic-bezier(0.29, 0.71, 0.53, 1);
        transition: all 0.25s cubic-bezier(0.29, 0.71, 0.53, 1)
    }

    @media (max-width: 1199px) {
        .header-submenus__container {
            width:100%
        }
    }

    .header-submenus__container.visible {
        -webkit-transform: translate3d(0, 0, 0);
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
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
            background-color: transparent;
            -webkit-box-orient: vertical;
            -webkit-box-direction: reverse;
            -ms-flex-direction: column-reverse;
            flex-direction: column-reverse;
            -webkit-transition: all 0.25s cubic-bezier(0.29, 0.71, 0.53, 1);
            transition: all 0.25s cubic-bezier(0.29, 0.71, 0.53, 1)
        }

        .header-submenus__container {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            padding: 0 15px;
            -webkit-transform: translate3d(100%, 0, 0);
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
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            border-bottom: 1px solid #E0E0E0
        }

        .header-submenus__header__back {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 60px;
            height: 60px;
            -ms-flex-item-align: center;
            align-self: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
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
            -webkit-transform: rotate(-180deg);
            transform: rotate(-180deg)
        }

        .header-submenus__header__title {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-item-align: center;
            align-self: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            font-size: 16px
        }
    }

    .header-submenu {
        display: none;
        width: 100%;
        min-height: var(--header-height);
        background-color: var(--bg-color);
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center
    }

    @media (max-width: 1199px) {
        .header-submenu {
            -webkit-box-flex:1;
            -ms-flex: 1;
            flex: 1;
            display: none;
            position: static;
            -webkit-box-align: start;
            -ms-flex-align: start;
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
        display: -webkit-box;
        display: -ms-flexbox;
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
            display:-webkit-box;
            display: -ms-flexbox;
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
            -webkit-transform:translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0)
        }
    }

    .header.with-menu-visible,.header.with-submenu-visible {
        z-index: 1000
    }

    .header.with-submenu-visible .header-submenus__container {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }

    @media (max-width: 1199px) {
        .header.with-menu .header-menu {
            display:-webkit-box;
            display: -ms-flexbox;
            display: flex
        }

        .header.with-menu-visible .header-menu {
            background-color: rgba(0,0,0,0.5)
        }

        .header.with-menu-visible .header-menu__content {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0)
        }

        .header.with-menu-scaled .header-menu__container {
            -webkit-transform: scale(0.9);
            transform: scale(0.9);
            opacity: 0.5
        }
    }

    .header._no-footer .header-user-controls {
        display: none
    }

    .header-user-controls {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    @media (max-width: 1199px) {
        .header-user-controls {
            left:0;
            bottom: 0;
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            position: fixed;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            box-sizing: content-box;
            height: 62px;
            -webkit-transition: -webkit-transform var(--transition-speed) ease;
            transition: -webkit-transform var(--transition-speed) ease;
            transition: transform var(--transition-speed) ease;
            transition: transform var(--transition-speed) ease, -webkit-transform var(--transition-speed) ease;
            background-color: var(--bg-color-bottmobar);
            padding-bottom: env(safe-area-inset-bottom);
            border-top: 1px solid var(--border-color-bottmobar)
        }
    }

    @media (max-width: 1199px) {
        .header-user-controls.collapsed {
            -webkit-transform:translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0)
        }
    }

    .header-user-controls__container {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        white-space: nowrap
    }

    @media (max-width: 1199px) {
        .header-user-controls__container {
            -webkit-box-flex:0;
            -ms-flex: none;
            flex: none;
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: space-evenly;
            -ms-flex-pack: space-evenly;
            justify-content: space-evenly
        }
    }

    .header-button {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        color: var(--text-color);
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-transition: opacity 150ms ease;
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
            -webkit-box-orient: vertical;
            -webkit-box-direction: reverse;
            -ms-flex-direction: column-reverse;
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
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
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
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
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        height: 100%;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        color: var(--text-color);
        text-decoration: none;
        text-align: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-item-align: center;
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: var(--text-color);
        cursor: pointer
    }

    @media (max-width: 1199px) {
        .header__switchers {
            width:50px;
            padding: 0;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
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
            display:-webkit-box;
            display: -ms-flexbox;
            display: flex
        }
    }

    .header__switchers svg {
        width: 24px;
        height: 24px
    }

    .header._light {
        --bg-color: #fff;--text-color: #151515;--text-hover-color: #151515;--color-transition: 100ms;--hover-border-color: #151515;top: 0;
        position: -webkit-sticky;
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

    .header._legacy-page {
        box-shadow: none
    }
</style>
