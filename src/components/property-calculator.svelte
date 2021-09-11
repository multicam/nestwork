<script>
    export let property
    const {log} = console, {stringify} = JSON

    import MoneyInput from './calculator/money-input.svelte'
</script>
<section>
    <div class="mt4 mb4 px row">
        <h2 class="col-12 normal mb0 text-center font-6vw">
            Ready to Invest
        </h2>
        <p class="col-12 text-center">
            If you are ready to take the next step to becoming a NestLover. <br>
            Let’s get you started….
        </p>
    </div>
    <div class="row  px mo-flex-col">
        <div class="col-4 off-1 pt9 mo-pt7 ">
            <h3 class="mb1">Yealy Income</h3>
            <MoneyInput class="pt7" value="130000"/>
<!--            <h5 class="book uc mo-font-0_77vw mo-normal">-->
<!--                Own-->
<!--            </h5>-->
<!--            <h3 class="mo-mt2 mo-mb2 mt2 mb2">-->
<!--                Exclusive <strong>Investment Co-ownership.</strong>-->
<!--            </h3>-->
        </div>
        <div class="col-4 off-1 pt9 mo-pt7 ">
            <div class="font-1_25vw mo-mb2">
<!--                <p>-->
<!--                    Our target areas for property acquisition are prestige holiday locations around Australia. We create-->
<!--                    specific purpose Trusts for each home with 5 or 6 shares. We then vet and fund our co-owners-->
<!--                    (NestLovers) into each shareholding. NestLovers have the advantage of diversifying their property-->
<!--                    holdings into the most sought after areas in Australia. <strong>You own, we handle all the details.-->
<!--                    So that you together with your co-owners will enjoy 100% ownership of the home.</strong> NestLove-->
<!--                    does not retain any shares.-->
<!--                </p>-->
            </div>
        </div>
    </div>
    <div class="pb4" />
    <div class="px">
        <pre>{stringify(property.calc,null,2)}</pre>
    </div>
</section>


