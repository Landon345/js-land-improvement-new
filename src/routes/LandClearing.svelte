<script>
  import clearingBobcat from "../assets/clearing-bobcat2.jpg";
  import { link } from "svelte-routing";
  import clearing1 from "../assets/clearing1.jpg";
  import clearing2 from "../assets/clearing2.jpg";

  const applications = [
    "Lot Clearing",
    "Shelterbelt Removal",
    "Site Prep Clearing",
    "Right of Way Clearing",
    "CRP Clearing",
    "And More!",
  ];
</script>

<svelte:head>
  <title>Land Clearing | JS Land Improvement</title>
</svelte:head>

<section class="text-center p-4">
  <div class="">
    <div class="">
      <h1>Land Clearing</h1>
    </div>
    <img src="{clearingBobcat}" alt="clearingBobcat" class="" />
  </div>

  <div class="">
    <h3 class="">Applications</h3>
  </div>
  <div class="">
    {#each applications as application}
      <div class="p-4 bg-base-200 m-4 rounded-md">
        <p>
          {application}
        </p>
      </div>
    {/each}
  </div>
</section>
<section class="text-center p-4">
  <div class="">
    <h3>Land Clearing</h3>
    <div class="">
      <p>
        Land Clearing is a labor intensive task that requires proper equipment
        and personnel. It is typically done in order to use land for a specific
        purpose such as farming, building development, or land management. Our
        experts at JS Land Improvement have you covered from to start to finish.
      </p>
    </div>
  </div>

  <div class="">
    <img src="{clearing1}" alt="clearing1" class="" />
    <img src="{clearing2}" alt="clearing2" class="" />
  </div>
</section>
