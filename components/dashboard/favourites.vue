<template>
  <div v-if="favouriteListing.length">
    <div class="mx-auto pb-2 relative home-last-recent-listing sm:pb-2 md:pb-5 lg:pb-0 xl:pb-0 2xl:pb-0">
      <div class="text-center mb-4 md:mb-5 lg:mb-8 2xl:mb-8  ">
        <h3 class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
          <a :href="localePath('/my-favourites')" class="text-gray-600">
            <span class="">{{ $t('favourites') }}</span>
          </a>
        </h3>
      </div>
      <a 
        v-if="favouriteListing.length > 5"
        :href="localePath('/my-favourites')" class="absolute text-sm right-0 top-[0px] z-40  hidden lg:block bg-firoza text-white px-3 py-2 rounded-sm">
       {{ $t('viewAllProducts') }}
      </a>
      <div class="recentlisting recntlisting-grid-home w-full top-category-sec recent-scroll">
        <VueSlickCarousel class="vcustom-slider" v-bind="settings">
          <!-- <homeListingCard v-for="listing in recentListing" :key="listing.offferId" :listing="listing" /> -->
          <div v-for="(listing,index) of favouriteListing" :key="index"  class="group box-border overflow-hidden flex p-4  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r  border-gray-200   relative" >
          <ListingCard  :listing="listing"  @removeFromFav="removeFromFav" />
          </div>

        </VueSlickCarousel>
      </div>
    </div>

    <div class="flex justify-center">
      <a :href="localePath('/view-all/lastviewedlisting')" class="min-w-[95px] flex justify-center items-center border border-firoza bg-transparent py-1 px-2 rounded  text-firoza font-medium text-sm hover:bg-firoza transition hover:text-white h-9  md:hidden mt-4 mb-0 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
       {{ $t('viewAllProducts') }}
      </a>
    </div>
  </div>
</template>
<script lang="ts">
import { mapState, mapGetters } from "vuex";
import Favourite from '~/components/atoms/favourite.vue';
import Breadcrumb from "~/components/Breadcrumb.vue";
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  // middleware: "authenticated",
  components: {
    Breadcrumb,
    Favourite,
    VueSlickCarousel
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
        // if(this.favouriteListing && this.favouriteListing.length === 0){
        //   this.showNotFavIcon = true
        // }
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
 .top-category-sec .vcustom-slider .slick-next{

  top:30% !important;

}
</style>