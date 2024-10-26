<template>
  <div class="payment-success-page pt-[80px] lg:pt-12">
      <!--//////////header///////////-->
      <GintaaFoodConsumerHeader/>
      <!--////////Breadcrumb//////////-->
      <div class="mx-auto max-w-[1920px] md:px-8 2xl:px-16 pt-10 hidden md:flex">
           <breadcrumb/>
      </div>
    <div class="container max-w-6xl mx-auto px-4 md:px-8 2xl:px-16 pt-5"> 
        <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">           
             <div class="w-full rounded border-t-[3px] border-t-[#48cef3] px-6 py-4 bg-white shadow-md ">
               <div class="grid gap-8 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12">
                  <div class="col-span-full sm:col-span-full md:col-span-5 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
                       <div class="w-full flex flex-col pr-0 sm:pr-0 md:pr-0 lg:pr-44 xl:pr-52 2xl:pr-52">
                            <div class="flex items-center justify-center">
                                 <img src="~/assets/images/food/order-placed.svg" alt="image" class="w-[80px] h-[80px]">
                            </div>
                            <div class="flex items-center justify-center mt-4">
                                 <div class="text-base text-green">Order Placed , Thank You</div>
                            </div>
                            <div class="flex items-center justify-center mt-2">
                                 <div class="text-xs text-gray-700">Your Order will delivered soon</div>                  
                            </div>
                       </div> 
                  </div>
               
                  <div class="col-span-full sm:col-span-full md:col-span-7 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
                       <div class="flex flex-col gap-4 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
                            <div class="basis-full sm:basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/2 2xl:basis-1/2">
                                 <div class="w-full">
                                    <div class="text-gray-900 text-base font-medium">Delivery address</div> 
                                    <div class="w-full mt-5">
                                   <div for="comments" class="text-sm text-gray-900">Home</div>                         
                                    <div class="text-gray-500 text-xs mt-0.5"> Abhaya Das, <span>9038460981</span> </div>                             
                                    <div class="text-gray-500 text-xs mt-1"> Mumbai Central Railway Station Building, Mumbai Central... </div>
                                  </div>
                                 </div>
                            </div>
                            <div class="basis-full sm:basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/2 2xl:basis-1/2">
                                 <div class="w-full flex justify-start mt-10 sm:justify-end md:justify-end">
                                      <button type="submit" class="w-40 border border-green flex justify-center items-center bg-transparent px-4 py-2 h-8 rounded text-green font-normal text-sm"><span>Download invoice</span></button>    
                                 </div> 
                                 <div class="w-full flex justify-start mt-5 sm:justify-end md:justify-end">                                   
                                      <button class="w-40 bg-firoza text-white py-2 px-6 rounded text-sm flex items-center justify-center"><span> Track order </span></button>
                                 </div>  
                            
                            </div>                      
                      </div>
                  </div>
                  </div>
             </div>
  
        </div>
  
       <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mt-5 mb-10">           
             <div class="w-full rounded border-t-[3px] border-t-[#48cef3] px-6 py-4 bg-white shadow-md">
               <div class="grid gap-8 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12">
                  <div class="col-span-full sm:col-span-3 md:col-span-3 lg:col-span-4 xl:col-span-4 2xl:col-span-4">
                       <div class="text-gray-900 text-base font-medium">Order Details</div>
                       <div class="w-full mt-3">
                                    <!-- <div class="text-gray-700 text-sm uppercase font-medium">FROM</div>  -->
                                    <div class="w-full mt-1">
                                   <div for="comments" class="text-base text-gray-900">Aahare Bengali</div>                         
                                    <div class="text-gray-500 text-sm mt-1"> Sector 5, Salt Lake, Kolkata</div>                             
                                    <div class="text-gray-500 text-sm mt-2 flex items-center">
                                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6.1875 0.21875H1.8125C1.34853 0.219271 0.903715 0.403813 0.575639 0.731889C0.247563 1.05996 0.0630211 1.50478 0.0625 1.96875V12.0312C0.0630211 12.4952 0.247563 12.94 0.575639 13.2681C0.903715 13.5962 1.34853 13.7807 1.8125 13.7812H6.1875C6.65147 13.7807 7.09629 13.5962 7.42436 13.2681C7.75244 12.94 7.93698 12.4952 7.9375 12.0312V1.96875C7.93698 1.50478 7.75244 1.05996 7.42436 0.731889C7.09629 0.403813 6.65147 0.219271 6.1875 0.21875ZM0.5 2.40625H7.5V10.7188H0.5V2.40625ZM1.8125 0.65625H6.1875C6.53549 0.656597 6.86913 0.79499 7.11519 1.04106C7.36126 1.28712 7.49965 1.62076 7.5 1.96875H0.5C0.500347 1.62076 0.63874 1.28712 0.884806 1.04106C1.13087 0.79499 1.46451 0.656597 1.8125 0.65625ZM6.1875 13.3438H1.8125C1.46451 13.3434 1.13087 13.205 0.884806 12.9589C0.63874 12.7129 0.500347 12.3792 0.5 12.0312V11.1562H7.5V12.0312C7.49965 12.3792 7.36126 12.7129 7.11519 12.9589C6.86913 13.205 6.53549 13.3434 6.1875 13.3438Z" fill="#696969"/>
                                      </svg>
                                      <span class="ml-1.5">8926531752</span> 
                                      </div>
                                  </div>
                      </div>
                      <!-- <div class="w-full mt-4">
                                    <div class="text-gray-900 text-sm uppercase font-medium">DELIVER TO</div> 
                                    <div class="w-full mt-1">
                                   <div for="comments" class="text-sm text-gray-900">Home</div>                         
                                    <div class="text-gray-500 text-xs mt-1"> Abhaya Das, <span>9038460981</span> </div>                             
                                    <div class="text-gray-500 text-xs mt-1"> Mumbai Central Railway Station Building, Mumbai Central... </div>
                                  </div>
                                 </div> -->
                  </div>
               
                  <div class="col-span-full sm:col-span-5 md:col-span-5 lg:col-span-4 xl:col-span-4 2xl:col-span-4">
                        <div class="mt-9">
                        <div class="text-sm text-gray-900 font-medium">3 ITEMS</div>     
                        <div class="mt-3">
                            <div class="border-dashed border-b border-gray-200">
                          <div class="flex items-center justify-between mb-3">
                            <div class="text-sm text-gray-900 flex items-center">
                                  <svg  width="16" height="16" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect  x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle  cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>
                                  <span class="ml-4">Jeera Rice</span>
                            </div>                          
                            
                            <div class="flex items-center text-base text-gray-900 ">
                                  <svg width="12" height="12" viewBox="0 0 12 21" fill="none" >
                                  <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                  </svg>
                                <span class="pl-0.5">99</span>
                              
                            </div>
                            
                          </div>
                          <div class="flex items-center justify-between mb-3">
                            <div class="text-sm text-gray-900 flex items-center">
                                  <svg  width="16" height="16" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect  x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle  cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>
                                  <span class="ml-4">Pomfret Curry</span>
                            </div>
                            
                            <div class="flex items-center text-base text-gray-900 ">
                                  <svg width="12" height="12" viewBox="0 0 12 21" fill="none" >
                                  <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                  </svg>
                                <span class="pl-0.5">99</span>
                              
                            </div>
                            
                          </div>
                        </div>  

                          <div class="flex items-center justify-between py-3">
                            <div class="flex items-center text-sm uppercase text-gray-700 font-medium ">
                              <span>BILL TOTAL</span>                                    
                            </div>
                            <div class="flex items-center text-base text-gray-900 font-medium">                                           
                                  <svg width="12" height="12" viewBox="0 0 14 25" fill="none" >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="black"/>
                                </svg>
                                <span class="pl-0.5 text-gray-900">200</span>
                              
                            </div>
                          </div> 
                          
                          <div class="relative flex flex-col items-end group">
                               <div class="text-right text-[11px] text-green flex justify-end">VIEW BREAKUP</div> 
                                          <div class="absolute bottom-0 right-[-100px] flex flex-col items-center hidden mb-6 group-hover:flex ">
                                            <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-white shadow-lg w-72 rounded">
                                                
                                                 <div class="w-full ">
                                   
                                                  <div class="text-sm uppercase text-gray-900">3 ITEMS </div>
                                                  <div class="mt-2">
                                                      <div class="border-dashed border-b border-gray-200">
                                                    <div class="flex items-center justify-between mb-3">
                                                      <div class="text-sm text-gray-900 flex items-center">
                                                            <svg  width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect  x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle  cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>
                                                            <span class="ml-4">Jeera Rice</span>
                                                      </div>
                                                      
                                                      <div class="flex items-center text-sm text-gray-900 ">
                                                            <svg width="11" height="11" viewBox="0 0 12 21" fill="none" >
                                                            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                                            </svg>
                                                          <span class="pl-0.5">99</span>
                                                        
                                                      </div>
                                                      
                                                    </div>
                                                    <div class="flex items-center justify-between mb-3">
                                                      <div class="text-sm text-gray-900 flex items-center">
                                                            <svg  width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect  x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle  cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>
                                                            <span class="ml-4">Pomfret Curry</span>
                                                      </div>
                                                      
                                                      <div class="flex items-center text-sm text-gray-900 ">
                                                            <svg width="11" height="11" viewBox="0 0 12 21" fill="none" >
                                                            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                                            </svg>
                                                          <span class="pl-0.5">99</span>
                                                        
                                                      </div>
                                                      
                                                    </div>
                                                  </div>  

                                                    <div class="flex items-center justify-between py-3">
                                                      <div class="flex items-center text-xs uppercase text-gray-700 font-medium ">
                                                        <span>ITEM TOTAL</span>                                    
                                                      </div>
                                                      <div class="flex items-center text-sm text-gray-900 font-medium">                                           
                                                            <svg width="11" height="11" viewBox="0 0 14 25" fill="none" >
                                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="black"/>
                                                          </svg>
                                                          <span class="pl-0.5 text-gray-900">200</span>
                                                        
                                                      </div>
                                                    </div>

                                                    <div class="flex items-center justify-between mb-3">
                                                      <div class="text-sm text-[#81CE03]">Delivery fee</div>
                                                      <div class="text-sm text-[#81CE03] "> Free </div>
                                                    </div>
                    
                                                    <div class="flex items-center justify-between mb-3">
                                                      <div class="text-sm text-gray-500">Taxes</div>
                                                      <div class="flex items-center text-sm text-gray-900 ">
                                                            <svg width="11" height="11" viewBox="0 0 12 21" fill="none" >
                                                            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                                            </svg>
                                                          <span class="pl-0.5">99</span>
                                                        
                                                      </div>
                                                    </div>
                    
                                                    
                                                    <div class="border-t border-gray-300 pt-2 flex items-center justify-between ">
                                                      <div class="text-xs text-gray-900 uppercase font-medium">
                                                            BILL TOTAL
                                                      </div>
                                                      <div class="flex items-center text-sm text-gray-900 font-medium">
                                                            <svg width="11" height="11" viewBox="0 0 12 21" fill="none" >
                                                            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                                            </svg>
                                                          <span class="pl-0.5">300</span>
                                                        
                                                      </div>
                                                    </div>  
                                                  </div>
                                                </div>  
                                            </span>
                                            <div class="w-3 h-3 absolute bottom-[-4px] z-20 rotate-45 bg-white"></div>
                                          </div>
                                      </div>





                       </div>
                      </div>  
                  </div>
  
                  <div class="col-span-full sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4">
                       <div class="w-full flex flex-col mt-6">
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
    <GintaaFoodConsumerFooter/>
  
  
     <!-- start Order details  modal  -->
     <div class="relative z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
 <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

 <div class="fixed inset-0 z-50 overflow-y-auto">
   <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
     
     <div class="relative transform overflow-hidden rounded-lg bg-white px-0 pt-2 pb-4 text-left shadow-xl transition-all sm:my-4 sm:w-full sm:max-w-sm ">
               
       <div class="w-full">
            <div class="flex items-center justify-between border-b-2 border-gray-200 px-4 pb-2">
               <div class="text-sm uppercase text-gray-900">3 ITEMS </div>
               <div class="absolute top-0 right-0 pt-2 pr-2 block">
                   <button type="button" class="rounded-md bg-white text-gray-400 ">
                       <span class="sr-only">Close</span>
                       
                       <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                       </svg>
                   </button>
                   </div>
            </div>
            
            <div class="w-full px-6 py-4">
                                   
     
                                   <div class="mt-2">
                                      <div class="border-dashed border-b border-gray-200">
                                     <div class="flex items-center justify-between mb-3">
                                       <div class="text-base text-gray-900 flex items-center">
                                             <svg  width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect  x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle  cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>
                                             <span class="ml-4">Jeera Rice</span>
                                       </div>
                                      
                                       <div class="flex items-center text-base text-gray-900 ">
                                            <svg width="12" height="12" viewBox="0 0 12 21" fill="none" >
                                             <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                             </svg>
                                           <span class="pl-0.5">99</span>
                                        
                                       </div>
                                       
                                     </div>
                                     <div class="flex items-center justify-between mb-3">
                                       <div class="text-base text-gray-900 flex items-center">
                                             <svg  width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect  x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle  cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>
                                             <span class="ml-4">Pomfret Curry</span>
                                       </div>
                                      
                                       <div class="flex items-center text-base text-gray-900 ">
                                            <svg width="12" height="12" viewBox="0 0 12 21" fill="none" >
                                             <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                             </svg>
                                           <span class="pl-0.5">99</span>
                                        
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

                                 

                                  
                                 </div> 
       </div>
       
     </div>
   </div>
 </div>
</div>
<!-- end Order details  modal  -->
    
  
  </div> 
  </template>
  
  
  
  
  
  
  
  <script lang="ts">
  
  import Vue from 'vue'
  
  
  export default Vue.extend({     
    name: 'foodPaymentSuccessful',
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
  
  