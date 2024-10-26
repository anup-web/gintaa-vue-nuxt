<template>
<div class="cart-listing-details-page pt-[80px] lg:pt-12">
    <!--//////////header///////////-->
    <Header/>
    <!--////////Breadcrumb//////////-->
        <div class="mx-auto max-w-[1920px] md:px-8 2xl:px-16 pt-10 hidden md:flex">
         <breadcrumb/>
    </div>

    <div class="single-product-block py-6">
        <div class=" container max-w-8xl mx-auto  md:px-8 2xl:px-16">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-7">
                <div class="product-details-image px-4 sm:px-4 md:px-0 2xl:px-0">
                    <ul class="grid grid-cols-2 lg:grid-cols-2 md:gap-3 sm:gap-2 xs:gap-1">
                        <li>
                        <div id="open-btn" class="product-img flex cursor-pointer">
                            <img  src="~/assets/images/p-18.png" alt="Armani Veni Vidi Vici" class="bg-gray-300   w-full  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" />
                        </div>
                    </li>
               <li>
                <div class="product-img flex ">
                    <img src="~/assets/images/p-18.png" alt="Armani Veni Vidi Vici" class="bg-gray-300   w-full  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" />
                </div>
            </li>
            <li class="md:block sm:hidden">
                        <div class="product-img flex ">
                            <img src="~/assets/images/p-18.png" alt="Armani Veni Vidi Vici" class="bg-gray-300   w-full  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" />
                        </div>
                    </li>
               <li class="md:block sm:hidden">
                <div class="product-img flex">
                    <img src="~/assets/images/p-18.png" alt="Armani Veni Vidi Vici" class="bg-gray-300   w-full  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none" />
                </div>
            </li>
                    </ul>
                </div>



