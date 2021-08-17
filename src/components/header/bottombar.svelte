
<div class="header__bottombar">
    <div class="listing-page__contact-buttons">

        <form id="in-contact-buttons">
            <a href="/#" class="button js-phone-button listing-page__bottom-button _uppercase"
               data-error="Try again later."
               data-fetch-phone-numbers-url="/listings/11521677/fetch-phones-numbers"
               data-missing-number-error="Currently unavailable" data-location="Listing page">
                <svg viewBox="0 0 16 16">
                    <path d="M4.35002 1.5C4.10002 1.5 3.85002 1.6 3.60002 1.75H3.55002L2.00002 3.4C1.50002 3.85 1.35002 4.5 1.60002 5.1C2.00002 6.3 3.10002 8.65 5.20002 10.75C7.30002 12.85 9.70002 13.9 10.85 14.35C11.45 14.55 12.1 14.4 12.6 14L14.2 12.4C14.6 12 14.6 11.25 14.2 10.85L12.15 8.8V8.75C11.75 8.35 11 8.35 10.6 8.75L9.60002 9.75C9.25002 9.6 8.40002 9.15 7.55002 8.35C6.75002 7.55 6.30002 6.65 6.15002 6.3L7.15002 5.3C7.55002 4.9 7.60002 4.2 7.15002 3.75L7.10002 3.7L5.10002 1.65H5.05002C4.85002 1.6 4.60002 1.5 4.35002 1.5Z"></path>
                </svg>

                <span>Call agent</span>
            </a>
            <!--                    <div class="je3-spinner">-->
            <!--                        <div></div>-->
            <!--                        <div></div>-->
            <!--                        <div></div>-->
            <!--                    </div>-->
        </form>


        <a href="#seller-contacts" class="button listing-page__bottom-button _uppercase">
            <svg class="je2-icon" width="14" height="14" viewBox="0 0 14 14">
                <use xlink:href="#message-bubble"></use>
            </svg>
            <span>Message agent</span>
        </a>
    </div>

</div>

<style lang="scss">

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
      color: orangered;
      box-sizing: border-box
    }
  }

  .listing-page__contact-buttons {
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    width: 100%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)
  }

  .listing-page__contact-buttons .button,
  .listing-page__contact-buttons form {
    width: calc(50% - 10px);
    height: 48px;
    overflow: hidden
  }

  //.listing-page__contact-buttons .button .je3-spinner,
  //.listing-page__contact-buttons form .je3-spinner {
  //  display: none
  //}

  .listing-page__contact-buttons .button .button, .listing-page__contact-buttons form .button {
    width: 100%;
    height: 100%
  }

  //.listing-page__contact-buttons .button .button._waiting, .listing-page__contact-buttons form .button._waiting {
  //  display: none
  //}

  //.listing-page__contact-buttons .button .button._waiting+.je3-spinner,.listing-page__contact-buttons form .button._waiting+.je3-spinner {
  //    display: flex;
  //    width: 100%;
  //    height: 100%;
  //    //border: 1px solid #E0E0E0;
  //    box-sizing: border-box
  //}

</style>
