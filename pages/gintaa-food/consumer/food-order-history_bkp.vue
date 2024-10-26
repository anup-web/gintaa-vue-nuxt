<template>
  <div class="payment-success-page pt-[80px] lg:pt-12 bg-[#F1F3F6]">
      <!--//////////header///////////-->
      <GintaaFoodConsumerHeader/>
      <!--////////Breadcrumb//////////-->
      <div class="mx-auto max-w-[1920px] md:px-8 2xl:px-16 pt-10 hidden md:flex">
           <breadcrumb/>
      </div>
    <div class="container max-w-6xl mx-auto px-4 md:px-8 2xl:px-16 pt-5"> 
      
       <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row mb-10">           
             <div class="w-full bg-white px-4 pt-4">
                   <div class="w-full text-left text-base text-gray-700 font-medium mb-4">Order History</div>
               <div class="mb-4 flex justify-between border border-gray-200 px-8 py-6">
                  
                    <div  class="flex sm:flex md:block lg:flex">
                              <div  class="flex-shrink-0">
                                   <div class="overflow-hidden w-[136px] h-[107px]">
                                   <img  src="~/assets/images/food/consumer/res-img.png" alt="icon" class="object-cover  max-h-[100%] max-w-[100%]"> 
                                   </div>
                              </div> 
                              <div  class="ml-4 mt-0 flex flex-1 flex-col sm:ml-4 sm:mt-0 md:ml-0 md:mt-4 lg:ml-4 lg:mt-0">
                                   <div  class="text-left text-base font-medium text-gray-700">Aahare Bengali</div> 
                                   <div  class="text-left text-sm text-gray-700 mt-1">Sector 5, Salt Lake, Kolkata</div>
                                   <div  class="text-left text-sm text-gray-700 mt-1">ORDER # 134567892</div>
                                   <div  class="text-left text-sm text-gray-700 mt-1">Wed, Feb 15, 2023, 11:20 AM</div>
                                   <a href="#" class="text-left text-sm text-green mt-1">View Details</a>
                              </div>
                         </div>
                    
                  
               
                 
                       <div class="flex flex-col">
                       <div class="flex flex-col">
                         <div  class="text-left text-sm text-gray-700">Jeera Rice  X 1</div>
                         <div  class="text-left text-sm text-gray-700 mt-1.5">Mochar Paturi   X 1</div>
                         <div  class="text-left text-sm text-gray-700 mt-1.5">Pomfret Curry   X 1</div>
                         <div  class="text-left text-sm text-gray-700 mt-2 flex items-center">
                              <span>Total Paid : </span>
                              <div class="flex items-center text-base text-gray-900 font-medium ml-2"><svg width="12" height="12" viewBox="0 0 14 25" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="black"></path></svg> <span class="pl-0.5 text-gray-900">200</span></div>
                         </div>
                         <div class="mt-4 flex items-center">
                              <button type="submit" class="w-28 border border-firoza flex justify-center items-center bg-firoza px-4 py-2 h-[30px] text-white font-normal text-sm"><span>Reorder</span></button>
                              <button type="submit" class="w-28 border border-firoza flex justify-center items-center bg-transparent px-4 py-2 h-[30px] text-firoza font-normal text-sm ml-4"><span>Rate Order</span></button>
                         </div>
                       </div> 
                       </div> 
                 
  
                  
                    <div class="flex flex-col">
                     <div>    
                    <div class="flex w-[200px]">
                    <div class="flex-shrink-0">
                         <div class="w-4 h-4 rounded-full bg-green flex items-center justify-center mt-0.5"><svg width="8" height="6" viewBox="0 0 22 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.1583 1.17508C21.6139 1.63069 21.6139 2.36939 21.1583 2.825L8.32496 15.6583C7.86935 16.1139 7.13065 16.1139 6.67504 15.6583L0.841709 9.825C0.386097 9.36939 0.386097 8.63069 0.841709 8.17508C1.29732 7.71947 2.03601 7.71947 2.49162 8.17508L7.5 13.1835L19.5084 1.17508C19.964 0.719471 20.7027 0.719471 21.1583 1.17508Z" fill="#ffffff"></path></svg>
                    </div>
                    </div>
                    <div class="ml-2">
                         <div class="text-gray-900 text-sm ">Delivered on Wed, Feb 15, 2023, 11:50 AM</div>                         
                    </div>
                    </div>
                    <!-- <div class="flex items-center mt-10">
                          <div class="text-gray-900 text-sm mr-2 mt-1">Your Rating :</div>
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
                    </div> -->
                    </div>

                    </div> 
                  
  
                  </div>

                  <div class="mb-4 flex justify-between border border-gray-200 px-8 py-6">
                  
                  <div  class="flex sm:flex md:block lg:flex">
                            <div  class="flex-shrink-0">
                                 <div class="overflow-hidden w-[136px] h-[107px]">
                                 <img  src="~/assets/images/food/consumer/res-img.png" alt="icon" class="object-cover  max-h-[100%] max-w-[100%]"> 
                                 </div>
                            </div> 
                            <div  class="ml-4 mt-0 flex flex-1 flex-col sm:ml-4 sm:mt-0 md:ml-0 md:mt-4 lg:ml-4 lg:mt-0">
                                 <div  class="text-left text-base font-medium text-gray-700">Aahare Bengali</div> 
                                 <div  class="text-left text-sm text-gray-700 mt-1">Sector 5, Salt Lake, Kolkata</div>
                                 <div  class="text-left text-sm text-gray-700 mt-1">ORDER # 134567892</div>
                                 <div  class="text-left text-sm text-gray-700 mt-1">Wed, Feb 15, 2023, 11:20 AM</div>
                                 <a href="#" class="text-left text-sm text-green mt-1">View Details</a>
                            </div>
                       </div>
                  
                
             
               
                     <div class="flex flex-col">
                     <div class="flex flex-col">
                       <div  class="text-left text-sm text-gray-700">Jeera Rice  X 1</div>
                       <div  class="text-left text-sm text-gray-700 mt-1.5">Mochar Paturi   X 1</div>
                       <div  class="text-left text-sm text-gray-700 mt-1.5">Pomfret Curry   X 1</div>
                       <div  class="text-left text-sm text-gray-700 mt-2 flex items-center">
                            <span>Total Paid : </span>
                            <div class="flex items-center text-base text-gray-900 font-medium ml-2"><svg width="12" height="12" viewBox="0 0 14 25" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.00005V1C0 0.447716 0.447715 5.48196e-07 1 5.24076e-07L13 0C13.5523 -2.41198e-08 14 0.447715 14 1V1.09965C14 1.65194 13.5523 2.09965 13 2.09965L9.89734 2.09965C10.8693 3.08702 11.5396 4.35878 11.7638 5.77412H13C13.5523 5.77412 14 6.22184 14 6.77412V6.87378C14 7.42606 13.5523 7.87378 13 7.87378H11.7638C11.2458 11.1441 8.34591 13.6478 4.84615 13.6478H3.04603L11.8509 22.2311C12.2464 22.6167 12.2464 23.2417 11.8509 23.6272L11.76 23.7158C11.3646 24.1013 10.7234 24.1013 10.3279 23.7158L0 13.6478V13.6478V12.5481C0 11.9959 0.447714 11.5481 0.999999 11.5481H4.84615C7.15247 11.5481 9.0825 9.9776 9.57222 7.87378L1 7.87378C0.447716 7.87378 0 7.42606 0 6.87378V6.77412C0 6.22184 0.447715 5.77412 1 5.77412L9.57223 5.77412C9.08253 3.67027 7.15249 2.0997 4.84615 2.0997H1C0.447715 2.0997 0 1.65199 0 1.0997V1.09965V1.00005Z" fill="black"></path></svg> <span class="pl-0.5 text-gray-900">200</span></div>
                       </div>
                       <div class="mt-4 flex items-center">
                            <button type="submit" class="w-28 border border-firoza flex justify-center items-center bg-firoza px-4 py-2 h-[30px] text-white font-normal text-sm"><span>Reorder</span></button>
                            <button type="submit" class="w-28 border border-firoza flex justify-center items-center bg-transparent px-4 py-2 h-[30px] text-firoza font-normal text-sm ml-4"><span>Rate Order</span></button>
                       </div>
                     </div> 
                     </div> 
               

                
                  <div class="flex flex-col">
                   <div>    
                  <div class="flex w-[200px]">
                  <div class="flex-shrink-0">
                       <div class="w-4 h-4 rounded-full bg-green flex items-center justify-center mt-0.5"><svg width="8" height="6" viewBox="0 0 22 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.1583 1.17508C21.6139 1.63069 21.6139 2.36939 21.1583 2.825L8.32496 15.6583C7.86935 16.1139 7.13065 16.1139 6.67504 15.6583L0.841709 9.825C0.386097 9.36939 0.386097 8.63069 0.841709 8.17508C1.29732 7.71947 2.03601 7.71947 2.49162 8.17508L7.5 13.1835L19.5084 1.17508C19.964 0.719471 20.7027 0.719471 21.1583 1.17508Z" fill="#ffffff"></path></svg>
                  </div>
                  </div>
                  <div class="ml-2">
                       <div class="text-gray-900 text-sm ">Delivered on Wed, Feb 15, 2023, 11:50 AM</div>                         
                  </div>
                  </div>
                  <!-- <div class="flex items-center mt-10">
                        <div class="text-gray-900 text-sm mr-2 mt-1">Your Rating :</div>
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
                  </div> -->
                  </div>

                  </div> 
                

                </div>
                

             </div>
  
        </div>
  
  
    </div>
    <!--footer section goes here-->
    <GintaaFoodConsumerFooter/>


        <!-- start Order rating  modal  -->
   <div class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
 <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

 <div class="fixed inset-0 z-50 overflow-y-auto">
   <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
     
     <div class="relative transform overflow-hidden rounded-lg bg-white px-0 pt-2 pb-4 text-left shadow-xl transition-all sm:my-4 sm:w-full sm:max-w-sm ">
               
       <div class="w-full">
            <div class="flex items-center justify-between border-b-2 border-gray-200 px-4 pb-2">
               <div class="text-base text-gray-900">Rating</div>
               <div class="absolute top-0 right-0 pt-2 pr-2 block">
                   <button type="button" class="rounded-md bg-white text-gray-400 ">
                       <span class="sr-only">Close</span>
                       
                       <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                       </svg>
                   </button>
                   </div>
            </div>
            
           <div class="w-full flex items-center justify-center mt-6">
               <img src="~/assets/images/food/rating-image.svg" alt="icon" class="w-[105px] h-[94px]"/> 
           </div>
           
           <div class="w-full flex items-center justify-center mt-2">
               <div class="text-firoza text-base font-medium">Loved it</div>
           </div>

           <div class="w-full flex items-center justify-center">
               <div class="text-gray-700 text-xs">Rate your restaurant</div>
           </div>

           <div class="w-full flex items-center justify-center mt-3">
               <div class="flex items-center">
                                  <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#FFB801"/>
                                  </svg>
                                  <svg class="flex-shrink-0 w-5 h-5 text-gray-900" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z" fill="#DADADA"/>
                                  </svg>
                              </div>
           </div>

           <div class="w-full flex items-center justify-center mt-3">
               <div class="text-[#127D00] text-sm font-medium">Very Good</div>
           </div>

           <div class="w-full flex items-center justify-center mt-3">
                <div class="rounded-md px-4 py-4 shadow-md w-[340px]">
                    <div class="text-gray-900 text-sm ">Tell us what you liked</div>
                    <div class="flex mt-2">
                    <div>
                    <div class="form-check">
                         <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green checked:border-green focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
                         <label class="form-check-label inline-block text-gray-500 font-normal text-sm" for="flexCheckDefault">
                              Chili Chicken
                         </label>
                    </div>
                    <div class="form-check">
                         <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green checked:border-green focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
                         <label class="form-check-label inline-block text-gray-500 font-normal text-sm" for="flexCheckChecked">
                              Chicken Biryani with Egg
                         </label>
                    </div>
                    </div>
                    </div>
                    <div class="flex justify-center mt-2">
                        <div class="mb-3 w-full">
                               <label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700 text-sm">Comment</label>
                              <textarea class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 text-xs
                                   bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out
                                   m-0 focus:text-gray-700 focus:bg-white focus:border-firoza focus:outline-none"
                                   id="exampleFormControlTextarea1" rows="3" placeholder="Leave your comment here (Optional)">
                              </textarea>
                         </div>
                      </div>

                      <button class="bg-firoza text-white w-full py-2 px-4 rounded text-base flex items-center justify-center"><span> Submit </span></button>
                </div>
           </div>
            
       </div>
       
     </div>
   </div>
 </div>
</div>
<!-- end  Order rating  modal  -->
  </div> 
  </template>
  
  
  
  
  
  
  
  <script lang="ts">
  
  import Vue from 'vue'
  
  
  export default Vue.extend({     
    name: 'foodOrderHistory',
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
  
  