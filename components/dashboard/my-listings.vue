<template>
  <div v-if="myListings && myListings.length">
    <client-only>
    <div class="mx-auto pb-2 relative home-last-recent-listing sm:pb-2 md:pb-5 lg:pb-0 xl:pb-0 2xl:pb-0">
      <div class="text-center mb-4 md:mb-5 lg:mb-8 2xl:mb-8  ">
        <h3
          class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
          <a v-if="listing_type && listing_type === 'bought'" @click="viewAllListing('bought')" class="text-gray-600 cursor-pointer">
            <span class="">{{ $t('productBought') }}</span>
          </a>
          <a v-else-if="listing_type && listing_type === 'sold'" @click="viewAllListing('sold')" class="text-gray-600 cursor-pointer">
            <span class="">{{ $t('productSold') }}</span>
          </a>
          <!-- <a v-else :href="localePath('/my-listings')" class="text-gray-600"> 
              <span   class="">{{ $t('myListings') }}</span> 
            </a> -->
        </h3>
      </div>
      <a v-if="myListings && myListings.length > 5 && listing_type && listing_type == 'bought'" @click="viewAllListing('bought')"
        class="cursor-pointer absolute text-sm right-0 top-[0px] z-40  hidden lg:block bg-firoza text-white px-3 py-2 rounded-sm cursor-pointer">
        {{ $t('viewAllProducts') }}
      </a>

      <a v-if="myListings && myListings.length > 5 && listing_type && listing_type == 'sold'" @click="viewAllListing('sold')"
        class="absolute text-sm right-0 top-[0px] z-40  hidden lg:block bg-firoza text-white px-3 py-2 rounded-sm cursor-pointer">
        {{ $t('viewAllProducts') }}
      </a>
      <!-- v-if="listing_type && listing_type === 'bought' && myListings && myListings.length && settings_bought"  -->
      <div 
      v-if="listing_type && listing_type === 'bought' && myListings && myListings.length"
      class="recentlisting recntlisting-grid-home w-full top-category-sec recent-scroll">
        <!-- <VueSlickCarousel class="vcustom-slider" v-bind="settings"> -->
          <dashboardBoughtSoldListingCard v-for="(listing, i) of myListings" :key="'my-bought'+i" :listing="listing"/>
        <!-- </VueSlickCarousel> -->
      </div>
      
      <div v-if="listing_type && listing_type === 'sold' && myListings && myListings.length" class="recentlisting recntlisting-grid-home w-full top-category-sec recent-scroll">
        <!-- <VueSlickCarousel class="vcustom-slider" v-bind="settings"> -->
          <dashboardBoughtSoldListingCard v-for="(listing, index) of myListings" :key="'my-sold'+index" :listing="listing"/>
        <!-- </VueSlickCarousel> -->
      </div>

      <!-- <div v-if="!listing_type && myListings && myListings.length" class="recentlisting recntlisting-grid-home w-full top-category-sec recent-scroll">
        <VueSlickCarousel class="vcustom-slider" v-bind="settings">

          <ListingItem v-for="(listing, index) of myListings" :key="'my-listing'+index" :listing="listing" type="mylisting"
            isMyListing='isMyListing' />

        </VueSlickCarousel>
      </div> -->
    </div>

    <!-- <div class="flex justify-center">
      <a :href="localePath('/view-all/lastviewedlisting')"
        class="min-w-[95px] flex justify-center items-center border border-firoza bg-transparent py-1 px-2 rounded  text-firoza font-medium text-sm hover:bg-firoza transition hover:text-white h-9  md:hidden mt-4 mb-0 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
        {{ $t('viewAllProducts') }}
      </a>
    </div> -->
  </client-only>
  </div>
