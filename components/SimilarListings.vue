<template >
 <div>

  
  <div v-if="loading && !showSimilarListings" class="container max-w-8xl mx-auto px-4 sm:px-4 md:px-8 2xl:px-16"> 
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

  <div class="similar-product-section py-8" v-if="showSimilarListings && !loading">
    <div class="mx-auto max-w-[1920px] px-0 lg:px-4 md:px-8 2xl:px-16">
      <div class="mx-auto pb-14" >
        <div class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
          <h3
            class="section-title text-gray-600  text-base md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14"
          >
            <span class="">{{ $t('similarListingsText') }}</span>
          </h3>
        </div>
        
        <div v-if="showSimilarListings"  class="mylisting-grid flex flex-wrap justfy-start " :class="addClass(listingItems)">
              <div v-for="listing of listingItems" :key="listing.offerId" class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 w-3/6 md:w-2/6 lg:w-1/5  relative">
                <ListingCard :listing="listing" />
              </div>
            </div>

        <div v-if="totallistingItems.length> 10" class="flex justify-center pt-12">
          <a
            @click="getLink"
            class="
              border border-firoza
              bg-transparent
              py-2
              px-8
              rounded
              inline-block
              text-firoza
              font-medium
              text-base
              hover:bg-firoza
              transition
              hover:text-white
              flex
              items-center
              cursor-pointer
              h-14
            "
            >{{ $t('viewAllProducts') }}
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "similarListings",
  props: ["offerId"],
  mounted() {
    this.getSimilarListings(this.offerId);
  },
  data() {
    return {
      loading:true,
      product: null,
      listingItems: [{}],
      totallistingItems: [{}],
      showSimilarListings: false
    };
  },
  methods: {
    async getSimilarListings(offerId) {
      try {
        let url = `/offers/v1/offers/similar/${offerId}?show-completed-offers=false&show-my-offers=false`;
        const data = await this.$axios.$get(url);
        this.totallistingItems = data.payload
        this.listingItems = data.payload.slice(0, 10);
        this.loading =false
        if(this.listingItems.length){
          this.showSimilarListings = true;
        }else{
          this.showSimilarListings = false;
        }
      } catch (error) {
        this.loading =false
        console.log(error);
      }
    },
    transform(images) {
      if (images) {
        return (
          images.filter((image) => image.cover === true)[0]?.url ||
          images[0].url
        );
      }
      return null;
    },

   getLink(){
    this.$router.push({ path: '/view-all/similarlisting', query: { id: this.offerId }})
   },

   addClass(listingItems){
    if(listingItems && listingItems.length > 5){
      return 'lg:justify-start'
    }else{
      return 'lg:justify-center'
    }
   }

    //
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
.mylisting-grid .group:last-child{
    border-right: 0 !important;
  }
 /* .mylisting-grid .group:nth-last-child(-n + 4) { 
   border-bottom: 0 !important;
 } */
/* .mobilefilter-show .hidden {
  display: block !important;
} */
@media (min-width:320px)  {
  .group:nth-child(2n+0){
    border-right: 0 !important;
  }
 
  .mylisting-grid .group:nth-child(3), .mylisting-grid .group:nth-child(4), .mylisting-grid .group:nth-child(5), .mylisting-grid .group:nth-child(6){
    /* border-top: 1px solid rgb(229 231 235) !important; */
  }
}
@media (min-width:640px)  {
  .group:nth-child(3n+0){
    border-right: 0 !important;
  }
  .group:nth-child(2n+0){
    border-right: 1px solid rgb(229 231 235) !important;
  }
  }

@media (min-width:1280px)  {

  .group:nth-child(4n+0){
   border-right: 1px solid rgb(229 231 235) !important;
  }
  .group:nth-child(3n+0){
    border-right: 1px solid rgb(229 231 235) !important;
  }

}

@media (min-width:1536px)  {
  .group:nth-child(5n+0){
    border-right: 0 !important;
  }
  .group:nth-child(4n+0){
    border-right: 1px solid rgb(229 231 235) !important;
  }
}
 .mylisting-grid .group:nth-child(7), .mylisting-grid .group:nth-child(8), .mylisting-grid .group:nth-child(9), .mylisting-grid .group:nth-child(10), .mylisting-grid .group:nth-child(11), .mylisting-grid .group:nth-child(12){
    /* border-bottom: 0 !important; */
  }
@media (max-width:659px)  {
  /* .mylisting-grid .group:nth-child(3), .mylisting-grid .group:nth-child(4), .mylisting-grid .group:nth-child(5){
    border-top: 1px solid rgb(229 231 235) !important;
  } */
}
.animate-pulses {
  width: 100%;
  height: 100%;
  animation: pulse-animation 3s infinite;
}
@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
  }
  100% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
  }
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
