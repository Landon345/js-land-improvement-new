<script>
  import MediaQuery from "svelte-media-queries";
  import Contact from "./Contact.svelte";
</script>

<MediaQuery query="(max-width: 800px)" let:matches>
  <div class="footer-container">
    <Contact />
    <p class="footer-text">JS Land Improvement | 2022</p>
  </div>
  {#if matches}
    <div class="contact-buttons">
      <a href="tel:7013471545" class="contact-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="phone"
          x="0"
          y="0"
          width="20px"
          height="20px"
          version="1.1"
          viewBox="0 0 29 29"
          xml:space="preserve"
          ><path
            d="m20.914 17.743-2.091 1.178a1.319 1.319 0 0 1-1.58-.217l-6.979-6.979a1.32 1.32 0 0 1-.217-1.58l1.178-2.091a1.978 1.978 0 0 0-.325-2.37L7.766 2.55a1.978 1.978 0 0 0-2.798 0L3.545 3.972a5.276 5.276 0 0 0-.793 6.446l.714 1.19a41.36 41.36 0 0 0 14.946 14.631l.141.081c2.102 1.201 4.699.851 6.382-.831l1.486-1.486a1.978 1.978 0 0 0 0-2.798l-3.136-3.136a1.978 1.978 0 0 0-2.371-.326z"
          ></path>
        </svg>
        <p class="button-text">Call Us</p>
      </a>
      <a href="sms:7013471545" class="contact-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          width="20px"
          height="20px"
          viewBox="0 0 512 512"
          id="mail"
          ><path
            d="M445.011,82.7H67.022a50.057,50.057,0,0,0-50,50V379.3a50.057,50.057,0,0,0,50,50H445.01a50.057,50.057,0,0,0,50-50V132.7A50.055,50.055,0,0,0,445.011,82.7Zm-88.9,173.232,118.9-93.318V371.352ZM67.022,102.7H445.01a30.034,30.034,0,0,1,30,30v4.49L282.6,288.208a39.972,39.972,0,0,1-49.246-.04L37.022,137.152V132.7A30.034,30.034,0,0,1,67.022,102.7Zm92.438,153.86L37.022,371.755V162.384ZM445.011,409.3H67.022a30.007,30.007,0,0,1-25.538-14.28l134.034-126.1L221.1,303.98a59.937,59.937,0,0,0,73.816-.019L340.235,268.4,470.6,394.94A30.011,30.011,0,0,1,445.011,409.3Z"
          ></path>
        </svg>
        <p class="button-text">Text Us</p>
      </a>
    </div>
  {/if}
</MediaQuery>

<style>
  .footer-text {
    text-align: center;
    padding: 20px;
  }
  .button-text {
    margin-left: 4px;
  }
  .contact-buttons {
    position: sticky;
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 30px 0;
    background-color: #fff;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
    bottom: 0;
    left: 0;
  }
  .contact-button {
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    background-color: #ffc801;
  }
  a {
    text-decoration: none;
    color: #222;
    font-weight: 600;
  }
</style>
