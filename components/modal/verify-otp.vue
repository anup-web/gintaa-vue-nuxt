    <!-- Modal Start Of Add bank Account -->
    <template>

      <div v-if="showInputOtp" class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[450px] sm:w-full">
          <div class="bg-white px-4 pt-5 pb-10 sm:p-6 sm:pb-8 sm:px-8">
            <a v-if="showCloseButton"  @click="closeModal" class="hidden sm:block absolute top-0 cursor-pointer right-0 pt-4 pr-4">
             
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
            <div class="flex justify-center flex-col">
              <div class="text-center flex justify-center  w-full pb-4">
                <img v-if="otp.email" src="~assets/images/mail_complete_b.png" :alt="otp.email" class="max-w-full w-[130px]">
                <img v-if="otp.phnNumber" src="~assets/images/verify_b2.png"  :alt="otp.phnNumber" class="m-w-full w-[180px]">
              </div>
         <div class="w-full flex justify-center items-center pt-1">
        
             <div v-if="otp.phnNumber" class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-text-center">
                <h3 id="modal-title" class="text-xl leading-6 font-medium text-gray-800">
                 {{ $t('verifyMobileNumber') }}
                </h3>
                 <div class="mt-2 text-center">
                  <p class="text-sm text-gray-500 text-center">
                    {{ $t('otpSent') }}    <span class="mr-3">{{ otp.phnNumber }}</span>
                  </p>
                </div>
              </div>

               <div v-if="otp.email" class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-text-center">
                <h3 id="modal-title" class="text-xl leading-6 font-medium text-gray-800">
                 {{ $t('verifyEmailId') }}
                </h3>
                 <div class="mt-2 text-center">
                  <p class="text-sm text-gray-500 text-center">
                    {{ $t('otpSentEmail') }}    <span class="mr-3">{{ otp.email }}</span>
                  </p>
                </div>
              </div>
        </div>
            </div>

            <div>
              <div class="relative z-0 w-full mb-6 ">
                <div class="text-sm text-gray-500 mb-3 relative">
                  <!-- <span class="mr-3">{{userBasicInfo.email}}</span> -->
                  <!-- <a href="javascript:;" @click="editEmail()">
                        <svg width="18" height="18" viewBox="0 0 27 27" fill="none" class="absolute top-5 right-0">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z" fill="#48CEF3"></path>
                        </svg>
                      </a> -->
                </div>
                <!-- <label class="duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('enterOtp') }} </label> -->
                  <form>
          <otp-view @otpChange="otpChange" />
          <div v-if="countDown > 0" class="text-xsb mt-4">
            {{ $t("resendOtpIn") }} 
            <span class="font-medium text-gray-500"
              >00:{{ String(countDown).padStart(2, "0") }}</span
            >
          </div>
          <a
            href="javascript:;"
            v-if="!countDown"
            @click="resendOtpForVerification(otp)"
            class="mt-4 inline-block text-firoza text-sm"
          >
            <span v-if="!resendOtpLoader">{{ $t("resendOtp") }}</span>
            <Spinner v-if="resendOtpLoader" />
          </a>
        </form>


                    <div class="w-full flex justify-center items-center pt-5">
          <button
            type="submit"
            v-on:click="verifyOtp()"
            :disabled="isDisabled"
            class="
              transition-all
              flex
              justify-center
              items-center
              border border-firoza
              bg-firoza
              py-2
              px-6
              rounded
              font-normal
              text-base text-white
              hover:bg-firoza hover:border-firoza w-full
            "
          >
            <span>{{ $t('verify') }}</span>
            <Spinner v-show="loading" />
          </button>
        </div>

        <div class="absolute text-xs text-errortext text-red-400 mt-px">
          {{ otpErrormsg }}
        </div>

        <div class="w-full flex justify-center items-center pt-5 mb-5">
        </div>
               
                
              </div>
            
            </div>
          </div>
        </div>
      </div>
      <!-- <profilCompleteConfirmPopup v-if="profileCompletePopup" /> -->
    </div>


</template>

<script type="text/javascript" lang="ts">
import Vue from "vue";
import OtpView from "../atoms/OtpView.vue";
import profilCompleteConfirmPopup from '~/components/auth/profile-complete-confirm-popup.vue'

