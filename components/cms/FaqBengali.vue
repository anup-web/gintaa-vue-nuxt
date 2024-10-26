<template>
             <div>
            <h1  v-if="isFromWeb()" class="text-lg md:text-xl lg:text-[24px] text-gray-900 font-semibold mb-4 lg:mb-7 text-center">প্রশ্নসূচী</h1>
           
          <!-- <div class="accordion-item border-0  rounded-sm bg-gray-50 ">
                            <h2 class="accordion-header mb-0 font-medium text-sm px-8 border-b border-gray-200" id="flush-headingOne">
                            <button class="accordion-button relative flex items-center w-full py-4 
                            text-sm text-gray-800 text-left  border-0 rounded-none transition
                            focus:outline-none bg-gray-100  font-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                             <span>How to sign up on gintaa? </span>
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show p-8"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body   text-xsb text-gray-500">
                                gintaa Coin is a reusable virtual coin that users can earn or acquire by getting engaged with gintaa app or the platform. Users can earn & redeem these coins to close exciting exchange offers & deals on gintaa. The users can also buy gintaa coins. 
                                
                                </div>
                            </div>
                        </div> -->
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingOne">
                            <button class="accordion-button relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                 <span>কিভাবে gintaa এ সাইন আপ করবেন? </span>
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">
                                <ul>
                                    <li class="mb-3"><span class="block font-medium pb-2">ধাপ 1</span>
                                                    উপরের মেনু বারে সাইন আপ-এ ক্লিক করুন
                                    </li>

                                    <li class="mb-3"> 
                                        <span class="block font-medium pb-2">ধাপ 2</span>
                                   <span class="block"> একটি বৈধ মোবাইল নম্বর লিখুন, লগইন এ ক্লিক করুন </span>
                                    </li>
                                    <li class="mb-3">
                                     <span class="block font-medium pb-2">ধাপ 3</span>
                                    আপনি প্রদত্ত মোবাইল নম্বরে একটি ওটিপি পাবেন
                                    </li>
                                    <li class="mb-3">
                                     <span class="block font-medium pb-2">ধাপ 4</span>
                                    ফোন নম্বরে প্রাপ্ত ওটিপি লিখুন

                                    </li>
                                    <li class="mb-3">
                                     <span class="block font-medium pb-2">ধাপ 5</span>
                                    আপনার প্রোফাইল তথ্য পূরণ করুন; ইমেইল আইডি যাচাই করুন, পরবর্তী অপসন-এ ক্লিক করুন
                                    </li> 
                                   <li class="mb-3">
                                     <span class="block font-medium pb-2">ধাপ 6</span>
                                    আপনার অবস্থান এবং ঠিকানার বিবরণ যোগ করুন; জমা দিন এবং আপনি প্রস্তুত! 
                                    </li> 
                                    <li class="font-medium">অথবা,</li>
                                <li class="font-medium">
                                    আপনি গুগল এবং ফেসবুক-এর মতো আপনার সোশ্যাল মিডিয়া প্রোফাইল ব্যবহার করে gintaa-তে যোগ দিতে পারেন।
                                </li>
                                </ul>
                                 </div>
                            </div>
                        </div>
                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingTwo">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                 <span>আমি কিভাবে আমার ইমেল ঠিকানা আপডেট করতে পারি?
