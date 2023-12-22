import { createApp } from "vue";

// import Vue from "vue";
import App from "./App.vue";
// import { createMetaManager } from "vue-meta";

import { createHead, VueHeadMixin } from "@unhead/vue";

import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Spend from "./components/Spend.vue";
import Tour from "./components/Tour.vue";
import F404 from "./components/F404.vue";
import TradingTour from "./components/TradingTour.vue";
import HustleTour from "./components/HustleTour.vue";
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
      path: "/spend",
      component: Spend,
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
      path: "/hustle-tour",
      component: HustleTour,
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
    {
      path: "/:pathMatch(.*)*",
      component: F404,
    },
  ],
});

const head = createHead();

createApp(App).mixin(VueHeadMixin).use(head).use(router).mount("#app");
