<template>
     <div class="relative overflow-hidden pt-[80px] lg:pt-12">
          <GintaaFoodConsumerHeader @selectedLocation="selectedLocation" />
          <div :class="headerStickyClass"
               class="max-w-[1920px] bg-[#312e2e] mx-auto  md:px-8 2xl:px-16 pt-4 sm:pt-4 md:pt-4 lg:pt-6 xl:pt-6 2xl:pt-6 banner-fixed">
               <div v-if="resturantDet" :class="(isImageWillGrayScale(resturantDet) || !isResturantServicable)  ? 'grayscale' : ''"
                    class="w-full max-w-8xl mx-auto px-4 sm:w-full md:container md:px-4 lg:px-8 2xl:px-16">
                    <div class="w-full flex justify-between pb-2 pt-2 sm:pb-2 sm:pt-2 md:pb-6 md:pt-4 relative banner-top">
                         <div class="block sm:block md:flex">
                              <div class="flex-shrink-0 hidden sm:hidden md:block relative">
                                   <img :src="resturantDet.photoUrl" alt="icon"
                                        class="w-full h-[200px] rounded-md sm:w-full md:w-[280px] sticky-banner " />

                                   <div v-if="!isResturantServicable && showResturantStatus"
                                        class="w-full absolute bottom-0 md:text-sm 2xl:text-base font-bold bg-opacity-30 bg-black py-1 text-center xl:font-[15px] 2xl:font-base h-auto">
                                        <span class="block text-white uppercase">{{ $t('unavailableForDelivery') }}</span>
                                   </div>

                                   <div v-if="resturantDet.status === 'OFFLINE' && isResturantServicable && showResturantStatus"
                                        class="w-full absolute bottom-0 md:text-sm 2xl:text-base font-bold bg-opacity-30 bg-black py-1 text-center xl:font-[15px] 2xl:font-base h-auto">
                                        <span class="block text-white uppercase">{{ $t('offline') }}</span>
                                   </div>
                              </div>
                              <div class="ml-0 mt-0 flex flex-1 flex-col sm:ml-0 sm:mt-3 md:ml-4 md:mt-0">
                                   <div class="text-left text-[22px] font-medium text-white">{{ resturantDet.name }}</div>

                                   <div v-if="resturantDet.avgRating" class="flex item-center mt-2">

                                        <div v-if="resturantDet.avgRating"
                                             class="flex items-center bg-[#03B760] rounded-full h-[20px] px-2">
                                             <svg width="14" height="14" viewBox="0 0 46 44" fill="none"
                                                  xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                                       fill="#ffffff"></path>
                                             </svg>
                                             <span class="text-sm text-white ml-1">{{ tofixedTwoDigit(resturantDet.avgRating)
                                             }}</span>
                                        </div>
                                        <div v-if="resturantDet.totalRating" class="flex item-center ml-2">
                                             <div class="text-base text-white">{{ resturantDet.totalRating }}</div>
                                             <span class="px-1 mt-1"><svg width="16" height="16" viewBox="0 0 24 24"
                                                       fill="none" xmlns="http://www.w3.org/2000/svg">
                                                       <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z"
                                                            fill="#ffffff" />
                                                  </svg>
                                             </span>
                                             <div class="text-base text-white">rating<span
                                                       v-if="resturantDet.totalRating > 1">s</span></div>
                                        </div>
                                   </div>

                                   <div class="flex items-center mt-2">
                                        <div class="text-[15px] text-white">{{ $t('minimumOrderValue') }} :</div>
                                        <div class="flex items-center text-base text-white font-medium ml-1">
                                             <svg width="12" height="12" viewBox="0 0 12 21" fill="none">
                                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                                       d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z"
                                                       fill="white"></path>
                                             </svg>
                                             <span class="pl-0.5">{{ resturantDet.minOrderPrice }}</span>
                                        </div>
                                   </div>

                                   <div class="flex items-start mt-2">
                                        <div class="flex items-center flex-shrink-0">
                                             <svg width="15" height="16" viewBox="0 0 20 24" fill="none"
                                                  xmlns="http://www.w3.org/2000/svg">
                                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                                       d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z"
                                                       fill="#ffffff" />
                                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                                       d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z"
                                                       fill="#ffffff" />
                                             </svg>
                                             <span class="text-white text-sm ml-1">{{ $t('foodArea') }} : </span>
                                        </div>
                                        <div class="text-sm text-white ml-1 flex-1">{{
                                             getAddressitemDet(resturantDet.location) }}
                                        </div>
                                   </div>



                                   <!-- <div v-if="(resturantDet.distance > 5 || resturantDet.distance === 'Infinity')" class="text-sm font-bold bg-opacity-30 bg-white py-1 text-center xl:font-[15px] 2xl:font-base rounded-full w-[240px] mt-4 h-[28px]"><span class="block text-white">UNAVAILABLE FOR DELIVERY</span></div>
                                  -->


                                   <!-- <form role="search" class="flex w-[300px] relative rounded-md mt-2"><label
                                             for="top-bar-search" class="flex flex-1 items-center "><input
                                                  id="search at header" type="text" autocomplete="off" name="search"
                                                  placeholder="Search" value=""
                                                  class="w-full h-full flex item-center appearance-none transition duration-300 ease-in-out text-heading text-sm placeholder-gray-500 overflow-hidden rounded focus:outline-none focus:ring-0 bg-gray-100 ps-10 pe-12 md:ps-14 border border-border-200 focus:border-accent focus:bg-light py-2 px-4"></label>
                                        <span
                                             class="w-12 md:w-12 h-full absolute top-0 right-0 flex flex-shrink-0 justify-center items-center focus:outline-none"><svg
                                                  width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                  class="w-5 h-5 text-skin-base ttext-gray-400">
                                                  <path d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                                                       fill="#888a8f"></path>
                                             </svg></span>
                                   </form> -->

                              </div>
                         </div>
                    </div>
               </div>
          </div>
          <!-- </div> -->

          <div
               class="hidden md:block rounded-md w-[293px] h-[189px] fixed z-20 top-[222px] right-[84px] shadow-lg  download-app-bg">
               <div class="w-full px-2 py-2 relative">
                    <div class="absolute top-[30px] left-[-10px]">
                         <img src="~/assets/images/food/scan-bg.png" alt="image" class="w-[151px] h-[143px]" />
                         <img src="~/assets/images/food/qr-code.svg" alt="image"
                              class="w-[52px] h-[52px] absolute top-[68px] right-[43px]" />
                    </div>
                    <div class="relative pl-[122px] pt-[20px]">
                         <div class="text-white font-medium text-base pr-4 mt-1 pl-1">{{ $t('onlineOrderingSupportedApp') }}</div>
                         <div class="font-medium text-white text-sm mt-4 pl-1">{{ $t('downloadTheApp') }} </div>
                         <div class="flex items-center justify-between pr-2 mt-1 pl-1">
                              <div class="mr-1">
                                   <a href="https://play.google.com/store/apps/details?id=com.asconsoft.gintaa.prod"
                                        target="_blank">
                                        <img src="https://dev.cdn.gintaa.com/web/web_new/download-our-app/play-store.png"
                                             alt="google play store" class=" w-full"></a>
                              </div>
                              <div>
                                   <a href="https://apps.apple.com/in/app/gintaa/id1583773926" target="_blank">
                                        <img src="https://dev.cdn.gintaa.com/web/web_new/download-our-app/apple-store.png"
                                             alt="apple store" class=" w-full">
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>
          </div>

          <div
               class=" max-w-[1920px]  mx-auto  md:px-4 lg:px-8 2xl:px-16 pt-4 sm:pt-4 md:pt-4 lg:pt-6 xl:pt-6 2xl:pt-6 bg-[#f0f5f7]">
               <div class="w-full max-w-8xl mx-auto px-4 sm:w-full md:container md:px-4 lg:px-8 2xl:px-16">
                    <div
                         class="w-full pl-0 relative flex flex-col sm:flex-col sm:pl-0 md:pl-0 lg:pl-20 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row pb-14">
                         <div class="w-full">
                              <div class="block sm:block md:flex">
                                   <div :class="leftPanelStickyClass"
                                        class=" py-4 pr-4 rounded-md w-[220px] h-[320px] flex-shrink-0 left-menu-fixed hidden sm:hidden md:block">

                                        <!-- Start Show sriman loader  -->
                                        <div v-if="loading"
                                             class="relative ml-2 w-full bg-white overflow-hidden rounded-lg divide-y divide-slate-200">
                                             <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                                                  <div class="rounded h-2 w-28 bg-gray-200 shimmerBG ml-2"></div>
                                                  <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                             </div>
                                             <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                                                  <div class="rounded h-2 w-28 bg-gray-200 shimmerBG ml-2"></div>
                                                  <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                             </div>
                                             <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                                                  <div class="rounded h-2 w-28 bg-gray-200 shimmerBG ml-2"></div>
                                                  <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                             </div>
                                             <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                                                  <div class="rounded h-2 w-28 bg-gray-200 shimmerBG ml-2"></div>
                                                  <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                             </div>
                                             <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                                                  <div class="rounded h-2 w-28 bg-gray-200 shimmerBG ml-2"></div>
                                                  <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                             </div>
                                             <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                                                  <div class="rounded h-2 w-28 bg-gray-200 shimmerBG ml-2"></div>
                                                  <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                             </div>
                                             <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                                                  <div class="rounded h-2 w-28 bg-gray-200 shimmerBG ml-2"></div>
                                                  <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                             </div>
                                             <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                                                  <div class="rounded h-2 w-28 bg-gray-200 shimmerBG ml-2"></div>
                                                  <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                             </div>
                                             <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                                                  <div class="rounded h-2 w-28 bg-gray-200 shimmerBG ml-2"></div>
                                                  <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                             </div>
                                             <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                                                  <div class="rounded h-2 w-28 bg-gray-200 shimmerBG ml-2"></div>
                                                  <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                                             </div>
                                        </div>

                                        <!-- Ens Show sriman loader -->

                                        <ul v-if="!loading" class="list-none flex flex-col space-y-2">

                                             <li v-for="(cat, catIndex) in currentList.categoryList" :key="cat.id + catIndex"
                                                  class="py-0.5 px-4"
                                                  :class="activSelectedCatId === cat.id ? 'select-menu' : ''">

                                                       <!-- :href="'#'+cat.id"
                                                            @click="scrollToSection(cat.id)" -->
                                                            <!-- activSelectedCatId = cat.id -->
                                                  <a 
                                                       href="javascript:;"
                                                       @click="menuCategoryOnClick(cat.id, catIndex)"
                                                       class="text-base text-gray-900">
                                                       {{ cat.name }}
                                                       <span class="ml-1">({{ cat.menuCount }})</span>
                                                  </a>
                                             </li>


                                        </ul>
                                   </div>

                                   <div :class="listStickyClass"
                                        class="w-full px-0 mt-0 flex-1 sm:px-0 sm:mt-0 md:px-0 md:mt-0 food-menu-list sm:w-full md:w-full xl:max-w-xl 2xl:max-w-2xl">
                                        <div :class="tabStickyClass" class="flex items-center mb-0 sm:mb-0 md:mb-2">
                                             <a v-if="vegMenuList.length && nonVegMenuList.length" href="javascript:;"
                                                  @click="selectCurrentTab('ALL')"
                                                  :class="currentTab === 'ALL' ? 'current-tab' : ''"
                                                  class="px-4 py-2  text-firoza border border-firoza rounded-md mr-4 w-[100px] h-[42px] text-center flex items-center justify-center">
                                                  {{ $t('all') }}</a>
                                             <a v-if="vegMenuList.length" href="javascript:;"
                                                  @click="selectCurrentTab('VEG')"
                                                  :class="currentTab === 'VEG' ? 'current-tab-veg' : ''"
                                                  class="px-4 py-2 text-[#1FBE58] border border-[#1FBE58] rounded-md mr-4 w-[100px] h-[42px] text-center flex items-center justify-center">
                                                  {{ $t('foodVeg') }}</a>
                                             <a v-if="nonVegMenuList.length" href="javascript:;"
                                                  @click="selectCurrentTab('NON-VEG')"
                                                  :class="currentTab === 'NON-VEG' ? 'current-tab-non' : ''"
                                                  class="px-4 py-2 text-[#EE1029] border border-[#EE1029] rounded-md w-[100px] h-[42px] text-center flex items-center justify-center">
                                                  {{ $t('foodNonVeg') }}</a>
                                        </div>
                                        <!-- Start Show sriman loader  -->
                                        <div v-if="loading"
                                             class="divide-y divide-slate-200 bg-white border border-gray-50 rounded-md p-4 max-w-sm mt-4">
                                             <div class="max-w-sm py-4">
                                                  <div class="animate-pulses flex space-x-4">
                                                       <div class="flex-1 space-y-2 py-1">
                                                            <div class="h-4 w-4 bg-slate-200 rounded shimmerBG"></div>
                                                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG"></div>
                                                            <div class="h-2 w-16 bg-slate-200 rounded shimmerBG"></div>
                                                            <div class="h-2 w-36 bg-slate-200 rounded shimmerBG"></div>
                                                       </div>
                                                       <div class="rounded-md bg-slate-200 h-16 w-16 shimmerBG"></div>
                                                  </div>
                                             </div>
                                             <div class="max-w-sm py-4">
                                                  <div class="animate-pulses flex space-x-4">
                                                       <div class="flex-1 space-y-2 py-1">
                                                            <div class="h-4 w-4 bg-slate-200 rounded shimmerBG"></div>
                                                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG"></div>
                                                            <div class="h-2 w-16 bg-slate-200 rounded shimmerBG"></div>
                                                            <div class="h-2 w-36 bg-slate-200 rounded shimmerBG"></div>
                                                       </div>
                                                       <div class="rounded-md bg-slate-200 h-16 w-16 shimmerBG"></div>
                                                  </div>
                                             </div>

                                             <div class="max-w-sm py-4">
                                                  <div class="animate-pulses flex space-x-4">
                                                       <div class="flex-1 space-y-2 py-1">
                                                            <div class="h-4 w-4 bg-slate-200 rounded shimmerBG"></div>
                                                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG"></div>
                                                            <div class="h-2 w-16 bg-slate-200 rounded shimmerBG"></div>
                                                            <div class="h-2 w-36 bg-slate-200 rounded shimmerBG"></div>
                                                       </div>
                                                       <div class="rounded-md bg-slate-200 h-16 w-16 shimmerBG"></div>
                                                  </div>
                                             </div>

                                             <div class="max-w-sm py-4">
                                                  <div class="animate-pulses flex space-x-4">
                                                       <div class="flex-1 space-y-2 py-1">
                                                            <div class="h-4 w-4 bg-slate-200 rounded shimmerBG"></div>
                                                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG"></div>
                                                            <div class="h-2 w-16 bg-slate-200 rounded shimmerBG"></div>
                                                            <div class="h-2 w-36 bg-slate-200 rounded shimmerBG"></div>
                                                       </div>
                                                       <div class="rounded-md bg-slate-200 h-16 w-16 shimmerBG"></div>
                                                  </div>
                                             </div>

                                        </div>
                                        <!-- End Show sriman loader -->

                                        <div                                              
                                             
                                             :class="alllistStickyClass" 
                                             v-if="!loading"
                                             class=" food-list-height bg-white border-gray-100">
                                             <div class="list-height  pt-2 pb-4 border-b-8 border-[#f0f5f7]"
                                                  v-for="(cat, index) in currentList.menuList" :key="'menu-list-' + index"
                                                  :id="cat.id"
                                                  :ref="cat.id"
                                                  >
                                                  <!-- :class="activSelectedCatId === cat.id ? 'active-cat-menu' : ''" -->
                                                  <div class="text-gray-700 font-medium text-xl mb-2 mt-2 px-4">
                                                       {{ cat.name }}
                                                  </div>
                                                  <div 
                                                       v-for="(subCat, subCatIndex) in cat.subCategories"
                                                       :key="subCat.id + subCatIndex">
                                                       <span class="px-4 block pt-3 font-medium text-[17px] text-gray-600">{{
                                                            subCat.name }}</span>
                                                       <div class="border-b border-gray-100 px-4 pt-2"
                                                            v-for="(foodItem, foodIndex) in subCat.foodListings"
                                                            :key="foodItem.id + foodIndex">
                                                            <GintaaFoodListingcardDishcard :food="foodItem" />
                                                       </div>
                                                  </div>
                                                  <div class="px-4" v-for="(foodItem, foodIndex) in cat.foodListings"
                                                       :key="foodItem.id + foodIndex">
                                                       <GintaaFoodListingcardDishcard :food="foodItem" />
                                                  </div>

                                             </div>
                                        </div>

                                   </div>
                              </div>
                         </div>




                    </div>

               </div>
          </div>
          <GintaaFoodConsumerFooter />



          <!-- App download link modal start -->
          <div class="relative z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">

               <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

               <div class="fixed inset-0 z-50 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                         <div
                              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                              <div class="absolute top-0 right-0 pt-2 pr-2 block">
                                   <button type="button" class="rounded-md bg-white text-gray-400 ">
                                        <span class="sr-only">Close</span>
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                             stroke="currentColor" aria-hidden="true">
                                             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                   </button>
                              </div>
                              <div class="flex flex-row px-2 py-2">
                                   <div class="relative basis-3/6">
                                        <img src="~/assets/images/food/scanbg.svg" alt="image"
                                             class="w-[186px] h-[156px] mt-1.5" />
                                        <img src="~/assets/images/food/qr-code.svg" alt="image"
                                             class="w-[52px] h-[52px] absolute top-[60px] right-[42px]" />
                                   </div>
                                   <div class="relative basis-3/6">
                                        <div class="text-gray-900 font-medium text-[17px] pr-4 mt-3 pl-1">Online ordering is
                                             only supported on the mobile app</div>
                                        <div class="font-medium text-green text-lg mt-2 pl-1">Download the app </div>
                                        <div class="flex items-center justify-between pr-2 mt-1 pl-1">
                                             <div class="mr-1">
                                                  <a href="https://play.google.com/store/apps/details?id=com.asconsoft.gintaa.prod"
                                                       target="_blank">
                                                       <img src="https://dev.cdn.gintaa.com/web/web_new/download-our-app/play-store.png"
                                                            alt="google play store" class=" w-full"></a>
                                             </div>
                                             <div>
                                                  <a href="https://apps.apple.com/in/app/gintaa/id1583773926"
                                                       target="_blank">
                                                       <img src="https://dev.cdn.gintaa.com/web/web_new/download-our-app/apple-store.png"
                                                            alt="apple store" class=" w-full">
                                                  </a>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                         </div>
                    </div>
               </div>
          </div>
          <!-- App download link modal end -->

     </div>
