import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Tour from "./components/Tour.vue";
import TradingTour from "./components/TradingTour.vue";
import NFTTown from "./components/NFTTown.vue";
import DeFiDownTown from "./components/DeFiDownTown.vue";
import Tensor from "./components/projects/Tensor.vue";
import Mango from "./components/projects/Mango.vue";
import Drift from "./components/projects/Drift.vue";
import Magiceden from "./components/projects/Magiceden.vue";

import "./assets/style.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/tour",
      component: Tour,
    },
    {
      path: "/trading-tour",
      component: TradingTour,
    },
    {
      path: "/nft-square",
      component: NFTTown,
    },
    {
      path: "/defi-downtown",
      component: DeFiDownTown,
    },
    {
      path: "/tensor",
      component: Tensor,
    },
    {
      path: "/mango",
      component: Mango,
    },
    {
      path: "/drift",
      component: Drift,
    },
    {
      path: "/magiceden",
      component: Magiceden,
    },
  ],
});

createApp(App).use(router).mount("#app");
