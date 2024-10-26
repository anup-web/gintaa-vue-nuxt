<template>
  <div class="payment-success-page pt-[80px] lg:pt-12">
      <!--//////////header///////////-->
      <GintaaFoodConsumerHeader @selectedLocation="selectedLocation"/>
      <!--////////Breadcrumb//////////-->
      <div class="mx-auto max-w-[1920px] md:px-8 2xl:px-16 pt-10 hidden md:flex">
           <breadcrumb/>
      </div>
    <div class="max-w-8xl mx-auto px-4 md:px-8 2xl:px-16 pt-5 mb-10">  

          <div class="inline-block w-full py-2 align-middle">
    <ul class="nav nav-tabs flex flex-row md:flex-row list-none border-b border-gray-200 pb-3 mb-4 search-list-tab" id="tabs-tabJustify" role="tablist">
    <li class="nav-item text-right mr-3 relative w-full sm:mr-3 sm:w-full md:mr-2 md:w-[145px] lg:mr-4 lg:w-[145px]" role="presentation">
        <a href="#tabs-homeJustify" class="nav-link w-full font-medium text-center h-[40px] flex items-center justify-center text-sm bg-transparent text-firoza border border-firoza rounded-lg px-1 py-1 hover:border-firoza hover:bg-transparent focus:border-transparent active" 
          id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab"
               aria-controls="tabs-homeJustify" aria-selected="true">               
               Restaurant
               </a>
     </li>

     <li class="nav-item text-right relative w-full sm:w-full md:w-[104px] lg:w-[100px]" role="presentation">
        <a href="#tabs-dispatchJustify" class="nav-link w-full font-medium text-center h-[40px] flex items-center justify-center text-sm bg-transparent text-firoza border border-firoza rounded-lg px-1 py-1 hover:border-firoza hover:bg-transparent focus:border-transparent"
        id="tabs-dispatch-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-dispatchJustify" role="tab"
        aria-controls="#tabs-dispatchJustify" aria-selected="false">        
        Dishes
        </a>
    </li>

  

 
   
  </ul>
 


<div class="tab-content" id="tabs-tabContentJustify">
<div class="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
aria-labelledby="tabs-home-tabJustify">
  <!-- No Restaurants start -->
          <!-- <div class="w-full px-4 py-8">
               <div class="flex items-center justify-center mb-4">
                    <img src="~assets/images/food/res-info.jpg" alt="image" class=" max-w-full" />                              
                </div>
                <div class="flex items-center justify-center text-base text-gray-700 font-medium text-center">Can't find a door to knock</div>
                <div class="flex items-center justify-center text-base text-gray-700 text-center">You don't have an address to deliver</div>                
           </div> -->
          <!-- No Restaurants end -->
