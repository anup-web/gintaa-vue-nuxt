<template>
  <div class="bg-white sm:bg-white pt-[110px] lg:pt-[90px]">
       <!--//////////header///////////-->
      <Header />
      <!--////////Breadcrumb//////////-->
      <div class="md:max-w-[600px] lg:max-w-[800px] 2xl:max-w-[800px] mx-auto px-3">
           <breadcumb :breadcrumb="breadcrumb" />
      </div>

      <div class="single-product-block pt-6 pb-10 min-h-[450px]">
          <div class="md:max-w-[600px] lg:max-w-[800px] 2xl:max-w-[800px] mx-auto">
                <div class="bg-white px-3 py-4 relative">
                  <div class="border-b border-gray-200 pb-3 mb-4 text-sm text-[#4a4a4a]">
                    <a :href="localePath('/legal/privacy-policy')"> {{$t('privacyPolicy')}} </a></div>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                      <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                          <h2 class="accordion-header mb-0" id="flush-headingOne">
                          <button 
                          
                            class="accordion-button relative flex items-center w-full py-4 
                          text-sm text-gray-700 text-left bg-white border-0 rounded-none transition collapse
                          focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                              aria-expanded="false" aria-controls="flush-collapseOne">
                              <span> {{$t('delete_my_account')}} </span>
                          </button>
                          <!-- @click="openDltAcntpopup()" -->
                          </h2>
                         
                           <div id="flush-collapseOne" class="accordion-collapse border-0 collapse"
                          aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample1">
                          <div class="accordion-body py-4  text-xsb text-gray-500">
                             <div> 
                    
                          <div class="w-full flex flex-col">
                           <div class="text-base text-gray-900 font-medium">{{$t('delete_my_account')}}</div>
                           
                           <ul class="list-disc ml-5 pt-3">
                              <li class="mb-3 text-gray-500 text-sm">{{$t('delete_acnt_reslt1')}} </li>
                              <li class="mb-3 text-gray-500 text-sm">{{$t('delete_acnt_reslt2')}}</li> 
                              <li class="mb-3 text-gray-500 text-sm">{{$t('delete_acnt_reslt3')}}</li>
                              <li class="mb-3 text-gray-500 text-sm">{{$t('delete_acnt_reslt4')}}</li>
                              <li class="mb-3 text-gray-500 text-sm">{{$t('delete_acnt_reslt5')}}</li>
                              <li class="mb-3 text-gray-500 text-sm">{{$t('delete_acnt_reslt6')}}</li>
                          </ul>

                           <div class="text-base text-gray-900 pt-5 font-medium"> {{$t('why_acnt_dlt')}}</div>
                           <div class="flex  mt-3">
                            <div class="w-full lg:w-[50%]">
                              <select v-model="deleteReason" class="form-select appearance-none
                                block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat
                                border-0 border-b-2 transition ease-in-out m-0
                                focus:text-gray-700 focus:bg-white focus:border-transparent focus:outline-none" aria-label="Default select example">
                                  <option value = ''> {{$t('choose_reason')}} </option>
                                  <option  v-for="item of reasonList" :key="item.id" :value="item.value">{{ item.reasonName}}</option>
                              </select>
                            </div>
                          </div>
                     </div>
                     <div  class="flex flex-row gap-3 md:gap-4 justify-start mt-8">                        
                          <button    @click="openDltAcntpopup"  class="flex items-center justify-center border-gray-400 border text-gray-400 py-2 px-8 h-10 rounded text-sm md:text-base min-w-[80px] md:min-w-[120px]"><span >  {{$t('delete_my_account')}} </span></button>
                    </div> 
                     
                     <div class="w-full flex flex-col mt-8">
                           <div class="text-base text-gray-900 font-medium"> {{$t('how_to_reactive')}}</div>
                           <div class="text-sm text-gray-500 pt-3"> {{$t('reactive_process_1')}}</div>
                           <ul class="list-disc ml-5 pt-3">
                              <li class="mb-3 text-gray-500 text-sm">{{$t('reactive_process_2')}}</li>
                              <li class="mb-3 text-gray-500 text-sm">{{$t('reactive_process_3')}}</li> 
                              <li class="mb-3 text-gray-500 text-sm">{{$t('reactive_process_4')}}</li>
                              
                          </ul>
                          <div class="text-sm text-gray-500 pt-3 font-medium"> {{$t('reactive_process_5')}}</div>
                           
                     </div>
                   
                    </div>
                      </div>
                      </div> 

                      <h2 class="accordion-header mb-0" >
                          <button 
                            @click="openBlockUserListPopup()"
                            class=" relative flex items-center w-full py-4 
                          text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                          focus:outline-none" type="button" >
                              <span> Block User List </span>
                          </button>
                          </h2>
                      
                      </div>
                      </div>
                 

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
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title"> {{$t('delete_my_account')}} </h3>
            <div class="mt-2">
              <p class="text-base text-firoza"> </p>
            </div>
            <div class="mt-2">
              <p class="text-sm text-gray-500"> {{$t('sure_confirmation')}} </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button  @click="deleteMyAccount()"  type="button" :class="[!loading ? '' : 'opacity-50', 'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm']" 
         class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"><span v-show="!loading">{{$t('submit')}} </span>
          <Spinner v-show="loading" /></button>
        <button  @click="cancelDeletingAcnt()"  type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{{$t('cancel')}}</button>
      </div>
    </div>
  </div>
