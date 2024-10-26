<template>
    <div>   
       <!--//////////header///////////-->
       <GintaaFoodConsumerHeader  v-if="isFromWeb()"/>
       <!--////////Breadcrumb//////////-->
       <section 
            :class="isFromWeb()? 'pt-[85px]' : 'pt-[1px]'"
            class="bg-gray-100 min-h-[500px] flex flex-col sm:pt-[85px] md:pt-[85px] lg:pt-[50px]">
            <div class="py-8">
                <div class="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
                    <div class="flex flex-col w-full mx-auto max-w-[1200px] bg-white px-6 py-4">
                            <div class="w-full flex flex-col">
                            <h1 class="text-lg md:text-xl lg:text-[24px] text-gray-900 font-semibold mb-4 lg:mb-7 text-center uppercase">Terms of Use </h1>
                            <p class="w-full mb-6 text-sm text-gray-600 font-medium">Effective as on 17 April 2023</p>
                            <div class="w-full flex flex-col">
                                <p class="w-full mb-6 text-sm text-gray-600 font-medium">Welcome to <a href="https://gintaa.com/gintaa-food" target="_blank" class="text-firoza">www.gintaa.com/gintaa-food </a>. </p>
                                <p class="w-full mb-6 text-sm text-gray-600 font-medium">Kindly go through these Terms of Use (the "Terms") thoroughly to understand your legal position vis-à-vis the services extended through our website <a href="https://gintaa.com/gintaa-food" target="_blank" class="text-firoza">www.gintaa.com/gintaa-food </a>  (the "Site") or the mobile app of Gintaa food ("Gintaa-food Platform") (the "Services")</p>
                                <p class="w-full mb-6 text-sm text-gray-600 font-medium">By accessing or using the Gintaa-food Platform, you are agreeing to these Terms and concluding a legally binding contract with Ascon Softech Pvt. Limited i.e. the owner of gintaa-food and/or its affiliates (hereinafter collectively referred to as "Gintaa-food"). Thus, your accessing of Gintaa-food Platform is an implied acceptance of the terms contained herein.</p>
                                <p class="w-full mb-6 text-sm text-gray-600 font-medium">In case you are not willing to accept the Terms you are at liberty to exit the Gintaa-food Platform without any liability to Gintaa-food. Your use of the Gintaa-food Platform is at your own risk on as is where is basis, and Gintaa-food shall not be liable to any damage that you may suffer by ordinary use of the Gintaa-food Platform.</p>
                            </div>
                            <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">DEFINITIONS</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">Customer :</span> "Customer" or "You" or "Your" refers to you, as a customer of the Services i.e. someone who accesses or uses the Services.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">"Content"</span> will include (but is not limited to) reviews, images, photos, audio, video, location data, nearby places, and all other forms of information or data. 
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">"Gintaa-food Content"</span> means content that Gintaa-food creates and make available in connection with the Services including, but not limited to, visual interfaces, interactive features, graphics, design, compilation, computer code, products, software, aggregate ratings, reports and other usage-related data in connection with activities associated with your account and all other elements and components of the Services excluding Your Content and Third-Party Content. 
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">Portal shall</span> mean website <a href="https://gintaa.com/gintaa-food" target="_blank" class="text-firoza">www.gintaa.com/gintaa-food </a>  (the "Site") or the mobile app of Gintaa food ("Gintaa-food Platform").
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">"Restaurant"</span> means the restaurants listed on Gintaa-food Platform.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">“Sensitive Personal Data”</span> which may, reveal, be related to, or constitute your 
                            </li> 
                            <ul class="list-disc ml-3 pl-12">
                                <li class="mb-2 text-sm text-gray-600">financial data</li> 
                                <li class="mb-2 text-sm text-gray-600">health data</li>
                                <li class="mb-2 text-sm text-gray-600">official identifier</li>
                                <li class="mb-2 text-sm text-gray-600">sex life</li>
                                <li class="mb-2 text-sm text-gray-600">sexual orientation</li>
                                <li class="mb-2 text-sm text-gray-600">biometric data</li>
                                <li class="mb-2 text-sm text-gray-600">genetic data</li>
                                <li class="mb-2 text-sm text-gray-600">transgender status</li>
                                <li class="mb-2 text-sm text-gray-600">intersex status</li>
                                <li class="mb-2 text-sm text-gray-600">caste or tribe</li>
                                <li class="mb-2 text-sm text-gray-600">religious or political belief or affiliation</li>
                            </ul>
                                <li class="text-sm text-gray-600 pb-4 relative pl-9"><svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium"> "Third Party Content" </span>means content that comes from parties other than Gintaa-food or its Customers, such as Restaurant Partners and is available on the Services.
                                </li> 
                                <li class="text-sm text-gray-600 pb-4 relative pl-9"><svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium">"Your content"</span> or "Customer Content" means content that you upload, share or transmit to, through or in connection with the Services, such as likes, ratings, reviews, images, photos, messages, chat communication, profile information, or any other materials that you publicly display or displayed in your account profile.
                                </li> 
                        </ul>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Your representation & warranties:</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You hereby represent and warrant that you are at least eighteen (18) years of age or above and are fully able and competent to understand and agree the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You are in compliance with all laws of India. 
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                The Content on these Services is for informational purposes only and you are aware that Gintaa-food does not have any liability for any information that may have become outdated since the last time the particular piece of information was updated and Gintaa-food reserves the right to make changes and corrections to any part of the Content on these Services at any time without prior notice. 
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You undertake that Gintaa-food does not guarantee the quality of the food, the prices listed in menus or the availability of all menu items at any Restaurant Partner and Unless stated otherwise, all pictures and information contained on these Services are believed to be owned by or licensed to Gintaa-food. 
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You also undertake that any information that may be displayed on the Restaurant's listing page on the Gintaa-food Platform is for informational purposes only as such Certification is displayed by Gintaa-food on an 'as available' basis that is provided to Gintaa-food by the Restaurant partner(s)/Merchant(s). Gintaa-food does not make any warranties about the validity, authenticity, reliability and accuracy of such information displayed in this regard. 
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                any reliance placed by you upon the information thereto shall be strictly at such Customer's own risk and Gintaa-food in no manner shall assume any liability whatsoever for any losses or damages in connection with the use of this information.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Gintaa-food reserves the right to charge a subscription and/or membership fee in respect of any of its product or service and/or any other charge or fee on a per order level from Customers, in respect of any of its product or service on the Gintaa-food Platform anytime in future.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Gintaa-food may from time to time introduce referral and/or incentive based programs for its Customers (Program). These Program(s) may be governed by their respective terms and conditions. By participating in the Program, Customers are bound by the Program terms and conditions as well as the Gintaa-food Platform terms. 
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Further, Gintaa-food reserves the right to terminate / suspend the Customer's account and/or credits / points earned and/or participation of the Customer in the Program if Gintaa-food determines in its sole discretion that the Customer has violated the rules of the Program and/or has been involved in activities that are in contravention of the Program terms and/or Gintaa-food Platform terms or has engaged in activities which are fraudulent / unlawful in nature. 
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Gintaa-food may from time to time offer to the Customers credits, promo codes, vouchers or any other form of cashback that Gintaa-food may decide at its discretion. Gintaa-food reserves the right to modify, convert, cancel and/or discontinue such credits, promo codes or vouchers, as it may deem fit.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You hereby agree and assure Gintaa-food that the Gintaa-food Platform/Services shall be used for lawful purposes only and that you will not violate laws, regulations, ordinances or other such requirements of any applicable Central, Federal State or local government or international law(s). You shall not upload, post, email, transmit or otherwise make available any unsolicited or unauthorized advertising, promotional materials, junk mail, spam mail, chain letters or any other form of solicitation, encumber or suffer to exist any lien or security interest on the subject matter of these Terms or to make any representation or warranty on behalf of Gintaa-food in any form or manner whatsoever.
                            </li>
                                
                        </ul>
                    </div>
                    
                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Use of services by you or Customer</h4>
                            <p class="w-full mb-6 text-sm text-gray-600 ">You shall have to create an account using your personal credentials. By creating an account, you agree to receive certain communications in connection with Gintaa-food Platform or Services. You can opt-out or manage your preferences regarding non-essential communications through account settings.</p>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Important Terms</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                In order to connect you to certain restaurants, we provide value added telephony services through our phone lines, which are displayed on the specific restaurant listing page on the Gintaa-food Platform, which connect directly to restaurants' phone lines. We record all information regarding this call including the voice recording of the conversation between you, and the restaurant (for internal billing tracking purposes and customer service improvement at the restaurant's end). You explicitly agree and permit Gintaa-food to record all this information when you avail the telephony services through the Gintaa-food provided phone lines on the Gintaa-food Platform.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You agree to use the Services only for purposes that are permitted by (a) the Terms and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You agree to use the data owned by Gintaa-food (as available on the Services or through any other means like API etc.) only for personal use/purposes and not for any commercial use unless agreed to by/with Gintaa-food in writing.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You agree not to access (or attempt to access) any of the Services by any means other than the interface that is provided by Gintaa-food, unless you have been specifically allowed to do so, by way of a separate agreement with Gintaa-food. 
                            </li>
                        </ul>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Privacy Policy</h4>
                            <p class="w-full mb-6 text-sm text-gray-600 ">You represent that you have read, understood and agreed to our Privacy Policy. Please note that we may disclose information about you to third parties or government authorities if we believe that such a disclosure is reasonably necessary to (i) take action regarding suspected illegal activities; (ii) enforce or apply our Terms and Privacy Policy; (iii) comply with legal process or other government inquiry, such as a search warrant, subpoena, statute, judicial proceeding, or other legal process/notice served on us; or (iv) protect our rights, reputation, and property, or that of our Customers, affiliates, or the general public</p>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Restrictions on use</h4>
                            <p class="w-full mb-6 text-sm text-gray-600 ">Without limiting the generality of these Terms, in using the Services, you specifically agree not to post or transmit any content (including review) or engage in any activity that, in our sole discretion:</p>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Violate our Guidelines and Policies;
                            </li>  
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Is harmful, threatening, abusive, harassing, tortious, indecent, defamatory, discriminatory, vulgar, profane, obscene, libellous, hateful or otherwise objectionable, invasive of another's privacy, relating or encouraging money laundering or gambling;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Contains material that violates the standards of good taste or the standards of the Services;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Constitutes an inauthentic or knowingly erroneous review, or does not address the goods and services, atmosphere, or other attributes of the business you are reviewing.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Violates any third-party right, including, but not limited to, right of privacy, right of publicity, copyright, trademark, patent, trade secret, or any other intellectual property or proprietary rights;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Is illegal, or violates any central, state, or local law or regulation (for example, by disclosing or trading on inside information in violation of securities law);
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Attempts to impersonate another person or entity;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Accuses others of illegal activity, or describes physical confrontations;
                            </li> <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Alleges any matter related to health code violations requiring healthcare department reporting. Refer to our Guidelines and Policies for more details about health code violations.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Disguises or attempts to disguise the origin of Your Content, including but not limited to by: (i) submitting Your Content under a false name or false pretences; or (ii) disguising or attempting to disguise the IP address from which Your Content is submitted;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Accesses or uses the account of another customer without permission;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Constitutes a form of deceptive advertisement or causes, or is a result of, a conflict of interest;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Is commercial in nature, including but not limited to spam, surveys, contests, pyramid schemes, postings or reviews submitted or removed in exchange for payment, postings or reviews submitted or removed by or at the request of the business being reviewed, or other advertising materials;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Falsely states, misrepresents, or conceals your affiliation with another person or entity;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                reverse engineers, disassembles or otherwise attempts to derive source code from the Services;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                "Hacks" or accesses without permission our proprietary or confidential records, records of another Customer, or those of anyone else;
                            </li>                              
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Distributes computer viruses or other code, files, or programs that interrupt, destroy, or limit the functionality of any computer software or hardware or electronic communications equipment;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Interferes with, disrupts, or destroys the functionality or use of any features of the Services or the servers or networks connected to the Services;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Violates any contract or fiduciary relationship (for example, by disclosing proprietary or confidential information of your employer or client in breach of any employment, consulting, or non-disclosure agreement);
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Threatens the unity, integrity, defense, security or sovereignty of India Collects, accesses, or stores personal information about other Customers of the Services;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Is posted by a bot;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Harms minors in any way;
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Modifies, copies, scrapes or crawls, displays, publishes, licenses, sells, rents, leases, lends, transfers or otherwise commercialize any rights to the Services or Our Content; or
                            </li> 
                            
                        </ul>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Feedback</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                If you share or send any ideas, suggestions, changes or documents regarding Gintaa-food's existing business ("Feedback"), you agree that (i) your Feedback does not contain the confidential, secretive or proprietary information of third parties, (ii) Gintaa-food is under no obligation of confidentiality with respect to such Feedback, and shall be free to use the Feedback on an unrestricted basis (iii) Gintaa-food may have already received similar Feedback from some other Customer or it may be under consideration or in development, and (iv) By providing the Feedback, you grant us a binding, non-exclusive, royalty-free, perpetual, global license to use, modify, develop, publish, distribute and sublicense the Feedback, and you irrevocably waive, against Gintaa-food and its Customers any claims/assertions, whatsoever of any nature, with regard to such Feedback.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Notwithstanding the abovementioned clause, Gintaa-food or any of its employees do not accept or consider unsolicited ideas, including ideas for new advertising campaigns, new promotions, new or improved products or technologies, product enhancements, processes, materials, marketing plans or new product names. Please do not submit any unsolicited ideas, original creative artwork, suggestions or other works ("Submissions") in any form to Gintaa-food or any of its employees.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                The purpose of this policy is to avoid potential misunderstandings or disputes when Gintaa-food's products or marketing strategies might seem similar to ideas submitted to Gintaa-food. If, despite our request to not send us your ideas, you still submit them, then regardless of what your letter says, the following terms shall apply to your Submissions.
                            </li> 
                        </ul>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">FOOD ORDERING AND DELIVERY:</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Gintaa-food provides food ordering and delivery services by entering into contractual arrangements with restaurant partners (<span class="font-medium">“Restaurant Partners”</span>) on a principal-to-principal basis for the purpose of listing their menu items or the Products (as defined below) for food ordering and delivery by the Customers on the Gintaa-food Platform.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                In order to get the eservices of Gintaa-food, you need to first register yourself with Gintaa-food by following the instruction on the Portal and filling up the necessary information. Please note, your registration with Gintaa-food is a voluntary act on your part and Gintaa-food shall not be responsible for such registration. Needless to mention, you are at liberty not to register with Gintaa-food and in which case you shall not be able to get the services of Gintaa-food.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                The Customers can access the menu items or Products listed on the Gintaa-food Platform and place orders against the Restaurant Partner through Gintaa-food.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Your request to order food and beverages or Products from a Restaurant Partner page on the Gintaa-food Platform shall constitute an unconditional and irrevocable authorization issued in favour of Gintaa-food to place orders for food and beverages or Products against the Restaurant Partner on your behalf.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Delivery of an order placed by you through the Gintaa-food Platform shall be undertaken directly by the Restaurant Partner against whom you have placed an order, (<span class="font-medium">“Delivery Partners”</span>). Gintaa-food is merely acting as an intermediary between you and the Restaurant Partner and any delay, deficiency in service by the Delivery Partners of the Restaurant Partner shall not be any liability of Gintaa-food.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                The acceptance by a Restaurant Partner of undertaking delivery of your order shall constitute a contract of service under the Consumer Protection Act, 2019 or any successor legislations, between you and the Delivery Partner, to which Gintaa-food is not a party under any applicable law. It is clarified that Gintaa-food does not provide any delivery or logistics services and only enables the sale and purchase of food and beverages or Products ordered by the Customers through the Gintaa-food Platform by connecting the Customers with the Restaurant Partners.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You may be charged a delivery fee for delivery of your order by the Restaurant Partner, as the Delivery Partner or the Restaurant Partner may determine (<span class="font-medium">“Delivery Charges"</span>). You agree that Gintaa-food is authorized to collect, on behalf of the Restaurant Partner, the Delivery Charges for the delivery service provided by the Restaurant Partner. The Delivery Charges may vary from order to order, which may be determined on multiple factors which shall include but not be limited to Restaurant Partner, order value, distance, time of the day. Gintaa-food will inform you of the Delivery Charges that may apply to you, provided you will be responsible for Delivery Charges incurred for your order regardless of your awareness of such Delivery Charges.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                In respect of the order placed by You, Gintaa-food shall issue documents like order summary, tax invoices, etc. as per the applicable legal regulations and common business practices.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You are expected to respect the dignity and diversity of Delivery Partners and accordingly you agree to not discriminate against any Delivery Partner on the basis of Discrimination Characteristics (as defined below). You are also expected to enable provision of a secure and fearless gig/ platform work environment for the delivery partners including prevention and deterrence of harassment (including sexual harassment) towards Delivery Partners.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                All prices listed on the Gintaa-food Platform are provided by the Restaurant Partner at the time of publication on the Gintaa-food Platform and have been placed as received from the Restaurant Partner. While we take great care to keep them up to date, the final price charged to you by the Restaurant Partner may change at the time of delivery. In the event of a conflict between price on the Gintaa-food Platform and price charged by the Restaurant Partner, the price charged by the Restaurant Partner shall be deemed to be the correct price except Delivery Charge of Gintaa-food.
                            </li> 
                            
                        </ul>
                    </div>
                    
                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">General Terms and Conditions</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You understand that Gintaa-food is not a manufacturer, seller or distributor of food and beverages or Products and merely places an order against the Restaurant Partner(s on behalf of the Customers pursuant to the unconditional and irrevocable authority granted by the Customers to Gintaa-food, and facilitates the sale and purchase of food and beverages or Products between Customers and Restaurant Partners, under the contract for sale and purchase of food and beverages or Products between the Customers and Restaurant Partners.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Gintaa-food shall not be liable for any acts or omissions on part of the Restaurant Partner including deficiency in service, wrong delivery of order / order mismatch, quality, incorrect pricing, deficient quantity, time taken to prepare or deliver the order, and other similar etc.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You also understand that Gintaa-food is no way responsible for delivery of the food ordered by you and that the entire responsibility for the delivery of the food ordered by you lies with the restaurant partner from whom you have ordered the food.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Please note that some of the food and beverages or Products may not be suitable for certain types of people like people allergic to gluten, lactose etc. or for people under certain age like infants, child below 5 years etc. and the Customer should check the dish she or he is ordering and read its description, if provided, prior to placing your order. Gintaa-food shall not be liable in the event the food and beverages or the Product ordered by You does not meet your dietary or any other requirements and/or restrictions.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                The Restaurant Partner shall be solely responsible for any warranty/guarantee of the food and beverages or Products sold to the Customer and in no event shall be the responsibility of Gintaa-food.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You or any person instructed by you shall not resell food and beverages or Products purchased via the Gintaa-food Platform.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                While placing an order you shall be required to provide certain details, including without limitation, contact number and delivery address. You agree to take particular care when providing these details and warrant that these details are accurate and complete at the time of placing an Order. By providing these details, you express your acceptance to Gintaa-food's terms and privacy policies.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Any amount that may be charged to you by Gintaa-food over and above the order value, shall be inclusive of applicable taxes.
                            </li>
                        </ul>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Cancellation and refund policy:</h4>
                            <p class="w-full mb-6 text-sm text-gray-600 ">Food once ordered can not be cancelled. Gintaa-food shall not be liable to make any refund of any payment made by you in connection with any cancellation attempted by you.</p>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Indemnification</h4>
                            <p class="w-full mb-6 text-sm text-gray-600 ">You agree to indemnify, defend, and hold harmless the Gintaa-food Parties from and against any third party claims, damages (actual and/or consequential), actions, proceedings, demands, losses, liabilities, costs and expenses (including reasonable legal fees) suffered or reasonably incurred by us arising as a result of, or in connection with: (i) Your Content, (ii) your unauthorized use of the Services, or products or services included or advertised in the Services; (iii) your access to and use of the Services; (iv) your violation of any rights of another party; or (v) your breach of these Terms, including, but not limited to, any infringement by you of the copyright or intellectual property rights of any third party. We retain the exclusive right to settle, compromise and pay, without your prior consent, any and all claims or causes of action which are brought against us. </p>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">Termination of your access to the services</h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                You can delete your account at any time by using the direction mentioned in settings.
                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                We may terminate your use of the Services and deny you access to the Services in our sole discretion for any reason including your violation of these Terms.
                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                Once, terminated, a customer may not be allowed by Gintaa-food to re-register with same IP address or credentials.
                            </li>
                        </ul>
                    </div>

                    <div class="w-full flex flex-col mt-4">
                            <h4 class="text-lg text-gray-700 font-medium mb-4 uppercase">General </h4>
                            <ul>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium mr-1">Interpretation:</span>The section and subject headings in these Terms are included for reference only and shall not be used to interpret any provisions of these Terms.

                            </li> 
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium mr-1">Severability:</span>If any provision of these Terms is deemed unlawful, invalid, or unenforceable by a judicial court for any reason, then that provision shall be deemed severed from these Terms, and the remainder of the Terms shall continue in full force and effect.

                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium mr-1">Entire Agreement and Waiver:</span>No failure or delay by Gintaa-food in exercising any right, power or privilege under the Terms shall be deemed as a waiver of such right or acceptance of any variation of the Terms and nor shall any single or partial exercise by either party of any right, power or privilege preclude any further exercise of that right or the exercise of any other right, power or privilege.

                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium mr-1">Partnership or Agency:</span>None of the provisions of these Terms shall be deemed to constitute a partnership or agency between you and Gintaa-food and you shall have no authority to bind Gintaa-food in any form or manner, whatsoever.

                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium mr-1">Dispute Resolution:</span>In case of any dispute that arises between the customer and the restaurant partner, the responsibility of Gintaa-food shall be only limited to the providing of information. The Customer shall not make Gintaa-food a party in any such dispute in any manner whatsoever.

                            </li>
                            <li class="text-sm text-gray-600 pb-4 relative pl-9">
                                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" class="absolute left-0 top-1"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z" fill="#8BC63E"></path></svg>
                                <span class="font-medium mr-1">Governing Law/Waiver:</span>These Terms shall be governed by the laws of India. The Courts of Kolkata shall have exclusive jurisdiction over any dispute arising under these terms.

                            </li>
                            
                        </ul>
                    </div>

                                                
                    <p class="w-full mb-6 text-sm text-gray-600 font-medium mt-4">Please note: Gintaa-food does not solicit confidential information such as OTP/CVV/PIN NUMBER/Card number either through call or mail or any other means. Please do not reveal these details to fraudsters and imposters claiming to be calling on Gintaa-food’s behalf. You may report such suspicious activities to </p>
                    



                            </div>
                        
                    </div>

                </div>

            </div>
       </section>
       <!--footer section goes here-->
       <GintaaFoodConsumerFooter  v-if="isFromWeb()"/>
    </div>
   </template>
   
   <script lang="ts">
   import Vue from 'vue'
   export default Vue.extend({
        name: 'TermsConditionPage',    
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
   
   
   