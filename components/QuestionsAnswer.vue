<template>
  <div>
  
  <div v-if="loading" class="questioner-answer-sec my-4 py-12 border-slate-300 border-t border-b ">
  <div  class="container px-4 md:px-8 2xl:px-16">
        <div class="flex justify-end">
          <div class="w-full sm:w-full md:w-5/6 lg:w-1/2 xl:w-1/2 2xl:1/2">
  <div  class="p-4 max-w-[705px] w-full mx-auto ">
    <div class="animate-bounce flex space-x-4 mt-8">
      <div class="rounded-full bg-slate-200 h-10 w-10" />
      <div class="flex-1 space-y-6 py-1">
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
        </div>
      </div>
    </div>
    <div class="animate-bounce flex space-x-4 mt-8">
      <div class="rounded-full bg-slate-200 h-10 w-10" />
      <div class="flex-1 space-y-6 py-1">
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
        </div>
      </div>
    </div>
    <div class="animate-bounce flex space-x-4 mt-8">
      <div class="rounded-full bg-slate-200 h-10 w-10" />
      <div class="flex-1 space-y-6 py-1">
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
        </div>
      </div>
    </div>
  </div>

 </div>
 </div>
 </div>
</div>


    <div
      v-if="!showAllConv && shownotOwnersIcon && !loading "
      class="
        questioner-answer-sec
        my-4
        py-12
        border-slate-300 border-t border-b
      "
    >
      <!-- No Question Part -->
      <div class="container max-w-4xl mx-auto px-8 sm:px-8 md:px-16 lg:px-32 xl:px-32 2xl:px-32">        
        <div class="no-question w-full text-center py-8">
          <h5 class="mb-3 text-base font-semibold text-gray-700">
            {{ $t('thereNoquestion') }}
          </h5>
          <div class="mb-4 text-gray-600 text-sm">
             {{ $t('askYourQuestionPara') }}
          </div>
          <a  v-on:click="askQuestionIp()"
            class="
              border border-firoza
              bg-transparent
              py-2
              px-4
              rounded
              inline-block
              text-firoza
              font-medium
              text-base
              cursor-pointer
            "
            > {{ $t('askAquestion') }}</a
          >

           <!-- Start For Questions Section  -->

            <div
              v-if="showQuestionIp"
              class="w-full flex flex-col mt-5 mb-7 pl-12 relative text-left"
            >
              <div class="flex-shrink-0 h-9 w-9 absolute top-0 left-0">

                 <ProfileAvatar :imageUrl = "authUser.photoURL"/>
                <!-- <img
                  v-if="authUser.photoURL"
                  class="h-9 w-9 rounded-full"
                  :src="authUser.photoURL"
                  alt="image"
                /> -->
              </div>
              <div class="text-sm font-normal text-gray-900">
                {{ authUser.displayName }} <span class="block text-xs">{{ $t('you') }}</span>
              </div>
              <div class="relative w-full mt-3">
                <div class="absolute top-3 right-0 z-10">
                  <!-- <span v-show="!loading">Login</span>
                <Spinner v-show="loading" /> -->
                  <button type="submit"  @click="submitQuestion()">
                    <svg v-show="!btnloading"
                      v-if="showSubmitButton"
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.5255 11.0935C21.5255 11.4096 21.3789 11.6914 21.1499 11.8746C21.0857 11.926 21.0151 11.9696 20.9394 12.0041L1.86741 21.1869C1.49798 21.3648 1.0574 21.2991 0.755896 21.0212C0.45439 20.7434 0.353057 20.3096 0.500244 19.9269L3.89771 11.0935L0.500244 2.2601C0.353056 1.87741 0.45439 1.44365 0.755896 1.16578C1.0574 0.887912 1.49798 0.822249 1.86741 1.00012L20.9394 10.1829C21.0154 10.2175 21.0864 10.2614 21.1508 10.3131C21.1983 10.3511 21.2419 10.3932 21.2813 10.4387C21.4334 10.6142 21.5255 10.8431 21.5255 11.0935ZM16.1434 10.0935L3.2724 3.89635L5.65592 10.0935H16.1434ZM5.65592 12.0935H16.1434L3.2724 18.2907L5.65592 12.0935Z"
                        fill="#8CAEC5"
                      />
                    </svg>
                    <span><Spinner v-show="btnloading" /></span>
                  </button>
                </div>
                <input
                  name="question"
                  id="question"
                  v-on:keyup.enter="onEnterSumitQuestion"
                  v-on:input="onChange(questions, 'questions')"
                  v-model="questions"
                  type="text"
                  placeholder=" "
                  class="
                    pt-3
                    pb-2
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm
                    pr-10
                  "
                />
                <label
                  for="question"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  > {{ $t('typeAQuestion') }} </label
                >
                <div class="w-full flex justify-end">
                  <button
                    v-on:click="closeInputSection()"
                    type="submit"
                    class="
                      flex
                      items-center
                      justify-center
                      text-center
                      py-0
                      px-0
                      text-sm text-gray-400 mt-1
                    "
                  >
                    <span>{{ $t('cancel') }} </span>
                  </button>
                </div>
              </div>
            </div>

            <!-- End For Questions Section              -->
        </div>
      
  </div>
    </div>

 



    <div
      v-if="showAllConv && !loading"
      class="
        questioner-answer-sec
        my-4
        py-12
        border-slate-300 border-t border-b
      "
    >
      <div class="container px-4 md:px-8 2xl:px-16">
        <div class="flex justify-end">
          <div class="w-full sm:w-full md:w-5/6 lg:w-1/2 xl:w-1/2 2xl:1/2">


            
            <div class="w-full flex items-center justify-between mb-5">
              <div class="text-gray-900 text-lg">{{ $t('QuestionsAnswers') }}</div>
              <a
                v-if="matchUserId()"
                v-on:click="askQuestionIp()"
                class="
                  cursor-pointer
                  border border-firoza
                  bg-transparent
                  py-2
                  px-4
                  rounded
                  inline-block
                  text-firoza
                  font-medium
                  text-base
                "
                >{{ $t('askAquestion') }}</a
              >
            </div>

            <!-- Start For Questions Section  -->

            <div
              v-if="showQuestionIp"
              class="w-full flex flex-col mb-5 pl-12 relative"
            >
              <div class="flex-shrink-0 h-9 w-9 absolute top-0 left-0">
                <ProfileAvatar :imageUrl = "authUser.photoURL"/>
              </div>
              <div class="text-sm font-normal text-gray-900">
                {{ authUser.displayName }} {{ $t('you') }}
              </div>
              <div class="relative w-full mt-2">
                <div class="absolute top-3 right-0 z-10">
                  <button type="submit" @click="submitQuestion()">
                    <svg
                      v-show="!btnloading"
                      v-if="showSubmitButton"
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.5255 11.0935C21.5255 11.4096 21.3789 11.6914 21.1499 11.8746C21.0857 11.926 21.0151 11.9696 20.9394 12.0041L1.86741 21.1869C1.49798 21.3648 1.0574 21.2991 0.755896 21.0212C0.45439 20.7434 0.353057 20.3096 0.500244 19.9269L3.89771 11.0935L0.500244 2.2601C0.353056 1.87741 0.45439 1.44365 0.755896 1.16578C1.0574 0.887912 1.49798 0.822249 1.86741 1.00012L20.9394 10.1829C21.0154 10.2175 21.0864 10.2614 21.1508 10.3131C21.1983 10.3511 21.2419 10.3932 21.2813 10.4387C21.4334 10.6142 21.5255 10.8431 21.5255 11.0935ZM16.1434 10.0935L3.2724 3.89635L5.65592 10.0935H16.1434ZM5.65592 12.0935H16.1434L3.2724 18.2907L5.65592 12.0935Z"
                        fill="#8CAEC5"
                      />
                    </svg>
                    <Spinner v-show="btnloading" />
                  </button>
                </div>
                <input
                  name="question"
                  id="question"
                  v-on:keyup.enter="onEnterSumitQuestion"
                  v-on:input="onChange(questions, 'questions')"
                  v-model="questions"
                  type="text"
                  placeholder=" "
                  class="
                    pt-3
                    pb-2
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm
                    pr-10
                  "
                />
                <label
                  for="question"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  >{{ $t('typeAQuestion') }}</label
                >
                <div class="w-full flex justify-end">
                  <button
                    v-on:click="closeInputSection()"
                    type="submit"
                    class="
                      flex
                      items-center
                      justify-center
                      text-center
                      py-0
                      px-0
                      text-sm text-gray-400
                    "
                  >
                    <span>{{ $t('cancel') }} </span>
                  </button>
                </div>
              </div>
            </div>

            <!-- End For Questions Section  -->

 

            <div >
            <div
              v-for="(item, index) in allQuestionAnsList"
              :key="index"
              class="w-full flex flex-col mb-5 pl-12 relative"
            >
              <div
                class="flex-shrink-0 h-9 w-9 absolute top-0 left-0"
              >
              <ProfileAvatar :imageUrl="item.user.photoUrl"/>
                
              </div>
              <div class="w-full block sm:block md:flex md:items-center lg:flex lg:items-center xl:flex xl:items-center 2xl:flex 2xl:items-center">
                
                <div class="text-sm font-medium text-gray-900 mr-5">
                  {{ item.user.name }}
                </div>

                <div class="flex items-center" @mouseleave="emitCustomEvent">
                <div class="text-xs font-normal text-cyan-600">
                  {{ $t('posted') }} : {{ transformDate(item.timestamp) }}
                </div>

                <!-- Start Section Of Operations For Question -->
                <div class="relative ml-5">
                  <button
                    v-if="viewButton(item)"
                    @mouseover="getIndexValue(index)"
                    
                    class="
                      flex
                      items-center
                      justify-center
                      text-center
                      py-0
                      px-2
                      text-sm text-firoza
                      font-medium
                    "
                    v-on:click="getThredDet(item)"
                  >
                    <svg
                      width="4"
                      height="18"
                      viewBox="0 0 4 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2ZM0 9C0 7.89543 0.89543 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.89543 11 0 10.1046 0 9ZM2 14C0.89543 14 0 14.8954 0 16C0 17.1046 0.89543 18 2 18C3.10457 18 4 17.1046 4 16C4 14.8954 3.10457 14 2 14Z"
                        fill="#8CAEC5"
                      />
                    </svg>
                  </button>

                  <!-- v-show="isOptionsExpanded" -->

                  <ul
                    v-show="index === indexValue && isOptionsExpanded"
                    class="
                      absolute
                      left-0
                      right-0
                      mb-4
                      bg-white
                      divide-y
                      z-30
                      rounded-lg
                      shadow-lg
                      overflow-hidden
                      w-32
                    "
                  >
                    <li @click="editQuestion(index,item)"
                      v-if="item.canEdit"
                      class="
                        px-3
                        py-2
                        transition-colors
                        duration-300
                        text-sm
                        cursor-pointer
                        hover:bg-gray-200
                      "
                    >
                      <span class="cursor-pointer">
                       {{ $t('editBtn') }}

                      </span>
                    </li>
                    <li 
                      v-if="item.canDelete"
                      @click="deleteQuestion(item)"
                      class="
                        px-3
                        py-2
                        transition-colors
                        duration-300
                        text-sm
                        cursor-pointer
                        hover:bg-gray-200
                      "
                    >
                      <span v-show="!btnloading" class="cursor-pointer"> {{ $t('deleteBtn') }}</span>
                      <span> <Spinner v-show="btnloading" /></span>
                    </li>

                    <li
                      v-if="item.canReport"
                      @click="reportQuestion(item, 'comment')"
                      class="
                        px-3
                        py-2
                        transition-colors
                        duration-300
                        text-sm
                        cursor-pointer
                        hover:bg-gray-200
                      "
                    >
                      <span class="cursor-pointer">{{ $t('reportMessage') }}</span>
                    </li>
                  </ul>
                </div>
              </div>

                <!-- End Section Of Operations For Question -->
              </div>
              <div class="w-full mt-0.5">
                <span v-if="!readMore" class="text-xs text-gray-500 leading-5">{{ item.question | truncate(300) }}</span>
                <span v-else class="text-xs text-gray-500 leading-5">{{ item.question }}</span>


            <div v-if="item.question.length > 150" class="w-full flex justify-end">
          <div v-if="!readMore" class="flex items-center text-xs text-gray-700 cursor-pointer" @click="readMore = true">
            <span class="pr-1"> Read more </span>
            <svg width="8" height="6" viewBox="0 0 14 8" fill="none">
              <path d="M0.8 1.7L7 8L13.2 1.7C13.4 1.5 13.5 1.2 13.5 1C13.5 0.8 13.4 0.5 13.2 0.3C13 0.1 12.8 0 12.5 0H1.5C1.2 0 1 0.1 0.8 0.3C0.6 0.5 0.5 0.7 0.5 1C0.5 1.3 0.6 1.5 0.8 1.7Z" fill="rgb(55 65 81)" />
            </svg>
          </div>
          <div v-if="readMore" class="flex items-center text-xs text-gray-700 cursor-pointer" @click="readMore = false">
            <span class="pr-1"> Read less  </span>
            <svg width="8" height="6" viewBox="0 0 13 8" fill="none">
              <path d="M12.7 6.3L6.5 0L0.3 6.3C0.1 6.5 0 6.8 0 7C0 7.2 0.1 7.5 0.3 7.7C0.5 7.9 0.7 8 1 8H12C12.3 8 12.5 7.9 12.7 7.7C12.9 7.5 13 7.2 13 7C13 6.8 12.9 6.5 12.7 6.3Z" fill="rgb(55 65 81)" />
            </svg>
          </div>
        </div>



                   <div class="w-full">
              <button v-if="item.canReply" @click="viewReplyIp(index)"
                type="submit"
                class="
                  flex
                  items-center
                  justify-center
                  text-center
                  py-2
                  px-0
                  text-sm text-firoza
                  font-medium
                "
              >
                <span>{{ $t('replyBtn') }} </span>
              </button>

              <!-- Start Of Edit Question -->

          <div
            v-show="index === editQuestionIndexValue && showEditIpField"
              class="w-full flex flex-col mb-5 pl-12 relative"
            >
              <div class="flex-shrink-0 h-9 w-9 absolute top-0 left-0">

                <ProfileAvatar :imageUrl = "authUser.photoURL"/>
                
              </div>
              <div class="text-sm font-normal text-gray-900">
                {{ authUser.displayName }} (You)
              </div>
              <div class="relative w-full mt-2">
                <div class="absolute top-3 right-0 z-10">
                  <button
                   v-show="!btnloading"
                   v-if="showEditSubmitBtn" type="submit" @click="submitEditQuestion(item)">
                    <svg 
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.5255 11.0935C21.5255 11.4096 21.3789 11.6914 21.1499 11.8746C21.0857 11.926 21.0151 11.9696 20.9394 12.0041L1.86741 21.1869C1.49798 21.3648 1.0574 21.2991 0.755896 21.0212C0.45439 20.7434 0.353057 20.3096 0.500244 19.9269L3.89771 11.0935L0.500244 2.2601C0.353056 1.87741 0.45439 1.44365 0.755896 1.16578C1.0574 0.887912 1.49798 0.822249 1.86741 1.00012L20.9394 10.1829C21.0154 10.2175 21.0864 10.2614 21.1508 10.3131C21.1983 10.3511 21.2419 10.3932 21.2813 10.4387C21.4334 10.6142 21.5255 10.8431 21.5255 11.0935ZM16.1434 10.0935L3.2724 3.89635L5.65592 10.0935H16.1434ZM5.65592 12.0935H16.1434L3.2724 18.2907L5.65592 12.0935Z"
                        fill="#8CAEC5"
                      />
                    </svg>
                  </button>
                 <span> <Spinner v-show="btnloading" /></span>
                </div>
                <input
                  name="editQuestionString"
                  id="editQuestionString"
                  v-on:keyup.enter="onEnterEditQuestion(item)"
                  v-on:input="onEditChange(editQuestionString, 'editQuestionString')"
                  v-model="editQuestionString"
                  type="text"
                  placeholder=" "
                  class="
                    pt-3
                    pb-2
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm
                    pr-10
                  "
                />
                <label
                  for="editQuestionString"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  >{{ $t('editBtn') }}
