<template>
    <div class="relative overflow-hidden">
        <GintaaFoodConsumerHeader/>
        <GintaaFoodConsumerTopBanner/>
        <GintaaFoodConsumerTopCategory/>
        <div class="mb-7">
        <div class="w-full px-7 xl:px-16 flex-col">
          <div class="flex items-center justify-between mb-7">
          <h1 class="text-2xl lg:text-[27px] 3xl:text-3xl font-semibold">Restaurants Near You</h1>
        </div>

          <!-- No Restaurants start -->
          <!-- <div class="w-full px-4 py-8">
               <div class="flex items-center justify-center mb-4">
                    <img src="~assets/images/food/res-info.jpg" alt="image" class=" max-w-full" />                              
                </div>
                <div class="flex items-center justify-center text-base text-gray-700 font-medium text-center">Can't find a door to knock</div>
                <div class="flex items-center justify-center text-base text-gray-700 text-center">You don't have an address to deliver</div>                
           </div> -->
          <!-- No Restaurants end -->

        <div class="w-full">
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 xl:gap-8 xl:gap-y-12">
            <div class="p-4 border border-gray-200">
              <a href="#" class="block">
                <div class="restaurant-img">
                  <img src="~/assets/images/food/consumer/res-img.png" class="object-cover  max-h-full w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" alt="Restaurent name"/>
                </div>
                <div class="mt-5 mb-1">
                  <h2 class="res-name truncate text-sm md:text-base font-semibold text-gray-600 ">Aahare Bengali</h2>
                </div>
                <div class="res-category text-[13px] text-gray-500 mb-2 w-full truncate">Bengali, Biriyani, Chinese, Fast Food, North IndiaBengali, Biriyani, Chinese, Fast Food, North India</div>
                <div class="res-location text-xs text-gray-400 mb-2">
                  Sector 5, Salt Lake, Kolkata
                 </div>
                <div class="km text-xs text-gray-400 relative">2.4 Km 30-45 Mins (Approx) 
                  <div class="rating bg-[#8EC23C] px-2 py-1 text-sm font-medium text-white inline-block leading-3 absolute right-0 top-0">4.5</div>
                </div>
              </a>
            </div>
            <div class="p-4 border border-gray-200">
              <a href="#" class="block">
                <div class="restaurant-img">
                  <img src="~/assets/images/food/consumer/res-img.png" class="object-cover  max-h-full w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" alt="Restaurent name"/>
                </div>
                <div class="mt-5 mb-1">
                  <h2 class="res-name truncate text-sm md:text-base font-semibold text-gray-600 ">Aahare Bengali</h2>
                </div>
                <div class="res-category text-[13px] text-gray-500 mb-2 w-full truncate">Bengali, Biriyani, Chinese, Fast Food, North IndiaBengali, Biriyani, Chinese, Fast Food, North India</div>
                <div class="res-location text-xs text-gray-400 mb-2">
                  Sector 5, Salt Lake, Kolkata
                 </div>
                <div class="km text-xs text-gray-400 relative">2.4 Km 30-45 Mins (Approx) 
                  <div class="rating bg-[#8EC23C] px-2 py-1 text-sm font-medium text-white inline-block leading-3 absolute right-0 top-0">4.5</div>
                </div>
              </a>
            </div>
            <div class="p-4 border border-gray-200">
              <a href="#" class="block">
                <div class="restaurant-img">
                  <img src="~/assets/images/food/consumer/res-img.png" class="object-cover  max-h-full w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" alt="Restaurent name"/>
                </div>
                <div class="mt-5 mb-1">
                  <h2 class="res-name truncate text-sm md:text-base font-semibold text-gray-600 ">Aahare Bengali</h2>
                </div>
                <div class="res-category text-[13px] text-gray-500 mb-2">Bengali, Biriyani, Chinese, Fast Food, North India...</div>
                <div class="res-location text-xs text-gray-400 mb-2">
                  Sector 5, Salt Lake, Kolkata
                 </div>
                <div class="km text-xs text-gray-400 relative">2.4 Km 30-45 Mins (Approx) 
                  <div class="rating bg-[#8EC23C] px-2 py-1 text-sm font-medium text-white inline-block leading-3 absolute right-0 top-0">4.5</div>
                </div>
              </a>
            </div>
            <div class="p-4 border border-gray-200">
              <a href="#" class="block">
                <div class="restaurant-img">
                  <img src="~/assets/images/food/consumer/res-img.png" class="object-cover  max-h-full w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" alt="Restaurent name"/>
                </div>
                <div class="mt-5 mb-1">
                  <h2 class="res-name truncate text-sm md:text-base font-semibold text-gray-600 ">Aahare Bengali</h2>
                </div>
                <div class="res-category text-[13px] text-gray-500 mb-2">Bengali, Biriyani, Chinese, Fast Food, North India...</div>
                <div class="res-location text-xs text-gray-400 mb-2">
                  Sector 5, Salt Lake, Kolkata
                 </div>
                <div class="km text-xs text-gray-400 relative">2.4 Km 30-45 Mins (Approx) 
                  <div class="rating bg-[#8EC23C] px-2 py-1 text-sm font-medium text-white inline-block leading-3 absolute right-0 top-0">4.5</div>
                </div>
              </a>
            </div>
            <div class="p-4 border border-gray-200">
              <a href="#" class="block">
                <div class="restaurant-img">
                  <img src="~/assets/images/food/consumer/res-img.png" class="object-cover  max-h-full w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" alt="Restaurent name"/>
                </div>
                <div class="mt-5 mb-1">
                  <h2 class="res-name truncate text-sm md:text-base font-semibold text-gray-600 ">Aahare Bengali</h2>
                </div>
                <div class="res-category text-[13px] text-gray-500 mb-2">Bengali, Biriyani, Chinese, Fast Food, North India...</div>
                <div class="res-location text-xs text-gray-400 mb-2">
                  Sector 5, Salt Lake, Kolkata
                 </div>
                <div class="km text-xs text-gray-400 relative">2.4 Km 30-45 Mins (Approx) 
                  <div class="rating bg-[#8EC23C] px-2 py-1 text-sm font-medium text-white inline-block leading-3 absolute right-0 top-0">4.5</div>
                </div>
              </a>
            </div>
            <div class="p-4 border border-gray-200">
              <a href="#" class="block">
                <div class="restaurant-img">
                  <img src="~/assets/images/food/consumer/res-img.png" class="object-cover  max-h-full w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" alt="Restaurent name"/>
                </div>
                <div class="mt-5 mb-1">
                  <h2 class="res-name truncate text-sm md:text-base font-semibold text-gray-600 ">Aahare Bengali</h2>
                </div>
                <div class="res-category text-[13px] text-gray-500 mb-2">Bengali, Biriyani, Chinese, Fast Food, North India...</div>
                <div class="res-location text-xs text-gray-400 mb-2">
                  Sector 5, Salt Lake, Kolkata
                 </div>
                <div class="km text-xs text-gray-400 relative">2.4 Km 30-45 Mins (Approx) 
                  <div class="rating bg-[#8EC23C] px-2 py-1 text-sm font-medium text-white inline-block leading-3 absolute right-0 top-0">4.5</div>
                </div>
              </a>
            </div>
            <div class="p-4 border border-gray-200">
              <a href="#" class="block">
                <div class="restaurant-img">
                  <img src="~/assets/images/food/consumer/res-img.png" class="object-cover  max-h-full w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" alt="Restaurent name"/>
                </div>
                <div class="mt-5 mb-1">
                  <h2 class="res-name truncate text-sm md:text-base font-semibold text-gray-600 ">Aahare Bengali</h2>
                </div>
                <div class="res-category text-[13px] text-gray-500 mb-2">Bengali, Biriyani, Chinese, Fast Food, North India...</div>
                <div class="res-location text-xs text-gray-400 mb-2">
                  Sector 5, Salt Lake, Kolkata
                 </div>
                <div class="km text-xs text-gray-400 relative">2.4 Km 30-45 Mins (Approx) 
                  <div class="rating bg-[#8EC23C] px-2 py-1 text-sm font-medium text-white inline-block leading-3 absolute right-0 top-0">4.5</div>
                </div>
              </a>
            </div>
            <div class="p-4 border border-gray-200">
              <a href="#" class="block">
                <div class="restaurant-img">
                  <img src="~/assets/images/food/consumer/res-img.png" class="object-cover  max-h-full w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" alt="Restaurent name"/>
                </div>
                <div class="mt-5 mb-1">
                  <h2 class="res-name truncate text-sm md:text-base font-semibold text-gray-600 ">Aahare Bengali</h2>
                </div>
                <div class="res-category text-[13px] text-gray-500 mb-2">Bengali, Biriyani, Chinese, Fast Food, North India...</div>
                <div class="res-location text-xs text-gray-400 mb-2">
                  Sector 5, Salt Lake, Kolkata
                 </div>
                <div class="km text-xs text-gray-400 relative">2.4 Km 30-45 Mins (Approx) 
                  <div class="rating bg-[#8EC23C] px-2 py-1 text-sm font-medium text-white inline-block leading-3 absolute right-0 top-0">4.5</div>
                </div>
              </a>
            </div>
            <div class="p-4 border border-gray-200">
              <a href="#" class="block">
                <div class="restaurant-img">
                  <img src="~/assets/images/food/consumer/res-img.png" class="object-cover  max-h-full w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" alt="Restaurent name"/>
                </div>
                <div class="mt-5 mb-1">
                  <h2 class="res-name truncate text-sm md:text-base font-semibold text-gray-600 ">Aahare Bengali</h2>
                </div>
                <div class="res-category text-[13px] text-gray-500 mb-2">Bengali, Biriyani, Chinese, Fast Food, North India...</div>
                <div class="res-location text-xs text-gray-400 mb-2">
                  Sector 5, Salt Lake, Kolkata
                 </div>
                <div class="km text-xs text-gray-400 relative">2.4 Km 30-45 Mins (Approx) 
                  <div class="rating bg-[#8EC23C] px-2 py-1 text-sm font-medium text-white inline-block leading-3 absolute right-0 top-0">4.5</div>
                </div>
              </a>
            </div>
            <div class="p-4 border border-gray-200">
              <a href="#" class="block">
                <div class="restaurant-img">
                  <img src="~/assets/images/food/consumer/res-img.png" class="object-cover  max-h-full w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" alt="Restaurent name"/>
                </div>
                <div class="mt-5 mb-1">
                  <h2 class="res-name truncate text-sm md:text-base font-semibold text-gray-600 ">Aahare Bengali</h2>
                </div>
                <div class="res-category text-[13px] text-gray-500 mb-2">Bengali, Biriyani, Chinese, Fast Food, North India...</div>
                <div class="res-location text-xs text-gray-400 mb-2">
                  Sector 5, Salt Lake, Kolkata
                 </div>
                <div class="km text-xs text-gray-400 relative">2.4 Km 30-45 Mins (Approx) 
                  <div class="rating bg-[#8EC23C] px-2 py-1 text-sm font-medium text-white inline-block leading-3 absolute right-0 top-0">4.5</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--download app-->
    <!-- <div v-if="remoteData.web_home_bottom_banner" class="mx-auto max-w-[1920px] pb-4 px-4 md:px-8 2xl:px-16 py-0 sm:pb-4 md:pb-4 lg:pb-10">
        <div
          class="flex justify-between items-end relative rounded-lg bg-gray-200 pt-5 md:pt-8 lg:pt-10 xl:pt-14 px-6 md:px-12 lg:px-20 2xl:px-24 3xl:px-36 border-independence gstore">
          <div
            class="flex-shrink-0 w-full sm:w-60 md:w-96 lg:w-auto lg:max-w-lg xl:max-w-3xl lg:flex lg:items-center pb-5 md:pb-8 lg:pb-12 xl:pb-16 z-10">
            <div class="py-4 md:py-6 xl:py-8 text-left sm:text-start">

              <div v-html="remoteData.web_home_bottom_banner.description_html"></div>
              <div class="flex justify-center sm:justify-start space-s-2 md:space-s-3 px-6 sm:px-0">
                <a v-if="remoteData.web_home_bottom_banner.ios_app_store"
                  class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                  :href="remoteData.web_home_bottom_banner.ios_app_store.redirect_url && remoteData.web_home_bottom_banner.ios_app_store.redirect_url != '' ? remoteData.web_home_bottom_banner.ios_app_store.redirect_url : 'javascript:;'"
                  :target="remoteData.web_home_bottom_banner.ios_app_store.target">
                  <img :src="remoteData.web_home_bottom_banner.ios_app_store.image" alt="App Store" class="" width="209"
                    height="60">
                </a>
                <a v-if="remoteData.web_home_bottom_banner.google_play_store"
                  class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                  :href="remoteData.web_home_bottom_banner.google_play_store.redirect_url && remoteData.web_home_bottom_banner.google_play_store.redirect_url != '' ? remoteData.web_home_bottom_banner.google_play_store.redirect_url : 'javascript:;'"
                  :target="remoteData.web_home_bottom_banner.google_play_store.target">
                  <img :src="remoteData.web_home_bottom_banner.google_play_store.image" alt="Play Store" class="ml-3"
                    width="209" height="60">
                </a>
              </div>
            </div>
          </div>
          <div v-if="remoteData.web_home_bottom_banner.mobile_1"
            class="hidden sm:flex items-end ps-4 -me-0.5 2xl:-me-1.5 w-60 md:w-72 lg:w-96 xl:w-auto z-10">
            <span>
              <img :src="remoteData.web_home_bottom_banner.mobile_1.image" alt="Play Store" class="m-w-full">
            </span>
          </div>
        </div>
      </div> -->
    
        <GintaaFoodConsumerFooter/>
    </div>
   </template>
   
   <script lang="ts">
   import Vue from 'vue'
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
   export default Vue.extend({
     name: 'HomePage',
     components: {
    // SplitCarousel,
    // SplitCarouselItem
    VueSlickCarousel,
   
  },
   });
   </script>