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

          <div class="sm:w-full p-6 md:w-[850px]">
            <div class="login-section  bg-white rounded-md">
              <form class="p-8">
                <h2 class="text-left text-xl pb-2 font-bold text-gray-600">
                  {{ $t('addLocation') }}
                </h2>
                <div class="text-xs text-gray-500 pb-5">
                  {{ $t('subtextLocation') }}

                </div>

                <div class="relative  w-full mb-6">
                  <div class="relative z-0 w-full mb-2">
                    <input type="text" name="name" placeholder=" " class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                    <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Type your address here</label>
                    <a href="#" class="absolute top-2 right-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C11.4477 0 11 0.447715 11 1V3.05493C6.82838 3.51608 3.51608 6.82838 3.05493 11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H3.05493C3.51608 17.1716 6.82838 20.4839 11 20.9451V23C11 23.5523 11.4477 24 12 24C12.5523 24 13 23.5523 13 23V20.9451C17.1716 20.4839 20.4839 17.1716 20.9451 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H20.9451C20.4839 6.82838 17.1716 3.51608 13 3.05493V1C13 0.447715 12.5523 0 12 0ZM19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#8F95B2" />
                    </svg>
                    </a>
                  </div>
                  <div>
                    <img src="~assets/images/map.png" alt="map" class="max-w-full">
                  </div>
                </div>

                <!-- <div class=mb-4>
                        <label class="block mb-2 text-darkcolor text-sm font-medium">Email or Phone</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-14 focus:outline-none focus:shadow-outline text-sm"  type="text" placeholder="Enter your email or mobile number">
                    </div> -->
                <div>
                  <router-link to="/authentication/add-address" tag="button" class="w-full">
                    <button class="bg-green text-white font-bold py-2 px-3 h-14 rounded w-full opacity-50">
                      {{ $t('next') }}
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
  name: 'LoginPage'
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
