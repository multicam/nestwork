<script>
    import properties from '../../data/properties.json'
    const {stringify} = JSON
</script>
<style>
    pre {
        color: orangered
    }
</style>
<div class="px py">
    <pre>{stringify(properties,null,2)}</pre>
</div>
