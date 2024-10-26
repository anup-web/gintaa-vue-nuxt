<template>
     <div class="basis-full border-0 sm:border-0 sm:basis-full md:border-0 md:basis-full lg:basis-1/2 lg:border-l border-gray-200">
          <div class="w-full pl-0 pr-0 sm:pl-6 sm:pr-6 md:pl-6 md:pr-6 lg:pr-0">
               <div class="w-full bg-white px-0 sm:px-0 md:px-6 py-4 rounded-md relative">
                   
                    <GintaaFoodAtomsGeneralLogout/>
                    <div class="text-base text-gray-700 font-medium text-center mb-6"> {{ $t('registerYourRestaurant') }}</div>
                    <div class="flex flex-col w-full mx-auto relative overflow-x-visible px-4 sm:px-8 md:px-8">
                         <div class="w-full mb-12 relative">
                              <ol role="list" class="flex items-center w-full relative status-offer-mob-desk">
                                   <li class="relative flex items-center w-full">
                                        <div class="flex items-center text-white relative group">
                                             <div
                                                  class="flex items-center justify-center rounded transition duration-500 ease-in-out w-8 h-8 py-3 bg-[#1FBE58]">
                                                  <span class="hidden">1</span>
                                                  <svg x-description="Heroicon name: solid/check"
                                                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                       fill="currentColor" aria-hidden="true" class="w-5 h-5 text-white">
                                                       <path fill-rule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clip-rule="evenodd"></path>
                                                  </svg>
                                             </div>
                                             <div
                                                  class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-[11px] sm:text-xs md:text-xs capitalize text-gray-500">
                                                  {{ $t('contactNumber') }}</div>
                                        </div>
                                        <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-green">
                                        </div>
                                   </li>

                                   <li class="relative flex items-center w-full">
                                        <div class="flex items-center text-white relative group">
                                             <div
                                                  class="group relative w-8 h-8 flex items-center justify-center bg-firoza rounded">
                                                  2
                                             </div>

                                             <div
                                                  class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-[11px] sm:text-xs md:text-xs capitalize text-firoza">
                                                  {{ $t('restaurantInformation') }}</div>
                                        </div>
                                        <div
                                             class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-200">
                                        </div>
                                   </li>

                                   <li class="relative flex items-center">
                                        <div class="flex items-center text-gray-500 relative group">
                                             <div
                                                  class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded hover:border-gray-400">
                                                  3
                                             </div>

                                             <div
                                                  class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-[11px] sm:text-xs md:text-xs capitalize text-gray-500">
                                                   {{ $t('uploadPhotoDocuments') }}</div>
                                        </div>
                                   </li>
                              </ol>
                         </div>
                    </div>
                    <div class="w-full flex flex-col mt-6">
                         <div class="text-sm text-gray-700 font-medium mb-4">{{ $t('restaurantDetails') }}</div>

                         <div class="relative z-0 w-full mb-6">
                              <input type="text" @input="handleChange" v-model="restaurantInfo.name" name="name"
                                   placeholder=" " autocomplete="off" minlength="1" maxlength="300"
                                   class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                              <label for="name"
                                   class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('restaurantName') }}</label>

                              <div v-if="basciInfoValidation.errorResturantName"
                                   class="absolute w-full flex items-center justify-between ">
                                   <div class="text-xs text-red-400 mt-px relative">{{ basciInfoValidation.errorResturantName
                                   }}</div>
                              </div>
                         </div>
                         <div class="relative z-0 w-full mb-6">
                              <input type="text" @input="handleChange" v-model="restaurantInfo.ownerName" name="ownerName"
                                   placeholder=" " autocomplete="off" minlength="1" maxlength="300"
                                   class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                              <label for="name"
                                   class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('restaurantOwnerName') }}</label>
                              <div v-if="basciInfoValidation.errorResturnatOwnername"
                                   class="absolute w-full flex items-center justify-between ">
                                   <div class="text-xs text-red-400 mt-px relative">{{
                                        basciInfoValidation.errorResturnatOwnername }}</div>
                              </div>
                         </div>
                         <!-- <div  class="relative z-0 w-full mb-6">
                              <input  type="text" name="name" placeholder=" " required="required" autocomplete="off" minlength="1" maxlength="300" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                               <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Restaurant Address</label> 
                               <div  class="absolute w-full flex items-center justify-between hidden">
                                   <div  class="text-xs text-red-400 mt-px relative">Enter a valid address</div>             
                              </div>                              
                         </div> -->

                         <div class="flex items-center justify-between mb-4">
                              <div class="text-sm text-gray-700 font-medium">{{ $t('restaurantAddress') }}</div>
                              <!-- <a
                                   class="flex justify-center items-center border border-amber-500 rounded cursor-pointer w-7 h-7 cursor-pointer"><svg
                                        width="16" height="16" viewBox="0 0 27 27" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                             d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                                             fill="rgb(245 158 11)"></path>
                                   </svg></a> -->

                         </div>
                         <button @click="addAddress()" type="button" class="border border-firoza flex justify-center items-center bg-transparent w-[130px]
                                                   py-2 px-2 rounded text-firoza font-normal text-xs h-[30px] mb-4">
                              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                                   <path fill-rule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clip-rule="evenodd"></path>
                              </svg>
                              <span>{{ $t('addAddressBtn') }} </span>
                         </button>

                         <div class="text-xs text-gray-600 mb-6">{{ processDisplayAddress(restaurantInfo.location) }}</div>

                         <div class="flex items-center relative pl-4 mb-4">
                              <input id="f-Refurbished" name="filter" value="white" type="checkbox"
                                   @click="checkandUncheck()"
                                   class="h-4 w-4 border-gray-300 rounded text-firoza focus:ring-firoza absolute z-10 left-0 top-0"
                                   :checked="isTermsConditionChecked">
                              <label for="f-Refurbished" class="ml-2 text-xs text-gray-600 cursor-pointer"> {{ $t('byContinuingAgree') }} <a :href="localePath('/legal/gintaa-food/terms-condition')" target="_blank" class="text-firoza lowercase">{{ $t('termsConditions') }}</a>
                              </label>
                         </div>
                         <div class="w-full flex justify-between items-center">
                              <!-- <a href="/gintaa-food/vendor/register-restaurant/step-1"
                                   class=" bg-transparent border border-firoza text-firoza font-bold py-1 px-3 h-11 rounded w-full text-base flex items-center justify-center mr-10">
                                   <svg width="20" height="13" viewBox="0 0 28 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                             d="M27.125 8.99996C27.125 8.75132 27.0262 8.51287 26.8504 8.33705C26.6746 8.16124 26.4361 8.06246 26.1875 8.06246H4.07562L9.97625 2.16371C10.1523 1.98768 10.2512 1.74892 10.2512 1.49996C10.2512 1.25101 10.1523 1.01225 9.97625 0.836213C9.80021 0.660176 9.56145 0.561279 9.3125 0.561279C9.06355 0.561279 8.82479 0.660176 8.64875 0.836213L1.14875 8.33621C1.06144 8.4233 0.992177 8.52675 0.944914 8.64065C0.897652 8.75455 0.873325 8.87665 0.873325 8.99996C0.873325 9.12328 0.897652 9.24538 0.944914 9.35928C0.992177 9.47317 1.06144 9.57663 1.14875 9.66371L8.64875 17.1637C8.82479 17.3398 9.06355 17.4386 9.3125 17.4386C9.56145 17.4386 9.80021 17.3398 9.97625 17.1637C10.1523 16.9877 10.2512 16.7489 10.2512 16.5C10.2512 16.251 10.1523 16.0123 9.97625 15.8362L4.07562 9.93746H26.1875C26.4361 9.93746 26.6746 9.83869 26.8504 9.66288C27.0262 9.48706 27.125 9.2486 27.125 8.99996V8.99996Z"
                                             fill="#48CEF3" />
                                   </svg>
                                   <span class="pl-1">Back</span>
                              </a> -->
                              <a :disabled="!basicFormValid"
                                   :class="!basicFormValid ? 'opacity-50' : 'opacity-100 cursor-pointer'"
                                   @click="basicFormValid ? updateResturantNameAndOwnerName() : false"
                                   class="bg-firoza text-white font-bold py-1 px-3 h-11 rounded w-full text-base flex items-center justify-center">
                                   <span v-if="!loading" class="pr-1">{{ $t('next') }}</span>
                                   <span class="pr-1">
                                        <Spinner v-show="loading" class="w-4" />
                                   </span>
                                   <svg width="22" height="22" viewBox="0 0 30 30" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                             d="M1.875 15C1.875 14.7513 1.97377 14.5129 2.14959 14.3371C2.3254 14.1612 2.56386 14.0625 2.8125 14.0625H24.9244L19.0238 8.16371C18.8477 7.98768 18.7488 7.74892 18.7488 7.49996C18.7488 7.25101 18.8477 7.01225 19.0238 6.83621C19.1998 6.66018 19.4385 6.56128 19.6875 6.56128C19.9365 6.56128 20.1752 6.66018 20.3512 6.83621L27.8512 14.3362C27.9386 14.4233 28.0078 14.5268 28.0551 14.6407C28.1023 14.7545 28.1267 14.8766 28.1267 15C28.1267 15.1233 28.1023 15.2454 28.0551 15.3593C28.0078 15.4732 27.9386 15.5766 27.8512 15.6637L20.3512 23.1637C20.1752 23.3398 19.9365 23.4386 19.6875 23.4386C19.4385 23.4386 19.1998 23.3398 19.0238 23.1637C18.8477 22.9877 18.7488 22.7489 18.7488 22.5C18.7488 22.251 18.8477 22.0122 19.0238 21.8362L24.9244 15.9375H2.8125C2.56386 15.9375 2.3254 15.8387 2.14959 15.6629C1.97377 15.4871 1.875 15.2486 1.875 15Z"
                                             fill="white" />
                                   </svg>
                              </a>
                         </div>
                    </div>

               </div>
               <GintaaFoodModalGMap v-if="showaddAddressModal" @closeMapModal="closeMapModal" @savedAddress="savedAddress" />
          </div>
     </div>
