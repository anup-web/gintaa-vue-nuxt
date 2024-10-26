<template>
  <div class="product-details-page pt-[80px] lg:pt-12 ">
    <!-- <fullPageLoader v-if="loading" /> -->

    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class=" max-w-[1920px] mx-auto px-4 md:px-8 2xl:px-16 pt-10">
      <Breadcrumb :breadcrumb="breadcrumb" />
    </div>
    <div class=" max-w-[1920px] mx-auto  md:px-8 2xl:px-16 pt-10 min-h-screen">
          <div  class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-6 3xl:mb-6 ">
                <h1 class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
                <span class="">All Listings of {{listingOf}}</span>
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


      <div  class="recentlisting grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6">
<div v-for="listing in allListing" :key="listing.oid" class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 nth-child-3n:border-right-0   relative">
        <ListingCard  :listing="listing" />
</div>
        
      </div>
    </div>
    </div>

    <!--footer section goes here-->
    <Footer />
  </div>
</template>
<script>
import Vue from 'vue'


export default Vue.extend({
  name: 'allListing',
  data () {
    return {
      loading: true,
      apiUrls: this.$config.apiUrls,
      allListing: [],
      breadcrumb: [],
      listingOf:''
    }
  },
  mounted () {
    

    console.log("this.$route.params.viewAllType,",this.$route.query._uid ,this.$route.query._uname)
    this.listingOf =this.$route.query._uname

    if(this.$route.query._uid){
      this.getAllListing (this.$route.query._uid)
    }

    
  },
  methods: {

    async getAllListing(_uid){
      let breadcrumbName = "User Listings"
      this.breadcrumb.push({ name: breadcrumbName })
      
      this.loading = true

      try {
        let url = `/offers/v1/offers/all/${_uid}?show-completed-offers=false&show-my-offers=false`;
        const data = await this.$axios.$get(url);
        this.allListing = data.payload;
        this.loading = false

      } catch (error) {
        console.log(error);
        this.loading = false
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