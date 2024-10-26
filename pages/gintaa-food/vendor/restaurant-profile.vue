<template>
  <div class="relative bg-[#f8f8f8] min-h-screen">

    <GintaaFoodVendorSidebar />
    <div
      class="content-wrapper content-wrapper-min pl-0 relative z-10 sm:pl-0 md:pl-[180px] lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px]">
      <fullPageLoader v-if="showLoader" />
      <GintaaFoodVendorHeader @resturantStatus="resturantStatus" />
      <div class="content pt-[60px] pb-[100px] px-4 sm:pt-[60px] sm:px-4 sm:pb-[100px] md:pt-[100px] md:px-8 md:pb-0">
        <div class="flex items-center justify-between mb-0">
          <div class="text-right text-base font-medium">Profile</div>
          <div class="items-center justify-center hidden sm:hidden md:flex">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 5.37766L17.5 12.3568V20.0002H12.5V15.0002H7.5V20.0002H2.5V12.3568L10 5.37766ZM20 10.1235L10 0.833496L0 10.111L1.13417 11.3318L10 3.1085L18.8658 11.3443L20 10.1235Z"
                fill="#8EC23C" />
            </svg>
            <span class="text-sm text-green ml-2">Home / profile</span>
          </div>
        </div>


        <div class="inline-block min-w-full align-middle mt-4 ">
          <div class="bg-[#1b1d2e] p-4 mb-4 sm:p-6 md:p-6">
            <div class="res-profile flex flex-col sm:flex-col md:flex-col lg:flex-row">
              <div class="basis-full sm:basis-full md:basis-full lg:basis-2/4">
                <div class="block items-center sm:flex md:flex">
                  <div class="flex items-center justify-center sm:block md:block">
                    <div class="w-[128px] h-[128px]  rounded-full relative">
                      <img v-if="restaurantInfo.photoUrl" :src="restaurantInfo.photoUrl" :alt="restaurantInfo.name"
                        class=" h-full rounded-full" />
                      <img v-else src="~/assets/images/food/profile-photo.jpg" :alt="restaurantInfo.name"
                        class="w-full h-full rounded-full " />

                      <div v-if="resStatus !== 'ONLINE'"
                        class=" absolute bottom-2 -right-1 z-20 flex items-center justify-center bg-[#1761fd] w-[32px] h-[32px] rounded-full">
                        <a href="javascript:;" id="imageUpload" @click="$refs.file.click()">
                          <!-- <div class="flex justify-center items-center "> -->
                          <!-- <svg width="16" height="16" viewBox="0 0 27 27" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                        fill="rgb(255 255 255)"></path>
                    </svg> -->
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1908_28)">
                              <path
                                d="M7.99997 10.1333C9.17818 10.1333 10.1333 9.17821 10.1333 8C10.1333 6.82179 9.17818 5.86667 7.99997 5.86667C6.82176 5.86667 5.86664 6.82179 5.86664 8C5.86664 9.17821 6.82176 10.1333 7.99997 10.1333Z"
                                fill="white" />
                              <path
                                d="M5.99998 1.33334L4.77998 2.66667H2.66665C1.93331 2.66667 1.33331 3.26667 1.33331 4V12C1.33331 12.7333 1.93331 13.3333 2.66665 13.3333H13.3333C14.0666 13.3333 14.6666 12.7333 14.6666 12V4C14.6666 3.26667 14.0666 2.66667 13.3333 2.66667H11.22L9.99998 1.33334H5.99998ZM7.99998 11.3333C6.15998 11.3333 4.66664 9.84 4.66664 8C4.66664 6.16 6.15998 4.66667 7.99998 4.66667C9.83998 4.66667 11.3333 6.16 11.3333 8C11.3333 9.84 9.83998 11.3333 7.99998 11.3333Z"
                                fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip0_1908_28">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>


                          <input type="file" accept="image/*" class="hidden" ref="file" @change="uploadImage($event)" />
                          <!-- </div> -->
                        </a>


                      </div>
                    </div>
                  </div>

                  <div
                    class="px-0 mt-4 flex items-center justify-center sm:px-4 sm:block sm:mt-0 md:mt-0 md:px-4 md:block">
                    <div v-if="edidMode !== 'name'" class="text-[22px] text-white   flex items-center">
                      <span>{{ restaurantInfo.name }}</span>
                      <div @click="editName()"
                        class="flex justify-center items-center border-0 border-amber-500 rounded cursor-pointer w-5 h-5 ml-4">
                        <svg width="12" height="12" viewBox="0 0 27 27" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                            fill="rgb(245 158 11)"></path>
                        </svg>
                      </div>
                    </div>

                    <div v-if="edidMode === 'name'" class="flex justify-between">
                      <div class="relative z-0 w-[250px] mt-3">
                        <input id="restaurantName" autocomplete="off" type="text" name="restaurantName" placeholder=""
                          v-model="restaurantInfo.name"
                          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm text-white">
                        <label for="restaurantName"
                          class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Restaurant Name</label>
                      </div>
                      <div class="flex justify-center">
                        <div @click="updateUser()" class="
                                    flex
                                    justify-center
                                    mr-2.5
                                    items-center
                                    border border border-green
                                    rounded-sm
                                    cursor-pointer
                                    shadow
                                    w-5
                                    h-5
                                  ">
                          <svg width="12" height="12" viewBox="0 0 18 13" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z"
                              fill="#6FBD09">
                            </path>
                          </svg>
                        </div>
                        <div @click="closeUpdate()"
                          class="flex justify-center items-center border border-red-500 rounded cursor-pointer w-5 h-5">
                          <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                              fill="rgb(239 68 68)"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="basis-full mt-6 sm:basis-full sm:mt-6 md:basis-full md:mt-6 lg:basis-2/4 lg:mt-0">
                <div>
                  <div v-if="edidMode !== 'mobile'" class="flex items-center mb-4">
                    <div class="text-sm text-white font-medium">Mobile :</div>
                    <div class="text-sm text-white pl-2">{{ restaurantInfo.phoneNumber }}</div>
                    <div class="flex justify-center items-center border-0 border-amber-500 rounded cursor-pointer ml-4">
                      <svg @click="editPhoneNo()" width="14" height="14" viewBox="0 0 27 27" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                          fill="rgb(245 158 11)"></path>
                      </svg>
                    </div>

                  </div>

                  <!-- Start Editing Phone no -->

                  <div v-if="edidMode === 'mobile'" class="flex  mb-3">
                    <div class="relative z-0 w-[250px] mt-3">
                      <input id="restaurantPhone" autocomplete="off" type="text" name="restaurantPhone" placeholder=""
                        v-model="phnNo" @keypress="isNumber($event)"
                        v-on:input="onPhnNoChange(phnNo, restaurantInfo.phoneNumber)"
                        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm text-white">
                      <label for="restaurantName"
                        class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Restaurant Mobile</label>

                      <div class="text-xs text-red-400 mt-px relative">
                        {{ phnErrorMessage }}
                      </div>
                    </div>

                    <div class="flex items-center">

                      <div v-if="showPhoneVerifyButton" @click="sendOtpForPhoneVerification(phnNo)" class="
                                flex
                                    justify-center  px-3                       
                                    items-center
                                    border border-green
                                    rounded-sm
                                    cursor-pointer text-green text-[11px] py-1 ml-3 mr-3
                                  ">

                        <span v-show="!loading">{{ $t('verify') }}</span>
                        <Spinner v-show="loading" />

                      </div>

                      <div @click="closePhoneUpdate()"
                        class="flex justify-center items-center border border-red-500 rounded cursor-pointer w-6 h-6">
                        <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                            fill="rgb(239 68 68)"></path>
                        </svg>
                      </div>

                    </div>
                  </div>

                  <div v-if="edidMode !== 'email'" class="flex items-center mb-4">
                    <div class="text-sm text-white font-medium">{{ $t('emailA') }} :</div>
                    <div class="text-sm text-white pl-2">{{ restaurantInfo.email }}</div>
                    <div class="flex justify-center items-center border-0 border-amber-500 rounded cursor-pointer ml-4">
                      <svg @click="editResEmail()" width="14" height="14" viewBox="0 0 27 27" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                          fill="rgb(245 158 11)"></path>
                      </svg>
                    </div>

                  </div>

                  <!-- Start Editing Email -->

                  <div v-if="edidMode === 'email'" class="flex  mb-3">
                    <div class="relative z-0 w-[280px] mt-3">
                      <input id="restaurantEamil" autocomplete="off" type="text" name="restaurantEmail" placeholder=""
                        v-model="emailId" v-on:input="onEmailChange(emailId, restaurantInfo.email)"
                        class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm text-white">
                      <label for="restaurantName"
                        class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Restaurant Email</label>

                      <div class="text-xs text-red-400 mt-px relative">
                        {{ showEmailErrorMsg }}
                      </div>
                    </div>

                    <div class="flex items-center">
                      <div v-if="showVerifyButton" @click="sendOtpForEmailVerification(emailId)" class="
                                    flex
                                    justify-center  px-3                       
                                    items-center
                                    border border-green
                                    rounded-sm
                                    cursor-pointer text-green text-[11px] mr-3 ml-3 transition py-2">

                        <span v-show="!loading">{{ $t('verify') }}</span>
                        <Spinner v-show="loading" />
                      </div>
                      <div @click="closeEmailUpdate()"
                        class="flex justify-center items-center border border-red-500 rounded cursor-pointer w-6 h-6">
                        <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                            fill="rgb(239 68 68)"></path>
                        </svg>
                      </div>



                    </div>
                  </div>

                  <!-- End Editing email -->

                  <div class="relative pl-[80px]">
                    <span class="absolute left-0 text-white font-medium"> {{ $t('address') }} :</span>
                    <div class="text-sm text-white mb-4">
                      {{ processDisplayAddress(restaurantInfo.location) }}
                    </div>
                    <a @click="chnageAddress()"
                      class="text-sm border-firoza text-firoza px-2 py-1 border rounded-sm cursor-pointer">{{ $t('changeAddress') }}</a>

                  </div>



                </div>

              </div>
            </div>
          </div>
          <div class="bg-white rounded-sm shadow-sm py-4">

            <div class="flex flex-col w-full  pt-5 px-4 sm:px-6 md:px-6">
              <div class="w-full flex items-center justify-between">
                <div class="text-base text-gray-900 font-medium">{{ $t('restaurantInformation') }}</div>
                <a @click="editBasicInfo()"
                  class="flex justify-center items-center border border-amber-500 rounded cursor-pointer w-7 h-7 cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 27 27" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                      fill="rgb(245 158 11)"></path>
                  </svg>
                </a>
              </div>
              <div class="flex flex-col w-full mt-5">
                <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                  <div class="w-full">
                    <div class="w-full flex">
                      <div class="text-xs text-gray-500 ">Fssai License Number</div>
                    </div>
                    <div class="w-full flex">
                      <div class="text-sm text-gray-600 font-medium pt-1 ">{{ restaurantInfo.fssaiNumber }}</div>
                    </div>
                  </div>

                  <div class="w-full">
                    <div class="w-full flex justify-between">
                      <div class="text-xs text-gray-500 ">Minimum Order value</div>
                      <!-- <div
                        class="flex justify-center items-center border border-amber-500 rounded cursor-pointer w-5 h-5">
                        <svg width="12" height="12" viewBox="0 0 27 27" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                            fill="rgb(245 158 11)"></path>
                        </svg>
                      </div> -->
                    </div>
                    <div class="w-full flex">
                      <div class=" font-medium pl-[10px] relative">
                        <svg width="6" height="11" viewBox="0 0 11 18" fill="none" class="absolute top-[4px] left-[2px]">
                          <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
                            d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                            fill="black"></path>
                        </svg>
                        <span>{{ restaurantInfo.minOrderPrice }}</span>
                      </div>

                    </div>
                  </div>

                  <div v-if="restaurantInfo.avgRating" class="w-full">
                    <div class="w-full flex">
                      <div class="flex items-center">
                        <span class="text-base font-medium text-gray-900 mr-1">{{ restaurantInfo.avgRating }}</span>
                        <svg width="16" height="16" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                            fill="#FFB801"></path>
                        </svg>
                      </div>
                    </div>
                    <div class="w-full flex">
                      <div class="text-sm text-gray-700">{{ restaurantInfo.totalRating }} Ratings &amp; {{
                        restaurantInfo.totalReview }} Reviews</div>
                    </div>
                  </div>

                  <div class="w-full">
                    <div class="w-full flex">
                      <div class="text-xs text-gray-500 ">GST Number</div>
                    </div>
                    <div class="w-full flex">
                      <div class="text-sm text-gray-600 font-medium pt-1 ">{{ restaurantInfo.gstNumber }}</div>
                    </div>
                  </div>

                  <div v-if="restaurantInfo.gstPercent" class="w-full">
                    <div class="w-full flex justify-between">
                      <div class="text-xs text-gray-500 ">GST Percentage</div>
                    </div>
                    <div class="w-full flex">
                      <div class=" font-medium  relative">
                        <span>{{ restaurantInfo.gstPercent }}</span>
                      </div>
                    </div>
                  </div>
                  <div v-if="restaurantInfo.licenseNumber" class="w-full">
                    <div class="w-full flex">
                      <div class="text-xs text-gray-500 ">Trade License</div>
                    </div>
                    <div class="w-full flex">
                      <div class="text-sm text-gray-600 font-medium pt-1 ">{{ restaurantInfo.licenseNumber }}</div>
                    </div>
                  </div>

                  <div v-if="restaurantInfo.deliveryCharge" class="w-full">
                    <div class="w-full flex">
                      <div class="text-xs text-gray-500 ">Delivery Charge</div>
                    </div>
                    <div class="w-full flex">
                      <div class="text-sm text-gray-600 font-medium pt-1 ">{{ restaurantInfo.deliveryCharge }}</div>
                    </div>
                  </div>

                  <div v-if="restaurantInfo.deliveryTime" class="w-full">
                    <div class="w-full flex">
                      <div class="text-xs text-gray-500 ">Delivery Time</div>
                    </div>
                    <div class="w-full flex">
                      <div class="text-sm text-gray-600 font-medium pt-1 ">{{ restaurantInfo.deliveryTime }}</div>
                    </div>
                  </div>

                  <div v-if="restaurantInfo.discountPercent" class="w-full">
                    <div class="w-full flex">
                      <div class="text-xs text-gray-500 ">Discount Percent</div>
                    </div>
                    <div class="w-full flex">
                      <div class="text-sm text-gray-600 font-medium pt-1 ">{{ restaurantInfo.discountPercent }}</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div v-if="workingIntervals.length === 0 && !showLoader" class="flex flex-col w-full mt-5 pt-5 px-4 sm:px-6 md:px-6 border-t border-slate-200">
                  <div  class="w-full flex items-center">
                         <h2 class="text-base text-gray-900 font-medium">Restaurant operational hours</h2>
                </div>
                <div class="w-full flex justify-center items-center mt-5 pt-5">
                      <p class="text-sm text-darkcolor"> Add your restaurant opening and closing hours</p>
                </div>
                <div class="w-full flex justify-center items-center pt-5">
                   <button @click="addTimeSlots()" type="submit"  class="transition-all flex justify-center items-center border border-firoza bg-firoza
                      py-2 px-6 rounded font-normal text-base text-white hover:bg-firoza hover:border-firoza">
                  <span>Add time solts </span>
                 </button>
               </div>
             </div>

            <div v-if="workingIntervals.length" class="flex flex-col w-full mt-10 pt-5 px-4 sm:px-6 md:px-6 border-t border-slate-200 ">
              <div class="w-full block justify-between sm:flex md:flex">
                <div class="flex flex-col">
                  <div class="text-base text-gray-900 font-medium">Restaurant operational hours</div>
                  <div class="text-sm text-gray-700 font-normal">Mark restaurant opening and closing hours</div>
                </div>
                 
                <button @click="addTimeSlots()" type="button" class="border border-firoza flex justify-center items-center bg-transparent
                           py-2 px-4 rounded text-firoza font-normal text-base h-[42px] mt-4 sm:mt-0 md:mt-0">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd" />
                  </svg>
                  <span>Add time slots </span>
                </button>
                <!-- <div class="flex items-center cursor-pointer">
                  <svg width="15" height="15" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11ZM11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM10.275 7.75C10.4667 7.94444 10.7083 8.04167 11 8.04167C11.2917 8.04167 11.5292 7.94444 11.7125 7.75C11.9042 7.55556 12 7.31019 12 7.01389C12 6.71759 11.9042 6.47685 11.7125 6.29167C11.5292 6.09722 11.2917 6 11 6C10.7083 6 10.4667 6.09722 10.275 6.29167C10.0917 6.47685 10 6.71759 10 7.01389C10 7.31019 10.0917 7.55556 10.275 7.75ZM10 15C10 15.5523 10.4478 16 11.0001 16C11.5524 16 12.0001 15.5523 12.0001 15V10C12.0001 9.44772 11.5524 9 11.0001 9C10.4478 9 10 9.44772 10 10V15Z"
                      fill="#48CEF3" />
                  </svg>
                  <div class="text-sm text-firoza font-normal pl-1">Important guidelines</div>
                </div> -->
              </div>
              <div class="flex flex-col w-[230px] sm:w-64 md:w-64 mt-6">
                <div class="flex items-center justify-between mb-2">
                  <div class="text-sm text-gray-700 font-normal w-[100px] flex items-center justify-center">Opens at</div>
                  <div class="text-sm text-gray-700 font-normal w-[100px] flex items-center justify-center">Closes at
                  </div>
                </div>
                <div v-if="workingIntervals && workingIntervals.length">
                <div v-for="(item, index) in workingIntervals " :key="index"
                  class="flex items-center justify-between relative mb-5">
                  <div
                    class="text-sm text-gray-700 font-normal border border-gray-400 rounded px-2 py-1 w-[100px] h-8 flex items-center justify-center">
                    <span>{{ tConvert(item.openingTime) }} </span>
                  </div>
                  <div class="text-base text-gray-700 font-normal">to</div>
                  <div
                    class="text-sm text-gray-700 font-normal border border-granmkl;[]\y-400 rounded px-2 py-1 w-[100px] h-8 flex items-center justify-center">
                    <span>{{ tConvert(item.closingTime) }} </span>
                  </div>
                  <div
                    class="flex justify-center items-center bg-white rounded-sm shadow cursor-pointer w-7 h-7 absolute right-[-40px]">
                    <svg @click="deleteTImeInterval(item)" width="18" height="18" viewBox="0 0 24 28" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                        fill="#FC2323"></path>
                    </svg>
                  </div>
                  <a @click="editResOperationHour(item)" class="flex justify-center items-center border border-amber-500 rounded cursor-pointer w-7 h-7 absolute right-[-80px]"><svg width="16" height="16" viewBox="0 0 27 27" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z" fill="rgb(245 158 11)"></path></svg></a>
                </div>
              </div>
                
                
              </div>
            </div>


            <!-- Remove hidden class - start bank account  -->
            <div class="w-full flex flex-col">
               <div v-if="resAccountDet.length === 0 && !showLoader" class="flex flex-col w-full mt-5 pt-5 px-4 sm:px-6 md:px-6 border-t border-slate-200">
                  <div  class="w-full flex items-center">
                         <h2 class="text-base text-gray-900 font-medium">Bank accounts</h2>
                </div>

                <div class="w-full flex justify-center items-center mt-5 pt-5">
                      <p class="text-sm text-darkcolor"> Add your bank account or any UPI account to withdraw your money from gintaa</p>
                </div>

                <div class="w-full flex justify-center items-center pt-5">
                   <button @click="openAddBankAccountPopup()" type="submit"  class="transition-all flex justify-center items-center border border-firoza bg-firoza
                      py-2 px-6 rounded font-normal text-base text-white hover:bg-firoza hover:border-firoza">
                  <span>Add account </span>
                 </button>
               </div>
             </div> 

              <div v-if="resAccountDet.length > 0" class="flex flex-col w-full mt-5 pt-5 px-4 sm:px-6 md:px-6 border-t border-slate-200">
                <div class="w-full flex items-center justify-between mb-6">
                  <h2 class="text-base text-gray-900 font-normal">Bank accounts</h2>
                  <button @click="openAddBankAccountPopup()" type="button" class="border border-firoza flex justify-center items-center bg-transparent
                             py-2 px-4 rounded text-firoza font-normal text-base h-[42px]">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd" />
                    </svg>
                    <span>Add bank account </span>
                  </button>
                </div>

                <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">                                 
                    <div v-for="(item, index) in resAccountDet" :key="index" class="flex flex-col w-full bg-white rounded-md shadow relative">
                      <div class="w-full flex items-center justify-end mt-3 px-6">
                        <div v-if="item.default" class="text-sm text-green">Default account</div>
                      </div>
                      <div v-if="item.bankAccountDetails" class="w-full flex mt-2 px-6">
                        <div class="text-xsb text-gray-600">
                          Account Number - {{ maskCardNumber(item.bankAccountDetails.accountNumber) }} </div>
                      </div>

                      <div v-if="!item.bankAccountDetails" class="w-full flex mt-2 px-6">
                        <div class="text-xsb text-gray-600">
                          UPI Id - {{ item.upiId }}
                        </div>
                      </div>
                      <div v-if="item.bankAccountDetails" class="w-full flex mt-2 px-6">
                        <div class="text-xsb text-gray-600">
                          {{ item.bankAccountDetails.bankName }}
                        </div>
                      </div>
                      <div class="w-full flex mt-2 px-6">
                        <div class="text-xsb text-gray-600">
                          {{ item.nickName }}
                        </div>
                      </div>

                      <div v-if="!item.valid" class="w-full flex mt-2 px-6">
                        <div class="flex justify-center items-center bg-white rounded-sm cursor-pointer w-6 h-6">
                          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path
                              d="M15.3644 25.1369C15.6272 25.0882 15.8899 25.0394 16.1401 24.9785C16.3029 24.9419 16.453 24.8322 16.5406 24.6982C16.6282 24.5518 16.6533 24.3811 16.6157 24.2226C16.5406 23.9423 16.2903 23.7472 15.99 23.7472C15.9399 23.7472 15.8899 23.7594 15.8399 23.7716C15.6022 23.8325 15.377 23.8813 15.1391 23.9179C14.7888 23.9788 14.5636 24.308 14.6262 24.6493C14.6512 24.8077 14.7513 24.954 14.8889 25.0516C15.0016 25.1247 15.1267 25.1613 15.2518 25.1613C15.2893 25.1492 15.3268 25.1492 15.3644 25.1369ZM24.7487 9.52085C24.8112 9.52085 24.8863 9.50864 24.9488 9.48425C25.2867 9.37452 25.4744 9.02096 25.3618 8.69184C25.2742 8.44803 25.1867 8.20425 25.0865 7.96044C24.9864 7.71663 24.7487 7.57034 24.486 7.57034C24.3984 7.57034 24.3233 7.58255 24.2482 7.61914C24.0856 7.68004 23.9605 7.802 23.8979 7.94826C23.8353 8.09455 23.8228 8.27738 23.8979 8.42367C23.9854 8.6431 24.073 8.86255 24.1481 9.08197C24.1857 9.20385 24.2733 9.3136 24.3858 9.39897C24.486 9.48431 24.611 9.52085 24.7487 9.52085ZM19.1933 23.7349C19.3058 23.7349 19.4184 23.7106 19.5186 23.6497C19.7438 23.5156 19.9815 23.3815 20.1942 23.2474C20.3318 23.1499 20.4319 23.0158 20.4695 22.8451C20.507 22.6867 20.4695 22.5159 20.3819 22.3696C20.2567 22.199 20.0566 22.0893 19.8439 22.0893C19.7188 22.0893 19.5936 22.1258 19.4936 22.199C19.2933 22.3331 19.0931 22.455 18.8804 22.5647C18.5676 22.7354 18.4675 23.1255 18.6427 23.418C18.6928 23.5034 18.7553 23.5643 18.8304 23.6131C18.9304 23.6863 19.0555 23.7349 19.1933 23.7349ZM24.9989 13.4584C25.099 13.5315 25.2241 13.5681 25.3494 13.5681H25.3618C25.7122 13.5681 26 13.2877 26 12.9585C26 12.7025 26 12.4466 25.9874 12.1905C25.975 11.8492 25.6872 11.5932 25.3494 11.5932H25.3243C24.9739 11.6053 24.6987 11.898 24.7112 12.2393C24.7237 12.4709 24.7237 12.7025 24.7112 12.9342C24.7237 13.1414 24.8238 13.3365 24.9989 13.4584ZM23.2847 19.4073C23.1721 19.3221 23.0345 19.2855 22.8969 19.2855C22.6967 19.2855 22.509 19.383 22.3839 19.5415C22.2462 19.7244 22.0961 19.9072 21.9335 20.0901C21.7083 20.3583 21.7332 20.7484 22.0085 20.9679C22.021 20.98 22.0335 20.9922 22.0586 21.0044C22.1713 21.0776 22.2963 21.1142 22.434 21.1142C22.6216 21.1142 22.7969 21.0288 22.922 20.8948C23.0971 20.6997 23.2598 20.4925 23.4224 20.2852C23.6226 20.0169 23.5601 19.6147 23.2847 19.4073ZM24.9989 15.6649C24.9364 15.6405 24.8738 15.6405 24.8112 15.6405C24.5235 15.6405 24.2857 15.8112 24.1981 16.0793C24.123 16.2988 24.0479 16.5182 23.9604 16.7376C23.8603 17.0059 23.9479 17.3105 24.1856 17.469C24.2231 17.4934 24.2732 17.5178 24.3233 17.5421C24.3982 17.5665 24.4734 17.5788 24.5485 17.5788C24.8112 17.5788 25.049 17.4203 25.149 17.1764C25.2366 16.9448 25.3242 16.7009 25.4118 16.445C25.5245 16.1281 25.3368 15.7746 24.9989 15.6649ZM22.3714 4.51051C22.4339 4.51051 22.4965 4.474 22.5214 4.43741C22.5464 4.40081 22.5589 4.33986 22.5339 4.27894L21.5956 0.987447L20.6071 2.37717L20.2442 2.14554C18.0921 0.743697 15.6021 0 13.0246 0C12.2738 0 11.523 0.0609823 10.7723 0.195036C10.447 0.256018 10.1091 0.316971 9.78387 0.40228L9.74631 0.414488C6.85597 1.13374 4.37844 2.75507 2.58927 5.0835L2.56427 5.12C2.56427 5.13221 2.55174 5.13221 2.55174 5.14439C2.48914 5.22976 2.42655 5.30286 2.37658 5.3882C2.27646 5.52228 2.1889 5.65643 2.10127 5.79051L2.07624 5.83925C0.599851 8.0579 -0.10089 10.6179 0.0117025 13.2511C0.0117025 13.2633 0.0117025 13.2755 0.0117025 13.2877C0.0241721 13.5315 0.049264 13.7875 0.0742642 14.0435L0.086795 14.0923C0.111826 14.3605 0.149387 14.6165 0.19948 14.8603C0.662382 17.469 1.92618 19.834 3.84059 21.6748L3.85313 21.687C4.36612 22.1746 4.92914 22.6378 5.51723 23.0401C7.08134 24.1128 8.83304 24.8321 10.6974 25.1491C10.735 25.1612 10.7724 25.1612 10.81 25.1612C11.1228 25.1612 11.3856 24.9418 11.4356 24.6493C11.4606 24.4786 11.4231 24.32 11.3355 24.186C11.2355 24.0519 11.0853 23.9543 10.9226 23.9299C9.92159 23.7593 8.95816 23.4545 8.0447 23.04L8.03226 23.0278C8.01973 23.0278 8.01973 23.0157 8.00726 23.0157C7.79458 22.9182 7.58183 22.8206 7.39412 22.7109H7.38159L7.31899 22.6743C6.95615 22.4793 6.60584 22.2599 6.26803 22.0282C3.71544 20.2728 2.01377 17.6518 1.47572 14.6408C0.93769 11.6297 1.63837 8.60647 3.44022 6.11957C4.22853 5.02243 5.20439 4.08378 6.318 3.32791L6.35557 3.30361C8.33251 1.97478 10.6348 1.27994 13.0372 1.27994C15.3519 1.27994 17.5917 1.93827 19.5186 3.19385L19.894 3.43766L18.9055 4.83957L22.3714 4.51051ZM19.8438 17.1887C20.0064 17.1887 20.1566 17.1033 20.2317 16.9571C20.3443 16.7499 20.2567 16.4938 20.044 16.3842L12.7868 12.727V5.01037C12.7868 4.77877 12.5866 4.5837 12.3488 4.5837C12.1111 4.5837 11.911 4.77874 11.911 5.01037V13.239L19.6436 17.14C19.7062 17.1765 19.7687 17.1887 19.8438 17.1887Z"
                              fill="#F29100" />
                          </svg>
                        </div>
                        <div class="text-xsb text-[#F29100] ml-3">
                          Failed
                        </div>
                      </div>

                      <div v-if="item.valid" class="w-full flex mt-2 px-6">
                        <div class="flex justify-center items-center bg-white rounded-sm cursor-pointer w-6 h-6">
                          <svg width="18" height="18" viewBox="0 0 18 13" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z"
                              fill="#6FBD09" />
                          </svg>
                        </div>
                        <div class="text-xsb text-gray-600 ml-3">Verified</div>
                      </div>

                      <div v-if="!item.default" class="flex w-full mt-2 pt-2 pb-2 px-6 border-t border-slate-200">
                        <div class="w-full flex items-center justify-between space-x-4">
                          <div @click="deleteBankAcnt(item)"
                            class="flex justify-center items-center bg-white rounded-sm shadow cursor-pointer w-7 h-7">
                            <svg width="18" height="18" viewBox="0 0 24 28" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                                fill="#FC2323" />
                            </svg>
                          </div>

                          <div v-if="!item.valid" @click="editAccountDet(item)"
                            class="flex justify-center items-center bg-white rounded-sm shadow cursor-pointer w-7 h-7">
                            <svg width="12" height="12" viewBox="0 0 27 27" fill="none">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                                fill="rgb(245 158 11)"></path>
                            </svg>
                          </div>



                          <div v-if="item.valid" v-show="!loading" @click="makeAsDefault(item)"
                            class="form-check form-switch">
                            <label class="form-check-label inline-block text-gray-500 text-sm"
                              for="flexSwitchCheckDefault">set as default</label>
                            <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300
                                    focus:outline-none cursor-pointer shadow-sm " type="checkbox" role="switch"
                              id="flexSwitchCheckDefault" />
                          </div>
                          <Spinner v-show="loading" />
                        </div>
                      </div>
                    </div>                  
                </div>

              </div>



              <div class="flex flex-col w-full mt-5 pb-5">
                <div class="w-full flex items-center mb-4">
                  <img src="~/assets/images/food/tips.svg" alt="icon">
                  <h2 class="text-base text-gray-900 font-normal ml-2 mt-2">Tips</h2>
                </div>
                <div class="w-full mb-2 pl-4 flex">
                  <div class="mr-2 flex justify-start">
                    <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                      <path d="M9 6.15674L0.75 12.2189L0.75 0.0945606L9 6.15674Z" fill="#C4C4C4"></path>
                    </svg>
                  </div>
                  <div class="tips-list">
                    <p class="text-darkcolor text-xs">Add your bank account or any UPI account to withdraw your money from
                      gintaa</p>
                  </div>
                </div>
                <div class="w-full mb-2 pl-4 flex">
                  <div class="mr-2 -start">
                    <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                      <path d="M9 6.15674L0.75 12.2189L0.75 0.0945606L9 6.15674Z" fill="#C4C4C4"></path>
                    </svg>
                  </div>
                  <div class="tips-list">
                    <p class="text-darkcolor text-xs">
                      Receive money in your default bank account
                    </p>
                  </div>
                </div>
              </div>

            
            </div>



            <!-- <div class="grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-2  mt-0"> 
                          <div class="relative z-0 w-full ">
                                     <input type="text" name="name" placeholder=" " required  autocomplete="off"  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"/>   
                                   <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Fssai Food License Number</label>
        
                                  </div>
                                  <div class="relative z-0 w-full ">
                                     <input type="text" name="name" placeholder=" " required  autocomplete="off"  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"/>   
                                   <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Minimum Order value</label>
        
                                  </div>

                   </div>

                   <div class="flex justify-end mt-8">
                        <button class="bg-green text-white text-sm px-5 py-3 rounded text-center min-w-[130px]">Submit</button>
                   </div> -->





          </div>

        </div>


      </div>

    </div>

    <GintaaFoodVendorFooter />

    <GintaaFoodModalGMap v-if="showaddAddressModal" @closeMapModal="closeMapModal" @savedAddress="savedAddress" />
    <!--pop up-->

    <div v-if="showEditModal" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">

          <div
            class="relative w-full transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div class="absolute top-0 right-0 pt-4 pr-4 ">
              <button @click="closeEditModal()" type="button" class="rounded-md bg-white text-gray-400">
                <span class="sr-only">Close</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="sm:flex sm:items-start">
              <div class="mt-0 text-left">
                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Edit Restaurant Information
                </h3>

              </div>
            </div>
            <div>

              <div class="relative z-0 w-full mt-4">
                <input type="number" name="minOrderPrice" placeholder=" " @input="handleChange"
                  v-model="updatedrestaurantInfo.minOrderPrice" @keydown="limitDecimalPlaces($event, 2)"
                  autocomplete="off"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />

                <label for="minOrderPrice" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Minimum
                  Order
                  value</label>
                <p v-if="!minOrderPriceValidation" class="text-xs text-red-600">
                  {{ minOrderPriceValidationMsg }}
                </p>
              </div>
              <div v-if="restaurantInfo.gstPercent" class="relative z-0 w-full mt-4">
                <select placeholder="" name="gstPercent" v-model="updatedrestaurantInfo.gstPercent"
                  class="text-gray-600  block w-full mt-0 bg-transparent border-0 border-b appearance-none  focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm pt-2 pl-0 pb-2">
                  <option value="5" class="p-1">5%</option>
                  <option value="18" class="p-1">18%</option>
                </select>
                <label for="select" class=" absolute  duration-300 top-3 -z-1  origin-0 text-gray-500 text-sm "> GST
                  Percentage
                </label>
                <span class="absolute right-0 top-[15px] -z-50">
                  <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round" stroke-linejoin="round">
                    </path>
                  </svg>
                </span>
              </div>

              <div class="relative z-0 w-full mt-4">
                <input type="number" name="discountPercent" placeholder=" " @input="handleChange"
                  v-model="updatedrestaurantInfo.discountPercent" @keydown="limitDecimalPlaces($event, 2)"
                  autocomplete="off"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />

                <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Discount
                  Percent</label>
                <p v-if="!discountPercentValidation" class="text-xs text-red-600">
                  {{ discountPercentValidationMsg }}
                </p>
              </div>

              <div class="relative z-0 w-full mt-4">
                <input type="number" name="deliveryTime" placeholder=" " @input="handleChange"
                  v-model="updatedrestaurantInfo.deliveryTime" @keydown="limitDecimalPlaces($event, 2)" autocomplete="off"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />

                <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Estimate
                  Delivery Time</label>

                <p v-if="!deliveryTimeValidation" class="text-xs text-red-600">
                  {{ deliveryTimeValidationMsg }}
                </p>
              </div>

              <div class="relative z-0 w-full mt-4">
                <input type="number" name="deliveryCharge" placeholder=" " @input="handleChange"
                  v-model="updatedrestaurantInfo.deliveryCharge" @keydown="limitDecimalPlaces($event, 2)"
                  autocomplete="off"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />

                <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Delivery
                  Charge</label>
                <p v-if="!deliveryChargeValidation" class="text-xs text-red-600">
                  {{ deliveryChargeValidationMsg }}
                </p>
              </div>


            </div>
            <div class="mt-5 sm:mt-5  ">

              <button type="button" :disabled="!isUpdateformValid"
                :class="!isUpdateformValid ? 'opacity-50' : 'opacity-100'"
                class="inline-flex w-full justify-center rounded-sm bg-firoza px-3 py-2 text-sm font-semibold text-white shadow-sm "
                @click="updateResturantProfile()">

                <span v-show="!loading">Update</span>
                <Spinner v-show="loading" />
              </button>
              <!-- <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <CropImage v-if="image.src" :image="image" @updateUserData="updateUserData" />

    <VerifyOtp :otp="otp" v-if="showOtpModal" :showOtpModal="showOtpModal" @closeOtpModal="closeOtpModal"
      @otpValidated="otpValidated" />

    <!-- Bank account delete confirm modal start -->
    <div v-if="deleteAcntModal" class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="inline-block bg-white rounded-lg text-left shadow-xl transform transition-all align-middle max-w-md w-full pt-3">
            <button @click="cancelDlt()" type="button" id="close-btns"
              class="absolute z-40 top-0 right-0 inline-flex rounded-md border border-transparent px-4 py-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                  fill="black" fill-opacity="0.3"></path>
              </svg>
            </button>
            <div class="flex flex-col w-full px-6">
              <h1 class="text-base text-gray-900 font-normal">Confirmation</h1>
            </div>
            <div class="w-full flex justify-center items-center pt-3 px-6 mt-1">
              <div class="rounded-full border border-dotted border-red-600 w-12 h-12 flex justify-center items-center">
                <svg width="25" height="25" viewBox="0 0 24 28" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                    fill="#FC2323"></path>
                </svg>
              </div>
            </div>
            <div class="w-full flex justify-center items-center pt-1 px-6 mt-3">
              <div class="text-sm text-gray-500 text-center">Are you sure you want to delete selected bank account </div>
            </div>
            <div class="w-full flex justify-center items-center px-6">
              <div class="text-sm text-red-600 text-center">permanently?</div>
            </div>
            <div class="w-full flex items-center justify-between mt-10 px-6 bg-gray-50 py-1 rounded-br-lg rounded-bl-lg">
              <button @click="cancelDlt()" type="submit" class="flex items-center justify-center text-center mr-6 py-1 px-3 h-12 rounded border-0 border-gray-300 w-30 text-base leading-10 font-bold text-gray-400
                         w-full"> <span>Cancel </span>
              </button>

              <button type="submit" @click="confirmDeleteAcnt()"
                class="transition-all w-full flex justify-center ml-3 items-center border border-red-500
                       bg-red-500 py-2 px-6 rounded font-normal text-base text-white hover:bg-firoza hover:border-firoza">
                <span v-show="!loading">Yes
                  Delete</span>
                <Spinner v-show="loading" />
                <svg role="status" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-firoza" style="display: none;">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"></path>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- Bank account delete confirm modal end class="hidden"-->

            <!-- Time Interval delete confirm modal start -->
            <div v-if="deleteTimeIntervalModal" class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="inline-block bg-white rounded-lg text-left shadow-xl transform transition-all align-middle max-w-md w-full pt-3">
            <button @click="cancelDltTimeInterval()" type="button" id="close-btns"
              class="absolute z-40 top-0 right-0 inline-flex rounded-md border border-transparent px-4 py-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                  fill="black" fill-opacity="0.3"></path>
              </svg>
            </button>
            <div class="flex flex-col w-full px-6">
              <h1 class="text-base text-gray-900 font-normal">Confirmation</h1>
            </div>
            <div class="w-full flex justify-center items-center pt-3 px-6 mt-1">
              <div class="rounded-full border border-dotted border-red-600 w-12 h-12 flex justify-center items-center">
                <svg width="25" height="25" viewBox="0 0 24 28" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                    fill="#FC2323"></path>
                </svg>
              </div>
            </div>
            <div class="w-full flex justify-center items-center pt-1 px-6 mt-3">
              <div class="text-sm text-gray-500 text-center">Are you sure you want to delete this time Interval  </div>
            </div>
            <div class="w-full flex justify-center items-center px-6">
              <div class="text-sm text-red-600 text-center">permanently?</div>
            </div>
            <div class="w-full flex items-center justify-between mt-10 px-6 bg-gray-50 py-1 rounded-br-lg rounded-bl-lg">
              <button @click="cancelDltTimeInterval()" type="submit" class="flex items-center justify-center text-center mr-6 py-1 px-3 h-12 rounded border-0 border-gray-300 w-30 text-base leading-10 font-bold text-gray-400
                             w-full"> <span>Cancel </span>
              </button>

              <button type="submit" @click="confirmDeleteTimeInterval()"
                class="transition-all w-full flex justify-center ml-3 items-center border border-red-500
                           bg-red-500 py-2 px-6 rounded font-normal text-base text-white hover:bg-firoza hover:border-firoza">
                <span v-show="!loading">Yes
                  Delete</span>
                <Spinner v-show="loading" />
                <svg role="status" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-firoza" style="display: none;">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"></path>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- Time Interval delete confirm modal end-->

    <addBankAccount v-if="showadAcountPopup" @closeaddAcntMod="closeaddAcntMod" @accountAdded="accountAdded" />
    <editBankAccount v-if="showeditAcountPopup" :editedItem="editedItem" @closeeditAcntMod="closeeditAcntMod"
      @accountUpdated="accountUpdated" />
    <resturantOperationalHour v-if="showaddTimeSlotModal" @closeaddIntevalModal="closeaddIntevalModal" @intervaltimeAddSuccessFull="intervaltimeAddSuccessFull" />

    <editResturantOperationalHour v-if="showEdittimeModal" @closeeditIntevalModal="closeeditIntevalModal" :editeditem="editeditem" :resInterValList = "resInterValList" @editedInterValTime="editedInterValTime"/>
    <!-- Add Bank account modal start  @closeaddAcntMod="closeaddAcntMod" @accountAdded="accountAdded" -->

    <!-- Add Bank account modal end -->

  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import 'vue2-datepicker/index.css';