<div class="product-details-des failed-msg">
     <div class="border-b border-slate-100 pb-4 pr-32 relative mb-3 px-4 sm:px-4 md:px-0 2xl:px-0 sm:pr-20 md:pr-16 2xl:pr-20">
        <h3 class="font-medium text-sm sm:text-base md:text-xl capitalize text-gray-700 break-words">
                demo mobile for sale
        </h3> 
        <div class="share-report absolute flex items-center right-[10px] top-0 report-user sm:right-[10px] md:right-0 lg:right-0 xl:right-0 2xl:right-0"> 
            <div class="inline-block p-2 relative share-social">
                <div title="Share" class="cursor-pointer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.6 2.18182C17.385 2.18182 16.4 3.15865 16.4 4.36364C16.4 4.74231 16.4973 5.09844 16.6684 5.40882C16.6797 5.4258 16.6906 5.44319 16.7011 5.46098C16.7115 5.47866 16.7213 5.49651 16.7306 5.5145C17.1188 6.13344 17.8109 6.54545 18.6 6.54545C19.815 6.54545 20.8 5.56862 20.8 4.36364C20.8 3.15865 19.815 2.18182 18.6 2.18182ZM15.4738 7.43434C16.2712 8.23273 17.3774 8.72727 18.6 8.72727C21.0301 8.72727 23 6.77361 23 4.36364C23 1.95367 21.0301 0 18.6 0C16.1699 0 14.2 1.95367 14.2 4.36364C14.2 4.7749 14.2574 5.17288 14.3646 5.55013L8.52608 8.9292C7.7287 8.13087 6.62258 7.63636 5.4 7.63636C2.96995 7.63636 1 9.59003 1 12C1 14.41 2.96995 16.3636 5.4 16.3636C6.62286 16.3636 7.7292 15.8689 8.52663 15.0702L14.366 18.4449C14.2579 18.8236 14.2 19.2233 14.2 19.6364C14.2 22.0463 16.1699 24 18.6 24C21.0301 24 23 22.0463 23 19.6364C23 17.2264 21.0301 15.2727 18.6 15.2727C17.3793 15.2727 16.2746 15.7658 15.4775 16.562L9.63557 13.1859C9.74269 12.8088 9.8 12.411 9.8 12C9.8 11.5887 9.74262 11.1907 9.63536 10.8134L15.4738 7.43434ZM7.26994 10.85C7.27908 10.8676 7.28875 10.8852 7.29895 10.9025C7.30924 10.92 7.31994 10.9371 7.33104 10.9538C7.50251 11.2644 7.6 11.6209 7.6 12C7.6 12.3787 7.5027 12.7349 7.33155 13.0453C7.32014 13.0624 7.30915 13.08 7.2986 13.0979C7.28835 13.1154 7.27865 13.133 7.26949 13.1507C6.88126 13.7697 6.18915 14.1818 5.4 14.1818C4.18497 14.1818 3.2 13.205 3.2 12C3.2 10.795 4.18497 9.81818 5.4 9.81818C6.18946 9.81818 6.8818 10.2306 7.26994 10.85ZM16.4 19.6364C16.4 19.2816 16.4854 18.9466 16.6369 18.6505C16.664 18.6151 16.6893 18.5777 16.7124 18.5383C16.7346 18.5005 16.7542 18.462 16.7714 18.4229C17.1662 17.8389 17.8378 17.4545 18.6 17.4545C19.815 17.4545 20.8 18.4314 20.8 19.6364C20.8 20.8413 19.815 21.8182 18.6 21.8182C17.385 21.8182 16.4 20.8413 16.4 19.6364Z" fill="#a3acb9"></path></svg>
                </div>
             </div>
           </div>
         </div> 
        <div class="pb-4 mb-6 lg:border-b border-slate-100 px-4 sm:px-4 md:px-0 2xl:px-0 border-b-4">
            <div class="view mb-3">
                <ul class="flex items-center">
                    <li class="text-[11px] mr-3 text-gray-500 pr-3 relative  after:absolute after:w-[1px] after:h-[14px] after:bg-gray-200 after:right-0 after:top-0">
                    63  <span> Views</span></li>                    
                    <li class="text-[11px] mr-3 text-gray-500 pr-3 relative  after:absolute after:w-[1px] after:h-[14px] after:bg-gray-200 after:right-0 after:top-0">
                    1 <span> Like</span></li> 
                    <!-- <li class="text-[11px] text-gray-500">
                     Posted on  March 20 , 2022, 12:37:19 pm
                  </li> -->
                  </ul>
            </div> 

            <div class="mb-3 flex items-center">
                <span class="text-xsb text-gray-500 pr-4 block product-price">  Product Price  : </span> 
                <div class="text-base sm:text-base md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl text-gray-600 flex items-center font-medium product-price">
                   <img src="~assets/images/offer/coin-value.svg" alt="coin" class="mr-1 w-[22px] mlcoin">
                    <span>500</span>
                  </div>
                </div> 
            <div>

               <div class="py-[2px] flex justify-left" style="display: none;"><svg role="status" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-firoza"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path> <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg>
               </div> 
               <div class="flex  items-center  w-full  justify-start  md:justify-start flex-wrap mt-4"> </div>

               <div class="pb-3 fixed bottom-0 bg-white z-20 w-full md:relative pt-3 md:pt-0 md:border-none left-0 shadow-xl md:shadow-none mobile-btn">
                <div class="flex items-center px-6 sm:px-6 md:px-0 lg:px-0 xl:px-0 2xl:px-0 w-full gap-8 mt-1 justify-between md:justify-start">
                     <a href="/cart/checkout" class="text-center transition-all border border-firoza bg-firoza
                      px-8 sm:px-10 md:px-14 rounded block font-medium text-base 
                      h-12 leading-leading48 text-white hover:bg-firoza  hover:border-firoza
                      w-full sm:w-full md:w-auto lg:w-auto xl:w-auto 2xl:w-auto ">
                     redeem
                  </a>
                  </div>
                  </div>
                  </div>
              </div> 
                  
      <div class="description-attachment lg:border-b border-slate-100 pb-4 mb-5 px-4 sm:px-4 md:px-0 2xl:px-0 border-b-4">
                <div class="product-features mb-5">
                    <h4 class="text-base mb-4 font-medium text-gray-700">Product Features</h4>
                     <div class="feature-row flex w-full mb-3">
                        <div class="feature-name w-2/6 text-xs font-normal text-gray-600 pr-2">
                          Model :
                       </div> 
                    <div class="feature-ans w-4/6 text-xsb font-medium text-gray-700">Galaxy</div>
                    </div>
                    <div class="feature-row flex w-full mb-3">
                        <div class="feature-name w-2/6 text-xs font-normal text-gray-600 pr-2">
                    Operating System :
                  </div> 
                  <div class="feature-ans w-4/6 text-xsb font-medium text-gray-700">
                    Blackberry
                  </div>
                  </div>
                  </div> 
                  <div class="product-description mb-5">
                    <h4 class="text-base mb-4 font-medium text-gray-700">
                   Description 
                </h4>
                 <p class="text-sm text-gray-500 font-normal break-words">
                  demo mobile for saledemo mobile for saledemo mobile for saledemo mobile for saledemo mobile for saledemo mobile for saledemo mobile for sale
                </p>
                </div> 
                </div> 
                <div class="py-6 flex justify-left" style="display: none;">
                <svg role="status" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-firoza"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path> <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg>
                </div> 
                <div class="mb-5 px-4 sm:px-4 md:px-0 2xl:px-0">
                    <h4 class="text-base mb-4 font-medium text-gray-700">
                 Sold by 
              </h4> 
              <a href="#">
                <div class="flex items-center">
                    <div class="h-9 w-9 bg-gray-200 flex items-center justify-center rounded-full mr-5 relative">
                        <div>
                            <img src="https://dev.cdn.gintaa.com/users/XDDZjDi0yxeu011NYX6VxaW8xEv1/avatar/2FQMZHPlxju6pYwobIyHB0_8.jpg" 
                            class="w-9 h-9 rounded-full">
                        </div> 
                        <span class="w-2.5 h-2.5 bg-green block absolute left-0 bottom-1 rounded-full border-2 border-white">                            
                        </span>
                        </div> 
                        <div class="text-sm text-gray-600 font-medium mr-12"> Abhay Das
                        <span class="text-xs block font-normal">online</span>
                        </div> 
                        <div class="text-gray-600 text-sm flex">
                            <svg width="18" height="18" viewBox="0 0 22 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z" fill="#FF9500"></path></svg> <!----> <span class="pl-3 font-medium">4.2</span>
                     </div>
                     </div>
                     </a>
                     </div>
                     </div>
            </div>
        </div>
    </div>


