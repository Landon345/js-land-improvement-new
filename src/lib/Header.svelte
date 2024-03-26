<script>
  import Navbar from "./Navbar.svelte";
  import Logo from "../assets/jslandimprovementlogo.png";
</script>

<header class="header-container">
  <div class="phone-header">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="phone"
      x="0"
      y="0"
      version="1.1"
      viewBox="0 0 29 29"
      xml:space="preserve"
      fill="white"
      height="20px"
      width="20px"
      ><path
        d="m20.914 17.743-2.091 1.178a1.319 1.319 0 0 1-1.58-.217l-6.979-6.979a1.32 1.32 0 0 1-.217-1.58l1.178-2.091a1.978 1.978 0 0 0-.325-2.37L7.766 2.55a1.978 1.978 0 0 0-2.798 0L3.545 3.972a5.276 5.276 0 0 0-.793 6.446l.714 1.19a41.36 41.36 0 0 0 14.946 14.631l.141.081c2.102 1.201 4.699.851 6.382-.831l1.486-1.486a1.978 1.978 0 0 0 0-2.798l-3.136-3.136a1.978 1.978 0 0 0-2.371-.326z"
      ></path></svg
    >
    <h1 class="phone-number"><a href="tel:701-347-1545">701-347-1545</a></h1>
  </div>
  <div class="nav-container">
    <img src="{Logo}" alt="logo" class="logo" />
    <Navbar />
  </div>
</header>

<style>
  .nav-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #eee;
  }
  .phone-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    text-align: center;
    padding: 4px 0;
  }
  .phone-number {
    font-size: 1.25rem;
    margin-left: 4px;
  }
  .phone-number a {
    color: white;
    text-decoration: none;
  }
  .logo {
    width: 50%;
    max-width: 175px;
    object-fit: contain;
  }
</style>
