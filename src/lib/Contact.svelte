<svelte:head>
  <script
    async
    src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
    clienthub_id="1852624f-2f6b-48cb-ab45-9ad2f5c085e5"
    form_url="https://clienthub.getjobber.com/client_hubs/1852624f-2f6b-48cb-ab45-9ad2f5c085e5/public/work_request/embedded_work_request_form"
  ></script>
</svelte:head>

<div class="text-left border-t bg-slate-100">
  <div class="reach-here">
    <h3 class="text-red-400">CONTACT US</h3>
    <div class="contact-info">
      <div>
        <p>701-347-1545</p>
        <p>team@jslandimprovement.com</p>
      </div>
      <a
        class="facebook-link"
        href="https://www.facebook.com/JSLandImprovement"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          viewBox="0 0 24 24"
          id="facebook"
          width="30"
          height="30"
          fill="#fff"
          ><path
            d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"
          ></path></svg
        >
      </a>
    </div>
  </div>
  <div id="1852624f-2f6b-48cb-ab45-9ad2f5c085e5"></div>
  <link
    rel="stylesheet"
    href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
    media="screen"
  />
</div>

<style>
  .contact-container {
    text-align: left;
    border-top: 1px solid #222;
    background-color: #f7f7f7;
  }
  .reach-here {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .contact-header {
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  p {
    font-size: 15px;
    margin-bottom: 10px;
  }
  .facebook-link {
    display: flex;
    align-items: center;
    background-color: #3b5998;
    transition: linear 0.2s all;
    width: min-content;
    border-radius: 4px;
    padding: 8px;
  }
  .facebook-link:hover {
    background-color: #294d9a;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  form p {
    padding: 0;
    margin: 0;
  }
  .alert {
    padding: 20px;
    margin-bottom: 10px;
    margin: 0 10px;
    border-radius: 4px;
  }
  .success {
    background-color: #d4edda;
    color: #155724;
  }
  .error {
    background-color: #f8d7da;
    color: #721c24;
  }
  .hidden {
    background-color: #f5f5f5;
    color: #f5f5f5;
  }
  .neutral {
    background-color: #fff;
    color: #222;
  }
  .inputs {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  form input {
    margin-bottom: 10px;
    border: 2px solid #222;
    padding: 20px;
    font-size: 16px;
  }
  form input::placeholder {
    color: #222;
  }
  .submit-button {
    background-color: #ffc801;
    color: #222;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    padding: 22px;
    transition: linear 0.2s all;
    width: min-content;
    cursor: pointer;
    letter-spacing: 2px;
  }
  .submit-button:hover {
    background-color: #be963e;
  }
  .submit-button:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
  .submit-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
  }
  .textarea {
    height: 100px;
    margin-bottom: 10px;
    padding: 8px;
    border: 2px solid #222;
    padding: 20px;
    font-family: "montserrat", "sans-serif";
    font-size: 16px;
    color: #222;
    font-weight: 500;
  }
  .textarea::placeholder {
    color: #222;
    font-family: "montserrat", "sans-serif";
    font-weight: 500;
  }
  .math-problem {
    font-size: 16px;
    margin-right: 10px;
    color: #666;
  }
  .answer {
    width: 50px;
    padding: 20px 5px;
    margin-right: 24px;
  }
  .name-phone {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 1200px) {
    .reach-here {
      margin-top: 30px;
    }
    .name-phone {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .input-box {
      margin: 10px;
    }
    .contact-header {
      font-size: 42px;
    }
  }
</style>