</span>
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">
                                  <ul>
                                    <li class="mb-3"><span class="block font-medium pb-2">ধাপ 1</span>
                                    উপরের মেনু বারে প্রোফাইল আইকনে ক্লিক করুন

                                    </li>

                                    <li class="mb-3"> 
                                        <span class="block font-medium pb-2">ধাপ 2</span>
                                   <span class="block"> আমার অ্যাকাউন্ট- এ ক্লিক করুন</span>
                                    </li>
                                    <li class="mb-3">
                                     <span class="block font-medium pb-2">ধাপ 3</span>
                                    আপনার ইমেল আইডির ঠিক পাশে এডিট আইকন [পেন আইকন] এ ক্লিক করুন

                                    </li>
                                    <li class="mb-3">
                                     <span class="block font-medium pb-2">ধাপ 4</span>
                                    আপনার নতুন ইমেল আইডি প্রদান করুন

                                    </li>
                                    <li class="mb-3">
                                     <span class="block font-medium pb-2">ধাপ 5</span>
                                    যাচাই অপশনে ক্লিক করুন

                                    </li>
                                    <li class="mb-3">
                                     <span class="block font-medium pb-2">ধাপ 6</span>
                                   আপনি প্রদত্ত ইমেল আইডিতে gintaa থেকে একটি ওটিপি পাবেন
                                    </li>
                                     <li class="mb-3">
                                     <span class="block font-medium pb-2">ধাপ 7</span>
                                   ওটিপি লিখুন এবং ওটিপি যাচাই করুন ক্লিক করুন

                                    </li>
                                     <li class="mb-3">
                                     <span class="block font-medium pb-2">ধাপ 8</span>
                                   আপনার নতুন ইমেল সফলভাবে আপডেট করা হবে
                                    </li>
                               
                                </ul>
                            </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingthree">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsethree"
                                aria-expanded="false" aria-controls="flush-collapsethree">
                             <span>প্রতিবার ফোন নম্বর দিয়ে লগইন করার সময় কি আমাকে ওটিপি লিখতে হবে?
</span>
                            </button>
                            </h2>
                            <div id="flush-collapsethree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingthree"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">হ্যাঁ, যতবার আপনি আপনার ফোন নম্বর দিয়ে লগইন করবেন, নিরাপত্তার কারণে আপনি gintaa থেকে একটি ওটিপি পাবেন। এইভাবে, ওটিপি-ভিত্তিক লগইন আপনার gintaa অ্যাকাউন্ট সুরক্ষিত রাখে।
 </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingfour">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour"
                                aria-expanded="false" aria-controls="flush-collapsefour">
                           <span>একজন ব্যবহারকারীর কি একাধিক gintaa প্রোফাইল থাকতে পারে?</span>
                            </button>
                            </h2>
                            <div id="flush-collapsefour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingfour"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">হ্যাঁ, একজন ব্যবহারকারীর একাধিক gintaa প্রোফাইল থাকতে পারে, তবে তাদের প্রতিটি বৈধ এবং ফোন নম্বর এবং ইমেল আইডি গুলির একটি আলাদা সেট দিয়ে তৈরি করা হয়। </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingfive">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive"
                                aria-expanded="false" aria-controls="flush-collapsefive">
                            <span>আমি কি রেজিস্ট্রেশন বা সাইন আপ ছাড়া gintaa প্ল্যাটফর্ম ব্যবহার করতে পারি?
 </span>
                            </button>
                            </h2>
                            <div id="flush-collapsefive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingfive"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">অবশ্যই, আপনি সাইন আপ না করেই gintaa ব্রাউজ করতে পারেন। যাইহোক, আপনার পুরানো আইটেমগুলিকে তালিকাভুক্ত করতে বা যোগ করতে এবং সেগুলি বিনিময় করার জন্য মিল খুঁজে পেতে এবং অন্যান্য বিশদ বৈশিষ্ট্যগুলি ব্যবহার করতে, gintaa -তে নিবন্ধন করা বাধ্যতামূলক৷
 </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingsix">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix"
                                aria-expanded="false" aria-controls="flush-collapsesix">
                                <span>আমি কি আমার ব্যবহারকারীর প্রোফাইল সম্পূর্ণ না করে আমার প্রোডাক্ট তালিকাভুক্ত করতে বা যোগ করতে পারি?
 </span>
                            </button>
                            </h2>
                            <div id="flush-collapsesix" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingsix"
                            data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body text-xsb text-gray-500 py-4 ">না! আপনি নিজের সম্পর্কে প্রাথমিক তথ্য পূরণ না করে কোনো আইটেম তালিকাভুক্ত বা যোগ করতে পারবেন না। gintaa সর্বদা ব্যবহারকারীদের বিশ্বাসযোগ্যতার জন্য তাদের ব্যবহারকারী প্রোফাইল সম্পূর্ণ করতে উৎসাহিত করে। gintaa-তে সাইন আপ করার সময়, প্রথমবারের ব্যবহারকারীদের নিজেদের সম্পর্কে প্রাথমিক তথ্য পূরণ করতে বলা হয়। অন্যথায়, তারা সাইন আপ প্রক্রিয়াটি সম্পূর্ণ করতে পারবে না এবং gintaa-এ কোনো পণ্য তালিকা বা যোগ করতে পারবে না।
