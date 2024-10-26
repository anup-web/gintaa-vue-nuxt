<template>
   <div class="cart-search-page pt-[80px] lg:pt-12">
      <!--//////////header///////////-->
      <Header/>
      <!--////////Breadcrumb//////////-->
      <div class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
         <Breadcrumb/>
      </div>
      <main class="relative flex-grow">
         <div class="mx-auto max-w-[1920px] px-4 md:px-6 2xl:px-16">
            <div class="flex pt-8 pb-16 lg:pb-20">
               <div class="flex-shrink-0 pe-24 hidden lg:block w-96">
                  <aside>
                     <div class="block border-b border-gray-300 pb-7 mb-7">
                        <div class="flex items-center justify-between mb-2.5">
                           <h2 class="font-semibold text-heading text-xl md:text-2xl">Filters</h2>
                           <button class="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading" aria-label="Clear All">Clear All</button>
                        </div>
                        <div :class="[showMoretags ? '' : 'max-h-28 overflow-hidden', 'flex flex-wrap -m-1.5 pt-2']">
                           <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                           <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                           <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                           <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                           <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                           <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                            <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                           <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                            <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                           <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                            <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                           <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                            <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                           <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                            <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                           <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                            <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                           <div class="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-gray-500  cursor-pointer transition duration-200 ease-in-out hover:border-heading">
                              t-shirt
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-sm text-body ml-2 flex-shrink-0 -me-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
                              </svg>
                           </div>
                        </div>
                        <a class="cursor-pointer text-firoza text-sm mt-5 inline-block font-medium" @click="showMoretags=!showMoretags">{{showMoretags? 'Show Less': 'Show More'}}</a>
                     </div>
                     <div class="hidden md:block">
                        <form class="divide-y divide-gray-200 space-y-10">
                            <div >
                              <fieldset>
                                 <legend class="block text-sm font-medium text-gray-900">Category</legend>
                                <div class="pt-6 space-y-3">
                                     <div class="relative">
                           <button @click="showFilter=!showFilter" class="border border-gray-300 text-gray-500 text-[12px] md:text-sm font-medium relative w-full py-2 px-3  text-left bg-white rounded  focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm cursor-pointer" id="headlessui-listbox-button-4" type="button" aria-haspopup="true" aria-expanded="false">
                              <span class="block truncate">Category</span>
                              <span class="absolute inset-y-0 right-0 flex items-center pe-2 pointer-events-none">
                                 <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="w-5 h-5 text-gray-400" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                                 </svg>
                              </span>
                           </button>
                           <ul v-show="showFilter" class="absolute w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
                              <li class="text-gray-500 text-sm py-2 pl-10 pr-4 cursor-pointer hover:bg-gray-100">Category</li>
                              <li class="text-gray-500 text-sm py-2 pl-10 pr-4 cursor-pointer hover:bg-gray-100">Category 1</li>
                              <li class="text-gray-500 text-sm py-2 pl-10 pr-4 cursor-pointer font-medium hover:bg-gray-100">
                                 <span class="absolute  flex items-center left-2">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="w-5 h-5" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                       <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                 </span>
                                Category 2
                              </li>
                              <li class="text-gray-500 text-sm py-2 pl-10 pr-4 cursor-pointer hover:bg-gray-100">Category 3</li>
                              <li class="text-gray-500 text-sm py-2 pl-10 pr-4 cursor-pointer hover:bg-gray-100">Category 4</li>
                           </ul>
                        </div>
                                </div>
                              </fieldset>
                           </div>
                           <div class="pt-10">
                              <fieldset>
                                 <legend class="block text-sm font-medium text-gray-900">City</legend>
                                 <div class="pt-6 ">
                                     <div class="space-y-3 max-h-[155px] overflow-hidden">
                                    <div class="flex items-center">
                                       <input id="color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="color-0" class="ml-3 text-sm text-gray-600">   Kolkata  </label>
                                    </div>
                                    <div class="flex items-center">
                                       <input id="color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="color-1" class="ml-3 text-sm text-gray-600">   New Delhi  </label>
                                    </div>
                                    <div class="flex items-center">
                                       <input id="color-2" name="color[]" value="blue" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="color-2" class="ml-3 text-sm text-gray-600">   Chennai  </label>
                                    </div>
                                    <div class="flex items-center">
                                       <input id="color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="color-3" class="ml-3 text-sm text-gray-600">  Bhubaneswar  </label>
                                    </div>
                                    <div class="flex items-center">
                                       <input id="color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="color-3" class="ml-3 text-sm text-gray-600">   Bangalore   </label>
                                    </div>
                                    <div class="flex items-center">
                                       <input id="color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="color-3" class="ml-3 text-sm text-gray-600">    Rourkela    </label>
                                    </div>
                                    <div class="flex items-center">
                                       <input id="color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="color-3" class="ml-3 text-sm text-gray-600">     Cuttack    </label>
                                    </div>
                                    <div class="flex items-center">
                                       <input id="color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="color-3" class="ml-3 text-sm text-gray-600">     Durgapur     </label>
                                    </div>
                                    </div>
                                    <a href="#" class="text-firoza text-sm font-normal mt-5 inline-block">10 More</a>
                                 </div>
                              </fieldset>
                           </div>
                           
                           <div class="pt-10">
                              <fieldset>
                                 <legend class="block text-sm font-medium text-gray-900">Item Condition</legend>
                                 <div class="pt-6 space-y-3">
                                    <div class="flex items-center">
                                       <input id="category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="category-0" class="ml-3 text-sm text-gray-600"> Used </label>
                                    </div>
                                    <div class="flex items-center">
                                       <input id="category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500">
                                       <label for="category-0" class="ml-3 text-sm text-gray-600"> New </label>
                                    </div>
                                 </div>
                              </fieldset>
                           </div>
                        </form>
                     </div>
                  </aside>
               </div>


