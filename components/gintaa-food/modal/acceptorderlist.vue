<template>
    <div v-if="orderListToAccept && orderListToAccept.length > 0" class="relative z-50 " aria-labelledby="modal-title"
        role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-50 overflow-y-auto">
            <div class="flex min-h-full items-start justify-center p-4 text-center sm:p-0">

                <div
                    class="relative transform  rounded-lg bg-white px-0 pt-2 pb-4 mb-20 text-left shadow-xl transition-all sm:my-4 sm:w-full sm:max-w-2xl ">

                    <div class="w-full">
                        <div class="flex items-center justify-between border-b-2 border-gray-200 px-4 pb-2">
                            <div class="text-base text-gray-900">New Order({{ orderListToAccept.length }}) </div>
                            <div class="pl-4 pr-8">
                            <div class="text-sm text-gray-700 hidden sm:hidden md:block">{{ $t('orderId') }} : <span class="text-gray-600 font-medium">{{ ordertoViewDetails.orderId }}</span></div>
                            <div class="absolute top-0 right-0 pt-2 pr-2 block">
                                <button @click="closeAcceptOfferlist()" type="button"
                                    class="rounded-md bg-white text-gray-400 ">
                                    <span class="sr-only">Close</span>

                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                           </div>
                        </div>

                        <div class="block items-center px-8 py-4 sm:block md:flex">
                            
                            <div class="text-sm text-gray-700 ml-0">{{ $t('foodCustomer') }} : <span class="text-gray-600 font-medium">{{
                                ordertoViewDetails.userName }}</span></div>
                            <div class="text-sm text-gray-700 ml-0 sm:ml-0 md:ml-6">{{ $t('foodTime') }} : <span class="text-gray-600 font-medium">{{ transformDate(ordertoViewDetails.orderDate) }}</span></div>
                            <div class="text-sm text-gray-700 ml-0 sm:ml-0 md:ml-6 block sm:block md:hidden">{{ $t('orderId') }} : <span class="text-gray-600 font-medium">{{ ordertoViewDetails.orderId }}</span></div>
                            <div class="text-sm text-gray-700 ml-0 sm:ml-0 md:ml-6"> Payment Mode : <span class=" uppercase font-bold rounded-md border-[#1FBE58] border px-2 py-1 text-[#1FBE58]">Online</span></div>
                        </div>

                       


                        <div class="w-full px-8">

                            <table class="min-w-full border">
                                <thead class="border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-2 border-r">
                                            {{ $t('foodDetails') }}</th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-2 border-r text-center">
                                                {{ $t('quantity') }}</th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-2 text-center">
                                            {{ $t('amount') }} </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-for="(item, i) in ordertoViewDetails.orderDetails" :key="i"
                                        class="bg-white border-b">
                                        <td class="text-sm text-gray-700 px-4 py-2  border-r"> 
                                            {{ item.name }}</td>

                                            <td class="text-sm text-gray-700 px-4 py-2  border-r text-center">{{ item.quantity }} 
                                          </td>

                                        <td class="text-sm text-gray-700 px-4 py-2 text-right">
                                            <div class="text-sm flex items-center justify-end"><svg width="7" height="15"
                                                    viewBox="0 0 11 18" fill="none">
                                                    <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                        fill="black"></path>
                                                </svg> <span class="ml-1">{{ item.price }}</span></div>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="text-sm text-gray-700 px-4 py-2 font-medium border-r">{{ $t('total') }}</td>
                                        <td class="text-sm text-gray-700 px-4 py-2  border-r">&nbsp; 
                                          </td>
                                        <td class="text-sm text-gray-900 px-4 py-2 text-right">
                                            <div class="font-medium text-sm flex items-center justify-end"><svg width="7"
                                                    height="15" viewBox="0 0 11 18" fill="none">
                                                    <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                        fill="black"></path>
                                                </svg> <span class="ml-1">{{ tofixedTwoDigit(ordertoViewDetails.totalItemAmount) }}</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div class="px-8 py-2">
                            <table width="100%" class="" cellpadding="0" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th class="w-[60%] text-right pr-5 pb-3 text-sm">{{ $t('foodTaxes') }} &amp; {{ $t('foodDiscount') }}</th>
                                        <th class="w-[20%] text-right pr-5 pb-3  text-sm">{{ $t('rateBtn') }}</th>
                                        <th class="w-[20%] text-right pr-0 pb-3  text-sm">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-if="ordertoViewDetails.restaurantDiscountAmount">
                                        <td class="text-right pr-5 pb-3 text-sm">{{ $t('restaurantDiscount') }}</td>
                                        <td class="text-right pr-5 pb-3 text-sm">{{ ordertoViewDetails.restaurantDiscountPercent }}%
                                        </td>
                                        <td class="text-right pr-4 pb-3 text-sm">- {{ tofixedTwoDigit(ordertoViewDetails.restaurantDiscountAmount) }}
                                        </td>
                                    </tr>
                                    <tr v-if="ordertoViewDetails.gintaaDiscountAmount">
                                        <td class="text-right pr-5 pb-3 text-sm">Gintaa Discount</td>
                                        <td class="text-right pr-5 pb-3 text-sm">{{ ordertoViewDetails.gintaaDiscountPercent }}%
                                        </td>
                                        <td class="text-right pr-4 pb-3 text-sm">- {{ tofixedTwoDigit(ordertoViewDetails.gintaaDiscountAmount) }}
                                        </td>
                                    </tr>
                                    <tr v-if="ordertoViewDetails.gstAmount">
                                        <td class="text-right pr-5 pb-3 text-sm"> GST</td>
                                        <td class="text-right pr-5 pb-3 text-sm">{{ ordertoViewDetails.gstPercent }}%</td>
                                        <td class="text-right pr-4 pb-3 text-sm"> {{ tofixedTwoDigit(ordertoViewDetails.gstAmount) }} </td>
                                    </tr>
                                    <tr v-if="ordertoViewDetails.coinsUsed">
                                        <td class="text-right pr-5 pb-3 text-sm"> <div class="justify-end flex items-center">{{ $t('gintaaCoinUsed') }} <img src="~/assets/images/coin.svg" class="mr-1 w-[18px]"></div></td>
                                        <td class="text-right pr-5 pb-3">&nbsp;</td>
                                        <td class="text-right pr-4 pb-3 text-sm "> {{ ordertoViewDetails.coinsUsed }} </td>
                                    </tr>
                                    <tr v-if="ordertoViewDetails.deliveryCharge">
                                        <td class="text-right pr-5 pb-3 text-sm"> {{ $t('deliveryCharges') }}</td>
                                        <td class="text-right pr-5 pb-3">&nbsp;</td>
                                        <td class="text-right pr-4 pb-3 text-sm "> {{ tofixedTwoDigit(ordertoViewDetails.deliveryCharge) }} </td>
                                    </tr>

                                   

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
                                    <tr>
                                        <td class="text-right pr-5 pb-3 font-bold text-sm">{{ $t('invoiceTotal') }}</td>
                                        <td>&nbsp;</td>
                                        <td class="text-right pr-4 pb-3 font-bold text-sm">{{ ordertoViewDetails.coinsUsed ? tofixedTwoDigit(+ordertoViewDetails.coinsUsed + ordertoViewDetails.amountPayable) : tofixedTwoDigit(ordertoViewDetails.amountPayable)}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="w-full relative flex flex-row">
                            <div class="mr-4 basis-9/12">
                        <div class="w-full px-8 pt-3 pb-2">
                            <div class="text-base text-gray-900 text-[13px] font-medium">{{ $t('deliverto') }} :</div>
                            <div class="text-sm text-gray-600 mt-1 font-medium">{{ ordertoViewDetails.userName }}</div>
                        </div>

                        <div class="w-full px-8">
                            <!-- <div class="bg-gray-200 rounded-sm h-[16px] flex justify-center items-center mb-2 w-[45px]">
                                 <div class="text-gray-700 text-[10px] address-type"> Home</div> 
                            </div> -->

                            <div class="text-[12px] text-gray-700"> {{ getAddressitemDet(ordertoViewDetails.deliveryAddress)
                            }} </div>
                            <div class="mt-2 text-[11px] text-gray-700 flex items-center font-medium">{{ $t('mobile') }} : <span
                                    class="ml-1">{{ remove91ToPhoneNumber(ordertoViewDetails.mobile) }}</span></div>
                                    <!-- <div class="text-[13px] text-gray-700 pt-1 ">ID : <span>{{ ordertoViewDetails.orderId }}</span></div> -->
                        </div>
</div>

<div class="flex flex-col basis-3/12">
    <div class="text-gray-700 text-sm font-medium mt-4 mb-2">{{ $t('shareAddress') }}</div>
                        <div class="food-share-address flex justify-start"><sharedeliveryaddress :delAddress="getAddressitemDet(ordertoViewDetails.deliveryAddress)"/></div>
                        </div>
                        </div>

                        <div class="w-full flex px-8 mt-4">
                            <!-- <button type="button" class="border border-firoza flex justify-center items-center bg-transparent py-1.5 px-4 rounded bg-firoza text-sm text-white"><span>Mark  Picked up</span></button>  -->
                           
                           <div class="flex items-center w-full justify-end">
                         
                            <a type="button" @click="acceptOffer(ordertoViewDetails.id)"
                                class=" cursor-pointer border mr-2 border-firoza  justify-center items-center bg-transparent  px-4 rounded bg-firoza text-sm text-white min-w-[140px] block leading-[45px] text-center font-medium"><span
                                    v-if="!loading">{{ $t('acceptBtn') }}</span>
                                <Spinner v-if="loading" />
                            </a>

                            <div v-if="ordertoViewDetails.orderDate">

                            <flip-countdown :deadline="getRemaingTime(ordertoViewDetails.orderDate)" :showDays="false"
                                showSeconds: false :showHours="false"></flip-countdown>
                            </div>
                   
                            </div>


                          



                        </div>
                        <div class="arrow-next-prev">
                            <a href="javascript:;"
                                v-if="orderListToAccept && orderListToAccept.length > 1 && setIndexValue !== 0"
                                class=" mr-2  border border-transparent shadow-sm  border-[#8CAEC5] text-xs md:text-base font-medium text-white  text-center absolute -left-[50px] bg-white bottom-[300px] rounded-full w-[40px] h-[40px] items-center justify-center flex"
                                @click="prevOrder()"> <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z" fill="#8CAEC5"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="#8CAEC5"/>
</svg>

                                </span>
                                <!-- <Spinner  class="absolute right-2 top-1 w-5"/> -->
                            </a>

                            <a href="javascript:;"
                                v-if="orderListToAccept && orderListToAccept.length > 1 && setIndexValue !== maxIndexVal"
                                class=" mr-2  border border-transparent shadow-sm bg-white  border-[#8CAEC5] text-xs md:text-base font-medium text-firoza  text-center absolute -right-[55px] bottom-[300px] rounded-full w-[40px] h-[40px] items-center justify-center flex"
                                @click="nextOrder(setIndexValue)"> <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8Z" fill="#8CAEC5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.29289 15.7071C6.90237 15.3166 6.90237 14.6834 7.29289 14.2929L13.5858 8L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893C7.68342 -0.0976315 8.31658 -0.0976315 8.70711 0.292893L15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071Z" fill="#8CAEC5"/>
                                        </svg>


                                </span>
                                <!-- <Spinner v-show="loading" class="absolute right-2 top-1 w-5"/> -->
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
   
<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from 'vuex'
import spinner from "../../atoms/spinner.vue";
export default Vue.extend({
    components: { spinner },
    name: "Acceptorderlist",
    props: ["placedOrders"],
    computed: {
        ...mapState({
            authUser: state => state.authUser
        })
    },
    watch: {
        placedOrders(newPlacedOrdes, oldPlacedOrdes) { // watch it
            console.log('Prop changed: ', newPlacedOrdes, ' | was: ', oldPlacedOrdes)

            this.orderListToAccept = this.placedOrders
            this.maxIndexVal = +this.orderListToAccept.length - 1
            this.ordertoViewDetails = this.orderListToAccept[0]
            
        }
    },

    mounted() {
        //  console.log("this.mode----------------------------------- placedOrders", this.placedOrders)
        this.orderListToAccept = this.placedOrders
        this.maxIndexVal = +this.orderListToAccept.length - 1
        this.ordertoViewDetails = this.orderListToAccept[this.setIndexValue]
        console.log("this.ordertoViewDetails",this.ordertoViewDetails)


    },
    created() {

    },
    data() {
        return {
            maxIndexVal: null,
            loading: false,
            showDetModal: false,
            ordertoViewDetails: {},
            setIndexValue: 0,
            selectedAcceptedId: '',
            orderListToAccept: []

        };
    },
    methods: {

        tofixedTwoDigit(priceval: any) {
            if (priceval) {
                return priceval.toFixed(2)
            }
        },


        getRemaingTime(orderDte) {
            return this.addMinutes(new Date(orderDte), 10).toString()
        },

        addMinutes(dt, minutes) {
            return new Date(dt.getTime() + minutes * 60000);
        },

        closeAcceptOfferlist() {
            this.orderListToAccept = []
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

        async acceptOffer(selectedId) {
            console.log("selectedId", selectedId)
            this.selectedAcceptedId = selectedId
            let oid = selectedId
            this.loading = true


            try {
                const url = `/forder/v1/order/restaurant/accept/${oid}`
                const data = await this.$axios.$post(url);
                if (data.success) {
                    Vue.$toast.success(data?.message);
                    this.nextOrder(this.setIndexValue)
                    var foundIndex = this.orderListToAccept.findIndex(x => x.id == this.selectedAcceptedId);
                    this.orderListToAccept.splice(0, foundIndex)
                    this.$emit("acceptSuccesful", true);
                    // this.getCurrentOrders()
                }
                this.loading = false
            } catch (error: any) {
                this.loading = false
                Vue.$toast.error(error?.response?.data?.message);
                console.log(error);
            }
        },

        nextOrder(currentIndValue) {
            if (this.maxIndexVal !== currentIndValue) {
                this.setIndexValue = this.setIndexValue + 1
            }

            this.ordertoViewDetails = this.orderListToAccept[this.setIndexValue]

        },

        prevOrder() {
            if (this.setIndexValue !== 0) {
                this.setIndexValue = this.setIndexValue - 1
            }
            this.ordertoViewDetails = this.orderListToAccept[this.setIndexValue]

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

        detailsPopupClose() {
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

input[type="text"]:focus~label,
input[type="number"]:focus~label,
input[type="email"]:focus~label,
input[type="text"]:not(:placeholder-shown)~label,
input[type="email"]:not(:placeholder-shown)~label,
textarea:focus~label,
textarea:not(:placeholder-shown)~label,
select:focus~label,
.food-share-address .sharec-1 {
      position: absolute!important;
      right: -14px!important;
      left: inherit!important;
      width: 160px!important;
      box-shadow: none!important;
      bottom: 15px!important;
      z-index: 999!important;
      margin: 0px!important;
      padding: 0px!important;
    }
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

</style>