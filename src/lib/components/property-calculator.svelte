<script>
  export let property

  import {dev} from '$app/env'
  import {calculateLoan, calculateTaxes, compound} from "$lib/financials";
  import {formatMoney} from "$lib/utils";

  const {log} = console, {stringify} = JSON

  import MoneyInput from './calculator/money-input.svelte'
  import LvrInput from './calculator/lvr-input.svelte'
  import Graph from './calculator/graph.svelte'

  import RangeSlider from '$lib/components/range-slider.svelte'

  let exitYears = 7, taxPosition, loanAmount, equityAmount, loanParams, loanPaymentYearly, loanPaymentMonthly, exitSale, exitGrowth, equityGrowth, labelYears, costsIndividual, costsIndividualInclLoan, adjustedIncome, adjustedTaxPosition, taxBenefits, taxBenefitTotal, costsIndividualTotal, adjustedGrowth, costBase, equity10y, equity3y

  let yearlyIncome = 150000
  $: taxPosition = calculateTaxes(yearlyIncome)

  let selectedLvr = .4
  $: loanAmount = property.data.sharePrice * selectedLvr
  $: equityAmount = property.data.sharePrice - loanAmount

  $: loanParams = {durationYears: 30, rate: .065}
  $: loanPaymentYearly = calculateLoan(loanAmount, loanParams)
  $: loanPaymentMonthly = loanPaymentYearly / 12

  $: exitSale = compound(exitYears, property.data.purchasePrice, property.stats.average_10y_annual).pop()
  $: exitGrowth = exitSale - property.data.sharePrice * property.data.numberShares
  $: equityGrowth = exitGrowth / property.data.numberShares * (1 - selectedLvr)

  $: labelYears = new Array(exitYears).fill(new Date().getFullYear()).map((i, n) => i + n)

  $: costsIndividual = property.data.costs.map(i => i / property.data.numberShares)
  $: costsIndividualInclLoan = costsIndividual.map(i => i + loanPaymentYearly)

  $: adjustedIncome = costsIndividual.map(i => yearlyIncome - i - loanPaymentYearly)
  $: adjustedTaxPosition = costsIndividual.map(i => calculateTaxes(yearlyIncome - i - loanPaymentYearly)?.amount)
  $: taxBenefits = adjustedTaxPosition.map(i => taxPosition.amount - i)
  $: taxBenefitTotal = taxBenefits.reduce((r, i) => r + i, 0)

  $: costsIndividualTotal = costsIndividual.map(i => i + loanPaymentYearly).reduce((r, i) => r + i, 0)
  $: adjustedGrowth = exitGrowth / property.data.numberShares * (1 - selectedLvr) - costsIndividualTotal + taxBenefitTotal

  $: costBase = costsIndividualInclLoan

  $: equity10y =
    compound(exitYears, property.data.purchasePrice, property.stats.average_10y_annual)
      .map(i => (i / property.shares.total - property.data.sharePrice) * (1 - selectedLvr))

  $: equity3y =
    compound(exitYears, property.data.purchasePrice, property.stats.average_3y_annual)
      .map(i => (i / property.shares.total - property.data.sharePrice) * (1 - selectedLvr))

</script>

<section>
    <div class="mt4 mb4 px row">
        <h2 class="col-12 normal px mb0 text-center font-6vw mo-text-left">
            Ready to Invest
        </h2>
        <p class="col-12 px text-center mo-text-left">
            If you are ready to take the next step to becoming a NestLover. <br>
            Let’s get you started….
        </p>
    </div>
    <div class="row  px mo-flex-col">
        <div class="col-4 off-1 pt9 mo-pt7 ">
            <div class="font-1_25vw mo-mb2">

                <h3 class="mb1">Investor</h3>
                <h4 class="mt1 mb1">Yearly Income</h4>
                <MoneyInput bind:value={yearlyIncome}/>

            </div>
        </div>

        <div class="col-4 off-1 pt9 mo-pt7 ">
            <div class="font-1_25vw mo-mb2">
                <h3 class="mb1">Investment</h3>

                <h4 class="mt1 mb1">Share Price</h4>
                <div class="money">{formatMoney(property.data.sharePrice)}</div>

                <h5 class="mt1 mb1">LVR</h5>
                <LvrInput bind:selectedLvr/>



            </div>
        </div>

    </div>
    <div class="row  px mt4">
        <Graph data={{
          labelYears,
          costBase,
          equity10y,
          equity3y
        }} />
    </div>
    <div class="row px mt4 mo-hidden">
        <div class="col-12">

            <table>
                <tr class="bold text-right">
                    <td>&nbsp;</td>
                    {#each labelYears as year }
                        <td>{year}</td>
                    {/each}
                </tr>
                <tr>
                    <td>
                        Per Year
                    </td>
                </tr>
                <tr>
                    <td style="line-height: 3vw">
                        <strong>Costs</strong>
                    </td>
                    {#each costsIndividual as val }
                        <td class="text-mono text-right">{formatMoney(val)}</td>
                    {/each}
                </tr>
                <tr>
                    <td>
                        <strong>Incl. Loan</strong>
                    </td>
                    {#each costsIndividualInclLoan as val }
                        <td class="text-mono text-right italic" style="color: orangered">{formatMoney(val)}</td>
                    {/each}
                </tr>
                <tr>
                    <td>
                        <strong>Adjusted Income</strong>
                    </td>
                    {#each adjustedIncome as val }
                        <td class="text-mono text-right ">{formatMoney(val)}</td>
                    {/each}
                </tr>
                <tr>
                    <td>
                        <strong>Adjusted Tax Position</strong>
                    </td>
                    {#each adjustedTaxPosition as val }
                        <td class="text-mono text-right ">{formatMoney(val)}</td>
                    {/each}
                </tr>
                <tr>
                    <td>
                        <strong>Tax Benefit</strong>
                    </td>
                    {#each taxBenefits as val }
                        <td class="text-mono text-right italic" style="color: orangered">{formatMoney(val)}</td>
                    {/each}
                </tr>
                <tr>
                    <td style="line-height: 3vw">
                        Compound
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong>Cost Base</strong>
                    </td>
                    {#each costBase as val }
                        <td class="text-mono text-right">{formatMoney(val)}</td>
                    {/each}
                </tr>
                <tr>
                    <td>
                        <strong>Growth 10y Ave</strong>
                    </td>
                    {#each equity10y as val }
                        <td class="text-mono text-right">{formatMoney(val)}</td>
                    {/each}
                </tr>
                <tr>
                    <td>
                        <strong>Growth 3y Ave</strong>
                    </td>
                    {#each equity3y as val }
                        <td class="text-mono text-right">{formatMoney(val)}</td>
                    {/each}
                </tr>
            </table>

        </div>
    </div>
    <div class="row px mt4">

    </div>
</section>


<style>
    table {
        width: 100%;
    }

    td {
        padding: 0;
        line-height: 2vw;
    }

    .money {
        color: #8a082d;
        font-weight: 500;
        font-size: clamp(16px, 1.65vw, 1.65vw);
    }
</style>
