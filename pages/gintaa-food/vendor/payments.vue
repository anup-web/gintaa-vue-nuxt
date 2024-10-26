<template>
    <div class="relative bg-[#f8f8f8] min-h-screen">

        <GintaaFoodVendorSidebar />
        <div
            class="content-wrapper content-wrapper-min pl-0 relative z-10 sm:pl-0 md:pl-[180px] lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px]">
            <!-- <fullPageLoader v-if="showSeamerLoader" />    -->
            <GintaaFoodVendorHeader />
            <div
                class="content pt-[60px] pb-[100px] px-4 sm:pt-[60px] sm:px-4 sm:pb-[100px] md:px-4 md:pt-[100px] lg:px-8 md:pb-0">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-right text-base font-medium">Payments</div>
                    <div class="items-center justify-center hidden sm:hidden md:flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 5.37766L17.5 12.3568V20.0002H12.5V15.0002H7.5V20.0002H2.5V12.3568L10 5.37766ZM20 10.1235L10 0.833496L0 10.111L1.13417 11.3318L10 3.1085L18.8658 11.3443L20 10.1235Z"
                                fill="#8EC23C" />
                        </svg>
                        <span class="text-sm text-green ml-2">Home / Menu / Payments</span>
                    </div>
                </div>

                <div class="bg-white rounded-sm shadow-sm py-4 mt-6">
                    <!-- 
                    <div class="w-full flex min-h-[250px] justify-center items-center" v-if="loading">
                        <Spinner />
                    </div> -->

                    <!-- no menu start -->
                     <div v-if="paymnetDet.length === 0 && !loading" class="w-full px-4 py-8">
                                       <div class="flex items-center justify-center mb-4">
                                            <!-- <img src="~assets/images/food/add-food.svg" alt="image" class=" max-w-full" />                               -->
                                       </div>
                                       <div class="flex items-center justify-center text-base text-gray-700 font-medium text-center">No payment found</div>                                       
                                  </div> 
                    <!-- no menu end -->


                    <!-- <div class="border-b-2 px-4 pb-3 border-gray-200 flex items-center justify-end">
                        <div class="flex items-center ">
                                        <div class="text-sm text-gray-500 mr-2 hidden sm:block md:block">Sort By</div>
                                        <div class="relative z-0 order-date-picker">                               
                                            <client-only>
                                                <date-picker
                                                    id="date"                                                
                                                    v-model="date"
                                                    range
                                                    :disabled-date="disabledDate"
                                                    placeholder="Choose date"
                                                    :clearable="true"                                                    
                                                    @input="onDateTimeChange"/>
                                            </client-only>                                          
                                        </div>
                                </div> 

                    </div> -->



                    <div class="w-full px-4 sm:px-4 md:px-4 lg:px-4 ">
                        <div class="overflow-x-auto">

                            <div class="w-full">
                                <div class="accordion" id="accordionExample5">

                                    <div v-for="(item, i) in paymnetDet" :key="i"
                                        class="accordion-item bg-white border border-gray-200">
                                        <h2 class="accordion-header mb-0" id="headingTwo5">
                                            <button class="accordion-button collapsed relative flex items-center w-full py-3 px-4 text-sm font-medium text-gray-800 text-left
                                                  bg-white border-0 rounded-none transition focus:outline-none" type="button"
                                                data-bs-toggle="collapse" :data-bs-target="'#collapseTwo5' + i"
                                                aria-expanded="false" aria-controls="collapseTwo5">
                                                <div class="block items-center justify-between w-full pr-4 sm:block sm:pr-4 md:flex md:pr-8 lg:pr-12">
                                                    <div class="mr-4">Date : <span class="text-gray-600"> {{ transformDate(item.paymentDate) }}</span> </div>
                                                    <div class="mr-4">Id : <span class="text-gray-600"> {{ item.id }}</span> </div>
                                                    <div class="mr-0 flex items-center sm:flex md:block lg:flex">Total Amount : 
                                                        <div class="flex items-center relative pl-2">
                                                            <svg width="6" height="11" viewBox="0 0 11 18"
                                                                                fill="none">
                                                                                <path opacity="0.7" fill-rule="evenodd"
                                                                                    clip-rule="evenodd"
                                                                                    d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                                                    fill="black"></path>
                                                                            </svg>
                                                            <span class="ml-1 text-gray-600"> {{ item.amount }} </span>
                                                        </div> 
                                                    </div>
                                               </div>
                                            </button>
                                        </h2>
                                        <div :id="'collapseTwo5' + i" class="accordion-collapse collapse"
                                            aria-labelledby="headingTwo5">
                                            <div class="accordion-body py-0 px-0">
                                                <div class="overflow-x-auto">
                                                <div class="inline-block min-w-full py-0 align-middle">
                                                    <div class="shadow-sm overflow-x-auto">
                                                        <table class="min-w-full divide-y divide-gray-300 table-auto"
                                                            style="border-spacing: 0">
                                                            <thead class=" bg-transparent">
                                                                <tr>

                                                                    <th scope="col"
                                                                        class="whitespace-nowrap sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900 ">
                                                                        SL No.</th>
                                                                    <th scope="col"
                                                                        class="whitespace-nowrap sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900 ">
                                                                        Order ID</th>
                                                                    <th scope="col"
                                                                        class="whitespace-nowrap sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900 ">
                                                                        Payout Amount</th>
                                                                    <th scope="col"
                                                                        class="whitespace-nowrap sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900 ">
                                                                        Total Payable Amount</th>
                                                                    <!-- <th scope="col" class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900 ">Restaurant payable amount</th> -->

                                                                </tr>
                                                            </thead>
                                                            <tbody class="divide-y divide-gray-200 bg-white">
                                                                <tr v-for="(itemk, j) in  item.foodOrderList" :key="j">

                                                                    <td
                                                                        class="whitespace-nowrap py-3 px-2 text-sm font-medium text-gray-500 text-center">
                                                                        <div class="text-gray-500 text-sm font-medium">
                                                                            {{ j + 1 }} </div>
                                                                    </td>
                                                                    <td href="javascript:;" @click="viewOrderDet(itemk)"
                                                                        class="whitespace-nowrap cursor-pointer py-3 px-2 text-sm font-medium text-gray-500 text-center">
                                                                        <div class="text-firoza text-sm font-medium">
                                                                            {{ itemk.orderId }}</div>
                                                                    </td>
                                                                    <td class="whitespace-nowrap py-3 px-2 text-sm font-medium text-gray-500 text-center">
                                                                        <div
                                                                            class="font-medium text-gray-500 flex items-center justify-center relative">
                                                                            <svg width="6" height="11" viewBox="0 0 11 18"
                                                                                fill="none">
                                                                                <path opacity="0.7" fill-rule="evenodd"
                                                                                    clip-rule="evenodd"
                                                                                    d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                                                    fill="black"></path>
                                                                            </svg>
                                                                            <span class="ml-1">{{ itemk.payoutAmount }}</span>
                                                                        </div>
                                                                        
                                                                    </td>
                                                                    <td
                                                                        class="whitespace-nowrap py-3 px-2 text-sm font-medium text-gray-500 text-center">
                                                                        <div
                                                                            class="font-medium text-gray-500 flex items-center justify-center relative">
                                                                            <svg width="6" height="11" viewBox="0 0 11 18"
                                                                                fill="none">
                                                                                <path opacity="0.7" fill-rule="evenodd"
                                                                                    clip-rule="evenodd"
                                                                                    d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                                                    fill="black"></path>
                                                                            </svg>
                                                                            <span
                                                                                class="ml-1">{{ itemk.totalAmountPayable }}</span>
                                                                        </div>
                                                                    </td>


                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <!-- Accordian -->





                    <div v-show="loading" class=" py-6 flex justify-center">
                        <Spinner />
                    </div>

                    <Trigger @triggerIntersected="loadMore" />

                </div>
            </div>
        </div>

        <client-only>
            <GintaaFoodModalOrderdetails v-if="showDetailsPopup" :orderDetailsId="orderDetailsId"
                @closeDeatilsPopUp="closeDeatilsPopUp" />
        </client-only>

        <GintaaFoodVendorFooter />


    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex';
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css';

