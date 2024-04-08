<script lang="ts">
  import Bobcat from "../assets/bobcat.jpg";
  import jsTeamPic from "../assets/js-team-pic.jpg";
  import review1 from "../assets/review1.png";
  import review2 from "../assets/review2.png";
  import review3 from "../assets/review3.png";
  import review4 from "../assets/review4.png";
  import review5 from "../assets/review5.png";
  import review6 from "../assets/review6.png";
  import review7 from "../assets/review7.png";
  import review8 from "../assets/review8.png";
  import review9 from "../assets/review9.png";
  import review10 from "../assets/review10.png";
  import review11 from "../assets/review11.png";
  import review12 from "../assets/review12.png";
  import review13 from "../assets/review13.png";
  import stars from "../assets/stars.png";

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
  <title>About Us | JS Land Improvement</title>
</svelte:head>

<main class="">
  <div class="bg-base-200">
    <h1 class="text-center my-0 py-8 bg-primary text-primary-content">
      About us
    </h1>
    <div class="md:flex md:flex-row-reverse">
      <div class="mx-4 md:w-1/2 md:mx-10">
        <h3 class="text-center mt-0 pt-10">Our Story</h3>
        <p class="my-3 indent-8">
          During Jonas's sophomore year of college in 2021 he decided to form
          his own company "JS Land Improvement" with the help of his father
          Scott. Jonas started out renting and borrowing equipment from friends
          and family to complete projects related to brush clearing and forestry
          mulching. Since the very beginning, client satisfaction and doing
          quality work was the most important metric.
        </p>
        <p class="my-3 indent-8">
          Over the past 3 years, JS has grown into a more diverse company
          serving North Dakota and Minnesota offering land clearing, forestry,
          tree, excavation, and demolition services. JS Land Improvement
          currently has six team members and is growing at a rapid pace.
        </p>
      </div>
      <img
        class="object-cover min-h-[530px] max-h-[600px] md:w-1/2"
        src="{jsTeamPic}"
        alt="js-team-pic"
      />
    </div>
    <div class="bg-base-100 md:flex">
      <div class="mx-4 md:w-1/2 md:mx-10">
        <h3 class="text-center mt-0 pt-10">Our Mission</h3>
        <p class="my-3 indent-8">
          Our mission is to improve the value of our clients' land while
          creating an amazing experience. We prioritize quality over quantity
          and are committed to achieving excellence. Whether we are working for
          you or with you, we promise to treat you as a human and not a number.
        </p>
      </div>
      <img src="{Bobcat}" alt="bobcat" class="md:w-1/2" />
    </div>
  </div>
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
