<script>
    import {formatMoney,formatPercent} from "$lib/utils";

    export let label
    export let value
    export let money
    export let percent
    export let italic

</script>

<div class:italic>
    <span>{label}</span>
    <span class:money>
        {#if money }
            {formatMoney(value)}
        {:else if percent }
            {formatPercent(value)}
        {:else}
            {value}
        {/if}
    </span>
</div>

<style>

    div {
        line-height: 3vw;
    }

    span {
        margin-right: 1em;
        display: inline-block;
        font-size: .8em;
        color: rgba(0,0,0,.4);
    }

    span.money {
	    color: orangered!important
    }

    span:first-child {
	    width: 16vw;
    }

    span:nth-child(2) {
        font-size: 1em;
        color: black;
    }

</style>
