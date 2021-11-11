<script>

  export let value;

  function int2str(i) {
    return i ? i.toLocaleString() : 0
  }

  function str2int(s) {
    return parseInt(s.replace(/,/g, ""));
  }

  let internal = int2str(value);

  function refresh() {
    value = str2int(internal);
    internal = int2str(value);
  }

  refresh()
</script>

<input  {...$$restProps} class='input' type="text" bind:value={ internal } on:input={ refresh }>
