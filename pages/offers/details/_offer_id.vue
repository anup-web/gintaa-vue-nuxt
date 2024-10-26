<template>
  <div class="product-details-page pt-[80px] lg:pt-12 bg-[#fcfbfb] ">
    <div v-if="isConfirmRevise" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#d0fd96] sm:mx-0 sm:h-10 sm:w-10">
                  <img src="~/assets/images/offer/revise-icon.webp" alt="icon" width="28" height="28" />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">{{ $t('reviseBtn') }}</h3>
                  <div class="mt-2 text-sm text-gray-700">
                    <div v-if="this.offerData.callerIsReceiver" class="text-center text-[#4a4a4a] font-normal">
                      <div v-if="this.offerData.canRevise">
                        {{ $t('reviseMssg',{reviseCount: this.offerData.updateCounter==0?2:1}) }}
                      </div>
                    </div>
                    <div v-else class="text-center text-[#4a4a4a] font-normal">
                      <div v-if="this.offerData.canRevise">
                        {{ $t('reviseMssg',{reviseCount: 1}) }}
    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <div v-if="this.offerData.canRevise">
                <a 
                  :href="localePath('/offers/revise/'+offerId)"
                  type="button"
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-firoza px-4 py-2 text-base font-medium text-white shadow-sm  sm:ml-3 sm:w-auto sm:text-sm">
                  <span> {{ $t('proceedBtn') }} </span>
                </a>
              </div>
              <button @click="closePopup('revise')" type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-700 bg-transparent px-4 py-2 text-base font-medium text-gray-700 shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{{$t('cancelBtn')}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <fullPageLoader v-if="loading" />
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class="container max-w-8xl mx-auto px-4 pt-6 mb-1 sm:px-8 sm:pt-12 md:px-16 md:pt-12 lg:px-8 lg:pt-10 xl:px-32 xl:pt-10 2xl:px-60 2xl:pt-10 relative">
      <Breadcrumb class="block"  :breadcrumb="breadcrumb"/>
      <div class="absolute right-2 w-[70px] -mt-6 d-block sm:hidden">
        <div @click="displayTipsModal()" class="  flex justify-end drop-shadow-sm border border-gray-300 bg-white py-0 pb-[5px] px-2 rounded text-firoza font-medium text-base mt-[5px] ml-2">
                                           <img class="h-[23px] mt-0" src="~/assets/images/tips.svg" alt="tips" /><span class="inline-block pt-[4px] ml-0 text-green text-sm">Tips</span>
                                       </div>
      <!-- <div class="d-block sm:hidden">
        <div class="flex">
            <div class="flex-none h-[43px] w-[40px]">
                <img src="~/assets/images/tips.svg" />

            </div>
            <div @click="displayTipsModal" class="flex pt-[11px] pl-2">
                <h3 class="section-title text-gray-600  text-base md:text-base  font-medium mb-2" >
                    Tips    
                </h3>
                
            </div>
                                
        </div>
      </div>     -->
      </div>
    </div>
    <div class="container max-w-8xl mx-auto px-4 pt-3 mb-8 sm:px-8 sm:pt-10 md:px-16 md:pt-5 lg:px-8 lg:pt-5 xl:px-32 xl:pt-5 2xl:px-60 2xl:pt-5 min-h-[500px]">
      <div class="flex flex-col w-full mx-auto relative overflow-x-visible pl-5 pr-1 mt-5 sm:mt-8 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
        <div class="w-full mb-12 relative">
          <ol  role="list" class="flex items-center w-full relative status-offer-mob-desk">
            
            <li v-for="(state,index) in offerData.allStates" :key="index + state" class="relative flex items-center" :class="(index === offerData.allStates.length -1) ? '' : 'w-full'">
              <div class="flex items-center text-teal-600 relative group">
                  
                  <div v-if="(index < offerData.currentStetPosition || offerData.currentStetPosition === offerData.allStates.length - 1) && state === 'REJECTED'" class="bg-errortext flex items-center justify-center rounded-full transition duration-500 ease-in-out w-8 h-8 py-3">
                    <!-- <svg class="w-5 h-5 text-white" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg> -->
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96079 1.07741C6.11707 0.921126 6.32903 0.833328 6.55004 0.833328H13.45C13.6711 0.833328 13.883 0.921126 14.0393 1.07741L18.9226 5.96074C19.0789 6.11702 19.1667 6.32898 19.1667 6.55V13.45C19.1667 13.671 19.0789 13.883 18.9226 14.0393L14.0393 18.9226C13.883 19.0789 13.6711 19.1667 13.45 19.1667H6.55004C6.32903 19.1667 6.11707 19.0789 5.96079 18.9226L1.07745 14.0393C0.921171 13.883 0.833374 13.671 0.833374 13.45V6.55C0.833374 6.32898 0.921171 6.11702 1.07745 5.96074L5.96079 1.07741ZM6.89522 2.49999L2.50004 6.89517V13.1048L6.89522 17.5H13.1049L17.5 13.1048V6.89517L13.1049 2.49999H6.89522Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0893 6.91073C13.4148 7.23617 13.4148 7.76381 13.0893 8.08925L8.08934 13.0892C7.7639 13.4147 7.23626 13.4147 6.91083 13.0892C6.58539 12.7638 6.58539 12.2362 6.91083 11.9107L11.9108 6.91073C12.2363 6.5853 12.7639 6.5853 13.0893 6.91073Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.91083 6.91073C7.23626 6.5853 7.7639 6.5853 8.08934 6.91073L13.0893 11.9107C13.4148 12.2362 13.4148 12.7638 13.0893 13.0892C12.7639 13.4147 12.2363 13.4147 11.9108 13.0892L6.91083 8.08925C6.58539 7.76381 6.58539 7.23617 6.91083 6.91073Z" fill="white"/>
                    </svg>

                  </div>

                  <div v-else-if="(index < offerData.currentStetPosition || offerData.currentStetPosition === offerData.allStates.length - 1) && state === 'EXPIRED'"  class="bg-errortext flex items-center justify-center rounded-full transition duration-500 ease-in-out w-8 h-8 py-3">
                    <!-- <svg class="w-5 h-5 text-white" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg> -->
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.48757 0.0208121C4.26716 0.165506 3.31266 0.533263 2.40919 1.21C0.324079 2.7747 -0.51674 5.47757 0.320202 7.93411C0.613672 8.79064 1.05959 9.51432 1.70898 10.1794C2.67511 11.1729 3.8994 11.7872 5.26859 11.9631C5.89451 12.0451 6.82533 11.9943 7.07186 11.8692C7.2988 11.7519 7.33002 11.4076 7.12655 11.2278C7.02104 11.1417 7.00533 11.1378 6.60635 11.169C4.94002 11.306 3.54736 10.8404 2.44041 9.77656C1.65408 9.02146 1.19265 8.2235 0.926531 7.15574C0.844285 6.82716 0.832653 6.6941 0.832653 6.00185C0.832653 5.30961 0.844285 5.17655 0.926531 4.84797C1.41939 2.87654 2.86674 1.42531 4.84206 0.932448C5.17451 0.850203 5.29981 0.838571 6.01553 0.838571C6.76267 0.842448 6.84472 0.846325 7.21635 0.948162C8.46799 1.27673 9.44207 1.92613 10.1813 2.9196C10.4433 3.27552 10.8072 3.96001 10.9284 4.3396C11.0145 4.61736 11.077 4.71124 11.2178 4.76981C11.4447 4.86369 11.7653 4.65246 11.7653 4.40205C11.7653 4.26124 11.5502 3.69021 11.3507 3.29511C10.5684 1.76572 9.22268 0.666529 7.56023 0.212854C6.92696 0.0404042 6.04696 -0.0416371 5.48757 0.0208121Z" fill="white"/>
                      <path d="M5.91777 2.02368C5.78084 2.07062 5.66737 2.16838 5.6243 2.28184C5.60083 2.34838 5.58512 2.94287 5.58512 3.90512C5.58512 5.40716 5.58512 5.42288 5.50288 5.49716C5.38553 5.5988 5.27206 5.85696 5.27206 6.01737C5.27206 6.14247 5.20165 6.22472 4.5092 6.92492C3.75042 7.68778 3.74634 7.69166 3.74634 7.8637C3.74634 7.96146 3.77369 8.07493 3.80511 8.11799C3.88328 8.23146 4.07511 8.30574 4.20409 8.27044C4.2745 8.25472 4.59532 7.96534 5.07634 7.48411C5.80777 6.75656 5.84696 6.72533 5.99553 6.72533C6.60961 6.72533 6.9539 5.94696 6.5237 5.52839L6.41023 5.41492L6.40635 3.89716C6.40635 2.19552 6.39859 2.15266 6.15594 2.05082C6.07778 2.0196 6.01124 1.99205 6.00737 1.99613C6.00002 2.00021 5.96084 2.01184 5.91777 2.02368Z" fill="white"/>
                      <path d="M11.6874 5.7241C11.6013 5.75145 11.5154 5.82186 11.4488 5.92349C11.3942 6.00961 9.60639 9.09983 7.47863 12.7884C3.24229 20.1344 3.48882 19.665 3.72351 19.9037L3.82515 20.0054H11.8048H19.7844L19.8901 19.8958C20.1287 19.6611 20.3711 20.1186 16.0723 12.6749C13.917 8.9433 12.1295 5.85696 12.0942 5.82165C11.9925 5.71226 11.8401 5.67328 11.6874 5.7241ZM15.3566 13.0388C17.2968 16.4027 18.8848 19.1721 18.8848 19.1997C18.8848 19.2309 17.0619 19.2427 11.8009 19.2427C5.62454 19.2427 4.72087 19.235 4.7325 19.1839C4.74821 19.1097 11.7772 6.92104 11.8048 6.92104C11.8166 6.92104 13.4164 9.67473 15.3566 13.0388Z" fill="white"/>
                      <path d="M11.3627 10.8404C11.3 10.8874 11.2961 11.0674 11.3039 13.2382L11.3157 15.5852H11.7851H12.2545L12.2663 13.2147L12.2741 10.8404L12.188 10.817C12.0237 10.7739 11.4331 10.7896 11.3627 10.8404Z" fill="white"/>
                      <path d="M11.3237 16.567C11.308 16.5827 11.2964 16.8213 11.2964 17.0952C11.2964 17.6741 11.2613 17.6388 11.8049 17.6388C12.3525 17.6388 12.3174 17.678 12.3055 17.0756L12.2937 16.5631L11.8204 16.5515C11.5623 16.5474 11.3392 16.5554 11.3237 16.567Z" fill="white"/>
                    </svg>



                  </div>

                  <!-- v-else-if="index < offerData.currentStetPosition || offerData.currentStetPosition === offerData.allStates.length - 1" -->
                  <div v-else-if="index <= offerData.currentStetPosition || offerData.currentStetPosition === offerData.allStates.length" :class="state === 'REJECTED' ? 'bg-errortext ' : state === 'EXPIRED' ? 'bg-errortext' : 'bg-green'" class="flex items-center justify-center rounded-full transition duration-500 ease-in-out w-8 h-8 py-3">
                    <svg class="w-5 h-5 text-white" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <!-- <div v-else-if="index === offerData.currentStetPosition && offerData.currentStetPosition !== offerData.allStates.length - 1 " class="flex items-center justify-center rounded-full transition duration-500 ease-in-out w-8 h-8 py-3 border-2 border-green">
                    <span aria-hidden="true" class="h-2.5 w-2.5 bg-green rounded-full"></span>
                  </div> -->
                  <div v-else class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
                      <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true"></span>
                  </div>
                  
                  <!-- <div class="mob absolute -top-8 -ml-12 text-center w-32 text-xsb  hidden" :class="state === 'REJECTED' ? 'text-errortext ' : 'text-gray-500'">{{state | RemoveUnderscore | capitalize}}</div>
                  <div class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-xsb  capitalize" :class="state === 'REJECTED' ? 'text-errortext ' : 'text-gray-500'">{{state | RemoveUnderscore | capitalize}}</div> -->
                  <div class="mob absolute -top-8 -ml-12 text-center w-32 text-xsb  hidden" :class="state === 'REJECTED' ? 'text-errortext ' : state === 'EXPIRED' ? 'text-errortext ' : 'text-gray-500'">{{ $t('offerState.'+state)}}</div>
                  <div class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-xsb  capitalize" :class="state === 'REJECTED' ? 'text-errortext ' : state === 'EXPIRED' ? 'text-errortext ' : 'text-gray-500'">{{ $t('offerState.'+state) }}</div>
              </div>
              <div v-if="index < offerData.allStates.length -1" :class="(index >= offerData.currentStetPosition) ? 'border-gray-200' : 'border-green'" class="flex-auto border-t-2 transition duration-500 ease-in-out"></div>
            </li>            
          </ol>
        
                 
        </div>
      </div>







      <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        <div class="order-1 basis-4/6 sm:basis-full md:basis-4/6 lg:basis-4/6 xl:basis-4/6 bg-white shadow-sm rounded-sm relative">
          
          <div class="relative w-full flex-col  px-3 py-3">
            <div v-if="!offerData.clickable" class="absolute h-full w-full bg-white z-50 opacity-0"></div>
            <div class="w-full block sm:block md:flex justify-between ">
              <div class="w-64 mb-6 sm:mb-6 md:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0">
                <div class="flex flex-col">
                  <div class="flex items-center overflow-hidden">
                    <client-only>
                      <nuxt-link :to="getUserProfileUrl(offerData.leftPanelUserInfo.id)">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img v-if="getProfileImageUrl(offerData.leftPanelUserInfo.imageUrl)" class="h-10 w-10 rounded-full" :src="getProfileImageUrl(offerData.leftPanelUserInfo.imageUrl)" :alt="offerData.leftPanelUserInfo.name">
                          <img v-else class="h-10 w-10 rounded-full" src="~/assets/images/profile/profile.jpg" :alt="offerData.leftPanelUserInfo.name">
                        </div>
                      </nuxt-link>
                    </client-only>
                    <div class="ml-3">
                      <div class="text-sm font-normal text-gray-900 truncate">
                        {{offerData.leftPanelUserInfo.name}}
                      </div>
                      <div class="text-xs font-normal text-gray-500">
                        {{ $t('you') }}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div v-if="offerData.leftPanelOffers && offerData.leftPanelOffers.length >= 1" class="group mt-5 box-border overflow-hidden flex p-3 pe-0 pb-2 lg:pb-3 flex-col items-start bg-white relative">
                  
                  <a :href="getListingDetailsLink(offerData.leftPanelOffers[0])" target="_blank" class="product-img flex mb-2 md:mb-2 h-44 justify-center w-full items-center overflow-hidden cursor-pointer">
                    <img 
                      v-if="offerData.leftPanelOffers[0].images && offerData.leftPanelOffers[0].images.length > 0" 
                      :src="offerData.leftPanelOffers[0].images[0].url" 
                      :alt="offerData.leftPanelOffers[0].offerName" 
                      class="bg-gray-300 object-cover  m-w-[100%]  max-h-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
                  </a>
                  <div class="product-title w-full overflow-hidden px-1">
                    <h2 class="text-heading font-semibold truncate mb-1 text-sm text-gray-600">
                      {{offerData.leftPanelOffers[0].offerName}}
                    </h2>                    
  <div class="text-gray-500 truncate 2xl:text-sm lg:text-xs font-normal flex item-center mr-1">
                    <span> {{$t('valueText')}} : </span>
                    <span class="flex items-center ml-2 font-medium">

                      <img v-if="offerData.transactionType === 'COIN'" src="~/assets/images/coin.svg" class="mr-1 w-[16px]"> 
                      <svg v-else width="8" height="13" viewBox="0 0 11 18" fill="none" class="mr-1">
                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black" />
                    </svg> 

                     
                   
                     {{offerData.leftPanelOffers[0].price}} 
                    </span>
                </div>
                    <!-- <div v-if="offerData.leftPanelOffers[0].exchangeMode === 'Money'" class="text-heading font-medium text-base text-gray-700 flex items-center pl-[48px]   relative ">
                      <span class="inline-block mr-2 absolute left-0">
                        <img src="~/assets/images/barter_green_blue.png" alt="icon" /></span>
                        <span class="mr-2">:</span>
                        <span class="text-sm text-gray-500 font-normal flex items-center" >
                          <svg width="7" height="14" viewBox="0 0 11 18" fill="none" class="mr-1" data-v-1678eb02=""><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black" data-v-1678eb02=""></path></svg>
                          {{offerData.leftPanelOffers[0].price}}
                         
                        </span>
                     </div> -->

                     <!-- <div  class="text-heading font-medium text-base text-gray-700 flex items-center">
                      <span class="inline-block mr-2">
                        <img src="~/assets/images/barter_green_blue.png" alt="icon">
                      </span>
                      <span class="mr-2">:</span>
                      <span class="text-sm text-gray-500 font-normal">
                        <svg width="7" height="14" viewBox="0 0 11 18" fill="none" class="mr-1" data-v-1678eb02=""><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black" data-v-1678eb02=""></path></svg>
                        {{offerData.leftPanelOffers[0].price}}                        
                        
                      </span>
                    </div> -->
                  </div>  
                  <div v-if="offerData.leftPanelRequestedAmount" class="absolute right-2 bg-black bg-opacity-50 p-3">
                   <span class="relative flex items-center font-bold text-lg text-white">
                     + 
                      <div v-if="offerData.transactionMode === 'CASH'" class="px-1">
                        <svg width="14" height="14" viewBox="0 0 14 25" fill="none"  >
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#fff"/>
                        </svg>
                      </div>
                      <div v-else class="px-1">
                        <img src="~/assets/images/offer/coin-value.svg" alt="coin" class="w-[20px]">
                      </div>
                    {{offerData.leftPanelRequestedAmount}} 
                  </span>
                  </div>
                </div>
                <div v-else-if="offerData.leftPanelRequestedAmount" class="group mt-5 box-border overflow-hidden flex p-3  h-64 cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5   relative" >
                  <div class="product-img flex h-full justify-center w-full  items-center overflow-hidden">
                        <div class="subd-price">
                          <div class="w-full flex items-center justify-center">
                            <img v-if="offerData.transactionMode === 'COIN'" src="~/assets/images/gintaa-coin-bag.svg" alt="gintaa-coin" class="w-[135px]"> 
                            <img v-else src="~/assets/images/gintaa-rupees-new-symbol.svg" alt="gintaa-rupees" class="w-[135px]">  
                          </div>
                          <div class="w-full flex items-center justify-center mt-2">
                                <span class="text-lg text-gray-800 "> {{offerData.leftPanelRequestedAmount}} </span>
                              <!-- <span class="text-lg text-white "> free </span> -->
                          </div>
                        </div>
                  </div>
              </div>
              </div>

              <div class="justify-start items-center hidden py-8 pl-28 sm:justify-start sm:py-8 sm:pl-28 sm:hidden md:justify-center md:py-0 md:pl-0 md:flex lg:flex xl:flex 2xl:flex">
                <img src="~/assets/images/barter_green_blue.png" alt="image">
              </div>

              <div class="w-64">
                <div class="flex justify-between">
                  <div class="flex items-center">

                    <client-only>
                      <nuxt-link :to="getUserProfileUrl(offerData.rightPanelUserInfo.id)">
                        <div class="flex-shrink-0 h-10 w-10">
                          <img v-if="getProfileImageUrl(offerData.rightPanelUserInfo.imageUrl)" class="h-10 w-10 rounded-full" :src="getProfileImageUrl(offerData.rightPanelUserInfo.imageUrl)" :alt="offerData.rightPanelUserInfo.name">
                          <img v-else class="h-10 w-10 rounded-full" src="~/assets/images/profile/profile.jpg" :alt="offerData.rightPanelUserInfo.name">
                        </div>
                      </nuxt-link>
                    </client-only>
                    <div class="ml-3">
                      <div class="text-sm font-normal text-gray-900">
                        {{offerData.rightPanelUserInfo.name}}
                      </div>
                      <div v-if="offerData.rightPanelOffers && offerData.rightPanelOffers.length >= 1" class="text-xs font-normal text-gray-500">
                        <!-- (Kolkata) -->
                        ({{offerData.rightPanelOffers[0].location.city}})
                      </div>
                    </div>
                  </div>
                  <div v-if="offerData.rightPanelUserInfo.averageRating" class="flex items-center">
                    <div class="flex items-center space-x-1">
                      <svg class="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div class="flex items-center ml-1">
                      <div class="text-sm text-gray-500">
                        {{offerData.rightPanelUserInfo.averageRating}}
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="offerData.rightPanelOffers && offerData.rightPanelOffers.length >= 1" class="group mt-5 box-border overflow-hidden flex p-3 pe-0 pb-2 lg:pb-3 flex-col items-start bg-white relative">
                  <a :href="getListingDetailsLink(offerData.rightPanelOffers[0])" target="_blank" class="product-img flex mb-2 md:mb-2 h-44 justify-center w-full items-center overflow-hidden cursor-pointer">
                    <img 
                      v-if="offerData.rightPanelOffers[0].images && offerData.rightPanelOffers[0].images.length > 0"
                      :src="offerData.rightPanelOffers[0].images[0].url" :alt="offerData.rightPanelOffers[0].offerName" class="bg-gray-300 object-cover  m-w-full max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
                  </a>
                  <div class="product-title w-full overflow-hidden px-1">
                    <h2 class="text-heading font-semibold truncate mb-1 text-sm text-gray-600">
                      {{offerData.rightPanelOffers[0].offerName}}
                    </h2>                    

                    <!-- <div v-if="offerData.rightPanelOffers[0].exchangeMode === 'Money'" class="text-heading font-medium text-base text-gray-700 flex items-center pl-[48px]   relative ">
                      <span class="inline-block mr-2 absolute left-0">
                        <img src="~/assets/images/barter_green_blue.png" alt="icon" /></span>
                        <span class="mr-2">:</span>
                        <span class="text-sm text-gray-500 font-normal flex items-center" >
                          <svg width="7" height="14" viewBox="0 0 11 18" fill="none" class="mr-1" data-v-1678eb02=""><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black" data-v-1678eb02=""></path></svg>
                          {{offerData.rightPanelOffers[0].price}}
                          
                        </span>
                     </div> -->
                      <div class="text-gray-500 truncate 2xl:text-sm lg:text-xs font-normal flex item-center mr-1">
                    <span> {{$t('valueText')}} : </span>
                    <span class="flex items-center ml-2 font-medium">
                      <img v-if="offerData.transactionType === 'COIN'" src="~/assets/images/coin.svg" class="mr-1 w-[16px]">
                     <svg v-else width="8" height="13" viewBox="0 0 11 18" fill="none" class="mr-1">
                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black" />
                    </svg> 
                       
                     {{offerData.rightPanelOffers[0].price}}
                    </span>
                </div>

                     <!-- <div  class="text-heading font-medium text-base text-gray-700 flex items-center">
                      <span class="inline-block mr-2">
                        <img src="~/assets/images/barter_green_blue.png" alt="icon">
                      </span>
                      <span class="mr-2">:</span>
                      <span class="text-sm text-gray-500 font-normal">
                        <svg width="7" height="14" viewBox="0 0 11 18" fill="none" class="mr-1" data-v-1678eb02=""><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black" data-v-1678eb02=""></path></svg>
                        {{offerData.rightPanelOffers[0].price}}
                       
                      </span>
                    </div> -->
                  </div>

                  <div v-if="offerData.rightPanelRequestedAmount" class="absolute bg-black right-2 bg-opacity-50 p-4">
                    <span class="relative flex items-center font-bold text-lg text-white">
                    +
                    <div v-if="offerData.transactionMode === 'CASH'" class="px-1">
                      <svg width="14" height="14" viewBox="0 0 14 25" fill="none" >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#ffffff"/>
                      </svg>
                    </div>
                    <div v-else class="px-1">
                      <img src="~/assets/images/offer/coin-value.svg" alt="coin" class="w-[20px]">
                    </div>
                    {{offerData.rightPanelRequestedAmount}} 
                      </span>
                  </div>

                </div>
                
                <div v-else-if="offerData.rightPanelRequestedAmount" class="group mt-5 box-border overflow-hidden flex p-3  h-64 cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white relative" >
                  <div class="product-img flex h-full justify-center w-full  items-center overflow-hidden">
                        <div class="subd-price">
                          <div class="w-full flex items-center justify-center">
                            <img v-if="offerData.transactionMode === 'COIN'" src="~/assets/images/gintaa-coin-bag.svg" alt="gintaa-coin" class="w-[135px]"> 
                            <img v-else src="~/assets/images/gintaa-rupees-new-symbol.svg" alt="gintaa-rupees" class="w-[135px]">                            
                          </div>
                          <div class="w-full flex items-center justify-center mt-2">
                            <span class="text-lg text-gray-800 "> {{offerData.rightPanelRequestedAmount}} </span>
                            <!-- <span class="text-lg text-white hidden"> free </span> -->
                          </div>
                        </div>
                  </div>
                </div>

                <!-- price details card start -->

                <!-- <div  class="group mt-5 box-border overflow-hidden flex p-3 h-64 cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5  shadow relative" >
                             <div class="w-full">
                              <h2 class="text-base text-gray-900 ">Price details</h2>

                              <div class="mt-6">
                                <div class="flex items-center justify-between mb-4">
                                  <div class="text-sm text-gray-500">
                                    Offered Price
                                  </div>
                                  <div class="flex items-center text-sm text-gray-700">
                                       <svg width="12" height="12" viewBox="0 0 14 25" fill="none" >
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#9e9e9e"/>
                                      </svg>
                                      <span class="pl-0.5">99.00</span>

                                  </div>
                                </div>
                                <div class="flex items-center justify-between">
                                  <div class="flex items-center text-sm text-gray-500">
                                    <span>Shipping charges</span>
                                  </div>
                                  <div class="flex items-center text-sm text-gray-700">
                                       <svg width="12" height="12" viewBox="0 0 14 25" fill="none" >
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#9e9e9e"/>
                                      </svg>
                                      <span class="pl-0.5">12.00</span>

                                  </div>
                                </div>

                                <div class="border-t border-gray-200 pt-4 flex items-center justify-between mt-5">
                                  <div class="text-sm text-gray-700">
                                    Total payble amount
                                  </div>
                                  <div class="flex items-center text-sm text-gray-700">
                                       <svg width="12" height="12" viewBox="0 0 14 25" fill="none" >
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#9e9e9e"/>
                                      </svg>
                                      <span class="pl-0.5">112.00</span>

                                  </div>
                                </div>
                              </div>

                            </div>

                            </div> -->
                <!-- price details card end -->
              </div>              

            </div>
            <!-- Start Request partner to recharge wallet to close offer -->
            <div  v-if="buttonVisibility.closeButton && (!offerData.receiverPaidAmount || !offerData.initiatorPaidAmount)" class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-2 mb-2">
              <div class="flex">
                <div class="ml-1">
                  <p class="text-sm text-yellow-700">
                   {{ $t('insufficentPara') }}
                  </p>
                </div>
              </div>
            </div>
            <!-- End Request partner to recharge wallet to close offer -->
          </div>

          <!-- user rating start     -->

          <!-- <div class="relative w-full flex-col bg-gray-50 px-3 py-2 mt-2">
            <div class="flex flex-col w-full">
              <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
                <div class="w-full flex flex-col">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-9 w-9">
                      <img class="h-9 w-9 rounded-full" src="~/assets/images/profile/profile.jpg" alt="image">
                    </div>
                    <div class="ml-3">
                      <div class="text-sm font-normal text-gray-900">
                        Jane Cooper
                      </div>
                      <div class="flex items-center space-x-1 mt-0.5">
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full flex flex-col">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-9 w-9">
                      <img class="h-9 w-9 rounded-full" src="~/assets/images/profile/profile.jpg" alt="image">
                    </div>
                    <div class="ml-3">
                      <div class="text-sm font-normal text-gray-900">
                        Jane Cooper
                      </div>
                      <div class="flex items-center space-x-1 mt-0.5">
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full flex flex-col">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-9 w-9">
                      <img class="h-9 w-9 rounded-full" src="~/assets/images/profile/profile.jpg" alt="image">
                    </div>
                    <div class="ml-3">
                      <div class="text-sm font-normal text-gray-900">
                        Jane Cooper
                      </div>
                      <div class="flex items-center space-x-1 mt-0.5">
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full flex flex-col">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-9 w-9">
                      <img class="h-9 w-9 rounded-full" src="~/assets/images/profile/profile.jpg" alt="image">
                    </div>
                    <div class="ml-3">
                      <div class="text-sm font-normal text-gray-900">
                        Jane Cooper
                      </div>
                      <div class="flex items-center space-x-1 mt-0.5">
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg class="w-4 h-4 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->

          <!-- user rating end     -->

          <!-- track order start -->

          <!-- <div class="relative w-full flex-col bg-gray-50 px-3 py-3 mt-2">
            <div class="flex w-full text-gray-900 text-base">
              Shipment tracking
            </div>

            <div class="flex w-full pl-3">
              <div class="flex flex-col w-full p-4 bg-gray-100 rounded-sm my-2.5 relative">
                <div class="text-xs text-gray-500 pl-6">
                  The delivery company will contact you regarding the pick up, Please print label, pack the item(s) and paste the label on the package .
                </div>
                <div class="absolute top-3 left-[-12px] w-10 h-10 bg-green flex justify-center items-center rounded-full">
                  <span>
                    <svg width="25" height="25" viewBox="0 0 57 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.7643 12.9311V1.47144V0.232795C10.7643 0.105417 10.8757 0 11.0103 0H12.3187H37.833C37.8747 0 37.9118 0.00878472 37.9443 0.0263542L38.8398 0.377743L38.747 0.592969L38.8398 0.377743C38.8769 0.39092 38.9048 0.412882 38.9326 0.439236L44.9319 6.04389L45.3216 6.40845L45.1499 6.57536L45.3216 6.40845C45.368 6.45238 45.3958 6.51387 45.3958 6.57536V7.09366V12.9399C45.3958 13.0673 45.2845 13.1727 45.1499 13.1727H42.547C42.4125 13.1727 42.3011 13.0673 42.3011 12.9399V9.91795H36.7101H35.4017C35.2672 9.91795 35.1558 9.81253 35.1558 9.68515C35.1558 9.67637 35.1558 9.67198 35.1558 9.66319V8.44651V2.93849H13.8684V12.9311C13.8684 13.0585 13.757 13.1639 13.6225 13.1639H11.0056C10.8757 13.1639 10.7643 13.0585 10.7643 12.9311ZM14.3648 29.8022H42.6537C42.6723 29.8022 42.6908 29.8022 42.7094 29.8066C43.0945 29.8153 43.4657 29.89 43.8044 30.0218C44.1709 30.1667 44.505 30.3776 44.7834 30.6411C45.0571 30.9003 45.2799 31.2165 45.433 31.5635C45.5722 31.8841 45.651 32.2311 45.6603 32.5957C45.665 32.6133 45.665 32.6308 45.665 32.6484V36.7069H51.7709C51.7895 36.7069 51.8034 36.7069 51.822 36.7113C52.0864 36.7069 52.3463 36.6498 52.5829 36.5576C52.8474 36.4522 53.084 36.2985 53.2835 36.1096C53.483 35.9207 53.6454 35.6967 53.7568 35.4463C53.8542 35.2223 53.9145 34.9764 53.9192 34.7216C53.9145 34.7084 53.9145 34.6909 53.9145 34.6777V19.1287C53.9145 19.1112 53.9145 19.098 53.9192 19.0804C53.9145 18.83 53.8542 18.5841 53.7568 18.3601C53.6454 18.1141 53.483 17.8857 53.2835 17.6968C53.084 17.5079 52.8474 17.3542 52.5829 17.2488C52.3463 17.1522 52.0864 17.0995 51.8173 17.0951C51.8034 17.0995 51.7849 17.0995 51.7709 17.0995H5.24762C5.22906 17.0995 5.2105 17.0995 5.19658 17.0951C4.93211 17.0995 4.67228 17.1566 4.43565 17.2488C4.17582 17.3542 3.93455 17.5079 3.73504 17.6968C3.53553 17.8857 3.37314 18.1097 3.26178 18.3601C3.16435 18.5841 3.10403 18.83 3.09939 19.0848C3.10403 19.098 3.10403 19.1155 3.10403 19.1287V34.6821C3.10403 34.6996 3.10403 34.7172 3.09939 34.7304C3.10403 34.9808 3.16435 35.2267 3.26178 35.4507C3.37314 35.7011 3.53553 35.9251 3.73504 36.114C3.93455 36.3029 4.17582 36.4566 4.43565 36.562C4.67228 36.6586 4.93211 36.7113 5.20122 36.7157C5.21514 36.7113 5.2337 36.7113 5.24762 36.7113H11.3536V32.6528C11.3536 32.6352 11.3536 32.6177 11.3582 32.6001C11.3675 32.2355 11.4464 31.8841 11.5856 31.5679C11.7294 31.2341 11.9429 30.931 12.2027 30.6762C12.212 30.6631 12.2212 30.6499 12.2352 30.6411C12.5089 30.382 12.843 30.1711 13.2095 30.0262C13.5482 29.8944 13.9148 29.8197 14.3045 29.8109C14.3231 29.8022 14.3416 29.8022 14.3648 29.8022ZM45.6603 39.6498V47.2794C45.6603 47.2969 45.6603 47.3145 45.6557 47.3321C45.6464 47.6966 45.5675 48.048 45.4283 48.3687C45.2752 48.7157 45.0525 49.0319 44.7741 49.2955C44.5004 49.5546 44.1663 49.7654 43.7998 49.9104C43.4611 50.0422 43.0945 50.1168 42.7094 50.1256C42.6908 50.13 42.6723 50.13 42.6537 50.13H14.3648C14.3463 50.13 14.3277 50.1256 14.3092 50.1256C13.9241 50.1168 13.5575 50.0422 13.2188 49.9104C12.8523 49.7654 12.5228 49.5546 12.2444 49.2955C11.9661 49.0319 11.7433 48.7201 11.5902 48.3687C11.451 48.048 11.3722 47.701 11.3629 47.3365C11.3582 47.3189 11.3582 47.3013 11.3582 47.2838V39.6498H5.24762C5.22906 39.6498 5.2105 39.6498 5.19194 39.6454C4.50061 39.6367 3.84176 39.5049 3.24322 39.2721C2.59829 39.0217 2.02295 38.6528 1.54042 38.196C1.05788 37.7392 0.668132 37.1945 0.403663 36.584C0.153114 36.013 0.0139194 35.3936 0.00927961 34.7392C0 34.7172 0 34.6996 0 34.6821V19.1287C0 19.1112 0 19.0936 0.0046398 19.076C0.0139194 18.4216 0.153114 17.8022 0.399023 17.2312C0.663492 16.6207 1.05324 16.076 1.53578 15.6192C2.01831 15.1624 2.59365 14.7935 3.23858 14.5431C3.84176 14.3059 4.49597 14.1741 5.1873 14.1698C5.20586 14.1654 5.22442 14.1654 5.24298 14.1654H51.757C51.7756 14.1654 51.7941 14.1654 51.8127 14.1698C52.504 14.1785 53.1629 14.3103 53.7614 14.5431C54.4064 14.7935 54.9817 15.1624 55.4642 15.6192C55.9468 16.076 56.3365 16.6207 56.601 17.2312C56.8515 17.8022 56.9907 18.4216 56.9954 19.076C57 19.0936 57 19.1112 57 19.1287V34.6821C57 34.6996 57 34.7172 56.9954 34.7348C56.9861 35.3892 56.8469 36.0086 56.601 36.5796C56.3365 37.1901 55.9468 37.7348 55.4642 38.1916C54.9817 38.6484 54.4064 39.0173 53.7614 39.2677C53.1582 39.5049 52.504 39.6367 51.8127 39.641C51.7941 39.6454 51.7756 39.6454 51.757 39.6454H45.6603V39.6498ZM41.5123 6.96628L38.2645 3.93116V6.96628H41.5123ZM42.5563 32.7406H14.4576V47.1871H42.5563V32.7406Z" fill="white" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            <div class="flex w-full mt-5">
              <div class="max-w-xs pr-4">
                <div class="flex justify-start text-gray-400 text-xs">
                  Wed, 12/08/2021
                </div>
                <div class="flex justify-start text-gray-500 text-xs mt-1">
                  9:38 am
                </div>
              </div>

              <nav aria-label="Progress">
                <ol role="list" class="overflow-hidden">
                  <li class="relative pb-10">
                    <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-green" aria-hidden="true" />

                    <a href="#" class="relative flex items-start group">
                      <span class="h-9 flex items-center">
                        <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-green rounded-full group-hover:bg-indigo-800">

                          <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                          </svg>
                        </span>
                      </span>
                      <span class="ml-4 min-w-0 flex flex-col">
                        <span class="text-sm text-gray-900 tracking-wide">Order placed</span>
                        <span class="text-xs text-gray-500">Your order has been placed</span>
                      </span>
                    </a>
                  </li>

                  <li class="relative pb-10">
                    <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />

                    <a href="#" class="relative flex items-start group" aria-current="step">
                      <span class="h-9 flex items-center" aria-hidden="true">
                        <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-green rounded-full">
                          <span class="h-2.5 w-2.5 bg-green rounded-full" />
                        </span>
                      </span>
                      <span class="ml-4 min-w-0 flex flex-col">
                        <span class="text-sm text-gray-900 tracking-wide">Shipped</span>
                        <span class="text-xs text-gray-500">Cursus semper viverra facilisis et et some more.</span>
                      </span>
                    </a>
                  </li>

                  <li class="relative pb-10">
                    <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true" />

                    <a href="#" class="relative flex items-start group">
                      <span class="h-9 flex items-center" aria-hidden="true">
                        <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                          <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                        </span>
                      </span>
                      <span class="ml-4 min-w-0 flex flex-col">
                        <span class="text-sm text-gray-900 tracking-wide">Out for delivery</span>
                        <span class="text-xs text-gray-500">Penatibus eu quis ante.</span>
                      </span>
                    </a>
                  </li>

                  <li class="relative pb-10">
                    <a href="#" class="relative flex items-start group">
                      <span class="h-9 flex items-center" aria-hidden="true">
                        <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                          <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" />
                        </span>
                      </span>
                      <span class="ml-4 min-w-0 flex flex-col">
                        <span class="text-sm text-gray-900 tracking-wide">Delivered</span>
                        <span class="text-xs text-gray-500">Faucibus nec enim leo et.</span>
                      </span>
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div> -->

          <!-- track order end -->

          <!-- offer history start -->

          <div v-if="offerData.offerHistory.length" class="relative w-full flex-col border-t border-gray-100 px-5 py-3 mt-2 h-60 scroll-smooth overflow-auto will-change-scroll auto-scroll">
            <div class="w-full flex flex-col">
              <div class="flex items-center">
                <svg width="20" height="20" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.8366 1.25754C14.9392 0.208617 12.7523 -0.19524 10.6054 0.106819C8.46356 0.408158 6.47734 1.39576 4.94449 2.92128L2 5.68809V2C2 1.44772 1.55228 1 1 1C0.447715 1 0 1.44772 0 2V7.99995C0 8.55223 0.44771 8.99995 0.999991 8.99995L6.99999 9C7.55228 9.00001 8 8.55229 8 8.00001C8 7.44773 7.55229 7.00001 7.00001 7L3.52453 6.99997L6.32478 4.3687C6.33213 4.3618 6.33937 4.35478 6.34651 4.34765C7.57399 3.12225 9.16647 2.32896 10.884 2.08731C12.6015 1.84567 14.3511 2.16875 15.869 3.00789C17.387 3.84703 18.5911 5.15676 19.3 6.73974C20.0088 8.32273 20.184 10.0932 19.7992 11.7844C19.4143 13.4756 18.4902 14.996 17.1662 16.1163C15.8421 17.2367 14.1898 17.8964 12.4583 17.9961C10.7267 18.0957 9.0096 17.6299 7.56576 16.6689C6.12192 15.7078 5.02953 14.3035 4.45318 12.6677C4.26965 12.1468 3.69861 11.8733 3.1777 12.0568C2.6568 12.2403 2.3833 12.8113 2.56682 13.3322C3.28726 15.3771 4.65275 17.1324 6.45755 18.3338C8.26235 19.5351 10.4087 20.1173 12.5732 19.9928C14.7377 19.8682 16.803 19.0435 18.4581 17.6431C20.1131 16.2426 21.2682 14.3422 21.7493 12.2282C22.2304 10.1142 22.0114 7.90109 21.1253 5.92236C20.2392 3.94363 18.7341 2.30646 16.8366 1.25754ZM13 3.99995C13 3.44767 12.5523 2.99995 12 2.99995C11.4477 2.99995 11 3.44767 11 3.99995V9.99995C11 10.3787 11.214 10.725 11.5528 10.8944L15.5528 12.8944C16.0468 13.1414 16.6474 12.9411 16.8944 12.4472C17.1414 11.9532 16.9412 11.3525 16.4472 11.1055L13 9.38192V3.99995Z" fill="#8CAEC5" />
                </svg>

                <div class="text-base text-gray-900 font-normal ml-2">
                 {{ $t('offerHistory') }} 
                </div>
              </div>
            </div>
            <div v-for="(history, index) in offerData.offerHistory" :key="index+'history'" class="w-full flex flex-col">
              <div class="w-full mt-2 text-xs text-firoza">
                {{history.displayDate}}
              </div>
              <div 
                v-for="(message, i) in history.displayMessages" 
                :key="i+message" 
                class="w-full text-xsb mt-1 text-gray-500 break-words"
                >
                <div v-html="message" class="break-words lg:max-w-[650px] xl:w-[658px]"></div>
                
              </div>
            </div>
            <!-- <div class="w-full flex flex-col">
              <div class="w-full mt-2 text-xs text-firoza">
                Feb 15, 2022 11:42 am
              </div>
              <div class="w-full text-xsb mt-1 text-gray-500">
                You Accepted this offer
              </div>
            </div>
            <div class="w-full flex flex-col">
              <div class="w-full mt-2 text-xs text-firoza">
                Feb 15, 2022 11:42 am
              </div>
              <div class="w-full text-xsb mt-1 text-gray-500">
                You Accepted this offer
              </div>
            </div>
            <div class="w-full flex flex-col">
              <div class="w-full mt-2 text-xs text-firoza">
                Feb 15, 2022 11:42 am
              </div>
              <div class="w-full text-xsb mt-1 text-gray-500">
                You Accepted this offer
              </div>
            </div> -->
          </div>

          <!-- offer history end -->

          <!-- Delivery preference start -->

          <!-- <div class="relative w-full flex-col bg-gray-50 px-3 py-3 mt-2">
            <div class="w-full flex flex-col">
              <div class="flex items-center">
                <svg width="18" height="22" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#8CAEC5" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#8CAEC5" />
                </svg>
                <div class="text-base text-gray-900 font-normal ml-2">
                  Delivery preference
                </div>
              </div>

            </div>
            <div class="w-full mt-2 text-xsb text-gray-500">
              Rakesh offered you to meet at <span class="text-firoza">gintaa Junction</span>  Bidhannagar  to exchange items
            </div>
            <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mt-4">
              <div class="basis-1/2 sm:basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/2 2xl:basis-1/2">
                <div class="text-sm text-gray-900 font-normal">
                  Address
                </div>
                <div class="text-xs text-gray-500 font-normal mt-1.5">
                  gintaa Junction - Bidhannagar
                </div>
                <div class="text-xs text-gray-500 font-normal mt-1.5">
                  234 BA Bidhanagar
                </div>
                <div class="text-xs text-gray-500 font-normal mt-1.5">
                  Near PNB Kolkata -700056
                </div>
                <div class="text-xs text-gray-500 font-normal mt-1.5">
                  Contact : 98302 11948
                </div>
              </div>
              <div class="basis-1/2 sm:basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/2 2xl:basis-1/2 mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
                <div class="text-sm text-gray-900 font-normal">
                  Date & Time
                </div>
                <div class="text-xs text-gray-500 font-normal mt-1.5">
                  20/07/21, 10:30 am
                </div>
              </div>
            </div>
          </div> -->

          <!-- Delivery preference end -->

          <!-- packing box start -->

          <!-- <div class="relative w-full flex-col bg-gray-50 px-3 py-3 mt-2">
            <div class="flex w-full text-gray-900 text-base">
              Select your packing box
            </div>
            <div class="w-full float-left mt-3">
              <div class="float-left mr-3">
                <div class="w-28 h-24 relative mb-4">
                  <input id="pradio" name="push-notifications" type="radio" class="absolute top-2 right-3 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="pradio">
                    <div class="bg-gray-200 w-28 h-24 rounded-sm mb-5">
                      <div class="flex items-center justify-center pt-5">
                        <svg width="30" height="30" viewBox="0 0 20 23" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.00195312C9.47421 0.00195312 8.95768 0.140138 8.50214 0.402641L5.30631 2.22883C5.09618 2.2704 4.90017 2.37894 4.7526 2.54523L1.50386 4.40165L1.5 4.40388C1.13002 4.61749 0.810936 4.90705 0.56308 5.25226C0.502725 5.31263 0.449166 5.38178 0.404393 5.45918C0.365826 5.52585 0.335815 5.59512 0.314021 5.66572C0.108325 6.07918 0.000475816 6.53539 0 6.99888V15.0009C0.000540078 15.527 0.139415 16.0437 0.402693 16.4992C0.665971 16.9547 1.04439 17.3329 1.5 17.5959L1.50386 17.5981L8.5 21.5959L8.50185 21.597C8.81905 21.7798 9.16584 21.9024 9.52474 21.96C9.66611 22.0365 9.82798 22.0799 10 22.0799C10.172 22.0799 10.3339 22.0365 10.4752 21.96C10.8342 21.9024 11.181 21.7798 11.4982 21.597L11.5 21.5959L18.4961 17.5981L18.5 17.5959C18.9556 17.3329 19.334 16.9547 19.5973 16.4992C19.8606 16.0437 19.9995 15.527 20 15.0009V6.99888C19.9995 6.53538 19.8917 6.07918 19.686 5.66571C19.6642 5.59512 19.6342 5.52585 19.5956 5.45918C19.5508 5.38178 19.4973 5.31263 19.4369 5.25226C19.1891 4.90705 18.87 4.61748 18.5 4.40387L11.5 0.403877L11.4979 0.402674C11.0424 0.14015 10.5258 0.00195312 10 0.00195312ZM11 19.5782L17.5 15.8639L17.5016 15.863C17.6527 15.7753 17.7783 15.6496 17.8658 15.4983C17.9535 15.3465 17.9998 15.1742 18 14.9989V7.53744L11 11.5867V19.5782ZM9 11.5867L2 7.53744V14.9993C2.00026 15.1745 2.04654 15.3466 2.13423 15.4983C2.22169 15.6496 2.34726 15.7753 2.49842 15.863L2.5 15.8639L9 19.5782V11.5867ZM10.5 2.13594L16.961 5.82794L14.5052 7.24854L7.5609 3.244L9.49614 2.13815L9.5 2.13593C9.65202 2.04816 9.82446 2.00195 10 2.00195C10.1755 2.00195 10.348 2.04817 10.5 2.13594ZM10 9.85464L12.5065 8.4047L5.54999 4.39309L3.03898 5.82794L10 9.85464Z" fill="#8CAEC5" />
                        </svg>
                      </div>
                      <div class="flex items-center justify-center mt-3">
                        <span class="text-xs text-gray-900 text-center"> (30x30x30) cm</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div class="float-left mr-3">
                <div class="w-28 h-24 relative mb-4">
                  <input id="pradio" name="push-notifications" type="radio" class="absolute top-2 right-3 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="pradio">
                    <div class="bg-gray-200 w-28 h-24 rounded-sm mb-5">
                      <div class="flex items-center justify-center pt-5">
                        <svg width="30" height="30" viewBox="0 0 20 23" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.00195312C9.47421 0.00195312 8.95768 0.140138 8.50214 0.402641L5.30631 2.22883C5.09618 2.2704 4.90017 2.37894 4.7526 2.54523L1.50386 4.40165L1.5 4.40388C1.13002 4.61749 0.810936 4.90705 0.56308 5.25226C0.502725 5.31263 0.449166 5.38178 0.404393 5.45918C0.365826 5.52585 0.335815 5.59512 0.314021 5.66572C0.108325 6.07918 0.000475816 6.53539 0 6.99888V15.0009C0.000540078 15.527 0.139415 16.0437 0.402693 16.4992C0.665971 16.9547 1.04439 17.3329 1.5 17.5959L1.50386 17.5981L8.5 21.5959L8.50185 21.597C8.81905 21.7798 9.16584 21.9024 9.52474 21.96C9.66611 22.0365 9.82798 22.0799 10 22.0799C10.172 22.0799 10.3339 22.0365 10.4752 21.96C10.8342 21.9024 11.181 21.7798 11.4982 21.597L11.5 21.5959L18.4961 17.5981L18.5 17.5959C18.9556 17.3329 19.334 16.9547 19.5973 16.4992C19.8606 16.0437 19.9995 15.527 20 15.0009V6.99888C19.9995 6.53538 19.8917 6.07918 19.686 5.66571C19.6642 5.59512 19.6342 5.52585 19.5956 5.45918C19.5508 5.38178 19.4973 5.31263 19.4369 5.25226C19.1891 4.90705 18.87 4.61748 18.5 4.40387L11.5 0.403877L11.4979 0.402674C11.0424 0.14015 10.5258 0.00195312 10 0.00195312ZM11 19.5782L17.5 15.8639L17.5016 15.863C17.6527 15.7753 17.7783 15.6496 17.8658 15.4983C17.9535 15.3465 17.9998 15.1742 18 14.9989V7.53744L11 11.5867V19.5782ZM9 11.5867L2 7.53744V14.9993C2.00026 15.1745 2.04654 15.3466 2.13423 15.4983C2.22169 15.6496 2.34726 15.7753 2.49842 15.863L2.5 15.8639L9 19.5782V11.5867ZM10.5 2.13594L16.961 5.82794L14.5052 7.24854L7.5609 3.244L9.49614 2.13815L9.5 2.13593C9.65202 2.04816 9.82446 2.00195 10 2.00195C10.1755 2.00195 10.348 2.04817 10.5 2.13594ZM10 9.85464L12.5065 8.4047L5.54999 4.39309L3.03898 5.82794L10 9.85464Z" fill="#8CAEC5" />
                        </svg>
                      </div>
                      <div class="flex items-center justify-center mt-3">
                        <span class="text-xs text-gray-900 text-center">  (60x60x60) cm</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div class="float-left mr-3">
                <div class="w-28 h-24 relative mb-4">
                  <input id="pradio" name="push-notifications" type="radio" class="absolute top-2 right-3 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="pradio">
                    <div class="bg-gray-200 w-28 h-24 rounded-sm mb-5">
                      <div class="flex items-center justify-center pt-5">
                        <svg width="30" height="30" viewBox="0 0 20 23" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.00195312C9.47421 0.00195312 8.95768 0.140138 8.50214 0.402641L5.30631 2.22883C5.09618 2.2704 4.90017 2.37894 4.7526 2.54523L1.50386 4.40165L1.5 4.40388C1.13002 4.61749 0.810936 4.90705 0.56308 5.25226C0.502725 5.31263 0.449166 5.38178 0.404393 5.45918C0.365826 5.52585 0.335815 5.59512 0.314021 5.66572C0.108325 6.07918 0.000475816 6.53539 0 6.99888V15.0009C0.000540078 15.527 0.139415 16.0437 0.402693 16.4992C0.665971 16.9547 1.04439 17.3329 1.5 17.5959L1.50386 17.5981L8.5 21.5959L8.50185 21.597C8.81905 21.7798 9.16584 21.9024 9.52474 21.96C9.66611 22.0365 9.82798 22.0799 10 22.0799C10.172 22.0799 10.3339 22.0365 10.4752 21.96C10.8342 21.9024 11.181 21.7798 11.4982 21.597L11.5 21.5959L18.4961 17.5981L18.5 17.5959C18.9556 17.3329 19.334 16.9547 19.5973 16.4992C19.8606 16.0437 19.9995 15.527 20 15.0009V6.99888C19.9995 6.53538 19.8917 6.07918 19.686 5.66571C19.6642 5.59512 19.6342 5.52585 19.5956 5.45918C19.5508 5.38178 19.4973 5.31263 19.4369 5.25226C19.1891 4.90705 18.87 4.61748 18.5 4.40387L11.5 0.403877L11.4979 0.402674C11.0424 0.14015 10.5258 0.00195312 10 0.00195312ZM11 19.5782L17.5 15.8639L17.5016 15.863C17.6527 15.7753 17.7783 15.6496 17.8658 15.4983C17.9535 15.3465 17.9998 15.1742 18 14.9989V7.53744L11 11.5867V19.5782ZM9 11.5867L2 7.53744V14.9993C2.00026 15.1745 2.04654 15.3466 2.13423 15.4983C2.22169 15.6496 2.34726 15.7753 2.49842 15.863L2.5 15.8639L9 19.5782V11.5867ZM10.5 2.13594L16.961 5.82794L14.5052 7.24854L7.5609 3.244L9.49614 2.13815L9.5 2.13593C9.65202 2.04816 9.82446 2.00195 10 2.00195C10.1755 2.00195 10.348 2.04817 10.5 2.13594ZM10 9.85464L12.5065 8.4047L5.54999 4.39309L3.03898 5.82794L10 9.85464Z" fill="#8CAEC5" />
                        </svg>
                      </div>
                      <div class="flex items-center justify-center mt-3">
                        <span class="text-xs text-gray-900 text-center">  (180x180x180) cm</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div class="float-left mr-3">
                <div class="w-28 h-24 relative mb-4">
                  <input id="pradio" name="push-notifications" type="radio" class="absolute top-2 right-3 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                  <label for="pradio">
                    <div class="bg-gray-200 w-28 h-24 rounded-sm mb-5">
                      <div class="flex items-center justify-center pt-5">
                        <svg width="30" height="30" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5609 3.244L12.3417 6.00095C12.8295 7.38016 13.8072 8.52784 15.0658 9.23479L11 11.5867V19.5782L17.5 15.8639L17.5016 15.863C17.6527 15.7753 17.7783 15.6496 17.8658 15.4983C17.9535 15.3465 17.9998 15.1742 18 14.9989V10C18.7013 10 19.3744 9.87969 20 9.65859V15.0009C19.9995 15.527 19.8606 16.0437 19.5973 16.4992C19.334 16.9547 18.9556 17.3329 18.5 17.5959L18.4961 17.5981L11.5 21.5959L11.4982 21.597C11.181 21.7798 10.8342 21.9024 10.4752 21.96C10.3339 22.0365 10.172 22.0799 10 22.0799C9.82798 22.0799 9.66611 22.0365 9.52474 21.96C9.16584 21.9024 8.81905 21.7798 8.50185 21.597L8.5 21.5959L1.50386 17.5981L1.5 17.5959C1.04439 17.3329 0.665971 16.9547 0.402693 16.4992C0.139415 16.0437 0.000540078 15.527 0 15.0009V6.99888C0.000475816 6.53539 0.108325 6.07918 0.314021 5.66572C0.335815 5.59512 0.365826 5.52585 0.404393 5.45918C0.449166 5.38178 0.502725 5.31263 0.56308 5.25226C0.810936 4.90705 1.13002 4.61749 1.5 4.40388L1.50386 4.40165L4.7526 2.54523C4.90017 2.37894 5.09618 2.2704 5.30631 2.22883L8.50214 0.402641C8.95768 0.140138 9.47421 0.00195312 10 0.00195312C10.5258 0.00195312 11.0424 0.14015 11.4979 0.402674L11.5 0.403877L12.7394 1.11212C12.4157 1.70059 12.1878 2.34923 12.0769 3.03701L10.5 2.13594C10.348 2.04817 10.1755 2.00195 10 2.00195C9.82446 2.00195 9.65202 2.04816 9.5 2.13593L9.49614 2.13815L7.5609 3.244ZM9 11.5867L2 7.53744V14.9993C2.00026 15.1745 2.04654 15.3466 2.13423 15.4983C2.22169 15.6496 2.34726 15.7753 2.49842 15.863L2.5 15.8639L9 19.5782V11.5867ZM10 9.85464L12.5065 8.4047L5.54999 4.39309L3.03898 5.82794L10 9.85464Z" fill="#8CAEC5" />
                          <path d="M18.0675 1C17.1321 1 16.5262 1.38324 16.0506 2.06671C15.9643 2.1907 15.9909 2.36069 16.1113 2.45195L16.6168 2.83526C16.7383 2.92743 16.9113 2.90588 17.0065 2.78665C17.3 2.41891 17.5178 2.20717 17.9763 2.20717C18.3368 2.20717 18.7827 2.43919 18.7827 2.78879C18.7827 3.05307 18.5646 3.18879 18.2086 3.38836C17.7935 3.6211 17.2441 3.91074 17.2441 4.6353V4.75C17.2441 4.90533 17.3701 5.03125 17.5254 5.03125H18.3747C18.53 5.03125 18.6559 4.90533 18.6559 4.75V4.68235C18.6559 4.18008 20.1239 4.15916 20.1239 2.8C20.1239 1.77644 19.0622 1 18.0675 1ZM17.95 5.37647C17.5024 5.37647 17.1383 5.74063 17.1383 6.18824C17.1383 6.63584 17.5024 7 17.95 7C18.3976 7 18.7618 6.63584 18.7618 6.18823C18.7618 5.74062 18.3976 5.37647 17.95 5.37647Z" fill="#8CAEC5" />
                        </svg>
                      </div>
                      <div class="flex items-center justify-center mt-3">
                        <span class="text-xs text-gray-900 text-center">  custom</span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div class="flex flex-row w-full items-center gap-2 mt-3 sm:gap-2 md:gap-8 lg:gap-8 xl:gap-8 2xl:gap-8">
              <div class="relative w-32">
                <label class="text-gray-700 text-xsb" for="username">Length (cm)</label>
                <input id="username" type="number" class="block w-full px-2 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-100 rounded-md  ">
              </div>

              <div class="relative w-32">
                <label class="text-gray-700 text-xsb" for="username">Width (cm)</label>
                <input id="username" type="number" class="block w-full px-2 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-100 rounded-md  ">
              </div>

              <div class="relative w-32">
                <label class="text-gray-700 text-xsb" for="username">Height (cm)</label>
                <input id="username" type="number" class="block w-full px-2 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-100 rounded-md  ">
              </div>
            </div>

            <div class="relative w-full mt-5">
              <label class="text-gray-700 text-sm" for="username">What is your item weight</label>
              <div class="flex items-center border border-gray-100 rounded-md bg-gray-100 px-2 py-2 mt-1 w-32">
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none">
                  <path d="M0.407227 15.9999V0.879883H2.63323V9.88888L6.62323 5.58388H9.29023L4.85923 10.3089L9.94123 15.9999H7.12723L2.63323 10.6659V15.9999H0.407227Z" fill="#8CAEC5" />
                  <path d="M15.929 12.8079C15.383 12.8079 14.879 12.7449 14.417 12.6189L13.514 13.5009C13.668 13.5989 13.857 13.6829 14.081 13.7529C14.305 13.8229 14.62 13.8859 15.026 13.9419C15.432 13.9979 15.985 14.0539 16.685 14.1099C18.071 14.2359 19.072 14.5719 19.688 15.1179C20.304 15.6499 20.612 16.3639 20.612 17.2599C20.612 17.8759 20.444 18.4569 20.108 19.0029C19.786 19.5629 19.275 20.0109 18.575 20.3469C17.889 20.6969 17.007 20.8719 15.929 20.8719C14.473 20.8719 13.29 20.5919 12.38 20.0319C11.484 19.4859 11.036 18.6529 11.036 17.5329C11.036 17.0989 11.148 16.6649 11.372 16.2309C11.61 15.8109 11.981 15.4119 12.485 15.0339C12.191 14.9079 11.932 14.7749 11.708 14.6349C11.498 14.4809 11.309 14.3269 11.141 14.1729V13.6689L12.947 11.8209C12.135 11.1209 11.729 10.2039 11.729 9.06988C11.729 8.38388 11.89 7.76088 12.212 7.20088C12.548 6.62688 13.031 6.17188 13.661 5.83588C14.291 5.49988 15.047 5.33188 15.929 5.33188C16.517 5.33188 17.063 5.41588 17.567 5.58388H21.452V7.05388L19.604 7.15888C19.94 7.73288 20.108 8.36988 20.108 9.06988C20.108 9.76988 19.94 10.3999 19.604 10.9599C19.282 11.5199 18.806 11.9679 18.176 12.3039C17.56 12.6399 16.811 12.8079 15.929 12.8079ZM15.929 11.0649C16.573 11.0649 17.091 10.8969 17.483 10.5609C17.889 10.2109 18.092 9.72088 18.092 9.09088C18.092 8.44688 17.889 7.95688 17.483 7.62088C17.091 7.28488 16.573 7.11688 15.929 7.11688C15.271 7.11688 14.739 7.28488 14.333 7.62088C13.941 7.95688 13.745 8.44688 13.745 9.09088C13.745 9.72088 13.941 10.2109 14.333 10.5609C14.739 10.8969 15.271 11.0649 15.929 11.0649ZM13.136 17.3229C13.136 17.9249 13.402 18.3729 13.934 18.6669C14.466 18.9749 15.131 19.1289 15.929 19.1289C16.699 19.1289 17.322 18.9609 17.798 18.6249C18.274 18.3029 18.512 17.8689 18.512 17.3229C18.512 16.9169 18.351 16.5669 18.029 16.2729C17.707 15.9929 17.098 15.8179 16.202 15.7479C15.53 15.7059 14.935 15.6429 14.417 15.5589C13.927 15.8249 13.591 16.1119 13.409 16.4199C13.227 16.7279 13.136 17.0289 13.136 17.3229Z" fill="#8CAEC5" />
                </svg>
                <input class="pl-3 outline-none border-none bg-gray-100 w-full" type="number" name="" placeholder="1">
              </div>
            </div>
          </div> -->

          <!-- packing box end -->

          <!-- chat history start -->
          <!-- <ChatHistory /> -->
          <!-- chat history end -->

          

          <!-- all button start -->

          <div 
            v-if="
              buttonVisibility.rejectButton ||
              buttonVisibility.acceptButton ||
              buttonVisibility.reviseButton ||
              buttonVisibility.editButton ||
              buttonVisibility.closeButton ||
              buttonVisibility.payButton ||
              buttonVisibility.otpButton ||
              buttonVisibility.ratingButton ||
              buttonVisibility.reportButton ||
              buttonVisibility.chatButton ||
              buttonVisibility.trackButton
            "
            class="relative w-full flex justify-between border-t border-gray-100 px-3 md:px-5 py-4 mt-2">
            <div v-if="buttonVisibility.chatButton" class="cursor-pointer ">               
                <a href="javascript:;" @click="openChatPopup()" class="flex justify-center items-center bg-white border border-1 border-green rounded w-12 h-10" title="Chat now">
                <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M27 13.501C27 16.682 25.9006 19.6076 24.0578 21.9153C23.8484 22.1771 23.6284 22.4325 23.4001 22.6776C20.9353 25.3371 17.4129 27.0019 13.4989 27.0019C12.276 27.0019 11.0906 26.8365 9.96401 26.5308L3.56428 29.6636L4.28681 23.3644C3.42197 22.554 2.66174 21.6326 2.03345 20.6232C0.743535 18.5563 0 16.1166 0 13.501C0 13.0528 0.0209488 12.6089 0.0649068 12.1712C0.578021 6.92535 4.09197 2.56113 8.86675 0.816691C10.2384 0.314082 11.7127 0.0292634 13.2497 0.00212578C13.3315 -2.13838e-07 13.4152 0 13.4989 0C14.0204 0 14.5334 0.029325 15.0381 0.0879773C16.6192 0.265998 18.1166 0.718334 19.4819 1.39471C19.5343 1.41985 19.5845 1.44499 19.6348 1.47431C23.9153 3.66058 26.8721 8.06463 26.9957 13.168C26.998 13.279 27 13.39 27 13.501Z" fill="url(#paint0_linear_1151_73)"/>
<path d="M6.8219 15.6449C7.86701 15.6449 8.71424 14.7977 8.71424 13.7526C8.71424 12.7075 7.86701 11.8602 6.8219 11.8602C5.77679 11.8602 4.92957 12.7075 4.92957 13.7526C4.92957 14.7977 5.77679 15.6449 6.8219 15.6449Z" fill="white"/>
<path d="M14.0901 15.6451C15.1353 15.6451 15.9826 14.7978 15.9826 13.7526C15.9826 12.7074 15.1353 11.8602 14.0901 11.8602C13.0449 11.8602 12.1976 12.7074 12.1976 13.7526C12.1976 14.7978 13.0449 15.6451 14.0901 15.6451Z" fill="white"/>
<path d="M21.3587 15.6449C22.4038 15.6449 23.251 14.7977 23.251 13.7526C23.251 12.7075 22.4038 11.8602 21.3587 11.8602C20.3135 11.8602 19.4663 12.7075 19.4663 13.7526C19.4663 14.7977 20.3135 15.6449 21.3587 15.6449Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_1151_73" x1="-11.2096" y1="14.8318" x2="22.6596" y2="14.8318" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0F88E"/>
<stop offset="1" stop-color="#7DC855"/>
</linearGradient>
</defs>
</svg>
                  <!-- <svg data-v-0d2d6594="" width="30" height="30" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" ><path data-v-0d2d6594="" d="M27.1666 0.916748H3.83329C2.22913 0.916748 0.931209 2.22925 0.931209 3.83341L0.916626 30.0834L6.74996 24.2501H27.1666C28.7708 24.2501 30.0833 22.9376 30.0833 21.3334V3.83341C30.0833 2.22925 28.7708 0.916748 27.1666 0.916748ZM6.74996 11.1251H24.25V14.0417H6.74996V11.1251ZM18.4166 18.4167H6.74996V15.5001H18.4166V18.4167ZM24.25 9.66675H6.74996V6.75008H24.25V9.66675Z" fill="#8bc63e"></path></svg> -->
                </a>
              </div>
            <div class="flex flex-row gap-3 md:gap-4 justify-end">
              <!-- <div v-if="showButton('close')" class="basis-1/5">
                <button @click="openCloseOfferPopup()" class="flex items-center justify-center border border-instam bg-transparent text-instam py-2 px-3 h-10 rounded w-full text-base ">
                     <span> Close </span>
                </button>
              </div> -->
              <div v-if="buttonVisibility.rejectButton" class="">
                  <button @click="rejectOffer()" class="flex items-center justify-center border-errortext border text-errortext py-2 px-3 h-10 rounded w-full text-sm md:text-base min-w-[80px] md:min-w-[120px]">
                     <span>  {{ $t('rejectBtn') }}</span>
                </button>
              </div>
              
             
              <!-- <div v-if="buttonVisibility.chatButton" class="">               
                <a href="javascript:;" @click="openChatPopup()" class="flex items-center justify-center border border-darkcolor bg-darkcolor text-white py-2 px-3 h-10 rounded w-full text-sm md:text-base min-w-[85px] md:min-w-[120px]">
                  <span>  {{ $t('chatNowBtn') }} </span>
                </a>
              </div> -->

              <!-- <div v-if="showButton('report')" class="basis-1/5">
                <button class="flex items-center justify-center bg-darkcolor text-white py-2 px-3 h-10 rounded w-full text-base ">
                     <span> Report </span>
                </button>
              </div> -->
              <div v-if="buttonVisibility.reportButton" class="">
                <button class="flex items-center justify-center border-[#fb8c00] border text-[#fb8c00] py-2 px-3 h-10 rounded w-full text-sm md:text-base min-w-[80px] md:min-w-[120px] ">
                    <span>  {{ $t('reportBtn') }}</span>
                </button>
              </div>
              <!-- <div v-if="showButton('pay')" class="basis-1/5">
                <button class="flex items-center justify-center bg-darkcolor text-white py-2 px-3 h-10 rounded w-full text-base ">
                   <span> Pay now </span>
                </button>
              </div> -->
              
              <!-- <div v-if="showButton('revised')" class="basis-1/5">
                <nuxt-link :to="'/offers/revise/'+offerId" class="flex items-center justify-center bg-firoza text-white py-2 px-3 h-10 rounded w-full text-base ">
                   <span> Revise </span>
                </nuxt-link>
              </div> -->
              <div v-if="buttonVisibility.reviseButton" class="">
                <!-- <nuxt-link :to="localePath('/offers/revise/'+offerId)" class="flex items-center justify-center border-darkcolor border text-darkcolor py-2 px-3 h-10 rounded w-full text-sm md:text-base min-w-[80px] md:min-w-[120px] ">
                    <span>  {{ $t('reviseBtn') }} </span>
                </nuxt-link> -->
                <div @click="confirmRevise()" class="flex cursor-pointer items-center justify-center border-darkcolor border text-darkcolor py-2 px-3 h-10 rounded w-full text-sm md:text-base min-w-[80px] md:min-w-[120px] ">{{ $t('reviseBtn') }}</div>
              </div>

              <!-- Remove add coin button for complince -->
              <!-- <div v-if="buttonVisibility.payButton" class="">
                <button @click="payNow()" class="flex items-center justify-center bg-firoza text-white py-2 px-3 h-10 rounded w-full text-sm md:text-base min-w-[85px] md:min-w-[120px] ">
                     <span>  {{ $t('addCoinBtn') }} </span>
                </button>
              </div> -->




              <!-- <div v-if="showButton('reject')" class="basis-1/5">
                  <button @click="rejectOffer()" class="flex items-center justify-center bg-green text-white py-2 px-3 h-10 rounded w-full text-base ">
                     <span> Reject </span>
                </button>
              </div> -->
              
              <!-- <div v-if="showButton('accept')" class="basis-1/5">
                    <button @click="acceptOffer()" class="flex items-center justify-center bg-green text-white py-2 px-3 h-10 rounded w-full text-base ">
                        <span> Accept </span>
                  </button>
              </div> -->
              <div v-if="buttonVisibility.acceptButton" class="">
                    <button @click="acceptOffer()" class="flex items-center justify-center border border-firoza bg-firoza text-white py-2 px-3 h-10 rounded w-full text-sm md:text-base min-w-[80px] md:min-w-[120px] ">
                       <span>  {{ $t('acceptBtn') }} </span>
                  </button>
              </div>
              <div v-if="buttonVisibility.closeButton" class="">
                <button :disabled="!offerData.receiverPaidAmount || !offerData.initiatorPaidAmount" :class="!offerData.receiverPaidAmount || !offerData.initiatorPaidAmount ? 'opacity-50' : ''" @click="openCloseOfferPopup()" class="flex items-center justify-center border border-firoza bg-firoza text-white py-2 px-3 h-10 rounded w-full text-sm md:text-base min-w-[80px] md:min-w-[120px]  ">
                    <span>  {{ $t('closeBtn') }} </span>
                </button>
              </div>
              <div v-if="buttonVisibility.otpButton" class="">
                <button @click="openCloseOfferPopup('viewOtp')" class="flex items-center justify-center border border-firoza  bg-firoza text-white py-2 px-3 h-10 rounded w-full text-sm md:text-base min-w-[80px] md:min-w-[120px]  ">
                    <span> {{ $t('showOtpBtn') }} </span>
                </button>
              </div>
              <!-- <div v-if="showButton('edit')" class="basis-1/5">
                <button class="flex items-center justify-center bg-green text-white py-2 px-3 h-10 rounded w-full text-base ">
                  <span> Edit </span>
                </button>
              </div> -->
              <div v-if="buttonVisibility.edit" class="">
                <button class="flex items-center justify-center bg-green text-white py-2 px-3 h-10 rounded w-full text-sm md:text-base min-w-[80px] md:min-w-[120px]  ">
                   <span> {{ $t('editBtn') }} </span>
                </button>
              </div>
              <!-- <div v-if="showButton('rate')" class="basis-1/5">
                  <button class="flex items-center justify-center bg-green text-white py-2 px-3 h-10 rounded w-full text-base ">
                     <span> Rate </span>
                  </button>
              </div>  -->
              <div v-if="buttonVisibility.ratingButton" class="">
                  <button @click="openUserRatingPopup()" class="flex items-center justify-center bg-green text-white py-2 px-3 h-10 rounded w-full text-sm md:text-base min-w-[80px] md:min-w-[120px] ">
                    <span>  {{ $t('rateBtn') }}</span>
                  </button>
              </div>            

              <div v-if="offerData.invoiceUrl" class="">
                    <a :href="offerData.invoiceUrl" target="_blank" class="flex items-center justify-center bg-firoza text-white py-2 px-3 h-10 rounded w-full text-sm md:text-base min-w-[80px] md:min-w-[120px]  ">
                       <span> View invoice </span>
                  </a>
              </div>

              <!-- <div class="basis-1/5">
                    <button class="flex items-center justify-center bg-green text-white py-2 px-3 h-10 rounded w-full text-base ">
                           <span> print label </span>
                  </button>
              </div>  -->
            </div>
          </div>

          <!-- all button start -->

        </div>
        <div class="order-first basis-2/6 sm:basis-full sm:order-first md:basis-2/6 md:order-last lg:basis-2/6 lg:order-last xl:basis-2/6">
 
          <!-- <div class="inline-block w-full text-center mt-2 text-firoza py-3 ml-0 md:ml-4 text-sm bg-white">            
            <span v-if="offerData.callerIsReceiver && offerData.initiatorAgreedShareContact">
              <span>Partner's contact number</span> {{offerData.initiatorContact}}
            </span>
            <span v-if="!offerData.callerIsReceiver && offerData.receiverAgreedShareContact">
              <span>Partner's contact number</span> {{offerData.receiverContact}}
            </span>
          </div> -->
<div 
            v-if="partnerContactDetails.partnerName && partnerContactDetails.partnerContact" 
            class="bg-white p-0 mb-3 mt-0 ml-0 sm:mt-0 sm:ml-0 md:ml-0 md:mt-2 lg:mt-0 lg:ml-4 xl:mt-0 xl:ml-4 2xl:mt-0 2xl:ml-4 w-full rounded-sm shadow-sm ">
            <div class="text-bol mb-2 text-sm font-bold border-b border-gray-200 p-4 text-gray-500">
              <span class="text-capitalize">{{partnerContactDetails.partnerName}}</span>{{$t('UserContactDetails')}}</div>
              
              <div v-if="partnerContactDetails.contactType === 'mobile'" class="pl-12 relative   pb-3 mb-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-4 top-0"><path d="M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7428 21.5857 13.7869 20.5342 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.49991 10.2413 2.44818 7.27109 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23656 4.68016 9.47138 5.62282 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3772 14.5286 19.3199 14.7635 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z" stroke="#8CAEC5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>  
                <div>
                  <!-- <a href="tel:9038460981" class="text-gray-500 font-bold text-sm ml-2">9038460981</a> -->                
                  
                  <a class="text-gray-500 font-bold text-sm ml-2">+91 {{partnerContactDetails.partnerContact}}</a>
                </div>
              </div>

            <div v-if="partnerContactDetails.contactType === 'email'" class="pl-12 relative   pb-3 mb-0">
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute left-4 top-0">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.29816 2.7861C2.47857 2.42935 2.84957 2.1818 3.2728 2.1818H20.7272C21.1504 2.1818 21.5214 2.42935 21.7018 2.7861L12 9.57739L2.29816 2.7861ZM0.000147651 3.25378C-2.92668e-05 3.26455 -4.71005e-05 3.27531 9.36387e-05 3.28606V16.3635C9.36387e-05 18.166 1.47032 19.6362 3.2728 19.6362H20.7272C22.5297 19.6362 23.9999 18.166 23.9999 16.3635V3.28587C24 3.27526 24 3.26463 23.9999 3.25401C23.9897 1.46007 22.5234 0 20.7272 0H3.2728C1.47663 0 0.0103922 1.45995 0.000147651 3.25378ZM21.8181 5.36794V16.3635C21.8181 16.961 21.3247 17.4544 20.7272 17.4544H3.2728C2.67529 17.4544 2.18189 16.961 2.18189 16.3635V5.36795L11.3744 11.8027C11.75 12.0656 12.25 12.0656 12.6256 11.8027L21.8181 5.36794Z" fill="#8CAEC5"/>
              </svg>
 
              <div>
                <!-- <a href="mailto:abhaya@gintaa.com" class="text-gray-500 font-bold text-sm ml-2">abhaya@gintaa.com</a> -->
                <a class="text-gray-500 font-bold text-sm ml-2">{{partnerContactDetails.partnerContact}}</a>
              </div>
            </div>

            <div v-if="offerData && offerData.initiatorDeliveryAddress" class="border-t border-gray-200 pl-4 pr-2 py-3 flex items-start">
              <svg  width="16" height="20" viewBox="0 0 20 24" fill="none" ><path  fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#475569"></path> <path  fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#475569"></path></svg>
              <div class="flex flex-col items-start relative  pl-2">
                   <div  class="w-full flex items-center pb-2">                        
                         <div  class="bg-gray-200 rounded-sm h-[16px] flex justify-center items-center px-1">
                            <div  class="text-gray-700 text-[10px] address-type">{{ offerData.initiatorDeliveryAddress.annotation === 'Home'? $t('home') : offerData.initiatorDeliveryAddress.annotation === 'Work' ? $t('work') : $t(offerData.initiatorDeliveryAddress.annotation) }}</div>
                       </div>
                    </div>
                   <div  class="text-[11px]">{{offerData.initiatorDeliveryAddress.addressLine}}</div>
                   <div  class="text-[11px]">{{getAddressitemDet(offerData.initiatorDeliveryAddress)}}</div>
                     
               </div>
            </div> 




          </div>
          
          <offerDetailsTipsInfo v-if="offerData && offerData.currentState !== ''" class="hidden md:block" :offerState="offerData.currentState" />
          
          <div class="flex justify-between items-center bg-white shadow-sm rounded-sm w-full mb-3 mt-2 py-3 px-2 ml-0 sm:mb-3 md:ml-0 md:mb-0 lg:ml-4 lg:mb-0 xl:ml-4 xl:mb-0 2xl:ml-4 2xl:mb-0 share-amob">
          <a href="javascript:;" v-if="buttonVisibility.sharePhoneNumberButton" @click="openPopup('sharePhone')" class="flex items-center justify-center">
            <svg width="12" height="17" viewBox="0 0 353 512" fill="#8CAEC5" class="opacity-[.60]">
              <rect width="353" height="512" fill="url(#pattern0)"/>
              <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_516_806" transform="translate(-0.225212) scale(0.00283286 0.00195312)"/>
              </pattern>
              <image id="image0_516_806" width="512" height="512" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAPugAAD7oBsgpXUQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABZvSURBVHic7d1tsG5nXd/x3xWS8KBgCAaS0IJASRBHmtYmBNGiAUKsRHC0AgWKDnVs0Q72SSxia8dG0wadse1YSp06CIjFkVLCAGVIaBrFECbT1GowCakaah4IQiSAksD598W9rSE5Sc7D3vta6/5/PjN79qtk/zKZs9b3XPe91z2qKrAfxhgnJHlyktN2vp6U5IQkj0jy8Ht8f/CkmbAXvpDkM0nuuMf325PckOS6na/rq+r2WSPpZQgA9sIY4yuTfHOSZyc5O5sb/klTR8E63JZNDFyR5JIkl1fVZ+dOYhsJAHbFGOPYJM9Mck42N/2zkhw3dRRsh7uSXJlNDFya5Deq6otzJ7ENBABHZYxxVpKXJXlx/A0f9sNtSX4lyVuq6srZY1gvAcBhG2M8KclLs7nxP3nyHOjs+iRvSfLWqrph9hjWRQBwyMYYZyf5sSTPn70FuJd3J7mgqq6YPYR1EAA8oDHGOdnc+M+ZvQV4QJdmEwKXzh7CsgkA7tMY43lJfiKbd/ED63JFkp+oqv82ewjLJAC4lzHG45L8XJIXzt4CHLV3Jnl1Vd04ewjLcszsASzHGOO4McZrklwTN3/YFi9Mcs0Y4zVjDL+ay//nBIAkyRjjWUl+PslTZ28B9sw1SV5VVZfNHsJ8TgCaG2McO8a4MMkH4+YP2+6pST44xrhw5+FdNOYEoLExxl/M5oEi3zh7C7DvPpTkxVX18dlDmMMJQFNjjPOTXB03f+jqG5NcvXMtoCEB0MwY45gxxkVJ3pXkxNl7gKlOTPKuMcZFYwz3g2a8BNDIGOP4JG9O8j2ztwCL8/YkL6+qO2cPYX8IgCZ2Pp73vyR5zuwtwGJ9IMl3+vjhHgRAA2OMk5K8N8k3zN4CLN5VSb6tqm6bPYS9JQC23M5T/T4Qn9oHHLrrkzzH0wO3mwDYYmOMr07y60lOn70FWJ1rk3xTVX1y9hD2hnd9bqmd1/zfEzd/4MicnuQ9O9cStpAA2EI7z/v+tSRnzt4CrNqZSX7NZwhsJwGwZcYYI8mbkpw7ewuwFc5N8qadawtbRABsn59M8pLZI4Ct8pJsri1sEW8C3CJjjHOTvC+JUgd2WyU5r6reP3sIu0MAbIkxxqnZPNv/pNlbgK11W5Izquqm2UM4el4C2AJjjAcl+eW4+QN766Qkv7xzzWHlBMB2+OdJnjV7BNDCs7K55rByXgJYuTHGWUl+M2IO2D8Hkjyjqq6cPYQjJwBWbOfjO6+MZ/wD+++qJGdV1YHZQzgy/ta4bn83bv7AHN+QzTWIlXICsFI7n/B3bZJHzt4CtPXpJKf75MB1cgKwXv86bv7AXI/M5lrECjkBWKExxplJPhwP/AHmqyRPr6qPzB7C4XECsE4/Hjd/YBlGNtckVsYJwMqMMZ6WzRP/BACwFJXNEwJ/a/YQDp0TgPV5bdz8gWUZ2VybWBEnACsyxjgtyUcj3IDlOZDka6vqutlDODRuJOvyo/H/DFimY7K5RrESTgBWYoxxYpKbkxw/ewvAfbgzySlV9anZQ3hg/ja5Hi+Kmz+wbMcnefHsERwaAbAef3v2AIBD8PLZAzg0XgJYgZ03/107ewfAITrdmwGXzwnAOihqYE1cs1bACcDCjTFGkt9L8vjZWwAO0R8keUK5wSyaE4Dl+/q4+QPr8vhsrl0smABYvm+dPQDgCLh2LZwAWD5/iIA1cu1aOO8BWLAxxjFJ/ijJCbO3ABym25M8qqoOzB7CwTkBWLYz4uYPrNMJ2VzDWCgBsGyO0IA1cw1bMAGwbGfOHgBwFFzDFkwALNvpswcAHAXXsAXzJsCF2nkA0GeTPGz2FoAj9PkkX+mBQMvkBGC5/kLc/IF1e1g21zIWSAAsl6MzYBu4li2UAFguf2iAbeBatlACYLmeNHsAwC5wLVsoAbBcHgAEbAPXsoUSAMv18NkDAHaBa9lCCYDlesTsAQC7wLVsoQTAcqlmYBu4li2UAFguf2iAbeBatlACYLkcmwHbwLVsoQTAcj149gCAXeBatlACAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADR07OwBLMovJvnE7BHAnnl0ku+bPYJlGFU1ewMHMca4Jclj9vnH/pWqunqffyawT8YYZyT5n/v8Y2+tqpP3+WdyCLwEAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAho6dPYBF+dYxxtfMHgHsmSfMHsByjKqavYGDGGPckuQxs3cAHKVbq+rk2SO4Ny8BAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADR07OwBwL65M8ktSW7a+bo5yR1JTk5ySpJTd74/KsmYtBHYJwIAttcfJ3lfkouTXJLk1qqqB/qHxhjHJ3lKkucnOT/JWXFaCFtnHML1gAnGGLckeczsHazOrUnels1N//Kquuto/4VjjEdnEwMv2PkuBjgct1bVybNHcG8CYKEEAIfpjiQXJfnZqvrcXv2QMcbXJ7kwyd/Yq5/B1hEAC6XkYd3uTPJzSZ5YVT+5lzf/JKmq/11V357kW5J8eC9/FrC3BACs139P8pSq+uGq+uR+/uCquqyqzk7yoiSf2c+fDewOAQDr9PNJnltVvzdzRFW9PcnZST42cwdw+AQArMtdSX6gqn6wqr44e0ySVNVHs/lNgUtmbwEOnQCA9bgtyXOq6o2zh9xTVX06yXlJ/t3sLcCh8RwAWIc/SfJtVXXV7CH3ZedE4u+PMR6c5Ptn7wHunxMAWIdXLvnmfw8/mOTy2SOA+ycAYPl+uqreNnvEodp5+NB3Jblx9hbgvgkAWLZ3J3nd7BGHq6puy+bJgZ+fvQU4OAEAy/WJJC+tqgOzhxyJqro6yT+cvQM4OAEAy/Uvq2rtD9n5hSS/O3sEcG8CAJbp95P8h9kjjlZVfSnJj83eAdybAIBl+mdVdefsEbuhqt6R5IrZO4AvJwBgeX47yVtnj9hlr5k9APhyAgCW52fW+sa/+1JV/yM+PRAWRQDAsnwpm1/920bvnD0A+HMCAJblQ/v90b776F2zBwB/TgDAsvzX2QP2SlVdEx8bDIshAGBZtv1vydv+3werIQBgOa6rqutnj9hj2/r+BlgdAQDLcd3sAftg2wMHVkMAwHLcNHvAPrg1Sc0eAQgAWJKtD4Cdjwr+o9k7AAEAS7L1AbDjltkDAAEAS3Lz7AH7pMt/JyyaAIDl+MTsAftkWx90BKsiAGA5Hjl7wD75qtkDAAEAS3LK7AH7pMt/JyyaAIDlOHX2gH1y8uwBgACAJdn6vxmPMY5J8ujZOwABAEvS4QTgq5M8aPYIQADAknzN7AH74PGzBwAbAmC5vjB7APvujDHGth+PP2/2APada9lCCYDl+szsAey7Y5I8f/aIPfYdswew71zLFkoALNcdswcwxQtmD9grY4xTk/y12TvYd65lCyUAlssfmp6eO8Z46OwRe+T8JGP2CPada9lCCYDlcmzW00OTPHf2iD2ytacb3C/XsoUSAMulmvv6e7MH7LYxxpOzvWHD/XMtWygBsFy3zx7ANOeNMZ41e8QuuyDJsbNHMIVr2UIJgOX62OwBTHXh7AG7ZYxxZpLvnr2DaW6YPYCDEwDL9buzBzDV2WOMF84esUsujDf/dXbt7AEcnABYLgHABTvPzl+tMcbzkpwzewdTCYCFWvXFZZtV1U3x7tnunprkp2aPOFI7TzV84+wdTPX5JP939ggOTgAsm1MAXjPGeOnsEYdrjHF8knckedzsLUx1XVXV7BEcnABYNgFAkvzCGOOs2SMO0xuSPHP2CKZz/L9gAmDZPjx7AIvwkCTvHGM8dvaQQzHG+AdJvm/2DhbhI7MHcN8EwLJdOnsAi3FKkveOMRZ9pD7GeGWSi2bvYDE+OHsA9214eWbZxhh/mOTU2TtYjE8k+a6q+vXZQ+5ujPGgJD+T5NWzt7AYtyd5VFUdmD2Eg3MCsHxOAbi7Rye5dIzx/bOH/JkxxglJ3hM3f77cZW7+yyYAlk8AcE/HJXnjGOPfjjEeMnPIGOPrsnmvyrkzd7BIjv8XTgAsnwDgvvxQkuvGGN+73w8MGmOcMsZ4Q5Krk5y2nz+b1RAAC+c9ACswxvhfSZ42eweL9jtJ/mlVXbyXP2SM8VVJfiTJDyd52F7+LFbtD5I8wTMAls0JwDr80uwBLN7XJXnXGOPyMcYrxhgn7ea/fIzxV8cY/yKbD3Z5bdz8uX9vdvNfPicAKzDGOCXJx5M8aPYWVuNAkiuSXJzk4qr6ncP5h3feW3BOkvN3vlbxDAIW4/Squm72CO6fAFiJMcZ7k5w3ewerdWs2EXnT3b5uTnJHkpOzec7AqXf7/oQkD52ylLW7oqqeMXsED+zY2QM4ZL8UAcCRe8zOF+y1N88ewKFxArASY4yHZvO3uIfP3gJwH+5MckpVfWr2EB6YNwGuRFX9SZL/OHsHwP14q5v/ejgBWJGdNwP+n2w+HAZgSQ4k+Vpv/lsPJwArUlU3J/lPs3cAHMSvuvmvixOAldn5NLiPZfM4WIAlqCRnVNVvzR7CoXMCsDJVdWM8GAhYlne7+a+PE4AVGmM8Kck1SY6fvQVor5I8vao+MnsIh8cJwApV1Q1JLpq9AyDJm9z818kJwErtPBfgt5M8cfYWoK1PZ/PY39tmD+HwOQFYqZ3nAvzQ7B1Aa69z818vJwArN8b41STfPXsH0M5VSc6qqgOzh3BkBMDKjTEem+Sj8YhgYP8cSPKMqrpy9hCOnJcAVq6q/jDJD8zeAbRygZv/+jkB2BJjjDdECAB777Ikz66qL80ewtERAFtijPGQJL+Z5IzZW4CtdVs2T/y7afYQjp6XALZEVf1pkr+Z5I7ZW4CtVEle5ua/PQTAFqmqjyX5O7N3AFvpp6rq/bNHsHsEwJapqrcn+dHZO4Ct8rYkPz57BLvLewC21Bjj9Un+0ewdwOq9P8nzq+qu2UPYXQJgS40xRpJfTPKK2VuA1fpIknOq6rOzh7D7BMAWG2Mcm+QdSc6fvQVYnWuTfFNVfXL2EPaG9wBssar6YpIXJXnf7C3Aqlyf5Fw3/+0mALbczocGfUeSN8/eAqzCVUmeWVU3zh7C3hIADey8eecVSV4/ewuwaB9I8i0+4a8HAdBEbfyTbH4zwBs/gHt6e5Jv94a/PgRAM1X1s0n+VpLPzd4CLMbrk7ykqu6cPYT947cAmhpjnJ5N8T9t9hZgmk8l+d6qunj2EPafE4CmquraJE9P8u9nbwGm+FA2H+zj5t+UAGisqv60ql6VzYcI/fHsPcC+qCT/Ksmzqurjs8cwj5cASJKMMR6X5N8kecHsLcCeuSbJq6rqstlDmM8JAEmSqrqxql6YzTMDfn/yHGB3fS6bDwk7w82fP+MEgHsZYzwsyeuS/OMkx02eAxyddyZ5tQf7cE9OALiXqvp8Vb02m98Q+M9JDkyeBBy+K5KcV1Xf6ebPwTgB4AGNMU7L5vjwZXEiAEt3aZILqurS2UNYNgHAIdt5o+CPJHllkodMngN8uXdnc+O/YvYQ1kEAcNjGGCcm+Z5sTgSeOXkOdHZ9krckeWtV3TB7DOsiADgqY4wnJnlpkpcnefLkOdDBbUl+JclbqurK2WNYLwHArhlj/OUkz0ny7CR/PclXzF0EW+GuJFcmuSSb1/d/o6q+OHcS20AAsCfGGMdl86jhZyf55iRPSfLYqaNgHW5Lcl027+K/JMnlPqGPvSAA2DdjjK/I5mWC05KcnuQvJTkxySN2vh5+t+/eZMg2+UKSzyS54x7fb09yQzY3/OuSXF9Vt88aSS//DwFYTRS273p2AAAAAElFTkSuQmCC"/>
              </defs>
              </svg>
            <span class="text-gray-500 text-sm pl-2">{{$t('shareMobileNoBtnShare')}}</span>
          </a>

          <a href="javascript:;" v-if="buttonVisibility.shareAddressButton" @click="openPopup('shareAddress')" class="flex items-center justify-center">
               <img class="opacity-[.60]" src="~/assets/images/address-share.svg" width="21" height="21" alt="icon">     
             <span class="text-gray-500 text-sm pl-2">{{$t('shareAddress')}}</span>
          </a>
        </div>

        </div>
        
      </div>
    </div>
    <!--footer section goes here-->
    <Footer />

    <!-- Start Share phoone number confirm popup -->
    <div v-if="showSharePhonePopup" class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-[400px] sm:w-full sm:p-6">
                <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button type="button" @click="closePopup('sharePhone')" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span class="sr-only">Close</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
                </div>
                <div>
                  <div class="flex justify-center text-center">
                    <img src="~/assets/images/mobile-shareotp.png" alt="mobile-shareotp" class="w-[160px]"/>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <div class="text-gray-600 text-base font-medium py-4 w-full">{{$t('shareMobileNoHeading', {phoneNumber: authUser.phoneNumber})}}</div>                      
                  </div>
                  <div v-if="!authUser.phoneNumber" class="relative z-0 w-full mb-6">
                    <input
                      type="text"
                      pattern="\d*"
                      id="sharablePhoneNumber"
                      name="sharablePhoneNumber"
                      placeholder=" "
                      v-model="sharablePhoneNumber"
                      minlength="10"
                      maxlength="10"
                      @keypress="isNumber($event)"
                      class="
                        pt-3
                        pb-2
                        block
                        w-full
                        px-0
                        mt-0
                        bg-transparent
                        border-0 border-b
                        appearance-none
                        focus:outline-none focus:ring-0 focus:border-firoza
                        border-gray-200
                        text-sm
                      "
                    />
                    <label
                      for="sharablePhoneNumber"
                      class="
                        absolute
                        duration-300
                        top-3
                        -z-1
                        origin-0
                        text-gray-500 text-sm
                      "
                      >{{$t('shareMobileNoLabel')}}</label>
                  </div>
                  <!-- <div class="mt-3 text-center sm:mt-5">
                    <div class="text-gray-600 text-base font-medium py-4 w-full">Please enter your mobile to sahre</div>
                         
                    <input type="number" v-model="sharablePhoneNumber">
                  </div> -->

                </div>
                <!-- <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button type="button" :disabled="!sharablePhoneNumber || sharablePhoneNumber.length < 10" :class="!sharablePhoneNumber || sharablePhoneNumber.length < 10 ? 'opacity-50' : ''" @click="shareMobileNumberToChat()" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-3 bg-firoza text-base font-medium text-white  focus:outline-none  sm:text-sm"> {{$t('shareNoBtn')}} </button>
          <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">{{$t('cancelBtn')}}</button>
        </div> -->
         <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <button type="button" :disabled="!sharablePhoneNumber || sharablePhoneNumber.length < 10" :class="!sharablePhoneNumber || sharablePhoneNumber.length < 10 ? 'opacity-50' : ''" @click="shareMobileNumberToChat()" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-firoza text-base font-medium text-white hover:bg-firoza focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-firoza sm:col-start-2 sm:text-sm">{{$t('shareNoBtn')}}</button>
          <button type="button" @click="closePopup('sharePhone')" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">{{$t('cancelBtn')}}</button>
        </div>
                <!-- <div class="mt-5 sm:mt-6">
                  <button type="button" :disabled="!sharablePhoneNumber || sharablePhoneNumber.length < 10" :class="!sharablePhoneNumber || sharablePhoneNumber.length < 10 ? 'opacity-50' : ''" @click="shareMobileNumberToChat()" class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-3 bg-firoza text-base font-medium text-white  focus:outline-none  sm:text-sm">Share Number</button>
                </div> -->
            </div>
          </div>
      </div>
    </div>
    <!-- End Share phoone number confirm popup -->

    <!-- Start Response Popup -->
    <div v-if="showResponseMessage.showPopup" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
        <div 
          :class="showResponseMessage.status === 'error' ? 'rounded-md bg-red-50 border-l-2 border-errortext' : 'rounded-md bg-[#f0fdf4] border-l-2 border-green'" 
          class="mt-2 max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <!-- Heroicon name: outline/check-circle -->
                
                <div v-if="showResponseMessage.status === 'success'" class="mx-auto flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-lightgreen sm:mx-0 sm:h-8 sm:w-8">
                  <svg class="h-6 w-6 text-darkgreen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <!-- <svg v-if="showResponseMessage.status === 'error'"  class="h-6 w-6 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> -->
                <div v-if="showResponseMessage.status === 'error'" class="mx-auto flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-red-100 sm:mx-0 sm:h-8 sm:w-8">
                  <svg class="h-5 w-5 text-red-600" x-description="Heroicon name: outline/exclamation" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                </div>
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p v-if="showResponseMessage.status === 'success'" class="text-sm font-medium text-green"> {{ $t('successun') }}</p>
                <p v-if="showResponseMessage.status === 'error'" class="text-sm font-medium text-red-900"> {{ $t('errorun') }} </p>
                <p 
                  class="mt-1 text-sm " 
                  :class="showResponseMessage.status === 'error' ? 'text-red-700' : 'text-[#547b30]'">{{showResponseMessage.message}}</p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button @click="closePopup('responMessage')" class="rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span class="sr-only">Close</span>
                  <!-- Heroicon name: solid/x -->
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Response Popup -->

    <!--offer reject modal start-->
    <div v-show="showRejectOfferModal" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title"
      role="dialog" aria-modal="true">
    <rejectionReasons @selectedReasonToRejectOffer="selectedReasonToRejectOffer" @cancelRejectPopup="cancelRejectPopup"/>
    </div>

    <!--offer reject modal end-->

    <!--offer accept modal start-->
    <div v-if="showAcceptOfferModal" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 11.0002V2.3102V2.2002H3.3V10.1202C3.3 10.6482 2.86 10.9269 2.64 11.0002H0Z" fill="#8BC63E"/>
                <path d="M22.0002 11.0002V2.3102V2.2002H18.7002V10.1202C18.7002 10.6482 19.1402 10.9269 19.3602 11.0002H22.0002Z" fill="#8BC63E"/>
                <path d="M4.29102 1.98L6.71102 0H9.79102C9.57102 0.22 8.80102 0.968 7.48102 2.2C5.50102 4.18 6.71102 5.61 7.04102 6.16C8.71302 7.832 10.7443 6.27 11.551 5.28C12.7243 6.27 15.445 8.602 16.941 10.01C16.941 12.54 14.851 11.33 14.631 11.55C12.871 14.52 11.441 12.43 11.111 12.43C10.495 13.398 9.16768 13.2733 8.58102 13.09L4.95102 9.68H4.29102V1.98Z" fill="#8BC63E"/>
                <path d="M15.3988 0H11.4388C10.7055 0.66 8.90883 2.332 7.58884 3.74C7.14884 5.764 8.65217 5.75667 9.45884 5.5C10.1188 4.91333 11.6368 3.586 12.4288 2.97C13.2208 2.354 13.3455 3.22667 13.3088 3.74L12.4288 4.62L17.5988 8.8V2.09L15.3988 0Z" fill="#8BC63E"/>
                <path d="M1.44655 10.0601C1.92616 10.0601 2.31497 9.67128 2.31497 9.19166C2.31497 8.71205 1.92616 8.32324 1.44655 8.32324C0.96693 8.32324 0.578125 8.71205 0.578125 9.19166C0.578125 9.67128 0.96693 10.0601 1.44655 10.0601Z" fill="white"/>
                <path d="M20.552 10.0601C21.0316 10.0601 21.4204 9.67128 21.4204 9.19166C21.4204 8.71205 21.0316 8.32324 20.552 8.32324C20.0724 8.32324 19.6836 8.71205 19.6836 9.19166C19.6836 9.67128 20.0724 10.0601 20.552 10.0601Z" fill="white"/>
                </svg>

              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title"> {{ $t('acceptOffer') }}</h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">{{ $t('acceptOfferPara') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="confirmAcceptOffer()" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green sm:ml-3 sm:w-auto sm:text-sm"> {{ $t('proceedBtn') }} </button>
            <button @click="closePopup('accept')" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{{ $t('cancel') }}</button>
          </div>
        </div>
      </div>
    </div> 
    <!--offer accept modal end-->

    <!--offer close modal start-->
    <div v-if="showCloseOfferModal" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:max-w-md md:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="w-full flex justify-start items-center">
                  <div class="text-base text-gray-500 text-left font-medium"> {{ $t('closeOfferCode') }} </div>
            </div>

            <!-- <div class="w-full flex justify-center items-center pt-3">
                  <div class="text-base text-gray-900 text-center font-normal">{{closeOfferOtp}}</div>
            </div> -->

            <div class="w-full flex justify-center items-center pt-4">
              <div v-if="offerData.rightPanelOffers && offerData.rightPanelOffers.length >= 1" class="w-full flex justify-center items-center pt-1 px-1 flex-col">
                <div class="w-[85px] h-[85px] rounded mx-auto border-gray-100 border">
                  <img v-if="offerData.rightPanelOffers[0].images && offerData.rightPanelOffers[0].images.length > 0" class="rounded w-[85px] h-[85px]"
                        :src="offerData.rightPanelOffers[0].images[0].url" :alt="offerData.rightPanelOffers[0].offerName">
                </div>
                <div class="text-[18px] text-gray-500 text-center font-normal pt-5"
                  v-html="$t('receiveProduct', {userName: offerData.rightPanelUserInfo.name})">
                  
                </div>
              </div>
              <div v-else-if="offerData.rightPanelRequestedAmount && offerData.transactionMode === 'COIN'" class="w-full flex justify-center items-center pt-3 px-6 flex-col">
                <div class="w-[85px] h-[85px] rounded-full mx-auto border-[#F4A211] border justify-center items-center">
                  <img class="rounded-full w-[80px] h-[80px]"
                        src="~/assets/images/coin.svg" alt="Coin">                
                </div>
                <div class="text-[18px] text-gray-500 text-center font-normal pt-5"
                  v-html="$t('receiveCoin', {userName: offerData.rightPanelUserInfo.name, requestedAmount: offerData.rightPanelRequestedAmount})">
                  
                </div>
              </div>
              <div v-else-if="offerData.rightPanelRequestedAmount && offerData.transactionMode === 'CASH'" class="w-full flex justify-center items-center pt-3 px-6 flex-col">
                <div  class="w-[85px] h-[85px] rounded-full mx-auto border-green border justify-center items-center">
                  <img class="rounded-full w-[85px] h-[85px]"
                        src="~/assets/images/rupeesymbol.svg" alt="iamges">                
                </div>
                <div class="text-[18px] text-gray-500 text-center font-normal pt-5" 
                  v-html="$t('receiveCash', {userName: offerData.rightPanelUserInfo.name, requestedAmount: `<span>&#8377;</span> ${offerData.rightPanelRequestedAmount}`})">
                  
                </div>
              </div>

                  <!-- <img width="220" height="220" class="rounded-full"
                      src="~/assets/images/offer/close-offer.svg" alt="iamges"> -->
            </div>
            <div class="awarnes-msg p-3 bg-[#fffb9a] text-[#C05C00] text-[13px] mt-1 relative pl-10">
              
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-3 left-2">
                <path d="M1.92058 18.229L10.3979 3.10395C10.5198 2.8867 10.7499 2.75195 11.0002 2.75195C11.2495 2.75195 11.4805 2.8867 11.6015 3.10395L20.0788 18.229C20.1375 18.3344 20.1668 18.4499 20.1668 18.5654C20.1668 18.9183 19.8836 19.252 19.4775 19.252H2.52283C2.1195 19.252 1.8335 18.922 1.8335 18.5654C1.8335 18.4499 1.86191 18.3344 1.92058 18.229V18.229ZM3.69433 17.877H18.3051L10.9992 4.84287L3.69433 17.877ZM11.002 11.9214C10.6225 11.9214 10.3145 12.2294 10.3145 12.6089V15.8172C10.3145 16.1967 10.6225 16.5047 11.002 16.5047C11.3815 16.5047 11.6895 16.1967 11.6895 15.8172V12.6089C11.6895 12.2294 11.3815 11.9214 11.002 11.9214ZM11.0002 9.17137C11.5062 9.17137 11.9168 9.58204 11.9168 10.088C11.9168 10.594 11.5062 11.0047 11.0002 11.0047C10.4942 11.0047 10.0835 10.594 10.0835 10.088C10.0835 9.58204 10.4942 9.17137 11.0002 9.17137Z" fill="#C05C00"/>
                </svg>


             {{$t('secCloseOffer')}}

            </div>
            <!-- <div class="w-full flex justify-center items-center pt-3 px-6">
              <div class="text-[18px] text-gray-500 text-center font-normal">
                Have you received the product from <span class="font-bold">Biswanath</span>
                {{ $t('askPartnerCode') }}
                </div>
            </div> -->

            <!-- <div class="w-full flex justify-center items-center pt-3 px-6">
              <div class="text-sm text-gray-900 text-center font-normal"> {{ $t('enterPartnerCode') }}</div>
            </div> -->

            <!-- <div class="w-full flex justify-center items-center px-3 relative">
                <div class="flex mb-1 w-full ">
                  
                  <otp-view @otpChange="otpChange"/>
                </div>
                <span v-if="otp.error" class="text-[11px] text-errortext absolute -bottom-1 left-[25px]">{{otp.error}}</span>
            </div> -->

          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <!-- <button type="button" @click="confirmCloseOffer()" :disabled="!otp.valid" :class="!otp.valid ? 'opacity-50' : ''" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-firoza text-base font-medium text-white hover:bg-firoza focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green sm:ml-3 sm:w-auto sm:text-sm min-w-[110px]"> 
            {{ $t('verify') }} 
            </button> -->
            <button type="button" @click="confirmCloseOffer()" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-firoza text-base font-medium text-white hover:bg-firoza focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green sm:ml-3 sm:w-auto sm:text-sm min-w-[110px]"> 
              {{ $t('yesButton') }}
            </button>
            <button type="button" @click="closeCloseOfferPopup()" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{{ $t('cancel') }}</button>
          </div>
        </div>
      </div>
    </div>
  <!--offer close modal end-->

    <!-- view OTP modal start-->
    <div v-if="showViewOtpModal" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="w-full flex justify-center items-center">
                  <div class="text-base text-gray-500 text-center font-normal">{{ $t('closeOfferCode') }}</div>
            </div>

            <div class="w-full flex justify-center items-center pt-3">
                  <div class="text-base text-gray-900 text-center font-normal">{{closeOfferOtp}}</div>
            </div>

            <div class="w-full flex justify-center items-center pt-4">
                  <img width="220" height="220" class="rounded-full"
                      src="~/assets/images/offer/close-offer.svg" alt="iamges">
            </div>

            <div class="w-full flex justify-center items-center pt-3 px-6">
              <div class="text-xs text-gray-500 text-center font-normal">{{ $t('askPartnerCode') }}</div>
            </div>

          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" @click="closeViewOtpPopup()" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
          </div>
        </div>
      </div>
    </div>
  <!--view OTP modal end-->


  <!--Start offer report modal-->
  
  <!--End offer report modal-->
  
  <!--offer feedback modal start-->
      
  <div v-if="showUserRatingPopup" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">   
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>    
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
        <button @click="closeUserRatingPopup('closeModal')" type="button" id="close-btns" class="absolute z-40 top-0 right-0 inline-flex rounded-md border border-transparent px-4 py-2">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black" fill-opacity="0.3"/>
          </svg>
        </button> 
          
        <div class="flex flex-col w-full px-6 mt-2">
              <h1 class="text-base text-gray-900 font-normal">{{ $t('feedback') }}</h1>
        </div> 
          
          <div class="w-full flex justify-center items-center pt-5 px-6">
            <div class="user-profile relative bg-white cursor-pointer rounded-full w-32 h-32 overflow-hidden">                 
              <!-- <img width="208" height="208" class="rounded-full"  src="~/assets/images/profile/profile.jpg" alt="iamges">       -->
              <img v-if="ratedUserInfo.imageUrl && !ratedUserInfo.imageUrl.match('deleted.jpeg')"  class="rounded-full w-32 h-32" :src="ratedUserInfo.imageUrl" :alt="ratedUserInfo.name">
              <img v-else  class="rounded-full w-32 h-32" src="~/assets/images/profile/profile.jpg" :alt="ratedUserInfo.name">
              
            </div>  
          </div>
          <div class="w-full flex justify-center items-center pt-2 px-6">
            <div class="text-base text-gray-900 text-center font-normal">{{ratedUserInfo.name}}</div>
          </div>

          <div class="w-full flex justify-center items-center pt-3 px-6">
            <!-- <div class="text-base text-gray-900 text-center font-normal">Good</div> -->
            <div v-if="ratingProperty.selectedStarIndex >= 0" class="text-base text-gray-900 text-center font-normal">{{ratingProperty.ratingStarValues[ratingProperty.selectedStarIndex]}}</div>
          </div> 

          <div class="w-full flex justify-center items-center pt-1 px-6">
            <div class="flex items-center space-x-1">
              <svg v-for="(number,index) in 5" @click="selectRatingStar(index)" @mouseover="ratingProperty.hoverStarIndex = index" @mouseleave="ratingProperty.hoverStarIndex = -1" :class="ratingProperty.hoverStarIndex >= index ? 'text-yellow-500' : ratingProperty.selectedStarIndex >= index ? 'text-yellow-500' : ''" class="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <!-- <svg class="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg class="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg class="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg class="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg class="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg> -->
            </div>
          </div> 

          <div v-if="ratingProperty.selectedRatingQuestion" class="w-full flex flex-col pt-3 px-6">
            <!-- <div class="text-sm text-gray-500">What went wrong? (Bob will not see it)</div> -->
            <div class="text-sm text-gray-500">{{ratingProperty.selectedRatingQuestion.question}} ({{ratedUserInfo.name}} {{$t('willnotsee')}})</div>
          </div> 

          <div  v-if="ratingProperty.selectedRatingQuestion" class="float-left w-full mt-3 px-6">
            <ul class="float-left">
                <li 
                  v-for="(answer, index) in ratingProperty.selectedRatingQuestion.predictedAnswers" 
                  :key="index + answer"
                  @click="selectuserRatingAnswerAnswer(index)"
                  class="float-left cursor-pointer">
                  <div :class="isAnswerSelected(index) ? 'bg-gray-700' : ''" class="bg-slate-400 py-2 px-3 rounded-md text-sm text-white mb-3 mr-2">{{answer}}</div>
                </li>
                <!-- <li class="float-left"><div class="bg-slate-400 py-2 px-3 rounded-md text-sm text-white mb-3 mr-2 bg-gray-700">simple </div></li>
                <li class="float-left"><div class="bg-slate-400 py-2 px-3 rounded-md text-sm text-white mb-3 mr-2">simple </div></li>
                <li class="float-left"><div class="bg-slate-300 py-2 px-3 rounded-md text-sm text-white mb-3 mr-2">simple </div></li>
                <li class="float-left"><div class="bg-slate-300 py-2 px-3 rounded-md text-sm text-white mb-3 mr-2">simple </div></li>
                <li class="float-left"><div class="bg-slate-300 py-2 px-3 rounded-md text-sm text-white mb-3 mr-2">simple </div></li>
                <li class="float-left"><div class="bg-slate-300 py-2 px-3 rounded-md text-sm text-white mb-3 mr-2">simple </div></li> -->
            </ul>    
          </div>    


            

        <div class="flex flex-col w-full px-6">
          <div class="mb-3 w-full">
            <label for="exampleFormControlTextarea1" class="form-label inline-block mb-1 text-gray-700 text-sm">
                {{ $t('commentAboutOffer') }}</label>
            <textarea v-model="ratingProperty.ratingComment" class="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700
                bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
                m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleFormControlTextarea1"
              rows="2"
              :placeholder="$t('typesomeline')"
            ></textarea>
          </div>
        </div>



        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" @click="submitUserrating()" :disabled="!ratingProperty.selectedRatingAnswerIndex.length" :class="!ratingProperty.selectedRatingAnswerIndex.length ? 'opacity-50' : ''" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green sm:ml-3 sm:w-auto sm:text-sm"> {{ $t('submit') }} </button>
          <button type="button" @click="closeUserRatingPopup('closeModal')" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            {{ $t('cancel') }}</button>
        </div>
      </div>
    </div>
  </div>

  <!--offer feedback modal end-->


  <!--gintaa feedback modal start-->
          
    <div v-if="showPlatformRatingPopup" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">   
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>    
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full">
            <button  @click="closePlatformModal" type="button" id="close-btns" class="absolute z-40 top-0 right-0 inline-flex rounded-md border border-transparent px-4 py-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black" fill-opacity="0.3"/>
                  </svg>
          </button> 

          <!-- <button @click="closePlatformModal" type="button" id="close-btns" class="absolute z-40 top-0 right-9 inline-flex rounded-md border border-transparent px-4 py-1">
                <span class="text-gray-500 text-sm">{{ $t('skip') }}</span>
          </button> -->
            
          <div class="flex flex-col w-full px-6 mt-2">
                <h1 class="text-base text-gray-900 font-normal">{{ $t('feedback') }}</h1>
          </div> 
            
            <div class="w-full flex justify-center items-center pt-5 px-6">
                  <svg width="130" height="26" viewBox="0 0 178 44" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-[130px] h-[26px] md:w-[145px] md:h-[41px]">
                        <g clip-path="url(#clip0_229_19)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.5298 44C41.5511 44 44.0005 41.5501 44.0005 38.5283V5.47171C44.0005 2.44993 41.5511 0 38.5298 0H5.47222C2.45019 0 0 2.44993 0 5.47171V38.5283C0 41.5501 2.45019 44 5.47222 44H38.5298ZM121.393 25.5233C121.393 26.4897 121.559 27.2981 121.89 27.9475C122.221 28.5964 122.996 28.9218 124.212 28.9218C124.764 28.9218 125.29 28.895 125.787 28.8386V34.0612C124.793 34.1715 123.866 34.2276 123.01 34.2276C121.241 34.2276 119.812 34.0822 118.72 33.7915C117.629 33.5021 116.779 32.9428 116.171 32.1135C115.563 31.2842 115.259 30.0961 115.259 28.549V15.9068H112.482V10.477H115.259V4.38367H121.393V10.477H125.953V15.9068H121.393V25.5233ZM68.6495 27.2424C69.6026 26.7042 70.3561 25.9591 70.9085 25.0045C71.4618 24.0517 71.7384 23.009 71.7384 21.8763C71.7384 20.7155 71.4618 19.666 70.9085 18.7259C70.3561 17.7858 69.6026 17.0474 68.6495 16.5077C67.6967 15.9687 66.6397 15.6993 65.4794 15.6993C63.5991 15.6993 62.0859 16.2872 60.9401 17.462C59.7931 18.6356 59.2192 20.1074 59.2192 21.8763C59.2192 23.6982 59.7791 25.1849 60.8988 26.3309C62.0183 27.4781 63.545 28.0513 65.4794 28.0513C66.6397 28.0513 67.6967 27.782 68.6495 27.2424ZM74.5769 39.3882C72.5462 41.2795 69.7207 42.2275 66.1011 42.2275C61.7616 42.2275 58.1281 41.0792 55.199 38.787L58.2256 34.3926C59.1644 35.1387 60.2767 35.7468 61.5628 36.2168C62.8473 36.6853 64.2079 36.9206 65.6443 36.9206C69.5416 36.9206 71.4891 35.1523 71.4891 31.6158V31.2435C69.8304 32.5969 67.7025 33.2754 65.1056 33.2754C62.7014 33.2754 60.5872 32.771 58.7638 31.7607C56.9405 30.7536 55.544 29.3774 54.5774 27.6371C53.61 25.8958 53.127 23.9754 53.127 21.8763C53.127 19.7486 53.61 17.8208 54.5774 16.0935C55.544 14.367 56.9331 12.9914 58.7436 11.9696C60.553 10.9472 62.6738 10.4358 65.1056 10.4358C67.7025 10.4358 69.8304 11.1135 71.4891 12.4667V10.8499H77.6235V31.6158C77.6235 34.904 76.6079 37.4948 74.5769 39.3882ZM80.7319 33.6467H86.9498V10.8912H80.7319V33.6467ZM110.989 20.1758C110.989 17.0543 110.278 14.6505 108.856 12.9641C107.432 11.2789 105.145 10.4358 101.995 10.4358C100.945 10.4358 99.8534 10.6575 98.7207 11.099C97.5867 11.5412 96.6472 12.1347 95.9018 12.8814V10.8499H89.7266V33.6467H95.9018V21.5851C95.8467 19.3753 96.2746 17.8208 97.1871 16.9228C98.0983 16.0246 99.1218 15.5755 100.255 15.5755C103.183 15.5755 104.648 17.1086 104.648 20.1758V33.6467H110.989V20.1758ZM138.676 15.7824C140.583 15.7824 142.103 16.3839 143.236 17.586C144.369 18.7876 144.936 20.3421 144.936 22.2483C144.936 24.2384 144.376 25.807 143.257 26.9527C142.138 28.0995 140.611 28.6721 138.676 28.6721C136.798 28.6721 135.285 28.0645 134.138 26.8506C132.992 25.6334 132.418 24.1004 132.418 22.2483C132.418 20.3421 132.977 18.7876 134.097 17.586C135.216 16.3839 136.743 15.7824 138.676 15.7824ZM141.973 33.2948C143.257 32.7281 144.162 32.0871 144.687 31.3685V33.6464H150.821V10.8499H144.687V13.2126C144.051 12.3838 143.132 11.6996 141.932 11.1607C140.729 10.622 139.34 10.3518 137.765 10.3518C135.416 10.3518 133.378 10.8777 131.651 11.9278C129.924 12.9778 128.604 14.4088 127.692 16.218C126.781 18.0275 126.325 20.0385 126.325 22.2483C126.325 24.4596 126.781 26.4697 127.692 28.2788C128.604 30.089 129.924 31.5196 131.651 32.5691C133.378 33.6196 135.416 34.1445 137.765 34.1445C139.285 34.1445 140.687 33.8598 141.973 33.2948ZM169.474 17.586C168.34 16.3839 166.821 15.7824 164.914 15.7824C162.979 15.7824 161.454 16.3839 160.335 17.586C159.215 18.7876 158.656 20.3421 158.656 22.2483C158.656 24.1004 159.229 25.6334 160.376 26.8506C161.521 28.0645 163.035 28.6721 164.914 28.6721C166.848 28.6721 168.375 28.0995 169.495 26.9527C170.614 25.807 171.173 24.2384 171.173 22.2483C171.173 20.3421 170.606 18.7876 169.474 17.586ZM170.925 31.3685C170.399 32.0871 169.495 32.7281 168.21 33.2948C166.924 33.8598 165.522 34.1445 164.003 34.1445C161.654 34.1445 159.614 33.6196 157.889 32.5691C156.161 31.5196 154.842 30.089 153.93 28.2788C153.019 26.4697 152.563 24.4596 152.563 22.2483C152.563 20.0385 153.019 18.0275 153.93 16.218C154.842 14.4088 156.161 12.9778 157.889 11.9278C159.614 10.8777 161.654 10.3518 164.003 10.3518C165.577 10.3518 166.967 10.622 168.168 11.1607C169.37 11.6996 170.289 12.3838 170.925 13.2126V10.8499H177.059V33.6464H170.925V31.3685Z" fill="#8EC23C"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7835 20.5325C19.8552 20.5325 18.0633 21.1171 16.5746 22.1181L20.9938 24.8924V26.4267C21.2479 26.3686 21.5118 26.3351 21.7835 26.3351C23.7389 26.3351 25.3253 27.921 25.3253 29.8777C25.3253 31.8334 23.7389 33.4193 21.7835 33.4193C19.8276 33.4193 18.2422 31.8334 18.2422 29.8777C18.2422 28.8506 18.6816 27.9284 19.3798 27.2813C17.3636 26.8705 15.5325 25.9531 14.0249 24.6668C13.0226 26.1555 12.4375 27.9484 12.4375 29.8777C12.4375 35.0386 16.6221 39.223 21.7835 39.223C26.9449 39.223 31.1293 35.0386 31.1293 29.8777C31.1293 24.7168 26.9449 20.5325 21.7835 20.5325Z" fill="#CAFC9D"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5746 15.5681C32.5746 21.5282 27.7429 26.3586 21.783 26.3586C15.8234 26.3586 10.9917 21.5282 10.9917 15.5681C10.9917 9.60847 15.8234 4.77649 21.783 4.77649C27.7429 4.77649 32.5746 9.60847 32.5746 15.5681Z" fill="#CAFC9D"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.7308 7.63521C31.9935 7.59209 33.009 6.04624 33.009 4.77649H26.9448C28.3924 5.47031 29.6772 6.44788 30.7308 7.63521Z" fill="#CAFC9D"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7836 20.5325C18.9723 20.5325 16.453 21.7749 14.7397 23.7395C16.5545 25.3045 18.8942 26.2764 21.4613 26.3517C21.5672 26.3413 21.6749 26.3351 21.7836 26.3351C21.8923 26.3351 21.9997 26.3413 22.1064 26.3517C24.6724 26.2764 27.0131 25.305 28.8272 23.7395C27.1142 21.7749 24.5948 20.5325 21.7836 20.5325Z" fill="#FCF5FF"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M86.2448 7.47223C85.5819 8.12165 84.7796 8.44598 83.8401 8.44598C82.873 8.44598 82.0505 8.12165 81.3746 7.47223C80.6966 6.8223 80.359 6.02896 80.359 5.08839C80.359 4.17588 80.6966 3.39633 81.3746 2.74691C82.0505 2.09723 82.873 1.77214 83.8401 1.77214C84.7796 1.77214 85.5819 2.09723 86.2448 2.74691C86.908 3.39633 87.2393 4.17588 87.2393 5.08839C87.2393 6.02896 86.908 6.8223 86.2448 7.47223Z" fill="#48CEF3"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_229_19">
                              <rect width="177.059" height="44" fill="white"/>
                            </clipPath>
                        </defs>
                      </svg>  
            </div>   
            
              

            <!-- <div class="w-full flex justify-center items-center pt-3 px-6 mt-5">
                  <div class="text-base text-gray-900 text-center font-normal">Good</div>
            </div>  -->


                  <div class="w-full flex justify-center items-center pt-8 px-6">
            <div class="flex items-center space-x-1">
              <svg v-for="(number,index) in 5" @click="getQuestionsBasedOnRating(index)" @mouseover="platformratingProperty.hoverStarIndex = index" @mouseleave="platformratingProperty.hoverStarIndex = -1" :class="platformratingProperty.hoverStarIndex >= index ? 'text-yellow-500' : platformratingProperty.selectedStarIndex >= index ? 'text-yellow-500' : ''" class="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              
            </div>
          </div>

            <!-- <div class="w-full flex justify-center items-center pt-1 px-6">
                  <div class="flex items-center space-x-1">
                <svg class="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="w-5 h-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg class="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>  -->

            

            <div class="w-full flex flex-col pt-3 px-6">
                  <div class="text-sm text-gray-500 font-medium">{{platFormRatingObj.questionAndAnswers[0].question}}</div>
            </div> 

            <div v-if="answersRegardingQuestions.length>0" class="float-left w-full mt-3 px-6">
                  <ul  class="float-left" v-for="(item,index) in answersRegardingQuestions" :key="index">
                      <li  @click="changeAnswer(item)" class="float-left"><div class="bg-slate-400 py-2 cursor-pointer px-3 rounded-md text-sm text-white mb-3 mr-2" v-bind:class="{ 'bg-gray-700': item.isActive }">{{item.answer}} </div></li>
                      
                  </ul>    
            </div> 

             


              

          <div class="flex flex-col w-full px-6">
            <div class="mb-3 w-full">
              <label for="exampleFormControlTextarea1" class="form-label inline-block mb-1 text-gray-700 text-sm">
                  {{ $t('commentAboutPlatform') }}</label>
              <textarea  v-model="platFormRatingObj.comment" class="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700
                  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
                  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlTextarea1"
                rows="2"
                :placeholder="$t('typeRatingPlatform')"
              ></textarea>
            </div>
          </div>



          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button   type="button" @click="submitPlatformRating" :disabled="!isFormValid || loading" :class="[isFormValid || loading ? '' : 'opacity-50', 'bg-firoza flex justify-center text-white font-bold py-2 px-3 h-12 rounded w-full text-base leading-[34px]']"> 
              
              <span v-show="!loading">{{ $t('submit') }} </span>
                      <Spinner v-show="loading" /> </button>
            <!-- <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
             {{ $t('cl_Back') }}

            </button> -->
          </div>
        </div>
      </div>
    </div>
  <!--gintaa feedback modal end-->
  
  <!-- start share address modal ! remove hidden class -->
  <ChatShareAddress v-if="showShareAddressPopup" :offerData="offerData"  @closeModal="closeModal" @addAddress="addAddress"/>
  <!-- End share address modal -->

  <GMap  
    v-if="showAddaddressPopup"
    :editOrAddAddressDetails="editOrAddAddressDetails"
    @savedAddress="savedAddress"/> 

  <!-- Add coins to your wallet start -->
  <addCoins v-if="showReachargWalletPopup" :returnUrl="returnUrl" :preDefineAmount="deficitAmount" :showmodal = "showReachargWalletPopup" @closeModal="closeModal" />
  <!-- Add coins to your wallet end -->

  <div class="fixed bg-gray-800/[.5] z-50 inset-0 overflow-y-hidden" v-if="displayModalTips" aria-labelledby="modal-bg" role="dialog" aria-modal="true">
    <offerDetailsTipsInfo v-if="offerData && offerData.currentState !== ''" @tipModal="hideModal()" class="mt-36 w-4/5 m-auto" :offerState="offerData.currentState" />
    
  </div>
   

  <!-- revise modal start -->
  <!-- <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">  
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">      
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#d0fd96] sm:mx-0 sm:h-10 sm:w-10">
                 <img src="~/assets/images/offer/revise-icon.webp" alt="icon" width="28" height="28" />              
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Revise</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-700">You can revise maximum 3 times, you have only <span class="font-medium">one revise</span> left</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-firoza px-4 py-2 text-base font-medium text-white shadow-sm  sm:ml-3 sm:w-auto sm:text-sm">Continue</button>
          <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-700 bg-transparent px-4 py-2 text-base font-medium text-gray-700 shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div> -->
  <!-- revise modal end -->

  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import moment from "moment";
import Capitalize from '../../../filters/Capitalize';
import RemoveUnderscore from '../../../filters/RemoveUnderscore';
import offerDetailsTipsInfo from '~/components/tips/offerDetailsTipsInfo.vue';
import rejectionReasons from '~/components/offers/rejectionReasons.vue';
 
export default Vue.extend({
  // components: { gintaaJunction, DoorstepDelivery },
  name: 'OfferDetails',
  components: { offerDetailsTipsInfo, rejectionReasons },
  middleware: 'authenticated',
  filters:{
    Capitalize,
    RemoveUnderscore
  },
  data() {
    return {
      showAddaddressPopup:false,
      editOrAddAddressDetails: {mode:'add',addressDet:{}},
      addressDet:{
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
      breadcrumb: [],
      // breadcrumb: [
      //   {
      //     name: this.$t('myExchanges'),
      //     href: '/my-offers'
      //   }
      // ],
      displayModalTips : false,
      offerId: this.$route.params.offer_id,
      authUser : this.$store.state.authUser,
      queryParams : this.$route.query,
      loading: true,
      showSharePhonePopup: false,
      showShareAddressPopup: false,
      showRejectOfferModal: false,
      showAcceptOfferModal: false,
      showCloseOfferModal: false,
      showViewOtpModal: false,
      showUserRatingPopup: false,
      showPlatformRatingPopup: false,
      showReachargWalletPopup: false,
      returnUrl: '/offers/details/'+ this.$route.params.offer_id,
      currentWalletBallance: 0,
      walletDetails: {
        netCount: 0,
        netLien: 0,
        netReward: 0
      },
      showResponseMessage: {
        showPopup: false,
        status: null,
        message: null
        // showPopup: true,
        // status: 'error',
        // message: "This is a test error message"
      },
      apiUrls: this.$config.apiUrls,
      timeOffset: this.$config.timeOffset, // in minutes
      deficitAmount: 0,
      offerData: {
        allStates: [],
        currentState: '',
        currentStetPosition: 0,
        senderUserInfo: {
          id: null,
          name: null,
          imageUrl: null
        },
        dealSentTimeStamp: null,
        receiverUserInfo: {
          id: null,
          name: null,
          imageUrl: null
        },
        leftPanelUserInfo: {
          id: null,
          name: null,
          imageUrl: null
        },
        rightPanelUserInfo: {
          id: null,
          name: null,
          imageUrl: null,
          averageRating: null
        },
        requestedAmount: null,
        requestedOffers: [],
        invoiceUrl: null,
        dealRefId: null,
        dealStatus: {
          dealStatus: null,
          dealStatusDesc: null
        },
        initiatorPaidAmount: null,
        callerIsReceiver: false,
        dealDeliveryMethod: {},
        triggeredByUserId: null,
        initiatorAwb: null,
        dealRatedByReceiver: false,
        dealRatedBySender: false,
        updateCounter: null,
        requestedAmountPaidByInitiatingUser: null,
        offerHistory: [],
        offeredOffers: [],
        leftPanelOffers: [],
        rightPanelOffers: [],
        leftPanelRequestedAmount: null,
        rightPanelRequestedAmount: null,
        receiverLienAmount: null,
        receiverDebitAmount: null,
        initiatorLienAmount: null,
        initiatorDebitAmount: null,
        receiverPaidAmount: false,
        transactionMode: null,
        transactionType: null,
        clickable: true,
        initiatorContact: null,
        initiatorAgreedShareContact: false,
        receiverContact: null,
        receiverAgreedShareContact: false,
        canRevise: false,
        initiatorDeliveryAddress: {}
      },
      closeOfferOtp: null,
      otp: {
        otp: '',
        error: null,
        valid: false
      },
      buttonVisibility: {
        rejectButton: false,
        acceptButton: false,
        reviseButton: false,
        editButton: false,
        closeButton: false,
        payButton: false,
        otpButton: false,
        ratingButton: false,
        reportButton: false,
        chatButton: false,
        trackButton: false,
        sharePhoneNumberButton: false,
        shareAddressButton: false
      },
      ratedUserInfo:{
        id: null,
        imageUrl: null,
        name: null
      },
      ratingProperty: {          
        ratingQuestions: [],
        ratingStarValues: [this.$t('terrible'), this.$t('poor'), this.$t('average'), this.$t('average'), this.$t('excellent')],
        hoverStarIndex: -1,
        selectedStarIndex: -1,
        selectedRatingQuestion: {
                      questionId: null,
                      question: null,
                      rating: 0,
                      displayOrderIndex: -1,
                      predictedAnswers: []
                  },
        selectedRatingAnswerIndex: [],
        ratingComment: null
      },

      platformratingProperty:{
      hoverStarIndex: -1,
      selectedStarIndex: -1,},
      isConfirmRevise: false,
      isFormValid:false,
      platFormRatingObj:{
        ratingFor:"PLATFORM",
        rating:null,
        questionAndAnswers:[
          {
            questionId: "",
            question:"",
            answers : [{}] 
          }
        ],
        comment:""
      },

      answersRegardingQuestions:[],
      platFormratingQuestions:[],      
      dealDocumentData: {},
      sharablePhoneNumber: this.$store.state.authUser && this.$store.state.authUser.phoneNumber ? this.$store.state.authUser.phoneNumber : null,

      partnerContactDetails: {
        partnerName: "",
        partnerContact: "",
        contactType: 'mobile'
      }

      
    }
  },
  computed:{
    // fetchOfferDetails: function(){
    //   return this.getOfferDetails();
    // }
    // offerData(){
    //   return this.getOfferDetails();
    // }
  },
  created() {
    this.$on("closeModal", (section:any) => {
      this.showAddaddressPopup = false;
      if (section) {
         console.log("Address Added success fully")
      }
    });
  },
  mounted() {
    // let modal = document.getElementById("icon-modals")!;
    // let btn = document.getElementById("full-list")!;
    // let closeBtn = document.getElementById("close-btns")!;

    // modal.style.display = "none";

    // btn.onclick = function () {
    //   modal.style.display = "block";
    // }

    // closeBtn.onclick = function () {
    //   modal.style.display = "none";
    // }
    this.getMywalletDetails();
    this.getOfferDetails();

    this.readStatusFromRealTimeDb()

    // Start fetch latest chat unread count // 
    if(this.authUser){
      const chatCol = 'tradingChatDeals'
      this.$fire.firestore
        .collection(chatCol)
        .doc(this.offerId)
        .onSnapshot((doc: any) => {
          this.dealDocumentData = {}
          this.dealDocumentData =  doc.data();
          console.log('vm.dealDocumentData:', this.dealDocumentData)
        })
    }
    // End fetch latest chat unread count // 

  },
  methods: {

    getAddressitemDet(addressItemDet:any){
          const addDetArray = []
          if(addressItemDet){
          addDetArray.push(addressItemDet?.flatNo,addressItemDet?.area,
          addressItemDet?.city,addressItemDet?.landmark,addressItemDet?.state,addressItemDet?.zip)
        }

        if(addDetArray.length){
        var filtered = addDetArray.filter(function (el) {
        return el != null;
        });
        return filtered.join();
        }
     
        },

    displayTipsModal(){
      this.displayModalTips = true;
    },
    hideModal(){
      this.displayModalTips = false;
    },
    getUserProfileUrl(uid: string) {
      if(uid){
        return this.authUser.uid === uid ? '/my-profile' : '/profile/view/' + uid;
      }
      return '/';
    },
    getProfileImageUrl(imageUrl: string) {
      // const defaultImage = "/_nuxt/assets/images/profile/profile.jpg";
      if(imageUrl && !imageUrl.match("deleted.jpeg")){
        return imageUrl;
      }
      return null;
    },
    async getMywalletDetails(){
      // this.loading = true;
      try {
        const url = `/wallet/v1/wallet/details`;
        const data = await this.$axios.$get(url);
        console.log("Data:", data);
        if (data.payload) {
            
            if(data.payload.COIN){
                this.walletDetails.netCount = data.payload.COIN.netCount;
                this.walletDetails.netLien = data.payload.COIN.netLien;
                this.walletDetails.netReward = data.payload.COIN.netReward;
                // this.currentWalletBallance = data.payload.COIN.netCount - data.payload.COIN.netLien;
                // this.currentWalletBallance = data.payload.COIN.netCount;
                this.currentWalletBallance = data.payload.COIN.usableBalance;
            }
        } else {
         // this.showAllConv = false;
        }

        // this.loading = false;
      } catch (error) {
        console.log(error);
        // this.loading = false;
      }

    },
    async getOfferDetails() {
      // this.loading        = true;
      let requestPath     = this.apiUrls.offerDetails;
      requestPath         = requestPath.replace('{offerId}', this.offerId);
      let offerResponse   = await this.$axios.get(requestPath)
                              .then((response) => {                               
                              return response.data;
                            })
                            .catch((error)=>{
                              return error.response.data;
                            });

      this.loading = false;

      if(offerResponse && offerResponse.success){

      //  console.log("offerResponse.payload",offerResponse.payload)
        const offerData = offerResponse.payload;

        this.offerData.allStates            = offerData.allStates;
        this.offerData.currentState         = offerData.currentState;
        this.offerData.currentStetPosition  = this.offerData.allStates?.indexOf(this.offerData.currentState);
        this.offerData.receiverUserInfo     = offerData.receiver;
        this.offerData.dealSentTimeStamp    = offerData.dealSentTimeStamp;
        this.offerData.senderUserInfo       = offerData.sender;
        this.offerData.requestedAmount      = offerData.requestedAmount;
        this.offerData.requestedOffers      = offerData.requestedOffers;
        this.offerData.invoiceUrl      = offerData.invoiceUrl;
        this.offerData.dealRefId      = offerData.dealRefId;
        this.offerData.dealStatus      = offerData.dealStatus;
        this.offerData.initiatorPaidAmount      = offerData.initiatorPaidAmount;
        this.offerData.callerIsReceiver      = offerData.callerIsReceiver;
        this.offerData.dealDeliveryMethod      = offerData.dealDeliveryMethod;
        this.offerData.triggeredByUserId      = offerData.triggeredByUserId;
        this.offerData.initiatorAwb      = offerData.initiatorAwb;
        this.offerData.dealRatedByReceiver      = offerData.dealRatedByReceiver;
        this.offerData.dealRatedBySender      = offerData.dealRatedBySender;
        this.offerData.updateCounter      = offerData.updateCounter;
        this.offerData.requestedAmountPaidByInitiatingUser      = offerData.requestedAmountPaidByInitiatingUser;
        this.offerData.offeredOffers      = offerData.offeredOffers;
        this.offerData.receiverPaidAmount = offerData.receiverPaidAmount;
        this.offerData.receiverLienAmount = offerData.receiverLienAmount;
        this.offerData.receiverDebitAmount = offerData.receiverDebitAmount;
        this.offerData.initiatorLienAmount = offerData.initiatorLienAmount;
        this.offerData.initiatorDebitAmount = offerData.initiatorDebitAmount;
        this.offerData.transactionMode      = offerData.transactionMode;
        this.offerData.transactionType      = offerData.transactionType;
        
        // Process lef right data
        this.offerData.leftPanelUserInfo = (this.authUser.uid === offerData.sender.id) ? offerData.sender : offerData.receiver;
        this.offerData.rightPanelUserInfo = (this.authUser.uid != offerData.sender.id) ? offerData.sender : offerData.receiver;
        this.offerData.leftPanelOffers = offerData.callerIsReceiver ? offerData.requestedOffers : offerData.offeredOffers;
        this.offerData.rightPanelOffers = !offerData.callerIsReceiver ? offerData.requestedOffers : offerData.offeredOffers;
        this.offerData.clickable = offerData.clickable

        this.offerData.initiatorContact = offerData.initiatorContact
        this.offerData.initiatorAgreedShareContact = offerData.initiatorAgreedShareContact
        this.offerData.receiverContact = offerData.receiverContact
        this.offerData.receiverAgreedShareContact = offerData.receiverAgreedShareContact
        
        this.offerData.canRevise = offerData.canRevise
        this.offerData.initiatorDeliveryAddress = offerData?.initiatorDeliveryAddress

        this.processPartnerContactDetails(offerData)
        

        if(offerData.callerIsReceiver) {
          if(!offerData.requestedAmountPaidByInitiatingUser) {
            // left panel
            this.offerData.leftPanelRequestedAmount  = offerData.requestedAmount;
          } else {
            // Right panel
            this.offerData.rightPanelRequestedAmount = offerData.requestedAmount;
          }
        } else {
          if(offerData.requestedAmountPaidByInitiatingUser) {
            // left panel
            this.offerData.leftPanelRequestedAmount  = offerData.requestedAmount;
          } else {
            // Right panel
            this.offerData.rightPanelRequestedAmount = offerData.requestedAmount;
          }
        }



        // Process Breadcrumb data
        // let breadcrumbItem = {name: this.offerData.currentState};
        this.breadcrumb = [
          {
            name: this.$t('myExchanges'),
            href: this.localePath('/my-offers')
          }
        ]
        let breadcrumbItem = {name: this.$t('offerState.'+this.offerData.currentState)};
        this.breadcrumb.push(breadcrumbItem)

        this.getOtherUserInfo(this.offerData.rightPanelUserInfo.id);
        
        
        this.payNow()
        this.showActionButtons();
        this.autoAcceptOrAutoPayment(); // This function should call after call "showActionButtons()" function
        this.getOfferHistory();
      }

      
      return this.offerData
    },
    async getOtherUserInfo(userId: string) {
      let requestPath       = `/users/v1/user/${userId}`;
      let userInfoRessponse = await this.$axios.get(requestPath)
                              .then((response) => {                               
                                return response.data;
                              })
                              .catch((error)=>{
                                return error.response.data;
                              });

      console.log("userInfoRessponse:", userInfoRessponse);

      if(!userInfoRessponse.error){
        this.offerData.rightPanelUserInfo.averageRating = userInfoRessponse.payload?.averageRating || null;
      }
      console.log('rightPanelUserInfo:', this.offerData.rightPanelUserInfo)

    },
    async getOfferHistory() {
      this.closePopup('accept');
      // this.loading        = true;
      this.offerData.offerHistory = [];

      let requestPath     = this.apiUrls.offerHistory;
      requestPath         = requestPath.replace('{offerId}', this.offerId);

      // this.offerData.updateCounter = 50; // this.offerData.updateCounter || 20;
      const updateCounter = 50
      requestPath         = requestPath.replace('{updateCounter}', updateCounter);
      let offerHistoryResponse   = await this.$axios.get(requestPath)
                                    .then((response) => {                               
                                    return response.data;
                                  })
                                  .catch((error)=>{
                                    return error.response.data;
                                  });

      console.log('offerHistoryResponse:', offerHistoryResponse);
      
      // for delta offer history
      if(offerHistoryResponse && offerHistoryResponse.payload && offerHistoryResponse.payload.revisionHistoryDeltaViews && offerHistoryResponse.payload.revisionHistoryDeltaViews.length) {
        const offerHistoryData = offerHistoryResponse.payload.revisionHistoryDeltaViews;
        for (const history  of offerHistoryData) {          
          this.processOfferHistryData(history);
        }
      }

      // for initiate offer history
      if(offerHistoryResponse && offerHistoryResponse.payload && offerHistoryResponse.payload.offerInitiationState) {
        const iniTiateOfferHistory = offerHistoryResponse.payload.offerInitiationState;
        this.processInitiateOfferHistory(iniTiateOfferHistory)
      }
      
      // this.processInitiateOfferHistory();
    },
    processInitiateOfferHistory(iniTiateOfferHistory: any){
      console.log('iniTiateOfferHistory:', iniTiateOfferHistory)
      const historyObject = {
        displayDate: '',
        displayName: '',
        action: '',
        displayMessages: []
      }
      let initiatorName   = (iniTiateOfferHistory.sender.id === this.authUser.uid) ? iniTiateOfferHistory.sender.name + ' (You) ' : iniTiateOfferHistory.sender.name;
      let receiverName  = (iniTiateOfferHistory.receiver.id === this.authUser.uid) ? iniTiateOfferHistory.receiver.name + ' (You) ' : iniTiateOfferHistory.receiver.name;
      let displayTime   = moment(iniTiateOfferHistory.dealSentTimeStamp).add(this.timeOffset, 'minutes').format('lll');
      
      const isSuggestWithOffer  = iniTiateOfferHistory.offeredOffers && iniTiateOfferHistory.offeredOffers.length > 0       
      
      const offeredOffers   = iniTiateOfferHistory.offeredOffers && iniTiateOfferHistory.offeredOffers.length > 0 ? iniTiateOfferHistory.offeredOffers : null
      let offeredOfferName  = ''
      if(offeredOffers){
        offeredOffers.map((item: any)=>{
          let offerTitle    = item.offerName;
          offeredOfferName += offerTitle + ', '
        })
        offeredOfferName = offeredOfferName.slice(0, -2);
        offeredOfferName = '<span class="font-bold">' + offeredOfferName + '</span>'
      }



      const requestedOffers = iniTiateOfferHistory.requestedOffers && iniTiateOfferHistory.requestedOffers.length > 0 ? iniTiateOfferHistory.requestedOffers : null
      let rquestedOfferName = ''
      if(requestedOffers) {
        requestedOffers.map((item: any)=>{
          let offerTitle    = item.offerName;
          rquestedOfferName += offerTitle + ', '
        })
        rquestedOfferName = rquestedOfferName.slice(0, -2);
        rquestedOfferName = '<span class="font-bold">' + rquestedOfferName + '</span>'
      }

      const transactionMode     = iniTiateOfferHistory.transactionMode;
      const requestedAmount     = iniTiateOfferHistory.requestedAmount;


      let paybleUserName = ''
      if(iniTiateOfferHistory.requestedAmountPaidByInitiatingUser) {
        paybleUserName = initiatorName
      } else {
        paybleUserName = receiverName
      }

      


      let offerMode = null
      if(isSuggestWithOffer) {
        if(requestedAmount && requestedAmount != 0) {
          offerMode = transactionMode === 'COIN' ? 'PRODUCT-WITH-COIN' : 'PRODUCT-WITH-CASH';
        } else {
          offerMode = 'PRODUCT';
        }
        
      } else {
        offerMode = transactionMode;
      }

      console.log('offerMode:', offerMode)
      let displayMsg = null
      switch (offerMode) {
        case 'COIN':
          displayMsg = this.$t('initiateOfferCoin') //"{initiatorName} initiated the offer to {receiverName} and wishes to get {requestedOfferName} by exchanging {requestedAmount} gc."
          break;
        case 'CASH':
          displayMsg = this.$t('initiateOfferCash') //"{initiatorName} initiated the offer to {receiverName} and wishes to get {requestedOfferName} by exchanging Rs. {requestedAmount}."
          break;
        case 'PRODUCT':
          displayMsg = this.$t('initiateOfferProduct') //"{initiatorName} initiated the offer to {receiverName} and wants to exchange {requestedOfferName} with {offeredOfferName}."
          break;
        case 'PRODUCT-WITH-COIN':
          displayMsg = this.$t('initiateOfferProductWithCoin') //"{initiatorName} initiated the offer to {receiverName} and wants to exchange {requestedOfferName} with {offeredOfferName} and payable {requestedAmount} gc by {paybleUser}."
          break
        case 'PRODUCT-WITH-CASH':
          displayMsg = this.$t('initiateOfferProductWithCash') //"{initiatorName} initiated the offer to {receiverName} and wants to exchange {requestedOfferName} with {offeredOfferName} and payable Rs. {requestedAmount} by {paybleUser}."
          break;
        default: 
        displayMsg = null         
      }

      if (displayMsg){

        displayMsg = displayMsg.replace("{initiatorName}", '<span class="font-bold">' + initiatorName + '</span>');
        displayMsg = displayMsg.replace("{receiverName}", '<span class="font-bold">' + receiverName + '</span>');
        displayMsg = displayMsg.replace("{requestedAmount}", requestedAmount);
        displayMsg = displayMsg.replace("{requestedOfferName}", rquestedOfferName);
        displayMsg = displayMsg.replace("{offeredOfferName}", offeredOfferName);
        displayMsg = displayMsg.replace("{paybleUser}", paybleUserName);

        historyObject.displayDate = displayTime;
        historyObject.displayName = initiatorName;
        historyObject.action      = 'INITIATED';
        historyObject.displayMessages.push(displayMsg);      
        
        this.offerData.offerHistory.push(historyObject);

      }

    },
    processOfferHistryData(offerHistory: any){
      console.log('history:', offerHistory);
      let currentUser         = this.authUser;
      const revisionUserId  = offerHistory.revisionUserId;
      // console.log('currentUser:', currentUser);

      const historyObject = {
        displayDate: '',
        displayName: '',
        action: '',
        displayMessages: []
      }

      ////////// Start Process Display Name///////////////////////
      let displayName = ''
      if(revisionUserId === currentUser.uid){
        let uName = revisionUserId === this.offerData.receiverUserInfo?.id ? this.offerData.receiverUserInfo?.name.trim() : this.offerData.senderUserInfo?.name.trim()
        displayName = uName + ' (You) ';
      } else if(revisionUserId === this.offerData.receiverUserInfo?.id){
        displayName = this.offerData.receiverUserInfo?.name.trim();
      } else {
        displayName = this.offerData.senderUserInfo?.name.trim();
      }
      historyObject.displayName = displayName;    
      ////////// End Process Display Name///////////////////////


      ///////////// Start Process display date ////////////////
      const createdDate         = offerHistory.createdDate;
      historyObject.displayDate = moment(createdDate).add(this.timeOffset, 'minutes').format("lll");
      ///////////// End Process display date /////////////////      
      
      const otherChanges    = offerHistory?.otherChanges;


      /////////////// Start Process Activity //////////////////////  

      //------------- Start Payment revice --------------//  
      if(otherChanges.requestedAmount != undefined) {        
        let newValue = otherChanges?.requestedAmount.newValue;
        let prevValue = otherChanges?.requestedAmount.prevValue;   
        
        let displayMsg = this.$t('reviceRequestedAmount', {displayName: '<span class="font-bold">' + displayName + '</span>', prevValue: prevValue, newValue: newValue }) //'{displayName} changed requested amount from {prevValue} to {newValue}';
        
        // displayMsg = displayMsg.replace("{displayName}", displayName);
        // displayMsg = displayMsg.replace("{prevValue}", prevValue);
        // displayMsg = displayMsg.replace("{newValue}", newValue);
        
        historyObject.displayMessages.push(displayMsg);
      }    
      //------------- End Payment revice --------------//


      //------------- Start Transaction Mode revice --------------//  
      if(otherChanges.transactionMode != undefined) {        
        let newValue = otherChanges?.transactionMode.newValue;
        let prevValue = otherChanges?.transactionMode.prevValue;   
        
        let displayMsg =  this.$t('reviceTransactionMode', {displayName: '<span class="font-bold">' + displayName + '</span>', prevValue: prevValue, newValue: newValue}) //'{displayName} changed offer transaction mode from {prevValue} to {newValue}';
        
        // displayMsg = displayMsg.replace("{displayName}", displayName);
        // displayMsg = displayMsg.replace("{prevValue}", prevValue);
        // displayMsg = displayMsg.replace("{newValue}", newValue);

        historyObject.displayMessages.push(displayMsg);
      }    
      //------------- End Transaction Mode revice --------------// 

      
      //------------- Start Offer added revice --------------//  
      if(offerHistory.offeredOffersAdded != undefined && offerHistory.offeredOffersAdded.length > 0) {        
        const productName   =  offerHistory.offeredOffersAdded[0].offerName;
        const productValue  = offerHistory.offeredOffersAdded[0].unitOfferValuation;  
        const quantity      = '1';

        // let displayMsg  = '{displayName} have added following item <br/>';
        //     displayMsg += '{productName}, Quantity: {quantity}, Product Value: {productValue}';
        let displayMsg  = this.$t('reviceOfferedOffersAdded', {displayName: '<span class="font-bold">' + displayName + '</span>', productName: productName, quantity: quantity, productValue: productValue});

        // displayMsg = displayMsg.replace("{displayName}", displayName);
        // displayMsg = displayMsg.replace("{productName}", productName);
        // displayMsg = displayMsg.replace("{quantity}", quantity);
        // displayMsg = displayMsg.replace("{productValue}", productValue);

        historyObject.displayMessages.push(displayMsg);
      }    
      //------------- End Offer added revice --------------//

      //------------- Start Offer removed revice --------------//  
      if(offerHistory.offeredOffersRemoved != undefined && offerHistory.offeredOffersRemoved.length > 0) {        
        const productName   = offerHistory.offeredOffersRemoved[0].offerName;
        const productValue  = offerHistory.offeredOffersRemoved[0].unitOfferValuation;  
        const quantity      = '1';

        // let displayMsg  = '{displayName} have removed following item <br/>';
        //     displayMsg += '{productName}, Quantity: {quantity}, Product Value: {productValue} ';
        let displayMsg  = this.$t('reviceOfferedOffersRemoved', 
          {
              displayName: '<span class="font-bold">' + displayName + '</span>',
              productName: productName,
              quantity: quantity,
              productValue: productValue
          });

        // displayMsg = displayMsg.replace("{displayName}", displayName);
        // displayMsg = displayMsg.replace("{productName}", productName);
        // displayMsg = displayMsg.replace("{quantity}", quantity);
        // displayMsg = displayMsg.replace("{productValue}", productValue);

        
        historyObject.displayMessages.push(displayMsg);
      }    
      //------------- End Offer removed revice --------------//


      //------------- Start Delivery Preferance revice ------------// 
      if(otherChanges.dealDeliveryMethod != undefined) {  
        let newValueId = otherChanges.dealDeliveryMethod.newValue.id;
        let newValue = (newValueId === "Self") ? 'Personal Meeting' : otherChanges.dealDeliveryMethod.newValue.name;
        
        let prevValueId = otherChanges.dealDeliveryMethod.prevValue.id;
        let prevValue =  (prevValueId === "Self") ? 'Personal Meeting' : otherChanges?.dealDeliveryMethod.prevValue.name;   
        
        let displayMsg = '{displayName} changed offer delivery preference as {newValue} from {prevValue}';
        displayMsg = displayMsg.replace("{displayName}", displayName);
        displayMsg = displayMsg.replace("{prevValue}", prevValue);
        displayMsg = displayMsg.replace("{newValue}", newValue);

        historyObject.displayMessages.push(displayMsg);
      }    
      //------------- End Delivery Preferance revice --------------// 


      //------------- Start Gintaa Junction revice ------------// 
      if(otherChanges.dealJunction != undefined) {  
        let newValue = otherChanges.dealJunction.newValue.name;
        
        let prevValue =  null;
        if(otherChanges.dealJunction.prevValue) {
          prevValue =  otherChanges.dealJunction.prevValue.name;
        }
        
        let displayMsg = displayName + ' selected gintaa junction as ' + newValue;
        displayMsg += prevValue ? ' from ' + prevValue : '';
        historyObject.displayMessages.push(displayMsg);
      }    
      //------------- End Gintaa Junction revice --------------// 

      //------------- Start Gintaa Junction meeting time revice ------------// 
      if(otherChanges.meetingStartTime != undefined) {  
        let newStartTime = otherChanges.meetingStartTime.newValue;
        let newValue = moment(newStartTime).format("lll");
        
        let prevValue =  null;
        if(otherChanges.meetingStartTime.prevValue) {
          let prevStartTime = otherChanges.meetingStartTime.prevValue;
          prevValue =  moment(prevStartTime).format("lll");
        }
        
        let displayMsg = displayName + ' set meeting time at ' + newValue;
        displayMsg += prevValue ? ' instead ' + prevValue : '';
        historyObject.displayMessages.push(displayMsg);
      }    
      //------------- End Gintaa Junction meeting time revice --------------// 


      /////////////// End Process Activity ///////////////////////


      /////////////// Start Process Action //////////////////////
      // Remove the condition for now as backend resolved the duplicate occurance case of history
      // if(otherChanges.dealStatusCode.newValue != otherChanges.dealStatusCode.prevValue) {
        
        const dealStatusCode  = otherChanges?.dealStatusCode?.newValue;
        historyObject.action  = dealStatusCode;
                
        // let displayMsg = displayName + ' ' + dealStatusCode + ' this offer';
        let displayMsg = ''
        if(dealStatusCode === 'EXPIRED') {
          displayMsg = this.$t('expiredOffer')
        } else {
          displayMsg = this.$t('reviceDealStatusCode', {displayName: '<span class="font-bold">' + displayName + '</span>', dealStatusCode: this.$t('offerHistoryState.'+dealStatusCode)}) //'{displayName} {dealStatusCode} this offer';  
        }
        
        // displayMsg = displayMsg.replace("{displayName}", '<span class="font-bold">' + displayName + '</span>');
        // displayMsg = displayMsg.replace("{dealStatusCode}", dealStatusCode);

        historyObject.displayMessages.push(displayMsg);
      // }
      
      /////////////// End Process Action ///////////////////////


      console.log('historyObject:', historyObject);
      //if(otherChanges.dealStatusCode.newValue != otherChanges.dealStatusCode.prevValue) {
        //this.offerData.offerHistory.push(historyObject);
     // }

      if(historyObject.displayMessages.length){
        this.offerData.offerHistory.push(historyObject);
      }

    },
    
    showActionButtons() {
      const isLastModifier = this.isLastModifier();
      const isClosedOffer = this.isClosedOffer();

      //------- Start Process reject button ---------//
      if(this.offerData.dealStatus.dealStatus == 'INITIATED' || this.offerData.dealStatus.dealStatus == 'REVISED' || this.offerData.dealStatus.dealStatus == 'ACCEPTED') {
        // if (this.offerData?.initiatorPaidAmount && !this.offerData?.paymentInProgress) {
        
        // if (this.offerData?.initiatorPaidAmount) {
        //   this.buttonVisibility.rejectButton = false;
        // } else {
        //   this.buttonVisibility.rejectButton = true;
        // }
        this.buttonVisibility.rejectButton = true;
      } else {
        this.buttonVisibility.rejectButton = false;
      }
      //------- End Process reject button ---------//

      
      //------- Start Process accept button ---------//
      if ((this.offerData.dealStatus.dealStatus == 'INITIATED' || this.offerData.dealStatus.dealStatus == 'REVISED') && !isLastModifier) {
        this.buttonVisibility.acceptButton = true;
      } else {
        this.buttonVisibility.acceptButton = false;
      }
      //------- End Process accept button ---------//

      
      //------- Start Process revised button ---------//
      if (this.offerData.canRevise && (this.offerData.dealStatus.dealStatus == 'INITIATED' || this.offerData.dealStatus.dealStatus == 'REVISED')) {
        //result = this.showRevisePreference();
        this.buttonVisibility.reviseButton = true;
      } else {
        this.buttonVisibility.reviseButton = false;
      }
      //------- End Process revised button ---------//

      
      //------- Start Process edit button ---------//
      if (this.offerData.dealStatus.dealStatus == 'INITIATED' && !this.offerData.callerIsReceiver) {
        this.buttonVisibility.editButton = true;
      } else {
        this.buttonVisibility.editButton = false;
      }
      //------- End Process edit button ---------//

      
      //------- Start Process close button ---------//
      if (this.offerData.dealStatus.dealStatus == 'ACCEPTED' || this.offerData.dealStatus.dealStatus == 'PARTIAL_CLOSED') {
        if (this.offerData.dealDeliveryMethod && this.offerData.dealDeliveryMethod?.id == 'Shipping') {
          this.buttonVisibility.closeButton = false;
        } else {
          const isLastModifier = this.isLastModifier();
          if (this.offerData.dealStatus.dealStatus == 'PARTIAL_CLOSED') {
            this.buttonVisibility.closeButton = !isLastModifier
          } else {
            if(this.authUser.uid === this.offerData.receiverUserInfo.id && this.offerData.receiverPaidAmount){
              this.buttonVisibility.closeButton = true;
            }
            else if(this.authUser.uid === this.offerData.senderUserInfo.id && this.offerData.initiatorPaidAmount){
              this.buttonVisibility.closeButton = true;
            }
          }
        }
      } else {
        this.buttonVisibility.closeButton = false;
      }
      //------- End Process close button ---------//

      
      //------- Start Process pay button ---------//
      // if (this.offerData.dealStatus.dealStatus == 'ACCEPTED' && this.offerData.dealDeliveryMethod && this.offerData.dealDeliveryMethod?.id == 'Shipping' && !this.offerData?.callerIsReceiver) {
      //   this.buttonVisibility.payButton =  !this.offerData?.initiatorPaidAmount;
      // } else {
      //   this.buttonVisibility.payButton = false;
      // }
      if(this.authUser.uid === this.offerData.senderUserInfo.id && !this.offerData.initiatorPaidAmount && this.offerData.receiverPaidAmount){
        this.buttonVisibility.payButton = true;        
      } else {
        this.buttonVisibility.payButton = false;
      }
      //------- End Process pay button ---------//

      
      //------- Start OTP button ---------//
      if (this.offerData.dealStatus.dealStatus == 'PARTIAL_CLOSED') {
        this.buttonVisibility.otpButton = false //this.isLastModifier();
      } else {
        this.buttonVisibility.otpButton = false;
      }
      //------- End OTP button ---------//

      
      // 
      //------- Start ratting button ---------//
      // isClosedOffer
      if ((this.offerData.dealStatus.dealStatus == 'CLOSED') && isClosedOffer) {
        
        this.buttonVisibility.ratingButton = true;
      
      } else if(this.offerData.dealStatus.dealStatus == 'PARTIAL_CLOSED' && this.offerData.triggeredByUserId === this.authUser.uid) {
        
        if (this.offerData.callerIsReceiver) {
          if (!this.offerData.dealRatedByReceiver) {
             this.buttonVisibility.ratingButton = true;
          } else {
            this.buttonVisibility.ratingButton = false;
          }
        } else {
          if (!this.offerData.dealRatedBySender) {
            this.buttonVisibility.ratingButton = true;
          } else {
            this.buttonVisibility.ratingButton = false;
          }
        }

      } else {
        this.buttonVisibility.ratingButton = false;
      }
      //------- End ratting button ---------//

      
      //------- Start report button ---------//
      // if (this.offerData.dealStatus.dealStatus != 'CLOSED') {
      //   this.buttonVisibility.reportButton = true;
      // } else {
      //   this.buttonVisibility.reportButton = false;
      // }
      //------- End report button ---------//

      
      //------- Start track button ---------//
      if (this.offerData.dealStatus.dealStatus == 'ACCEPTED' && this.offerData.dealDeliveryMethod && this.offerData.dealDeliveryMethod?.id == 'Shipping' && !this.offerData?.callerIsReceiver && this.offerData?.initiatorAwb) {
        this.buttonVisibility.trackButton = true;
      } else {
        this.buttonVisibility.trackButton = false;
      }
      //------- End track button ---------//

      //------- Start Chat Now button ---------//
      if (this.offerData.dealStatus.dealStatus == 'CLOSED' || this.offerData.dealStatus.dealStatus == 'REJECTED' || this.offerData.dealStatus.dealStatus == 'EXPIRED') {
        this.buttonVisibility.chatButton = false;
      } else {
        this.buttonVisibility.chatButton = true;
      }
      //------- End Chat Now button ---------//

      //------- Start Share mobile number button ---------//
      if (this.offerData.dealStatus.dealStatus == 'CLOSED' || this.offerData.dealStatus.dealStatus == 'REJECTED' || this.offerData.dealStatus.dealStatus == 'EXPIRED') {
        this.buttonVisibility.sharePhoneNumberButton = false;
        this.buttonVisibility.shareAddressButton = false;
      } else {
        this.buttonVisibility.sharePhoneNumberButton = true;
        this.buttonVisibility.shareAddressButton = true;
      }
      //------- End Share mobile number button ---------//

      

    },
    isLastModifier() {
      if (this.offerData.callerIsReceiver) {
        return this.offerData.receiverUserInfo?.id == this.offerData.triggeredByUserId;
      } else {
        return this.offerData.senderUserInfo?.id == this.offerData.triggeredByUserId;
      }
    },
    confirmRevise(){
      this.isConfirmRevise=true;
    },
    isClosedOffer() {
      const isLastModifier = this.isLastModifier();
      if (this.offerData.callerIsReceiver) {
        if (!this.offerData.dealRatedByReceiver) {
          return this.offerData.dealStatus.dealStatus == 'CLOSED' ? true : isLastModifier;
        } else {
          return false;
        }
      } else {
        if (!this.offerData.dealRatedBySender) {
          return this.offerData.dealStatus.dealStatus == 'CLOSED' ? true : isLastModifier;
        } else {
          return false;
        }
      }
    },
    
    openPopup(popupType: string = '') {
      switch (popupType) {
        case 'sharePhone':
          this.showSharePhonePopup = true;
          break;
        case 'shareAddress':
          this.showShareAddressPopup = true;
          break;
        case 'reject':
          this.showRejectOfferModal = true;
          break;
        case 'accept':
          this.showAcceptOfferModal = true;
          break;
        case 'responMessage':
          this.showResponseMessage.showPopup = true;
          break;
        case 'closeOffer':
          this.showCloseOfferModal = true;
          break;
        case 'viewOtp':
          this.showViewOtpModal = true;
          break;
        case 'userRating':
          this.showUserRatingPopup = true;
          break;
        case 'rechargeWallet':
          this.showReachargWalletPopup = true;
          break;
        default:
      }
    }, 
    closePopup(popupType: string = '') {
      switch (popupType) {
        case 'sharePhone':
          this.showSharePhonePopup = false;
          break;
        case 'shareAddress':
          this.showShareAddressPopup = false;
          break;
        case 'reject':
          this.showRejectOfferModal = false;
          break;
        case 'accept':
          this.showAcceptOfferModal = false;
          break;
        case 'responMessage':
          this.showResponseMessage.showPopup = false;
          break;
        case 'closeOffer':
          this.showCloseOfferModal = false;
          break;
        case 'viewOtp':
          this.showViewOtpModal = false;
          break;
        case 'userRating':
          this.showUserRatingPopup = false;
          break;
        case 'rechargeWallet':
          this.showReachargWalletPopup = false;
          break;
          case 'revise':
          this.isConfirmRevise = false;
          break;
        default:
          this.showSharePhonePopup = false;
          this.showShareAddressPopup = false;
          this.showRejectOfferModal = false;
          this.showAcceptOfferModal = false;
          this.showCloseOfferModal = false;
          this.showViewOtpModal = false;
          this.showResponseMessage.showPopup = false;
          this.showUserRatingPopup = false;
          this.showReachargWalletPopup = false;
      }
    },
    rejectOffer() {
      // Open confirm popup
      this.openPopup('reject');
    },
    async confirmRejectOffer(rejectionReasonPayload: any) {
      this.closePopup('reject');
      this.loading        = true;
      // const comment       =  'comments';
      // const queryParams    = `?comments=${comment}`;
      let requestPath     = this.apiUrls.rejectOffer //+ queryParams;
      requestPath         = requestPath.replace('{offerId}', this.offerId);
      let rejectOfferResponse   = await this.$axios.put(requestPath, rejectionReasonPayload)
                                    .then((response) => {                               
                                      return response.data;
                                    })
                                    .catch((error)=>{
                                      return error.response.data;
                                    });

                                    
      console.log('rejectOfferResponse:', rejectOfferResponse);
      this.loading = false;
      if(rejectOfferResponse && rejectOfferResponse.success) {
        //  show success message
        let successMessage = rejectOfferResponse.message
        this.showResponseMessage.status = 'success';
        this.showResponseMessage.message = successMessage;
        // this.getOfferDetails();
        // window.location.reload();

        this.logEvent_gintaa_offer_rejected();

        this.$router.go()
      } else {
        // show error message        
        let errorMessage = rejectOfferResponse.message
        this.showResponseMessage.status = 'error';
        this.showResponseMessage.message = errorMessage;
      }

      this.openPopup('responMessage');
    },
    acceptOffer(){
      let proceedTorechargeWallet = true;
      let deficitAmount = 0;
      
      
      // console.log('callerIsReceiver:', this.offerData.callerIsReceiver);
      // console.log('receiverLienAmount:', this.offerData.receiverLienAmount);
      // console.log('receiverDebitAmount:', this.offerData.receiverDebitAmount);
      // console.log('initiatorLienAmount:', this.offerData.initiatorLienAmount);
      // console.log('initiatorDebitAmount:', this.offerData.initiatorDebitAmount);
      // console.log('currentWalletBallance:', this.currentWalletBallance );
       

      if(!this.offerData.callerIsReceiver) {
        // it's sender (Initiator accepts offer)
        let requiredBalance = this.offerData.initiatorLienAmount + this.offerData.initiatorDebitAmount;
        console.log('requiredBalance:', requiredBalance);
        if(this.currentWalletBallance >= requiredBalance) {
          proceedTorechargeWallet = false;
        } else {
          deficitAmount = requiredBalance - this.currentWalletBallance;
        }

      } else {
        // it's receiver (Receiver accepts offer)
        // console.log('receiverLienAmount:', this.offerData.receiverLienAmount);
        // console.log('receiverDebitAmount:', this.offerData.receiverDebitAmount);
        let requiredBalance = +this.offerData.receiverLienAmount + +this.offerData.receiverDebitAmount;
        if(this.currentWalletBallance >= requiredBalance) {
          proceedTorechargeWallet = false;
        } else {
          deficitAmount = requiredBalance - this.currentWalletBallance;
          
          // console.log('deficitAmount:', deficitAmount);
          // console.log('requiredBalance:', requiredBalance);
          // console.log('currentWalletBallance:', this.currentWalletBallance);
        }
      }

      this.deficitAmount = deficitAmount;
      if(proceedTorechargeWallet) {
        // open popup to reacharge wallet
        this.openPopup('rechargeWallet');
        console.log('deficitAmount:', this.deficitAmount);
      } else {          
        // Open confirm popup for accept offer
        this.openPopup('accept');
      }
    },
    closeModal() {
      this.closePopup('rechargeWallet');
      this.closePopup('shareAddress');
    },
    addAddress(){
      console.log('open Add address popup')
      this.addressDet.name = this.authUser.displayName
      this.addressDet.email = this.authUser.email
      this.addressDet.phoneNumber = this.authUser.phoneNumber
      this.editOrAddAddressDetails.addressDet = this.addressDet
      this.showAddaddressPopup = true
      console.log("addddAddressDetails",this.editOrAddAddressDetails)
      
    },
    async confirmAcceptOffer() {
      this.closePopup('accept');
      this.loading        = true;
      let requestPath     = this.apiUrls.acceptDeal;
      let requestBody = {
        dealRefNo: this.offerId
      }
      let acceptOfferResponse   = await this.$axios.post(requestPath, requestBody)
                              .then((response) => {                               
                              return response.data;
                            })
                            .catch((error)=>{
                              return error.response.data;
                            });

      console.log('acceptOfferResponse:', acceptOfferResponse);
      this.loading = false;
      if(acceptOfferResponse && acceptOfferResponse.success) {
        //  show success message
        let successMessage = acceptOfferResponse.message;  
        this.showResponseMessage.status = 'success';
        this.showResponseMessage.message = successMessage;
        // this.getOfferDetails();
        this.logEvent_gintaa_offer_accepted_success();

        this.$router.push({path: '/offers/details/'+this.offerId});
        this.$router.go()
      } else {
        // show error message        
        let errorMessage = acceptOfferResponse.message;
        if(!errorMessage) {
          errorMessage = acceptOfferResponse.payload[0].errorDetailedReason
        }
        this.showResponseMessage.status = 'error';
        this.showResponseMessage.message = errorMessage;
        this.showResponseMessage.showPopup = true
      }

      // this.$router.push({path: '/offers/details/'+this.offerId});
    },

    payNow(){
      let proceedTorechargeWallet = true;
      let deficitAmount = 0;
      if(!this.offerData.callerIsReceiver) {
        // it's sender (Initiator pay amount)
        let requiredBalance = this.offerData.initiatorLienAmount + this.offerData.initiatorDebitAmount;
        if(this.currentWalletBallance >= requiredBalance) {
          proceedTorechargeWallet = false;
        } else {
          deficitAmount = requiredBalance - this.currentWalletBallance;
        }
        console.log('requiredBalance:', requiredBalance);
      } else {
        // it's receiver (Receiver pay amount)
        let requiredBalance = this.offerData.receiverLienAmount + this.offerData.receiverDebitAmount;
        if(this.currentWalletBallance >= requiredBalance) {
          proceedTorechargeWallet = false;
        } else {
          deficitAmount = requiredBalance - this.currentWalletBallance;
        }
        // console.log('== requiredBalance:', requiredBalance);
        // console.log('== receiverLienAmount:', this.offerData.receiverLienAmount);
        // console.log('== receiverDebitAmount:', this.offerData.receiverDebitAmount);
      }
      // return
      this.deficitAmount = deficitAmount;
      if(proceedTorechargeWallet) {
        // open popup to reacharge wallet
        // this.openPopup('rechargeWallet'); // Due to complines issue we stop the recharge wallet feature, thaat's why open popup should not enable
        console.log('deficitAmount:', this.deficitAmount);
      } else {          
        // Open confirm popup for accept offer
        // this.openPopup('accept');
        this.confirmPayment();
      }
    },

    async confirmPayment() {
      // this.loading        = true;
      let requestUrl     = this.apiUrls.registerPayment;
      requestUrl      = requestUrl.replace('{dealId}', this.offerId);
      let requestBody = {
        // dealRefNo: this.offerId
      }
      let registerPaymentResponse   = await this.$axios.put(requestUrl, requestBody)
                              .then((response) => {                               
                              return response.data;
                            })
                            .catch((error)=>{
                              return error.response.data;
                            });

      console.log('registerPaymentResponse:', registerPaymentResponse);
      // this.loading = false;
      // if(registerPaymentResponse && registerPaymentResponse.success) {
      //   //  show success message
      //   let successMessage = registerPaymentResponse.message;  
      //   this.showResponseMessage.status = 'success';
      //   this.showResponseMessage.message = successMessage;
      //   this.getOfferDetails();
      // } else {
      //   // show error message        
      //   let errorMessage = registerPaymentResponse.message;
      //   this.showResponseMessage.status = 'error';
      //   this.showResponseMessage.message = errorMessage;
      // }

      /////// Comment for remove add coin button, it will be open once add coin button gettin back ////////
      // this.$router.push({path: '/offers/details/'+this.offerId});
      // setTimeout(()=>{
      //   this.$router.go();
      // }, 500);
      
    },

    autoAcceptOrAutoPayment(){
      console.log('currentWalletBallance:', this.currentWalletBallance);
      console.log('queryParams:', this.queryParams);
      if(this.queryParams.payment_intent || this.queryParams.order_token){
        console.log('=========================');
        
        if(this.buttonVisibility.payButton){
          this.confirmPayment()
        }

        if(this.buttonVisibility.acceptButton){
          this.confirmAcceptOffer()
        }
        
      }      
    },
    openCloseOfferPopup(popup: string = 'closeOffer') {
      this.openPopup(popup);
    },
    async backup_openCloseOfferPopup(popup: string = 'closeOffer') {
      // closeOfferOtp
      this.loading        = true;
      let requestPath     = this.apiUrls.closeOfferOtp;
      requestPath         = requestPath.replace('{offerId}', this.offerId);
      let requestBody = {
        // dealRefNo: this.offerId
      }
      let closeOfferOtpResponse   = await this.$axios.post(requestPath, requestBody)
                                    .then((response) => {                               
                                    return response.data;
                                  })
                                  .catch((error)=>{
                                    return error.response.data;
                                  });
      this.loading        = false;
      console.log('closeOfferOtpResponse:', closeOfferOtpResponse);
      if(closeOfferOtpResponse && closeOfferOtpResponse.success) {
        let identityId = closeOfferOtpResponse.payload.identityId;
        this.closeOfferOtp = closeOfferOtpResponse.payload.otp;       
        
        // this.openPopup('closeOffer');
        this.openPopup(popup);
      } else {
        // show error message        
        let errorMessage = closeOfferOtpResponse.payload.errorDetailedReason;
        this.showResponseMessage.status     = 'error';
        this.showResponseMessage.message    = errorMessage;
        this.showResponseMessage.showPopup  = true;
      }
    },
    async confirmCloseOffer(){
      this.otp.error = null;
      this.loading        = true;
      let requestPath     = this.apiUrls.closeOffer;
      // requestPath         = requestPath.replace('{offerId}', this.offerId);
      let requestBody = {
        dealRefNo: this.offerId,
        // otp: this.otp.otp
      }
      let closeOfferResponse   = await this.$axios.post(requestPath, requestBody)
                                    .then((response) => {                               
                                    return response.data;
                                  })
                                  .catch((error)=>{
                                    return error.response.data;
                                  });
      this.loading        = false;
      console.log('closeOfferResponse:', closeOfferResponse);
      if(closeOfferResponse && closeOfferResponse.success) {
        // redirect to rating popup
        this.closeCloseOfferPopup();
        const payload = closeOfferResponse.payload;
        if(payload && payload.dealState && (payload.dealState === 'CLOSED' || 'PARTIAL_CLOSED' )){
          this.logEvent_gintaa_offer_closed();
          this.openUserRatingPopup();
        } else {
          this.logEvent_gintaa_offer_partial_closed();
          this.$router.go()
        }
      } else {
        // show error message        
        let errorMessage = closeOfferResponse.message || closeOfferResponse.payload[0].errorDetailedReason;
        this.otp.valid = false;
        this.otp.error = errorMessage;
      }
      
    },
    closeCloseOfferPopup() {
      this.closePopup('closeOffer');
    },
    closeViewOtpPopup() {
      this.closePopup('viewOtp');
    },
    otpChange (otp: any) {
      this.otp.otp = otp
      if (otp.length === 6) {
        this.otp.valid = true
      } else {
        this.otp.valid = false
      }
      console.log(this.otp)
    },
    async getUserratingQuestionAnswer() {
      this.loading        = true;
      let requestPath     = this.apiUrls.ratingQuestion;
      let ratingQuestionResponse   = await this.$axios.get(requestPath)
                                      .then((response) => {                               
                                      return response.data;
                                    })
                                    .catch((error)=>{
                                      return error.response.data;
                                    });
      this.loading        = false;
      console.log('ratingQuestionResponse:', ratingQuestionResponse);
      if(ratingQuestionResponse && ratingQuestionResponse.success) {
        this.ratingProperty.ratingQuestions = ratingQuestionResponse.payload;
        this.openPopup('userRating');
      }
    },
    openUserRatingPopup() {
      this.ratedUserInfo = (this.offerData.senderUserInfo.id === this.authUser.uid) ? this.offerData.receiverUserInfo : this.offerData.senderUserInfo;
      this.getUserratingQuestionAnswer();
    },
    closeUserRatingPopup(flagVal:string) {
      console.log("flag",flagVal)
      if(flagVal){
      this.closePopup('userRating')
      this.$router.go()
      }else{
      this.closePopup('userRating')
      this.showPlatformRatingPopup = true
      // this.closePopup('userRating')
      // this.$router.go()
      }
     
    },
    selectRatingStar(index: number) {
      this.ratingProperty.selectedStarIndex = index;
      // this.ratingQuestions
      this.ratingProperty.selectedRatingQuestion = this.ratingProperty.ratingQuestions[index+1][0];
      this.ratingProperty.selectedRatingAnswerIndex = [];
      console.log(this.ratingProperty.selectedRatingQuestion);
      console.log('ratingQuestions:', this.ratingProperty.ratingQuestions)
    },
    selectuserRatingAnswerAnswer(index: number){
      // if(!this.ratingProperty.selectedRatingAnswerIndex.includes(index)){
      //   this.ratingProperty.selectedRatingAnswerIndex.push(index)
      // } else {

      // }

      const i = this.ratingProperty.selectedRatingAnswerIndex.indexOf(index);
      if (i > -1) {
        this.ratingProperty.selectedRatingAnswerIndex.splice(i, 1); // 2nd parameter means remove one item only
      } else {
        this.ratingProperty.selectedRatingAnswerIndex.push(index);
      }


    },
    isAnswerSelected(index: number){
      const i = this.ratingProperty.selectedRatingAnswerIndex.indexOf(index);
      if (i > -1) {
        return true
      }
      return false
    },
    async submitUserrating() {
      console.log('ratingProperty:', this.ratingProperty);
      // postUserRating
      let answers: any = [];

      this.ratingProperty.selectedRatingAnswerIndex.map(index=>{
        let ans = this.ratingProperty.selectedRatingQuestion.predictedAnswers[index];
        answers.push(ans);
      });
      
      let requestObj = {
            "reviews": [
                {
                    "question": this.ratingProperty.selectedRatingQuestion.question,
                    "questionId": this.ratingProperty.selectedRatingQuestion.questionId,
                    "answers": answers
                }
            ],
            "comment": this.ratingProperty.ratingComment,
            "dealRefId": this.offerId,
            "rating": this.ratingProperty.selectedRatingQuestion.rating
          }

      this.loading        = true;
      let requestPath     = this.apiUrls.postUserRating;
      let postRating      = await this.$axios.post(requestPath, requestObj)
                              .then((response) => {                               
                              return response.data;
                            })
                            .catch((error)=>{
                              return error.response.data;
                            });
      this.loading        = false;
      console.log('postRating:', postRating);
      if(postRating && !postRating.success) {
        let errorMessage = postRating.message
        this.showResponseMessage.status     = 'error';
        this.showResponseMessage.message    = errorMessage;
        this.showResponseMessage.showPopup  = true;
        this.closeUserRatingPopup('')
      } else {        
        let successMsg = postRating.message
        this.showResponseMessage.status     = 'success';
        this.showResponseMessage.message    = successMsg;
        this.showResponseMessage.showPopup  = true;
        this.closeUserRatingPopup('')
      }


    },
    confirmReportOffer() {
      // reportOffer
    },
    chatlink() {
      const roomId = `${this.offerData.senderUserInfo.id}_${this.offerData.receiverUserInfo.id}`
      let chatRoom = `/chat/deal/${this.offerData.dealRefId}/rooms/${roomId}/messages`
      let chatRoomPath = this.localePath(chatRoom)
      let chatPath = this.localePath(`/chat/offer-listing?chatroom=${chatRoomPath}`)
      return chatPath
    },

    getListingDetailsLink(listing: any){
     // this.localePath(`/p/${listing.seOId || this.slugify(listing.offerName)}/${listing.offerId || listing.oid}`)
      return this.localePath(`/p/${this.slugify(listing.seOId) || this.slugify(listing.offerName)}/${listing.offerId || listing.oid}`);
    },
    slugify (text: string) {
      if(text){
        return text
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
      }
     
    },

    async getQuestionsBasedOnRating(index:number){
      console.log("index",index+1)
       this.answersRegardingQuestions = []
       this.platFormRatingObj.questionAndAnswers[0].question = ''
       this.platFormRatingObj.comment = ''
       this.platformratingProperty.selectedStarIndex = index;
       this.loading = true
      try {
        const url = `/ratings/v1/platform-rating/question/${index+1}`
        const data = await this.$axios.$get(url)
        if(data.payload){
          console.log(data.payload)


          this.platFormRatingObj.questionAndAnswers[0].questionId = data.payload[0].questionId
          this.platFormRatingObj.questionAndAnswers[0].question = data.payload[0].question
          this.platFormRatingObj.rating = data.payload[0].rating
          
          data.payload[0].predictedAnswers.forEach((obj:any)  => {
          console.log(obj)

          const setObj:any = {answer:obj ,isActive:false}
          this.answersRegardingQuestions.push(setObj)
          })

           console.log("answersRegardingQuestions",this.answersRegardingQuestions)
           this.loading = false
        }
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },

    changeAnswer(item:any){
      item.isActive = !item.isActive;
      this.validateForm(this.answersRegardingQuestions);
    },

    validateForm(answersRegardingQuestions:any){
      const ansList = answersRegardingQuestions.filter(
        (category: any) => category.isActive
      );

      if (ansList.length) {
        this.isFormValid = true;
      } else {
        this.isFormValid = false;
      }
    },
    async submitPlatformRating(){
      console.log("this.plaformobj",this.platFormRatingObj)
      const ansList = this.answersRegardingQuestions.filter(
          (category: any) => category.isActive
        );
        const listDetails = ansList.map(
          (a: any) => a.answer
        );
      console.log("listDetails",listDetails)
      this.platFormRatingObj.questionAndAnswers[0].answers = listDetails;
        try {
        this.loading = true
        let url = `/ratings/v1/platform-rating/rating/user/comments`;
        const data = await this.$axios.$post(url, this.platFormRatingObj);
        console.log("Data", data);
        if (data.success) {
         this.closeModalAndLoadPage()
         // this.hideModal();
         // this.$emit("successReport", true);
        } else {
         this.closeModalAndLoadPage()
          if (!data.success) {
          }
        }
        this.loading = false;
      } catch (error: any) {
        this.closeModalAndLoadPage()
        // this.errMsg = error.response.data.message
      }
    },

    closeModalAndLoadPage(){
      this.loading = false;
      this.showPlatformRatingPopup = false
      this.$router.go()
    },

    closePlatformModal(){
    
     this.showPlatformRatingPopup = false
     this.answersRegardingQuestions = []
     this.$router.go()
    },    

    async logEvent_gintaa_offer_accepted_success() {
      try {
        const requested_product_id = this.offerData.requestedOffers && this.offerData.requestedOffers.length > 0 ? this.offerData.requestedOffers[0].offerId : null
        const offered_product_id = this.offerData.offeredOffers && this.offerData.offeredOffers.length > 0 ? this.offerData.offeredOffers[0].offerId : null
        
        const analyticsData = {
          channel_id:    'WEB',
          receiver_id: this.offerData.receiverUserInfo.id, 
          sender_id: this.offerData.senderUserInfo.id, 
          offer_id: this.offerId, 
          requested_product_id: requested_product_id, 
          offered_product_id: offered_product_id, 
          delivery_preference: this.offerData.dealDeliveryMethod, 
          transaction_mode: this.offerData.transactionMode, 
          requested_amount: this.offerData.requestedAmount,
          requested_amount_paid_by_initiating_user: this.offerData.requestedAmountPaidByInitiatingUser
        };
        console.log(analyticsData)
        await this.$fire.analytics.logEvent('gintaa_offer_accepted_success', analyticsData) 
       // console.log('Gintaa analytics event log successfully');     
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },    

    async logEvent_gintaa_offer_rejected() {
      try {
        const requested_product_id = this.offerData.requestedOffers && this.offerData.requestedOffers.length > 0 ? this.offerData.requestedOffers[0].offerId : null
        const offered_product_id = this.offerData.offeredOffers && this.offerData.offeredOffers.length > 0 ? this.offerData.offeredOffers[0].offerId : null
        const rejected_by_sender = !this.offerData.callerIsReceiver
        
        const analyticsData = {
          channel_id:    'WEB',
          receiver_id: this.offerData.receiverUserInfo.id, 
          sender_id: this.offerData.senderUserInfo.id, 
          offer_id: this.offerId, 
          requested_product_id: requested_product_id, 
          offered_product_id: offered_product_id, 
          delivery_preference: this.offerData.dealDeliveryMethod, 
          transaction_mode: this.offerData.transactionMode, 
          requested_amount: this.offerData.requestedAmount,
          requested_amount_paid_by_initiating_user: this.offerData.requestedAmountPaidByInitiatingUser,
          rejected_by_sender: rejected_by_sender
        };
        console.log(analyticsData)
        await this.$fire.analytics.logEvent('gintaa_offer_rejected', analyticsData) 
       // console.log('Gintaa analytics event log successfully');     
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },     

    async logEvent_gintaa_offer_partial_closed() {
      try {
        const requested_product_id = this.offerData.requestedOffers && this.offerData.requestedOffers.length > 0 ? this.offerData.requestedOffers[0].offerId : null
        const offered_product_id = this.offerData.offeredOffers && this.offerData.offeredOffers.length > 0 ? this.offerData.offeredOffers[0].offerId : null
        const partially_closed_by_sender = !this.offerData.callerIsReceiver
        
        const analyticsData = {
          channel_id:    'WEB',
          receiver_id: this.offerData.receiverUserInfo.id, 
          sender_id: this.offerData.senderUserInfo.id, 
          user_id: this.authUser? this.authUser?.uid: null,
          offer_id: this.offerId, 
          requested_product_id: requested_product_id, 
          offered_product_id: offered_product_id, 
          delivery_preference: this.offerData.dealDeliveryMethod, 
          transaction_mode: this.offerData.transactionMode, 
          requested_amount: this.offerData.requestedAmount,
          requested_amount_paid_by_initiating_user: this.offerData.requestedAmountPaidByInitiatingUser,
          partially_closed_by_sender: partially_closed_by_sender
        };
        console.log(analyticsData)
        await this.$fire.analytics.logEvent('gintaa_offer_partial_closed', analyticsData) 
       // console.log('Gintaa analytics event log successfully');     
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },   

    async logEvent_gintaa_offer_closed() {
      try {
        const requested_product_id = this.offerData.requestedOffers && this.offerData.requestedOffers.length > 0 ? this.offerData.requestedOffers[0].offerId : null
        const offered_product_id = this.offerData.offeredOffers && this.offerData.offeredOffers.length > 0 ? this.offerData.offeredOffers[0].offerId : null
                
        const analyticsData = {
          channel_id:    'WEB',
          receiver_id: this.offerData.receiverUserInfo.id, 
          sender_id: this.offerData.senderUserInfo.id, 
          user_id : this.authUser? this.authUser?.uid: null,
          offer_id: this.offerId, 
          requested_product_id: requested_product_id, 
          offered_product_id: offered_product_id, 
          delivery_preference: this.offerData.dealDeliveryMethod, 
          transaction_mode: this.offerData.transactionMode, 
          requested_amount: this.offerData.requestedAmount,
          requested_amount_paid_by_initiating_user: this.offerData.requestedAmountPaidByInitiatingUser
        };
        console.log(analyticsData)
        await this.$fire.analytics.logEvent('gintaa_offer_closed', analyticsData) 
       // console.log('Gintaa analytics event log successfully');     
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },
    shareMobileNumberToChat() {
      console.log('sharablePhoneNumber:', this.sharablePhoneNumber)
      // this.sharablePhoneNumber 
      const msg = this.$t('shareMobileNoMsg', {phoneNumber: this.sharablePhoneNumber}) 
      this.shareMessageToChat(msg, 'mobile');
    },
    shareMessageToChat(msg: string, sahreMsgFor:string = 'mobile'){
      if(msg){
        const roomId = `${this.offerData.senderUserInfo.id}_${this.offerData.receiverUserInfo.id}`
      
        const senderId = this.authUser.uid
        const recipId = roomId.replace(senderId, '').replace('_', '')

        let unreadMessageDetails: any = {}
          unreadMessageDetails[senderId] = 0
          unreadMessageDetails[recipId] = this.dealDocumentData && this.dealDocumentData.unreadMessageDetails && this.dealDocumentData.unreadMessageDetails[recipId] ? this.dealDocumentData.unreadMessageDetails[recipId] + 1 : 1 //this.$fireModule.firestore.FieldValue.increment(5)
        
        let lastMessage = {
            deletedForMe: [],
            messageAttr: null,
            messageBody: msg,
            messageTime: this.$moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
            messageTimeNew: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            messageType: 'HTML', // HTML, IMAGE, VIDEO, FILE, AUDIO_RECORDING, OFFER
            offerId: this.offerId,
            recipientId: recipId,
            roomId: roomId,
            senderId: senderId == null ? '' : senderId
          }

        const dealData = {
          createdAt: this.$moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
          // offeredAmount: '',
          offeredOffers: this.offerData.offeredOffers,
          participants: [this.offerData.senderUserInfo.id, this.offerData.receiverUserInfo.id],
          receiver: {
            identityId: this.offerData.receiverUserInfo.id,
            imageUrl: this.offerData.receiverUserInfo.imageUrl,
            name: this.offerData.receiverUserInfo.name
          },
          requestedAmount: this.offerData.requestedAmount,
          requestedOffers: this.offerData.requestedOffers,
          sender: {
            identityId: this.offerData.senderUserInfo.id,
            imageUrl: this.offerData.senderUserInfo.imageUrl,
            name: this.offerData.senderUserInfo.name
          },
          unreadMessageDetails: unreadMessageDetails,
          lastMessage: lastMessage
        }

        // console.log('dealData', dealData)
        const chatCol = 'tradingChatDeals'
        this.$fire.firestore
          .collection(chatCol)
          .doc(this.offerId)
          .set(dealData)
          
        const roomdata = {
          createdAt: this.$moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
          chatInitiatorDetails: {
            identityId: this.authUser.uid,
            imageUrl: this.authUser.photoURL,
            name: this.authUser.displayName
          },
          chatReceiverDetails: {
            identityId: this.offerData.rightPanelUserInfo.id,
            imageUrl: this.offerData.rightPanelUserInfo.imageUrl,
            name: this.offerData.rightPanelUserInfo.name
          },
          isBlocked: false,
          isMuted: false,
          dealId: this.offerData.dealRefId,
          dealReceiverDetails: {
            identityId: this.offerData.receiverUserInfo.id,
            imageUrl: this.offerData.receiverUserInfo.imageUrl,
            name: this.offerData.receiverUserInfo.name
          }
        }

        // console.log('roomdata', roomdata)
        this.$fire.firestore
          .collection(chatCol)
          .doc(this.offerId)
          .collection('rooms')
          .doc(roomId)
          .set(roomdata)


        this.$fire.firestore
          .collection(chatCol)
          .doc(this.offerId)
          .collection('rooms')
          .doc(roomId)
          .collection('messages')
          .add({
            deletedForMe: [],
            isBlocked: false,
            isDelivered: false,
            isMuted: false,
            isRead: false,
            isSent: true,
            messageAttr: null,
            messageBody: msg,
            messageTime: this.$moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
            messageTimeNew: this.$fireModule.firestore.FieldValue.serverTimestamp(),
            messageType: 'HTML', // HTML, IMAGE, VIDEO, FILE, AUDIO_RECORDING, OFFER
            offerId: this.offerId,
            recipientId: recipId,
            roomId: roomId,
            senderId: senderId == null ? '' : senderId,
            replyObj:  null
          })


          this.$store.dispatch('chat/reply/setMessage', null);
          this.openChatPopup();
          if(sahreMsgFor === 'mobile'){              
            this.closePopup('sharePhone');
            this.callFireFunctionForShareMobile(this.offerId, this.sharablePhoneNumber, roomdata.chatReceiverDetails.identityId+'')
          }
      }
    },
    openChatPopup() {
      const roomId = `${this.offerData.senderUserInfo.id}_${this.offerData.receiverUserInfo.id}`
      let chatRoom = `/chat/deal/${this.offerData.dealRefId}/rooms/${roomId}/messages`
      let chatRoomPath = this.localePath(chatRoom)
      // let chatPath = this.localePath(`/chat/offer-listing?chatroom=${chatRoomPath}`)
      
      let storeData = {
        chatRoomPath: chatRoomPath,
        openChat: true
      }
      this.$store.dispatch('chat/openChatPopup/openChatRoom', storeData);
    },

    isNumber (evt) {
      evt = (evt) || window.event
      const charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    },

    readStatusFromRealTimeDb() {
      try{          
        this.$fire.database.ref(`offers/${this.offerId}`).on("value", (value)=>{
          console.log("Current data:", value.val())         
          setTimeout(()=>{
            console.log("Current data:", 'Call offer details API')
            this.getOfferDetails()
          }, 1000);
        })
      } catch (e) {
        console.log("Realtime db error:", e)
      }
    },
    async callFireFunctionForShareMobile(offerId: string, sharablePhoneNumber: string, receiver_id: string ){
      
      const fireFunctionName: string = 'shareMobileNumber';
      const projectId = this.$fireModule.apps[0].options.projectId
      const region = this.$fire.functions._region
      const requestUrl = `https://${region}-${projectId}.cloudfunctions.net/${fireFunctionName}`
      
      const requestBody = {
        data:{
          receiverUid: receiver_id,
          phoneNumber: sharablePhoneNumber,
          dealRefId: offerId
        }
      }

      try{
        const appcheckToken = await this.$fire.appCheck.getToken()
          const headers = {
            'X-Firebase-AppCheck': appcheckToken.token,
            'Accept-Language': this.$i18n.locale
          }
          // console.log("this.$fire",this.$fire.auth.user)
          // console.log("this.$fire",this.$fire.auth.user)
          const notificationResp = await this.$axios.$post(requestUrl, requestBody, { headers })

          console.log("notificationResp:", notificationResp.result)
      } catch(error) {
        console.log(error)
      }


    },

    processPartnerContactDetails(offerData: any){
      if(offerData.callerIsReceiver){
        if(offerData.initiatorAgreedShareContact){
          this.partnerContactDetails.partnerName    = offerData.sender.name.replace(/ .*/, '')
          this.partnerContactDetails.contactType    = this.$isValidEmail(offerData.initiatorContact) ? 'email' : 'mobile'
          this.partnerContactDetails.partnerContact = this.partnerContactDetails.contactType === 'mobile' ? this.remove91ToPhoneNumber(offerData.initiatorContact) : offerData.initiatorContact
        }
      } else {
        if(offerData.receiverAgreedShareContact){
          this.partnerContactDetails.partnerName    = offerData.receiver.name.replace(/ .*/, '')
          this.partnerContactDetails.contactType    = this.$isValidEmail(offerData.receiverContact) ? 'email' : 'mobile'
          this.partnerContactDetails.partnerContact = this.partnerContactDetails.contactType === 'mobile' ? this.remove91ToPhoneNumber(offerData.receiverContact) : offerData.receiverContact
        }
      }

    },
    remove91ToPhoneNumber(phone: string) {
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
    savedAddress(addressObj: any){
      if(addressObj){
        let shareAddress = ""
        if (addressObj.name ) {
            shareAddress = shareAddress + `\nName: ${addressObj.name} `;
        }
        if (addressObj.flatNo ) {
            shareAddress = shareAddress + `\nFlat No: ${addressObj.flatNo} `;
        }
        if (addressObj.addressLine) {
            shareAddress = shareAddress + `\nAddress Line: ${addressObj.addressLine} `;
        }
        if (addressObj.area) {
            shareAddress = shareAddress + `\nArea: ${addressObj.area} `;
        }
        if (addressObj.city) {
            shareAddress = shareAddress + `\nCity: ${addressObj.city} `;
        }
        if (addressObj.state) {
            shareAddress = shareAddress + `\nState: ${addressObj.state} `;
        }
        if (addressObj.zip) {
            shareAddress = shareAddress + `\nZip: ${addressObj.zip} `;
        }
        if (addressObj.landmark) {
            shareAddress = shareAddress + `\nLandmark: ${addressObj.landmark} `;
        }
        this.shareMessageToChat(shareAddress, 'address')
      }
    },

    selectedReasonToRejectOffer(reasons: any){
      let rejectionReasonPayload = {
          categories: [
            reasons.selectedReason
          ],
          comments: reasons.comment
      }       
      this.confirmRejectOffer(rejectionReasonPayload)
      
    },
    
    cancelRejectPopup(){
      this.closePopup('reject')
    },

  }
})

</script>

<style scoped>
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
.card-shadow-offer{
  box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
  border-radius:2px ;
}
/* @media (max-width: 600px){
  .status-offer-mob-desk li:nth-child(2) .mob,  .status-offer-mob-desk li:nth-child(4) .mob, .status-offer-mob-desk li:nth-child(6) .mob,  .status-offer-mob-desk li:nth-child(8) .mob{
    display: block !important;
  }
   .status-offer-mob-desk li:nth-child(2) .desk, .status-offer-mob-desk li:nth-child(4) .desk, .status-offer-mob-desk li:nth-child(6) .desk, .status-offer-mob-desk li:nth-child(8) .desk{
    display: none !important;
  }

} */
@media (max-width: 600px){
.status-offer-mob-desk li:last-child .desk{
  width: 80px;
  text-align: right;

}
}
</style>