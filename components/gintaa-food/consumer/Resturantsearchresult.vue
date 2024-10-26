<template>
  <div class="w-full">

    <div v-if="selectedTab === 'resturant' && !loading" class=" mt-4">

      <div
        class="grid gap-x-8 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">

        <div v-if="resturantlistings && resturantlistings.length > 0" class="w-full" v-for="listing of resturantlistings"
          :key="listing.rid">

          <GintaaFoodListingcardSearchresturantcard :listing="listing" />
        </div>
      </div>
      <!-- No Restaurants start -->
      <div v-if="resturantlistings.length == 0" class="w-full px-4 py-8">
        <div class="flex items-center justify-center mb-4 w-full flex-col">
          <img src="~assets/images/food/no-restaurant.svg" alt="image" class="mx-auto block" />

          <div class="text-[#8BC63E] text-[20px] py-4 font-medium">Oops!</div>

          <!-- <div class="flex items-center justify-center text-base text-gray-700 font-medium text-center">Can't find a door to knock</div> -->
          <div class="flex items-center justify-center text-base text-gray-700 text-center">
            No restaurant found
            <!-- You don't have an address to  deliver -->
          </div>
        </div>

      </div>

      <!-- <Trigger @triggerIntersected="loadMoreResturant" />
      <div v-show="resloading" class="py-6 flex justify-center min-h-[400px]">
        <Spinner />
      </div> -->
      <!-- No Restaurants end -->
    </div>

    <div v-if="selectedTab === 'dish' && !loading" class="mt-4">
      <div class="grid gap-x-6 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  ">
        <div class="w-full" v-for="listing of dishlistings" :key="listing.id">

          <GintaaFoodListingcardSearchdishcard :listing="listing" />
        </div>
      </div>
      <!-- No Dishes start -->
      <div v-if="dishlistings.length == 0" class="w-full px-4 py-8">
        <div class="flex items-center justify-center mb-4 w-full flex-col">
          <img src="~assets/images/food/no-dishes.svg" alt="image" class="mx-auto block" />

          <div class="text-[#8BC63E] text-[22px] py-4 font-medium">Oops!</div>

          <!-- <div class="flex items-center justify-center text-base text-gray-700 font-medium text-center">Can't find a door to knock</div> -->
          <div class="flex items-center justify-center text-base text-gray-700 text-center">
            {{ $t('noDishFound') }}
            <!-- You don't have an address to  deliver -->
          </div>
        </div>
        <!-- <div class="flex items-center justify-center text-base text-gray-700 font-medium text-center">Can't find a door to
          knock</div>
        <div class="flex items-center justify-center text-base text-gray-700 text-center">You don't have an address to
          deliver</div> -->
      </div>

      <!-- <Trigger @triggerIntersected="loadMoreDish" />
      <div v-show="dishloading" class="py-6 flex justify-center min-h-[400px]">
        <Spinner />
      </div> -->
      <!-- No Dishes end -->
    </div>




  </div>
  <!-- <GintaaFoodListingcardResturantcard/> -->
</template>
     
