<template>
  <p>Did you install the wallet?</p>

  <p>
    I would highly recommend going back and doing it. The tour is nicer with it!
    And you'll be one step further into becoming a citizen on Solana!
  </p>

  <div></div>

  <p>
    If you have it installed, try connecting by clicking the button below. You
    might need to refresh the page to get it to work.
  </p>

  <div class="flex flex-row">
    <wallet-multi-button></wallet-multi-button>

    <div
      v-if="!continueWithoutWallet"
      class="
        border border-gray-600
        py-3
        px-4
        ml-4
        rounded-lg
        text-white
        place-center
        text-sm
        font-semibold
        cursor-pointer
        hover:opacity-60
      "
      @click="showRemainingContent"
    >
      Explore without Wallet
    </div>
  </div>

  <div v-if="connected">
    <p class="my-4">
      Congratulations on making it past the visa check! Welcome to Solana.
    </p>

    <p class="mb-4">
      You’ve just gotten a taste for how you can access any decentralized app
      across the Solana ecosystem. No need to create and remember usernames or
      passwords. Just press
      <span class="font-bold text-white">Connect</span> on a browser with
      Phantom wallet installed.
    </p>

    <p class="mb-4">Refreshing, isn’t it?</p>
  </div>

  <div class="border-b border-slate-500 mb-12 mt-8"></div>

  <div v-if="continueWithoutWallet || connected">
    <div class="sm:grid sm:grid-cols-2">
      <div>
        <p v-if="!connected">
          It's alright if you haven't installed it or were unable to connect.
          The tour goes on!
        </p>

        <p class="mb-4">
          When you click on the phantom icon on your browser, you’ll notice that
          it says $0.00. That’s because you’ve claimed a free available address
          on Solana but it doesn’t have any money in it yet.
        </p>
        <p class="mb-4">
          While visiting all of todays attractions is free, in order to actually
          go inside and explore you will need Solana’s native currency called
          <strong>SOL </strong>
        </p>

        <p>Right now, the price of 1 Sol is ${{ solPrice }}</p>

        <p class="mb-4">
          But you don't need a full SOL. Taking an action on Solana usually only
          costs a minimum of 0.00005 Sol = $
          {{ (0.00005 * solPrice).toFixed(4) }}.
        </p>

        <p>Basically free.</p>
      </div>

      <div>
        <img
          class="my-4 pl-4"
          src="../../assets/product/backpackEmpty.png"
          alt="Untitled"
        />
      </div>
    </div>

    <div class="border-b border-slate-500 mb-12 mt-8"></div>

    <p class="mb-4">
      To get the most out of today’s tour, I recommend having 0.05 SOL ~= ${{
        (0.05 * solPrice).toFixed(2)
      }}
    </p>

    <div class="text-2xl font-bold mt-8 mb-4 text-white">
      How to get your first 0.05 Sol
    </div>

    <p>Converting a real life $ to SOL is unfortunately still a challenge.</p>

    <p>
      The quickest way to get 0.05 Sol to get started is ..... to ask a friend
      already using Solana. If they're anything like me, they'll be excited that
      you're checking Solana out and gladly send 0.05 Sol to your wallet
      address.
    </p>

    <p class="italic pb-4">
      Don't know anybody like that? Let us help you out! :) Tweet/DM at
      <a target="_blank" href="https://twitter.com/SolanaTourism">
        @SolanaTourism
      </a>
      with your wallet address and we'll be happy to send SOL to get you
      started.
    </p>

    <div class="text-2xl font-bold mt-4 mb-4 text-white">
      Tweet to get a 0.001 Sol
    </div>

    <p>Faucets are websites that send you free SOL.</p>

    <p>
      Try this one by Stakely —
      <a href="https://stakely.io/en/faucet/solana-sol"> Click here</a>
    </p>

    <div class="text-2xl font-semibold mt-8 text-white">
      Don't mind spending $?
    </div>

    <!-- <p>If you are the first 1000 people reading this guide —</p>
      <ul class="list-decimal ml-4">
        <li>
          <strong>Tweet your Wallet Address</strong> tagging @SolanaCityGuide
          and you’ll be sent 0.01 Sol to get started
          <ul>
            <li>Example “@SolanaTourism aldiv42div428934hl”</li>
          </ul>
        </li>
        <li>
          <strong>Post your wallet address in the #sponsor channel</strong> on
          the SolanaTourism discord channel
          <ul>
            <li>Link to Discord</li>
          </ul>
        </li>
      </ul> -->
    <p class="mb-16">
      If neither of the above options work for you, fret not because you still
      have a couple of other options.
    </p>

    <!-- <p>
      Purchase through Phantom with a credit card (mininum $50).
      <a
        href="https://help.phantom.app/hc/en-us/articles/4406543783571-Where-can-I-buy-Solana-SOL-#:~:text=Firstly%20you%20must%20open%20up,Coinbase%20Pay%20or%20MoonPay%20option."
        >Here's a link to a guide.</a
      >
    </p> -->

    <p>
      Create an account on an exchange like Coinbase, Kraken and Binance,
      purchase SOL with a credit card there and send it from there to your
      wallet.
      <a
        href="https://medium.com/@defidecrypted/how-to-transfer-funds-to-solana-for-the-first-time-86ec5717630b"
        >Guide to buying from Coinbase</a
      >
    </p>

    <p class="italic text-white/[.5]">
      Funding the wallet is not strictly necessary. You can still look around.
      But if you choose not to, it’ll be the equivalent of travelling to a new
      city and never leaving the cab taking you around. The buildings are pretty
      from the outside but …. you’ve come this far might as well go inside.
    </p>

    <div class="border-b border-slate-500 mb-8 mt-8"></div>

    <p>
      Once you've funded your wallet (or chosen not to), click below to move on.
    </p>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 16px;
  margin-top: 16px;
}
</style>

<script>
import axios from "axios";

import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  BackpackWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { initWallet, useWallet } from "solana-wallets-vue";
import { WalletMultiButton } from "solana-wallets-vue";

const wallets = [new BackpackWalletAdapter()];

initWallet({ wallets, autoConnect: true });

const data = useWallet();

const { connected } = useWallet();

export default {
  name: "App",
  data() {
    return {
      connected,
      solPrice: 25,
      continueWithoutWallet: false,
    };
  },
  components: {
    WalletMultiButton,
  },
  mounted() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
      )
      .then((response) => (this.solPrice = response.data.solana.usd))
      .catch((error) => console.log(error));
  },

  methods: {
    showRemainingContent() {
      this.continueWithoutWallet = true;
    },
  },
};
</script>
