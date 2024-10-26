<template>
  <div>
    <fullPageLoader v-if="loading" />
    <section class="relative bg-[#ffffff] sm:bg-[#e6e8f0] rounded  min-h-screen flex flex-col justify-center  md:py-6 sm:px-6 lg:px-8 sm:bg-login-bg bg-cover bg-top">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <client-only>
          <div v-if="userBasicInfo.phone || userBasicInfo.email" v-show="step==='basic-info'" class=" bg-white py-8 px-4 sm:shadow sm:rounded-lg sm:px-10 relative min-h-[520px]">
            <div class="text-center flex justify-center  mt-4 mb-6">
              <img src="~assets/images/complete_b.png" alt="complete" class="max-w-full w-[170px]">
            </div>
            <form @submit.prevent="updateBasicInfo()">
              <h2 class="text-left text-xl pb-2 font-bold text-gray-600">
               {{ $t('completeProfile') }} 
              </h2>
              <div class="text-xs text-gray-500 pb-8">
                {{ $t('completeSubtext') }} 
              </div>
              <div v-if="isVerifiedMobile" class="relative pl-[55px]">
                <svg
                  v-if="isVerifiedMobile"
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  class="absolute top-5 right-0"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8bc63e" />
                </svg>

                <div class="absolute pb-2 font-normal  border-b border-gray-200 text-sm text-gray-600 left-0 -top-[12px] pr-3">
                  <span class="block text-[10px] text-gray-400 pb-1">  {{ $t('code') }} </span>
                {{ $t('nineone') }}
                </div>
                <div class="relative z-0 w-full mb-7">
                  <input
                    v-model="userBasicInfo.phone"
                    type="number"
                    name="phone"
                    maxlength="10"
                    autocomplete="off"
                    placeholder=" "
                    :disabled="isVerifiedMobile"
                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm text-gray-600"
                    @keypress="isNumber($event)"
                    @input="onChangeMobile"
                  >
                  <label for="phone" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm"> {{ $t('mobileNumber') }}</label>
                  <span v-show="validation.phone.error" class="text-xs text-errortext">{{ validation.phone.message }}</span>
                  <a v-if="isValidMobile && !isVerifiedMobile" href="javascript:;" class="absolute right-0 top-3 text-firoza text-sm" @click="sendOtpForMobileVerification()">
                    {{ $t('sendOtp') }}</a>
                </div>
              </div>
              <div v-if="isVerifiedEmail" class="relative z-0 w-full mb-8">
                <svg
                  v-if="isVerifiedEmail"
                  width="18"
                  height="13"
                  viewBox="0 0 18 13"
                  fill="none"
                  class="absolute top-5 right-0"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8bc63e" />
                </svg>
                <input
                  v-model="userBasicInfo.email"
                  type="email"
                  name="email"
                  :disabled="isVerifiedEmail"
                  autocomplete="off"
                  placeholder=" "
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                  @input="onChangeEmailInput"
                  @keyup="fieldValidation('email', userBasicInfo.email)"
                >
                <label for="email" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm"> {{ $t('enterEmail') }} </label>

                <span v-show="validation.email.error" class="text-xs text-errortext">{{ validation.email.message }}</span>
                <a v-if="isValidEmail && !isVerifiedEmail" href="javascript:;" class="absolute right-0 top-3 text-firoza text-sm" @click="sendOtpForEmailVerification()">
                  {{ $t('sendOtp') }}</a>
              </div>

              <div class="relative z-0 w-full mb-8">
                <input
                  v-model="userBasicInfo.name"
                  type="text"
                  name="fullName"
                  autocomplete="off"
                  placeholder=" "
                  minlength="2"
                  maxlength="30"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                  @keyup="fieldValidation('name', userBasicInfo.name)"
                >
                <label for="fullName" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">   {{ $t('fullName') }}</label>
                <span v-if="validation.name.error" class="text-xs text-errortext">{{ validation.name.message }}</span>
              </div>
            <div class="relative z-0 w-full mb-8">
             <input v-model="promoCode" type="text" autocomplete="off" name="promo" placeholder=" " class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
             <label for="promo" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('enter_promo_code_Optional') }}</label>
            </div>
              <!-- 
              <div class="relative z-0 w-full mb-8">
                <label class=" text-gray-500 pb-3 text-[11px] block">  {{ $t('gender') }} </label>
                <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  <div class="flex items-center">
                    <input
                      id="male"
                      v-model="userBasicInfo.gender"
                      name="gender"
                      value="Male"
                      type="radio"
                      class="focus:ring-firoza h-4 w-4 text-firoza border-gray-300"
                    >
                    <label for="male" class="ml-3 block text-sm font-normal text-gray-500"> {{ $t('male') }} </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="female"
                      v-model="userBasicInfo.gender"
                      name="gender"
                      value="Female"
                      type="radio"
                      class="focus:ring-firoza h-4 w-4 text-ring-firoza border-gray-300"
                    >
                    <label for="female" class="ml-3 block text-sm font-normal text-gray-500"> {{ $t('feMale') }} </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="other"
                      v-model="userBasicInfo.gender"
                      name="gender"
                      value="Other"
                      type="radio"
                      class="focus:ring-ring-firoza h-4 w-4 text-ring-firoza border-gray-300"
                    >
                    <label for="other" class="ml-3 block text-sm font-normal text-gray-500"> {{ $t('other') }} </label>
                  </div>
                </div>
              </div>

              <div class="relative z-0 w-full mb-8">
                <label class=" text-gray-500 pb-1 text-[11px] block">{{ $t('dob') }}</label>
                
                <date-picker
                  v-model="userBasicInfo.dob"
                  :format="$config.format.date"
                  value-type="YYYY-MM-DD"
                  :disabled-date="disabledDate"
                  :default-value="eighteenYrsAgoDate"
                  placeholder=" dd/mm/yyyy"
                  :clearable="false"
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                />
              </div> -->

              <div v-if="formSubmitError.basicInfo.error" class="relative z-0 w-full mb-1">
                <span class="text-xs text-errortext">{{ formSubmitError.basicInfo.message }}</span>
              </div>
              <div class="mb-2">
                <button :disabled="!buttonValidation.basicInfoNextButtonEnable" :class="!buttonValidation.basicInfoNextButtonEnable ? 'opacity-50' : ''" class="relative bg-firoza text-white font-bold py-2 px-3 h-12 rounded w-full text-base">
                  {{ $t('next') }}
                <!-- <Spinner v-if="buttonLoader" class="absolute right-5 top-2"/>  -->
                </button>
              </div>
            </form>
          </div>

          <div v-show="step==='profile-photo'" class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 sm:shadow sm:rounded-lg sm:px-10 relative">
              <a href="javascript:;" class="absolute left-4" @click="changeCurrentStepPrev(step)">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z" fill="#7B7E80" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="#7B7E80" />
                </svg>
              </a>
              <h2 class="text-left text-xl pb-2 font-bold text-gray-600 pt-8 ">
                {{ $t('uploadImage') }} <span class="text-gray-500 font-normal text-xs"> {{ $t('optional') }}</span>
              </h2>
              <div class="text-xs text-gray-500 pb-16">
                {{ $t('uploadImagesubtext') }}
              </div>
              <div class=" flex flex-col justify-center items-center p-2">
                <a v-if="!image.src" href="javascript:;" @click="$refs.file.click()">
                  <div class="border-dashed border border-firoza w-40 h-40 rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1V7H1C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H9V1Z" fill="#48CEF3" />
                    </svg>
                    <input
                      ref="file"
                      type="file"
                      accept="image/*"
                      class="hidden"
                      @change="uploadImage($event)"
                    >
                  </div>
                </a>
                <div v-if="profileImageUrl" class="border-dashed border border-firoza w-40 h-40 rounded-full  flex items-center justify-center relative">
                  <a href="javascript:;" class=" absolute rounded-[4px] top-1 bg-white shadow px-1.5 py-1.5 text-xs right-1" @click="removeProfileImage">

                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83431 1.83431C5.98434 1.68429 6.18783 1.6 6.4 1.6H9.6C9.81217 1.6 10.0157 1.68429 10.1657 1.83431C10.3157 1.98434 10.4 2.18783 10.4 2.4V3.2H5.6V2.4C5.6 2.18783 5.68429 1.98434 5.83431 1.83431ZM4 3.2V2.4C4 1.76348 4.25286 1.15303 4.70294 0.702944C5.15303 0.252856 5.76348 0 6.4 0H9.6C10.2365 0 10.847 0.252856 11.2971 0.702944C11.7471 1.15303 12 1.76348 12 2.4V3.2H13.6H15.2C15.6418 3.2 16 3.55817 16 4C16 4.44183 15.6418 4.8 15.2 4.8H14.4V15.2C14.4 15.8365 14.1471 16.447 13.6971 16.8971C13.247 17.3471 12.6365 17.6 12 17.6H4C3.36348 17.6 2.75303 17.3471 2.30294 16.8971C1.85286 16.447 1.6 15.8365 1.6 15.2V4.8H0.8C0.358172 4.8 0 4.44183 0 4C0 3.55817 0.358172 3.2 0.8 3.2H2.4H4ZM3.2 4.8V15.2C3.2 15.4122 3.28429 15.6157 3.43431 15.7657C3.58434 15.9157 3.78783 16 4 16H12C12.2122 16 12.4157 15.9157 12.5657 15.7657C12.7157 15.6157 12.8 15.4122 12.8 15.2V4.8H11.2H4.8H3.2Z" fill="#FC2323" />
                    </svg>

                  </a>
                  <img :src="profileImageUrl" alt="profile" class="rounded-full w-40 h-40">
                </div>

                <!-- <ImageCropper/> -->
                <!-- Start for image cropper -->
                <div v-if="image.src && !profileImageUrl" class="">
                  <cropper v-if="image.src" ref="cropper" class="cropper" :src="image.src" />
                  <div class="flex justify-end pt-2">
                    <a href="javascript:;" class="border rounded border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700" @click="cancelCropping()"> 
                      {{ $t('cancel') }}</a>
                    <a href="javascript:;" class="rounded border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white ml-3 w-[120px] text-center" @click="cropImage()"> {{ $t('apply') }}</a>
                  </div>
                </div>
              <!-- End for image cropper -->
              </div>
              <div class="flex  mt-16 items-center justify-end">
                <button class="bg-firoza text-white font-bold py-1 px-3 h-12 rounded w-full text-base" @click="uploadImageSave()">
                  {{ $t('next') }} <Spinner v-if="buttonLoader" />
                </button>
              </div>
            </div>
          </div>

          <div v-show="step==='address-map'" class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 sm:shadow sm:rounded-lg sm:px-10 relative">
              <a href="javascript:;" class="absolute left-4 " @click="changeCurrentStepPrev(step)">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z" fill="#7B7E80" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="#7B7E80" />
                </svg>
              </a>
              <Map @selectedLocation="selectedLocation" />
            </div>
          </div>

          <div v-if="step==='address'" class="sm:mx-auto sm:w-full sm:max-w-md md:max-w-md ">
            <div class="bg-white py-8 px-4 sm:shadow sm:rounded-lg sm:px-10 relative">
              <a href="javascript:;" class="absolute left-4" @click="changeCurrentStepPrev(step)">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z" fill="#7B7E80" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="#7B7E80" />
                </svg>
              </a>
              <Address :user-address-info="userAddressInfo" @saveAddress="saveAddress" />
            </div>
          </div>
        </client-only>
      </div>
    </section>

    <!-- Start OTP for email -->
    <div v-if="showInputOtp" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[450px] sm:w-full">
          <div class="bg-white px-4 pt-5 pb-10 sm:p-6 sm:pb-8 sm:px-8">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <a
                id="close-btns"
                href="javascript:;"
                type="button"
                class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-firoza"
                @click="editEmail()"
              >
                <span class="sr-only">Close</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </a>
            </div>
            <div class="flex justify-center flex-col">
              <div class="text-center flex justify-center  w-full pb-4">
                <img src="~assets/images/mail_complete_b.png" alt="verifyEmail" class="max-w-full w-[130px]">
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-text-center">
                <h3 id="modal-title" class="text-xl leading-6 font-medium text-gray-800">
                  {{ $t('verifyEmail') }} 
                </h3>
                <div class="mt-2 text-center">
                  <p class="text-sm text-gray-500 text-center">
                    {{ $t('otpSent') }}   <span class="mr-3">{{ userBasicInfo.email }}</span>
                  </p>
                  <a href="javascript:;" class="text-firoza text-sm font-medium ml-3" @click="editEmail()">{{ $t('changeEmail') }}</a>
                </div>
              </div>
            </div>

            <div>
              <div class="relative z-0 w-full mb-8">
                <div class="text-sm text-gray-500 mb-3 relative">
                  <!-- <span class="mr-3">{{userBasicInfo.email}}</span> -->
                  <!-- <a href="javascript:;" @click="editEmail()">
                        <svg width="18" height="18" viewBox="0 0 27 27" fill="none" class="absolute top-5 right-0">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z" fill="#48CEF3"></path>
                        </svg>
                      </a> -->
                </div>
                <!-- <label class="duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('enterOtp') }} </label> -->
                <otp-view @otpChange="otpChange" />

                <span :class="[otp.error ? '' : 'hidden', 'text-xs text-errortext pt-2 block']">{{ otp.error }}</span>
                <div v-if="countDown > 0" class="text-xsb text-gray-400 pt-4">
                  {{ $t('resendOtp') }} {{ $t('in') }} <span class="font-medium text-gray-500">00:{{ String(countDown).padStart(2, '0') }}</span>
                </div>
                <a v-if="!countDown" href="javascript:;" class="right-0 bottom-3 text-firoza text-sm mt-4 inline-block " @click="sendOtpForEmailVerification('resend-otp')">
                  <span v-if="!resendOtpLoader">{{ $t('resendOtp') }}</span>
                  <Spinner v-if="resendOtpLoader" />
                </a>
              </div>
              <button :disabled="!otp.valid || buttonLoader" :class="!otp.valid || buttonLoader?'opacity-50':''" class="relative bg-firoza text-white font-bold py-2 px-3 h-12 rounded w-full text-base transition-all" @click="verifyOtp()">
                <span v-if="!buttonLoader">{{ $t('Verify') }}</span>
                <Spinner v-if="buttonLoader" class="absolute right-[40%] top-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End OTP for email -->

    <!-- Start OTP for phone -->
    <div v-if="showInputOtpPhone" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[450px] sm:w-full">
          <div class="bg-white px-4 pt-5 pb-10 sm:p-6 sm:pb-8 sm:px-8">
            <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
              <a
                id="close-btns"
                href="javascript:;"
                type="button"
                class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-firoza"
                @click="editPhone()" 
              >
                <span class="sr-only">Close</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </a>
            </div>
            <div class="flex justify-center flex-col">
              <div class="text-center flex justify-center  w-full pb-4">
                <img src="~assets/images/verify_b2.png" alt="verify" class="max-w-full w-[140px]">
              </div>
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-text-center">
                <h3 id="modal-title" class="text-xl leading-6 font-medium text-gray-800">
                 {{ $t('verifyMobileNumber') }}
                </h3>
                <div class="mt-2 text-center">
                  <p class="text-sm text-gray-500 text-center">
                    {{ $t('otpSent') }}    <span class="mr-3">{{ userBasicInfo.phone }}</span>
                  </p>
                  <a href="javascript:;" class="text-firoza text-sm font-medium ml-3" @click="editPhone()"> {{ $t('ChangeNumber') }}</a>
                </div>
              </div>
            </div>

            <div>
              <div class="relative z-0 w-full mb-8">
                <div class="text-sm text-gray-500 mb-3 relative">
                  <!-- <span class="mr-3">{{userBasicInfo.email}}</span> -->
                  <!-- <a href="javascript:;" @click="editEmail()">
                        <svg width="18" height="18" viewBox="0 0 27 27" fill="none" class="absolute top-5 right-0">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z" fill="#48CEF3"></path>
                        </svg>
                      </a> -->
                </div>
                <!-- <label class="duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('enterOtp') }}</label> -->
                <otp-view @otpChange="otpChange" />

                <span :class="[otp.error ? '' : 'hidden', 'text-xs text-errortext pt-2 block']">{{ otp.error }}</span>
                <div v-if="countDown > 0" class="text-xsb text-gray-400 pt-4">
                  {{ $t('resendOtp') }} in <span class="font-medium text-gray-500">00:{{ String(countDown).padStart(2, '0') }}</span>
                </div>
                <a v-if="!countDown" href="javascript:;" class="right-0 bottom-3 text-firoza text-sm inline-block mt-4" @click="sendOtpForMobileVerification('resend-otp')">
                  <span v-if="!resendOtpLoader">{{ $t('resendOtp') }}</span>
                  <Spinner v-if="resendOtpLoader" />
                </a>
              </div>
              <button :disabled="!otp.valid || buttonLoader" :class="!otp.valid || buttonLoader?'opacity-50':''" class="relative bg-firoza text-white font-bold py-2 px-3 h-12 rounded w-full text-base transition-all" @click="verifyOtpPhone()">
                <span v-if="!buttonLoader">{{ $t('Verify') }}</span>
                <Spinner v-if="buttonLoader" class="absolute right-[40%] top-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End OTP for phone -->

    <profilCompleteConfirmPopup v-if="profileCompletePopup" />


  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import OtpView from '~/components/atoms/OtpView.vue'
