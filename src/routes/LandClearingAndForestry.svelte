<script>
  import clearingBobcat from "../assets/clearing-bobcat2.jpg";
  import { link } from "svelte-routing";
  import clearing1 from "../assets/clearing1.jpg";
  import gradingSunset from "../assets/gradingSunset.jpg";
  import landClearingAndForestry from "../assets/land-clearing-and-forestry-pic.jpg";
  import ServiceBanner from "../lib/ServiceBanner.svelte";
  import { Paths } from "../lib/constants";
  import ServiceSection from "../lib/ServiceSection.svelte";

  const applications = [
    "Lot Clearing",
    "Shelterbelt Removal",
    "Site Prep Clearing",
    "CRP Clearing",
  ];
</script>

<svelte:head>
  <title>{Paths.landClearingAndForestry.label} | JS Land Improvement</title>
</svelte:head>

<section class="text-center">
  <ServiceBanner
    src="{landClearingAndForestry}"
    label="{Paths.landClearingAndForestry.label}"
  />
  <ServiceSection
    imageSource="{gradingSunset}"
    imageLabel="{Paths.landClearingAndForestry.label}"
    subHeader="Land Clearing and Forestry"
    header="We'll take care of everything — mess & all"
    paragraph="Land Clearing is a labor intensive task that requires proper equipment
  and personnel. It is typically done in order to use land for a specific
  purpose such as farming, building development, or land management. Our
  experts at JS Land Improvement have you covered from to start to finish."
    bulletPoints="{applications}"
    right="{true}"
  />
  <ServiceSection
    imageSource="{gradingSunset}"
    imageLabel="{Paths.landClearingAndForestry.label}"
    subHeader="Land Clearing and Forestry"
    header="We'll take care of everything — mess & all"
    paragraph="Land Clearing is a labor intensive task that requires proper equipment
  and personnel. It is typically done in order to use land for a specific
  purpose such as farming, building development, or land management. Our
  experts at JS Land Improvement have you covered from to start to finish."
    bulletPoints="{applications}"
    right="{false}"
  />
</section>
