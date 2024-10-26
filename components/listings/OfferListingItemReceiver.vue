<template>
  <div class="w-full flex flex-col border-b border-b-gray-300 py-3 md:py-5 sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
    <div v-if="imageUrl" class="h-[171px] w-[252px] overflow-hidden flex items-center justify-center border border-gray-300 mr-7">
      <img  :src="imageUrl" :alt="listing.name" class="w-[182px] h-[152px] object-contain" />                    
    </div>
    <div class="">
      <div class="product-title w-full overflow-hidden px-1 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
        <h2 class="text-heading font-medium truncate mb-1 text-[14px] lg:text-[20px] text-gray-900 w-72">{{ listing.name }}</h2>
        <div class="text-heading flex items-center relative ">
          <span class="text-base text-gray-400 font-normal pr-3">{{$t('valueText')}} :</span>                                       
            <span class="text-gray-900 flex items-center font-bold text-base recoin" >
              <svg width="8" height="15" viewBox="0 0 11 18" fill="none" class="mr-1">
                                  <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black" />
               </svg>
              <!-- <img src="~assets/images/offer/coin-value.svg" class="text-base  pr-3 recoin"> -->
              {{ listing.unitOfferValuation }}</span>
        </div> 
        <div v-if="listing" class="text-sm loc-city lg:text-base text-gray-400 bottom-0 overflow-hidden truncate flex items-center relative w-full mt-3">
          <svg  width="18" height="24" viewBox="0 0 20 24" fill="none"><path data-v-7c6fed20="" fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#5f5f5f"></path> <path data-v-7c6fed20="" fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#5f5f5f"></path></svg>
          <span class="pl-3">{{ listing.location.city }}</span>
        </div>                       
      </div>
    </div>
  </div>

  <!-- <div class="relative-img  w-full">
    <div class="product-img flex mb-2 md:mb-2 h-[196px] justify-center  items-center overflow-hidden">
      <img :src="imageUrl" :alt="listing.name" class="bg-gray-300 object-cover   max-w-[100%] max-h-[100%] transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
    </div>
    <div class="product-title w-full overflow-hidden px-1">
      <h2 class="text-heading font-semibold truncate mb-2 text-sm text-gray-600">
        {{ listing.name }}
      </h2>
      <div v-if="!isMoney" class="text-heading font-normal text-sm text-gray-700 flex items-center mb-1">
        <span >Value :</span>
        <span class="flex items-center ml-2 font-medium">
          <img src="~/assets/images/coin.svg" alt="coin" class="mr-1 w-[18px]">
          {{ listing.unitOfferValuation }}
        </span>
      </div>

      <div class="text-heading font-medium text-base text-gray-700 flex items-center">
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
      </div>
    </div>
  </div> -->
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'OfferListingItem',
  props: ['listing'],
  computed: {
    imageUrl () {
      console.log('listing:', this.listing)
      if (this.listing.image) {
        return this.listing.image.url
      } else if (this.listing.images && this.listing.images.length > 0) {
        let imgUrl = this.listing.images[0].url
        // return this.listing.images[0].url
        this.listing.images.map((image)=>{
          if(image.cover){
            imgUrl = image.url
          }
        })

        return imgUrl
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