</label
                >
                <div class="w-full flex justify-end">
                  <button
                    v-on:click="closeEditSection()"
                    type="submit"
                    class="
                      flex
                      items-center
                      justify-center
                      text-center
                      py-0
                      px-0
                      text-sm text-gray-400
                    "
                  >
                    <span>{{ $t('cancel') }} </span>
                  </button>
                </div>
              </div>
            </div>
            


              <!-- End Of Edit Question -->

            <!-- Start Of Reply Input Field -->
           <div v-show="index === replyIndexValue && showReplyIp" class="w-full flex flex-col mb-5 pl-12 relative reply-primary" >
              <div class="flex-shrink-0 h-9 w-9 absolute top-0 left-0">

               <ProfileAvatar :imageUrl="authUser.photoURL"/>
                
              </div>
              <div class="text-sm font-normal text-gray-900">
                {{ authUser.displayName }} (You)
              </div>
              <div class="relative w-full mt-2">
                <div class="absolute top-3 right-0 z-10">
                  <button v-show="!btnloading" v-if="showReplySubmitButton" type="submit" @click="submitReply(item)">
                    <svg width="18" height="18" viewBox="0 0 22 22" fill="none" >
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5255 11.0935C21.5255 11.4096 21.3789 11.6914 21.1499 11.8746C21.0857 11.926 21.0151 11.9696 20.9394 12.0041L1.86741 21.1869C1.49798 21.3648 1.0574 21.2991 0.755896 21.0212C0.45439 20.7434 0.353057 20.3096 0.500244 19.9269L3.89771 11.0935L0.500244 2.2601C0.353056 1.87741 0.45439 1.44365 0.755896 1.16578C1.0574 0.887912 1.49798 0.822249 1.86741 1.00012L20.9394 10.1829C21.0154 10.2175 21.0864 10.2614 21.1508 10.3131C21.1983 10.3511 21.2419 10.3932 21.2813 10.4387C21.4334 10.6142 21.5255 10.8431 21.5255 11.0935ZM16.1434 10.0935L3.2724 3.89635L5.65592 10.0935H16.1434ZM5.65592 12.0935H16.1434L3.2724 18.2907L5.65592 12.0935Z"
                        fill="#8CAEC5" />
                    </svg>
                  </button>
                  <span><Spinner v-if="btnloading"/></span>
                </div>
                <input name="replyString" id="replyString"
                v-on:keyup.enter="onEnterReply(item)"
                 v-on:input="onReplyChange(replyString, 'replyString')"
                  v-model="replyString" type="text" placeholder=" " class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent
                    border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200 text-sm pr-10 " />
                <label for="replyString"  class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('replyBtn') }}</label
                >
                <div class="w-full flex justify-end">
                  <button v-on:click="closeReplySection()" type="submit" class="flex items-center justify-center text-center
                      py-0 px-0 text-sm text-gray-400 " >
                    <span>{{ $t('cancel') }} </span>
                  </button>
                </div>
              </div>
            </div>
            
            <!-- End Of Reply Input Field -->
            
            
            </div>
              </div>

              <!-- Start Reply Section  -->

              <div v-if="item.replies.length">
                <div
                  v-for="replyitem in item.replies"
                  :key="replyitem.replyId"
                  class="w-full flex flex-col mb-5 mt-5 ml-12 pl-12 relative reply-secondary"
                >
                  <div class="flex-shrink-0 h-9 w-9 absolute top-0 left-0">
                    <ProfileAvatar :imageUrl = "replyitem.user.photoUrl"/>
                    
                  </div>
                  <div class="w-full block sm:block md:flex md:items-center lg:flex lg:items-center xl:flex xl:items-center 2xl:flex 2xl:items-center">
                    <div class="text-sm font-medium text-gray-900 mr-5">
                      {{ replyitem.user.name }} 
                    </div>

                    <div class="flex items-center" @mouseleave="emitCustomEvent"> 
                    <div class="text-xs font-normal text-cyan-600">
                   
                      Posted : {{ transformDate(replyitem.timestamp) }}
                    </div>

                    <!-- Start Operations Of Reply Section -->
                    <div class="relative ml-5">
                      <button
                        v-if="viewReplyOpButton(item)"
                         @mouseover="getReplyIndexValue(index)"
                        
                        class="
                          flex
                          items-center
                          justify-center
                          text-center
                          py-0
                          px-2
                          text-sm text-firoza
                          font-medium
                        "
                        v-on:click="getThredDet(item)"
                      >
                        <svg
                          width="4"
                          height="18"
                          viewBox="0 0 4 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2ZM0 9C0 7.89543 0.89543 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.89543 11 0 10.1046 0 9ZM2 14C0.89543 14 0 14.8954 0 16C0 17.1046 0.89543 18 2 18C3.10457 18 4 17.1046 4 16C4 14.8954 3.10457 14 2 14Z"
                            fill="#8CAEC5"
                          />
                        </svg>
                      </button>

                      <!-- v-show="isOptionsExpanded" -->

                      <ul
                        v-show="index === replydrpDownindexValue && replyOptionsExpand"
                        class="
                          absolute
                          left-0
                          right-0
                          mb-4
                          bg-white
                          divide-y
                          z-30
                          rounded-lg
                          shadow-lg
                          overflow-hidden
                          w-32
                        "
                      >
                        <li @click="editReply(index,item)"
                          v-if="replyitem.canEdit"
                          class="
                            px-3
                            py-2
                            transition-colors
                            duration-300
                            text-sm
                            cursor-pointer
                            hover:bg-gray-200
                          "
                        >
                          <span class="cursor-pointer">{{ $t('editBtn') }}
