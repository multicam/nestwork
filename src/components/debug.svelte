<div class="screen">
    <div class="row">
        {#each new Array(12) as i}
            <div data-label={i} class="col-1">
                <div class="inner"></div>
            </div>
        {/each}
    </div>
</div>

<style>
    .screen {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        user-select: none;
        pointer-events: none;
        padding-left: var(--padding-x);
        padding-right: var(--padding-x);
    }
    .row {
        height: 100vh;
    }

    .inner {
        height: 100vh;
        outline: 1px solid rgba(255, 0, 0, 0.66);
    }
</style>
