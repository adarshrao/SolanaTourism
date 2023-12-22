<template>
  <div class="h-screen w-screen bg-black p-8">
    <div id="content" class="max-w-5xl sm:mx-auto mx-6 mt-12 sm:mt-0">
      <div class="flex flex-row sm:justify-between col-start-2">
        <div id="heroSection">
          <div
            class="text-white sm:w-3/4 text-2xl sm:text-4xl mb-12 sm:mb-0 sm:mt-24 font-bold"
          >
            Spend your USDC at these stores that accept Solana USDC
          </div>

          <div class="hidden sm:flex text-white/50 mt-4 text-sm">
            List compiled by
            <a class="ml-1 text-white/50" href="https://solanatourism.com"
              >SolanaTourism.com</a
            >
          </div>
        </div>

        <div class="sm:flex">
          <img class="" src="../assets/solanaStore.png" alt="" />
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-4 sm:gap-12 relative">
        <a href="https://bidali.com?ref=solanaTourism" target="_blank">
          <div>
            <div
              class="px-6 h-32 py-6 rounded-md mt-4 text-black cursor-pointer bg-[#FFFFFF] hover:bg-[#FFFFFF]/80"
            >
              <div class="flex flex-col justify-center items-center">
                <div class="w-32 sm:mb-2 sm:w-32 mr-1">
                  <img
                    class="sm:h-8"
                    src="../assets/storeLogos/Bidali.png"
                    alt=""
                  />
                </div>

                <div class="flex flex-col text-center sm:text-center mt-6">
                  <div class="text-sm">
                    Buy Giftcards across thousands of retailers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a href="https://helius.dev?ref=solanaTourism" target="_blank">
          <div
            class="px-6 py-6 h-32 rounded-md mt-4 text-black cursor-pointer bg-[#FFFFFF] hover:bg-[#FFFFFF]/80"
          >
            <div class="flex flex-col justify-center items-center">
              <div class="w-32 sm:mb-4 sm:mb-0 sm:w-32 h-auto mr-1">
                <img class="h-8" src="../assets/storeLogos/Helius.png" alt="" />
              </div>

              <div class="flex flex-col text-center sm:text-center mt-4">
                <div class="text-sm">
                  Supercharge your Solana experience by buying a private RPC
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>

      <div class="text-white text-center mt-16 flex flex-col gap-4">
        <div>Does your store accept USDC via Solana?</div>

        <div>
          <a
            class="text-blue"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdun4vM_CH8tqihEAsadoBZfCUbGHfxq4PXPbodmE2fhkxKaw/viewform?usp=sf_link"
            target="_blank"
            >Fill up this form</a
          >
          to advertise here for free!
        </div>
      </div>
    </div>
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
