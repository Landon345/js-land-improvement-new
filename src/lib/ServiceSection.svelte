<script>
  export let imageSource;
  export let imageLabel;
  export let right;
  export let subHeader = "";
  export let header = "";
  export let paragraph = "";
  export let bulletPoints = [];
</script>

<div class="md:grid md:grid-cols-2 md:grid-rows-1">
  <div class="relative" style="{right ? 'order: 1' : 'order: -1'}">
    <img
      class="w-full h-full object-cover rounded-none lg:h-[70vh]"
      src="{imageSource}"
      alt="{imageLabel}"
    />
    <a
      class="btn btn-primary rounded-none absolute bottom-0 right-0 bg-primary text-primary-content text-sm h-[100px] px-10 flex items-center font-bold uppercase"
      href="/about-us"
    >
      Learn more <i class="ri-arrow-right-circle-line text-xl ml-2"></i>
    </a>
  </div>
  <div class="p-[50px] h-min">
    <p class="w-max text-primary font-bold uppercase">{subHeader}</p>
    <h1 class="text-3xl mt-3 pb-8 uppercase lg:text-4xl">
      {header}
    </h1>
    <p class="pb-10">
      {paragraph}
    </p>
    <div class="uppercase">
      {#each bulletPoints as bulletPoint}
        <div class="flex items-center">
          <i class="ri-arrow-right-s-line text-primary mr-2 text-2xl"></i>
          <h3 class="font-bold my-2 text-2xl">{bulletPoint}</h3>
        </div>
      {/each}
    </div>
  </div>
</div>
