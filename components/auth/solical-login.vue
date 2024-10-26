<template>
  <div>
    <div class="text-center mb-4" v-if="enableFacebookLogin || enableGoogleLogin">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300" />
        </div>
        <div class="relative flex justify-center text-sm mb-6">
          <span class="px-2 bg-white text-gray-500"> {{ $t('loginWith') }} </span>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-row justify-center space-x-2">
      <div v-if="enableGoogleLogin" class="basis-1/2">
        <a title="Gmail" class="h-11 w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xs font-medium text-gray-500 hover:bg-gray-50 items-center cursor-pointer" @click="googleSignIn">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-4"
          >
            <path d="M15.9988 8.17634C15.9988 7.51866 15.9443 7.03872 15.8265 6.54102H8.1626V9.50948H12.6611C12.5705 10.2472 12.0807 11.3581 10.9923 12.1047L10.9771 12.2041L13.4002 14.0436L13.5681 14.06C15.1099 12.6646 15.9988 10.6116 15.9988 8.17634Z" fill="#4285F4" />
            <path d="M8.16265 15.998C10.3666 15.998 12.2168 15.2869 13.5682 14.0605L10.9924 12.1051C10.3031 12.5762 9.37796 12.905 8.16265 12.905C6.00408 12.905 4.17202 11.5097 3.51894 9.58105L3.42321 9.58902L0.903556 11.4999L0.870605 11.5896C2.2129 14.2026 4.9701 15.998 8.16265 15.998Z" fill="#34A853" />
            <path d="M3.519 9.58074C3.34668 9.08303 3.24695 8.54973 3.24695 7.99872C3.24695 7.44764 3.34668 6.9144 3.50994 6.4167L3.50537 6.3107L0.954141 4.36914L0.870669 4.40805C0.317442 5.49236 0 6.71 0 7.99872C0 9.28743 0.317442 10.505 0.870669 11.5893L3.519 9.58074Z" fill="#FBBC05" />
            <path d="M8.16265 3.0929C9.69541 3.0929 10.7293 3.7417 11.3189 4.28389L13.6226 2.07972C12.2077 0.791009 10.3666 0 8.16265 0C4.9701 0 2.2129 1.7953 0.870605 4.40827L3.50987 6.41692C4.17202 4.48829 6.00408 3.0929 8.16265 3.0929Z" fill="#EB4335" />
          </svg>
          <span v-show="!loading">{{ $t('google') }}</span>
          <Spinner v-show="loading" />

        </a>
      </div>
      <div v-if="enableFacebookLogin" class="basis-1/2">
        <a class="h-11 w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-xs font-medium text-gray-500 hover:bg-gray-50 items-center cursor-pointer" title="Facebook" @click="facebookSignIn">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2"
          >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.132 23.3335L15.1493 15.0066H18.528L18.6666 11.6667H15.1493L15.132 9.41497C15.132 8.95087 15.2106 8.58462 15.368 8.31489C15.524 8.04648 15.8986 7.92086 16.4893 7.93938H18.5666L18.6493 4.82158C18.3906 4.78456 18.128 4.76208 17.86 4.75282C17.592 4.74357 17.348 4.72902 17.1266 4.71051C16.868 4.692 16.6093 4.68275 16.3506 4.68275C15.5386 4.62721 14.8413 4.7158 14.26 4.94719C13.6773 5.1799 13.1973 5.50384 12.82 5.92167C12.4413 6.33817 12.16 6.81681 11.9746 7.35495C11.7906 7.8931 11.6986 8.4405 11.6986 8.99715L11.716 11.6667H9.33331V15.0066H11.716L11.6986 23.3335H15.132Z" fill="#4F5FB5" />
          </svg>
          <span v-show="!fbloading">{{ $t('facebook') }}</span>
          <Spinner v-show="fbloading" />
        </a>
      </div>
    </div>
    <span :class="[socialError ? '' : 'hidden', 'text-xs text-errortext pt-2 block']">{{ socialError }}</span>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'SolicalLogin',
  data () {
    return {
      authenticatedUser: null,
      loading: false,
      fbloading: false,
      provider: null,
      socialError: null,
      credential: null,
      anonymousUser: null,
      enableGoogleLogin: false,
      enableFacebookLogin: false
    }
  },
  created () {
    if(process.client){
      // this.readRemoteConfig();
      this.readDataFromStrapi()
    }
  },
  methods: {
    async googleSignIn () {
      const vm = this
      const currentUser = vm.$fire.auth.currentUser
      const isAnonymous = vm.$fire.auth.currentUser && vm.$fire.auth.currentUser.isAnonymous
      vm.provider = new vm.$fireModule.auth.GoogleAuthProvider()
      this.loading = true
     // console.log('vm.$fire.auth.currentUser:', vm.$fire.auth.currentUser)

      if (isAnonymous) {
        try {
          const result = await vm.$fire.auth.currentUser.linkWithPopup(vm.provider)
          // store the user ore wathever
          // console.log('google login result:', result)
          // console.log('vm.$fire.auth.currentUser:', vm.$fire.auth.currentUser)
          vm.authenticatedUser = result
          // this.$router.push('/auth/signup')
         // cosnole.log("result.additionalUserInfo",result.additionalUserInfo)
          vm.$cookies.set('isNewUser', result.additionalUserInfo.isNewUser)
        
          if (currentUser && isAnonymous) {
            vm.$emit('linkWithCredentialSocial', result.user)
          }
        } catch (e) {
          console.log(e)
          if (e.code === 'auth/credential-already-in-use') {
            // vm.$fire.auth.signInWithPopup(vm.provider).then((result) => {
            //   vm.authenticatedUser = result
            //   vm.$cookies.set('isNewUser', result.additionalUserInfo.isNewUser)
            // }).catch((e) => {
            //   console.log(e)
            //   this.loading = false
            //   vm.socialError = e.message
            // })
            this.loading = false
            vm.socialError = 'Account already exists. Please login without referal.'
            vm.$fire.auth.signOut()
          } else {
            this.loading = false
            vm.socialError = e.message
          }
        }
      } else {
        try {
          const result = await vm.$fire.auth.signInWithPopup(vm.provider)
         // console.log("vm.provider",vm.provider)
          vm.authenticatedUser = result
         // console.log("result.additionalUserInfo",result.additionalUserInfo)
          vm.$cookies.set('isNewUser', result.additionalUserInfo.isNewUser)
          vm.$emit('socialMediaProviderId', result.additionalUserInfo?.providerId)
        } catch (e) {
          console.log(e)
          this.loading = false
          vm.socialError = e.message
        }
      }
    },
    facebookSignIn () {
      const vm = this
      const currentUser = vm.$fire.auth.currentUser
      const isAnonymous = vm.$fire.auth.currentUser && vm.$fire.auth.currentUser.isAnonymous
      this.fbloading = true
      vm.provider = new vm.$fireModule.auth.FacebookAuthProvider()

      if (isAnonymous) {
        vm.$fire.auth.currentUser.linkWithPopup(vm.provider).then((result) => {
          // store the user ore wathever
          console.log(result)
          vm.authenticatedUser = result
          // this.$router.push('/')
          vm.$cookies.set('isNewUser', result.additionalUserInfo.isNewUser)
          if (currentUser && isAnonymous) {
            vm.$emit('linkWithCredentialSocial', result.user)
          }
        }).catch((e) => {
          console.log(e)
          if (e.code === 'auth/credential-already-in-use') {
            // vm.$fire.auth.signInWithPopup(vm.provider).then((result) => {
            //   vm.authenticatedUser = result
            //   vm.$cookies.set('isNewUser', result.additionalUserInfo.isNewUser)
            // }).catch((e) => {
            //   console.log(e)
            //   this.fbloading = false
            //   vm.socialError = e.message
            // })
            this.loading = false
            vm.socialError = 'Account already exists. Please login without referal.'
            vm.$fire.auth.signOut()
          } else {
            this.fbloading = false
            vm.socialError = e.message
          }
        })
      } else {
        vm.$fire.auth.signInWithPopup(vm.provider).then((result) => {
          vm.authenticatedUser = result
         // console.log("result.additionalUserInfo",result.additionalUserInfo)
          vm.$cookies.set('isNewUser', result.additionalUserInfo.isNewUser)
        }).catch((e) => {
          console.log(e)
          this.fbloading = false
          vm.socialError = e.message
        })
      }
    },
    async readRemoteConfig () {
        try {
          await this.$fire.remoteConfig.fetchAndActivate()
        } catch (e) {
          alert(e)
          return
        }

        const remoteData = await this.$fire.remoteConfig.getValue('social_logins')

        console.log('remoteData:', remoteData)

        if (remoteData) {
          const remoteDataValue = remoteData._value
          const gKey = 'google'
          const fKey = 'facebook'
          
          this.enableGoogleLogin    =  remoteDataValue && remoteDataValue.includes(gKey)
          this.enableFacebookLogin  =  remoteDataValue && remoteDataValue.includes(fKey)

        }
        
      

     // console.log('remoteData:', this.remoteData)
    },

    async readDataFromStrapi(){
      try {
        const data = await fetch(`${this.$config.CMS_API_BASE}/api/generals`).then((r) => r.json());
        
        let responseData
        if (data) {
          responseData = data.data
          responseData.map((item) => {
            const key = item.attributes.parameter;
            // console.log('keys:', key)
            if (key === 'manage_social_login_button') {
              let paramVal = item.attributes.value;
              if(paramVal.web !== undefined){            
                // isMaintenance = paramVal.web.enable
                this.enableGoogleLogin    =  paramVal.web.google
                this.enableFacebookLogin  =  paramVal.web.facebook
              }
            } else {
              // console.log('other keys:', key)
            }
          })

        }
        return responseData
      } catch (error) {
        console.log(error);
        return error
      }
    }
  }
})
</script>
