<template>
  <div v-if="allGiftVoucher && allGiftVoucher.length">
    <div class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16  lg:pb-2 sectionp-3">
      <div class="w-full relative independence-head newyear-heading htitle-18">
        <div class="text-center mb-3 md:mb-5 lg:mb-8 2xl:mb-8">
          <h3
            class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-0 sm:mb-2 md:mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
            <a :href="localePath('/coupon/all-coupons')" class="text-gray-600"><span> {{$t('giftVoucherHeading')}} </span></a>
          </h3>
          <span class="hidden lg:block text-gray-400 text-sm font-normal"> {{$t('giftVouchertitle')}} </span>
        </div>
        <!-- <a href="#"
          class="absolute text-sm right-0 top-[20px] z-40  hidden lg:block bg-firoza text-white px-3 py-2 rounded-sm">View
          All</a> -->
          
          <div class="min-h-[200px]" v-if="              
              buy_with_coins &&
              buy_with_coins.visibility
            ">
            <div class="text-left mb-3 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
            <h3
              class="section-title sub-heading text-gray-600 text-base md:text-2xl font-bold px-3 md:px-0  relative mb-0 inline-block"
            >
              <span class=""> {{$t('spendcoinproduct')}} </span>
            </h3>
            <!-- <span class="block text-gray-400 text-sm font-normal"
              >{{$t('giftVoucherTitle')}}</span> -->
          </div>
          <client-only>
            <HomeRecentTop
              :search_value="buy_with_coins.search_value"
              :item_show_number="buy_with_coins.item_show_number"
              :filter_type="buy_with_coins.filter_type"
              class="independence-head htitle-18 buy-coin-head buy-coin-view-all" />
          </client-only>
        </div>
          <div class="text-left mb-3 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8" v-if="
              buy_with_coins &&
              buy_with_coins.visibility
            ">
            <h3
              class="section-title sub-heading text-gray-600 text-base md:text-2xl font-bold px-3 mt-3 ml:mt-0 md:px-0 relative mb-0 inline-block"
            >
              <span class=""> {{$t('giftCardHeading')}} </span>
            </h3>
            <!-- <span class="block text-gray-400 text-sm font-normal"
              >{{$t('giftVoucherTitle')}}</span> -->
          </div>

          <div class="w-full relative top-category-sec popular-brand-scroll tpc-custom">
          
            <VueSlickCarousel class="vcustom-slider" v-bind="settings">
              <a 
                v-for="(item, index) of allGiftVoucher"
                :key="'voucher-'+index"
                @click="redirectToVoucherDetailPage('/voucher/voucherdetails/'+item.couponCode, isSoldOut(item))"
                href="javascript:;"
                :class="isSoldOut(item) ? 'pointer-events-none' : ''"
                class="group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 pb-0 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 "
                :title="item.couponName">
                <div class="product-img flex mb-2 md:mb-3.5 relative">
                    <div 
                      v-if="isSoldOut(item)"
                      class="text-errortext text-xl absolute z-20 py-2 px-3 border-2 border-errortext top-5 -rotate-12 left-2"
                      >sold out</div>
                    
                    <img v-if="allGiftVoucher.length > 2" :src="item.imageUrls['620x515']" :alt="item.couponName"
                      :class="isSoldOut(item) ? 'opacity-30' : ''"
                      class="bg-gray-300 object-cover rounded-s-md w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" />
                    
                      <img v-else :src="item.imageUrls['880x310']" :alt="item.couponName"
                      :class="isSoldOut(item) ? 'opacity-30' : ''"
                      class="bg-gray-300 object-cover rounded-s-md w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" />
                    
                </div>

              </a>
            </VueSlickCarousel>

          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'

export default Vue.extend({
  name: 'GiftVoucherRedemtion',
  props:['buy_with_coins'],
  components: { VueSlickCarousel },
  data() {
    return {      
      authUser : this.$store.state.authUser,
      loading: false,
      apiUrls: this.$config.apiUrls,
      allGiftVoucher: [],
      settings: [{
             "arrows": true,
             "dots": false,
             "speed": 500,
             "infinite": true,
             "initialSlide": 0,
             "slidesToShow": 4, 
             "slidesToScroll": 4, 
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
                  "swipe": true, 
                  "touchMove": true
                                            
               }
             },
             {
               "breakpoint": 480,
               "settings": {
                 "slidesToShow": 2, 
                 "slidesToScroll": 2,
                   "touchMove": true,
                   "swipe": true, 
                   "centerMode": true,
                 "centerPadding": "20px",         
               }
             }
           ]
           }]
    }
  },
  mounted() {
    this.getAllGiftVoucher()
  },
  methods: {
    async getAllGiftVoucher() {
      this.loading = true
      const params = '' //'?page=0&size=30'
      const requestPath = this.apiUrls.allCouponList + params
      const giftVoucherResponse = await this.$axios.get(requestPath)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error.response.data
        })
      this.loading = false
      // console.log('recentListingResponse:', recentListingResponse)
      if (giftVoucherResponse && giftVoucherResponse.success) {
        this.allGiftVoucher = giftVoucherResponse.payload
      }
    },

    redirectToVoucherDetailPage(redirectPath, isSoldOut){
      if(!isSoldOut){
        let redirectUrl = this.localePath(redirectPath)
        if(this.authUser) {        
          this.$router.push({path:redirectUrl})
        } else {
          // redirect to login page
          // Save redirect url to localStorage for unauth user
          localStorage.setPath = redirectUrl
          let loginPath = this.localePath('/login')
          this.$router.push({path:loginPath})
        }
      }
    },

    isSoldOut(item){
      return item.available ? false : true
    }

  }
})
</script>
<style scoped>
.independence-head.newyear-heading .sub-heading{
    background: none !important;
    color: #4a4a4a !important;
    height:auto !important;
    width: auto !important;
    line-height: 45px !important;
  }
.independence-head.newyear-heading .sub-heading span{
    color: #4a4a4a !important;
  }

  @media only screen and (min-device-width: 0px) and (max-device-width: 767px){
    .independence-head.newyear-heading .sub-heading{    
    line-height: 15px !important;
  }
  }

</style>