<template>
   <div class="product-details-page pt-[80px] lg:pt-12">
      <!--//////////header///////////-->
      <Header />
      <!--////////Breadcrumb//////////-->
      <div class="mx-auto container px-1 md:px-1 2xl:px-1 pt-10 hidden md:flex">
         <breadcrumb v-if="breadcrumb.length > 0" :breadcrumb="breadcrumb" />
      </div>
      <div class="mx-auto container px-1 md:px-1 2xl:px-1 pt-5 min-h-[500px]">
        
         <div class="flex flex-col w-full mb-8">
            <div class="w-full flex flex-col mb-5">
               <div class="text-center ">
                  <h3 class="section-title text-gray-600 text-base md:text-2xl font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5 before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5 after:top-4 after:-right-14" >
                     <span class=""> {{$t('matches')}}</span>                 
                  </h3>
                  <!-- <span class="block text-gray-400 text-sm font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> -->
               </div>
            </div>

            <!-- Start Of No matches -->
            <div v-if="!existingOffers.length && !loading" class="flex flex-col w-full pt-10 pb-14">
               <div class="w-full flex justify-center items-center pt-4">
                  <img width="320" height="213"  
                     src="~/assets/images/offer/matchbox-empty.png" alt="iamges">
               </div>
               <div class="w-full flex justify-center items-center pt-3">
                  <div class="text-sm text-gray-500 text-center font-normal">{{ $t('matchesPara') }}</div>
               </div>
               <div class="w-full flex justify-center items-center pt-2 mt-5">
                  <a :href="localePath('/listing/item')" class="py-3 rounded-sm text-sm px-8 bg-firoza mr-5 inline-block text-white border-firoza border mb-0 hover:bg-firoza hover:text-white transition-all">
                  {{ $t('addAProduct') }}</a>
                   <a :href="localePath('/all-matches')" class="py-3 rounded-sm text-sm px-8 inline-block text-firoza border-firoza border mb-0 hover:bg-firoza hover:text-white transition-all">
                 {{ $t('exploreMatches') }}</a>
               </div>
                
            </div>
            <!-- End -->
            <div v-for="(exitingofr, index) of existingOffers" :key="index" class="w-full flex flex-col border-b-2 border-gray-200 mb-5 pb-3">
              <div class="w-full flex flex-row mt-5 mb-5">
                  <div class="grid grid-cols-3 gap-x-5 gap-y-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5">
                      <ListingCard :listing="exitingofr.offerResponseInfo" type='mylistings' isMyListing= 'isMyListing' />                   
                     <div class="more-match ">
                        <div class="w-full h-full flex items-center justify-center px-4">
                           <img src="~/assets/images/exchange-arrow.svg" alt="image">                                  
                        </div>
                     </div>
                     
                     <div class="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
                        <div>
                           <VueSlickCarousel class="vcustom-slider" v-bind="settings" >
                              <div v-for="listing of exitingofr.response.hits" :key="listing.offerId" >
                                 <div class="group box-border overflow-hidden flex p-3 cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 shadow relative">
                                    <MatchListingCard :listing="listing.sourceAsMap" @listingDet="listingDet" />
                                 </div>
                              </div> 
                           </VueSlickCarousel> 
                        </div>
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Trigger @triggerIntersected="loadMore" />
         <div v-show="loading" class=" py-6 flex justify-center">
            <Spinner />
         </div>
      </div>
      <!--footer section goes here-->
      <Footer />

      <!-- quick view modal start -->
   
 <div v-if="showListDetails" class="relative z-50" role="dialog" aria-modal="true">
  <div class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex  text-center md:block md:px-2 lg:px-1" style="font-size: 0">      
      <span class="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">&#8203;</span>
     
      <div class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-[960px]">
        <div class="w-full relative  items-center bg-white p-8 rounded-md">
          <button @click="closePopup" class=" z-30 absolute cursor-pointer -top-4 -right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:-top-4 lg:-right-4 bg-white rounded-full w-[32px] h-[32px] text-center">
            <span class="sr-only">Close</span>            
            <svg class="h-6 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>            
            <ListingDetQuickView  :offerId = "offerId" :offered_offer_id = "offered_offer_id"/>         
        </div>
      </div>
    </div>
  </div>
</div> 

      <!-- quick view modal end -->

   </div>