<div  class="similar-product-section py-8 border-slate-300 border-t">
    <div  class="mx-auto max-w-[1920px] px-0 lg:px-4 md:px-8 2xl:px-16">
        <div  class="mx-auto pb-14">
            <div  class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
                <h3  class="section-title text-gray-600  text-base md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
                    <span > Similar Listings</span>
                </h3>
                </div> 
            <div  class="mylisting-grid flex flex-wrap justfy-start  lg:justify-start">
                <div  class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 w-3/6 md:w-2/6 lg:w-1/5  relative">
                    <div  class="relative w-full">
                        <div class="block w-full relative">
                            <div class="absolute right-2 cursor-pointer top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3"></path></svg>
                   </div>
                   <a href="#" target="_blank" class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden"><img src="https://dev.cdn.gintaa.com/offers/image/20220809/3pJgFu96FUGAknegbQWoLU/1qj1A77NVtDDLjUIpRxsOe_scaled07525fb9576d4abbbacd2691760e2c5e7420869220922796166.jpg" alt="iPhone for sale" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
                   </a> 
                   <div class="product-title w-full overflow-hidden px-1">
                    <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
          iPhone for sale
        </h2> 
        <div class="flex item-center flex-col mb-1">
            <div class="w-full mb-1 flex items-center justify-between">
                <div class="text-gray-600 text-[18px] font-bold pl-[0px] flex item-center relative">
                    <span class="flex items-center mr-1 ml-0 font-bold ncoin-icon">
                        <img src="~assets/images/offer/coin-value.svg" alt="coin" class="mr-1 w-[18px] mlcoin">
                            15000
                   </span></div> 
</div> 
</div> 

</div>
</div>
</div>
</div>

