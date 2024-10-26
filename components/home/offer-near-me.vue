<template>
   <div class="w-full relative">
      <div  class="text-center mb-3 md:mb-5 lg:mb-8 2xl:mb-8  ">
        <h3  class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-0 relative mb-0 sm:mb-2 md:mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
          <div class="text-gray-600"><span >{{$t('OffersNearMe')}}</span></div>
        </h3>
        <span  class="hidden lg:block text-gray-400 text-sm font-normal">{{$t('Bestoffersneighbourhood')}}</span>
      </div>
      <div v-if="!loading && (!listings || !listings.length)" class="near-city-bg relative max-w-[900px] mx-auto ">
          <img src="~/assets/images/my-city-bg.png" alt="my-city" class="w-full h-[180px] sm:h-[280px] md:h-[280px]">
          <img src="~/assets/images/city-logo.png" alt="my-city" class="city-logo absolute w-[125px] top-[25px] left-[0px] sm:w-[auto] sm:top-[20px] sm:left-[50px] md:w-[auto] md:top-[25px] md:left-[75px] lg:top-[25px] lg:left-[80px] xl:top-[25px] xl:left-[80px] 2xl:top-[25px] 2xl:left-[80px]">
          <div class="absolute top-[20px] right-[10px] sm:top-[65px] sm:right-[50px] md:top-[65px] md:right-[75px] lg:top-[65px] lg:right-[100px] xl:top-[65px] xl:right-[100px] 2xl:top-[65px] 2xl:right-[100px]">
               <div class="text-gray-900 text-base leading-5 sm:text-xl sm:leading-6 md:text-2xl md:leading-9 lg:text-2xl lg:leading-9 xl:text-2xl xl:leading-9 2xl:text-2xl 2xl:leading-9 font-medium ">{{$t('Lookarounddiscover')}}</div>
               <div class="text-gray-900 text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl font-medium leading-9">{{$t('treasuresnearby')}}</div>
               <a href="javascript:;" @click="openAddAddressPopup({ mode: 'add', addressDet: addressDet})" class="take-pick  flex justify-center items-center h-12 max-w-[170px] mt-5 rounded bg-firoza"> 
                <span class="text-white font-medium text-center text-lg">{{$t('ExploreNow')}}</span>              
              </a>
          </div>
      </div>

      <GMap  v-if="showAddaddressPopup"
            :editOrAddAddressDetails="editOrAddAddressDetails"/> 
      
      <!-- Start Sriman Loader -->
      <div v-if="loading" class="container max-w-8xl mx-auto px-4 sm:px-4 md:px-8 2xl:px-16"> 
         <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8 mt-4 w-full loader-cusres">
            
               <div v-for="item in 5" :key="item" class="relative p-4 w-full bg-white overflow-hidden shadow hover:shadow-md rounded-lg loader-mobile">
                  <div class=" animate-pulses flex flex-col ">
                     <div class="rounded w-full h-32 bg-gray-200 shimmerBG"></div>
                     <div class="flex flex-col mt-5">
                        <div class="w-full h-1.5 bg-gray-200 rounded shimmerBG"></div>
                     </div>
                     <div class="hidden grid-cols-2 mt-3 gap-x-2 gap-y-1 sm:hidden md:hidden lg:grid xl:grid 2xl:grid">
                        <div class="mt-2 w-full h-1.5 bg-gray-200 rounded shimmerBG"></div>
                        <div class="mt-2 w-full h-1.5 bg-gray-200 rounded shimmerBG"></div>
                        <div class="mt-2 w-full h-1.5 bg-gray-200 rounded shimmerBG"></div>
                        <div class="mt-2 w-full h-1.5 bg-gray-200 rounded shimmerBG"></div>
                     </div>
                     <div class="flex items-center mt-3">
                        <div>
                           <div class="rounded-full bg-gray-200 w-7 h-7 shimmerBG"></div>
                        </div>
                        <div class="flex justify-between w-full ml-3">
                           <div class="w-5/12 h-1.5 bg-gray-200 rounded shimmerBG"></div>
                           <div class="w-2/12 h-1.5 bg-gray-200 rounded shimmerBG"></div>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
      </div>
      <!-- End Sriman Loader -->
      
       <div v-if="!loading && listings && listings.length" class="recentlisting offer-near-me-scroll recntlisting-grid-home pl-0 md:pl-0   border-gray-200 md:border-b-0 top-category-sec next-prev-arrow-top">
         <VueSlickCarousel class="vcustom-slider" v-bind="settings">
            <div v-for="listing of listings" :key="listing.offerId + listing.draftOfferId + listing.oid" 
               class="mobile-last group box-border overflow-hidden flex px-2 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-t  md:border-l-0 md:border-t-0 border-r border-b md:border-b-0  border-gray-200 rounded-0 md:rounded-0   relative">
               <ListingItem :listing="listing" />
            </div>
         </VueSlickCarousel>
      </div> 
   </div>
