<template>
  <div class="relative w-full" :class="listing.offerStage === 'Completed' ? 'opacity-40' : ''">
    <newTag v-if="listing.itemCondition === 'New'" />

    <!-- <favourite v-if="!isMyListing" :listing="listing"  @removeFromFav="removeFromFav"/> -->

    <div
      class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
      <a @click="onLisitngClick(listing)" :href="localePath(listLink)" :target="isOwner" class="block w-full">
        <img v-if="imageUrl" :src="imageUrl" :alt="listing.name"
          class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none mx-auto">

        <img v-else src="~/assets/images/uplaod-default-img.png" :alt="listing.name"
          class="bg-gray-300 object-cover max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none mx-auto">
      </a>
      <div v-if="isDraft" class="fixed right-0 top-0 h-16 w-16">
        <div
          class="fixed transform rotate-45 bg-[#263238] text-center text-xs font-medium text-white py-0.5 right-[-37px] top-[13px] w-[120px]">
          Draft
        </div>
      </div>
      <!-- <div v-else-if="listing.offerStage" :class="[listing.offerStage, 'absolute top-1 bg-white shadow rounded-[15px] left-0 px-3 py-1.5 text-xs text-gray-600']">
          {{ getOfferSatge(listing.offerStage) }} 
        </div> -->

      <div v-else-if="listing.offerStage" :class="[listing.offerStage, 'fixed right-0 top-0 h-16 w-16']">
        <div
          class="fixed transform rotate-45 bg-green text-center text-xs font-medium text-white py-0.5 right-[-34px] top-[15px] w-[120px] tag-change">
          {{ getOfferSatge(listing.offerStage) }}
        </div>
      </div>
      <div class="list-premium-tag">
        <premiumTag v-if="listing.featured" />
      </div>

    </div>
    <div class="product-title w-full overflow-hidden px-1">
      <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
        {{ listing.name }}
      </h2>

      <!-- listing.exchangeMode !== 'Money' &&  -->
      <!-- <div v-if="listing.unitOfferValuation" class="text-xs text-gray-500 mb-2 flex items-center">
          <span>Value</span>
          <span class="mr-2">:</span>
          <span class="flex items-center text-gray-800 font-medium">
            <img src="~/assets/images/coin.svg" class="mr-1 w-[18px]">
            {{ listing.unitOfferValuation }}
          </span> 

         </div> -->

      <div class="flex items-center mb-1 flex-col">
        <div class="w-full flex mb-1 items-center">
          <div v-if="listing.unitOfferValuation"
            class="min-h-[47px] md:min-h-0 text-heading  font-medium text-base text-gray-700 w-full flex items-start flex-col sm:flex-row sm:items-center md:flex-row md:items-center lg:flex-row lg:items-center xl:flex-row xl:items-center 2xl:flex-row 2xl:items-center prod-price relative ">
            <!-- <span class="text-sm text-gray-500 font-normal">{{$t('valueText')}}</span>
                              <span class="gg">:</span> -->
            <span class="xl:text-[17px] 2xl:text-[18px] text-gray-600 mr-[8px]  font-bold float-left mlcoin relative"
              :class="checkIsAffiliated(listing) ? 'pl-[22px]' : 'pl-[10px]'">
              <img alt="coin" v-if="checkIsAffiliated(listing)" src="~assets/images/offer/coin-value.svg"
                class="absolute w-[18px] top-[2px] left-[0px]">
              <svg v-else width="6" height="11" viewBox="0 0 11 18" fill="none" class="absolute top-[5px] left-[2px]">
                <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                  fill="black" />
              </svg>
              {{ listing.unitOfferValuation }}</span>

            <div class="float-left">
              <div class="flex items-center">
                <span v-if="listing.price && listing.price > listing.unitOfferValuation"
                  class="items-center text-[12px] font-normal text-gray-500 relative flex after:left-0 after:absolute after:w-[100%] after:h-[1px] after:bg-gray-500 after:top-[11px] ">
                  <svg width="5" height="10" viewBox="0 0 11 18" fill="none" class="mr-[1px]">
                    <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                      fill="black" />
                  </svg> {{ listing.price }}</span>
                <span v-if="listing.price && listing.price > listing.unitOfferValuation && checkOffPercentage(listing)"
                  class="xl:text-[12px]  2xl:text-[13px] text-[#3B9A01] pl-[9px] font-medium">{{
                    checkOffPercentage(listing)
                  }}%
                  {{ $t('cl_off') }}</span>
              </div>
            </div>

          </div>
          <!-- <div class="flex" v-if="listing.price && listing.price > listing.unitOfferValuation">
                            <span   class="  text-[13px] block font-normal  pl-2 text-gray-400 line-through">
                            {{listing.price}}
                          </span>

                           <span class="text-[#72ad26] text-[13px] font-medium block ml-2">{{getDiscountPercentage(listing.unitOfferValuation,listing.price)}}</span>
                        </div> -->
        </div>
        <div v-if="listing.location" class="w-full flex items-center justify-between listing-card-copy">
          <div v-if="!type" class="text-xs  text-gray-400 bottom-0  flex items-center relative pl-[20px] ">
            <svg width="13" height="17" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="absolute left-0 top:0 ">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z"
                fill="#5F5F5F" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z"
                fill="#5F5F5F" />
            </svg>
            {{ listing.location.city }}
          </div>

          <!-- <ListingPublishDet :cDate="getPublishDate(listing)"/> -->
        </div>


      </div>










      <!-- <div v-if="(listing.exchangeMode == 'Barter' || listing.exchangeMode == 'Product') && listing.desire" class="text-heading font-medium text-base text-gray-700 mb-1  relative    flex items-center pl-[65px]  truncate">
          <span class="inline-block absolute left-0">
            <img src="~assets/images/barter_green_blue.png">
          </span>
          <span class="mr-2">:</span>
          <span class="text-sm text-gray-500 font-normal">{{ listing.desire ? listing.desire.description || listing.desire.desireType : '' }}</span>
        </div> -->

      <!-- <div v-if="listing.exchangeMode == 'Money'" class="text-heading font-medium text-base text-gray-700  relative mb-1    flex items-center pl-[65px]  truncate">
          <span class="inline-block absolute left-0">
            <img src="~assets/images/barter_green_blue.png">
          </span>
          <span class="mr-2">:</span>
          <span class="flex items-center text-base text-gray-500 font-medium mr-5">
            <img src="~/assets/images/coin.svg" alt="coin" class="mr-1 w-[18px]">
            {{ listing.unitOfferValuation }}
          </span>

        </div> -->

      <div v-if="listing.exchangeMode == 'Free'"
        class="text-heading font-medium text-base text-gray-700 mb-1 relative    flex items-center pl-[65px]  truncate">
        <span class="inline-block absolute left-0">
          <img src="~assets/images/barter_green_blue.png" alt="barter">
        </span>
        <span class="mr-2">:</span>
        <span class="text-sm text-gray-500 font-normal">
          <!-- <img width="17" height="15" class="mr-1" src="~/assets/images/free_icon.svg"> -->
          Free
        </span>
      </div>
    </div>

    <div v-if="isDraft" class="absolute cursor-pointer left-0 rounded-[4px] top-1 bg-white shadow px-1.5 py-1.5 text-xs"
      @click="deleteDraft(listing)">
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M5.83431 1.83431C5.98434 1.68429 6.18783 1.6 6.4 1.6H9.6C9.81217 1.6 10.0157 1.68429 10.1657 1.83431C10.3157 1.98434 10.4 2.18783 10.4 2.4V3.2H5.6V2.4C5.6 2.18783 5.68429 1.98434 5.83431 1.83431ZM4 3.2V2.4C4 1.76348 4.25286 1.15303 4.70294 0.702944C5.15303 0.252856 5.76348 0 6.4 0H9.6C10.2365 0 10.847 0.252856 11.2971 0.702944C11.7471 1.15303 12 1.76348 12 2.4V3.2H13.6H15.2C15.6418 3.2 16 3.55817 16 4C16 4.44183 15.6418 4.8 15.2 4.8H14.4V15.2C14.4 15.8365 14.1471 16.447 13.6971 16.8971C13.247 17.3471 12.6365 17.6 12 17.6H4C3.36348 17.6 2.75303 17.3471 2.30294 16.8971C1.85286 16.447 1.6 15.8365 1.6 15.2V4.8H0.8C0.358172 4.8 0 4.44183 0 4C0 3.55817 0.358172 3.2 0.8 3.2H2.4H4ZM3.2 4.8V15.2C3.2 15.4122 3.28429 15.6157 3.43431 15.7657C3.58434 15.9157 3.78783 16 4 16H12C12.2122 16 12.4157 15.9157 12.5657 15.7657C12.7157 15.6157 12.8 15.4122 12.8 15.2V4.8H11.2H4.8H3.2Z"
          fill="#FC2323" />
      </svg>
    </div>

    <freeDeliveryCod :listing="listing" />
    <listingUserDetails v-if="viewLisitngUserDet(listing) && !type" :listing="listing" />

    <a href="javascript:;" v-if="isMyListing && !listing.featured && listing.offerStage === 'Published' && eligibleForFeature && !listing.featuredWaitListing"
      @click="sellFast(listing)" :class="{ 'opacity-40 disabled cursor-not-allowed': !eligibleForFeature }"
      class=" cursor-pointer right-0 mt-2 bg-[#F99B1C] font-medium text-sm rounded-sm inline-block text-white px-3 py-1.5 min-w-[100px] text-center">
      {{ $t('sellFaster') }}
    </a>

    <div
      v-if="isMyListing && !listing.featured && listing.offerStage === 'Published' && eligibleForFeature && listing.featuredWaitListing"
      class="flex items-center relative mt-2">
      <div class="text-xs text-gray-700 mr-2">{{ $t('sellFasterWaitlist') }}</div>
      <div class="ml-0 relative">
        <div class="relative flex flex-col items-center group">
          <div class="w-4 h-4 flex items-center justify-center bg-white border border-[#4B6E82] rounded-full">
            <span class="text-sm text-[#4B6E82] rotate-180 font-bold ">!</span>
          </div>

          <div class="absolute top-[-78px] left-[-85px] w-[185px] flex flex-col items-center hidden group-hover:flex ">
            <div class="rounded text-left z-10 p-2 text-[11px] text-white bg-gray-500 shadow-lg ">
              {{ $t('sellFasterwaitlistPara') }}
            </div>
            <div class="w-3 h-3 rotate-45 bg-gray-500 absolute bottom-[-6px]"></div>
          </div>
        </div>
      </div>
    </div>


    <!--listing statitics start here-->
    <!-- <div class="statitics w-full pt-3">
      <div class="grid grid-cols-3 gap-3 w-full text-center justify-center">
        <div >
          <div class="flex  justify-center"><svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.8844 9.58225C25.8888 4.04447 20.6355 0.693359 14.8221 0.693359C9.00881 0.693359 3.74659 4.04447 0.777697 9.58225L0.528809 10L0.75992 10.4267C3.75548 15.9645 9.00881 19.3156 14.8221 19.3156C20.6355 19.3156 25.8977 16.0089 28.8844 10.4267L29.1155 10L28.8844 9.58225ZM14.8221 17.4934C9.8177 17.4934 5.22214 14.7022 2.55548 10C5.22214 5.2978 9.8177 2.50669 14.8221 2.50669C19.8266 2.50669 24.3688 5.30669 27.0799 10C24.3688 14.7022 19.8177 17.4934 14.8221 17.4934Z" fill="black" fill-opacity="0.8"/>
