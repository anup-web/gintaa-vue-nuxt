<template>
  <div class="product-details-page pt-[80px] lg:pt-12 bg-[#f5f2f2]">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class="container max-w-8xl mx-auto px-4 md:px-8 2xl:px-16 pt-10">
      <breadcrumb :breadcrumb="breadcrumb" />
    </div>

    <fullPageLoader v-if="loading" />
    <div class="container max-w-8xl mx-auto px-4 md:px-8 2xl:px-16 pt-5">
      <div class="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col mb-16">
       
        <div class="flex flex-col gap-2 md:gap-6 sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row">

          <div class="basis-full sm:basis-full md:basis-full lg:basis-1/4 xl:basis-1/4 2xl:basis-1/4">
            <div class="w-full flex flex-col gap-2 sm:flex md:flex-row lg:block xl:block 2xl:block">
            <div class="w-full bg-wallet-cbg-one bg-no-repeat bg-cover bg-center rounded relative h-40 sm:w-full sm:h-40 md:w-[340px] md:h-40 lg:w-full lg:h-40 xl:w-full xl:h-40 2xl:w-full 2xl:h-40 p-4 mb-2 sm:mb-2 md:mb-7" >
             
              <div class="flex items-center justify-between">
             <div class="flex flex-col">
              <div class="flex w-full text-white text-base items-center">
                {{ $t("available") }} 
              <!-- 
                <div class="hidden sm:hidden md:block lg:block xl:block 2xl:block ml-4">
                <div class="relative flex flex-col items-center group">
              <div class="w-5 h-5 flex items-center justify-center bg-white rounded-full">
                <span class="text-sm text-green rotate-180">!</span>
              </div>

           <div class="absolute top-[-15px] left-[30px] flex flex-col items-center hidden mb-6 group-hover:flex">
              <span class="relative w-[200px] rounded text-center z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">{{ $t("wallet_available_para") }}</span>
              <div class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute left-[-6px] top-[26px]"></div>
            </div> 
          </div>
          </div> -->

              </div>
              <div class="w-full flex items-center justify-between mt-3">
                <div class="text-white text-[20px] md:text-3xl flex">
                  <img src="~/assets/images/coin.svg" alt="coin" class="mr-2 w-[20px] md:w-[30px]"/> {{ walletDetails.netCount }}
                </div>
                
              </div>

              </div>

              <div class="bg-white flex items-center justify-center rounded-full h-[40px] w-[40px] sm:h-[40px] sm:w-[40px] md:h-[40px] md:w-[40px] lg:h-[70px] lg:w-[70px] xl:h-[70px] xl:w-[70px] 2xl:h-[70px] 2xl:w-[70px]">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[20px] md:h-[20px] lg:w-[32px] lg:h-[32px] xl:w-[32px] xl:h-[32px] 2xl:w-[32px] 2xl:h-[32px]">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.5209 0.123947C23.2202 -0.361571 24.9914 0.622404 25.4769 2.32172C25.5586 2.60761 25.6 2.90349 25.6 3.20082V5.87969H28.8C30.5673 5.87969 32 7.31238 32 9.07969V28.2797C32 30.047 30.5673 31.4797 28.8 31.4797H3.2C1.43269 31.4797 0 30.047 0 28.2797H0.0427307C0.0143246 28.1076 0 27.9333 0 27.7585V8.68654C0 7.2578 0.947127 6.00217 2.32089 5.60966L21.5209 0.123947ZM13.024 28.2797H28.8V15.4797H25.6V22.2728C25.6 23.7015 24.6529 24.9571 23.2791 25.3497L13.024 28.2797ZM25.6 9.07969H28.8V12.2797H25.6V9.07969ZM3.2 8.68661V27.7586L22.4 22.2728V3.20089L3.2 8.68661ZM19.2 12.2797C19.2 13.1633 18.4837 13.8797 17.6 13.8797C16.7163 13.8797 16 13.1633 16 12.2797C16 11.396 16.7163 10.6797 17.6 10.6797C18.4837 10.6797 19.2 11.396 19.2 12.2797Z"
                      fill="#90C43F"
                    />
                  </svg>
                </div>
                </div>
                <div class="text-xs text-white block mt-6">{{ $t("wallet_available_para") }}</div>
            </div>


            <div class="w-full flex flex-row gap-2 sm:flex-row md:flex-row lg:block xl:block 2xl:block">
            <div class=" w-full bg-wallet-cbg-two bg-no-repeat bg-cover bg-center rounded relative h-40 sm:h-40 md:h-40 lg:h-40 xl:h-40 2xl:h-40 p-4 mb-2 sm:mb-2 md:mb-7" >
              <div class="flex items-center justify-between">
              <div class="flex flex-col">
              <div class="flex w-full text-white text-base items-center">
                 {{ $t("reward") }} 

                 <!-- <div class="hidden sm:hidden md:block lg:block xl:block 2xl:block ml-4">
                  <div class="relative flex flex-col items-center group">
              <div class="w-5 h-5 flex items-center justify-center bg-white rounded-full">
                <span class="text-sm text-green rotate-180">!</span>
              </div>

            <div class="absolute top-[-15px] left-[30px] flex flex-col items-center hidden mb-6 group-hover:flex">
              <span class="relative w-[200px] rounded text-center z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">{{ $t("wallet_reward_para") }}</span>
              <div class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute left-[-6px] top-[26px]"></div>
            </div>
          </div>
           </div> -->

              </div>
              <div class="w-full flex items-center justify-between mt-3">
                <div class="text-white text-[20px] md:text-3xl flex ">
                   <img src="~/assets/images/coin.svg" alt="coin" class="mr-2 w-[20px] md:w-[30px]"/> {{ walletDetails.netReward }}
                </div>
                
              </div>

              </div>

              <div class="bg-white flex items-center justify-center rounded-full h-[40px] w-[40px] sm:h-[40px] sm:w-[40px] md:h-[40px] md:w-[40px] lg:h-[70px] lg:w-[70px] xl:h-[70px] xl:w-[70px] 2xl:h-[70px] 2xl:w-[70px]">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" class="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[20px] md:h-[20px] lg:w-[32px] lg:h-[32px] xl:w-[32px] xl:h-[32px] 2xl:w-[32px] 2xl:h-[32px]">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.86364 2.72727C8.32115 2.72727 7.80088 2.94278 7.41728 3.32637C7.03368 3.70997 6.81818 4.23024 6.81818 4.77273C6.81818 5.31522 7.03368 5.83549 7.41728 6.21908C7.80088 6.60268 8.32115 6.81818 8.86364 6.81818H13.1646C12.9981 6.38266 12.7874 5.90375 12.5268 5.42989C11.6691 3.87047 10.4917 2.72727 8.86364 2.72727ZM4.09091 4.77273C4.09091 5.48705 4.25105 6.18487 4.55144 6.81818H1.36364C0.610521 6.81818 0 7.4287 0 8.18182V15C0 15.7531 0.610521 16.3636 1.36364 16.3636H2.72727V28.6364C2.72727 29.3895 3.33779 30 4.09091 30H15H25.9091C26.6622 30 27.2727 29.3895 27.2727 28.6364V16.3636H28.6364C29.3895 16.3636 30 15.7531 30 15V8.18182C30 7.4287 29.3895 6.81818 28.6364 6.81818H25.4486C25.749 6.18487 25.9091 5.48705 25.9091 4.77273C25.9091 3.50692 25.4063 2.29296 24.5112 1.3979C23.6161 0.502839 22.4022 0 21.1364 0C17.9917 0 16.1009 2.26589 15.0836 4.11557C15.0552 4.16713 15.0274 4.21866 15 4.27012C14.9726 4.21866 14.9448 4.16713 14.9164 4.11557C13.8991 2.26589 12.0083 0 8.86364 0C7.59783 0 6.38387 0.502839 5.48881 1.3979C4.59375 2.29296 4.09091 3.50692 4.09091 4.77273ZM16.8354 6.81818H21.1364C21.6789 6.81818 22.1991 6.60268 22.5827 6.21908C22.9663 5.83549 23.1818 5.31522 23.1818 4.77273C23.1818 4.23024 22.9663 3.70997 22.5827 3.32637C22.1991 2.94278 21.6789 2.72727 21.1364 2.72727C19.5083 2.72727 18.3309 3.87047 17.4733 5.42989C17.2126 5.90375 17.0019 6.38266 16.8354 6.81818ZM16.3636 9.54545V13.6364H25.9091H27.2727V9.54545H21.1364H16.3636ZM8.86364 9.54545H13.6364V13.6364H4.09091H2.72727V9.54545H8.86364ZM16.3636 27.2727H24.5455V16.3636H16.3636V27.2727ZM13.6364 16.3636V27.2727H5.45455V16.3636H13.6364Z"
                      fill="#48CEF3"
                    />
                  </svg>
                </div>
                </div>
                <div class="text-xs text-white block mt-6">{{ $t("wallet_reward_para") }}</div>
            </div>

            <div class=" w-full bg-wallet-unlock bg-no-repeat bg-cover bg-center rounded relative h-40 sm:h-40 md:h-40 lg:h-40 xl:h-40 2xl:h-40 p-4 " >
              <div class="flex items-center justify-between">
              <div class="flex flex-col">
              <div class="flex w-full text-white text-base items-center">
                {{ $t("wallet_incoming") }}
                <!-- <div class="hidden sm:hidden md:block lg:block xl:block 2xl:block ml-4">
                <div class="relative flex flex-col items-center group">
              <div class="w-5 h-5 flex items-center justify-center bg-white rounded-full">
                <span class="text-sm text-green rotate-180">!</span>
              </div>

            <div class="absolute top-[-15px] left-[30px] flex flex-col items-center hidden mb-6 group-hover:flex">
              <span class="relative w-[200px] rounded text-center z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">{{ $t("wallet_incoming_para") }}</span>
              <div class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute left-[-6px] top-[26px]"></div>
            </div>
          </div>
          </div> -->

              </div>
              <div class="w-full flex items-center mt-3">
                <div class="text-white text-[20px] md:text-3xl flex">
                  <img src="~/assets/images/coin.svg" alt="coin" class="mr-2 w-[20px] md:w-[30px]"/> {{walletDetails.lockBalance}}
                </div>
               </div>
               
               </div>

               <div class="bg-white flex items-center justify-center rounded-full h-[40px] w-[40px] sm:h-[40px] sm:w-[40px] md:h-[40px] md:w-[40px] lg:h-[70px] lg:w-[70px] xl:h-[70px] xl:w-[70px] 2xl:h-[70px] 2xl:w-[70px]">
                  <svg width="27" height="35" class="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[20px] md:h-[20px] lg:w-[32px] lg:h-[32px] xl:w-[32px] xl:h-[32px] 2xl:w-[32px] 2xl:h-[32px]" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.625 11.6667H21.9375V8.33333C21.9375 3.75 18.1406 0 13.5 0C8.85938 0 5.0625 3.75 5.0625 8.33333V11.6667H3.375C1.51875 11.6667 0 13.1667 0 15V31.6667C0 33.5 1.51875 35 3.375 35H23.625C25.4813 35 27 33.5 27 31.6667V15C27 13.1667 25.4813 11.6667 23.625 11.6667ZM13.5 3.16667C16.3687 3.16667 18.7313 5.5 18.7313 8.33333V11.6667H8.4375V8.33333H8.26875C8.26875 5.5 10.6313 3.16667 13.5 3.16667ZM23.625 31.6667H3.375V15H23.625V31.6667ZM13.5 26.6667C15.3562 26.6667 16.875 25.1667 16.875 23.3333C16.875 21.5 15.3562 20 13.5 20C11.6438 20 10.125 21.5 10.125 23.3333C10.125 25.1667 11.6438 26.6667 13.5 26.6667Z" fill="#B94EF9"/>
                  </svg>

                </div>

                </div>

                <div class="text-xs text-white block mt-6">{{ $t("wallet_incoming_para") }}</div>

            </div>

          </div> 
          

          <!-- start Redeem gift Voucher -->
          <a :href="localePath('/coupon/all-coupons')" class="w-full flex flex-col bg-[#EE2A7B] py-4 mb-2.5 rounded cursor-pointer mt-2 sm:mt-2 md:mt-8">
              <div class="w-full flex items-center justify-center">
                  <div class="text-base text-white mr-4">{{ $t("redeemCoinsMenu") }}</div>                    
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.2002 12.4L6.60019 6.99998L1.2002 1.59998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
            </div>
          </a> 
        <!-- end Redeem gift Voucher --> 


            </div>
            
          </div>


          <!-- <div class="flex justify-end w-full pt-3 pb-9 bg-wallet-refer-bg bg-no-repeat bg-cover bg-center relative h-52 mt-2 md:hidden">
            <div class="w-full pl-12 sm:w-full sm:pl-12 md:w-1/2 md:pl-12 lg:w-1/2 lg:pl-32 xl:w-1/2 xl:pl-32 2xl:w-1/2 2xl:pl-32">
              <div class="flex w-full text-gray-700 text-base font-medium">
                {{ $t("refer_and_earn") }}
              </div>
              <div class="flex w-full text-gray-500 text-sm mt-1">
                {{ $t("invite_friends") }}
              </div>

              <div class="flex w-full mt-10 relative">
                <button class="bg-green text-white py-3 px-8 rounded text-sm flex items-center justify-center"
                  @click="openModal">
                  <span class="pr-2"> Invite now </span>
                  <svg width="9" height="12" viewBox="0 0 9 15" fill="none">
                    <path
                      d="M1.02393 13.1398L7.02393 7.13977L1.02393 1.13977"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <div class="mt-8">
                  <SharingOpt
                    v-if="currentUrl && showSahreModal"
                    :current-url="currentUrl"
                    :show-sahre-modal="showSahreModal"
                    @closeShareModal="closeShareModal"
                  />
                </div>
              </div>
            </div>
          </div> -->
          <div class="basis-full sm:basis-full md:basis-full lg:basis-3/4 xl:basis-3/4 2xl:basis-3/4">
            <div class="justify-end w-full pt-9 pb-9 shadow-sm bg-wallet-referfriend-bg bg-no-repeat bg-cover bg-center relative md:flex h-auto lg:h-[280px] ">
            <img src="~/assets/images/refer-info-graphics.png" alt="refer-info" class="mt-6 absolute left-[20px] lg:left-[50px] xl:left-[80px] top-2 lg:top-4 w-[150px] md:w-[190px] lg:w-[270px]"/>
          <div class="mt-0 w-full pl-[180px] sm:w-full sm:mt-0 sm:pl-[220px] md:pl-[220px] md:mt-6  lg:pl-[340px] lg:mt-6  xl:pl-[490px] xl:mt-6  2xl:pl-[490px] 2xl:mt-6" >
            <div class="flex w-full text-gray-700 text-base font-medium">
              {{ $t("refer_and_earn") }}
            </div>
            <div class="flex w-full text-gray-500 text-sm mt-1">
              {{ $t("invite_friends") }}
            </div>

            <div class="flex w-full mt-4 lg:mt-10 relative">
              <button class="bg-green text-white py-3 px-3 sm:px-8 rounded text-sm flex items-center justify-center"
                @click="openModal">
                <span class="pr-2">{{ $t("share_now") }} </span>
                <svg width="9" height="12" viewBox="0 0 9 15" fill="none">
                  <path
                    d="M1.02393 13.1398L7.02393 7.13977L1.02393 1.13977"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div class="mt-8">
                <SharingOpt
                  v-if="showSahreModal && currentUrl"
                  :current-url="currentUrl"
                  :referralCode="referralCode"
                  :show-sahre-modal="showSahreModal"
                  @closeShareModal="closeShareModal"
                />
              </div>
            </div>
          </div>
        </div>


        <div class="w-full flex flex-col bg-gray-50 mt-4 min-h-[330px]">
              <div class="w-full flex items-center justify-between px-5">
                <div class="flex text-gray-900 text-base font-medium">
                  {{ $t("transactions") }}
                </div>
              </div>

              <div class="flex flex-col overflow-auto">
                <div class="flex items-center justify-between border-b py-3 px-5 font-bold">
                  <div class="text-gray-700 text-sm">{{ $t("activity") }}</div>
                  <div class="text-sm">
                    <span class="flex items-center"
                      ><img
                        src="~/assets/images/coin.svg"
                        alt="coin"
                        class="mr-1 w-[18px]"
                      />
                      {{ $t("coins") }}
                    </span>
                  </div>
                </div>
              </div>

              <div v-if="transactionList.length > 0" class="flex flex-col mt-2 max-h-[240px] overflow-auto auto-scroll">
                <div v-for="item in transactionList" :key="item.id" class="relative flex flex-row border-b py-2 px-5">
                  <div class="w-3/4">
                    <div class="text-gray-900 text-sm">
                      <span class="text-firoza"> {{ item.narration }} </span>
                    </div>
                    <div class="text-gray-500 text-xsb mt-1">
                      {{ transformDate(item.createdDate) }}
                    </div>
                  </div>

                  <div class="w-1/4 text-sm font-medium text-right" :class="addClass(item.transactionType)">
                    <span>
                      {{ setSign(item.transactionType) }}
                      {{ item.itemValue }} gc
                    </span>
                  </div>
                </div>

                <Trigger @triggerIntersected="loadMore" />

                <div v-show="transactionLoading" class="py-6 flex justify-center">
                  <Spinner />
                </div>

                <p>&nbsp;</p>
              </div>

              <div class="w-full flex items-center justify-center mt-5"
                v-if="checkTransationLength(transactionList.length)">
                <div class="text-base p-4 text-red-500">{{ transMsg }}</div>
              </div>
            </div>



          </div>
        </div>


       <!-- <div class="flex flex-col gap-2 md:gap-6 sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mt-5 hidden">
       <div class="basis-full sm:basis-full md:basis-1/3 lg:basis-1/4 xl:basis-1/4 2xl:basis-1/4">
            
      
             <a :href="localePath('/coupon/all-coupons')" class="w-full flex flex-col bg-[#EE2A7B] py-4 mb-2.5 rounded cursor-pointer">
              <div class="w-full flex items-center justify-center">
                  <div class="text-base text-white mr-4">{{ $t("redeemCoinsMenu") }}</div>                    
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.2002 12.4L6.60019 6.99998L1.2002 1.59998" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
            </div>
          </a> 
      

            <div class="w-full flex flex-col bg-gray-50 py-7">
              <div class="w-full flex items-center justify-center">
                <img
                  src="~/assets/images/offer/coin-wallet.svg"
                  alt="coin"
                  width="130"
                  height="115"
                />
              </div>
              <div class="w-full flex items-center justify-center mt-2">
                <div class="text-gray-900 text-base">
                  {{ $t("gintaa_coins") }}
                </div>
              </div>
             
              <div class="w-full flex items-center justify-center mt-6">
                <button
                  type="button"
                  class="border border-firoza flex justify-center items-center bg-firoza py-2 px-4 rounded text-white font-normal text-sm"
                  @click="showModal"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="#ffffff"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span> {{ $t("add_coins_to_your_wallet") }} </span>
                </button>
              </div>
            </div>
       </div>

       <div class="basis-full sm:basis-full md:basis-2/3 lg:basis-3/4 xl:basis-3/4 2xl:basis-3/4">
                        <div class="w-full flex flex-col bg-gray-50 pt-2 min-h-[330px]">
              <div class="w-full flex items-center justify-between px-5">
                <div class="flex text-gray-900 text-base font-medium">
                  {{ $t("transactions") }}
                </div>
              </div>

              <div class="flex flex-col overflow-auto">
                <div class="flex items-center justify-between border-b py-3 px-5 font-bold">
                  <div class="text-gray-700 text-sm">{{ $t("activity") }}</div>
                  <div class="text-sm">
                    <span class="flex items-center"
                      ><img
                        src="~/assets/images/coin.svg"
                        alt="coin"
                        class="mr-1 w-[18px]"
                      />
                      {{ $t("coins") }}
                    </span>
                  </div>
                </div>
              </div>

              <div v-if="transactionList.length > 0" class="flex flex-col mt-2 max-h-[240px] overflow-auto auto-scroll">
                <div v-for="item in transactionList" :key="item.id" class="relative flex flex-row border-b py-2 px-5">
                  <div class="w-3/4">
                    <div class="text-gray-900 text-sm">
                      <span class="text-firoza"> {{ item.narration }} </span>
                    </div>
                    <div class="text-gray-500 text-xsb mt-1">
                      {{ transformDate(item.createdDate) }}
                    </div>
                  </div>

                  <div class="w-1/4 text-sm font-medium text-right" :class="addClass(item.transactionType)">
                    <span>
                      {{ setSign(item.transactionType) }}
                      {{ item.itemValue }} gc
                    </span>
                  </div>
                </div>

                <Trigger @triggerIntersected="loadMore" />

                <div v-show="transactionLoading" class="py-6 flex justify-center">
                  <Spinner />
                </div>

                <p>&nbsp;</p>
              </div>

              <div class="w-full flex items-center justify-center mt-5"
                v-if="checkTransationLength(transactionList.length)">
                <div class="text-base p-4 text-red-500">{{ transMsg }}</div>
              </div>
            </div>
        </div>

        </div> -->
        

       <!-- start My Gift Voucher -->
       <div class="w-full flex flex-col mt-6 bg-white p-4 rounded-sm shadow-sm">
             <div class="w-full mb-6 flex justify-between items-center">
              <div class="flex text-gray-900 text-base font-medium"> {{ $t("myGiftCard") }}</div> 
              <a :href="localePath('/wallet/purchased-voucher-list')"  class="hhg ">
             <div v-if="totalPurchasedCard && totalPurchasedCard > 6" class="flex text-white text-sm font-medium cursor-pointer bg-firoza rounded-sm px-3 py-2">{{ $t("viewAll") }}</div> 
             </a>
             </div>

             <div v-if=" myPurchasedVoucherCard && myPurchasedVoucherCard.length === 0" class="flex w-full justify-center flex-col items-center mt-1">
              <div class="w-100 text-center">
                  <img src="~/assets/images/no-gift-item.png" class="mx-auto w-[150px]"/>
              </div>
              <div class="flex text-gray-700 text-base font-medium pt-2">{{ $t("Nogiftcardfound") }}</div>
              <div><a :href="localePath('/coupon/all-coupons')" class="text-firoza text-[14px] border border-firoza px-6 py-2 inline-block mt-3 rounded">{{ $t('buyNow') }}</a></div>
             </div>

             <div>
             
             <div v-if="myPurchasedVoucherCard.length > 0" class="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
              <div v-for="(item, index) of myPurchasedVoucherCard" :key="item.id" class="flex rounded border border-gray-200">
              
                <div class="flex-shrink-0">
                  <a href="javascript:;" @click="showVoucherDet(item)" class=""><img :src="filterImageUrl(item.imageUrls)" alt="image" class="h-[150px] w-auto sm:h-[200px] sm:w-[200px] rounded-l "></a>
                </div>

                <div class="relative pr-2 pt-2 flex flex-1 flex-col">
                  <div class="flex items-center mb-1.5 pl-4">
                  <div class="text-sm text-gray-500 mr-1 font-medium">{{item.couponName}}</div> 
                </div>
               
                  <div class="min-h-[65px] md:min-h-[111px]">
                  <div class="flex items-center mb-1 pl-4">
                    <div class="text-xs text-gray-500 mr-1">{{ $t("giftCardAmount") }}: </div> 
                    <div class="flex items-center text-sm text-gray-900 font-medium">
                      <svg width="7" height="12" viewBox="0 0 11 18" fill="none" class="mr-[2px]"><path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                      <!-- <img src="~/assets/images/coin.svg" alt="coin" class="mr-1 w-[18px]"> -->
                      <span class="pl-0.5">{{item.price}}</span>
                    </div>
                  </div> 
                  
                  <!-- <div v-if="item.amountPaidByCash" class="flex items-center mb-1 pl-4">
                    <div class="text-xs text-gray-500 mr-1">{{ $t("amountbyCash") }}: </div> 
                    <div class="flex items-center text-sm text-gray-900 font-medium">
                      <img src="~/assets/images/coin.svg" alt="coin" class="mr-1 w-[18px]">
                      <span class="pl-0.5">{{item.amountPaidByCash}}</span>
                    </div>
                  </div>  -->

                  <!-- <div v-if="item.amountPaidByCoin" class="flex items-center mb-1 pl-4">
                    <div class="text-xs text-gray-500 mr-1">{{ $t("amountbyCoin") }}: </div> 
                    <div class="flex items-center text-sm text-gray-900 font-medium">
                      <img src="~/assets/images/coin.svg" alt="coin" class="mr-1 w-[18px]">
                      <span class="pl-0.5">{{item.amountPaidByCoin}}</span>
                    </div>
                  </div>  -->


                  <div class="flex items-center mb-1 pl-4">
                    <div class="text-xs text-gray-500 mr-1">{{ $t("quantity") }}: </div> 
                    <div class="flex items-center text-sm text-gray-900 font-medium pl-0.5">{{item.quantity}}</div>
                  </div>

                  <div v-if="item.voucherCode" class="hidden sm:flex items-center mb-1 pl-4">
                    <div class="text-xs text-gray-500 mr-1"> {{$t('VoucherCodeName')}} </div> 
                    <div class=" text-xs text-gray-900 font-medium pl-0.5 truncate w-[46px] 2xl:w-[100px]">
                      {{item.voucherCode}}  
                    </div>
                    <div class="relative ml-1">
                      <span v-if="voucherCodeCopy[index].showVoucherCodeCopiedConfirmMsg" class="text-[11px] absolute bg-black bg-opacity-90 text-white px-2 py-1 right-0 -top-7">Copied</span>                      
                      <a href="javascript:;" @click="copyToClipBoard(item.voucherCode, index, 'CODE')" class=" rounded-full flex items-center justify-center ml-1" title="Copy">

                        <svg width="12" height="15" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_104_1094)"> <path d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM17 4H6C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.9 18.1 4 17 4ZM17 20H6V6H17V20Z" fill="#48CEF3"/>
                        </g> <defs> <clipPath id="clip0_104_1094"> <rect width="19" height="22" fill="white"/> </clipPath>
                        </defs>
                        </svg>
                      </a>
                  </div>
                  </div>

                  <div v-if="item.pinNumber" class="hidden sm:flex items-center mb-1 pl-4">
                    <div class="text-xs text-gray-500 mr-1">{{$t('VoucherPin')}} </div> 
                    <div class="flex items-center text-xs text-gray-900 font-medium pl-0.5">{{item.pinNumber}} </div>
                    <div class="relative ml-2">
                      <span v-if="voucherCodeCopy[index].showVoucherPinCopiedConfirmMsg" class="text-[11px] absolute bg-black bg-opacity-90 text-white px-2 py-1 right-0 -top-7">Copied</span>
                      
                      <a href="javascript:;" @click="copyToClipBoard(item.pinNumber, index, 'PIN')" class="rounded-full flex items-center justify-center ml-2" title="Copy">
                        <svg width="12" height="15" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_104_1094)"> <path d="M14 0H2C0.9 0 0 0.9 0 2V16H2V2H14V0ZM17 4H6C4.9 4 4 4.9 4 6V20C4 21.1 4.9 22 6 22H17C18.1 22 19 21.1 19 20V6C19 4.9 18.1 4 17 4ZM17 20H6V6H17V20Z" fill="#48CEF3"/>
                        </g> <defs> <clipPath id="clip0_104_1094"> <rect width="19" height="22" fill="white"/> </clipPath>
                        </defs>
                        </svg>
                      </a>
                    </div>
                  </div>


                  <div class="hidden md:flex flex-col pl-4 w-full">
                    <div v-if="item.endDate && item.status === 'SUCCESS' && item.shared " class="text-xs text-gray-500">{{ $t("Validupto") }} {{ transValidDate(item.endDate) }}</div> 
                                   
                  </div>  
                  </div>
                  <div class="text-right hidden text-[#8BC63E] text-sm font-medium"> 

                    <a href="javascript:;"  class=""> {{ item.status }}</a>
                  
                  </div>

               
                    <div class="text-right block text-[#8BC63E] text-sm font-medium relative"> 
                     
                      <!-- <div ><a @click="repaymentNow(item)"  v-if="item.status === 'INITIATED' && isRepaymnetPossible(item)" class=" cursor-pointer bg-firoza px-3 py-1 text-white absolute left-2 bottom-2">{{ $t("paynow") }}</a></div> -->


                    <a href="javascript:;" @click="showVoucherDet(item)" class=""> {{ $t("details") }}</a>
                  
                  </div>

                  <div class="absolute w-full left-0 bottom-0 bg-firoza rounded-br flex items-center justify-center h-7 z-40">
                        <div class="text-sm text-white ">{{ $t("Onceperuser") }}</div>
                  </div> 

                  <div v-if="!item.shared && item.status === 'INITIATED'"   class="absolute w-full left-0 bottom-0 bg-firoza rounded-br flex items-center justify-center h-7 z-40">
                        <div class="text-sm text-white ">{{ $t("paymentDue") }}</div>
                  </div>

                  <div v-if="!item.shared && item.status === 'PENDING'"   class="absolute w-full left-0 bottom-0 bg-firoza rounded-br flex items-center justify-center h-7 z-40">
                        <div class="text-sm text-white ">{{ $t("paymentProcessing") }}</div>
                  </div>
                  
                   <div v-if="!item.shared && item.status === 'SUCCESS' " class="absolute w-full left-0 bottom-0 bg-[#ff9500] rounded-br flex items-center justify-center h-7 z-40">
                        <div class="text-sm text-black ">{{ $t("inProcess") }}</div>
                  </div> 


                  <div v-if="item.status === 'FAILURE'"   class="absolute w-full left-0 bottom-0 bg-[#cf0808] rounded-br flex items-center justify-center h-7 z-40">
                        <div class="text-sm text-[#ffffff] ">{{ $t("paymentfailed") }}</div>
                  </div>
                </div>
              
              </div>

             
              


             </div>
            </div>
        </div> 
        <!-- end My Gift Voucher -->

        <questionsRegardingWallet />

         <myvoucherdetails v-if="vDetails && showVoucherDetPopup" :vDetails = "vDetails"   @closeDetPopup="closeDetPopup" @emitStatus = "emitStatus"  /> 
      </div>
    </div>
    <!--footer section goes here-->
    <Footer />

    <!-- Add coins to your wallet start -->

    <addCoins
      v-if="showmodal"
      :showmodal="showmodal"
      @closeModal="closeModal"
    />

    <!-- Add coins to your wallet end -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import QuestionsRegardingWallet from "~/components/QuestionsRegardingWallet.vue";

