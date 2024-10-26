<template>
  <div class="product-details-page pt-[80px] lg:pt-12 bg-[#f4f5f7]">

    <!-- <div v-if="showLoader" class="fixed w-full h-full z-50 top-0 left-0 bg-black opacity-40"></div> -->
    <fullPageLoader v-if="showLoader" />
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class=" container mx-auto max-w-3xl px-3 lg:px-0 pt-10">
      <breadcrumb :breadcrumb="breadcrumb" />
    </div>


    <div class="container mx-auto px-3">
      <div class="
          max-w-3xl
          mx-auto
          bg-white
          rounded-sm          
          flex
          items-center
          space-x-4
          mt-5
          mb-14
        ">
        <div class="float-left w-full mb-5">
          <div class="
              flex flex-col
              w-full
              px-2
              md:px-6
              py-10
              md:py-6
              bg-green bg-no-repeat bg-contain bg-top-4
              relative
              rounded-t-sm
              profile-top-bg
            ">

            <div class="w-full flex items-center justify-center md:justify-end absolute z-[40] top-[125px] md:top-[10px] md:relative">
              <ul class="flex w-full  md:justify-end gax-x-1 md:gap-x-8 lg:gap-x-16">
                <li>
                   <a @click="showFollowerList" class="text-center cursor-pointer flex flex-col items-center justify-center py-1 text-sm px-4 text-gray-400 md:text-white">

                    <span class="mb-2">
                      <svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_11043_14811)">
                      <path d="M22.5871 7.69755L19.5796 4.39032L20.4127 3.47423L22.6012 5.86538L27.7832 0.166992L28.6163 1.08308L22.5871 7.69755Z" fill="currentColor"/>
                      </g>
                      <path d="M9.60141 1.76664C12.2898 1.76664 14.4021 3.68309 14.4021 6.1222C14.4021 8.56132 12.2898 10.4778 9.60141 10.4778C6.91299 10.4778 4.80067 8.56132 4.80067 6.1222C4.80067 3.68309 6.91299 1.76664 9.60141 1.76664ZM9.60141 0.0244141C5.85683 0.0244141 2.88037 2.72486 2.88037 6.1222C2.88037 9.51955 5.85683 12.22 9.60141 12.22C13.346 12.22 16.3224 9.51955 16.3224 6.1222C16.3224 2.72486 13.346 0.0244141 9.60141 0.0244141Z" fill="currentColor"/>
                      <path d="M19.203 24.4153H17.2827V20.0597C17.2827 17.6206 15.1703 15.7041 12.4819 15.7041H6.72103C4.03262 15.7041 1.9203 17.6206 1.9203 20.0597V24.4153H0V20.0597C0 16.6624 2.97646 13.9619 6.72103 13.9619H12.4819C16.2265 13.9619 19.203 16.6624 19.203 20.0597V24.4153Z" fill="currentColor"/>
                      <defs>
                      <clipPath id="clip0_11043_14811">
                      <rect width="9.03667" height="7.53056" fill="white" transform="translate(19.5796 0.166992)"/>
                      </clipPath>
                      </defs>
                      </svg>
                  </span>

                  <div class="flex">  <span>{{ $t('followers') }}</span> <span class="font-bold text-[16px] pl-2"> {{ userDetails.followerCount ? userDetails.followerCount : 0 }}</span></div>
              </a>
            </li>
                <li>
                  <a @click="showFollowingList"
                class="text-center cursor-pointer flex flex-col items-center justify-center py-1 text-sm px-4 text-gray-400 md:text-white">
                <span class="mb-2">
                  <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 10.8879H26V7.25879H24V10.8879H20V12.7024H24V16.3315H26V12.7024H30V10.8879Z" fill="currentColor"/>
<path d="M10 1.81454C12.8 1.81454 15 3.81054 15 6.3509C15 8.89126 12.8 10.8873 10 10.8873C7.20001 10.8873 5 8.89126 5 6.3509C5 3.81054 7.20001 1.81454 10 1.81454ZM10 0C6.10001 0 3 2.81254 3 6.3509C3 9.88926 6.10001 12.7018 10 12.7018C13.9 12.7018 17 9.88926 17 6.3509C17 2.81254 13.9 0 10 0Z" fill="currentColor"/>
<path d="M20 25.4039H18V20.8675C18 18.3271 15.8 16.3311 13 16.3311H7.00002C4.20001 16.3311 2 18.3271 2 20.8675V25.4039H0V20.8675C0 17.3291 3.10001 14.5166 7.00002 14.5166H13C16.9 14.5166 20 17.3291 20 20.8675V25.4039Z" fill="currentColor"/>
</svg>

                  </span>
                <div class="flex"><span>{{ $t('following') }}</span> <span class="font-bold text-[16px] pl-2">{{ totalfollowing ? totalfollowing : 0 }}</span></div>
              </a>
            </li>
               <li>
                <div class="w-full flex justify-center">
                  <svg v-for="item in uRating" :key="item.id" class=" w-7 h-7 text-gray-400 md:text-white mb-2" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                <!-- <div class="w-full flex justify-between">
                  <span class="text-base text-gray-900 font-medium">
                    {{ $t('myRating') }}
                  </span>
                </div> --></div>
                <div class="w-full flex flex-col  items-center justify-center">
                  <div class="">
                   

                    <div class="justify-center" v-if="!userDetails.averageRating">
                      <svg v-for="item in 1" :key="item.id" class="w-7 h-7 text-gray-400 md:text-white mb-2" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div class="flex justify-center items-center ml-2.5">
                    <div v-if="userDetails.averageRating" class="text-base text-gray-400 md:text-white">
                      {{ getRating(userDetails.averageRating) }}
                    </div>
                    <span v-if="userDetails.averageRating" class="text-sm text-gray-400 md:text-white ml-1">({{ userDetails.totalRatings
                    }}  <span  v-if="userDetails.totalRatings && userDetails.totalRatings > 1">Votes</span>
                       <span  v-if="userDetails.totalRatings && userDetails.totalRatings < 2">Vote</span>)</span>
                    <span v-else class="text-sm text-gray-400 md:text-white">{{ getRating(userDetails.averageRating) }}</span>
                  </div>
                </div>
              

               </li>
              </ul>
             
              
            </div>
            


       

            <!-- <div v-if="userDetails && userDetails.profileCompletionScore && userDetails.profileCompletionScore < 100"
              class="score text-center text-white text-base font-bold pt-5">
              <span>{{ userDetails.profileCompletionScore }}%</span>
            </div> -->
          </div>

          <div class="flex flex-row relative">
              <div class="absolute -top-[70px]  z-40  -left-[20px] w-[200px]">
                <div class="w-full flex justify-center items-center relative pl-[20px]">
                  <div class="absolute w-full z-40 justify-center flex ">
                    <vue-ellipse-progress v-if="userDetails && userDetails.profileCompletionScore"
                      :progress="userDetails.profileCompletionScore" :legend="false" :size="120" mode="out"
                      :color="userDetails.profileCompletionScore >= 100 ? '#4E8A00' : 'yellow'" />
                  </div>


                  <div class="user-profile relative bg-white cursor-pointer rounded-full w-[110px]  h-[110px]  flex justify-center  items-center">
                    <div class="w-[110px] h-[110px] overflow-hidden items-center justify-center flex rounded-full">
                      <img v-if="checkPhotoUrl(userDetails.photoUrl)" class="rounded-full w-[100px] h-[100px]"
                        :src="userDetails.photoUrl" alt="iamges" />
                      <img v-else width="70" height="70" class="rounded-full"
                        src="~/assets/images/profile/chatu-noimg.svg" alt="images" />
                    </div>

                    <div v-if="checkPhotoUrl(userDetails.photoUrl)"
                      class="absolute top-2.5 -right-2 profile-pdetete z-40"
                      v-on:click="deleteProfPic(userDetails.photoUrl)">
                        <div class=" flex justify-center items-center bg-white rounded w-7 h-7 ">
                        <svg width="16" height="16" viewBox="0 0 24 28" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                            fill="#FC2323" />
                        </svg>
                       </div>
                    </div>
                    <div class="absolute bottom-2.5 right-0 profile-pdetete z-40">
                       <a href="javascript:;" @click="$refs.file.click()">
                         <div class="flex justify-center items-center bg-white rounded w-7 h-7 border border-gray-50">
                          <svg width="16" height="16" viewBox="0 0 27 27" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                              fill="rgb(245 158 11)" />
                          </svg>
                          <input type="file" ref="file" @change="uploadImage($event)" accept="image/*" class="hidden" />
                        </div>
                        </a>
                    </div>

                  </div>



                </div>
                <div v-if="userDetails && userDetails.profileCompletionScore && userDetails.profileCompletionScore < 100"
              class="score text-center text-white text-sm font-medium pt-5 absolute -right-[45px] top-8">
              <span class="bg-[#53D8FF] text-black min-w-[60px] text-center justify-center flex py-1 rounded-[100px]">{{ userDetails.profileCompletionScore }}%</span>
            </div>
            <div class="mt-4 pl-5 font-bold text-sm text-center text-gray-500 hidden md:block"> {{ userDetails.displayName }}</div>
              </div>

              <div class="flex flex-col md:flex-row w-full justify-start md:justify-end pt-24 md:pt-3 pr-6 pb-4">
                
                
                    <div v-if="userDetails.profileSince" class="pt-6 ml-2 md:ml-0">
                  <h2 class="text-[14px] text-slate-500 font-normal flex items-center">
                    <span class="mr-2">
                      <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.4 3.0957H12.2C12.97 3.0957 13.6 3.7244 13.6 4.49281V14.2725C13.6 15.041 12.97 15.6696 12.2 15.6696H2.4C1.63 15.6696 1 15.041 1 14.2725V4.49281C1 3.7244 1.63 3.0957 2.4 3.0957Z" stroke="#A3A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.1001 1.69824V4.49245" stroke="#A3A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M4.5 1.69824V4.49245" stroke="#A3A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M1 7.28711H13.6" stroke="#A3A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>{{ $t('joined') }} {{ userDetails.profileSince }}
                  </h2>
                </div>

                <div v-if="lastLoginTime" class="pt-6 ml-2 md:ml-3 lg:ml-10">
                  <h2 class="text-[14px] text-slate-500 font-normal flex items-center"> 
                    <span class="mr-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.7998 0C3.65918 0 0.299805 3.44183 0.299805 7.68408C0.299805 11.9263 3.65918 15.3682 7.7998 15.3682C11.9404 15.3682 15.2998 11.9263 15.2998 7.68408C15.2998 3.44183 11.9404 0 7.7998 0ZM7.7998 13.4471C4.69043 13.4471 2.1748 10.8698 2.1748 7.68408C2.1748 4.49839 4.69043 1.92102 7.7998 1.92102C10.9092 1.92102 13.4248 4.49839 13.4248 7.68408C13.4248 10.8698 10.9092 13.4471 7.7998 13.4471Z" fill="#A3A3A3"/>
