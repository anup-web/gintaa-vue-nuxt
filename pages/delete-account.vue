<template>
    <div class="bg-white sm:bg-white pt-[110px] lg:pt-[90px]">
         <!--//////////header///////////-->
        <Header />
        <!--////////Breadcrumb//////////-->
        <div class="md:max-w-[600px] lg:max-w-[800px] 2xl:max-w-[800px] mx-auto px-3">
             <breadcumb />
        </div>

        <div class="single-product-block pt-6 pb-10">
            <div class="md:max-w-[600px] lg:max-w-[800px] 2xl:max-w-[800px] mx-auto">
                  <div class="bg-white px-3 py-4 relative min-h-[400px]">
                    <div class="border-b border-gray-200 pb-3 mb-4 text-sm text-[#4a4a4a]"><a :href="localePath('/legal/privacy-policy')">Privacy Policy</a></div>
              <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingOne">
                            <button class="accordion-button relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                <span>Delete you account </span>
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse border-0 collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">
                            </div>
                            </div>
                        </div>
                        </div>
                    <!-- <div class="border-b border-gray-200 pb-3 mb-4"><a :href="localePath('/legal/privacy-policy')">Privacy Policy</a></div> -->
                   

                  </div>
            </div>
        </div>
        <Footer /> 
        
    <!-- Deactivate modal start  -->

<div v-if="acntDeltConfirmation" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true"> 
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div class="fixed z-10 inset-0 overflow-y-auto">
    <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">      
      <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">            
            <div class="mt-3 text-center sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Delete your Account</h3>
              <div class="mt-2">
                <p class="text-base text-firoza">We will miss you.</p>
              </div>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Are you sure you want to delete this account?</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button  @click="deleteMyAccount()"  type="button" :class="[!loading ? '' : 'opacity-50', 'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm']" 
           class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"><span v-show="!loading">{{$t('submit')}} </span>
            <Spinner v-show="loading" /></button>
          <button  @click="cancelDeletingAcnt()"  type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div> 
 
  <!-- Deactivate modal end  -->

    </div>
</template>

<script>
import Vue from 'vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
export default Vue.extend({
  name: 'deleteAccount',
  components:{VueToast},
  data () {
    return {
      acntDeltConfirmation: false,
      deleteReason:'',
      loading: false,
      fbloading: false,
      provider: null,
      socialError: null,
      credential: null,
      anonymousUser: null,
      reasonList : [
        {id: 1 ,reasonName: this.$t('deleteUserReason.deleteAccountReason1'),value: this.$t('deleteUserReason.deleteAccountReason1')},
        {id: 2 ,reasonName: this.$t('deleteUserReason.deleteAccountReason2'),value: this.$t('deleteUserReason.deleteAccountReason2')},
        {id: 3 ,reasonName: this.$t('deleteUserReason.deleteAccountReason3'),value: this.$t('deleteUserReason.deleteAccountReason3')},
        {id: 4 ,reasonName: this.$t('deleteUserReason.deleteAccountReason4'),value: this.$t('deleteUserReason.deleteAccountReason4')},
        {id: 5 ,reasonName: this.$t('deleteUserReason.deleteAccountReason5'),value: this.$t('deleteUserReason.deleteAccountReason5')},
        {id: 6 ,reasonName: this.$t('deleteUserReason.deleteAccountReason6'),value: this.$t('deleteUserReason.deleteAccountReason6')},
        {id: 7 ,reasonName: this.$t('deleteUserReason.deleteAccountReason7'),value: this.$t('deleteUserReason.deleteAccountReason7')}
      ]
    }
  },

  methods:{
    async deleteMyAccount(){
      this.loading = true
      const requestBody = this.deleteReason
     try {
            let url = `/users/v1/user/deactivate`;
           const deleteRes = await this.$axios.$post(url, requestBody);
           console.log("success",deleteRes.success)
           Vue.$toast.open(deleteRes.message);
           if(deleteRes.success){
            this.logout()
           }
            this.loading = false;
          } catch (error) {
            this.loading = false;
           // console.log(error.response.data);
          }

    },
    openDltAcntpopup(){
      this.acntDeltConfirmation = true
    },
    cancelDeletingAcnt(){
    this.acntDeltConfirmation = false
    },

     logout () {
      //this.calluserActivity()
       if (window.localStorage.getItem("setPath") != null) {
           window.localStorage.removeItem("setPath");
      }
      this.$fire.auth.signOut()
      if (this.$route.path === '/' || this.$route.path === '') {
        window.location.reload(true)
      } else {
        this.$router.replace({ path: this.localePath('/') })
      }
    },
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
.accordion-button:not(.collapsed) {
    color: #4a4a4a;
    background-color: #fff;
    box-shadow: inset 0 -1px 0 #e5e7eb;
    font-size: 14px;
}
</style>