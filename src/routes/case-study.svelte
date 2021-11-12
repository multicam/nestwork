<script>

    import {formatMoney, formatPercent} from "$lib/utils";
</script>

<section>
    <h2 class="col-12 normal mb0 px pt8 pb0 font-3_3vw" id="about">
        Case Study Albie and Georgie,
    </h2>

    <div class="row px">
        <div class="col-8">
            <div class="font-1_25vw mo-mb2">

                <p>
                    Albie and Georgie have been together for the past 5 years and expect one day they will get married
                    and raise a family. But for the moment they are enjoying the freedom to holiday in great
                    destinations and eat out regularly.
                </p>
                <p>
                    They live in an apartment in Green Square in Sydney and although they love the location for work,
                    it’s not the area they want to buy their forever home.
                </p>
                <p>
                    Albie has worked his way up as a creative at an Advertising Agency and earns $180,000 per annum
                    while Georgie works in Human Resources and has an income of $120,000 per annum. Their combined
                    savings is around $300,000, more than enough for a deposit on a nice inner city apartment, but they
                    don’t see a great return in that sort of property and it isn’t where they ultimately want to be.
                </p>
                <p>
                    They love taking holidays every year to premium locations within Australia. Covid has changed their
                    outlook on overseas travel. Sure they would like to mix it up but while uncertainty remains with
                    flights, ongoing Covid outbreaks and restrictive health insurance, why not enjoy Australia’s finest
                    destinations. They would spend on average around $30,000 per year on holidays and are concerned that
                    they aren’t getting into the ever booming Australian property market.
                </p>
                <p>
                    Is there a better way for them to enjoy a lifestyle they clearly love and at the same time securing
                    a foothold on a residential property in one of those aspirational location they love?
                </p>
                <p>
                    At Nestlove we might just have the solution for them. Let’s work through an example.
                </p>
            </div>
        </div>

    </div>

    <div class="row px ">
        <div class="col-12">
            <table>
                <tr>
                    <td colspan="3" class="bold">Albie</td>
                    <td colspan="3" class="bold">Georgie</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Income</td>
                    <td>{formatMoney(180000)}</td>
                    <td></td>
                    <td>Income</td>
                    <td>{formatMoney(120000)}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Superannuation</td>
                    <td>{formatMoney(18000)}</td>
                    <td></td>
                    <td>Superannuation</td>
                    <td>{formatMoney(12000)}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Tax</td>
                    <td>{formatMoney(51667)}</td>
                    <td></td>
                    <td>Tax</td>
                    <td>{formatMoney(29467)}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Medicare Levy</td>
                    <td>{formatMoney(3600)}</td>
                    <td></td>
                    <td>Medicare Levy</td>
                    <td>{formatMoney(2400)}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Disposable income</td>
                    <td>{formatMoney(124000)}</td>
                    <td></td>
                    <td>Disposable income</td>
                    <td>{formatMoney(88133)}</td>
                </tr>
            </table>
        </div>
    </div>

    <div class="row px mt4">
        <div class="col-8">
            <div class="font-1_25vw mo-mb2">
                <p>Albie and Georgie decide to purchase a share in a Nestlove property;</p>
            </div>
        </div>
    </div>

    <div class="row px ">
        <div class="col-4 pt9 mo-pt7">
            <div class="font-1_25vw mo-mb2">
                <p>
                    <strong>Location</strong><br>
                    30 Morella Road, Whale Beach, NSW 2017<br>
                    <strong>Details</strong><br>
                    4 Bedrooms, 3 Bathrooms, 2 Garages<br>
                    <strong>Shares</strong><br>
                    6 shares at {formatMoney(978581)}<br>
                    <strong>Historical Growth Rate</strong><br>
                    {formatPercent(.0905)} <br>
                    <strong>LVR</strong><br>
                    {formatPercent(.7)} <br>
                    <strong>Equity Contribution</strong><br>
                    {formatMoney(293574)} per share<br>
                    <strong>Interest only loan</strong><br>
                    {formatPercent(.06)} for the share<br>
                    <strong>Holiday entitlement</strong><br>
                    60 days<br>
                </p>
            </div>
        </div>
    </div>

    <div class="row px mt4">
        <div class="col-8">
            <div class="font-1_25vw mo-mb2">
                <p>Their finances now look like:</p>
            </div>
        </div>
    </div>

    <div class="row px ">
        <div class="col-12">
            <table>
                <tr>
                    <td colspan="3" class="bold">Albie</td>
                    <td colspan="3" class="bold">Georgie</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Income</td>
                    <td>{formatMoney(180000)}</td>
                    <td></td>
                    <td>Income</td>
                    <td>{formatMoney(120000)}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Interest Charges</td>
                    <td>{formatMoney(20550)}</td>
                    <td></td>
                    <td>Interest Charges</td>
                    <td>{formatMoney(20550)}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Superannuation</td>
                    <td>{formatMoney(18000)}</td>
                    <td></td>
                    <td>Superannuation</td>
                    <td>{formatMoney(12000)}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Nestlove fees</td>
                    <td>{formatMoney(4316)}</td>
                    <td></td>
                    <td>Nestlove fees</td>
                    <td>{formatMoney(4316)}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Tax</td>
                    <td>{formatMoney(42466)}</td>
                    <td></td>
                    <td>Tax</td>
                    <td>{formatMoney(21385)}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Medicare Levy</td>
                    <td>{formatMoney(3102)}</td>
                    <td></td>
                    <td>Medicare Levy</td>
                    <td>{formatMoney(1902)}</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Disposable income</td>
                    <td>{formatMoney(109564)}</td>
                    <td></td>
                    <td>Disposable income</td>
                    <td>{formatMoney(71845)}</td>
                </tr>
            </table>
        </div>
    </div>


    <div class="row px mt4">
        <div class="col-8">
            <div class="font-1_25vw mo-mb2">
                <p>
                    So the real benefits of a NestLove property aren’t just about utilising negative gearing.
                </p>
                <ul>
                    <li>
                        As a property owner at the historical 9.05% growth rate Albie and Georgie’s equity will have
                        grown from $293,574 to $460,658 over 5 years based on past returns.
                    </li>
                    <li>
                        As a couple, Albie and Georgie have seen their combined tax adjusted disposable income change from $212,133 to $181,409 but now have their own share of an aspirational property.
                    </li>
                    <li>
                        Instead of spending $30,000 per annum on holidays with-out any tax benefits, they now have a foothold into Australia’s booming prestigious property market.
                    </li>
                    <li>
                      They own, with 5 other shareholders, a magnificent property in one of Australia’s most desirable locations.
                    </li>
                    <li>
                        They have access to the property for 60 days per year for annual holidays and the world class booking app ensures peak times are shared equally.
                    </li>
                    <li>
                        And with all NestLove properties they just invest, enjoy and leave all the day to day management to NestLove.
                    </li>
                </ul>
            </div>
        </div>
    </div>

</section>
