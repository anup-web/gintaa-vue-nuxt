<template>
  <div class="similar-product-section pb-8 pt-0" v-if="showAllListings">
    <!-- <div v-if="showLoader" class="fixed w-full h-full z-50 top-0 left-0 bg-black opacity-40"></div> -->
    <div class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 place-content-center ">

        <div v-if="showLoader" class="bg-white rounded-full shadow w-12 h-12 mx-auto flex items-center justify-center">
                        <div style="border-top-color:transparent"
                            class="w-8 h-8 border-4 border-green border-solid rounded-full animate-spin"></div>

                    </div>

        <div v-if="userdetails.name" class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 ">
             <h3
              class="section-title text-gray-600  text-base md:text-2xl  font-bold px-5 relative mb-2 inline-block md:before:bg-green md:before:absolute md:before:w-12 md:before:h-0.5  md:before:top-[11px] lg:before:top-4 md:before:-left-14 md:after:bg-green md:after:absolute md:after:w-12 md:after:h-0.5  md:after:top-[11px] lg:after:top-4 md:after:-right-14  mt-3 md:mt-0"
              >
            <!-- <span  class="">{{userdetails.name}} {{ $t('allOtherListings') }}  </span> -->
            <span  class=""> {{ $t('allOtherListings').replace("{userName}", userdetails.name) }}</span>
              <!-- <span v-if="!isHindi && isEnglish" class="">{{ $t('allOtherListings') }} {{userdetails.name}} </span> 
              <span v-if="isHindi && !isEnglish" class="">{{userdetails.name}} {{ $t('allOtherListings') }}  </span>                 -->
            </h3>
         </div>  
      <!-- <ListingCard :listingItems="listingItems"/> -->
      <div  v-if="showAllListings" class="mylisting-grid flex flex-wrap justfy-start" :class="addClass(listingItems)">
              <div v-for="listing of listingItems" :key="listing.offerId" class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 w-3/6 md:w-2/6 lg:w-1/5  relative">
                <ListingCard :listing="listing" type ='userAllListings' />
              </div>
            </div>

    <div v-if="totallistingItems && totallistingItems.length > 10" class="flex justify-center pt-12">
        <a @click="getLink(userdetails.identityId)" class="border border-firoza bg-transparent py-2 px-8 rounded inline-block text-firoza font-medium text-base hover:bg-firoza transition hover:text-white flex items-center h-12 cursor-pointer">{{ $t('viewAllProducts') }} 
</a></div>

    </div>
  </div>
</template>

<script >
export default {
  name: "userAllListing",
  props: ["userdetails","offerId"],

  mounted() {
    this.getUserAllListings(this.userdetails.identityId);
    this.setHeader()
  },

  data() {
    return {
      showLoader: false,
      showAllListings : false,
      listingItems:[{}],
      totallistingItems:[{}],
      isHindi:false,
      isEnglish:false
    };
  },

  methods: {

  setHeader(){
   if (this.$route && this.$route.path.includes('hi')) {
     this.isHindi = true
     this.isEnglish = false
    }else{
      this.isHindi = false
      this.isEnglish = true
    }
    },

    async getUserAllListings(uid) {
      this.showLoader = true;
      try {
        let url = `/offers/v1/offers/${this.offerId}/siblings?show-completed-offers=false`;
        const data = await this.$axios.$get(url);
        if(data.payload && data.payload?.Item ){
        this.totallistingItems = data.payload?.Item
        if(data.payload && data.payload?.Item){
        this.listingItems = data.payload?.Item.slice(0, 10);
        }
        if(data.payload && this.listingItems.length){
          this.showAllListings = true
        }
        }else{
       this.showAllListings = false
        }
       
        this.showLoader = false;
      } catch (error) {
        this.showLoader = false;
        console.log(error);
      }
    },


    transform(images) {
      console.log("images", images);
      if (images) {
        return (
          images.filter((image) => image.cover === true)[0]?.url ||
          images[0].url
        );
      }
      return null;
    },
   addClass(listingItems){
    if(listingItems && listingItems.length > 5){
      return 'lg:justify-start'
    }else{
      return 'lg:justify-center'
    }
    },
    getLink(_uid){
     this.$router.push({ path: `/alllisting/${_uid}`, query:{ _uid: _uid ,_uname:this.userdetails.name }})
    }
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
 /* .mylisting-grid .group:nth-last-child(-n + 6) { 
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
 
@media (max-width:659px)  {
  /* .mylisting-grid .group:nth-child(3), .mylisting-grid .group:nth-child(4), .mylisting-grid .group:nth-child(5){
    border-top: 1px solid rgb(229 231 235) !important;
  } */
}
</style>
