<template>
   <div class="w-full relative">
      <div v-if="section_title || section_description" class="text-center mb-3 md:mb-5 lg:mb-8 2xl:mb-8  ">
         <h3
            v-if="section_title"
            class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-0 sm:mb-2 md:mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
            <a :href="vueAllPath" class="text-gray-600"  @click="logEventOnBtnClick(section_title)">
               <span class="" v-html="section_title"></span>
            </a>
            
         </h3>
         <span 
            v-if="section_description"
            class="hidden lg:block text-gray-400 text-sm font-normal giftcard-sub">{{section_description}}</span>
      </div>
      
      <div v-if="loading" class="container max-w-8xl mx-auto px-4 sm:px-4 md:px-8 2xl:px-16"> 
         <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8 mt-4 w-full loader-cusres">
            
               <div v-for="item in 5" :key="item" class="relative p-4 w-full bg-white overflow-hidden shadow hover:shadow-md rounded-lg loader-mobile">
                  <div class=" animate-pulses flex flex-col">
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

      <a v-if="!loading && listings.length && listings.length > 5" :href="vueAllPath" @click="logEventOnBtnClick(section_title)" class="absolute text-sm right-0 top-[45px] z-40  hidden lg:block bg-firoza text-white px-3 py-2 rounded-sm viewgiftcardall viewall-coin"> 
      {{ $t('viewAllProducts') }}</a>
      <div v-if="!loading && listings.length" class="recentlisting offer-near-me-scroll recntlisting-grid-home pl-0 md:pl-0   border-gray-200 md:border-b-0 top-category-sec next-prev-arrow-top">
         <VueSlickCarousel class="vcustom-slider" v-bind="settings">
            <div v-for="listing of listings" :key="listing.offerId + listing.draftOfferId + listing.oid" 
               @click="logEventOnBtnClick(section_title)"
               class="mobile-last group box-border overflow-hidden flex px-2 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-t  md:border-t-0 border-r border-b md:border-b-0  border-gray-200 rounded-0 md:rounded-0   relative">
               <ListingItem v-if="filter_type!='HOT-DEALS'" :listing="listing" />
               <ListingCard v-if="filter_type=='HOT-DEALS'" :listing="listing" />
            </div>
         </VueSlickCarousel>
         <!-- <vueper-slides
            class="no-shadow"
            :visible-slides="5"
            slide-multiple
            :dragging-distance="200"
            :slide-ratio="1 / 4"
            :bullets="false"
            :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
            <vueper-slide v-for="listing of listings" :key="listing.offerId + listing.draftOfferId + listing.oid">
               
               <template #content>
                  <div 
               class="mobile-last group box-border overflow-hidden flex px-2 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-t lg:border-t-0 border-r  border-gray-200    relative">
                  <ListingItem v-if="filter_type!='HOT-DEALS'" :listing="listing" />
                  <ListingCard v-if="filter_type=='HOT-DEALS'" :listing="listing" />
               </div>
               </template>
            
            </vueper-slide>
         </vueper-slides> -->
         
      </div>
      <div class="flex justify-center w-full">
       <a v-if="!loading && listings.length && listings.length > 5" :href="vueAllPath" class=" min-w-[95px] flex justify-center items-center border border-firoza bg-transparent py-1 px-2 rounded  text-firoza font-medium text-sm hover:bg-firoza transition hover:text-white h-9  md:hidden mt-3 mb-0 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4"> {{ $t('viewAllProducts') }}</a></div>

   </div>
</template>

<script>
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import { mapState, mapGetters } from 'vuex'
// import { VueperSlides, VueperSlide } from 'vueperslides'
// import 'vueperslides/dist/vueperslides.css'

