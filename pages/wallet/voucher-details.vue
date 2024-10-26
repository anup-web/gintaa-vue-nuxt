<template>
    <div class="redeem-listing-details-page pt-[80px] lg:pt-12 ">
        <!--//////////header///////////-->
        <Header/>
        <!--////////Breadcrumb//////////-->
            <div class="mx-auto max-w-[1920px] w-[1000px] md:px-8 2xl:px-16 pt-10 hidden md:flex">
             <breadcrumb/>
        </div>
    
        <div class="redeem-product-block py-6 border-b border-gray-300 mb-5">
            <div class="container max-w-8xl mx-auto w-[1000px] md:px-8 2xl:px-16">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div class="product-details-image">
                          <div class="product-img">
                                <img  src="~/assets/images/gift/gift-5.webp" alt="image" width="390" height="390" class="transition duration-200 ease-in" />
                            </div>                       
                    </div>
    
    
    <div class="gift-details-des ">
         <div class="relative mb-3 mt-1">
            <h3 class="font-medium text-sm sm:text-base md:text-xl capitalize text-gray-700 break-words">
              Book my show gift card
            </h3>             
         </div> 

         <div class="w-full flex flex-row">
              <div class="text-sm text-gray-700">Amount</div>
         </div>

        <div  class="w-full flex flex-col mt-2">
          <div class="w-full float-left">
            <div class="form-check relative float-left min-w-[50px] border flex justify-center items-center bg-transparent py-1 px-1 rounded mr-1 mb-2 sm:min-w-[50px] sm:px-1 sm:mr-1 sm:py-1 md:min-w-[90px] md:mr-2 md:px-3 md:py-1.5 lg:min-w-[90px] lg:mr-2 lg:px-3 lg:py-1.5 xl:min-w-[90px] xl:mr-2 xl:px-3 xl:py-1.5 2xl:min-w-[90px] 2xl:mr-2 2xl:px-3 2xl:py-1.5 border-green text-white">
            <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer absolute top-0 left-0 opacity-0" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label text-gray-800 cursor-pointer flex items-center" for="flexRadioDefault1">
               <img  src="~/assets/images/offer/coin-value.svg" alt="coin" class="w-[12px] mr-[1px] sm:w-[12px] sm:mr-[1px] md:w-[18px] md:mr-[5px] lg:w-[18px] lg:mr-[5px] xl:w-[18px] xl:mr-[5px] 2xl:w-[18px] 2xl:mr-[5px]">
                <span  class="font-normal text-xs ml-1 sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-green"> 100 </span>              
            </label>
          </div>

          <div class="form-check relative float-left min-w-[50px] border flex justify-center items-center bg-transparent py-1 px-1 rounded mr-1 mb-2 sm:min-w-[50px] sm:px-1 sm:mr-1 sm:py-1 md:min-w-[90px] md:mr-2 md:px-3 md:py-1.5 lg:min-w-[90px] lg:mr-2 lg:px-3 lg:py-1.5 xl:min-w-[90px] xl:mr-2 xl:px-3 xl:py-1.5 2xl:min-w-[90px] 2xl:mr-2 2xl:px-3 2xl:py-1.5 border-gray-400 text-white">
            <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer absolute top-0 left-0 opacity-0" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
            <label class="form-check-label text-gray-800 cursor-pointer flex items-center" for="flexRadioDefault2">
               <img  src="~/assets/images/offer/coin-value.svg" alt="coin" class="w-[12px] mr-[1px] sm:w-[12px] sm:mr-[1px] md:w-[18px] md:mr-[5px] lg:w-[18px] lg:mr-[5px] xl:w-[18px] xl:mr-[5px] 2xl:w-[18px] 2xl:mr-[5px]">
                <span  class="font-normal text-xs ml-1 sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm text-gray-700"> 100 </span>              
            </label>
          </div>

                
            </div>
        </div>
        
        <div class="w-full flex flex-row mt-2">
            <div class="relative z-0 w-[220px] mb-5">
             <input type="number" name="unitOfferValuation" autocomplete="off" placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" > 
             <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm" >Quantity</label> 
            </div>           
        </div>

        <div class="w-full flex items-center">
          <div class="text-sm text-gray-900 mr-10">Available Balance </div>
          <div class="flex items-center text-base text-gray-900 ">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="9" cy="11" rx="9" ry="4" fill="#FF9500"></ellipse> <path d="M9 19C13.9706 19 18 17.2091 18 15V13C18 15.2091 13.9706 17 9 17C4.02944 17 0 15.2091 0 13V15C0 17.2091 4.02944 19 9 19Z" fill="#FF9500"></path> <path d="M9 23C13.9706 23 18 21.2091 18 19V17C18 19.2091 13.9706 21 9 21C4.02944 21 0 19.2091 0 17V19C0 21.2091 4.02944 23 9 23Z" fill="#FF9500"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 15.3264C22.412 14.6089 24 13.3868 24 12V10C24 11.3868 22.412 12.6089 20 13.3264V15.3264Z" fill="#FF9500"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3731 7.70958C21.6724 7.1164 24 5.679 24 4C24 1.79086 19.9706 0 15 0C10.0294 0 6 1.79086 6 4C6 4.40182 6.13331 4.7898 6.38134 5.15569C7.22592 5.05315 8.10418 5.00001 8.99999 5.00001C11.6981 5.00001 14.237 5.48208 16.1762 6.34396C16.9799 6.70114 17.7416 7.15071 18.3731 7.70958Z" fill="#FF9500"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6631 9.42195C19.8727 9.8968 20.0001 10.4247 20.0001 11V11.3264C22.4121 10.6089 24.0001 9.38685 24.0001 8V6C24.0001 7.45047 22.2631 8.72061 19.6631 9.42195Z" fill="#FF9500"></path></svg> 
              <span class="pl-3">320</span>
          </div>
        </div>

        <div class="relative z-0 mb-8 w-[220px]">
             <textarea name="address" placeholder=" " minlength="2" maxlength="3000" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" ></textarea> 
             <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm" >Address</label> 
        </div>

        <div class="w-full flex flex-row mt-2">
              <div class="text-sm text-gray-700">Share Via link</div>
         </div>

         <div class="w-full flex flex-row mt-2">           
            <div class="relative z-0 w-[220px] mb-4">
             <input type="number" name="unitOfferValuation" autocomplete="off" placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" > 
             <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm" >Email</label> 
            </div>
        </div>
         
        <div class="w-full flex flex-row">
              <div class="text-sm text-red-400">Redeem balance not available added money to wallet</div>
         </div>

        <div class="w-full flex flex-row mt-2">
             <button class="bg-green text-white font-bold py-1 px-3 h-10 sm:h-12 rounded w-40 sm:w-56 text-base capitalize " >
              <span>Buy Now</span>
            </button>
         </div>

         </div>
        </div>
       </div>
    </div>
    
    <div class="single-product-block mb-12">
         <div class="container max-w-8xl mx-auto w-[1000px] md:px-8 2xl:px-16">
            <div class="w-full flex flex-col">
              <div class="w-full flex flex-row">
                  <div class="text-base text-gray-700 font-medium">How to reedem ?</div>
            </div>
            <div class="w-full mt-2">
              <ul class="list-none">
                  <li class="flex items-center mb-1">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" fill="#48CEF3"/></svg>
                    <span class="text-sm text-gray-400 pl-2">Lorem ipsum dolar sit type setting on Lorem ipsum dolar sit type setting on</span>
                  </li>  
                  <li class="flex items-center mb-1">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" fill="#48CEF3"/></svg>
                    <span class="text-sm text-gray-400 pl-2">Lorem ipsum dolar sit type setting on Lorem ipsum dolar sit type setting on</span>
                  </li> 
                  <li class="flex items-center mb-1">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" fill="#48CEF3"/></svg>
                    <span class="text-sm text-gray-400 pl-2">Lorem ipsum dolar sit type setting on Lorem ipsum dolar sit type setting on</span>
                  </li>
                  
              </ul>
              </div>
            </div>

    </div>
    </div>
    
    
     <!--footer section goes here-->
      <Footer/>
     
    <!-- start payment modal -->
      <!-- <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      
      <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
        <div>
          <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green">
            
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Payment successful</h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-firoza px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-firoza focus:outline-none focus:ring-2 focus:ring-firoza focus:ring-offset-2 sm:text-sm">Go back to wallet</button>
        </div>
      </div>
    </div>
  </div>
</div> -->
 <!-- end payment modal -->


    </div>
    </template>
    
    <script lang="ts">
    
    import Vue from 'vue'
    
    
    export default Vue.extend({     
      name: 'voucherdetails',
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
    
    