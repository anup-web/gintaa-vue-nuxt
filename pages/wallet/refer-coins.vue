<template>
  <div class="product-details-page pt-[80px] lg:pt-12">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class="container max-w-8xl mx-auto px-4 md:px-8 2xl:px-16 pt-10">
      <breadcrumb :breadcrumb="breadcrumb" />
    </div>
    <fullPageLoader v-if="loading" />
    <div class="w-full border-b border-gray-300 mb-4 pb-4 sm:pb-4 md:pb-8 lg:pb-8 xl:pb-8 2xl:pb-8">
    <div class="container  mx-auto w-full px-4 sm:w-full md:px-8 md:w-full  2xl:px-16  pt-5">
      <div class="flex flex-col gap-2 md:gap-6 sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
        <div class="basis-full sm:basis-full md:basis-3/5 lg:basis-2/4 xl:basis-2/4 2xl:basis-2/4">
              <div class="w-full pr-0 sm:pr-0 md:pr-0 lg:pr-14 xl:pr-14 2xl:pr-14">
                    <div class="text-gray-900 text-xl font-normal pr-0 sm:pr-0 sm:text-xl md:pr-0 md:text-xl lg:pr-14 lg:text-4xl xl:pr-14 xl:text-4xl 2xl:pr-14 2xl:text-4xl">{{ $t("wallet_refer_friend_title") }}</div>
                    <div class="w-full block justify-between mt-4 sm:mt-4 sm:block md:mt-14 md:flex lg:mt-14 lg:flex xl:mt-14 xl:flex 2xl:mt-14 2xl:flex">
                        <div class="hh flex items-center mb-2 sm:flex sm:mb-2 md:block md:mb-0 lg:block lg:mb-0 xl:block xl:mb-0 2xl:block 2xl:mb-0">
                         <div class="w-8 h-8 mr-2 border border-gray-200 rounded-lg flex items-center justify-center ml-0 sm:ml-0 sm:w-8 sm:h-8 sm:mr-2 md:ml-4 md:w-16 md:h-16 md:mr-0 lg:ml-4 lg:w-16 lg:h-16 lg:mr-0 xl:ml-4 xl:w-16 xl:h-16 xl:mr-0 2xl:ml-4 2xl:w-16 2xl:h-16 2xl:mr-0">
                              <img src="~/assets/images/wallet/refer-user.webp" alt="image" class="w-[22px] h-[22px] sm:w-[22px] sm:h-[22px] md:w-[43px] md:h-[43px] lg:w-[43px] lg:h-[43px] xl:w-[43px] xl:h-[43px] 2xl:w-[43px] 2xl:h-[43px] " />
                         </div>
                         <div class="text-gray-700 text-[12px] text-left font-medium mt-0 w-auto sm:w-auto sm:text-[12px] sm:mt-0 sm:text-left md:w-auto md:text-xs md:mt-6 md:text-center lg:w-[175px] lg:text-xs lg:mt-6 xl:w-[175px] lg:text-center xl:text-xs xl:mt-6 xl:text-center 2xl:w-[175px] 2xl:text-xs 2xl:mt-6 2xl:text-center">{{ $t("refer_your_friends_one") }}</div>
                        </div>

                         <div class="w-16 h-16 items-center justify-center hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex">
                              <img src="~/assets/images/wallet/arrow.webp" alt="image" class="mr-[-20px] sm:mr-[-20px] md:mr-[-20px] lg:mr-0 xl:mr-0 2xl:mr-0" />
                         </div>
                         
                         <div class="hh flex items-center mb-2 sm:flex sm:mb-2 md:block md:mb-0 lg:block lg:mb-0 xl:block xl:mb-0 2xl:block 2xl:mb-0">
                          <div class="flex items-center justify-center">
                              <div class="w-8 h-8 mr-2 border border-gray-200 rounded-lg flex items-center justify-center ml-0 sm:ml-0 sm:w-8 sm:h-8 sm:mr-2 md:ml-4 md:w-16 md:h-16 md:mr-0 lg:ml-4 lg:w-16 lg:h-16 lg:mr-0 xl:ml-4 xl:w-16 xl:h-16 xl:mr-0 2xl:ml-4 2xl:w-16 2xl:h-16 2xl:mr-0">
                                    <img src="~/assets/images/wallet/gintaa_coin.webp" alt="image" class="w-[20px] h-[20px] sm:w-[20px] sm:h-[20px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[40px] xl:h-[40px] 2xl:w-[40px] 2xl:h-[40px] "/>
                              </div>
                          </div>
                         <div class="text-gray-700 text-[12px] text-left font-medium mt-0 w-auto sm:w-auto sm:text-[12px] sm:mt-0 sm:text-left md:w-auto md:text-xs md:mt-6 md:text-center lg:w-[175px] lg:text-xs lg:mt-6 xl:w-[175px] lg:text-center xl:text-xs xl:mt-6 xl:text-center 2xl:w-[175px] 2xl:text-xs 2xl:mt-6 2xl:text-center">{{ $t("refer_your_friends_two") }}</div>
                        </div>

                         <div class="w-16 h-16 items-center justify-center hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex">
                              <img src="~/assets/images/wallet/arrow.webp" alt="image" />
                         </div>
                         
                         <div class="hh flex items-center sm:flex md:block lg:block xl:block 2xl:block">
                          <div class="flex items-center justify-center">
                         <div class="w-8 h-8 mr-2 border border-gray-200 rounded-lg flex items-center justify-center ml-0 sm:ml-0 sm:w-8 sm:h-8 sm:mr-2 md:ml-4 md:w-16 md:h-16 md:mr-0 lg:ml-4 lg:w-16 lg:h-16 lg:mr-0 xl:ml-4 xl:w-16 xl:h-16 xl:mr-0 2xl:ml-4 2xl:w-16 2xl:h-16 2xl:mr-0">
                              <img src="~/assets/images/wallet/product_listing.webp" alt="image" class="w-[19px] h-[19px] sm:w-[19px] sm:h-[19px] md:w-[40px] md:h-[40px] lg:w-[40px] lg:h-[40px] xl:w-[40px] xl:h-[40px] 2xl:w-[40px] 2xl:h-[40px] " />
                         </div>
                        </div>
                         <div class="text-gray-700 text-[12px] text-left font-medium mt-0 w-auto sm:w-auto sm:text-[12px] sm:mt-0 sm:text-left md:w-auto md:text-xs md:mt-6 md:text-center lg:w-[175px] lg:text-xs lg:mt-6 xl:w-[175px] lg:text-center xl:text-xs xl:mt-6 xl:text-center 2xl:w-[175px] 2xl:text-xs 2xl:mt-6 2xl:text-center">{{ $t("refer_your_friends_three") }}</div>
                         </div>


                    </div>

                  

                    <div v-if="userDetails && userDetails.referralCode" class="w-full mt-6 sm:mt-6 md:mt-14 lg:mt-14 xl:mt-14 2xl:mt-14">
                         <div class="text-gray-700 text-sm uppercase font-medium">{{ $t("referral_code") }}</div> 
                         <div class="flex mt-3 relative">
                              <div class="bg-[#EFEFEF] uppercase text-sm text-gray-900 rounded-l-sm px-4 py-2.5 w-52">{{userDetails.referralCode}}</div>
                              <button @click="copyToClipBoard(userDetails.referralLink)" class="bg-green text-white text-sm rounded-r-sm px-6 py-2.5">Copy</button>
                              <!-- <div v-if="showCopiedModal">Copied</div> -->
                              <div v-if="showCopiedModal" class=" bg-firoza text-white text-center text-sm rounded-lg py-2 absolute left-[218px] top-[-38px] px-3 h-[34px] ">
                                Copied
                              <svg class="absolute text-firoza h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                            </div>
                         </div>
                    </div>

                    <div class="w-full mt-6 sm:mt-6 md:mt-10 lg:mt-10 xl:mt-10 2xl:mt-10">
                         <div class="text-gray-700 text-sm uppercase font-medium">{{ $t("share_your_network") }}</div>                         
                        
                
                         <div class="flex items-center relative refer-share-family">
                         
                <SharingOpt1 class="refer-share-custom"  
                                      
                  :current-url="currentUrl"
                  :referralCode="referralCode"
                />
                    </div>
              

               </div>


              </div>
        </div>
        <div class="basis-full sm:basis-full md:basis-2/5 lg:basis-2/4 xl:basis-2/4 2xl:basis-2/4">
             <div class="w-full hidden mt-6 sm:mt-6 sm:hidden md:mt-0 md:block lg:mt-0 lg:block xl:mt-0 xl:block 2xl:mt-0 2xl:block">
                  <div class="flex justify-end">
                       <img src="~/assets/images/gift/refer-family.webp" alt="image" width="430" height="360" />
                  </div>
             </div>
        </div>
      </div>
    </div>

  </div>


  <div class="container  mx-auto w-full px-4 pt-0 sm:w-full sm:pt-0 md:px-8 md:pt-5 md:w-full lg:pt-5 xl:pt-5 2xl:pt-5 2xl:px-16 mb-6">
      <div class="flex flex-col gap-2 md:gap-6 sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
        <div class="basis-full sm:basis-full md:basis-2/5 lg:basis-2/4 xl:basis-2/4 2xl:basis-2/4">
             
          <div class="w-full">
                  <div class="full text-lg text-gray-900 font-normal">{{ $t("ways_earn_gintaa_coins") }}</div>
                  <div class="justify-start mt-4 hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex">
                       <img src="~/assets/images/wallet/how-to-images.webp" alt="image" />
                  </div>
             </div>
        </div>
        <div class="basis-full sm:basis-full md:basis-3/5 lg:basis-2/4 xl:basis-2/4 2xl:basis-2/4">
             <div class="w-full mt-2 pl-0 sm:mt-2 sm:pl-0 md:mt-16 md:pl-0 lg:mt-28 lg:pl-10 xl:mt-28 xl:pl-10 2xl:mt-28 2xl:pl-10">
                  <div class="flex items-center justify-between">
                       <div class="flex items-center">
                        
                        <svg width="19" height="13" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0303 0.969668C13.3232 1.26256 13.3232 1.73744 13.0303 2.03033L6.0303 9.0303C5.7374 9.3232 5.2626 9.3232 4.96967 9.0303L0.969668 5.0303C0.676777 4.7374 0.676777 4.2626 0.969668 3.9697C1.26256 3.6768 1.73744 3.6768 2.03033 3.9697L5.5 7.4393L11.9697 0.969668C12.2626 0.676777 12.7374 0.676777 13.0303 0.969668Z" fill="#8EC23B"/>
                          </svg>
                            <div class="text-sm text-gray-900 ml-2 sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-base">{{ $t("joining_reward") }}</div>
                       </div>
                       <div class="flex items-center">
                             <div class="flex items-center mr-2">
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#3CB603"/>
                                </svg>
                                <div class="text-base text-[#3CB603] ml-0.5">10</div>
                             </div>
                             <img src="~/assets/images/wallet/gintaa-coin-icon.webp" alt="image" width="20" height="20" />
                       </div>
                  </div>

                  <div class="flex items-center justify-between mt-3">
                       <div class="flex items-center">
                        
                        <svg width="19" height="13" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0303 0.969668C13.3232 1.26256 13.3232 1.73744 13.0303 2.03033L6.0303 9.0303C5.7374 9.3232 5.2626 9.3232 4.96967 9.0303L0.969668 5.0303C0.676777 4.7374 0.676777 4.2626 0.969668 3.9697C1.26256 3.6768 1.73744 3.6768 2.03033 3.9697L5.5 7.4393L11.9697 0.969668C12.2626 0.676777 12.7374 0.676777 13.0303 0.969668Z" fill="#8EC23B"/>
                          </svg>
                            <div class="text-sm text-gray-900 ml-2 sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-base">{{ $t("referral_reward") }}</div>
                       </div>
                       <div class="flex items-center">
                             <div class="flex items-center mr-2">
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#3CB603"/>
                                </svg>
                                <div class="text-base text-[#3CB603] ml-0.5">30</div>
                             </div>
                             <img src="~/assets/images/wallet/gintaa-coin-icon.webp" alt="image" width="20" height="20" />
                       </div>
                  </div>


                  <div class="flex items-center justify-between mt-3">
                       <div class="flex items-center">
                        
                        <svg width="19" height="13" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0303 0.969668C13.3232 1.26256 13.3232 1.73744 13.0303 2.03033L6.0303 9.0303C5.7374 9.3232 5.2626 9.3232 4.96967 9.0303L0.969668 5.0303C0.676777 4.7374 0.676777 4.2626 0.969668 3.9697C1.26256 3.6768 1.73744 3.6768 2.03033 3.9697L5.5 7.4393L11.9697 0.969668C12.2626 0.676777 12.7374 0.676777 13.0303 0.969668Z" fill="#8EC23B"/>
                          </svg>
                            <div class="text-sm text-gray-900 ml-2 sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-base">{{ $t("listing_reward") }}</div>
                       </div>
                       <div class="flex items-center">
                             <div class="flex items-center mr-2">
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#3CB603"/>
                                </svg>
                                <div class="text-base text-[#3CB603] ml-0.5">10</div>
                             </div>
                             <img src="~/assets/images/wallet/gintaa-coin-icon.webp" alt="image" width="20" height="20" />
                       </div>
                  </div>

                  <div class="flex items-center justify-between mt-3">
                       <div class="flex items-center">
                        
                        <svg width="19" height="13" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0303 0.969668C13.3232 1.26256 13.3232 1.73744 13.0303 2.03033L6.0303 9.0303C5.7374 9.3232 5.2626 9.3232 4.96967 9.0303L0.969668 5.0303C0.676777 4.7374 0.676777 4.2626 0.969668 3.9697C1.26256 3.6768 1.73744 3.6768 2.03033 3.9697L5.5 7.4393L11.9697 0.969668C12.2626 0.676777 12.7374 0.676777 13.0303 0.969668Z" fill="#8EC23B"/>
                          </svg>
                            <div class="text-sm text-gray-900 ml-2 sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-base">{{ $t("successful_transaction_reward") }}</div>
                       </div>
                       <div class="flex items-center">
                             <div class="flex items-center mr-2">
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#3CB603"/>
                                </svg>
                                <div class="text-base text-[#3CB603] ml-0.5">50</div>
                             </div>
                             <img src="~/assets/images/wallet/gintaa-coin-icon.webp" alt="image" width="20" height="20" />
                       </div>
                  </div>

                  <div class="flex items-center justify-between mt-3">
                       <div class="flex items-center">
                        
                        <svg width="19" height="13" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0303 0.969668C13.3232 1.26256 13.3232 1.73744 13.0303 2.03033L6.0303 9.0303C5.7374 9.3232 5.2626 9.3232 4.96967 9.0303L0.969668 5.0303C0.676777 4.7374 0.676777 4.2626 0.969668 3.9697C1.26256 3.6768 1.73744 3.6768 2.03033 3.9697L5.5 7.4393L11.9697 0.969668C12.2626 0.676777 12.7374 0.676777 13.0303 0.969668Z" fill="#8EC23B"/>
                          </svg>
                            <div class="text-sm text-gray-900 ml-2 sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-base">{{ $t("profile_completion_reward") }}</div>
                       </div>
                       <div class="flex items-center">
                             <div class="flex items-center mr-2">
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#3CB603"/>
                                </svg>
                                <div class="text-base text-[#3CB603] ml-0.5">10</div>
                             </div>
                             <img src="~/assets/images/wallet/gintaa-coin-icon.webp" alt="image" width="20" height="20" />
                       </div>
                  </div>

                  <div class="flex items-center justify-between mt-3">
                       <div class="flex items-center">
                        
                        <svg width="19" height="13" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0303 0.969668C13.3232 1.26256 13.3232 1.73744 13.0303 2.03033L6.0303 9.0303C5.7374 9.3232 5.2626 9.3232 4.96967 9.0303L0.969668 5.0303C0.676777 4.7374 0.676777 4.2626 0.969668 3.9697C1.26256 3.6768 1.73744 3.6768 2.03033 3.9697L5.5 7.4393L11.9697 0.969668C12.2626 0.676777 12.7374 0.676777 13.0303 0.969668Z" fill="#8EC23B"/>
                          </svg>
                            <div class="text-sm text-gray-900 ml-2 sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-base">{{ $t("using_Promo_code_reward") }}</div>
                       </div>
                       <div class="flex items-center">
                             <div class="flex items-center mr-2">
                              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#3CB603"/>
                                </svg>
                                <div class="text-base text-[#3CB603] ml-0.5">35</div>
                             </div>
                             <img src="~/assets/images/wallet/gintaa-coin-icon.webp" alt="image" width="20" height="20" />
                       </div>
                  </div>



             </div>
        </div>  
      </div>
  </div>    
 
    <!--footer section goes here-->
    <Footer />

   
  </div>
