<template>
  <div>
    <Header />
    <section class="pt-24 bg-lightgrey h-screen">
      <div class="container  mx-auto ">
        <div class="flex flex-wrap items-center justify-center ">
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

          <div class="md:w-3/6 sm:w-full p-6 ">
            <div class="login-section  bg-white rounded-md">
              <form class="p-8">
                <h2 class="text-left text-xl pb-2 font-bold text-gray-600">
                  Address
                </h2>
                <div class="text-xs text-gray-500 pb-7">
                  Enter your address here. You can update it later.
                </div>

                <div class="w-full mx-auto flex flex-col justify-center ">
                  <div class="flex flex-col space-y-3">
                    <div class="flex flex-col md:flex-row">
                      <div class="relative z-0 w-full md:w-3/6  mb-6">
                        <input type="email" name="name" placeholder=" " class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Enter Email </label>
                        <span id="error" class="text-sm text-red hidden">Phone is required</span>
                      </div>
                      <div class="relative z-0 w-full md:w-3/6  mb-6 md:ml-6">
                        <input type="email" name="name" placeholder=" " class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Enter Email </label>
                        <span id="error" class="text-sm text-red hidden">Phone is required</span>
                      </div>
                    </div>
                    <div class="relative z-0 w-full md:w-6/6 mb-8">
                      <input type="tel" name="tels" placeholder=" " class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                      <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Enter Phone </label>
                      <span id="error" class="text-sm text-red hidden">Phone is required</span>
                    </div>
                  </div>
                </div>

                <!-- <div class=mb-4>
                        <label class="block mb-2 text-darkcolor text-sm font-medium">Email or Phone</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-14 focus:outline-none focus:shadow-outline text-sm"  type="text" placeholder="Enter your email or mobile number">
                    </div> -->
                <div class="mt-8">
                  <router-link to="/authentication/upload-photo" tag="button" class="w-full">
                    <button class="bg-green text-white font-bold py-2 px-3 h-14 rounded w-full opacity-50">
                      next
                    </button>
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  <!-- <Footer/> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AddAddress'
})
</script>

<style>
  .-z-1 {
    z-index: -1;
  }

  .origin-0 {
    transform-origin: 0%;
  }

  input[type="text"]:focus ~ label, input[type="email"]:focus ~ label, input[type="tel"]:focus ~ label,
  input[type="text"]:not(:placeholder-shown) ~ label, input[type="email"]:not(:placeholder-shown) ~ label, input[type="tel"]:not(:placeholder-shown) ~ label,
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
