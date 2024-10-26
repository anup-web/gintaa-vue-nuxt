<template>
  <div class="relative bg-[#f8f8f8] min-h-screen">
   
     <GintaaFoodVendorSidebar/>
      <div class="content-wrapper pl-0 relative z-10 sm:pl-0 md:pl-[180px] lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px]">   
           <GintaaFoodVendorHeader/>
           <div class="content pt-[100px] pb-[100px] px-4 sm:px-4 sm:pb-[100px] md:px-8 md:pb-0">
              <div class="flex items-center justify-between mb-0">
                  <div class="text-right text-base font-medium">Dashboard</div> 
                  <div class="items-center justify-center hidden sm:hidden md:flex">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 5.37766L17.5 12.3568V20.0002H12.5V15.0002H7.5V20.0002H2.5V12.3568L10 5.37766ZM20 10.1235L10 0.833496L0 10.111L1.13417 11.3318L10 3.1085L18.8658 11.3443L20 10.1235Z" fill="#8EC23C"/>
                      </svg>
                       <span class="text-sm text-green ml-2">Home  / Insight</span>
                  </div>
              </div>

              <div class="w-full bg-gray-100 px-4 py-4 mt-6 rounded">
               <div class="w-full flex justify-end mb-4">
                  <div class="relative z-0 w-[150px] ml-6" >
                                    <select name="returnType" placeholder=" " class="text-[#5DA0DC] block w-full mt-0 bg-transparent border border-[#5DA0DC] appearance-none focus:outline-none focus:ring-0 focus:border-[#48cef3] rounded text-sm p-2 pl-10" >
                                            <option value="" class="p-1" >Today</option>
                                             <option value="RETURN" class="p-1" >Today</option>
                                             <option value="RETURN_AND_REPLACE" class="p-1" >Today</option>                                                 
                                    </select> 
                                <span class="absolute right-2 top-[15px] -z-50" ><svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#5DA0DC" stroke-linecap="round" stroke-linejoin="round" ></path></svg>
                                </span>
                                <span class="absolute left-2 top-[8px] -z-50"><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15 1C15 0.447715 14.5523 0 14 0C13.4477 0 13 0.447715 13 1V2H7V1C7 0.447715 6.55228 0 6 0C5.44772 0 5 0.447715 5 1V2H3C1.34315 2 0 3.34315 0 5V9V19C0 20.6569 1.34315 22 3 22H17C18.6569 22 20 20.6569 20 19V9V5C20 3.34315 18.6569 2 17 2H15V1ZM18 8V5C18 4.44772 17.5523 4 17 4H15V5C15 5.55228 14.5523 6 14 6C13.4477 6 13 5.55228 13 5V4H7V5C7 5.55228 6.55228 6 6 6C5.44772 6 5 5.55228 5 5V4H3C2.44772 4 2 4.44772 2 5V8H18ZM2 10H18V19C18 19.5523 17.5523 20 17 20H3C2.44772 20 2 19.5523 2 19V10Z" fill="#5DA0DC"/>
                                  </svg>
                                </span>
                 </div>
               </div>   
              <div class="grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 mt-0">
                  <div class="w-full bg-white rounded pl-6 pr-4 py-4 shadow">               
                      <div class="flex items-center">
                          <div class="w-[60px] h-[60px] rounded-full hidden items-center justify-center bg-firoza sm:flex md:flex">
                              <svg width="32" height="37" viewBox="0 0 55 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 33.25L9.2783 38.85C9.65802 39.7833 10.2276 40.25 10.987 40.25H43.263C44.0224 40.25 44.592 39.7833 44.9717 38.85L47.25 33.25H7Z" fill="white"/>
                              <path d="M2.00926 31.5H4.82222H49.4278H52.2407C53.4463 31.5 54.25 30.7125 54.25 29.5312C54.25 28.35 53.4463 27.5625 52.2407 27.5625H50.2315C49.8296 17.1281 41.9935 8.46563 31.9472 6.3C31.9472 5.90625 32.1481 5.5125 32.1481 4.92188C32.1481 2.16563 29.938 0 27.125 0C24.312 0 22.1019 2.16563 22.1019 4.92188C22.1019 5.5125 22.3028 5.90625 22.3028 6.3C12.2565 8.46563 4.6213 17.1281 4.01852 27.5625H2.00926C0.803704 27.5625 0 28.35 0 29.5312C0 30.7125 0.803704 31.5 2.00926 31.5Z" fill="white"/>
                              <path d="M43.6205 42.5833C43.4234 42.1944 42.8319 42 42.4376 42C41.649 42 41.0576 42 40.269 42.1944L38.1003 45.1111C35.9317 48.0278 32.383 49.7778 28.6371 49.7778H28.0457H26.6657H24.1027H22.7227C21.5398 49.7778 20.7512 49 20.7512 47.8333C20.7512 46.6667 21.5398 45.8889 22.7227 45.8889H29.6229C30.2143 45.3056 30.6086 44.3333 30.6086 43.3611V43.1667C30.6086 42.3889 30.0172 42 29.2286 42H21.3426C16.611 42 12.8652 44.1389 10.6966 47.4444L7.14786 52.8889C6.95071 53.2778 6.95071 53.8611 7.14786 54.25L11.0909 60.6667C11.288 61.0556 11.4851 61.25 11.8794 61.25H12.0766C12.2737 61.25 12.668 61.25 12.8652 61.0556C17.7939 57.75 23.7084 56 29.6229 56C33.9602 56 37.9032 53.6667 39.8747 49.9722L43.4234 43.75C43.8177 43.5556 43.8177 42.9722 43.6205 42.5833Z" fill="white"/>
                              </svg>
                          </div>
                      <div class="ml-0 sm:ml-4 md:ml-4"> 
                          <div class="text-lg font-medium text-gray-700">140</div> 
                          <div class="text-sm text-gray-500 ">Total Orders</div>                        
                      </div>  
                  </div>
                  </div>

                  <div class="w-full bg-white rounded pl-6 pr-4 py-4 shadow">               
                      <div class="flex items-center">
                          <div class="w-[60px] h-[60px] rounded-full hidden items-center justify-center bg-[#F47960] sm:flex md:flex">
                              <svg width="35" height="35" viewBox="0 0 62 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M30.873 0C28.4643 0 26.498 1.57303 26.498 3.5C26.498 5.42697 28.4643 7 30.873 7C33.2818 7 35.248 5.42697 35.248 3.5C35.248 1.57303 33.2818 0 30.873 0ZM29.8407 2.04494C29.6933 2.2809 29.595 2.51685 29.4475 2.79213C29.3492 3.06742 29.2017 3.3427 29.1034 3.6573C28.9559 3.97191 28.8084 4.32584 28.6118 4.7191C28.2186 4.40449 28.0219 4.01124 27.9236 3.61798C27.8253 3.22472 27.8253 2.79214 28.0219 2.35955C28.1202 1.96629 28.5135 1.57303 29.0051 1.33708C29.4966 1.10112 30.1357 1.0618 30.6273 1.25843C30.234 1.57303 29.9882 1.80899 29.8407 2.04494Z" fill="white"/>
                              <path d="M59.6952 40.25H2.05091C1.05459 40.25 0.248047 39.5063 0.248047 38.5875V38.4125C0.248047 37.4938 1.05459 36.75 2.05091 36.75H59.6952C60.6915 36.75 61.498 37.4938 61.498 38.4125V38.5875C61.4506 39.5063 60.6915 40.25 59.6952 40.25Z" fill="white"/>
                              <path d="M30.873 6.99976C14.9307 6.99976 1.99805 19.5405 1.99805 34.9998H59.748C59.748 19.5405 46.8154 6.99976 30.873 6.99976ZM14.8836 17.762C13.1906 19.4037 11.6857 21.1822 10.369 23.1887C9.71059 24.1919 9.09923 25.1952 8.5349 26.2441C7.97056 27.2929 7.45326 28.3874 6.98298 29.5274C7.12406 27.0649 7.92354 24.6936 9.0522 22.459C10.1809 20.2245 11.6858 18.1724 13.5669 16.4395C15.4009 14.661 17.5642 13.2473 19.9156 12.1985C22.267 11.1952 24.7594 10.5568 27.2519 10.3743C24.9476 11.2864 22.6902 12.2897 20.621 13.5209C18.5048 14.7066 16.6237 16.1203 14.8836 17.762ZM30.6379 31.8988C25.4178 31.8988 21.2324 27.8401 21.2324 22.7783C21.2324 17.762 25.4178 13.6577 30.6379 13.6577C35.858 13.6577 40.0434 17.762 40.0434 22.7783C40.0434 27.7945 35.811 31.8988 30.6379 31.8988ZM34.0239 18.218L30.6379 21.4558L27.2519 18.1724L25.9351 19.4949L29.3211 22.7783L25.9351 26.016L27.2519 27.2929L30.6379 24.0095L34.0239 27.2929L35.3407 26.016L31.9547 22.7327L35.3407 19.4493L34.0239 18.218Z" fill="white"/>
                              </svg>
                          </div>
                      <div class="ml-0 sm:ml-4 md:ml-4"> 
                          <div class="text-lg font-medium text-gray-700">200</div> 
                          <div class="text-sm text-gray-500 ">Cancel Orders</div>                        
                      </div>  
                  </div>
                  </div>

                  <div class="w-full bg-white rounded pl-6 pr-4 py-4 shadow">               
                      <div class="flex items-center">
                          <div class="w-[60px] h-[60px] rounded-full hidden items-center justify-center bg-[#8EC641] sm:flex md:flex">
                          <svg width="30" height="35" viewBox="0 0 41 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21.0061 25.8209C28.2462 25.8209 34.1034 20.1415 34.1034 13.121C34.1034 6.17947 28.2462 0.5 21.0061 0.5C13.8473 0.5 7.99012 6.17947 7.99012 13.1999C7.99012 20.1415 13.8473 25.8209 21.0061 25.8209ZM17.1826 13.121C17.1826 13.0422 17.1826 12.9633 17.264 12.8844C17.3453 12.8055 17.4267 12.8055 17.508 12.8055H18.6469C19.5418 12.8055 20.1926 12.6477 20.762 12.4111C21.2501 12.1745 21.6569 11.78 21.7382 11.2279H17.508C17.4267 11.2279 17.3453 11.2279 17.264 11.149C17.1826 11.0701 17.1826 10.9912 17.1826 10.9124V9.96578C17.1826 9.88689 17.1826 9.80801 17.264 9.72913C17.3453 9.65025 17.4267 9.65025 17.508 9.65025H21.5755C21.1688 8.94032 20.3553 8.54591 18.9723 8.54591H17.508C17.4267 8.54591 17.3453 8.54591 17.264 8.46703C17.1826 8.38815 17.1826 8.30927 17.1826 8.23038V6.96828C17.1826 6.8894 17.1826 6.81052 17.264 6.73164C17.3453 6.65275 17.4267 6.65275 17.508 6.65275H25.7244C25.8057 6.65275 25.8871 6.65275 25.9684 6.73164C26.0498 6.81052 25.9684 6.8894 25.9684 6.96828V7.91486C25.9684 7.99374 25.9684 8.07262 25.8871 8.1515C25.8057 8.23038 25.7244 8.23038 25.643 8.23038H23.3652C23.6906 8.62479 23.8533 9.09808 24.016 9.57137H25.7244C25.8057 9.57137 25.8871 9.57137 25.9684 9.65025C26.0498 9.72913 25.9684 9.80801 25.9684 9.96578V10.9124C25.9684 10.9912 25.9684 11.0701 25.8871 11.149C25.8057 11.2279 25.7244 11.2279 25.643 11.2279H24.016C23.8533 12.1745 23.4466 12.8844 22.7144 13.4366C21.9823 13.9887 21.0874 14.3831 20.0299 14.462C21.0874 15.5664 22.6331 17.3018 24.5041 19.5893C24.5855 19.6682 24.5855 19.826 24.5041 19.9048C24.4228 19.9837 24.3414 20.0626 24.1787 20.0626H22.2263C22.145 20.0626 22.0636 20.0626 21.9823 19.9837C19.9485 17.6173 18.3215 15.803 17.1013 14.5409C17.0199 14.462 17.0199 14.3831 17.0199 14.3043V13.121H17.1826ZM6.93258 28.5029H1.5635C1.0754 28.5029 0.75 28.8973 0.75 29.2917V46.9612C0.75 47.4345 1.15675 47.75 1.5635 47.75H6.93258C7.99012 47.75 8.80362 46.9612 8.80362 45.9357V30.3172C8.80362 29.2917 7.99012 28.5029 6.93258 28.5029ZM40.4487 30.5538C39.8792 29.6861 38.903 29.2129 37.8455 29.2129H35.7304C33.8593 29.2129 32.2323 30.3172 31.5815 31.8948C31.4188 32.3681 31.0934 32.7625 30.768 33.1569C29.5478 34.9712 27.5141 36.0755 25.3176 36.1544H19.135C18.5656 36.1544 17.9961 35.6811 17.9961 35.129C17.9961 34.5768 18.4842 34.1035 19.135 34.1035H25.3176C26.1311 34.1035 26.8633 33.8669 27.5141 33.3936C27.5141 31.106 25.643 29.2917 23.2839 29.2917H18.7283C17.0199 29.2917 15.4743 29.9228 14.2541 31.106L14.1727 31.1849C13.2779 32.0526 12.2203 32.6048 11.0001 32.7625V44.5159H27.5954C32.6391 44.5159 37.1947 41.5972 39.1471 37.1799L40.7741 33.4725C41.1808 32.447 41.0181 31.4215 40.4487 30.5538Z" fill="white"/>
                          </svg>
                          </div>
                      <div class="ml-0 sm:ml-4 md:ml-4"> 
                          <div class="text-lg font-medium text-gray-700 flex items-center">
                              <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                              <span class="ml-1">1400</span>
                          </div> 
                          <div class="text-sm text-gray-500 ">Today Sales</div>                        
                      </div>  
                  </div>
                  </div>

                  <div class="w-full bg-white rounded pl-6 pr-4 py-4 shadow">               
                      <div class="flex items-center">
                          <div class="w-[60px] h-[60px] rounded-full hidden items-center justify-center bg-[#6F6F6F] sm:flex md:flex">
                              <svg width="28" height="22" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M38 0H2C0.8 0 0 0.8 0 2V30C0 31.2 0.8 32 2 32H38C39.2 32 40 31.2 40 30V2C40 0.8 39.2 0 38 0ZM36 22C32.6 22 30 24.6 30 28H10C10 24.6 7.4 22 4 22V10C7.4 10 10 7.4 10 4H30C30 7.4 32.6 10 36 10V22Z" fill="white"/>
                              <path d="M20 8C15.6 8 12 11.6 12 16C12 20.4 15.6 24 20 24C24.4 24 28 20.4 28 16C28 11.6 24.4 8 20 8ZM20 20C17.8 20 16 18.2 16 16C16 13.8 17.8 12 20 12C22.2 12 24 13.8 24 16C24 18.2 22.2 20 20 20Z" fill="white"/>
                              </svg>
                          </div>
                      <div class="ml-0 sm:ml-4 md:ml-4"> 
                          <div class="text-lg font-medium text-gray-700 flex items-center">
                              <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                              <span class="ml-1">1200</span>
                          </div> 
                          <div class="text-sm text-gray-500 ">Avg.order value</div>                        
                      </div>  
                  </div>
                  </div>

              </div>
              </div>

              <div class="w-full bg-gray-100 px-4 pt-2 pb-4 mt-4 rounded">
               <div class="w-full flex justify-start mb-2">
                  <div class="text-base text-gray-700 ">Payments</div> 
               </div>   
              <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 mt-0">
                  <div class="w-full rounded pl-6 pr-4 py-4 shadow flex items-center h-[90px] payment-one">               
                      <div class="flex items-center">
                          <svg width="41" height="40" viewBox="0 0 95 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M81.1458 0H13.8542C6.33333 0 0 6.36533 0 13.9242V65.6425C0.395833 73.5991 5.54167 80.3623 13.0625 82.3514L57.3958 92.6951C60.9583 93.4908 64.5208 92.6951 67.2917 90.7059C70.0625 88.3189 71.6458 85.1363 71.25 81.5558V42.966C71.25 35.4071 66.1042 28.644 58.9792 26.6548L16.2292 14.7198C14.6458 14.322 13.4583 12.7307 13.8542 11.1393C14.25 9.54799 15.8333 8.75233 17.4167 9.15016L31.2708 13.1285H80.75C82.3333 13.1285 83.9167 14.322 83.9167 16.3112C83.9167 18.3003 82.7292 19.4938 80.75 19.4938H60.1667C59.7708 19.096 59.375 19.4938 59.375 19.8917C59.375 20.2895 59.7708 20.6873 60.1667 20.6873H60.5625C64.9167 21.8808 69.2708 24.6656 72.0417 28.2461C72.0417 28.644 72.4375 28.644 72.8333 28.644H81.1458C82.7292 28.644 84.3125 29.8375 84.3125 31.4288C84.3125 33.0201 83.125 34.6115 81.1458 34.6115H77.1875C76.7917 34.6115 76.3958 35.0093 76 35.4071V35.805C76.7917 38.192 77.1875 40.1811 77.1875 42.5681V70.0186C77.1875 70.4164 77.5833 71.2121 78.375 71.2121H81.1458C88.6667 71.2121 95 64.8468 95 57.288V13.5263C95 6.36533 88.6667 0 81.1458 0ZM61.3542 59.675C61.3542 64.0511 57.7917 67.6316 53.4375 67.6316C49.0833 67.6316 45.5208 64.0511 45.5208 59.675C45.5208 55.2988 49.0833 51.7183 53.4375 51.7183C57.7917 51.7183 61.3542 55.2988 61.3542 59.675Z" fill="white"/>
                          </svg>

                      <div class="ml-4"> 
                          <div class="text-lg font-medium text-white flex items-center">
                              <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path  fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="#ffffff"></path></svg>
                              <span class="ml-1">1400</span>
                          </div>
                          <div class="text-sm text-white ">Total Payments</div>                        
                      </div>  
                  </div>
                  </div>

                  <div class="w-full rounded pl-6 pr-4 py-4 shadow flex items-center h-[90px] payment-two">               
                      <div class="flex items-center">
                          <svg width="50" height="44" viewBox="0 0 95 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M92.7734 64.7731H95V60.3469H92.7734V58.1339C92.7734 52.6012 89.8789 47.5112 85.2031 44.8555C84.3125 44.4129 83.8672 43.7489 83.8672 42.8637V42.4211C83.8672 41.5359 84.3125 40.8719 85.2031 40.4293C89.8789 37.5523 92.7734 32.6836 92.7734 27.1509V24.9379H95V20.5117H59.375V24.9379H61.6016V27.1509C61.6016 32.6836 64.4961 37.7737 69.1719 40.4293C70.0625 40.8719 70.5078 41.5359 70.5078 42.4211V42.8637C70.5078 43.7489 70.0625 44.4129 69.1719 44.8555C64.4961 47.7325 61.6016 52.6012 61.6016 58.1339V60.3469H59.375V64.7731H92.7734ZM88.3203 24.9379V27.1509C88.3203 29.5853 87.4297 31.7984 86.0938 33.7901H68.2812C66.7227 31.7984 66.0547 29.5853 66.0547 27.1509V24.9379H88.3203ZM71.3984 48.6177C73.625 47.2898 74.7383 45.0768 74.7383 42.8637V42.6424H79.1914V42.8637C79.1914 45.2981 80.5273 47.2898 82.7539 48.6177C84.7578 49.7242 86.3164 51.4947 87.207 53.7077H66.9453C67.8359 51.4947 69.3945 49.7242 71.3984 48.6177Z" fill="white"/>
                          <path d="M25.0507 20.5117H36.3032M36.3032 20.5117H55.0574M36.3032 20.5117C40.054 20.5117 47.5557 22.7844 47.5557 32.1026M55.0574 32.3299H47.5557C47.5557 41.6481 40.054 43.9208 36.3032 43.9208H25.0507L43.8049 59.3754M24.8301 32.3299H45.3493H47.3351" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M60.4745 68.6317C54.537 72.8246 47.5 75.4727 39.5833 75.4727C20.2315 75.4727 4.39815 59.5837 4.39815 39.9432C4.39815 20.3026 20.2315 4.41361 39.8032 4.41361C49.919 4.41361 59.1551 8.82722 65.5324 15.6683H71.25C63.9931 6.17905 52.5579 0 39.8032 0C17.8125 0 0 17.8751 0 39.9432C0 62.0112 17.8125 79.8864 39.8032 79.8864C50.5787 79.8864 60.2546 75.4727 67.5116 68.6317H60.4745Z" fill="white"/>
                          </svg>

                      <div class="ml-4"> 
                          <div class="text-lg font-medium text-white flex items-center">
                              <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="#ffffff"></path></svg>
                              <span class="ml-1">2400</span>
                          </div>
                          <div class="text-sm text-white ">Pending Amounts</div>                        
                      </div>  
                  </div>
                  </div>

                  <div class="w-full rounded pl-6 pr-4 py-4 shadow flex items-center h-[90px] payment-three">               
                      <div class="flex items-center">
                          <svg width="52" height="52" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 58.4619L9.5 67.9619L11.5705 70.0324L12.7885 71.2504L15.2244 68.8145C18.2692 65.7696 23.141 65.7696 26.1859 68.8145C29.2308 71.8593 29.2308 76.7311 26.1859 79.776L23.75 82.2119L24.9679 83.4299L27.0385 85.5004L36.5385 95.0004L95 36.5388L85.5 27.0388L83.4295 24.9683L82.2115 23.7504L79.7756 26.1863C76.7308 29.2311 71.859 29.2311 68.8141 26.1863C65.7692 23.1414 65.7692 18.2696 68.8141 15.2247L71.25 12.7888L69.5449 11.0837L67.9615 9.50038L58.4615 0.000376201L0 58.4619ZM65.1603 29.8401C69.4231 34.1029 75.7564 34.8337 80.6282 31.9106L85.2564 36.5388L36.5385 85.2568L31.9103 80.6286C34.7115 75.635 33.9808 69.3017 29.8397 65.1606C25.5769 60.8978 19.2436 60.167 14.3718 63.0901L9.74359 58.4619L58.4615 9.74396L63.0897 14.3722C60.1667 19.244 60.8974 25.5773 65.1603 29.8401Z" fill="white"/>
                          <path d="M41.531 45.9161C43.4797 47.8648 44.6977 49.8135 44.8195 51.6404C45.0631 53.3456 44.3323 55.0507 42.8707 56.5122C41.4092 57.9738 39.8259 58.5827 37.9989 58.2173C36.172 57.852 34.2233 56.8776 32.2746 54.9289C28.2554 50.9097 27.7682 47.4994 30.8131 44.4545C32.2746 42.993 33.8579 42.384 35.8066 42.6276C37.7554 42.8712 39.5823 43.9673 41.531 45.9161ZM35.8066 51.6404C36.9028 52.7366 37.8772 53.4673 38.4861 53.8327C39.2169 54.0763 39.8259 54.1981 40.3131 53.7109C41.1656 52.8584 40.4348 51.3968 38.2425 49.2045C36.0502 47.0122 34.5887 46.2814 33.7361 47.134C33.2489 47.6212 33.2489 48.1084 33.6143 48.9609C34.1015 49.6917 34.7105 50.5443 35.8066 51.6404ZM44.9413 31.3007L53.3451 60.8968L50.1784 64.0635L41.7746 34.4673L44.9413 31.3007ZM62.4797 40.0699C64.4284 42.0186 65.6464 43.9673 65.7682 45.7943C66.0118 47.4994 65.281 49.2045 63.8195 50.6661C62.3579 52.1276 60.7746 52.7366 58.9477 52.3712C57.2425 52.1276 55.172 51.0314 53.3451 49.2045C49.3259 45.1853 48.8387 41.775 51.8836 38.7302C53.3451 37.2686 54.9284 36.6597 56.8772 36.9032C58.8259 37.1468 60.6528 38.243 62.4797 40.0699ZM56.7554 46.0379C57.8515 47.134 58.8259 47.8648 59.4348 48.2302C60.1656 48.4738 60.7746 48.5956 61.2618 48.1084C62.1143 47.2558 61.3836 45.7943 59.1913 43.602C56.9989 41.4097 55.5374 40.6789 54.6848 41.5315C54.1977 42.0186 54.1977 42.5058 54.5631 43.3584C54.9284 43.9673 55.6592 44.9417 56.7554 46.0379Z" fill="white"/>
                          </svg>
                      <div class="ml-4"> 
                          <div class="text-lg font-medium text-white flex items-center">
                              <svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="#ffffff"></path></svg>
                              <span class="ml-1">3000</span>
                          </div> 
                          <div class="text-sm text-white ">Deducted Amounts</div>                        
                      </div>  
                  </div>
                  </div>


              </div>
              </div>
              
              <div class="w-full bg-white px-4 pt-2 pb-4 mt-4 rounded">
                      <div class="w-full flex justify-start mb-2">
                          <div class="text-base text-gray-700 ">Reviews & Ratings</div> 
                      </div> 
                      <div class="flex flex-col items-center sm:flex-row md:flex-row">
                          <div class="w-full sm:basis-1/3 md:basis-1/3">
                                <div class="flex items-center mb-2 sm:mb-0 md:mb-0">
                                      <div class="flex items-center"><span class="text-2xl font-medium text-gray-900 mr-1">4.4</span>
                                           <svg width="20" height="20" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                      </svg>
                                      </div>
                                      <div class="text-sm text-gray-700 ml-4">2,056 Ratings & 152 Reviews</div>
                                </div>
                          </div>
                          <div class="w-full sm:basis-2/3 md:basis-2/3">
                              <div class="w-full">          

                              <dl class="space-y-0.5">
                                  
                                  <div class="flex items-center text-sm">
                                      <dt class="flex flex-1 items-center">
                                      <p class="w-0 font-medium text-gray-900 text-[11px] mr-1.5">5</p>
                                      <div aria-hidden="true" class="ml-1 flex flex-1 items-center">                    
                                          <svg class="flex-shrink-0 h-2.5 w-2.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#263238"/>
                                          </svg>
                                          <div class="relative ml-2 flex-1">
                                          <div class="h-1.5 rounded-full border border-gray-200 bg-gray-100"></div>
                                          
                                              <div style="width: calc(1019 / 1624 * 100%)" class="absolute inset-y-0 rounded-full border border-green bg-green"></div>
                                          </div>
                                      </div>
                                      </dt>
                                      <dd class="ml-2 w-8 text-left text-[11px] tabular-nums text-gray-900">500</dd>
                                  </div>
                                  
                                  <div class="flex items-center text-sm">
                                      <dt class="flex flex-1 items-center">
                                      <p class="w-0 font-medium text-gray-900 text-[11px] mr-1.5">4</p>
                                      <div aria-hidden="true" class="ml-1 flex flex-1 items-center">
                                          <svg class="flex-shrink-0 h-2.5 w-2.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#263238"/>
                                          </svg>
                                          <div class="relative ml-2 flex-1">
                                          <div class="h-1.5 rounded-full border border-gray-200 bg-gray-100"></div>
                                          
                                              <div style="width: calc(162 / 1624 * 100%)" class="absolute inset-y-0 rounded-full border border-green bg-green"></div>
                                          </div>
                                      </div>
                                      </dt>
                                      <dd class="ml-2 w-8 text-left text-[11px] tabular-nums text-gray-900">200</dd>
                                  </div>
                                  
                                  <div class="flex items-center text-sm">
                                      <dt class="flex flex-1 items-center">
                                      <p class="w-0 font-medium text-gray-900 text-[11px] mr-1.5">3</p>
                                      <div aria-hidden="true" class="ml-1 flex flex-1 items-center">
                                          <svg class="flex-shrink-0 h-2.5 w-2.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#263238"/>
                                          </svg>
                                          <div class="relative ml-2 flex-1">
                                          <div class="h-1.5 rounded-full border border-gray-200 bg-gray-100"></div>
                                          
                                              <div style="width: calc(97 / 1624 * 100%)" class="absolute inset-y-0 rounded-full border border-green bg-green"></div>
                                          </div>
                                      </div>
                                      </dt>
                                      <dd class="ml-2 w-8 text-left text-[11px] tabular-nums text-gray-900">80</dd>
                                  </div>
                                  
                                  <div class="flex items-center text-sm">
                                      <dt class="flex flex-1 items-center">
                                      <p class="w-0 font-medium text-gray-900 text-[11px] mr-1.5">2</p>
                                      <div aria-hidden="true" class="ml-1 flex flex-1 items-center">
                                          <svg class="flex-shrink-0 h-2.5 w-2.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#263238"/>
                                          </svg>
                                          <div class="relative ml-2 flex-1">
                                          <div class="h-1.5 rounded-full border border-gray-200 bg-gray-100"></div>
                                          
                                              <div style="width: calc(199 / 1624 * 100%)" class="absolute inset-y-0 rounded-full border border-[#FF9C06] bg-[#FF9C06]"></div>
                                          </div>
                                      </div>
                                      </dt>
                                      <dd class="ml-2 w-8 text-left text-[11px] tabular-nums text-gray-900">16</dd>
                                  </div>
                                  
                                  <div class="flex items-center text-sm">
                                      <dt class="flex flex-1 items-center">
                                      <p class="w-0 font-medium text-gray-900 text-[11px] mr-1.5">1</p>
                                      <div aria-hidden="true" class="ml-1 flex flex-1 items-center">
                                          <svg class="flex-shrink-0 h-2.5 w-2.5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#263238"/>
                                          </svg>
                                          <div class="relative ml-2 flex-1">
                                          <div class="h-1.5 rounded-full border border-gray-200 bg-gray-100"></div>
                                          
                                              <div style="width: calc(147 / 1624 * 100%)" class="absolute inset-y-0 rounded-full border border-[#FF0000] bg-[#FF0000]"></div>
                                          </div>
                                      </div>
                                      </dt>
                                      <dd class="ml-2 w-8 text-left text-[11px] tabular-nums text-gray-900">10</dd>
                                  </div>
                                  
                              </dl>
                              </div>
                          </div>                        
                      </div>
                      

                      <div class="mt-8 w-full space-y-4">
                      <div class="block items-center justify-between relative sm:flex md:flex">
                          
                          <div class="flex items-center mr-4 shrink-0 w-[190px]">
                              <img src="~/assets/images/amit.jpg" alt="image" class="h-10 w-10 rounded-full">
                              <div class="ml-3">
                                  <div class="text-sm font-medium text-gray-900">Mark Edwards</div>
                                  <div class="text-xs text-gray-500 mt-0.5">Jan 12, 2023  |  8:40 PM </div>
                              </div>
                          </div>
                         
                          <div class="text-gray-500 text-xs flex-1 mt-3 sm:mt-0 md:mt-0">Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</div>
                          <div class="ml-4 flex items-center justify-end sm:block md:block">
                              <div class="text-sm font-medium text-gray-900 text-center">4.5</div>
                              <div class="mt-0 ml-2 flex items-center sm:mt-1 sm:ml-0 md:mt-1 md:ml-0">
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#DADADA"/>
                                  </svg>
                              </div>
                          </div>
                      </div>
                      <div class="block items-center justify-between relative sm:flex md:flex">
                          
                          <div class="flex items-center mr-4 shrink-0 w-[190px]">
                              <img src="~/assets/images/amit.jpg" alt="image" class="h-10 w-10 rounded-full">
                              <div class="ml-3">
                                  <div class="text-sm font-medium text-gray-900">Mark Edwards</div>
                                  <div class="text-xs text-gray-500 mt-0.5">Jan 12, 2023  |  8:40 PM </div>
                              </div>
                          </div>
                         
                          <div class="text-gray-500 text-xs flex-1 mt-3 sm:mt-0 md:mt-0">Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</div>
                          <div class="ml-4 flex items-center justify-end sm:block md:block">
                              <div class="text-sm font-medium text-gray-900 text-center">4.5</div>
                              <div class="mt-0 ml-2 flex items-center sm:mt-1 sm:ml-0 md:mt-1 md:ml-0">
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#DADADA"/>
                                  </svg>
                              </div>
                          </div>
                      </div>

                      <div class="block items-center justify-between relative sm:flex md:flex">
                          
                          <div class="flex items-center mr-4 shrink-0 w-[190px]">
                              <img src="~/assets/images/amit.jpg" alt="image" class="h-10 w-10 rounded-full">
                              <div class="ml-3">
                                  <div class="text-sm font-medium text-gray-900">Mark Edwards</div>
                                  <div class="text-xs text-gray-500 mt-0.5">Jan 12, 2023  |  8:40 PM </div>
                              </div>
                          </div>
                         
                          <div class="text-gray-500 text-xs flex-1 mt-3 sm:mt-0 md:mt-0">Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</div>
                          <div class="ml-4 flex items-center justify-end sm:block md:block">
                              <div class="text-sm font-medium text-gray-900 text-center">4.5</div>
                              <div class="mt-0 ml-2 flex items-center sm:mt-1 sm:ml-0 md:mt-1 md:ml-0">
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 h-3 w-3 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#DADADA"/>
                                  </svg>
                              </div>
                          </div>
                      </div>

                      </div>


               </div>


               <div class="w-full bg-white px-4 pt-2 pb-4 mt-4 rounded">
                      <div class="w-full flex justify-start mb-4">
                          <div class="text-base text-gray-700 ">Most Selling Items</div> 
                      </div> 
                      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 mt-0">
                          <div class="relative flex items-center">
                          <div class="flex-shrink-0 relative">
                              <img class="h-24 w-24 rounded-full" src="~/assets/images/food/kfc.webp" alt="image">
                              <div class="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 bg-[#C3FFA7] rounded-full border-2 border-white">
                                 <span class="text-sm text-gray-500 font-medium"> #1</span>
                              </div>
                          </div>
                          <div class="min-w-0 flex-1">
                          <div class="ml-4">            
                              <div class="text-sm text-gray-900">Chicken curry special with cucumber</div>
                              <div class="flex items-center mt-1">
                                  <svg width="14" height="14" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> 
                                  <span class="text-[11px] text-[#EE1029] ml-2">Best Seller</span>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                  <div class="flex items-center"><svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg> 
                                      <span class="text-sm text-gray-900 ml-1">450</span>
                                  </div>
                                   <div class="text-sm text-gray-700">Order </div> 
                              </div>
                          </div>
                          </div>
                      </div>

                      <div class="relative flex items-center">
                          <div class="flex-shrink-0 relative">
                              <img class="h-24 w-24 rounded-full" src="~/assets/images/food/kfc.webp" alt="image">
                          <div class="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 bg-[#C3FFA7] rounded-full border-2 border-white">
                                 <span class="text-sm text-gray-500 font-medium"> #2</span>
                              </div>
                      </div>
                          <div class="min-w-0 flex-1">
                          <div class="ml-4">            
                              <div class="text-sm text-gray-900">Chicken curry special with cucumber</div>
                              <div class="flex items-center mt-1">
                                  <svg width="14" height="14" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> 
                                  <span class="text-[11px] text-[#EE1029] ml-2">Best Seller</span>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                  <div class="flex items-center"><svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg> 
                                      <span class="text-sm text-gray-900 ml-1">450</span>
                                  </div>
                                   <div class="text-sm text-gray-700">Order</div> 
                              </div>
                          </div>
                          </div>
                      </div>

                      <div class="relative flex items-center">
                          <div class="flex-shrink-0 relative">
                              <img class="h-24 w-24 rounded-full" src="~/assets/images/food/kfc.webp" alt="image">
                               <div class="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 bg-[#C3FFA7] rounded-full border-2 border-white">
                                 <span class="text-sm text-gray-500 font-medium"> #3</span>
                              </div>
                          </div>
                          <div class="min-w-0 flex-1">
                          <div class="ml-4">            
                              <div class="text-sm text-gray-900">Chicken curry special with cucumber</div>
                              <div class="flex items-center mt-1">
                                  <svg width="14" height="14" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>
                                  <span class="text-[11px] text-[#1FBE58] ml-2">Best Seller</span>
                              </div>
                              <div class="mt-1 flex items-center justify-between">
                                  <div class="flex items-center"><svg width="7" height="12" viewBox="0 0 11 18" fill="none" ><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg> 
                                      <span class="text-sm text-gray-900 ml-1">450</span>
                                  </div>
                                   <div class="text-sm text-gray-700">Order </div> 
                              </div>
                          </div>
                          </div>
                      </div>


                      </div>
              </div>        
              

           </div>

      </div>






  </div>
  
</template>
<script lang="ts">
import Vue from 'vue'

export default{
name: 'DashboardPage',

}
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

input[type="text"]:not(:placeholder-shown) ~ label, select:not([value='']):valid ~ label{
    color: rgba(72, 206, 243, var(--tw-text-opacity));
}


.payment-one{background: linear-gradient(91.73deg, #471EE8 0.13%, #1E9FE8 100%);}
.payment-two{background: linear-gradient(111.9deg, #AC39D4 18.97%, #6139D4 84.57%);}
.payment-three{background: linear-gradient(111.9deg, #1FDFC8 18.97%, #12D0D0 84.57%);}




</style>