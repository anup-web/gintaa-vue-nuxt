<template>

     <div class="basis-full border-0 sm:border-0 sm:basis-full md:border-0 md:basis-full lg:basis-1/2 lg:border-l border-gray-200">
                    <div class="w-full pl-0 pr-0 sm:pl-6 sm:pr-6 md:pl-6 md:pr-6 lg:pr-0">
                    <div class="w-full bg-white  px-0 sm:px-0 md:px-6 py-4 rounded-md min-h-[500px]">
                         <div class="text-base text-gray-700 font-medium text-center mb-6">{{ $t('registerYourRestaurant') }}</div>
                    <div  class="flex flex-col w-full mx-auto relative overflow-x-visible px-4 sm:px-8 md:px-8">
                         <div  class="w-full mb-12 relative">
                              <ol  role="list" class="flex items-center w-full relative status-offer-mob-desk">
                                   <li  class="relative flex items-center w-full">
                                        <div  class="flex items-center text-white relative group">
                                             <div  class="flex items-center justify-center rounded transition duration-500 ease-in-out w-8 h-8 py-3 bg-firoza">
                                                  <span class="">1</span>
                                                  <svg x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-white hidden"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                             </div>                                             
                                             <div  class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-[11px] sm:text-xs md:text-xs capitalize text-firoza">{{ $t('contactNumber') }}</div>
                                        </div>
                                        <div  class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-200"></div>
                                   </li>

                                   <li  class="relative flex items-center w-full">
                                        <div  class="flex items-center text-gray-500 relative group">
                                              <div  class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded hover:border-gray-400">
                                                  2
                                              </div>
                                                             
                                              <div  class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-[11px] sm:text-xs md:text-xs capitalize text-gray-500">{{ $t('restaurantInformation') }}</div>
                                        </div>
                                        <div  class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-200"></div>
                                   </li>
                                             
                                   <li  class="relative flex items-center">
                                        <div  class="flex items-center text-gray-500 relative group">
                                              <div  class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded hover:border-gray-400">
                                                  3
                                              </div>
                                                             
                                              <div  class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-[11px] sm:text-xs md:text-xs capitalize text-gray-500">{{ $t('uploadPhotoDocuments') }}</div>
                                      </div>                                                             
                                  </li>
                              </ol>
                         </div>
                    </div>
                   <div class="w-full flex flex-col mt-10">
                        
                         <div   v-if="step === 'login'">
                              <div class="text-sm text-gray-700 font-medium mb-4">{{ $t('contactNumber') }}</div>
                              <div class="relative pl-[55px]">
                              <div class="absolute pb-2 font-normal  border-b border-gray-200 text-sm text-gray-600 left-0 -top-[12px] pr-3">
                <span class="block text-[10px] text-gray-400 pb-1">{{ $t('code') }}</span>
                {{ $t('nineone') }}
              </div>
                         
                         <div  
                             
                              class="relative z-0 w-full mb-6">
                               <!-- <input  type="text" name="name" placeholder=" " required="required" autocomplete="off" minlength="1" maxlength="300" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"> -->
                               <input 
                                   v-model="login.username"
                                   autocomplete="off"
                                   type="number"
                                   name="name"
                                   placeholder=" "
                                   max="10"
                                   @keypress="isNumber($event)"
                                   @input="onChangeLogin" 
                                   class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                               <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('restaurantMobileNumber') }}</label> 
                              
                                                           
                         
                    </div>
               </div>
                    <div class="w-full  items-center">
                                   <div class="h-[20px]">
                         <div  
                                        v-if="login.error"
                                        class="text-xs text-red-400  relative">
                                        <!-- Enter a valid Phone Number -->
                                        {{ login.error }}
                                   </div> 
                              </div>
                                   <button  
                                        v-if="!loading"
                                        type="button" 
                                        id="open-btns" 
                                        :disabled="!login.valid"
                                        @click="isMobileAlreadyExists"
                                        :class="!login.valid ? 'opacity-40' : ''"
                                        class="mt-4 bg-firoza text-white font-bold py-1 px-3 h-11 rounded w-full text-base flex items-center justify-center"> {{ $t('verify') }} </button>
                                   <button
                                        v-if="loading"  
                                        type="button" 
                                        id="loading-btns" 
                                        class="mt-4 bg-firoza text-white font-bold py-1 px-3 h-11 rounded w-full text-base flex items-center justify-center"> 
                                        <Spinner />
                                   </button>
                              </div> 
               </div> 
               
                         <div id="recaptcha-container" /> 
                         
                         <div v-if="step === 'otp'"> 
                              <div class="text-sm text-gray-700 font-medium mb-4">{{ $t('verifyMobileNumber') }}</div>
                              <div class="w-full relative">
                              <!-- <div class="text-xs text-gray-500">Verification code has been sent to your mobile number</div>  -->
                              <div class="text-sm text-gray-400  pb-3 text-left">
                                   {{ $t('otpSent') }} <span>{{ login.username }}</span> 
                                   <a class="text-firoza text-sm font-medium ml-3 cursor-pointer" @click="changeUsername">{{ $t('changeNumber') }}</a>
                              </div>
                                   <div class="mb-5">
                                   <div class="w-full restaurant-otp-food">
                                        <OtpView @otpChange="otpChange" />
                                        <span :class="[otp.error ? '' : 'hidden', 'text-xs text-errortext pt-2 block']">{{ otp.error }}</span>                                       
                                   </div>
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
                              </div> 
                              <div class="flex items-center relative pl-4 mt-[40px] mb-4">
                                   <input  
                                        id="f-Refurbished" 
                                        type="checkbox" 
                                        :checked="istermContionChecked" 
                                        @click="onClickingCheckAndUncheck"
                                        class="h-4 w-4 border-gray-300 rounded text-firoza focus:ring-firoza absolute z-10 left-0 top-0">
                                   <label  for="f-Refurbished" class="ml-2 text-xs text-gray-600 cursor-pointer">  {{ $t('byContinuingAgree') }}  <a :href="localePath('/legal/gintaa-food/terms-condition')" target="_blank" class="text-firoza lowercase">{{ $t('termsConditions') }}</a> </label>
                              </div>
                              <!-- href="/gintaa-food/vendor/register-restaurant/step-2"  -->
                              
                              <button 
                                   v-if="!loading"
                                   :disabled="!istermContionChecked || !otp.valid || otp.error"
                                   :class="!istermContionChecked || !otp.valid || otp.error ? 'opacity-50' : ''"
                                   @click="verifyOTP"
                                   class="bg-firoza text-white font-bold py-1 px-3 h-11 rounded w-full text-base flex items-center justify-center">
                                   <span>{{ $t('verify') }}</span>
                              </button>
                              <button 
                                   v-else
                                   :disabled="true"
                                   class="bg-firoza text-white font-bold py-1 px-3 h-11 rounded w-full text-base flex items-center justify-center">
                                   <Spinner />
                              </button>
                         </div>
                    </div> 
                    
                </div> 
                </div> 
                </div> 

