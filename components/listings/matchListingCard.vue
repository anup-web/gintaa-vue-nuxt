<template>
  <div class="relative w-full">
    <div class="block w-full relative add-quickview">
      <newTag v-if="listing.itemCondition === 'New'" />
      <div class="list-premium-tag-3">
    <premiumTag v-if="listing.featured"/>
    </div>
      <favourite v-if="!isMyListing" :listing="listing" @removeFromFav="removeFromFav" />
      <div class="relative">
        <a :href="localePath(listLink)" target="_blank"
          class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">

          <!-- <div class="absolute right-2 top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-10">
              <svg width="16" height="16" viewBox="0 0 24 24" v-on:click="makeFav(listing)" v-bind:class="{ 'fav-color': listing.favourite}" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3" />
              </svg>
            </div> -->



          <img v-if="imageUrl" :src="imageUrl" :alt="listing.name"
            class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
          <img v-else src="~/assets/images/uplaod-default-img.png" :alt="listing.name"
            class="bg-gray-300 object-cover max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">



        </a>
        <a href="javascript:void(0);" @click="quickViewLink" v-if="!listing.type"
          class="w-[36px] h-[36px] bg-green flex justify-center items-center rounded-full absolute right-0 bottom-0 hover-qview transition-all hover:bg-firoza"
          title="Quick View">
          <svg width="20" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M2.14074 9C2.25003 9.18887 2.39492 9.42955 2.57441 9.70747C3.03543 10.4213 3.71817 11.3706 4.60454 12.3161C6.39552 14.2264 8.89951 16 12 16C15.1005 16 17.6045 14.2264 19.3955 12.3161C20.2818 11.3706 20.9646 10.4213 21.4256 9.70747C21.6051 9.42955 21.75 9.18887 21.8593 9C21.75 8.81113 21.6051 8.57045 21.4256 8.29253C20.9646 7.57869 20.2818 6.6294 19.3955 5.68394C17.6045 3.77356 15.1005 2 12 2C8.89951 2 6.39552 3.77356 4.60454 5.68394C3.71817 6.6294 3.03543 7.57869 2.57441 8.29253C2.39492 8.57045 2.25003 8.81113 2.14074 9ZM23 9C23.8944 8.55279 23.8943 8.55245 23.8941 8.55208L23.8925 8.54887L23.889 8.54204L23.8777 8.51982C23.8681 8.50127 23.8546 8.47531 23.8372 8.44244C23.8025 8.3767 23.752 8.28323 23.686 8.16599C23.5542 7.93164 23.3601 7.60152 23.1057 7.20747C22.5979 6.42131 21.8432 5.3706 20.8545 4.31606C18.8955 2.22644 15.8995 0 12 0C8.10049 0 5.10448 2.22644 3.14546 4.31606C2.15683 5.3706 1.40207 6.42131 0.894336 7.20747C0.63985 7.60152 0.445792 7.93164 0.313971 8.16599C0.248023 8.28323 0.19754 8.3767 0.162753 8.44244C0.145357 8.47531 0.131875 8.50127 0.122338 8.51982L0.11099 8.54204L0.107539 8.54887L0.10637 8.5512C0.106186 8.55156 0.105573 8.55279 1 9L0.105573 8.55279C-0.0351909 8.83431 -0.0351909 9.16569 0.105573 9.44721L1 9C0.105573 9.44721 0.105389 9.44685 0.105573 9.44721L0.107539 9.45113L0.11099 9.45796L0.122338 9.48018C0.131875 9.49873 0.145357 9.52469 0.162753 9.55756C0.19754 9.6233 0.248023 9.71677 0.313971 9.83401C0.445792 10.0684 0.63985 10.3985 0.894336 10.7925C1.40207 11.5787 2.15683 12.6294 3.14546 13.6839C5.10448 15.7736 8.10049 18 12 18C15.8995 18 18.8955 15.7736 20.8545 13.6839C21.8432 12.6294 22.5979 11.5787 23.1057 10.7925C23.3601 10.3985 23.5542 10.0684 23.686 9.83401C23.752 9.71677 23.8025 9.6233 23.8372 9.55756C23.8546 9.52469 23.8681 9.49873 23.8777 9.48018L23.889 9.45796L23.8925 9.45113L23.8936 9.4488C23.8938 9.44844 23.8944 9.44721 23 9ZM23 9L23.8944 9.44721C24.0352 9.16569 24.0348 8.83361 23.8941 8.55208L23 9Z"
              fill="white" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7ZM8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9Z"
              fill="white" />
          </svg></a>
      </div>
      <div class="product-title w-full overflow-hidden px-1">
        <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
          {{ listing.name }}
        </h2>

        <div class="flex item-center flex-col w-full mb-1">
          <div class="w-full flex  items-center mb-1 justify-between">
            <div
              class="text-gray-500 text-[18px] font-bold w-full flex items-start flex-col sm:flex-row sm:items-center md:flex-row md:items-center lg:flex-row lg:items-center xl:flex-row xl:items-center 2xl:flex-row 2xl:items-center prod-price relative">
              <!-- <span> {{$t('valueText')}} : </span> -->
              <span class="float-left mr-8  font-bold mcon-icon relative"
                :class="checkIsAffiliated(listing) ? 'pl-[22px]' : 'pl-[10px]'">

                <img v-if="checkIsAffiliated(listing)" alt="coin" src="~assets/images/offer/coin-value.svg"
                  class="absolute w-[18px] top-[2px] left-[0px]">

                <svg v-else width="6" height="11" viewBox="0 0 11 18" fill="none" class="absolute top-[6px] left-[2px]">
                  <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                    d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                    fill="black" />
                </svg>
                {{ listing.unitOfferValuation }}
              </span>

              <div class="float-left">
                <div class="flex items-center">
                  <span v-if="listing.price && listing.price > listing.unitOfferValuation"
                    class="items-center text-[12px] font-normal text-gray-500 relative flex after:left-0 after:absolute after:w-[100%] after:h-[1px] after:bg-gray-500 after:top-[10px] ">
                    <svg width="5" height="10" viewBox="0 0 11 18" fill="none" class="mr-[1px]">
                      <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                        fill="black" />
                    </svg> {{ listing.price }}</span>
                  <span
                    v-if="listing.price && listing.price > listing.unitOfferValuation && checkOffPercentage(listing)"
                    class="text-[13px] text-[#3B9A01] pl-[9px] font-medium">{{ checkOffPercentage(listing) }}% {{
                        $t('cl_off')
                    }}</span>
                </div>
              </div>

            </div>
            <!-- <ListingPublishDet :cDate="listing.publishedDate"/> -->
            <!-- <div class="flex" v-if="listing.price && listing.price > listing.unitOfferValuation">
                            <span   class="  text-[13px] block font-normal  pl-2 text-gray-400 line-through">
                            {{listing.price}}
                          </span>
                           <span class="text-[#31b801] text-[13px] font-medium block ml-2">{{getDiscountPercentage(listing.unitOfferValuation,listing.price)}}</span>
                        </div> -->
            <!-- //Static Content start  -->
            <!-- <div class="flex" >
                            <span   class="  text-[13px] block font-normal  pl-2 text-gray-400 line-through">
                            2000
                          </span>
                           <span class="text-[#31b801] text-[13px] font-medium block ml-2">20 % off</span>
                        </div> -->

            <!-- //Static Content End  -->
          </div>
          <div class="flex w-full items-center listing-card-loc ">
            <div
              class="text-[11px] md:text-xs  text-gray-400 bottom-0 overflow-hidden truncate flex items-center relative pl-[25px] w-full">
              <svg width="13" height="17" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="absolute left-0 top:0 ">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z"
                  fill="#5f5f5f" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z"
                  fill="#5f5f5f" />
              </svg>

              {{ getCityName(listing.location) }}
            </div>
          </div>
        </div>

        <!-- <div class="text-[11px]  md:hidden text-gray-400 bottom-0 overflow-hidden truncate flex items-center relative pl-[25px] w-full mt-1">
                    <svg
                    width="11"
                    height="15"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute left-0 top:0 "
                    >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#5f5f5f" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#5f5f5f" />
                    </svg>
                    {{getCityName(listing.location)}}
                </div> -->


        <freeDeliveryCod :listing="listing" />
        <listingUserDetails :listing="listing" v-if="!type && listing.user" />


      </div>
    </div>


  </div>
