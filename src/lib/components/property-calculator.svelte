<script>
  export let property

  const {log} = console, {stringify} = JSON

  import {dev} from '$app/env'
  import {aggregate, calculateLoan, calculateTaxes, compound, sum} from "$lib/financials";
  import {formatMoney, formatPercent} from "$lib/utils";

  import MoneyInput from './calculator/money-input.svelte'
  import Graph from './calculator/graph.svelte'

  import RangeSlider from '$lib/components/range-slider.svelte'

  let exitYears = 7
  let selectedLvr, taxPosition, loanAmount, equityAmount, loanParams, loanPaymentYearly, loanPaymentMonthly, exitSale, exitGrowth, equityGrowth, labelYears, costsIndividual, costsIndividualInclLoan, adjustedIncome, adjustedTaxPosition, taxBenefits, taxBenefitTotal, costsIndividualTotal, adjustedGrowth, costBase, equity10y, equity3y

  let yearlyIncome = 120000
  $: taxPosition = calculateTaxes(yearlyIncome)

  let selectedRangeRate = 45
  $: selectedRate = selectedRangeRate / 1000.

  let selectedRangeLvr = 30
  $: selectedLvr = selectedRangeLvr / 100.
  $: loanAmount = property.data.sharePrice * selectedLvr
  $: equityAmount = property.data.sharePrice - loanAmount

  $: loanParams = {durationYears: 30, rate: selectedRate}
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
  $: taxBenefitTotal = taxBenefits.reduce((r,i) => r+i, 0)
  $: taxPositionTotal = taxPosition.amount * taxBenefits.length

  $: costsIndividualTotal = costsIndividual.map(i => i + loanPaymentYearly).reduce((r, i) => r + i, 0)
  $: adjustedGrowth = exitGrowth / property.data.numberShares * (1 - selectedLvr) - costsIndividualTotal + taxBenefitTotal

  $: costBase = costsIndividualInclLoan
  $: costsAggregated = aggregate((costsIndividualInclLoan))

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
            Disclaimer: The numbers below reflect historic growth rates and current interest rates and simulation scenarios and not to be taken as financial advice.
        </p>
        <p class="col-12 px text-center mo-text-left">
            If you are ready to take the next step to becoming a NestLover. <br>
            Let’s get you started….
        </p>
    </div>
    <div class="row  px mo-flex-col">
        <div class="col-4 off-1 pt9 mo-pt7 ">
            <div class="font-1_25vw mo-mb2">

                <h3 class="mb1 mo-mb2">Investor</h3>

                <div class="mo-mb2">
                    <h4 class="mt1 mb1">Taxable Income p.a.</h4>
                    <MoneyInput bind:value={yearlyIncome}/>
                </div>

                <div class="flex between middle my1 mo-mb2">
                    <h4 class="">Tax Position Total</h4>
                    <div class="money">{formatMoney(taxPositionTotal)}</div>
                </div>

                <div class="flex between middle my1 mo-mb2">
                    <h4 class="">Tax Benefits Total</h4>
                    <div class="money">{formatMoney(taxBenefitTotal)}</div>
                </div>

                <div class="flex between middle my1 mo-mb2">
                    <h4 class="">Historical 3y Growth</h4>
                    <div class="money">{formatMoney(sum(equity3y) - sum(costsIndividualInclLoan))}</div>
                </div>

                <div class="flex between middle my1 mo-mb2 italic">
                    <h4 class="">Historical 10y Growth</h4>
                    <div class="money">{formatMoney(sum(equity10y) - sum(costsIndividualInclLoan))}</div>
                </div>

            </div>
        </div>

        <div class="col-4 off-1 pt9 mo-pt7 ">
            <div class="font-1_25vw mo-mb2">
                <h3 class="mb1 mo-mb4">Investment</h3>

                <div class="flex between middle my1">
                    <h4 class="">Share Price</h4>
                    <div class="money">{formatMoney(property.data.sharePrice)}</div>
                </div>

                <div class="flex middle mt1">
                    <h5 class="mr2">LVR</h5>
                    <div class="f1">
                        <RangeSlider bind:values={selectedRangeLvr} />
                    </div>
                </div>

                <div class="flex between middle my1">
                    <h4 class=""></h4>
                    <div class="money">{formatPercent(selectedLvr)}</div>
                </div>

                <div class="flex between middle my1">
                    <h4 class="">Equity</h4>
                    <div class="money">{formatMoney(equityAmount)}</div>
                </div>

                <div class="flex between middle my1">
                    <h4 class="">Loan</h4>
                    <div class="money">{formatMoney(loanAmount)}</div>
                </div>

                <div class="flex middle mt1">
                    <h5 class="mr2">Loan Rate</h5>
                    <div class="f1">
                        <RangeSlider bind:values={selectedRangeRate} />
                    </div>
                </div>

                <div class="flex between middle my1">
                    <h4 class=""></h4>
                    <div class="money">{formatPercent(selectedRate)} p/a</div>
                </div>
            </div>

        </div>

    </div>
    <div class="row  mt4">
        <div class="col-10 off-1 px">
            <Graph data={{
              labelYears,
              costsAggregated,
              equity10y,
              equity3y
            }} />
        </div>
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
                        <strong>Aggregated Costs</strong>
                    </td>
                    {#each costsAggregated as val }
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
    <div class="mt4 mb4 px row">

        <p class="col-12 px text-center mo-text-left">
            Please refer to our Terms & Conditions for an explanation of data used and methodology.
        </p>
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

    .line, .money {
        font-weight: 500;
        font-size: clamp(16px, 1.65vw, 1.65vw);
    }

    .money {
        color: #8a082d;
    }
</style>
