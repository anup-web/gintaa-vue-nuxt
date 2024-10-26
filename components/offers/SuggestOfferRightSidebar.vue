<template>
  <!-- right panel  -->
  <div class="hidden md:flex basis-2/6 sm:basis-full md:basis-2/6 lg:basis-2/6 xl:basis-2/6">
    <div class="relative w-full flex-col px-4 py-3 ml-0 mt-2 sm:ml-0 sm:mt-2 md:ml-0 md:mt-2 lg:ml-4 lg:mt-0 xl:ml-4 xl:mt-0 2xl:ml-4 2xl:mt-0 shadow-right">
      <div class="flex flex-col w-full relative">
        <div class="absolute -top-4 left-0 block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
          <div class="flex items-center cursor-pointer" @click="showModal()">
            <img src="~/assets/images/tips.svg" alt="image">
            <h2 class="text-base text-gray-900 font-normal ml-2 mt-2">
              Tips
            </h2>
          </div>
        </div>

        <div class="flex items-center justify-end">
          <svg width="14" height="14" class="mr-2 text-firoza" viewBox="0 0 16 16" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8Z" fill="#48CEF3" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 15.7071C6.90237 15.3166 6.90237 14.6834 7.29289 14.2929L13.5858 8L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893C7.68342 -0.0976315 8.31658 -0.0976315 8.70711 0.292893L15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071Z" fill="#48CEF3" />
          </svg>
          <span class="text-firoza text-base">{{ $t('outgoing') }}</span>
        </div>
      </div>

      <!-- for tips -->
      <div v-if="tipsInfoData" class="w-full hidden sm:hidden md:block lg:block xl:block 2xl:block">
        <div class="w-full flex items-center mb-5">
          <svg width="40" height="40" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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

          <!-- <svg width="43" height="40" viewBox="0 0 55 52" fill="none">
            <rect width="55" height="52" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0" transform="translate(-0.00340424 -0.0974026) scale(0.0110638 0.0116745)" />
              </pattern>
              <image id="image0" width="91" height="94" xlink:href="data:image/png;base64,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" />
            </defs>
          </svg> -->
          <h2 class="text-base text-gray-700 font-medium ml-2 mt-2">
            {{ $t('tipsHead') }}
          </h2>
        </div>
        <ul class="mb-2">
            <li v-for="(info, index) in tipsInfoData" :key="index + info" class="text-xs text-gray-500 pl-8 relative mb-2 leading-[22px]"> 
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none" class="absolute left-2 top-[5px]">
                <path d="M9 6.15674L0.75 12.2189L0.75 0.0945606L9 6.15674Z" fill="#C4C4C4" />
              </svg>
              {{info}}
            </li>
            <!-- <li class="text-xs text-gray-500 pl-8 relative mb-2 leading-[22px]"> 
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none" class="absolute left-2 top-[5px]">
                <path d="M9 6.15674L0.75 12.2189L0.75 0.0945606L9 6.15674Z" fill="#C4C4C4" />
              </svg>
              Before finalising your offer, view other items available for barter from your bartering partner’s list(s)
            </li>
             <li class="text-xs text-gray-500 pl-8 relative mb-2 leading-[22px]"> 
            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" class="absolute left-2 top-[5px]">
              <path d="M9 6.15674L0.75 12.2189L0.75 0.0945606L9 6.15674Z" fill="#C4C4C4" />
            </svg>
             Any payable amount shown on the screen here is in gintaa coin(s)
            </li>
             <li class="text-xs text-gray-500 pl-8 relative mb-2 leading-[22px]"> 
            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" class="absolute left-2 top-[5px]">
              <path d="M9 6.15674L0.75 12.2189L0.75 0.0945606L9 6.15674Z" fill="#C4C4C4" />
            </svg>
              Recharge your ‘Wallet’ in the case of insufficient balance
            </li>
            <li class="text-xs text-gray-500 pl-8 relative mb-2 leading-[22px]"> 
            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" class="absolute left-2 top-[5px]">
              <path d="M9 6.15674L0.75 12.2189L0.75 0.0945606L9 6.15674Z" fill="#C4C4C4" />
            </svg>
              In your ‘Wallet’, check the total gintaa coin balance 
            </li>
            <li class="text-xs text-gray-500 pl-8 relative mb-2 leading-[22px]"> 
            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" class="absolute left-2 top-[5px]">
              <path d="M9 6.15674L0.75 12.2189L0.75 0.0945606L9 6.15674Z" fill="#C4C4C4" />
            </svg>
              Both you and your partner need to ‘Close Offer’ from each of your ends to earn gintaa coin(s) after completion of a successful barter transaction 
            </li> -->
        </ul>



    
      </div>
      <!-- for tips end -->
    </div>
    <div class="relative w-full flex-col hidden">
