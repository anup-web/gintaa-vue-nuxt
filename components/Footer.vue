<template>
  <section class="footer-trust relative">
    <div v-if="remoteData.web_home_footer && remoteData.web_home_footer.payload" class="trust-section  p-5  bg-gray-200">
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
    </div>

    <div class="footer-section pt-8 border-t border-slate-100">
      <div class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 relative">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-5 md:gap-9 xl:gap-5 pb-7 md:pb-14 lg:pb-8 2xl:pb-8 3xl:pb-8 lg:mb-0.5 2xl:mb-0 3xl:-mb-1">
          <div class="footerlink hidden lg:block">
            <h4 class="text-heading text-sm  text-gray-700 font-medium mb-5 2xl:mb-6 3xl:mb-7">
              {{ $t('aboutUs') }}
            </h4>
            <ul class="text-xs text-gray-500  text-body flex flex-col space-y-3 lg:space-y-3.5">
              <li class="flex items-baseline">
                <a :href="localePath('/about/about-us')" target="_blank" class="transition-colors duration-200 hover:text-green">{{ $t('aboutGintaa') }}</a>
              </li>
              <li class="flex items-baseline">
                <a href="https://asconsoftech.com/index.html#career-section" target="_blank" class="transition-colors duration-200 hover:text-green">{{ $t('career') }}</a>
              </li>
              <li class="flex items-baseline">
                <a :href="localePath('/about/press-release')" target="_blank" class="transition-colors duration-200 hover:text-green">{{ $t('pressRelease') }}</a>
              </li>
              <li class="flex items-baseline">
                <a href="https://blog.gintaa.com/" target="_blank" class="transition-colors duration-200 hover:text-green">{{ $t('blogsite') }}</a>
              </li>
            </ul>
          </div>

          <div class="footerlink hidden lg:block">
            <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-6 3xl:mb-7">
              {{ $t('needHelp') }}
            </h4>
            <ul class="text-xs text-gray-500  text-body flex flex-col space-y-3 lg:space-y-3.5">
              <li class="flex items-baseline">
                <a :href="localePath('/needhelp/payment')" target="_blank" class="transition-colors duration-200 hover:text-green"> {{ $t('gintaaCoin') }} </a>
              </li>
              <li class="flex items-baseline">
                <a :href="localePath('/about/how-gintaa-works')" target="_blank" class="transition-colors duration-200 hover:text-green">{{ $t('howItWorks') }}</a>
              </li>
              <li class="flex items-baseline">
                <a :href="localePath('/needhelp/faq')" target="_blank" class="transition-colors duration-200 hover:text-green">{{ $t('faq') }}</a>
              </li>
            </ul>
          </div>
          <div class="footerlink hidden lg:block">
            <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-6 3xl:mb-7">
              {{ $t('legal') }}
            </h4>
            <ul class="text-xs text-gray-500  text-body flex flex-col space-y-3 lg:space-y-3.5">
              <li class="flex items-baseline">
                <a :href="localePath('/legal/privacy-policy')" target="_blank" class="transition-colors duration-200 hover:text-green"> {{ $t('privacyPolicy') }}</a>
              </li>
              <li class="flex items-baseline">
                <a :href="localePath('/legal/terms-condition')" target="_blank" class="transition-colors duration-200 hover:text-green">{{ $t('termsConditions') }}</a>
              </li>
              <li class="flex items-baseline">
                <a :href="localePath('/legal/cookie-policy')" target="_blank" class="transition-colors duration-200 hover:text-green">{{ $t('cookiePolicy') }}</a>
              </li>
            </ul>
          </div>

          <div v-if="remoteData.web_home_top_categories" class="footerlink hidden lg:block">
            <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-6 3xl:mb-7">
              <!-- Top Categories -->
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
          </div>

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
                <a href="mailto:customer@gintaa.com" class="transition-colors duration-200 hover:text-green">{{ $t('emailFooter') }}</a>
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
                    <img :src="remoteData.web_home_download_our_app.google_play_store.image" alt="google play store" class=" w-28"></a>
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
                  <a href="https://academy.gintaa.com/" target="_blank"><img src="~/assets/images/academia-logo2.png" alt="gintaa academy" class=""></a>
                </div>
              </div>
            </div>
            <div class="connect-with-us md:mt-5">
              <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-4 3xl:mb-4">
                {{ $t('connectUs') }}
              </h4>
              <ul class="flex w-full">
                <li class="mr-2">
                  <a href="https://www.facebook.com/Onlygintaa/" target="_blank" class="fb w-8 h-8  bg-facebook rounded flex items-center justify-center transition-colors duration-200 hover:bg-green">
                    <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                      <path d="M8.25 7.33333H5.5V11H8.25V22H12.8333V11H16.1718L16.5 7.33333H12.8333V5.80525C12.8333 4.92983 13.0093 4.58333 13.8554 4.58333H16.5V0H13.0093C9.713 0 8.25 1.45108 8.25 4.23042V7.33333Z" fill="white" />
                    </svg>

                  </a>
                </li>
                <li class="mr-2">
                  <a href="https://twitter.com/gintaa_in" target="_blank" class="tw w-8 h-8  bg-twitter rounded flex items-center justify-center transition-colors duration-200 hover:bg-green">
                    <svg width="16" height="14" viewBox="0 0 22 19" fill="none">
                      <path d="M22 2.36457C21.1906 2.7239 20.3207 2.9659 19.4077 3.07499C20.3399 2.51674 21.0558 1.63215 21.3923 0.577986C20.5205 1.09499 19.5543 1.47082 18.5258 1.6734C17.7036 0.796153 16.5293 0.247986 15.2313 0.247986C12.3172 0.247986 10.1759 2.96682 10.8341 5.78924C7.084 5.60132 3.75833 3.80465 1.53175 1.0739C0.34925 3.10249 0.9185 5.75624 2.92783 7.10007C2.189 7.07624 1.49233 6.87365 0.884583 6.5354C0.835083 8.62632 2.33383 10.5825 4.5045 11.0179C3.86925 11.1902 3.1735 11.2306 2.46583 11.0949C3.03967 12.8879 4.70617 14.1923 6.6825 14.229C4.785 15.7167 2.39433 16.3813 0 16.099C1.99742 17.3796 4.37067 18.1267 6.919 18.1267C15.2992 18.1267 20.0337 11.0491 19.7477 4.70115C20.6296 4.06407 21.395 3.26932 22 2.36457V2.36457Z" fill="white" />
                    </svg>

                  </a>
                </li>
                <li class="mr-2">
                  <a href="https://www.linkedin.com/company/gintaa/" target="_blank" class="li w-8 h-8  bg-linkedin rounded flex items-center justify-center transition-colors duration-200 hover:bg-green">
                    <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                      <path d="M4.565 2.29167C4.565 3.55758 3.5475 4.58333 2.29167 4.58333C1.03583 4.58333 0.0183333 3.55758 0.0183333 2.29167C0.0183333 1.02667 1.03583 0 2.29167 0C3.5475 0 4.565 1.02667 4.565 2.29167ZM4.58333 6.41667H0V21.0833H4.58333V6.41667ZM11.9002 6.41667H7.34617V21.0833H11.9011V13.3843C11.9011 9.10342 17.4277 8.75325 17.4277 13.3843V21.0833H22V11.7966C22 4.57325 13.8215 4.83633 11.9002 8.39208V6.41667Z" fill="white" />
                    </svg>

                  </a>
                </li>
                <li class="mr-2">
                  <a href="https://www.instagram.com/gintaa.in/" target="_blank" class="in w-8 h-8  bg-insta rounded bg-gradient-to-r from-instaf via-instam to-instal flex items-center justify-center transition-colors duration-200 hover:from-green hover:to-green">
                    <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                      <path d="M11 1.98275C13.937 1.98275 14.2853 1.99375 15.4458 2.04692C18.4268 2.18258 19.8192 3.597 19.9549 6.556C20.0081 7.71558 20.0182 8.06392 20.0182 11.0009C20.0182 13.9388 20.0072 14.2863 19.9549 15.4458C19.8183 18.4021 18.4296 19.8192 15.4458 19.9549C14.2853 20.0081 13.9388 20.0191 11 20.0191C8.063 20.0191 7.71467 20.0081 6.55508 19.9549C3.56675 19.8183 2.18167 18.3975 2.046 15.4449C1.99283 14.2853 1.98183 13.9379 1.98183 11C1.98183 8.063 1.99375 7.71558 2.046 6.55508C2.18258 3.597 3.57133 2.18167 6.55508 2.046C7.71558 1.99375 8.063 1.98275 11 1.98275V1.98275ZM11 0C8.01258 0 7.63858 0.0128333 6.46525 0.066C2.47042 0.249333 0.25025 2.46583 0.0669167 6.46433C0.0128333 7.63858 0 8.01258 0 11C0 13.9874 0.0128333 14.3623 0.066 15.5357C0.249333 19.5305 2.46583 21.7507 6.46433 21.934C7.63858 21.9872 8.01258 22 11 22C13.9874 22 14.3623 21.9872 15.5357 21.934C19.5268 21.7507 21.7525 19.5342 21.9331 15.5357C21.9872 14.3623 22 13.9874 22 11C22 8.01258 21.9872 7.63858 21.934 6.46525C21.7543 2.47408 19.5351 0.25025 15.5366 0.0669167C14.3623 0.0128333 13.9874 0 11 0V0ZM11 5.3515C7.88058 5.3515 5.3515 7.88058 5.3515 11C5.3515 14.1194 7.88058 16.6494 11 16.6494C14.1194 16.6494 16.6485 14.1203 16.6485 11C16.6485 7.88058 14.1194 5.3515 11 5.3515ZM11 14.6667C8.97508 14.6667 7.33333 13.0258 7.33333 11C7.33333 8.97508 8.97508 7.33333 11 7.33333C13.0249 7.33333 14.6667 8.97508 14.6667 11C14.6667 13.0258 13.0249 14.6667 11 14.6667ZM16.8722 3.80875C16.1425 3.80875 15.5513 4.4 15.5513 5.12875C15.5513 5.8575 16.1425 6.44875 16.8722 6.44875C17.6009 6.44875 18.1912 5.8575 18.1912 5.12875C18.1912 4.4 17.6009 3.80875 16.8722 3.80875Z" fill="white" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="absolute bottom-6 w-[150px] right-5 lg:right-auto sm:bottom-6 md:bottom-6 lg:bottom-2 xl:bottom-6 2xl:bottom-6 language-section">
          <h4 class="text-heading text-sm text-gray-700 font-medium mb-5 2xl:mb-6 3xl:mb-7">
            {{ $t('languages') }}
          </h4>
          <div class="group text-xsb relative">
            <a href="javascript:void(0);" class="text-xsb text-gray-700 flex items-center  w-full border border-gray-300 p-2 rounded relative mr-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z" fill="#7D7F81" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z" fill="#7D7F81" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.00023 12C9.06877 15.0748 10.1263 18.0352 12 20.4492C13.8737 18.0352 14.9312 15.0748 14.9998 12C14.9312 8.92516 13.8737 5.96484 12 3.5508C10.1263 5.96484 9.06877 8.92516 9.00023 12ZM12 2L11.2617 1.32558C8.59689 4.24291 7.08251 8.02885 7.00022 11.9792C6.99993 11.9931 6.99993 12.0069 7.00022 12.0208C7.08251 15.9711 8.59689 19.7571 11.2617 22.6744C11.4511 22.8818 11.7191 23 12 23C12.2809 23 12.5489 22.8818 12.7383 22.6744C15.4031 19.7571 16.9175 15.9711 16.9998 12.0208C17.0001 12.0069 17.0001 11.9931 16.9998 11.9792C16.9175 8.02885 15.4031 4.24291 12.7383 1.32558L12 2Z" fill="#7D7F81" />
              </svg>
              {{ $i18n.locale == "en" ? "English" : $i18n.locale == "hi" ? 'हिन्दी' : 'বাংলা' }}

              <span class="absolute right-2 top-4">
                <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.90002 1.5L5.80002 5.4L9.70002 1.5" stroke="#7D7F81" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </a>
            <div class=" absolute hidden   pt-[5px] group-hover:block w-[152px] left-0 ">
              <ul class="drop  bg-white text-gray-600  rounded shadow border border-gray-300">
                <li v-for="locale in availableLocales" :key="locale.code" class="text-xsb">
                 
                 <a :href="switchLocalePath(locale.code)" @click="setCurrentLanguagePreferance(locale)" class=" border-b bg-white rounded-t font-bold text-gray-600 border-gray-200 hover:text-firoza py-3 px-3  whitespace-no-wrap flex items-center">
                
                <svg
                      v-if="locale.code == 'en'"
                      width="14"
                      height="16"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-4"
                    >
                      <path d="M8.29688 2.44922L2.64844 18H0.339844L6.84375 0.9375H8.33203L8.29688 2.44922ZM13.0312 18L7.37109 2.44922L7.33594 0.9375H8.82422L15.3516 18H13.0312ZM12.7383 11.6836V13.5352H3.15234V11.6836H12.7383Z" fill="#616364" />
                    </svg>

                    <svg
                      v-if="locale.code == 'hi'"
                      width="20"
                      height="20"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-4"
                    >
                      <path d="M18.3535 2.75H13.7702C13.527 2.75 13.2939 2.84658 13.122 3.01849C12.9501 3.19039 12.8535 3.42355 12.8535 3.66667C12.8535 3.90978 12.9501 4.14294 13.122 4.31485C13.2939 4.48676 13.527 4.58333 13.7702 4.58333H15.1451V10.0833H10.6077C11.214 9.29449 11.5444 8.32827 11.5478 7.33333C11.5478 6.3244 11.2149 5.34366 10.6007 4.54322C9.98648 3.74279 9.12532 3.16738 8.15077 2.90625C7.17621 2.64512 6.14272 2.71285 5.21058 3.09894C4.27845 3.48504 3.49975 4.16791 2.99527 5.04167C2.93434 5.14591 2.89462 5.26117 2.87838 5.38081C2.86214 5.50046 2.86971 5.62213 2.90064 5.73885C2.93157 5.85556 2.98527 5.96501 3.05863 6.06091C3.132 6.1568 3.22359 6.23726 3.32815 6.29765C3.4327 6.35803 3.54816 6.39716 3.66789 6.41279C3.78761 6.42842 3.90925 6.42023 4.0258 6.3887C4.14235 6.35717 4.25153 6.30291 4.34705 6.22906C4.44257 6.1552 4.52255 6.0632 4.5824 5.95833C4.82373 5.54022 5.17087 5.19299 5.58893 4.95156C6.00699 4.71013 6.48124 4.583 6.964 4.58295C7.44677 4.5829 7.92104 4.70992 8.33915 4.95126C8.75727 5.1926 9.10448 5.53975 9.34591 5.95781C9.58733 6.37588 9.71445 6.85012 9.7145 7.33289C9.71454 7.81565 9.5875 8.28993 9.34616 8.70803C9.10481 9.12614 8.75766 9.47335 8.33959 9.71477C7.92152 9.95618 7.44727 10.0833 6.96451 10.0833C6.72139 10.0833 6.48823 10.1799 6.31632 10.3518C6.14442 10.5237 6.04784 10.7569 6.04784 11C6.04784 11.2431 6.14442 11.4763 6.31632 11.6482C6.48823 11.8201 6.72139 11.9167 6.96451 11.9167C7.44721 11.9168 7.92138 12.0439 8.33938 12.2853C8.75737 12.5268 9.10445 12.8739 9.34574 13.292C9.58703 13.7101 9.71403 14.1843 9.71397 14.667C9.71391 15.1497 9.5868 15.6239 9.34541 16.0419C9.10401 16.4599 8.75685 16.807 8.3388 17.0483C7.92075 17.2897 7.44654 17.4167 6.96384 17.4167C6.48113 17.4166 6.00694 17.2896 5.58891 17.0482C5.17089 16.8068 4.82375 16.4597 4.5824 16.0417C4.46045 15.832 4.26034 15.6792 4.02593 15.6168C3.79151 15.5544 3.54192 15.5875 3.33186 15.7088C3.1218 15.8301 2.96841 16.0298 2.90531 16.264C2.84222 16.4982 2.87456 16.7479 2.99525 16.9583C3.49973 17.8321 4.27842 18.515 5.21057 18.9011C6.14271 19.2872 7.1762 19.3549 8.15076 19.0938C9.12532 18.8327 9.98649 18.2572 10.6007 17.4568C11.2149 16.6564 11.5478 15.6756 11.5478 14.6667C11.5444 13.6717 11.214 12.7055 10.6077 11.9167H15.1451V18.3333C15.1451 18.5764 15.2417 18.8096 15.4136 18.9815C15.5855 19.1534 15.8187 19.25 16.0618 19.25C16.3049 19.25 16.5381 19.1534 16.71 18.9815C16.8819 18.8096 16.9785 18.5764 16.9785 18.3333V4.58333H18.3535C18.5966 4.58333 18.8298 4.48676 19.0017 4.31485C19.1736 4.14294 19.2701 3.90978 19.2701 3.66667C19.2701 3.42355 19.1736 3.19039 19.0017 3.01849C18.8298 2.84658 18.5966 2.75 18.3535 2.75V2.75Z" fill="black" />
                    </svg>

                    <svg 
                      v-if="locale.code == 'bn'"
                      width="20"
                      height="20"
                      version="1.1" 
                      id="Layer_1" 
                      xmlns="http://www.w3.org/2000/svg" 
                      xmlns:xlink="http://www.w3.org/1999/xlink" 
                      x="0px" 
                      y="0px"
                      viewBox="0 0 20 20" 
                      style="enable-background:new 0 0 20 20;" 
                      xml:space="preserve"
                      class="mr-4">
                      <g id="XMLID_1_">
                        <g id="XMLID_28_">
                          <path id="XMLID_29_" d="M18,17h-2.5v-0.1c0-1.9-0.8-2.8-2.5-2.8h-1c-1.1,1.1-2.5,1.6-4.2,1.6c-1.9,0-3.4-0.6-4.5-1.7
                            c-1.1-1.1-1.7-2.8-1.7-4.9c0-0.7,0-1.4,0.1-2h2.4C4,7.7,3.9,8.4,3.9,9.1c0,1.4,0.3,2.5,1,3.3c0.7,0.8,1.6,1.1,2.8,1.1
                            c1.1,0,1.9-0.3,2.5-1c0.6-0.6,0.9-1.5,0.9-2.5c0-0.6-0.1-1.1-0.4-1.5C10.5,8.2,10.1,8,9.6,8C9.3,8,8.9,8.2,8.7,8.5
                            C8.5,8.8,8.4,9.1,8.4,9.6c0,0.5,0.1,0.9,0.2,1.3H6.4c-0.2-0.5-0.3-1-0.3-1.6c0-1,0.3-1.8,0.9-2.4C7.7,6.3,8.5,6,9.6,6
                            c1.2,0,2.2,0.4,2.9,1.2c0.7,0.8,1.1,1.8,1.1,3c0,0.6-0.1,1.3-0.3,1.9c1,0,1.8,0.3,2.3,1V5H0V3h20v2h-2V17z"/>
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

       <div class="w-full mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 mb-4">
           <div class="text-heading text-sm text-gray-700 font-medium mb-3">{{ $t('popularSearches') }}</div>
           
            <ul class="flex flex-wrap items-center justify-start ">
                <li> <a :href="localePath('/search?cid=qj6pwJf1a2wlPqhqifQxW')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('HeadphonesTopTitle') }}</a> </li>
                <li> <a :href="localePath('/search?cid=3ZbyDRR1VrlFHpEWj09j6a')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('MobilePhonesTopTitle') }}</a> </li>
                <li> <a :href="localePath('/search?cid=4CImwGjPkpWNT98eSxPbvW')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('WatchesTopTitle') }}</a> </li>
                <li> <a :href="localePath('/search?cid=fgTH0ARyO5byhYsFSD5VN')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('menTShirts') }}</a> </li>
                <li> <a :href="localePath('/search?cid=14R4wRfeXq7pjSwpsnTD45')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('casualShoes') }}</a> </li>
                <li> <a :href="localePath('/search?cid=507uwKOyJ95yGYNsUDtegc')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('sareesLehengas') }}</a> </li>
                <li> <a :href="localePath('/search?cid=VKulzvupphMEVPjrQqRu6')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('womenKurtas') }}</a> </li>
                <li> <a :href="localePath('/search?cid=3v0pSy4OPiab2BzUYXp9ar')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('sportsShoes') }}</a> </li>
                <li> <a :href="localePath('/search?cid=24egbaWhY3jUMdhY28zVc9')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('handbags') }}</a> </li>
                <li> <a :href="localePath('/search?cid=8F7HlyQoljtbGZkyVgnvK')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('womenDress') }}</a> </li>
                <li> <a :href="localePath('/search?cid=1O8p1VhyfTPZG0sRf4IxpM')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('backpacks') }}</a> </li>
                <li> <a :href="localePath('/search?cid=4miWF9xuPVFEbIge9G8TgI')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('earrings') }}</a> </li>
                <li> <a :href="localePath('/search?cid=42Eu3bYztOmETVxjCVWgyj')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('laptops') }}</a> </li>
                <li> <a :href="localePath('/search?cid=4TJ0MacD28rfWBZZdXnaji')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('necklaces') }}</a> </li>
                <li> <a :href="localePath('/search?cid=J3fmO3CSxkedZizUgURlM')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('formalShoes') }}</a> </li>
                <li> <a :href="localePath('/search?cid=zK3oKiip9TwiJRCfWbtHT')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('MenShirts') }}</a> </li>
                <li> <a :href="localePath('/search?cid=4EtYchqzjnAilgxWaWeSX2')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('kitchenAppliances') }}</a> </li>
                <li> <a :href="localePath('/search?cid=2epxqgMjoh0Ra6Bsf7m3ML')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('microphones') }}</a> </li>
                <li> <a :href="localePath('/search?cid=59UQgqffgiBWmixn5cee07')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('womenTShirts') }}</a> </li>
                <li> <a :href="localePath('/search?cid=7YXLRcmwGZ4OutbsSf5ANw')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('soundbarSpeakers') }}</a> </li>
                <li> <a :href="localePath('/search?cid=4N7M93TLm7lYA9tm3q1CxX')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('menKurtas') }}</a> </li>
                <li> <a :href="localePath('/search?cid=2KqzfwNLcwtmlV6GqDLkS1')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('bodyFaceSkinCare') }}</a> </li>
                <li> <a :href="localePath('/search?cid=6PqFKQNuJUaSTHhd71BiNR')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('menPants') }}</a> </li>
                <li> <a :href="localePath('/search?cid=5tvar5ouTveVmB0w3jdo7I')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('desktopComputers') }}</a> </li>
                <li> <a :href="localePath('/search?cid=2rCspZkB5OGZcDk9es05V')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('perfume') }}</a> </li>
                <li> <a :href="localePath('/search?cid=4MhAWayxK13ncWFi2v8xea')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('kidDress') }}</a> </li>
                <li> <a :href="localePath('/search?cid=1vyTLNhOvD9jhdgVx7gvIL')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('menSunglasses') }}</a> </li>
                <li> <a :href="localePath('/search?cid=4jGaFd8UdRMr58Wfz49F78')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('decorativeTapestries') }}</a> </li>
                <li> <a :href="localePath('/search?cid=p92G9EOaEOLryqafQKeaH')" class="transition-colors duration-200 hover:text-green pr-2 mr-1 text-gray-500 text-xs border-r border-gray-500">{{ $t('BooksParaTopTitle') }}</a> </li>
                
            </ul>

    </div>  
      
      <div class="copy-right border-t border-gray-300 pt-5 pb-2 sm:pb-20 md:pb-5 mb-2 sm:mb-0">
        <div class="flex flex-col-reverse md:flex-row text-center md:justify-between mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
          <p class="text-gray-500 text-xs  leading-6">
            &copy;   {{ $t('copyRight') }}
            <a href="https://asconsoftech.com/" target="_blank" class="font-semibold text-gray-700 transition-colors duration-200 ease-in-out hover:text-green"> {{ $t('asconSoftech') }} </a>
          </p>

          <div>
            <p class="text-gray-500 text-xs  leading-6">
              {{ $t('grievanceOfficer') }}:  {{ $t('grievanceDetails') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <client-only>
      <a v-if="showAddProductButton" :href="localePath(getUrl)" class="fixed bottom-[38px] right-2 hidden md:flex add-product-bottom bg-firoza  py-3 justify-center text-base rounded-[99px] min-w-[120px] text-[#ffffff] font-bold z-40" @click="checkStat()">
        <!-- <img src="~/assets/images/create-list.png"> -->
        <!-- <img :src="getCreateListingImageUrl()"> -->
        {{ $t('listProduct') }} 
      </a>
      <a v-if="showAddProductButton" :href="localePath('/listing/item')" class="add-product-bottom fixed bottom-[85px]  right-2 bg-firoza   w-14 h-14 leading-[45px] text-[16px] flex justify-center items-center md:hidden rounded-full z-40 text-white font-medium">
     {{$t('listFooter')}}
        <!-- <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.375 1.375C12.375 0.615608 11.7594 0 11 0C10.2406 0 9.625 0.615608 9.625 1.375V9.625H1.375C0.615608 9.625 0 10.2406 0 11C0 11.7594 0.615608 12.375 1.375 12.375H9.625V20.625C9.625 21.3844 10.2406 22 11 22C11.7594 22 12.375 21.3844 12.375 20.625V12.375H20.625C21.3844 12.375 22 11.7594 22 11C22 10.2406 21.3844 9.625 20.625 9.625H12.375V1.375Z" fill="#ffffff" />
        </svg> -->

      </a>
      <!--for mobile create button-->
      <!-- <a href="#" class="add-product-bottom top-bottom hidden bg-white w-10 h-10 rounded-full  justify-center items-center fixed right-2 bottom-[85px]  shadow-xl">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 -4.37114e-08C8.55228 -1.95703e-08 9 0.447715 9 1L9 15C9 15.5523 8.55228 16 8 16C7.44771 16 7 15.5523 7 15L7 1C7 0.447715 7.44772 -6.78525e-08 8 -4.37114e-08Z" fill="#8CAEC5" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 8.70711C15.3166 9.09763 14.6834 9.09763 14.2929 8.70711L8 2.41421L1.70711 8.70711C1.31658 9.09763 0.683417 9.09763 0.292893 8.70711C-0.0976318 8.31658 -0.0976318 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976315 8.31658 -0.0976314 8.70711 0.292893L15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711Z" fill="#8CAEC5" />
        </svg>
      </a> -->

      <!-- <a v-if="authUser && latestDraft && ((!qValueDraft) || (!qValuePublished && !qValueDraft))" class="cursor-pointer pencil-off fixed z-40 bg-white py-3 px-3 rounded-tl-md rounded-bl-md shadow-xl flex justify-center items-center -right-[84px] 2xl:bottom-[366px] bottom-[300px] hover:right-0 transition-all draft-product-bottom" @click="goToDraftPage()"> -->
      <a v-if="authUser && latestDraft && !iscretaList" class="cursor-pointer pencil-off fixed z-40 bg-white py-3 px-[14px] rounded-tl-md rounded-bl-md shadow-xl hidden md:flex justify-center items-center -right-[84px] 2xl:bottom-[366px] bottom-[300px] hover:right-0 transition-all draft-product-bottom" @click="goToDraftPage()">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2"
        >
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3003 2.31081C17.5222 2.21892 17.7599 2.17163 18 2.17163C18.2401 2.17163 18.4779 2.21892 18.6997 2.31081C18.9216 2.4027 19.1231 2.53738 19.2929 2.70716C19.4627 2.87695 19.5974 3.07852 19.6893 3.30035C19.7812 3.52218 19.8284 3.75994 19.8284 4.00006C19.8284 4.24017 19.7812 4.47793 19.6893 4.69977C19.5974 4.9216 19.4627 5.12317 19.2929 5.29295L7.16176 17.4241L6.55489 16.2982C6.27675 15.7822 5.85354 15.359 5.33753 15.0809L4.6851 14.7292L16.7071 2.70716C16.8769 2.53738 17.0785 2.4027 17.3003 2.31081ZM3.34953 16.1858L2.42524 19.5748L5.66786 18.6905L5.14068 17.7124C4.86254 17.1964 4.43932 16.7732 3.92331 16.4951L3.34953 16.1858ZM18 0.171631C17.4973 0.171631 16.9994 0.270656 16.5349 0.463052C16.0705 0.655449 15.6484 0.937449 15.2929 1.29295L1.79292 14.793C1.66986 14.916 1.58105 15.069 1.53526 15.2369L0.0352593 20.7369C-0.0591621 21.0832 0.0391662 21.4534 0.292916 21.7072C0.546667 21.9609 0.916928 22.0592 1.26314 21.9648L6.76314 20.4648C6.93104 20.419 7.08407 20.3302 7.20713 20.2072L20.7071 6.70716C21.0626 6.35166 21.3446 5.92962 21.537 5.46513C21.7294 5.00064 21.8284 4.50281 21.8284 4.00006C21.8284 3.4973 21.7294 2.99947 21.537 2.53498C21.3446 2.07049 21.0626 1.64845 20.7071 1.29295C20.3516 0.937449 19.9296 0.655449 19.4651 0.463052C19.0006 0.270656 18.5028 0.171631 18 0.171631Z" fill="#EE963D" />
        </svg>
        <span class="text-sm text-gray-500 ml-1 w-[70px]">{{ $t('editDraft') }}</span>
      </a>
      <a @click="chatWindowOpen()" v-if="authUser && !isListingDetails && !offerDetails && !myDashboard" class=" cursor-pointer fixed z-40 bg-white py-1 px-2 rounded-tl-md rounded-bl-md shadow-xl flex justify-center items-center -right-[58px] 2xl:bottom-[308px] bottom-[243px] hover:right-0 transition-all sm:py-1 sm:px-2 md:py-1 md:px-2 lg:py-2 lg:px-3 xl:py-2 xl:px-3 2xl:py-2 2xl:px-3">
        <!-- <svg
          width="27"
          height="27"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="mr-3"
        >
          <path d="M27.1666 0.916748H3.83329C2.22913 0.916748 0.931209 2.22925 0.931209 3.83341L0.916626 30.0834L6.74996 24.2501H27.1666C28.7708 24.2501 30.0833 22.9376 30.0833 21.3334V3.83341C30.0833 2.22925 28.7708 0.916748 27.1666 0.916748ZM6.74996 11.1251H24.25V14.0417H6.74996V11.1251ZM18.4166 18.4167H6.74996V15.5001H18.4166V18.4167ZM24.25 9.66675H6.74996V6.75008H24.25V9.66675Z" fill="#8bc63e" />
        </svg> -->
        <svg class="mr-3 w-[26px] height-[30px] sm:w-[26px] sm:height-[30px] md:w-[26px] md:height-[30px] lg:w-[32px] lg:height-[36px] xl:w-[32px] xl:height-[36px] 2xl:w-[32px] 2xl:height-[36px]" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M32 15.9515C32 19.7098 30.697 23.1664 28.5129 25.8929C28.2647 26.2023 28.0041 26.504 27.7335 26.7936C24.8122 29.9358 20.6375 31.9028 15.9987 31.9028C14.5493 31.9028 13.1444 31.7074 11.8092 31.3462L4.22434 35.0476L5.08066 27.6051C4.05567 26.6476 3.15465 25.559 2.41001 24.3664C0.881226 21.9243 0 19.0418 0 15.9515C0 15.4219 0.0248282 14.8974 0.0769265 14.3803C0.685061 8.18231 4.84974 3.02598 10.5087 0.964922C12.1344 0.371089 13.8817 0.0345748 15.7034 0.00251161C15.8002 -2.5265e-07 15.8995 0 15.9987 0C16.6168 0 17.2248 0.0346476 17.823 0.103945C19.6968 0.314277 21.4715 0.848713 23.0897 1.64785C23.1517 1.67755 23.2112 1.70725 23.2709 1.7419C28.344 4.32498 31.8484 9.52837 31.995 15.558C31.9976 15.6892 32 15.8204 32 15.9515Z" fill="#90CB32"/>
<path d="M7.90901 17.554C9.03901 17.554 9.95505 16.8382 9.95505 15.9552C9.95505 15.0721 9.03901 14.3563 7.90901 14.3563C6.77902 14.3563 5.86298 15.0721 5.86298 15.9552C5.86298 16.8382 6.77902 17.554 7.90901 17.554Z" fill="white"/>
<path d="M15.7677 17.5541C16.8977 17.5541 17.8138 16.8382 17.8138 15.9551C17.8138 15.0721 16.8977 14.3562 15.7677 14.3562C14.6376 14.3562 13.7215 15.0721 13.7215 15.9551C13.7215 16.8382 14.6376 17.5541 15.7677 17.5541Z" fill="white"/>
<path d="M23.6265 17.5541C24.7565 17.5541 25.6725 16.8383 25.6725 15.9553C25.6725 15.0723 24.7565 14.3564 23.6265 14.3564C22.4965 14.3564 21.5804 15.0723 21.5804 15.9553C21.5804 16.8383 22.4965 17.5541 23.6265 17.5541Z" fill="white"/>
</svg>


      <!-- <svg width="27" height="30" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-3">
<path d="M27 13.501C27 16.682 25.9006 19.6076 24.0578 21.9153C23.8484 22.1771 23.6284 22.4325 23.4001 22.6776C20.9353 25.3371 17.4129 27.0019 13.4989 27.0019C12.276 27.0019 11.0906 26.8365 9.96401 26.5308L3.56428 29.6636L4.28681 23.3644C3.42197 22.554 2.66174 21.6326 2.03345 20.6232C0.743535 18.5563 0 16.1166 0 13.501C0 13.0528 0.0209488 12.6089 0.0649068 12.1712C0.578021 6.92535 4.09197 2.56113 8.86675 0.816691C10.2384 0.314082 11.7127 0.0292634 13.2497 0.00212578C13.3315 -2.13838e-07 13.4152 0 13.4989 0C14.0204 0 14.5334 0.029325 15.0381 0.0879773C16.6192 0.265998 18.1166 0.718334 19.4819 1.39471C19.5343 1.41985 19.5845 1.44499 19.6348 1.47431C23.9153 3.66058 26.8721 8.06463 26.9957 13.168C26.998 13.279 27 13.39 27 13.501Z" fill="url(#paint0_linear_1151_73)"/>
<path d="M6.8219 15.6449C7.86701 15.6449 8.71424 14.7977 8.71424 13.7526C8.71424 12.7075 7.86701 11.8602 6.8219 11.8602C5.77679 11.8602 4.92957 12.7075 4.92957 13.7526C4.92957 14.7977 5.77679 15.6449 6.8219 15.6449Z" fill="white"/>
<path d="M14.0901 15.6451C15.1353 15.6451 15.9826 14.7978 15.9826 13.7526C15.9826 12.7074 15.1353 11.8602 14.0901 11.8602C13.0449 11.8602 12.1976 12.7074 12.1976 13.7526C12.1976 14.7978 13.0449 15.6451 14.0901 15.6451Z" fill="white"/>
<path d="M21.3587 15.6449C22.4038 15.6449 23.251 14.7977 23.251 13.7526C23.251 12.7075 22.4038 11.8602 21.3587 11.8602C20.3135 11.8602 19.4663 12.7075 19.4663 13.7526C19.4663 14.7977 20.3135 15.6449 21.3587 15.6449Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_1151_73" x1="-11.2096" y1="14.8318" x2="22.6596" y2="14.8318" gradientUnits="userSpaceOnUse">
<stop stop-color="#C0F88E"/>
<stop offset="1" stop-color="#7DC855"/>
</linearGradient>
</defs>
</svg> -->


        <span class="text-sm text-gray-500 w-[40px]">{{ $t('chat') }}</span>
          <span v-if="getUnreadChatCount" class="flex h-[10px] w-[10px]  absolute  top-0 left-[2px] mt-1 ">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef3022] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-[10px] w-[10px] bg-[#ef3022]"></span>
          </span>
        <!-- <div v-if="getUnreadChatCount" class="absolute top-[0.188rem] left-[0.313rem] bg-[#ef3022] rounded-full w-6 h-6 flex items-center justify-center">
             <span class="ccount-blink text-xs text-white text-center">{{getUnreadChatCount}}</span>
        </div> -->
      </a>
    </client-only>

    <!-- small chat modal start -->
     <div v-if="showChatWindow || openChat" class="fixed z-[999999] bottom-0 right-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-end h-[500px] px-4">
        <div class="fixed bottom-0 right-0 bg-transparent" aria-hidden="true" />

        <div class="cssanimation sequence fadeInBottom bg-white overflow-hidden shadow-2xl transform transition-all rounded-t-xl fixed bottom-0 right-5 w-[370px] h-[500px] auto-scroll chat-window">
          <div @click="chatWindowClose()" class="w-full chatopm-modal px-4 cursor-pointer">
            <div class="w-full flex items-center justify-between h-10 ">
              <div class="text-gray-900 text-base font-medium">
               {{$t('MessagesHead')}}
              </div>
              <div class="flex items-center ">                
                <button type="button" class="bg-white rounded-md text-gray-400 ">
                  <svg width="20" height="14" viewBox="0 0 14 8" fill="none">
                    <path d="M1 1L7 7L13 1" stroke="#494949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="w-full relative chatm-body flex-auto">
            <iframe :src="chatRoomPath || localePath('/chat/offer-listing2')" frameborder="0" gesture="media"  allow="encrypted-media" scrolling="no"  seamless="seamless" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>  
    <!-- small chat modal end -->

<!-- chat image view modal end -->
    <div class="relative z-50 hidden" aria-labelledby="modal-title" role="dialog" aria-modal="true">
   <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      
      <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
        <div class="absolute top-0 right-0 pt-2 pr-2 block">
          <button type="button" class="rounded-md bg-white text-gray-400 ">
            <span class="sr-only">Close</span>            
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        

        <div class="w-full relative mt-4">
          <img src="https://dev.cdn.gintaa.com/web/web_new/new-top-brands/samsung.jpg" alt="Samsung" class="max-w-full max-h-full rounded">
           <div class=" absolute right-2 bottom-2 bg-firoza w-12 h-12 flex items-center justify-center rounded-full cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_104_1169)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C11 0.447715 10.5523 0 10 0C9.44771 0 9 0.447715 9 1V10.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L9.29218 13.7064C9.29459 13.7088 9.29702 13.7112 9.29945 13.7136C9.3938 13.8063 9.50195 13.8764 9.61722 13.9241C9.73425 13.9727 9.8625 13.9996 9.997 14H10H10.003C10.2746 13.9992 10.5208 13.8901 10.7005 13.7136C10.703 13.7112 10.7054 13.7088 10.7078 13.7064L15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289L11 10.5858V1ZM1 12C1.55228 12 2 12.4477 2 13V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13V17C20 17.7957 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7957 20 17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7957 0 17V13C0 12.4477 0.447715 12 1 12Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_104_1169">
              <rect width="20" height="20" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>
        </div>
        
      </div>
    </div>
  </div>

</div>

<!-- chat image view modal end -->

  </section>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'Footer',
  props: ['iscretaList', 'qValueDraft', 'qValuePublished','offerCountForFooter'],
  watch: {
   
    offerCountForFooter(newValue, oldValue) {
      if(newValue){
        this.checkPage ();
      }
      
    }
  },
  // async fetch () {
  //   await this.fetchAndProcessCmsData()
  // },
  data () {
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
      urlName:'',
      authenticatedUser: null,
      CDN_BASE_URL: this.$config.CDN_BASE_URL,
      remotConfigSuffix: this.$config.remotConfigSuffix,
      gcpSubFolder: this.$config.gcpSubFolder,
      addProductArray: ['index', 'my-offers', 'my-listings','exchange', 'p-seoid-pid'], //"p-seoid-pid" means listing details page  
      showAddProductButton: false,
      showChatWindow: false,           
      dealChats: []
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
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },

        getUrl(){
     if (this.authUser == null) {
       return '/login'
     }else{
       return '/listing/item'
     }
    },
    getUnreadChatCount() {
      // return this.$notification.totalUnreadChat()
      let unreadChatCount = 0
      if(this.dealChats.length) {
        this.dealChats.map((item)=>{
          let count = 0
          if(item?.unreadMessageDetails && item?.unreadMessageDetails[this.authUser.uid]){
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
  mounted () {
    console.log("openAddress",this.openAddress)
    this.fetchAndProcessCmsData()
    this.checkUrl()
    if(this.authUser){
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
    
    async fetchAndProcessCmsData(){
      try{
        let locale = this.$i18n.locale
        // delete this.$axios.defaults.headers.common["Authorization"];
        // const data = await this.$axios.get(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`)
        const data = await fetch(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`).then((r) => r.json());
        // console.log('CMS Data:', data.data)
        let responseData
        if(data) {
          responseData = data.data
          responseData.map((item) => {
            const key = item.attributes.parameter;
          //  console.log('keys:', key)
            if(this.remoteData[key] !== undefined){
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
    
    subscribeTradingChatDeals () {
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
    checkUrl(){
      this.isListingDetails = true
      this.offerDetails     = true
      this.myDashboard     = true
      console.log('Route Path:', this.$route.path)
      if(this.$route.path.includes('/p/')){
        this.isListingDetails = true
      }else if(this.$route.path.includes('/offers/details/')){
        this.offerDetails = true
      }else if(this.$route.path.includes('my-dashboard')){
        this.myDashboard = true
      }else{        
        this.isListingDetails = false
        this.offerDetails     = false
        this.myDashboard     = false
      }
    },
    async readRemoteConfig () {
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
    fetchDraft () {
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
    goToDraftPage () {
      //this.$router.push('/listing/item?id=' + this.latestDraft);
      this.$router.push(this.localePath('/listing/item?id=' + this.latestDraft));
    },
    chatWindowOpen(){
      this.showChatWindow = true;
    },
    chatWindowClose(){
      this.showChatWindow = false;      
      this.$store.dispatch('chat/openChatPopup/openChatRoom', null);
    },


    checkStat () {
      //alert(this.authUser);
      if (this.authUser == null) {
        window.localStorage.setItem('setPath', this.localePath('/listing/item') )
      } else {
        this.logEvent()
      }
    },

    async clickOnAcademy () {
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

        async calluserActivity(pathName){
         // console.log("pathName",pathName)
          if(pathName == '/'){
           this.urlName = 'HOME'
          }else{
           this.urlName = pathName
          }

       // console.log(" this.urlName", this.urlName)
        const projectId = this.$fireModule.apps[0].options.projectId
        const region = this.$fire.functions._region
        const url = `https://${region}-${projectId}.cloudfunctions.net/userActivity`
        try{
         const appcheckToken = await this.$fire.appCheck.getToken()
         const headers = {
         'X-Firebase-AppCheck': appcheckToken.token,
         'Accept-Language': this.$i18n.locale
         }
         const userActivity = await this.$axios.$post(url, { data: { url: this.urlName } }, { headers })
        }catch(error) {
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
    checkPage () {
      const currentPage = this.$route.name
      const pageName = currentPage.split('_')[0]
      // console.log("currentPage :", currentPage)
      // console.log("currentPage pageName:", pageName)

      this.addProductArray.forEach((elem) => {
        if (elem === pageName) {
          if(elem === 'my-offers' && this.offerCountForFooter > 0){
            this.showAddProductButton = false
          }else{
            this.showAddProductButton = true
          }
          //this.showAddProductButton = true
          // console.log(pageName);
          // console.log(elem);
        }
      })
    },
    async registerFcm () {
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
    async requestPermission () {
      try {
        const permission = await Notification.requestPermission()
        //console.log('permission:', permission)
        return permission === 'granted'
      } catch (e) {
        console.error(e)
        return false
      }
    },
    async getIdToken () {
      let currentToken
      try {
        currentToken = await this.$fire.messaging.getToken()
      } catch (e) {
        console.error('An error occurred while retrieving token. ', e)
      }
      return currentToken
    },
    registerToken (accessToken) {
      const fireFunctionName = 'registerFcmToken '
      // const firebaseFun = this.angularFireFun.httpsCallable(fireFunctionName);
      const requestPayloadData = { token: accessToken }
      this.$fire.functions.httpsCallable(fireFunctionName)(requestPayloadData).then((resp) => {
      //  console.log('register fcm resp', resp)
      })
      // return firebaseFun(requestPayloadData)
    },
    getCreateListingImageUrl () {
      const imageName = 'create-list.png'
      // const localLangPath = this.$i18n.locale === 'hi' ? 'Hindi/' : ''
      const localLangPath = this.gcpSubFolder[this.$i18n.locale] ? this.gcpSubFolder[this.$i18n.locale] : '';
        
      const channelPath = ''// channelId === 'WEB' ? '' : 'mobile/'
      const basePath = this.CDN_BASE_URL + '/web/web_new/add-product/'
      return basePath + channelPath + localLangPath + imageName
    },
    async setCurrentLanguagePreferance(locale){
      this.$cookies.set('langPref', locale.code) // Set cookies for language preferance
      
      const postData = {
        langPref : locale.code
      }
     console.log("postData",postData)
     let url = `/users/v1/user/profile`;
        try {
          const data = await this.$axios.$put(url, postData);
         // vm.$cookies.set('chngedLang', 'yes')
        } catch (error) {
         console.log("error",error)
        }
    },

    setUserStatusOn(){
      console.log('onfirebaseDisconnect:', this.authUser)

      if(this.authUser){
        this.$fire.functions.httpsCallable('setStatus')({ status: 'online' }).then((resp) => {
         // console.log('setStatus fcm resp', resp)
        })
      }
      
    },

    setUserStatusOff(){
     // console.log('onfirebaseDisconnect:', this.authUser)

      if(this.authUser){
        this.$fire.functions.httpsCallable('setStatus')({ status: 'offline' }).then((resp) => {
        //  console.log('setStatus fcm resp', resp)
        })
      }
      
    },

    onfirebaseDisconnect(){
     // console.log('onfirebaseDisconnect:', this.authUser)

      if(this.authUser){
        const uid = this.authUser.uid
        
        this.$fire.database.ref(`status/${uid}`)
          .onDisconnect()
          .update({'state':'offline'})
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

.fadeInBottom { animation-name: fadeInBottom }
@keyframes fadeInBottom {
    from {
        opacity: 0;
        transform: translateY(100%);
    }
    to { opacity: 1 }
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

  .animate-ping	{animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

@media only screen and (min-device-width: 0px) and (max-device-width: 400px){
   .chat-window{ width: 100%; right: 0px; left: 0px; }
}



</style>
