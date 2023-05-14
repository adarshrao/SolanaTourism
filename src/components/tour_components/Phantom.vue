<template>
  <div class="">
    <p class="mt-8">To access the internet, you use a web browser</p>
    <p class="mt-2">
      To access the Solana blockchain, you will need a Solana wallet.
    </p>
    <p>And that is our first stop.</p>

    <div class="border-b border-gray-800 pt-4"></div>

    <!-- <div class="text-3xl font-bold pt-12">1 — Phantom</div> -->
    <p>

      <p class="pt-8">There are several wallet providers <a target="_blank" href="https://www.backpack.app/downloads">Backpack</a>, <a target="_blank" href="https://glow.app/">Glow</a>, <a target="_blank" href="https://solflare.com/">Solflare</a> but the one we're going to use in this tour is called — </p>

      <a target="_blank" href="https://phantom.app/">
      <img
        class="w-3/4 sm:w-2/5 my-4 pt-4 pb-4"
        src="../../assets/phantom2.png"
        alt="Untitled"
      />
      </a>
    </p>
    
    <p>
      Phantom lets you to create a Solana wallet that you will need as we make
      our way through the day’s itinerary. Creating a wallet is free, easy and
      only takes a few minutes.
    </p>
    <div class="text-2xl font-semibold mt-12 text-[#ebebeb]">
      What is a wallet?
    </div>
    <p class="!mt-2">
      The wallet is your access pass to the blockchain. To connect to any app on
      Solana and take an action, you will need to connect with a compatible
      wallet.
    </p>
    <p>
      Every wallet consists of two parts — A
      <span class="text-white font-semibold">Public key</span> and a
      <span class="text-white font-semibold">Private key </span>.
    </p>
    <ul class="list-decimal ml-4">
      <li>
        <div class="text-md font-bold text-white mt-8">Public Key</div>
        <p>
            Think of this as your account address, your username, your identity. You can share this with other people.
          </p>
        <ul class="list-disc ml-4">
        
          <li>
            These are 44 characters long and consist of a mix of letters and
            numbers. Examples —
            <ul class="list-disc mb-4">
              <li class="list-none ml-6 break-words text-gray-500">
                HGdKP7AE47NWePzoZp4xjKCdhZS7VtAwBm78h3i7CTVc
              </li>
              <li class="list-none ml-6 break-words text-gray-500">
                9jpuPgge8TyoAS66gf58F8St24SB1j2fFc1ag7HRhbox
              </li>
            </ul>
          </li>
          
        </ul>
      </li>
      <li>
        <div class="text-md font-bold mt-8 text-white">Private Key</div>
        <p>Think of this as the password to your public key. <span class="text-red-600">You should never share your private key with any one.</span> Any one with your private key can access the corresponding account and take transactions on your behalf. </p>

            <p>This can take two forms.</p>
        <ul>
          <li class="">            
            <ul>
              <li class="list-disc ml-4"> 
               <span class="text-white">A set of 12 words that are easy to remember </span> Eg: <span class="text-gray-500">Blunt Wrist Spicy Glaze Hiker Plume Lusty Caper Grasp Prawn
                Flume Tonic</span>
              </li>
              <li class="list-disc ml-4"> 
               <span class="text-white">A long string of letters and numbers</span> Eg: <span class="text-gray-500 break-words">2TQ6DjMnB4tnmBJABJS81ay6Av6BkEUN71nr6z28goyVLhR5wiUpChp28oUd8puV6RRPVaem6H3Mop4r8ozqz5fRw</span>
              </li>
            </ul>
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
        <a target="_blank" href="https://phantom.app/download"
          >https://phantom.app/downloads</a
        >
      </li>
      <li>Select your browser of choice</li>
      <li>Install the extension</li>
      <li>Click on the extension and follow the steps</li>
      <li>Store your 12-word-mnemonic somewhere safe!</li>
    </ul>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 16px;
  margin-top: 16px;
}
</style>