<script>
  import gradingHome from "../assets/grading-home.webp";
  import { link } from "svelte-routing";
  import excavatorWorking from "../assets/excavatorWorking.webp";
  import excavationAndGradingPic from "../assets/excavation-and-grading-pic.webp";
  import { Paths } from "../lib/constants";
  import ServiceBanner from "../lib/ServiceBanner.svelte";
  import ServiceSection from "../lib/ServiceSection.svelte";

  const applications = [
    "Sloping",
    "Backfilling",
    "Gravel Driveways",
    "Fixing Drainage Issues",
  ];
</script>

<svelte:head>
  <title>{Paths.excavationAndGrading.label} | JS Land Improvement</title>
</svelte:head>

<section class="">
  <ServiceBanner
    src="{excavationAndGradingPic}"
    label="{Paths.excavationAndGrading.label}"
  />
  <ServiceSection
    imageSource="{excavatorWorking}"
    imageLabel="{Paths.excavationAndGrading.label}"
    subHeader="Excavation & Grading"
    header="We'll take care of everything — mess & all"
    paragraph="Our team at JS Land Improvement has all the skills and equipment
  necessary to perform any grading or excavating tasks. From driveways to
  yards and fields, we will ensure everything drains properly and
  withstands the test of time."
    bulletPoints="{applications}"
    right="{true}"
  />
  <ServiceSection
    imageSource="{excavatorWorking}"
    imageLabel="{Paths.excavationAndGrading.label}"
    subHeader="Excavation & Grading"
    header="We'll take care of everything — mess & all"
    paragraph="Our team at JS Land Improvement has all the skills and equipment
  necessary to perform any grading or excavating tasks. From driveways to
  yards and fields, we will ensure everything drains properly and
  withstands the test of time."
    bulletPoints="{applications}"
    right="{false}"
  />
</section>
