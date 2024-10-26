<template>
    <div>
        <div v-if="showLoader" class="fixed w-full h-full z-50 top-0 left-0 bg-black opacity-40"></div>
        <!-- <client-only>
            {{apiUrls.registerPayment}}
            <button class="button blue">Stripe Payment</button>
            <button class="button blue">Cashfree Payment</button>
        </client-only> -->
        <!-- <Header /> -->
         <header class="bg-white fixed w-full z-30 top-0   shadow-md">
      <div class="top-bar h-16 lg:h-auto flex items-center justify-center py-3 mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
        <a href="/" class="mr-10 block" title="logo">
        <svg width="178" height="44" viewBox="0 0 178 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_229_19)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.5298 44C41.5511 44 44.0005 41.5501 44.0005 38.5283V5.47171C44.0005 2.44993 41.5511 0 38.5298 0H5.47222C2.45019 0 0 2.44993 0 5.47171V38.5283C0 41.5501 2.45019 44 5.47222 44H38.5298ZM121.393 25.5233C121.393 26.4897 121.559 27.2981 121.89 27.9475C122.221 28.5964 122.996 28.9218 124.212 28.9218C124.764 28.9218 125.29 28.895 125.787 28.8386V34.0612C124.793 34.1715 123.866 34.2276 123.01 34.2276C121.241 34.2276 119.812 34.0822 118.72 33.7915C117.629 33.5021 116.779 32.9428 116.171 32.1135C115.563 31.2842 115.259 30.0961 115.259 28.549V15.9068H112.482V10.477H115.259V4.38367H121.393V10.477H125.953V15.9068H121.393V25.5233ZM68.6495 27.2424C69.6026 26.7042 70.3561 25.9591 70.9085 25.0045C71.4618 24.0517 71.7384 23.009 71.7384 21.8763C71.7384 20.7155 71.4618 19.666 70.9085 18.7259C70.3561 17.7858 69.6026 17.0474 68.6495 16.5077C67.6967 15.9687 66.6397 15.6993 65.4794 15.6993C63.5991 15.6993 62.0859 16.2872 60.9401 17.462C59.7931 18.6356 59.2192 20.1074 59.2192 21.8763C59.2192 23.6982 59.7791 25.1849 60.8988 26.3309C62.0183 27.4781 63.545 28.0513 65.4794 28.0513C66.6397 28.0513 67.6967 27.782 68.6495 27.2424ZM74.5769 39.3882C72.5462 41.2795 69.7207 42.2275 66.1011 42.2275C61.7616 42.2275 58.1281 41.0792 55.199 38.787L58.2256 34.3926C59.1644 35.1387 60.2767 35.7468 61.5628 36.2168C62.8473 36.6853 64.2079 36.9206 65.6443 36.9206C69.5416 36.9206 71.4891 35.1523 71.4891 31.6158V31.2435C69.8304 32.5969 67.7025 33.2754 65.1056 33.2754C62.7014 33.2754 60.5872 32.771 58.7638 31.7607C56.9405 30.7536 55.544 29.3774 54.5774 27.6371C53.61 25.8958 53.127 23.9754 53.127 21.8763C53.127 19.7486 53.61 17.8208 54.5774 16.0935C55.544 14.367 56.9331 12.9914 58.7436 11.9696C60.553 10.9472 62.6738 10.4358 65.1056 10.4358C67.7025 10.4358 69.8304 11.1135 71.4891 12.4667V10.8499H77.6235V31.6158C77.6235 34.904 76.6079 37.4948 74.5769 39.3882ZM80.7319 33.6467H86.9498V10.8912H80.7319V33.6467ZM110.989 20.1758C110.989 17.0543 110.278 14.6505 108.856 12.9641C107.432 11.2789 105.145 10.4358 101.995 10.4358C100.945 10.4358 99.8534 10.6575 98.7207 11.099C97.5867 11.5412 96.6472 12.1347 95.9018 12.8814V10.8499H89.7266V33.6467H95.9018V21.5851C95.8467 19.3753 96.2746 17.8208 97.1871 16.9228C98.0983 16.0246 99.1218 15.5755 100.255 15.5755C103.183 15.5755 104.648 17.1086 104.648 20.1758V33.6467H110.989V20.1758ZM138.676 15.7824C140.583 15.7824 142.103 16.3839 143.236 17.586C144.369 18.7876 144.936 20.3421 144.936 22.2483C144.936 24.2384 144.376 25.807 143.257 26.9527C142.138 28.0995 140.611 28.6721 138.676 28.6721C136.798 28.6721 135.285 28.0645 134.138 26.8506C132.992 25.6334 132.418 24.1004 132.418 22.2483C132.418 20.3421 132.977 18.7876 134.097 17.586C135.216 16.3839 136.743 15.7824 138.676 15.7824ZM141.973 33.2948C143.257 32.7281 144.162 32.0871 144.687 31.3685V33.6464H150.821V10.8499H144.687V13.2126C144.051 12.3838 143.132 11.6996 141.932 11.1607C140.729 10.622 139.34 10.3518 137.765 10.3518C135.416 10.3518 133.378 10.8777 131.651 11.9278C129.924 12.9778 128.604 14.4088 127.692 16.218C126.781 18.0275 126.325 20.0385 126.325 22.2483C126.325 24.4596 126.781 26.4697 127.692 28.2788C128.604 30.089 129.924 31.5196 131.651 32.5691C133.378 33.6196 135.416 34.1445 137.765 34.1445C139.285 34.1445 140.687 33.8598 141.973 33.2948ZM169.474 17.586C168.34 16.3839 166.821 15.7824 164.914 15.7824C162.979 15.7824 161.454 16.3839 160.335 17.586C159.215 18.7876 158.656 20.3421 158.656 22.2483C158.656 24.1004 159.229 25.6334 160.376 26.8506C161.521 28.0645 163.035 28.6721 164.914 28.6721C166.848 28.6721 168.375 28.0995 169.495 26.9527C170.614 25.807 171.173 24.2384 171.173 22.2483C171.173 20.3421 170.606 18.7876 169.474 17.586ZM170.925 31.3685C170.399 32.0871 169.495 32.7281 168.21 33.2948C166.924 33.8598 165.522 34.1445 164.003 34.1445C161.654 34.1445 159.614 33.6196 157.889 32.5691C156.161 31.5196 154.842 30.089 153.93 28.2788C153.019 26.4697 152.563 24.4596 152.563 22.2483C152.563 20.0385 153.019 18.0275 153.93 16.218C154.842 14.4088 156.161 12.9778 157.889 11.9278C159.614 10.8777 161.654 10.3518 164.003 10.3518C165.577 10.3518 166.967 10.622 168.168 11.1607C169.37 11.6996 170.289 12.3838 170.925 13.2126V10.8499H177.059V33.6464H170.925V31.3685Z" fill="#8EC23C"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7835 20.5325C19.8552 20.5325 18.0633 21.1171 16.5746 22.1181L20.9938 24.8924V26.4267C21.2479 26.3686 21.5118 26.3351 21.7835 26.3351C23.7389 26.3351 25.3253 27.921 25.3253 29.8777C25.3253 31.8334 23.7389 33.4193 21.7835 33.4193C19.8276 33.4193 18.2422 31.8334 18.2422 29.8777C18.2422 28.8506 18.6816 27.9284 19.3798 27.2813C17.3636 26.8705 15.5325 25.9531 14.0249 24.6668C13.0226 26.1555 12.4375 27.9484 12.4375 29.8777C12.4375 35.0386 16.6221 39.223 21.7835 39.223C26.9449 39.223 31.1293 35.0386 31.1293 29.8777C31.1293 24.7168 26.9449 20.5325 21.7835 20.5325Z" fill="#CAFC9D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.5746 15.5681C32.5746 21.5282 27.7429 26.3586 21.783 26.3586C15.8234 26.3586 10.9917 21.5282 10.9917 15.5681C10.9917 9.60847 15.8234 4.77649 21.783 4.77649C27.7429 4.77649 32.5746 9.60847 32.5746 15.5681Z" fill="#CAFC9D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7308 7.63521C31.9935 7.59209 33.009 6.04624 33.009 4.77649H26.9448C28.3924 5.47031 29.6772 6.44788 30.7308 7.63521Z" fill="#CAFC9D"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7836 20.5325C18.9723 20.5325 16.453 21.7749 14.7397 23.7395C16.5545 25.3045 18.8942 26.2764 21.4613 26.3517C21.5672 26.3413 21.6749 26.3351 21.7836 26.3351C21.8923 26.3351 21.9997 26.3413 22.1064 26.3517C24.6724 26.2764 27.0131 25.305 28.8272 23.7395C27.1142 21.7749 24.5948 20.5325 21.7836 20.5325Z" fill="#FCF5FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M86.2448 7.47223C85.5819 8.12165 84.7796 8.44598 83.8401 8.44598C82.873 8.44598 82.0505 8.12165 81.3746 7.47223C80.6966 6.8223 80.359 6.02896 80.359 5.08839C80.359 4.17588 80.6966 3.39633 81.3746 2.74691C82.0505 2.09723 82.873 1.77214 83.8401 1.77214C84.7796 1.77214 85.5819 2.09723 86.2448 2.74691C86.908 3.39633 87.2393 4.17588 87.2393 5.08839C87.2393 6.02896 86.908 6.8223 86.2448 7.47223Z" fill="#48CEF3"/>
