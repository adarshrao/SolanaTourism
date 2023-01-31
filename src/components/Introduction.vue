<template>
  <div class="break-words">
    <div
      class="
        text-[#ebebeb] text-md
        bg-black
        grid
        grid-cols-[1fr_minmax(240px,300px)_1fr]
        pt-12
        sm:grid-cols-[1fr_800px_1fr]
        sm:pt-64
        sm:py-48
        sm:pr-32
      "
    >
      <div class="flex flex-col pb-16 sm:flex-row sm:space-center col-start-2">
        <img
          class=" scale-75 w-100% sm:h-[250px]"
          src="../assets/SolanaLogo.png"
          alt="Untitled"
        />

        <div class="">
          <div class="text-3xl font-bold mb-4">A Guide to Solana City</div>

          <p class="max-w-md pt-4 text-[#8a8a8a]">
            If <a href="https://solana.com">Solana</a> were a city, what
            attractions should a first-timer visit? What should they experience
            to really understand what it is like to be a resident here.
          </p>
          <p class="my-4 pt-4 max-w-md text-[#8a8a8a]">
            Well, here's a guide for a great first time from someone who has
            lived on Solana for the past year.
          </p>

          <p class="my-4 pt-4 max-w-md text-[#8a8a8a]">
            by <a clas="!text-[#8a8a8a]" target="_blank" href="https://twitter.com/adarshrao_">@adarshrao_</a>
            
          </p>
        </div>
      </div>
    </div>


    <div
      id="phantom"
      class="
        grid
        grid-cols-[1fr_minmax(260px,380px)_1fr]
        px-8
        pt-4
        sm:grid-cols-[1fr_600px_1fr] sm:pt-16 sm:px-16
        text-lg
        lg:grid-cols-[1fr_minmax(600px,1fr)_1fr]
        bg-[#111111]
        text-[#999999]
      "
    >
      <div class="col-start-2">
        <p class="mt-8">To access the internet, you use a web browser</p>
        <p class="mt-2">
          To access the Solana blockchain, you will need a Solana wallet
        </p>
        <p>And that is our first stop.</p>

        <div class="border-b border-gray-800 pt-4"></div>

        <!-- <div class="text-3xl font-bold pt-12">1 — Phantom</div> -->
        <p>
          <img
            class=" w-3/4 sm:w-2/5 my-4 pt-8 pb-4"
            src="../assets/phantom2.png"
            alt="Untitled"
          />
        </p>
        <p>
          Phantom lets you to create a Solana wallet that you will need as we
          make our way through the day’s itinerary. Creating a wallet is free, easy and only takes a few minutes.
        </p>
        <div class="text-2xl font-semibold mt-12 text-[#ebebeb]">
          What is a wallet?
        </div>
        <p class="!mt-2">
          The wallet is your access pass to the blockchain. To connect to
          any app on Solana and take an action, you will need to connect with a compatible wallet.
        </p>
        <p>
          Every wallet consists of two parts — A
          <span class="text-white font-semibold">Public key</span> and a
          <span class="text-white font-semibold">Private key </span>.
        </p>
        <ul class="list-decimal ml-4">
          <li>
            <div class="text-md font-bold text-white">Public Key</div>
            <ul class="list-disc ml-4">
              <li>
                These are 44 characters long and consist of a mix of letters and
                numbers. Examples —
                <ul class="list-disc mb-4">
                  <li class="list-none ml-6">
                    HGdKP7AE47NWePzoZp4xjKCdhZS7VtAwBm78h3i7CTVc
                  </li>
                  <li class="list-none ml-6">
                    9jpuPgge8TyoAS66gf58F8St24SB1j2fFc1ag7HRhbox
                  </li>
                </ul>
              </li>
              <li>
                Think of this as your username, your identity. You can share this with other
                people.
              </li>
            </ul>
          </li>
          <li>
            <div class="text-md font-bold mt-4 text-white">Private Key</div>
            <ul>
              <li class="">
                A set of 12 words. Example —
                <ul>
                  <li class="list-disc ml-4">
                    Blunt Wrist Spicy Glaze Hiker Plume Lusty Caper Grasp Prawn
                    Flume Tonic
                  </li>
                </ul>
              </li>
              <li class="my-4">
                Think of this as your password. It signifies that you're the
                owner of the above public key.
              </li>
            </ul>
          </li>
        </ul>
        <div class="text-2xl mt-16 text-white font-semibold">
          Things to do here — Create your first Solana wallet
        </div>
        <p>Go ahead, install Phantom and claim your free Solana wallet.</p>
        <p class="text-xl mt-2 pt-4 font-bold text-white">Steps</p>
        <ul class="list-decimal ml-4">
          <li>
            Visit
            <a href="https://phantom.app/downloads"
              >https://phantom.app/downloads</a
            >
          </li>
          <li>Select your browser of choice</li>
          <li>Install the extension</li>
          <li>Click on the extension and follow the steps</li>
          <li>Store your 12-word-mnemonic somewhere safe!</li>
        </ul>

        <div class="border-b border-gray-800 pt-4 my-8"></div>

        <div class="grid grid-cols-2">
          <div class="div">
            <p>
              At the end you should have a
              <span class="text-white">browser extension</span> installed upon
              clicking which the following would show.
            </p>

            <p class="my-8">
              If you’re stuck,
              <a href="https://www.youtube.com/watch?v=yqW4X0wQ9DA"
                >here’s a link</a
              >
              to a step-by-step Youtube video to help you through it.
            </p>

            <!-- <p>
              As you make your way through the rest of this guide, you will need
              to repeatedly using phantom so it’s worth the time to familiarize
              yourself with it.
            </p> -->

            <p>
              <strong class="text-red-500"
                >NEVER enter your private key anywhere other than the Phantom
                Wallet!</strong
              >
              Remember that you’re in an unfamiliar country and you’re an easy
              target for con artists. More on this later.
            </p>
          </div>

          <div class="">
            <p>
              <img
                class="my-4 pl-4"
                src="../assets/emptyWallet.png"
                alt="Untitled"
              />
            </p>
          </div>
        </div>

        <div class="border-b border-gray-800 pt-4 my-8"></div>

        <p>
          Done? I hope you are because the rest of this tour can only be
          accessed with a Solana Wallet
        </p>

        <p class="">
          Select your wallet below and click Connect to enter Solana City.
        </p>

        <!-- <div
          @click="boop"
          class="
            my-8
            h-16
            grid
            font-bold
            rounded-lg
            bg-slate-100
            w-auto
            place-items-center
            cursor-pointer
            text-black
            mb-32
          "
        >
          Connect
        </div> -->

        <div class="my-8 pb-16" @click="boop">
          <wallet-multi-button></wallet-multi-button>
        </div>
      </div>
    </div>

    <!-- <p>
      <img class="w-full my-16"
        src="../assets/itinerary.png"
        alt="Itinerary"
      />
    </p> -->

    <div v-if="showRemainingContent" class="subsequent">
      <div
        id="fundSol"
        class="
          grid
          grid-cols-[1fr_minmax(260px,380px)_1fr]
          px-8
          pt-4
          sm:grid-cols-[1fr_600px_1fr] sm:pt-16 sm:px-16
          text-lg
          lg:grid-cols-[1fr_minmax(600px,1fr)_1fr]
          pt-16
          bg-gradient-to-b
          from-[#5340C1]
          to-[#E42575]
          text-white text-md
        "
        ref="show"
      >
        <div class="col-start-2">
          <p class="my-4">
            Congratulations on making it past the visa check! Welcome to Solana.
          </p>

          <p class="mb-4">
            You’ve just gotten a taste for how you can access any decentralized
            app across the Solana ecosystem. No need to create and remember
            usernames or passwords. Just press
            <span class="font-bold text-white">Connect</span> on a browser with
            Phantom wallet installed.
          </p>

          <p class="mb-4">Refreshing, isn’t it?</p>

          <div class="border-b border-slate-500 mb-12 mt-8"></div>

          <div class="grid grid-cols-2">
            <div>
              <p class="mb-4">
                When you click on the phantom icon on your browser, you’ll
                notice that it says $0.00. That’s because you’ve claimed a free
                available address on Solana but it doesn’t have any money in it
                yet.
              </p>
              <p class="mb-4">
                While visiting all of todays attractions is free, in order to actually go
                inside and explore you will need Solana’s native currency called
                <strong>SOL </strong>
              </p>
              <p class="mb-4">
                Taking an action on Solana usually costs a minimum of 0.00005 Sol =
                $0.0001075. Basically nothing.
              </p>
            </div>

            <div>
              <img
                class="my-4 pl-4"
                src="../assets/emptyWallet.png"
                alt="Untitled"
              />
            </div>
          </div>

          <div class="border-b border-slate-500 mb-12 mt-8"></div>

          <p class="mb-4">
            To get the most out of today’s tour, I recommend having 0.05 SOL ~=
            $1
          </p>

          <div class="text-2xl font-bold mt-8 mb-4">
            How to get your first 0.05 Sol
          </div>

          <p>
            Converting a real life $ to SOL is unfortunately still a challenge.
          </p>

          <p>
            The quickest way to get 0.05 Sol to get started is ..... to ask a
            friend already using Solana. If they're anything like me, they'll be
            excited that you're checking Solana out and gladly send 0.05 Sol to
            your wallet address.
          </p>

          <p class="italic text-white/60 pb-4">
            Don't know anybody like that? Let me be your friend :) Tweet/DM me
            at <a class="text-white/60" href="https://twitter.com/adarshrao_"> @adarshrao_ </a> with your wallet address and I'll be happy to send SOL to get
            you started.
          </p>

          <div class="text-2xl font-semibold mt-8">Don't mind spending $?</div>

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
            If neither of the above options work for you, fret not because you still have a couple of other
            options.
          </p>

          <p>
            Purchase through Phantom with a credit card (mininum $50).
            <a
              href="https://help.phantom.app/hc/en-us/articles/4406543783571-Where-can-I-buy-Solana-SOL-#:~:text=Firstly%20you%20must%20open%20up,Coinbase%20Pay%20or%20MoonPay%20option."
              >Here's a link to a guide.</a
            >
          </p>

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
            Funding the wallet is not strictly necessary. You can still look
            around. But if you choose not to, it’ll be the equivalent of
            travelling to a new city and never leaving the cab taking you
            around. The buildings are pretty from the outside but …. you’ve come
            this far might as well go inside.
          </p>

          <div class="border-b border-slate-500 mb-8 mt-8"></div>

          <p>
            Once you've funded your wallet (or chosen not to), click below to
            move on.
          </p>

          <div
            @click="display('magiceden')"
            class="
              my-8
              h-16
              grid
              font-semibold
              rounded-lg
              bg-white/20
              w-auto
              place-items-center
              cursor-pointer
              text-whiteC
            "
          >
            Continue with the tour
          </div>
        </div>
      </div>

      <div
        id="magicEden"
        v-if="showMagicEden"
        ref="eden"
        class="
          grid
          grid-cols-[1fr_minmax(260px,380px)_1fr]
          px-8
          pt-4
          sm:grid-cols-[1fr_600px_1fr] sm:pt-16 sm:px-16
          text-lg
          lg:grid-cols-[1fr_minmax(600px,1fr)_1fr]
          bg-[#111111]
          text-[#999999] text-md
        "
      >
        <div class="col-start-2">
          <p class="pb-4 pt-12">
            With some SOL in our wallet, let’s go see what you can do on Solana.
          </p>

          <div class="border-b border-gray-800 mb-4 mt-4"></div>

          <!-- <div class="text-2xl font-bold">Stop 2 • Magic Eden</div> -->
          <p>
            <img
              class="w-3/5 mb-8 pt-8 pb-2"
              src="../assets/magiceden2.png"
              alt="Untitled"
            />
          </p>
          <p>Magic eden is a marketplace to buy and sell NFTs.</p>
          <div
            class="text-xl font-semibold mt-8 text-[#ebebeb]"
            id="what-is-an-nft"
          >
            What is an NFT?
          </div>
          <p>Most NFTs are a picture. But there's also much more to them.</p>

          <p>
            A non-fungible token (NFT) is a unit of data that lives on a
            blockchain. Each NFT has a unique identification code that can’t be
            replicated or copied and metadata that can be linked to a variety of
            things to provide immutable proof of ownership. For example, the
            metadata an NFT contains can be tied to digital images, songs,
            videos, or avatars. It can also be linked to physical items, like
            cars and yachts, or used to give an NFT owner access to exclusive
            merchandise, tickets to live or digital events, or other exclusive
            perks.
          </p>

          <p>
            <a href="https://magiceden.io/marketplace/solana_monkey_business"
              >Monkeys</a
            >,
            <a href="https://magiceden.io/marketplace/famous_fox_federation"
              >foxes</a
            >, <a href="https://magiceden.io/marketplace/okay_bears">bears</a>,
            <a href="https://magiceden.io/marketplace/degenerate_ape_academy"
              >apes</a
            >,
            <a href="https://magiceden.io/marketplace/galactic_geckos">geckos</a
            >… we’ve got it all.
          </p>

          <div
            class="text-xl font-semibold mt-8 text-[#ebebeb]"
            id="things-to-do-here--buy-yourself-an-nft"
          >
            Things to do here — Buy yourself an NFT
          </div>
          <p>Look around to see if anything catches your fancy!</p>

          <div class="font-semibold pb-2 text-[#ebebeb]">Steps</div>
          <ol class="list-decimal ml-4">
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

          <div class="border-b border-gray-800 pt-12"></div>

          <p class="italic pt-4">
            Don’t worry if the NFTs are priced higher than the available Sol in
            your wallet. There are more places to visit and other affordable
            things to do!
          </p>

          <!-- <div class="border-b border-gray-800 pt-4 "></div> -->

          <!-- <div @click="boop" class="underline text-blue-600">
        Whenever you’re done with Magic Eden, click the below button to continue
        with the trip.
      </div> -->

          <div
            @click="display('jupiter')"
            class="
              my-8
              h-16
              grid
              font-semibold
              rounded-lg
              bg-white/20
              w-auto
              place-items-center
              cursor-pointer
              text-white
              mb-16
              hover:bg-white/30
            "
          >
            Continue with the tour
          </div>

          <!-- <div class="border-b-2 my-8"></div> -->
        </div>
      </div>

      <div
        id="jupiter"
        v-if="showJupiter"
        ref="jupiter"
        class="
          grid
          grid-cols-[1fr_minmax(260px,380px)_1fr]
          px-8
          pt-4
          sm:grid-cols-[1fr_600px_1fr] sm:pt-16 sm:px-16
          text-lg
          lg:grid-cols-[1fr_minmax(600px,1fr)_1fr]
          bg-[#6B0F1A]
          text-[#BCBCBC] text-md
        "
      >
        <div class="col-start-2">
          <p class="">
            Did you grab an NFT or were you confused at the why people were
            selling jpegs for thousands of dollars?
          </p>

          <p>
            It's okay. The residents of Solana city can seem a little odd at
            times but you'll eventually grow fond of us.
          </p>

          <p>
            Next stop, lets hit up the local Currency Exchange market and
            understand a little more about what other currencies exist on
            Solana.
          </p>

          <div class="border-b my-8 border-white/20"></div>

          <!-- <div class="text-2xl font-bold" id="stop-3--jupiter">
        Stop 3 • Jupiter
      </div> -->
          <p>
            <img
              class="w-1/4 mb-8"
              src="../assets/jupiter2.png"
              alt="Untitled"
            />
          </p>
          <p class="">
            Jupiter is Solana’s premier Currency Exchange market. This is the
            place to visit whenever you want to swap currencies/tokens with one
            another.
          </p>
          <div
            class="text-2xl mt-8 font-semibold text-[#ebebeb]"
            id="tokens-currencies-what"
          >
            Tokens? Currencies? What?
          </div>
          <p>
            If you’ve following along, your wallet should only contain SOL till
            now. However, other currencies also exist on solana.
          </p>
          <div class="flex flex-col mb-6">
            For example, your wallet could also contain:

            <span
              > <span class="text-white font-semibold"> USDC, USDT </span> — Stablecoins pegged to the value of the US
              Dollar</span
            >

            <span
              >
              <span class="text-white font-semibold"> MNDE, LFNTY, ORCA </span>— Tokens belonging to teams and projects on
              Solana
            </span>

            <span
              ><span class="text-white font-semibold"> mSOL, SOL </span> — Staked version of Sol (will explain this later
              on)</span
            >

            <span> <span class="text-white font-semibold"> Bonk </span>— Meme tokens</span>
          </div>

          <p>
            Jupiter lets you swap your SOL for any of these tokens, or any of
            these tokens for SOL. It does so by aggregating all of the
            underlying markets across Solana to give you the best price for any
            of these assets.
          </p>
          <div
            class="text-2xl font-semibold mt-8 text-[#ebebeb]"
            id="things-to-do-here--swap-sol-for-some-usdc"
          >
            Things to do here — Swap SOL for some USDC
          </div>
          <p>
            Go ahead, exchange some of your SOL for USDC. You can do as small as
            a trade that it will let you do.
          </p>
          <div class="text-xl font-semibold mt-8 mb-2 text-[#ebebeb]">
            Steps
          </div>
          <ol class="list-decimal ml-4 mb-4">
            <li>Go to <a href="https://jup.ag">https://jup.ag</a></li>
            <li>Connect your Wallet → Select Phantom</li>
            <li>For Token One Select Sol</li>
            <li>For Token Two select USDC</li>
            <li>Enter the amount you want to swap</li>
            <li>Click Swap</li>
          </ol>
          <!-- <p>Congratulations! You’ve done a swap and it just cost you 0.000001$!</p> -->

          <div class="border-b my-8 border-white/20"></div>

          Click below once you've done a swap on Jupiter and want to move on

          <div
            @click="display('marinade')"
            class="
              my-8
              h-16
              grid
              font-semibold
              rounded-lg
              bg-white/20
              w-auto
              place-items-center
              cursor-pointer
              text-white
              hover:bg-white/30
            "
          >
            Click here to continue with the tour
          </div>

          <!-- <div class="border-b-2 my-8"></div> -->
        </div>
      </div>

      <div
        id="safety"
        v-if="showMarinade"
        ref="marinade"
        class="
          grid
          grid-cols-[1fr_minmax(260px,380px)_1fr]
          px-8
          pt-4
          sm:grid-cols-[1fr_600px_1fr] sm:pt-16 sm:px-16
          text-lg
          lg:grid-cols-[1fr_minmax(600px,1fr)_1fr]
          pt-16
          bg-black
          text-[#8a8a8a] text-md
        "
      >
        <div class="col-start-2">
          <div
            class="text-2xl font-bold text-[#ebebeb]"
            id="important-note-for-your-safety"
          >
            Important Safety Announcement
          </div>
          <p>
            As your tour guide, I need to take this moment to tell you the
            uncomfortable truth that Solana City is rife with crime.
          </p>
          <p>
            When code is law, there exist people out there who will try to
            exploit unsuspecting foreign visitors.
          </p>
          <p class="text-xl font-semibold text-[#ebebeb]">
            Broad-types of crime to avoid
          </p>
          <ul class="list-disc ml-4 mb-4">
            <li class="text-white">Spoofed Websites</li> Always make sure you're on the correct website. And when in doubt go check the project's twitter.
            <li class="text-white" >Wallet-drainers</li> Be careful when accepting transactions on sites you're not familiar with.
            <li class="text-white" >NFT Rugs</li> NFTs projects often make tall claims and don't live up to them. Do your due diligence before you pick one.
            <li class="text-white">Fake tokens</li> When anyone can create any currency, they do. Make sure you understand what token you're receiving.
          </ul>
          <p>
            This trip is carefully curated and we’re only starting with 0.05 Sol
            so losing everything is still ok.          </p>
          <p>
            But if you ever do decide to come back with a bigger purse, please
            please educate yourself on how to stay safe. It <strong class="text-white">is</strong> possible to stay safe here, it just takes vigilance.
          </p>

          <p class="py-8">
            With that out of the way, let's continue with our trip.
          </p>
        </div>
      </div>

      <div
        id="marinade"
        v-if="showMarinade"
        class="
          grid
          grid-cols-[1fr_minmax(260px,380px)_1fr]
          px-8
          pt-4
          sm:grid-cols-[1fr_600px_1fr] sm:pt-16 sm:px-16
          text-lg
          lg:grid-cols-[1fr_minmax(600px,1fr)_1fr]
          bg-[#E9FAF5]
          text-[#333333] text-md
        "
      >
        <div class="col-start-2">
          <p class="pb-4">
            When you submitted the transaction on Jupiter, it must have cost you
            0.000005 Sol
          </p>
          <p>
            Lets visit Marinade to understand who you are paying this amount to.
            Along the way, you will also learn how the Solana blockchain runs and how
            you could be benefiting from it.
          </p>

          <div class="border-b border-gray-800/20 pt-8"></div>

          <!-- <div class="text-2xl font-bold my-4" id="stop-4--marinade">
        Stop 4 • Marinade
      </div> -->
          <p>
            <img
              class="w-2/5 mb-8 mt-12"
              src="../assets/marinade2.png"
              alt="Untitled"
            />
          </p>
          <p>
            Marinade is project on Solana that lets you secure Solana and earn
            rewards along the way.
          </p>
          <div
            class="text-2xl font-semibold mt-8 text-[#222222]"
            id="understanding-how-solana-runs"
          >
            Understanding how Solana runs
          </div>
          <p>
            Whenever you submit a transaction via Phantom, it goes to a
            Validator.
          </p>
          <p>
            A Validator is a very powerful computer that runs the software
            underlying Solana. There are many of them and they’re spread across
            the globe. You can see the current count on <a href="https://solana.fm" target="_blank"> Solana.fm </a>
          </p>
          <p>
            These Validators ‘validate’ transactions. They confirm things like
            “Yes, this account has the money it is trying to send”, “Yes, this
            transaction is telling me to send money from Account A to account B
            and this smart contract allows for it.”
          </p>
          <p>
            The transaction fee you pay goes to the Validators for for doing all
            of this work.
          </p>
          <p>
            While anyone can run a validator, all validators are not equal. A
            validator is as powerful as the amount of the SOL that is delegated
            to it. Users can delegate their Sol to a validator and in return,
            they earn interest on their Sol.
          </p>
          <div
            class="text-2xl font-semibold mt-12 text-[#222222]"
            id="where-does-marinade-fit-in"
          >
            Where does Marinade fit in?
          </div>
          <p>
            People give Marinade their SOL, this is called <span class="font-semibold">Staking</span> . Marinade
            then takes this SOL and distributes it across validators on Solana.
            This way, there’s no singular all-powerful validator and the
            resiliency of the network is better.
          </p>
          <p>But, why would people give Marinade their Sol?</p>
          <p>
            When you deposit Sol to Marinade, you get a token called mSOL in
            return. The value of Sol to mSol increases by about 6% a year. So
            you end up earning interest on your Sol.
          </p>

          <div class="text-2xl font-bold mt-12 text-[#222222]">
            Things to do here — Stake Sol on Marinade
          </div>
          <p class="text-lg font-semibold pt-2">Steps</p>
          <ol class="list-decimal ml-4 mb-2">
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
          <p></p>

          <div class="border-b-2 my-8"></div>

          Click below once you're done staking with Marinade to continue with
          the tour

          <div
            @click="display('solend')"
            class="
              my-8
              h-16
              grid
              font-semibold
              rounded-lg
              bg-black/80
              w-auto
              place-items-center
              cursor-pointer
              text-[#ebebeb]
              mb-16
              hover:bg-black/90
            "
          >
            Click here to continue with the tour
          </div>

          <!-- <div class="border-b-2 my-8"></div> -->
        </div>
      </div>

      <div
        id="Solend"
        v-if="showSolend"
        ref="solend"
        class="
          grid
          grid-cols-[1fr_minmax(260px,380px)_1fr]
          px-8
          pt-4
          sm:grid-cols-[1fr_600px_1fr] sm:pt-16 sm:px-16
          text-lg
          lg:grid-cols-[1fr_minmax(600px,1fr)_1fr]
          bg-[#111111]
          text-[#8a8a8a] text-md
        "
      >
        <div class="col-start-2">
          <p>Next up, a bank.</p>
          <!-- <div class="text-2xl font-bold mt-8 text-[#ebebeb]" id="stop-5--solend">
        Stop 5 • Solend
      </div> -->
          <p>
            <img
              class="w-1/4 mb-4 mt-8"
              src="../assets/solend2.png"
              alt="Untitled"
            />
          </p>
          <p>
            Solend is Solana’s premier banking destination. It takes deposits
            from some users and lends a portion of them out to others. The
            borrowers pay interest which goes to all the depositors.
          </p>
          <div
            class="text-2xl font-semibold mt-4 text-[#ebebeb]"
            id="understanding-lending-on-solana"
          >
            Understanding Lending on Solana
          </div>
          <p>
            Most DeFi lending products like Solend only support
            over-collateralized loans. Borrowers need to pledge more money than
            the amount they are borrowing.
          </p>
          <p>
            What? You might wonder. Why would someone who has money require to
            borrow money?
          </p>
          <p>
            That’s because money on Solana takes the form of different tokens
            with differing value. These borrows are depositing one token (say
            SOL) and borrowing a different token (say USDC).
          </p>
          <p>
            An example — Let’s say you own some Solana which you bought at $20
            and the current price is $25. You don’t want to sell because you
            believe that it’ll go up to $100 in the future. But you really need
            5 $USDC right now to pay for your Netflix.
          </p>
          <p>
            Solend is your friend! You can deposit $20 worth of $SOL and borrow
            5$USDC against it. You better hope the price of SOL increases
            because if falls by a certain %, you might lose your entire deposit.
          </p>
          <div class="text-xl font-semibold mt-8 text-[#ebebeb]">
            Things to do at Solend — Deposit to start earning interest!
          </div>
          <p>
            The bankteller might laugh you out the room if you walked in a bank
            and asked to deposit 0.001 USDC to get interest on it.
          </p>
          <p>
            Solend wouldn’t. Smart contracts don’t judge people by the amount of
            money in their wallet.
          </p>
          <p class="text-lg font-semibold pt-4 text-[#ebebeb]">Steps</p>
          <ol class="list-decimal ml-4 mb-4">
            <li>Go to <a href="https://solend.fi">https://solend.fi</a></li>
            <li>Connect your Wallet → Select Phantom</li>
            <li>Click on Turbo-Sol Pool</li>
            <li>Click on USDC</li>
            <li>Enter Amount → Deposit</li>
            <li>Accept Transaction</li>
          </ol>

          <div class="border-b my-8 border-white/20"></div>

          <div
            @click="display('frakt')"
            class="
              my-8
              h-16
              grid
              font-semibold
              rounded-lg
              bg-white/20
              w-auto
              place-items-center
              cursor-pointer
              text-white
              hover:bg-white/30
              mb-16
            "
          >
            Click here to continue with the tour
          </div>

          <!-- <div class="border-b-2 my-8"></div> -->
        </div>
      </div>

      <div
        id="frakt"
        ref="frakt"
        v-if="showFrakt"
        class="
          grid
          grid-cols-[1fr_minmax(260px,380px)_1fr]
          px-8
          pt-4
          sm:grid-cols-[1fr_600px_1fr] sm:pt-16 sm:px-16
          text-lg
          lg:grid-cols-[1fr_minmax(600px,1fr)_1fr]
          bg-[#E9FAF5]
          text-[#33333] text-md
        "
      >
        <!-- bg-gradient-to-b from-[#FD5C28] to-[#F0CB35] -->

        <div class="col-start-2">
          <p>Congratulations on your first decentralised deposit!</p>
          <p>That was pretty cool, right? But also boring.</p>
          <p>
            Lets go check out another lending protocol called Frakt which gives
            loans on NFTs!
          </p>

          <div class="border-b border-gray-800/20 my-12"></div>

          <!-- <div class="text-2xl font-bold mt-4 mb-4">Stop 6 • Frakt</div> -->
          <p>
            <img
              class="w-1/4 mb-4 pb-4"
              src="../assets/frakt2.png"
              alt="Untitled"
            />
          </p>
          <p>
            While you were shopping on MagicEden, you must have noticed some
            really expensive NFTs worth &gt;100 Sol. For example, Solana Monkey
            Business or ABC.
          </p>
          <p>
            Suppose you owned one of these NFTs but needed 10$ temporarily to
            pay for your Netflix.
          </p>
          <p>Frakt is your friend.</p>
          <p class="text-lg font-bold">
            Frakt lets users mortgage their NFT and borrow SOL against them.
          </p>
          <p>Some common questions</p>
          <ol class="list-disc ml-4">
            <li>
              <span class="font-semibold">
                Who provides this Sol for the loan?
              </span>
              — Other users like yourself. Some of these NFT collections are
              fairly popular and desirable and there are people who trust that
              the value of
            </li>
            <li>
              <span class="font-semibold"> What is the risk? </span> If the NFT
              collection drops in value, Frakt will take possession of the NFT
              and auction it out at half-price. This is riskier as you can
              imagine which is why the lending rates are higher
            </li>
          </ol>
          <div class="text-2xl font-bold mt-8 mb-4">
            Things to do at Frakt • Deposit Sol to earn a higher interest
          </div>
          <p class="font-semibold">Steps</p>
          <ol class="list-decimal ml-4">
            <li>Go to app.frakt.com</li>
            <li>Go to Lend</li>
            <li>Connect your Wallet → Select Phantom</li>
            <li>Select an NFT Collection and click Deposit</li>
            <li>Choose Amount → Deposit</li>
            <li>Accept Transaction</li>
          </ol>

          <div class="border-b border-gray-800/20 my-8"></div>

          <p>
            Take a moment to compare the deposit rate on Solend for Sol with the
            borrow rate on Frakt for Sol.
          </p>
          <p>Solend — 5%</p>
          <p>Frakt — 20%</p>
          <p>
            You might wonder — What if you deposit USDC on Solend, borrow Sol
            against it and then lend this Sol out on Frakt?
          </p>
          <p>
            Congratulations, you’re now thinking like a degen (it’s a fond word
            we use around here).
          </p>

          <div class="border-b-2 my-8"></div>

          <div
            @click="display('degen')"
            class="
              my-8
              h-16
              grid
              font-semibold
              rounded-lg
              bg-gray-800/80
              w-auto
              place-items-center
              cursor-pointer
              text-white
              hover:bg-gray-800/90
            "
          >
            Continue to the final stop!
          </div>

          <!-- <div class="border-b-2 my-8"></div> -->
        </div>
      </div>

      <div
        id="degencoinflip"
        ref="degen"
        v-if="showDegen"
        class="
          grid
          grid-cols-[1fr_minmax(260px,380px)_1fr]
          px-8
          pt-4
          sm:grid-cols-[1fr_600px_1fr] sm:pt-16 sm:px-16
          text-lg
          lg:grid-cols-[1fr_minmax(600px,1fr)_1fr]
          bg-[#111111]
          text-[#8a8a8a] text-md
        "
      >
        <div class="col-start-2">
          <p>
            Alright, the sun is getting low. Let’s end this tour with a visit to
            the local casino.
          </p>
          <!-- <div class="text-2xl font-bold mt-4 mb-4">Final Stop • DegenCoinFlip</div> -->
          <p>
            <img
              class="w-1/5 mb-12 mt-12"
              src="../assets/degencoinflip2.png"
              alt="Untitled"
            />
          </p>
          <p>
            <span class="text-white">DegenCoinFlip</span> is a casino where you
            can play <span class="text-white">Double or Nothing</span> . You put
            up some money, you either win double or you lose it all. Odds are
            exactly 50/50 with a 3.5% fee on your winnings.
          </p>

          <div class="text-2xl text-white font-semibold mt-8">
            Things to do here — Try your luck
          </div>

          <p>
            Mathematically, sure you’re always at a disadvantage because but try
            it out! Vacation money is meant to be spent afterall.
          </p>

          <p class="text-lg font-semibold pt-2 text-white">Steps</p>
          <ol class="list-decimal ml-4 pb-32">
            <li>Go to degencoinflip.com</li>
            <li>Connect Wallet</li>
            <li>Enter Amount</li>
            <li>Flip</li>
            <li>Accept Transaction</li>
          </ol>

          <!-- <div class="border-b border-gray-800 my-8"></div> -->
          <!-- <div class="border-b-2 my-8"></div> -->
        </div>
      </div>

      <div
        id="ending"
        v-if="showDegen"
        class="
          grid
          grid-cols-[1fr_minmax(260px,380px)_1fr]
          px-8
          pt-4
          sm:grid-cols-[1fr_600px_1fr] sm:pt-16 sm:px-16
          text-lg
          lg:grid-cols-[1fr_minmax(600px,1fr)_1fr]
          bg-black
          text-white text-md
          pb-48
        "
      >
        <div class="col-start-2">
          <p>And with that we’ve come to the end of the tour.</p>
          <p>
            Thank you for letting me show you around and I hope you had a nice
            first day in Solana city.
          </p>
          <p>
            If you enjoyed being shown around, I would appreciate a 
            shout-out at <a href="https://twitter.com/adarshrao_">@adarshrao_</a> 
          </p>

          <p>
            Know somebody that might benefit from this guide? Send it to them.
          </p>


          <!-- <p class="underline text-blue-500">Click here to Tweet</p> -->

          <!-- <div class="text-xl font-semibold" id="looking-for-more">
        Looking for more?
      </div>
      <p>Test your understanding by taking this Quiz — Link to Quiz</p>

      <p class="text-md font-semibold pt-4">
        A Day 2 Itinerary would look something like —
      </p>
      <ul>
        <li>Mint an NFT</li>
        <li>Trade tokens on Openbook</li>
        <li>Trade futures on Mango</li>
        <li>Understand AMMs through Lifinity</li>
        <li>Trade Options on Zeta</li>
        <li>Create a Multi-Sig Wallet on Squads w/ A Friend</li>
      </ul>
      <p class="pt-8">
        If you’d like a guide for Day 2, please let me know in the comments
        below!
      </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "solana-wallets-vue/styles.css";

import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { initWallet, useWallet } from "solana-wallets-vue";
import { WalletMultiButton } from "solana-wallets-vue";

const wallets = [new PhantomWalletAdapter()];

initWallet({ wallets, autoConnect: false });

const data = useWallet();

const { connected } = useWallet();

export default {
  name: "App",
  data() {
    return {
      showRemainingContent: connected,
      // showRemainingContent: true,
      showMagicEden: false,
      showJupiter: false,
      showMarinade: false,
      showSolend: false,
      showFrakt: false,
      showDegen: false,
      connected,
    };
  },
  components: {
    WalletMultiButton,
  },
  computed: {},
  methods: {
    async boop() {
      // console.log("boop")
      // this.showRemainingContent = !this.showRemainingContent;
      await setTimeout(() => {
        this.$refs["show"].scrollIntoView({ behavior: "smooth" });
      }, 500);
    },
    display(string) {
      switch (string) {
        case "magiceden":
          this.showMagicEden = !this.showMagicEden;
          setTimeout(() => {
            console.log("This is running");
            this.$refs["eden"].scrollIntoView({ behavior: "smooth" });
          }, 500);
          break;
        case "jupiter":
          this.showJupiter = !this.showJupiter;
          setTimeout(() => {
            console.log("This is running");
            this.$refs["jupiter"].scrollIntoView({ behavior: "smooth" });
          }, 500);
          break;
        case "marinade":
          this.showMarinade = !this.showMarinade;
          setTimeout(() => {
            console.log("This is running");
            this.$refs["marinade"].scrollIntoView({ behavior: "smooth" });
          }, 500);
          break;
        case "solend":
          this.showSolend = !this.showSolend;
          setTimeout(() => {
            console.log("This is running");
            this.$refs["solend"].scrollIntoView({ behavior: "smooth" });
          }, 500);
          break;
        case "frakt":
          this.showFrakt = !this.showFrakt;
          setTimeout(() => {
            console.log("This is running");
            this.$refs["frakt"].scrollIntoView({ behavior: "smooth" });
          }, 500);
          break;
        case "degen":
          this.showDegen = !this.showDegen;
          setTimeout(() => {
            console.log("This is running");
            this.$refs["degen"].scrollIntoView({ behavior: "smooth" });
          }, 500);
          break;
      }
    },
  },
};
</script>

<style scoped>
p {
  margin-bottom: 16px;
  margin-top: 16px;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

/* .slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */

/* div p {
  margin-bottom: 8px;
  margin-top: 8px;
} */
</style>