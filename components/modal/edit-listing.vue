<template>
   <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
         <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[800px] sm:p-6">
               <div class="">
                  <h3 class="mb-5 font-medium text-[18px] text-gray-500">{{  $t('editListingText') }}</h3>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-0 md:gap-10">
                     <div class="relative z-0 w-full mb-8">
                        <input
                           type="number"
                           name="unitOfferValuation"
                           @input = "handleChange"
                           @keydown="onlyNumber($event)"
                           autocomplete="off"
                           placeholder=" "
                           v-model="product.unitOfferValuation"
                           required
                           step="any"
                           class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                           />
                        
                        <label for="unitOfferValuation" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_ProductPrice')}} (&#x20B9;)</label>
                     
                     <!-- <p class="text-xs font-normal text-gray-600 pt-2" v-if="product.unitOfferValuation === null">&#x20B9; {{$t('cl_1isequivalentto1gintaacoin')}}</p> -->
                       
                       <!-- <p class="text-xs font-normal text-gray-600 pt-2" v-if="product.unitOfferValuation && product.unitOfferValuation > 0">&#x20B9; {{product.unitOfferValuation}} = {{product.unitOfferValuation}} gintaa coins</p> -->
                       <div class="text-xs text-red-600 absolute" v-if="!isMrpValidated">{{$t('cl_mrpValidated_Message')}} <span class="pl-1 text-gray-900">({{productDetails.price}})</span></div>
                     </div>
                     <div class="relative z-0 w-full mb-8">
                        <input
                           type="number"
                           @input = "handleChange"
                           name="quantity"
                           @keydown="onlyNumber($event)"
                           v-model="product.quantity"
                           autocomplete="off"
                           value=1
                           placeholder=" "
                           required
                           step="any"
                           class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                           />
                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_Quantity')}}</label>
                     </div>
                     <div class="relative z-0 w-full mb-8 pl-[55px] mobile-addnums">
                     <div class="absolute pb-2 font-normal  border-b border-gray-200 text-sm text-gray-600 left-0 -top-[12px] pr-3">
                        <span class="block text-[10px] text-gray-400 pb-1">Code</span> +91
                     </div>
                     <div class="relative z-0 w-full mobile-addnum">
                        <input type="text" name="mobile"
                         @input = "handleChange"
                         @keydown="isNumber($event)" 
                         autocomplete="off" placeholder=" " required 
                           v-model="product.mobile"  maxlength="10" 
                           class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_Mobile')}}</label>
                   
                   <p class="text-xs text-red-600 pt-2 ml-[-55px]" v-if="mobileValidation">{{$t('cl_invalidMobile')}}</p>
                   </div>
                     <!-- <p class="text-xs text-red-600 pt-2" v-if="mobileReqValidation">Mobile Number Required</p> -->
                     <!-- <p class="text-xs text-red-600 pt-2 ml-[-55px]" v-if="mobileValidation">{{$t('cl_invalidMobile')}}</p>
                        -->
                  </div>
                     
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-0 md:gap-10 mt-3">
                     <div v-if="productDetails.itemCondition !== 'New'"  class="relative z-0 w-full mb-8">
                        <input
                           type="number"
                           name="age"
                           @keydown="onlyNumber($event)"
                           placeholder=" "
                           @input = "handleChange"
                           required
                           v-model="product.productAge"
                           autocomplete="off"
                           class="proAge pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                           />
                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_ProductAge')}}
                        </label>
                     </div>
                  </div>
                  

                  <div class="shipping-setion ">
                     <div class="accordion accordion-flush">
                        <div class="accordion-item border-t-0 border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                           <h2 class="accordion-header  text-[15px] text-gray-500 font-medium border-b border-gray-200 pb-4 mb-1" >
                              
                              <span> {{$t('shipPaymentOptions')}}  </span>
                             
                           </h2>
                           <div 
                              aria-labelledby="flush-headingOne1">
                              <div class="accordion-body py-4  text-xsb text-gray-500">
                                 <div class="flex gap-x-10">
                                    <div class="basis-2/6" >
                                       <div class="relative z-0 w-full mb-4">
                                          <select
                                           @change="handleChange" 
                                             name="ShippingType"
                                             v-model="product.freeShippingType"
                                             placeholder="Select"
                                             class="
                                             
                                             text-gray-600
                                             block
                                             w-full
                                             mt-0
                                             bg-transparent
                                             border-0 border-b
                                             appearance-none
                                             focus:outline-none focus:ring-0 focus:border-firoza
                                             border-gray-200
                                             text-sm p-2
                                             "
                                             >
                                             <!-- <option value="Select Shipping" >{{$t('selectshippingoptions')}}</option> -->
                                             <!-- <option disabled value="">Please Select Shipping Type</option> -->
                                             <option    v-for="(item,i) in shippingType" :key="i" :value="item.value" >{{item.shippingtype}}</option>
                                          </select>
                                          <span class="absolute right-0 top-[15px] -z-50">
                                             <svg
                                                width="15"
                                                height="9"
                                                viewBox="0 0 15 9"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <path
                                                   d="M0.75 1.25L7.5 8L14.25 1.25"
                                                   stroke="#9EA5AA"
                                                   stroke-linecap="round"
                                                   stroke-linejoin="round"
                                                   />
                                             </svg>
                                          </span>
                                       </div>
                                    </div>
                                    <div v-if="showfreeShippingLocation" class="flex basis-4/6">
                                       <div class="relative z-0 w-full mb-4">
                                          <input
                                             type="text"
                                              @input = "handleChange"
                                             v-model = "product.freeShippingLocation"
                                             name="freeShippingLocation"
                                             placeholder=" "
                                             autocomplete="off"
                                             class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                                             />
                                          <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('enter_Location')}}</label>
                                          <p class="text-xs text-red-600" v-if="!isLoactionTextValidated">{{$t('cl_checkLocation_Message')}}</p>
                                          <span class="text-sm text-red hidden" id="error">Location is required</span>
                                          <div class="text-xs text-gray-400 pt-3">{{$t('locationComma')}}</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="form-check flex items-center">
                                    <input v-model="product.cod" class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="cod">
                                    <label class="form-check-label inline-block text-gray-500 text-sm pt-1" for="cod">
                                    {{$t('codAvailable')}}
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button :class="disableBtn ? 'opacity-50' : 'opacity-100'" :disabled='disableBtn' @click="update()" class="relative inline-flex w-full justify-center rounded-md border border-transparent bg-green px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green focus:outline-none
                   focus:ring-2 focus:ring-green focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm min-w-[160px]">
                   <span v-show="!loading"> Update </span>
            <Spinner v-show="loading" class="absolute" />
                   </button>
                  <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm min-w-[160px]" @click="cancelEditing('false')">Cancel</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script lang="ts">
   import Vue from "vue";
   
   export default Vue.extend({
     name: "edit-listing",
     props: ["productDetails"],
     data() {
       return {
         isLoactionTextValidated : true,
         loading:false,
         mobileValidation:false,
         isMrpValidated:true,
         btnTitle: "",
         url: "",
       disableBtn : false ,
       shippingType: [
           {'value': null,'selected' :false , 'shippingtype': this.$t('selectShippingOption')},
           {'value': 'WITHIN_CITY','selected' :false , 'shippingtype': this.$t('freeShippingAcrossCity')},
           {'value': 'WITHIN_INDIA', 'selected' :false , 'shippingtype': this.$t('freeShippingAcrossIndia')}
           
         ],
         showfreeShippingLocation:false,
         storeFreeShippingLiction:'',
         product:{
          offerId:null,
          quantity:null,
          mobile:null,
          unitOfferValuation:null,
          productAge:null,
          cod : false,
          freeShippingLocation : "",
          freeShippingType: "",
          freeShipping:false
         }
       };
     },
   
       mounted() {
         console.log("productDetails",this.productDetails)
       this.product.offerId = this.productDetails.offerId
       this.product.quantity = this.productDetails.quantity
       this.product.mobile   = this.productDetails.mobile
       this.product.unitOfferValuation    = this.productDetails.unitOfferValuation
       this.product.productAge      = this.productDetails.productAge ? this.productDetails.productAge : 1
       this.product.cod      = this.productDetails.cod
       this.product.freeShippingLocation             = this.productDetails.freeShippingLocation
       this.product.freeShippingType                 = this.productDetails.freeShippingType
       this.product.freeShipping   =  this.productDetails.freeShipping

       this.storeFreeShippingLiction =  this.productDetails.freeShippingLocation
       
       if(this.productDetails && this.productDetails.freeShippingType === 'WITHIN_CITY'){
        this.showfreeShippingLocation = true
       }else{
        this.showfreeShippingLocation = false
        this.product.freeShippingLocation = 'Demo'
       }

     },
     methods: {
       cancelHide() {
         this.closeModal();
       },
       closeModal() {
         let modal = document.getElementById("hide-modals")!;
         modal.style.display = "none";
         this.$parent.$emit("closeModal", "closeModalInListingDetails");
       },
       handleChange(evt:any){
        let keyName = evt.target.name;
        let value = evt.target.value;

       

       if (evt.target.name === "ShippingType") {
    if (evt.target.value === "WITHIN_CITY") {
        this.isLoactionTextValidated = true
        this.showfreeShippingLocation = true
        this.product.freeShippingLocation = this.storeFreeShippingLiction

        if(this.product.freeShippingLocation && this.product.freeShippingLocation.length > 0){
            this.checkValidation()
        }else{
         this.disableBtn = true
        }
        
       //this.checkValidation()
        
    } else {
        this.isLoactionTextValidated = true
        this.showfreeShippingLocation = false
        this.product.freeShippingLocation = 'Demo'
        this.checkValidation()
    }
} else if (evt.target.name === "unitOfferValuation") {
    if (evt.target.value) {
        if (evt.target.value < 1) {
            this.product.unitOfferValuation = null;
            this.disableBtn = true
        } else if (evt.target.value > 999999) {
            let uValue = evt.target.value.slice(0, -1);
            this.product.unitOfferValuation = uValue;
            this.checkValidation()
        }else if (evt.target.value > 0){
            this.product.unitOfferValuation = evt.target.value
          //  console.log(this.product.unitOfferValuation ,this.productDetails.price)
            if(this.product.unitOfferValuation){
               if(this.productDetails.price && this.product.unitOfferValuation > this.productDetails.price ){
                  this.disableBtn = true
                  this.isMrpValidated = false
               }else{
                  this.checkValidation()
                  this.isMrpValidated = true
               }
            }
            //this.checkValidation()
        }
    } else {
        this.disableBtn = true
        //   this.showfreeShippingLocation = false
        //   this.product.freeShippingLocation = 'Demo'  
    }
} else if (evt.target.name === "quantity") {
    if (evt.target.value < 1) {
        this.product.quantity = null;
        this.disableBtn = true
    } else if (evt.target.value > 999999) {
        let quant = evt.target.value.slice(0, -1);
        this.product.quantity = quant;

    }else if(evt.target.value > 0){
     this.product.quantity = evt.target.value;
     this.checkValidation()
    }else{
      this.disableBtn = true   
    }
} else if (evt.target.name === "age") {
    if (evt.target.value < 1) {
        evt.target.value = '';
        this.product.productAge = null;
        this.disableBtn = true

    } else if (evt.target.value > 999999) {
        let pAge = evt.target.value.slice(0, -1);
        this.product.productAge = pAge;

    } else if (evt.target.value > 0) {
      this.product.productAge = evt.target.value
      this.checkValidation()
    }else{
        this.disableBtn = true
    }
} else if (evt.target.name === "mobile") {
    if (evt.target.value.length === 0) {
        this.disableBtn = true
        // this.mobileValidation = false
    } else if (evt.target.value.length > 0) {
        if (!this.$isValidMobile(evt.target.value)) {
           this.disableBtn = true
            this.mobileValidation = true
            // this.disableBtn = true;

        } else {
          this.mobileValidation = false
            this.checkValidation()
            // this.mobileValidation = false

            //  this.disableBtn = false
        }
    }
} else if (evt.target.name === "freeShippingLocation") {
   
    if (evt.target.value.length > 0) {
   
      if(this.$isPhoneNoEsixts(evt.target.value) || this.$isemailEsixts(evt.target.value) || this.$isurlEsixts(evt.target.value)){
         this.isLoactionTextValidated = false
         this.disableBtn = true
      }else{
         this.isLoactionTextValidated = true
         this.disableBtn = false
         this.checkValidation()
      }
     
    } else {
     this.isLoactionTextValidated = true
     this.disableBtn = true
    }

}

        //WITHIN_CITY
       },

     cancelEditing(cancelType:any){
     this.$emit("cancelEdit", cancelType);
     },

     onlyNumber(evt:any) {
            let value = evt.target.value;
            if (evt.key === '.') {
                evt.preventDefault();
            } else if (evt.key === '-') {
                evt.preventDefault();
            } else if (evt.key === '+') {
                evt.preventDefault();
            } else if (evt.key === 'e' || evt.key === 'E') {
                evt.preventDefault();
            }
        },

     isNumber(evt:any) {
            evt = evt ? evt : window.event;
            var charCode = evt.which ? evt.which : evt.keyCode;
            if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105) &&
                charCode !== 46
            ) {
                evt.preventDefault();
            } else if (evt.key === '0' && (evt.target.value == "" || evt.target.value == null)) {
                evt.preventDefault();
            } else if ((evt.key >= '!' && evt.key <= ')') || evt.key === '@' || evt.key === '^' || evt.key === '*') {
                evt.preventDefault();
            } else {
                return true;
            }
        },
      
    checkValidation(){
   
     
    if(this.product.unitOfferValuation && this.product.quantity && this.product.productAge && this.product.mobile && this.product.freeShippingLocation){
        this.disableBtn = false
       }
       },
       async update() {
         this.loading = true

         if(this.product.freeShippingType === 'WITHIN_INDIA'){
            this.product.freeShippingLocation = ''
         }

          if(this.product.freeShippingType === null){
            this.product.freeShippingLocation = ''
         }
        
         try {
           this.loading = true;
           const url =  'offers/v1/offers/item'
           const data = await this.$axios.$put(url,this.product);
           if (data.success) {
       this.productDetails.quantity = data.payload.quantity
       this.productDetails.mobile   = data.payload.mobile
       this.productDetails.unitOfferValuation    = data.payload.unitOfferValuation
       this.productDetails.productAge            = data.payload.productAge
       this.productDetails.cod                   = data.payload.cod
       this.productDetails.freeShippingLocation  = data.payload.freeShippingLocation
       this.productDetails.freeShippingType      = data.payload.freeShippingType
       this.productDetails.freeShipping  =  data.payload.freeShipping
        this.loading = false

       this.$emit("editSuccess", this.productDetails);
           }
          // console.log("data", data);

       this.loading = false
           //this.productDetails
         } catch (error) {
          
         }
       },
     },
   });
</script>
<style scoped>
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
 
 input::-webkit-outer-spin-button,
 input::-webkit-inner-spin-button {
   -webkit-appearance: none;
   margin: 0;
 }
 
 input.proAge::-webkit-outer-spin-button,
 input.proAge::-webkit-inner-spin-button {
     -webkit-appearance: inner-spin-button !important;
     opacity: 1
 }
 
 
 

 </style>