</span>
                        </li>
                        <li
                         v-show="!btnloading"
                          v-if="replyitem.canDelete"
                          @click="deleteReply(item)"
                          class="
                            px-3
                            py-2
                            transition-colors
                            duration-300
                            text-sm
                            cursor-pointer
                            hover:bg-gray-200
                          "
                        >
                          <span class="cursor-pointer">{{$t('deleteBtn')}}</span>
                        </li>
                        <span><Spinner v-show="btnloading"/></span>

                        <li
                          v-if="replyitem.canReport"
                          @click="reportQuestion(item, 'reply')"
                          class="
                            px-3
                            py-2
                            transition-colors
                            duration-300
                            text-sm
                            cursor-pointer
                            hover:bg-gray-200
                          "
                        >
                          <span class="cursor-pointer">{{$t('reportMessage')}}</span>
                        </li>
                      </ul>
                    </div>

                  </div>

                    <!-- End Operations Of Reply Section -->
                  </div>
                  <div class="w-full mt-0.5">
                    <span v-if="!readReplyMore" class="text-xs text-gray-500">
                      {{ replyitem.comment | truncate(300) }}
                    </span>
                    <span v-else class="text-xs text-gray-500">
                      {{ replyitem.comment }}
                    </span>



         <div v-if="item.question.length > 150" class="w-full flex justify-end">
          <div v-if="!readReplyMore" class="flex items-center text-xs text-gray-700 cursor-pointer" @click="readReplyMore = true">
            <span class="pr-1"> Read more </span>
            <svg width="8" height="6" viewBox="0 0 14 8" fill="none">
              <path d="M0.8 1.7L7 8L13.2 1.7C13.4 1.5 13.5 1.2 13.5 1C13.5 0.8 13.4 0.5 13.2 0.3C13 0.1 12.8 0 12.5 0H1.5C1.2 0 1 0.1 0.8 0.3C0.6 0.5 0.5 0.7 0.5 1C0.5 1.3 0.6 1.5 0.8 1.7Z" fill="rgb(55 65 81)" />
            </svg>
          </div>
          <div v-if="readReplyMore" class="flex items-center text-xs text-gray-700 cursor-pointer" @click="readReplyMore = false">
            <span class="pr-1"> Read less  </span>
            <svg width="8" height="6" viewBox="0 0 13 8" fill="none">
              <path d="M12.7 6.3L6.5 0L0.3 6.3C0.1 6.5 0 6.8 0 7C0 7.2 0.1 7.5 0.3 7.7C0.5 7.9 0.7 8 1 8H12C12.3 8 12.5 7.9 12.7 7.7C12.9 7.5 13 7.2 13 7C13 6.8 12.9 6.5 12.7 6.3Z" fill="rgb(55 65 81)" />
            </svg>
          </div>
        </div>

                   
                  </div>

                </div>
              </div>

              <!-- End Reply Section  -->

             <!-- Edit OF Reply Start -->

             <div
            v-show="index === editReplyIndexValue && showEditIpReply"
              class="w-full flex flex-col mb-5 pl-12 relative"
            >
              <div class="flex-shrink-0 h-9 w-9 absolute top-0 left-0">
                <ProfileAvatar :imageUrl = "authUser.photoURL"/>
                
              </div>
              <div class="text-sm font-normal text-gray-900">
                {{ authUser.displayName }} (You)
              </div>
              <div class="relative w-full mt-2">
                <div class="absolute top-3 right-0 z-10">
                  <button v-show="!btnloading" v-if="showEditReplyBtn" type="submit" @click="submitEditReplyQuestion(item)">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M21.5255 11.0935C21.5255 11.4096 21.3789 11.6914 21.1499 11.8746C21.0857 11.926 21.0151 11.9696 20.9394 12.0041L1.86741 21.1869C1.49798 21.3648 1.0574 21.2991 0.755896 21.0212C0.45439 20.7434 0.353057 20.3096 0.500244 19.9269L3.89771 11.0935L0.500244 2.2601C0.353056 1.87741 0.45439 1.44365 0.755896 1.16578C1.0574 0.887912 1.49798 0.822249 1.86741 1.00012L20.9394 10.1829C21.0154 10.2175 21.0864 10.2614 21.1508 10.3131C21.1983 10.3511 21.2419 10.3932 21.2813 10.4387C21.4334 10.6142 21.5255 10.8431 21.5255 11.0935ZM16.1434 10.0935L3.2724 3.89635L5.65592 10.0935H16.1434ZM5.65592 12.0935H16.1434L3.2724 18.2907L5.65592 12.0935Z"
                        fill="#8CAEC5"
                      />
                    </svg>
                  </button>
                  <span><Spinner v-show="btnloading"/></span>
                </div>
                <input
                  name="editReplyString"
                  id="editReplyString"
                  v-on:keyup.enter="onEnterEditReply(item)"
                  v-on:input="onEditReplyChange(editReplyString, 'editReplyString')"
                  v-model="editReplyString"
                  type="text"
                  placeholder=" "
                  class="
                    pt-3
                    pb-2
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm
                    pr-10
                  "
                />
                <label
                  for="editReplyString"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  >{{ $t('editBtn') }}
