<template>
  <section
    class="bg-[#ffffff] sm:bg-[#e6e8f0] rounded  min-h-screen flex flex-col justify-center  md:py-6 sm:px-6 lg:px-8 sm:bg-login-bg bg-cover bg-top">
    
    <fullPageLoader v-if="showLoader" />
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 sm:shadow sm:rounded-lg sm:px-10 relative">
           <a @click="logout()" class="cursor-pointer absolute top-2 right-3  text-xs text-gray-500 cursor-pointer">Logout</a>
        <div class="w-full flex justify-center items-center relative">
          <div class="user-profile relative bg-white cursor-pointer rounded-full flex justify-center  items-center ">
            <div
              class="w-[110px] h-[110px]  items-center justify-center flex rounded-full border-4 border-green">
              <!-- <img  src="https://dev.cdn.gintaa.com/users/ckytGO6QvjRr4S6oVZhOrp8BK2o2/avatar/10jK1QUtfOvatRjKZmaeld_pexelssteinegilliland1933239.jpg" alt="iamges" class="rounded-full w-[110px] h-[110px]"> -->
              <img v-if="restaurantInfo.photoUrl" :src="restaurantInfo.photoUrl" alt="images" class="rounded-full w-[70px] h-[70px]" >
              <img v-else src="~/assets/images/profile/chatu-noimg.svg" alt="images" class="rounded-full" width="70" height="70">
            </div>
            <!-- <div class="absolute top-2.5 -right-2 profile-pdetete z-40">
              <div class=" flex justify-center items-center bg-white rounded w-7 h-7 ">
                <svg width="16" height="16" viewBox="0 0 24 28" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                    fill="#FC2323"></path>
                </svg>
              </div>
            </div> -->
            <div class="absolute bottom-2.5 right-0 profile-pdetete z-40">
              <a href="javascript:;" @click="$refs.file.click()">
                <div class="flex justify-center items-center bg-white rounded w-7 h-7 border border-gray-50">
                  <svg width="16" height="16" viewBox="0 0 27 27" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                      fill="rgb(245 158 11)"></path>
                  </svg>
                  <!-- <input type="file" accept="image/*" class="hidden"> -->
                  <input type="file" ref="file" @change="uploadImage($event)" accept="image/*" class="hidden" />
                        
                </div>
              </a>              
            </div>
          </div>
        </div>
          <p 
            v-if="validation.photoUrl.errMsg"
            class="text-xs text-red-600">
            {{validation.photoUrl.errMsg}}
          </p>

        <div class="mt-3 text-center">
          <div class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Restaurant Info</div>
          
        </div>

        <div class="relative z-0 w-full mt-4">
          <input 
            type="number" 
            name="fssaiNumber" 
            placeholder=" "  
            autocomplete="off" 
            v-model="restaurantInfo.fssaiNumber"
            @input="handleChange('fssaiNumber')"
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />

          <label for="fssaiNumber" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">
            Fssai License Number
          </label>
          <p 
            v-if="validation.fssaiNumber.errMsg"
            class="text-xs text-red-600">
            {{validation.fssaiNumber.errMsg}}
          </p>
        </div>

        <div class="relative z-0 w-full mt-4">
          <input 
            type="text" 
            name="trade" 
            placeholder=" "  
            autocomplete="off" 
            v-model="restaurantInfo.licenseNumber"
            @input="handleChange('licenseNumber')"
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />

          <label for="trade" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">
            Trade License
          </label>
          <p 
            v-if="validation.licenseNumber.errMsg"
            class="text-xs text-red-600">
            {{validation.licenseNumber.errMsg}}
          </p>
        </div>


        <div  class="relative z-0 w-full mt-6">
          <input type="text" 
            name="name" placeholder=" " 
            autocomplete="off"
            v-model="restaurantInfo.gstNumber"
            :disabled="isNotgstregistered"
            @input="handleChange('gstNumber')"
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
          <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">
            Enter GST Number
          </label>
          <p 
            v-if="validation.gstNumber.errMsg"
            class="text-xs text-red-600">
            {{validation.gstNumber.errMsg}}
          </p>
        </div>

        <div class="mt-2 text-[11px] text-slate-400 ">
          <label class="flex  text-gray-500">
            <input class="mr-2 leading-tight" type="checkbox" :checked = "isNotgstregistered" @click="onClickinggstUnregisterd()" >
            GST Not Available
          </label>
        </div>

        <div v-show="!isNotgstregistered" class="relative z-0 w-full mt-6">
          <select 
            placeholder="" 
            name="gstPercent"
            v-model="restaurantInfo.gstPercent"
            @change="handleChange('gstPercent')"
            class="text-gray-500  block w-full mt-0 bg-transparent border-0 border-b appearance-none  focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm pl-1 pb-2 pt-2">
            <option :value="null" class="p-1">Select GST</option>
            <option :value="5" class="p-1">5%</option>
            <!-- <option value="12" class="p-1">12%</option> -->
            <option :value="18" class="p-1">18%</option>
          </select>
          <label for="gstPercent" class=" absolute  duration-300 top-3 -z-1  origin-0 text-gray-500 text-sm "> 
            GST Percentage
          </label>
          <span class="absolute right-0 top-[15px] -z-50">
            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round" stroke-linejoin="round">
              </path>
            </svg>
          </span>
        </div>

        <div class="relative z-0 w-full mt-6">
          <input 
            type="number" 
            name="minOrderPrice"
            placeholder=" " 
            autocomplete="off" 
            v-model="restaurantInfo.minOrderPrice"
            @input="handleChange('minOrderPrice')"
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />

          <label for="minOrderPrice" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">
            Minimum Order Value
          </label>
          <p 
            v-if="validation.minOrderPrice.errMsg"
            class="text-xs text-red-600">
            {{validation.minOrderPrice.errMsg}}
          </p>
        </div>
        <!-- <div class="relative z-0 w-full mt-6">
          <input type="number" name="order" placeholder=" " required autocomplete="off"
            v-model="restaurantInfo.minOrderPrice"  class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
          <label for="order" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Minimum Order Value
            (For free delivery)</label>
        </div> -->

        <div class="relative z-0 w-full mt-6">
          <input 
            type="number" 
            name="dltime" 
            placeholder=" " 
            autocomplete="off" 
            v-model="restaurantInfo.deliveryTime"
            @input="handleChange('deliveryTime')"
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
          <label for="dltime" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">
            Estimate Delivery Time(Mins)
          </label>
          <p 
            v-if="validation.deliveryTime.errMsg"
            class="text-xs text-red-600">
            {{validation.deliveryTime.errMsg}}
          </p>
        </div>

        <div class="relative z-0 w-full mt-6">
          <input 
            type="number" 
            name="deliveryCharge" 
            placeholder=" " 
            autocomplete="off" 
            v-model="restaurantInfo.deliveryCharge"
            @input="handleChange('deliveryCharge')"
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
          <label for="deliveryCharge" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">
            Delivery Charge
          </label>
          <p 
            v-if="validation.deliveryCharge.errMsg"
            class="text-xs text-red-600">
            {{validation.deliveryCharge.errMsg}}
          </p>
        </div>

        <div class="relative z-0 w-full mt-6">
          <input 
            type="number" 
            name="discountPercent" 
            placeholder=" "  
            autocomplete="off"
            v-model="restaurantInfo.discountPercent"
            @input="handleChange('discountPercent')"
            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
          <label for="discountPercent" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">
            Discount percentage(%)
          </label>
          <p 
            v-if="validation.discountPercent.errMsg"
            class="text-xs text-red-600">
            {{validation.discountPercent.errMsg}}
          </p>
                                        
        </div>

        <div v-if="restaurantInfo.location" class="relative z-0 w-full mt-5">
          <div class="pb-2 text-[13px] font-medium text-gray-600">Address</div>
         <div class="text-xs text-gray-500"> {{ processDisplayAddress(restaurantInfo.location) }}</div>
        </div>
        
        <div class="w-full flex flex-col mt-5 hidden">
        <div class="text-sm text-gray-900 font-medium">Restaurant operational hours</div>
        <div class="flex flex-col w-64 mt-3">
                      <div class="flex items-center justify-between mb-2">
                          <div class="text-sm text-gray-700 font-normal w-[100px] flex items-center justify-center">Opens at</div>
                          <div class="text-sm text-gray-700 font-normal w-[100px] flex items-center justify-center">Closes at</div>
                      </div>
                      <div class="flex items-center justify-between relative mb-3">
                          <div class="text-sm text-gray-700 font-normal border border-gray-400 rounded px-2 py-1 w-[100px] h-8 flex items-center justify-center"> <span>7:30 am</span></div>
                          <div class="text-base text-gray-700 font-normal">to</div>
                          <div class="text-sm text-gray-700 font-normal border border-gray-400 rounded px-2 py-1 w-[100px] h-8 flex items-center justify-center"><span>9:30 pm</span></div>
                          <!-- <div class="flex justify-center items-center bg-white rounded-sm shadow cursor-pointer w-7 h-7 absolute right-[-40px]"><svg width="18" height="18" viewBox="0 0 24 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z" fill="#FC2323"></path></svg></div> -->
                      </div>
                      <div class="flex items-center justify-between relative mb-3">
                          <div class="text-sm text-gray-700 font-normal border border-gray-400 rounded px-2 py-1 w-[100px] h-8 flex items-center justify-center"> <span>7:30 am</span></div>
                          <div class="text-base text-gray-700 font-normal">to</div>
                          <div class="text-sm text-gray-700 font-normal border border-gray-400 rounded px-2 py-1 w-[100px] h-8 flex items-center justify-center"><span>9:30 pm</span></div>
                          <div class="flex justify-center items-center bg-white rounded-sm shadow cursor-pointer w-7 h-7 absolute right-[-40px]"><svg width="18" height="18" viewBox="0 0 24 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z" fill="#FC2323"></path></svg></div>
                      </div>
                      <button type="button" class="border border-firoza flex justify-center mt-2 items-center bg-transparent
                                 py-1 px-1 rounded text-firoza font-normal text-sm w-[130px]">
                             <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                   <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                             </svg>
                      <span>Add time solts </span>
                      </button>
        </div>
        </div>

        <div class="mt-6 text-[11px] text-slate-400 ">
          <label class="flex  text-gray-500">
      <input class="mr-2 leading-tight" type="checkbox" :checked = "istermContionChecked" @click="onClickingCheckAndUncheck()" >
      
        By continuing, you agree to our <a :href="localePath('/legal/gintaa-food/restaurant-terms-condition')" class="text-firoza font-medium" target="_blank">Terms Of Service</a> 
      
    </label>
          </div>

        <a v-if="!restaurantInfo.location" @click="addAddress()" class="border text-center mt-5 border-firoza rounded-sm w-full block  py-2 text-xs text-firoza cursor-pointer">Add address</a>
        

        <div v-if="workingIntervals.length" class="flex flex-col w-full mt-10 pt-5 px-4 sm:px-6 md:px-6 border-t border-slate-200 ">
              <div class="w-full flex justify-between">
                <div class="flex flex-col">
                  <div class="text-base text-gray-900 font-medium">Restaurant operational hours</div>
                  
                </div>
                 
              
              </div>
              <div class="flex flex-col w-64 mt-6">
                <div class="flex items-center justify-between mb-2">
                  <div class="text-sm text-gray-700 font-normal w-[100px] flex items-center justify-center">Opens at</div>
                  <div class="text-sm text-gray-700 font-normal w-[100px] flex items-center justify-center">Closes at
                  </div>
                </div>
                <div v-if="workingIntervals && workingIntervals.length">
                <div v-for="(item, index) in workingIntervals " :key="index"
                  class="flex items-center justify-between relative mb-5">
                  <div
                    class="text-sm text-gray-700 font-normal border border-gray-400 rounded px-2 py-1 w-[100px] h-8 flex items-center justify-center">
                    <span>{{ tConvert(item.openingTime) }} </span>
                  </div>
                  <div class="text-base text-gray-700 font-normal">to</div>
                  <div
                    class="text-sm text-gray-700 font-normal border border-granmkl;[]\y-400 rounded px-2 py-1 w-[100px] h-8 flex items-center justify-center">
                    <span>{{ tConvert(item.closingTime) }} </span>
                  </div>
                  <div
                    class="flex justify-center items-center bg-white rounded-sm shadow cursor-pointer w-7 h-7 absolute right-[-40px]">
                    <svg @click="deleteTImeInterval(item)" width="18" height="18" viewBox="0 0 24 28" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                        fill="#FC2323"></path>
                    </svg>
                  </div>
                  <a @click="editResOperationHour(item)" class="flex justify-center items-center border border-amber-500 rounded cursor-pointer w-7 h-7 absolute right-[-80px]"><svg width="16" height="16" viewBox="0 0 27 27" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z" fill="rgb(245 158 11)"></path></svg></a>
                </div>
              </div>
                
                
              </div>
            </div>

        <button type="button" @click="addTimeSlots()" class="border border-firoza flex justify-center mt-2 items-center bg-transparent
                                           py-1 px-1 rounded text-firoza font-normal text-sm w-[130px]">
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd" />
                  </svg>
                  <span>Add time slots </span>
                </button>
        <div class="mt-5 sm:mt-6 flex items-center justify-center">
          <a 
            href="javascript:;" 
            type="button" 
            v-if="
              !validation.photoUrl.valid 
              || !validation.fssaiNumber.valid
              || !validation.licenseNumber.valid
              || !validation.minOrderPrice.valid
              || !validation.gstNumber.valid
              || !validation.gstPercent.valid
              || !validation.deliveryTime.valid
              || !validation.discountPercent.valid
              || !validation.deliveryCharge.valid
              || !validation.location.valid
              || !istermContionChecked
            "
            class="opacity-50 inline-flex w-full justify-center rounded border border-transparent bg-firoza px-4 py-2 text-base font-medium text-white shadow-sm sm:text-sm"
            >
            Submit
          </a>
          <a 
            v-else
            href="javascript:;" 
            type="button" 
            @click="saveRestaurantInfo()"
            class="inline-flex w-full justify-center rounded border border-transparent bg-firoza px-4 py-2 text-base font-medium text-white shadow-sm sm:text-sm"
            >
            Submit
          </a>


            <!-- !restaurantInfo.photoUrl 
              || !restaurantInfo.fssaiNumber
              || !restaurantInfo.licenseNumber
              || !restaurantInfo.minOrderPrice
              || !restaurantInfo.gstNumber
              || !restaurantInfo.gstPercent
              || !restaurantInfo.deliveryTime
              || (restaurantInfo.discountPercent !== null && restaurantInfo.discountPercent !== '')
              || !restaurantInfo.deliveryCharge
              || !restaurantInfo.location -->
        </div>
      </div>
    </div>
    <CropImage v-if="image.src" :image="image" @updateUserData="updateUserData"/>
    

    <GintaaFoodModalGMap 
      v-if="showaddAddressModal" 
      @closeMapModal="closeMapModal"
      @savedAddress="savedAddress"
      />

      <resturantOperationalHour v-if="showaddTimeSlotModal" @closeaddIntevalModal="closeaddIntevalModal" @addedInterValTime="addedInterValTime" />

      <editResturantOperationalHour v-if="showEdittimeModal" @closeeditIntevalModal="closeeditIntevalModal" :editeditem="editeditem" :workingIntervals = "workingIntervals" @editedInterValTime="editedInterValTime"/>

                  <!-- Time Interval delete confirm modal start -->
                  <div v-if="deleteTimeIntervalModal" class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="inline-block bg-white rounded-lg text-left shadow-xl transform transition-all align-middle max-w-md w-full pt-3">
            <button @click="cancelDltTimeInterval()" type="button" id="close-btns"
              class="absolute z-40 top-0 right-0 inline-flex rounded-md border border-transparent px-4 py-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                  fill="black" fill-opacity="0.3"></path>
              </svg>
            </button>
            <div class="flex flex-col w-full px-6">
              <h1 class="text-base text-gray-900 font-normal">Confirmation</h1>
            </div>
            <div class="w-full flex justify-center items-center pt-3 px-6 mt-1">
              <div class="rounded-full border border-dotted border-red-600 w-12 h-12 flex justify-center items-center">
                <svg width="25" height="25" viewBox="0 0 24 28" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                    fill="#FC2323"></path>
                </svg>
              </div>
            </div>
            <div class="w-full flex justify-center items-center pt-1 px-6 mt-3">
              <div class="text-sm text-gray-500 text-center">Are you sure you want to delete this time Interval  </div>
            </div>
            <div class="w-full flex justify-center items-center px-6">
              <div class="text-sm text-red-600 text-center">permanently?</div>
            </div>
            <div class="w-full flex items-center justify-between mt-10 px-6 bg-gray-50 py-1 rounded-br-lg rounded-bl-lg">
              <button @click="cancelDltTimeInterval()" type="submit" class="flex items-center justify-center text-center mr-6 py-1 px-3 h-12 rounded border-0 border-gray-300 w-30 text-base leading-10 font-bold text-gray-400
                             w-full"> <span>Cancel </span>
              </button>

              <button type="submit" @click="confirmDeleteTimeInterval()"
                class="transition-all w-full flex justify-center ml-3 items-center border border-red-500
                           bg-red-500 py-2 px-6 rounded font-normal text-base text-white hover:bg-firoza hover:border-firoza">
                <span v-show="!loading">Yes
                  Delete</span>
                <Spinner v-show="loading" />
                <svg role="status" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-firoza" style="display: none;">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"></path>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- Time Interval delete confirm modal end-->
    

  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import { mapState } from "vuex";
