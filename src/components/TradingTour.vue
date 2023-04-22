<script>
import Intro from "./tradingTour_components/Intro.vue";
import Jupiter from "./tradingTour_components/Jupiter.vue";
import Mango from "./tradingTour_components/Mango.vue";
import Drift from "./tradingTour_components/Drift.vue";
import Lifinity from "./tradingTour_components/Lifinity.vue";
import End from "./tradingTour_components/End.vue";

export default {
  name: "Tour",
  data() {
    return {
      current: 0,
      navigation: [
        "Welcome to Solana",
        "Buy Low and Sell High, Jupiter",
        "Trade with leverage, Mango",
        "Trade Perpetual Futures, Drift",
        "Leave trading to a Hedgefund, Lifinity",
        "End of Tour",
      ],
    };
  },
  components: {
    Intro,
    Jupiter,
    Mango,
    Drift,
    Lifinity,
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
        <Jupiter v-if="current == 1" />
        <Mango v-if="current == 2" />
        <Drift v-if="current == 3" />
        <Lifinity v-if="current == 4" />
        <End v-if="current == this.navigation.length - 1" />

        <div v-if="current == this.navigation.length - 1">
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

        <div
          v-if="current != this.navigation.length - 1"
          id="buttons"
          class="flex flex-row mt-8 gap-8"
        >
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