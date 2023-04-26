<template>
  <h2 class="text-2xl text-white font-semibold" id="mev-arbitrage">
    MEV Arbitrage
  </h2>
  <p>
    This is the most unique item on this list. MEV stands for
    Miner-Extractable-Value but that isn’t particularly descriptive or helpful.
  </p>
  <p>
    MEV is a way to programmatically make money on Solana by writing programs
    that identify arbitrage opportunities among other things and is best
    explained through an example.
  </p>
  <h3 id="arbitrage">Arbitrage</h3>
  <p>
    There are many different markets on Solana for the same token. For example,
    there could be two SOL-USDC market, one on Serum and the other on an AMM
    like <a href="https://orca.so">Orca</a> or
    <a href="https://lifinity.io">Lifinity</a>. MEV bots check these markets for
    arbitrage opportunities every block and perform them if they see an
    opportunity to do so and net a small profit alon the way.
  </p>
  <p>
    They could buy 10 SOL for $21 from one market and sell it at $21.01 in the
    other market netting 10 cents and bringing both the prices closer together.
  </p>
</template>

<style scoped>
p {
  margin-bottom: 16px;
  margin-top: 16px;
}
</style>