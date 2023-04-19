<script>
export default {
  name: "mapProject",
  data() {
    return {
      name: "Tensor",
      oneLiner: "Amazon for art",
      logo: "tensor.png",
      description: "Tensor is Marketplace to buy and sell NFTs",
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
        <span> SOLANA </span> <br />
        <span class="">TOURISM </span>
      </router-link>
    </div>

    <div
      class="
        bg-[#1B1B1B]
        w-100vw
        mx-32
        mt-16
        h-auto
        text-white
        grid grid-cols-3
        rounded-xl
        text-lg text-[#999999]
      "
    >
      <div
        id="Navigation"
        class="flex flex-col gap-3 text-gray-400 bg-[#181818] p-12 rounded-xl"
      >
        <div class="mb-4">
          <router-link to="/nft-square">&lt;- Back to NFT Town</router-link>
        </div>

        <div class="flex flex-row">
          <div class="w-14 mr-2"><img src="../assets/tensor.png" alt="" /></div>
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
            <img class="w-5 h-max mr-3" src="../assets/icons/link.png" alt="" />
            <a target="_blank" :href="this.websiteLink">
              {{ this.websiteLink }}</a
            >
          </div>
          <div class="flex flex-row items-center">
            <img
              class="w-4 h-max mr-4"
              src="../assets/icons/calendar.png"
              alt=""
            />
            Launched in {{ this.launchDate }}
          </div>
          <div class="flex flex-row items-center">
            <img
              class="w-5 h-max mr-3"
              src="../assets/icons/discord.png"
              alt=""
            />
            <a target="_blank" :href="this.discord"> Discord </a>
          </div>
          <div class="flex flex-row items-center">
            <img
              class="w-5 h-max mr-3"
              src="../assets/icons/twitter.png"
              alt=""
            />
            <a target="_blank" :href="this.twitter"> Twitter </a>
          </div>
        </div>
      </div>

      <div class="col-span-2 p-12">
        <div class="text-2xl font-semibold text-white">
          Tensor, an NFT Marketplace
        </div>
        <div class="flex flex-row gap-4 text-base">
          <div>
            guide by <a href="https://twitter.com/adarshrao_">@adarshrao</a>
          </div>
          <!-- <div class="">TIP</div> -->
        </div>

        <div>
          <p>
            Tensor is the latest addition to the world of NFT marketplaces, but
            what sets it apart from the rest is its built-in integration with
            the Solana blockchain. Leveraging the high-speed and low-cost
            benefits of Solana, Tensor offers a seamless and intuitive trading
            experience for NFT enthusiasts.
          </p>

          <p>
            One of the biggest challenges with existing NFT marketplaces is the
            high gas fees associated with transactions, which often deter users
            from trading frequently. However, Tensor solves this problem by
            enabling lightning-fast transactions at a fraction of the cost.
          </p>
          <p>
            One of the biggest challenges with existing NFT marketplaces is the
            high gas fees associated with transactions, which often deter users
            from trading frequently. However, Tensor solves this problem by
            enabling lightning-fast transactions at a fraction of the cost.
          </p>
          <p>
            One of the biggest challenges with existing NFT marketplaces is the
            high gas fees associated with transactions, which often deter users
            from trading frequently. However, Tensor solves this problem by
            enabling lightning-fast transactions at a fraction of the cost.
          </p>

          <div class="text-xl text-white font-semibold">Things to do here</div>

          <p class="text-lg font-semibold pt-2">Steps</p>
          <ol class="list-decimal ml-4 mb-2">
            <li>
              Go to
              <a target="_blank" href="https://marinade.finance/app/staking/"
                >https://marinade.finance/app/staking/</a
              >
            </li>
            <li>Connect your Wallet → Select Phantom</li>
            <li>Enter 0.001 Sol</li>
            <li>Click “Stake Sol”</li>
            <li>Approve Transaction</li>
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