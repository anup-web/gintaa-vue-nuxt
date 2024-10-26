<template>
<div class="payment-success-page pt-[80px] lg:pt-12 bg-gray-100">
    <!--//////////header///////////-->
    <Header/>
    <!--////////Breadcrumb//////////-->
    <div class="mx-auto max-w-[1920px] md:px-8 2xl:px-16 pt-10 hidden md:flex">
         <breadcrumb/>
    </div>
  <div class="container max-w-8xl mx-auto px-4 md:px-8 2xl:px-16 pt-5"> 
      <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">           
           <div class="w-full rounded border-t-[3px] border-t-[#48cef3] px-6 py-4 bg-white">
             <div class="grid gap-8 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12">
                <div class="col-span-full sm:col-span-full md:col-span-full lg:col-span-6 xl:col-span-6 2xl:col-span-6">
                     <div class="w-full flex flex-col pr-0 sm:pr-0 md:pr-0 lg:pr-44 xl:pr-52 2xl:pr-52">
                          <div class="flex items-center justify-center">
                               <img src="~/assets/images/offer/order-pay.svg" alt="image">
                          </div>
                          <div class="flex items-center justify-center mt-4">
                               <div class="text-base text-firoza">Order placed, thank you!</div>
                          </div>
                          <div class="flex items-center justify-center mt-2">
                               <div class="text-xs text-gray-700">Your order will be delivered by 
                                 <span class="font-medium text-sm pl-2">20th May</span></div>
                          </div>
                     </div> 
                </div>
             
                <div class="col-span-full sm:col-span-full md:col-span-full lg:col-span-6 xl:col-span-6 2xl:col-span-6">
                     <div class="flex flex-col gap-4 sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
                          <div class="basis-full sm:basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/2 2xl:basis-1/2">
                               <div class="w-full">
                               <div class="w-full flex flex-col">
                                    <div class="text-gray-900 text-base mr-5 font-medium">Delivery address</div>
                               </div> 

                               <div class="w-full mt-5">
                               <div class="flex items-center">
                                      <svg width="17" height="17" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6139 0.210648C10.2528 -0.0702159 9.74717 -0.0702159 9.38606 0.210648L0.386059 7.21065C0.142473 7.4001 0 7.69141 0 8V19C0 19.7957 0.31607 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H7H13H17C17.7957 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V8C20 7.69141 19.8575 7.4001 19.6139 7.21065L10.6139 0.210648ZM14 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V8.48908L10 2.26686L2 8.48908V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H6V11C6 10.4477 6.44772 10 7 10H13C13.5523 10 14 10.4477 14 11V20ZM8 20V12H12V20H8Z" fill="#8CAEC5"/>
                                        </svg>
                                        <!-- <svg width="16" height="22" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#8CAEC5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#8CAEC5"/>
                                        </svg> -->

                                        <!-- <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 4V0H0V18H20V4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM18 16H10V14H12V12H10V10H12V8H10V6H18V16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z" fill="#8CAEC5"/>
                                            </svg> -->


                                    <div for="comments" class="ml-3 text-sm text-gray-900">Home</div>
                                    <!-- <div for="comments" class="ml-3 text-sm text-gray-700">Work</div>  -->
                                    <!-- <div for="comments" class="ml-3 text-sm text-gray-700">Other</div>  -->
                               </div> 
                               <div class="text-gray-500 text-xs pl-8 mt-0.5"> Abhaya Das, <span>9038460981</span> </div>                             
                              <div class="text-gray-500 text-xs pl-8 mt-1"> Mumbai Central Railway Station Building, Mumbai Central... </div>
                            </div>
                               </div>
                          </div>
                          <div class="basis-full sm:basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/2 2xl:basis-1/2">
                               <div class="w-full flex justify-end mt-5">
                                    <button type="submit" class="w-40 border border-firoza flex justify-center items-center bg-transparent px-4 py-2 h-8 rounded text-firoza font-normal text-sm"><span>Download Invoice</span></button>    
                               </div> 
                               <div class="w-full flex justify-end mt-5">
                                    <router-link to="/cart/cancel-order">
                                    <button type="submit" class="w-40 border border-gray-500 flex justify-center items-center bg-transparent px-4 py-2 h-8 rounded text-gray-700 font-normal text-sm"><span>Cancel Order</span></button>    
                                    </router-link>  
                                </div> 
                               <div class="w-full flex justify-end mt-5">
                                 <router-link to="/cart/shipment-tracking">
                                    <button class="w-40 bg-green text-white py-2 px-6 rounded text-sm flex items-center justify-center"><span> Track Order </span></button>
                                 </router-link>    
                               </div>
                               
                          </div>                      
                    </div>
                </div>
                </div>
           </div>

      </div>

     <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mt-5 mb-10">           
           <div class="w-full rounded border-t-[3px] border-t-[#48cef3] px-6 py-4 bg-white">
             <div class="grid gap-8 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12">
                <div class="col-span-full sm:col-span-full md:col-span-full lg:col-span-4 xl:col-span-4 2xl:col-span-4">
                     <div class="w-full flex flex-col "><div class="text-gray-900 text-base font-medium">Product details</div></div> 
                      <div class="flex mt-5">
                        <div class="w-28 h-28 p-1 bg-white shadow cursor-pointer flex items-center justify-center">
                                   <img src="https://cdn.gintaa.com/offers/image/20230409/E3tPYV7BLoijSFRaGQ2CT/thumbs/4b8JF3yi7v0d0WWfZ6Ds4S_imagecropper1681069705280_200x200.jpg" alt="image" class="max-w-full max-h-28 mx-auto">
                              </div>
                          <div class="ml-4 flex-auto">
                            <h2 class="text-heading font-semibold mb-1 text-sm text-gray-600 cursor-pointer">B11 Bluetooth Headset</h2>
                                    <div class="text-heading font-medium text-base text-gray-700 flex items-center relative ">
                                     <span class="text-sm text-gray-500 font-normal">Condition</span>
                                       <span class="mr-2 pl-2">:</span> 
                                       <span class="text-sm text-gray-500 font-normal flex items-center" >New</span>
                                    </div>
                                <div class="flex items-center text-base text-gray-900 font-medium mt-2">
                                       <svg width="10" height="11" viewBox="0 0 12 21" fill="none" >
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                        </svg>
                                      <span class="pl-0.5 mr-2">1000</span>
                                      

                                      <div class="relative flex flex-col items-center group">
		                                       <svg width="18" height="18" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 20.1666C16.0627 20.1666 20.1667 16.0625 20.1667 10.9999C20.1667 5.93731 16.0627 1.83325 11 1.83325C5.93743 1.83325 1.83337 5.93731 1.83337 10.9999C1.83337 16.0625 5.93743 20.1666 11 20.1666Z" stroke="#8BC63E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M11 8.28828C10.7327 8.28828 10.5112 8.19916 10.3355 8.02091C10.1674 7.84267 10.0834 7.61775 10.0834 7.34615C10.0834 7.07454 10.1674 6.85386 10.3355 6.68411C10.5112 6.50587 10.7327 6.41675 11 6.41675C11.2674 6.41675 11.4851 6.50587 11.6532 6.68411C11.8289 6.85386 11.9167 7.07454 11.9167 7.34615C11.9167 7.61775 11.8289 7.84267 11.6532 8.02091C11.4851 8.19916 11.2674 8.28828 11 8.28828ZM11.0001 15.5834C10.4938 15.5834 10.0834 15.173 10.0834 14.6667V10.0835C10.0834 9.57718 10.4938 9.16675 11.0001 9.16675C11.5064 9.16675 11.9168 9.57718 11.9168 10.0835V14.6667C11.9168 15.173 11.5064 15.5834 11.0001 15.5834Z" fill="#8BC63E"/>
                                            </svg>
                                          <div class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex ">
                                            <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-white shadow-lg w-64 rounded">
                                                   <div class="w-full" >
                                                    <div class="w-full">
                              <h2 class="text-base text-gray-900 font-medium">Price details</h2>

                              <div class="mt-6">
                                <div class="flex items-center justify-between mb-3">
                                  <div class="text-sm text-gray-500">
                                    Price  (1  Item)
                                  </div>
                                  <div class="flex items-center text-sm text-gray-900 font-medium">
                                       <svg width="10" height="11" viewBox="0 0 12 21" fill="none" >
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                        </svg>
                                      <span class="pl-0.5">2000</span>
                                   
                                  </div>
                                </div>
                                <div class="flex items-center justify-between mb-3">
                                  <div class="flex items-center text-sm text-gray-500">
                                    <span>Discount on MRP </span>                                    
                                  </div>
                                  <div class="flex items-center text-sm text-gray-900 font-medium">
                                       <span class="mr-2">-</span>
                                       <svg width="10" height="11" viewBox="0 0 14 25" fill="none" >
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#01A411"/>
                                      </svg>
                                      <span class="pl-0.5 text-[#01A411]">1000</span>
                                   
                                  </div>
                                </div>

                                <!-- <div class="flex items-center justify-between mb-3">
                                  <div class="flex items-center text-sm text-gray-500">
                                    <span class="pr-1">Savings Using gintaa coins</span> 
                                    <img alt="coin" src="~/assets/images/coin.svg" class="w-[18px] h-[18px]">
                                  </div>
                                  <div class="flex items-center text-sm text-[#01A411] font-medium">  
                                      <span class="mr-2">-</span>
                                      <span class="pl-0.5">320</span>
                                   
                                  </div>
                                </div> -->


                                <div class="flex items-center justify-between mb-3">
                                  <div class="flex items-center text-sm text-gray-500">
                                    <span class="pr-1">Delivery Charges </span>                                 
                                  </div>
                                  <div class="flex items-center text-sm text-gray-900 font-medium">                                       
                                       <svg width="10" height="11" viewBox="0 0 14 25" fill="none" >
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#01A411"/>
                                      </svg>
                                      <span class="pl-0.5 text-[#01A411]">12</span>
                                   
                                  </div>
                                  <!-- <div class="flex items-center text-sm text-[#01A411] font-medium">                                      
                                      <span class="pl-0.5">Free</span>                                   
                                  </div> -->
                                </div>
                                                              
                                <div class="border-dashed border-t border-gray-200 pt-4 flex items-center justify-between mt-5">
                                  <div class="text-sm text-gray-900 font-medium">
                                    Total payble Amount
                                  </div>
                                  <div class="flex items-center text-base text-gray-900 font-medium">
                                       <svg width="12" height="12" viewBox="0 0 12 21" fill="none" >
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                        </svg>
                                      <span class="pl-0.5">1012</span>                                   
                                  </div>
                                </div>

                              </div>

                              
                            </div>                               
                                                  
                                              </div> 
                                            </span>
                                            <div class="w-3 h-3 -mt-2 rotate-45 bg-white shadow"></div>
                                          </div>
                                      </div>

                                  </div> 
                                  
                                  <div class="text-heading font-medium text-base text-gray-700 flex items-center relative ">
                                     <span class="text-sm text-gray-500 font-normal">Qty</span>
                                       <span class="mr-2 pl-2">:</span> 
                                       <span class="text-sm text-gray-500 font-normal flex items-center" >1</span>
                                    </div>
                                    
                          </div>
                        </div> 
                </div>
             
                <div class="col-span-full sm:col-span-full md:col-span-full lg:col-span-4 xl:col-span-4 2xl:col-span-4">
                      <div class="w-full flex flex-col">
                          <div class="flex items-center justify-center mt-10">
                               <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 0C0.559644 0 0 0.559644 0 1.25V17.5C0 18.1904 0.559644 18.75 1.25 18.75H2.92102C2.65106 19.3183 2.5 19.954 2.5 20.625C2.5 23.0412 4.45875 25 6.875 25C9.29125 25 11.25 23.0412 11.25 20.625C11.25 19.954 11.0989 19.3183 10.829 18.75H19.171C18.9011 19.3183 18.75 19.954 18.75 20.625C18.75 23.0412 20.7088 25 23.125 25C25.5412 25 27.5 23.0412 27.5 20.625C27.5 19.954 27.3489 19.3183 27.079 18.75H28.75C29.4404 18.75 30 18.1904 30 17.5V11.25C30 10.9185 29.8683 10.6005 29.6339 10.3661L25.8839 6.61612C25.6495 6.3817 25.3315 6.25 25 6.25H21.25V1.25C21.25 0.559644 20.6904 0 20 0H1.25ZM23.125 16.25H27.5V11.7678L24.4822 8.75H21.25V16.25H23.125ZM23.125 18.75C22.0895 18.75 21.25 19.5895 21.25 20.625C21.25 21.6605 22.0895 22.5 23.125 22.5C24.1605 22.5 25 21.6605 25 20.625C25 19.5895 24.1605 18.75 23.125 18.75ZM5 20.625C5 19.5895 5.83947 18.75 6.875 18.75C7.91053 18.75 8.75 19.5895 8.75 20.625C8.75 21.6605 7.91053 22.5 6.875 22.5C5.83947 22.5 5 21.6605 5 20.625ZM18.75 16.25H6.875H2.5V2.5H18.75V7.5V16.25Z" fill="#48CEF3"/>
                                </svg>
                          </div>
                          <div class="flex items-center justify-center mt-5">
                               <div class="text-xsb text-gray-700">Delivery expected by 20th May</div>
                          </div>                          
                     </div>  
                </div>

                <div class="col-span-full sm:col-span-full md:col-span-full lg:col-span-4 xl:col-span-4 2xl:col-span-4">
                     <div class="w-full flex flex-col">
                          <div class="flex items-center justify-center mt-5">
                               <div class="text-sm text-gray-900 flex items-center">
                                 <svg width="16" height="16" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2.625C6.15076 2.625 2.625 6.15076 2.625 10.5C2.625 14.8492 6.15076 18.375 10.5 18.375C14.8492 18.375 18.375 14.8492 18.375 10.5C18.375 6.15076 14.8492 2.625 10.5 2.625ZM0.875 10.5C0.875 5.18426 5.18426 0.875 10.5 0.875C15.8157 0.875 20.125 5.18426 20.125 10.5C20.125 15.8157 15.8157 20.125 10.5 20.125C5.18426 20.125 0.875 15.8157 0.875 10.5Z" fill="#48CEF3"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.726 7.02129C10.3186 6.95142 9.89971 7.02797 9.54341 7.23737C9.18711 7.44677 8.91641 7.77551 8.77927 8.16538C8.61891 8.62124 8.11935 8.86079 7.66349 8.70043C7.20762 8.54007 6.96807 8.04051 7.12843 7.58465C7.40272 6.80493 7.94411 6.14744 8.65671 5.72864C9.36932 5.30983 10.2071 5.15674 11.0218 5.29648C11.8365 5.43622 12.5754 5.85976 13.1077 6.4921C13.6399 7.12431 13.9312 7.92443 13.9301 8.75081C13.9297 10.0899 12.9369 10.9742 12.228 11.4468C11.8468 11.7009 11.4718 11.8878 11.1956 12.0105C11.0563 12.0725 10.9389 12.1195 10.8544 12.1517C10.812 12.1678 10.7777 12.1803 10.7527 12.1892L10.7223 12.1998L10.7126 12.2031L10.7092 12.2043L10.7079 12.2047C10.7076 12.2048 10.7068 12.2051 10.4301 11.375L10.7068 12.2051C10.2484 12.3579 9.75282 12.1102 9.6 11.6517C9.44729 11.1936 9.69462 10.6984 10.1525 10.5452L10.1514 10.5456C10.1515 10.5456 10.1515 10.5455 10.1525 10.5452L10.1664 10.5403C10.1799 10.5355 10.202 10.5275 10.2314 10.5163C10.2904 10.4938 10.3781 10.4588 10.4849 10.4114C10.7009 10.3154 10.9822 10.1741 11.2572 9.99072C11.8606 9.58845 12.1801 9.1605 12.1801 8.75001L12.1801 8.74871C12.1807 8.33543 12.0351 7.93527 11.7689 7.6191C11.5027 7.30293 11.1333 7.09116 10.726 7.02129Z" fill="#48CEF3"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.625 14.875C9.625 14.3918 10.0168 14 10.5 14H10.5088C10.992 14 11.3837 14.3918 11.3837 14.875C11.3837 15.3582 10.992 15.75 10.5088 15.75H10.5C10.0168 15.75 9.625 15.3582 9.625 14.875Z" fill="#48CEF3"/>
                                  </svg>

                                <span class="ml-2"> Need help? </span></div>
                          </div>
                          <div class="flex items-center justify-center mt-4">
                               <div class="text-xs text-gray-700">Contact our customer care</div>
                          </div> 
                          <div class="flex items-center justify-center mt-2">
                               <div class="text-xs text-gray-700">or </div>
                          </div>
                          <div class="flex items-center justify-center mt-2">
                               <div class="text-xs text-gray-700">reach us at : <span class="text-firoza">support@gintaa.com</span></div>
                          </div>                         
                     </div> 
                </div>

                </div>
           </div>

      </div>


  </div>
  <!--footer section goes here-->
  <Footer/>



  

</div> 
</template>







<script lang="ts">

import Vue from 'vue'


export default Vue.extend({     
  name: 'PaymentSuccessful',
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

