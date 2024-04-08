<script>
  import brushClearingBobcat from "../assets/brush-clearing-bobcat.jpg";
  import mulchingWinter from "../assets/mulching-winter.jpg";
  import { link } from "svelte-routing";

  const applications = [
    "crp reclamation",
    "Farmyard Clearing",
    "Roadside Clearing",
    "Ditch Clearing",
    "Pasture Reclamation",
    "Food Plot Clearing",
    "Trail Making",
    "And More!",
    "Shelterbelt Underbrush Clearing",
    "Shooting lane Clearing",
    "Utility right of way clearing",
  ];
</script>

<svelte:head>
  <title>Forest Mulching | JS Land Improvement</title>
</svelte:head>

<section class="text-center p-4">
  <div class="">
    <div class="">
      <h1>Forestry Mulching</h1>
    </div>
    <img src="{brushClearingBobcat}" alt="brushClearingBobcat" class="" />
  </div>

  <div class="">
    <h3 class="text-3xl font-bold m-3">Applications</h3>
  </div>
  <div class="">
    {#each applications as application}
      <div class="bg-base-200 m-2 p-5 rounded-md">
        <p>
          {application}
        </p>
      </div>
    {/each}
  </div>
</section>
<section class="text-center p-4">
  <div class="">
    <h3 class="text-3xl font-bold m-3">Forestry Mulching</h3>
    <div class="mb-6">
      <p>
        Forestry mulching is an efficient method of clearing and managing
        vegetation. It also helps to control the spread of invasive species and
        restore the health of the ecosystem. Our forestry drum, disc, and rotary
        mulchers allow us to tackle any brush or tree clearing project for you.
      </p>
    </div>
  </div>

  <img src="{mulchingWinter}" alt="mulchingWinter" class="more-info-image" />
</section>