<!-- <div class="w-full px-4 py-3 ml-0 mt-2 sm:ml-0 sm:mt-2 md:ml-0 md:mt-2 lg:ml-4 lg:mt-0 xl:ml-4 xl:mt-0 2xl:ml-4 2xl:mt-0 shadow-right hidden">
  <div class="w-full text-[17px] text-gray-900 font-bold mb-5 ">What to do now?</div>
<nav aria-label="Progress">
  <ol role="list" class="overflow-hidden">

   
    <li class="relative pb-8">
      <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full border border-dashed border-1 border-gray-300" aria-hidden="true"></div>      
      <div class="relative flex items-start group">
        <span class="h-8 flex items-center bg-white">
          <span class="relative z-10 w-7 h-7 flex items-center justify-center bg-transparent text-green text-sm border-2 border-green rounded font-medium">01</span>
        </span>
        <span class="ml-4 min-w-0 flex flex-col mt-0">
          <span class="text-sm font-medium tracking-wide text-gray-600 pb-2">Negotiate Offer</span>
          <span class="text-xs text-gray-500">Liked the product? Make an offer & negotiate.</span>
        </span>
      </div>
    </li>
   
    
    
    <li class="relative pb-8">
      <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full border border-dashed border-1 border-gray-300" aria-hidden="true"></div>     
      <div class="relative flex items-start group">
        <span class="h-8 flex items-center bg-white">
          <span class="relative z-10 w-7 h-7 flex items-center justify-center bg-transparent text-green text-sm border-2 border-green rounded font-medium">02</span>
        </span>
        <span class="ml-4 min-w-0 flex flex-col mt-0">
          <span class="text-sm font-medium tracking-wide text-gray-600 pb-2">Accept Offer</span>
          <span class="text-xs text-gray-500">Accept the offer if you agree to the price settlement.</span>
        </span>
      </div>
    </li>
   
    
   
    <li class="relative pb-8">
      <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full border border-dashed border-1 border-gray-300" aria-hidden="true"></div>      
     <div class="relative flex items-start group">
        <span class="h-8 flex items-center bg-white">
          <span class="relative z-10 w-7 h-7 flex items-center justify-center bg-transparent text-green text-sm border-2 border-green rounded font-medium">03</span>
        </span>
        <span class="ml-4 min-w-0 flex flex-col mt-0">
          <span class="text-sm font-medium tracking-wide text-gray-600 pb-2">Buy, Sell, or Exchange</span>
          <span class="text-xs text-gray-500">Either meet personally or courier products to complete the transaction.</span>
        </span>
      </div>
    </li>
    
    <li class="relative pb-8">     
      <div class="relative flex items-start group">
        <span class="h-8 flex items-center bg-white">
          <span class="relative z-10 w-7 h-7 flex items-center justify-center bg-transparent text-green text-sm border-2 border-green rounded font-medium">04</span>
        </span>
        <span class="ml-4 min-w-0 flex flex-col mt-0">
          <span class="text-sm font-medium tracking-wide text-gray-600 pb-2">Close Offer</span>
          <span class="text-xs text-gray-500">Once you get your desirables, close the offer & give feedback.</span>
        </span>
      </div>
    </li>
    

  
  </ol>
</nav>
<div class="text-right"><a href="https://academy.gintaa.com/" target="_blank" class="text-[13px] text-green font-medium">
       {{ $t('goToAcademy') }}
        </a></div>
