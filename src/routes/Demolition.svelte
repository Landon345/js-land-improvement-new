<script>
  import demolition from "../assets/demolition-pic.webp";
  import { Paths } from "../lib/constants";
  import ServiceBanner from "../lib/ServiceBanner.svelte";
  import ServiceSection from "../lib/ServiceSection.svelte";
  import demolitionLoading from "../assets/demolitionLoading.webp";
  import demolition2 from "../assets/demolition2.webp";

  const applications = [
    "Mobile Homes",
    "Condemned Houses",
    "Sheds",
    "Removing the Stuff That Goes With It",
  ];

  const demoEquipment = [
    "Bobcats",
    "Excavators",
    "Dumpsters",
    "Hauling Trucks",
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
    paragraph="Don't lift a finger! JS Land Improvement handles the entire removal process, from demolition to disposal of everything inside. We make it easy for you."
    bulletPoints="{applications}"
    right="{true}"
  />
  <ServiceSection
    imageSource="{demolition2}"
    imageLabel="{Paths.demolition.label}"
    subHeader="Demolition"
    header="Bobcats and excavators ready to tackle any demolition project"
    paragraph="At JS Land Improvement, we're equipped with the muscle to tackle any demolition project. Our fleet boasts powerful Bobcats and excavators, allowing us to efficiently break down structures of all sizes. Whether it's a small shed or a multi-story building, our Bobcats provide the agility and maneuverability needed for precise demolition, while our excavators offer the raw power to handle even the toughest materials. With our state-of-the-art equipment and experienced operators, you can be confident that your demolition project will be completed safely and efficiently."
    bulletPoints="{demoEquipment}"
    right="{false}"
  />
</section>
