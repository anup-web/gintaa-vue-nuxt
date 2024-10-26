<template>
  <div class="fixed bg-gray-800/[.5] z-50 inset-0" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end mt-5 pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="inline-block bg-white rounded-lg text-left shadow-xl transform transition-all align-middle max-w-3xl w-full pt-3 full-list-auto auto-scroll">
        <button type="button" class="absolute z-40 top-0 right-0 inline-flex rounded-md border border-transparent px-4 py-2" @click="closePopup()">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black" fill-opacity="0.3" />
          </svg>
        </button>

        <div class="flex flex-col w-full px-6">
          <h1 class="text-base text-gray-900 font-normal">
            {{ displayText1 }}
          </h1>
        </div>
        <div class="relative w-full flex-col bg-gray-50 px-6 pt-2 pb-3 mt-2 my-list-auto auto-scroll">
          <div class="flex flex-col w-full">
            <div class="text-sm text-gray-700 font-normal">
              {{ displayText2 }}
            </div>
          </div>

          <div class="flex flex-col w-full">
            <div class="grid grid-cols-1 gap-y-2 sm:grid-cols-3 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 2xl:grid-cols-3 2xl:gap-x-8">
              <div v-for="listing of listings" :key="listing.offerId" :class="[listing.selected ? 'border border-teal-400 opacity-50' : '', 'group mt-5 box-border overflow-hidden flex p-3  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5  shadow relative']" @click="onSelectListing(listing)">
                <OfferListingItem :listing="listing" />
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex justify-between mt-2 mb-2 px-6">
          <div class="text-sm text-green underline decoration-gray-900 decoration-dashed underline-offset-4" />

          <button type="submit" class="bg-green text-white py-2 px-5 rounded text-base " @click="closePopup()">
            <span v-if="saveTxt">{{ saveTxt }}</span>
            <span v-else>Save</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'UserFullList',
  props: ['listings', 'displayText1', 'displayText2', 'saveTxt'],
  computed: {
  },
  methods: {
    closePopup () {
      this.$emit('closePopup')
    },
    onSelectListing (listing) {
      this.$emit('onSelectListing', listing)
    }
  }
})
</script>


<style scoped>
    .full-list-auto{
      min-height: 76vh;
      max-height: 76vh;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .my-list-auto{
      min-height: 60vh;
      max-height: 60vh;
      overflow-y: auto;
      overflow-x: hidden;
    }
</style>