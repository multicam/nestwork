<script context="module">
  export const prerender = true;
  // import Banner from '../components/banner.svelte'
  import Hero from '../components/hero.svelte'
</script>

<svelte:head>
    <title>NestLove | Investment | Lifestyle</title>
</svelte:head>

<!--<Banner />-->

<section>
    <Hero/>
</section>


<section>
    <div class="mt4 mb4 px row">
        <h2 class="col-12 normal mb0 text-center font-7_29vw">
            What is Nestlove
        </h2>
    </div>
    <div class="row  px mo-flex-col">
        <div class="col-4 off-1 pt9 pb9  mo-pt7 mo-pb7">
            <h5 class="book uc mo-font-0_77vw mo-normal">
                Own
            </h5>
            <h3 class="mo-mt2 mt2 mb2 mo-mb2">
                Exclusive
                <strong>
                    Investment Co-ownership.
                </strong>
            </h3>
            <a class="flex font-0_77vw hover-blue decoration-none semibold text-black" href="/students">
                Is Co-ownership for you, find out more
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="ml1 mo-ml1"
                     style="top:0.15em;position:relative;height:1.1em;transform:rotate(-45deg);transform-origin:center center">
                    <path fill="currentColor"
                          d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
            </a>
        </div>
        <div class="col-4 off-1 pt9 pb9  mo-pt7 mo-pb7">
            <h5 class="book uc mo-font-0_77vw mo-normal">Students</h5>
            <h3 class="mo-mt2 mt2 mb2 mo-mb2">The TGDS Ethos</h3>
            <div class="font-1_25vw mo-mb2"><p>When we first started out there was hardly such a thing as online
                training. Over the past 13 years we have put our hearts &amp; souls into teaching visual people how to
                learn design in a caring, supportive and inspiring environment. We’re kinda obsessed!</p>
            </div>
            <a class="font-0_77vw hover-blue decoration-none semibold text-black" href="/students">Want to see some
                student work?
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="ml1 mo-ml1"
                     style="top:0.15em;position:relative;height:1.1em;transform:rotate(-45deg);transform-origin:center center">
                    <path fill="currentColor"
                          d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                </svg>
            </a>
        </div>
    </div>
</section>