<path d="M10.6123 6.72333H8.7373V4.80231C8.7373 4.27403 8.31543 3.8418 7.7998 3.8418C7.28418 3.8418 6.8623 4.27403 6.8623 4.80231V7.68384C6.8623 8.21212 7.28418 8.64435 7.7998 8.64435H10.6123C11.1279 8.64435 11.5498 8.21212 11.5498 7.68384C11.5498 7.15556 11.1279 6.72333 10.6123 6.72333Z" fill="#A3A3A3"/>
</svg>

                    </span>
                  Last Login  {{lastLoginTime}} ago</h2>
                </div>

                
              </div>
              
            </div>

          <div v-if="userDetails && userDetails.promoCode" class=" justify-end relative hidden">

            <div
              class="relative top-[0px] text-firoza border-firoza border-dashed border-2 md:absolute md:-top-[95px] md:border-white md:text-white opacity-50  px-5 py-3 text-base mt-4 mr-4 flex items-center "
              href="javascript:void(0)">
              <!-- <span class="border-dotted border-2 border-firoza w-10 h-10 rounded-full flex justify-center items-center"> -->

              <span class="pr-2 text-sm">Promo Code</span>- <span class="font-bold text-base pl-1">{{
                  userDetails.promoCode
              }}</span>
            </div>
          </div>
          <div v-if="showPromocodeButton && userDetails && !userDetails.promoCode" @click="showPromocodePopup = true"
            class="hidden justify-end relative">

            <a class="pcode-svg relative top-[0px] text-firoza border-firoza border-dashed border-2 md:absolute md:-top-[95px] md:border-white md:text-white opacity-100  px-5 py-3 text-base mt-4 mr-4 flex items-center z-40"
              href="javascript:void(0)">
              <svg width="35" height="35" class="mr-2 promocode-svg" viewBox="0 0 35 35" fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_9816_14758)">
                  <path
                    d="M22.2133 34.4399C21.42 34.4399 20.6267 34.1832 19.8333 33.9266C19.11 33.6932 18.34 33.4599 17.6867 33.4599C17.0333 33.4599 16.2633 33.6932 15.54 33.9266C14.4433 34.2766 13.3 34.6499 12.2267 34.2999C11.1067 33.9266 10.3833 32.9466 9.68333 31.9899C9.21667 31.3599 8.79667 30.7766 8.28333 30.4032C7.77 30.0299 7.07 29.7966 6.32333 29.5632C5.20333 29.1899 4.06 28.8166 3.36 27.8832C2.68333 26.9499 2.68333 25.7366 2.66 24.5699C2.66 23.7766 2.66 23.0299 2.45 22.4232C2.26333 21.8399 1.84333 21.2566 1.4 20.6499C0.723333 19.6699 0 18.6666 0 17.4766C0 16.2632 0.723333 15.2832 1.42333 14.3032C1.86667 13.6966 2.28667 13.1132 2.47333 12.5299C2.68333 11.9232 2.68333 11.1766 2.68333 10.3832C2.68333 9.21655 2.70667 8.00322 3.38333 7.06989C4.06 6.13655 5.22667 5.73989 6.34667 5.38989C7.09333 5.13322 7.79333 4.92322 8.30667 4.54989C8.82 4.17655 9.24 3.59322 9.70667 2.96322C10.4067 2.00655 11.13 1.02655 12.25 0.65322C13.3233 0.30322 14.4667 0.676553 15.5633 1.02655C16.2867 1.25989 17.0567 1.49322 17.71 1.49322C18.3633 1.49322 19.1333 1.25989 19.8567 1.02655C20.9533 0.676553 22.0967 0.30322 23.17 0.65322C24.29 1.02655 25.0133 2.00655 25.7133 2.96322C26.18 3.59322 26.6 4.17655 27.1133 4.54989C27.6267 4.92322 28.3267 5.15655 29.0733 5.38989C30.1933 5.76322 31.3367 6.13655 32.0367 7.06989C32.7133 8.00322 32.7133 9.21655 32.7367 10.3832C32.7367 11.1766 32.7367 11.9232 32.9467 12.5299C33.1333 13.1132 33.5533 13.6966 33.9967 14.3032C34.6967 15.2599 35.42 16.2632 35.42 17.4766C35.42 18.6899 34.6967 19.6699 33.9967 20.6499C33.5533 21.2566 33.1333 21.8399 32.9467 22.4232C32.7367 23.0299 32.7367 23.7766 32.7367 24.5699C32.7367 25.7366 32.7133 26.9499 32.0367 27.8832C31.36 28.8166 30.1933 29.2132 29.0733 29.5632C28.3267 29.8199 27.6267 30.0299 27.1133 30.4032C26.6 30.7766 26.18 31.3599 25.7133 31.9899C25.0133 32.9466 24.29 33.9266 23.17 34.2999C22.8433 34.3932 22.54 34.4399 22.2133 34.4399ZM17.6867 32.4099C18.5267 32.4099 19.3433 32.6666 20.16 32.9232C21.14 33.2266 22.0733 33.5299 22.82 33.2966C23.6133 33.0399 24.1967 32.2232 24.8267 31.3832C25.3167 30.7299 25.8067 30.0299 26.46 29.5632C27.1133 29.0966 27.93 28.8166 28.7 28.5599C29.7033 28.2332 30.6367 27.9066 31.1267 27.2532C31.5933 26.5999 31.6167 25.6199 31.6167 24.5699C31.6167 23.7299 31.6167 22.8666 31.8733 22.0966C32.1067 21.3499 32.5967 20.6732 33.0867 20.0199C33.7167 19.1566 34.3 18.3399 34.3 17.4766C34.3 16.6132 33.7167 15.7966 33.0867 14.9332C32.62 14.2799 32.13 13.6032 31.8733 12.8566C31.6167 12.0866 31.6167 11.2232 31.6167 10.3832C31.6167 9.33322 31.5933 8.35322 31.1267 7.69989C30.6367 7.04655 29.7033 6.71989 28.7 6.39322C27.9067 6.13655 27.09 5.85655 26.46 5.38989C25.83 4.92322 25.3167 4.24655 24.8267 3.56989C24.1967 2.70655 23.6133 1.91322 22.82 1.65655C22.0733 1.42322 21.14 1.70322 20.16 2.02989C19.3433 2.28655 18.5267 2.54322 17.6867 2.54322C16.8467 2.54322 16.03 2.28655 15.2133 2.02989C14.2333 1.70322 13.3 1.39989 12.5533 1.63322C11.76 1.88989 11.1767 2.70655 10.5467 3.54655C10.0567 4.19989 9.56667 4.89989 8.91333 5.36655C8.26 5.83322 7.44333 6.11322 6.67333 6.36989C5.67 6.69655 4.73667 7.02322 4.24667 7.67655C3.78 8.32989 3.75667 9.30989 3.75667 10.3599C3.75667 11.1999 3.75667 12.0632 3.5 12.8332C3.26667 13.5799 2.77667 14.2566 2.28667 14.9099C1.65667 15.7732 1.07333 16.5899 1.07333 17.4532C1.07333 18.3166 1.65667 19.1332 2.28667 20.0199C2.75333 20.6732 3.24333 21.3499 3.5 22.0966C3.75667 22.8666 3.75667 23.7299 3.75667 24.5699C3.75667 25.6199 3.78 26.5999 4.24667 27.2532C4.73667 27.9066 5.67 28.2332 6.67333 28.5599C7.46667 28.8166 8.28333 29.0966 8.91333 29.5632C9.54333 30.0299 10.0567 30.7066 10.5467 31.3832C11.1767 32.2466 11.76 33.0399 12.5533 33.2966C13.3 33.5299 14.2333 33.2499 15.2133 32.9232C16.03 32.6666 16.87 32.4099 17.6867 32.4099Z"
                    fill="#ffffff" />
                  <path
                    d="M30.8468 15.6567C30.4035 15.05 29.9135 14.3733 29.6568 13.58C29.4001 12.7633 29.4001 11.9 29.3768 11.13C29.3768 10.1733 29.3535 9.54332 29.0968 9.16999C28.8401 8.81999 28.1868 8.58666 27.3235 8.28332C26.6001 8.04999 25.7835 7.76999 25.1068 7.27999C24.4301 6.78999 23.9401 6.08999 23.4735 5.48332C22.9135 4.71332 22.4935 4.19999 22.0735 4.03666C21.9801 4.01332 21.8868 3.98999 21.7701 3.98999C21.3268 3.98999 20.7435 4.17666 20.1601 4.36332C19.4135 4.59666 18.5735 4.87666 17.7101 4.87666C16.8468 4.87666 16.0068 4.61999 15.2601 4.36332C14.6768 4.17666 14.0935 3.98999 13.6501 3.98999C13.5335 3.98999 13.4401 4.01332 13.3468 4.03666C12.9035 4.17666 12.5068 4.68999 11.9468 5.48332C11.5035 6.08999 10.9901 6.78999 10.3135 7.27999C9.6368 7.76999 8.82014 8.04999 8.0968 8.28332C7.21014 8.56332 6.58014 8.79666 6.32347 9.16999C6.0668 9.51999 6.04347 10.1733 6.04347 11.13C6.04347 11.9 6.04347 12.7633 5.76347 13.58C5.5068 14.35 5.0168 15.05 4.57347 15.6567C4.01347 16.45 3.64014 16.9867 3.64014 17.4767C3.64014 17.9433 4.01347 18.5033 4.57347 19.2967C5.0168 19.9033 5.5068 20.58 5.76347 21.3733C6.02014 22.19 6.02014 23.0533 6.04347 23.8233C6.04347 24.78 6.0668 25.41 6.32347 25.7833C6.58014 26.1333 7.23347 26.3667 8.0968 26.67C8.82014 26.9033 9.6368 27.1833 10.3135 27.6733C10.9901 28.1633 11.4801 28.8633 11.9468 29.47C12.5068 30.24 12.9268 30.7533 13.3468 30.8933C13.4401 30.9167 13.5335 30.94 13.6501 30.94C14.0935 30.94 14.6768 30.7533 15.2601 30.5667C16.0068 30.3333 16.8468 30.0533 17.7101 30.0533C18.5735 30.0533 19.4135 30.31 20.1601 30.5667C20.7435 30.7533 21.3268 30.94 21.7701 30.94C21.8868 30.94 21.9801 30.9167 22.0735 30.8933C22.5168 30.7533 22.9135 30.24 23.4735 29.4467C23.9168 28.84 24.4301 28.14 25.1068 27.65C25.7835 27.16 26.6001 26.88 27.3468 26.6467C28.2335 26.3667 28.8635 26.1333 29.1201 25.76C29.3768 25.41 29.4001 24.7567 29.4001 23.8C29.4001 23.03 29.4001 22.1667 29.6801 21.35C29.9368 20.58 30.4268 19.88 30.8701 19.2733C31.4301 18.48 31.8035 17.9433 31.8035 17.4533C31.7801 16.9867 31.4068 16.4267 30.8468 15.6567ZM13.6735 29.82C13.4635 29.68 13.0201 29.05 12.8101 28.7933C12.3201 28.1167 11.7601 27.3467 10.9435 26.7633C10.1268 26.18 9.2168 25.8767 8.42347 25.5967C8.1668 25.5033 7.37347 25.2467 7.1868 25.1067C7.1168 24.8733 7.09347 24.0567 7.09347 23.8C7.09347 22.96 7.09347 22.0033 6.7668 21.0233C6.46347 20.09 5.90347 19.32 5.41347 18.6433C5.20347 18.3633 4.71347 17.6867 4.69014 17.4767C4.7368 17.2667 5.20347 16.59 5.41347 16.31C5.90347 15.6333 6.44014 14.8867 6.74347 13.93C7.0468 12.9733 7.07014 11.9933 7.07014 11.1533C7.07014 10.8733 7.07014 10.08 7.16347 9.84666C7.35014 9.70666 8.14347 9.44999 8.40014 9.35666C9.19347 9.09999 10.1035 8.79666 10.9201 8.18999C11.7368 7.60666 12.2968 6.83666 12.7868 6.15999C12.9968 5.87999 13.4401 5.27332 13.6268 5.13332C13.9068 5.13332 14.4201 5.29666 14.8868 5.45999C15.7035 5.71666 16.6368 6.01999 17.6635 6.01999C18.6901 6.01999 19.6235 5.71666 20.4401 5.45999C20.9068 5.31999 21.4201 5.15666 21.7001 5.13332C21.9101 5.27332 22.3535 5.90332 22.5401 6.15999C23.0301 6.83666 23.5901 7.60666 24.4068 8.18999C25.2235 8.77332 26.1335 9.07666 26.9268 9.35666C27.1835 9.44999 27.9768 9.70666 28.1635 9.84666C28.2335 10.08 28.2568 10.8967 28.2568 11.1533C28.2568 11.9933 28.2568 12.95 28.5835 13.93C28.8868 14.8633 29.4468 15.6333 29.9368 16.31C30.1468 16.59 30.6368 17.2667 30.6601 17.4767C30.6135 17.71 30.1468 18.3633 29.9368 18.6433C29.4468 19.32 28.9101 20.0667 28.6068 21.0233C28.3035 21.98 28.2801 22.96 28.2801 23.8C28.2801 24.08 28.2801 24.8733 28.1868 25.1067C28.0001 25.2467 27.2301 25.5033 26.9501 25.5967C26.1568 25.8533 25.2468 26.1567 24.4301 26.7633C23.6135 27.3467 23.0535 28.1167 22.5635 28.7933C22.3535 29.0733 21.9101 29.68 21.7235 29.82C21.4435 29.82 20.9301 29.6567 20.4635 29.4933C19.6468 29.2367 18.7135 28.9333 17.6868 28.9333C16.6601 28.9333 15.7268 29.2367 14.9101 29.4933C14.4668 29.6333 13.9301 29.82 13.6735 29.82Z"
                    fill="#ffffff" />
                  <path
                    d="M14.3035 18.5265C13.7901 18.5265 13.3235 18.4099 12.9268 18.1999C12.5301 17.9899 12.2035 17.6632 11.9701 17.2432C11.7368 16.8232 11.6201 16.3099 11.6201 15.7032C11.6201 15.0966 11.7368 14.5832 11.9701 14.1632C12.2035 13.7432 12.5301 13.4165 12.9268 13.2065C13.3235 12.9732 13.7901 12.8799 14.3035 12.8799C14.8168 12.8799 15.2834 12.9965 15.6801 13.2065C16.0768 13.4399 16.4035 13.7432 16.6368 14.1632C16.8701 14.5832 16.9868 15.0966 16.9868 15.7032C16.9868 16.3099 16.8701 16.8232 16.6368 17.2432C16.4035 17.6632 16.0768 17.9899 15.6801 18.1999C15.2601 18.4099 14.8168 18.5265 14.3035 18.5265ZM13.3235 23.1699L20.2768 12.9965H22.7268L15.7735 23.1699H13.3235ZM14.3035 16.9632C14.4668 16.9632 14.6068 16.8699 14.7468 16.6832C14.8868 16.4965 14.9335 16.1699 14.9335 15.6799C14.9335 15.1899 14.8635 14.8632 14.7468 14.6765C14.6068 14.4899 14.4668 14.3965 14.3035 14.3965C14.1401 14.3965 14.0001 14.4899 13.8601 14.6765C13.7201 14.8632 13.6501 15.1899 13.6501 15.6799C13.6501 16.1699 13.7201 16.4965 13.8601 16.6832C14.0001 16.8699 14.1401 16.9632 14.3035 16.9632ZM21.7468 23.3099C21.2335 23.3099 20.7668 23.1932 20.3701 22.9832C19.9735 22.7732 19.6468 22.4465 19.4135 22.0265C19.1801 21.6065 19.0635 21.0932 19.0635 20.4866C19.0635 19.8799 19.1801 19.3665 19.4135 18.9465C19.6468 18.5265 19.9735 18.1999 20.3701 17.9899C20.7668 17.7565 21.2335 17.6632 21.7468 17.6632C22.2601 17.6632 22.7268 17.7799 23.1235 17.9899C23.5201 18.2232 23.8468 18.5265 24.0801 18.9465C24.3135 19.3665 24.4301 19.8799 24.4301 20.4866C24.4301 21.0932 24.3135 21.6065 24.0801 22.0265C23.8468 22.4465 23.5201 22.7732 23.1235 22.9832C22.7268 23.2165 22.2601 23.3099 21.7468 23.3099ZM21.7468 21.7465C21.9101 21.7465 22.0501 21.6532 22.1901 21.4665C22.3301 21.2799 22.3768 20.9532 22.3768 20.4632C22.3768 19.9732 22.3068 19.6465 22.1901 19.4599C22.0501 19.2732 21.9101 19.1799 21.7468 19.1799C21.5835 19.1799 21.4435 19.2732 21.3035 19.4599C21.1635 19.6465 21.0935 19.9732 21.0935 20.4632C21.0935 20.9532 21.1635 21.2799 21.3035 21.4665C21.4435 21.6532 21.6068 21.7465 21.7468 21.7465Z"
                    fill="#ffffff" />
                </g>
                <defs>
                  <clipPath id="clip0_9816_14758">
                    <rect width="35" height="35" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {{ $t('apply_promo_code') }}
            </a>
          </div>
          <!-- <div class="flex flex-col w-full mt-5 px-4">
            <div class="
                grid grid-cols-1
                gap-y-6
                sm:grid-cols-2
                gap-x-6
                lg:grid-cols-2
                xl:grid-cols-2 xl:gap-x-8
              ">
              
              <div class="w-full">
                
              </div>
            </div>
          </div> -->
          <div class="px-4" v-if="userStatics && userStatics.sellerScore && userStatics.sellerScore !== null">
             <!-- start listing score -->
             
             <div   class="w-full block items-center  pt-4  mt-2 border-t border-slate-100 ">
              <div class="text-xsb text-gray-500 mr-2  mb-3 flex items-center w-full">
                <span class="text-base text-gray-900 font-medium">{{$t('userScore')}} </span>  
                <div class="ml-2">
                      <div class="relative flex flex-col items-center group">
                        <div class="w-4 h-4 flex items-center justify-center bg-white border border-[#4B6E82] rounded-full">
                          <span class="text-sm text-[#4B6E82] rotate-180 font-bold">!</span>
                        </div>
                         <div class="absolute top-[-15px] left-[30px] flex flex-col items-center hidden mb-6 group-hover:flex">
                          <div class="relative w-[200px] rounded text-left z-10 p-2 text-xs text-white bg-gray-500 shadow-lg sm:w-[275px] md:w-[335px] lg:w-[335px] xl:w-[335px] 2xl:w-[335px]">
                            <h4 class="font-bold pb-2 ">  {{$t('whatUserScore')}}</h4>
                            {{$t('sellerScoreTooltips')}}
                          </div> 
                          <div class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute left-[-6px] top-[26px]">
                        </div>
                      </div>
                    </div>
                  </div></div>
                   <div class="flex items-center justify-between">
                   <div class="flex items-center">
                    <div class=" rounded-md flex items-center  justify-center mr-4 px-4 py-1.5" :class="getBgClass(userStatics.sellerScore)">
                         <div class="text-white text-sm font-medium">{{userStatics.sellerScore}}/100</div>
                    </div>
                    <div class="text-sm text-gray-900 mr-2">{{getProfileScoreText(userStatics.sellerScore)}}</div>
                </div>
                    <div @click="howtoImprove()"  class="text-xs text-firoza cursor-pointer font-medium sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">{{$t('HowImUserScore')}}</div>

                   </div>
                  
              </div>
              <!-- End listing score -->
          </div>

          <div v-if="!showEditOption" class="
              flex flex-col
              w-full
              mt-5
              pt-5
              px-4
              border-t border-slate-200
            ">
            <div class="w-full flex items-center justify-between">
              <h2 class="text-base text-gray-900 font-medium">
                {{ $t('personalInformation') }}
              </h2>
              <div class="
                  flex
                  justify-center
                  items-center
                  border border-amber-500
                  rounded
                  cursor-pointer                  
                  w-7
                  h-7
                ">
                <svg width="16" height="16" viewBox="0 0 27 27" fill="none" v-on:click="editUserDet(userDetails)">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                    fill="rgb(245 158 11)" />
                </svg>
              </div>
            </div>

             

            <div class="flex flex-col w-full mt-5">
              <div class="
                  grid grid-cols-1
                  gap-y-6
                  sm:grid-cols-2
                  gap-x-6
                  lg:grid-cols-2
                  xl:grid-cols-2 xl:gap-x-8
                ">
                <div class="w-full">
                  <div class="w-full flex">
                    <div class="text-xs text-gray-500 "> {{ $t('name') }}</div>
                  </div>
                  <div class="w-full flex">
                    <div class="text-sm text-gray-600 font-medium pt-1 ">
                      {{ userDetails.displayName }}
                    </div>
                  </div>
                </div>
                <div class="w-full">
                  <div class="w-full flex justify-between">
                    <div class="w-full">
                      <div class="w-full flex">
                        <div class="text-xs text-gray-500 ">{{ $t('dobA') }}</div>
                      </div>

                      <div v-if="userDetails" class="w-full flex">
                        <div class="text-sm text-gray-600 font-medium pt-1">
                          {{ trnsformDobFormat(userDetails.dob) }}
                        </div>
                      </div>

                      <div v-if="userDetails && (userDetails.dob === null || userDetails.dob === '') && dobNotExists"
                        class="w-full flex">
                        <div class="text-sm text-gray-600 font-medium pt-1">
                          {{ $t('notAdded') }}
                        </div>
                      </div>
                    </div>

                    <div class="w-full">
                      <div class="w-full flex">
                        <div class="text-xs text-gray-500 ">{{ $t('genderA') }}</div>
                      </div>
                      <div class="w-full flex">
                        <div class="text-sm text-gray-600 font-medium pt-1">
                          {{ userDetails.gender }}
                        </div>
                      </div>

                      <div v-if="userDetails && userDetails.gender === null" class="w-full flex">
                        <div class="text-sm text-gray-600 font-medium pt-1">
                          {{ $t('notAdded') }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Edit Option Start  -->
          <div v-if="showEditOption" class="
              flex flex-col
              w-full
              mt-5
              pt-5
              px-4
              border-t border-slate-200
            ">
            <div class="w-full flex items-center justify-between">
              <h2 class="text-base text-gray-900 font-medium">
                {{ $t('personalInformation') }}
              </h2>

              <div class="flex justify-center items-center">
                <div v-if="showEditConfirmButton" v-on:click="updateUser" class="
                    flex
                    justify-center
                    mr-2.5
                    items-center
                    border-dashed border border-gray-200
                    rounded-sm
                    cursor-pointer
                    shadow
                    w-6
                    h-6
                  ">
                  <svg width="16" height="16" viewBox="0 0 18 13" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z"
                      fill="#6FBD09" />
                  </svg>
                </div>
                <div v-on:click="closeUpdate" class="
                    flex
                    justify-center
                    items-center
                    border border-red-500
                  rounded
                  cursor-pointer                  
                  w-7
                  h-7
                  ">
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                      fill="rgb(239 68 68)" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex flex-col w-full mt-5">
              <div class="
                  grid grid-cols-1
                  gap-y-6
                  sm:grid-cols-2
                  gap-x-6
                  lg:grid-cols-2
                  xl:grid-cols-2 xl:gap-x-8
                ">
                <div class="w-full">
                  <div class="relative z-0 w-full mt-3">
                    <input id="abc" v-on:keypress="isLetter($event)" v-model="updateUserDetails.name"
                      v-on:input="onChange(updateUserDetails.name, 'name')" autocomplete="off" type="text" name="name"
                      placeholder="Name" class="
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
                      " />
                    <label for="name" class="
                        absolute
                        duration-300
                        top-3
                        -z-1
                        origin-0
                        text-gray-500 text-sm
                      ">
                      {{ $t('name') }}

                    </label>
                    <div class="absolute text-xs text-red-400 mt-px">
                      {{ nameErrMsg }}
                    </div>
                  </div>
                </div>
                <div class="w-full relative">
                  <label class="
                text-gray-500 text-[11px] absolute z-1 top-0">
                    {{ $t('dobA') }}
                  </label>
                  <div class="relative z-0 w-full mt-5">


                    <date-picker valueType="format" v-on:input="onChange(updateUserDetails.dob, 'date')"
                      :placeholder="$t('dobA')" :format="'DD-MM-YYYY'" :clearable="false" :disabled-date="disabledDate"
                      :default-value="eighteenYrsAgoDate" v-model="updateUserDetails.dob" class="
                        pb-1.5
                        block
                        px-0
                        mt-0
                        bg-transparent
                        border-0 border-b
                        appearance-none
                        focus:outline-none focus:ring-0 focus:border-firoza
                        border-gray-200
                        text-sm
                        w-full
                      "></date-picker>


                    <div class="absolute text-xs text-red-400 mt-px">
                      {{ dateErrMsg }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col w-full mt-8">
              <fieldset>
                <div>
                  <legend class="text-gray-700 text-xs">{{ $t('genderA') }}</legend>
                </div>
                <div class="mt-2 space-x-4 flex items-center">
                  <div class="flex items-center" v-for="gender in genders" :key="gender.genderId">
                    <input type="radio" v-on:input="onChange(updateUserDetails.gender, 'gender')"
                      v-model="updateUserDetails.gender" :id="gender.name" name="gndrId" :value="gender.name" class="
                        focus:ring-indigo-500
                        h-4
                        w-4
                        text-indigo-600
                        border-gray-300
                      " />
                    <label :for="gender.name" class="ml-3 block text-sm font-normal text-gray-700">
                      {{ gender.name }}
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <!-- Edit Option End  -->
          <div class="
              flex flex-col
              w-full
              mt-5
              pt-5
              px-4
              border-t border-slate-200
            ">
            <div class="w-full flex items-center">
              <h2 class="text-base text-gray-900 font-medium">
                {{ $t('contactInformation') }}
              </h2>
            </div>
            <div class="flex flex-col w-full mt-5">
              <div class="
                  grid grid-cols-1
                  gap-y-6
                  sm:grid-cols-2
                  gap-x-6
                  lg:grid-cols-2
                  xl:grid-cols-2 xl:gap-x-8
                ">
                <div v-if="!editMobOpt" class="w-full">
                  <div class="w-full float-left flex items-center justify-between">
                    <div class="text-xs text-gray-500 mr-5">
                      {{ $t('mobile') }}

                    </div>
                    <div v-on:click="editMobile(userDetails.mobile)" class="
                        flex
                        justify-center
                        items-center
                        border border-amber-500
                        rounded
                        cursor-pointer                  
                        w-7
                        h-7
                      ">
                      <svg width="16" height="16" viewBox="0 0 27 27" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                          fill="rgb(245 158 11)" />
                      </svg>
                    </div>
                  </div>
                  <div v-if="!editMobOpt" class="w-full float-left mt-2">
                    <div class="text-sm text-gray-600">
                      {{ userDetails.mobile }}
                    </div>
                  </div>

                  <div v-if="!editMobOpt && userDetails && (userDetails.mobile === null || userDetails.mobile === '')"
                    class="w-full flex">
                    <div class="text-sm text-gray-600">
                      {{ $t('notAdded') }}
                    </div>
                  </div>
                </div>

                <div class="w-full" v-if="editMobOpt">
                  <div class="w-full flex items-center justify-between">
                    <div class="text-xs text-gray-500 mr-5">
                      {{ $t('mobile') }}

                    </div>
                    <div class="flex justify-center items-center">

                      <div class="
                          flex
                          justify-center
                          items-center
                          border border-red-500
                          rounded
                          cursor-pointer
                          shadow
                          w-7
                          h-7
                        ">
                        <svg v-on:click="cancelEditPhnNo()" width="12" height="12" viewBox="0 0 14 14" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                            fill="rgb(239 68 68)" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="relative z-0 w-full">
                    <div class="absolute top-3 left-0">
                      <span class="text-base text-gray-500">
                        {{ $t('nineone') }}
                      </span>
                    </div>
                    <input v-model="phnNo" maxlength="10" v-on:input="onPhnNoChange(phnNo, userDetails.phoneNumber)"
                      @keypress="isNumber($event)" type="text" name="name" placeholder="Phone number" class="
                        pl-9
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
                      " />
                    <label for="name" class="
                        pl-9
                        absolute
                        duration-300
                        top-3
                        -z-1
                        origin-0
                        text-gray-500 text-sm
                      "></label>
                    <div class="absolute w-full flex items-center justify-between ">
                      <div class="text-xs text-red-400 mt-px relative">{{ phnErrorMessage }}</div>
                      <button v-if="phnNo" type="button" id="open-btns"
                        class="flex justify-center items-center text-firoza font-normal text-xsb"
                        v-on:click="sendOtpForPhoneVerification(phnNo)"> {{ $t('verify') }} </button>
                    </div>
                  </div>
                </div>

                <div class="w-full" v-if="!editEmailOpt">
                  <div class="w-full float-left flex items-center justify-between">
                    <div class="text-xs text-gray-500 mr-5">
                      {{ $t('emailA') }}

                    </div>
                    <div class="
                        flex
                        justify-center
                        items-center
                        border border-amber-500
                        rounded
                        cursor-pointer                  
                        w-7
                        h-7
                      ">
                      <svg v-on:click="
                        editEmail(
                          userDetails.email,
                          userDetails.isEmailVerified
                        )
                      " width="16" height="16" viewBox="0 0 27 27" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                          fill="rgb(245 158 11)" />
                      </svg>
                    </div>
                  </div>
                  <div v-if="!editEmailOpt" class="w-full float-left mt-2">
                    <div class="text-sm text-gray-600">
                      {{ userDetails.email }}
                    </div>
                  </div>

                  <div v-if="!editEmailOpt && userDetails && (userDetails.email === null || userDetails.email === '')"
                    class="w-full flex">
                    <div class="text-sm text-gray-600 font-medium">
                      {{ $t('notAdded') }}
                    </div>
                  </div>
                </div>

                <div class="W-full" v-if="editEmailOpt">
                  <div class="w-full flex items-center justify-between">
                    <div class="text-xs text-gray-500 mr-5">
                      {{ $t('emailA') }}

                    </div>
                    <div class="flex justify-center items-center">

                      <div class="flex
                          justify-center
                          items-center
                          border border-red-500
                          rounded
                          cursor-pointer                  
                          w-7
                          h-7
                        ">
                        <svg v-on:click="cancelEditEmail()" width="12" height="12" viewBox="0 0 14 14" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                            fill="rgb(245 158 11)" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div class="relative z-0 w-full">
                    <input type="email" v-model="emailId" v-on:input="onEmailChange(emailId, userDetails.email)"
                      name="name" placeholder="Email" class="
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
                      " />
                    <label for="name" class="
                        absolute
                        duration-300
                        top-3
                        -z-1
                        origin-0
                        text-gray-500 text-sm
                      "></label>
                    <!-- v-if="!isEmailVerified && !userDetails.isEmailVerified" -->
                    <div class="absolute w-full flex items-center justify-between">
                      <div class="text-xs text-red-400 mt-px relative">
                        {{ showEmailErrorMsg }}
                      </div>
                      <button v-on:click="sendOtpForEmailVerification(emailId)" type="button" id="open-btns" class="
                          flex
                          justify-center
                          items-center
                          text-firoza
                          font-normal
                          text-xsb
                        ">
                        {{ $t('verify') }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="!userAllAddress.length" class="
              flex flex-col
              w-full
              mt-10
              pt-5
              px-4
              border-t border-slate-200
            ">
            <div class="w-full flex items-center">
              <h2 class="text-base text-gray-900 font-medium">
                {{ $t('myAddresses') }}


              </h2>
            </div>

            <div class="w-full flex justify-center items-center mt-5 pt-5">
              <img width="229" height="149" class="del-img" src="~/assets/images/profile/add-address.svg"
                alt="images" />
            </div>

            <div class="w-full flex justify-center items-center pt-5">
              <p class="text-sm text-darkcolor">
                {{ $t('subtextLocation') }}


              </p>
            </div>

            <div class="w-full flex justify-center items-center pt-5">
              <button v-on:click="editOrAddAddress({ mode: 'add', addressDet: addressDet })" type="submit"
                id="open-btns-address" class="
                  transition-all
                  flex
                  justify-center
                  items-center
                  border border-green
                  bg-green
                  py-2
                  px-6
                  rounded
                  font-normal
                  text-base text-white
                  hover:bg-firoza hover:border-firoza
                ">
                <span>

                  {{ $t('addAddressBtn') }}

                </span>
              </button>
            </div>
          </div>

          <div v-if="userAllAddress.length" class="
              flex flex-col
              w-full
              mt-5
              pt-5
              px-4
              border-t border-slate-200
            ">
            <div class="w-full flex items-center justify-between">
              <h2 class="text-base text-gray-900 font-medium"> {{ $t('myAddresses') }} </h2>
              <button v-on:click="editOrAddAddress({ mode: 'add', addressDet: addressDet })" type="submit" class="
                  border border-firoza
                  flex
                  justify-center
                  items-center
                  bg-transparent
                  py-1.5
                  px-3
                  rounded
                  text-firoza
                  font-normal
                  text-sm
                ">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd" />
                </svg>
                <span> {{ $t('addAddressBtn') }} </span>
              </button>
            </div>

            <div class="flex flex-col w-full mt-5">
              <!-- Address Loop Starts Here -->

              <div class="
                  grid grid-cols-1
                  gap-y-6
                  sm:grid-cols-2
                  gap-x-6
                  lg:grid-cols-2
                  xl:grid-cols-2 xl:gap-x-8
                ">
                <div v-for="item in userAllAddress" :key="item.id" class="
                    flex flex-col
                    w-full
                    border-dashed border border-gray-300
                    rounded-md                    
                    relative
                  ">
                  <div class="w-full flex items-center justify-between mt-3 px-6">
                    <div class="text-sm text-darkcolor font-medium">
                      {{ item.annotation === 'Home' ? $t('home') : item.annotation === 'Work' ? $t('work') :
                          $t(item.annotation)
                      }}
                    </div>
                    <span class="text-sm  text-green" v-if="item.default">

                      {{ $t('defaultAddress') }}
                    </span>
                  </div>
                  <div class="w-full flex mt-2 px-6">
                    <div class="text-xsb text-gray-600">{{ item.name }}</div>
                  </div>
                  <div v-if="item.phoneNumber" class="w-full flex mt-2 px-6">
                    <div class="text-xsb text-gray-600">
                      {{ item.phoneNumber }}
                    </div>
                  </div>
                  <div v-if="item.email" class="w-full flex mt-2 px-6">
                    <div class="text-xsb text-gray-600">{{ item.email }}</div>
                  </div>
                  <div class="w-full flex mt-2 px-6 address-mheight">
                    <p class="text-xsb text-gray-600">
                      {{ item.addressLine }} {{ getAddressitemDet(item) }}
                    </p>
                  </div>
                  <div class="
                      float-left
                      w-full
                      mt-2
                      pt-2
                      pb-2
                      px-6
                       border-dashed border-t border-gray-300
                    ">
                    <div class="w-full flex items-center justify-between space-x-4">
                      <div class="flex items-center">
                        <div v-on:click="
                          editOrAddAddress({ mode: 'edit', addressDet: item })
                        " class="
                            flex
                            justify-center
                            items-center
                            border border-amber-500
                            rounded
                            cursor-pointer                  
                            w-7
                            h-7
                            mr-5                            
                          ">
                          <svg width="16" height="16" viewBox="0 0 27 27" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                              fill="rgb(245 158 11)" />
                          </svg>
                        </div>

                        <div v-if="!item.default" v-on:click="
                          openModal({
                            delteType: 'address',
                            name: 'Address',
                            deletedId: item.id,
                          })
                        " class="
                            flex
                            justify-center
                            items-center
                            border border-red-500
                            rounded                          
                            cursor-pointer
                            w-7
                            h-7
                          ">
                          <svg width="16" height="16" viewBox="0 0 24 28" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                              fill="#FC2323" />
                          </svg>
                        </div>
                      </div>

                      <div v-on:click="setAddressAsDefault(item.id)" v-if="!item.default"
                        class="form-check form-switch">
                        <label class="
                            form-check-label
                            inline-block
                            text-gray-500 text-sm
                          " for="flexSwitchCheckDefault">

                          {{ $t('setDefault') }}


                        </label>

                        <input class="
                            form-check-input
                            appearance-none
                            w-9
                            -ml-10
                            rounded-full
                            float-left
                            h-5
                            align-top
                            bg-no-repeat bg-contain bg-gray-300
                            focus:outline-none
                            cursor-pointer
                            shadow-sm
                          " type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Address Loop Starts End here  -->
            </div>

          </div>

          <CropImage v-if="image.src" :image="image" />

          <VerifyOtp :otp="otp" v-if="showOtpModal" :showOtpModal="showOtpModal" @closeOtpModal="closeOtpModal"
            @otpValidated="otpValidated" />



          <GMap v-if="editOrAddaddress" :editOrAddAddressDetails="editOrAddAddressDetails" />


          <!-- Bank Account Details Not Visible  -->
          <!-- <BankAccounts /> -->
          <div class="p-4 mt-2 border-t border-gray-200"><a :href="localePath('/data-privacy')"
              class="text-firoza text-sm">{{ $t('dataPrivacy') }}</a></div>
        </div>
      </div>
    </div>

    <DeleteProfileImage v-if="showDeleteProfileModal && slectedPhotoUrl" :slectedPhotoUrl="slectedPhotoUrl"
      @closeDltProModal="closeDltProModal" />

    <!--footer section goes here-->
    <Footer />


    <!-- Modal Start Of Deleting Bank Account And Address -->
    <div class="fixed hidden z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"
      id="delete-modals">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button type="button" v-on:click="cancelDelete()" id="close-btns"
                class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-firoza">
                <span class="sr-only">Close</span>
                <!-- Heroicon name: outline/x -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <!-- Heroicon name: outline/exclamation -->
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.83431 1.83431C5.98434 1.68429 6.18783 1.6 6.4 1.6H9.6C9.81217 1.6 10.0157 1.68429 10.1657 1.83431C10.3157 1.98434 10.4 2.18783 10.4 2.4V3.2H5.6V2.4C5.6 2.18783 5.68429 1.98434 5.83431 1.83431ZM4 3.2V2.4C4 1.76348 4.25286 1.15303 4.70294 0.702944C5.15303 0.252856 5.76348 0 6.4 0H9.6C10.2365 0 10.847 0.252856 11.2971 0.702944C11.7471 1.15303 12 1.76348 12 2.4V3.2H13.6H15.2C15.6418 3.2 16 3.55817 16 4C16 4.44183 15.6418 4.8 15.2 4.8H14.4V15.2C14.4 15.8365 14.1471 16.447 13.6971 16.8971C13.247 17.3471 12.6365 17.6 12 17.6H4C3.36348 17.6 2.75303 17.3471 2.30294 16.8971C1.85286 16.447 1.6 15.8365 1.6 15.2V4.8H0.8C0.358172 4.8 0 4.44183 0 4C0 3.55817 0.358172 3.2 0.8 3.2H2.4H4ZM3.2 4.8V15.2C3.2 15.4122 3.28429 15.6157 3.43431 15.7657C3.58434 15.9157 3.78783 16 4 16H12C12.2122 16 12.4157 15.9157 12.5657 15.7657C12.7157 15.6157 12.8 15.4122 12.8 15.2V4.8H11.2H4.8H3.2Z"
                    fill="#FC2323" />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  {{ $t('confirmation') }}
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ $t('wantDelete') }} {{ deletedItemName }}

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="submit" v-on:click="confirmDelete()"
              class="w-full min-w-[130px] relative inline-flex justify-center rounded border border-transparent shadow-sm px-4 py-2 bg-errortext text-base font-medium text-white hover:bg-red-700 focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm">Delete
              <div class="absolute -right-2 top-0">
                <Spinner v-show="loading" class="w-4" />
              </div>

            </button>
            <button type="submit" v-on:click="cancelDelete()"
              class="mt-3 w-full inline-flex justify-center rounded border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              {{ $t('cancel') }} </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal End -->

    <!--promo code modal-->
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div v-if="showPromocodePopup" class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <!-- This element is to trick the browser into centering the modal contents. -->
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


          <div
            class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <button @click="closePromocodePopup" type="button"
                class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2">
                <span class="sr-only">Close</span>
                <!-- Heroicon name: outline/x -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div>
              <div class="mx-auto flex items-center justify-center">
                <span class="w-[70px] h-[70px] bg-[#8bc63e] rounded-full flex justify-center items-center">
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_9816_14758)">
                      <path
                        d="M22.2133 34.4399C21.42 34.4399 20.6267 34.1832 19.8333 33.9266C19.11 33.6932 18.34 33.4599 17.6867 33.4599C17.0333 33.4599 16.2633 33.6932 15.54 33.9266C14.4433 34.2766 13.3 34.6499 12.2267 34.2999C11.1067 33.9266 10.3833 32.9466 9.68333 31.9899C9.21667 31.3599 8.79667 30.7766 8.28333 30.4032C7.77 30.0299 7.07 29.7966 6.32333 29.5632C5.20333 29.1899 4.06 28.8166 3.36 27.8832C2.68333 26.9499 2.68333 25.7366 2.66 24.5699C2.66 23.7766 2.66 23.0299 2.45 22.4232C2.26333 21.8399 1.84333 21.2566 1.4 20.6499C0.723333 19.6699 0 18.6666 0 17.4766C0 16.2632 0.723333 15.2832 1.42333 14.3032C1.86667 13.6966 2.28667 13.1132 2.47333 12.5299C2.68333 11.9232 2.68333 11.1766 2.68333 10.3832C2.68333 9.21655 2.70667 8.00322 3.38333 7.06989C4.06 6.13655 5.22667 5.73989 6.34667 5.38989C7.09333 5.13322 7.79333 4.92322 8.30667 4.54989C8.82 4.17655 9.24 3.59322 9.70667 2.96322C10.4067 2.00655 11.13 1.02655 12.25 0.65322C13.3233 0.30322 14.4667 0.676553 15.5633 1.02655C16.2867 1.25989 17.0567 1.49322 17.71 1.49322C18.3633 1.49322 19.1333 1.25989 19.8567 1.02655C20.9533 0.676553 22.0967 0.30322 23.17 0.65322C24.29 1.02655 25.0133 2.00655 25.7133 2.96322C26.18 3.59322 26.6 4.17655 27.1133 4.54989C27.6267 4.92322 28.3267 5.15655 29.0733 5.38989C30.1933 5.76322 31.3367 6.13655 32.0367 7.06989C32.7133 8.00322 32.7133 9.21655 32.7367 10.3832C32.7367 11.1766 32.7367 11.9232 32.9467 12.5299C33.1333 13.1132 33.5533 13.6966 33.9967 14.3032C34.6967 15.2599 35.42 16.2632 35.42 17.4766C35.42 18.6899 34.6967 19.6699 33.9967 20.6499C33.5533 21.2566 33.1333 21.8399 32.9467 22.4232C32.7367 23.0299 32.7367 23.7766 32.7367 24.5699C32.7367 25.7366 32.7133 26.9499 32.0367 27.8832C31.36 28.8166 30.1933 29.2132 29.0733 29.5632C28.3267 29.8199 27.6267 30.0299 27.1133 30.4032C26.6 30.7766 26.18 31.3599 25.7133 31.9899C25.0133 32.9466 24.29 33.9266 23.17 34.2999C22.8433 34.3932 22.54 34.4399 22.2133 34.4399ZM17.6867 32.4099C18.5267 32.4099 19.3433 32.6666 20.16 32.9232C21.14 33.2266 22.0733 33.5299 22.82 33.2966C23.6133 33.0399 24.1967 32.2232 24.8267 31.3832C25.3167 30.7299 25.8067 30.0299 26.46 29.5632C27.1133 29.0966 27.93 28.8166 28.7 28.5599C29.7033 28.2332 30.6367 27.9066 31.1267 27.2532C31.5933 26.5999 31.6167 25.6199 31.6167 24.5699C31.6167 23.7299 31.6167 22.8666 31.8733 22.0966C32.1067 21.3499 32.5967 20.6732 33.0867 20.0199C33.7167 19.1566 34.3 18.3399 34.3 17.4766C34.3 16.6132 33.7167 15.7966 33.0867 14.9332C32.62 14.2799 32.13 13.6032 31.8733 12.8566C31.6167 12.0866 31.6167 11.2232 31.6167 10.3832C31.6167 9.33322 31.5933 8.35322 31.1267 7.69989C30.6367 7.04655 29.7033 6.71989 28.7 6.39322C27.9067 6.13655 27.09 5.85655 26.46 5.38989C25.83 4.92322 25.3167 4.24655 24.8267 3.56989C24.1967 2.70655 23.6133 1.91322 22.82 1.65655C22.0733 1.42322 21.14 1.70322 20.16 2.02989C19.3433 2.28655 18.5267 2.54322 17.6867 2.54322C16.8467 2.54322 16.03 2.28655 15.2133 2.02989C14.2333 1.70322 13.3 1.39989 12.5533 1.63322C11.76 1.88989 11.1767 2.70655 10.5467 3.54655C10.0567 4.19989 9.56667 4.89989 8.91333 5.36655C8.26 5.83322 7.44333 6.11322 6.67333 6.36989C5.67 6.69655 4.73667 7.02322 4.24667 7.67655C3.78 8.32989 3.75667 9.30989 3.75667 10.3599C3.75667 11.1999 3.75667 12.0632 3.5 12.8332C3.26667 13.5799 2.77667 14.2566 2.28667 14.9099C1.65667 15.7732 1.07333 16.5899 1.07333 17.4532C1.07333 18.3166 1.65667 19.1332 2.28667 20.0199C2.75333 20.6732 3.24333 21.3499 3.5 22.0966C3.75667 22.8666 3.75667 23.7299 3.75667 24.5699C3.75667 25.6199 3.78 26.5999 4.24667 27.2532C4.73667 27.9066 5.67 28.2332 6.67333 28.5599C7.46667 28.8166 8.28333 29.0966 8.91333 29.5632C9.54333 30.0299 10.0567 30.7066 10.5467 31.3832C11.1767 32.2466 11.76 33.0399 12.5533 33.2966C13.3 33.5299 14.2333 33.2499 15.2133 32.9232C16.03 32.6666 16.87 32.4099 17.6867 32.4099Z"
                        fill="white" />
                      <path
                        d="M30.8468 15.6567C30.4035 15.05 29.9135 14.3733 29.6568 13.58C29.4001 12.7633 29.4001 11.9 29.3768 11.13C29.3768 10.1733 29.3535 9.54332 29.0968 9.16999C28.8401 8.81999 28.1868 8.58666 27.3235 8.28332C26.6001 8.04999 25.7835 7.76999 25.1068 7.27999C24.4301 6.78999 23.9401 6.08999 23.4735 5.48332C22.9135 4.71332 22.4935 4.19999 22.0735 4.03666C21.9801 4.01332 21.8868 3.98999 21.7701 3.98999C21.3268 3.98999 20.7435 4.17666 20.1601 4.36332C19.4135 4.59666 18.5735 4.87666 17.7101 4.87666C16.8468 4.87666 16.0068 4.61999 15.2601 4.36332C14.6768 4.17666 14.0935 3.98999 13.6501 3.98999C13.5335 3.98999 13.4401 4.01332 13.3468 4.03666C12.9035 4.17666 12.5068 4.68999 11.9468 5.48332C11.5035 6.08999 10.9901 6.78999 10.3135 7.27999C9.6368 7.76999 8.82014 8.04999 8.0968 8.28332C7.21014 8.56332 6.58014 8.79666 6.32347 9.16999C6.0668 9.51999 6.04347 10.1733 6.04347 11.13C6.04347 11.9 6.04347 12.7633 5.76347 13.58C5.5068 14.35 5.0168 15.05 4.57347 15.6567C4.01347 16.45 3.64014 16.9867 3.64014 17.4767C3.64014 17.9433 4.01347 18.5033 4.57347 19.2967C5.0168 19.9033 5.5068 20.58 5.76347 21.3733C6.02014 22.19 6.02014 23.0533 6.04347 23.8233C6.04347 24.78 6.0668 25.41 6.32347 25.7833C6.58014 26.1333 7.23347 26.3667 8.0968 26.67C8.82014 26.9033 9.6368 27.1833 10.3135 27.6733C10.9901 28.1633 11.4801 28.8633 11.9468 29.47C12.5068 30.24 12.9268 30.7533 13.3468 30.8933C13.4401 30.9167 13.5335 30.94 13.6501 30.94C14.0935 30.94 14.6768 30.7533 15.2601 30.5667C16.0068 30.3333 16.8468 30.0533 17.7101 30.0533C18.5735 30.0533 19.4135 30.31 20.1601 30.5667C20.7435 30.7533 21.3268 30.94 21.7701 30.94C21.8868 30.94 21.9801 30.9167 22.0735 30.8933C22.5168 30.7533 22.9135 30.24 23.4735 29.4467C23.9168 28.84 24.4301 28.14 25.1068 27.65C25.7835 27.16 26.6001 26.88 27.3468 26.6467C28.2335 26.3667 28.8635 26.1333 29.1201 25.76C29.3768 25.41 29.4001 24.7567 29.4001 23.8C29.4001 23.03 29.4001 22.1667 29.6801 21.35C29.9368 20.58 30.4268 19.88 30.8701 19.2733C31.4301 18.48 31.8035 17.9433 31.8035 17.4533C31.7801 16.9867 31.4068 16.4267 30.8468 15.6567ZM13.6735 29.82C13.4635 29.68 13.0201 29.05 12.8101 28.7933C12.3201 28.1167 11.7601 27.3467 10.9435 26.7633C10.1268 26.18 9.2168 25.8767 8.42347 25.5967C8.1668 25.5033 7.37347 25.2467 7.1868 25.1067C7.1168 24.8733 7.09347 24.0567 7.09347 23.8C7.09347 22.96 7.09347 22.0033 6.7668 21.0233C6.46347 20.09 5.90347 19.32 5.41347 18.6433C5.20347 18.3633 4.71347 17.6867 4.69014 17.4767C4.7368 17.2667 5.20347 16.59 5.41347 16.31C5.90347 15.6333 6.44014 14.8867 6.74347 13.93C7.0468 12.9733 7.07014 11.9933 7.07014 11.1533C7.07014 10.8733 7.07014 10.08 7.16347 9.84666C7.35014 9.70666 8.14347 9.44999 8.40014 9.35666C9.19347 9.09999 10.1035 8.79666 10.9201 8.18999C11.7368 7.60666 12.2968 6.83666 12.7868 6.15999C12.9968 5.87999 13.4401 5.27332 13.6268 5.13332C13.9068 5.13332 14.4201 5.29666 14.8868 5.45999C15.7035 5.71666 16.6368 6.01999 17.6635 6.01999C18.6901 6.01999 19.6235 5.71666 20.4401 5.45999C20.9068 5.31999 21.4201 5.15666 21.7001 5.13332C21.9101 5.27332 22.3535 5.90332 22.5401 6.15999C23.0301 6.83666 23.5901 7.60666 24.4068 8.18999C25.2235 8.77332 26.1335 9.07666 26.9268 9.35666C27.1835 9.44999 27.9768 9.70666 28.1635 9.84666C28.2335 10.08 28.2568 10.8967 28.2568 11.1533C28.2568 11.9933 28.2568 12.95 28.5835 13.93C28.8868 14.8633 29.4468 15.6333 29.9368 16.31C30.1468 16.59 30.6368 17.2667 30.6601 17.4767C30.6135 17.71 30.1468 18.3633 29.9368 18.6433C29.4468 19.32 28.9101 20.0667 28.6068 21.0233C28.3035 21.98 28.2801 22.96 28.2801 23.8C28.2801 24.08 28.2801 24.8733 28.1868 25.1067C28.0001 25.2467 27.2301 25.5033 26.9501 25.5967C26.1568 25.8533 25.2468 26.1567 24.4301 26.7633C23.6135 27.3467 23.0535 28.1167 22.5635 28.7933C22.3535 29.0733 21.9101 29.68 21.7235 29.82C21.4435 29.82 20.9301 29.6567 20.4635 29.4933C19.6468 29.2367 18.7135 28.9333 17.6868 28.9333C16.6601 28.9333 15.7268 29.2367 14.9101 29.4933C14.4668 29.6333 13.9301 29.82 13.6735 29.82Z"
                        fill="white" />
                      <path
                        d="M14.3035 18.5265C13.7901 18.5265 13.3235 18.4099 12.9268 18.1999C12.5301 17.9899 12.2035 17.6632 11.9701 17.2432C11.7368 16.8232 11.6201 16.3099 11.6201 15.7032C11.6201 15.0966 11.7368 14.5832 11.9701 14.1632C12.2035 13.7432 12.5301 13.4165 12.9268 13.2065C13.3235 12.9732 13.7901 12.8799 14.3035 12.8799C14.8168 12.8799 15.2834 12.9965 15.6801 13.2065C16.0768 13.4399 16.4035 13.7432 16.6368 14.1632C16.8701 14.5832 16.9868 15.0966 16.9868 15.7032C16.9868 16.3099 16.8701 16.8232 16.6368 17.2432C16.4035 17.6632 16.0768 17.9899 15.6801 18.1999C15.2601 18.4099 14.8168 18.5265 14.3035 18.5265ZM13.3235 23.1699L20.2768 12.9965H22.7268L15.7735 23.1699H13.3235ZM14.3035 16.9632C14.4668 16.9632 14.6068 16.8699 14.7468 16.6832C14.8868 16.4965 14.9335 16.1699 14.9335 15.6799C14.9335 15.1899 14.8635 14.8632 14.7468 14.6765C14.6068 14.4899 14.4668 14.3965 14.3035 14.3965C14.1401 14.3965 14.0001 14.4899 13.8601 14.6765C13.7201 14.8632 13.6501 15.1899 13.6501 15.6799C13.6501 16.1699 13.7201 16.4965 13.8601 16.6832C14.0001 16.8699 14.1401 16.9632 14.3035 16.9632ZM21.7468 23.3099C21.2335 23.3099 20.7668 23.1932 20.3701 22.9832C19.9735 22.7732 19.6468 22.4465 19.4135 22.0265C19.1801 21.6065 19.0635 21.0932 19.0635 20.4866C19.0635 19.8799 19.1801 19.3665 19.4135 18.9465C19.6468 18.5265 19.9735 18.1999 20.3701 17.9899C20.7668 17.7565 21.2335 17.6632 21.7468 17.6632C22.2601 17.6632 22.7268 17.7799 23.1235 17.9899C23.5201 18.2232 23.8468 18.5265 24.0801 18.9465C24.3135 19.3665 24.4301 19.8799 24.4301 20.4866C24.4301 21.0932 24.3135 21.6065 24.0801 22.0265C23.8468 22.4465 23.5201 22.7732 23.1235 22.9832C22.7268 23.2165 22.2601 23.3099 21.7468 23.3099ZM21.7468 21.7465C21.9101 21.7465 22.0501 21.6532 22.1901 21.4665C22.3301 21.2799 22.3768 20.9532 22.3768 20.4632C22.3768 19.9732 22.3068 19.6465 22.1901 19.4599C22.0501 19.2732 21.9101 19.1799 21.7468 19.1799C21.5835 19.1799 21.4435 19.2732 21.3035 19.4599C21.1635 19.6465 21.0935 19.9732 21.0935 20.4632C21.0935 20.9532 21.1635 21.2799 21.3035 21.4665C21.4435 21.6532 21.6068 21.7465 21.7468 21.7465Z"
                        fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_9816_14758">
                        <rect width="35" height="35" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>

              </div>
              <div class="mt-3 text-left sm:mt-5">
                <h3 class="text-lg text-center leading-6 font-medium text-gray-900 mb-4" id="modal-title"> {{
                    $t('apply_promo_code')
                }} </h3>
                <div class="mt-2">
                  <div class="relative z-0 w-full mt-3">
                    <input type="text" v-on:input="onChangepromocode" @keypress="isAlphanumeric($event)"
                      v-model="promocode" autocomplete="off" name="promo" placeholder=" "
                      class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
                    <label for="promo" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{
                        $t('enter_promo_code')
                    }}</label>


                  </div>
                </div>
              </div>
            </div>

            <div class="absolute items-center flex w-full text-sm text-red-400 mt-px"> <span class="mr-1">{{
                promocodeErrmsg
            }} </span></div>

            <div class="mt-5 sm:mt-6 ">

              <button type="button" :disabled="!isCouponFormValid" @click="applyCouponCode(userDetails)"
                :class="[isCouponFormValid || loadingApplyBtn ? '' : 'opacity-50', 'bg-firoza flex justify-center text-white font-bold py-2 px-3 h-12 rounded w-full text-base leading-[34px]']"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-firoza text-base font-medium text-white hover:bg-bg-firoza focus:outline-none  sm:col-start-2 sm:text-sm">
                <span v-show="!loadingApplyBtn">Apply</span>
                <Spinner v-show="loadingApplyBtn" />
              </button>


              <!-- <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">Cancel</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Followings modal start -->
    <followinglist v-if="showFollowingUserList" :totlalfollowingCount  = "totalfollowing ? totalfollowing : 0" @closeList="closeList" @decreaseFollowingNumber = "decreaseFollowingNumber" />
    <!-- Followings modal end -->

    <!-- Followers modal start -->
    <followerslist v-if="showFollowerUserList" :totalfollowerCount  = "userDetails.followerCount ? userDetails.followerCount : 0"  @closeFollowerUserList="closeFollowerUserList" />
    <!-- Followers modal end -->


   <!-- start listing score modal -->
   <div v-if="showHowtoImprovePopUP" class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      
      <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
        <div @click="closeModalPopup" class="absolute top-0 right-0 pt-2 pr-2 sm:block">
          <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="sr-only">Close</span>           
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
       
        <div class="w-full flex flex-col">
          <div class="w-full flex flex-row">
            <div class="text-base text-gray-600 font-medium px-3 md:px-0">
             {{$t('HowImUserScorePara')}}
            </div>
          </div> 
          <div class="w-full mt-2 px-3 md:px-0">
            <ul class="list-none">
              <li class="flex items-start mb-2 relative pl-2">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[5px] absolute top-0 left-0"><rect width="10" height="10" fill="#48CEF3"></rect></svg> 
                <span class="text-sm text-gray-500 pl-4"> {{$t('improveUser1')}}</span>
              </li> 
              <li class="flex items-start mb-2 relative pl-2">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[5px] absolute top-0 left-0"><rect width="10" height="10" fill="#48CEF3"></rect></svg> 
                <span class="text-sm text-gray-500 pl-4"> {{$t('improveUser2')}}</span>
              </li>
              <li class="flex items-start mb-2 relative pl-2">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[5px] absolute top-0 left-0"><rect width="10" height="10" fill="#48CEF3"></rect></svg> 
                <span class="text-sm text-gray-500 pl-4"> {{$t('improveUser3')}}</span>
              </li>
              <li class="flex items-start mb-2 relative pl-2">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[5px] absolute top-0 left-0"><rect width="10" height="10" fill="#48CEF3"></rect></svg> 
                <span class="text-sm text-gray-500 pl-4"> {{$t('improveUser4')}}</span>
              </li>
              <li class="flex items-start mb-2 relative pl-2">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[5px] absolute top-0 left-0"><rect width="10" height="10" fill="#48CEF3"></rect></svg> 
                <span class="text-sm text-gray-500 pl-4"> {{$t('improveUser5')}}</span>
              </li>
             
            
              <!-- <li class="flex items-start mb-2 relative pl-2">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[5px] absolute top-0 left-0"><rect width="10" height="10" fill="#48CEF3"></rect></svg> 
                <span class="text-sm text-gray-500 pl-4">The higher will be your listing score</span>
              </li> -->
              
            </ul>
            <p class="text-sm text-gray-600">{{ $t('userScoreBelowPara') }}</p>
          </div>
        </div>
		
      </div>
    </div>
  </div>