</div>
</div> 

<!-- Deactivate modal end  -->

  <BlockUserList 
    v-if="showBlockUserList"
    @closeBlockUserList="closeBlockUserList"
    />

  </div>
</template>

<script>
import Vue from 'vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import BlockUserList from '~/components/modal/block-user-list.vue';
export default Vue.extend({
middleware: "authenticated",
name: 'dataPrivacy',
components:{VueToast},
data () {

  return {
      breadcrumb: [
      {
        name: this.$t("privacyPolicy"),
      },
    ],
    acntDeltConfirmation: false,
    deleteReason:'',
    loading: false,
    reasonList : [
      {id: 1 ,reasonName: this.$t('deleteUserReason.deleteAccountReason1'),value: this.$t('deleteUserReason.deleteAccountReason1')},
      {id: 2 ,reasonName: this.$t('deleteUserReason.deleteAccountReason2'),value: this.$t('deleteUserReason.deleteAccountReason2')},
      {id: 3 ,reasonName: this.$t('deleteUserReason.deleteAccountReason3'),value: this.$t('deleteUserReason.deleteAccountReason3')},
      {id: 4 ,reasonName: this.$t('deleteUserReason.deleteAccountReason4'),value: this.$t('deleteUserReason.deleteAccountReason4')},
      {id: 5 ,reasonName: this.$t('deleteUserReason.deleteAccountReason5'),value: this.$t('deleteUserReason.deleteAccountReason5')},
      {id: 6 ,reasonName: this.$t('deleteUserReason.deleteAccountReason6'),value: this.$t('deleteUserReason.deleteAccountReason6')},
      {id: 7 ,reasonName: this.$t('deleteUserReason.deleteAccountReason7'),value: this.$t('deleteUserReason.deleteAccountReason7')}
    ],
    showBlockUserList: false
  }
},

methods:{
  async deleteMyAccount(){
    this.loading = true
  //  if()
    const requestBody = this.deleteReason ? this.deleteReason : '{}'
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
  openBlockUserListPopup(){
    this.showBlockUserList = true
  },
  closeBlockUserList(){
    this.showBlockUserList = false
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
.accordion-button:not(.collapsed) {
  color: #4a4a4a;
  background-color: #fff;
  box-shadow: inset 0 -1px 0 #e5e7eb;
  font-size: 14px;
}
</style>