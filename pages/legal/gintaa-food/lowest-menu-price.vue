<template>
    <div>   
       <!--//////////header///////////-->
       <!-- <GintaaFoodConsumerHeader  v-if="isFromWeb()"/> -->
       <!--////////Breadcrumb//////////-->
       <div v-if="isFromWeb()" class="bg-white fixed w-full z-50 top-0 shadow-md py-4">
                <div class="flex items-center justify-center">
                     <img src="~/assets/images/food/food-logo.svg" alt="gintaa food" class="w-[130px] h-auto">
                 </div>
           </div>
       <section 
            :class="isFromWeb()? 'pt-[85px]' : 'pt-[1px]'"
            class="bg-gray-100 min-h-[500px] sm:pt-[85px] md:pt-[85px] lg:pt-[50px]">
            <div class="w-full">
                <div class="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
                    <div class="w-full mx-auto container px-0 lg:px-6 py-4">
                        <div class="w-full mt-0 lg:mt-8">
                            <h1 class="text-lg md:text-xl lg:text-[35px] text-gray-900 font-semibold mb-4 lg:mb-8 text-center">Lowest Food Price Online Guaranteed!!</h1>
                                <div class="flex flex-col sm:flex-row md:flex-row bg-white px-3 md:px-6 py-3 md:py-6 rounded">
                                    <div class="basis-full sm:basis-1/2 md:basis-1/2">
                                         <div class="relative pr-0 md:pr-4">
                                              <img src="~/assets/images/food/guarantee-food.jpg" alt="image" class="rounded">
                                         </div>
                                    </div>
                                    <div class="basis-full sm:basis-1/2 md:basis-1/2">
                                         <div class="w-full relative shadow-sm bg-white rounded px-0 md:px-4 py-4">
                                            <p class="w-full mb-6 text-lg 2xl:text-[22px] text-gray-600 font-medium">Our Guarantee!!</p>
                                            <p class="w-full mb-6 text-sm text-gray-600 font-medium">If you see restaurants with the “Lowest food price Online” guarantee on gintaa food, then trust it. It’s our promise that you won’t find the best lowest price for food elsewhere on any other online platform. In fact, if you find the exact same price for the same food being given by any other food ordering app, be our guest. We’ll refund you the difference amount after you present us with the proofs.</p>
                                            <p class="w-full mb-0 text-sm text-gray-600 font-medium">We take our promise seriously. We are pretty sure about the prices for the food items that you see while ordering is the lowest possible price as per the industry. So if you find a better deal for your order anywhere else on the web or the app, Prove it to us immediately, and we’ll match the difference.</p>
                                            
                                        </div>
                                    </div>                                    
                                </div>
                             <div class="w-full flex flex-col relative shadow-sm bg-white rounded px-3 md:px-6 py-6 mt-4 lg:mt-10">
                                <p class="w-full mb-6 text-lg text-gray-600 font-medium">Terms & Condition</p>
                                            <div class="w-full flex flex-col pl-4">                             
                                            <ul>
                                                <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                                    Best Price only applies to the food Item/Dish of your ordering with gintaa food and does not apply to any shopping products on gintaa.
                                                </li>   
                                                <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                                    You must have paid for your food bill in full by credit card, debit card, UPI, or Net banking via <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com </a> immediately at the time of ordering. Any option to hold a fare without paying in full at the time of order does not qualify.
                                                </li> 
                                                <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                                    The qualifying order (among the two at least one) must be from a restaurant continuing its operation solely on gintaa and gintaa food. Comparison of other apps (both orders from two different apps, which do not include gintaa food) being claimed on gintaa will not be considered.
                                                </li> 
                                                <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                                    If you find food prices on another website (that is not a gintaa.com site) at a cheaper/Lower price than the price of the ordered food, gintaa Food will refund the difference between the Purchased price and the Third Party price of the food. To be eligible to apply for such a refund:
                                                </li> 
                                                <ul class="list-disc ml-3 pl-12">
                                                    <li class="mb-2 text-sm text-gray-600">The Third Party food price (other food ordering apps) must be for exactly the same food/dish/item as the ordered food price including, but not limited to, the same date (excluding happy hours), same restaurant outlet, same location, same number of items and same/identical ordering conditions (weather, special events).</li> 
                                                    <li class="mb-2 text-sm text-gray-600">The Third Party food price must exist or be available at the same time that the purchased food price ordered.</li>
                                                    <li class="mb-2 text-sm text-gray-600">The Third Party food price (other food ordering apps) has to be/must be in the same currency as the ordered food prices. It must also include all taxes, fees, surcharges, charges, and other costs associated with the payment method used to acquire the price of the ordered food.</li>
                                                    <li class="mb-2 text-sm text-gray-600">The Third Party food price (other food ordering apps) must be available from a website or app of a company that is based in the same country as the ordered food price. Check carefully on the "About Us" or "Contact Us" (or similar) page of the website to check that the company is based in the same country of the order-placing platform.</li>
                                                    <li class="mb-2 text-sm text-gray-600">The Third Party food (other food ordering apps) must be orderable online. Any Third Party food (other food ordering apps) that can be viewed but cannot be ordered and paid online will be excluded from Best Price.</li>         
                                                </ul>
                                                <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                                    To qualify for a refund you must fill out the online claim form in English/Hindi/Bengali and gintaa and gintaa food must receive your claim form by midnight of the same day you ordered your food at the given price using the time zone of your present country or the country your are placing your order from. Make sure that you keep a snapshot/screenshot or a printout of the total price of the Third Party food price (other food ordering apps), which includes all taxes, fees, and surcharges and of gintaa or gintaa food as well. gintaa or gintaa food may ask to see this screenshot in order to validate your claim. gintaa will independently authenticate the screenshot's truthfulness and will verify any request that it deems, in its sole judgment, is the product of a printing or other error or is made fraudulently or not in the best of intentions. Incomplete claim forms or any other type of claim will be rejected.
                                                </li> 
                                                <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                                    gintaa will make sure that your Third Party food prices (other food ordering apps) match all of the specifications outlined in these terms and conditions, and you will be notified within 48 hours of submitting your claim form whether or not you have qualified for a refund. Gintaa or gintaa food will strive to complete the refund within 4-5 working days after receiving information that you are eligible for one.
                                                </li> 
                                                <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                                    The difference amount will only be credited to the credit card, debit card, or bank account used to order the food.
                                                </li> 
                                                <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                                    Best Price will not apply in the following circumstances:
                                                </li>
                                                <ul class="list-disc ml-3 pl-12">
                                                    <li class="mb-2 text-sm text-gray-600">To any food prices offered as special eligibility prices including (but not limited to) third-party promotion prices, individual, collective group, family, friends, senior, personal, or corporate prices;</li> 
                                                    <li class="mb-2 text-sm text-gray-600">if the ordered food price or Third Party food prices (other food ordering apps) has been discounted by offers, coupons, gift cards, vouchers, or other discounts</li>
                                                    <li class="mb-2 text-sm text-gray-600">if gintaa or gintaa food, after reasonable efforts, is unable to verify that the Third Party food prices were ordered online on the day, time, and given above conditions in 4(a) of your claim;</li>
                                                    <li class="mb-2 text-sm text-gray-600">if you have ordered from the Third Party app (other food ordering apps) at a different time than when you completed your food ordering on gintaa.com</li>        
                                                </ul> 
                                                <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                                    <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                                    Gintaa or gintaa food reserves the right to cancel this promotion or amend these terms and conditions at any time without any prior notice to the users.
                                                </li> 
                                                                                
                                        </ul>
                                    </div>
                             </div>                       

                              <div class="w-full block justify-between relative shadow-sm bg-white rounded px-6 py-6 mt-3 mb-3 md:mt-10 md:mb-10 sm:flex md:flex">
                                <div class="flex flex-col">
                                    <div class="text-gray-700 font-medium text-lg">Claim a refund</div> 
                                    <div class="text-gray-700 font-medium mt-1 text-sm"> Have you found a fare online that’s lower than gintaa FOOD? Make your claim now.</div>
                                </div>
                                <a v-if="isFromWeb()" href="mailto:customer@gintaa.com" class="text-gray-900 text-base px-4 rounded border border-gray-700 font-medium py-2 mt-6 flex items-center justify-center w-[170px] h-[40px] sm:mt-2 md:mt-2"> <span>Claim Now</span>   </a>
                              </div>
                         

                        </div>
                        
                    </div>

                </div>

            </div>
       </section>
       <!--footer section goes here-->
       <!-- <GintaaFoodConsumerFooter  v-if="isFromWeb()"/> -->
    </div>
   </template>
   
   <script lang="ts">
   import Vue from 'vue'
   export default Vue.extend({
        name: 'LowestMenuPricePage',    
        methods:{
            isFromWeb(){
                if(this.$route.query.fromMobileApp === null){
                    return false
                }else{
                    return true
                }
            }
        },
   })
   </script>
   
   