</template>

<script lang="ts">
 import Vue from "vue";
 import { mapState } from "vuex";
 import SharingOpt from "~/components/atoms/SharingOpt.vue";
 import SharingOpt1 from "~/components/atoms/SharingOpt1.vue";
 export default Vue.extend({
    name: "Refercoins",
    components: { SharingOpt, SharingOpt1 },
    middleware: "authenticated",
    data() {
      return {
      //  authUser : this.$store.state.authUser,
        breadcrumb: [
          {
            name: this.$t("refer_and_earn"),
          },
        ],
        userDetails: {},
        currentUrl: "",
        referralCode: "",
        loading: true,
        showCopiedModal: false,
        referralLink: "",
        showSahreModal: false,

        
      };
    },
    computed: {
     ...mapState({
      authUser: (state) => state.authUser,
    }),
  
  },
   
  
    mounted() {
     if (this.authUser) {
      // console.log("this.authUser", this.authUser);

      this.getUserDetails(this.authUser.uid);
    }
  
    },
    methods: {
    
    async getReferelPoint(RefLink: string) {
      try {
        let url = `/wallet/v1/wallet/configuration/get-invite-coin-value`;
        const data = await this.$axios.$get(url);
        if (data.success) {

          let siteUrl = ''
          if(this.$i18n.locale === 'hi'){
           siteUrl  = `मैं आपको भारत के पहले बुद्धिमान/प्रज्ञ, सरल और सुरक्षित वस्तु विनिमय ऐप जिंटा में शामिल होने के लिए आमंत्रित कर रहा हूं। यह मेरा रेफ़रल यूआरएल है- URLLINK  लिंक का उपयोग करके साइन अप करें, और जिंटा से जुड़ने के लिए इनाम स्वरुप आपको आपके जिंटा वॉलेट में  जिंटा सिक्के/जिंटा मुद्राए (जीसी) अर्जित करेंगे/ कमाएंगे!`
          }else if (this.$i18n.locale === 'bn'){
            siteUrl = `আমি আপনাকে ভারতের প্রথম বুদ্ধিমান, সহজ এবং সুরক্ষিত এক্সচেঞ্জ অ্যাপ gintaa-এ যোগ দিতে আমন্ত্রণ জানাচ্ছি। এখানে আমার রেফারেল URL- URLLINK  লিঙ্কটি ব্যবহার করে সাইন আপ করুন এবং আপনার যোগদানের পুরষ্কার হিসাবে  COINAMOUNT gintaa কয়েন উপার্জন করুন!`
          }else{
           siteUrl = `I’m inviting you to join gintaa, India's first intelligent, simple, & secure exchange app. Here is my referral URL- URLLINK. Sign up using it,and you'll earn COINAMOUNT gintaa coins (gc) as your joining reward!`;
          }
          
          let replaceLink = siteUrl.replace("URLLINK", this.referralLink);
          this.currentUrl = replaceLink.replace(
            "COINAMOUNT",
            data?.payload?.LOGIN_REFEREE
          );
          // console.log("this.currentUrl", this.currentUrl, this.referralLink);
          // console.log("");
        }
      } catch (error) {
        console.log(error);
      }
    },
    openModal() {
      this.showSahreModal = true;
    },
    closeShareModal() {
      this.showSahreModal = false;
    },
    async getUserDetails(userId: string) {
      this.loading = true;
      try {
        const url = "/users/v1/user/profile";
        const data = await this.$axios.$get(url);
        if (data.payload) {
          this.userDetails = data.payload;
        console.log("User details ------------",data.payload);
          this.referralLink = data.payload.referralLink;
          this.referralCode = data.payload?.referralLink;
        //  console.log("data.payload",data.payload,this.referralCode)

          this.getReferelPoint(this.referralLink);
          this.loading = false;
        } else {
          // this.showAllConv = false;
        }

        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    copyToClipBoard(copyText: any)
    {
     navigator.clipboard.writeText(copyText);
     this.showCopiedModal = true;
      setTimeout(() => {this.showCopiedModal = false},2000);
    
     
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

input[type="text"]:focus ~ label,
input[type="text"]:focus ~ label,
input[type="text"]:not(:placeholder-shown) ~ label,
input[type="text"]:not(:placeholder-shown) ~ label,
textarea:focus ~ label,
textarea:not(:placeholder-shown) ~ label,
select:focus ~ label,
select:not([value=""]):valid ~ label {
  /* @apply transform; scale-75; -translate-y-6; */
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-scale-x: 0.75;
  --tw-scale-y: 0.75;
  --tw-translate-y: -1.5rem;
}

input[type="text"]:focus ~ label,
input[type="text"]:focus ~ label,
select:focus ~ label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(72, 206, 243, var(--tw-text-opacity));
  left: 0px;
}


.refer-share-family .refer-share-custom{ position: relative; left: 0px; }
.refer-share-family .refer-share-custom .sharec-2{ display: none;}
.refer-share-family .refer-share-custom .sharec-3{
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    padding: 0px;
}

.refer-share-family .refer-share-custom .drop[data-v-34cd5b42]::before {display: none;}



</style>
