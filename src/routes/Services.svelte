<script lang="ts">
  import jonasStump from "../assets/jonasStump.webp";
  import demolitionPic from "../assets/demolition-pic.webp";
  import excavationAndGradingPic from "../assets/excavation-and-grading-pic.webp";
  import landClearingAndForestry from "../assets/land-clearing-and-forestry-pic.webp";
  import treeServicePic from "../assets/tree-service-pic.webp";

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
</script>

<svelte:head>
  <title>Home | JS Land Improvement</title>
</svelte:head>

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