<div  class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 w-3/6 md:w-2/6 lg:w-1/5  relative">
    <div  class="relative w-full">
        <div class="block w-full relative">
            <div class="absolute right-2 cursor-pointer top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3"></path></svg>
            </div> 
            <a href="#" target="_blank" class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                <img src="https://dev.cdn.gintaa.com/offers/image/20220805/56WLS7FT9wLb9wsChqS8oU/4Bo9Tkva39C2WJrxN5qYOO_scaled48c8b270d79f4da89347c2437983a2345675891903121094195.jpg" alt="iPhone 12 mini" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
            </a> 
            <div class="product-title w-full overflow-hidden px-1">
                <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
          iPhone 12 mini
        </h2> 
        <div class="flex item-center flex-col mb-1">
            <div class="w-full mb-1 flex items-center justify-between">
                <div class="text-gray-600 text-[18px] font-bold pl-[0px] flex item-center relative">
                    <span class="flex items-center mr-1 ml-0 font-bold ncoin-icon">
                        <img src="~assets/images/offer/coin-value.svg" alt="coin" class="mr-1 w-[18px] mlcoin">
                            48000
                   </span>
                   </div> 
                   
</div> 

</div>

</div>
</div>
</div>
</div>

<div  class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 w-3/6 md:w-2/6 lg:w-1/5  relative">
    <div  class="relative w-full">
        <div class="block w-full relative">
            <div class="absolute right-2 cursor-pointer top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3"></path></svg>
                </div>
                 <a href="#" target="_blank" class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                    <img src="https://dev.cdn.gintaa.com/offers/image/20220525/49DuYblraxykL3T3JYSGmw/7HONzOvL4Tg4VYqsc4luyd_51kdFjyPRALACSY400.jpg" alt="d1" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
                    </a> 
                    <div class="product-title w-full overflow-hidden px-1">
                        <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
          d1
        </h2> 
        <div class="flex item-center flex-col mb-1">
            <div class="w-full mb-1 flex items-center justify-between">
                <div class="text-gray-600 text-[18px] font-bold pl-[0px] flex item-center relative">
                    <span class="flex items-center mr-1 ml-0 font-bold ncoin-icon">
                        <img src="~assets/images/offer/coin-value.svg" alt="coin" class="mr-1 w-[18px] mlcoin">
                            1560
                   </span>
                   </div> 
                   
</div> 
</div>

</div>
</div>
</div>
</div>

<div  class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 w-3/6 md:w-2/6 lg:w-1/5  relative">
    <div  class="relative w-full">
        <div class="block w-full relative">
            <div class="absolute right-2 cursor-pointer top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3"></path></svg>
                </div> 
                <a href="#" target="_blank" class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                    <img src="https://dev.cdn.gintaa.com/offers/image/20220513/3R3sF4Y3ZAlhMcZ4oWPB9f/2JCLfOT5r6gfjo8I6I8Kgt_i1.jpg" alt="Apple iPhone 13 (256GB) - Starlight" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none"></a>
                     <div class="product-title w-full overflow-hidden px-1">
                        <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
          Apple iPhone 13 (256GB) - Starlight
        </h2> 
        <div class="flex item-center flex-col mb-1">
            <div class="w-full mb-1 flex items-center justify-between">
                <div class="text-gray-600 text-[18px] font-bold pl-[0px] flex item-center relative">
                    <span class="flex items-center mr-1 ml-0 font-bold ncoin-icon">
                        <img src="~assets/images/offer/coin-value.svg" alt="coin" class="mr-1 w-[18px] mlcoin">
                            5000
                   </span>
                   </div> 
                  
</div> 

</div>

</div>
</div>
</div>
</div>


<div  class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 w-3/6 md:w-2/6 lg:w-1/5  relative">
    <div  class="relative w-full"><div class="block w-full relative">
        <div class="absolute right-2 cursor-pointer top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3"></path></svg>
            </div> 
            <a href="#" target="_blank" class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                <img src="https://dev.cdn.gintaa.com/offers/image/20220507/32DDj2eQnduSywF6SlrDEb/5KQ3g65T25IzaTFCte74vI_bottle2.jpg" alt="cdacacacadcadcadca" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
            </a> 
            <div class="product-title w-full overflow-hidden px-1">
                <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
          cdacacacadcadcadca
        </h2> 
        <div class="flex item-center flex-col mb-1">
            <div class="w-full mb-1 flex items-center justify-between">
                <div class="text-gray-600 text-[18px] font-bold pl-[0px] flex item-center relative">
                    <span class="flex items-center mr-1 ml-0 font-bold ncoin-icon">
                        <img src="~assets/images/offer/coin-value.svg" alt="coin" class="mr-1 w-[18px] mlcoin">
                            23
                   </span>
                   </div>
                    
