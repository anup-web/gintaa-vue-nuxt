<template>
    <div class="relative bg-[#f8f8f8] min-h-screen">
     
          <GintaaFoodVendorSidebar/> 
          <div class="content-wrapper content-wrapper-min pl-0 relative z-10 sm:pl-0 md:pl-[180px] lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px]">            
             <GintaaFoodVendorHeader/>
             <div class="content pt-[60px] pb-[100px] px-4 sm:pt-[60px] sm:px-4 sm:pb-[100px] md:pt-[100px] md:px-4 lg:px-8 md:pb-0">
                <div class="flex items-center justify-between mb-0">
                    <div class="text-right text-base font-medium">Past Order</div> 
                    <div class="items-center justify-center hidden sm:hidden md:flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5.37766L17.5 12.3568V20.0002H12.5V15.0002H7.5V20.0002H2.5V12.3568L10 5.37766ZM20 10.1235L10 0.833496L0 10.111L1.13417 11.3318L10 3.1085L18.8658 11.3443L20 10.1235Z" fill="#8EC23C"/>
                        </svg>
                         <span class="text-sm text-green ml-2">Home  / Order / Past Order</span>
                    </div>
                </div>


                <div class="inline-block w-full py-2 align-middle mt-4">

                <div class="table-content bg-white rounded-sm shadow-sm">
                    <div class="px-0 py-2">
                        <div class="mb-3 border-b-2 pb-2 border-gray-200 px-2 flex justify-end">
                        <!-- <form role="search" class="flex w-[300px] relative rounded-md mb-2 sm:mb-0 md:mb-0">
                            <label for="top-bar-search" class="flex flex-1 items-center "><input id="search at header" type="text" autocomplete="off" name="search" placeholder="Search by Order Id " value="" class="w-full h-full flex item-center appearance-none transition duration-300 ease-in-out text-heading text-sm placeholder-gray-500 overflow-hidden rounded focus:outline-none focus:ring-0 bg-gray-100 ps-10 pe-12 md:ps-14 border border-border-200 focus:border-accent focus:bg-light py-2 px-4"></label> <span class="w-12 md:w-12 h-full absolute top-0 right-0 flex flex-shrink-0 justify-center items-center focus:outline-none"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="w-5 h-5 text-skin-base ttext-gray-400"><path d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z" fill="#888a8f"></path></svg></span>
                        </form> -->
                        
                        <!-- <button type="button" class="border border-green flex justify-center items-center bg-transparent py-1 px-2 rounded bg-green text-xs text-white">
                                                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_104_1169)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C11 0.447715 10.5523 0 10 0C9.44771 0 9 0.447715 9 1V10.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L9.29218 13.7064C9.29459 13.7088 9.29702 13.7112 9.29945 13.7136C9.3938 13.8063 9.50195 13.8764 9.61722 13.9241C9.73425 13.9727 9.8625 13.9996 9.997 14H10H10.003C10.2746 13.9992 10.5208 13.8901 10.7005 13.7136C10.703 13.7112 10.7054 13.7088 10.7078 13.7064L15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289L11 10.5858V1ZM1 12C1.55228 12 2 12.4477 2 13V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13V17C20 17.7957 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7957 20 17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7957 0 17V13C0 12.4477 0.447715 12 1 12Z" fill="white"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_104_1169">
                                                    <rect width="20" height="20" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                    </svg>
                                                <span class="ml-2">Download CSV</span>
                      </button>   -->

                            <div class="ml-0 flex items-center">
                                <div class="flex items-center mr-4 sm:mr-6 md:mr-8">
                                        <div class="text-sm text-gray-500 mr-2 hidden sm:block md:block">{{ $t('sortBy') }}</div>
                                        <div class="relative z-0 order-date-picker">
                                            
                                            <!--  -->
                                            <!-- v-model="orderDaysFilter" -->
                                                    <!-- :format="$config.format.date" -->
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

                                            <!-- <select 
                                                v-model="orderDaysFilter" name="returnType"
                                                class="text-gray-600 block w-full mt-0 bg-transparent border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#48cef3] rounded text-sm px-2 py-1" 
                                                @change="getAllPastOrderHistory()">
                                                    <option value="weekly" class="p-1" >Last week</option>
                                                    <option value="monthly" class="p-1" >Last Month</option>                                                                                       
                                            </select> 
                                            <span class="absolute right-2 top-[10px] -z-50" >
                                                <svg width="12" height="7" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                                    <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round" stroke-linejoin="round" ></path></svg>
                                            </span> -->
                                        </div>
                                </div>
                                <div class="flex items-center">
                                    <div class="text-sm text-gray-500 mr-2 hidden sm:block md:block">{{ $t('sortBy') }}</div>
                                    <div class="relative z-0 w-[110px] " >
                                        <select name="returnType"  
                                            @change="changeOrderStatus"
                                            v-model="orderStatusFilter" 
                                            class="text-gray-600 block w-full mt-0 bg-transparent border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#48cef3] rounded text-sm px-2 py-1">
                                            <option 
                                                class="p-1"
                                                v-for="(item, index) of orderStatusFiterList"
                                                :key="'orderStatusFilter-'+index"
                                                :value="item.fieldValue">
                                                {{item.displayValue}}
                                            </option>

                                            <!-- <option value="New" class="p-1" >New</option>
                                            <option value="Preparing" class="p-1" >Preparing</option>
                                            <option value="Picked Up" class="p-1" >Picked Up</option>  
                                            <option value="Delivered" class="p-1" >Delivered</option>
                                            <option value="Cancel" class="p-1" >Cancel</option>-->
                                        </select> 
                                        <span class="absolute right-2 top-[10px] -z-50" >
                                            <svg width="12" height="7" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round" stroke-linejoin="round" ></path></svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-0 px-2 flex flex-col">
                            <div class="overflow-x-auto">
                            <div class="inline-block w-full py-2 align-middle">
                                <div class="shadow-sm ring-1 ring-black ring-opacity-5 overflow-x-auto">
                                    
                                    <!-- seamer loader start  -->
                                    <div v-if="showLoader" class="relative w-full bg-white overflow-hidden shadow hover:shadow-md rounded-lg border border-gray-200 divide-y divide-slate-200">
                                        <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>           
                                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div> 
                                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>           
                                            <div class="flex items-center justify-center ml-2">
                                            <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                            </div>
                                        </div>  
                                        <div class=" animate-pulses flex items-center justify-between px-12 py-2">
                                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>           
                                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div> 
                                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>           
                                            <div class="flex items-center justify-center ml-2">
                                            <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                            </div>
                                        </div>
                                        <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>           
                                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div> 
                                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>           
                                            <div class="flex items-center justify-center ml-2">
                                            <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                            </div>
                                        </div>  
                                        <div class=" animate-pulses flex items-center justify-between px-12 py-2">
                                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>           
                                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div> 
                                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>           
                                            <div class="flex items-center justify-center ml-2">
                                            <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                            </div>
                                        </div>
                                        <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>           
                                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div> 
                                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>           
                                            <div class="flex items-center justify-center ml-2">
                                            <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                            </div>
                                        </div>  
                                        <div class=" animate-pulses flex items-center justify-between px-12 py-2">
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
                                    <div v-else>
                                        <div v-if="!allOrderList.length" class="py-16">
                                            <div class="w-full cart-empty px-4 py-4 bg-white">                                            
                                            <div class="flex items-center justify-center"><img src="~/assets/images/food/no-data.png" alt="image" class="w-[240px] h-[190px]" ></div> 
                                            <div class="text-lg text-gray-900 font-medium mb-3 text-center">{{ $t('noDataFound') }}</div>
                                        </div> 
                                        </div>   
                                        <div v-else>
                                            <table  class="min-w-full border-separate table-auto" style="border-spacing: 0">
                                                <thead class="bg-gray-50">
                                                <tr>
                                                    <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-2 py-2 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Order ID</th>                                        
                                                    <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-2 py-2 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Date & Time</th>
                                                    <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-2 py-2 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Price</th>
                                                    <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-2 py-2 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Payout Amount</th>
                                                    <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-2 py-2 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Payment Mode</th>
                                                    <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-2 py-2 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Status</th>
                                                    <th scope="col" class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-2 py-2 text-center text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody class="bg-white">
                                                    <tr v-for="(order, i) in allOrderList" :key="'order-item-'+i">
                                                        <td class="whitespace-nowrap border-b border-gray-200 px-2 py-2 text-xs text-firoza text-center">
                                                            <a 
                                                                href="javascript:;"
                                                                @click="openDeatilsPopUp(order.orderId)">
                                                                {{order.orderId}}
                                                            </a>
                                                        </td>                                        
                                                        <td class="whitespace-nowrap border-b border-gray-200 px-2 py-2 text-xs text-[#44588F] text-center">
                                                            {{transformDate(order.orderDate)}}
                                                        </td>
                                                        <td class="whitespace-nowrap border-b border-gray-200 px-2 py-2 text-xs text-[#44588F] text-center">
                                                            <div class="flex items-center justify-center">
                                                                <svg width="6" height="11" viewBox="0 0 11 18" fill="none" ><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                                                                <span class="pl-1">{{order.amountPayable}}</span>
                                                            </div>
                                                        </td>
                                                        <td class="whitespace-nowrap border-b border-gray-200 px-2 py-2 text-xs text-[#44588F] text-center">
                                                            <div v-if="order.payoutAmount" class="flex items-center justify-center">
                                                                <svg width="6" height="11" viewBox="0 0 11 18" fill="none" ><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                                                                <span class="pl-1">{{order.payoutAmount}}</span>
                                                            </div>
                                                            <div v-else class="flex items-center justify-center">
                                                                <span class="pl-1">N/A</span>
                                                            </div>
                                                        </td>
                                                        <td class="whitespace-nowrap border-b border-gray-200 px-2 py-2 text-xs text-[#44588F] text-center">
                                                            <div class="flex justify-center items-center">
                                                              Online 
                                                            </div>
                                                        </td>
                                                        <td class="whitespace-nowrap border-b border-gray-200 px-2 py-2 text-xs text-[#44588F] text-center">
                                                            <div class="flex justify-center items-center">
                                                                <GintaaFoodAtomsOrderStatusFlag :orderStatus="order.orderStatus"/> 
                                                            </div>
                                                        </td>
                                                        <td class="whitespace-nowrap border-b border-gray-200 px-2 py-2 text-xs text-[#44588F] text-center">
                                                            <div class="flex justify-center items-center">
                                                            <a 
                                                                :href="order.invoiceUrl ? order.invoiceUrl : 'javascript:;'" 
                                                                :class="!order.invoiceUrl ? 'opacity-50' : ''"
                                                                :target="order.invoiceUrl ? '_blank' : ''"
                                                                class="border border-firoza flex justify-center items-center bg-transparent py-1 sm:py-1 md:py-1 lg:py-2 px-2 rounded bg-firoza text-xs text-white sm:text-xs md:text-base">
                                                                <svg width="16" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <g clip-path="url(#clip0_104_1169)">
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C11 0.447715 10.5523 0 10 0C9.44771 0 9 0.447715 9 1V10.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L9.29218 13.7064C9.29459 13.7088 9.29702 13.7112 9.29945 13.7136C9.3938 13.8063 9.50195 13.8764 9.61722 13.9241C9.73425 13.9727 9.8625 13.9996 9.997 14H10H10.003C10.2746 13.9992 10.5208 13.8901 10.7005 13.7136C10.703 13.7112 10.7054 13.7088 10.7078 13.7064L15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289L11 10.5858V1ZM1 12C1.55228 12 2 12.4477 2 13V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13V17C20 17.7957 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7957 20 17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7957 0 17V13C0 12.4477 0.447715 12 1 12Z" fill="white"/>
                                                                    </g>
                                                                    <defs><clipPath id="clip0_104_1169"><rect width="20" height="20" fill="white"/></clipPath></defs>
                                                                </svg>
                                                                <span class="ml-2 hidden sm:hidden md:hidden lg:block text-xs">{{ $t('downloadInvoice') }}</span>
                                                            </a>
                                                        </div>
                                                        </td>
                                                    </tr>
                                                    <tr v-show="paginationLoading" class="w-full py-6 overflow-hidden flex items-center justify-center">
                                                        <div><Spinner /></div>
                                                    </tr>
                                                    <tr>
                                                        <Trigger @triggerIntersected="loadMore" />
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
        </div>

        <GintaaFoodVendorFooter />
        
        <client-only>
            <GintaaFoodModalOrderdetails v-if="showDetailsPopup"  :orderDetailsId = "orderDetailsId" @closeDeatilsPopUp = "closeDeatilsPopUp"/>
        </client-only>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css';