</g>
<defs>
<clipPath id="clip0_229_19">
<rect width="177.059" height="44" fill="white"/>
</clipPath>
</defs>
</svg>

        </a>
        
        
        <ul class=" space-x-8 ml-14 items-center   md:flex">
          <!-- <li><a href="/authentication/login" class="text-sm text-white flex flex-col  w-full">
          <span class=" block pb-2"> <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 5C6 3.34315 7.34315 2 9 2C10.6569 2 12 3.34315 12 5C12 6.65685 10.6569 8 9 8C7.34315 8 6 6.65685 6 5ZM9 0C6.23858 0 4 2.23858 4 5C4 7.76142 6.23858 10 9 10C11.7614 10 14 7.76142 14 5C14 2.23858 11.7614 0 9 0ZM5 12C3.67392 12 2.40215 12.5268 1.46447 13.4645C0.526784 14.4021 0 15.6739 0 17V19C0 19.5523 0.447715 20 1 20C1.55228 20 2 19.5523 2 19V17C2 16.2043 2.31607 15.4413 2.87868 14.8787C3.44129 14.3161 4.20435 14 5 14H13C13.7956 14 14.5587 14.3161 15.1213 14.8787C15.6839 15.4413 16 16.2044 16 17V19C16 19.5523 16.4477 20 17 20C17.5523 20 18 19.5523 18 19V17C18 15.6739 17.4732 14.4021 16.5355 13.4645C15.5979 12.5268 14.3261 12 13 12H5Z" fill="#ffffff"/>
