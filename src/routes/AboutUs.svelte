<script lang="ts">
  import Bobcat from "../assets/bobcat.jpg";
  import Worker from "../assets/worker.jpg";
</script>

<svelte:head>
  <title>About Us | JS Land Improvement</title>
</svelte:head>

<main>
  <div class="page-header">
    <div class="header-text">
      <h1>About us</h1>
      <h3>
        OUR MISSION IS PLAIN AND SIMPLE — CREATE THE BEST CLIENT EXPERIENCE
        POSSIBLE.
      </h3>
    </div>
  </div>

  <div class="about-container">
    <p>
      JS Land Improvement was launched in 2021 by Jonas Geston with the help of
      his father Scott. Jonas graduated NDSU in 2023 with a degree in
      Agriculture Economics from North Dakota State University and has a strong
      passion for all things business and land improvement. Jonas has thousands
      of hours worth of experience operating heavy equipment and helping his
      clients across North Dakota and Minnesota bring their projects into
      fruition. Our objective at JS Land Improvement is to create the best
      client experience possible while improving the quality and usability of
      the land. As JS Land Improvement continues to grow, our core values keep
      us heading in the right direction.
    </p>
    <div class="experience-container">
      <div class="left-container">
        <h3 class="experience">How do we create the best client experience?</h3>
        <img src="{Bobcat}" alt="Bobcat" class="bobcat-img" />
        <ul>
          <li>Providing free on-site estimates</li>
          <li>Listening to our client’s vision</li>
          <li>Maintaining strong communication</li>
          <li>Making any necessary accommodations</li>
          <li>Completing projects in a timely manner</li>
          <li>Completing projects on or under our bid amount</li>
          <li>
            Assuring 100% client satisfaction before finishing any project
          </li>
        </ul>
      </div>
      <img src="{Worker}" alt="worker" class="worker-img" />
    </div>
  </div>
</main>

<style>
  .about-container {
    width: 80%;
    margin: auto;
    margin-bottom: 80px;
  }
  .experience {
    text-transform: uppercase;
    margin-top: 80px;
  }
  img {
    width: 100%;
    margin: 40px 0;
  }
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
  @media (min-width: 900px) {
    .header-text {
      width: 75%;
      margin: auto;
    }
    .page-header h1 {
      font-size: 80px;
    }
    .page-header h3 {
      font-size: 30px;
    }
    .about-container p {
      line-height: 1.8rem;
      font-size: 18px;
    }
    .about-container {
      width: 70%;
    }
    .experience {
      font-size: 30px;
      margin-top: 30px;
    }
    .experience-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-top: 30px;
    }
    .left-container {
      display: flex;
      flex-direction: column;
      align-items: space-around;
    }
    .worker-img {
      width: 80%;
    }
    .bobcat-img {
      width: 80%;
    }
  }
</style>