<div class="w-full">
            <div class="block items-center sm:block md:flex">
                <div class="relative z-0 w-[175px] mr-4 mb-3 sm:mb-3 md:mb-0">
                      <select name="returnType" placeholder=" " class="text-gray-600 block w-full mt-0 bg-[#D6F0F8] border border-[#DEDEDE] appearance-none focus:outline-none focus:ring-0 focus:border-[#48cef3] rounded text-sm px-4 py-2">
                          <option value="" class="p-1">Sort by</option>
                            <option value="RETURN" class="p-1">Rating (High to Low)</option> 
                            <option value="RETURN_AND_REPLACE" class="p-1">Delivery Time</option>
                            <option value="RETURN" class="p-1">Price (Low to High)</option> 
                            <option value="RETURN_AND_REPLACE" class="p-1">Price (High to Low)</option>
                      </select>
                  <span class="absolute right-3 top-[16px] z-20"><svg width="12" height="7" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                </div>

                <div class="flex items-center">
                <div class="bg-[#D6F0F8] border border-[#DEDEDE] flex items-center justify-center rounded px-3 py-1 h-[38px] mr-4">
                      <div class="flex items-center text-base text-gray-700 ">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">100</span>
                        </div>
                        <div class="text-3xl text-gray-500 px-2">-</div>
                        <div class="flex items-center text-base text-gray-700">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">200</span>
                        </div>
                </div>

                <div class="bg-[#D6F0F8] border border-[#DEDEDE] flex items-center justify-center rounded px-3 py-1 h-[38px] mr-4">                  
                        <div class="flex items-center text-base text-gray-700 mr-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">250</span>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#7a7a7a"/>
                          </svg>
                </div>

                <div class="bg-[#D6F0F8] border border-[#DEDEDE] flex items-center justify-center rounded px-3 py-1 h-[38px] mr-4">                  
                        <div class="text-base text-gray-700 mr-1">Rated 4</div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#7a7a7a"/>
                          </svg>
                </div>
                </div>

            </div>
            <div class="grid gap-x-8 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mt-4">
                  <div class="w-full rounded pb-3 bg-white shadow-md ">
                      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                            <div class="flex items-center">
                                <div class="text-left text-base font-medium text-gray-700 ">By Aahare Bengali</div>
                                <div class="flex items-center bg-green px-1 py-[1px] ml-10 rounded">
                                    <span class="text-sm text-white mr-1">4.4</span>
                                      <svg width="14" height="14" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#ffffff"></path></svg>
                                </div> 
                            </div>
                            <a href="#" class="">
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.405 17.2438C14.405 17.2438 20.0312 11.6125 22.2237 9.41875C22.4062 9.23625 22.4975 8.99625 22.4975 8.75625C22.4975 8.51625 22.4062 8.2775 22.2237 8.09375C20.0325 5.90125 14.405 0.27125 14.405 0.27125C14.225 0.09 13.9875 0 13.75 0C13.5087 0 13.2688 0.0924996 13.085 0.27625C12.7188 0.64125 12.7163 1.23375 13.08 1.59625L19.3025 7.81875H0.9375C0.42 7.81875 0 8.23875 0 8.75625C0 9.27375 0.42 9.69375 0.9375 9.69375H19.3025L13.0787 15.9175C12.7175 16.2787 12.7212 16.87 13.0862 17.235C13.2712 17.42 13.5125 17.5125 13.7525 17.5125C13.99 17.5125 14.225 17.4225 14.405 17.2438Z" fill="#646464"/>
                                </svg>
                          </a>

                      </div>
                  
                  <div class="flex px-4 mt-4">
                
                  <div class="mr-4 flex flex-1 flex-col "> 
                        <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                        <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                        <div class="text-left text-base font-medium text-gray-700 mt-3">Chicken Thali</div> 
                        <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">99</span>
                        </div>
                        <div class="text-left text-sm text-gray-700 mt-3">Chunk of chicken cooked with an array of indian spices and aromatic long grain basmati rice.</div>                  
                  </div>
                  <div class="flex-shrink-0">
                    <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-32 rounded-md"/> 
                     
                  
                  </div>
                </div>
                  </div>


                  <div class="w-full rounded pb-3 bg-white shadow-md ">
                      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                            <div class="flex items-center">
                                <div class="text-left text-base font-medium text-gray-700 ">By Aahare Bengali</div>
                                <div class="flex items-center bg-green px-1 py-[1px] ml-10 rounded">
                                    <span class="text-sm text-white mr-1">4.4</span>
                                      <svg width="14" height="14" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#ffffff"></path></svg>
                                </div> 
                            </div>
                            <a href="#" class="">
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.405 17.2438C14.405 17.2438 20.0312 11.6125 22.2237 9.41875C22.4062 9.23625 22.4975 8.99625 22.4975 8.75625C22.4975 8.51625 22.4062 8.2775 22.2237 8.09375C20.0325 5.90125 14.405 0.27125 14.405 0.27125C14.225 0.09 13.9875 0 13.75 0C13.5087 0 13.2688 0.0924996 13.085 0.27625C12.7188 0.64125 12.7163 1.23375 13.08 1.59625L19.3025 7.81875H0.9375C0.42 7.81875 0 8.23875 0 8.75625C0 9.27375 0.42 9.69375 0.9375 9.69375H19.3025L13.0787 15.9175C12.7175 16.2787 12.7212 16.87 13.0862 17.235C13.2712 17.42 13.5125 17.5125 13.7525 17.5125C13.99 17.5125 14.225 17.4225 14.405 17.2438Z" fill="#646464"/>
                                </svg>
                          </a>

                      </div>
                  
                  <div class="flex px-4 mt-4">
                
                  <div class="mr-4 flex flex-1 flex-col "> 
                        <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                  -->
                        <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> 
                        <div class="text-left text-base font-medium text-gray-700 mt-3">Chicken Thali</div> 
                        <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">99</span>
                        </div>
                        <div class="text-left text-sm text-gray-700 mt-3">Chunk of chicken cooked with an array of indian spices and aromatic long grain basmati rice.</div>                  
                  </div>
                  <div class="flex-shrink-0">
                    <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-32 rounded-md"/> 
                     
                  
                  </div>
                </div>
                  </div>

                  <div class="w-full rounded pb-3 bg-white shadow-md ">
                      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                            <div class="flex items-center">
                                <div class="text-left text-base font-medium text-gray-700 ">By Aahare Bengali</div>
                                <div class="flex items-center bg-green px-1 py-[1px] ml-10 rounded">
                                    <span class="text-sm text-white mr-1">4.4</span>
                                      <svg width="14" height="14" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#ffffff"></path></svg>
                                </div> 
                            </div>
                            <a href="#" class="">
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.405 17.2438C14.405 17.2438 20.0312 11.6125 22.2237 9.41875C22.4062 9.23625 22.4975 8.99625 22.4975 8.75625C22.4975 8.51625 22.4062 8.2775 22.2237 8.09375C20.0325 5.90125 14.405 0.27125 14.405 0.27125C14.225 0.09 13.9875 0 13.75 0C13.5087 0 13.2688 0.0924996 13.085 0.27625C12.7188 0.64125 12.7163 1.23375 13.08 1.59625L19.3025 7.81875H0.9375C0.42 7.81875 0 8.23875 0 8.75625C0 9.27375 0.42 9.69375 0.9375 9.69375H19.3025L13.0787 15.9175C12.7175 16.2787 12.7212 16.87 13.0862 17.235C13.2712 17.42 13.5125 17.5125 13.7525 17.5125C13.99 17.5125 14.225 17.4225 14.405 17.2438Z" fill="#646464"/>
                                </svg>
                          </a>

                      </div>
                  
                  <div class="flex px-4 mt-4">
                
                  <div class="mr-4 flex flex-1 flex-col "> 
                        <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                        <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                        <div class="text-left text-base font-medium text-gray-700 mt-3">Chicken Thali</div> 
                        <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">99</span>
                        </div>
                        <div class="text-left text-sm text-gray-700 mt-3">Chunk of chicken cooked with an array of indian spices and aromatic long grain basmati rice.</div>                  
                  </div>
                  <div class="flex-shrink-0">
                    <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-32 rounded-md"/> 
                     
                  
                  </div>
                </div>
                  </div>

                  <div class="w-full rounded pb-3 bg-white shadow-md ">
                      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                            <div class="flex items-center">
                                <div class="text-left text-base font-medium text-gray-700 ">By Aahare Bengali</div>
                                <div class="flex items-center bg-green px-1 py-[1px] ml-10 rounded">
                                    <span class="text-sm text-white mr-1">4.4</span>
                                      <svg width="14" height="14" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#ffffff"></path></svg>
                                </div> 
                            </div>
                            <a href="#" class="">
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.405 17.2438C14.405 17.2438 20.0312 11.6125 22.2237 9.41875C22.4062 9.23625 22.4975 8.99625 22.4975 8.75625C22.4975 8.51625 22.4062 8.2775 22.2237 8.09375C20.0325 5.90125 14.405 0.27125 14.405 0.27125C14.225 0.09 13.9875 0 13.75 0C13.5087 0 13.2688 0.0924996 13.085 0.27625C12.7188 0.64125 12.7163 1.23375 13.08 1.59625L19.3025 7.81875H0.9375C0.42 7.81875 0 8.23875 0 8.75625C0 9.27375 0.42 9.69375 0.9375 9.69375H19.3025L13.0787 15.9175C12.7175 16.2787 12.7212 16.87 13.0862 17.235C13.2712 17.42 13.5125 17.5125 13.7525 17.5125C13.99 17.5125 14.225 17.4225 14.405 17.2438Z" fill="#646464"/>
                                </svg>
                          </a>

                      </div>
                  
                  <div class="flex px-4 mt-4">
                
                  <div class="mr-4 flex flex-1 flex-col "> 
                        <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                        <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                        <div class="text-left text-base font-medium text-gray-700 mt-3">Chicken Thali</div> 
                        <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">99</span>
                        </div>
                        <div class="text-left text-sm text-gray-700 mt-3">Chunk of chicken cooked with an array of indian spices and aromatic long grain basmati rice.</div>                  
                  </div>
                  <div class="flex-shrink-0">
                    <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-32 rounded-md"/> 
                      
                  
                  </div>
                </div>
                  </div>

                  <div class="w-full rounded pb-3 bg-white shadow-md ">
                      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                            <div class="flex items-center">
                                <div class="text-left text-base font-medium text-gray-700 ">By Aahare Bengali</div>
                                <div class="flex items-center bg-green px-1 py-[1px] ml-10 rounded">
                                    <span class="text-sm text-white mr-1">4.4</span>
                                      <svg width="14" height="14" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#ffffff"></path></svg>
                                </div> 
                            </div>
                            <a href="#" class="">
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.405 17.2438C14.405 17.2438 20.0312 11.6125 22.2237 9.41875C22.4062 9.23625 22.4975 8.99625 22.4975 8.75625C22.4975 8.51625 22.4062 8.2775 22.2237 8.09375C20.0325 5.90125 14.405 0.27125 14.405 0.27125C14.225 0.09 13.9875 0 13.75 0C13.5087 0 13.2688 0.0924996 13.085 0.27625C12.7188 0.64125 12.7163 1.23375 13.08 1.59625L19.3025 7.81875H0.9375C0.42 7.81875 0 8.23875 0 8.75625C0 9.27375 0.42 9.69375 0.9375 9.69375H19.3025L13.0787 15.9175C12.7175 16.2787 12.7212 16.87 13.0862 17.235C13.2712 17.42 13.5125 17.5125 13.7525 17.5125C13.99 17.5125 14.225 17.4225 14.405 17.2438Z" fill="#646464"/>
                                </svg>
                          </a>

                      </div>
                  
                  <div class="flex px-4 mt-4">
                
                  <div class="mr-4 flex flex-1 flex-col "> 
                        <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                        <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                        <div class="text-left text-base font-medium text-gray-700 mt-3">Chicken Thali</div> 
                        <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">99</span>
                        </div>
                        <div class="text-left text-sm text-gray-700 mt-3">Chunk of chicken cooked with an array of indian spices and aromatic long grain basmati rice.</div>                  
                  </div>
                  <div class="flex-shrink-0">
                    <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-32 rounded-md"/> 
                      
                  
                  </div>
                </div>
                  </div>

                  <div class="w-full rounded pb-3 bg-white shadow-md ">
                      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                            <div class="flex items-center">
                                <div class="text-left text-base font-medium text-gray-700 ">By Aahare Bengali</div>
                                <div class="flex items-center bg-green px-1 py-[1px] ml-10 rounded">
                                    <span class="text-sm text-white mr-1">4.4</span>
                                      <svg width="14" height="14" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#ffffff"></path></svg>
                                </div> 
                            </div>
                            <a href="#" class="">
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.405 17.2438C14.405 17.2438 20.0312 11.6125 22.2237 9.41875C22.4062 9.23625 22.4975 8.99625 22.4975 8.75625C22.4975 8.51625 22.4062 8.2775 22.2237 8.09375C20.0325 5.90125 14.405 0.27125 14.405 0.27125C14.225 0.09 13.9875 0 13.75 0C13.5087 0 13.2688 0.0924996 13.085 0.27625C12.7188 0.64125 12.7163 1.23375 13.08 1.59625L19.3025 7.81875H0.9375C0.42 7.81875 0 8.23875 0 8.75625C0 9.27375 0.42 9.69375 0.9375 9.69375H19.3025L13.0787 15.9175C12.7175 16.2787 12.7212 16.87 13.0862 17.235C13.2712 17.42 13.5125 17.5125 13.7525 17.5125C13.99 17.5125 14.225 17.4225 14.405 17.2438Z" fill="#646464"/>
                                </svg>
                          </a>

                      </div>
                  
                  <div class="flex px-4 mt-4">
                
                  <div class="mr-4 flex flex-1 flex-col "> 
                        <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                        <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                        <div class="text-left text-base font-medium text-gray-700 mt-3">Chicken Thali</div> 
                        <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">99</span>
                        </div>
                        <div class="text-left text-sm text-gray-700 mt-3">Chunk of chicken cooked with an array of indian spices and aromatic long grain basmati rice.</div>                  
                  </div>
                  <div class="flex-shrink-0">
                    <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-32 rounded-md"/> 
                     
                  
                  </div>
                </div>
                  </div>
                
                    
            </div>
          </div> 