</svg>
Login/Signup</span>
         </a></li> -->
        
           <!-- <li><a href="#" class="text-sm text-white flex flex-col  w-full">
              <span class=" flex justify-center pb-2"><svg width="20" height="16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 2C6.84315 2 5.5 3.34315 5.5 5C5.5 6.65685 6.84315 8 8.5 8C10.1569 8 11.5 6.65685 11.5 5C11.5 3.34315 10.1569 2 8.5 2ZM3.5 5C3.5 2.23858 5.73858 0 8.5 0C11.2614 0 13.5 2.23858 13.5 5C13.5 7.76142 11.2614 10 8.5 10C5.73858 10 3.5 7.76142 3.5 5ZM1.46447 13.4645C2.40215 12.5268 3.67392 12 5 12H12C13.3261 12 14.5979 12.5268 15.5355 13.4645C16.4732 14.4021 17 15.6739 17 17V19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19V17C15 16.2043 14.6839 15.4413 14.1213 14.8787C13.5587 14.3161 12.7956 14 12 14H5C4.20435 14 3.44129 14.3161 2.87868 14.8787C2.31607 15.4413 2 16.2044 2 17V19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19V17C0 15.6739 0.526784 14.4021 1.46447 13.4645ZM23.7071 7.70711C24.0976 7.31658 24.0976 6.68342 23.7071 6.29289C23.3166 5.90237 22.6834 5.90237 22.2929 6.29289L19 9.58579L17.7071 8.29289C17.3166 7.90237 16.6834 7.90237 16.2929 8.29289C15.9024 8.68342 15.9024 9.31658 16.2929 9.70711L18.2929 11.7071C18.6834 12.0976 19.3166 12.0976 19.7071 11.7071L23.7071 7.70711Z" fill="white"/>
              </svg>
              </span>
             Abhaya</a>
             </li> -->
           <!-- <li><a href="/listing-details" class="text-sm text-white flex flex-col  w-full">
              <span class=" flex justify-center pb-2">
                <svg width="20" height="17" viewBox="0 0 24 21" fill="none" >
