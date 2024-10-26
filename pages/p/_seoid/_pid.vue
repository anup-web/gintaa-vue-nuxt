
<template>
  <div>
    <noListing v-if="showNoLisitngPage"></noListing>
    <div v-if="product" class="product-details-page right-side-pencil pt-[80px] lg:pt-12 ">
      <!--//////////header///////////-->
      <Header />
      <!--////////Breadcrumb//////////-->
      <div class="container max-w-8xl mx-auto md:px-8 2xl:px-16 pt-10 hidden md:flex">
        <breadcrumb v-if="breadcrumb.length > 0" :breadcrumb="breadcrumb" />
      </div>

      <!-- <fullPageLoader v-if="loading" /> -->

      <div class="single-product-block py-6 ">
        <div class="container max-w-8xl mx-auto  sm:px-4 md:px-8 2xl:px-16">
          <!-- This example requires Tailwind CSS v2.0+ -->
          <!-- {{ isEnableDirectBy }} -->

          <div v-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="product-details-image px-4 sm:px-4 md:px-0 2xl:px-0 relative">
              <div class="absolute right-0 cursor-pointer z-20">
                <favourite v-if="shownotOwnersIcon && !isLisitngBlocked && !checkIfUserBlocked" :listing="product" />
              </div>

              <premiumTag v-if="product && product.featured" class="premium-details" />
              <!-- <div class="absolute left-4 top-16 cursor-pointer z-20 sm:left-4 md:left-0 lg:left-0 xl:left-0 2xl:left-0">
                     <img src="~/assets/images/tag/premium-icon.png" alt="premium-tag" width="90" height="30" />                  
                </div> -->

              <div v-if="product.itemCondition === 'New'"
                class="absolute left-4 top-0 cursor-pointer z-20 sm:left-4 md:left-0 lg:left-0 xl:left-0 2xl:left-0">
                <svg width="25" height="56" viewBox="0 0 25 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0 55.0149L12.1219 47.5553V0H0V55.0149ZM24.2441 55.0149L12.1221 47.5553V0H24.2441V55.0149Z"
                    fill="#8BC63E"></path>
                  <path
                    d="M7.86035 29.0928L17.8135 29.0928L17.8135 30.8086L10.6836 35.2725L17.8135 35.2725L17.8135 36.9883L7.86035 36.9883L7.86035 35.2725L15.0039 30.7949L7.86035 30.7949L7.86035 29.0928ZM16.4531 20.5342L17.8135 20.5342L17.8135 25.8184L16.4531 25.8184L16.4531 20.5342ZM7.86035 25.333L17.8135 25.333L17.8135 27.0488L7.86035 27.0488L7.86035 25.333ZM12.0166 21.2246L13.3564 21.2246L13.3564 25.8184L12.0166 25.8184L12.0166 21.2246ZM7.86035 20.5684L9.22754 20.5684L9.22754 25.8184L7.86035 25.8184L7.86035 20.5684ZM15.5781 16.6377L7.86035 14.6553L7.86035 13.6162L9.84961 13.7324L17.8135 15.8516L17.8135 16.9316L15.5781 16.6377ZM7.86035 18.1211L15.5166 16.5146L17.8135 16.3711L17.8135 17.5195L7.86035 19.8232L7.86035 18.1211ZM15.4961 11.3672L7.86035 9.78125L7.86035 8.07227L17.8135 10.376L17.8135 11.5244L15.4961 11.3672ZM7.86035 13.2129L15.5986 11.251L17.8135 10.9639L17.8135 12.0439L9.84961 14.1289L7.86035 14.2383L7.86035 13.2129Z"
                    fill="white"></path>
                </svg>
              </div>

              <p v-if="checkQuantity(product.quantity)"
                class="text-errortext text-xl absolute z-20 py-2 px-3 border-2 border-errortext top-4 -rotate-12">
                {{ $t('soldOut') }}
              </p>

              <p v-if="product.offerStage === 'Blocked'"
                class="text-errortext text-xl absolute z-20 py-2 px-3 border-2 border-errortext top-4 -rotate-12">
                {{ $t('blocked') }}
              </p>
              <ul class="hidden md:flex  w-full  flex-wrap" :class="addClass(product.images)">
                <!--Start of Listing For Image -->
                <li v-for="(item, index) in product.images" :key="index" class="w-3/6">
                  <div class="product-img justify-center relative flex cursor-pointer max-h-[550px] overflow-hidden "
                    :class="addClassToImage(product.quantity, item.safe, product.offerStage)"
                    @click="preViewimage(item.url, index)">
                    <div v-if="product.offerStage == 'Failed' && !item.safe" title="Image Upload Failed"
                      class="rounded-md bg-red-50 p-2 mb-2  border-errortext absolute left-8 top-2"><svg width="23"
                        height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M9.97623 0.385841C10.4255 0.132888 10.9324 0 11.448 0C11.9636 0 12.4705 0.132888 12.9198 0.385841C13.3691 0.638795 13.7456 1.00328 14.013 1.44412L14.0159 1.44886L22.4859 15.5889L22.494 15.6027C22.756 16.0563 22.8946 16.5706 22.896 17.0945C22.8975 17.6183 22.7618 18.1334 22.5024 18.5885C22.243 19.0436 21.8689 19.4228 21.4174 19.6885C20.966 19.9541 20.4528 20.0969 19.929 20.1027L19.918 20.1028L2.97802 20.1027H2.96703C2.44322 20.097 1.93006 19.9541 1.47859 19.6885C1.02712 19.4228 0.653071 19.0436 0.393668 18.5885C0.134265 18.1334 -0.00145493 17.6183 1.17626e-05 17.0945C0.00147851 16.5706 0.140081 16.0563 0.402028 15.6027L0.410152 15.5889L8.88015 1.44887L9.738 1.96273L8.88302 1.44412C9.15042 1.00328 9.52694 0.638795 9.97623 0.385841ZM10.5942 2.47938L2.13071 16.6086C2.04553 16.7584 2.00049 16.9277 2 17.1001C1.99951 17.2747 2.04475 17.4464 2.13122 17.5981C2.21769 17.7498 2.34237 17.8762 2.49286 17.9647C2.64204 18.0525 2.81141 18.1 2.98442 18.1027H19.9116C20.0846 18.1 20.254 18.0525 20.4032 17.9647C20.5537 17.8762 20.6783 17.7498 20.7648 17.5981C20.8513 17.4464 20.8965 17.2747 20.896 17.1001C20.8956 16.9277 20.8505 16.7584 20.7654 16.6086L12.303 2.48137L12.3018 2.47938C12.2127 2.33333 12.0877 2.21255 11.9386 2.12861C11.7889 2.0443 11.6199 2 11.448 2C11.2762 2 11.1072 2.0443 10.9574 2.12861C10.8083 2.21255 10.6833 2.33333 10.5942 2.47938ZM11.448 6.10274C12.0003 6.10274 12.448 6.55046 12.448 7.10274V11.1027C12.448 11.655 12.0003 12.1027 11.448 12.1027C10.8957 12.1027 10.448 11.655 10.448 11.1027V7.10274C10.448 6.55046 10.8957 6.10274 11.448 6.10274ZM11.448 14.1027C10.8957 14.1027 10.448 14.5505 10.448 15.1027C10.448 15.655 10.8957 16.1027 11.448 16.1027H11.458C12.0103 16.1027 12.458 15.655 12.458 15.1027C12.458 14.5505 12.0103 14.1027 11.458 14.1027H11.448Z"
                          fill="#FD3E3E" />
                      </svg></div>

                    <img :src="getImageUrl(item)" :alt="product.name" class="                      
                          max-w-full
                          transition
                          duration-200
                          ease-in
                          group-hover:rounded-b-none
                          hover:rounded-none pr-3 pb-3
                        ">
                  </div>
                </li>
                <!-- End OF Image -->

                <!-- Start OF Video -->

                <li v-for="item in product.videos" :key="item.url" class="w-3/6">
                  <div id="open-btn" class="product-img flex relative cursor-pointer justify-center max-h-[550px]">

                    <div v-if="product.offerStage === 'Failed' && !item.safe" title="Video Upload Failed"
                      class="rounded-md bg-red-50 p-2 mb-2  border-errortext absolute left-1 top-1"><svg width="23"
                        height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M9.97623 0.385841C10.4255 0.132888 10.9324 0 11.448 0C11.9636 0 12.4705 0.132888 12.9198 0.385841C13.3691 0.638795 13.7456 1.00328 14.013 1.44412L14.0159 1.44886L22.4859 15.5889L22.494 15.6027C22.756 16.0563 22.8946 16.5706 22.896 17.0945C22.8975 17.6183 22.7618 18.1334 22.5024 18.5885C22.243 19.0436 21.8689 19.4228 21.4174 19.6885C20.966 19.9541 20.4528 20.0969 19.929 20.1027L19.918 20.1028L2.97802 20.1027H2.96703C2.44322 20.097 1.93006 19.9541 1.47859 19.6885C1.02712 19.4228 0.653071 19.0436 0.393668 18.5885C0.134265 18.1334 -0.00145493 17.6183 1.17626e-05 17.0945C0.00147851 16.5706 0.140081 16.0563 0.402028 15.6027L0.410152 15.5889L8.88015 1.44887L9.738 1.96273L8.88302 1.44412C9.15042 1.00328 9.52694 0.638795 9.97623 0.385841ZM10.5942 2.47938L2.13071 16.6086C2.04553 16.7584 2.00049 16.9277 2 17.1001C1.99951 17.2747 2.04475 17.4464 2.13122 17.5981C2.21769 17.7498 2.34237 17.8762 2.49286 17.9647C2.64204 18.0525 2.81141 18.1 2.98442 18.1027H19.9116C20.0846 18.1 20.254 18.0525 20.4032 17.9647C20.5537 17.8762 20.6783 17.7498 20.7648 17.5981C20.8513 17.4464 20.8965 17.2747 20.896 17.1001C20.8956 16.9277 20.8505 16.7584 20.7654 16.6086L12.303 2.48137L12.3018 2.47938C12.2127 2.33333 12.0877 2.21255 11.9386 2.12861C11.7889 2.0443 11.6199 2 11.448 2C11.2762 2 11.1072 2.0443 10.9574 2.12861C10.8083 2.21255 10.6833 2.33333 10.5942 2.47938ZM11.448 6.10274C12.0003 6.10274 12.448 6.55046 12.448 7.10274V11.1027C12.448 11.655 12.0003 12.1027 11.448 12.1027C10.8957 12.1027 10.448 11.655 10.448 11.1027V7.10274C10.448 6.55046 10.8957 6.10274 11.448 6.10274ZM11.448 14.1027C10.8957 14.1027 10.448 14.5505 10.448 15.1027C10.448 15.655 10.8957 16.1027 11.448 16.1027H11.458C12.0103 16.1027 12.458 15.655 12.458 15.1027C12.458 14.5505 12.0103 14.1027 11.458 14.1027H11.448Z"
                          fill="#FD3E3E" />
                      </svg></div>
                    <video :id="item.id" :src="item.url" class="
                          max-w-full
                          transition
                          duration-200
                          ease-in
                          group-hover:rounded-b-none
                          hover:rounded-none
                          pr-3 pb-3
                        " controls />
                  </div>
                </li>

                <!-- End OF Video -->
              </ul>
              <div id="carouselCaptions" class="carousel slide relative md:hidden" data-bs-ride="carousel">
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                  <button v-for="(item, index) in product.images" :key="index" type="button"
                    :data-bs-slide-to="`${index}`" data-bs-target="#carouselCaptions" :class="{ 'active': index === 0 }"
                    aria-current="true" aria-label="Slide 1" />
                </div>

                <ul class="carousel-inner relative w-full overflow-hidden h-80">
                  <li v-for="(item, index) in product.images" :key="index" :class="{ 'active': index === 0 }"
                    class="carousel-item   relative float-left w-full">
                    <img :src="item.url" :alt="product.name" class="mx-auto max-h-full">
                  </li>
                </ul>

                <button
                  class="carousel-control-prev absolute z-10 top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                  type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next absolute z-10 top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="product-details-des failed-msg">


              <div class="flex items-center mb-3" v-if="product.offerStage === 'Blocked'">
                <div
                  class="mx-auto flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg class="h-6 w-6 text-red-600" x-description="Heroicon name: outline/exclamation-triangle"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z">
                    </path>
                  </svg>
                </div>
                <div class="text-left ml-3">
                  <h3 class="text-lg font-medium text-red-600">{{ $t('blockedListingMsg') }}</h3>
                </div>
              </div>

              <!-- End Msg For Blocked Listing -->


              <div v-if="product.offerStage === 'Failed'"
                class="rounded-md bg-red-50 p-4 mb-2 border-l-2 border-errortext">

                <ListingError :listingerror="product.rejectionReasonCriteria" />

              </div>

              <!-- This example requires Tailwind CSS v2.0+ Failed  -->
              <div v-if="product.offerStage === 'Review'"
                class="rounded-md bg-[#f0fdf4] p-4 border-l-2 border-green mb-2">
                <div class="flex">
                  <div class="ml-3">
                    <!-- <h3 class="text-sm font-bold text-green ">{{ $t('underReview') }}</h3> -->
                    <div class="mt-2 text-sm text-[#547b30]">
                      <ul role="list" class="list-disc pl-5 space-y-1">
                        <li>{{ $t('listingreviewMsg') }}</li>
                      </ul>

                    </div>

                  </div>
                </div>
              </div>

              <div v-if="isLisitngBlocked || showUserBlockMsg"  class="rounded-md bg-[#f0fdf4] p-4 border-l-2 border-green mb-2">
  <div class="flex">
    <div class="ml-3">
      <!-- <h3 class="text-sm font-bold text-green ">{{ $t('underReview') }}</h3> -->
      <div class="mt-2 text-sm text-[#547b30]">
        <ul role="list" class="list-disc pl-5 space-y-1">
          <li v-if="isLisitngBlocked">{{ $t('listing_block_msg') }}</li>
          <li v-else>{{ $t('user_block') }}</li>
        </ul>
        
      </div>
    
    </div>
  </div>