<div class="w-full lg:-ms-9" >
    <div class="flex flex-col lg:flex-row  items-start lg:items-center mb-3 lg:mb-7 justify-items-start  lg:justify-between" >
        <h1 class="text-lg px-4 lg:px-0 lg:text-2xl font-bold text-heading  lg:inline-flex pb-1 capitalize" > mobile </h1> 
        <div class="sorting flex items-center" >
            <div class="search-count flex-shrink-0 font-normal lg:font-medium text-[10px] lg:text-sm text-gray-600 leading-4 md:me-6  lg:block mt-0.5 ml-4 lg:ml-8" style="" >
              76 Item Found
            </div> 
        
        </div></div>
        
        <div class="mylisting-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5" >
            <div  class="group box-border overflow-hidden flex px-2 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-t border-gray-200 nth-child-3n:border-right-0   relative">
                <div   class="relative w-full">
                    <a  href="#" target="_blank" class="block w-full">
                        <div  class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                            <img  src="https://dev.cdn.gintaa.com/offers/image/2022320/1W8IXqISDAgNAK7iK4Ivbe/thumbs/39HsM3Bf0bGVDyJBDX91IJ_acernathinandlightlaptoporiginalimafx3cqwwaev4hs_200x200.jpeg" alt="demo mobile for sale" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none"> 
                            </div> 
                        <div  class="product-title w-full overflow-hidden px-1">
                            <h2  class="text-heading font-medium truncate mb-1 text-sm text-gray-500">demo mobile for sale </h2>
                            <div  class="flex items-center mb-1 flex-col">
                                <div  class="w-full flex mb-1 items-center">
                                    <div  class="text-heading font-medium text-base text-gray-700 flex items-center relative ">
                                        <span  class="text-[18px] text-gray-600 mr-1 pl-[0px] font-bold flex items-center mlcoin">
                                            <img src="~assets/images/offer/coin-value.svg" alt="coin" class="mr-1 w-[18px] mlcoin">
                                        500</span>
                                    </div>
                                </div> 
                            </div> 
                            </div>
                            </a>  
                            </div>
                </div>
                            
            <div  class="group box-border overflow-hidden flex px-2 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-t border-gray-200 nth-child-3n:border-right-0   relative">
                <div   class="relative w-full">
                    <a  href="#" target="_blank" class="block w-full"><div  class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                        <img  src="https://dev.cdn.gintaa.com/offers/image/2022330/7O5wjW52Hqgtvx47x5yKlY/thumbs/3Drtml1Ot4tYKqMP2Uath6_scaled69e87181acd742d2b9f2f856ece2d40b1334405761019505686_200x200.jpg" alt="mobile phone with case" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none"> 
                        </div>
                         <div  class="product-title w-full overflow-hidden px-1">
                            <h2  class="text-heading font-medium truncate mb-1 text-sm text-gray-500">mobile phone with case</h2>
                         <div  class="flex items-center mb-1 flex-col">
                            <div  class="w-full flex mb-1 items-center">
                              <div  class="text-heading font-medium text-base text-gray-700 flex items-center relative ">
                                 <span  class="text-[18px] text-gray-600 mr-1 pl-[0px] font-bold flex items-center mlcoin">
                                    <img src="~assets/images/offer/coin-value.svg" alt="coin" class="mr-1 w-[18px] mlcoin">
                             12000</span>
                        </div>
                    </div> 
                             
                </div>
     </div></a> 
      </div>
      </div>


      <div  class="group box-border overflow-hidden flex px-2 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-t border-gray-200 nth-child-3n:border-right-0   relative">
        <div   class="relative w-full"><a  href="#" target="_blank" class="block w-full">
            <div  class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                <img  src="https://dev.cdn.gintaa.com/offers/image/2022329/6mdsek3moueF16S4t3rNRy/thumbs/3jVKHCqBwpTvyIbGZCYAvA_scaledc79e3bcfd83f48deba37b5870789db755524325214441297791_200x200.jpg" alt="Wooden mobile phone" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none"> 
                </div> 
                <div  class="product-title w-full overflow-hidden px-1">
                    <h2  class="text-heading font-medium truncate mb-1 text-sm text-gray-500">Wooden mobile phone </h2> 
                    <div  class="flex items-center mb-1 flex-col">
                        <div  class="w-full flex mb-1 items-center">
                            <div  class="text-heading font-medium text-base text-gray-700 flex items-center relative ">
                                <span  class="text-[18px] text-gray-600 mr-1 pl-[0px] font-bold flex items-center mlcoin">
                                 <img src="~assets/images/offer/coin-value.svg" alt="coin" class="mr-1 w-[18px] mlcoin">
                             250000</span>
                             </div>
                             </div> 
           </div> 
           </div>
           </a>  
           
           </div>
           </div>

           <div  class="group box-border overflow-hidden flex px-2 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-t border-gray-200 nth-child-3n:border-right-0   relative">
            <div   class="relative w-full"><a  href="#" target="_blank" class="block w-full">
                <div  class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                    <img  src="https://dev.cdn.gintaa.com/offers/image/2022311/C9zj8JqsJUi3dHejoOD0O/thumbs/6mY99gKwaEpYuZivM9yyx_mobile_200x200.jpg" alt="Mobile barter demo" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
                    </div> 
                    <div  class="product-title w-full overflow-hidden px-1">
                        <h2  class="text-heading font-medium truncate mb-1 text-sm text-gray-500">Mobile barter demo</h2>
                     <div  class="flex items-center mb-1 flex-col">
                        <div  class="w-full flex mb-1 items-center">
                            <div  class="text-heading font-medium text-base text-gray-700 flex items-center relative ">
                                <span  class="text-[18px] text-gray-600 mr-1 pl-[0px] font-bold flex items-center mlcoin">
                                    <img src="~assets/images/offer/coin-value.svg" class="mr-1 w-[18px] mlcoin">
                             100</span>
                             </div>
                             </div>
                        </div> 
                    </div>
                </a>
                
            </div>
        </div>

        <div  class="group box-border overflow-hidden flex px-2 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-t border-gray-200 nth-child-3n:border-right-0   relative">
            <div   class="relative w-full">
                <a  href="#" target="_blank" class="block w-full">
                    <div  class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                        <img  src="https://dev.cdn.gintaa.com/offers/image/2022325/1AZfSpj9CltVLms7SsrGqs/thumbs/2yb7dI1nfNQ08SPLOdMt7m_mobile2_200x200.jpg" alt="Mobile Phones new 1" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none"> 
                        </div>
                    <div  class="product-title w-full overflow-hidden px-1">
                        <h2  class="text-heading font-medium truncate mb-1 text-sm text-gray-500">Mobile Phones new 1 </h2>
                   <div  class="flex items-center mb-1 flex-col">
                    <div  class="w-full flex mb-1 items-center">
                        <div  class="text-heading font-medium text-base text-gray-700 flex items-center relative ">
                            <span  class="text-[18px] text-gray-600 mr-1 pl-[0px] font-bold flex items-center mlcoin">
                                <img src="~assets/images/offer/coin-value.svg" class="mr-1 w-[18px] mlcoin">
                             3000</span>
                        </div>
                    </div> 
                </div> 
            </div>
        </a> 
        </div>
        </div>


        <div  class="group box-border overflow-hidden flex px-2 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-t border-gray-200 nth-child-3n:border-right-0   relative">
            <div   class="relative w-full">
                <a  href="#" target="_blank" class="block w-full">
                    <div  class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                        <img  src="https://dev.cdn.gintaa.com/offers/image/2022316/2hqWjFUEJLkj6Z4gX0INWe/thumbs/90IYmkErRTu1fn8fROQBc_images_200x200.jpg" alt="Best camera mobile phone" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none"> 
                        </div> 
                        <div  class="product-title w-full overflow-hidden px-1">
                            <h2  class="text-heading font-medium truncate mb-1 text-sm text-gray-500">Best camera mobile phone</h2>
                         <div  class="flex items-center mb-1 flex-col">
                        <div  class="w-full flex mb-1 items-center">
                            <div  class="text-heading font-medium text-base text-gray-700 flex items-center relative ">
                                <span  class="text-[18px] text-gray-600 mr-1 pl-[0px] font-bold flex items-center mlcoin">
                                    <img src="~assets/images/offer/coin-value.svg" class="mr-1 w-[18px] mlcoin">
                             10000</span>
                            </div>
                        </div> 
                    </div>
                </div>
            </a>
            
        </div>
        </div>

        </div> 
        
        <div class="py-6 flex justify-center min-h-[400px]" style="display: none;" >
             <svg role="status" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-firoza" ><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path> <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg>
        </div>         
        
        <div class="text-center min-h-[400px]" style="display:none;" ><div class="flex w-full justify-center" >
                <img src="/_nuxt/img/notfound.7766fc0.svg" class="w-[245px]" >
            </div> 
        <div class="font-bold text-xl text-center pt-3 pb-4 text-gray-600" >
          Oops! No result found!!!
        </div> <p class="text-sm text-gray-600" >
           Sorry, We came up empty-handed. Please try another way!
          </p></div>
          
          </div>
        </div>
         </div>
      </main>
      <div class="md:hidden bg-white shadow-2xl fixed bottom-0 p-4 border-t z-50 w-full text-center text-[15px] font-medium text-gray-600 flex justify-center items-center"> <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="14px" viewBox="0 0 18 14" class="mr-3"><g id="Group_36196" data-name="Group 36196" transform="translate(-925 -1122.489)"><path id="Path_22590" data-name="Path 22590" d="M942.581,1295.564H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1295.564,942.581,1295.564Z" transform="translate(0 -169.575)" fill="currentColor"></path><path id="Path_22591" data-name="Path 22591" d="M942.581,1951.5H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1951.5,942.581,1951.5Z" transform="translate(0 -816.512)" fill="currentColor"></path><path id="Path_22593" data-name="Path 22593" d="M1163.713,1122.489a2.5,2.5,0,1,0,1.768.732A2.483,2.483,0,0,0,1163.713,1122.489Z" transform="translate(-233.213)" fill="currentColor"></path><path id="Path_22594" data-name="Path 22594" d="M2344.886,1779.157a2.5,2.5,0,1,0,.731,1.768A2.488,2.488,0,0,0,2344.886,1779.157Z" transform="translate(-1405.617 -646.936)" fill="currentColor"></path></g></svg>Filter</div>
      <!--footer section goes here-->
      <Footer/>
   </div>
</template>
<script lang="ts">
   import Vue from 'vue'
   
   export default Vue.extend({
     name: 'IndexPage',
     data() {
        return {
           showFilter:false,
           showMoretags:false
        }
     },
     
   })
</script>
<style scoped>
   .pe-24 {
   -webkit-padding-end: 6rem;
   padding-inline-end: 6rem;
   }
   .flex-shrink-0 {
   flex-shrink: 0;
   }
</style>