<template>
     <div class="checkout-details-page pt-[80px] lg:pt-12 ">
         <!--//////////header///////////-->
         <GintaaFoodConsumerHeader/>
         <!--////////Breadcrumb//////////-->
         <div class="mx-auto max-w-[1920px] md:px-8 2xl:px-16 pt-10 hidden md:flex">
              <breadcrumb/>
         </div>
       <div class="container max-w-6xl mx-auto px-4 md:px-8 2xl:px-16 pt-5"> 
           <div class="flex flex-col gap-4 sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mb-5">           
                <div class="basis-full sm:basis-3/4 md:basis-2/4 lg:basis-3/5 xl:basis-3/5 2xl:basis-3/5">
                     <div class="w-full rounded border-t-[3px] border-t-[#48cef3] px-6 py-4 bg-white shadow-md">
                          <div class="w-full flex items-center">
                               <div class="text-gray-900 text-base mr-2 font-medium">Delivery address</div> 
                                <div class="w-4 h-4 rounded-full bg-green flex items-center justify-center">
                                   <svg width="8" height="7" viewBox="0 0 22 16" fill="none" >
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1583 1.17508C21.6139 1.63069 21.6139 2.36939 21.1583 2.825L8.32496 15.6583C7.86935 16.1139 7.13065 16.1139 6.67504 15.6583L0.841709 9.825C0.386097 9.36939 0.386097 8.63069 0.841709 8.17508C1.29732 7.71947 2.03601 7.71947 2.49162 8.17508L7.5 13.1835L19.5084 1.17508C19.964 0.719471 20.7027 0.719471 21.1583 1.17508Z" fill="#ffffff"/>
                                   </svg>
                              </div> 
     
                          </div> 
     
                          <div class="flex flex-col w-full mt-5 ">
                               <div class="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-8">
                                    <div class="w-full border-dashed border border-gray-300 p-5 h-auto sm:h-auto md:h-44 min-h-full">
                                        <div class="text-sm text-gray-900">Home</div>                            
                                        <div class="text-gray-500 text-xs mt-0.5"> Abhaya Das, <span>9038460981</span> </div>                             
                                        <div class="text-gray-500 text-xs mt-1"> Mumbai Central Railway Station Building, Mumbai Central... </div>
                                   <div class="w-full flex justify-end mt-5">
                                       <button class="bg-firoza text-white py-2 px-6 rounded text-sm uppercase flex items-center justify-center"><span> Deliver here </span></button>
                                 </div> 
                                 </div>
                                 
     
                              
     
                                 <div class="w-full border-dashed border border-gray-300 p-5 h-auto sm:h-auto md:h-42 min-h-full">
                                     <div class="text-gray-900 text-base font-medium">Add new address</div> 
                                     <div class="flex justify-center items-center mt-8">
                                      <button type="submit" class="border border-firoza flex justify-center items-center bg-transparent px-4 py-2 h-8 rounded text-firoza font-normal text-sm">
                                       <span>Add new address</span></button>
                                     </div> 
                                 </div>
     
                               </div>
                          </div>         
                          
                     </div>      
                </div>


                <div class="basis-full sm:basis-1/4 md:basis-2/4 lg:basis-2/5 xl:basis-2/5 2xl:basis-2/5">
                     <div class="w-full rounded border-t-[3px] border-t-[#48cef3] bg-white shadow-md" >
                         <div  class="flex border-b border-gray-200 px-4 py-4">
                              <div  class="flex-shrink-0">
                                   <img  src="/_nuxt/assets/images/food/profile-photo.jpg" alt="icon" class="w-20 h-16 rounded-md"> 
                              </div> 
                              <div  class="ml-4 flex flex-1 flex-col ">
                                   <div  class="text-left text-base font-medium text-gray-700">Aahare Bengali</div> 
                                   <div  class="text-left text-sm text-gray-700 mt-1">Sector 5, Salt Lake, Kolkata</div> 
                              </div>
                         </div>
                                 
                         
                         <div class="w-full px-4 py-4">
                                   <div class="text-base text-gray-900 font-medium">Review & Payment</div>
     
                                   <div class="mt-6">
                                      <div class="border-dashed border-b border-gray-200">
                                     <div class="flex items-center justify-between mb-3">
                                       <div class="text-base text-gray-900 flex items-center">
                                             <svg  width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect  x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle  cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>
                                             <span class="ml-4">Jeera Rice</span>
                                       </div>
                                       <div class="flex items-center">
                                       <div class="w-[84px] rounded-full border border-gray-200 flex items-center justify-between mr-14">
                                             <span class="cursor-pointer px-1 border-r border-gray-200 py-1 h-5 w-6 flex items-center justify-center"><svg width="10" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <line x1="1" y1="1" x2="11" y2="1" stroke="#858585" stroke-width="2" stroke-linecap="round"/>
                                             </svg>
                                             </span> 
                                             <div class="flex items-center justify-center text-green text-sm px-2">1</div>
                                             <span class="cursor-pointer px-1 border-l border-gray-200 py-1 w-6 h-5 flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#8bc63e"/>
                                             </svg>
                                             </span>
                                        </div>
                                       <div class="flex items-center text-base text-gray-900 ">
                                            <svg width="12" height="12" viewBox="0 0 12 21" fill="none" >
                                             <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                             </svg>
                                           <span class="pl-0.5">99</span>
                                        
                                       </div>
                                       </div>
                                     </div>
                                     <div class="flex items-center justify-between mb-3">
                                       <div class="text-base text-gray-900 flex items-center">
                                             <svg  width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect  x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle  cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>
                                             <span class="ml-4">Pomfret Curry</span>
                                       </div>
                                       <div class="flex items-center">
                                       <div class="w-[84px] rounded-full border border-gray-200 flex items-center justify-between mr-14">
                                             <span class="cursor-pointer px-1 border-r border-gray-200 py-1 h-5 w-6 flex items-center justify-center"><svg width="10" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <line x1="1" y1="1" x2="11" y2="1" stroke="#858585" stroke-width="2" stroke-linecap="round"/>
                                             </svg>
                                             </span> 
                                             <div class="flex items-center justify-center text-green text-sm px-2">1</div>
                                             <span class="cursor-pointer px-1 border-l border-gray-200 py-1 w-6 h-5 flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#8bc63e"/>
                                             </svg>
                                             </span>
                                        </div>
                                       <div class="flex items-center text-base text-gray-900 ">
                                            <svg width="12" height="12" viewBox="0 0 12 21" fill="none" >
                                             <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                             </svg>
                                           <span class="pl-0.5">99</span>
                                        
                                       </div>
                                       </div>
                                     </div>
                                   </div>  

                                     <div class="flex items-center justify-between py-3">
                                       <div class="flex items-center text-sm uppercase text-gray-700 font-medium ">
                                         <span>ITEM TOTAL</span>                                    
                                       </div>
                                       <div class="flex items-center text-base text-gray-900 font-medium">                                           
                                            <svg width="12" height="12" viewBox="0 0 14 25" fill="none" >
                                           <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="black"/>
                                           </svg>
                                           <span class="pl-0.5 text-gray-900">200</span>
                                        
                                       </div>
                                     </div>

                                     <div class="flex items-center justify-between mb-3">
                                       <div class="text-base text-[#81CE03]">Delivery fee</div>
                                       <div class="text-base text-[#81CE03] "> Free </div>
                                     </div>
     
                                     <div class="flex items-center justify-between mb-3">
                                       <div class="text-base text-gray-500">Taxes</div>
                                       <div class="flex items-center text-base text-gray-900 ">
                                            <svg width="12" height="12" viewBox="0 0 12 21" fill="none" >
                                             <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                             </svg>
                                           <span class="pl-0.5">99</span>
                                        
                                       </div>
                                     </div>
     
                                     
                                     <div class="border-t border-gray-300 pt-2 flex items-center justify-between ">
                                       <div class="text-sm text-gray-900 uppercase font-medium">
                                             BILL TOTAL
                                       </div>
                                       <div class="flex items-center text-base text-gray-900 font-medium">
                                            <svg width="12" height="12" viewBox="0 0 12 21" fill="none" >
                                             <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                             </svg>
                                           <span class="pl-0.5">300</span>
                                        
                                       </div>
                                     </div>
     
     
                                   </div>

                                   <div class="w-full border-dashed border border-gray-200 rounded flex items-center justify-center my-6 px-4 py-1">
                                         <div class="flex items-center justify-center cursor-pointer">
                                             <img src="~/assets/images/food/promo.svg" alt="icon" />
                                             <div class="text-base text-gray-900 ml-2">Apply Promo Code</div>
                                         </div>
                                   </div>

                                   <button class="bg-firoza text-white w-full py-2 px-6 rounded text-base flex items-center justify-center"><span> Pay Now </span></button>
     
                                   
                                 </div>  
                                 
                                 

                                 <div class="bg-[#E9FAFF] px-4 py-3 text-sm text-gray-700 text-left mt-2 rounded-b-md">
                                       <span class="text-[#00D66F] mr-0.5">Note:</span> once order placed No refund for cancellations 
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
       name: 'foodCheckoutPage',
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
     
     