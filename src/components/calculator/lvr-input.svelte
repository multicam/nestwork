<script>
    import Toggle from './toggle.svelte'
    import {formatPercentRound} from "$lib/utils";

    export let selectedLvr
    const lvrPresets = [ 0, .10, .20, .30, .40, .50, .60, .70, .80 ]

</script>
<div class="flex">
    {#each lvrPresets as lvr }
        <div style="padding:.25vw">
            <Toggle class='col' type='radio' bind:group={selectedLvr} value={lvr} let:checked={checked}>
                <span class:active={checked}>{formatPercentRound(lvr)}</span>
            </Toggle>
        </div>
    {/each}
</div>
<style>
    .active {
        font-weight: bold;
        text-decoration: underline;
    }
</style>