</div>
<!-- end listing score modal -->


  </div>

  
</template>
<script lang="ts">
import Breadcumb from "~/components/Breadcumb.vue";
import BankAccounts from "~/components/BankAccounts.vue";
import moment from "moment";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import { mapState, mapGetters } from 'vuex';
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import Breadcrumb from '~/components/Breadcrumb.vue';
import Vue from 'vue'
import 'vue-toast-notification/dist/theme-sugar.css'
import Followinglist from '~/components/modal/followinglist.vue';

export default {
  middleware: "authenticated",
  components: {
    Breadcumb,
    BankAccounts,
    DatePicker,
    Cropper,
    Breadcrumb,
    Followinglist
  },

  computed: {
    ...mapState({
      authUser: (state: any) => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    }),
  },

  data() {
    return {
      showHowtoImprovePopUP:false,
      totlalfollowingCount:null,
      totalfollowerCount:null,
      showFollowingUserList: false,
      showFollowerUserList: false,
      promocode: '',
      showPromocodeButton: false,
      isCouponFormValid: false,
      showPromocodePopup: false,
      loadingApplyBtn: false,
      promocodeErrmsg: '',
      disabledDates: {
        to: new Date(Date.now() - 8640000)
      },
      loading: false,
      showLoader: true,
      showmodal: false,
      apiUrls: this.$config.apiUrls,
      DatePickerFormat: "DD-MM-YYYY",
      breadcrumb: [{}],
      userDetails: {},

      userStatics : {
        sellerScore: null
      },
      userAllAddress: [{}],
      phnErrorMessage: '',
      updateUserDetails: {
        name: "",
        dob: "",
        gender: "",
      },
      deletedItemName: "",
      delteType: "",
      deletedId: "",
      genders: [
        { genderId: 1, name: "Male" },
        { genderId: 2, name: "Female" },
        { genderId: 3, name: "Other" },
      ],
      gndrId: "Male",
      showEditOption: false,
      editMobOpt: false,
      editEmailOpt: false,
      uRating: 0,
      phnNo: "",
      emailId: "",
      isDisabled: true,
      nameErrMsg: "",
      dateErrMsg: "",
      showEditConfirmButton: false,
      editOrAddaddress: false,
      editOrAddAddressDetails: {},
      isEmailVerified: false,
      isValidEmail: false,
      showOtpModal: false,
      showEmailErrorMsg: "",
      otp: {
        otp: "",
        email: "",
        phnNumber: "",
        verificationTransactionId: null,
        error: null,
        valid: false,
      },
      image: {
        src: null,
        type: null, //"image/jpg",
        name: null
      },
      slectedPhotoUrl: '',
      showDeleteProfileModal: false,
      totalfollowing:null,
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
      maxDate: `1080142498735`,
      eighteenYrsAgoDate: '',
      dobNotExists: false,
      lastLoginTime:''
    };
  },
  mounted() {
    let currDate = new Date();
    let eighteenYrsAgo = currDate.setFullYear(currDate.getFullYear() - 18);
    this.eighteenYrsAgoDate = this.$moment(eighteenYrsAgo).format("YYYY-MM-DD")
    this.breadcrumb = [
      {
        name: this.$t('myProfile'),
        show: true,
        click: false,
      },
    ];

    if(this.authUser && this.authUser.userLoginTimeDet.lastSignInTime ){
      this.lastLoginTime = this.$moment(this.authUser.userLoginTimeDet.lastSignInTime).fromNow(true); 
    }
   
    // this.checkLastLogin()
    this.getMyProfileDetails();
    this.getUserAllAddress();
    this.enable_promocode_feature();
    if(this.authUser){
      //uid
      this.getUserSatistic()
    }
  },
  created() {
    this.$on("closeModal", (section: any) => {


      this.editOrAddaddress = false;
      this.showOtpModal = false;
      this.image.src = null;

      if (section) {
        this.editMobOpt = false,
          this.editEmailOpt = false,
          this.logEvent()
        this.getMyProfileDetails();
        this.getUserAllAddress();
        if (section === "EditEmail") {
          this.getMyProfileDetails();
        } else {
          this.getUserAllAddress();
        }
      }
    });
  },
  methods: {


    howtoImprove(){
    this.showHowtoImprovePopUP = true
    },

    closeModalPopup(){
        this.showHowtoImprovePopUP = false
      },

    getProfileScoreText(sellerScore:any){
       if(sellerScore >= 0 && sellerScore <= 50 ){
        return this.$t('poor')
       }else if (sellerScore >= 51 && sellerScore <= 80){
        return this.$t('good')
       }else if (sellerScore > 80 ){
        return this.$t('excellent')
       }
      },

      getBgClass(sellerScore:any){
       if(sellerScore >= 0 && sellerScore <= 50 ){
        return 'bg-[#DD0B0B]'
       }else if (sellerScore >= 51 && sellerScore <= 80){
        return 'bg-[#FB923C]'
       }else if (sellerScore > 80 ){
        return 'bg-[#7DC855]'
       }
      },

 
   
    async logEvent() {
      try {
        const analyticsData = {
          user_id: this.authUser.uid,
          channel_id: 'WEB'
        };
        await this.$fire.analytics.logEvent('gintaa_edit_profile', analyticsData)

      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },

    closeFollowerUserList() {
      this.showFollowerUserList = false
    },

    closeList() {
      this.showFollowingUserList = false
    },

    decreaseFollowingNumber(noOffollowing:any){
      this.totalfollowing = noOffollowing
    // this.userdetails
    },

    showFollowingList() {
      this.showFollowingUserList = true
    },

    showFollowerList() {
      this.showFollowerUserList = true
    },

    getAddressitemDet(addressItemDet: any) {
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

    isAlphanumeric(e: any) {
      let char = String.fromCharCode(e.keyCode);
      if (/[a-zA-Z0-9\s]/.test(char)) return true;
      else e.preventDefault();
    },

    onChangepromocode() {
      if (this.promocode.length > 0) {
        this.isCouponFormValid = true
      } else {
        this.isCouponFormValid = false
      }
    },



    closePromocodePopup() {
      this.promocode = ''
      this.isCouponFormValid = false
      this.showPromocodePopup = false
    },

    async applyCouponCode(userDetails: any) {
      this.loadingApplyBtn = true
      this.promocodeErrmsg = ''
      const postData = {
        name: userDetails.displayName,
        promoCode: this.promocode
      }


      let url = `/users/v1/user/profile`;
      try {
        const data = await this.$axios.$put(url, postData);


        if (data.success) {
          Vue.$toast.open('Promo Code Applied Succesfully');
          this.closePromocodePopup()
          this.getMyProfileDetails()
        } else {

          this.promocodeErrmsg = data.message
        }

      } catch (error: any) {
        this.promocodeErrmsg = error.response.data.message
        this.loadingApplyBtn = false;
      }
    },

    closeOtpModal() {

      this.showOtpModal = false
      this.editMobOpt = false,
        this.editEmailOpt = false
      this.otp = {
        otp: "",
        email: "",
        phnNumber: "",
        verificationTransactionId: null,
        error: null,
        valid: false,
      }
    },
    disabledDate(date: any) {
      let currDate = new Date();
      let eighteenYrsAgo = currDate.setFullYear(currDate.getFullYear() - 18);

      if (date.getTime() >= new Date(eighteenYrsAgo).getTime()) {
        return true
      }

    },
    async getMyProfileDetails() {
      this.showLoader = true;
      try {
        let url = `/users/v1/user/profile`;
        const data = await this.$axios.$get(url);
        this.userDetails = data.payload;
        console.log("this.userDetails",this.userDetails ,this.authUser)
        this.totalfollowing = this.userDetails?.followingCount
        this.showLoader = false;
      } catch (error) {
        this.showLoader = false;
        console.log(error);
      }
    },

    async getUserSatistic(){
      try {
        let url = `/statistics/v1/statistics/user/${this.authUser.uid}`;
        const data = await this.$axios.$get(url);
        
        this.userStatics.sellerScore = data.payload?.sellerScore 
      //  console.log("seller score",this.userStatics.sellerScore)
     //   this.userDetails = data.payload;
      } catch (error) {
        console.log(error);
      }
    },

    getRating(userRating: any) {

      if (userRating) {
        this.uRating = 1;
        return userRating;
      } else {
        return 'Not Rated';
      }


    },

    async getUserAllAddress() {
      this.showLoader = true;
      try {
        let url = `/users/v1/user/address/all`;
        const data = await this.$axios.$get(url);
        this.userAllAddress = data.payload;
        this.showLoader = false;
      } catch (error) {
        console.log(error);
        this.showLoader = false;
      }
    },
    async setAddressAsDefault(addressId: string) {
      this.showLoader = true;
      try {
        let url = `/users/v1/user/address/update/default`;
        const data = await this.$axios.$post(url, { addressId: addressId });
        this.getUserAllAddress();
      } catch (error) {
        console.log(error);
        this.showLoader = false;
      }
    },

    openModal(itemDetails: any) {
      this.deletedItemName = itemDetails.name;
      this.delteType = itemDetails.delteType;
      this.deletedId = itemDetails.deletedId;
      let modal = document.getElementById("delete-modals")!;
      modal.style.display = "block";
    },

    otpValidated() {
      this.closeOtpModal()
      this.getMyProfileDetails()
    },

    confirmDelete() {

      // const self = this
      this.loading = true
      if (this.delteType === "address") {
        this.deleteAddress(this.deletedId);
      }
    },
    async deleteAddress(addressId: string) {
      try {
        let url = `users/v1/user/address/${addressId}`;
        const data = await this.$axios.$delete(url);
        this.loading = false
        this.cancelDelete();
        this.getUserAllAddress();
      } catch (error) {
        console.log(error);
        this.loading = false
      }
    },

    cancelDelete() {
      let modal = document.getElementById("delete-modals")!;
      modal.style.display = "none";
    },
    editUserDet(userDet: any) {
      this.showEditOption = true;
      this.updateUserDetails.name = userDet.displayName;
      this.updateUserDetails.gender = userDet.gender;
      this.updateUserDetails.dob = moment(userDet.dob).format("DD-MM-YYYY");
    },
    closeUpdate() {
      this.showEditOption = false;
      this.nameErrMsg = '';
      this.dateErrMsg = '';
    },
    async updateUser() {


      //{
      if (this.updateUserDetails.dob == 'Invalid date') {
        this.updateUserDetails.dob = ''
      } else {
        this.updateUserDetails.dob = this.updateUserDetails.dob.split("-").reverse().join("-")
      }
      const user = {
        name: this.updateUserDetails.name,
        dob: this.updateUserDetails.dob,
        gender: this.updateUserDetails.gender,
      };

      this.showLoader = true;
      let url = `/users/v1/user/profile`;
      try {
        const data = await this.$axios.$put(url, user);
        this.closeUpdate();
        this.getMyProfileDetails();
        this.logEvent()

      } catch (error) {
        console.log(error);
        this.showLoader = false;
      }
      // }
    },
    checkPhotoUrl(photoUrl: any) {
      if (photoUrl) {
        if (photoUrl.includes("delete")) {
          return false;
        } else {
          return true;
        }
      } else {
      }
    },
    trnsformDobFormat(dob: string) {


      if (dob) {
        this.dobNotExists = false
        return moment(dob).format("DD-MM-YYYY");
      } else {
        this.dobNotExists = true

      }
    },


    isLetter(e: any) {
      let char = String.fromCharCode(e.keyCode);
      // if(/^[A-Za-z]+$/.test(char)) return true;
      if (/^[a-zA-Z\s]+/.test(char)) return true;
      else e.preventDefault();
    },
    editMobile(mobileNo: string) {

      this.editMobOpt = true;
      this.phnNo = this.remove91ToPhoneNumber(mobileNo);
    },
    cancelEditPhnNo() {
      this.editMobOpt = false;
    },
    editEmail(emailId: string, isEmailVerified: boolean) {
      this.editEmailOpt = true;
      this.emailId = emailId;
      this.isEmailVerified = isEmailVerified;
    },

    cancelEditEmail() {
      this.editEmailOpt = false;
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
    async deleteProfPic(photoUrl: string) {
      this.slectedPhotoUrl = photoUrl;
      this.showDeleteProfileModal = true;
    },

    onChange(value: string, fieldName: any) {
      this.showEditConfirmButton = true;

      this.valiDateForm(value, fieldName);

    },

    valiDateForm(value: string, fieldName: string) {
      switch (fieldName) {
        case "name":
          if (!value) {
            this.showEditConfirmButton = false;
            this.nameErrMsg = "Name is required";
          } else {
            if (value.length < 2) {
              this.showEditConfirmButton = false;
              this.nameErrMsg = "Name must be 2 character Long";
            } else {
              this.nameErrMsg = "";
              if (!this.dateErrMsg) {
                this.showEditConfirmButton = true;
              } else {
                this.showEditConfirmButton = false;
              }
            }
          }
          // code block
          break;
        case "date":
          if (!value) {
            this.dateErrMsg = "Date is required";
            this.showEditConfirmButton = false;
          } else {
            this.dateErrMsg = "";
            if (!this.nameErrMsg) {
              this.showEditConfirmButton = true;
            } else {
              this.showEditConfirmButton = false;
            }
          }
          // code block
          break;
        default:
        // code block
      }
    },

    editOrAddAddress(addressDet: any) {
    //  console.log("addressDet", addressDet)
      if ((addressDet.mode === "edit") || (addressDet.mode === "add")) {
        this.editOrAddaddress = true;
        if (addressDet.mode === "add") {
          addressDet.addressDet.name = this.authUser.displayName
          addressDet.addressDet.email = this.authUser.email
          addressDet.addressDet.phoneNumber = this.authUser.phoneNumber
        }
        this.editOrAddAddressDetails = addressDet;
      }
      //this.editaddress = true;
    },

    onPhnNoChange(editedPhnNo: string, userCurrentPhn: string) {
      if (editedPhnNo) {

        if (!this.$isValidMobile(editedPhnNo)) {
          this.phnErrorMessage = this.$t('enterValidNu')
        } else {
          this.phnErrorMessage = ""
        }

      } else {
        this.phnErrorMessage = this.$t('phoneNuRequired')
      }

    },

    onEmailChange(editedEmailId: string, email: string) {
      this.isValidEmail = this.$isValidEmail(editedEmailId);

      if (!this.isValidEmail) {
        this.showEmailErrorMsg = this.$t('enterAValidEmail');
      } else {
        this.showEmailErrorMsg = this.$t('pleaseVerifyEmail');
      }

      if (editedEmailId === email) {

        this.isEmailVerified = true;
      } else {
        this.isEmailVerified = false;
      }
    },

    async sendOtpForEmailVerification(emailId: string) {

      if (emailId) {
        this.showLoader = true;
        let requestBody = {};
        let email = emailId;
        let requestUrl = this.apiUrls.sendOtpForEmail;
        requestUrl = requestUrl.replace("{email}", email);
        let sendOtp = await this.$axios
          .post(requestUrl, requestBody)
          .then((response) => {
            this.showLoader = false;
            return response.data;
          })
          .catch((error) => {
            this.showLoader = false;

            return error.response.data;

          });


        if (!sendOtp.success) {
          this.showEmailErrorMsg = sendOtp.message;
        } else {
          this.otp.verificationTransactionId = sendOtp.payload.transactionId;
          this.otp.email = email;
          this.showOtpModal = true;
        }
      }
      // sendOtpForEmail
    },

    uploadImage(event: any) {

      /// Reference to the DOM input element
      const { files } = event.target;
      // Ensure that you have a file before attempting to read it
      if (files && files[0]) {
        // 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
        if (this.image.src) {
          URL.revokeObjectURL(this.image.src);
        }
        // 2. Create the blob link to the file to optimize performance:
        const blob = URL.createObjectURL(files[0]);
        console.log('File details', files[0]);
        // 3. Update the image. The type will be derived from the extension and it can lead to an incorrect result:
        this.image = {
          src: blob,
          type: files[0].type,
          name: files[0].name
        };
      }
    },

    async sendOtpForPhoneVerification(phonenumber: string) {
      if (this.$isValidMobile(phonenumber)) {
        this.showLoader = true;
        let requestBody = {};
        let phoneNumber = phonenumber;
        let sendOtp = await this.$axios
          .post(`/users/v1/user/mobile/initiate/${phoneNumber}`, requestBody)
          .then((response) => {
            this.showLoader = false;
            return response.data;
          })
          .catch((error) => {
            this.showLoader = false;

            return error.response.data;

          });


        if (!sendOtp.success) {
          this.phnErrorMessage = sendOtp.message;

        } else {
          this.otp.verificationTransactionId = sendOtp.payload.transactionId;
          this.otp.phnNumber = phoneNumber;
          this.showOtpModal = true;
        }
      }
      // sendOtpForEmail
    },

    closeDltProModal(isDeleted: boolean) {

      this.showDeleteProfileModal = false;

      if (isDeleted) {
        this.getMyProfileDetails();
      }
    },

    isNumber(evt: any) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    async enable_promocode_feature() {
      try {
        await this.$fire.remoteConfig.fetchAndActivate()
      } catch (e) {
        alert(e)
        return
      }
      // 
      const remoteData = await this.$fire.remoteConfig.getValue('enable_promocode_feature');
      this.showPromocodeButton = remoteData && remoteData._value === 'true' ? true : false;

    },
  },
};
</script>




<style scoped>
.mx-datepicker {
  width: 100%;
}

.vue-advanced-cropper__foreground,
.vue-advanced-cropper__background {
  background: #f9f9f9 !important;
  width: 100% !important;
}

.address-mheight {
  min-height: 3.125rem;
}

@media only screen and (min-device-width: 0px) and (max-device-width: 767px) {
  svg.promocode-svg path {
    fill: #48CEF3;
  }

}
</style>