<g clip-path="url(#clip0_1310_4225)">
<path d="M8.30151 15.0428L7.36686 13.751L5.39335 14.053L7.98882 10.1318H2.92773V20.4443H11.5514V10.1318L8.30151 15.0428Z" fill="white"/>
<path d="M22.4953 5.21082H16.7687C17.1036 5.06381 17.4026 4.91025 17.6675 4.74723C18.6858 4.12571 19.2266 3.33827 19.2249 2.55665C19.2249 1.91548 18.8686 0.997042 18.3509 0.614236C17.8323 0.227063 17.1446 0 16.4107 0C15.6264 0 14.8977 0.229247 14.2732 0.585853C13.3343 1.12149 12.5995 2.28155 12.0758 3.16652C12.0493 3.21091 12.0229 3.25385 11.9972 3.29679C11.8059 2.95546 11.582 2.27209 11.3283 1.96061C10.884 1.4206 10.3501 0.943187 9.72298 0.585853C9.10017 0.229247 8.37228 0 7.58885 0C6.80799 0.0021833 6.09291 0.280918 5.55809 0.711029C5.02584 1.13677 4.65335 2.09524 4.64993 2.78007C4.64652 3.17962 4.78321 3.59808 5.066 3.97871C5.4214 4.45539 5.98441 4.87095 6.76185 5.21082H1.48975L1.50171 9.31179H11.4017V5.21082H12.6081V9.31179H22.5098L22.4953 5.21082ZM7.10359 3.92849C6.70632 3.71453 6.46198 3.49983 6.31845 3.30698C6.1792 3.11557 6.1305 2.77934 6.1305 2.61414C6.12708 2.33832 6.28855 1.85435 6.57561 1.62729C6.85583 1.3995 7.23686 1.25904 7.5786 1.25904H7.58885C8.02883 1.26195 8.46454 1.38712 8.90367 1.63384C9.55724 2.00136 10.1732 3.00059 10.6012 3.73272C10.8251 4.10534 10.9959 4.49469 11.1113 4.87531C9.12836 4.70065 7.84686 4.32803 7.10359 3.92849ZM13.881 3.03697C14.2381 2.60104 14.6593 1.88201 15.0959 1.63384C15.5299 1.38712 15.9707 1.26195 16.4107 1.25904H16.415C16.7815 1.25904 17.1343 1.3813 17.3744 1.56252C17.6153 1.74664 17.7443 2.0836 17.7443 2.32085C17.7392 2.60104 17.5692 3.24584 16.8012 3.72399C16.0724 4.17666 14.8071 4.64025 12.8618 4.96483C13.0455 4.30766 13.4052 3.61191 13.881 3.03697Z" fill="white"/>
<path d="M18.6168 14.0363L16.6441 13.751L15.7129 15.0581L12.5049 10.1981V20.4443H21.085V10.1318H16.0239L18.6168 14.0363Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1310_4225">
<rect width="24" height="20.4444" fill="white"/>
</clipPath>
</defs>
</svg>

              </span>
           
           Listings</a></li> -->
            <!-- <li><a href="#" class="text-sm text-white flex flex-col  w-full">
              <span class=" flex justify-center pb-2">
                <svg width="24" height="16" viewBox="0 0 25 16" fill="none" >