<section>
    <div class="row px div mo-fw mo-between mb6">
        <div class="tutors__Wrapper-sc-o2liwj-1 kPcMec col-4 flex-1 mb1 mo-mb0  ">
            <div class="tutors__StyledTutorText-sc-o2liwj-0 hqZzSg relative overflow-hidden " style="flex:2">
                <div data-gatsby-image-wrapper=""
                     class="gatsby-image-wrapper tutors__StyledImage-sc-o2liwj-2 fhkyHc h27_5vw  greyscale-20">
                    <div aria-hidden="true" style="padding-top: 100%;"></div>
                    <img aria-hidden="true" data-placeholder-image="" decoding="async"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE10lEQVQ4y1WUa2xTdRiH+01AFBhsY9kYwoBNMchNBRmKASdMiI57BAZmQ7kPhhsbW0CYu3bd1nZd1/b0tOfstLvfb123dWxIggZBPqgRFBPARAgYAojRGB5zTrOpH05yPvz/T37P733P0VVUtGEytWM2d2CxdFJV1UWVpUt7t1p7sFp7sVi6tTPGijbKy1spK2uhtLSZkpJGiooaKCioJz+/jrw8LzqTqYPKShXUTXV1j/bY7T6czgEqzS0Y9AomYxPWap92TgMb2zWwwdCCXt9EcXEjhYVBqC6YpBubrRe7vRdB8GO3dZF5+CTbN2wkMX4la1esJPtIFjabD4ulawys2o2mHYXqRmEOhw9B8OF295OxP51tq1dR+mECzcd3UHkgmZTVr3M2Mw+nK0BVVacGVmsyGlVo6xhUNwpzOn24pUFs5lr2rH+P0m0J3Lbn8mSkjb8v9aOcPMD6pQuwVrXiEPxUV3drfQeh7VpSVV8X7KsPUeyjRjmHqaiKvWuW0/RxIg973dzxefjaXsD1ehObF80h82A2iuc8Nptq1qNB1QpUfbVTnaopin5crj4U7wiGnDOcSorHsmsNgbP7uV1nYLAwnVvdEleMGZTvS8Uh9iM6+zSzILRbS6pCdWo6l8uP2+3H4z2HPv0YxVuW0Zq+lUv6E/zS7OS3djuPBxS+c+VzZnsi1spGZDmAU/BpUHUz1E7VQelUVXUQkjSAxxPAkXOMzIT5tB1L4rGcxf36Ym4qxTysO4WcsZvkt5aiONuQa4Y0KzWQuh3qcFV1nZpOkoJAxROgqTiH42/Hsm3pLO4rWdxrtXOnq5YH3RY6cnaRtXMjXsWPLA9qQPX+qLqaUjeaTpYHqPGco17wYvkogd1LohGObuVJp5FHvQJ3vHl49q3j9OE0XI4m6ryD1Nae14D/TTkGrKkZQFEGUWpH8OTnUrFjFSsiJhLI281fPYXclTLwpyfhObSFloKTlOsFCotEFNmP4PSPdalTdbV0NYN4lAFt0nWVNsr2bmb17DBqj2yAEROPOvVct+XwvfkEQtouXp6/hE6znh/aPdS52rELfk37f0BJHqCh4QKFp0s4tPYNDrwWw4UzyTzp0nPLmcs3hmyGi7KZNTOWhPh4/rjYzuMhiQteiWqhH4e991+gy91PW+MI5oIyQqNiETNSuVRwkKuGdH6szuXbimxuS6WkbfqACZMiSIxfxoNhhd+HJS7XCziE4F5qHcpSP053gOGmZta9uVy74Po0hdvus9yQirjmyON+g4n63KNERccxNXwmi+Ni+dVn5c8varjWZEV09mpQ3ehSu+RhOgSBRXFzGTc5ivL9O7nbbOSGx8CDFjMXLZ/zUtxCpkXEEDY9mtCQMK5IeTz90svNZiNuZ5c2HG2xRdGHWx5CMovExsxh3JRoslOSeXqxlXtdIj0l2Sxc8CqTwmOIiJpLWPgMxk0IQcz5BC7X87O3gOoKN6I7EPyWHY5eZHmIoiKXdnhaZCwvzFtMWkoqO95PIjxyHs9Pn8P0GXGERswmNCySZyaGsmfDO/BVLT/Jn3H66AlEaSj4+1J/RW73EEmbUnn2uRAiZr/C1Mg4xk+OZPyUKKZFxREW/SJhUfMIjZjFpCnhhITOIGZmDFdrirnXXML2te9isnTwDwdaH5XVu4j3AAAAAElFTkSuQmCC"
                         alt="" style="opacity: 0; transition: opacity 500ms linear 0s; object-fit: cover;">
                    <picture>
                        <source type="image/webp"
                                srcset="/static/be996b89670ddfedebc5feff2256d169/4d746/lee-anne-black-shirt.webp 536w"
                                sizes="100vw">
                        <img width="1" height="1" data-main-image="" sizes="100vw" decoding="async"
                             src="/static/be996b89670ddfedebc5feff2256d169/28ed7/lee-anne-black-shirt.png"
                             srcset="/static/be996b89670ddfedebc5feff2256d169/28ed7/lee-anne-black-shirt.png 536w"
                             alt="lee-anne-black-shirt.png" style="object-fit: cover; opacity: 1;"></picture>
                    <noscript></noscript>
                </div>
                <div class="absolute vert-center pr2 pl2 center tutor-text"><h4 class="center text-white mb2">Tutor
                    <!-- -->Lee-Anne</h4>
                    <div class="text-white pr1 pl1"><p>Lee-Anne worked for top advertising agencies, including TBWA,
                        before being head hunted by Virgin, London. Her portfolio includes work for Dove, Maybelline,
                        Siemens, Sky UK and GlaxoSmithKline, covering print, web &amp; packaging design.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tutors__Wrapper-sc-o2liwj-1 kPcMec col-4 flex-1 mb1 mo-mb0  ">
            <div class="tutors__StyledTutorText-sc-o2liwj-0 hqZzSg relative overflow-hidden " style="flex:2">
                <div data-gatsby-image-wrapper=""
                     class="gatsby-image-wrapper tutors__StyledImage-sc-o2liwj-2 fhkyHc h27_5vw  greyscale-20">
                    <div aria-hidden="true" style="padding-top: 100%;"></div>
                    <img aria-hidden="true" data-placeholder-image="" decoding="async"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAADxUlEQVQ4y42T62ubZRjG808IKnj46IehoIKMggiCh23MoZVtdNVt7egcbejZbDm16yFNz8vxTZO0y6E59JCmTdscmzRrDs2yVYcISrUWRSedwmBfVJCfNG2zdHOsH27uh+d5n4vf9Vz3K8qEjZRWOmQo1N56u+eWzKTDRlaC+v1nhbVh333Ro4KlwqtREyuLOqa0jeR9KtbTdnJRE6mi6OP3RE8izEYEohNqFBeOUPnOK8hPlTGlusAvGTv5iLGE9ICCudgIUyYJ7x16luajb5DsPI+77ghfuaRsJLSkQ/pdMcPTBVNBPbeXreiuVnP81efJtVdAysq/q+P85JXw24qBb+JC0Xqp6BMF15Jj9EsqOHboOXxN5WxNd7HuUvGjrYWtxDC/5sd3CEMHCKVAmBxDr/iM06+/iFtcTr6nig2rhLtOOev2eu7dtJKPjZRQPoUwH7dgVFZSffglbinOEPvyJA98vdyf6uAHey1/5qzcSVhIBQ0HTDlqwjtUy/m3X2as5n2Simruz+r52dHKhreZuxkLuYhQTHvvHUX/N8yFChtJTquRVpRx8rVnCDWc4J+Iju8drWQdEu5EtA/tFoe8RLC0Z6NCoSfmrtFVd4KGshdYav2IBxMy1j3Swn5ml+5REFHpxvYwb79fzDfIokuFU9PCNfk5EopP2TJf4q+5Dr421hEwXyET1Bep0iXBiPb9Gb5BBpQ1eIxS5u2d+K1KJs1yUjoxm8Nn+WNMzFrvOUKjcpLTfcSnB1hZ0O0nLI7JshWhvwFtxxdMmeUEXT1MjsjwWZUEx9q455Hxu6OZzeuNLF5vIzbRy9JkH9GJvsctr0YFojOD1Jz5gIkROR5BiluQFT526SW4BSmbgX7+Dg/xnUvJgqOL5ZkhYlP9JHxDpIM7KRcEt+luJSz0yKr45MO38Ns6ceguYx1sJuhSs+DsRt8jZtEkgZRA1nyZsEfFDf8QCd8AK3Nabszri5QFy9vvV370MOKq48zZu1BJq9B0XiLkVjPvVDFtbUPRcJpv3e3ENI0sjHcRm+wls6AnMN5D0NvH6m7qoptLI0zbrnLs3Tdpa6rELcjxmOS0N1UU+nY59VeYd6kRpGdxdV8k4R/Ga5KxEtCxPKsl7teQ3SPMx81ouutob/4co7oeqfgUAacKg6qW0aEWwp5+EjMaMotGRgea8BqlpALaAl0ubGI1PEI2bH5oORsxEp8dxtzfSNKvpfXix/TJqrFpWhHU9QRdvSz7taTnDbgEJX5bN+kFPfmohbW4jVzEwu24nWx4x/J/XBWNTCsNM/8AAAAASUVORK5CYII="
                         alt="" style="opacity: 0; transition: opacity 500ms linear 0s; object-fit: cover;">
                    <picture>
                        <source type="image/webp"
                                srcset="/static/caa8ce27d9cd8417595c5a1c5a94c43d/4d746/jacqui-grey-shirt.webp 536w"
                                sizes="100vw">
                        <img width="1" height="1" data-main-image="" sizes="100vw" decoding="async"
                             src="/static/caa8ce27d9cd8417595c5a1c5a94c43d/28ed7/jacqui-grey-shirt.png"
                             srcset="/static/caa8ce27d9cd8417595c5a1c5a94c43d/28ed7/jacqui-grey-shirt.png 536w"
                             alt="jacqui-grey-shirt.png" style="object-fit: cover; opacity: 1;"></picture>
                    <noscript></noscript>
                </div>
                <div class="absolute vert-center pr2 pl2 center tutor-text"><h4 class="center text-white mb2">Tutor
                    <!-- -->Jacqui</h4>
                    <div class="text-white pr1 pl1"><p>As a devotee of stylish design in all its forms, Jacqui loves to
                        create things of visual beauty. Following a successful career in fashion design, Jacqui now runs
                        a graphic design business and works with clients across a range of sectors including branding,
                        website design, marketing collateral and textiles.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tutors__Wrapper-sc-o2liwj-1 kPcMec col-4 flex-1 mb1 mo-mb0  ">
            <div class="tutors__StyledTutorText-sc-o2liwj-0 hqZzSg relative overflow-hidden " style="flex:2">
                <div data-gatsby-image-wrapper=""
                     class="gatsby-image-wrapper tutors__StyledImage-sc-o2liwj-2 fhkyHc h27_5vw  greyscale-20">
                    <div aria-hidden="true" style="padding-top: 100%;"></div>
                    <img aria-hidden="true" data-placeholder-image="" decoding="async"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEUklEQVQ4y13U609TdxjA8f4be7E3e2Xi4htnsnjZIjND2cacinMiIIIMKFJEWhFatC0ttD2nLQUUKjApIJf20JbbOhGdQL0QEFractEsi9k/sL1e8l3OaUHciydNTn/nc57bOSrHWAz72BoOJWK7v/axGII/hiu0iSglcPjXcUip9Bl//IOwK/fFsI/GUL0HP8QcfvnAKlr7EIXFZdTU1mLriyCOb2Sg9UzEsStoGlb9P0O7Equ4QltUa400VBTic5mx1BRyIecwerFf+U8+KwTWETLoTqaq3Yz2gGJgHcvAS+62mvhnbZ5/323xdyJKQ/F3fP7ZAawDL3COp3DI4E7I8Fj8w5LltGXYFdzAcG8Go6aUldFuVv1eooNtPBvykHdkH8aWezjDbxH8cYRAQoGV8GfA3ZBTH1vFHd5GZx/gWl42870OticHSAR/4d2jYTZ8Vu7otLQGUsqwZHAv+r7knanJGYY2ueWWsKiLiHmtLPcIxHutvBl20qEroeD0CWwDi4jBTaXcHVgeUhpUsJhSQrrkTfTtIS6cPMac7QYv3Wbi/S6WfVa+PXqAK98fw+x5iBh+kwaVLNcVVOXYi/ljmQy3uaY18uknH2GqyOet5GU7fJ+JNh1njh9Efe5LDCYbQnALQUpDorQHFPzpJZazFaUk5t45LvyQwxeH9nPi0H6etNeTDLcxKtTx1cF9lJ85Qn1dLfbR18p5pY9SetoqIdO7dLkxRHnC7RJ5uafIzjpGXs7XTHqd/LkQxKUr5einH3Mxaz+XvjnMHc9Ypo+JXVQBd9FAXHnKDdsIZ3Oyyc7K4vxVPZW2SRo7H3G52kJ2Ti45J0+R/3MD+s6Isn/CnmmrlIUMxJWQF7rRO0+VfZr8Uh0lWg8a9xzXXE9Qu36nuj2K2j1PbWcU42CKxp5lTP1LOMeTaVSSwcxCyhdNviUqWqcoMYW41RXl9oMYGs8zql1Pqbsb5Wb3K/S9rzH64tzseoFanEXTNqfsnzieVPqp2nltZPC6e5aipgAaMYJ9OEmjd4kazyI3Op5j6F3B0LeqPKSpb43SlgjFlinKWn+ldVhetdR7UMaaB5e5Yg5RoB+loWsex0iK+q4latyLaDufY3qwhsmXwOxLoO9Z4fzNQYpME5RapzENLOMKbShZpsFgEuODV5RbQ1xqCmDojnK7bwWNewG1+JS6jgXqu6KYfTEsg0mqxMfkVnVy2RimpHkSQ98r3OFNxPFUGpSX0i6laB9ewNXuo9IiUdQkUW77jUphlrKWaYqa/Fx3zVLjjFBgGCLrspWfmoLkmybQdjxWvj7O4AYqMQPKL/vYzDJr0yMU3+rj3PUerjZPoHY8osQcpKBxhHzdfc5WCZypdnP8Yj3W7ik8bffQ6NtwBreUPiqgU1rHGtggMjPP3FA/p6vv82Otl0rbDGXWScpbpijUD3Opvpfcq2ayrzRTUaXlr8UJ/oj46Hj4TPmcyeB/GAxl2PboaWwAAAAASUVORK5CYII="
                         alt="" style="opacity: 0; transition: opacity 500ms linear 0s; object-fit: cover;">
                    <picture>
                        <source type="image/webp"
                                srcset="/static/aab6831dcec4455ab678863c2e80c595/4d746/claire-blue-shirt.webp 536w"
                                sizes="100vw">
                        <img width="1" height="1" data-main-image="" sizes="100vw" decoding="async"
                             src="/static/aab6831dcec4455ab678863c2e80c595/28ed7/claire-blue-shirt.png"
                             srcset="/static/aab6831dcec4455ab678863c2e80c595/28ed7/claire-blue-shirt.png 536w"
                             alt="claire-blue-shirt.png" style="object-fit: cover; opacity: 1;"></picture>
                    <noscript></noscript>
                </div>
                <div class="absolute vert-center pr2 pl2 center tutor-text"><h4 class="center text-white mb2">Tutor
                    <!-- -->Claire</h4>
                    <div class="text-white pr1 pl1"><p>Claire has a background in education and training design; a
                        career that spanned over 15 years, before broadening her skills as a graphic designer with TGDS.
                        A student favourite, Claire is the queen of student feedback.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tutors__Wrapper-sc-o2liwj-1 kPcMec col-4 flex-1 mb1 mo-mb0  ">
            <div class="tutors__StyledTutorText-sc-o2liwj-0 hqZzSg relative overflow-hidden " style="flex:2">
                <div data-gatsby-image-wrapper=""
                     class="gatsby-image-wrapper tutors__StyledImage-sc-o2liwj-2 fhkyHc h27_5vw  greyscale-20">
                    <div aria-hidden="true" style="padding-top: 100%;"></div>
                    <img aria-hidden="true" data-placeholder-image="" decoding="async"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkklEQVQ4y1WU208UVxzHxyhUXHcXdndmdmZnL7CiIragYOsFDFCploLIfdnd2dldLlWkpVwXFtDGW1uxaGKol6ZE25eamCYmTdMXkyaNL6Z9sI1J26QPfet/8WnmAGoffjPnTM7vc77f3++ckVLzacy8hf1O5S3MfJpkPo05Z4lIzqbEN2shS2o+I+Yi5tbWitz1MOfTSOb64AVsAzRnkcilSOUzxCbitA2cpGu0l9RChsz5wRdrknP25i/B0v9h6ReqEjO2sgydZ7pRdZmi1wpRZA+7q3bS2NVEfNp86WADbANT85YYmK/CcnZY9E8mCUV0CiWJ4u3bUT0eZKcTj8NBzeEqkjmLxHoJRG4+jfSqVRGzltjdymdp6nwbR0EBpXIJDXt2oHk8BHxefG43akkxrVarKIntZgO6BnylAbay+JRJen6A6rp9nKjaRT7WxurkMNfPmHQceAPN7aRw82YaTzVizWeFADvPzpcSCxkhNWVDZy1hIzllYs5mONHRxLn+Nr7Jj/L0zmVujQ3xxahFom4/7qJt1LfUk5rLEp9MCpU2VBr5qA9zJknfbIreXIqeaZPuiQSd40la4+9yeyzNj5/N8uTaJD8v5/n19iVuDPWQOVLLoNVO72SK+KRJYnqtkdKDyQRfjfexMpfik3yaK4uDrFwc4frVceZyWX65dY7HV3OsnjV5dvcS/z5cYcnqYDnezvsjcXrHTeITJvGpdeBPN87x290r/HX/Ks++vMjzr5f4+/41nlyb4fFSju9mh+nfX8EFs5ObQ908WhghW1fD6UwXick0sbEk/QJorgEP7I7S21TH90sL/PlghX8e3eOH8xPc+zBD56F9LKc7uWn18PTWpyzG2kjV13K8spy9eys4Hm8lMWURG0++BEqSZD/wuRxk36nn41g78+3HaT9QjbOoiIji5XTzEWKHaynzq0RVma6aShSHk8IiB6eGukhMW2t1tIFer05xsUxB4TYkaYuAu7c52Nho06bN6B43PpcT1eWkrXoPlzuaSR58Hc9rW6ltOCiOmH0JRJfdxQqKEkbXoxhGObJssLXIhcPhomDLFnw+g5aDbzLY9BYD9bVc6mnhcl8rtwe6OVpZgRaM0DcWXzuPMyZSY/cxFH8IRQ2j+CNoepkY28pdTg+yEqa+9jAPFz/gzlmTm0Nxvs2NMt3ViqZFkL06Oysr6TjdTXoxizRwYZiahkMUuzVUfwS/VoaqhlDViJh7PRoBPcrq9AjP733O76vLrIyfoWpPNXogiiLrqEoII1DKsd4TSPZ/rqGjGa/HEICAUb4GttVqpWhqmO1uP1NdJ/nj/nUyJ9sJBXcRiVRQ7Pbi8+kYwR1o/jCaP2jf5QzNsRZ8clCAbLvB0G70QDmaVoYR2IFfL+fU0UZ6GhtxuFS8JQqeEkU007bt18IEjChGoAzJzKV5L92OTzZEY2Q5iF8rJRSuIByuIGjsxAhE0dQgLpdMQAuJRF0rRdfLhBO/Zte+FE2PINkHs2O4B0UNirrZMI9XF/CwrVQklgqooZcRCkbRtbBwEgjsECBRSzWEohj8B4LH7CcCPv8gAAAAAElFTkSuQmCC"
                         alt="" style="opacity: 0; transition: opacity 500ms linear 0s; object-fit: cover;">
                    <picture>
                        <source type="image/webp"
                                srcset="/static/747b32933b423105a67cb0c65c135f00/4d746/danny-black-shirt.webp 536w"
                                sizes="100vw">
                        <img width="1" height="1" data-main-image="" sizes="100vw" decoding="async"
                             src="/static/747b32933b423105a67cb0c65c135f00/28ed7/danny-black-shirt.png"
                             srcset="/static/747b32933b423105a67cb0c65c135f00/28ed7/danny-black-shirt.png 536w"
                             alt="danny-black-shirt.png" style="object-fit: cover; opacity: 1;"></picture>
                    <noscript></noscript>
                </div>
                <div class="absolute vert-center pr2 pl2 center tutor-text"><h4 class="center text-white mb2">Tutor
                    <!-- -->Danny</h4>
                    <div class="text-white pr1 pl1"><p>Danny Johnson has been working in the design industry since 2005
                        and has had over 10 years experience with advertising, visual communication and filmmaking. He
                        has been an art director for several magazines and is the former creative director of Three
                        Crowns Media.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tutors__Wrapper-sc-o2liwj-1 kPcMec col-4 flex-1 mb1 mo-mb0  ">
            <div class="tutors__StyledTutorText-sc-o2liwj-0 hqZzSg relative overflow-hidden " style="flex:2">
                <div data-gatsby-image-wrapper=""
                     class="gatsby-image-wrapper tutors__StyledImage-sc-o2liwj-2 fhkyHc h27_5vw  greyscale-20">
                    <div aria-hidden="true" style="padding-top: 100%;"></div>
                    <img aria-hidden="true" data-placeholder-image="" decoding="async"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEtklEQVQ4y02TaWxUZRSGJxIj2GVm2mmnnXba2e5+h9SA1ASCCwQQsEVQKEgB0YTFoP6AKAlVNGpoQ1ACYQ0JtqQgBCmUYqHr0E7XaUsXaCGCRaIYigiN1QTUx9w7FPjx5nzJl++557zvuZZeVaNX0+jTNC7qOpcMaRr9us6NYJAePcgpSaZNVfk5GOSyHjTvLgeDDJgyzjqX9agsFzSVblXFAPc9BBsPujSNAq+XYEIiVqsN1ZVGQUBgQNO5ogfNDw880mO4pUtV6VI1ujWNHtWAa/yo66z3eIhJSiJbD5KUmIwjJZUkr49lmR5zAgPUrz3UE2BLh6LSaUKj4IuaRkjVkFJdbMrP42rpQdbNfx3V50MKBEj1+tgUCPCTrpvTmPaYioIt7YpKRFHoUFUiqsqAprFLkJAliebd27jfUkdnyV7enT0LwePFk+khKyODakUxPTOhpvdRuKVVVmhTFNqVaDWAqzO9ZGRmUrp5I92HixkJV7Fvw4f4XW4ctgRsdjufeDxc0XV6RgPVdDNUS7Mi02JIVmhVFC6oKjOSklFEH8eKvqBi9w6ulxUTKT1I4dp3GJ+ZwTPPxjIl0WHa1GN6/3hTLGFZpkmWMaoBrJcklNhYJo4PcuP0CQbPlDFYfoR74bP821bNR2/mEh9nI2BL4Lwkm8AuNbopxtnSIEk0SDJGNbo8GQggWuPxe/207txG1/4dDJYd42bZIX6vOM7GpQtJTHAgOFMo9vvNdYs8EawlJMmEJMnsrFGSKfH5EOx2YuNsHNjwHtVbi+j77jjh7YVcO7Kb/Fenk+Jw4nal8UZKyiPvR4O11IkStaJEjSiawO0eD8k2OzEx8ayYO4PGwq00f7WHzp3f0L6/EF0M8HRsPB63m4Uul/nGsKr1YbCWWlE0YVWCaI6+3e3GbrXhSklH8nk4/vlmur/cQvmn65mWpTHN6mBFWiY+ZyovOZ3m2AbUyMGwzFIjSlQLIucEkSpR5JQ/QNDhxJnuxREXy6Ls5ylatZLnnE7eV3Qqly9lYNXbnJj+CsnjYpiflGxa1ijLpizVosQ5UaRSEKgICNQLImvS3MQlOLGNHcsLXjeLsyczcZyVsoKP+bWmnP6yUu4U72Hri1PIjonjrBj1/7wkGcBod5UBgQq/QHVApCjDgzXGypinxhBMT6Nt6ky2LVjCB/nLaTmwl/sXuxhqD3Pp6y0sSHaaQRprVy8+AfwhIHLaL1AjCKxLTcUaG4893s4uJYsHr+XSeqCYq01N3Iq08velHu52tvBb5UmKJk1iZ3o6DbKMEbDp4WiHpwMCtV4/Sx0puNNdfObX+W/mHO69tZjQt4e4GWljpK+Xkb5u7kaaud1Qw9EleexLSyOkKBgBm8Aq00ORSq+PigmTWZObR4EygTsvz4bcHIaW5VN/+CiD5xv4o6ODkd4LDLc3cauxjqq1qznsdkeBhodGm6PBnPX4OTYth5K8VfRnTeWfnHmQk8vQwkWESo5wrbaO2+Ewf3ZGGG4N80ttFZ0rV1Dj8VBnjGwAjchHF/uMoPC9fyJN2hT+mj6HB3PnwYL5DM2dR3hvMVfr6rgVCjHc0sJwcyPXy0/SPn0WIZ+felnB+Ov+BwDgYTc2ozZvAAAAAElFTkSuQmCC"
                         alt="" style="opacity: 0; transition: opacity 500ms linear 0s; object-fit: cover;">
                    <picture>
                        <source type="image/webp"
                                srcset="/static/a006a3cdb47ca22012c710d0e3723ed3/4d746/paloma-red-shirt.webp 536w"
                                sizes="100vw">
                        <img width="1" height="1" data-main-image="" sizes="100vw" decoding="async"
                             src="/static/a006a3cdb47ca22012c710d0e3723ed3/28ed7/paloma-red-shirt.png"
                             srcset="/static/a006a3cdb47ca22012c710d0e3723ed3/28ed7/paloma-red-shirt.png 536w"
                             alt="paloma-red-shirt.png" style="object-fit: cover; opacity: 1;"></picture>
                    <noscript></noscript>
                </div>
                <div class="absolute vert-center pr2 pl2 center tutor-text"><h4 class="center text-white mb2">Tutor
                    <!-- -->Paloma</h4>
                    <div class="text-white pr1 pl1"><p>Paloma started her career in London, she is a highly experience
                        graphic designer and educator. Her design experience includes branding and corporate identities,
                        developing advertising campaigns, packaging, viral communications, illustration and B2B
                        marketing materials.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="tutors__Wrapper-sc-o2liwj-1 kPcMec col-4 flex-1 mb1 mo-mb0  ">
            <div class="tutors__StyledTutorText-sc-o2liwj-0 hqZzSg relative overflow-hidden " style="flex:2">
                <div data-gatsby-image-wrapper=""
                     class="gatsby-image-wrapper tutors__StyledImage-sc-o2liwj-2 fhkyHc h27_5vw  greyscale-20">
                    <div aria-hidden="true" style="padding-top: 100%;"></div>
                    <img aria-hidden="true" data-placeholder-image="" decoding="async"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEcklEQVQ4y4WSy1OTZxSHv7+giy7sDLV2EBskkAQSyOUjMYABDDESCwHCLchFLbFcRVEqChoCGCICMZB7AomIUHW66Ghn6rR10el050z/nafDF0AXvSyeOYv3nOc983tfYScbIscTdrJB9nZCPM+usrcd5OVumN3tdbYzQZ5J56H/RdhvfJbZJyiJ1nyj3Oi1Mu62Mjc9RCrm59VehJ2nB33Z/0bY3lrjkOeZFW72nKMo7xOK8j7lnDKf5ioNw/0tZJIB6dJcb/BfWEPIplfIph+TST1iN7vKwwdj2HXFJK408dOkm9dT3bh0Mq52O3ixEyKTWiY38088RthKPmIrEWAr4Wc7tYTvziBPrrl4N3ONX2c8vJnqJ9xno0pVQGx9ThraSi5L4kMkxwFCOr6EROwh2ZSfudtXuNfdyHp/E6/GOlh2nuXFuIvJ83rigSkymyu5BT6SbCYCRwip2EP2SUYXeZryMz8zwpCjhvsXa9i96uS3mz38MT/CDxOdPHs8zeb+hpIwxwfZEpvxJYRkZIFD0tF5Ik9m8A+7+fHmAN9/28GbMTe/ez289g2RDM7yIaIcH8vScT9CIjyPRGS/+kjHF4kGpng52UO8r4k9Tzd/zg2yOz1AesNLNr0sDW8eCZcOhP4DYSQnS0osSDUVmyc+N0J8sIVfpj3sTXQQvXaRy021xDd8bGdWpG8kiWN+SXYkPBIdbhr2sZsJMN7vpFssxttWS2SwiZ/nvqFVfYouu4Xk6gzxkJenm4/Y3npMJnEgjvkPMgzPk44tSK+cic9ze7SXyoIv8ZiVbI228W7pOu9DNxiziRQeO0a9Sk57tch4l4MH1weIhby5DaOLCMn93KI+QoHbzE7002O3IP88D+XxPAbrKnk7O8D74CTvAmN4h67SoFZSJcvHpiqmx6yhQXmaka4mMkm/FJeQWPeSiflwO+rRnDhOjVxGef4JivI+w1KqYm3AyV/LI4RG+5gdGcZlqqBZV4ZdU4a9XEVbZQVfV2pZ839HOrqAkI54WfZex1hcgkFWgE2tpFZRhEGWj1hYQKdZz9tbbu66XfRYLVhVcjrPiLSbDDSLGlqMOiwqBfdG+9mMLyJsxbx4up0ovjhJfZmSemUxDl0ZrUYNLZUajIUy7jvrcFUbcWhLaDPq6DIb8Vhr6DTrEAtP06zXMnnZRTLiQ0htzNLWUIfixEls5WrqVArqykrprBbpOKOnoVRFrVLO2eKvcFZq6Kurot1spFlfQWN5Ga0mkTaDDo/TTmLDixBZncZq0CMWFtGo01BVVIRJLqe7xkhjuZpOkwGbppQGjYILWjUeey3Djee4oC6lSdTiveTissVMr9VCNDiLEF6d5ryop7pEgcuko1YhR3vqFBaFguqSEloMes4qStAXyuioEply2bnT3kiLQcsFnZZRhw232URvrZnwyl2EyNpdWmqraVCrsZWr0MsKqC6W02o00G4WuVRjolnUSXG0m0RuOW1MXLTSatDi0FXQVWXCVSkyaK8jvHaPvwETG7Cue6XMBAAAAABJRU5ErkJggg=="
                         alt="" style="opacity: 0; transition: opacity 500ms linear 0s; object-fit: cover;">
                    <picture>
                        <source type="image/webp"
                                srcset="/static/75c186958b71cb64afd41594518104c9/4d746/tim-leopard-shirt.webp 536w"
                                sizes="100vw">
                        <img width="1" height="1" data-main-image="" sizes="100vw" decoding="async"
                             src="/static/75c186958b71cb64afd41594518104c9/28ed7/tim-leopard-shirt.png"
                             srcset="/static/75c186958b71cb64afd41594518104c9/28ed7/tim-leopard-shirt.png 536w"
                             alt="tim-leopard-shirt.png" style="object-fit: cover; opacity: 1;"></picture>
                    <noscript></noscript>
                </div>
                <div class="absolute vert-center pr2 pl2 center tutor-text"><h4 class="center text-white mb2">Tutor
                    <!-- -->Tim</h4>
                    <div class="text-white pr1 pl1"><p>Tim is our resident TGDS web design guru and tutor, he works full
                        time as a software engineer and web developer and brings his technical know-how and experience
                        to his students.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="row grey10 px">
        <div class="col-6 pt6 pb6 grey30 tail-left">
            <button class="video-modal__HoverButton-sc-1lm9vy-2 fCQoun h25vw relative pointer">
                <div data-gatsby-image-wrapper="" class="gatsby-image-wrapper h100 shadow-lite">
                    <div aria-hidden="true" style="padding-top: 71.5522%;"></div>
                    <img aria-hidden="true" data-placeholder-image="" decoding="async"
                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVQ4y2PQY9j0n5qYgeYG6jJshLP1GREYXY4oA2EaQLQOw8b/mgwb4BhmgR4jfoMZ0A3TgRrmJrf7f1P6xf/+mvv+24vuAMupM6wHG67PhN1HWL2szbDhf57fyf9GrJv/L+q7839u++3/Gxc8+u8ivet/oPb+/37q+/4rM6wDW4rsI5xeNmTZ/L8+6fz/ydXX/+9c9fR/W/al/6f3v/4/oeLa/2n1N8CWWQts/28tsA2r91G9zLgJ7CVLvm3/965//r8w6NT/LYsf/y8IPPV/95pn/7cuffy/q/DK/2jzQ/9zvE/8t+DZ+l8bn5cNmTf/l2VY/X9q3Y3/G+Y/+l8UfPp/X9nV/8ZsW/5ne5/4H2508L+t0Hawd20EtxMOQ1BgqzCs+5/peeJ/W84lcDgaMG8GG6DKsB4spwWNcRCNNwx1YYHMCIlN9IAHWYYcuzhjWZdh0z8Y1gPTG//pM276Z8AE4cPE9JDU4cMMemAbqIdBLvxCTQwAjl4pt/mAM4sAAAAASUVORK5CYII="
                         alt="" style="opacity: 0; transition: opacity 500ms linear 0s; object-fit: cover;">
                    <picture>
                        <source type="image/webp" srcset="/static/7c6da3209235cc7c06c540162545017a/d5219/video-thumbnail-the.webp 750w,
