<template>

    <!-- v-if="viewModal" -->
    <div>
    <div  v-if="showEmailmodal" class="fixed z-50 inset-0 overflow-y-auto add-email" aria-labelledby="modal-title"
          role="dialog" aria-modal="true">
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
    
            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
            <div
              class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[300px] md:w-[350px] ">
              <div @click="forcelosePopup()"  class="absolute right-2 top-2 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                stroke="#000000">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
              <div class="px-4 mt-6">
                <div class="mx-auto flex items-center justify-center h-10 w-10 rounded-full bg-lightgreen">
                  <svg width="20" height="16" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_104_1076)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.1067 2.5539C2.272 2.2269 2.6121 2 3.0001 2H19.0001C19.388 2 19.7281 2.2269 19.8935 2.5539L11.0001 8.7793L2.1067 2.5539ZM0.000138941 2.9827C-3.10589e-05 2.9925 -4.16036e-05 3.0024 8.83964e-05 3.0122V15C8.83964e-05 16.6523 1.3478 18 3.0001 18H19.0001C20.6524 18 22.0001 16.6523 22.0001 15V3.0121C22.0002 3.0023 22.0002 2.9926 22 2.9829C21.9908 1.3384 20.6467 0 19.0001 0H3.0001C1.3536 0 0.00952894 1.3383 0.000138941 2.9827ZM20.0001 4.9207V15C20.0001 15.5477 19.5478 16 19.0001 16H3.0001C2.4524 16 2.0001 15.5477 2.0001 15V4.9207L10.4266 10.8192C10.7709 11.0603 11.2292 11.0603 11.5735 10.8192L20.0001 4.9207Z" fill="#8CAEC5"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_104_1076">
                  <rect width="22" height="18" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>    
                </div>
                <div class="mt-3 mb-3 md:mb-1 text-center sm:mt-5">
                  <h3 class="text-[12px] md:text-xs leading-6 font-medium text-gray-700">{{ $t('addEmailText') }}</h3>
                </div>
    
                <div class="mt-3  sm:mt-5">
                  <div class="relative z-0 w-full mb-8">
                  
                    <div  class="relative z-0 w-full mobile-addnum">
                        <input type="email" v-model="emailId" @input = "handleChange" 
                      name="email" placeholder="" class="
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
                      ">{{
                      $t('email')
                  }}</label>
                    <!-- v-if="!isEmailVerified && !userDetails.isEmailVerified" -->
                    <div class="absolute w-full flex items-center ">
                      <!-- <div class="text-xs text-red-400 mt-px relative">
                        {{ showEmailErrorMsg }}
                      </div> -->
                      <p class="text-xs text-red-600 pt-1 " v-if="emailValidation">{{$t('enterAValidEmail')}}</p>
                      
                    </div>
                    </div>
                   
    
                    <div class="flex items-center mobile-checked ml-[-55px]">
    
                    
                    </div>
    
    
                  </div>
                </div>
              </div>
              
              <div class="bg-gray-50 px-4 py-3 flex sm:flex sm:px-4 relative mt-8">
               


                  <button   @click="skipAndContinue" href="javascript:;"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-firoza text-sm font-medium text-white sm:w-full sm:text-sm "
                    >
                   <span >  {{ $t('skipContinue') }}</span>
                  </button> 
                  
                  <button :disabled="!isEmailValid" :class="!isEmailValid ?'opacity-50' :''"  @click="proceedToverifyEmail" href="javascript:;"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green text-sm font-medium text-white sm:w-full sm:text-sm ml-6"
                    >
                   <span v-show="!loading">  {{ $t('cl_Add') }}</span>
    
                   <span> <Spinner v-show="loading" /></span> 
                    
                  </button>
                  
                  <div class="text-xs text-red-400 mt-px  absolute top-[-17px] left-[17px]">{{ valiDationMsg }}</div>
                </div>
            </div>
          </div>
    
          
        </div>
    
        
             <VerifyOtp :otp="otp" v-if="showOtpModal" :showOtpModal="showOtpModal"  @otpValidated="otpValidated" @closeOtpModal = "closeOtpModal"/> 
        </div>
    
       
        
       </template>
       
       <script lang="ts">
      import Vue from "vue";
    
    export default Vue.extend({
        name: "addEmail",
        props: ["showmodal"],
    
        mounted() {
    
            // if (this.mobNumber) {
            //     this.PhoneNumber = this.mobNumber
            //     this.isEmailValid = true
            // } else {
            //     this.isEmailValid = false
            // }
    
        },
        data() {
            return {
                emailValidation:false,
                validatedType:'Email',
                loading: false,
                authUser: this.$store.state.authUser,
                isEmailValid: false,
                PhoneNumber: null,
                emailId:null,
                valiDationMsg: '',
                showEmailErrorMsg:'',
    
                viewModal: false,
                btnloading: false,
                isFormValid: false,
                showEmailmodal: true,
                showOtpModal: false,
                otp: {
                    otp: "",
                    email:null,
                    phnNumber: null,
                    verificationTransactionId: null,
                    error: null,
                    valid: false,
                },
            };
        },
        methods: {

         

          
    
            handleChange(evt:any) {
    
                this.valiDationMsg = ''
                
    
                let keyName = evt.target.name;
                if (keyName.includes("email")) {
                    if (evt.target.value.length === 0) {
                        this.isEmailValid = false
                        this.emailValidation = true
                        
                    } else if (evt.target.value.length > 0) {
                        if (!this.$isValidEmail(evt.target.value)) {
                            this.isEmailValid = false
                            this.emailValidation = true
                        } else {
                            this.isEmailValid = true
                            this.emailValidation = false
                            
                        }
                    }
                }
            },
    
    
    
            forcelosePopup() {
                this.showEmailmodal = false
                this.$emit("closeAddemailPopup", true);
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

            skipAndContinue(){
            this.$emit("skipAndContinue",'skip');
            this.showEmailmodal = false
           // this.$emit("closeAddmobilePopup", true);
            },
            async proceedToverifyEmail() {
                this.valiDationMsg = ''
                this.loading = true;
                try {
                    // let postObj = this.postObj
                    let requestBody = {};
                    const url = `users/v1/user/email/initiate/${this.emailId}`;
                    //   postObj.returnUrl = this.getReturnUrl(this.postObj.paymentGateway);
                    const data = await this.$axios.$post(url, requestBody);
                    console.log("Data in response", data);
                    if (data.success) {
    
                        this.otp.verificationTransactionId = data.payload.transactionId;
                        this.otp.email = this.emailId;
                        // this.otp.email = email;
                        this.showEmailmodal = false
                        this.showOtpModal = true;
    
                    } else {
    
                    }
    
                    this.loading = false;
                } catch (error: any) {
                    console.log(error)
                    console.log(error?.response?.data)
                    this.valiDationMsg = error?.response?.data?.message
                    this.loading = false;
                }
    
            },
    
            otpValidated() {
                this.showOtpModal = false
                this.$emit("otpValidated",this.validatedType);
               // console.log("-------------------------success")
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
       
       
       
       