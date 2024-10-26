<template>
  <div
    class="relative z-50"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>
    <div class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl md:max-w-xl lg:max-w-[900px] sm:p-6"
        >
          <div
            @click="closePopup"
            class="absolute top-0 right-0 block pt-4 pr-4 sm:block"
          >
            <button
              type="button"
              class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span class="sr-only">Close</span>
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="w-full">
            <div
              class="redeem-product-block border-b border-gray-300 mb-2 pb-2"
            >
              <div class="flex flex-col md:flex-row w-full">
                <div class="product-details-image basis-4/4 md:basis-2/4">
                  <div class="product-img">
                    <img
                      :src="filterImageUrl(vDetails.imageUrls)"
                      alt="image"
                      width="w-full"
                     
                      class="transition duration-200 ease-in rounded"
                    />
                  </div>
                </div>
                <div class="gift-details-des ml-0 md:ml-10 basis-4/4 md:basis-2/4">
                  <div class="relative mb-3 mt-1">
            <h3 class="font-medium text-sm sm:text-base md:text-xl capitalize text-gray-700 break-words">
                {{vDetails.couponName}}
            </h3>
         </div> 

              <div class="price-details">
                  <div class="w-full flex items-center flex-row">
                    <div class="text-sm text-gray-500 mr-4 basis-1/2">{{$t('giftCardQuantity')}}</div>
                    <div class="flex items-center text-base text-gray-900 basis-1/2 text-right justify-end">
                      <svg width="7" height="12" viewBox="0 0 11 18" fill="none" class="mr-[2px]"><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                       <!-- <img
                      src="~/assets/images/offer/coin-value.svg"
                      alt="coin"
                      class="w-[12px] mr-[1px] sm:w-[12px] sm:mr-[1px] md:w-[18px] md:mr-[5px] lg:w-[18px] lg:mr-[5px] xl:w-[18px] xl:mr-[5px] 2xl:w-[18px] 2xl:mr-[5px]"
                    /> -->
                      <span class="pl-1">{{vDetails.price}}</span>
                    </div>
                  </div>

                  <!-- <div class="w-full flex items-center mt-3">
                    <div class="text-sm text-gray-500 mr-1">{{$t('quantity')}}:</div>
                    <div
                      class="flex items-center text-sm text-gray-900 font-medium pl-0.5"
                    >
                      {{vDetails.quantity}}
                    </div>
                  </div> -->

                 

                  <div v-if="vDetails && vDetails.amountPaidByCoin" class="w-full flex items-center mt-3 flex-row border-b border-gray-100 pb-2">
                    <div class="text-sm text-gray-500 mr-1 basis-1/2 flex">{{$t('savingWithGintaa')}} <img
                      src="~/assets/images/coin.svg"
                      alt="coin"
                      class="ml-1 mr-1 w-[18px]"
                    /></div>
                    <div
                      class="flex items-center text-sm text-[#01A411] font-medium pl-0.5 basis-1/2 justify-end"
                    >
                      - {{vDetails.amountPaidByCoin}}
                    </div>
                  </div>

                   <div v-if="vDetails && vDetails.amountPaidByCash" class="w-full flex items-center mt-3 flex-row">
                    <div v-if="vDetails.status === 'SUCCESS'" class="text-sm text-gray-500 mr-1 basis-1/2 font-bold">{{$t('paidamount')}}</div>
                    <div  v-else class="text-sm text-gray-500 mr-1 basis-1/2 font-bold">{{$t('payingYouramountby')}}</div>
                    
                    <div
                      class="flex items-center text-sm text-gray-900 font-medium pl-0.5 basis-1/2 justify-end"
                    > <svg width="7" height="12" viewBox="0 0 11 18" fill="none" class="mr-[3px]"><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg> 
                      {{vDetails.amountPaidByCash}}
                    </div>
                  </div>

            </div>

            <div v-if="vDetails  && showPaynowButton"  class="w-full flex items-center mt-3">
              <div class="p-3 mb-4 text-[13px] text-[#c05621] bg-[#fffaf0] rounded-sm  ">{{$t('inititedMessage')}}</div>
            </div>

                

                  <div v-if="vDetails.voucherCode" class="flex items-center  mt-2">
                    <div class="text-sm text-gray-500 mr-1">{{$t('VoucherCodeName')}}</div> 
                    <div class="flex items-center text-sm text-gray-900 font-medium pl-0.5">{{vDetails.voucherCode}}</div>
                    <div class="relative ml-2">
                      <span v-if="voucherCodeCopy.showVoucherCodeCopiedConfirmMsg" class="text-[11px] absolute bg-black bg-opacity-90 text-white px-2 py-1 right-0 -top-7">Copied</span>                      
                    <a href="javascript:;" @click="copyToClipBoard(vDetails.voucherCode, 'CODE')" class="rounded-full flex items-center justify-center w-7 h-7" title="Copy">
                      <svg width="15" height="18" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_104_1094)"> <path d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM17 4H6C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.9 18.1 4 17 4ZM17 20H6V6H17V20Z" fill="#48CEF3"/>
                      </g> <defs> <clipPath id="clip0_104_1094"> <rect width="19" height="22" fill="white"/> </clipPath>
                      </defs>
                      </svg>
                    </a>
                    </div>
                  
                  </div>

                  <div v-if="vDetails.pinNumber" class="flex items-center mt-2">
                    <div class="text-sm text-gray-500 mr-1">{{$t('VoucherPin')}} </div> 
                    <div class="flex items-center text-sm text-gray-900 font-medium pl-0.5">{{vDetails.pinNumber}}</div>
                    <div class="relative ml-2">
                    <span v-if="voucherCodeCopy.showVoucherPinCopiedConfirmMsg" class="text-[11px] absolute bg-black bg-opacity-90 text-white px-2 py-1 right-0 -top-7">
                     {{$t('copiedText')}} 
                    </span>                      
                    <a href="javascript:;" @click="copyToClipBoard(vDetails.pinNumber, 'PIN')" class=" ml-1 rounded-full flex items-center justify-center w-7 h-7" title="Copy">
                      <svg width="15" height="18" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_104_1094)"> <path d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM17 4H6C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.9 18.1 4 17 4ZM17 20H6V6H17V20Z" fill="#48CEF3"/>
                      </g> <defs> <clipPath id="clip0_104_1094"> <rect width="19" height="22" fill="white"/> </clipPath>
                      </defs>
                      </svg>
                    </a>
                  </div>
                  </div>

                  <div v-if="vDetails && vDetails.endDate && vDetails.status === 'SUCCESS' && vDetails.shared " class="w-full flex items-center mt-2">
                    <div class="text-sm text-gray-500">
                      {{ $t("Validupto") }} {{ transValidDate(vDetails.endDate) }}
                    </div>
                  </div>

                  <div v-if="vDetails.status === 'FAILURE' " class=" mt-4 rounded-sm bg-[#fde8e8] flex items-center justify-start px-3 py-3">
                        <div class="text-sm text-[#b62904] flex items-center"> <svg width="23" class="mr-2" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.97623 0.385841C10.4255 0.132888 10.9324 0 11.448 0C11.9636 0 12.4705 0.132888 12.9198 0.385841C13.3691 0.638795 13.7456 1.00328 14.013 1.44412L14.0159 1.44886L22.4859 15.5889L22.494 15.6027C22.756 16.0563 22.8946 16.5706 22.896 17.0945C22.8975 17.6183 22.7618 18.1334 22.5024 18.5885C22.243 19.0436 21.8689 19.4228 21.4174 19.6885C20.966 19.9541 20.4528 20.0969 19.929 20.1027L19.918 20.1028L2.97802 20.1027H2.96703C2.44322 20.097 1.93006 19.9541 1.47859 19.6885C1.02712 19.4228 0.653071 19.0436 0.393668 18.5885C0.134265 18.1334 -0.00145493 17.6183 1.17626e-05 17.0945C0.00147851 16.5706 0.140081 16.0563 0.402028 15.6027L0.410152 15.5889L8.88015 1.44887L9.738 1.96273L8.88302 1.44412C9.15042 1.00328 9.52694 0.638795 9.97623 0.385841ZM10.5942 2.47938L2.13071 16.6086C2.04553 16.7584 2.00049 16.9277 2 17.1001C1.99951 17.2747 2.04475 17.4464 2.13122 17.5981C2.21769 17.7498 2.34237 17.8762 2.49286 17.9647C2.64204 18.0525 2.81141 18.1 2.98442 18.1027H19.9116C20.0846 18.1 20.254 18.0525 20.4032 17.9647C20.5537 17.8762 20.6783 17.7498 20.7648 17.5981C20.8513 17.4464 20.8965 17.2747 20.896 17.1001C20.8956 16.9277 20.8505 16.7584 20.7654 16.6086L12.303 2.48137L12.3018 2.47938C12.2127 2.33333 12.0877 2.21255 11.9386 2.12861C11.7889 2.0443 11.6199 2 11.448 2C11.2762 2 11.1072 2.0443 10.9574 2.12861C10.8083 2.21255 10.6833 2.33333 10.5942 2.47938ZM11.448 6.10274C12.0003 6.10274 12.448 6.55046 12.448 7.10274V11.1027C12.448 11.655 12.0003 12.1027 11.448 12.1027C10.8957 12.1027 10.448 11.655 10.448 11.1027V7.10274C10.448 6.55046 10.8957 6.10274 11.448 6.10274ZM11.448 14.1027C10.8957 14.1027 10.448 14.5505 10.448 15.1027C10.448 15.655 10.8957 16.1027 11.448 16.1027H11.458C12.0103 16.1027 12.458 15.655 12.458 15.1027C12.458 14.5505 12.0103 14.1027 11.458 14.1027H11.448Z" fill="#FD3E3E"/>
