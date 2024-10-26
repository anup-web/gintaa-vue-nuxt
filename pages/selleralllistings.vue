<template>
  <div class="product-details-page pt-[80px] lg:pt-12 bg-[#f5f2f2] topseller-listing ">
      <!--//////////header///////////-->
      <Header/>
      <!--////////Breadcrumb//////////-->
     <div class="max-w-[1920px] mx-auto px-4 md:px-8 2xl:px-16 pt-10">
           <breadcrumb :breadcrumb="breadcrumb"/>
      </div>
    <div class=" max-w-[1920px] mx-auto px-4 md:px-8 2xl:px-16 pt-0 min-h-screen sm:pt-0 md:pt-4 lg:pt-6 xl:pt-6 2xl:pt-6"> 
      

                  <div v-if="sectionTitle" class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 ">
                      <h3 class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14" >
                          <span class=""> {{sectionTitle}} </span>                 
                          </h3>
                          
                  </div>
      <div class="mx-auto pb-14">
        
      <div v-show="totallistingItems.length > 0" class="recentlisting recntlisting-grid-home gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        <div v-for="(selllerDet, index) in totallistingItems" :key="index"
          class="px-4 sm:px-0 md:px-0 py-0">

          <!-- <TopSellerCard :selllerDet="selllerDet" /> -->
          <MarketSellerCard :selllerDet="selllerDet" />

        </div>

      </div>

     



    </div>    

    <div v-show="showLoader"  class=" py-6 flex justify-center w-full">
              <Spinner />
            </div>

            <Trigger @triggerIntersected="loadMore" />
    </div>
    <!--footer section goes here-->
    <Footer/>
  
  
  
    
  
  </div> 
</template>
  
<script >
export default {
  name: "selleralllistings",
  // props: ["userdetails","offerId"],

  mounted() {
    if (this.$route.query?.sectionTitle) {
      this.sectionTitle = this.$route.query?.sectionTitle
      this.getSellerAllListings();
    }

  },

  data() {
    return {
      breadcrumb: [
        {
          name: this.$t('topseller')
        },
      ],
      page: 0,
      sectionTitle: '',
      enableSearchMore: true,
      showLoader: true,
      showAllListings: false,
      listingItems: [{}],
      totallistingItems: [],
      isHindi: false,
      isEnglish: false
    };
  },

  methods: {


    async getSellerAllListings() {
      this.showLoader = true;
      try {
        let url = `users/v1/user/market/all-sellers/${this.$route.query?.market_name}?&size=12&page=${this.page}`;
        const data = await this.$axios.$get(url);
        if (this.page === 0) {
          this.totallistingItems = data.payload
        } else if (data.payload.length > 0) {
          this.totallistingItems.push(...data.payload)
        }

        this.enableSearchMore = data.payload.length > 0

        this.showLoader = false




      } catch (error) {
        this.showLoader = false;
        this.totallistingItems = []
        console.log(error);
      }
    },

    loadMore() {

      if (!this.showLoader && this.enableSearchMore) {
        this.page++
        this.getSellerAllListings()
      }
    },

  },
};
</script>
<style scoped>
.pe-24 {
  -webkit-padding-end: 6rem;
  padding-inline-end: 6rem;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.mylisting-grid .group:last-child {
  border-right: 0 !important;
}

/* .mylisting-grid .group:nth-last-child(-n + 6) { 
     border-bottom: 0 !important;
   } */
/* .mobilefilter-show .hidden {
    display: block !important;
  } */
@media (min-width:320px) {
  .group:nth-child(2n+0) {
    border-right: 0 !important;
  }

  .mylisting-grid .group:nth-child(3),
  .mylisting-grid .group:nth-child(4),
  .mylisting-grid .group:nth-child(5),
  .mylisting-grid .group:nth-child(6) {
    /* border-top: 1px solid rgb(229 231 235) !important; */
  }
}

@media (min-width:640px) {
  .group:nth-child(3n+0) {
    border-right: 0 !important;
  }

  .group:nth-child(2n+0) {
    border-right: 1px solid rgb(229 231 235) !important;
  }
}

@media (min-width:1280px) {

  .group:nth-child(4n+0) {
    border-right: 0px solid rgb(229 231 235) !important;
  }

  .group:nth-child(3n+0) {
    border-right: 1px solid rgb(229 231 235) !important;
  }

}

@media (min-width:1536px) {
  .group:nth-child(5n+0) {
    border-right: 0 !important;
  }

  /* .group:nth-child(4n+0){
      border-right: 1px solid rgb(229 231 235) !important;
    } */
}

@media (max-width:659px) {
  /* .mylisting-grid .group:nth-child(3), .mylisting-grid .group:nth-child(4), .mylisting-grid .group:nth-child(5){
      border-top: 1px solid rgb(229 231 235) !important;
    } */
}
</style>
  