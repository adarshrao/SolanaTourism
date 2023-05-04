<script>
export default {
  name: "mapProject",
  data() {
    let projectName = "Mango";
    return {
      name: projectName,
      oneLiner: "Margin Trading",
      logo: "mango.png",
      projectDescription:
        "A single venue to lend, borrow, swap, and leverage-trpade crypto assets",
      websiteLink: "https://mango.markets",
      websiteName: "mango.markets",
      launchDate: "2021",
      discord: "https://discord.gg/2uwjsBc5yw",
      twitter: "https://twitter.com/mangomarkets",
      title: `First timer's Guide to ${projectName}  • Solana Tourism`,
      description: `New to Solana? Here's a guide to getting started with ${projectName}`,
    };
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
}
</style>

<template>
  <div class="min-h-screen h-full w-screen bg-black p-8">
    <div
      id="navigation"
      ref="top"
      class="font-bold text-lg pt-8 text-white text-center"
    >
      <router-link to="/">
        <span class="text-white"> SOLANA TOURISM </span>
      </router-link>
    </div>

    <div
      class="
        bg-[#1B1B1B]
        max-w-7xl
        mx-auto
        mt-16
        h-auto
        text-white
        flex flex-col
        sm:grid sm:grid-cols-3
        rounded-xl
        text-lg text-[#999999]
      "
    >
      <div
        id="Navigation"
        class="flex flex-col gap-3 text-gray-400 bg-[#181818] p-12 rounded-xl"
      >
        <div class="mb-4">
          <router-link class="text-white" to="/defi-downtown"
            >&lt;- Back to Defi DownTown</router-link
          >
        </div>

        <div class="flex flex-row">
          <div class="w-14 mr-2">
            <img src="../../assets/logos/mango.png" alt="" />
          </div>
          <div class="flex flex-col">
            <div class="font-bold text-white">{{ this.name }}</div>
            <div class="font-light">{{ this.oneLiner }}</div>
          </div>
        </div>

        <div class="text-sm">
          {{ this.projectDescription }}
        </div>

        <div class="flex flex-col text-sm gap-2 mt-2">
          <div class="flex flex-row items-center">
            <img
              class="w-5 h-auto mr-3"
              src="../../assets/icons/link.png"
              alt=""
            />
            <a class="text-white" target="_blank" :href="this.websiteLink">
              {{ this.websiteName }}</a
            >
          </div>
          <div class="text-white flex flex-row items-center op">
            <img
              class="w-4 h-auto mr-4"
              src="../../assets/icons/calendar.png"
              alt=""
            />
            Launched in {{ this.launchDate }}
          </div>
          <div class="flex flex-row items-center">
            <img
              class="w-5 h-auto mr-3"
              src="../../assets/icons/discord.png"
              alt=""
            />
            <a class="text-white" target="_blank" :href="this.discord">
              Discord
            </a>
          </div>
          <div class="flex flex-row items-center">
            <img
              class="w-5 h-auto mr-3"
              src="../../assets/icons/twitter.png"
              alt=""
            />
            <a class="text-white" target="_blank" :href="this.twitter">
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div class="col-span-2 p-12">
        <div class="text-2xl font-semibold text-white">
          Mango Markets, Trade Crypto like a Pro
        </div>
        <div class="flex flex-row gap-4 text-base">
          <!-- <div>
            guide by <a href="https://twitter.com/adarshrao_">@adarshrao</a>
          </div> -->
          <!-- <div class="">TIP</div> -->
        </div>

        <div>
          <p>
            Mango Markets provides a single venue to lend, borrow, swap, and
            leverage-trade crypto assets through a powerful risk engine.
          </p>

          <p>
            Mango Markets is built on the Solana blockchain and utilises
            OpenBook DEX for spot margin trading while perpetual futures are
            traded on Mango Markets' own order book. Mango Markets is governed
            by MNGO token holders via the Mango DAO.
          </p>
          <p>
            Mango Markets is completely open source and see this transparency as
            vital for the project as it increases the amount of people who
            understand and can improve the project. The DAO frequently sponsors
            grants for developers to extend, integrate with or try to break the
            project.
          </p>

          <div class="text-xl text-white font-semibold pt-4">
            Things to do here — Trade Crypto
          </div>

          <p class="text-lg font-semibold pt-2">Steps</p>
          <ol class="list-decimal ml-4 mb-2">
            <li>
              Go to
              <a target="_blank" href="https://app.mango.markets/"
                >https://app.mango.markets/</a
              >
            </li>
            <li>Connect your Wallet</li>
            <li>Create an Account</li>
            <li>Deposit Sol or USDC</li>
            <li>Visit the SOL-USDC Market</li>
            <li>Place a trade</li>
          </ol>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>