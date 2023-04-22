<template>
  <!-- <h2
    class="text-2xl font-semibold text-white"
    id="trade-with-leverage-via-mango"
  >
    Trade with Leverage via Mango
  </h2> -->
  <p>
    Lets reset the scenario and assume that we once again are starting with $100
    in USDC
  </p>
  <p>
    When you tried to buy Solana via Jupiter, you managed to get 4.66 SOL which
    seemed normal because you only had 100 USDC. But what if you could buy more
    SOL with that same $100?
  </p>
  <p>
    This concept is known as Leverage trading and it allows you to magnify your
    profts (or losses).
  </p>
  <p class="text-xl font-semibold mt-8 mb-2 text-[#ebebeb]">
    Quick intro to how it works
  </p>
  <ol class="list-decimal ml-4 mb-4">
    <li>You deposit 100 USDC on an exchange</li>
    <li>
      Lets say the price of SOL is $20/USDC and you purchase 25 SOL for a total
      of 500 USDC
    </li>
    <li>
      Now you have 25 SOL and -400 USDC for a total account value of 100 USDC
    </li>
    <li>
      Lets say the price of SOL increases to $21 USDC, now your account value is
      worth $125
    </li>
    <li>You sell all 25 SOL and now you have $125 left</li>
    <li>
      If the exchange only allowed you buy 5 SOL, you would’ve had a profit of
      $5 when the price of SOL increased by $1 but because you were leveraged,
    </li>
    <li>
      But if the price of SOL fell to $16, you would have lost all of your
      money. Leverage trading comes with its risks!
    </li>
  </ol>
  <p>
    <img
      class="w-1/4 mb-8 pt-4"
      src="../../assets/logos/mango_color.png"
      alt="Untitled"
    />
  </p>

  <p>
    Mango Markets is a DEX on Solana that allows you to make such a trade. Users
    deposit their crypto on Mango and can borrow against it. Their risk engine
    continually monitors every position to ensure that users are within their
    risk limits.
  </p>
  <p class="text-xl font-semibold mt-8 mb-2 text-[#ebebeb]">
    Steps to leverage trade via Mango
  </p>
  <ol class="list-decimal ml-4 mb-4">
    <li>Visit app.mango.markets</li>
    <li>Create an account</li>
    <li>Deposit 100 USDC</li>
    <li>Visit the SOL-USDC market</li>
    <li>Tick the “Margin” checkbox</li>
    <li>Select the price at which you want to purchase SOL — 21.5</li>
    <li>
      In Quantity, enter 500 USDC and the SOL value should automatically get
      updated
    </li>
    <li>Once you place Order, you should see the order show up on the</li>
    <li>You now have 25 SOL and -400 USDC</li>
    <li>
      Next you can place a sell order at a pre-define price and the order should
      start showing up in the order book
    </li>
    <li>
      Once the price hits that level and someone else purchases your SOL off
      you,
    </li>
  </ol>
  <p>
    Note that leverage trading is quite risky and you should only do this if you
    know what you’re doing! Crypto is already volatile and leverage trading is
    just additional risk on top of that.
  </p>
  <hr />
  <p>
    Trading SOL was fun, but what if you wanted to trade ETH, or DOGE, or BNB.
  </p>
  <p>
    Lets check out Drift Protocol which allows you to trade perpetual-futures on
    Solana
  </p>
</template>

<style scoped>
p {
  margin-bottom: 32px;
  margin-top: 32px;
}
</style>