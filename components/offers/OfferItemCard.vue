<template>
 
   <div class="group box-border overflow-hidden flex p-3  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5  border border-gray-200 rounded-sm relative">
                        <div class="flex items-center w-full justify-between pb-4">
                           <div class="text-sm text-gray-500 ">{{dealSentTime}}</div>

     <div :class="[currentState.replace(/ /g, '').toLowerCase(),'text-sm flex items-center font-medium']">
        <DealStatusIcon :offer="offer" />
        <span class="ml-5">{{ currentState }}</span>
      </div>
                           <!-- <div class="text-green text-sm flex items-center font-medium ">
                              <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M25.7114 4.04125L23.3909 1.5125C22.8773 0.957782 22.1835 0.646558 21.4604 0.646564H10.4039C9.68239 0.646564 8.98527 0.960002 8.47339 1.5125L6.15289 4.04125H1.40039C0.848105 4.04125 0.400391 4.48897 0.400391 5.04125V5.59429C0.400391 6.14746 0.849491 6.59554 1.40266 6.59429L5.08039 6.58594H7.12302L10.1309 3.31344C10.1796 3.29219 10.2249 3.27221 10.27 3.25229C10.315 3.23238 10.3601 3.21248 10.4088 3.19125H13.1729L11.2863 5.07719C9.85302 6.50625 9.77014 8.91813 11.0718 10.4588C11.7933 11.3194 14.0553 12.6475 16.0199 10.6925L16.4196 10.2941L21.6944 14.9584C21.8601 15.1072 21.8845 15.3781 21.7529 15.5588L20.4805 17.2694C20.344 17.45 20.1003 17.4819 19.9296 17.3331L18.7645 16.3025L17.302 18.2416C17.0095 18.6294 16.5708 18.4966 16.4245 18.3691L14.6305 16.6956L13.87 17.7156C13.1924 18.6241 11.959 18.7622 11.1741 18.0663L6.43077 13.3913H5.08039H1.40039C0.848105 13.3913 0.400391 13.839 0.400391 14.3913V14.9413C0.400391 15.4935 0.848106 15.9413 1.40039 15.9413H1.75287C1.55503 15.7093 1.43531 15.4065 1.43531 15.0753C1.43531 14.3451 2.01734 13.7531 2.73531 13.7531C3.45328 13.7531 4.03531 14.3451 4.03531 15.0753C4.03531 15.4065 3.91559 15.7093 3.71776 15.9413H5.07552H5.51914L9.64339 20C11.1498 21.3334 13.2411 21.3653 14.7914 20.2019C15.4008 20.7756 16.0589 21.0466 16.795 21.0466C17.6823 21.0466 18.5159 20.6534 19.174 19.7716C20.2514 20.2338 21.5238 19.9097 22.294 18.8791L23.5713 17.1631C23.8443 16.7966 24.0149 16.3769 24.1026 15.9413H26.9253H28.2779C28.0801 15.7093 27.9604 15.4065 27.9604 15.0753C27.9604 14.3451 28.5424 13.7531 29.2604 13.7531C29.9784 13.7531 30.5604 14.3451 30.5604 15.0753C30.5604 15.4065 30.4407 15.7093 30.2428 15.9413H30.6004C31.1527 15.9413 31.6004 15.4935 31.6004 14.9413V14.3913C31.6004 13.839 31.1527 13.3913 30.6004 13.3913H26.9204H23.5469C23.4348 13.2425 23.308 13.1044 23.1715 12.9822L18.1649 8.55156L18.7743 7.94594C19.0911 7.62719 19.1155 7.09063 18.823 6.74531L18.2916 6.12375C17.9991 5.77844 17.5068 5.75719 17.1899 6.07063L14.4989 8.75875C14.0358 9.22094 13.246 9.25813 12.8121 8.75875C12.3588 8.23281 12.3978 7.42531 12.8706 6.95781L16.0686 3.765C16.4294 3.40375 16.8974 3.20719 17.3849 3.20719L21.4653 3.19656C21.5676 3.19656 21.6651 3.23906 21.7334 3.31875L24.7413 6.59125H26.9204H30.6004C31.1527 6.59125 31.6004 6.14354 31.6004 5.59125V5.04125C31.6004 4.48897 31.1527 4.04125 30.6004 4.04125H25.7114Z" fill="#8BC63E"/>
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75287 15.9413H3.71776C3.91559 15.7093 4.03531 15.4065 4.03531 15.0753C4.03531 14.3451 3.45328 13.7531 2.73531 13.7531C2.01734 13.7531 1.43531 14.3451 1.43531 15.0753C1.43531 15.4065 1.55503 15.7093 1.75287 15.9413Z" fill="#8BC63E"/>
                                 <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5604 15.0753C30.5604 15.4065 30.4407 15.7093 30.2428 15.9413H28.2779C28.0801 15.7093 27.9604 15.4065 27.9604 15.0753C27.9604 14.3451 28.5424 13.7531 29.2604 13.7531C29.9784 13.7531 30.5604 14.3451 30.5604 15.0753Z" fill="#8BC63E"/>
                              </svg>
                              <span class="ml-5">Accepted</span>
                           </div> -->
                        </div>
                        <div class="flex  justify-between w-full mb-6">
                           
 <NuxtLink class="pr-5 pl-2  items-center inline-block " :to="localePath('/profile/view/' + currentUser.id)" target="_blank">
        <div class="flex items-center">
          <div class="h-10 w-10  bg-gray-200 flex items-center justify-center rounded-full mr-5 relative">

            <ProfileAvatar :imageUrl = "currentUser.imageUrl"/>
            <!-- <img v-if="currentUser.imageUrl" :src="currentUser.imageUrl" class="w-10 h-10 rounded-full">
            <img v-else src="~assets/images/profile-icon.png" class="w-10 h-10 rounded-full"> -->
          </div>
          <div class="text-sm text-gray-600 font-medium mr-12">
            {{ currentUser.name }}
            <span class="text-xs block font-normal">( You )</span>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="pl-2  items-center inline-block " :to="localePath('/profile/view/' + otherUser.id)" target="_blank">
        <div class="flex items-center">
          <div class="text-sm text-gray-600 font-medium ">
            {{ otherUser.name }}
          </div>
          <div class="h-10 w-10  bg-gray-200 flex items-center justify-center rounded-full ml-5 relative">

            <ProfileAvatar :imageUrl = "otherUser.imageUrl"/>
            
            <!-- <img v-if="otherUser.imageUrl" :src="otherUser.imageUrl" class="w-10 h-10 rounded-full">
            <img v-else src="~assets/images/profile-icon.png" class="w-10 h-10 rounded-full"> -->
          </div>
        </div>
      </NuxtLink>
                        </div>
                       <NuxtLink class="image-row flex w-full items-center" :to="localePath(`/offers/details/${offer.dealRefId}`)" target="_blank">
      <div class="your-img w-[40%]">
        <div class="flex max-h-40 justify-center items-center">
          <div class="w-full p-2">
            <div v-if="isFree && !offer.callerIsReceiver" class="h-32 w-full flex items-center justify-center overflow-hidden">
              <ListingItemFree />
            </div>
            <div v-else-if="isMoney && !offer.callerIsReceiver" class="h-32 w-full flex items-center justify-center overflow-hidden">
              <ListingItemMoney :amount="offer.requestedAmount" :transactionMode="offer.transactionMode" />
            </div>
            <div v-else-if="currentUserOffer && currentUserOffer.length > 0" class="h-32 w-full flex items-center justify-center overflow-hidden">
              <!-- <ProfileAvatar :imageUrl = "currentUserOffer[0].images[0].url"/> -->
               <img :src="currentUserOffer[0].images[0].url" alt="user-offer" class="max-w-full max-h-32"> 
            </div>
          </div>
        </div>
      </div>
      <div class="barter-icon w-[20%] text-center">
        <img data-v-1afe09f0="" src="~/assets/images/barter-offer.svg" alt="barter-offer" class="max-w-full mx-auto">
      <!-- <svg width="100" height="48" viewBox="0 0 123 71" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto">
