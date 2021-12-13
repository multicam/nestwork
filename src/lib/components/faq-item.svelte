<script>
    export let q, a
    let open = false
    import {slide} from 'svelte/transition'
</script>
<div class="flex between py1  mo-pt2 mo-pb1 mo-mb4 b-bot-grey50"
     style="cursor:pointer" show>
    <h5 class="mb0">{q}</h5>
    <h5 class="mb0">+</h5></div>
<div in:slide out:slide>
    {#if open}
        <div><p class="pt1 ">{a}</p></div>
    {/if}
</div>