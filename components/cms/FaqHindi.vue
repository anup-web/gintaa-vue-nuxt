<template>
             <div>
            <h1  v-if="isFromWeb()" class="text-lg md:text-xl lg:text-[24px] text-gray-900 font-semibold mb-4 lg:mb-7 text-center">लगातार पूछे जाने वाले प्रश्न</h1>
           
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
                                gintaa Coin is a reusable virtual coin that users can earn or acquire by getting engaged with gintaa app or the platform. Users can earn & redeem these coins to close exciting barter offers & deals on gintaa. The users can also buy gintaa coins. 
                                
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
                                 <span>जिंटा पर साइन अप कैसे करें? </span>
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">
                                <ul>
                                    <li class="mb-3"><span class="block font-bold pb-2">चरण 1 </span>
                                    ऊपर के मेनू बार में साइन अप पर क्लिक करें

                                    </li>

                                    <li class="mb-3"> 
                                        <span class="block font-bold pb-2">चरण 2</span>
                                   <span class="block"> एक वैध मोबाइल नंबर दर्ज करें, फिर लॉगिन पर क्लिक करें</span>
                                    </li>
                                    <li class="mb-3">
                                     <span class="block font-bold pb-2">चरण  3</span>
                                    आपके द्वारा दिए गए मोबाइल नंबर पर आपको एक ओटीपी प्राप्त होगा
                                    </li>
                                    <li class="mb-3">
                                     <span class="block font-bold pb-2">चरण 4</span>
                                  अपने फ़ोन नंबर पर प्राप्त किया गया ओटीपी दर्ज करें और आप पूरी तरह से आगे बढ़ने के लिए तैयार हैं
 
                                    </li>
                                    <!-- <li class="mb-3">
                                     <span class="block font-bold pb-2">चरण 5</span>
                                    अपनी मूल प्रोफ़ाइल जानकारी भरें; ईमेल पता वेरीफाई करें, और "अगला" पर क्लिक करें

                                    </li> -->
                                    <!-- <li class="mb-3">
                                     <span class="block font-bold pb-2">चरण 6</span>
                                    अपना स्थान और पता विवरण लिखे; फिर जानकारी को "जमा करें" और इस तरह आप जिंटा मंच का उपयोग करने के लिए पूरी तरह से तैयार हैं!
 
                                    </li> -->
                                <li class="font-bold">
                                    आप गूगल और फेसबुक जैसे अपने सोशल मीडिया प्रोफाइल का उपयोग करके भी जिंटा से जुड़ सकते हैं।
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
                                 <span>मैं अपना ईमेल पता कैसे अपडेट कर सकता हूं?</span>
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">
                                  <ul>
                                    <li class="mb-3"><span class="block font-bold pb-2">चरण 1</span>
ऊपर के मेनू बार में प्रोफ़ाइल आइकन या चिन्ह पर क्लिक करें
                                    </li>

                                    <li class="mb-3"> 
                                        <span class="block font-medium pb-2">चरण 2</span>
                                   <span class="block"> मेरा अकाउंट पर क्लिक करें</span>
                                    </li>
                                    <li class="mb-3">
                                     <span class="block font-medium pb-2">चरण 3</span>
                                    अपने प्राथमिक ईमेल पते के ठीक बगल में संपादित आइकन (यानी एडिट) [पेन आइकन] पर क्लिक करें

                                    </li>
                                    <li class="mb-3">
                                     <span class="block font-medium pb-2">चरण 4</span>
                                    अपना नया ईमेल पता लिखें

                                    </li>
                                    <li class="mb-3">
                                     <span class="block font-medium pb-2">चरण 5</span>
                                    वेरीफाई करें पर क्लिक करें
                                    </li>
                                    <li class="mb-3">
                                     <span class="block font-medium pb-2">चरण 6</span>
