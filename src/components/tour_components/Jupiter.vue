<template>
  <p class="">Did you fund your wallet or were you hesitant to do so?</p>

  <p>
    I actually don't have to ask. I can just search the Solana blockchain with
    your wallet address to see if you have funded it with money or not. Don't
    worry though, I only have view access. Blockchains are transparent and you
    can see just how many tokens every wallet contains.
  </p>

  <div
    class="text-2xl mt-8 font-semibold text-[#ebebeb]"
    id="tokens-currencies-what"
  >
    What is a blockchain and why is it transparent?
  </div>

  <p>
    At its simplest, a blockchain consists of just one table, a list of accounts
    and how many tokens each account has.
  </p>

  <div class="border-b my-8 border-white/20"></div>

  <table class="text-left mt-2 mb-4 border-separate border-spacing-x-6 -ml-6">
    <tr>
      <th>Account</th>
      <th>Tokens</th>
    </tr>
    <tr class="mr-8">
      <td>A</td>
      <td>100</td>
    </tr>
    <tr>
      <td>B</td>
      <td>10</td>
    </tr>
    <tr>
      <td>C</td>
      <td>0</td>
    </tr>
  </table>

  <div class="border-b my-8 border-white/20"></div>

  <p>
    Whenever, an account sends tokens to another account, it is recorded as a
    'transaction'. Lets say A sends B 20 tokens. This information is recorded in
    a 'block' and the table values are updated.
  </p>

  <p>Block 1 : A sent B 20 tokens</p>
  <p></p>

  <table class="text-left mt-2 mb-4 border-separate border-spacing-x-6 -ml-6">
    <tr>
      <th>Account</th>
      <th>Tokens</th>
    </tr>
    <tr class="mr-8">
      <td>A</td>
      <td>80</td>
    </tr>
    <tr>
      <td>B</td>
      <td>30</td>
    </tr>
    <tr>
      <td>C</td>
      <td>0</td>
    </tr>
  </table>

  <div class="border-b my-8 border-white/20"></div>

  <p>Lets say A sends another 30 tokens to B</p>

  <p>
    Block 2 : A sent B 30 tokens <br />
    Block 1 : A sent B 20 tokens
  </p>
  <p></p>

  <table class="text-left mt-2 mb-4 border-separate border-spacing-x-6 -ml-6">
    <tr>
      <th>Account</th>
      <th>Tokens</th>
    </tr>
    <tr class="mr-8">
      <td>A</td>
      <td>50</td>
    </tr>
    <tr>
      <td>B</td>
      <td>60</td>
    </tr>
    <tr>
      <td>C</td>
      <td>0</td>
    </tr>
  </table>

  <div class="border-b my-8 border-white/20"></div>

  <p>
    In a blockchain, not only is the latest balance stored but so are all the
    blocks. Forever. So given the current state of the table and all the
    historical transactions that have taken place, you can actually figure out
    how much money each wallet had at any point in the post.
  </p>

  <p>
    Websites that let you explore blockchains are called blockchain explorers
    and Solscan is one of them. For example, just visit
    <a
      href="https://solscan.io/account/AhFjTUE2DgNFnAfRtFLUmLTLYyhxzz7j1cvKbvP18tg9"
    >
      this link
    </a>
    to find out how many tokens the wallet AhFj....8tg9 has
  </p>

  <p></p>

  <div class="border-b my-8 border-white/20"></div>

  <p>
    Thankfully you don't need to understand everything fully to use a
    blockchain. Let's hit up the local Currency Exchange market and understand a
    little more about what other currencies exist on Solana.
  </p>

  <!-- <div class="text-2xl font-bold" id="stop-3--jupiter">
        Stop 3 • Jupiter
      </div> -->
  <p>
    <img
      class="w-1/4 mb-8 pt-4"
      src="../../assets/jupiter2.png"
      alt="Untitled"
    />
  </p>
  <p class="">
    Jupiter is Solana’s premier Currency Exchange market. This is the place to
    visit whenever you want to swap currencies/tokens with one another.
  </p>
  <div
    class="text-2xl mt-8 font-semibold text-[#ebebeb]"
    id="tokens-currencies-what"
  >
    Tokens? Currencies? What?
  </div>
  <p>
    If you’ve following along, your wallet should only contain SOL till now.
    However, other currencies also exist on solana.
  </p>
  <div class="flex flex-col mb-6">
    For example, your wallet could also contain:

    <span>
      <span class="text-white font-semibold"> USDC, USDT </span> — Stablecoins
      pegged to the value of the US Dollar</span
    >

    <span>
      <span class="text-white font-semibold"> MNDE, LFNTY, ORCA </span>— Tokens
      belonging to teams and projects on Solana
    </span>

    <span
      ><span class="text-white font-semibold"> mSOL, SOL </span> — Staked
      version of Sol (will explain this later on)</span
    >

    <span>
      <span class="text-white font-semibold"> Bonk </span>— Meme tokens</span
    >
  </div>

  <p>
    Jupiter lets you swap your SOL for any of these tokens, or any of these
    tokens for SOL. It does so by aggregating all of the underlying markets
    across Solana to give you the best price for any of these assets.
  </p>
  <div
    class="text-2xl font-semibold mt-8 text-[#ebebeb]"
    id="things-to-do-here--swap-sol-for-some-usdc"
  >
    Things to do here — Swap SOL for some USDC
  </div>
  <p>
    Go ahead, exchange some of your SOL for USDC. You can do as small as a trade
    that it will let you do.
  </p>
  <div class="text-xl font-semibold mt-8 mb-2 text-[#ebebeb]">Steps</div>
  <ol class="list-decimal ml-4 mb-4">
    <li>Go to <a target="_blank" href="https://jup.ag">https://jup.ag</a></li>
    <li>Connect your Wallet → Select Phantom</li>
    <li>For Token One Select Sol</li>
    <li>For Token Two select USDC</li>
    <li>Enter the amount you want to swap</li>
    <li>Click Swap</li>
  </ol>
  <!-- <p>Congratulations! You’ve done a swap and it just cost you 0.000001$!</p> -->
</template>

<style scoped>
p {
  margin-bottom: 16px;
  margin-top: 16px;
}
</style>