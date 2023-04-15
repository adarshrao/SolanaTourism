<template>
  <div class="h-screen w-screen bg-black p-8">
    <div id="navigation" class="font-bold text-lg text-white text-center">
      <span> SOLANA </span> <br />
      <span class="">TOURISM </span>
    </div>

    <div
      class="
        bg-[#1B1B1B]
        w-100vw
        mx-32
        mt-16
        h-96
        text-white
        grid grid-cols-3
        rounded-xl
      "
    >
      <div class="col-span-2 p-12">
        <div class="text-xl font-bold">Welcome to Solana City!</div>
        <div class="mt-2 w-96">
          This tour guide is meant to familiarize you with the basics of the
          Solana blockchain. More text. More text. To continue, press the Next
          button below
        </div>

        <div id="buttons" class="flex flex-row mt-8 gap-8">
          <div class="">&lt;- Prev</div>
          <div class="">Next -></div>
        </div>
      </div>
      <div
        id="Navigation"
        class="flex flex-col gap-3 text-gray-400 bg-[#181818] p-12"
      >
        <div class="text-xl">Itinerary</div>
        <div>Getting your visa, Phantom</div>
        <div>Getting your visa, Phantom</div>
        <div>Getting your visa, Phantom</div>
        <div>Getting your visa, Phantom</div>
        <div>Getting your visa, Phantom</div>
        <div>Getting your visa, Phantom</div>
        <div>Getting your visa, Phantom</div>
      </div>
    </div>
  </div>
</template>