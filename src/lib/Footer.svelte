<script>
  const PHONE_NUMBER = "7013471545";
  const year = new Date().getFullYear();
</script>

<div
  class="bg-base-100 p-5 flex justify-center items-center mb-20 md:mb-0 md:border-t-2 md:border-primary"
>
  <p class="">JS Land Improvement | {year}</p>
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
