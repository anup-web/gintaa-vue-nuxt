<template>
    <div class="relative bg-[#f8f8f8] min-h-screen">

        <GintaaFoodVendorSidebar />
        <div
            class="content-wrapper content-wrapper-min pl-0 relative z-10 sm:pl-0 md:pl-[180px] lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px]">
            <!-- <fullPageLoader v-if="showSeamerLoader" />    -->
            <GintaaFoodVendorHeader @resturantStatus="resturantStatus" />
            <div
                class="content pt-[60px] pb-[100px] px-4 sm:pt-[60px] sm:px-4 sm:pb-[100px] md:px-4 md:pt-[100px] lg:px-8 md:pb-0">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-right text-base font-medium">{{ $t('viewFood') }}</div>
                    <div class="items-center justify-center hidden sm:hidden md:flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 5.37766L17.5 12.3568V20.0002H12.5V15.0002H7.5V20.0002H2.5V12.3568L10 5.37766ZM20 10.1235L10 0.833496L0 10.111L1.13417 11.3318L10 3.1085L18.8658 11.3443L20 10.1235Z"
                                fill="#8EC23C" />
                        </svg>
                        <span class="text-sm text-green ml-2">Home / Menu / View Food</span>
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


                    <div class="block items-end justify-end sm:flex md:flex mb-3 border-b-2 pb-3 border-gray-200 px-2">

                        <!-- <form role="search" class="flex w-[300px] relative rounded-md mb-2 sm:mb-0 md:mb-0"><label for="top-bar-search" class="flex flex-1 items-center "><input id="search at header" type="text" autocomplete="off" name="search" placeholder="Search" value="" class="w-full h-full flex item-center appearance-none transition duration-300 ease-in-out text-heading text-sm placeholder-gray-500 overflow-hidden rounded focus:outline-none focus:ring-0 bg-gray-100 ps-10 pe-12 md:ps-14 border border-border-200 focus:border-accent focus:bg-light py-2 px-4"></label> <span class="w-12 md:w-12 h-full absolute top-0 right-0 flex flex-shrink-0 justify-center items-center focus:outline-none"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="w-5 h-5 text-skin-base ttext-gray-400"><path d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z" fill="#888a8f"></path></svg></span></form> -->

                        <div class="ml-0 flex items-end justify-end sm:ml-2 md:ml-4">
                            <!-- <div class="flex items-center mr-4 sm:mr-10 md:mr-10">
                                <div class="text-sm text-gray-500">Sort By</div>
                            
                            <div class="relative z-0 w-[110px] ml-4" >
                                                <select name="returnType" placeholder=" " class="text-gray-600 block w-full mt-0 bg-transparent border border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-[#48cef3] rounded text-sm px-4 py-2" >
                                                        <option value="" class="p-1" >Indian</option>
                                                        <option value="RETURN" class="p-1" >Indian</option>
                                                        <option value="RETURN_AND_REPLACE" class="p-1" >Indian</option>                                                 
                                                </select> 
                                            <span class="absolute right-3 top-[16px] -z-50" ><svg width="12" height="7" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round" stroke-linejoin="round" ></path></svg>
                                            </span>
                            </div>

                            </div> -->


                            <a href="/gintaa-food/vendor/add-menu"
                                class="border border-green flex justify-center items-center bg-transparent py-1.5 px-4 rounded bg-green text-base text-white">
                                <span>{{ $t('foodaddMenu') }}</span>
                            </a>
                        </div>


                    </div>

                    <!-- seamer loader start  -->
                    <div v-if="showSeamerLoader"
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
                    </div>
                    <!-- seamer loader end -->


                    <div class="w-full px-4 sm:px-4 md:px-4 lg:px-6">
                        <div class="accordion" id="accordionExample5">

                            <div v-if="menuListItems.length == 0 && !showSeamerLoader"
                                class="w-full cart-empty px-4 py-4 bg-white">
                                <div class="flex items-center justify-center"><img src="~assets/images/food/no-dishes.svg"
                                        alt="image" class="w-[240px] h-[190px]"></div>
                                <div class="text-lg text-gray-900 font-medium mb-3 text-center">{{ $t('noDishFound') }}
                                </div>
                            </div>

                            <div v-else v-for="(menu, index) in menuListItems" :key="index"
                                class="accordion-item bg-white border border-gray-200 mb-4">
                                <h2 class="accordion-header mb-0" :id="'headingOne5' + index">
                                    <button class="accordion-button collapsed relative flex items-center w-full py-3 px-4 text-sm font-medium text-gray-800 text-left bg-white
                                    border-0 rounded-none transition focus:outline-none " type="button"
                                        data-bs-toggle="collapse"
                                        :data-bs-target="'#menu-list-expandable-container' + index" aria-expanded="false"
                                        aria-controls="collapseOne5">
                                        {{ menu.name }}
                                        <span v-if="menu.subCategories.length == 0" class="ml-2 text-sm">({{
                                            menu.foodListings.length }})</span>
                                        <span v-else class="ml-2 text-sm">({{ menu.subCategories.length }})</span>
                                    </button>
                                </h2>
                                <div v-if="menu.subCategories.length == 0" :id="'menu-list-expandable-container' + index"
                                    class="accordion-collapse collapse" aria-labelledby="headingOne5">
                                    <div class="accordion-body py-0 px-0">
                                        <div class="overflow-x-auto">
                                            <div class="inline-block w-full py-0 align-middle">
                                                <div class="shadow-sm">
                                                    <table class="min-w-full divide-y divide-gray-300 table-auto"
                                                        style="border-spacing: 0">
                                                        <thead class=" bg-transparent">
                                                            <tr>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10  px-3 py-2 text-left text-sm font-semibold text-gray-900  w-[25%]">
                                                                    {{ $t('productName') }}</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900  w-[25%]">
                                                                    {{ $t('Description') }}</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900  ">
                                                                    {{ $t('foodType') }}</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900  ">
                                                                    {{ $t('state') }}</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900 ">
                                                                    {{ $t('foodPrice') }}</th>
                                                                <th scope="col"
                                                                    class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900 ">
                                                                    {{ $t('foodAction') }}</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="divide-y divide-gray-200 bg-white">
                                                            <tr v-for="(food) in menu.foodListings" :key="food.id">
                                                                <td class=" px-3 py-4 pl-8 text-sm text-[#44588F] w-[20%]">
                                                                    <div class="flex flex-col">
                                                                        <div class="flex items-center">
                                                                            <div class="h-[70px] w-[90px] flex-shrink-0">
                                                                                <img v-if="food.imageUrl"
                                                                                    :src="food.imageUrl" alt="image"
                                                                                    class="h-[70px] w-[90px] rounded">
                                                                                <img v-else
                                                                                    src="~/assets/images/food/consumer/no-dish.jpg"
                                                                                    alt="image"
                                                                                    class="h-[70px] w-[90px] rounded">
                                                                            </div>
                                                                            <div class="ml-2">
                                                                                <div
                                                                                    class="font-medium text-[#44588F] text-sm">
                                                                                    {{ food.name }}</div>
                                                                            </div>
                                                                        </div>
                                                                        <a :href="localePath(`/gintaa-food/vendor/menu/${food.id}`)"
                                                                            class="text-left text-sm text-green mt-2 font-medium">{{
                                                                                $t('viewDetails') }}</a>
                                                                    </div>
                                                                </td>

                                                                <td
                                                                    class="whitespace-break-spaces px-3 py-2 text-xs text-[#44588F] text-center w-[20%]">
                                                                    {{ food.description }}
                                                                </td>

                                                                <td class=" px-3 py-4 text-sm text-[#44588F] text-center">
                                                                    <div class="flex items-center justify-center">
                                                                        <div v-if="food.type == 'NON_VEG'">
                                                                            <svg width="20" height="19" viewBox="0 0 20 19"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <rect x="0.5" y="0.5" width="19" height="18"
                                                                                    stroke="#EE1029" />
                                                                                <circle cx="10" cy="9" r="5"
                                                                                    fill="#EE1029" />
                                                                            </svg>
                                                                        </div>
                                                                        <div v-else>
                                                                            <svg width="20" height="19" viewBox="0 0 20 19"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <rect x="0.5" y="0.5" width="19" height="18"
                                                                                    stroke="#1FBE58" />
                                                                                <circle cx="10" cy="9" r="5"
                                                                                    fill="#1FBE58" />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </td>

                                                                <td class=" px-3 py-4 text-sm text-[#44588F] text-center">
                                                                    <div
                                                                        class=" font-medium pl-[10px] flex items-center justify-center">
                                                                        <span
                                                                            :class="food.lastReviewStage === 'REJECTED' ? 'text-red-500' : food.lastReviewStage === 'PENDING' ? 'text-green' : ''"
                                                                            class="ml-0.5">{{ food.lastReviewStage ===
                                                                                'PENDING'
                                                                                ? 'In Review' : food.lastReviewStage ===
                                                                                    'REJECTED' ? 'Rejected' :
                                                                                    '' }}</span>
                                                                    </div>
                                                                </td>

                                                                <td class=" px-3 py-4 text-sm text-[#44588F] text-center">
                                                                    <div
                                                                        class=" font-medium pl-[10px] flex items-center justify-center">
                                                                        <svg width="6" height="11" viewBox="0 0 11 18"
                                                                            fill="none">
                                                                            <path opacity="0.7" fill-rule="evenodd"
                                                                                clip-rule="evenodd"
                                                                                d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                                                fill="black"></path>
                                                                        </svg>
                                                                        <span class="ml-0.5">{{ food.price }}</span>
                                                                    </div>
                                                                </td>
                                                                <td class=" px-3 py-4 text-sm text-[#44588F] text-center">
                                                                    <div class="flex items-center justify-end">
                                                                        <div v-if="!food.stockAvailable"
                                                                            @click="redirectToEditPage(food.id)"
                                                                            class="flex justify-center items-center border border-[#EA7000] rounded cursor-pointer w-[55px] h-[25px] px-1 py-1">
                                                                            <svg width="12" height="12" viewBox="0 0 20 20"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M16.4742 8.26917L5.93917 18.8017L0 20L1.19833 14.06L11.7325 3.52667L16.4742 8.26917ZM17.6525 7.09083L20 4.74083L15.2575 0L12.9108 2.3475L17.6525 7.09083Z"
                                                                                    fill="#EA7000" />
                                                                            </svg>
                                                                            <span class="text-[#EA7000] text-xs ml-1">{{
                                                                                $t('editBtn') }}</span>
                                                                        </div>
                                                                        <div v-if="food.stockAvailable"
                                                                            class="flex justify-center items-center border border-[#808080] rounded w-[55px] h-[25px] px-1 py-1 opacity-50">
                                                                            <svg width="12" height="12" viewBox="0 0 20 20"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
                                                                                <path
                                                                                    d="M16.4742 8.26917L5.93917 18.8017L0 20L1.19833 14.06L11.7325 3.52667L16.4742 8.26917ZM17.6525 7.09083L20 4.74083L15.2575 0L12.9108 2.3475L17.6525 7.09083Z"
                                                                                    fill="#808080" />
                                                                            </svg>
                                                                            <span class="text-[#808080] text-xs ml-1">{{
                                                                                $t('editBtn') }}</span>
                                                                        </div>
                                                                        <div v-if="!food.stockAvailable"
                                                                            @click="showRemoveFoodItemPopup(food)"
                                                                            class="ml-2 flex justify-center items-center border-0 border-[#FC2323] rounded cursor-pointer w-5 h-5">
                                                                            <svg width="16" height="16" viewBox="0 0 24 28"
                                                                                fill="none">
                                                                                <path fill-rule="evenodd"
                                                                                    clip-rule="evenodd"
                                                                                    d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                                                                                    fill="#FC2323"></path>
                                                                            </svg>
                                                                        </div>
                                                                        <div v-if="food.stockAvailable"
                                                                            class="ml-2 flex justify-center items-center border-0 border-[#808080] rounded w-5 h-5 opacity-50">
                                                                            <svg width="16" height="16" viewBox="0 0 24 28"
                                                                                fill="none">
                                                                                <path fill-rule="evenodd"
                                                                                    clip-rule="evenodd"
                                                                                    d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                                                                                    fill="#808080"></path>
                                                                            </svg>
                                                                        </div>
                                                                        <div class="text-sm text-gray-500 ml-4 w-[85px]">
                                                                            <div v-if="food.stockAvailable">In stock: </div>
                                                                            <div v-else>{{ $t('outStock') }}: </div>
                                                                        </div>
                                                                        <div class="form-check form-switch pl-4"><label
                                                                                for="flexSwitchCheckDefault"
                                                                                class="form-check-label inline-block text-gray-500 text-sm">
                                                                            </label>
                                                                            <input type="checkbox" role="switch"
                                                                                id="flexSwitchCheckDefault"
                                                                                v-model="food.stockAvailable"
                                                                                class="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300
                                                                                focus:outline-none cursor-pointer shadow-sm"
                                                                                @click="markFoodItemsOutOfStock(food.id, food.stockAvailable)">
                                                                        </div>
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
                                <div :id="'menu-list-expandable-container' + index" class="accordion-collapse collapse"
                                    aria-labelledby="headingOne5">
                                    <div class="accordion-body py-0 px-0">
                                        <div class="overflow-x-auto">
                                            <div class="inline-block w-full py-0 align-middle">
                                                <div class="shadow-sm">
                                                    <div v-for="(subCategory, i) in menu.subCategories" :key="i"
                                                        class="accordion-item bg-white border border-gray-200">
                                                        <h2 class="accordion-header mb-0" :id="'headingthree5' + i">
                                                            <button class="accordion-button collapsed relative flex items-center w-full py-2.5 pl-6 pr-4 text-sm font-medium text-green-800 text-left bg-white
                                                    border-0 rounded-none transition focus:outline-none sub-menu-bg"
                                                                type="button" data-bs-toggle="collapse"
                                                                :data-bs-target="'#subCategory-expandable-container' + i + index"
                                                                aria-expanded="false" aria-controls="collapseTwo5">
                                                                {{ subCategory.name }} <span class="ml-2 text-sm">({{
                                                                    subCategory.foodListings.length }})</span>
                                                            </button>
                                                        </h2>
                                                        <div :id="'subCategory-expandable-container' + i + index"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="headingthree5">
                                                            <div class="accordion-body py-0 px-0">
                                                                <div class="overflow-x-auto">
                                                                    <div class="inline-block w-full py-0 align-middle">
                                                                        <div class="shadow-sm">
                                                                            <table
                                                                                v-if="subCategory.foodListings.length > 0"
                                                                                class="accordion-table min-w-full divide-y divide-gray-300 table-auto"
                                                                                style="border-spacing: 0">
                                                                                <thead class=" bg-transparent">
                                                                                    <tr>
                                                                                        <th scope="col"
                                                                                            class="sticky top-0 z-10  px-3 py-2 pl-8 text-left text-sm font-semibold text-gray-900  w-[25%]">
                                                                                            {{ $t('productName') }}</th>
                                                                                        <th scope="col"
                                                                                            class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900  w-[25%]">
                                                                                            {{ $t('Description') }}</th>
                                                                                        <th scope="col"
                                                                                            class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900  ">
                                                                                            {{ $t('foodType') }}</th>
                                                                                        <th scope="col"
                                                                                            class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900  ">
                                                                                            {{ $t('state') }}</th>
                                                                                        <th scope="col"
                                                                                            class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900 ">
                                                                                            {{ $t('foodPrice') }}</th>
                                                                                        <th scope="col"
                                                                                            class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900 ">
                                                                                            {{ $t('foodAction') }}</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody
                                                                                    class="divide-y divide-gray-200 bg-white">
                                                                                    <tr v-for="(food) in subCategory.foodListings"
                                                                                        :key="food.id">
                                                                                        <td
                                                                                            class=" px-3 py-4 pl-8 text-sm text-[#44588F] w-[20%]">
                                                                                            <div class="flex flex-col">
                                                                                                <div
                                                                                                    class="flex items-center">
                                                                                                    <div
                                                                                                        class="h-[70px] w-[90px] flex-shrink-0">
                                                                                                        <img v-if="food.imageUrl"
                                                                                                            :src="food.imageUrl"
                                                                                                            :alt="food.imageUrl"
                                                                                                            class="h-[70px] w-[90px] rounded">

                                                                                                        <img v-else
                                                                                                            src="~/assets/images/food/consumer/no-dish.jpg"
                                                                                                            alt="image"
                                                                                                            class="h-[70px] w-[90px] rounded">
                                                                                                    </div>
                                                                                                    <div class="ml-2">
                                                                                                        <div
                                                                                                            class="font-medium text-[#44588F] text-sm">
                                                                                                            {{ food.name }}
                                                                                                        </div>
                                                                                                    </div>

                                                                                                </div>
                                                                                                <a :href="localePath(`/gintaa-food/vendor/menu/${food.id}`)"
                                                                                                    class="text-left text-sm text-green mt-2 font-medium">{{
                                                                                                        $t('viewDetails') }}</a>
                                                                                            </div>
                                                                                        </td>

                                                                                        <td
                                                                                            class=" px-2 py-2 text-xs text-[#44588F] text-center w-[20%]">
                                                                                            {{ food.description }}
                                                                                        </td>

                                                                                        <td
                                                                                            class=" px-3 py-4 text-sm text-[#44588F] text-center">
                                                                                            <div
                                                                                                class="flex items-center justify-center">
                                                                                                <div
                                                                                                    v-if="food.type == 'NON_VEG'">
                                                                                                    <svg width="20"
                                                                                                        height="19"
                                                                                                        viewBox="0 0 20 19"
                                                                                                        fill="none"
                                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                                        <rect x="0.5"
                                                                                                            y="0.5"
                                                                                                            width="19"
                                                                                                            height="18"
                                                                                                            stroke="#EE1029" />
                                                                                                        <circle cx="10"
                                                                                                            cy="9" r="5"
                                                                                                            fill="#EE1029" />
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div v-else>
                                                                                                    <svg width="20"
                                                                                                        height="19"
                                                                                                        viewBox="0 0 20 19"
                                                                                                        fill="none"
                                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                                        <rect x="0.5"
                                                                                                            y="0.5"
                                                                                                            width="19"
                                                                                                            height="18"
                                                                                                            stroke="#1FBE58" />
                                                                                                        <circle cx="10"
                                                                                                            cy="9" r="5"
                                                                                                            fill="#1FBE58" />
                                                                                                    </svg>
                                                                                                </div>
                                                                                            </div>
                                                                                        </td>

                                                                                        <td
                                                                                            class=" px-3 py-4 text-sm text-[#44588F] text-center">
                                                                                            <div
                                                                                                class=" font-medium pl-[10px] flex items-center justify-center">
                                                                                                <span
                                                                                                    :class="food.lastReviewStage === 'REJECTED' ? 'text-red-500' : food.lastReviewStage === 'PENDING' ? 'text-green' : ''"
                                                                                                    class="ml-0.5">{{
                                                                                                        food.lastReviewStage ===
                                                                                                        'PENDING'
                                                                                                        ? 'In Review' :
                                                                                                        food.lastReviewStage ===
                                                                                                            'REJECTED' ? 'Rejected'
                                                                                                            :
                                                                                                            '' }}</span>
                                                                                            </div>
                                                                                        </td>

                                                                                        <td
                                                                                            class=" px-3 py-4 text-sm text-[#44588F] text-center">
                                                                                            <div
                                                                                                class=" font-medium pl-[10px] flex items-center justify-center">
                                                                                                <svg width="6" height="11"
                                                                                                    viewBox="0 0 11 18"
                                                                                                    fill="none">
                                                                                                    <path opacity="0.7"
                                                                                                        fill-rule="evenodd"
                                                                                                        clip-rule="evenodd"
                                                                                                        d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                                                                                        fill="black"></path>
                                                                                                </svg>
                                                                                                <span class="ml-0.5">{{
                                                                                                    food.price }}</span>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td
                                                                                            class=" px-3 py-4 text-sm text-[#44588F] text-center">
                                                                                            <div
                                                                                                class="flex items-center justify-end">
                                                                                                <div v-if="!food.stockAvailable"
                                                                                                    @click="redirectToEditPage(food.id)"
                                                                                                    class="flex justify-center items-center border border-[#EA7000] rounded cursor-pointer w-[55px] h-[25px] px-1 py-1">
                                                                                                    <svg width="12"
                                                                                                        height="12"
                                                                                                        viewBox="0 0 20 20"
                                                                                                        fill="none"
                                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                                        <path
                                                                                                            d="M16.4742 8.26917L5.93917 18.8017L0 20L1.19833 14.06L11.7325 3.52667L16.4742 8.26917ZM17.6525 7.09083L20 4.74083L15.2575 0L12.9108 2.3475L17.6525 7.09083Z"
                                                                                                            fill="#EA7000" />
                                                                                                    </svg>
                                                                                                    <span
                                                                                                        class="text-[#EA7000] text-xs ml-1">{{
                                                                                                            $t('editBtn')
                                                                                                        }}</span>
                                                                                                </div>
                                                                                                <div v-if="food.stockAvailable"
                                                                                                    class="flex justify-center items-center border border-[#808080] rounded w-[55px] h-[25px] px-1 py-1 opacity-50">
                                                                                                    <svg width="12"
                                                                                                        height="12"
                                                                                                        viewBox="0 0 20 20"
                                                                                                        fill="none"
                                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                                        <path
                                                                                                            d="M16.4742 8.26917L5.93917 18.8017L0 20L1.19833 14.06L11.7325 3.52667L16.4742 8.26917ZM17.6525 7.09083L20 4.74083L15.2575 0L12.9108 2.3475L17.6525 7.09083Z"
                                                                                                            fill="#808080" />
                                                                                                    </svg>
                                                                                                    <span
                                                                                                        class="text-[#808080] text-xs ml-1">{{
                                                                                                            $t('editBtn')
                                                                                                        }}</span>
                                                                                                </div>
                                                                                                <div v-if="!food.stockAvailable"
                                                                                                    @click="showRemoveFoodItemPopup(food)"
                                                                                                    class="ml-2 flex justify-center items-center border-0 border-[#FC2323] rounded cursor-pointer w-5 h-5">
                                                                                                    <svg width="16"
                                                                                                        height="16"
                                                                                                        viewBox="0 0 24 28"
                                                                                                        fill="none">
                                                                                                        <path
                                                                                                            fill-rule="evenodd"
                                                                                                            clip-rule="evenodd"
                                                                                                            d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                                                                                                            fill="#FC2323">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div v-if="food.stockAvailable"
                                                                                                    class="ml-2 flex justify-center items-center border-0 border-[#808080] rounded w-5 h-5 opacity-50">
                                                                                                    <svg width="16"
                                                                                                        height="16"
                                                                                                        viewBox="0 0 24 28"
                                                                                                        fill="none">
                                                                                                        <path
                                                                                                            fill-rule="evenodd"
                                                                                                            clip-rule="evenodd"
                                                                                                            d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                                                                                                            fill="#808080">
                                                                                                        </path>
                                                                                                    </svg>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="text-sm text-gray-500 ml-4 w-[85px]">
                                                                                                    <div
                                                                                                        v-if="food.stockAvailable">
                                                                                                        {{ $t('inStock') }}:
                                                                                                    </div>
                                                                                                    <div v-else>{{
                                                                                                        $t('outStock') }}:
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    class="form-check form-switch pl-4">
                                                                                                    <label
                                                                                                        for="flexSwitchCheckDefault"
                                                                                                        class="form-check-label inline-block text-gray-500 text-sm">
                                                                                                    </label>
                                                                                                    <input type="checkbox"
                                                                                                        role="switch"
                                                                                                        id="flexSwitchCheckDefault"
                                                                                                        v-model="food.stockAvailable"
                                                                                                        class="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300
                                                                                                focus:outline-none cursor-pointer shadow-sm"
                                                                                                        @click="markFoodItemsOutOfStock(food.id, food.stockAvailable)">
                                                                                                </div>
                                                                                            </div>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                            <table v-else
                                                                                class="accordion-table min-w-full divide-y divide-gray-300 table-auto"
                                                                                style="border-spacing: 0">
                                                                                <thead class=" bg-transparent">
                                                                                    <tr>
                                                                                        <th scope="col"
                                                                                            class="sticky top-0 z-10  px-3 py-2 pl-8 text-left text-sm font-semibold text-gray-900  w-[25%]">
                                                                                            {{ $t('productName') }}</th>
                                                                                        <th scope="col"
                                                                                            class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900  w-[25%]">
                                                                                            {{ $t('Description') }}</th>
                                                                                        <th scope="col"
                                                                                            class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900  ">
                                                                                            {{ $t('foodType') }}</th>
                                                                                        <th scope="col"
                                                                                            class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900  ">
                                                                                            {{ $t('state') }}</th>
                                                                                        <th scope="col"
                                                                                            class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900 ">
                                                                                            {{ $t('foodPrice') }}</th>
                                                                                        <th scope="col"
                                                                                            class="sticky top-0 z-10  px-3 py-2 text-center text-sm font-semibold text-gray-900 ">
                                                                                            {{ $t('foodAction') }}</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody
                                                                                    class="divide-y divide-gray-200 bg-white">
                                                                                    <tr>
                                                                                        <td
                                                                                            class=" px-3 py-2 text-xs text-[#44588F] text-center w-[20%]">
                                                                                            -</td>
                                                                                        <td
                                                                                            class=" px-3 py-2 text-xs text-[#44588F] text-center w-[20%]">
                                                                                            -</td>
                                                                                        <td
                                                                                            class=" px-3 py-2 text-xs text-[#44588F] text-center w-[20%]">
                                                                                            -</td>
                                                                                        <td
                                                                                            class=" px-3 py-2 text-xs text-[#44588F] text-center w-[20%]">
                                                                                            -</td>
                                                                                        <td
                                                                                            class=" px-3 py-2 text-xs text-[#44588F] text-center w-[20%]">
                                                                                            -</td>
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
                            </div>
                        </div>
                        <div v-if="showDeleteFoodModal" class="relative z-50 " aria-labelledby="modal-title" role="dialog"
                            aria-modal="true">
                            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                            <div class="fixed inset-0 z-50 overflow-y-auto">
                                <div
                                    class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                                    <div
                                        class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                                        <div class="absolute top-0 right-0 pt-4 pr-4 block">
                                            <button @click="closeRemoveFoodItemPopup" type="button"
                                                class="rounded-md bg-white text-gray-400 hover:text-gray-500 ">
                                                <span class="sr-only">Close</span>
                                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                    stroke="currentColor" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="sm:flex sm:items-start">
                                            <div
                                                class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <svg width="20" height="20" viewBox="0 0 24 28" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                                                        fill="#FC2323"></path>
                                                </svg>
                                            </div>
                                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <h3 class="text-base font-semibold leading-6 text-gray-900"
                                                    id="modal-title">{{ $t('deleteFoodItem') }}</h3>
                                            </div>
                                        </div>
                                        <div class="mt-8 sm:mt-8 flex justify-end">
                                            <button type="button" @click="closeRemoveFoodItemPopup"
                                                class="flex w-[85px] justify-center items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">{{
                                                    $t('cancel') }}</button>
                                            <button type="button" @click="deleteItem"
                                                class="flex w-[85px] justify-center items-center rounded-md bg-errortext px-3 py-2 text-sm font-semibold text-white ml-3 ">
                                                <span v-show="!loading">{{ $t('remove') }}</span>
                                                <Spinner v-show="loading" />
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--code  -->
                        <!--  -->
                    </div>

                </div>
            </div>
        </div>

        <GintaaFoodVendorFooter />


    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from "vuex";