</svg>
{{ $t("failedMessage") }}</div>
                  </div>
<div class="justify-end flex w-100"> <a  @click="repaymentNow(vDetails)"  v-if="vDetails && showPaynowButton " class="mt-4 cursor-pointer bg-firoza px-8 py-2 text-white text-sm rounded">{{ $t("paynow") }}</a></div>
                  

            <div v-if="!vDetails.shared && vDetails.status === 'SUCCESS' "  class="w-full flex items-center mt-3">
              <div class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800">{{$t('underProcessMsg')}}</div>
            </div>

           

            <div v-if="vDetails && vDetails.status === 'PENDING' && showPendingMsg"  class="w-full flex items-center mt-3">
              <div class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800">{{$t('pendingMessage')}}</div>
            </div>

            <!-- <div v-if="vDetails && vDetails.status === 'FAILURE'"  class="w-full flex items-center mt-3">
              <div class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800">{{$t('failedMessage')}}</div>
            </div> -->

           

            <div class="w-full flex" >
             </div>

            <div>
              <h3 class="text-600 text-[14px] font-medium mt-3">{{$t('detailssharedyou')}}</h3>
              <div v-if="vDetails.mobile" class="w-full flex items-center mt-3">
                    <div class="text-sm text-gray-500 mr-1">{{$t('mobile')}}:</div>
                    <div
                      class="flex items-center text-sm text-gray-900 font-medium pl-0.5"
                    >
                      {{vDetails.mobile}}
                    </div>
                  </div>
                  <div v-if="vDetails.email" class="w-full flex items-center mt-3">
                    <div class="text-xs text-gray-500">
                      {{vDetails.email}}
                    </div>
                  </div>
                  
                  <div v-if="vDetails.address" class="w-full flex items-center mt-3">
                    <div class="text-xs text-gray-500">
                      {{vDetails.address}}
                    </div>
                  </div>
          </div>
                 

                  <!-- <div class="w-full flex flex-row mt-2">
             <button class="bg-green text-white font-bold py-1 px-3 h-10 sm:h-12 rounded w-40 sm:w-56 text-base capitalize " >
              <span>Share Now</span>
            </button>
         </div> -->
                </div>
                
              </div>
              <div class="text-[11px] text-gray-500 pt-5">{{$t('noteVouDis')}}</div>

              <div v-if="vDetails && vDetails.tnc" class="pt-8 border-gray-100 border-0 mt-1">
          <div class="text-base text-gray-600 font-medium px-3 md:px-0">
              {{$t('termsConGift')}}
            </div>
             <div  v-for="(item,index) in processTnc(vDetails.tnc)" :key="index"  class="relative text-[12px] md:text-sm text-gray-500 pt-2  pl-5">
              <svg class="mt-[11px] absolute top-0 left-0"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="10" height="10" fill="#48CEF3" />
                </svg>
              {{item}} 
            </div>   
          
      </div>
            </div>
            <div class="single-product-block">
              <div class="w-full flex flex-col">
                <div class="w-full flex flex-row">
                  <div class="text-base text-gray-700 font-medium">
                    {{$t('howToredeem')}}
                  </div>
                </div>
                <div class="w-full mt-2">
                  <ul class="list-none">
                    <li class="flex items-center mb-1 relative">
                      <svg class="mt-[5px] absolute top-0 left-0"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="10" height="10" fill="#48CEF3" />
                      </svg>
                      <span class="text-[13px] text-gray-500 pl-4"
                        >{{$t('redeem1')}}</span
                      >
                    </li>
                    <li class="flex items-center mb-1 relative">
                      <svg class="mt-[5px] absolute top-0 left-0"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="10" height="10" fill="#48CEF3" />
                      </svg>
                      <span class="text-[13px] text-gray-500 pl-4"
                        >{{$t('redeem2')}}</span
                      >
                    </li>
                    <li class="flex items-center mb-1 relative">
                      <svg class="mt-[5px] absolute top-0 left-0"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="10" height="10" fill="#48CEF3" />
                      </svg>
                      <span class="text-[13px] text-gray-500 pl-4"
                        >{{$t('redeem3')}}</span
                      >
                    </li>

                    <li class="flex items-center mb-1 relative">
                      <svg class="mt-[5px] absolute top-0 left-0"
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="10" height="10" fill="#48CEF3" />
                      </svg>
                      <span class="text-[13px] text-gray-500 pl-4"
                        >{{$t('redeem4')}}</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

 import Vue from 'vue'
 import { mapState, mapGetters } from 'vuex'
 import moment from 'moment'
 export default Vue.extend({
   components: {},
   name: 'myvoucherdetails',
   props: ['vDetails'],

     data () {
     return {
      loading:true,
      showPaynowButton:false,
      showPendingMsg:false,
      showFailureMsg:false,
      currentCouponStatus:{
        id : '',
        status: ''
      },
      voucherCodeCopy: {
        showVoucherCodeCopiedConfirmMsg: false,
        showVoucherPinCopiedConfirmMsg: false
      }
     }},

   computed: {

   ...mapState({
       authUser: state => state.authUser
     }),
     ...mapGetters({
       isLoggedIn: 'isLoggedIn'
     }),



   },

  mounted(){
  console.log("this.vDetails ",this.vDetails ,this.vDetails?.status,this.vDetails?.paymentOrderId )
  if(this.vDetails && this.vDetails.paymentOrderId && (this.vDetails.status !== 'SUCCESS' && this.vDetails.status !== 'FAILURE') ){
   console.log("this.vDetails?.paymentOrderId",this.vDetails?.paymentOrderId) 
  //  this.currentCouponStatus.id = this.vDetails?.id
   this.currentCouponStatus.status = this.vDetails?.status

   //console.log("this.currentCouponStatus details",this.currentCouponStatus)
   this.updatePaymentStatus(this.vDetails?.paymentOrderId)
  }
  },

  methods: {

    async updatePaymentStatus(orderId){
    // console.log("orderId",orderId)
    try{
      const paymentStatusurl =  '/payments/v1/payments/update-payment-status'
      const data = await this.$axios.$post(paymentStatusurl,{"orderId": orderId});
     console.log("Data",data)
    // this.currentCouponStatus = data.payload?.paymentStatus
     if(data && data.payload){
      this.currentCouponStatus.id = this.vDetails.id
      this.currentCouponStatus.status = data.payload?.paymentStatus
      console.log(" this.currentCouponStatus", this.currentCouponStatus)
      if(data.payload.paymentStatus == 'INITIATED'){
       this.showPaynowButton = true
      } 
      if (data.payload.paymentStatus == 'PENDING'){
       this.showPendingMsg = true
      }

      if(data.payload.paymentStatus == 'FAILURE'){
        this.vDetails.status = data.payload.paymentStatus
      }
    }
    } catch (error) {
      console.log(error);
      return error
    }
   
  },

    isRepaymnetPossible(vDet){
    if(vDet?.paymentOrderData && vDet?.paymentOrderData?.returnUrl){
      return true
    }else{
      return false
    }
    },

    repaymentNow(vItemDet){
    // console.log("vItemDet",vItemDet) 
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

    processTnc(termAndcondition){
     if(termAndcondition){
      return JSON.parse(termAndcondition)
     }
    },


    filterImageUrl(imageUrls){
        if(imageUrls){
          return imageUrls['620x515']
        }

    },
    closePopup(){
      if(this.currentCouponStatus && this.currentCouponStatus.id && this.currentCouponStatus.status){
        this.$emit("emitStatus", this.currentCouponStatus);
      }
      

      this.$emit('closeDetPopup')
    },

    transValidDate(dvalue){
      if (dvalue) {
        return this.$moment(dvalue).format(" MMMM D , YYYY");
      }
    },

    

    copyToClipBoard(copyText,  copyType = 'PIN'){
      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText);
    
      if(copyType === 'PIN') {
        this.voucherCodeCopy.showVoucherPinCopiedConfirmMsg = true
        setTimeout(()=>{
          this.voucherCodeCopy.showVoucherPinCopiedConfirmMsg = false
        }, 1000)
      } else {
        this.voucherCodeCopy.showVoucherCodeCopiedConfirmMsg = true
        setTimeout(()=>{
          this.voucherCodeCopy.showVoucherCodeCopiedConfirmMsg = false
        }, 1000)
      }

      console.log('voucherCodeCopy:', this.voucherCodeCopy)

    }


   }
 })
</script>

<style>
.fav-color path {
  fill: #ee2a7b !important;
}

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
</style>
