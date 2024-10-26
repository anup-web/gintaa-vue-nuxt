<template>
    <div class="checkout-details-page">
        <!--//////////header///////////-->
        <GintaaFoodConsumerHeader/>
       
     <div class="bg-white pt-[110px] lg:pt-[70px] pb-10">
      <div class="container max-w-6xl mx-auto px-4 md:px-8 2xl:px-16 pt-5"> 
           <div class="w-full bg-white px-6 py-6">
            <div class="flex flex-row">
                <div class="basis-1/2">
                     <div class="w-full pr-10 pl-6">
                          <div class="text-2xl font-medium text-[#216B7C] mb-8">Scale up with India’s first complete patented e-Commerce platform</div>
                          <div class="flex flex-col pl-0">
                              <div class="flex items-center mb-6">
                                   <div class="flex-shrink-0 w-[102px] flex items-center justify-center">
                                         <img src="~/assets/images/food/reg-1.svg" alt="image" class="w-[80px]" />
                                   </div>
                                   <div class="ml-6">
                                        <div class="text-sm text-[#3A3A3A] font-medium">Easy Upload & Valuable Insights</div>
                                        <div class="text-xs text-gray-500 mt-1">Bulk upload, manage inventory, analytical insights and lot more</div>
                                   </div>
                              </div>

                              <div class="flex items-center mb-6">
                                   <div class="flex-shrink-0 w-[102px] flex items-center justify-center">
                                         <img src="~/assets/images/food/reg-2.svg" alt="image" class="w-[79px]" />
                                   </div>
                                   <div class="ml-6">
                                        <div class="text-sm text-[#3A3A3A] font-medium">0% Commission</div>
                                        <div class="text-xs text-gray-500 mt-1">We are charging you ZERO commission now</div>
                                   </div>
                              </div>

                              <div class="flex items-center mb-6">
                                   <div class="flex-shrink-0 w-[102px] flex items-center justify-center">
                                         <img src="~/assets/images/food/reg-3.svg" alt="image" class="w-[80px]" />
                                   </div>
                                   <div class="ml-6">
                                        <div class="text-sm text-[#3A3A3A] font-medium">500+ Categories & Quick Checkout  </div>
                                        <div class="text-xs text-gray-500 mt-1">Select from our extensive list of product categories & buyer can checkout in quick hassle-free steps</div>
                                   </div>
                              </div>

                              <div class="flex items-center">
                                   <div class="flex-shrink-0 w-[102px] flex items-center justify-center">
                                         <img src="~/assets/images/food/reg-4.svg" alt="image" class="w-[80px]" />
                                   </div>
                                   <div class="ml-6">
                                        <div class="text-sm text-[#3A3A3A] font-medium">High Visibility with Google Search </div>
                                        <div class="text-xs text-gray-500 mt-1">Your products get a chance to reach more customers via Google Search </div>
                                   </div>
                              </div>

                          </div>
                     </div>
                </div>
                <div class="basis-1/2">
                    <div class="w-full px-6">
                    <div class="w-full bg-white shadow px-6 py-4 rounded-md">
                         <div class="text-base text-gray-700 font-medium text-center mb-6">Register Your Restaurant</div>
                    <div  class="flex flex-col w-full mx-auto relative overflow-x-visible px-8">
                         <div  class="w-full mb-12 relative">
                              <ol  role="list" class="flex items-center w-full relative status-offer-mob-desk">
                                   <li  class="relative flex items-center w-full">
                                        <div  class="flex items-center text-white relative group">
                                             <div  class="flex items-center justify-center rounded transition duration-500 ease-in-out w-8 h-8 py-3 bg-firoza">
                                                  <span class="">1</span>
                                                  <svg x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-white hidden"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                             </div>                                             
                                             <div  class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-xs capitalize text-firoza">Contact Number</div>
                                        </div>
                                        <div  class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-200"></div>
                                   </li>

                                   <li  class="relative flex items-center w-full">
                                        <div  class="flex items-center text-gray-500 relative group">
                                              <div  class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded hover:border-gray-400">
                                                  2
                                              </div>
                                                             
                                              <div  class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-xs capitalize text-gray-500">Restaurant Information</div>
                                      </div>
                                        <div  class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-200"></div>
                                   </li>
                                             
                                   <li  class="relative flex items-center">
                                        <div  class="flex items-center text-gray-500 relative group">
                                              <div  class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded hover:border-gray-400">
                                                  3
                                              </div>
                                                             
                                              <div  class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-xs capitalize text-gray-500">Upload  photo & Documents</div>
                                      </div>                                                             
                                  </li>
                              </ol>
                         </div>
                    </div>
                   <div class="w-full flex flex-col mt-10">
                          <div class="text-sm text-gray-700 font-medium mb-4">Contact Number</div>
                         <div  class="relative z-0 w-full mb-6">
                               <input  type="text" name="name" placeholder=" " required="required" autocomplete="off" minlength="1" maxlength="300" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                               <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Restaurant Mobile Number</label> 
                               <!-- <div  class="absolute w-full flex items-center justify-between "><div  class="text-xs text-red-400 mt-px relative">Enter a valid Phone Number</div> <button  type="button" id="open-btns" class="flex justify-center items-center text-firoza font-normal text-xsb"> Verify </button></div>                              -->
                         </div> 
                        <div class="w-full relative hidden">
                         <form class=" absolute w-full left-0 top-0 "> 
                              <div class="text-xs text-gray-500">Verification code has been sent to your mobile number</div> 
                              <div class="mb-5">
                                   <div  class="otp-first" style="display: flex; flex-direction: row;">
                                        <div  is-input-num="true" style="display: flex;">
                                             <div style="display: flex; align-items: center;">
                                                  <input min="0" max="9" maxlength="1" pattern="[0-9]" type="number" class="verifyotp-input">
                                             </div>
                                             <div style="display: flex; align-items: center;">
                                                  <input min="0" max="9" maxlength="1" pattern="[0-9]" type="number" class="verifyotp-input">
                                             </div>
                                             <div style="display: flex; align-items: center;">
                                                  <input min="0" max="9" maxlength="1" pattern="[0-9]" type="number" class="verifyotp-input">
                                             </div>
                                             <div style="display: flex; align-items: center;">
                                                  <input min="0" max="9" maxlength="1" pattern="[0-9]" type="number" class="verifyotp-input">
                                             </div>
                                             <div style="display: flex; align-items: center;">
                                                  <input min="0" max="9" maxlength="1" pattern="[0-9]" type="number" class="verifyotp-input">
                                             </div>
                                             <div style="display: flex; align-items: center;">
                                                  <input min="0" max="9" maxlength="1" pattern="[0-9]" type="number" class="verifyotp-input">
                                             </div>
                                        </div>
                                   </div>
                                   </div>
                                   <div class="text-sm text-gray-400">
                                        <a class="text-sm font-medium text-firoza cursor-pointer"><span>Resend OTP</span> </a>
                                   </div>
                                    <div class="text-sm text-gray-400">
                                        <div class="text-xsb">Resend OTP in  <span class="font-medium text-gray-500">00:10</span></div>
                                   </div>
                              </form>
                              </div> 
                              <div class="flex items-center relative pl-4 mt-[110px] mb-4">
                              <input  id="f-Refurbished" name="filter" value="white" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-firoza focus:ring-firoza absolute z-10 left-0 top-0" checked>
                               <label  for="f-Refurbished" class="ml-2 text-xs text-gray-600 cursor-pointer">  By continuing, you agree to gintaa  <a href="#" target="_blank" class="text-firoza">terms & conditions</a> </label>
                              </div>
                         <a href="/gintaa-food/vendor/register-restaurant/step-2" class="bg-firoza text-white font-bold py-1 px-3 h-11 rounded w-full text-base flex items-center justify-center">
                              <span>Verify</span>
                              <!-- <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.875 15C1.875 14.7513 1.97377 14.5129 2.14959 14.3371C2.3254 14.1612 2.56386 14.0625 2.8125 14.0625H24.9244L19.0238 8.16371C18.8477 7.98768 18.7488 7.74892 18.7488 7.49996C18.7488 7.25101 18.8477 7.01225 19.0238 6.83621C19.1998 6.66018 19.4385 6.56128 19.6875 6.56128C19.9365 6.56128 20.1752 6.66018 20.3512 6.83621L27.8512 14.3362C27.9386 14.4233 28.0078 14.5268 28.0551 14.6407C28.1023 14.7545 28.1267 14.8766 28.1267 15C28.1267 15.1233 28.1023 15.2454 28.0551 15.3593C28.0078 15.4732 27.9386 15.5766 27.8512 15.6637L20.3512 23.1637C20.1752 23.3398 19.9365 23.4386 19.6875 23.4386C19.4385 23.4386 19.1998 23.3398 19.0238 23.1637C18.8477 22.9877 18.7488 22.7489 18.7488 22.5C18.7488 22.251 18.8477 22.0122 19.0238 21.8362L24.9244 15.9375H2.8125C2.56386 15.9375 2.3254 15.8387 2.14959 15.6629C1.97377 15.4871 1.875 15.2486 1.875 15Z" fill="white"/>
                              </svg> -->
                         </a>

                    </div> 
                    
                </div> 
                </div> 
                </div>              
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
       name: 'stepOnePage',
  
    })
    
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

input[type="text"]:focus~label,
input[type="email"]:focus~label,
input[type="text"]:not(:placeholder-shown)~label,
input[type="email"]:not(:placeholder-shown)~label,
textarea:focus~label,
textarea:not(:placeholder-shown)~label,
select:focus~label,
select:not([value='']):valid~label {
    /* @apply transform; scale-75; -translate-y-6; */
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-scale-x: 0.75;
    --tw-scale-y: 0.75;
    --tw-translate-y: -1.5rem;
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
    