<path d="M0 12.5V2.625V2.5H3.75V11.5C3.75 12.1 3.25 12.4167 3 12.5H0Z" fill="white"/>
<path d="M25 12.5V2.625V2.5H21.25V11.5C21.25 12.1 21.75 12.4167 22 12.5H25Z" fill="white"/>
<path d="M4.875 2.25L7.625 0H11.125C10.875 0.25 10 1.1 8.5 2.5C6.25 4.75 7.625 6.375 8 7C9.9 8.9 12.2083 7.125 13.125 6C14.4583 7.125 17.55 9.775 19.25 11.375C19.25 14.25 16.875 12.875 16.625 13.125C14.625 16.5 13 14.125 12.625 14.125C11.925 15.225 10.4167 15.0833 9.75 14.875L5.625 11H4.875V2.25Z" fill="white"/>
<path d="M17.5 0H13C12.1667 0.75 10.125 2.65 8.62501 4.25C8.12501 6.55 9.83334 6.54167 10.75 6.25C11.5 5.58333 13.225 4.075 14.125 3.375C15.025 2.675 15.1667 3.66667 15.125 4.25L14.125 5.25L20 10V2.375L17.5 0Z" fill="white"/>
<circle cx="1.64456" cy="10.4446" r="0.986842" fill="#8EC23C"/>
<circle cx="23.3555" cy="10.4446" r="0.986842" fill="#8EC23C"/>
</svg>

                </span>
              Offers</a></li> -->
        </ul>
      </div>
  </header>
        <div class="bg-[#e6e8f0] rounded  min-h-screen flex flex-col justify-center px-3 py-12 sm:px-6 lg:px-8 items-start">
            <!-- <div class="flex w-full h-full justify-center content-center items-center">
                <div class="pb-14">
                    <button @click="stripePayment()" class="rounded bg-red-500 hover:bg-red-700 py-2 px-4 text-white">
                        Stripe register payment
                    </button>
                    <button @click="cashfreePayment()" class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white">
                        Cashfree Payment
                    </button>
                </div>
            </div> -->
            <div class="sm:mx-auto sm:w-full sm:max-w-md ">
                 <div class="bg-white py-6 px-3 shadow sm:rounded-lg sm:px-10 relative min-h-[480px] md:w-[480px]">
                     <div class="flex justify-center items-center text-base text-gray-500 font-normal"> 
                         <svg width="31" height="37" viewBox="0 0 31 37" fill="none" class="mr-4">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9294 0.728465C15.2973 0.590512 15.7027 0.590512 16.0706 0.728465L29.0706 5.60347C29.7048 5.84131 30.125 6.44763 30.125 7.125V18.5C30.125 24.1005 26.4172 28.5755 23.0701 31.5042C21.3624 32.9984 19.6624 34.1664 18.3925 34.96C17.7559 35.3579 17.223 35.6644 16.8456 35.8734C16.6568 35.9779 16.5066 36.0582 16.4014 36.1134C16.3487 36.141 16.3073 36.1624 16.278 36.1774L16.243 36.1952L16.2325 36.2005L16.229 36.2023C16.2285 36.2026 16.2267 36.2034 15.5 34.75C14.7733 36.2034 14.7728 36.2032 14.7723 36.2029L14.7675 36.2005L14.757 36.1952L14.722 36.1774C14.6927 36.1624 14.6513 36.141 14.5986 36.1134C14.4934 36.0582 14.3432 35.9779 14.1544 35.8734C13.777 35.6644 13.2441 35.3579 12.6075 34.96C11.3376 34.1664 9.63762 32.9984 7.92993 31.5042C4.58284 28.5755 0.875 24.1005 0.875 18.5V7.125C0.875 6.44763 1.29518 5.84131 1.92942 5.60347L14.9294 0.728465ZM15.5 34.75L14.7723 36.2029C15.2298 36.4317 15.7692 36.4322 16.2267 36.2034L15.5 34.75ZM15.5 32.902C15.8114 32.7255 16.2096 32.4918 16.67 32.204C17.8376 31.4743 19.3876 30.4078 20.9299 29.0583C24.0828 26.2995 26.875 22.6495 26.875 18.5V8.25113L15.5 3.9855L4.125 8.25113V18.5C4.125 22.6495 6.91716 26.2995 10.0701 29.0583C11.6124 30.4078 13.1624 31.4743 14.33 32.204C14.7904 32.4918 15.1886 32.7255 15.5 32.902Z" fill="#8BC63E"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.85095 14.101C8.48555 13.4663 9.51445 13.4663 10.149 14.101L15.5 19.4519L20.851 14.101C21.4856 13.4663 22.5144 13.4663 23.149 14.101C23.7837 14.7356 23.7837 15.7644 23.149 16.399L16.649 22.899C16.0144 23.5337 14.9856 23.5337 14.351 22.899L7.85095 16.399C7.21635 15.7644 7.21635 14.7356 7.85095 14.101Z" fill="#8BC63E"/>
                        </svg> 100% Safe & Secure
                    </div>
                     <h2 class="text-left text-xl mt-6 pb-6 font-bold text-gray-600">Payment</h2>
                     <div v-if="showLoader" class="bg-white rounded-full shadow w-12 h-12 mx-auto flex items-center justify-center">
                        <div style="border-top-color:transparent"
                            class="w-8 h-8 border-4 border-green border-solid rounded-full animate-spin"></div>

                    </div>
            <client-only>
                <div v-if="elementsOptions.clientSecret">
                    <stripe-element-payment 
                    ref="paymentRef"
                    :pk="publishableKey"
                    :testMode="true"
                    :elements-options="elementsOptions"
                    :confirm-params="confirmParams"
                    @element-ready="onStripeElementReady()"
                    />
                    <button v-if="stripePayNowButton" @click="stripePay()" class="bg-firoza text-white font-bold py-2 px-3 h-12 rounded w-full text-base mt-6">
                        {{ $t("paynow") }}
                    </button>
                </div>
            </client-only>
            </div>
            </div>
                <!-- :line-items= "items" -->
        </div>

        <!--footer section start here-->
        <!-- <Footer /> -->
    </div>