export default Vue.extend({
  name: 'RecentTop',
  components: { VueSlickCarousel },
//   components: { VueperSlides, VueperSlide },
  props: ["section_title", "section_description", "search_value", "item_show_number", "filter_type", "sort_type"],
  data () {
    return {
      listings: [],
      page: 0,
      defaultSize: 5,
      defaultPremiumListSize: 2,
      loading: true,
      sortParamsdata: '&sort=publishedDate,desc',
      vueAllPath: '',
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
                  "swipe": true, 
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
      authUser: state => state.authUser
    }),
  },
  mounted(){
   // setTimeout(()=>{
      switch (this.filter_type) {
         case "SEARCH_TEXT":
            this.getListingsForSearchText(this.search_value)
            break;
         case 'PRICE':
            //this.getListingsForSearchPrice(this.search_value)
            this.getallLisitngForPrice(this.search_value)
            break;
         case 'CATEGORY':
            this.getallLisitngForCategory(this.search_value)
          //  this.getListingsForSearchCategory(this.search_value)
            break;
         case 'FACETS':
            this.getListingsForFacets(this.search_value)
            break;
         case 'HOT-DEALS':
            this.getListingsForHotDeals()
            break;
         default:
            this.getListingsForSearchText(this.search_value)
      }      
   // }, 1000);
  },
  methods: {

  async getallLisitngForCategory(search_value){
   let [pListing, listing] = await Promise.all([this.getCategoryWisePreiumList(search_value), this.getListingsForSearchCategory(search_value)]);
    if (pListing.length) {
        this.listings.push(...pListing)
      }
      if (listing.length) {
        this.listings.push(...listing)
      }
   },

   async getallLisitngForPrice(search_value){
      let [pListing, listing] = await Promise.all([this.getpriceWisePreiumList(search_value), this.getListingsForSearchPrice(search_value)]);
    if (pListing.length) {
        this.listings.push(...pListing)
      }
      if (listing.length) {
        this.listings.push(...listing)
      }
   },

  async getCategoryWisePreiumList(search_value){
      this.loading = true
     // this.listings = []

     let premiumList = []
      try {
         let size =  this.defaultPremiumListSize
         const url = `/search/v1/search/random?cid=${search_value}&page=${this.page}&size=${size}${this.sortParamsdata}&aggr=false&ff=feat_true`
         const data = await this.$axios.$get(url)
         premiumList = data.payload.searchResult
         this.loading = false
         return premiumList
      } catch (error) {
         premiumList = []
        // this.listings = []
         this.loading = false
         return premiumList 
      }
   },

   processVueAllPath(){
      switch (this.filter_type) {
         case "SEARCH_TEXT":
            this.vueAllPath = this.localePath(`/search?searchText=${this.search_value}`)
            break;

         case 'PRICE':
            const priceArr = this.search_value.split('-')
            const priceFilterValue = `pr_${priceArr[0]}::${priceArr[1]}`
            this.vueAllPath = this.localePath(`/search?ff=${priceFilterValue}`)
            break;

         case "CATEGORY":
            this.vueAllPath = this.localePath(`/search?fcid=${this.search_value}`)
            break;

         case "FACETS":
            this.vueAllPath = this.localePath(`/search?ff=${this.search_value}`)
            break;

         case "HOT-DEALS":
            this.vueAllPath = this.localePath(`/view-all/hotlisting`)
            break;

         default:
            this.vueAllPath = this.localePath(`/search?searchText=${this.search_value}`)
      }        
   },
   async getListingsForSearchText(search_value) {
      this.loading = true
      this.listings = []
      try {
         
         if(this.sort_type){
            switch (this.sort_type) {
               case "RELEVANCE":
                  this.sortParamsdata = ''
               break;
               default:
            }
            this.sortParamsdata 
         }

         let size = this.item_show_number ? this.item_show_number : this.defaultSize
         const url = `/search/v1/search?q=${search_value}&page=${this.page}&size=${size}${this.sortParamsdata}&aggr=false`
         const data = await this.$axios.$get(url)
         this.listings = data.payload.searchResult

         this.loading = false
         
      } catch (error) {
         this.listings = []
         this.loading = false
      }

      this.processVueAllPath();
   },

   async getListingsForFacets(search_value) {
      this.loading = true
      this.listings = []
      try {

         let size = this.item_show_number ? this.item_show_number : this.defaultSize
         const url = `/search/v1/search?ff=${search_value}&page=${this.page}&size=${size}${this.sortParamsdata}&aggr=false`
         const data = await this.$axios.$get(url)
         this.listings = data.payload.searchResult

         this.loading = false
         
      } catch (error) {
         this.listings = []
         this.loading = false
      }

      this.processVueAllPath();
   },

   async getListingsForSearchPrice(search_value) {
      this.loading = true
     // this.listings = []
     let nonPremiumLisit = []
      try {
         const priceArr = search_value.split('-')
         const priceFilterValue = `pr_${priceArr[0]}::${priceArr[1]}`

         let size = this.item_show_number ? this.item_show_number : this.defaultSize
         const url = `/search/v1/search?ff=feat_false~${priceFilterValue}&page=${this.page}&size=${size}${this.sortParamsdata}&aggr=false`
         
         const data = await this.$axios.$get(url)
        // this.listings = data.payload.searchResult

        nonPremiumLisit = data.payload.searchResult

         this.loading = false
         
      } catch (error) {
       //  this.listings = []
         this.loading = false
         nonPremiumLisit = []
      }

      this.processVueAllPath();

      return nonPremiumLisit
   },

   async getpriceWisePreiumList(search_value) {
      this.loading = true
     // this.listings = []
     let premiumLisit = []
      try {
         const priceArr = search_value.split('-')
         const priceFilterValue = `pr_${priceArr[0]}::${priceArr[1]}`

         let size = this.item_show_number ? this.item_show_number : this.defaultSize
         const url = `/search/v1/search/random?ff=feat_true~${priceFilterValue}&page=${this.page}&size=${size}${this.sortParamsdata}&aggr=false`
         
         const data = await this.$axios.$get(url)
        // this.listings = data.payload.searchResult

        premiumLisit = data.payload.searchResult

         this.loading = false
         
      } catch (error) {
       //  this.listings = []
         this.loading = false
         premiumLisit = []
      }

      return premiumLisit
   },

   async getListingsForSearchCategory(search_value) {
      this.loading = true
     // this.listings = []
     let nonFeatureList = []
      try {
         let size = this.item_show_number ? this.item_show_number : this.defaultSize
         const url = `/search/v1/search?cid=${search_value}&page=${this.page}&size=${size}${this.sortParamsdata}&aggr=false&ff=feat_false`
         const data = await this.$axios.$get(url)
         //this.listings = data.payload.searchResult
         nonFeatureList =  data.payload.searchResult
         this.loading = false
        // return nonFeatureList
         
      } catch (error) {
        // this.listings = []
        nonFeatureList =  []
         this.loading = false
      }
      this.processVueAllPath();
      return nonFeatureList
   },

   async getListingsForHotDeals() {
      this.loading = true
      this.listings = []
      try {
         let size = this.item_show_number ? this.item_show_number : this.defaultSize
         const url = `/offers/v1/offers/hot?page=${this.page}&size=${size}`
         const data = await this.$axios.$get(url)
         this.listings = data.payload
         this.loading = false
         
      } catch (error) {
         this.listings = []
         this.loading = false
      }

      this.processVueAllPath();
   },

   logEventOnBtnClick(section_name) {
      const analyticsdata = {
         channel_id: 'WEB',
         user_id: this.authUser ? this.authUser?.uid : null,
         section_name: section_name
      };
      this.logEvent(analyticsdata)
    },

   logEvent(analyticsdata) {
      try {        
         this.$fire.analytics.logEvent('gintaa_home_section_clicked', analyticsdata)
         console.log('Gintaa gintaa_banner_click event log successfully', analyticsdata);
      } catch (e) {
         console.log('Gintaa analytics error:', e);
      }
   },


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