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
                    <div class="text-right text-base font-medium">Payments Details</div>
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

                    <!-- no menu start -->
                    <!-- <div class="w-full px-4 py-8">
                                       <div class="flex items-center justify-center mb-4">
                                            <img src="~assets/images/food/add-food.svg" alt="image" class=" max-w-full" />                              
                                       </div>
                                       <div class="flex items-center justify-center text-base text-gray-700 font-medium text-center">You don’t have any item</div>
                                       <div class="flex items-center justify-center text-base text-gray-700 text-center">Add items to receive the orders</div>
                                       <div class="flex items-center justify-center mt-4">
                                        <a href="/gintaa-food/vendor/add-menu" class="border border-green flex justify-center items-center bg-green w-[85px] py-1 px-2 rounded text-xs text-white">
                                              <span>Add Menu</span>
                                        </a> 
                                       </div>
                                  </div> -->
                    <!-- no menu end -->


                    <div class="border-b-2 px-4 pb-3 border-gray-200 flex items-center justify-between">

                       <form role="search" class="flex w-[300px] relative rounded-md mb-2 sm:mb-0 md:mb-0"><label for="top-bar-search" class="flex flex-1 items-center "><input id="search at header" type="text" autocomplete="off" name="search" placeholder="Search" value="" class="w-full h-full flex item-center appearance-none transition duration-300 ease-in-out text-heading text-sm placeholder-gray-500 overflow-hidden rounded focus:outline-none focus:ring-0 bg-gray-100 ps-10 pe-12 md:ps-14 border border-border-200 focus:border-accent focus:bg-light py-2 px-4"></label> <span class="w-12 md:w-12 h-full absolute top-0 right-0 flex flex-shrink-0 justify-center items-center focus:outline-none"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="w-5 h-5 text-skin-base ttext-gray-400"><path d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z" fill="#888a8f"></path></svg></span></form>
                        
                       <!-- <div class="flex items-center ">
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
                                </div>  -->

                    </div>

                    <!-- seamer loader start  -->
                    <!-- <div 
                        class="relative w-full bg-white overflow-hidden shadow hover:shadow-md rounded-lg  px-4 sm:px-4 md:px-4 lg:px-6  divide-y divide-slate-200">
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
                    </div> -->
                    <!-- seamer loader end -->


                    <div class="w-full px-4 sm:px-4 md:px-4 lg:px-4 mt-4">
                        <div class="overflow-x-auto">
                              <table class="min-w-full border">
                                    <thead class="bg-gray-50 border-b">
                                        <tr class="border-b">                                            
                                             <th scope="col" class="p-2 text-center text-sm font-semibold text-gray-900 border-r">SL No.</th>
                                             <th scope="col" class="p-2 text-center text-sm font-semibold text-gray-900 border-r">Date</th>                                             
                                             <th scope="col" class="p-2 text-center text-sm font-semibold text-gray-900 border-r">Order ID</th>                                                                                
                                             <th scope="col" class="p-2 text-center text-sm font-semibold text-gray-900 border-r">User payable amount</th>                                                                                
                                             <th scope="col" class="p-2 text-center text-sm font-semibold text-gray-900 border-r">Restaurant payable amount</th>                                             
                                        </tr>
                                    </thead>
                                     <tbody class="bg-white">
                                        <tr class="border-b"> 
                                            <td class="py-3 px-2 text-sm font-medium text-gray-500 text-center border-r">
                                                <div class="text-gray-500 text-sm font-medium">1 </div>                                                 
                                            </td>                                            
                                            <td class="py-3 px-2 text-sm font-medium text-gray-500 text-center border-r">
                                                <div class="text-gray-500 text-sm font-medium">06/11/21 </div>                                                 
                                            </td>                                             
                                            <td class="py-3 px-2 text-sm font-medium text-gray-500 text-center border-r">
                                                <a href="#" class="text-gray-500 text-sm font-medium">85467</a>
                                            </td>                                            
                                            <td class="py-3 px-2 text-sm text-gray-500 text-center border-r">
                                                <div class="font-medium text-gray-500 flex items-center justify-center relative">
                                                    <svg width="6" height="11" viewBox="0 0 11 18" fill="none" ><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                                                     <span class="ml-1">450</span>
                                                </div>
                                            </td>             
                                           
                                            <td class="py-3 px-2 text-sm text-gray-500 text-center border-r">
                                                <div class="font-medium text-gray-500 flex items-center justify-center relative">
                                                    <svg width="6" height="11" viewBox="0 0 11 18" fill="none" ><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                                                     <span class="ml-1">420</span>
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

    <GintaaFoodVendorFooter />


</div></template>
<script lang="ts">
import Vue from 'vue';
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css';

export default {
    name: 'PaymentDetailsPage',  
    components: {
        DatePicker
    },  
}
</script>

<style scoped>
  .order-date-picker .mx-datepicker-range{
     width: 210px;
     border: 1px solid #e3e3e3;
     border-radius: 4px;
     height: 30px;
     padding: 0px 1px 0px 6px;
     }
</style>
