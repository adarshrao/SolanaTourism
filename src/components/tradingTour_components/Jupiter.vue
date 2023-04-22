<template>
  <p>
    Since you’re starting off with $100 USDC, you first will need to convert it
    all into SOL at the cheapest price and the best place to do that on Solana
    is Jupiter.
  </p>
  <p>
    <img
      class="w-1/4 mb-8 pt-4"
      src="../../assets/jupiter2.png"
      alt="Untitled"
    />
  </p>
  <p>
    Jupiter aggregates all of Solana’s markets to provide users with the best
    price they can get for any token.
  </p>
  <p class="text-xl font-semibold mt-8 mb-2 text-[#ebebeb]">Steps to buy Low</p>
  <ol class="list-decimal ml-4 mb-4">
    <li>Visit <a target="_blank" href="https://jup.ag">jup.ag</a></li>
    <li>
      Select the token you are looking to sell, USDC in this case and fill it
      with 100
    </li>
    <li>Select the token you want to swap it for, SOL in this case</li>
    <li>Click “Swap”</li>
    <li>
      Review the transaction you’re seeing and approve it if the numbers match
    </li>
  </ol>
  <p>You should now have ~ 4.66 SOL in your wallet</p>
  <p>
    Okay, now you want to sell it when Sol increases by 10% to 23.52 so that you
    book profit
  </p>
  <p>
    Jupiter, through its limit-orders product, allows you to place an order to
    sell at a pre-defined price.
  </p>
  <p>
    You will essentially transfer your SOL to Jupiter and inform it to sell SOL
    when the price hits the number that you have set in there. And for this
    convenience of providing this service, Jupiter will take a 0.2% fee.
  </p>
  <p class="text-xl font-semibold mt-8 mb-2 text-[#ebebeb]">
    Steps to sell high
  </p>
  <ol class="list-decimal ml-4 mb-4">
    <li>
      Visit
      <a href="https://jup.ag/limit/SOL-USDC">https://jup.ag/limit/SOL-USDC</a>
    </li>
    <li>Verify that it says “Selling SOL” and “Buying USDC”</li>
    <li>Enter the quantity of SOL you are looking to sell</li>
    <li>Enter the price at which you want to sell SOL</li>
    <li>Enter the duration for this trade — Never, in this case</li>
    <li>Click “Place Limit Order”</li>
    <li>Accept the transaction that shows up</li>
  </ol>
  <p>
    Done! Now Jupiter will automatically sell your SOL for USDC when the price
    hits your price-target and deposit the money back in your wallet.
  </p>
  <p>
    You can change your mind any time and cancel the order which you can view in
    the Open Orders section right below the order form.
  </p>
  <!-- <p>
    If you’d like to learn more about how Jupiter works, check out their project
    introduction on Solana Tourism
  </p> -->

  <div class="border-b"></div>

  <p>
    Making 10% on this trade probably felt good but wouldn’t it be nice if you
    could make 50% on the same trade? Next up, Mango Markets which allows you to
    leverage trade to amplify your profits (or losses)
  </p>
</template>

<style scoped>
p {
  margin-bottom: 32px;
  margin-top: 32px;
}
</style>