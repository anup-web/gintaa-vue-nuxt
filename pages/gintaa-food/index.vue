<template>
  <div class="relative overflow-hidden">
    <!-- <GintaaFoodConsumerTopBanner/> -->
    <fullPageLoader v-if="showLoader" />

    <GintaaFoodConsumerHeader @selectedLocation="selectedLocation" />

    <div class="min-h-[450px] w-full">

    <GintaaFoodAtomsComingSoon v-if="!isElegibaleForFood && !showLoader" />

    <div v-if="isElegibaleForFood && !showLoader">
      <GintaaFoodConsumerTopBanner />


      <GintaaFoodConsumerTopCategory />
      <div class="mb-7">
        <GintaaFoodConsumerNearbyresturant v-if="selectedAddress" :selectedAddress="selectedAddress" />
      </div>

      <!-- <div class="mx-auto max-w-[1920px] pb-8 px-4 md:px-8 xl:px-16 2xl:px-16 py-0">
        <a :href="localePath('/register-your-restaurant')" target="_blank"><img
            src="~/assets/images/register-your-restaurant.webp" class="max-w-full rounded-lg" /></a>
      </div> -->

      <!-- <div class="mx-auto max-w-[1920px] pb-8 px-4 md:px-8 xl:px-16 2xl:px-16 py-0">
        <a href="javascript:void(0)"  ><img src="~/assets/images/food/discount-bottom.webp" class="max-w-full rounded-lg"/></a>
      </div> -->
        <!-- <div class="mx-auto max-w-[1920px] pb-8 px-4 md:px-8 xl:px-16 2xl:px-16 py-0">
        <a @click="registerRes()"  ><img src="~/assets/images/register-your-restaurant.webp" class="cursor-pointer max-w-full rounded-lg"/></a>
      </div> -->

      <!-- <div class="mx-auto max-w-[1920px] pb-8 px-4 md:px-8 xl:px-16 2xl:px-16 py-0">
        <a :href="localePath('/legal/gintaa-food/lowest-menu-price')" ><img src="~/assets/images/food/foodgurantee-bottom.webp" class="max-w-full rounded-lg"/></a>
      </div> -->

      <div class="mx-auto max-w-[1920px] pb-4 px-4 md:px-8 xl:px-16 2xl:px-16 py-0 sm:pb-4 md:pb-4 lg:pb-10">
        <div
          class="flex justify-between items-end relative rounded-lg bg-gray-200 pt-5 md:pt-8 lg:pt-10 xl:pt-14 px-6 md:px-12 lg:px-20 2xl:px-24 3xl:px-36 border-independence gstore">
          <div
            class="flex-shrink-0 w-full sm:w-60 md:w-96 lg:w-auto lg:max-w-lg xl:max-w-3xl lg:flex lg:items-center pb-5 md:pb-8 lg:pb-12 xl:pb-16 z-10">
            <div class="py-4 md:py-6 xl:py-8 text-left sm:text-start">
              <div>
                <h3
                  class="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-normal -mt-1 mb-2 md:mb-3 lg:mb-3.5 xl:mb-4">
                  {{ $t('chargesMenuPrice') }}</h3>
                <h2
                  class="hidden lg:block text-heading text-md sm:text-xl md:text-2xl xl:text-2xl 2xl:text-4xl font-bold leading-7 sm:leading-8 md:leading-snug xl:leading-relaxed 2xl:leading-snug mb-6 md:mb-8 lg:mb-9 xl:mb-12 2xl:mb-14 lg:pe-20 2xl:pe-0">
                  {{ $t('downloadGintaaFood') }}</h2>
              </div>
              <div class="flex justify-center sm:justify-start space-s-2 md:space-s-3 px-6 sm:px-0">
                <a href="https://apps.apple.com/in/app/gintaa/id1583773926" target="_blank"
                  class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80">
                  <img src="~/assets/images/food/app-store.svg" alt="App Store" width="209" height="60"></a>
                <a href="https://play.google.com/store/apps/details?id=com.asconsoft.gintaa.prod" target="_blank"
                  class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80">
                  <img src="~/assets/images/food/play-store.svg" alt="Play Store" class="ml-3" width="209"
                    height="60"></a>
              </div>
            </div>
          </div>
          <div class="hidden sm:flex items-end ps-4 -me-0.5 2xl:-me-1.5 w-60 md:w-72 lg:w-96 xl:w-auto z-10">
            <span><img src="~/assets/images/food/app_screen_english.png" alt="Play Store" class="m-w-full"></span>
          </div>
        </div>
      </div>

    </div>

  </div>

  <GintaaFoodAtomsLogoutConfirmation v-if="showLogoutConfirmationPopup" @cancelLogout="cancelLogout" />

    <GintaaFoodConsumerFooter />
  </div>
