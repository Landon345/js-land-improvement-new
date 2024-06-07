<script>
  import gradingHome from "../assets/grading-home.webp";
  import excavatorWorking from "../assets/excavatorWorking.webp";
  import excavationAndGradingPic from "../assets/excavation-and-grading-pic.webp";
  import { Paths } from "../lib/constants";
  import ServiceBanner from "../lib/ServiceBanner.svelte";
  import ServiceSection from "../lib/ServiceSection.svelte";
  import gradingSunset from "../assets/gradingSunset.webp";

  const applications = [
    "Sloping",
    "Backfilling",
    "Gravel Driveways",
    "Fixing Drainage Issues",
  ];
  const professionalGrading = [
    "Solid foundations",
    "Expert excavation",
    "Any size project",
    "Lasting results",
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
    header="Grading and excavating done right, the first time, every time."
    paragraph="Our team at JS Land Improvement has all the skills and equipment
  necessary to perform any grading or excavating tasks. From driveways to
  yards and fields, we will ensure everything drains properly and
  withstands the test of time."
    bulletPoints="{applications}"
    right="{true}"
  />
  <ServiceSection
    imageSource="{gradingSunset}"
    imageLabel="{Paths.excavationAndGrading.label}"
    subHeader="Excavation & Grading"
    header="Where solid foundations meet lasting results"
    paragraph="At JS Land Improvement, we understand the importance 
    of a solid foundation. Our team of skilled professionals and 
    advanced equipment are equipped to handle any excavation and 
    grading project, big or small. Whether you need a new driveway, 
    a leveled yard, or extensive land preparation for construction, 
    we'll ensure proper drainage, stability, and a foundation built to last."
    bulletPoints="{professionalGrading}"
    right="{false}"
  />
</section>