import { mapState } from "vuex";
import moment from 'moment'
export default{
    name: 'pastOrderPage',
    components: {
        DatePicker
    },
    data() {
        return {
            isNoPastOrder   : true,
            allOrderList    : [],
            showLoader      : true,
            paginationLoading: false,
            date            : [],
            orderDaysFilter     : null,
            orderStatusFilter   : null,
            orderStatusFiterList: [
                {
                    displayValue: 'All',
                    fieldValue: null
                },
                {
                    displayValue: 'Placed',
                    fieldValue: 'PLACED'
                },
                {
                    displayValue: 'Preparing',
                    fieldValue: 'ACCEPTED'
                },
                {
                    displayValue: 'Picked Up',
                    fieldValue: 'PREPARED'
                },
                {
                    displayValue: 'Delivered',
                    fieldValue: 'DELIVERED'
                },
                {
                    displayValue: 'Canceled',
                    fieldValue: 'CANCELED'
                }
            ], 
            restaurantId: null,
            fromDate: null,
            toDate: null,
            size: 10,
            page: 0,
            orderDetailsId: null,
            showDetailsPopup: false
        }
    },
    computed:{
        ...mapState({
            authUser: (state) => state.authUser,
        }),
    },
    mounted(){
        // setTimeout(() => {
        //     this.isNoPastOrder = false;
        //     this.getAllPastOrderHistory();            
        // }, 500);

        if(this.authUser){
            this.restaurantId = this.authUser?.uid ;
        }
        
        this.getAllPastOrderHistory(); 
    },
    methods:{
        async getAllPastOrderHistory(){
            try { 
                if(!this.page){
                    this.allOrderList = []
                }
                
                const paginationQre     = `size=${this.size}&page=${this.page}&showAll=true`;
                const dateFilter        = this.fromDate && this.toDate ? `&fromDate=${this.fromDate}&toDate=${this.toDate}` : ``;
                const orderStatusFltr   = this.orderStatusFilter ? `&orderStatus=${this.orderStatusFilter}` : ``;
                let url = `/forder/v1/order/restaurant/history/${this.restaurantId}?${paginationQre}${dateFilter}${orderStatusFltr}`
                // console.log(url);
                
                const res = await this.$axios.$get(url);
                console.log('Past Order:', res)
                if(res && res.success){
                    this.allOrderList.push(...res.payload)
                }
                console.log('allOrderList:', this.allOrderList)
                this.showLoader = false
                this.paginationLoading = false
            } catch (err) {
                console.log('err ->', err);
                this.showLoader = false
                this.paginationLoading = false
            }
        },
        transformDate(value: any) {
            if (value) {
                // return moment(value).format(' MMMM D , YYYY, h:mm:ss a')
                return moment(value).format(' MMMM D , YYYY, h:mm:ss a')
            }
        },
        onDateTimeChange() {
            if (this.date[0] && this.date[1]) {
                this.fromDate  = this.$moment(this.date[0]).format('YYYYMMDD')
                this.toDate    = this.$moment(this.date[1]).format('YYYYMMDD')
                console.log('Selected Date: fromDate', this.fromDate)
                console.log('Selected Date: toDate', this.toDate)
            } else {
                this.fromDate = null
                this.toDate = null
            }

            this.page = 0
            this.showLoader = true
            this.getAllPastOrderHistory()
        },
        disabledDate(date: any) {
            if (date.getTime() > new Date().getTime()) {
                return true
            }
        },
        loadMore(){
            this.page++
            this.paginationLoading = true
            this.getAllPastOrderHistory()
        },
        changeOrderStatus(){
            this.page = 0
            this.showLoader = true
            this.getAllPastOrderHistory()
        },
        closeDeatilsPopUp(){
            // orderDetailsId: null,
            this.showDetailsPopup = false
        },
        openDeatilsPopUp(orderId: string){
            this.orderDetailsId     = orderId
            this.showDetailsPopup   = true
        }
    }
}
</script>