</template>
<script lang="ts">
import { mapState, mapGetters } from "vuex";
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: "MyListingfordashboard",
  components: {
    VueSlickCarousel
  },
  props: ["listing_type"],
  // computed: {
  //   ...mapState({
  //     authUser: (state: any) => state.authUser,
  //   }),
  //   ...mapGetters({
  //     isLoggedIn: "isLoggedIn",
  //   }),
  // },

  data() {
    return {
      loading: true,
      showFav: false,
      showNotFavIcon: false,
      pageName: 'myListings',
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
              "slidesToScroll": 3,
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

    switch (this.listing_type) {
      case 'sold':
        this.getMySoldListings()
        break;
      case 'bought':
        this.getMyBoughtListings()
        break;
      default:
        this.getMyListings();
    }
  },

  methods: {
    async getMyListings() {
      this.loading = true
      //this.showLoader = true;
      this.myListings = []
      try {
        // let url = `/offers/v1/offers/filter/count?states=active&size=12&page=0&sort=publishedDate`;
        let url = `/offers/v1/offers/filter?states=active&size=12&page=0&sort=publishedDate`;
        const data = await this.$axios.$get(url);
        console.log("Listing data:", data)
        if (data && data.success) {
          this.myListings.push(...data.payload);
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
              // listings.map((item) => {
              //   let listing   = item
              //   listing['name'] = item.offerName
              //   listing['user'] = receiver
              //   console.log("user name listings:", listing)
              //   this.myListings.push(listing);
              // })

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

    viewAllListing(viewType) {
      if (viewType === 'sold') {
        this.$router.push({ path: this.localePath(`/my-offers`), query: { type: 'RECEIVED', status: 'CLOSED', transactionType: 'cash&coin' } })
      } else if (viewType === 'bought') {
        this.$router.push({ path: this.localePath(`/my-offers`), query: { type: 'SENT', status: 'CLOSED', transactionType: 'cash&coin' } })
      }
    },
    async getMySoldListings() {
      this.loading = true
      //this.showLoader = true;
      this.myListings = []
      try {
        let url = `/dview/v1/deals?transactionType=CASH%2CCOIN&type=RECEIVED&status=CLOSED&page=0&size=12`;
        const data = await this.$axios.$get(url);
        console.log("Listing data:", data)
        if (data && data.payload && data.payload.length) {
          data.payload.map((offer: any) => {
            const listings  = offer.requestedOffers
            const receiver  = offer.receiver
            if (listings && listings.length) {
              // listings.map((listing: any) => {
              //   listing['name'] = listing.offerName
              //   listing['user'] = offer.receiver
              //   this.myListings.push(listing);
              // })

              let listing   = listings[0]
              listing['name'] = listing.offerName
              listing['user'] = receiver
              console.log("sold user name listings:", listing)
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
    }
  },
};
</script>
<style scoped>
.top-category-sec .vcustom-slider .slick-next {
  top: 30% !important;
}

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

/* .mobilefilter-show .hidden {
  display: block !important;
} */
@media (min-width:320px) {
  .group:nth-child(2n+0) {
    border-right: 0 !important;
  }

  .mylisting-grid .group:nth-child(3),
  .mylisting-grid .group:nth-child(4),
  .mylisting-grid .group:nth-child(5) {
    border-top: 1px solid rgb(229 231 235) !important;
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

  .group:nth-child(4n+0) {
    border-right: 1px solid rgb(229 231 235) !important;
  }
}

.mylisting-grid .group:nth-child(1),
.mylisting-grid .group:nth-child(2),
.mylisting-grid .group:nth-child(3),
.mylisting-grid .group:nth-child(4),
.mylisting-grid .group:nth-child(5) {
  border-top: 0 !important;
}

@media (max-width:659px) {

  .mylisting-grid .group:nth-child(3),
  .mylisting-grid .group:nth-child(4),
  .mylisting-grid .group:nth-child(5) {
    border-top: 1px solid rgb(229 231 235) !important;
  }
}

.Blocked {
  background: #E80F0F !important;
  color: #fff !important;
}

.Completed {
  background: #8BC63E !important;
  color: #fff !important;
}

.mobile-btn {
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 20%);
}</style>