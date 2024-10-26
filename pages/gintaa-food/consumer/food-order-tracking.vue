<template>
     <div class="shipment-tracking-page pt-[80px] lg:pt-12">
         <!--//////////header///////////-->
         <GintaaFoodConsumerHeader/>
         <!--////////Breadcrumb//////////-->
             <div class="mx-auto max-w-[1920px] md:px-8 2xl:px-16 pt-10 hidden md:flex">
              <breadcrumb/>
         </div>
       <div class="container max-w-4xl mx-auto px-4 md:px-8 2xl:px-16 pt-5"> 
           <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">           
                <div class="w-full rounded border-t-[3px] border-t-[#48cef3] px-6 py-4 bg-white shadow-md mb-10">
                  <div class="grid gap-8 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12">
                     <div class="col-span-full sm:col-span-full md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
                          <div class="relative w-full flex-col ">
                      <div class="flex w-full text-gray-900 text-base font-medium">Order Tracking</div>
     
     
                 <div class="flex w-full flex-col mt-5">
                    
                   <nav aria-label="Progress" class="pl-4">
                   <ol role="list" class="overflow-hiddens">
                     <li class="relative pb-10">                       
                       <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-green" aria-hidden="true"></div>
                     
                       <a href="#" class="relative flex items-start group">
                         
                         <span class="h-9 flex items-center">
                           <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-green rounded-full group-hover:bg-indigo-800">
                             
                             <svg class="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                               <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                             </svg>
                           </span>
                         </span>
                         <span class="ml-4 min-w-0 flex flex-col">
                           <span class="text-sm text-gray-900 tracking-wide">Order </span>
                           <span class="text-xs text-gray-500">Yoo! Your order has been placed successfully</span>
                         </span>
                       </a>
                     </li>
     
                     <li class="relative pb-10">                        
                       <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true"></div>
                       
                       <a href="#" class="relative flex items-start group" aria-current="step">
                         <span class="h-9 flex items-center" aria-hidden="true">
                           <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-green rounded-full">
                             <span class="h-2.5 w-2.5 bg-green rounded-full"></span>
                           </span>
                         </span>
                         <span class="ml-4 min-w-0 flex flex-col">
                           <span class="text-sm text-gray-900 tracking-wide">Preparing</span>
                           <span class="text-xs text-gray-500">Yoo! Your order has been placed successfully</span>
                         </span>
                       </a>
                     </li>
     
                     <li class="relative pb-10">                      
                       <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true"></div>
                       
                       <a href="#" class="relative flex items-start group">
                         <span class="h-9 flex items-center" aria-hidden="true">
                           <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                             <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                           </span>
                         </span>
                         <span class="ml-4 min-w-0 flex flex-col">
                           <span class="text-sm text-gray-900 tracking-wide">Picked Up</span>
                           <span class="text-xs text-gray-500">Yoo! Your order has been placed successfully</span>
                         </span>
                       </a>
                     </li>
     
                     <li class="relative pb-10">                    
                       
                       <a href="#" class="relative flex items-start group">
                         <span class="h-9 flex items-center" aria-hidden="true">
                           <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                             <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                           </span>
                         </span>
                         <span class="ml-4 min-w-0 flex flex-col">
                           <span class="text-sm text-gray-900 tracking-wide">Delivered</span>
                           <span class="text-xs text-gray-500">Yoo! Your order has been placed successfully</span>
                         </span>
                       </a>
                     </li>
     
                    
                   </ol>
                 </nav>
                 </div>
                 </div> 
                     </div>
                  
                     <div class="col-span-full sm:col-span-full md:col-span-6 lg:col-span-6 xl:col-span-6 2xl:col-span-6">
                          <div class="w-full flex flex-col">
                              <div  class="flex">
                              <div  class="flex-shrink-0">
                                   <img  src="/_nuxt/assets/images/food/profile-photo.jpg" alt="icon" class="w-20 h-16 rounded-md"> 
                              </div> 
                              <div  class="ml-4 flex flex-1 flex-col ">
                                   <div  class="text-left text-base font-medium text-gray-700">Aahare Bengali</div> 
                                   <div  class="text-left text-sm text-gray-700 mt-1">Sector 5, Salt Lake, Kolkata</div>
                                   <div class="text-gray-500 text-xs mt-1 flex items-center">
                                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M6.1875 0.21875H1.8125C1.34853 0.219271 0.903715 0.403813 0.575639 0.731889C0.247563 1.05996 0.0630211 1.50478 0.0625 1.96875V12.0312C0.0630211 12.4952 0.247563 12.94 0.575639 13.2681C0.903715 13.5962 1.34853 13.7807 1.8125 13.7812H6.1875C6.65147 13.7807 7.09629 13.5962 7.42436 13.2681C7.75244 12.94 7.93698 12.4952 7.9375 12.0312V1.96875C7.93698 1.50478 7.75244 1.05996 7.42436 0.731889C7.09629 0.403813 6.65147 0.219271 6.1875 0.21875ZM0.5 2.40625H7.5V10.7188H0.5V2.40625ZM1.8125 0.65625H6.1875C6.53549 0.656597 6.86913 0.79499 7.11519 1.04106C7.36126 1.28712 7.49965 1.62076 7.5 1.96875H0.5C0.500347 1.62076 0.63874 1.28712 0.884806 1.04106C1.13087 0.79499 1.46451 0.656597 1.8125 0.65625ZM6.1875 13.3438H1.8125C1.46451 13.3434 1.13087 13.205 0.884806 12.9589C0.63874 12.7129 0.500347 12.3792 0.5 12.0312V11.1562H7.5V12.0312C7.49965 12.3792 7.36126 12.7129 7.11519 12.9589C6.86913 13.205 6.53549 13.3434 6.1875 13.3438Z" fill="#696969"/>
                                      </svg>
                                      <span class="ml-1.5">8926531752</span> 
                                      </div> 
                              </div>
                         </div>
                               <div class="w-full flex justify-start mt-6">
                                    <button type="submit" class="w-40 border border-green flex justify-center items-center bg-transparent px-4 py-2 h-8 rounded text-green font-normal text-sm"><span>Download invoice</span></button>    
                               </div> 
     
                               <div class="mt-6">
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
                                          <div class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex ">
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
                                            <div class="w-3 h-3 absolute bottom-[-4px] right-[39px] z-20 rotate-45 bg-white"></div>
                                          </div>
                                      </div>                      
                       
                       </div>
                      </div>
     
                          <div class="w-full">
                                    <div class="w-full flex flex-col mt-4">
                                         <div class="text-gray-900 text-base mr-5 font-medium">Delivery address</div>
                                    </div>      
                                    <div class="w-full mt-2">                                   
                                        <div for="comments" class="text-sm text-gray-900">Home</div>                            
                                        <div class="text-gray-500 text-xs mt-0.5"> Abhaya Das, <span>9038460981</span> </div>                             
                                        <div class="text-gray-500 text-xs mt-1"> Mumbai Central Railway Station Building, Mumbai Central... </div>
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
       name: 'foodOrderTracking',
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
     
     