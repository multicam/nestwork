<script context="module">
  const {log} = console

  export async function load({ page, fetch, session, context }) {
    const url = `/listing/${page.params.slug}.json`;
    log('---',url)
    const res = await fetch(url);

    if (res.ok) {
      const data = await res.json()
      log(data)
      return {
        props: {
          article: data
        }
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script>
  import ListingGallery from '../../components/listing-gallery.svelte'
</script>

<div class="listing-page__container js-listing-page" data-listing-price="2300000000">
    <div class="listing-page__left-side">

        <ListingGallery/>

    </div>

    <div class="listing-page__right-side">
        <div class="listing-page__right-side__container">
            <div class="listing-page__right-side__head">

                <div class="breadcrumbs">
                    <ol>
                        <li>
                            <a href="#">Real Estate</a>
                        </li>
                        <li>
                            <a href="#">Portugal</a>
                        </li>
                        <li>
                            <a href="#">Cascais</a>
                        </li>


                    </ol>
                </div>

                <div class="listing-page__right-side__head__buttons">

                    <button class="button _noborder _uppercase share" aria-label="Share">
                        <svg viewBox="0 0 21 20">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.87499 13.125V4.625L6.56249 7.9375L5.68749 7.0625L10.5 2.25L15.3125 7.0625L14.4375 7.9375L11.125 4.625V13.125H9.87499ZM16.75 16.1251V10.7501H18V17.3751H3V10.7501H4.25V16.1251H16.75Z"></path>
                        </svg>


                        <span>
       Share
      </span>


                    </button>

                    <button class="button _only-icon _noborder save " data-listing-id="11521677" aria-label="Save">
                        <svg>
                            <use xlink:href="#heart"></use>
                        </svg>


                    </button>
                </div>
            </div>
            <div class="listing-page__right-side__info">
                <h1 class="texts__heading-34">
                    Palace, 14 Bedrooms, For Sale
                </h1>
                <div class="listing-page__right-side__info__price">
                    <span class="texts__heading-34">$ 37,104,930</span>

                    <button class="button _onlyicon _noborder" aria-label="This price is converted from €23,000,000">
                        <svg viewBox="0 0 12 12">
                            <circle cx="6" cy="6" r="6"></circle>
                            <rect x="5" y="5" width="2" height="5" fill="white"></rect>
                            <rect x="5" y="2" width="2" height="2" fill="white"></rect>
                        </svg>


                        <div class="button__tooltip ">
                            This price is converted from €23,000,000
                        </div>

                    </button>
                </div>
                <div class="listing-page__right-side__info__features">
                    <div class="listing-page__right-side__info__features__feature">
                        <div>
                            <svg viewBox="0 0 24 24">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 4.5C4.42157 4.5 3.75 5.17157 3.75 6V11.25C2.92157 11.25 2.25 11.9216 2.25 12.75V16.5C2.25 17.3284 2.92157 18 3.75 18H5.25V19.5H6.75V18H17.25V19.5H18.75V18H20.25C21.0784 18 21.75 17.3284 21.75 16.5V12.75C21.75 11.9216 21.0784 11.25 20.25 11.25V6C20.25 5.17157 19.5784 4.5 18.75 4.5H5.25ZM18.75 11.25V6H5.25V11.25H6V9.75C6 8.92157 6.67157 8.25 7.5 8.25H11.25C11.5232 8.25 11.7794 8.32305 12 8.45067C12.2206 8.32305 12.4768 8.25 12.75 8.25H16.5C17.3284 8.25 18 8.92157 18 9.75V11.25H18.75ZM18 12.75H12.75H11.25H6H5.25H3.75V16.5H20.25V12.75H18.75H18ZM11.25 11.25V9.75H7.5V11.25H11.25ZM16.5 11.25V9.75H12.75V11.25H16.5Z"></path>
                            </svg>
                            14
                        </div>
                        <div>Bedrooms</div>
                    </div>
                    <div class="listing-page__right-side__info__features__feature">
                        <div>
                            <svg viewBox="0 0 24 24">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3C16.3431 3 15 4.34315 15 6H13.5V7.5H18V6H16.5C16.5 5.17157 17.1716 4.5 18 4.5C18.8284 4.5 19.5 5.17157 19.5 6V9.75H2.25V11.25H3.14831L4.25675 16.238C4.38272 16.8049 4.7162 17.2817 5.16654 17.5957L4.78569 19.5H6.3154L6.61542 17.9999H17.4146L17.7896 19.5H19.3358L18.8557 17.5799C19.2947 17.2658 19.6192 16.7954 19.7431 16.238L20.8515 11.25H21.75V9.75H21V6C21 4.34315 19.6569 3 18 3ZM4.6849 11.25H19.3149L18.2788 15.9126C18.2025 16.2558 17.8982 16.4999 17.5467 16.4999H6.45317C6.10165 16.4999 5.79729 16.2558 5.72103 15.9126L4.6849 11.25Z"></path>
                            </svg>
                            17
                        </div>
                        <div>Bathrooms</div>
                    </div>
                    <div class="listing-page__right-side__info__features__feature">
                        <div>
                            <svg viewBox="0 0 25 24">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7804 12.2195L12.5001 1.93921L2.21973 12.2195L3.28039 13.2802L4.25 12.3106V21H11V13.5H14V21H20.75V12.3105L21.7197 13.2802L22.7804 12.2195ZM19.25 10.8105L12.5001 4.06053L5.75 10.8106V19.5H9.5V12H15.5V19.5H19.25V10.8105Z"></path>
                            </svg>
                            3 350
                        </div>
                        <div>m<span>2</span></div>
                    </div>
                    <div class="listing-page__right-side__info__features__feature">
                        <div>
                            <svg viewBox="0 0 24 24">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 9C11.25 6.51472 13.2647 4.5 15.75 4.5C18.2353 4.5 20.25 6.51472 20.25 9C20.25 11.2297 18.6283 13.0807 16.5 13.4378V11.6252L19.2002 9.59997L18.3002 8.39997L16.5 9.75015V8.25H15V13.4378C12.8717 13.0807 11.25 11.2297 11.25 9ZM15 14.9536C14.0117 14.8303 13.0981 14.4668 12.3195 13.9232C11.7009 15.2298 10.4715 16.1909 9 16.4378V18.75H15V14.9536ZM16.5 18.75H21.75V20.25H2.25V18.75H7.5V16.4378C5.37171 16.0807 3.75 14.2297 3.75 12C3.75 9.51472 5.76472 7.5 8.25 7.5C8.82107 7.5 9.3673 7.60638 9.86994 7.8004C10.4257 5.06151 12.8471 3 15.75 3C19.0637 3 21.75 5.68629 21.75 9C21.75 12.0597 19.4597 14.5845 16.5 14.9536V18.75ZM9.76374 9.40935C9.31939 9.14915 8.80211 9 8.25 9C6.59315 9 5.25 10.3431 5.25 12C5.25 13.3979 6.20608 14.5725 7.5 14.9055V12.75H9V14.9055C10.0266 14.6412 10.8406 13.8472 11.1331 12.8322C10.3509 11.8909 9.85115 10.7067 9.76374 9.40935Z"></path>
                            </svg>
                            4
                        </div>
                        <div>Ha</div>
                    </div>
                </div>
            </div>

            <div class="listing-page__right-side__buttons js-sticky-buttons">

                <button class="button save _uppercase " data-listing-id="11521677">
                    <svg>
                        <use xlink:href="#heart"></use>
                    </svg>

                    <span>
       Save
      </span>


                </button>
                <a href="#seller-contacts" class="button _cyan _uppercase contact-agent" data-location="Listing page">
                    <span>Contact agent</span>
                </a>
            </div>

            <div class="listing-page__right-side__office">
                <div class="listing-page__right-side__office__left">
                    <div>For sale by</div>
                    <a class="js-mxp-track link" data-type="internal_office_link" href="/offices/portugal-sotheby-s-international-realty-10501">Portugal Sotheby’s
                        International Realty</a>
                </div>
            </div>

            <div class="listing-page__right-side__description">
                <h2 class="texts__heading-28">Description</h2>
                <input id="description" type="checkbox">
                <div>
                    The Patino Palace, built in the 50's, inspired by the Portuguese architecture of the 18th
                    century, is the result of the great passion of the Bolivian billionaire, Antenor Patino, for
                    Portugal, in particular for Estoril. Here, he ordered the construction of his holiday home,
                    occupying three hectares of the fifty that make up the Condominium, therefore choosing the
                    highest point of the Farm, with a…
                    <label for="description" class="js-mxp-track" data-type="read_more">
                        <span class="link">Read more</span>
                    </label>
                </div>
                <div>The Patino Palace, built in the 50's, inspired by the Portuguese architecture of the 18th
                    century, is the result of the great passion of the Bolivian billionaire, Antenor Patino, for
                    Portugal, in particular for Estoril. Here, he ordered the construction of his holiday home,
                    occupying three hectares of the fifty that make up the Condominium, therefore choosing the
                    highest point of the Farm, with a superb sea view, surrounded by the lush green of the trees
                    that characterize it. The Palace offers unique architectural elements, such as a sumptuous
                    Joanina-inspired library, wooden ceilings, walls decorated with frescoes, tiles dating from
                    the 17th and 18th centuries.<br>With a private gross area of 3,350 square meters, comprising
                    three floors, we find an imposing entrance hall with double height on the main floor, living
                    room, dining room and library, all with direct access to the Terrace, overlooking the
                    majestic gardens. Still on this floor, there are two en-suite bedrooms, an office and a
                    guest toilet. The upper floor has twelve en-suite bedrooms and access to the service area, a
                    separate wing of the Palace where these are located, several storage rooms, kitchen, pantry
                    and technical areas. Downstairs, there is the cinema room, still with the original
                    projectors from the 60s, a Spa with sauna, a Steam room and a massage room. There is also a
                    service Apartment located outside the Palace. A Bowling Pavilion, a romantic tea room and
                    support facilities for the pool area are also integral parts of the Palace.<br>Description,
                    luxury, privacy and security are the characteristics that define this Property.
                </div>
            </div>


            <div class="listing-page__right-side__amenities">
                <h2 class="texts__heading-28">Amenities</h2>
                <div class="listing-page__right-side__amenities__column">
                    <h3 class="texts__regular-16">Lot</h3>
                    <div class="texts__regular-16">
                        Water View
                    </div>
                    <div class="texts__regular-16">
                        Privacy
                    </div>
                    <div class="texts__regular-16">
                        Sea View
                    </div>
                </div>
                <div class="listing-page__right-side__amenities__column">
                    <h3 class="texts__regular-16">Indoor</h3>
                    <div class="texts__regular-16">
                        Sauna
                    </div>
                    <div class="texts__regular-16">
                        Steam Room
                    </div>
                    <div class="texts__regular-16">
                        Library
                    </div>
                </div>
                <div class="listing-page__right-side__amenities__column">
                    <h3 class="texts__regular-16">Outdoor</h3>
                    <div class="texts__regular-16">
                        Pool
                    </div>
                </div>
            </div>


            <div class="listing-page__right-side__other-info _empty js-price-insights">
                <div class="listing-page__right-side__other-info__wrapper">
                    <h2 class="texts__heading-28">Price Insights</h2>
                    <div class="listing-page__right-side__badge">new</div>
                </div>
            </div>


            <div class="listing-page__right-side__other-info">
                <h2 class="texts__heading-28">Building Info</h2>
                <div class="listing-page__right-side__other-info__columns">
                    <span>Year build<div>1957</div></span>
                    <span>Property type<div>House</div></span>
                </div>
            </div>

            <div class="listing-page__right-side__location">
                <h2 class="texts__heading-28">Location</h2>
                <div class="texts__regular-16">Cascais, Cascais, Lisbon, Portugal</div>

                <div class="map js-map-root ">

                    <div class="map__single-marker js-single-marker" data-lat="38.6970565" data-lng="-9.4222945">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d)">
                                <circle cx="28" cy="28" r="24" fill="#151515"></circle>
                                <circle cx="28" cy="28" r="23" stroke="white" stroke-width="2"></circle>
                            </g>
                            <path d="M37 37H30.0769V30.7692H25.9231V37H19V25.9231L28 19L37 25.9231V37Z" fill="white"></path>
                            <defs>
                                <filter id="filter0_d" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                                    <feOffset></feOffset>
                                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>
                                </filter>
                            </defs>
                        </svg>

                    </div>

                    <div class="map__zoom">

                        <button class="button js-plus-map _onlyicon _noborder" aria-label="Zoom in">
                            <svg viewBox="0 0 32 32">
                                <path d="M15 5V15H5V17H15V27H17V17H27V15H17V5H15Z"></path>
                            </svg>


                        </button>

                        <button class="button js-minus-map _onlyicon _noborder" aria-label="Zoom out">
                            <svg viewBox="0 0 32 32">
                                <path d="M5 15V17H27V15H5Z"></path>
                            </svg>


                        </button>
                    </div>
                    <div class="map__map js-mapbox-map"></div>


                    <a href="https://www.google.com/maps/search/?api=1&amp;query=38.6970565,-9.4222945" class="button _uppercase _noborder js-mxp-track" target="_blank" data-type="google_maps_link" rel="noreferrer noopenner" aria-label="Google Maps">

      <span>
       Google Maps
      </span>


                        <svg>
                            <use xlink:href="#arrow-right-alt"></use>
                        </svg>


                    </a>


                </div>

            </div>

            <div class="listing-page__right-side__contact-form">
                <div id="seller-contacts"></div>
                <h2 class="texts__heading-28">Contact Agent</h2>


                <!--                <script type="text/javascript">-->
                <!--                  window.JE_INQUIRY_PARAMS = {-->
                <!--                    "texts": {-->
                <!--                      "errors": {-->
                <!--                        "requiredName": "Enter your name",-->
                <!--                        "requiredEmail": "Enter your email address",-->
                <!--                        "requiredMessage": "Enter your message",-->
                <!--                        "requiredTerms": "You must accept the Terms to send your message",-->
                <!--                        "invalidFormatEmail": "Check your email address",-->
                <!--                        "invalidFormatPhone": "Check your phone number"-->
                <!--                      }-->
                <!--                    },-->
                <!--                    "sendInquiryUrl": "/inquiries/send_inquiry",-->
                <!--                    "enableHumanVerification": true,-->
                <!--                    "listingId": 11521677,-->
                <!--                    "listingPriceUsd": "27297629.62",-->
                <!--                    "officeName": "Portugal Sotheby’s International Realty"-->
                <!--                  };-->
                <!--                </script>-->

                <div class="contact-form ">
                    <div class="contact-form__agent ">

                        <div class="contact-form__agent-avatar">
                            <div class="contact-form__agent-avatar-placeholder" data-name-symbol="M"></div>
                        </div>

                        <div class="contact-form__agent-info">
                            <div class="contact-form__agent-name">Macarena Osorno</div>

                            <form id="fetch-phone-button">
                                <div data-sitekey="6LeNK2caAAAAABqNVS2GtBowWgxSInPKc9XdX4PE" data-size="invisible"></div>
                                <a href="#" class="button js-phone-button _noborder" data-error="Try again later." data-fetch-phone-numbers-url="/listings/11521677/fetch-phones-numbers" data-missing-number-error="Currently unavailable" data-location="Listing page">

                                    <span>Show phone number</span>
                                </a>
                                <div class="je3-spinner">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </form>

                        </div>

                        <div class="contact-form__agent__buttons">
                        </div>

                    </div>
                    <div class="contact-form__wrapper">
                        <form id="inquiry-form-listing" class="simple_form contact-form__form" novalidate="novalidate" action="" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="4hzqZLrE3aDda2mHcPtiziUMMIjn2Un6PY2yarJRPYJlGU4OBWbyv7CI5I7KIznSUBnjIL1sgy2QT2g1elKsfg==">
                            <div data-sitekey="6LeNK2caAAAAABqNVS2GtBowWgxSInPKc9XdX4PE" data-size="invisible"></div>

                            <input class="js-je-session" value="eyJpc19hdXRoZW50aWNhdGVkIjoiTm8iLCJncm91cF9pZCI6Miwib2ZmaWNl
X2lkIjoxMDUwMSwiYWdlbnRfaWQiOjgyNDUyLCJsaXN0aW5nX2lkIjoxMTUy
MTY3NywiY291bnRyeSI6IlBvcnR1Z2FsIiwiY2l0eSI6IkNhc2NhaXMiLCJw
YWdlX3R5cGUiOiJMaXN0aW5nIiwiY2F0ZWdvcnkiOiJyZWFsX2VzdGF0ZSIs
Imxpc3RpbmdfcHJpY2UiOiIyMzAwMDAwMC4wMCIsInNlY3Rpb24iOiJGb3Ig
c2FsZSIsInN1Yl9zZWN0aW9uIjoiUmVhbEVzdGF0ZSJ9
" type="hidden" name="je_session" id="je_session">
                            <input class="js-je-utm" value="e30=
" type="hidden" name="je_utm" id="je_utm">
                            <input class="js-country-code" type="hidden" name="country_code" id="country_code">

                            <div class="contact-form__form-row">
                                <input class="input" type="text" placeholder="Name" name="name" value="" aria-label="Name" required="" style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==&quot;); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;">
                            </div>
                            <div class="contact-form__form-row">
                                <input class="input" type="email" placeholder="Email" name="email" value="" aria-label="Email" required="">
                            </div>
                            <div class="contact-form__form-row">
                                <input class="input" type="tel" placeholder="Phone (optional)" name="phone" aria-label="Phone (optional)">
                            </div>
                            <div class="contact-form__form-row">
                                <textarea class="input" name="message" enterkeyhint="send" aria-label="I'm interested in Palace, 14 Bedrooms, For Sale (Cascais, Portugal)." required="">I'm interested in Palace, 14 Bedrooms, For Sale (Cascais, Portugal).</textarea>
                            </div>
                            <div class="contact-form__form-row">
                                <button type="submit" class="contact-form__submit button _cyan _uppercase" name="inquiry-submit">
                                    <span>Send message</span>
                                </button>
                            </div>
                            <div class="contact-form__form-row _collapsed js-serp-checkbox _hidden">

                                <label class="checkbox _black">
                                    <input type="checkbox" name="save_search" checked="checked">
                                    <span class="checkbox__icon">
    <svg><use xlink:href="#check"></use></svg>
  </span>
                                    <span class="checkbox__text">Notify me via email when similar listings appear</span>
                                </label>

                            </div>
                            <div class="contact-form__form-row _collapsed">

                                <label class="checkbox _black _required">
                                    <input type="checkbox" name="terms" required="required" checked="checked">
                                    <span class="checkbox__icon">
    <svg><use xlink:href="#check"></use></svg>
  </span>
                                    <span class="checkbox__text">I agree to <a href="/about/terms-of-use" target="_blank" class="link">Terms of use</a> and <a href="/about/privacy-policy" target="_blank" class="link">Privacy Policy</a></span>
                                </label>

                            </div>
                        </form>
                    </div>
                    <div class="contact-form__finish success">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 32C0 14.4 14.4 0 32 0C49.6 0 64 14.4 64 32C64 49.6 49.6 64 32 64C14.4 64 0 49.6 0 32ZM2 32C2 48.5 15.5 62 32 62C48.5 62 62 48.5 62 32C62 15.5 48.5 2 32 2C15.5 2 2 15.5 2 32ZM21.6998 33.3L27.9998 39.5L45.2998 22.3L46.6998 23.7L28.0998 42.3L20.2998 34.7L21.6998 33.3Z" fill="#006C75"></path>
                        </svg>

                        <div class="contact-form__finish-title">
                            Thank you!
                        </div>
                        <div class="contact-form__finish-text">
                            Your message has been sent to the seller. They will contact you soon.
                        </div>
                    </div>
                    <div class="contact-form__finish fail">
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 32C0 14.4 14.4 0 32 0s32 14.4 32 32-14.4 32-32 32S0 49.6 0 32zm2 0c0 16.5 13.5 30 30 30s30-13.5 30-30S48.5 2 32 2 2 15.5 2 32zm30-1.4l9.6-9.6 1.4 1.4-9.6 9.6 9.6 9.6-1.4 1.4-9.6-9.6-9.6 9.6-1.4-1.4 9.6-9.6-9.6-9.6 1.4-1.4 9.6 9.6z"></path>
                        </svg>

                        <div class="contact-form__finish-title">
                            Something went wrong...
                        </div>
                        <div class="contact-form__finish-text">
                            We were unable to send your message to the seller. Please try again or contact us.
                        </div>
                    </div>
                </div>

            </div>

            <div class="listing-page__right-side__details">
                <h2 class="texts__heading-28">For sale by</h2>
                <div class="listing-page__right-side__details__office">
                    <div class="listing-page__right-side__details__office__left">
                        <a class="js-mxp-track link" data-type="internal_office_link" href="/offices/portugal-sotheby-s-international-realty-10501">Portugal Sotheby’s
                            International Realty</a>
                    </div>
                </div>
                <div class="listing-page__right-side__details__rows">
                    <div>
                        Registered on JamesEdition
                        <div>2015</div>
                    </div>

                    <div>
                        Address
                        <div>
                            Estoril, Cascais, Sintra Av Aida 353B,
                            Estoril, Portugal
                        </div>
                    </div>

                    <div>
                        Listing link
                        <div><a class="link js-mxp-track" target="_blank" data-type="office_link" href="https://www.sothebysrealty.com/id/qyt9qw">https://www.sothebysrealty.com/id/qyt9qw</a>
                        </div>
                    </div>

                    <div>
                        Listing Reference
                        <div>QYT9QW</div>
                    </div>


                </div>
            </div>

        </div>
    </div>
</div>

<style>



    @media (min-width: 1200px) {
        .listing-page__container {
            display: flex;
            flex-direction: row
        }
    }

    @media (min-width: 1200px) {
        .listing-page__left-side {
            min-width:50%;
            width: calc(100% - 1920px / 2 + 5% - 40px);
            position: sticky;
            height: calc(100vh - 60px);
            top: 60px;
            bottom: 0
        }
    }

    @media (max-width: 1199px) {
        .listing-page__left-side {
            width:100%
        }
    }

    .listing-page__right-side {
        font-family: var(--font-sans);
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        box-sizing: border-box
    }

    @media (min-width: 1200px) {
        .listing-page__right-side {
            padding:0 40px;
            max-width: calc(1920px / 2 - 5% + 40px);
            width: 50%;
            border-bottom: 1px solid #E0E0E0
        }
    }

    @media (max-width: 1199px) {
        .listing-page__right-side {
            padding:0 20px
        }
    }

    .listing-page__right-side__container {
        width: 100%
    }

    @media (min-width: 1200px) {
        .listing-page__right-side__container {
            min-width:380px
        }
    }

    @media (max-width: 1199px) {
        .listing-page__right-side h2 {
            font-size:22px;
            line-height: 24px
        }
    }

    .listing-page__right-side__head {
        display: flex;
        align-items: center;
        position: relative;
        padding: 20px 0
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__head {
            justify-content: center
        }
    }

    @media (min-width: 1200px) {
        .listing-page__right-side__head .breadcrumbs {
            margin-right:15px
        }
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__head .breadcrumbs {
            justify-content: center
        }
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__head .breadcrumbs ol {
            justify-content: center;
            text-align: center
        }
    }

    .listing-page__right-side__head__buttons {
        display: flex;
        margin-left: auto
    }

    .listing-page__right-side__head__buttons button:last-child {
        margin-left: 10px
    }

    .listing-page__right-side__head__buttons button:last-child svg {
        fill: none;
        stroke: currentColor;
        stroke-width: 2
    }

    .listing-page__right-side__head__buttons button._active:last-child svg {
        fill: currentColor
    }

    @media (min-width: 1200px) {
        .listing-page__right-side__head__buttons button:last-child {
            display:none
        }
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__head__buttons {
            position:absolute;
            bottom: calc(100% + 16px);
            right: 0
        }

        .listing-page__right-side__head__buttons button {
            padding: 8px;
            border-radius: 50%
        }

        .listing-page__right-side__head__buttons button span {
            display: none
        }
    }

    .listing-page__right-side__info {
        padding: 50px 0 25px;
        border-top: 1px solid #E0E0E0;
        text-align: center
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__info {
            padding:30px 0 30px;
            border-bottom: 1px solid #E0E0E0
        }
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__info h1 {
            font-size:28px;
            line-height: 32px
        }
    }

    .listing-page__right-side__info__price {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__info__price {
            margin-top:20px
        }
    }

    .listing-page__right-side__info__price .button {
        margin-left: -2px;
        color: #606060;
        background: none;
        vertical-align: middle
    }

    @media (max-width: 767px) {
        .listing-page__right-side__info__price .button {
            position:initial
        }
    }

    .listing-page__right-side__info__price .button svg {
        width: 12px !important;
        height: 12px !important;
        min-width: 12px
    }

    @media (max-width: 767px) {
        .listing-page__right-side__info__price .button__tooltip {
            right:0
        }
    }

    .listing-page__right-side__info__price .button:hover {
        color: #151515
    }

    .listing-page__right-side__info__price__tooltip {
        position: absolute
    }

    .listing-page__right-side__info__features {
        padding-top: 30px
    }

    @media (min-width: 768px) and (max-width: 1199px) {
        .listing-page__right-side__info__features {
            padding-top:20px
        }
    }

    @media (max-width: 767px) {
        .listing-page__right-side__info__features {
            margin:0 -20px -35px;
            padding: 30px 12px 35px;
            overflow-x: auto;
            overflow-y: hidden;
            white-space: nowrap
        }
    }

    .listing-page__right-side__info__features__feature {
        display: inline-block;
        padding: 0 24px;
        text-align: center
    }

    @media (max-width: 767px) {
        .listing-page__right-side__info__features__feature {
            padding:0 8px
        }
    }

    .listing-page__right-side__info__features__feature+.listing-page__right-side__info__features__feature {
        border-left: 1px solid #E0E0E0
    }

    .listing-page__right-side__info__features__feature div:first-child {
        font-size: 20px;
        line-height: 24px;
        color: #151515;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 6px
    }

    @media (max-width: 767px) {
        .listing-page__right-side__info__features__feature div:first-child {
            font-size:16px
        }
    }

    .listing-page__right-side__info__features__feature div:first-child svg {
        width: 24px;
        height: 24px;
        margin-right: 8px
    }

    @media (max-width: 767px) {
        .listing-page__right-side__info__features__feature div:first-child svg {
            width:20px;
            height: 20px;
            margin-right: 5px
        }
    }

    .listing-page__right-side__info__features__feature div:last-child {
        font-weight: 500;
        font-size: 11px;
        line-height: 20px;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #606060
    }

    .listing-page__right-side__info__features__feature div:last-child span {
        line-height: 10px;
        font-size: 10px;
        vertical-align: top
    }

    .listing-page__right-side__buttons {
        position: sticky;
        top: 60px;
        bottom: 0;
        z-index: 110;
        padding: 25px 40px;
        margin: 0 -40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        transition: box-shadow 100ms ease
    }

    .listing-page__right-side__buttons .save {
        height: 48px;
        width: calc(50% - 10px)
    }

    .listing-page__right-side__buttons .save svg {
        fill: none;
        stroke: currentColor;
        stroke-width: 2
    }

    .listing-page__right-side__buttons .save._active svg {
        fill: currentColor
    }

    .listing-page__right-side__buttons .contact-agent {
        width: calc(50% - 10px);
        height: 48px
    }

    .listing-page__right-side__buttons._sticky {
        box-shadow: 0 0 5px rgba(0,0,0,0.1)
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__buttons {
            display:none
        }
    }

    .listing-page__right-side__office {
        margin: 5px 0 50px;
        padding-bottom: 30px;
        border-bottom: 1px solid #E0E0E0;
        display: flex;
        align-items: center
    }

    @media (min-width: 768px) and (max-width: 1199px) {
        .listing-page__right-side__office {
            padding:15px 0;
            margin: 0 0 30px
        }
    }

    @media (max-width: 767px) {
        .listing-page__right-side__office {
            padding:20px 0;
            margin: 0 0 30px
        }
    }

    .listing-page__right-side__office__left {
        min-width: 0;
        margin-right: 20px
    }

    @media (max-width: 767px) {
        .listing-page__right-side__office__left {
            max-width:250px
        }
    }

    .listing-page__right-side__office__left div {
        font-size: 14px;
        line-height: 18px;
        color: #606060
    }

    .listing-page__right-side__office__left span {
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .listing-page__right-side__office__left a {
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    @media (max-width: 767px) {
        .listing-page__right-side__office__left a {
            white-space:pre-wrap
        }
    }

    .listing-page__right-side__office>a {
        position: relative;
        margin-left: auto
    }

    .listing-page__right-side__office>a img {
        max-width: 120px;
        max-height: 40px
    }

    .listing-page__right-side__description {
        margin-bottom: 50px
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__description {
            margin-bottom:30px
        }
    }

    .listing-page__right-side__description .texts__heading-28 {
        margin-bottom: 20px
    }

    .listing-page__right-side__description>div {
        font-size: 16px;
        line-height: 28px;
        word-break: break-word
    }

    .listing-page__right-side__description>div label {
        cursor: pointer;
        text-transform: lowercase;
        font-weight: 500;
        padding: 10px;
        margin: -10px
    }

    .listing-page__right-side__description input:checked+div {
        display: none
    }

    .listing-page__right-side__description input:not(:checked)~div:last-child {
        display: none
    }

    .listing-page__right-side__description input:checked~div:last-child {
        clip: auto;
        position: static
    }

    .listing-page__right-side__virtual-tour {
        border-top: 1px solid #E0E0E0;
        padding: 50px 0
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__virtual-tour {
            padding:30px 0
        }
    }

    .listing-page__right-side__virtual-tour h2 {
        margin-bottom: 20px
    }

    @media (min-width: 1200px) {
        .listing-page__right-side__virtual-tour__container {
            display: flex;
            justify-content: space-between
        }
    }

    .listing-page__right-side__virtual-tour__container div {
        width: 350px;
        line-height: 24px
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__virtual-tour__container div {
            width:100%;
            margin-bottom: 20px
        }
    }

    .listing-page__right-side__virtual-tour__container .button {
        width: 240px;
        height: 48px
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__virtual-tour__container .button {
            width:100%
        }
    }

    .listing-page__right-side__virtual-tour__container .button svg {
        height: 16px
    }

    .listing-page__right-side__amenities {
        border-top: 1px solid #E0E0E0
    }

    @media (min-width: 1200px) {
        .listing-page__right-side__amenities {
            padding:50px 0
        }
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__amenities {
            padding:30px 0
        }
    }

    .listing-page__right-side__amenities h2 {
        margin-bottom: 20px
    }

    .listing-page__right-side__amenities__column h3 {
        color: #6D6D6D
    }

    .listing-page__right-side__amenities__column>div {
        color: #2C2C2C !important
    }

    @media (min-width: 768px) {
        .listing-page__right-side__amenities__column {
            display:inline-block;
            vertical-align: top;
            width: 180px;
            max-width: calc(33.3% - 30px)
        }

        .listing-page__right-side__amenities__column+.listing-page__right-side__amenities__column {
            margin-left: 30px
        }
    }

    @media (max-width: 767px) {
        .listing-page__right-side__amenities__column+.listing-page__right-side__amenities__column {
            margin-top:22px
        }
    }

    .listing-page__right-side__amenities__column div.texts__regular-16 {
        margin-top: 12px;
        color: #606060;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .listing-page__right-side__location {
        border-top: 1px solid #E0E0E0
    }

    @media (min-width: 1200px) {
        .listing-page__right-side__location {
            padding:50px 0
        }
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__location {
            padding:30px 0
        }
    }

    .listing-page__right-side__location h2 {
        margin-bottom: 20px
    }

    .listing-page__right-side__location .texts__regular-16 {
        color: #606060
    }

    .listing-page__right-side__location .map {
        height: 350px;
        margin-top: 20px;
        background-size: cover
    }

    @media (max-width: 767px) {
        .listing-page__right-side__location .map {
            margin-top:30px
        }
    }

    .listing-page__right-side__other-info {
        margin-bottom: 50px;
        padding-top: 50px;
        border-top: 1px solid #E0E0E0
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__other-info {
            padding-top:30px;
            margin-bottom: 30px
        }
    }

    .listing-page__right-side__other-info__columns {
        display: flex;
        flex-wrap: wrap;
        font-size: 16px;
        line-height: 24px;
        color: #6D6D6D
    }

    .listing-page__right-side__other-info__columns span {
        margin: 20px 25px 0 0
    }

    .listing-page__right-side__other-info__columns span div {
        color: #2C2C2C;
        margin-top: 10px
    }

    .listing-page__right-side__other-info__columns._wide span {
        margin-right: 30px
    }

    @media (max-width: 767px) {
        .listing-page__right-side__other-info__columns._wide {
            display:-ms-grid;
            display: grid;
            -ms-grid-columns: auto auto;
            grid-template-columns: auto auto;
            grid-gap: 0 20px
        }

        .listing-page__right-side__other-info__columns._wide span {
            margin-right: 5px
        }
    }

    .listing-page__right-side__other-info__wrapper {
        display: flex;
        align-items: center
    }

    .listing-page__right-side__other-info p {
        margin-top: 20px;
        color: #606060;
        font-size: 14px;
        line-height: 22px
    }

    .listing-page__right-side__other-info._empty {
        height: 152px
    }

    @media (max-width: 767px) {
        .listing-page__right-side__other-info._empty {
            height:244px
        }
    }

    .listing-page__right-side__badge {
        margin-left: 11px;
        background: #006C75;
        color: #fff;
        align-items: center;
        padding: 0 6px;
        display: flex;
        line-height: 20px;
        font-size: 11px;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-weight: 500
    }

    .listing-page__right-side__contact-form {
        border-top: 1px solid #E0E0E0
    }

    @media (min-width: 1200px) {
        .listing-page__right-side__contact-form {
            padding:50px 0
        }
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__contact-form {
            padding:30px 0
        }
    }

    .listing-page__right-side__contact-form h2 {
        margin-bottom: 20px
    }

    @media (max-width: 767px) {
        .listing-page__right-side__contact-form h2 {
            margin-bottom:30px
        }
    }

    .listing-page__right-side__contact-form #seller-contacts {
        float: left;
        margin-top: -180px
    }

    @media (min-width: 768px) and (max-width: 1199px) {
        .listing-page__right-side__contact-form #seller-contacts {
            margin-top:-70px
        }
    }

    @media (max-width: 767px) {
        .listing-page__right-side__contact-form #seller-contacts {
            margin-top:-79px
        }
    }

    .listing-page__right-side__details {
        margin-bottom: 50px
    }

    .listing-page__right-side__details h2 {
        text-transform: capitalize
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__details {
            margin-bottom:30px
        }
    }

    .listing-page__right-side__details__office {
        margin-top: 20px;
        display: flex;
        align-items: center
    }

    .listing-page__right-side__details__office__left {
        min-width: 0;
        margin-right: 20px
    }

    @media (max-width: 767px) {
        .listing-page__right-side__details__office__left {
            max-width:250px
        }
    }

    .listing-page__right-side__details__office__left div {
        font-size: 14px;
        line-height: 18px;
        color: #606060
    }

    .listing-page__right-side__details__office__left span {
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    .listing-page__right-side__details__office__left a {
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    @media (max-width: 767px) {
        .listing-page__right-side__details__office__left a {
            white-space:pre-wrap
        }
    }

    .listing-page__right-side__details__office a {
        position: relative;
        margin-left: auto
    }

    .listing-page__right-side__details__office a img {
        max-width: 120px;
        max-height: 40px
    }

    .listing-page__right-side__details__rows {
        margin-top: 2px
    }

    .listing-page__right-side__details__rows>div {
        margin-top: 16px;
        font-size: 14px;
        line-height: 22px;
        color: #6D6D6D
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__details__rows>div {
            margin-top:14px
        }
    }

    .listing-page__right-side__details__rows>div div {
        color: #2C2C2C;
        margin-top: 2px;
        word-break: break-word
    }

    .listing-page__right-side__admin-tools {
        border-top: 1px solid #E0E0E0;
        padding: 50px 0
    }

    @media (max-width: 1199px) {
        .listing-page__right-side__admin-tools {
            padding:30px 0
        }
    }

    .listing-page__right-side__admin-tools .button {
        margin-top: 20px
    }

    .listing-page__full-width-section {
        max-width: 1920px;
        margin: 0 auto;
        box-sizing: border-box
    }

    @media (min-width: 1200px) {
        .listing-page__full-width-section {
            padding:50px 5vw
        }
    }

    @media (max-width: 1199px) {
        .listing-page__full-width-section {
            border-top:1px solid #E0E0E0;
            padding: 30px 0;
            margin: 0 20px
        }
    }

    .listing-page__full-width-section h2 {
        margin-bottom: 30px;
        text-transform: capitalize
    }

    @media (max-width: 1199px) {
        .listing-page__full-width-section h2 {
            font-size:22px
        }
    }

    .listing-page__full-width-section+.listing-page__full-width-section {
        border-top: 1px solid #E0E0E0
    }



</style>
