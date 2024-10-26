<template>

                <div class="basis-full sm:basis-full md:basis-full lg:basis-1/2">
                     <div class="w-full pr-0 pl-0 sm:pr-0 sm:pl-0 md:pr-0 md:pl-0 lg:pr-10 lg:pl-6">
                         <div class="w-full flex items-center justify-between mb-4">
                              <a  href="/gintaa-food" title="gintaa" class="block">
                                   <img src="~/assets/images/food/food-logo.svg" alt="logo" class="w-[100px]"></a>
                                   <a href="/gintaa-food" class="flex items-center">
                                        <svg width="18" height="14" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.125 9.00021C27.125 8.75157 27.0262 8.51311 26.8504 8.3373C26.6746 8.16148 26.4361 8.06271 26.1875 8.06271H4.07562L9.97625 2.16396C10.1523 1.98792 10.2512 1.74916 10.2512 1.50021C10.2512 1.25125 10.1523 1.01249 9.97625 0.836457C9.80021 0.66042 9.56145 0.561523 9.3125 0.561523C9.06355 0.561523 8.82479 0.66042 8.64875 0.836457L1.14875 8.33646C1.06144 8.42354 0.992177 8.527 0.944914 8.64089C0.897652 8.75479 0.873325 8.87689 0.873325 9.00021C0.873325 9.12352 0.897652 9.24562 0.944914 9.35952C0.992177 9.47342 1.06144 9.57687 1.14875 9.66396L8.64875 17.164C8.82479 17.34 9.06355 17.4389 9.3125 17.4389C9.56145 17.4389 9.80021 17.34 9.97625 17.164C10.1523 16.9879 10.2512 16.7492 10.2512 16.5002C10.2512 16.2513 10.1523 16.0125 9.97625 15.8365L4.07562 9.93771H26.1875C26.4361 9.93771 26.6746 9.83894 26.8504 9.66312C27.0262 9.48731 27.125 9.24885 27.125 9.00021V9.00021Z" fill="#48CEF3"/>
                                         </svg>
                                        <div class="text-sm text-firoza font-medium pl-1">{{ $t('backHome') }}</div>
                                   </a>
                          </div>
                          <div class="text-2xl font-medium text-[#216B7C] mb-8 hidden sm:hidden md:hidden lg:block">{{ $t('restaurantBusinessTitle') }}</div>
                          <div class="hidden flex-col pl-0 sm:hidden md:hidden lg:flex">
                              <div class="flex items-center mb-6">
                                   <div class="flex-shrink-0 w-[102px] flex items-center justify-center">
                                         <img src="~/assets/images/food/reg-1.svg" alt="image" class="w-[78px]" />
                                   </div>
                                   <div class="ml-6">
                                        <div class="text-sm text-[#3A3A3A] font-medium">{{ $t('lowestCommission') }}</div>
                                        <div class="text-xs text-gray-500 mt-1">{{ $t('lowestCommissionPara') }}</div>
                                   </div>
                              </div>

                              <div class="flex items-center mb-6">
                                   <div class="flex-shrink-0 w-[102px] flex items-center justify-center">
                                         <img src="~/assets/images/food/reg-2.svg" alt="image" class="w-[68px]" />
                                   </div>
                                   <div class="ml-6">
                                        <div class="text-sm text-[#3A3A3A] font-medium">{{ $t('fastestCredit') }}</div>
                                        <div class="text-xs text-gray-500 mt-1">{{ $t('fastestCreditPara') }}</div>
                                   </div>
                              </div>

                              <div class="flex items-center mb-6">
                                   <div class="flex-shrink-0 w-[102px] flex items-center justify-center">
                                         <img src="~/assets/images/food/reg-3.svg" alt="image" class="w-[68px]" />
                                   </div>
                                   <div class="ml-6">
                                        <div class="text-sm text-[#3A3A3A] font-medium">{{ $t('moreIncomeAdditional') }}</div>
                                        <div class="text-xs text-gray-500 mt-1">{{ $t('moreIncomeAdditionalPara') }}</div>
                                   </div>
                              </div>

                              <div class="flex items-center mb-6">
                                   <div class="flex-shrink-0 w-[102px] flex items-center justify-center">
                                         <img src="~/assets/images/food/reg-4.svg" alt="image" class="w-[72px]" />
                                   </div>
                                   <div class="ml-6">
                                        <div class="text-sm text-[#3A3A3A] font-medium">{{ $t('getHigherprofits') }}</div>
                                        <div class="text-xs text-gray-500 mt-1">{{ $t('getHigherprofitsPara') }}</div>
                                   </div>
                              </div>

                              <div class="flex items-center">
                                   <div class="flex-shrink-0 w-[102px] flex items-center justify-center">
                                         <img src="~/assets/images/food/reg-5.svg" alt="image" class="w-[72px]" />
                                   </div>
                                   <div class="ml-6">
                                        <div class="text-sm text-[#3A3A3A] font-medium">{{ $t('freeRegistration') }}</div>
                                        <div class="text-xs text-gray-500 mt-1">{{ $t('freeRegistrationPara') }}</div>
                                   </div>
                              </div>
                              <a :href="localePath('/legal/gintaa-food/package-one')" target="_blank" class="w-[250px] flex items-center justify-center border border-firoza text-firoza text-base font-medium px-4 py-2.5 mt-6 rounded">{{ $t('sampleCalculator') }} </a>
                          </div>
                          
                     </div>
                </div>
 
    </template>
    
    
    
    
    
    
    <script lang="ts">    
    import Vue from 'vue'   
    
    export default Vue.extend({     
       name: 'RegisterResSidebar',
  
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
    