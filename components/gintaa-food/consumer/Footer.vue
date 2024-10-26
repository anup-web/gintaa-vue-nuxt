<template>
  <section class="footer-trust relative bg-white z-20">

    <div class="trust-section  p-5  bg-gray-200">
      <div class="container  max-w-8xl mx-auto  md:px-8 2xl:px-16 relative">
        <div class="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-5 ">
          <div class="icon-name-trust text-center sm:border-r border-gray-300 ">
            <div class="icon-trust flex justify-center w-full h-11 items-center">
              <img src="~assets/images/food/consumer/lowest_price.svg" class="w-[40px] h-[40px]" alt="Lowest Menu Price Online">
            </div>
            <div class="icon-trust-name font-medium text-xs sm:text-sm mt-3 text-gray-700"> {{ $t('lowestMenuPriceOnline') }}</div>
          </div>
          <div class="icon-name-trust text-center sm:border-r border-gray-300 ">
            <div class="icon-trust flex justify-center w-full h-11 items-center">
              <img src="~assets/images/food/consumer/top_cuisines.svg" class="w-[42px] h-[42px]" alt="Top Cuisines Near You">
            </div>
            <div class="icon-trust-name font-medium text-xs sm:text-sm mt-3 text-gray-700">{{ $t('topCuisinesNearYou') }}</div>
          </div>
          <div class="icon-name-trust text-center sm:border-r border-gray-300 ">
            <div class="icon-trust flex justify-center w-full h-11 items-center">
              <img src="~assets/images/food/consumer/fast-delivery.svg" class="w-[44px] h-[44px]" alt="Fast Delivery">
            </div>
            <div class="icon-trust-name font-medium text-xs sm:text-sm mt-3 text-gray-700">{{ $t('fastDelivery') }}</div>
          </div>
          <div class="icon-name-trust text-center sm:border-r border-gray-300 ">
            <div class="icon-trust flex justify-center w-full h-11 items-center">
              <img src="~assets/images/food/consumer/callsupport.svg" alt="Help & Support">
            </div>
            <div class="icon-trust-name font-medium text-xs sm:text-sm mt-3 text-gray-700">{{ $t('helpSupport') }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div v-if="remoteData.web_home_footer && remoteData.web_home_footer.payload" class="trust-section  p-5  bg-gray-200">
      <div class="container  max-w-8xl mx-auto  md:px-8 2xl:px-16 relative">
        <div class="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-5 ">
          <div v-for="(item, index) in remoteData.web_home_footer.payload" :key="index + item.title" class="icon-name-trust text-center sm:border-r border-gray-300 ">
            <div class="icon-trust flex justify-center w-full h-11 items-center">
              <img :src="item.image_url" :alt="item.title">
            </div>
            <div class="icon-trust-name font-medium text-xs sm:text-sm mt-3 text-gray-700">
              {{ item.title }}
            </div>
          </div>

        </div>
      </div>
    </div> -->

    <div class="footer-section pt-8 border-t border-slate-100">
      <div class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 relative">
        <div
          class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-5 md:gap-9 xl:gap-5 pb-7 md:pb-14 lg:pb-8 2xl:pb-8 3xl:pb-8 lg:mb-0.5 2xl:mb-0 3xl:-mb-1">
          <div class="footerlink hidden lg:block">
            <h4 class="text-heading text-sm  text-gray-700 font-medium mb-5 2xl:mb-6 3xl:mb-7">
              {{ $t('aboutUs') }}
            </h4>
            <ul class="text-xs text-gray-500  text-body flex flex-col space-y-3 lg:space-y-3.5">
              <li class="flex items-baseline">
                <a :href="localePath('/legal/gintaa-food/about-us')" target="_blank"
                  class="transition-colors duration-200 hover:text-green">{{ $t('aboutGintaa') }}</a>
              </li>
              <li class="flex items-baseline">
                <a href="https://asconsoftech.com/index.html#career-section" target="_blank"
                  class="transition-colors duration-200 hover:text-green">{{ $t('career') }}</a>
              </li>
              <!-- <li class="flex items-baseline">
                <a :href="localePath('/about/press-release')" target="_blank"
                  class="transition-colors duration-200 hover:text-green">{{ $t('pressRelease') }}</a>
              </li> -->
              <li class="flex items-baseline">
                <a href="https://blog.gintaa.com/" target="_blank"
                  class="transition-colors duration-200 hover:text-green">{{ $t('blogsite') }}</a>
              </li>
              <li class="flex items-baseline">
                <a :href="localePath('/legal/gintaa-food/lowest-menu-price')" target="_blank"
                  class="transition-colors duration-200 hover:text-green">{{ $t('lowestMenuPrice') }}</a>
              </li>
            </ul>
          </div>

          <div class="footerlink hidden lg:block">
            <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-6 3xl:mb-7">
              {{ $t('needHelp') }}
            </h4>
            <ul class="text-xs text-gray-500  text-body flex flex-col space-y-3 lg:space-y-3.5">
              <li class="flex items-baseline">
                <a :href="localePath('/needhelp/payment')" target="_blank"
                  class="transition-colors duration-200 hover:text-green"> {{ $t('gintaaCoin') }} </a>
              </li>
              <!-- <li class="flex items-baseline">
                <a :href="localePath('/about/how-gintaa-works')" target="_blank"
                  class="transition-colors duration-200 hover:text-green">{{ $t('howItWorks') }}</a>
              </li> -->
              <li class="flex items-baseline">
                <a :href="localePath('/needhelp/faq')" target="_blank"
                  class="transition-colors duration-200 hover:text-green">{{ $t('faq') }}</a>
              </li>
            </ul>
          </div>
          <div class="footerlink hidden lg:block">
            <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-6 3xl:mb-7">
              {{ $t('legal') }}
            </h4>
            <ul class="text-xs text-gray-500  text-body flex flex-col space-y-3 lg:space-y-3.5">
              <li class="flex items-baseline">
                <a :href="localePath('/legal/privacy-policy')" target="_blank"
                  class="transition-colors duration-200 hover:text-green"> {{ $t('privacyPolicy') }}</a>
              </li>
              <li class="flex items-baseline">
                <a :href="localePath('/legal/gintaa-food/terms-condition')" target="_blank"
                  class="transition-colors duration-200 hover:text-green">{{ $t('termsConditions') }}</a>
              </li>
              <li class="flex items-baseline">
                <a :href="localePath('/legal/cookie-policy')" target="_blank"
                  class="transition-colors duration-200 hover:text-green">{{ $t('cookiePolicy') }}</a>
              </li>
            </ul>
          </div>

          <div class="footerlink hidden lg:block">
            <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-6 3xl:mb-7">Top Categories</h4>
            <ul  class="text-xs text-gray-500  text-body flex flex-col space-y-3 lg:space-y-3.5">
              <li v-for="(item, i) in categoryList" :key="i" :value="item.id" class="flex items-baseline"><a :href="localePath(`/gintaa-food/search?cid=${item.id}`)"
                  class="transition-colors duration-200 hover:text-green">{{item.name}}</a></li>              
            </ul>
          </div>
          <!-- <div v-if="remoteData.web_home_top_categories" class="footerlink hidden lg:block">
            <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-6 3xl:mb-7">              
              {{ remoteData.web_home_top_categories.title }}
            </h4>
            <ul v-if="remoteData.web_home_top_categories.payload" class="text-xs text-gray-500  text-body flex flex-col space-y-3 lg:space-y-3.5">
              <li
                v-for="(item, index) in remoteData.web_home_top_categories.payload"
                v-if="index <= 5"
                :key="index + item.title"
                class="flex items-baseline"
              >
                <a :href="item.redirect_url && item.redirect_url != '' ? item.redirect_url : 'javascript:;'" class="transition-colors duration-200 hover:text-green">
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </div> -->

          <div class="footerlink hidden lg:block">
            <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-6 3xl:mb-7">
              {{ $t('address') }}
            </h4>
            <ul class="text-xs text-gray-500  text-body flex flex-col space-y-3 lg:space-y-3.5">
              <li class="flex items-baseline">
                <span class="transition-colors duration-200 leading-6">
                  {{ $t('addressDetailsPt_01') }}<br> {{ $t('addressDetailsPt_02') }}<br>{{ $t('addressDetailsPt_03') }}

                </span>
              </li>
              <li>{{ $t('cin') }} : {{ $t('cinNu') }}</li>
              <li class="flex items-baseline">
                <a href="tel:08069188100" class="transition-colors duration-200 hover:text-green"> {{ $t('phone') }}</a>
              </li>
              <li class="flex items-baseline">
                <a href="mailto:customer@gintaa.com" class="transition-colors duration-200 hover:text-green">{{
                  $t('emailFooter') }}</a>
              </li>
            </ul>
          </div>
          <div class="footerlink w-full grid grid-cols-2 md:block gap-5 md:gap-0">
            <div v-if="remoteData.web_home_download_our_app" class="flex flex-col lg:block">
              <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-4 3xl:mb-4">
                {{ $t('downloadApp') }}
                <!-- {{remoteData.web_home_download_our_app.title}} -->
              </h4>
              <div class="flex  items-center">
                <div v-if="remoteData.web_home_download_our_app.google_play_store" class="mr-5">
                  <a href="https://play.google.com/store/apps/details?id=com.asconsoft.gintaa.prod" target="_blank">
                    <img :src="remoteData.web_home_download_our_app.google_play_store.image" alt="google play store"
                      class=" w-28"></a>
                </div>
                <div v-if="remoteData.web_home_download_our_app.ios_app_store">
                  <a href="https://apps.apple.com/in/app/gintaa/id1583773926" target="_blank">
                    <img :src="remoteData.web_home_download_our_app.ios_app_store.image" alt="apple store" class=" w-28">
                  </a>
                </div>
              </div>
            </div>
            <div class="tutorial mt-0 flex lg:block flex-col sm:mt-0 md:mt-5 lg:mt-5 xl:mt-5 2xl:mt-5">
              <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-4 3xl:mb-4">
                {{ $t('tutorial') }}
              </h4>
              <div class="flex  items-center" @click="clickOnAcademy()">
                <div>
                  <a href="https://academy.gintaa.com/" target="_blank"><img src="~/assets/images/academia-logo2.png"
                      alt="gintaa academy" class=""></a>
                </div>
              </div>
            </div>
            <div class="connect-with-us md:mt-5">
              <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-4 3xl:mb-4">
                {{ $t('connectUs') }}
              </h4>
              <ul class="flex w-full">
                <li class="mr-2">
                  <a href="https://www.facebook.com/people/Gintaa-Food/100091810234665/" target="_blank"
                    class="fb w-8 h-8  bg-facebook rounded flex items-center justify-center transition-colors duration-200 hover:bg-green">
                    <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M8.25 7.33333H5.5V11H8.25V22H12.8333V11H16.1718L16.5 7.33333H12.8333V5.80525C12.8333 4.92983 13.0093 4.58333 13.8554 4.58333H16.5V0H13.0093C9.713 0 8.25 1.45108 8.25 4.23042V7.33333Z"
                        fill="white" />
                    </svg>

                  </a>
                </li>
                <li class="mr-2">
                  <a href="https://twitter.com/gintaafood" target="_blank"
                    class="tw w-8 h-8  bg-twitter rounded flex items-center justify-center transition-colors duration-200 hover:bg-green">
                    <svg width="16" height="14" viewBox="0 0 22 19" fill="none">
                      <path
                        d="M22 2.36457C21.1906 2.7239 20.3207 2.9659 19.4077 3.07499C20.3399 2.51674 21.0558 1.63215 21.3923 0.577986C20.5205 1.09499 19.5543 1.47082 18.5258 1.6734C17.7036 0.796153 16.5293 0.247986 15.2313 0.247986C12.3172 0.247986 10.1759 2.96682 10.8341 5.78924C7.084 5.60132 3.75833 3.80465 1.53175 1.0739C0.34925 3.10249 0.9185 5.75624 2.92783 7.10007C2.189 7.07624 1.49233 6.87365 0.884583 6.5354C0.835083 8.62632 2.33383 10.5825 4.5045 11.0179C3.86925 11.1902 3.1735 11.2306 2.46583 11.0949C3.03967 12.8879 4.70617 14.1923 6.6825 14.229C4.785 15.7167 2.39433 16.3813 0 16.099C1.99742 17.3796 4.37067 18.1267 6.919 18.1267C15.2992 18.1267 20.0337 11.0491 19.7477 4.70115C20.6296 4.06407 21.395 3.26932 22 2.36457V2.36457Z"
                        fill="white" />
                    </svg>

                  </a>
                </li>
                <li class="mr-2">
                  <a href="https://www.linkedin.com/showcase/gintaa-food/" target="_blank"
                    class="li w-8 h-8  bg-linkedin rounded flex items-center justify-center transition-colors duration-200 hover:bg-green">
                    <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M4.565 2.29167C4.565 3.55758 3.5475 4.58333 2.29167 4.58333C1.03583 4.58333 0.0183333 3.55758 0.0183333 2.29167C0.0183333 1.02667 1.03583 0 2.29167 0C3.5475 0 4.565 1.02667 4.565 2.29167ZM4.58333 6.41667H0V21.0833H4.58333V6.41667ZM11.9002 6.41667H7.34617V21.0833H11.9011V13.3843C11.9011 9.10342 17.4277 8.75325 17.4277 13.3843V21.0833H22V11.7966C22 4.57325 13.8215 4.83633 11.9002 8.39208V6.41667Z"
                        fill="white" />
                    </svg>

                  </a>
                </li>
                <li class="mr-2">
                  <a href="https://instagram.com/gintaa_food?igshid=MmJiY2I4NDBkZg==" target="_blank"
                    class="in w-8 h-8  bg-insta rounded bg-gradient-to-r from-instaf via-instam to-instal flex items-center justify-center transition-colors duration-200 hover:from-green hover:to-green">
                    <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M11 1.98275C13.937 1.98275 14.2853 1.99375 15.4458 2.04692C18.4268 2.18258 19.8192 3.597 19.9549 6.556C20.0081 7.71558 20.0182 8.06392 20.0182 11.0009C20.0182 13.9388 20.0072 14.2863 19.9549 15.4458C19.8183 18.4021 18.4296 19.8192 15.4458 19.9549C14.2853 20.0081 13.9388 20.0191 11 20.0191C8.063 20.0191 7.71467 20.0081 6.55508 19.9549C3.56675 19.8183 2.18167 18.3975 2.046 15.4449C1.99283 14.2853 1.98183 13.9379 1.98183 11C1.98183 8.063 1.99375 7.71558 2.046 6.55508C2.18258 3.597 3.57133 2.18167 6.55508 2.046C7.71558 1.99375 8.063 1.98275 11 1.98275V1.98275ZM11 0C8.01258 0 7.63858 0.0128333 6.46525 0.066C2.47042 0.249333 0.25025 2.46583 0.0669167 6.46433C0.0128333 7.63858 0 8.01258 0 11C0 13.9874 0.0128333 14.3623 0.066 15.5357C0.249333 19.5305 2.46583 21.7507 6.46433 21.934C7.63858 21.9872 8.01258 22 11 22C13.9874 22 14.3623 21.9872 15.5357 21.934C19.5268 21.7507 21.7525 19.5342 21.9331 15.5357C21.9872 14.3623 22 13.9874 22 11C22 8.01258 21.9872 7.63858 21.934 6.46525C21.7543 2.47408 19.5351 0.25025 15.5366 0.0669167C14.3623 0.0128333 13.9874 0 11 0V0ZM11 5.3515C7.88058 5.3515 5.3515 7.88058 5.3515 11C5.3515 14.1194 7.88058 16.6494 11 16.6494C14.1194 16.6494 16.6485 14.1203 16.6485 11C16.6485 7.88058 14.1194 5.3515 11 5.3515ZM11 14.6667C8.97508 14.6667 7.33333 13.0258 7.33333 11C7.33333 8.97508 8.97508 7.33333 11 7.33333C13.0249 7.33333 14.6667 8.97508 14.6667 11C14.6667 13.0258 13.0249 14.6667 11 14.6667ZM16.8722 3.80875C16.1425 3.80875 15.5513 4.4 15.5513 5.12875C15.5513 5.8575 16.1425 6.44875 16.8722 6.44875C17.6009 6.44875 18.1912 5.8575 18.1912 5.12875C18.1912 4.4 17.6009 3.80875 16.8722 3.80875Z"
                        fill="white" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="absolute bottom-6 w-[150px] right-5 lg:right-auto sm:bottom-6 md:bottom-6 lg:bottom-2 xl:bottom-6 2xl:bottom-6 language-section">
          <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-6 3xl:mb-7">
            {{ $t('languages') }}
          </h4>
          <div class="group text-xsb relative">
            <a href="javascript:void(0);"
              class="text-xsb text-gray-700 flex items-center  w-full border border-gray-300 p-2 rounded relative mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
                  fill="#7D7F81" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z"
                  fill="#7D7F81" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.00023 12C9.06877 15.0748 10.1263 18.0352 12 20.4492C13.8737 18.0352 14.9312 15.0748 14.9998 12C14.9312 8.92516 13.8737 5.96484 12 3.5508C10.1263 5.96484 9.06877 8.92516 9.00023 12ZM12 2L11.2617 1.32558C8.59689 4.24291 7.08251 8.02885 7.00022 11.9792C6.99993 11.9931 6.99993 12.0069 7.00022 12.0208C7.08251 15.9711 8.59689 19.7571 11.2617 22.6744C11.4511 22.8818 11.7191 23 12 23C12.2809 23 12.5489 22.8818 12.7383 22.6744C15.4031 19.7571 16.9175 15.9711 16.9998 12.0208C17.0001 12.0069 17.0001 11.9931 16.9998 11.9792C16.9175 8.02885 15.4031 4.24291 12.7383 1.32558L12 2Z"
                  fill="#7D7F81" />
              </svg>
              {{ $i18n.locale == "en" ? "English" : $i18n.locale == "hi" ? 'हिन्दी' : 'বাংলা' }}

              <span class="absolute right-2 top-4">
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.90002 1.5L5.80002 5.4L9.70002 1.5" stroke="#7D7F81" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </span>
            </a>
            <div class=" absolute hidden   pt-[5px] group-hover:block w-[152px] left-0 ">
              <ul class="drop  bg-white text-gray-600  rounded shadow border border-gray-300">
                <li v-for="locale in availableLocales" :key="locale.code" class="text-xsb">

                  <a :href="switchLocalePath(locale.code)" @click="setCurrentLanguagePreferance(locale)"
                    class=" border-b bg-white rounded-t font-bold text-gray-600 border-gray-200 hover:text-firoza py-3 px-3  whitespace-no-wrap flex items-center">

                    <svg v-if="locale.code == 'en'" width="14" height="16" viewBox="0 0 16 18" fill="none"
                      xmlns="http://www.w3.org/2000/svg" class="mr-4">
                      <path
                        d="M8.29688 2.44922L2.64844 18H0.339844L6.84375 0.9375H8.33203L8.29688 2.44922ZM13.0312 18L7.37109 2.44922L7.33594 0.9375H8.82422L15.3516 18H13.0312ZM12.7383 11.6836V13.5352H3.15234V11.6836H12.7383Z"
                        fill="#616364" />
                    </svg>

                    <svg v-if="locale.code == 'hi'" width="20" height="20" viewBox="0 0 22 22" fill="none"
                      xmlns="http://www.w3.org/2000/svg" class="mr-4">
                      <path
                        d="M18.3535 2.75H13.7702C13.527 2.75 13.2939 2.84658 13.122 3.01849C12.9501 3.19039 12.8535 3.42355 12.8535 3.66667C12.8535 3.90978 12.9501 4.14294 13.122 4.31485C13.2939 4.48676 13.527 4.58333 13.7702 4.58333H15.1451V10.0833H10.6077C11.214 9.29449 11.5444 8.32827 11.5478 7.33333C11.5478 6.3244 11.2149 5.34366 10.6007 4.54322C9.98648 3.74279 9.12532 3.16738 8.15077 2.90625C7.17621 2.64512 6.14272 2.71285 5.21058 3.09894C4.27845 3.48504 3.49975 4.16791 2.99527 5.04167C2.93434 5.14591 2.89462 5.26117 2.87838 5.38081C2.86214 5.50046 2.86971 5.62213 2.90064 5.73885C2.93157 5.85556 2.98527 5.96501 3.05863 6.06091C3.132 6.1568 3.22359 6.23726 3.32815 6.29765C3.4327 6.35803 3.54816 6.39716 3.66789 6.41279C3.78761 6.42842 3.90925 6.42023 4.0258 6.3887C4.14235 6.35717 4.25153 6.30291 4.34705 6.22906C4.44257 6.1552 4.52255 6.0632 4.5824 5.95833C4.82373 5.54022 5.17087 5.19299 5.58893 4.95156C6.00699 4.71013 6.48124 4.583 6.964 4.58295C7.44677 4.5829 7.92104 4.70992 8.33915 4.95126C8.75727 5.1926 9.10448 5.53975 9.34591 5.95781C9.58733 6.37588 9.71445 6.85012 9.7145 7.33289C9.71454 7.81565 9.5875 8.28993 9.34616 8.70803C9.10481 9.12614 8.75766 9.47335 8.33959 9.71477C7.92152 9.95618 7.44727 10.0833 6.96451 10.0833C6.72139 10.0833 6.48823 10.1799 6.31632 10.3518C6.14442 10.5237 6.04784 10.7569 6.04784 11C6.04784 11.2431 6.14442 11.4763 6.31632 11.6482C6.48823 11.8201 6.72139 11.9167 6.96451 11.9167C7.44721 11.9168 7.92138 12.0439 8.33938 12.2853C8.75737 12.5268 9.10445 12.8739 9.34574 13.292C9.58703 13.7101 9.71403 14.1843 9.71397 14.667C9.71391 15.1497 9.5868 15.6239 9.34541 16.0419C9.10401 16.4599 8.75685 16.807 8.3388 17.0483C7.92075 17.2897 7.44654 17.4167 6.96384 17.4167C6.48113 17.4166 6.00694 17.2896 5.58891 17.0482C5.17089 16.8068 4.82375 16.4597 4.5824 16.0417C4.46045 15.832 4.26034 15.6792 4.02593 15.6168C3.79151 15.5544 3.54192 15.5875 3.33186 15.7088C3.1218 15.8301 2.96841 16.0298 2.90531 16.264C2.84222 16.4982 2.87456 16.7479 2.99525 16.9583C3.49973 17.8321 4.27842 18.515 5.21057 18.9011C6.14271 19.2872 7.1762 19.3549 8.15076 19.0938C9.12532 18.8327 9.98649 18.2572 10.6007 17.4568C11.2149 16.6564 11.5478 15.6756 11.5478 14.6667C11.5444 13.6717 11.214 12.7055 10.6077 11.9167H15.1451V18.3333C15.1451 18.5764 15.2417 18.8096 15.4136 18.9815C15.5855 19.1534 15.8187 19.25 16.0618 19.25C16.3049 19.25 16.5381 19.1534 16.71 18.9815C16.8819 18.8096 16.9785 18.5764 16.9785 18.3333V4.58333H18.3535C18.5966 4.58333 18.8298 4.48676 19.0017 4.31485C19.1736 4.14294 19.2701 3.90978 19.2701 3.66667C19.2701 3.42355 19.1736 3.19039 19.0017 3.01849C18.8298 2.84658 18.5966 2.75 18.3535 2.75V2.75Z"
                        fill="black" />
                    </svg>

                    <svg v-if="locale.code == 'bn'" width="20" height="20" version="1.1" id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve" class="mr-4">
                      <g id="XMLID_1_">
                        <g id="XMLID_28_">
                          <path id="XMLID_29_"
                            d="M18,17h-2.5v-0.1c0-1.9-0.8-2.8-2.5-2.8h-1c-1.1,1.1-2.5,1.6-4.2,1.6c-1.9,0-3.4-0.6-4.5-1.7
                              c-1.1-1.1-1.7-2.8-1.7-4.9c0-0.7,0-1.4,0.1-2h2.4C4,7.7,3.9,8.4,3.9,9.1c0,1.4,0.3,2.5,1,3.3c0.7,0.8,1.6,1.1,2.8,1.1
                              c1.1,0,1.9-0.3,2.5-1c0.6-0.6,0.9-1.5,0.9-2.5c0-0.6-0.1-1.1-0.4-1.5C10.5,8.2,10.1,8,9.6,8C9.3,8,8.9,8.2,8.7,8.5
                              C8.5,8.8,8.4,9.1,8.4,9.6c0,0.5,0.1,0.9,0.2,1.3H6.4c-0.2-0.5-0.3-1-0.3-1.6c0-1,0.3-1.8,0.9-2.4C7.7,6.3,8.5,6,9.6,6
                              c1.2,0,2.2,0.4,2.9,1.2c0.7,0.8,1.1,1.8,1.1,3c0,0.6-0.1,1.3-0.3,1.9c1,0,1.8,0.3,2.3,1V5H0V3h20v2h-2V17z" />
                        </g>
                      </g>
                    </svg>

                    {{ locale.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copy-right border-t border-gray-300 pt-5 pb-2 sm:pb-20 md:pb-5 mb-2 sm:mb-0">
        <div
          class="flex flex-col-reverse md:flex-row text-center md:justify-between mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <p class="text-gray-500 text-xs  leading-6">
            &copy; {{ $t('copyRight') }}
            <a href="https://asconsoftech.com/" target="_blank"
              class="font-semibold text-gray-700 transition-colors duration-200 ease-in-out hover:text-green"> {{
                $t('asconSoftech') }} </a>
          </p>

          <div>
            <p class="text-gray-500 text-xs  leading-6">
              {{ $t('grievanceOfficer') }}: {{ $t('grievanceDetails') }}
            </p>
          </div>
        </div>
      </div>
    </div>




  </section>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'Footer',
  props: ['iscretaList', 'qValueDraft', 'qValuePublished', 'offerCountForFooter'],
  watch: {

    offerCountForFooter(newValue, oldValue) {
      if (newValue) {
        this.checkPage();
      }

    }
  },
  // async fetch () {
  //   await this.fetchAndProcessCmsData()
  // },
  data() {
    return {
      isListingDetails: true,
      offerDetails: true,
      myDashboard: true,
      remoteData: {
        web_home_top_categories: {},
        web_home_download_our_app: {},
        web_home_footer: {}
      },
      latestDraft: '',
      urlName: '',
      authenticatedUser: null,
      CDN_BASE_URL: this.$config.CDN_BASE_URL,
      remotConfigSuffix: this.$config.remotConfigSuffix,
      gcpSubFolder: this.$config.gcpSubFolder,
      addProductArray: ['index', 'my-offers', 'my-listings', 'exchange', 'p-seoid-pid'], //"p-seoid-pid" means listing details page  
      showAddProductButton: false,
      showChatWindow: false,
      dealChats: [],
      categoryList : []
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapState({
      openAddress: state => state.address.addAddressPopup.openAddress
    }),
    ...mapState({
      openChat: state => state.chat.openChatPopup.openChat
    }),
    ...mapState({
      chatRoomPath: state => state.chat.openChatPopup.chatRoomPath
    }),
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },

    getUrl() {
      if (this.authUser == null) {
        return '/login'
      } else {
        return '/listing/item'
      }
    },
    getUnreadChatCount() {
      // return this.$notification.totalUnreadChat()
      let unreadChatCount = 0
      if (this.dealChats.length) {
        this.dealChats.map((item) => {
          let count = 0
          if (item?.unreadMessageDetails && item?.unreadMessageDetails[this.authUser.uid]) {
            count = item?.unreadMessageDetails[this.authUser.uid]
          }

          unreadChatCount += count
        })
      }
      return unreadChatCount
    }

  },

  created() {
    //  console.log("===================== on or off",this.navigator.onLine)
  },
  // created() {
  //   this.$fire.auth.onAuthStateChanged((user) => {
  //     this.authenticatedUser = user;

  //      if (this.authenticatedUser) {

  //       setTimeout( () => {

  //        this.$axios.$get('offers/v1/offers/filter?states=draft&show-completed-offers=true&size=12&page=0&sort=publishedDate').then((res) => {
  //          alert("aaa");
  //       //console.log(res);
  //       //console.log("aaa");
  //       //this.$emit('showspinner', true);

  //       if(res.payload.length != 0){
  //         this.latestDraft = res.payload[0].draftOfferId;
  //         console.log(this.latestDraft);
  //         // alert(this.authenticatedUser );
  //       }

  //        })

  //     },5000)
  //      }

  //   })
  // },
  mounted() {
   // console.log("openAddress", this.openAddress)
    this.getMasterCategory()
    this.fetchAndProcessCmsData()
    this.checkUrl()
    if (this.authUser) {
      this.calluserActivity(this.$route.path)
    }

    this.setUserStatusOn();
    // this.readRemoteConfig()
    this.fetchDraft()
    this.checkPage()
    // console.log(this.$route.name);
    if (this.authUser) {
      this.subscribeTradingChatDeals()
      const accessTokenDate = window.localStorage.getItem('accessTokenDate')
      if (accessTokenDate) {
        const lastUpdateDate = this.$moment(accessTokenDate)
        const diffDays = this.$moment().diff(lastUpdateDate, 'days')
        // console.log('diffDays', diffDays)
        if (diffDays > 15) {
          this.registerFcm()
          window.localStorage.setItem('accessTokenDate', this.$moment().format('YYYY-MM-DD'))
        }
      } else {
        this.registerFcm()
        window.localStorage.setItem('accessTokenDate', this.$moment().format('YYYY-MM-DD'))
      }
    }

    this.onfirebaseDisconnect()
  },
  methods: {

    async fetchAndProcessCmsData() {
      try {
        let locale = this.$i18n.locale
        // delete this.$axios.defaults.headers.common["Authorization"];
        // const data = await this.$axios.get(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`)
        const data = await fetch(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`).then((r) => r.json());
        // console.log('CMS Data:', data.data)
        let responseData
        if (data) {
          responseData = data.data
          responseData.map((item) => {
            const key = item.attributes.parameter;
            //  console.log('keys:', key)
            if (this.remoteData[key] !== undefined) {
              let paramVal = item.attributes.value;
              // console.log('paramVal:', key, paramVal);
              this.remoteData[key] = paramVal || {};
            } else {
              // console.log('other keys:', key)
            }
          })

        }
        return responseData
      } catch (error) {
        console.log(error);
        return error
      }
    },

    async getMasterCategory() {

      this.categoryList = []
      try {
        const url = `/flisting/v1/category/CATEGORY`
        const data = await this.$axios.$get(url);
       // console.log(" category data", data)
        this.categoryList = data.payload.slice(0, 6)
       // console.log(" this.categoryList", this.categoryList)
        this.loading = false
      } catch (error) {
        console.log(error);
        this.loading = false
        //   this.showLoader = false
      }


    },

    subscribeTradingChatDeals() {
      const vm = this

      this.$fire.firestore
        .collection('tradingChatDeals')
        .where('participants', 'array-contains-any', [this.authUser.uid])
        .orderBy('createdAt', 'desc').limit(100)
        .onSnapshot((querySnapshot) => {
          vm.dealChats = []
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.dealRefId = doc.id
            vm.dealChats.push(data)
            // console.log('deal', doc.id, data)
          })
        })
    },
    checkUrl() {
      this.isListingDetails = true
      this.offerDetails = true
      this.myDashboard = true
      console.log('Route Path:', this.$route.path)
      if (this.$route.path.includes('/p/')) {
        this.isListingDetails = true
      } else if (this.$route.path.includes('/offers/details/')) {
        this.offerDetails = true
      } else if (this.$route.path.includes('my-dashboard')) {
        this.myDashboard = true
      } else {
        this.isListingDetails = false
        this.offerDetails = false
        this.myDashboard = false
      }
    },
    async readRemoteConfig() {
      try {
        await this.$fire.remoteConfig.fetchAndActivate()
      } catch (e) {
        alert(e)
        return
      }

      const remoteData = await this.$fire.remoteConfig.getAll()

      if (remoteData) {
        // const localeSiff = this.$i18n.locale === 'hi' ? '_hi' : ''
        const localeSiff = this.remotConfigSuffix[this.$i18n.locale] ? this.remotConfigSuffix[this.$i18n.locale] : '';

        Object.keys(this.remoteData).map((key, index) => {
          const hKey = key + localeSiff
          this.remoteData[key] = remoteData[hKey] && remoteData[hKey]._value ? JSON.parse(remoteData[hKey]._value) : {}
        })
      }

      //  console.log('footer remoteData:', this.remoteData)
    },
    fetchDraft() {
      // this.$emit('fetchDraft', true);
      // this.$router.push('listing/item?id='+this.latestDraft);

      if (this.authUser != null) {
        this.$axios.$get('offers/v1/offers/filter?states=draft&show-completed-offers=true&size=12&page=0&sort=publishedDate').then((res) => {
          if (res.payload.length > 0) {
            this.latestDraft = res.payload[0].draftOfferId
          }

          // alert(this.latestDraft);
          // this.$router.push('listing/item?id='+latestDraft);
        })
      }

      // this.$axios.$get('offers/v1/offers/filter?states=draft&show-completed-offers=true&size=12&page=0&sort=publishedDate').then((res) => {
      //   //console.log(res);
      //   //console.log("aaa");
      //   //this.$emit('showspinner', true);
      //   let latestDraft = res.payload[0].draftOfferId;
      //   alert(latestDraft);
      //   //this.$router.push('listing/item?id='+latestDraft);
      // })
    },
    goToDraftPage() {
      //this.$router.push('/listing/item?id=' + this.latestDraft);
      this.$router.push(this.localePath('/listing/item?id=' + this.latestDraft));
    },
    chatWindowOpen() {
      this.showChatWindow = true;
    },
    chatWindowClose() {
      this.showChatWindow = false;
      this.$store.dispatch('chat/openChatPopup/openChatRoom', null);
    },


    checkStat() {
      //alert(this.authUser);
      if (this.authUser == null) {
        window.localStorage.setItem('setPath', this.localePath('/listing/item'))
      } else {
        this.logEvent()
      }
    },

    async clickOnAcademy() {
      try {
        const analyticsData = {
          user_id: this.authUser?.uid
        }
        // console.log(analyticsData)
        await this.$fire.analytics.logEvent('gintaa_academy_visit', analyticsData)
        // console.log('Gintaa analytics event log successfully');
      } catch (e) {
        // console.log('Gintaa analytics error:', e);
      }
    },

    async calluserActivity(pathName) {
      // console.log("pathName",pathName)
      if (pathName == '/') {
        this.urlName = 'HOME'
      } else {
        this.urlName = pathName
      }

      // console.log(" this.urlName", this.urlName)
      const projectId = this.$fireModule.apps[0].options.projectId
      const region = this.$fire.functions._region
      const url = `https://${region}-${projectId}.cloudfunctions.net/userActivity`
      try {
        const appcheckToken = await this.$fire.appCheck.getToken()
        const headers = {
          'X-Firebase-AppCheck': appcheckToken.token,
          'Accept-Language': this.$i18n.locale
        }
        const userActivity = await this.$axios.$post(url, { data: { url: this.urlName } }, { headers })
      } catch (error) {
        console.log(error)

      }


    },

    async logEvent() {
      try {
        const analyticsData = {
          user_id: this.authUser?.uid
        }
        // console.log(analyticsData)
        await this.$fire.analytics.logEvent('gintaa_product_listing_initiated', analyticsData)
        // console.log('Gintaa analytics event log successfully');
      } catch (e) {
        // console.log('Gintaa analytics error:', e);
      }
    },
    checkPage() {
      const currentPage = this.$route.name
      const pageName = currentPage.split('_')[0]
      // console.log("currentPage :", currentPage)
      // console.log("currentPage pageName:", pageName)

      this.addProductArray.forEach((elem) => {
        if (elem === pageName) {
          if (elem === 'my-offers' && this.offerCountForFooter > 0) {
            this.showAddProductButton = false
          } else {
            this.showAddProductButton = true
          }
          //this.showAddProductButton = true
          // console.log(pageName);
          // console.log(elem);
        }
      })
    },
    async registerFcm() {
      const permission = await this.requestPermission()
      if (permission) {
        try {
          const newToken = await this.getIdToken()
          //  console.log('newToken', newToken)
          if (newToken) {
            const storageKey = 'accessToken'
            const oldToken = window.localStorage.getItem(storageKey)
            if (oldToken !== newToken) {
              window.localStorage.setItem(storageKey, newToken)
              this.registerToken(newToken)
            }
          }
        } catch (e) {
          console.error('An error occurred while retrieving token. ', e)
        }
      }
    },
    async requestPermission() {
      try {
        const permission = await Notification.requestPermission()
        //console.log('permission:', permission)
        return permission === 'granted'
      } catch (e) {
        console.error(e)
        return false
      }
    },
    async getIdToken() {
      let currentToken
      try {
        currentToken = await this.$fire.messaging.getToken()
      } catch (e) {
        console.error('An error occurred while retrieving token. ', e)
      }
      return currentToken
    },
    registerToken(accessToken) {
      const fireFunctionName = 'registerFcmToken '
      // const firebaseFun = this.angularFireFun.httpsCallable(fireFunctionName);
      const requestPayloadData = { token: accessToken }
      this.$fire.functions.httpsCallable(fireFunctionName)(requestPayloadData).then((resp) => {
        //  console.log('register fcm resp', resp)
      })
      // return firebaseFun(requestPayloadData)
    },
    getCreateListingImageUrl() {
      const imageName = 'create-list.png'
      // const localLangPath = this.$i18n.locale === 'hi' ? 'Hindi/' : ''
      const localLangPath = this.gcpSubFolder[this.$i18n.locale] ? this.gcpSubFolder[this.$i18n.locale] : '';

      const channelPath = ''// channelId === 'WEB' ? '' : 'mobile/'
      const basePath = this.CDN_BASE_URL + '/web/web_new/add-product/'
      return basePath + channelPath + localLangPath + imageName
    },
    async setCurrentLanguagePreferance(locale) {
      this.$cookies.set('langPref', locale.code) // Set cookies for language preferance

      const postData = {
        langPref: locale.code
      }
      console.log("postData", postData)
      let url = `/users/v1/user/profile`;
      try {
        const data = await this.$axios.$put(url, postData);
        // vm.$cookies.set('chngedLang', 'yes')
      } catch (error) {
        console.log("error", error)
      }
    },

    setUserStatusOn() {
      console.log('onfirebaseDisconnect:', this.authUser)

      if (this.authUser) {
        this.$fire.functions.httpsCallable('setStatus')({ status: 'online' }).then((resp) => {
          // console.log('setStatus fcm resp', resp)
        })
      }

    },

    setUserStatusOff() {
      // console.log('onfirebaseDisconnect:', this.authUser)

      if (this.authUser) {
        this.$fire.functions.httpsCallable('setStatus')({ status: 'offline' }).then((resp) => {
          //  console.log('setStatus fcm resp', resp)
        })
      }

    },

    onfirebaseDisconnect() {
      // console.log('onfirebaseDisconnect:', this.authUser)

      if (this.authUser) {
        const uid = this.authUser.uid

        this.$fire.database.ref(`status/${uid}`)
          .onDisconnect()
          .update({ 'state': 'offline' })
        // .cancel(()=>{
        //   console.log('onDisconnect')
        //   this.setUserStatusOff()
        // })
      }

    },

  }
})
</script>


<style scoped>
iframe {
  display: block;
  background: transparent;
  border: none;
  height: 460px;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.cssanimation {
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}

.fadeInBottom {
  animation-name: fadeInBottom
}

@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(100%);
  }

  to {
    opacity: 1
  }
}

.ccount-blink {
  animation: blink-animation 3s steps(5, start) infinite;
  -webkit-animation: blink-animation 3s steps(5, start) infinite;
}

@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {

  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

@media only screen and (min-device-width: 0px) and (max-device-width: 400px) {
  .chat-window {
    width: 100%;
    right: 0px;
    left: 0px;
  }
}</style>
