<template>
  <div>
  <div class="product-details-page pt-[80px] lg:pt-12 ">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class="mx-auto max-w-[1920px] md:px-8 2xl:px-16 pt-10 hidden md:flex">
    <breadcrumb v-if="breadcrumb.length > 0" :breadcrumb="breadcrumb" />
    </div>

    <!-- <fullPageLoader v-if="loading" /> -->
   


    <div class="mx-auto max-w-[1920px]  md:px-8 2xl:px-16 pt-5 ">

      <div class="flex flex-col w-full ">

        <div class="min-h-[500px]" >
           <div class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-6 3xl:mb-6 ">
          <h1 class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
          <span class="">{{ $t ('myFavourites') }}</span>
        </h1>
           </div>
            <div v-if="loading" class="py-6 flex justify-center items-center  px-6">
              <SpinnerGreen />
            </div>
            <div v-if="showNotFavIcon" class="text-center no-favourite "> 
              <div class="w-full flex justify-center items-center">
              <div class="pt-4"><img src="~/assets/images/no-favourite.png" alt="no-favourite" class="max-w-full mx-auto"/></div>
              </div>
              <div class="w-full flex justify-center items-center">
              <div class="text-gray-500 py-3 text-sm">{{$t('noFavourites')}}</div>
              </div>
              <div class="w-full flex justify-center items-center">
              <div><a :href="localePath('/search?searchText')" class="py-2 rounded-sm text-sm px-8 bg-firoza inline-block text-white border-firoza border mb-0 hover:bg-firoza hover:text-white transition-all">{{$t('browseProducts')}}</a></div>
              </div>
            </div>
          <div >
               <div class="flex flex-col w-full mt-2">
                      
                        <div class="w-full flex flex-col mt-5 mb-5">
                      <div class="favouritegrid grid grid-cols-2  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6">
        
                        <div v-for="(listing,index) of favouriteListing" :key="index"  class="group box-border overflow-hidden flex p-4  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-t border-gray-200   relative" >
                                
                                <ListingCard :listing="listing"  @removeFromFav="removeFromFav" />
                                
                            </div> 

                           
                        </div>
                     </div>  
                   

                  



               </div>    
          </div>
                
          
        </div>
      </div>
    </div>
    <!--footer section goes here-->
    <Footer />
  </div>

    <!--footer section goes here-->
    <!-- <Footer /> -->
  </div>
</template>
<script lang="ts">
import { mapState, mapGetters } from "vuex";
import Favourite from '~/components/atoms/favourite.vue';
import Breadcrumb from "~/components/Breadcrumb.vue";

export default {
  middleware: "authenticated",
  components: {
    Breadcrumb,
    Favourite,
  },

  computed: {
    ...mapState({
      authUser: (state: any) => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
    }),
  },

  data() {
    return {
      loading: true,
      showFav: false,
      showNotFavIcon:false,
      pageName:'myFavourite',

      breadcrumb: [
        {
          name: this.$t('myFavourites'),
        },
      ],
      favouriteListing: [],
    };
  },
  mounted() {
    this.getMyFavourites();
  },

  methods: {
    async getMyFavourites() {
         this.loading = true
      //this.showLoader = true;
      this.favouriteListing = []
      try {
        let url = `/offers/v1/offer/favourites`;
        const data = await this.$axios.$get(url);
        if (data.success) {
          this.favouriteListing.push(...data.payload);
        }else{

        }
        if(this.favouriteListing.length === 0){
          this.showNotFavIcon = true
        }
         this.loading = false;
      } catch (error) {
        this.showNotFavIcon = true
        this.favouriteListing = [];
        this.loading = false;
        console.log(error);
      }
    },
    removeFromFav(status:any){
    //  console.log("----------------------",status)
      if (process.client) {
       if(this.pageName === 'myFavourite'){
           this.getMyFavourites();
       }
      }
    }
  },
};
</script>




<style scoped>

.favouritegrid .group:last-child{ 
  border-right:0px !important


}
 .favouritegrid .group:nth-child(6n+0) {
    border-right: 0 !important;
    
}
.favouritegrid .group:nth-child(1), .favouritegrid .group:nth-child(2), .favouritegrid .group:nth-child(3), .favouritegrid .group:nth-child(4), .favouritegrid .group:nth-child(5), .favouritegrid .group:nth-child(6) {
    border-top: 0 !important;
    
}
</style>