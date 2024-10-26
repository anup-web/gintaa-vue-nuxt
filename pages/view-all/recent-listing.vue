<template>
  <div class="product-details-page pt-[80px] lg:pt-12 ">
    <!-- <fullPageLoader v-if="loading" /> -->

    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class=" max-w-[1920px] mx-auto px-4 md:px-8 2xl:px-16 pt-10">
      <Breadcrumb :breadcrumb="breadcrumb" />
    </div>


<main class="relative flex-grow">
      <div class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16">
           <div class="flex pt-4 lg:pt-8 pb-16 lg:pb-20">
              <div  class="flex-shrink-0 pe-24 hidden lg:block w-96" >
                 <div class="flex items-center justify-between mb-2.5">
          <h2 class="font-semibold text-heading text-xl md:text-2xl">
            Filters
          </h2><button class="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading" aria-label="Clear All" >
            Clear All
          </button>
        </div>
              </div>
               <div class="w-full lg:-ms-9 min-h-[500px] pl-6">
                 <div v-if="loading" class="py-6 flex justify-center items-center  px-6">
              <SpinnerGreen />
            </div>
                   <div v-if="allListing.length" class="mx-auto pb-14">
     
      <!-- <div class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 ">
                <h3 class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
                    <span class="">Recently listed products</span>
                </h3>
                <span class="hidden lg:block text-gray-400 text-sm font-normal">Explore and find matches to barter your needs from recently listed items on gintaa.
                </span>
            </div> -->

      <div v-if="vueAllType !=='potentiallisting'" class="recentlisting grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1">
        <HomeListingCardListing v-for="listing in allListing" :key="listing.offferId" :listing="listing" />
      </div>

      <div v-if="vueAllType ==='potentiallisting'" class="recentlisting grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5">
        <ListingCard v-for="listing in allListing" :key="listing.oid" :listing="listing" />
      </div>
    </div>
               </div>
          </div>
      </div>

</main>


    
   

    <!--footer section goes here-->
    <Footer />
  </div>
</template>
<script>
import Vue from 'vue'
import homeListingCard from '../../components/listings/homeListingCard.vue'

export default Vue.extend({
  name: 'ViewAll',
  components: { homeListingCard },
  data () {
    return {
      loading: true,
      apiUrls: this.$config.apiUrls,
      vueAllType: this.$route.params.viewAllType,
      allListing: [],
      breadcrumb: []
    }
  },
  mounted () {
    

   // console.log("this.$route.params.viewAllType,",this.$route.params.viewAllType,this.$route.params,this.$route.query.id)

    if(this.$route.params.viewAllType === 'similarlisting' || this.$route.params.viewAllType === 'potentiallisting'){
     this.getListing(this.$route.params.viewAllType)
    }else{
    this.getAllListing()
    }
    
  },
  methods: {
    async getAllListing () {
      this.loading = true
      const params = '?page=0&size=100'
      let requestPath = ''
      let breadcrumbName = ''
            requestPath = this.apiUrls.recentListing
          breadcrumbName = 'Listings'

      this.breadcrumb.push({ name: breadcrumbName })

      requestPath += params
      const allListingResponse = await this.$axios.get(requestPath)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error.response.data
        })
      this.loading = false
      console.log('allListingResponse:', allListingResponse)
      if (allListingResponse && allListingResponse.success) {
        this.allListing = allListingResponse.payload
      }

      console.log('allListing:', this.allListing)
    },
    async getListing(){
      
      this.loading = true

      if(this.$route.params.viewAllType === 'similarlisting'){
       let breadcrumbName = "Similar Listings"
      this.breadcrumb.push({ name: breadcrumbName })

       try {
        let url = `/offers/v1/offers/similar/${this.$route.query.id}?show-completed-offers=false&show-my-offers=false`;
        const data = await this.$axios.$get(url);
        this.allListing = data.payload;
        this.loading = false

      } catch (error) {
        console.log(error);
        this.loading = false
      }
      }else{
      if(this.$route.params.viewAllType === 'potentiallisting'){
      let breadcrumbName = "Potential listings"
      this.breadcrumb.push({ name: breadcrumbName })

       try {
        let url = `/search/v1/search/match-result/oid?offerId=${this.$route.query.id}&matchCountMax=9999`;
        const data = await this.$axios.$get(url);

        const  potentialObj = data.payload?.hits;
       if(potentialObj.length){
        this.listingItems = potentialObj.map(a => a.sourceAsMap);
        if(this.listingItems){
          this.allListing = this.listingItems
        }
       }
        
        this.loading = false

      } catch (error) {
        console.log(error);
        this.loading = false
      }
        }
      }


    }

  }
})
</script>
<style scoped>
/* @media (min-width: 1024px) {
  .recentlisting .recentcardtop:nth-child(5n+0) .group{
    border-right: 0 !important;
    
}
} */
  .recentlisting .recentcardtop:nth-child(6n+0) .group{
    border-right: 0 !important;
    
}
/* @media (min-width: 1536px) {
  .recentlisting .recentcardtop:nth-child(6n+0) .group{
    border-right: 0 !important;
    
}
.recentlisting .recentcardtop:nth-child(5n+0) .group{
    border-right: 1px solid #000 !important;
}
} */

.recentlisting .recentcardtop:last-child .group{
    border-right: 0 !important;
    
}
</style>