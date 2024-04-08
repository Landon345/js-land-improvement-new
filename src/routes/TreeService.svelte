<script>
  import { link } from "svelte-routing";
  import cutupTree from "../assets/cutup-tree.jpg";
  import treeRemoval from "../assets/tree-removal.jpg";

  const applications = [
    "Shelterbelt Removal",
    "Tree Trimming",
    "And More!",
    "Individual Tree Removal",
    "Dead Tree Removal",
    "Damaged Tree Removal",
    "Tree Planting",
  ];
</script>

<svelte:head>
  <title>Tree Removal | JS Land Improvement</title>
</svelte:head>

<section class="p-4">
  <div class="">
    <div class="">
      <h1>Tree Service</h1>
    </div>
    <img src="{cutupTree}" alt="cutupTree" class="" />
  </div>

  <div class="">
    <h3 class="">Applications</h3>
  </div>
  <div class="">
    {#each applications as application}
      <div class="bg-base-200 p-4 m-4 rounded-md">
        <p>
          {application}
        </p>
      </div>
    {/each}
  </div>
</section>
<section class="text-center p-4">
  <div class="">
    <h3>Tree Service</h3>
    <div class="">
      <p>
        Maintaining and removing trees is a dangerous yet important task to do
        as it ensures a safe and aesthetic looking property. Our team of experts
        will ensure all your tree service needs are met including complete
        cleanup.
      </p>
    </div>
  </div>

  <img src="{treeRemoval}" alt="treeRemoval" class="more-info-image" />
</section>
