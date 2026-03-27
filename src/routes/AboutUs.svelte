<script lang="ts">
  import image11 from "../assets/Image_11.webp";
  import Reviews from "./Reviews.svelte";
</script>

<svelte:head>
  <title>About Us | JS Land Improvement</title>
</svelte:head>

<main class="">
  <div class="bg-base-100">
    <h1 class="text-center my-0 py-8 bg-primary text-primary-content">
      About us
    </h1>
    <div class="md:flex md:flex-row-reverse">
      <div class="mx-4 md:w-1/2 md:mx-10">
        <h3 class="text-center mt-0 pt-10">Our Story</h3>
        <p class="my-3 indent-8">
          JS Land Improvement started in 2021 when Jonas Geston founded it
          during his Sophomore year of college. In the early days, Jonas rented
          and borrowed equipment to handle projects involving brush mowing,
          forestry mulching, and some tree removals. Over the years, JS has
          slowly grown by purchasing more equipment, hiring new employees, and
          taking on larger land clearing and excavation projects. Since the very
          beginning, client satisfaction and quality work have been the most
          important metrics for JS Land Improvement.
        </p>
        <p class="my-3 indent-8">
          JS Land Improvement services within a 2 hour radius of Fargo, ND and
          occasionally travels further for large land clearing projects. They
          primarily focus on shelterbelt removals, shelterbelt cleanouts, CRP
          clearing, lot clearing, tree removals, excavation, site prep, and
          demolition projects.
        </p>
        <h3 class="text-center pt-6">Our Mission</h3>
        <p class="my-3 indent-8">
          At JS Land Improvement, our mission is simple: treat every property
          like it's our own. We take pride in our work, listen to your needs,
          and won't leave until you're completely satisfied with the results.
        </p>
      </div>
      <img
        class="object-cover min-h-[530px] max-h-[700px] md:w-1/2"
        src="{image11}"
        alt="js-land-improvement-team"
      />
    </div>
  </div>
  <Reviews />
</main>
