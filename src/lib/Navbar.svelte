<script lang="ts">
  import { link } from "svelte-routing";
  import MediaQuery from "svelte-media-queries";
  import { slide } from "svelte/transition";
  import { Paths } from "./constants";

  let navBarOpen = false;
  let servicesOpen = false;
  let currentPage = window.location.pathname;

  const close = () => {
    navBarOpen = false;
    currentPage = window.location.pathname;
  };
  const closeServices = () => {
    currentPage = window.location.pathname;
    servicesOpen = false;
  };
  const toggleServices = () => {
    servicesOpen = !servicesOpen;
  };
  // https://gmoutdoorservices.com/
  // demolition.path
  // excavation and excavationAndGrading.path
  // land clearing and forestry
  // tree service
</script>

<MediaQuery query="(max-width: 1000px)" let:matches>
  {#if matches}
    <div>
      <button
        use:link
        class="m-1 text-primary"
        on:click="{() => (navBarOpen = !navBarOpen)}"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
          ><path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
          ></path></svg
        >
      </button>
      {#if navBarOpen}
        <nav
          class="absolute text-center top-[60px] left-0 bg-base-100 w-full text-xl p-2"
          in:slide
          out:slide
        >
          <ul>
            <li>
              <a
                use:link
                on:click="{close}"
                class="{`${currentPage === Paths.home.path ? 'text-primary font-bold' : 'hover:text-primary'}`}"
                href="{Paths.home.path}">{Paths.home.label}</a
              >
            </li>
            <li>
              <!-- svelte-ignore a11y-invalid-attribute -->
              <button
                on:click="{toggleServices}"
                class="{`${
                  currentPage === Paths.treeService.path ||
                  currentPage === Paths.demolition.path ||
                  currentPage === Paths.excavationAndGrading.path ||
                  currentPage === Paths.landClearingAndForestry.path
                    ? 'text-primary font-bold'
                    : 'hover:text-primary'
                } ${servicesOpen ? 'text-primary' : ''}`}"
              >
                Services <i class="ri-arrow-down-s-line"></i>
              </button>
              {#if servicesOpen}
                <ul class="inner-nav" in:slide out:slide>
                  <li>
                    <a
                      use:link
                      on:click="{close}"
                      class="{`list-link ${
                        currentPage === Paths.demolition.path
                          ? 'text-primary font-bold'
                          : 'hover:text-primary'
                      }`}"
                      href="{Paths.demolition.path}">{Paths.demolition.label}</a
                    >
                  </li>
                  <li>
                    <a
                      use:link
                      on:click="{close}"
                      class="{`list-link ${
                        currentPage === Paths.excavationAndGrading.path
                          ? 'text-primary font-bold'
                          : 'hover:text-primary'
                      }`}"
                      href="{Paths.excavationAndGrading.path}"
                      >{Paths.excavationAndGrading.label}</a
                    >
                  </li>
                  <li>
                    <a
                      use:link
                      on:click="{close}"
                      class="{`list-link ${
                        currentPage === Paths.landClearingAndForestry.path
                          ? 'text-primary font-bold'
                          : 'hover:text-primary'
                      }`}"
                      href="{Paths.landClearingAndForestry.path}"
                      >Land Clearing</a
                    >
                  </li>
                  <li>
                    <a
                      use:link
                      on:click="{close}"
                      class="{`list-link ${
                        currentPage === Paths.treeService.path
                          ? 'text-primary font-bold'
                          : 'hover:text-primary'
                      }`}"
                      href="{Paths.treeService.path}">Tree Service</a
                    >
                  </li>
                </ul>
              {/if}
            </li>
            <li>
              <a
                use:link
                on:click="{close}"
                class="{`list-link ${
                  currentPage === Paths.reviews.path
                    ? 'text-primary font-bold'
                    : 'hover:text-primary'
                }`}"
                href="{Paths.reviews.path}"
                aria-current="page">{Paths.reviews.label}</a
              >
            </li>
            <li>
              <a
                use:link
                on:click="{close}"
                class="{`list-link ${
                  currentPage === Paths.aboutUs.path
                    ? 'text-primary font-bold'
                    : 'hover:text-primary'
                }`}"
                href="{Paths.aboutUs.path}">{Paths.aboutUs.label}</a
              >
            </li>
            <li>
              <a
                use:link
                on:click="{close}"
                href="{Paths.contactUs.path}"
                class="{`contact-us ${
                  currentPage === Paths.contactUs.path
                    ? 'text-primary font-bold'
                    : 'hover:text-primary'
                }`}"
              >
                {Paths.contactUs.label}
              </a>
            </li>
          </ul>
        </nav>
      {/if}
    </div>
  {:else}
    <nav class="flex w-1/2 justify-around text-xl">
      <a
        use:link
        on:click="{closeServices}"
        class="{`${
          currentPage === Paths.home.path
            ? 'text-primary font-bold'
            : 'hover:text-primary'
        }`}"
        href="{Paths.home.path}"
      >
        {Paths.home.label}
      </a>
      <div class="dropdown">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <button
          on:click="{toggleServices}"
          class="{`${
            currentPage === Paths.treeService.path ||
            currentPage === Paths.demolition.path ||
            currentPage === Paths.excavationAndGrading.path ||
            currentPage === Paths.landClearingAndForestry.path
              ? 'text-primary font-bold'
              : 'hover:text-primary'
          }`}"
        >
          Services <i class="ri-arrow-down-s-line"></i>
        </button>
        {#if servicesOpen}
          <ul
            class="absolute top-10 left-[-50px] bg-base-100 p-4 w-max"
            in:slide
            out:slide
          >
            <li>
              <a
                use:link
                on:click="{closeServices}"
                class="{`list-link ${
                  currentPage === Paths.demolition.path
                    ? 'text-primary font-bold'
                    : 'hover:text-primary'
                }`}"
                href="{Paths.demolition.path}">{Paths.demolition.label}</a
              >
            </li>
            <li>
              <a
                use:link
                on:click="{closeServices}"
                class="{`list-link ${
                  currentPage === Paths.excavationAndGrading.path
                    ? 'text-primary font-bold'
                    : 'hover:text-primary'
                }`}"
                href="{Paths.excavationAndGrading.path}"
                >{Paths.excavationAndGrading.label}</a
              >
            </li>
            <li>
              <a
                use:link
                on:click="{closeServices}"
                class="{`list-link ${
                  currentPage === Paths.landClearingAndForestry.path
                    ? 'text-primary font-bold'
                    : 'hover:text-primary'
                }`}"
                href="{Paths.landClearingAndForestry.path}"
                >{Paths.landClearingAndForestry.label}</a
              >
            </li>
            <li>
              <a
                use:link
                on:click="{closeServices}"
                class="{`list-link ${
                  currentPage === Paths.treeService.path
                    ? 'text-primary font-bold'
                    : 'hover:text-primary'
                }`}"
                href="{Paths.treeService.path}">{Paths.treeService.label}</a
              >
            </li>
          </ul>
        {/if}
      </div>
      <a
        use:link
        on:click="{closeServices}"
        class="{`${
          currentPage === Paths.reviews.path
            ? 'text-primary font-bold'
            : 'hover:text-primary'
        }`}"
        href="{Paths.reviews.path}"
      >
        {Paths.reviews.label}
      </a>
      <a
        use:link
        on:click="{closeServices}"
        class="{`${
          currentPage === Paths.aboutUs.path
            ? 'text-primary font-bold'
            : 'hover:text-primary'
        }`}"
        href="{Paths.aboutUs.path}"
      >
        About Us
      </a>
      <a
        use:link
        on:click="{closeServices}"
        class="{`contact-us-desktop ${
          currentPage === Paths.contactUs.path
            ? 'text-primary font-bold'
            : 'hover:text-primary'
        }`}"
        href="{Paths.contactUs.path}"
      >
        Contact Us
      </a>
    </nav>
  {/if}
</MediaQuery>
