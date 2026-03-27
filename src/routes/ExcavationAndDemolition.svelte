<script>
  import image9 from "../assets/Image_9.webp";
  import image10 from "../assets/Image_10.webp";
  import demolitionLoading from "../assets/demolitionLoading.webp";
  import { Paths } from "../lib/constants";
  import ServiceBanner from "../lib/ServiceBanner.svelte";
  import ServiceSection from "../lib/ServiceSection.svelte";

  const applications = [
    "Approach And Culvert Install",
    "Foundations",
    "Driveways",
    "Building Demolition",
    "Pond Install",
    "General Site Prep",
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
    imageSource="{image9}"
    imageLabel="{Paths.excavationAndDemolition.label}"
    subHeader="Excavation & Demolition"
    header="Grading and demolition done right, the first time, every time."
    paragraph="JS Land Improvement provides professional excavation and demolition services throughout Fargo, ND and the surrounding area. From site preparation and foundation excavation to building and concrete demolition, our experienced team has the skills and heavy equipment to handle any job. We deliver precise, efficient results on time and on budget."
    bulletPoints="{applications}"
    right="{true}"
  />
  <ServiceSection
    imageSource="{image10}"
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
