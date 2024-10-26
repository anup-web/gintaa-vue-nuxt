<template>
  <div class="relative w-full">
    <div  class="block w-full relative">

      <!-- <favourite v-if="!isMyListing" :listing="listing"  @removeFromFav="removeFromFav"/> -->
       
   <!-- <div class="absolute right-2 cursor-pointer top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40">
   <svg width="16" height="16" viewBox="0 0 24 24" v-on:click="deleteListing(listing)"   fill="none" xmlns="http://www.w3.org/2000/svg"> 
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3" />
      </svg>
    </div> -->
     
     
     <a :href="localePath(listLink)" target="_blank"  class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
      
           <!-- <div class="absolute right-2 top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-10">
              <svg width="16" height="16" viewBox="0 0 24 24" v-on:click="makeFav(listing)" v-bind:class="{ 'fav-color': listing.favourite}" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3" />
              </svg>
            </div> -->

           
      
        <img v-if="imageUrl" :src="imageUrl" :alt="listing.name" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none"> 
        <img v-else src="~/assets/images/uplaod-default-img.png" :alt="listing.name" class="bg-gray-300 object-cover max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
     
       

      </a>
      <div class="product-title w-full overflow-hidden px-1">
        <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
          {{ listing.name }}
        </h2> 

        <a title="Remove saved items"  v-on:click="deleteListing(listing)" class="absolute right-1 cursor-pointer bottom-0 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40">
         <svg width="14" height="16" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H12C12.2652 2 12.5196 2.10536 12.7071 2.29289C12.8946 2.48043 13 2.73478 13 3V4H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289ZM5 4V3C5 2.20435 5.31607 1.44129 5.87868 0.87868C6.44129 0.31607 7.20435 0 8 0H12C12.7956 0 13.5587 0.31607 14.1213 0.87868C14.6839 1.44129 15 2.20435 15 3V4H17H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H18V19C18 19.7957 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7957 22 15 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V6H1C0.447715 6 0 5.55228 0 5C0 4.44772 0.447715 4 1 4H3H5ZM4 6V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H15C15.2652 20 15.5196 19.8946 15.7071 19.7071C15.8946 19.5196 16 19.2652 16 19V6H14H6H4Z" fill="#C6D0D7"/>
</svg>

        </a>

        <div class="flex item-center flex-col mb-1">
                  <div class="w-full mb-1 flex items-center justify-between">
                  <div class="text-gray-600 text-[18px] font-bold w-full flex items-start flex-col sm:flex-row sm:items-center md:flex-row md:items-center lg:flex-row lg:items-center xl:flex-row xl:items-center 2xl:flex-row 2xl:items-center prod-price relative">
                   <!-- <span> {{$t('valueText')}} : </span> -->
                   <span class="float-left items-center mr-[8px]  font-bold ncoin-icon-fav relative" :class="checkIsAffiliated(listing) ? 'pl-[22px]' : 'pl-[10px]'">

                    <img v-if="checkIsAffiliated(listing)" alt="coin" src="~assets/images/offer/coin-value.svg"
                  class="absolute w-[18px] top-[2px] left-[0px]">
                    
                    <svg v-else width="6" height="11" viewBox="0 0 11 18" fill="none" class="absolute top-[6px] left-[2px]">
                            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"/>
                            </svg>
                            {{listing.unitOfferValuation}}
                   </span>
                   
                   <div class="float-left">
                    <div class="flex items-center">
                   <span v-if="listing.price && listing.price > listing.unitOfferValuation " class="items-center text-[12px] font-normal text-gray-500 relative flex after:left-0 after:absolute after:w-[100%] after:h-[1px] after:bg-gray-500 after:top-[8px] ">
                        <svg width="5" height="10" viewBox="0 0 11 18" fill="none" class="mr-[1px]">
                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black" />
                    </svg>   {{listing.price}}</span>
                    <span v-if="listing.price && listing.price > listing.unitOfferValuation && checkOffPercentage(listing)" class="text-[13px] text-[#3B9A01] pl-[9px] font-medium">{{checkOffPercentage(listing)}}% {{ $t('cl_off') }}</span> 
                   </div>
                   </div>

              </div>
             <!-- <ListingPublishDet :cDate="getCreatedDate(listing)"/> -->
              
                  </div>
                  <div class=" w-full all-listing-card">
                   <div class="text-xs  text-gray-400 bottom-0 overflow-hidden truncate flex items-center relative pl-[25px] ">
                    <svg width="13" height="17" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-0 top:0 ">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#5f5f5f"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#5f5f5f"/>
