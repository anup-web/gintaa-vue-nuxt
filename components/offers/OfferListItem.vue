<template>
  <div class="group box-border overflow-hidden flex p-3  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5  shadow relative">
    <div v-if="currentState === 'Expired'" class="expired-overlay-text -rotate-45">{{ currentState }}</div>
    <div v-if="currentState === 'Closed'" class="close-overlay-text -rotate-45">{{ currentState }}</div>
    <div class="flex items-center w-full justify-between pb-4">
      <div class="text-sm text-gray-500 ">
        {{ dealSentTime }}
      </div>
      <div :class="[currentState.replace(/ /g, '').toLowerCase(),'text-sm flex items-center font-medium']">
        <OfferStatusIcon :offer="offer" />
        <!-- <span class="ml-5">{{ currentState }}</span> -->
        <span class="ml-5">{{ $t('offerState.'+currentState.toUpperCase()) }}</span>
      </div>
    </div>
    <div class="flex  justify-between w-full mb-6">
      <NuxtLink class="pr-5 pl-2  items-center inline-block " :to="localePath('/my-profile/')" target="_blank">
        <div class="flex items-center">
          <div class="h-10 w-10  bg-gray-200 flex items-center justify-center rounded-full mr-2 lg:mr-3 2xl:mr-5 relative">
            <img v-if="currentUser.imageUrl && !currentUser.imageUrl.includes('deleted.jpeg')" :src="currentUser.imageUrl" :alt="currentUser.name" class="w-10 h-10 rounded-full">
            <img v-else src="~assets/images/profile/chatu-noimg.svg" :alt="currentUser.name" class="w-10 h-10 rounded-full">
          </div>
          <div class="text-[10px] lg:text-[12px] 2xl:text-sm text-gray-600 font-medium mr-8 2xl:mr-12">
            {{ currentUser.name }}
            <span class="text-[9px] lg:text-xs block font-normal">{{$t('you')}}</span>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="pl-2  items-center inline-block " :to="localePath('/profile/view/' + otherUser.id)" target="_blank">
        <div class="flex items-center">
          <div class="text-[10px] lg:text-[12px] 2xl:text-sm text-gray-600 font-medium ">
            {{ otherUser.name }}
          </div>
          <div class="h-10 w-10  bg-gray-200 flex items-center justify-center rounded-full ml-2 lg:ml-3 2xl:ml-5 relative">
            <img v-if="otherUser.imageUrl && !otherUser.imageUrl.includes('deleted.jpeg')" :src="otherUser.imageUrl" :alt="otherUser.name" class="w-10 h-10 rounded-full">
            <img v-else src="~assets/images/profile/chatu-noimg.svg" :alt="otherUser.name" class="w-10 h-10 rounded-full">
          </div>
        </div>
      </NuxtLink>
    </div>

    <NuxtLink class="image-row flex w-full items-center" :to="localePath(`/offers/details/${offer.dealRefId}`)" >
      <div class="your-img w-[37%]">
        <div class="flex max-h-40 justify-center items-center">
          <div class="w-full p-2">
            <div v-if="currentUserOffer && currentUserOffer.length > 0" class="h-32 w-full flex items-center justify-center overflow-hidden relative">
              <img :src="getCoverImage(currentUserOffer[0].images)" alt="user offer" class="max-w-full max-h-32 mx-auto">
              
                <!-- callerIsReceiver: {{offer.callerIsReceiver}} <br />
                PaidBy: {{offer.requestedAmountPaidByInitiatingUser}} <br /> -->

                <div v-if="offer.requestedAmount && ((offer.callerIsReceiver && !offer.requestedAmountPaidByInitiatingUser) || (!offer.callerIsReceiver && offer.requestedAmountPaidByInitiatingUser))" class="absolute right-0 bg-black bg-opacity-50 p-3 -top-1">
                  <span class="relative flex items-center font-bold text-sm text-white">
                    + 
                    <div v-if="offer.transactionMode === 'CASH'" class="px-1">
                      <svg width="14" height="14" viewBox="0 0 14 25" fill="none"  >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#fff"/>
                      </svg>
                    </div>
                    <div v-else class="px-1">
                      <img src="~/assets/images/offer/coin-value.svg" alt="coin" class="w-[20px]">
                    </div>
                    {{offer.requestedAmount}} 
                  </span>
                </div>
            </div>
            <div v-else-if="isMoney && !offer.callerIsReceiver" class="h-32 w-full flex items-center justify-center overflow-hidden">
              <ListingItemMoney :amount="offer.requestedAmount" :transactionMode="offer.transactionMode" />
            </div>
          </div>
        </div>
      </div>
      <div class="barter-icon w-[26%] text-center">
        <img src="~/assets/images/barter-offer.svg" alt="barter" class="max-w-full mx-auto">
        <!-- <svg width="100" height="48" viewBox="0 0 123 71" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.73392 16.1788H120.518C120.953 16.1788 121.18 15.6626 120.887 15.3417L108.249 1.5" stroke="#48CEF3" stroke-width="2" stroke-linecap="round" />
          <path d="M118.674 55.3212H1.88984C1.45526 55.3212 1.22758 55.8374 1.5206 56.1583L14.1585 70" stroke="#48CEF3" stroke-width="2" stroke-linecap="round" />
          <path d="M31.595 33.0703C32.4723 33.3689 33.1536 33.8543 33.639 34.5263C34.1243 35.1983 34.367 36.0383 34.367 37.0463C34.367 39.0249 33.6016 40.5463 32.071 41.6103C30.559 42.6556 28.487 43.1783 25.855 43.1783H16.419L20.339 23.5783H29.019C30.9976 23.5783 32.519 23.9516 33.583 24.6983C34.6656 25.4263 35.207 26.4903 35.207 27.8903C35.207 29.1596 34.871 30.2423 34.199 31.1383C33.5456 32.0156 32.6776 32.6596 31.595 33.0703ZM22.663 25.8463L21.403 32.1183H27.143C28.7296 32.1183 29.9803 31.8009 30.895 31.1663C31.8283 30.5129 32.295 29.5703 32.295 28.3383C32.295 27.4983 31.959 26.8729 31.287 26.4623C30.6336 26.0516 29.6816 25.8463 28.431 25.8463H22.663ZM26.051 40.9103C27.8243 40.9103 29.187 40.5836 30.139 39.9303C31.1096 39.2583 31.595 38.3063 31.595 37.0743C31.595 36.1036 31.2496 35.4129 30.559 35.0023C29.887 34.5916 28.8696 34.3863 27.507 34.3863H20.955L19.667 40.9103H26.051ZM54.1584 28.3383L51.2184 43.1783H48.6424L49.0064 41.3583C48.3344 41.9929 47.5504 42.4876 46.6544 42.8423C45.777 43.1783 44.8157 43.3463 43.7704 43.3463C42.501 43.3463 41.3717 43.0943 40.3824 42.5903C39.393 42.0676 38.6184 41.3209 38.0584 40.3503C37.4984 39.3796 37.2184 38.2409 37.2184 36.9343C37.2184 35.2543 37.5824 33.7516 38.3104 32.4263C39.0384 31.1009 40.037 30.0649 41.3064 29.3183C42.5944 28.5716 44.0317 28.1983 45.6184 28.1983C46.8877 28.1983 47.9704 28.4223 48.8664 28.8703C49.781 29.3183 50.481 29.9809 50.9664 30.8583L51.4704 28.3383H54.1584ZM44.3584 40.9943C45.4597 40.9943 46.449 40.7329 47.3264 40.2103C48.2224 39.6689 48.913 38.9223 49.3984 37.9703C49.9024 37.0183 50.1544 35.9356 50.1544 34.7223C50.1544 33.3969 49.7717 32.3703 49.0064 31.6423C48.241 30.9143 47.149 30.5503 45.7304 30.5503C44.629 30.5503 43.6397 30.8209 42.7624 31.3623C41.885 31.8849 41.1944 32.6223 40.6904 33.5743C40.1864 34.5263 39.9344 35.6089 39.9344 36.8223C39.9344 38.1289 40.317 39.1556 41.0824 39.9023C41.8664 40.6303 42.9584 40.9943 44.3584 40.9943ZM61.4283 30.5503C62.0816 29.7289 62.8843 29.1316 63.8363 28.7583C64.7883 28.3849 65.9456 28.1983 67.3083 28.1983L66.8043 30.8023C66.6363 30.7836 66.403 30.7743 66.1043 30.7743C63.0243 30.7743 61.1576 32.4356 60.5043 35.7583L59.0203 43.1783H56.3323L59.2723 28.3383H61.8483L61.4283 30.5503ZM72.2028 38.4463C72.1468 38.7263 72.1188 38.9876 72.1188 39.2303C72.1188 39.8276 72.2775 40.2849 72.5948 40.6023C72.9308 40.9196 73.4255 41.0783 74.0788 41.0783C74.8628 41.0783 75.5722 40.8449 76.2068 40.3783L76.7668 42.4223C75.8708 43.0383 74.7228 43.3463 73.3228 43.3463C72.1468 43.3463 71.1948 43.0196 70.4668 42.3663C69.7575 41.6943 69.4028 40.7796 69.4028 39.6223C69.4028 39.2303 69.4402 38.8569 69.5148 38.5023L71.1108 30.5503H68.5908L69.0108 28.3383H71.5588L72.2028 25.0903H74.8908L74.2468 28.3383H78.5028L78.0548 30.5503H73.7988L72.2028 38.4463ZM81.9324 36.5983V36.7663C81.9324 38.1476 82.3244 39.2023 83.1084 39.9303C83.8924 40.6396 85.0684 40.9943 86.6364 40.9943C87.5511 40.9943 88.4097 40.8449 89.2124 40.5463C90.0151 40.2289 90.6871 39.8089 91.2284 39.2863L92.3764 41.2183C91.6484 41.8903 90.7617 42.4129 89.7164 42.7863C88.6711 43.1596 87.5697 43.3463 86.4124 43.3463C84.9564 43.3463 83.6964 43.0849 82.6324 42.5623C81.5684 42.0396 80.7471 41.2929 80.1684 40.3223C79.5897 39.3516 79.3004 38.2129 79.3004 36.9063C79.3004 35.2449 79.6551 33.7516 80.3644 32.4263C81.0924 31.1009 82.0911 30.0649 83.3604 29.3183C84.6484 28.5716 86.0857 28.1983 87.6724 28.1983C89.6884 28.1983 91.2937 28.7769 92.4884 29.9343C93.7017 31.0729 94.3084 32.6316 94.3084 34.6103C94.3084 35.2076 94.2431 35.8703 94.1124 36.5983H81.9324ZM87.5604 30.4383C86.2351 30.4383 85.0964 30.8116 84.1444 31.5583C83.1924 32.3049 82.5484 33.3316 82.2124 34.6383H91.7884C91.8631 33.3129 91.5084 32.2863 90.7244 31.5583C89.9591 30.8116 88.9044 30.4383 87.5604 30.4383ZM101.542 30.5503C102.195 29.7289 102.998 29.1316 103.95 28.7583C104.902 28.3849 106.059 28.1983 107.422 28.1983L106.918 30.8023C106.75 30.7836 106.516 30.7743 106.218 30.7743C103.138 30.7743 101.271 32.4356 100.618 35.7583L99.1336 43.1783H96.4456L99.3856 28.3383H101.962L101.542 30.5503Z" fill="#8BC63E" />
        </svg> -->
        <!-- {{ offer.exchangeMode }} -->
      </div>
      <div class="otheruser-img w-[37%] ">
        <div class="flex max-h-40 justify-center items-center">
          <div class="w-full p-2">
            
            <div v-if="otherUserOffer && otherUserOffer.length > 0" class="h-32 w-full flex items-center justify-center overflow-hidden relative">
              <img :src="getCoverImage(otherUserOffer[0].images)" alt="other offer" class="max-w-full max-h-32 mx-auto">
              <div v-if="offer.requestedAmount && ((offer.receiver.id === otherUser.id && !offer.requestedAmountPaidByInitiatingUser) || (offer.sender.id === otherUser.id && offer.requestedAmountPaidByInitiatingUser))" class="absolute right-0 bg-black bg-opacity-50 p-3 -top-1">
                <span class="relative flex items-center font-bold text-sm text-white">
                  + 
                  <div v-if="offer.transactionMode === 'CASH'" class="px-1">
                    <svg width="14" height="14" viewBox="0 0 14 25" fill="none"  >
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#fff"/>
                    </svg>
                  </div>
                  <div v-else class="px-1">
                    <img src="~/assets/images/offer/coin-value.svg" alt="coin" class="w-[20px]">
                  </div>
                  {{offer.requestedAmount}} 
                </span>
              </div>
            </div>

            <div v-else-if="isMoney && offer.callerIsReceiver && (!offer.offeredOffers || offer.offeredOffers.length === 0) " class="h-32 w-full flex items-center justify-center overflow-hidden">
              <ListingItemMoney :amount="offer.requestedAmount" :transactionMode="offer.transactionMode"/>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
    <div class="absolute right-3 bottom-2 z-40 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm" @click="chngeStatus(offer)">
      <svg
        width="17"
        height="17"
        :class="{ 'fav-color': offer.favouriteDeal}"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3" />
      </svg>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'OfferListItem',
  props: ['offer'],
  computed: {
    dealSentTime () {
      return this.$moment(this.offer.dealSentTimeStamp).add(this.$config.timeOffset, 'minutes').format(' MMMM D , YYYY, h:mm:ss a')
    },
    currentState () {
      if (this.offer.currentState === 'INITIATED') {
        return this.offer.callerIsReceiver ? 'Incoming' : 'Outgoing'
      }

      const words = this.offer.currentState.toLowerCase().split('_')
      return words.map((word) => {
        return word[0].toUpperCase() + word.substring(1)
      }).join(' ')
    },
    currentUser () {
      return this.offer.callerIsReceiver ? this.offer.receiver : this.offer.sender
    },
    otherUser () {
      return !this.offer.callerIsReceiver ? this.offer.receiver : this.offer.sender
    },
    currentUserOffer () {
      return this.offer.callerIsReceiver ? this.offer.requestedOffers : this.offer.offeredOffers
    },
    otherUserOffer () {
      return this.offer.callerIsReceiver ? this.offer.offeredOffers : this.offer.requestedOffers
    },
    isFree () {
      return this.offer.requestedOffers[0].free
    },
    isMoney () {
     // console.log("is money")
      return this.offer.requestedOffers[0].exchangeMode === 'Money' || !this.offer.offeredOffers || (this.offer.offeredOffers && this.offer.offeredOffers.length === 0)
    }
  },
  mounted(){

  },
  methods: {
    getCoverImage (images) {
      if (images && images.length > 0) {
        // console.log('images', images)
        return images[0].url
      }
      return null
    },
    async  chngeStatus (offer) {
      try {
        if (offer?.favouriteDeal) {
          const url = `/dview/v1/deals/${offer.dealRefId}/favourites/remove`
          const data = await this.$axios.$delete(url)
          if (data.success) {
            offer.favouriteDeal = !offer.favouriteDeal
            // this.$emit("removeFromFav", true);
          }
        } else {
          const url = `/dview/v1/deals/${offer.dealRefId}/favourites/add`
          const data = await this.$axios.$post(url)
          if (data.success) {
            offer.favouriteDeal = !offer.favouriteDeal
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>
<style >
.accepted, .closed{
  color: #8bc63e !important;
}
.revised, .incoming{
  color: #48CEF3 !important;
}
.rejected, .expired{
  color: #FC2323 !important;
}
.fav-color path{
  fill:#EE2a7b !important;
}
.moneycardoffer .imgmyoffer {
  width: 80px !important;

}
.moneycardoffer .moneymyoffershow .text-xl{
  font-size: 18px !important;

}
.expired-offer{
  opacity: 0.8;
  position: relative;
}
.expired-overlay-text{
  position: absolute;
  background: #FC2323;
  color: #fff !important;
  font-size: 12px;
  padding: 3px 25px;
    top: 7px;
    left: -23px;
    display: none;

}
.close-overlay-text{
  position: absolute;
  background: #8bc63e;
  color: #fff !important;
  font-size: 12px;
  padding: 3px 25px;
    top: 7px;
    left: -23px;
    display: none;

}

</style>