</template>






<script lang="ts">
     import Vue from 'vue'

     export default Vue.extend({
          name: 'MobilenoStepOne',
          data(){
               return {
                    loading: false,
                    resendOtpLoader: false,
                    countDown: 30,
                    step: 'login',
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
                    appVerifier: null,                    
                    method: '',
                    authenticatedUser: null,
                    apiUrls: this.$config.apiUrls,
                    istermContionChecked: true
               }
          },
          
          created () {
               const vm = this
               this.$fire.auth.onAuthStateChanged((user: any) => {
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

                              }
                         }
                    }, 200)
               })
          },
          mounted(){
               if (this.step === 'login') {
                    this.initReCaptcha()
               } else if (this.step === 'otp') {
                    this.initOTP()
               }
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
               
               onChangeLogin () {
                    const validEmail = this.$isValidEmail(this.login.username)
                    const validMobile = this.$isValidMobile(this.login.username)

                    this.login.valid = validEmail || validMobile
                    if(!this.login.valid){
                         this.login.error = "Please enter a valid mobile number"
                    } else {
                         this.login.error = null
                    }
                    console.log('valid: ',this.login.valid)
                    // this.error = !this.valid
               },

               
          async isMobileAlreadyExists() {
               this.loading = true
               const fireFunctionName: string = 'checkByPhone';
               const projectId = this.$fireModule.apps[0].options.projectId
               const region = this.$fire.functions._region
               const url = `https://${region}-${projectId}.cloudfunctions.net/${fireFunctionName}`

               try {

                    const appcheckToken = await this.$fire.appCheck.getToken()
                    const headers = {
                         'X-Firebase-AppCheck': appcheckToken.token,
                         'Accept-Language': this.$i18n.locale
                    }
                    // appType = 'FOOD_APP' | 'MAIN_APP'

                    const countryCode = '+91' // india
                    const phoneNumber = countryCode + this.login.username

                    let requestPayloadData = { data: {"phone": phoneNumber}};

                    const mobileExists = await this.$axios.$post(url, requestPayloadData, { headers })
                                        .then((response) => { 
                                             return response
                                        }).catch((error) => {
                                             return error.response
                                        });
                    
                    let respResult
                    console.log("notificationResp:", mobileExists)
                    if(mobileExists && mobileExists.result !== undefined){
                         respResult = mobileExists.result
                    } else {
                         respResult = mobileExists.data.error
                    }
                    console.log("notificationResp: respResult", respResult)

                    if(respResult.status === "NOT_FOUND"){
                         // Go For the registration
                         this.sendOTP()
                    } else {
                         // User already exists
                         this.login.error    = "User already exists with this number"
                         this.login.valid    = false
                         this.loading = false
                    }

                    

               } catch (error) {
                    // this.notificationList = []
                    this.loading = false
                    console.log(error)

               }
          },
          
          sendOTP(mode = 'send-otp') {

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
          resendOTP() {
               this.otp.error = null
               this.sendOTP('resend-otp')
          },
          
          initOTP() {
               this.countDown = 30
               this.countDownTimer()
          },
          
          countDownTimer() {
               if (this.countDown > 0) {
                    setTimeout(() => {
                         this.countDown -= 1
                         this.countDownTimer()
                    }, 1000)
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
          
          otpChange (otp: any) {
               this.otp.error = null
               this.otp.otp = otp
               if (otp.length === 6) {
                    this.otp.valid = true
               } else {
                    this.otp.valid = false
               }
          },
          
          verifyOTP(){
               const self = this
               const code = this.otp.otp
               self.loading = true
               self.otp.error = null
               if (self.$fire.auth.currentUser && self.$fire.auth.currentUser.isAnonymous) {
                    const credential = self.$fireModule.auth.PhoneAuthProvider.credential(window.confirmationResult.verificationId, self.otp.otp)
                    console.log('credential:',credential)
                    // this.linkWithCredential(credential)
               } else {
                    console.log('credential:', 'else part')
                    window.confirmationResult.confirm(code).then((result: any)=>{
                         console.log('user:', result.user)
                         // User signed in successfully.
                         self.authenticatedUser = result.user
                         // self.loading = false
                         self.$cookies.set('isNewUser', result.additionalUserInfo.isNewUser)
                         // console.log('isNewUser', result.additionalUserInfo.isNewUser ,result.additionalUserInfo ,result.additionalUserInfo.providerId)
                         self.method = result.additionalUserInfo?.providerId
                         // console.log('this.method', self.method)
                    }).catch((error: any)=>{
                         console.log(error)
                         self.otp.error = self.$t('invalidOtp')
                         self.loading = false
                    })
               }
          },
          
          async linkWithCredential (credential: any) {
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
                    // this.logEvent_gintaa_referrals_installations()
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
          
          async readFromRealtimeDb (user: any) {
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
               const isSuspended = this.parseJwt(user.auth.currentUser.accessToken)
               console.log("isSuspended",isSuspended)
               vm.$cookies.set('gintaa_token', user.auth.currentUser.accessToken)
               vm.$axios.setToken(user.auth.currentUser.accessToken, 'Bearer')

               let langPref = ''
               // const currentUserData = await this.getCurrentUserInfo() // Fetch language preferance for user
               // console.log('currentUserData:', currentUserData);
               // langPref = currentUserData && currentUserData.langPref ? currentUserData.langPref : 'en'
               console.log("this.authenticatedUser", this.authenticatedUser.refreshToken)

               //  const isSuspended = this.parseJwt (this.authenticatedUser.refreshToken)
               //  console.log("isSuspended",isSuspended)

               const markAsRestaurant = await this.markAsRestaurant(user.auth?.currentUser?.uid)
               
               setTimeout(() => {
                    let redirect = '/gintaa-food/register-restaurant/basic-info'
                    // if (!this.authenticatedUser.displayName || isNewUser) {
                    //      redirect = this.localePath('/auth/signup')
                    // } else if (this.$route.query.redirect && this.$route.query.redirect !== '/') {
                    //      redirect = this.$route.query.redirect
                    // } else if (this.fromCreateListing) {
                    //      redirect = this.fromCreateListing
                    // }else if (isSuspended?.suspended){
                    //      redirect = '/activate-account'
                    // }

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
                    // vm.$router.push({ path: redirect })
                    window.location.href = redirect
               }, 100)
          },
          
          setCurrentLanguagePreferance (lanCode: string) {
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
          

          logEventForSignup(analyticsData: any){
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

          logEventForLogin(analyticsData: any){
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

          parseJwt(token: string) {
               return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
          },
          async markAsRestaurant(userId: string){
               if(userId){
                    // mark as restaurant
                    try{
                         const url = `/users/v1/user/mark-as-restaurant/${userId}`
                         const masrkRestaaurant = await this.$axios.post(url, {})
                                                  .then((response) => {
                                                       return response.data
                                                  })
                                                  .catch((error) => {
                                                       // return error.response.data
                                                       // this.$router.go()
                                                       return error
                                                  })
                                                  
                         if (masrkRestaaurant && masrkRestaaurant.payload && !masrkRestaaurant.error) {
                              return masrkRestaaurant.payload
                         }
                         return null
                    }catch(err){
                         console.log(err)
                         return null
                    }
               }
          },
          changeUsername(){
               this.step      = 'login'
               this.loading   = false
          },
          
          onClickingCheckAndUncheck(){
               this.istermContionChecked = !this.istermContionChecked
          },
     }
})

</script>


<style>
.rating-sec .vue-star-rating .vue-star-rating-star {

margin-right: 2px !important;

}

.rating-sec .vue-star-rating .vue-star-rating-rating-text {
font-size: 13px !important;
color: #007185 !important
}

.order-date-picker .mx-datepicker-range {
width: 210px;
border: 1px solid #e3e3e3;
border-radius: 4px;
height: 30px;
padding: 0px 1px 0px 6px;
}

.-z-1 {
     z-index: -1;
   }
 
   .origin-0 {
     transform-origin: 0%;
   }
 
   input[type="text"]:focus ~ label, input[type="email"]:focus ~ label, input[type="number"]:focus ~ label,
   input[type="text"]:not(:placeholder-shown) ~ label, input[type="email"]:not(:placeholder-shown) ~ label,
   input[type="number"]:not(:placeholder-shown) ~ label,
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
   select:focus ~ label ,textarea:focus ~ label{
     /* @apply text-black; left-0; */
     --tw-text-opacity: 1;
     color: rgba(72, 206, 243, var(--tw-text-opacity));
     left: 0px;
   }
 
   input[type="text"]:not(:placeholder-shown) ~ label, textarea:not(:placeholder-shown) ~ label, input[type="number"]:not(:placeholder-shown) ~ label, select:not([value='']):valid ~ label{
       color: rgba(72, 206, 243, var(--tw-text-opacity));
   }
</style>
