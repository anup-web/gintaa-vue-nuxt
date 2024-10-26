<template>
  <div class="product-details-page pt-12">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class="max-w-4xl mx-auto flex items-center space-x-4">        
    <breadcrumb />
    </div>


     <div class="container max-w-4xl mx-auto flex items-center space-x-4 mt-10 mb-14">
      <div class="flex flex-col w-full mb-10">
         <div class="w-full flex flex-col mb-8">                             
              <div class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 ">
             <h3 class="section-title text-gray-600  text-base md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-4 after:-right-14" >
                 <span class=""> {{$t('exchangeHome')}}</span>                 
                 </h3>
                 <span class="block text-gray-400 text-sm font-normal">{{$t('exchangeunathopara')}}</span>
         </div>
         </div>
         <div class="flex flex-col w-full mb-8">
                <div class="grid grid-cols-1 gap-x-5 gap-y-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1">
                    
          <div v-for="offer of allRecentOffers" :key="offer.dealRefId">
            <ExchangeCard :offer="offer" />
          </div>
                    
                </div>  

                 <Trigger @triggerIntersected="loadMore" />

            <div v-show="transactionLoading" class="py-6 flex justify-center">
              <Spinner />
            </div>
         </div>

                 
          
      </div>
    </div> 
    <!--footer section goes here-->
    <Footer />
  </div>
</template>

<script >
export default {
  name: "ExchangeList",
  mounted() {
    this.getAllRecentOffers();
   // this.setHeader()
  },

  data() {
    return {
      showLoader: false,
      showAllListings : false,
      isHindi:false,
      isEnglish:false,
      page:0,
      offers: [],
      transactionLoading: true,
      allRecentOffers: [],
      enableSearchMore: true,
    };
  },

  methods: {


    async getAllRecentOffers() {
      this.transactionLoading = true;
      try {
        let url = `/dview/v1/deals/recent-offers?page=${this.page}&size=10&transactionType=EXCHANGE`
        const data = await this.$axios.$get(url);
         if (this.page === 0) {
           this.allRecentOffers = data.payload;
        } else if (data.payload.length > 0) {
          this.allRecentOffers.push(...data.payload);
        }
        this.enableSearchMore = data.payload.length > 0;
        this.transactionLoading = false;
        this.loading = false;
     
        this.showLoader = false;
      } catch (error) {
        this.showLoader = false;
        console.log(error);
      }
    },
    loadMore() {
      console.log("-------------------------", this.page);
      if (!this.transactionLoading && this.enableSearchMore) {
        this.page++;
        this.getAllRecentOffers();
      }
    },

 
  },
};
</script>





<style scoped>
  .nav-links{
    border-color: #ededed;
  }
  .nav-links.active {
    color: #48CEF3!important;
    border-color: #48CEF3!important;
}	
</style>