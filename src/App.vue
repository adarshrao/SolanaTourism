<script>
import { marked } from "marked";
import Introduction from "./components/Introduction.vue";
import Home from "./components/Home.vue";
import Tour from "./components/Tour.vue";
import NFTTown from "./components/NFTTown.vue";

export default {
  name: "App",
  data() {
    return {
      count: 0,
      title: "Solana Tourism • Learn about Solana",
      description:
        "The best website to begin learning about Solana and everything you can do here",
    };
  },
  components: {
    Introduction,
    Home,
    Tour,
    NFTTown,
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          name: "description",
          content: this.description,
        },
        {
          name: "twitter:card",
          content: "summary_large_image2",
        },
        {
          name: "twitter:title",
          content: this.title,
        },
        {
          name: "twitter:creator",
          content: "@SolanaTourism",
        },
        {
          name: "twitter:description",
          content: this.description,
        },
        {
          name: "og:title",
          content: this.title,
        },
        {
          name: "og:description",
          content: this.description,
        },
      ],
    };
  },
};
</script>

<template>
  <router-view />
  <div class="">
    <!-- <Introduction /> -->
    <!-- <Home /> -->
    <!-- <Tour /> -->
    <!-- <NFTTown /> -->
  </div>
</template>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
