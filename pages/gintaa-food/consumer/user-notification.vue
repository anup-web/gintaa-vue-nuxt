<template>
  <div class="shipment-tracking-page pt-[80px] lg:pt-12">
      <!--//////////header///////////-->
      <GintaaFoodConsumerHeader/>
      <!--////////Breadcrumb//////////-->
          <div class="mx-auto max-w-[1920px] md:px-8 2xl:px-16 pt-10 hidden md:flex">
           <breadcrumb/>
      </div>
    <div class="container max-w-4xl mx-auto px-4 md:px-8 2xl:px-16 pt-5"> 
      <div class="max-w-[1100px] mx-auto px-12">
            <div class=" pt-2 md:min-h-[550px] pb-12  ">
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
    <!--footer section goes here-->
    <GintaaFoodConsumerFooter/>
  
  
    
  
  </div> 
  </template>
  
  
  
  
  
  
  
  <script lang="ts">
  
  import Vue from 'vue'
  
  
  export default Vue.extend({     
    name: 'foodOrderTracking',
  //    mounted() {
  //     let modal = document.getElementById("icon-modals")!;
  //     let btn = document.getElementById("report-user")!;  
  //     let closeBtn = document.getElementById("close-btns")!;
  
  //     modal.style.display = "none";
  
  //     btn.onclick = function () {      
  //       modal.style.display = "block";
  //     }
  
  //     closeBtn.onclick = function () {
  //       modal.style.display = "none";
  //     }
      
  //   }
  })
  
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
  
  