/static/7c6da3209235cc7c06c540162545017a/a1a58/video-thumbnail-the.webp 1080w,
/static/7c6da3209235cc7c06c540162545017a/a15f6/video-thumbnail-the.webp 1366w,
/static/7c6da3209235cc7c06c540162545017a/6cdc6/video-thumbnail-the.webp 1733w" sizes="100vw">
                        <img width="1" height="0.7155222158107329" data-main-image="" sizes="100vw" decoding="async"
                             src="/static/7c6da3209235cc7c06c540162545017a/bd41d/video-thumbnail-the.png" srcset="/static/7c6da3209235cc7c06c540162545017a/0c19c/video-thumbnail-the.png 750w,
/static/7c6da3209235cc7c06c540162545017a/5c916/video-thumbnail-the.png 1080w,
/static/7c6da3209235cc7c06c540162545017a/7333a/video-thumbnail-the.png 1366w,
/static/7c6da3209235cc7c06c540162545017a/bd41d/video-thumbnail-the.png 1733w" alt="video-thumbnail-the.png"
                             style="object-fit: cover; opacity: 1;"></picture>
                    <noscript></noscript>
                </div>
                <div class=" absolute w100 h100" style="bottom:0;left:0;height:20%">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="text-white h100 px1 py1 ">
                        <path fill="currentColor"
                              d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                              class=""></path>
                    </svg>
                </div>
            </button>
        </div>
        <div class="col-1 grey30 mo-display-none"></div>
        <div class="col-4 off-1 pt9 pb8 mo-pt7 mo-pb7">
            <div class="vert-center  h100"><h5 class="book uc mb2 mo-font-0_77vw mo-normal">Our Community</h5>
                <h3 class=" mb2 mo-mt2 mo-mb2">The Best Peeps!</h3>
                <div class="font-1_25vw book mo-mb2"><p>We’ve been blessed with the best student body in the world, we
                    ask ourselves how did we get so lucky? We love our community and our community loves us, it’s a TGDS
                    lovefest!</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div id="" class="rich-blue px  row pt7 pb7  text-white mo-mb4 mo-mt0 mo-pt0 mo-pb0 mo-pr5 mo-pl5 ">
        <div class="slick-slider star-reviews__StyledSlider-sc-1bx2mpz-1 bfUJHJ slick-initialized" dir="ltr">
            <div class="slick-list">
                <div class="slick-track" style="width: 11700px; opacity: 1; transform: translate3d(-1404px, 0px, 0px);">
                    <div data-index="-3" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Thank you
                                TGDS!!</h4>
                                <p class="mb2">Everything was well laid out and the support from the staff and teachers
                                    was fantastic. I thought long and hard before enrolling on which school would be
                                    best for me but I'm very glad I chose The Graphic Design School.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="-2" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Highly
                                Recommended</h4>
                                <p class="mb2">I couldn't recommend a course more highly!! The staff were absolutely
                                    incredible and always helped when you needed. The content was very interesting and
                                    covered a broad range of design projects.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="-1" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Super
                                Helpful</h4>
                                <p class="mb2">I LOVED my studies at the Graphic Design School! Especially throughout
                                    the whole Covid thing, me and my studies wasn’t bothered at all by that! I learned
                                    everything that was initially planned and the tutors are super helpful!</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false"
                         style="outline: none; width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Brilliant
                                Course</h4>
                                <p class="mb2">Any folks wanting to expand their learning in a practical and creative
                                    way then this is the course for you. The course is all kinds of awesomeness and I
                                    highly recommend it!</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="1" class="slick-slide slick-active" tabindex="-1" aria-hidden="false"
                         style="outline: none; width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Awesome
                                Support</h4>
                                <p class="mb2">I was able to work from home after the course. I also didn’t ever feel
                                    alone, I was always on the forum and teacher’s portal working through any
                                    challenges.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="2" class="slick-slide slick-active" tabindex="-1" aria-hidden="false"
                         style="outline: none; width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Study
                                Anywhere</h4>
                                <p class="mb2">You can take it anywhere with you and it ﬁts in nicely with the rest of
                                    life. I now work as a freelance designer in my hometown of Melbourne.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="3" class="slick-slide" tabindex="-1" aria-hidden="true"
                         style="outline: none; width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Highly
                                Recommended</h4>
                                <p class="mb2">TGDS worked with me and took the time for me to understand the course
                                    before signing up. They made me feel like I was in good hands, they even helped me
                                    with the important decision of which Mac to buy!</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="4" class="slick-slide" tabindex="-1" aria-hidden="true"
                         style="outline: none; width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Amazing
                                Support</h4>
                                <p class="mb2">The best international on-line design school you could ever ask for,
                                    especially during the lockdown. The theory is structured very thoughtful, the video
                                    tutorials are really helpful, especially if English is not your native language.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="5" class="slick-slide" tabindex="-1" aria-hidden="true"
                         style="outline: none; width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Fun &amp;
                                Helpful</h4>
                                <p class="mb2">Simply put, I would not have been able to study graphic design in depth
                                    and at this level, if the TDGS wasn’t around. I really appreciate the availability
                                    of such a program and the flexibility that it offers.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="6" class="slick-slide" tabindex="-1" aria-hidden="true"
                         style="outline: none; width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Loved my
                                time at TGDS</h4>
                                <p class="mb2">The Tutors and Support staff are all gems, and are always willing to help
                                    you out at any time. I loved my time at TGDS ... if anyone is looking for a future
                                    involving graphic design - TGDS is a must!</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="7" class="slick-slide" tabindex="-1" aria-hidden="true"
                         style="outline: none; width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Unbelievable
                                Kind</h4>
                                <p class="mb2">I had the best experience studying with TGDS. The content and whole
                                    learning system was amazing, I have advanced such a long way in my skills and
                                    knowledge of Graphic Design since undertaking this course.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="8" class="slick-slide" tabindex="-1" aria-hidden="true"
                         style="outline: none; width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Thank you
                                TGDS!!</h4>
                                <p class="mb2">Everything was well laid out and the support from the staff and teachers
                                    was fantastic. I thought long and hard before enrolling on which school would be
                                    best for me but I'm very glad I chose The Graphic Design School.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="9" class="slick-slide" tabindex="-1" aria-hidden="true"
                         style="outline: none; width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Highly
                                Recommended</h4>
                                <p class="mb2">I couldn't recommend a course more highly!! The staff were absolutely
                                    incredible and always helped when you needed. The content was very interesting and
                                    covered a broad range of design projects.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="10" class="slick-slide" tabindex="-1" aria-hidden="true"
                         style="outline: none; width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Super
                                Helpful</h4>
                                <p class="mb2">I LOVED my studies at the Graphic Design School! Especially throughout
                                    the whole Covid thing, me and my studies wasn’t bothered at all by that! I learned
                                    everything that was initially planned and the tutors are super helpful!</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="11" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Brilliant
                                Course</h4>
                                <p class="mb2">Any folks wanting to expand their learning in a practical and creative
                                    way then this is the course for you. The course is all kinds of awesomeness and I
                                    highly recommend it!</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="12" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Awesome
                                Support</h4>
                                <p class="mb2">I was able to work from home after the course. I also didn’t ever feel
                                    alone, I was always on the forum and teacher’s portal working through any
                                    challenges.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="13" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Study
                                Anywhere</h4>
                                <p class="mb2">You can take it anywhere with you and it ﬁts in nicely with the rest of
                                    life. I now work as a freelance designer in my hometown of Melbourne.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="14" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Highly
                                Recommended</h4>
                                <p class="mb2">TGDS worked with me and took the time for me to understand the course
                                    before signing up. They made me feel like I was in good hands, they even helped me
                                    with the important decision of which Mac to buy!</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="15" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Amazing
                                Support</h4>
                                <p class="mb2">The best international on-line design school you could ever ask for,
                                    especially during the lockdown. The theory is structured very thoughtful, the video
                                    tutorials are really helpful, especially if English is not your native language.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="16" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Fun &amp;
                                Helpful</h4>
                                <p class="mb2">Simply put, I would not have been able to study graphic design in depth
                                    and at this level, if the TDGS wasn’t around. I really appreciate the availability
                                    of such a program and the flexibility that it offers.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="17" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Loved my
                                time at TGDS</h4>
                                <p class="mb2">The Tutors and Support staff are all gems, and are always willing to help
                                    you out at any time. I loved my time at TGDS ... if anyone is looking for a future
                                    involving graphic design - TGDS is a must!</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="18" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Unbelievable
                                Kind</h4>
                                <p class="mb2">I had the best experience studying with TGDS. The content and whole
                                    learning system was amazing, I have advanced such a long way in my skills and
                                    knowledge of Graphic Design since undertaking this course.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="19" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Thank you
                                TGDS!!</h4>
                                <p class="mb2">Everything was well laid out and the support from the staff and teachers
                                    was fantastic. I thought long and hard before enrolling on which school would be
                                    best for me but I'm very glad I chose The Graphic Design School.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="20" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" id="testimonials" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Highly
                                Recommended</h4>
                                <p class="mb2">I couldn't recommend a course more highly!! The staff were absolutely
                                    incredible and always helped when you needed. The content was very interesting and
                                    covered a broad range of design projects.</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="21" tabindex="-1" class="slick-slide slick-cloned" aria-hidden="true"
                         style="width: 468px;">
                        <div>
                            <div class="col-12 center pr2 pl2 x" tabindex="-1"
                                 style="width:100%;display:inline-block"><h4 class="mo-mb2 mb2 font-1_66vw">Super
                                Helpful</h4>
                                <p class="mb2">I LOVED my studies at the Graphic Design School! Especially throughout
                                    the whole Covid thing, me and my studies wasn’t bothered at all by that! I learned
                                    everything that was initially planned and the tutors are super helpful!</p>
                                <div class="flex between pr8 pl8 pt0_5 mt1">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                         class="star-reviews__StarStyled-sc-1bx2mpz-0 eyvUYp m-mr0">
                                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="row grey20 px pt6 pb7 mt4 mo-pt7 mo-pb7">
        <div class="col-5 off-1"><h5 class="book uc mb2 mo-font-0_77vw mo-normal">Help &amp; Support</h5>
            <h3 class="normal mb2 mo-mt2 mo-mb3 font-3_3vw mo-font-3_12vw">Here’s a bunch of <strong>frequently asked
                questions.</strong></h3></div>
        <div class="off-1 col-4">
            <div>
                <div>
                    <div class="flex between py1  mo-pt2 mo-pb1 mo-mb2 b-bot-grey50" q="How much are the courses?"
                         a="Here's a nicely laid out page with our payments and payment plans <a href='/prices'>prices page</a>."
                         style="cursor:pointer" show=""><h5 class="mb0">How much are the courses?</h5><h5 class="mb0">
                        +</h5></div>
                    <div class="smooth-reveal__StyledSmoothShow-sc-6jq5gk-0 ceGycN">
                        <div class="home__Div-sc-19rx2jc-0 bLnZOJ"><p class="pt1">Here's a nicely laid out page with our
                            payments and payment plans <a href="/prices">prices page</a>.</p></div>
                    </div>
                </div>
                <div>
                    <div class="flex between py1  mo-pt2 mo-pb1 mo-mb2 b-bot-grey50"
                         q="What is the criteria for enrolling?"
                         a="You must be 18 and over.<br/> <br/>  We like to talk to all students before they enrol, choosing the right course requires a tailored approach. Reach out us via <a href='mailto:info@thegraphicdesignschool.com'>email</a> or if you're a Chatty Cathy (take's one to know one) request a callback in the form found in our footer. <br/> <br/> If you've read this website backwards and forwards and would like the more nitty-gritty stuff, our <a href='/student-handbook'>support page</a> is where the nits and grits live. <br/> <br/> Web design students must be qualified graphic designers or experience developers to enrol, if you are unsure about your eligibility please contact us."
                         style="cursor:pointer" show=""><h5 class="mb0">What is the criteria for enrolling?</h5><h5
                            class="mb0">+</h5></div>
                    <div class="smooth-reveal__StyledSmoothShow-sc-6jq5gk-0 ceGycN">
                        <div class="home__Div-sc-19rx2jc-0 bLnZOJ"><p class="pt1">You must be 18 and over.<br> <br> We
                            like to talk to all students before they enrol, choosing the right course requires a
                            tailored approach. Reach out us via <a
                                    href="mailto:info@thegraphicdesignschool.com">email</a> or if you're a Chatty Cathy
                            (take's one to know one) request a callback in the form found in our footer. <br> <br> If
                            you've read this website backwards and forwards and would like the more nitty-gritty stuff,
                            our <a href="/student-handbook">support page</a> is where the nits and grits live. <br> <br>
                            Web design students must be qualified graphic designers or experience developers to enrol,
                            if you are unsure about your eligibility please contact us.</p></div>
                    </div>
                </div>
                <div>
                    <div class="flex between py1  mo-pt2 mo-pb1 mo-mb2 b-bot-grey50" q="Do I need previous experience?"
                         a="There’s no need to have any prior knowledge for our graphic design courses. We'll teach you from the ground up you’ll gain all the knowledge and skills you need to become a graphic designer, as well as learning the major design software packages Adobe Illustrator, Photoshop and InDesign.<br/> <br/> Please note the Design@Work course teaches only InDesign. <br/> <br/> Web design students must be qualified graphic designers or experience developers to enrol, if you are unsure about your eligibility please contact us."
                         style="cursor:pointer" show=""><h5 class="mb0">Do I need previous experience?</h5><h5
                            class="mb0">+</h5></div>
                    <div class="smooth-reveal__StyledSmoothShow-sc-6jq5gk-0 ceGycN">
                        <div class="home__Div-sc-19rx2jc-0 bLnZOJ"><p class="pt1">There’s no need to have any prior
                            knowledge for our graphic design courses. We'll teach you from the ground up you’ll gain all
                            the knowledge and skills you need to become a graphic designer, as well as learning the
                            major design software packages Adobe Illustrator, Photoshop and InDesign.<br> <br> Please
                            note the Design@Work course teaches only InDesign. <br> <br> Web design students must be
                            qualified graphic designers or experience developers to enrol, if you are unsure about your
                            eligibility please contact us.</p></div>
                    </div>
                </div>
                <div>
                    <div class="flex between py1  mo-pt2 mo-pb1 mo-mb2 b-bot-grey50" q="How do I enrol?"
                         a="Enrolment is easy, you may enrol any day of the year. Be online and studing within a matter of seconds after enrolling through our <a href='/prices'>enrolments page</a>. <br/> <br/> If you need to pay the CUA40720 Certificate IV in Design course upfront you may only do so through a registered business (individuals must use the payment plan on the enrolments page). Please contact our <a href='mailto:accounts@thegraphicdesignschool.com'>accounts team</a> with your full name and business details and we will issue you an invoice. <br/> <br/> If you need an invoice or a quote before you enrol, please contact our <a href='mailto:accounts@thegraphicdesignschool.com'>accounts team</a>."
                         style="cursor:pointer" show=""><h5 class="mb0">How do I enrol?</h5><h5 class="mb0">+</h5></div>
                    <div class="smooth-reveal__StyledSmoothShow-sc-6jq5gk-0 ceGycN">
                        <div class="home__Div-sc-19rx2jc-0 bLnZOJ"><p class="pt1">Enrolment is easy, you may enrol any
                            day of the year. Be online and studing within a matter of seconds after enrolling through
                            our <a href="/prices">enrolments page</a>. <br> <br> If you need to pay the CUA40720
                            Certificate IV in Design course upfront you may only do so through a registered business
                            (individuals must use the payment plan on the enrolments page). Please contact our <a
                                    href="mailto:accounts@thegraphicdesignschool.com">accounts team</a> with your full
                            name and business details and we will issue you an invoice. <br> <br> If you need an invoice
                            or a quote before you enrol, please contact our <a
                                    href="mailto:accounts@thegraphicdesignschool.com">accounts team</a>.</p></div>
                    </div>
                </div>
                <div>
                    <div class="flex between py1  mo-pt2 mo-pb1 mo-mb2 b-bot-grey50" q="When can I start my studies?"
                         a="You may enrol any day of the year. Be online and studing within a matter of seconds after enrolling through our <a href='/prices'>enrolments page</a>."
                         style="cursor:pointer" show=""><h5 class="mb0">When can I start my studies?</h5><h5
                            class="mb0">+</h5></div>
                    <div class="smooth-reveal__StyledSmoothShow-sc-6jq5gk-0 ceGycN">
                        <div class="home__Div-sc-19rx2jc-0 bLnZOJ"><p class="pt1">You may enrol any day of the year. Be
                            online and studing within a matter of seconds after enrolling through our <a href="/prices">enrolments
                                page</a>.</p></div>
                    </div>
                </div>
                <div>
                    <div class="flex between py1  mo-pt2 mo-pb1 mo-mb2 b-bot-grey50"
                         q="Will I graduate with a portfolio?"
                         a="In Module 11 of the Intensive Foundation Course and the CUA40720 Certificate IV in Design course you will focus on creating your portfolio.<br/> <br/>  Want to see what other students have produced in Module 11? Check out our <a href='/students'>student work</a>."
                         style="cursor:pointer" show=""><h5 class="mb0">Will I graduate with a portfolio?</h5><h5
                            class="mb0">+</h5></div>
                    <div class="smooth-reveal__StyledSmoothShow-sc-6jq5gk-0 ceGycN">
                        <div class="home__Div-sc-19rx2jc-0 bLnZOJ"><p class="pt1">In Module 11 of the Intensive
                            Foundation Course and the CUA40720 Certificate IV in Design course you will focus on
                            creating your portfolio.<br> <br> Want to see what other students have produced in Module
                            11? Check out our <a href="/students">student work</a>.</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <a href="/calculator">Go to Calculator</a>
</section>
