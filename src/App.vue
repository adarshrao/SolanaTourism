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
};
</script>

<template>
  <div class="">
    <!-- <Introduction /> -->
    <!-- <Home /> -->
    <!-- <Tour /> -->
    <NFTTown />
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
