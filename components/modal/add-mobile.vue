<template>

<!-- v-if="viewModal" -->
<div>
<div  v-if="showMobilemodal" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title"
      role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[300px] md:w-[350px] sm:p-6">
          <div v-if="showCloseBtn" @click="forcelosePopup()"  class="absolute right-5 top-2 cursor-pointer">
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
              <h3 class="text-[12px] md:text-xs leading-6 font-medium text-gray-500">{{ $t('linkMobileWarningMessage') }}</h3>
            </div>

            <div class="mt-3  sm:mt-5">
              <div class="relative z-0 w-full mb-8 pl-[55px] mobile-addnums">
                <div                   class="absolute pb-2 font-normal  border-b border-gray-200 text-sm text-gray-600 left-0 -top-[12px] pr-3">
                  <span class="block text-[10px] text-gray-400 pb-1">{{ $t('code') }}</span> +91
                </div>
                <div  class="relative z-0 w-full mobile-addnum">
                  <input @input = "handleChange" type="text" autocomplete="off" placeholder=" " pattern="\d*" id="PhoneNumber"
                    name="mobile" v-model="PhoneNumber" minlength="10" maxlength="10"
                     @keypress="isNumber($event)"
                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent text-left border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />

                  <label for="name"
                    class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-xs text-left">{{ $t('EnterMobNum') }}</label>


                </div>
                <p class="text-xs text-red-600 pt-2 ml-[-55px]" v-if="mobileValidation">{{$t('cl_invalidMobile')}}</p>
                <!-- <p class="text-xs text-red-600 pt-2" v-if="mobileReqValidation">Mobile Number Required</p> -->
                <!-- <p class="text-xs text-red-600 pt-2 ml-[-55px]" >{{$t('cl_invalidMobile')}}</p> -->

                <div class="flex items-center mobile-checked ml-[-55px]">

                  <!-- <div class="items-center flex mt-2">
                    <input id="shareNumberAgreed" name="mobilePrivate" :value="true"
                      v-model="initiatorAgreedShareContact" :disabled="initiatorAgreedShareContactDisabled"
                      type="checkbox" class="h-[14px] w-[14px] border-gray-200 rounded text-firoza focus:ring-firoza">
                    <label for="shareNumberAgreed" class="ml-3 text-[11px] text-gray-500"> {{ $t('checkShareProceed') }}
                    </label>

                  </div> -->
                </div>


              </div>
            </div>
          </div>
          <div    class="mt-5 sm:mt-6">
            <!-- <NuxtLink :to="localePath(`/offers/details/${dealData.dealRefId}`)" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-greendark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greendark  sm:w-full sm:text-sm">
              View offer
            </NuxtLink> -->
            
              <button :disabled="!isMobileNoValid" :class="!isMobileNoValid ?'opacity-50' :''"  @click="proceedToverifyNumber" href="javascript:;"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white hover:bg-greendark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-greendark  sm:w-full sm:text-sm"
                >
               <span v-show="!loading">  {{ $t('proceedBtn') }}</span>

               <span> <Spinner v-show="loading" /></span> 
                
              </button>

              <div class="text-xs text-red-400 mt-px relative">{{ valiDationMsg }}</div>

              <!-- <div class="text-center mb-4">
                <div class="relative"><div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div> <div class="relative flex justify-center text-[11px] mb-3 mt-4"><span class="px-2 bg-white text-gray-500"> Or Login with </span></div></div>
              </div> -->

              <a v-if="!showCloseBtn" @click="redirectTologin" class="cursor-pointer border-gray-200 border-0 block py-0 px-0 text-gray-400 text-left mt-3 text-[13px]">{{ $t('loginWithSo') }}  <span class="text-firoza"> {{ $t('loginAnother') }}</span> </a>
            
          </div>
        </div>
      </div>

     
    </div>

    
         <VerifyOtp :otp="otp" :pageName="pageName" v-if="showOtpModal" :showOtpModal="showOtpModal"  @otpValidated="otpValidated" @closeOtpModal = "closeOtpModal"/> 
    </div>

   
    
   </template>
   
   <script lang="ts">
  import Vue from "vue";

