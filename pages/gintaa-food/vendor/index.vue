<template>
    <div class="relative bg-[#f8f8f8] min-h-screen">

        <GintaaFoodVendorSidebar />
        <!-- <div class="mx-auto max-w-[1920px] md:px-8 xl:px-16 2xl:px-16 pt-10 hidden md:flex">
            <Breadcrumb :breadcrumb="breadcrumb" />
        </div> -->

        <fullPageLoader v-if="showLoader" />
        <div class="content-wrapper content-wrapper-min pl-0 relative z-10 sm:pl-0 md:pl-[180px] lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px] mb-4">
            
            <GintaaFoodVendorHeader @fechTheOrdersAgain="fechTheOrdersAgain" @npPlacedOrderFound="npPlacedOrderFound" />
            <div class="content pt-[60px] pb-[100px] px-4 sm:pt-[60px] sm:px-4 sm:pb-[100px] md:pt-[100px] md:px-4 lg:px-8 md:pb-0">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-right text-base font-medium">
                        Order List
                    </div>

                    <div class="items-center justify-center hidden sm:hidden md:flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 5.37766L17.5 12.3568V20.0002H12.5V15.0002H7.5V20.0002H2.5V12.3568L10 5.37766ZM20 10.1235L10 0.833496L0 10.111L1.13417 11.3318L10 3.1085L18.8658 11.3443L20 10.1235Z"
                                fill="#8EC23C" />
                        </svg>
                        <span class="text-sm text-green ml-2">Home / Order / Order List</span>
                    </div>
                </div>
                
                <div class="w-full bg-[#f0361e] rounded px-4 py-4 mt-4 hidden">
                <div class="flex items-center ">
                     <div class="flex-shrink-0 flex items-center justify-center">
                          <img src="~/assets/images/food/blacklisted.webp" alt="image" class="w-[115px] h-[115px] rounded">
                     </div>
                     <div class="ml-6">
                        <div class="text-base text-white font-medium">You have been blacklisted, and as a result, you are unable to access online and offline.Please contact customer</div>
                        <div class="text-sm text-white mt-4">Support for assistance</div>
                        <div class="text-sm text-white mb-2 mt-2">Contact No : 080-69188100 (9 AM - 9 PM)</div>
                        <div class="text-sm text-white ">
                         Email : <a href="mailto:customer@gintaa.com" class="text-white">customer@gintaa.com </a>
                        </div>
                    </div>
                </div>
               </div>

                <div class="inline-block w-full py-2 align-middle">
                    <ul class="nav nav-tabs flex flex-row md:flex-row list-none border-b-0 pl-0 mb-4 sell-order-nav"
                        id="tabs-tabJustify" role="tablist">

                        <!-- <div >
  <button id="playbutton" @click.prevent="playSound()">Play Sound</button> 
