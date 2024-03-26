<script lang="ts">
  import mulching from "../assets/mulching-bobcat.jpg";
  import grading from "../assets/farm-grading.jpg";
  import clearing from "../assets/clearing-bobcat.jpg";
  import treeService from "../assets/tree-service-worker.jpg";
  import HomeImage from "../lib/HomeImage.svelte";
  import sunsetBobcat from "../assets/sunset-bobcat.jpg";

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
</script>

<svelte:head>
  <title>Home | JS Land Improvement</title>
</svelte:head>

<!-- <iframe
  loading="lazy"
  src="https://www.youtube.com/embed/vWSAY4iIMrg?autoplay=1&amp;playlist=vWSAY4iIMrg&amp;mute=1&amp;loop=1"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen="{true}"
  class="video"
>
</iframe> -->
<div class="video-background">
  <div class="video-foreground">
    <iframe
      loading="lazy"
      src="https://www.youtube.com/embed/vWSAY4iIMrg?autoplay=1&amp;controls=0&amp;loop=1&amp;rel=0&amp;mute=1&amp"
      frameborder="0"
      allowfullscreen="{true}"
      title="YouTube video player"
    ></iframe>
  </div>
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

<style>
  .video-background {
    position: relative;
    width: 100%;
    height: 100vh; /* Make sure it covers the entire viewport height */
    overflow: hidden;
  }

  .video-foreground {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .video-foreground iframe {
    width: 100%;
    height: 100%;
    pointer-events: none; /* Disable pointer events to prevent hover effects */
  }

  .video-foreground iframe:hover {
    pointer-events: auto; /* Re-enable pointer events when hovered over */
  }

  .video {
    width: 100%;
    min-height: 325px;
  }
  .home-section {
    background-color: #f5f5f5;
  }
  .home-section-inner {
    width: 85%;
    margin: auto;
    padding: 20px 0;
  }
  .home-section h3 {
    text-transform: uppercase;
    text-align: center;
  }
  .home-section-inner p {
    text-align: center;
    margin: 10px 0;
    font-size: 15px;
  }
  .divider {
    margin: 40px 0;
    border-top: 4px solid #333;
  }
  .transform-land {
    width: 85%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    margin: 80px auto 40px auto;
  }
  .transform-land h4 {
    font-size: 14px;
    color: #333;
  }
  .transform-land h3 {
    font-size: 18px;
    margin-top: 10px;
  }
  .transform-land h3 span {
    color: #ffc801;
  }
  .sunset-bobcat-img {
    width: 100%;
    margin: 40px;
  }
  @media (min-width: 900px) {
    .video {
      height: 45vw;
    }
    .home-section-inner h3 {
      font-size: 60px;
    }
    .home-section-inner p {
      font-size: 20px;
      text-align: center;
    }
    .home-image-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .sunset-bobcat-img {
      width: 65%;
    }
    .transform-land h4 {
      font-size: 18px;
    }
    .transform-land h3 {
      font-size: 42px;
    }
  }
</style>
