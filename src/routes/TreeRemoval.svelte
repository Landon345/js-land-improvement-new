<script>
  import treeBranchesGone from "../assets/treeBranchesGone.webp";
  import ServiceBanner from "../lib/ServiceBanner.svelte";
  import image6 from "../assets/Image_6.webp";
  import { Paths } from "../lib/constants";
  import ServiceSection from "../lib/ServiceSection.svelte";
  import bobcatLog from "../assets/bobcat-log.webp";

  const applications = [
    "Tree Removal",
    "Storm Cleanup",
    "Stump Grinding",
  ];

  const benefits = [
    "Prevent Potential Hazards",
    "Make Room for New Growth",
    "Prevent the Spread of Disease and Insects",
  ];
</script>

<svelte:head>
  <title>{Paths.treeRemoval.label} | JS Land Improvement</title>
</svelte:head>

<section class="">
  <ServiceBanner src="{image6}" label="{Paths.treeRemoval.label}" />
  <ServiceSection
    imageSource="{treeBranchesGone}"
    imageLabel="{Paths.treeRemoval.label}"
    subHeader="Tree Removal"
    header="Problematic Trees Safely Removed"
    paragraph="Protecting your property starts with safe, professional tree removal. JS Land Improvement specializes in removing hazardous, storm-damaged, and unwanted trees for homeowners and contractors in Fargo, North Dakota and surrounding areas. Our experienced crew gets the job done safely, efficiently, and cleanly - every time."
    bulletPoints="{applications}"
    right="{true}"
  />
  <ServiceSection
    imageSource="{bobcatLog}"
    imageLabel="{Paths.treeRemoval.label}"
    subHeader="Tree Removal"
    header="Expert Tree Removal Practices"
    paragraph="Our experienced team uses modern equipment and techniques to safely remove trees of all shapes and sizes. Our number one priority is ensuring we leave your property better than we found it. This requires meticulous cleanup, careful equipment operation, and diligent material handling from start to finish."
    bulletPoints="{benefits}"
    right="{false}"
  />
</section>
