<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Header from "./lib/Header.svelte";
  import Reviews from "./routes/Reviews.svelte";
  import Footer from "./lib/Footer.svelte";
  import AboutUs from "./routes/AboutUs.svelte";
  import BrushClearing from "./routes/ForestryMulching.svelte";
  import Grading from "./routes/Grading.svelte";
  import LandClearing from "./routes/LandClearing.svelte";
  import TreeRemoval from "./routes/TreeService.svelte";
  import { Paths } from "./lib/constants";
</script>

<Router>
  <div class="bg-base-100">
    <Header />
    <Route path="{Paths.reviews}"><Reviews /></Route>
    <Route path="{Paths.aboutUs}"><AboutUs /></Route>
    <Route path="{Paths.brushClearing}"><BrushClearing /></Route>
    <Route path="{Paths.grading}"><Grading /></Route>
    <Route path="{Paths.landClearing}"><LandClearing /></Route>
    <Route path="{Paths.treeRemoval}"><TreeRemoval /></Route>
    <Route path="{Paths.home}"><Home /></Route>
    <Footer />
  </div>
</Router>

<style lang="postcss">
  :global(h1) {
    @apply text-4xl font-bold my-2;
  }
  :global(h3) {
    @apply text-2xl font-bold my-2 lg:text-3xl;
  }
  :global(p) {
    @apply text-lg;
  }
  :global(img) {
    @apply w-full h-auto object-cover shadow-lg max-w-[1000px] mx-auto;
  }
</style>
