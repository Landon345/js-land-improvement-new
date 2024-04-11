<script>
  import treeBranchesGone from "../assets/treeBranchesGone.webp";
  import treeServicePic from "../assets/tree-service-pic.webp";
  import ServiceBanner from "../lib/ServiceBanner.svelte";
  import { Paths } from "../lib/constants";
  import ServiceSection from "../lib/ServiceSection.svelte";

  const applications = [
    "Tree Trimming",
    "Individual Tree Removal",
    "Dead Tree Removal",
    "Damaged Tree Removal",
    "Tree Planting",
  ];
</script>

<svelte:head>
  <title>{Paths.treeService.label} | JS Land Improvement</title>
</svelte:head>

<section class="">
  <ServiceBanner src="{treeServicePic}" label="{Paths.treeService.label}" />
  <ServiceSection
    imageSource="{treeBranchesGone}"
    imageLabel="{Paths.treeService.label}"
    subHeader="Tree Service"
    header="We'll take care of everything — mess & all"
    paragraph="Maintaining and removing trees is a dangerous yet important task to do
  as it ensures a safe and aesthetic looking property. Our team of experts
  will ensure all your tree service needs are met including complete
  cleanup."
    bulletPoints="{applications}"
    right="{true}"
  />
  <ServiceSection
    imageSource="{treeBranchesGone}"
    imageLabel="{Paths.treeService.label}"
    subHeader="Tree Service"
    header="We'll take care of everything — mess & all"
    paragraph="Maintaining and removing trees is a dangerous yet important task to do
  as it ensures a safe and aesthetic looking property. Our team of experts
  will ensure all your tree service needs are met including complete
  cleanup."
    bulletPoints="{applications}"
    right="{false}"
  />
</section>
