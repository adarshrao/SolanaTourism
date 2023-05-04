<script>
import Intro from "./hustleTour_components/Intro.vue";
import NFTSpeculation from "./hustleTour_components/NFTSpeculation.vue";
import YieldFarming from "./hustleTour_components/YieldFarming.vue";
import MEVArbitrage from "./hustleTour_components/MEVArbitrage.vue";
import TradingCrypto from "./hustleTour_components/TradingCrypto.vue";
import End from "./hustleTour_components/End.vue";

export default {
  name: "Tour",
  data() {
    return {
      current: 0,
      navigation: [
        "Hustler's Guide to Solana",
        "NFT Speculators",
        "Yield Farming",
        "MEV Arbitrage",
        "Trading Crypto",
        "End of Tour",
      ],
      title: "Hustler's Guide to Solana • Solana Tourism",
      description:
        "Learn some of the ways in which citizens of Solana make a living",
    };
  },
  components: {
    Intro,
    NFTSpeculation,
    YieldFarming,
    MEVArbitrage,
    TradingCrypto,
    End,
  },
  methods: {
    goBack() {
      if (this.current != 0) {
        this.current += -1;
        setTimeout(() => {
          console.log("This is running");
          this.$refs["top"].scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    },
    goNext() {
      if (this.current < this.navigation.length - 1) {
        this.current += 1;

        setTimeout(() =>
          this.$refs["top"].scrollIntoView({ behavior: "smooth" })
        );
      }
    },
    teleport(x) {
      this.current = x;
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
          content: "summary_large_image",
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
          property: "og:title",
          content: this.title,
        },
        {
          property: "og:description",
          content: this.description,
        },
      ],
    };
  },
};
</script>


<style scoped>
.class1 {
  color: white;
  opacity: 100%;
}
</style>




<template>
  <div class="min-h-screen h-full w-screen bg-black sm:p-8">
    <div
      id="navigation"
      ref="top"
      class="font-bold text-lg text-white text-center pt-8"
    >
      <router-link to="/">
        <span class="text-white"> SOLANA TOURISM</span>
      </router-link>
    </div>

    <div
      class="
        bg-[#1B1B1B]
        w-100vw
        sm:max-w-7xl sm:mx-auto sm:mt-16
        h-auto
        text-white
        flex flex-col-reverse
        mt-4
        sm:grid sm:grid-cols-3
        rounded-xl
        text-lg text-[#999999]
      "
    >
      <div class="sm:col-span-2 pt-0 p-8 sm:p-12">
        <Intro v-if="current == 0" />
        <NFTSpeculation v-if="current == 1" />
        <YieldFarming v-if="current == 2" />
        <MEVArbitrage v-if="current == 3" />
        <TradingCrypto v-if="current == 4" />
        <End v-if="current == this.navigation.length - 1" />

        <div v-if="current == this.navigation.length - 1">
          <router-link to="/">
            <div
              v-if="current != 0"
              class="
                px-4
                py-2
                rounded-md
                cursor-pointer
                font-regular
                w-max
                mt-8
                text-white
                bg-gradient-to-b
                from-[#8D2457]
                to-[#721C46]
                hover:from-[#8D2457]/90 hover:to-[#721C46]/90
              "
              @click="goBack"
            >
              End Tour
            </div>
          </router-link>
        </div>

        <div
          v-if="current != this.navigation.length - 1"
          id="buttons"
          class="flex flex-row mt-16 gap-4"
        >
          <div
            v-if="current != 0"
            class="
              px-4
              py-2
              rounded-md
              cursor-pointer
              font-regular
              text-white
              bg-[#313131]
              hover:bg-[#313131]/80
            "
            @click="goBack"
          >
            &lt;- Prev
          </div>
          <div
            class="
              px-4
              py-2
              rounded-md
              cursor-pointer
              font-regular
              text-white
              bg-gradient-to-b
              from-[#8D2457]
              to-[#721C46]
              hover:from-[#8D2457]/90 hover:to-[#721C46]/90
            "
            @click="goNext"
          >
            Continue Tour ->
          </div>
        </div>
      </div>
      <div
        id="Navigation"
        class="flex flex-col gap-3 text-gray-400 bg-[#181818] p-8"
      >
        <div class="flex flex-row justify-between sm:hidden">
          <div>
            Stop {{ this.current + 1 }} : {{ this.navigation[this.current] }}
          </div>
          <!-- <div>Expand</div> -->

          <div class="border-b"></div>
        </div>

        <div
          class="hidden sm:flex sm:flex-col gap-3 text-gray-400 bg-[#181818]"
        >
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(0)"
            :class="{ class1: current == 0 }"
          >
            {{ this.navigation[0] }}
          </div>
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(1)"
            :class="{ class1: current == 1 }"
          >
            {{ this.navigation[1] }}
          </div>
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(2)"
            :class="{ class1: current == 2 }"
          >
            {{ this.navigation[2] }}
          </div>
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(3)"
            :class="{ class1: current == 3 }"
          >
            {{ this.navigation[3] }}
          </div>
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(4)"
            :class="{ class1: current == 4 }"
          >
            {{ this.navigation[4] }}
          </div>
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(5)"
            :class="{ class1: current == 5 }"
          >
            {{ this.navigation[5] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
p {
  margin-bottom: 32px;
  margin-top: 32px;
}
</style>