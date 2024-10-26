<template>
  <div class="shipment-tracking-page pt-[80px] lg:pt-12 bg-[#f1f1f1]">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class="mx-auto max-w-[1920px] md:px-8 2xl:px-16 pt-10 hidden md:flex">
      <breadcrumb v-if="breadcrumb.length > 0" :breadcrumb="breadcrumb" />
    </div>
    <div class="container max-w-[1000px] mx-auto px-4 md:px-8 2xl:px-16 pt-5">
      <div class="mx-auto pb-14 mt-4 sm:mt-4 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
        <div class="w-full block justify-between sm:flex md:flex lg:flex xl:flex 2xl:flex">
          <div class="feature-ad">
            <div class="text-base font-medium text-gray-900 capitalize">{{ $t('premiumAd') }}</div>
            <div class="mt-4">
              <ul class="list-none">
                <li class="flex items-start mb-2 relative pl-2">
                  <svg width="12" height="9" class="mt-[3px] absolute top-0 left-0" viewBox="0 0 12 9" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.1897 2.50446C11.1897 2.33705 11.1228 2.16964 11.0022 2.04911L10.0915 1.13839C9.97098 1.01786 9.80357 0.950892 9.63616 0.950892C9.46875 0.950892 9.30134 1.01786 9.1808 1.13839L4.78795 5.53795L2.8192 3.5625C2.69866 3.44196 2.53125 3.375 2.36384 3.375C2.19643 3.375 2.02902 3.44196 1.90848 3.5625L0.997768 4.47321C0.877232 4.59375 0.810268 4.76116 0.810268 4.92857C0.810268 5.09598 0.877232 5.26339 0.997768 5.38393L3.42188 7.80804L4.33259 8.71875C4.45313 8.83929 4.62054 8.90625 4.78795 8.90625C4.95536 8.90625 5.12277 8.83929 5.2433 8.71875L6.15402 7.80804L11.0022 2.95982C11.1228 2.83929 11.1897 2.67188 11.1897 2.50446Z"
                      fill="black" fill-opacity="0.4" />
                  </svg>
                  <span class="text-xs text-[#626365] pl-2">{{ $t('premiumPara') }}</span>
                </li>
              </ul>
            </div>
          </div>



          <a :href="localePath('/feature-ad-example')"
            class="text-center py-2 flex items-center justify-center rounded-md text-sm px-4 text-firoza border-firoza border h-9 hover:bg-firoza hover:text-white mt-4 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
            <span> {{ $t('seeHowLooks') }}</span>
          </a>

        </div>

        <div
          class="grid grid-cols-3 mt-8 sm:grid-cols-3 sm:mt-8 md:grid-cols-3 md:mt-16 lg:grid-cols-3 lg:mt-16 xl:grid-cols-3 xl:mt-16 2xl:grid-cols-3 2xl:mt-16 gap-2 md:gap-3 lg:gap-5 xl:gap-5 ">


          <div v-if="seamerLoading"
            class="relative p-4 w-full bg-white overflow-hidden shadow hover:shadow-md rounded-lg loader-mobile">
            <div class=" animate-pulses flex flex-col">
              <div class="flex items-center justify-center">
                <div class="w-24 h-4 bg-gray-200 rounded shimmerBG"></div>
              </div>
              <div class="rounded w-full h-12 bg-gray-200 shimmerBG mt-4"></div>
              <div class="flex items-center mt-4 pr-4">
                <div class="mt-2 w-3 h-3 bg-gray-200 mr-3 rounded-full flex-shrink-0 shimmerBG"></div>
                <div class="mt-2 w-full h-1.5 bg-gray-200 rounded flex-1 shimmerBG"></div>
              </div>
              <div class="flex items-center mt-2 pr-2">
                <div class="mt-2 w-3 h-3 bg-gray-200 mr-3 rounded-full flex-shrink-0 shimmerBG"></div>
                <div class="mt-2 w-full h-1.5 bg-gray-200 rounded flex-1 shimmerBG"></div>
              </div>
              <div class="flex items-center mt-2 pr-4">
                <div class="mt-2 w-3 h-3 bg-gray-200 mr-3 rounded-full flex-shrink-0 shimmerBG"></div>
                <div class="mt-2 w-full h-1.5 bg-gray-200 rounded flex-1 shimmerBG"></div>
              </div>
              <div class="flex items-center mt-2 pr-2">
                <div class="mt-2 w-3 h-3 bg-gray-200 mr-3 rounded-full flex-shrink-0 shimmerBG"></div>
                <div class="mt-2 w-full h-1.5 bg-gray-200 rounded flex-1 shimmerBG"></div>
              </div>
              <div class="flex items-center justify-center mt-6">
                <div class="w-36 h-10 bg-gray-200 rounded-full shimmerBG"></div>
              </div>
            </div>
          </div>
          <div v-if="seamerLoading"
            class="relative p-4 w-full bg-white overflow-hidden shadow hover:shadow-md rounded-lg loader-mobile">
            <div class=" animate-pulses flex flex-col">
              <div class="flex items-center justify-center">
                <div class="w-24 h-4 bg-gray-200 rounded shimmerBG"></div>
              </div>
              <div class="rounded w-full h-12 bg-gray-200 shimmerBG mt-4"></div>
              <div class="flex items-center mt-4 pr-4">
                <div class="mt-2 w-3 h-3 bg-gray-200 mr-3 rounded-full flex-shrink-0 shimmerBG"></div>
                <div class="mt-2 w-full h-1.5 bg-gray-200 rounded flex-1 shimmerBG"></div>
              </div>
              <div class="flex items-center mt-2 pr-2">
                <div class="mt-2 w-3 h-3 bg-gray-200 mr-3 rounded-full flex-shrink-0 shimmerBG"></div>
                <div class="mt-2 w-full h-1.5 bg-gray-200 rounded flex-1 shimmerBG"></div>
              </div>
              <div class="flex items-center mt-2 pr-4">
                <div class="mt-2 w-3 h-3 bg-gray-200 mr-3 rounded-full flex-shrink-0 shimmerBG"></div>
                <div class="mt-2 w-full h-1.5 bg-gray-200 rounded flex-1 shimmerBG"></div>
              </div>
              <div class="flex items-center mt-2 pr-2">
                <div class="mt-2 w-3 h-3 bg-gray-200 mr-3 rounded-full flex-shrink-0 shimmerBG"></div>
                <div class="mt-2 w-full h-1.5 bg-gray-200 rounded flex-1 shimmerBG"></div>
              </div>
              <div class="flex items-center justify-center mt-6">
                <div class="w-36 h-10 bg-gray-200 rounded-full shimmerBG"></div>
              </div>
            </div>
          </div>
          <div v-if="seamerLoading"
            class="relative p-4 w-full bg-white overflow-hidden shadow hover:shadow-md rounded-lg loader-mobile">
            <div class=" animate-pulses flex flex-col">
              <div class="flex items-center justify-center">
                <div class="w-24 h-4 bg-gray-200 rounded shimmerBG"></div>
              </div>
              <div class="rounded w-full h-12 bg-gray-200 shimmerBG mt-4"></div>
              <div class="flex items-center mt-4 pr-4">
                <div class="mt-2 w-3 h-3 bg-gray-200 mr-3 rounded-full flex-shrink-0 shimmerBG"></div>
                <div class="mt-2 w-full h-1.5 bg-gray-200 rounded flex-1 shimmerBG"></div>
              </div>
              <div class="flex items-center mt-2 pr-2">
                <div class="mt-2 w-3 h-3 bg-gray-200 mr-3 rounded-full flex-shrink-0 shimmerBG"></div>
                <div class="mt-2 w-full h-1.5 bg-gray-200 rounded flex-1 shimmerBG"></div>
              </div>
              <div class="flex items-center mt-2 pr-4">
                <div class="mt-2 w-3 h-3 bg-gray-200 mr-3 rounded-full flex-shrink-0 shimmerBG"></div>
                <div class="mt-2 w-full h-1.5 bg-gray-200 rounded flex-1 shimmerBG"></div>
              </div>
              <div class="flex items-center mt-2 pr-2">
                <div class="mt-2 w-3 h-3 bg-gray-200 mr-3 rounded-full flex-shrink-0 shimmerBG"></div>
                <div class="mt-2 w-full h-1.5 bg-gray-200 rounded flex-1 shimmerBG"></div>
              </div>
              <div class="flex items-center justify-center mt-6">
                <div class="w-36 h-10 bg-gray-200 rounded-full shimmerBG"></div>
              </div>
            </div>
          </div>



          <div v-for="(item, index) in premiumPricingList" :key="index" class="bg-white rounded-md py-4">
            <div class="flex items-center justify-center text-base text-[#585757] font-medium"> {{ item.noOfDays }} {{
              $t('cl_days') }}
            </div>
            <div class="pay-shadow flex items-center justify-center mt-4 py-6 px-2" :class="'pay-' + (index + 1)">
              <span class="flex items-center mr-[8px] relative pl-[10px]">
                <svg v-if="item.price" width="6" height="11" viewBox="0 0 11 18" fill="none"
                  class="absolute top-[7px] left-[2px]">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                    fill="#ffffff"></path>
                </svg>
                <span class="text-4xl text-white font-bold">{{ item.price ? item.price : $t('premiumFree') }}</span>
              </span>
            </div>
            <div class="mt-6 px-4">
              <ul class="list-none">
                <li class="flex items-start mb-3 relative pl-2">
                  <svg width="10" height="10" class="mt-[3px] absolute top-0 left-0" viewBox="0 0 10 10" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.999 0.00244141C7.7575 0.00244141 9.9975 2.24244 9.9975 5.00094C9.9975 7.75994 7.7575 9.99994 4.999 9.99994C2.24 9.99994 0 7.75994 0 5.00094C0 2.24244 2.24 0.00244141 4.999 0.00244141ZM2.4745 5.19544L4.4 6.91044C4.471 6.97444 4.5605 7.00544 4.6495 7.00544C4.7505 7.00544 4.852 6.96494 4.9255 6.88444L7.902 3.62994C7.9675 3.55844 8 3.46844 8 3.37894C8 3.17394 7.8345 3.00544 7.626 3.00544C7.524 3.00544 7.4235 3.04644 7.349 3.12694L4.6225 6.10794L2.9735 4.63894C2.9015 4.57544 2.813 4.54394 2.724 4.54394C2.5165 4.54394 2.35 4.71144 2.35 4.91694C2.35 5.01944 2.392 5.12144 2.4745 5.19544Z"
                      fill="#3EE097" />
                  </svg>
                  <span class="text-xs text-[#726F6F] pl-2">{{ $t('premiumTagParaOne') }}</span>
                </li>
                <li class="flex items-start mb-3 relative pl-2">
                  <svg width="10" height="10" class="mt-[3px] absolute top-0 left-0" viewBox="0 0 10 10" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.999 0.00244141C7.7575 0.00244141 9.9975 2.24244 9.9975 5.00094C9.9975 7.75994 7.7575 9.99994 4.999 9.99994C2.24 9.99994 0 7.75994 0 5.00094C0 2.24244 2.24 0.00244141 4.999 0.00244141ZM2.4745 5.19544L4.4 6.91044C4.471 6.97444 4.5605 7.00544 4.6495 7.00544C4.7505 7.00544 4.852 6.96494 4.9255 6.88444L7.902 3.62994C7.9675 3.55844 8 3.46844 8 3.37894C8 3.17394 7.8345 3.00544 7.626 3.00544C7.524 3.00544 7.4235 3.04644 7.349 3.12694L4.6225 6.10794L2.9735 4.63894C2.9015 4.57544 2.813 4.54394 2.724 4.54394C2.5165 4.54394 2.35 4.71144 2.35 4.91694C2.35 5.01944 2.392 5.12144 2.4745 5.19544Z"
                      fill="#3EE097" />
                  </svg>
                  <span class="text-xs text-[#726F6F] pl-2">{{ $t('premiumTagParatwo') }}</span>
                </li>
                <li class="flex items-start mb-3 relative pl-2">
                  <svg width="10" height="10" class="mt-[3px] absolute top-0 left-0" viewBox="0 0 10 10" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.999 0.00244141C7.7575 0.00244141 9.9975 2.24244 9.9975 5.00094C9.9975 7.75994 7.7575 9.99994 4.999 9.99994C2.24 9.99994 0 7.75994 0 5.00094C0 2.24244 2.24 0.00244141 4.999 0.00244141ZM2.4745 5.19544L4.4 6.91044C4.471 6.97444 4.5605 7.00544 4.6495 7.00544C4.7505 7.00544 4.852 6.96494 4.9255 6.88444L7.902 3.62994C7.9675 3.55844 8 3.46844 8 3.37894C8 3.17394 7.8345 3.00544 7.626 3.00544C7.524 3.00544 7.4235 3.04644 7.349 3.12694L4.6225 6.10794L2.9735 4.63894C2.9015 4.57544 2.813 4.54394 2.724 4.54394C2.5165 4.54394 2.35 4.71144 2.35 4.91694C2.35 5.01944 2.392 5.12144 2.4745 5.19544Z"
                      fill="#3EE097" />
                  </svg>
                  <span class="text-xs text-[#726F6F] pl-2">{{ $t('premiumTagParaThree') }}</span>
                </li>
                <li class="flex items-start mb-0 relative pl-2">
                  <svg width="10" height="10" class="mt-[3px] absolute top-0 left-0" viewBox="0 0 10 10" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.999 0.00244141C7.7575 0.00244141 9.9975 2.24244 9.9975 5.00094C9.9975 7.75994 7.7575 9.99994 4.999 9.99994C2.24 9.99994 0 7.75994 0 5.00094C0 2.24244 2.24 0.00244141 4.999 0.00244141ZM2.4745 5.19544L4.4 6.91044C4.471 6.97444 4.5605 7.00544 4.6495 7.00544C4.7505 7.00544 4.852 6.96494 4.9255 6.88444L7.902 3.62994C7.9675 3.55844 8 3.46844 8 3.37894C8 3.17394 7.8345 3.00544 7.626 3.00544C7.524 3.00544 7.4235 3.04644 7.349 3.12694L4.6225 6.10794L2.9735 4.63894C2.9015 4.57544 2.813 4.54394 2.724 4.54394C2.5165 4.54394 2.35 4.71144 2.35 4.91694C2.35 5.01944 2.392 5.12144 2.4745 5.19544Z"
                      fill="#3EE097" />
                  </svg>
                  <span class="text-xs text-[#726F6F] pl-2">{{ $t('premiumTagParaFour') }}</span>
                </li>
              </ul>
            </div>

            <div class="flex items-center justify-center mt-6">
              <a :class="isEligibleForPremium ? 'cursor-pointer' : 'disabled cursor-not-allowed'"
                @click="isEligibleForPremium ? premiumNow(item, index) : false"
                class="text-center  py-2 text-white flex items-center pay-1 justify-center rounded-full text-sm px-4 h-9 sm:px-8 md:px-8 lg:px-8 xl:px-8 2xl:px-8 ">
                <span v-show="!loading && indexValue !== null ? indexValue !== index : true">{{ item.price ? $t('paynow') :
                  $t('premiumNow') }}</span>
                <span>
                  <Spinner v-show="loading && indexValue !== null ? indexValue == index : false" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--footer section goes here-->
    <Footer />

    <!-- successful modal end   -->
    <div v-if="showSuccessFulPopup" class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
            <div class="absolute top-0 right-0 pt-2 pr-2 sm:block">

            </div>
            <div>
              <div class="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-green">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-5">
                <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">{{ $t('premiumListing') }}</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-900">{{ $t('premiumListingPara') }}</p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">
              <a :href="localePath(returnUrl)"
                class="cursor-pointer inline-flex w-full justify-center rounded-md border border-transparent bg-green px-4 py-2 text-sm font-medium text-white shadow-sm ">{{
                  $t('goBackPreviousPage') }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- successful modal end   -->


  </div>
</template>







<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: "authenticated",
  name: 'featurelisitng',
  data() {
    return {
      indexValue: null,
      seamerLoading: true,
      loading: false,
      isEligibleForPremium: false,
      offerId: '',
      returnUrl: '',
      returnPath: '',
      showSuccessFulPopup: false,
      returnUrlLink: '',
      CDN_BASE_URL: this.$config.CDN_BASE_URL,
      remotConfigSuffix: this.$config.remotConfigSuffix,
      premiumPricingList: [],
      remoteData: {
        web_premium_price_list: {}
      },

      featuredObj: {
        offerId: "",
        paymentGateway: "",
        returnUrl: "",
        individualListingFeaturePricingId: ""
      },
      breadcrumb: [
        {
          name: this.$t('premiumAd'),
        },
      ],
    }
  },

  beforeMount() {
    this.checkPremiumPricelist()

    if (this.$route?.query?.offerId) {
      this.isEligibleForPremium = true
    }
    // this.checkFeaturedEligibility()
    // this.$moment.locale('bn');
  },
  mounted() {

    if (this.$route?.query?.offerId) {
      this.offerId = this.$route.query?.offerId
    }

    if (this.$route?.query?.returnUrl) {
      this.returnUrl = this.$route?.query?.returnUrl
      this.returnUrlLink = this.$route?.query?.returnUrl ? this.$route?.query?.returnUrl : '/my-lisitngs'
      this.returnPath = window.location.host + this.$route?.query?.returnUrl
      //console.log(" this.returnUrl", this.returnUrl ,this.returnPath) this.$router.go(this.$router.currentRoute)
    }


  },

  methods: {
    async fetchAndProcessCmsData() {
      this.seamerLoading = true
      try {
        let locale = this.$i18n.locale
        const data = await fetch(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`).then((r) => r.json());

        let responseData
        if (data) {
          responseData = data.data
          responseData.map((item) => {
            const key = item.attributes.parameter;
            if (this.remoteData[key] !== undefined) {
              let paramVal = item.attributes.value;
              this.remoteData[key] = paramVal || {};
            } else {
              // console.log('other keys:', key)
            }

            this.seamerLoading = false
          })

        }
        return responseData
      } catch (error) {
        this.seamerLoading = false
        console.log(error);
        return error
      }
    },

    async checkPremiumPricelist() {

      try {
        let url = `/subscription/v1/subscription/featured-listing/get-featured-listing-pricing`;
        const data = await this.$axios.$get(url);
        //  console.log("data", data)
        if (data.success) {
          this.premiumPricingList = data?.payload
        } else {
        }
        this.seamerLoading = false
      } catch (error) {
        console.log(error);
        this.seamerLoading = false
      }
    },

    async checkFeaturedEligibility() {
      try {
        let url = `/subscription/v1/subscription/featured-listing/eligibility`;
        const data = await this.$axios.$get(url);
        if (data.success) {
          if (data.payload?.eligibleForFeature && this.$route?.query?.offerId) {
            this.isEligibleForPremium = true
          } else {
            this.isEligibleForPremium = false
          }
        } else {
        }
      } catch (error) {
        console.log(error);
        this.isEligibleForPremium = false
      }
    },
    payNow() {

      if (this.offerId) {

      }
    },

    getReturnUrl(paymentGateway = 'CASHFREE') {
      let returnUrl = (paymentGateway === 'CASHFREE') ? this.localePath(this.$route?.query?.returnUrl) + '?order_id={order_id}' : this.localePath(this.$route?.query?.returnUrl);
      returnUrl = window.location.origin + returnUrl;
      this.featuredObj.returnUrl = returnUrl;
    },

    async premiumNow(premiumItem, indexval) {
      this.indexValue = indexval
      this.getReturnUrl('CASHFREE');
      this.featuredObj.paymentGateway = "CASHFREE"
      this.featuredObj.offerId = this.$route?.query?.offerId
      this.featuredObj.individualListingFeaturePricingId = premiumItem.id
      if (premiumItem.id) {
        this.loading = true
        try {

          const url = `/subscription/v2/subscription/featured-listing/markAsFeatured`;
          const data = await this.$axios.$post(url, this.featuredObj);
          if (data.success) {
            this.loading = false
           
            if (data.payload?.paymentOrderData !== null) {
              const orderId = data.payload?.paymentOrderData.orderId;
              const amount = data.payload?.paymentOrderData.amount;
              data.payload.paymentOrderData.paymentGateway = data.payload.paymentGateway
              this.$router.push({ path: '/payment/' + orderId, query: data.payload.paymentOrderData })
              this.indexValue = null
            } else {
              this.indexValue = null
              this.showSuccessFulPopup = true
            }

          } else {

          }
          this.loading = false
        } catch (error: any) {
          this.loading = false
          this.indexValue = null
          Vue.$toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Something Went Wrong');
        }
      }
    },

    closeSuccesFulPopup() {

    },
    nevigateToSourcePage() {
      //  if(this.returnUrl){
      this.$router.push({ path: this.localePath('/my-listings') })
      //      }
    }
  }
})

</script>

<style>
.-z-1 {
  z-index: -1;
}

.origin-0 {
  transform-origin: 0%;
}

input[type="text"]:focus~label,
input[type="email"]:focus~label,
input[type="text"]:not(:placeholder-shown)~label,
input[type="email"]:not(:placeholder-shown)~label,
textarea:focus~label,
textarea:not(:placeholder-shown)~label,
select:focus~label,
select:not([value='']):valid~label {
  /* @apply transform; scale-75; -translate-y-6; */
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-scale-x: 0.75;
  --tw-scale-y: 0.75;
  --tw-translate-y: -1.5rem;
}

input[type="text"]:focus~label,
input[type="email"]:focus~label,
select:focus~label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(72, 206, 243, var(--tw-text-opacity));
  left: 0px;
}


.pay-1 {
  background: linear-gradient(102.17deg, #56C23B 15.57%, #8EC23B 72.33%);
}

.pay-2 {
  background: linear-gradient(101.5deg, #29B2E9 24.17%, #4B7CFC 78.46%);
}

.pay-3 {
  background: linear-gradient(102.17deg, #F75D00 15.57%, #F77F00 72.33%);
}

.pay-shadow {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}</style>

