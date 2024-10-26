<template>
     <div class="checkout-details-page bg-[#f2f2f2] min-h-screen w-full flex items-center justify-center">
          <fullPageLoader v-if="showLoader" />

          <div class="w-full pt-[0px] lg:pt-[0px] pb-10">
               <div class="container max-w-6xl mx-auto px-4 md:px-8 2xl:px-16 pt-5">
                    <div class="w-full bg-white px-6 py-6">
                         <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row">

                              <GintaaFoodAtomsRegisterResSidebar />

                              <div class="basis-full border-0 sm:border-0 sm:basis-full md:border-0 md:basis-full lg:basis-1/2 lg:border-l border-gray-200">
                                   <div class="w-full pl-0 pr-0 sm:pl-6 sm:pr-6 md:pl-6 md:pr-6 lg:pr-0">
                                        <div class="w-full bg-white px-0 sm:px-0 md:px-6 py-4 rounded-md relative">
                                             <GintaaFoodAtomsGeneralLogout/>
                                             <div class="w-full"
                                                  v-if="restaurantInfo.verificationStatus && restaurantInfo.verificationStatus === 'ACCEPTED'">
                                                  <div class="w-full flex items-center justify-center mt-20">
                                                       <div
                                                            class="w-[80px] h-[80px] bg-[#1FBE58] rounded-full flex items-center justify-center">
                                                            <svg width="34" height="28" viewBox="0 0 44 34" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                 <path d="M14 26.8955L3.5 16.2388L0 19.791L14 34L44 3.55224L40.5 0L14 26.8955Z"
                                                                      fill="white" />
                                                            </svg>
                                                       </div>
                                                  </div>
                                                  <div
                                                       class="w-full flex items-center justify-center text-center text-2xl font-medium text-[#1FBE58] mt-6">
                                                       {{ $t('congratulations') }}</div>
                                                  <div
                                                       class="w-full flex items-center justify-center text-center text-sm text-gray-700 mt-12">
                                                       {{ $t('successfullySubmitted') }}
                                                  </div>
                                                  <div
                                                       class="w-full flex items-center justify-center text-center text-sm text-gray-700 mt-4">
                                                       {{ $t('verificationProcessPara') }}

                                                  </div>
                                                  <div
                                                       class="w-full   text-center text-sm text-gray-700 mt-2 mb-20 font-medium">
                                                           {{ $t('thankYou') }}
                                                       <div
                                                            class="cursor-pointer w-full px-14 flex items-center justify-center mt-6">
                                                            <a @click="completeProfile()"
                                                                 class="transition-all w-full flex justify-center items-center bg-firoza py-2 px-6 rounded font-normal text-base text-white ">
                                                                 <span>{{ $t('completeProfile') }}</span>
                                                            </a>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div v-if="restaurantInfo.verificationStatus && restaurantInfo.verificationStatus === 'PENDING'"
                                                  class="w-full ">
                                                  <div class="w-full flex items-center justify-center mt-20">
                                                       <div
                                                            class="w-[80px] h-[80px] bg-[#FFBB00] rounded-full flex items-center justify-center">
                                                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                 <g clip-path="url(#clip0_219_12708)">
                                                                      <path d="M49.6669 20.85C49.2232 20.4063 48.503 20.4063 48.0597 20.85L45.3756 23.5341C44.7242 14.7151 38.474 7.31557 29.8881 5.19844C21.3026 3.08091 12.3288 6.72655 7.65165 14.2314C7.43228 14.5756 7.41438 15.0115 7.60503 15.3728C7.79568 15.7341 8.16532 15.9655 8.57368 15.9785C8.98203 15.9918 9.36625 15.7845 9.57937 15.4361C13.7058 8.8162 21.5974 5.56809 29.1879 7.36552C36.7789 9.16295 42.376 15.6042 43.0962 23.3717L40.5732 20.85C40.1274 20.4196 39.4185 20.4254 38.9797 20.8642C38.5414 21.3025 38.5352 22.0114 38.966 22.4576L43.5129 27.0041C43.9566 27.4482 44.6763 27.4482 45.1201 27.0041L49.6669 22.4576C50.1111 22.0139 50.1111 21.2937 49.6669 20.85Z"
                                                                           fill="white" />
                                                                      <path d="M41.9749 34.3298C41.4425 33.9981 40.7415 34.1596 40.4076 34.6907C36.2812 41.3114 28.3897 44.5595 20.7982 42.7621C13.2072 40.9647 7.61014 34.523 6.89042 26.7551L9.41257 29.2772C9.85839 29.7076 10.5673 29.7018 11.006 29.2631C11.4444 28.8247 11.4506 28.1158 11.0198 27.6696L6.47291 23.1232C6.02917 22.679 5.30945 22.679 4.86571 23.1232L0.319264 27.6696C-0.11157 28.1158 -0.105742 28.8247 0.333001 29.2631C0.771328 29.7018 1.48023 29.7076 1.92646 29.2772L4.61012 26.5931C5.26199 35.4121 11.5118 42.8116 20.0977 44.9288C28.6835 47.0463 37.657 43.4011 42.3341 35.8958C42.6663 35.3643 42.5056 34.6637 41.9749 34.3298Z"
                                                                           fill="white" />
                                                                 </g>
                                                                 <defs>
                                                                      <clipPath id="clip0_219_12708">
                                                                           <rect width="50" height="50" fill="white" />
                                                                      </clipPath>
                                                                 </defs>
                                                            </svg>
                                                       </div>
                                                  </div>
                                                  <div
                                                       class="w-full flex items-center justify-center text-center text-2xl font-medium text-[#E1A708] mt-6">
                                                       {{ $t('verificationProgress') }}</div>
                                                  <div
                                                       class="w-full flex items-center justify-center text-center text-sm text-gray-700 mt-12">
                                                       {{ $t('submittedDocuments') }}</div>

                                                  <div
                                                       class="w-full flex items-center justify-center text-center text-sm text-gray-700 mt-4">
                                                       {{ $t('submittedDocumentsPara') }}
                                                  </div>
                                                  <div
                                                       class="w-full flex items-center justify-center text-center text-sm text-gray-700 mt-2 mb-20 font-medium">
                                                       {{ $t('thankYou') }}

                                                      
                                                  </div>
                                             </div>

                                             <div class="w-full "
                                                  v-if="restaurantInfo.verificationStatus && restaurantInfo.verificationStatus === 'REJECTED'">
                                                  <div class="w-full flex items-center justify-center mt-14">
                                                       <div
                                                            class="w-[80px] h-[80px] bg-[#FF0000] rounded-full flex items-center justify-center">
                                                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                 <path fill-rule="evenodd" clip-rule="evenodd"
                                                                      d="M27.0785 3.97911C27.84 3.23616 27.84 2.0316 27.0785 1.28866C26.317 0.545708 25.0823 0.545708 24.3208 1.28866L13.9996 11.3581L3.67847 1.28866C2.91695 0.545708 1.68227 0.545708 0.920751 1.28866C0.159229 2.0316 0.159229 3.23616 0.920751 3.97911L11.2419 14.0485L0.920751 24.1179C0.159229 24.8609 0.159229 26.0654 0.920751 26.8084C1.68227 27.5513 2.91695 27.5513 3.67847 26.8084L13.9996 16.739L24.3208 26.8084C25.0823 27.5513 26.317 27.5513 27.0785 26.8084C27.84 26.0654 27.84 24.8609 27.0785 24.1179L16.7573 14.0485L27.0785 3.97911Z"
                                                                      fill="white" />
                                                            </svg>
                                                       </div>
                                                  </div>
                                                  <div
                                                       class="w-full flex items-center justify-center text-center text-2xl font-medium text-[#FF0000] mt-6">
                                                       {{ $t('verificationFailed') }}</div>
                                                  <div
                                                       class="w-full flex items-center justify-center text-center text-sm text-gray-700 mt-4">
                                                       {{ $t('verificationFailedPara') }}</div>
                                                  <div
                                                       class="w-full bg-[#ffe9e9] rounded-lg px-6 py-4 border-l-8 border-[#FF0000] mt-12">
                                                       <div class="text-[#FF0000] text-sm">{{ $t('fixItem') }}</div>
                                                       <ul v-if="restaurantInfo.verificationRemarks"
                                                            class="list-disc text-sm text-gray-900 pl-3 mt-2">
                                                            <li>{{ restaurantInfo.verificationRemarks }}</li>

                                                       </ul>
                                                  </div>
                                                  <a @click="fixYourProblems()"
                                                       class="cursor-pointer bg-transparent mt-10 border border-firoza text-firoza font-bold py-1 px-3 h-11 mr-10 w-full rounded text-base flex items-center justify-center">
                                                       <span>{{ $t('fixNow') }}</span>
                                                  </a>
                                             </div>

                                        </div>
                                   </div>
                              </div>

                              <!-- <GintaaFoodAtomsMobilenoStepOne/> -->
                              <!-- <GintaaFoodAtomsResbasicinfoStepTwo/> -->
                              <!-- <GintaaFoodAtomsResdocdetailsStepThree/> -->
                              <!-- <GintaaFoodAtomsRestimeselectionStepFive/> -->
                              <!-- <GintaaFoodAtomsResbankaccountaddStepSix/> -->

                         </div>


                    </div>
               </div>
          </div>

     </div>
