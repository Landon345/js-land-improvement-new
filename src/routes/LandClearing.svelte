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

<section class="applications-section">
  <div class="services-header">
    <div class="service-header-action">
      <h1>Land Clearing</h1>
      <a class="quote-button" href="/contact-us" use:link>Free Quote</a>
    </div>
    <img src="{clearingBobcat}" alt="clearingBobcat" class="services-img" />
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
    <h3>Land Clearing</h3>
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
        Land Clearing is a labor intensive task that requires proper equipment
        and personnel. It is typically done in order to use land for a specific
        purpose such as farming, building development, or land management. Our
        experts at JS Land Improvement have you covered from to start to finish.
      </p>
    </div>
  </div>

  <div class="more-info-img-container">
    <img src="{clearing1}" alt="clearing1" class="more-info-image" />
    <img src="{clearing2}" alt="clearing2" class="more-info-image" />
  </div>
</section>
