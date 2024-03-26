<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import Header from "./lib/Header.svelte";
  import Reviews from "./routes/Reviews.svelte";
  import Footer from "./lib/Footer.svelte";
  import AboutUs from "./routes/AboutUs.svelte";
  import BrushClearing from "./routes/BrushClearing.svelte";
  import Grading from "./routes/Grading.svelte";
  import LandClearing from "./routes/LandClearing.svelte";
  import TreeRemoval from "./routes/TreeRemoval.svelte";
  import { Paths } from "./lib/Paths";
</script>

<Router>
  <div>
    <Header />
    <Route path="{Paths.reviews}"><Reviews /></Route>
    <Route path="{Paths.aboutUs}"><AboutUs /></Route>
    <Route path="{Paths.brushClearing}"><BrushClearing /></Route>
    <Route path="{Paths.grading}"><Grading /></Route>
    <Route path="{Paths.landClearing}"><LandClearing /></Route>
    <Route path="{Paths.treeRemoval}"><TreeRemoval /></Route>
    <Route path="{Paths.home}"><Home /></Route>
    <Footer />
  </div>
</Router>

<style lang="postcss">
  :global(.page-header) {
    background-color: #ffca28;
    padding: 40px 50px;
    margin-bottom: 80px;
    text-transform: uppercase;
  }
  :global(.page-header h1) {
    font-size: 48px;
    margin-bottom: 30px;
  }
  :global(.page-header h3) {
    font-size: 16px;
    margin-bottom: 40px;
  }
  :global(.quote-button) {
    background-color: #000;
    color: #fff;
    text-decoration: none;
    border: none;
    padding: 15px 25px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    width: fit-content;
    margin: auto;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: linear 0.2s all;
  }
  :global(.quote-button:hover) {
    background-color: #444;
  }
  :global(.card) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 4px;
    margin: 16px 0;
    width: 80%;
    max-width: 700px;
    margin: 30px auto;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  }
  :global(.card-app-text) {
    font-weight: 700;
    text-transform: uppercase;
    color: #333;
  }
  :global(.services-header) {
    display: flex;
    flex-direction: column;
    background-color: #ffca28;
    padding: 40px 0 0 0;
    text-transform: uppercase;
    text-align: center;
  }
  :global(.services-header-action) {
    display: flex;
    flex-direction: column;
  }
  :global(.services-header h1) {
    font-size: 48px;
    margin-bottom: 30px;
    line-height: 1.25;
  }
  :global(.applications-text-container) {
    width: 60%;
    margin: 45px auto;
    border-bottom: 1px solid black;
  }
  :global(.applications) {
    text-align: left;
    font-size: 20px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  :global(.services-img) {
    margin-top: 80px;
    width: 100%;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.2);
  }
  :global(.applications-section) {
    background-color: #f5f5f5;
    padding-bottom: 50px;
  }
  :global(.more-info-service-section) {
    width: 85%;
    margin: 60px auto;
  }
  :global(.more-info-service-section h3) {
    color: #ffc801;
    text-transform: uppercase;
  }
  :global(.more-info-service-para-container) {
    padding: 20px 0;
    color: #444;
    font-weight: 500;
    word-wrap: break-word;
    display: flex;
  }
  :global(.more-info-service-para-container span) {
    margin-right: 10px;
  }
  :global(.more-info-image) {
    width: 100%;
    margin: 20px auto;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.2);
  }

  /* media query for desktop screen sizes */
  @media (min-width: 900px) {
    :global(.card) {
      padding: 16px;
    }
    :global(.card-app-text) {
      font-size: 18px;
    }
    :global(.services-header) {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      padding: 10px 5px 80px 5px;
      align-items: center;
      text-transform: uppercase;
      text-align: center;
    }
    :global(.services-header-action) {
      display: flex;
      flex-direction: column;
    }
    :global(.services-header h1) {
      font-size: 60px;
      margin-bottom: 50px;
      line-height: 1.25;
    }
    :global(.applications-text-container) {
      width: 60%;
      margin: 45px auto;
      border-bottom: 3px solid black;
    }
    :global(.applications) {
      text-align: left;
      font-size: 50px;
      text-transform: uppercase;
      margin-bottom: 6px;
    }
    :global(.application-cards-container) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    :global(.services-img) {
      max-width: 400px;
    }
    :global(.applications-section) {
      background-color: #f5f5f5;
      padding-bottom: 50px;
    }
    :global(.more-info-service-section) {
      width: 85%;
      margin: 60px auto;
      display: flex;
      justify-content: center;
    }
    :global(.more-info-service-section h3) {
      color: #ffc801;
      text-transform: uppercase;
      font-size: 50px;
    }
    :global(.more-info-service-para-container) {
      padding: 20px 0;
      color: #444;
      font-weight: 500;
      word-wrap: break-word;
      display: flex;
      margin-right: 40px;
    }
    :global(.more-info-service-para-container span) {
      margin-right: 10px;
    }
    :global(.more-info-header-and-para) {
      display: flex;
      flex-direction: column;
      max-width: 600px;
    }
    :global(.more-info-image) {
      width: 100%;
      max-width: 650px;
    }
    :global(.more-info-img-container) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
  }

  @media (min-width: 1200px) {
    :global(.more-info-service-section) {
      width: 65%;
      margin: 60px auto;
      display: flex;
      justify-content: center;
    }
  }
</style>
