<script lang="ts">
  import jonasStump from "../assets/jonasStump.webp";
  import introVideo from "../assets/JsLandImprovementIntroVidFill.mp4";
  import jsTeamPic from "../assets/js-team-pic.webp";
  import demolitionPic from "../assets/demolition-pic.webp";
  import excavationAndGradingPic from "../assets/excavation-and-grading-pic.webp";
  import landClearingAndForestry from "../assets/land-clearing-and-forestry-pic.webp";
  import treeServicePic from "../assets/tree-service-pic.webp";
  import { onMount } from "svelte";
  import ServiceSection from "../lib/ServiceSection.svelte";

  interface ImgObj {
    imgsrc: string;
    imgalt: string;
    header: string;
    para: string;
    linkto: string;
  }
  const imgObjs: ImgObj[] = [
    {
      imgsrc: demolitionPic,
      imgalt: "demolition",
      header: "Demolition",
      para: "Clearing structures and debris from your land",
      linkto: "/demolition",
    },
    {
      imgsrc: excavationAndGradingPic,
      imgalt: "excavationAndGrading",
      header: "Excavation and Grading",
      para: "We'll take care of all your excavation and grading needs",
      linkto: "/excavation-and-grading",
    },
    {
      imgsrc: landClearingAndForestry,
      imgalt: "landClearingAndForestry",
      header: "Land Clearing And Forestry",
      para: "We can clear any size piece of land and suite it to your needs",
      linkto: "/land-clearing-and-forestry",
    },
    {
      imgsrc: treeServicePic,
      imgalt: "treeService",
      header: "Tree Service",
      para: "From felling large trees to maintaining your existing ones, we have you covered",
      linkto: "/tree-service",
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
  let videoPlaybackRate = 0.5;
  let videoStartTime = 10;
  onMount(() => {
    const introVideo = document.getElementById(
      "introVideo"
    ) as HTMLVideoElement;
    introVideo.currentTime = videoStartTime;
    introVideo.play();
  });
</script>

<svelte:head>
  <title>Home | JS Land Improvement</title>
</svelte:head>

<div class="relative">
  <video
    class="w-full h-[70vh] object-cover relative top-0 left-0 md:h-[80vh]"
    id="introVideo"
    width="500px"
    height="400px"
    controls="{true}"
    autoplay="{true}"
    loop="{true}"
    bind:playbackRate="{videoPlaybackRate}"
  >
    <source src="{introVideo}" type="video/mp4" />
    <track kind="captions" />
  </video>
  <div class="absolute top-0 w-full h-[70vh] md:h-[80vh] radial"></div>
  <div class="absolute top-[40vh] w-full lg:top-[50vh]">
    <div class="w-3/4 m-auto md:w-1/2">
      <p class="uppercase text-primary font-bold">
        We're here to serve you <i class="ri-arrow-down-s-line text-primary"
        ></i>
      </p>
      <h1 class="uppercase text-primary-content">
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
<div class="bg-base-300 p-[40px]">
  <div class="text-center mb-6">
    <p class=" text-primary font-bold">WE'RE UP TO THE CHALLENGE</p>
    <h1 class="text-4xl mt-3 mb-4 uppercase font-bold">Our Services</h1>
    <p class="">We have the equipment and expertise to handle any size job.</p>
  </div>
  <!-- service Images -->
  <div class="lg:flex lg:justify-center lg:flex-wrap">
    {#each imgObjs as imgObj}
      <div class="flex h-[80px] w-full m-auto my-4 lg:hidden">
        <a
          class="flex flex-col uppercase font-bold text-xl p-10 text-center justify-center w-3/4 bg-primary text-primary-content"
          href="{imgObj.linkto}"
        >
          <p>{imgObj.header}</p>
        </a>
        <a
          class="flex justify-center items-center w-1/4 bg-neutral text-base-100"
          href="/"
        >
          <i class="ri-arrow-right-circle-line text-4xl mr-4"></i>
        </a>
      </div>
      <div class="hidden lg:flex flex-col m-2 uppercase w-1/5">
        <a href="{imgObj.linkto}">
          <img
            class="w-full h-[300px]"
            src="{imgObj.imgsrc}"
            alt="{imgObj.imgalt}"
          />
        </a>
        <div
          class="flex justify-center items-center bg-base-100 text-base-content p-6 h-[100px] text-center"
        >
          <p class="text-lg xl:text-xl font-bold">{imgObj.header}</p>
        </div>
        <a class="btn btn-primary rounded-none" href="{imgObj.linkto}">
          Learn More <i class="ri-arrow-right-circle-line text-lg ml-4"></i>
        </a>
      </div>
    {/each}
  </div>
</div>
<!-- We offer Financing -->
<div class="bg-primary text-primary-content text-center p-10">
  <div class="w-5/6 md:w-3/4 mx-auto">
    <h1 class="uppercase">We Offer Financing</h1>
    <p class="text-lg my-8">
      We offer fast and simple financing to customers on purchases between $500
      and $25,000* through Wisetack. With Wisetack, you can select the option
      that best fits your budget and pay in easy monthly installments rather
      than all at once upfront.
    </p>
    <div class="flex justify-around my-10 uppercase">
      <a
        class="btn btn-outline rounded-none px-10"
        href="https://wisetack.us/#/xmwgcs1/prequalify"
        target="_blank"
      >
        Get Prequalified
      </a>
      <a class="btn btn-outline rounded-none px-10" href="/contact-us">
        Contact Us
      </a>
    </div>
    <small class="block text-xs">
      *All financing is subject to credit approval. Terms may vary. Payment
      options through Wisetack are provided by our lending partners. For
      example, a $1,000 purchase could cost $45.18 a month for 24months, based
      on a 7.9% APR. See additional terms at http://wisetack.com/faqs.
    </small>
  </div>
</div>
<div class="lg:grid lg:grid-cols-2">
  <div class="uppercase w-3/4 mx-auto py-10 lg:w-5/6">
    <p class="text-primary font-bold">How it works</p>
    <h1>Getting Started</h1>
    <ol class="lg:grid lg:grid-cols-2">
      {#each gettingStartedSteps as step, i}
        <li class="flex items-center">
          <i class="{`ri-number-${i + 1} list-number`}"></i>
          <p>{step}</p>
        </li>
      {/each}
    </ol>
  </div>
  <div>
    <a
      href="/contact-us"
      class="btn btn-primary w-full rounded-none uppercase font-bold lg:hidden"
    >
      Tell us about your project
      <i class="ri-arrow-right-circle-line ml-4 text-lg"></i>
    </a>
    <div class="relative">
      <img
        class="w-full h-[400px] object-cover"
        src="{jonasStump}"
        alt="jonas-stump"
      />
      <div
        class="absolute bg-base-100 w-1/2 py-4 bottom-0 right-0 text-right pr-10"
      >
        <h3 class="text-primary m-0">Jonas</h3>
        <p class="text-base-content">Owner</p>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  .list-number {
    @apply bg-primary text-primary-content my-2 mr-4 text-2xl h-[50px] w-[50px] flex justify-center items-center;
    background: linear-gradient(145deg, #0c9249, #035e7b);
  }
</style>
