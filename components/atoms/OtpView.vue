<template>

<div class="otp-first" style="display: flex; flex-direction: row;">
    <v-otp-input
      ref="otpInput"
      input-classes="verifyotp-input"
      separator=""
      :num-inputs="6"
      :should-auto-focus="true"
      :is-input-num="true"
      input-type="number"
      @on-change="OnChangeOtp"
      @on-complete="OnComplete"
      
    />

    <!-- <button @click="handleClearInput()">Clear Input</button> -->
  </div>
  <!-- <div id="otp" class="flex mb-1 w-full ">
    <input
      id="first"
      maxlength="1"
      class="appearance-none border-b  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-none mr-4 text-center font-medium border-gray-300"
      type="text"
      autocomplete="off"
      tabindex="1"
    >
    <input
      id="second"
      maxlength="1"
      class=" appearance-none border-b  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-none mr-4 text-center font-medium border-gray-300"
      type="text"
      autocomplete="off"
      tabindex="2"
    >
    <input
      id="third"
      maxlength="1"
      class=" appearance-none border-b  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-none mr-4 text-center font-medium border-gray-300"
      type="text"
      autocomplete="off"
      tabindex="3"
    >
    <input
      id="fourth"
      maxlength="1"
      class=" appearance-none border-b  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-none mr-4 text-center font-medium border-gray-300"
      type="text"
      autocomplete="off"
      tabindex="4"
    >
    <input
      id="fifth"
      maxlength="1"
      class=" appearance-none border-gray-300 border-b  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-none mr-4 text-center font-medium"
      type="text"
      autocomplete="off"
      tabindex="5"
    >
    <input
      id="sixth"
      maxlength="1"
      class=" appearance-none border-gray-300 border-b  w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-none text-center font-medium"
      type="text"
      autocomplete="off"
      tabindex="6"
    >
  </div> -->
</template>

<script>
import Vue from 'vue'
import OtpInput from "@bachdgvn/vue-otp-input";
//Vue.component("v-otp-input", OtpInput);

export default Vue.extend({
  name: 'OtpView',
  asyncData () {
    return {
    //   otp: ''
    }
  },components:{"v-otp-input": OtpInput},
  mounted () {
    this.initOTP()
  },
  methods: {

    OnComplete(value) {
     // console.log('OTP completed: ', value);
      this.OnChangeOtp(value)
    },
    OnChangeOtp(value) {
    //  console.log('OTP changed: ', value);
      this.$emit('otpChange',  value)
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    },
    getOtp () {
      const first = document.getElementById('first').value
      const second = document.getElementById('second').value
      const third = document.getElementById('third').value
      const forth = document.getElementById('fourth').value
      const fifth = document.getElementById('fifth').value
      const sixth = document.getElementById('sixth').value

      return `${first}${second}${third}${forth}${fifth}${sixth}`
    },
    initOTP () {
      const self = this
      const inputs = self.$el.querySelectorAll('#otp > *[id]')
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keydown', function (event) {
          if (!self.$isNumber(event)) {
            return false
          }

          if (event.key === 'Backspace') {
            inputs[i].value = ''
            if (i !== 0) {
              inputs[i - 1].focus()
            }
          } else if (i === inputs.length - 1 && inputs[i].value !== '') {
            return true
          } else if (event.keyCode > 47 && event.keyCode < 58) {
            inputs[i].value = event.key
            if (i !== inputs.length - 1) {
              inputs[i + 1].focus()
            }
            event.preventDefault()
          } else if (event.keyCode > 64 && event.keyCode < 91) {
            inputs[i].value = String.fromCharCode(event.keyCode)
            if (i !== inputs.length - 1) {
              inputs[i + 1].focus()
            }
            event.preventDefault()
          }
        })

        inputs[i].addEventListener('keyup', (event) => {
          this.$emit('otpChange', self.getOtp())
        })
      }
    }
  }
})
</script>
<style scoped>

.otp-input {
    width: 40px;
    height: 40px;
    padding: 5px;
    margin: 0 10px;
    font-size: 20px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    text-align: center;
  }
    .error {
      border: 1px solid red !important;
    }
  .otp-input::-webkit-inner-spin-button,
  .otp-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
