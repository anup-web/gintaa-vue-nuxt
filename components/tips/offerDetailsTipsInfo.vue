<template>    
  <div >
    <div v-if="offerState === 'ACCEPTED'" class="relative w-full flex-col bg-white shadow-sm rounded-sm px-3 py-3 ml-0 mt-2 sm:ml-0 sm:mt-2 md:ml-0 md:mt-2 lg:ml-4 lg:mt-0 xl:ml-4 xl:mt-0 2xl:ml-4 2xl:mt-0">
      <div class="flex flex-col w-full">
        <h3 class=" mt-6 md:mt-1 section-title text-gray-600 text-[15px] md:text-lg  font-bold px-5 relative mb-6 inline-block before:bg-green before:absolute before:w-10 before:h-0.5  before:top-[11px] md:before:top-4 before:left-0 after:bg-green after:absolute after:w-10 after:h-0.5  after:top-[11px] md:after:top-4 after:right-0 text-center">
          <span>{{$t('whatsNext')}}</span></h3>

        <div class="pl-[130px] relative pb-10">
          <img src="~/assets/images/meet_partner.svg" alt="meet_partner" class="w-[100px] absolute left-0"/>
          <div class="relative">
          <span class="block font-bold text-[20px] text-[#fff] absolute left-0 z-10 bg-[#aaaaaa] px-2 py-1">01</span>
          <p class="text-gray-500 text-[17px] pt-1 pl-[50px] font-bold relative z-20 ">{{$t('meetGreet')}}</p>
          <p class="text-[12px] pt-4 text-gray-500">{{$t('meetGreetPara')}}</p>
          </div>

        </div>
        <div class="pr-[130px] relative pb-12 text-right">
          <img src="~/assets/images/perform_exchange.svg" alt="perform_exchange" class="w-[100px] absolute right-0"/>
          <div class="relative">
          <span class="block font-bold text-[20px] text-white absolute right-0 z-10 bg-[#aaaaaa] px-2 py-1">02</span>
          <p class="text-gray-500 text-[17px] pt-1 pr-[50px] font-bold relative z-20 text-right"> {{$t('exchangeProductClose')}}</p>
          <p class="text-xs pt-4 text-gray-500 text-right">{{$t('exchangeProductClosePara')}}</p>
          </div>

        </div>
        <div class="pl-[130px] relative pb-6">
          <img src="~/assets/images/tap_close.svg" alt="tap_close" class="w-[100px] absolute left-0"/>
          <div class="relative">
          <span class="block font-bold text-[20px] text-[#fff] absolute left-0 z-10 bg-[#aaaaaa] px-2 py-1">03</span>
          <p class="text-gray-500 text-[17px] pt-1 pl-[50px] font-bold relative z-20 ">{{$t('closeOfferClose')}}</p>
          <p class="text-xs pt-4 text-gray-500">{{$t('closeOfferClosePara')}}</p>
          </div>

        </div>

        <a href="https://academy.gintaa.com/" class="text-green text-sm" target="_blank">{{$t('toknowmoreAcademy')}}</a>

        </div>
      </div>
    <div v-else-if="tipsInfoData && tipsInfoData.length > 0" class="relative w-full flex-col bg-white shadow-sm rounded-sm px-3 py-3 ml-0 mt-2 sm:ml-0 sm:mt-2 md:ml-0 md:mt-2 lg:ml-4 lg:mt-0 xl:ml-4 xl:mt-0 2xl:ml-4 2xl:mt-0">
      <div @click="removeModal()"  class="absolute right-[20px] top-[20px] text-gray-400 cursor-pointer sm:hidden" >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <div class="flex flex-col w-full ">
        <div class="w-full flex items-center mb-4">
            <svg v-if="offerState != 'CLOSED' && offerState != 'REJECTED'" width="40" height="40" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.501 6.70049C21.9708 6.70049 21.5498 6.28364 21.5498 5.75872V0.941775C21.5498 0.416851 21.9708 0 22.501 0C23.0311 0 23.4521 0.416851 23.4521 0.941775V5.75872C23.4521 6.28364 23.0311 6.70049 22.501 6.70049Z" fill="#FECE00"/>
              <path d="M14.1577 8.9082C13.8303 8.9082 13.5185 8.73837 13.3313 8.44504L10.8989 4.27653C10.6338 3.8288 10.7898 3.25756 11.2419 2.9951C11.6941 2.73263 12.271 2.88702 12.5361 3.33475L14.9686 7.50326C15.2336 7.95099 15.0777 8.52223 14.6255 8.78469C14.4852 8.86189 14.3137 8.9082 14.1577 8.9082Z" fill="#FECE00"/>
              <path d="M8.04667 14.9604C7.89074 14.9604 7.71923 14.914 7.57889 14.8369L3.36889 12.4284C2.9167 12.1659 2.76078 11.5947 3.02585 11.1469C3.29093 10.6992 3.86785 10.5448 4.32004 10.8073L8.53004 13.2158C8.98223 13.4782 9.13815 14.0495 8.87308 14.4972C8.68597 14.7905 8.37412 14.9604 8.04667 14.9604Z" fill="#FECE00"/>
              <path d="M41.1658 33.8886C41.0099 33.8886 40.8384 33.8423 40.698 33.7651L36.488 31.3566C36.0358 31.0941 35.8799 30.5229 36.145 30.0752C36.4101 29.6274 36.987 29.4731 37.4392 29.7355L41.6492 32.144C42.1014 32.4065 42.2573 32.9777 41.9922 33.4254C41.8051 33.7188 41.4933 33.8886 41.1658 33.8886Z" fill="#FECE00"/>
              <path d="M5.80045 23.2201H0.951149C0.421 23.2201 0 22.8032 0 22.2783C0 21.7534 0.421 21.3365 0.951149 21.3365H5.81604C6.34619 21.3365 6.76719 21.7534 6.76719 22.2783C6.7516 22.8032 6.3306 23.2201 5.80045 23.2201Z" fill="#FECE00"/>
              <path d="M44.0494 23.2201H39.1845C38.6544 23.2201 38.2334 22.8032 38.2334 22.2783C38.2334 21.7534 38.6544 21.3365 39.1845 21.3365H44.0494C44.5796 21.3365 45.0006 21.7534 45.0006 22.2783C45.0006 22.8032 44.5796 23.2201 44.0494 23.2201Z" fill="#FECE00"/>
              <path d="M3.83663 33.8886C3.50919 33.8886 3.19734 33.7188 3.01023 33.4254C2.74515 32.9777 2.90108 32.4065 3.35326 32.144L7.56326 29.7355C8.01545 29.4731 8.59238 29.6274 8.85745 30.0752C9.12252 30.5229 8.9666 31.0941 8.51441 31.3566L4.30441 33.7651C4.16408 33.8577 3.99256 33.8886 3.83663 33.8886Z" fill="#FECE00"/>
              <path d="M36.9558 14.9604C36.6283 14.9604 36.3165 14.7905 36.1294 14.4972C35.8643 14.0495 36.0202 13.4782 36.4724 13.2158L40.6824 10.8073C41.1346 10.5448 41.7115 10.6992 41.9766 11.1469C42.2417 11.5947 42.0857 12.1659 41.6336 12.4284L37.4236 14.8369C37.2832 14.914 37.1117 14.9604 36.9558 14.9604Z" fill="#FECE00"/>
              <path d="M30.8416 8.90826C30.6856 8.90826 30.5141 8.86195 30.3738 8.78475C29.9216 8.52229 29.7657 7.95105 30.0307 7.50332L32.4632 3.33481C32.7283 2.88708 33.3052 2.7327 33.7574 2.99516C34.2096 3.25762 34.3655 3.82886 34.1004 4.27659L31.668 8.4451C31.4964 8.73844 31.169 8.90826 30.8416 8.90826Z" fill="#FECE00"/>
              <path d="M20.9878 9.23257C14.9067 9.89644 9.99503 14.7751 9.34014 20.7963C8.74763 26.1691 11.4451 30.9706 15.6863 33.4871C16.3256 33.8731 16.731 34.5524 16.731 35.3089V35.3244C16.731 35.3861 16.7778 35.4324 16.8402 35.4324H28.176C28.2384 35.4324 28.2852 35.3861 28.2852 35.3244V35.3089C28.2852 34.5678 28.6906 33.8731 29.3299 33.5026C33.1812 31.2022 35.754 27.0491 35.754 22.2785C35.754 14.5281 28.9868 8.35255 20.9878 9.23257Z" fill="#FECE00"/>
              <path d="M31.4177 17.2607C31.2618 17.2607 31.1059 17.1835 31.0123 17.0446C29.7337 15.0221 27.7691 13.5091 25.477 12.7989C25.2275 12.7217 25.0871 12.4592 25.1651 12.2122C25.2431 11.9652 25.5081 11.8262 25.7576 11.9034C28.268 12.6754 30.4198 14.3273 31.8076 16.5351C31.9479 16.7512 31.8855 17.0446 31.6516 17.1835C31.5893 17.2453 31.4957 17.2607 31.4177 17.2607Z" fill="white"/>
              <path d="M24.2456 44.634H20.6125C19.6458 44.634 18.8506 43.8466 18.8506 42.8894V42.7658C18.8506 42.6886 18.913 42.6423 18.9753 42.6423H26.0076C26.0855 42.6423 26.1323 42.7041 26.1323 42.7658C26.1479 43.8002 25.2903 44.634 24.2456 44.634Z" fill="#231F20"/>
              <path d="M16.7305 36.3279V39.9869C16.7305 41.1449 17.6816 42.0866 18.8511 42.0866H26.1484C27.3178 42.0866 28.269 41.1449 28.269 39.9869V36.3279C28.269 36.2662 28.2222 36.2198 28.1598 36.2198H16.8396C16.7772 36.2198 16.7305 36.2662 16.7305 36.3279Z" fill="#231F20"/>
              <path d="M28.2846 37.3624H16.7305V38.3042H28.2846V37.3624Z" fill="url(#paint0_linear_9162_14760)"/>
              <path d="M28.2846 39.1533H16.7305V40.095H28.2846V39.1533Z" fill="url(#paint1_linear_9162_14760)"/>
              <path d="M26.151 21.0279C24.9036 21.0279 23.8745 22.0314 23.8745 23.282V24.5943H21.1146V23.282C21.1146 22.0469 20.101 21.0279 18.838 21.0279C17.5906 21.0279 16.5615 22.0314 16.5615 23.282C16.5615 24.5171 17.575 25.5361 18.838 25.5361H20.1634V35.4479H21.1146V25.5361H23.89V35.4479H24.8412V25.5361H26.151C27.3984 25.5361 28.4275 24.5325 28.4275 23.282C28.4275 22.0314 27.3984 21.0279 26.151 21.0279ZM20.179 24.5788H18.8536C18.1208 24.5788 17.5283 23.9922 17.5283 23.2665C17.5283 22.5409 18.1208 21.9542 18.8536 21.9542C19.5865 21.9542 20.179 22.5409 20.179 23.2665V24.5788ZM26.151 24.5788H24.8256V23.2665C24.8256 22.5409 25.4181 21.9542 26.151 21.9542C26.8838 21.9542 27.4763 22.5409 27.4763 23.2665C27.4763 23.9922 26.8838 24.5788 26.151 24.5788Z" fill="white"/>
              <defs>
              <linearGradient id="paint0_linear_9162_14760" x1="16.857" y1="36.784" x2="28.9289" y2="39.0811" gradientUnits="userSpaceOnUse">
              <stop stop-color="#454343"/>
              <stop offset="1" stop-color="#1F1D1D"/>
              </linearGradient>
              <linearGradient id="paint1_linear_9162_14760" x1="16.857" y1="38.5757" x2="28.9289" y2="40.8727" gradientUnits="userSpaceOnUse">
              <stop stop-color="#454343"/>
              <stop offset="1" stop-color="#1F1D1D"/>
              </linearGradient>
              </defs>
            </svg>
            <img v-else-if="offerState === 'CLOSED'" src="~/assets/images/tips/clap.svg" alt="CLOSED" width="40" height="40">
            <img v-else-if="offerState === 'REJECTED'" src="~/assets/images/tips/rejected.svg" alt="REJECTED" width="40" height="40">
          
          <h2 class="text-base text-gray-900 font-normal ml-2 mt-2">
            {{tipsTitle}}
          </h2>
        </div>
      <ul class="mb-2">
        <li v-for="(tips, index) in tipsInfoData" :key="index+'tips'" class="text-xs text-gray-500 pl-8 relative mb-2 leading-[22px]"> 
            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" class="absolute left-2 top-[5px]">
            <path d="M9 6.15674L0.75 12.2189L0.75 0.0945606L9 6.15674Z" fill="#C4C4C4" />
            </svg>
            {{tips}}
        </li>        
      </ul>
      <div class="text-right"><a href="https://academy.gintaa.com/" target="_blank" class="text-[13px] text-green font-medium">{{$t('learnGintaaBarter')}}</a></div>   
      </div> 
    </div>
    <div class="w-full" v-if="offerState === 'EXPIRED'">
      <div class="ml-4">
      <div class="bg-[#e0f9fe]"><img src="~/assets/images/rejected-offer-add.png" alt="rejected-offer" class="max-w-full mx-auto"/></div>
      <div class="bg-firoza p-3">
        <p class="text-[18px] text-white leading-[24px] pb-3">{{$t('offerExpiredRight')}}</p>
        <!-- <a href="#" class="inline-block py-2 px-4 border-2 border-white text-[18px] text-white">View Listings</a> -->
        <a :href="localePath('/list')" class="min-w-[150px] text-center py-3 rounded-sm text-sm px-5 inline-block text-white border-white border mb-0 hover:bg-white hover:text-firoza transition-all viewb-5">
            {{$t('viewlistings')}}
             
              
              </a>
      </div>
      </div>

    </div>
  </div>  