<path d="M15.0801 3.92887C13.8749 3.93767 12.6993 4.30343 11.7018 4.97997C10.7044 5.6565 9.92975 6.61346 9.47584 7.72998C9.02192 8.84649 8.90906 10.0725 9.1515 11.2531C9.39395 12.4337 9.98084 13.516 10.838 14.3633C11.6952 15.2106 12.7843 15.7848 13.9677 16.0135C15.151 16.2422 16.3756 16.1151 17.4868 15.6482C18.5979 15.1813 19.5458 14.3956 20.2107 13.3903C20.8755 12.385 21.2276 11.2052 21.2224 9.99998C21.2189 9.19771 21.0571 8.404 20.7463 7.66436C20.4355 6.92471 19.9818 6.25367 19.4112 5.68968C18.8406 5.12569 18.1644 4.67984 17.4211 4.37769C16.6779 4.07554 15.8824 3.92302 15.0801 3.92887ZM15.0801 14.3467C14.2288 14.3379 13.399 14.0777 12.6951 13.5989C11.9911 13.1201 11.4443 12.444 11.1234 11.6554C10.8024 10.8668 10.7216 10.001 10.8912 9.16669C11.0607 8.33237 11.473 7.56673 12.0762 6.96595C12.6794 6.36517 13.4468 5.95603 14.2818 5.78991C15.1168 5.62379 15.9823 5.70811 16.7695 6.03227C17.5567 6.35643 18.2307 6.90598 18.7066 7.6119C19.1825 8.31782 19.4393 9.14863 19.4446 9.99998C19.4469 10.573 19.3355 11.1407 19.1168 11.6703C18.8981 12.1999 18.5764 12.6808 18.1705 13.0851C17.7645 13.4895 17.2823 13.8092 16.7518 14.0257C16.2213 14.2423 15.6531 14.3514 15.0801 14.3467Z" fill="black" fill-opacity="0.8"/>
</svg>
</div>
          <div>22</div>
        </div>

        <div>
          <div class="flex  justify-center">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_10337_1396)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8235 2.42265C15.632 2.10494 16.4986 1.94141 17.3738 1.94141C18.249 1.94141 19.1156 2.10494 19.9242 2.42265C20.7326 2.74031 21.467 3.20587 22.0857 3.79276C22.7045 4.37945 23.1958 5.07632 23.5307 5.84296C23.8658 6.60974 24.0382 7.43161 24.0382 8.2616C24.0382 9.0916 23.8658 9.91347 23.5307 10.6802C23.1958 11.447 22.7048 12.1436 22.0859 12.7303C22.0858 12.7303 22.0859 12.7302 22.0859 12.7303L13.0249 21.3233C12.6246 21.703 11.9756 21.703 11.5753 21.3233L2.51429 12.7303C1.26458 11.5451 0.5625 9.93769 0.5625 8.2616C0.5625 6.58552 1.26458 4.97809 2.51429 3.79292C3.764 2.60775 5.45897 1.94193 7.22632 1.94193C8.99368 1.94193 10.6886 2.60775 11.9384 3.79292L12.3001 4.13595L12.6616 3.79308C12.6617 3.79302 12.6616 3.79313 12.6616 3.79308C13.2803 3.20612 14.015 2.74034 14.8235 2.42265ZM17.3738 3.88554C16.7679 3.88554 16.1679 3.99875 15.6082 4.21871C15.0484 4.43866 14.5399 4.76105 14.1115 5.16746L13.0249 6.19801C12.6246 6.57763 11.9756 6.57763 11.5753 6.19801L10.4888 5.16762C9.62353 4.34705 8.44998 3.88606 7.22632 3.88606C6.00266 3.88606 4.82912 4.34705 3.96386 5.16762C3.0986 5.9882 2.6125 7.10114 2.6125 8.2616C2.6125 9.42207 3.0986 10.535 3.96386 11.3556L12.3001 19.2613L20.6363 11.3556C21.0648 10.9494 21.4049 10.4669 21.6369 9.93605C21.8688 9.4052 21.9882 8.83622 21.9882 8.2616C21.9882 7.68699 21.8688 7.11801 21.6369 6.58716C21.4049 6.05631 21.065 5.574 20.6365 5.16779C20.2081 4.76138 19.6992 4.43866 19.1395 4.21871C18.5797 3.99875 17.9797 3.88554 17.3738 3.88554Z" fill="black" fill-opacity="0.8"/>
