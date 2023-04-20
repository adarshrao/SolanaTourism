<script>
export default {
  name: "mapProject",
  data() {
    return {
      name: "Drift",
      oneLiner: "On-Chain Perpetual & Spot Trading with Leverage",
      logo: "drift.png",
      description:
        "Drift is a decentralized trading platform giving you more leverage on your capital.",
      websiteLink: "https://www.drift.trade/",
      launchDate: "2021",
      discord: "https://discord.com/invite/fMcZBH8ErM",
      twitter: "https://twitter.com/driftprotocol",
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
      class="font-bold text-lg text-white text-center"
    >
      <router-link to="/">
        <span> SOLANA </span> <br />
        <span class="">TOURISM </span>
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
          <router-link to="/defi-downtown"
            >&lt;- Back to DeFi Downtown</router-link
          >
        </div>

        <div class="flex flex-row">
          <div class="w-14 mr-2">
            <img src="../../assets/logos/drift.png" alt="" />
          </div>
          <div class="flex flex-col">
            <div class="font-bold text-white">{{ this.name }}</div>
            <div class="font-light">{{ this.oneLiner }}</div>
          </div>
        </div>

        <div class="text-sm">
          {{ this.description }}
        </div>

        <div class="flex flex-col text-sm gap-2 mt-2">
          <div class="flex flex-row items-center">
            <img
              class="w-5 h-max mr-3"
              src="../../assets/icons/link.png"
              alt=""
            />
            <a target="_blank" :href="this.websiteLink">
              {{ this.websiteLink }}</a
            >
          </div>
          <div class="flex flex-row items-center">
            <img
              class="w-4 h-max mr-4"
              src="../../assets/icons/calendar.png"
              alt=""
            />
            Launched in {{ this.launchDate }}
          </div>
          <div class="flex flex-row items-center">
            <img
              class="w-5 h-max mr-3"
              src="../../assets/icons/discord.png"
              alt=""
            />
            <a target="_blank" :href="this.discord"> Discord </a>
          </div>
          <div class="flex flex-row items-center">
            <img
              class="w-5 h-max mr-3"
              src="../../assets/icons/twitter.png"
              alt=""
            />
            <a target="_blank" :href="this.twitter"> Twitter </a>
          </div>
        </div>
      </div>

      <div class="col-span-2 p-12">
        <div class="text-2xl font-semibold text-white">
          Drift, on chain perpetuals
        </div>
        <div class="flex flex-row gap-4 text-base">
          <div>
            guide by <a href="https://twitter.com/adarshrao_">@adarshrao</a>
          </div>
          <!-- <div class="">TIP</div> -->
        </div>

        <div>
          <p>
            Drift Protocol is an open-sourced, decentralised exchange built on
            the Solana blockchain, enabling transparent and non-custodial
            trading on cryptocurrencies.
          </p>

          <p>
            By depositing collateral into Drift Protocol, users can: trade
            perpetual swaps with up to 10x leverage, borrow or lend at variable
            rate yields, stake / provide liquidity, swap spot tokens
          </p>
          <p>
            The full suite of DeFi tools within the protocol are powered by
            Drift's robust cross-margined risk engine, designed to give traders
            a balance of both capital efficiency and protection
          </p>

          <div class="text-xl text-white font-semibold">
            Things to do here — Trade Perpetuals
          </div>

          <p class="text-lg font-semibold pt-2">Steps</p>
          <ol class="list-decimal ml-4 mb-2">
            <li>
              Go to
              <a target="_blank" href="https://marinade.finance/app/staking/"
                >https://app.drift.trade/</a
              >
            </li>
            <li>Connect your Wallet → Creat an Account</li>
            <li>Deposit Sol or USDC</li>
            <li>Navigate to the SOL-PERP Market</li>
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