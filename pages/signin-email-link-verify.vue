<template>
  <div>
    <!-- <Header /> -->
    <section class="bg-[#ffffff] sm:bg-[#e6e8f0] rounded  min-h-screen flex flex-col justify-center  md:py-6 sm:px-6 lg:px-8 bg-login-bg bg-repeat-x bg-bottom">
      
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <div class="bg-white py-8 px-4 sm:shadow sm:rounded-lg sm:px-10 relative">
            <div class="text-center flex justify-center  w-full pt-4">
            <img src="~assets/images/mail_complete_b.png" alt="mail_complete" class="max-w-full w-[130px]">
            <!-- <img src="~assets/images/login_banner.jpg" class="rounded-t-lg"/> -->
          </div>

            <form v-show="showEmail" class="" @submit.prevent="doLogin">
              <h2 class="text-left text-xl pb-9 font-bold text-gray-600 pt-4">
                <span class="font-normal">Please re-enter your email</span>
              </h2>
              <div class="relative z-0 w-full mb-8">
                <input
                  v-model="email"
                  autocomplete="off"
                  type="text"
                  name="name"
                  placeholder=" "
                  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm text-gray-600"
                  @input="onChangeLogin"
                >
                <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Enter Email</label>
                <span :class="[error ? '' : 'hidden', 'text-sm text-red']">{{ error }}</span>
              </div>

              <!-- <div class=mb-4>
                        <label class="block mb-2 text-darkcolor text-sm font-medium">Email or Phone</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-14 focus:outline-none focus:shadow-outline text-sm"  type="text" placeholder="Enter your email or mobile number">
                    </div> -->
              <div id="recaptcha-container" />
              <div class="mb-6">
                <button :disabled="!valid || loading" :class="[valid || loading ? '' : 'opacity-50', 'bg-firoza flex justify-center text-white font-bold py-2 px-3 h-12 rounded w-full text-base leading-[34px]']">
                  <span>Verify</span>
                  <Spinner v-show="loading" />
                </button>
              </div>
            </form>

            <form v-show="!showEmail" class="p-8 py-4 flex justify-center">
              <h2 class="text-left text-l pb-2 font-bold text-gray-600">
                Verifying Email..
              </h2>

              <Spinner />

              <div class="text-sm text-gray-400 mb-6">
                <!-- <a href="#" class="font-bold text-base text-green">Resend OTP</a> -->
              </div>
            </form>
          </div>
        </div>
      
    </section>
  <!-- <Footer/> -->
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'EmailverifyPage',
  middleware: 'nonauth',
  asyncData () {
    return {
      authenticatedUser: null,
      loading: false,
      email: '',
      showEmail: false,
      error: '',
      valid: false
    }
  },
  created () {
    const vm = this
    this.$fire.auth.onAuthStateChanged((user) => {
      this.authenticatedUser = user
      if (this.authenticatedUser) {
        vm.$router.push({ path: !this.authenticatedUser.displayName ? '/auth/signup' : '/' })
      }
    })
  },
  mounted () {
    this.doSignIn()
  },
  methods: {
    onChangeLogin () {
      this.valid = this.$isValidEmail(this.email)
    },
    doLogin () {
      if (this.$isValidEmail(this.email)) {
        this.loading = true
        this.signIn(this.email)
      }
    },
    doSignIn () {
      const vm = this
      // Confirm the link is a sign-in with email link.
      if (this.$fire.auth.isSignInWithEmailLink(window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.
        const email = window.localStorage.getItem('emailForSignIn')

        if (!email) {
          vm.showEmail = !email
        } else {
          vm.signIn(email)
        }
      }
    },
    signIn (email) {
      const vm = this
      // The client SDK will parse the code from the link for you.
      this.$fire.auth.signInWithEmailLink(email, window.location.href)
        .then((result) => {
          // Clear email from storage.
          window.localStorage.removeItem('emailForSignIn')
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
          vm.loading = false
          // vm.$router.push({ path: '/' })
        })
        .catch((error) => {
          console.log(error)
          vm.loading = false
          vm.error = error.message
        })
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
