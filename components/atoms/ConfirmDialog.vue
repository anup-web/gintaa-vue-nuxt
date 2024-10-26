<template>
  <div :class="[showModal ? '' : 'hidden', 'fixed z-50 inset-0 overflow-y-auto']" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <!-- Heroicon name: outline/exclamation -->
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83431 1.83431C5.98434 1.68429 6.18783 1.6 6.4 1.6H9.6C9.81217 1.6 10.0157 1.68429 10.1657 1.83431C10.3157 1.98434 10.4 2.18783 10.4 2.4V3.2H5.6V2.4C5.6 2.18783 5.68429 1.98434 5.83431 1.83431ZM4 3.2V2.4C4 1.76348 4.25286 1.15303 4.70294 0.702944C5.15303 0.252856 5.76348 0 6.4 0H9.6C10.2365 0 10.847 0.252856 11.2971 0.702944C11.7471 1.15303 12 1.76348 12 2.4V3.2H13.6H15.2C15.6418 3.2 16 3.55817 16 4C16 4.44183 15.6418 4.8 15.2 4.8H14.4V15.2C14.4 15.8365 14.1471 16.447 13.6971 16.8971C13.247 17.3471 12.6365 17.6 12 17.6H4C3.36348 17.6 2.75303 17.3471 2.30294 16.8971C1.85286 16.447 1.6 15.8365 1.6 15.2V4.8H0.8C0.358172 4.8 0 4.44183 0 4C0 3.55817 0.358172 3.2 0.8 3.2H2.4H4ZM3.2 4.8V15.2C3.2 15.4122 3.28429 15.6157 3.43431 15.7657C3.58434 15.9157 3.78783 16 4 16H12C12.2122 16 12.4157 15.9157 12.5657 15.7657C12.7157 15.6157 12.8 15.4122 12.8 15.2V4.8H11.2H4.8H3.2Z" fill="#FC2323" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 id="modal-title" class="text-lg leading-6 font-medium text-gray-900">
               {{ $t('deleteDraftListing') }}
              </h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                 {{ $t('deleteDraftPara') }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-errortext text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="onConfirm">
            {{ $t('deleteBtn') }}
          </button>
          <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="hideModal">
            {{ $t('cancel') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState({
      showModal: state => state.dialogs.confirm.showModal
    })
  },
  methods: {
    onConfirm () {
      this.$store.dispatch('dialogs/confirm/confirm')
    },
    hideModal () {
      this.$store.dispatch('dialogs/confirm/hide', null)
    }
  }
})
</script>
