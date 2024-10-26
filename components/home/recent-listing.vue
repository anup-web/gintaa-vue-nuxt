<template>
  <div v-if="recentListing.length">
    <div class="mx-auto pb-2 home-recent-listing relative sm:pb-2 md:pb-10 lg:pb-10 xl:pb-10 2xl:pb-10">
      <div class="text-center mb-3 md:mb-5 lg:mb-8 2xl:mb-8  ">
        <h3 class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-0 sm:mb-2 md:mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
          <a :href="localePath('/view-all/recentlisting')" class="text-gray-600">
            <span class="">{{$t('recentlyListedProducts') }}</span>
          </a>
          
        </h3>
        <span class="hidden lg:block text-gray-400 text-sm font-normal">{{$t('recentlyListedProductsPara')}}
        </span>
      </div>
      <a :href="localePath('/view-all/recentlisting')" class="absolute text-sm right-0 top-[45px] z-40  hidden lg:block bg-firoza text-white px-3 py-2 rounded-sm">
       {{ $t('viewAllProducts') }}
      </a>
      <div class="recentlisting recntlisting-grid-home w-full top-category-sec recent-scroll">
        <VueSlickCarousel class="vcustom-slider" v-bind="settings">
          <homeListingCard v-for="listing in recentListing" :key="listing.offferId" :listing="listing" />
        </VueSlickCarousel>
      </div>
    </div>

    <div class="flex justify-center">
      <a :href="localePath('/view-all/recentlisting')" class="min-w-[95px] flex justify-center items-center border border-firoza bg-transparent py-1 px-2 rounded  text-firoza font-medium text-sm hover:bg-firoza transition hover:text-white h-9  md:hidden mt-3 mb-0 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 viewb-4">
       {{ $t('viewAllProducts') }}
      </a>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import homeListingCard from '../listings/homeListingCard.vue'
import VueSlickCarousel from 'vue-slick-carousel'
export default Vue.extend({
  name: 'RecentListing',
  components: { 
    homeListingCard, 
    VueSlickCarousel
   },
  data () {
    return {
      loading: false,
      apiUrls: this.$config.apiUrls,
      recentListing: [],
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
                                         
               }
             },
             {
               "breakpoint": 480,
               "settings": {
                 "slidesToShow": 2, 
                 "slidesToScroll": 2,
                             
               }
             }
           ]
           }]
    }
  },
  mounted () {
    this.getRecentListing()
  },
  methods: {
    async getRecentListing () {
      this.loading = true
      const params = '?page=0&size=30'
      const requestPath = this.apiUrls.recentListing + params
      const recentListingResponse = await this.$axios.get(requestPath)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error.response.data
        })
      this.loading = false
     // console.log('recentListingResponse:', recentListingResponse)
      if (recentListingResponse && recentListingResponse.success) {
        this.recentListing = recentListingResponse.payload
      }

    //  console.log('recentListing:', this.recentListing)
    }

  }
})
</script>
<style scoped>
 .top-category-sec .vcustom-slider .slick-next{

  top:30% !important;

}
</style>