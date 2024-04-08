<script>
  import { link } from "svelte-routing";

  export let imgsrc;
  export let imgalt;
  export let header;
  export let para;
  export let linkto;
</script>

<a use:link href="{linkto}">
  <img
    src="{imgsrc}"
    alt="{imgalt}"
    class="w-full object-cover"
    loading="lazy"
  />
  <h4>{header}</h4>
  <p>{para}</p>
</a>