</div> -->
                        <!-- Tab New Start -->
                        <li class="nav-item text-right mr-2 relative w-full sm:mr-2 sm:w-full md:mr-2 md:w-w-full lg:mr-6 lg:w-[180px]"
                            role="presentation">
                            <a href="#tabs-homeJustify"
                                class="h-[55px] nav-link w-full block font-medium text-xs bg-white rounded leading-tight border-x-0 border-t-0 border-b-2 border-transparent
                                px-1 py-1 my-2 sm:px-1 sm:h-[50px] sm:py-3 md:px-2 md:py-3 md:h-[50px] lg:h-[50px] xl:h-[70px] lg:px-3 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
                                id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify"
                                role="tab" aria-controls="tabs-homeJustify" aria-selected="true">
                                <div class="block items-center justify-center sm:flex md:flex">
                                    <img src="~/assets/images/food/bell.svg" alt="icon" class="hidden sm:hidden md:hidden lg:hidden xl:block" />
                                    <div
                                        class="text-center text-[12px] sm:text-sm md:text-sm font-medium ml-0 sm:ml-0 sm:text-right md:ml-0 lg:ml-0 xl:ml-2 md:text-center lg:text-right">
                                        {{ $t('newCondition') }}</div>
                                    <div
                                        class="text-center text-xs ml-0 mt-1 sm:ml-2 sm:text-right sm:mt-0 md:ml-2 md:mt-0 md:text-right">
                                        ({{ placedOrders.length }})</div>
                                </div>
                            </a>
                        </li>
                        <!-- Tab New Start -->

                        <!-- Tab Prepareing Start -->
                        <li class="nav-item text-right mr-2 relative w-full sm:mr-2 sm:w-full md:mr-2 md:w-w-full lg:mr-6 lg:w-[180px]"
                            role="presentation">
                            <a href="#tabs-dispatchJustify"
                                class="h-[55px] nav-link w-full block font-medium text-xs bg-white rounded leading-tight border-x-0 border-t-0 border-b-2 border-transparent
                                px-1 py-1 my-2 sm:px-1 sm:h-[50px] sm:py-3 md:px-2 md:py-3 md:h-[50px] lg:h-[50px] xl:h-[70px] lg:px-3 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                                id="tabs-dispatch-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-dispatchJustify"
                                role="tab" aria-controls="#tabs-dispatchJustify" aria-selected="false">
                                <div class="block items-center justify-center sm:flex md:flex">
                                    <img src="~/assets/images/food/cooking.svg" alt="icon"
                                        class="hidden sm:hidden md:hidden lg:hidden xl:block" />
                                    <div
                                        class="text-center text-[12px] sm:text-sm md:text-sm font-medium ml-0 sm:ml-0 sm:text-right md:ml-0 lg:ml-0 xl:ml-2 md:text-center lg:text-right">
                                        Preparing</div>
                                    <div
                                        class="text-center text-xs ml-0 mt-1 sm:ml-2 sm:text-right sm:mt-0 md:ml-2 md:mt-0 md:text-right">
                                        ({{ acceptedOrders.length }})</div>
                                </div>
                            </a>
                        </li>
                        <!-- Tab Prepareing End -->

                        <!-- Tab Pickup Start -->
                        <li class="nav-item text-right mr-2 relative w-full sm:mr-2 sm:w-full md:mr-2 md:w-w-full lg:mr-6 lg:w-[180px]"
                            role="presentation">
                            <a href="#tabs-profileJustify"
                                class="h-[55px] nav-link w-full block font-medium text-xs bg-white rounded leading-tight border-x-0 border-t-0 border-b-2 border-transparent
                                 px-1 py-1 my-2 sm:px-1 sm:h-[50px] sm:py-3 md:px-2 md:py-3 md:h-[50px] lg:h-[50px] xl:h-[70px] lg:px-3 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                                id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-profileJustify"
                                role="tab" aria-controls="tabs-profileJustify" aria-selected="false">
                                <div class="block items-center justify-center sm:flex md:flex">
                                    <img src="~/assets/images/food/serving-dish.svg" alt="icon"
                                        class="hidden sm:hidden md:hidden lg:hidden xl:block" />
                                    <div
                                        class="text-center text-[12px] sm:text-sm md:text-sm  font-medium ml-0 sm:ml-0 sm:text-right md:ml-0 lg:ml-0 xl:ml-2 md:text-center lg:text-right">
                                        Picked Up</div>
                                    <div
                                        class="text-center text-xs ml-0 mt-1 sm:ml-2 sm:text-right sm:mt-0 md:ml-2 md:mt-0 md:text-right">
                                        ({{ preparedOrders.length }})</div>
                                </div>
                            </a>
                        </li>
                        <!-- Tab Pickup End -->


                        <!-- Tab Delivered Start -->
                        <li class="nav-item text-right mr-2 relative w-full sm:mr-2 sm:w-full md:mr-2 md:w-w-full lg:mr-6 lg:w-[180px]"
                            role="presentation">
                            <a href="#tabs-messagesJustify"
                                class="h-[55px] nav-link w-full block font-medium text-xs bg-white rounded leading-tight border-x-0 border-t-0 border-b-2 border-transparent
                                px-1 py-1 my-2 sm:px-1 sm:h-[50px] sm:py-3 md:px-2 md:py-3 md:h-[50px] lg:h-[50px] xl:h-[70px] lg:px-3 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                                id="tabs-messages-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-messagesJustify"
                                role="tab" aria-controls="tabs-messagesJustify" aria-selected="false">
                                <div class="block items-center justify-center sm:flex md:flex">
                                    <img src="~/assets/images/food/deliver.svg" alt="icon"
                                        class="hidden sm:hidden md:hidden lg:hidden xl:block" />
                                    <div
                                        class="text-center text-[12px] sm:text-sm md:text-sm font-medium ml-0 sm:ml-0 sm:text-right md:ml-0 lg:ml-0 xl:ml-2 md:text-center lg:text-right">
                                        {{ $t('foodDelivered') }}</div>
                                    <div
                                        class="text-center text-xs ml-0 mt-1 sm:ml-2 sm:text-right sm:mt-0 md:ml-2 md:mt-0 md:text-right">
                                        ({{ deliveredOrders.length }})</div>
                                </div>
                            </a>
                        </li>
                        <!-- Tab Delivered End -->

                        <!-- Tab AutoRejected Start -->
                        <li class="nav-item text-right mr-0 relative w-full sm:mr-0 sm:w-full md:mr-2 md:w-w-full lg:mr-6 lg:w-[180px]"
                            role="presentation">
                            <a href="#tabs-cancelJustify"
                                class="h-[55px] nav-link w-full block font-medium text-xs bg-white rounded leading-tight border-x-0 border-t-0 border-b-2 border-transparent
                                px-1 py-1 my-2 sm:px-1 sm:h-[50px] sm:py-3 md:px-2 md:py-3 md:h-[50px] lg:h-[50px] xl:h-[70px] lg:px-3 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                                id="tabs-messages-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-cancelJustify"
                                role="tab" aria-controls="tabs-cancelJustify" aria-selected="false">
                                <div class="block items-center justify-center sm:flex md:flex">
                                    <img src="~/assets/images/food/rejected-tab.svg" alt="icon"
                                        class="hidden sm:hidden md:hidden lg:hidden xl:block " />
                                    <div
                                        class="text-center text-[12px] sm:text-sm md:text-sm font-medium ml-0 sm:ml-0 sm:text-right md:ml-0 lg:ml-2 md:text-center lg:text-right">
                                        Rejected</div>
                                    <div
                                        class="text-center text-xs ml-0 mt-1 sm:ml-2 sm:text-right sm:mt-0 md:ml-2 md:mt-0 md:text-right">
                                        ({{ canceledOrders.length }})</div>
                                </div>
                            </a>
                        </li>
                        <!-- Tab AutoRejected End -->


                    </ul>



                    <div class="tab-content" id="tabs-tabContentJustify">

                        <!-- Tab new Start -->
                        <div class="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
                            aria-labelledby="tabs-home-tabJustify">

                            <div class="table-content bg-white rounded-sm shadow-sm">
                                <div class="px-2 py-2">
                                    <div class="sm:flex sm:items-center">
                                        <div class="sm:flex-auto">
                                            <h1 class="text-base font-medium text-gray-900">New Order</h1>

                                        </div>
                                    </div>
                                    <div class="mt-2 flex flex-col">
                                        <div class="overflow-x-auto">
                                            <div class="inline-block w-full py-2 align-middle">
                                                <div class="">
                                                    <table v-if="placedOrders && placedOrders.length > 0 && !showLoader"
                                                        class="w-full border-separate table-auto" style="border-spacing: 0">
                                                        <thead class="bg-gray-50">
                                                            <tr>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Order ID</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Food Name</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Customer Name</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter w-[22%]">
                                                                    Location</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Time</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Price</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Payment Mode</th>    
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Action</th>
                                                                    

                                                            </tr>
                                                        </thead>
                                                        <tbody class="bg-white">
                                                            <tr v-for="(item, i) in placedOrders" :key="i">
                                                                <td @click="viewOrderDet(item)"
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-firoza cursor-pointer ">
                                                                    {{ item.orderId }}</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F] ">
                                                                    <!-- <div  class="text-sm text-[#44588F]">2 X Chicken egg dosa
                                                                    </div> -->
                                                                    <div v-for="(itemk, j) in item.orderDetails" :key="j"
                                                                        class="text-sm text-[#44588F]">{{ itemk.quantity }}
                                                                        X
                                                                        {{ itemk.name }}
                                                                    </div>
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F] ">
                                                                    {{ item.userName }}</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-xs text-[#44588F] w-[22%]">
                                                                    <div>{{ getAddressitemDet(item.deliveryAddress) }}</div>
                                                                    <div
                                                                        class="mt-0.5 text-[11px] text-[#44588F] flex items-center font-medium">
                                                                        Mobile : <span class="ml-1">{{
                                                                            remove91ToPhoneNumber(item.mobile) }}</span>
                                                                    </div>
                                                                    <!-- <div
                                                                        class="mt-0.5 text-[11px] text-[#44588F] flex items-center font-medium">
                                                                        Email: <span class="ml-1">xyz@gmail.com</span></div> -->
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    {{ transformDate(item.orderDate) }} </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    <div class=" font-medium pl-[10px] relative"><svg
                                                                            width="6" height="11" viewBox="0 0 11 18"
                                                                            fill="none"
                                                                            class="absolute top-[4px] left-[2px]">
                                                                            <path opacity="0.7" fill-rule="evenodd"
                                                                                clip-rule="evenodd"
                                                                                d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                                                fill="black"></path>
                                                                        </svg> <span>{{ item.amountPayable }}</span></div>
                                                                </td>
                                                                <td class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    Online
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    <div class="flex items-center">
                                                                        <button type="button" @click="acceptOrder(item, i)"
                                                                            class="border border-firoza flex justify-center items-center bg-transparent py-2 px-3 rounded bg-firoza text-base text-white">


                                                                            <span v-if="i !== indexValue">Accept</span>
                                                                            <!-- <span
                                                                                v-if="i !== indexValue"
                                                                                class="text-base ml-1">(10:00)</span> -->

                                                                            <Spinner v-if="loading && i === indexValue" />
                                                                        </button>
                                                                        <!-- <div class="ml-4 flex items-center">
                                                                            <img src="~/assets/images/food/printing.svg"
                                                                                alt="icon"
                                                                                class="cursor-pointer w-[28px] h-[28px]" />
                                                                            <span
                                                                                class="text-sm text-gray-500 ml-1">KOT</span>
                                                                        </div> -->
                                                                    </div>
                                                                </td>
                                                            

                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                    <div class="py-2 px-2 text-center"
                                                        v-if="placedOrders && placedOrders.length == 0 && !showLoader">
                                                        <div><img src="~/assets/images/food/neworder.png"
                                                                class="max-w-full mx-auto block" /></div>
                                                        <div class="text-sm font-medium text-gray-600 pt-4">Waiting for new
                                                            orders</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>


                        </div>
                        <!-- Tab new End -->

                        <!-- Tab Prepare Start -->
                        <div class="tab-pane fade" id="tabs-dispatchJustify" role="tabpanel"
                            aria-labelledby="tabs-profile-tabJustify">
                            <div class="table-content bg-white rounded-sm shadow-sm">
                                <div class="px-2 py-2">
                                    <div class="sm:flex sm:items-center">
                                        <div class="sm:flex-auto">
                                            <h1 class="text-base font-medium text-gray-900">Preparing Order</h1>

                                        </div>
                                    </div>
                                    <div class="mt-2 flex flex-col">
                                        <div class="overflow-x-auto">
                                            <div class="inline-block w-full py-2 align-middle">
                                                <div class="">
                                                    <table v-if="acceptedOrders && acceptedOrders.length > 0 && !showLoader"
                                                        class="w-full border-separate table-auto" style="border-spacing: 0">
                                                        <thead class="bg-gray-50">
                                                            <tr>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Order ID</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Food Name</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Customer Name</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter w-[22%]">
                                                                    Location</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Date</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Price</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Payment Mode</th>    
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Action</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody class="bg-white">
                                                            <tr v-for="(item, i) in acceptedOrders" :key="i">
                                                                <td 
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-firoza cursor-pointer ">
                                                                    <span @click="viewOrderDet(item)"> {{ item.orderId }}</span>
                                                             
                                                                   <!-- <span v-if="item.kotUrl"> 
                                                                    <a :href="item.kotUrl" target="_blank">Print KOT</a> </span>                                                                     -->
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F] ">
                                                                    <!-- <div  class="text-sm text-[#44588F]">2 X Chicken egg dosa
                                                                    </div> -->
                                                                    <div v-for="(itemk, j) in item.orderDetails" :key="j"
                                                                        class="text-sm text-[#44588F]">{{ itemk.quantity }}
                                                                        X
                                                                        {{ itemk.name }}
                                                                    </div>
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F] ">
                                                                    {{ item.userName }}</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-xs text-[#44588F] w-[22%]">
                                                                    <div>{{ getAddressitemDet(item.deliveryAddress) }}</div>
                                                                    <div
                                                                        class="mt-0.5 text-[11px] text-[#44588F] flex items-center font-medium">
                                                                        Mobile : <span class="ml-1">{{
                                                                            remove91ToPhoneNumber(item.mobile) }}</span>
                                                                    </div>
                                                                    <!-- <div
                                                                        class="mt-0.5 text-[11px] text-[#44588F] flex items-center font-medium">
                                                                        Email: <span class="ml-1">xyz@gmail.com</span></div> -->
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    {{ transformDate(item.orderDate) }}</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    <div class=" font-medium pl-[10px] relative"><svg
                                                                            width="6" height="11" viewBox="0 0 11 18"
                                                                            fill="none"
                                                                            class="absolute top-[4px] left-[2px]">
                                                                            <path opacity="0.7" fill-rule="evenodd"
                                                                                clip-rule="evenodd"
                                                                                d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                                                fill="black"></path>
                                                                        </svg> <span>{{ item.amountPayable }}</span></div>
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    Online</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">

                                                                    <div class="flex items-center">
                                                                    <button type="button" @click="markAspickup(item, i)"
                                                                        class="border border-firoza flex justify-center items-center bg-transparent py-2 px-2 rounded bg-firoza text-sm text-white">

                                                                        <span v-if="i !== indexValue">Mark
                                                                            Picked UP</span>

                                                                        <Spinner v-if="loading && i === indexValue" />

                                                                    </button>
                                                                    
                                                                    <div class="ml-4">
                                                                        <a :href="item.kotUrl" target="_blank" class="flex items-center">
                                                                        <img src="~/assets/images/food/printing.svg" alt="icon" class="cursor-pointer w-[28px] h-[28px]"/>
                                                                        <span class="text-sm text-gray-500 ml-1">KOT</span>
                                                                       </a>
                                                                    </div>
                                                                </div>
                                                                </td>

                                                              

                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                    <div class="px-2 py-2 text-center"
                                                        v-if="acceptedOrders && acceptedOrders.length == 0 && !showLoader">
                                                        <div><img src="~/assets/images/food/nopreparing.png"
                                                                class="max-w-full mx-auto block" /></div>
                                                        <div class="text-sm font-medium text-gray-600 pt-4"> No Prepared
                                                            orders Found</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <!-- Tab Prepare End -->

                        <!-- Tab Pickup Start -->
                        <div class="tab-pane fade" id="tabs-profileJustify" role="tabpanel"
                            aria-labelledby="tabs-profile-tabJustify">
                            <div class="table-content bg-white rounded-sm shadow-sm">
                                <div class="px-2 py-2">
                                    <div class="sm:flex sm:items-center">
                                        <div class="sm:flex-auto">
                                            <h1 class="text-base font-medium text-gray-900">Picked up Order</h1>

                                        </div>
                                    </div>
                                    <div class="mt-2 flex flex-col">
                                        <div class="overflow-x-auto">
                                            <div class="inline-block w-full py-2 align-middle">
                                                <div class="shadow-sm ring-1 ring-black ring-opacity-5">
                                                    <table v-if="preparedOrders && preparedOrders.length > 0 && !showLoader"
                                                        class="w-full border-separate table-auto" style="border-spacing: 0">
                                                        <thead class="bg-gray-50">
                                                            <tr>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Order ID</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Food Name</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Customer Name</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter w-[22%]">
                                                                    Location</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Date</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Price</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Payment Mode</th>    
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Action</th>
                                                                    
                                                            </tr>
                                                        </thead>
                                                        <tbody class="bg-white">
                                                            <tr v-for="(item, i) in preparedOrders" :key="i">
                                                                <td @click="viewOrderDet(item)"
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-firoza cursor-pointer ">
                                                                    {{ item.orderId }}</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F] ">
                                                                    <!-- <div  class="text-sm text-[#44588F]">2 X Chicken egg dosa
                                                                    </div> -->
                                                                    <div v-for="(itemk, j) in item.orderDetails" :key="j"
                                                                        class="text-sm text-[#44588F]">{{ itemk.quantity }}
                                                                        X
                                                                        {{ itemk.name }}
                                                                    </div>
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F] ">
                                                                    {{ item.userName }}</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-xs text-[#44588F] w-[22%]">
                                                                    <div>{{ getAddressitemDet(item.deliveryAddress) }}</div>
                                                                    <div
                                                                        class="mt-0.5 text-[11px] text-[#44588F] flex items-center font-medium">
                                                                        Mobile : <span class="ml-1">{{
                                                                            remove91ToPhoneNumber(item.mobile) }}</span>
                                                                    </div>
                                                                    <!-- <div
                                                                        class="mt-0.5 text-[11px] text-[#44588F] flex items-center font-medium">
                                                                        Email: <span class="ml-1">xyz@gmail.com</span></div> -->
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    {{ transformDate(item.orderDate) }}</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    <div class=" font-medium pl-[10px] relative"><svg
                                                                            width="6" height="11" viewBox="0 0 11 18"
                                                                            fill="none"
                                                                            class="absolute top-[4px] left-[2px]">
                                                                            <path opacity="0.7" fill-rule="evenodd"
                                                                                clip-rule="evenodd"
                                                                                d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                                                fill="black"></path>
                                                                        </svg> <span>{{ item.amountPayable }}</span></div>
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    Online</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    <button type="button"
                                                                        @click="showDeliveryConfirmModal(item)"
                                                                        class="border border-firoza flex justify-center items-center bg-transparent py-2 px-3 rounded bg-firoza text-base text-white">
                                                                        <span>Mark
                                                                            Delivered</span>

                                                                        <!-- <Spinner v-show="loading" /> -->
                                                                    </button>
                                                                </td>

                                                               

                                                            </tr>

                                                        </tbody>
                                                    </table>

                                                    <div class="px-2 py-2 text-center"
                                                        v-if="preparedOrders && preparedOrders.length == 0 && !showLoader">
                                                        <div><img src="~/assets/images/food/no-picked-order.png"
                                                                class="max-w-full mx-auto block" /></div>
                                                        <div class="text-sm font-medium text-gray-600 pt-4"> No Order Is
                                                            Pickedup</div>

                                                    </div>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <!-- Tab Pickup End -->

                        <!-- Tab Deliverd Start -->
                        <div class="tab-pane fade" id="tabs-messagesJustify" role="tabpanel"
                            aria-labelledby="tabs-profile-tabJustify">
                            <div class="table-content bg-white rounded-sm shadow-sm">
                                <div class="px-2 py-2">
                                    <div class="sm:flex sm:items-center">
                                        <div class="sm:flex-auto">
                                            <h1 class="text-base font-medium text-gray-900">Delivered</h1>

                                        </div>
                                    </div>
                                    <div class="mt-2 flex flex-col">
                                        <div class="overflow-x-auto">
                                            <div class="inline-block w-full py-2 align-middle">
                                                <div class="">
                                                    <table
                                                        v-if="deliveredOrders && deliveredOrders.length > 0 && !showLoader"
                                                        class="w-full border-separate table-auto" style="border-spacing: 0">
                                                        <thead class="bg-gray-50">
                                                            <tr>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Order ID</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Food Name</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Customer Name</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter w-[22%]">
                                                                    Location</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Date</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Price</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Payment Mode</th>     
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Action</th>
                                                                   

                                                            </tr>
                                                        </thead>
                                                        <tbody class="bg-white">
                                                            <tr v-for="(item, i) in deliveredOrders" :key="i">
                                                                <td @click="viewOrderDet(item)"
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-firoza cursor-pointer ">
                                                                    {{ item.orderId }}</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F] ">
                                                                    <!-- <div  class="text-sm text-[#44588F]">2 X Chicken egg dosa
                                                                    </div> -->
                                                                    <div v-for="(itemk, j) in item.orderDetails" :key="j"
                                                                        class="text-sm text-[#44588F]">{{ itemk.quantity }}
                                                                        X
                                                                        {{ itemk.name }}
                                                                    </div>
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F] ">
                                                                    {{ item.userName }}</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-xs text-[#44588F] w-[22%]">
                                                                    <div>{{ getAddressitemDet(item.deliveryAddress) }}</div>
                                                                    <div
                                                                        class="mt-0.5 text-[11px] text-[#44588F] flex items-center font-medium">
                                                                        Mobile : <span class="ml-1">{{
                                                                            remove91ToPhoneNumber(item.mobile) }}</span>
                                                                    </div>
                                                                    <!-- <div
                                                                        class="mt-0.5 text-[11px] text-[#44588F] flex items-center font-medium">
                                                                        Email: <span class="ml-1">xyz@gmail.com</span></div> -->
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    {{ transformDate(item.orderDate) }}</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    <div class=" font-medium pl-[10px] relative"><svg
                                                                            width="6" height="11" viewBox="0 0 11 18"
                                                                            fill="none"
                                                                            class="absolute top-[4px] left-[2px]">
                                                                            <path opacity="0.7" fill-rule="evenodd"
                                                                                clip-rule="evenodd"
                                                                                d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                                                fill="black"></path>
                                                                        </svg> <span>{{ item.amountPayable }}</span></div>
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    Online</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    <a :href="item.invoiceUrl" target="_blank"
                                                                        class="border border-firoza flex justify-center items-center bg-transparent py-2 px-2 rounded bg-firoza text-base text-white">
                                                                        <svg width="16" height="20" viewBox="0 0 20 20"
                                                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g clip-path="url(#clip0_104_1169)">
                                                                                <path fill-rule="evenodd"
                                                                                    clip-rule="evenodd"
                                                                                    d="M11 1C11 0.447715 10.5523 0 10 0C9.44771 0 9 0.447715 9 1V10.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L9.29218 13.7064C9.29459 13.7088 9.29702 13.7112 9.29945 13.7136C9.3938 13.8063 9.50195 13.8764 9.61722 13.9241C9.73425 13.9727 9.8625 13.9996 9.997 14H10H10.003C10.2746 13.9992 10.5208 13.8901 10.7005 13.7136C10.703 13.7112 10.7054 13.7088 10.7078 13.7064L15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289L11 10.5858V1ZM1 12C1.55228 12 2 12.4477 2 13V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13V17C20 17.7957 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7957 20 17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7957 0 17V13C0 12.4477 0.447715 12 1 12Z"
                                                                                    fill="white" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_104_1169">
                                                                                    <rect width="20" height="20"
                                                                                        fill="white" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <span class="ml-2">Download Invoice</span>
                                                                    </a>
                                                                </td>

                                                               

                                                            </tr>

                                                        </tbody>
                                                    </table>

                                                    <div class="text-center px-2 py-2"
                                                        v-if="deliveredOrders && deliveredOrders.length == 0 && !showLoader">
                                                        <div><img src="~/assets/images/food/nodelivered.png"
                                                                class="max-w-full mx-auto block" /></div>
                                                        <div class="text-sm font-medium text-gray-600 pt-4"> No delivered
                                                            Order Found</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <!-- Tab Deliverd End -->

                        <!-- Tab Canceled Start -->
                        <div class="tab-pane fade" id="tabs-cancelJustify" role="tabpanel"
                            aria-labelledby="tabs-profile-tabJustify">
                            <div class="table-content bg-white rounded-sm shadow-sm">
                                <div class="px-2 py-2">
                                    <div class="sm:flex sm:items-center">
                                        <div class="sm:flex-auto">
                                            <h1 class="text-base font-medium text-gray-900">Rejected</h1>

                                        </div>
                                    </div>
                                    <div class="mt-2 flex flex-col">
                                        <div class="overflow-x-auto">
                                            <div class="inline-block w-full py-2 align-middle">
                                                <div class="">
                                                    <table v-if="canceledOrders && canceledOrders.length > 0 && !showLoader"
                                                        class="w-full border-separate table-auto" style="border-spacing: 0">
                                                        <thead class="bg-gray-50">
                                                            <tr>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Order ID</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Food Name</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Customer Name</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter w-[22%]">
                                                                    Location</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter ">
                                                                    Date</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Price</th>
                                                                 <th scope="col"
                                                                    class="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-2 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter">
                                                                    Payment Mode</th> 

                                                            </tr>
                                                        </thead>
                                                        <tbody class="bg-white">
                                                            <tr v-for="(item, i) in canceledOrders" :key="i">
                                                                <td @click="viewOrderDet(item)"
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-firoza cursor-pointer ">
                                                                    {{ item.orderId }}</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F] ">
                                                                    <!-- <div  class="text-sm text-[#44588F]">2 X Chicken egg dosa
                                                                    </div> -->
                                                                    <div v-for="(itemk, j) in item.orderDetails" :key="j"
                                                                        class="text-sm text-[#44588F]">{{ itemk.quantity }}
                                                                        X
                                                                        {{ itemk.name }}
                                                                    </div>
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F] ">
                                                                    {{ item.userName }}</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-xs text-[#44588F] w-[22%]">
                                                                    <div>{{ getAddressitemDet(item.deliveryAddress) }}</div>
                                                                    <div
                                                                        class="mt-0.5 text-[11px] text-[#44588F] flex items-center font-medium">
                                                                        Mobile : <span class="ml-1">{{
                                                                            remove91ToPhoneNumber(item.mobile) }}</span>
                                                                    </div>
                                                                    <!-- <div
                                                                        class="mt-0.5 text-[11px] text-[#44588F] flex items-center font-medium">
                                                                        Email: <span class="ml-1">xyz@gmail.com</span></div> -->
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    {{ transformDate(item.orderDate) }}</td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    <div class=" font-medium pl-[10px] relative"><svg
                                                                            width="6" height="11" viewBox="0 0 11 18"
                                                                            fill="none"
                                                                            class="absolute top-[4px] left-[2px]">
                                                                            <path opacity="0.7" fill-rule="evenodd"
                                                                                clip-rule="evenodd"
                                                                                d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                                                fill="black"></path>
                                                                        </svg> <span>{{ item.amountPayable }}</span></div>
                                                                </td>
                                                                <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    Online</td>
                                                               
                                                                <!-- <td
                                                                    class="border-b border-gray-200 px-2 py-2 text-sm text-[#44588F]">
                                                                    <button type="button"
                                                                        class="border border-firoza flex justify-center items-center bg-transparent py-2 px-2 rounded bg-firoza text-base text-white">
                                                                        <svg width="16" height="20" viewBox="0 0 20 20"
                                                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <g clip-path="url(#clip0_104_1169)">
                                                                                <path fill-rule="evenodd"
                                                                                    clip-rule="evenodd"
                                                                                    d="M11 1C11 0.447715 10.5523 0 10 0C9.44771 0 9 0.447715 9 1V10.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L9.29218 13.7064C9.29459 13.7088 9.29702 13.7112 9.29945 13.7136C9.3938 13.8063 9.50195 13.8764 9.61722 13.9241C9.73425 13.9727 9.8625 13.9996 9.997 14H10H10.003C10.2746 13.9992 10.5208 13.8901 10.7005 13.7136C10.703 13.7112 10.7054 13.7088 10.7078 13.7064L15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289L11 10.5858V1ZM1 12C1.55228 12 2 12.4477 2 13V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13V17C20 17.7957 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7957 20 17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7957 0 17V13C0 12.4477 0.447715 12 1 12Z"
                                                                                    fill="white" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_104_1169">
                                                                                    <rect width="20" height="20"
                                                                                        fill="white" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                        <span class="ml-2">Download Invoice</span>
                                                                    </button>
                                                                </td> -->

                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                    <div class="px-2 py-2 text-center"
                                                        v-if="canceledOrders && canceledOrders.length == 0 && !showLoader">

                                                        <div><img src="~/assets/images/food/rejected.svg"
                                                                class="w-[220px] h-auto mx-auto block" /></div>
                                                        <div class="text-sm font-medium text-gray-600 pt-4"> No Rejected
                                                            Orders Found</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <!-- Tab Canceled End -->

                    </div>

                </div>



                <!-- order offline and online start -->
                <!-- <div class="w-full bg-white shadow rounded px-4 py-6 h-[400px] flex items-center justify-center mt-4">
                 <div class="w-full">
                <div class="flex items-center justify-center mb-4">
                              <img src="~assets/images/food/offline.svg" alt="image" class=" max-w-full" />                              
                         </div>
                         <div class="flex items-center justify-center text-base text-gray-700 font-medium text-center">You are Offline</div>
                         <div class="flex items-center justify-center text-base text-gray-700 text-center">You will not receive any order till online</div> 
                </div>

                <div class="w-full">
                <div class="flex items-center justify-center mb-4">
                              <img src="~assets/images/food/online.svg" alt="image" class=" max-w-full" />                              
                         </div>
                         <div class="flex items-center justify-center text-base text-gray-700 font-medium text-center">You are online</div>
                         <div class="flex items-center justify-center text-base text-gray-700 text-center">Waiting for new orders</div> 
                </div>
         </div> -->
                <!-- order offline and online end -->

            </div>

        </div>

        <GintaaFoodVendorFooter />

        <!-- start Order Details modal  -->

        <client-only>
            <GintaaFoodModalOrderdetails v-if="showDetailsPopup" :orderDetailsId="orderDetailsId"
                @closeDeatilsPopUp="closeDeatilsPopUp" />
        </client-only>

        <!-- end Order Details modal  -->

        <!-- <GintaaFoodModalAcceptorderlist v-if="placedOrders && placedOrders.length > 0" :placedOrders="placedOrders"
            @acceptSuccesful="acceptSuccesful" /> -->

        <!-- start Preparing Order  modal  -->
        <div class="relative z-50 hidden " aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div class="fixed inset-0 z-50 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">

                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white px-0 pt-2 pb-4 text-left shadow-xl transition-all sm:my-4 sm:w-full sm:max-w-lg ">

                        <div class="w-full">
                            <div class="flex items-center justify-between border-b-2 border-gray-200 px-4 pb-2">
                                <div class="text-base text-gray-900">Accept Order </div>
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

                            <div class="flex items-center px-8 py-4">
                                <div class="text-sm text-gray-700">ID : <span>1234567891</span></div>
                                <div class="text-sm text-gray-700 ml-6">Customer : <span class="text-green">Abhaya
                                        Das</span></div>
                                <div class="text-sm text-gray-700 ml-6">7:45 PM</div>
                            </div>

                            <div class="w-full px-8">

                                <table class="min-w-full border">
                                    <thead class="border-b">
                                        <tr>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-2 border-r">
                                                Food Details</th>
                                            <th scope="col" class="text-sm font-medium text-gray-900 px-4 py-2 text-center">
                                                Ammount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b">
                                            <td class="text-sm text-gray-700 px-4 py-2  border-r">2 X Chicken egg dosa</td>
                                            <td class="text-sm text-gray-700 px-4 py-2 text-center">
                                                <div class="text-sm flex items-center justify-center"><svg width="7"
                                                        height="15" viewBox="0 0 11 18" fill="none">
                                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                            fill="black"></path>
                                                    </svg> <span class="ml-1">100</span></div>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">
                                            <td class="text-sm text-gray-700 px-4 py-2  border-r">1 X Chicken kasa</td>
                                            <td class="text-sm text-gray-700 px-4 py-2 text-center">
                                                <div class="text-sm flex items-center justify-center"><svg width="7"
                                                        height="15" viewBox="0 0 11 18" fill="none">
                                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                            fill="black"></path>
                                                    </svg> <span class="ml-1">300</span></div>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">
                                            <td class="text-sm text-gray-700 px-4 py-2 font-medium border-r">Total</td>
                                            <td class="text-sm text-gray-900 px-4 py-2 text-center">
                                                <div class="font-medium text-sm flex items-center justify-center"><svg
                                                        width="7" height="15" viewBox="0 0 11 18" fill="none">
                                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                            fill="black"></path>
                                                    </svg> <span class="ml-1">400</span></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                            <div class="w-full px-8 py-3">
                                <div class="text-base text-gray-900 ">Delivered to :</div>
                                <div class="text-sm text-gray-500 mt-1">Abhaya Das</div>
                            </div>

                            <div class="w-full px-8">
                                <div class="bg-gray-200 rounded-sm h-[16px] flex justify-center items-center mb-2 w-[45px]">
                                    <div class="text-gray-700 text-[10px] address-type"> Home</div>
                                </div>

                                <div class="text-[12px] text-gray-700">Ghoshpara, Majherpara, Near Chandiberiya Primary
                                    school, Kestopore ,
                                    New Town WestBengal - 700102 </div>
                                <div class="mt-2 text-[11px] text-gray-700 flex items-center font-medium">Mobile : <span
                                        class="ml-1">9038460981</span></div>
                            </div>

                            <div class="w-full px-8 mt-4">
                                <!-- <button type="button" class="border border-firoza flex justify-center items-center bg-transparent py-1.5 px-4 rounded bg-firoza text-sm text-white"><span>Mark  Picked up</span></button>  -->
                                <button type="button"
                                    class="border border-firoza flex justify-center items-center bg-transparent py-1.5 px-4 rounded bg-firoza text-sm text-white"><span>Mark
                                        Delivered</span></button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- end Preparing Order  modal  -->

        <audio controls class="h-10 w-[275px] opacity-0 hidden">
            <source src="http://soundbible.com/mp3/analog-watch-alarm_daniel-simion.mp3">
            Your browser does not support the audio element.
        </audio>


        <!-- order confirm delivery modal start -->
        <div v-if="showConfirmDeliveryModal" class="relative z-50 " aria-labelledby="modal-title" role="dialog"
            aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white px-2 pt-4 pb-2 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm ">
                        <div class="absolute top-0 right-0 pt-2 pr-2 block">
                            <button @click="closeModal()" type="button" class="rounded-md bg-white text-gray-400">
                                <span class="sr-only">Close</span>
                                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="sm:flex sm:items-start px-4">
                            <div class="mt-3 text-center ">
                                <h3 class="text-lg font-medium leading-6 text-gray-900 text-center" id="modal-title">Are you
                                    sure order is delivered?</h3>
                                <div class="mt-2">
                                    <!-- <p class="text-sm text-gray-500 text-center">Mark As Deliverd</p> -->
                                </div>
                            </div>
                        </div>
                        <div class="mt-5">

                            <button type="button" @click="markDeliver()"
                                class="flex w-full items-center justify-center rounded border border-transparent bg-firoza px-4 py-2 text-base font-medium text-white shadow-sm ">

                                <span v-show="!loading">Yes
                                    order is Delivered</span>
                                <Spinner v-show="loading" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- order confirm delivery modal end -->

    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from "vuex";
//import NotificationBell from 'vue-notification-bell'
export default Vue.extend({
    name: 'foodOrderHistory',
    components: {},

    data: function () {
        return {
            CDN_BASE_URL: this.$config.CDN_BASE_URL,
            isDing:false,
            count:0,
            isbellRanged : false,
            indexValue: null,
            remainingTime : '',
            breadcrumb: [
                {
                    name: 'Current Order '//this.$t('search')
                }
            ],
            showLoader: true,
            defaultSize: 10,
            page: 0,
            orderlistings: [],
            orderStatusVal: '',
            selectedPickedItem: {},
            placedOrders: [],
            prepareingOrders: [],
            pickupOrders: [],
            deliveredOrders: [],
            canceledOrders: [],
            acceptedOrders: [],
            preparedOrders: [],
            showConfirmDeliveryModal: false,
            selectedAddress: null,
            loading: false,
            enableSearchMore: false,
            orderDetails: {},
            showDetailsPopup: false,
            orderDetailsId: '',
            isFullLoaderLoaded: false

        }
    },
    computed: {
        ...mapState({
            authUser: (state) => state.authUser,
        }),
    },

    mounted() {
       // this.readOrderStatusFromRealTimeDb()
        this.getCurrentOrders()
        // setTimeout(()=>{
        //     this.playSound()
        // }, 5000)
        
    },
    methods: {

        fechTheOrdersAgain(){
         this.getCurrentOrders()
        },

        npPlacedOrderFound(){
         console.log("----------------called agin")
        this.getCurrentOrders()
        },
        playSound(){
            try{
                console.log('Play sound')
                var audio = new Audio(`${this.CDN_BASE_URL}/web/web_new/audio/notification/restaurant-getting-new-order-notification-bell.mp3`);
                audio.pause();
                audio.currentTime = 0;
                audio.play();
            } catch(e){
                console.log('Play sound err: ', e)
            }
        },
        

        
        async readOrderStatusFromRealTimeDb() {
            try {
                // /restaurant_orders/${FirebaseAuth.instance.currentUser?.uid ?? ''}/PLACED
                let rid = this.authUser ? this.authUser?.uid : ''
                const offerRef = await this.$fire.database.ref(`restaurant_orders/${rid}/PLACED`).on("value", (value: any) => {
                    // this.placedOrders = []
                    console.log("real time db called", value)
                    this.getCurrentOrders()
                })
            } catch (e) {
                console.log('restaurant_orders:', e)   
                this.getCurrentOrders()
            }
        },
        bellthesound(){
            this.count = this.count + 1
            this.isDing = true
          //  this.count = 0
        },
       



        acceptSuccesful() {
            this.getCurrentOrders()
        },

        async getCurrentOrders() {
          
            let rid = this.authUser ? this.authUser?.uid : ''

            try {
                const url = `/forder/v1/order/restaurant/current/${rid}?showAll=true`;
                const data = await this.$axios.$get(url);
                // console.log("Data", data)

                let allCurrentOrders = data.payload

                if (allCurrentOrders && allCurrentOrders.length) {
                    var pOrders = allCurrentOrders.filter(function (el) { return el.orderStatus === "PLACED" });
                    var cOrders = allCurrentOrders.filter(function (el) { return el.orderStatus === "CANCELED" });
                    var dOrders = allCurrentOrders.filter(function (el) { return el.orderStatus === "DELIVERED" });
                    var aOrders = allCurrentOrders.filter(function (el) { return el.orderStatus === "ACCEPTED" });
                    var preOrders = allCurrentOrders.filter(function (el) { return el.orderStatus === "PREPARED" });

                    this.placedOrders = pOrders
                    this.deliveredOrders = dOrders
                    this.canceledOrders = cOrders
                    this.acceptedOrders = aOrders
                    this.preparedOrders = preOrders

                    if(this.placedOrders && this.placedOrders.length > 0){
                        this.playSound()
                    }
                }
                this.showLoader = false
              
                // if(this.placedOrders.length > 0){
                //   //  this.count = this.placedOrders.length
                //     console.log("this.placedOrders.length",this.count)
                //     this.bellthesound()
                // }
            } catch (error) {
                this.placedOrders = []
                this.deliveredOrders = []
                this.canceledOrders = []
                this.acceptedOrders = []
                this.preparedOrders = []
                this.showLoader = false
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

        transformDate(value) {
            if (value) {
                 return this.$moment(value).format('h:mm:ss a')
               // return new DateTime (value)
            }
        },


        async acceptOrder(selectedAcceptItem, ivalue) {
            this.indexValue = ivalue
            console.log(ivalue)
            let oid = selectedAcceptItem.id
            this.loading = true


            try {
                const url = `/forder/v1/order/restaurant/accept/${oid}`
                const data = await this.$axios.$post(url);
                if (data.success) {
                    Vue.$toast.success(data?.message);
                    this.getCurrentOrders()
                }
                this.loading = false
                this.indexValue = null
            } catch (error: any) {
                this.loading = false
                this.indexValue = null
                Vue.$toast.error(error?.response?.data?.message);
                console.log(error);
            }
        },

        async markAspickup(selectedPrepreareItem, indVal) {
            this.indexValue = indVal
            let oid = selectedPrepreareItem.id
            this.loading = true

            try {
                const url = `/forder/v1/order/restaurant/prepare/${oid}`
                const data = await this.$axios.$post(url);
                if (data.success) {
                    Vue.$toast.success(data?.message);

                    this.getCurrentOrders()
                }
                this.loading = false
                this.indexValue = null
            } catch (error: any) {
                this.loading = false
                this.indexValue = null
                Vue.$toast.error(error?.response?.data?.message);
                console.log(error);
            }
        },

        showDeliveryConfirmModal(selectedItem) {
            this.selectedPickedItem = selectedItem
            this.showConfirmDeliveryModal = true
        },
        closeModal() {
            this.selectedPickedItem = {}
            this.showConfirmDeliveryModal = false
        },

        async markDeliver() {
            let oid = this.selectedPickedItem.id
            this.loading = true

            try {
                const url = `/forder/v1/order/restaurant/deliver/${oid}`
                const data = await this.$axios.$post(url);
                if (data.success) {
                    Vue.$toast.success(data?.message);
                    this.getCurrentOrders()
                    this.selectedPickedItem = {}
                    this.showConfirmDeliveryModal = false
                }
                this.loading = false
            } catch (error: any) {
                this.loading = false
                Vue.$toast.error(error?.response?.data?.message);
                console.log(error);
            }
        },
        remove91ToPhoneNumber(phone: any) {
            console.log("remove91ToPhoneNumber", phone)
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
        viewOrderDet(selectedOrder) {
            console.log("selectedOrder", selectedOrder.orderId)
            this.orderDetailsId = selectedOrder.orderId
            this.showDetailsPopup = true
        },

        closeDeatilsPopUp() {
            this.orderDetailsId = ''
            this.showDetailsPopup = false
        }






    }
})
</script>
    

<style>
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

input[type="text"]:focus~label,
input[type="email"]:focus~label,
select:focus~label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(72, 206, 243, var(--tw-text-opacity));
    left: 0px;
}

input[type="text"]:not(:placeholder-shown)~label,
select:not([value='']):valid~label {
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
@media only screen and (min-device-width: 0px) and (max-device-width: 1279px) {
    .sell-order-nav .nav-link.active:before {
        display: none;
    }
}
</style>