</div> 
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingseven">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseseven"
                                aria-expanded="false" aria-controls="flush-collapseseven">
                                 <span>আমি লগইন বা কোনো সোশ্যাল মিডিয়া প্রোফাইলের মাধ্যমে সাইন আপ করলে gintaa কি আমার সমস্ত ব্যক্তিগত তথ্যে অ্যাক্সেস পাবে?
 </span>
                            </button>
                            </h2>
                            <div id="flush-collapseseven" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingseven"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">না, gintaa আপনার ব্যক্তিগত তথ্যে অ্যাক্সেস পাওয়ার বিষয়ে খুব সচেতন ও নির্বাচনশীল যে কোনও সোশ্যাল মিডিয়া দ্বারা প্রদত্ত, আপনি নিবন্ধনের উদ্দেশ্যে বেছে নিয়েছেন। আপনি আমাদের উপর নির্ভর করতে পারেন কারণ আমরা আপনার নিরাপত্তার ব্যাপারে খুবই সচেতন। আরও তথ্যের জন্য, আমাদের গোপনীয়তা নীতি দেখুন।
 </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingeight">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseeight"
                                aria-expanded="false" aria-controls="flush-collapseeight">
                              <span>gintaa এর সাথে সাইন আপ করার জন্য কি কোন বয়স সীমা আছে?</span>
                            </button>
                            </h2>
                            <div id="flush-collapseeight" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingeight"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">gintaa-এর সাথে সাইন আপ করার জন্য সর্বনিম্ন বয়সের মানদণ্ড হল 18 বছর বা তার বেশি।
</div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingnine">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsenine"
                                aria-expanded="false" aria-controls="flush-collapsenine">
                             <span>কেন আমায় gintaa -র অবস্থানের বিবরণ প্রদান করতে হবে? </span>
                            </button>
                            </h2>
                            <div id="flush-collapsenine" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingnine"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">gintaa-র লক্ষ্য আপনার চারপাশে উপলব্ধ সমস্ত সাম্প্রতিক অফারগুলি দেখানো। এর জন্য, gintaa -র আপনার অবস্থানের বিবরণ প্রয়োজন। যাইহোক, আপনাকে নিশ্চিত হতে হবে যে আপনার ব্যক্তিগত তথ্য সর্বদা gintaa -র কাছে সুরক্ষিত থাকে।</div> 
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingten">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseten"
                                aria-expanded="false" aria-controls="flush-collapseten">
                             <span>কে gintaa দিয়ে সাইন আপ করতে পারেন?
</span>
                            </button>
                            </h2>
                            <div id="flush-collapseten" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingten"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">gintaa সবার জন্য। যে কেউ এই প্ল্যাটফর্মে যোগ দিতে পারেন। এটি সাধারণ ব্যবহারকারী বা ভোক্তাদের সাথে সংযোগ স্থাপনের জন্য একটি সেরা অনলাইন বার্টার মার্কেটপ্লেস।</div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingeleven">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseeleven"
                                aria-expanded="false" aria-controls="flush-collapseeleven">
                               <span>আমি কি বিনামূল্যে gintaa ব্যবহার করতে পারি?
