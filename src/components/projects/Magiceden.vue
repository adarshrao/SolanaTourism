<script>
export default {
  name: "mapProject",
  data() {
    let projectName = "Magic Eden";
    return {
      name: projectName,
      oneLiner: "Ebay for art",
      logo: "magicEden.png",
      projectDescription: "Marketplace to buy, sell and trade NFTs",
      websiteLink: "https://magiceden.io/",
      websiteName: "magiceden.io",
      launchDate: "2021",
      discord: "https://discord.gg/magiceden",
      twitter: "https://twitter.com/MagicEden",
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
            >&lt;- Back to NFT Square</router-link
          >
        </div>

        <div class="flex flex-row">
          <div class="w-14 mr-2">
            <img src="../../assets/logos/magicEden.png" alt="" />
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
          <div class="flex flex-row items-center">
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
          Magic Eden, an NFT Marketplace
        </div>
        <div class="flex flex-row gap-4 text-base"></div>

        <div>
          <p>Magic Eden is a marketplace to buy and sell NFTs</p>

          <div class="text-xl text-white font-semibold">
            Things to do here — Buy an NFT
          </div>

          <p class="text-lg font-semibold pt-2">Steps</p>
          <ol class="list-decimal ml-4">
            <li>
              Visit Magic Eden at
              <a target="_blank" href="https://magiceden.io/"
                >https://magiceden.io/</a
              >
            </li>
            <li>Click Connect Wallet on the Top Right</li>
            <li>Click Accept on the popup that shows up</li>
            <li>Look around for an NFT</li>
            <li>Click Buy</li>
            <li>Accept the transaction that shows up</li>
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