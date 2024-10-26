<template>
  <!-- right panel  -->
  <div class=" md:flex basis-2/6 sm:basis-full md:basis-2/6 lg:basis-2/6 xl:basis-2/6">
    <div class="relative w-full flex-col  ml-0 sm:ml-0 sm:mt-2 md:ml-0 md:mt-2 lg:ml-4 lg:mt-0 xl:ml-4 xl:mt-0 2xl:ml-4 2xl:mt-0 ">
      <div class="flex flex-col w-full relative">
        <div class="absolute -top-4 left-0 block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
          <div class="flex items-center cursor-pointer" @click="showModal()">
            <img src="~/assets/images/tips.svg" alt="tips">
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
      <div v-if="tipsInfoData" class="w-full   md:block lg:block xl:block 2xl:block.pt-3">
        <!-- <div class="w-full flex items-center mb-5">
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

          
          <h2 class="text-base text-gray-700 font-medium ml-2 mt-2">
            {{ $t('tipsHead') }}
          </h2>
        </div> -->
        <ul class="mb-2 pt-4 text-left">
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
        <div class="text-right"><a href="https://academy.gintaa.com/" target="_blank" class="text-[13px] text-green font-medium">
       {{ $t('goToAcademy') }}
        </a></div>

    
      </div>
      <!-- for tips end -->
    </div>
  </div>
  <!-- right panel end -->
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'SuggestOfferRightSidebar',
  data () {
    return {      
      tipsInfoData: [],
      remotConfigSuffix: this.$config.remotConfigSuffix
    }
  },
  mounted () {
    // get tips from remoteconfig
    this.getTipsInfo()
  },
  methods: {    
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