<template>
  <div class="product-details-page pt-[80px] lg:pt-12">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class="mx-auto container px-1 md:px-1 2xl:px-1 pt-10 hidden md:flex">
      <breadcrumb v-if="breadcrumb.length > 0" :breadcrumb="breadcrumb" />
    </div>
    <div class="mx-auto container px-1 md:px-1 2xl:px-1 pt-5 min-h-[550px]">
      <div class="flex flex-col w-full mb-8">
        <div class="w-full flex flex-col mb-5">
          <div class="text-center">
            <h3 class="section-title text-gray-600 text-base md:text-2xl font-bold px-5 relative mb-2
                inline-block before:bg-green before:absolute before:w-12 before:h-0.5 before:top-4 before:-left-14 after:bg-green
                after:absolute after:w-12 after:h-0.5 after:top-4 after:-right-14">
              <span class=""> {{ $t("allMatches") }}</span>
            </h3>
            <!-- <span class="block text-gray-400 text-sm font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> -->
          </div>
        </div>
        <!-- Start Of No matches -->
        <div
          v-if="existingOffers && !existingOffers.length && !loading"
          class="flex flex-col w-full pt-10 pb-14 min-h-[400px]"
        >
          <div class="w-full flex justify-center items-center pt-4">
            <img width="320" height="213" src="~/assets/images/offer/matchbox-empty.png" alt="matchbox-empty" />
          </div>
          <div class="w-full flex justify-center items-center pt-3">
            <div class="text-base text-gray-500 text-center font-normal">
              {{ $t("matchesParaAll") }}
            </div>
          </div>
          <!-- <div class="w-full flex justify-center items-center pt-2">
            <a :href="localePath('/listing/item')" class="text-sm text-green text-center
                font-normal cursor-pointer underline decoration-green decoration-solid
                underline-offset-4">{{ $t("addAProduct") }}</a>
          </div> -->
        </div>
        <!-- End -->
        <div v-for="exitingofr of existingOffers" :key="exitingofr.offerId"
          class="w-full flex flex-col border-b-2 border-gray-200 mb-5 pb-3" >
          <div class="w-full flex flex-row mt-5 mb-5">
            <div class="grid grid-cols-3 gap-x-5 gap-y-5 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5">
              <ListingCard :listing="exitingofr" />

              <div class="more-match">
                <div class="w-full h-full flex items-center justify-center px-4">
                  <img src="~/assets/images/exchange-arrow.svg" alt="exchange-arrow">
                </div>
              </div>

              <div class="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
                <div class="w-full">
                  <VueSlickCarousel v-if="exitingofr.matches.hits" class="vcustom-slider" v-bind="settings">                   
                    <div v-for="(listing, index) of exitingofr.matches.hits" :key="index" >
                      <div class="group box-border overflow-hidden flex p-3  pe-0 pb-2 lg:pb-3 flex-col items-start
                          bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5                          
                          relative border-r border-gray-100">
                        <RandomMatchesListingCard
                          :listing="listing.sourceAsMap"
                         @listingDet="listingDet"/>

                         <!-- <MatchListingCard :listing="listing.sourceAsMap" @listingDet="listingDet" /> -->
                      </div>
                    </div>
                  </VueSlickCarousel>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Trigger @triggerIntersected="loadMore" />
      <div v-show="loading" class="py-6 flex justify-center">
        <Spinner />
      </div>
    </div>

    <!-- quick view modal start -->
   
 <div v-if="showListDetails" class="relative z-50" role="dialog" aria-modal="true">
  <div class="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex  text-center md:block md:px-2 lg:px-4" style="font-size: 0">      
      <span class="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">&#8203;</span>
     
      <div class="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-[960px]">
        <div class="w-full relative flex items-center bg-white p-8 rounded-md">
          <button @click="closePopup" class=" z-30 absolute cursor-pointer -top-4 -right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:-top-4 lg:-right-4 bg-white rounded-full w-[32px] h-[32px] text-center">
            <span class="sr-only">Close</span>            
            <svg class="h-6 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
           
        <ListingDetQuickView  :offerId ="offerId"/>
         
        </div>
      </div>
    </div>
  </div>
