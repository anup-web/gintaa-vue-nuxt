<template>
  <div id="icon-modals" class="fixed hidden bg-gray-800/[.5] z-10 inset-0 overflow-y-hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end my-[80px] pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div
        class="inline-block bg-white rounded-lg text-left shadow-xl transform transition-all align-middle max-w-xl w-full"
      >
        <h2>verify otp</h2>
        <button id="close-btns" type="button" class="absolute z-[1] top-0 right-0 inline-flex rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-black hover:bg-white-700  sm:ml-3 sm:w-auto sm:text-sm">
          X
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Verify',

  mounted () {
    // const modal = document.getElementById('icon-modals')!
    // const btn = document.getElementById('open-btns')!
    // const closeBtn = document.getElementById('close-btns')!

    // modal.style.display = 'none'

    // btn.onclick = function () {
    //   modal.style.display = 'block'
    // }

    // closeBtn.onclick = function () {
    //   modal.style.display = 'none'
    // }
  }
})
</script>
