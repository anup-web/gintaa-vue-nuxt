<template>
  <div v-if="voucherDetails" class="redeem-listing-details-page pt-[80px] lg:pt-12 gift-voucher-details">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class="container max-w-8xl mx-auto md:px-8 2xl:px-16 pt-10 hidden md:flex">
      <breadcrumb v-if="breadcrumb.length > 0" :breadcrumb="breadcrumb" />
    </div>



    <div v-if="voucherDetails" class="redeem-product-block py-6 border-b border-gray-300 mb-5"
      :class="isSoldOut ? 'opacity-40 pointer-events-none' : ''">
      <div class="container max-w-8xl mx-auto  sm:px-4 md:px-8 2xl:px-16">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0">
          <div class="product-details-image mt-2 sm:mt-2 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0 px-3 md:px-0">
            <div class="product-img relative">
              <div v-if="isSoldOut"
                class="text-errortext text-xl absolute z-20 py-2 px-3 border-2 border-errortext top-7 -rotate-12 left-12">
                sold out</div>
              <img :src="filterImageUrl(voucherDetails.couponCodeResponse.imageUrls)" alt="image"
                class="transition duration-200 ease-in rounded max-w-full mx-auto" />
            </div>
          </div>

          <div
            class="gift-details-des ml-0 mt-6 sm:ml-0 sm:mt-6 md:ml-6 md:mt-0 lg:ml-0 lg:mt-0 xl:ml-0 xl:mt-0 2xl:ml-0 2xl:mt-0">
            <div class="p-4 lg:p-0 lg:pl-6 xl:pl-6">
              <div class="relative mb-3 mt-1">
                <h3 class="font-medium text-sm sm:text-base md:text-xl capitalize text-gray-700 break-words">
                  {{ voucherDetails.couponCodeResponse.couponName }}
                </h3>
              </div>

              <div class="w-full flex flex-row">
                <div class="text-sm text-gray-700">{{ $t('amount') }}</div>
              </div>

              <div class="w-full flex flex-col mt-2">
                <div class="w-full float-left">
                  <div v-for="item in priceList" :key="item.couponId" :class="{ 'border-green': item.selected }"
                    class="form-check relative float-left min-w-[50px] border flex justify-center items-center bg-transparent py-1 px-1 rounded mr-1 mb-2 sm:min-w-[50px] sm:px-1 sm:mr-1 sm:py-1 md:min-w-[90px] md:mr-2 md:px-3 md:py-1.5 lg:min-w-[90px] lg:mr-2 lg:px-3 lg:py-1.5 xl:min-w-[90px] xl:mr-2 xl:px-3 xl:py-1.5 2xl:min-w-[90px] 2xl:mr-2 2xl:px-3 2xl:py-1.5 text-white">
                    <input
                      class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer absolute top-0 left-0 opacity-0"
                      type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label @click="item.selected = !item.selected; selectPrice(priceList, item)"
                      class="form-check-label text-gray-800 cursor-pointer flex items-center" for="flexRadioDefault1">
                      <span :class="{ 'picon-select': item.selected }">
                      <svg width="8" height="12" viewBox="0 0 14 25" fill="current" class="text-gray-800" >
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z"
                          />
                      </svg>
                    </span>
                     
                      <span :class="{ 'text-green': item.selected }"
                        class="font-normal text-xs ml-1 sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
                        {{ item.price }}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- 
        <div  class="w-full flex flex-col mt-2">
          <div class="w-full float-left">
           
              <a  class="w-full flex flex-col cursor-pointer mt-2">
          <div class="w-full float-left">
            <div  v-for="item in priceList" :key="item.couponId"  class="form-check cursor-pointer relative float-left">
            <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer absolute top-0 left-0 opacity-0" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault1">
              <div class="float-left min-w-[50px] border flex justify-center items-center bg-transparent py-1 px-1 rounded mr-1 mb-2 sm:min-w-[50px] sm:px-1 sm:mr-1 sm:py-1 md:min-w-[90px] md:mr-2 md:px-3 md:py-1.5 lg:min-w-[90px] lg:mr-2 lg:px-3 lg:py-1.5 xl:min-w-[90px] xl:mr-2 xl:px-3 xl:py-1.5 2xl:min-w-[90px] 2xl:mr-2 2xl:px-3 2xl:py-1.5 border-green text-white">
                      <img  src="~/assets/images/offer/coin-value.svg" alt="coin" class="w-[12px] mr-[1px] sm:w-[12px] sm:mr-[1px] md:w-[18px] md:mr-[5px] lg:w-[18px] lg:mr-[5px] xl:w-[18px] xl:mr-[5px] 2xl:w-[18px] 2xl:mr-[5px]">
                      <span  class="font-normal text-xs ml-1 sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-green"> {{item.price}} </span>
              </div>
            </label>
          </div>
         
            </div>
          </a>
            </div>
        </div> -->

              <!-- <div class="w-full flex flex-row mt-4">
              <div class="relative z-0 w-[220px] mb-5">
                <input
                  type="number"
                  @input="handleChange"
                  v-model="perchaseDet.quantity"
                  @keydown="onlyNumber($event)"
                  name="quantity"
                  autocomplete="off"
                  placeholder=" "
                  required="required"
                  step="any"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                />
                <label
                  for="name"
                  class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm"
                  >{{ $t('quantity') }}</label
                >
                <span
                  v-if="isQuantitynotValidated"
                  class="absolute text-xs text-red-400 mt-px"
                >
                  {{ $t('quantityReq') }}</span
                >
              </div>
            </div> -->

              <div v-if="ischeckboxVisible" class="w-full flex items-center mt-4">

                <input v-model="perchaseDet.coinselected" @change="handleChange"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-0 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox" value="" name="coinselected" id="coinselected">

                <div class="text-sm text-firoza mr-4 font-medium">{{ $t('payUsingGintaaCoins') }}</div>
                <div class="flex items-center text-base text-gray-900 relative">
                  <img src="~/assets/images/offer/coin-value.svg" alt="coin"
                    class="w-[12px] mr-[1px] sm:w-[12px] sm:mr-[1px] md:w-[18px] md:mr-[5px] lg:w-[19px] lg:mr-[0px] xl:w-[18px] xl:mr-[0px] 2xl:w-[19px] 2xl:mr-[0px]" />
                  <div v-show="loading" class="absolute top-[-8px] right-[-40px] flex justify-center h-7 w-7">
                    <Spinner />
                  </div>
                  <span v-if="!loading" class="pl-2 font-medium">{{ spendingCoinAmount }}</span>
                </div>

                <!-- v-model="product.coinselected" @change="handleChange" @blur="changeSaved" -->
              </div>

              <div class="w-full mt-2">


                <div class="flex items-center" v-if=" spendingCashAmount !== null">
                  <div class="text-sm text-gray-900 mr-2">{{ $t('payingYouramountby') }} :</div>
                  <div class="flex items-center text-base text-gray-900 relative">

                    <svg width="8" height="13" viewBox="0 0 14 25" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z"
                        fill="#4c3f3f" />
                    </svg>
                    <span  class="pl-1">{{ spendingCashAmount }}</span>
                  </div>
                </div>

                <!-- v-model="product.coinselected" @change="handleChange" @blur="changeSaved" -->
              </div>

              <!-- <div class="w-full flex flex-row mt-2">
              <div class="text-sm text-gray-700 font-medium">{{ $t('availableBalance') }}</div>
            </div> -->

              <div class="w-full flex flex-row mt-4">
                <div class="relative z-0 w-full mb-8">
                  <input type="text" @input="handleChange" v-model="perchaseDet.email" name="email" autocomplete="off"
                    placeholder=" " required="required" step="any"
                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
                  <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{
                      $t('email')
                  }}</label>
                  <span v-if="emailValidationError" class="absolute text-xs text-red-400 mt-px">
                    {{ $t('enterAValidEmail') }}</span>

                  <span v-if="emailReqError" class="absolute text-xs text-red-400 mt-px">
                    {{ $t('emailReq') }}</span>
                </div>
              </div>


              <div v-if="voucherDetails && voucherDetails.couponType === 'PHY_OTP'" class="w-full flex flex-row mt-4">
                <div class="relative z-0 w-full mb-8">
                  <input type="text" @input="handleChange" v-model="perchaseDet.mobileNo" name="mobile"
                    autocomplete="off" @keydown="isNumber($event)" maxlength="10" placeholder=" "
                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
                  <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{
                      $t('mobileNumber')
                  }}</label>
                  <span v-if="mobileValidationError" class="absolute text-xs text-red-400 mt-px">
                    {{ $t('cl_invalidMobile') }}</span>

                  <span v-if="mobileReqError" class="absolute text-xs text-red-400 mt-px">
                    {{ $t('mobileReq') }}</span>

                  <!-- <span 
                  
                  class="absolute text-xs text-green-400 mt-px"
                >
                  *{{ $t('mobileRequiredMsg') }}</span> -->
                  <div class=" md:block lg:block xl:block 2xl:block absolute top-[16px] right-0">
                    <div class="group relative">
                      <div class="w-5 h-5 flex items-center justify-center bg-gray-400 rounded-full">
                        <span class="text-sm text-white rotate-180">!</span>
                      </div>

                      <div
                        class="absolute top-[-28px] right-[30px] flex flex-col items-center hidden mb-6 group-hover:flex">
                        <span
                          class="relative w-[200px] rounded text-center z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">{{
                              $t("mobileRequiredMsg")
                          }}</span>
                        <div class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute right-[-6px] top-[40px]"></div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              <div
                v-if="voucherDetails && (voucherDetails.couponType === 'PHYSICAL' || voucherDetails.couponType === 'PHY_OTP')"
                class="relative z-0 mb-6 w-full">
                <textarea @input="handleChange" v-model="perchaseDet.address" name="address" placeholder=" "
                  maxlength="3000"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-[11px]"></textarea>
                <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{
                    $t('address')
                }}</label>
                <span v-if="isAddressReq" class="absolute text-xs text-red-400 mt-px">
                  {{ $t('addressReqMessage') }}</span>

              </div>



              <div
                v-if="voucherDetails && (voucherDetails.couponType === 'PHYSICAL' || voucherDetails.couponType === 'PHY_OTP')"
                class="flex mb-2 justify-end">
                <button v-if="showselectAddressbtn" @click="selectAddress"
                  class="bg-white text-firoza border border-firoza  py-1 px-3 h-10 sm:h-10 rounded  text-base capitalize mr-2">
                  <span>{{ $t('selectAddeess') }}</span>
                </button>

                <!-- v-if="showAddaddressBtn" -->
                <button @click="addAnotherAddress({ mode: 'add', addressDet: addressDet })"
                  class="bg-white text-firoza border border-firoza  py-1 px-3 h-10 sm:h-10 rounded  text-base capitalize">
                  <span>{{ $t('addAddress') }}</span>
                </button>
              </div>

              <div v-if="showRedeemBalanceErrmsg" class="w-full flex flex-row">
                <div class="text-sm text-red-500 bg-red-100 rounded px-4 py-4 mt-3">
                  {{ $t('insufficientBal') }}
                  <!-- <a :href="localePath('/wallet/my-wallet')"
                    class="text-firoza font-medium underline decoration-firoza underline-offset-4">{{ $t('myWalletIn')
                    }}</a> -->
                  {{ $t('insufficientbal') }}
                </div>
              </div>

              <div class="flex items-center" v-if="spendingCashAmount !== null">
                <div class="text-base text-firoza mr-2 font-medium capitalize">{{ $t('payingYouramountby') }} :</div>
                <div class="flex items-center text-xl text-gray-900 relative font-medium">

                  <svg width="11" height="15" viewBox="0 0 14 25" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z"
                      fill="#4c3f3f" />
                  </svg>
                  <span  class="pl-1">{{ spendingCashAmount }}</span>
                </div>
              </div>

              <div
                class="w-full flex flex-row mt-0 bg-white shadow-lg p-2 fixed z-30 left-0 bottom-0 sm:fixed sm:mt-0 sm:p-2 sm:shadow-lg md:relative md:mt-2 md:p-0 md:shadow-none lg:relative lg:mt-2 lg:p-0 lg:shadow-none xl:relative xl:mt-2 xl:p-0 xl:shadow-none 2xl:relative 2xl:mt-2 2xl:p-0 2xl:shadow-none">
                <button @click="showConfirmPopup" :disabled="disableBtn"
                  :class="disableBtn ? 'opacity-40 disabled cursor-not-allowed' : 'opacity-100'"
                  class="bg-green text-white font-bold py-1 px-3 h-10 sm:h-12 rounded w-full sm:w-full md:w-56 text-base capitalize">
                  <span>{{ $t('buyNow') }}</span>
                </button>

                <!-- v-if=" showselectAddressbtn" -->

              </div>

            </div>

          </div>

        </div>
        <div class="w-full flex flex-col mt-2">
          <div class="w-full flex flex-row">
            <div class="text-[11px] text-gray-600 font-medium px-3 md:px-0">Note:</div>
          </div> 
          <div class="w-full mt-1 px-3 md:px-0">
            <ul class="list-none"> 
              <li class="flex items-start mb-2 relative pl-2">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[4px] absolute top-0 left-0"><rect width="10" height="10" fill="#48CEF3"></rect></svg>
                <span class="text-[10px] text-gray-500 pl-2">{{$t('noteVouDis')}}</span>
              </li>
              <!-- <li class="flex items-start mb-2 relative pl-2 ">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[4px] absolute top-0 left-0"><rect width="10" height="10" fill="#48CEF3"></rect></svg>
                <span class="text-[10px] text-gray-500 pl-2 font-medium">{{$t('note2VouDis')}}</span>
              </li> -->
            </ul>
          </div>
        </div> 
       
       
        <div v-if="termAndConditions && termAndConditions.length > 0" class="pt-8 border-gray-100 border-0 mt-1">
          <div class="text-base text-gray-600 font-medium px-3 md:px-0">
            {{ $t('termsConGift') }}
          </div>
          <div v-for="(item, index) in termAndConditions" :key="index"
            class="relative text-[12px] md:text-sm text-gray-500 pt-2  pl-5">
            <svg class="mt-[11px] absolute top-0 left-0" width="10" height="10" viewBox="0 0 10 10" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect width="10" height="10" fill="#48CEF3" />
            </svg>
            {{ item }}
          </div>

        </div>
      </div>

    </div>

    <div class="single-product-block mb-12">
      <div class="container max-w-8xl mx-auto md:px-8 2xl:px-16 pt-4  md:flex">
        <div class="w-full flex flex-col">
          <div class="w-full flex flex-row">
            <div class="text-base text-gray-600 font-medium px-3 md:px-0">
              {{ $t('howToredeem') }}
            </div>
          </div>
          <div class="w-full mt-2 px-3 md:px-0">
            <ul class="list-none">
              <li class="flex items-start mb-2 relative pl-2">
                <svg class="mt-[5px] absolute top-0 left-0" width="10" height="10" viewBox="0 0 10 10" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="10" height="10" fill="#48CEF3" />
                </svg>
                <span class="text-sm text-gray-500 pl-4">{{ $t('redeem1') }}</span>
              </li>
              <li class="flex items-start mb-2 relative pl-2">
                <svg class="mt-[5px] absolute top-0 left-0" width="10" height="10" viewBox="0 0 10 10" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="10" height="10" fill="#48CEF3" />
                </svg>
                <span class="text-sm text-gray-500 pl-4">{{ $t('redeem2') }}</span>
              </li>
              <li class="flex items-start mb-2 relative pl-2">
                <svg class="mt-[5px] absolute top-0 left-0" width="10" height="10" viewBox="0 0 10 10" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="10" height="10" fill="#48CEF3" />
                </svg>
                <span class="text-sm text-gray-500 pl-4">{{ $t('redeem3') }}</span>
              </li>
              <li class="flex items-start mb-2 relative pl-2">
                <svg class="mt-[5px] absolute top-0 left-0" width="10" height="10" viewBox="0 0 10 10" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect width="10" height="10" fill="#48CEF3" />
                </svg>
                <span class="text-sm text-gray-500 pl-4">{{ $t('redeem4') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <sharePickupaddress v-if="showaddressList && userAllAddress && userAllAddress.length > 0"
      :allAddress="userAllAddress" @addAddresstoProfile="addAddresstoProfile"
      @closeAddressListModal="closeAddressListModal" @selectedAddress="selectedAddress" />

    <GMap v-if="showAddaddressPopup" :editOrAddAddressDetails="editOrAddAddressDetails" />


    <!--footer section goes here-->
    <Footer />

    <!-- start payment modal -->
    <div v-if="showBuyNowConfirmation" class="relative z-50" aria-labelledby="modal-title" role="dialog"
      aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">

            <div @click="cancelBuy" class="absolute top-0 right-0 block pt-4 pr-4 sm:block">
              <button type="button"
                class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                @click="open = false">
                <span class="sr-only">Close</span>
                <svg class="h-6 w-6" x-description="Heroicon name: outline/x-mark" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div>
              <div class="mx-auto flex items-center justify-center">
                <img :src="filterImageUrl(voucherDetails.couponCodeResponse.imageUrls)" alt="image"
                  class="w-14 h-14 rounded-full">
              </div>
              <div class="w-full mt-1 text-center text-base font-medium leading-6 text-gray-900">
                {{ voucherDetails.couponCodeResponse.couponName }}</div>
              <div class="w-full mt-6">
                <h2 class="text-base text-gray-900 font-medium">{{ $t('priceDetails') }}</h2>

                <div class="mt-4">
                  <div class="flex items-center justify-between mb-3">
                    <div class="text-sm text-gray-500">
                      {{ $t('giftCardQuantity') }}
                    </div>
                    <div class="flex items-center text-sm text-gray-900 font-medium">
                      <svg width="12" height="12" viewBox="0 0 12 21" fill="none">
                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                          d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z"
                          fill="black" />
                      </svg>
                      <span class="pl-0.5">{{ perchaseDet.price }}</span>

                    </div>
                  </div>
                  <div v-if="perchaseDet.coinselected && spendingCoinAmount !== 0"
                    class="flex items-center justify-between mb-3">
                    <div class="flex items-center text-sm text-gray-500">
                      <span> {{ $t('savingWithGintaa') }} </span>
                      <img src="~/assets/images/offer/coin-value.svg" alt="coin" class="w-[20px] h-[20px] ml-2">
                    </div>
                    <div class="flex items-center text-sm text-gray-900 font-medium">
                      <span class="mr-2 text-[#01A411]">-</span>
                      <span class="pl-0.5 text-[#01A411]">{{ spendingCoinAmount }}</span>
                    </div>
                  </div>



                  <div v-if="spendingCashAmount !== null"
                    class="w-full border-dashed border-t border-gray-200 pt-2 flex items-center justify-between mt-2">
                    <div class="text-sm text-gray-900 font-medium">
                      {{ $t('payingYouramountby') }}
                    </div>
                    <div class="flex items-center text-base text-gray-900 font-medium">
                      <svg width="12" height="12" viewBox="0 0 12 21" fill="none">
                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                          d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z"
                          fill="black" />
                      </svg>
                      <span class="pl-0.5">{{ spendingCashAmount }}</span>

                    </div>
                  </div>




                </div>


              </div>
              <!-- <div class="mt-3 text-center sm:mt-5">
                <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                {{ $t('areYouSure') }}
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ $t('youAreGointtoSpend',{coinAmount: totalCoinNeed}) }}
                     
                  </p>
                </div>
              </div> -->
            </div>

            <div v-if="errorMsg" class="w-full flex flex-row justify-center items-center absolute bottom-0 left-0">
              <div class="text-[11px] text-red-400">{{ errorMsg }}</div>
            </div>

            <div class="mt-5 sm:mt-6">
              <button @click="buyCoupnNow" type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-firoza px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-firoza focus:outline-none focus:ring-2 focus:ring-firoza focus:ring-offset-2 sm:text-sm">

                <span v-show="!loading">{{ $t('buyNow') }}</span>
                <Spinner v-show="loading" />
              </button>
              <!-- <button
                @click="cancelBuy"
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-firoza px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-firoza focus:outline-none focus:ring-2 focus:ring-firoza focus:ring-offset-2 sm:text-sm"
              >
                Cancel
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end payment modal -->

    <!-- start Of Success Message -->

    <div v-if="successConfirmation" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">

            <!-- <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                <button  type="button"  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="open = false">
                  <span class="sr-only">Close</span>
                  <svg class="h-6 w-6" x-description="Heroicon name: outline/x-mark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
