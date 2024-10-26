<template>
  <div class="relative">
    
    <div
      :class="collapseLeftNavBar? 'collapse-left-bar' : ''"
      class="fixed min-h-screen bg-[#21244e] w-[180px] md:w-[180px] lg:w-[220px] xl:w-[280px] 2xl:w-[320px] top-0 z-20 hidden sm:hidden md:block transition-all">
      <a 
      href="javascript:;" 
      class="absolute z-[999] top-8 -right-7 hidden"
      @click="collapseToggleLeftBar()">
      <svg 
        v-if="collapseLeftNavBar"
        width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M0 1C0 0.447715 0.358172 0 0.8 0H15.2C15.6418 0 16 0.447715 16 1C16 1.55228 15.6418 2 15.2 2H0.8C0.358172 2 0 1.55228 0 1ZM0 7C0 6.44772 0.358172 6 0.8 6H15.2C15.6418 6 16 6.44772 16 7C16 7.55228 15.6418 8 15.2 8H0.8C0.358172 8 0 7.55228 0 7ZM0.8 12C0.358172 12 0 12.4477 0 13C0 13.5523 0.358172 14 0.8 14H15.2C15.6418 14 16 13.5523 16 13C16 12.4477 15.6418 12 15.2 12H0.8Z"
          fill="#8CAEC5" />
      </svg>
      <svg 
        v-else
        width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M0 1C0 0.447715 0.358172 0 0.8 0H15.2C15.6418 0 16 0.447715 16 1C16 1.55228 15.6418 2 15.2 2H0.8C0.358172 2 0 1.55228 0 1ZM0 7C0 6.44772 0.358172 6 0.8 6H15.2C15.6418 6 16 6.44772 16 7C16 7.55228 15.6418 8 15.2 8H0.8C0.358172 8 0 7.55228 0 7ZM0.8 12C0.358172 12 0 12.4477 0 13C0 13.5523 0.358172 14 0.8 14H15.2C15.6418 14 16 13.5523 16 13C16 12.4477 15.6418 12 15.2 12H0.8Z"
          fill="#8CAEC5" />
      </svg>
    </a>
      <div class="px-5 py-6 text-center">
        <a href="#" class="flex justify-start w-full text-center" title="gintaa">
          <img src="~/assets/images/food/food-logo.svg" alt="gintaa food" class="w-[130px] h-auto"/>         
         </a>
    

      </div>
      <div class="nav">
        
        <ul class="flex-1 sidemenu ">          
          <li class="mb-2 rounded-sm hover:bg-[#2e315d] transition"
            :class="setActiveRuter(localePath('/gintaa-food/vendor')) ? 'bg-firoza opacity-100 active-side' : 'bg-[#21244e] opacity-70'"><a
              :href="localePath('/gintaa-food/vendor')"
              class="text-white text-sm  hover:opacity-100 py-2 px-4 flex items-center md:py-2 lg:py-3" title="Orders">
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-3">
  <path d="M6.75 2.25C6.75 1.65326 6.98705 1.08097 7.40901 0.65901C7.83097 0.237053 8.40326 0 9 0C9.59674 0 10.169 0.237053 10.591 0.65901C11.0129 1.08097 11.25 1.65326 11.25 2.25V3.13875C14.5035 4.10625 16.875 7.12012 16.875 10.6875C16.875 10.8367 16.8157 10.9798 16.7102 11.0852C16.6048 11.1907 16.4617 11.25 16.3125 11.25H1.6875C1.53832 11.25 1.39524 11.1907 1.28975 11.0852C1.18426 10.9798 1.125 10.8367 1.125 10.6875C1.12511 8.9914 1.67258 7.34061 2.68602 5.98058C3.69946 4.62054 5.12475 3.62387 6.75 3.13875V2.25ZM9.5625 6.1875C10.0372 6.1875 10.5075 6.192 10.989 6.36525C11.4536 6.53175 11.9677 6.87262 12.4695 7.62525C12.5105 7.68671 12.5632 7.73949 12.6246 7.78058C12.686 7.82167 12.7549 7.85027 12.8273 7.86474C12.8998 7.87921 12.9744 7.87926 13.0468 7.86491C13.1193 7.85055 13.1882 7.82206 13.2497 7.78106C13.3111 7.74007 13.3639 7.68736 13.405 7.62597C13.4461 7.56457 13.4747 7.49569 13.4892 7.42324C13.5036 7.35079 13.5037 7.2762 13.4893 7.20373C13.475 7.13127 13.4465 7.06233 13.4055 7.00087C12.7811 6.06487 12.078 5.56088 11.3692 5.30663C10.6931 5.0625 10.0463 5.0625 9.585 5.0625H9.5625C9.41332 5.0625 9.27024 5.12176 9.16475 5.22725C9.05926 5.33274 9 5.47582 9 5.625C9 5.77418 9.05926 5.91726 9.16475 6.02275C9.27024 6.12824 9.41332 6.1875 9.5625 6.1875ZM1.6875 12.375C1.23995 12.375 0.810725 12.5528 0.494257 12.8693C0.17779 13.1857 0 13.6149 0 14.0625C0 14.5101 0.17779 14.9393 0.494257 15.2557C0.810725 15.5722 1.23995 15.75 1.6875 15.75H16.3125C16.7601 15.75 17.1893 15.5722 17.5057 15.2557C17.8222 14.9393 18 14.5101 18 14.0625C18 13.6149 17.8222 13.1857 17.5057 12.8693C17.1893 12.5528 16.7601 12.375 16.3125 12.375H1.6875Z" fill="#A9ACC4"/>
  </svg>


  <span class="menu-name"> {{ $t('foodOrder') }}</span></a></li>         
            <li class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none">
                <h2 class="accordion-header mb-0" id="flush-headingOne">
                            <button 
                            
                              class="accordion-button relative flex items-center w-full py-2 px-4 md:py-2 lg:py-3
                            text-sm text-white text-left opacity-70 border-0 rounded-none transition bg-[#21244e]
                            focus:outline-none  hover:bg-[#2e315d] opacity-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="true" aria-controls="flush-collapseOne" title="Menu">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="mr-3">
                <g clip-path="url(#clip0_12203_14996)">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15.4135 20C14.8176 20 14.1626 19.5259 14.1626 18.75V11.6667C14.1626 11.6667 13.186 11.6642 12.1068 11.6667C12.7751 5.83669 14.6926 2.52281e-05 15.9901 2.52281e-05C16.3626 2.52281e-05 16.6601 0.297525 16.6626 0.709192C16.671 1.87169 16.6651 14.5525 16.6635 18.75C16.6635 19.44 16.1035 20 15.4135 20ZM5.82595 9.62586C5.82595 9.05003 5.46512 8.86169 4.67845 8.23169C4.09762 7.76503 3.69762 7.03753 3.77179 6.29669C3.98179 4.18253 4.49012 -0.0158081 4.49012 -0.0158081H4.99012V4.98419H5.82595L6.01179 -0.0158081H6.51762L6.66179 4.98419H7.49762L7.69929 -0.0158081H8.16762L8.33345 4.98419H9.16929V-0.0158081H9.62679C9.62679 -0.0158081 10.1885 4.15503 10.4193 6.27586C10.501 7.02753 10.0785 7.76919 9.48429 8.23919C8.69345 8.86503 8.33345 9.04503 8.33345 9.63003V18.7342C8.33345 19.4242 7.77262 19.9842 7.07929 19.9842C6.38679 19.9842 5.82595 19.4242 5.82595 18.7342V9.62586Z"
                    fill="#A9ACC4" />
                </g>
                <defs>
                  <clipPath id="clip0_12203_14996">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span class="menu-name">  {{ $t('foodMenus') }} </span>
                            </button>                           
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                            aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample1">
                            <div class="accordion-body pt-2 text-xsb text-gray-500 sm:pt-2 md:py-2 md:pb-0 lg:pt-2">
                              <div> 
                                <ul class="flex-1 space-y-0 px-5 sm:space-y-0 md:space-y-0 lg:space-y-1">
                                <li><a :class="setActiveRuter(localePath('/gintaa-food/vendor/add-category')) ? 'opacity-100' : 'opacity-70'" :href="localePath('/gintaa-food/vendor/add-category')" class="text-sm py-2 pl-5 flex items-center text-white  relative before:absolute before:w-[6px] before:h-[2px] before:bg-[#fff] before:top-4 before:left-1 before:bg-opacity-70 hover:opacity-100" title="Add Category">
                                  <span class="menu-name">{{ $t('foodAddCategory') }}</span>
                                </a></li>
                                <li><a :class="setActiveRuter(localePath('/gintaa-food/vendor/add-menu')) ? 'opacity-100' : 'opacity-70'" :href="localePath('/gintaa-food/vendor/add-menu')" class="text-sm py-2 pl-5 flex items-center text-white  relative before:absolute before:w-[6px] before:h-[2px] before:bg-[#fff] before:top-4 before:left-1 before:bg-opacity-70 hover:opacity-100" title="Add Menu">
                                  <span class="menu-name">{{ $t('foodaddMenu') }}</span>
                                </a></li>
                                <li><a :class="setActiveRuter(localePath('/gintaa-food/vendor/menu')) ? 'opacity-100' : 'opacity-70'" :href="localePath('/gintaa-food/vendor/menu')" class="text-sm py-2 pl-5 flex items-center text-white  relative before:absolute before:w-[6px] before:h-[2px] before:bg-[#fff] before:top-4 before:left-1 before:bg-opacity-70 hover:opacity-100" title="View Menu">
                                  <span class="menu-name">{{ $t('viewMenu') }}</span>
                                </a></li>
                              </ul>
                    
                      </div>
                        </div>
                        </div>
              </div>            
            
            </li>
          
          <li class="mb-2 rounded-sm hover:bg-[#2e315d] transition"
            :class="setActiveRuter(localePath('/gintaa-food/vendor/past-order')) ? 'bg-firoza opacity-100 active-side' : 'bg-[#21244e] opacity-70'"><a
              :href="localePath('/gintaa-food/vendor/past-order')"
              class="text-white text-sm  hover:opacity-100 py-2 px-4 flex items-center md:py-2 lg:py-3">
              <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-3">
              <path d="M12 0C7.03 0 3 4.03 3 9H0L3.89 12.89L3.96 13.03L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.07 16 8.32 15.21 7.06 13.94L5.64 15.36C7.27 16.99 9.51 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0ZM11 5V10L15.28 12.54L16 11.33L12.5 9.25V5H11Z" fill="#A9ACC4"/>
              </svg>
             <span class="menu-name"> {{ $t('foodOrderHistory') }}</span> </a></li>

             <li class="rounded-sm hover:bg-[#2e315d] transition"
            :class="setActiveRuter(localePath('/gintaa-food/vendor/payments')) ? 'bg-firoza opacity-100 active-side' : 'bg-[#21244e] opacity-70'"><a
              :href="localePath('/gintaa-food/vendor/payments')"
              class="text-white text-sm  hover:opacity-100 py-2 px-4 flex items-center md:py-2 lg:py-3">
              <svg width="20" height="16"  viewBox="0 0 25 19" class="mr-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.73779 7.01172H23.7378M3.73779 1.01172H21.7378C22.8424 1.01172 23.7378 1.90715 23.7378 3.01172V15.0117C23.7378 16.1163 22.8424 17.0117 21.7378 17.0117H3.73779C2.63322 17.0117 1.73779 16.1163 1.73779 15.0117V3.01172C1.73779 1.90715 2.63322 1.01172 3.73779 1.01172Z" stroke="#8CAEC5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
             <span class="menu-name"> {{ $t('foodPayments') }}</span> </a></li>

             <!-- <li class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none">
                <h2 class="accordion-header mb-0" id="flush-headingTwo">
                            <button 
                            
                              class="accordion-button relative flex items-center w-full py-2 px-4 md:py-2 lg:py-4
                            text-sm text-white text-left opacity-70 border-0 rounded-none transition bg-[#21244e]
                            focus:outline-none  hover:bg-[#2e315d] opacity-100" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                aria-expanded="true" aria-controls="flush-collapseTwo" title="Menu">
                                <svg width="20" height="16"  viewBox="0 0 25 19" class="mr-3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.73779 7.01172H23.7378M3.73779 1.01172H21.7378C22.8424 1.01172 23.7378 1.90715 23.7378 3.01172V15.0117C23.7378 16.1163 22.8424 17.0117 21.7378 17.0117H3.73779C2.63322 17.0117 1.73779 16.1163 1.73779 15.0117V3.01172C1.73779 1.90715 2.63322 1.01172 3.73779 1.01172Z" stroke="#8CAEC5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
              <span class="menu-name"> Payment </span>
                            </button>
                           
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse show"
                            aria-labelledby="flush-headingOne2" data-bs-parent="#accordionFlushExample1">
                            <div class="accordion-body py-2 text-xsb text-gray-500 sm:py-2 md:py-2 md:pb-0 lg:py-4">
                              <div> 
                                <ul class="flex-1 space-y-0 px-5 sm:space-y-0 md:space-y-0 lg:space-y-3">
                <li><a :class="setActiveRuter(localePath('/gintaa-food/vendor/payment/payments')) ? 'opacity-100' : 'opacity-70'" :href="localePath('/gintaa-food/vendor/payment/payments')" class="text-sm py-2 pl-5 flex items-center text-white  relative before:absolute before:w-[6px] before:h-[2px] before:bg-[#fff] before:top-4 before:left-1 before:bg-opacity-70 hover:opacity-100" title="Add Category">
                  <span class="menu-name">Payments</span>
                </a></li>
                <li><a :class="setActiveRuter(localePath('/gintaa-food/vendor/payment/add-bank-account')) ? 'opacity-100' : 'opacity-70'" :href="localePath('/gintaa-food/vendor/payment/add-bank-account')" class="text-sm py-2 pl-5 flex items-center text-white  relative before:absolute before:w-[6px] before:h-[2px] before:bg-[#fff] before:top-4 before:left-1 before:bg-opacity-70 hover:opacity-100" title="Add Menu">
                  <span class="menu-name">Add Bank Account</span>
                </a></li>                
              </ul>
                    
                      </div>
                        </div>
                        </div>
              </div>
                        
            </li> -->

      </ul>
    </div>
  </div>

  <!-- mobile menu start -->
  <div class="py-2 px-4 fixed bottom-0 bg-white z-20 w-full left-0 shadow-2xl block sm:block md:hidden">
     <div class="w-full flex items-center justify-between">
      <div >
        <a :href="localePath('/gintaa-food/vendor')" class="flex flex-col items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink">
              <mask id="mask0_12203_15173" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20"
                height="20">
                <rect width="20" height="20" fill="url(#pattern0)" />
              </mask>
              <g mask="url(#mask0_12203_15173)">
                <rect x="-8.5415" y="-6.45831" width="33.9583" height="34.1667" fill="#A9ACC4" />
              </g>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_12203_15173" transform="scale(0.0104167)" />
                </pattern>
                <image id="image0_12203_15173" width="96" height="96"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACnUlEQVR4nO3cu2oUURzH8W80hSFZwWgfbRIQosE8gdoICsFL0MZCCIgIqQKiWKT0QfYV7PUBrBRMvBBfQMWobGHcWJwpRDJmzm3+c/l94M9WZ/bM77+zlzMnARERERERERERERER6boJ6wlUsB85vtHneMR6An2nBhhTA4ypAcbUAGNqgDE1QERExEij10mASWAZWATmgQXgDDANnCgeAX4CX4vHHWAbeAe8Bl4Be7XOuuVOAxvAc2AXtxgXU7vFsTaKY8sBBsAa8BIYEx96WY2L51gDZmo5s4Y7DjwCPpMv9LL6BjwDZrOfZQNNAZukeYtJ8Ra1WcypFy4DW9gH/299BK5mPG9zA2CIfdCH1bCYa6ecBd5gH27V2gaWsiRh4BYwwj5U3xoBNzPkUat7wC/swwytPeBB8lRq8gT7AFPV48TZZHcf+9BS13rShDJawV261oGlrt/AasKcsliinR+4VWsEnE+WVmIzwFvsQ8pd73FLKI3Thh9ZqWqYKLNkrmAfSt11LUlyCUzh1lGsA6m7PgDHYsM7GnsA4ClwPcFx2mYW983ohfUkmrCkbFU/gFMxAcZuzFqngyuHHqaBhzEHiLkpPwA+0dM7Sn/5AszhrgZvMVfAHRQ+uAxuhw6OacDdiLFdU3sWc+TdvdC2GuP2K3kLvQJWaf6mrjpNADdCBoY24FLguC67GDIo5FU8idvH08gFKUPfgZO4O4CVhVwByyj8gwyAC76DQhpwLmBMXyz6DghpwHzAmL7wziakAQsBY/qilgZoi3c5798CIQ3QB3A572xCGtDn1c/DeGcT0gD9YUM5vThFRKSyKotx+9ln0W3/zVj/LcWYGmBMDTCmBhhTA4ypAcbUABERERERERERERERERERkUz+AN7jrIAvlrLmAAAAAElFTkSuQmCC" />
              </defs>
            </svg>

           <div class="text-[13px] text-gray-900 mt-1">{{ $t('foodOrder') }}</div> 
          </a>
        </div> 

        <div>
        <a :href="localePath('/gintaa-food/vendor/restaurant-profile')" class="flex flex-col items-center">
          <svg width="21" height="19" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 2C6.84315 2 5.5 3.34315 5.5 5C5.5 6.65685 6.84315 8 8.5 8C10.1569 8 11.5 6.65685 11.5 5C11.5 3.34315 10.1569 2 8.5 2ZM3.5 5C3.5 2.23858 5.73858 0 8.5 0C11.2614 0 13.5 2.23858 13.5 5C13.5 7.76142 11.2614 10 8.5 10C5.73858 10 3.5 7.76142 3.5 5ZM1.46447 13.4645C2.40215 12.5268 3.67392 12 5 12H12C13.3261 12 14.5979 12.5268 15.5355 13.4645C16.4732 14.4021 17 15.6739 17 17V19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19V17C15 16.2043 14.6839 15.4413 14.1213 14.8787C13.5587 14.3161 12.7956 14 12 14H5C4.20435 14 3.44129 14.3161 2.87868 14.8787C2.31607 15.4413 2 16.2044 2 17V19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19V17C0 15.6739 0.526784 14.4021 1.46447 13.4645ZM23.7071 7.70711C24.0976 7.31658 24.0976 6.68342 23.7071 6.29289C23.3166 5.90237 22.6834 5.90237 22.2929 6.29289L19 9.58579L17.7071 8.29289C17.3166 7.90237 16.6834 7.90237 16.2929 8.29289C15.9024 8.68342 15.9024 9.31658 16.2929 9.70711L18.2929 11.7071C18.6834 12.0976 19.3166 12.0976 19.7071 11.7071L23.7071 7.70711Z" fill="#A9ACC4" />
          </svg>
           <div class="text-[13px] text-gray-900 mt-1">{{ $t('myAccount') }}</div> 
          </a>
        </div>

        <div>
        <a href="javascript:void(0)" @click="showMobileMenu=!showMobileMenu" class="flex flex-col items-center">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" ><g clip-path="url(#clip0_12203_14996)" ><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4135 20C14.8176 20 14.1626 19.5259 14.1626 18.75V11.6667C14.1626 11.6667 13.186 11.6642 12.1068 11.6667C12.7751 5.83669 14.6926 2.52281e-05 15.9901 2.52281e-05C16.3626 2.52281e-05 16.6601 0.297525 16.6626 0.709192C16.671 1.87169 16.6651 14.5525 16.6635 18.75C16.6635 19.44 16.1035 20 15.4135 20ZM5.82595 9.62586C5.82595 9.05003 5.46512 8.86169 4.67845 8.23169C4.09762 7.76503 3.69762 7.03753 3.77179 6.29669C3.98179 4.18253 4.49012 -0.0158081 4.49012 -0.0158081H4.99012V4.98419H5.82595L6.01179 -0.0158081H6.51762L6.66179 4.98419H7.49762L7.69929 -0.0158081H8.16762L8.33345 4.98419H9.16929V-0.0158081H9.62679C9.62679 -0.0158081 10.1885 4.15503 10.4193 6.27586C10.501 7.02753 10.0785 7.76919 9.48429 8.23919C8.69345 8.86503 8.33345 9.04503 8.33345 9.63003V18.7342C8.33345 19.4242 7.77262 19.9842 7.07929 19.9842C6.38679 19.9842 5.82595 19.4242 5.82595 18.7342V9.62586Z" fill="#A9ACC4" ></path></g> <defs ><clipPath id="clip0_12203_14996" ><rect width="20" height="20" fill="white" ></rect></clipPath></defs></svg>
           <div class="text-[13px] text-gray-900 mt-1">{{ $t('foodMenus') }}</div> 
          </a>
        </div> 

        <!-- <div >
        <a :href="localePath('/gintaa-food/vendor/dashboard')" class="flex flex-col items-center">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none"  ><g clip-path="url(#clip0_12203_15001)" ><path d="M4.16667 15.8333H0.833333V9.16665H4.16667V15.8333ZM9.16667 15.8333H5.83333V0.833313H9.16667V15.8333ZM14.1667 15.8333H10.8333V5.83331H14.1667V15.8333ZM19.1667 15.8333H15.8333V12.5H19.1667V15.8333ZM20 17.5H0V19.1666H20V17.5Z" fill="#A9ACC4" ></path></g> <defs ><clipPath id="clip0_12203_15001" ><rect width="20" height="20" fill="white" ></rect></clipPath></defs></svg>
           <div class="text-[13px] text-gray-900 mt-1">{{ $t('foodInsights') }}</div> 
          </a>
        </div>  -->

        <div >
        <a :href="localePath('/gintaa-food/vendor/past-order')" class="flex flex-col items-center">
          <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M12 0C7.03 0 3 4.03 3 9H0L3.89 12.89L3.96 13.03L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.07 16 8.32 15.21 7.06 13.94L5.64 15.36C7.27 16.99 9.51 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0ZM11 5V10L15.28 12.54L16 11.33L12.5 9.25V5H11Z" fill="#A9ACC4" ></path></svg>

           <div class="text-[13px] text-gray-900 mt-1">
            <span class="menu-name">
            {{ $t('foodOrderHistory') }}</span>
          </div> 
          </a>
        </div> 

     </div>
</div> 

<!-- mobile menu end -->

    <!-- Start vendor mobile menus -->
    <div v-show="showMobileMenu" @click="showMobileMenu=!showMobileMenu"  aria-labelledby="modal-title" role="dialog" aria-modal="true" class="fixed z-50 inset-0 overflow-y-auto">
         <div  class="flex items-start justify-start min-h-screen px-4">
              <div  aria-hidden="true" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
         <div  class="bg-white p-0 overflow-x-hidden overflow-y-auto shadow-xl transform transition-all fixed top-0 left-0 max-w-full h-screen auto-scroll w-[170px]">
        <!-- <div  class="block sm:block absolute top-0 right-0 pt-4 pr-4">
              <a  href="javascript:;" type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span  class="sr-only">Close</span> 
                  <svg  fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </a>
       </div> -->
       <div  class="w-full flex flex-col">
            <div  class="flex flex-col w-full">
                  <div class="flex items-center bg-green px-2 py-1.5">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="mr-3" ><g clip-path="url(#clip0_12203_14996)" ><path fill-rule="evenodd" clip-rule="evenodd" d="M15.4135 20C14.8176 20 14.1626 19.5259 14.1626 18.75V11.6667C14.1626 11.6667 13.186 11.6642 12.1068 11.6667C12.7751 5.83669 14.6926 2.52281e-05 15.9901 2.52281e-05C16.3626 2.52281e-05 16.6601 0.297525 16.6626 0.709192C16.671 1.87169 16.6651 14.5525 16.6635 18.75C16.6635 19.44 16.1035 20 15.4135 20ZM5.82595 9.62586C5.82595 9.05003 5.46512 8.86169 4.67845 8.23169C4.09762 7.76503 3.69762 7.03753 3.77179 6.29669C3.98179 4.18253 4.49012 -0.0158081 4.49012 -0.0158081H4.99012V4.98419H5.82595L6.01179 -0.0158081H6.51762L6.66179 4.98419H7.49762L7.69929 -0.0158081H8.16762L8.33345 4.98419H9.16929V-0.0158081H9.62679C9.62679 -0.0158081 10.1885 4.15503 10.4193 6.27586C10.501 7.02753 10.0785 7.76919 9.48429 8.23919C8.69345 8.86503 8.33345 9.04503 8.33345 9.63003V18.7342C8.33345 19.4242 7.77262 19.9842 7.07929 19.9842C6.38679 19.9842 5.82595 19.4242 5.82595 18.7342V9.62586Z" fill="#ffffff" ></path></g> <defs ><clipPath id="clip0_12203_14996" ><rect width="20" height="20" fill="white" ></rect></clipPath></defs></svg>
                    <div class="text-lg text-white font-normal">{{ $t('foodMenus') }}</div>
                  </div>
                  
              <div class="w-full pl-6 pr-2">
                  <ul class="flex-1 space-y-0 sm:space-y-0 md:space-y-0 lg:space-y-3">
                      <li>
                         <a href="/gintaa-food/vendor/add-category" title="Add Category" class="text-sm py-2 pl-5 flex items-center text-gray-700  relative before:absolute before:w-[6px] before:h-[2px] before:bg-[#a3a3a3] before:top-4 before:left-1 transition-colors duration-200 hover:text-green">
                             <span class="menu-name">{{ $t('foodAddCategory') }}</span>
                         </a>
                      </li> 
                      <li>
                         <a href="/gintaa-food/vendor/add-menu" title="Add Menu" class="text-sm py-2 pl-5 flex items-center text-gray-700  relative before:absolute before:w-[6px] before:h-[2px] before:bg-[#a3a3a3] before:top-4 before:left-1 transition-colors duration-200 hover:text-green">
                             <span class="menu-name">{{ $t('foodaddMenu') }}</span>
                         </a>
                      </li> 
                      <li>
                          <a href="/gintaa-food/vendor/menu" title="View Menu" class="text-sm py-2 pl-5 flex items-center text-gray-700  relative before:absolute before:w-[6px] before:h-[2px] before:bg-[#a3a3a3] before:top-4 before:left-1 transition-colors duration-200 hover:text-green">
                            <span class="menu-name"> {{ $t('viewMenu') }}</span>
                          </a>
                        </li>

                        <li>
                          <a href="/gintaa-food/vendor/payments" title="payments" class="text-sm py-2 pl-5 flex items-center text-gray-700  relative before:absolute before:w-[6px] before:h-[2px] before:bg-[#a3a3a3] before:top-4 before:left-1 transition-colors duration-200 hover:text-green">
                            <span class="menu-name"> {{ $t('foodPayments') }} </span>
                          </a>
                        </li>

                      </ul>
                    </div>
            </div>

      </div>
    </div>
  </div>
 </div>
 <!-- End vendor mobile menus -->

</div>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Sidebar',
  data() {
    return {
      collapseLeftNavBar: false,
      showMobileMenu: false,
    }
  },
  methods: {
    setActiveRuter(routingPath: string) {
      if (routingPath === this.$route.path) {
        return true
      } else {
        return false
      }

    },
    collapseToggleLeftBar(){
      this.collapseLeftNavBar = !this.collapseLeftNavBar
    }
  }
});
</script>
<style scoped>
.accordion-button:not(.collapsed){
  background: #2e315d !important;
  border: 0 !important;
  color: #fff !important;
  box-shadow: none !important;
  opacity: 70 !important;
 
  
}
.accordion-button:not(.collapsed)::after{
  background-image: url(~/assets/images/down-arrow.svg) !important; 
  transform: rotate(-180deg) !important;
}
/* .accordion-button:(.collapsed)::after{
  background-image: url(~/assets/images/down-arrow.svg) !important; 
  transform: rotate(0deg) !important;
} */
.accordion-button::after{
  width: 1rem !important;
  height: 1rem !important;
  background-size: 1rem !important;
  background-image: url(~/assets/images/down-arrow.svg) !important;
}
.sidemenu li:hover svg path, .sidemenu li:hover svg{
  fill: #fff !important;
}
.accordion-item:first-of-type .accordion-button{
  border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;

}
.accordion-item:first-of-type .accordion-button svg path, .active-side svg path, .active-side svg{

  fill: #fff !important;

}
.active-side:hover{
  background: #48CEF3 !important;
}
.collapse-left-bar{
  width: 85px !important;
  }
  .collapse-left-bar .menu-name{
    display: none !important;
  }
  .collapse-left-bar .small-logo{
    display: block !important;
  }
  .collapse-left-bar .big-logo{

    display: none !important;

  }
</style>