export default Vue.extend({
    name: 'PaymentPage',
    components: {
        DatePicker
    },
    // props:['selectedAddress'],

    data() {
        return {

            loading: true,
            page: 0,
            defaultSize: 20,
            paymnetDet: [],
            indexValue: null,
            showDetailsPopup: false,
            orderDetailsId: ''

        }
    },

    computed: {
        ...mapState({
            authUser: (state) => state.authUser
        }),
        ...mapGetters({
            isLoggedIn: 'isLoggedIn'
        })
    },
    created() {
    },
    mounted() {
        this.getResturantPaymentDetails()
    },
    methods: {

        viewOrderDet(selectedOrder) {
            console.log("selectedOrder", selectedOrder.orderId)
            this.orderDetailsId = selectedOrder.orderId
            this.showDetailsPopup = true
        },

        closeDeatilsPopUp() {
            this.orderDetailsId = ''
            this.showDetailsPopup = false
        },




        viewDet(index, itemVal) {
            this.indexValue = index
        },

        loadMore() {

        },
        transformDate(value) {
            if (value) {
                return this.$moment(value).format('DD/MM/YYYY')
                // return new DateTime (value)
            }
        },
        async getResturantPaymentDetails() {
            try {

                let rid = this.authUser ? this.authUser?.uid : ''

                let url = `/forder/v1/order/restaurant/payment/${rid}?page=${this.page}&size=12`
                const res = await this.$axios.get(url)
                console.log(res.data);
                // if (res.data && res.data.payload.length > 0) {
                //     this.paymnetDet = res.data.payload
                // }
                if (this.page === 0) {
                    this.paymnetDet = res.data.payload
                } else if (res.data.payload.length > 0) {
                    this.paymnetDet.push(...res.data.payload)
                }

                this.enableSearchMore = res.data.payload.length > 0
                this.loading = false
                // if (res.status == 200) {
                //     this.foodDet = res.data.payload

                // };

            } catch (error) {

                if (this.page === 0) {
                    this.listings = []
                }
                this.loading = false
                this.enableSearchMore = false
                //this.showSeamerLoader = false;
                //this.errorMenuFetch = true;
            }
        }
    }
})
</script>

<style scoped>.order-date-picker .mx-datepicker-range {
    width: 210px;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    height: 30px;
    padding: 0px 1px 0px 6px;
}</style>