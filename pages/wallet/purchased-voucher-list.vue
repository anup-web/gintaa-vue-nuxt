<template>
  <div class="product-details-page pt-[80px] lg:pt-12">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class="container max-w-8xl mx-auto px-4 md:px-8 2xl:px-16 pt-10">
      <breadcrumb :breadcrumb="breadcrumb" />
    </div>

    <!-- <fullPageLoader v-if="loading" /> -->
    <div class="container max-w-8xl mx-auto px-4 md:px-8 2xl:px-16 pt-5">
      <div
        class="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col mb-16"
      >
        <!-- start My Gift Voucher -->
        <div class="w-full flex flex-col mt-4">
          <div class="w-full mb-6">
            <div class="flex text-gray-900 text-base font-medium justify-center">
              <h2 class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14" >
                <span > {{$t('myGiftCard')}}</span> </h2>
             
            </div>
          </div>

          <div
            v-if="myPurchasedVoucherCard.length > 0"
            class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3"
          >
            <div
              v-for="(item, index) of myPurchasedVoucherCard"
              :key="item.id"
              class="flex rounded border border-gray-200"
            >
              <div class="flex-shrink-0">
                <a
                    href="javascript:;"
                    @click="showVoucherDet(item)"
                   >
                <img
                  :src="filterImageUrl(item.imageUrls)"
                  alt="image"
                  class="h-[150px] w-auto sm:h-[200px] sm:w-[200px] rounded-l"
                /></a>
              </div>

              <div class="relative pr-2 pt-2 flex flex-1 flex-col">
                <div class="flex items-center mb-1.5 pl-4">
                <div class="text-sm text-gray-500 mr-1 font-medium">{{item.couponName}}</div> 
                </div>
                <div class="min-h-[65px] md:min-h-[110px]">
                <div class="flex items-center mb-1 pl-4">
                  <div class="text-xs text-gray-500 mr-1">{{ $t("giftCardAmount") }}:</div>
                  <div
                    class="flex items-center text-sm text-gray-900 font-medium"
                  >

                  <svg width="7" height="12" viewBox="0 0 11 18" fill="none" class="mr-[2px]"><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                    <!-- <img
                      src="~/assets/images/coin.svg"
                      alt="coin"
                      class="mr-1 w-[18px]"
                    /> -->
                    <span class="pl-0.5">{{item.price}}</span>
                  </div>
                </div>
                <div class="flex items-center mb-1 pl-4">
                  <div class="text-xs text-gray-500 mr-1">{{ $t("quantity") }}:</div>
                  <div
                    class="flex items-center text-sm text-gray-900 font-medium pl-0.5"
                  >
                    {{item.quantity}}
                  </div>
                </div>
                

                <div v-if="item.voucherCode" class="hidden sm:flex items-center mb-1 pl-4">
                    <div class="text-xs text-gray-500 mr-1"> {{$t('VoucherCodeName')}} </div> 
                    <div class=" text-xs text-gray-900 font-medium pl-0.5 truncate w-[46px] 2xl:w-[100px]">
                      {{item.voucherCode}}  
                    </div>
                    <div class="relative ml-2">
                      <span v-if="voucherCodeCopy[index].showVoucherCodeCopiedConfirmMsg" class="text-[11px] absolute bg-black bg-opacity-90 text-white px-2 py-1 right-0 -top-7">Copied</span>                      
                      <a href="javascript:;" @click="copyToClipBoard(item.voucherCode, index, 'CODE')" class=" rounded-full flex items-center justify-center ml-1" title="Copy">

                        <svg width="12" height="15" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_104_1094)"> <path d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM17 4H6C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.9 18.1 4 17 4ZM17 20H6V6H17V20Z" fill="#48CEF3"/>
                        </g> <defs> <clipPath id="clip0_104_1094"> <rect width="19" height="22" fill="white"/> </clipPath>
                        </defs>
                        </svg>
                      </a>
                  </div>
                  </div>

                  <div v-if="item.pinNumber" class="hidden sm:flex items-center mb-1 pl-4">
                    <div class="text-xs text-gray-500 mr-1">{{$t('VoucherPin')}} </div> 
                    <div class="flex items-center text-xs text-gray-900 font-medium pl-0.5">{{item.pinNumber}} </div>
                    <div class="relative ml-2">
                      <span v-if="voucherCodeCopy[index].showVoucherPinCopiedConfirmMsg" class="text-[11px] absolute bg-black bg-opacity-90 text-white px-2 py-1 right-0 -top-7">Copied</span>
                      
                      <a href="javascript:;" @click="copyToClipBoard(item.pinNumber, index, 'PIN')" class="rounded-full flex items-center justify-center ml-2" title="Copy">
                        <svg width="12" height="15" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_104_1094)"> <path d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM17 4H6C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.9 18.1 4 17 4ZM17 20H6V6H17V20Z" fill="#48CEF3"/>
                        </g> <defs> <clipPath id="clip0_104_1094"> <rect width="19" height="22" fill="white"/> </clipPath>
                        </defs>
                        </svg>
                      </a>
                    </div>
                  </div>

                <div class="hidden md:flex  flex-col pl-4 w-full">
                  <div v-if="item.endDate && item.shared && item.status === 'SUCCESS'" class="text-[10px] md:text-xs text-gray-500">
                    {{ $t("Validupto") }} {{ transValidDate(item.endDate) }}
                  </div>
                </div>

              </div>
                  <div class="text-right relative">
                   
                    <!-- <div><a   @click="repaymentNow(item)"  v-if="item.status === 'INITIATED' &&  isRepaymnetPossible(item)" class=" cursor-pointer bg-firoza px-3 py-1 text-white absolute left-2 bottom-2">{{ $t("paynow") }}</a></div> -->
                    
                    <a
                    href="javascript:;"
                    @click="showVoucherDet(item)"
                    class="text-sm text-[#8BC63E] font-medium mt-5"
                    > {{$t('details')}}</a
                  ></div>
                 
                
                <div
                  class="absolute w-full left-0 bottom-0 bg-firoza rounded-br flex items-center justify-center h-7"
                >
                  <div class="text-sm text-white">{{ $t("Onceperuser") }}</div>
                </div>

                
                <div v-if="!item.shared && item.status === 'INITIATED'"   class="absolute w-full left-0 bottom-0 bg-firoza rounded-br flex items-center justify-center h-7 z-40">
                        <div class="text-sm text-white ">{{ $t("paymentDue") }}</div>
                  </div>

                  <div v-if="!item.shared && item.status === 'PENDING'"   class="absolute w-full left-0 bottom-0 bg-firoza rounded-br flex items-center justify-center h-7 z-40">
                        <div class="text-sm text-white ">{{ $t("paymentProcessing") }}</div>
                  </div>
                  
                   <div v-if="!item.shared && item.status === 'SUCCESS' " class="absolute w-full left-0 bottom-0 bg-[#ff9500] rounded-br flex items-center justify-center h-7 z-40">
                        <div class="text-sm text-black ">{{ $t("inProcess") }}</div>
                  </div> 


                  <div v-if="item.status === 'FAILURE'"   class="absolute w-full left-0 bottom-0 bg-[#cf0808] rounded-br flex items-center justify-center h-7 z-40">
                        <div class="text-sm text-[#ffffff] ">{{ $t("paymentfailed") }}</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end My Gift Voucher -->
      </div>
    </div>

    <div v-show="loading" class="py-6 flex justify-center">
      <Spinner />
    </div>

    <Trigger @triggerIntersected="loadMore" />

    <myvoucherdetails
      v-if="vDetails && showVoucherDetPopup"
      :vDetails="vDetails"
      @closeDetPopup="closeDetPopup"
    />
    <!--footer section goes here-->
    <Footer />

    <!-- Add coins to your wallet start -->

    <!-- Add coins to your wallet end -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";


