<template>
  <div class="h-full w-screen bg-black p-8">
    <div id="content" class="max-w-5xl sm:mx-auto mx-6 mt-12 sm:mt-0">
      <div class="flex flex-col sm:flex-row sm:justify-between col-start-2">
        <div id="heroSection">
          <div
            class="
              text-white
              mx-auto
              w-full
              text-4xl
              sm:text-7xl sm:mt-24
              font-bold
            "
          >
            SOLANA T
          </div>
          <div class="text-lg sm:text-xl text-white opacity-50 w-96 mt-2">
            Curated tour guides introducing you to the best projects on Solana
          </div>

          <div class="flex flex-row mt-4 items-center">
            <img
              class="w-6 h-max mr-4"
              src="../assets/icons/discord.png"
              alt=""
            />
            <img
              class="w-6 h-max mr-4"
              src="../assets/icons/twitter.png"
              alt=""
            />
          </div>
        </div>

        <div
          class="
            flex flex-col
            justify-center
            sm:gap-4
            text-gray-500
            hidden
            sm:flex sm:text-right
            mt-8
          "
        >
          <div class="flex flex-col">
            <span class="text-white font-semibold">Solana City Census</span>
            <!-- <span>2018 • Block 1</span> -->
          </div>
          <div class="flex flex-col">
            <span>Population</span>
            <span>24M Active Wallets</span>
          </div>
          <div class="flex flex-col">
            <span>Businesses</span>
            <span>12k Programs</span>
          </div>
          <div class="flex flex-col">
            <span>Law and Order</span>
            <span>4k+ Validators</span>
          </div>
        </div>
      </div>

      <div class="col-start-2 relative">
        <div
          id="guide"
          class="
            mt-14
            text-white
            p-8
            rounded-lg
            border-2 border-[#6E1E45]
            pb-12
            overflow-hidden
          "
        >
          <div class="text-lg sm:text-2xl font-semibold mb-1">
            A first timer's guide to Solana
          </div>
          <div class="font-light w-96">
            Experience a guided tour through the best attractions in Solana City
          </div>

          <div
            class="
              bg-white
              py-1
              px-4
              mt-4
              font-semibold
              rounded-sm
              w-max
              text-black
            "
          >
            <router-link to="/tour"> Begin Tour </router-link>
          </div>

          <div class="relative -top-3 left-32 hidden sm:flex">
            <img class="w-5/6" src="../assets/line.png" />
          </div>

          <div
            class="
              relative
              hidden
              sm:flex
              flex-row
              text-center
              gap-10
              -top-20
              left-72
              h-0
            "
          >
            <div class="flex flex-col items-center">
              <img class="w-10" src="../assets/logos/phantom.png" />
              <div class="text-sm mt-0">Phantom</div>
              <div class="text-xs mt-4 text-gray-400">Visa Office</div>
            </div>

            <div class="flex flex-col items-center">
              <img class="w-10" src="../assets/logos/jupiter.png" />
              <div class="text-sm">Jupiter</div>
              <div class="text-xs mt-4 text-gray-400">Currency Exchange</div>
            </div>
            <div class="flex flex-col items-center">
              <img class="w-10" src="../assets/logos/solend.png" />
              <div class="text-sm">Solend</div>
              <div class="text-xs mt-4 text-gray-400">Decentralized Bank</div>
            </div>
            <div class="flex flex-col items-center">
              <img class="w-10" src="../assets/logos/marinade.png" />
              <div class="text-sm">Marinade</div>
              <div class="text-xs mt-4 text-gray-400">Law Enforcement</div>
            </div>
            <div class="flex flex-col items-center">
              <img class="w-10" src="../assets/logos/magicEden.png" />
              <div class="text-sm">Magic Eden</div>
              <div class="text-xs mt-4 text-gray-400">Buy Art</div>
            </div>
            <div class="flex flex-col items-center">
              <img class="w-10" src="../assets/logos/frakt.png" />
              <div class="text-sm">Frakt</div>
              <div class="text-xs mt-4 text-gray-400">Mortgage Art</div>
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-3">
          <div class="text-xl font-semibold text-white mt-8">Coming Soon</div>

          <div class="flex flex-col sm:flex-row gap-8">
            <div
              class="
                border border-gray-800
                px-6
                py-6
                rounded-md
                mt-4
                text-white
                opacity-50
                cursor-not-allowed
                hover:opacity-40
              "
            >
              <div
                class="flex flex-col sm:flex-row justify-center items-center"
              >
                <div class="w-12 mb-4 sm:mb-0 sm:w-16 h-auto mr-6">
                  <img src="../assets/traders-guide.png" alt="" />
                </div>

                <div class="flex flex-col text-center sm:text-left">
                  <div class="text-xl font-semibold">
                    Trader’s guide to Solana
                  </div>
                  <div class="flex flex-row">
                    <!-- <div
                    class="
                      ml-3
                      text-xs
                      px-2
                      rounded-sm
                      bg-white
                      text-black
                      py-1
                    "
                  >
                    Coming Soon
                  </div> -->
                  </div>
                  <div class="text-sm">
                    Like speculating? Learn the best ways to trade crypto on
                    Solana via this tour
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                flex flex-col
                border border-gray-800
                px-6
                py-6
                rounded-md
                mt-4
                text-white
                opacity-50
                cursor-not-allowed
                hover:opacity-40
              "
            >
              <div class="flexflex-col sm:flex-row justify-center items-center">
                <div class="w-16 h-max mr-6">
                  <img src="../assets/hustlers-guide.png" alt="" />
                </div>

                <div class="flex flex-col">
                  <div class="flex flex-row items-center">
                    <div class="text-xl font-semibold">
                      Hustler’s guide to Solana
                    </div>
                    <div class="">
                      <!-- <div
                      class="
                        ml-3
                        text-xs
                        px-2
                        rounded-sm
                        bg-white
                        text-black
                        py-1
                      "
                    >
                      Coming Soon
                    </div> -->
                    </div>
                  </div>
                  <div class="text-sm">
                    Learn some of the ways in which the average citizen on
                    Solana makes a living
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="text-xl font-semibold text-white mt-8">
            Prefer to explore by yourself?
          </div>

          <div class="grid grid-cols-2 gap-8">
            <div
              class="
                relative
                flex flex-col
                bg-gray-800
                px-6
                py-4
                rounded-md
                mt-4
                text-white
                pb-12
                overflow-hidden
              "
            >
              <router-link to="/defi-downtown">
                <img
                  class="absolute object-fill"
                  src="../assets/shortMap1.png"
                />
                <div class="text-xl font-semibold">DeFi Downtown</div>
                <div class="text-sm">
                  Explore Solana projects that are making Decentralised Finance
                  a reality one day at a time
                </div>
              </router-link>
            </div>

            <div
              class="
                relative
                flex flex-col
                bg-gray-800
                px-6
                py-4
                rounded-md
                mt-4
                text-white
                pb-12
                overflow-hidden
              "
            >
              <router-link to="/nft-square">
                <img
                  class="absolute object-fill"
                  src="../assets/shortMap2.png"
                />
                <div class="text-xl font-semibold">NFT Square</div>
                <div class="text-sm">
                  NFTs are programmable art and Solana City has a lot of
                  projects on these.
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <!-- <div class="flex flex-col">
        <div class="text-xl font-semibold text-white mt-8">Other Guides</div>

        <div>
          <span class="font-semibold">Funding your Wallet</span> —
          <span
            >All the ways you can go from Fiat to owning your first crypto on
            Solana</span
          >
        </div>
        <div class="text-white">
          <span class="font-semibold">Safety Checklist</span> —
          <span class="font-light"
            >Blockchains can be unforgiving, here is a guide on how to stay
            safe.</span
          >
        </div>
        <div class="text-white">
          <span class="font-semibold">Funding your wallet</span> —
          <span class="font-light"
            >All the ways you can go from Fiat to owning your first crypto on
            Solana</span
          >
        </div>
      </div> -->
      </div>
    </div>
    <!-- <div id="navigation" class="font-bold text-lg text-white">
      <span> SOLANA T</span>
    </div> -->
  </div>
</template>

<style>
a {
  color: green;
}
h3 {
  font-size: 24px;
  font-weight: 600;
  color: white;
}
</style>