export default {
  name: 'signup',
  components: {
    Cropper
  },
  data() {
    return {
      showEdittimeModal:false,
      editeditem : {},
      deletedInterval: {
        rid: '',
        workingIntervals: [
        ]
      },
      loading : false,
      deleteTimeIntervalModal: false,
      workingIntervals : [],
      showaddTimeSlotModal:false,
      istermContionChecked:true,
      isNotgstregistered:false,
      showaddAddressModal:false,
      showLoader: true,
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
        location: null
      },
      image: {
        src: null,
        type: null, //"image/jpg",
        name: null
      },

      errorMessage: {
        photoUrl        : null,
        fssaiNumber     : null,
        licenseNumber   : null,
        minOrderPrice   : null,
        gstNumber       : null,
        gstPercent      : null,
        deliveryTime    : null,
        discountPercent : null,
        deliveryCharge  : null,
      },

      validation: {
        photoUrl        : {
          errMsg: null,
          valid: false
        },
        fssaiNumber     : {
          errMsg: null,
          valid: false
        },
        licenseNumber   : {
          errMsg: null,
          valid: false
        },
        minOrderPrice   : {
          errMsg: null,
          valid: false
        },
        gstNumber       : {
          errMsg: null,
          valid: false
        },
        gstPercent      : {
          errMsg: null,
          valid: false
        },
        deliveryTime    : {
          errMsg: null,
          valid: false
        },
        discountPercent : {
          errMsg: null,
          valid: false
        },
        deliveryCharge  : {
          errMsg: null,
          valid: false
        },
        location  : {
          errMsg: null,
          valid: false
        },
      }

    }
  },

  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
  },
  mounted(){
    if(this.authUser && this.authUser.uid){
      this.restaurantInfo.rid = this.authUser.uid
      this.getRestaurantDetails() 
    }
  },
  methods: {

    closeeditIntevalModal(){
    this.showEdittimeModal = false
    },

    editedInterValTime(resIntervalLst){
    this.closeeditIntevalModal()
    this.workingIntervals = resIntervalLst
    },

    editResOperationHour(editeditem){
     console.log("editeditem",editeditem)
     this.editeditem = editeditem
     this.showEdittimeModal = true
    },

    cancelDltTimeInterval(){
      this.deleteTimeIntervalModal = false
      this.deletedInterval.workingIntervals = []
    },

    closeaddIntevalModal(){
      this.showaddTimeSlotModal = false
    },

    addedInterValTime(workIntervalList){
     this.workingIntervals = workIntervalList
     this.closeaddIntevalModal()
    },

    deleteTImeInterval(item) {
      console.log("item", item)
      if(this.deletedInterval.workingIntervals.length){
        this.deletedInterval.workingIntervals = []
      }
      this.deletedInterval.rid = this.authUser?.uid
      this.deletedInterval.workingIntervals.push(item.id)
      this.deleteTimeIntervalModal = true

      console.log("this.deletedInterval",this.deletedInterval)
    }, 

async confirmDeleteTimeInterval(){
      console.log("this.deletedInterval",this.deletedInterval)
      let postObj = this.deletedInterval
      console.log("postObj",postObj)
      //let params = {this.deletedInterval}
      this.loading = true
      try {
        const url = `/flisting/v1/restaurant/working-intervals`
        const data = await this.$axios.$delete(url,{data:postObj});
        if (data.success) {
          Vue.$toast.success(data?.message);
         // this.cancelDlt()
          this.getRestaurantDetails()
          this.deleteTimeIntervalModal = false
          this.deletedInterval.workingIntervals = []
        }
        this.loading = false
      } catch (error: any) {
        this.deletedInterval.workingIntervals = []
        this.loading = false
        Vue.$toast.error(error?.response?.data?.message);
        console.log(error);
      }
    },

    tConvert(time) {
      // Check correct time format and split into components
      time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

      if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join(''); // return adjusted time or original string
    },

    addTimeSlots(){
     this.showaddTimeSlotModal = true
    },

    onClickinggstUnregisterd(){
      this.isNotgstregistered = !this.isNotgstregistered
      if(this.isNotgstregistered){
        this.validation.gstNumber.errMsg = null
        this.validation.gstNumber.valid = true
        this.restaurantInfo.gstNumber  = 'UNREGISTERED'
        this.restaurantInfo.gstPercent = 5
        this.validation.gstPercent.valid = true
      }else{
        this.validation.gstNumber.valid = false
        this.restaurantInfo.gstNumber  = null
      }
      
    console.log("isNotgstregistered",this.isNotgstregistered)
    },
    onClickingCheckAndUncheck(){
      this.istermContionChecked = !this.istermContionChecked
    console.log("istermContionChecked",this.istermContionChecked)
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

    addAddress(){
     this.showaddAddressModal = true
    },
    closeMapModal(){
      this.showaddAddressModal = false
    },
    async saveRestaurantInfo() {
      this.showLoader = true
      console.log('restaurantInfo:',this.restaurantInfo)

      if(this.restaurantInfo.gstNumber === 'UNREGISTERED'){
        this.restaurantInfo.gstPercent = 0
      }
      
      // return 
      try{
        const url = '/flisting/v1/restaurant'
        const data = await this.$axios.$put(url, this.restaurantInfo);
        console.log('Update Restaurant info:', data)
        
        setTimeout(()=>{
          this.showLoader = false
          this.$router.push(this.localePath('/gintaa-food/vendor'));
        }, 500)
        
      } catch(err){
        this.showLoader = false
        console.log(err)
      }
    },

    async getRestaurantDetails() {
      try {
        const url = `/flisting/v1/restaurant/${this.restaurantInfo.rid}`
        const data = await this.$axios.$get(url);
        if(data && data.payload){
          const restaurantData = data.payload

          if( restaurantData && restaurantData.photoUrl){
            this.restaurantInfo.photoUrl = restaurantData.photoUrl
            this.validation.photoUrl.valid = true
          }
          
          this.restaurantInfo.fssaiNumber     = restaurantData.fssaiNumber
          this.restaurantInfo.gstNumber       = restaurantData.gstNumber
          this.restaurantInfo.gstPercent      = restaurantData.gstPercent
          this.restaurantInfo.minOrderPrice   = restaurantData.minOrderPrice
          this.restaurantInfo.location        = restaurantData.location
          this.restaurantInfo.licenseNumber   = restaurantData.licenseNumber
          this.restaurantInfo.deliveryTime    = restaurantData.deliveryTime
          this.restaurantInfo.discountPercent = restaurantData.discountPercent
          this.restaurantInfo.deliveryCharge  = restaurantData.deliveryCharge

          console.log("restaurantData.workingIntervals",restaurantData.workingIntervals)

          if(restaurantData.workingIntervals !== null ){
          this.workingIntervals = restaurantData.workingIntervals ? restaurantData.workingIntervals : []
          }else if( restaurantData.workingIntervals == null){
            this.workingIntervals = []
          }
          

          if(this.restaurantInfo.fssaiNumber){
            this.validation.fssaiNumber.valid = true
          }
          if(this.restaurantInfo.gstNumber){
            this.validation.gstNumber.valid = true
          }
          if(this.restaurantInfo.gstNumber && this.restaurantInfo.gstNumber === 'UNREGISTERED'){
            this.isNotgstregistered = true
          }

          if(this.restaurantInfo.gstPercent){
            this.validation.gstPercent.valid = true
          }
          if(this.restaurantInfo.minOrderPrice){
            this.validation.minOrderPrice.valid = true
          }
          if(this.restaurantInfo.location){
            this.validation.location.valid = true
          }
          if(this.restaurantInfo.licenseNumber){
            this.validation.licenseNumber.valid = true
          }
          if(this.restaurantInfo.deliveryTime){
            this.validation.deliveryTime.valid = true
          }
          if(this.restaurantInfo.discountPercent){
            this.validation.discountPercent.valid = true
          }
          if(this.restaurantInfo.deliveryCharge){
            this.validation.deliveryCharge.valid = true
          }

        }

        this.showLoader = false

        
      } catch (error) {
        this.showLoader = false
        console.log(error);

      }
    },

    updateUserData(userData: any){
      console.log('uploadProfileImage uData:', userData)
      if(userData && userData.payload){
        const photoUrl = userData.payload.photoUrl
        this.restaurantInfo.photoUrl = photoUrl
        this.validation.photoUrl.valid = true
      }
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
        this.validation.location.valid = true
      }
    },
    handleChange(fieldName: string){
      console.log('fieldName:', fieldName)
      switch (fieldName) {
        case 'fssaiNumber':

          this.validation.fssaiNumber.valid = false
          if(!this.restaurantInfo.fssaiNumber){
            this.validation.fssaiNumber.errMsg = "Fssai Number is required"
          } else if(this.restaurantInfo.fssaiNumber.length !== 14){
            this.validation.fssaiNumber.errMsg = "Fssai Number should be 14 digits"
          } else {
            this.validation.fssaiNumber.errMsg = null
            this.validation.fssaiNumber.valid = true
          }

          break;
        case 'licenseNumber':
          
          this.validation.licenseNumber.valid = false
          if(!this.restaurantInfo.licenseNumber){
            this.validation.licenseNumber.errMsg = "Trade License is required"
          } else {
            this.validation.licenseNumber.errMsg = null
            this.validation.licenseNumber.valid = true
          }

          break;
        case 'gstNumber':
          
          this.validation.gstNumber.valid = false
          if(!this.restaurantInfo.gstNumber){
            this.validation.gstNumber.errMsg = "GST number is required"
          } else {
            let reg = RegExp("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$");
            if(!reg.test(this.restaurantInfo.gstNumber)){
              this.validation.gstNumber.errMsg = "Please provide a valid GST number"
            } else {
              this.validation.gstNumber.errMsg = null
              this.validation.gstNumber.valid = true
            }
          }

          break;
        case 'gstPercent':          
          // No need to validate
          this.validation.gstPercent.valid = false
          if(!this.restaurantInfo.gstPercent){
            this.validation.gstPercent.errMsg = "GST Percent is required"
           } else {
            this.validation.gstPercent.errMsg = null
            this.validation.gstPercent.valid = true
          }
          break;
        case 'minOrderPrice':
          
          this.validation.minOrderPrice.valid = false
          if(!this.restaurantInfo.minOrderPrice){
            this.validation.minOrderPrice.errMsg = "Minimum order price is required"
          } else if(this.restaurantInfo.minOrderPrice.length > 5){
            this.validation.minOrderPrice.errMsg = "Minimum order price shuld withing 0 to 99999"
          } else {
            this.validation.minOrderPrice.errMsg = null
            this.validation.minOrderPrice.valid = true
          }

          break;
        case 'deliveryTime':
        
          this.validation.deliveryTime.valid = false
          if(!this.restaurantInfo.deliveryTime){
            this.validation.deliveryTime.errMsg = "Estimate Delivery Time is required"
          } else if(this.restaurantInfo.deliveryTime > 120){
            this.validation.deliveryTime.errMsg = "Estimate Delivery Time should not be more than 120 minutes"
          } else {
            this.validation.deliveryTime.errMsg = null
            this.validation.deliveryTime.valid = true
          }

          break;
        case 'discountPercent':
          
          this.validation.discountPercent.valid = false
          if(this.restaurantInfo.discountPercent === null){
            this.validation.discountPercent.errMsg = "Discount Percent is required"
          } else if(this.restaurantInfo.discountPercent > 100){
            this.validation.discountPercent.errMsg = "Discount Percent should not be more than 100"
          } else {
            this.validation.discountPercent.errMsg = null
            this.validation.discountPercent.valid = true
          }

          break;
        case 'deliveryCharge':
          
          this.validation.deliveryCharge.valid  = false
          if(this.restaurantInfo.deliveryCharge === null){
            this.validation.deliveryCharge.errMsg = "Delivery Charge is required"
          } else if(this.restaurantInfo.deliveryCharge >= 1000){
            this.validation.deliveryCharge.errMsg = "Delivery Charge should not be more than 999"
          } else {
            this.validation.deliveryCharge.errMsg = null
            this.validation.deliveryCharge.valid  = true
          }

          break;
        default:
          // text = "Looking forward to the Weekend";
      }
      
      console.log('validation:', this.validation)
    }
  }
}
</script>

<style>
.-z-1 {
  z-index: -1;
}

.vue-advanced-cropper__foreground,
.vue-advanced-cropper__background {
  background: #f9f9f9 !important;
  width: 100% !important;
}


.origin-0 {
  transform-origin: 0%;
}

input[type="text"]:focus~label,
input[type="email"]:focus~label,
input[type="number"]:focus~label,
input[type="text"]:not(:placeholder-shown)~label,
input[type="email"]:not(:placeholder-shown)~label,
input[type="number"]:not(:placeholder-shown)~label,
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

input[type="text"]:focus~label,
input[type="email"]:focus~label, input[type="number"]:focus~label,
select:focus~label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(72, 206, 243, var(--tw-text-opacity));
  left: 0px;
}

input[type="text"]:not(:placeholder-shown)~label,
select:not([value='']):valid~label {
  color: rgba(72, 206, 243, var(--tw-text-opacity));
}
</style>