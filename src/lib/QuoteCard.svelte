<script>
  import QuoteIcon from "../assets/quote-circle.png";
  export let quote;
  export let name;
</script>

<div class="quote-card">
  <img src="{QuoteIcon}" alt="quote" class="quote" />
  <div style="width: 100%;">
    <p class="quote-text">
      {quote}
    </p>
    <p class="quote-name">
      - {name}
    </p>
  </div>
</div>

<style>
  .quote {
    position: relative;
    top: -35px;
    width: 50px;
    object-fit: contain;
    transform: rotate(180deg);
  }
  .quote-text {
    font-size: 18px;
    text-align: left;
    margin: 5px 30px 20px 30px;
    color: #666;
  }
  .quote-name {
    font-size: 1rem;
    font-weight: 700;
    text-align: left;
    margin: 40px 0 30px 30px;
    color: #666;
  }
  .quote-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border: 1px solid #eee;
    border-radius: 4px;
    margin: 16px 0;
    width: 80%;
    margin: 30px auto;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 900px) {
    .quote-card {
      width: 70%;
    }
  }
</style>
