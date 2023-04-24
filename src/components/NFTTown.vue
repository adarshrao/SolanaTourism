<template>
  <div class="h-screen w-screen bg-black sm:p-8">
    <div
      id="navigation"
      class="font-bold text-base pt-8 sm:text-lg text-white text-center"
    >
      <router-link to="/">
        <span> SOLANA TOURISM </span>
      </router-link>
    </div>

    <div
      id="map"
      class="
        relative
        bg-[#1B1B1B]
        max-w-7xl
        mx-auto
        mt-16
        h-3/4
        text-white
        rounded-xl
        sm:p-12
        overflow-hidden
        bg-[url('../assets/map5.png')] bg-repeat-x bg-cover
      "
    >
      <!-- bg-[url('../assets/map5.png')] bg-repeat-x bg-cover -->
      <!-- <div class="absolute"><img src="../assets/largeMap1.png" alt="" /></div> -->
      <div class="flex flex-col">
        <div class="text-2xl font-bold pt-4 pl-4 sm:pt-0 sm:pl-0">
          NFT Square
        </div>
        <!-- <div class="bg-black w-max py-4 px-8 mt-4 rounded-md">
          Explain NFTs like I'm 5
        </div> -->

        <!-- <div class="relative -top-1 text-xs">
          Think we're missing a project? Join Discord and let us know!
        </div> -->
      </div>

      <div class="relative">
        <router-link to="/tensor">
          <div
            class="
              absolute
              fixed
              left-56
              top-4
              sm:top-0 sm:left-96
              flex flex-row
            "
          >
            <div class="w-12 mr-2">
              <img src="../assets/tensor.png" alt="" />
            </div>
            <div class="flex flex-col">
              <div class="font-bold">Tensor</div>
              <div class="font-light">Pro NFT Trading on Solana</div>
            </div>
          </div>
        </router-link>
        <router-link to="/magiceden">
          <div class="absolute fixed sm:right-96 left-16 top-32 flex flex-row">
            <div class="w-12 mr-2">
              <img src="../assets/logos/magicEden.png" alt="" />
            </div>
            <div class="flex flex-col">
              <div class="font-bold">MagicEden</div>
              <div class="font-light">NFT Marketplace</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>