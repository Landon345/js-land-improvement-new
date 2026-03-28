<script>
  import { onMount } from "svelte";

  let loading = $state(true);

  onMount(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", "1852624f-2f6b-48cb-ab45-9ad2f5c085e5");
    script.setAttribute(
      "form_url",
      "https://clienthub.getjobber.com/client_hubs/1852624f-2f6b-48cb-ab45-9ad2f5c085e5/public/work_request/embedded_work_request_form",
    );
    document.head.appendChild(script);

    const formDiv = document.getElementById(
      "1852624f-2f6b-48cb-ab45-9ad2f5c085e5",
    );
    const observer = new MutationObserver(() => {
      if (formDiv.childElementCount > 0) {
        observer.disconnect();
        setTimeout(() => {
          loading = false;
        }, 3500);
      }
    });
    observer.observe(formDiv, { childList: true, subtree: true });

    return () => observer.disconnect();
  });
</script>

<div class="p-6 lg:p-12">
  <div class="relative">
    {#if loading}
      <div
        class="bg-white rounded-lg p-6 lg:p-10 animate-pulse w-[752px] max-w-full mx-auto"
      >
        <div class="h-7 bg-gray-200 rounded w-2/5 mb-8"></div>
        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as _}
          <div class="mb-5">
            <div class="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div class="h-10 bg-gray-200 rounded w-full"></div>
          </div>
        {/each}
        <div class="mb-5">
          <div class="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div class="h-56 bg-gray-200 rounded w-full"></div>
        </div>
        <div class="mb-5">
          <div class="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div class="h-10 bg-gray-200 rounded w-full"></div>
        </div>
        <div class="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div class="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
        <div class="h-11 bg-gray-300 rounded w-1/3 mt-4"></div>
      </div>
    {/if}
    <div
      id="1852624f-2f6b-48cb-ab45-9ad2f5c085e5"
      class="{loading
        ? 'absolute top-0 left-0 right-0 mx-auto w-[752px] max-w-full z-10'
        : 'w-[752px] max-w-full mx-auto'}"
    ></div>
  </div>
  <link
    rel="stylesheet"
    href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
    media="screen"
  />
</div>