</g>
<defs>
<clipPath id="clip0_10337_1396">
<rect width="24.6" height="23.3296" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
          <div>22</div>
        </div>

        <div>
          <div class="flex  justify-center">
            <svg width="24" height="16" viewBox="0 0 25 16" fill="none">
                      <path d="M0 12.5V2.625V2.5H3.75V11.5C3.75 12.1 3.25 12.4167 3 12.5H0Z" fill="#888a8f" />
                      <path d="M25 12.5V2.625V2.5H21.25V11.5C21.25 12.1 21.75 12.4167 22 12.5H25Z" fill="#888a8f" />
                      <path
                        d="M4.875 2.25L7.625 0H11.125C10.875 0.25 10 1.1 8.5 2.5C6.25 4.75 7.625 6.375 8 7C9.9 8.9 12.2083 7.125 13.125 6C14.4583 7.125 17.55 9.775 19.25 11.375C19.25 14.25 16.875 12.875 16.625 13.125C14.625 16.5 13 14.125 12.625 14.125C11.925 15.225 10.4167 15.0833 9.75 14.875L5.625 11H4.875V2.25Z"
                        fill="#888a8f" />
                      <path
                        d="M17.5 0H13C12.1667 0.75 10.125 2.65 8.62501 4.25C8.12501 6.55 9.83334 6.54167 10.75 6.25C11.5 5.58333 13.225 4.075 14.125 3.375C15.025 2.675 15.1667 3.66667 15.125 4.25L14.125 5.25L20 10V2.375L17.5 0Z"
                        fill="#888a8f" />
                      <circle cx="1.64456" cy="10.4446" r="0.986842" fill="#888a8f" />
                      <circle cx="23.3555" cy="10.4446" r="0.986842" fill="#888a8f" />
                    </svg></div>
          <div>22</div>
        </div>

      </div>
    </div> -->

  </div>
