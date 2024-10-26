<template>
  <div class="product-details-page pt-[80px] lg:pt-12 ">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->

    <div class=" container max-w-8xl mx-auto px-4 sm:px-8 md:px-16 lg:px-8 xl:px-32 2xl:px-60 pt-10 relative">
      <Breadcrumb :breadcrumb="breadcrumb" />
      <!--tips for mobile-->
      <a class="absolute flex md:hidden items-center right-[15px] text-[13px] md:text-[14px] top-[30px]" href="javascript:;"
        @click="showTipsPopupMobile = true">
        <img src="~/assets/images/tips.svg" class="mr-1 w-[35px]" alt="Tips"> Tips </a>

    </div>

    <div class="container max-w-8xl mx-auto px-4 sm:px-8 md:px-16 lg:px-8 xl:px-32 2xl:px-60 pt-1 md:pt-5 mb-8">
      <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        <div class="basis-4/6 sm:basis-full md:basis-4/6 lg:basis-4/6 xl:basis-4/6">
          <div class="relative w-full flex-col bg-white px-0 md:px-3 py-3 min-h-[450px]">
            <div class="w-full flex-col">


              <!-- requestedProduct -->
              <OfferListingItemReceiver v-if="requestedProduct" :listing="requestedProduct" />

              <!-- <OfferListingItemReceiver v-else-if="otherUserSelectedListing" :listing="otherUserSelectedListing" /> -->
              <div v-show="loading" class="mt-5 py-6 flex justify-center min-h-[400px]">
                <Spinner />
              </div>
              <client-only>
                <div v-if="currentUser && !loading" class="w-full flex flex-col mt-5">

                  <div class="w-full flex flex-col">
                    <div class="flex items-center">
                      <a href="/profile/other-profile">
                        <div class="flex-shrink-0 h-10 w-10">
                          <!-- <img v-if="currentUser.photoUrl || currentUser.imageUrl" class="h-10 w-10 rounded-full" :src="currentUser.photoUrl || currentUser.imageUrl" :alt="currentUser.displayName"> -->
                          <img v-if="getProfileUrl(currentUser.photoUrl || currentUser.imageUrl)"
                            class="h-10 w-10 rounded-full"
                            :src="getProfileUrl(currentUser.photoUrl || currentUser.imageUrl)"
                            :alt="currentUser.displayName">
                          <img v-else class="h-10 w-10 rounded-full" src="~/assets/images/profile/profile.jpg"
                            :alt="currentUser.displayName">
                        </div>
                      </a>
                      <div class="ml-3">
                        <div class="text-sm font-normal text-gray-900">{{ currentUser.displayName || currentUser.name }}
                        </div>
                        <!-- <div v-if="authUser && authUser.uid === currentUser.identityId" class="text-xs font-normal text-gray-500">{{ $t('you') }}</div> -->
                        <div v-if="isSenderYou" class="text-xs font-normal text-gray-500">{{ $t('you') }}</div>
                      </div>
                    </div>
                  </div>

                  <div class="w-full mt-5">
                    <ul
                      class="nav nav-tabs flex flex-row sm:flex-row md:flex-row lg:flex-row xl:flex-row  list-none border-b-0 pl-0 mb-4"
                      id="tabs-tab" role="tablist">
                      <li class="nav-item mr-3 sm:mr-3 md:mr-5 lg:mr-5 xl:mr-5 2xl:mr-5" role="presentation">
                        <a href="#tabs-home" @click="onTabChange('CASH')"
                          :class="transactionTab === 'CASH' ? 'active' : ''"
                          class="nav-link text-green text-sm leading-tight border border-green rounded hover:border-green  
                                    w-auto h-[32px] px-4 flex items-center justify-center  sm:auto sm:px-5 md:w-[102px] md:px-0 lg:w-[102px] lg:px-0 xl:w-[102px] xl:px-0 2xl:w-[102px] 2xl:px-0"
                          id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab"
                          aria-controls="tabs-home" aria-selected="true">{{ $t('cashText') }}</a>
                      </li>
                      <li v-if="showCoinTab" class="nav-item mr-3 sm:mr-3 md:mr-5 lg:mr-5 xl:mr-5 2xl:mr-5" role="presentation">
                        <a href="#tabs-profile" @click="onTabChange('COIN')"
                          :class="transactionTab === 'COIN' ? 'active' : ''"
                          class="nav-link text-green text-sm leading-tight border border-green rounded hover:border-green 
                                    w-auto h-[32px] px-4 flex items-center justify-center  sm:auto sm:px-5 md:w-[102px] md:px-0 lg:w-[102px] lg:px-0 xl:w-[102px] xl:px-0 2xl:w-[102px] 2xl:px-0"
                          id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                          aria-controls="tabs-profile" aria-selected="false">{{ $t('gintaaCoin') }}</a>
                      </li>
                      <li v-if="ownListings.length > 0" class="nav-item mr-4 sm:mr-4 md:mr-5 lg:mr-5 xl:mr-5 2xl:mr-5"
                        role="presentation">
                        <a href="#tabs-messages" @click="onTabChange('PRODUCT')"
                          :class="transactionTab === 'PRODUCT' ? 'active' : ''"
                          class="nav-link text-green text-sm leading-tight border border-green rounded hover:border-green 
                                    w-auto h-[32px] px-4 flex items-center justify-center  sm:auto sm:px-5 md:w-[102px] md:px-0 lg:w-[102px] lg:px-0 xl:w-[102px] xl:px-0 2xl:w-[102px] 2xl:px-0"
                          id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                          aria-controls="tabs-messages" aria-selected="false">{{ $t('productText') }} </a>
                      </li>
                      <li v-else-if="authUser && authUser.uid === currentUser.identityId" class="nav-item">
                        <!-- -->
                        <a :href="localePath('/listing/item')" @click="setRedirectUrlInLocalStorage" target="_blank"
                          class="nav-link text-green text-sm leading-tight border border-green rounded hover:border-green  
                          min-w-[102px] h-[32px] flex items-center justify-center  sm:auto px-1 md:min-w-[102px] md:px-0 lg:min-w-[102px] lg:px-1 xl:min-w-[102px] xl:px-1 2xl:min-w-[102px] 2xl:px-1">
                          {{ $t('productText') }}
                        </a>
                      </li>

                    </ul>
                    <div class="tab-content" id="tabs-tabContent">
                      <div :class="transactionTab === 'CASH' ? 'show active' : ''" class="tab-pane fade" id="tabs-home"
                        role="tabpanel" aria-labelledby="tabs-home-tab">
                        <div class="w-full flex flex-col pt-3">
                          <div v-if="suggestAmountList.length" class="w-full flex flex-col">
                            <!-- <div class="w-full flex flex-col text-sm font-normal text-gray-900">Select Your Offer </div> -->
                            <div class="w-full float-left ">
                              <a href="javascript:;" v-for="(item, index) in suggestAmountList"
                                :key="'cash_' + index + '_' + item.amount" @click="setRequestedAmount(item, index)"
                                :class="item.active ? 'bg-green border-green text-white cash-active' : 'text-gray-500 border-gray-200'"
                                class="float-left min-w-[50px] border flex justify-center items-center bg-transparent
                              py-1 px-1 rounded-3xl mr-1 mb-2 sm:min-w-[50px] sm:px-1 sm:mr-1 sm:py-1 md:min-w-[90px] md:mr-2 md:px-3 md:py-1.5 lg:min-w-[90px] lg:mr-2 lg:px-3 lg:py-1.5 xl:min-w-[90px] xl:mr-2 xl:px-3 xl:py-1.5 2xl:min-w-[90px] 2xl:mr-2 2xl:px-3 2xl:py-1.5">
                                <svg width="14" height="14" viewBox="0 0 14 25" fill="none"
                                  class="w-[6px] sm:w-[6px] md:w-[14px] lg:w-[14px] xl:w-[14px] 2xl:w-[14px]">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z"
                                    fill="#374151" />
                                </svg>
                                <span
                                  class="font-normal text-xs ml-1 sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                                  {{ item.amount }} </span>
                              </a>
                            </div>
                            <!-- <div class="w-full flex flex-col relative ">
                              <div class="flex relative pt-3.5 pb-4">
                                <div class="text-sm bg-white w-5 text-left z-20 text-gray-700"> Or </div> 
                                <div class="w-[365px] absolute top-6 border-t border-gray-300 chr-line"></div>
                              </div>
                            </div> -->
                          </div>
                          <div
                            class="w-full block sm:block md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
                            <div class="relative z-0 w-[320px] mt-2">
                              <div class="absolute top-5 left-0">
                                <svg width="24" height="24" viewBox="0 0 14 25" fill="none">
                                  <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z"
                                    fill="#000000" />
                                </svg>
                              </div>
                              <input v-model="requestedAmount" type="text" name="requestedAmount" placeholder=" "
                                autocomplete="off" onkeypress="return event.charCode >= 48" min="1" maxlength="6"
                                @keypress="isNumber($event)" @keyup="onRequestedAmountChange()"
                                class="text-gray-900 pl-7 pt-3 pb-0 block font-bold w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-[25px]" />
                              <label for="requestedAmount"
                                class="pl-7 absolute duration-300 font-medium top-4 -z-1 origin-0 text-gray-500 text-base">
                                <!-- <span v-if="payer === '1'">{{ $t('yourSuggestedCash', { userName: myselfName }) }}</span>
                                <span v-else>{{ $t('partnerSuggestedCash', { userName: partnerName }) }}</span> -->
                              </label>
                              <div class="block pt-2 text-sm text-errortext"
                                v-if="+requestedAmount < minimumLimitAmount"
                                v-html="$t('requestedAmountMinValidatinErrCash', { amount: minimumLimitAmount })"></div>
                              <div class="block pt-2 text-sm text-errortext"
                                v-if="+requestedAmount > maximumLimitAmount"
                                v-html="$t('requestedAmountMaxValidatinErrCash', { amount: maximumLimitAmount })"></div>

                            </div>
                            <div v-if="!loading"
                              class="w-full fixed left-0 bottom-0 z-40 shadow bg-white border-t-2 border-gray-200 px-5 pb-3 sm:fixed sm:bg-white sm:border-t-2 sm:shadow sm:w-full sm:px-5 sm:pb-3 md:relative md:w-auto md:shadow-none md:bg-transparent md:border-t-0 md:px-0 md:pb-0 lg:relative lg:w-auto lg:shadow-none lg:bg-transparent lg:border-t-0 lg:px-0 lg:pb-0 xl:relative xl:w-auto xl:shadow-none xl:bg-transparent xl:border-t-0 xl:px-0 xl:pb-0 2xl:relative 2xl:w-auto 2xl:shadow-none 2xl:bg-transparent 2xl:border-t-0 2xl:px-0 2xl:pb-0">
                              <button :disabled="!isValidRequestedAmount"
                                :class="[!isValidRequestedAmount ? 'opacity-50' : '', 'bg-firoza mt-[14px] text-white py-3 px-6 rounded text-[18px] font-bold flex items-center make-offer justify-center w-full sm:w-full md:min-w-[180px] lg:min-w-[180px] xl:min-w-[180px] 2xl:min-w-[180px]']"
                                @click="offerSubmit">
                                <span> {{ $route.params.suggest_or_revise === 'revise' ? $t('updateOffer') :
                                    $t('sendOffer')
                                }} </span>
                                <Spinner v-show="offerPosting" />
                              </button>
                            </div>
                          </div>

                          <div class="w-full flex flex-col mt-5">
                            <div class="flex flex-col bg-[#f0f5ea] p-4 border-l-4  border-[#6b9c2e]">
                              <div class="flex">
                                <div class="flex-shrink-0">
                                  <div class="text-sm font-medium text-gray-900">
                                    <img src="~/assets/images/perform_exchange.svg" alt="perform_exchange"
                                      class="w-[55px] mr-2" />
                                    <!-- {{$t('deliveryPreference')}} : -->

                                  </div>
                                </div>
                                <div class="ml-3">
                                  <div class="text-sm  text-gray-900 font-medium pb-1">{{ $t('personalMeeting') }}
                                  </div>
                                  <div class="text-xs font-normal text-gray-500">{{ $t('personalMeetingPara') }}</div>

                                </div>
                              </div>
                              <!-- <div class="text-xs text-gray-500 pt-3 flex border-t border-gray-200 mt-2 relative">
                                <svg width="24" height="20" viewBox="0 0 24 20" class="mr-4" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1 0C0.447715 0 0 0.447715 0 1V14C0 14.5523 0.447715 15 1 15H2.33682C2.12085 15.4546 2 15.9632 2 16.5C2 18.433 3.567 20 5.5 20C7.433 20 9 18.433 9 16.5C9 15.9632 8.87915 15.4546 8.66318 15H15.3368C15.1208 15.4546 15 15.9632 15 16.5C15 18.433 16.567 20 18.5 20C20.433 20 22 18.433 22 16.5C22 15.9632 21.8792 15.4546 21.6632 15H23C23.5523 15 24 14.5523 24 14V9C24 8.73478 23.8946 8.48043 23.7071 8.29289L20.7071 5.29289C20.5196 5.10536 20.2652 5 20 5H17V1C17 0.447715 16.5523 0 16 0H1ZM18.5 13H22V9.41421L19.5858 7H17V13H18.5ZM18.5 15C17.6716 15 17 15.6716 17 16.5C17 17.3284 17.6716 18 18.5 18C19.3284 18 20 17.3284 20 16.5C20 15.6716 19.3284 15 18.5 15ZM4 16.5C4 15.6716 4.67157 15 5.5 15C6.32843 15 7 15.6716 7 16.5C7 17.3284 6.32843 18 5.5 18C4.67157 18 4 17.3284 4 16.5ZM15 13H5.5H2V2H15V6V13Z"
                                    fill="black" />
                                </svg>

                                {{ $t('shiprockMsg') }}
                                <div class="relative ml-2 group">
                                  <svg width="18" height="18" viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11ZM11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM10.275 7.75C10.4667 7.94444 10.7083 8.04167 11 8.04167C11.2917 8.04167 11.5292 7.94444 11.7125 7.75C11.9042 7.55556 12 7.31019 12 7.01389C12 6.71759 11.9042 6.47685 11.7125 6.29167C11.5292 6.09722 11.2917 6 11 6C10.7083 6 10.4667 6.09722 10.275 6.29167C10.0917 6.47685 10 6.71759 10 7.01389C10 7.31019 10.0917 7.55556 10.275 7.75ZM10 15C10 15.5523 10.4478 16 11.0001 16C11.5524 16 12.0001 15.5523 12.0001 15V10C12.0001 9.44772 11.5524 9 11.0001 9C10.4478 9 10 9.44771 10 10V15Z"
                                      fill="#8CAEC5" />
                                  </svg>

                                  <div
                                    class="thirdparty-msg-del arrow-left-info bg-black bg-opacity-80 shadow-lg absolute hidden z-30 right-[30px] md:-right-[200px] -top-[120px] border border-gray-100 group-hover:block">
                                    <ul>
                                      <li class="mb-0 p-3 border-b border-[#616060] text-white opacity-80">
                                        <div class="text-medium text-[14px] pb-2">India Post</div>
                                        <div class="text-[12px]">https://www.indiapost.gov.in/</div>
                                      </li>
                                      <li class="mb-0 p-3 border-b border-[#616060] text-white opacity-80">
                                        <div class="text-medium text-[14px] pb-2">Delhivery</div>
                                        <div class="text-[12px]">https://www.delhivery.com/</div>
                                      </li>
                                      <li class="mb-0 p-3 border-b border-[#616060] text-white opacity-80">
                                        <div class="text-medium text-[14px] pb-2">DTDC</div>
                                        <div class="text-[12px]">https://www.dtdc.in/</div>
                                      </li>
                                      <li class="mb-0 p-3  border-[#616060] text-white opacity-80">
                                        <div class="text-medium text-[14px] pb-2">Blue Dart</div>
                                        <div class="text-[12px]">https://www.bluedart.com/</div>
                                      </li>
                                    </ul>

                                  </div>

                                </div>


                              </div> -->

                            </div>

                          </div>
                        </div>
                      </div>

                      <div :class="transactionTab === 'COIN' ? 'show active' : ''" class="tab-pane fade"
                        id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                        <div class="w-full flex flex-col pt-3">
                          <div v-if="suggestAmountList.length" class="w-full flex flex-col">
                            <!-- <div class="w-full flex flex-col text-sm font-normal text-gray-900">Select Your Offer</div> -->
                            <div class="w-full float-left">
                              <a href="javascript:;" v-for="(item, index) in suggestAmountList"
                                :key="'coin_' + index + '_' + item.amount" @click="setRequestedAmount(item, index)"
                                :class="item.active ? 'bg-green border-green text-white' : 'text-gray-500 border-gray-200'"
                                class="float-left min-w-[50px] border flex justify-center items-center bg-transparent
                              py-1 px-1 rounded-3xl mr-1 mb-2 sm:min-w-[50px] sm:px-1 sm:mr-1 sm:py-1 md:min-w-[90px] md:mr-2 md:px-3 md:py-1.5 lg:min-w-[90px] lg:mr-2 lg:px-3 lg:py-1.5 xl:min-w-[90px] xl:mr-2 xl:px-3 xl:py-1.5 2xl:min-w-[90px] 2xl:mr-2 2xl:px-3 2xl:py-1.5">
                                <img src="~/assets/images/offer/coin-value.svg" alt="coin"
                                  class="w-[12px] mr-[1px] sm:w-[12px] sm:mr-[1px] md:w-[18px] md:mr-[5px] lg:w-[18px] lg:mr-[5px] xl:w-[18px] xl:mr-[5px] 2xl:w-[18px] 2xl:mr-[5px]">
                                <span
                                  class="font-normal text-xs ml-1 sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                                  {{ item.amount }} </span>
                              </a>
                            </div>
                            <!-- <div class="w-full flex flex-col relative ">
                              <div class="flex relative pt-3.5 pb-4">
                                <div class="text-sm bg-white w-5 text-left z-20 text-gray-700"> Or </div> 
                                <div class="w-[365px] absolute top-6 border-t border-gray-300 chr-line"></div>
                              </div>
                            </div> -->
                          </div>
                          <div
                            class="w-full block sm:block md:flex md:justify-between lg:flex lg:justify-between xl:flex xl:justify-between 2xl:flex 2xl:justify-between">
                            <div class="w-full coin-suggest mt-2">
                              <div class="relative z-0 w-[320px]">
                                <div class="absolute top-[16px] left-0">
                                  <img src="~/assets/images/offer/coin-value.svg" alt="coin" class="w-[24px]">
                                </div>
                                <input v-model="requestedAmount" type="text" name="requestedAmount" placeholder=" "
                                  autocomplete="off" onkeypress="return event.charCode >= 48" min="1" maxlength="6"
                                  @keypress="isNumber($event)" @keyup="onRequestedAmountChange()"
                                  class="text-gray-900 font-bold pl-9 pt-3 pb-0 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-[25px]" />
                                <label for="requestedAmount"
                                  class="pl-9 absolute duration-300 font-medium top-3 -z-1 origin-0 text-gray-500 text-base">
                                  <!-- <span v-if="payer === '1'">{{ $t('yourSuggestedCoin', { userName: myselfName }) }}</span>
                                  <span v-else>{{ $t('partnerSuggestedCoin', { userName: partnerName }) }}</span> -->
                                </label>
                                <div class="block pt-2 text-sm text-errortext"
                                  v-if="+requestedAmount < minimumLimitAmount"
                                  v-html="$t('requestedAmountMinValidatinErrCoin', { amount: minimumLimitAmount })">
                                </div>
                                <div class="block pt-2 text-sm text-errortext"
                                  v-if="+requestedAmount > maximumLimitAmount"
                                  v-html="$t('requestedAmountMaxValidatinErrCoin', { amount: maximumLimitAmount })">
                                </div>
                              </div>
                            </div>


                            <div v-if="!loading"
                              class="w-full fixed left-0 bottom-0 z-40 shadow bg-white border-t-2 border-gray-200 px-5 pb-3 sm:fixed sm:bg-white sm:border-t-2 sm:shadow sm:w-full sm:px-5 sm:pb-3 md:relative md:w-auto md:shadow-none md:bg-transparent md:border-t-0 md:px-0 md:pb-0 lg:relative lg:w-auto lg:shadow-none lg:bg-transparent lg:border-t-0 lg:px-0 lg:pb-0 xl:relative xl:w-auto xl:shadow-none xl:bg-transparent xl:border-t-0 xl:px-0 xl:pb-0 2xl:relative 2xl:w-auto 2xl:shadow-none 2xl:bg-transparent 2xl:border-t-0 2xl:px-0 2xl:pb-0">
                              <button :disabled="!isValidRequestedAmount"
                                :class="[!isValidRequestedAmount ? 'opacity-50' : '', 'bg-firoza mt-[14px] text-white py-3 px-6 rounded text-[18px] font-bold flex items-center make-offer justify-center w-full sm:w-full md:min-w-[180px] lg:min-w-[180px] xl:min-w-[180px] 2xl:min-w-[180px]']"
                                @click="offerSubmit">
                                <span> {{ $route.params.suggest_or_revise === 'revise' ? $t('updateOffer') :
                                    $t('sendOffer')
                                }} </span>
                                <Spinner v-show="offerPosting" />
                              </button>
                            </div>


                          </div>

                          <div class="w-full flex flex-col mt-5">
                            <div class="flex flex-col bg-[#f0f5ea] p-4 border-l-4  border-[#6b9c2e]">
                              <div class="flex">
                                <div class="flex-shrink-0">
                                  <div class="text-sm font-medium text-gray-900">
                                    <img src="~/assets/images/perform_exchange.svg" alt="perform_exchange"
                                      class="w-[55px] mr-2" />
                                    <!-- {{$t('deliveryPreference')}} : -->

                                  </div>
                                </div>
                                <div class="ml-3">
                                  <div class="text-sm  text-gray-900 font-medium pb-1">{{ $t('personalMeeting') }}
                                  </div>
                                  <div class="text-xs font-normal text-gray-500">{{ $t('personalMeetingPara') }}</div>

                                </div>
                              </div>
                              <!-- <div class="text-xs text-gray-500 pt-3 flex border-t border-gray-200 mt-2">
                                <svg width="24" height="20" viewBox="0 0 24 20" class="mr-4" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M1 0C0.447715 0 0 0.447715 0 1V14C0 14.5523 0.447715 15 1 15H2.33682C2.12085 15.4546 2 15.9632 2 16.5C2 18.433 3.567 20 5.5 20C7.433 20 9 18.433 9 16.5C9 15.9632 8.87915 15.4546 8.66318 15H15.3368C15.1208 15.4546 15 15.9632 15 16.5C15 18.433 16.567 20 18.5 20C20.433 20 22 18.433 22 16.5C22 15.9632 21.8792 15.4546 21.6632 15H23C23.5523 15 24 14.5523 24 14V9C24 8.73478 23.8946 8.48043 23.7071 8.29289L20.7071 5.29289C20.5196 5.10536 20.2652 5 20 5H17V1C17 0.447715 16.5523 0 16 0H1ZM18.5 13H22V9.41421L19.5858 7H17V13H18.5ZM18.5 15C17.6716 15 17 15.6716 17 16.5C17 17.3284 17.6716 18 18.5 18C19.3284 18 20 17.3284 20 16.5C20 15.6716 19.3284 15 18.5 15ZM4 16.5C4 15.6716 4.67157 15 5.5 15C6.32843 15 7 15.6716 7 16.5C7 17.3284 6.32843 18 5.5 18C4.67157 18 4 17.3284 4 16.5ZM15 13H5.5H2V2H15V6V13Z"
                                    fill="black" />
                                </svg>

                                {{ $t('shiprockMsg') }}

                                
                                <div class="relative ml-2 group">
                                  <svg width="18" height="18" viewBox="0 0 22 22" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11ZM11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM10.275 7.75C10.4667 7.94444 10.7083 8.04167 11 8.04167C11.2917 8.04167 11.5292 7.94444 11.7125 7.75C11.9042 7.55556 12 7.31019 12 7.01389C12 6.71759 11.9042 6.47685 11.7125 6.29167C11.5292 6.09722 11.2917 6 11 6C10.7083 6 10.4667 6.09722 10.275 6.29167C10.0917 6.47685 10 6.71759 10 7.01389C10 7.31019 10.0917 7.55556 10.275 7.75ZM10 15C10 15.5523 10.4478 16 11.0001 16C11.5524 16 12.0001 15.5523 12.0001 15V10C12.0001 9.44772 11.5524 9 11.0001 9C10.4478 9 10 9.44771 10 10V15Z"
                                      fill="#8CAEC5" />
                                  </svg>

                                  <div
                                    class="thirdparty-msg-del arrow-left-info bg-black bg-opacity-80 shadow-lg absolute hidden z-30 right-[30px] md:-right-[200px] -top-[120px] border border-gray-100 group-hover:block">
                                    <ul>
                                      <li class="mb-0 p-3 border-b border-[#616060] text-white opacity-80">
                                        <div class="text-medium text-[14px] pb-2">India Post</div>
                                        <div class="text-[12px]">https://www.indiapost.gov.in/</div>
                                      </li>
                                      <li class="mb-0 p-3 border-b border-[#616060] text-white opacity-80">
                                        <div class="text-medium text-[14px] pb-2">Delhivery</div>
                                        <div class="text-[12px]">https://www.delhivery.com/</div>
                                      </li>
                                      <li class="mb-0 p-3 border-b border-[#616060] text-white opacity-80">
                                        <div class="text-medium text-[14px] pb-2">DTDC</div>
                                        <div class="text-[12px]">https://www.dtdc.in/</div>
                                      </li>
                                      <li class="mb-0 p-3  border-[#616060] text-white opacity-80">
                                        <div class="text-medium text-[14px] pb-2">Blue Dart</div>
                                        <div class="text-[12px]">https://www.bluedart.com/</div>
                                      </li>
                                    </ul>

                                  </div>

                                </div>
                              </div> -->

                            </div>

                          </div>
                        </div>
                      </div>

                      <div :class="transactionTab === 'PRODUCT' ? 'show active' : ''" class="tab-pane fade"
                        id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                        <div class="w-full flex flex-col mt-5 sm:flex-col md:flex-row lg:flex-row xl:flex-row">
                          <div class="w-60 mr-10">
                            <OfferListingItem v-if="currentUserSelectedListing" :listing="currentUserSelectedListing" />
                            <OfferBottomOtherListings v-if="ownListings.length > 1"
                              :display-text="$t('selectOtherProduct')" :listings="ownListings.slice(0, 5)"
                              @onSelectListing="selectOwnListing" />
                            <!-- <OfferBottomOtherListings v-if="otherUserListings.length > 1 " :display-text="$t('selectOtherProduct')" :listings="otherUserListings.slice(0, 5)" @onSelectListing="selectOwnListing" /> -->
                            <!-- {{ownListings}} -->
                            <!-- <div  class="group box-border overflow-hidden flex p-3 cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white shadow relative" >
                              <div class="product-img flex mb-2 md:mb-2 h-44 justify-center w-full items-center overflow-hidden">
                                <img src="https://dev.cdn.gintaa.com/offers/image/20220413/3FnQCCqPvFztOnrolluI2l/4rLGXTrW3WDeWA9BFS7ET_pic.jpg" alt="Used GREEN KIVVI Drinkware Sets" class="bg-gray-300 object-cover  m-w-full max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" />
                              </div>
                              <div class="product-title w-full overflow-hidden px-1">
                                <h2 class="text-heading font-semibold truncate mb-1 text-sm text-gray-600">Mobile Phone</h2>
                                <div class="text-heading font-medium text-base text-gray-700 flex items-center relative ">
                                  <span class="text-sm text-gray-500 font-normal mr-2" >Value</span>                                       
                                  <span class="text-sm text-gray-500 font-normal flex items-center" >
                                  <img src="~/assets/images/offer/coin-value.svg" class="mr-2 w-[18px]" > 5000</span>
                                </div>
                              </div>
                            </div>
                            <div class="flex flex-col w-full text-xs text-gray-700 mt-2"> Select other product</div>
                            <div class="flex flex-row gap-2 mt-2">
                              <div class="basis-1/4">
                                <img src="https://dev.cdn.gintaa.com/offers/image/20220413/3FnQCCqPvFztOnrolluI2l/4rLGXTrW3WDeWA9BFS7ET_pic.jpg" alt="image" class="object-cover border border-gray-400 p-0.5 h-12 w-full transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none border-2 border-teal-400 opacity-50" />
                              </div>
                              <div class="basis-1/4">
                                <img src="https://dev.cdn.gintaa.com/offers/image/20220413/3FnQCCqPvFztOnrolluI2l/4rLGXTrW3WDeWA9BFS7ET_pic.jpg" alt="image" class="object-cover border border-gray-400 p-0.5 h-12 w-full transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" />
                              </div>
                              <div class="basis-1/4">
                                <img src="https://dev.cdn.gintaa.com/offers/image/20220413/3FnQCCqPvFztOnrolluI2l/4rLGXTrW3WDeWA9BFS7ET_pic.jpg" alt="image" class="object-cover border border-gray-400 p-0.5 h-12 w-full transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" />
                              </div>
                              <div class="basis-1/4">
                                <div id="full-list" class="relative cursor-pointer">
                                  <img src="https://dev.cdn.gintaa.com/offers/image/20220413/3FnQCCqPvFztOnrolluI2l/4rLGXTrW3WDeWA9BFS7ET_pic.jpg" alt="image" class="object-cover border border-gray-400 p-0.5 h-12 w-full transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" />
                                  <div class="absolute h-full w-full flex justify-center items-center bg-neutral-900 opacity-50 top-0 left-0 ">
                                  </div>
                                  <div class="absolute h-full w-full flex justify-center items-center top-0 left-0 ">
                                    <span class="text-xs text-white opacity-100 ">More</span>
                                  </div>
                                </div>
                              </div>
                            </div> -->
                          </div>
                          <div
                            class="right-sdelisting w-full mt-5 sm:mt-5 sm:w-full md:mt-0 md:w-[336px] lg:mt-0 lg:w-[378px] xl:mt-0 xl:w-[378px] 2xl:mt-0 2xl:w-[378px]">
                            <div class="flex flex-row gap-6 mt-3 sm:gap-6 md:gap-6 lg:gap-12 xl:gap-12 2xl:gap-12">
                              <div
                                :class="!showCoinTab ? 'w-full' : 'basis-6/6 sm:basis-6/6 md:basis-1/3 lg:basis-4/6'"
                                class="relative z-0">

                                <select v-model="payer" name="select" placeholder=" " value=""
                                  onclick="this.setAttribute('value', this.value);"
                                  class="pt-3 pb-2 text-gray-900 font-medium block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                                  <option value="" disabled hidden></option>
                                  <option value="1">
                                    {{ $t('iWillPay', { userName: myselfName }) }}
                                  </option>
                                  <option value="2">
                                    {{ $t('partnerWillPay', { userName: partnerName }) }}
                                  </option>
                                </select>
                                <label for="select"
                                  class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{
                                      $t('whoWillPay')
                                  }}</label>
                                <span class="text-xs terrortext hidden" id="error">Phone is required</span>
                                <span class="absolute right-0 top-[15px] -z-50">
                                  <svg width="15" height="9" viewBox="0 0 15 9" fill="none">
                                    <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                </span>
                              </div>
                              <div
                                v-if="showCoinTab"
                                class="relative z-0 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/3">
                                <select v-model="transactionMode" name="selectTransactionMode" value=""
                                  onclick="this.setAttribute('value', this.value);"
                                  class="pt-3 pb-2 text-gray-900 font-medium block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                                  <option value="" disabled hidden></option>
                                  <option value="CASH">{{ $t('cashText') }}</option>
                                  <option value="COIN">{{ $t('gintaaCoin') }}</option>
                                </select>
                                <label for="selectTransactionMode"
                                  class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{
                                      $t('selectanOption')
                                  }}</label>
                                <span class="text-xs terrortext hidden" id="error">Phone is required</span>
                                <span class="absolute right-0 top-[15px] -z-50">
                                  <svg width="15" height="9" viewBox="0 0 15 9" fill="none">
                                    <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round"
                                      stroke-linejoin="round" />
                                  </svg>
                                </span>
                              </div>



                            </div>
                            <div class="w-full mt-12">
                              <div class="relative z-0 w-full">
                                <div v-if="transactionMode === 'CASH'" class="absolute top-6 left-0">
                                  <svg width="18" height="18" viewBox="0 0 14 25" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z"
                                      fill="#000000" />
                                  </svg>
                                </div>
                                <div v-else class="absolute top-[18px] left-0">
                                  <img src="~/assets/images/offer/coin-value.svg" alt="coin" class="w-[24px]">
                                </div>
                                <!-- <input type="email"  name="name"  placeholder=" "   class="text-gray-900 font-medium pl-9 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
                                <label for="name" class="pl-9 absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Amount</label> -->
                                <input v-model="requestedAmount" type="text" name="requestedAmount" placeholder=" "
                                  class="text-gray-900 font-medium pl-7 pt-3 pb-0 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-[25px]"
                                  autocomplete="off" onkeypress="return event.charCode >= 48" min="1" maxlength="6"
                                  @keypress="isNumber($event)">
                                <label for="requestedAmount"
                                  class="pl-7 absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">
                                  {{ transactionMode === 'COIN' ? $t('gintaaCoinsSu') : $t('gintaaCashSu') }}
                                </label>
                              </div>
                            </div>

                            <div v-if="!loading"
                              class="flex-col py-3 mt-0 w-full fixed left-0 bottom-0 z-40 shadow bg-white border-t-2 border-gray-200 px-5 sm:fixed sm:bg-white sm:border-t-2 sm:shadow sm:w-full sm:px-5 sm:py-3 sm:mt-0 md:relative md:w-auto md:shadow-none md:bg-transparent md:border-t-0 md:px-0 md:py-3 md:mt-2 lg:relative lg:w-auto lg:shadow-none lg:bg-transparent lg:border-t-0 lg:px-0 lg:py-3 lg:mt-2 xl:relative xl:w-auto xl:shadow-none xl:bg-transparent xl:border-t-0 xl:px-0 xl:py-3 xl:mt-2 2xl:relative 2xl:w-auto 2xl:shadow-none 2xl:bg-transparent 2xl:border-t-0 2xl:px-0 2xl:py-3 2xl:mt-2">
                              <div class="flex justify-end w-full">
                                <button :disabled="offerPosting || !isValidOffer"
                                  :class="[offerPosting || !isValidOffer ? 'opacity-50' : '', 'bg-firoza text-white py-3 px-6 rounded text-[18px] font-bold flex items-center make-offer justify-center w-full sm:w-full md:w-[180px] lg:w-[180px] xl:w-[180px] 2xl:w-[180px]']"
                                  @click="offerSubmit">
                                  <span> {{ $route.params.suggest_or_revise === 'revise' ? $t('updateOffer') :
                                      $t('sendOffer')
                                  }} </span>
                                  <Spinner v-show="offerPosting" />
                                </button>
                              </div>
                            </div>

                            <div class="w-full flex flex-col mt-2">
                              <div class="flex flex-col bg-[#f0f5ea] p-4 border-l-4  border-[#6b9c2e]">
                                <div class="flex">
                                  <div class="flex-shrink-0">
                                    <div class="text-sm font-medium text-gray-900">
                                      <img src="~/assets/images/perform_exchange.svg" alt="perform_exchange"
                                        class="w-[55px] mr-2" />
                                      <!-- {{$t('deliveryPreference')}} : -->

                                    </div>
                                  </div>
                                  <div class="ml-3">
                                    <div class="text-sm  text-gray-900 font-medium pb-1">{{ $t('personalMeeting') }}
                                    </div>
                                    <div class="text-xs font-normal text-gray-500">{{ $t('personalMeetingPara') }}</div>

                                  </div>
                                </div>
                                <!-- <div class="text-xs text-gray-500 pt-3 flex border-t border-gray-200 mt-2">
                                  <svg width="24" height="20" viewBox="0 0 24 20" class="mr-4" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd"
                                      d="M1 0C0.447715 0 0 0.447715 0 1V14C0 14.5523 0.447715 15 1 15H2.33682C2.12085 15.4546 2 15.9632 2 16.5C2 18.433 3.567 20 5.5 20C7.433 20 9 18.433 9 16.5C9 15.9632 8.87915 15.4546 8.66318 15H15.3368C15.1208 15.4546 15 15.9632 15 16.5C15 18.433 16.567 20 18.5 20C20.433 20 22 18.433 22 16.5C22 15.9632 21.8792 15.4546 21.6632 15H23C23.5523 15 24 14.5523 24 14V9C24 8.73478 23.8946 8.48043 23.7071 8.29289L20.7071 5.29289C20.5196 5.10536 20.2652 5 20 5H17V1C17 0.447715 16.5523 0 16 0H1ZM18.5 13H22V9.41421L19.5858 7H17V13H18.5ZM18.5 15C17.6716 15 17 15.6716 17 16.5C17 17.3284 17.6716 18 18.5 18C19.3284 18 20 17.3284 20 16.5C20 15.6716 19.3284 15 18.5 15ZM4 16.5C4 15.6716 4.67157 15 5.5 15C6.32843 15 7 15.6716 7 16.5C7 17.3284 6.32843 18 5.5 18C4.67157 18 4 17.3284 4 16.5ZM15 13H5.5H2V2H15V6V13Z"
                                      fill="black" />
                                  </svg>

                                  {{ $t('shiprockMsg') }}

                              
                                  <div class="relative ml-2 group">
                                    <svg width="18" height="18" viewBox="0 0 22 22" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11ZM11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM10.275 7.75C10.4667 7.94444 10.7083 8.04167 11 8.04167C11.2917 8.04167 11.5292 7.94444 11.7125 7.75C11.9042 7.55556 12 7.31019 12 7.01389C12 6.71759 11.9042 6.47685 11.7125 6.29167C11.5292 6.09722 11.2917 6 11 6C10.7083 6 10.4667 6.09722 10.275 6.29167C10.0917 6.47685 10 6.71759 10 7.01389C10 7.31019 10.0917 7.55556 10.275 7.75ZM10 15C10 15.5523 10.4478 16 11.0001 16C11.5524 16 12.0001 15.5523 12.0001 15V10C12.0001 9.44772 11.5524 9 11.0001 9C10.4478 9 10 9.44771 10 10V15Z"
                                        fill="#8CAEC5" />
                                    </svg>

                                    <div
                                      class="thirdparty-msg-del arrow-left-info bg-black bg-opacity-80 shadow-lg absolute hidden z-30 -right-[195px] -top-[120px] border border-gray-100 group-hover:block">
                                      <ul>
                                        <li class="mb-0 p-3 border-b border-[#616060] text-white opacity-80">
                                          <div class="text-medium text-[14px] pb-2">India Post</div>
                                          <div class="text-[12px]">https://www.indiapost.gov.in/</div>
                                        </li>
                                        <li class="mb-0 p-3 border-b border-[#616060] text-white opacity-80">
                                          <div class="text-medium text-[14px] pb-2">Delhivery</div>
                                          <div class="text-[12px]">https://www.delhivery.com/</div>
                                        </li>
                                        <li class="mb-0 p-3 border-b border-[#616060] text-white opacity-80">
                                          <div class="text-medium text-[14px] pb-2">DTDC</div>
                                          <div class="text-[12px]">https://www.dtdc.in/</div>
                                        </li>
                                        <li class="mb-0 p-3  border-[#616060] text-white opacity-80">
                                          <div class="text-medium text-[14px] pb-2">Blue Dart</div>
                                          <div class="text-[12px]">https://www.bluedart.com/</div>
                                        </li>
                                      </ul>

                                    </div>

                                  </div>
                                </div> -->

                              </div>

                            </div>
                          </div>

                        </div>
                      </div>

                    </div>

                  </div>

                  <!-- <div class="flex item-center w-full mt-5">                                  
                          <button class="bg-transparent border border-green text-green w-[102px] h-9 rounded text-sm flex items-center justify-center mr-5">
                                  <span> Cash </span>
                          </button>
                          <button class=" bg-transparent border border-green text-green w-[102px] h-9 rounded text-sm flex items-center justify-center mr-5">
                                  <span> gintaa Coin </span>
                          </button>
                          <button class="bg-transparent bg-green border-green text-white w-[102px] h-9 rounded text-sm flex items-center justify-center">
                                  <span> Product </span>
                          </button>                         
                    </div>     -->
                </div>
              </client-only>


            </div>
          </div>
          <!-- <div v-if="!loading" class="relative w-full flex-col bg-white px-3 py-3 mt-2 ">                       
              <div class="flex justify-end w-full">  
                <button :disabled="offerPosting || !isValidOffer" :class="[offerPosting || !isValidOffer ? 'opacity-50' : '', 'bg-firoza text-white py-3 px-6 rounded text-base flex items-center make-offer justify-center min-w-[180px]']" @click="offerSubmit">
                  <span>  {{ $route.params.suggest_or_revise === 'revise' ? $t('updateOffer') : $t('sendOffer') }} </span>
                  <Spinner v-show="offerPosting" />
                </button>
              </div>                    
          </div>                  -->
        </div>
        <SuggestOfferRightSidebar />
      </div>
    </div>

    <!--footer section goes here-->
    <Footer />

    <UserOfferFullList v-if="currentUserShowMore" :display-text1="'Select items'" :display-text2="'All list'"
      :listings="ownListings" @closePopup="closePopupOwn" @onSelectListing="selectOwnListing" />
    <UserOfferFullList v-if="otherUserShowMore" :display-text1="'Select from partner’s items'"
      :display-text2="currentUser.displayName + '’s full list'" :listings="otherUserListings"
      @closePopup="closePopupOther" @onSelectListing="selectOtherListing" />

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

    <!-- This example requires Tailwind CSS v2.0+ -->
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
            <!-- <NuxtLink :to="localePath(`/offers/details/${dealData.dealRefId}`)" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-greendark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greendark  sm:w-full sm:text-sm">
              View offer
            </NuxtLink> -->
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


    <!-- Start Share mobile number confirmation popup -->

    <div v-if="showShareMobileConfirmPopup" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title"
      role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[300px] md:w-[350px] sm:p-6">
          <div @click="forcelosePopup()" class="absolute right-5 top-2 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                            stroke="#000000">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
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
                <div :class="!initiatorAgreedShareContact ? 'opacity-50' : ''" class="relative z-0 w-full mobile-addnum">
                  <input type="text" autocomplete="off" placeholder=" " pattern="\d*" id="sharablePhoneNumber"
                    name="sharablePhoneNumber" v-model="initiatorContact" minlength="10" maxlength="10"
                    @keyup="isValidNumber()" @keypress="isNumber($event)"
                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent text-left border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />

                  <label for="name"
                    class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-xs text-left">{{ $t('UserEnterMobNum') }}</label>


                </div>
                <!-- <p class="text-xs text-red-600 pt-2" v-if="mobileReqValidation">Mobile Number Required</p> -->
                <!-- <p class="text-xs text-red-600 pt-2 ml-[-55px]" >{{$t('cl_invalidMobile')}}</p> -->

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
          <div class="mt-5 sm:mt-6">
            <!-- <NuxtLink :to="localePath(`/offers/details/${dealData.dealRefId}`)" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-greendark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greendark  sm:w-full sm:text-sm">
              View offer
            </NuxtLink> -->
            <client-only>
              <a href="javascript:;"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-greendark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greendark  sm:w-full sm:text-sm"
                @click="initiateOffer()">
                {{ $t('proceedBtn') }}
                <Spinner v-show="offerPosting" />
              </a>
            </client-only>
          </div>
        </div>
      </div>
    </div>
    <!-- End Share mobile number confirmation popup -->


    <!--tips for mobile modal-->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div v-if="showTipsPopupMobile" class="fixed z-50 inset-0 overflow-y-auto " aria-labelledby="modal-title"
      role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-left sm:block sm:p-0">
        <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

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
          class="relative inline-block align-bottom bg-white rounded-lg px-2 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div class=" sm:block absolute top-0 right-0 pt-4 pr-4">
            <button @click="showTipsPopupMobile = false" type="button"
              class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span class="sr-only">Close</span>
              <!-- Heroicon name: outline/x -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div>

            <div class="mt-3 text-center sm:mt-5">

              <div class="mt-2">
                <SuggestOfferRightSidebarMobile />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <addMobile v-if="showAddMobilePopup" @closeAddmobilePopup = "closeAddmobilePopup" @otpValidated = "otpValidated" :mobNumber = "null"/>

    <addEmail v-if="showAddEmailPopup" @closeAddemailPopup="closeAddemailPopup" @otpValidated="otpValidated"
      @skipAndContinue="skipAndContinue" />

  </div>