आपके दिए गए ईमेल आईडी पर जिंटा से एक वेरिफिकेशन ओटीपी भेजा जाएगा
                                    </li>
                                     <li class="mb-3">
                                     <span class="block font-medium pb-2">चरण 7</span>
                                   ओटीपी दर्ज करें और ओटीपी वेरीफाई करें पर क्लिक करें

                                    </li>
                                     <li class="mb-3">
                                     <span class="block font-medium pb-2">चरण 8</span>
                                   नया ईमेल पता सफलतापूर्वक जोड़ दिया जाएगा                                   </li>
                               
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
                             <span>क्या मुझे हर बार फ़ोन नंबर से साइन इन करने पर ओटीपी दर्ज करने की आवश्यकता है? </span>
                            </button>
                            </h2>
                            <div id="flush-collapsethree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingthree"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">हां, हर बार जब आप अपने फोन नंबर से साइन इन करते हैं, तो आपको सुरक्षा कारणों के लिए जिंटा से एक ओटीपी प्राप्त होगा। </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingfour">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour"
                                aria-expanded="false" aria-controls="flush-collapsefour">
                           <span>क्या मैं पंजीकरण या साइन अप के बिना जिंटा मंच का उपयोग कर सकता हूं?</span>
                            </button>
                            </h2>
                            <div id="flush-collapsefour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingfour"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">

बेशक, आप बिना साइन अप या कोई पंजीकरण किए जिंटा ब्राउज़ कर सकते हैं। हालांकि, अपनी पुराने सामान को लिस्ट करने या जोड़ने के लिए और उनकी अदला-बदली करने के लिए मैचेस खोजने के लिए, और अन्य विस्तृत सुविधाओं का उपयोग करने के लिए, जिंटा पर पंजीकरण करना अनिवार्य है।
 </div>
                            </div>
                        </div>

                          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingsix">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix"
                                aria-expanded="false" aria-controls="flush-collapsesix">
                                <span>क्या एक उपयोगकर्ता के पास कई जिंटा प्रोफाइल हो सकते हैं? </span>
                            </button>
                            </h2>
                            <div id="flush-collapsesix" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingsix"
                            data-bs-parent="#accordionFlushExample">
                          <div class="accordion-body text-xsb text-gray-500 py-4 ">हां, एक उपयोगकर्ता के पास कई जिंटा प्रोफाइल हो सकते हैं, बशर्ते कि उनमें से प्रत्येक एक प्रोफाइल वैध और अलग सेट के ईमेल पते या फोन नंबरों के साथ बनाया गया हो।</div> 
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingfive">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive"
                                aria-expanded="false" aria-controls="flush-collapsefive">
                            <span>क्या मैं अपनी उपयोगकर्ता प्रोफ़ाइल या यूजर प्रोफाइल को पूरा किए बिना अपनी लिस्टिंग पोस्ट कर सकता हूँ? </span>
                            </button>
                            </h2>
                            <div id="flush-collapsefive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingfive"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">