</div>

<div class="tab-pane fade" id="tabs-dispatchJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">

  <!-- No Dishes start -->
          <!-- <div class="w-full px-4 py-8">
               <div class="flex items-center justify-center mb-4">
                    <img src="~assets/images/food/add-food.svg" alt="image" class=" max-w-full" />                              
                </div>
                <div class="flex items-center justify-center text-base text-gray-700 font-medium text-center">Can't find a door to knock</div>
                <div class="flex items-center justify-center text-base text-gray-700 text-center">You don't have an address to deliver</div>                
           </div> -->
          <!-- No Dishes end -->

  <div class="w-full">
            <div class="block items-center sm:block md:flex">
                <div class="relative z-0 w-[175px] mr-4 mb-3 sm:mb-3 md:mb-0">
                      <select name="returnType" placeholder=" " class="text-gray-600 block w-full mt-0 bg-[#D6F0F8] border border-[#DEDEDE] appearance-none focus:outline-none focus:ring-0 focus:border-[#48cef3] rounded text-sm px-4 py-2">
                          <option value="" class="p-1">Sort by</option>
                            <option value="RETURN" class="p-1">Rating (High to Low)</option> 
                            <option value="RETURN_AND_REPLACE" class="p-1">Delivery Time</option>
                            <option value="RETURN" class="p-1">Price (Low to High)</option> 
                            <option value="RETURN_AND_REPLACE" class="p-1">Price (High to Low)</option>
                      </select>
                  <span class="absolute right-3 top-[16px] z-20"><svg width="12" height="7" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>
                </div>

                <div class="flex items-center">
                <div class="bg-[#D6F0F8] border border-[#DEDEDE] flex items-center justify-center rounded px-3 py-1 h-[38px] mr-4">
                      <div class="flex items-center text-base text-gray-700 ">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">100</span>
                        </div>
                        <div class="text-3xl text-gray-500 px-2">-</div>
                        <div class="flex items-center text-base text-gray-700">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">200</span>
                        </div>
                </div>

                <div class="bg-[#D6F0F8] border border-[#DEDEDE] flex items-center justify-center rounded px-3 py-1 h-[38px] mr-4">                  
                        <div class="flex items-center text-base text-gray-700 mr-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">250</span>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#7a7a7a"/>
                          </svg>
                </div>

                <div class="bg-[#D6F0F8] border border-[#DEDEDE] flex items-center justify-center rounded px-3 py-1 h-[38px] mr-4">                  
                        <div class="text-base text-gray-700 mr-1">Rated 4</div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#7a7a7a"/>
                          </svg>
                </div>
                </div>

            </div>
            <div class="grid gap-x-8 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mt-4">
                  <div class="w-full rounded pb-3 bg-white shadow-md ">
                      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                            <div class="flex items-center">
                                <div class="text-left text-base font-medium text-gray-700 ">By Aahare Bengali</div>
                                <div class="flex items-center bg-green px-1 py-[1px] ml-10 rounded">
                                    <span class="text-sm text-white mr-1">4.4</span>
                                      <svg width="14" height="14" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#ffffff"></path></svg>
                                </div> 
                            </div>
                            <a href="#" class="">
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.405 17.2438C14.405 17.2438 20.0312 11.6125 22.2237 9.41875C22.4062 9.23625 22.4975 8.99625 22.4975 8.75625C22.4975 8.51625 22.4062 8.2775 22.2237 8.09375C20.0325 5.90125 14.405 0.27125 14.405 0.27125C14.225 0.09 13.9875 0 13.75 0C13.5087 0 13.2688 0.0924996 13.085 0.27625C12.7188 0.64125 12.7163 1.23375 13.08 1.59625L19.3025 7.81875H0.9375C0.42 7.81875 0 8.23875 0 8.75625C0 9.27375 0.42 9.69375 0.9375 9.69375H19.3025L13.0787 15.9175C12.7175 16.2787 12.7212 16.87 13.0862 17.235C13.2712 17.42 13.5125 17.5125 13.7525 17.5125C13.99 17.5125 14.225 17.4225 14.405 17.2438Z" fill="#646464"/>
                                </svg>
                          </a>

                      </div>
                  
                  <div class="flex px-4 mt-4">
                
                  <div class="mr-4 flex flex-1 flex-col "> 
                        <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                        <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                        <div class="text-left text-base font-medium text-gray-700 mt-3">Chicken Thali</div> 
                        <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">99</span>
                        </div>
                        <div class="text-left text-sm text-gray-700 mt-3">Chunk of chicken cooked with an array of indian spices and aromatic long grain basmati rice.</div>                  
                  </div>
                  <div class="flex-shrink-0">
                    <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-32 rounded-md"/> 
                    
                  
                  </div>
                </div>
                  </div>


                  <div class="w-full rounded pb-3 bg-white shadow-md ">
                      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                            <div class="flex items-center">
                                <div class="text-left text-base font-medium text-gray-700 ">By Aahare Bengali</div>
                                <div class="flex items-center bg-green px-1 py-[1px] ml-10 rounded">
                                    <span class="text-sm text-white mr-1">4.4</span>
                                      <svg width="14" height="14" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#ffffff"></path></svg>
                                </div> 
                            </div>
                            <a href="#" class="">
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.405 17.2438C14.405 17.2438 20.0312 11.6125 22.2237 9.41875C22.4062 9.23625 22.4975 8.99625 22.4975 8.75625C22.4975 8.51625 22.4062 8.2775 22.2237 8.09375C20.0325 5.90125 14.405 0.27125 14.405 0.27125C14.225 0.09 13.9875 0 13.75 0C13.5087 0 13.2688 0.0924996 13.085 0.27625C12.7188 0.64125 12.7163 1.23375 13.08 1.59625L19.3025 7.81875H0.9375C0.42 7.81875 0 8.23875 0 8.75625C0 9.27375 0.42 9.69375 0.9375 9.69375H19.3025L13.0787 15.9175C12.7175 16.2787 12.7212 16.87 13.0862 17.235C13.2712 17.42 13.5125 17.5125 13.7525 17.5125C13.99 17.5125 14.225 17.4225 14.405 17.2438Z" fill="#646464"/>
                                </svg>
                          </a>

                      </div>
                  
                  <div class="flex px-4 mt-4">
                
                  <div class="mr-4 flex flex-1 flex-col "> 
                        <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                  -->
                        <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> 
                        <div class="text-left text-base font-medium text-gray-700 mt-3">Chicken Thali</div> 
                        <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">99</span>
                        </div>
                        <div class="text-left text-sm text-gray-700 mt-3">Chunk of chicken cooked with an array of indian spices and aromatic long grain basmati rice.</div>                  
                  </div>
                  <div class="flex-shrink-0">
                    <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-32 rounded-md"/> 
                     
                  
                  </div>
                </div>
                  </div>

                  <div class="w-full rounded pb-3 bg-white shadow-md ">
                      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                            <div class="flex items-center">
                                <div class="text-left text-base font-medium text-gray-700 ">By Aahare Bengali</div>
                                <div class="flex items-center bg-green px-1 py-[1px] ml-10 rounded">
                                    <span class="text-sm text-white mr-1">4.4</span>
                                      <svg width="14" height="14" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#ffffff"></path></svg>
                                </div> 
                            </div>
                            <a href="#" class="">
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.405 17.2438C14.405 17.2438 20.0312 11.6125 22.2237 9.41875C22.4062 9.23625 22.4975 8.99625 22.4975 8.75625C22.4975 8.51625 22.4062 8.2775 22.2237 8.09375C20.0325 5.90125 14.405 0.27125 14.405 0.27125C14.225 0.09 13.9875 0 13.75 0C13.5087 0 13.2688 0.0924996 13.085 0.27625C12.7188 0.64125 12.7163 1.23375 13.08 1.59625L19.3025 7.81875H0.9375C0.42 7.81875 0 8.23875 0 8.75625C0 9.27375 0.42 9.69375 0.9375 9.69375H19.3025L13.0787 15.9175C12.7175 16.2787 12.7212 16.87 13.0862 17.235C13.2712 17.42 13.5125 17.5125 13.7525 17.5125C13.99 17.5125 14.225 17.4225 14.405 17.2438Z" fill="#646464"/>
                                </svg>
                          </a>

                      </div>
                  
                  <div class="flex px-4 mt-4">
                
                  <div class="mr-4 flex flex-1 flex-col "> 
                        <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                        <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                        <div class="text-left text-base font-medium text-gray-700 mt-3">Chicken Thali</div> 
                        <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">99</span>
                        </div>
                        <div class="text-left text-sm text-gray-700 mt-3">Chunk of chicken cooked with an array of indian spices and aromatic long grain basmati rice.</div>                  
                  </div>
                  <div class="flex-shrink-0">
                    <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-32 rounded-md"/> 
                    
                  
                  </div>
                </div>
                  </div>

                  <div class="w-full rounded pb-3 bg-white shadow-md ">
                      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                            <div class="flex items-center">
                                <div class="text-left text-base font-medium text-gray-700 ">By Aahare Bengali</div>
                                <div class="flex items-center bg-green px-1 py-[1px] ml-10 rounded">
                                    <span class="text-sm text-white mr-1">4.4</span>
                                      <svg width="14" height="14" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#ffffff"></path></svg>
                                </div> 
                            </div>
                            <a href="#" class="">
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.405 17.2438C14.405 17.2438 20.0312 11.6125 22.2237 9.41875C22.4062 9.23625 22.4975 8.99625 22.4975 8.75625C22.4975 8.51625 22.4062 8.2775 22.2237 8.09375C20.0325 5.90125 14.405 0.27125 14.405 0.27125C14.225 0.09 13.9875 0 13.75 0C13.5087 0 13.2688 0.0924996 13.085 0.27625C12.7188 0.64125 12.7163 1.23375 13.08 1.59625L19.3025 7.81875H0.9375C0.42 7.81875 0 8.23875 0 8.75625C0 9.27375 0.42 9.69375 0.9375 9.69375H19.3025L13.0787 15.9175C12.7175 16.2787 12.7212 16.87 13.0862 17.235C13.2712 17.42 13.5125 17.5125 13.7525 17.5125C13.99 17.5125 14.225 17.4225 14.405 17.2438Z" fill="#646464"/>
                                </svg>
                          </a>

                      </div>
                  
                  <div class="flex px-4 mt-4">
                
                  <div class="mr-4 flex flex-1 flex-col "> 
                        <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                        <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                        <div class="text-left text-base font-medium text-gray-700 mt-3">Chicken Thali</div> 
                        <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">99</span>
                        </div>
                        <div class="text-left text-sm text-gray-700 mt-3">Chunk of chicken cooked with an array of indian spices and aromatic long grain basmati rice.</div>                  
                  </div>
                  <div class="flex-shrink-0">
                    <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-32 rounded-md"/> 
                     
                  
                  </div>
                </div>
                  </div>

                  <div class="w-full rounded pb-3 bg-white shadow-md ">
                      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                            <div class="flex items-center">
                                <div class="text-left text-base font-medium text-gray-700 ">By Aahare Bengali</div>
                                <div class="flex items-center bg-green px-1 py-[1px] ml-10 rounded">
                                    <span class="text-sm text-white mr-1">4.4</span>
                                      <svg width="14" height="14" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#ffffff"></path></svg>
                                </div> 
                            </div>
                            <a href="#" class="">
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.405 17.2438C14.405 17.2438 20.0312 11.6125 22.2237 9.41875C22.4062 9.23625 22.4975 8.99625 22.4975 8.75625C22.4975 8.51625 22.4062 8.2775 22.2237 8.09375C20.0325 5.90125 14.405 0.27125 14.405 0.27125C14.225 0.09 13.9875 0 13.75 0C13.5087 0 13.2688 0.0924996 13.085 0.27625C12.7188 0.64125 12.7163 1.23375 13.08 1.59625L19.3025 7.81875H0.9375C0.42 7.81875 0 8.23875 0 8.75625C0 9.27375 0.42 9.69375 0.9375 9.69375H19.3025L13.0787 15.9175C12.7175 16.2787 12.7212 16.87 13.0862 17.235C13.2712 17.42 13.5125 17.5125 13.7525 17.5125C13.99 17.5125 14.225 17.4225 14.405 17.2438Z" fill="#646464"/>
                                </svg>
                          </a>

                      </div>
                  
                  <div class="flex px-4 mt-4">
                
                  <div class="mr-4 flex flex-1 flex-col "> 
                        <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                        <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                        <div class="text-left text-base font-medium text-gray-700 mt-3">Chicken Thali</div> 
                        <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">99</span>
                        </div>
                        <div class="text-left text-sm text-gray-700 mt-3">Chunk of chicken cooked with an array of indian spices and aromatic long grain basmati rice.</div>                  
                  </div>
                  <div class="flex-shrink-0">
                    <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-32 rounded-md"/> 
                     
                  
                  </div>
                </div>
                  </div>

                  <div class="w-full rounded pb-3 bg-white shadow-md ">
                      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                            <div class="flex items-center">
                                <div class="text-left text-base font-medium text-gray-700 ">By Aahare Bengali</div>
                                <div class="flex items-center bg-green px-1 py-[1px] ml-10 rounded">
                                    <span class="text-sm text-white mr-1">4.4</span>
                                      <svg width="14" height="14" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#ffffff"></path></svg>
                                </div> 
                            </div>
                            <a href="#" class="">
                                <svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.405 17.2438C14.405 17.2438 20.0312 11.6125 22.2237 9.41875C22.4062 9.23625 22.4975 8.99625 22.4975 8.75625C22.4975 8.51625 22.4062 8.2775 22.2237 8.09375C20.0325 5.90125 14.405 0.27125 14.405 0.27125C14.225 0.09 13.9875 0 13.75 0C13.5087 0 13.2688 0.0924996 13.085 0.27625C12.7188 0.64125 12.7163 1.23375 13.08 1.59625L19.3025 7.81875H0.9375C0.42 7.81875 0 8.23875 0 8.75625C0 9.27375 0.42 9.69375 0.9375 9.69375H19.3025L13.0787 15.9175C12.7175 16.2787 12.7212 16.87 13.0862 17.235C13.2712 17.42 13.5125 17.5125 13.7525 17.5125C13.99 17.5125 14.225 17.4225 14.405 17.2438Z" fill="#646464"/>
                                </svg>
                          </a>

                      </div>
                  
                  <div class="flex px-4 mt-4">
                
                  <div class="mr-4 flex flex-1 flex-col "> 
                        <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                        <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                        <div class="text-left text-base font-medium text-gray-700 mt-3">Chicken Thali</div> 
                        <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                          <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                          <span class="pl-0.5">99</span>
                        </div>
                        <div class="text-left text-sm text-gray-700 mt-3">Chunk of chicken cooked with an array of indian spices and aromatic long grain basmati rice.</div>                  
                  </div>
                  <div class="flex-shrink-0">
                    <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-32 rounded-md"/> 
                     
                  
                  </div>
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
    name: 'foodSearchListPage',
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

  methods:{
    selectedLocation(location) {
   console.log("food  selectedLocation in home page:", location)
     // this.selectedAddress = location
    },
  }
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
  
    
     .search-list-tab .nav-link {
        color: #48CEF3;
     }

     .search-list-tab .nav-link.active {
        color: #ffffff;
        border-color: #48CEF3;       
        background-color: #48CEF3;
      }
  
  </style>
  
  