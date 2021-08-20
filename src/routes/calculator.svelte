<script>

  import MoneyInput from '../components/money-input.svelte'
  import DisplayLine from '../components/display-line.svelte'
  import Toggle from '../components/toggle.svelte'
  import Chart from '../components/investment-chart-frappe.svelte'

  import {compound} from '$lib/financials'
  import {formatMoney,formatPercent} from '$lib/utils'

  const {log} = console, {stringify} = JSON

  // https://www.ato.gov.au/rates/individual-income-tax-rates/
  //
  // 0 – $18,200 | Nil
  // $18,201 – $45,000 | 19 cents for each $1 over $18,200
  // $45,001 – $120,000 | $5,092 plus 32.5 cents for each $1 over $45,000
  // $120,001 – $180,000 | $29,467 plus 37 cents for each $1 over $120,000
  // $180,001 and over | $51,667 plus 45 cents for each $1 over $180,000

  // stamp duty
  // A/ https://www.e-business.sro.vic.gov.au/calculators/land-transfer-duty
  // B/ https://stampduty.calculatorsaustralia.com.au/
  // Funny: A -> 318,000 | B -> 300,952

  // -----------------
  const taxBracket = [
    {
      max: 18200,
      bt: 0,
      rn: 0
    },
    {
      min: 18201,
      max: 45000,
      bt: 0,
      rn: .19
    },
    {
      min: 45001,
      max: 120000,
      bt: 5092,
      rn: .325
    },
    {
      min: 120001,
      max: 180000,
      bt: 29467,
      rn: .37
    },
    {
      min: 180001,
      bt: 51667,
      rn: .45
    }
  ]

  const calculateTaxes = val => {
    if(!val) return {}

    const last = taxBracket.slice(-1)[0]
    const first = taxBracket[0]

    if( val < first.max ) {
      return {
        bracket: first,
        amount: val * first.rn
      }
    }

    if( val > last.min ) {
      return {
        bracket: last,
        amount: last.bt + ( val - last.min - 1 ) * last.rn
      }
    }

    const res = taxBracket.find( i => val <= i.max && val >= i.min )
    return {
      bracket: res,
      amount: res.bt + ( val - res.min - 1 ) * res.rn
    }

  }

  // -----------------
  const propertyData = {
    numberShares: 8,
    purchasePrice: 5200000,
    postcode: 2107,
    suburb: 'whale-beach',

    stampDuty: 318000,
    landTax: 20020,

    sharePrice: 796000,

    costs: [
      95000,
      50000,
      52000,
      54000,
      56000,
      58000,
      60000
    ]
  }

  // -----------------
   const stats = {
    'whale-beach': {
      postcode: 2107,
      average_10y_annual: .0849
    },
    'portsea': {
      postcode: 3944,
      average_10y_annual: .0709
    },
    'barwon-heads': {
      postcode: 3227,
      average_10y_annual: .0725
    },
    'noosa-heads': {
      postcode: 4567,
      average_10y_annual: .0837
    },
    'mollymook': {
      postcode: 2539,
      average_10y_annual: .0622
    },
    'yamba': {
      postcode: 2464,
      average_10y_annual: .0548
    }
  }

  // https://www.smartpropertyinvestment.com.au/data/nsw/2107/whale-beach
  // GROWTH REPORT
  // Median Quarterly	17.4%
  // Median 12 month	N/A
  // Median 3 years	69.39%	N/A
  // Median 5 years	95.34%	N/A
  // 10 years average annual	18.93%
  // Weekly media advert. rent	$3000
  // Time on Market	0.0 days
  // Gross Rental Yield Percent	2.63%

  const calculateLoan = (amount,params) => {
    const months = params.durationYears * 12, rate = params.rate/12
    return amount*(rate * Math.pow((1 + rate), months))/(Math.pow((1 + rate), months) - 1);
  }

  let yearlyIncome = 150000
  $: taxPosition = calculateTaxes(yearlyIncome)

  const lvrValues = [ .50, .55, .60, .65, .70, .75, .80, .85, .9 ]
  let selectedLvr = lvrValues[0]

  $: loanAmount = propertyData.sharePrice * selectedLvr
  $: equityAmount = propertyData.sharePrice - loanAmount

  const loanParams = { durationYears: 30, rate: .065 }
  $: loanPayment = calculateLoan(loanAmount,loanParams)
  $: loanPaymentYearly = loanPayment * 12

  const exitYears = 7
  const propertyStats = stats[propertyData.suburb]

  $: exitSale = compound(exitYears,propertyData.purchasePrice,propertyStats.average_10y_annual).pop()
  $: exitGrowth = exitSale - propertyData.sharePrice * propertyData.numberShares

  $: labelYears = new Array(exitYears).fill(new Date().getFullYear()).map((i, n) => i + n)

  $: costsIndividual = propertyData.costs.map( i => i / propertyData.numberShares )
  $: costsIndividualInclLoan = costsIndividual.map(i => i + loanPaymentYearly)

  $: adjustedIncome = costsIndividual.map(i => yearlyIncome - i - loanPaymentYearly)
  $: adjustedTaxPosition = costsIndividual.map(i => calculateTaxes(yearlyIncome - i - loanPaymentYearly)?.amount)
  $: taxBenefits = adjustedTaxPosition.map(i => taxPosition.amount - i )
  $: taxBenefitTotal = taxBenefits.reduce((r,i) => r+i, 0)

  $: costsIndividualTotal = costsIndividual.map(i => i + loanPaymentYearly).reduce((r,i) => r + i,0)
  $: adjustedGrowth = exitGrowth/propertyData.numberShares * (1-selectedLvr) - costsIndividualTotal + taxBenefitTotal