</div> 

  </div>
  
</div>
</div>
</div>
</div>
</div>
 </div>
 </div>
 </div>




<!-- <div  class="similar-product-section pb-8 pt-0 border-t-2 border-gray-200   md:border-0">
    <div  class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 place-content-center ">
         <div  class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 ">
            <h3  class="section-title text-gray-600  text-base md:text-2xl  font-bold px-5 relative mb-2 inline-block md:before:bg-green md:before:absolute md:before:w-12 md:before:h-0.5  md:before:top-[11px] lg:before:top-4 md:before:-left-14 md:after:bg-green md:after:absolute md:after:w-12 md:after:h-0.5  md:after:top-[11px] lg:after:top-4 md:after:-right-14  mt-3 md:mt-0">
                <span >  All other Listings From Abhay Das</span>
            </h3>
            </div>
            
            <div  class="mylisting-grid flex flex-wrap justfy-start lg:justify-start">
                <div  class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 w-3/6 md:w-2/6 lg:w-1/5  relative">
                    <div  class="relative w-full">
                        <div class="block w-full relative">
                            <div class="absolute right-2 cursor-pointer top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3"></path></svg></div> <a href="/p/language-text-offer/3Qj6WKxX6QIgHXm925ZLHi" target="_blank" class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden"><img src="https://dev.cdn.gintaa.com/offers/image/20220407/lZAl3eQX2L2TDO2KB75t1/3jInQRsZsCZPcu97rAsCzs_acernathinandlightlaptoporiginalimafx3cqwwaev4hs.jpeg" alt="language text offer" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none"></a> <div class="product-title w-full overflow-hidden px-1"><h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
          language text offer
        </h2> 
        
        <div class="flex item-center flex-col mb-1">
            <div class="w-full mb-1 flex items-center justify-between">
                <div class="text-gray-600 text-[18px] font-bold pl-[10px] flex item-center relative">
                    <span class="flex items-center mr-1 ml-0 font-bold ncoin-icon">
                        <svg width="6" height="11" viewBox="0 0 11 18" fill="none" class="absolute top-[6px] left-[2px]"><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                            300000
                   </span>
            </div>


</div> 

 </div>
 </div>
 </div>
 </div>
 </div>
 
 <div  class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 w-3/6 md:w-2/6 lg:w-1/5  relative">
    <div  class="relative w-full"><div class="block w-full relative">
        <div class="absolute right-2 cursor-pointer top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3"></path></svg></div> <a href="/p/abhayas-demo-mobile/3TDhFlMWOeXOGsRgQ2rQ9y" target="_blank" class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                <img src="https://dev.cdn.gintaa.com/offers/image/2022329/9t51EjXBGmIfrUm0cIQBm/6xMlFqgYWfQzzdISDprNpI_c112021rmx3231realmeoriginalimag4j4yrdt7d9cj.jpeg" alt="Abhaya's demo mobile" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
                </a>
         <div class="product-title w-full overflow-hidden px-1">
                    <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
          Abhaya's demo mobile
        </h2> <div class="flex item-center flex-col mb-1"><div class="w-full mb-1 flex items-center justify-between"><div class="text-gray-600 text-[18px] font-bold pl-[10px] flex item-center relative"><span class="flex items-center mr-1 ml-0 font-bold ncoin-icon"><svg width="6" height="11" viewBox="0 0 11 18" fill="none" class="absolute top-[6px] left-[2px]"><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                            93000
                   </span>
                   
                   </div>
                   

</div>
</div> 

</div>
</div>
</div>
</div>

