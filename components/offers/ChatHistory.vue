<template>
  <div class="relative w-full flex-col bg-gray-50 py-3 mt-2 ">
    <div class="flex w-full text-gray-900 text-base px-3 pb-2">
      Chat history
    </div>

    <div id="messages" class="flex flex-col space-y-4 p-3 px-3 h-60 scroll-smooth overflow-auto will-change-scroll scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch auto-scroll">
      <div class="chat-message">
        <div class="flex items-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span></div>
          </div>
          <!-- <img src="~/assets/images/profile/profile.jpg" alt="My profile" class="w-6 h-6 rounded-full order-1"> -->
          <div class="w-6 h-6 rounded-full order-1 bg-green text-white uppercase flex items-center justify-center text-sm">
            R
          </div>
        </div>
        <div class="flex flex-col text-xs w-full text-gray-600 mt-1 pl-8 items-start">
          1:02 PM | June 10
        </div>
      </div>
      <div class="chat-message">
        <div class="flex items-end justify-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-slate-300 text-gray-600 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry</span></div>
          </div>
          <img src="~/assets/images/profile/profile.jpg" alt="My profile" class="w-6 h-6 rounded-full order-2">
        </div>
        <div class="flex flex-col text-xs w-full text-gray-600 mt-1 pr-8 items-end">
          1:02 PM | June 10
        </div>
      </div>
      <div class="chat-message">
        <div class="flex items-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-200 text-gray-600">Lorem Ipsum is simply dummy text of the printing </span></div>
            <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-200 text-gray-600">Lorem Ipsum is simply dummy text </span></div>
            <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-200 text-gray-600">Lorem Ipsum is simply </span></div>
            <div>
              <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </span>
            </div>
          </div>
          <img src="~/assets/images/profile/profile.jpg" alt="My profile" class="w-6 h-6 rounded-full order-1">
        </div>
        <div class="flex flex-col text-xs w-full text-gray-600 mt-1 pl-8 items-start">
          1:02 PM | June 10
        </div>
      </div>
      <div class="chat-message">
        <div class="flex items-end justify-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-slate-300 text-gray-600 ">printing and typesetting industry</span></div>
          </div>
          <!-- <img src="~/assets/images/profile/profile.jpg" alt="My profile" class="w-6 h-6 rounded-full order-2"> -->
          <div class="w-6 h-6 rounded-full order-1 bg-green text-white uppercase flex items-center justify-center text-sm">
            K
          </div>
        </div>
        <div class="flex flex-col text-xs w-full text-gray-600 mt-1 pr-8 items-end">
          1:02 PM | June 10
        </div>
      </div>
      <div class="chat-message">
        <div class="flex items-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">Thanks for your message David</span></div>
          </div>
          <img src="~/assets/images/profile/profile.jpg" alt="My profile" class="w-6 h-6 rounded-full order-1">
        </div>
        <div class="flex flex-col text-xs w-full text-gray-600 mt-1 pl-8 items-start">
          1:02 PM | June 10
        </div>
      </div>
      <div class="chat-message">
        <div class="flex items-end justify-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div><span class="px-4 py-2 rounded-lg inline-block bg-slate-300 text-gray-600 ">Are you using sudo?</span></div>
            <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-slate-300 text-gray-600 ">dummy text of the printing and typesetting industry</span></div>
          </div>
          <img src="~/assets/images/profile/profile.jpg" alt="My profile" class="w-6 h-6 rounded-full order-2">
        </div>
        <div class="flex flex-col text-xs w-full text-gray-600 mt-1 pr-8 items-end">
          1:02 PM | June 10
        </div>
      </div>
      <div class="chat-message">
        <div class="flex items-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-200 text-gray-600"> Lorem Ipsum is simply dummy text of the printing </span></div>
            <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">dummy text of the printing and typesetting industry</span></div>
          </div>
          <img src="~/assets/images/profile/profile.jpg" alt="My profile" class="w-6 h-6 rounded-full order-1">
        </div>
        <div class="flex flex-col text-xs w-full text-gray-600 mt-1 pl-8 items-start">
          1:02 PM | June 10
        </div>
      </div>
      <div class="chat-message">
        <div class="flex items-end justify-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div><span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-slate-300 text-gray-600 ">Lorem Ipsum is simply dummy text of the printing</span></div>
          </div>
          <img src="~/assets/images/profile/profile.jpg" alt="My profile" class="w-6 h-6 rounded-full order-2">
        </div>
        <div class="flex flex-col text-xs w-full text-gray-600 mt-1 pr-8 items-end">
          1:02 PM | June 10
        </div>
      </div>
      <div class="chat-message">
        <div class="flex items-end">
          <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-200 text-gray-600">the printing and typesetting industry</span></div>
            <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-200 text-gray-600">text of the printing and typesetting industry</span></div>
            <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600">Lorem Ipsum typesetting industry</span></div>
          </div>
          <img src="~/assets/images/profile/profile.jpg" alt="My profile" class="w-6 h-6 rounded-full order-1">
        </div>
        <div class="flex flex-col text-xs w-full text-gray-600 mt-1 pl-8 items-start">
          1:02 PM | June 10
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  name: 'ChatHistory'
  //    mounted() {
  //     let modal = document.getElementById("icon-modals")!;
  //     let btn = document.getElementById("full-list")!;
  //     let closeBtn = document.getElementById("close-btns")!;

  //     modal.style.display = "none";

  //     btn.onclick = function () {
  //       modal.style.display = "block";
  //     }

  //     closeBtn.onclick = function () {
  //       modal.style.display = "none";
  //     }

//   }
})

</script>

<style>
  .-z-1 {
    z-index: -1;
  }

  .origin-0 {
    transform-origin: 0%;
  }

  input[type="text"]:focus ~ label, input[type="email"]:focus ~ label,
  input[type="text"]:not(:placeholder-shown) ~ label, input[type="email"]:not(:placeholder-shown) ~ label,
  textarea:focus ~ label,
  textarea:not(:placeholder-shown) ~ label,
  select:focus ~ label,
  select:not([value='']):valid ~ label {
    /* @apply transform; scale-75; -translate-y-6; */
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
      skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-scale-x: 0.75;
    --tw-scale-y: 0.75;
    --tw-translate-y: -1.5rem;
  }

  input[type="text"]:focus ~ label, input[type="email"]:focus ~ label,
  select:focus ~ label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(72, 206, 243, var(--tw-text-opacity));
    left: 0px;
  }

</style>