<script lang="ts">
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import { mapState, mapGetters } from 'vuex';
export default Vue.extend({
  name: 'Resturantsearchresult',
  props: ['selectedAddress', 'searchTypeList'],
  // props: ['filterObjects'],
  components: { VueSlickCarousel },
  watch: {
    selectedAddress(newSelectedAddress, oldSelectedAddress) { // watch it
    //  console.log('Prop changed: ', newSelectedAddress, ' | was: ', oldSelectedAddress)
      this.getAllLisitngs()
    },
    searchTypeList(newData, oldData) { // watch it
    //  console.log('Prop changed: ', newData, ' | was: ', oldData)
      this.selectedTab = newData
      if (newData !== oldData) {
        // this.getResturantOrDishList()
      }

    }
  },
  data() {
    return {
      selectedTab: 'resturant',
      showAddaddressPopup: false,
      listings: [],
      respage: 0,
      resdefaultSize: 10,
      dishpage: 0,
      dishdefaultSize: 10,
      loading: true,
      sortParamsdata: '&sort=publishedDate,desc',
      vueAllPath: '',
      editOrAddAddressDetails: {},
      addressDet: {
        id: '',
        addressLine: '',
        lat: 0,
        lng: 0,
        flatNo: '',
        landmark: '',
        area: '',
        annotation: '',
        zip: '',
        city: '',
        state: '',
        country: '',
        name: '',
        email: '',
        phoneNumber: '',
        default: false
      },

      resturantlistings: [],
      dishlistings: [],

      resloading: false,
      resenableSearchMore: true,

      dishloading: false,
      dishenableSearchMore: true

      // resloading:false,
      // resenableSearchMore:false

    }
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
  created() {
    this.$on("closeModal", (section) => {
      this.showAddaddressPopup = false;
      if (section) {
        this.getAllLisitngs()
      }
    });
  },
  mounted() {
    console.log("searchTypeList", this.searchTypeList)
    //  this.getResturantOrDishList()
    this.getAllLisitngs()
  },
  methods: {

    async getAllLisitngs() {



      let [pListing, listing] = await Promise.all([this.getResturantList(), this.getDishList()]);


      // console.log("pListing for resturant",pListing)
      // console.log("listing for dish",listing)

      if (pListing.length) {
        this.resturantlistings.push(...pListing)
      }
      if (listing && listing.length) {


        let dishList = listing

        dishList.map((item: any) => {


          if (item && item.foodListings.length) {
        //    console.log("item")

            item.foodListings.map((eachFoodList: any) => {
              eachFoodList['foodResName'] = item.name
              eachFoodList['rid'] = item.rid
              eachFoodList['avgRating'] = item.avgRating
            })

            this.dishlistings.push(...item.foodListings)
          }
        })
      //  console.log("this.dishlistings", this.dishlistings)
      }
    },

    async getResturantList() {


      // if (!this.loading) {
      //   this.resloading = true
      // }

     // let size = this.defaultSize
      const lat = this.selectedAddress ? this.selectedAddress.lat : null
      const lng = this.selectedAddress ? this.selectedAddress.lng : null
      let qreParam = ''
      if (lat && lng) {
        qreParam = `lat=${lat}&lng=${lng}&`
      }

      const selectedcid = this.$route?.query?.cid
      let cid = ''
      if (selectedcid) {
        cid = `cid=${selectedcid}&`
      }

      const searchParameter = this.$route?.query?.searchText
      let searchText = ''
      if (searchParameter) {
        searchText = `q=${searchParameter}&`
      }

      let resdefaultSize = this.resdefaultSize

      try {
        // &page=${this.page}&size=${size}
        const url = `/search/v1/search/restaurant/nearby?${searchText}${cid}${qreParam}&offline=true&bounds=false&page=${this.respage}&size=${resdefaultSize}`;
        const data = await this.$axios.$get(url);
       // console.log("Data for resturnat list", data)

        if (this.respage === 0) {
          return data.payload.result
        } else if (data.payload.result.length > 0) {
          let pListing = data.payload.result
          this.resturantlistings.push(...pListing)
        }

        this.resenableSearchMore = data.payload.result.length > 0

        this.resloading = false


      } catch (error) {

        this.loading = false
        this.$emit('makeloadingfalse', false)
       // this.resloading = false
        // this.enableSearchMore = false

      }

    },

    async getDishList() {

      // if(!this.loading){
      //   this.dishloading = true
      // }

      let size = this.defaultSize
      const lat = this.selectedAddress ? this.selectedAddress.lat : null
      const lng = this.selectedAddress ? this.selectedAddress.lng : null
      let qreParam = ''
      if (lat && lng) {
        qreParam = `lat=${lat}&lng=${lng}&`
      }

      const selectedcid = this.$route?.query?.cid
      let cid = ''
      if (selectedcid) {
        cid = `cid=${selectedcid}&`
      }

      const searchParameter = this.$route?.query?.searchText
      let searchText = ''
      if (searchParameter) {
        searchText = `q=${searchParameter}&`
      }

      let dishdefaultSize = this.dishdefaultSize
    
      try {
        // &page=${this.page}&size=${size}
        const url = `/search/v1/search/restaurant/food/nearby?${searchText}${cid}${qreParam}&offline=false&bounds=false&page=${this.dishpage}&size=${dishdefaultSize}`;
        const data = await this.$axios.$get(url);
       // console.log("Data for food dish", data)
        this.loading = false
        this.$emit('makeloadingfalse', false)

        if (this.dishpage === 0) {
          return data.payload.result
        } else if (data.payload.result.length > 0) {
          //Pagination For Food Dish
          let dishList = data.payload.result

          dishList.map((item: any) => {


            if (item && item.foodListings.length) {
            //  console.log("item")

              item.foodListings.map((eachFoodList: any) => {
                eachFoodList['foodResName'] = item.name
                eachFoodList['rid'] = item.rid
                eachFoodList['avgRating'] = item.avgRating
              })

              this.dishlistings.push(...item.foodListings)
            }
          })
         // this.dishlistings.push(...pListing)
        }

        this.dishenableSearchMore = data.payload.result.length > 0

        this.dishloading = false
       // return data.payload.result


      } catch (error) {
        this.$emit('makeloadingfalse', false)
        this.loading = false
        this.dishloading = false
        // this.enableSearchMore = false

      }

    },

    loadMoreResturant() {
      if (!this.resloading && this.resenableSearchMore) {
        this.respage++
        this.getResturantList()
      }
    },

    loadMoreDish() {
      if (!this.dishloading && this.dishenableSearchMore) {
        this.dishpage++
        this.getDishList()
      }
    }
  }
})

</script>
<style scoped>
@media only screen and (max-width: 600px) {
  .recentlisting .mobile-last:nth-child(5) {
    display: none;

  }

}

.recentlisting .mobile-last:nth-child(5) {
  border-right: 0 !important;

}

.top-category-sec .vcustom-slider .slick-next {
  top: 30% !important;
}


@media only screen and (min-device-width: 0px) and (max-device-width: 639px) {

  .loader-cusres .loader-mobile:nth-child(3),
  .loader-cusres .loader-mobile:nth-child(4),
  .loader-cusres .loader-mobile:nth-child(5) {
    display: none;
  }
}

@media only screen and (min-device-width: 640px) and (max-device-width: 1023px) {

  .loader-cusres .loader-mobile:nth-child(4),
  .loader-cusres .loader-mobile:nth-child(5) {
    display: none;
  }
}
</style>