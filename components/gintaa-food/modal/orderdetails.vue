<template>
   <div  class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">

<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>



<div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex min-h-full items-start justify-center p-4 text-center sm:p-0">

        <div
            class="relative transform overflow-hidden rounded-lg bg-white px-0 pt-2 pb-4 text-left shadow-xl transition-all sm:my-4 sm:w-full sm:max-w-2xl  ">

              <div class="w-full flex min-h-[250px] justify-center items-center" v-if="loading">
            <Spinner  />
          </div>

            <div   v-if="orderDetailsData && orderDetailsData.orderId && !loading" class="w-full">
                <div class="flex items-center justify-between border-b-2 border-gray-200 px-4 pb-2">
                    
                       <div  class="text-base text-gray-900">{{ $t('orderDetails') }}</div>
                       <div class="text-sm text-gray-700 flex items-center mr-14">{{ $t('orderId') }} : <span>{{orderDetailsData.orderId}}</span></div>
                    
                    <div class="absolute top-0 right-0 pt-2 pr-2 block">
                        <button @click="detailsPopupClose()" type="button" class="rounded-md bg-white text-gray-400 ">
                            <span class="sr-only">Close</span>

                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

               
                <div class="flex items-center px-8 py-4">
                    <div class="text-sm text-gray-700 hidden">ID : <span>{{orderDetailsData.orderId}}</span></div>
                    <div class="text-sm text-gray-700 "> {{ $t('foodCustomer') }} : <span class="text-gray-600 font-bold">{{orderDetailsData.userName}}</span></div>
                    <div class="text-sm text-gray-700 ml-6"> {{ $t('foodTime') }} : <span class="text-gray-600 font-bold">{{transformDate(orderDetailsData.orderDate)}}</span></div>
                    <div class="text-sm text-gray-700 ml-0 sm:ml-0 md:ml-6"> Payment Mode : <span class="uppercase font-bold rounded-md border-[#1FBE58] border px-2 py-1 text-[#1FBE58]">Online</span></div>
                </div>

                <div class="w-full px-8">

                    <table class="min-w-full border">
                        <thead class="border-b">
                            <tr>
                                <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-2 border-r">
                                    {{ $t('foodDetails') }}</th>
                                    <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-2 text-center border-r">
                                      {{ $t('quantity') }}</th>
                                    
                                <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-2 text-center">
                                  {{ $t('amount') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            <tr  v-for="(item, i) in orderDetailsData.orderDetails" :key="i" class="bg-white border-b">
                                <td class="text-sm text-gray-700 px-4 py-2  border-r"> {{item.name}}</td>
                                <td class="text-sm text-gray-700 px-4 py-2  border-r text-center">{{item.quantity}} </td>
                                <td class="text-sm text-gray-700 px-4 py-2 text-center">
                                    <div class="text-sm flex items-center justify-end"><svg width="7"
                                            height="15" viewBox="0 0 11 18" fill="none">
                                            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                                                d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                fill="black"></path>
                                        </svg> <span class="ml-1">{{item.price}}</span></div>
                                </td>
                            </tr>
                            <tr class="bg-white border-b">
                                <td class="text-sm text-gray-700 px-4 py-2 font-medium border-r">{{ $t('total') }}</td>
                                <td class="text-sm text-gray-700 px-4 py-2 font-medium border-r">&nbsp;</td>
                                <td class="text-sm text-gray-900 px-4 py-2 text-right">
                                    <div class="font-medium text-sm flex items-center justify-end"><svg
                                            width="7" height="15" viewBox="0 0 11 18" fill="none">
                                            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                                                d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                fill="black"></path>
                                        </svg> <span class="ml-1">{{tofixedTwoDigit(orderDetailsData.totalItemAmount)}}</span></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="px-8 py-2">
              <table width="100%"  class="" cellpadding="0" cellspacing="0"  >
                <thead>
                  <tr>
                    <th class="w-[60%] text-right pr-5 pb-3 text-sm" >{{ $t('foodTaxes') }} &amp; {{ $t('foodDiscount') }}</th>
                    <th  class="w-[20%] text-right pr-5 pb-3 text-sm">{{ $t('rateBtn') }}</th>
                    <th class="w-[20%] text-right pr-0 pb-3 text-sm">&nbsp;</th>                    
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="orderDetailsData.restaurantDiscountAmount">
                    <td class="text-right pr-5 pb-3 text-sm">{{ $t('restaurantDiscount') }}</td>
                    <td class="text-right pr-5 pb-3 text-sm" >{{orderDetailsData.restaurantDiscountPercent}}%</td>
                    <td  class="text-right pr-0 pb-3 text-sm">- {{tofixedTwoDigit(orderDetailsData.restaurantDiscountAmount)}}</td>
                  </tr>
                  <tr v-if="orderDetailsData.gstAmount">
                    <td class="text-right pr-5 pb-3 text-sm"> GST</td> 
                    <td class="text-right pr-5 pb-3 text-sm">{{orderDetailsData.gstPercent}}%</td>
                    <td class="text-right pr-0 pb-3 text-sm" > {{tofixedTwoDigit(orderDetailsData.gstAmount)}} </td>
                  </tr>

                  <tr v-if="orderDetailsData.gintaaDiscountAmount">
                    <td class="text-right pr-5 pb-3 text-sm"> {{ $t('gintaaDiscount') }}</td> 
                    <td class="text-right pr-5 pb-3 text-sm">{{orderDetailsData.gintaaDiscountPercent}}%</td>
                    <td class="text-right pr-0 pb-3 text-sm" > - {{tofixedTwoDigit(orderDetailsData.gintaaDiscountAmount)}}</td>
                  </tr>

                  <tr v-if="orderDetailsData.coinsUsed">
                    <td class="text-right pr-5 pb-3 text-sm"> <div class="justify-end flex items-center">{{ $t('gintaaCoinUsed') }} <img src="~/assets/images/coin.svg" class="mr-1 w-[18px]"></div></td> 
                    <td class="text-right pr-5 pb-3">&nbsp;</td>
                    <td class="text-right pr-0 pb-3 text-sm" > {{orderDetailsData.coinsUsed}}</td>
                  </tr>
                  

                  <tr v-if="orderDetailsData.deliveryCharge">
                                        <td class="text-right pr-5 pb-3 text-sm"> {{ $t('deliveryCharges') }}</td>
                                        <td class="text-right pr-5 pb-3 text-sm"></td>
                                        <td class="text-right pr-0 pb-3 text-sm"> {{ tofixedTwoDigit(orderDetailsData.deliveryCharge) }} </td>
                                    </tr>
                 
                                   <!-- <div v-if="orderDetailsData.orderStatus !== 'DELIVERED' " class="food-share-address"><sharedeliveryaddress :delAddress="getAddressitemDet(orderDetailsData.deliveryAddress)"/></div> 
                   -->
                                   <!-- <tr>
                    <td style="font-size:15px; font-weight: bold; color: #000000; line-height: 25px; vertical-align: top; text-align:right; ">Total Taxes</td>
                    <td style="font-size:15px; font-weight: bold; color: #000000; line-height: 25px; vertical-align: top; text-align:right; white-space:nowrap;" width="100">&nbsp;</td>
                    <td style="font-size:15px; font-weight: bold; color: #000000; line-height: 25px; vertical-align: top; text-align:right; white-space:nowrap;" width="100">10.72</td>
                  </tr>
                  <tr>
                    <td style="font-size:15px;  color: #000000; line-height: 25px; vertical-align: top; text-align:right;">Coupon</td>
                    <td style="font-size:15px;  color: #000000; line-height: 25px; vertical-align: top; text-align:right; white-space:nowrap;">4%</td>
                    <td style="font-size:15px;  color: #000000; line-height: 25px; vertical-align: top; text-align:right; white-space:nowrap;">- 50.36</td>
                  </tr> -->
                  <tr >
                    <td class="text-right pr-5 pb-3 text-sm font-medium" >{{ $t('orinvoiceTotal') }}</td>
                    <td  >&nbsp;</td>
                    <td class="text-right pr-0 pb-3 font-medium" >{{tofixedTwoDigit(orderDetailsData.amountPayable)}}</td>
                  </tr>
                </tbody>
              </table>
             </div>
              
             <div class="w-full relative flex flex-row">
                <div class="mr-4 basis-9/12">
                <div class="w-full px-8 py-3">
                    <div class="text-sm text-gray-900 font-medium">{{ orderDetailsData.orderStatus === 'DELIVERED' ? 'Address' : $t('deliverto') }} :</div>
                    <div class="text-sm text-gray-500 mt-1">{{orderDetailsData.userName}}</div>
                </div>

                <div class="w-full px-8">
                    <!-- <div class="bg-gray-200 rounded-sm h-[16px] flex justify-center items-center mb-2 w-[45px]">
                         <div class="text-gray-700 text-[10px] address-type"> Home</div> 
                    </div> -->

                    <div class="text-[12px] text-gray-700"> {{ getAddressitemDet(orderDetailsData.deliveryAddress)  }} </div>
                    
                    <div class="mt-2 text-[11px] text-gray-700 flex items-center font-medium">{{ $t('mobile') }} : <span
                            class="ml-1">{{ remove91ToPhoneNumber(orderDetailsData.mobile) }}</span></div>
                </div>
                </div>

                <div  v-if="orderDetailsData.orderStatus !== 'DELIVERED' "  class="flex flex-col basis-3/12">
                  <div class="text-gray-700 text-sm font-medium mt-4 mb-2">{{ $t('shareAddress') }}</div>
                  <div class="food-share-address flex justify-start">
                  <sharedeliveryaddress  :delAddress="getAddressitemDet(orderDetailsData.deliveryAddress)"/>
                  </div>
                </div>
                 
              </div>
                

                <!-- <div class="w-full px-8 mt-4">
                    <button type="button"
                        class="border border-firoza flex justify-center items-center bg-transparent py-1.5 px-4 rounded bg-firoza text-sm text-white"><span>Mark
                            Prepare</span></button>
                </div> -->

            </div>

        </div>
    </div>
</div>
</div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  import { mapState, mapGetters } from 'vuex'
import Sharedeliveryaddress from "../../atoms/sharedeliveryaddress.vue";
import spinner from "../../atoms/spinner.vue";
  export default Vue.extend({
  components: { spinner, Sharedeliveryaddress },
    name: "Orderdetails",
    props: ["orderDetailsId"],
    computed: {
      ...mapState({
        authUser: state => state.authUser
      })
    },
    mounted(){
     console.log("this.mode-----------------------------------",this.orderDetailsId)
     if(this.orderDetailsId){
        this.getOrderDetails(this.orderDetailsId)
     }
    //  if(this.orderDetails.id){
    //     this.showDetModal = true
    //  }
    },
    created() {
    
    },
    data() {
      return {
        loading: true,
        showDetModal : false,
        orderDetailsData:null,
       
      };
    },
    methods: {

      tofixedTwoDigit(priceval: any) {
            if (priceval) {
                return priceval.toFixed(2)
            }
        },

        transformDate(value) {
            if (value) {
                return this.$moment(value).format('h:mm:ss a')
            }
        },

        getAddressitemDet(addressItemDet: any) {
            const addDetArray = []
            if (addressItemDet) {
                addDetArray.push(addressItemDet?.addressLine, addressItemDet?.flatNo, addressItemDet?.area,
                    addressItemDet?.city, addressItemDet?.landmark, addressItemDet?.state, addressItemDet?.zip)
            }
            if (addDetArray.length) {
                var filtered = addDetArray.filter(function (el) {
                    return el != null;
                });
                return filtered.join();
            }
        },

        remove91ToPhoneNumber(phone: any) {
       // console.log("remove91ToPhoneNumber",phone)
        if (phone === "") {
          return "";
        } else {
          let replaceString = "+91";
          if (phone && phone.includes(replaceString)) {
            phone = phone.replace(replaceString, "");
          }
          return phone;
        }
      },
        async getOrderDetails() {
            this.loading = true
            try {
                const url = `/forder/v1/order/${this.orderDetailsId}`;
                const data = await this.$axios.$get(url);
                this.orderDetailsData = data.payload
                this.loading = false

            } catch (error) {
                this.loading = false
            }

        },

        detailsPopupClose(){
            this.$emit("closeDeatilsPopUp", false);
        }
    }
  });
  </script>
  <style scoped>
    .-z-1 {
      z-index: -1;
    }
  
    .origin-0 {
      transform-origin: 0%;
    }
  
    input[type="text"]:focus ~ label,input[type="number"]:focus ~ label, input[type="email"]:focus ~ label,
    input[type="text"]:not(:placeholder-shown) ~ label, input[type="email"]:not(:placeholder-shown) ~ label,
    textarea:focus ~ label,
    textarea:not(:placeholder-shown) ~ label,
    select:focus ~ label,
    select:not([value='']):valid ~ label {
      /* @apply transform; scale-75; -translate-y-6; */
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
        skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      --tw-scale-x: 0.75;
      --tw-scale-y: 0.75;
      --tw-translate-y: -1.5rem;
    }
  
    input[type="text"]:focus ~ label, input[type="email"]:focus ~ label,
    select:focus ~ label {
      /* @apply text-black; left-0; */
      --tw-text-opacity: 1;
      color: rgba(72, 206, 243, var(--tw-text-opacity));
      left: 0px;
    }

    .food-share-address .sharec-1 {
      position: relative !important;
      right: 0px !important;
      left: inherit !important;
      width: 125px !important;
      box-shadow: none !important;
      bottom: 0px !important;
      z-index: 999 !important;
      margin: 0px !important;
      padding: 0px !important;
    }


  </style>