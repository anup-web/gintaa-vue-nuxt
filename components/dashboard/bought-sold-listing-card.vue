<template>
  <div v-if="listing" class="relative w-full">
    <div
      class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
      <a :href="localePath(listLink)" class="block w-full">
        <img v-if="imageUrl" :src="imageUrl" :alt="listing.offerName"
          class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none mx-auto">

        <img v-else src="~/assets/images/uplaod-default-img.png" :alt="listing.offerName"
          class="bg-gray-300 object-cover max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none mx-auto">
      </a>

    </div>
    <div class="product-title w-full overflow-hidden px-1">
      <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
        {{ listing.offerName }}
      </h2>

      <div class="flex items-center mb-1 flex-col">
        <div class="w-full flex mb-1 items-center">
          <div v-if="listing.price"
            class="min-h-[47px] md:min-h-0 text-heading  font-medium text-base text-gray-700 w-full flex items-start flex-col sm:flex-row sm:items-center md:flex-row md:items-center lg:flex-row lg:items-center xl:flex-row xl:items-center 2xl:flex-row 2xl:items-center prod-price relative ">
            
            <span class="xl:text-[17px] 2xl:text-[18px] text-gray-600 mr-[8px]  font-bold float-left mlcoin relative pl-[10px]">
              
              <svg width="6" height="11" viewBox="0 0 11 18" fill="none" class="absolute top-[5px] left-[2px]">
                <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                  fill="black" />
              </svg>
              {{ listing.price }}</span>

            <div class="float-left">
              <div class="flex items-center">
                <span v-if="listing.price && listing.price > listing.price"
                  class="items-center text-[12px] font-normal text-gray-500 relative flex after:left-0 after:absolute after:w-[100%] after:h-[1px] after:bg-gray-500 after:top-[11px] ">
                  <svg width="5" height="10" viewBox="0 0 11 18" fill="none" class="mr-[1px]">
                    <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                      fill="black" />
                  </svg> {{ listing.price }}</span>
              </div>
            </div>

          </div>
        </div>
        <div v-if="listing.location" class="w-full flex items-center justify-between listing-card-copy">
          <div class="text-xs  text-gray-400 bottom-0  flex items-center relative pl-[20px] ">
            <svg width="13" height="17" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="absolute left-0 top:0 ">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z"
                fill="#5F5F5F" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z"
                fill="#5F5F5F" />
            </svg>
            {{ listing.location.city }}
          </div>
        </div>
      </div>

    </div>
    <listingUserDetails :listing="listing" />


  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'boughtSoldListingCard',
  props: ['listing'],
  data() {
    return {
      isEligibleTosellFast: false,
      click_source: ''
    }
  },
  computed: {

    listLink() {
      //  return this.isDraftListing() ? `/listing/item?id=${this.listing.draftOfferId}` : `/p/${this.listing.seOId || this.slugify(this.listing.offerName)}/${this.listing.offerId || this.listing.oid}`
      // return  `/p/${this.slugify(this.listing.seOId) || this.$createSlugUrl(this.listing)}/${this.listing.offerId || this.listing.oid}`
      return  `/p/${this.slugify(this.listing.offerName)}/${this.listing.offerId || this.listing.oid}`

    },
    imageUrl() {

      if (this.listing.images && this.listing.images.length) {
        if (this.listing.images[0].thumbnails && this.listing.images[0].thumbnails['200x200']) {
          return this.listing.images[0].thumbnails['200x200']
        } else {
          return this.listing.images[0].url
        }

      }
      return null
    },
  },
  mounted() {
    
  },
  methods: {

    slugify(text) {
      if (text) {
        return text
          .toString() // Cast to string
          .toLowerCase() // Convert the string to lowercase letters
          .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
          .trim() // Remove whitespace from both sides of a string
          .replace(/\s+/g, '-') // Replace spaces with -
          .replace(/[^\w\-]+/g, '') // Remove all non-word chars
          .replace(/\-\-+/g, '-') // Replace multiple - with single -
      }
      return text
    },

  }
})
</script>
<style scoped>
.Blocked .tag-change {
  background: #E80F0F !important;
}

.Completed .tag-change {
  background: #F47960 !important;
}

.Failed .tag-change {
  background: #FF0000 !important;
}

.Review .tag-change {
  background: #3840F7 !important;
}

.Published .tag-change {
  background: #8bc63e !important;
}

.Hidden .tag-change {
  background: #F47960 !important;
}

/* .list-premium-tag .premium-tag{
  left: 0!important;
  top: 125px!important;
} */
</style>