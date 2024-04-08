<script>
  import gradingHome from "../assets/grading-home.jpg";
  import { link } from "svelte-routing";
  import neighborhoodGrading from "../assets/neighborhood-grading.jpg";

  const applications = [
    "Sloping",
    "Crushed Asphalt Driveways",
    "Crushed Concrete Driveways",
    "And More!",
    "Rough Grading Yard",
    "Backfilling",
    "Gravel Driveways",
    "Finish Grading Yard",
    "Fixing Drainage Issues",
    "Excavation",
  ];
</script>

<svelte:head>
  <title>Grading | JS Land Improvement</title>
</svelte:head>

<section class="text-center p-4">
  <div class="">
    <div class="">
      <h1>Grading and Excavating</h1>
    </div>
    <img src="{gradingHome}" alt="gradingHome" class="" />
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
    <h3>Grading and Excavating</h3>
    <div class="">
      <p>
        Our team at JS Land Improvement has all the skills and equipment
        necessary to perform any grading or excavating tasks. From driveways to
        yards and fields, we will ensure everything drains properly and
        withstands the test of time.
      </p>
    </div>
  </div>

  <img
    src="{neighborhoodGrading}"
    alt="neighborhoodGrading"
    class="more-info-image"
  />
</section>
