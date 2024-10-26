<template>
  <div v-if="isBlocked" class="w-full">
    <div class="w-full chat-footer-bottom bg-white rounded-t mt-3 px-5 py-3 shadow-lg">
      <div class="w-full flex items-center justify-center text-sm text-red-500">
        You’ve been blocked by this contact
      </div>
      <!-- <div class="w-full flex items-center justify-center text-sm text-red-500">
        You’ve been blocked by Konstantin
      </div>
      <div class="w-full flex items-center justify-center mt-3">
        <button type="submit" class="w-20 border border-firoza flex justify-center items-center bg-transparent rounded text-firoza font-normal py-0.5 px-2 text-xsb">
          Unblock
        </button>
      </div> -->
    </div>
  </div>
  <div v-else class="w-full">
    <!-- send all selected user start  -->
    <!-- <div class="bg-white shadow-lg w-full rounded-t-lg px-6 py-4 -mb-3">
           <div class="text-base font-normal text-gray-900">Message for
               <span class="text-green underline decoration-gray-900 decoration-dashed underline-offset-4">5 users</span></div>
      </div>     -->

    <!-- send all selected user end  -->

    <!-- chat user unblock start -->
    <!-- <div class="w-full chat-footer-bottom bg-white rounded-t mt-3 px-5 py-3 shadow-lg">
                <div class="w-full flex items-center justify-center text-sm text-red-500">You’ve blocked Konstantin</div>
                <div class="w-full flex items-center justify-center text-sm text-red-500">You’ve been blocked by Konstantin</div>
                <div class="w-full flex items-center justify-center mt-3">
                <button type="submit" class="w-20 border border-firoza flex justify-center items-center bg-transparent rounded text-firoza font-normal py-0.5 px-2 text-xsb"> Unblock </button>
                </div>
           </div> -->
    <!-- chat user unblock end -->
    <!-- <div class="dgsf">sample text</div> -->
    <div class="w-full chat-footer-bottom bg-gray-200 rounded-t mt-3 py-3 ">
      <div class="w-full relative float-none flex-row flex-nowrap flex grow items-center flex-basis-[auto]  chat-input-msg">
        <div class="flex static float-none box-border msg-chat-left pl-3 z-50">
          <emoji-picker :search="search" @emoji="insert">
            <div slot="emoji-invoker" slot-scope="{ events: { click: clickEvent } }" class="emoji cursor-pointer" @click.stop="clickEvent">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11ZM11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM6.4 12.2C6.84044 11.8697 7.46468 11.9576 7.79686 12.3958L7.8015 12.4018C7.80745 12.4093 7.81877 12.4234 7.83531 12.4431C7.86846 12.4826 7.92219 12.5442 7.99543 12.6206C8.14272 12.7743 8.36407 12.9828 8.65067 13.1913C9.22773 13.6109 10.0255 14 11 14C11.9745 14 12.7723 13.6109 13.3493 13.1913C13.6359 12.9828 13.8573 12.7743 14.0046 12.6206C14.0778 12.5442 14.1315 12.4826 14.1647 12.4431C14.1812 12.4234 14.1925 12.4093 14.1985 12.4018L14.2031 12.3958C14.5353 11.9576 15.1596 11.8697 15.6 12.2C16.0418 12.5314 16.1314 13.1582 15.8 13.6L15 13C15.8 13.6 15.7998 13.6003 15.7995 13.6006L15.799 13.6013L15.7978 13.6029L15.7951 13.6065L15.7879 13.6159L15.7666 13.6432C15.7493 13.6649 15.726 13.6938 15.6966 13.7288C15.638 13.7987 15.555 13.8933 15.4486 14.0044C15.2365 14.2257 14.9266 14.5172 14.5257 14.8087C13.7277 15.3891 12.5255 16 11 16C9.47447 16 8.27227 15.3891 7.47433 14.8087C7.07343 14.5172 6.76353 14.2257 6.55145 14.0044C6.445 13.8933 6.36201 13.7987 6.30336 13.7288C6.27401 13.6938 6.25065 13.6649 6.23341 13.6432L6.21211 13.6159L6.2049 13.6065L6.20216 13.6029L6.20101 13.6013L6.20049 13.6006C6.20024 13.6003 6.2 13.6 7 13L6.2 13.6C5.86863 13.1582 5.95817 12.5314 6.4 12.2ZM7 8C7 7.44772 7.44772 7 8 7H8.01C8.56229 7 9.01 7.44772 9.01 8C9.01 8.55229 8.56229 9 8.01 9H8C7.44772 9 7 8.55229 7 8ZM14 7C13.4477 7 13 7.44772 13 8C13 8.55229 13.4477 9 14 9H14.01C14.5623 9 15.01 8.55229 15.01 8C15.01 7.44772 14.5623 7 14.01 7H14Z" fill="#8CAEC5" />
              </svg>
            </div>
            <div slot="emoji-picker" slot-scope="{ emojis, insert, display }" class="absolute left-0 bottom-[3.125rem] bg-white p-4 shadow-lg h-80 rounded z-20 overflow-x-hidden overflow-y-auto auto-scroll">
              <div>
                <div>
                  <input v-model="search" type="text">
                </div>
                <div>
                  <div v-for="(emojiGroup, category) in emojis" :key="category">
                    <h5>{{ category }}</h5>
                    <div>
                      <button
                        v-for="(emoji, emojiName) in emojiGroup"
                        :key="emojiName"
                        :title="emojiName"
                        @click="insert(emoji)"
                      >
                        {{ emoji }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </emoji-picker>
        </div>

        <div class="flex static float-none box-border flex-auto msg-chat-middle">
          <div class="w-full flex items-center pl-2">
    <div class="p-[5px] bg-gray-200 absolute bottom-0 left-0 w-full pl-[42px] z-30">       
    <div id="ta-frame">
      <textarea id="textarea-custom"
              v-model="msgTxt"              
              name="text"
              rows="1"              
              class="block w-full outline-none bg-transparent pl-2 text-sm"
             :placeholder="$t('typeYourMessagePlace')"
              autocomplete="off"
              @keyup.enter="sendTxtMsg"
              @focusin="typingOn"
              @focusout="typingOff"
              @keydown="autosize()" 
            > </textarea>
    </div>
    </div>
      <div class="flex cursor-pointer absolute right-[118px] z-50" @click="sendTxtMsg">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5255 11.0935C21.5255 11.4096 21.3789 11.6914 21.1499 11.8746C21.0857 11.926 21.0151 11.9696 20.9394 12.0041L1.86741 21.1869C1.49798 21.3648 1.0574 21.2991 0.755896 21.0212C0.45439 20.7434 0.353057 20.3096 0.500244 19.9269L3.89771 11.0935L0.500244 2.2601C0.353056 1.87741 0.45439 1.44365 0.755896 1.16578C1.0574 0.887912 1.49798 0.822249 1.86741 1.00012L20.9394 10.1829C21.0154 10.2175 21.0864 10.2614 21.1508 10.3131C21.1983 10.3511 21.2419 10.3932 21.2813 10.4387C21.4334 10.6142 21.5255 10.8431 21.5255 11.0935ZM16.1434 10.0935L3.2724 3.89635L5.65592 10.0935H16.1434ZM5.65592 12.0935H16.1434L3.2724 18.2907L5.65592 12.0935Z" fill="#8CAEC5" />
              </svg>
            </div>
          </div>
        </div>

        <div class="flex static float-none min-w-[auto] box-border w-[auto] items-center msg-chat-right pr-3 z-50">
          <div class=" flex justify-center">
            <div class="flex justify-center pl-2 mt-1">
              <div class="dropstart relative">
                <button
                  id="dropdownMenuButton1s"
                  class="bg-transparent rounded-full flex items-center text-gray-400 "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M21.4398 11.0499L12.2498 20.2399C11.124 21.3658 9.59699 21.9983 8.0048 21.9983C6.41262 21.9983 4.88565 21.3658 3.7598 20.2399C2.63396 19.1141 2.00146 17.5871 2.00146 15.9949C2.00146 14.4027 2.63396 12.8758 3.7598 11.7499L12.9498 2.55992C13.7004 1.80936 14.7183 1.3877 15.7798 1.3877C16.8413 1.3877 17.8592 1.80936 18.6098 2.55992C19.3604 3.31048 19.782 4.32846 19.782 5.38992C19.782 6.45138 19.3604 7.46936 18.6098 8.21992L9.4098 17.4099C9.03452 17.7852 8.52553 17.996 7.9948 17.996C7.46407 17.996 6.95508 17.7852 6.5798 17.4099C6.20452 17.0346 5.99369 16.5256 5.99369 15.9949C5.99369 15.4642 6.20452 14.9552 6.5798 14.5799L15.0698 6.09992" stroke="#8CAEC5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <ul
                  class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg
                        mt-1 hidden m-0 bg-clip-padding border-none"
                  aria-labelledby="dropdownMenuButton1s"
                >
                  <li>
                    <input
                      ref="imageUpload"
                      type="file"
                      name="imageUpload"
                      accept="image/*"
                      style="display:none;"
                      @change="sendPhoto"
                    >
                    <a
                      class="cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      @click="$refs.imageUpload.click()"
                    >Photo</a>
                  </li>
                  <li>
                    <input
                      ref="videoUpload"
                      type="file"
                      name="videoUpload"
                      accept="video/*"
                      style="display:none;"
                      @change="sendVideo"
                    >
                    <a
                      class="cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      @click="$refs.videoUpload.click()"
                    >Video</a>
                  </li>
                  <li>
                    <input
                      ref="audioUpload"
                      type="file"
                      name="audioUpload"
                      accept="audio/*"
                      style="display:none;"
                      @change="sendAudio"
                    >
                    <a
                      class="cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      @click="$refs.audioUpload.click()"
                    >Audio</a>
                  </li>
                  <li>
                    <input
                      ref="documentUpload"
                      type="file"
                      name="documentUpload"
                      style="display:none;"
                      @change="sendAttachment"
                    >
                    <a
                      class="cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      @click="$refs.documentUpload.click()"
                    >File from OS</a>
                  </li>
                  <li>
                    <a
                      class="cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      @click="showListingPopup = true"
                    >Listing</a>
                  </li>
                </ul>
              </div>
            </div>



     <div class="flex justify-center pl-2 mt-1">
     <div>
    <div class="dropdown relative">
      <button class="dropdown-toggle flex items-center whitespace-nowrap"
        type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <svg width="16" height="20" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49923 21.4488C9.19692 21.6504 8.80259 21.6501 8.50028 21.4485L8.49771 21.4468L8.49171 21.4428L8.47109 21.4288C8.45356 21.4169 8.42857 21.3998 8.3966 21.3777C8.33268 21.3334 8.24082 21.2689 8.12501 21.1853C7.89349 21.0181 7.56572 20.774 7.17374 20.4619C6.3912 19.8387 5.34545 18.9385 4.29664 17.8315C2.23584 15.6562 0 12.5117 0 9C0 6.61305 0.948211 4.32387 2.63604 2.63604C4.32387 0.948211 6.61305 0 9 0C11.3869 0 13.6761 0.948211 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 12.5117 15.7642 15.6562 13.7034 17.8315C12.6546 18.9385 11.6088 19.8387 10.8263 20.4619C10.4343 20.774 10.1065 21.0181 9.87499 21.1853C9.75918 21.2689 9.66732 21.3334 9.6034 21.3777C9.57143 21.3998 9.54644 21.4169 9.52891 21.4288L9.50829 21.4428L9.50229 21.4468L9.50039 21.4481L9.49923 21.4488ZM3.90883 3.90883C5.25909 2.55857 7.09044 1.8 9 1.8C10.9096 1.8 12.7409 2.55857 14.0912 3.90883C15.4414 5.25909 16.2 7.09044 16.2 9C16.2 11.7883 14.3858 14.4938 12.3966 16.5935C11.4204 17.624 10.4412 18.4675 9.70499 19.0538C9.431 19.2719 9.19168 19.4537 9 19.5953C8.80832 19.4537 8.569 19.2719 8.29501 19.0538C7.5588 18.4675 6.57955 17.624 5.60336 16.5935C3.61416 14.4938 1.8 11.7883 1.8 9C1.8 7.09044 2.55857 5.25909 3.90883 3.90883Z" fill="#8CAEC5"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 9C5.4 7.01178 7.01178 5.4 9 5.4C10.9882 5.4 12.6 7.01178 12.6 9C12.6 10.9882 10.9882 12.6 9 12.6C7.01178 12.6 5.4 10.9882 5.4 9ZM7.2 9C7.2 8.00589 8.00589 7.2 9 7.2C9.99411 7.2 10.8 8.00589 10.8 9C10.8 9.99411 9.99411 10.8 9 10.8C8.00589 10.8 7.2 9.99411 7.2 9Z" fill="#8CAEC5"/>
      </svg>
        
      </button>
      <div class="dropdown-menu w-[370px] absolute hidden bg-white z-50  p-3 list-none text-left mt-1  shadow-lg m-0 bg-clip-padding border-none bottom-[38px] -left-[296px]" 
      aria-labelledby="dropdownMenuButton1">
      <div class="absolute -bottom-[42px] h-[458px] bg-black opacity-25 w-full left-0 z-10"></div>
      <div class="relative z-50 bg-white p-3 rounded-sm">
        <h5 class="text-[14px] mb-3 font-medium text-600"> {{$t('shareAddressChat')}}</h5>
     <div class="address-list auto-scroll bg-white">
        <ul class="border-t border-gray-200 border-l">

          <div v-if="!userAllAddress.length" class="w-full flex items-center justify-end mt-3">
                                    <a 
                                        @click="openAddAddressPopup()"
                                        href="javascript:;" 
                                        class="w-[130px] border border-firoza flex justify-center items-center bg-transparent
                                         py-1.5 px-3 rounded  text-firoza font-normal text-sm" >
                                         <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5" ><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" ></path></svg>
                                          <span >{{$t('addAddress')}}</span>
                                    </a>
                                </div>
        <li 
          v-for="(address, index) in userAllAddress"
          :key="'share-address-'+index" 
          class="w-[310px]">
          <a class="dropdown-item text-[11px] border-r border-gray-200 py-2 px-3 font-normal block w-full bg-transparent text-gray-900 hover:bg-gray-100   items-start relative"
            href="javascript:;"
            @click="shareAddress(address, index)">
                     <!-- <svg class=" absolute top-[3px] left-[2px]" width="12" height="17" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#8CAEC5"/>
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#8CAEC5"/>
                     </svg> -->
                    <div class="font-bold pb-1"> {{ address.annotation === 'Home'? $t('home') : address.annotation === 'Work' ? $t('work') : $t(address.annotation) }}</div>
            <div class="text-gray-800">{{getAddressitemDet(address)}}</div>
          </a>
        </li>
        <!-- <div class="w-full flex items-center justify-end mt-3">
             <a href="javascript:;" class="w-[95px] border border-firoza mr-2 flex justify-center items-center bg-transparent
                py-1 px-1 rounded  text-firoza font-normal text-[11px]" >
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4" ><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" ></path></svg>
                <span> Add address </span>
             </a>
        </div> -->
      </ul>
    </div></div>

    </div>
    </div>
  </div>
</div>


          <div @click="shareMobileNo" class="share-chat-mobile text-gray-400 flex justify-center pl-2 mt-1">
              <button class="flex justify-center bg-transparent p-0 m-0">               
	             <svg width="12" height="17" viewBox="0 0 73 123" fill="none" >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.94 0H61.98C68 0 72.93 4.93 72.93 10.94V111.93C72.93 117.95 68 122.87 61.99 122.87H10.95C4.93 122.88 0 117.95 0 111.94V10.95C0 4.93 4.93 0 10.94 0ZM36.46 100.1C40.37 100.1 43.55 103.27 43.55 107.19C43.55 111.1 40.37 114.28 36.46 114.28C32.54 114.28 29.37 111.11 29.37 107.19C29.37 103.28 32.55 100.1 36.46 100.1ZM25.17 8.86H47.76C47.92 8.86 48.06 9 48.06 9.16V12.46C48.06 12.62 47.92 12.76 47.76 12.76H25.17C25.01 12.76 24.87 12.63 24.87 12.46V9.16C24.87 8.99 25 8.86 25.17 8.86ZM9.65 21.53H63.28C64.26 21.53 65.06 22.34 65.06 23.31V93.32C65.06 94.29 64.25 95.1 63.28 95.1H9.65C8.68 95.1 7.87 94.3 7.87 93.32V23.3C7.87 22.33 8.67 21.53 9.65 21.53Z" fill="#8CAEC5"/>
                </svg>
              </button>  
          </div>

            <div class="audio ml-1 cursor-pointer audio-record-fauto">
             
              <!-- <VueRecordAudio :mode="'press'" @result="onRecordResult" class="customrecord" /> -->


              <audio-recorder
         upload-url="some url"
         :before-recording="callback"
    :pause-recording="callback"
    :after-recording="callback"
    :select-record="callback"
    :before-upload="callback"
    :successful-upload="callback"
    :failed-upload="callback" class="customrecords"/>
              <!-- <svg width="16" height="20" viewBox="0 0 16 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C6.93913 0 5.92172 0.421427 5.17157 1.17157C4.42143 1.92172 4 2.93913 4 4V12C4 13.0609 4.42143 14.0783 5.17157 14.8284C5.92172 15.5786 6.93913 16 8 16C9.06087 16 10.0783 15.5786 10.8284 14.8284C11.5786 14.0783 12 13.0609 12 12V4C12 2.93913 11.5786 1.92172 10.8284 1.17157C10.0783 0.421427 9.06087 0 8 0ZM6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2C8.53043 2 9.03914 2.21071 9.41421 2.58579C9.78929 2.96086 10 3.46957 10 4V12C10 12.5304 9.78929 13.0391 9.41421 13.4142C9.03914 13.7893 8.53043 14 8 14C7.46957 14 6.96086 13.7893 6.58579 13.4142C6.21071 13.0391 6 12.5304 6 12V4C6 3.46957 6.21071 2.96086 6.58579 2.58579ZM2 10C2 9.44771 1.55228 9 1 9C0.447715 9 0 9.44771 0 10V12C0 14.1217 0.842855 16.1566 2.34315 17.6569C3.60577 18.9195 5.247 19.7165 7 19.9373V22H4C3.44772 22 3 22.4477 3 23C3 23.5523 3.44772 24 4 24H8H12C12.5523 24 13 23.5523 13 23C13 22.4477 12.5523 22 12 22H9V19.9373C10.753 19.7165 12.3942 18.9195 13.6569 17.6569C15.1571 16.1566 16 14.1217 16 12V10C16 9.44771 15.5523 9 15 9C14.4477 9 14 9.44771 14 10V12C14 13.5913 13.3679 15.1174 12.2426 16.2426C11.1174 17.3679 9.5913 18 8 18C6.4087 18 4.88258 17.3679 3.75736 16.2426C2.63214 15.1174 2 13.5913 2 12V10Z" fill="#8CAEC5" />
              </svg> -->
            </div>
          </div>

          <!-- chat voice record start  -->
          <!-- <div class="flex items-center justify-evenly">
                      <div class="record-cancel flex items-center justify-center w-8 h-8 rounded-full border-2 border-red-600 cursor-pointer">
                           <svg width="12" height="12" viewBox="0 0 14 14" fill="none" >
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="#FC2323"/>
                            </svg>
                      </div>
                      <div class="record-timing flex items-center w-20 justify-center">
                            <div class="w-3 h-3 rounded-full bg-red-600 record-blink"></div>
                            <div class="text-gray-900 text-sm ml-2">12:30</div>
                      </div>
                      <div class="record-send flex items-center justify-center w-8 h-8 rounded-full border-2 border-green cursor-pointer">
                           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" >
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L19.2929 5.29289C19.6834 4.90237 20.3166 4.90237 20.7071 5.29289Z" fill="#8bc63e"/>
                            </svg>
                      </div>
                 </div>      -->
          <!-- chat voice record end  -->
        </div>
      </div>
    </div>

    <!-- send all selected user start  -->
    <!-- <div class="w-full flex flex-col bg-white px-5 py-2 shadow-lg">
         <button type="submit" class="w-full transition-all flex justify-center items-center border border-green bg-green py-2 px-6 rounded font-normal text-base text-white hover:bg-firoza hover:border-firoza"><span>Send</span></button>
    </div>  -->
    <!-- send all selected user start  -->
    <UserOfferFullList
      v-if="showListingPopup"
      :display-text1="'Select from your items'"
      :display-text2="'Your full list'"
      :listings="ownListings"
      :save-txt="'Send'"
      @onSelectListing="selectOwnListing"
      @closePopup="closePopup"
    />

      <!-- Start Share phoone number confirm popup -->
      <div v-if="showConfirmationPopup" class="z-50 ">
      <div class="relative z-50 shmodal" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-[400px] sm:w-full sm:p-6">
                <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span class="sr-only">Close</span>
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
                </div>
                <div>
                  <div class="flex justify-center text-center">
                    <img src="~/assets/images/mobile-shareotp.png" alt="mobile-shareotp" class="w-[80px]"/>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <div class="text-gray-600 text-base font-medium py-4 w-full">{{$t('shareMobileNoHeading', {phoneNumber: userMobNo})}}</div>                      
                  </div>
                                  
                </div>
                <div class="mt-5 flex items-center">
                  <button @click="closeConfirmationPopup" type="button" class="mr-4 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">{{ $t("cancel") }}</button>
                  <button @click="shareMobNow" type="button"  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-firoza text-base font-medium text-white hover:bg-firoza focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-firoza sm:col-start-2 sm:text-sm">{{ $t("share_now") }}</button>
          
               </div>
              
            </div>
          </div>
      </div>
    </div>
  </div>
    <!-- End Share phoone number confirm popup --> 




  </div>


  
</template>

<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import EmojiPicker from 'vue-emoji-picker'
export default Vue.extend({
  name: 'ChatFooter',
  components: { EmojiPicker },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  },
  props: ['listing', 'deal', 'msgLen'],
  data () {
    return {
      showListingPopup: false,
      ownListings: [],
      loading: true,
      msgTxt: '',
      otherUser: null,
      search: '',
      isBlocked: false,
      chatCol: this.$route.params.listing_id ? 'tradingChatOffers' : 'tradingChatDeals',
      list_deal_id: this.$route.params.listing_id || this.$route.params.dealRefId,
      room_id: this.$route.params.room_id,
      dealDocumentData: null,
      userChatTypingStatusPath: 'userChat',
      userAllAddress: [],
      showConfirmationPopup:false,
      userMobNo:null
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapState({
      replyMessage: state => state.chat.reply.replyMessage
    }),
    ...mapState({
      msgUser: state => state.chat.reply.user
    })
  },
  mounted () {
    if (this.chatCol === 'tradingChatDeals') {
      this.getOtherUser()
    }
    // this.getOtherUser()
    this.getListingsOfCurrentUser()    
    this.getUserAllAddress()
    this.getProfileMobileNo()
  },
  created () {
    this.$fire.firestore
      .collection(this.chatCol)
      .doc(this.list_deal_id)
      .collection('rooms')
      .doc(this.room_id)
      .onSnapshot((room) => {
        if (room.exists) {
          const data = room.data()
          this.isBlocked = data.isBlocked
        }
      })
    
    this.$fire.firestore
      .collection(this.chatCol)
      .doc(this.list_deal_id)
      .onSnapshot((doc) => {
        this.dealDocumentData = {}
        this.dealDocumentData =  doc.data();
      
      })
  },
  methods: {
     async logEvent(analyticsdata) {
      try {        
        //console.log('=====searchData:', searchData);
        const analyticsData = {
          channel_id: 'WEB',
          user_id: analyticsdata?.user_id,
          message: analyticsdata?.message //user message
        };
        await this.$fire.analytics.logEvent('gintaa_chat_sent', analyticsData)
        console.log('Gintaa caht event log successfully',analyticsData);     
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },

    async getProfileMobileNo(){
        try {
                let url = `/users/v1/user/profile`;
                const data = await this.$axios.$get(url);
                const userDetails = data.payload;

                if(userDetails && userDetails?.mobile){
                  this.userMobNo = userDetails?.mobile
                }
                console.log("userDetails",userDetails)
                
               
            } catch (error) {
               
                console.log(error);
            }

        },
   
    shareMobileNo(){
    if(this.userMobNo){
      this.showConfirmationPopup = true
    }else{
    }
    },

    closeConfirmationPopup(){
    this.showConfirmationPopup = false
    },
   
    shareMobNow(){
    this.msgTxt = this.$t('shareMobileNoMsg', {phoneNumber: this.userMobNo}) 
    this.sendTxtMsg()
    this.msgTxt = ''
    this.closeConfirmationPopup()
    },
    
    getAddressitemDet(addressItemDet){
     const addDetArray = []
     if(addressItemDet){
      addDetArray.push(addressItemDet?.addressLine,addressItemDet?.flatNo,addressItemDet?.area,
      addressItemDet?.city,addressItemDet?.landmark,addressItemDet?.state,addressItemDet?.zip)
     }

     if(addDetArray.length){
      var filtered = addDetArray.filter(function (el) {
      return el != null;
      });
      return filtered.join();
     }
     
    },
    async getOtherUser () {
      this.loading = true
      try {
        const senderId = this.authUser.uid
        const recipId = this.$route.params.room_id.replace(senderId, '').replace('_', '')
        const url = `/users/v1/user/${recipId}`
        const data = await this.$axios.$get(url)
        this.otherUser = data.payload
        this.otherUser.identityId = recipId
        this.loading = false
      } catch (error) {
        this.otherUser = null
        this.loading = false
      }
    },
  
  autosize() {
  var div = document.querySelector('#ta-frame');
  var ta =  document.querySelector('#textarea-custom');  
  setTimeout(function() {
    ta. style.cssText = 'height:0px'; 
    var height = Math.min(20 * 3, ta.scrollHeight);
    div.style.cssText = 'height:' + height + 'px';
    ta. style.cssText = 'height:' + height + 'px';
  },0);
},
    setLoading (uploading) {
      this.$store.dispatch('chat/upload/setLoading', uploading)
      this.$emit('onLoading', uploading)
    },

    callback (data) {
     // console.log("data",data)
        console.debug(data)
        if(data && data.blob){
          this.onRecordResult(data.blob)
        }
        //this.state.destroy()
       
      },
    
    async onRecordResult (audioBlob) {
     // console.log("----------------",audioBlob)
      const file = new File([audioBlob], 'voice.mp3')
      const storageRef = this.$fire.storage.ref().child(`tradingChat/audio/${this.authUser.uid}/aud-${new Date().getTime()}-${file.name}`)
      try {
        this.setLoading(true)
        const snapshot = await storageRef.put(file)
        const url = await storageRef.getDownloadURL()
        const msgAttr = {
          mediaUrls: [url]
        }
        this.writeToFirestore(
          file.name,
          'AUDIO_RECORDING',
          msgAttr
        )
        this.setLoading(false)
      } catch (e) {
        this.setLoading(false)
       
      }
    },
    selectOwnListing (listing, type) {
      if (!listing.selected) {
        this.ownListings = this.ownListings.map((l) => {
          l.selected = listing.offerId === l.offerId
          return l
        })
        // this.sortOwnListings()
        // this.changePayerAmoutAndUser()
      }
    },
    async getListingsOfCurrentUser () {
      this.loading = true
      try {
        // const url = `/offers/v1/offers/filter?states=active&exchangeModes=${this.exchangeMode}&size=30&page=0`
        const url = `/offers/v1/offers/all/${this.authUser.uid}?states=active`
        const data = await this.$axios.$get(url)
        this.ownListings = data.payload
        // this.loading = false
      } catch (error) {
        this.ownListings = []
        // this.loading = false
      }
    },
    closePopup () {
      const result = this.ownListings.filter((obj) => {
        return obj.selected === true
      })
      if (result.length > 0) {
        this.sendListing(result[0])
      }
      this.showListingPopup = false
    },
    insert (emoji) {
      this.msgTxt += emoji
    },
    sendTxtMsg () {      
      var elem = document.getElementById("textarea-custom");    
      elem.style.height = "20px";
      var elems = document.getElementById("ta-frame");    
      elems.style.height = "20px";
      if (!this.msgTxt.trim()) {
        return
      }
       const analyticsdata = {
          channel_id: 'WEB',
          user_id: this.authUser? this.authUser?.uid: null, 
          message: this.msgTxt
        };
      this.logEvent(analyticsdata)
      this.writeToFirestore(this.msgTxt)
      this.msgTxt = ''
    },
    writeToFirestore (msg, msgType = 'HTML', msgAttr = null) {
      if (!msg.trim()) {
        return
      }
      // update offer/deal and room data
      if (this.msgLen === 0) {
        // for listing
        if (this.chatCol === 'tradingChatOffers') {
          const offerData = {
            createdAt: this.$moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
            offerDetails: {
              offerId: this.listing.offerId,
              offerImage: this.listing.images[0].url,
              offerName: this.listing.name
            },
            offerOwnerDetails: {
              identityId: this.listing.user.identityId,
              imageUrl: this.listing.user.imageUrl,
              name: this.listing.user.name
            },
            participants: [this.listing.user.identityId, this.authUser.uid]
          }
          this.$fire.firestore
            .collection(this.chatCol)
            .doc(this.list_deal_id)
            .set(offerData)
          const roomdata = {
            createdAt: this.$moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
            chatInitiatorDetails: {
              identityId: this.authUser.uid,
              imageUrl: this.authUser.photoURL,
              name: this.authUser.displayName
            },
            isBlocked: false,
            isMuted: false,
            offerId: this.listing.offerId,
            offerOwnerDetails: {
              identityId: this.listing.user.identityId,
              imageUrl: this.listing.user.imageUrl,
              name: this.listing.user.name
            }
          }
          this.$fire.firestore
            .collection(this.chatCol)
            .doc(this.list_deal_id)
            .collection('rooms')
            .doc(this.room_id)
            .set(roomdata)
        } else if (this.chatCol === 'tradingChatDeals') {
          // const roomId = this.$store.state.authUser.uid === this.chat.receiver.identityId ? `${this.chat.sender.identityId}_${this.$store.state.authUser.uid}` : `${this.$store.state.authUser.uid}_${this.chat.receiver.identityId}`
          const dealData = {
            createdAt: this.$moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
            // offeredAmount: '',
            offeredOffers: this.deal.offeredOffers,
            participants: [this.deal.sender.id, this.deal.receiver.id],
            receiver: {
              identityId: this.deal.receiver.id,
              imageUrl: this.deal.receiver.imageUrl,
              name: this.deal.receiver.name
            },
            requestedAmount: this.deal.requestedAmount,
            requestedOffers: this.deal.requestedOffers,
            sender: {
              identityId: this.deal.sender.id,
              imageUrl: this.deal.sender.imageUrl,
              name: this.deal.sender.name
            }
          }
          // console.log('dealData', dealData)
          this.$fire.firestore
            .collection(this.chatCol)
            .doc(this.list_deal_id)
            .set(dealData)
          const roomdata = {
            createdAt: this.$moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
            chatInitiatorDetails: {
              identityId: this.authUser.uid,
              imageUrl: this.authUser.photoURL,
              name: this.authUser.displayName
            },
            chatReceiverDetails: {
              identityId: this.otherUser.identityId,
              imageUrl: this.otherUser.photoUrl,
              name: this.otherUser.displayName
            },
            isBlocked: false,
            isMuted: false,
            dealId: this.list_deal_id,
            dealReceiverDetails: {
              identityId: this.deal.receiver.id,
              imageUrl: this.deal.receiver.imageUrl,
              name: this.deal.receiver.name
            }
          }
          // console.log('roomdata', roomdata)
          this.$fire.firestore
            .collection(this.chatCol)
            .doc(this.list_deal_id)
            .collection('rooms')
            .doc(this.room_id)
            .set(roomdata)
        }
      }
      const senderId = this.authUser.uid
      const recipId = this.$route.params.room_id.replace(senderId, '').replace('_', '')
      let replyObj = null
      if (this.replyMessage) {
        replyObj = {
          messageAttr: this.replyMessage.messageAttr,
          messageId: this.replyMessage.message_id,
          messageBody: this.replyMessage.messageBody,
          messageType: this.replyMessage.messageType,
          senderId: this.replyMessage.senderId,
          senderName: this.msgUser.displayName
        }
      }
      
      this.$fire.firestore
        .collection(this.chatCol)
        .doc(this.list_deal_id)
        .collection('rooms')
        .doc(this.room_id)
        .collection('messages')
        .add({
          deletedForMe: [],
          isBlocked: false,
          isDelivered: false,
          isMuted: false,
          isRead: false,
          isSent: true,
          messageAttr: msgAttr,
          messageBody: msg,
          messageTime: this.$moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
          messageTimeNew: this.$fireModule.firestore.FieldValue.serverTimestamp(),
          messageType: msgType, // HTML, IMAGE, VIDEO, FILE, AUDIO_RECORDING, OFFER
          offerId: this.list_deal_id,
          recipientId: recipId,
          roomId: this.$route.params.room_id,
          senderId: senderId == null ? '' : senderId,
          replyObj: replyObj == null ? null : replyObj
        })

        console.log('dealDocumentData:', this.dealDocumentData)

        let unreadMessageDetails = {}
        unreadMessageDetails[senderId] = 0
        unreadMessageDetails[recipId] = this.dealDocumentData?.unreadMessageDetails[recipId] + 1 || 1 //this.$fireModule.firestore.FieldValue.increment(5)
        
        let lastMessage = {
          deletedForMe: [],
          messageAttr: msgAttr,
          messageBody: msg,
          messageTime: this.$moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
          messageTimeNew: this.$fireModule.firestore.FieldValue.serverTimestamp(),
          messageType: msgType, // HTML, IMAGE, VIDEO, FILE, AUDIO_RECORDING, OFFER
          offerId: this.list_deal_id,
          recipientId: recipId,
          roomId: this.$route.params.room_id,
          senderId: senderId == null ? '' : senderId
        }
        this.$fire.firestore
        .collection(this.chatCol)
        .doc(this.list_deal_id)
        .update({unreadMessageDetails: unreadMessageDetails, lastMessage: lastMessage})
      this.$store.dispatch('chat/reply/setMessage', null)
    },
    async sendPhoto (event) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0]
        const storageRef = this.$fire.storage.ref().child(`tradingChat/images/${this.authUser.uid}/img-${new Date().getTime()}-${file.name}`)
        try {
          this.setLoading(true)
          const snapshot = await storageRef.put(file)
          const url = await storageRef.getDownloadURL()
          const msgAttr = {
            mediaUrls: [url]
          }
          this.writeToFirestore(
            file.name,
            'IMAGE',
            msgAttr
          )
          this.setLoading(false)
        } catch (e) {
          this.setLoading(false)
         
        }
      }
    },
    async sendVideo (event) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0]
        const storageRef = this.$fire.storage.ref().child(`tradingChat/videos/${this.authUser.uid}/vid-${new Date().getTime()}-${file.name}`)
        try {
          this.setLoading(true)
          const snapshot = await storageRef.put(file)
          const url = await storageRef.getDownloadURL()
          const msgAttr = {
            mediaUrls: [url]
          }
          this.writeToFirestore(
            file.name,
            'VIDEO',
            msgAttr
          )
          this.setLoading(false)
        } catch (e) {
          this.setLoading(false)
         
        }
      }
    },
    async sendAudio (event) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0]
        const storageRef = this.$fire.storage.ref().child(`tradingChat/audio/${this.authUser.uid}/aud-${new Date().getTime()}-${file.name}`)
        try {
          this.setLoading(true)
          const snapshot = await storageRef.put(file)
          const url = await storageRef.getDownloadURL()
          const msgAttr = {
            mediaUrls: [url]
          }
          this.writeToFirestore(
            file.name,
            'AUDIO_RECORDING',
            msgAttr
          )
          this.setLoading(false)
        } catch (e) {
          this.setLoading(false)
          console.log(e.message)
        }
      }
    },
    async sendAttachment (event) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0]
        const storageRef = this.$fire.storage.ref().child(`tradingChat/files/${this.authUser.uid}/file-${new Date().getTime()}-${file.name}`)
        try {
          this.setLoading(true)
          const snapshot = await storageRef.put(file)
          const url = await storageRef.getDownloadURL()
          const msgAttr = {
            mediaUrls: [url]
          }
          this.writeToFirestore(
            file.name,
            'FILE',
            msgAttr
          )
          this.setLoading(false)
        } catch (e) {
          this.setLoading(false)
          console.log(e.message)
        }
      }
    },
    sendListing (listing) {
      try {
        // createdDate: "2022-03-25T15:23:15.402+0000"
        const msgAttr = {
          offerActive: listing.createdDate,
          offerCondition: '',
          offerId: listing.offerId,
          offerName: listing.name,
          offerPrice: listing.unitOfferValuation,
          offerUrl: listing.images.sort((a, b) => !(a.cover ^ b.cover) ? 0 : a.cover ? -1 : 1)[0].url
        }
        this.writeToFirestore(
          'Listing attached',
          'OFFER',
          msgAttr
        )
      } catch (e) {
        console.log(e.message)
      }
    },
    isUserChatPathExists(){
      try{ 
        const room_id     = this.room_id;
        const senderId    = this.authUser.uid;
        const docId       = room_id + '_' + this.list_deal_id
        const userChatRef = this.$fire.database.ref(`${this.userChatTypingStatusPath}/${docId}/${senderId}`);
        
        userChatRef.once('value', (snapshot)=>{
          const snapVal = snapshot.val()
          if(!snapVal){
            this.setUserChatPath()
          } else {
            this.updateTypingStatus(true)
          }
        });
      } catch(err){
        console.log(err)
      }
    },
    setUserChatPath(){
      try{ 
        const userChatRef = this.$fire.database.ref(`${this.userChatTypingStatusPath}`);
        const room_id     = this.room_id;
        const senderId    = this.authUser.uid;
        const recipId     = room_id.replace(senderId, '').replace('_', '');
        const docId       = room_id + '_' + this.list_deal_id
        let pushObj       = {}
        pushObj           = {}
        pushObj[senderId] = {typing: true} // true|false
        pushObj[recipId]  = {typing: false} // true|false
        userChatRef.child(docId).set(pushObj);
      } catch (e) {
        console.log("userChat Realtime db error:", e)
      }
      //   this.$fire.database.ref(`offers/${this.offerId}`).on("value", (value)=>{
      //     console.log("Current data:", value.val())         
      //     setTimeout(()=>{
      //       console.log("Current data:", 'Call offer details API')
      //       this.getOfferDetails()
      //     }, 1000);
      //   })
      // } catch (e) {
      //   console.log("Realtime db error:", e)
      // }
    },
    updateTypingStatus(typingStatus = true){
      try{
        const room_id       = this.room_id;
        const senderId      = this.authUser.uid;
        const docId         = room_id + '_' + this.list_deal_id
        const userChatRef   = this.$fire.database.ref(`${this.userChatTypingStatusPath}`);
        const statusObj     = {typing: typingStatus}
        
        // userChatRef.set(statusObj);
        userChatRef.child(docId).child(senderId).update(statusObj);
      } catch (e) {
        console.log("updateTypingStatus error:", e)
      }       
    },
    typingOn() {
      
      this.isUserChatPathExists()      
    },
    typingOff(){
      console.log('Typing off')
      this.updateTypingStatus(false)
    },
        
    openAddAddressPopup(){
     console.log("add adress")
     let storeData = {
      showaddresspopup : true
     }
     this.$store.dispatch('address/addAddressPopup/openAddressPopup', storeData);
    },
    ///////////// Start share address integration //////////////////////
    async getUserAllAddress() {
        try {
            let url = `/users/v1/user/address/all`;
            const data = await this.$axios.$get(url);
            this.userAllAddress = data.payload;
        } catch (error) {
            console.log(error);
            // this.showLoader = false;
        }
    },
    shareAddress(address, index){
      // console.log('shared address:', address)

      let shareAddress = ''
      if(address) {
          const addressObj = address
          if (addressObj.name ) {
              shareAddress = shareAddress + `${addressObj.name} \n`;
          }
          if (addressObj.flatNo ) {
              shareAddress = shareAddress + `${addressObj.flatNo}, `;
          }
          if (addressObj.addressLine) {
              shareAddress = shareAddress + `${addressObj.addressLine}, `;
          }
          if (addressObj.area) {
              shareAddress = shareAddress + `${addressObj.area}, `;
          }
          if (addressObj.city) {
              shareAddress = shareAddress + `${addressObj.city}, `;
          }
          if (addressObj.state) {
              shareAddress = shareAddress + `${addressObj.state}, `;
          }
          if (addressObj.zip) {
              shareAddress = shareAddress + `- ${addressObj.zip}`;
          }
          if (addressObj.landmark) {
              shareAddress = shareAddress + `, ${addressObj.landmark} `;
          }
          this.writeToFirestore(shareAddress) 
      } 

    }
    ///////////// End share address integration //////////////////////
  }
  
}
)
</script>
<style scoped>
/* * { font-family: Montserrat } */
.w-128 { width: 32rem }
.h-96 { height: 24rem }
.t-4 { top: 1rem }
.-r-64 { right: -16rem }
.emoji-invoker { transition: all 0.2s }
.emoji-invoker:hover { transform: scale(1.1) }
.emojis:after { content: ""; flex: auto }
.vue-audio-recorder:hover {
    background-color: transparent;
}
.customrecords{    
    width: 30px;
    height: 30px;
    background-color: transparent;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;    
}
.ar-content{ padding: 0px!important; }
.ar-player{ display: none!important; }
.ar-recorder__duration{ display: none!important; }
.ar-icon__lg {
  width: 28px!important;
  height: 28px!important;
  line-height: 0px!important; 
}
.ar-icon {  
  padding: 2px!important;  
}

.vue-audio-recorder:before, .vue-audio-recorder:after{
  display: none;
}
#ta-frame {
  margin: 0;  
  width: 185px;
  height: 20px;   
}
#textarea-custom {  
  overflow: hidden;
  margin:  0;
  padding: 0;
  border:  0;
  outline: 0;
  width: 100%;  
  resize: none;
}

.address-list{ min-height: 150px; overflow-y: auto; overflow-x: hidden; max-height: 280px; }
.address-list li{ border-bottom: 1px solid #e7e7e7; }
.address-list li:last-child{ border-bottom: 0px solid #e7e7e7; }
</style>