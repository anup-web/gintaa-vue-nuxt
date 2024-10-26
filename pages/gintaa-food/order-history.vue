<template>
    <div class="payment-success-page pt-[80px] lg:pt-12 bg-[#F1F3F6]">
        <!--//////////header///////////-->
        <GintaaFoodConsumerHeader />
        <!--////////Breadcrumb//////////-->
        <div class="mx-auto max-w-[1920px] md:px-8 xl:px-16 2xl:px-16 pt-10 hidden md:flex">
            <Breadcrumb :breadcrumb="breadcrumb" />
        </div>
        <div class="container max-w-6xl mx-auto px-4 md:px-8 2xl:px-16 pt-5">

            <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mb-10">
                <div class="w-full bg-white px-4 pt-4">
                    <div class="w-full text-left text-base text-gray-700 font-medium mb-4">{{ $t('foodOrderHistory') }}</div>



                    <div class="flex items-center justify-end mb-4">
                        <div class="flex items-center mr-4">
                            <div class="text-sm text-gray-500 mr-2 hidden sm:block md:block">{{ $t('sortByDate') }}</div>
                            <div class="relative z-0 order-date-picker">
                                <client-only>
                                    <date-picker id="date" v-model="date" range :disabled-date="disabledDate"
                                        placeholder="Date" :clearable="true" @input="onDateTimeChange" />
                                </client-only>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="text-sm text-gray-500 mr-2 hidden sm:block md:block">{{ $t('sortBy') }}</div>
                            <div class="relative z-0 w-[110px] ">
                                <select name="orderstatus" @change="onChange($event)" v-model="orderStatusVal"
                                    class="text-gray-600 block w-full mt-0 bg-transparent border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#48cef3] rounded text-sm px-2 py-1">
                                    <option value="">All</option>
                                    <option class="p-1" v-for="(item, i) in oderStatus" :key="'item-' + i"
                                        :value="item.statusvalue">{{ item.statusname }}</option>

                                </select>
                                <span class="absolute right-2 top-[10px] -z-50">
                                    <svg width="12" height="7" viewBox="0 0 15 9" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>





                    <div v-for="(item, i) in orderlistings" :key="item.id"
                        class="mb-4 block justify-between border border-gray-200 px-4 py-4 sm:px-4 sm:py-4 sm:block md:px-4 md:py-4 md:flex lg:px-4 lg:py-4 xl:px-8 xl:py-6">

                        <div class="flex pr-0 sm:flex sm:pr-0 md:block md:pr-4 lg:flex lg:pr-4">
                            <div class="flex-shrink-0">
                                <div
                                    class="overflow-hidden w-[100px] h-[100px] sm:w-[100px] sm:h-[100px] md:w-[136px] md:h-[107px]">
                                    <img v-if="item.restaurant.photoUrl" :src="item.restaurant.photoUrl" :alt="item.restaurant.photoUrl"
                                        class="object-cover  max-h-[100%] max-w-[100%]">
                                        <img v-else src="~/assets/images/food/consumer/restaurant-no-image.jpg" alt="icon"
                                        class="object-cover  max-h-[100%] max-w-[100%]">
                                </div>
                            </div>
                            <div class="ml-4 mt-0 flex flex-1 flex-col sm:ml-4 sm:mt-0 md:ml-0 md:mt-4 lg:ml-4 lg:mt-0">
                                <div class="text-left text-[15px] font-medium text-gray-600">{{ item.restaurant.name }}
                                  
                                </div>
                                <div
                                    class="text-left text-xs text-gray-500 mt-1 sm:w-full md:w-[250px] lg:w-[275px] leading-[21px]">
                                    {{ getAddressitemDet(item.restaurant.location) }}</div>
                                <div class="text-left text-xs text-gray-600 mt-2 font-medium uppercase">{{ $t('foodOrder') }} # {{ item.orderId }}
                                </div>
                                <div v-if="item.orderDate" class="text-left text-xs text-gray-500 mt-1">{{
                                    transformDate(item.orderDate) }}</div>
                                <a :href="localePath(`/gintaa-food/order-details/${item.orderId}`)"
                                    class="text-left text-sm text-green mt-2 font-medium">{{ $t('viewDetails') }}</a>
                            </div>
                        </div>




                        <div class="flex flex-col w-[260px] mt-6 sm:mt-6 md:mt-0">
                            <div v-for="(itemk, j) in item.orderDetails" :key="j" class="flex flex-col">
                                <!-- <div   class="text-left text-sm text-gray-700">Jeera Rice X 1</div> -->
                                <tr>
                                    <td v-if="itemk.type" class=" px-3 py-4 text-sm text-[#44588F] text-center">
                                        <div class="flex items-center justify-center">
                                            <div v-if="itemk.type == 'NON_VEG'">
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029" />
                                                    <circle cx="10" cy="9" r="5" fill="#EE1029" />
                                                </svg>
                                            </div>
                                            <div v-else>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58" />
                                                    <circle cx="10" cy="9" r="5" fill="#1FBE58" />
                                                </svg>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-left text-sm text-gray-700 mt-1.5">{{ itemk.name }} X {{ itemk.quantity
                                    }}
                                    </td>
                                </tr>

                            </div>
                            <div>
                                <div class="text-left text-sm text-gray-700 mt-2 flex items-center">
                                    <span>{{ $t('totalPaid') }} : </span>
                                    <div class="flex items-center text-base text-gray-900 font-medium ml-2"><svg width="12"
                                            height="12" viewBox="0 0 14 25" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z"
                                                fill="black"></path>
                                        </svg> <span class="pl-0.5 text-gray-900">{{ item.amountPayable }}</span></div>
                                </div>
                                <div v-if="item.orderStatus && item.orderStatus === 'DELIVERED' && !item.rating && !ratedOrderId.includes(item.id)"
                                    class="mt-4 flex items-center">
                                    <!-- <button type="submit"
                                        class="w-28 border border-firoza flex justify-center items-center bg-firoza px-4 py-2 h-[30px] text-white font-normal text-sm"><span>Reorder</span></button>
                                    -->
                                    <button @click="showRatePopup(item)" type="submit"
                                        class="w-28 border border-firoza flex justify-center items-center bg-transparent px-4 py-2 h-[30px] text-firoza font-normal text-sm ml-0">
                                        <span>{{ $t('rateOrder') }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>



                        <div class="flex flex-col">
                            <div class="mt-4 sm:mt-4 md:mt-0">
                                <div v-if="item.orderStatus && item.orderStatus === 'DELIVERED'"
                                    class="flex w-full sm:w-full md:w-[200px] justify-end">
                                    <!-- <div class="flex-shrink-0">
                                        <div class="w-4 h-4 rounded-full bg-green flex items-center justify-center mt-0.5">
                                            <svg width="8" height="6" viewBox="0 0 22 16" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M21.1583 1.17508C21.6139 1.63069 21.6139 2.36939 21.1583 2.825L8.32496 15.6583C7.86935 16.1139 7.13065 16.1139 6.67504 15.6583L0.841709 9.825C0.386097 9.36939 0.386097 8.63069 0.841709 8.17508C1.29732 7.71947 2.03601 7.71947 2.49162 8.17508L7.5 13.1835L19.5084 1.17508C19.964 0.719471 20.7027 0.719471 21.1583 1.17508Z"
                                                    fill="#ffffff"></path>
                                            </svg>
                                        </div>
                                    </div> -->
                                    <div class="ml-2">
                                        <div class="text-[#36c703] text-[14px] font-medium">{{ item.orderStatus }}</div>
                                    </div>
                                </div>

                                <div v-if="item.orderStatus && (item.orderStatus === 'PLACED' || item.orderStatus === 'ACCEPTED' || item.orderStatus === 'PREPARED' || item.orderStatus === 'INITIATED')"
                                    class="flex w-full sm:w-full md:w-[200px] justify-end">
                                    <!-- <div class="flex-shrink-0">
                                        <div class="w-4 h-4 rounded-full bg-green flex items-center justify-center mt-0.5">
                                            <svg width="8" height="6" viewBox="0 0 22 16" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M21.1583 1.17508C21.6139 1.63069 21.6139 2.36939 21.1583 2.825L8.32496 15.6583C7.86935 16.1139 7.13065 16.1139 6.67504 15.6583L0.841709 9.825C0.386097 9.36939 0.386097 8.63069 0.841709 8.17508C1.29732 7.71947 2.03601 7.71947 2.49162 8.17508L7.5 13.1835L19.5084 1.17508C19.964 0.719471 20.7027 0.719471 21.1583 1.17508Z"
                                                    fill="#ffffff"></path>
                                            </svg>
                                        </div>
                                    </div> -->
                                    <div class="ml-2">
                                        <div class="text-[#4b67ec] text-[14px] font-medium ">
                                            {{ setOrderStatus(item.orderStatus) }}</div>
                                    </div>
                                </div>

                                <div v-if="item.orderStatus && (item.orderStatus === 'CANCELED' || item.orderStatus === 'FAILED')"
                                    class="flex w-full sm:w-full md:w-[200px] justify-end">
                                    <!-- <div class="flex-shrink-0">
                                        <div class="w-4 h-4 rounded-full bg-red flex items-center justify-center mt-0.5">
                                            <svg width="8" height="6" viewBox="0 0 22 16" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M21.1583 1.17508C21.6139 1.63069 21.6139 2.36939 21.1583 2.825L8.32496 15.6583C7.86935 16.1139 7.13065 16.1139 6.67504 15.6583L0.841709 9.825C0.386097 9.36939 0.386097 8.63069 0.841709 8.17508C1.29732 7.71947 2.03601 7.71947 2.49162 8.17508L7.5 13.1835L19.5084 1.17508C19.964 0.719471 20.7027 0.719471 21.1583 1.17508Z"
                                                    fill="#ffffff"></path>
                                            </svg>
                                        </div>
                                    </div> -->
                                    <div class="ml-2">
                                        <div class="text-[#f83c3c] text-[14px] font-medium "> {{ item.orderStatus }}</div>
                                    </div>
                                </div>


                                 <div v-if="item.rating && item.orderStatus === 'DELIVERED' && item.rating !== '0.0'"
                                    class="flex items-center mt-10">
                                    <div class="text-gray-900 text-sm mr-2 mt-1">{{ $t('yourRating') }} :</div>
                                    <div class="flex items-center">

                                        <star-rating v-model="item.rating"  inactive-color="#ffffff" text-class="#ffffff" read-only :increment="0.1"
                                            active-color="#ffa41c" :border-width="1" border-color="#d15f0b" :animate="true"
                                            :rounded-corners="true" v-bind:max-rating="5" v-bind:star-size="13"> </star-rating>
                                     </div>
                                </div> 
                            </div>

                        </div>


                    </div>

                    <!-- <div v-if="orderlistings && orderlistings.length == 0 && !loading"
                        class="notFound text-center py-5 px-2">No order found   -->
                    <div v-if="orderlistings && orderlistings.length == 0 && !loading" class="py-16">
                        <div class="w-full cart-empty px-4 py-4 bg-white">
                            <div class="flex items-center justify-center"><img src="~/assets/images/food/no-orders.svg"
                                    alt="image"></div>
                            <div class="text-lg text-gray-900 font-medium mb-3 text-center mt-3">{{ $t('noOrderFound') }}</div>
                        </div>
                    </div>
                    <!-- </div> -->


                    <!-- seamer loader start  -->
                    <div v-show="loading" class="relative w-full overflow-hidden flex flex-col">
                        <div
                            class=" animate-pulses flex items-center justify-between px-4 py-2 border border-gray-200 rounded-md mb-4">
                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>
                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="flex items-center justify-center ml-2">
                                <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                            </div>
                        </div>
                        <div
                            class=" animate-pulses flex items-center justify-between px-4 py-2 border border-gray-200 rounded-md mb-4">
                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>
                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="flex items-center justify-center ml-2">
                                <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                            </div>
                        </div>
                        <div
                            class=" animate-pulses flex items-center justify-between px-4 py-2 border border-gray-200 rounded-md mb-4">
                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>
                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="flex items-center justify-center ml-2">
                                <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                            </div>
                        </div>
                        <div
                            class=" animate-pulses flex items-center justify-between px-4 py-2 border border-gray-200 rounded-md mb-4">
                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>
                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="flex items-center justify-center ml-2">
                                <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                            </div>
                        </div>
                        <div
                            class=" animate-pulses flex items-center justify-between px-4 py-2 border border-gray-200 rounded-md mb-4">
                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>
                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="flex items-center justify-center ml-2">
                                <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                            </div>
                        </div>
                        <div
                            class=" animate-pulses flex items-center justify-between px-4 py-2 border border-gray-200 rounded-md mb-4">
                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>
                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="flex items-center justify-center ml-2">
                                <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                            </div>
                        </div>
                    </div>
                    <!-- seamer loader end -->


                    <Trigger @triggerIntersected="loadMore" />


                </div>
            </div>






        </div>

        <GintaaFoodModalRateorder v-if="showOrderRateModal" :orderDetails="orderDetails" @closeRatePopUp="closeRatePopUp"
            @ratedOrderId="setRatedOrderId" />
        <!--footer section goes here-->
        <GintaaFoodConsumerFooter />

        <!-- start Order rating  modal  -->
        <div class="relative z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-50 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">

                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white px-0 pt-2 pb-4 text-left shadow-xl transition-all sm:my-4 sm:w-full sm:max-w-sm ">

                        <div class="w-full">
                            <div class="flex items-center justify-between border-b-2 border-gray-200 px-4 pb-2">
                                <div class="text-base text-gray-900">Rating</div>
                                <div class="absolute top-0 right-0 pt-2 pr-2 block">
                                    <button type="button" class="rounded-md bg-white text-gray-400 ">
                                        <span class="sr-only">Close</span>

                                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div class="w-full flex items-center justify-center mt-6">
                                <img src="~/assets/images/food/rating-image.svg" alt="icon" class="w-[105px] h-[94px]" />
                            </div>

                            <div class="w-full flex items-center justify-center mt-2">
                                <div class="text-firoza text-base font-medium">Loved it</div>
                            </div>

                            <div class="w-full flex items-center justify-center">
                                <div class="text-gray-700 text-xs">Rate your restaurant</div>
                            </div>

                            <div class="w-full flex items-center justify-center mt-3">
                                <div class="flex items-center">
                                    <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-900" viewBox="0 0 46 44" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                            fill="#FFB801" />
                                    </svg>
                                    <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-900" viewBox="0 0 46 44" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                            fill="#FFB801" />
                                    </svg>
                                    <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-900" viewBox="0 0 46 44" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                            fill="#FFB801" />
                                    </svg>
                                    <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-900" viewBox="0 0 46 44" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                            fill="#FFB801" />
                                    </svg>
                                    <svg class="flex-shrink-0 w-5 h-5 text-gray-900" viewBox="0 0 46 44" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                            fill="#DADADA" />
                                    </svg>
                                </div>
                            </div>

                            <div class="w-full flex items-center justify-center mt-3">
                                <div class="text-[#00C5FF] text-sm font-medium">Very Good</div>
                            </div>

                            <div class="w-full flex items-center justify-center mt-3">
                                <div class="rounded-md px-4 py-4 shadow-md w-[350px]">
                                    <div class="text-gray-900 text-sm ">Did you like the taste?</div>

                                    <div class="text-gray-900 text-sm  mt-3 mb-1">Chili Chicken</div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center bg-[#F2F2F2] w-[135px] rounded-full px-3 py-1">
                                            <svg class="flex-shrink-0 w-4 h-4 mr-2 text-gray-900" viewBox="0 0 46 44"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                                    fill="#FFB801" />
                                            </svg>
                                            <svg class="flex-shrink-0 w-4 h-4 mr-2 text-gray-900" viewBox="0 0 46 44"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                                    fill="#FFB801" />
                                            </svg>
                                            <svg class="flex-shrink-0 w-4 h-4 mr-2 text-gray-900" viewBox="0 0 46 44"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                                    fill="#FFB801" />
                                            </svg>
                                            <svg class="flex-shrink-0 w-4 h-4 mr-2 text-gray-900" viewBox="0 0 46 44"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                                    fill="#FFB801" />
                                            </svg>
                                            <svg class="flex-shrink-0 w-4 h-4 text-gray-900" viewBox="0 0 46 44" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                                    fill="#DADADA" />
                                            </svg>
                                        </div>
                                        <div class="text-[#00C5FF] text-sm font-medium">Excellent</div>
                                    </div>

                                    <div class="text-gray-900 text-sm  mt-3 mb-1">Chicken Biryani with Egg</div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center bg-[#F2F2F2] w-[135px] rounded-full px-3 py-1">
                                            <svg class="flex-shrink-0 w-4 h-4 mr-2 text-gray-900" viewBox="0 0 46 44"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                                    fill="#FFB801" />
                                            </svg>
                                            <svg class="flex-shrink-0 w-4 h-4 mr-2 text-gray-900" viewBox="0 0 46 44"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                                    fill="#FFB801" />
                                            </svg>
                                            <svg class="flex-shrink-0 w-4 h-4 mr-2 text-gray-900" viewBox="0 0 46 44"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                                    fill="#FFB801" />
                                            </svg>
                                            <svg class="flex-shrink-0 w-4 h-4 mr-2 text-gray-900" viewBox="0 0 46 44"
                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                                    fill="#FFB801" />
                                            </svg>
                                            <svg class="flex-shrink-0 w-4 h-4 text-gray-900" viewBox="0 0 46 44" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                                    fill="#DADADA" />
                                            </svg>
                                        </div>
                                        <div class="text-[#00C5FF] text-sm font-medium">Good</div>
                                    </div>

                                </div>
                            </div>

                            <div class="w-full flex flex-col mt-3 px-4">
                                <div class="flex justify-center mt-2">
                                    <div class="mb-3 w-full">
                                        <textarea
                                            class="form-control block w-full px-0 py-1.5 text-base font-normal text-gray-700 text-xs
                                                   bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out
                                                   m-0 focus:text-gray-700 focus:bg-white focus:border-firoza focus:outline-none"
                                            id="exampleFormControlTextarea1" rows="2" placeholder="Write your review">
                                              </textarea>
                                    </div>
                                </div>

                                <button
                                    class="bg-firoza text-white w-full py-2 px-4 rounded text-base flex items-center justify-center"><span>
                                        Submit </span></button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- end  Order rating  modal  -->

    </div>
</template>
    
    
    
    
    
    
    
<script lang="ts">
import Vue from 'vue'
import 'vue2-datepicker/index.css';
import DatePicker from 'vue2-datepicker'
import Resseamerspinner from '../../components/atoms/resseamerspinner.vue';
export default Vue.extend({
    name: 'OrderHistory',
    components: {
        Resseamerspinner,
        DatePicker
    },
    data: function () {
        return {
            breadcrumb: [
                {
                    name: 'Food Order History'//this.$t('search')
                }
            ],
            rating:0,
            defaultSize: 10,
            showOrderRateModal: false,
            fromDate: null,
            toDate: null,
            page: 0,
            orderlistings: [],
            date: [],
            orderStatusVal: '',
            orderDetails: {},
            oderStatus: [{
                statusvalue: 'INITIATED',
                statusname: 'INITIATED'
            },
            {
                statusvalue: 'PLACED',
                statusname: 'PLACED'
            },
            {
                statusvalue: 'ACCEPTED',
                statusname: 'PREPARING'
            },
            {
                statusvalue: 'PREPARED',
                statusname: 'PICKED UP'
            },
            {
                statusvalue: 'DELIVERED',
                statusname: 'DELIVERED'
            },
            {
                statusvalue: 'CANCELED',
                statusname: 'CANCELED'
            },
            {
                statusvalue: 'FAILED',
                statusname: 'FAILED'
            }
            ],
            selectedAddress: null,
            loading: true,
            enableSearchMore: false,
            searchTypeList: [{
                'value': 'resturant',
                'selected': true,
                'searchtype': 'Resturant' //this.$t('usedCondition')
            },
            {
                'value': 'dish',
                'selected': false,
                'searchtype': 'Dishes'//this.$t('newCondition')
            }],
            ratedOrderId: []
        }
    },

    computed: {
        rateVale() {
            // console.log("this.listing.user.averageRating",this.listing.user.averageRating)
            return 5;
            // return Number(this.listing.user.averageRating)
        }
    },

    mounted() {

        this.getOrderHistory()
    },

    methods: {
        setOrderStatus(orderStatus) {
            let odrStatus = orderStatus
            if (odrStatus === 'PLACED') {
                return 'PLACED'
            } else if (odrStatus === 'ACCEPTED') {
                return 'PREPARING'
            } else if (odrStatus === 'PREPARED') {
                return 'PICKED UP'
            }else if (odrStatus === 'INITIATED') {
                return 'INITIATED'
            }
        },
        setRatedOrderId(orderId: string) {
            console.log('setRatedOrderId:', orderId)
            this.ratedOrderId.push(orderId)
            console.log('setRatedOrderId:', this.ratedOrderId)
        },
        closeRatePopUp() {
            this.showOrderRateModal = false
            this.orderDetails = {}
        },

        showRatePopup(odrDet: any) {
            this.showOrderRateModal = true
            this.orderDetails = odrDet
        },

        onChange(event) {
            this.orderStatusVal = event.target.value
            this.orderlistings = []
            this.page = 0
            this.enableSearchMore = false
            this.getOrderHistory()
        },

        onDateTimeChange() {
            if (this.date[0] && this.date[1]) {
                this.fromDate = this.$moment(this.date[0]).format('YYYYMMDD')
                this.toDate = this.$moment(this.date[1]).format('YYYYMMDD')
                console.log('Selected Date: fromDate', this.fromDate)
                console.log('Selected Date: toDate', this.toDate)
            } else {
                this.fromDate = null
                this.toDate = null
            }

            this.page = 0
            this.showLoader = true
            this.getOrderHistory()
        },

        transformDate(value) {
            if (value) {
                return this.$moment(value).format(' MMMM D , YYYY, h:mm:ss a')
            }
        },

        disabledDate(date: any) {
            if (date.getTime() > new Date().getTime()) {
                return true
            }
        },

        async getOrderHistory() {
            this.loading = true
            let size = this.defaultSize

            let orderStatusVal = ''
            if (this.orderStatusVal) {
                orderStatusVal = `&orderStatus=${this.orderStatusVal}`
            }

            const dateFilter = this.fromDate && this.toDate ? `&fromDate=${this.fromDate}&toDate=${this.toDate}` : ``;

            try {
                const url = `/forder/v1/order/order-history?${orderStatusVal}${dateFilter}&page=${this.page}&size=${size}`;
                const data = await this.$axios.$get(url);
                //  console.log("Data",data)  

                if (this.page === 0) {
                    this.orderlistings = data.payload
                    console.log("this.orderlistings", this.orderlistings)
                } else if (data.payload.length > 0) {
                    this.orderlistings.push(...data.payload)
                }

                this.enableSearchMore = data.payload.length > 0

                this.loading = false

            } catch (error) {
                if (this.page === 0) {
                    this.orderlistings = []
                }
                this.loading = false
                this.enableSearchMore = false

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



        loadMore() {
            console.log("loadmore called")
            if (!this.loading && this.enableSearchMore) {
                this.page++
                this.getOrderHistory()
            }
        },




    }
})
</script>
    
    
<style>
.rating-sec .vue-star-rating .vue-star-rating-star {

    margin-right: 2px !important;

}

.rating-sec .vue-star-rating .vue-star-rating-rating-text {
    font-size: 13px !important;
    color: #007185 !important
}

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

.order-date-picker .mx-datepicker-range {
    width: 210px;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    height: 30px;
    padding: 0px 1px 0px 6px;
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
    
    