</svg>

                    {{getCityName(listing.location)}} </div>
                  </div>
                   
              </div>
                <listingUserDetails :listing="listing" v-if="!type && listing.user"/>
      
      </div>
    </div>
 
  </div>
</template>
<script>

import Vue from 'vue'
import favourite from '../atoms/favourite.vue'
export default Vue.extend({
  components: {favourite},
  name: 'SavedItemListingCard',
  props: ['listing','type','isMyListing'],

    data () {
     
    return {
      listingItemSatus : {
        offerId:'',
        favourite: Boolean,
      },
      listingItem:{}
    }},


  mounted(){
    },


  computed: {
    listLink () {
     // return this.isDraftListing() ? `/listing/item?id=${this.listing.draftOfferId}` : `/p/${this.listing.seOId || this.slugify(this.listing.name)}/${this.listing.offerId || this.listing.oid}`

       return this.isDraftListing() ? `/listing/item?id=${this.listing.draftOfferId}` : `/p/${this.slugify(this.listing.seOId) || this.$createSlugUrl(this.listing)}/${this.listing.offerId || this.listing.oid}`
    },


    imageUrl () {
      if (this.listing.image) {
         if(this.listing.image.thumbnails){
          return this.listing.image.thumbnails['200x200']
        }else{
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
    isDraft () {
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

checkOffPercentage(productDet){
let diffValue =  +productDet?.price - +productDet?.unitOfferValuation
//console.log("diffValue",diffValue)
 if(diffValue > 0){
  return this.$cacculateoffpercentage(+productDet?.price,+productDet?.unitOfferValuation)
  // return (Math.round((diffValue/ price) * 100))
 }else{
    return null
 }
},  
      getDiscountPercentage(unitOfferVal,marketValue){
    const disCountPer = Math.round((((marketValue-unitOfferVal)/marketValue) * 100).toFixed(2));
    if(disCountPer > 0){
      return '(' + disCountPer + '%' + 'Off'+')'
    }else{
      return null
    }
    //return Math.round(disCountPer)
   },

   async deleteListing(listingDet){
    try {
       const offerID =  listingDet.offerId
                const url = `/offers/v1/offer/saved/oid/${offerID}`;
                const data = await this.$axios.$delete(url);
                if (data.success) {
                    this.$emit('deleteSuccess',offerID);
                     Vue.$toast.open(data.message);
                } else {
                  //  this.isSavedForLater = false
                }
            } catch (error) {}
   },
    isDraftListing () {
      return !this.listing.offerId && !this.listing.oid
    },
    deleteDraft (listing) {
      this.$store.dispatch('dialogs/confirm/show', listing)
    },
    slugify (text) {
      if(text){
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

    getCityName(location){
    // console.log("location",location);
     if(location && location.city){
       return location.city
     }else{
       return null
     }
    },
    getCreatedDate(listingDet){
    return listingDet?.createdDate ?listingDet?.createdDate : listingDet?.publishedDate
    },
     removeFromFav(status){
    // console.log("status",status)
     if(status){
      this.$emit("removeFromFav", true);
     }
    }

  }
})
</script>

<style>
.fav-color path{
  fill:#EE2a7b !important;
}
</style>