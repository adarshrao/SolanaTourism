<template>
  <p class="pb-4">
    When you submitted the transaction on Jupiter, it must have cost you
    0.000005 Sol
  </p>
  <p>
    Lets visit Marinade to understand who you are paying this amount to. Along
    the way, you will also learn how the Solana blockchain runs and how you
    could be benefiting from it.
  </p>

  <div class="border-b border-gray-800/20 pt-8"></div>

  <p>
    <img
      class="w-2/5 mb-8 mt-12"
      src="../../assets/logos/marinade-white-full.png"
      alt="Untitled"
    />
  </p>
  <p>
    Marinade is project on Solana that lets you secure Solana and earn rewards
    along the way.
  </p>
  <div
    class="text-2xl font-semibold mt-8 text-white"
    id="understanding-how-solana-runs"
  >
    Understanding how Solana runs
  </div>
  <p>Whenever you submit a transaction via Phantom, it goes to a Validator.</p>
  <p>
    A Validator is a very powerful computer that runs the software underlying
    Solana. There are many of them and they’re spread across the globe. You can
    see the current count on
    <a target="_blank" href="https://solana.fm"> Solana.fm </a>
  </p>
  <p>
    These Validators ‘validate’ transactions. They confirm things like “Yes,
    this account has the money it is trying to send”, “Yes, this transaction is
    telling me to send money from Account A to account B and this smart contract
    allows for it.”
  </p>
  <p>
    The transaction fee you pay goes to the Validators for for doing all of this
    work.
  </p>
  <p>
    While anyone can run a validator, all validators are not equal. A validator
    is as powerful as the amount of the SOL that is delegated to it. Users can
    delegate their Sol to a validator and in return, they earn interest on their
    Sol.
  </p>
  <div
    class="text-2xl font-semibold mt-12 text-white"
    id="where-does-marinade-fit-in"
  >
    Where does Marinade fit in?
  </div>
  <p>
    People give Marinade their SOL, this is called
    <span class="font-semibold">Staking</span> . Marinade then takes this SOL
    and distributes it across validators on Solana. This way, there’s no
    singular all-powerful validator and the resiliency of the network is better.
  </p>
  <p>But, why would people give Marinade their Sol?</p>
  <p>
    When you deposit Sol to Marinade, you get a token called mSOL in return. The
    value of Sol to mSol increases by about 6% a year. So you end up earning
    interest on your Sol.
  </p>

  <div class="text-2xl font-bold mt-12 text-white">
    Things to do here — Stake Sol on Marinade
  </div>
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
</template>

<style scoped>
p {
  margin-bottom: 16px;
  margin-top: 16px;
}
</style>