</template>
  
<script lang="ts">

import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import { mapState } from "vuex";
import Vue from 'vue'
export default Vue.extend({
     name: 'Registrationstatus',

     data() {
          return {
               currentStep: 0,
               isNotgstregistered: false,
               showaddAddressModal: false,
               loading: false,
               showLoader: true,
               basicDocFormValid: false,
               isTermAndConditonChecked: true,
               image: {
                    src: null,
                    type: null, //"image/jpg",
                    name: null
               },
               resDocValidation: {
                    errorResturantFassai: null,
                    errorResturnatLicense: null,
                    errorResturnatgst: null
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
                    resturantName: null,
                    ownerName: null,
                    verificationStatus: null,
                    verificationRemarks: null,
               },

          }
     },
     computed: {
          ...mapState({
               authUser: (state) => state.authUser,
          }),
     },
     mounted() {
          console.log("this.authUser ", this.authUser)
          if (this.authUser && this.authUser.uid) {
               this.restaurantInfo.rid = this.authUser.uid
               this.getRestaurantDetails()
          }
     },
     methods: {

          completeProfile(){
               this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant/complete-profile`) })
          },

          fixYourProblems() {
               this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant/basic-info`) })
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
                         this.restaurantInfo.verificationRemarks = restaurantData.verificationRemarks
                    }




                    this.showLoader = false

               } catch (error) {
                    this.showLoader = false
                    console.log(error);
               }
          },
     }

})
</script>

<style scoped>.dsDoM {
     padding-bottom: 0px !important;
}</style>
  
  
  