</div>

              <div class="flex items-start border-b border-slate-100 pb-4 pr-32 relative mb-3 px-4 sm:px-4 md:px-0
          2xl:px-0 sm:pr-20 md:pr-[85px] 2xl:pr-[85px]">
                <!-- start hot deals -->
                <div v-if="isHotListing"
                  class="flex-shrink-0 text-[11px] text-gray-500 pr-3 after:absolute after:w-[1px] after:h-[14px] after:bg-gray-200 after:left-[45px] after:top-[8px] sm:after:left-[45px] md:after:left-[30px] lg:after:left-[30px] xl:after:left-[30px] 2xl:after:left-[30px]">
                  <img src="~/assets/images/hot-deals.gif" alt="hot-listing" class="lhot" />
                </div>
                <!-- start hot deals -->
                <h3
                  class="product-nameg font-medium text-sm sm:text-base md:text-xl capitalize text-gray-700 break-words w-full">
                  {{ product.name }}
                </h3>

                <div
                  class="share-report absolute flex items-center right-[10px] top-[-6px] report-user sm:right-[10px] sm:top-0 md:right-0 md:top-0 lg:right-0 lg:top-0 xl:right-0 xl:top-0 2xl:right-0 2xl:top-0">
                  <!-- mark sold end -->
                  <div class="flex justify-center pr-0" v-if="product.offerStage === 'Published' && showOwnersIcon">
                    <div>
                      <div class="dropdown relative">
                        <a @click="showMarkAssoldConfirmation"
                          class="mr-2 dropdown-toggle cursor-pointer transition duration-150 ease-in-out flex items-center whitespace-nowrap"
                          type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"
                          :title="$t('markAsSold')">
                          <svg width="25" height="25" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M41.984 37.4384C32.9349 39.8631 23.9165 42.3342 14.8446 44.6739C12.2546 45.3496 11.3783 47.5903 12.0308 49.549C12.3769 50.5686 12.6085 51.6371 12.8742 52.6965C13.1489 53.79 12.6554 54.6699 11.6133 54.9309C10.6222 55.1782 9.75946 54.6799 9.47681 53.6251C9.0574 52.0598 8.49735 50.514 8.31274 48.9405C7.89303 45.333 10.1103 42.3136 13.7321 41.2702C15.1223 40.8795 16.5001 40.5103 17.8994 40.1536C18.3077 40.0442 18.5433 39.8352 18.738 39.473C22.2344 32.5185 25.7353 25.581 29.2408 18.6606C29.4434 18.2598 29.4418 17.9138 29.3664 17.4963C28.6861 14.141 30.4899 10.6671 33.4775 9.50184C36.8641 8.19321 40.3775 9.33062 42.2053 12.342C42.4247 12.6844 42.6872 13.0517 42.7365 13.4397C42.893 14.3642 43.5367 14.7935 44.2236 15.2477C50.5165 19.3421 56.7969 23.4581 63.0818 27.5911C63.4622 27.8539 63.7957 27.8739 64.2209 27.76C65.9775 27.3076 67.71 26.6975 69.5212 26.4492C72.9135 25.9779 76.2727 28.1048 77.1526 31.3885C79.9277 41.6772 82.6857 51.9706 85.4268 62.2684C86.3431 65.6882 84.0975 69.554 80.6922 70.5212C78.7112 71.0884 76.7336 71.6001 74.7389 72.1164C73.6503 72.4081 72.7149 71.911 72.4335 70.9288C72.1475 69.9295 72.7215 69.0099 73.8611 68.7045C75.6131 68.2351 77.3821 67.7611 79.1341 67.2916C81.4088 66.6639 82.4592 64.8689 81.8654 62.5845C79.2076 52.6655 76.5498 42.7465 73.8874 32.8104C73.2811 30.5476 71.5341 29.5387 69.2548 30.1494C60.1796 32.5446 51.0841 35 41.984 37.4384ZM23.1371 38.6772C35.1289 35.464 46.9845 32.2873 58.9592 29.0787C53.629 25.5834 48.3988 22.1889 43.1935 18.7514C42.6622 18.4014 42.6434 18.8076 42.4815 19.088C40.4014 22.8913 36.115 24.0398 32.4243 21.7646C31.9237 21.4611 31.7922 21.5146 31.5398 22.0016C30.4536 24.2073 29.3289 26.4052 28.2041 28.603C26.5306 31.9509 24.865 35.2601 23.1371 38.6772ZM37.1321 19.2631C38.9646 18.7539 40.0682 16.817 39.5464 15.0057C39.0154 13.1603 37.1481 12.1106 35.2646 12.6336C33.4662 13.1337 32.3999 15.0058 32.8707 16.8309C33.3801 18.6638 35.2997 19.7724 37.1321 19.2631Z"
                              fill="#a3acb9" stroke="#a3acb9" stroke-width="2" />
                            <path
                              d="M46.1252 79.765C39.2364 81.6109 32.3475 83.4568 25.4587 85.3026C21.4274 86.3828 17.6961 84.2279 16.6202 80.2127C14.9015 73.7985 13.1874 67.4013 11.4687 60.9871C11.1587 59.8302 11.5456 58.9607 12.5139 58.6283C13.5627 58.2561 14.5287 58.7996 14.8433 59.9735C15.8143 63.5975 16.7899 67.2384 17.7609 70.8623C18.4995 73.6185 19.2334 76.3578 19.972 79.114C20.5965 81.4449 22.4037 82.4742 24.751 81.8452C38.5457 78.1489 52.3575 74.4481 66.1522 70.7518C66.5094 70.6561 66.8699 70.5048 67.2636 70.5452C68.068 70.6214 68.7925 71.2843 68.8865 72.0432C69.0045 72.9599 68.4758 73.7762 67.5402 74.0269C64.0919 74.9691 60.6174 75.8819 57.1644 76.8071C53.4904 77.7916 49.8163 78.776 46.1252 79.765Z"
                              fill="#a3acb9" stroke="#a3acb9" stroke-width="2" />
                            <path
                              d="M44.8183 67.0242L35.3282 61.5435C34.8968 61.2944 34.7418 60.7159 34.9909 60.2845L35.9122 58.6882C36.1612 58.2568 36.7395 58.1018 37.1709 58.351L44.2669 62.449L52.8703 47.5431C53.1194 47.1117 53.6977 46.9568 54.1291 47.2059L55.7251 48.1276C56.1565 48.3767 56.3115 48.9552 56.0625 49.3866L46.0894 66.6654C45.811 67.1229 45.2497 67.2733 44.8183 67.0242Z"
                              fill="#a3acb9" stroke="#a3acb9" stroke-width="2" />
                          </svg>
                        </a>
                        <ul class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left
                       rounded-lg mt-1 hidden m-0 bg-clip-padding  border-none" aria-labelledby="dropdownMenuButton2">
                          <!-- <li> <button  @click="markToSold()"
                        class="mark-sold text-center cursor-pointer transition-all 
                          px-2 sm:px-10 md:px-4 rounded  font-medium text-base 
                          h-[43px] border border-firoza
                          w-full sm:w-full md:w-auto lg:w-auto xl:w-auto 2xl:w-auto hidden md:block"
                          :class="addClassToTitle()">
                          <span v-show="!markAsSoldLoading">{{markAsSoldBtnTitle}} </span>
                          <Spinner v-show="markAsSoldLoading" /></button>
                   </li> -->
                        </ul>
                      </div>
                    </div>
                  </div>



                  <!-- mark sold end -->

                  <a v-if="!isListingReported && shownotOwnersIcon && isLoggedIn && !product.reported"
                    :title="$t('report')" class="inline-block mr-0 p-2 cursor-pointer" @click="openModal()">
                    <svg width="20" height="17" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10.528 1.2833C10.9773 1.03035 11.4842 0.897461 11.9998 0.897461C12.5154 0.897461 13.0223 1.03035 13.4716 1.2833C13.9209 1.53626 14.2974 1.90074 14.5648 2.34158L14.5677 2.34633L23.0376 16.4863L23.0458 16.5001C23.3077 16.9538 23.4463 17.4681 23.4478 17.9919C23.4493 18.5158 23.3135 19.0308 23.0541 19.4859C22.7947 19.941 22.4207 20.3203 21.9692 20.5859C21.5177 20.8516 21.0046 20.9944 20.4808 21.0001L20.4698 21.0003L3.52978 21.0002H3.51879C2.99498 20.9944 2.48182 20.8516 2.03035 20.5859C1.57887 20.3203 1.20483 19.941 0.945426 19.4859C0.686022 19.0308 0.550303 18.5158 0.55177 17.9919C0.553236 17.4681 0.691839 16.9538 0.953786 16.5001L0.961909 16.4863L9.43191 2.34633L10.2898 2.86019L9.43478 2.34158C9.70218 1.90074 10.0787 1.53626 10.528 1.2833ZM11.146 3.37684L2.68246 17.506C2.59729 17.6558 2.55224 17.8251 2.55176 17.9975C2.55127 18.1721 2.59651 18.3438 2.68298 18.4955C2.76945 18.6472 2.89413 18.7736 3.04462 18.8622C3.1938 18.95 3.36317 18.9975 3.53617 19.0002H20.4634C20.6364 18.9975 20.8058 18.95 20.9549 18.8622C21.1054 18.7736 21.2301 18.6472 21.3166 18.4955C21.403 18.3438 21.4483 18.1721 21.4478 17.9975C21.4473 17.8251 21.4023 17.6559 21.3171 17.5061L12.8548 3.37883L12.8536 3.37684C12.7645 3.23079 12.6395 3.11001 12.4904 3.02607C12.3406 2.94176 12.1716 2.89746 11.9998 2.89746C11.8279 2.89746 11.6589 2.94176 11.5092 3.02607C11.3601 3.11001 11.235 3.23079 11.146 3.37684ZM11.9998 7.00021C12.5521 7.00021 12.9998 7.44792 12.9998 8.00021V12.0002C12.9998 12.5525 12.5521 13.0002 11.9998 13.0002C11.4475 13.0002 10.9998 12.5525 10.9998 12.0002V8.00021C10.9998 7.44792 11.4475 7.00021 11.9998 7.00021ZM11.9998 15.0002C11.4475 15.0002 10.9998 15.4479 10.9998 16.0002C10.9998 16.5525 11.4475 17.0002 11.9998 17.0002H12.0098C12.5621 17.0002 13.0098 16.5525 13.0098 16.0002C13.0098 15.4479 12.5621 15.0002 12.0098 15.0002H11.9998Z"
                        fill="#a3acb9" />
                    </svg>
                    <!-- <report-listing></report-listing> -->
                  </a>
                  <!-- !isListingReported  && !product.reported -->

                  <a v-if="shownotOwnersIcon && isLoggedIn && !isLisitngBlocked" @click="openBlockModal"
                    class="inline-block mr-0 px-2 py-1 cursor-pointer">
                    <svg width="23" height="23" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0.0999756 8.29998C0.199976 8.19998 0.0999756 7.99998 0.199976 7.89998C0.699976 5.69998 2.59998 4.19998 4.89998 4.09998C7.59998 4.09998 10.3 4.09998 13.1 4.09998C13.7 4.09998 14.1 4.49998 14.1 5.09998C14.1 5.69998 13.7 6.09998 13.1 6.09998C10.4 6.09998 7.79998 6.09998 5.09998 6.09998C3.49998 6.09998 2.29998 7.09998 2.09998 8.69998C1.99998 8.69998 1.99998 8.89998 1.99998 8.99998C1.99998 12.8 1.99998 16.6 1.99998 20.5C1.99998 21 2.19998 21.3 2.59998 21.5C2.99998 21.7 3.39998 21.6 3.69998 21.3C4.19998 20.9 4.59998 20.5 5.09998 20C5.39998 19.7 5.69998 19.6 6.09998 19.6C9.49998 19.6 12.8 19.6 16.2 19.6C17.6 19.6 18.8 18.7 19.1 17.3C19.2 17.1 19.2 16.9 19.2 16.6C19.2 15.9 19.2 15.2 19.2 14.5C19.2 13.9 19.6 13.5 20.2 13.5C20.8 13.5 21.2 13.9 21.2 14.5C21.2 15.4 21.3 16.3 21.2 17.3C21 19.4 19.2 21.2 17.1 21.5C16.8 21.5 16.5 21.6 16.2 21.6C13 21.6 9.89998 21.6 6.69998 21.6C6.49998 21.6 6.39998 21.7 6.29998 21.8C5.89998 22.2 5.49998 22.6 4.99998 22.9C3.39998 24.2 0.899976 23.4 0.299976 21.3C0.299976 21.2 0.299976 21.1 0.199976 21.1C0.0999756 16.8 0.0999756 12.6 0.0999756 8.29998Z"
                        fill="#A3ACB9" />
                      <path
                        d="M24.9 4.89998C24.8 4.89998 24.8 4.99998 24.8 5.09998C24.7 5.59998 24.4 6.09998 24 6.49998C21.6 8.89998 19.3 11.2 16.9 13.6C15.4 15.1 13.7 15.8 11.6 15.8C10.9 15.8 10.5 15.4 10.5 14.7C10.6 12.6 11.3 10.9 12.8 9.39998C15.1 6.99998 17.5 4.69998 19.9 2.29998C21.4 0.799977 23.9 1.29998 24.7 3.19998C24.8 3.39998 24.9 3.69998 24.9 3.89998C24.9 4.29998 24.9 4.59998 24.9 4.89998ZM23 4.39998C23 3.89998 22.8 3.59998 22.4 3.39998C22 3.19998 21.6 3.29998 21.3 3.59998C18.9 5.99998 16.5 8.39998 14.2 10.7C13.5 11.4 13 12.3 12.7 13.4C12.7 13.5 12.7 13.6 12.9 13.6C14 13.3 14.9 12.8 15.7 12C17 10.7 18.3 9.39998 19.6 8.09998C20.6 7.09998 21.6 5.99998 22.7 4.99998C22.9 4.89998 23 4.69998 23 4.39998Z"
                        fill="#A3ACB9" />
                      <path
                        d="M6.4 11.9C5.9 11.9 5.4 11.9 5 11.9C4.4 11.9 4 11.5 4 10.9C4 10.4 4.4 9.89996 5 9.89996C6 9.89996 6.9 9.89996 7.9 9.89996C8.5 9.89996 8.9 10.3 8.9 10.9C8.9 11.5 8.5 11.9 7.9 11.9C7.3 11.9 6.8 11.9 6.4 11.9Z"
                        fill="#A3ACB9" />
                      <path
                        d="M6.4 15.8C5.9 15.8 5.4 15.8 5 15.8C4.4 15.8 4 15.4 4 14.8C4 14.2 4.4 13.8 5 13.8C5.9 13.8 6.9 13.8 7.8 13.8C8.4 13.8 8.8 14.2 8.8 14.8C8.8 15.3 8.4 15.7 7.8 15.8C7.3 15.8 6.9 15.8 6.4 15.8Z"
                        fill="#A3ACB9" />
                    </svg>
                  </a>
                  <a v-if="shownotOwnersIcon && isLoggedIn && isLisitngBlocked" @click="openUnblockModal"
                    class="inline-block mr-0 px-2 py-1 cursor-pointer">
                    <svg width="22" height="23" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24 17.8C23.9 18 23.9 18.1 23.9 18.3C23.6 19.4 22.9 20.1 21.8 20.5C21.5 20.6 21.1 20.6 20.8 20.6C18.7 20.6 16.6 20.6 14.6 20.6C14.3 20.6 14 20.6 13.8 20.6C13.7 20.6 13.7 20.6 13.7 20.5C13.7 20.1 13.7 19.7 13.7 19.2C13.7 19.1 13.7 19.1 13.8 19.1C15.1 19.1 16.5 19.1 17.8 19.1C18.8 19.1 19.9 19.1 20.9 19.1C21.1 19.1 21.3 19.1 21.6 19C21.7 19 21.8 19 21.8 18.9C22.2 18.6 22.5 18.3 22.6 17.8C22.7 17.5 22.6 17.1 22.5 16.8C21.6 13.8 19.6 11.7 16.5 10.8C16.3 10.8 16.2 10.8 16.1 10.8C14.6 11.4 13.1 11.3 11.6 10.5C10 9.6 9.00001 8.3 8.60001 6.5C8.60001 6.4 8.60001 6.3 8.60001 6.1C8.30001 5 8.60001 3.7 9.40001 2.6C10.3 1.4 11.4 0.5 12.9 0.1C13.1 0.1 13.3 0 13.5 0H13.6H13.7H13.8C13.9 0 14.1 0 14.2 0H14.3C14.3 0 14.3 0 14.4 0C14.6 0 14.8 -7.45058e-09 15.1 0.1C16.6 0.4 17.8 1.2 18.7 2.5C19.9 4.3 20.1 6.2 19.1 8.1C18.8 8.7 18.4 9.1 18 9.6C17.9 9.8 17.9 9.8 18.1 9.9C18.1 9.9 18.2 9.9 18.2 10C19.5 10.6 20.6 11.4 21.5 12.5C22.6 13.7 23.4 15.1 23.8 16.7C23.9 16.9 23.9 17.1 23.9 17.3C24 17.4 24 17.6 24 17.8ZM14.2 9.7C14.4 9.7 14.8 9.7 15.2 9.6C16.2 9.3 17 8.8 17.5 7.9C18.2 6.8 18.3 5.6 18 4.4C17.8 3.4 17.2 2.6 16.3 2.1C15.4 1.6 14.5 1.4 13.4 1.5C12.4 1.7 11.5 2.1 10.8 2.9C10 3.9 9.70001 5.1 9.90001 6.4C10.2 7.8 10.9 8.8 12.2 9.4C12.8 9.7 13.5 9.8 14.2 9.7Z"
                        fill="#A3ACB9" />
                      <path
                        d="M0 16H0.1C2.9 16 5.7 16 8.5 16C8.6 16 8.6 16 8.6 15.9C8.6 15 8.6 14 8.6 13.1C8.6 12.6 8.5 12.2 8.3 11.7C7.9 11 7.3 10.5 6.5 10.4C5.9 10.3 5.3 10.3 4.7 10.6C3.9 11 3.4 11.6 3.3 12.5C3.2 12.9 3.2 13.3 3.2 13.8C3.2 13.9 3.2 13.9 3.1 13.9C2.7 13.9 2.3 13.9 1.9 13.9C1.8 13.9 1.8 13.9 1.8 13.8C1.8 13.3 1.8 12.8 1.9 12.4C2.1 11.3 2.7 10.4 3.6 9.8C4.2 9.4 4.8 9.1 5.5 9C6.4 8.9 7.3 9 8.1 9.5C9.1 10.1 9.8 11 10.1 12.1C10.2 12.4 10.2 12.7 10.2 13C10.2 14 10.2 15 10.2 15.9C10.2 16 10.2 16 10.3 16C10.8 16 11.3 16 11.8 16C11.9 16 11.9 16 11.9 16.1C11.9 18.9 11.9 21.6 11.9 24.4H11.8C7.9 24.4 4 24.4 0.1 24.4C2.23517e-08 21.6 0 18.8 0 16ZM6 22.9C7.4 22.9 8.9 22.9 10.3 22.9C10.4 22.9 10.4 22.9 10.4 22.8C10.4 21.1 10.4 19.3 10.4 17.6C10.4 17.5 10.4 17.5 10.3 17.5C7.4 17.5 4.6 17.5 1.7 17.5C1.6 17.5 1.6 17.5 1.6 17.6C1.6 19.3 1.6 21.1 1.6 22.8C1.6 22.9 1.6 22.9 1.7 22.9C3.1 22.9 4.6 22.9 6 22.9Z"
                        fill="#A3ACB9" />
                      <path
                        d="M6.69999 20.2C6.69999 20.6 6.69999 21 6.69999 21.4C6.69999 21.8 6.19999 22.2 5.69999 22C5.49999 21.9 5.29999 21.7 5.29999 21.4C5.29999 20.6 5.29999 19.9 5.29999 19.1C5.29999 18.8 5.59999 18.5 5.89999 18.4C6.09999 18.3 6.49999 18.4 6.59999 18.7C6.69999 18.8 6.69999 18.9 6.69999 19C6.69999 19.1 6.69999 19.3 6.69999 19.4C6.69999 19.7 6.69999 20 6.69999 20.2Z"
                        fill="#A3ACB9" />
                    </svg>
                  </a>

                  <div v-if="product.offerStage !== 'Failed' && product.offerStage !== 'Review'"
                    class="inline-block p-2 relative share-social">
                    <div :title="$t('share')" class="cursor-pointer" @click="showShareOpModal()">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M18.6 2.18182C17.385 2.18182 16.4 3.15865 16.4 4.36364C16.4 4.74231 16.4973 5.09844 16.6684 5.40882C16.6797 5.4258 16.6906 5.44319 16.7011 5.46098C16.7115 5.47866 16.7213 5.49651 16.7306 5.5145C17.1188 6.13344 17.8109 6.54545 18.6 6.54545C19.815 6.54545 20.8 5.56862 20.8 4.36364C20.8 3.15865 19.815 2.18182 18.6 2.18182ZM15.4738 7.43434C16.2712 8.23273 17.3774 8.72727 18.6 8.72727C21.0301 8.72727 23 6.77361 23 4.36364C23 1.95367 21.0301 0 18.6 0C16.1699 0 14.2 1.95367 14.2 4.36364C14.2 4.7749 14.2574 5.17288 14.3646 5.55013L8.52608 8.9292C7.7287 8.13087 6.62258 7.63636 5.4 7.63636C2.96995 7.63636 1 9.59003 1 12C1 14.41 2.96995 16.3636 5.4 16.3636C6.62286 16.3636 7.7292 15.8689 8.52663 15.0702L14.366 18.4449C14.2579 18.8236 14.2 19.2233 14.2 19.6364C14.2 22.0463 16.1699 24 18.6 24C21.0301 24 23 22.0463 23 19.6364C23 17.2264 21.0301 15.2727 18.6 15.2727C17.3793 15.2727 16.2746 15.7658 15.4775 16.562L9.63557 13.1859C9.74269 12.8088 9.8 12.411 9.8 12C9.8 11.5887 9.74262 11.1907 9.63536 10.8134L15.4738 7.43434ZM7.26994 10.85C7.27908 10.8676 7.28875 10.8852 7.29895 10.9025C7.30924 10.92 7.31994 10.9371 7.33104 10.9538C7.50251 11.2644 7.6 11.6209 7.6 12C7.6 12.3787 7.5027 12.7349 7.33155 13.0453C7.32014 13.0624 7.30915 13.08 7.2986 13.0979C7.28835 13.1154 7.27865 13.133 7.26949 13.1507C6.88126 13.7697 6.18915 14.1818 5.4 14.1818C4.18497 14.1818 3.2 13.205 3.2 12C3.2 10.795 4.18497 9.81818 5.4 9.81818C6.18946 9.81818 6.8818 10.2306 7.26994 10.85ZM16.4 19.6364C16.4 19.2816 16.4854 18.9466 16.6369 18.6505C16.664 18.6151 16.6893 18.5777 16.7124 18.5383C16.7346 18.5005 16.7542 18.462 16.7714 18.4229C17.1662 17.8389 17.8378 17.4545 18.6 17.4545C19.815 17.4545 20.8 18.4314 20.8 19.6364C20.8 20.8413 19.815 21.8182 18.6 21.8182C17.385 21.8182 16.4 20.8413 16.4 19.6364Z"
                          fill="#a3acb9" />
                      </svg>
                    </div>

                    <SharingOpt v-if="currentUrl && showSahreModal" :current-url="currentUrl"
                      :show-sahre-modal="showSahreModal" @closeShareModal="closeShareModal" />
                  </div>
                </div>

              </div>

              <div class="
                    pb-1
                    mb-6
                    lg:border-b border-slate-100
                    px-4
                    sm:px-4
                    md:px-0
                    2xl:px-0
                    border-b-4
                  ">
                <div class="view mb-3 flex w-full view-usera">
                  <ul class="flex items-center usera-listv">

                    <!-- start hot deals -->
                    <!-- <li v-if="isHotListing" class="flex items-center text-[11px] mr-3 text-gray-500 pr-3 relative  after:absolute after:w-[1px] after:h-[14px] after:bg-gray-200 after:right-0 after:top-[3px]">
                          <img src="~/assets/images/hot-listing.png" class="lhot" />
                      </li> -->
                    <!-- start hot deals -->

                    <li v-if="shownotOwnersIcon && listingStatistics.viewCount > 49"
                      class="flex items-center text-[11px] mr-3 text-gray-500 pr-3 relative  after:absolute after:w-[1px] after:h-[14px] after:bg-gray-200 after:right-0 after:top-0 liview">
                      <svg width="22" height="16" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M23.9523 8.52824C23.0114 6.09429 21.3779 3.98941 19.2536 2.47374C17.1294 0.958072 14.6077 0.0980611 12 0C9.39234 0.0980611 6.87056 0.958072 4.74636 2.47374C2.62215 3.98941 0.988616 6.09429 0.047661 8.52824C-0.015887 8.70401 -0.015887 8.89649 0.047661 9.07226C0.988616 11.5062 2.62215 13.6111 4.74636 15.1268C6.87056 16.6424 9.39234 17.5024 12 17.6005C14.6077 17.5024 17.1294 16.6424 19.2536 15.1268C21.3779 13.6111 23.0114 11.5062 23.9523 9.07226C24.0159 8.89649 24.0159 8.70401 23.9523 8.52824V8.52824ZM12 16.0005C7.75988 16.0005 3.27975 12.8564 1.65571 8.80025C3.27975 4.74413 7.75988 1.60005 12 1.60005C16.2401 1.60005 20.7202 4.74413 22.3443 8.80025C20.7202 12.8564 16.2401 16.0005 12 16.0005Z"
                          fill="#8EC23C" />
                        <path
                          d="M12 4.00012C11.0506 4.00012 10.1225 4.28165 9.33315 4.80909C8.54378 5.33654 7.92853 6.08622 7.56522 6.96333C7.20191 7.84044 7.10685 8.80558 7.29206 9.73672C7.47728 10.6679 7.93445 11.5232 8.60576 12.1945C9.27707 12.8658 10.1324 13.3229 11.0635 13.5082C11.9946 13.6934 12.9598 13.5983 13.8369 13.235C14.714 12.8717 15.4637 12.2564 15.9911 11.4671C16.5186 10.6777 16.8001 9.74964 16.8001 8.80026C16.8001 7.52718 16.2944 6.30625 15.3942 5.40605C14.494 4.50585 13.273 4.00012 12 4.00012ZM12 12.0003C11.367 12.0003 10.7483 11.8127 10.2221 11.461C9.69584 11.1094 9.28568 10.6096 9.04347 10.0249C8.80126 9.44014 8.73789 8.79671 8.86137 8.17595C8.98484 7.55519 9.28962 6.98499 9.73716 6.53745C10.1847 6.08991 10.7549 5.78513 11.3757 5.66166C11.9964 5.53818 12.6398 5.60155 13.2246 5.84376C13.8093 6.08597 14.3091 6.49613 14.6607 7.02238C15.0124 7.54864 15.2001 8.16734 15.2001 8.80026C15.2001 9.64897 14.8629 10.4629 14.2628 11.0631C13.6626 11.6632 12.8487 12.0003 12 12.0003Z"
                          fill="#8EC23C" />
                      </svg>
                      <span class="ml-3 mr-1">{{ listingStatistics.viewCount }} </span>
                      <span v-if="listingStatistics.viewCount > 1">{{ $t('views') }}</span>
                      <span v-else>{{ $t('view') }}</span>
                    </li>
                    <li v-if="shownotOwnersIcon"
                      class="flex items-center text-[11px] mr-3 text-gray-500 pr-3 relative  after:absolute after:w-[1px] after:h-[14px] after:bg-gray-200 after:right-0 after:top-[2px] likem">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_619_25469)">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.9694 2.3946C12.6005 2.13312 13.2769 1.99854 13.96 1.99854C14.643 1.99854 15.3194 2.13312 15.9505 2.3946C16.5814 2.65602 17.1547 3.03918 17.6375 3.52218C18.1205 4.00502 18.5039 4.57854 18.7654 5.20948C19.0268 5.84053 19.1614 6.51692 19.1614 7.2C19.1614 7.88308 19.0268 8.55946 18.7654 9.19051C18.5039 9.82151 18.1207 10.3948 17.6376 10.8777C17.6376 10.8777 17.6377 10.8776 17.6376 10.8777L10.5656 17.9497C10.2532 18.2621 9.7467 18.2621 9.43428 17.9497L2.36228 10.8777C1.38689 9.9023 0.838928 8.5794 0.838928 7.2C0.838928 5.8206 1.38689 4.49769 2.36228 3.52231C3.33766 2.54693 4.66056 1.99896 6.03996 1.99896C7.41936 1.99896 8.74226 2.54693 9.71765 3.52231L9.99996 3.80463L10.2821 3.52244C10.2822 3.5224 10.2821 3.52249 10.2821 3.52244C10.765 3.03938 11.3385 2.65605 11.9694 2.3946ZM13.96 3.59854C13.4871 3.59854 13.0188 3.69171 12.5819 3.87273C12.145 4.05375 11.7481 4.31908 11.4138 4.65355L10.5656 5.50168C10.2532 5.8141 9.7467 5.8141 9.43428 5.50168L8.58628 4.65368C7.91095 3.97836 6.99501 3.59896 6.03996 3.59896C5.08491 3.59896 4.16897 3.97836 3.49365 4.65368C2.81832 5.32901 2.43893 6.24494 2.43893 7.2C2.43893 8.15505 2.81832 9.07099 3.49365 9.74631L9.99996 16.2526L16.5063 9.74631C16.8407 9.412 17.1062 9.01493 17.2872 8.57805C17.4683 8.14116 17.5614 7.6729 17.5614 7.2C17.5614 6.7271 17.4683 6.25883 17.2872 5.82195C17.1062 5.38506 16.8409 4.98813 16.5064 4.65381C16.1721 4.31934 15.7749 4.05375 15.338 3.87273C14.9011 3.69171 14.4329 3.59854 13.96 3.59854Z"
                            fill="#EE2A7B" />
                        </g>
                        <defs>
                          <clipPath id="clip0_619_25469">
                            <rect width="19.2" height="19.2" fill="white" transform="translate(0.399994 0.399902)" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span class="ml-3 mr-1"> {{ listingStatistics.favouriteCount }} </span>
                      <span v-if="listingStatistics.favouriteCount > 1"> {{ $t('likes') }} </span>
                      <span v-else>{{ $t('like') }}</span>
                    </li>
                    <li v-if="product.publishedDate" class="flex items-center text-[11px] text-gray-500 pbdate">
                      <svg width="15" height="18" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M15 1C15 0.447715 14.5523 0 14 0C13.4477 0 13 0.447715 13 1V2H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V2H3C1.34315 2 0 3.34315 0 5V9V19C0 20.6569 1.34315 22 3 22H17C18.6569 22 20 20.6569 20 19V9V5C20 3.34315 18.6569 2 17 2H15V1ZM18 8V5C18 4.44772 17.5523 4 17 4H15V5C15 5.55228 14.5523 6 14 6C13.4477 6 13 5.55228 13 5V4H7V5C7 5.55228 6.55228 6 6 6C5.44772 6 5 5.55228 5 5V4H3C2.44772 4 2 4.44772 2 5V8H18ZM2 10H18V19C18 19.5523 17.5523 20 17 20H3C2.44772 20 2 19.5523 2 19V10Z"
                          fill="#8CAEC5" />
                      </svg>
                      <span class="ml-3"> {{ $t('postedOn') }} {{ transformDate(product.publishedDate) }} </span>
                    </li>
                  </ul>
                </div>

                <!-- For Offer Owner the View Like Deal Section -->

                <ul v-if="showOwnersIcon && product.offerStage !== 'Review' && product.offerStage !== 'Failed'"
                  class="flex items-center mb-4">
                  <li
                    class="text-xs mr-2 text-gray-500 pr-2 position-relative flex items-center relative font-medium after:absolute after:w-[1px] after:h-full after:bg-gray-200 after:right-0 after:top-0 sm:mr-2 sm:pr-2 md:mr-4 md:pr-4 lg:mr-4 lg:pr-4 xl:mr-4 xl:pr-4 2xl:mr-4 2xl:pr-4"
                    :title="$t('views')">
                    <svg width="22" height="16" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M23.9523 8.52824C23.0114 6.09429 21.3779 3.98941 19.2536 2.47374C17.1294 0.958072 14.6077 0.0980611 12 0C9.39234 0.0980611 6.87056 0.958072 4.74636 2.47374C2.62215 3.98941 0.988616 6.09429 0.047661 8.52824C-0.015887 8.70401 -0.015887 8.89649 0.047661 9.07226C0.988616 11.5062 2.62215 13.6111 4.74636 15.1268C6.87056 16.6424 9.39234 17.5024 12 17.6005C14.6077 17.5024 17.1294 16.6424 19.2536 15.1268C21.3779 13.6111 23.0114 11.5062 23.9523 9.07226C24.0159 8.89649 24.0159 8.70401 23.9523 8.52824V8.52824ZM12 16.0005C7.75988 16.0005 3.27975 12.8564 1.65571 8.80025C3.27975 4.74413 7.75988 1.60005 12 1.60005C16.2401 1.60005 20.7202 4.74413 22.3443 8.80025C20.7202 12.8564 16.2401 16.0005 12 16.0005Z"
                        fill="#8EC23C" />
                      <path
                        d="M12 4.00012C11.0506 4.00012 10.1225 4.28165 9.33315 4.80909C8.54378 5.33654 7.92853 6.08622 7.56522 6.96333C7.20191 7.84044 7.10685 8.80558 7.29206 9.73672C7.47728 10.6679 7.93445 11.5232 8.60576 12.1945C9.27707 12.8658 10.1324 13.3229 11.0635 13.5082C11.9946 13.6934 12.9598 13.5983 13.8369 13.235C14.714 12.8717 15.4637 12.2564 15.9911 11.4671C16.5186 10.6777 16.8001 9.74964 16.8001 8.80026C16.8001 7.52718 16.2944 6.30625 15.3942 5.40605C14.494 4.50585 13.273 4.00012 12 4.00012ZM12 12.0003C11.367 12.0003 10.7483 11.8127 10.2221 11.461C9.69584 11.1094 9.28568 10.6096 9.04347 10.0249C8.80126 9.44014 8.73789 8.79671 8.86137 8.17595C8.98484 7.55519 9.28962 6.98499 9.73716 6.53745C10.1847 6.08991 10.7549 5.78513 11.3757 5.66166C11.9964 5.53818 12.6398 5.60155 13.2246 5.84376C13.8093 6.08597 14.3091 6.49613 14.6607 7.02238C15.0124 7.54864 15.2001 8.16734 15.2001 8.80026C15.2001 9.64897 14.8629 10.4629 14.2628 11.0631C13.6626 11.6632 12.8487 12.0003 12 12.0003Z"
                        fill="#8EC23C" />
                    </svg>
                    <span class="ml-1 mr-1 font-medium sm:ml-2 md:ml-3 lg:ml-3 xl:ml-3 2xl:ml-3">{{
                      listingStatistics.viewCount }}</span>
                    <span v-if="listingStatistics.viewCount > 1">{{ $t('views') }}</span>
                    <span v-else>{{ $t('view') }}</span>
                  </li>
                  <li
                    class="text-xsb mr-2 text-gray-500 pr-2 flex items-center font-medium relative  after:absolute after:w-[1px] after:h-full after:bg-gray-200 after:right-0 after:top-0 sm:mr-2 sm:pr-2 md:mr-4 md:pr-4 lg:mr-4 lg:pr-4 xl:mr-4 xl:pr-4 2xl:mr-4 2xl:pr-4"
                    :title="$t('likes')">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_619_25469)">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M11.9694 2.3946C12.6005 2.13312 13.2769 1.99854 13.96 1.99854C14.643 1.99854 15.3194 2.13312 15.9505 2.3946C16.5814 2.65602 17.1547 3.03918 17.6375 3.52218C18.1205 4.00502 18.5039 4.57854 18.7654 5.20948C19.0268 5.84053 19.1614 6.51692 19.1614 7.2C19.1614 7.88308 19.0268 8.55946 18.7654 9.19051C18.5039 9.82151 18.1207 10.3948 17.6376 10.8777C17.6376 10.8777 17.6377 10.8776 17.6376 10.8777L10.5656 17.9497C10.2532 18.2621 9.7467 18.2621 9.43428 17.9497L2.36228 10.8777C1.38689 9.9023 0.838928 8.5794 0.838928 7.2C0.838928 5.8206 1.38689 4.49769 2.36228 3.52231C3.33766 2.54693 4.66056 1.99896 6.03996 1.99896C7.41936 1.99896 8.74226 2.54693 9.71765 3.52231L9.99996 3.80463L10.2821 3.52244C10.2822 3.5224 10.2821 3.52249 10.2821 3.52244C10.765 3.03938 11.3385 2.65605 11.9694 2.3946ZM13.96 3.59854C13.4871 3.59854 13.0188 3.69171 12.5819 3.87273C12.145 4.05375 11.7481 4.31908 11.4138 4.65355L10.5656 5.50168C10.2532 5.8141 9.7467 5.8141 9.43428 5.50168L8.58628 4.65368C7.91095 3.97836 6.99501 3.59896 6.03996 3.59896C5.08491 3.59896 4.16897 3.97836 3.49365 4.65368C2.81832 5.32901 2.43893 6.24494 2.43893 7.2C2.43893 8.15505 2.81832 9.07099 3.49365 9.74631L9.99996 16.2526L16.5063 9.74631C16.8407 9.412 17.1062 9.01493 17.2872 8.57805C17.4683 8.14116 17.5614 7.6729 17.5614 7.2C17.5614 6.7271 17.4683 6.25883 17.2872 5.82195C17.1062 5.38506 16.8409 4.98813 16.5064 4.65381C16.1721 4.31934 15.7749 4.05375 15.338 3.87273C14.9011 3.69171 14.4329 3.59854 13.96 3.59854Z"
                          fill="#EE2A7B" />
                      </g>
                      <defs>
                        <clipPath id="clip0_619_25469">
                          <rect width="19.2" height="19.2" fill="white" transform="translate(0.399994 0.399902)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span class="ml-1 mr-1 font-medium sm:ml-2 md:ml-3 lg:ml-3 xl:ml-3 2xl:ml-3">{{
                      listingStatistics.favouriteCount }}</span>
                    <span v-if="listingStatistics.favouriteCount > 1"> {{ $t('likes') }} </span>
                    <span v-else>{{ $t('like') }}</span>
                  </li>
                  <li
                    class="text-xsb mr-2 text-gray-500 pr-2 flex items-center relative font-medium after:absolute after:w-[1px] after:h-full after:bg-gray-200 after:right-0 after:top-0 sm:mr-2 sm:pr-2 md:mr-4 md:pr-4 lg:mr-4 lg:pr-4 xl:mr-4 xl:pr-4 2xl:mr-4 2xl:pr-4"
                    :title="$t('QuestionsAnswers')">
                    <svg width="19" height="19" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2ZM0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11Z"
                        fill="#8CAEC5" />
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.2581 7.02434C10.7926 6.94449 10.3138 7.03197 9.90663 7.27129C9.49943 7.5106 9.19006 7.88631 9.03333 8.33187C8.85006 8.85286 8.27914 9.12663 7.75815 8.94336C7.23716 8.76008 6.96339 8.18917 7.14666 7.66818C7.46013 6.77707 8.07886 6.02565 8.89327 5.54702C9.70767 5.06839 10.6652 4.89343 11.5962 5.05313C12.5273 5.21283 13.3717 5.69688 13.9801 6.41955C14.5883 7.14207 14.9213 8.0565 14.92 9.00093C14.9195 10.5313 13.7849 11.5419 12.9747 12.0821C12.5391 12.3725 12.1105 12.586 11.7949 12.7263C11.6356 12.7971 11.5015 12.8508 11.4049 12.8876C11.3565 12.9061 11.3173 12.9204 11.2887 12.9305L11.254 12.9427L11.2429 12.9465L11.239 12.9478L11.2375 12.9483C11.2372 12.9484 11.2362 12.9487 10.92 12L11.2362 12.9487C10.7123 13.1234 10.146 12.8402 9.97131 12.3162C9.79678 11.7927 10.0794 11.2267 10.6027 11.0517L10.6014 11.0521C10.6015 11.0521 10.6016 11.0521 10.6027 11.0517L10.6187 11.0461C10.6341 11.0406 10.6593 11.0315 10.6929 11.0187C10.7603 10.993 10.8606 10.9529 10.9826 10.8987C11.2294 10.789 11.5509 10.6276 11.8653 10.418C12.5549 9.95824 12.92 9.46916 12.92 9.00002L12.92 8.99853C12.9207 8.52621 12.7542 8.06889 12.45 7.70755C12.1459 7.34622 11.7236 7.10419 11.2581 7.02434Z"
                        fill="#8CAEC5" />
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M10 16C10 15.4477 10.4477 15 11 15H11.01C11.5623 15 12.01 15.4477 12.01 16C12.01 16.5523 11.5623 17 11.01 17H11C10.4477 17 10 16.5523 10 16Z"
                        fill="#8CAEC5" />
                    </svg>
                    <span class="ml-1 mr-1 font-medium sm:ml-2 md:ml-3 lg:ml-3 xl:ml-3 2xl:ml-3">{{
                      listingStatistics.commentCount }}</span>
                    <span v-if="listingStatistics.commentCount > 1"> QNA </span>
                    <span v-else>QNA</span>
                  </li>
                  <li
                    class="text-xsb mr-0 text-gray-500 pr-0 flex items-center font-medium sm:mr-0 sm:pr-0 md:mr-2 md:pr-2 lg:mr-2 lg:pr-2 xl:mr-2 xl:pr-2 2xl:mr-2 2xl:pr-2"
                    :title="$t('offers')">
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 11.9999V2.5199V2.3999H3.6V11.0399C3.6 11.6159 3.12 11.9199 2.88 11.9999H0Z"
                        fill="#48CEF3" />
                      <path d="M24 11.9999V2.5199V2.3999H20.4V11.0399C20.4 11.6159 20.88 11.9199 21.12 11.9999H24Z"
                        fill="#48CEF3" />
                      <path
                        d="M4.67999 2.16L7.31999 0H10.68C10.44 0.24 9.59999 1.056 8.15999 2.4C5.99999 4.56 7.31999 6.12 7.67999 6.72C9.50399 8.544 11.72 6.84 12.6 5.76C13.88 6.84 16.848 9.384 18.48 10.92C18.48 13.68 16.2 12.36 15.96 12.6C14.04 15.84 12.48 13.56 12.12 13.56C11.448 14.616 9.99999 14.48 9.35999 14.28L5.39999 10.56H4.67999V2.16Z"
                        fill="#48CEF3" />
                      <path
                        d="M16.7999 0H12.4799C11.6799 0.72 9.71992 2.544 8.27993 4.08C7.79993 6.288 9.43993 6.28 10.3199 6C11.0399 5.36 12.6959 3.912 13.5599 3.24C14.4239 2.568 14.5599 3.52 14.5199 4.08L13.5599 5.04L19.1999 9.6V2.28L16.7999 0Z"
                        fill="#48CEF3" />
                      <circle cx="1.5789" cy="10.0268" r="0.947368" fill="white" />
                      <circle cx="22.4211" cy="10.0268" r="0.947368" fill="white" />
                    </svg>
                    <span class="ml-1 mr-1 font-medium sm:ml-2 md:ml-3 lg:ml-3 xl:ml-3 2xl:ml-3">{{
                      listingStatistics.dealCount }}</span>
                    <span v-if="listingStatistics.dealCount > 1"> Offers </span>
                    <span v-else>Offer</span>
                  </li>


                </ul>

                <!-- End Of View like Deal For Offer Owner -->

                <div class="flex flex-col sm:flex-col md:flex-row lg:flex-col xl:flex-row 2xl:flex-row">
                  <ul class="flex items-center mb-3">
                    <li v-if="product.itemCondition === 'Used'" class="text-xsb mr-4 text-gray-500 pr-2">
                      {{ $t('productAge') }} :
                      <span class="font-medium  text-firoza">{{
                        convertProductAge(product.productAge)
                      }}</span>


                    </li>

                    <!-- <li v-if="product.itemCondition === 'New'" class="text-xsb mr-4 text-gray-500 pr-2">                    
                        <span class="font-medium  text-white bg-green rounded-sm px-3 py-1">{{
                          product.itemCondition
                        }}</span>   
                         
                      </li> -->
                    <li v-if="showOwnersIcon" class="text-xsb mr-2 text-gray-500 pr-2">
                      {{ $t('quantityLeft') }} :
                      <span class="font-medium text-gray-600">{{ product.quantity }} {{ product.unit
                      }}<span v-if="product.quantity > 1">s</span></span>
                    </li>

                    <!-- <li v-if="showOwnersIcon && listingStatistics.score" class="text-xsb mr-2 text-gray-500 pr-2">
                        {{ $t('score') }} :
                        <span class="font-medium text-gray-600"> {{ listingStatistics.score}}</span>
                      </li> -->
                  </ul>
                  <div class="text-xsb text-gray-500 mb-3">
                    {{ $t('location') }} :
                    <span v-if="product.location.city" class="font-medium text-gray-600">{{ product.location.city
                    }}</span>
                  </div>
                </div>
                <div class="mb-3 flex items-center">
                  <span class="text-xsb text-gray-500 pr-4 block product-price"> {{ $t('marketValue') }} :
                  </span>

                  <div
                    class="text-base sm:text-base md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-gray-600 flex items-center font-medium product-price">

                    <img v-if="checkIsAffiliated(product)" src="~/assets/images/coin.svg" class="mr-1 w-[18px]">

                    <svg v-else width="7" height="11" viewBox="0 0 11 18" fill="none"
                      class="mr-1 mt-[-2px] sm:mt-[-2px] md:mt-[-4px] lg:mt-[-4px] xl:mt-[-4px] 2xl:mt-[-4px]">
                      <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                        fill="black" />
                    </svg>



                    <span>{{ product.unitOfferValuation }}</span>

                    <!-- <div v-if="product.price && product.price > product.unitOfferValuation " class="flex">  <span class="items-center text-[16px] font-normal text-gray-500 relative ml-[15px] flex after:left-0 after:absolute after:w-[100%] after:h-[1px] after:bg-gray-500 after:top-[15px] "> -->

                    <!-- <div v-if="product.price" class="flex">  <span class="items-center text-[16px] font-normal text-gray-500 relative ml-[15px] flex after:left-0 after:absolute after:w-[100%] after:h-[1px] after:bg-gray-500 after:top-[15px] "> -->

                    <div v-if="product.price && product.price > product.unitOfferValuation" class="flex"> <span
                        class="items-center text-[15px] font-normal text-gray-500 relative ml-[8px] flex after:left-0 after:absolute after:w-[100%] after:h-[1px] after:bg-gray-500 after:top-[11px] sm:after:top-[11px] sm:text-[15px] md:after:top-[11px] md:text-base lg:after:top-[11px] lg:text-base xl:after:top-[11px] xl:text-base 2xl:after:top-[11px] 2xl:text-base">

                        <svg width="10" height="10" viewBox="0 0 11 18" fill="none" class="mr-0 mt-[-2px]">
                          <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
                            d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                            fill="black" />
                        </svg> {{ product.price }} </span>

                    </div>
                    <span
                      v-if="product.price && product.price > product.unitOfferValuation && checkOffPercentage(product)"
                      class="text-[13px] text-[#3B9A01] pl-[9px] font-medium"> {{ checkOffPercentage(product) }}% {{
                        $t('cl_off') }} </span>
                  </div>

                </div>

                <div>

                  <div v-show="loading" class="py-[2px] flex justify-left">
                    <Spinner />
                  </div>

                  <!-- For Listing Owner hide Delete Edit Copy section Start -->
                  <div v-if="checkProductSatge(product.offerStage)"
                    class="flex  items-center  w-full  justify-start  md:justify-start flex-wrap mt-4">
                    <div v-if="showOwnersIcon && !loading" class="
                      flex 
                      items-center
                      flex-wrap
                      justify-start
                      md:justify-start
                    ">
                      <!-- <a
                      :href="getOwnChatLink(product.offerId)"
                      class="
                        border border-firoza
                        bg-transparent
                        px-3
                        sm:px-8
                        md:px-10
                        lg:px-10
                        rounded
                        block
                        text-firoza
                        font-medium
                        text-base
                        mr-5
                        h-[43px] leading-[43px]

                      "
                    > {{ $t('openChat') }}
                    </a> -->
                      <div v-if="product.offerStage !== 'Review' && product.offerStage !== 'Failed'"
                        class="hidden md:flex mb-3">

                        <!-- v-show="!checkMatchLoading && showViewMatchButton "  -->
                        <a class="mr-2 font-medium cursor-pointer transition-all
                           bg-firoza   px-2  sm:px-10  md:px-3  rounded    flex justify-center items-center             
                          text-sm   h-[40px] leading-[43px] text-white hover:bg-firoza hover:border-firoza "
                          @click="showPotentialMatches = !showPotentialMatches">
                          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                            class="mr-2">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M16.1543 0.104031C16.3765 -0.118202 16.7565 0.0391928 16.7565 0.353478V1.99628V3.24351L18.0037 3.24351H19.6465C19.9608 3.24351 20.1182 3.62349 19.896 3.84572L19.1975 4.54424C19.0321 4.70963 18.8078 4.80255 18.5739 4.80255H16.4447L15.8082 5.43913L11.2418 10.0054C10.8974 10.3498 10.339 10.3498 9.99458 10.0054C9.65017 9.66096 9.65017 9.10255 9.99459 8.75814L13.0019 5.75087V3.62178C13.0019 3.38788 13.0948 3.16356 13.2602 2.99817L13.9587 2.29966C14.181 2.07742 14.5609 2.23482 14.5609 2.5491V4.1919L15.1975 3.55532V1.42616C15.1975 1.19226 15.2904 0.967937 15.4558 0.802544L16.1543 0.104031ZM15.8082 5.43913H17.4509C17.7652 5.43913 17.9226 5.81912 17.7004 6.04135L17.0019 6.73986C16.8365 6.90526 16.6122 6.99817 16.3783 6.99817L14.2491 6.99817L15.8082 5.43913ZM11.6862 2.6123C12.1579 2.73361 12.6387 2.44953 12.76 1.9778C12.8813 1.50608 12.5972 1.02533 12.1255 0.904027C8.91431 0.0782796 5.3585 0.921907 2.84138 3.43905C-0.947128 7.2276 -0.947128 13.37 2.84138 17.1586C6.62989 20.9471 12.7723 20.9471 16.5608 17.1586C19.0779 14.6414 19.9215 11.0856 19.0958 7.87439C18.9745 7.40267 18.4938 7.11859 18.022 7.23989C17.5503 7.3612 17.2662 7.84194 17.3875 8.31367C18.0644 10.9457 17.3717 13.8533 15.3136 15.9114C12.2139 19.0111 7.18829 19.0111 4.0886 15.9114C0.988912 12.8116 0.988912 7.786 4.0886 4.68628C6.14668 2.62818 9.05418 1.93548 11.6862 2.6123ZM10.4368 5.95057C10.9171 6.03133 11.3719 5.70742 11.4527 5.22708C11.5335 4.74675 11.2096 4.2919 10.7292 4.21113C8.82927 3.89167 6.80441 4.46491 5.33582 5.93351C2.92495 8.3444 2.92495 12.2532 5.33582 14.6641C7.74669 17.075 11.6555 17.075 14.0664 14.6641C15.5349 13.1955 16.1082 11.1706 15.7887 9.27067C15.708 8.79034 15.2531 8.46642 14.7728 8.54719C14.2924 8.62795 13.9685 9.08281 14.0493 9.56314C14.2782 10.9247 13.8673 12.3687 12.8191 13.4169C11.0971 15.139 8.30509 15.139 6.58304 13.4169C4.86099 11.6948 4.86099 8.90281 6.58304 7.18074C7.63118 6.13259 9.07526 5.72164 10.4368 5.95057ZM9.07748 8.42797C9.42189 8.77239 9.42189 9.33079 9.07748 9.6752C8.73307 10.0196 8.73307 10.578 9.07748 10.9224C9.42189 11.2668 9.98029 11.2668 10.3247 10.9224C10.6691 10.578 11.2275 10.578 11.5719 10.9224C11.9163 11.2668 11.9163 11.8253 11.5719 12.1697C10.5387 13.2029 8.86349 13.2029 7.83026 12.1697C6.79703 11.1364 6.79703 9.46121 7.83026 8.42797C8.17467 8.08356 8.73307 8.08356 9.07748 8.42797Z"
                              fill="white" />
                          </svg>
                          {{ $t('viewMatches') }} </a>


                        <!-- <button v-if="product.offerStage === 'Published'" @click="markToSold()"
                        class="mark-sold text-center cursor-pointer transition-all mr-4 
                          px-2 sm:px-10 md:px-4 rounded  font-medium text-base 
                          h-[43px] border border-firoza
                          w-full sm:w-full md:w-auto lg:w-auto xl:w-auto 2xl:w-auto hidden md:block"
                          :class="addClassToTitle()">
                          <span v-show="!markAsSoldLoading">{{markAsSoldBtnTitle}} </span>
                          <Spinner v-show="markAsSoldLoading" /></button>  -->

                      </div>

                      <div v-if="product.offerStage !== 'Review' && product.offerStage !== 'Failed'"
                        class="flex md:hidden mb-3 eitmatch">

                        <!-- v-show="!checkMatchLoading && showViewMatchButton "  -->

                        <a href="javascript:void();" class="mr-2 font-medium cursor-pointer transition-all
                           bg-firoza   px-6  sm:px-10  md:px-10  rounded    block             
                          text-base   h-[43px] leading-[43px] text-white hover:bg-firoza hover:border-firoza"
                          @click="getPotentialPageLink">

                          {{ $t('viewMatches') }} </a>

                      </div>

                      <a href="javascript:;" v-if="product.offerStage === 'Published' && !product.featured"
                        @click="sellFaster()"
                        class="cursor-pointer flex justify-center cursor-pointer items-center px-3 py-2 bg-green text-sm text-white rounded h-[40px] mb-3 mr-2 cursor-pointer sm:mr-2 md:mr-2">
                        <img src="~/assets/images/dec-home/flash-sale-blue.svg" alt="image" />
                        <span class="ml-2">{{ $t('sellFaster') }}</span>
                      </a>
                      <!-- Start of Condition If Offer Initiated With Any Deal -->
                      <div v-if="product.offerStage !== 'Review'"
                        class="flex mb-3 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3">
                        <a @click="editLisitng(editlink, isLisitngInitiated)" class="flex items-center justify-center
                        bg-transparent bg-white rounded border border-orange-400 w-[90px] text-orange-400
                        font-medium text-sm mr-2 h-[40px] cursor-pointer sm:mr-2 sm:w-[90px] md:mr-2 md:w-[90px] "
                          :title="$t('editListingText')">
                          <svg width="16" height="16" viewBox="0 0 27 27" fill="none"
                            class="text-amber-500 mr-1 sm:mr-2 md:mr-2 ">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                              fill="#fb923c" />
                          </svg> {{ $t('editBtn') }}
                        </a>
                        <a v-if="listingStatistics.dealCount === 0" class="flex items-center justify-center bg-transparent bg-white rounded
                        cursor-pointer border border-errortext w-[100px] text-errortext font-medium text-sm
                        mr-2 h-[40px] sm:mr-2 sm:w-[90px] md:mr-2 md:w-[90px] " :title="$t('deleteListingText')"
                          @click="deleteListing()">
                          <svg width="16" height="16" viewBox="0 0 24 28" fill="none" class="mr-1 sm:mr-2 md:mr-2 ">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                              fill="#FC2323" />
                          </svg> {{ $t('deleteBtn') }}
                        </a>
                        <a v-if="!isLisitngInitiated && product.offerStage !== 'Failed'"
                          class="flex items-center justify-center bg-transparent bg-white rounded cursor-pointer border border-gray-500
                        w-[90px] text-gray-500 font-medium text-sm mr-0 h-[40px] sm:mr-0 sm:w-[90px] md:mr-2 md:w-[90px] " :title="btnTitle" @click="hideListing()">
                          <span v-if="!product.hidden" class="flex items-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="mr-1 sm:mr-2 md:mr-2 ">
                              <g clip-path="url(#clip0_619_25834)">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M11.9977 5.00002C11.3682 4.99854 10.7408 5.07025 10.1279 5.21371C9.59016 5.33958 9.05219 5.00569 8.92632 4.46794C8.80045 3.93019 9.13434 3.39222 9.67209 3.26634C10.4355 3.08765 11.2171 2.99828 12.0012 3.00003L12.0023 3.00003L12 4.00003V3.00003L12.0012 3.00003C15.9001 3.00046 18.8957 5.22667 20.8545 7.31608C21.8432 8.37062 22.5979 9.42134 23.1057 10.2075C23.3601 10.6015 23.5542 10.9317 23.686 11.166C23.752 11.2833 23.8025 11.3767 23.8372 11.4425C23.8546 11.4753 23.8681 11.5013 23.8777 11.5198L23.889 11.5421L23.8925 11.5489L23.8936 11.5512L21.858 11.9978C21.7488 11.8093 21.6044 11.5694 21.4256 11.2926C20.9646 10.5787 20.2818 9.62943 19.3955 8.68397C17.6045 6.77359 15.1005 5.00003 12 5.00003L11.9977 5.00002ZM21.858 11.9978C21.3406 12.8982 20.7439 13.7511 20.0748 14.5462C19.7193 14.9688 19.7736 15.5996 20.1962 15.9552C20.6187 16.3108 21.2496 16.2565 21.6052 15.8339C22.479 14.7953 23.2421 13.6684 23.8819 12.4714C24.0348 12.1854 24.0395 11.8429 23.8944 11.5528L21.858 11.9978C21.8892 12.0517 21.8326 11.9526 21.858 11.9978ZM5.4531 5.26525C5.85123 4.96123 6.41289 4.9987 6.76711 5.35292L10.5832 9.16899C10.5855 9.1713 10.5878 9.17361 10.5901 9.17594L14.824 13.4098C14.8264 13.4122 14.8287 13.4145 14.8311 13.4169L18.6471 17.2329C18.8511 17.4369 18.9571 17.7191 18.9378 18.007C18.9184 18.2949 18.7757 18.5604 18.5462 18.7353C16.6671 20.1677 14.3789 20.9613 12.0163 20.9999L12 21C8.10049 21 5.10448 18.7736 3.14546 16.684C2.15683 15.6294 1.40207 14.5787 0.894336 13.7926C0.63985 13.3985 0.445792 13.0684 0.313971 12.834C0.248023 12.7168 0.19754 12.6233 0.162753 12.5576C0.145357 12.5247 0.131875 12.4988 0.122338 12.4802L0.11099 12.458L0.107539 12.4512L0.10637 12.4488C0.10637 12.4488 0.105573 12.4472 1 12L0.105573 12.4472C-0.0397387 12.1566 -0.0347895 11.8135 0.118844 11.5272C1.43015 9.08345 3.24891 6.94839 5.4531 5.26525ZM2.14257 12.0032C2.25165 12.1916 2.39592 12.4311 2.57441 12.7075C3.03543 13.4213 3.71817 14.3706 4.60454 15.3161C6.39395 17.2248 8.89512 18.9969 11.9918 19C13.5373 18.9734 15.0437 18.5524 16.3714 17.7856L14.0497 15.464C13.891 15.5635 13.7251 15.652 13.5531 15.7286C13.0625 15.9472 12.5328 16.0648 11.9957 16.0742C11.4586 16.0837 10.9252 15.9849 10.4271 15.7837C9.92902 15.5826 9.47657 15.2831 9.09674 14.9033C8.71691 14.5235 8.41747 14.071 8.21629 13.5729C8.01511 13.0749 7.91631 12.5414 7.92579 12.0043C7.93527 11.4672 8.05282 10.9375 8.27145 10.4469C8.34805 10.2749 8.43652 10.109 8.53604 9.95028L5.9871 7.40134C4.45031 8.7014 3.14935 10.2582 2.14257 12.0032ZM10.0279 11.4421C9.96372 11.6346 9.92907 11.836 9.92548 12.0396C9.92074 12.3081 9.97014 12.5749 10.0707 12.8239C10.1713 13.0729 10.321 13.2992 10.511 13.4891C10.7009 13.679 10.9271 13.8287 11.1761 13.9293C11.4252 14.0299 11.6919 14.0793 11.9604 14.0745C12.164 14.071 12.3655 14.0363 12.5579 13.9721L10.0279 11.4421Z"
                                  fill="#494949" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L23.7071 22.2929C24.0976 22.6834 24.0976 23.3166 23.7071 23.7071C23.3166 24.0976 22.6834 24.0976 22.2929 23.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                                  fill="#494949" />
                              </g>
                              <defs>
                                <clipPath id="clip0_619_25834">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg> {{ $t('hideText') }}
                          </span>

                          <span v-if="product.hidden" class="flex items-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                              class="mr-1 sm:mr-2 md:mr-2 ">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.14074 12C2.25003 12.1889 2.39492 12.4296 2.57441 12.7075C3.03543 13.4213 3.71817 14.3706 4.60454 15.3161C6.39552 17.2264 8.89951 19 12 19C15.1005 19 17.6045 17.2264 19.3955 15.3161C20.2818 14.3706 20.9646 13.4213 21.4256 12.7075C21.6051 12.4296 21.75 12.1889 21.8593 12C21.75 11.8111 21.6051 11.5704 21.4256 11.2925C20.9646 10.5787 20.2818 9.6294 19.3955 8.68394C17.6045 6.77356 15.1005 5 12 5C8.89951 5 6.39552 6.77356 4.60454 8.68394C3.71817 9.6294 3.03543 10.5787 2.57441 11.2925C2.39492 11.5704 2.25003 11.8111 2.14074 12ZM23 12C23.8944 11.5528 23.8943 11.5524 23.8941 11.5521L23.8925 11.5489L23.889 11.542L23.8777 11.5198C23.8681 11.5013 23.8546 11.4753 23.8372 11.4424C23.8025 11.3767 23.752 11.2832 23.686 11.166C23.5542 10.9316 23.3601 10.6015 23.1057 10.2075C22.5979 9.42131 21.8432 8.3706 20.8545 7.31606C18.8955 5.22644 15.8995 3 12 3C8.10049 3 5.10448 5.22644 3.14546 7.31606C2.15683 8.3706 1.40207 9.42131 0.894336 10.2075C0.63985 10.6015 0.445792 10.9316 0.313971 11.166C0.248023 11.2832 0.19754 11.3767 0.162753 11.4424C0.145357 11.4753 0.131875 11.5013 0.122338 11.5198L0.11099 11.542L0.107539 11.5489L0.10637 11.5512C0.106186 11.5516 0.105573 11.5528 1 12L0.105573 11.5528C-0.0351909 11.8343 -0.0351909 12.1657 0.105573 12.4472L1 12C0.105573 12.4472 0.105389 12.4468 0.105573 12.4472L0.107539 12.4511L0.11099 12.458L0.122338 12.4802C0.131875 12.4987 0.145357 12.5247 0.162753 12.5576C0.19754 12.6233 0.248023 12.7168 0.313971 12.834C0.445792 13.0684 0.63985 13.3985 0.894336 13.7925C1.40207 14.5787 2.15683 15.6294 3.14546 16.6839C5.10448 18.7736 8.10049 21 12 21C15.8995 21 18.8955 18.7736 20.8545 16.6839C21.8432 15.6294 22.5979 14.5787 23.1057 13.7925C23.3601 13.3985 23.5542 13.0684 23.686 12.834C23.752 12.7168 23.8025 12.6233 23.8372 12.5576C23.8546 12.5247 23.8681 12.4987 23.8777 12.4802L23.889 12.458L23.8925 12.4511L23.8936 12.4488C23.8938 12.4484 23.8944 12.4472 23 12ZM23 12L23.8944 12.4472C24.0352 12.1657 24.0348 11.8336 23.8941 11.5521L23 12Z"
                                fill="#494949" />
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
                                fill="#494949" />
                            </svg> {{ $t('unHideText') }}</span>

                        </a>




                      </div>




                      <!-- End Of Condition If Offer Initiated With Any Deal -->

                    </div>



                  </div>
                  <!-- End of For Lisitng Owner  hide Delete Edit Copy -->
                  <div v-if="showRedeemBalanceErrmsg && shownotOwnersIcon" class="w-full flex flex-row mb-2">

                    <div class="text-sm text-red-500 bg-red-100 rounded px-4 py-4 ">
                      <div class="flex items-center">{{ $t('availableBalanceCoin') }} <span
                          class="font-bold flex items-center"> <img alt="Coin" src="~/assets/images/coin.svg"
                            class="mr-1 ml-1 w-[16px]" /> {{ netavailableReward }}</span></div>
                      {{ $t('insufficientBalforProduct1') }}
                      <!-- <a 
                      @click="addCointoWallet" class=" cursor-pointer text-firoza font-medium underline decoration-firoza underline-offset-4">{{ $t('addCoinsTobuyProduct')
                        }}</a> -->
                    </div>
                  </div>



                  <div
                    v-if="product.currentUserOfferOwner && product.offerStage === 'Published' && !product.featured && product.featuredWaitListing"
                    class="w-full rounded bg-[#ebf8ff] px-2 py-4">
                    <div class="flex items-center relative ">
                      <div
                        class="w-4 h-4 flex items-center justify-center border border-[#4B6E82] rounded-full absolute left-0">
                        <span class="text-sm text-[#4B6E82] rotate-180 font-bold ">!</span>
                      </div>
                      <div class="text-sm text-gray-500 pl-6">
                        {{ $t('sellFasterwaitlistPara') }}
                      </div>
                    </div>
                  </div>


                  <!-- start listing score -->
                  <div v-if="showOwnersIcon && isLisitngScoreExists(listingStatistics.score)"
                    class="w-full block items-center justify-between pt-4 pb-4 mt-2 border-t border-slate-100 sm:flex md:flex lg:flex xl:flex 2xl:flex">
                    <div class="flex items-center">
                      <div class="text-xsb text-gray-500 mr-2">{{ $t('lisitingScore') }}:</div>
                      <div class=" rounded-md flex items-center  justify-center mr-4 px-4 py-1.5"
                        :class="getBgClass(listingStatistics.score)">
                        <div class="text-white text-sm font-medium">{{ listingStatistics.score }}/100</div>
                      </div>
                      <div class="text-sm text-gray-900 mr-2">{{ getLisitngScoreText(listingStatistics.score) }}</div>
                      <div class="ml-0">
                        <div class="relative flex flex-col items-center group">
                          <div
                            class="w-4 h-4 flex items-center justify-center bg-white border border-[#4B6E82] rounded-full">

                            <span class="text-sm text-[#4B6E82] rotate-180 font-bold ">!</span>
                          </div>
                          <div class="absolute top-[30px] flex flex-col items-center hidden mb-6 group-hover:flex ">
                            <div
                              class="w-[300px] rounded text-left z-10 p-2 text-[12px] text-white bg-gray-500 shadow-lg absolute left-[-225px] sm:w-[350px] sm:left-[unset] sm:relative md:w-[350px] md:left-[unset] md:relative lg:w-[350px] lg:left-[unset] lg:relative xl:w-[350px] xl:left-[unset] xl:relative 2xl:w-[350px] 2xl:left-[unset] 2xl:relative ">
                              <h4 class="font-bold pb-2 "> {{ $t('whatListScore') }}</h4>
                              {{ $t('lisitngScoretoolTips') }}
                            </div>
                            <div class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute top-[2px]">
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div @click="showHowtoImprovePopUP"
                      class="text-sm text-firoza cursor-pointer font-medium mt-4 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
                      {{ $t('HowImListScore') }}</div>
                  </div>
                  <!-- End listing score -->



                  <div v-if="shownotOwnersIcon && !loading" class="flex
                      pb-3
                      fixed
                      bottom-0
                      bg-white
                      z-20
                      w-full
                      md:relative
                      pt-3
                      md:pt-0 md:border-none
                      left-0
                      shadow-xl
                      md:shadow-none mobile-btn
                    ">
                    <!-- v-if="isLoggedIn" -->
                    <div
                      class="flex items-center px-6 sm:px-6 md:px-0 lg:px-0 xl:px-0 2xl:px-0 w-full gap-2 md:gap-4 lg:gap-6 mt-1 justify-between md:justify-start makeb-group">
                      <!-- :href="getOtherUserChatLink(product.offerId,product.user.identityId)" -->
                      <!-- <a
                        @click="getOtherUserChatLink(product.offerId,product.user.identityId)"
                        class="
                          border border-firoza
                          bg-transparent
                          px-3
                          sm:px-8
                          md:px-10
                          lg:px-10
                          rounded
                          block
                          text-firoza
                          font-medium
                          text-base
                          mr-8
                          h-12
                          leading-leading48
                          cursor-pointer
                        "
                      >  {{ $t('chatNow') }} </a> -->
                      <!-- <a
                        href="#"
                        class="
                          border border-firoza
                          bg-transparent
                          px-3
                          sm:px-8
                          md:px-10
                          lg:px-10
                          rounded
                          block
                          text-firoza
                          font-medium
                          text-base
                          mr-8
                          h-12
                          leading-leading48
                          cursor-pointer
                        "
                      >  {{ $t('buyNow') }} </a> :tel="product.mobile" -->
                      
                    <a v-if="!product.mobilePrivate && product.mobile" :href="'tel:' + product.mobile"
                      class="block border border-firoza bg-transparent px-8 sm:px-6 md:px-8
                        rounded text-firoza font-medium text-base h-12 leading-leading48
                        cursor-pointer min-w-0 w-full sm:min-w-0 sm:w-full sm:block md:min-w-[185px] md:w-auto md:hidden lg:min-w-[185px] lg:w-auto lg:hidden xl:min-w-[185px] xl:w-auto xl:hidden 2xl:min-w-[185px] 2xl:w-auto 2xl:hidden text-center">
                      {{ $t('p_call') }} </a> 


                    <a v-if="!product.mobilePrivate && product.mobile && authUser" @click="openContcDet"
                      class="hidden border border-firoza bg-transparent px-4 sm:px-8 md:px-8 lg:px-8 xl:px-8
                        rounded text-firoza font-medium text-base h-12 leading-leading48
                        cursor-pointer min-w-0 w-full sm:min-w-0 sm:w-full sm:hidden md:min-w-[185px] md:w-auto md:block lg:min-w-[142px] lg:w-auto lg:block xl:min-w-[185px] xl:w-auto xl:block 2xl:min-w-[185px] 2xl:w-auto 2xl:block text-center makg-button">
                      {{ $t('p_contact') }} </a> 

                    <a v-if="!userdetails.gintaaAffiliated && !isEnableDirectBy"
                        :class="{ 'opacity-40 disabled cursor-not-allowed': !product.quantity || isLisitngBlocked || checkIfUserBlocked }"
                        class=" transition-all border border-firoza bg-firoza
                          px-8 sm:px-8 md:px-8 lg:px-8 xl:px-8 rounded block font-medium text-base 
                          h-12 leading-leading48 text-white hover:bg-firoza  hover:border-firoza
                          w-full sm:w-full md:min-w-[185px] md:w-auto md:block lg:min-w-[142px] lg:w-auto lg:block xl:min-w-[185px] xl:w-auto xl:block 2xl:min-w-[185px] 2xl:w-auto 2xl:block text-center makg-button"
                        :href="!checkProductQuantity(product.quantity) && !isLisitngBlocked && !checkIfUserBlocked  ? localePath(suggestOffer(product.offerId)) : 'javascript:;'">
                        {{ $t('makeOffer') }}
                      </a>
                      <!-- @click="initiateOffer()" -->
                      <button v-else-if="!isEnableDirectBy" type="button" @click="!ismakeOfferDisabled ? showProceedToBuyPopup() : false"
                        :class="{ 'opacity-40 disabled cursor-not-allowed': !product.quantity || ismakeOfferDisabled }"
                        class=" cursor-pointer transition-all border border-firoza bg-firoza
                          px-8 sm:px-8 md:px-8 lg:px-8 xl:px-8 rounded block font-medium text-base 
                          h-12 leading-leading48 text-white hover:bg-firoza  hover:border-firoza
                          w-full sm:w-full md:min-w-[185px] md:w-auto md:block lg:min-w-[142px] lg:w-auto lg:block xl:min-w-[185px] xl:w-auto xl:block 2xl:min-w-[185px] 2xl:w-auto 2xl:block text-center makg-button">
                        {{ $t('makeOffer') }}
                      </button>                 


                      <a 
                        v-if="isEnableDirectBy"
                        href="/cart/checkout" 
                        class="transition-all border border-firoza bg-firoza
                          px-8 sm:px-8 md:px-8 lg:px-8 xl:px-8 rounded block font-medium text-base 
                          h-12 leading-leading48 text-white hover:bg-firoza  hover:border-firoza
                          w-full sm:w-full md:min-w-[185px] md:w-auto md:block lg:min-w-[142px] lg:w-auto lg:block xl:min-w-[185px] xl:w-auto xl:block 2xl:min-w-[185px] 2xl:w-auto 2xl:block text-center makg-button">
                          Buy Now
                      </a>

                      <button v-if="product.quantity > 0 && !isLisitngBlocked && !checkIfUserBlocked" @click="addTosaveForLater(savedLaterBtnTitle, product.offerId)"
                        class="text-center cursor-pointer transition-all  
                          px-0 sm:px-0 md:px-0 rounded  font-medium text-base 
                          h-12 leading-leading48
                          w-full sm:w-full md:w-auto lg:w-auto xl:w-auto 2xl:w-auto hidden md:block makg-button makg-buttonr"
                        :class="addClassToTitle()">
                        <span v-show="!saveForLaterLoading">{{ savedLaterBtnTitle }} </span>
                        <Spinner v-show="saveForLaterLoading" />
                      </button>
                    </div>
                  </div>



                </div>
              </div>





              <div class="
                    description-attachment
                    lg:border-b border-slate-100
                    pb-0
                    mb-5
                    px-4
                    sm:px-4
                    md:px-0
                    2xl:px-0
                    border-b-4
                  ">
                <div v-if="checkIfFacetsExists(product.facets)" class="product-features mb-0 lg:mb-5">
                  <h4 class="text-base mb-4 font-medium text-gray-700">
                    {{ $t('productFeatures') }}
                  </h4>
                  <div v-for="item in product.facets" :key="item.name" class="feature-row flex w-full mb-3">
                    <div class="
                          feature-name
                          w-2/6
                          text-xs
                          font-normal
                          text-gray-600
                          pr-2
                        ">
                      {{ item.label }} :
                    </div>
                    <div class="feature-ans w-4/6 text-xsb font-medium text-gray-700">
                      {{ item.values[0] }}
                    </div>
                  </div>
                  <div v-if="shownotOwnersIcon && !loading" class="w-full flex justify-start mt-3"><button
                      v-if="product.quantity > 0 && !isLisitngBlocked && !checkIfUserBlocked" @click="addTosaveForLater(savedLaterBtnTitle, product.offerId)" class="text-center cursor-pointer transition-all  
                          px-0 py-2  text-firoza sm:px-10 md:px-1 rounded-sm  font-medium text-sm 
                             md:w-auto lg:w-auto xl:w-auto 2xl:w-auto block md:hidden" :class="addClassToTitle()">
                      <span v-show="!saveForLaterLoading">{{ savedLaterBtnTitle }} </span>
                      <Spinner v-show="saveForLaterLoading" />
                    </button></div>
                </div>
                <div v-if="product.description" class="product-description mb-5">
                  <h4 class="text-base mb-4 font-medium text-gray-700">
                    {{ $t('Description') }}
                  </h4>
                  <p class="text-sm text-gray-500 font-normal break-words">
                    {{ product.description }}
                  </p>
                </div>
                <!--shipping section start here-->
                <div v-if="product.freeShipping || product.cod || product.returnable"
                  class="border-t border-slate-100 mb-1 pt-5 w-full flex flex-row feeshipping">
                  <div class="w-full float-left nhg-ghy">
                    <div v-if="product.freeShipping" class="flex items-center mr-10 float-left mb-4 shppingtrfe">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" class="mr-3">
                        <mask id="mask0_10312_14825" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                          width="24" height="24">
                          <rect width="24" height="24" fill="url(#pattern0)" />
                        </mask>
                        <g mask="url(#mask0_10312_14825)">
                          <rect x="-21" y="-14.25" width="66.75" height="77.25" fill="#48CEF3" />
                        </g>
                        <defs>
                          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_10312_14825" transform="scale(0.0104167)" />
                          </pattern>
                          <image id="image0_10312_14825" width="96" height="96"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADWklEQVR4nO2dO2sUURiGnwQJgrERLDQRtLBLI2irMSAi3np/gngBO4mWdl4SJWJhZS9ionbqn1Cw0RQGBbVJDIiucS0msEbXM2dmz5zvzMz7wFftXN5znnyT2bPDLgghhBBCCCGEEEII8X8mgBngFbAKdCPXHWCo8lEmyAgwB6wRf9L/rtu0TMII8Bz7if+zZmmRhDnsJ7xfzdACCRPAT+wnu7USZrGf5Ly6VdnoE+A19hPsUzermgBrvmI/ua3uhLxBW5+/8RLqJqBxl6M6CmiUhLoKaIyEOgvoAjciZKyUuguovYQmCOgC1yNkrYSmCEhSgs8aSt4kV70OE1pyUutGw9YB2o4EGCMBxtRBwFDByqPMP+8O8Aa46HmOoFjfBRUl5F1Tv7obbygZEvBvHYw2Go8wqRFDwItoo/EIkxoxBHSBQ6kMKDViCYjWBRJg3AUSYNwFTRNQhMcex6u8C9osYB/wK+d4lXdBmwVAAl3QdgHmXdB2AWDcBRJg3AUSkGHWBRKQYdYFEtDDpAskoIdJF0jARqJ3gQRsJHoXNE1ArArWBRJQroJ1gQQYd4EElK+XeWHr8GxoUVL7o3DOTx0ezGo0EmCMBBgjAcZIgDESYIwEGLMp8PHGgNPAcWAvsJNs4eo9sAgsAA+BL4HP22h83gnvIPtWre8e23fWt91mlDd2VT6gI8CnEsE+A0dDBCyYt3ECBvkWxR/AmRAhC+RNSoDPOs43YLPHdqI/A68FLQYKIvrgI+BZ5SmEk90U/9rKeWAS2LJeh8luQa2vxxZ5g3CtwAkvO44zHWhQIavqvEEYBh55nGze41gpdUKMvMEYBq7ivhxNehxnqsQgqqoYeYOz4jjZqMf+Wx37x64YeZ2UWYwb9DNg1/4rFP9uiLxaNc7rpIyAD47XDnjsv9/x2seCWXxIOm8ZAe8cr13y2N+1zduCWXyoW95czuG+5k079r2Ss+9Z5c1nF/lvzBbI7h5G12sKeJKzTwcYV14/7ueEK1P3lNefMdy3o0VrmexDHeUtwDHC/LTJGnBSectxgcE+kFkDzivvYJyiXHsvAyeUNwzbyX7sp4PfX9EDbK+hyeQN/Wj5OL3HUvbQu01bIntD9JRsBXIp8HnLUre8QgghhBBCiAbwG3pp2gT6vN0QAAAAAElFTkSuQmCC" />
                        </defs>
                      </svg>


                      <span class="text-gray-500 text-[15px] font-medium mr-3"> {{ $t('freeShipping') }}</span>
                      <span class="relative group cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_10312_14820)">
                            <path
                              d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM9.6 5.6C9.6 5.84 9.44 6.24 9.28 6.4L8 7.68C7.52 8.16 7.2 8.96 7.2 9.6V10.4H8.8V9.6C8.8 9.36 8.96 8.96 9.12 8.8L10.4 7.52C10.88 7.04 11.2 6.24 11.2 5.6C11.2 3.84 9.76 2.4 8 2.4C6.24 2.4 4.8 3.84 4.8 5.6H6.4C6.4 4.72 7.12 4 8 4C8.88 4 9.6 4.72 9.6 5.6ZM7.2 12V13.6H8.8V12H7.2Z"
                              fill="#A09E9E" />
                          </g>
                          <defs>
                            <clipPath id="clip0_10312_14820">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <div
                          class="absolute z-40 top-[25px] -left-[130px]  flex-col  hidden mb-6 group-hover:flex border-gray-200 border text-left min-w-[250px] max-w-[300px] py-3 px-4 bg-white shadow-sm">
                          <span v-if="product.freeShippingType" class="text-[14px] block pb-2 text-firoza font-medium">{{
                            getShippingType(product.freeShippingType) }}</span>

                          <div v-if="product.freeShippingLocation && product.freeShippingType === 'WITHIN_CITY'"
                            class="text-gray-400 text-[13px]">{{ product.freeShippingLocation }}</div>
                          <!-- <div class="w-3 h-3 -mt-2 rotate-45 bg-white absolute right-[10%] top-[2px] border border-gray-200"></div> -->
                        </div>
                      </span>

                    </div>

                    <div v-if="product.returnable"
                      class="flex items-center mr-10 float-left mb-4 h-[24px] return-policyh">
                      <svg width="20" height="18" class="mr-3" viewBox="0 0 24 22" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M6.84853 2.24872C7.31716 1.78009 7.31716 1.0203 6.84853 0.551667C6.3799 0.0830381 5.6201 0.0830381 5.15147 0.551667L0.351631 5.35151C0.351578 5.35156 0.351525 5.35161 0.351472 5.35167C0.134315 5.56883 0 5.86883 0 6.2002C0 6.3629 0.0323825 6.51805 0.0910545 6.65954C0.149614 6.80107 0.23642 6.93367 0.351472 7.04872L5.15147 11.8487C5.6201 12.3174 6.3799 12.3174 6.84853 11.8487C7.31716 11.3801 7.31716 10.6203 6.84853 10.1517L4.09706 7.4002H18C18.9548 7.4002 19.8705 7.77948 20.5456 8.45461C21.2207 9.12974 21.6 10.0454 21.6 11.0002V13.4002V15.8002C21.6 16.755 21.2207 17.6707 20.5456 18.3458C19.8705 19.0209 18.9548 19.4002 18 19.4002H1.2C0.537259 19.4002 0 19.9375 0 20.6002C0 21.2629 0.537259 21.8002 1.2 21.8002H18C19.5913 21.8002 21.1174 21.1681 22.2426 20.0428C23.3679 18.9176 24 17.3915 24 15.8002V13.4002V11.0002C24 9.4089 23.3679 7.88277 22.2426 6.75756C21.1174 5.63234 19.5913 5.0002 18 5.0002H4.09706L6.84853 2.24872Z"
                          fill="#48CEF3" />
                      </svg>

                      <span class="text-gray-500 text-[15px] font-medium mr-3"> {{ getReturnHeader(product) }}</span>
                      <span class="relative group cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_10312_14820)">
                            <path
                              d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM9.6 5.6C9.6 5.84 9.44 6.24 9.28 6.4L8 7.68C7.52 8.16 7.2 8.96 7.2 9.6V10.4H8.8V9.6C8.8 9.36 8.96 8.96 9.12 8.8L10.4 7.52C10.88 7.04 11.2 6.24 11.2 5.6C11.2 3.84 9.76 2.4 8 2.4C6.24 2.4 4.8 3.84 4.8 5.6H6.4C6.4 4.72 7.12 4 8 4C8.88 4 9.6 4.72 9.6 5.6ZM7.2 12V13.6H8.8V12H7.2Z"
                              fill="#A09E9E" />
                          </g>
                          <defs>
                            <clipPath id="clip0_10312_14820">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>


                        <div v-if="product.returnType === 'RETURN'"
                          class="absolute z-40 top-[25px] -left-[130px]  flex-col  hidden mb-6 group-hover:flex border-gray-200 border text-left min-w-[250px] max-w-[300px] py-3 px-4 bg-white shadow-sm">
                          <span class="text-[14px] block pb-2 text-firoza font-medium">{{
                            getReturnDays(product.withinDays) }}</span>
                          <div class="text-gray-400 text-[13px]">{{ getReturnMessage(product) }}</div>
                          <!-- <div class="w-3 h-3 -mt-2 rotate-45 bg-white absolute right-[10%] top-[2px] border border-gray-200"></div> -->
                        </div>


                        <div v-if="product.returnType === 'RETURN_AND_REPLACE'"
                          class="absolute z-40 top-[25px] -left-[130px]  flex-col  hidden mb-6 group-hover:flex border-gray-200 border text-left min-w-[250px] max-w-[300px] py-3 px-4 bg-white shadow-sm">
                          <span class="text-[14px] block pb-2 text-firoza font-medium">{{
                            getReturnDays(product.withinDays) }}</span>
                          <div class="text-gray-400 text-[13px]">{{ getReturnMessage(product) }}</div>
                          <!-- <div class="w-3 h-3 -mt-2 rotate-45 bg-white absolute right-[10%] top-[2px] border border-gray-200"></div> -->
                        </div>
                      </span>

                    </div>

                    <div v-if="product.cod" class="flex items-center float-left mb-4 cash-delivry">
                      <img src="~/assets/images/cod.png" alt="cod" class="mr-3" />
                      <span class="text-gray-500 text-[15px] font-medium mr-3">{{ $t('codAvailable') }}</span>
                      <span class="relative group cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_10312_14820)">
                            <path
                              d="M8 16C3.6 16 0 12.4 0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16ZM9.6 5.6C9.6 5.84 9.44 6.24 9.28 6.4L8 7.68C7.52 8.16 7.2 8.96 7.2 9.6V10.4H8.8V9.6C8.8 9.36 8.96 8.96 9.12 8.8L10.4 7.52C10.88 7.04 11.2 6.24 11.2 5.6C11.2 3.84 9.76 2.4 8 2.4C6.24 2.4 4.8 3.84 4.8 5.6H6.4C6.4 4.72 7.12 4 8 4C8.88 4 9.6 4.72 9.6 5.6ZM7.2 12V13.6H8.8V12H7.2Z"
                              fill="#A09E9E" />
                          </g>
                          <defs>
                            <clipPath id="clip0_10312_14820">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <div
                          class="absolute z-40 top-[25px] -left-[130px]  flex-col  hidden mb-6 group-hover:flex border-gray-200 border text-left min-w-[250px] max-w-[300px] py-3 px-4 bg-white shadow-sm">
                          <div class="text-gray-400 text-[13px]">{{ getCashOnDeliveryMsg() }}</div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>

                <!--shipping section End here-->
                <div v-if="product.documents.length" class="document-attachment doc-one mb-5">
                  <h4 class="text-base mb-4 font-medium text-gray-700">
                    {{ $t('attachment') }}
                  </h4>

                  <ul class="flex items-center">
                    <li v-for="item in product.documents" :key="item.id" class="mr-4">
                      <a href="#" class="
                            flex flex-wrap
                            items-center p-2 text-xsb text-gray-500
                            pl-0
                            transition
                            relative
                            hover:text-green
                          " @click="preViewFile(item)">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="hh">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5 4C5 3.44772 5.44772 3 6 3H13V6C13 7.65685 14.3431 9 16 9H19V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4ZM17.5858 7L15 4.41421V6C15 6.55228 15.4477 7 16 7H17.5858ZM6 1C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V8C21 7.73478 20.8946 7.48043 20.7071 7.29289L14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H6ZM7 9C7 8.44772 7.44772 8 8 8H10C10.5523 8 11 8.44772 11 9C11 9.55229 10.5523 10 10 10H8C7.44772 10 7 9.55229 7 9ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16H8Z"
                            fill="#8CAEC5" />
                        </svg>
                        <span class="pl-2"> {{ item.orgName | truncate(15, '...') }}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>


              <div v-show="shownotOwnersIcon && loading" class="py-6 flex justify-left">
                <Spinner />
              </div>

              <div v-if="shownotOwnersIcon && !loading" class="mb-5 px-4 sm:px-4 md:px-0 2xl:px-0">
                <h4 class="text-base mb-4 font-medium text-gray-700">
                  {{ $t('soldBy') }}
                </h4>

                <a>
                  <div class="flex items-start user-iffom-rating flex-col ">

                    <div class="w-full flex justify-between">
                      <a :href="localePath(getLink(product.user.identityId))" class="flex items-center cursor-pointer">
                        <div class="h-9 w-9 bg-gray-200 flex items-center justify-center rounded-full mr-5 relative">
                          <ProfileAvatar :image-url="product.user.imageUrl" />

                          <span v-if="userStatus && userStatus === 'online'"
                            class="w-2.5 h-2.5 bg-green block absolute left-0 bottom-1 rounded-full border-2 border-white" />
                        </div>
                        <div class="text-sm text-gray-600 font-medium mr-12">
                          {{ product.user.name }}
                          <span class="text-xs block font-normal">{{ userStatus }}</span>
                        </div>
                      </a>

                      <follow :identityId="product.user.identityId" />
                      <!-- <a href="#" class="text-center flex items-center justify-center py-1 h-[31px] rounded-sm text-sm px-4 text-firoza border-firoza border mb-0 hover:bg-firoza hover:text-white transition-all hg-follw" >
                     <span>Follow</span>  </a> -->

                    </div>

                    <!-- <div class="text-gray-600 text-sm flex">
                        <svg v-if="product.user.averageRating" width="18" height="18" viewBox="0 0 22 22" fill="none" >
                          <path fill-rule="evenodd"  clip-rule="evenodd"  d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z"
                            fill="#FF9500" />
                        </svg>

                        <svg v-if="!product.user.averageRating" width="18" height="18" viewBox="0 0 22 22" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9053 1.51093C11.7509 1.19807 11.4323 1 11.0834 1C10.7345 1 10.4158 1.19807 10.2614 1.51093L7.64195 6.81759L1.78412 7.67381C1.43894 7.72426 1.15231 7.96626 1.04472 8.2981C0.937122 8.62994 1.02721 8.99409 1.27711 9.2375L5.51505 13.3653L4.51489 19.1967C4.4559 19.5406 4.59729 19.8882 4.8796 20.0933C5.16192 20.2984 5.53618 20.3254 5.84502 20.163L11.0834 17.4082L16.3217 20.163C16.6305 20.3254 17.0048 20.2984 17.2871 20.0933C17.5694 19.8882 17.7108 19.5406 17.6518 19.1967L16.6517 13.3653L20.8896 9.2375C21.1395 8.99409 21.2296 8.62994 21.122 8.2981C21.0144 7.96626 20.7278 7.72426 20.3826 7.67381L14.5248 6.81759L11.9053 1.51093Z" fill="#A5A3A1" />
                        </svg>

                        <span v-if="product.user.averageRating" class="pl-3 font-medium">{{
                          product.user.averageRating
                        }}</span>
                        <span v-else class="pl-3 font-medium">{{ $t('noRating') }}</span>
                      </div>  -->

                    <div
                      class="w-full flex items-center justify-evenly border border-gray-200 rounded-sm py-1.5 mt-3 hgy-rw">
                      <div v-if="activeOfferCount !== null"
                        class="flex items-center pr-1 text-[11px] sm:text-[12px] sm:pr-0 md:text-[12px] md:pr-0 mr-0 text-gray-500 relative">
                        <svg width="20" height="17" viewBox="0 0 24 21" fill="none">
                          <g clip-path="url(#clip0_1310_4225)">
                            <path
                              d="M8.30151 15.0428L7.36686 13.751L5.39335 14.053L7.98882 10.1318H2.92773V20.4443H11.5514V10.1318L8.30151 15.0428Z"
                              fill="#888a8f"></path>
                            <path
                              d="M22.4953 5.21082H16.7687C17.1036 5.06381 17.4026 4.91025 17.6675 4.74723C18.6858 4.12571 19.2266 3.33827 19.2249 2.55665C19.2249 1.91548 18.8686 0.997042 18.3509 0.614236C17.8323 0.227063 17.1446 0 16.4107 0C15.6264 0 14.8977 0.229247 14.2732 0.585853C13.3343 1.12149 12.5995 2.28155 12.0758 3.16652C12.0493 3.21091 12.0229 3.25385 11.9972 3.29679C11.8059 2.95546 11.582 2.27209 11.3283 1.96061C10.884 1.4206 10.3501 0.943187 9.72298 0.585853C9.10017 0.229247 8.37228 0 7.58885 0C6.80799 0.0021833 6.09291 0.280918 5.55809 0.711029C5.02584 1.13677 4.65335 2.09524 4.64993 2.78007C4.64652 3.17962 4.78321 3.59808 5.066 3.97871C5.4214 4.45539 5.98441 4.87095 6.76185 5.21082H1.48975L1.50171 9.31179H11.4017V5.21082H12.6081V9.31179H22.5098L22.4953 5.21082ZM7.10359 3.92849C6.70632 3.71453 6.46198 3.49983 6.31845 3.30698C6.1792 3.11557 6.1305 2.77934 6.1305 2.61414C6.12708 2.33832 6.28855 1.85435 6.57561 1.62729C6.85583 1.3995 7.23686 1.25904 7.5786 1.25904H7.58885C8.02883 1.26195 8.46454 1.38712 8.90367 1.63384C9.55724 2.00136 10.1732 3.00059 10.6012 3.73272C10.8251 4.10534 10.9959 4.49469 11.1113 4.87531C9.12836 4.70065 7.84686 4.32803 7.10359 3.92849ZM13.881 3.03697C14.2381 2.60104 14.6593 1.88201 15.0959 1.63384C15.5299 1.38712 15.9707 1.26195 16.4107 1.25904H16.415C16.7815 1.25904 17.1343 1.3813 17.3744 1.56252C17.6153 1.74664 17.7443 2.0836 17.7443 2.32085C17.7392 2.60104 17.5692 3.24584 16.8012 3.72399C16.0724 4.17666 14.8071 4.64025 12.8618 4.96483C13.0455 4.30766 13.4052 3.61191 13.881 3.03697Z"
                              fill="#888a8f"></path>
                            <path
                              d="M18.6168 14.0363L16.6441 13.751L15.7129 15.0581L12.5049 10.1981V20.4443H21.085V10.1318H16.0239L18.6168 14.0363Z"
                              fill="#888a8f"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_1310_4225">
                              <rect width="24" height="20.4444" fill="#888a8f"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                        <span class="ml-1 mr-1 sm:ml-3 md:ml-3">{{ activeOfferCount }} </span> <span> {{ $t('listing')
                        }}</span> <span v-if="activeOfferCount > 1 && checklang()">s</span>
                      </div>
                      <div v-if="closeDealCount !== null"
                        class="flex items-center pr-1 text-[11px] sm:text-[12px] sm:pr-0 md:text-[12px] md:pr-0 mr-0 text-gray-500 relative">
                        <svg width="24" height="16" viewBox="0 0 25 16" fill="none">
                          <path d="M0 12.5V2.625V2.5H3.75V11.5C3.75 12.1 3.25 12.4167 3 12.5H0Z" fill="#48CEF3"></path>
                          <path d="M25 12.5V2.625V2.5H21.25V11.5C21.25 12.1 21.75 12.4167 22 12.5H25Z" fill="#48CEF3">
                          </path>
                          <path
                            d="M4.875 2.25L7.625 0H11.125C10.875 0.25 10 1.1 8.5 2.5C6.25 4.75 7.625 6.375 8 7C9.9 8.9 12.2083 7.125 13.125 6C14.4583 7.125 17.55 9.775 19.25 11.375C19.25 14.25 16.875 12.875 16.625 13.125C14.625 16.5 13 14.125 12.625 14.125C11.925 15.225 10.4167 15.0833 9.75 14.875L5.625 11H4.875V2.25Z"
                            fill="#48CEF3"></path>
                          <path
                            d="M17.5 0H13C12.1667 0.75 10.125 2.65 8.62501 4.25C8.12501 6.55 9.83334 6.54167 10.75 6.25C11.5 5.58333 13.225 4.075 14.125 3.375C15.025 2.675 15.1667 3.66667 15.125 4.25L14.125 5.25L20 10V2.375L17.5 0Z"
                            fill="#48CEF3"></path>
                          <circle cx="1.64456" cy="10.4446" r="0.986842" fill="#48CEF3"></circle>
                          <circle cx="23.3555" cy="10.4446" r="0.986842" fill="#48CEF3"></circle>
                        </svg>
                        <span class="ml-1 mr-1 sm:ml-3 md:ml-3">{{ closeDealCount }} </span> <span>{{ $t('itemSold') }}
                        </span> <span v-if="closeDealCount > 1 && checklang()">s</span> <span class="pl-1"> {{
                          $t('soldText') }}</span>
                      </div>

                      <div class="text-gray-600 text-[11px] sm:text-[12px] md:text-[12px] flex pr-1 sm:pr-0 md:pr-0">
                        <svg v-if="product.user.averageRating" width="18" height="18" viewBox="0 0 22 22" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z"
                            fill="#FF9500" />
                        </svg>

                        <svg v-if="!product.user.averageRating" width="18" height="18" viewBox="0 0 22 22" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.9053 1.51093C11.7509 1.19807 11.4323 1 11.0834 1C10.7345 1 10.4158 1.19807 10.2614 1.51093L7.64195 6.81759L1.78412 7.67381C1.43894 7.72426 1.15231 7.96626 1.04472 8.2981C0.937122 8.62994 1.02721 8.99409 1.27711 9.2375L5.51505 13.3653L4.51489 19.1967C4.4559 19.5406 4.59729 19.8882 4.8796 20.0933C5.16192 20.2984 5.53618 20.3254 5.84502 20.163L11.0834 17.4082L16.3217 20.163C16.6305 20.3254 17.0048 20.2984 17.2871 20.0933C17.5694 19.8882 17.7108 19.5406 17.6518 19.1967L16.6517 13.3653L20.8896 9.2375C21.1395 8.99409 21.2296 8.62994 21.122 8.2981C21.0144 7.96626 20.7278 7.72426 20.3826 7.67381L14.5248 6.81759L11.9053 1.51093Z"
                            fill="#A5A3A1" />
                        </svg>

                        <span v-if="product.user.averageRating" class="pl-1 font-medium sm:pl-3 md:pl-3">{{
                          product.user.averageRating
                        }}</span>
                        <span v-else
                          class="pl-1 font-medium hidden sm:block sm:pl-3 md:block md:pl-3 lg:block xl:block 2xl:block">{{
                            $t('noRating') }}</span>
                      </div>

                      <div v-show="product.user.followerCount"
                        class="flex items-center pr-1 text-[11px] sm:text-[12px] sm:pr-0 md:text-[12px] md:pr-0 mr-0 text-gray-500 relative">
                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M15.9374 6.42856H13.8124V4.28571H12.7499V6.42856H10.6249V7.49999H12.7499V9.64285H13.8124V7.49999H15.9374V6.42856Z"
                            fill="#888A8F" />
                          <path
                            d="M5.3125 1.07143C6.8 1.07143 7.96875 2.25 7.96875 3.75C7.96875 5.25 6.8 6.42857 5.3125 6.42857C3.825 6.42857 2.65625 5.25 2.65625 3.75C2.65625 2.25 3.825 1.07143 5.3125 1.07143ZM5.3125 0C3.24062 0 1.59375 1.66071 1.59375 3.75C1.59375 5.83928 3.24062 7.5 5.3125 7.5C7.38437 7.5 9.03125 5.83928 9.03125 3.75C9.03125 1.66071 7.38437 0 5.3125 0Z"
                            fill="#888A8F" />
                          <path
                            d="M10.625 15H9.5625V12.3214C9.5625 10.8214 8.39375 9.64284 6.90625 9.64284H3.71875C2.23125 9.64284 1.0625 10.8214 1.0625 12.3214V15H0V12.3214C0 10.2321 1.64687 8.57141 3.71875 8.57141H6.90625C8.97812 8.57141 10.625 10.2321 10.625 12.3214V15Z"
                            fill="#888A8F" />
                        </svg>
                        <span class="ml-1 mr-1 sm:ml-3 md:ml-3">{{ product.user.followerCount }} </span> <span>{{
                          $t('followers') }} </span>
                      </div>
                    </div>


                  </div>
                </a>






                <!-- </nuxt-link> -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <client-only>
        <questions-answer v-if="isLoggedIn && !isLisitngBlocked && !checkIfUserBlocked" :user-id="product.user.identityId" :shownot-owners-icon="shownotOwnersIcon"
          :user-det="product.user" :offer-id="offerId" />
      </client-only>
      <!--Similar listings from same user-->
      <SimilarListings v-if="offerId && shownotOwnersIcon" :offer-id="offerId" />
      <!--other listings from same user-->
      <client-only>
        <UserAllListing v-if="userdetails.identityId && shownotOwnersIcon && offerId" :userdetails="userdetails"
          :offerId="offerId" class="border-t-2 border-gray-200   md:border-0" />
      </client-only>
      <!--Modal to report Listing-->

      <!--User Deals-->
      <client-only>
        <UserDeals v-if="offerId && showOwnersIcon" :offer-id="offerId" @isOfferInitiated="isOfferInitiated"
          class="deal-money-card" />
      </client-only>
      <!--User Deals-->

      <!--Potential listings from same user-->
      <!-- <client-only>
          <PotentialMatches v-if="offerId && showOwnersIcon" :offer-id="offerId" />
        </client-only> -->
      <!--End Of potential Listing-->

      <div v-if="showmodal" class="container">
        <ReportListing ref="modal" :showmodal="showmodal" :offer-id="offerId" @reportSuccess="reportSuccess" />
      </div>
      <!-- End Of Modal  report Listing-->

      <div v-if="showBlockmodal" class="container">
        <BlockListing ref="modal" :showBlockPopup="showBlockmodal" :productDet="product" @blockSuccess="blockSuccess"
          @closeBlockModal="closeBlockModal" />
      </div>
      <!-- End Of Modal  block Listing-->

      <div v-if="showUnblockPopup" class="container">
        <UnblockListing ref="modal" :showUnblockPopup="showUnblockPopup" :productDet="product"
          @unblockSuccess="unblockSuccess" @closeUnblockModal="closeUnblockModal" />
      </div>
      <!-- End Of Modal  block Listing-->

      <!--Start of Modal to Delete Listing-->
      <div v-if="showdeletemodal" class="container">
        <DeleteListing ref="modal" :deleted-item-details="deletedItemDetails" />
      </div>
      <!--End of Modal to delete Listing-->

      <!--Start of Modal to hide Listing-->
      <div v-if="showhidelistingmodal" class="container">
        <HideListing ref="modal" :hiding-item-details="hidingItemDetails" />
      </div>
      <!--End of Modal to hide Listing-->

      <client-only>
        <carousel v-if="showCaurosel" :show-caurosel="showCaurosel" :selected-image-index="selectedImageIndex"
          :listing-images="listingImages" @closeCarsouselModal="closeCarsouselModal" />
      </client-only>
      <!--footer section goes here-->
      <Footer class="pencil" />

      <div v-show="showPotentialMatches" @click="showPotentialMatches = !showPotentialMatches"
        class="fixed bg-black bg-opacity-40 top-0 w-full   z-50 left-0 h-full"></div>
      <div class="bg-white p-4 w-[520px] h-screen overflow-auto auto-scroll fixed top-0 right-0 z-50"
        v-show="showPotentialMatches">
        <!-- <h2>Matches</h2> -->
        <button @click="showPotentialMatches = !showPotentialMatches"
          class=" z-30 absolute cursor-pointer top-3 right-3 text-gray-400 hover:text-gray-500   w-[32px] h-[32px] text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            aria-hidden="true" class="h-6 w-6 mx-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg></button>
        <div>
          <client-only>
            <PotentialMatches v-if="offerId && showOwnersIcon" :offer-id="offerId" />
          </client-only>
        </div>
      </div>

      <!--//////////////////////Buy Now Modal/////////////////////-->
      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="relative z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <!--
        Background backdrop, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100"
          To: "opacity-0"
      -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          -->
            <div
              class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-[400px] sm:w-full sm:p-6">
              <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button type="button"
                  class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="sr-only">Close</span>
                  <!-- Heroicon name: outline/x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div>
                <div class="flex justify-center text-center">
                  <img src="~/assets/images/gintaa-rupees-new-symbol.svg" alt="gintaa-rupees" class="w-[150px]" />
                </div>

                <div class="mt-3 text-center sm:mt-5">
                  <!-- <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Payment successful</h3> -->
                  <div class="text-gray-600 text-base font-medium py-4 w-full">
                    You will pay cash to the seller. Lorem ipsum dolar sit type setting
                  </div>
                  <div class="mt-2">
                    <div class="w-full flex flex-col mt-5">
                      <div class="flex flex-col justify-start text-left">
                        <div class="flex">
                          <div class="flex-shrink-0">
                            <div class="text-sm font-medium text-gray-900">
                              <img src="~/assets/images/perform_exchange.svg" alt="perform_exchange"
                                class="w-[55px] mr-2" />
                              <!-- {{$t('deliveryPreference')}} : -->

                            </div>
                          </div>
                          <div class="ml-3">
                            <div class="text-sm  text-gray-900 font-medium pb-1">{{ $t('personalMeeting') }} </div>
                            <div class="text-xs font-normal text-gray-500">{{ $t('personalMeetingPara') }}</div>

                          </div>
                        </div>
                        <div class="text-xs text-gray-500 pt-3 flex border-t border-gray-200 mt-2 relative">
                          <svg width="24" height="20" viewBox="0 0 24 20" class="mr-4" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd"
                              d="M1 0C0.447715 0 0 0.447715 0 1V14C0 14.5523 0.447715 15 1 15H2.33682C2.12085 15.4546 2 15.9632 2 16.5C2 18.433 3.567 20 5.5 20C7.433 20 9 18.433 9 16.5C9 15.9632 8.87915 15.4546 8.66318 15H15.3368C15.1208 15.4546 15 15.9632 15 16.5C15 18.433 16.567 20 18.5 20C20.433 20 22 18.433 22 16.5C22 15.9632 21.8792 15.4546 21.6632 15H23C23.5523 15 24 14.5523 24 14V9C24 8.73478 23.8946 8.48043 23.7071 8.29289L20.7071 5.29289C20.5196 5.10536 20.2652 5 20 5H17V1C17 0.447715 16.5523 0 16 0H1ZM18.5 13H22V9.41421L19.5858 7H17V13H18.5ZM18.5 15C17.6716 15 17 15.6716 17 16.5C17 17.3284 17.6716 18 18.5 18C19.3284 18 20 17.3284 20 16.5C20 15.6716 19.3284 15 18.5 15ZM4 16.5C4 15.6716 4.67157 15 5.5 15C6.32843 15 7 15.6716 7 16.5C7 17.3284 6.32843 18 5.5 18C4.67157 18 4 17.3284 4 16.5ZM15 13H5.5H2V2H15V6V13Z"
                              fill="black" />
                          </svg>

                          {{ $t('shiprockMsg') }}
                        </div>

                      </div>

                    </div>
                    <!-- <p class="text-sm text-gray-500 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p> -->
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button type="button"
                  class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-4 bg-firoza text-base font-medium text-white  focus:outline-none  sm:text-sm">Proceed</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--contact details modal-->
      <!-- This example requires Tailwind CSS v2.0+ -->
      <edit-listing v-if="editLisitngModal" :productDetails="product" @cancelEdit="cancelEdit"
        @editSuccess="editSuccess"></edit-listing>
      <div v-if="showContactDets" class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
              From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
              From: "opacity-100 translate-y-0 sm:scale-100"
              To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          -->
            <div
              class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
              <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button @click="closeContactModal" type="button"
                  class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="sr-only">Close</span>
                  <!-- Heroicon name: outline/x -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">{{ $t('p_call') }}</h3>
                <div class="mt-4">

                  <div class="pl-12 relative border-b border-gray-200 pb-3 mb-3">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                      class="absolute left-0 top-2">
                      <path
                        d="M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7428 21.5857 13.7869 20.5342 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.49991 10.2413 2.44818 7.27109 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23656 4.68016 9.47138 5.62282 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3772 14.5286 19.3199 14.7635 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z"
                        stroke="#8CAEC5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <div class="pb-1">{{ $t('sellersMobile') }}</div>
                    <div><span class="text-firoza font-bold text-sm">+91</span><a href="javascript:void(0)"
                        class="text-firoza font-bold text-sm cursor-default">{{ getMobileNo(product) }}</a></div>
                  </div>

                  <div>
                    <div class="w-full text-[17px] text-gray-900 font-bold mb-5 ">{{ $t('howDoWeExchange') }}</div>
                    <nav aria-label="Progress">
                      <ol role="list" class="overflow-hidden">


                        <li class="relative pb-8">
                          <div
                            class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full border border-dashed border-1 border-gray-300"
                            aria-hidden="true"></div>
                          <div class="relative flex items-start group">
                            <span class="h-8 flex items-center bg-white">
                              <span
                                class="relative z-10 w-7 h-7 flex items-center justify-center bg-transparent text-green text-sm border-2 border-green rounded font-medium">01</span>
                            </span>
                            <span class="ml-4 min-w-0 flex flex-col mt-0">
                              <span class="text-sm font-medium tracking-wide text-gray-600 pb-2">{{
                                $t('makeOfferandNegotiate') }}</span>
                              <span class="text-xs text-gray-500">{{ $t('likeTheProduct') }}</span>
                            </span>
                          </div>
                        </li>


                        <li class="relative pb-8">
                          <div
                            class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full border border-dashed border-1 border-gray-300"
                            aria-hidden="true"></div>
                          <div class="relative flex items-start group">
                            <span class="h-8 flex items-center bg-white">
                              <span
                                class="relative z-10 w-7 h-7 flex items-center justify-center bg-transparent text-green text-sm border-2 border-green rounded font-medium">02</span>
                            </span>
                            <span class="ml-4 min-w-0 flex flex-col mt-0">
                              <span class="text-sm font-medium tracking-wide text-gray-600 pb-2">{{ $t('acceptOrReject')
                              }}</span>
                              <span class="text-xs text-gray-500">{{ $t('acceptOrRejectMsg') }}</span>
                            </span>
                          </div>
                        </li>


                        <li class="relative pb-8">
                          <div
                            class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full border border-dashed border-1 border-gray-300"
                            aria-hidden="true"></div>
                          <div class="relative flex items-start group">
                            <span class="h-8 flex items-center bg-white">
                              <span
                                class="relative z-10 w-7 h-7 flex items-center justify-center bg-transparent text-green text-sm border-2 border-green rounded font-medium">03</span>
                            </span>
                            <span class="ml-4 min-w-0 flex flex-col mt-0">
                              <span class="text-sm font-medium tracking-wide text-gray-600 pb-2">{{ $t('buySellExchnage')
                              }}</span>
                              <span class="text-xs text-gray-500">{{ $t('buySellExchnagemsg') }}</span>
                            </span>
                          </div>
                        </li>



                        <li class="relative pb-8">
                          <div
                            class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full border border-dashed border-1 border-gray-300"
                            aria-hidden="true"></div>
                          <div class="relative flex items-start group">
                            <span class="h-8 flex items-center bg-white">
                              <span
                                class="relative z-10 w-7 h-7 flex items-center justify-center bg-transparent text-green text-sm border-2 border-green rounded font-medium">04</span>
                            </span>
                            <span class="ml-4 min-w-0 flex flex-col mt-0">
                              <span class="text-sm font-medium tracking-wide text-gray-600 pb-2">{{ $t('meetandGreet')
                              }}</span>
                              <span class="text-xs text-gray-500">{{ $t('meetandGreetmsg') }}</span>
                            </span>
                          </div>
                        </li>



                        <li class="relative pb-8">

                          <div class="relative flex items-start group">
                            <span class="h-8 flex items-center bg-white">
                              <span
                                class="relative z-10 w-7 h-7 flex items-center justify-center bg-transparent text-green text-sm border-2 border-green rounded font-medium">05</span>
                            </span>
                            <span class="ml-4 min-w-0 flex flex-col mt-0">
                              <span class="text-sm font-medium tracking-wide text-gray-600 pb-2">{{ $t('closeOffer')
                              }}</span>
                              <span class="text-xs text-gray-500">{{ $t('closeOffermsg') }}</span>
                            </span>
                          </div>
                        </li>





                      </ol>
                    </nav>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- For Mark As Sold -->

      <div v-if="showMarkAssoldPopUp" class="fixed  bg-gray-800/[.5] z-50 inset-0 overflow-y-hidden" id="delete-modals"
        aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end mt-5 pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class=" inline-block  bg-white rounded-lg text-left shadow-xl transform transition-all
              align-middle max-w-md w-full pt-3">
            <button type="button" v-on:click="closeMarkAsSoldPopUp()" id="close-btns" class="absolute z-40 top-0 right-0 inline-flex
                rounded-md border border-transparent px-4 py-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                  fill="black" fill-opacity="0.3" />
              </svg>
            </button>

            <div class="flex flex-col w-full px-6">
              <h1 class="text-base text-gray-900 font-normal"> Confirmation</h1>
            </div>

            <div class="w-full flex justify-center items-center pt-3 px-6">
              <div class=" user-profile relative bg-gray-100 rounded-full w-32 h-32">
                <img class="rounded-full w-32 h-32" :src="filterCoverImage(product.images)" alt="iamges" />
              </div>
            </div>

            <div class="w-full flex items-center justify-center mt-10">
              <div class="rounded-full border border-dotted border-gray-600 w-16 h-16 flex justify-center
                items-center">
                <svg width="40" height="40" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M41.984 37.4384C32.9349 39.8631 23.9165 42.3342 14.8446 44.6739C12.2546 45.3496 11.3783 47.5903 12.0308 49.549C12.3769 50.5686 12.6085 51.6371 12.8742 52.6965C13.1489 53.79 12.6554 54.6699 11.6133 54.9309C10.6222 55.1782 9.75946 54.6799 9.47681 53.6251C9.0574 52.0598 8.49735 50.514 8.31274 48.9405C7.89303 45.333 10.1103 42.3136 13.7321 41.2702C15.1223 40.8795 16.5001 40.5103 17.8994 40.1536C18.3077 40.0442 18.5433 39.8352 18.738 39.473C22.2344 32.5185 25.7353 25.581 29.2408 18.6606C29.4434 18.2598 29.4418 17.9138 29.3664 17.4963C28.6861 14.141 30.4899 10.6671 33.4775 9.50184C36.8641 8.19321 40.3775 9.33062 42.2053 12.342C42.4247 12.6844 42.6872 13.0517 42.7365 13.4397C42.893 14.3642 43.5367 14.7935 44.2236 15.2477C50.5165 19.3421 56.7969 23.4581 63.0818 27.5911C63.4622 27.8539 63.7957 27.8739 64.2209 27.76C65.9775 27.3076 67.71 26.6975 69.5212 26.4492C72.9135 25.9779 76.2727 28.1048 77.1526 31.3885C79.9277 41.6772 82.6857 51.9706 85.4268 62.2684C86.3431 65.6882 84.0975 69.554 80.6922 70.5212C78.7112 71.0884 76.7336 71.6001 74.7389 72.1164C73.6503 72.4081 72.7149 71.911 72.4335 70.9288C72.1475 69.9295 72.7215 69.0099 73.8611 68.7045C75.6131 68.2351 77.3821 67.7611 79.1341 67.2916C81.4088 66.6639 82.4592 64.8689 81.8654 62.5845C79.2076 52.6655 76.5498 42.7465 73.8874 32.8104C73.2811 30.5476 71.5341 29.5387 69.2548 30.1494C60.1796 32.5446 51.0841 35 41.984 37.4384ZM23.1371 38.6772C35.1289 35.464 46.9845 32.2873 58.9592 29.0787C53.629 25.5834 48.3988 22.1889 43.1935 18.7514C42.6622 18.4014 42.6434 18.8076 42.4815 19.088C40.4014 22.8913 36.115 24.0398 32.4243 21.7646C31.9237 21.4611 31.7922 21.5146 31.5398 22.0016C30.4536 24.2073 29.3289 26.4052 28.2041 28.603C26.5306 31.9509 24.865 35.2601 23.1371 38.6772ZM37.1321 19.2631C38.9646 18.7539 40.0682 16.817 39.5464 15.0057C39.0154 13.1603 37.1481 12.1106 35.2646 12.6336C33.4662 13.1337 32.3999 15.0058 32.8707 16.8309C33.3801 18.6638 35.2997 19.7724 37.1321 19.2631Z"
                    fill="#a3acb9" stroke="#a3acb9" stroke-width="2"></path>
                  <path
                    d="M46.1252 79.765C39.2364 81.6109 32.3475 83.4568 25.4587 85.3026C21.4274 86.3828 17.6961 84.2279 16.6202 80.2127C14.9015 73.7985 13.1874 67.4013 11.4687 60.9871C11.1587 59.8302 11.5456 58.9607 12.5139 58.6283C13.5627 58.2561 14.5287 58.7996 14.8433 59.9735C15.8143 63.5975 16.7899 67.2384 17.7609 70.8623C18.4995 73.6185 19.2334 76.3578 19.972 79.114C20.5965 81.4449 22.4037 82.4742 24.751 81.8452C38.5457 78.1489 52.3575 74.4481 66.1522 70.7518C66.5094 70.6561 66.8699 70.5048 67.2636 70.5452C68.068 70.6214 68.7925 71.2843 68.8865 72.0432C69.0045 72.9599 68.4758 73.7762 67.5402 74.0269C64.0919 74.9691 60.6174 75.8819 57.1644 76.8071C53.4904 77.7916 49.8163 78.776 46.1252 79.765Z"
                    fill="#a3acb9" stroke="#a3acb9" stroke-width="2"></path>
                  <path
                    d="M44.8183 67.0242L35.3282 61.5435C34.8968 61.2944 34.7418 60.7159 34.9909 60.2845L35.9122 58.6882C36.1612 58.2568 36.7395 58.1018 37.1709 58.351L44.2669 62.449L52.8703 47.5431C53.1194 47.1117 53.6977 46.9568 54.1291 47.2059L55.7251 48.1276C56.1565 48.3767 56.3115 48.9552 56.0625 49.3866L46.0894 66.6654C45.811 67.1229 45.2497 67.2733 44.8183 67.0242Z"
                    fill="#a3acb9" stroke="#a3acb9" stroke-width="2"></path>
                </svg>
              </div>
            </div>

            <div class="flex flex-col w-full px-6 mt-5 text-center">
              <h1 class="text-base text-gray-900 font-normal">{{ $t('soldOutconfirmation') }}</h1>
            </div>

            <div class="w-full flex items-center justify-between mt-10 px-6 bg-gray-50 py-1
                rounded-br-lg rounded-bl-lg">
              <button v-on:click="closeMarkAsSoldPopUp()" type="submit" class="flex items-center
                  justify-center text-center mr-6 py-1  h-12 rounded border-0 border-gray-300
                  text-sm font-bold text-gray-400 w-full">
                <span>{{ $t('cancel') }} </span>
              </button>
              <button :disabled="markAsSoldLoading"
                :class="[markAsSoldLoading ? '' : 'bg-firoza flex justify-center text-white font-bold py-2  h-12 rounded w-full text-sm ']"
                v-on:click="markToSold()" type="submit" class="transition-all w-full flex justify-center ml-3 items-center border border-firoza
                bg-firoza py-2 rounded font-normal text-sm text-white">
                <span v-show="!markAsSoldLoading">{{ $t('markAsSold') }} </span>
                <Spinner v-show="markAsSoldLoading" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- share listing start  -->

      <!--start new modal share listing -->
      <div v-if="showShareandFeatureOptions" class="relative z-50 " aria-labelledby="modal-title" role="dialog"
        aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[750px] sell-faster-bg">
              <a @click="skipShareandFeatureOptions()"
                class=" cursor-pointer  absolute top-3 right-2 text-[11px] text-gray-500 border border-gray-400 rounded px-1 py-0">{{
                  $t('skip') }}</a>
              <div
                class="w-full flex flex-row items-center justify-center px-4 relative mt-[180px] mb-2 sm:mt-[344px] md:mt-[344px] title-mtop">
                <div class="text-sm text-[#787878]">{{ $t('listingPublished') }}</div>
              </div>
              <div
                class="flex flex-col px-4 sm:flex-row sm:px-8 sm:border-t md:px-8 md:flex-row md:border-t border-t-0 border-gray-300 ">
                <div class="basis-full sm:basis-1/2 sm:border-r md:basis-1/2 md:border-r border-r-0 border-gray-300 py-3">
                  <div class="text-sm text-[#838383] font-medium mb-2">{{ $t('shareLisitng') }}</div>
                  <div class="relative sharel-owrite">
                    <SharingOpt :current-url="currentUrl" :show-sahre-modal="true" @closeShareModal="closeShareModal" />
                  </div>
                </div>
                <div class="basis-full pl-0 sm:pl-8 sm:basis-1/2 md:pl-8 md:basis-1/2 py-3 ">
                  <div class="text-sm text-[#838383] font-medium">{{ $t('sellFaster') }}</div>
                  <div class="text-[11px] text-[#626365] mt-1">{{ $t('sellFasterPara') }}</div>
                  <div class="mt-5 sm:mt-4 flex justify-end">
                    <a href="javascript:;" @click="sellFaster()" type="button"
                      class="flex justify-center items-center px-4 py-2 bg-green text-sm text-white rounded">
                      <img src="~/assets/images/dec-home/flash-sale-blue.svg" alt="image" />
                      <span class="ml-2">{{ $t('sellFaster') }}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end new modal share listing -->


      <!-- Start initiate offer success popup -->
      <div v-if="showProceedToBuyWithCoinPopup" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title"
        role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div
            class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div @click="hideProceedToBuyPopup()" class="absolute right-5 top-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#000000">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div>
              <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-lightgreen">
                <!-- Heroicon name: outline/check -->
                <svg width="18" class="w-6 h-6" height="13" viewBox="0 0 18 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z"
                    fill="#8BC63E" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-5">
                <h3 id="modal-title" class="text-lg leading-6 font-medium text-gray-900">
                  This is a non-negotiable offer. Do you still want to proceed?
                </h3>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">

              <client-only>
                <a href="javascript:;"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-greendark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greendark  sm:w-full sm:text-sm"
                  @click="showMobileShareConfirmationPopup(), hideProceedToBuyPopup()">
                  {{ $t('proceedBtn') }}
                </a>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <!-- End initiate offer success popup -->

      <!-- Start Share mobile number confirmation popup -->
      <div v-if="showShareMobileConfirmPopup" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title"
        role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div
            class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[300px] md:w-[400px] sm:p-6">
            <div @click="forcelosePopup()" class="absolute right-2 top-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#000000">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div>
              <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-lightgreen">
                <!-- Heroicon name: outline/check -->
                <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M2.5 3.75C2.5 3.05964 3.05964 2.5 3.75 2.5H16.25C16.9404 2.5 17.5 3.05964 17.5 3.75V23.75C17.5 24.4404 16.9404 25 16.25 25H3.75C3.05964 25 2.5 24.4404 2.5 23.75V3.75ZM3.75 0C1.67893 0 0 1.67893 0 3.75V23.75C0 25.8211 1.67893 27.5 3.75 27.5H16.25C18.3211 27.5 20 25.8211 20 23.75V3.75C20 1.67893 18.3211 0 16.25 0H3.75ZM10 20C9.30964 20 8.75 20.5596 8.75 21.25C8.75 21.9404 9.30964 22.5 10 22.5H10.0125C10.7029 22.5 11.2625 21.9404 11.2625 21.25C11.2625 20.5596 10.7029 20 10.0125 20H10Z"
                    fill="#8BC63E" />
                </svg>

              </div>
              <div class="mt-3 mb-3 md:mb-1 text-center sm:mt-5">
                <h3 class="text-sm md:text-lg leading-6 font-medium text-gray-900">{{ $t('UserShareMobNum') }}</h3>
              </div>

              <div class="mt-3  sm:mt-5">
                <div class="relative z-0 w-full mb-8 pl-[55px] mobile-addnums">
                  <div :class="!initiatorAgreedShareContact ? 'opacity-50' : ''"
                    class="absolute pb-2 font-normal  border-b border-gray-200 text-sm text-gray-600 left-0 -top-[12px] pr-3">
                    <span class="block text-[10px] text-gray-400 pb-1">{{ $t('code') }}</span> +91
                  </div>
                  <div :class="!initiatorAgreedShareContact ? 'opacity-50' : ''"
                    class="relative z-0 w-full mobile-addnum">
                    <input type="text" autocomplete="off" placeholder=" " pattern="\d*" id="sharablePhoneNumber"
                      name="sharablePhoneNumber" v-model="initiatorContact" minlength="10" maxlength="10"
                      @keyup="isValidNumber()" @keypress="isNumber($event)"
                      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent text-left border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />

                    <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-xs text-left">{{
                      $t('UserEnterMobNum') }}</label>


                  </div>

                  <div class="flex items-center mobile-checked ml-[-55px]">

                    <div class="items-center flex mt-2">
                      <input id="shareNumberAgreed" name="mobilePrivate" :value="true"
                        v-model="initiatorAgreedShareContact" :disabled="initiatorAgreedShareContactDisabled"
                        type="checkbox" class="h-[14px] w-[14px] border-gray-200 rounded text-firoza focus:ring-firoza">
                      <label for="shareNumberAgreed" class="ml-3 text-[11px] text-gray-500"> {{ $t('checkShareProceed') }}
                      </label>

                    </div>
                  </div>


                </div>
              </div>
            </div>
            <div>

              <div v-if="userAllAddress.length === 0">
                <div class="text-xs text-gray-900 font-medium">{{ $t('addShippingAddress') }}</div>
                <div class="w-full cursor-pointer flex items-center justify-end mt-3">
                  <a @click="openAddAddressPopup({ mode: 'add', addressDet: addressDet })"
                    class="w-[130px] cursor-pointer border border-firoza flex justify-center items-center bg-transparent py-1.5 px-3 rounded  text-firoza font-normal text-sm">
                    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                      <path fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd"></path>
                    </svg>
                    <span>{{ $t('addAddress') }}</span>
                  </a>
                </div>
              </div>

              <div v-show="addressloading" class="py-[2px] flex justify-left">
                <Spinner />
              </div>
              <div v-if="userAllAddress.length > 0" class="w-full select-address">
                <div class="w-full">
                  <div class="text-sm font-medium  text-gray-900 mb-2">{{ $t('selectShippingAddress') }}</div>
                </div>
                <div class="w-full select-addressu">
                  <div class="w-full flex flex-col">
                    <div
                      class="auto-scroll address-list-share overflow-x-hidden overflow-y-auto pr-2 min-h-[120px] max-h-[140px]">
                      <ul v-for="(address, index) in userAllAddress" :key="'address-' + index"
                        class="float-left w-full  py-0 px-0 list-none text-left mt-1 ">
                        <li @click="onSelectAddress(index)"
                          :class="[doorStepDeliveryInfo.deliveryLocationAddressId === address.id ? 'text-firoza bg-gray-100' : '', '']"
                          class="text-sm  px-1 font-normal block w-full bg-transparent text-gray-700 cursor-pointer hover:bg-[##efefef] border border-gray-200">
                          <div class="flex items-start px-2 py-3">
                            <div class="form-check flex items-start">
                              <div class="flex flex-col items-start relative cursor-pointer">
                                <div class="w-full flex items-center pb-2">
                                  <div class="bg-gray-200 rounded-sm h-[16px] flex justify-center items-center px-1">
                                    <div class="text-gray-700 text-[10px] address-type">{{ address.annotation === 'Home' ?
                                      $t('home') : address.annotation === 'Work' ? $t('work') : $t(address.annotation) }}
                                    </div>
                                  </div>
                                </div>
                                <div class="text-[11px]">{{ address.addressLine }} </div>
                                <div class="text-[11px]">{{ getAddressitemDet(address) }}</div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>


                      <div class="w-full float-left cursor-pointer flex items-center justify-end mt-3">
                        <a @click="openAddAddressPopup({ mode: 'add', addressDet: addressDet })"
                          class="w-[130px] cursor-pointer border border-firoza flex justify-center items-center bg-transparent py-1.5 px-3 rounded  text-firoza font-normal text-sm">
                          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                            <path fill-rule="evenodd"
                              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                              clip-rule="evenodd"></path>
                          </svg>
                          <span>{{ $t('addAddress') }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>


            <div class="mt-5 sm:mt-6">

              <client-only>
                <button @click="!isProceedBtnDisable ? initiateOffer() : false"
                  :class="{ 'opacity-40 disabled cursor-not-allowed': isProceedBtnDisable }"
                  class="cursor-pointer  w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-greendark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greendark  sm:w-full sm:text-sm">
                  {{ $t('proceedBtn') }}
                  <Spinner v-show="offerPosting" />
                </button>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <!-- End Share mobile number confirmation popup -->


      <!-- Start initiate offer success popup -->
      <div v-if="success && dealData" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title"
        role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

          <div
            class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
            <div>
              <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-lightgreen">
                <!-- Heroicon name: outline/check -->
                <svg width="18" class="w-6 h-6" height="13" viewBox="0 0 18 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z"
                    fill="#8BC63E" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-5">
                <h3 id="modal-title" class="text-lg leading-6 font-medium text-gray-900">
                  {{ $route.params.suggest_or_revise === 'revise' ? $t('successReviseOffer') : $t('successInitatedOffer')
                  }}
                </h3>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">
              <client-only>
                <a href="javascript:;"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-greendark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greendark  sm:w-full sm:text-sm"
                  @click="goToOfferDetails()">
                  {{ $t('viewOffer') }}
                </a>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <!-- End initiate offer success popup -->


      <!-- Start Show error popup -->
      <div v-show="error" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
        aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div
            class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <!-- Heroicon name: outline/exclamation -->
                <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 id="modal-title" class="text-lg leading-6 font-medium text-gray-900">
                  {{ $t('errorOccured') }}
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ error }}
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button type="button"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                @click="error = null">
                {{ $t('ok') }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Show error popup -->

      <!-- start listing score modal -->
      <div v-if="showHowToImprovePopup" class="relative z-50 " aria-labelledby="modal-title" role="dialog"
        aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div @click="closeModalPopup" class="absolute top-0 right-0  pt-1 pr-1 sm:block">
                <button type="button"
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span class="sr-only">Close</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div class="w-full flex flex-col">
                <div class="w-full flex flex-row">
                  <div class="text-base text-gray-600 font-medium px-3 md:px-0">
                    {{ $t('HowImListScorePara') }}
                  </div>
                </div>
                <div class="w-full mt-2 px-3 md:px-0">
                  <ul class="list-none">
                    <li class="flex items-start mb-2 relative pl-2">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="mt-[5px] absolute top-0 left-0">
                        <rect width="10" height="10" fill="#48CEF3"></rect>
                      </svg>
                      <span class="text-sm text-gray-500 pl-4"> {{ $t('improveImage') }}</span>
                    </li>
                    <li class="flex items-start mb-2 relative pl-2">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="mt-[5px] absolute top-0 left-0">
                        <rect width="10" height="10" fill="#48CEF3"></rect>
                      </svg>
                      <span class="text-sm text-gray-500 pl-4"> {{ $t('improveDes') }}</span>
                    </li>
                    <li class="flex items-start mb-2 relative pl-2">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="mt-[5px] absolute top-0 left-0">
                        <rect width="10" height="10" fill="#48CEF3"></rect>
                      </svg>
                      <span class="text-sm text-gray-500 pl-4"> {{ $t('improveTag') }}</span>
                    </li>
                    <li class="flex items-start mb-2 relative pl-2">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="mt-[5px] absolute top-0 left-0">
                        <rect width="10" height="10" fill="#48CEF3"></rect>
                      </svg>
                      <span class="text-sm text-gray-500 pl-4"> {{ $t('improveReturn') }}</span>
                    </li>
                    <li class="flex items-start mb-2 relative pl-2">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="mt-[5px] absolute top-0 left-0">
                        <rect width="10" height="10" fill="#48CEF3"></rect>
                      </svg>
                      <span class="text-sm text-gray-500 pl-4"> {{ $t('improveShip') }}</span>
                    </li>
                    <li class="flex items-start mb-2 relative pl-2">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="mt-[5px] absolute top-0 left-0">
                        <rect width="10" height="10" fill="#48CEF3"></rect>
                      </svg>
                      <span class="text-sm text-gray-500 pl-4"> {{ $t('improveCod') }}</span>
                    </li>
                  </ul>
                  <p class="text-sm text-gray-600">{{ $t('listScoreBelowPara') }}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- end listing score modal -->

      <GMap v-if="showAddaddressPopup" :editOrAddAddressDetails="editOrAddAddressDetails" />
      <!-- Add coins to your wallet start -->
      <addCoins v-if="showReachargWalletPopup" :returnUrl="returnUrl" :preDefineAmount="deficitAmount"
        :showmodal="showReachargWalletPopup" @closeModal="closeModal" />
      <!-- Add coins to your wallet end -->



    </div>
  </div>
</template>

<script>
import moment from 'moment'
import {
  mapState,
  mapGetters
} from 'vuex'
import carousel from '~/components/carousel.vue'
import Breadcumb from '~/components/Breadcumb.vue'
import SimilarListings from '~/components/SimilarListings.vue'
import UserAllListing from '~/components/UserAllListings.vue'
import QuestionsAnswer from '~/components/QuestionsAnswer.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import Favourite from '~/components/atoms/favourite.vue'
import ProfileAvatar from '~/components/atoms/ProfileAvatar.vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Vue from 'vue'
import ListingError from '~/components/atoms/ListingError.vue'
import Follow from '~/components/atoms/follow.vue'
export default {

  components: {
    Breadcumb,
    carousel,
    SimilarListings,
    UserAllListing,
    QuestionsAnswer,
    Breadcrumb,
    Favourite,
    ProfileAvatar,
    VueToast,
    ListingError

  },

  data() {
    return {
      showReachargWalletPopup: false,
      returnUrl: '',
      showAddaddressPopup: false,
      doorStepDeliveryInfo: { deliveryLocationAddressId: '' },
      isProceedBtnDisable: true,
      editOrAddAddressDetails: {},
      addressDet: {
        id: '',
        addressLine: '',
        lat: 0,
        lng: 0,
        flatNo: '',
        landmark: '',
        area: '',
        annotation: '',
        zip: '',
        city: '',
        state: '',
        country: '',
        name: '',
        email: '',
        phoneNumber: '',
        default: false
      },
      showaddressList: false,
      showHowToImprovePopup: false,
      activeOfferCount: null,
      closeDealCount: null,
      showMarkAssoldPopUp: false,
      editLisitngModal: false,
      showPotentialMatches: false,
      showContactDets: false,
      checkMatchLoading: true,
      loading: true,
      saveForLaterLoading: false,
      markAsSoldLoading: false,
      product: null,
      user: 'abc',
      listing_images: '',
      breadcrumb: [{}],
      viewImage: '',
      offerId: '',
      userdetails: {
        identityId: '',
        name: '',
        gintaaAffiliated: false
      },
      listingStatistics: {
        viewCount: null,
        favouriteCount: null,
        commentCount: null,
        dealCount: null,
        score: null,
      },
      userRating: null,
      showmodal: false,
      showBlockmodal: false,
      showUnblockPopup: false,
      showdeletemodal: false,
      showhidelistingmodal: false,
      btnTitle: '',
      savedLaterBtnTitle: '',
      markAsSoldBtnTitle: '',
      isSavedForLater: false,
      listingImages: {
        images: [{}],
        imageItem: ''
      },
      deletedItemDetails: {
        offerId: '',
        showdeletemodal: '',
        offerImgUrl: '',
        listingName: '',
        user_id: '',
        listing_type: '',
        exchange_mode: '',
        category_id: ''
      },
      hidingItemDetails: {
        offerId: '',
        showhidelistingmodal: '',
        offerImgUrl: '',
        listingName: '',
        listingStaus: ' '
      },
      isListingOwner: false,
      isListingReported: false,
      currentUrl: '',
      referralLink: '',
      showSahreModal: false,
      showOwnersIcon: false,
      shownotOwnersIcon: false,
      isLisitngInitiated: true,
      userStatus: '',
      showCaurosel: false,
      selectedImageIndex: null,
      isUserReported: true,
      yrsCount: '',
      mnthCount: '',
      totalPotentialListings: [{}],
      showViewMatchButton: false,
      showSaveForLaterBtn: false,
      showremoveFromSaveItemBtn: false,
      showNoLisitngPage: false,
      showShareOptions: false,
      showShareandFeatureOptions: false,
      identityId: null,
      // hotListing: false
      error: null,
      offerPosting: false,
      userAllAddress: [],
      addressloading: false,

      showProceedToBuyWithCoinPopup: false,

      showShareMobileConfirmPopup: false,
      initiatorContact: null,
      initiatorAgreedShareContact: false,
      initiatorAgreedShareContactDisabled: true,
      isPhoneNoEsixtsinProfile: false,
      showAddMobilePopup: false,

      deliveryMethod: 'Self',
      dealData: null,
      success: false,
      netavailableReward: null,
      ismakeOfferDisabled: false,
      showRedeemBalanceErrmsg: false,
      hotLisitngviewCount: null,
      hotLisitngdaysDuration: null,
      deficitAmount: null,
      eligibleForFeature: true,
      isLisitngBlocked: false,
      checkIfUserBlocked:true,
      showUserBlockMsg:false,
      isEnableDirectBy: false
    }
  },



  async fetch() {
    this.loading = true
    try {
      const data = await this.$axios.get(`${this.$config.API_BASE}/offers/v1/offers/oid/${this.$route.params.pid}`)
      this.product = data.data.payload
      this.listingImages.images = this.product.images
      this.offerId = this.product.offerId
      this.userdetails.identityId = this.product.user.identityId
      this.userdetails.name = this.product?.user?.name
      this.userdetails.gintaaAffiliated = this.product.user.gintaaAffiliated
      if (this.product.user.averageRating) {
        this.userRating = Math.round(this.product.user.averageRating)
      }
      if (this.product.hidden) {
        this.btnTitle = this.$t('unHideListing')
      } else {
        this.btnTitle = this.$t('hideListing')
      }

      if (!this.product?.savedForLater) {
        this.savedLaterBtnTitle = this.$t('saveForLater')
        this.showSaveForLaterBtn = true
        this.isSavedForLater = false
      } else {
        this.savedLaterBtnTitle = this.$t('removeFromSavedItem')
        this.showremoveFromSaveItemBtn = true
        this.isSavedForLater = true
      }



      if (this.product?.offerStage === 'Published') {
        this.markAsSoldBtnTitle = this.$t('markAsSold')
      }
      this.filterImage(this.product.images)
    } catch (error) {
      if (error && error?.response?.status === 404) {
        this.showNoLisitngPage = true
      }

    }
  },

  head() {
    // meta: [{ name: 'og_site_name', property: 'og:site-name', content: 'gintaa.com' }]
    if (this.product) {
      let currentUrl = this.$route.fullPath
      // console.log('currentUrl:', currentUrl);
      return {
        title: this.product.name + ' | gintaa.com',
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.product.name + ' on gintaa.com'
        },
        { property: 'fb:page_id', content: 'OnlyGintaa' },
        { property: 'fb:admins', content: 'OnlyGintaa' },
        { name: 'Keywords', content: this.product.name },
        { name: 'al:ios:app_name', content: '@gintaa' },
        { name: 'al:ios:app_store_id', content: '1583773926' },
        { name: 'twitter:title', content: this.product.name },
        { name: 'twitter:description', content: this.product.name },
        { name: 'twitter:image', content: this.filterCoverImage(this.product?.images) },
        { name: 'og_image', property: 'og:image', content: this.filterCoverImage(this.product?.images) },
        { name: 'twitter:app:id:iphone', content: '1583773926' },
        { name: 'twitter:app:name:googleplay', content: '@gintaa' },
        { name: 'og_url', property: 'og:url', content: this.getOgUrl(this.product) },

          // for ios app open
          // {  name: 'apple-itunes-app',  content:`app-id=1583773926, app-argument=${currentUrl}` },

        ]
      }
    }
  },
  // multiple components can return the same `fetchKey` and Nuxt will track them both separately
  fetchKey: 'site-listing-details',
  computed: {

    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    }),

    editlink() {
      return `/listing/item?id=${this.product.offerId}&category=PUBLISHED`
    },
    suggestLink() {
      return `/offers/suggest/${this.product.offerId}`
    },
    isHotListing() {
      return this.processIsHotListing()
    }

  },
  beforeMount() {
    if (this.$route.query?.order_id) {
      this.updatePaymentStatus()
    }
    this.readDataFromStrapi()
    // this.$moment.locale('bn');
  },
  mounted() {
    // console.log("-----------------",this.product)
    this.readListingStatusFromRealTimeDb()
    this.logEvent()
    this.fetchCmsData()

    if (process.client) {
      this.currentUrl = window.location.host + window.location.pathname
      this.returnUrl = window.location.pathname
    }
    const offerId = this.$route.params.pid
    this.offerId = this.$route.params.pid

    this.$fire.firestore.collection('status').doc(this.product?.user.identityId).onSnapshot((userActivityStatus) => {
      if (userActivityStatus.exists) {
        this.userStatus = userActivityStatus.data().state
      }
    })

    if (this.product && this.product?.user.identityId === this.authUser?.uid) {
      this.isListingOwner = true
      this.showOwnersIcon = true
      this.shownotOwnersIcon = false
      this.breadcrumb = [{
        name: 'Listing',
        href: '/my-listings'
      }, {
        name: 'Published'
      },
      {
        name: this.product?.name
      }
      ]

    } else {

      if (this.product) {
        const breadcumbobj = this.spliceBreadcumbObj(this.product)
        this.breadcrumb = this.getBreadcumbObj(breadcumbobj)
        this.showOwnersIcon = false
        this.shownotOwnersIcon = true
        this.getOtherUserSatistis(this.product?.user)
      }

    }
    if (this.product && this.product.offerStage !== 'Review') {
      this.getlistingStatistic(offerId)
    }

    this.getDealCount(offerId)
    this.getPotentialMatches(offerId)

    if (this.authUser == null) {
      window.localStorage.setItem("setPath", window.location.pathname);
    } else {
      if (window.localStorage.getItem("setPath") != null && window.localStorage.getItem("setPath").includes('/p/')) {
        window.localStorage.removeItem("setPath");
      }
    }

    if (this.product && this.product.user?.gintaaAffiliated && this.authUser !== null) {
      this.getMywalletDetails()
      this.getUserAllAddress()
    }

    if (this.product && this.product?.user.identityId !== this.authUser?.uid) {
    this.getLisitingBlockStatus(offerId)
    this.getUserBlockStatus(this.product?.user)
    }

    this.setDefaultSharableContactNumber()
  },
  created() {

    this.$on('closeModal', (section) => {
      this.showmodal = false
      this.showdeletemodal = false
      this.showhidelistingmodal = false
      this.showAddaddressPopup = false;
      if (section) {
        this.userAllAddress = []
        this.getUserAllAddress()
      }
    })
  },
  methods: {
    async fetchCmsData(){
      this.isEnableDirectBy = false
      const data = await fetch(`${this.$config.CMS_API_BASE}/api/generals`).then((r) => r.json());
      const responseData = data.data
      responseData.map((item) => {
        const key = item.attributes.parameter;
        // console.log('keys:', key)
        if (key === 'enable_direct_by_flow') {
          let paramVal = item.attributes.value;
          
          console.log('paramVal:', paramVal)
          if(paramVal.WEB !== undefined){            
            this.isEnableDirectBy = paramVal.WEB
            
            // console.log('paramVal: isEnableDirectBy', this.isEnableDirectBy)
          }
        } else {
          // console.log('other keys:', key)
        }
      })
    },
    async updatePaymentStatus() {
      try {
        let orderId = this.$route.query?.order_id
        const paymentStatusurl = '/payments/v1/payments/update-payment-status'
        const data = await this.$axios.$post(paymentStatusurl, { "orderId": orderId });
        return data
      } catch (error) {
        console.log(error);
        return error
      }

    },

    sellFaster() {
      this.skipShareandFeatureOptions();
      this.$router.push({ path: this.localePath(`/feature-lisitng`), query: { offerId: this.product.offerId, returnUrl: this.returnUrl } })
    },

    closeModal() {
      this.showReachargWalletPopup = false
    },

    addCointoWallet() {
      this.showReachargWalletPopup = true
    },

    openAddAddressPopup(addressDet) {
      addressDet.addressDet.name = this.authUser.displayName
      addressDet.addressDet.email = this.authUser.email
      addressDet.addressDet.phoneNumber = this.authUser.phoneNumber
      this.editOrAddAddressDetails = addressDet
      this.showAddaddressPopup = true
    },

    getAddressitemDet(addressItemDet) {
      const addDetArray = []
      if (addressItemDet) {
        addDetArray.push(addressItemDet?.flatNo, addressItemDet?.area,
          addressItemDet?.city, addressItemDet?.landmark, addressItemDet?.state, addressItemDet?.zip)
      }

      if (addDetArray.length) {
        var filtered = addDetArray.filter(function (el) {
          return el != null;
        });
        return filtered.join();
      }

    },

    onSelectAddress(index) {

      this.userAllAddress.map((el) => {
        el.selected = false
        return el
      })
      this.userAllAddress[index].selected = true
      this.doorStepDeliveryInfo.deliveryLocationAddressId = this.userAllAddress[index].id
      this.makeProceedBtnEnable()
    },

    async getUserAllAddress() {
      this.addressloading = true
      try {
        let url = `/users/v1/user/address/all`;
        const data = await this.$axios.$get(url);
        this.userAllAddress = data.payload;
        this.showaddressList = true
        if (this.userAllAddress && this.userAllAddress.length > 0) {
          this.userAllAddress.map((el) => {
            el.selected = el?.default ? true : false
            return el
          })

          const defaultAddress = this.userAllAddress.filter(address => address.default === true)
          this.doorStepDeliveryInfo.deliveryLocationAddressId = defaultAddress[0].id,
            this.makeProceedBtnEnable()
        } else {

        }

        this.addressloading = false
      } catch (error) {
        this.addressloading = false
        console.log(error);
      }
    },

    makeProceedBtnEnable() {
      if (this.doorStepDeliveryInfo?.deliveryLocationAddressId) {
        this.isProceedBtnDisable = false
      } else {
        this.isProceedBtnDisable = true
      }
    },

    async readDataFromStrapi() {
      try {
        const data = await fetch(`${this.$config.CMS_API_BASE}/api/generals`).then((r) => r.json());
        let responseData
        if (data) {
          responseData = data.data
          responseData.map((item) => {
            const key = item.attributes.parameter;

            if (key === 'popular_product_conditions') {
              let paramVal = item.attributes.value;
              if (paramVal) {
                this.hotLisitngviewCount = paramVal.viewCount ? paramVal.viewCount : 0
                this.hotLisitngdaysDuration = paramVal.daysDuration ? paramVal.daysDuration : 0
              }
            } else {
            }
          })

        }
        return responseData
      } catch (error) {
        console.log(error);
        return error
      }
    },

    async getMywalletDetails() {
      try {
        const url = "/wallet/v1/wallet/details";
        const data = await this.$axios.$get(url);
        if (data.payload) {
          if (data.payload.COIN) {
            // this.netavailableReward = data.payload.COIN.netCount;
            this.netavailableReward = data.payload.COIN.usableBalance;
            if (this.product.unitOfferValuation) {
              if (+this.netavailableReward >= +this.product.unitOfferValuation) {
                this.ismakeOfferDisabled = false
                this.showRedeemBalanceErrmsg = false
              } else {
                this.deficitAmount = +this.product.unitOfferValuation - +this.netavailableReward
                this.ismakeOfferDisabled = true
                if (this.product?.user?.gintaaAffiliated) {
                  this.showRedeemBalanceErrmsg = true
                }

              }
            }

          }
        } else {

        }

      } catch (error) {
        console.log(error);

      }
    },

    showHowtoImprovePopUP() {
      this.showHowToImprovePopup = true
    },

    closeModalPopup() {
      this.showHowToImprovePopup = false
    },

    isLisitngScoreExists(lisitngScore) {
      if (lisitngScore || lisitngScore === 0) {
        return true
      } else {
        return false
      }
    },

    getLisitngScoreText(lisitngScore) {
      if (lisitngScore >= 0 && lisitngScore <= 50) {
        return this.$t('poor')
      } else if (lisitngScore >= 51 && lisitngScore <= 80) {
        return this.$t('good')
      } else if (lisitngScore > 80) {
        return this.$t('excellent')
      }
    },

    getBgClass(lisitngScore) {
      if (lisitngScore >= 0 && lisitngScore <= 50) {
        return 'bg-[#DD0B0B]'
      } else if (lisitngScore >= 51 && lisitngScore <= 80) {
        return 'bg-[#FB923C]'
      } else if (lisitngScore > 80) {
        return 'bg-[#7DC855]'
      }
    },

    getToolTips(lisitngScore) {
      if (lisitngScore >= 0 && lisitngScore <= 50) {
        return 'Poor rating'
      } else if (lisitngScore >= 51 && lisitngScore <= 80) {
        return 'Good'
      } else if (lisitngScore > 80) {
        return 'Excellent'
      }
    },

    checkIsAffiliated(product) {

      if (product.user?.gintaaAffiliated) {
        return true
      } else {
        return false
      }
    },

    skipShareOptions() {
      this.showShareOptions = false
    },

    skipShareandFeatureOptions() {
      this.showShareandFeatureOptions = false
    },

    getReturnHeader(PrdctDet) {
      if (PrdctDet && PrdctDet.returnType === 'RETURN') {
        return this.$t('returnHeader')
      } else if (PrdctDet && PrdctDet.returnType === 'RETURN_AND_REPLACE') {
        return this.$t('returnAndReplaceHeader')
      }
    },

    getReturnMessage(PrdctDet) {
      if (PrdctDet && PrdctDet.returnType === 'RETURN') {

        if (this.showOwnersIcon) {
          return this.$t('sellerreturnMessage')
        } else {
          return this.$t('buyerreturnMessage')
        }

      } else if (PrdctDet && PrdctDet.returnType === 'RETURN_AND_REPLACE') {

        if (this.showOwnersIcon) {
          return this.$t('sellerreturnAndReplaceMessage')
        } else {
          return this.$t('buyerreturnAndReplaceMessage')
        }

      }
    },
    getReturnDays(withinDays) {
      if (withinDays === 'SEVEN_DAYS') {
        return this.$t('sevenDays')
      } else if (withinDays === 'TEN_DAYS') {
        return this.$t('tenDays')
      } else if (withinDays === 'FIFTEEN_DAYS') {
        return this.$t('fifteenDays')
      } else if (withinDays === 'THIRTY_DAYS') {
        return this.$t('thirtyDays')
      }
    },

    checkIfFacetsExists(facets) {
      if (facets && facets.length > 0) {
        return true
      } else {
        return false
      }
    },
    checklang() {
      if (this.$i18n.locale && this.$i18n.locale === 'en') {
        return true
      } else {
        return false
      }

    },
    processIsHotListing() {
      const totalViewCount = this.listingStatistics.viewCount
      const publishedDate = this.product.publishedDate
      try {
        const differDate = moment(moment()).diff(publishedDate, 'days')
        return totalViewCount > this.hotLisitngviewCount && differDate <= this.hotLisitngdaysDuration
      } catch (err) {
        return false
      }

      return false
    },
    getOgUrl(offer) {
      return 'gintaa.com' + this.localePath('/p/' + this.$createSlugUrl(offer) + '/' + offer?.offerId)
    },
    checkOffPercentage(productDet) {

      let price = productDet?.price
      let unitOfferValuation = productDet?.unitOfferValuation
      let diffValue = +productDet?.price - +productDet?.unitOfferValuation
      if (diffValue > 0) {
        return this.$cacculateoffpercentage(+productDet?.price, +productDet?.unitOfferValuation)
      } else {
        return null
      }


    },
    async getOtherUserSatistis(otherUserDetails) {
      try {
        let listingUseridentityId = otherUserDetails?.identityId
        let url = `/statistics/v1/statistics/offer/user/${listingUseridentityId}`;
        const data = await this.$axios.$get(url);
        if (data.success) {
          this.activeOfferCount = data?.payload?.activeOfferCount
          this.closeDealCount = data?.payload?.closeDealCount
        } else {

        }

      } catch (error) {

        console.log(error);
      }
    },

    checkProductSatge(productStage) {
      if (productStage === 'Blocked' || productStage === 'Completed') {
        return false
      } else {
        return true
      }
    },

    closeMarkAsSoldPopUp() {
      this.showMarkAssoldPopUp = false
    },
    showMarkAssoldConfirmation() {
      this.showMarkAssoldPopUp = true
    },

    async markToSold() {
      this.markAsSoldLoading = true
      try {
        const url = `/offers/v1/offers/sold-out/` + this.offerId;
        const data = await this.$axios.$post(url);
        if (data.success) {
          this.product.quantity = 0
          this.product.offerStage = "Completed"
          this.showMarkAssoldPopUp = false
        } else {

        }
        this.markAsSoldLoading = false
      } catch (error) {
        this.markAsSoldLoading = false
        this.showMarkAssoldPopUp = true
        console.log(error);
      }


    },

    filterListingCoverImg() {
      return (
        this.product.images.filter((image) => image.cover === true)[0]?.url ||
        this.listing.images[0].url
      );
    },


    filterCoverImage(imageList) {
      var coverImg = imageList.filter(function (el) {
        return el.cover;
      });

      if (coverImg && coverImg.length) {
        return coverImg[0]?.url
      }

    },

    async readListingStatusFromRealTimeDb() {
      try {
        const offerRef = await this.$fire.database.ref(`listings/${this.$route.params.pid}`).on("value", (value) => {
          if (this.product && this.product.offerStage !== value.val()?.status) {
            this.getProductDet()
          }

        })
      } catch (e) {

      }
    },

    openContcDet() {
      this.showContactDets = true
    },

    getMobileNo(productDet) {
      return productDet?.mobile
    },

    closeContactModal() {
      this.showContactDets = false
    },

    async getProductDet() {


      const data = await this.$axios.get(`${this.$config.API_BASE}/offers/v1/offers/oid/${this.$route.params.pid}`)
      this.product = data.data.payload
      if (this.product && this.product.offerStage === 'Published' && this.product.currentUserOfferOwner) {
        this.showShareandFeatureOptions = true
      } else {

      }
      this.listingImages.images = this.product.images
      this.offerId = this.product.offerId
      this.userdetails.identityId = this.product.user.identityId
      this.userdetails.name = this.product?.user?.name
      if (this.product.user.averageRating) {
        this.userRating = Math.round(this.product.user.averageRating)
      }
      if (this.product.hidden) {
        this.btnTitle = this.$t('unHideListing')
      } else {
        this.btnTitle = this.$t('hideListing')
      }
      this.filterImage(this.product.images)
      this.getTotalDeals(this.product?.offerId)
      this.getlistingStatistic(this.product?.offerId)

      if (this.product?.user.identityId === this.authUser?.uid) {
        this.isListingOwner = true
        this.showOwnersIcon = true
        this.shownotOwnersIcon = false
        this.breadcrumb = [{
          name: 'Listing',
          href: '/my-listings'
        }, {
          name: 'Published'
        },
        {
          name: this.product?.name
        }
        ]
      } else {
        const breadcumbobj = this.spliceBreadcumbObj(this.product)
        this.breadcrumb = this.getBreadcumbObj(breadcumbobj)
        this.showOwnersIcon = false
        this.shownotOwnersIcon = true
      }

    },

    async checkisEligibileForFeature() {
      try {
        let url = `/subscription/v1/subscription/featured-listing/eligibility`;
        const data = await this.$axios.$get(url);
        if (data.success) {
          if (data.payload?.eligibleForFeature && data.payload?.listingFeatureCapacity > 0) {
            this.eligibleForFeature = true
          } else {
            this.eligibleForFeature = false
          }
        } else {

        }

      } catch (error) {
        this.eligibleForFeature = false
      }

    },

    async checkEligibility() {
      try {
        let url = `/subscription/v1/subscription/featured-listing/eligibility`;
        const data = await this.$axios.$get(url);
        if (data.success) {
          if (data.payload?.eligibleForFeature && data.payload?.listingFeatureCapacity > 0) {
            return true
          } else {
            return false
          }
        } else {

        }

      } catch (error) {

        console.log(error);
        return false
      }

    },

    async logEvent() {
      try {
        const analyticsData = {
          user_id: this.authUser?.uid,
          business_id: null,
          channel_id: 'WEB',
          listing_id: this.product.offerId,
          listing_type: this.product.offerType,
          exchange_mode: this.product.exchangeMode,
          delivery_preference: this.product.deliveryMethod,
          category_id: this.product.category.categoryId,
          item_condition: this.product.itemCondition,
          negotiable: this.product.negotiable
        }


        await this.$fire.analytics.logEvent('gintaa_product_details', analyticsData)
      } catch (e) {
        console.log('Gintaa analytics error:', e)
      }
    },

    editLisitng(editLink, isDealEsixts) {
      if (isDealEsixts) {
        this.editLisitngModal = true
      } else {
        this.$router.push({ path: this.localePath(editLink) })
      }
    },

    getListingFailedErroMsg(listingUploadFailedReason) {
      if (listingUploadFailedReason.includes('VIDEO') && listingUploadFailedReason.includes('IMAGE')) {
        return this.$t('bothErrorMsg')
      } else {
        if (listingUploadFailedReason.includes('VIDEO_THUMBNAIL') || listingUploadFailedReason.includes('VIDEO')) {

          return this.$t('videoErrorMsg')

        } else {

          if (listingUploadFailedReason.includes('IMAGE_THUMBNAIL') || listingUploadFailedReason.includes('IMAGE')) {
            return this.$t('imageErrorMsg')

          } else {
            if (listingUploadFailedReason.includes('IMAGE_THUMBNAIL')) {
              return this.$t('imageTumbnilError')
            } else {
              if (listingUploadFailedReason.includes('VIDEO_THUMBNAIL')) {
                return this.$t('videoTumbnilError')
              }
            }
          }

        }

      }
    },

    getImageUrl(imageItem) {
      if (imageItem.thumbnails) {
        return imageItem.thumbnails['400x400']
      } else {
        return imageItem.url
      }

    },

    addClass(images) {
      if (images && images.length > 1) {
        return 'justify-start'
      } else {
        return 'justify-center'
      }
    },

    addClassToImage(quantity, isSafe, OfferStage) {
      if (!isSafe && OfferStage === 'Failed') {
        return 'error-image'
      } else {
        if (quantity === 0) {
          return 'sold-out'
        } else {

        }
      }

    },


    getPotentialPageLink() {
      this.$router.push({
        path: '/view-all/potentiallisting',
        query: {
          id: this.offerId,
          listing: this.product
        }
      })
    },

    getDiscountPercentage(unitOfferVal, marketValue) {
      const disCountPer = Math.round((((marketValue - unitOfferVal) / marketValue) * 100).toFixed(2));
      if (disCountPer > 0) {
        return '(' + disCountPer + '%' + ' ' + 'Off' + ')'
      } else {
        return null
      }
    },


    async checkIftheUserBlocked(listingUserId) {
      try {
        let url = `/users/v1/user/report/check-reported/${listingUserId}`;
        const data = await this.$axios.$get(url);

        if (data.payload) {
          this.isUserReported = true
        } else {
          this.isUserReported = false

        }
      } catch (error) {
        console.log(error);
      }
    },


    async getPotentialMatches(offerId) {
      this.checkMatchLoading = true
      try {
        let url = `/search/v1/search/match-result/oid?offerId=${offerId}&matchCountMax=9999`
        const data = await this.$axios.$get(url);
        if (data.payload && data.payload?.hits.length > 0) {
          this.checkMatchLoading = false
          this.showViewMatchButton = true
        } else { }
      } catch (error) {
        this.checkMatchLoading = false
        console.log(error);
      }
    },

    convertProductAge(ageInMonth) {

      if (ageInMonth > 12) {
        if ((ageInMonth / 12 | 0) > 1) {
          this.yrsCount = 's'
        } else {
          this.yrsCount = ''
        }
        if (ageInMonth % 12 > 1) {
          this.mnthCount = 's'
        } else {
          this.mnthCount = ''
        }
        return (ageInMonth / 12 | 0) + " year" + `${this.yrsCount}` + " " + ageInMonth % 12 + " month" + `${this.mnthCount}`
      } else {
        if (ageInMonth > 1) {
          return ageInMonth + " " + "Months"
        } else {
          return ageInMonth + " " + "Month"
        }

      }


    },


    checkProductQuantity(Quantity) {
      if (Quantity) {
        return false
      } else {
        return true
      }
    },

    addClassToTitle() {
      if (this.isSavedForLater) {
        return 'text-gray-400'
      } else {
        if (!this.isSavedForLater) {
          return 'text-firoza'
        }
      }
    },

    async addTosaveForLater(btnTitle, offerID) {

      if (this.authUser == null) {
        window.localStorage.setItem("setPath", window.location.pathname);
        this.$router.push({ path: this.localePath('/login') })
        return false
      }


      this.saveForLaterLoading = true
      if (!this.isSavedForLater) {
        try {
          const url = `/offers/v1/offer/saved/oid/${offerID}`;
          const data = await this.$axios.$post(url);

          if (data.success) {
            this.saveForLaterLoading = false
            this.isSavedForLater = true
            this.savedLaterBtnTitle = this.$t('removeFromSavedItem')
            Vue.$toast.open(data.message);

          } else {
            this.isSavedForLater = false
          }
        } catch (error) {
          this.saveForLaterLoading = false
        }
      } else {
        try {
          const url = `/offers/v1/offer/saved/oid/${offerID}`;
          const data = await this.$axios.$delete(url);

          if (data.success) {
            this.saveForLaterLoading = false
            this.isSavedForLater = false
            this.savedLaterBtnTitle = this.$t('saveForLater')
            Vue.$toast.open(data.message);
          } else {
            //  this.isSavedForLater = false
          }
        } catch (error) {
          this.loading = false
        }
      }
    },

    checkQuantity(Quantity) {
      if (Quantity) {
        return false
      } else {
        return true
      }
    },

    suggestOffer(offerId) {
      if (this.authUser == null) {
        window.localStorage.setItem("setPath", `/offers/suggest/${offerId}`);
        return `/login`
      } else {
        return `/offers/suggest/${offerId}`
      }
    },

    async getTotalDeals(offerId) {
      try {
        const url = `/deals/v1/deals/offer/${offerId}`;
        const data = await this.$axios.$get(url);
        if (data.payload && data.payload.length > 0) {
          this.isLisitngInitiated = true
          this.offers = data.payload.slice(0, 3);
        } else {
          this.isLisitngInitiated = false
        }
      } catch (error) { }
    },
    isOfferInitiated(status) {
      this.isLisitngInitiated = status
    },

    async getlistingStatistic(offerId) {
      try {
        const url = `/statistics/v1/statistics/offer/oid/${offerId}`
        const data = await this.$axios.$get(url)
        this.listingStatistics.viewCount = data.payload?.viewCount
        this.listingStatistics.favouriteCount = data.payload?.favouriteCount
        this.listingStatistics.commentCount = data.payload?.commentCount
        this.listingStatistics.score = data.payload?.score
      } catch (error) {
        console.log(error)
      }
    },

    async getDealCount(offerId) {
      try {
        const url = `/deals/v1/deals/offer/${offerId}/count`
        const data = await this.$axios.$get(url)
        this.listingStatistics.dealCount = data.payload.onGoingDealCount
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },
    checkExchangeMode(exchngeMode) {
      if (exchngeMode === 'Money') {
        return false
      } else {
        return true
      }
    },

    spliceBreadcumbObj(ListingDetails) {
      if (ListingDetails) {
        const breadcrumbArray = ListingDetails?.category?.hierarchy
        if (breadcrumbArray.length > 4) {
          const spliceObj = breadcrumbArray.slice(
            breadcrumbArray.length - 3,
            breadcrumbArray.length
          )
          return spliceObj
        } else {
          return breadcrumbArray
        }
      }

    },

    getBreadcumbObj(BreadcumObj) {
      const breadcumArray = []
      if (BreadcumObj) {
        for (let i = 0; i < BreadcumObj.length; i++) {
          breadcumArray.push({
            name: BreadcumObj[i].label,
            href: `/search?cid=${BreadcumObj[i].categoryId}`,
            click: true
          })
        }
      }
      if (breadcumArray.length) {
        breadcumArray[breadcumArray.length - 1].link = ''
        breadcumArray[breadcumArray.length - 1].click = false
      }

      return breadcumArray
    },
    preViewFile(doc) {
      window.open(doc.url)
    },

    transformDate(value) {
      if (value) {
        return moment(value).format(' MMMM D , YYYY, h:mm:ss a')
      }
    },
    preViewimage(imageUrl, index) {
      this.selectedImageIndex = index
      this.showCaurosel = true
    },
    closeCarsouselModal() {
      this.showCaurosel = false
    },
    openModal() {
      this.showmodal = true
    },

    openBlockModal() {
      this.showBlockmodal = true
      console.log("----------------------------------- block user")
    },
    openUnblockModal() {
      this.showUnblockPopup = true
    },
    deleteListing() {
      (this.deletedItemDetails.offerId = this.offerId),
        (this.deletedItemDetails.showdeletemodal = true),
        (this.deletedItemDetails.offerImgUrl = this.product.images[0].url),
        (this.deletedItemDetails.listingName = this.product?.name),
        (this.deletedItemDetails.listing_type = this.product?.offerType),
        (this.deletedItemDetails.exchange_mode = this.product?.exchangeMode),
        (this.deletedItemDetails.category_id = this.product?.category?.categoryId),
        (this.deletedItemDetails.user_id = this.authUser?.uid),

        this.showdeletemodal = true
    },

    hideListing() {
      (this.hidingItemDetails.offerId = this.offerId),
        (this.hidingItemDetails.showhidelistingmodal = true),
        (this.hidingItemDetails.offerImgUrl = this.product.images[0].url),
        (this.hidingItemDetails.listingName = this.product.name),
        (this.hidingItemDetails.listingStaus = this.product.hidden)
      this.showhidelistingmodal = true
    },

    checkListingStatus(listingstatus) {
      if (listingstatus) {
        return 'Unhide'
      } else {
        return 'Hide'
      }
    },

    profileLink() {
      return `/profile/view/llpTWpEsbCNiInPFZuwYoYd9GKH3`
    },

    getLink(uId) {
      if (uId) {
        return '/profile/view/' + uId + ''
      }
    },

    reportSuccess(reportStatus) {
      this.isListingReported = true
      Vue.$toast.open(reportStatus);
    },

    blockSuccess(blockStatus) {
      this.showBlockmodal = false
      this.isLisitngBlocked = true
      this.ismakeOfferDisabled = true
         
    },
    unblockSuccess() {
      this.showUnblockPopup = false
      this.getLisitingBlockStatus()
    },
    closeUnBlockModal() {
      this.showUnblockPopup = false
    },

    closeBlockModal() {
      // console.log("---")
      this.showBlockmodal = false
    },
    closeUnblockModal(){
      this.showUnblockPopup = false
    },

    isNegotiable(isNegotiable) {
      if (isNegotiable) {
        return 'Negotiable'
      } else {
        return 'Fixed'
      }
    },

    showShareOpModal() {
      this.showSahreModal = true
    },

    closeShareModal(data) {
      this.showSahreModal = false
    },

    getOwnChatLink(OfferId) {
      return `/chat/offers/${OfferId}/users`
    },
    getOtherUserChatLink(OfferId, offerOwnerId) {
      const currentUserId = this.authUser?.uid
      const roomId = `${currentUserId}_${offerOwnerId}`
      this.$router.push({
        path: `/chat/offers/${OfferId}/rooms/${roomId}/messages`
      })
      if (this.authUser == null) {
        window.localStorage.setItem("setPath", `/chat/offers/${OfferId}/rooms/${roomId}/messages`);
      }
    },
    getQuantity(quntity) {
      if (quntity === 0) {
        return true
      } else {
        return true
      }
    },

    filterImage(imageList) {
      const FilteredImglist = imageList.sort((a, b) => !(a.cover ^ b.cover) ? 0 : a.cover ? -1 : 1)
    },

    getShippingType(shippingTyp) {
      if (shippingTyp === 'WITHIN_CITY') {
        return 'Free shipping within city'
      } else if (shippingTyp === 'WITHIN_INDIA') {
        return 'Free shipping across India'
      }
    },

    cancelEdit(cancelType) {
      this.editLisitngModal = false
    },
    editSuccess(productDetails) {
      this.product = productDetails
      this.editLisitngModal = false
    },

    getCashOnDeliveryMsg() {
      if (this.showOwnersIcon) {
        return this.$t('sellersCodToolTip')
      } else {
        return this.$t('buyersCodToolTip')
      }
    },



    ///////////////// Start for initiate offer with coin ///////////////////////
    showProceedToBuyPopup() {
      if (this.authUser == null) {
        window.localStorage.setItem("setPath", window.location.pathname);
        this.$router.push({ path: this.localePath(`/login`) })
      } else {
        this.showProceedToBuyWithCoinPopup = true;
      }
    },
    hideProceedToBuyPopup() {
      this.showProceedToBuyWithCoinPopup = false;
    },
    showMobileShareConfirmationPopup() {
      this.showShareMobileConfirmPopup = true;
    },
    forcelosePopup(sec) {
      this.showShareMobileConfirmPopup = false;
    },

    isValidNumber() {
      if (this.$isValidMobile(this.initiatorContact)) {
        this.initiatorAgreedShareContact = true
        this.initiatorAgreedShareContactDisabled = false
      } else {
        this.initiatorAgreedShareContact = false
        this.initiatorAgreedShareContactDisabled = true
      }
    },
    isNumber(evt) {
      evt = (evt) || window.event
      const charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    },
    setDefaultSharableContactNumber() {
      // set initiatorContact as user phone numbe default
      if (this.authUser && this.authUser.phoneNumber) {
        this.initiatorContact = this.remove91ToPhoneNumber(this.authUser.phoneNumber)
        this.initiatorAgreedShareContact = true
        this.initiatorAgreedShareContactDisabled = false
      }
    },

    async getLisitingBlockStatus(offerId) {
      try {
        const url = `/offers/v1/blocked/offer/user/check-blocked/${offerId}`
        const data = await this.$axios.$get(url);
       // console.log(" Block status ", data)
        this.isLisitngBlocked = data.payload
        if(this.isLisitngBlocked){
          this.ismakeOfferDisabled = true
        }else{
          this.ismakeOfferDisabled = false
        }

      } catch (error) {
        console.log(error);

      }
    },

    async getUserBlockStatus(user) {
      const identityId = user?.identityId
      try {
        const url = `/users/v1/user/report/check-blocked-both/${identityId}`
        const data = await this.$axios.$get(url);
      // console.log("Data",data.payload)
       if(data.payload.callerHasBlockedUser || data.payload.callerIsBlockedByUser){
        this.checkIfUserBlocked = true
        this.showUserBlockMsg = true
       }else{
        this.checkIfUserBlocked = false
        this.showUserBlockMsg = false
       }
       

      } catch (error) {
        console.log(error);

      }
    },
    remove91ToPhoneNumber(phone) {
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
    async initiateOffer() {
      if (!this.checkProductQuantity(this.product.quantity)) {

        ////////////////////////////////////////////////////

        this.error = null
        this.offerPosting = true


        // const requestedOffer = this.ouSelectedListing()
        // const suggestedOffer = this.cuSelectedListing()

        const requestedOffer = this.product;
        const suggestedOffer = null;

        try {
          const postingDealData = {
            amountCurrency: 'INR',
            deliveryMethodId: this.deliveryMethod === 'Shipping' ? this.$refs.doorstep.deliveryMethod : this.deliveryMethod, // Junction, Self, Shipping, IndiaPost,
            expiryDate: this.$moment().add(10, 'days').format('YYYYMMDD'),
            transactionMode: 'COIN',
            doorStepDeliveryInfo: this.doorStepDeliveryInfo
          }

          if (requestedOffer) {
            postingDealData.destinationOfferDetails = [{
              offerId: requestedOffer.offerId,
              offerItemCount: 1, // offerItemCount == null ? 1 : offerItemCount,
              offerType: 'Item'
            }]
          }


          postingDealData.requestedAmount = requestedOffer.unitOfferValuation || 0
          postingDealData.requestedAmountPaidByInitiatingUser = true



          postingDealData.initiatorContact = this.initiatorAgreedShareContact ? this.initiatorContact : null
          postingDealData.initiatorAgreedShareContact = this.initiatorAgreedShareContact
          const res = await this.$axios.post('/deals/v1/deals/initiate', postingDealData)

          this.logOfferEvent(res.data.payload)
          this.logInitiateEvent(res.data.payload)

          setTimeout(() => {
            this.dealData = res.data.payload
            this.offerPosting = false
            this.showShareMobileConfirmPopup = false
            // todo payment need to be triggered if required
            if (this.deliveryMethod === 'Self' || this.deliveryMethod === 'Junction') {
              // this.$router.push(`/offers/details/${dealRefId}`)
              // for backend dealview thin client issue
              this.success = true
            }
          }, 1000)
        } catch (e) {
          console.log(e)
          this.error = e.response.data.message || e.message
          this.offerPosting = false
          this.showShareMobileConfirmPopup = false
        }

        ///////////////////////////////////////////////////
      }
    },

    async logOfferEvent(offerData) {
      try {
        const analyticsData = {
          channel_id: 'WEB',
          user_id: offerData?.receiver?.id, // (receiver)
          listing_id: offerData?.requestedOffers[0]?.offerId,
          listing_type: offerData?.requestedOffers[0]?.offerType,
          exchange_mode: offerData?.requestedOffers[0]?.exchangeMode,
          delivery_preference: offerData?.dealDeliveryMethod?.id,
          category_id: offerData?.requestedOffers[0]?.categoryId,
          item_condition: ''
        };
        await this.$fire.analytics.logEvent('gintaa_suggest_offer', analyticsData)
      } catch (e) {
      }
    },
    async logInitiateEvent(offerData) {
      try {
        const analyticsData = {
          channel_id: 'WEB',
          receiver_id: offerData?.receiver?.id,
          sender_id: offerData?.sender?.id,
          user_id: this.authUser ? this.authUser?.uid : null, // (receiver)
          offer_id: offerData?.dealRefId,
          requested_product_id: offerData?.requestedOffers[0]?.offerId,
          offered_product_id: offerData?.offeredOffers ? offerData?.offeredOffers[0].offerId : null,
          transaction_mode: offerData?.transactionMode,
          requestedAmount: offerData?.requestedAmount,
          requested_amount_paid_by_initiating_user: offerData?.requestedAmountPaidByInitiatingUser

        };

        await this.$fire.analytics.logEvent('gintaa_offer_initiated', analyticsData)
      } catch (e) {
        //  console.log('Gintaa analytics error:', e);
      }
    },

    goToOfferDetails() {
      window.location.href = window.location.origin + this.localePath(`/offers/details/${this.dealData.dealRefId}`)
    },

    ///////////////// End for initiate offer with coin ///////////////////////

  }
} 
</script>
<style>
.fav-color path {
  fill: #EE2a7b !important;
}

.pencil .pencil-off,
.pencil .chat-right {
  display: none
}

@media (max-width:659px) {
  .mobile-btn {
    box-shadow: 0 0 4px 0 rgb(0 0 0 / 20%);
  }
}

.sold-out img {
  opacity: 0.6 !important;
}

.error-image img {
  border: 3px solid #ed2020;
  /* opacity:0.8; */
}

.lhot {
  width: 24px;
  height: 32px;
  margin-top: -5px;
}

@media only screen and (min-device-width: 0px) and (max-device-width: 639px) {
  .sdeeal-mview {
    margin-top: 20px;
    border: 1px solid #cecece;
    padding: 8px 15px;
  }
}

@media only screen and (min-device-width: 0px) and (max-device-width: 480px) {

  /* .nhg-ghy { display: block; width: 100%; }
   .shppingtrfe { margin-right: 0px; width: 100%; }
   .cash-delivry { margin-top: 15px; width: 100%; } */
  .usera-listv {
    display: block;
    width: 100%;
    float: left;
  }

  .liview,
  .likem,
  .pbdate {
    float: left;
  }

  .pbdate {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 5px;
  }
}

@media only screen and (min-device-width: 1024px) and (max-device-width: 1279px) {
  .makeb-group {
    float: left;
    display: block;
  }

  .makg-button {
    float: left;
    margin-right: 16px;
  }

  .makg-buttonr {
    margin-right: 0px;
  }
}


.sharel-owrite .sharec-1,
.sharel-owrite .sharec-2 {
  left: 0px;
  width: auto;
  position: relative;
  margin: 0px;
  padding: 0px;
  height: auto;
}

.sharel-owrite .sharec-3 {
  background-color: transparent;
  box-shadow: none;
  margin: 0px;
  padding: 0px;
}

.sharel-owrite .sharec-3::before {
  display: none;
}

.sharel-owrite .sharec-4 a {
  margin-right: 2px;
  font-size: 10px;
}

.sharel-owrite .sharec-4 a span {
  width: 40px;
  height: 40px;
}

.sharel-owrite .sharec-15 a {
  font-size: 10px;
  width: 40px;
  height: 40px;
}

/*.sharel-owrite .sharec-1, .sharel-owrite .sharec-2{
    position: relative; left: 0px; margin: 0px; padding: 0px; height: auto; }

.sharel-owrite .sharec-3{
    background-color: transparent; box-shadow: none; margin: 0px; padding: 0px; }

.sharel-owrite .sharec-4{  display: block; }

 .sharel-owrite .sharec-4 .share-network-pinterest, .sharel-owrite .sharec-4 .share-network-twitter, .sharel-owrite .sharec-4 .share-network-facebook,
.sharel-owrite .sharec-4 .share-network-whatsapp, .sharel-owrite .sharec-4 .share-network-email, .sharel-owrite .sharec-4 .sharec-15 {  
    display: flex; align-items: center; border: 1px solid #e1dcdc; float: left; width: 35%; margin-bottom: 10px;
    border-radius: 4px; padding: 5px 10px;
  }

  .sharel-owrite .sharec-5, .sharel-owrite .sharec-7, .sharel-owrite .sharec-9, .sharel-owrite .sharec-11, .sharel-owrite .sharec-13, .sharel-owrite .sharec-17{
    width: 20px;  height: 20px; padding: 0px; border: 0px solid transparent; margin-right: 15px;
  }

  @media only screen and (min-device-width: 0px) and (max-device-width: 398px){
  .sharel-owrite .sharec-4 .share-network-pinterest, .sharel-owrite .sharec-4 .share-network-twitter, .sharel-owrite .sharec-4 .share-network-facebook, .sharel-owrite .sharec-4 .share-network-whatsapp, .sharel-owrite .sharec-4 .share-network-email, .sharel-owrite .sharec-4 .sharec-15 {
    width: 31%; padding: 5px 2px;
}
} */

.sell-faster-bg {
  background-image: url(~/assets/images/dec-home/sellfaster-bg.svg);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100% auto;
}

.premium-details {
  top: 150px !important;
}</style>