<path d="M3.73392 16.1788H120.518C120.953 16.1788 121.18 15.6626 120.887 15.3417L108.249 1.5" stroke="#48CEF3" stroke-width="2" stroke-linecap="round"/>
<path d="M118.674 55.3212H1.88984C1.45526 55.3212 1.22758 55.8374 1.5206 56.1583L14.1585 70" stroke="#48CEF3" stroke-width="2" stroke-linecap="round"/>
<path d="M31.595 33.0703C32.4723 33.3689 33.1536 33.8543 33.639 34.5263C34.1243 35.1983 34.367 36.0383 34.367 37.0463C34.367 39.0249 33.6016 40.5463 32.071 41.6103C30.559 42.6556 28.487 43.1783 25.855 43.1783H16.419L20.339 23.5783H29.019C30.9976 23.5783 32.519 23.9516 33.583 24.6983C34.6656 25.4263 35.207 26.4903 35.207 27.8903C35.207 29.1596 34.871 30.2423 34.199 31.1383C33.5456 32.0156 32.6776 32.6596 31.595 33.0703ZM22.663 25.8463L21.403 32.1183H27.143C28.7296 32.1183 29.9803 31.8009 30.895 31.1663C31.8283 30.5129 32.295 29.5703 32.295 28.3383C32.295 27.4983 31.959 26.8729 31.287 26.4623C30.6336 26.0516 29.6816 25.8463 28.431 25.8463H22.663ZM26.051 40.9103C27.8243 40.9103 29.187 40.5836 30.139 39.9303C31.1096 39.2583 31.595 38.3063 31.595 37.0743C31.595 36.1036 31.2496 35.4129 30.559 35.0023C29.887 34.5916 28.8696 34.3863 27.507 34.3863H20.955L19.667 40.9103H26.051ZM54.1584 28.3383L51.2184 43.1783H48.6424L49.0064 41.3583C48.3344 41.9929 47.5504 42.4876 46.6544 42.8423C45.777 43.1783 44.8157 43.3463 43.7704 43.3463C42.501 43.3463 41.3717 43.0943 40.3824 42.5903C39.393 42.0676 38.6184 41.3209 38.0584 40.3503C37.4984 39.3796 37.2184 38.2409 37.2184 36.9343C37.2184 35.2543 37.5824 33.7516 38.3104 32.4263C39.0384 31.1009 40.037 30.0649 41.3064 29.3183C42.5944 28.5716 44.0317 28.1983 45.6184 28.1983C46.8877 28.1983 47.9704 28.4223 48.8664 28.8703C49.781 29.3183 50.481 29.9809 50.9664 30.8583L51.4704 28.3383H54.1584ZM44.3584 40.9943C45.4597 40.9943 46.449 40.7329 47.3264 40.2103C48.2224 39.6689 48.913 38.9223 49.3984 37.9703C49.9024 37.0183 50.1544 35.9356 50.1544 34.7223C50.1544 33.3969 49.7717 32.3703 49.0064 31.6423C48.241 30.9143 47.149 30.5503 45.7304 30.5503C44.629 30.5503 43.6397 30.8209 42.7624 31.3623C41.885 31.8849 41.1944 32.6223 40.6904 33.5743C40.1864 34.5263 39.9344 35.6089 39.9344 36.8223C39.9344 38.1289 40.317 39.1556 41.0824 39.9023C41.8664 40.6303 42.9584 40.9943 44.3584 40.9943ZM61.4283 30.5503C62.0816 29.7289 62.8843 29.1316 63.8363 28.7583C64.7883 28.3849 65.9456 28.1983 67.3083 28.1983L66.8043 30.8023C66.6363 30.7836 66.403 30.7743 66.1043 30.7743C63.0243 30.7743 61.1576 32.4356 60.5043 35.7583L59.0203 43.1783H56.3323L59.2723 28.3383H61.8483L61.4283 30.5503ZM72.2028 38.4463C72.1468 38.7263 72.1188 38.9876 72.1188 39.2303C72.1188 39.8276 72.2775 40.2849 72.5948 40.6023C72.9308 40.9196 73.4255 41.0783 74.0788 41.0783C74.8628 41.0783 75.5722 40.8449 76.2068 40.3783L76.7668 42.4223C75.8708 43.0383 74.7228 43.3463 73.3228 43.3463C72.1468 43.3463 71.1948 43.0196 70.4668 42.3663C69.7575 41.6943 69.4028 40.7796 69.4028 39.6223C69.4028 39.2303 69.4402 38.8569 69.5148 38.5023L71.1108 30.5503H68.5908L69.0108 28.3383H71.5588L72.2028 25.0903H74.8908L74.2468 28.3383H78.5028L78.0548 30.5503H73.7988L72.2028 38.4463ZM81.9324 36.5983V36.7663C81.9324 38.1476 82.3244 39.2023 83.1084 39.9303C83.8924 40.6396 85.0684 40.9943 86.6364 40.9943C87.5511 40.9943 88.4097 40.8449 89.2124 40.5463C90.0151 40.2289 90.6871 39.8089 91.2284 39.2863L92.3764 41.2183C91.6484 41.8903 90.7617 42.4129 89.7164 42.7863C88.6711 43.1596 87.5697 43.3463 86.4124 43.3463C84.9564 43.3463 83.6964 43.0849 82.6324 42.5623C81.5684 42.0396 80.7471 41.2929 80.1684 40.3223C79.5897 39.3516 79.3004 38.2129 79.3004 36.9063C79.3004 35.2449 79.6551 33.7516 80.3644 32.4263C81.0924 31.1009 82.0911 30.0649 83.3604 29.3183C84.6484 28.5716 86.0857 28.1983 87.6724 28.1983C89.6884 28.1983 91.2937 28.7769 92.4884 29.9343C93.7017 31.0729 94.3084 32.6316 94.3084 34.6103C94.3084 35.2076 94.2431 35.8703 94.1124 36.5983H81.9324ZM87.5604 30.4383C86.2351 30.4383 85.0964 30.8116 84.1444 31.5583C83.1924 32.3049 82.5484 33.3316 82.2124 34.6383H91.7884C91.8631 33.3129 91.5084 32.2863 90.7244 31.5583C89.9591 30.8116 88.9044 30.4383 87.5604 30.4383ZM101.542 30.5503C102.195 29.7289 102.998 29.1316 103.95 28.7583C104.902 28.3849 106.059 28.1983 107.422 28.1983L106.918 30.8023C106.75 30.7836 106.516 30.7743 106.218 30.7743C103.138 30.7743 101.271 32.4356 100.618 35.7583L99.1336 43.1783H96.4456L99.3856 28.3383H101.962L101.542 30.5503Z" fill="#8BC63E"/>
</svg> -->
        <!-- {{ offer.exchangeMode }} -->
      </div>
      <div class="otheruser-img w-[40%] ">
        <div class="flex max-h-40 justify-center items-center">
          <div class="w-full p-2">
            <div v-if="isFree && offer.callerIsReceiver" class="h-32 w-full flex items-center justify-center overflow-hidden">
              <ListingItemFree />
            </div>
            <div v-else-if="isMoney && offer.callerIsReceiver" class="h-32 w-full flex items-center justify-center overflow-hidden">
              <ListingItemMoney :amount="offer.requestedAmount" :transactionMode="offer.transactionMode"/> 
            </div>
            <div v-else-if="otherUserOffer && otherUserOffer.length > 0" class="h-32 w-full flex items-center justify-center overflow-hidden">
              <!-- <ProfileAvatar :imageUrl = "otherUserOffer[0].images[0].url"/> -->
               <img :src="otherUserOffer[0].images[0].url" alt="other offer" class="max-w-full max-h-32"> 
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
                     </div>
  
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'OfferItemCard',
  props: ['offer'],
  mounted(){
  // console.log(this.offer)
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
      return this.offer.callerIsReceiver ? this.offer.requestedOffers : this.offer.offeredOffers
    },
    otherUserOffer () {
      return this.offer.callerIsReceiver ? this.offer.offeredOffers : this.offer.requestedOffers
    },
    isFree () {
      return this.offer.requestedOffers[0].free
    },
    isMoney () {
      return this.offer.requestedOffers[0].exchangeMode === 'Money' || !this.offer.offeredOffers || (this.offer.offeredOffers && this.offer.offeredOffers.length === 0)
    }
    },
    methods:{
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
</style>