</template>
   
<script>
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import { mapState, mapGetters } from 'vuex';
export default Vue.extend({
     // name: 'Nearbyresturant',
     //  props:['selectedAddress'],
     components: { VueSlickCarousel },
     data() {
          return {
               selectedAddress: null,
               showAddaddressPopup: false,
               page: 0,
               defaultSize: 20,
               loading: true,
               resturantDet: null,

               allMenuList: [],
               vegMenuList: [],
               nonVegMenuList: [],

               allCategoryList: [],
               vegCategoryList: [],
               nonVegCategoryList: [],

               currentTab: 'ALL',
               currentList: {
                    categoryList: [],
                    menuList: []
               },

               headerStickyClass: '',
               leftPanelStickyClass: '',
               tabStickyClass: '',
               listStickyClass: '',
               activSelectedCatId: '',
               isResturantServicable:true,
               showResturantStatus:false,
               alllistStickyClass: null

          }
     },
     async fetch() {
          this.loading = true
          try {
               const data = await this.$axios.get(`${this.$config.API_BASE}/flisting/v1/restaurant/${this.$route.params.rid}`)
               this.resturantDet = data?.data?.payload
               console.log("this.resturantDet",this.resturantDet)

          } catch (error) {
               if (error && error?.response?.status === 404) {
                    this.showNoLisitngPage = true
               }
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
          this.getallMenu()
          this.handleOnscrollEvent()
     },
     methods: {

          selectedLocation(location) {
               console.log("food  selectedLocation in home page:", location)
               this.selectedAddress = location
               if (this.resturantDet && this.selectedAddress) {
                    this.checkResTurantIsAvilbleForService(this.resturantDet.rid)
               }
          },

          async checkResTurantIsAvilbleForService(rid) {

               const lat = this.selectedAddress ? this.selectedAddress.lat : null
               const lng = this.selectedAddress ? this.selectedAddress.lng : null
               let postObj =  [{"id": null,"lat": lat,"lng": lng}]

               try {
                    const url = `/forder/v1/eligibility/serviceable/${rid}`;
                    const data = await this.$axios.$post(url,postObj);
                    if(data.payload[0]?.serviceable){
                         this.isResturantServicable = true
                    }else{
                      this.isResturantServicable = false
                    }
                    if(data.payload){
                         this.showResturantStatus = true
                    }

               } catch (error) {

               }
          },

          isImageWillGrayScale(resDet) {
               if (resDet.status === 'OFFLINE') {
                    return true
               } else if (resDet?.distance > 5) {
                    return true
               } else if (resDet?.distance === 'Infinity') {
                    return true
               } else {
                    return false
               }
          },

          tofixedTwoDigit(rating) {
               if (rating) {
                    return rating.toFixed(1)
               }
          },
          async getallMenu() {
               let size = this.defaultSize
               this.loading = true

               let restaurantId = this.$route.params.rid
               try {
                    const url = `/flisting/v1/food-listing/restaurant/user/${restaurantId}?stockAvailable=false`;
                    const data = await this.$axios.$get(url);
                    console.log("Data", data)
                    // this.processMenuList(menuList)
                    if (data && data.success) {
                         const menuList = data.payload
                         this.processMenuList(menuList)
                    }
                    this.loading = false

               } catch (error) {
                    this.allMenuList = []
                    this.loading = false
                    // this.enableSearchMore = false
               }

          },
          processMenuList(menuList) {

               this.allMenuList = menuList
               this.vegMenuList = []
               this.nonVegMenuList = []

               this.allCategoryList = []
               this.vegCategoryList = []
               this.nonVegCategoryList = []

               try {
                    if (menuList && menuList.length) {
                         console.log('menuList:', menuList)

                         // Loop for main-category
                         menuList.map((category) => {
                              let cat = {
                                   id: category.id,
                                   masterCategoryId: category.masterCategoryId,
                                   name: category.name
                              }
                              let foodListings = []

                              let vegFoodListings = []
                              let nonVegFoodListings = []

                              let vegSubCatList = []
                              let nonVegSubCatList = []

                              // Loop for sub-category
                              if (category.subCategories && category.subCategories.length) {
                                   let subCatList = category.subCategories
                                   subCatList.map((subCategory) => {
                                        let subCat = {
                                             id: subCategory.id,
                                             masterCategoryId: subCategory.masterCategoryId,
                                             name: subCategory.name
                                        }
                                        if (subCategory.foodListings && subCategory.foodListings.length) {
                                             let foodItems = subCategory.foodListings
                                             foodListings.push(...foodItems)
                                             const vegFood = foodItems.filter(food => food.type === "VEG");
                                             const nonVegFood = foodItems.filter(food => food.type === "NON_VEG");

                                             // push for veg food listing
                                             if (vegFood && vegFood.length) {
                                                  vegFoodListings.push(...vegFood)

                                                  let vegSubCat = {
                                                       id: subCategory.id,
                                                       masterCategoryId: subCategory.masterCategoryId,
                                                       name: subCategory.name,
                                                       foodListings: vegFood
                                                  }
                                                  vegSubCatList.push(vegSubCat)
                                             }


                                             // push for non-veg food listing
                                             if (nonVegFood && nonVegFood.length) {
                                                  nonVegFoodListings.push(...nonVegFood)

                                                  let nonVegSubCat = {
                                                       id: subCategory.id,
                                                       masterCategoryId: subCategory.masterCategoryId,
                                                       name: subCategory.name,
                                                       foodListings: nonVegFood
                                                  }
                                                  nonVegSubCatList.push(nonVegSubCat)
                                             }

                                        }
                                   })
                              } else {
                                   foodListings = category.foodListings

                                   const vegFood = foodListings.filter(food => food.type === "VEG");
                                   const nonVegFood = foodListings.filter(food => food.type === "NON_VEG");

                                   // push for veg food listing
                                   if (vegFood && vegFood.length) {
                                        vegFoodListings.push(...vegFood)
                                   }


                                   // push for non-veg food listing
                                   if (nonVegFood && nonVegFood.length) {
                                        nonVegFoodListings.push(...nonVegFood)
                                   }

                              }

                             // console.log('foodListings:', foodListings)

                              // Start process left panel category for All | Veg | Non-Veg
                              ///////////// All /////////////
                              cat['menuCount'] = foodListings.length
                              this.allCategoryList.push(cat)


                              ///////////// Veg /////////////
                              if (vegFoodListings && vegFoodListings.length) {
                                   let vegCatList = {
                                        id: category.id,
                                        masterCategoryId: category.masterCategoryId,
                                        name: category.name,
                                        menuCount: vegFoodListings.length
                                   }
                                   this.vegCategoryList.push(vegCatList)
                              }


                              ///////////// Non-Veg /////////////
                              if (nonVegFoodListings && nonVegFoodListings.length) {
                                   let nonVegCatList = {
                                        id: category.id,
                                        masterCategoryId: category.masterCategoryId,
                                        name: category.name,
                                        menuCount: nonVegFoodListings.length
                                   }
                                   this.nonVegCategoryList.push(nonVegCatList)
                              }
                              // End process left panel category for All | Veg | Non-Veg


                              // Start process food menu list for Veg | Non-Veg
                              ///////////// Veg /////////////
                              let vegMenu = {
                                   id: category.id,
                                   masterCategoryId: category.masterCategoryId,
                                   name: category.name,
                                   subCategories: vegSubCatList,
                                   foodListings: []
                              }
                              if ((!vegSubCatList || !vegSubCatList.length) && (vegFoodListings && vegFoodListings.length)) {
                                   vegMenu.foodListings = vegFoodListings
                              }

                              if (vegMenu.subCategories.length || vegMenu.foodListings.length) {
                                   this.vegMenuList.push(vegMenu)
                              }


                              ///////////// Non-Veg /////////////
                              let nonVegMenu = {
                                   id: category.id,
                                   masterCategoryId: category.masterCategoryId,
                                   name: category.name,
                                   subCategories: nonVegSubCatList,
                                   foodListings: []
                              }
                              if ((!nonVegSubCatList || !nonVegSubCatList.length) && (nonVegFoodListings && nonVegFoodListings.length)) {
                                   nonVegMenu.foodListings = nonVegFoodListings
                              }

                              if (nonVegMenu.subCategories.length || nonVegMenu.foodListings.length) {
                                   this.nonVegMenuList.push(nonVegMenu)
                              }

                              // End process food menu list for Veg | Non-Veg

                         })

                         // console.log('allCategoryList:', this.allCategoryList)
                         // console.log('allMenuList:', this.allMenuList)
                         // console.log('vegMenuList:', this.vegMenuList)
                         // console.log('nonVegMenuList:', this.nonVegMenuList)
                         this.processCurrentData()
                    }

               } catch (err) {
                    console.log(err)
               }

          },

          getAddressitemDet(addressItemDet) {
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

          processCurrentData() {
               switch (this.currentTab) {
                    case 'ALL':
                         this.currentList.menuList = this.allMenuList
                         this.currentList.categoryList = this.allCategoryList
                         break;
                    case 'VEG':
                         this.currentList.menuList = this.vegMenuList
                         this.currentList.categoryList = this.vegCategoryList
                         break;
                    case 'NON-VEG':
                         this.currentList.menuList = this.nonVegMenuList
                         this.currentList.categoryList = this.nonVegCategoryList
                         break;
                    default:
                         this.currentList.menuList = this.allMenuList
                         this.currentList.categoryList = this.allCategoryList
               }
          },
          selectCurrentTab(currentTab) {
               this.activSelectedCatId = ''
               this.currentTab = currentTab
               this.processCurrentData()
          },

          handleOnscrollEvent() {
               if (process.client) {
                    window.addEventListener('scroll', () => {
                         // this.activSelectedCatId = ''
                         // active-cat-menu

                         // const element = this.$refs[this.activSelectedCatId]
                         // const top = document.getElementById(this.activSelectedCatId).getBoundingClientRect().top
                         
                         // console.log(window.scrollY)
                         // console.log('top:', top)

                         if (window.scrollY >= 100) {
                              this.headerStickyClass = 'sticky-header'
                              this.leftPanelStickyClass = 'sticky-leftpanel'
                              this.tabStickyClass = 'sticky-tab'
                              this.listStickyClass = 'sticky-list'
                              this.alllistStickyClass = 'sticky-alllist'
                         } else {
                              this.headerStickyClass = ''
                              this.leftPanelStickyClass = ''
                              this.tabStickyClass = ''
                              this.listStickyClass = ''
                              this.alllistStickyClass = ''
                         }
                    });
               }
          },
          handleScroll($event){
               console.log('handleScroll event:', $event)
          },
          // scrollToSection(sectionId){
          //      console.log('sectionId:', sectionId)
          //      console.log('refs:', this.$refs[sectionId])
          //      this.$refs[sectionId]
          //      return
          //      if (process.client) {
          //           window.animate({
          //                scrollTop: this.$refs[sectionId].offset().top - 200 //document.getElementById(sectionId).offset().top - 200
          //           })
                    
          //           // console.log('hash:', this.hash)
          //      }
          // },
          menuCategoryOnClick(catId, catIndex){
               this.activSelectedCatId = catId
               
               // if(catIndex > 0){
               //      this.headerStickyClass = 'sticky-header'
               //      this.leftPanelStickyClass = 'sticky-leftpanel'
               //      this.tabStickyClass = 'sticky-tab'
               //      this.listStickyClass = 'sticky-list'
               //      this.alllistStickyClass = 'sticky-alllist'
               // } else {
               //      this.headerStickyClass = ''
               //      this.leftPanelStickyClass = ''
               //      this.tabStickyClass = ''
               //      this.listStickyClass = ''
               //      this.alllistStickyClass = ''
               // }

               console.log('headerStickyClass:', this.headerStickyClass)

               const element    = document.getElementById(catId);
               const elementTop = element.offsetTop;

               const deductableAmount = this.headerStickyClass === '' ? 300 : 200
               const scrollTop  = elementTop - deductableAmount
               console.log('elementTop:', elementTop)
               console.log('scrollTop:', scrollTop)
               console.log('deductableAmount:', deductableAmount)

               // document.body.scrollTop = scrollTop; // For Safari
               document.documentElement.scrollTop = scrollTop; // For Chrome, Firefox, IE and Opera
          }

     }
})

</script>

<style scoped>
li.select-menu {
     border-left: 6px solid #8bc63e;
}

li.select-menu a {
     color: #8bc63e;
     font-weight: 500;
}

.sticky-header {
     position: fixed;
     width: 100%;
     top: 40px;
     left: 0;
     z-index: 9;
}

.sticky-header .sticky-banner {
     width: 180px;
     height: 120px;
}

.sticky-header .banner-top {
     padding-top: 5px;
     padding-bottom: 5px;
}

.sticky-leftpanel {
     position: fixed;
     top: 220px;
}

.sticky-tab {
     position: fixed;
     top: 199px;
     background-color: #f0f5f7;
     width: 672px;
     padding: 22px 0px 10px 0px;
     z-index: 9;
}

.sticky-list {
     margin-left: 220px;
     margin-top: 150px;
}

.current-tab {
     background-color: #48CEF3;
     color: #FFFFFF;
     border: 1px solid #48CEF3;
}

.current-tab-veg {
     background-color: #1FBE58;
     color: #FFFFFF;
     border: 1px solid #1FBE58;
}

.current-tab-non {
     background-color: #EE1029;
     color: #FFFFFF;
     border: 1px solid #EE1029;
}

.sticky-alllist {
     padding-top: 145px;
}

.download-app-bg {
     background-image: url(~/assets/images/food/app-bg.png);
     background-repeat: no-repeat;
     background-position: center top;
     height: 189px;
     width: 293px;
}

/* .food-list-height div.list-height:last-child{ min-height: 500px;} */


@media only screen and (min-device-width: 0px) and (max-device-width: 1023px) {

     .sticky-header,
     .sticky-leftpanel,
     .sticky-tab,
     .sticky-list,
     .sticky-alllist {
          position: relative !important;
          top: 0px !important;
          left: 0px !important;
          right: 0px !important;
          margin: 0px !important;
          padding: 0px !important;
          width: auto !important;
     }
}

.active-cat-menu {
     padding-top: 300px;
}
</style>