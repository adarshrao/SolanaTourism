<template>
  <p>
    If you've been following along, you should have multiple tokens in your
    wallet by now.
  </p>

  <p>
    If you had money in the real world, you might try to deposit it into a bank
    to earn interest on it. Let's do the same here!
  </p>
  <!-- <div class="text-2xl font-bold mt-8 text-[#ebebeb]" id="stop-5--solend">
        Stop 5 • Solend
      </div> -->
  <p>
    <img
      class="w-1/4 mb-4 mt-4"
      src="../../assets/solend2.png"
      alt="Untitled"
    />
  </p>

  <p>
    Solend is Solana’s premier banking destination. It takes deposits from some
    users and lends a portion of them out to others. The borrowers pay interest
    which goes to paying the depositors.
  </p>
  <div
    class="text-2xl font-semibold mt-4 text-[#ebebeb]"
    id="understanding-lending-on-solana"
  >
    Understanding Lending on Solana
  </div>
  <p>
    Most DeFi lending products like Solend only support over-collateralized
    loans. Borrowers need to pledge more money than the amount they are
    borrowing.
  </p>
  <p>
    What? You might wonder. Why would someone who has money require to borrow
    money?
  </p>
  <p>
    That’s because money on Solana takes the form of different tokens with
    differing value. These borrows are depositing one token (say SOL) and
    borrowing a different token (say USDC).
  </p>
  <p>
    An example — Let’s say you own some Solana which you bought at $20 and the
    current price is $25. You don’t want to sell because you believe that it’ll
    go up to $100 in the future. But you really need 5 $USDC right now to pay
    for your Netflix.
  </p>
  <p>
    Solend is your friend! You can deposit $20 worth of $SOL and borrow 5 $USDC
    against it. You better hope the price of SOL increases because if falls by a
    certain %, you might lose your entire deposit.
  </p>
  <div class="text-xl font-semibold mt-8 text-[#ebebeb]">
    Things to do at Solend — Deposit to start earning interest!
  </div>
  <p>
    The bankteller might laugh you out the room if you walked in a bank and
    asked to deposit 0.001 USDC to get interest on it.
  </p>
  <p>
    Solend wouldn’t. Smart contracts don’t judge people by the amount of money
    in their wallet.
  </p>
  <p class="text-lg font-semibold pt-4 text-[#ebebeb]">Steps</p>
  <ol class="list-decimal ml-4 mb-4">
    <li>
      Go to
      <a target="_blank" href="https://solend.fi">https://solend.fi</a>
    </li>
    <li>Connect your Wallet → Select Phantom</li>
    <li>Click on Turbo-Sol Pool</li>
    <li>Click on USDC</li>
    <li>Enter Amount → Deposit</li>
    <li>Accept Transaction</li>
  </ol>
</template>

<style scoped>
p {
  margin-bottom: 16px;
  margin-top: 16px;
}
</style>