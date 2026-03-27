<script>
  import Navbar from "./Navbar.svelte";
  import LogoLight from "../assets/js-logo-bg-removed.webp";
  import LogoDark from "../assets/js-logo-bg-removed-dark.webp";
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  import { PHONE_NUMBER, Paths } from "./constants";

  onMount(() => {
    themeChange(false);
  });
</script>

<header style="display: unset">
  <div
    class="bg-primary flex justify-center text-primary-content items-center p-3"
  >
    <a class="flex text-lg" href="{`tel:${PHONE_NUMBER}`}">
      <i class="ri-cellphone-fill"></i>
      <p class="ml-2">
        {PHONE_NUMBER}
      </p>
    </a>
  </div>
  <div
    class="sticky top-0 flex justify-between items-center bg-base-100 z-10 border-b-2 border-primary"
  >
    <a href="{Paths.home.path}">
      <img src="{LogoLight}" alt="logo" class="w-[75px] m-1 shadow-none dark:hidden" />
      <img src="{LogoDark}" alt="logo" class="w-[75px] m-1 shadow-none hidden dark:block" />
    </a>
    <div class="flex justify-center text-primary text-xl items-center">
      <button aria-label="Switch to light theme" data-set-theme="light" data-act-class="text-secondary">
        <i class="ri-sun-line m-2"></i>
      </button>
      <button aria-label="Switch to dark theme" data-set-theme="dark" data-act-class="text-secondary">
        <i class="ri-moon-line m-2"></i>
      </button>
    </div>
    <Navbar />
  </div>
</header>