<style>
  .-z-1 {
    z-index: -1;
  }

  .origin-0 {
    transform-origin: 0%;
  }

  input[type="text"]:focus ~ label, input[type="email"]:focus ~ label,
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

  input[type="text"]:not(:placeholder-shown) ~ label, select:not([value='']):valid ~ label{
      color: rgba(72, 206, 243, var(--tw-text-opacity));
  }

  ul.sell-order-nav li:nth-child(1) a {
      border-top: 3px solid #48CEF3;
  }

  ul.sell-order-nav li:nth-child(2) a {
      border-top: 3px solid #FFC700;
  }

  ul.sell-order-nav li:nth-child(3) a {
      border-top: 3px solid #D3FC5D;
  }

  ul.sell-order-nav li:nth-child(4) a {
      border-top: 3px solid #36C703;
  }

  ul.sell-order-nav li:nth-child(5) a {
      border-top: 3px solid #F0361E;
  }





  .sell-order-nav .nav-link.active {
    color: #ffffff;
    background-color: #48CEF3;
    border-top: 3px solid #48CEF3;
    border-color: #48CEF3;
}

.sell-order-nav .nav-link.active:before {
    content: "";
    position: absolute;
    bottom: 3px;
    width: 14px;
    height: 14px;
    background-color: #48CEF3;
    left: 88px;   
    rotate: 45deg;
}

.order-date-picker .mx-datepicker-range{
     width: 210px;
     border: 1px solid #e3e3e3;
     border-radius: 4px;
     height: 30px;
     padding: 0px 1px 0px 6px;
     }
</style>