</template>
    
    
    
    
    
    
<script lang="ts">
import Vue from 'vue'
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import { mapState } from "vuex";
export default {
     name: 'ResbasicinfoStepTwo',
     components: {
          Cropper
     },
     data() {
          return {
               isTermsConditionChecked: true,
               showaddAddressModal: false,
               loading: false,
               showLoader: true,
               basicFormValid: false,
               basciInfoValidation: {
                    errorResturantName: '',
                    errorResturnatOwnername: ''
               },
               restaurantInfo: {
                    rid: null,
                    photoUrl: null,
                    fssaiNumber: null,
                    licenseNumber: null,
                    minOrderPrice: null,
                    gstNumber: null,
                    gstPercent: 5,
                    deliveryTime: null,
                    discountPercent: null,
                    deliveryCharge: null,
                    location: null,
                    name: null,
                    ownerName: null,
                    verificationStatus: null,
               },

          }
     },

     computed: {
          ...mapState({
               authUser: (state) => state.authUser,
          }),
     },
     mounted() {
          if (this.authUser && this.authUser.uid) {
               this.restaurantInfo.rid = this.authUser.uid
               this.getRestaurantDetails()
          }
     },
     methods: {

          checkandUncheck() {
               this.isTermsConditionChecked = !this.isTermsConditionChecked
               this.checkIsBasicInfoValidated()
          },

          async updateResturantNameAndOwnerName() {

               this.loading = true
               console.log('restaurantInfo:', this.restaurantInfo)


               let postObj = {
                    name: this.restaurantInfo.name,
                    ownerName: this.restaurantInfo.ownerName
               }


               // return 
               try {
                    const url = '/flisting/v1/restaurant'
                    const data = await this.$axios.$put(url, this.restaurantInfo);
                    //console.log('Update Restaurant info:', data)
                    if (data.success) {

                         Vue.$toast.success(data?.message);
                         this.updateUser()
                         this.$emit('setCurrentStep', 3);

                    } else {
                         Vue.$toast.error(data?.message);
                    }

                    this.loading = false



               } catch (error: any) {

                    Vue.$toast.error(error.response.data.message);
                    this.loading = false

               }

          },

          async updateUser() {
              
               const user = {
                    name: this.restaurantInfo.name
               };
               console.log("Update User call",user)
              // this.showLoader = true;
               let url = `/users/v1/user/profile`;
               try {
                    const data = await this.$axios.$put(url, user);
                    
                    this.showLoader = false;
               } catch (error) {
                    console.log(error);
                    this.showLoader = false;
               }
          },

          async getRestaurantDetails() {
               try {
                    const url = `/flisting/v1/restaurant/${this.restaurantInfo.rid}`
                    const data = await this.$axios.$get(url);
                    if (data && data.payload) {
                         console.log(" data.payload in index Page", data.payload)
                         const restaurantData = data.payload

                         console.log('restaurantData:', restaurantData);

                         this.workingIntervals = restaurantData.workingIntervals ? restaurantData.workingIntervals : []

                         if (restaurantData && restaurantData.photoUrl) {
                              this.restaurantInfo.photoUrl = restaurantData.photoUrl
                         }

                         this.restaurantInfo.fssaiNumber = restaurantData.fssaiNumber
                         this.restaurantInfo.gstNumber = restaurantData.gstNumber
                         this.restaurantInfo.gstPercent = restaurantData.gstPercent
                         this.restaurantInfo.minOrderPrice = restaurantData.minOrderPrice
                         this.restaurantInfo.status = restaurantData.status
                         this.restaurantInfo.name = restaurantData.name
                         this.restaurantInfo.phoneNumber = restaurantData.phoneNumber
                         this.restaurantInfo.email = restaurantData.email
                         this.restaurantInfo.location = restaurantData.location
                         this.restaurantInfo.deliveryCharge = restaurantData.deliveryCharge,
                              this.restaurantInfo.deliveryTime = restaurantData.deliveryTime,
                              this.restaurantInfo.discountPercent = restaurantData.discountPercent
                         this.restaurantInfo.licenseNumber = restaurantData.licenseNumber
                         this.restaurantInfo.ownerName = restaurantData.ownerName
                         this.restaurantInfo.verificationStatus = restaurantData.verificationStatus
                    }


                    // this.setTheCurrentStep()

                    this.showLoader = false
                    this.checkIsBasicInfoValidated()

               } catch (error) {
                    this.showLoader = false
                    console.log(error);
               }
          },

          // handleChange(evt) {
          //      let keyName = evt.target.name;

          // },


          logout() {
               // this.calluserActivity()
               if (window.localStorage.getItem("setPath") != null) {
                    window.localStorage.removeItem("setPath");
               }
               window.localStorage.removeItem("setGridActiveClass");
               window.localStorage.removeItem("setListActiveClass");

               this.$fire.auth.signOut()
               if (this.$route.path === '/' || this.$route.path === '') {
                    window.location.reload(true)
               } else {
                    this.$router.replace({ path: this.localePath('/') })
               }
          },

          addAddress() {
               this.showaddAddressModal = true
          },
          closeMapModal() {
               this.showaddAddressModal = false
          },


          uploadImage(event: any) {

               /// Reference to the DOM input element
               const { files } = event.target;
               // Ensure that you have a file before attempting to read it
               if (files && files[0]) {
                    // 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
                    if (this.image.src) {
                         URL.revokeObjectURL(this.image.src);
                    }
                    // 2. Create the blob link to the file to optimize performance:
                    const blob = URL.createObjectURL(files[0]);
                    console.log('File details', files[0]);
                    // 3. Update the image. The type will be derived from the extension and it can lead to an incorrect result:
                    this.image = {
                         src: blob,
                         type: files[0].type,
                         name: files[0].name
                    };
               }
          },



          processDisplayAddress(location: any) {
               let addressLine: string = ''
               if (location) {
                    if (location.addressLine) {
                         addressLine += location.addressLine + ', '
                    }
                    if (location.area) {
                         addressLine += location.area + ', '
                    }
                    if (location.city) {
                         addressLine += location.city + ', '
                    }
                    if (location.landmark) {
                         addressLine += location.landmark + ', '
                    }
                    if (location.state) {
                         addressLine += location.state + ', '
                    }
                    if (location.country) {
                         addressLine += location.country + ', '
                    }
                    if (location.zip) {
                         addressLine += location.zip
                    }

                    // addressLine = addressLine.trim()
               }
               return addressLine
          },
          savedAddress(location: any) {
               console.log("location:", location)
               if (location) {
                    this.restaurantInfo.location = location
                    this.checkIsBasicInfoValidated()
                    // this.validation.location.valid = true
               }
          },
          handleChange(evt) {
               let keyName = evt.target.name;
               console.log('keyName:', keyName)
               switch (keyName) {
                    case 'name':

                         if (evt.target.value) {
                              this.basciInfoValidation.errorResturantName = ""
                         } else {
                              this.basciInfoValidation.errorResturantName = "Resturant Name Required"
                         }
                         this.checkIsBasicInfoValidated()
                         break;
                    case 'ownerName':

                         if (evt.target.value) {
                              this.basciInfoValidation.errorResturnatOwnername = ""
                         } else {
                              this.basciInfoValidation.errorResturnatOwnername = "Resturant Owner Name Required"
                         }
                         this.checkIsBasicInfoValidated()
                         break;
                    default:
                    // text = "Looking forward to the Weekend";

               }


               // console.log('validation:', this.validation)
          },

          checkIsBasicInfoValidated() {
               console.log("this.restaurantInfo", this.restaurantInfo, this.isTermsConditionChecked)
               if (this.restaurantInfo.ownerName && this.restaurantInfo.name && this.isTermsConditionChecked && this.restaurantInfo.location !== null) {
                    this.basicFormValid = true
               } else {
                    this.basicFormValid = false
               }
          }
     }
}
</script>
    
    
    
<style>
.rating-sec .vue-star-rating .vue-star-rating-star {

     margin-right: 2px !important;

}

.rating-sec .vue-star-rating .vue-star-rating-rating-text {
     font-size: 13px !important;
     color: #007185 !important
}

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

.order-date-picker .mx-datepicker-range {
     width: 210px;
     border: 1px solid #e3e3e3;
     border-radius: 4px;
     height: 30px;
     padding: 0px 1px 0px 6px;
}

input[type="text"]:focus~label,
input[type="email"]:focus~label,
select:focus~label {
     /* @apply text-black; left-0; */
     --tw-text-opacity: 1;
     color: rgba(72, 206, 243, var(--tw-text-opacity));
     left: 0px;
}
</style>
    