<template>
    <div class="relative bg-[#f8f8f8] min-h-screen">

        <GintaaFoodVendorSidebar />
        <div
            class="content-wrapper content-wrapper-min pl-0 relative z-10 sm:pl-0 md:pl-[180px] lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px]">
            <!-- <fullPageLoader v-if="showSeamerLoader" />    -->
            <GintaaFoodVendorHeader />
            <div
                class="content pt-[60px] pb-[100px] px-4 sm:pt-[60px] sm:px-4 sm:pb-[100px] md:px-4 md:pt-[100px] lg:px-8 md:pb-0">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-right text-base font-medium">Add Account</div>
                    <div class="items-center justify-center hidden sm:hidden md:flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 5.37766L17.5 12.3568V20.0002H12.5V15.0002H7.5V20.0002H2.5V12.3568L10 5.37766ZM20 10.1235L10 0.833496L0 10.111L1.13417 11.3318L10 3.1085L18.8658 11.3443L20 10.1235Z"
                                fill="#8EC23C" />
                        </svg>
                        <span class="text-sm text-green ml-2">Home / Menu / Account</span>
                    </div>
                </div>

                <div class="bg-white rounded-sm shadow-sm py-4 mt-6">

                    <!-- no menu start -->
                    <!-- <div class="w-full px-4 py-8">
                                       <div class="flex items-center justify-center mb-4">
                                            <img src="~assets/images/food/add-food.svg" alt="image" class=" max-w-full" />                              
                                       </div>
                                       <div class="flex items-center justify-center text-base text-gray-700 font-medium text-center">You don’t have any item</div>
                                       <div class="flex items-center justify-center text-base text-gray-700 text-center">Add items to receive the orders</div>
                                       <div class="flex items-center justify-center mt-4">
                                        <a href="/gintaa-food/vendor/add-menu" class="border border-green flex justify-center items-center bg-green w-[85px] py-1 px-2 rounded text-xs text-white">
                                              <span>Add Menu</span>
                                        </a> 
                                       </div>
                                  </div> -->
                    <!-- no menu end -->



                    <!-- seamer loader start  -->
                    <!-- <div 
                        class="relative w-full bg-white overflow-hidden shadow hover:shadow-md rounded-lg  px-4 sm:px-4 md:px-4 lg:px-6  divide-y divide-slate-200">
                        <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>
                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="flex items-center justify-center ml-2">
                                <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                            </div>
                        </div>
                        <div class=" animate-pulses flex items-center justify-between px-12 py-2">
                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>
                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="flex items-center justify-center ml-2">
                                <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                            </div>
                        </div>
                        <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>
                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="flex items-center justify-center ml-2">
                                <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                            </div>
                        </div>
                        <div class=" animate-pulses flex items-center justify-between px-12 py-2">
                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>
                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="flex items-center justify-center ml-2">
                                <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                            </div>
                        </div>
                        <div class=" animate-pulses flex items-center justify-between px-4 py-2">
                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>
                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="flex items-center justify-center ml-2">
                                <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                            </div>
                        </div>
                        <div class=" animate-pulses flex items-center justify-between px-12 py-2">
                            <div class="rounded h-8 w-8 bg-gray-200 shimmerBG"></div>
                            <div class="rounded h-2 w-40 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-32 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="rounded h-2 w-36 bg-gray-200 shimmerBG ml-2"></div>
                            <div class="flex items-center justify-center ml-2">
                                <div class="w-6 h-2 bg-gray-200 rounded-full shimmerBG"></div>
                            </div>
                        </div>
                    </div> -->
                    <!-- seamer loader end -->


                    <div class="w-full flex flex-col " >
                 <!-- <div class="flex flex-col w-full px-4 sm:px-6 md:px-6 border-t border-slate-200">
                  <div  class="w-full flex items-center">
                         <h2 class="text-base text-gray-900 font-medium">Bank accounts</h2>
                </div>

                <div class="w-full flex justify-center items-center mt-5 pt-5">
                      <p class="text-sm text-darkcolor"> Add your bank account or any UPI account to withdraw your money from gintaa</p>
                </div>

                <div class="w-full flex justify-center items-center pt-5">
                   <button type="submit"  class="transition-all flex justify-center items-center border border-firoza bg-firoza
                      py-2 px-6 rounded font-normal text-base text-white hover:bg-firoza hover:border-firoza">
                  <span>Add account </span>
                 </button>
               </div>
             </div>  -->

               <div class="flex flex-col w-full px-4 sm:px-6 md:px-6">              
                  <div class="w-full flex items-center justify-between">
                       <h2 class="text-base text-gray-900 font-normal">Bank accounts</h2>
                  <button type="button" class="border border-firoza flex justify-center items-center bg-transparent
                     py-2 px-4 rounded text-firoza font-normal text-base">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Add bank account </span>
              </button>
            </div>

            <div class="flex flex-col w-full mt-5">
              <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
                <div class="flex flex-col w-full bg-white rounded-md shadow relative">
                  <div class="w-full flex items-center justify-end mt-3 px-6">
                    <div class="text-sm text-green">Default account</div>
                  </div>
                  <div class="w-full flex mt-2 px-6">
                    <div class="text-xsb text-gray-600">
                      Account Number - 7857458745584745 </div>
                  </div>

                  <div class="w-full flex mt-2 px-6">
                    <div class="text-xsb text-gray-600">
                      UPI Id - 123456789@okhdfcbank
                    </div>
                  </div>
                  <div class="w-full flex mt-2 px-6">
                    <div class="text-xsb text-gray-600">
                        INDUSIND BANK
                    </div>
                  </div>
                  <div class="w-full flex mt-2 px-6">
                    <div class="text-xsb text-gray-600">
                        Rakesh Das
                    </div>
                  </div>

                  <div class="w-full flex mt-2 px-6">
                    <div class="flex justify-center items-center bg-white rounded-sm cursor-pointer w-6 h-6">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M15.3644 25.1369C15.6272 25.0882 15.8899 25.0394 16.1401 24.9785C16.3029 24.9419 16.453 24.8322 16.5406 24.6982C16.6282 24.5518 16.6533 24.3811 16.6157 24.2226C16.5406 23.9423 16.2903 23.7472 15.99 23.7472C15.9399 23.7472 15.8899 23.7594 15.8399 23.7716C15.6022 23.8325 15.377 23.8813 15.1391 23.9179C14.7888 23.9788 14.5636 24.308 14.6262 24.6493C14.6512 24.8077 14.7513 24.954 14.8889 25.0516C15.0016 25.1247 15.1267 25.1613 15.2518 25.1613C15.2893 25.1492 15.3268 25.1492 15.3644 25.1369ZM24.7487 9.52085C24.8112 9.52085 24.8863 9.50864 24.9488 9.48425C25.2867 9.37452 25.4744 9.02096 25.3618 8.69184C25.2742 8.44803 25.1867 8.20425 25.0865 7.96044C24.9864 7.71663 24.7487 7.57034 24.486 7.57034C24.3984 7.57034 24.3233 7.58255 24.2482 7.61914C24.0856 7.68004 23.9605 7.802 23.8979 7.94826C23.8353 8.09455 23.8228 8.27738 23.8979 8.42367C23.9854 8.6431 24.073 8.86255 24.1481 9.08197C24.1857 9.20385 24.2733 9.3136 24.3858 9.39897C24.486 9.48431 24.611 9.52085 24.7487 9.52085ZM19.1933 23.7349C19.3058 23.7349 19.4184 23.7106 19.5186 23.6497C19.7438 23.5156 19.9815 23.3815 20.1942 23.2474C20.3318 23.1499 20.4319 23.0158 20.4695 22.8451C20.507 22.6867 20.4695 22.5159 20.3819 22.3696C20.2567 22.199 20.0566 22.0893 19.8439 22.0893C19.7188 22.0893 19.5936 22.1258 19.4936 22.199C19.2933 22.3331 19.0931 22.455 18.8804 22.5647C18.5676 22.7354 18.4675 23.1255 18.6427 23.418C18.6928 23.5034 18.7553 23.5643 18.8304 23.6131C18.9304 23.6863 19.0555 23.7349 19.1933 23.7349ZM24.9989 13.4584C25.099 13.5315 25.2241 13.5681 25.3494 13.5681H25.3618C25.7122 13.5681 26 13.2877 26 12.9585C26 12.7025 26 12.4466 25.9874 12.1905C25.975 11.8492 25.6872 11.5932 25.3494 11.5932H25.3243C24.9739 11.6053 24.6987 11.898 24.7112 12.2393C24.7237 12.4709 24.7237 12.7025 24.7112 12.9342C24.7237 13.1414 24.8238 13.3365 24.9989 13.4584ZM23.2847 19.4073C23.1721 19.3221 23.0345 19.2855 22.8969 19.2855C22.6967 19.2855 22.509 19.383 22.3839 19.5415C22.2462 19.7244 22.0961 19.9072 21.9335 20.0901C21.7083 20.3583 21.7332 20.7484 22.0085 20.9679C22.021 20.98 22.0335 20.9922 22.0586 21.0044C22.1713 21.0776 22.2963 21.1142 22.434 21.1142C22.6216 21.1142 22.7969 21.0288 22.922 20.8948C23.0971 20.6997 23.2598 20.4925 23.4224 20.2852C23.6226 20.0169 23.5601 19.6147 23.2847 19.4073ZM24.9989 15.6649C24.9364 15.6405 24.8738 15.6405 24.8112 15.6405C24.5235 15.6405 24.2857 15.8112 24.1981 16.0793C24.123 16.2988 24.0479 16.5182 23.9604 16.7376C23.8603 17.0059 23.9479 17.3105 24.1856 17.469C24.2231 17.4934 24.2732 17.5178 24.3233 17.5421C24.3982 17.5665 24.4734 17.5788 24.5485 17.5788C24.8112 17.5788 25.049 17.4203 25.149 17.1764C25.2366 16.9448 25.3242 16.7009 25.4118 16.445C25.5245 16.1281 25.3368 15.7746 24.9989 15.6649ZM22.3714 4.51051C22.4339 4.51051 22.4965 4.474 22.5214 4.43741C22.5464 4.40081 22.5589 4.33986 22.5339 4.27894L21.5956 0.987447L20.6071 2.37717L20.2442 2.14554C18.0921 0.743697 15.6021 0 13.0246 0C12.2738 0 11.523 0.0609823 10.7723 0.195036C10.447 0.256018 10.1091 0.316971 9.78387 0.40228L9.74631 0.414488C6.85597 1.13374 4.37844 2.75507 2.58927 5.0835L2.56427 5.12C2.56427 5.13221 2.55174 5.13221 2.55174 5.14439C2.48914 5.22976 2.42655 5.30286 2.37658 5.3882C2.27646 5.52228 2.1889 5.65643 2.10127 5.79051L2.07624 5.83925C0.599851 8.0579 -0.10089 10.6179 0.0117025 13.2511C0.0117025 13.2633 0.0117025 13.2755 0.0117025 13.2877C0.0241721 13.5315 0.049264 13.7875 0.0742642 14.0435L0.086795 14.0923C0.111826 14.3605 0.149387 14.6165 0.19948 14.8603C0.662382 17.469 1.92618 19.834 3.84059 21.6748L3.85313 21.687C4.36612 22.1746 4.92914 22.6378 5.51723 23.0401C7.08134 24.1128 8.83304 24.8321 10.6974 25.1491C10.735 25.1612 10.7724 25.1612 10.81 25.1612C11.1228 25.1612 11.3856 24.9418 11.4356 24.6493C11.4606 24.4786 11.4231 24.32 11.3355 24.186C11.2355 24.0519 11.0853 23.9543 10.9226 23.9299C9.92159 23.7593 8.95816 23.4545 8.0447 23.04L8.03226 23.0278C8.01973 23.0278 8.01973 23.0157 8.00726 23.0157C7.79458 22.9182 7.58183 22.8206 7.39412 22.7109H7.38159L7.31899 22.6743C6.95615 22.4793 6.60584 22.2599 6.26803 22.0282C3.71544 20.2728 2.01377 17.6518 1.47572 14.6408C0.93769 11.6297 1.63837 8.60647 3.44022 6.11957C4.22853 5.02243 5.20439 4.08378 6.318 3.32791L6.35557 3.30361C8.33251 1.97478 10.6348 1.27994 13.0372 1.27994C15.3519 1.27994 17.5917 1.93827 19.5186 3.19385L19.894 3.43766L18.9055 4.83957L22.3714 4.51051ZM19.8438 17.1887C20.0064 17.1887 20.1566 17.1033 20.2317 16.9571C20.3443 16.7499 20.2567 16.4938 20.044 16.3842L12.7868 12.727V5.01037C12.7868 4.77877 12.5866 4.5837 12.3488 4.5837C12.1111 4.5837 11.911 4.77874 11.911 5.01037V13.239L19.6436 17.14C19.7062 17.1765 19.7687 17.1887 19.8438 17.1887Z"
                          fill="#F29100" />
                      </svg>
                    </div>
                    <div class="text-xsb text-[#F29100] ml-3">
                      Verification in progress
                    </div>
                  </div>

                  <div  class="w-full flex mt-2 px-6">
                    <div class="flex justify-center items-center bg-white rounded-sm cursor-pointer w-6 h-6">
                      <svg width="18" height="18" viewBox="0 0 18 13" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z"
                          fill="#6FBD09" />
                      </svg>
                    </div>
                    <div class="text-xsb text-gray-600 ml-3">Verified</div>
                  </div>

                  <div class="flex w-full mt-2 pt-2 pb-2 px-6 border-t border-slate-200">
                    <div class="w-full flex items-center justify-between space-x-4">
                      <div class="flex justify-center items-center bg-white rounded-sm shadow cursor-pointer w-7 h-7">
                        <svg width="18" height="18" viewBox="0 0 24 28" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                            fill="#FC2323"/>
                        </svg>
                      </div>

                      <div  class="form-check form-switch">
                        <label class="form-check-label inline-block text-gray-500 text-sm" for="flexSwitchCheckDefault"
                          >set as default</label>
                        <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300
                            focus:outline-none cursor-pointer shadow-sm " type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                      </div>                       
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
                         
                            
                            
           <div class="flex flex-col w-full mt-5 pb-5">
                <div class="w-full flex items-center mb-4">
                     <img src="~/assets/images/food/tips.svg" alt="icon" >
                     <h2 class="text-base text-gray-900 font-normal ml-2 mt-2">Tips</h2>
                </div> 
                <div class="w-full mb-2 pl-4 flex">
                     <div class="mr-2 flex justify-start">
                         <svg width="9" height="13" viewBox="0 0 9 13" fill="none"><path d="M9 6.15674L0.75 12.2189L0.75 0.0945606L9 6.15674Z" fill="#C4C4C4"></path></svg>
                     </div>
                     <div class="tips-list">
                          <p class="text-darkcolor text-xs">Add your bank account or any UPI account to withdraw your money from gintaa</p>
                     </div>
               </div> 
               <div class="w-full mb-2 pl-4 flex">
                   <div class="mr-2 -start">
                       <svg width="9" height="13" viewBox="0 0 9 13" fill="none"><path d="M9 6.15674L0.75 12.2189L0.75 0.0945606L9 6.15674Z" fill="#C4C4C4"></path></svg>
                   </div>
                   <div class="tips-list">
                        <p class="text-darkcolor text-xs">
                             Receive money in your default bank account
                         </p>
                   </div>
               </div>
            </div> 
          </div>                    
            </div>
        </div>
    </div>

    <GintaaFoodVendorFooter />
    
    <!-- Bank account delete confirm modal start -->
    <div class="relative z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">  
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">  
        <div class="inline-block bg-white rounded-lg text-left shadow-xl transform transition-all align-middle max-w-md w-full pt-3">
            <button type="button" id="close-btns" class="absolute z-40 top-0 right-0 inline-flex rounded-md border border-transparent px-4 py-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black" fill-opacity="0.3"></path></svg>
            </button> 
            <div class="flex flex-col w-full px-6">
                <h1 class="text-base text-gray-900 font-normal">Confirmation</h1>
            </div> 
            <div class="w-full flex justify-center items-center pt-3 px-6 mt-1">
                <div class="rounded-full border border-dotted border-red-600 w-12 h-12 flex justify-center items-center">
                    <svg width="25" height="25" viewBox="0 0 24 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z" fill="#FC2323"></path></svg>
                </div>
            </div>
            <div class="w-full flex justify-center items-center pt-1 px-6 mt-3">
                <div class="text-sm text-gray-500 text-center">Are you sure you want to delete selected bank account </div>
            </div>
            <div class="w-full flex justify-center items-center px-6">
                <div class="text-sm text-red-600 text-center">permanently?</div>
            </div>
            <div class="w-full flex items-center justify-between mt-10 px-6 bg-gray-50 py-1 rounded-br-lg rounded-bl-lg">
                <button type="submit" class="flex items-center justify-center text-center mr-6 py-1 px-3 h-12 rounded border-0 border-gray-300 w-30 text-base leading-10 font-bold text-gray-400
                 w-full"> <span>Cancel </span>
               </button> 
               <button type="submit" class="transition-all w-full flex justify-center ml-3 items-center border border-red-500
               bg-red-500 py-2 px-6 rounded font-normal text-base text-white hover:bg-firoza hover:border-firoza">
               <span>Yes delete </span>
                <svg role="status" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-firoza" style="display: none;"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path> <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg>
            </button>
        </div>
    </div>
      
    </div>
  </div>
 </div>
  <!-- Bank account delete confirm modal end -->

  <!-- Add Bank account modal start -->
  <div class="relative z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">     
      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <form>
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                 <div class="sm:flex sm:items-start">
                     <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-lightgreen sm:mx-0 sm:h-10 sm:w-10">
                        <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 9V16H5V9H2ZM8 9V16H11V9H8ZM0 21H19V18H0V21ZM14 9V16H17V9H14ZM9.5 0L0 5V7H19V5L9.5 0Z" fill="#8BC63E"></path></svg>
                    </div> 
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 id="modal-title" class="text-lg leading-6 font-medium text-gray-900">Add bank account</h3> 
                        <div class="mt-2"><p class="text-sm text-gray-500">Please enter your correct bank or UPI details carefully. They will
                            be used for all refunds, margins and bonus payments</p></div>
                  </div>
                </div>
                 <div class="flex flex-col w-full mt-4">
                <div class="mt-2 space-x-4 flex items-center">
                    <div class="flex items-center">
                        <input name="bank" id="Bank" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" value="Bank">
                         <label for="Bank" class="pl-2 block text-sm font-normal text-gray-700">
                            <div class="flex items-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10V17H7V10H4ZM10 10V17H13V10H10ZM2 22H21V19H2V22ZM16 10V17H19V10H16ZM11.5 1L2 6V8H21V6L11.5 1Z" fill="#8CAEC5"></path></svg>
                                <span class="pl-2"> Bank </span>
                            </div>
                        </label>
                    </div>
                    <div class="flex items-center">
                        <input name="bank" id="UPI Id" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" value="UPI Id">
                              <label for="UPI Id" class="pl-2 block text-sm font-normal text-gray-700">
                                <div class="flex items-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10V17H7V10H4ZM10 10V17H13V10H10ZM2 22H21V19H2V22ZM16 10V17H19V10H16ZM11.5 1L2 6V8H21V6L11.5 1Z" fill="#8CAEC5"></path></svg>
                                    <span class="pl-2"> UPI Id </span>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col w-full mt-1">
                    <div class="grid grid-cols-6 gap-x-6 gap-y-3">
                        <div class="col-span-6">
                            <div class="relative z-0 w-full mt-3">
                                <input type="text" placeholder=" " class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                                 <label class="absolute duration-300 top-3 -z-1 origin-0  text-gray-500 text-sm">Your Name</label> 
                                 <div class="absolute text-xs text-red-400 mt-px">Inavalid Name</div>
                            </div>
                        </div>
                    <div class="col-span-6">
                        <div class="relative z-0 w-full mt-3">
                            <input maxlength="18" type="password" name="name" placeholder=" " class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Account number</label> 
                             <div class="absolute text-xs text-red-400 mt-px">Inavalid Account number</div>
                            </div>
                        </div>
                     <div class="col-span-6">
                        <div class="relative z-0 w-full mt-3">
                        <input type="password" name="name" placeholder=" " class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" maxlength="18">
                         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Re-Enter Account Number</label> 
                         <div class="absolute text-xs text-red-400 mt-px">Confirm Account Number is required</div>
                        </div>
                    </div>
                     <div class="col-span-6">
                        <div class="relative z-0 w-full mt-3">
                            <input type="text" placeholder=" " class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" name="name">
                             <label class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm" for="name">IFSC</label>
                             <div class="absolute text-xs text-red-400 mt-px">IFSC is required</div>
                            </div>
                        </div> 
                    </div>
                </div> 

                <!-- <div class="flex flex-col w-full mt-1">
                    <div class="grid grid-cols-6 gap-x-6 gap-y-3">
                         <div class="col-span-6">
                            <div class="relative z-0 w-full mt-3">
                                <input type="text" name="name" placeholder=" " class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                                 <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Your Name</label>
                                  <div class="absolute text-xs text-red-400 mt-px">Inavalid Name</div>
                                </div>
                            </div>
                         <div class="col-span-6">
                            <div class="relative z-0 w-full mt-3">
                                <input type="email" placeholder="UPI Id" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" name="name">
                                 <label class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm" for="name">UPI Id</label>
                                  <div class="absolute text-xs text-red-400 mt-px">UPI-Id is required</div>
                                </div>
                            </div>
                        </div>
                </div> -->

                </div>
                 <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="submit" class="w-full relative min-w-[130px] inline-flex justify-center rounded border border-transparent shadow-sm px-4 py-2 bg-firoza text-base font-medium text-white  sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
                    <button type="button" id="close-btns" class="mt-3 w-full inline-flex justify-center rounded border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                </div>
            </form>
      </div>
    </div>
  </div>
</div>
 <!-- Add Bank account modal end -->



</div></template>
<script lang="ts">
import Vue from 'vue';


export default {
    name: 'AddBankAccountPage', 
    components: {
        
    },  
}
</script>

<style scoped>
      .-z-1 {
    z-index: -1;
}

.origin-0 {
    transform-origin: 0%;
}

input[type="text"]:focus~label,
input[type="email"]:focus~label,
input[type="text"]:not(:placeholder-shown)~label,
input[type="email"]:not(:placeholder-shown)~label,
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
input[type="email"]:focus~label,
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