</template>
<script lang="ts">
   import Vue from 'vue'
   import 'vue-toast-notification/dist/theme-sugar.css'
   import _ from 'lodash'
   import VueSlickCarousel from 'vue-slick-carousel'
   import 'vue-slick-carousel/dist/vue-slick-carousel.css'  
   import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
   export default Vue.extend({
   components: {
   // VueToast,
    VueSlickCarousel,
  },
  middleware: "authenticated",  
    // components: {VueToast,VueSlickCarousel},  
      data(){
       return{
         showListDetails:false,
         product:null,
         authUser : this.$store.state.authUser,
         breadcrumb: [{
             name: this.$t('myMatches')
           },
           ],
         page: 0,
         matchCountMax : '4',
         existingOffers : [],
         potentialOffers : null,
         showLoader:true,
         desireType: '',
         enableSearchMore: true,
         loading:true,
         offerId:'',
         offered_offer_id: '',
         settings: [{
             "arrows": true,
             "dots": false,
             "speed": 500,
             "infinite": true,
             "initialSlide": 2,
             "slidesToShow": 3, 
             "slidesToScroll": 3, 
             "swipeToSlide": true,
             "responsive": [
             {
               "breakpoint": 1024,
               "settings": {
                 "slidesToShow": 3,              
               }
             },
             {
               "breakpoint": 1023,
               "settings": {
                 "slidesToShow": 2,
                  "slidesToScroll": 2,               
               }
             },          
             {
               "breakpoint": 800,
               "settings": {
                 "slidesToShow": 2,                          
               }
             },
             {
               "breakpoint": 480,
               "settings": {
                 "slidesToShow": 1, 
                  "slidesToScroll": 1,              
               }
             }
           ]
           }],   
       }
      },
      mounted(){
      //  if (window.localStorage.getItem("listingCreated")) {
      //     Vue.$toast.open('Listing Added Succesfully');
      //     window.localStorage.removeItem("listingCreated");
      // }
      this.getOffersType('existing')
      this.logEvent()
      },
     methods:{
       async logEvent() {
         try {
           const analyticsData = {
             user_id: this.authUser.uid,
             channel_id: 'WEB'
           };
           await this.$fire.analytics.logEvent('gintaa_visit_match_box', analyticsData) 
           console.log('Gintaa analytics event log successfully');     
         } catch (e) {
           console.log('Gintaa analytics error:', e);
         }
       },

       listingDet(listingdata:any){
      //  console.log("data",listingdata)
        this.offerId = listingdata.oid
        this.offered_offer_id = listingdata.offered_offer_id
        this.showListDetails = true
       },

    async getOffersType(offerType:string){
    //  console.log("offerType",offerType);
      this.loading = true;
      if(offerType === 'existing'){
          try {
           let url = `/search/v1/search/match-result/user?matchCountMax=20&size=5&page=${this.page}`
           const data = await this.$axios.$get(url);
        //   console.log(data)
           if(data.payload){
           this.enableSearchMore = data.payload.length > 0
           if(this.page === 0 ){
            //this.loading = false;
           this.existingOffers = data.payload;
           
        //   console.log("this.existingOffers",this.existingOffers)
           }else if (data.payload.length > 0) {
             //this.existingOffers = []
             this.existingOffers.push(...data.payload)
           }

            //////////// Start push offer_id to maches item ///////////////
            // 'offered_offer_id'
            this.existingOffers.map((item: any, index: number)=>{
            //  console.log('======= item:', item.offerResponseInfo.offerId)
              const offered_offer_id = item.offerResponseInfo.offerId
              item.response.hits.map((hits_item: any, i: number)=>{
                this.existingOffers[index].response.hits[i].sourceAsMap['offered_offer_id'] = offered_offer_id
              })
            })
            //////////// End push offer_id to maches item ///////////////

           this.enableSearchMore = data.payload.length > 0
           this.loading = false
           this.showLoader = false
           }else{
           this.showLoader = false
           if (this.page === 0) {
             this.existingOffers = []
           }
           this.enableSearchMore = false
           this.loading = false;
           }
           //console.log("data.payload",data,data.payload)
         } catch (error) {
           this.showLoader = false
           if (this.page === 0) {
             this.existingOffers = []
           }
           this.enableSearchMore = false
           console.log(error)
            this.loading = false;
         }
   
      }else{
          this.showLoader = false
         // https://dev.api.gintaa.com
   
         this.onChangeSearchInput();
   
      }
     },
   
      onChangeSearchInput: _.debounce(function () {
         this.searchPotentialMatch()
       }, 800),
   
   closePopup(){
   this.showListDetails = false
   },
    async searchPotentialMatch(){
   
        // console.log("========================")
         this.potentialOffers = null;
   
   
         if(this.desireType.length > 3){
          //   console.log("Length",this.desireType.length)
   
           try {
           this.showLoader = true
           let url = `/search/v1/search/match-result?desire=${this.desireType}&matchCountMax=999`
           const data = await this.$axios.$get(url);
   
          // console.log("Data",data)
           if(data.payload){
           this.showLoader = false;
           this.potentialOffers = data.payload; 
           // this.existingOffers = data.payload;
           // console.log("this.existingOffers",this.existingOffers)
           }else{
          this.showLoader = false;
           }
           
          // console.log("data.payload",data,data.payload)
         } catch (error) {
           console.log(error);
            this.showLoader = false;
         }
   
         }
      
    },
     getUrl(images:any){
         console.log("images",images)
         return images[0].url;
     },
         loadMore () {
         if (!this.loading && this.enableSearchMore) {
           this.page++
           console.log('-------------------------', this.page)
           this.getOffersType('existing')
         }
       },
       }
   })
</script>
<style scoped>
   .nav-links{
   border-color: #ededed;
   }
   .nav-links.active {
   color: #48CEF3!important;
   border-color: #48CEF3!important;
   }	
   .matchboxgrid .group:last-child{
   border-right: 0px solid #000 !important;
   }
</style>