<template>
  <div v-if="myListings && myListings.length">
    <!-- <client-only> -->
    <div class="mx-auto pb-2 relative home-last-recent-listing sm:pb-2 md:pb-5 lg:pb-0 xl:pb-0 2xl:pb-0">
      <div class="text-center mb-4 md:mb-5 lg:mb-8 2xl:mb-8  ">
        <h3
          class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
          <a @click="viewAllListing()" class="text-gray-600 cursor-pointer">
            <span class="">{{ $t('productBought') }}</span>
          </a>
        </h3>
      </div>
      <a v-if="myListings && myListings.length > 5 " @click="viewAllListing()"
        class="cursor-pointer absolute text-sm right-0 top-[0px] z-40  hidden lg:block bg-firoza text-white px-3 py-2 rounded-sm cursor-pointer">
        {{ $t('viewAllProducts') }}
      </a>
      <!-- v-if="listing_type && listing_type === 'bought' && myListings && myListings.length && settings_bought"  -->
      <div 
        v-if="myListings && myListings.length"
        class="recentlisting recntlisting-grid-home w-full top-category-sec recent-scroll">
        <VueSlickCarousel class="vcustom-slider" v-bind="settings">          
          <div v-for="(listing,index) of myListings" :key="'my-bought'+index"  class="group box-border overflow-hidden flex p-4  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r  border-gray-200   relative" >
            <dashboardBoughtSoldListingCard :listing="listing"/>
          </div>
        </VueSlickCarousel>
      </div>
      
      
    </div>

  <!-- </client-only> -->
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
      myListings: [],
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
    this.getMyBoughtListings();
  },

  methods: {
    async getMyBoughtListings() {
      this.loading = true
      //this.showLoader = true;
      try {
        this.myListings = []
        let url = `/dview/v1/deals?transactionType=CASH%2CCOIN&type=SENT&status=CLOSED&page=0&size=12`;
        const data = await this.$axios.$get(url);
        console.log("Listing data:", data)
        
        if (data && data.payload && data.payload.length) {
          const allOffers = data.payload
          
          console.log("allOffers:", allOffers)

          allOffers.map((offer: any) => {
            const listings  = offer.requestedOffers
            const receiver  = offer.receiver
            console.log("listings:", listings)
            if (listings && listings.length) {
                let listing   = listings[0]
                listing['name'] = listing.offerName
                listing['user'] = receiver
                console.log("bought user name listings:", listing)
                this.myListings.push(listing);
            }
          })

        } else {

        }

        this.loading = false;
      } catch (error) {
        this.showNotFavIcon = true
        this.myListings = [];
        this.loading = false;
        console.log(error);
      }
    },

    viewAllListing() {
        this.$router.push({ path: this.localePath(`/my-offers`), query: { type: 'SENT', status: 'CLOSED', transactionType: 'cash&coin' } })
    },
  },
};
</script>
<style scoped>
 .top-category-sec .vcustom-slider .slick-next{

  top:30% !important;

}
</style>