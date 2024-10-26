<template>
<div class="checkout-details-page pt-[80px] lg:pt-12 bg-gray-100">
    <!--//////////header///////////-->
    <Header/>
    <!--////////Breadcrumb//////////-->
    <div class="mx-auto max-w-[1920px] md:px-8 2xl:px-16 pt-10 hidden md:flex">
         <breadcrumb/>
    </div>
  <div class="container max-w-8xl mx-auto px-4 md:px-8 2xl:px-16 pt-5"> 
      <div class="flex flex-col gap-6 sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mb-5">           
           <div class="basis-full sm:basis-3/4 md:basis-3/5 lg:basis-3/5 xl:basis-3/4 2xl:basis-3/4">
                <div class="w-full relative rounded border-t-[3px] border-t-[#48cef3] px-6 py-4 bg-white">
                  <div class="bg-red-50 border-l-4 border-red-500 text-sm text-red-500 px-4 py-2 rounded absolute top-2 right-2">                  
                         <div>Something not ideal might be happening.</div>
                  </div>
                     <div class="w-full flex items-center">
                          <div class="text-gray-900 text-base mr-5 font-medium">Delivery address</div> 
                               <svg width="20" height="16" viewBox="0 0 22 16" fill="none" >
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1583 1.17508C21.6139 1.63069 21.6139 2.36939 21.1583 2.825L8.32496 15.6583C7.86935 16.1139 7.13065 16.1139 6.67504 15.6583L0.841709 9.825C0.386097 9.36939 0.386097 8.63069 0.841709 8.17508C1.29732 7.71947 2.03601 7.71947 2.49162 8.17508L7.5 13.1835L19.5084 1.17508C19.964 0.719471 20.7027 0.719471 21.1583 1.17508Z" fill="#48CEF3"/>
                        </svg>

                     </div> 

                     <div class="border-dashed border border-gray-300 flex justify-center items-center p-5 h-44 min-h-full my-6 w-[40%] hidden">
                                 <button type="submit" class="border border-firoza flex justify-center items-center bg-transparent px-4 py-2 h-8 rounded text-firoza font-normal text-sm">
                                <span>Add new address</span></button>
                            </div>

                     <div class="flex flex-col w-full mt-5 pr-0 sm:pr-0 md:pr-0 lg:pr-0 xl:pr-20 2xl:pr-20">
                          <div class="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
                               <div class="w-full border-dashed border border-gray-300 p-5 h-44 min-h-full">
                               <div class="flex items-center">
                                      <svg width="17" height="17" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6139 0.210648C10.2528 -0.0702159 9.74717 -0.0702159 9.38606 0.210648L0.386059 7.21065C0.142473 7.4001 0 7.69141 0 8V19C0 19.7957 0.31607 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H7H13H17C17.7957 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V8C20 7.69141 19.8575 7.4001 19.6139 7.21065L10.6139 0.210648ZM14 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V8.48908L10 2.26686L2 8.48908V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H6V11C6 10.4477 6.44772 10 7 10H13C13.5523 10 14 10.4477 14 11V20ZM8 20V12H12V20H8Z" fill="#8CAEC5"/>
                                        </svg>
                                        <!-- <svg width="16" height="22" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#8CAEC5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#8CAEC5"/>
                                        </svg> -->

                                        <!-- <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 4V0H0V18H20V4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM18 16H10V14H12V12H10V10H12V8H10V6H18V16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z" fill="#8CAEC5"/>
                                            </svg> -->


                                    <div for="comments" class="ml-3 text-sm text-gray-900">Home</div>
                                    <!-- <div for="comments" class="ml-3 text-sm text-gray-700">Work</div>  -->
                                    <!-- <div for="comments" class="ml-3 text-sm text-gray-700">Other</div>  -->
                               </div> 
                               <div class="text-gray-500 text-xs pl-8 mt-0.5"> Abhaya Das, <span>9038460981</span> </div>                             
                              <div class="text-gray-500 text-xs pl-8 mt-1"> Mumbai Central Railway Station Building, Mumbai Central... </div>
                              <div class="w-full flex justify-end mt-5">
                                  <button class="bg-green text-white py-2 px-6 rounded text-sm flex items-center justify-center"><span> Deliver here </span></button>
                            </div> 
                            </div>
                            <div class="w-full border-dashed border border-gray-300 p-5 h-44 min-h-full">
                               <div class="flex items-center">
                                      <!-- <svg width="17" height="17" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6139 0.210648C10.2528 -0.0702159 9.74717 -0.0702159 9.38606 0.210648L0.386059 7.21065C0.142473 7.4001 0 7.69141 0 8V19C0 19.7957 0.31607 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H7H13H17C17.7957 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V8C20 7.69141 19.8575 7.4001 19.6139 7.21065L10.6139 0.210648ZM14 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V8.48908L10 2.26686L2 8.48908V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H6V11C6 10.4477 6.44772 10 7 10H13C13.5523 10 14 10.4477 14 11V20ZM8 20V12H12V20H8Z" fill="#8CAEC5"/>
                                        </svg> -->
                                         <svg width="16" height="22" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#8CAEC5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#8CAEC5"/>
                                        </svg> 

                                        <!-- <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 4V0H0V18H20V4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM18 16H10V14H12V12H10V10H12V8H10V6H18V16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z" fill="#8CAEC5"/>
                                            </svg> -->


                                    <!-- <div for="comments" class="ml-3 text-sm text-gray-900">Home</div> -->
                                    <div for="comments" class="ml-3 text-sm text-gray-700">Work</div> 
                                    <!-- <div for="comments" class="ml-3 text-sm text-gray-700">Other</div>  -->
                               </div> 
                               <div class="text-gray-500 text-xs pl-8 mt-0.5"> Abhaya Das, <span>9038460981</span> </div>                             
                              <div class="text-gray-500 text-xs pl-8 mt-1"> Mumbai Central Railway Station Building, Mumbai Central... </div>
                               <div class="w-full flex justify-end mt-5">
                                  <button class="bg-green text-white py-2 px-6 rounded text-sm flex items-center justify-center"><span> Deliver here </span></button>
                            </div>
                            </div>

                            <div class="w-full border-dashed border border-gray-300 p-5 h-44 min-h-full">
                               <div class="flex items-center">
                                      <!-- <svg width="17" height="17" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6139 0.210648C10.2528 -0.0702159 9.74717 -0.0702159 9.38606 0.210648L0.386059 7.21065C0.142473 7.4001 0 7.69141 0 8V19C0 19.7957 0.31607 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H7H13H17C17.7957 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V8C20 7.69141 19.8575 7.4001 19.6139 7.21065L10.6139 0.210648ZM14 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V8.48908L10 2.26686L2 8.48908V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H6V11C6 10.4477 6.44772 10 7 10H13C13.5523 10 14 10.4477 14 11V20ZM8 20V12H12V20H8Z" fill="#8CAEC5"/>
                                        </svg> -->
                                        <!-- <svg width="16" height="22" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#8CAEC5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#8CAEC5"/>
                                        </svg> -->

                                        <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 4V0H0V18H20V4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM18 16H10V14H12V12H10V10H12V8H10V6H18V16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z" fill="#8CAEC5"/>
                                            </svg>


                                    <!-- <div for="comments" class="ml-3 text-sm text-gray-900">Home</div> -->
                                    <!-- <div for="comments" class="ml-3 text-sm text-gray-700">Work</div>  -->
                                    <div for="comments" class="ml-3 text-sm text-gray-700">Other</div> 
                               </div> 
                               <div class="text-gray-500 text-xs pl-8 mt-0.5"> Abhaya Das, <span>9038460981</span> </div>                             
                              <div class="text-gray-500 text-xs pl-8 mt-1"> Mumbai Central Railway Station Building, Mumbai Central... </div>
                               <div class="w-full flex justify-end mt-5">
                                  <button class="bg-green text-white py-2 px-6 rounded text-sm flex items-center justify-center"><span> Deliver here </span></button>
                            </div>
                            </div>

                            <div class="w-full border-dashed border border-gray-300 flex justify-center items-center p-5 h-44 min-h-full">
                                 <button type="submit" class="border border-firoza flex justify-center items-center bg-transparent px-4 py-2 h-8 rounded text-firoza font-normal text-sm">
                                <span>Add new address</span></button>
                            </div>

                          </div>
                     </div>            
                     <div class="w-full flex justify-between mt-5">
                          <div class="w-8/12">
                               <div class="w-full">
                               <div class="flex items-center">
                                      <svg width="17" height="17" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6139 0.210648C10.2528 -0.0702159 9.74717 -0.0702159 9.38606 0.210648L0.386059 7.21065C0.142473 7.4001 0 7.69141 0 8V19C0 19.7957 0.31607 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H7H13H17C17.7957 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V8C20 7.69141 19.8575 7.4001 19.6139 7.21065L10.6139 0.210648ZM14 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V8.48908L10 2.26686L2 8.48908V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H6V11C6 10.4477 6.44772 10 7 10H13C13.5523 10 14 10.4477 14 11V20ZM8 20V12H12V20H8Z" fill="#8CAEC5"/>
                                        </svg>
                                        <!-- <svg width="16" height="22" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#8CAEC5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#8CAEC5"/>
                                        </svg> -->

                                        <!-- <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 4V0H0V18H20V4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM18 16H10V14H12V12H10V10H12V8H10V6H18V16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z" fill="#8CAEC5"/>
                                            </svg> -->


                                    <div for="comments" class="ml-3 text-sm text-gray-900">Home</div>
                                    <!-- <div for="comments" class="ml-3 text-sm text-gray-700">Work</div>  -->
                                    <!-- <div for="comments" class="ml-3 text-sm text-gray-700">Other</div>  -->
                               </div> 
                               <div class="text-gray-500 text-xs pl-8 mt-0.5"> Abhaya Das, <span>9038460981</span> </div>                             
                              <div class="text-gray-500 text-xs pl-8 mt-1"> Mumbai Central Railway Station Building, Mumbai Central... </div>
                            </div> 
                          </div>
                            <div class="w-4/12 flex justify-end">
                                  <button type="submit" class="border border-firoza flex justify-center items-center bg-transparent px-4 py-2 h-8 rounded text-firoza font-normal text-sm">
                                <span>Change </span></button>
                            </div>
                     </div> 



                </div> 

                <!-- <div class="w-full rounded py-4 bg-white mt-5 border-dashed border-b border-gray-200">
                  <div class="flex items-center justify-between px-6">
                                   <div class="flex items-start">
                                    <div class="h-5 flex items-center">
                                      <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                    </div>
                                    <div class="ml-3 text-sm">
                                      <label for="comments" class="text-base font-medium text-[#48CEF3]">Pay Using gintaa coins</label>                  
                                    </div>
                                  </div>
                                  <div class="flex items-center justify-between ">
                                    <div class="text-sm text-gray-900">Available Balance</div> 
                                  <div class="flex items-center text-base text-gray-900 ml-10">
                                    <img alt="coin" src="~/assets/images/coin.svg" class="w-[18px] h-[18px]">
                                    <span class="pl-2">320</span>
                                  </div>
                                </div>
                                </div> 
                </div> -->

                <div class="w-full rounded py-4 bg-white mt-5 relative">
                     <div class="w-full flex flex-col px-6">
                          <div class="text-gray-900 text-base mr-5 font-medium">Review order & payments</div>                              
                     </div> 
                     <div class="mt-5 px-6 pb-4 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-12 border-b border-gray-200">
                          <div class="col-span-full sm:col-span-full md:col-span-full lg:col-span-7 xl:col-span-7 2xl:col-span-7">
                              

                            <div class="flex">
                              <div class="w-28 h-28 p-1 bg-white shadow cursor-pointer flex items-center justify-center">
                                   <img src="https://cdn.gintaa.com/offers/image/20230409/E3tPYV7BLoijSFRaGQ2CT/thumbs/4b8JF3yi7v0d0WWfZ6Ds4S_imagecropper1681069705280_200x200.jpg" alt="image" class="max-w-full max-h-28 mx-auto">
                              </div>
                          <div class="ml-4 flex-auto">
                            <div class="text-heading font-medium mb-2 text-base text-gray-600 cursor-pointer">B11 Bluetooth Headset</div>
                            <div class="text-heading font-medium text-base text-gray-700 flex items-center relative mb-1"><span class="text-sm text-gray-500 font-normal">Condition</span> <span class="mr-2 pl-2">:</span> <span class="text-sm text-gray-500 font-normal flex items-center">New</span></div>
                            <div  class="w-full flex mb-3 items-center">
                              <div class="flex items-center text-base text-gray-900 font-medium mr-4">
                                         <svg width="10" height="12" viewBox="0 0 12 21" fill="none" class="mr-[3px]"><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"></path></svg> 
                                         <span class="pl-0.5">1000</span>
                                    </div> 
                                     
                              <div class="flex items-center">
                                   <svg  width="10" height="12" viewBox="0 0 11 18" fill="none" class="mr-[3px]"><path  opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                                   <span  class="items-center text-base font-normal text-gray-500 relative flex after:left-0 after:absolute after:w-[100%] after:h-[1px] after:bg-gray-500 after:top-[11px] ">2000</span> 
                              </div> 
                              <div class="text-base text-gray-900 font-medium pl-5">(50% Off)</div>                            
                              
                           </div>
                           
                                    
                          </div>
                        </div>

                            <div class="w-full flex items-center justify-start mt-4 ml-2">
                            <div class="flex items-center justify-center border w-24 border-gray-300 rounded">
                                <button class="text-gray-600 font-medium text-xsb px-2 py-0.5">
                                        <svg class="h-6 w-6" x-show="open" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                                          </svg>
                                </button>
                                <span class="m-1 text-firoza text-sm" x-text="count">1</span>
                                <button class="text-firoza font-medium text-xsb px-2 py-0.5 cursor-not-allowed disabled">
                                         <svg class="h-6 w-6" x-show="!(open)" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                          <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                                        </svg>
                                </button>
                            </div>
                            <a href="#" class="text-gray-700 text-sm font-medium uppercase ml-5 cursor-pointer">remove</a> 
                           </div> 

                          </div>
                          <div class="col-span-full sm:col-span-full md:col-span-full lg:col-span-5 xl:col-span-5 2xl:col-span-5">
                                <div class="mt-6">
                                     <div class="flex items-center justify-end mb-4">
                                           <div class="h-2 w-10 bg-slate-200 rounded shimmerBG"></div>
                                      </div>
                                      <div class="flex items-center justify-end">
                                        <div class="flex items-center justify-between ">
                                        <div class="h-2 w-32 bg-slate-200 rounded shimmerBG"></div>                            
                                        <div class="h-2 w-8 bg-slate-200 rounded shimmerBG ml-10"></div>
                                        </div>
                                      </div>
                                </div>
                                <div class="mt-6">
                                <div class="flex items-center justify-end mb-4">                                  
                                  <div class="flex items-center text-sm text-gray-900 font-medium">
                                       <svg width="10" height="10" viewBox="0 0 12 21" fill="none" >
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                        </svg>
                                      <span class="pl-0.5">1000</span>
                                   
                                  </div>
                                </div>
                                <div class="flex items-center justify-end">
                                  <div class="flex items-center text-sm text-gray-500 mr-5">
                                    <span>Delivery within 5-7 days -</span>                                    
                                  </div>
                                  <div class="flex items-center text-sm text-gray-900 font-medium">
                                       <svg width="10" height="10" viewBox="0 0 12 21" fill="none" >
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                        </svg>
                                      <span class="pl-0.5">12</span>
                                   
                                  </div>
                                </div>
                                
                                
                              </div>
                          </div>
                     </div>

                     <div class="w-full flex justify-end px-6">
                          <div class="flex items-center justify-between mt-5">
                              <div class="flex items-center justify-between ">
                              <div class="h-2 w-32 bg-slate-200 rounded shimmerBG"></div>                            
                              <div class="h-2 w-10 bg-slate-200 rounded shimmerBG ml-10"></div>
                              </div>
                          </div>
                          <div class="flex items-center justify-between mt-5">
                                  <div class="text-sm text-gray-900 font-medium mr-10 sm:mr-20 md:mr-20 lg:mr-20 xl:mr-20 2xl:mr-20">
                                    Total payble amount
                                  </div>
                                  
                                  <div class="flex items-center text-base text-gray-900 font-medium">
                                       <svg width="12" height="12" viewBox="0 0 12 21" fill="none" >
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                        </svg>
                                      <span class="pl-0.5">1012</span>                                   
                                  </div>
                                 
                         </div> 
                     </div> 

                     <div class="w-full flex justify-end mt-10 px-6">
                          <router-link to="/cart/payment-successful">
                          <button class="bg-green text-white py-2 px-8 rounded font-medium text-base flex items-center justify-center"><span> Pay now </span></button>
                          </router-link>
                     </div>   
                     <div class="bg-red-50 border-l-4 border-red-500 text-sm text-red-500 px-4 py-2 rounded absolute bottom-6 left-6">                  
                         <div>Something not ideal might be happening.</div>
                  </div>
                </div>  
           </div>
           <div class="basis-full sm:basis-1/4 md:basis-2/5 lg:basis-2/5 xl:basis-1/4 2xl:basis-1/4">
                <div class="w-full rounded border-t-[3px] border-t-[#48cef3] px-4 py-4 bg-white" >
                             <div class="w-full">
                              <h2 class="text-base text-gray-900 font-medium">Price details</h2>

                              <div class="mt-6">
                                    <div class="flex items-center justify-between mb-3">
                                      <div class="h-2 w-28 bg-slate-200 rounded shimmerBG"></div>                            
                                      <div class="h-2 w-12 bg-slate-200 rounded shimmerBG ml-2"></div>
                                   </div>
                                   <div class="flex items-center justify-between mb-3">
                                      <div class="h-2 w-32 bg-slate-200 rounded shimmerBG"></div>                            
                                      <div class="h-2 w-10 bg-slate-200 rounded shimmerBG ml-2"></div>
                                   </div>
                                   <div class="flex items-center justify-between mb-3">
                                      <div class="h-2 w-28 bg-slate-200 rounded shimmerBG"></div>                            
                                      <div class="h-2 w-10 bg-slate-200 rounded shimmerBG ml-2"></div>
                                   </div>
                                   <div class="border-dashed border-t border-gray-200 pt-4 mt-5">
                                    <div class="flex items-center justify-between">
                                      <div class="h-2 w-32 bg-slate-200 rounded shimmerBG"></div>                            
                                      <div class="h-2 w-10 bg-slate-200 rounded shimmerBG ml-2"></div>
                                   </div> 
                                   </div>
                                   <div class="border-dashed border-t border-gray-200 pt-4 mt-5">
                                    <div class="flex items-center justify-between">
                                      <div class="h-2 w-12 bg-slate-200 rounded shimmerBG"></div>                            
                                      <div class="h-2 w-10 bg-slate-200 rounded shimmerBG ml-2"></div>
                                      <div class="h-2 w-14 bg-slate-200 rounded shimmerBG ml-2"></div>
                                      <div class="h-2 w-8 bg-slate-200 rounded shimmerBG ml-2"></div>
                                   </div> 
                                   </div>
                              </div>

                              <div class="mt-6">
                                <div class="flex items-center justify-between mb-3">
                                  <div class="text-sm text-gray-500">
                                    Price  (1  Item)
                                  </div>
                                  <div class="flex items-center text-sm text-gray-900 font-medium">
                                       <svg width="10" height="11" viewBox="0 0 12 21" fill="none" >
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                        </svg>
                                      <span class="pl-0.5">2000</span>
                                   
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
                                      <span class="pl-0.5 text-[#01A411]">1000</span>
                                   
                                  </div>
                                </div>

                                <!-- <div class="flex items-center justify-between mb-3">
                                  <div class="flex items-center text-sm text-gray-500">
                                    <span class="pr-1">Savings Using gintaa coins</span> 
                                    <img alt="coin" src="~/assets/images/coin.svg" class="w-[18px] h-[18px]">                                   
                                  </div>
                                  <div class="flex items-center text-sm text-[#01A411] font-medium">  
                                      <span class="mr-2">-</span>
                                      <span class="pl-0.5">320</span>
                                   
                                  </div>
                                </div> -->


                                <div class="flex items-center justify-between mb-3">
                                  <div class="flex items-center text-sm text-gray-500">
                                    <span class="pr-1">Delivery Charges </span>                                 
                                  </div>
                                  <div class="flex items-center text-sm text-gray-900 font-medium">                                       
                                       <svg width="10" height="11" viewBox="0 0 14 25" fill="none" >
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#01A411"/>
                                      </svg>
                                      <span class="pl-0.5 text-[#01A411]">12</span>
                                   
                                  </div>
                                  <!-- <div class="flex items-center text-sm text-[#01A411] font-medium">                                      
                                      <span class="pl-0.5">Free</span>                                   
                                  </div> -->
                                </div>

                                <!-- <div class="flex items-center justify-between mb-3">
                                   <div class="flex items-start">
                                    <div class="h-5 flex items-center">
                                      <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                    </div>
                                    <div class="ml-3 text-sm">
                                      <label for="comments" class="text-sm text-gray-500">Insurance charges</label>                  
                                    </div>
                                  </div>
                                  <div class="flex items-center text-sm text-gray-900 font-medium">
                                      
                                       <svg width="12" height="12" viewBox="0 0 12 21" fill="none" >
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                        </svg>
                                      <span class="pl-0.5">12.00</span>
                                   
                                  </div>
                                </div> -->


                                
                                <div class="border-dashed border-t border-gray-200 pt-4 flex items-center justify-between mt-5">
                                  <div class="text-sm text-gray-900 font-medium">
                                    Total payable Amount
                                  </div>
                                  <div class="flex items-center text-base text-gray-900 font-medium">
                                    <svg width="12" height="12" viewBox="0 0 12 21" fill="none" >
                                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="black"/>
                                        </svg>
                                      <span class="pl-0.5">1012</span>                                   
                                  </div>
                                </div>

                                <div class="border-dashed border-t border-gray-200 pt-4 flex items-center justify-between mt-5">
                                  <div class="text-sm text-[#48CEF3] font-medium w-full flex items-center">
                                      <span>You will save </span> 
                                    <div class="flex items-center px-1">
                                      <svg width="10" height="11" viewBox="0 0 14 25" fill="none" >
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="#48CEF3"/>
                                      </svg>
                                      <span class="">1000</span>
                                    </div>
                                    <span>on this order</span>
                                  </div>
                                  
                                </div>

                                  


                              </div>

                              
                            </div>                               
                                
                            </div> 

               <!-- <div class="w-full rounded border-t-[3px] border-t-[#48cef3] px-4 py-4 bg-white mt-5">
                   <div class="w-full flex items-center">
                    <div class="flex-shrink-0">
                      <div class="bg-[#EE2A7B] flex items-center justify-center rounded-full w-12 h-12">
                            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.375 2.75C7.87772 2.75 7.40081 2.94754 7.04918 3.29918C6.69754 3.65081 6.5 4.12772 6.5 4.625C6.5 5.12228 6.69754 5.5992 7.04918 5.95083C7.40081 6.30246 7.87772 6.5 8.375 6.5H12.3175C12.1649 6.10077 11.9718 5.66177 11.7329 5.2274C10.9466 3.79793 9.86738 2.75 8.375 2.75ZM4 4.625C4 5.2798 4.14679 5.91947 4.42215 6.5H1.5C0.809644 6.5 0.25 7.05964 0.25 7.75V14C0.25 14.6904 0.809644 15.25 1.5 15.25H2.75V26.5C2.75 27.1904 3.30964 27.75 4 27.75H14H24C24.6904 27.75 25.25 27.1904 25.25 26.5V15.25H26.5C27.1904 15.25 27.75 14.6904 27.75 14V7.75C27.75 7.05964 27.1904 6.5 26.5 6.5H23.5779C23.8532 5.91947 24 5.2798 24 4.625C24 3.46468 23.5391 2.35188 22.7186 1.53141C21.8981 0.710936 20.7853 0.25 19.625 0.25C16.7424 0.25 15.0092 2.32707 14.0766 4.0226C14.0506 4.06987 14.0251 4.11711 14 4.16428C13.9749 4.11711 13.9494 4.06987 13.9234 4.0226C12.9909 2.32707 11.2576 0.25 8.375 0.25C7.21468 0.25 6.10188 0.710936 5.28141 1.53141C4.46094 2.35188 4 3.46468 4 4.625ZM15.6825 6.5H19.625C20.1223 6.5 20.5992 6.30246 20.9508 5.95083C21.3025 5.5992 21.5 5.12228 21.5 4.625C21.5 4.12772 21.3025 3.65081 20.9508 3.29918C20.5992 2.94754 20.1223 2.75 19.625 2.75C18.1326 2.75 17.0534 3.79793 16.2672 5.2274C16.0283 5.66177 15.8351 6.10077 15.6825 6.5ZM15.25 9V12.75H24H25.25V9H19.625H15.25ZM8.375 9H12.75V12.75H4H2.75V9H8.375ZM15.25 25.25H22.75V15.25H15.25V25.25ZM12.75 15.25V25.25H5.25V15.25H12.75Z" fill="white"/>
                            </svg>
                      </div>
                    </div>
                    <div class="ml-3">
                      <div class="text-sm text-gray-900">For Every order ,</div>
                      <div class="text-sm text-gray-900 flex items-center mt-0.5">
                        <span>You earn</span> 
                        <img alt="coin" src="~/assets/images/coin.svg" class="w-[18px] h-[18px] mx-2">
                        <span>gintaa coins</span>
                         </div>
                    </div>
                   </div>                    
              </div> -->
              
              
              <div class="w-full rounded border-t-[3px] border-t-[#48cef3] px-4 py-4 bg-white mt-5">
                   <div class="w-full flex items-center">
                        <svg width="30" height="30" viewBox="0 0 39 39" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9294 1.72847C19.2973 1.59051 19.7027 1.59051 20.0706 1.72847L33.0706 6.60347C33.7048 6.84131 34.125 7.44763 34.125 8.125V19.5C34.125 25.1005 30.4172 29.5755 27.0701 32.5042C25.3624 33.9984 23.6624 35.1664 22.3925 35.96C21.7559 36.3579 21.223 36.6644 20.8456 36.8734C20.6568 36.9779 20.5066 37.0582 20.4014 37.1134C20.3487 37.141 20.3073 37.1624 20.278 37.1774L20.243 37.1952L20.2325 37.2005L20.229 37.2023C20.2285 37.2026 20.2267 37.2034 19.5 35.75C18.7733 37.2034 18.7728 37.2032 18.7723 37.2029L18.7675 37.2005L18.757 37.1952L18.722 37.1774C18.6927 37.1624 18.6513 37.141 18.5986 37.1134C18.4934 37.0582 18.3432 36.9779 18.1544 36.8734C17.777 36.6644 17.2441 36.3579 16.6075 35.96C15.3376 35.1664 13.6376 33.9984 11.9299 32.5042C8.58284 29.5755 4.875 25.1005 4.875 19.5V8.125C4.875 7.44763 5.29518 6.84131 5.92942 6.60347L18.9294 1.72847ZM19.5 35.75L18.7723 37.2029C19.2298 37.4317 19.7692 37.4322 20.2267 37.2034L19.5 35.75ZM19.5 33.902C19.8114 33.7255 20.2096 33.4918 20.67 33.204C21.8376 32.4743 23.3876 31.4078 24.9299 30.0583C28.0828 27.2995 30.875 23.6495 30.875 19.5V9.25113L19.5 4.9855L8.125 9.25113V19.5C8.125 23.6495 10.9172 27.2995 14.0701 30.0583C15.6124 31.4078 17.1624 32.4743 18.33 33.204C18.7904 33.4918 19.1886 33.7255 19.5 33.902Z" fill="#8BC63E"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.851 15.101C12.4856 14.4663 13.5144 14.4663 14.149 15.101L19.5 20.4519L24.851 15.101C25.4856 14.4663 26.5144 14.4663 27.149 15.101C27.7837 15.7356 27.7837 16.7644 27.149 17.399L20.649 23.899C20.0144 24.5337 18.9856 24.5337 18.351 23.899L11.851 17.399C11.2163 16.7644 11.2163 15.7356 11.851 15.101Z" fill="#8BC63E"/>
                        </svg>
                        <div class="text-base text-gray-900 ml-5">100% Safe & Secure</div>
                   </div> 
                   <div class="w-full text-xs text-gray-700 mt-5">
                         100% Payment Protection. Return or Replacement is applicable for 7 days after delivery
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
  name: 'CheckoutPage',
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