</div> 

      <!-- quick view modal end -->
    <!--footer section goes here-->
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import _ from "lodash";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default Vue.extend({
  components: { VueSlickCarousel },
  data() {
    return {
    product :null,
    showListDetails :false,
    offerId :'',
    breadcrumb: [
        {
          name: this.$t("allMatches"),
        },
      ],
      page: 0,
      matchCountMax: "4",
      existingOffers: [],
      moreexistingOffers: [],
      enableSearchMore: true,
      loading: true,
      settings: [
        {
          arrows: true,
          dots: false,
          speed: 500,
          infinite: true,
          initialSlide: 1,
          slidesToShow: 3,
          slidesToScroll: 3,
          swipeToSlide: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,

              },
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.getAllMatches();
  },
  methods: {

listingDet(listingdata:any){
        //console.log("data",listingdata)
        //this.fetchData(listingdata.oid)
        this.offerId = listingdata.oid
        this.showListDetails = true
        //this.product = listingdata
       },

  closePopup(){
   this.showListDetails = false
   },

  async fetchData (oid:string) {
    console.log('async  fetch')
    //this.loading = true
    const data = await this.$axios.get(`${this.$config.API_BASE}/offers/v1/offers/oid/${oid}`)
    console.log(data)
    if(data && data.data.payload ){
    this.product = data.data.payload
    //this.showListDetails = true
    }
  },


    async getAllMatches() {
      this.loading = true;
      try {
        let url = `/search/v1/search/demo-match-result?matchCountMax=15&size=5&page=${this.page}`;
        const data = await this.$axios.$get(url);
        this.enableSearchMore = data.payload.length > 0;
        if (this.page === 0) {
          data.payload.forEach(function (value: any) {
            const dummyCoinObj = {
              score: 1,
              sourceAsMap: {
                auction: null,
                auctioned: false,
                business: null,
                businessOffer: false,
                category: {},
                description: "asdasdasdasdasdasdasd",
                desire: {
                  description: "",
                  cleanDescription: "",
                  cleanDesireInformation: "headphone",
                },
                exchangeMode: "Barter",
                favourite: null,
                image: { url: "" },
                location: {
                  city: "Kolkata",
                  state: "West Bengal",
                  country: "India",
                  lat: 22.5719438,
                  lng: 88.3618223,
                },
                name: "Coin",
                offerType: "Item",
                oid: "63spRE8nH9lDYcGaClg2QU",
                price: null,
                productAge: 2,
                productType: "BASIC",
                publishedDate: "2022-03-12T07:33:55.944+0000",
                score: null,
                totalOfferValuation: null,
                unitOfferValuation: value.unitOfferValuation,
                type: "StaticCoin",
              },
            };
            const dummyCashObj = {
              score: 1,
              sourceAsMap: {
                auction: null,
                auctioned: false,
                business: null,
                businessOffer: false,
                category: {},
                description: "asdasdasdasdasdasdasd",
                desire: {
                  description: "",
                  cleanDescription: "",
                  cleanDesireInformation: "headphone",
                },
                exchangeMode: "Barter",
                favourite: null,
                image: { url: "" },
                location: {
                  city: "Kolkata",
                  state: "West Bengal",
                  country: "India",
                  lat: 22.5719438,
                  lng: 88.3618223,
                },
                name: "Cash",
                offerType: "Item",
                oid: "63spRE8nH9lDYcGaClg2QU",
                price: null,
                productAge: 2,
                productType: "BASIC",
                publishedDate: "2022-03-12T07:33:55.944+0000",
                score: null,
                totalOfferValuation: null,
                unitOfferValuation: value.unitOfferValuation,
                type: "StaticCash",
              },
            };
            if (value.matches && value.matches.hits) {
              const randomnumber = Math.floor(Math.random() * 6) + 1
              value.matches.hits.splice(randomnumber, 2, dummyCoinObj, dummyCashObj);
            } else {
              if (value.matches.hits === null) {
                const arrayObj = [];
                arrayObj.push(dummyCoinObj, dummyCashObj);
                value.matches.hits = arrayObj;
              }
            }
          });
          this.existingOffers = data.payload;
        } else if (data.payload.length > 0) {
          data.payload.forEach(function (value: any) {
            const dummyCoinObj = {
              score: 1,
              sourceAsMap: {
                auction: null,
                auctioned: false,
                business: null,
                businessOffer: false,
                category: {},
                description: "asdasdasdasdasdasdasd",
                desire: {
                  description: "",
                  cleanDescription: "",
                  cleanDesireInformation: "headphone",
                },
                exchangeMode: "Barter",
                favourite: null,
                image: { url: "" },
                location: {
                  city: "Kolkata",
                  state: "West Bengal",
                  country: "India",
                  lat: 22.5719438,
                  lng: 88.3618223,
                },
                name: "Coin",
                offerType: "Item",
                oid: "63spRE8nH9lDYcGaClg2QU",
                price: null,
                productAge: 2,
                productType: "BASIC",
                publishedDate: "2022-03-12T07:33:55.944+0000",
                score: null,
                totalOfferValuation: null,
                unitOfferValuation: value.unitOfferValuation,
                type: "StaticCoin",
              },
              //user: {identityId: "9krFVFH1O2PcnLCP7f1GVuSHzqn2", name: "rup", imageUrl: null}
            };
            const dummyCashObj = {
              score: 1,
              sourceAsMap: {
                auction: null,
                auctioned: false,
                business: null,
                businessOffer: false,
                category: {},
                description: "asdasdasdasdasdasdasd",
                desire: {
                  description: "",
                  cleanDescription: "",
                  cleanDesireInformation: "headphone",
                },
                exchangeMode: "Barter",
                favourite: null,
                image: { url: "" },
                location: {
                  city: "Kolkata",
                  state: "West Bengal",
                  country: "India",
                  lat: 22.5719438,
                  lng: 88.3618223,
                },
                name: "Cash",
                offerType: "Item",
                oid: "63spRE8nH9lDYcGaClg2QU",
                price: null,
                productAge: 2,
                productType: "BASIC",
                publishedDate: "2022-03-12T07:33:55.944+0000",
                score: null,
                totalOfferValuation: null,
                unitOfferValuation: value.unitOfferValuation,
                type: "StaticCash",
              },
            };
            if (value.matches && value.matches.hits) {
              const randomnumber = Math.floor(Math.random() * 6) + 1
              value.matches.hits.splice(randomnumber, 2, dummyCoinObj, dummyCashObj);
            } else {
              if (value.matches.hits === null) {
                const arrayObj = [];
                arrayObj.push(dummyCoinObj, dummyCashObj);
                value.matches.hits = arrayObj;
              }
            }
          });
          this.existingOffers.push(...data.payload);
        }
        this.enableSearchMore = data.payload.length > 0;
        this.loading = false;
      } catch (error) {
        if (this.page === 0) {
          this.existingOffers = [];
        }
        this.enableSearchMore = false;
        console.log(error);
        this.loading = false;
      }
    },

    getUrl(image: any) {
      if (image.url) {
        return image.url;
      } else {
        return image[0].url;
      }
    },

      
    addCoinSymbol(bbj: any) {
     // console.log("bbj", bbj);
      bbj.push(this.dummyObj);
      return bbj;
    },

    listLink(listing: any) {
      // return `/p/${listing.seOId || this.slugify(listing.name)}/${
      //   listing.offerId || listing.oid
      // }`

        return `/p/${this.slugify(listing.seOId) || this.$createSlugUrl(listing)}/${
        listing.offerId || listing.oid
      }`
      
      ;
    },
    slugify(text: string) {
      if(text){
      return text
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .normalize("NFD") // The normalize() method returns the Unicode Normalization Form of a given string.
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-"); // Replace multiple - with single -
      }
      
    },
    loadMore() {
      if (!this.loading && this.enableSearchMore) {
        this.page++;
       // console.log("-------------------------", this.page);
        this.getAllMatches();
      }
    },

    
  },
});
</script>
<style scoped>
.nav-links {
  border-color: #ededed;
}
.nav-links.active {
  color: #48cef3 !important;
  border-color: #48cef3 !important;
}
.matchboxgrid .group:last-child {
  border-right: 0px solid #000 !important;
}
</style>