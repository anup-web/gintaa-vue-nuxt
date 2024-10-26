<template>
 <div>
   <Header/>
   <section class="bg-[#ffffff] sm:bg-[#e6e8f0] rounded  min-h-screen flex flex-col justify-center  md:py-6 sm:px-6 lg:px-8 sm:bg-login-bg bg-repeat-x bg-bottom">


        <!-- <div class="w-3/6">
          <div class="relative">
            <img src="images/login_bg.png"/>
            <div class="logo absolute top-12 w-full text-center">
                <div class="mb-8 w-full flex justify-center"><img src="images/logo.png"/></div>

                <div class="text-center text-white text-base">
                    <p>Trade, Barter or Bid for Products & <br>Services from Anyone</p>
                </div>
            </div>
          </div>
        </div> -->

        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 sm:shadow sm:rounded-lg sm:px-10 relative">
               <a href="#" class="absolute left-4">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z" fill="#7B7E80"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="#7B7E80"/>
</svg>

              </a>
                
                <form class="">
                    <h2 class="text-left text-xl pb-2 font-bold text-gray-600 pt-8 ">Upload Photo <span class="text-gray-500 font-normal text-xs">(Optional)</span></h2>
                <div class="text-xs text-gray-500 pb-16">Please upload your photo or press next to use this default picture</div>
            
                        <div class=" flex flex-col justify-center items-center p-2">

                            <div class="border-dashed border border-firoza w-40 h-40 rounded-full flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 1C9 0.447715 8.55229 0 8 0C7.44772 0 7 0.447715 7 1V7H1C0.447715 7 0 7.44772 0 8C0 8.55229 0.447715 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H9V1Z" fill="#48CEF3"/>
</svg>


                            </div>

                            <!-- <button class="border-firoza border text-firoza text-base font-medium py-3 px-3 h-13 rounded w-[200px] mt-5 flex items-center justify-center"  >
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" class="mr-3">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C3.79086 2 2 3.79086 2 6V16C2 18.2091 3.79086 20 6 20H16C18.2091 20 20 18.2091 20 16V6C20 3.79086 18.2091 2 16 2H6ZM0 6C0 2.68629 2.68629 0 6 0H16C19.3137 0 22 2.68629 22 6V16C22 19.3137 19.3137 22 16 22H6C2.68629 22 0 19.3137 0 16V6ZM11.4833 7.98918C10.8591 7.89663 10.2217 8.00324 9.66156 8.29387C9.10146 8.58449 8.64726 9.04432 8.36356 9.60797C8.07987 10.1716 7.98112 10.8103 8.08137 11.4333C8.18162 12.0563 8.47575 12.6319 8.92195 13.0781C9.36814 13.5242 9.94366 13.8184 10.5667 13.9186C11.1897 14.0189 11.8284 13.9201 12.392 13.6364C12.9557 13.3527 13.4155 12.8985 13.7061 12.3384C13.9968 11.7783 14.1034 11.1409 14.0108 10.5167C13.9164 9.87999 13.6197 9.29055 13.1646 8.83541C12.7095 8.38028 12.12 8.0836 11.4833 7.98918ZM8.74041 6.51862C9.67391 6.03425 10.7364 5.85655 11.7767 6.01082C12.8378 6.16817 13.8202 6.66265 14.5788 7.4212C15.3374 8.17975 15.8318 9.16216 15.9892 10.2233C16.1434 11.2636 15.9658 12.3261 15.4814 13.2596C14.997 14.1931 14.2306 14.9501 13.2912 15.4229C12.3518 15.8957 11.2872 16.0603 10.2489 15.8932C9.21059 15.7262 8.25138 15.2359 7.50773 14.4923C6.76408 13.7486 6.27385 12.7894 6.10677 11.7511C5.93969 10.7128 6.10427 9.64818 6.57709 8.70879C7.04992 7.76938 7.80692 7.00299 8.74041 6.51862Z" fill="#48CEF3"/>
</svg>
upload photo
                          </button> -->

                        </div>
          
     
   
                    <!-- <div class=mb-4>
                        <label class="block mb-2 text-darkcolor text-sm font-medium">Email or Phone</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-14 focus:outline-none focus:shadow-outline text-sm"  type="text" placeholder="Enter your email or mobile number">
                    </div> -->
                    <div class="flex  mt-16 items-center justify-end" >

                      <!-- <a href="/authentication/complete-signup" class="flex items-center justify-center text-center mr-6 py-1 px-3 h-12 rounded border-0 border-gray-300 w-30  text-base leading-10 font-bold text-gray-400"> 
                       

                        
                        back </a> -->
                      
                      <router-link to="/authentication/add-map" tag="button" class="rounded w-full">
                        <button class="bg-firoza text-white font-bold py-1 px-3 h-12 rounded w-full text-base"  >
                            Next
                          </button>
                      </router-link>
                          
                    </div>
                    
                    
                   
                </form>
               
                
            </div>
        </div>

    
</section>
  <!-- <Footer/> -->
 </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage'
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
