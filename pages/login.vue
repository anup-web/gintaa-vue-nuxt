<template>
  <div>
    <!-- <Header /> -->
    <section class="bg-[#ffffff] sm:bg-[#e6e8f0] rounded  min-h-screen flex flex-col justify-center  md:py-6 sm:px-6 lg:px-8 sm:bg-login-bg bg-cover bg-top">
      <!-- <div class="w-3/6">
          <div class="relative">
            <img src="images/login_bg.png"/>
            <div class="logo absolute top-12 w-full text-center">
                <div class="mb-8 w-full flex justify-center"><img src="images/logo.png"/></div>

                <div class="text-center text-white text-base">
                    <p>Trade, Barter or Bid for Products & <br>Services from Anyone</p>
                </div>
            </div>
          </div>
        </div> -->
      <div v-show="step==='login'" class="sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 sm:shadow sm:rounded-lg sm:px-10 relative">
          <a :href="localePath('/')" class="fixed left-4 top-4 sm:absolute md:absolute lg:absolute cursor-pointer" @click="isCL()">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z" fill="#7B7E80" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="#7B7E80" />
            </svg>

          </a>
          <div class="text-center flex justify-center  mt-4">
            <img src="~assets/images/login_b.png" alt="login" class="max-w-full w-[180px]">
          </div>

          <form class="" @submit.prevent="doLogin">
            <h2 class="text-center text-xl mt-6 pb-6 font-bold text-gray-600 ">
              {{ $t('loginAccount') }} <span class="font-normal">{{ $t('or') }}</span> {{ $t('signUp') }}
            </h2>
            <div class="relative pl-[55px]">
              <div class="absolute pb-2 font-normal  border-b border-gray-200 text-sm text-gray-600 left-0 -top-[12px] pr-3">
                <span class="block text-[10px] text-gray-400 pb-1">{{ $t('code') }}</span>
                {{ $t('nineone') }}
              </div>
              <div class="relative z-0 w-full mb-7">
                <input
                  v-model="login.username"
                  autocomplete="off"
                  type="number"
                  name="name"
                  placeholder=" "
                  maxlength="10"

                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm text-gray-600"
                  @keypress="isNumber($event)"
                  @input="onChangeLogin"
                >
                <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">
                  {{ $t('enterMobileNumber') }}
                </label>
                <span :class="[login.error ? '' : 'hidden', 'text-xs text-errortext pt-2 block']">{{ login.error }}</span>
              </div>
            </div>

            <!-- <div class=mb-4>
                        <label class="block mb-2 text-darkcolor text-sm font-medium">Email or Phone</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-14 focus:outline-none focus:shadow-outline text-sm"  type="text" placeholder="Enter your email or mobile number">
                    </div> -->
            <div id="recaptcha-container" />
            <div class="mb-6">
              <button :disabled="!login.valid || loading" :class="[login.valid || loading ? '' : 'opacity-50', 'bg-firoza flex justify-center text-white font-bold py-2 px-3 h-12 rounded w-full text-base leading-[34px]']">
                <span v-show="!loading">{{ $t('loginBtn') }}</span>
                <Spinner v-show="loading" />
              </button>
            </div>
            <div class="mb-4">
              <p class="text-xs text-slate-400">
                {{ $t('agree') }}<a :href="localePath('/legal/terms-condition')" class="text-firoza font-medium" target="_blank"> {{ $t('termsConditions') }}</a> {{ $t('and') }} <a :href="localePath('/legal/privacy-policy')" class="text-firoza font-medium" target="_blank">{{ $t('privacyPolicy') }}.</a>
              </p>
            </div>
          </form>

          <SolicalLogin @linkWithCredentialSocial="linkWithCredentialSocial" @socialMediaProviderId="socialMediaProviderId" />
          <a :href="localePath('/gintaa-food/register-restaurant')" class="w-full flex items-center justify-center border border-firoza text-firoza text-base font-medium px-4 py-2.5 mt-6 rounded">Register Your Restaurant </a>
        </div>
      </div>

      <div v-if="step==='otp'" class="sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 sm:shadow sm:rounded-lg sm:px-10 relative">
          <div class="fixed left-4 top-4 sm:absolute md:absolute lg:absolute cursor-pointer" @click="changeUsername">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z" fill="#7B7E80" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="#7B7E80" />
            </svg>
          </div>
          <div class="text-center flex justify-center w-full mt-4">
            <img src="~assets/images/verify_b2.png" alt="verify" class="m-w-full w-[180px]">
            <!-- <img src="~assets/images/login_banner.jpg" class="rounded-t-lg"/> -->
          </div>

          <form @submit.prevent="verifyOTP">
            <h2 class="text-center text-xl mt-6 pb-2 font-bold text-gray-600">
              {{ $t('verifyMobileNumber') }}
            </h2>
            <div class="text-sm text-gray-400  pb-3 text-center">
              {{ $t('otpSent') }} <span>{{ login.username }}</span> <a class="text-firoza text-sm font-medium ml-3 cursor-pointer" @click="changeUsername">{{ $t('changeNumber') }}</a>
            </div>
            <div class="mb-5">
              <OtpView @otpChange="otpChange" />
              <span :class="[otp.error ? '' : 'hidden', 'text-xs text-errortext pt-2 block']">{{ otp.error }}</span>
            </div>

            <div class="text-sm text-gray-400 mb-4">
              <div v-if="countDown > 0" class="text-xsb">
                {{ $t('resendOtpIn') }}  <span class="font-medium text-gray-500">00:{{ String(countDown).padStart(2, '0') }}</span>
              </div>
              <a v-if="countDown <= 0" class="text-sm font-medium text-firoza cursor-pointer" @click="resendOTP">
                <span v-if="!resendOtpLoader">{{ $t('resendOtp') }}</span>
                <Spinner v-if="resendOtpLoader" />
              </a>
            </div>

            <!-- <div class=mb-4>
                        <label class="block mb-2 text-darkcolor text-sm font-medium">Email or Phone</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-14 focus:outline-none focus:shadow-outline text-sm"  type="text" placeholder="Enter your email or mobile number">
                    </div> -->
            <div class="mb-6">
              <button :disabled="!otp.valid || loading" :class="[otp.valid || loading ? '' : 'opacity-50', 'bg-firoza flex justify-center text-white font-bold py-2 px-3 h-12 rounded w-full text-base leading-[34px]']">
                <span v-show="!loading">{{ $t('verify') }}</span>
                <Spinner v-show="loading" />
              </button>
            </div>
            <div class="mb-4">
              <p class="text-xs text-slate-400">
                {{ $t('agree') }}<a :href="localePath('/legal/terms-condition')" class="text-firoza font-medium" target="_blank"> {{ $t('termsConditions') }}</a> {{ $t('and') }} <a :href="localePath('/legal/privacy-policy')" class="text-firoza font-medium" target="_blank">{{ $t('privacyPolicy') }}.</a>
              </p>
            </div>
          </form>
          <SolicalLogin @linkWithCredentialSocial="linkWithCredentialSocial" />
        </div>
      </div>

      <div v-show="step==='email-sent'" class="sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 sm:shadow sm:rounded-lg sm:px-10 relative">
          <a href="/" class="fixed left-4 top-4 sm:absolute md:absolute lg:absolute cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z" fill="#7B7E80" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="#7B7E80" />
            </svg>

          </a>
          <div class="text-center flex justify-center  w-full pt-4">
            <img src="~assets/images/mail_complete_b.png" alt="Verify Email" class="max-w-full w-[130px]">
            <!-- <img src="~assets/images/login_banner.jpg" class="rounded-t-lg"/> -->
          </div>

          <form class="py-4">
            <h2 class="text-center text-xl mt-6 pb-2 font-bold text-gray-600">
              Verify Email
            </h2>
            <div class="text-sm text-gray-400  pb-3 text-center">
              Link sent to <span class="mr-3 ml-1"> {{ login.username }}</span> <a href="#" class="text-firoza text-sm font-medium cursor-pointer" @click="changeUsername">Change Email</a>
            </div>
            <div class="mb-4 pt-6">
              <p class="text-base text-gray-500">
                A verification link has been sent to your email address.
              </p>
            </div>
            <div class="text-sm text-gray-400 mb-10">
              <div v-if="countDown > 0" class="text-xsb">
                Resend link <span class="font-medium text-gray-500">00:{{ String(countDown).padStart(2, '0') }}</span>
              </div>
              <a v-if="countDown <= 0" class="font-medium text-sm text-firoza cursor-pointer" @click="sendEmailLink">Resend link</a>
            </div>
          </form>
          <SolicalLogin @linkWithCredentialSocial="linkWithCredentialSocial"  />
        </div>
      </div>
    </section>
  <!-- <Footer/> -->
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',
  middleware: 'nonauth',
  asyncData () {
    return {
      authenticatedUser: null,
      loading: false,
      resendOtpLoader: false,
      countDown: 30,
      login: {
        username: '',
        error: null,
        valid: false
      },
      otp: {
        otp: '',
        error: null,
        valid: false
      },
      step: 'login',
      fromCreateListing: '',
      invitedby: '',
      credential: null,
      anonimusAuthenticatedUser: null,
      method: '',
      isMobileExists: false,
      organicCode: ''
    }
  },
  data () {
    return {
      apiUrls: this.$config.apiUrls
    }
  },
  fetch () {
    const invitedby = this.$route.query.invitedby
    if (invitedby) {
      this.$cookies.set('invitedby', invitedby)
    } else {
      this.$cookies.remove('invitedby')
    }
  },
  head () {
    return {
      title: 'Login to gintaa.com',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Login to gintaa.com'
        }
      ]
    }
  },
  created () {
    const vm = this
    this.$fire.auth.onAuthStateChanged((user) => {
      this.authenticatedUser = user
      // console.log('user:', user)

      // console.log('fireModule:', this.$fireModule.auth.currentUser)
      // console.log('fireModule: fire', this.$fire.auth.currentUser.uid)

      setTimeout(() => {
        if (user) {
          const isAnonymous = user.auth.currentUser.isAnonymous
         // console.log('isAnonymous:', isAnonymous)
          if (!isAnonymous) {
            vm.$cookies.set('gintaa_token', user.auth.currentUser.accessToken)
            vm.$axios.setToken(user.auth.currentUser.accessToken, 'Bearer')

            vm.readFromRealtimeDb(user)

            // setTimeout(() => {
            //   let redirect = '/'
            //   // console.log('this.authenticatedUser:', this.authenticatedUser)
            //   // if (!this.authenticatedUser.displayName || !this.authenticatedUser.email || !this.authenticatedUser.phoneNumber) {
            //   if (!this.authenticatedUser.displayName) {
            //     redirect = '/auth/signup'
            //   } else if (this.$route.query.redirect && this.$route.query.redirect !== '/') {
            //     redirect = this.$route.query.redirect
            //   } else if (this.fromCreateListing) {
            //     redirect = this.fromCreateListing
            //   }
            //   console.log('redirect:', redirect)
            //   vm.$router.push({ path: this.localePath(redirect) })
            // }, 100)
          }
        }
      }, 200)
    })
  },
  mounted () {
    this.processReferal()
    if (this.step === 'login') {
      this.initReCaptcha()
    } else if (this.step === 'otp') {
      this.initOTP()
    }
    this.fromCreateListing = window.localStorage.getItem('setPath')
  },
  methods: {
    processReferal () {
      this.invitedby = this.$route.query.invitedby
      this.organicCode = this.$route.query.organicCode
    //  console.log('invitedby:', this.invitedby)
      if (this.invitedby || this.organicCode) {
        // signInAnonymously
        this.$fire.auth.signInAnonymously()
          .then((confirmationResult) => {
          //  console.log('confirmationResult', confirmationResult)

            if(this.invitedby &&  this.invitedby !== '' ){
              this.$fire.functions.httpsCallable('setReferralInfo')({ referralCode: this.invitedby }).then((resp) => {
              //  console.log('setReferralInfo resp', resp)
              })
            }

            //////////////////////// Start call for save organicCode ////////////////////////////
            // if(this.$route.query.organicCode &&  this.$route.query.organicCode !== '' ){
            if(this.organicCode &&  this.organicCode !== '' ){
              const organicCode = this.organicCode
              console.log('organicCode:', organicCode)
              this.$fire.functions.httpsCallable('setOrganicCode')({ organicCode: organicCode }).then((resp) => {
              //  console.log('setReferralInfo resp', resp)
              })

            }
            //////////////////////// End call for save organicCode ////////////////////////////



          }).catch((error) => {
            console.log('Error %s', error)
            // this.login.error = 'Error in sending otp'
          })
      }
    },
    setReferralInfo () {
      const fireFunctionName = 'setReferralInfo'
      const requestPayloadData = { referralCode: this.invitedby }

      this.callFireFunction(fireFunctionName, requestPayloadData)
    },
    async callFireFunction (fireFunctionName, requestPayloadData) {
      const projectId = this.$fireModule.apps[0].options.projectId
      const region = this.$fire.functions._region
      const url = `https://${region}-${projectId}.cloudfunctions.net/${fireFunctionName}`

      try {
        const appcheckToken = await this.$fire.appCheck.getToken()
        const headers = {
          'X-Firebase-AppCheck': appcheckToken.token,
          'Accept-Language': this.$i18n.locale
        }
        const setReferralInfo = await this.$axios.$post(url, { data: requestPayloadData }, { headers })

        console.log('setReferralInfo:', setReferralInfo)
      } catch (error) {
        console.log('error setReferralInfo:', error)
      }
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
    isCL () {
      if (window.localStorage.getItem('setPath') != null) {
        window.localStorage.removeItem('setPath')
      }
    },
    initReCaptcha () {
      const vm = this
      setTimeout(() => {
        window.recaptchaVerifier = new vm.$fireModule.auth.RecaptchaVerifier('recaptcha-container', {
          size: 'invisible',
          callback (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          'expired-callback' () {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          }
        })
        //
        this.appVerifier = window.recaptchaVerifier
      }, 1000)
    },
    onChangeLogin () {
      const validEmail = this.$isValidEmail(this.login.username)
      const validMobile = this.$isValidMobile(this.login.username)

      this.login.valid = validEmail || validMobile

      // this.error = !this.valid
    },
    doLogin () {
      if (this.$isValidMobile(this.login.username)) {
        this.sendOTP()
      } else if (this.$isValidEmail(this.login.username)) {
        this.sendEmailLink()
      }
    },
    sendOTP (mode = 'send-otp') {
      this.isMobileNumberExists()

      // mode can be 'send-otp' / 'resend-otp'
      const self = this
      const countryCode = '+91' // india
      const phoneNumber = countryCode + this.login.username

      if (mode === 'send-otp') {
        self.loading = true
      } else {
        self.resendOtpLoader = true
      }

      this.$fire.auth.signInWithPhoneNumber(phoneNumber, this.appVerifier)
        .then(function (confirmationResult) {
          //console.log('confirmationResult', confirmationResult)
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult
          //
          self.step = 'otp'
          self.loading = false
          self.resendOtpLoader = false

          setTimeout(() => {
            self.initOTP()
          }, 300)
        }).catch((error) => {
          console.log('Error %s', error)
          this.login.error = 'Error in sending otp'

          self.loading = false
          self.resendOtpLoader = false
        })
    },
    resendOTP () {
      this.otp.error = null
      this.sendOTP('resend-otp')
    },
    changeUsername () {
      this.step = 'login'
      this.login.username = ''
    },
    otpChange (otp) {
      this.otp.error = null
      this.otp.otp = otp
      if (otp.length === 6) {
        this.otp.valid = true
      } else {
        this.otp.valid = false
      }
    },
    initOTP () {
      this.countDown = 30
      this.countDownTimer()
    },
    verifyOTP () {
      const self = this
      const code = this.otp.otp
      self.loading = true
      self.otp.error = null
      if (self.$fire.auth.currentUser && self.$fire.auth.currentUser.isAnonymous && !self.isMobileExists) {
        const credential = self.$fireModule.auth.PhoneAuthProvider.credential(window.confirmationResult.verificationId, self.otp.otp)
        this.linkWithCredential(credential)
      } else {
        window.confirmationResult.confirm(code).then(function (result) {
          // User signed in successfully.
          self.authenticatedUser = result.user
          // self.loading = false
          self.$cookies.set('isNewUser', result.additionalUserInfo.isNewUser)
         // console.log('isNewUser', result.additionalUserInfo.isNewUser ,result.additionalUserInfo ,result.additionalUserInfo.providerId)
          self.method = result.additionalUserInfo?.providerId
         // console.log('this.method', self.method)
        }).catch(function (error) {
          console.log(error)
          self.otp.error = self.$t('invalidOtp')
          self.loading = false
        })
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
    sendEmailLink () {
      const vm = this
      vm.loading = true
      const url = this.$config.BASE_URL + '/signin-email-link-verify'
      const actionCodeSettings = Object.assign({ url }, this.$config.actionCodeSettings)

      this.$fire.auth.sendSignInLinkToEmail(vm.login.username, actionCodeSettings)
        .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.s
          vm.loading = false
          window.localStorage.setItem('emailForSignIn', vm.login.username)
          vm.step = 'email-sent'
          vm.countDown = 30
          vm.countDownTimer()
        })
        .catch((error) => {
          vm.loading = false
          // const errorCode = error.code
          const errorMessage = error.message
          vm.login.error = errorMessage
        })
    },
    logout () {
      this.$fire.auth.signOut()
    },
    async linkWithCredential (credential) {
      console.log('linkWithCredential', 'started')
      try {
        const result = await this.$fire.auth.currentUser.linkWithCredential(credential)
      //  console.log('result', result.user.uid)

        this.readFromRealtimeDb(result.user)

        const requestPayloadData = { email: result.user.email, phoneNumber: result.user.phoneNumber }

        // this.callFireFunction('setStatus', requestPayloadData)
        // this.callFireFunction('linkUserWithCredential', requestPayloadData)

        this.$fire.functions.httpsCallable('linkUserWithCredential')(requestPayloadData).then((resp) => {
          console.log('linkUserWithCredential fcm resp', resp)
        })

        this.$fire.functions.httpsCallable('setStatus')({ status: 'online' }).then((resp) => {
          console.log('setStatus fcm resp', resp)
        })

        this.$cookies.set('isNewUser', result.additionalUserInfo.isNewUser)
        this.logEvent_gintaa_referrals_installations()
        console.log('loginType', 'linkWithCredential')
      } catch (error) {
        if (error.code === 'auth/account-exists-with-different-credential') {
          try {
            const result = await this.$fire.auth.signInWithCredential(credential)
            this.loading = false
            this.$cookies.set('isNewUser', result.additionalUserInfo.isNewUser)
            console.log('loginType', 'signInWithCredential')
          } catch (error) {
            this.otp.error = this.$t('invalidOtp')
            this.loading = false
          }
        } else {
          this.otp.error = this.$t('invalidOtp')
          this.loading = false
        }
      }
    },
    socialMediaProviderId(providerId){
   //  console.log("===================providerId",providerId)
     this.method = providerId
    },
    linkWithCredentialSocial (user) {
      console.log('linkWithCredentialSocial', 'started')
      try {
       

        const requestPayloadData = { email: user.email, phoneNumber: user.phoneNumber }

        this.$fire.functions.httpsCallable('linkUserWithCredential')(requestPayloadData).then((resp) => {
          console.log('linkUserWithCredential fcm resp', resp)
        })

        this.$fire.functions.httpsCallable('setStatus')({ status: 'online' }).then((resp) => {
          console.log('setStatus fcm resp', resp)
        })

        this.logEvent_gintaa_referrals_installations()

        console.log('loginType', 'linkWithCredentialSocial')

        this.readFromRealtimeDb(user)
      } catch (error) {
        // if (error.code === 'auth/account-exists-with-different-credential') {
        //   try {
        //     const result = await this.$fire.auth.signInWithCredential(credential)
        //     this.loading = false
        //     this.$cookies.set('isNewUser', result.additionalUserInfo.isNewUser)
        //     console.log('loginType', 'signInWithCredential')
        //   } catch (error) {
        //     this.otp.error = this.$t('invalidOtp')
        //     this.loading = false
        //   }
        // } else {
        //   this.otp.error = this.$t('invalidOtp')
        //   this.loading = false
        // }
      }
    },
    async readFromRealtimeDb (user) {
      const isNewUser = this.$cookies.get('isNewUser')
      const vm = this
      console.log('user1', user)
      console.log('isNewUser', isNewUser)
      console.log('user.auth.currentUser', user.auth?.currentUser?.uid)

      const analyticsdata = {
          channel_id: 'WEB',
          user_id:     user.auth?.currentUser?.uid,
          method:      this.method 
         };
      if(isNewUser){
        this.logEventForSignup(analyticsdata)
      }else{
        console.log("For login call analytics")
        this.logEventForLogin(analyticsdata)
      }

      this.loading = false
       const isSuspended = this.parseJwt (user.auth.currentUser.accessToken)
       console.log("isSuspended",isSuspended)
      vm.$cookies.set('gintaa_token', user.auth.currentUser.accessToken)
      vm.$axios.setToken(user.auth.currentUser.accessToken, 'Bearer')

      let langPref = ''
      const currentUserData = await this.getCurrentUserInfo() // Fetch language preferance for user
      // console.log('currentUserData:', currentUserData);
      langPref = currentUserData && currentUserData.langPref ? currentUserData.langPref : 'en'
      console.log("this.authenticatedUser",this.authenticatedUser.refreshToken)

      //  const isSuspended = this.parseJwt (this.authenticatedUser.refreshToken)
      //  console.log("isSuspended",isSuspended)

      //  return 

    //  return
      setTimeout(() => {
        let redirect = '/'
        if (!this.authenticatedUser.displayName || isNewUser) {
          redirect = this.localePath('/auth/signup')
        } else if (this.$route.query.redirect && this.$route.query.redirect !== '/') {
          redirect = this.$route.query.redirect
        } else if (this.fromCreateListing) {
          redirect = this.fromCreateListing
        }else if (isSuspended?.suspended){
         redirect = '/activate-account'
        }

        if (this.$cookies.get('langPref')) {
          langPref = this.$cookies.get('langPref')
          // this.$cookies.set('langPref', null) // Set cookies null for language preferance
        }

        this.setCurrentLanguagePreferance(langPref)

        // if (redirect === '/' && !isSuspended?.suspended) {
        //   redirect = langPref === 'en' ? redirect : redirect + langPref
        // }else if (isSuspended?.suspended) {
          
        //   redirect = '/activate-account'
        
        // }

        if (redirect === '/' ) {
          redirect = langPref === 'en' ? redirect : redirect + langPref
        }

        // console.log('redirect Path:', redirect)
        // this.localePath(
        vm.$router.push({ path: redirect })
      }, 100)
    },

    parseJwt(token) {
      return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    },

    async logEvent_gintaa_referrals_installations () {
      try {
        const analyticsData = {
          channel_id: 'WEB',
          user_id: this.$fire.auth.currentUser.uid,
          referral_code: this.$route.query.invitedby
        }
       // console.log(analyticsData)
        await this.$fire.analytics.logEvent('gintaa_referrals_installations', analyticsData)
        // console.log('Gintaa analytics event log successfully');
      } catch (e) {
        console.log('Gintaa analytics error:', e)
      }
    },

    async getCurrentUserInfo () {
      const vm = this
      const currentUserInfo = await this.$axios.get(this.apiUrls.userProfile)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          // return error.response.data
          // this.$router.go()
          return error
        })
     // console.log('signup currentUserInfo:', currentUserInfo)
      this.loading = false
      if (currentUserInfo && currentUserInfo.payload && !currentUserInfo.error) {
        return currentUserInfo.payload
      }
      return null
    },
    setCurrentLanguagePreferance (lanCode) {
      const postData = {
        langPref: lanCode
      }
      try {
        const data = this.$axios.$put(this.apiUrls.userProfile, postData)
        // vm.$cookies.set('chngedLang', 'yes')
      } catch (error) {
        console.log('error', error)
      }
    },

    logEventForSignup(analyticsData){
       try {        
        const analyticsSignUpData = {
          channel_id: 'WEB',
          user_id: analyticsData?.user_id, //current userid
          method:  analyticsData?.method
        };
         this.$fire.analytics.logEvent('gintaa_signup', analyticsSignUpData)
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },

    logEventForLogin(analyticsData){
       try {        
        const analyticsLoginData = {
          channel_id: 'WEB',
          user_id: analyticsData?.user_id, //current userid
          method:  analyticsData?.method ? analyticsData?.method : this.method
        };
        if(analyticsLoginData.user_id){
         this.$fire.analytics.logEvent('gintaa_login', analyticsLoginData)
        // console.log("analyticsLoginData login",analyticsLoginData)
        }
         
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },

    async isMobileNumberExists(){
      // this.isMobileExists = false
      const countryCode = '+91' // india
      const phoneNumber = countryCode + this.login.username
      const requestPayloadData = {"phone" : phoneNumber}
      try{
        const resp = await this.$fire.functions.httpsCallable('checkByPhone')(requestPayloadData)
        this.isMobileExists = resp && resp.data && resp.data.status === 'OK' ? true : false
      } catch(err){
        this.isMobileExists = false
      }
    }
  }
})
</script>
<style>
  .-z-1 {
    z-index: -1;
  }

  .origin-0 {
    transform-origin: 0%;
  }

  input[type="text"]:focus ~ label, input[type="email"]:focus ~ label, input[type="number"]:focus ~ label,
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

  input[type="text"]:focus ~ label, input[type="email"]:focus ~ label,
  select:focus ~ label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(72, 206, 243, var(--tw-text-opacity));
    left: 0px;
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
