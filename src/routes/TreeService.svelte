<script>
  import treeBranchesGone from "../assets/treeBranchesGone.webp";
  import ServiceBanner from "../lib/ServiceBanner.svelte";
  import largeStump from "../assets/large-stump.webp";
  import { Paths } from "../lib/constants";
  import ServiceSection from "../lib/ServiceSection.svelte";
  import bobcatLog from "../assets/bobcat-log.webp";

  const applications = [
    "Tree Removal",
    "Tree Trimming",
    "Storm Cleanup",
    "Stump Grinding",
  ];

  const benefits = [
    "promote healthy growth",
    "enhance curb appeal",
    "prevent potential hazards",
  ];
</script>

<svelte:head>
  <title>{Paths.treeService.label} | JS Land Improvement</title>
</svelte:head>

<section class="">
  <ServiceBanner src="{largeStump}" label="{Paths.treeService.label}" />
  <ServiceSection
    imageSource="{treeBranchesGone}"
    imageLabel="{Paths.treeService.label}"
    subHeader="Tree Service"
    header="Problematic trees safely removed"
    paragraph="Maintaining and removing trees is a dangerous yet important task to do
  as it ensures a safe and aesthetic looking property. Our team of experts
  will ensure all your tree service needs are met including complete
  cleanup."
    bulletPoints="{applications}"
    right="{true}"
  />
  <ServiceSection
    imageSource="{bobcatLog}"
    imageLabel="{Paths.treeService.label}"
    subHeader="Tree Service"
    header="Expert tree care for healthy, beautiful landscapes"
    paragraph="Our experienced team of arborists uses the latest techniques 
    and equipment to safely and effectively prune your trees, 
    promoting healthy growth, enhancing curb appeal, and preventing 
    potential hazards. We offer a range of services, from routine 
    maintenance to specialized trimming for diseased or overgrown trees."
    bulletPoints="{benefits}"
    right="{false}"
  />
</section>
