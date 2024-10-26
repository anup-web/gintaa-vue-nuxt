<template>
 
  <div class="container max-w-4xl mx-auto flex items-center space-x-4  mb-6">
      <div class="flex flex-col w-full mb-0">

 <div class="group box-border overflow-hidden flex p-3   pe-0 pb-2 lg:pb-3 flex-col items-start bg-white shadow relative">
                          <div class="flex items-center w-full justify-between pb-6">
                                <div class="text-sm text-gray-500 ">{{ dealSentTime }}</div>

        <div :class="[currentState.replace(/ /g, '').toLowerCase(),'text-sm flex items-center font-medium']">
        <OfferStatusIcon :offer="offer" />
        <span class="ml-2">{{ currentState }}</span>
      </div>
                                <!-- <div class="outgoing text-base flex items-center font-medium text-firoza">
                                    <span class="ml-2 ">{{ currentState }}</span>
                                </div> -->
                          </div> 

                              <a class="image-row flex w-full items-center"  target="_blank">
      <div class="your-img w-[30%]">
        <div class="flex max-h-40 justify-center items-center">
          <div class="w-full p-2">
            <div v-if="isFree" class="h-32 w-full flex items-center justify-center overflow-hidden">
              <ListingItemFree />
            </div>
        
            <a  v-else-if="currentUserOffer && currentUserOffer.length > 0" :href="localePath(getListingDetailsLink(currentUserOffer[0]))" class="h-32 w-full flex items-center justify-center overflow-hidden">
              <img :src="getCoverImage(currentUserOffer[0].images)" alt="offer" class="max-w-full max-h-32 mx-auto">
            </a>
          </div>
        </div>
      </div>
    <div class="barter-icon w-[8%] text-center">
      <img src="~/assets/images/barter-offer.svg" alt="barter-offer" class="max-w-full mx-auto">
    </div>

      <div class="otheruser-img w-[30%] ">
        <div class="flex  justify-center items-center">
          <div class="w-full p-2">
            <div v-if="isFree" class="w-full flex items-center justify-center overflow-hidden">
              <ListingItemFree />
            </div>
            <!-- <div v-else-if="isMoney" class="w-full flex items-center justify-center overflow-hidden exchange-image">
              <ListingItemMoney  :amount="offer.requestedAmount"  :transactionMode="offer.transactionMode" class="exchangecard-money" />
            </div> -->
            <a  :href="localePath(getListingDetailsLink(otherUserOffer[0]))" v-else-if="otherUserOffer && otherUserOffer.length > 0 " class="h-32 w-full flex items-center justify-center overflow-hidden relative">
              <img  :src="getCoverImage(otherUserOffer[0].images)" alt="others offer" class="max-w-full max-h-32 mx-auto">
              <div v-if="offer.requestedAmount" class="absolute right-0 bg-black bg-opacity-50 p-3 -top-1"><span class="relative flex items-center font-bold text-sm text-white">
                + 
                <div class="px-1">
                   <img v-if="offer.transactionMode === 'COIN'" alt="coin"  src="~/assets/images/offer/coin-value.svg"  class="w-[20px]"> 
                  <svg v-else width="14" height="14" viewBox="0 0 14 25" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#fff"></path></svg>
                </div>
                {{offer.requestedAmount}} 
              </span></div>
             </a>
          </div>
        </div>
      </div>

      <div class="barter-icon w-[32%] text-center">
        
     <OfferHistoryCard :offer = "offer"/>
    </div>
      <!-- <div class="barter-icon w-[26%] text-center">
        <img src="~/assets/images/barter-offer.svg" class="max-w-full mx-auto">
        
      </div>
      <div class="otheruser-img w-[37%] ">
        <div class="flex max-h-40 justify-center items-center">
          <div class="w-full p-2">
            <div v-if="isFree && offer.callerIsReceiver" class="w-full flex items-center justify-center overflow-hidden">
              <ListingItemFree />
            </div>
            <div v-else-if="isMoney && offer.callerIsReceiver" class="h-32 w-full flex items-center justify-center overflow-hidden">
              <ListingItemMoney :amount="offer.requestedAmount" />
            </div>
            <div v-else-if="otherUserOffer && otherUserOffer.length > 0" class="h-32 w-full flex items-center justify-center overflow-hidden">
              <img :src="getCoverImage(otherUserOffer[0].images)" class="max-w-full max-h-32 mx-auto">
            </div>
          </div>
        </div>
      </div> -->
    </a>
                          <!-- <div class="w-full flex justify-between">
                               <div class="w-52 h-52 flex items-center justify-center">
                                   <img src="https://dev.cdn.gintaa.com/web/web_new/top-categories/gadgets.jpg" class="w-full h-full rounded object-cover">
                               </div>
                               <div class="flex justify-center items-center">
                                     <div class="hg w-full">                                       
                                      <div class="flex justify-center items-center">  
                                      <img src="~/assets/images/offer/barter-offer-bb.svg" alt="image">
                                      </div>
                                      <div class="text-base text-gray-700 text-center mt-3">Offers Revised</div>
                                     </div>
                               </div>
                               <div class="w-52 h-52 flex items-center justify-center">
                                    <img src="https://dev.cdn.gintaa.com/web/web_new/top-categories/watches.jpg" class="w-full h-full rounded object-cover">
                               </div>    
                          </div>       -->
                     </div>

                 
          
      </div>
    </div> 

  
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'ExchangeCard',
  props: ['offer'],
  mounted(){
   //console.log(this.offer)
  },
  computed: {
    dealSentTime () {
      return this.$moment(this.offer.dealSentTimeStamp).add(this.$config.timeOffset, 'minutes').format(' MMMM D , YYYY, h:mm:ss a')
    },

    currentState () {
      if (this.offer?.dealStatus?.dealStatus === 'INITIATED') {
        return this.offer.callerIsReceiver ? this.$t('incoming') : this.$t('outgoing')
      }

      const words = this.offer?.dealStatus?.dealStatus.toLowerCase().split('_')
      return words.map((word) => {
        return  word[0].toUpperCase() + word.substring(1)
      }).join(' ')
    },

    currentUser () {
      return this.offer.callerIsReceiver ? this.offer.receiver : this.offer.sender
    },

    otherUser () {
      return !this.offer.callerIsReceiver ? this.offer.receiver : this.offer.sender
    },
    currentUserOffer () {
      return this.offer.requestedOffers ? this.offer.requestedOffers : this.offer.offeredOffers
    },
    otherUserOffer () {
       return this.offer.offeredOffers ? this.offer.offeredOffers : this.offer.requestedOffers
      //return this.offer.callerIsReceiver ? this.offer.offeredOffers : this.offer.requestedOffers
    },
    isFree () {
      return this.offer.requestedOffers[0].free
    },
    // isMoney () {
    //   return this.offer.requestedOffers[0].exchangeMode === 'Money' || !this.offer.offeredOffers || (this.offer.requestedAmount && this.offer.offeredOffers.length === 0)
    // }

    isMoney () {
      return this.offer.requestedAmount 
    }
    },
    methods:{
     getCoverImage (images) {
      if (images && images.length > 0) {
        // console.log('images', images)
        return images[0].url
      }
      return null
    },

    getListingDetailsLink(offers){
      console.log("offers",offers)
    if(offers){
     return`/p/${this.slugify(offers.offerName)}/${offers.offerId}` 
    }

    },

        slugify (text) {
      if(text) {
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
    transformDate(value) {
      if (value) {
        return this.$moment(value).format(" MMMM D , YYYY, h:mm:ss a");
      }
    },
    }

})
</script>
<style scoped>
.accepted, .closed{
  color: #8bc63e !important;
}
.revised, .incoming{
  color: #48CEF3 !important;
}
.rejected{
  color: #FC2323 !important;
}
.exchange-image .exchange-card {
  width: 80px !important;
}
</style>