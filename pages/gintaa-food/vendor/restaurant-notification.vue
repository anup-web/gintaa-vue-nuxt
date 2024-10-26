<template>
    <div class="relative bg-[#f8f8f8] min-h-screen">
  
      <GintaaFoodVendorSidebar />
      <div class="content-wrapper pl-0 relative z-10 sm:pl-0 md:pl-[180px] lg:pl-[250px] xl:pl-[320px]">        
        <GintaaFoodVendorHeader />
        <div class="content pt-[100px] pb-[100px] px-14 sm:pb-[100px] md:pb-0">
          <div class="flex items-center justify-between mb-0">
                  <div class="text-right text-base font-medium">Notifications</div> 
                  <div class="flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 5.37766L17.5 12.3568V20.0002H12.5V15.0002H7.5V20.0002H2.5V12.3568L10 5.37766ZM20 10.1235L10 0.833496L0 10.111L1.13417 11.3318L10 3.1085L18.8658 11.3443L20 10.1235Z" fill="#8EC23C"/>
                      </svg>
                       <span class="text-sm text-green ml-2">Home  / Notifications</span>
                  </div>
              </div>
          <div class="max-w-[1100px] mx-auto px-12">
            <div class=" pt-6 md:min-h-[550px] pb-12  ">
                <div class="relative">
                    <ul>
                        <li class=" relative mb-2 cursor-pointer">
                            <div class="bg-white shadow px-12 py-3  relative pl-[80px] min-h-[75px]">
                                  <img src="https://storage.googleapis.com/gintaa-app-media-develop/notification/images/OFFER_REJECTED.png" alt="Gintaa Offer Rejection Alert!" class="absolute left-3 top-3 w-[50px] h-[50px] rounded-full"> 
                                  <div class="h-2 w-2 rounded-full bg-rose-700 absolute right-4 top-6"></div> 
                                  <h2 class="font-medium text-sm text-gray-500 pb-3 break-words">Gintaa Offer Rejection Alert!</h2> 
                                  <div class="text-xsb text-gray-500 break-words">Sorry!!! Abhishek Two has rejected your offer. Better luck next time. Check now</div>                                    
                                  <div  class="day-status text-[9px] text-gray-400 mt-2">Jan 21</div>
                            </div>
                        </li>
                        <li class=" relative mb-2 cursor-pointer">
                            <div class="bg-white shadow px-12 py-3  relative pl-[80px] min-h-[75px]">
                                <img src="https://storage.googleapis.com/gintaa-app-media-develop/notification/images/OFFER_CLOSED.png" alt="Offer Closed Successfully!!!" class="absolute left-3 top-3 w-[50px] h-[50px] rounded-full"> 
                                <div class="h-2 w-2 rounded-full bg-rose-700 absolute right-4 top-6"></div>
                                 <h2 class="font-medium text-sm text-gray-500 pb-3 break-words">Offer Closed Successfully!!!</h2> 
                                 <div class="text-xsb text-gray-500 break-words">Rate your experience of exchange with your partner.</div> 
                                  <div  class="day-status text-[9px] text-gray-400 mt-2"> Dec 09 </div>
                            </div>
                        </li>
                       <li class=" relative mb-2 cursor-pointer">
                            <div class="bg-white shadow px-12 py-3  relative pl-[80px] min-h-[75px]">
                                 <img src="https://storage.googleapis.com/gintaa-app-media-develop/notification/images/RATING_OR_REVIEW.png" alt="Gintaa rating alert!!!" class="absolute left-3 top-3 w-[50px] h-[50px] rounded-full">
                                 <div class="h-2 w-2 rounded-full bg-rose-700 absolute right-4 top-6"></div> 
                                 <h2 class="font-medium text-sm text-gray-500 pb-3 break-words">Gintaa rating alert!!!</h2> 
                                <div class="text-xsb text-gray-500 break-words">sudhangshu chowdhury posted a feedback for you!Click now</div> 
                                <div  class="day-status text-[9px] text-gray-400 mt-2">Dec 09</div>
                            </div>
                      </li>
                      <li class=" relative mb-2 cursor-pointer">
                          <div class="bg-white shadow px-12 py-3  relative pl-[80px] min-h-[75px]">
                                <img src="https://storage.googleapis.com/gintaa-app-media-develop/notification/images/OFFER_INITIATED.png" alt="Gintaa offer initation alert" class="absolute left-3 top-3 w-[50px] h-[50px] rounded-full"> 
                                <div class="h-2 w-2 rounded-full bg-rose-700 absolute right-4 top-6"></div>
                                 <h2 class="font-medium text-sm text-gray-500 pb-3 break-words">Gintaa offer initation alert</h2>
                                 <div class="text-xsb text-gray-500 break-words">Your listing Furniture sets has got offer(s) from sudhangshu chowdhury</div> 
                             <div  class="day-status text-[9px] text-gray-400 mt-2">Dec 09</div>
                          </div>
                      </li>
                      <li class=" relative mb-2 cursor-pointer">
                          <div class="bg-white shadow px-12 py-3  relative pl-[80px] min-h-[75px]">
                                <img src="https://storage.googleapis.com/gintaa-app-media-develop/notification/images/COINS_EARNED.png" alt="Congratulations! gintaa Coins Earned!" class="absolute left-3 top-3 w-[50px] h-[50px] rounded-full">
                                <div class="h-2 w-2 rounded-full bg-rose-700 absolute right-4 top-6"></div>
                                 <h2 class="font-medium text-sm text-gray-500 pb-3 break-words">Congratulations! gintaa Coins Earned!</h2>
                                 <div class="text-xsb text-gray-500 break-words">Congratulations! You have earned 5 gintaa coins . Check your wallet balance here</div> 
                                 <div  class="day-status text-[9px] text-gray-400 mt-2"> Aug 20 </div>
                          </div>
                      </li>                     
                     
                      <li class=" relative mb-2 cursor-pointer">
                        <div class="bg-white shadow px-12 py-3  relative pl-[80px] min-h-[75px]">
                             <img src="https://storage.googleapis.com/gintaa-app-media-develop/notification/images/OFFER_ACCEPTED.png" alt="Gintaa Offer Accept Alert!!!" class="absolute left-3 top-3 w-[50px] h-[50px] rounded-full">
                              <div class="h-2 w-2 rounded-full bg-rose-700 absolute right-4 top-6"></div> 
                              <h2 class="font-medium text-sm text-gray-500 pb-3 break-words">Gintaa Offer Accept Alert!!!</h2> 
                              <div class="text-xsb text-gray-500 break-words">Cheers!!! Anup new has accepted your offer. Check now.</div> 
                               <div  class="day-status text-[9px] text-gray-400 mt-2"> Aug 10</div>
                        </div>
                      </li>
                </ul>
              </div>
            </div>
  
  
          </div>
  
        </div>
  
        
      </div>
    </div>
  </template>
 <script lang="ts">
 import Vue from 'vue'
 
 export default{
 name: 'restaurantNotificationPage',
 
 }
 </script>
 