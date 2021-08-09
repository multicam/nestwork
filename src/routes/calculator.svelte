<script>
  import MoneyInput from '../components/input-money.svelte'
  import Toggle from '../components/toggle.svelte'

  const {log} = console, {stringify} = JSON
  //
  // 0 – $18,200 | Nil
  // $18,201 – $45,000 | 19 cents for each $1 over $18,200
  // $45,001 – $120,000 | $5,092 plus 32.5 cents for each $1 over $45,000
  // $120,001 – $180,000 | $29,467 plus 37 cents for each $1 over $120,000
  // $180,001 and over | $51,667 plus 45 cents for each $1 over $180,000
  //
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

  // -----------------
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

  let yearlyIncome
  $: taxAmount = calculateTaxes(yearlyIncome)

  const formatMoney = val => {
    if( !val ) return '-'
    return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumFractionDigits: 0, minimumFractionDigits: 0 }).format(val)
  }

  const formatPercent = val => `${Math.round(val * 100.)}%`

  const propertyData = {
    sharePrice: 760000
  }

  const lvrValues = [ .60, .65, .70, .75, .80 ]

  let selectedLvr = lvrValues[0]

  $: loanAmount = propertyData.sharePrice * selectedLvr

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
        <div class="money">{formatMoney(taxAmount?.amount)}</div>
        <pre>{stringify(taxAmount)}</pre>
    </section>
    <section>
        <h3>LVR</h3>
        {#each lvrValues as lvr }
            <Toggle type='radio' bind:group={selectedLvr} value={lvr} let:checked={checked}>
                {checked ? '>> ' : '' }{formatPercent(lvr)}
            </Toggle>
        {/each}
        <pre>{stringify(selectedLvr)}</pre>
    </section>
    <section>
        <h3>Share Price</h3>
        <div class="money"><span>Total</span>{formatMoney(propertyData.sharePrice)}</div>
        <div class="money"><span>Loan</span>{formatMoney(loanAmount)}</div>
    </section>
</main>

<style lang="scss">

    .calculator-container {
      font-family: var(--font-sans);
      padding: 0 60px ;
    }

    section {
      margin-top: 1em;
    }

    pre {
      white-space: pre-wrap;
      word-break: keep-all;
      color: rgba(0,0,0,.5)
    }

    .money {
      font-size: 1.6em;
      color: orangered;

      span {
        color: rgba(0,0,0,.3);
        font-size: .616em;
        margin-right: 1em;
      }
    }
</style>