export default Vue.extend({
  components: { OtpView,profilCompleteConfirmPopup },
  name: "verifyOtp",
  props: ["otp","showOtpModal","pageName"],

  mounted() {
    // this.initOTP();
    // console.log("otp", this.otp,this.showOtpModal);
    // console.log("pagename",this.pageName);
    if(this.pageName && this.pageName === 'Header'){
      this.showCloseButton = false
    }else{
      this.showCloseButton = true
    }
    this.showInputOtp =  this.showOtpModal
    // let modal = document.getElementById("verify-otp")!;
    // modal.style.display = "block";
    this.countDownTimer();
  },
  data() {
    return {
      showCloseButton:false,
      loading: false,
      getOtp: "",
      isDisabled: true,
      apiUrls: this.$config.apiUrls,
      otpErrormsg: "",
      requestUrl: "",
      countDown: 30,
      resendOtpLoader: false,
      profileCompletePopup:false,
      showInputOtp:false
    };
  },
  methods: {

    closeModal() {
      this.showInputOtp = false
      this.$emit('closeOtpModal')
      //this.otp = ''
      
    },

    otpChange(otp: any) {
      this.getOtp = otp;
      if (otp.length === 6) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    },

    async verifyOtp() {
      
      if (this.getOtp) {
        this.loading = true;
        //
        this.otpErrormsg = "";
        let requestBody = {
          verificationTransactionId: this.otp.verificationTransactionId,
          verifyOtp:  this.getOtp,
        };

        if (this.otp.phnNumber) {
          // console.log("============== yes this is phn number")
          this.requestUrl = this.apiUrls.verifyOtpForPhone;
        } else {
          if (this.otp.email) {
            this.requestUrl = this.apiUrls.verifyOtpForEmail;
          }
        }
      //  return

        let verifyOtp = await this.$axios
          .post(this.requestUrl, requestBody)
          .then((response) => {
            console.log("sendOtp response:", response);
            this.loading = false;
            // this.showInputOtp = false;
            return response.data;
          })
          .catch((error) => {
             console.log('sendOtp response error:', error.response);
            this.loading = false;
            return error.response?.data;
          });

        console.log("verifyOtp:", verifyOtp);
        if (!verifyOtp.success) {
          this.otpErrormsg = verifyOtp.message;
        } else {
          this.otpErrormsg = "";
          this.profileCompletePopup =true
          this.$emit("otpValidated");
          //this.closeModalWithRes();
        }
      }
    },

    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },

    async resendOtpForVerification(otp: any) {
      this.resendOtpLoader = true;
      console.log("Resend Otp:", otp);

      if (otp.email) {
        let requestBody = {};
        let email = otp.email;
        let requestUrl = this.apiUrls.sendOtpForEmail;
        requestUrl = requestUrl.replace("{email}", email);
        let sendOtp = await this.$axios
          .post(requestUrl, requestBody)
          .then((response) => {
            return response.data;
          })

          .catch((error) => {
            this.resendOtpLoader = false;
            return error.response.data;
          });

        console.log("sendOtp:", sendOtp);
        if (!sendOtp.success) {
          this.resendOtpLoader = false;
        } else {
          this.resendOtpLoader = false;
          console.log(sendOtp.message);
          this.countDown = 30;
          this.countDownTimer();
        }
      } else {
        let requestBody = {};
        let phoneNumber = otp.phnNumber;
        let sendOtp = await this.$axios
          .post(`/users/v1/user/mobile/initiate/${phoneNumber}`, requestBody)
          .then((response) => {
            return response.data;
          })
          .catch((error) => {
            this.resendOtpLoader = false;
            return error.response.data;
          });

        console.log("sendOtp:", sendOtp);
        if (!sendOtp.success) {
          this.resendOtpLoader = false;
        } else {
          this.resendOtpLoader = false;
          this.countDown = 30;
          this.countDownTimer();
        }
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

input[type="text"]:focus ~ label,
input[type="email"]:focus ~ label,
input[type="tel"]:focus ~ label,
input[type="text"]:not(:placeholder-shown) ~ label,
input[type="email"]:not(:placeholder-shown) ~ label,
input[type="tel"]:not(:placeholder-shown) ~ label,
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
input[type="email"]:focus ~ label,
select:focus ~ label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(72, 206, 243, var(--tw-text-opacity));
  left: 0px;
}
</style>
