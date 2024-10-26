<template>
  <div v-if="selllerDet" class="relative px-7 market-local-card">
   
                    <div class="bg-white shadow-sm ">
                     <div class="flex items-center justify-center relative group bg-green h-[40px] px-2">
                   <span class="text-sm text-center text-white font-medium truncate">{{ selllerDet.displayName }}</span> 
                   <div class="absolute top-[20px] flex flex-col items-center hidden w-full group-hover:block ">
                     <div class="rounded text-left z-20 px-2 py-1 bg-gray-100 shadow-lg absolute ">
                       <span class="text-sm text-centewhite font-medium ">{{ selllerDet.displayName }}</span>                           
                     </div> 
                   </div>
     
                  </div>
                  
                  <div><img src="~/assets/images/dec-home/shop-top.png" alt="image" class="w-full h-auto absolute top-[39px] left-[0px] shop-top z-10" /></div>

                   <div class="px-3 py-4 pt-[107px] relative h-[243px]">
                    <a  :href="localePath(getLink(selllerDet.uid))" class="cursor-pointer">
                    <img v-if="getTopsellerImageUrl(selllerDet.photoURL)" :src="getTopsellerImageUrl(selllerDet.photoURL)"
           :alt="selllerDet.photoURL"  class="w-full h-full absolute top-0 left-0 bg-cover bg-center">
           <img v-else src="~/assets/images/profile/chatu-noimg.svg" alt="image" 
             class="w-full h-full absolute top-0 left-0 bg-cover bg-center">
             <div class="absolute top-0 left-0 bg-black w-full h-full opacity-30 "></div></a>
                     <!-- <a  :href="localePath(getLink(selllerDet.uid))" class="cursor-pointer">
                       <div class="flex items-center justify-center">
                         <img v-if="getTopsellerImageUrl(selllerDet.photoURL)" :src="getTopsellerImageUrl(selllerDet.photoURL)"
           :alt="selllerDet.photoURL"  class="w-[100px] h-[100px] rounded-full border-[6px] border-[#D5F1AB]">
           <img v-else src="~/assets/images/profile/chatu-noimg.svg" alt="image" 
             class="w-[100px] h-[100px] rounded-full border-[6px] border-[#D5F1AB]"></div></a> -->
                        
                         <div class="flex flex-row items-center justify-center mt-6 relative">
                          <div v-if="selllerDet.publishedListingCount && selllerDet.publishedListingCount > 0" class="flex flex-col basis-2/4">
                            <!-- <div class="text-xs text-gray-900 text-center">{{ $t('listing') }}<span v-if="getLisitngNo(selllerDet)">s</span></div> -->
                            <div class="flex items-center justify-center mb-1">
                            <svg width="17" height="20" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_5_195)">
                            <path d="M11.389 2.48103C11.5001 2.03996 11.5001 1.37835 10.7223 0.661607C10.2779 0.220536 9.83344 0 9.33344 0C7.94455 0 6.94455 1.92969 6.44455 3.19777C5.94455 1.92969 4.94455 0 3.55566 0C3.05566 0 2.61122 0.220536 2.16677 0.661607C1.38899 1.37835 1.38899 2.03996 1.5001 2.48103C2.0001 4.13504 5.55566 4.79665 6.27788 4.90692H6.33344C6.38899 4.90692 6.38899 4.90692 6.44455 4.90692C6.5001 4.90692 6.5001 4.90692 6.55566 4.90692H6.61122C7.33344 4.79665 10.889 4.13504 11.389 2.48103ZM2.44455 2.20536C2.33344 1.92969 2.5001 1.65402 2.83344 1.32321C3.11122 1.10268 3.33344 0.937277 3.55566 0.937277C4.33344 0.937277 5.16677 2.42589 5.66677 3.80424C4.22233 3.47344 2.61122 2.86696 2.44455 2.20536ZM10.4445 2.20536C10.2223 2.86696 8.61122 3.47344 7.22233 3.80424C7.66677 2.59129 8.5001 0.937277 9.33344 0.937277C9.55566 0.937277 9.77788 1.04754 10.0557 1.32321C10.389 1.65402 10.5557 1.92969 10.4445 2.20536Z" fill="white"/>
                            <path d="M0.0555556 8.38036H5.88889V5.51339H1C0.444444 5.51339 0 5.95446 0 6.5058L0.0555556 8.38036Z" fill="white"/>
                            <path d="M7.16675 5.51339V8.38036H13.0001V6.45067C13.0001 5.89933 12.5556 5.45826 12.0001 5.45826L7.16675 5.51339Z" fill="white"/>
                            <path d="M0.666748 15.4375H5.83342V9.53817C5.83342 9.2625 5.61119 8.98683 5.27786 8.98683H1.2223C0.944526 8.98683 0.666748 9.20737 0.666748 9.53817V15.4375V15.4375Z" fill="white"/>
                            <path d="M7.16675 15.4375H12.3334V9.53817C12.3334 9.2625 12.1112 8.98683 11.7779 8.98683H7.7223C7.44453 8.98683 7.16675 9.20737 7.16675 9.53817V15.4375V15.4375Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_5_195">
                            <rect width="13" height="15.4375" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </div>
                           <div class="text-sm font-bold text-white text-center">{{selllerDet.publishedListingCount ? selllerDet.publishedListingCount : 0 }}</div>                           
                         </div>
                         <div  v-if="isSellerRatingExists(selllerDet.averageRating)"  class="flex flex-col basis-2/4">
                          <!-- <div class="text-xs text-gray-900 text-center">{{ $t('followers') }}<span v-if="getFollowersNo(selllerDet)">s</span></div> -->
                          <div class="flex items-center justify-center pt-[2px] mb-[6px]">
                            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5254 0.311684C6.6136 0.120842 6.7984 0 7 0C7.2023 0 7.3864 0.120842 7.4746 0.311684C8.1564 1.78389 9.3296 4.32011 9.3296 4.32011C9.3296 4.32011 11.9973 4.70621 13.545 4.93095C13.8271 4.97147 14 5.22274 14 5.48137C14 5.62137 13.9496 5.76358 13.8383 5.87632C12.7113 7.00958 10.7709 8.96442 10.7709 8.96442C10.7709 8.96442 11.2448 11.7401 11.5192 13.3501C11.5773 13.6905 11.3267 14 10.9998 14C10.9144 14 10.829 13.9786 10.7513 13.9344C9.3737 13.1622 7 11.8337 7 11.8337C7 11.8337 4.6263 13.1622 3.2487 13.9344C3.171 13.9786 3.0849 14 2.9995 14C2.674 14 2.422 13.6898 2.4808 13.3501C2.7559 11.7401 3.2298 8.96442 3.2298 8.96442C3.2298 8.96442 1.2887 7.00958 0.1624 5.87632C0.0504001 5.76358 0 5.62137 0 5.4821C0 5.22274 0.1743 4.97074 0.4557 4.93095C2.0034 4.70621 4.6704 4.32011 4.6704 4.32011C4.6704 4.32011 5.8443 1.78389 6.5254 0.311684V0.311684Z" fill="white"/>
                            </svg>
                          </div>
                          <div class="text-sm font-bold text-white text-center">{{ tofixedTwoDigit(selllerDet.averageRating) }}</div> 
                                                      
                         </div>
                         <div v-if="selllerDet.followerCount && selllerDet.followerCount > 0"  class="flex flex-col basis-2/4">
                          <!-- <div class="text-xs text-gray-900 text-center"> {{ $t('rating') }}</div>  -->
                          <div class="flex items-center justify-center">
                          <svg width="25" height="25" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0_5_335" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                            <rect width="22" height="22" fill="url(#pattern0)"/>
                            </mask>
                            <g mask="url(#mask0_5_335)">
                            <rect x="-4.88721" y="-7.33365" width="36.6667" height="31.7778" fill="white"/>
                            </g>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_5_335" transform="scale(0.0104167)"/>
                            </pattern>
                            <image id="image0_5_335" width="96" height="96" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO2cXYhVVRTHf9O34lQqWlOBSWUhUSn0WNGTb71lKERN9NCA0UsPvQQiFIZGbzk5WSC+9EVBDyJEPYSMTQpCBFlJkJOglUZ5o5mmdmxcQzR5nb3vnLP3Pvf8f/CHYe6cc9Zd6+yvtfYeEEIIIYQQQgghhBBCCCGEqI+rgc3AGDABnAamTaftd7uBTcCgAlEdtwN7gN8BF6gO8DpwmwLRO4uBncCfEY53c+Rbxw7gKgUiDv/mfrEAx7s5OgQMKQhhrLM+3VWsSeBuBWH+N78O5zvTCbWE7vh++miNznemwza+iDnsTOB8Z9om7/9/qrmQ2Y6L1Dl1Rf9lT0LnO9MutYJ/V7idDAHoaMV8ns0ZnO9MjxTYCvxUeTjlA8cyBuA1ymKtTcP/Bp5J9dCJjAEYpxxuBX6YY9/2FA/+MWMATlEGq22ReCEbX6j74VMZA/AH+bkJOD6Pna8Cl9RlQJsDMAR8HWjry3UZ0dYuaAXwZaCdvwD31mVIGwfha4EjEeuV++s0ZnfGAIySnmuAzwPt81XAB+s2aFPGAGwkLUuAgxHj04YURg1mTEUsIR2LgI8jSqkP9XsybizCvvXAR8DyHr/flcCBQLtmgIdJzBqLeirnTwG3RDj/Z7vuqM1eYrgC+DDQrr+AR8nEjoQB2N6D82flNwusDLz+MuDdQJt8/udJMpckxxOVJBcF2HMP8FOXe3wF3DDP9X7lui/CrmcpgOuB72t0/kngxgU6f1bHLnKvAcu0htr1HIXlwydrcP4J4K7ARVLo6vxCQRiw3E2oXc9TIEO2maoq549H1oCHbUAMufd3ls2c5aUIu2rL71Q1JmyzAnqvjp+2AbeXrYlPRATBZzNXAS9G2PYKDWHICuidiC93zub5oVPNKoJwNsK+XdZVNYpBq+GOWvd0yubzU/bzIftsY8Ur3JgghOjNOnP7/cpwRUF4x9YGIkMQ3pfz8wXhgOWDRIYg+CSeDohkCsLBxCnvVjE8TxD8rEyHBWum2xT1iKU0RIaW8A1wHX3AcquJPm05k/dsB8Vx28J3xqpHM/bzpH02YX/rr9li91iWqCV4G26mwQ5/HNhrWUZXsY7ZvR9bQGnxYvhK1p008GzACPCJvckukWasQD7S1oFyreVtfkvodNdFv1r+/g5awCqrFKV8212gfB/+dr/+e4PFlpdPufPB9ahpy+uH1I0bwQMB269L1LfAfTSYATtm04S33nWR7yq3ApfSMHzy6a0CHOgq0gdNOl3vFz2fFeA0V7F8bmcpDXB+6L73JupwyUG4PGL3b5P1qe33LI7RApzjEukNCmOkAKe4xHqKQlhdSErBJVangn1HlRB68KAftZ8CcC1XdlzLlR3XcmXHtVzZcS1XdlzLlR3XcmXHtVxCCCGEEEIIIYQQQgghhBBUyT/P/nR9N49S8gAAAABJRU5ErkJggg=="/>
                            </defs>
                            </svg>
                          </div>
                          <div class="text-sm font-bold text-white text-center pr-1">{{ selllerDet.followerCount ? selllerDet.followerCount : 0 }}</div>                        
                         </div>
                         
                       </div>
                        
                    
                        
                         <div v-if="authUser && authUser.uid !== selllerDet.uid" class="flex items-center justify-center mt-4 px-4 relative">
                           <a @click="followAndUnfollow(selllerDet)"
                           :class="!selllerDet.followEnabled && isLoggedIn ? 'border-white border text-white font-medium bg-tranparent ' : 'text-white border-white bg-tranparent h-[40px]'"
                           class="cursor-pointer text-center flex items-center justify-center py-2 w-full text-sm px-4  border mb-0  bg-tranparent h-[40px]">
                           <span v-if="!btnloading">{{ selllerDet.followEnabled || !isLoggedIn ? $t('follow') : $t('unfollow') }}</span>
                          <span v-if="btnloading" class="absolute">
                          <Spinner v-show="btnloading" />
                           </span>
                            </a>
                         </div>

                         <div v-if="authUser && authUser.uid === selllerDet.uid" class="flex items-center justify-center mt-4 px-4 relative">
                           <a :href="localePath('/my-profile')"
                           :class="!selllerDet.followEnabled && isLoggedIn ? 'border-white border text-white font-medium bg-tranparent ' : 'text-white border-white bg-tranparent'"
                           class="cursor-pointer text-center flex items-center justify-center py-2 w-full text-sm px-4 text-white border mb-0 border-white bg-tranparent">
                           <span>{{ $t('myAccount') }}</span>
                            </a>
                         </div>

                         <div  v-if="!authUser" class="cursor-pointer flex items-center justify-center mt-4 px-4 relative">
                           <a @click="followAndUnfollow(selllerDet)"
                           :class="!selllerDet.followEnabled && isLoggedIn ? 'border-white border text-white font-medium bg-tranparent ' : 'text-white border-white bg-tranparent'"
                           class="cursor-pointer text-center flex items-center justify-center py-2 w-full text-sm px-4 border mb-0 text-white border-white bg-tranparent">
                           <span>{{ $t('follow') }}</span>
                            </a>
                         </div>
                   </div>
                    </div>
                   
                    </div>
 </template>
     
       
       
 <script lang="ts">
 import Vue from 'vue'
 import { mapState, mapGetters } from 'vuex'
 export default Vue.extend({
   name: 'marketSellerCard',
   props: ['selllerDet'],
   middleware: 'authenticated',
   asyncData() {
     return {
       topsellerList: [],
       loading: true,
 
     }
   },
   data() {
     return {
       btnloading: false
     }
   },
   computed: {
     ...mapState({
       authUser: state => state.authUser
     }),
     ...mapGetters({
       isLoggedIn: 'isLoggedIn'
     })
   },
 
   beforeMount() {
   // console.log("selllerDet",this.selllerDet)
   },
   methods: {

     
     getFollowersNo(selllerDet:any){
      if(selllerDet && selllerDet?.followerCount && selllerDet?.followerCount > 1 && this.$i18n.locale === 'en'){
       return true
      }else{
       return false
      }
     },

     getLisitngNo(selllerDet:any){
      if(selllerDet && selllerDet?.publishedListingCount && selllerDet?.publishedListingCount > 1 && this.$i18n.locale === 'en'){
       return true
      }else{
       return false
      }
     },
 
     isSellerRatingExists(sellerRatings:any){
      if(sellerRatings && sellerRatings!== null && sellerRatings!== 0 && sellerRatings!== ''){
       return true
      }else{
       return false
      }
     },
 
     async followAndUnfollow(selectedUser: any, indValue: any) {
 
       if (!this.isLoggedIn) {
         this.$router.push({ path: `/login` })
         if (process.client) {
           const currentUrl = window.location.pathname
           console.log("currentUrl", currentUrl)
           window.localStorage.setItem("setPath", `${currentUrl}`);
         }
         return
       }
       //   this.indexValue = indValue
 
       this.btnloading = true
 
       if (selectedUser.followEnabled) {
         //  console.log("Yess clicking On follow")
         try {
           let url = `/users/v1/user/follow/` + selectedUser.uid
           const data = await this.$axios.$post(url);
           if (data.success) {
             this.btnloading = false
             //   this.indexValue = null
             return selectedUser.followEnabled = false
           }
           this.btnloading = false
         } catch (error) {
 
           this.btnloading = false
 
           console.log(error);
         }
 
 
       } else if (!selectedUser.followEnabled) {
         try {
 
 
           let url = `/users/v1/user/unfollow/` + selectedUser.uid
           const data = await this.$axios.$delete(url);
 
           if (data.success) {
             this.btnloading = false
             //   this.indexValue = null
             return selectedUser.followEnabled = true
           }
 
         } catch (error) {
           this.btnloading = false
           console.log(error);
         }
 
       }
     },
 
 
     getLink(uId: any) {
       if (this.authUser && this.authUser.uid === uId) {
         return '/my-profile'
       } else {
         return '/profile/view/' + uId + ''
       }
     },
 
     tofixedTwoDigit(rating: any) {
       if (rating) {
         return rating.toFixed(1)
       }
     },
 
     getCountOFFollowers(floowercount: any) {
       if (floowercount > 1 && this.$i18n.locale && this.$i18n.locale === 'en') {
         return true
       }
     },
 
     getTopsellerImageUrl(imageUrl: any) {
       const defaultImage = "~/assets/images/profile/chatu-noimg.svg";
       if (imageUrl && !imageUrl.match("deleted.jpeg") && imageUrl !== 'null') {
         return imageUrl;
       } else {
         return false;
       }
     }
   }
 
 
 
 })
 
 </script>
       
 <style scoped>
   /* @media only screen and (min-device-width: 0px) and (max-device-width: 410px){
   .shop-top{ height: 45px; }
   .market-local-card{ padding: 0px 40px;}
 }
 
 @media only screen and (min-device-width: 411px) and (max-device-width: 480px){
   .shop-top{ height: 45px; }
   .market-local-card{ padding: 0px 45px; }
 }

 @media only screen and (min-device-width: 481px) and (max-device-width: 550px){
   .shop-top{ height: 45px; }
   .market-local-card{ padding: 0px 50px; }
 } */

 @media only screen and (min-device-width: 0px) and (max-device-width: 767px){
   .market-local-card{ width: 270px; }
 }
 @media only screen and (min-device-width: 1200px) and (max-device-width: 1400px){
   .market-local-card{ width: 260px; }
 }
 @media only screen and (min-device-width: 1701px) and (max-device-width: 3000px){
   .market-local-card{ width: 270px; }
 }
 </style>