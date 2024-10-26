<template>
     <div class="basis-full border-0 sm:border-0 sm:basis-full md:border-0 md:basis-full lg:basis-1/2 lg:border-l border-gray-200">
          <div class="w-full pl-0 pr-0 sm:pl-6 sm:pr-6 md:pl-6 md:pr-6 lg:pr-0">
               <div class="w-full bg-white px-0 sm:px-0 md:px-6 py-4 rounded-md relative">
                    <GintaaFoodAtomsGeneralLogout/>
                    <div class="text-base text-gray-700 font-medium text-center mb-6">{{ $t('registerYourRestaurant') }}</div>
                    
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
                                                  {{ $t('restaurantInformation') }}</div>
                                        </div>
                                        <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-green">
                                        </div>
                                   </li>



                                   <li class="relative flex items-center">
                                        <div class="flex items-center text-white relative group">
                                             <div
                                                  class="group relative w-8 h-8 flex items-center justify-center bg-firoza rounded ">
                                                  3
                                             </div>

                                             <div
                                                  class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-[11px] sm:text-xs md:text-xs capitalize text-firoza">
                                                  {{ $t('uploadPhotoDocuments') }}</div>
                                        </div>
                                   </li>
                              </ol>
                         </div>
                    </div>

                    <div class="w-full flex flex-col mt-6 ">
                         <!-- <div id="beforeUpload" class="w-full mb-3">
                       
                              <input @change="uploadImage($event)" type="file" id="fileUpload" accept="image/*" class="hidden input-file">

                              <div @click="$refs.file.click()"
                                   class="px-2 py-6 text-center border border-dashed  align-middle rounded bg-[#edfbfe] border-firoza">
                                   <div class="flex justify-center items-center">
                                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                             <path d="M19.6364 3.45437V1.27255H21.8182V3.45437H24V5.63619H21.8182V7.818H19.6364V5.63619H17.4545V3.45437H19.6364ZM6.43636 3.23619C6.54545 3.1271 6.65455 3.018 6.76364 2.90891C6.76364 2.79982 6.98182 2.36346 7.09091 2.36346C7.96364 0.836186 8.61818 0.181641 9.81818 0.181641H15.2727V2.36346H9.81818C9.70909 2.36346 9.38182 2.69073 8.94545 3.45437C8.94545 3.45437 8.72727 3.89073 8.61818 3.99982C8.50909 4.218 8.4 4.43619 8.29091 4.54528C7.74545 5.19982 7.30909 5.63619 6.54545 5.63619H3.27273C2.61818 5.63619 2.18182 6.07255 2.18182 6.7271V16.5453C2.18182 17.1998 2.61818 17.6362 3.27273 17.6362H20.7273C21.3818 17.6362 21.8182 17.1998 21.8182 16.5453V9.99982H24V16.5453C24 18.3998 22.5818 19.818 20.7273 19.818H3.27273C1.41818 19.818 0 18.3998 0 16.5453V6.7271C0 4.87255 1.41818 3.45437 3.27273 3.45437H6.32727C6.32727 3.45437 6.43636 3.34528 6.43636 3.23619ZM12 16.5453C8.94545 16.5453 6.54545 14.1453 6.54545 11.0907C6.54545 8.03619 8.94545 5.63619 12 5.63619C15.0545 5.63619 17.4545 8.03619 17.4545 11.0907C17.4545 14.1453 15.0545 16.5453 12 16.5453ZM12 14.3635C13.8545 14.3635 15.2727 12.9453 15.2727 11.0907C15.2727 9.23619 13.8545 7.818 12 7.818C10.1455 7.818 8.72727 9.23619 8.72727 11.0907C8.72727 12.9453 10.1455 14.3635 12 14.3635Z"
                                                  fill="#30BCE2" />
                                        </svg>
                                   </div>

                                   <div class="w-full flex justify-center items-center mt-4">
                                        <button class=" bg-transparent z-1 text-[#30BCE2] text-sm capitalize">
                                             Add Restaurant Photo
                                        </button>
                                   </div>

                              </div>
                         </div> -->

                         <div v-if="!restaurantInfo.photoUrl" @click="uploadMedia()" class="w-full mb-3">
                              <input @change="uploadImage($event)" type="file" id="fileUpload" accept="image/*"
                                   class="hidden input-file">

                              <div
                                   class="cursor-pointer px-2 py-6 text-center border border-dashed  align-middle rounded bg-[#edfbfe] border-firoza">
                                   <div class="flex justify-center items-center">
                                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                             <path d="M19.6364 3.45437V1.27255H21.8182V3.45437H24V5.63619H21.8182V7.818H19.6364V5.63619H17.4545V3.45437H19.6364ZM6.43636 3.23619C6.54545 3.1271 6.65455 3.018 6.76364 2.90891C6.76364 2.79982 6.98182 2.36346 7.09091 2.36346C7.96364 0.836186 8.61818 0.181641 9.81818 0.181641H15.2727V2.36346H9.81818C9.70909 2.36346 9.38182 2.69073 8.94545 3.45437C8.94545 3.45437 8.72727 3.89073 8.61818 3.99982C8.50909 4.218 8.4 4.43619 8.29091 4.54528C7.74545 5.19982 7.30909 5.63619 6.54545 5.63619H3.27273C2.61818 5.63619 2.18182 6.07255 2.18182 6.7271V16.5453C2.18182 17.1998 2.61818 17.6362 3.27273 17.6362H20.7273C21.3818 17.6362 21.8182 17.1998 21.8182 16.5453V9.99982H24V16.5453C24 18.3998 22.5818 19.818 20.7273 19.818H3.27273C1.41818 19.818 0 18.3998 0 16.5453V6.7271C0 4.87255 1.41818 3.45437 3.27273 3.45437H6.32727C6.32727 3.45437 6.43636 3.34528 6.43636 3.23619ZM12 16.5453C8.94545 16.5453 6.54545 14.1453 6.54545 11.0907C6.54545 8.03619 8.94545 5.63619 12 5.63619C15.0545 5.63619 17.4545 8.03619 17.4545 11.0907C17.4545 14.1453 15.0545 16.5453 12 16.5453ZM12 14.3635C13.8545 14.3635 15.2727 12.9453 15.2727 11.0907C15.2727 9.23619 13.8545 7.818 12 7.818C10.1455 7.818 8.72727 9.23619 8.72727 11.0907C8.72727 12.9453 10.1455 14.3635 12 14.3635Z"
                                                  fill="#30BCE2" />
                                        </svg>
                                   </div>

                                   <div class="w-full flex justify-center items-center mt-4">
                                        <button class=" bg-transparent z-1 text-[#30BCE2] text-sm capitalize">
                                             {{ $t('addRestaurantPhoto') }}
                                        </button>
                                   </div>

                              </div>
                         </div>

                         <div v-if="restaurantInfo.photoUrl"
                              class="px-2 py-2 text-center border border-dashed  align-middle rounded border-firoza w-full mb-3 relative ">
                              <a @click="uploadMedia()"
                                   class=" cursor-pointer flex justify-center items-center border border-amber-500 rounded w-6 h-6 cursor-pointer absolute top-2 right-2"><svg
                                        width="14" height="14" viewBox="0 0 27 27" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                             d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                                             fill="rgb(245 158 11)"></path>
                                   </svg></a>
                              <input @change="uploadImage($event)" type="file" id="fileUpload" accept="image/*"
                                   class="hidden input-file">
                              <img :src="restaurantInfo.photoUrl" :alt="restaurantInfo.photoUrl"
                                   class="mx-auto block h-[106px] rounded">
                         </div>


                         <div class="relative z-0 w-full mb-6">
                              <input type="text" name="fssaiNumber" placeholder=" " v-model="restaurantInfo.fssaiNumber"
                                   @input="handleChange" autocomplete="off"
                                   class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                              <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">
                                   {{ $t('fssaiCertificateNumber') }}</label>
                              <div v-if="resDocValidation.errorResturantFassai"
                                   class="absolute w-full flex items-center justify-between">
                                   <div class="text-xs text-red-400 mt-px relative">{{ resDocValidation.errorResturantFassai
                                   }}
                                   </div>
                              </div>
                         </div>

                         <!-- <div class="w-full mb-3">
                             <input type="file" accept="image/*" class="hidden input-file">

                              <div class="px-2 py-2 h-[40px] text-center border border-dashed  align-middle rounded bg-[#edfbfe] border-firoza">
                                   <div class="w-full flex justify-center items-center">
                                             <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1187 1.00628C9.77701 0.664573 9.22299 0.664573 8.88128 1.00628L4.50628 5.38128C4.16457 5.72299 4.16457 6.27701 4.50628 6.61872C4.84799 6.96043 5.40201 6.96043 5.74372 6.61872L8.625 3.73744V12.125C8.625 12.6082 9.01675 13 9.5 13C9.98325 13 10.375 12.6082 10.375 12.125V3.73744L13.2563 6.61872C13.598 6.96043 14.152 6.96043 14.4937 6.61872C14.8354 6.27701 14.8354 5.72299 14.4937 5.38128L10.1187 1.00628ZM2.5 12.125C2.5 11.6418 2.10825 11.25 1.625 11.25C1.14175 11.25 0.75 11.6418 0.75 12.125V15.625C0.75 16.3212 1.02656 16.9889 1.51884 17.4812C2.01113 17.9734 2.67881 18.25 3.375 18.25H15.625C16.3212 18.25 16.9889 17.9734 17.4812 17.4812C17.9734 16.9889 18.25 16.3212 18.25 15.625V12.125C18.25 11.6418 17.8582 11.25 17.375 11.25C16.8918 11.25 16.5 11.6418 16.5 12.125V15.625C16.5 15.8571 16.4078 16.0796 16.2437 16.2437C16.0796 16.4078 15.8571 16.5 15.625 16.5H3.375C3.14294 16.5 2.92038 16.4078 2.75628 16.2437C2.59219 16.0796 2.5 15.8571 2.5 15.625V12.125Z" fill="#30BCE2"/>
                                             </svg>
                                             <button class=" bg-transparent z-1 text-[#30BCE2] text-sm capitalize pl-2">
                                                  Upload FSSAI Certificate
                                             </button>
                                   </div>

                              </div>
                          </div>  -->

                         <div class="relative z-0 w-full mb-6">
                              <input type="text" name="licenseNumber" placeholder=" " v-model="restaurantInfo.licenseNumber"
                                   @input="handleChange" autocomplete="off" minlength="1" maxlength="300"
                                   class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                              <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">
                                   {{ $t('tradeLicenseNumber') }}</label>
                              <div v-if="resDocValidation.errorResturnatLicense"
                                   class="absolute w-full flex items-center justify-between ">
                                   <div class="text-xs text-red-400 mt-px relative">
                                        {{ resDocValidation.errorResturnatLicense }}</div>
                              </div>
                         </div>

                         <!-- <div class="w-full mb-3">
                             <input type="file" accept="image/*" class="hidden input-file">

                              <div class="px-2 py-2 h-[40px] text-center border border-dashed  align-middle rounded bg-[#edfbfe] border-firoza">
                                   <div class="w-full flex justify-center items-center">
                                             <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1187 1.00628C9.77701 0.664573 9.22299 0.664573 8.88128 1.00628L4.50628 5.38128C4.16457 5.72299 4.16457 6.27701 4.50628 6.61872C4.84799 6.96043 5.40201 6.96043 5.74372 6.61872L8.625 3.73744V12.125C8.625 12.6082 9.01675 13 9.5 13C9.98325 13 10.375 12.6082 10.375 12.125V3.73744L13.2563 6.61872C13.598 6.96043 14.152 6.96043 14.4937 6.61872C14.8354 6.27701 14.8354 5.72299 14.4937 5.38128L10.1187 1.00628ZM2.5 12.125C2.5 11.6418 2.10825 11.25 1.625 11.25C1.14175 11.25 0.75 11.6418 0.75 12.125V15.625C0.75 16.3212 1.02656 16.9889 1.51884 17.4812C2.01113 17.9734 2.67881 18.25 3.375 18.25H15.625C16.3212 18.25 16.9889 17.9734 17.4812 17.4812C17.9734 16.9889 18.25 16.3212 18.25 15.625V12.125C18.25 11.6418 17.8582 11.25 17.375 11.25C16.8918 11.25 16.5 11.6418 16.5 12.125V15.625C16.5 15.8571 16.4078 16.0796 16.2437 16.2437C16.0796 16.4078 15.8571 16.5 15.625 16.5H3.375C3.14294 16.5 2.92038 16.4078 2.75628 16.2437C2.59219 16.0796 2.5 15.8571 2.5 15.625V12.125Z" fill="#30BCE2"/>
                                             </svg>
                                             <button class=" bg-transparent z-1 text-[#30BCE2] text-sm capitalize pl-2">
                                                  Upload Trade License Certificate
                                             </button>
                                   </div>

                              </div>
                          </div> -->




                         <div class="relative z-0 w-full mb-6">

                              <input type="text" name="gstNumber" placeholder=" " v-model="restaurantInfo.gstNumber"
                                   :disabled="isNotgstregistered" @input="handleChange" autocomplete="off"
                                   class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                              <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">
                                   {{ $t('gstNumber') }}</label>
                              <div v-if="resDocValidation.errorResturnatgst"
                                   class="absolute w-full flex items-center justify-between ">
                                   <div class="text-xs text-red-400 mt-px relative">{{ resDocValidation.errorResturnatgst }}
                                   </div>
                              </div>
                         </div>

                         <div class="flex items-center relative pl-4 mb-6 ">
                              <input :checked="isNotgstregistered" @click="onClickinggstUnregisterd()" id="Refurbished"
                                   name="filter" value="white" type="checkbox"
                                   class="h-4 w-4 border-gray-300 rounded text-firoza focus:ring-firoza absolute z-10 left-0 top-0">
                              <label for="Refurbished" class="ml-2 text-sm text-gray-600 cursor-pointer"> {{ $t('gstNotAvailable') }}
                              </label>
                         </div>

                         <!-- <div class="w-full mb-6">
                             <input type="file" accept="image/*" class="hidden input-file">

                              <div class="px-2 py-2 h-[40px] text-center border border-dashed  align-middle rounded bg-[#edfbfe] border-firoza">
                                   <div class="w-full flex justify-center items-center">
                                             <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1187 1.00628C9.77701 0.664573 9.22299 0.664573 8.88128 1.00628L4.50628 5.38128C4.16457 5.72299 4.16457 6.27701 4.50628 6.61872C4.84799 6.96043 5.40201 6.96043 5.74372 6.61872L8.625 3.73744V12.125C8.625 12.6082 9.01675 13 9.5 13C9.98325 13 10.375 12.6082 10.375 12.125V3.73744L13.2563 6.61872C13.598 6.96043 14.152 6.96043 14.4937 6.61872C14.8354 6.27701 14.8354 5.72299 14.4937 5.38128L10.1187 1.00628ZM2.5 12.125C2.5 11.6418 2.10825 11.25 1.625 11.25C1.14175 11.25 0.75 11.6418 0.75 12.125V15.625C0.75 16.3212 1.02656 16.9889 1.51884 17.4812C2.01113 17.9734 2.67881 18.25 3.375 18.25H15.625C16.3212 18.25 16.9889 17.9734 17.4812 17.4812C17.9734 16.9889 18.25 16.3212 18.25 15.625V12.125C18.25 11.6418 17.8582 11.25 17.375 11.25C16.8918 11.25 16.5 11.6418 16.5 12.125V15.625C16.5 15.8571 16.4078 16.0796 16.2437 16.2437C16.0796 16.4078 15.8571 16.5 15.625 16.5H3.375C3.14294 16.5 2.92038 16.4078 2.75628 16.2437C2.59219 16.0796 2.5 15.8571 2.5 15.625V12.125Z" fill="#30BCE2"/>
                                             </svg>
                                             <button class=" bg-transparent z-1 text-[#30BCE2] text-sm capitalize pl-2">
                                                  Upload GST Certificate
                                             </button>
                                   </div>

                              </div>
                          </div> -->

                         <div class="flex items-center relative pl-4">
                              <input @click="termConditionCheckUncheck()" id="f-Refurbished" name="filter" value="white"
                                   type="checkbox"
                                   class="h-4 w-4 border-gray-300 rounded text-firoza focus:ring-firoza absolute z-10 left-0 top-0"
                                   :checked="isTermAndConditonChecked">
                              <label for="f-Refurbished" class="ml-2 text-xs text-gray-600 cursor-pointer">{{ $t('byContinuingAgree') }} <a :href="localePath('/legal/gintaa-food/terms-condition')" target="_blank" class="text-firoza lowercase">{{ $t('termsConditions') }}</a>
                              </label>
                         </div>

                         <div class="w-full flex items-center justify-between mt-6">
                              <a @click="backToPreviousPage()"
                                   class=" cursor-pointer bg-transparent border border-firoza text-firoza font-bold py-1 px-3 h-11 mr-10 w-full rounded text-base flex items-center justify-center">
                                   <svg width="20" height="13" viewBox="0 0 28 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                             d="M27.125 8.99996C27.125 8.75132 27.0262 8.51287 26.8504 8.33705C26.6746 8.16124 26.4361 8.06246 26.1875 8.06246H4.07562L9.97625 2.16371C10.1523 1.98768 10.2512 1.74892 10.2512 1.49996C10.2512 1.25101 10.1523 1.01225 9.97625 0.836213C9.80021 0.660176 9.56145 0.561279 9.3125 0.561279C9.06355 0.561279 8.82479 0.660176 8.64875 0.836213L1.14875 8.33621C1.06144 8.4233 0.992177 8.52675 0.944914 8.64065C0.897652 8.75455 0.873325 8.87665 0.873325 8.99996C0.873325 9.12328 0.897652 9.24538 0.944914 9.35928C0.992177 9.47317 1.06144 9.57663 1.14875 9.66371L8.64875 17.1637C8.82479 17.3398 9.06355 17.4386 9.3125 17.4386C9.56145 17.4386 9.80021 17.3398 9.97625 17.1637C10.1523 16.9877 10.2512 16.7489 10.2512 16.5C10.2512 16.251 10.1523 16.0123 9.97625 15.8362L4.07562 9.93746H26.1875C26.4361 9.93746 26.6746 9.83869 26.8504 9.66288C27.0262 9.48706 27.125 9.2486 27.125 8.99996V8.99996Z"
                                             fill="#48CEF3" />
                                   </svg>
                                   <span class="pl-1">{{ $t('cl_Back') }}</span>
                              </a>

                              <a :disabled="!basicDocFormValid"
                                   :class="!basicDocFormValid ? 'opacity-50' : 'opacity-100 cursor-pointer'"
                                   @click="basicDocFormValid ? updateResturantDocDet() :false"
                                   class="bg-firoza text-white font-bold py-1 px-3 h-11 ml-10 w-full rounded text-base flex items-center justify-center">
                                   <span v-show="!loading" class="pr-1">{{ $t('cl_submit') }}</span>
                                   <span class="pr-1">
                                        <Spinner v-show="loading" class="w-4" />
                                   </span>
                              </a>
                         </div>

                    </div>
               </div>
               <CropImage v-if="image.src && showCropper" :image="image" @updateUserData="updateUserData"
                    @closeCropper="closeCropper" />
          </div>
     </div>