</script>

<main class="calculator-container">
    <h1>Sample Calculator</h1>

    <section>
        <h3>Sample Property</h3>
        <DisplayLine label="Purchase Price" value={propertyData.purchasePrice} money/>
        <DisplayLine label="Share Price" value={propertyData.sharePrice} money/>
        <DisplayLine label="Setup costs" value={propertyData.sharePrice*propertyData.numberShares - propertyData.purchasePrice} money/>
        <DisplayLine label="Setup rate" value={(propertyData.sharePrice*propertyData.numberShares - propertyData.purchasePrice)/propertyData.purchasePrice} percent/>
        <DisplayLine label="Suburb" value={propertyData.suburb+' | '+propertyData.postcode} emphasis/>
<!--        <pre>{stringify(propertyData,null,2)}</pre>-->
    </section>
    <section>
        <h3>Annual Income</h3>
        <div class="input-group">
            <MoneyInput bind:value={yearlyIncome} />
        </div>
        <DisplayLine label="Tax Position" value={taxPosition?.amount} money/>
<!--    <pre>{stringify(taxAmount,null,2)}</pre>-->
    </section>
    <section>
        <h3>LVR</h3>
        <div class="options-container gapped">
            {#each lvrValues as lvr }
                <div>
                    <Toggle type='radio' bind:group={selectedLvr} value={lvr} let:checked={checked}>
                        {checked ? '>> ' : '' }{formatPercent(lvr)}{checked ? '<< ' : '' }
                    </Toggle>
                </div>
            {/each}
        </div>
    </section>
    <section>
        <h3>Individual Shareholder</h3>
        <DisplayLine label="Share Price" value={propertyData.sharePrice} money/>
        <DisplayLine label="Equity" value={propertyData.sharePrice - loanAmount} money/>
        <DisplayLine label="Loan" value={loanAmount} money/>
        <DisplayLine label="Monthly Payment" value={loanPayment} money/>

<!--        <h3>Monthly Deducted Interests</h3>-->
<!--        <div class="money"><span>Mthly</span>{formatMoney(loanPayment)}</div>-->

    </section>
    <section>
        <table>
            <tr class="bold text-right">
                <td>&nbsp;</td>
                {#each labelYears as year }
                    <td>{year}</td>
                {/each}
            </tr>
            <tr>
                <td>
                    <strong>Costs</strong>
                </td>
                {#each costsIndividual as val }
                    <td class="text-mono">{formatMoney(val)}</td>
                {/each}
            </tr>
            <tr>
                <td>
                    <strong>Incl. Loan</strong>
                </td>
                {#each costsIndividualInclLoan as val }
                    <td class="text-mono italic">{formatMoney(val)}</td>
                {/each}
            </tr>
            <tr>
                <td>
                    <strong>Adjusted Income</strong>
                </td>
                {#each adjustedIncome as val }
                    <td class="text-mono">{formatMoney(val)}</td>
                {/each}
            </tr>
            <tr>
                <td>
                    <strong>Adjusted Tax Position</strong>
                </td>
                {#each adjustedTaxPosition as val }
                    <td class="text-mono">{formatMoney(val)}</td>
                {/each}
            </tr>
            <tr>
                <td>
                    <strong>Tax Benefit</strong>
                </td>
                {#each taxBenefits as val }
                    <td class="text-mono italic">{formatMoney(val)}</td>
                {/each}
            </tr>
        </table>
    </section>
    <section>
        <h3>Equity after {exitYears} years</h3>
        <DisplayLine label="Growth Av. 10 years" value="{propertyStats.average_10y_annual}" percent />
        <h4>Property</h4>
        <DisplayLine label="Future Value" value="{exitSale}" money />
        <DisplayLine label="Future Growth" value="{exitSale - propertyData.purchasePrice}" money />
        <DisplayLine label="Equity Growth" value="{exitGrowth}" money />
        <h4>Shareholder</h4>
        <DisplayLine label="Investment" value="{propertyData.sharePrice - loanAmount}" money />
        <DisplayLine label="Equity Growth" value="{exitGrowth/propertyData.numberShares * selectedLvr}" money italic />
        <DisplayLine label="Total Costs" value="{costsIndividualTotal}" money />
        <DisplayLine label="Tax Benefits" value="{taxBenefitTotal}" money />
        <DisplayLine label="Adjusted Growth" value="{adjustedGrowth}" money />
    </section>
    <section>
        <h3>Projections</h3>
        <Chart years={exitYears} stats={stats[propertyData.suburb]} property={propertyData}/>
    </section>
    <section>&nbsp;</section>
</main>

<style lang="scss">

  :global(pre) {
    max-width: 100%;
    white-space: pre-wrap;
    word-break: keep-all;
    color: rgba(0,0,0,.6)
  }

  .calculator-container {
      font-family: var(--font-sans);
      padding: 0 60px ;
      overflow-x: hidden;
    }

    section {
      margin-top: 1em;
    }

    td:first-child {
      margin-right: 1em;
      display: inline-block;
      width: 120px;
    }

    td {
      padding-left: 0;
    }

    td:not(:first-child) {
      text-align: right;
    }

    tr {
      line-height: 20px
    }

    .options-container {
    }

    .gapped {
      --gap: 10px;
      display: inline-flex;
      flex-wrap: wrap;
      margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
      width: calc(100% + var(--gap));

      & > * {
        display: block;
        margin: var(--gap) 0 0 var(--gap);
      }
    }

</style>
