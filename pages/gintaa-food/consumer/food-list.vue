<template>
    <div class="relative overflow-hidden pt-[80px] lg:pt-12">
        <GintaaFoodConsumerHeader/>
        <div class="max-w-[1920px] bg-[#333b24] mx-auto  md:px-8 2xl:px-16 pt-4 sm:pt-4 md:pt-4 lg:pt-6 xl:pt-6 2xl:pt-6">
            <div class="w-full max-w-8xl mx-auto px-4 sm:w-full md:container md:px-8 2xl:px-16">
             <div class="w-full flex justify-between pb-6 pt-4">
              <div class="block sm:block md:flex">
                <div class="flex-shrink-0">
                  <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-full h-[200px] rounded-md sm:w-full md:w-[280px]"/>
                </div>
                <div class="ml-0 mt-3 flex flex-1 flex-col sm:ml-0 sm:mt-3 md:ml-4 md:mt-0">                  
                     <div class="text-left text-[22px] font-medium text-white">Shimla Biryani Restaurant</div> 

                     <div class="flex item-center mt-2">

                     <div class="flex items-center bg-[#03B760] rounded-full h-[20px] px-2">
                      <svg width="14" height="14" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#ffffff"></path></svg>
                      <span class="text-sm text-white ml-1">4.4</span>
                    </div>
                    <div class="flex item-center ml-2">
                         <div class="text-base text-white">500</div>
                          <span class="px-1 mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#ffffff"/>
                          </svg>
                          </span>
                         <div class="text-base text-white">ratings</div>
                    </div>
                  </div>

                  <div class="flex items-center mt-2">
                    <div class="text-[15px] text-white">Minimum Order value :</div> 
                    <div class="flex items-center text-base text-white font-medium ml-1">
                      <svg width="12" height="12" viewBox="0 0 12 21" fill="none"><path  fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="white"></path></svg> 
                    <span class="pl-0.5">99</span>
                  </div></div>

                  <div class="flex items-center mt-2">
                       <div class="flex items-center">
                        <svg width="15" height="16" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#ffffff"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#ffffff"/>
                        </svg>
                        <span class="text-white text-sm ml-1">Area : </span>
                       </div>
                       <div class="text-sm text-white ml-1">EM Bypass</div>
                  </div>

                  <div class="text-sm font-medium text-white mt-2 ml-5">2.4 KM  30-35 min (Approx.)</div>

                  <form role="search" class="flex w-[300px] relative rounded-md mt-2"><label for="top-bar-search" class="flex flex-1 items-center "><input id="search at header" type="text" autocomplete="off" name="search" placeholder="Search" value="" class="w-full h-full flex item-center appearance-none transition duration-300 ease-in-out text-heading text-sm placeholder-gray-500 overflow-hidden rounded focus:outline-none focus:ring-0 bg-gray-100 ps-10 pe-12 md:ps-14 border border-border-200 focus:border-accent focus:bg-light py-2 px-4"></label> <span class="w-12 md:w-12 h-full absolute top-0 right-0 flex flex-shrink-0 justify-center items-center focus:outline-none"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="w-5 h-5 text-skin-base ttext-gray-400"><path d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z" fill="#888a8f"></path></svg></span></form>

                </div>
              </div>
             </div> 
        </div>
        </div>
      
        <div class=" max-w-[1920px]  mx-auto  md:px-8 2xl:px-16 pt-4 sm:pt-4 md:pt-4 lg:pt-6 xl:pt-6 2xl:pt-6">
             <div class="w-full max-w-8xl mx-auto px-4 sm:w-full md:container md:px-8 2xl:px-16">
             <div class="w-full pl-0 relative flex flex-col sm:flex-col sm:pl-0 md:pl-20 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mb-14">
               <div class="grid gap-8 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 2xl:grid-cols-12">
                 <div class="col-span-full sm:col-span-8 md:col-span-8 lg:col-span-8 xl:col-span-8 2xl:col-span-8"> 
                   <div class="block sm:block md:flex">   
                 <div class="bg-gray-100 py-4 pr-4 w-[220px] h-[320px] flex-shrink-0">
                  <ul class="list-none flex flex-col space-y-2">
                    <li class="py-0.5 px-4 select-menu">
                         <a class="text-base text-gray-900" href="#">Recommended <span class="ml-1">(9)</span></a>
                    </li>
                    <li class="py-0.5 px-4">
                         <a class="text-base text-gray-900" href="#">Biryani <span class="ml-1">(5)</span></a>
                    </li>
                    <li class="py-0.5 px-4">
                         <a class="text-base text-gray-900" href="#">Starter <span class="ml-1">(6)</span></a>
                    </li>
                    <li class="py-0.5 px-4">
                         <a class="text-base text-gray-900" href="#">Fish <span class="ml-1">(8)</span></a>
                    </li>
                    <li class="py-0.5 px-4">
                         <a class="text-base text-gray-900" href="#">Chicken <span class="ml-1">(16)</span></a>
                    </li>
                    <li class="py-0.5 px-4">
                         <a class="text-base text-gray-900" href="#">Mutton <span class="ml-1">(10)</span></a>
                    </li>
                    <li class="py-0.5 px-4">
                         <a class="text-base text-gray-900" href="#">Pulao <span class="ml-1">(5)</span></a>
                    </li>
                    <li class="py-0.5 px-4">
                         <a class="text-base text-gray-900" href="#">Thali <span class="ml-1">(3)</span></a>
                    </li>
                </ul>
                 </div>

              <div class="px-0 mt-6 flex-1 sm:px-0 sm:mt-6 md:px-6 md:mt-0">
                      <div class="flex items-center mb-0 sm:mb-0 md:mb-14">
                           <div class="px-4 py-2 bg-firoza text-white border border-gray-200 mr-4 w-[100px] text-center">All</div>
                           <div class="px-4 py-2 text-gray-700 border border-[#1FBE58] mr-4 w-[100px] text-center">Veg</div>
                           <div class="px-4 py-2 text-gray-700 border border-[#EE1029] w-[100px] text-center">Non-veg</div>
                </div>
               
              <div class="divide-y divide-slate-200 ">

               <div class="flex py-6">
                <div class="flex-shrink-0">
                  <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-28 rounded-md"/> 
                  <!-- <button type="button" class="border border-green mt-2 w-[95px] flex justify-center items-center bg-transparent h-8 py-1 px-3 rounded-full text-base text-green">
                         <span>Add</span>
                  </button>                   -->
                  <div class="mt-2 w-[95px] rounded-full border border-green flex items-center justify-between">
                       <span class="cursor-pointer px-1 border-r border-green py-1 h-7 w-7 flex items-center justify-center"><svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="1" x2="11" y2="1" stroke="#8EC641" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        </span> 
                       <div class="flex items-center justify-center text-green text-sm px-2">1</div>
                       <span class="cursor-pointer px-1 border-l border-green py-1 w-7 h-7 flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#8bc63e"/>
                        </svg>
                       </span>
                  </div>
                </div>


                <div class="ml-4 flex flex-1 flex-col "> 
                      <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                  -->
                      <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg>
                      <div class="text-left text-base font-medium text-gray-700 mt-2">Chicken Thali</div> 
                      <div class="flex items-center text-base text-gray-700 font-medium">
                        <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                        <span class="pl-0.5">99</span>
                      </div>

                      <div class="flex items-center">                              
                              <div class="flex items-center">
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#DADADA"/>
                                  </svg>
                              </div>
                              <div class="text-sm text-gray-900 text-center ml-2">4.4(50)</div>
                          </div>


                     <div class="flex item-center">                    
                    <div class="flex flex-col mt-1">
                          <div>
                         <div class="text-sm text-gray-700 float-left">Rice</div>
                          <span class="float-left pt-0.5 px-1">
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#8CAEC5"/>
                              </svg>
                          </span>
                         <div class="text-sm text-gray-700 float-left">Dal</div>
                         <span class="float-left pt-0.5 px-1">
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#8CAEC5"/>
                              </svg>
                          </span>
                          <div class="text-sm text-gray-700 float-left">Jhuri Aloo Bhaja or Any Bhaja</div>
                          </div>
                          <div class="text-xs font-medium text-gray-700 mt-1">Read More</div>
                    </div>
                  </div>                   
                </div>
              </div>

              <div class="flex py-6">
                <div class="flex-shrink-0">
                  <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-32 h-28 rounded-md"/> 
                  <button type="button" class="border border-green mt-2 w-[95px] flex justify-center items-center h-8 bg-transparent py-1 px-3 rounded-full text-base text-green">
                         <span>Add</span>
                  </button>  
                  <!-- <div class="mt-2 w-[95px] rounded-full border border-green flex items-center justify-between">
                       <span class="cursor-pointer px-1 border-r border-green py-1 h-7 w-7 flex items-center justify-center"><svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="1" x2="11" y2="1" stroke="#8EC641" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        </span> 
                       <div class="flex items-center justify-center text-green text-sm px-2">1</div>
                       <span class="cursor-pointer px-1 border-l border-green py-1 w-7 h-7 flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#8bc63e"/>
                        </svg>
                       </span>
                  </div>                 -->
                </div>


                <div class="ml-4 flex flex-1 flex-col "> 
                      <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                      <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                      <div class="text-left text-base font-medium text-gray-700 mt-2">Chicken Thali</div> 
                      <div class="flex items-center text-base text-gray-700 font-medium">
                        <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                        <span class="pl-0.5">99</span>
                      </div>

                      <div class="flex items-center">                              
                              <div class="flex items-center">
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#DADADA"/>
                                  </svg>
                              </div>
                              <div class="text-sm text-gray-900 text-center ml-2">4.4(50)</div>
                          </div>


                     <div class="flex item-center">                    
                    <div class="flex flex-col mt-1">
                          <div>
                         <div class="text-sm text-gray-700 float-left">Rice</div>
                          <span class="float-left pt-0.5 px-1">
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#8CAEC5"/>
                              </svg>
                          </span>
                         <div class="text-sm text-gray-700 float-left">Dal</div>
                         <span class="float-left pt-0.5 px-1">
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#8CAEC5"/>
                              </svg>
                          </span>
                          <div class="text-sm text-gray-700 float-left">Jhuri Aloo Bhaja or Any Bhaja</div>
                          </div>
                          <div class="text-xs font-medium text-gray-700 mt-1">Read More</div>
                    </div>
                  </div>                   
                </div>
              </div>

              </div>

                 </div>
                 </div>
                 </div>
                 <div class="col-span-full sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4">
                <div class=" rounded-lg shadow w-[338px] ">
                    <!-- <div class="w-full cart-empty px-4 py-4 bg-white">
                         <div class="text-lg text-gray-900 font-medium mb-3 text-center">Cart Empty</div>
                         <div class="flex items-center justify-center"><img src="~/assets/images/food/empty.png" alt="image" class="w-[192px] h-[192px]" ></div> 
                         <div class="text-sm text-gray-900 mt-3 text-center">Good food is always cooking! Go ahead, order some yummy items from the menu.</div> 
                    </div> -->
                    <div class="w-full">
                     <div class="bg-[#03B760] px-4 py-2 rounded-t-lg">
                          <div class="text-left text-base text-white flex items-center">Cart <span class="ml-2 text-xs">(2 ITEMS)</span></div> 
                     </div>
                  <div class="flex justify-between border-b border-gray-200 px-4 py-3">
                  <div class="flex">
                <div class="flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                      <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                </div>


                <div class="ml-4 flex flex-1 flex-col ">                      
                      <div class="text-left text-base text-gray-900">Chicken Thali</div> 
                      <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                        <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                        <span class="pl-0.5">99</span>
                      </div>
                      <button type="button" class="mt-1 text-left bg-transparent text-base text-firoza">
                         <span>Edit</span>
                      </button>                
                </div>
              </div>

               <div class="flex flex-col">
                      <div class="w-[84px] rounded-full border border-green flex items-center justify-between">
                       <span class="cursor-pointer px-1 border-r border-green py-1 h-6 w-6 flex items-center justify-center"><svg width="10" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="1" x2="11" y2="1" stroke="#8EC641" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        </span> 
                       <div class="flex items-center justify-center text-green text-sm px-2">1</div>
                       <span class="cursor-pointer px-1 border-l border-green py-1 w-6 h-6 flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#8bc63e"/>
                        </svg>
                       </span>
                  </div> 
                  <div class="flex items-center justify-end text-base text-gray-700 font-medium mt-2">
                        <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                        <span class="pl-0.5">99</span>
                   </div>                
               </div>
              </div>

              <div class="flex justify-between border-b border-gray-200 px-4 py-3">
                  <div class="flex">
                <div class="flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                      <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                </div>


                <div class="ml-4 flex flex-1 flex-col ">                      
                      <div class="text-left text-base text-gray-900">Chicken Thali</div> 
                      <div class="flex items-center text-base text-gray-700 font-medium mt-1">
                        <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                        <span class="pl-0.5">99</span>
                      </div>
                      <button type="button" class="mt-1 text-left bg-transparent text-base text-firoza">
                         <span>Edit</span>
                      </button>                
                </div>
              </div>

               <div class="flex flex-col">
                      <div class="w-[84px] rounded-full border border-green flex items-center justify-between">
                       <span class="cursor-pointer px-1 border-r border-green py-1 h-6 w-6 flex items-center justify-center"><svg width="10" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="1" x2="11" y2="1" stroke="#8EC641" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        </span> 
                       <div class="flex items-center justify-center text-green text-sm px-2">1</div>
                       <span class="cursor-pointer px-1 border-l border-green py-1 w-6 h-6 flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#8bc63e"/>
                        </svg>
                       </span>
                  </div> 
                  <div class="flex items-center justify-end text-base text-gray-700 font-medium mt-2">
                        <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                        <span class="pl-0.5">99</span>
                   </div>                
               </div>
              </div>

                 <div class="flex items-center justify-between px-4 py-2">
                      <div class="w-[55%] pr-2 pl-4 py-1.5 bg-firoza flex justify-start items-center h-[50px] rounded-l-md">
                          <a href="#" class="flex items-center text-white text-base">View Cart
                            <span class="ml-0.5"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 19.1683V4.83167L18.1507 12L7 19.1683Z" fill="#ffffff"/>
                            </svg></span>
                          </a>
                      </div>
                      <div class="w-[45%] pr-4 pl-2 py-1.5 bg-[#00ADDF] h-[50px] rounded-r-md">
                           <div class="flex item-center justify-end">
                            <div class="text-left text-sm text-white">2 <span class="m-1">Items</span></div> 
                            <div class="w-[2px] h-[13px] bg-white mx-1 mt-[3px]"></div>
                            <div class="flex items-center text-sm text-white font-medium">
                                  <svg width="12" height="12" viewBox="0 0 12 21" fill="none"><path  fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="white"></path></svg> 
                                  <span class="pl-0.5">200</span>
                            </div>
                           </div>
                           <div class="text-right text-xs text-white mt-0.5">Plus tax</div> 
                      </div>
                 </div>
                 </div>
                </div>
                </div>
                </div>
             </div>

        </div>
        </div>
        <GintaaFoodConsumerFooter/>

        <!-- food details modal start -->
        <div class="relative z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
 <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

 <div class="fixed inset-0 z-50 overflow-y-auto">
   <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
     
     <div class="relative transform overflow-hidden rounded-lg bg-white px-0 pt-2 pb-1 text-left shadow-xl transition-all sm:my-4 sm:w-full sm:max-w-lg ">
               
       <div class="w-full">       
               <div class="absolute top-0 right-0 pt-1 pr-1 block">
                   <button type="button" class="rounded-md bg-white text-gray-400 ">
                       <span class="sr-only">Close</span>
                       
                       <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                       </svg>
                   </button>
               </div> 
               
               <div class="w-full px-4 mt-5">
                    <img src="~/assets/images/food/profile-photo.jpg" alt="icon" class="w-full h-[300px] rounded-md"/> 
               </div>

               <div class="px-4 flex flex-1 flex-col w-full pt-4 pb-2 relative">
                      <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                 
                      <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                      <div class="text-left text-base font-medium text-gray-700 mt-2">Chicken Thali</div> 
                      <div class="flex items-center text-base text-gray-700 font-medium">
                        <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                        <span class="pl-0.5">99</span>
                      </div>

                      <div class="flex items-center">                              
                              <div class="flex items-center">
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#DADADA"/>
                                  </svg>
                              </div>
                              <div class="text-sm text-gray-900 text-center ml-2">4.4(50)</div>
                          </div> 


                     <div class="flex item-center">                    
                    <div class="flex flex-col mt-1">
                          <div>
                         <div class="text-sm text-gray-700 float-left">Rice</div>
                          <span class="float-left pt-0.5 px-1">
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#8CAEC5"/>
                              </svg>
                          </span>
                         <div class="text-sm text-gray-700 float-left">Dal</div>
                         <span class="float-left pt-0.5 px-1">
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#8CAEC5"/>
                              </svg>
                          </span>
                          <div class="text-sm text-gray-700 float-left">Jhuri Aloo Bhaja or Any Bhaja</div>
                          </div>
                          
                    </div>
                  </div>
                  
                  <div class="absolute top-2 right-4">                  
                  <button type="button" class="border border-green mt-2 w-[95px] flex justify-center items-center h-8 bg-transparent py-1 px-3 rounded-full text-base text-green">
                         <span>Add</span>
                  </button>  
                  <!-- <div class="mt-2 w-[95px] rounded-full border border-green flex items-center justify-between">
                       <span class="cursor-pointer px-1 border-r border-green py-1 h-7 w-7 flex items-center justify-center"><svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="1" x2="11" y2="1" stroke="#8EC641" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        </span> 
                       <div class="flex items-center justify-center text-green text-sm px-2">1</div>
                       <span class="cursor-pointer px-1 border-l border-green py-1 w-7 h-7 flex items-center justify-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z" fill="#8bc63e"/>
                        </svg>
                       </span>
                  </div>                 -->
                </div>
                </div>
            
                         
       </div>
       
     </div>
   </div>
 </div>
</div>

<!-- food details modal end -->
    </div>
   </template>
   
   <script lang="ts">
   import Vue from 'vue'
   export default Vue.extend({
     name: 'foodListPage',
   });
   </script>

   <style scoped>
        li.select-menu{
            border-left: 6px solid #8bc63e;    
         }
         li.select-menu a{
             color: #8bc63e;
             font-weight: 500;
         }
   </style>