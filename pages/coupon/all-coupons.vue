<template>
    <div class="shipment-tracking-page pt-[80px] lg:pt-12">
      <!--//////////header///////////-->
      <Header />
      <!--////////Breadcrumb//////////-->
      <div class="container max-w-8xl mx-auto md:px-8 2xl:px-16 pt-10 hidden md:flex">
        <breadcrumb :breadcrumb="breadcrumb" />
      </div>
      <div class="container max-w-8xl mx-auto  sm:px-4 md:px-8 2xl:px-16 pt-5">
        <div class="mx-auto pb-14 min-h-[400px]">
          <div class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
            <h3
              class="section-title text-gray-600 text-base md:text-2xl font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5 before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5 after:top-4 after:-right-14"
            >
              <span class=""> {{$t('giftVoucherHeading')}} </span>
            </h3>
            <span class="block text-gray-400 text-sm font-normal"
              >{{$t('giftVoucherTitle')}}</span
            >
          </div>
          <div class="min-h-[200px]" v-if="
              remoteData.web_home_category_wise_product_list &&
              remoteData.web_home_category_wise_product_list.buy_with_coins &&
              remoteData.web_home_category_wise_product_list.buy_with_coins.visibility
            ">
            <div class="text-left mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
            <h3
              class="section-title text-gray-600 text-base md:text-2xl font-bold px-3 md:px-0  relative mb-2 inline-block"
            >
              <span class=""> {{$t('spendcoinproduct')}} </span>
            </h3>
            <!-- <span class="block text-gray-400 text-sm font-normal"
              >{{$t('giftVoucherTitle')}}</span> -->
          </div>
          <client-only>
            <div v-if="
              remoteData.web_home_category_wise_product_list &&
              remoteData.web_home_category_wise_product_list.buy_with_coins &&
              remoteData.web_home_category_wise_product_list.buy_with_coins.visibility
            " class="mx-auto lg:pb-14 sectionp-4">

              <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.buy_with_coins.section_title"
                :section_description="remoteData.web_home_category_wise_product_list.buy_with_coins.section_description"
                :search_value="remoteData.web_home_category_wise_product_list.buy_with_coins.search_value"
                :item_show_number="remoteData.web_home_category_wise_product_list.buy_with_coins.item_show_number"
                :filter_type="remoteData.web_home_category_wise_product_list.buy_with_coins.filter_type"
                class="independence-head htitle-18 buy-coin-head" />
            </div>
          </client-only>
        </div>
          <div class="text-left mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8" v-if="
              remoteData.web_home_category_wise_product_list &&
              remoteData.web_home_category_wise_product_list.buy_with_coins &&
              remoteData.web_home_category_wise_product_list.buy_with_coins.visibility
            ">
            <h3
              class="section-title text-gray-600 text-base md:text-2xl font-bold px-3 mt-3 ml:mt-0 md:px-0 relative mb-2 inline-block"
            >
              <span class=""> {{$t('giftCardHeading')}} </span>
            </h3>
            <!-- <span class="block text-gray-400 text-sm font-normal"
              >{{$t('giftVoucherTitle')}}</span> -->
          </div>
          <div class="px-3 md:px-0">
          <div
            v-if="allCoupons.length > 0"
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-2 md:gap-3 lg:gap-5 xl:gap-7 "
          >
          <!-- :href="localePath(couponlink(item))" -->
            <a
              v-for="item in allCoupons"
              :key="item.couponCode"              
              @click="redirectToVoucherDetailPage(couponlink(item), isSoldOut(item))"
              href="javascript:;"
              :class="isSoldOut(item) ? 'pointer-events-none' : ''"
              class="cursor-pointer group box-border overflow-hidden flex rounded-md cursor-pointer pe-0 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5"
              title="Rings"
            >
              <div class="product-img flex ">
                <div 
                  v-if="isSoldOut(item)"
                  class="text-errortext text-xl absolute z-20 py-2 px-3 border-2 border-errortext top-5 -rotate-12 left-2"
                  >sold out</div>
                <img
                  :src="filterImageUrl(item.imageUrls)"
                  :alt="item.couponName"
                  :class="isSoldOut(item) ? 'opacity-30' : ''"
                  class="bg-gray-300 object-cover w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none"
                  />
              </div>
            </a>
          </div>
        </div>
        </div>
      </div>
  
      <div v-show="loading" class="py-6 flex justify-center">
        <Spinner />
      </div>
  
      <Trigger @triggerIntersected="loadMore" />
      <!--footer section goes here-->
      <Footer />
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default Vue.extend({
    name: "AllCoupons",
    components: {
      // SplitCarousel,
      // SplitCarouselItem
      VueSlickCarousel
    },
    data() {
      return {
        authUser : this.$store.state.authUser,
        breadcrumb: [
          {
            name: this.$t("giftVoucherHeading"),
          },
        ],
        loading: true,
  
        page: 0,
        transactionList: [],
        enableSearchMore: true,
        allCoupons : [],
        totalPurchasedCard : null,

        remoteData: {
          web_home_category_wise_product_list: {}
        }
      };
    },
    computed: {
  
  },
    beforeMount() {
    this.allCouponsList()
    },
    mounted() {
        
      this.fetchAndProcessCmsData()
    },
    methods: {
  
      
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
            responseData.map((item: any) => {
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
      filterImageUrl(imageUrls:any){
      if(imageUrls){
        return imageUrls['620x515']
      }
  
      },
      couponlink (coupon:any) {
        return `/voucher/voucherdetails/${coupon?.couponCode}`
      },
      redirectToVoucherDetailPage(redirectPath: string, isSoldOut: boolean){
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
  
      async allCouponsList() {
        this.loading = true
        try {
          const url = `/wallet/v1/wallet/coupon-code/all?page=${this.page}&size=12`;
          const data = await this.$axios.$get(url);
          console.log("Data",data)
  
  
  
        if (this.page === 0) {
          this.allCoupons = data.payload
        } else if (data.payload.length > 0) {
          this.allCoupons.push(...data.payload)
        }
  
        this.enableSearchMore = data.payload.length > 0
  
        this.loading = false
  
        } catch (error) {
        if (this.page === 0) {
          this.allCoupons = []
        }
        this.loading = false
        this.enableSearchMore = false
  
        }
      }, 
  
      loadMore() {
        if (!this.loading && this.enableSearchMore) {
          this.page++;
          this.allCouponsList();
        }
      },

      isSoldOut(item: any){
        return item.available ? false : true
      }
  
  
  
  
  
    },
  });
  </script>
  
  <style>
  .-z-1 {
    z-index: -1;
  }
  
  .origin-0 {
    transform-origin: 0%;
  }
  
  input[type="text"]:focus ~ label,
  input[type="email"]:focus ~ label,
  input[type="text"]:not(:placeholder-shown) ~ label,
  input[type="email"]:not(:placeholder-shown) ~ label,
  textarea:focus ~ label,
  textarea:not(:placeholder-shown) ~ label,
  select:focus ~ label,
  select:not([value=""]):valid ~ label {
    /* @apply transform; scale-75; -translate-y-6; */
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
      rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-scale-x: 0.75;
    --tw-scale-y: 0.75;
    --tw-translate-y: -1.5rem;
  }
  
  input[type="text"]:focus ~ label,
  input[type="email"]:focus ~ label,
  select:focus ~ label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(72, 206, 243, var(--tw-text-opacity));
    left: 0px;
  }
  .buy-coin-head h3, .buy-coin-head  .giftcard-sub{
    display: none !important;
  }
  .buy-coin-head .viewgiftcardall{

    top:-60px;

  }
  </style>
  