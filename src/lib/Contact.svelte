<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
    script.setAttribute('clienthub_id', '1852624f-2f6b-48cb-ab45-9ad2f5c085e5');
    script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/1852624f-2f6b-48cb-ab45-9ad2f5c085e5/public/work_request/embedded_work_request_form');
    document.head.appendChild(script);
  });
</script>

<div class="p-6 lg:p-12">
  <div id="1852624f-2f6b-48cb-ab45-9ad2f5c085e5"></div>
  <link
    rel="stylesheet"
    href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
    media="screen"
  />
</div>