export default Vue.extend({
  name: "UserWallet",
  components: { QuestionsRegardingWallet },
  middleware: "authenticated",
  data() {
    return {
      message: "Copy These Text",
      breadcrumb: [
        {
          name: this.$t("myWallet"),
        },
      ],
      currentUrl: "",
      referralCode: "",
      showSahreModal: false,
      loading: true,
      transactionLoading: false,
      showmodal: false,
      page: 0,
      walletDetails: {
        netCount: null,
        netLien: null,
        netReward: null,
        lockBalance: null
      },
      transactionList: [],

      referralLink: "",
      transMsg: "",
      enableSearchMore: true,
      showCopiedModal: false,
      textMsg: "",
      myPurchasedVoucherCard : [],
      voucherCodeCopy : [],
      totalPurchasedCard : null,
      vDetails : null,
      showVoucherDetPopup :false
    };
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
  },
  async beforeMount() {
    if(this.$route.query?.order_id){
      await this.updatePaymentStatus()
    }
   
    this.getMyTransactionList();
   
  },
  mounted() {
    // this.currentUrl =  'https://devlinks.gintaa.com/segn'
    this.getMywalletDetails();
    this.allPurchasedVoucher()

    if (this.authUser) {
      // console.log("this.authUser", this.authUser);

      this.getUserDetails(this.authUser.uid);
    }

    // if(this.referralLink){
    // let url = this.referralLink
    // const siteUrl = `I’m inviting you to join gintaa, India's first intelligent, simple, & secure
    //        barter app. Here is my referral URL- URLLINK. Sign up using it,
    //         and you'll earn 100 gintaa coins (GC) as your joining reward!`
    //   this.currentUrl = siteUrl.replace('URLLINK', url)
    // }
  },
  methods: {

    isRepaymnetPossible(vDet:any){
    if(vDet?.paymentOrderData && vDet?.paymentOrderData?.returnUrl){
      return true
    }else{
      return false
    }
    },

    async updatePaymentStatus(){
    
      try{
        // console.log('call in update paymnet status')
        let orderId  = this.$route.query?.order_id
        const paymentStatusurl =  '/payments/v1/payments/update-payment-status'
        const data = await this.$axios.$post(paymentStatusurl,{"orderId": orderId});
        //console.log('Data in update paymnet status',data)
        return data
      } catch (error) {
        console.log(error);
        return error
      }
     
    },

    repaymentNow(vItemDet:any){
    // console.log("vItemDet",vItemDet) 
     if(vItemDet && vItemDet.status === 'INITIATED'){

      try {
        let payload =  vItemDet.paymentOrderData

      payload.paymentGateway = 'CASHFREE'
      this.$router.push({ path: '/payment/'+payload.orderId, query: payload }) 
      } catch (error) {
       console.log("Error")
      }
     }
    },

    filterImageUrl(imageUrls:any){
        if(imageUrls){
          return imageUrls['620x515']
        }
        
      },

    closeDetPopup(){
     this.showVoucherDetPopup = false
     this.vDetails = null
    },

    emitStatus(currentCouponStatus){
      if(currentCouponStatus.id && currentCouponStatus.status){
      var foundIndex = this.myPurchasedVoucherCard.findIndex(x => x.id == currentCouponStatus.id);

// console.log("foundIndex",foundIndex ,index ,this.myPurchasedVoucherCard[0],this.myPurchasedVoucherCard[0].id , currentCouponStatus.id )
    this.myPurchasedVoucherCard[foundIndex].status = currentCouponStatus.status;
    }

    },
    async getUserDetails(userId: string) {
      try {
        const url = "/users/v1/user/profile";
        const data = await this.$axios.$get(url);
        if (data.payload) {
          this.referralLink = data.payload.referralLink;
          this.referralCode = data.payload?.referralLink;
        //  console.log("data.payload",data.payload,this.referralCode)

          this.getReferelPoint(this.referralLink);
        } else {
          // this.showAllConv = false;
        }

        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },

    async allPurchasedVoucher() {
      try {
        const url = "/wallet/v1/wallet/coupon/my-coupons";
        const data = await this.$axios.$get(url);
      //  console.log("Data",data)
        
        if (data.payload) {
          console.log(data.payload.length)
          this.totalPurchasedCard = data.payload.length
          this.myPurchasedVoucherCard = data.payload.splice(0,6)
          this.myPurchasedVoucherCard.map((item: any)=>{
            const obj = {
              showVoucherCodeCopiedConfirmMsg: false,
              showVoucherPinCopiedConfirmMsg: false
            }
            this.voucherCodeCopy.push(obj)
          })
        } else {
          // this.showAllConv = false;
        }

        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
       
      }
    },
    async getReferelPoint(RefLink: string) {
      try {
        let url = `/wallet/v1/wallet/configuration/get-invite-coin-value`;
        const data = await this.$axios.$get(url);
        if (data.success) {

          let siteUrl = ''
          if(this.$i18n.locale === 'hi'){
           siteUrl  = `मैं आपको भारत के पहले बुद्धिमान/प्रज्ञ, सरल और सुरक्षित वस्तु विनिमय ऐप जिंटा में शामिल होने के लिए आमंत्रित कर रहा हूं। यह मेरा रेफ़रल यूआरएल है- URLLINK  लिंक का उपयोग करके साइन अप करें, और जिंटा से जुड़ने के लिए इनाम स्वरुप आपको आपके जिंटा वॉलेट में  जिंटा सिक्के/जिंटा मुद्राए (जीसी) अर्जित करेंगे/ कमाएंगे!`
          }else if (this.$i18n.locale === 'bn'){
            siteUrl = `আমি আপনাকে ভারতের প্রথম বুদ্ধিমান, সহজ এবং সুরক্ষিত এক্সচেঞ্জ অ্যাপ gintaa-এ যোগ দিতে আমন্ত্রণ জানাচ্ছি। এখানে আমার রেফারেল URL- URLLINK  লিঙ্কটি ব্যবহার করে সাইন আপ করুন এবং আপনার যোগদানের পুরষ্কার হিসাবে  COINAMOUNT gintaa কয়েন উপার্জন করুন!`
          }else{
           siteUrl = `I’m inviting you to join gintaa, India's first intelligent, simple, & secure exchange app. Here is my referral URL- URLLINK. Sign up using it,and you'll earn COINAMOUNT gintaa coins (gc) as your joining reward!`;
          }
          
          let replaceLink = siteUrl.replace("URLLINK", this.referralLink);
          this.currentUrl = replaceLink.replace(
            "COINAMOUNT",
            data?.payload?.LOGIN_REFEREE
          );
          // console.log("this.currentUrl", this.currentUrl, this.referralLink);
          // console.log("");
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getMywalletDetails() {
      this.loading = true;
      try {
        const url = "/wallet/v1/wallet/details";
        const data = await this.$axios.$get(url);
        //console.log("Data:", data);
        if (data.payload) {
          if (data.payload.COIN) {
            // this.walletDetails.netCount = data.payload.COIN.netCount;
            this.walletDetails.netCount     = data.payload.COIN.usableBalance;
            this.walletDetails.netLien      = data.payload.COIN.netLien;
            this.walletDetails.netReward    = data.payload.COIN.netReward;
            this.walletDetails.lockBalance  = +data.payload.COIN.netCount - +data.payload.COIN.usableBalance
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
    async getMyTransactionList() {
      this.transactionLoading = true;
      try {
        const url = `/wallet/v1/wallet/transaction/all?page=${this.page}&size=10`;
        const data = await this.$axios.$get(url);
        // console.log("Data:", data);

        if (this.page === 0) {
          this.transactionList = data.payload;
        } else if (data.payload.length > 0) {
          this.transactionList.push(...data.payload);
        }

        this.enableSearchMore = data.payload.length > 0;
        // if (data.payload) {

        //   this.transactionList = data.payload
        //    console.log("This.transactionList",this.transactionList)
        // } else {

        // }

        this.transactionLoading = false;
      } catch (error) {
        if (this.page === 0) {
          this.transactionList = [];
        }
        this.enableSearchMore = false;
        console.log(error);
        this.transactionLoading = false;
      }
    },

    addClass(transType: string) {
      if (transType && transType === "CR") {
        return "text-green";
      } else {
        return "text-errortext";
      }
    },

    closeModal() {
      this.showmodal = !this.showmodal;
    },

    showModal() {
      this.showmodal = !this.showmodal;
    },
    hideModal() {
      this.showmodal = !this.showmodal;
    },

    showVoucherDet(vDetails:any){
    console.log("vDetails",vDetails)
    this.vDetails = vDetails
    this.showVoucherDetPopup = true
    },

    getTotalPoint(walletDetails: any) {
      return walletDetails.netCount + walletDetails.netLien;
    },

    openModal() {
      this.showSahreModal = true;
    },
    closeShareModal() {
      this.showSahreModal = false;
    },

    loadMore() {
      console.log("-------------------------", this.page);
      if (!this.transactionLoading && this.enableSearchMore) {
        this.page++;
        console.log("-------------------------", this.page);
        this.getMyTransactionList();
      }
    },
    transformDate(value: any) {
      if (value) {
        return this.$moment(value).format(" MMMM D , YYYY, h:mm:ss a");
      }
    },

    transValidDate(dvalue: any){
      if (dvalue) {
        return this.$moment(dvalue).format(" MMMM D , YYYY");
      }
    },

    checkTransationLength(transLength: number) {
      if (transLength) {
        this.transMsg = "";
        return this.transMsg;
      } else {
        this.transMsg = "No Transaction Found";
        return this.transMsg;
      }
    },
    setSign(transType: string) {
      if (transType && transType === "CR") {
        return "+";
      } else {
        return "-";
      }
    },
    closePopup() {
      this.showCopiedModal = false;
    },

    

    async logEvent_gintaa_wallet_recharge_success() {
      try {
        const analyticsData = {
          channel_id: "WEB",
          user_id: this.authUser.uid,
          // number_of_coins:
        };
        console.log(analyticsData);
        await this.$fire.analytics.logEvent(
          "gintaa_wallet_recharge_success",
          analyticsData
        );
        // console.log('Gintaa analytics event log successfully');
      } catch (e) {
        console.log("Gintaa analytics error:", e);
      }
    },

    copyToClipBoard(copyText: any, itemIndex: number, copyType: string = 'PIN'){
      // Copy the text inside the text field
      navigator.clipboard.writeText(copyText);
    
      if(copyType === 'PIN') {
        this.voucherCodeCopy[itemIndex].showVoucherPinCopiedConfirmMsg = true
        setTimeout(()=>{
          this.voucherCodeCopy[itemIndex].showVoucherPinCopiedConfirmMsg = false
        }, 1000)
      } else {
        this.voucherCodeCopy[itemIndex].showVoucherCodeCopiedConfirmMsg = true
        setTimeout(()=>{
          this.voucherCodeCopy[itemIndex].showVoucherCodeCopiedConfirmMsg = false
        }, 1000)
      }

      console.log('voucherCodeCopy:', this.voucherCodeCopy)

    }
  },
});
</script>

<style>
.-z-1 {
  z-index: -1;
}

.origin-0 {
  transform-origin: 0%;
}

input[type="text"]:focus ~ label,
input[type="text"]:focus ~ label,
input[type="text"]:not(:placeholder-shown) ~ label,
input[type="text"]:not(:placeholder-shown) ~ label,
textarea:focus ~ label,
textarea:not(:placeholder-shown) ~ label,
select:focus ~ label,
select:not([value=""]):valid ~ label {
  /* @apply transform; scale-75; -translate-y-6; */
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-scale-x: 0.75;
  --tw-scale-y: 0.75;
  --tw-translate-y: -1.5rem;
}

input[type="text"]:focus ~ label,
input[type="text"]:focus ~ label,
select:focus ~ label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(72, 206, 243, var(--tw-text-opacity));
  left: 0px;
}
</style>
