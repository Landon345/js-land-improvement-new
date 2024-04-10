<script>
  export let src;
  export let label;
</script>

<div class="relative">
  <img
    {src}
    alt="{label}"
    class="relative w-full m-0 top-0 h-[40vh] md:h-[60vh] object-cover"
  />
  <div class="absolute top-0 w-full h-[40vh] md:h-[60vh] light-radial"></div>
  <div class="absolute bottom-0 bg-base-100 flex">
    <div class="bg-primary flex w-[100px] items-center justify-center">
      <i class="ri-arrow-right-double-fill text-6xl lg:text-8xl"></i>
    </div>
    <h1 class="px-10 text-4xl lg:text-6xl uppercase py-4">{label}</h1>
  </div>
</div>