import profilCompleteConfirmPopup from '~/components/auth/profile-complete-confirm-popup.vue'
import { thisExpression } from '@babel/types'

export default Vue.extend({
  name: 'SignupPage',
  components: { DatePicker, Cropper, OtpView, profilCompleteConfirmPopup },
  middleware: 'authenticated',
  data () {
    return {
      apiUrls: this.$config.apiUrls,
      authUser : this.$store.state.authUser,
      loading: true,
      buttonLoader: false,
      resendOtpLoader: false,
      countDown: 30,
      profileCompletePopup: false,
      step: 'basic-info', // ['basic-info', 'profile-photo', 'address-map', 'address']
      userInfo: null,
      userPostData: {
        name: null,
        phone: null,
        email: null,
        dob: null,
        gender: null,
        picture: null,
        currentLocation: null,
        currentAdress: null,
        errorMessage: null
      },
      userBasicInfo: {
        name: null,
        phone: null,
        email: null,
        dob: null,
        gender: null
      },
      isValidEmail: false,
      isVerifiedEmail: false,
      isValidMobile: false,
      isVerifiedMobile: false,
      userAddressInfo: {
        addressId: null,
        name: null,
        phoneNumber: null,
        email: null,
        addressLine: null,
        lat: null,
        lng: null,
        flatNo: null,
        landmark: null,
        area: null,
        annotation: null,
        zip: null,
        city: null,
        state: null,
        country: null
      },
      image: {
        src: null,
        // "https://images.pexels.com/photos/4218687/pexels-photo-4218687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        type: null, // "image/jpg",
        name: null
      },
      profileImageUrl: null,
      showInputOtp: false,
      showInputOtpPhone: false,
      otp: {
        otp: '',
        verificationTransactionId: null,
        error: null,
        valid: false
      },
      validation: {
        name: {
          error: false,
          message: ''
        },
        email: {
          error: false,
          message: ''
        },
        phone: {
          error: false,
          message: ''
        }
      },
      buttonValidation: {
        basicInfoNextButtonEnable: false
      },
      formSubmitError: {
        basicInfo: {
          error: false,
          message: ''
        }
      },
      fromCreateListing : '',
      eighteenYrsAgoDate:'',
      promoCode: ''

    }
  },
  mounted () {
    let currDate = new Date();
    let eighteenYrsAgo = currDate.setFullYear(currDate.getFullYear()-18);
    this.eighteenYrsAgoDate = this.$moment(eighteenYrsAgo).format("YYYY-MM-DD")
    // this.getCurrentUserInfo();
    console.log('this.authUser:', this.authUser)
    if(this.authUser){
      console.log('this.authUser:', this.authUser)
      this.setBasicInfo(this.authUser)
    } else {
      this.$router.go()
    }
    
    this.fromCreateListing = JSON.stringify(window.localStorage.getItem("setPath"));
  },
  methods: {
    isNumber (evt: any) {
      evt = (evt) || window.event
      const charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    },
    onChangeMobile () {
      const validMobile = this.$isValidMobile(this.userBasicInfo.phone)

      this.isValidMobile =  validMobile

      // this.error = !this.valid
    },
    async sendOtpForMobileVerification(mode: string = 'send-otp') {
      // mode can be 'send-otp' / 'resend-otp'

      console.log(this.userBasicInfo.phone)
      if (this.isValidMobile) {
        if (mode === 'send-otp') {
          this.loading = true
        } else {
          this.resendOtpLoader = true
        }

        const requestBody = {}
        const phone = this.userBasicInfo.phone;
        let requestUrl = this.apiUrls.sendOtpForPhone;
        requestUrl = requestUrl.replace('{mobile}', phone);
        const sendOtp = await this.$axios.post(requestUrl, requestBody)
          .then((response) => {
            console.log('sendOtp response:',response);
            this.showInputOtpPhone = true

            this.countDown = 30
            this.countDownTimer()

            return response.data
          })
          .catch((error) => {
            // console.log('sendOtp response error:', error.response);
            return error.response.data
          })

        this.loading = false
        this.resendOtpLoader = false
        console.log('sendOtp:', sendOtp)
        if (!sendOtp.success) {
          this.validation.phone.error = true
          this.validation.phone.message = sendOtp.message
        } else {
          this.validation.phone.error = false
          this.validation.phone.message = ''
          this.otp.verificationTransactionId = sendOtp.payload.transactionId
        }
      }
      // sendOtpForPhone
    },

    async verifyOtpPhone () {
      if (this.otp.valid) {
        // this.loading = true;
        this.buttonLoader = true

        const requestBody = {
          verificationTransactionId: this.otp.verificationTransactionId,
          verifyOtp: this.otp.otp
        }
        const requestUrl = this.apiUrls.verifyOtpForPhone
        const verifyOtp = await this.$axios.post(requestUrl, requestBody)
          .then((response) => {
            // console.log('sendOtp response:',response);
            this.showInputOtpPhone = false
            return response.data
          })
          .catch((error) => {
            // console.log('sendOtp response error:', error.response);
            return error.response.data
          })
        // this.loading = false;
        this.buttonLoader = false
        console.log('verifyOtp:', verifyOtp)
        console.log('verifyOtp1:', await this.$fire.auth.currentUser.getIdToken())

        setTimeout(() => {
          console.log('verifyOtp2:', this.$fire.auth.currentUser.getIdToken(true))
        }, 5000)
        if (!verifyOtp.success) {
          this.otp.error = verifyOtp.message
          this.isVerifiedMobile = false
        } else {
          this.otp.error = null
          this.isVerifiedMobile = true
        }

        this.basicInfoButtonEnable()
      }
    },
    editPhone () {
      this.showInputOtpPhone = false
    },
    disabledDate (date: any) {
      let currDate = new Date();
      let eighteenYrsAgo = currDate.setFullYear(currDate.getFullYear()-18);
      if (date.getTime() >= new Date(eighteenYrsAgo).getTime()) {
        return true
      }
    },
    countDownTimer () {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1
          this.countDownTimer()
        }, 1000)
      }
    },
    async getCurrentUserInfo () {
      const vm = this
      const currentUserInfo: any = await this.$axios.get(this.apiUrls.userProfile)
        .then((response) => {
          vm.callReferal()
          return response.data
        })
        .catch((error) => {
          // return error.response.data
          this.$router.go()
        })
      console.log('signup currentUserInfo:', currentUserInfo);
      this.loading = false
      if (currentUserInfo && currentUserInfo.payload && !currentUserInfo.error) {
        this.userInfo = currentUserInfo.payload
        this.setBasicInfo(currentUserInfo.payload)
        this.setAddressInfo()
        return currentUserInfo.payload
      }
      return null
    },
    setBasicInfo (userInfoData: any) {
      this.loading = false
      if (userInfoData) {
        // this.userBasicInfo.phone = this.remove91ToPhoneNumber(userInfoData.mobile);
        this.userBasicInfo.phone = this.remove91ToPhoneNumber(userInfoData.phoneNumber);
        this.userBasicInfo.name = userInfoData.displayName
        this.userBasicInfo.email = userInfoData.email
        // this.userBasicInfo.dob = userInfoData.dob
        // this.userBasicInfo.gender = userInfoData.gender

        this.buttonValidation.basicInfoNextButtonEnable = true

        if (!this.userBasicInfo.name || this.userBasicInfo.name.trim() === '') {
          this.buttonValidation.basicInfoNextButtonEnable = false
        } else {
          // this.buttonValidation.basicInfoNextButtonEnable = true
        }

        if (!this.userBasicInfo.email || this.userBasicInfo.email.trim() === '') {
          // this.buttonValidation.basicInfoNextButtonEnable = false
          this.isVerifiedEmail = false
        } else {
          this.isVerifiedEmail = true
          // this.buttonValidation.basicInfoNextButtonEnable = true
        }

        if (!this.userBasicInfo.phone || this.userBasicInfo.phone.trim() === '') {
          // this.buttonValidation.basicInfoNextButtonEnable = false
          this.isVerifiedMobile = false
        } else {
          this.isVerifiedMobile = true
          // this.buttonValidation.basicInfoNextButtonEnable = true
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
    setAddressInfo () {
      this.userAddressInfo.name = this.userBasicInfo.name
      this.userAddressInfo.email = this.userBasicInfo.email
      this.userAddressInfo.phoneNumber = this.userBasicInfo.phone
    },
    updateBasicInfo () {
      console.log('userBasicInfo:', this.userBasicInfo)
      console.log('promoCode:', this.promoCode)
      this.setAddressInfo()
      this.updateUserProfile(this.userBasicInfo)
    },
    async updateUserProfile (requestBody: any) {
      if (requestBody) {
        this.loading = true
        // this.buttonLoader = true;
        const updateUserData = await this.$axios.put(this.apiUrls.userProfile, requestBody)
          .then((response) => {
            this.loading = false
            return response.data
          })
          .catch((error) => {
            this.loading = false
            return error.response.data
          })
        // this.buttonLoader = false;
        console.log('updateUserData:', updateUserData)
        if (!updateUserData.success) {
          this.formSubmitError.basicInfo.error = true
          this.formSubmitError.basicInfo.message = (updateUserData.payload && updateUserData.payload.length) ? updateUserData.payload[0].reason : updateUserData.message;
        } else {
          this.formSubmitError.basicInfo.error = false
          this.formSubmitError.basicInfo.message = ''

          if(this.promoCode && this.promoCode !== ''){
            this.applyCouponCode()
          } else {
            // this.changeCurrentStepNext(this.step)
            // this.$router.push({ path: this.localePath('/') })
            window.location.href = window.location.origin + this.localePath('/')
            // window.location.href = window.location.origin + this.localePath('/listing/item')
        
          }
        }
      }
    },
    async applyCouponCode(){
      this.loading = true
      const postData = {
        name: this.userBasicInfo.name,
        promoCode: this.promoCode
      }
      console.log("postData",postData)
      let url = `/users/v1/user/profile`;
      try {
        const data = await this.$axios.$put(url, postData);
        console.log("Data",data)
        this.loading = false
        if(data.success){
          this.formSubmitError.basicInfo.error = false
          this.formSubmitError.basicInfo.message = ''
          
          window.location.href = window.location.origin + this.localePath('/')
            
        }else{
          console.log(data.message)
          this.formSubmitError.basicInfo.error = true
          this.formSubmitError.basicInfo.message = data.message;        
        }
      } catch (error:any) {
        this.loading = false
        this.formSubmitError.basicInfo.error = true
        this.formSubmitError.basicInfo.message = error.response.data.message;
        
      }
     },

    editEmail () {
      this.showInputOtp = false
    },
    onChangeEmailInput () {
      this.isValidEmail = this.$isValidEmail(this.userBasicInfo.email)
      console.log('isValidEmail:', this.isValidEmail)
    },

    async sendOtpForEmailVerification (mode: string = 'send-otp') {
      // mode can be 'send-otp' / 'resend-otp'

      console.log(this.userBasicInfo.email)
      if (this.isValidEmail) {
        if (mode === 'send-otp') {
          this.loading = true
        } else {
          this.resendOtpLoader = true
        }

        const requestBody = {}
        const email = this.userBasicInfo.email
        let requestUrl = this.apiUrls.sendOtpForEmail
        requestUrl = requestUrl.replace('{email}', email)
        const sendOtp = await this.$axios.post(requestUrl, requestBody)
          .then((response) => {
            // console.log('sendOtp response:',response);
            this.showInputOtp = true

            this.countDown = 30
            this.countDownTimer()

            return response.data
          })
          .catch((error) => {
            // console.log('sendOtp response error:', error.response);
            return error.response.data
          })

        this.loading = false
        this.resendOtpLoader = false
        console.log('sendOtp:', sendOtp)
        if (!sendOtp.success) {
          this.validation.email.error = true
          this.validation.email.message = sendOtp.message
        } else {
          this.validation.email.error = false
          this.validation.email.message = ''
          this.otp.verificationTransactionId = sendOtp.payload.transactionId
        }
      }
      // sendOtpForEmail
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
    async verifyOtp () {
      if (this.otp.valid) {
        // this.loading = true;
        this.buttonLoader = true

        const requestBody = {
          verificationTransactionId: this.otp.verificationTransactionId,
          verifyOtp: this.otp.otp
        }
        const requestUrl = this.apiUrls.verifyOtpForEmail
        const verifyOtp = await this.$axios.post(requestUrl, requestBody)
          .then((response) => {
            // console.log('sendOtp response:',response);
            this.showInputOtp = false
            return response.data
          })
          .catch((error) => {
            // console.log('sendOtp response error:', error.response);
            return error.response.data
          })
        // this.loading = false;
        this.buttonLoader = false
        console.log('verifyOtp:', verifyOtp)
        console.log('verifyOtp1:', await this.$fire.auth.currentUser.getIdToken())

        setTimeout(() => {
          console.log('verifyOtp2:', this.$fire.auth.currentUser.getIdToken(true))
        }, 5000)
        if (!verifyOtp.success) {
          this.otp.error = verifyOtp.message
          this.isVerifiedEmail = false
        } else {
          this.otp.error = null
          this.isVerifiedEmail = true
        }

        this.basicInfoButtonEnable()
      }
    },

    changeCurrentStepNext (currentStep: string) {
      console.log('step:', currentStep)
      // , 'profile-photo', 'address-map', 'address'
      switch (currentStep) {
        case 'basic-info':
          this.step = 'profile-photo'
          break
        case 'profile-photo':
          this.step = 'address-map'
          break
        case 'address-map':
          this.step = 'address'
          break
        case 'address':
          this.step = 'address'
          break
        default:
          this.step = 'basic-info'
      }
    },

    changeCurrentStepPrev (currentStep: string) {
      console.log('step:', currentStep)
      // , 'profile-photo', 'address-map', 'address'
      switch (currentStep) {
        case 'profile-photo':
          this.step = 'basic-info'
          break
        case 'address-map':
          this.step = 'profile-photo'
          break
        case 'address':
          this.step = 'address-map'
          break
        default:
          this.step = 'basic-info'
      }
    },

    selectedLocation (location: any) {
      console.log('location:', location);
      // return

      this.userAddressInfo = location

      this.userAddressInfo.name = this.userBasicInfo.name
      this.userAddressInfo.email = this.userBasicInfo.email
      this.userAddressInfo.phoneNumber = this.userBasicInfo.phone
      if(this.userAddressInfo.addressLine) {
        this.changeCurrentStepNext(this.step)
      } else {
        if(this.userBasicInfo.email){
         this.showConfirmPopup();
        }else{
         window.location.href = window.location.origin + this.localePath('/')
        }
        
      }
      
    },
    saveAddress (saveData: any) {
      console.log('saveData:', saveData, this.fromCreateListing);
      if(this.fromCreateListing && this.fromCreateListing !== 'null'){
        this.$router.push({ path: '/listing/item' });
        window.localStorage.removeItem("setPath");
      } else {
        // this.$router.push({ path: '/' })
        this.showConfirmPopup();
      }
      
    },
    showConfirmPopup(){
      this.profileCompletePopup = true;
    },
    uploadImageSave () {
      if (this.profileImageUrl && this.image.name) {
        const image = this.dataURLtoFile('' + this.profileImageUrl, '' + this.image.name)
        const formData = new FormData()
        formData.append('file', image)
        this.uploadProfileImageToServer(formData)
      }
      this.changeCurrentStepNext(this.step)
    },
    dataURLtoFile (dataurl: string, filename: string) {
      const arr = dataurl.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }

      return new File([u8arr], filename, { type: mime })
    },
    cropImage () {
      const result = this.$refs.cropper.getResult()
      // console.log('result:', result);
      const dataUrl = result.canvas.toDataURL(this.image.type)
      this.profileImageUrl = dataUrl
    },
    uploadImage (event: any) {
      // console.log('Uploaded File', event)
      /// Reference to the DOM input element
      const { files } = event.target
      // Ensure that you have a file before attempting to read it
      if (files && files[0]) {
        // 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
        if (this.image.src) {
          URL.revokeObjectURL(this.image.src)
        }
        // 2. Create the blob link to the file to optimize performance:
        const blob = URL.createObjectURL(files[0])
        console.log('File details', files[0])
        // 3. Update the image. The type will be derived from the extension and it can lead to an incorrect result:
        this.image = {
          src: blob,
          type: files[0].type,
          name: files[0].name
        }
      }
    },
    cancelCropping () {
      this.image = {
        src: null,
        type: null,
        name: null
      }
    },
    removeProfileImage () {
      this.profileImageUrl = null
      this.image.src = null
      this.image.type = null
      this.image.name = null
    },
    async uploadProfileImageToServer (requestBody: any) {
      if (requestBody) {
        // this.loading = true;
        const updateUserData = await this.$axios.post(this.apiUrls.uploadProfileImgUrl, requestBody)
        // this.loading = false;
        console.log('uploadProfileImage:', updateUserData)
      }
    },

    fieldValidation (field: string, inputValue: any) {
      // Start Reset Response Error ////
      this.formSubmitError.basicInfo.error = false
      this.formSubmitError.basicInfo.message = ''
      // End Reset Response Error ////
      
      if (field) {
        
              this.buttonValidation.basicInfoNextButtonEnable = true
        switch (field) {
          case 'name':
            let val = (inputValue) ? inputValue.trim() : inputValue
            if (!val) {
              this.validation.name.error = true
              this.validation.name.message = this.$t('nameRequired')
            } else if (val && (val.length < 2 || val.length > 30)) {
              this.validation.name.error = true
              this.validation.name.message = this.$t('nameLength')
            } else {
              this.validation.name.error = false
              this.validation.name.message = ''
            }

            this.basicInfoButtonEnable()
            break
          case 'email':
            let inputEmail = (inputValue) ? inputValue.trim() : inputValue
            
            if (inputEmail && !this.isVerifiedEmail) {
              this.buttonValidation.basicInfoNextButtonEnable = false
            }
            console.log('isVerifiedEmail:', this.isVerifiedEmail)
            console.log('inputEmail:', inputEmail)
            
            break
          default:
        }
      }
    },

    basicInfoButtonEnable () {
      this.buttonValidation.basicInfoNextButtonEnable = true
      if (this.validation.name.error) {
        this.buttonValidation.basicInfoNextButtonEnable = false
      }

      if (!this.isVerifiedEmail) {
        // this.buttonValidation.basicInfoNextButtonEnable = false
      }

      if (!this.isVerifiedMobile) {
        // this.buttonValidation.basicInfoNextButtonEnable = false
      }
    },

    callReferal () {
      // call for reward if refered by exists
      try {
        const vm = this
        const invitedby = vm.$cookies.get('invitedby')
        const isNewUser = vm.$cookies.get('isNewUser')
        // const authUser = vm.$store.state.authUser
        // console.log(invitedby && authUser && !this.authenticatedUser.displayName)
        // if (invitedby && isNewUser) {
        //   vm.$fire.functions.httpsCallable('registerReferral')({
        //     referralCode: invitedby
        //   }).then(() => {
        //     vm.$cookies.remove('invitedby')
        //     vm.$cookies.remove('isNewUser')
        //   })
        // }

        if (!isNewUser) {
          try {
            vm.$cookies.remove('isNewUser')
          } catch (e) {
            console.log(e)
          }
        }
      } catch (e) {
        console.log(e)
      }
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

  input[type="text"]:focus ~ label, input[type="number"]:focus ~ label, input[type="email"]:focus ~ label,
  input[type="text"]:not(:placeholder-shown) ~ label, input[type="email"]:not(:placeholder-shown) ~ label, input[type="number"]:not(:placeholder-shown) ~ label,
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

  input[type="text"]:focus ~ label, input[type="email"]:focus ~ label, input[type="number"]:focus ~ label,
  select:focus ~ label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(72, 206, 243, var(--tw-text-opacity));
    left: 0px;
  }
  .mx-datepicker{
    width: 100% !important;
  }
  .mx-icon-calendar {
    cursor: pointer;
  }

  

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield !important;
}
</style>
