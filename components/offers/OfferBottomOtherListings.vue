<template>
  <div>
    <div class="flex flex-col w-full text-xs text-gray-700 mt-2">
      {{ displayText }}
    </div>
    <div class="flex flex-row gap-4 mt-2">
      <div v-for="listing in listings.slice(0, 3)" :key="listing.offerId" class="basis-1/4" @click="selectListing(listing)">
        <img v-if="listing.images && listing.images.length > 0 && listing.images[0].url" :src="listing.images[0].url" alt="image" :class="[listing.selected ? 'border-2 border-teal-400 opacity-50' : 'cursor-pointer border-gray-400', 'object-cover border p-0.5 h-12 w-12 transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none']">
      </div>
      <div v-if="listings.length > 4" class="basis-1/4" @click="selectListing(listings[3], 'more')">
        <div id="full-list" class="relative cursor-pointer">
          <img :src="listings[3].images[0].url" alt="image" :class="[listings[3].selected ? 'border-2 border-teal-400 opacity-50' : 'border-gray-400', 'object-cover border p-0.5 w-12 h-12 transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none']">
          <div class="absolute w-12 h-12 flex justify-center items-center bg-neutral-900 opacity-50 top-0 left-0 " />
          <div class="absolute w-12 h-12 flex justify-center items-center top-0 left-0 ">
            <span class="text-xs text-white opacity-100 ">More</span>
          </div>
        </div>
      </div>
      <div v-else-if="listings.length == 4" class="basis-1/4" @click="selectListing(listings[3])">
        <img :src="listings[3].images[0].url" alt="image" :class="[listings[3].selected ? 'border-2 border-teal-400 opacity-50' : 'cursor-pointer border-gray-400', 'object-cover border p-0.5 w-12 h-12 transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none']">
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'OfferBottomOtherListings',
  props: ['listings', 'displayText'],
  methods: {
    selectListing (listing, type) {
      this.$emit('onSelectListing', listing, type)
    }
  }
})
</script>
