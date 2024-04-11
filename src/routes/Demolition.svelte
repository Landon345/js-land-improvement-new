<script>
  import demolition from "../assets/demolition-pic.webp";
  import { Paths } from "../lib/constants";
  import ServiceBanner from "../lib/ServiceBanner.svelte";
  import ServiceSection from "../lib/ServiceSection.svelte";
  import demolitionLoading from "../assets/demolitionLoading.webp";

  const applications = [
    "Mobile Homes",
    "Condemned Houses",
    "Sheds",
    "Removing the Stuff That Goes With It",
  ];
</script>

<svelte:head>
  <title>{Paths.demolition.label} | JS Land Improvement</title>
</svelte:head>

<section class="">
  <ServiceBanner src="{demolition}" label="{Paths.demolition.label}" />
  <ServiceSection
    imageSource="{demolitionLoading}"
    imageLabel="{Paths.demolition.label}"
    subHeader="Demolition"
    header="We'll take care of everything — mess & all"
    paragraph="G&M handles the entire removal process, from demolition to disposal. We even take care of the removal of furniture, trash, and materials contained within the structure. You just let us know what you need removed."
    bulletPoints="{applications}"
    right="{true}"
  />
  <ServiceSection
    imageSource="{demolitionLoading}"
    imageLabel="{Paths.demolition.label}"
    subHeader="Demolition"
    header="We'll take care of everything — mess & all"
    paragraph="G&M handles the entire removal process, from demolition to disposal. We even take care of the removal of furniture, trash, and materials contained within the structure. You just let us know what you need removed."
    bulletPoints="{applications}"
    right="{false}"
  />
</section>
