<template>

<div class="w-full px-3 sm:px-3 md:px-7 xl:px-16 flex-col">
          <div class="flex items-center justify-between mb-7">
          <h1 class="text-2xl lg:text-[27px] 3xl:text-3xl font-semibold">{{ $t('restaurantsNearYou') }} </h1>
        </div>
        <div class="w-full">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-6 xl:grid-cols-4 xl:gap-8 2xl:grid-cols-5 2xl:gap-6">
            <div v-for="(listing, index) of listings" :key="index+listing.rid" class="aaaa">
                <GintaaFoodListingcardResturantcard 
                  v-if="listing.type === undefined"
                  :listing="listing"/>
                
                  <!-- <div v-if="listing.type">{{ listing.addName }}</div> -->

                <div 
                  v-if="listing.type !== undefined && listing.adName === 'discount-bottom'"
                  class="">
                  <a href="javascript:void(0)">
                    <img src="~/assets/images/food/off20card.jpg" class="max-w-full rounded-lg"/>
                  </a>
                </div>

                <!-- Onboarding Flow -->
                <div 
                  v-if="listing.type !== undefined && listing.adName === 'register-your-restaurant'"
                  class="">
                  <a 
                    href="javascript:;"
                    @click="redirectToOnboardingFlow()">
                    <img src="~/assets/images/food/restaurant-card.jpg" class="max-w-full rounded-lg"/>
                  </a>
                </div>

                <!-- redirect to lowest-menu-price -->
                <div 
                  v-if="listing.type !== undefined && listing.adName === 'lowest-menu-price'"
                  class="">
                  <a :href="localePath('/legal/gintaa-food/lowest-menu-price')" target="_blank">
                    <img src="~/assets/images/food/guarantee-card.jpg" class="max-w-full rounded-lg"/>
                  </a>
                </div>

            </div>
          </div>
        </div>

        
        <div v-show="loading" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
              <!-- <seamerspinner /> -->
              <div class="w-full rounded bg-white shadow-md ">
                 <div class="flex flex-col px-4 py-4">
                      <div class="h-32 w-full bg-slate-200 rounded shimmerBG"></div>
                       <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-8 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-12 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-6 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-16 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-14 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                 </div>
            </div>
            <div class="w-full rounded bg-white shadow-md ">
                 <div class="flex flex-col px-4 py-4">
                      <div class="h-32 w-full bg-slate-200 rounded shimmerBG"></div>
                       <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-8 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-12 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-6 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-16 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-14 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                 </div>
            </div>
            <div class="w-full rounded bg-white shadow-md ">
                 <div class="flex flex-col px-4 py-4">
                      <div class="h-32 w-full bg-slate-200 rounded shimmerBG"></div>
                       <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-8 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-12 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-6 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-16 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-14 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                 </div>
            </div>
            <div class="w-full rounded bg-white shadow-md ">
                 <div class="flex flex-col px-4 py-4">
                      <div class="h-32 w-full bg-slate-200 rounded shimmerBG"></div>
                       <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-8 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-12 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-6 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-16 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-14 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                 </div>
            </div>
            <div class="w-full rounded bg-white shadow-md ">
                 <div class="flex flex-col px-4 py-4">
                      <div class="h-32 w-full bg-slate-200 rounded shimmerBG"></div>
                       <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-8 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-12 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-6 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-16 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-14 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                      <div class="flex items-center justify-between mt-4">
                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG "></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG "></div>
                      </div>
                 </div>
            </div>
            </div>


            <Trigger @triggerIntersected="loadMore" />

              <!-- No Restaurants start -->
          <div v-if="listings && listings.length == 0 && !loading" class="w-full px-4 py-8">
               <div class="flex items-center justify-center mb-4">
                    <img src="~assets/images/food/no-restaurant.svg" alt="image" class=" max-w-full" />                              
                </div>
              
                <div class="flex items-center justify-center text-base text-gray-500 font-medium text-center py-3">Can't find a door to knock</div>
                <div class="flex items-center justify-center text-base text-gray-500 text-center">You don't have an address to deliver</div>                
           </div>
          <!-- No Restaurants end -->
          <GintaaFoodAtomsLogoutConfirmation v-if="showLogoutConfirmationPopup" @cancelLogout="cancelLogout" />
       
      </div>
    <!-- <GintaaFoodListingcardResturantcard/> -->

 </template>
 
 <script>
 import Vue from 'vue'
 import VueSlickCarousel from 'vue-slick-carousel'
 import { mapState, mapGetters } from 'vuex';
 export default Vue.extend({
   name: 'Nearbyresturant',
   props:['selectedAddress'],
   components: { VueSlickCarousel },
   watch: { 
       selectedAddress(newSelectedAddress, oldSelectedAddress){ // watch it
        //  console.log('Prop changed: ', newSelectedAddress, ' | was: ', oldSelectedAddress)
          this.listings =  []
          this.page = 0
          this.getResturantNearMe()
          
       }
    },
    data () {
     return {
       showAddaddressPopup:false,
       listings: [],
       page: 0,
       defaultSize: 10,
       loading: true,
       sortParamsdata: '&sort=publishedDate,desc',
       vueAllPath: '',
       editOrAddAddressDetails: {},
       showLogoutConfirmationPopup: false,
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
          this.getResturantNearMe()
       }
     });
   },
   mounted(){
    this.getResturantNearMe()
   },
   methods: {
    async getResturantNearMe() {

       let size       = this.defaultSize
       const lat = this.selectedAddress ? this.selectedAddress.lat : null
       const lng = this.selectedAddress ? this.selectedAddress.lng : null
       let qreParam = ''
       if(lat && lng){
          qreParam = `lat=${lat}&lng=${lng}&`
       }
 
       this.loading   = true
      // this.listings  = []

       try {
          const url = `/search/v1/search/restaurant/nearby?${qreParam}&offline=true&bounds=false&page=${this.page}&size=${size}`;
          const data = await this.$axios.$get(url);
        //  console.log("Data",data)  
  
        if (this.page === 0) {
          this.listings = data.payload.result
         // console.log("this.listings",this.listings)
        } else if (data.payload.result.length > 0) {
          this.listings.push(...data.payload.result)
        }



        if(this.page === 0){          
          this.listings.push({type: 'ad', adName: 'discount-bottom'})
        }

        if(this.page === 1){          
          this.listings.push({type: 'ad', adName: 'register-your-restaurant'})
        }

        if(this.page === 2){          
          this.listings.push({type: 'ad', adName: 'lowest-menu-price'})
        }
  

        console.log('this.listings:', this.listings)

        this.enableSearchMore = data.payload.result.length > 0
  
        this.loading = false
  
      } catch (error) {
        if (this.page === 0) {
          this.listings = []
        }
        this.loading = false
        this.enableSearchMore = false
  
      }

    },

    loadMore() {
     // console.log("loadmore called")
      if (!this.loading && this.enableSearchMore) {
        this.page++
        // this.getListings()
        this.getResturantNearMe()
      }
    },

    redirectToOnboardingFlow(){
      if(this.authUser){
          this.showLogoutConfirmationPopup = true
      }else{
        this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant`)})
      }
    },
    cancelLogout(){
      this.showLogoutConfirmationPopup = false
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