</svg>
                </button>
              </div> -->

            <div>
              <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-5">
                <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                  {{ $t('youLucky') }}
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ $t('giftCardSuccessMasg') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">
              <a :href="localePath('/wallet/my-wallet')"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-firoza px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-firoza focus:outline-none focus:ring-2 focus:ring-firoza focus:ring-offset-2 sm:text-sm">{{
                    $t('gobacktoWallet')
                }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <addMobile v-if="showAddMobilePopup" @closeAddmobilePopup="closeAddmobilePopup" @otpValidated="otpValidated"
      :mobNumber="mobNumber" />
    <!-- End Of success message -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import sharePickupaddress from '~/components/modal/sharePickupaddress.vue';
export default {
  components: { sharePickupaddress },
  middleware: "authenticated",
  data() {
    return {
      ischeckboxVisible: true,
      spendingCoinAmount: null,
      spendingCashAmount: null,
      showaddressList: false,
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
      activeOfferCount: null,
      voucherDetails: null,
      termAndConditions: [],
      isPhoneNoEsixtsinProfile: false,
      breadcrumb: [{}],
      showAddaddressPopup: false,
      editOrAddAddressDetails: {},
      netavailableReward: null,
      perchaseDet: {
        couponId: null,
        coinselected: true,
        price: null,
        email: null,
        mobileNo: null,
        quantity: 1,
        address: null,
        coinsToUse: null,
        returnUrl: ''
      },
      voucherPrice: null,
      disableBtn: true,
      showRedeemBalanceErrmsg: false,
      emailValidationError: false,
      emailReqError: false,
      mobileValidationError: false,
      mobileReqError: false,
      couponCodeResponse: {
        couponCode: '',
        couponName: '',
        imageUrl: '',
        priceList: []
      },
      priceList: [],
      loading: true,
      totalCoinNeed: null,
      showBuyNowConfirmation: false,
      successConfirmation: false,
      errorMsg: '',
      userAllAddress: [],
      showselectAddressbtn: false,
      showAddaddressBtn: false,
      analyticsData: {},
      isQuantitynotValidated: false,
      isAddressReq: false,
      // hotListing: false
      isSoldOut: false,
      mobNumber: null,
      showAddMobilePopup: false
    }
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
  },
  created() {
    this.$on("closeModal", (section) => {
      this.showAddaddressPopup = false;
      if (section) {
        console.log("section", section)
        this.userAllAddress = []
        this.getUserAllAddress()
      }
    });
  },
  async fetch() {
    //  this.loading = true
    try {
      const data = await this.$axios.get(`${this.$config.API_BASE}/wallet/v1/wallet/coupon/get-by-code-and-price?couponCode=${this.$route.params.vid}`)
      const voucherList = data.data.payload
      console.log("voucherList", voucherList)
      for (var i = 0; i < voucherList.length; i++) {
        this.priceList.push({
          couponId: voucherList[i].couponId,
          price: voucherList[i].price,
          maxCoinLimit: voucherList[i].maxCoinLimit,
          selected: i === 0 || false,
        });
      }

      console.log("this.priceList",this.priceList)
      this.perchaseDet.couponId = this.priceList[0].couponId
      this.perchaseDet.price = this.priceList[0].price
      this.voucherDetails = data.data.payload[0]
     // console.log("this.voucherDetails", this.voucherDetails, this.voucherDetails.couponCodeResponse.couponName, this.voucherDetails.couponCodeResponse.couponCode)
      if (this.voucherDetails.tnc) {
        this.termAndConditions = JSON.parse(this.voucherDetails?.tnc)
      }
      if (this.voucherDetails && this.voucherDetails?.couponCodeResponse) {
        this.isSoldOut = !this.voucherDetails?.couponCodeResponse.available || false
      }

      if(this.voucherDetails){
        this.getMywalletDetails()
      }
      // console.log("this.voucherDetails",this.voucherDetails)
      this.breadcrumb = [{
        name: 'Voucher Details',
      },
      {
        name: this.voucherDetails?.couponCodeResponse.couponName
      }
      ]
    } catch (error) {
    }
  },
  beforeMount() {
    // this.getUserAllAddress()
    // this.getUserDetails()
    // this.getMywalletDetails()
  },
  mounted() {
    this.getUserAllAddress()
    this.getUserDetails()
    this.getMywalletDetails()
    
   // this.getMywalletDetails()
    //console.log("addresses",this.addresses)
    //  this.checkFormValidation()
  },
  methods: {
    closeAddressListModal() {
      this.showaddressList = false
    },
    closeAddmobilePopup() {
      this.showAddMobilePopup = false
      this.loading = false
    },
    otpValidated() {
      this.closeAddmobilePopup()
      this.isPhoneNoEsixtsinProfile = true
      this.buyCoupnNow()
      //this.isPhoneNoExistsToProfile()
    },
    selectedAddress(selectedAddress) {
      this.closeAddressListModal()
      this.perchaseDet.address = this.getAddressitemDet(selectedAddress)
      if (this.perchaseDet.address) {
        this.isAddressReq = false
      }
      this.checkFormValidation()
    },
    addAddresstoProfile(addressDet) {
      addressDet.addressDet.name = this.authUser.displayName
      addressDet.addressDet.email = this.authUser.email
      addressDet.addressDet.phoneNumber = this.authUser.phoneNumber
      this.editOrAddAddressDetails = addressDet
      this.showAddaddressPopup = true
      // console.log("addddAddressDetails",this.editOrAddAddressDetails)
    },
    async getUserAllAddress() {
      try {
        let url = `/users/v1/user/address/all`;
        const data = await this.$axios.$get(url);
        this.userAllAddress = data.payload;
        if (this.userAllAddress && this.userAllAddress.length > 0) {
          this.showselectAddressbtn = true
          this.showAddaddressBtn = false
        } else {
          this.showselectAddressbtn = false
          this.showAddaddressBtn = true
        }
        
        if (this.userAllAddress && this.userAllAddress.length === 0) {
          this.isAddressReq = true
        }
        if (this.userAllAddress && this.userAllAddress.length > 0) {
          const DefaultAddress = this.userAllAddress.filter(address => address.default === true)
          this.perchaseDet.address = this.getAddressitemDet(DefaultAddress[0])
          if (this.perchaseDet.address === null) {
            this.isAddressReq = true
          } else {
            this.isAddressReq = false
          }
          this.checkFormValidation()
        }
      } catch (error) {
        console.log(error);
      }
    },
    getAddressitemDet(addressItemDet) {
      const addDetArray = []
      if (addressItemDet) {
        addDetArray.push(addressItemDet?.name + `\n` + addressItemDet?.addressLine, addressItemDet?.flatNo, addressItemDet?.area,
          addressItemDet?.city, addressItemDet?.landmark, addressItemDet?.state, addressItemDet?.zip)
      }
      if (addDetArray.length) {
        var filtered = addDetArray.filter(function (el) {
          return el != null;
        });
        return filtered.join();
      }
    },
    filterImageUrl(imageUrls) {
      if (imageUrls) {
        return imageUrls['620x515']
      }
    },
    selectPrice(pricelist, selectedItem) {
     console.log("selectedItem",selectedItem,pricelist)
      this.perchaseDet.couponId = selectedItem.couponId,
        this.perchaseDet.price = selectedItem.price,
        this.checkFormValidation()
      pricelist.map((el) => {
        if (selectedItem.price !== el.price) {
          el.selected = false
        } else {
          el.selected = true
        }
        return el
      })
      let selectedPrice = this.priceList.filter((item) => item.selected === true)
      this.setCoinAndCashAmount(this.netavailableReward)
      // this.setCoinAndCashAmount()
    },
    async getUserDetails() {
      try {
        this.loading = true
        const url = "/users/v1/user/profile";
        const data = await this.$axios.$get(url);
        // console.log("data",data)
        if (data.payload) {
          if (data.payload.mobile) {
            this.isPhoneNoEsixtsinProfile = true
          } else {
            this.isPhoneNoEsixtsinProfile = false
          }
          this.perchaseDet.email = data.payload.email ? data.payload.email : null
          this.perchaseDet.mobileNo = data.payload.mobile ? this.remove91ToPhoneNumber(data.payload.mobile) : null
          // mobileValidationError
          if (this.perchaseDet.email) {
            this.emailReqError = false
            this.checkFormValidation()
          }
          if (this.perchaseDet.mobileNo) {
            this.mobileReqError = false
            this.checkFormValidation()
          }
          if (this.perchaseDet.email === null) {
            this.emailReqError = true
          }
          if (this.perchaseDet.mobileNo === null) {
            this.mobileReqError = true
          }
        } else {
          // this.showAllConv = false;
        }
        this.loading = false
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    remove91ToPhoneNumber(phone) {
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
    async getMywalletDetails() {
      try {
        const url = "/wallet/v1/wallet/details";
        const data = await this.$axios.$get(url);
        if (data.payload) {
          if (data.payload.COIN) {
            // this.netavailableReward = data.payload.COIN.netCount;
            this.netavailableReward = data.payload.COIN.usableBalance ? data.payload.COIN.usableBalance : 0;
            // console.log("netavailableReward", this.netavailableReward)
            // console.log("this.priceList", this.priceList)
            // console.log(this.priceList.filter((item) => item.selected === true))
            let selectedPrice = this.priceList.filter((item) => item.selected === true)
            this.setCoinAndCashAmount(this.netavailableReward)
            this.checkFormValidation()
          }
        } else {
          // this.showAllConv = false;
        }
        // this.loading = false;
      } catch (error) {
        console.log(error);
        //this.loading = false;
      }
    },
    setCoinAndCashAmount(myNetavailableReward) {
      let selectedPrice = this.priceList.filter((item) => item.selected === true)
      //console.log("selectedPrice", selectedPrice)
      //console.log("this.voucherDetails.couponCodeResponse.couponCode", this.voucherDetails?.couponCodeResponse?.couponCode)
      if (selectedPrice && selectedPrice[0].maxCoinLimit === null) {
        this.ischeckboxVisible = true
        // console.log("yes maxcoin limit is  null")
        // this.perchaseDet.coinselected = true
        if (selectedPrice && this.perchaseDet.coinselected) {
          if (myNetavailableReward >= selectedPrice[0].price) {
            this.spendingCoinAmount = selectedPrice[0].price
            this.spendingCashAmount = null
          } else if (myNetavailableReward < selectedPrice[0].price) {
            this.spendingCoinAmount = myNetavailableReward
            this.spendingCashAmount = selectedPrice[0].price - myNetavailableReward
          }
        } else if (selectedPrice && !this.perchaseDet.coinselected) {
          if (myNetavailableReward >= selectedPrice[0].price) {
            this.spendingCoinAmount = selectedPrice[0].price
            this.spendingCashAmount = selectedPrice[0].price
          } else {
            this.spendingCoinAmount = myNetavailableReward
            this.spendingCashAmount = selectedPrice[0].price
          }
        }
      } else if (selectedPrice && selectedPrice[0].maxCoinLimit && selectedPrice[0].maxCoinLimit !== 0) {
        this.ischeckboxVisible = true
        // this.perchaseDet.coinselected = true
        // console.log("Yes maxlimit coin Exists")
        if (selectedPrice && this.perchaseDet.coinselected) {
          console.log("checkbox  selected and maxlimit exists")
          if (myNetavailableReward >= selectedPrice[0].maxCoinLimit) {
            this.spendingCoinAmount = selectedPrice[0].maxCoinLimit//selectedPrice[0].price * .50
            this.spendingCashAmount = +selectedPrice[0].price - selectedPrice[0].maxCoinLimit
          } else if (myNetavailableReward < selectedPrice[0].maxCoinLimit) {
            this.spendingCoinAmount = myNetavailableReward
            this.spendingCashAmount = selectedPrice[0].price - myNetavailableReward
          }
        } else if (selectedPrice && !this.perchaseDet.coinselected) {
          // console.log("checkbox not selected but maxlimit exists")
          if (myNetavailableReward >= selectedPrice[0].maxCoinLimit) {
            this.spendingCoinAmount = selectedPrice[0].maxCoinLimit
            this.spendingCashAmount = selectedPrice[0].price
          } else if (myNetavailableReward < selectedPrice[0].maxCoinLimit) {
            this.spendingCoinAmount = myNetavailableReward
            this.spendingCashAmount = selectedPrice[0].price
          }
        }
      } else if (selectedPrice && selectedPrice[0].maxCoinLimit === 0) {
        // this.perchaseDet.coinselected = false
        this.ischeckboxVisible = false
        this.spendingCoinAmount = selectedPrice[0].maxCoinLimit
        this.spendingCashAmount = +selectedPrice[0].price
        console.log("Yes maxlimit is 0")
        //  if (selectedPrice && this.perchaseDet.coinselected) {
        //    if (myNetavailableReward >= selectedPrice[0].maxCoinLimit) {
        //      this.spendingCoinAmount = selectedPrice[0].maxCoinLimit
        //      this.spendingCashAmount = +selectedPrice[0].price - selectedPrice[0].maxCoinLimit
        //    } else if (myNetavailableReward < selectedPrice[0].maxCoinLimit) {
        //      this.spendingCoinAmount = myNetavailableReward
        //      this.spendingCashAmount = selectedPrice[0].price - myNetavailableReward
        //    }
        //  } else if (selectedPrice && !this.perchaseDet.coinselected) {
        //    if (myNetavailableReward >= selectedPrice[0].maxCoinLimit) {
        //      this.spendingCoinAmount = selectedPrice[0].maxCoinLimit
        //      this.spendingCashAmount = selectedPrice[0].price
        //    } else if (myNetavailableReward < selectedPrice[0].maxCoinLimit) {
        //      this.spendingCoinAmount = myNetavailableReward
        //      this.spendingCashAmount = selectedPrice[0].price
        //    }
        //  }
      }
      //  this.spendingCoinAmount = selectedPrice[0].price
    },
    showConfirmPopup() {
      this.showBuyNowConfirmation = true
    },
    selectAddress() {
      this.showaddressList = true
    },
    addAnotherAddress(addressDet) {
      addressDet.addressDet.name = this.authUser.displayName
      addressDet.addressDet.email = this.authUser.email
      addressDet.addressDet.phoneNumber = this.authUser.phoneNumber
      this.editOrAddAddressDetails = addressDet
      this.showAddaddressPopup = true
      console.log("addddAddressDetails", this.editOrAddAddressDetails)
    },
    cancelBuy() {
      this.showBuyNowConfirmation = false
      this.errorMsg = ''
    },
    getReturnUrl(paymentGateway = 'CASHFREE') {
      let returnPath = (this.returnUrl) ? this.localePath(this.returnUrl) : this.localePath('/wallet/my-wallet')
      // let returnUrl = (paymentGateway === 'CASHFREE')? returnPath+'?order_id={order_id}&order_token={order_token}' : returnPath;
      let returnUrl = (paymentGateway === 'CASHFREE')? returnPath+'?order_id={order_id}' : returnPath;
      returnUrl = window.location.origin + returnUrl;
      this.perchaseDet.returnUrl =  returnUrl;
    },
    async buyCoupnNow() {
      
      // if (!this.isPhoneNoEsixtsinProfile) {
      //   this.showAddMobilePopup = true
      //   return false
      // }
      this.loading = true
      const mobNoAddedInProfile = await this.checkIfmobileAddedInProfile()

      if(!mobNoAddedInProfile){
        this.showAddMobilePopup = true
        return false
      }
      this.mobNumber = this.perchaseDet.mobileNo ? this.perchaseDet.mobileNo : null
      try {
        const url = "/wallet/v1/wallet/coupon/purchase";
        if (this.voucherDetails && this.voucherDetails.couponType === 'ONLINE') {
          this.perchaseDet.address = null
        }
        
        if (this.perchaseDet.coinselected && this.spendingCoinAmount) {
          this.perchaseDet.coinsToUse = this.spendingCoinAmount
        }
        if (!this.perchaseDet.coinselected) {
          this.perchaseDet.coinsToUse = null
        }
        this.getReturnUrl('CASHFREE');
        let payload = {
          couponId: this.perchaseDet.couponId,
          email: this.perchaseDet.email,
          quantity: this.perchaseDet.quantity,
          paymentGateway: "CASHFREE",
          address: this.perchaseDet.address,
          mobileNo: this.perchaseDet.mobileNo,
          coinsToUse: this.perchaseDet.coinsToUse ? this.perchaseDet.coinsToUse : 0,
          returnUrl:this.perchaseDet.returnUrl,
          walletTypeId: "COIN"
        }
      
        this.analyticsData = payload
        const data = await this.$axios.$post(url, payload);

        
        if (data.success) {
          this.loading = false
          this.showBuyNowConfirmation = false

         if(data.payload?.paymentOrderData !== null){
         const orderId = data.payload?.paymentOrderData.orderId;
         const amount = data.payload?.paymentOrderData.amount;
         data.payload.paymentOrderData.paymentGateway = payload.paymentGateway 
         this.$router.push({ path: '/payment/'+orderId, query: data.payload.paymentOrderData })
          }else{
            this.successConfirmation = true
          }
         
          
         // 
          this.callCoinRedeptionEvent(this.analyticsData)
        } else {
          // this.showAllConv = false;
        }
        this.loading = false;
      } catch (error) {
        this.errorMsg = error?.response?.data.message
        this.loading = false;
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
    async callCoinRedeptionEvent(analyticsDet) {
      try {
        const analyticsData = {
          channel_id: 'WEB',
          user_id: this.authUser.uid,
          voucher_code: this.voucherDetails?.couponCodeResponse?.couponCode,
          voucher_name: this.voucherDetails?.couponCodeResponse?.couponName,
          voucher_value: this.voucherDetails?.price,
          voucher_quantity: analyticsDet.quantity
        };
        await this.$fire.analytics.logEvent('gintaa_coin_redemption_success', analyticsData)
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },
    handleChange(evt) {
      let keyName = evt.target.name;
      //console.log("keyName",keyName)
      if (evt.target.name === 'quantity') {
        if (evt.target.value < 1) {
          this.perchaseDet.quantity = null
          this.isQuantitynotValidated = true
          this.checkFormValidation()
        } else {
          this.isQuantitynotValidated = false
          if (evt.target.value >= 100) {
            let qty = evt.target.value
            this.perchaseDet.quantity = qty.substring(0, qty.length - 1)
          }
          this.checkFormValidation()
        }
      } else if (evt.target.name === 'email') {
        // if(this.mobileValidationError){
        //   this.disableBtn = true
        // }
        if (evt.target.value) {
          if (!this.$isValidEmail(evt.target.value)) {
            this.emailValidationError = true
            this.emailReqError = false
            this.disableBtn = true
          } else {
            this.emailValidationError = false
            this.emailReqError = false
            this.checkFormValidation()
            //  this.emailReqError = true
          }
        } else {
          this.emailReqError = true
          this.emailValidationError = false
          this.checkFormValidation()
        }
      } else if (evt.target.name === 'address') {
        if (evt.target.value) {
          this.perchaseDet.address = evt.target.value
          this.isAddressReq = false
          this.checkFormValidation()
        } else {
          this.perchaseDet.address = null
          this.isAddressReq = true
          this.checkFormValidation()
        }
      } else if (evt.target.name === 'mobile') {
        if (evt.target.value) {
          if (!this.$isValidMobile(evt.target.value)) {
            this.mobileValidationError = true
            this.mobileReqError = false
            this.disableBtn = true
          } else {
            this.mobileValidationError = false
            this.mobileReqError = false
            this.checkFormValidation()
          }
        } else {
          this.mobileValidationError = false
          this.mobileReqError = true
          this.checkFormValidation()
        }
        //mobileValidationError
      } else if (evt.target.name === 'coinselected') {
        this.setCoinAndCashAmount(this.netavailableReward)
      }
    },
    checkFormValidation() {
      // if(this.perchaseDet.price && this.perchaseDet.quantity){
      //   this.isSufficientCoinAvailable()
      // }
      if (this.voucherDetails && this.voucherDetails.couponType === 'ONLINE') {
        //  console.log("Check validation Called --------------------------------------- online")
        if (this.perchaseDet.email && this.perchaseDet.price && this.perchaseDet.quantity && !this.emailValidationError) {
          this.disableBtn = false
          //  this.isSufficientCoinAvailable()
        } else {
          this.disableBtn = true
        }
      } else if (this.voucherDetails && this.voucherDetails.couponType === 'PHYSICAL') {
        if (this.perchaseDet.email && this.perchaseDet.address && this.perchaseDet.price && this.perchaseDet.quantity && !this.emailValidationError) {
          //this.isSufficientCoinAvailable()
          this.disableBtn = false
        } else {
          this.disableBtn = true
        }
      } else if (this.voucherDetails && this.voucherDetails.couponType === 'PHY_OTP') {
        if (this.perchaseDet.email && this.perchaseDet.mobileNo && this.perchaseDet.address && this.perchaseDet.price && this.perchaseDet.quantity && !this.emailValidationError && !this.mobileValidationError) {
          // this.isSufficientCoinAvailable()
          this.disableBtn = false
        } else {
          this.disableBtn = true
        }
      }
    },
    isSufficientCoinAvailable() {
      const totalCoinstoBuy = this.perchaseDet.price * this.perchaseDet.quantity
      this.totalCoinNeed = this.perchaseDet.price * this.perchaseDet.quantity
      if (+totalCoinstoBuy > +this.netavailableReward) {
        this.disableBtn = true
        this.showRedeemBalanceErrmsg = true
      } else {
        this.disableBtn = false
        this.showRedeemBalanceErrmsg = false
      }
    },
    isNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else if (evt.key === '0' && (evt.target.value == "" || evt.target.value == null)) {
        evt.preventDefault();
      } else if ((evt.key >= '!' && evt.key <= ')') || evt.key === '@' || evt.key === '^' || evt.key === '*') {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    onlyNumber(evt) {
      let value = evt.target.value;
      if (evt.key === '.') {
        evt.preventDefault();
      } else if (evt.key === '-') {
        evt.preventDefault();
      } else if (evt.key === '+') {
        evt.preventDefault();
      } else if (evt.key === 'e' || evt.key === 'E') {
        evt.preventDefault();
      }
    },
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
input[type="text"]:focus~label,
input[type="email"]:focus~label,
input[type="number"]:focus~label,
input[type="text"]:not(:placeholder-shown)~label,
input[type="email"]:not(:placeholder-shown)~label,
input[type="number"]:not(:placeholder-shown)~label,
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
input[type="number"]:focus~label,
select:focus~label,
textarea:focus~label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(72, 206, 243, var(--tw-text-opacity));
  left: 0px;
}
input[type="text"]:not(:placeholder-shown)~label,
textarea:not(:placeholder-shown)~label,
input[type="number"]:not(:placeholder-shown)~label,
select:not([value='']):valid~label {
  color: rgba(72, 206, 243, var(--tw-text-opacity));
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input.proAge::-webkit-outer-spin-button,
input.proAge::-webkit-inner-spin-button {
  -webkit-appearance: inner-spin-button !important;
  opacity: 1
}
.picon-select svg {
  fill: #75bd18;
}
</style>