</template>

<script>
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import { mapState, mapGetters } from 'vuex';
export default Vue.extend({
  name: 'offerNearMe',
  props:['selectedAddress'],
  components: { VueSlickCarousel },
  watch: { 
      selectedAddress(newSelectedAddress, oldSelectedAddress){ // watch it
         console.log('Prop changed: ', newSelectedAddress, ' | was: ', oldSelectedAddress)
         this.getListingsForNearMe()
      }
   },
   data () {
    return {
      showAddaddressPopup:false,
      listings: [],
      page: 0,
      defaultSize: 20,
      loading: true,
      sortParamsdata: '&sort=publishedDate,desc',
      vueAllPath: '',
      editOrAddAddressDetails: {},
      addressDet:{
         id: '',
         addressLine: '',
         lat: 0,
         lng: 0,
         flatNo: '',
         landmark: '',
         area: '',
         annotation: '',
         zip: '',
         city: '',
         state: '',
         country: '',
         name: '',
         email: '',
         phoneNumber: '',
         default: false
      },
      settings: [{
             "arrows": true,
             "dots": false,
             "speed": 500,
             "infinite": true,
             "initialSlide": 0,
             "slidesToShow": 5, 
             "slidesToScroll": 5,
             "touchMove": true,
              "swipe": true,  
            
             "responsive": [
             {
               "breakpoint": 1024,
               "settings": {
                 "slidesToShow": 3, 
                 "slidesToScroll":3,             
               }
             },
             {
               "breakpoint": 1023,
               "settings": {
                 "slidesToShow": 3, 
                 "slidesToScroll": 3,             
               }
             },          
             {
               "breakpoint": 800,
               "settings": {
                 "slidesToShow": 2,
                 "slidesToScroll": 2, 
                 "touchMove": true,
                   "swipe": true,                         
               }
             },
             {
               "breakpoint": 480,
               "settings": {
                  "slidesToShow": 2, 
                  "slidesToScroll": 2,
                  "touchMove": true,
                   "swipe": true,
                  
                   
                              
               }
             }
           ]
           }]
    }
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
  created() {
    this.$on("closeModal", (section) => {
      this.showAddaddressPopup = false;
      if (section) {
         this.getListingsForNearMe()
      }
    });
  },
  mounted(){
   this.getListingsForNearMe()
  },
  methods: {
   async getListingsForNearMe() {
      const lat = this.selectedAddress ? this.selectedAddress.lat : null
      const lng = this.selectedAddress ? this.selectedAddress.lng : null
      let qreParam = ''
      if(lat && lng){
         qreParam = `lat=${lat}&lng=${lng}&`
      }

      this.loading   = true
      this.listings  = []
      try {         
         let size       = this.defaultSize
         // const url      = `/search/v1/search/near-me?${qreParam}page=${this.page}&size=${size}${this.sortParamsdata}`
         const url      = `/search/v1/search/near-me?${qreParam}page=${this.page}&size=${size}`
         const data     = await this.$axios.$get(url)
         
         this.listings  = data.payload.map((item)=>{
            return item.sourceAsMap
         })
         // this.listings  = data.payload.searchResult
         // console.log('offer-near-me data:', data)
         // console.log('offer-near-me listings:', this.listings)

         this.loading   = false

      } catch (error) {
         console.log('offer-near-me error:', error)
         // this.listings  = []
         this.loading   = false
      }
   },
   openAddAddressPopup(addressDet){
      console.log('add address popup')
      addressDet.addressDet.name = this.authUser.displayName
      addressDet.addressDet.email = this.authUser.email
      addressDet.addressDet.phoneNumber = this.authUser.phoneNumber
      this.editOrAddAddressDetails = addressDet
      this.showAddaddressPopup = true
      console.log("addddAddressDetails",this.editOrAddAddressDetails)
   }
  }
})

</script>
<style scoped>
@media only screen and (max-width: 600px) {
   .recentlisting .mobile-last:nth-child(5){
   display: none;

}

}
.recentlisting .mobile-last:nth-child(5){
   border-right: 0 !important;

}
.top-category-sec .vcustom-slider .slick-next{
  top:30% !important;
}


@media only screen and (min-device-width: 0px) and (max-device-width: 639px){
   .loader-cusres .loader-mobile:nth-child(3), .loader-cusres .loader-mobile:nth-child(4), .loader-cusres .loader-mobile:nth-child(5){
        display: none;
   }
 }

 @media only screen and (min-device-width: 640px) and (max-device-width: 1023px){
    .loader-cusres .loader-mobile:nth-child(4), .loader-cusres .loader-mobile:nth-child(5){
        display: none;
   }
 }
 
</style>