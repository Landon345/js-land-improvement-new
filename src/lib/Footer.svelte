<script lang="ts">
  import { PHONE_NUMBER, EMAIL, ADDRESS, Paths } from "./constants";
  import logo from "../assets/js-logo-bg-removed.png";
  const year = new Date().getFullYear();

  const format = (phone: string) => {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  };
</script>

<div
  class="bg-base-100 mb-20 md:mb-0 border-t-2 border-primary p-10 text-center"
>
  <div class="lg:flex">
    <div class="mr-10">
      <img src="{logo}" alt="logo" class="w-1/5 lg:w-1/2 shadow-none" />
      <p class="hidden text-sm lg:block w-1/2 mx-auto py-3">
        JS Land Improvement is locally owned and operated.
      </p>
    </div>
    <div class="hidden lg:flex lg:justify-between lg:w-full">
      <div class="flex flex-col justify-around mb-4">
        <h5 class="uppercase text-primary font-bold">Services</h5>
        <a class="block" href="{Paths.demolition.path}">
          {Paths.demolition.label}
        </a>
        <a class="block" href="{Paths.excavationAndGrading.path}">
          {Paths.excavationAndGrading.label}
        </a>
        <a class="block" href="{Paths.landClearingAndForestry.path}">
          {Paths.landClearingAndForestry.label}
        </a>
        <a class="block" href="{Paths.treeService.path}">
          {Paths.treeService.label}
        </a>
      </div>
      <div class="flex flex-col justify-around mb-4">
        <h5 class="uppercase text-primary font-bold">Site Links</h5>
        <a class="block" href="{Paths.aboutUs.path}">
          {Paths.aboutUs.label}
        </a>
        <a class="block" href="{Paths.reviews.path}">
          {Paths.reviews.label}
        </a>
        <a class="block" href="{Paths.home.path}">
          {Paths.home.label}
        </a>
        <a class="block" href="{Paths.contactUs.path}">
          {Paths.contactUs.label}
        </a>
      </div>
      <div>
        <h5 class="uppercase text-primary font-bold">Contact</h5>
        <a class="text-sm block my-2" href="{`tel:${PHONE_NUMBER}`}">
          {format(PHONE_NUMBER)}
        </a>
        <a class="text-sm block my-2" href="{`mailto:${EMAIL}`}">{EMAIL}</a>
        <h5 class="uppercase text-primary font-bold">Address</h5>
        <p class="text-sm">{ADDRESS}</p>
        <div class="flex justify-center gap-5 items-center p-4 text-3xl">
          <a href="https://www.facebook.com/JSLandImprovement" target="_blank">
            <i class="ri-facebook-fill text-primary"></i>
          </a>
          <a
            href="https://www.instagram.com/js_land_improvement_/"
            target="_blank"
          >
            <i class="ri-instagram-fill text-primary"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/js-land-improvement/"
            target="_blank"
          >
            <i class="ri-linkedin-fill text-primary"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="lg:hidden">
      <a class="text-sm block my-2" href="{`tel:${PHONE_NUMBER}`}">
        {format(PHONE_NUMBER)}
      </a>
      <a class="text-sm block my-2" href="{`mailto:${EMAIL}`}">{EMAIL}</a>

      <p class="text-sm">{ADDRESS}</p>
      <!-- social media links -->
      <div class="flex justify-center gap-5 items-center p-4 text-3xl">
        <a href="https://www.facebook.com/JSLandImprovement" target="_blank">
          <i class="ri-facebook-fill text-primary"></i>
        </a>
        <a
          href="https://www.instagram.com/js_land_improvement_/"
          target="_blank"
        >
          <i class="ri-instagram-fill text-primary"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/js-land-improvement/"
          target="_blank"
        >
          <i class="ri-linkedin-fill text-primary"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="lg:flex lg:justify-around lg:items-center">
    <p class="text-sm my-2">
      <i class="ri-copyright-line"></i>{year} JS Land Improvement. All rights reserved.
    </p>
    <p class="text-sm my-2">Custom website design by Landon Schlangen</p>
  </div>
</div>
<div
  class="flex bg-base-100 md:hidden justify-around items-center fixed bottom-0 w-full p-3 border-t-2 border-t-primary"
>
  <a href="{`tel:${PHONE_NUMBER}`}" class="btn btn-primary px-10">
    <i class="ri-cellphone-fill mr-1"></i>
    <p class="">Call Us</p>
  </a>
  <a href="{`sms:${PHONE_NUMBER}`}" class="btn btn-primary px-10">
    <i class="ri-message-2-fill mr-1"></i>
    <p class="">Text Us</p>
  </a>
</div>
