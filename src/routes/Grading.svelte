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

<section class="applications-section">
  <div class="services-header">
    <div class="service-header-action">
      <h1>Grading and Excavating</h1>
      <a class="quote-button" href="/contact-us" use:link>Free Quote</a>
    </div>
    <img src="{gradingHome}" alt="gradingHome" class="services-img" />
  </div>

  <div class="applications-text-container">
    <h3 class="applications">Applications</h3>
  </div>
  <div class="application-cards-container">
    {#each applications as application}
      <div class="card card-app-text">
        <p>
          {application}
        </p>
      </div>
    {/each}
  </div>
</section>
<section class="more-info-service-section">
  <div class="more-info-header-and-para">
    <h3>Grading and Excavating</h3>
    <div class="more-info-service-para-container">
      <span class="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 448 512"
          ><path
            fill="#000"
            d="M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5c0 12.8 10.3 23.1 23.1 23.1H104l-73.4 73.4c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6H80L5.4 409.5c-3.5 4.2-5.4 9.5-5.4 15c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32v-32h168.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"
          ></path></svg
        >
      </span>
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