<div  class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 w-3/6 md:w-2/6 lg:w-1/5  relative">
    <div  class="relative w-full">
        <div class="block w-full relative">
        <div class="absolute right-2 cursor-pointer top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3"></path></svg></div> <a href="/p/enter-product-details-focusing-on-its-key-features-tip-a-detailed-description-ensures-higher-chances-of-receiving-offers/3qgfXyVbGcAH2Kkk0GXB42" target="_blank" class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                <img src="https://dev.cdn.gintaa.com/offers/image/2022324/tKmUq298pJIxVzzWQOUl1/5cpoS5rEMaOxkBEqjLVBbL_travellbag.jpg" alt="Enter product details focusing on its key features. Tip A detailed description ensures higher chances of receiving offers!" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none"></a> <div class="product-title w-full overflow-hidden px-1">
                    <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
          Enter product details focusing on its key features. Tip A detailed description ensures higher chances of receiving offers!
        </h2>
         <div class="flex item-center flex-col mb-1">
            <div class="w-full mb-1 flex items-center justify-between">
                <div class="text-gray-600 text-[18px] font-bold pl-[0px] flex item-center relative">
                    <span class="flex items-center mr-1 ml-0 font-bold ncoin-icon">
                       <img src="~assets/images/offer/coin-value.svg" class="mr-1 w-[18px] mlcoin">
                            60000
                   </span>
                   </div> 
 
</div>

 </div>
 </div>
 </div>
 </div>
 </div>
 
 
 <div  class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 w-3/6 md:w-2/6 lg:w-1/5  relative">
    <div  class="relative w-full">
        <div class="block w-full relative">
            <div class="absolute right-2 cursor-pointer top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3"></path></svg>
                </div> 
                <a href="/p/used-skyline-suitcases-trolley-bags-blue-leather-water-resistant-small-up-to-44-l-2/4tOFY1Kih7pVRz9jRsB03r" target="_blank" class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                    <img src="https://dev.cdn.gintaa.com/offers/image/2022322/6dNcCKUt25qSAoViqGI1T7/50VAehbwIFPEYqNdgtMQ35_8142444022ef47358e22508d2e5c60a01634475189081VivinkaaBlueEthnicMotifsShopperShoulderBagwithTasselled4.jpg" alt="Used Skyline Suitcases &amp; Trolley Bags (Blue, Leather, Water-Resistant, Small (up to 44 l), 2)" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
                    </a> 
                    <div class="product-title w-full overflow-hidden px-1">
                        <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
          Used Skyline Suitcases &amp; Trolley Bags (Blue, Leather, Water-Resistant, Small (up to 44 l), 2)
        </h2>
         <div class="flex item-center flex-col mb-1">
            <div class="w-full mb-1 flex items-center justify-between">
                <div class="text-gray-600 text-[18px] font-bold pl-[10px] flex item-center relative">
                    <span class="flex items-center mr-1 ml-0 font-bold ncoin-icon">
                        <svg width="6" height="11" viewBox="0 0 11 18" fill="none" class="absolute top-[6px] left-[2px]"><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                            1699
                   </span>
                   </div> 
                 
</div> 
 </div>
  </div>
  </div>
  </div>
  </div>
                    
                    
<div  class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 w-3/6 md:w-2/6 lg:w-1/5  relative">
    <div  class="relative w-full">
        <div class="block w-full relative">
            <div class="absolute right-2 cursor-pointer top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3"></path></svg>
                </div> 
                <a href="#" target="_blank" class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                    <img src="https://dev.cdn.gintaa.com/offers/image/2022320/40hUQqzub7x77Ih0xuDc7J/6jxRBqcXpv0hiz62zMdWKV_acernathinandlightlaptoporiginalimafx3cqwwaev4hs.jpeg" alt="testing with suggest" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
                    </a> 
                <div class="product-title w-full overflow-hidden px-1">
                    <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500">
          testing with suggest
        </h2> 
        <div class="flex item-center flex-col mb-1">
            <div class="w-full mb-1 flex items-center justify-between">
                <div class="text-gray-600 text-[18px] font-bold pl-[10px] flex item-center relative">
                    <span class="flex items-center mr-1 ml-0 font-bold ncoin-icon">
                        <svg width="6" height="11" viewBox="0 0 11 18" fill="none" class="absolute top-[6px] left-[2px]"><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                            45
                   </span>
                   </div> 

</div> 

 </div> 
 </div>
 </div>
 </div>
 </div>
 </div> 
 </div>
 </div> -->



 <!--footer section goes here-->
  <Footer/>
</div>
</template>

<script lang="ts">

import Vue from 'vue'
import carousel from '~/components/carousel.vue'

export default Vue.extend({
  components: { carousel },
   data() {
    return {
      isOptionsExpanded: false,      
    };
  },

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

