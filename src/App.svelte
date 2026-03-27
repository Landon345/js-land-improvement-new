<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Header from "./lib/Header.svelte";
  import Reviews from "./routes/Reviews.svelte";
  import Footer from "./lib/Footer.svelte";
  import AboutUs from "./routes/AboutUs.svelte";
  import ExcavationAndDemolition from "./routes/ExcavationAndDemolition.svelte";
  import LandClearingAndForestryMulching from "./routes/LandClearingAndForestryMulching.svelte";
  import TreeRemoval from "./routes/TreeRemoval.svelte";
  import { Paths } from "./lib/constants";
  import ContactUs from "./routes/ContactUs.svelte";
  import Services from "./routes/Services.svelte";

  // Hero/banner images for each page — prefetched so they're cached before the user navigates
  import image1 from "./assets/Image_1.webp";
  import image2 from "./assets/Image_2.webp";
  import image3 from "./assets/Image_3.webp";
  import image4 from "./assets/Image_4.webp";
  import image5 from "./assets/Image_5.webp";
  import image6 from "./assets/Image_6.webp";
  import image7 from "./assets/Image_7.webp";
  import image8 from "./assets/Image_8.webp";
  import image9 from "./assets/Image_9.webp";
  import image10 from "./assets/Image_10.webp";
  import image11 from "./assets/Image_11.webp";
  import demolitionLoading from "./assets/demolitionLoading.webp";
  import excavatorWorking from "./assets/excavatorWorking.webp";
  import treeBranchesGone from "./assets/treeBranchesGone.webp";
  import pathCleared from "./assets/path-cleared.webp";
  import manNearStump from "./assets/man-near-stump.webp";
</script>

<svelte:head>
  <link rel="prefetch" as="image" href={image1} />
  <link rel="prefetch" as="image" href={image2} />
  <link rel="prefetch" as="image" href={image3} />
  <link rel="prefetch" as="image" href={image4} />
  <link rel="prefetch" as="image" href={image5} />
  <link rel="prefetch" as="image" href={image6} />
  <link rel="prefetch" as="image" href={image7} />
  <link rel="prefetch" as="image" href={image8} />
  <link rel="prefetch" as="image" href={image9} />
  <link rel="prefetch" as="image" href={image10} />
  <link rel="prefetch" as="image" href={image11} />
  <link rel="prefetch" as="image" href={demolitionLoading} />
  <link rel="prefetch" as="image" href={excavatorWorking} />
  <link rel="prefetch" as="image" href={treeBranchesGone} />
  <link rel="prefetch" as="image" href={pathCleared} />
  <link rel="prefetch" as="image" href={manNearStump} />
</svelte:head>

<Router>
  <div class="bg-base-100">
    <Header />
    <Route path="{Paths.reviews.path}"><Reviews /></Route>
    <Route path="{Paths.aboutUs.path}"><AboutUs /></Route>
    <Route path="{Paths.excavationAndDemolition.path}">
      <ExcavationAndDemolition />
    </Route>
    <Route path="{Paths.landClearingAndForestryMulching.path}">
      <LandClearingAndForestryMulching />
    </Route>
    <Route path="{Paths.treeRemoval.path}"><TreeRemoval /></Route>
    <Route path="{Paths.home.path}"><Home /></Route>
    <Route path="{Paths.contactUs.path}"><ContactUs /></Route>
    <Route path="{Paths.services.path}"><Services /></Route>
    <Footer />
  </div>
</Router>

<style>
  :global(.radial) {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.8) 80%,
      rgba(0, 0, 0, 0.99) 100%
    );
  }
  :global(.light-radial) {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.4) 80%,
      rgba(0, 0, 0, 0.9) 100%
    );
  }
</style>
