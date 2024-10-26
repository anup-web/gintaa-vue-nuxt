<template>

 <div v-if="viewModal"  class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"> 

    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>    
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
        
    <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[500px] sm:w-[485px] sm:p-6 w-[320px]">
     
     <button type="button" @click="hideModal" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 absolute right-4">
          <span class="sr-only">Close</span>
          <!-- Heroicon name: outline/x -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
     
      <div>
        <div class="mx-auto flex items-center justify-center">          
              <img src="~/assets/images/offer/add-wallet.png" alt="add wallet">  
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3 class="text-lg leading-6 text-gray-900" id="modal-title">{{$t('add_coins_to_your_wallet')}}</h3>          
        </div>

        <div class="relative z-0 w-full mt-3">
             <input type="text"  @keypress="isNumber($event)" maxlength="6" autocomplete="off"  v-model="postObj.amount" name="amount" v-on:input="onChange(postObj.amount)"  placeholder=" "   class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
             <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('enter_the_amount_to_be_added_in_wallet')}}</label>
              <div class="absolute justify-start text-left  w-full text-sm text-red-400 mt-[5px]"> 
                <span class="mr-1">
                  
                  {{valiDationMsg}}
                 </span>
                    <!-- <a  :href="localePath('/my-profile')"
                class="              
                  text-sm text-green
                  font-medium
                "
              >
                <span>Click here</span>
              </a> -->
                 <a v-if="valiDationMsg" :href="localePath('/my-profile')"
                class="                 
                  text-sm text-green
                  font-medium
                "
              >
                <span>Click here</span>
              </a>
           
              </div>
               
        </div>
      </div>
      <div class="mt-9 sm:mt-9">
       <!-- <span> <button :disabled="!isFormValid" v-on:click="submitCoins()" type="button" class="inline-flex justify-center w-full rounded border border-transparent shadow-sm px-4 py-2 bg-green text-base text-white hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green sm:text-sm">Continue</button> -->
      
        <button :disabled="!postObj.amount || btnloading" :class="[postObj.amount || btnloading ? '' : 'opacity-50', 'bg-firoza flex justify-center text-white font-bold py-2 px-3 h-12 rounded w-full text-base leading-[34px]']" v-on:click="submitCoins()" type="button" class="flex justify-center items-center w-full rounded border border-transparent shadow-sm px-4 py-2 bg-firoza text-base text-white hover:bg-firoza focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-firoza sm:text-sm">
         <span  v-show="!btnloading"> {{$t('submit')}} </span>
          <Spinner v-show="btnloading" />
        </button>
      </div>
    </div>
  </div>
</div> 
 
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "addCoins",
  props: ["showmodal", 'preDefineAmount', 'returnUrl'],

  mounted() {
    this.getMyProfileDetails()
      if(this.showmodal){
       this.viewModal = true;
      }else{
        this.viewModal = false;
      }

  },
  data() {
    return {
      authUser : this.$store.state.authUser,
      valiDationMsg :'',
      postObj : {
        paymentGateway : "CASHFREE", //"STRIPE",
        amount: this.preDefineAmount ? this.preDefineAmount : null,
        walletTypeId: "COIN",
        returnUrl: '',
        email: null,
        mobile: null
      },
      viewModal:false,
      btnloading :false,
      isFormValid :false,
    };
  },
  methods: {

    async getMyProfileDetails() {
      try {
        let url = `/users/v1/user/profile`;
        const data = await this.$axios.$get(url);
        let userDetails = data.payload;
        //console.log('header userDetails:', userDetails);
        this.postObj.email = userDetails.email
        this.postObj.mobile = this.remove91ToPhoneNumber(userDetails.mobile)
        
      } catch (error) {
        
        console.log(error);
      }
    },
  getReturnUrl(paymentGateway = 'CASHFREE') {
      let returnPath = (this.returnUrl) ? this.localePath(this.returnUrl) : this.localePath('/wallet/my-wallet')
      // let returnUrl = (paymentGateway === 'CASHFREE')? returnPath+'?order_id={order_id}&order_token={order_token}' : returnPath;
      let returnUrl = (paymentGateway === 'CASHFREE')? returnPath+'?order_id={order_id}' : returnPath;
      returnUrl = window.location.origin + returnUrl;
      return returnUrl;
  },
  hideModal(){
    this.viewModal = false
    this.$emit("closeModal", this.viewModal);
  },
  isNumber (evt:any) {
      evt = (evt) || window.event
      const charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    },
onChange(amount:number){
  console.log('amount',amount);
  if(amount){
      this.isFormValid = true;
  }else{
       this.isFormValid = false;
  }
},

async submitCoins(){
  this.valiDationMsg = ''
    this.btnloading = true;
     try {
        let postObj = this.postObj
        const url = `/wallet/v1/wallet/recharge/register`;
        postObj.returnUrl = this.getReturnUrl(this.postObj.paymentGateway);
        const data = await this.$axios.$post(url,postObj);
        console.log("Data in response", data);
        if (data.success) {
          this.logEvent_gintaa_wallet_recharge_initiated()
          
          this.hideModal();

          const orderId = data.payload.orderId;
          const amount = data.payload.amount;
          data.payload.paymentGateway = this.postObj.paymentGateway;
          if(!data.payload.returnUrl || data.payload.returnUrl === undefined ) {
            data.payload.returnUrl = postObj.returnUrl;
          }
          this.$router.push({ path: '/payment/'+orderId, query: data.payload })
          console.log("orderId,amount",orderId,amount)
          this.postObj.amount = null
          } else {
            console.log("------------------",data.payload)
          // this.showAllConv = false;
          }

          this.btnloading = false;
        } catch (error:any) {
         console.log(error.response.data)
         this.valiDationMsg = error.response.data.message
        this.btnloading = false;
      }

    },

    async logEvent_gintaa_wallet_recharge_initiated() {
      try {
                
        const analyticsData = {
          channel_id: 'WEB',
          user_id: this.authUser.uid, 
          number_of_coins: this.postObj.amount
        };
        console.log(analyticsData)
        await this.$fire.analytics.logEvent('gintaa_wallet_recharge_initiated', analyticsData) 
       // console.log('Gintaa analytics event log successfully');     
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },

    remove91ToPhoneNumber(phone: any) {
      console.log("remove91ToPhoneNumber",phone)
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



