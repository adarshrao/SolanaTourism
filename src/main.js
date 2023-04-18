import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Tour from "./components/Tour.vue";
import NFTTown from "./components/NFTTown.vue";
import Tensor from "./components/Tensor.vue";
import DeFiDownTown from "./components/DeFiDownTown.vue";

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
  ],
});

createApp(App).use(router).mount("#app");
