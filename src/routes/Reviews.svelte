<script lang="ts">
  import QuoteCard from "../lib/QuoteCard.svelte";

  interface Quote {
    quote: string;
    name: string;
  }
  const quotes: Quote[] = [
    {
      quote:
        "These guys do awesome work! They were on time, listened to what I wanted done, cleaned up after themselves and left the place looking amazing! I never imagined the work they did could be done in a short amount of time, but it was done!! will definitely be using them for all future projects!",
      name: "Alisha R.",
    },
    {
      quote:
        "Jonas is always on time, explains what is included, gives a quote and sticks to it. He completes all work in a timely manner and it always looks great. This is the second time we have used his services. He will be back many more as we have a lot to do. I have also given is name to family and friends, that’s how confident I am in the work he does.",
      name: "Ted S.",
    },
    {
      quote:
        "Absolutely one the most proffesional and hard working young men i have had the pleasure meet and deal with. He showed up on time completed on time and came in within 10% of our budget . His work exceeded our expectations, his attention to the maps provided and the communication ongoing was second to none. I wish i could adopt him, he listens and pays attention so well. Hire this man you wont be sorry",
      name: "Bruce H.",
    },

    {
      quote:
        "These guys rock! They came to my farmstead and cleaned up all the overgrown weeds this summer and gave me a lower price than agreed upon because it took less time than they figured! You will not be disappointed if you call them up.",
      name: "Blaine S.",
    },
    {
      quote:
        "They came out and cleared about 2.5 acres of our property! We are very thankful, and my wife and I love how amazing a job they did! They were absolutely professional and very affordable!",
      name: "Brent G.",
    },
    {
      quote:
        "I am totally happy with the workmanship, friendliness, and cost of the work I had done. Would definitely hire them again and recommend them.",
      name: "Susan L.",
    },
    {
      quote:
        "They were on time, on budget, and great communicators. We give them an A+",
      name: "Chad N.",
    },
    {
      quote:
        "Prompt, professional, fair pricing and work met our expectations, would recommend!",
      name: "Kari D.",
    },
    {
      quote:
        "Jonas went above and beyond and did an amazing job! I would hire him again.",
      name: "Barb L.",
    },
    {
      quote:
        "The Plainsmen black Powder Club of Fargo/Moorhead hired them to rebuild our trail into our shooting range, including recontouring and laying crushed asphalt. They did an awesome job. Very Courteous, quick and reasonable. You won’t go wrong hiring them. And they keep in communication! Thank you!",
      name: "Plainsman Black Powder Club",
    },
  ];
</script>

<svelte:head>
  <title>Reviews | JS Land Improvement</title>
</svelte:head>

<main>
  <div class="page-header">
    <div class="header-text">
      <h1>REVIEWS</h1>
      <h3>WE'RE PROUD OF THE WORK WE'VE DONE.</h3>
    </div>
  </div>

  <div class="page-container">
    {#each quotes as quote}
      <QuoteCard quote="{quote.quote}" name="{quote.name}" />
    {/each}
  </div>
</main>

<style>
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
  }
</style>