</div> -->
<div class="flex flex-col w-full  px-4 py-3 ml-0 mt-2 sm:ml-0 sm:mt-2 md:ml-0 md:mt-2 lg:ml-4 lg:mt-0 xl:ml-4 xl:mt-0 2xl:ml-4 2xl:mt-0 shadow-right hidden">
        <h3 class=" mt-6 md:mt-1 section-title text-gray-600 text-[15px] md:text-lg  font-bold px-5 relative mb-6 inline-block before:bg-green before:absolute before:w-10 before:h-0.5  before:top-[11px] md:before:top-4 before:left-0 after:bg-green after:absolute after:w-10 after:h-0.5  after:top-[11px] md:after:top-4 after:right-0 text-center">
          <span>What to do now?</span></h3>

        <div class="pl-[130px] relative pb-10">
          <img src="~/assets/images/meet_partner.svg" alt="meet_partner" class="w-[100px] absolute left-0"/>
          <div class="relative">
          <span class="block font-bold text-[20px] text-[#fff] absolute left-0 z-10 bg-[#aaaaaa] px-2 py-1">01</span>
          <p class="text-gray-500 text-[15px] pt-1 pl-[50px] font-bold relative z-20 ">Negotiate Offer</p>
          <p class="text-[12px] pt-4 text-gray-500">Liked the product? Make an offer & negotiate.</p>
          </div>

        </div>
        <div class="pr-[130px] relative pb-12 text-right">
          <img src="~/assets/images/perform_exchange.svg" alt="perform_exchange" class="w-[100px] absolute right-0"/>
          <div class="relative">
          <span class="block font-bold text-[20px] text-white absolute right-0 z-10 bg-[#aaaaaa] px-2 py-1">02</span>
          <p class="text-gray-500 text-[15px] pt-1 pr-[50px] font-bold relative z-20 text-right"> Accept Offer</p>
          <p class="text-xs pt-4 text-gray-500 text-right">Accept the offer if you agree to the price settlement.</p>
          </div>

        </div>
        <div class="pl-[110px] relative pb-6">
          <img src="~/assets/images/perform_exchange.svg" alt="perform_exchange" class="w-[80px] absolute left-0"/>
          <div class="relative">
          <span class="block font-bold text-[20px] text-[#fff] absolute left-0 z-10 bg-[#aaaaaa] px-2 py-1">03</span>
          <p class="text-gray-500 text-[14px] pt-1 pl-[50px] font-bold relative z-20 ">Buy, Sell or Exchange</p>
          <p class="text-xs pt-4 text-gray-500">Either meet personally or courier products to complete the transaction.</p>
          </div>

        </div>

         <div class="pr-[130px] relative pb-12 text-right">
          <img src="~/assets/images/tap_close.svg" alt="close" class="w-[100px] absolute right-0"/>
          <div class="relative">
          <span class="block font-bold text-[20px] text-white absolute right-0 z-10 bg-[#aaaaaa] px-2 py-1">04</span>
          <p class="text-gray-500 text-[15px] pt-1 pr-[50px] font-bold relative z-20 text-right"> Close Offer</p>
          <p class="text-xs pt-4 text-gray-500 text-right">Once you get your desirables, close the offer & give feedback.</p>
          </div>

        </div>

        <a href="https://academy.gintaa.com/" class="text-green text-sm" target="_blank">{{$t('toknowmoreAcademy')}}</a>

        </div>
        
    </div>
  </div>
  <!-- right panel end -->
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SuggestOfferRightSidebar',
  props:['offerState'],
  data () {
    return {      
      tipsInfoData: [],
      remotConfigSuffix: this.$config.remotConfigSuffix,
      remoteData: {
            offer_tips_info: null
          }
    }
  },
  mounted () {
    // get tips from remoteconfig
   // console.log("--------------------- called",)
    this.getTipsInfo()
    this.getTipsInfoFromStrapi();
  },
  methods: {    

    async getTipsInfoFromStrapi(){
      try{
        let locale = this.$i18n.locale
        // delete this.$axios.defaults.headers.common["Authorization"];
        // const data = await this.$axios.get(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`)
        const data = await fetch(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`).then((r) => r.json());
        // console.log('index CMS Data:', data)
        let responseData
        if(data) {
         // console.log("Data",data)
          responseData = data.data
         // console.log("responseData",responseData)
          responseData.map((item) => {
            const key = item.attributes.parameter;
          //  console.log('keys:', key)
            if(this.remoteData[key] !== undefined){
              let paramVal = item.attributes.value;
             // console.log('paramVal:', key, paramVal);
              this.remoteData[key] = paramVal || [];
            } else {
             // console.log('other keys:', key)
            }
          })

        //  console.log("remoteData",this.remoteData['offer_tips_info'])

          if(this.remoteData['offer_tips_info']){
          //  let tipsKey = this.offerState.toLowerCase();
            this.tipsInfoData = this.remoteData['offer_tips_info']['initiated'];

            // if(this.offerState && (this.offerState === 'CLOSED' || this.offerState === 'REJECTED')) {
            //   this.tipsTitle = this.tipsInfoData[0]
            //   this.tipsInfoData.splice(0,1);
            // }
          }
          
        }
        return responseData
      } catch (error) {
        console.log(error);
        return error
      }
    },

    async getTipsInfo() {
      try {
        await this.$fire.remoteConfig.fetchAndActivate()
      } catch (e) {
        alert(e)
        return
      }

      // const localeSiff = this.$i18n.locale === 'hi' ? '_hi' : ''
      const localeSiff = this.remotConfigSuffix[this.$i18n.locale] ? this.remotConfigSuffix[this.$i18n.locale] : '';
     
      const paramName = "suggest_offer" + localeSiff;
      const suggestOfferTipsInfoData = await this.$fire.remoteConfig.getValue(paramName);
      
      if(suggestOfferTipsInfoData && suggestOfferTipsInfoData._value){
        const info = JSON.parse(suggestOfferTipsInfoData._value)
        this.tipsInfoData = info['suggest_offer'];
      }

      // console.log('suggestOfferTipsInfoData:', suggestOfferTipsInfoData)
      // console.log('this.tipsInfoData:', this.tipsInfoData)
    }
  }
})
</script>

<style scoped>
.shadow-right{
  box-shadow: 0px 0px 29px 0px rgb(102 102 102 / 8%);
}
</style>