</template>
<script>

import Vue from 'vue'
import favourite from '../atoms/favourite.vue'
import freeDeliveryCod from '../atoms/listing/freeDeliveryCod.vue';
export default Vue.extend({
  components: { favourite, freeDeliveryCod },
  name: 'MatchListingCard',
  props: ['listing', 'type', 'isMyListing'],

  data() {
    // console.log("this.listing",this.listing)
    return {
      listingItemSatus: {
        offerId: '',
        favourite: Boolean,
      },
      listingItem: {}
    }
  },

  computed: {

    listLink() {
      // return this.isDraftListing() ? `/listing/item?id=${this.listing.draftOfferId}` : `/p/${this.listing.seOId || this.slugify(this.listing.name)}/${this.listing.offerId || this.listing.oid}`
      return this.isDraftListing() ? `/listing/item?id=${this.listing.draftOfferId}` : `/p/${this.slugify(this.listing.seOId) || this.$createSlugUrl(this.listing)}/${this.listing.offerId || this.listing.oid}`

    },

    imageUrl() {
      if (this.listing.image) {
        if (this.listing.image.thumbnails) {
          return this.listing.image.thumbnails['200x200']
        } else {
          return this.listing.image.url
        }
      } else if (this.listing.images && this.listing.images.length > 0) {
        return (
          this.listing.images.filter((image) => image.cover === true)[0]?.url ||
          this.listing.images[0].url
        );
        // return this.listing.images[0].url
      }

      return null
    },
    isDraft() {
      return this.isDraftListing()
    }
  },
  methods: {
    checkIsAffiliated(product) {
      //  console.log("product.user",product.user)
      if (product.user?.gintaaAffiliated) {
        return true
      } else {
        return false
      }
    },
    checkOffPercentage(productDet) {
      let diffValue = +productDet?.price - +productDet?.unitOfferValuation
      if (diffValue > 0) {
        return this.$cacculateoffpercentage(+productDet?.price, +productDet?.unitOfferValuation)
        // return (Math.round((diffValue/ price) * 100))
      } else {
        return null
      }
    },

    getDiscountPercentage(unitOfferVal, marketValue) {
      const disCountPer = Math.round((((marketValue - unitOfferVal) / marketValue) * 100).toFixed(2));
      if (disCountPer > 0) {
        return '(' + disCountPer + '%' + 'Off' + ')'
      } else {
        return null
      }
      //return Math.round(disCountPer)
    },

    quickViewLink() {

      this.$emit("listingDet", this.listing);
      //return this.isDraftListing() ? `/listing/item?id=${this.listing.draftOfferId}` : `/p/${this.listing.seOId || this.slugify(this.listing.name)}/${this.listing.offerId || this.listing.oid}`
    },
    isDraftListing() {
      return !this.listing.offerId && !this.listing.oid
    },
    deleteDraft(listing) {
      this.$store.dispatch('dialogs/confirm/show', listing)
    },
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

    },

    getCityName(location) {
      // console.log("location",location);
      if (location && location.city) {
        return location.city
      } else {
        return null
      }
    },
    removeFromFav(status) {
      //console.log("status", status)
      if (status) {
        this.$emit("removeFromFav", true);
      }
    }

  }
})
</script>

<style>
.fav-color path {
  fill: #EE2a7b !important;
}

.add-quickview .hover-qview {
  opacity: 0;
  transition: all;

}

.add-quickview:hover .hover-qview {
  opacity: 1;
  transition: all;

}




@media only screen and (min-device-width: 0px) and (max-device-width: 1023px){
    .list-premium-tag-3 .premium-tag {
	left: 0!important; top: 110px!important;
}
}   

@media only screen and (min-device-width: 1024px) and (max-device-width: 1535px){
    .list-premium-tag-3 .premium-tag {
	left: 0!important; top: 174px!important;
}
} 

@media only screen and (min-device-width: 1536px) and (max-device-width: 2000px){
    .list-premium-tag-3 .premium-tag {
	left: 0!important; top: 182px!important;
}
}
</style>
