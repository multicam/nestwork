<script>
  import MoneyInput from '../components/input-money.svelte'
  import Toggle from '../components/toggle.svelte'
  import Chart from '../components/investment-chart-frappe.svelte'
  import Fus from '../components/investment-chart-fusion.svelte'
  import {compound} from '$lib/financials'

  const {log} = console, {stringify} = JSON

  // https://www.ato.gov.au/rates/individual-income-tax-rates/
  //
  // 0 – $18,200 | Nil
  // $18,201 – $45,000 | 19 cents for each $1 over $18,200
  // $45,001 – $120,000 | $5,092 plus 32.5 cents for each $1 over $45,000
  // $120,001 – $180,000 | $29,467 plus 37 cents for each $1 over $120,000
  // $180,001 and over | $51,667 plus 45 cents for each $1 over $180,000
  //
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
    numberShares: 6,
    purchasePrice: 5200000,
    sharePrice: 1100000,
    postcode: 2107,
    suburb: 'whale-beach'
  }

  // -----------------
   const stats = {
    'whale-beach': {
      median_price: 5928500,
      median_quarterly: .174,
      median_3y: .6939,
      median_5y: .9534,
      average_10y_annual: .0893
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

  const formatMoney = val => {
    if( !val ) return '-'
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).format(val)
  }
  const formatPercent = val => `${val * 100.}%`

  const calculateLoan = (amount,params) => {
    const months = params.durationYears * 12, rate = params.rate
    return amount*(rate * Math.pow((1 + rate), months))/(Math.pow((1 + rate), months) - 1);
  }

  const calculateProfit = (sharePrice,years,rate) => {
    const temp = compound(years,sharePrice,rate).pop()
    return temp - sharePrice
  }

  let yearlyIncome
  $: taxPosition = calculateTaxes(yearlyIncome)

  const lvrValues = [ .60, .65, .70, .75, .80, .85, .9 ]
  let selectedLvr = lvrValues[0]
  $: loanAmount = propertyData.sharePrice * selectedLvr

  const loanParams = { durationYears: 30, rate: .035 }
  $: loanPayment = calculateLoan(loanAmount,loanParams)

  const exitYears = 7
  const propertyStats = stats[propertyData.suburb]

  $: exitSale = compound(7,propertyData.purchasePrice,propertyStats.average_10y_annual).pop()
  $: exitProfit = calculateProfit(propertyData.sharePrice,exitYears,propertyStats.average_10y_annual)
</script>

<main class="calculator-container">
    <h1>Live Calculator</h1>

    <section>
        <h3>Sample Property</h3>
        <pre>{stringify(propertyData)}</pre>
    </section>

    <section>
        <h3>Annual Income</h3>
        <div class="input-group">
            <MoneyInput bind:value={yearlyIncome} />
        </div>
    </section>

    <section>
        <h3>Tax Position</h3>
        <div class="money">{formatMoney(taxPosition?.amount)}</div>
<!--        <pre>{stringify(taxAmount,null,2)}</pre>-->
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
        <h3>Share Price</h3>
        <div class="money"><span>Total</span>{formatMoney(propertyData.sharePrice)}</div>
        <div class="money"><span>Loan</span>{formatMoney(loanAmount)}</div>

        <h3>Monthly Deducted Interests</h3>
        <div class="money"><span>Mthly</span>{formatMoney(loanPayment)}</div>
    </section>

    <section>
        <h3>Exit / {exitYears} years</h3>
        <div><span>Growth Average 10 years</span>{formatPercent(propertyStats.average_10y_annual)}</div>
        <div class="money"><span>Property Future Sale</span>{formatMoney(exitSale)}</div>
        <div class="money"><span>Capital Growth</span>{formatMoney(exitProfit)}</div>
    </section>

    <section>
        <h3>Projections</h3>
        <Chart years={exitYears} stats={stats[propertyData.suburb]} property={propertyData}/>
    </section>

    <section>&nbsp;</section>
</main>

<style lang="scss">

    .calculator-container {
      font-family: var(--font-sans);
      padding: 0 60px ;
    }

    section {
      margin-top: 1em;
    }

    :global(pre) {
      max-width: 100%;
      white-space: pre-wrap;
      word-break: keep-all;
      color: rgba(0,0,0,.5)
    }

    span {
      color: rgba(0,0,0,.4);
      font-size: .616em;
      margin-right: 1em;
    }

    .money {
      font-size: 1.3em;
      color: orangered;

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