export default Vue.extend({
  name: "UserWallet",
  middleware: "authenticated",
  data() {
    return {
      message: "Copy These Text",
      breadcrumb: [
        {
          name: this.$t("myGiftCard"),
        },
      ],
      currentUrl: "",
      referralCode: "",
      showSahreModal: false,
      loading: true,
      transactionLoading: false,
      showmodal: false,
      page: 0,
      walletDetails: {
        netCount: null,
        netLien: null,
        netReward: null,
      },
      transactionList: [],

      referralLink: "",
      transMsg: "",
      enableSearchMore: true,
      showCopiedModal: false,
      textMsg: "",
      myPurchasedVoucherCard : [],
      voucherCodeCopy : [],
      totalPurchasedCard : null,
      vDetails : null,
     showVoucherDetPopup :false
    };
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
  },
  beforeMount() {
  this.allPurchasedVoucher()
  },
  mounted() {

  },
  methods: {

    emitStatus(currentCouponStatus){
   // console.log("currentCouponStatus",currentCouponStatus,this.myPurchasedVoucherCard)

    //let index = this.myPurchasedVoucherCard.findIndex(x => x.id === currentCouponStatus.id);
    if(currentCouponStatus.id && currentCouponStatus.status){
      var foundIndex = this.myPurchasedVoucherCard.findIndex(x => x.id == currentCouponStatus.id);

// console.log("foundIndex",foundIndex ,index ,this.myPurchasedVoucherCard[0],this.myPurchasedVoucherCard[0].id , currentCouponStatus.id )
    this.myPurchasedVoucherCard[foundIndex].status = currentCouponStatus.status;
    }
   

   

    },

    
    isRepaymnetPossible(vDet:any){
    if(vDet?.paymentOrderData && vDet?.paymentOrderData?.returnUrl){
      return true
    }else{
      return false
    }
    },

    repaymentNow(vItemDet:any){
     console.log("vItemDet",vItemDet) 
     if(vItemDet && vItemDet.status === 'INITIATED'){

      try {
        let payload =  vItemDet.paymentOrderData

      payload.paymentGateway = 'CASHFREE'
      this.$router.push({ path: '/payment/'+payload.orderId, query: payload }) 
      } catch (error) {
       console.log("Error")
      }
     }
    },

    filterImageUrl(imageUrls:any){
      if(imageUrls){
        return imageUrls['620x515']
      }

    },

    async allPurchasedVoucher() {
      this.loading = true
      try {
        const url = `/wallet/v1/wallet/coupon/my-coupons?page=${this.page}&size=12`;
        const data = await this.$axios.$get(url);
       // console.log("Data",data)



      if (this.page === 0) {
        this.myPurchasedVoucherCard = data.payload
      } else if (data.payload.length > 0) {
        this.myPurchasedVoucherCard.push(...data.payload)
      }

      this.voucherCodeCopy = []
      this.myPurchasedVoucherCard.map((item: any)=>{
        const obj = {
          showVoucherCodeCopiedConfirmMsg: false,
          showVoucherPinCopiedConfirmMsg: false
        }
        this.voucherCodeCopy.push(obj)
      })

      this.enableSearchMore = data.payload.length > 0

      this.loading = false

      } catch (error) {
      if (this.page === 0) {
        this.myPurchasedVoucherCard = []
      }
      this.loading = false
      this.enableSearchMore = false

      }
    },



    loadMore() {
      if (!this.loading && this.enableSearchMore) {
        this.page++;
        this.allPurchasedVoucher();
      }
    },

  closeDetPopup(){
   this.showVoucherDetPopup = false
   this.vDetails = null
  },


  showVoucherDet(vDetails:any){
  this.vDetails = vDetails
  this.showVoucherDetPopup = true
  },


  transValidDate(dvalue: any){
    if (dvalue) {
      return this.$moment(dvalue).format(" MMMM D , YYYY");
    }
  },

  copyToClipBoard(copyText: any, itemIndex: number, copyType: string = 'PIN'){
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    if(copyType === 'PIN') {
      this.voucherCodeCopy[itemIndex].showVoucherPinCopiedConfirmMsg = true
      setTimeout(()=>{
        this.voucherCodeCopy[itemIndex].showVoucherPinCopiedConfirmMsg = false
      }, 1000)
    } else {
      this.voucherCodeCopy[itemIndex].showVoucherCodeCopiedConfirmMsg = true
      setTimeout(()=>{
        this.voucherCodeCopy[itemIndex].showVoucherCodeCopiedConfirmMsg = false
      }, 1000)
    }

    console.log('voucherCodeCopy:', this.voucherCodeCopy)

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
input[type="text"]:focus ~ label,
input[type="text"]:not(:placeholder-shown) ~ label,
input[type="text"]:not(:placeholder-shown) ~ label,
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
input[type="text"]:focus ~ label,
select:focus ~ label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(72, 206, 243, var(--tw-text-opacity));
  left: 0px;
}
</style>