</span>
                            </button>
                            </h2>
                            <div id="flush-collapseeleven" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingeleven"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">হ্যাঁ, আপনি বিনামূল্যে এই অ্যাপ্লিকেশন ব্যবহার করতে পারেন। আমরা কোন কমিশন, কোন সাইন আপ বা রেজিস্ট্রেশন ফি চার্জ করি না।
 </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingtwelve">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwelve"
                                aria-expanded="false" aria-controls="flush-collapsetwelve">
                                <span>আমি কি অন্যান্য gintaa ব্যবহারকারীদের সাথে যোগাযোগ করতে পারি?
</span>
                            </button>
                            </h2>
                            <div id="flush-collapsetwelve" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingtwelve"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">আপনি সরাসরি চ্যাট করতে পারেন, কল করতে পারেন বা এমনকি অন্যান্য gintaa ব্যবহারকারীদের তালিকার বিষয়ে বার্তা পাঠাতে পারেন এবং আপনার পছন্দ অনুযায়ী প্রস্তাব দিতে বা পাঠাতে পারেন। আমরা অডিও এবং ভিডিও কল সহ অনলাইন এবং অফলাইন উভয় বার্তা সমর্থন করি।</div>
                            </div>
                        </div>
                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingthirteen">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4
                             text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsethirteen"
                                aria-expanded="false" aria-controls="flush-collapsethirteen">
                            <span>কেউ আমার তালিকার আগ্রহী কিনা তা আমি কিভাবে জানব?
</span>
                            </button>
                            </h2>
                            <div id="flush-collapsethirteen" class="accordion-collapse collapse" aria-labelledby="flush-headingthirteen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">যখনই কোনো ব্যক্তি তালিকাটিকে তার পছন্দের হিসেবে চিহ্নিত করবে বা একই তালিকার সাথে সম্পর্কিত একটি প্রশ্ন/মন্তব্য পোস্ট করবে তখনই আপনি gintaa থেকে যথাযথভাবে বিজ্ঞপ্তি পাবেন। আপনি সরাসরি ব্যবহারকারীর সাথে যোগাযোগ করতে পারেন, আলোচনা করতে পারেন এবং সেই অনুযায়ী আপনার পছন্দ অনুযায়ী অফারটি গ্রহণ বা প্রত্যাখ্যান করতে পারেন।

                                </div>
                            </div>
                        </div>
                         <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingfourteen">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4
                             text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefourteen"
                                aria-expanded="false" aria-controls="flush-collapsefourteen">
                            <span>কেউ যদি আমার তালিকাকে পছন্দ বা প্রিয় হিসেবে চিহ্নিত করে তাহলে কী হবে?</span>
                            </button>
                            </h2>
                            <div id="flush-collapsefourteen" class="accordion-collapse collapse" aria-labelledby="flush-headingfourteen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">যেকোনো ব্যবহারকারী ভবিষ্যতের রেফারেন্সের জন্য আপনার পছন্দের তালিকা চিহ্নিত করতে পারে। কিন্তু, যখনই একজন ব্যবহারকারী তা করেন, আপনাকে সেই অনুযায়ী অবহিত করা হবে।
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingfifteen">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4
                             text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefifteen"
                                aria-expanded="false" aria-controls="flush-collapsefifteen">
                            <span>আমি কি অন্য প্ল্যাটফর্মে আমার তালিকা শেয়ার করতে পারি?</span>
                            </button>
                            </h2>
                            <div id="flush-collapsefifteen" class="accordion-collapse collapse" aria-labelledby="flush-headingfifteen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">হ্যাঁ, আমরা চাই প্রতিটি ব্যবহারকারী এই প্ল্যাটফর্মের সম্পর্কে জানুক। অতএব, আপনি যেকোনো সময় বিভিন্ন সোশ্যাল মিডিয়া প্ল্যাটফর্মে আপনার তালিকা শেয়ার করতে পারেন।
                                </div>
                            </div>
                        </div>
                         <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingsixteen">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4
                             text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesixteen"
                                aria-expanded="false" aria-controls="flush-collapsesixteen">
                            <span>একটি অফার বলতে আপনি কি বোঝেন?
