<script lang="ts">
  import review1 from "../assets/review1.webp";
  import review2 from "../assets/review2.webp";
  import review3 from "../assets/review3.webp";
  import review4 from "../assets/review4.webp";
  import review5 from "../assets/review5.webp";
  import review6 from "../assets/review6.webp";
  import review7 from "../assets/review7.webp";
  import review8 from "../assets/review8.webp";
  import review9 from "../assets/review9.webp";
  import review10 from "../assets/review10.webp";
  import review11 from "../assets/review11.webp";
  import review12 from "../assets/review12.webp";
  import review13 from "../assets/review13.webp";
  import stars from "../assets/stars.webp";

  const reviews = [
    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
    review8,
    review9,
    review10,
    review11,
    review12,
    review13,
  ];
</script>

<svelte:head>
  <title>Reviews | JS Land Improvement</title>
</svelte:head>

<main>
  <div class="bg-base-200">
    <h3 class="text-center p-8 bg-primary text-primary-content">Our Reviews</h3>
    <div
      class="lg:grid lg:grid-cols-2 lg:gap-3 lg:p-10 2xl:grid-cols-3 place-items-center self-stretch"
    >
      {#each reviews as review}
        <div
          class="bg-transparent p-1 m-4 lg:m-0 md:bg-gray-50 h-full flex items-center justify-center rounded-lg"
        >
          <img
            class="object-contain w-full rounded-md"
            src="{review}"
            alt="review"
          />
        </div>
      {/each}
    </div>
  </div>
</main>
