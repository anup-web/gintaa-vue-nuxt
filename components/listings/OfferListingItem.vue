<template>
  <div class="relative-img  w-full">
    <div class="product-img flex mb-2 md:mb-2 h-[196px] justify-center  items-center overflow-hidden">
      <img :src="imageUrl" :alt="listing.name" class="bg-gray-300 object-cover   max-w-[100%] max-h-[100%] transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
    </div>
    <div class="product-title w-full overflow-hidden px-1">
      <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
        {{ listing.name }}
      </h2>
      <!-- v-if="!isMoney" -->
      <div class="text-heading font-normal text-[18px] text-gray-700 flex items-center mb-1 relative">
        <span >{{$t('valueText')}} :</span>
        <span class="flex items-center pl-[16px] font-bold oltcoin relative">
          <!-- <img src="~/assets/images/coin.svg" class="mr-1 w-[18px] oltcoin"> -->
          <svg width="6" height="11" viewBox="0 0 11 18" fill="none" class="absolute top-[6px] left-[8px]">
                                  <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black" />
                    </svg>
          {{ listing.unitOfferValuation }}
        </span>
      </div>

      <!-- <div class="text-heading font-medium text-base text-gray-700 flex items-center">
        <span class="inline-block mr-2">
          <img src="~/assets/images/barter_green_blue.png" alt="icon">
        </span>
        <span class="mr-2">:</span>
        <span v-if="isFree" class="text-sm text-gray-500 font-normal">Free</span>
        <span v-else-if="isMoney" class="text-sm text-gray-500 font-normal truncate">
          <span class="text-sm text-gray-500 font-normal flex items-center">
            <img src="~/assets/images/coin.svg" alt="coin" class="mr-1 w-[18px]">
            {{ listing.unitOfferValuation }}</span>
        </span>
        <span v-else class="text-sm text-gray-500 font-normal truncate">{{ listing.desire.description || listing.desire.desireType }}</span>
      </div> -->
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'OfferListingItem',
  props: ['listing'],
  computed: {
    imageUrl () {
      if (this.listing.image) {
        return this.listing.image.url
      } else if (this.listing.images && this.listing.images.length > 0) {
        // return this.listing.images[0].url
        let image = this.listing.images.filter( image => image.cover === true)
        console.log('====== image:', image)       
        return image[0].thumbnails ? image[0].thumbnails['200x200'] : image[0].url        
      }

      return null
    },
    isFree () {
      return this.listing.free
    },
    isMoney () {
      return this.listing.exchangeMode === 'Money'
    }
  }
})
</script>
