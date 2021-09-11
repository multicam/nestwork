<script>
    import {calculateLoan, calculateTaxes, compound} from "$lib/financials";
    import {formatMoney} from "$lib/utils";

    export let property
    const {log} = console, {stringify} = JSON

    import MoneyInput from './calculator/money-input.svelte'
    import LvrInput from './calculator/lvr-input.svelte'

    let exitYears = 7

    let yearlyIncome = 150000
    $: taxPosition = calculateTaxes(yearlyIncome)

    let selectedLvr = .4
    $: loanAmount = property.data.sharePrice * selectedLvr
    $: equityAmount = property.data.sharePrice - loanAmount

    $: loanParams = { durationYears: 30, rate: .065 }
    $: loanPaymentYearly = calculateLoan(loanAmount,loanParams)
    $: loanPaymentMonthly = loanPaymentYearly / 12

    $: exitSale = compound(exitYears,property.data.purchasePrice,property.stats.average_10y_annual).pop()
    $: exitGrowth = exitSale - property.data.sharePrice * property.data.numberShares
    $: equityGrowth = exitGrowth /  property.data.numberShares * (1-selectedLvr)

    $: labelYears = new Array(exitYears).fill(new Date().getFullYear()).map((i, n) => i + n)

    $: costsIndividual = property.data.costs.map( i => i / property.data.numberShares )
    $: costsIndividualInclLoan = costsIndividual.map(i => i + loanPaymentYearly)

    $: adjustedIncome = costsIndividual.map(i => yearlyIncome - i - loanPaymentYearly)
    $: adjustedTaxPosition = costsIndividual.map(i => calculateTaxes(yearlyIncome - i - loanPaymentYearly)?.amount)
    $: taxBenefits = adjustedTaxPosition.map(i => taxPosition.amount - i )
    $: taxBenefitTotal = taxBenefits.reduce((r,i) => r+i, 0)

    $: costsIndividualTotal = costsIndividual.map(i => i + loanPaymentYearly).reduce((r,i) => r + i,0)
    $: adjustedGrowth = exitGrowth/property.data.numberShares * (1-selectedLvr) - costsIndividualTotal + taxBenefitTotal

</script>
<style>
    .money {
        color: #8a082d;
        font-weight: 500;
        font-size: 1.5vw;
    }
</style>
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
                <MoneyInput bind:value={yearlyIncome} />

                <h4 class="mt2 mb1">Tax Position per Year</h4>
                <div class="money">{formatMoney(taxPosition.amount)}</div>

                <h4 class="mt2 mb1">Growth</h4>

                <h5 class="mt1 mb1">Equity Growth</h5>
                <div class="money">{formatMoney(equityGrowth)}</div>

                <h5 class="mt1 mb1">Tax Benefits</h5>
                <div class="money">{formatMoney(taxBenefitTotal)}</div>

                <h5 class="mt1 mb1">Total Costs</h5>
                <div class="money">{formatMoney(costsIndividualTotal)}</div>

                <h5 class="mt1 mb1">Adjusted Growth</h5>
                <div class="money">{formatMoney(adjustedGrowth)}</div>
            </div>
        </div>
        <div class="col-4 off-1 pt9 mo-pt7 ">
            <div class="font-1_25vw mo-mb2">
                <h3 class="mb1">Investment</h3>

                <h4 class="mt1 mb1">Share Price</h4>
                <div class="money">{formatMoney(property.data.sharePrice)}</div>

                <h4 class="mt2 mb1">Loan & Equity</h4>

                <h5 class="mt1 mb1">LVR</h5>
                <LvrInput bind:selectedLvr />

                <h5 class="mt1 mb1">Loan Amount</h5>
                <div class="money">{formatMoney(loanAmount)}</div>

                <h5 class="mt1 mb1">Equity</h5>
                <div class="money">{formatMoney(equityAmount)}</div>

                <h4 class="mt2 mb1">Growth after {exitYears} years</h4>

                <h5 class="mt1 mb1">Property Value</h5>
                <div class="money">{formatMoney(exitSale)}</div>

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
                </table>

            </div>
        </div>
    </div>
    <div class="pb4" />
    <div class="px">
        <pre>{stringify(property.data,null,2)}</pre>
    </div>
</section>


