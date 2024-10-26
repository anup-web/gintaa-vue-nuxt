<template>
  <div class="product-details-page pt-[80px] lg:pt-12 view-all-listing">
    <!-- <fullPageLoader v-if="loading" /> -->

    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class=" max-w-[1920px] mx-auto px-4 md:px-8 2xl:px-16 pt-10">
      <Breadcrumb :breadcrumb="breadcrumb" />
    </div>
    <div class=" max-w-[1920px] mx-auto  md:px-8 2xl:px-16 pt-4 min-h-screen sm:pt-4 md:pt-4 lg:pt-6 xl:pt-6 2xl:pt-6">
          <div class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-6 3xl:mb-6 ">
              <h1 class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
                <span v-if="vueAllType==='recentlisting'" class="">{{$t('RecentlyAddedProducts')}}</span>
                <span v-if="vueAllType==='recomendedlisting'" class="">{{$t('handpickedListings')}}</span>
                <span v-if="vueAllType==='similarlisting'" class="">{{$t('similarListingsText')}}</span>
                <span v-if="vueAllType==='potentiallisting'" class="">{{$t('matches')}}</span>
                <span v-if="vueAllType==='hotlisting'" class="">{{$t('PopularProductsViewTitle')}}</span>
                <span v-if="vueAllType==='lastviewedlisting'" class="">{{$t('lastViewedProducts')}}</span>
              </h1>
          </div>

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

      <div v-if="vueAllType !=='potentiallisting'" class="recentlisting recntlisting-grid-home grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        <homeListingCard v-for="listing in allListing" :key="listing.offferId" :listing="listing" class="border-b border-gray-200"/>
      </div>

        <div v-if="vueAllType ==='potentiallisting' && myPotentiallisting" class="recentlisting px-4 border-b border-gray-200">
        <myPotentialListingCard  :key="listing.offerId" :listing="myPotentiallisting" />
      </div>

      <div v-if="vueAllType ==='potentiallisting'" class="recentlisting grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5">
        <div v-for="listing in allListing" :key="listing.oid"  class="group box-border overflow-hidden flex p-4  cursor-pointer pe-0  flex-col items-start  transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5   relative border-r border-b" >
          <ListingCard  :listing="listing" />
        </div>
      </div>
      <div v-show="loading" class=" py-6 flex justify-center">
        <Spinner />
      </div>
      <Trigger v-if="vueAllType !=='potentiallisting' && 'similarlisting'" @triggerIntersected="loadMore" />
   
      <!-- <Trigger v-if="vueAllType ==='hotlisitng'" @triggerIntersected="loadMore" /> -->
   
    </div>
    </div>

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
      page: 0,
      enableLoadMore: true,
      loading: true,
      apiUrls: this.$config.apiUrls,
      vueAllType: this.$route.params.viewAllType,
      allListing: [],
      breadcrumb: [],
      listing :{},
      myPotentiallisting:null
    }
  },
  mounted () {
    
    //console.log("this.$route.params.viewAllType",this.$route.query.listing)
    if(this.$route.query?.listing){
     this.listing = this.$route.query?.listing
    }
    

   // console.log("this.$route.params.viewAllType,",this.$route.params.viewAllType,this.$route.params,this.$route.query.id)
    // console.log("this.$route.params.viewAllType",this.$route.params.viewAllType)
    if(this.$route.params.viewAllType === 'similarlisting' || this.$route.params.viewAllType === 'potentiallisting'){
     this.getListing(this.$route.params.viewAllType)
    }else{
    if(this.$route.params.viewAllType === 'hotlisting'){
      this.getAllhotListing()
    }else{
      this.getAllListing()
    }
    
    }
    
  },
  methods: {

      async fetchData(offerId) {
      const data = await this.$axios.get(
        `${this.$config.API_BASE}/offers/v1/offers/oid/${offerId}`
      );
      //console.log(data);
      if (data && data.data.payload) {
        this.myPotentiallisting = data.data.payload;
      } else {
        
      }
    },
    async getAllListing () {
      this.loading = true
      const params = `?page=${this.page}&size=100`
      let requestPath = ''
      let breadcrumbName = ''
      switch (this.vueAllType) {
        case 'recomendedlisting':
          requestPath = this.apiUrls.recommendedListing
          breadcrumbName = 'Recomended Listing'
          break
        case 'recentlisting':
          requestPath = this.apiUrls.recentListing
          breadcrumbName = this.$t('recent_listing')
          break
        case 'hotlisting':
          requestPath = this.apiUrls.recentListing
          breadcrumbName = this.$t('PopularProductsView')
          break
        case 'lastviewedlisting':
          requestPath = this.apiUrls.lastVuedListing
          breadcrumbName = this.$t('lastViewedProducts')
          break
        default:
          requestPath = this.apiUrls.recentListing
          breadcrumbName = this.$t('recent_listing')
      }

      if(this.page === 0) {
        this.breadcrumb.push({ name: breadcrumbName })
      }     

      requestPath += params
      const allListingResponse = await this.$axios.get(requestPath)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error.response.data
        })
      this.loading = false
      if (allListingResponse && allListingResponse.success) {
        if (this.page === 0) {
          this.allListing = allListingResponse.payload
        } else if (allListingResponse.payload.length > 0) {
          this.allListing.push(...allListingResponse.payload);
        }
        
        this.enableLoadMore = allListingResponse.payload.length > 0

      } else {

        this.enableLoadMore = false
      }

     // console.log('allListing:', this.allListing)
    },


    async getAllhotListing () {
     // console.log("all hot lisitng called")
      this.loading = true
      const params = `/offers/v1/offers/hot?page=${this.page}&size=20`
      let requestPath = ''
      let breadcrumbName = ''
      switch (this.vueAllType) {
        case 'recomendedlisting':
          requestPath = this.apiUrls.recommendedListing
          breadcrumbName = 'Recomended Listing'
          break
        case 'recentlisting':
          requestPath = this.apiUrls.recentListing
          breadcrumbName = this.$t('recent_listing')
          break
          case 'hotlisting':
          requestPath  = params
          breadcrumbName = this.$t('PopularProductsView')
          break
        default:
          requestPath = this.apiUrls.recentListing
          breadcrumbName = this.$t('recent_listing')
      }

      if(this.page === 0) {
        this.breadcrumb.push({ name: breadcrumbName })
      }     

      //requestPath += params
      const allListingResponse = await this.$axios.get(requestPath)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error.response.data
        })
      this.loading = false
     // console.log('allListingResponse:', allListingResponse)
      if (allListingResponse && allListingResponse.success) {
        // this.allListing = [...allListingResponse.payload]
        this.allListing.push(...allListingResponse.payload);

        this.enableLoadMore = allListingResponse.payload.length > 0

      } else {

        this.enableLoadMore = false
      }

     // console.log('allListing:', this.allListing)
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
      let breadcrumbName = this.$t("potentialMatchesBread")
      this.breadcrumb.push({ name: breadcrumbName })
      this.fetchData(this.$route.query.id)
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


    },
    loadMore () {
      console.log('This.page', this.page ,this.$route.params.viewAllType)
      if(this.$route.params.viewAllType !== 'hotlisting'){
        if (!this.loading && this.enableLoadMore) {
          this.page++
          this.getAllListing()
        }
      } else{
        // for hotlisting
        if (!this.loading && this.enableLoadMore) {
          this.page++
          this.getAllhotListing()
        }
      
      }
     
    },

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

/* @media only screen and (min-device-width: 0px) and (max-device-width: 767px){ 
   .hlisting-card { border-bottom: 0px solid transparent;}
   .hlisting-card .home-listing-card { border-bottom: 0px solid transparent;}
}  */
</style>