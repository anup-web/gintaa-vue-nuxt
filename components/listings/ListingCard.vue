<template>
  <div class="relative w-full" :class="listing.offerStage === 'Completed'? 'opacity-50' : ''">
    <div class="block w-full relative">
      <newTag v-if="listing.itemCondition === 'New'" />
      <div class="list-premium-tag-2">
  
    </div>
      <favourite v-if="!isMyListing" :listing="listing" @removeFromFav="removeFromFav" />
      <a :href="localePath(listLink)" @click="onLisitngClick(listing)" target="_blank"
        class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
        <img v-if="imageUrl" :src="imageUrl" :alt="listing.name"
          class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
        <img v-else src="~/assets/images/uplaod-default-img.png" :alt="listing.name"
          class="bg-gray-300 object-cover max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">

          <div v-if="getOfferSatge(listing.offerStage)" :class="[listing.offerStage, 'text-errortext text-[15px] absolute  py-1 px-3 border-2 border-errortext top-3 -rotate-12 left-4 z-[99]']">
          {{ getOfferSatge(listing.offerStage) }} 
        </div>
        <premiumTag v-if="listing.featured"/>

      </a>
      <div class="product-title w-full overflow-hidden px-1">
        <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
          {{ listing.name }}
        </h2>

        <div class="flex item-center flex-col mb-1">
          <div class="w-full mb-1 flex items-center justify-between">
            <div
              class="text-gray-600 text-[18px] font-bold w-full flex items-start flex-col sm:flex-row sm:items-center md:flex-row md:items-center lg:flex-row lg:items-center xl:flex-row xl:items-center 2xl:flex-row 2xl:items-center prod-price">
              <!-- <span> {{$t('valueText')}} : </span> -->
              <span class="flex items-center mr-[8px] font-bold ncoin-icon relative" :class="checkIsAffiliated(listing) ? 'pl-[22px]' : 'pl-[10px]'">
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
                    class="items-center text-[12px] font-normal text-gray-500 relative flex after:left-0 after:absolute after:w-[100%] after:h-[1px] after:bg-gray-500 after:top-[8px] ">
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
            <!-- <ListingPublishDet :cDate="getCreatedDate(listing)"/> -->

            <!-- <div class="flex" v-if="listing.price && listing.price > listing.unitOfferValuation">
                            <span   class="  text-[13px] block font-normal  pl-2 text-gray-400 line-through">
                            {{listing.price}}
                          </span>
                           <span class="text-[#31b801] text-[13px] font-medium block ml-2">{{getDiscountPercentage(listing.unitOfferValuation,listing.price)}}</span>
                        </div> -->
          </div>
          <div class=" w-full all-listing-card ">
            <div class="text-xs  text-gray-400 bottom-0 overflow-hidden truncate flex items-center relative pl-[25px] ">
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

        <!-- <div v-if="listing.unitOfferValuation" class="text-xs text-gray-500 mb-2 flex items-center">
          <span>Value</span>
          <span class="mr-2">:</span>
          <span class="flex items-center text-gray-800 font-medium"><svg width="7" height="14" viewBox="0 0 11 18" fill="none" class="mr-1"><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black" /></svg>
            {{ listing.unitOfferValuation }}
          </span>

        </div> -->
        <!-- <div v-if="listing.exchangeMode == 'Barter'" class="text-heading font-medium text-base text-gray-700 mb-1  relative    flex items-center pl-[65px]  truncate">
          <span class="inline-block absolute left-0">
            <img src="~assets/images/barter_green_blue.png">
         
          </span>
          <span class="mr-2">:</span>
          <span class="text-sm text-gray-500 font-normal">{{ listing.desire ? listing.desire.description || listing.desire.desireType : '' }}</span>
        </div> -->

        <!-- <div v-if="listing.exchangeMode == 'Money'" class="text-heading font-medium text-base text-gray-700  relative mb-1    flex items-center pl-[65px]  truncate">
          <span class="inline-block absolute left-0">
            <img src="~assets/images/barter_green_blue.png">
          </span>
          <span class="mr-2">:</span>
          <span class="flex items-center text-sm lg:text-base text-gray-500 font-medium mr-5">
              <img src="~/assets/images/coin.svg" class="mr-1 w-[18px]" />
           
            {{listing.unitOfferValuation }}
          </span>

          
        </div> -->

        <!-- <div v-if="listing.exchangeMode == 'Free'" class="text-heading font-medium text-base text-gray-700 mb-1 relative    flex items-center pl-[65px]  truncate">
          <span class="inline-block absolute left-0">
            <img src="~assets/images/barter_green_blue.png">
          </span>
          <span class="mr-2">:</span>
          <span class="text-sm text-gray-500 font-normal">
           
            Free
          </span>
        </div> -->
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
    <!-- <div v-if="isDraft" class="absolute cursor-pointer right-0 rounded-[4px] top-1 bg-white shadow px-1.5 py-1.5 text-xs" @click="deleteDraft(listing)">
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83431 1.83431C5.98434 1.68429 6.18783 1.6 6.4 1.6H9.6C9.81217 1.6 10.0157 1.68429 10.1657 1.83431C10.3157 1.98434 10.4 2.18783 10.4 2.4V3.2H5.6V2.4C5.6 2.18783 5.68429 1.98434 5.83431 1.83431ZM4 3.2V2.4C4 1.76348 4.25286 1.15303 4.70294 0.702944C5.15303 0.252856 5.76348 0 6.4 0H9.6C10.2365 0 10.847 0.252856 11.2971 0.702944C11.7471 1.15303 12 1.76348 12 2.4V3.2H13.6H15.2C15.6418 3.2 16 3.55817 16 4C16 4.44183 15.6418 4.8 15.2 4.8H14.4V15.2C14.4 15.8365 14.1471 16.447 13.6971 16.8971C13.247 17.3471 12.6365 17.6 12 17.6H4C3.36348 17.6 2.75303 17.3471 2.30294 16.8971C1.85286 16.447 1.6 15.8365 1.6 15.2V4.8H0.8C0.358172 4.8 0 4.44183 0 4C0 3.55817 0.358172 3.2 0.8 3.2H2.4H4ZM3.2 4.8V15.2C3.2 15.4122 3.28429 15.6157 3.43431 15.7657C3.58434 15.9157 3.78783 16 4 16H12C12.2122 16 12.4157 15.9157 12.5657 15.7657C12.7157 15.6157 12.8 15.4122 12.8 15.2V4.8H11.2H4.8H3.2Z" fill="#FC2323" />
      </svg>
    </div> -->

    <!-- <favourite  v-if="listingItemSatus.offerId" :listingItemSatus = "listingItemSatus" @saveListingStatus="saveListingStatus"/> -->


  </div>