</template>
<!-- <script src="https://sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js"></script> -->
<script>
    import Vue from 'vue'
    import {StripeElementPayment} from '@vue-stripe/vue-stripe';
    export default Vue.extend({
        components: {
            StripeElementPayment
        },
        data() {
            return {
                apiUrls: this.$config.apiUrls,
                dealId: this.$route.params.orderid, //'23VBCXqHo64CM2k9DY7sSo',
                stripePayNowButton: false,
                queryParams : this.$route.query,


                //////////// Start for stripr /////////////
                showLoader: true,
                // publishableKey: 'pk_test_51JjnGpSBIGusfDAdU4lHYo10nFlbJHdzHmEFSYPiulT8e7NNMdl8EbT5sXifTkrsyTADJR39xVru7YX6wQrmPdGl00v3CdLljJ',
                publishableKey: this.$config.stripe_publishable_key, 
                clientReferenceId: null,
                // successURL: 'http://localhost:3000/payment',
                // cancelURL: 'http://localhost:3000/payment',
                elementsOptions: {
                    appearance: {
                        labels: 'floating',
                        theme: 'stripe',
                        variables: {
                            colorPrimary: '#0570de',
                            colorBackground: '#ffffff',
                            colorText: '#30313d',
                            colorDanger: '#df1b41',
                            fontFamily: 'Ideal Sans, system-ui, sans-serif',
                            spacingUnit: '2px',
                            borderRadius: '4px',
                            // See all possible variables below
                        }
                    }, // appearance options
                    clientSecret: null
                },
                confirmParams: {
                    return_url: '', //'http://localhost:3000/payment/payment-resp', // success url
                }, 
                //////////// End for stripr /////////////
            }            
        },
        created() {
            if(this.dealId) {
                // console.log('Payment start');
                // this.stripePayment();
                // this.cashfreePayment();
                if(process.client){
                                        
                    if(this.queryParams && this.queryParams.paymentGateway === 'CASHFREE') {
                        this.initiateCashfreePayment();
                    }
                    
                    if(this.queryParams && this.queryParams.paymentGateway === 'STRIPE') {
                        this.confirmParams.return_url = this.queryParams.returnUrl
                        this.initiateStripePayment();
                    }

                }

                
            }
        }, 
        destroyed() { 
            document.removeEventListener('touchstart', this.touchStart); 
        },
        // asyncData() {
        //     return {
        //         showLoader: true,
        //         publishableKey: 'pk_test_51JjnGpSBIGusfDAdU4lHYo10nFlbJHdzHmEFSYPiulT8e7NNMdl8EbT5sXifTkrsyTADJR39xVru7YX6wQrmPdGl00v3CdLljJ',
        //         publishableKey: $config.stripe_publishable_key, 
        //         clientReferenceId: null,
        //         // successURL: 'http://localhost:3000/payment',
        //         // cancelURL: 'http://localhost:3000/payment',
        //         elementsOptions: {
        //             appearance: {
        //                 labels: 'floating',
        //                 theme: 'stripe',
        //                 variables: {
        //                     colorPrimary: '#0570de',
        //                     colorBackground: '#ffffff',
        //                     colorText: '#30313d',
        //                     colorDanger: '#df1b41',
        //                     fontFamily: 'Ideal Sans, system-ui, sans-serif',
        //                     spacingUnit: '2px',
        //                     borderRadius: '4px',
        //                     // See all possible variables below
        //                 }
        //             }, // appearance options
        //             clientSecret: null
        //         },
        //         confirmParams: {
        //             return_url: 'http://localhost:3000/payment/payment-resp', // success url
        //         }, 
        //     }
        // },
        methods: {
            async registerPayment(paymentGateway = 'CASHFREE'){
                let requestUrl  = this.apiUrls.registerPayment
                requestUrl      = requestUrl.replace('{dealId}', this.dealId);
                let returnUrl   = this.getReturnUrl(paymentGateway);
                let requestObj  = {}
                switch (paymentGateway) {
                    case 'CASHFREE':
                        requestObj = {
                            paymentGateway: 'CASHFREE', //'STRIPE','CASHFREE'
                            returnUrl: returnUrl
                        };
                        break;
                    case 'STRIPE':
                        requestObj = {
                            paymentGateway: 'STRIPE', //'STRIPE','CASHFREE'
                        }
                        break;
                    default:
                        requestObj = {
                            paymentGateway: 'STRIPE', //'STRIPE','CASHFREE'
                        };
                }

                let registerPayment = await this.$axios.put(requestUrl, requestObj)
                .then(function (response) {
                    console.log(response);
                    return response;
                })
                .catch(function (error) {
                    console.log(error);
                });

                //registerPayment.data.payload.paymentLink;
                return registerPayment;
            },
            initiateCashfreePayment(){               

                // if(this.queryParams && this.queryParams.paymentLink){
                //     const redirectUrl = this.queryParams.paymentLink;
                //     // window.location.href = redirectUrl;
                //     // console.log('redirectUrl:', redirectUrl);
                //     window.open(redirectUrl, '_parent');
                // }
                
                // "orderToken" is session_id 
                if(this.queryParams && this.queryParams.orderToken){
                   
                    if(process.client){
                        const paymentSessionId = this.queryParams.orderToken
                        if (paymentSessionId == "") {
                            alert("No session_id specified");
                            return
                        };
                        const cf = new Cashfree(paymentSessionId);
                        cf.redirect();
                    }
                }
            },
            initiateStripePayment(){
                if(this.queryParams && this.queryParams.clientSecret){
                    this.elementsOptions.clientSecret = this.queryParams.clientSecret;
                }
            },
            async cashfreePayment() {
                // console.log(this.cashfreeRedirectUrl, this.publishableKey);
                const cashfreeResponse = await this.registerPayment();
                console.log('cashfreeResponse', cashfreeResponse);
                if(cashfreeResponse && cashfreeResponse.data){
                    const redirectUrl = cashfreeResponse.data.payload.paymentLink;
                    // window.location.href = redirectUrl;
                    console.log('redirectUrl:', redirectUrl);
                    window.open(redirectUrl, '_parent');
                }
                // window.location.href = this.cashfreeRedirectUrl;
            },

            async stripePayment() {
                const stripeResponse = await this.registerPayment('STRIPE');
                const responseData = stripeResponse ? stripeResponse.data : stripeResponse;
                console.log('stripe_Response:', stripeResponse);
                console.log('stripe_responseData:', responseData);
                if(responseData && responseData.success) {
                    // this.clientReferenceId = responseData.payload.clientSecret;
                    this.elementsOptions.clientSecret = responseData.payload.clientSecret;
                    // this.$refs.checkoutRef.redirectToCheckout();

                }
                // this.$refs.checkoutRef.redirectToCheckout();
            },

            getReturnUrl(paymentGateway = 'CASHFREE') {
                // let returnUrl = (paymentGateway === 'CASHFREE')? '/payment/payment-resp?currentDealId='+this.dealId+'&order_id={order_id}&order_token={order_token}' : '/payment/payment-resp';
                let returnUrl = (paymentGateway === 'CASHFREE')? '/payment/payment-resp?currentDealId='+this.dealId+'&order_id={order_id}' : '/payment/payment-resp';
                returnUrl = window.location.origin + returnUrl;
                return returnUrl;
            },
            stripePay() {
                this.$refs.paymentRef.submit();
            },
            onStripeElementReady() {
                this.stripePayNowButton = true;
                this.showLoader = false;
            }
        }
    })
</script>
<style scoped>
.p-GridCell{
    margin-bottom: 15px !important;
}
#stripe-payment-element-errors{
    color: red !important;
    font-size: 12px !important;
}
</style>