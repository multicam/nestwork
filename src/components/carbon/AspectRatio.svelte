<script>

    export let ratio = "16x9";
</script>

<div
    class:bx--aspect-ratio="{true}"
    class:bx--aspect-ratio--2x1="{ratio === '2x1'}"
    class:bx--aspect-ratio--16x9="{ratio === '16x9'}"
    class:bx--aspect-ratio--4x3="{ratio === '4x3'}"
    class:bx--aspect-ratio--1x1="{ratio === '1x1'}"
    class:bx--aspect-ratio--2x3="{ratio === '2x3'}"
    class:bx--aspect-ratio--3x4="{ratio === '3x4'}"
    class:bx--aspect-ratio--3x2="{ratio === '3x2'}"
    class:bx--aspect-ratio--9x16="{ratio === '9x16'}"
    class:bx--aspect-ratio--1x2="{ratio === '1x2'}"
    {...$$restProps}
>
    <div class:bx--aspect-ratio--object="{true}">
        <slot />
    </div>
</div>

<style>
    .bx--aspect-ratio {
        position: relative;
    }

    .bx--aspect-ratio::before {
        width: 1px;
        height: 0;
        margin-left: -1px;
        content: '';
        float: left;
    }

    .bx--aspect-ratio::after {
        display: table;
        clear: both;
        content: '';
    }

    .bx--aspect-ratio--16x9::before {
        padding-top: 56.25%;
    }

    .bx--aspect-ratio--9x16::before {
        padding-top: 177.77778%;
    }

    .bx--aspect-ratio--2x1::before {
        padding-top: 50%;
    }

    .bx--aspect-ratio--1x2::before {
        padding-top: 200%;
    }

    .bx--aspect-ratio--4x3::before {
        padding-top: 75%;
    }

    .bx--aspect-ratio--3x4::before {
        padding-top: 133.33333%;
    }

    .bx--aspect-ratio--3x2::before {
        padding-top: 66.66667%;
    }

    .bx--aspect-ratio--2x3::before {
        padding-top: 150%;
    }

    .bx--aspect-ratio--1x1::before {
        padding-top: 100%;
    }

    .bx--aspect-ratio--object {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>