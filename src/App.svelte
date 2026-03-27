<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Header from "./lib/Header.svelte";
  import Reviews from "./routes/Reviews.svelte";
  import Footer from "./lib/Footer.svelte";
  import AboutUs from "./routes/AboutUs.svelte";
  import ExcavationAndDemolition from "./routes/ExcavationAndDemolition.svelte";
  import LandClearingAndForestry from "./routes/LandClearingAndForestry.svelte";
  import TreeService from "./routes/TreeService.svelte";
  import { Paths } from "./lib/constants";
  import ContactUs from "./routes/ContactUs.svelte";
  import Services from "./routes/Services.svelte";
</script>

<Router>
  <div class="bg-base-100">
    <Header />
    <Route path="{Paths.reviews.path}"><Reviews /></Route>
    <Route path="{Paths.aboutUs.path}"><AboutUs /></Route>
    <Route path="{Paths.excavationAndDemolition.path}">
      <ExcavationAndDemolition />
    </Route>
    <Route path="{Paths.landClearingAndForestry.path}">
      <LandClearingAndForestry />
    </Route>
    <Route path="{Paths.treeService.path}"><TreeService /></Route>
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
