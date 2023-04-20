<script>
import Phantom from "./tour_components/Phantom.vue";
import Funding from "./tour_components/Funding.vue";
import Intro from "./tour_components/Intro.vue";
import Jupiter from "./tour_components/Jupiter.vue";
import Solend from "./tour_components/Solend.vue";
import Marinade from "./tour_components/Marinade.vue";
import Magiceden from "./tour_components/Magiceden.vue";
import Frakt from "./tour_components/Frakt.vue";
import End from "./tour_components/End.vue";

export default {
  name: "Tour",
  data() {
    return {
      current: 0,
      showIntro: false,
      showPhantom: false,
      showFunding: false,
      showJupiter: false,
      showSolend: false,
      showMarinade: false,
      showMagiceden: false,
      showFrakt: false,
      navigation: [
        "Welcome to Solana",
        "Getting your visa, Phantom",
        "Funding your wallet",
        "Currency Exchange, Jupiter",
        "Bank, Solend",
        "Law and Order, Marinade",
        "Art Marketplace, MagicEden",
        "NFT Bank, Frakt",
        "End of Tour",
      ],
    };
  },
  components: {
    Intro,
    Funding,
    Phantom,
    Jupiter,
    Solend,
    Marinade,
    Magiceden,
    Frakt,
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
      if (this.current < 7) {
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
        <span> SOLANA TOURISM</span>
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
        <Phantom v-if="current == 1" />
        <Funding v-if="current == 2" />
        <Jupiter v-if="current == 3" />
        <Solend v-if="current == 4" />
        <Marinade v-if="current == 5" />
        <Magiceden v-if="current == 6" />
        <Frakt v-if="current == 7" />
        <End v-if="current == 8" />

        <div v-if="current == 8">
          <router-link to="/">
            <div
              v-if="current != 0"
              class="
                bg-white
                px-4
                py-2
                rounded-md
                cursor-pointer
                text-black
                font-semibold
                hover:bg-white/75
                w-max
                mt-8
              "
              @click="goBack"
            >
              End Tour
            </div>
          </router-link>
        </div>

        <div v-if="current != 8" id="buttons" class="flex flex-row mt-8 gap-8">
          <div
            v-if="current != 0"
            class="
              bg-white
              px-4
              py-2
              rounded-md
              cursor-pointer
              text-black
              font-semibold
              hover:bg-white/75
            "
            @click="goBack"
          >
            &lt;- Prev
          </div>
          <div
            class="
              bg-white
              px-4
              py-2
              rounded-md
              cursor-pointer
              text-black
              font-semibold
              hover:bg-white/75
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
            Welcome to Solana
          </div>
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(1)"
            :class="{ class1: current == 1 }"
          >
            Getting your visa, Phantom
          </div>
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(2)"
            :class="{ class1: current == 2 }"
          >
            Funding your wallet
          </div>
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(3)"
            :class="{ class1: current == 3 }"
          >
            Currency Exchange, Jupiter
          </div>
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(4)"
            :class="{ class1: current == 4 }"
          >
            Bank, Solend
          </div>
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(5)"
            :class="{ class1: current == 5 }"
          >
            Law and Order, Marinade
          </div>
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(6)"
            :class="{ class1: current == 6 }"
          >
            Art Marketplace, MagicEden
          </div>
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(7)"
            :class="{ class1: current == 7 }"
          >
            NFT Bank, Frakt
          </div>
          <div
            class="cursor-pointer hover:opacity-60"
            @click="teleport(8)"
            :class="{ class1: current == 8 }"
          >
            End of Tour
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
p {
  margin-bottom: 16px;
  margin-top: 16px;
}
</style>