</template>
<script lang="ts">
import Vue from 'vue'

export default  Vue.extend({
    name: 'OfferDetailsTipsInfo',
    props: ['offerState'],
    data() {
      return {
          // tipsListData:{
          //     'initiated': [
          //         "Changed your mind? Now, you can ‘Revise’ the offer and negotiate further",

          //         "Not liking the deal or the product? ‘Reject’ the offer at anytime",

          //         "Any payable amount shown on the screen here is in gintaa coin(s)",

          //         "Both you and your partner need to ‘Close Offer’ from each of your ends to earn gintaa coin(s) after completion of a successful barter transaction "
          //     ],
          //     'other': [
          //         "Are you not liking the product after accepting it? Don’t worry! You can ‘Reject’ the offer at any time!",

          //         "Once you ‘Close’ the offer, you have to share your ‘Close Offer Code’ with your Partner-gi and enter your Partner-gi’s ‘Close Offer Code’ on your screen.",

          //         "Unless you & your Partner-gi both enter the ‘Close Offer Code’ respectively, the offer won’t be closed completely.",

          //         "Unless you both ‘Close Offer’ from each of your ends, the gintaa coins for successfully closing the offer won’t be credited to your respective gintaa ‘Wallet’."
          //     ]
          // },
          tipsInfoData: [],
          tipsTitle: this.$t('tipsHead'),
          remotConfigSuffix: this.$config.remotConfigSuffix,
          remoteData: {
            offer_tips_info: null
          }
      }
    },
    mounted () {
      // setTimeout(()=>{          
      // }, 1000)
        // get tips from remoteconfig             
        // this.getTipsInfoFromRemoteConfig()
        this.getTipsInfoFromStrapi();
    },
  methods: {
        // getTipsInfo(offerState: string) {
        //     return offerState === 'INITIATED' ? this.tipsListData.initiated : this.tipsListData.other;
        // },  
    async getTipsInfoFromRemoteConfig() {
      try {
        await this.$fire.remoteConfig.fetchAndActivate()
      } catch (e) {
        alert(e)
        return
      }

      // const localeSiff = this.$i18n.locale === 'hi' ? '_hi' : ''
      const localeSiff = this.remotConfigSuffix[this.$i18n.locale] ? this.remotConfigSuffix[this.$i18n.locale] : '';
        
      const paramName = "offer_tips_info" + localeSiff;
      const offerTipsInfoData = await this.$fire.remoteConfig.getValue(paramName);
      
      if(offerTipsInfoData && offerTipsInfoData._value){
        const allTipsInfoData = JSON.parse(offerTipsInfoData._value)
        
        let tipsKey = this.offerState.toLowerCase();
        this.tipsInfoData = allTipsInfoData[tipsKey];

        if(this.offerState && (this.offerState === 'CLOSED' || this.offerState === 'REJECTED')) {
          this.tipsTitle = this.tipsInfoData[0]
          this.tipsInfoData.splice(0,1);
        }

      }

    },

    async getTipsInfoFromStrapi(){
      try{
        let locale = this.$i18n.locale
        // delete this.$axios.defaults.headers.common["Authorization"];
        // const data = await this.$axios.get(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`)
        const data: any = await fetch(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`).then((r) => r.json());
        // console.log('index CMS Data:', data)
        let responseData
        if(data) {
          responseData = data.data
          responseData.map((item) => {
            const key = item.attributes.parameter;
           // console.log('keys:', key)
            if(this.remoteData[key] !== undefined){
              let paramVal = item.attributes.value;
             // console.log('paramVal:', key, paramVal);
              this.remoteData[key] = paramVal || [];
            } else {
             // console.log('other keys:', key)
            }
          })

          if(this.remoteData['offer_tips_info']){
            let tipsKey = this.offerState.toLowerCase();
            this.tipsInfoData = this.remoteData['offer_tips_info'][tipsKey];

            if(this.offerState && (this.offerState === 'CLOSED' || this.offerState === 'REJECTED')) {
              this.tipsTitle = this.tipsInfoData[0]
              this.tipsInfoData.splice(0,1);
            }
          }
          
        }
        return responseData
      } catch (error) {
        console.log(error);
        return error
      }
    },
    removeModal(){
        this.$emit('tipModal', false);
    }
  }
})
</script>