नहीं! आप अपने बारे में मूलभूत जानकारी भरे बिना कोई सामान की लिस्टिंग या जोड़ नहीं सकते हैं। जिंटा हमेशा उपयोगकर्ताओं को विश्वसनीयता के लिए अपने उपयोगकर्ता प्रोफाइल को पूरा करने के लिए प्रोत्साहित करता है। जिंटा पर साइन अप करते समय, पहली बार उपयोगकर्ताओं को अपने बारे में बुनियादी जानकारी भरने के लिए कहा जाता है। अन्यथा, वे साइन अप प्रक्रिया को पूरा नहीं कर सकते हैं और जिंटा पर किसी भी सामान की लिस्टिंग या उसे जोड़ नहीं सकते हैं।
</div>
                            </div>
                        </div>

                      

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingseven">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseseven"
                                aria-expanded="false" aria-controls="flush-collapseseven">
                                 <span>अगर मैं किसी भी सोशल मीडिया प्रोफाइल के माध्यम से लॉगिन/साइन अप करता हूं तो क्या जिंटा को मेरी सभी व्यक्तिगत जानकारी तक पहुंच प्राप्त होगी? </span>
                            </button>
                            </h2>
                            <div id="flush-collapseseven" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingseven"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">नहीं, पंजीकरण उद्देश्यों के लिए आपके द्वारा चुने गए किसी भी सोशल मीडिया द्वारा प्रदान की गई आपकी व्यक्तिगत जानकारी तक पहुंच प्राप्त करने के बारे में जिंटा बहुत चयनात्मक है। हालाँकि, आप हम पर भरोसा कर सकते हैं क्योंकि हम आपकी सुरक्षा और कुशलता को लेकर बहुत सख्त हैं। अधिक जानकारी के लिए, हमारी गोपनीयता नीति देखें। </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingeight">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseeight"
                                aria-expanded="false" aria-controls="flush-collapseeight">
                              <span>क्या जिंटा के साथ पंजीकरण करने के लिए आयु की कोई सख्त सीमा है?</span>
                            </button>
                            </h2>
                            <div id="flush-collapseeight" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingeight"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">जिंटा के साथ पंजीकरण करने के लिए, आपकी आयु कम से कम 18 वर्ष या उससे अधिक होनी चाहिए। </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingnine">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsenine"
                                aria-expanded="false" aria-controls="flush-collapsenine">
                             <span>जिंटा को मेरे स्थान तक पहुंच प्रदान करने की आवश्यकता क्यों है? </span>
                            </button>
                            </h2>
                            <div id="flush-collapsenine" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingnine"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">gजिंटा का उद्देश्य आपके आस-पास उपलब्ध सभी ट्रेंडिंग/ और हालिया ऑफ़र को दिखाना है। ऐसा करने के लिए, जिंटा को आपके स्थान तक पहुंच की आवश्यकता है। हालाँकि, आश्वस्त रहें कि आपकी व्यक्तिगत जानकारी हमेशा जिंटा के साथ सुरक्षित रहती है।</div> 
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingten">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseten"
                                aria-expanded="false" aria-controls="flush-collapseten">
                             <span>जिंटा के साथ कौन-कौन से लोग साइन अप कर सकता है?</span>
                            </button>
                            </h2>
                            <div id="flush-collapseten" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingten"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">जिंटा सभी के लिए है। कोई भी इस प्लेटफॉर्म से जुड़ सकता है। यह सामान्य उपयोगकर्ताओं से जुड़ने के लिए एक आदर्श मंच है।</div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingeleven">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseeleven"
                                aria-expanded="false" aria-controls="flush-collapseeleven">
                               <span>क्या मैं जिंटा को बिना किसी शुल्कः दिए इस्तेमाल कर सकता हूं?</span>
                            </button>
                            </h2>
                            <div id="flush-collapseeleven" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingeleven"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">हां, आप इस एप्लिकेशन का मुफ्त में उपयोग कर सकते हैं। हम कोई कमीशन, साइन अप या पंजीकरण शुल्क नहीं लेते हैं। </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingtwelve">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 
                            text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwelve"
                                aria-expanded="false" aria-controls="flush-collapsetwelve">
                                <span>क्या मैं अन्य उपयोगकर्ताओं के साथ संवाद कर सकता हूं?</span>
                            </button>
                            </h2>
                            <div id="flush-collapsetwelve" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingtwelve"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-xsb text-gray-500 py-4 ">आप सीधे चैट, कॉल कर सकते हैं या अन्य उपयोगकर्ताओं को उनकी लिस्टिंग के बारे में संदेश भेज सकते हैं और अपनी पसंद के अनुसार ऑफ़र सुझा सकते हैं। हम ऑडियो और वीडियो कॉल के साथ ऑनलाइन और ऑफलाइन दोनों संदेशों का समर्थन करते हैं।</div>
                            </div>
                        </div>
                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingthirteen">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4
                             text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsethirteen"
                                aria-expanded="false" aria-controls="flush-collapsethirteen">
                            <span>अगर कोई मेरी लिस्टिंग को पसंदीदा के रूप में चिह्नित करता है तो क्या होगा?</span>
                            </button>
                            </h2>
                            <div id="flush-collapsethirteen" class="accordion-collapse collapse" aria-labelledby="flush-headingthirteen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">कोई भी उपयोगकर्ता भविष्य के संदर्भों के लिए या भविष्य में खरीदने के विचार से आपकी लिस्टिंग को पसंदीदा के रूप में चिह्नित कर सकता है। हालाँकि, हर बार जब कोई उपयोगकर्ता ऐसा करता है, तो आपको उसके अनुसार सूचित किया जाएगा।

                                </div>
                            </div>
                        </div>
                         <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingfourteen">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4
                             text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefourteen"
                                aria-expanded="false" aria-controls="flush-collapsefourteen">
                            <span>क्या मैं अन्य प्लेटफॉर्म पर अपनी लिस्टिंग साझा कर सकता हूं?</span>
                            </button>
                            </h2>
                            <div id="flush-collapsefourteen" class="accordion-collapse collapse" aria-labelledby="flush-headingfourteen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">हां, हम चाहते हैं कि प्रत्येक उपयोगकर्ता इस प्लेटफॉर्म के माध्यम से अधिकतम दृश्यता प्राप्त करे यानी अधिक से अधिक लोगो को इस मंच के बारे में पता चले। इसलिए, आप किसी भी समय विभिन्न सोशल मीडिया प्लेटफॉर्म पर अपनी लिस्टिंग साझा कर सकते हैं।
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingfifteen">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4
                             text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefifteen"
                                aria-expanded="false" aria-controls="flush-collapsefifteen">
                            <span>प्रस्ताव यानी ऑफर क्या है?</span>
                            </button>
                            </h2>
                            <div id="flush-collapsefifteen" class="accordion-collapse collapse" aria-labelledby="flush-headingfifteen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">जब आप जिंटा पर एक लिस्टिंग पोस्ट करते हैं, तो प्रत्येक पंजीकृत, साथ ही अपंजीकृत उपयोगकर्ता, बिना किसी प्रतिबंध के लिस्टिंग विवरण देख सकता है। हालाँकि, यदि कोई अन्य उपयोगकर्ता आपके प्रस्ताव में रुचि रखता है, तो वह उसी के लिए एक प्रस्ताव का सुझाव दे सकता है, बशर्ते कि वह एक पंजीकृत जिंटा उपयोगकर्ता हो।
                                </div>
                            </div>
                        </div>
                         <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingsixteen">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4
                             text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesixteen"
                                aria-expanded="false" aria-controls="flush-collapsesixteen">
                            <span>जिंटा कॉइन (कॉइन्स) क्या है?</span>
                            </button>
                            </h2>
                            <div id="flush-collapsesixteen" class="accordion-collapse collapse" aria-labelledby="flush-headingsixteen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">जिंटा कॉइन एक पुन: प्रयोज्य वर्चुअल यानी आभासी मुद्रा है जिसे उपयोगकर्ता जिंटा ऐप या मंच का उपयोग करते हुए कमाते या प्राप्त कर सकते हैं। रोमांचक वस्तु विनिमय यानी बार्टर ऑफ़र को बंद करने के लिए वास्तविक नकदी का उपयोग करने के बजाय इन सिक्कों को अर्जित और रिडीम कर सकते हैं। उपयोगकर्ता रोमांचक सौदों को प्राप्त करने के लिए तुरंत जिंटा कॉइन खरीद सकते हैं।
                                </div>
                            </div>
                        </div>
                         <!-- <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingseventeen">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4
                             text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseseventeen"
                                aria-expanded="false" aria-controls="flush-collapseseventeen">
                            <span>What is gintaa Coin(s)? </span>
                            </button>
                            </h2>
                            <div id="flush-collapseseventeen" class="accordion-collapse collapse" aria-labelledby="flush-headingseventeen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">gintaa Coin is a reusable virtual coin that users can earn or acquire while using the gintaa app or the platform. Users can earn and redeem these coins instead of using real cash to close exciting barter offers & deals on gintaa. Users can purchase gintaa coins instantly to bag exciting deals.
                                </div>
                            </div>
                        </div> -->

                        <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                            <h2 class="accordion-header mb-0" id="flush-headingeightteen">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4
                             text-sm text-gray-700 text-left bg-white border-0 rounded-none transition
                            focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseeightteen"
                                aria-expanded="false" aria-controls="flush-collapseeightteen">
                            <span>मैं जिंटा कॉइन कैसे कमा सकता हूँ? </span>
                            </button>
                            </h2>
                            <div id="flush-collapseeightteen" class="accordion-collapse collapse" aria-labelledby="flush-headingeightteen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500"><p>आपके जिंटा वॉलेट में जिंटा कॉइन कमाने के निम्नलिखित अवसर हैं:</p>
                            <ul>
                            <li class="pb-2"><span class="font-bold">ज्वाइनिंग इनाम: </span>  जब आप पहली बार एक नए उपयोगकर्ता के रूप में जिंटा पर साइन अप करें </li>
                            <li class="pb-2"><span class="font-bold">रेफरल इनाम:</span>  आप अपने रेफरल लिंक के साथ दूसरों को जिंटा में शामिल होने के लिए आमंत्रित करते हैं, और आमंत्रित व्यक्ति ऐसा करते हुए जिंटा पर अपना पहले सामान की लिस्टिंग करते है या अन्य सामानो के बीच उन्हें जोड़ते हैं। </li>
                            <li class="pb-2"><span class="font-bold">लिस्टिंग इनाम:</span>   आप वस्तु या सामान को वस्तु विनिमय के लिए लिस्ट करते हैं </li>
                            <li class="pb-2"><span class="font-bold"> सफल लेनदेन इनाम:</span>  एक सफल वस्तु विनिमय के लेनदेन पूरा करने के बाद</li>
                            <li class="pb-2"><span class="font-bold"> मासिक वस्तु विनिमय लेनदेन पुरस्कार:</span>  जिंटा पर एक निश्चित संख्या में सफल मासिक वस्तु विनिमय लेनदेन पूरा करने के बाद</li>

                           <li class=""> या, आप सीधे जिंटा कॉइन खरीद सकते हैं और अपने 'वॉलेट' को रिचार्ज कर सकते हैं। </li>
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
                            <span>जिंटा कॉइन्स के क्या फायदे हैं?</span>
                            </button>
                            </h2>
                            <div id="flush-collapsenineteen" class="accordion-collapse collapse" aria-labelledby="flush-headingnineteen"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4  text-xsb text-gray-500">
                                <p class="mb-2">जैसा कि ऊपर उल्लेख किया गया है,जिंटा कॉइन्स पुन: प्रयोज्य आभासी सिक्कों या डिजिटल नकदी है जिनका उपयोग आप कई उद्देश्यों के लिए कर सकते हैं। नीचे जिंटा कॉइन्स के कुछ लाभ दिए गए हैं:</p>
                                <ul class="list-disc ml-3"> 
                                    <li class="mb-2">  सबसे पहले और सबसे महत्वपूर्ण, यह सुविधाजनक है। आपको अन्य भुगतान विकल्पों पर जाने की आवश्यकता नहीं है।</li>
<li class="mb-2"> उन्हें कमाना और रिडीम करना आसान है। आप उन्हें सफल लेनदेन या रेफरल लिंक के माध्यम से कमा सकते हैं और अपने अगले वस्तु विनिमय सौदे में उनका उपयोग कर सकते हैं। </li>
<li class="mb-2">दो बार्टरिंग पार्टियों के बीच फंड ट्रांसफर आसान हो जाता है</li>
<li class="mb-2"> आप जितने चाहें जिंटा कॉइन्स खरीद सकते हैं।</li>
<li class="mb-2"> आप अपने जिंटा वॉलेट में जिंटा कॉइन्स को सुरक्षित और कुशलता से जमा कर सकते हैं</li>
<li class="mb-2"> जिंटा कॉइन्स खरीदने या उपयोग करने के लिए कोई अतिरिक्त शुल्क नहीं लिया जाता है।</li>
<li class="mb-2"> एक निश्चित मात्रा में जिंटा कॉइन्स खरीदें, अपने 'वॉलेट' में अधिक कमाएं!</li>
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