</template>

<script>

import { thisTypeAnnotation } from '@babel/types'
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'SuggestOffer',
  middleware: 'authenticated',
  data() {
    return {
      breadcrumb: [{
        name: 'My offers'
      },
      {
        name: 'Suggest/Revise offer'
      }
      ],
      suggest_or_revise: this.$route.params.suggest_or_revise,
      offer_or_listing_id: this.$route.params.offer_or_listing_id,
      offered_offer_id: this.$route.query.offered_offer_id,
      exchangeMode: 'Barter', // Barter
      loading: true,
      ownListings: [],
      otherUserListings: [],
      currentUser: null,
      otherUser: null,
      currentUserShowMore: false,
      otherUserShowMore: false,
      requestedAmount: '',
      payer: '', // '' for no payment, 1 for current user and 2 for other user is payer,
      transactionMode: 'CASH', // values: CASH or COIN  (Note: If this variable is not sent, then COIN is taken by default)
      transactionTab: '', // values: CASH or COIN or PRODUCT (Note: it is only use for auto select current tab)
      defaultTransactionTab: 'CASH', // values: CASH or COIN or PRODUCT (Note: it is only use for auto select current tab)
      deliveryMethod: 'Self',
      requestedProduct: null,
      requestedUser: null,
      error: null,
      offerPosting: false,
      selectedJunction: null,
      dealData: null,
      success: false,
      showTipsPopupMobile: false,
      

      // requested amount validity
      discountPercentageList: [5, 10, 15, 20],
      suggestAmountList: [],
      minimumLimitPercentage: 65,
      minimumLimitAmount: 0,
      maximumLimitPercentage: 110,
      maximumLimitAmount: 0,

      showShareMobileConfirmPopup: false,

      initiatorContact: null,
      initiatorAgreedShareContact: false,
      initiatorAgreedShareContactDisabled: true,
      isPhoneNoEsixtsinProfile:false,
      showAddMobilePopup:false,

      showCoinTab: false,
      showAddEmailPopup: false,
      isEmailExists: false

    }
  },
  async fetch() {
    let listingId = this.$route.params.offer_or_listing_id // todo for revised need to change
    if (this.$route.params.suggest_or_revise === 'revise') {
      const offerId = this.$route.params.offer_or_listing_id

      const data = await this.$axios.$get(`dview/v1/deals/${offerId}`)
      // console.log('dview', data)
      this.dealData = data.payload
      console.log('dealData:', this.dealData)
      listingId = data.payload.requestedOffers[0].offerId

      this.enableDisableTab()
    }

    // console.log('listingId', listingId)
    const ListingData = await this.$axios.$get(`${this.$config.API_BASE}/offers/v1/offers/oid/${listingId}`)
    // console.log('ListingData', ListingData)
    this.requestedProduct = ListingData.payload
    this.processDiscountParcentageRange()
    this.calculateSuggestedAmountList(this.requestedProduct.unitOfferValuation)

    if (this.$route.params.suggest_or_revise === 'revise') {
      // this.otherUser = this.dealData.callerIsReceiver
      //   ? {
      //       identityId: this.dealData.sender.id,
      //       name: this.dealData.sender.name,
      //       imageUrl: this.dealData.sender.imageUrl,
      //       averageRating: null
      //     }
      //   : {
      //       identityId: this.dealData.receiver.id,
      //       name: this.dealData.receiver.name,
      //       imageUrl: this.dealData.receiver.imageUrl,
      //       averageRating: null
      //     }

      this.otherUser = {
        identityId: this.dealData.receiver.id,
        name: this.dealData.receiver.name,
        imageUrl: this.dealData.receiver.imageUrl,
        averageRating: null
      }

      this.currentUser = {
        identityId: this.dealData.sender.id,
        name: this.dealData.sender.name,
        imageUrl: this.dealData.sender.imageUrl,
        averageRating: null
      }
    } else {
      this.otherUser = ListingData.payload.user
      this.getCurrentUser()
    }

    // console.log('requestedProduct', this.requestedProduct)
    if (this.requestedProduct) {
      this.requestedAmount = this.requestedProduct.unitOfferValuation
      this.payer = this.requestedProduct.currentUserOfferOwner ? '2' : '1' // 1 - i will pay, 2- other will pay

      // if (this.requestedProduct.exchangeMode === 'Money') {
      //   this.requestedAmount = this.requestedProduct.unitOfferValuation
      //   this.payer = this.requestedProduct.currentUserOfferOwner ? '2' : '1' // 1 - i will pay, 2- other will pay
      // }

      // if not barter then no need to load others offer
      if (this.requestedProduct.exchangeMode !== 'Barter') {
        this.requestedProduct.selected = true
        if (this.$route.params.suggest_or_revise === 'revise' && this.dealData.callerIsReceiver) {
          this.ownListings = [this.requestedProduct]
        } else {
          this.otherUserListings = [this.requestedProduct]
        }
      }

      // ovveride with revise data
      if (this.$route.params.suggest_or_revise === 'revise') {
        this.requestedAmount = this.dealData.requestedAmount
        if (this.dealData.callerIsReceiver) {
          this.payer = !this.dealData.requestedAmountPaidByInitiatingUser ? '1' : '2'
        } else {
          this.payer = this.dealData.requestedAmountPaidByInitiatingUser ? '1' : '2'
        }
      }

      if (this.dealData && this.dealData.requestedAmount) {
        this.requestedAmount = this.dealData.requestedAmount
      }

      // get listings
      this.getListings()

      this.processTransactionTab();
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    otherUserSelectedListing() {
      return this.ouSelectedListing()
    },
    currentUserSelectedListing() {
      return this.cuSelectedListing()
    },
    enableDoorStep() {
      // const requestedOffer = this.ouSelectedListing()
      // const suggestedOffer = this.cuSelectedListing()
      // return !((requestedOffer && suggestedOffer) || this.loading)
      return true
    },
    isValidOffer() {
      return this.isValidForMakeOffer()
    },
    isFree() {
      return (this.requestedProduct && this.requestedProduct.free) || false
    },
    isMoney() {
      const cu = this.cuSelectedListing()
      return (this.requestedProduct && this.requestedProduct.exchangeMode === 'Money') || !cu || false
    },
    negotiable() {
      return (this.requestedProduct && this.requestedProduct.negotiable) || false
    },
    isRevised() {
      return this.$route.params.suggest_or_revise === 'revise' ? true : false;
    },
    isReceiverYou() {
      if (this.dealData) {
        return this.dealData.callerIsReceiver ? true : false;
      } else if (this.authUser && this.authUser.uid === this.otherUser.identityId) {
        return true
      }
      return false;
    },
    isSenderYou() {
      if (this.dealData) {
        return !this.dealData.callerIsReceiver ? true : false;
      } else if (this.authUser && this.authUser.uid === this.currentUser.identityId) {
        return true
      }
      return false;
    },
    partnerName() {
      let uName = null;
      if (this.dealData) {
        uName = !this.dealData.callerIsReceiver ? this.dealData.receiver.name : this.dealData.sender.name;
      } else {
        uName = this.requestedProduct?.user.name
      }

      let nameSplit = uName ? uName.split(' ').slice(0, 1).join(' ') : uName
      return nameSplit;
    },
    myselfName() {
      let uName = null;
      if (this.dealData) {
        uName = this.dealData.callerIsReceiver ? this.dealData.receiver.name : this.dealData.sender.name;
      } else {
        uName = this.authUser ? this.authUser.displayName : null
      }

      let nameSplit = uName ? uName.split(' ').slice(0, 1).join(' ') : uName
      return nameSplit;
    },
    isValidRequestedAmount() {
      return this.minMaxValidate()
    }

  },
  mounted() {

    if (this.authUser && this.authUser.email) {
      this.isEmailExists = true
    }
    // console.log('offered_offer_id:', this.offered_offer_id);
    this.redirectToOfferDetailsPage()
    if (!this.otherUser) {
      this.getOtherUser()
    }

    // if(!this.currentUser) {      
    //   this.getCurrentUser()
    // }

    if (this.$route.params.suggest_or_revise != 'revise') {
      this.getCurrentUser()
    }

    // get listings
    this.getListings()
    // this.processTransactionTab();

    
  },

  beforeMount() {
    
   this.getMyProfileDetails();
    },
  methods: {

    async getMyProfileDetails() {
            try {
                let url = `/users/v1/user/profile`;
                const data = await this.$axios.$get(url);
                this.userDetails = data.payload;
                if(this.userDetails.mobile){
                 this.isPhoneNoEsixtsinProfile = true
                }else{
                 this.isPhoneNoEsixtsinProfile = false   
                }
                if(this.userDetails.email){
                  this.isEmailExists = true
                }
               
                
               
            } catch (error) {
                this.showLoader = false;
                console.log(error);
            }
        },
    redirectToOfferDetailsPage() {
      // redirect to offer detail if currentState 'REJECTED' | 'PARTIAL_CLOSED' | 'CLOSED'
      if (this.dealData && this.dealData.currentState) {
        if (this.dealData.currentState === 'REJECTED' || this.dealData.currentState === 'PARTIAL_CLOSED' || this.dealData.currentState === 'CLOSED') {
          //   console.log('redirect should here')
          const offerId = this.$route.params.offer_or_listing_id
          this.$router.push({ path: '/offers/details/' + offerId });
        }
      }
    },
    async logEvent(offerData) {
      try {
        // console.log('postingDealData:', offerData);
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

        // console.log('analyticsData:', analyticsData);
        await this.$fire.analytics.logEvent('gintaa_suggest_offer', analyticsData)
        // console.log('Gintaa analytics event log successfully');
      } catch (e) {
        // console.log('Gintaa analytics error:', e);
      }
    },
    async logInitiateEvent(offerData) {
      try {
        // console.log('postingDealData:', offerData);
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

        // console.log('analyticsData:', analyticsData);
        await this.$fire.analytics.logEvent('gintaa_offer_initiated', analyticsData)
        //  console.log('Gintaa initiate analytics event log successfully',analyticsData);
      } catch (e) {
        //  console.log('Gintaa analytics error:', e);
      }
    },

    async logReviseEvent(offerData) {
      try {
        // console.log('postingDealData:', offerData);
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

        // console.log('analyticsData:', analyticsData);
        await this.$fire.analytics.logEvent('gintaa_offer_revised', analyticsData)
        // console.log('Gintaa revised analytics event log successfully',analyticsData);
      } catch (e) {
        // console.log('Gintaa analytics error:', e);
      }
    },
    forcelosePopup(sec) {
            this.showShareMobileConfirmPopup  = false;
        },
    goToOfferDetails() {
      window.location.href = window.location.origin + this.localePath(`/offers/details/${this.dealData.dealRefId}`)
    },
    isValidForMakeOffer() {
      // const requestedOffer = this.ouSelectedListing()
      const suggestedOffer = this.cuSelectedListing()

      //  console.log('suggestedOffer', suggestedOffer, this.deliveryMethod)

      if (this.requestedProduct && this.deliveryMethod === 'Self') {
        // console.log('suggestedOffer', +this.requestedAmount, this.minimumLimitAmount, this.maximumLimitAmount)

        if (this.requestedProduct.free) {
          return true
        } else if (+this.requestedAmount >= this.minimumLimitAmount && +this.requestedAmount <= this.maximumLimitAmount) {
          // console.log('-----------------')

          return true
        } else if (suggestedOffer || (this.requestedAmount > 0)) {
          // console.log('=======')
          return true
        }
        return false
      }

      // else if (this.deliveryMethod === 'Junction') {
      //   return this.selectedJunction
      // } else if (this.deliveryMethod === 'Shipping') {
      //   return this.$refs.doorstep.deliveryMethod !== null
      // }

      return false
    },
    getListings() {
      if (this.requestedProduct) {
        console.log(111)
        this.getListingsOfCurrentUser()
        this.getOtherUserListings()
      }
    },
    ouSelectedListing() {
      const result = this.otherUserListings.filter((obj) => {
        return obj.selected === true
      })

      return result.length > 0 ? result[0] : null
    },
    cuSelectedListing() {
      const result = this.ownListings.filter((obj) => {
        return obj.selected === true
      })

      return result.length > 0 ? result[0] : null
    },
    sortOwnListings() {
      this.ownListings.sort((a, b) => a.selected ? -1 : 0)
    },
    sortOtherListings() {
      this.otherUserListings.sort((a, b) => a.selected ? -1 : 0)
    },
    closePopupOwn() {
      this.currentUserShowMore = false
      this.sortOwnListings()
    },
    closePopupOther() {
      this.otherUserShowMore = false
      this.sortOtherListings()
    },
    async getListingsOfCurrentUser() {
      this.loading = true
      try {
        let currentUserId = this.isRevised ? this.currentUser.identityId : this.authUser.uid
        // const url = `/offers/v1/offers/filter?states=active&exchangeModes=${this.exchangeMode}&size=30&page=0`
        // const url = `/offers/v1/offers/all/${this.authUser.uid}?states=active&exchangeModes=${this.exchangeMode}`
        const url = `/offers/v1/offers/all/${currentUserId}?states=active`
        const data = await this.$axios.$get(url)
        this.ownListings = data.payload
        if (this.suggest_or_revise === 'suggest' && this.ownListings.length > 0) {
          // this.ownListings[0].selected = true
          // this.sortOwnListings()
          // this.changePayerAmoutAndUser()
          if (this.offered_offer_id != undefined) {
            this.ownListings.map((item, index) => {
              this.ownListings[index].selected = item.offerId === this.offered_offer_id ? true : false
            })
            this.sortOwnListings()
            this.onTabChange('PRODUCT')
          } else {
            this.onTabChange(this.defaultTransactionTab) // COIN
          }
        } else if (this.suggest_or_revise === 'revise' && this.ownListings.length > 0 && this.dealData) {
          let selectedOffer = null
          if (this.dealData.callerIsReceiver) {
            if (this.dealData.requestedOffers && this.dealData.requestedOffers.length > 0) {
              selectedOffer = this.dealData.requestedOffers[0]
            }
            // else if (this.dealData.offeredOffers && this.dealData.offeredOffers.length){
            //   selectedOffer = this.dealData.offeredOffers[0]
            // }
            // console.log("##================##")
            // console.log("## selectedOffer:", selectedOffer)

          } else if (this.dealData.offeredOffers && this.dealData.offeredOffers.length > 0) {
            selectedOffer = this.dealData.offeredOffers[0]
            // console.log("########################")
          } else if (this.ownListings && this.ownListings.length > 0) {
            this.ownListings[0].selected = true
            // console.log("==========================")
          }
          // console.log(">>>>>>>>>>")
          if (selectedOffer) {
            this.ownListings = this.ownListings.map((listing) => {
              listing.selected = listing.offerId === selectedOffer.offerId
              return listing
            })
          }

          this.sortOwnListings()

          this.processTransactionTab();

        } else if (this.suggest_or_revise === 'suggest') {
          // this.changePayerAmoutAndUser()
          this.onTabChange(this.defaultTransactionTab) //'COIN'
        }
        this.loading = false
      } catch (error) {
        this.ownListings = []
        this.loading = false
      }
    },
    async getOtherUserListings() {
      this.loading = true
      try {
        // const url = `/offers/v1/offers/all/$otherUserId?states=active&exchangeModes=$exchangeMode${businessId == null ? '' : '&businessId=$businessId'}`
        const url = `/offers/v1/offers/all/${this.otherUser.identityId}?states=active&w=o`
        const data = await this.$axios.$get(url)
        this.otherUserListings = data.payload
        if (this.suggest_or_revise === 'suggest') {
          this.otherUserListings.map((listing) => {
            listing.selected = listing.offerId === this.offer_or_listing_id
            return listing
          })
          this.changePayerAmoutAndUser()
        } else if (this.suggest_or_revise === 'revise' && this.otherUserListings.length > 0 && this.dealData) {
          let selectedOffer = null
          if (!this.dealData.callerIsReceiver) {
            if (this.dealData.requestedOffers && this.dealData.requestedOffers.length > 0) {
              selectedOffer = this.dealData.requestedOffers[0]
            }
          } else if (this.dealData.offeredOffers && this.dealData.offeredOffers.length > 0) {
            selectedOffer = this.dealData.offeredOffers[0]
          }

          if (selectedOffer) {
            this.otherUserListings = this.otherUserListings.map((listing) => {
              listing.selected = listing.offerId === selectedOffer.offerId
              return listing
            })
          }

          this.sortOwnListings()
        }
        this.loading = false
      } catch (error) {
        this.otherUserListings = []
        this.loading = false
      }
    },
    async getOtherUser() {
      this.loading = true
      try {
        // const url = `/offers/v1/offers/all/$otherUserId?states=active&exchangeModes=$exchangeMode${businessId == null ? '' : '&businessId=$businessId'}`
        const otherUserId = this.dealData && this.dealData.callerIsReceiver ? this.dealData.receiver.id : this.dealData.sender.id
        // const url = `/users/v1/user/${this.otherUser.identityId}`
        const url = `/users/v1/user/${otherUserId}`
        const data = await this.$axios.$get(url)
        this.otherUser = data.payload
        this.loading = false
      } catch (error) {
        this.otherUser = null
        this.loading = false
      }
    },
    async getCurrentUser() {
      this.loading = true
      try {
        // const url = `/users/v1/user/${this.authUser.uid}`
        // const currentUserId = this.currentUser && this.currentUser.identityId ? this.currentUser.identityId : this.authUser.uid

        let currentUserId = null;
        if (this.dealData && this.dealData.callerIsReceiver) {
          currentUserId = this.dealData && this.dealData.callerIsReceiver ? this.dealData.sender.id : this.dealData.receiver.id
        } else {
          currentUserId = this.authUser.uid
        }

        const url = `/users/v1/user/${currentUserId}`
        const data = await this.$axios.$get(url)
        this.currentUser = data.payload
        this.currentUser['identityId'] = currentUserId
        this.loading = false
      } catch (error) {
        this.currentUser = null
        this.loading = false
      }
    },
    selectOwnListing(listing, type) {
      // console.log('selectOwnListing:', listing)
      if (type === 'more') {
        this.currentUserShowMore = true
      } else if (listing && !listing.selected) {
        this.ownListings = this.ownListings.map((l) => {
          l.selected = listing.offerId === l.offerId
          return l
        })
        // this.sortOwnListings()
        this.changePayerAmoutAndUser()
        // this.onTabChange('COIN')
      }
    },
    selectOtherListing(listing, type) {
      if (type === 'more') {
        this.otherUserShowMore = true
      } else if (!listing.selected) {
        this.otherUserListings = this.otherUserListings.map((l) => {
          l.selected = listing.offerId === l.offerId
          return l
        })
        // this.sortOtherListings()
        this.changePayerAmoutAndUser()
        // this.onTabChange('COIN')
      }
    },
    changePayerAmoutAndUser() {
      const currentListing = this.ownListings.filter((obj) => {
        return obj.selected === true
      })

      // const otherListing = this.otherUserListings.filter((obj) => {
      //   return obj.selected === true
      // })
      const otherListing = [this.requestedProduct]
      //  console.log('requestedProduct', this.requestedProduct)
      //  console.log('otherListing', otherListing)
      //  console.log('currentListing', currentListing)

      if (otherListing.length > 0 && currentListing.length > 0) {
        // console.log('currentListing | otherListing', currentListing[0].unitOfferValuation, otherListing[0].unitOfferValuation)
        if (currentListing[0].unitOfferValuation < otherListing[0].unitOfferValuation) {
          const amt = otherListing[0].unitOfferValuation - currentListing[0].unitOfferValuation
          this.requestedAmount = amt > 0 ? `${amt}` : 0
          this.payer = '1'
        } else {
          const amt = currentListing[0].unitOfferValuation - otherListing[0].unitOfferValuation
          this.requestedAmount = amt > 0 ? `${amt}` : 0
          this.payer = '2'
        }

        //  console.log(this.requestedAmount, this.payer)
      } else if (otherListing.length > 0 && currentListing.length <= 0) {
        this.payer = '1'
        this.requestedAmount = otherListing[0].unitOfferValuation
      }

      if (this.requestedAmount > 0) {
        this.requestedAmount = parseInt(`${this.requestedAmount}`)
      }

      // requestedAmount

      //  console.log('requestedAmount:', this.requestedAmount)

      // this.transactionMode = 'COIN';
    },
    onSelectJunction(junction) {
      // console.log(junction)
      this.selectedJunction = junction
    },

    closeAddmobilePopup(){
         this.showAddMobilePopup = false
         this.offerPosting = false
        },

    closeAddemailPopup() {
      this.showAddEmailPopup = false
    },

    skipAndContinue(btnStatus) {
      this.showAddEmailPopup = false
      if (btnStatus === 'skip') {
        this.isEmailExists = true
        this.offerSubmit()
      }
    },

     otpValidated(validatedType){
      if (validatedType && validatedType === 'Email') {
        this.isEmailExists = true
        this.closeAddemailPopup()
        this.offerSubmit()
      }else{
         this.closeAddmobilePopup()
         this.isPhoneNoEsixtsinProfile = true
         this.offerSubmit()
        }
       
        },
 async offerSubmit() {

      if(!this.isEmailExists){
        this.showAddEmailPopup = true
        return false
      }
     
      //Added For the testing If Mobile No added in Profile
      this.offerPosting = true
      const mobNoAddedInProfile = await this.checkIfmobileAddedInProfile()
      if(!mobNoAddedInProfile){
        this.showAddMobilePopup = true
        return false
      }
      this.offerPosting = false

      // End

      // if(!this.isPhoneNoEsixtsinProfile){
      //   this.showAddMobilePopup = true
      //   return false
      //   }
      
      if (this.dealData && this.dealData.dealRefId) {
        this.reviseOffer()
      } else {
        this.showMobileShareConfirmationPopup()
        // this.initiateOffer()
      }
    },

    async checkIfmobileAddedInProfile() {
            try {
                let url = `/users/v1/user/profile`;
                const data = await this.$axios.$get(url);
                this.userDetails = data.payload;
                if(this.userDetails.mobile){
                 return  true
                }else{
                 return false
                }
            } catch (error) {
                console.log(error);
            }
        },
    async initiateOffer() {
      // console.log("==============================================")
      this.error = null
      this.offerPosting = true


      // const requestedOffer = this.ouSelectedListing()
      // const suggestedOffer = this.cuSelectedListing()

      const requestedOffer = this.requestedProduct;
      const suggestedOffer = this.transactionTab === 'PRODUCT' ? this.currentUserSelectedListing : null;

      try {
        const postingDealData = {
          amountCurrency: 'INR',
          deliveryMethodId: this.deliveryMethod === 'Shipping' ? this.$refs.doorstep.deliveryMethod : this.deliveryMethod, // Junction, Self, Shipping, IndiaPost,
          expiryDate: this.$moment().add(10, 'days').format('YYYYMMDD'),
          transactionMode: this.transactionMode
        }

        if (requestedOffer) {
          postingDealData.destinationOfferDetails = [{
            offerId: requestedOffer.offerId,
            offerItemCount: 1, // offerItemCount == null ? 1 : offerItemCount,
            offerType: 'Item'
          }]
        }

        // if (this.requestedProduct.exchangeMode === 'Barter' && suggestedOffer) {
        if (suggestedOffer) {
          postingDealData.sourceOfferDetails = [{
            offerId: suggestedOffer.offerId,
            offerItemCount: 1, // offerItemCount == null ? 1 : offerItemCount,
            offerType: 'Item'
          }]
        }

        // Insurance can be included only when delivery method is shipping.
        // const totalPayable = this.requestedAmount

        // if (totalPayable > this.$config.offerMinInsuranceLimit) {
        //   postingDealData.includeInsurance = true
        // }

        // if amount involved in deal
        //  if (this.requestedAmount > 0) { 
        postingDealData.requestedAmount = this.requestedAmount || 0
        postingDealData.requestedAmountPaidByInitiatingUser = this.payer === '1'
        //  }

        // for free offer requested amount should be 0
        if (this.requestedProduct && this.requestedProduct.free) {
          postingDealData.requestedAmount = 0
        }

        postingDealData.initiatorContact = this.initiatorAgreedShareContact ? this.initiatorContact : null
        postingDealData.initiatorAgreedShareContact = this.initiatorAgreedShareContact

        // console.log("postingDealData", postingDealData);
        //  return;

        const res = await this.$axios.post('/deals/v1/deals/initiate', postingDealData)

        this.logEvent(res.data.payload)
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
    },
    async reviseOffer() {
      this.error = null
      this.offerPosting = true

      // const requestedOffer = this.dealData.callerIsReceiver ? this.cuSelectedListing() : this.ouSelectedListing()
      // const suggestedOffer = this.dealData.callerIsReceiver ? this.ouSelectedListing() : this.cuSelectedListing()
      const requestedOffer = this.requestedProduct;
      const suggestedOffer = this.transactionTab === 'PRODUCT' ? this.currentUserSelectedListing : null;

      //console.log('transactionTab:', this.transactionTab);
      //console.log('suggestedOffer:', suggestedOffer);

      try {
        const postingDealData = {
          amountCurrency: 'INR',
          deliveryMethodId: this.deliveryMethod === 'Shipping' ? this.$refs.doorstep.deliveryMethod : this.deliveryMethod, // Junction, Self, Shipping, IndiaPost,
          expiryDate: this.$moment().add(10, 'days').format('YYYYMMDD'),
          transactionMode: this.transactionMode
        }

        if (requestedOffer) {
          postingDealData.destinationOfferDetails = [{
            offerId: requestedOffer.offerId,
            offerItemCount: 1, // offerItemCount == null ? 1 : offerItemCount,
            offerType: 'Item'
          }]
        }

        // if (this.requestedProduct.exchangeMode === 'Barter' && suggestedOffer) {
        if (suggestedOffer) {
          postingDealData.sourceOfferDetails = [{
            offerId: suggestedOffer.offerId,
            offerItemCount: 1, // offerItemCount == null ? 1 : offerItemCount,
            offerType: 'Item'
          }]
        }

        // Insurance can be included only when delivery method is shipping.
        // const totalPayable = this.requestedAmount

        // if (totalPayable > this.$config.offerMinInsuranceLimit) {
        //   postingDealData.includeInsurance = true
        // }

        // if amount involved in deal
        // if (this.requestedAmount > 0) {
        postingDealData.requestedAmount = this.requestedAmount || 0

        if (this.dealData.callerIsReceiver) {
          postingDealData.requestedAmountPaidByInitiatingUser = this.payer === '2'
        } else {
          postingDealData.requestedAmountPaidByInitiatingUser = this.payer === '1'
        }

        // postingDealData.requestedAmountPaidByInitiatingUser = !suggestedOffer ? true : this.authUser.uid === this.dealData.sender.id && this.payer === '1'
        // }

        // for free offer requested amount should be 0
        if (this.requestedProduct && this.requestedProduct.free) {
          postingDealData.requestedAmount = 0
        }

        postingDealData.dealRefNo = this.dealData.dealRefId
        postingDealData.updateCounter = this.dealData.updateCounter
        // console.log('postingDealData', postingDealData)


        const res = await this.$axios.put('/deals/v1/deals/revise', postingDealData)

        this.logReviseEvent(res.data.payload)

        setTimeout(() => {
          this.dealData = res.data.payload
          this.offerPosting = false
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

        // console.log(e.response)
        if (e.response.data && e.response.data.payload && e.response.data.payload.length > 0) {
          this.error = e.response.data.payload[0].errorDetailedReason
        }

        this.offerPosting = false
      }
    },
    // ,
    // isFree () {
    //   return this.requestedProduct.free || false
    // },
    // isMoney () {
    //   return this.requestedProduct.exchangeMode === 'Money' || false
    // },
    // isNegotiable () {
    //   return this.requestedProduct.negotiable || false
    // }

    isNumber(evt) {
      evt = (evt) || window.event
      const charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    },
    processTransactionTab() {
      if (this.dealData) {
        // this.transactionMode = this.dealData.transactionMode;
        this.transactionTab = (this.dealData.offeredOffers && this.dealData.offeredOffers.length > 0) ? 'PRODUCT' : this.dealData.transactionMode
        // this.transactionTab = (this.dealData.offeredOffers && this.dealData.offeredOffers.length > 0) ? 'PRODUCT' : this.defaultTransactionTab //CASH
      } else {
        this.transactionTab = this.defaultTransactionTab //'COIN'
      }
      // console.log('transactionTab:', this.transactionTab);
      // console.log('transactionMode:', this.transactionMode);

      this.onTabChange(this.transactionTab);
    },
    onTabChange(tabName) {
      switch (tabName) {
        case 'CASH':
          this.transactionTab = 'CASH';

          //  console.log('CASH transactionTab:', this.transactionTab)
          if (this.isRevised) {
            // this.requestedAmount = this.dealData.requestedAmount
            if (this.dealData.callerIsReceiver) {
              // this.payer = !this.dealData.requestedAmountPaidByInitiatingUser ? '1' : '2'
              this.payer = '2'
            } else {
              // this.payer = this.dealData.requestedAmountPaidByInitiatingUser ? '1' : '2'
              this.payer = '1'
            }
          } else {
            // this.requestedAmount = this.requestedProduct.unitOfferValuation
            this.payer = this.requestedProduct.currentUserOfferOwner ? '2' : '1' // 1 - i will pay, 2- other will pay            

            this.setDefaultSharableContactNumber()
          }

          // this.requestedAmount = this.dealData && this.dealData.requestedAmount ? this.dealData.requestedAmount : this.requestedProduct.unitOfferValuation

          if (this.dealData) {
            if (this.dealData.offeredOffers && this.dealData.offeredOffers.length) {
              this.requestedAmount = this.requestedProduct.unitOfferValuation
            } else {
              this.requestedAmount = this.dealData.requestedAmount
            }
          } else {
            this.requestedAmount = this.requestedProduct.unitOfferValuation
          }

          this.transactionMode = 'CASH';
          if (this.ownListings && this.ownListings.length > 0) {
            this.ownListings[0].selected = false
          }
          this.resetSuggestedAmountList()
          break;
        case 'COIN':
          //  console.log('COIN transactionTab:', this.transactionTab)
          this.transactionTab = 'COIN';
          if (this.isRevised) {
            // this.requestedAmount = this.dealData.requestedAmount
            if (this.dealData.callerIsReceiver) {
              // this.payer = !this.dealData.requestedAmountPaidByInitiatingUser ? '1' : '2'
              this.payer = '2'
            } else {
              // this.payer = this.dealData.requestedAmountPaidByInitiatingUser ? '1' : '2'
              this.payer = '1'
            }
          } else {
            // this.requestedAmount = this.requestedProduct.unitOfferValuation
            this.payer = this.requestedProduct.currentUserOfferOwner ? '2' : '1' // 1 - i will pay, 2- other will pay

            this.setDefaultSharableContactNumber()
          }

          // this.requestedAmount = this.dealData && this.dealData.requestedAmount ? this.dealData.requestedAmount : this.requestedProduct.unitOfferValuation
          if (this.dealData) {
            if (this.dealData.offeredOffers && this.dealData.offeredOffers.length) {
              this.requestedAmount = this.requestedProduct.unitOfferValuation
            } else {
              this.requestedAmount = this.dealData.requestedAmount
            }
          } else {
            this.requestedAmount = this.requestedProduct.unitOfferValuation
          }

          this.transactionMode = 'COIN';
          if (this.ownListings && this.ownListings.length > 0) {
            this.ownListings[0].selected = false
          }
          this.resetSuggestedAmountList()
          break;
        case 'PRODUCT':
          this.transactionTab = 'PRODUCT';
          if (!this.isRevised) {
            this.cuSelectedListing()
            if (this.ownListings && this.ownListings.length > 0) {
              // this.ownListings[0].selected = true            
              this.selectOwnListing(this.ownListings[0], null)
              // this.changePayerAmoutAndUser()
            }

            this.setDefaultSharableContactNumber()

          } else {
            // console.log('>>> dealData:', this.dealData)
            this.requestedAmount = this.dealData.requestedAmount

            //  console.log('>>> requestedAmount:', this.requestedAmount)

            if (this.authUser && this.authUser.uid && this.authUser.uid != this.currentUser.identityId) {
              // this.ownListings = null
              // this.ownListings = this.otherUserListings
              let offeredOffers = this.dealData.offeredOffers;//this.dealData.offeredOffers[0]
              this.selectOwnListing(this.dealData.offeredOffers[0], null)
              // console.log('>>> ownListings:', this.ownListings);
              // console.log('>>> offeredOffers:', offeredOffers);
            } else {
              this.selectOwnListing(this.ownListings[0], null)
              // console.log('>>> currentUserSelectedListing:', this.currentUserSelectedListing);
            }

            if (this.currentUserSelectedListing && this.dealData.offeredOffers && this.dealData.offeredOffers.length > 0) {
              // console.log(this.currentUserSelectedListing, this.dealData.offeredOffers)
              if (this.currentUserSelectedListing.offerId === this.dealData.offeredOffers[0].offerId) {
                this.requestedAmount = this.dealData.requestedAmount
              }
            } else {
              this.selectOwnListing(this.ownListings[0], null)
            }

            // console.log('>>> requestedAmount: 2', this.requestedAmount)

            // Strt Process payer
            if (this.dealData.callerIsReceiver) {
              this.payer = !this.dealData.requestedAmountPaidByInitiatingUser ? '1' : '2'
            } else {
              this.payer = this.dealData.requestedAmountPaidByInitiatingUser ? '1' : '2'
            }
            // End Process payer
          }
          break;
        default:

          // console.log('default transactionTab:', this.transactionTab)
          this.transactionTab = 'COIN';
          if (this.isRevised) {
            // this.requestedAmount = this.dealData.requestedAmount
            if (this.dealData.callerIsReceiver) {
              this.payer = !this.dealData.requestedAmountPaidByInitiatingUser ? '1' : '2'
            } else {
              this.payer = this.dealData.requestedAmountPaidByInitiatingUser ? '1' : '2'
            }
          } else {
            // this.requestedAmount = this.requestedProduct.unitOfferValuation
            this.payer = this.requestedProduct.currentUserOfferOwner ? '2' : '1' // 1 - i will pay, 2- other will pay

            this.setDefaultSharableContactNumber()
          }

          this.requestedAmount = this.dealData && this.dealData.requestedAmount ? this.dealData.requestedAmount : this.requestedProduct.unitOfferValuation

          this.transactionMode = 'COIN';
          if (this.ownListings && this.ownListings.length > 0) {
            this.ownListings[0].selected = false
          }

          this.resetSuggestedAmountList()
      }

    },

    setRedirectUrlInLocalStorage() {
      const path = this.$route.path
      if (process.client) {
        window.localStorage.setItem('offerRedirectPath', path)
      }
    },

    getProfileUrl(imageUrl) {
      if (imageUrl && !imageUrl.includes('deleted.jpeg')) {
        return imageUrl
      }
      return null
    },

    calculateSuggestedAmountList(requestedProductPrice) {
      this.calculateMinMaxLimitAmount(requestedProductPrice);

      if (requestedProductPrice >= 100) {
        const suggestedAmountObj = { active: true, amount: parseInt(requestedProductPrice) }
        this.suggestAmountList.push(suggestedAmountObj)

        this.discountPercentageList.map(percent => {
          const calculateAmount = requestedProductPrice - ((requestedProductPrice * percent) / 100)
          // const suggestedAmountObj = { active: false, amount: parseInt(calculateAmount) }
          const suggestedAmountObj = { active: false, amount: Math.ceil(calculateAmount) }
          this.suggestAmountList.push(suggestedAmountObj)
        });
      }
    },

    calculateMinMaxLimitAmount(amount) {
      // this.minimumLimitAmount = parseInt((amount * this.minimumLimitPercentage) / 100)
      // this.maximumLimitAmount = parseInt((amount * this.maximumLimitPercentage) / 100)

      this.minimumLimitAmount = Math.ceil((amount * this.minimumLimitPercentage) / 100)
      this.maximumLimitAmount = Math.ceil((amount * this.maximumLimitPercentage) / 100)
      //  console.log('calculateMinMaxLimitAmount:', this.minimumLimitAmount, this.maximumLimitAmount)
    },

    setRequestedAmount(selectedOffer, suggestedOfferIndex) {
      this.requestedAmount = selectedOffer.amount
      this.suggestAmountList.map(suggestedItem => {
        suggestedItem.active = false
        return suggestedItem
      });

      this.suggestAmountList[suggestedOfferIndex].active = true
    },
    resetSuggestedAmountList() {
      // console.log('===requestedAmount===',this.requestedAmount)
      this.suggestAmountList.map(suggestedItem => {
        suggestedItem.active = (suggestedItem.amount === +this.requestedAmount) ? true : false

        return suggestedItem
      });
    },
    minMaxValidate() {
      return +this.requestedAmount < this.minimumLimitAmount || +this.requestedAmount > this.maximumLimitAmount ? false : true
    },
    onRequestedAmountChange() {
      this.resetSuggestedAmountList()
    },
    showMobileShareConfirmationPopup() {
      this.showShareMobileConfirmPopup = true;
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

    setDefaultSharableContactNumber() {
      // set initiatorContact as user phone numbe default
      if (this.authUser && this.authUser.phoneNumber) {
        this.initiatorContact = this.remove91ToPhoneNumber(this.authUser.phoneNumber)
        this.initiatorAgreedShareContact = true
        this.initiatorAgreedShareContactDisabled = false
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

    processDiscountParcentageRange(){
      if(this.requestedProduct && this.requestedProduct.itemCondition === "New"){
        this.discountPercentageList = [5, 10, 15]
        this.minimumLimitPercentage = 85
      } else {
        this.discountPercentageList = [5, 10, 15, 20, 25, 30]
        this.minimumLimitPercentage = 70
      }
    },

    enableDisableTab(){
      if(this.dealData && this.dealData.transactionMode === "COIN"){
        this.showCoinTab = true
      }
      // showCoinTab
      // this.dealData
    }


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

input[type="text"]:focus~label,
input[type="number"]:focus~label,
input[type="number"]:focus~label,
input[type="text"]:not(:placeholder-shown)~label,
input[type="number"]:not(:placeholder-shown)~label,
textarea:focus~label,
textarea:not(:placeholder-shown)~label,
select:focus~label,
select:not([value='']):valid~label,
select:not(:placeholder-shown)~label {
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
input[type="number"]:focus~label,
select:focus~label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(72, 206, 243, var(--tw-text-opacity));
  left: 0px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


.nav-tabs .nav-link.active {
  color: #ffffff;
  border-color: #8bc63e;
  background-color: #8bc63e;
}

.arrow-left-info::before {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid rgba(0, 0, 0, 0.8);
  content: '';
  top: 45%;
  left: -9px;
  position: absolute;

}

.arrow-left-info {
  /* box-shadow: rgb(165 165 165) -1px -1px 10px 0px; */
}

.cash-active svg path {
  fill: #ffffff !important;
}
@media only screen and (min-device-width: 0px) and (max-device-width: 480px){

  .arrow-left-info::before{
    display:none;
  }
}
</style>