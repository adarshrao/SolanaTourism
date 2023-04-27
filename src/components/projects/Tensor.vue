<script>
export default {
  name: "mapProject",
  data() {
    return {
      name: "Tensor",
      oneLiner: "Pro NFT Trading on Solana",
      logo: "tensor.png",
      description:
        "Tensor's mission is to become the trading venue for the pro-NFT trader.",
      websiteLink: "https://tensor.trade",
      launchDate: "2022",
      discord: "https://discord.gg",
      twitter: "https://twitter.com",
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
          <router-link class="text-white" to="/nft-square"
            >&lt;- Back to NFT Town</router-link
          >
        </div>

        <div class="flex flex-row">
          <div class="w-14 mr-2">
            <img src="../../assets/tensor.png" alt="" />
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
              class="w-5 h-auto mr-3"
              src="../../assets/icons/link.png"
              alt=""
            />
            <a class="text-white" target="_blank" :href="this.websiteLink">
              {{ this.websiteLink }}</a
            >
          </div>
          <div class="text-white flex flex-row items-center">
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
          Tensor, an NFT Marketplace
        </div>
        <div class="flex flex-row gap-4 text-base">
          <!-- <div class="">TIP</div> -->
        </div>

        <div>
          <p>
            Tensor is NFT Trading for Pros - a pro venue for trading NFTs on
            Solana that is 1) the fastest, 2) has the broadest coverage and 3)
            offers the best execution.
          </p>

          <div class="text-xl text-white font-semibold">
            Things to do here — Trade an NFT
          </div>

          <p class="text-lg font-semibold pt-2">Steps</p>
          <ol class="list-decimal ml-4 mb-2">
            <li>
              Go to
              <a target="_blank" href="https://tensor.trade/"
                >https://tensor.trade/</a
              >
            </li>
            <li>Connect your Wallet</li>
            <li>Find an NFT collection you like</li>
            <li>Place a bid</li>
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