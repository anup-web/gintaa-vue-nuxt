<template>
  <div class="w-full flex flex-col mb-3 px-4">
    <div class="flex flex-col w-full mt-1 pl-8">
      <div class="mt-2 space-x-4 flex items-center">
        <div class="flex">
          <input
            id="express-delivery"
            v-model="deliveryMethod"
            name="push-notifications"
            value="Shipping"
            type="radio"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          >
          <label for="express-delivery" class="ml-3 block text-sm font-normal text-gray-700">
            <img
              width="112"
              height="72"
              class="rounded-full"
              src="~/assets/images/offer/express-delivery.png"
              alt="iamges"
            >
          </label>
        </div>
        <div class="flex">
          <input
            id="india-post"
            v-model="deliveryMethod"
            name="push-notifications"
            value="IndiaPost"
            type="radio"
            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          >
          <label for="india-post" class="ml-3 block text-sm font-normal text-gray-700">
            <img
              width="86"
              height="57"
              class="rounded-full"
              src="~/assets/images/offer/india-post.png"
              alt="iamges"
            >
          </label>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full mt-5">
      <div class="flex w-full text-gray-700 text-sm">
        Delivery address
      </div>
      <div :class="[showMoreAddress ? '' : 'max-h-[157px] overflow-hidden', 'mt-4']">
        <div v-for="address of addresses" :key="address.id" class="flex pl-5 mb-3">
          <input :id="address.id" name="selected_address" type="radio" class="mt-1 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 cursor-pointer" @change="onChange(address)">
          <label :for="address.id" class="block cursor-pointer">
            <div class="ml-3">
              <div class="flex items-center">
                <svg
                  v-if="address.annotation == 'Home'"
                  width="17"
                  height="17"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6139 0.210648C10.2528 -0.0702159 9.74717 -0.0702159 9.38606 0.210648L0.386059 7.21065C0.142473 7.4001 0 7.69141 0 8V19C0 19.7957 0.31607 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H7H13H17C17.7957 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V8C20 7.69141 19.8575 7.4001 19.6139 7.21065L10.6139 0.210648ZM14 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V8.48908L10 2.26686L2 8.48908V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H6V11C6 10.4477 6.44772 10 7 10H13C13.5523 10 14 10.4477 14 11V20ZM8 20V12H12V20H8Z" fill="#8CAEC5" />
                </svg>

                <svg
                  v-else-if="address.annotation == 'Work'"
                  width="16"
                  height="16"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 4V0H0V18H20V4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM18 16H10V14H12V12H10V10H12V8H10V6H18V16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z" fill="#8CAEC5" />
                </svg>

                <svg
                  v-else
                  width="16"
                  height="22"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#8CAEC5" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#8CAEC5" />
                </svg>

                <div for="comments" class="ml-3 text-sm text-gray-700">{{ address.annotation }}</div>
              </div>
              <div class="text-gray-400 text-xs pl-8 mt-0.5"> {{ $getDisplayAddress(address) }} </div>
            </div>
          </label>
        </div>
      </div>
      <a v-show="addresses.length > 3" class="cursor-pointer text-firoza pl-5 text-sm inline-block font-medium" @click="showMoreAddress=!showMoreAddress">{{ showMoreAddress? 'Show Less': 'Show More' }}</a>
      <div class="w-full pl-5 mt-4">
        <button type="submit" class="border border-firoza flex justify-center items-center bg-transparent py-1 px-2 rounded text-firoza font-normal text-sm">
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" /></svg> <span>add new address </span>
        </button>
      </div>
    </div>

    <div v-show="selectedCourier || requestedAmount" class="flex w-full text-gray-700 text-sm mt-8">
      You will pay
    </div>

    <div v-if="!loading && !error && (selectedCourier || requestedAmount)" class="w-full pl-5 mt-2">
      <div class="flex items-center w-full text-gray-500 text-sm">
        <svg
          width="14"
          height="14"
          class="mr-1"
          viewBox="0 0 14 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#8CAEC5" />
        </svg>
        <!--<span> todo -- depends </span>-->
        <div v-if="requestedAmount > 0" class="flex justify">
          <span>{{ requestedAmount }}</span>
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" /></svg>
        </div>
        <!--<span> Shipping charge </span>-->
        <span v-if="selectedCourier"> {{ selectedCourier.rate }} </span>
      </div>
      <!--
      <div class="w-full text-xs text-gray-400 mt-1">
        Shipping will calculated after your partner will fill dimensions and weight of his package
      </div>
      -->
    </div>
    <div v-if="loading" class="w-full pl-5 mt-2">
      <div class="w-full text-xs text-gray-400 mt-1">
        <Spinner v-show="loading" /> Calculating shipping...
      </div>
    </div>
    <div v-if="!loading && error" class="w-full pl-5 mt-2">
      <div class="w-full text-xs text-gray-400 mt-1">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'DoorstepDelivery',
  props: ['listing', 'requestedAmount', 'payer'],
  data () {
    return {
      loading: false,
      selectedCourier: null,
      error: '',
      showMoreAddress: false,
      deliveryMethod: null
    }
  },
  computed: {
    ...mapState({
      addresses: (state: any) => {
        return state.addresses
      }
    })
  },
  methods: {
    onChange (address: any) {
      if (this.deliveryMethod === 'Shipping') {
        console.log(this.listing)
        const params = {
        // pickupPostCode: this.listing.location.zip,
          pickupPostCode: 700006,
          deliveryPostCode: address.zip,
          pickupState: this.listing.location.state,
          deliveryState: address.state,
          cod: 0,
          height: 10,
          length: 20,
          breadth: 10,
          weight: 0.6
        }
        console.log(params)

        this.getShippingDetails(params)
      }
    },
    async getShippingDetails (params: any) {
      this.error = ''
      this.loading = true
      this.selectedCourier = null
      const res = await this.$axios.$get(`/shipping/v1/courier/serviceability?${new URLSearchParams(params).toString()}`)
      if (res.payload && res.payload.data) {
        this.selectedCourier = res.payload.data.available_courier_companies[0]
      } else {
        // this.error = 'Pickup isn\'t available at select address/ Size of the package exceeds limit. Contact your seller immediately to check and confirm.'
        this.error = res.message
      }
      this.loading = false
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