</label
                >
                <div class="w-full flex justify-end">
                  <button
                    v-on:click="closeReplyEditSection()"
                    type="submit"
                    class="
                      flex
                      items-center
                      justify-center
                      text-center
                      py-0
                      px-0
                      text-sm text-gray-400
                    "
                  >
                    <span>{{ $t('cancel') }} </span>
                  </button>
                </div>
              </div>
            </div>



            <!-- End OF Reply -->

            </div>

            </div>

            
          </div>
        </div>
      </div>

      <!-- Design For Report User -->

      <!-- This example requires Tailwind CSS v2.0+ -->
      <div
        class="fixed z-50 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        v-if="showReportCommandModal"
      >
        <div
          class="
            flex
            items-end
            justify-center
            min-h-screen
            pt-4
            px-4
            pb-20
            text-center
            sm:block sm:p-0
          "
        >
          
          <div
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >

        
          <div
            class="
              relative
              inline-block
              align-bottom
              bg-white
              rounded-lg
              pt-5
              pb-0
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-sm sm:w-full
            "
          >
            <div class="px-4">
              <div>
                <div
                  class="
                    inline-block
                    text-left
                    transform
                    transition-all
                    align-middle
                    max-w-md
                    w-full
                    pt-3
                  "
                >
                  <button
                    v-on:click="hideModal()"
                    type="button"
                    id="close-btns"
                    class="
                      absolute
                      z-40
                      top-0
                      right-0
                      inline-flex
                      rounded-md
                      border border-transparent
                      px-4
                      py-2
                    "
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                        fill="black"
                        fill-opacity="0.3"
                      />
                    </svg>
                  </button>

                  <div
                    class="w-full flex justify-center items-center pt-3"
                  ></div>

                  <div class="w-full flex justify-center items-center pt-1">
                    <div class="text-sm text-gray-500 text-center">
                      {{ $t('reportCommentPara') }}
                    </div>
                  </div>

                  <div class="float-left w-full mt-3">
                    <ul class="float-left">
                      <li
                        v-for="category in cateGoryList"
                        :key="category.id"
                        @click="changeCatgryType(category)"
                        class="float-left"
                      >
                        <div
                          class="
                            bg-slate-400
                            py-2
                            px-3
                            rounded-md
                            text-sm text-white
                            mb-3
                            mr-2
                          "
                          v-bind:class="{ 'bg-gray-700': category.isActive }"
                        >
                          <a class="cursor-pointer">{{ category.value }}</a>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="flex flex-col w-full">
                    <div class="mb-3 w-full">
                      <label
                        for="exampleFormControlTextarea1"
                        class="
                          form-label
                          inline-block
                          mb-1
                          text-gray-700 text-base
                        "
                      >
                        {{$t('yourComment')}}</label
                      >
                      <textarea
                        v-model="reportReplyDetails.description"
                        @input="onChangeCommentInput"
                        class="
                          form-control
                          block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700
                          focus:bg-white
                          focus:border-blue-600
                          focus:outline-none
                        "
                        id="exampleFormControlTextarea1"
                        rows="2"
                        placeholder="Your comment"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="
                w-full
                flex
                items-center
                justify-between
                mt-4
                px-6
                bg-gray-50
                py-1
              "
            >
              <button
                v-on:click="hideModal()"
                type="submit"
                class="
                  flex
                  items-center
                  justify-center
                  text-center
                  mr-6
                  py-1
                  px-3
                  h-12
                  rounded
                  border-0 border-gray-300
                  w-30
                  text-base
                  leading-10
                  font-bold
                  text-gray-400
                  w-full
                "
              >
                <span>{{ $t('cancel') }} </span>
              </button>


              <button v-show="!btnloading"
              :disabled="!isFormValid" 
                
                v-on:click="reportComment()"
                type="submit"
                class="
                  transition-all
                  w-full
                  flex
                  justify-center
                  ml-3
                  items-center
                  border border-red-500
                  bg-red-500
                  py-2
                  px-6
                  rounded
                  font-normal
                  text-base text-white
                  hover:bg-firoza hover:border-firoza
                "
              >
                <span >Submit </span>
                <!-- <Spinner v-show="loading" /> -->
              </button>
              <span><Spinner v-show="btnloading" /></span>
            </div>
            
          </div>
        </div>
      </div>


      <!-- End Design For Report User -->
    </div>

    
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from "vuex";
export default Vue.extend({
  name: "QuestionAnswer",
  props: ["offerId", "userId", "userDet","shownotOwnersIcon"],

  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: "isLoggedIn",
    }),
  },

  beforeMount(){
  
  },
  mounted() {
    // document.addEventListener('click', this.close)
    this.getQuestionsAnsList(this.offerId);
    this.getCategoryForReportReply();
  },
  // beforeDestroy () {
  //   document.removeEventListener('click',this.close)
  // },
  data() {
    return {
      readMore: false,
      readReplyMore:false,
      loading:true,
      btnloading:false,
      showQuestionIp: false,
      isOptionsExpanded: false,
      replyOptionsExpand: false,
      showAllConv: false,
      allQuestionAnsList: [{}],
      cateGoryList: [{}],
      threadId: "",
      reportType: "",
      questions: "",
      replyString:'',
      editQuestionString:'',
      editReplyString:'',
      showSubmitButton: false,
      showReplySubmitButton: false,
      showEditSubmitBtn:false,
      showEditReplyBtn:false,
      indexValue: null,
      replydrpDownindexValue:null,
      replyIndexValue: null,
      editQuestionIndexValue: null,
      editReplyIndexValue: null,
      reportReplyDetails: {
        description: "",
        reasons: [""],
      },
      isFormValid: false,
      showReportCommandModal: false,
      replyId: "",
      showReplyIp:false,
      showEditIpField:false,
      showEditIpReply:false
    };
  },
  methods: {

    // close (e:any) {
    //   if (!this.$el.contains(e.target)) {
    //     this.isOptionsExpanded = false
    //   }
    // },
    async getQuestionsAnsList(offerId: string) {
      try {
       // this.loading = true
        const url = `/qna/v1/qna/offer/${offerId}/question/all?page=0&size=10`;
        const data = await this.$axios.$get(url);
       
        if (data.payload.length) {
          this.allQuestionAnsList = data.payload;
          this.showAllConv = true;
          
        } else {
          this.showAllConv = false;
        }
        this.loading = false
      } catch (error) {
        this.showAllConv = false;
        this.loading = false
        console.log(error);
      }
    },
    transformDate(time: any) {
      if (time) {
        return this.$moment(time).format(" MMMM D , YYYY, h:mm:ss a");
      } else {
        return "";
      }
    },
    getThredDet(thredDet: any) {
      //console.log("thredDet", thredDet.threadId);
      this.threadId = thredDet.threadId;
    },
    getThredId(tID: any) {
      if (this.threadId == tID) {
        return true;
      } else {
        return false;
      }
    },
    matchUserId() {
      if (this.userId && this.authUser?.uid) {
        if (this.userId === this.authUser?.uid) {
          return false;
        } else {
          return true;
        }
      }
    },
    closeInputSection() {
      this.showQuestionIp = false;
    },

    askQuestionIp() {
      this.showQuestionIp = true;
    },

    onChange(value: string, Fieldname: string) {
      if (value.length) {

        //Validation Has Removed
        // if (this.$isAlphabetExists(value)) {
        // this.showSubmitButton = true;
        // }else{
        //  this.showSubmitButton = false;
        // }
        this.showSubmitButton = true;
        
      } else {
        this.showSubmitButton = false;
      }
    },

    onReplyChange(value: string, Fieldname: string){
      if (value.length) {
        this.showReplySubmitButton = true;
      } else {
        this.showReplySubmitButton = false;
      }
    },
    

     onEditChange(value: string, Fieldname: string){
      if (value.length) {
        this.showEditSubmitBtn = true;
      } else {
        this.showEditSubmitBtn = false;
      }
    },

    onEditReplyChange(value: string, Fieldname: string){
      if (value.length) {
        this.showEditReplyBtn = true;
      } else {
        this.showEditReplyBtn = false;
      }
    },

    onEnterSumitQuestion(){
     if (this.questions){
       this.submitQuestion()
     }else{
       return false
     }
    }, 

    async submitQuestion() {
      this.btnloading = true;
      if (this.questions) {
        const questions = { question: this.questions };
        try {
          let url = `/qna/v1/qna/offer/${this.offerId}/question`;
          const data = await this.$axios.$post(url, questions);
          if (data.success) {
            this.closeInputSection();
            this.getQuestionsAnsList(this.offerId);
            this.questions = ''
          } else {
          }
         this.btnloading = false;
        } catch (error) {
          console.log(error);
          this.btnloading = false;
         
        }
      }
    },

    getIndexValue(index: any) {
     // console.log("index value",index)
      this.indexValue = index;
      this.isOptionsExpanded = true
     // this.isOptionsExpanded = !this.isOptionsExpanded;
    },

    emitCustomEvent(e:any){
    this.isOptionsExpanded = false
    this.replyOptionsExpand = false
    },

getReplyIndexValue(index:any){
 // console.log("Yes its hover")
this.replydrpDownindexValue = index;
    //  this.replyOptionsExpand = !this.replyOptionsExpand;
      this.replyOptionsExpand = true
},
    viewButton(item: any) {
    

     // this.isOptionsExpanded = false
      if (this.userId && this.authUser?.uid) {
        if (this.userId === this.authUser?.uid) {
          if (item.canReport) {
            return true;
          } else {
            return false;
          }
        } else {
          if (item.user.userId === this.authUser?.uid) {
            if (item.canDelete || item.canEdit) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      }
    },

    async deleteQuestion(item: any) {
      if (item) {
        try {
          this.btnloading = true;
          let url = `/qna/v1/qna/offer/${this.offerId}/question/${item.threadId}`;
          const data = await this.$axios.$delete(url);
         // console.log("Data", data);
          if (data.success) {
            // this.closeInputSection()
            this.getQuestionsAnsList(this.offerId);
            this.isOptionsExpanded = false;
          } else {
          }
          this.btnloading = false;
        } catch (error) {
          console.log(error);
          this.btnloading = false;
        }
      }
    },

    reportQuestion(item: any, type: string) {
      this.showReportCommandModal = true;
      this.threadId = item.threadId;
      this.reportType = type;
      if(this.reportType === 'reply'){
        if (item.replies.length) {
        this.replyId = item.replies[0].replyId;
      }
      }
     
    },

    hideModal() {
      this.showReportCommandModal = false;
      this.threadId = "";
      this.reportType = "";
      this.replyId = "";
    },
    removeData(){
    this.reportReplyDetails = {
        description: "",
        reasons: [""],
      }
    },

    async reportComment() {
      this.btnloading = true;
      const cateGoryList = this.cateGoryList.filter(
        (category: any) => category.isActive
      );
      this.reportReplyDetails.reasons = cateGoryList.map(
        (a: any) => a.reasonId
      );

     
      if (this.reportType === "comment") {
        try {
          const url = `/qna/v1/qna/comment/${this.threadId}/report`;
          const data = await this.$axios.$post(url, this.reportReplyDetails);
          if (data.success) {
            this.getQuestionsAnsList(this.offerId);
            this.isOptionsExpanded = false;
            this.hideModal();
            this.removeData()
          } else {
          }
          this.btnloading = false;
        } catch (error) {
          console.log(error);
          this.btnloading = false;
        }
      } else {
       
        try {
          this.btnloading = true;
          const url = `/qna/v1/qna/offer/${this.offerId}/question/${this.threadId}/reply/${this.replyId}/report`;
          const data = await this.$axios.$post(url, this.reportReplyDetails);
        
          if (data.success) {
            this.getQuestionsAnsList(this.offerId);
            this.isOptionsExpanded = false;
            this.hideModal();
             this.removeData()
          } else {
          }
          this.btnloading = false;
        } catch (error) {
          console.log(error);
          this.btnloading = false;
        }
      }
    },

    async getCategoryForReportReply() {
      try {
        let url = `/qna/v1/qna/report/reasons`;
        const data = await this.$axios.$get(url);
        if (data.success) {
          this.cateGoryList = data.payload;
          this.cateGoryList = this.cateGoryList.map((v) => ({
            ...v,
            isActive: false,
          }));
          
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    },

    changeCatgryType(category: any) {
      category.isActive = !category.isActive;
      this.validateForm(this.cateGoryList);
    },

    onChangeCommentInput() {
      if (!this.reportReplyDetails.description.length) {
        this.isFormValid = false;
      } else {
        this.validateForm(this.cateGoryList);
      }
    },

    validateForm(categoryList: any) {
      const cateGoryList = categoryList.filter(
        (category: any) => category.isActive
      );

      if (cateGoryList.length || this.reportReplyDetails.description.length) {
        this.isFormValid = true;
      } else {
        this.isFormValid = false;
      }
    },

    viewReplyOpButton(RItem: any) {
      const item = RItem.replies;
      if (this.userId && this.authUser?.uid) {
        if (this.userId === this.authUser?.uid) {
          if (item[0].canEdit || item[0].canDelete) {
            return true;
          } else {
            return false;
          }
        } else {
          if (RItem.user.userId === this.authUser?.uid) {
            if (item[0].canReport) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      }
    },

    viewReplyIp(index:any){
      this.replyIndexValue = index,
      this.showReplyIp = true
    },

    closeReplySection(){
    this.replyIndexValue = null
    this.showReplyIp = false
    },

    onEnterReply(item:any){
    if(this.replyString){
      this.submitReply(item)
    }else{
    return false
    }
    },

    async submitReply(item:any){
      if (this.replyString) {
        this.btnloading = true;
        const repStr = { comment: this.replyString };
        try { 
          let url = `/qna/v1/qna/offer/${this.offerId}/question/${item.threadId}/reply`;
          const data = await this.$axios.$post(url, repStr);
          if (data.success) {
            this.closeReplySection();
            this.getQuestionsAnsList(this.offerId);
            this.replyString= ''
          } else {
          }
         this.btnloading = false;
        } catch (error) {
          console.log(error);
         this.btnloading = false;
        }
      }
    },

    async deleteReply(deltedItem:any){
     let threadId = deltedItem.threadId;
     let replyId  = deltedItem.replies[0].replyId
     
      try {
        this.btnloading = true;
          let url = `/qna/v1/qna/offer/${this.offerId}/question/${threadId}/reply/${replyId}`
          const data = await this.$axios.$delete(url);
          if (data.success) {
            this.getQuestionsAnsList(this.offerId);
            this.replyOptionsExpand = false;
          } else {
          }
          this.btnloading = false;
        } catch (error) {
          console.log(error);
           this.btnloading = false;
        }
    },
    editQuestion(indexVal:any,itemValue:any){
     this.editQuestionIndexValue = indexVal
     this.showEditIpField = true;
     this.isOptionsExpanded =false
     this.editQuestionString = itemValue.question
          
     this.onEditChange(this.editQuestionString, 'editQuestionString')
    },

    closeEditSection(){
     this.showEditIpField = false;
     this.isOptionsExpanded =false
    },

    onEnterEditQuestion(item:any){
    if (this.editQuestionString) {
     this.submitEditQuestion(item)
    }else{
      return false
    }
    },

    async submitEditQuestion(itemVal:any){
    this.btnloading = true

     if (this.editQuestionString) {
       const threadId = itemVal.threadId
        const questions = { question: this.editQuestionString };
        try {  
          let url = `/qna/v1/qna/offer/${this.offerId}/question/${threadId}`;
          const data = await this.$axios.$put(url, questions);
         // console.log("Data", data);
          if (data.success) {
            this.closeEditSection();
            this.getQuestionsAnsList(this.offerId);
            this.editQuestionString = ''
          } else {
          }
         this.btnloading = false
        } catch (error) {
          console.log(error);
         this.btnloading = false
        }
      }
    },

    editReply(index:any,itemVal:any){
   //  console.log("index",index);
     this.editReplyIndexValue = index
     this.showEditIpReply = true
     this.replyOptionsExpand = false
     this.editReplyString  = itemVal.replies[0].comment
     this.onEditReplyChange(this.editReplyString, 'editReplyString')
    },
    closeReplyEditSection(){
     this.showEditIpReply = false
    },

    onEnterEditReply(item:any){
     if (this.editReplyString) {
      this.submitEditReplyQuestion(item)
     }else{
       return false
     }
    },

   async submitEditReplyQuestion(itemVal:any){
     
        if (this.editReplyString) {
       this.btnloading = true;
       let  threadId = itemVal.threadId
       let replyId = itemVal.replies[0].replyId;
        const comment = { comment: this.editReplyString };
        try {  
          let url = `/qna/v1/qna/offer/${this.offerId}/question/${threadId}/reply/${replyId}`;
          const data = await this.$axios.$put(url, comment);
       //   console.log("Data", data);
          if (data.success) {
            this.closeReplyEditSection();
            this.getQuestionsAnsList(this.offerId);
            this.editReplyString = ''
          } else {
          }
         this.btnloading = false;
        } catch (error) {
          console.log(error);
         this.btnloading = false;
        }
      }
    }

  },
});
</script>

<style>
  .-z-1 {
    z-index: -1;
  }

  .origin-0 {
    transform-origin: 0%;
  }

  input[type="text"]:focus ~ label, input[type="email"]:focus ~ label, input[type="number"]:focus ~ label,
  input[type="text"]:not(:placeholder-shown) ~ label, input[type="email"]:not(:placeholder-shown) ~ label, input[type="number"]:not(:placeholder-shown) ~ label,
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield !important;
}
</style>





 