</span>
                            </button>
                            </h2>
                            <div id="flush-collapsesixteen" class="accordion-collapse collapse" aria-labelledby="flush-headingsixteen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">আপনি যখন প্রোডাক্ট(গুলি) যোগ করেন বা gintaa-এ একটি তালিকা পোস্ট করেন, তখন প্রত্যেক নিবন্ধিত এবং অনিবন্ধিত ব্যবহারকারী কোনো সীমাবদ্ধতা ছাড়াই তালিকার বিশদ বিবরণ দেখতে পারেন। যাইহোক, যদি অন্য ব্যবহারকারীরা আপনার চুক্তিতে আগ্রহী হন, তবে তারা একই অফার পাঠাতে বা পরামর্শ দিতে পারে, যদি তারা নিবন্ধিত gintaa ব্যবহারকারী এবং তদ্বিপরীত (ভাইস ভারসা) হয়। 
                                </div>
                            </div>
                        </div>
                         <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingseventeen">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4
                             text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseseventeen"
                                aria-expanded="false" aria-controls="flush-collapseseventeen">
                            <span>gintaa কয়েন (গুলি) কি?
 </span>
                            </button>
                            </h2>
                            <div id="flush-collapseseventeen" class="accordion-collapse collapse" aria-labelledby="flush-headingseventeen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">gintaa কয়েন হল একটি পুনঃব্যবহারযোগ্য ভার্চুয়াল মুদ্রা যা ব্যবহারকারীরা gintaa অ্যাপ বা প্ল্যাটফর্ম ব্যবহার করার সময় উপার্জন বা অর্জন করতে পারে। ব্যবহারকারীরা gintaa-এ আকর্ষণীয় এক্সচেঞ্জ এবং ডিল বন্ধ করতে আসল টাকা ব্যবহার করার পরিবর্তে এই কয়েনগুলি উপার্জন করতে এবং খরচ করতে পারে। ব্যবহারকারীরা বিভিন্ন রকম ডিল পেতে অবিলম্বে gintaa কয়েন কিনতে পারেন।

                                </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingeightteen">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4
                             text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseeightteen"
                                aria-expanded="false" aria-controls="flush-collapseeightteen">
                            <span>আমি কিভাবে gintaa কয়েন উপার্জন করব?</span>
                            </button>
                            </h2>
                            <div id="flush-collapseeightteen" class="accordion-collapse collapse" aria-labelledby="flush-headingeightteen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500"><p>আপনার gintaa ওয়ালেটে gintaa কয়েন উপার্জন করার জন্য এখানে নিম্নলিখিত সুযোগ রয়েছে:
</p>
                            <ul>
                            <li class="pb-2"><span class="font-bold">জয়েন করার পুরষ্কার: </span> প্রথমবারের জন্য নতুন ব্যবহারকারী হিসাবে gintaa-এ সাইন আপ করুন </li>
                            <li class="pb-2"><span class="font-bold">রেফারেল পুরষ্কার:</span> আপনি আপনার রেফারেল লিঙ্কের সাহায্যে অন্যদেরকে gintaa - য় যোগদানের জন্য আমন্ত্রণ জানান এবং আমন্ত্রিতরা তা করেন, তারপরে gintaa - য় তাদের প্রথম প্রোডাক্ট তালিকাভুক্ত করে বা যোগ করে
 </li>
                            <li class="pb-2"><span class="font-bold">লিস্টিংয়ের পুরস্কার:</span> আপনি এক্সচেঞ্জের জন্য একটি আইটেম বা প্রোডাক্ট তালিকাভুক্ত করেন
