<script>
  import excavatorWorking from "../assets/excavatorWorking.webp";
  import landClearingAndForestry from "../assets/land-clearing-and-forestry-pic.webp";
  import ServiceBanner from "../lib/ServiceBanner.svelte";
  import { Paths } from "../lib/constants";
  import ServiceSection from "../lib/ServiceSection.svelte";
  import bobcatSunsetLifted from "../assets/bobcatSunsetLifted.webp";

  const applications = [
    "Forestry Mulching",
    "CRP Clearing",
    "Shelterbelt Cleanout",
    "Underbrush Clearing",
    "Utility Right of way clearing",
    "Lot Clearing",
    "Site Preparation",
  ];

  const benefits = [
    "Expert land clearing",
    "Specialized equipment",
    "Land ready for its next phase",
    "Free consultations",
  ];
</script>

<svelte:head>
  <title>{Paths.landClearingAndForestry.label} | JS Land Improvement</title>
</svelte:head>

<section>
  <ServiceBanner
    src="{landClearingAndForestry}"
    label="{Paths.landClearingAndForestry.label}"
  />
  <ServiceSection
    imageSource="{excavatorWorking}"
    imageLabel="{Paths.landClearingAndForestry.label}"
    subHeader="Land Clearing and Forestry"
    header="Unlocking the potential of your land"
    paragraph="Land Clearing is a labor intensive task that requires proper equipment
  and personnel. It is typically done in order to use land for a specific
  purpose such as farming, building development, or land management. Our
  experts at JS Land Improvement have you covered from to start to finish."
    bulletPoints="{applications}"
    right="{true}"
  />
  <ServiceSection
    imageSource="{bobcatSunsetLifted}"
    imageLabel="{Paths.landClearingAndForestry.label}"
    subHeader="Land Clearing and Forestry"
    header="Clearing the way for your vision"
    paragraph="At JS Land Improvement, we have the expertise and equipment 
    to handle large-scale land clearing projects efficiently and safely. 
    We utilize specialized machinery to remove trees and brush, leaving your 
    land ready for its next phase."
    bulletPoints="{benefits}"
    right="{false}"
  />
</section>