</template>
<script>
import Vue from 'vue'
import freeDeliveryCod from '../atoms/listing/freeDeliveryCod.vue';
export default Vue.extend({
  name: 'ListingItem',
  props: ['listing', 'type', 'isMyListing', "returnUrl", "eligibleForFeature"],
  components: { freeDeliveryCod },
  asyncData() {
    return {
      isEligibleTosellFast: false,
      click_source: ''
    }
  },
  computed: {
    isOwner() {
      if (this.isMyListing) {
        return ''
      } else {
        return '_blank'
      }
    },

    listLink() {
      //  return this.isDraftListing() ? `/listing/item?id=${this.listing.draftOfferId}` : `/p/${this.listing.seOId || this.slugify(this.listing.name)}/${this.listing.offerId || this.listing.oid}`
      return this.isDraftListing() ? `/listing/item?id=${this.listing.draftOfferId}` : `/p/${this.slugify(this.listing.seOId) || this.$createSlugUrl(this.listing)}/${this.listing.offerId || this.listing.oid}`

    },
    imageUrl() {

      if (this.listing.image) {
        if (this.listing.image.thumbnails) {
          return this.listing.image.thumbnails['200x200']
        } else {
          return this.listing.image.url
        }

      } else if (this.listing.images && this.listing.images.length > 0) {
        const images = this.listing.images.sort(function (a, b) {
          return a.cover ? -1 : 1
        })
        return images[0].url
      }

      return null
    },
    isDraft() {
      return this.isDraftListing()
    }
  },
  mounted() {
    // if(this.eligibleForFeature){
    //   this.isEligibleTosellFast = true
    // }else{
    //   this.isEligibleTosellFast = false
    // }

    // console.log(this.isMyListing)
  },
  methods: {

    onLisitngClick(lisitngDet) {
      this.click_source = this.getListingSourceName()
      if (lisitngDet?.featured) {
        this.callFeaturedAnalytics(lisitngDet)
      }
    },

    getListingSourceName(){
     if(this.$route.path && this.$route.path.includes('/search')){
      return 'search'
     }else{
      return 'home'
     }
    },

    callFeaturedAnalytics(analyticsdata) {
      try {
        const analyticsData = {
          channel_id: 'WEB',
          listing_id: analyticsdata?.oid, //user message
          click_source:this.click_source
        };
        this.$fire.analytics.logEvent('gintaa_featured_listing_click', analyticsData)
      } catch (e) {
        
      }
    },

    sellFast(lisitngDet) {
      // console.log("lisitngDet offerId: ",lisitngDet)
      this.$router.push({ path: this.localePath(`/feature-lisitng`), query: { offerId: lisitngDet.offerId, returnUrl: this.returnUrl } })
    },

    checkIsAffiliated(product) {
      //  console.log("product.user",product.user)
      if (product.user?.gintaaAffiliated) {
        return true
      } else {
        return false
      }
    },

    viewLisitngUserDet(lisitngDet) {
      // console.log("lisitngDet",lisitngDet)
      if (lisitngDet.user?.gintaaAffiliated) {
        return false
      } else {
        return true
      }
    },

    getOfferSatge(offerStage) {
      if (offerStage && offerStage === 'Completed') {
        return this.$t('soldOut')
      } else {
        return offerStage
      }
    },

    isDraftListing() {
      return this.listing.draftOfferId ? true : false //iSdraft
    },
    deleteDraft(listing) {
      this.$store.dispatch('dialogs/confirm/show', listing)
    },
    checkOffPercentage(productDet) {
      let price = productDet?.price
      let unitOfferValuation = productDet?.unitOfferValuation
      let diffValue = +productDet?.price - +productDet?.unitOfferValuation

      //console.log("diffValue",diffValue)
      if (diffValue > 0) {
        return this.$cacculateoffpercentage(+productDet?.price, +productDet?.unitOfferValuation)
        // return (Math.round((diffValue/ price) * 100))
      } else {
        return null
      }
    },
    slugify(text) {
      if (text) {
        return text
          .toString() // Cast to string
          .toLowerCase() // Convert the string to lowercase letters
          .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
          .trim() // Remove whitespace from both sides of a string
          .replace(/\s+/g, '-') // Replace spaces with -
          .replace(/[^\w\-]+/g, '') // Remove all non-word chars
          .replace(/\-\-+/g, '-') // Replace multiple - with single -
      }
      return text
    },
    getPublishDate(listing) {
      return listing?.publishedDate ? listing?.publishedDate : listing?.createdDate
    },
    removeFromFav(status) {
      //  console.log("status",status)
      //  if(status){
      //   this.$emit("removeFromFav", true);
      //  }
    },

    getDiscountPercentage(unitOfferVal, marketValue) {
      const disCountPer = Math.round((((marketValue - unitOfferVal) / marketValue) * 100).toFixed(2));
      if (disCountPer > 0) {
        return '(' + disCountPer + '%' + 'Off' + ')'
      } else {
        return null
      }
      //return Math.round(disCountPer)
    },
  }
})
</script>
<style scoped>
.Blocked .tag-change {
  background: #E80F0F !important;
}

.Completed .tag-change {
  background: #F47960 !important;
}

.Failed .tag-change {
  background: #FF0000 !important;
}

.Review .tag-change {
  background: #3840F7 !important;
}

.Published .tag-change {
  background: #8bc63e !important;
}

.Hidden .tag-change {
  background: #F47960 !important;
}

/* .list-premium-tag .premium-tag{
  left: 0!important;
  top: 125px!important;
} */
</style>