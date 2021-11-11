<div class="header-user-controls js-user-controls">
    <div class="header-user-controls__container">
    <span class="header-button header-button__explore je-mobile-only js-explore-button active" data-link="#">
      Explore
      <i class="header-button__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
  <circle cx="10" cy="10" r="9" stroke="#000" stroke-width="2"></circle>
  <path fill-rule="evenodd"
        d="M14.5 5.5l-2.572 6.428L5.5 14.5l2.571-6.428L14.5 5.5zm-5.143 5.143a.91.91 0 101.286-1.286.91.91 0 00-1.286 1.286z"
        clip-rule="evenodd"></path>
</svg>

      </i>
</span>

        <a class="header-button header-button__login js-login" data-link="#" href="#">
      <span class="header-button__user__name">
        Log in
      </span>
            <i class="header-button__icon js-notification-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10 24C4.47715 24 0 19.5228 0 14C0 8.47715 4.47715 4 10 4C15.5228 4 20 8.47715 20 14C20 19.5228 15.5228 24 10 24Z"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M4.6377 20.1801C6.07367 21.427 7.94852 22.1818 9.99965 22.1818C12.0508 22.1818 13.9256 21.427 15.3616 20.1801C14.5915 19.1774 13.4474 18.5454 12.1815 18.5454H7.81783C6.55188 18.5454 5.40785 19.1774 4.6377 20.1801H4.6377Z"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M3.39408 18.8282C4.4879 17.5388 6.06055 16.7273 7.81836 16.7273H12.182C13.9398 16.7273 15.5125 17.5388 16.6063 18.8282C17.597 17.4749 18.182 15.8058 18.182 14.0001C18.182 9.48136 14.5189 5.81824 10.0002 5.81824C5.48148 5.81824 1.81836 9.48136 1.81836 14.0001C1.81836 15.8058 2.40332 17.4749 3.39408 18.8282Z"
                          fill="#635A56"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M3.39408 18.8282C4.4879 17.5388 6.06055 16.7273 7.81836 16.7273H12.182C13.9398 16.7273 15.5125 17.5388 16.6063 18.8282C17.597 17.4749 18.182 15.8058 18.182 14.0001C18.182 9.48136 14.5189 5.81824 10.0002 5.81824C5.48148 5.81824 1.81836 9.48136 1.81836 14.0001C1.81836 15.8058 2.40332 17.4749 3.39408 18.8282Z"
                          fill="white"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M10.0001 15.8181C7.99182 15.8181 6.36377 14.1901 6.36377 12.1818C6.36377 10.1735 7.99182 8.54541 10.0001 8.54541C12.0084 8.54541 13.6365 10.1735 13.6365 12.1818C13.6365 14.1901 12.0084 15.8181 10.0001 15.8181Z"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M9.99982 14C11.004 14 11.818 13.186 11.818 12.1818C11.818 11.1777 11.004 10.3636 9.99982 10.3636C8.99567 10.3636 8.18164 11.1777 8.18164 12.1818C8.18164 13.186 8.99567 14 9.99982 14Z"></path>
                    <circle cx="18" cy="6" r="5" fill="#F4382C" stroke="white" stroke-width="2"></circle>
                </svg>

            </i>
            <span class="notification-circle js-notification-circle"> </span>
        </a></div>
</div>

<style lang="scss">

  .header-user-controls {
    display: flex;

    @media (max-width: 1199px) {
      left: 0;
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
      border-top: 1px solid var(--border-color-bottmobar);

      &.collapsed {
        transform: translate3d(0, 100%, 0)
      }
    }
  }

  .header-user-controls__container {
    flex: 1;
    display: flex;
    white-space: nowrap;

    @media (max-width: 1199px) {
      flex: none;
      width: 100%;
      display: flex;
      justify-content: space-evenly
    }
  }

</style>