</template>
   
<script lang="ts">
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import { mapState, mapGetters } from 'vuex'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default Vue.extend({
  name: 'FoodIndex',
  components: {
    VueSlickCarousel
  },

  head() {
    return {
      title: "gintaa food - Order from the Lowest Food Prices Online",
      meta: [{
        hid: 'description',
        name: 'description',
        content: "Get your hands on your favorite cuisines near you. Great discounts,  no compromised quality & portion, 30+ cuisines all at the lowest Price available online.",

      },
      {
        name: 'Keywords',
        content: "order food online, lowest food price online, online food delivery near me",

      }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'https://schema.org/',
            '@type': 'WebSite',
            name: 'gintaa food',
            url: 'https://gintaa.com/gintaa-food',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://gintaa.com/gintaa-food{search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }
        }
      ]
    }
  },

  data() {
    return {
      showLogoutConfirmationPopup:false,
      showLoader: true,
      isElegibaleForFood: false,
      pinEligibleCodeList: [],
      CDN_BASE_URL: this.$config.CDN_BASE_URL,
      remotConfigSuffix: this.$config.remotConfigSuffix,
      gcpSubFolder: this.$config.gcpSubFolder,
      remoteData: {
        web_home_bottom_banner: {}
      },

      settings: [{
        "arrows": false,
        "dots": true,
        "fade": true,
        "speed": 1000,
        //    "infinite": true,
        "initialSlide": 0,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "swipe": true,
        "touchMove": true,
        "autoplay": true,
        "pauseOnHover": true,

        //    "centerPadding": "10px",
        //    "centerMode": true,

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
              "slidesToShow": 1,
              "slidesToScroll": 1,
            }
          },
          {
            "breakpoint": 800,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "swipe": true,
              "touchMove": true,
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
              "swipe": true,
              "touchMove": true,
              //  "centerMode": true,
              //  "centerPadding": "5px",


            }
          }
        ]
      }],
      selectedAddress: null,
      searchTypeList: [{
        'value': 'resturant',
        'checked': true,
        'searchtype': 'Resturant' //this.$t('usedCondition')
      },
      {
        'value': 'dish',
        'checked': false,
        'searchtype': 'Dish'//this.$t('newCondition')
      }]
    }
  },
  mounted() {
    this.fetchAndProcessCmsData()
  },

  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapState({
      firstName: (state) => {
        return state.authUser.displayName ? state.authUser.displayName.replace(/ .*/, '') : ''
      }
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },

  methods: {

    cancelLogout(){
        this.showLogoutConfirmationPopup = false
      },
      
    registerRes(){
    
        
          if(this.authUser){
          this.showLogoutConfirmationPopup = true
          }else{
            this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant`)})
          }
        
    },
    selectedLocation(location) {
      console.log("food  selectedLocation in home page:", location)
      this.selectedAddress = location
      //  && this.authUser

      if(!this.selectedAddress){
        this.showLoader = false
      }

     // console.log("this.selectedAddress",this.selectedAddress)
     
      if (this.selectedAddress) {
        this.checkFoodViewEligibility()
        
      }
    },

    async checkFoodViewEligibility() {
      try {
        let url = `/forder/v1/eligibility?pincode=${this.selectedAddress?.zip}`;
        
        const data = await this.$axios.$get(url);
       // console.log("data to check eligibility",data.payload)
        let isUserEligibleForFood = data.payload?.eligible
        this.showLoader = false
        if (isUserEligibleForFood) {
          this.isElegibaleForFood = true
        } else {
          this.isElegibaleForFood = false
        }
       // this.isEligibleForFood = data?.payload?.eligible
      
       
      } catch (error) {
        this.showLoader = false
        console.log(error);

      }

    },







    async fetchAndProcessCmsData() {
      try {
        let locale = this.$i18n.locale
        // delete this.$axios.defaults.headers.common["Authorization"];
        // const data = await this.$axios.get(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`)
        const data = await fetch(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`).then((r) => r.json());
        // console.log('index CMS Data:', data)
        let responseData
        if (data) {
          responseData = data.data
          responseData.map((item) => {
            const key = item.attributes.parameter;
            // console.log('keys:', key)
            if (this.remoteData[key] !== undefined) {
              let paramVal = item.attributes.value;
              // console.log('paramVal:', key, paramVal);
              this.remoteData[key] = paramVal || {};
            } else {
              // console.log('other keys:', key)
            }
          })

        }
        return responseData
      } catch (error) {
        console.log(error);
        return error
      }
    },
  }
});
</script>