সফল লেনদেনের জন্য পাওয়া পুরস্কার: আপনি একটি সফল লেনদেন সম্পূর্ণ করার পরে এটি পেতে পারেন
 </li>
                            <li class="pb-2"><span class="font-bold"> সফল লেনদেনের পুরস্কার:</span> আপনি একটি সফল বিনিময় লেনদেন সম্পূর্ণ করার পরে </span>
                            <li class="pb-2"><span class="font-bold"> মাসিক লেনদেনের পুরষ্কার:</span> gintaa - য় একটি নির্দিষ্ট সংখ্যক সফল মাসিক লেনদেন সম্পন্ন করার পরে এটি পাবেন  </li>

                           <li class=""> অথবা, আপনি সরাসরি gintaa কয়েন কিনতে পারেন এবং আপনার 'ওয়ালেট' রিচার্জ করতে পারেন।
 </li>
                            </ul>
                                </div>
                            </div>
                        </div>

                         <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingnineteen">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4
                             text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsenineteen"
                                aria-expanded="false" aria-controls="flush-collapsenineteen">
                            <span>gintaa কয়েনের সুবিধা কী?
</span>
                            </button>
                            </h2>
                            <div id="flush-collapsenineteen" class="accordion-collapse collapse" aria-labelledby="flush-headingnineteen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">
                                <p class="mb-2">উপরে উল্লিখিত বক্তব্যের হিসাবে, gintaa কয়েনগুলি পুনঃব্যবহারযোগ্য ভার্চুয়াল কয়েন বা ডিজিটাল টাকা ছাড়া আর কিছুই নয় যা আপনি একাধিক উদ্দেশ্যে ব্যবহার করতে পারেন। নীচে gintaa কয়েনের কয়েকটি সুবিধা রয়েছে:
</p>
                                <ul class="list-disc ml-3"> 
                                    <li class="mb-2"> প্রথম এবং সবচেয়ে আগে, এটি সুবিধাজনক। আপনাকে অন্য অর্থপ্রদানের বিকল্পগুলিতে স্যুইচ করতে হবে না। </li>
                                    <li class="mb-2"> উপার্জন এবং খরচ করা সহজ। আপনি সফল লেনদেন বা রেফারেল লিঙ্কের মাধ্যমে সেগুলি উপার্জন করতে পারবেন এবং আপনার পরবর্তী বিনিময় চুক্তিতে ব্যবহার করতে পারেন।</li>
                    <li class="mb-2"> দুটি বিনিময়কারী পক্ষের মধ্যে ফান্ড ট্রান্সফার সহজ হয়ে যায় </li>
                    <li class="mb-2"> আপনি যত খুশি gintaa কয়েন কিনতে পারেন। </li>
                    <li class="mb-2">আপনি আপনার gintaa ওয়ালেটে নিরাপদে gintaa কয়েন সংরক্ষণ করতে পারেন
</li>
                    <li class="mb-2"> gintaa কয়েন কিনতে বা ব্যবহার করতে কোনো অতিরিক্ত চাওয়া হয় না।
</li>
                    <li>একটি নির্দিষ্ট পরিমাণ gintaa কয়েন কিনুন, আপনার 'ওয়ালেটে' আরও উপার্জন করুন!</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        
                        




                        </div>
           


            </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FaqEnglish',
   methods:{
    isFromWeb(){
      if(this.$route.query.fromMobileApp === null){
        return false
      }else{
        return true
      }
    }
  }
});
</script>
<style scoped>
.accordion-button:not(.collapsed) {
    color: rgba(0,0,0,0.8) !important;
    background: none;
    box-shadow: none;
}
.accordion-item:first-of-type .accordion-button{
    border-radius: 0 !important;
    background: none !important;
}
h2{
    font-weight: 700;
}
button{
     font-weight: 700 !important;

}
</style>