export default Vue.extend({
    name: "addMobile",
    props: ["showmodal", 'preDefineAmount', 'returnUrl', 'mobNumber','pageName'],

    mounted() {

      console.log("pageName",this.pageName)

      if(this.pageName && this.pageName === 'Header'){
        this.showCloseBtn = false
       // this.sourcePageName = this.pageName 
      }else{
        this.showCloseBtn = true
      }

        if (this.mobNumber) {
            this.PhoneNumber = this.mobNumber
            this.isMobileNoValid = true
        } else {
            this.isMobileNoValid = false
        }

    },
    data() {
        return {
            sourcePageName:'',
            showCloseBtn :false,
            mobileValidation:false,
            loading: false,
            authUser: this.$store.state.authUser,
            isMobileNoValid: false,
            validatedType:'PhoneNumber',
            PhoneNumber: null,
            valiDationMsg: '',

            viewModal: false,
            btnloading: false,
            isFormValid: false,
            showMobilemodal: true,
            showOtpModal: false,
            otp: {
                otp: "",
                email: "",
                phnNumber: null,
                verificationTransactionId: null,
                error: null,
                valid: false,
            },
        };
    },
    methods: {

      redirectTologin(){
      this.$emit("redirectTologinPage", true);
      },

        handleChange(evt:any) {

            this.valiDationMsg = ''
            

            let keyName = evt.target.name;
            if (keyName.includes("mobile")) {

                if (evt.target.value.length === 0) {
                    this.isMobileNoValid = false
                    this.mobileValidation = true
                    // this.product.mobile = null
                } else if (evt.target.value.length > 0) {

                    if (!this.$isValidMobile(evt.target.value)) {

                        this.isMobileNoValid = false
                        this.mobileValidation = true
                        //  this.disableBtn = true;

                    } else {
                        this.isMobileNoValid = true
                        this.mobileValidation = false
                        // this.mobileReqValidation = false
                        // this.disableBtn = false
                    }
                }
            }
        },



        forcelosePopup() {
            this.showMobilemodal = false
            this.$emit("closeAddmobilePopup", true);
        },

        closeOtpModal() {
            this.forcelosePopup()
            this.showOtpModal = false
        },


        hideModal() {
            this.viewModal = false
            this.$emit("closeModal", this.viewModal);
        },
        isNumber(evt: any) {
            evt = (evt) || window.event
            const charCode = (evt.which) ? evt.which : evt.keyCode
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault()
            } else {
                return true
            }
        },
        onChange(amount: number) {
            console.log('amount', amount);
            if (amount) {
                this.isFormValid = true;
            } else {
                this.isFormValid = false;
            }
        },



        async proceedToverifyNumber() {
            this.valiDationMsg = ''
            this.loading = true;
            try {
                // let postObj = this.postObj
                let requestBody = {};
                const url = `/users/v1/user/mobile/initiate/${this.PhoneNumber}`;
                //   postObj.returnUrl = this.getReturnUrl(this.postObj.paymentGateway);
                const data = await this.$axios.$post(url, requestBody);
                console.log("Data in response", data);
                if (data.success) {

                    this.otp.verificationTransactionId = data.payload.transactionId;
                    this.otp.phnNumber = this.PhoneNumber;
                    // this.otp.email = email;
                    this.showMobilemodal = false
                    this.showOtpModal = true;

                } else {

                }

                this.loading = false;
            } catch (error: any) {
                console.log(error.response.data)
                this.valiDationMsg = error.response.data.message
                this.loading = false;
            }

        },

        otpValidated() {
            this.showOtpModal = false
            this.$emit("otpValidated",this.validatedType);
            console.log("-------------------------success")
        },



        remove91ToPhoneNumber(phone: any) {
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
   </style>
   
   
   
   