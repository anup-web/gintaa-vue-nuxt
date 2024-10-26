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
                         <div class="text-base text-gray-700 font-medium text-center mb-6">Complete more Restaurant Information</div>
                    <div  class="flex flex-col w-full mx-auto relative overflow-x-visible px-8">
                         <div  class="w-full mb-12 relative">
                              <ol  role="list" class="flex items-center w-full relative status-offer-mob-desk">
                                   <li  class="relative flex items-center w-full">
                                        <div  class="flex items-center text-white relative group">
                                             <div  class="flex items-center justify-center rounded transition duration-500 ease-in-out w-8 h-8 py-3 bg-[#1FBE58]">
                                                  <span class="hidden">1</span>
                                                  <svg x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-white"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                             </div>                                             
                                             <div  class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-xs capitalize text-gray-500">Restaurant Information</div>
                                        </div>
                                        <div  class="flex-auto border-t-2 transition duration-500 ease-in-out border-[#1FBE58]"></div>
                                   </li>                                  
                                             
                                   <li  class="relative flex items-center">
                                        <div  class="flex items-center text-white relative group">
                                              <div  class="group relative w-8 h-8 flex items-center justify-center rounded bg-firoza">
                                                 2
                                              </div>
                                                             
                                              <div  class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-xs capitalize text-gray-500 text-firoza">Bank Details</div>
                                      </div>                                                             
                                  </li>
                              </ol>
                         </div>
                    </div>
                   <div class="w-full flex flex-col mt-2">
                          <div class="text-sm text-gray-500 font-medium">Bank Details (Optional)</div>
                          <div  class="relative z-0 w-full mb-2 mt-4">                               
                              <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                                   <div  class="flex items-center">
                                        <input  id="home" name="annotation" type="radio" value="Home" class="focus:ring-firoza h-4 w-4 text-firoza border-gray-300"> 
                                        <label  for="home" class="ml-3 block text-sm font-normal text-gray-500">Bank</label>
                                   </div> 
                                   <div  class="flex items-center">
                                        <input  id="work" name="annotation" type="radio" value="Work" class="focus:ring-firoza h-4 w-4 text-ring-firoza border-gray-300"> 
                                        <label  for="work" class="ml-3 block text-sm font-normal text-gray-500">UPI ID</label>
                                   </div>
                               </div>
                           </div>
                          <div class="w-full mt-3">
                         <div  class="relative z-0 w-full mb-6">
                              <input  type="text" name="name" placeholder=" " required="required" autocomplete="off" minlength="1" maxlength="300" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                               <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Enter account number</label> 
                               <div  class="absolute w-full flex items-center justify-between hidden">
                                   <div  class="text-xs text-red-400 mt-px relative">Enter a valid account number</div>             
                              </div>                             
                         </div> 

                         <div  class="relative z-0 w-full mb-6">
                              <input  type="text" name="name" placeholder=" " required="required" autocomplete="off" minlength="1" maxlength="300" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                               <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Confirm account number</label>  
                               <div  class="absolute w-full flex items-center justify-between hidden">
                                   <div  class="text-xs text-red-400 mt-px relative">Enter a valid confirm account number</div>             
                              </div>                             
                         </div> 
                         <div  class="relative z-0 w-full mb-6">
                              <input  type="text" name="name" placeholder=" " required="required" autocomplete="off" minlength="1" maxlength="300" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                               <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Enter IFSC code</label> 
                               <div  class="absolute w-full flex items-center justify-between hidden">
                                   <div  class="text-xs text-red-400 mt-px relative">Enter a valid IFSC code</div>             
                              </div>                              
                         </div>
                         <div  class="relative z-0 w-full mb-6">
                              <input  type="text" name="name" placeholder=" " required="required" autocomplete="off" minlength="1" maxlength="300" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                               <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Account holder Name</label> 
                               <div  class="absolute w-full flex items-center justify-between hidden">
                                   <div  class="text-xs text-red-400 mt-px relative">Enter a valid Name</div>             
                              </div>                              
                         </div>
                        
                        </div>

                       
                        <div class="w-full flex items-center justify-between mt-6">
                              <a href="/gintaa-food/vendor/register-restaurant/step-6" class=" bg-transparent border border-firoza text-firoza font-bold py-1 px-3 h-11 mr-10 w-full rounded text-base flex items-center justify-center">
                                   <svg width="20" height="13" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M27.125 8.99996C27.125 8.75132 27.0262 8.51287 26.8504 8.33705C26.6746 8.16124 26.4361 8.06246 26.1875 8.06246H4.07562L9.97625 2.16371C10.1523 1.98768 10.2512 1.74892 10.2512 1.49996C10.2512 1.25101 10.1523 1.01225 9.97625 0.836213C9.80021 0.660176 9.56145 0.561279 9.3125 0.561279C9.06355 0.561279 8.82479 0.660176 8.64875 0.836213L1.14875 8.33621C1.06144 8.4233 0.992177 8.52675 0.944914 8.64065C0.897652 8.75455 0.873325 8.87665 0.873325 8.99996C0.873325 9.12328 0.897652 9.24538 0.944914 9.35928C0.992177 9.47317 1.06144 9.57663 1.14875 9.66371L8.64875 17.1637C8.82479 17.3398 9.06355 17.4386 9.3125 17.4386C9.56145 17.4386 9.80021 17.3398 9.97625 17.1637C10.1523 16.9877 10.2512 16.7489 10.2512 16.5C10.2512 16.251 10.1523 16.0123 9.97625 15.8362L4.07562 9.93746H26.1875C26.4361 9.93746 26.6746 9.83869 26.8504 9.66288C27.0262 9.48706 27.125 9.2486 27.125 8.99996V8.99996Z" fill="#48CEF3"/>
                                   </svg>
                                   <span class="pl-1">Back</span> 
                              </a>

                              <a href="/gintaa-food/vendor/register-restaurant/step-8" class="bg-firoza text-white font-bold py-1 px-3 h-11 ml-10 w-full rounded text-base flex items-center justify-center">
                              <span class="pr-1">Submit</span>                              
                              </a>
                         </div>
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
       name: 'stepSavenPage',
  
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
    