</template>
        
        
        
        
        
        
<script lang="ts">
import Vue from 'vue'
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import { mapState } from "vuex";
export default {
     name: 'ResdocdetailsStepThree',
     components: {
          Cropper
     },
     data() {
          return {
               showCropper: false,
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
                    initiateVerification:true
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

          async updateResturantDocDet() {

               this.loading = true
               console.log('restaurantInfo:', this.restaurantInfo)

            


               // return 
               try {
                    const url = '/flisting/v1/restaurant'
                    const data = await this.$axios.$put(url, this.restaurantInfo);
                    console.log('Update Restaurant info:', data)
                    if (data.success) {
                         Vue.$toast.success(data?.message);
                        // this.$emit('setCurrentStep', 3);
                         this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant/${data.payload.verificationStatus}`)})

                    } else {
                         Vue.$toast.error(data?.message);
                    }

                    this.loading = false



               } catch (error: any) {

                    Vue.$toast.error(error.response.data.message);
                    this.loading = false

               }

          },

          backToPreviousPage() {
               this.$emit('setCurrentStep', 2);
          },

          uploadMedia() {
               let uploadButton = document.getElementById('fileUpload');
               uploadButton.click();

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

                    if (this.restaurantInfo.gstNumber === 'UNREGISTERED') {
                         this.isNotgstregistered = true
                    }


                    // this.setTheCurrentStep()

                    this.showLoader = false
                    this.checkIsDocValidated()

               } catch (error) {
                    this.showLoader = false
                    console.log(error);
               }
          },

          closeCropper() {
               this.image.src = null
               this.showCropper = false
          },

          updateUserData(userData: any) {
               console.log('uploadProfileImage uData:', userData)
               if (userData && userData.payload) {
                    const photoUrl = userData.payload.photoUrl
                    this.restaurantInfo.photoUrl = photoUrl
                    this.image.src = null
                    this.showCropper = false
                    this.checkIsDocValidated()
                    // this.validation.photoUrl.valid = true
               }
          },

          termConditionCheckUncheck() {
               this.isTermAndConditonChecked = !this.isTermAndConditonChecked
               this.checkIsDocValidated()
          },

          onClickinggstUnregisterd() {
               this.isNotgstregistered = !this.isNotgstregistered
               if (this.isNotgstregistered) {
                    this.restaurantInfo.gstNumber = 'UNREGISTERED'
                    this.resDocValidation.errorResturnatgst = null
                    this.restaurantInfo.gstPercent = 5
                    this.checkIsDocValidated()
               } else {
                    //this.validation.gstNumber.valid = false
                    this.restaurantInfo.gstNumber = null
                    this.checkIsDocValidated()
               }

               console.log("isNotgstregistered", this.isNotgstregistered)
          },


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
                    this.showCropper = true
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
                    // this.validation.location.valid = true
               }
          },
          handleChange(evt) {
               let keyName = evt.target.name;
               console.log('keyName:', keyName)
               switch (keyName) {
                    case 'fssaiNumber':
                         if (evt.target.value) {
                              if (evt.target.value.length !== 14) {
                                   this.resDocValidation.errorResturantFassai = "Fssai Number should be 14 digits"
                              } else {
                                   this.resDocValidation.errorResturantFassai = null
                              }
                         }
                         else {
                              this.resDocValidation.errorResturantFassai = "Fssai Number is required"
                         }
                         this.checkIsDocValidated()
                         break;
                    case 'licenseNumber':

                         if (evt.target.value) {
                              this.resDocValidation.errorResturnatLicense = null
                         } else {
                              this.resDocValidation.errorResturnatLicense = "Trade License Number Required"
                         }
                         this.checkIsDocValidated()
                         break;
                         break;
                    case 'gstNumber':

                         if (evt.target.value) {
                              let reg = RegExp("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$");
                              if (!reg.test(evt.target.value)) {
                                   this.resDocValidation.errorResturnatgst = "Please provide a valid GST number"
                              } else {
                                   this.resDocValidation.errorResturnatgst = null
                              }

                         } else {
                              this.resDocValidation.errorResturnatgst = "Please provide a GST number"
                         }
                         this.checkIsDocValidated()
                         break;
                    default:
                    // text = "Looking forward to the Weekend";

               }


               // console.log('validation:', this.validation)
          },

          checkIsDocValidated() {
               console.log("this.restaurantInfo", this.restaurantInfo)
               if ((this.restaurantInfo.fssaiNumber && !this.resDocValidation.errorResturantFassai) && (this.restaurantInfo.licenseNumber && !this.resDocValidation.errorResturnatLicense) && (this.restaurantInfo.gstNumber && !this.resDocValidation.errorResturnatgst) && this.isTermAndConditonChecked && this.restaurantInfo.photoUrl) {
                    this.basicDocFormValid = true
               } else {
                    this.basicDocFormValid = false
               }
          }
     }
}
</script>
        
        
<style>
.rating-sec .vue-star-rating .vue-star-rating-star {

     margin-right: 2px !important;

}

.vue-advanced-cropper__foreground,
.vue-advanced-cropper__background {
     background: #f9f9f9 !important;
     width: 100% !important;
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
}</style>
        