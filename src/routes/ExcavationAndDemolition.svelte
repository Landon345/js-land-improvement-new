<script>
  import excavatorWorking2 from "../assets/excavatorWorking2.webp";
  import neighborhoodGradingGrass from "../assets/neighborhood-grading-grass.webp";
  import demolitionLoading from "../assets/demolitionLoading.webp";
  import { Paths } from "../lib/constants";
  import ServiceBanner from "../lib/ServiceBanner.svelte";
  import ServiceSection from "../lib/ServiceSection.svelte";

  const applications = [
    "Ditch and culvert install",
    "Foundations",
    "Rough Grading",
    "Finish Grading",
    "Gravel Driveways",
    "Building Demolition",
    "Concrete Demolition",
  ];
  const professionalGrading = [
    "Solid foundations",
    "Expert excavation",
    "Any size project",
    "Lasting results",
  ];
</script>

<svelte:head>
  <title>{Paths.excavationAndDemolition.label} | JS Land Improvement</title>
</svelte:head>

<section class="">
  <ServiceBanner
    src="{demolitionLoading}"
    label="{Paths.excavationAndDemolition.label}"
  />
  <ServiceSection
    imageSource="{excavatorWorking2}"
    imageLabel="{Paths.excavationAndDemolition.label}"
    subHeader="Excavation & Demolition"
    header="Grading and demolition done right, the first time, every time."
    paragraph="Our team at JS Land Improvement has all the skills and equipment 
    necessary to perform any excavation or demolition tasks. From site prep to 
    demolishing old structures, we will ensure everything is done right."
    bulletPoints="{applications}"
    right="{true}"
  />
  <ServiceSection
    imageSource="{neighborhoodGradingGrass}"
    imageLabel="{Paths.excavationAndDemolition.label}"
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
