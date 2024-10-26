<template>
<div class="checkout-details-page pt-[80px] lg:pt-12 bg-gray-100">
    <!--//////////header///////////-->
    <Header/>
    <!--////////Breadcrumb//////////-->
    <div class="mx-auto max-w-[1920px] md:px-8 2xl:px-16 pt-10 hidden md:flex">
         <breadcrumb/>
    </div>
  <div class="container max-w-8xl mx-auto px-4 md:px-8 lg:px-16 xl:px-16 2xl:px-16 pt-5"> 
    <div class="flex flex-col w-full mx-auto relative overflow-x-visible px-3 mb-2">
        <div class="w-full mb-12 relative">
              <ol role="list" class="flex items-center w-full relative status-offer-mob-desk">
                <li class="relative flex items-center w-full">
                  <div  class="flex items-center text-teal-600 relative group">
                    <div  class="flex items-center justify-center rounded-full transition duration-500 ease-in-out w-8 h-8 py-3 bg-green">
                         <svg  x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-5 h-5 text-white"><path  fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>                   
                     <div class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-xsb capitalize text-gray-900">Ordered</div>
                    </div> 
                    <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-200"></div>
                  </li>
                  <li class="relative flex items-center w-full">
                      <div class="flex items-center text-teal-600 relative group">
                        <div class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
                          <span aria-hidden="true" class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                        </div>                       
                        <div class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-xsb capitalize text-gray-900">RTD</div>
                      </div>
                       <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-200"></div>
                    </li>
                    <li class="relative flex items-center w-full">
                      <div class="flex items-center text-teal-600 relative group">
                        <div class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
                          <span aria-hidden="true" class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                        </div>                       
                        <div class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-xsb capitalize text-gray-900">Shipped</div>
                      </div>
                       <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-200"></div>
                    </li>
                    <li class="relative flex items-center">
                        <div class="flex items-center text-teal-600 relative group">
                          <div class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
                            <span aria-hidden="true" class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                          </div>                          
                          <div class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-xsb capitalize text-gray-900">Delivered</div>
                        </div>
                      </li>
                    </ol>
                  </div>
    </div>
      
        <div class="flex flex-col gap-6 sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mb-5">           
           <div class="basis-full sm:basis-3/4 md:basis-3/5 lg:basis-3/5 xl:basis-4/6 2xl:basis-4/6">
                <div class="w-full rounded border-t-[3px] border-t-[#48cef3] py-4 bg-white">
                            <div class="w-full flex items-center justify-between px-6">
                                  <a href="/my-profile" class="inline-block " target="_blank">
                                        <div class="flex items-center">
                                              <div class="h-10 w-10  bg-gray-200 flex items-center justify-center rounded-full mr-2 relative">
                                                  <img src="https://dev.cdn.gintaa.com/users/llpTWpEsbCNiInPFZuwYoYd9GKH3/avatar/thumbs/5R6dJtrBHYAtBGtEnoMNz1_Antitheftbagpackw300_200x200.jpeg" alt="Tushar" class="w-10 h-10 rounded-full">
                                              </div>
                                              <div class="flex flex-col">
                                                    <div class="text-gray-700 text-sm font-medium"> Rakesh Mondal</div>
                                                    <div class="text-gray-500 text-xs"> (You) </div>
                                              </div>
                                              
                                        </div>
                                  </a>                                  
                                  <div class="flex flex-col">
                                       <div class="text-sm text-gray-700 font-medium">Order id - 123456789 </div>
                                       <div class="text-xs text-gray-900">20/07/21, 10:30 am</div>
                                  </div>
                             </div>

                             <div class="flex w-full mt-6 px-6">
                              <div class="w-28 h-28 p-1 bg-white shadow cursor-pointer flex items-center justify-center">
                                   <img src="https://cdn.gintaa.com/offers/image/20230409/E3tPYV7BLoijSFRaGQ2CT/thumbs/4b8JF3yi7v0d0WWfZ6Ds4S_imagecropper1681069705280_200x200.jpg" alt="image" class="max-w-full max-h-28 mx-auto">
                              </div>
                          <div class="ml-4 flex-auto">
                            <div class="text-heading font-medium mb-2 text-base text-gray-600 cursor-pointer">B11 Bluetooth Headset</div>
                            <div class="text-heading font-medium text-base text-gray-700 flex items-center relative mb-1"><span class="text-sm text-gray-500 font-normal">Condition</span> <span class="mr-2 pl-2">:</span> <span class="text-sm text-gray-500 font-normal flex items-center">New</span></div>
                            <div  class="w-full flex mb-3 items-center">
                              <div class="flex items-center text-base text-firoza font-medium mr-4">
                                         <svg width="10" height="12" viewBox="0 0 12 21" fill="none" class="mr-[3px]"><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="#48CEF3"></path></svg> 
                                         <span class="pl-0.5">1000</span>
                                    </div> 
                                     
                              <div class="flex items-center">
                                   <svg  width="10" height="12" viewBox="0 0 11 18" fill="none" class="mr-[3px]"><path  opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                                   <span  class="items-center text-base font-normal text-gray-500 relative flex after:left-0 after:absolute after:w-[100%] after:h-[1px] after:bg-gray-500 after:top-[11px] ">2000</span> 
                              </div> 
                              <div class="text-base text-green font-medium pl-5">(50% Off)</div>                            
                              
                           </div>
                           
                                    
                          </div>
                        </div>

                <div class="relative w-full flex-col mt-6 px-6">
                 <div class="flex w-full text-gray-900 text-base font-medium">Order Tracking</div>

                 <div class="w-full flex flex-row">
                      <div class="text-xs text-gray-500 mt-3">Estimated Delivery by 
                                 <span class="font-medium text-sm pl-2">20th August</span></div>
                
                 </div>
                 

            <div class="flex w-full flex-col mt-5">
               
              <nav aria-label="Progress" class="pl-28">
              <ol role="list" class="overflow-hiddens">
                <li class="relative pb-10">
                  <div class="max-w-xs pr-4 absolute top-1 -left-28">
                         <div class="flex justify-start text-gray-400 text-xs">Wed, 12/08/2021</div>
                         <div class="flex justify-start text-gray-500 text-xs mt-1">9:38 am</div>                         
                 </div> 
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
                      <span class="text-sm text-gray-900 tracking-wide">Ordered</span>
                      <span class="text-xs text-gray-500">Your order has been placed</span>
                    </span>
                  </a>
                </li>

                <li class="relative pb-10">
                  <div class="max-w-xs pr-4 absolute top-1 -left-28">
                         <div class="flex justify-start text-gray-400 text-xs">Wed, 12/08/2021</div>
                         <div class="flex justify-start text-gray-500 text-xs mt-1">9:38 am</div>                         
                 </div> 
                  <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true"></div>
                  
                  <a href="#" class="relative flex items-start group" aria-current="step">
                    <span class="h-9 flex items-center" aria-hidden="true">
                      <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-green rounded-full">
                        <span class="h-2.5 w-2.5 bg-green rounded-full"></span>
                      </span>
                    </span>
                    <span class="ml-4 min-w-0 flex flex-col">
                      <span class="text-sm text-gray-900 tracking-wide">Ready to dispatch (RTD)</span>
                      <span class="text-xs text-gray-500">Cursus semper viverra facilisis et et some more.</span>
                    </span>
                  </a>
                </li>

                <li class="relative pb-10">
                  <div class="max-w-xs pr-4 absolute top-1 -left-28">
                         <div class="flex justify-start text-gray-400 text-xs">Wed, 12/08/2021</div>
                         <div class="flex justify-start text-gray-500 text-xs mt-1">9:38 am</div>                         
                 </div> 
                  <div class="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-gray-300" aria-hidden="true"></div>
                  
                  <a href="#" class="relative flex items-start group">
                    <span class="h-9 flex items-center" aria-hidden="true">
                      <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                        <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                      </span>
                    </span>
                    <span class="ml-4 min-w-0 flex flex-col">
                      <span class="text-sm text-gray-900 tracking-wide">Shipped</span>
                      <span class="text-xs text-gray-500">Penatibus eu quis ante.</span>
                    </span>
                  </a>
                </li>

                <li class="relative pb-10">
                  <div class="max-w-xs pr-4 absolute top-1 -left-28">
                         <div class="flex justify-start text-gray-400 text-xs">Wed, 12/08/2021</div>
                         <div class="flex justify-start text-gray-500 text-xs mt-1">9:38 am</div>                         
                 </div> 
                  
                  <a href="#" class="relative flex items-start group">
                    <span class="h-9 flex items-center" aria-hidden="true">
                      <span class="relative z-10 w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                        <span class="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"></span>
                      </span>
                    </span>
                    <span class="ml-4 min-w-0 flex flex-col">
                      <span class="text-sm text-gray-900 tracking-wide">Delivered</span>
                      <span class="text-xs text-gray-500">Faucibus nec enim leo et.</span>
                    </span>
                  </a>
                </li>

               
              </ol>
            </nav>
            </div>
                </div>       
                 

                <div class="w-full border-t border-gray-200 flex flex-col pt-4 px-6"> 
                  <div class="flex items-center mb-4">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49923 21.4488C9.19692 21.6504 8.80259 21.6501 8.50028 21.4485L8.49771 21.4468L8.49171 21.4428L8.47109 21.4288C8.45356 21.4169 8.42857 21.3998 8.3966 21.3777C8.33268 21.3334 8.24082 21.2689 8.12501 21.1853C7.89349 21.0181 7.56572 20.774 7.17374 20.4619C6.3912 19.8387 5.34545 18.9385 4.29664 17.8315C2.23584 15.6562 0 12.5117 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 12.5117 15.7642 15.6562 13.7034 17.8315C12.6546 18.9385 11.6088 19.8387 10.8263 20.4619C10.4343 20.774 10.1065 21.0181 9.87499 21.1853C9.75918 21.2689 9.66732 21.3334 9.6034 21.3777C9.57143 21.3998 9.54644 21.4169 9.52891 21.4288L9.50829 21.4428L9.50229 21.4468L9.50039 21.4481L9.49923 21.4488ZM3.90883 3.90883C5.25909 2.55857 7.09044 1.8 9 1.8C10.9096 1.8 12.7409 2.55857 14.0912 3.90883C15.4414 5.25909 16.2 7.09044 16.2 9C16.2 11.7883 14.3858 14.4938 12.3966 16.5935C11.4204 17.624 10.4412 18.4675 9.70499 19.0538C9.431 19.2719 9.19168 19.4537 9 19.5953C8.80832 19.4537 8.569 19.2719 8.29501 19.0538C7.5588 18.4675 6.57955 17.624 5.60336 16.5935C3.61416 14.4938 1.8 11.7883 1.8 9C1.8 7.09044 2.55857 5.25909 3.90883 3.90883Z" fill="#8CAEC5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 9C5.4 7.01178 7.01178 5.4 9 5.4C10.9882 5.4 12.6 7.01178 12.6 9C12.6 10.9882 10.9882 12.6 9 12.6C7.01178 12.6 5.4 10.9882 5.4 9ZM7.2 9C7.2 8.00589 8.00589 7.2 9 7.2C9.99411 7.2 10.8 8.00589 10.8 9C10.8 9.99411 9.99411 10.8 9 10.8C8.00589 10.8 7.2 9.99411 7.2 9Z" fill="#8CAEC5"/>
                    </svg>
                    <div for="comments" class="ml-3 text-sm text-gray-900">Delivery address</div>
                    </div> 
                  <div class="w-full flex flex-col pl-7">
                    <div class="flex items-center">
                          <svg width="17" height="17" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6139 0.210648C10.2528 -0.0702159 9.74717 -0.0702159 9.38606 0.210648L0.386059 7.21065C0.142473 7.4001 0 7.69141 0 8V19C0 19.7957 0.31607 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H7H13H17C17.7957 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V8C20 7.69141 19.8575 7.4001 19.6139 7.21065L10.6139 0.210648ZM14 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V8.48908L10 2.26686L2 8.48908V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H6V11C6 10.4477 6.44772 10 7 10H13C13.5523 10 14 10.4477 14 11V20ZM8 20V12H12V20H8Z" fill="#8CAEC5"></path></svg>
                          <div for="comments" class="ml-3 text-sm text-gray-900">Home</div>
                    </div> 
                    <div class="text-gray-500 text-xs pl-8 mt-0.5"> Abhaya Das, <span>9038460981</span></div>
                     <div class="text-gray-500 text-xs pl-8 mt-1"> Mumbai Central Railway Station Building, Mumbai Central... </div>
                    </div>                 
                    <div class="w-full flex justify-end mt-10 px-6"> 
                          <a href="#" class="bg-transparent text-gray-500 border border-gray-500 py-1 px-2 rounded font-medium text-base flex items-center justify-center w-[135px] h-[42px]">
                                <span> Cancel </span>
                          </a>                                                 
                          <a href="/cart/seller-buy-step-2" class="bg-green text-white py-1 px-2 rounded font-medium text-base flex items-center justify-center ml-6 w-[135px] h-[42px]">
                                <span> Mark RTD </span>
                          </a>                                            
                    </div>
                 </div> 

                </div> 

                
                
           </div>
           <div class="basis-full sm:basis-1/4 md:basis-2/5 lg:basis-2/5 xl:basis-2/6 2xl:basis-2/6">
                <div class="w-full rounded border-t-[3px] border-t-[#48cef3] px-6 py-4 bg-white" >
                             <div class="w-full">                                 
                                  <div class="w-full text-base text-gray-700 font-medium">Buyer Details</div>
                                  <div class="w-full flex items-center justify-between mt-4">
                                  <a href="/my-profile" class="inline-block " target="_blank">
                                        <div class="flex items-center">
                                              <div class="h-10 w-10  bg-gray-200 flex items-center justify-center rounded-full mr-2 relative">
                                                  <img src="https://dev.cdn.gintaa.com/users/q00HIDbr9KeRjQopN8z8koVLff73/avatar/thumbs/6PIa37aqxdndtcvHhkVPFc_ui_200x200.jpg" alt="Tushar" class="w-10 h-10 rounded-full">
                                              </div>
                                              <div class="text-gray-700 text-sm font-medium"> Tushar Das </div>
                                        </div>
                                  </a>
                                  
                                  <div class="flex items-center">
                                    <svg width="15" height="11" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"/>
                                      </svg>
                                     <div class="text-sm font-medium text-green pl-2">Paid</div>
                                     <!-- <div class="text-sm font-medium text-green pl-2 uppercase">RTD</div> -->
                                     <!-- <div class="text-sm font-medium text-green pl-2">Shipped</div> -->
                                     <!-- <div class="text-sm font-medium text-green pl-2">Delivered</div> -->
                                  </div>
                                  </div>

                              <div class="mt-6">
                                <div class="flex items-center justify-between mb-3">
                                  <div class="text-sm text-gray-500">
                                    Total MRP (1  Item)
                                  </div>
                                  <div class="flex items-center text-sm text-gray-900 font-medium">
                                       <svg width="10" height="11" viewBox="0 0 12 21" fill="none" >
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                        </svg>
                                      <span class="pl-0.5">16,990</span>
                                   
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
                                      <span class="pl-0.5 text-[#01A411]">8,491</span>
                                   
                                  </div>
                                </div>

                                <div class="flex items-center justify-between mb-3">
                                  <div class="flex items-center text-sm text-gray-500">
                                    <span class="pr-1">Shipping Charges </span>                                 
                                  </div>
                                  <div class="flex items-center text-sm text-gray-900 font-medium">                                       
                                       <svg width="10" height="11" viewBox="0 0 14 25" fill="none" >
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#01A411"/>
                                      </svg>
                                      <span class="pl-0.5 text-[#01A411]">45</span>
                                   
                                  </div>
                                  <!-- <div class="flex items-center text-sm text-[#01A411] font-medium">                                      
                                      <span class="pl-0.5">Free</span>                                   
                                  </div> -->
                                </div>

                                                               
                                <div class="border-dashed border-t border-gray-200 pt-4 flex items-center justify-between mt-5">
                                  <div class="text-sm text-gray-900 font-medium">
                                    Total Paid
                                  </div>
                                  <div class="flex items-center text-base text-gray-900 font-medium">
                                    <svg width="12" height="12" viewBox="0 0 12 21" fill="none" >
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                        </svg>
                                      <span class="pl-0.5">8,544</span>                                   
                                  </div>
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
  name: 'SellerBuyStepOnePage',
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

