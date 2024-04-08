<script lang="ts">
  import mulching from "../assets/mulching-bobcat.jpg";
  import grading from "../assets/farm-grading.jpg";
  import clearing from "../assets/clearing-bobcat.jpg";
  import treeService from "../assets/tree-service-worker.jpg";
  import HomeImage from "../lib/HomeImage.svelte";
  import sunsetBobcat from "../assets/sunset-bobcat.jpg";
  import introVideo from "../assets/intro-video.mp4";
  import jsTeamPic from "../assets/js-team-pic.jpg";
  import { onMount } from "svelte";

  interface ImgObj {
    imgsrc: string;
    imgalt: string;
    header: string;
    para: string;
    linkto: string;
  }
  const imgObjs: ImgObj[] = [
    {
      imgsrc: mulching,
      imgalt: "mulching",
      header: "Forestry Mulching",
      para: "Clearing brush and small trees can be a labor intensive task. Let us take care of it for you!",
      linkto: "/brush-clearing",
    },
    {
      imgsrc: grading,
      imgalt: "grading",
      header: "Excavation and Grading",
      para: "We'll take care of all your excavation and grading needs",
      linkto: "/grading",
    },
    {
      imgsrc: clearing,
      imgalt: "clearing",
      header: "Land Clearing",
      para: "We can clear any size piece of land and suite it to your needs",
      linkto: "/land-clearing",
    },
    {
      imgsrc: treeService,
      imgalt: "treeService",
      header: "Tree Service",
      para: "From felling large trees to maintaining your existing ones, we have you covered",
      linkto: "/tree-removal",
    },
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
<div class="md:grid md:grid-cols-2 md:grid-rows-1">
  <div class="relative">
    <img
      class="w-full h-full object-cover rounded-none lg:h-[70vh]"
      src="{jsTeamPic}"
      alt="js-team-pic"
    />
    <a
      class="btn btn-primary rounded-none absolute bottom-0 right-0 bg-primary text-primary-content text-sm h-[100px] px-10 flex items-center font-bold uppercase"
      href="/about-us"
    >
      Learn more <i class="ri-arrow-right-circle-line text-xl ml-2"></i>
    </a>
  </div>
  <div class="p-[50px] h-min">
    <p class="w-max text-primary font-bold uppercase">Make it great</p>
    <h1 class="text-3xl mt-3 pb-8 uppercase lg:text-4xl">
      Working Together for Exceptional Results
    </h1>
    <p class="pb-10">
      Our mission at JS Land Improvement is to improve the value of our client's
      land while creating an amazing experience. We prioritize quality over
      quantity and are committed to achieving excellence. Wether we are working
      for you or with you, we promise to treat you as a human and not a number.
    </p>
    <div class="uppercase">
      <div class="flex items-center">
        <i class="ri-arrow-right-s-line text-primary mr-2 text-2xl"></i>
        <h3 class="font-bold my-2">24 Hour Response Time</h3>
      </div>
      <div class="flex items-center">
        <i class="ri-arrow-right-s-line text-primary mr-2 text-2xl"></i>
        <h3 class="font-bold my-2">Free Quotes</h3>
      </div>
      <div class="flex items-center">
        <i class="ri-arrow-right-s-line text-primary mr-2 text-2xl"></i>
        <h3 class="font-bold my-2">Specialized Equipment</h3>
      </div>
      <div class="flex items-center">
        <i class="ri-arrow-right-s-line text-primary mr-2 text-2xl"></i>
        <h3 class="font-bold my-2">Satisfaction Guaranteed</h3>
      </div>
    </div>
  </div>
</div>
<img
  class="w-11/12 mb-4 mx-auto md:hidden"
  src="{imgObjs[1].imgsrc}"
  alt="{imgObjs[1].imgalt}"
/>
<div class="bg-base-300 p-[40px]">
  <p class=" text-primary font-bold text-center">WE'RE UP TO THE CHALLENGE</p>
  <h1 class="text-4xl mt-3 mb-4 uppercase font-bold text-center">
    Our Service Areas
  </h1>
  <p>
    We have the skills and equipment to handle any size job. View our service
    areas to see how we can help knock out your next project!
  </p>
  {#each imgObjs as imgObj}
    <div class="flex h-[80px] w-full m-auto my-4">
      <a
        class="flex flex-col uppercase font-bold text-xl p-10 text-center justify-center w-3/4 bg-primary text-base-100"
        href="/"
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
  {/each}
</div>

<section class="home-section">
  <div class="home-section-inner">
    <h3>services</h3>
    <p>
      We have the equipment and expertise to handle any size job. View our
      services to see how we can turn your imagination into reality
    </p>

    <div class="home-image-container">
      {#each imgObjs as imgObj}
        <HomeImage
          imgsrc="{imgObj.imgsrc}"
          imgalt="{imgObj.imgalt}"
          header="{imgObj.header}"
          para="{imgObj.para}"
          linkto="{imgObj.linkto}"
        />
      {/each}
    </div>

    <hr class="divider" />
  </div>
</section>

<section class="transform-land">
  <h4>Free Estimates. Transform</h4>
  <h3>
    Your <span>Land</span> Today.
  </h3>
  <img src="{sunsetBobcat}" alt="sunset-bobcat" class="sunset-bobcat-img" />
</section>

<style lang="postcss">
  .radial {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.8) 80%,
      rgba(0, 0, 0, 0.99) 100%
    );
  }
</style>
