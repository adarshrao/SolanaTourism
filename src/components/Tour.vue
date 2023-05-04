<script>
import Phantom from "./tour_components/Phantom.vue";
import Backpack from "./tour_components/Backpack.vue";
import Funding from "./tour_components/Funding.vue";
import Intro from "./tour_components/Intro.vue";
import Jupiter from "./tour_components/Jupiter.vue";
import Solend from "./tour_components/Solend.vue";
import Tribe from "./tour_components/Tribe.vue";
import Marinade from "./tour_components/Marinade.vue";
import Magiceden from "./tour_components/Magiceden.vue";
import Tensor from "./tour_components/Tensor.vue";
import Frakt from "./tour_components/Frakt.vue";
import End from "./tour_components/End.vue";

export default {
  name: "Tour",
  data() {
    return {
      current: 0,
      navigation: [
        "Welcome to Solana",
        "Getting your visa, Phantom",
        "Funding your wallet",
        "Currency Exchange, Jupiter",
        "Bank, Solend",
        "Find your Tribe, Superteam",
        "Law and Order, Marinade",
        "Art Marketplace, Tensor",
        "NFT Bank, Frakt",
        "End of Tour",
      ],
      components: [Intro, Funding, Phantom],
      title: "First timer's Guide to Solana • Solana Tourism",
      description:
        "First time in Solana City? Get a tour of the best projects in Solana",
    };
  },
  components: {
    Intro,
    Funding,
    Backpack,
    Phantom,
    Jupiter,
    Solend,
    Tribe,
    Marinade,
    Tensor,
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
      if (this.current < this.navigation.length + 1) {
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
      <div class="sm:col-span-2 pt-0 p-8 sm:p-12 rounded-xl bg-[#1B1B1B]">
        <Intro v-if="current == 0" />
        <Phantom v-if="current == 1" />
        <Funding v-if="current == 2" />
        <Jupiter v-if="current == 3" />
        <Solend v-if="current == 4" />
        <Tribe v-if="current == 5" />
        <Marinade v-if="current == 6" />
        <Tensor v-if="current == 7" />
        <Frakt v-if="current == 8" />
        <End v-if="current == 9" />

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
            &lt;- Back
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
        class="flex flex-col gap-3 text-gray-400 p-8 bg-[#181818]"
      >
        <!-- sm:bg-black sm:pl-8 sm:pt-0 -->

        <div class="flex flex-row justify-between sm:hidden">
          <div>
            Stop {{ this.current + 1 }} : {{ this.navigation[this.current] }}
          </div>

          <div class="border-b"></div>
        </div>

        <div class="hidden sm:flex sm:flex-col gap-3 text-gray-400">
          <!-- text-base -->
          <div
            v-for="item in this.navigation"
            class="cursor-pointer hover:opacity-60"
            @click="teleport(this.navigation.indexOf(item))"
            :class="{ class1: current == this.navigation.indexOf(item) }"
            :key="{ item }"
          >
            {{ item }}
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