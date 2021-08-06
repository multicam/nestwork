<script>
    import Logo from "../icons/logo.svelte"
</script>

<div class="header__top-section">
    <div class="header__hamburger">
        <div class="hamburger-button js-hamburger-menu _light"></div>
    </div>
    <a class="header__logo" aria-label="NestLove" href="/">
        <Logo/>
    </a>
    <div class="header__options _hide-on-mobile">
        <a class="header-button header-link header-link__sell je-desktop-only" href="#">Yes</a>
    </div>
    <div class="header__switchers _only-mobile js-header-switchers">
        <svg viewBox="0 0 24 24">
            <path d="M21 15.75C21.45 14.625 21.75 13.35 21.75 12C21.75 10.65 21.45 9.375 21 8.25C19.5 4.725 16.05 2.25 12 2.25C7.95 2.25 4.5 4.725 3 8.25C2.55 9.375 2.25 10.65 2.25 12C2.25 13.35 2.55 14.625 3 15.75C4.5 19.275 7.95 21.75 12 21.75C16.05 21.75 19.5 19.275 21 15.75ZM12 20.25C10.725 20.25 9.375 18.525 8.7 15.75H15.3C14.625 18.525 13.275 20.25 12 20.25ZM8.4 14.25C8.325 13.575 8.25 12.825 8.25 12C8.25 11.175 8.325 10.425 8.4 9.75H15.6C15.675 10.425 15.75 11.175 15.75 12C15.75 12.825 15.675 13.575 15.6 14.25H8.4ZM3.75 12C3.75 11.25 3.9 10.5 4.05 9.75H6.9C6.825 10.5 6.75 11.25 6.75 12C6.75 12.75 6.825 13.5 6.9 14.25H4.05C3.9 13.5 3.75 12.75 3.75 12ZM12 3.75C13.275 3.75 14.625 5.475 15.3 8.25H8.7C9.375 5.475 10.725 3.75 12 3.75ZM17.1 9.75H19.95C20.175 10.5 20.25 11.25 20.25 12C20.25 12.75 20.1 13.5 19.95 14.25H17.1C17.175 13.5 17.25 12.75 17.25 12C17.25 11.25 17.175 10.5 17.1 9.75ZM19.35 8.25H16.875C16.575 6.75 16.05 5.475 15.375 4.5C17.1 5.25 18.45 6.6 19.35 8.25ZM8.625 4.5C7.95 5.475 7.5 6.825 7.125 8.25H4.65C5.55 6.6 6.9 5.25 8.625 4.5ZM4.65 15.75H7.125C7.425 17.25 7.95 18.525 8.625 19.5C6.9 18.75 5.55 17.4 4.65 15.75ZM15.375 19.5C16.05 18.525 16.5 17.175 16.875 15.75H19.35C18.45 17.4 17.1 18.75 15.375 19.5Z"></path>
        </svg>

    </div>
</div>

<style lang="scss">

  .header__top-section {
    flex: 1;
    display: flex;
    justify-content: space-between
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
      margin-left: -13px
    }

    @media (max-width: 1199px) {
      left: 50%;
      position: absolute;
      transform: translateX(-50%)
    }

    &:hover, &:focus {
      color: var(--text-color)
    }
  }

  :global(.header-button) {
    flex: 1;
    color: var(--text-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: opacity 150ms ease;

    @media (max-width: 1199px) {
      font-size: 12px;
      margin: 0 10px;
      width: 57px;
      color: #8C8C8C;
      font-weight: 500;
      text-align: center;
      flex-direction: column-reverse
    }


    @media (max-width: 1199px) {
      &.active {
        color: var(--text-color)
      }
    }
  }

  .header-button__user__name {
    max-width: 75px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @media (min-width: 1200px) {
      color: var(--text-color)
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
    text-align: center;

    @media (max-width: 1199px) {
      display: none
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
    justify-content: center;

    @media (max-width: 1199px) {
      width: 22px;
      height: 22px;
      font-size: 12px;
      margin-left: 0;
      margin-bottom: 6px;
      color: var(--text-color) -active;
      line-height: 22px
    }
  }

  .header-button__icon {
    display: none;

    @media (max-width: 1199px) {
      width: 20px;
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

  .header-button {
    &:focus, &:active {
      color: var(--text-color);
      text-decoration: none
    }

    &:hover, &:active {
      opacity: 0.6;
      color: var(--text-color);
      text-decoration: none
    }

    &:visited {
      text-decoration: none
    }

    & + & {
      margin-left: 25px
    }

    & + .header-button__login {
      margin-left: 15px
    }

    & + .header-button__login i {
      width: 24px;
      height: 24px;
      margin-left: 3px
    }

    @media (min-width: 1200px) {
      & + & {
        margin-left: 30px
      }

      & + .header-button__login {
        margin-left: 20px;
        position: relative
      }
    }


    @media (max-width: 1199px) {
      & + & {
        margin-left: 0
      }
    }

    &.active {
      color: #000
    }
  }

  .header-button__explore {
    svg {
      fill: #8C8C8C;

      circle {
        fill: #fff;
        stroke: #8C8C8C
      }
    }

    &.active svg {
      fill: #000;

      circle {
        fill: #000;
        stroke: #000
      }

      path {
        fill: #fff
      }
    }
  }

  .header-button__login {
    svg {
      circle {
        fill: none;
        stroke-width: 0
      }

      path:nth-child(2) {
        fill: #fff
      }

      path:last-of-type {
        fill: #fff
      }
    }

    &.active svg {
      fill: #000;

      path:nth-child(2) {
        fill: #000
      }

      path:last-of-type {
        fill: #000
      }
    }
  }

  .header-button__saved {
    i {
      width: 24px;
      height: 24px;

      svg {
        stroke: currentColor;
        fill: white;
        stroke-width: 2
      }
    }

    &.active {
      svg {
        fill: #000;
      }
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
    align-self: center;

    @media (max-width: 1199px) {
      &__sell {
        color: #706B65
      }
    }

    &:focus, &:active {
      color: var(--text-color);
      text-decoration: none
    }

    &:hover, &:active {
      opacity: 0.6;
      color: var(--text-color);
      text-decoration: none
    }

    &:visited {
      text-decoration: none
    }
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
    display: none;
    height: 100%;
    margin-left: auto;

    @media (max-width: 1199px) {
      &._hide-on-mobile {
        display: none
      }
    }
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


</style>
