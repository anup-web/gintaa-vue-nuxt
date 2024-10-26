<template>
  <div class="w-full h-full flex flex-col flex-auto">

    <div class="w-full flex flex-col relative">
      <div class="flex items-center justify-center relative pt-3.5 pb-4">
        <div class="text-sm bg-gray-50 w-64 text-center z-20 text-gray-700">
          Today
        </div>
        <div class="w-full absolute top-5 border-t border-gray-400 chr-line" />
      </div>
    </div>

    <div class="w-full mb-4 px-4 flex justify-end ">
      <div class="max-w-[95%] flex justify-end">
        <div class="max-w-full relative bg-darkcolor rounded-lg p-2 msg-cotainer mgs-before-right">
          <div class="w-full flex justify-start text-xsb text-white ">
            <span>Lorem Ipsum is simply Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ... </span>
          </div>
          <div class="w-full flex justify-end">
            <div class="flex items-center text-xs text-gray-300 cursor-pointer">
              <span class="pr-1"> Read more </span>
              <svg width="8" height="6" viewBox="0 0 14 8" fill="none">
                <path d="M0.8 1.7L7 8L13.2 1.7C13.4 1.5 13.5 1.2 13.5 1C13.5 0.8 13.4 0.5 13.2 0.3C13 0.1 12.8 0 12.5 0H1.5C1.2 0 1 0.1 0.8 0.3C0.6 0.5 0.5 0.7 0.5 1C0.5 1.3 0.6 1.5 0.8 1.7Z" fill="rgb(209 213 219)" />
              </svg>
            </div>
            <!-- <div class="flex items-center text-xs text-gray-300 cursor-pointer"> <span class="pr-1"> Read less  </span>
                 <svg width="8" height="6" viewBox="0 0 13 8" fill="none" >
                <path d="M12.7 6.3L6.5 0L0.3 6.3C0.1 6.5 0 6.8 0 7C0 7.2 0.1 7.5 0.3 7.7C0.5 7.9 0.7 8 1 8H12C12.3 8 12.5 7.9 12.7 7.7C12.9 7.5 13 7.2 13 7C13 6.8 12.9 6.5 12.7 6.3Z" fill="rgb(209 213 219)"/>
                </svg>

            </div> -->
          </div>

          <div class="w-full flex justify-end mt-2 msg-time-bottom ">
            <div class="text-xs text-gray-100 flex self-end">
              04:31 pm
            </div>

            <div class="double-check flex self-end">
              <!-- <svg width="20" height="20" viewBox="0 0 24 24" fill="none" >
              <path d="M9.17206 18.657C8.90686 18.6569 8.65255 18.5515 8.46506 18.364L2.80806 12.707C2.6259 12.5184 2.5251 12.2658 2.52738 12.0036C2.52966 11.7414 2.63483 11.4906 2.82024 11.3052C3.00565 11.1198 3.25646 11.0146 3.51865 11.0123C3.78085 11.01 4.03345 11.1108 4.22206 11.293L9.17206 16.243L19.7781 5.636C19.9667 5.45384 20.2193 5.35305 20.4815 5.35532C20.7437 5.3576 20.9945 5.46277 21.1799 5.64818C21.3653 5.83359 21.4705 6.0844 21.4727 6.3466C21.475 6.60879 21.3742 6.8614 21.1921 7.05L9.87906 18.364C9.69156 18.5515 9.43725 18.6569 9.17206 18.657V18.657Z" fill="#acacac"/>
              </svg> -->
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.602 13.76L13.014 15.172L21.48 6.706L22.894 8.12L13.014 18L6.65 11.636L8.064 10.222L10.189 12.347L11.602 13.759V13.76ZM11.604 10.932L16.556 5.979L17.966 7.389L13.014 12.342L11.604 10.932ZM8.777 16.587L7.364 18L1 11.636L2.414 10.222L3.827 11.635L3.826 11.636L8.777 16.587V16.587Z" fill="#acacac" />
              </svg>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="dropstart relative">
            <button
              id="dropdownMenuButton1s"
              class="bg-transparent rounded-full flex items-center text-gray-400 "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg width="6" height="22" class="h-4 w-4" viewBox="0 0 4 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2ZM0 9C0 7.89543 0.89543 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.89543 11 0 10.1046 0 9ZM2 14C0.89543 14 0 14.8954 0 16C0 17.1046 0.89543 18 2 18C3.10457 18 4 17.1046 4 16C4 14.8954 3.10457 14 2 14Z" fill="#121212" />
              </svg>
            </button>
            <ul
              class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg
                        mt-1 hidden m-0 bg-clip-padding border-none"
              aria-labelledby="dropdownMenuButton1s"
            >
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                >Reply</a>
              </li>
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                >{{$t('copy')}}</a>
              </li>
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                >{{$t('deleteForMe')}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full mb-4 px-4 flex justify-start ">
      <div class="max-w-[95%] flex justify-start">
        <div class="max-w-full relative bg-white rounded-lg p-2 msg-cotainer mgs-before-left">
          <div class="w-full flex justify-start text-xsb text-gray-900 ">
            <span>Lorem Ipsum is simply Ipsum is simply
              industry. Lorem </span>
          </div>
          <!-- <div class="w-full flex justify-end" >
            <div class="flex items-center text-xs text-gray-700 cursor-pointer"> <span class="pr-1"> Read more </span>
                 <svg width="8" height="6" viewBox="0 0 14 8" fill="none" >
                  <path d="M0.8 1.7L7 8L13.2 1.7C13.4 1.5 13.5 1.2 13.5 1C13.5 0.8 13.4 0.5 13.2 0.3C13 0.1 12.8 0 12.5 0H1.5C1.2 0 1 0.1 0.8 0.3C0.6 0.5 0.5 0.7 0.5 1C0.5 1.3 0.6 1.5 0.8 1.7Z" fill="rgb(55 65 81)"/>
                  </svg>
            </div>
            <div class="flex items-center text-xs text-gray-700 cursor-pointer"> <span class="pr-1"> Read less  </span>
                 <svg width="8" height="6" viewBox="0 0 13 8" fill="none" >
                <path d="M12.7 6.3L6.5 0L0.3 6.3C0.1 6.5 0 6.8 0 7C0 7.2 0.1 7.5 0.3 7.7C0.5 7.9 0.7 8 1 8H12C12.3 8 12.5 7.9 12.7 7.7C12.9 7.5 13 7.2 13 7C13 6.8 12.9 6.5 12.7 6.3Z" fill="rgb(55 65 81)"/>
                </svg>

            </div>

          </div> -->

          <div class="w-full flex justify-end mt-2 msg-time-bottom ">
            <div class="text-xs text-gray-500 flex self-end">
              04:31 pm
            </div>

            <div class="double-check flex self-end">
              <!-- <svg width="20" height="20" viewBox="0 0 24 24" fill="none" >
              <path d="M9.17206 18.657C8.90686 18.6569 8.65255 18.5515 8.46506 18.364L2.80806 12.707C2.6259 12.5184 2.5251 12.2658 2.52738 12.0036C2.52966 11.7414 2.63483 11.4906 2.82024 11.3052C3.00565 11.1198 3.25646 11.0146 3.51865 11.0123C3.78085 11.01 4.03345 11.1108 4.22206 11.293L9.17206 16.243L19.7781 5.636C19.9667 5.45384 20.2193 5.35305 20.4815 5.35532C20.7437 5.3576 20.9945 5.46277 21.1799 5.64818C21.3653 5.83359 21.4705 6.0844 21.4727 6.3466C21.475 6.60879 21.3742 6.8614 21.1921 7.05L9.87906 18.364C9.69156 18.5515 9.43725 18.6569 9.17206 18.657V18.657Z" fill="#acacac"/>
              </svg> -->
              <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
              <path d="M11.602 13.76L13.014 15.172L21.48 6.706L22.894 8.12L13.014 18L6.65 11.636L8.064 10.222L10.189 12.347L11.602 13.759V13.76ZM11.604 10.932L16.556 5.979L17.966 7.389L13.014 12.342L11.604 10.932ZM8.777 16.587L7.364 18L1 11.636L2.414 10.222L3.827 11.635L3.826 11.636L8.777 16.587V16.587Z" fill="#acacac"/>
              </svg> -->

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.602 13.76L13.014 15.172L21.48 6.706L22.894 8.12L13.014 18L6.65 11.636L8.064 10.222L10.189 12.347L11.602 13.759V13.76ZM11.604 10.932L16.556 5.979L17.966 7.389L13.014 12.342L11.604 10.932ZM8.777 16.587L7.364 18L1 11.636L2.414 10.222L3.827 11.635L3.826 11.636L8.777 16.587V16.587Z" fill="#59a3ef" />
              </svg>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <div class="dropstart relative">
            <button
              id="dropdownMenuButton1s"
              class="bg-transparent rounded-full flex items-center text-gray-400 "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg width="6" height="22" class="h-4 w-4" viewBox="0 0 4 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2ZM0 9C0 7.89543 0.89543 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.89543 11 0 10.1046 0 9ZM2 14C0.89543 14 0 14.8954 0 16C0 17.1046 0.89543 18 2 18C3.10457 18 4 17.1046 4 16C4 14.8954 3.10457 14 2 14Z" fill="#121212" />
              </svg>
            </button>
            <ul
              class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg
                        mt-1 hidden m-0 bg-clip-padding border-none"
              aria-labelledby="dropdownMenuButton1s"
            >
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                >Reply</a>
              </li>
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                >Copy</a>
              </li>
              <li>
                <a
                  class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  href="#"
                >{{$t('deleteForMe')}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.mgs-before-left:before, .mgs-before-right:before {
    content: "";
    height: 16px;
    position: absolute;
    bottom: 0;
    width: 17px;
    background-position: 100% 100%;
    background-repeat: no-repeat;
}

.mgs-before-right:before {
    right: -8px;
    background-image: url(~/assets/images/chat/shape-1.svg);
}

.mgs-before-left:before {
    left: -8px;
    background-image: url(~/assets/images/chat/shape-2.svg);
}

</style>