import VueTimepicker, { f } from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'
import DatePicker from 'vue2-datepicker'
export default {
  name: 'restaurantProfilePage',
  components: {
    Cropper,
    DatePicker,
    VueTimepicker
  },
  data() {
    return {
      showaddTimeSlotModal:false,
      editeditem : {},
      showEdittimeModal : false,
      resInterValList : [],
      deletedInterval: {
        rid: '',
        workingIntervals: [
        ]
      },
      workingIntervals: [],
      resOpenCloseTime: [
        {
          openingTime: "",
          closingTime: ""
        }],
      deleteAcntModal: false,
      deleteTimeIntervalModal: false,
      seletedDltItem: '',
      resAccountDet: [],
      showaddAddressModal: false,
      showadAcountPopup: false,
      showeditAcountPopup: false,
      editedItem: {},
      loading: false,
      showEditModal: false,
      isUpdateformValid: true,
      showLoader: true,
      restaurantInfo: {
        rid: null,
        name: null,
        photoUrl: null,
        fssaiNumber: null,
        tradeLicense: null,
        minOrderPrice: null,
        gstNumber: null,
        gstPercent: null,
        estimateDeleveryTime: null,
        discountAmount: null,
        status: 'OFFLINE',
        phoneNumber: null,
        email: null,
        location: {},
        deliveryCharge: null,
        deliveryTime: null,
        discountPercent: null,
        licenseNumber: null
      },

      updatedrestaurantInfo: {
        rid: null,
        minOrderPrice: null,
        deliveryTime: null,
        gstPercent: null,
        //deliveryTime: null,
        deliveryCharge: null,
        discountPercent: null,
      },
      image: {
        src: null,
        type: null, //"image/jpg",
        name: null
      },
      edidMode: null,
      emailId: '',
      phnNo: '',
      showEmailErrorMsg: '',
      phnErrorMessage: '',
      showVerifyButton: false,
      showOtpModal: false,
      otp: {
        otp: "",
        email: "",
        phnNumber: "",
        verificationTransactionId: null,
        error: null,
        valid: false,
      },

      apiUrls: this.$config.apiUrls,
      showPhoneVerifyButton: false,
      updatedEmailId: '',
      updatedPhoneno: '',
      resStatus: '',
      //Validation Start
      minOrderPriceValidation: true,
      minOrderPriceValidationMsg: '',
      discountPercentValidation: true,
      discountPercentValidationMsg: '',
      deliveryTimeValidation: true,
      deliveryTimeValidationMsg: '',
      deliveryChargeValidation: true,
      deliveryChargeValidationMsg: ''

    }
  },

  computed: {
    ...mapState({
      authUser: state => state.authUser
    })
  },
  mounted() {
    if (this.authUser) {
      this.restaurantInfo.rid = this.authUser.uid
      this.getRestaurantDetails()
      this.getResBankAcntDet()
    }
  },
  methods: {

    closeeditIntevalModal(){
    this.showEdittimeModal = false
    },

    editedInterValTime(resIntervalLst){
    this.closeeditIntevalModal()
    this.workingIntervals = resIntervalLst
    },

    cancelDltTimeInterval(){
      this.deleteTimeIntervalModal = false
      this.deletedInterval.workingIntervals = []
    },

    addTimeSlots(){
    this.showaddTimeSlotModal = true
    },

    closeaddIntevalModal(){
      this.showaddTimeSlotModal = false
    },
    intervaltimeAddSuccessFull(){
     this.getRestaurantDetails()
     this.closeaddIntevalModal()
    },

    editResOperationHour(editeditem){
     console.log("editeditem",editeditem)
     this.editeditem = editeditem
     this.resInterValList = this.workingIntervals
     this.showEdittimeModal = true
    },

    deleteTImeInterval(item) {
      console.log("item", item)
      if(this.deletedInterval.workingIntervals.length){
        this.deletedInterval.workingIntervals = []
      }
      this.deletedInterval.rid = this.authUser?.uid
      this.deletedInterval.workingIntervals.push(item.id)
      this.deleteTimeIntervalModal = true

      console.log("this.deletedInterval",this.deletedInterval)
    }, 

async confirmDeleteTimeInterval(){
      console.log("this.deletedInterval",this.deletedInterval)
      let postObj = this.deletedInterval
      console.log("postObj",postObj)
      //let params = {this.deletedInterval}
      this.loading = true
      try {
        const url = `/flisting/v1/restaurant/working-intervals`
        const data = await this.$axios.$delete(url,{data:postObj});
        if (data.success) {
          Vue.$toast.success(data?.message);
         // this.cancelDlt()
          this.getRestaurantDetails()
          this.deleteTimeIntervalModal = false
          this.deletedInterval.workingIntervals = []
        }
        this.loading = false
      } catch (error: any) {
        this.deletedInterval.workingIntervals = []
        this.loading = false
        Vue.$toast.error(error?.response?.data?.message);
        console.log(error);
      }
    },

    tConvert(time) {
      // Check correct time format and split into components
      time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join(''); // return adjusted time or original string
    },

    maskCardNumber(acntNumberNumber) {
      if (typeof acntNumberNumber === 'number') {
        acntNumberNumber = acntNumberNumber.toString()

        if (acntNumberNumber.length > 0) {
          return acntNumberNumber.slice(-4).padStart(acntNumberNumber.length, '*')
        }
      } else if (typeof acntNumberNumber === 'string') {
        if (acntNumberNumber.length > 0) {
          let checkEveryDigit = acntNumberNumber.split('').every(Number)

          if (checkEveryDigit) {
            return acntNumberNumber.slice(-4).padStart(acntNumberNumber.length, '*')
          }
        }
      }
      return acntNumberNumber
    },

    deleteBankAcnt(selectedItem) {
      this.seletedDltItem = selectedItem.id
      this.deleteAcntModal = true
    },
    cancelDlt() {
      this.seletedDltItem = ''
      this.deleteAcntModal = false
    },

    editAccountDet(selectedEditItem) {
      console.log("selectedEditItem", selectedEditItem)
      this.showeditAcountPopup = true
      this.editedItem = selectedEditItem
    },

    async confirmDeleteAcnt() {
      this.loading = true
      try {
        const url = `/users/v1/user/fund-account/id/${this.seletedDltItem}`
        const data = await this.$axios.$delete(url);
        if (data.success) {
          Vue.$toast.success(data?.message);
          this.cancelDlt()
          this.getResBankAcntDet()
        }
        this.loading = false
      } catch (error: any) {
        this.loading = false
        Vue.$toast.error(error?.response?.data?.message);
        console.log(error);
      }
    },

    async makeAsDefault(selectedBank) {
      console.log("selectedBank", selectedBank.id)
      this.loading = true
      try {
        const url = `/users/v1/user/fund-account/change/default/${selectedBank.id}`
        const data = await this.$axios.$put(url);
        if (data.success) {
          Vue.$toast.success(data?.message);
          this.getResBankAcntDet()
        }
        this.loading = false
      } catch (error: any) {
        // this.showLoader = false
        this.loading = false
        Vue.$toast.error(error?.response?.data?.message);
        console.log(error);
      }
    },

    async getResBankAcntDet() {
      try {
        const url = `/users/v1/user/fund-account/all`
        const data = await this.$axios.$get(url);
        if (data && data.payload) {
          console.log(" data.payload", data.payload)
          this.resAccountDet = data.payload
        }
      } catch (error) {
        // this.showLoader = false
        console.log(error);
      }
    },

    openAddBankAccountPopup() {
      this.showadAcountPopup = true
    },

    closeaddAcntMod() {
      this.showadAcountPopup = false
    },
    closeeditAcntMod() {
      this.showeditAcountPopup = false
    },
    accountAdded() {
      this.closeaddAcntMod()
      this.getResBankAcntDet()
    },
    accountUpdated() {
      this.closeeditAcntMod()
      this.getResBankAcntDet()
    },
    editName() {

      if (this.resStatus === 'ONLINE') {
        this.showMakeResOfflineMsg()
        return false
      }
      this.edidMode = 'name'
    },

    resturantStatus(resStatus) {
      console.log("resStatus", resStatus)
      this.resStatus = resStatus
    },

    limitDecimalPlaces(e, count) {

      if (e.key === '-') {
        e.preventDefault();
      } else if (e.key === '.') {
        e.preventDefault();
      } else if (e.key === '+') {
        e.preventDefault();
      } else if (e.key === 'e' || e.key === 'E') {
        e.preventDefault();
      }
    },

    handleChange(evt) {
      let keyName = evt.target.name;

      let fieldName = evt.target.name

      switch (fieldName) {

        case 'minOrderPrice':
          if (evt.target.value < 1) {
            this.updatedrestaurantInfo.minOrderPrice = null
          }
          if (!this.updatedrestaurantInfo.minOrderPrice) {
            this.minOrderPriceValidationMsg = "Minimum order price is required"
            this.minOrderPriceValidation = false
          } else if (this.updatedrestaurantInfo.minOrderPrice.length > 5) {
            this.minOrderPriceValidationMsg = "Minimum order price should withing 0 to 99999"
            this.minOrderPriceValidation = false
          } else {
            this.minOrderPriceValidation = true
          }

          break;


        case 'deliveryTime':

          if (evt.target.value < 1) {
            this.updatedrestaurantInfo.deliveryTime = null
          }

          if (!this.updatedrestaurantInfo.deliveryTime) {
            this.deliveryTimeValidation = false,
              this.deliveryTimeValidationMsg = "Estimate Delivery Time is required"
          } else if (this.updatedrestaurantInfo.deliveryTime > 120) {
            this.deliveryTimeValidation = false,
              this.deliveryTimeValidationMsg = "Estimate Delivery Time should not be more than 120 minutes"
          } else {
            this.deliveryTimeValidation = true,
              this.deliveryTimeValidationMsg = ''
          }

          break;
        case 'discountPercent':

          if (this.updatedrestaurantInfo.discountPercent === null || this.updatedrestaurantInfo.discountPercent == '') {
            this.discountPercentValidation = false
            this.discountPercentValidationMsg = "Discount Percent is required"
          } else if (this.updatedrestaurantInfo.discountPercent > 100) {
            this.discountPercentValidation = false
            this.discountPercentValidationMsg = "Discount Percent should not be more than 100"
          } else {
            this.discountPercentValidation = true
            this.discountPercentValidationMsg = ""
          }

          break;

        case 'deliveryCharge':
          console.log("----------------deliveryChargerequired")
          console.log("this.updatedrestaurantInfo.deliveryCharge", this.updatedrestaurantInfo.deliveryCharge)

          if (this.updatedrestaurantInfo.deliveryCharge == null || this.updatedrestaurantInfo.deliveryCharge == '') {
            console.log("delivery chgre valu nei")
            this.deliveryChargeValidation = false
            this.deliveryChargeValidationMsg = "Delivery Charge is required"
          } else if (this.updatedrestaurantInfo.deliveryCharge >= 1000) {
            this.deliveryChargeValidation = false
            this.deliveryChargeValidationMsg = "Delivery Charge should not be more than 999"
          } else {
            this.deliveryChargeValidation = true,
              this.deliveryChargeValidationMsg = ''
          }

          break;
        default:
        // text = "Looking forward to the Weekend";
      }


      this.checkIsFormValid()
    },

    checkIsFormValid() {

      if (!this.minOrderPriceValidation || !this.discountPercentValidation || !this.deliveryTimeValidation || !this.deliveryChargeValidation) {
        this.isUpdateformValid = false
      } else {
        this.isUpdateformValid = true
      }

    },

    showMakeResOfflineMsg() {
      Vue.$toast.warning('Can not update restaurant while restaurant is Online!')

    },
    editBasicInfo() {

      if (this.resStatus === 'ONLINE') {
        this.showMakeResOfflineMsg()
        return false
      }
      this.updatedrestaurantInfo.rid = this.restaurantInfo.rid,
        this.updatedrestaurantInfo.gstPercent = this.restaurantInfo.gstPercent ? this.restaurantInfo.gstPercent : 5
      this.updatedrestaurantInfo.minOrderPrice = this.restaurantInfo.minOrderPrice
      this.updatedrestaurantInfo.deliveryTime = this.restaurantInfo.deliveryTime,
        this.updatedrestaurantInfo.deliveryCharge = this.restaurantInfo.deliveryCharge,
        this.updatedrestaurantInfo.discountPercent = this.restaurantInfo.discountPercent,
        this.showEditModal = true
    },
    closeEditModal() {
      this.showEditModal = false
      this.deliveryTimeValidationMsg = ''
      this.minOrderPriceValidationMsg = ''
      this.deliveryChargeValidationMsg = ''
      this.minOrderPriceValidationMsg = ''
    },
    chnageAddress() {
      if (this.resStatus === 'ONLINE') {
        this.showMakeResOfflineMsg()
        return false
      }
      this.showaddAddressModal = true
    },
    closeMapModal() {
      this.showaddAddressModal = false
    },

    async updateResturantProfile() {
      // console.log("------------",this.updatedrestaurantInfo)
      this.loading = true
     // console.log(this.updatedrestaurantInfo)
      if(this.restaurantInfo.gstNumber == 'UNREGISTERED'){
        this.updatedrestaurantInfo.gstPercent = 0
      }
      
      try {
        const url = '/flisting/v1/restaurant'
        const data = await this.$axios.$put(url, this.updatedrestaurantInfo);
        // console.log('Update Restaurant info:', data)
        if (data && data.payload) {
          this.restaurantInfo.gstPercent = data.payload.gstPercent
          this.restaurantInfo.minOrderPrice = data.payload.minOrderPrice
          this.restaurantInfo.deliveryTime = data.payload.deliveryTime
          this.restaurantInfo.deliveryCharge = data.payload.deliveryCharge
          this.restaurantInfo.discountPercent = data.payload.discountPercent

        }



        this.loading = false
        this.closeEditModal()

      } catch (error: any) {
        this.loading = false
        Vue.$toast.error(error?.response?.data?.message);
        console.log(error);
      }
    },
    savedAddress(location: any) {
      console.log("locationlocationlocationlocationlocation", location)
      if (location) {
        this.restaurantInfo.location = location
        this.closeMapModal()
      }

    },
    async getRestaurantDetails() {
      try {
        const url = `/flisting/v1/restaurant/${this.restaurantInfo.rid}`
        const data = await this.$axios.$get(url);
        if (data && data.payload) {
          console.log(" data.payload", data.payload)
          const restaurantData = data.payload

          console.log('restaurantData:', restaurantData);

          this.workingIntervals = restaurantData.workingIntervals ? restaurantData.workingIntervals : []

          if (restaurantData && restaurantData.photoUrl) {
            this.restaurantInfo.photoUrl = restaurantData.photoUrl
          }

          this.restaurantInfo.fssaiNumber = restaurantData.fssaiNumber
          this.restaurantInfo.gstNumber = restaurantData.gstNumber
          this.restaurantInfo.gstPercent = restaurantData.gstPercent
          this.restaurantInfo.minOrderPrice = restaurantData.minOrderPrice
          this.restaurantInfo.status = restaurantData.status
          this.restaurantInfo.name = restaurantData.name
          this.restaurantInfo.phoneNumber = restaurantData.phoneNumber
          this.restaurantInfo.email = restaurantData.email
          this.restaurantInfo.location = restaurantData.location
          this.restaurantInfo.deliveryCharge = restaurantData.deliveryCharge,
            this.restaurantInfo.deliveryTime = restaurantData.deliveryTime,
            this.restaurantInfo.discountPercent = restaurantData.discountPercent
          this.restaurantInfo.licenseNumber = restaurantData.licenseNumber
        }



        this.showLoader = false

      } catch (error) {
        this.showLoader = false
        console.log(error);
      }
    },

    processDisplayAddress(location: any) {
      let addressLine: string = ''
      if (location) {
        if (location.addressLine) {
          addressLine += location.addressLine + ', '
        }
        if (location.area) {
          addressLine += location.area + ', '
        }
        if (location.city) {
          addressLine += location.city + ', '
        }
        if (location.landmark) {
          addressLine += location.landmark + ', '
        }
        if (location.state) {
          addressLine += location.state + ', '
        }
        if (location.country) {
          addressLine += location.country + ', '
        }
        if (location.zip) {
          addressLine += location.zip
        }

        addressLine = addressLine.trim()
      }
      return addressLine
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
    updateUserData(userData: any) {
      //  console.log('uploadProfileImage uData:', userData)
      if (userData && userData.payload) {
        const photoUrl = userData.payload.photoUrl
        this.restaurantInfo.photoUrl = photoUrl
      }
    },


    closeUpdate() {
      this.edidMode = null;
      // this.nameErrMsg = '';
      // this.dateErrMsg = '';
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
    otpValidated() {
      this.showOtpModal = false
      this.closeOtpModal()
      this.restaurantInfo.email = this.updatedEmailId ? this.updatedEmailId : this.restaurantInfo.email,
        this.restaurantInfo.phoneNumber = this.updatedPhoneno ? this.updatedPhoneno : this.restaurantInfo.phoneNumber
    },

    editResEmail() {
      if (this.resStatus === 'ONLINE') {
        this.showMakeResOfflineMsg()
        return false
      }
      this.emailId = this.restaurantInfo.email
      this.edidMode = 'email';
    },
    closeEmailUpdate() {
      this.edidMode = null;
      this.showEmailErrorMsg = '',
        this.phnErrorMessage = ''
    },

    editPhoneNo() {
      if (this.resStatus === 'ONLINE') {
        this.showMakeResOfflineMsg()
        return false
      }
      this.phnNo = this.remove91ToPhoneNumber(this.restaurantInfo.phoneNumber);
      this.edidMode = 'mobile';
    },

    closePhoneUpdate() {
      this.edidMode = null;
      this.showEmailErrorMsg = '',
        this.phnErrorMessage = ''
    },

    onEmailChange(editedEmailId: string, email: string) {
      this.isValidEmail = this.$isValidEmail(editedEmailId);

      if (!this.isValidEmail) {
        this.showEmailErrorMsg = this.$t('enterAValidEmail');
        this.showVerifyButton = false
      } else {
        this.showEmailErrorMsg = this.$t('pleaseVerifyEmail');
        this.showVerifyButton = true
      }

      if (editedEmailId === email) {

        this.isEmailVerified = true;
        this.showVerifyButton = false
        this.showEmailErrorMsg = ''
      } else {
        this.isEmailVerified = false;
      }

      if (editedEmailId && editedEmailId !== email && this.isValidEmail) {
        this.showVerifyButton = true
      }
    },

    onPhnNoChange(editedPhnNo: string, userCurrentPhn: string) {

      //console.log("editedPhnNoeditedPhnNoeditedPhnNoeditedPhnNo",editedPhnNo,userCurrentPhn)
      if (editedPhnNo) {

        if (!this.$isValidMobile(editedPhnNo)) {
          this.phnErrorMessage = this.$t('enterValidNu')
          this.showPhoneVerifyButton = false
        } else {
          this.phnErrorMessage = ""
          this.showPhoneVerifyButton = true
        }

      } else {
        this.phnErrorMessage = this.$t('phoneNuRequired')
        this.showPhoneVerifyButton = false
      }
      // console.log("userCurrentPhn",userCurrentPhn)
      // console.log("editedPhnNo",editedPhnNo)

      if (editedPhnNo && userCurrentPhn && this.$isValidMobile(editedPhnNo) && this.remove91ToPhoneNumber(userCurrentPhn) == editedPhnNo) {
        this.showPhoneVerifyButton = false
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

    async sendOtpForPhoneVerification(phonenumber: string) {

      this.updatedPhoneno = phonenumber
      this.updatedEmailId = ''

      if (this.$isValidMobile(phonenumber)) {
        this.loading = true;
        let requestBody = {};
        let phoneNumber = phonenumber;
        let sendOtp = await this.$axios
          .post(`/users/v1/user/mobile/initiate/${phoneNumber}`, requestBody)
          .then((response) => {
            this.loading = false;
            return response.data;
          })
          .catch((error) => {
            this.loading = false;
            return error.response.data;

          });


        if (!sendOtp.success) {
          this.phnErrorMessage = sendOtp.message;

        } else {
          this.otp.verificationTransactionId = sendOtp.payload.transactionId;
          this.otp.phnNumber = phoneNumber;
          this.showOtpModal = true;
        }

        this.loading = false;
      }
      // sendOtpForEmail
    },

    async sendOtpForEmailVerification(emailId: string) {

      this.updatedEmailId = emailId
      this.updatedPhoneno = ''

      if (emailId) {
        this.loading = true;
        let requestBody = {};
        let email = emailId;
        let requestUrl = this.apiUrls.sendOtpForEmail;
        requestUrl = requestUrl.replace("{email}", email);
        let sendOtp = await this.$axios
          .post(requestUrl, requestBody)
          .then((response) => {
            this.loading = false;
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
      this.loading = false;
    },


    closeOtpModal() {

      this.showEmailErrorMsg = '',
        this.phnErrorMessage = '',
        this.edidMode = null,
        this.showOtpModal = false
      this.otp = {
        otp: "",
        email: "",
        phnNumber: "",
        verificationTransactionId: null,
        error: null,
        valid: false,
      }
    },
    async updateUser() {

      const user = {
        name: this.restaurantInfo.name
      };

      this.showLoader = true;
      let url = `/users/v1/user/profile`;
      try {
        const data = await this.$axios.$put(url, user);
        this.closeUpdate();
        // this.getRestaurantDetails()
        this.showLoader = false;
      } catch (error) {
        console.log(error);
        this.showLoader = false;
      }
    },
  }
}
</script>

<style>
.-z-1 {
  z-index: -1;
}

.vue-advanced-cropper__foreground,
.vue-advanced-cropper__background {
  background: #f9f9f9 !important;
  width: 100% !important;
}

.origin-0 {
  transform-origin: 0%;
}

input[type="text"]:focus~label,
input[type="email"]:focus~label,
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
select:focus~label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(72, 206, 243, var(--tw-text-opacity));
  left: 0px;
}

.order-date-picker .mx-datepicker-range {
  width: 210px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  height: 30px;
  padding: 0px 1px 0px 6px;
}

input[type="text"]:not(:placeholder-shown)~label,
input[type="number"]:not(:placeholder-shown)~label,
select:not([value='']):valid~label {
  color: rgba(72, 206, 243, var(--tw-text-opacity));
}</style>