</template>
<script>

import Vue from 'vue'
import favourite from '../atoms/favourite.vue'
import freeDeliveryCod from '../atoms/listing/freeDeliveryCod.vue';
export default Vue.extend({
  components: { favourite, freeDeliveryCod },
  name: 'ListingCard',
  props: ['listing', 'type', 'isMyListing'],

  data() {
    return {
      listingItemSatus: {
        offerId: '',
        favourite: Boolean,
      },
      listingItem: {},
      click_source:''
    }
  },


  mounted() {
    // console.log("type===========================",this.type ,this.isMyListing)
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
        // return this.listing.image.url
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

    onLisitngClick(lisitngDet) {
      this.click_source = this.getListingSourceName()
      if (lisitngDet?.featured) {
        this.callFeaturedAnalytics(lisitngDet)
      }
    },

    getListingSourceName(){
     if(this.$route.path && this.$route.path.includes('/p/')){
      return 'listing_details'
     }else if(this.$route.path && this.$route.path.includes('/profile/view/')){
      return 'user_profile'
     }else{
      return 'search'
     }
    },

    callFeaturedAnalytics(analyticsdata) {
      try {
        const analyticsData = {
          channel_id: 'WEB',
          listing_id:  analyticsdata?.offerId || analyticsdata?.oid, //user message
          click_source: this.click_source
        };
        this.$fire.analytics.logEvent('gintaa_featured_listing_click', analyticsData)
      } catch (e) {
        
      }
    },

    

    getOfferSatge(offerStage){
      if(offerStage && offerStage === 'Completed'){
        return this.$t('soldOut')
      }else{
        return false
      }
    },

    checkIsAffiliated(product) {
      //  console.log("product.user",product.user)
      if (product.user?.gintaaAffiliated) {
        return true
      } else {
        return false
      }
    },

    checkOffPercentage(productDet) {
      let price = productDet?.price
      let unitOfferValuation = productDet?.unitOfferValuation
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
    getCreatedDate(listingDet) {
      return listingDet?.createdDate ? listingDet?.createdDate : listingDet?.publishedDate
    },
    removeFromFav(status) {
      // console.log("status",status)
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


@media only screen and (min-device-width: 0px) and (max-device-width: 1023px){
    .list-premium-tag-2 .premium-tag {
	left: 0!important; top: 93px!important;
}
}   

@media only screen and (min-device-width: 1024px) and (max-device-width: 1535px){
    .list-premium-tag-2 .premium-tag {
	left: 0!important; top: 162px!important;
}
} 

@media only screen and (min-device-width: 1536px) and (max-device-width: 2000px){
    .list-premium-tag-2 .premium-tag {
	left: 0!important; top: 182px!important;
}
}
</style>
