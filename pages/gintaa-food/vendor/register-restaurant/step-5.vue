<template>
    <div class="checkout-details-page">
        <!--//////////header///////////-->
        <GintaaFoodConsumerHeader/>
       
     <div class="bg-gray-100 pt-[110px] lg:pt-[70px] pb-10">
          <div class="container max-w-3xl mx-auto px-4 md:px-8 2xl:px-16 pt-5">
               <div class="mx-auto pb-14 mt-4 sm:mt-4 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
                         <div class="Text-sm text-gray-700">Welcome to gintaa FOOD, Please complete few more steps to create your restaurant Profile</div>
                         <div class="Text-sm text-gray-700 mt-4">Select any one package</div>
                         <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-2 md:gap-3 lg:gap-5 xl:gap-5 mt-4">
                              <div class="bg-white rounded-md">
                                   
                                   <div class="pay-shadow flex items-center justify-center relative py-6 px-2 pay-1">
                                        <span class="flex items-center relative">
                                             <span class="text-2xl text-white font-bold">Package 1</span>
                                        </span>                                        
                                  </div>
                                  <div class="text-sm text-gray-700 px-4 mt-6">Add your menu on 10% discount compare to other food delivery apps</div>
                                    <div class="mt-6 px-6">
                                        <ul class="list-none">
                                        <li class="flex items-start mb-3 relative pl-3">
                                             <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[4px] absolute top-0 left-0"><path d="M4.999 0.00244141C7.7575 0.00244141 9.9975 2.24244 9.9975 5.00094C9.9975 7.75994 7.7575 9.99994 4.999 9.99994C2.24 9.99994 0 7.75994 0 5.00094C0 2.24244 2.24 0.00244141 4.999 0.00244141ZM2.4745 5.19544L4.4 6.91044C4.471 6.97444 4.5605 7.00544 4.6495 7.00544C4.7505 7.00544 4.852 6.96494 4.9255 6.88444L7.902 3.62994C7.9675 3.55844 8 3.46844 8 3.37894C8 3.17394 7.8345 3.00544 7.626 3.00544C7.524 3.00544 7.4235 3.04644 7.349 3.12694L4.6225 6.10794L2.9735 4.63894C2.9015 4.57544 2.813 4.54394 2.724 4.54394C2.5165 4.54394 2.35 4.71144 2.35 4.91694C2.35 5.01944 2.392 5.12144 2.4745 5.19544Z" fill="#3EE097"></path></svg>
                                             <span class="text-sm text-[#726F6F] pl-2">Gintaa Food Commission at Flat Rs.20/-</span>
                                        </li>
                                         <li class="flex items-start mb-3 relative pl-3">
                                             <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[4px] absolute top-0 left-0"><path d="M4.999 0.00244141C7.7575 0.00244141 9.9975 2.24244 9.9975 5.00094C9.9975 7.75994 7.7575 9.99994 4.999 9.99994C2.24 9.99994 0 7.75994 0 5.00094C0 2.24244 2.24 0.00244141 4.999 0.00244141ZM2.4745 5.19544L4.4 6.91044C4.471 6.97444 4.5605 7.00544 4.6495 7.00544C4.7505 7.00544 4.852 6.96494 4.9255 6.88444L7.902 3.62994C7.9675 3.55844 8 3.46844 8 3.37894C8 3.17394 7.8345 3.00544 7.626 3.00544C7.524 3.00544 7.4235 3.04644 7.349 3.12694L4.6225 6.10794L2.9735 4.63894C2.9015 4.57544 2.813 4.54394 2.724 4.54394C2.5165 4.54394 2.35 4.71144 2.35 4.91694C2.35 5.01944 2.392 5.12144 2.4745 5.19544Z" fill="#3EE097"></path></svg>
                                             <span class="text-sm text-[#726F6F] pl-2">Payment Gateway Charges @ 1.99%</span>
                                        </li> 
                                        <li class="flex items-start mb-3 relative pl-3">
                                             <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[4px] absolute top-0 left-0"><path d="M4.999 0.00244141C7.7575 0.00244141 9.9975 2.24244 9.9975 5.00094C9.9975 7.75994 7.7575 9.99994 4.999 9.99994C2.24 9.99994 0 7.75994 0 5.00094C0 2.24244 2.24 0.00244141 4.999 0.00244141ZM2.4745 5.19544L4.4 6.91044C4.471 6.97444 4.5605 7.00544 4.6495 7.00544C4.7505 7.00544 4.852 6.96494 4.9255 6.88444L7.902 3.62994C7.9675 3.55844 8 3.46844 8 3.37894C8 3.17394 7.8345 3.00544 7.626 3.00544C7.524 3.00544 7.4235 3.04644 7.349 3.12694L4.6225 6.10794L2.9735 4.63894C2.9015 4.57544 2.813 4.54394 2.724 4.54394C2.5165 4.54394 2.35 4.71144 2.35 4.91694C2.35 5.01944 2.392 5.12144 2.4745 5.19544Z" fill="#3EE097"></path></svg>
                                             <span class="text-sm text-[#726F6F] pl-2">GST on Commission+PG Charges @ 18%</span>
                                        </li>                                      
                                   </ul>
                                   </div>
                                   <div class="w-full flex justify-between items-center px-4 mt-16 mb-2">
                                   <a href="#" class=" bg-transparent border border-firoza text-firoza py-1 px-3 h-11 rounded w-full text-sm flex items-center justify-center mr-1">
                                        <span>Sample Calculation</span>                                   
                                   </a>    
                                   <a href="#" class="bg-firoza text-white py-1 px-3 h-11 rounded w-full text-base font-medium flex items-center justify-center ml-1">
                                        <span>Select</span>                                       
                                   </a>
                                 </div>
                              </div>
                              <div class="bg-white rounded-md">
                                 
                                  <div class="pay-shadow flex items-center justify-center py-6 px-2 relative pay-2">
                                   <span class="flex items-center relative">
                                         <span class="text-2xl text-white font-bold">Package 2</span>
                                   </span>                                   
                              </div>

                              <div class="text-sm text-gray-700 px-4 mt-6">Add your menu on 10% discount compare to other food delivery apps</div>
                               <div class="mt-6 px-6">
                                   <ul class="list-none">
                                        <li class="flex items-start mb-3 relative pl-3">
                                             <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[4px] absolute top-0 left-0"><path d="M4.999 0.00244141C7.7575 0.00244141 9.9975 2.24244 9.9975 5.00094C9.9975 7.75994 7.7575 9.99994 4.999 9.99994C2.24 9.99994 0 7.75994 0 5.00094C0 2.24244 2.24 0.00244141 4.999 0.00244141ZM2.4745 5.19544L4.4 6.91044C4.471 6.97444 4.5605 7.00544 4.6495 7.00544C4.7505 7.00544 4.852 6.96494 4.9255 6.88444L7.902 3.62994C7.9675 3.55844 8 3.46844 8 3.37894C8 3.17394 7.8345 3.00544 7.626 3.00544C7.524 3.00544 7.4235 3.04644 7.349 3.12694L4.6225 6.10794L2.9735 4.63894C2.9015 4.57544 2.813 4.54394 2.724 4.54394C2.5165 4.54394 2.35 4.71144 2.35 4.91694C2.35 5.01944 2.392 5.12144 2.4745 5.19544Z" fill="#3EE097"></path></svg>
                                             <span class="text-sm text-[#726F6F] pl-2">Gintaa Food Commission at Flat Rs.20/-</span>
                                        </li>
                                         <li class="flex items-start mb-3 relative pl-3">
                                             <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[4px] absolute top-0 left-0"><path d="M4.999 0.00244141C7.7575 0.00244141 9.9975 2.24244 9.9975 5.00094C9.9975 7.75994 7.7575 9.99994 4.999 9.99994C2.24 9.99994 0 7.75994 0 5.00094C0 2.24244 2.24 0.00244141 4.999 0.00244141ZM2.4745 5.19544L4.4 6.91044C4.471 6.97444 4.5605 7.00544 4.6495 7.00544C4.7505 7.00544 4.852 6.96494 4.9255 6.88444L7.902 3.62994C7.9675 3.55844 8 3.46844 8 3.37894C8 3.17394 7.8345 3.00544 7.626 3.00544C7.524 3.00544 7.4235 3.04644 7.349 3.12694L4.6225 6.10794L2.9735 4.63894C2.9015 4.57544 2.813 4.54394 2.724 4.54394C2.5165 4.54394 2.35 4.71144 2.35 4.91694C2.35 5.01944 2.392 5.12144 2.4745 5.19544Z" fill="#3EE097"></path></svg>
                                             <span class="text-sm text-[#726F6F] pl-2">Payment Gateway Charges @ 1.99%</span>
                                        </li> 
                                        <li class="flex items-start mb-3 relative pl-3">
                                             <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-[4px] absolute top-0 left-0"><path d="M4.999 0.00244141C7.7575 0.00244141 9.9975 2.24244 9.9975 5.00094C9.9975 7.75994 7.7575 9.99994 4.999 9.99994C2.24 9.99994 0 7.75994 0 5.00094C0 2.24244 2.24 0.00244141 4.999 0.00244141ZM2.4745 5.19544L4.4 6.91044C4.471 6.97444 4.5605 7.00544 4.6495 7.00544C4.7505 7.00544 4.852 6.96494 4.9255 6.88444L7.902 3.62994C7.9675 3.55844 8 3.46844 8 3.37894C8 3.17394 7.8345 3.00544 7.626 3.00544C7.524 3.00544 7.4235 3.04644 7.349 3.12694L4.6225 6.10794L2.9735 4.63894C2.9015 4.57544 2.813 4.54394 2.724 4.54394C2.5165 4.54394 2.35 4.71144 2.35 4.91694C2.35 5.01944 2.392 5.12144 2.4745 5.19544Z" fill="#3EE097"></path></svg>
                                             <span class="text-sm text-[#726F6F] pl-2">GST on Commission+PG Charges @ 18%</span>
                                        </li>                                      
                                   </ul>
                              </div> 
                              <div class="w-full flex justify-between items-center px-4 mt-16 mb-2">
                                   <a href="/gintaa-food/vendor/register-restaurant/step-6" class=" bg-transparent border border-firoza text-firoza py-1 px-3 h-11 rounded w-full text-sm flex items-center justify-center mr-1">
                                        <span>Sample Calculation</span>                                   
                                   </a>    
                                   <a href="/gintaa-food/vendor/register-restaurant/step-6" class="bg-firoza text-white py-1 px-3 h-11 rounded w-full text-base font-medium flex items-center justify-center ml-1">
                                        <span>Select</span>                                       
                                   </a>
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
       name: 'stepFivePage',
  
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

.pay-1 {
  background: linear-gradient(102.17deg, #56C23B 15.57%, #8EC23B 72.33%);
}

.pay-2 {
  background: linear-gradient(101.5deg, #29B2E9 24.17%, #4B7CFC 78.46%);
}

.pay-3 {
  background: linear-gradient(102.17deg, #F75D00 15.57%, #F77F00 72.33%);
}

.pay-shadow {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
    