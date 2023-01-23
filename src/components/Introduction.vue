<template>
  <div>

    <div class="text-white bg-black pt-32 px-64 pb-24">

        <div class="text-3xl font-bold mb-2">A Guide to Solana City</div>

        <p class="max-w-md">
      If Solana were a city, what attractions should a first-timer visit? What
      should they experience to really understand what it is like to be resident
      here.
    </p>
    <p class="my-4 pt-4 max-w-md">
      Well, I’ve lived on Solana for the past year and this is my guide for a
      great first-time.
    </p>

    </div>

    <div id="phantom" class="grid grid-cols-3">

    </div>

    
    
    <p>
      <img class="w-full my-16"
        src="../assets/itinerary.png"
        alt="Itinerary"
      />
    </p>
    <p class="mt-8">To access the internet, you use a web browser</p>
    <p class="mt-2">To access the Solana blockchain, you will need a Solana wallet</p>
    <p>And that is our first stop.</p>


    <div class="text-3xl font-bold">Stop 1</div>
    <p>
      <img class="w-full my-4"
        src="../assets/phantom.png"
        alt="Untitled"
      />
    </p>
    <p>
      Phantom enables you to create a Solana wallet that you will necessarily need as we make our way through the day’s itinerary. They are free to create.
    </p>
    <div class="text-2xl mt-4">What is a Solana wallet?</div>
    <p>
      The Solana wallet is your access pass to the blockchain. To connect to any
      app on Solana and take an action, you will need your wallet.
    </p>
    <p>
      A wallet consists of two parts — A Public key and a Private key. You will
      need both.
    </p>
    <ul class="list-decimal ml-4">
      <li>
        <div class="text-md font-bold">Public Key</div>
        <ul class="list-disc ml-4">
          <li>
            These are 53 characters long and contain a mix of letters and
            numbers
            <ul class="list-disc mb-4">
              <li class="ml-6">AdARShQzEsTyUVaUoBtumGfJzPFHq1JLi3WrrHH42jCU</li>
              <li class="ml-6">rao16KsxiPQD7p12zmpX3UcE1Ua19dGjcBndXk3MhKv</li>
            </ul>
          </li>
          <li>
            Think of this as your username. You can share this with other
            people.
          </li>

        </ul>
      </li>
      <li>
        <div class="text-md font-bold mt-4">Private Key</div>
        <ul>
          <li class="">
            A 12 letter mnemonic
            <ul>
              <li class=" list-disc ml-4">
                Blunt Wrist Spicy Glaze Hiker Plume Lusty Caper Grasp Prawn
                Flume Tonic
              </li>
            </ul>
          </li>
          <li>Think of this as your password</li>
          <li>
            <strong
              >NEVER enter your private key anywhere other than the Phantom
              Wallet!</strong
            >
            You’re in a foreign country and you’re an easy target. Stay safe!
          </li>
        </ul>
      </li>
    </ul>
    <div class="text-xl mt-8">
      Things to do here — Create your first Solana wallet
    </div>
    <p>
      Go ahead, install Phantom and claim your free Solana wallet in order to continue on this tour.
    </p>
    <p class=" text-xl mt-2 font-bold">Steps</p>
    <ul class="list-decimal ml-4">
      <li>
        Visit <a href="https://phantom.app/">https://phantom.app/</a>downloads
      </li>
      <li>Select your browser of choice</li>
      <li>Install the extension</li>
      <li>Click on the extension and follow the steps</li>
      <li>Store your 12-word-mnemonic somewhere safe!</li>
    </ul>

    <p>
      As you make your way through the rest of the days itinerary, you will find
      yourself repeatedly using phantom so it’s worth the time to familiarize
      yourself with it.
    </p>

    <div class="border-b-2 my-8"> </div>

    <div class="grid grid-cols-2">

    <div class="div">

        <p>
        At the end you should have a chrome extension installed clicking which
        should show up this.
        </p>

        <p class="my-8">
        If you’re stuck,
        <a href="https://www.youtube.com/watch?v=yqW4X0wQ9DA">here’s a link</a> to
        a step-by-step Youtube video to help you with it.
        </p>

    </div>

    <div class="">
        Image goes here
    </div>
    
    
    </div>

    <div class="border-b-2 mb-8"> </div>
    
    <p>
      Done? I hope you are because the rest of this tour will only be accessed
      with a Solana Wallet
    </p>

    <p class="">Click Connect below to enter Solana City.</p>


    <div @click="boop" class=" my-8 h-16 grid font-bold rounded-lg bg-slate-100 w-auto place-items-center cursor-pointer "> Connect</div>


    <div v-if="showRemainingContent" class="subsequent">

    <p class="my-4">Congratulations on making it past the visa check!</p>

    <p class="mb-4">
      You’ve just gotten a taste for how you can access apps across the Solana ecosystem.
      
      You don’t need to remember any usernames or password. All you need to
      access every single app on Solana is just hitting ‘Connect’ on a browser
      with Phantom installed.
    </p>

    <p class="mb-4" >Refreshing, isn’t it?</p>

    <div class="border-b-2 mb-8 mt-8"> </div>

    <div class="grid grid-cols-2">

        <div>
            <p class="mb-4">
      When you click on the phantom icon on your browser, you’ll notice that it
      says $0.00. That’s because you’ve claimed a free available address on
      Solana but it doesn’t have any money in it yet.
    </p>
    <p class="mb-4">
      While visiting all of todays attractions is free, to actually go inside
      and explore you will need Solana’s native currency called
      <strong>SOL </strong>
    </p>
        </div>

        <div>
            Image goes here
        </div>


    </div>
    
    
    <p class="mb-4">Taking an action on Solana usually costs 0.00005 Sol = $0.0001075</p>

    <p class="mb-4">
      So you will need a minimum of $0.0001075 for todays trip but to get the
      most out of today’s tour, I recommend having 0.05 SOL ~= $1
    </p>

    <div class="text-2xl font-bold mt-8 mb-4">How to get your first 0.05 Sol</div>

    <p>
        The quickest way to get 0.05 Sol to get started is to ask a friend already using Solana.

        Tell them you're checking Solana out and share your wallet address with them. 
        
        If they're anything like me, they'll be excited that you're checking Solana out and gladly send you 0.05 Sol.
    </p>

    <div class="text-md font-semibold mt-8"> Other free methods </div>

    <p>If you are the first 1000 people reading this guide —</p>
    <ul class="list-decimal ml-4">
      <li>
        <strong>Tweet your Wallet Address</strong> tagging @SolanaCityGuide and
        you’ll be sent 0.01 Sol to get started
        <ul>
          <li>Example “@SolanaTourism aldiv42div428934hl”</li>
        </ul>
      </li>
      <li>
        <strong>Post your wallet address in the #sponsor channel</strong> on the
        SolanaTourism discord channel
        <ul>
          <li>Link to Discord</li>
        </ul>
      </li>
    </ul>
    <p class="mb-16">
      If none of the above options work for you, and you don’t mind spending
      money, here’s a more detailed guide on how you can fund your wallet with
      fiat (debit-card, credit card)
    </p>


    <p class="italic">
      Funding the wallet is not strictly necessary. You can still look
        around. But if you choose not to, it’ll be the equivalent of travelling
        to a new city and never leaving the cab taking you around. The buildings
        are pretty from the outside but …. you’ve come this far might as well go
        inside.
    </p>

    <div class="border-b-2 my-8"> </div>


    <div @click="boop" class="underline text-blue-600"> Click here once you have funded your wallet and want to move ahead with the tour</div>

    <div class="border-b-2 my-8"> </div>

    <p class="pb-4">With that out of the way, we can move onto the fun parts of the tour! Let’s go see what you can do on Solana with 0.05 Sol</p>

    
    <div class="text-2xl font-bold">Stop 2 • Magic Eden</div>
    <p>
      <img class="w-full mb-8"
        src="../assets/magiceden.png"
        alt="Untitled"
      />
    </p>
    <p>
      Magic eden is a marketplace to buy and sell NFTs.
      <a href="https://magiceden.io/marketplace/solana_monkey_business"
        >Monkeys</a
      >,
      <a href="https://magiceden.io/marketplace/famous_fox_federation">foxes</a
      >, <a href="https://magiceden.io/marketplace/okay_bears">bears</a>,
      <a href="https://magiceden.io/marketplace/degenerate_ape_academy">apes</a
      >, <a href="https://magiceden.io/marketplace/galactic_geckos">geckos</a>…
      we’ve got it all.
    </p>
    <div class="text-xl font-semibold mt-4" id="what-is-an-nft">What is an NFT?</div>
    <p>
      A non-fungible token (NFT) is a unit of data that lives on a blockchain.
      Each NFT has a unique identification code that can’t be replicated or
      copied and metadata that can be linked to a variety of things to provide
      immutable proof of ownership. For example, the metadata an NFT contains
      can be tied to digital images, songs, videos, or avatars. It can also be
      linked to physical items, like cars and yachts, or used to give an NFT
      owner access to exclusive merchandise, tickets to live or digital events,
      or other exclusive perks.
    </p>
    <div class="text-xl font-semibold mt-8" id="things-to-do-here--buy-yourself-an-nft">
      Things to do here — Buy yourself an NFT
    </div>
    <p>Look around to see if anything catches your fancy!</p>

    <p><strong>Steps</strong></p>
    <ol class="list-decimal ml-4 mb-4">
      <li>
        Visit Magic Eden at
        <a href="https://magiceden.io/">https://magiceden.io/</a>
      </li>
      <li>Click Connect Wallet on the Top Right</li>
      <li>Click Accept on the popup that shows up</li>
      <li>Look around for an NFT</li>
      <li>Click Buy</li>
      <li>Accept the transaction that shows up</li>
    </ol>
    <p class="italic pb-4">
      Don’t worry if the NFTs are priced higher than the available Sol in
        your wallet. There are more places to visit and more things to do!
    </p>
    

    <div class="border-b-2 my-8"> </div>


    <div @click="boop" class="underline text-blue-600"> Whenever you’re done with Magic Eden, click the below button to continue
      with the trip.</div>

    <div class="border-b-2 my-8"> </div>

    <p class="pb-4">
      Did you grab an NFT or were you confused at the why people were selling
      and buying what are essentially images for thousands of dollars? Either
      way it’s fine. Regular people find residents of Solana city a little odd
      at first but eventually convert.
    </p>
    <p>
      Next stop, lets hit up the local Currency Exchange market and understand a
      little more about what other currencies exist on Solana.
    </p>

    <div class="border-b-2 my-8"> </div>
    
    <div class="text-2xl font-bold" id="stop-3--jupiter">Stop 3 • Jupiter</div>
    <p>
      <img class="w-full mb-8"
        src="../assets/jupiter.png"
        alt="Untitled"
      />
    </p>
    <p class="">
      Jupiter is Solana’s premier Currency Exchange market. Jupiter is the place
      to visit whenever you want to swap currencies/tokens with one another.
    </p>
    <div class="text-xl mt-8 font-semibold" id="tokens-currencies-what">Tokens? Currencies? What?</div>
    <p>
      If you’ve following along, your wallet should only contain SOL till now.
      However, other currencies also exist on solana.
    </p>
    <div class="flex flex-col mb-6">For example, your wallet could also contain:
    
    <span>USDC, USDT — Stablecoins pegged to the value of the US Dollar</span>
    

    <span>MNDE, LFNTY, ORCA — Tokens belonging to teams and projects on Solana 
        </span>    

    <span>mSOL, SOL — Staked version of Sol (will explain this later on)</span>
    
    <span>Bonk — Meme tokens</span>
    
    
    </div>

    <p>
      Jupiter lets you swap your SOL for any of these tokens, or any of these
      tokens for SOL. It does so by aggregating all of the underlying markets
      across Solana to give you the best price for any of these assets.
    </p>
    <div class="text-2xl font-semibold mt-8" id="things-to-do-here--swap-sol-for-some-usdc">
      Things to do here — Swap SOL for some USDC
    </div>
    <p>
      Go ahead, exchange some of your SOL for USDC. You can do as small as a
      trade that it will let you do.
    </p>
    <div class="text-xl font-semibold mt-8 mb-4">Steps to do so</div>
    <ol class="list-decimal ml-4 mb-4">
      <li>Go to <a href="https://jup.ag">https://jup.ag</a></li>
      <li>Connect your Wallet → Select Phantom</li>
      <li>For Token One Select Sol</li>
      <li>For Token Two select USDC</li>
      <li>Enter the amount you want to swap</li>
      <li>Click Swap</li>
    </ol>
    <p>Congratulations! You’ve done a swap and it just cost you 0.000001$!</p>


    <div class="border-b-2 my-8"> </div>


    <div @click="boop" class="underline text-blue-600"> Click here once you're done with Jupiter and want to move on</div>

    <div class="border-b-2 my-8"> </div>
    

    <div class="text-2xl font-bold" id="important-note-for-your-safety">Important note for your Safety</div>
    <p>
      As your tour guide, I need to take this moment to tell you the
      uncomfortable truth that Solana City is rife with crime.
    </p>
    <p>
      Code is law here and there are people out there who will try to exploit
      unsuspecting foreign visitors.
    </p>
    <p class="text-xl font-semibold">Broad-types of crime to avoid</p>
    <ul class="list-disc ml-4 mb-4" >
      <li>Spoofed Websites</li>
      <li>Wallet-drainers</li>
      <li>NFT Rugs</li>
      <li>Fake tokens</li>
    </ul>
    <p>
      This trip is carefully curated and we’re only starting with 0.05 Sol so
      the risk of ruin is low.
    </p>
    <p>
      But if you ever do decide to come back with a bigger purse, please please
      educate yourself on how to stay safe.
    </p>
    <p>It <strong>is</strong> possible to stay safe, it just takes effort.</p>

    <p class="py-8">With that out of the way, let's continue with our trip.</p>

    <div class="border-b-2 my-8"> </div>     
    
    <p class="pb-4">
      When you submitted the transaction on Jupiter, it must have cost you 0.000005 Sol
    </p>
    <p>
      Lets visit Marinade and understand who are you paying this amount to.
      Along the way, you will also how the Solana blockchain runs and how you
      could be benefiting from it.
    </p>
    <div class="text-2xl font-bold my-4" id="stop-4--marinade">Stop 4 • Marinade </div>
    <p>
      <img class="w-full mb-8"
        src="../assets/marinade.png"
        alt="Untitled"
      />
    </p>
    <p>
      Marinade is project on Solana that lets you secure Solana&nbsp;and earn
      rewards along the way.
    </p>
    <div class="text-xl font-semibold mt-8" id="understanding-how-solana-runs">Understanding how Solana runs</div>
    <p>
      Whenever you submit a transaction via Phantom, it goes to a Validator.
    </p>
    <p>
      A Validator is a very powerful computer that runs the software underlying
      Solana. There are many of them and they’re spread across the globe. You
      can see the current count on Solana.fm
    </p>
    <p>
      These Validators ‘validate’ transactions. They confirm things like “Yes,
      this account has the money it is trying to send”, “Yes, this transaction
      is telling me to send money from Account A to account B and this smart
      contract allows for it.”
    </p>
    <p>
      The transaction fee you pay goes to the Validators for for doing all of
      this work,
    </p>
    <p>
      While anyone can run a validator, all validators are not equal. A
      validator is as powerful as the amount of the SOL that is delegated to it.
      Users can delegate their Sol to a validator and in return, they will earn
      interest on their Sol.
    </p>
    <div class="text-xl font-semibold mt-8" id="where-does-marinade-fit-in">Where does Marinade fit in?</div>
    <p>
      People give Marinade their SOL, this is called Staking. Marinade then
      takes this SOL and distributes it across validators on Solana. This way,
      there’s no singular all-powerful validator and the resiliency of the
      network is better.
    </p>
    <p>But, why would people give Marinade their Sol?</p>
    <p>
      When you deposit Sol to Marinade, you get a token called mSOL in return.
      The value of Sol to mSol increases by about 6% a year. So you end up earning interest on your Sol.
    </p>

    <div class="text-xl font-bold mt-4">
      Things to do here — Stake Sol on Marinade
    </div>
    <p class="text-xl font-semibold pt-2">Steps to do so</p>
    <ol class="list-decimal ml-4 mb-8">
      <li>
        Go to
        <a href="https://marinade.finance/app/staking/"
          >https://marinade.finance/app/staking/</a
        >
      </li>
      <li>Connect your Wallet → Select Phantom</li>
      <li>Enter 0.001 Sol</li>
      <li>Click “Stake Sol”</li>
      <li>Approve Transaction</li>
    </ol>
    <p>
      Thank you for staking with Marinade and making the network safer for
      everyone!
    </p>

    <div class="border-b-2 my-8"> </div>

    <div @click="boop" class="underline text-blue-600"> Click here to continue with the tour</div>

    <div class="border-b-2 my-8"> </div>


    
    <p>Next up, a bank.</p>
    <div class="text-2xl font-bold mt-8" id="stop-5--solend">Stop 5 • Solend</div>
    <p>
      <img class="w-full mb-8"
        src="../assets/solend.png"
        alt="Untitled"
      />
    </p>
    <p>
      Solend is Solana’s premier banking destination. It takes deposits from
      some users and lends a port of them out to others. The borrowers pay
      interest which goes to all the depositors.
    </p>
    <div class="text-xl font-semibold mt-4" id="understanding-lending-on-solana">
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
      current price is $25. You don’t want to sell because you believe that
      it’ll go up to $100 in the future. But you really need 5 $USDC right now
      to pay for your Netflix.
    </p>
    <p>
      Solend is your friend! You can deposit $20 worth of $SOL and borrow 5$USDC
      against it. You better hope the price of SOL increases because if falls by
      a certain %, you might lose your entire deposit.
    </p>
    <div class="text-xl font-semibold mt-8">
      Things to do at Solend • Deposit to start earning interest!
    </div>
    <p>
      The bankteller might laugh you out the room if you walked in a bank and
      asked to deposited 0.001 USDC to get interest on it.
    </p>
    <p>
      Solend wouldn’t. Smart contracts don’t judge people by the amount of money
      in their wallet.
    </p>
    <p class="text-xl font-semibold pt-4">Steps to do so</p>
    <ol class="list-decimal ml-4 mb-4">
      <li>Go to <a href="https://solend.fi">https://solend.fi</a></li>
      <li>Connect your Wallet → Select Phantom</li>
      <li>Click on Turbo-Sol Pool</li>
      <li>Click on USDC</li>
      <li>Enter Amount → Deposit</li>
      <li>Accept Transaction</li>
    </ol>
    
    <div class="border-b-2 my-8"> </div>
    
    <div @click="boop" class="underline text-blue-600"> Click here to continue with the tour</div>

    <div class="border-b-2 my-8"> </div>

    
    <p>Congratulations on your first decentralised deposit!</p>
    <p>That was pretty cool, right? But also boring.</p>
    <p>
      Lets go check out another lending protocol called Frakt which gives loans on NFTs!
    </p>
    <div class="text-2xl font-bold mt-4 mb-4">Stop 6 • Frakt</div>
    <p>
      <img class="w-full mb-4"
        src="../assets/frakt.png"
        alt="Untitled"
      />
    </p>
    <p>
      While you were shopping on MagicEden, you must have noticed some really
      expensive NFTs worth &gt;100 Sol. For example, Solana Monkey Business or
      ABC.
    </p>
    <p>
      Suppose you owned one of these NFTs but needed 10$ temporarily to pay for
      your Netflix.
    </p>
    <p>Frakt is your friend.</p>
    <p class="text-md font-semibold">
      Frakt lets users mortgage their NFT and borrow SOL against
        them.
    </p>
    <p>Some common questions</p>
    <ol class="list-disc ml-4">
      <li>
        Who provides this Sol for the loan? — Other users like yourself. Some of
        these NFT collections are fairly popular and desirable and there are
        people who trust that the value of
      </li>
      <li>
        What is the risk? If the NFT collection drops in value, Frakt will take
        possession of the NFT and auction it out at half-price. This is riskier
        as you can imagine which is why the lending rates are higher
      </li>
    </ol>
    <div class="text-xl font-bold mt-4 mb-4">
      Things to do at Frakt • Deposit Sol to earn a higher interest
    </div>
    <p>Steps</p>
    <ol class="list-decimal ml-4">
      <li>Go to app.frakt.com</li>
      <li>Go to Lend</li>
      <li>Connect your Wallet → Select Phantom</li>
      <li>Select an NFT Collection and click Deposit</li>
      <li>Choose Amount → Deposit</li>
      <li>Accept Transaction</li>
    </ol>    

    <p>
      Take a moment to compare the deposit rate on Solend for Sol with the
      borrow rate on Frakt for Sol.
    </p>
    <p>Solend — 5%</p>
    <p>Frakt — 20%</p>
    <p>
      You might wonder — What if you deposit USDC on Solend, borrow Sol against
      it and then lend this Sol out on Frakt?
    </p>
    <p>
      Congratulations, you’re now thinking like a degen (it’s a fond word we use
      around here).
    </p>
    
        <div class="border-b-2 my-8"> </div>
    
    <div @click="boop" class="underline text-blue-600"> Click here to go the final stop</div>

    <div class="border-b-2 my-8"> </div>
    
    <p>
      Alright, the sun is getting low. Let’s end this tour with a visit to the
      local casino.
    </p>
    <div class="text-2xl font-bold mt-4 mb-4">
      Final Stop • DegenCoinFlip
    </div>
    <p>
      <img class="w-full mb-4"
        src="../assets/degencoinflip.png"
        alt="Untitled"
      />
    </p>
    <p>
      Degen Coin Flip is a casino where you can play Double or Nothing. You put
      up some money, you either win double or you lose it all. Odds are exactly
      50/50 with a 3.5% fee on your winnings.
    </p>
    <p>
      Mathematically, sure you’re always at a disadvantage because but try it
      out! Vacation money is meant to be spent afterall.
    </p>
    <div class="text-xl mt-4">
      Things to do here — Try your luck
    </div>
    <p>Have some SOL left over in your wallet? Put some in</p>
    <p class="text-xl font-semibold pt-2">Steps</p>
    <ol class="list-decimal ml-4">
      <li>Go to degencoinflip.com</li>
      <li>Connect Wallet</li>
      <li>Enter Amount</li>
      <li>Flip</li>
      <li>Accept Transaction</li>
    </ol>


    <div class="border-b-2 my-8"> </div>
    
    <p>And with that we’ve come to the end of the tour.</p>
    <p>
      Thank you for letting me show you around and I hope you had a nice first
      day in Solana city.
    </p>
    <p>
      If you enjoyed being shown around, I would appreciate a Twitter shout-out
      at @SolanaTourism
    </p>
    <p class="underline text-blue-500">Click here to Tweet</p>

    <div class="border-b-2 my-8"> </div>
    
    <div class="text-xl font-semibold" id="looking-for-more">Looking for more?</div>
    <p>Test your understanding by taking this Quiz — Link to Quiz</p>

    <p class="text-md font-semibold pt-4">A Day 2 Itinerary would look something like — </p>
    <ul>
      <li>Mint an NFT</li>
      <li>Trade tokens on Openbook</li>
      <li>Trade futures on Mango</li>
      <li>Understand AMMs through Lifinity</li>
      <li>Trade Options on Zeta</li>
      <li>Create a Multi-Sig Wallet on Squads w/ A Friend</li>
    </ul>
    <p class="pt-8">
      If you’d like a guide for Day 2, please let me know in the comments below!
    </p>
  </div>

    </div>

</template>

<script>
import { marked } from "marked";

export default {
  name: "App",
  data() {
    return {
        showRemainingContent: true
        
    }
  },
  computed: {
  },
  methods : {
    boop () {
        // console.log("boop")
        this.showRemainingContent = !this.showRemainingContent
    }
  }
};
</script>

<style scoped>

p {
    margin-bottom: 8px;
    margin-top: 8px
}

div p {
    margin-bottom: 8px;
    margin-top: 8px
}


</style>