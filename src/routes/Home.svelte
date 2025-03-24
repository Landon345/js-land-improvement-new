<script lang="ts">
  import jonasStump from "../assets/jonasStump.webp";
  import jsTeamPic from "../assets/js-team-pic.webp";
  import demolitionLoading from "../assets/demolitionLoading.webp";
  import pathCleared from "../assets/path-cleared.webp";
  import manNearStump from "../assets/man-near-stump.webp";
  import ServiceSection from "../lib/ServiceSection.svelte";
  import Services from "./Services.svelte";

  interface ImgObj {
    imgsrc: string;
    imgalt: string;
    header: string;
    para: string;
    linkto: string;
  }
  const imgObjs: ImgObj[] = [
    {
      imgsrc: manNearStump,
      imgalt: "treeService",
      header: "Tree Service",
      para: "From felling large trees to maintaining your existing ones, we have you covered",
      linkto: "/tree-service",
    },
    {
      imgsrc: pathCleared,
      imgalt: "landClearingAndForestry",
      header: "Land Clearing And Forestry",
      para: "We can clear any size piece of land and suite it to your needs",
      linkto: "/land-clearing-and-forestry",
    },
    {
      imgsrc: demolitionLoading,
      imgalt: "excavationAndDemolition",
      header: "Excavation and Demolition",
      para: "We'll take care of all your excavation and demolition needs",
      linkto: "/excavation-and-demolition",
    },
  ];
  const gettingStartedSteps = [
    "Quote Request",
    "On-site Meeting",
    "Quote Provided",
    "Quote Approval",
    "Scheduling",
    "Confirmation",
    "Execution",
    "Invoicing",
  ];
</script>

<svelte:head>
  <title>Home | JS Land Improvement</title>
</svelte:head>

<div class="hidden lg:block relative pb-[56.25%] h-0">
  <iframe
    class="intro-video-embed w-full h-full"
    id="introVideo"
    width="640px"
    height="400px"
    src="https://www.youtube.com/embed/oZnHJS35pic?autoplay=1&controls=0&playlist=oZnHJS35pic&loop=1&disablekb=1&mute=1"
    title="JS Land Improvement Intro Video"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
  <div class="absolute top-0 w-full h-full radial"></div>
  <div
    class="absolute top-[10vh] md:top-[25vh] w-full lg:top-[35vh] xl:top-[50vh]"
  >
    <div class="w-3/4 m-auto md:w-1/2">
      <p class="text-base lg:text-lg uppercase text-primary font-bold">
        We're here to serve you <i class="ri-arrow-down-s-line text-primary"
        ></i>
      </p>
      <h1
        class="text-lg md:text-3xl lg:text-4xl uppercase text-primary-content"
      >
        Creating an amazing client experience from start to finish
      </h1>
    </div>
  </div>
</div>

<section class="grid grid-cols-2 text-primary-content">
  <p class="bg-neutral text-base-100 text-center p-6 font-bold">
    Learn how we can improve the value and usability of your land
  </p>
  <a
    class="btn btn-primary rounded-none text-lg w-full h-full md:w-3/4"
    href="/services"
  >
    VIEW SERVICES
    <i class="ri-arrow-right-circle-line text-xl ml-2"></i>
  </a>
</section>
<ServiceSection
  imageSource="{jsTeamPic}"
  imageLabel="js-team-pic"
  subHeader="Make it great"
  header="Working Together for Exceptional Results"
  paragraph="Our mission at JS Land Improvement is to improve the value of our client's land while creating an amazing experience. We prioritize quality over quantity and are committed to achieving excellence. Wether we are working for you or with you, we promise to treat you as a human and not a number."
  bulletPoints="{[
    '24 Hour Response Time',
    'Free Quotes',
    'Specialized Equipment',
    'Satisfaction Guaranteed',
  ]}"
  right="{false}"
/>
<Services />

<style lang="postcss">
  .intro-video-embed {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
