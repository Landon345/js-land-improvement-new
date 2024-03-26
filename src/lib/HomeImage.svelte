<script>
  import { link } from "svelte-routing";

  export let imgsrc;
  export let imgalt;
  export let header;
  export let para;
  export let linkto;
</script>

<a use:link href="{linkto}">
  <img src="{imgsrc}" alt="{imgalt}" class="home-img" loading="lazy" />
  <h4>{header}</h4>
  <p>{para}</p>
</a>

<style>
  a {
    text-decoration: none;
    color: #222222;
  }
  .home-img {
    width: 100%;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
    margin: 60px 0 20px 0;
  }
  h4 {
    text-align: left;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  @media (min-width: 900px) {
    .home-img {
      width: 85%;
    }
    h4,
    p {
      width: 85%;
    }
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
</style>