export default {
    name: 'MenuPage',
    data() {
        return {
            //authUser : this.$store.state.authUser,
            showSeamerLoader: true,
            errorMenuFetch: false,
            menuListItems: [],
            active: false,
            isAccordionOpen: false,
            deleteFoodID: '',
            showDeleteFoodModal: false,
            loading: false,
            resStatus: ''
        }
    },
    computed: {
        ...mapState({
            authUser: (state) => state.authUser,
        }),
    },
    mounted() {
        // console.log("------------------------")
        this.getAllMenuItems();
    },
    methods: {

        resturantStatus(resStatus) {
            console.log("resStatus", resStatus)
            this.resStatus = resStatus
        },
        async getAllMenuItems() {
            try {
                this.menuListItems = [];
                const restaurantId = this.authUser ? this.authUser?.uid : "";
                let url = `/flisting/v1/food-listing/restaurant/${restaurantId}?stockAvailable=false`;
                const res = await this.$axios.$get(url);
                if (res) {
                    this.showSeamerLoader = false;
                }
                const menuList = res.payload;
                menuList.map((item) => {
                    this.menuListItems.push(item);
                });

                //  this.menuListItems = []
                // console.log(this.menuListItems);
            } catch (error) {
                this.showSeamerLoader = false;
                this.errorMenuFetch = true;
            }
        },
        async markFoodItemsOutOfStock(foodItemId, status) {
            try {
                //this.showSeamerLoader = true;
                status = !status;
                let url = `/flisting/v1/food-listing/${foodItemId}?available=${status}`
                const res = await this.$axios.post(url)
                console.log(res.data);
                if (res.status == 200) {
                    console.log(res.data.payload.stockAvailable);
                };
                //this.getAllMenuItems();
                // setTimeout(() => {
                //     this.showSeamerLoader = false;
                // }, 200);
            } catch (error) {
                //this.showSeamerLoader = false;
                this.errorMenuFetch = true;
            }
        },
        redirectToEditPage(foodID) {
            if (this.resStatus === 'ONLINE') {
                this.showMakeResOfflineMsg()
                return false
            }

            this.$router.push(
                {
                    path: (`/gintaa-food/vendor/add-menu?`),
                    query: {
                        food_id: foodID
                    }
                })
        },

        showMakeResOfflineMsg() {
            Vue.$toast.warning('Can not update restaurant while restaurant is Online!')

        },
        showRemoveFoodItemPopup(food) {
            if (this.resStatus === 'ONLINE') {
                this.showMakeResOfflineMsg()
                return false
            }
            this.showDeleteFoodModal = true;
            this.deleteFoodID = food.id;
        },
        closeRemoveFoodItemPopup() {
            this.showDeleteFoodModal = false;
        },
        async deleteItem() {
            console.log(this.deleteFoodID);
            this.loading = true;
            let rid = this.authUser ? this.authUser?.uid : '';
            try {
                const url = `/flisting/v1/food-listing/${this.deleteFoodID}`;
                const data = await this.$axios.$delete(url);
                if (data.success) {
                    console.log(data);
                    this.getAllMenuItems();
                    Vue.$toast.success(data?.message);
                    this.closeRemoveFoodItemPopup();
                }
                this.loading = false
            } catch (error: any) {
                this.loading = false;
                this.closeRemoveFoodItemPopup();
                Vue.$toast.error(error?.response?.data?.message);
                console.log(error);
            }
        },
    }
}
</script>


<style scoped>
.sub-menu-bg {
    background-color: #ffffff !important;
    border-radius: 0px !important;
    -webkit-border-radius: 0px !important;
    -moz-border-radius: 0px !important;
}


.accordion-button::after {
    width: 1rem !important;
    height: 1rem !important;
    background-size: 1rem !important;
    background-image: url(~/assets/images/down-arrow.svg) !important;
}

.accordion-button:not(.collapsed)::after {
    background-image: url(~/assets/images/down-arrow.svg) !important;
    transform: rotate(-180deg) !important;
}

.accordion-item:first-of-type {

    border-top-left-radius: 0rem !important;
    border-top-right-radius: 0rem !important;

}

.accordion-item:not(:first-of-type) {
    border-top: 1px solid #e5e7eb !important;
}

.accordion-item:last-of-type {
    border-bottom-right-radius: 0rem !important;
    border-bottom-left-radius: 0rem !important;

}

.accordion-button:not(.collapsed) {
    box-shadow: none !important;
    border-bottom: 1px solid #e5e7eb !important;
}

.whitespace-break-spaces {
    white-space: break-spaces;
}</style>