<template>
    <div class="pt-12">
        <Header/>
         
            <div @dragover.prevent @dragstart.prevent @dragenter.prevent @drop.prevent  class=" container max-w-8xl mx-auto px-2 sm:px-4 md:px-8 2xl:px-16 pt-[15px] mb-4 create-listing">
                
                <Breadcumb class="my-4 mt-[40px] lg:mt-[16px]" :breadcrumb="breadcrumb"  />
               

                    <div v-if="showLoader" class="fixed w-full h-full z-50 top-0 left-0 bg-black opacity-40"></div>
<div v-if="showLoader" class="w-full h-screen fixed flex justify-center items-center z-50 top-0 left-0">
    <div class="bg-white rounded-full shadow w-12 h-12 mx-auto flex items-center justify-center">
                        <div style="border-top-color:transparent"
                            class="w-8 h-8 border-4 border-green border-solid rounded-full animate-spin"></div>
    </div>
                    </div>

                    <div v-if="hasApiError" class="fixed top-[150px] sm:top[100px] p-5 bg-red-800 text-white z-10 rounded left-0 right-0 m-auto w-[500px] text-center">
                        
                        {{this.errMssg}}
                    </div>


                <div class="grid grid-cols-12 gap-x-4">
                    <div class="col-span-12 lg:col-span-9">
                         <div class="hidden  justify-center sm:h-[60px]">
                            <stepper class=""></stepper>
                            </div>
                        <div id="sec-1" class="rounded active-now border-t-[3px] border-t-[#48cef3] sm:drop-shadow bg-white mb-0">
                        <div class="flex bg-[#48cef3] text-white pt-0 pl-4 pb-1">
                                <div class="flex-none rounded-[50%] text-firoza text-center h-5 w-5 text-sm border bg-white border-firoza mt-[2px]">1</div>
                                <h3  class="flex-none section-title  text-base font-normal ml-2 " >
                                    <!--Upload Product Image / Video-->
                                    {{ $t('cl_UploadProductImageVideo') }}     
                                </h3>
                                <div class="grow text-right pr-4 text-sm pt-[3px]">(Step 1/3)</div>
                            </div>
                            <div class="px-0 sm:px-4 py-4">
                                <div class="grid grid-cols-12">
                                <div class="col-span-9 text-xs text-gray-500 pb-3">
                                    <!-- <p>You can add up to a maximum of 10 media files.</p> -->
                                    <p>{{ $t('cl_Youcanadduptoamaximumof12mediafiles') }}     </p>
                                    <p v-show="maxFileValidation"  class="pt-4 text-red-500">Maximum 10 files allowed</p>
                                    <p v-show="firstUploadValidation"  class="pt-4 text-red-500">{{ $t('cl_uploadValidation') }}  </p>
                                    <p v-show="maxVideoValidation"  class="pt-4 text-red-500">Maximum 2 video files allowed</p>
                                </div>
                                <div  class="col-span-3 text-right lg:hidden">
                                    <div class="float-right w-[70px]">
                                       <div @click="showModal()" class="  flex justify-end drop-shadow-sm border border-gray-300 bg-white py-0 pb-[5px] px-2 rounded text-firoza font-medium text-base mt-[-9px]">
                                           <img class="h-[23px] mt-0" src="~/assets/images/tips.svg" alt="tips" /><span class="inline-block pt-[4px] ml-0 text-green text-sm">Tips</span>
                                       </div>
                                      </div>  
                                        
                                    </div>
                                <!-- <div @click="showModal()" class="grow col-span-3 lg:hidden text-[#48cef3] cursor-pointer mt-[-4px] text-right font-bold text-sm">Tips</div> -->
                                </div>
                                <div id="beforeUpload" @click="uploadMedia('before')"   @dragover.prevent @drop="dropFiles"    class="grid grid-cols-12 gap-x-2 cursor-pointer">
                                    <input type="file" @click="clearValue($event)" multiple   @change="filesChange($event)"
            accept="image/*,video/*" id="fileUpload" class="hidden input-file">
                                    <!-- <input id="fileUpload" @change="startUploading($event)" class="hidden" type="file" name="mediaUpload"/> -->
                            <div class="col-span-12  h-[50vh] sm:h-[230px] flex flex-col justify-center  p-2 text-center border border-dashed  align-middle rounded bg-[#F6F9FE] border-firoza">
                       <div class="text-center ">
                           <img class="w-[200px] mx-auto " src="~/assets/images/upload.png" alt="upload"/>
</div>

<!-- :class="disableBrowseButton ? 'pointer-events-none opacity-30' : ''"  -->
<div   class="text-center mt-[-30px] mb-5">
    <button    class="bg-firoza z-1 text-white font-base py-1 px-3  sm:h-12 rounded w-34 sm:w-56 text-base capitalize">
                           <!-- Browse -->
                           {{ $t('cl_Browse') }}
                          </button>
</div>
<div class="text-center text-gray-500 text-sm">
 <!-- Or drop the photos/videos here to upload -->
 {{ $t('cl_Ordropthephotosvideosheretoupload') }} 
    <!-- Drop your files here or <span class="text-firoza underline text-base">Browse</span> -->
</div>

<!-- <div class="text-sm text-gray-500 pt-3">Drop your file here to upload
or select from storage </div> -->
<!-- <div class="text-sm text-gray-500">( Upload mandatory cover image first )</div> -->

                    </div>

                        
                       
                                </div>
                                
                            </div>
                            <!-- :class="disableBrowseButton ? 'pointer-events-none opacity-30' : ''" -->
                            <div id="afterUpload" class="hidden pb-0 sm:pb-4">
                                <div v-if="uploadComplete && imageDetails.length < 1" class="text-red-500 col-span-9 text-xs pb-3 pl-4 mb-0 sm:mb-4">{{$t('cl_Kindlyuploadanotherphotovideotoproceedfurther')}}</div>
                                <div   class="sm:hidden flex justify-end pt-0 px-0 sm:px-4 pb-0">
                                    
                                    <button @click="uploadMedia('after')" type="button" class="border border-firoza flex justify-center items-center bg-transparent py-1 px-4 rounded text-firoza font-medium text-base">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
</svg><span class="ml-2">Upload</span>
                                    </button>
                                </div>
                            <div v-if="this.imageDetails.length > 0" class="grid  grid-cols-12 gap-x-0 gap-y-0 pt-0 px-0  pb-0 sm:px-0 sm:pt-0 sm:pb-2 my-4 sm:mx-4 sm:mt-[-15px] border border-firoza border-dashed" id="">
                                <div  v-for="(item,i) in imageDetails" :key="i" class="relative col-span-6 border-r-0 border-b-0 sm:border-b   sm:col-span-3 p-[5px] align-middle">
                                   <!-- <div v-if="offerStage == 'Failed' && item.safe == false" title="Image Upload Failed" class="rounded-md bg-red-50 p-2 mb-2  border-errortext absolute left-2 top-2"><svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.97623 0.385841C10.4255 0.132888 10.9324 0 11.448 0C11.9636 0 12.4705 0.132888 12.9198 0.385841C13.3691 0.638795 13.7456 1.00328 14.013 1.44412L14.0159 1.44886L22.4859 15.5889L22.494 15.6027C22.756 16.0563 22.8946 16.5706 22.896 17.0945C22.8975 17.6183 22.7618 18.1334 22.5024 18.5885C22.243 19.0436 21.8689 19.4228 21.4174 19.6885C20.966 19.9541 20.4528 20.0969 19.929 20.1027L19.918 20.1028L2.97802 20.1027H2.96703C2.44322 20.097 1.93006 19.9541 1.47859 19.6885C1.02712 19.4228 0.653071 19.0436 0.393668 18.5885C0.134265 18.1334 -0.00145493 17.6183 1.17626e-05 17.0945C0.00147851 16.5706 0.140081 16.0563 0.402028 15.6027L0.410152 15.5889L8.88015 1.44887L9.738 1.96273L8.88302 1.44412C9.15042 1.00328 9.52694 0.638795 9.97623 0.385841ZM10.5942 2.47938L2.13071 16.6086C2.04553 16.7584 2.00049 16.9277 2 17.1001C1.99951 17.2747 2.04475 17.4464 2.13122 17.5981C2.21769 17.7498 2.34237 17.8762 2.49286 17.9647C2.64204 18.0525 2.81141 18.1 2.98442 18.1027H19.9116C20.0846 18.1 20.254 18.0525 20.4032 17.9647C20.5537 17.8762 20.6783 17.7498 20.7648 17.5981C20.8513 17.4464 20.8965 17.2747 20.896 17.1001C20.8956 16.9277 20.8505 16.7584 20.7654 16.6086L12.303 2.48137L12.3018 2.47938C12.2127 2.33333 12.0877 2.21255 11.9386 2.12861C11.7889 2.0443 11.6199 2 11.448 2C11.2762 2 11.1072 2.0443 10.9574 2.12861C10.8083 2.21255 10.6833 2.33333 10.5942 2.47938ZM11.448 6.10274C12.0003 6.10274 12.448 6.55046 12.448 7.10274V11.1027C12.448 11.655 12.0003 12.1027 11.448 12.1027C10.8957 12.1027 10.448 11.655 10.448 11.1027V7.10274C10.448 6.55046 10.8957 6.10274 11.448 6.10274ZM11.448 14.1027C10.8957 14.1027 10.448 14.5505 10.448 15.1027C10.448 15.655 10.8957 16.1027 11.448 16.1027H11.458C12.0103 16.1027 12.458 15.655 12.458 15.1027C12.458 14.5505 12.0103 14.1027 11.458 14.1027H11.448Z" fill="#FD3E3E"/>
</svg></div> -->

 <div v-if="offerStage == 'Failed' && item.safe == false" title="Image Upload Failed" class=" bg-red-500 font-semibold p-1 mb-2 absolute  px-1 top-4 left-4  text-center text-white text-xs">
    ERROR
</div>
                                    <div v-if="!item.cover && showRemoveBtn" @click="removeImage(i,item.id)" class="absolute cursor-pointer right-[5px] top-[5px] z-1 rounded-[50%] border border-[#fc2323] h-6 w-6 bg-white drop-shadow pt-[2px]">
                                       
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="#FC2323">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
                                   
                                    </div>
                                    <div @click.stop="selectCover($event,i)" class="cursor-pointer absolute left-1 bottom-[1px]  z-1 bg-white/[0.9] border border-green text-black font-base text-xs py-1 px-2">
                                    <div  class="flex">
                                        <div class="pt-0 mr-1">
                                            <div v-if="item.cover"  class="selected">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="#6B9C2E">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
                                            </div>

                                            <div v-if="!item.cover" class="notSelected pt-[2px] mr-1">
                                                <div class="rounded-[50%] h-3 w-3 bg-white border border-gray-700"></div>
                                            </div>
                                        </div>
                                        <div>Cover Photo</div>
                                    </div>
                                    
                                    </div>
                                   
                                        <img :class="offerStage == 'Failed' && item.safe == false ? 'border-2 border-red-500' : ''" :src= "item.url"  class="mx-auto block h-[150px] rounded" alt="..."/>
                                       
                                </div>
                                
                                
                                
                            </div>


                            <!-- video upload-->

                             <div v-if="this.videoDetails.length > 0" :class="this.imageDetails.length > 0 ? 'mt-4' : 'mt-0'" class="grid  grid-cols-12 gap-x-0 gap-y-0 pt-0 px-0  pb-0 sm:px-0 sm:pt-0 sm:pb-2 my-4 sm:mx-4 border border-firoza border-dashed" id="">
                                <div v-for="(item,i) in videoDetails" :key="i" class="relative col-span-6 border-r-0 border-b-0 sm:border-b   sm:col-span-3 p-[5px] align-middle">
                                   <!-- <div v-if="offerStage == 'Failed' && item.safe == false" title="Video Upload Failed" class="rounded-md bg-red-50 p-2 mb-2  border-errortext absolute left-2 top-2"><svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.97623 0.385841C10.4255 0.132888 10.9324 0 11.448 0C11.9636 0 12.4705 0.132888 12.9198 0.385841C13.3691 0.638795 13.7456 1.00328 14.013 1.44412L14.0159 1.44886L22.4859 15.5889L22.494 15.6027C22.756 16.0563 22.8946 16.5706 22.896 17.0945C22.8975 17.6183 22.7618 18.1334 22.5024 18.5885C22.243 19.0436 21.8689 19.4228 21.4174 19.6885C20.966 19.9541 20.4528 20.0969 19.929 20.1027L19.918 20.1028L2.97802 20.1027H2.96703C2.44322 20.097 1.93006 19.9541 1.47859 19.6885C1.02712 19.4228 0.653071 19.0436 0.393668 18.5885C0.134265 18.1334 -0.00145493 17.6183 1.17626e-05 17.0945C0.00147851 16.5706 0.140081 16.0563 0.402028 15.6027L0.410152 15.5889L8.88015 1.44887L9.738 1.96273L8.88302 1.44412C9.15042 1.00328 9.52694 0.638795 9.97623 0.385841ZM10.5942 2.47938L2.13071 16.6086C2.04553 16.7584 2.00049 16.9277 2 17.1001C1.99951 17.2747 2.04475 17.4464 2.13122 17.5981C2.21769 17.7498 2.34237 17.8762 2.49286 17.9647C2.64204 18.0525 2.81141 18.1 2.98442 18.1027H19.9116C20.0846 18.1 20.254 18.0525 20.4032 17.9647C20.5537 17.8762 20.6783 17.7498 20.7648 17.5981C20.8513 17.4464 20.8965 17.2747 20.896 17.1001C20.8956 16.9277 20.8505 16.7584 20.7654 16.6086L12.303 2.48137L12.3018 2.47938C12.2127 2.33333 12.0877 2.21255 11.9386 2.12861C11.7889 2.0443 11.6199 2 11.448 2C11.2762 2 11.1072 2.0443 10.9574 2.12861C10.8083 2.21255 10.6833 2.33333 10.5942 2.47938ZM11.448 6.10274C12.0003 6.10274 12.448 6.55046 12.448 7.10274V11.1027C12.448 11.655 12.0003 12.1027 11.448 12.1027C10.8957 12.1027 10.448 11.655 10.448 11.1027V7.10274C10.448 6.55046 10.8957 6.10274 11.448 6.10274ZM11.448 14.1027C10.8957 14.1027 10.448 14.5505 10.448 15.1027C10.448 15.655 10.8957 16.1027 11.448 16.1027H11.458C12.0103 16.1027 12.458 15.655 12.458 15.1027C12.458 14.5505 12.0103 14.1027 11.458 14.1027H11.448Z" fill="#FD3E3E"/>
</svg></div> -->

 <div v-if="offerStage == 'Failed' && item.safe == false" title="Video Upload Failed" class=" bg-red-500 font-semibold p-1 mb-2 absolute  px-1 top-4 left-4  text-center text-white text-xs">
    ERROR
</div>
                                    <div @click="removeVideo(i,item.id)" class="absolute cursor-pointer right-[5px] top-[5px] z-10 rounded-[50%] border border-[#fc2323] h-6 w-6 bg-white drop-shadow pt-[2px]">
                                       
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="#FC2323">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
                                   
                                    </div>
                                    <div class="cursor-pointer absolute left-1 bottom-[1px]  z-10 bg-white/[0.9] border border-green text-black font-base text-xs py-1 px-2">
                                    <div  class="flex">
                                        <div class="pt-0 mr-1">
                                            <div v-if="item.cover"  class="selected">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="#6B9C2E">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
                                            </div>

                                            <div class="notSelected pt-[2px] mr-1">
                                                
                                            </div>
                                        </div>
                                        <div>Video</div>
                                    </div>
                                    
                                    </div>
                                    <video :class="offerStage == 'Failed' && item.safe == false ? 'border-2 border-red-500' : ''"   class="mx-auto block h-[150px] rounded z-0" alt="...">
                                        <source :src= "item.url" :type="videoExtension">
                                    </video>
                                </div>
                                
                                
                                
                            </div>

                            <!-- :class="disableBrowseButton ? 'pointer-events-none opacity-30' : ''" -->

                            <div @click="uploadMedia('after')" id=""     class="hidden   sm:grid grid-cols-12 gap-x-2 cursor-pointer px-4 ">
                                    
                            <div  @dragover.prevent @drop="dropFiles"  class="col-span-12  h-auto sm:h-[100px] flex flex-col justify-center  p-2 text-center border border-dashed  align-middle rounded bg-[#FCFCFD] border-[#87898E]">
                       <div>
                           <!-- <h3 class="flex-none section-title  text-xl font-bold ml-2 " >
                                    Drag file here      
                                </h3> -->
                                <button  class="bg-firoza text-white font-medium py-1 px-3 h-12 rounded w-56 text-base">
                          {{ $t('cl_Browse') }} 
                          </button>
                          <div class="text-center text-gray-500 text-sm pt-2">
 {{ $t('cl_Ordropthephotosvideosheretoupload') }} 
    <!-- Drop your files here or <span class="text-firoza underline text-base">Browse</span> -->
</div>
                        
</div>
                    </div>

                        
                       
                                </div>
                            </div>
                       </div>

                       <div class="hidden" id="sec-2">


                    

                           <div class="rounded border-t-[3px] border-t-[#48cef3]  sm:drop-shadow bg-white mb-2">
                            
                            <div class="flex bg-[#48cef3] text-white pt-0 pl-4 pb-1">
                                <div class="flex-none rounded-[50%] text-firoza text-center h-5 w-5 text-sm border bg-white border-firoza mt-[2px]">2</div>
                                <h3 class="flex-none section-title  text-base font-normal ml-2 " >
                                    {{$t('cl_BasicProductInformation')}}
                                </h3>
                                <div class="grow text-right pr-4 text-sm pt-[3px]">(Step 2/3)</div>
                            </div>
                           
                            <div class="py-4 px-0 sm:p-4 ">
                                <!-- <form ref="basic" @change="handleChange"> -->
                                    <form ref="basic">
                                    <div class="flex justify-end">
                               
                                <div @click="showModal()" class="w-[70px] lg:hidden flex drop-shadow-sm border justify-center border-gray-300 bg-white py-0 pb-[5px] px-2 rounded text-firoza font-medium text-base mt-[-9px]">
                                           <img class="h-[23px] mt-0" src="~/assets/images/tips.svg" alt="tips" /><span class="inline-block pt-[4px] ml-0 text-green text-sm">Tips</span>
                                       </div>
                                </div>


                                    <div class="relative z-10 w-full mb-8">
                                        <input
          type="text"
          name="category"
          placeholder=" "
          
           autocomplete="off" 
           @keydown = "makeReadOnly($event)"
           @click="resetCategory('info')"
          @focus= "(e) => e.target.blur()"
          v-model="product.category"
          class="pt-3 pb-2 block w-full  px-0 mt-0 bg-transparent border-0 border-b appearance-none  focus:outline-none focus:cursor-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        <span @click="resetCategory('info')" class="absolute right-0 top-[15px]">
                                            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                         </span>
                                        
                                         <div tabindex="0" id="dropDownArea"  @blur="closeDrop('info')" v-show="isShowDivIfh"  class="border p-1 absolute w-full bg-white left-0 top-[40px] z-10 sm:p-1 md:p-4 lg:p-4 xl:p-4 2xl:p-4">
                                             <p class="text-xs font-normal text-gray-600 pt-2 pb-1">{{$t('cl_Search_Category')}}</p>
                                             <input id="customCatInput" autocomplete="off"   v-model="product.customCategory"  @input = "searchCat" class="w-full p-3 mb-1 block   mt-0 bg-transparent border appearance-none  focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"  type="text" name="" placeholder="" />
                                             <!-- <div class="absolute z-20 bg-white w-[90%] h-auto max-h-[150px] overflow-y-auto" v-if="searchCatArr.length > 0">
                                                 <div v-for="(catItem,i) in catBreadCrumb" :key="i">
                                                     <div @click="selectCustomCat(catItem.name,i)" class="text-sm text-gray-500 p-4 " ><span class="cursor-pointer">{{catItem.string}}</span></div>
                                                    
                                                 </div>

                                             </div> -->
                                             <!-- <p class="text-xs font-normal text-gray-600 pt-2 pb-5">{{$t('cl_Search_Category')}}</p> -->
                                             <div @click="forceloseDropdown()" class="absolute right-5 top-2 cursor-pointer">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#000000">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
                                                            </div>
                                             <div class="flex flex-row">
                                                 <div v-if="onlySearchResult" class="basis-full all-catwrs">
                                                    <div :class="i+1 != catBreadCrumb.length ? 'border-b-0' : 'border-b-1'" class="border px-2 py-3 cursor-pointer text-xs text-slate-500 hover:bg-slate-100" v-for="(catItem,i) in catBreadCrumb" :key="i">
                                                        <div @click="selectCustomCat(catItem.name,i)" class="" ><span class="cursor-pointer">{{catItem.string}}</span></div>
                                                        
                                                    </div>
                                                 </div>
                                                 <div v-if="onlyVerticals" class="basis-2/6 ">
                                                    <div @click="showLeafNodes(item.verticalId,$event)" :class="i+1 != verticalList.length ? 'border-b-0' : 'border-b-1'" class="relative  verticals border text-[11px] pl-[5px] px-2 py-3 cursor-pointer text-slate-500 hover:bg-slate-100 sm:text-xs sm:pl-[26px] md:text-xs md:pl-[45px] lg:text-xs lg:pl-[45px] xl:text-xs xl:pl-[45px] 2xl:text-xs 2xl:pl-[45px]" v-for="(item,i) in verticalList" :key="i">
                                                         <img :src="item.imagePath" :alt="item.label" class="absolute hidden left-[5px] top-[14px] w-[16px] cta-absoy sm:left-[5px] sm:top-[14px] sm:w-[16px] sm:block md:left-2 md:top-[8px] md:w-auto md:block lg:left-2 lg:top-[8px] lg:w-auto lg:block xl:left-2 xl:top-[8px] xl:w-auto xl:block 2xl:left-2 2xl:top-[8px] 2xl:w-auto 2xl:block cati-mage"/> 
                                                         {{item.label}}
                                                        <!-- <span @click="arrowClicked($event)" class="absolute right-5 top-[13px]"> -->
                                                            <div @click.stop="arrowClicked(item.verticalId,$event)"  class="absolute right-[0px] top-[10px] h-[20px] w-[20px] z-[100] sm:right-[0px] md:right-[15px] lg:right-[15px] xl:right-[15px] 2xl:right-[15px]"></div>
                                                            <svg class="absolute right-[5px] top-[13px] sm:right-[5px] md:right-5 lg:right-5 xl:right-5 2xl:right-5" width="8" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 13L7 7L1 1" stroke="#8CAEC5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                        <!-- </span> -->
                                                    </div>
                                                 </div>
                                                 <!--middle row start here-->
                                                 <div class="basis-2/6 max-h-96 sm:max-h-80 overflow-y-auto auto-scroll middle-ver catup-weys"  >
                                                    <div v-for="(list,i) in leafNodeBreadCrumb"   @click="getSuperLeafNode(list)" :key="i" :class="i+1 != verticalList.length ? 'border-b-0' : 'border-b-1'" class="border border-l-0 last-border text-[11px] px-2 py-3 cursor-pointer text-slate-500 hover:bg-slate-100 relative sm:text-[11px] md:text-xs lg:text-xs xl:text-xs 2xl:text-xs ">
                                                        {{list.string}}
                                                      <svg v-if="isChildrenEsists(list)" class="absolute right-[5px] top-[13px] sm:right-[5px] md:right-5 lg:right-5 xl:right-5 2xl:right-5" width="8" height="12" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 13L7 7L1 1" stroke="#8CAEC5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                      </div> 

                                                        </div>
                                                 
                                                   <!-- Middle Row End Here -->


                                
                                                   <!--For Testing-->
                                                   
                                                 <!-- <div class="basis-2/6" >
                                                    <div v-for="(list,i) in superLeafsNode" :key="i" class="relative verticals border text-xs px-2 py-3 cursor-pointer text-slate-500 hover:bg-slate-100 border-b-0 bg-slate-200 text-slate-700">
                                                        {{list.label}}
                                                        </div> 

                                                        </div> -->

                                                        <div v-if="superLeafsNode.length"  class="basis-2/6 max-h-96 sm:max-h-80 overflow-y-auto auto-scroll middle-ver catup-wey">
                                                    <div @click="selectCategory(list.name,list.categoryId)" :class="i+1 != leafNodeBreadCrumb.length ? 'border-b-0' : 'border-b-1'" class="border border-l-0 last-border text-[11px] px-2 py-3 cursor-pointer text-slate-500 hover:bg-slate-100 sm:text-[11px] md:text-xs lg:text-xs xl:text-xs 2xl:text-xs" v-for="(list,i) in superLeafsNode" :key="i">
                                                            {{list.label}}
                                                        </div>
                                                 </div>
                                                 
                                                   <!-- End Testing -->
                                                        
                                                        <!-- It is commeted Out -->
                                                        <!-- <div v-if="onlyVerticals"  class="basis-3/6 max-h-96 sm:max-h-80 overflow-y-auto">
                                                    <div @click="selectCategory(list.name,list.categoryId)" :class="i+1 != leafNodeBreadCrumb.length ? 'border-b-0' : 'border-b-1'" class="border border-l-0 text-xs px-2 py-3 cursor-pointer text-slate-500 hover:bg-slate-100" v-for="(list,i) in leafNodeBreadCrumb" :key="i">
                                                            {{list.string}}
                                                        </div>
                                                 </div> -->
                                                 <!-- End Of Commented Out -->
                                             </div>
                                             <!-- <h4 class="section-title text-gray-600  text-base md:text-sm  font-medium mb-2 mt-3">{{$t('cl_Suggested')}}</h4> -->
                                             <!-- <div class="text-sm text-red-500" v-if="categoryTags.length == 0">{{$t('cl_No_suggestion_found')}}</div> -->
                                             <!-- <div class="h-[100] overflow-auto">
                                             <div class="flex flex-wrap ">
                                                 <div v-for="(item,i) in categoryTags" :key="i" @click.stop="selectCategory(item.name,item.categoryId)" class="px-2 py-1 rounded-md border text-sm font-normal text-gray-400 mr-2 mb-2 cursor-pointer">
                                                     {{item.name}}
                                                  </div>
                                             </div>
                                             </div> -->
                                         </div>
                                        <!-- <input  type="text" name="username" placeholder=" " /> -->
                                        <label for="name" class="absolute duration-300 top-3 -z-1 sm:-z-1 origin-0 text-gray-500 text-sm">{{$t('cl_Category')}}</label>
                                    </div>
                                    <!-- <div id="box"  class="relative z-9 w-full mb-8">
                                        <div class="flex flex-wrap">
                                            <div @click="showLeafNodes(item.verticalId,$event)" class=" relative ml-3 mb-3 bg-green border rounded text-sm text-white px-2 py-1 text-center cursor-pointer" v-for="(item,i) in verticalList" :key="i">
                                                {{item.name}}
                                            </div>
                                            
                                        </div>

                                         <div id="leafNodeDropDown"  @blur="closeDrop('leaf')" tabindex="0" v-if="leafNodeBox" :style="{top: leafNodeBoxPos + 'px'}"  class="w-full h-auto overflow-auto border rounded absolute z-10 bg-gray-200 shadow-sm py-2 max-h-[250px] overflow-y-auto">
                                                    <div class="flex flex-wrap">
                                                        <div @click="selectCategory(list.name,list.categoryId)" class="ml-4 mb-3 border border-firoza rounded text-xs px-2 py-1 text-center cursor-pointer bg-white" v-for="(list,i) in leafNodeBreadCrumb" :key="i">
                                                            {{list.string}}
                                                        </div>
                                                    </div>

                                        </div>
                                       
                                    </div> -->
                                   




                                    <div class="relative z-0 w-full mb-8">
                                         <input
          type="text"
          name="name"
          placeholder=" "
          required
          autocomplete="off"
          v-model="product.name"
          @input = "handleChange"
          @blur = "changeSaved"
          minlength="1"
          maxlength="300"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_Title')}}</label>
                                        <span class="text-sm text-red hidden" id="error">Title is required</span>
                                        <p class="text-xs text-red-600" v-if="nameValidation">{{$t('cl_Title_message')}}</p>
                                        <p class="text-xs text-red-600" v-if="!isNameValidate">{{$t('cl_checkTitle_Message')}}</p>
                                        
                                    </div>
                                    <div class="relative z-0 w-full mb-8">
                                        <textarea
          name="description"
          placeholder=" "
          v-model= "product.description"
          @input = "handleChange"
          minlength="2"
          maxlength="3000"
          @blur = "changeSaved"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_Description')}}</label>
                                        <p class="text-xs font-normal text-gray-600 pt-2">{{$t('cl_Enterproductdetailsfocusingonitskeyfeatures')}}
</p>
<p class="text-xs text-red-600" v-if="descValidation">{{$t('cl_Description_Message')}}</p>

<p class="text-xs text-red-600" v-if="!isDesValidate">{{$t('cl_checkDes_Message')}}</p>
                                        
                                    </div>
                                    


                                     <!-- <div class="relative z-0 w-full mb-8">
                                        <label for="name" class="text-firoza text-xs">Listing For</label>
                                        <div class="flex">
                                            <div class="flex-none mr-5">
                                                <div class="inline-block"><input type=radio name="exchangeMode" value="Money" @input = "handleChange" v-model="product.exchangeMode" /></div> <div class="inline-block text-sm text-gray-500">Money</div>
                                            </div>
                                            <div class="flex-none mr-5">
                                                <div class="inline-block"><input type=radio checked value="Barter" @input = "handleChange" name="exchangeMode" v-model="product.exchangeMode" /></div> <div class="inline-block text-sm text-gray-500">Barter</div>
                                            </div>
                                            <div class="flex-auto">
                                                <div class="inline-block"><input type=radio name="exchangeMode" @input = "handleChange" value="Free" v-model="product.exchangeMode" /></div> <div class="inline-block text-sm text-gray-500">Donate</div>
                                            </div>
                                        </div>
                                    </div> -->


                                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-x-0 gap-y-0 md:gap-x-14 md:gap-y-2 lg:gap-x-14 lg:gap-y-2 xl:gap-x-14 xl:gap-y-14 2xl:gap-x-14 2xl:gap-y-14">


                                        <div class="relative z-0 w-full mb-8">
              <select @blur = "changeSaved" 
              
              @change="handleChange" 
              v-model="product.itemCondition"
                name="itemCondition"
                placeholder=" "
                class="
                  
                  text-gray-600
                  block
                  w-full
                 
                  mt-0
                  bg-transparent
                  border-0 border-b
                  appearance-none
                  focus:outline-none focus:ring-0 focus:border-firoza
                  border-gray-200
                  text-sm p-2
                "
              >
             
                <option    v-for="(item,i) in itemConditionList" :key="i" :value="item.value" >{{item.conditionText}}</option>
             
              
              </select>
              <label
                for="select"
                class="
                  absolute
                  duration-300
                  top-3
                  -z-1
                  origin-0
                  text-gray-500 text-sm
                "
                > {{$t('condition_Text')}} </label
              >
              
              <span class="absolute right-0 top-[15px] -z-50">
                <svg
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 1.25L7.5 8L14.25 1.25"
                    stroke="#9EA5AA"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div> 


                                         <div class="relative z-0 w-full mb-8">
                                            <input
                                            type="number"
                                            name="price"
                                            placeholder=" "
                                            v-model="product.price"
                                            @input = "handleChange"
                                            step="any"
                                            @keydown="limitDecimalPlaces($event,2)"
                                            @blur = "changeSaved"
                                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                                            />
                                        
                                         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_MarketValue')}} (&#x20B9;)</label>


                                       

                                        </div> 

                                      
                                      <div class="relative z-0 w-full mb-8">
                                        <input
          type="number"
          name="unitOfferValuation"
          autocomplete="off"
          placeholder=" "
          required
          v-model="product.unitOfferValuation"
          @input = "handleChange"
          step="any"
          @keydown="limitDecimalPlaces($event,2)"
          @blur = "changeSaved"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_ProductPrice')}} (&#x20B9;)</label>
                                         <!-- <p class="text-xs font-normal text-gray-600 pt-2" v-if="product.unitOfferValuation == null">&#x20B9; {{$t('cl_1isequivalentto1gintaacoin')}}</p> -->
                                         <!-- <p class="text-xs font-normal text-gray-600 pt-2" v-if="product.unitOfferValuation > 0">&#x20B9; {{product.unitOfferValuation}} = {{product.unitOfferValuation}} gintaa coins</p> -->
                                         <p class="text-xs text-red-600" v-if="!isMrpValidated">{{$t('cl_mrpValidated_Message')}}</p>

                                          <p class="text-xs text-[#3F76B5] pt-2" v-if="isMrpValidated && +negotiablePrice > 100 ">{{$t('cl_negotiable_Message',{negotiablePrice:negotiablePrice})}}({{this.offPercentage}})</p> 
                                        </div>

                                       
                                        <div class="relative z-0 w-full mb-8">
                                        <input
          type="number"
          name="quantity"
          autocomplete="off"
          value=1
          placeholder=" "
          required
          v-model="product.quantity"
          @input = "handleChange"
          step="any"
          @keydown="onlyNumber($event)"
          @blur = "changeSaved"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_Quantity')}}</label>
                                    </div>



                                        


                                    <!-- <div class="relative z-0 w-full mb-8">
                                        <select name="unit" v-model="product.unit" @change="handleChange" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                                            <option selected value="Piece">{{$t('cl_Piece')}}</option>
                                            <option value="Box">{{$t('cl_Box')}}</option>
                                            <option value="Pack">{{$t('cl_Pack')}}</option>
                                            <option value="Kg">{{$t('cl_Kg')}}</option>
                                            <option value="Litre">{{$t('cl_Litre')}}</option>
                                        </select>
                                        <span class="absolute right-0 top-[15px]">
                                            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                         </span>
            
                                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_Unit')}}</label>
                                    </div> -->

                                    
                                    
                                        
                                    </div>

                    <div class="grid grid-cols gap-6 sm:gap-6 sm:grid-cols-2 md:gap-6 md:grid-cols-2 lg:gap-14 lg:grid-cols-3 xl:gap-14 xl:grid-cols-3 2xl:gap-14 2xl:grid-cols-3">
                        <div v-if="showProductAgeInp" class="relative z-0 w-full mb-8">
                                            <input
                                                type="number"
                                                name="productAge"
                                                placeholder=" "
                                                required
                                                v-model="product.age"
                                                autocomplete="off"
                                                @input = "handleChange"
                                                step="any"
                                                @keydown="ProductAgeValidation($event)"
                                                @blur = "changeSaved"
                                                class="proAge pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                                                />
                                                <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_ProductAge')}}
                                                </label>
                                       
                                         </div>
                                        <div class="relative z-0 mb-8">
                                        <input
                                    type="text"
                                    name="zip"
                                    autocomplete="off"
                                    placeholder=" "
                                    required
                                    v-model="product.zip"
                                    @input = "handleChange"
                                    minlength="6"
                                    @keydown="zipCodeValidation($event,6)"
                                    @blur = "changeSaved"
                                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                                    />
                                         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Pincode</label>
                                         <p class="text-xs text-red-600 pt-2" v-if="zipValidation">Pincode should contain 6 characters</p>
                                         <p class="text-xs text-green pt-2" v-if="validZipcode">Pincode is valid</p>
                                         <p class="text-xs text-red-600 pt-2" v-if="notValidZipcode">Pincode is invalid</p>
                                       
                                       </div>
        <div class="relative z-0 w-full mb-8 pl-[55px] mobile-addnums">
              <div class="absolute pb-2 font-normal  border-b border-gray-200 text-sm text-gray-600 left-0 -top-[12px] pr-3">
                <span class="block text-[10px] text-gray-400 pb-1">Code</span> +91
            </div>
        <div class="relative z-0 w-full mobile-addnum">
         <input type="text" name="mobile" autocomplete="off" placeholder=" " required @input = "handleChange"
             v-model="product.mobile"  maxlength="10"  @keydown="isNumber($event)" @blur = "changeSaved"          
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
                                        
         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_Mobile')}}</label>

 
                </div>
         <!-- <p class="text-xs text-red-600 pt-2" v-if="mobileReqValidation">Mobile Number Required</p> -->
  <p class="text-xs text-red-600 pt-2 ml-[-55px]" v-if="mobileValidation">{{$t('cl_invalidMobile')}}</p>
 
 <div class="flex items-center mobile-checked ml-[-55px]">
                 
<div  class="items-center flex mt-2">
                  <input
                    id=""
                     name="mobilePrivate"
                    value=""
                    v-model="product.mobilePrivate"
                    type="checkbox"
                     @blur = "changeSaved"
                     
                    class="h-[14px] w-[14px] border-gray-200 rounded text-firoza focus:ring-firoza"               
                  >
                  <label for="" class="ml-3 text-[11px] text-gray-500">  {{$t('cl_checkBoxmsg')}} </label>

                   
                </div>
                    </div>        


                </div>
                        
                    </div>
                                     <!-- <div class="grid grid-cols-2 gap-4">
                                         <div class="relative z-0 w-full mb-8">
                                            <input
                                                type="number"
                                                name="productAge"
                                                placeholder=" "
                                                required
                                                v-model="product.age"
                                                autocomplete="off"
                                                @input = "handleChange"
                                                step="any"
                                                @keydown="ProductAgeValidation($event)"
                                                @blur = "changeSaved"
                                                class="proAge pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                                                />
                                                <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_ProductAge')}}
                                                </label>
                                       
                                         </div>

                                         
                                            

                                             <div class="relative z-0 mb-8">
                                        <input
                                    type="text"
                                    name="zip"
                                    autocomplete="off"
                                    placeholder=" "
                                    required
                                    v-model="product.zip"
                                    @input = "handleChange"
                                    minlength="6"
                                    @keydown="zipCodeValidation($event,6)"
                                    @blur = "changeSaved"
                                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                                    />
                                         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Pincode</label>
                                         <p class="text-xs text-red-600 pt-2" v-if="zipValidation">Pincode should contain 6 characters</p>
                                         <p class="text-xs text-green pt-2" v-if="validZipcode">Pincode is valid</p>
                                         <p class="text-xs text-red-600 pt-2" v-if="notValidZipcode">Pincode is invalid</p>
                                        </div>

                                    

                                     </div> -->




                                     <!-- package dimension -->
                                            <div v-if="isMoney">


                                            <div class="grid grid-cols-2 sm:grid-cols-3 gap-0 sm:gap-4">
                                                     <div class="relative z-0 w-full mb-8">
                                        <input
                                            type="number"
                                            name="price"
                                            placeholder=" "
                                            required
                                            v-model="product.price"
                                            @input = "handleChange"
                                            class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                                            />
                                         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Selling Price (&#x20B9;)</label>
                                        </div>

                                        <div class="relative z-0 w-full mb-8">
                                            <div class="flex justify-center">
                                                <div class="form-check form-switch">
                                                    <input name="negotiable" v-model='product.switch' @change="handleChange" class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top  bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" :value="notFixed" :checked="notFixed" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                                    <label class="form-check-label inline-block text-gray-800" for="flexSwitchCheckDefault">Negotiable</label>
                                                </div>
                                            </div>
                                        </div>
                                            </div>

                                            <h2 class="text-base mt-[-5px] mb-2">Package Dimension (cm)</h2>
                                             <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-4">
                                                 
                                        <div class="relative z-0 w-full mb-8">
                                            
                                        <input
          type="text"
          name="package-height"
          placeholder=" "
           @input = "handleChange"
          v-model="product.package.height"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Height</label>
                                        </div>

                                        <div class="relative z-0 w-full mb-8">
                                            
                                        <input
          type="number"
          name="package-breadth"
          placeholder=" "
           @input = "handleChange"
          v-model="product.package.breadth"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Breadth</label>
                                        </div>


                                        <div class="relative z-0 w-full mb-8">
                                        <input
          type="text"
          name="package-weight"
          placeholder=" "
           @input = "handleChange"
          v-model.lazy="product.package.weight"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Weight</label>
                                        
                                    </div>
                                    <div class="relative z-0 w-full mb-8">
                                        <input
          type="text"
          name="package-length"
          placeholder=" "
           @input = "handleChange"
          v-model="product.package.length"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        
                                       
                                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Length</label>
                                        <span class="text-sm text-red hidden" id="error">Price is required</span>
                                    </div>
                                    
                                        
                                    </div>

                                 <!-- package dimension -->

                                  <!-- product dimension -->
                                            <h2 class="text-base mt-[-5px] mb-2">Product Dimension (cm)</h2>
                                             <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-4">
                                                 
                                        <div class="relative z-0 w-full mb-8">
                                            
                                        <input
          type="number"
          name="item-height"
          placeholder=" "
           @input = "handleChange"
          v-model="product.height"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Height</label>
                                         
                                        </div>


                                        <div class="relative z-0 w-full mb-8">
                                            
                                        <input
          type="number"
          name="item-breadth"
          placeholder=" "
           @input = "handleChange"
          v-model="product.breadth"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Breadth</label>
                                        </div>

                                        <div class="relative z-0 w-full mb-8">
                                        <input
          type="number"
          name="item-weight"
          placeholder=" "
           @input = "handleChange"
          v-model="product.weight"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Weight</label>
                                        
                                    </div>
                                    <div class="relative z-0 w-full mb-8">
                                        <input
          type="number"
          name="item-length"
          placeholder=" "
           @input = "handleChange"
          v-model="product.length"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        
                                        <!-- <input class="block w-full appearance-none focus:outline-none peer border-b border-gray-400 bg-transparent" type="text" name="username" placeholder=" " /> -->
                                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Length</label>
                                       
                                    </div>
                                    
                                        
                                    </div>
                                    </div>
                                 <!-- product dimension -->
                                     <!-- <div class="relative z-0 w-full mb-8">
                                        <select name="originCountry" v-model.lazy="product.country" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                                            <option selected value="India">India</option>
                                        </select>
                                        <span class="absolute right-0 top-[15px]">
                                            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                         </span>
                                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Country of origin</label>
                                    </div> -->

                                    <!-- <div class="mb-8">
                                        <h2 class="text-base mt-[-5px] mb-2">Condition</h2>
                                       
                                        
                                        <div class="flex flex-wrap">
                                                 <div @click="setItemCondition(item,i)" v-for="(item,i) in productCondition" :key="i"  class="flex items-center justify-center font-medium text-center w-[95px] h-[35px] px-2 
                                                 text-xsb rounded border text-gray-500 mr-2 mb-4 sm:mb-0  cursor-pointer" :class="{'bg-firoza !text-white': conditionSelected == i}">{{item}}</div>
                                                
                                             </div>
                                             </div> -->

                                             <!-- <div class="relative z-0 w-full mb-8">
                                         <input
          type="number"
          name="productAge"
          placeholder=" "
          required
          v-model="product.age"
          autocomplete="off"
          @input = "handleChange"
          step="any"
          @keydown="ProductAgeValidation($event)"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_ProductAge')}}
</label>
                                       
                                    </div> -->

                                           
                                             
                                             <!-- <h4 class="section-title text-gray-600  text-base md:text-sm  font-medium mb-2 mt-[40px]">Location</h4> -->



                                             <!-- <div class="relative mb-8">
                                             

                                             <div class="relative z-0 w-36 mb-8">
                                        <input
                                    type="text"
                                    name="zip"
                                    autocomplete="off"
                                    placeholder=" "
                                    required
                                    v-model="product.zip"
                                    @input = "handleChange"
                                    minlength="6"
                                    @keydown="zipCodeValidation($event,6)"
                                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                                    />
                                         <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Pincode</label>
                                         <p class="text-xs text-red-600 pt-2" v-if="zipValidation">Pincode should contain 6 characters</p>
                                         <p class="text-xs text-green pt-2" v-if="validZipcode">Pincode is valid</p>
                                         <p class="text-xs text-red-600 pt-2" v-if="notValidZipcode">Pincode is invalid</p>
                                        </div>

                                    </div> -->



                                             <!-- <div class="relative mb-8">
                                             <h2 class="text-base mt-[-5px] mb-2">{{$t('cl_Productlocation')}}</h2>
                                             <p class="text-xs" v-if="getAllAddress.length == 0">Please add address to proceed</p>
                                                
                            
                                                
                                                 
                                                 
                                   <div v-for="(address,i) in getAllAddress" :key="i" class="">
                                       <div class="flex w-full bg-white mt-[15px] md:mt-0 pl-0 p-4">
                                           <div class="flex-none">
                                               <input name="location" v-model="product.location" @change = "setLocation(i)" :value="'address'+i" type="radio"  class="focus:ring-firoza h-4 w-4 text-firoza border-gray-300">
                                           </div>
                                          <div v-if="address.annotation == 'home'" class="flex-none ml-3">
                                              <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5372 1.03441C9.22123 0.788659 8.77877 0.788659 8.4628 1.03441L0.587802 7.15941C0.374664 7.32519 0.25 7.58008 0.25 7.8501V17.4751C0.25 18.1713 0.526562 18.839 1.01884 19.3313C1.51113 19.8235 2.17881 20.1001 2.875 20.1001H6.375H11.625H15.125C15.8212 20.1001 16.4889 19.8235 16.9812 19.3313C17.4734 18.839 17.75 18.1713 17.75 17.4751V7.8501C17.75 7.58008 17.6253 7.32519 17.4122 7.15941L9.5372 1.03441ZM12.5 18.3501H15.125C15.3571 18.3501 15.5796 18.2579 15.7437 18.0938C15.9078 17.9297 16 17.7072 16 17.4751V8.27805L9 2.8336L2 8.27805V17.4751C2 17.7072 2.09219 17.9297 2.25628 18.0938C2.42038 18.2579 2.64294 18.3501 2.875 18.3501H5.5V10.4751C5.5 9.99185 5.89175 9.6001 6.375 9.6001H11.625C12.1082 9.6001 12.5 9.99185 12.5 10.4751V18.3501ZM7.25 18.3501V11.3501H10.75V18.3501H7.25Z" fill="#8CAEC5"/>
</svg>
                                          </div>
                                          <div v-if="address.annotation == 'office'" class="flex-none ml-3">
                                              <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 4.9751V0.975098H0.5V18.9751H20.5V4.9751H10.5ZM4.5 16.9751H2.5V14.9751H4.5V16.9751ZM4.5 12.9751H2.5V10.9751H4.5V12.9751ZM4.5 8.9751H2.5V6.9751H4.5V8.9751ZM4.5 4.9751H2.5V2.9751H4.5V4.9751ZM8.5 16.9751H6.5V14.9751H8.5V16.9751ZM8.5 12.9751H6.5V10.9751H8.5V12.9751ZM8.5 8.9751H6.5V6.9751H8.5V8.9751ZM8.5 4.9751H6.5V2.9751H8.5V4.9751ZM18.5 16.9751H10.5V14.9751H12.5V12.9751H10.5V10.9751H12.5V8.9751H10.5V6.9751H18.5V16.9751ZM16.5 8.9751H14.5V10.9751H16.5V8.9751ZM16.5 12.9751H14.5V14.9751H16.5V12.9751Z" fill="#8CAEC5"/>
</svg>
                                          </div>
                                          <div class="grow ml-3">
                                              <div>{{address.annotation}}</div>
                                              <div class="text-sm text-gray-500">{{address.addressLine}}</div>
                                          </div>
                                        </div>
                                        </div>
                            
                                             
                                             <div class="flex justify-end  mt-8">
                                             <button v-on:click="editOrAddAddressCL({ mode: 'add', addressDet: addressDet})"  type="button" class="border border-firoza flex justify-center items-center bg-transparent py-1 px-4 rounded text-firoza font-medium text-base">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                        <span>{{$t('cl_AddNewAddress')}}</span>
                </button>
                                             </div>
                                            </div> -->

                                             <div class="mb-8">
                                             <h2 class="text-base mt-[-5px] mb-2">{{$t('cl_AdditionalDocuments')}} <span class="text-xs font-normal text-firoza">({{$t('cl_Optional')}})</span> <span class="text-xs font-normal text-gray-600"> {{$t('cl_ForExInvoiceWarrantyCardoranything')}} </span></h2>
                                            <div class="pt-2 text-xs font-normal">{{$t('cl_Maximum2files')}}</div>
                                              <ul class="">
                                                <li
                                                    v-for="(item,index) in uploadedDocuments"
                                                    :key="item.id"
                                                    class="mr-4 block relative"
                                                >
                                                    
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"  class="absolute"   >
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 3.44772 5.44772 3 6 3H13V6C13 7.65685 14.3431 9 16 9H19V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4ZM17.5858 7L15 4.41421V6C15 6.55228 15.4477 7 16 7H17.5858ZM6 1C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V8C21 7.73478 20.8946 7.48043 20.7071 7.29289L14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H6ZM7 9C7 8.44772 7.44772 8 8 8H10C10.5523 8 11 8.44772 11 9C11 9.55229 10.5523 10 10 10H8C7.44772 10 7 9.55229 7 9ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16H8Z" fill="#8CAEC5"/>
                                </svg>

                                                    <span class="pl-8 text-xsm text-gray-500"> {{ item.orgName | truncate(15, '...') }}</span>
                                                    <svg
                    v-on:click="deleteDocument(index,item.id)"
                    width="18"
                    height="18"
                    viewBox="0 0 24 28"
                    fill="none"
                    class="absolute right-5 top-0 cursor-pointer"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                      fill="#FC2323"
                    />
                  </svg>
                                                </li>
                                            </ul>

                                             <div @dragover.prevent @drop="dropFilesDoc"  v-if="uploadedDocuments.length < 2" @click="uploadDocument()" class="cursor-pointer justify-center items-center mt-3 mb-3 px-2 py-5 text-center rounded border border-dashed h-[auto] 2xl:h-[160px] align-middle bg-[#FCFCFD] border-[#87898E]">
                      

<svg width="62" class="mx-auto" height="48" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.04 10.3013C26.2386 9.75798 26.35 9.16384 26.35 8.54431C26.35 5.85291 24.2672 3.66931 21.7 3.66931C20.7458 3.66931 19.8545 3.974 19.1183 4.49197C17.7766 2.05447 15.2723 0.419312 12.4 0.419312C8.11812 0.419312 4.65 4.05525 4.65 8.54431C4.65 8.68142 4.65484 8.81853 4.65969 8.95564C1.94719 9.95603 0 12.6677 0 15.8568C0 19.8939 3.12422 23.1693 6.975 23.1693H24.8C28.2245 23.1693 31 20.2595 31 16.6693C31 13.526 28.8687 10.9006 26.04 10.3013ZM19.0553 13.4193H15.8875V19.1068C15.8875 19.5537 15.5387 19.9193 15.1125 19.9193H12.7875C12.3612 19.9193 12.0125 19.5537 12.0125 19.1068V13.4193H8.84469C8.15203 13.4193 7.80813 12.5459 8.29734 12.033L13.4027 6.68064C13.703 6.3658 14.197 6.3658 14.4973 6.68064L19.6027 12.033C20.0919 12.5459 19.7431 13.4193 19.0553 13.4193Z" fill="#48CEF3"/>
</svg>
<div class="text-sm text-gray-500 pt-3">{{$t('cl_Drop_photospdf')}}</div>

                    </div>
                     <input type="file" @click="clearValue($event)"   @change="documentFilesChange($event)"
            accept="image/*,application/pdf" id="documentUpload" class="hidden input-file">
            </div>



            <div class="w-full">
            <div class="text-sm font-medium text-gray-700">Location</div>
            <div class="flex flex-col w-full mt-3 pl-2">
                <div class="space-y-4 flex flex-col">
                    <div class="flex items-start">
                        <input name="home" id="home" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 mt-0.5" value="home">
                           <label for="home" class="pl-2 block text-sm font-normal text-gray-700">
                                 <div class="flex items-start">
                                    <svg width="17" height="17" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6139 0.210648C10.2528 -0.0702159 9.74717 -0.0702159 9.38606 0.210648L0.386059 7.21065C0.142473 7.4001 0 7.69141 0 8V19C0 19.7957 0.31607 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H7H13H17C17.7957 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V8C20 7.69141 19.8575 7.4001 19.6139 7.21065L10.6139 0.210648ZM14 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V8.48908L10 2.26686L2 8.48908V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H6V11C6 10.4477 6.44772 10 7 10H13C13.5523 10 14 10.4477 14 11V20ZM8 20V12H12V20H8Z" fill="#8CAEC5"></path></svg>
                                    <!-- <svg width="16" height="22" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#8CAEC5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#8CAEC5"></path></svg> -->
                                    <!-- <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4V0H0V18H20V4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM18 16H10V14H12V12H10V10H12V8H10V6H18V16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z" fill="#8CAEC5"></path></svg> -->
                                     <div class="ml-3">
                                          <div class="text-sm text-gray-900">Home</div>
                                          <!-- <div class="text-sm text-gray-900">Work</div> -->
                                          <!-- <div class="text-sm text-gray-900">Other</div> -->
                                          <div class="text-gray-500 text-xs mt-1"> Mumbai Central Railway Station Building, Mumbai Central </div>
                                     </div>
                                </div>
                            </label>
                        </div>

                        <div class="flex items-start">
                        <input name="work" id="work" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 mt-0.5" value="work">
                           <label for="work" class="pl-2 block text-sm font-normal text-gray-700">
                                 <div class="flex items-start">
                                    <!-- <svg width="17" height="17" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6139 0.210648C10.2528 -0.0702159 9.74717 -0.0702159 9.38606 0.210648L0.386059 7.21065C0.142473 7.4001 0 7.69141 0 8V19C0 19.7957 0.31607 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H7H13H17C17.7957 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V8C20 7.69141 19.8575 7.4001 19.6139 7.21065L10.6139 0.210648ZM14 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V8.48908L10 2.26686L2 8.48908V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H6V11C6 10.4477 6.44772 10 7 10H13C13.5523 10 14 10.4477 14 11V20ZM8 20V12H12V20H8Z" fill="#8CAEC5"></path></svg> -->
                                    <svg width="16" height="22" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#8CAEC5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#8CAEC5"></path></svg>
                                    <!-- <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4V0H0V18H20V4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM18 16H10V14H12V12H10V10H12V8H10V6H18V16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z" fill="#8CAEC5"></path></svg> -->
                                     <div class="ml-3">
                                          <!-- <div class="text-sm text-gray-900">Home</div> -->
                                          <div class="text-sm text-gray-900">Work</div>
                                          <!-- <div class="text-sm text-gray-900">Other</div> -->
                                          <div class="text-gray-500 text-xs mt-1"> Mumbai Central Railway Station Building, Mumbai Central </div>
                                     </div>
                                </div>
                            </label>
                        </div>

                        <div class="flex items-start">
                        <input name="Other" id="Other" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 mt-0.5" value="Other">
                           <label for="Other" class="pl-2 block text-sm font-normal text-gray-700">
                                 <div class="flex items-start">
                                    <!-- <svg width="17" height="17" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6139 0.210648C10.2528 -0.0702159 9.74717 -0.0702159 9.38606 0.210648L0.386059 7.21065C0.142473 7.4001 0 7.69141 0 8V19C0 19.7957 0.31607 20.5587 0.87868 21.1213C1.44129 21.6839 2.20435 22 3 22H7H13H17C17.7957 22 18.5587 21.6839 19.1213 21.1213C19.6839 20.5587 20 19.7957 20 19V8C20 7.69141 19.8575 7.4001 19.6139 7.21065L10.6139 0.210648ZM14 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V8.48908L10 2.26686L2 8.48908V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H6V11C6 10.4477 6.44772 10 7 10H13C13.5523 10 14 10.4477 14 11V20ZM8 20V12H12V20H8Z" fill="#8CAEC5"></path></svg> -->
                                    <!-- <svg width="16" height="22" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#8CAEC5"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#8CAEC5"></path></svg> -->
                                    <svg width="16" height="16" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 4V0H0V18H20V4H10ZM4 16H2V14H4V16ZM4 12H2V10H4V12ZM4 8H2V6H4V8ZM4 4H2V2H4V4ZM8 16H6V14H8V16ZM8 12H6V10H8V12ZM8 8H6V6H8V8ZM8 4H6V2H8V4ZM18 16H10V14H12V12H10V10H12V8H10V6H18V16ZM16 8H14V10H16V8ZM16 12H14V14H16V12Z" fill="#8CAEC5"></path></svg>
                                     <div class="ml-3">
                                          <!-- <div class="text-sm text-gray-900">Home</div> -->
                                          <!-- <div class="text-sm text-gray-900">Work</div> -->
                                          <div class="text-sm text-gray-900">Other</div>
                                          <div class="text-gray-500 text-xs mt-1"> Mumbai Central Railway Station Building, Mumbai Central </div>
                                     </div>
                                </div>
                            </label>
                        </div>
                        
                </div>
                <button  type="submit" class="mt-6 ml-12 w-[120px] h-[30px] border border-firoza flex justify-center items-center bg-transparent py-1 px-1 rounded text-firoza font-normal text-sm">
                    <svg  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5"><path  fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg> <span > Add address </span></button>
                </div>
            </div>

            <div class="w-full flex flex-col mt-6">
                <div class="text-sm font-medium text-gray-700 mb-2">Shipping</div>
                <div class="w-full">
                    <div class="text-sm  text-gray-700 border-b border-gray-100 py-1">Dimension for  Packaging item 1</div>
                    <div class="w-full flex items-center mt-2 mb-2">
                    <div class="text-sm font-medium text-firoza">Dimension (In)</div>
                    <div  class="relative flex flex-col items-center group">
                                  <div  class="pl-2">
                                   <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8.5C2.25 5.04822 5.04822 2.25 8.5 2.25C11.9518 2.25 14.75 5.04822 14.75 8.5C14.75 11.9518 11.9518 14.75 8.5 14.75C5.04822 14.75 2.25 11.9518 2.25 8.5ZM8.5 0.25C3.94365 0.25 0.25 3.94365 0.25 8.5C0.25 13.0563 3.94365 16.75 8.5 16.75C13.0563 16.75 16.75 13.0563 16.75 8.5C16.75 3.94365 13.0563 0.25 8.5 0.25ZM7.97437 6.14375C8.11333 6.28472 8.28854 6.35521 8.5 6.35521C8.71146 6.35521 8.88364 6.28472 9.01656 6.14375C9.15552 6.00278 9.225 5.82488 9.225 5.61007C9.225 5.39525 9.15552 5.22072 9.01656 5.08646C8.88364 4.94548 8.71146 4.875 8.5 4.875C8.28854 4.875 8.11333 4.94548 7.97437 5.08646C7.84146 5.22072 7.775 5.39525 7.775 5.61007C7.775 5.82488 7.84146 6.00278 7.97437 6.14375ZM7.775 11.3999C7.775 11.8004 8.09961 12.125 8.50005 12.125C8.90049 12.125 9.2251 11.8004 9.2251 11.3999V7.77505C9.2251 7.37462 8.90049 7.05 8.50005 7.05C8.09961 7.05 7.775 7.37462 7.775 7.77505V11.3999Z" fill="#48CEF3"/>
                                   </svg>
                                   </div> 
                                   <div  class="absolute top-[-15px] left-[36px] flex flex-col items-center hidden mb-6 group-hover:flex">
                                        <div  class="relative w-[250px] rounded text-left z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">
                                             This means the more score you have, your products are likely to sell faster. 
                                       </div> 
                                       <div  class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute left-[-6px] top-[26px]"></div>
                                   </div>
                              </div>
                    </div>               
                    <div  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-x-0 gap-y-0 md:gap-x-14 md:gap-y-2 lg:gap-x-14 lg:gap-y-2 xl:gap-x-14 xl:gap-y-14 2xl:gap-x-14 2xl:gap-y-14">
                        <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="price" placeholder=" " step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Length</label>
                        </div>
                         <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="unitOfferValuation" autocomplete="off" placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Width</label>
                        </div>
                        <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="unitOfferValuation" autocomplete="off" placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Height</label>
                        </div>
                         <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="quantity" autocomplete="off"  placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Weight (KG)</label>
                             <div class="absolute right-0 top-[12px]">
                              <div  class="relative flex flex-col items-end group">
                                  <div  class="pl-2">
                                   <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8.5C2.25 5.04822 5.04822 2.25 8.5 2.25C11.9518 2.25 14.75 5.04822 14.75 8.5C14.75 11.9518 11.9518 14.75 8.5 14.75C5.04822 14.75 2.25 11.9518 2.25 8.5ZM8.5 0.25C3.94365 0.25 0.25 3.94365 0.25 8.5C0.25 13.0563 3.94365 16.75 8.5 16.75C13.0563 16.75 16.75 13.0563 16.75 8.5C16.75 3.94365 13.0563 0.25 8.5 0.25ZM7.97437 6.14375C8.11333 6.28472 8.28854 6.35521 8.5 6.35521C8.71146 6.35521 8.88364 6.28472 9.01656 6.14375C9.15552 6.00278 9.225 5.82488 9.225 5.61007C9.225 5.39525 9.15552 5.22072 9.01656 5.08646C8.88364 4.94548 8.71146 4.875 8.5 4.875C8.28854 4.875 8.11333 4.94548 7.97437 5.08646C7.84146 5.22072 7.775 5.39525 7.775 5.61007C7.775 5.82488 7.84146 6.00278 7.97437 6.14375ZM7.775 11.3999C7.775 11.8004 8.09961 12.125 8.50005 12.125C8.90049 12.125 9.2251 11.8004 9.2251 11.3999V7.77505C9.2251 7.37462 8.90049 7.05 8.50005 7.05C8.09961 7.05 7.775 7.37462 7.775 7.77505V11.3999Z" fill="#48CEF3"/>
                                   </svg>
                                   </div> 
                                   <div  class="absolute top-[-15px] right-[30px] flex flex-col items-center hidden group-hover:flex">
                                        <div  class="relative w-[250px] rounded text-left z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">
                                             This means the more score you have, your products are likely to sell faster. 
                                       </div> 
                                       <div  class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute right-[-6px] top-[26px]"></div>
                                   </div>
                              </div>
                              </div>
                        </div>
                    </div>
                </div>
                
                <div class="w-full">
                    <div class="text-sm  text-gray-700 border-b border-gray-100 py-1">Dimension for  Packaging item 2</div>
                    <div class="w-full flex items-center mt-2 mb-2">
                    <div class="text-sm font-medium text-firoza">Dimension (In)</div>
                    <div  class="relative flex flex-col items-center group">
                                  <div  class="pl-2">
                                   <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8.5C2.25 5.04822 5.04822 2.25 8.5 2.25C11.9518 2.25 14.75 5.04822 14.75 8.5C14.75 11.9518 11.9518 14.75 8.5 14.75C5.04822 14.75 2.25 11.9518 2.25 8.5ZM8.5 0.25C3.94365 0.25 0.25 3.94365 0.25 8.5C0.25 13.0563 3.94365 16.75 8.5 16.75C13.0563 16.75 16.75 13.0563 16.75 8.5C16.75 3.94365 13.0563 0.25 8.5 0.25ZM7.97437 6.14375C8.11333 6.28472 8.28854 6.35521 8.5 6.35521C8.71146 6.35521 8.88364 6.28472 9.01656 6.14375C9.15552 6.00278 9.225 5.82488 9.225 5.61007C9.225 5.39525 9.15552 5.22072 9.01656 5.08646C8.88364 4.94548 8.71146 4.875 8.5 4.875C8.28854 4.875 8.11333 4.94548 7.97437 5.08646C7.84146 5.22072 7.775 5.39525 7.775 5.61007C7.775 5.82488 7.84146 6.00278 7.97437 6.14375ZM7.775 11.3999C7.775 11.8004 8.09961 12.125 8.50005 12.125C8.90049 12.125 9.2251 11.8004 9.2251 11.3999V7.77505C9.2251 7.37462 8.90049 7.05 8.50005 7.05C8.09961 7.05 7.775 7.37462 7.775 7.77505V11.3999Z" fill="#48CEF3"/>
                                   </svg>
                                   </div> 
                                   <div  class="absolute top-[-15px] left-[36px] flex flex-col items-center hidden mb-6 group-hover:flex">
                                        <div  class="relative w-[250px] rounded text-left z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">
                                             This means the more score you have, your products are likely to sell faster. 
                                       </div> 
                                       <div  class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute left-[-6px] top-[26px]"></div>
                                   </div>
                              </div>
                    </div>               
                    <div  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-x-0 gap-y-0 md:gap-x-14 md:gap-y-2 lg:gap-x-14 lg:gap-y-2 xl:gap-x-14 xl:gap-y-14 2xl:gap-x-14 2xl:gap-y-14">
                        <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="price" placeholder=" " step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Length</label>
                        </div>
                         <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="unitOfferValuation" autocomplete="off" placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Width</label>
                        </div>
                        <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="unitOfferValuation" autocomplete="off" placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Height</label>
                        </div>
                         <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="quantity" autocomplete="off"  placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Weight (KG)</label>
                             <div class="absolute right-0 top-[12px]">
                              <div  class="relative flex flex-col items-end group">
                                  <div  class="pl-2">
                                   <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8.5C2.25 5.04822 5.04822 2.25 8.5 2.25C11.9518 2.25 14.75 5.04822 14.75 8.5C14.75 11.9518 11.9518 14.75 8.5 14.75C5.04822 14.75 2.25 11.9518 2.25 8.5ZM8.5 0.25C3.94365 0.25 0.25 3.94365 0.25 8.5C0.25 13.0563 3.94365 16.75 8.5 16.75C13.0563 16.75 16.75 13.0563 16.75 8.5C16.75 3.94365 13.0563 0.25 8.5 0.25ZM7.97437 6.14375C8.11333 6.28472 8.28854 6.35521 8.5 6.35521C8.71146 6.35521 8.88364 6.28472 9.01656 6.14375C9.15552 6.00278 9.225 5.82488 9.225 5.61007C9.225 5.39525 9.15552 5.22072 9.01656 5.08646C8.88364 4.94548 8.71146 4.875 8.5 4.875C8.28854 4.875 8.11333 4.94548 7.97437 5.08646C7.84146 5.22072 7.775 5.39525 7.775 5.61007C7.775 5.82488 7.84146 6.00278 7.97437 6.14375ZM7.775 11.3999C7.775 11.8004 8.09961 12.125 8.50005 12.125C8.90049 12.125 9.2251 11.8004 9.2251 11.3999V7.77505C9.2251 7.37462 8.90049 7.05 8.50005 7.05C8.09961 7.05 7.775 7.37462 7.775 7.77505V11.3999Z" fill="#48CEF3"/>
                                   </svg>
                                   </div> 
                                   <div  class="absolute top-[-15px] right-[30px] flex flex-col items-center hidden group-hover:flex">
                                        <div  class="relative w-[250px] rounded text-left z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">
                                             This means the more score you have, your products are likely to sell faster. 
                                       </div> 
                                       <div  class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute right-[-6px] top-[26px]"></div>
                                   </div>
                              </div>
                              </div>
                        </div>
                    </div>
                </div>

                <div class="w-full">
                    <div class="text-sm  text-gray-700 border-b border-gray-100 py-1">Dimension for  Packaging item 3</div>
                    <div class="w-full flex items-center mt-2 mb-2">
                    <div class="text-sm font-medium text-firoza">Dimension (In)</div>
                    <div  class="relative flex flex-col items-center group">
                                  <div  class="pl-2">
                                   <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8.5C2.25 5.04822 5.04822 2.25 8.5 2.25C11.9518 2.25 14.75 5.04822 14.75 8.5C14.75 11.9518 11.9518 14.75 8.5 14.75C5.04822 14.75 2.25 11.9518 2.25 8.5ZM8.5 0.25C3.94365 0.25 0.25 3.94365 0.25 8.5C0.25 13.0563 3.94365 16.75 8.5 16.75C13.0563 16.75 16.75 13.0563 16.75 8.5C16.75 3.94365 13.0563 0.25 8.5 0.25ZM7.97437 6.14375C8.11333 6.28472 8.28854 6.35521 8.5 6.35521C8.71146 6.35521 8.88364 6.28472 9.01656 6.14375C9.15552 6.00278 9.225 5.82488 9.225 5.61007C9.225 5.39525 9.15552 5.22072 9.01656 5.08646C8.88364 4.94548 8.71146 4.875 8.5 4.875C8.28854 4.875 8.11333 4.94548 7.97437 5.08646C7.84146 5.22072 7.775 5.39525 7.775 5.61007C7.775 5.82488 7.84146 6.00278 7.97437 6.14375ZM7.775 11.3999C7.775 11.8004 8.09961 12.125 8.50005 12.125C8.90049 12.125 9.2251 11.8004 9.2251 11.3999V7.77505C9.2251 7.37462 8.90049 7.05 8.50005 7.05C8.09961 7.05 7.775 7.37462 7.775 7.77505V11.3999Z" fill="#48CEF3"/>
                                   </svg>
                                   </div> 
                                   <div  class="absolute top-[-15px] left-[36px] flex flex-col items-center hidden mb-6 group-hover:flex">
                                        <div  class="relative w-[250px] rounded text-left z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">
                                             This means the more score you have, your products are likely to sell faster. 
                                       </div> 
                                       <div  class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute left-[-6px] top-[26px]"></div>
                                   </div>
                              </div>
                    </div>               
                    <div  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-x-0 gap-y-0 md:gap-x-14 md:gap-y-2 lg:gap-x-14 lg:gap-y-2 xl:gap-x-14 xl:gap-y-14 2xl:gap-x-14 2xl:gap-y-14">
                        <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="price" placeholder=" " step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Length</label>
                        </div>
                         <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="unitOfferValuation" autocomplete="off" placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Width</label>
                        </div>
                        <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="unitOfferValuation" autocomplete="off" placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Height</label>
                        </div>
                         <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="quantity" autocomplete="off"  placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Weight (KG)</label>
                             <div class="absolute right-0 top-[12px]">
                              <div  class="relative flex flex-col items-end group">
                                  <div  class="pl-2">
                                   <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8.5C2.25 5.04822 5.04822 2.25 8.5 2.25C11.9518 2.25 14.75 5.04822 14.75 8.5C14.75 11.9518 11.9518 14.75 8.5 14.75C5.04822 14.75 2.25 11.9518 2.25 8.5ZM8.5 0.25C3.94365 0.25 0.25 3.94365 0.25 8.5C0.25 13.0563 3.94365 16.75 8.5 16.75C13.0563 16.75 16.75 13.0563 16.75 8.5C16.75 3.94365 13.0563 0.25 8.5 0.25ZM7.97437 6.14375C8.11333 6.28472 8.28854 6.35521 8.5 6.35521C8.71146 6.35521 8.88364 6.28472 9.01656 6.14375C9.15552 6.00278 9.225 5.82488 9.225 5.61007C9.225 5.39525 9.15552 5.22072 9.01656 5.08646C8.88364 4.94548 8.71146 4.875 8.5 4.875C8.28854 4.875 8.11333 4.94548 7.97437 5.08646C7.84146 5.22072 7.775 5.39525 7.775 5.61007C7.775 5.82488 7.84146 6.00278 7.97437 6.14375ZM7.775 11.3999C7.775 11.8004 8.09961 12.125 8.50005 12.125C8.90049 12.125 9.2251 11.8004 9.2251 11.3999V7.77505C9.2251 7.37462 8.90049 7.05 8.50005 7.05C8.09961 7.05 7.775 7.37462 7.775 7.77505V11.3999Z" fill="#48CEF3"/>
                                   </svg>
                                   </div> 
                                   <div  class="absolute top-[-15px] right-[30px] flex flex-col items-center hidden group-hover:flex">
                                        <div  class="relative w-[250px] rounded text-left z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">
                                             This means the more score you have, your products are likely to sell faster. 
                                       </div> 
                                       <div  class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute right-[-6px] top-[26px]"></div>
                                   </div>
                              </div>
                              </div>
                        </div>
                    </div>
                </div>

                <div class="w-full">
                    <div class="text-sm  text-gray-700 border-b border-gray-100 py-1">Dimension for  Packaging item 4</div>
                    <div class="w-full flex items-center mt-2 mb-2">
                    <div class="text-sm font-medium text-firoza">Dimension (In)</div>
                    <div  class="relative flex flex-col items-center group">
                                  <div  class="pl-2">
                                   <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8.5C2.25 5.04822 5.04822 2.25 8.5 2.25C11.9518 2.25 14.75 5.04822 14.75 8.5C14.75 11.9518 11.9518 14.75 8.5 14.75C5.04822 14.75 2.25 11.9518 2.25 8.5ZM8.5 0.25C3.94365 0.25 0.25 3.94365 0.25 8.5C0.25 13.0563 3.94365 16.75 8.5 16.75C13.0563 16.75 16.75 13.0563 16.75 8.5C16.75 3.94365 13.0563 0.25 8.5 0.25ZM7.97437 6.14375C8.11333 6.28472 8.28854 6.35521 8.5 6.35521C8.71146 6.35521 8.88364 6.28472 9.01656 6.14375C9.15552 6.00278 9.225 5.82488 9.225 5.61007C9.225 5.39525 9.15552 5.22072 9.01656 5.08646C8.88364 4.94548 8.71146 4.875 8.5 4.875C8.28854 4.875 8.11333 4.94548 7.97437 5.08646C7.84146 5.22072 7.775 5.39525 7.775 5.61007C7.775 5.82488 7.84146 6.00278 7.97437 6.14375ZM7.775 11.3999C7.775 11.8004 8.09961 12.125 8.50005 12.125C8.90049 12.125 9.2251 11.8004 9.2251 11.3999V7.77505C9.2251 7.37462 8.90049 7.05 8.50005 7.05C8.09961 7.05 7.775 7.37462 7.775 7.77505V11.3999Z" fill="#48CEF3"/>
                                   </svg>
                                   </div> 
                                   <div  class="absolute top-[-15px] left-[36px] flex flex-col items-center hidden mb-6 group-hover:flex">
                                        <div  class="relative w-[250px] rounded text-left z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">
                                             This means the more score you have, your products are likely to sell faster. 
                                       </div> 
                                       <div  class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute left-[-6px] top-[26px]"></div>
                                   </div>
                              </div>
                    </div>               
                    <div  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-x-0 gap-y-0 md:gap-x-14 md:gap-y-2 lg:gap-x-14 lg:gap-y-2 xl:gap-x-14 xl:gap-y-14 2xl:gap-x-14 2xl:gap-y-14">
                        <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="price" placeholder=" " step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Length</label>
                        </div>
                         <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="unitOfferValuation" autocomplete="off" placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Width</label>
                        </div>
                        <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="unitOfferValuation" autocomplete="off" placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Height</label>
                        </div>
                         <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="quantity" autocomplete="off"  placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Weight (KG)</label>
                             <div class="absolute right-0 top-[12px]">
                              <div  class="relative flex flex-col items-end group">
                                  <div  class="pl-2">
                                   <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8.5C2.25 5.04822 5.04822 2.25 8.5 2.25C11.9518 2.25 14.75 5.04822 14.75 8.5C14.75 11.9518 11.9518 14.75 8.5 14.75C5.04822 14.75 2.25 11.9518 2.25 8.5ZM8.5 0.25C3.94365 0.25 0.25 3.94365 0.25 8.5C0.25 13.0563 3.94365 16.75 8.5 16.75C13.0563 16.75 16.75 13.0563 16.75 8.5C16.75 3.94365 13.0563 0.25 8.5 0.25ZM7.97437 6.14375C8.11333 6.28472 8.28854 6.35521 8.5 6.35521C8.71146 6.35521 8.88364 6.28472 9.01656 6.14375C9.15552 6.00278 9.225 5.82488 9.225 5.61007C9.225 5.39525 9.15552 5.22072 9.01656 5.08646C8.88364 4.94548 8.71146 4.875 8.5 4.875C8.28854 4.875 8.11333 4.94548 7.97437 5.08646C7.84146 5.22072 7.775 5.39525 7.775 5.61007C7.775 5.82488 7.84146 6.00278 7.97437 6.14375ZM7.775 11.3999C7.775 11.8004 8.09961 12.125 8.50005 12.125C8.90049 12.125 9.2251 11.8004 9.2251 11.3999V7.77505C9.2251 7.37462 8.90049 7.05 8.50005 7.05C8.09961 7.05 7.775 7.37462 7.775 7.77505V11.3999Z" fill="#48CEF3"/>
                                   </svg>
                                   </div> 
                                   <div  class="absolute top-[-15px] right-[30px] flex flex-col items-center hidden group-hover:flex">
                                        <div  class="relative w-[250px] rounded text-left z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">
                                             This means the more score you have, your products are likely to sell faster. 
                                       </div> 
                                       <div  class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute right-[-6px] top-[26px]"></div>
                                   </div>
                              </div>
                              </div>
                        </div>
                    </div>
                </div>

                <div class="w-full">
                    <div class="text-sm  text-gray-700 border-b border-gray-100 py-1">Dimension for  Packaging item 5</div>
                    <div class="w-full flex items-center mt-2 mb-2">
                    <div class="text-sm font-medium text-firoza">Dimension (In)</div>
                    <div  class="relative flex flex-col items-center group">
                                  <div  class="pl-2">
                                   <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8.5C2.25 5.04822 5.04822 2.25 8.5 2.25C11.9518 2.25 14.75 5.04822 14.75 8.5C14.75 11.9518 11.9518 14.75 8.5 14.75C5.04822 14.75 2.25 11.9518 2.25 8.5ZM8.5 0.25C3.94365 0.25 0.25 3.94365 0.25 8.5C0.25 13.0563 3.94365 16.75 8.5 16.75C13.0563 16.75 16.75 13.0563 16.75 8.5C16.75 3.94365 13.0563 0.25 8.5 0.25ZM7.97437 6.14375C8.11333 6.28472 8.28854 6.35521 8.5 6.35521C8.71146 6.35521 8.88364 6.28472 9.01656 6.14375C9.15552 6.00278 9.225 5.82488 9.225 5.61007C9.225 5.39525 9.15552 5.22072 9.01656 5.08646C8.88364 4.94548 8.71146 4.875 8.5 4.875C8.28854 4.875 8.11333 4.94548 7.97437 5.08646C7.84146 5.22072 7.775 5.39525 7.775 5.61007C7.775 5.82488 7.84146 6.00278 7.97437 6.14375ZM7.775 11.3999C7.775 11.8004 8.09961 12.125 8.50005 12.125C8.90049 12.125 9.2251 11.8004 9.2251 11.3999V7.77505C9.2251 7.37462 8.90049 7.05 8.50005 7.05C8.09961 7.05 7.775 7.37462 7.775 7.77505V11.3999Z" fill="#48CEF3"/>
                                   </svg>
                                   </div> 
                                   <div  class="absolute top-[-15px] left-[36px] flex flex-col items-center hidden mb-6 group-hover:flex">
                                        <div  class="relative w-[250px] rounded text-left z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">
                                             This means the more score you have, your products are likely to sell faster. 
                                       </div> 
                                       <div  class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute left-[-6px] top-[26px]"></div>
                                   </div>
                              </div>
                    </div>               
                    <div  class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-x-0 gap-y-0 md:gap-x-14 md:gap-y-2 lg:gap-x-14 lg:gap-y-2 xl:gap-x-14 xl:gap-y-14 2xl:gap-x-14 2xl:gap-y-14">
                        <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="price" placeholder=" " step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Length</label>
                        </div>
                         <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="unitOfferValuation" autocomplete="off" placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Width</label>
                        </div>
                        <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="unitOfferValuation" autocomplete="off" placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Height</label>
                        </div>
                         <div  class="relative z-0 w-full mb-6">
                            <input  type="number" name="quantity" autocomplete="off"  placeholder=" " required="required" step="any" class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                             <label  for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Weight (KG)</label>
                             <div class="absolute right-0 top-[12px]">
                              <div  class="relative flex flex-col items-end group">
                                  <div  class="pl-2">
                                   <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 8.5C2.25 5.04822 5.04822 2.25 8.5 2.25C11.9518 2.25 14.75 5.04822 14.75 8.5C14.75 11.9518 11.9518 14.75 8.5 14.75C5.04822 14.75 2.25 11.9518 2.25 8.5ZM8.5 0.25C3.94365 0.25 0.25 3.94365 0.25 8.5C0.25 13.0563 3.94365 16.75 8.5 16.75C13.0563 16.75 16.75 13.0563 16.75 8.5C16.75 3.94365 13.0563 0.25 8.5 0.25ZM7.97437 6.14375C8.11333 6.28472 8.28854 6.35521 8.5 6.35521C8.71146 6.35521 8.88364 6.28472 9.01656 6.14375C9.15552 6.00278 9.225 5.82488 9.225 5.61007C9.225 5.39525 9.15552 5.22072 9.01656 5.08646C8.88364 4.94548 8.71146 4.875 8.5 4.875C8.28854 4.875 8.11333 4.94548 7.97437 5.08646C7.84146 5.22072 7.775 5.39525 7.775 5.61007C7.775 5.82488 7.84146 6.00278 7.97437 6.14375ZM7.775 11.3999C7.775 11.8004 8.09961 12.125 8.50005 12.125C8.90049 12.125 9.2251 11.8004 9.2251 11.3999V7.77505C9.2251 7.37462 8.90049 7.05 8.50005 7.05C8.09961 7.05 7.775 7.37462 7.775 7.77505V11.3999Z" fill="#48CEF3"/>
                                   </svg>
                                   </div> 
                                   <div  class="absolute top-[-15px] right-[30px] flex flex-col items-center hidden group-hover:flex">
                                        <div  class="relative w-[250px] rounded text-left z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">
                                             This means the more score you have, your products are likely to sell faster. 
                                       </div> 
                                       <div  class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute right-[-6px] top-[26px]"></div>
                                   </div>
                              </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
                <!--shipping section start here-->
               <div class="shipping-section ">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item border rounded-none bg-[#fcfcfd] border-gray-200">
                            <h2 class="accordion-header mb-0 " id="flush-headingOne">
                            <button class="accordion-button relative flex items-center w-full  
                            text-base text-gray-700 text-left bg-[#fcfcfd] border-0 rounded-none transition
                            focus:outline-none  px-6 py-3" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                <span> {{$t('moreOptions')}} <span class="text-xs text-firoza">{{$t('optional')}}</span> </span>
                            </button>
                            </h2>
                             <div id="flush-collapseOne" class="accordion-collapse border-0 collapse px-6"
                            aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample1">
                            <div class="accordion-body py-4  text-xsb text-gray-500">
                                <div class="flex flex-col gap-x-10 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
                        <div class=" flex basis-full sm:basis-6/12 md:basis-2/6 lg:basis-2/6 xl:basis-2/6 2xl:basis-2/6" >
                            <div class="relative z-0 w-full mb-4">
              <select 
              v-model="product.freeShippingType"
              @blur="changeSaved"
              @change="handleChange"
                name="freeShippingType"
                placeholder=" "
                class="
                  text-gray-600
                  block
                  w-full
                  
                  mt-0
                  bg-transparent
                  border-0 border-b
                  appearance-none
                  focus:outline-none focus:ring-0 focus:border-firoza
                  border-gray-200
                  text-sm p-2 
                "
              >  
              <option class="p-1" value="">{{$t('selectShippingOption')}}</option>


              <option class="p-1" v-for="(item,i) in freeShippingTypeList" :key="'freeShippingType_'+i" :value="item.value" >{{item.freeShippingTypeText}}</option>

              
              </select>
              
              
              <span class="absolute right-0 top-[15px] -z-50">
                <svg
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 1.25L7.5 8L14.25 1.25"
                    stroke="#9EA5AA"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <!-- {{product.freeShippingType}} -->
            </div>
                        </div>
                        <div class="flex basis-full sm:basis-6/12 md:basis-4/6 lg:basis-4/6 xl:basis-4/6 2xl:basis-4/6">
                            <div v-if="showFreeShippingLocationInp" class="relative z-0 w-full mb-4">
                                <input
                                    type="text"
                                    @blur="changeSaved"
                                    @keyup="handleChange"
                                    v-model="product.freeShippingLocation"
                                    name="freeShippingLocation"
                                    id="freeShippingLocation"
                                    placeholder=" "
                                    autocomplete="off"
                                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                                    />
                                <label for="freeShippingLocation" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('enter_Location')}}</label>
                                <span class="text-sm text-red hidden" id="error">Location is required</span>
                                
                                <div class="text-xs text-gray-400 pt-3">Enter location with comma(,) separator</div> 
                                <!-- {{product.freeShippingLocation}} -->
                            </div>
                        </div>
                    </div>
                    <div class="form-check flex items-center">
                        <input v-model="product.cod" @blur="changeSaved"
              @change="handleChange" class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="cod">
                        <label class="form-check-label inline-block text-gray-500 text-sm pt-1" for="cod">
                            {{$t('codShipping')}}
                        </label>
                        </div>
                        <!-- {{product.cod}} -->
                        </div>

                        <!-- Start For Return Policy v-model="product.freeShippingType" -->

                        <div class="accordion-body py-4  text-xsb text-gray-500">
                                <div class="flex flex-col gap-x-10 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
                        <div class="basis-full sm:basis-6/12 md:basis-2/6 lg:basis-2/6 xl:basis-2/6 2xl:basis-2/6" >
                            <div class="relative z-0 w-full mb-4">
              <select 
              
              @blur="changeSaved"
              @change="handleChange"
                name="returnType"
                v-model="product.returnType"
                placeholder=" "
                class="
                  text-gray-600
                  block
                  w-full
                  
                  mt-0
                  bg-transparent
                  border-0 border-b
                  appearance-none
                  focus:outline-none focus:ring-0 focus:border-firoza
                  border-gray-200
                  text-sm p-2 
                "
              >  
              <option class="p-1" value="">{{$t('selectReturnOption')}}</option>


              <option class="p-1" v-for="(item,i) in returnTypeList" :key="i" :value="item.value" >{{item.returnTypeText}}</option>

              
              </select>
              
              
              <span class="absolute right-0 top-[15px] -z-50">
                <svg
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 1.25L7.5 8L14.25 1.25"
                    stroke="#9EA5AA"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              
            </div>
                        </div>


                        <div  v-if="showReturnIp" class=" basis-full sm:basis-6/12 md:basis-2/6 lg:basis-2/6 xl:basis-2/6 2xl:basis-2/6" >
                            <div class="relative z-0 w-full mb-4">
              <select 
             
              @blur="changeSaved"
              @change="handleChange"
              v-model="product.withinDays"
                name="withinDays"
                placeholder=" "
                class="
                  text-gray-600
                  block
                  w-full
                  
                  mt-0
                  bg-transparent
                  border-0 border-b
                  appearance-none
                  focus:outline-none focus:ring-0 focus:border-firoza
                  border-gray-200
                  text-sm p-2 
                "
              >  
              <option class="p-1" value="">{{$t('selectDaysOption')}}</option>


              <option class="p-1" v-for="(item,i) in daysList" :key="i" :value="item.value" >{{item.noOfDays}}</option>

              
              </select>
              
              
              <span class="absolute right-0 top-[15px] -z-50">
                <svg
                  width="15"
                  height="9"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 1.25L7.5 8L14.25 1.25"
                    stroke="#9EA5AA"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              
            </div>
                        </div>


                    </div>
                   
                        
                        </div>

                     <!-- End For Return Policy -->
                        </div> 
                        
                        </div>
                        </div>
                </div> 

                <!-- end Of Shipping -->

          
               




                            <!-- <div class="w-[65%]">
                                <div class="relative z-0 w-full mb-2">
                                        <input
          type="tel"
          name=""
          placeholder=" "
          
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        
                                       
                                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Mobile Number</label>
                                       
                                    </div>
                                <div class="flex">
                 
<div  class=" items-center pb-3 ">
                  <input
                    id=""
                     name=""
                    value=""
                    type="checkbox"
                    class="h-4 w-4 border-gray-300 rounded text-firoza focus:ring-firoza"               
                  >
                  <label for="" class="ml-3 text-sm text-gray-600">  Keep my mobile number Private </label>
                </div>
                    </div>
                        
                            </div> -->
                                             
                                </form>

                                <GMap  v-if="showAddAddress" :editOrAddAddressDetails="editOrAddAddressDetails"/> 
                            </div>
                        </div>
                       </div>

                       <div class="hidden" id="sec-3">


                    

                           <div class="rounded border-t-[3px] border-t-[#48cef3]  sm:drop-shadow bg-white mb-2">



                               <div class="flex bg-[#48cef3] text-white pt-0 pl-4 pb-1">
                                <div class="flex-none rounded-[50%] text-firoza text-center h-5 w-5 text-sm border bg-white border-firoza mt-[2px]">3</div>
                                <h3 class="flex-none section-title  text-base font-normal ml-2 " >
                                    {{$t('cl_ProductAttributesTags')}}
                                </h3>
                                <div class="grow text-right pr-4 text-sm pt-[3px]">(Step 3/3)</div>
                            </div>


                               <!-- <div class="flex bg-[#48cef3] text-white pt-3 pl-4 pb-3">
                                <div class="flex-none rounded-[50%] text-firoza text-center h-6 w-6 border bg-white border-firoza mt-[2px]">3</div>
                                <h3 class="flex-none section-title  text-lg font-bold ml-2 " >
                                    Product attribute and tags         
                                </h3>
                                <div class="grow text-right pr-4">(3/4)</div>
                            </div> -->
                           
                            <div class="px-0 py-4 sm:p-4">
                                <form>

                           
                                    <div class="sm:flex">
                                  <Spinner v-show="loading" />
                                <div v-if="!showNoTagsMsg && !loading && addedTags.length === 0" class="flex-none text-xs text-gray-500 pb-3">{{$t('cl_Selecttheproducttagsfromthelistbelow')}}</div>

                                 <div v-if="showNoTagsMsg && !loading &&  addedTags.length === 0" class="flex-none text-xs text-gray-500 pb-3">{{$t('cl_noTagsFound')}}</div>
                                <!-- <div @click="showModal()" class="sm:grow col-span-3 lg:hidden text-[#48cef3] cursor-pointer mt-[-4px] text-right font-bold text-sm">Tips</div> -->
                                </div>
                                <div class="flex justify-end">
                               
                                <div @click="showModal()" class="flex lg:hidden drop-shadow-sm border justify-center border-gray-300 bg-white py-0 pb-[5px] px-2 rounded text-firoza font-medium text-base mt-[-9px]">
                                           <img class="h-[23px] mt-0" src="~/assets/images/tips.svg" alt="tips" /><span class="inline-block pt-[4px] ml-0 text-green text-sm">Tips</span>
                                       </div>
                                </div>
                                <div v-if="addedTags.length > 0" class="text-base mt-[-5px] mb-2">{{$t('cl_Selected')}}</div>
                                <!-- <div class="text-sm mt-[-5px] mb-2 text-gray-500">{{attrName}}</div>     -->
                                <div class="flex flex-wrap">
                                                    <div v-for="(item,i) in addedTags" :key="i"  classs="flex-auto items-center justify-center">
                                                        <div class="text-sm mt-[-5px] mb-2 mr-4 text-firoza">{{item.label}}</div> 
                                                        <div class="flex justify-between font-medium text-center p-2 text-xsb rounded border text-gray-500 bg-[#EAEDED] mr-4 mb-4  cursor-pointer">
                                                            <div>{{item.selectedName}}</div>
                                                            <div @click="removeTags(item,i)" class=" mt-[2px]">
                                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
                                                            </div>
                                                        </div>
                                                 </div>
                                                 
                                             </div>


                                            <div v-if="mandatoryTags.length > 0">
                                            <div class="text-base mb-4 mt-6 border-b border-gray-200">{{$t('cl_mandatory_features')}}<span class="text-firoza text-sm ml-6">{{addedTags.length +1}}/{{mandStore.length}}</span></div>
                                             <div class="text-sm mt-[-5px] mb-2 text-firoza">{{attrName}}</div>    
                                             <!-- <div class="text-sm mb-2 mt-2 text-gray-500"></div> -->
                                             <!-- <h4 class="section-title text-gray-600  text-base md:text-sm  font-medium mb-2 mt-[40px]">Location</h4> -->
                                             <div class="flex flex-wrap mb-8">
                                                 <div @click="addTags(item)" v-for="(item,i) in tagsValue" :key="i" class="flex items-center justify-center font-medium text-center p-2 text-xsb rounded border text-gray-500 bg-white mr-2 mb-4 sm:mb-0  cursor-pointer">
                                                     <div>{{item}}</div>
                                                     <div>
                                                         
                                                     </div>
                                                 </div>
                                                 <div>
                                                         <button v-if="showAddTagBtn" @click="showaddTagForm()" type="button" class="border border-firoza flex justify-center items-center bg-transparent py-2 sm:py-1 px-4 rounded text-firoza text-sm sm:h-full">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                        <span>{{$t('cl_Add')}}</span>
                </button>
                                                     </div>
                                             </div>
                                            </div>

                                            <!-- custom tag -->
                                            <div v-if="displayAddTagForm" >
                                                <div class="grid grid-cols-12 gap-x-2 ">
                                                 <div class="col-span-12">
                                                     <div class="relative z-0 w-full mb-8">
                                         <input
          type="text"
          name="customTagName"
          placeholder=" "
          v-model="customTagName"
          autocomplete="off"
          @keypress.enter.prevent="addCustomTag('mandatory')"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        <label  for="" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_Feature_Name')}}</label>
                                    </div>
                                                 </div>

                                                 

                                                  
                                                </div>
                                                <div class="flex justify-end">
                                                 <button @click="deleteCustomTag()" type="button" class="mr-4 border border-[#FC2323] flex justify-center items-center bg-transparent py-1 w-[100px] rounded text-[#FC2323] font-medium text-base">
                        <svg class="h-4 w-4" viewBox="0 0 24 28" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z" fill="#FC2323"/>
</svg>
                        <span class="ml-2">{{$t('cl_Delete')}}</span>
                </button>
                                             <button @click="addCustomTag('mandatory')" type="button" class="border border-firoza flex justify-center items-center bg-transparent py-1 w-[100px] rounded text-firoza font-medium text-base">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                        <span>{{$t('cl_Add')}}</span>
                </button>
                </div>
                                            </div>

                                            


                                            <!-- custom tag -->

                                            <!-- custom feature -->

                                             <div v-if="mandatoryTags.length == 0" >
                                                 <div class="flex justify-end mb-2">
                                                 <button :disabled="customFeatureShow" @click="addCustomFeature()" type="button" class="border border-firoza flex justify-center items-center bg-transparent py-1 px-4 rounded text-firoza text-sm">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                        <span>{{$t('cl_Add_Features')}}</span>
                </button>
                </div>
                <div v-if="customFeatureShow" class="grid grid-cols-12 gap-x-2 ">
                                                 <div class="col-span-6">
                                                     <div class="relative z-0 w-full mb-8">
                                         <input
          type="text"
          name="customFeatureName"
          @input = "handleCustomFeatureChange"
          placeholder=" "
          v-model="customFeatureName"
          autocomplete="off"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        <label  for="" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_Feature_Name')}}</label>
                                        <p class="text-xs text-red-600" v-if="!isCustomFeatureNameValidated">{{$t('cl_checkfeatureName_Message')}}</p>
                                    </div>
                                                 </div>

                                                 <div class="col-span-6">
                                                     <div class="relative z-0 w-full mb-8">
                                         <input
          type="text"
          name="customFeatureValue"
          @input = "handleCustomFeatureChange"
          placeholder=" "
          v-model="customFeatureValue"
          autocomplete="off"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        <label  class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_Feature_value')}}</label>
                                        <p class="text-xs text-red-600" v-if="!isCustomFeatureValueValidated">{{$t('cl_checkfeaturevalue_Message')}}</p>
                                    </div>
                                                 </div>

                                                  
                                            </div>
                                            <div v-if="customFeatureShow" class="flex justify-end">
                                                 <button type="button" @click="deleteCustomFeatureTag()" class="mr-4 border border-[#FC2323] flex justify-center items-center bg-transparent py-1 w-[100px] rounded text-[#FC2323] font-medium text-base">
                        <svg class="h-4 w-4" viewBox="0 0 24 28" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z" fill="#FC2323"/>
</svg>
                        <span class="ml-2">{{$t('cl_Delete')}}</span>
                </button>
                                             <button @click="addCustomFeatureTag()" type="button" class="border border-firoza flex justify-center items-center bg-transparent py-1 w-[100px] rounded text-firoza font-medium text-base">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                        <span>{{$t('cl_Add')}}</span>
                </button>
                </div>
                                             </div>

                                            <div class="relative" v-if="optionalTags.length > 0 && mandatoryTags.length == 0">
                                            <div class="text-base mb-4 mt-6 border-b border-gray-200">{{$t('cl_Optional_features')}}</div>
                                            <div v-if="optionalTags.length > 1" @click="skipOpt()" class="cursor-pointer text-sm text-firoza absolute right-0 top-[30px]">Skip</div>
                                             <div class="text-sm mt-[-5px] mb-2 text-firoza">{{OptAttrName}}</div>    
                                             <!-- <div class="text-sm mb-2 mt-2 text-gray-500"></div> -->
                                             <!-- <h4 class="section-title text-gray-600  text-base md:text-sm  font-medium mb-2 mt-[40px]">Location</h4> -->
                                             <div class="flex flex-wrap mb-8">
                                                 <div @click="addTags(item)" v-for="(item,i) in OptTagsValue" :key="i" class="flex items-center justify-center font-medium text-center p-2 text-xsb rounded border text-gray-500 bg-white mr-2 mb-4 sm:mb-0  cursor-pointer">
                                                     <div>{{item}}</div>
                                                 </div>
                                                 <div>
                                                         <button v-if="showAddTagBtnOpt" @click="showaddTagFormOpt()" type="button" class="border border-firoza flex justify-center items-center bg-transparent py-2 sm:py-1 px-4 rounded text-firoza text-sm sm:h-full">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                        <span>{{$t('cl_Add')}}</span>
                </button>
                                                     </div>
                                             </div>

                                              <!-- custom tag optional-->
                                            <div v-if="displayAddTagFormOpt" >
                                                <div class="grid grid-cols-12 gap-x-2 ">
                                                 <div class="col-span-12">
                                                     <div class="relative z-0 w-full mb-8">
                                         <input
          type="text"
          name="customTagNameOpt"
          placeholder=" "
          v-model="customTagNameOpt"
          autocomplete="off"
          @keypress.enter.prevent="addCustomTag('optional')"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        <label  for="" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Feature name</label>
                                    </div>
                                                 </div>

                                                 

                                                  
                                                </div>
                                                <div class="flex justify-end">
                                                 <button @click="deleteCustomTagOpt()" type="button" class="mr-4 border border-[#FC2323] flex justify-center items-center bg-transparent py-1 w-[100px] rounded text-[#FC2323] font-medium text-base">
                        <svg class="h-4 w-4" viewBox="0 0 24 28" fill="none" >
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z" fill="#FC2323"/>
</svg>
                        <span class="ml-2">{{$t('cl_Delete')}}</span>
                </button>
                                             <button @click="addCustomTag('optional')" type="button" class="border border-firoza flex justify-center items-center bg-transparent py-1 w-[100px] rounded text-firoza font-medium text-base">
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                        <span>{{$t('cl_Add')}}</span>
                </button>
                </div>
                                            </div>
                                            </div>
                                             
                                             
                                   
                                            
                                             
                                </form>
                            </div>
                        </div>
                       </div>


                       <!-- <div class="hidden" id="sec-4">
                           <div class="rounded border-t-[3px] border-t-[#48cef3]  sm:drop-shadow bg-white mb-2">
                               <div class="flex bg-[#48cef3] text-white pt-0 pl-4 pb-1">
                                <div class="flex-none rounded-[50%] text-firoza text-center h-5 w-5 text-sm border bg-white border-firoza mt-[2px]">4</div>
                                <h3 class="flex-none section-title  text-base font-normal ml-2 " >
                                    {{$t('cl_MyDesire')}}     
                                </h3>
                                <div class="grow text-right pr-4 text-sm pt-[3px]">(4/4)</div>
                            </div>
                             <div class="px-0 py-4 sm:p-4">

                                

                                     <p class="text-xs text-gray-500 pb-3">{{$t('cl_Thisisnoranexistentialquestion')}} </p>
                                   

                                <div class="flex justify-end mb-4">
                               
                                <div @click="showModal()" class="w-[70px] lg:hidden flex drop-shadow-sm border justify-center border-gray-300 bg-white py-0 pb-[5px] px-2 rounded text-firoza font-medium text-base mt-[-9px]">
                                           <img class="h-[23px] mt-0" src="~/assets/images/tips.svg" /><span class="inline-block pt-[4px] ml-0 text-green text-sm">Tips</span>
                                       </div>
                                </div>

                                <div class="flex flex-wrap">
                                    <div @click="setBarterCondition(item.name,i)" v-for="(item,i) in barterCondition" :key="i"  class="flex whitespace-nowrap items-center justify-center font-medium text-center w-[auto] h-[35px] px-2 
                                                 text-sm rounded  border-soild border border-gray-400 text-gray-500 mr-2 mb-8 cursor-pointer" :class="{'bg-white boder-solid border !border-green !text-green': conditionSelected == i}"><span>{{ $t(item.text_key) }}</span>
                                                 <span class="ml-2" v-if="conditionSelected == i">
                                                     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#8BC63E">
  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
</svg>
                                                 </span>
                                    </div>  
                                </div>
                                
                               
                             <form ref="desire">
                            <div id="itemSection" v-if="forProduct">
                                
                                <div class="relative z-10 w-full mb-8">
                                        <input
          type="text"
          name="desireCategory"
          placeholder=" "
          required
          readonly autocomplete="off" 
          @click="resetCategory('desire')"
          @input = "handleDesireChange"
          v-model="desire.category"
          class="pt-3 pb-2 block w-full  px-0 mt-0 bg-transparent border-0 border-b appearance-none  focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        <span @click="resetCategory('desire')" class="absolute right-0 top-[15px]">
                                            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                         </span>
                                         <div tabindex="0" id="dropDownArea2"  @blur="closeDrop('desire')" v-show="isShowDivIfh" class="rounded border p-4 drop-shadow-lg absolute w-full bg-white left-0 top-[30px] z-10">
                                             <input id="customCatInput2" autocomplete="off" v-model="desire.customCategory" @input = "searchCatDesire" class="w-full pt-3 pb-2 block  px-0 mt-0 bg-transparent border-0 border-b appearance-none  focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"  type="text" name="" placeholder=" " />
                                             <div class="absolute z-20 bg-white w-[90%] h-auto max-h-[150px] overflow-y-auto" v-if="searchCatArrDesire.length > 0">
                                                 <div v-for="(catItem,i) in searchCatArrDesire" :key="i">
                                                    <div v-for="(subCatItem,j) in catItem.breadcrumbs" :key="j">
                                                        <div @click="selectDesireCustomCat(subCatItem,i)" class="text-sm text-gray-500 p-4" v-if="j===catItem.breadcrumbs.length - 1">{{subCatItem}}</div>
                                                    </div>
                                                 </div>
                                             </div>
                                             <p class="text-xs font-normal text-gray-600 pt-2">{{$t('cl_Search_Category')}}</p>
                                            
                                         </div>
                                       
                                        <label for="name" class="absolute duration-300 top-3 -z-1 sm:-z-1 origin-0 text-gray-500 text-sm">{{$t('cl_Desire_Category')}}</label>
                                        <span class="text-sm text-red hidden">Category is required</span>
                                    </div>

                                    <div class="relative z-0 w-full mb-8">
                                         <input
          type="text"
          name="desireDescription"
          placeholder=" "
          required
          autocomplete="off"
          @input = "handleDesireChange"
          v-model = "desire.description"
          class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
        />
                                        <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_Specify')}}</label>
                                    </div>
                                    
                                </div>
                             </form>
                                  <div class="mt-4" v-if="forMoney" id="moneySection">
                                      <div class="relative z-0 w-full mb-8">
                                         <input
                                            type="number"
                                            name="price"
                                            placeholder=" "
                                            readonly
                                            disabled
                                            v-model="product.price"
                                           
                                            class="pt-3 pb-2 pl-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza bg-slate-200 border-gray-200 text-sm"
                                            />&nbsp; 
       
                                        <label for="name" class="absolute duration-300 top-0 -z-1 origin-0 text-gray-500 text-sm">{{$t('cl_gintaa_coin')}} (GC)</label>
                                    </div>
                                    <div class="flex mt-1 text-xs text-gray-500">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                                        </div><div class="ml-2 mt-1">{{$t('cl_1gintaacoin')}}
</div></div>
                                      </div>      

                                      <div v-if="forAnything">
                                      <div class="relative z-0 w-full mb-8">
        <div class="flex mt-3">
            
             <div class="grow text-sm text-gray-500 ml-2">{{$t('cl_Youarechoosingtobarteryourproduct')}} 
</div>
        </div>
                                       
                                    </div>
                                      </div>              
                                            
                                             
                               
                            </div>
                      </div>

                    </div> -->
                   
                <div class="grid grid-cols-12 sm:mt-3">
                    <div class="col-span-4" >
                        <a id="backBtn" @click ="toggleSection($event,'back')" href="" class="hidden  items-center justify-center text-center mr-6 py-1 px-3 h-10 sm:h-12 rounded border border-gray-300 w-30  text-base leading-10 font-bold text-gray-400"> 
                        {{$t('cl_Back')}} </a>
                    </div>
                    <div class="col-span-8 text-right"  >

                      
                        
                      
                      
                        <!-- <button @click="nextSection" class="bg-green text-white font-bold py-1 px-3 h-12 rounded w-56 text-base"  >
                            next
                          </button> -->

                          <primary-btn v-if="!lastStep" :class="disableBtn ? 'opacity-50' : 'opacity-100'" :disabled='disableBtn' @click.native="toggleSection($event,'next')"><span id="forward">{{$t('cl_Next')}}</span></primary-btn>
                          <primary-btn  v-else :class="disableBtn ? 'opacity-50' : 'opacity-100'" :disabled='disableBtn' @click.native="submitOffer()"><span id="finish">{{$t('cl_submit')}}</span></primary-btn>
                         
                    </div>
                </div>
                    </div>
                    <!-- 2nd col -->
                   

                    <!-- 3rd col -->

                    <div class="hidden lg:block lg:col-span-3">
                        <tips  :id="steps"></tips>
                    </div>


                    <div class="fixed hidden bg-gray-800/[.5] z-30 inset-0 overflow-y-hidden" id="icon-modal" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                        <tips @tipModal="hideModal()"  :id="steps"></tips>
                    </div>

                    <listing-success @showList="gotoList()" :listName="listName" :qValuePublished="qValuePublished"  :coinsCredited="coinsCredited" v-if="listSuccessModal"></listing-success>

                   

                    

                     
                    
                </div>

            </div>
         


       <CropListing  v-if = "imageList.length > 0" :image ="imageList" :rawImageList = "rawImageList"  @saveimg="saveimg" @closeCropListingModal="closeCropListingModal"/>
            
        <addMobile v-if="showAddMobilePopup" @closeAddmobilePopup = "closeAddmobilePopup" @otpValidated = "otpValidated" :mobNumber = "product.mobile"/>
        <addEmail v-if="showAddEmailPopup" @closeAddemailPopup = "closeAddemailPopup" @otpValidated = "otpValidated" @skipAndContinue="skipAndContinue" />
       
        <Footer :iscretaList="iscretaList" :qValueDraft="qValueDraft" :qValuePublished="qValuePublished" class="hidden sm:block"/>

        <!-- <Footer :qValueDraft="qValueDraft" :qValuePublished="qValuePublished" class="hidden sm:block"/> -->
    </div>
</template>

<script>
import Vue from 'vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import PrimaryBtn from '~/utilities/primary-btn.vue';
import secondaryBtn from '~/utilities/secondary-btn.vue';
import Breadcumb from "~/components/Breadcumb.vue";
import {
    mapState,
    mapGetters
} from 'vuex';
import Tips from '~/components/tips/Tips.vue';
import ListingSuccess from '~/components/modal/listing-success.vue';
import {
    Cropper
} from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";


export default Vue.extend({
    middleware: "authenticated",
    components: {
        secondaryBtn,
        PrimaryBtn,
        Breadcumb,
        Tips,
        ListingSuccess
    },
    computed: {
        ...mapState({
            authUser: (state) => state.authUser
        }),
        ...mapGetters({
            isLoggedIn: 'isLoggedIn'
        }),
    },
    name: 'itemPage',
    data: function() {
        return {
            negotiablePrice:null,
            offPercentage:null,
            isCustomFeatureNameValidated:true,
            isCustomFeatureValueValidated:true,
            isPhoneNoEsixtsinProfile:false,
            showAddMobilePopup:false,
            showAddEmailPopup:false,
            isDesValidate:true,
            isNameValidate:true,
            disableBrowseButton:false,
            disableUploadBtn:false,
            isMrpValidated:false,
            showRemoveBtn: true,
            itemConditionList: [{
                    'value': 'Used',
                    'selected': false,
                    'conditionText': this.$t('usedCondition')
                },
                {
                    'value': 'New',
                    'selected': true,
                    'conditionText': this.$t('newCondition')
                }

            ],
            freeShippingTypeList: [{
                    'value': 'WITHIN_CITY',
                    'selected': false,
                    'freeShippingTypeText': this.$t('freeShippingAcrossCity')
                },
                {
                    'value': 'WITHIN_INDIA',
                    'selected': false,
                    'freeShippingTypeText': this.$t('freeShippingAcrossIndia')
                }
            ],
            returnTypeList: [
                {
                    'value': 'RETURN',
                    'selected': false,
                    'returnTypeText': this.$t('return')
                },
                {
                    'value': 'RETURN_AND_REPLACE',
                    'selected': false,
                    'returnTypeText': this.$t('returnAndPolicy')
                }
            ],
            daysList: [{
                    'value': 'SEVEN_DAYS',
                    'selected': false,
                    'noOfDays': this.$t('sevenDays')
                },
                {
                    'value': 'TEN_DAYS',
                    'selected': false,
                    'noOfDays': this.$t('tenDays')
                },
                {
                    'value': 'FIFTEEN_DAYS',
                    'selected': false,
                    'noOfDays': this.$t('fifteenDays')
                },
                {
                    'value': 'THIRTY_DAYS',
                    'selected': false,
                    'noOfDays': this.$t('thirtyDays')
                }
            ],
            showFreeShippingLocationInp: false,
            showReturnIp: false,
            showProductAgeInp: false,
            loading: false,
            showNoTagsMsg: false,
            isShowDivIfh: false,
            isLastFrame: false,
            file: '',
            draftPaylod: {},
            draftId: '',
            uploadPayload: {},
            imageUrl: '',
            uploadedFiles: [],
            imageDetails: [],
            videoDetails: [],
            disableBtn: true,
            showmodal: false,
            selectedCover: false,
            offer: {},
            categoryTxt: [],
            categoryTags: [],
            product: {
                category: null,
                name: null,
                description: null,
                price: null,
                unitOfferValuation: null,
                quantity: 1,
                unit: 'Piece',
                country: "India",
                exchangeMode: "Barter",
                height: null,
                weight: null,
                length: null,
                breadth: null,
                age: null,
                customCategory: null,
                location: 'address0',
                zip: null,
                package: {
                    height: null,
                    weight: null,
                    length: null,
                    quantity: 1,
                    breadth: null
                },
                mobile: null,
                mobilePrivate: true,
                itemCondition: 'New',
                freeShippingType: '',
                cod: false,
                freeShippingLocation: '',
                returnType:'',
                withinDays:''

            },
            draftUrl: `offers/v1/draft/offers/item`,
            productCondition: ['Usable', 'Refurbished', 'Almost new'],
            //barterCondition:['Product','gintaa coin','Anything'],
            barterCondition: [{
                    text_key: "cl_product",
                    name: "Product",
                },
                {
                    text_key: "cl_gintaa_coin",
                    name: "gintaa coin",
                },
                {
                    text_key: "cl_Anything",
                    name: "Anything",
                },
            ],
            conditionSelected: 0,
            getAllAddress: [],
            dimArray: [],
            imgDetail: null,
            tagsInfo: [],
            tagsValue: [],
            attrName: null,
            addedTags: [],
            lastStep: false,
            cid: [],
            showLoader: true,
            isMoney: false,
            mandatoryTags: [],
            optionalTags: [],
            chooseTags: [],
            OptAttrName: null,
            OptTagsValue: [],
            ageOfProduct: 0,
            exchange: "Barter",
            searchCatArr: [],
            searchCatArrDesire: [],
            //catBreadCrumb: [],
            firstUpload: true,
            notFixed: true,
            superLeafsNode: [],
            addressDet: {
                id: '',
                addressLine: '',
                lat: 0,
                lng: 0,
                flatNo: '',
                landmark: '',
                area: '',
                annotation: '',
                zip: '',
                city: '',
                state: '',
                country: '',
                name: '',
                email: '',
                phoneNumber: '',
                default: false
            },
            editOrAddAddressDetails: {},
            editOrAddAddress: false,
            breadcrumb: [{}],
            showAddAddress: false,
            uploadedDocuments: [],
            mandStore: [],
            optStore: [],
            customFeatureShow: false,
            customFeatureName: '',
            customFeatureValue: null,
            displayAddTagForm: false,
            showAddTagBtn: true,
            customTagName: '',
            customTagNameOpt: '',
            showAddTagBtnOpt: true,
            displayAddTagFormOpt: false,
            desire: {
                category: null,
                description: null,
                customCategory: null,
            },
            forProduct: true,
            forMoney: false,
            forAnything: false,
            steps: '1',
            listSuccessModal: false,
            listName: '',
            counter: 0,
            iscretaList: true,
            catIdStore: '',
            secVisitd: false,
            uploadMediaUrl: '',
            uploadMediaUrl2: '',
            isImage: false,
            isVideo: false,
            videoExtension: '',
            apiFail: false,
            totalFile: [],
            uploadComplete: false,
            fileDropped: '',
            maxFileValidation: false,
            firstUploadValidation: false,
            maxVideoValidation: false,
            qValueDraft: '',
            isEditMode: false,
            qValuePublished: '',
            editApi: '',
            coinsCredited: 0,
            hasDraft: false,
            afterUploadSt: false,
            hasApiError: false,
            descriptionVal: null,
            mandatoryTagsEditMode: [],
            optionalTagsEditMode: [],
            categoryIdPub: '',
            mandStoreEditMode: [],
            optStoreEditMode: [],
            catBreadCrumb: [],
            leafNodeBreadCrumb: [],
            searchClone: [],
            descValidation: false,
            mobileValidation: false,
            mobileReqValidation: false,
            nameValidation: false,
            offerRedirect: null,
            selectedAddress: null,
            zipValidation: false,
            validZipcode: false,
            notValidZipcode: false,
            verticalList: [],
            leafNodeList: [],
            leafNodeBox: false,
            leafNodeBoxPos: null,
            onlyVerticals: false,
            onlySearchResult: false,
            offerStage: null,
            errMssg: '',
            staticErrorMsg: 'Please try again !',
            freeShippingValidation: false,
            returnDaysValidation: false,

            image: {
                src: null,
                type: null,
                name: null
            },

            imageList: [],
            videoList: [],
            rawImageList: [],
            isEmailExists:false

            //imageForm: FormData,
        }
    },
    mounted() {
        console.log("This.auth",this.authUser)

        if(this.authUser && this.authUser.email){
            this.isEmailExists = true
        }

        const url_string = window.location.href; //window.location.href
        let url = new URL(url_string);
        this.qValueDraft = url.searchParams.get("id");
        this.qValuePublished = url.searchParams.get("category");

        if (this.qValuePublished === null) {
            this.editApi = '/offers/v1/draft/offers/'
        } else {
            this.editApi = '/offers/v1/offers/oid/'
        }

        if (this.qValueDraft != null || this.qValueDraft != undefined) {

            this.isEditMode = true;

            this.$axios.$get(this.editApi + this.qValueDraft).then((res) => {
                // console.log(res);
                let firstUpload = document.getElementById('beforeUpload');
                let afterUpload = document.getElementById('afterUpload');

                firstUpload.style.display = "none";
                afterUpload.style.display = "block";

                let retrieveData = res.payload;

                this.imageDetails = retrieveData.images;
                this.videoDetails = retrieveData.videos;

                this.totalFile = [...this.imageDetails, ...this.videoDetails];

                if(this.totalFile && (this.totalFile.length === 10 || this.totalFile.length > 10 )){
                    this.disableBrowseButton = true
                }

             //   console.log("imageDetails", this.imageDetails.length)

                //  Added For In case of Edit time if no of image is 3 then remove button will not appear

                if (this.isEditMode) {
                  //  console.log("=====================", this.imageDetails, this.imageDetails.length)
                    if (this.imageDetails && this.imageDetails.length > 3) {
                        this.showRemoveBtn = true
                    } else {
                        this.showRemoveBtn = false
                    }
                }

               // console.log("this.showRemoveBtn", this.showRemoveBtn)

                if (this.imageDetails.length < 3) {
                    this.disableBtn = true;
                } else {
                    this.disableBtn = false;
                }


                console.log("retrieveData",retrieveData,retrieveData.category?.label)
                this.product.category = retrieveData.category ? retrieveData.category.label : null;
                this.product.name = retrieveData.name || null;
                this.product.description = retrieveData.description || null;
                this.product.price = retrieveData.price || null;
                this.product.unitOfferValuation = retrieveData.unitOfferValuation || null;
                this.product.quantity = retrieveData.quantity || null;
                this.product.unit = retrieveData.unit || null;
                this.product.exchangeMode = retrieveData.exchangeMode || null;
                //  console.log("------------------retrieveData.productAge ",retrieveData.productAge )
                this.product.age = retrieveData.productAge || null;
                this.product.itemCondition = retrieveData.itemCondition || 'New';
               // console.log("retrieveData-----------------------", retrieveData)
                this.product.freeShippingType = retrieveData.freeShippingType || '';
                this.product.freeShippingLocation = retrieveData.freeShippingLocation || '';
                this.product.cod = retrieveData.cod || false;
                this.product.returnType = retrieveData.returnType || '';
                this.product.withinDays = retrieveData.withinDays || '';

                //  console.log("retrieveData",retrieveData)

                if(this.product.unitOfferValuation){
                    this.setNegotiableMessage()
                }

               
                if (retrieveData.productAge === 0) {
                    this.product.age = 1
                }
                if (retrieveData && retrieveData?.itemCondition === 'New') {
                    this.showProductAgeInp = false
                    this.product.age = 1
                }

                if (retrieveData && retrieveData?.itemCondition === 'Used') {
                    this.showProductAgeInp = true
                  //  this.product.age = 1
                }

                if (retrieveData && retrieveData?.freeShippingType === 'WITHIN_CITY') {
                    this.showFreeShippingLocationInp = true
                }

                if(retrieveData && retrieveData.returnType){
                 this.showReturnIp = true
                }

                if(retrieveData &&  retrieveData.returnType ){

                    if(retrieveData.withinDays === null){
                    console.log("----------------------- retrieveData.withinDays is null")
                    this.returnDaysValidation = true
                   // this.disableBtn = true
                    }else{
                    console.log("----------------------- retrieveData.withinDays is not null")
                    this.returnDaysValidation = false  
                    }
                    
                }
                // if(retrieveData && retrieveData?.freeShippingType === null){
                //     this.showFreeShippingLocationInp = false
                // }else if(retrieveData && retrieveData?.freeShippingType === 'WITHIN_INDIA'){
                //     this.showFreeShippingLocationInp = false
                // }
                //For modile and Its Checkbox //////////
                this.product.mobile = this.remove91ToPhoneNumber(retrieveData.mobile) ? this.remove91ToPhoneNumber(retrieveData.mobile) : this.remove91ToPhoneNumber(this.authUser?.phoneNumber) || null;

                //  reversed the Mobile Private
                this.product.mobilePrivate = retrieveData.mobilePrivate ? false : true;
                //End of  mobile and Its Checkbox //////////
                this.addedTags = retrieveData.facets || null;
                this.mandatoryTags = [];
                this.mandatoryTagsEditMode = [];
                this.optionalTagsEditMode = [];
                this.ageOfProduct = this.product.age || null;

                this.selectedAddress = retrieveData.location;

                if (retrieveData.price != null) {
                    this.product.price = retrieveData.price;
                }

                if (retrieveData.location != null) {
                    this.product.zip = retrieveData.location.zip;
                }


                if (retrieveData.desire != null) {
                    this.desire = {
                        description: retrieveData.desire.description || null,
                        category: retrieveData.desire.category ? retrieveData.desire.category.label : null,
                        desireType: retrieveData.desire.desireType || null,
                    }
                }

                //alert(this.qValuePublished);
                //alert(retrieveData.draftOfferId);

                if (this.qValuePublished === null && retrieveData.draftOfferId != null) {
                    this.draftId = retrieveData.draftOfferId;
                    this.offer.draftOfferId = retrieveData.draftOfferId;
                    // console.log(this.offer.draftOfferId);
                }



                if (retrieveData.documents != null) {
                    this.uploadedDocuments = retrieveData.documents;
                }

                if (retrieveData.price === null  || retrieveData.price === '' ) {
                    this.isMrpValidated = true
                  //  this.product.zip = retrieveData.location.zip;
                }

                if (this.isEditMode && retrieveData.price && retrieveData.unitOfferValuation ) {
                    if (+retrieveData.price >= +retrieveData.unitOfferValuation){
                        this.isMrpValidated = true
                    }else{
                        this.isMrpValidated = false
                    }
                }else{
                    this.isMrpValidated = true
                }

                // console.log(this.uploadedDocuments);

                //this.desire.description = retrieveData.desire.description;
                //this.desire.category = retrieveData.desire.category.label;

                this.addedTags.forEach(elem => {
                    elem.selectedName = elem.values[0];
                    //  console.log(elem.selectedName);
                })


                this.offer = res.payload;

                this.offerStage = retrieveData.offerStage;

                //console.log(retrieveData.offerStage);

                if (retrieveData.category != null) {
                    this.offer.categoryId = retrieveData.category.categoryId;
                    this.categoryIdPub = retrieveData.category.categoryId;
                }

                // console.log(this.offer.categoryId);
            });
        }
 
// console.log("-----------------------------",this.isEditMode)
        if(!this.isEditMode){
        console.log("This is not edit Mode")
          this.isMrpValidated = true
          this.product.age = 1
           }


        //console.log("this.auth",this.authUser)
        this.breadcrumb = [{
            name: this.$t('cl_AddProduct'),
            show: true,
            click: false,
        }, ];

        if (window.localStorage.getItem("setPath") != null) {
            window.localStorage.removeItem("setPath");
        }

        this.getMyProfileDetails();

        this.allAddresses();
        // if(this.isEditMode){
        //     this.matchallAddresses();
        // }else{
        //     this.allAddresses();
        // }




        if (window.localStorage.getItem("offerRedirectPath") != null) {
            this.offerRedirect = window.localStorage.getItem("offerRedirectPath");
           // console.log(this.offerRedirect);
            window.localStorage.removeItem("offerRedirectPath")
        } else {
            this.offerRedirect = null;
        }

    },
    created() {
        this.$on("closeModal", (section) => {

            //  console.log("close Modal")
            this.editOrAddaddress = false;
            this.showAddAddress = false;
            //this.showOtpModal = false;
            //this.image.src = null;
            console.log(section);
            if (section) {
                this.editMobOpt = false;
                this.editEmailOpt = false;
                //this.getMyProfileDetails();
                //this.allAddresses();
                if (section === "EditEmail") {
                    this.getMyProfileDetails();

                } else {

                    this.checkAddressPopupClose();
                    //   if(!this.qValuePublished){
                    //       this.checkAddressPopupClose();
                    //   }else if(this.qValuePublished){
                    //       this.allAddresses();
                    //   }
                }
            }
        });

    },

    watch: {
        counter(newValue, oldValue) {

            if (newValue == this.file.length) {
                console.log(newValue);
                //For the check of total file Update
                //console.log("total length",this.totalFile.length);
                if(this.totalFile && this.totalFile.length === 10){
                    this.disableBrowseButton = true
                }
                if (this.imageDetails.length > 0) {
                    this.defaultCover();
                }

                this.showLoader = false;
                this.uploadComplete = true;
            }
        }
    },


    methods: {
        async logEvent() {
            try {
                const analyticsData = {
                    channel_id: 'WEB',
                    user_id: this.authUser?.uid,
                    category_id: this.offer.category.categoryId,
                    listing_type: this.offer.offerType,
                    exchange_mode: this.offer.exchangeMode,
                    business_id: null,
                    negotiable: this.offer.negotiable,
                    item_condition: this.offer.itemCondition,
                };
                await this.$fire.analytics.logEvent('gintaa_product_create', analyticsData)
                console.log('Gintaa analytics event log successfully', analyticsData);
            } catch (e) {
                console.log('Gintaa analytics error:', e);
            }
        },

        closeAddmobilePopup(){
         this.showAddMobilePopup = false
         this.showLoader = false
        },

        closeAddemailPopup(){
            this.showAddEmailPopup = false
        },

        skipAndContinue(btnStatus){
          console.log("btnStatus",btnStatus)
          this.showAddEmailPopup = false
          if(btnStatus === 'skip'){
            this.isEmailExists = true
            this.submitOffer()
          }
        },

        otpValidated(validatedType){
         if(validatedType && validatedType === 'Email'){
            this.isEmailExists = true
            this.closeAddemailPopup()
            this.submitOffer()
         }else{
         this.closeAddmobilePopup()
         this.isPhoneNoEsixtsinProfile = true
         this.submitOffer()
         }
        

         //this.isPhoneNoExistsToProfile()
         
        },

       async isPhoneNoExistsToProfile(){
        try {
                let url = `/users/v1/user/profile`;
                const data = await this.$axios.$get(url);
                this.userDetails = data.payload;
                if(this.userDetails.mobile){
                 this.isPhoneNoEsixtsinProfile = true
                 this.submitOffer()
                }else{
                 this.isPhoneNoEsixtsinProfile = false   
                }
               
            } catch (error) {
                this.showLoader = false;
                console.log(error);
            }

        },

        async getMyProfileDetails() {
            this.showLoader = true;
            try {
                let url = `/users/v1/user/profile`;
                const data = await this.$axios.$get(url);
                this.userDetails = data.payload;
                if(this.userDetails.mobile){
                 this.isPhoneNoEsixtsinProfile = true
                }else{
                 this.isPhoneNoEsixtsinProfile = false   
                }

                if(this.userDetails.email){
                    this.isEmailExists = true
                }
                
                if (!this.isEditMode) {
                    this.product.mobile = this.product.mobile ? this.remove91ToPhoneNumber(this.product.mobile) : this.remove91ToPhoneNumber(this.userDetails?.mobile) || null
                }

                this.showLoader = false;
            } catch (error) {
                this.showLoader = false;
                console.log(error);
            }
        },

        onConditonChange(event) {
            //  console.log("this.product.age",this.product.age)
            // if(this.product.age === null){
            //     this.disableBtn = true
            // }
            if (event.target.value === 'New') {
                this.showProductAgeInp = false
                this.product.age = 0
                if (this.product.age === 0) {
                    this.disableBtn = false
                }
                // this.disableBtn = false
            } else {
                this.showProductAgeInp = true
                this.product.age = null
                if (this.product.age === null) {
                    this.disableBtn = true
                }
            }
            // console.log("condition",event.target.value)
        },

        remove91ToPhoneNumber(phone) {
            // console.log("remove91ToPhoneNumber",phone)
            if (phone === "") {
                return "";
            } else {
                let replaceString = "+91";
                if (phone && phone.includes(replaceString)) {
                    phone = phone.replace(replaceString, "");
                }
                return phone;
            }
        },

        getSuperLeafNode(superChildren) {
            if (superChildren) {
                if (superChildren?.children?.children.length === 0) {
                    this.selectCategory(superChildren.name, superChildren.categoryId)
                } else {
                    this.superLeafsNode = []
                    this.superLeafsNode = superChildren?.children?.children
                }

            }
        },

        isChildrenEsists(itemList) {
            if (itemList?.children?.children.length > 0) {
                return true
            } else {
                return false
            }

        },
        showLeafNodes(id, evt) {
            this.superLeafsNode = []
            this.showLoader = true;
            let prevSelected = document.querySelectorAll('.verticals');
            for (var i = 0; i < prevSelected.length; i++) {
                prevSelected[i].classList.remove('bg-slate-200');
                prevSelected[i].classList.remove('text-slate-700');

                // if(prevSelected.classList.contains('bg-slate-200')){
                //     prevSelected.classList.remove('bg-slate-200');
                // }
            }

            // this.$axios.get(`/categories/v1/tree/${id}?depth=2`).then((res) => {
            //     console.log("Response New Api",res.data)
            //      });

            this.$axios.get(`/categories/v1/tree/${id}?depth=2`).then((res) => {
                // this.$axios.get(`/categories/v1/categories/leafNode/`+id).then((res) => {



                this.leafNodeBreadCrumb = [];
                this.leafNodeBox = true;
                this.leafNodeList = res.data.payload;


                evt.target.classList.add('bg-slate-200');
                evt.target.classList.add('text-slate-700');




                //     let parent = document.getElementById('box').getBoundingClientRect();
                //    let rect =  evt.target.getBoundingClientRect();
                //     this.leafNodeBoxPos = (rect.top - parent.top) + 30;
                //     console.log(this.leafNodeBoxPos);


                this.leafNodeList.forEach(elm => {
                    var name = elm.breadcrumbs[elm.breadcrumbs.length - 1];
                    var fullPath = JSON.stringify(elm.breadcrumbs);
                    var idCategory = elm.categoryId,
                        fullPath = fullPath.replace('[', '').replace(']', '').replace(']', '').replaceAll('"', '').replaceAll(',', '/');
                    var catLabel = elm?.label;
                    var children = {
                        categoryId: idCategory,
                        children: elm?.children
                    }
                    this.leafNodeBreadCrumb.push({
                        string: catLabel,
                        name: name,
                        categoryId: idCategory,
                        children: children
                    });


                });
                this.showLoader = false;
                //  setTimeout( () => {
                //       document.getElementById('leafNodeDropDown').focus();
                //  },100)


            }).catch(res => {
                console.log('FAILURE!!');
                this.showLoader = false;
            });
        },
        makeReadonly(evt) {
            evt.preventDefault();
        },
        arrowClicked(id, evt) {
            this.superLeafsNode = []
            this.showLoader = true;
            let prevSelected = document.querySelectorAll('.verticals');



            for (var i = 0; i < prevSelected.length; i++) {
                prevSelected[i].classList.remove('bg-slate-200');
                prevSelected[i].classList.remove('text-slate-700');

                // if(prevSelected.classList.contains('bg-slate-200')){
                //     prevSelected.classList.remove('bg-slate-200');
                // }
            }
            evt.target.parentNode.classList.add('bg-slate-200');
            evt.target.parentNode.classList.add('text-slate-700');

            //this.$axios.get(`/categories/v1/categories/leafNode/`+id).then((res) => {
            this.$axios.get(`/categories/v1/tree/${id}?depth=2`).then((res) => {
                this.leafNodeBreadCrumb = [];
                this.leafNodeBox = true;
                this.leafNodeList = res.data.payload;




                //     let parent = document.getElementById('box').getBoundingClientRect();
                //    let rect =  evt.target.getBoundingClientRect();
                //     this.leafNodeBoxPos = (rect.top - parent.top) + 30;
                //     console.log(this.leafNodeBoxPos);


                this.leafNodeList.forEach(elm => {
                    var name = elm.breadcrumbs[elm.breadcrumbs.length - 1];
                    var fullPath = JSON.stringify(elm.breadcrumbs);
                    var idCategory = elm.categoryId,
                        fullPath = fullPath.replace('[', '').replace(']', '').replace(']', '').replaceAll('"', '').replaceAll(',', '/');

                    var catLabel = elm?.label;
                    var children = {
                        categoryId: idCategory,
                        children: elm?.children
                    }
                    this.leafNodeBreadCrumb.push({
                        string: catLabel,
                        name: name,
                        categoryId: idCategory,
                        children: children
                    });
                });
                this.showLoader = false;
                //  setTimeout( () => {
                //       document.getElementById('leafNodeDropDown').focus();
                //  },100)


            }).catch(res => {
                console.log('FAILURE!!');
                this.showLoader = false;
            });
        },
        onlyNumber(evt) {
            let value = evt.target.value;
            if (evt.key === '.') {
                evt.preventDefault();
            } else if (evt.key === '-') {
                evt.preventDefault();
            } else if (evt.key === '+') {
                evt.preventDefault();
            } else if (evt.key === 'e' || evt.key === 'E') {
                evt.preventDefault();
            }
        },

        ProductAgeValidation(evt) {
            if (evt.key === '.') {
                evt.preventDefault();
            } else if (evt.key === '0' && (evt.target.value == "" || evt.target.value == null)) {
                evt.preventDefault();
            } else if (evt.key === '-') {
                evt.preventDefault();
            } else if (evt.key === '+') {
                evt.preventDefault();
            } else if (evt.key === 'e' || evt.key === 'E') {
                evt.preventDefault();
            }
        },
        limitDecimalPlaces(e, count) {

            if (e.key === '-') {
                e.preventDefault();
            } else if (e.key === '.') {
                e.preventDefault();
            } else if (e.key === '+') {
                e.preventDefault();
            } else if (e.key === 'e' || e.key === 'E') {
                e.preventDefault();
            }
        },
        zipCodeValidation(e, count) {

            if (e.key === '-') {
                e.preventDefault();
            } else if (e.key === '.') {
                e.preventDefault();
            } else if (e.key === '+') {
                e.preventDefault();
            } else if (e.key === 'e' || e.key === 'E') {
                e.preventDefault();
            } else if (e.key === 'e' || e.key === 'E' || (e.key >= '!' && e.key <= ')') || e.key === '@' || e.key === '^' || e.key === '*') {
                e.preventDefault();
            }



            let charCode = (e.which) ? e.which : e.keyCode;


            if (charCode > 31 && ((charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105))) {
                this.zipValidation = false;
                e.preventDefault();
            } else {
                if (e.target.value.length > 5) {
                    if (e.key === "Backspace" || e.key === "Delete") {
                    } else {
                        e.preventDefault();
                    }
                }

            }



        },
        showModal() {
            let modal = document.getElementById("icon-modal");
            modal.style.display = "block";
        },
        tipsModal() {
            this.showModal = true;
        },
        hideModal() {
            let modal = document.getElementById("icon-modal");
            modal.style.display = "none";
        },
        forceloseDropdown(sec) {
            this.isShowDivIfh = false;
        },
        closeDrop(sec) {
            setTimeout(() => {
                if (sec == "info") {
                    if (document.getElementById('customCatInput') === document.activeElement) {
                        this.isShowDivIfh = true;
                    } else {
                        this.isShowDivIfh = false;
                    }
                } else {
                    //  if(document.getElementById('customCatInput2') === document.activeElement){
                    //     this.isShowDivIfh = true;
                    //  }else{
                    //     this.isShowDivIfh = false;
                    // }



                    this.leafNodeBox = false;
                }
                

            }, 100);


        },
        toggleSection(e, movement) {

            e.preventDefault();
            this.disableBtn = true;
            let currentId = document.querySelector('.active-now').id;
            //alert(currentId);
            let currentSection = document.getElementById(currentId);
            currentSection.classList.remove("active-now");
            let backButton = document.getElementById("backBtn");
            let str = currentId;
            let frameNumber = str.split('-').pop();

            let forward = document.getElementById('forward');
            let finish = document.getElementById('finish');

            if (frameNumber != undefined) {

                if (movement == "next") {
                    let nextId = parseInt(frameNumber) + 1;
                    let nextFrame = document.getElementById("sec-" + nextId);
                    nextFrame.classList.add("active-now");

                    nextFrame.style.display = "block";
                    currentSection.style.display = "none";
                    backButton.style.display = "flex";
                    this.steps = nextId;
                    //console.log(this.steps);
                    if (nextId == 3) {
                        //forward.style.display = "none";
                        //finish.style.display = "inline-block";


                        if (!this.secVisitd) {

                            // if(this.isEditMode && this.addedTags.length != 0){
                            // this.mandatoryTags = [];
                            // this.disableBtn = false;
                            // return false;

                            // }else{
                            // //this.disableBtn = true;

                            // }
                            if (!this.isEditMode) {
                                this.saveBasicInfo();
                            }


                            // console.log(this.offer.categoryId);
                            // console.log(this.categoryIdPub);

                            if (this.qValueDraft && this.qValuePublished && this.offer.categoryId == undefined) {
                                this.offer.categoryId = this.categoryIdPub;

                            } else if (this.qValueDraft && !this.qValuePublished && this.offer.categoryId == undefined) {
                                this.offer.categoryId = this.categoryIdPub;
                            }

                            this.loading = true

                            this.$axios.$get('categories/v1/category-tags/' + this.offer.categoryId).then((res) => {
                                this.tagsInfo = res.payload;

                                this.loading = false
                                if (this.tagsInfo.length === 0) {
                                    this.disableBtn = false;
                                    this.showNoTagsMsg = true
                                }

                                this.mandatoryTags = this.tagsInfo.filter(tag => {
                                    return tag.mandatory === true;
                                });

                                this.optionalTags = this.tagsInfo.filter(tag => {
                                    return tag.mandatory === false;
                                });



                                //this.mandStore = [...this.mandatoryTags];

                                this.mandStore = this.mandatoryTags.map(({
                                    ...ele
                                }) => {
                                    return ele
                                });

                                this.optStore = this.optionalTags.map(({
                                    ...ele
                                }) => {
                                    return ele
                                });

                                //this.mandStore = this.mandatoryTags.slice();



                                if (this.isEditMode && this.addedTags.length != 0) {
                                    this.mandatoryTagsEditMode = this.addedTags.filter(tag => {
                                        return tag.mandatory === true;
                                    });

                                    this.optionalTagsEditMode = this.addedTags.filter(tag => {
                                        return tag.mandatory === false;
                                    });
                                    this.mandStoreEditMode = this.mandStore.map(({
                                        ...ele
                                    }) => {
                                        return ele
                                    });
                                    this.optStoreEditMode = this.optStore.map(({
                                        ...ele
                                    }) => {
                                        return ele
                                    });

                                    if (this.mandatoryTagsEditMode.length == this.mandStore.length) {
                                        this.mandatoryTags = [];
                                        this.disableBtn = false;
                                    }

                                    if (this.mandatoryTagsEditMode.length < this.mandStore.length) {
                                        var filtItems = this.mandStoreEditMode.filter(item1 => !this.mandatoryTagsEditMode.some(item2 => (item2.name === item1.name)));
                                        this.mandatoryTags = filtItems;
                                        // console.log(filtItems);
                                    }

                                    if (this.optionalTagsEditMode.length == this.optStore.length) {
                                        this.optionalTags = [];
                                    }

                                    if (this.optionalTagsEditMode.length < this.optStore.length) {
                                        var filtItemsOpt = this.optStoreEditMode.filter(item1 => !this.optionalTagsEditMode.some(item2 => (item2.name === item1.name)));
                                        //  console.log(filtItemsOpt);
                                        this.optionalTags = filtItemsOpt;
                                    }

                                }


                                if (this.mandatoryTags[0] != undefined) {
                                    this.attrName = this.mandatoryTags[0].label;
                                    this.tagsValue = this.mandatoryTags[0].values;
                                }

                                if (this.optionalTags[0] != undefined) {
                                    this.OptAttrName = this.optionalTags[0].label;
                                    this.OptTagsValue = this.optionalTags[0].values;
                                }

                               
                            })

                            this.disableBtn = true;
                            this.secVisitd = true;
                        } else {

                            if (this.mandatoryTags.length == 0) {
                                this.disableBtn = false;
                            }
                            //return false;
                        }



                        this.lastStep = true;
                    } else if (nextId == 4) {

                        //this.lastStep = true;
                        if (this.$refs.desire.checkValidity()) {
                            this.disableBtn = false;
                        } else {
                            this.disableBtn = true;
                        }
                    } else if (nextId == 2) {
                        window.scrollTo(0, 0);
                        this.showLoader = true;
                        if (this.selectedAddress == null && this.getAllAddress.length > 0) {
                            this.getAllAddress.forEach(elm => {
                                if (elm.default == true) {
                                    this.product.zip = elm.zip;
                                    if (elm.zip && elm.zip.length === 6) {
                                        this.checkPinCode(elm.zip)
                                    }
                                    this.offer.location = {
                                        zip: this.product.zip
                                    }
                                }
                            })
                        }




                        this.$axios.$get(`/categories/v1/verticals`).then((res) => {
                            this.verticalList = res.payload;
                            this.onlyVerticals = true;
                            this.onlySearchResult = false;
                            this.showLoader = false;
                        }).catch(res => {
                            console.log('FAILURE!!');
                            this.showLoader = false;
                        });

                    
                      if (this.$refs.basic.checkValidity()) {
                            this.disableBtn = false;
                        }

                         if(this.isEditMode && this.qValuePublished === null){
                          //  console.log("this is for draft condition Only")
                            if(this.product.category === null || this.product.name === null ){
                            this.disableBtn = true;
                        }

                        if(this.returnDaysValidation){
                            this.disableBtn = true;    
                        }

                        if(this.product.price === null){
                            this.disableBtn = true;    
                        }
                        
                    }
                       
                    }

                    //    if(nextId == 4){

                    //         forward.style.display = "none";
                    //         finish.style.display = "inline-block";

                    //     }

                    //alert("aaa");
                } else if (movement == "back") {
                    let prevId = parseInt(frameNumber) - 1;
                    let forward = document.getElementById('forward');
                    let finish = document.getElementById('finish');


                    let prevFrame = document.getElementById("sec-" + prevId);
                    prevFrame.classList.add("active-now");
                    prevFrame.style.display = "block";
                    currentSection.style.display = "none";
                    if (prevId == 1) {
                        backButton.style.display = "none";
                        this.lastStep = false;
                    } else {
                        backButton.style.display = "flex";
                    }

                    if (prevId == 2) {
                        this.lastStep = false;
                    }

                    // if(forward != null || forward != undefined){
                    //     forward.style.display = "inline-block";
                    // }
                    if (prevId == 3) {
                        this.lastStep = true;
                        //finish.style.display = "none";
                        // document.getElementById('forward').style.display = "inline-block";
                        // setTimeout( () => {
                        //     console.log(document.getElementById('forward'));


                        //     document.getElementById('forward').style.display = "inline-block";
                        // }, 100);
                    }

                    // if(prevId == 3){
                    //     this.lastStep = false;
                    //     finish.style.display = "none";
                    //     forward.style.display = "inline-block";
                    // }

                    this.disableBtn = false;

                }

            }



        },


        uploadMedia(state) {
            this.counter = 0;
            let uploadButton = document.getElementById('fileUpload');
            uploadButton.click();
            if (state == "after") {
                this.afterUploadSt = true;
            }


        },
        uploadDocument() {
            //console.log("aaa");
            let uploadButton = document.getElementById('documentUpload');
            uploadButton.click();
        },

        dropFiles(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            this.showLoader = true;
            if (this.totalFile.length > 0) {
                this.afterUploadSt = true;
            }
            this.filesChange(evt);

            this.counter = 0;
        },
        dropFilesDoc(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            this.showLoader = true;
            if (this.totalFile.length > 0) {
                this.afterUploadSt = true;
            }
            this.documentFilesChange(evt);

            this.counter = 0;
        },
        async filesChange(e) {

             console.log("-----------------------file change")
            this.showLoader = true;
            //this.fileDropped = e.dataTransfer.files;
            console.log("this.totalFile",this.totalFile.length)
            this.file = e.target.files || e.dataTransfer.files;
            if (this.totalFile.length == 10) {
                this.showLoader = false;
                //alert('maximum 10 files allowed');
                this.maxFileValidation = true;
                setTimeout(() => {
                    this.maxFileValidation = false;
                }, 5000);
                return false;
            } else if ((this.totalFile.length + this.file.length) > 10) {
                this.showLoader = false;
                //alert('maximum 10 files allowed');
                this.maxFileValidation = true;
                setTimeout(() => {
                    this.maxFileValidation = false;
                }, 5000);
                return false;
            }




            this.draftPaylod = {
                auctioned: false,
                exchangeMode: "Barter",
                offerType: "offerType",
                quantity: 1,
                unit: "Piece"
            };

            //let draftUrl = `offers/v1/draft/offers/item`;
            //Newly Added not to called draft 
            // this.afterUploadSt = true

            if (!this.afterUploadSt) {
                const draftData = await this.$axios.$post(this.draftUrl, this.draftPaylod).then((res) => {
                    this.draftId = res.payload.draftOfferId;
                }).catch(res => {
                    console.log('FAILURE!!');

                    //alert("Error! Please try again.");
                    this.showLoader = false;
                });
            }

            if (this.file.length == 0) {
                this.showLoader = false;
                return false;
            }


            if (this.file.length > 10) {
                this.showLoader = false;
                return false;
            } else {

                for (let i = 0; i < this.file.length; i++) {
                    // Start Newly Added to send the images To Cropper

                    const blob = URL.createObjectURL(this.file[i]);
                    this.image = {
                        src: blob,
                        type: this.file[i].type,
                        name: this.file[i].name
                    };
                    if (this.image && this.image.type.match('image.*')) {
                        this.rawImageList.push(this.file[i])
                        this.imageList.push(this.image)
                    } else {
                        if (this.image && this.image.type.match('video.*')) {
                            this.videoList.push(this.file[i])
                            if (this.imageList.length === 0) {
                                await this.upload(i, this.videoList[i]);
                                this.videoList = []
                            }
                        }
                    }
                    // End Newly Added to send the images To Cropper

                    // await this.upload(i, this.file[i]);


                }
            }

        },

        //For Uploading Crop Images
        async saveimg(file) {
            for (let i = 0; i < file.length; i++) {
                this.showLoader = true
                await this.upload(i, file[i]);

            }
            //For Uploading Video Files
            if (this.videoList?.length > 0) {
                for (let i = 0; i < this.videoList.length; i++) {
                    await this.upload(i, this.videoList[i]);
                    this.videoList = []
                }

            }
        },
        // close Crop Lisitng Modal
        closeCropListingModal(isCancel) {
            if (isCancel) {
                this.showLoader = false
            }
            // this.showLoader = false
            this.imageList = []
            this.videoList = []
            this.rawImageList = []
        },


        async documentFilesChange(e) {
            this.showLoader = true;
            this.file = e.target.files || e.dataTransfer.files;
            for (let i = 0; i < this.file.length; i++) {
                this.documentUpload(i, this.file[i]);
            }
        },
        getFileType(file) {
            if (file.type.match('image.*')) {
                this.isImage = true;
                return 'image';
            } else {
                this.isImage = false;
            }


            if (file.type.match('video.*')) {
                this.isVideo = true;
                console.log(this.isVideo);
                return 'video';
            } else {
                this.isVideo = false;
            }

        },
        upload(ind, file) {
            this.getFileType(file);

            if (this.isImage) {
                if (this.isEditMode && this.qValuePublished) {
                    this.uploadMediaUrl = `offers/v1/offers/attachments/image`;
                    var formData = new FormData();
                    formData.append("file[]", file);
                    formData.append('displayIndex', 0);
                    formData.append('viewType', 'more');
                    formData.append('cover', 'false');
                    formData.append('offerId', this.offer.offerId);
                } else {
                    this.uploadMediaUrl = `offers/v1/draft/offers/attachments/image`;
                    var formData = new FormData();
                    formData.append("file[]", file);
                    formData.append('displayIndex', 0);
                    formData.append('viewType', 'more');
                    formData.append('cover', 'false');
                    formData.append('draftId', this.draftId);
                }
                var custCall = this.$axios.$post(this.uploadMediaUrl, formData, {
                        timeout: 300000
                    }).then((res) => {

                        this.offer = res.payload;
                        //this.imgDetail = this.offer.images;
                        if (!this.isEditMode) {
                            //  if(this.getAllAddress.length > 0){
                            //      this.offer.location = this.getAllAddress[0];
                            //     this.offer.location.addressId = this.getAllAddress[0].id;
                            //  }
                            this.offer.exchangeMode = "Barter";
                            // this.offer.itemCondition = "used";
                            this.offer.offerId = this.offer.draftOfferId;
                            this.offer.originCountry = "India";
                            this.offer.quantity = "1";
                            this.offer.unit = "Piece";
                        }


                        this.imageDetails = this.offer.images;
                        this.videoDetails = this.offer.videos;




                        //this.showLoader = false;

                        this.firstUpload = false;

                        let firstUpload = document.getElementById('beforeUpload');
                        let afterUpload = document.getElementById('afterUpload');

                        firstUpload.style.display = "none";
                        afterUpload.style.display = "block";
                        this.counter++;
                        //console.log(this.offer);

                        this.totalFile = [...this.imageDetails, ...this.videoDetails];


                        if (this.isEditMode) {
                            if (this.imageDetails && this.imageDetails.length > 3) {
                                this.showRemoveBtn = true
                            } else {
                                this.showRemoveBtn = false
                            }
                        }
                        
                    })
                    .catch(res => {
                        console.log('FAILURE!!');
                        this.errMssg = res.response.data.message ? res.response.data.message : this.staticErrorMsg;

                        //alert("Error! Please try again.");
                        this.showLoader = false;
                        this.hasApiError = true;

                        setTimeout(() => {
                            this.hasApiError = false;
                        }, 5000);
                    });

            } else {


                //let result = this.file.every(elm => elm.type.match('video.*'));



                if (!this.afterUploadSt) {

                    const fArr = [...this.file];


                    let result = fArr.every(elm => elm.type.match('video.*'));
                    if (this.file.length == 1) {
                        this.showLoader = false;
                        this.firstUploadValidation = true;
                        setTimeout(() => {
                            this.firstUploadValidation = false;
                            return false;
                        }, 5000);
                        return false
                    } else if (this.file.length > 1 && result) {
                        this.showLoader = false;
                        this.firstUploadValidation = true;
                        setTimeout(() => {
                            this.firstUploadValidation = false;
                            return false;
                        }, 5000);
                        return false
                    }



                }



                if (this.videoDetails.length >= 2) {
                    this.showLoader = false;
                    //alert("max 2 video file allowed");
                    this.maxVideoValidation = true;
                    setTimeout(() => {
                        this.maxFileValidation = false;
                    }, 5000);
                    return false;
                }


                if (this.isEditMode && this.qValuePublished) {
                    this.uploadMediaUrl2 = `offers/v1/offers/attachments/video`;
                    var formData = new FormData();
                    formData.append("file[]", file);
                    formData.append('displayIndex', 0);
                    formData.append('viewType', 'more');
                    //formData.append('cover', 'false');
                    formData.append('offerId', this.offer.offerId);
                } else {
                    this.uploadMediaUrl2 = `offers/v1/draft/offers/attachments/video`;
                    var formData = new FormData();
                    formData.append("file[]", file);
                    formData.append('displayIndex', 0);
                    formData.append('viewType', 'more');
                    //formData.append('cover', 'false');
                    formData.append('draftId', this.draftId);
                }



                //let uploadMediaUrl2 = `offers/v1/draft/offers/attachments/video`;

                //const formData = new FormData();


                //for (var i = 0; i < this.file.length; i++) {
                // formData.append("file[]", file);
                // formData.append('displayIndex', ind.toString());
                // formData.append('viewType', 'more');
                // formData.append('draftId', this.draftId);

                var custCall = this.$axios.$post(this.uploadMediaUrl2, formData, {
                        timeout: 300000
                    }).then((res) => {

                        //this.videoDetails.push(res.payload.videos[0]);

                        let fileName = res.payload.videos[0].name;



                        this.videoExtension = "video/" + fileName.substring(fileName.lastIndexOf('.') + 1);
                        this.offer = res.payload;
                        if (!this.isEditMode) {
                            if (this.getAllAddress.length > 0) {
                                this.offer.location = this.getAllAddress[0];
                                this.offer.location.addressId = this.getAllAddress[0].id;
                            }
                            this.offer.exchangeMode = "Barter";
                            //  this.offer.itemCondition = "used";
                            this.offer.offerId = this.offer.draftOfferId;
                            this.offer.originCountry = "India";
                            this.offer.quantity = "1";
                            this.offer.unit = "Piece";

                        }
                        //this.offer.videos = this.videoDetails;
                        //this.offer.images = this.imageDetails;

                        this.videoDetails = this.offer.videos;
                        this.imageDetails = this.offer.images;


                        //this.showLoader = false;

                        this.firstUpload = false;

                        let firstUpload = document.getElementById('beforeUpload');
                        let afterUpload = document.getElementById('afterUpload');

                        firstUpload.style.display = "none";
                        afterUpload.style.display = "block";
                        this.counter++;
                        this.totalFile = [...this.imageDetails, ...this.videoDetails];
                        console.log(this.totalFile);

                    })
                    .catch(res => {
                        console.log('FAILURE!!');
                       // console.log(res.response);
                        if(res?.response && res?.response?.status === 413){
                            this.errMssg = 'Request file size should not be greater than 25 MB.'
                        }else{
                         if(res){
                         this.errMssg = res?.response?.data.message ? res?.response?.data.message : this.staticErrorMsg;
                         }

                        this.showLoader = false;
                       //this.hasApiError = true;
                        
                        }
                       
                        this.showLoader = false;
                        this.hasApiError = true;
                        setTimeout(() => {
                            this.hasApiError = false;
                        }, 5000);
                    });

            }

            return custCall;

            //}
        },
        documentUpload(ind, file) {
            if (this.isEditMode && this.qValuePublished) {
                this.uploadMediaUrl = `offers/v1/offers/attachments/document`;
                var formData = new FormData();
                formData.append("file[]", file);
                formData.append('displayIndex', this.uploadedDocuments.length + 1);
                //formData.append('viewType', 'more');
                //formData.append('cover', 'false');
                formData.append('offerId', this.offer.offerId);
            } else {
                this.uploadMediaUrl = `offers/v1/draft/offers/attachments/document`;
                var formData = new FormData();
                formData.append("file[]", file);
                formData.append('displayIndex', this.uploadedDocuments.length + 1);
                //formData.append('viewType', 'more');
                //formData.append('cover', 'false');
                formData.append('draftId', this.draftId);
            }


            this.$axios.$post(this.uploadMediaUrl, formData, {
                    timeout: 300000
                }).then((res) => {
                    this.offer.documents = res.payload.documents;
                    this.uploadedDocuments = this.offer.documents;

                    this.showLoader = false;
                })
                .catch(res => {
                    console.log('FAILURE!!');
                    this.errMssg = res.response.data.message ? res.response.data.message : this.staticErrorMsg;

                    //alert("Error! Please try again.");
                    this.showLoader = false;
                    this.hasApiError = true;
                    console.log(res);

                    setTimeout(() => {
                        this.hasApiError = false;
                    }, 5000);
                });




            //  const formData = new FormData();
            //  let uploadUrl = `offers/v1/draft/offers/attachments/document`;


            //     formData.append("file[]", file);
            //     formData.append('displayIndex', ind.toString());
            //     formData.append('draftId', this.draftId);

            //      const data = this.$axios.$post(uploadUrl,formData).then((res) => {

            //          this.offer.documents = res.payload.documents;
            //          this.uploadedDocuments = this.offer.documents;

            //          this.showLoader = false;


            //     })
            //     .catch(res=>{
            //     console.log('FAILURE!!');


            //     this.showLoader = false;
            //     });


        },
        deleteDocument(ind, id) {
            this.uploadedDocuments.splice(ind, 1);

            if (this.qValuePublished) {
                let reqDeleteImg = {
                    offerId: this.offer.offerId,
                    resourceId: id
                }

                this.$axios.$delete('offers/v1/offers/attachments/document', {
                    data: reqDeleteImg
                }).then((res) => {
                    //this.offer = res.payload;
                    this.offer.documents = res.payload.documents;

                }).catch(res => {
                    console.log('FAILURE!!');

                    //alert("Error! Please try again");
                    this.showLoader = false;
                });

            } else {
                let reqDeleteImg = {
                    draftOfferId: this.draftId,
                    resourceId: id
                }

                this.$axios.$delete('offers/v1/draft/offers/attachments/document', {
                    data: reqDeleteImg
                }).then((res) => {
                    this.offer.documents = res.payload.documents;
                }).catch(res => {
                    console.log('FAILURE!!');

                    //alert("Error! Please try again");
                    this.showLoader = false;
                });
            }

            // let reqDeleteImg = {
            //     draftOfferId: this.draftId,
            //     resourceId: id
            // }

            // this.$axios.$delete('offers/v1/draft/offers/attachments/document',{ data: reqDeleteImg }).then((res) => {
            //     this.offer = res.payload;

            // }).catch(res=>{
            //     console.log('FAILURE!!');

            //     //alert("Error! Please try again");
            //     this.showLoader = false;
            //     });


        },
        defaultCover() {
            let result = this.offer.images.every(elm => elm.cover == false);
            if (result) {
                this.offer.images[0].cover = true;
            }
            this.categoryTxt = this.offer.images[0].imageObjects;
            const suggestCategory = `search/v1/search/suggestion/category/multiple`;
            let reqPayload = {
                type: 'item',
                texts: this.categoryTxt
            }


            this.$axios.$post(suggestCategory, reqPayload).then((res) => {
                this.categoryTags = res.payload;
                this.offer.suggestedCategories = this.categoryTags;

                if (!this.isEditMode) {
                    this.draftPaylod = {
                        ...this.offer,
                        description: null,
                        offerId: this.qValuePublished ? this.offer.offerId : this.offer.draftOfferId,
                        offerType: "Item",
                        originCountry: "india"
                    };


                    this.$axios.$put(this.draftUrl, this.draftPaylod).then((res) => {
                        this.offer = res.payload;
                    }).catch(res => {
                        console.log('FAILURE!!');
                        this.showLoader = false;
                    });
                }
            }).catch(res => {
                console.log('FAILURE!!');

                //alert(res);
                this.showLoader = false;
            });


            //     setTimeout( () => {
            //         let hideDot = document.querySelectorAll('.selected');
            //         hideDot[0].classList.remove('hidden');

            //         let showDot = document.querySelectorAll('.notSelected');
            //         showDot[0].classList.add('hidden');

            //   }, 500);



            // if(this.totalFile.length > 1 && this.imageDetails.length > 0){
            //     this.disableBtn = false;
            // }else{
            //     this.disableBtn = true;
            // }

            // if(this.imageDetails.length > 1){
            //     this.disableBtn = false;
            // }else{
            //     this.disableBtn = true;
            // }
            //chnge for imge lenght must be 3 . it is chned from 0 to  2
            if (this.imageDetails.length > 2) {
                this.disableBtn = false;
            } else {
                this.disableBtn = true;
            }


        },
        selectCover(event, ind) {
            console.log(ind);
            // const selectedImg = document.querySelectorAll('.selected');
            // const deselectedImg = document.querySelectorAll('.notSelected');

            // for (let i = 0; i < selectedImg.length; i++) {
            //     selectedImg[i].classList.add('hidden');
            // }

            // for (let i = 0; i < deselectedImg.length; i++) {
            //     deselectedImg[i].classList.remove('hidden');
            // }

            this.offer.images = this.imageDetails;

            this.offer.images.forEach(elm => {
                if (elm.cover == true) {
                    elm.cover = false;
                }
            })


            this.offer.images[ind].cover = true;

            // console.log(this.offer);

            this.categoryTxt = this.offer.images[ind].imageObjects;

            //   console.log(this.offer.images[ind].imageObjects)

            const suggestCategory = `search/v1/search/suggestion/category/multiple`;

            let reqPayload = {
                type: 'item',
                texts: this.categoryTxt
            }

            this.$axios.$post(suggestCategory, reqPayload).then((res) => {
                this.categoryTags = res.payload;
                this.offer.suggestedCategories = this.categoryTags;

                this.draftPaylod = {
                    ...this.offer,
                    description: null,
                    offerId: this.qValuePublished ? this.offer.offerId : this.offer.draftOfferId,
                    offerType: "Item",
                    originCountry: "india"
                };


                this.$axios.$put(this.draftUrl, this.draftPaylod).then((res) => {
                    //this.draftId = res.payload.draftOfferId;
                    this.offer = res.payload;
                    //    console.log(res);
                }).catch(res => {
                    console.log('FAILURE!!');

                    //alert("Error! Please try again");
                    this.showLoader = false;
                });
            }).catch(res => {
                console.log('FAILURE!!');

                //alert(res);
                this.showLoader = false;
            });


            console.log(this.offer);




            // event.currentTarget.querySelector('.selected').classList.remove('hidden');
            // event.currentTarget.querySelector('.notSelected').classList.add('hidden');

            // if(this.imageDetails.length > 1){
            //     this.disableBtn = false;
            // }else{
            //     this.disableBtn = true;
            // }

        },
        resetCategory(sec) {

            this.isShowDivIfh = true;
            this.onlyVerticals = true;
            this.onlySearchResult = false;
            setTimeout(() => {
                if (sec == "info") {
                    document.getElementById('dropDownArea').focus();

                } else {
                    document.getElementById('dropDownArea2').focus();

                }

            }, 100);

        },
        resetCategoryDesire() {
            this.isShowDivIfh = true;
            setTimeout(() => {
                document.getElementById('dropDownArea2').focus();

            }, 100);

        },
        selectCategory(name, id) {
            //    console.log(this.offer.draftOfferId);
            this.product.category = name;
            this.isShowDivIfh = false;
            if (this.leafNodeBox = true) {
                this.leafNodeBox = false;
            }

            this.draftPaylod = {
                ...this.offer,
                categoryId: id,
                offerId: this.offer.draftOfferId,
                offerType: "Item",
                facets: []
            };

            if (this.$refs.basic.checkValidity() && !this.notValidZipcode) {
                this.showLoader = true;


                this.$axios.$put(this.draftUrl, this.draftPaylod).then((res) => {
                    //this.draftId = res.payload.draftOfferId;
                    //    console.log(res.payload);
                    this.offer = res.payload;
                    this.cid = res.payload.category;

                    this.offer.categoryId = id;
                    this.catIdStore = this.offer.categoryId;

                    this.disableBtn = false;

                    this.showLoader = false;

                }).catch(res => {
                    console.log('FAILURE!!');

                    //alert("Error! Please try again");
                    this.showLoader = false;
                });

            } else {


                this.$axios.$put(this.draftUrl, this.draftPaylod).then((res) => {
                    this.offer = res.payload;
                    this.cid = res.payload.category;

                    this.offer.categoryId = id;
                    this.catIdStore = this.offer.categoryId;
                    this.disableBtn = true;

                }).catch(res => {
                    console.log('FAILURE!!');
                    this.showLoader = false;
                });


            }


        },
        setItemCondition(condition, index) {
            this.conditionSelected = index;
            this.offer.itemCondition = condition;
        },


        allAddresses() {
            this.$axios.$get('users/v1/user/address/all').then((res) => {
                this.getAllAddress = res.payload;
                this.showLoader = false;
            }).catch(res => {
                console.log('FAILURE!!');
                this.showLoader = false;
            });
        },

        matchallAddresses() {
            this.$axios.$get('users/v1/user/address/all').then((res) => {
                this.getAllAddress = res.payload;
                if (this.selectedAddress != null || this.selectedAddress != undefined) {
                    if (this.getAllAddress.length > 0) {
                        this.getAllAddress.forEach((elm, i) => {
                            if (elm.addressLine == this.selectedAddress.addressLine) {
                                this.product.location = "address" + i;
                            }
                        })
                    }

                }


                this.showLoader = false;
            }).catch(res => {
                console.log('FAILURE!!');
                this.showLoader = false;
            });
        },

        checkAddressPopupClose() {
            this.$axios.$get('users/v1/user/address/all').then((res) => {
                console.log(res);
                this.getAllAddress = res.payload;
                this.showLoader = false;
                // if (this.$refs.basic.checkValidity() && this.getAllAddress.length > 0) {
                //     if(this.offer.location === null){
                //         this.offer.location = this.getAllAddress[0];
                //         this.offer.location.addressId = this.getAllAddress[0].id;
                //     }
                //     this.disableBtn = false;
                // }else{
                //     this.disableBtn = true;
                // }

                if (this.getAllAddress.length > 0) {
                    if (this.offer.location === null) {
                        this.offer.location = this.getAllAddress[0];
                        this.offer.location.addressId = this.getAllAddress[0].id;
                    } else {
                        //console.log(this.offer.location);
                        this.getAllAddress.forEach((elm, i) => {
                            if (elm.addressLine == this.offer.location.addressLine) {
                                this.product.location = "address" + i;
                            }
                        })
                    }

                    if (this.$refs.basic.checkValidity()) {
                        this.disableBtn = false;
                    } else {
                        this.disableBtn = true;
                    }

                    //this.disableBtn = false;
                }
                // else{
                //     this.disableBtn = true;
                // }
            }).catch(res => {
                console.log('FAILURE!!');
                this.showLoader = false;
            });
        },
        handleDesireChange(evt) {
            let keyName = evt.target.name;
            if (keyName.includes("desireDescription")) {
                this.offer.desire.description = evt.target.value;
            }

            if (this.$refs.desire.checkValidity()) {
                console.log(this.offer.desire.desireType);
                if (this.offer.desire.desireType == null) {
                    this.offer.desire.desireType = "item";
                    this.offer.exchangeMode = "barter";
                }
                this.disableBtn = false;
            }
        },
        handleChange(evt) {
            let keyName = evt.target.name;

            if (evt.target.name == "exchangeMode") {
                // console.log("exchangeMode")
                if (evt.target.value == "Money") {
                    this.isMoney = true;
                    this.offer.dimensions = [];
                    this.offer.dimensions.push({
                        "quantity": 1,
                        "length": 1,
                        "breadth": 1,
                        "height": 1,
                        "weight": 1

                    })

                    this.offer.productDimension = {};

                } else {
                    this.isMoney = false;
                    this.offer.productDimension = null;
                    this.offer.dimensions = null;

                }

            }
            //console.log(keyName);

            if (keyName.includes("package")) {

                let subKeyNameExtract = keyName.split("-");
                let subKeyName = subKeyNameExtract[1];
                this.offer.dimensions[0][subKeyName] = evt.target.value;
            }
            //commented Out Beacuse No product Dimension is here
            // else if(keyName.includes("item")){
            //    console.log("item-------------------------------")
            //     let subKeyNameExtract = keyName.split("-");
            //     let subKeyName = subKeyNameExtract[1];
            //     this.offer.productDimension[subKeyName] = evt.target.value;
            // }
             if (keyName.includes("itemCondition")) {

                if (evt.target.value === 'New') {
                    this.showProductAgeInp = false
                    this.product.age = 1
                    if (this.product.age === 1) {
                        this.disableBtn = false
                    }
                    this.offer[keyName] = evt.target?.value;
                       if(+this.product.unitOfferValuation){
                        this.setNegotiableMessage()
                       }
                        
                    // this.disableBtn = false
                } else {
                    if(+this.product.unitOfferValuation){
                        this.setNegotiableMessage()
                       }
                    this.showProductAgeInp = true
                    this.product.age = null
                    this.offer[keyName] = evt.target?.value;
                    // if(this.product.age === null){
                    //     this.disableBtn = true
                    // }
                }
            } else {
                this.offer[keyName] = evt.target?.value;
            }

            if (keyName.includes("freeShippingType")) {
                if (evt.target.value === '' || evt.target.value === 'WITHIN_INDIA') {
                    this.showFreeShippingLocationInp = false
                    this.product.freeShippingLocation = null
                    this.freeShippingValidation = false

                    this.offer[keyName] = evt.target?.value;
                } else {
                    this.showFreeShippingLocationInp = true
                    this.offer[keyName] = evt.target?.value;
                    this.freeShippingValidation = true
                }
            }


            if (keyName.includes("freeShippingLocation")) {
                if (this.offer['freeShippingType'] === 'WITHIN_CITY' && evt.target.value === '') {
                    this.freeShippingValidation = true;
                    this.offer[keyName] = evt.target?.value;
                } else {
                    this.freeShippingValidation = false
                    this.offer[keyName] = evt.target?.value;
                }
            }


            if (keyName.includes("returnType")) {

                console.log("evt.target.value",evt.target.value)
               if(evt.target.value === 'RETURN' || evt.target.value === 'RETURN_AND_REPLACE' ){
                this.showReturnIp = true
                //this.product.withinDays = 'SEVEN_DAYS'
                //console.log("this.product.withinDays",this.product.withinDays)
                if(this.product.withinDays){
                    this.returnDaysValidation = false
                }else{
                    this.returnDaysValidation = true
                }
                
               }else{
                this.showReturnIp = false
                this.product.withinDays = ''
                this.returnDaysValidation = false
               }
            }

            if (keyName.includes("withinDays")) {

         // console.log("evt.target.value",evt.target.value)
          if(evt.target.value){
            this.returnDaysValidation = false
           // console.log("within Days Value is null")
          }else{
            this.returnDaysValidation = true
          //  console.log("within Days Value is not  null")
          }
          }




            if (keyName.includes("productAge")) {
                if (evt.target.value < 1) {
                    evt.target.value = '';
                    this.product.age = null;
                    this.offer.productAge = null;
                } else if (evt.target.value > 999999) {
                    let pAge = evt.target.value.slice(0, -1);
                    this.product.age = pAge;
                    this.offer.productAge = pAge;
                } else {
                    this.ageOfProduct = this.offer.productAge;
                }
            } 
             if (keyName.includes("unitOfferValuation")) {
                if (evt.target.value < 1) {
                    this.isMrpValidated = true 
                    this.product.unitOfferValuation = null;
                    this.offer.unitOfferValuation = null;
                } else if (evt.target.value > 999999) {
                    let uValue = evt.target.value.slice(0, -1);
                    this.product.unitOfferValuation = uValue;
                    this.offer.unitOfferValuation = uValue;
                }else if (evt.target.value > 1){

                  //  console.log("this.product.price",this.product.price)
                    //console.log("this.product.unitOfferValuation",this.product.unitOfferValuation)
                    if(this.product.price){
                   
                    if(+this.product.price < +this.product.unitOfferValuation){
                     console.log("---------------------------------unit offervaluation is bigger thn price")
                     this.isMrpValidated = false  
                    }else{
                     this.isMrpValidated = true 
                     this.setNegotiableMessage()
                     
                    }
                    }else{
                    this.setNegotiableMessage()
                    this.isMrpValidated = true  
                    }
                   
                 //console.log("--------------------------unit offer vluation greater than 1",this.isMrpValidated)
                }
            }  
            
            if (keyName.includes("quantity")) {
                if (evt.target.value < 1) {
                    this.product.quantity = null;
                    this.offer.quantity = null;
                } else if (evt.target.value > 999999) {
                    let quant = evt.target.value.slice(0, -1);
                    this.product.quantity = quant;
                    this.offer.quantity = quant;
                }else if (evt.target.value > 1) {
                    this.offer['quantity'] = this.product.quantity;
                   
                }
            }  
            
            if (keyName.includes("price")) {
                if (evt.target.value < 1) {
                    this.product.price = null;
                    this.offer.price = null;
                    this.isMrpValidated = true
                } else if (evt.target.value > 999999) {
                    let pValue = evt.target.value.slice(0, -1);
                    this.product.price = pValue;
                    this.offer.price = pValue;

                }
               // condition Added For Market Price And Unit OfferValuation
                else if(evt.target.value > 1){
                  //  console.log("this.product.unitOfferValuation",this.product.unitOfferValuation)
                    if(+this.product.unitOfferValuation && +this.product.price >= +this.product.unitOfferValuation){
                   // console.log("Value of Unitoffervaluation and Price",this.product.price , this.product.unitOfferValuation)
                     this.isMrpValidated = true  
                    }else{
                      if(this.product.unitOfferValuation === null){
                        this.isMrpValidated = true  
                      }else{
                        this.isMrpValidated = false
                      }
                          
                    }
                  //  console.log("--------------------------Price greater than 1",this.isMrpValidated)
                }
            }

            if (keyName.includes("description")) {
                this.descriptionVal = evt.target.value;
                if (evt.target.value.length < 2 || evt.target.value.length > 3000) {
                    if (evt.target.value.length == 0) {
                        this.descriptionVal = null;
                        this.offer.description = null;
                        this.descValidation = false;
                    } else {
                       
                        this.descValidation = true;
                    }
                    //this.descValidation = true;
                } else if (evt.target.value.length == 3000) {
                    this.descValidation = true;

                } else {
                    this.descValidation = false;
                    if(this.$isPhoneNoEsixts(evt.target.value) || this.$isemailEsixts(evt.target.value) || this.$isurlEsixts(evt.target.value)){
                        this.isDesValidate = false
                      //  this.disableBtn = true
                    }else{
                        this.isDesValidate = true  
                    }
                    
                }
            }

            if (keyName.includes("mobile")) {

                if (evt.target.value.length === 0) {
                    this.mobileValidation = false
                    this.product.mobile = null
                } else if (evt.target.value.length > 0) {

                    if (!this.$isValidMobile(evt.target.value)) {

                        this.mobileValidation = true
                        this.disableBtn = true;

                    } else {
                        this.mobileValidation = false
                        // this.mobileReqValidation = false
                        this.disableBtn = false
                    }
                }
            }

            if (keyName.includes("name")) {
                //this.descriptionVal = evt.target.value;
                if (evt.target.value.length < 1 || evt.target.value.length > 300) {
                    this.nameValidation = true;
                } else {
                    this.nameValidation = false;

                    if(this.$isPhoneNoEsixts(evt.target.value) || this.$isemailEsixts(evt.target.value) || this.$isurlEsixts(evt.target.value)){
                        this.isNameValidate = false
                      //  this.disableBtn = true
                    }else{
                        this.isNameValidate = true  
                    }
                }
            }
            if (keyName.includes("zip")) {
                //this.descriptionVal = evt.target.value;
                if (evt.target.value.length < 6) {
                    this.zipValidation = true;
                    this.offer.location = null;
                    this.validZipcode = false;
                    this.notValidZipcode = false;
                } else if (evt.target.value.length == 6) {
                    this.showLoader = true;
                    this.zipValidation = false;



                    const verifyPinCode = `offers/v1/offers/verify-pincode/` + evt.target.value;

                    this.$axios.$get(verifyPinCode).then((res) => {

                        console.log('success');
                        this.offer.location = {
                            zip: evt.target.value
                        }
                        this.validZipcode = true;
                        this.showLoader = false;

                    }).catch(res => {
                        console.log('FAILURE!!');

                        //alert("Error! Please try again");
                        this.showLoader = false;
                        this.validZipcode = false;
                        this.notValidZipcode = true;

                        if (!this.disableBtn) {
                            this.disableBtn = true;
                        }
                    });

                }
            }

           // console.log("this.product.quantity--------------",this.product.quantity,this.product.itemCondition)

            if (this.$refs.basic.checkValidity() && this.isMrpValidated && this.product.mobile !== null && this.product.age !== null && !this.notValidZipcode && this.product.category != null && !this.mobileValidation &&
             !this.freeShippingValidation && !this.returnDaysValidation && this.product.price !== null && this.isDesValidate && this.isNameValidate && this.product.quantity !== null &&  this.product.unitOfferValuation !== null ) {
                 console.log("this.disableBtn in checkavilibality ",this.disableBtn)
                this.disableBtn = false;
            } else {

                console.log("not checkavilibality section whre ref basic is not ")
                if (!this.$refs.basic.checkValidity() && this.isMrpValidated &&
                    this.product.mobile !== null &&
                    this.product.quantity !== null &&
                    this.product.unitOfferValuation !== null &&
                    this.product.age !== null &&
                    !this.notValidZipcode &&
                    this.product.category !== null &&
                    this.product.name != '' &&
                    !this.descValidation &&
                    this.isNameValidate  &&
                    this.isDesValidate &&
                    this.product.zip != null &&
                    this.product.price !== null &&//    && this.notValidZipcode 
                    !this.zipValidation &&
                    !this.mobileValidation &&
                    !this.freeShippingValidation && !this.returnDaysValidation) {
                    console.log("------------------------------------------------")
                    this.disableBtn = false;
                } else {
                    this.disableBtn = true;
                }


            }




        },

        setNegotiableMessage(){

            if(+this.product.unitOfferValuation && +this.product.unitOfferValuation > 100 ){
                if(this.product.itemCondition && this.product.itemCondition === 'Used'){
                        this.negotiablePrice = Math.round(+this.product.unitOfferValuation * .70)
                        this.offPercentage = '30%'
                     }else{
                        this.negotiablePrice = Math.round(+this.product.unitOfferValuation * .85)
                        this.offPercentage = '15%'
                     } 
            }else{
                this.negotiablePrice = null
            }
            
        },

        isNumber(evt) {
            evt = evt ? evt : window.event;
            var charCode = evt.which ? evt.which : evt.keyCode;
            if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105) &&
                charCode !== 46
            ) {
                evt.preventDefault();
            } else if (evt.key === '0' && (evt.target.value == "" || evt.target.value == null)) {
                evt.preventDefault();
            } else if ((evt.key >= '!' && evt.key <= ')') || evt.key === '@' || evt.key === '^' || evt.key === '*') {
                evt.preventDefault();
            } else {
                return true;
            }
        },


        async checkPinCode(zipCode) {
            try {
                const url = `offers/v1/offers/verify-pincode/` + zipCode;
                const data = await this.$axios.$get(url);
                if (data.success) {
                    this.offer.location = {
                        zip: data?.payload?.zip
                    }
                    this.validZipcode = true;
                } else {
                    // this.isUserReported = false

                }
            } catch (error) {
                this.validZipcode = false;
                this.notValidZipcode = true;
                if (!this.disableBtn) {
                    this.disableBtn = true;
                }
                console.log(error);
            }
        },


        changeSaved(evt) {

            console.log("this.isDesValidate",this.isDesValidate)
            if (!this.isEditMode || (this.isEditMode && this.qValueDraft && !this.qValuePublished)) {
                
                let keyName = evt.target.name;

                if (keyName.includes("zip") && (this.notValidZipcode || this.zipValidation)) {
                    return false 
                } else if (keyName.includes("description") && (this.descValidation || !this.isDesValidate)) {
                    return false
                } else if (keyName.includes("mobile") && this.mobileValidation) {
                    this.offer['mobile'] = this.product.mobile
                    return false
                }else if (keyName.includes("price") && !this.isMrpValidated) {
                    this.offer['price'] = this.product.price
                    return false
                }else if (keyName.includes("name") && !this.isNameValidate) {
                    return false
                }



                this.offer[keyName] = evt.target.value;
                this.offer['mobilePrivate'] = this.product.mobilePrivate ? false : true;
               // this.offer['quantity'] = this.product.quantity

               // console.log("this.offer['quantity']",this.offer['quantity'],this.product.quantity)

                //Draft Mobile No saving From USer mobile No Newly Added
                if (!keyName.includes("mobile")) {
                    this.offer['mobile'] = this.product?.mobile;
                }

                if (this.offer?.freeShippingType === 'WITHIN_INDIA' || this.offer?.freeShippingType === '') {
                    this.offer['freeShippingLocation'] = ''
                }

                if (this.offer?.itemCondition === null) {
                    this.offer['itemCondition'] = 'New'
                }

              console.log("this.offer,this.quantity---------------------",this.offer ,this.product)

           //   return

//                 this.offer = {
//     ...this.offer,
//     quantity : this.product.quantity
// }
 
               // this.offer.quantity = this.product.quantity
                this.offer.offerId = this.offer.draftOfferId;
                this.$axios.$put(this.draftUrl, this.offer).then((res) => {
                }).catch(res => {
                    console.log('FAILURE!!');
                   
                });

            }
        },
        setLocation(ind) {
            this.offer.location = this.getAllAddress[ind];
            this.offer.location.addressId = this.getAllAddress[ind].id;
        },
        saveBasicInfo() {

            this.offer.offerId = this.offer.draftOfferId;

            if (this.offer.categoryId == null) {
                this.offer.categoryId = this.catIdStore;
            }

            this.draftPaylod = {
                ...this.offer,
                exchangeMode: this.product.exchangeMode,

                // newly added for mobile and checkbox
                mobile: this.product.mobile,
                mobilePrivate: this.product.mobilePrivate ? false : true,

                //For item condition
                itemCondition: this.product.itemCondition

            }

            // this.draftPaylod = {
            //     ...this.offer,
            //     exchangeMode: this.product.exchangeMode
            // }

            this.$axios.$put(this.draftUrl, this.offer).then((res) => {
                //this.draftId = res.payload.draftOfferId;
                this.offer = res.payload;
                this.offer.suggestedCategories = this.categoryTags;
                console.log(res);
            }).catch(res => {
                console.log('FAILURE!!');

                //alert("Error! Please try again");
                this.showLoader = false;
            });
        },
        addTags(itemName) {
            this.showLoader = true;
            if (this.mandatoryTags.length != 0) {
                this.mandatoryTags[0].selectedName = itemName;
                this.mandatoryTags[0].values = [];
                this.mandatoryTags[0].values.push(itemName);
                this.addedTags.push(this.mandatoryTags[0]);
                this.mandatoryTags.splice(0, 1);
                if (this.mandatoryTags.length > 0) {
                    this.attrName = this.mandatoryTags[0].label;
                    this.tagsValue = this.mandatoryTags[0].values;
                }

            } else if (this.mandatoryTags.length == 0 && this.optionalTags.length != 0) {
                this.optionalTags[0].selectedName = itemName;
                this.optionalTags[0].values = [];
                this.optionalTags[0].values.push(itemName);
                this.addedTags.push(this.optionalTags[0]);
                this.optionalTags.splice(0, 1);
                if (this.optionalTags.length > 0) {
                    this.OptAttrName = this.optionalTags[0].label;
                    this.OptTagsValue = this.optionalTags[0].values;
                }

            }

            this.draftPaylod = {
                ...this.offer,
                categoryId: this.offer.category.categoryId,
                offerId: this.offer.draftOfferId,
                offerType: "Item",
                facets: this.addedTags
            }

            this.$axios.$put(this.draftUrl, this.draftPaylod).then((res) => {
                //this.draftId = res.payload.draftOfferId;
                console.log(res);
                this.offer = res.payload;
                this.showLoader = false;
            }).catch(res => {
                console.log('FAILURE!!');

                //alert("Error! Please try again");
                this.showLoader = false;
            });


            if (this.mandatoryTags.length == 0) {
                this.disableBtn = false;
            }




            //     if(this.tagsInfo.length > 0){

            //         this.attrName = this.tagsInfo[0].label;
            //         this.tagsValue = this.tagsInfo[0].values;




            // }else{

            // }




            // console.log(this.addedTags);
        },
        skipOpt() {

            let first = this.optionalTags.splice(0, 1);
            this.optionalTags.push(first[0]);
            // this.optionalTags.forEach((item,i) =>{
            //     if(i === 1){
            //         this.optionalTags.splice(i, 1);
            //         this.optionalTags.unshift(item);

            //     }
            // });
            //console.log(this.optionalTags);
            this.OptAttrName = this.optionalTags[0].label;
            this.OptTagsValue = this.optionalTags[0].values;
        },
        removeTags(remove, ind) {
            this.showLoader = true;
            this.addedTags.splice(ind, 1);
            let removedTag = remove;
            //console.log(this.mandStore);

            if (remove.mandatory) {
                this.mandatoryTags = [removedTag, ...this.mandatoryTags];
                //this.mandatoryTags[0].selectedName  = itemName;
                if (this.mandatoryTags.length > 0) {
                    this.attrName = this.mandatoryTags[0].label;
                    //this.tagsValue = this.mandStore[ind].values;
                    //this.mandatoryTags[0].values = this.mandStore[ind].values;

                    this.mandStore.forEach(ele => {
                        ele.values.forEach(subEle => {
                            if (subEle == removedTag.values[0]) {
                                this.tagsValue = ele.values;
                                this.mandatoryTags[0].values = ele.values;
                            }
                        })
                    })


                }
            } else {
                let removedTag = remove;

                //  console.log(this.optionalTags);
                //if(this.optionalTags.length > 0){

                //let optIndex = ind - this.mandatoryTags.length;
                //console.log(optIndex -1);

                this.optStore.forEach(ele => {
                    ele.values.forEach(subEle => {
                        if (subEle == removedTag.values[0]) {
                            this.optionalTags = [removedTag, ...this.optionalTags];
                            this.OptAttrName = this.optionalTags[0].label;
                            this.OptTagsValue = ele.values;
                            this.optionalTags[0].values = ele.values;
                        }
                    })
                })
                // this.tagsValue = this.optStore[0].values;

                //}

            }

            this.draftPaylod = {
                ...this.offer,
                categoryId: this.offer.category.categoryId,
                offerId: this.offer.draftOfferId,
                offerType: "Item",
                facets: this.addedTags
            }

            this.$axios.$put(this.draftUrl, this.draftPaylod).then((res) => {
                //this.draftId = res.payload.draftOfferId;
                // console.log(res);
                this.offer = res.payload;
                this.showLoader = false;
            }).catch(res => {
                console.log('FAILURE!!');

                //alert("Error! Please try again");
                this.showLoader = false;
            });

            if (this.mandatoryTags.length == 0) {
                this.disableBtn = false;
            } else {
                this.disableBtn = true;
            }


            //console.log(this.mandatoryTags);

        },
        setBarterCondition(condition, index) {
            this.conditionSelected = index;
            if (condition == "Product") {
                setTimeout(() => {
                    if (this.$refs.desire.checkValidity()) {
                        this.disableBtn = false;
                    } else {
                        this.disableBtn = true;
                    }
                }, 100);

                this.forProduct = true;
                this.forMoney = false;
                this.forAnything = false;
                if (this.offer.exchangeMode != "Barter") {
                    this.offer.exchangeMode = "Barter";
                    this.offer.price = null;
                }
            } else if (condition == "Anything") {
                this.disableBtn = false;
                this.forProduct = false;
                this.forMoney = false;
                this.forAnything = true;
                if (this.offer.desire === null) {
                    this.offer.desire = {};
                }
                this.offer.desire.desireType = "Anything";
                this.offer.price = null;
                this.offer.exchangeMode = "Barter";
               // console.log(this.offer);
                //this.offer.desire.description = "null";
            } else {
                this.disableBtn = false;
                this.forProduct = false;
                this.forMoney = true;
                this.forAnything = false;
                this.offer.exchangeMode = "Money";
                this.product.price = this.offer.unitOfferValuation;
                this.offer.price = this.offer.unitOfferValuation;
                if (this.offer.desire != null) {
                    this.offer.desire = null;
                }
            }
            //this.offer.itemCondition = condition;
        },


        async checkIfmobileAddedInProfile() {
            try {
                let url = `/users/v1/user/profile`;
                const data = await this.$axios.$get(url);
                this.userDetails = data.payload;
                if(this.userDetails.mobile){
                 return  true
                }else{
                 return false
                }
            } catch (error) {
                console.log(error);
            }
        },

      async  submitOffer() {

            if(!this.isEmailExists){
                this.showAddEmailPopup = true
                return false
            }

           this.showLoader = true;

           const mobNoAddedInProfile = await this.checkIfmobileAddedInProfile()

           if(!mobNoAddedInProfile){
            this.showAddMobilePopup = true
            return false
           }

          

         //   console.log("this.product submit", this.product)
            // console.log("this.product",this.offer)
            // if(!this.isPhoneNoEsixtsinProfile){
            //     this.showAddMobilePopup = true
            //     return false
            // }

            // return
          //  this.showLoader = true;

            

            if (this.offer.description === null) {
                this.offer.description = this.descriptionVal;
            }

            //  console.log(this.offer.description);

            this.disableBtn = false;
            this.forProduct = false;
            this.forMoney = false;
            this.forAnything = true;
            if (this.offer.desire === null) {
                this.offer.desire = {};
            }
            this.offer.desire.desireType = "Anything";
            // if(this.offer.price == ""){
            //     this.offer.price = null;
            // }
            this.offer.exchangeMode = "Barter";
           //  console.log(this.offer);

             

            let payload = {
                ...this.offer,
                productAge: this.ageOfProduct,
                categoryId: this.offer.category.categoryId,
                draftId: this.offer.draftOfferId,
                quantity: this.product.quantity,

                //Added For mobile mobilePrivate
                mobile: this.product.mobile,
                //Reverse the Value Of mobile Private checkbox
                mobilePrivate: this.product.mobilePrivate ? false : true,
                itemCondition: this.product.itemCondition,
                freeShippingType: this.product.freeShippingType,
                freeShippingLocation: this.product.freeShippingLocation,
                cod: this.product.cod,
                returnType: this.product.returnType,
                withinDays: this.product.withinDays


            }

          


            if (!this.isEditMode) {
                this.$axios.$post('offers/v1/offers/item', payload).then((res) => {
                    //this.draftId = res.payload.draftOfferId;


                    if (res.success) {
                        this.offer = res.payload;
                        //this.listSuccessModal = true;
                        this.listSuccessModal = false;
                        this.listName = res.payload.name;
                        this.coinsCredited = res.payload.coinsCredited;

                        //this.$router.push('/p/'+this.slugify(this.offer.name)+'/'+this.offer.offerId);
                        //        console.log(this.offerRedirect);
                        window.localStorage.setItem("listingCreated", "success");
                        //console.log(this.offerRedirect);
                        if (this.offerRedirect === null) {
                            //this.$router.push(this.localePath('/matches'));
                            window.location.href = window.location.origin + this.localePath('/p/' + this.$createSlugUrl(this.offer) + '/' + this.offer.offerId)
                            // this.$router.push(this.localePath('/p/'+this.$createSlugUrl(this.offer)+'/'+this.offer.offerId));
                        } else {
                            this.$router.push(this.localePath(this.offerRedirect));
                        }
                        //this.$router.push('/matches');
                        this.showLoader = false;
                        // console.log('this.offer:', this.offer);
                        this.logEvent();
                    } else {
                        this.showLoader = false;
                    }

                }).catch(res => {
                    console.log('FAILURE!!');
                    //alert("Error! Please try again");
                    this.errMssg = res.response.data.message ? res.response.data.message : this.staticErrorMsg;
                    this.showLoader = false;
                    this.hasApiError = true;

                    setTimeout(() => {
                        this.hasApiError = false;
                    }, 5000);
                });
            } else if (this.isEditMode && this.qValueDraft && !this.qValuePublished) {
                this.$axios.$post('offers/v1/offers/item', payload).then((res) => {
                    //this.draftId = res.payload.draftOfferId;


                    if (res.success) {
                        this.offer = res.payload;
                        //this.listSuccessModal = true;
                        this.listSuccessModal = false;
                        this.listName = res.payload.name;
                        this.coinsCredited = res.payload.coinsCredited;

                        //this.$router.push('/p/'+this.slugify(this.offer.name)+'/'+this.offer.offerId);
                        // console.log(res.success);
                        window.localStorage.setItem("listingCreated", "success");
                        //this.$router.push(this.localePath('/matches'));
                        window.location.href = window.location.origin + this.localePath('/p/' + this.$createSlugUrl(this.offer) + '/' + this.offer.offerId)
                        // this.$router.push(this.localePath('/p/'+this.$createSlugUrl(this.offer)+'/'+this.offer.offerId));
                        this.showLoader = false;
                    } else {
                        this.showLoader = false;
                    }

                }).catch(res => {
                    console.log('FAILURE!!');
                    this.errMssg = res.response.data.message ? res.response.data.message : this.staticErrorMsg;
                    //alert("Error! Please try again");
                    this.showLoader = false;
                    this.hasApiError = true;

                    setTimeout(() => {
                        this.hasApiError = false;
                    }, 5000);
                });
            } else if (this.isEditMode && this.qValueDraft && this.qValuePublished) {
                this.$axios.$put('offers/v1/offers/item', payload).then((res) => {
                    //this.draftId = res.payload.draftOfferId;


                    if (res.success) {
                        this.offer = res.payload;
                        //this.listSuccessModal = true;
                        this.listSuccessModal = false;
                        this.listName = res.payload.name;
                        this.coinsCredited = res.payload.coinsCredited;

                        this.$router.push(this.localePath('/p/' + this.$createSlugUrl(this.offer) + '/' + this.offer.offerId));
                        // console.log(res.success);
                        //window.localStorage.setItem("listingCreated","success");
                        //this.$router.push('/matches');
                        this.showLoader = false;
                    } else {
                        this.showLoader = false;
                    }

                }).catch(res => {
                    console.log('FAILURE!!');
                    this.errMssg = res.response.data.message ? res.response.data.message : this.staticErrorMsg;
                    //alert("Error! Please try again");
                    this.showLoader = false;
                    this.hasApiError = true;

                    setTimeout(() => {
                        this.hasApiError = false;
                    }, 5000);
                });
            }




        },
        gotoList() {
            // this.$router.push('/p/'+this.slugify(this.offer.name)+'/'+this.offer.offerId);
            window.location.href = window.location.origin + this.localePath('/p/' + this.$createSlugUrl(this.offer) + '/' + this.offer.offerId)
        },
        searchCat(evt) {

            if (evt.target.value.length >= 1) {
                this.onlyVerticals = false;
                this.onlySearchResult = true;
            } else if (evt.target.value.length == 0 || evt.target.value == "") {
                this.onlyVerticals = true;
                this.onlySearchResult = false;
            }


            if (evt.target.value.length > 2) {
                this.$axios.$get('search/v1/search/suggestion/category', {
                    params: {
                        text: evt.target.value,
                        type: "Item"
                    }
                }).then((res) => {
                    this.catBreadCrumb = [];
                    this.searchCatArr = res.payload;

                    // console.log(this.searchCatArr);

                    this.searchCatArr.forEach(elm => {
                        var name = elm.breadcrumbs[elm.breadcrumbs.length - 1];
                        var fullPath = JSON.stringify(elm.breadcrumbs);
                        fullPath = fullPath.replace('[', '').replace(']', '').replace(']', '').replaceAll('"', '').replaceAll(',', '/');
                        //console.log(fullPath);
                        this.catBreadCrumb.push({
                            string: fullPath,
                            name: name
                        });
                    });


                })
            }
        },
        searchCatDesire(evt) {
            if (evt.target.value.length > 2) {
                this.$axios.$get('search/v1/search/suggestion/category', {
                    params: {
                        text: evt.target.value,
                        type: "Item"
                    }
                }).then((res) => {
                    this.searchCatArrDesire = res.payload;
                })
            }
        },
        selectCustomCat(name, ind) {
            // console.log(this.offer.draftOfferId);
            // console.log(this.searchCatArr);
            this.product.category = name;
            this.isShowDivIfh = false;
            this.product.customCategory = null;

            this.catIdStore = this.searchCatArr[ind].categoryId;

            this.draftPaylod = {
                ...this.offer,
                categoryId: this.searchCatArr[ind].categoryId,
                offerId: this.offer.draftOfferId,
                offerType: "Item",
                facets: []
            };

            if (this.$refs.basic.checkValidity() && !this.notValidZipcode) {
                this.showLoader = true;
                this.$axios.$put(this.draftUrl, this.draftPaylod).then((res) => {

                    // console.log(res.payload);
                    this.offer = res.payload;
                    this.cid = this.searchCatArr[ind];
                    this.offer.categoryId = this.searchCatArr[ind].categoryId;
                    this.disableBtn = false;
                    this.showLoader = false;

                }).catch(res => {
                    console.log('FAILURE!!');
                    this.showLoader = false;
                });

            } else {
                this.$axios.$put(this.draftUrl, this.draftPaylod).then((res) => {
                    // console.log(res.payload);
                    this.offer = res.payload;
                    this.cid = this.searchCatArr[ind];
                    this.offer.categoryId = this.searchCatArr[ind].categoryId;

                    if (this.$refs.basic.checkValidity() && !this.notValidZipcode) {
                        this.disableBtn = false;
                    } else {
                        this.disableBtn = true;
                    }

                }).catch(res => {
                    console.log('FAILURE!!');

                    //alert("Error! Please try again");
                    this.showLoader = false;
                });
            }



        },
        slugify(text) {
            return text
                .toString() // Cast to string
                .toLowerCase() // Convert the string to lowercase letters
                .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
                .trim() // Remove whitespace from both sides of a string
                .replace(/\s+/g, '-') // Replace spaces with -
                .replace(/[^\w\-]+/g, '') // Remove all non-word chars
                .replace(/\-\-+/g, '-') // Replace multiple - with single -
        },
        removeImage(ind, id) {
            this.showLoader = true;
            this.imageDetails.splice(ind, 1);
            this.totalFile = [...this.imageDetails, ...this.videoDetails];
            console.log("this.totalFile",this.totalFile.length)
            this.enableBrowseButton(this.totalFile)
            //var result = [...this.imageDetails.slice(0, ind), ...this.imageDetails.slice(ind + 1)];


            //this.offer.images = this.imageDetails;
            // console.log(this.draftId);
            // console.log(id);

            if (this.isEditMode) {
                if (this.imageDetails && this.imageDetails.length > 3) {
                    this.showRemoveBtn = true
                } else {
                    this.showRemoveBtn = false
                }
            }

            if (this.qValuePublished) {
                let reqDeleteImg = {
                    offerId: this.offer.offerId,
                    resourceId: id
                }

                this.$axios.$delete('offers/v1/offers/attachments/image', {
                    data: reqDeleteImg
                }).then((res) => {
                    this.offer = res.payload;
                    this.showLoader = false;
                }).catch(res => {
                    console.log('FAILURE!!');

                    //alert("Error! Please try again");
                    this.showLoader = false;
                });

                if (this.imageDetails.length < 3) {
                    this.disableBtn = true;
                }

            } else {
                let reqDeleteImg = {
                    draftOfferId: this.draftId,
                    resourceId: id
                }

                this.$axios.$delete('offers/v1/draft/offers/attachments/image', {
                    data: reqDeleteImg
                }).then((res) => {
                    this.offer = res.payload;
                    this.showLoader = false;
                }).catch(res => {
                    console.log('FAILURE!!');

                    //alert("Error! Please try again");
                    this.showLoader = false;
                });


                // if(this.imageDetails.length <= 1){
                //     this.disableBtn = true;
                // }

                // this.imageDetails.length < 1  change to this.imageDetails.length < 3 
                if (this.imageDetails.length < 3) {
                    this.disableBtn = true;
                }

            }

            // let reqDeleteImg = {
            //     draftOfferId: this.draftId,
            //     resourceId: id
            // }




        },
        removeVideo(ind, id) {

            this.videoDetails.splice(ind, 1);
            this.totalFile = [...this.imageDetails, ...this.videoDetails];
            console.log("this.totalFile",this.totalFile.length)
            this.enableBrowseButton(this.totalFile)
            //var result = [...this.imageDetails.slice(0, ind), ...this.imageDetails.slice(ind + 1)];
            //this.offer.videos = this.videoDetails;


            if (this.qValuePublished) {
                let reqDeleteImg = {
                    offerId: this.offer.offerId,
                    resourceId: id
                }

                this.$axios.$delete('offers/v1/offers/attachments/video', {
                    data: reqDeleteImg
                }).then((res) => {
                    this.offer = res.payload;

                }).catch(res => {
                    console.log('FAILURE!!');

                    //alert("Error! Please try again");
                    this.showLoader = false;
                });

            } else {
                let reqDeleteImg = {
                    draftOfferId: this.draftId,
                    resourceId: id
                }

                this.$axios.$delete('offers/v1/draft/offers/attachments/video', {
                    data: reqDeleteImg
                }).then((res) => {
                    this.offer = res.payload;

                }).catch(res => {
                    console.log('FAILURE!!');
                    this.showLoader = false;
                });
            }

            // let reqDeleteImg = {
            //     draftOfferId: this.draftId,
            //     resourceId: id
            // }

            // this.$axios.$delete('offers/v1/draft/offers/attachments/video',{ data: reqDeleteImg }).then((res) => {
            //     this.offer = res.payload;

            // }).catch(res=>{
            //     console.log('FAILURE!!');


            //     this.showLoader = false;
            //     });


            // if(this.imageDetails.length <= 1){
            //     this.disableBtn = true;
            // }

            if (this.imageDetails.length < 3) {
                this.disableBtn = true;
            }

        },
        enableBrowseButton(totalFileList){
         console.log("totalFileList",totalFileList.length)
         if(totalFileList.length < 10){
            this.disableBrowseButton = false
         }
        },
        editOrAddAddressCL(addressDet) {
            //this.showAddAddress = true;
            //  console.log("Edit Address", addressDet);
            if ((addressDet.mode === "edit") || (addressDet.mode === "add")) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                this.showAddAddress = true;
                //  console.log(this.showAddAddress);
                if (addressDet.mode === "add") {
                    addressDet.addressDet.name = this.authUser.displayName
                    addressDet.addressDet.email = this.authUser.email
                    addressDet.addressDet.phoneNumber = this.authUser.phoneNumber
                }
                this.editOrAddAddressDetails = addressDet;

                //console.log(this.editOrAddAddressDetails);
            }
            //this.editaddress = true;
        },
        addCustomFeature() {
            console.log("----------------Add custom Feature")
            this.customFeatureShow = true;
            this.customFeatureName = null;
            this.customFeatureValue = null;
        },

        deleteCustomFeatureTag() {
            this.customFeatureShow = false;
            this.customFeatureName = null;
            this.customFeatureValue = null;
        },

        handleCustomFeatureChange(evt){
      //   console.log("evt  customFeatureName  customFeatureValue",evt.target.value,evt.target.name)
         if(evt.target.name === 'customFeatureName'){
            if(evt.target.value && (this.$isPhoneNoEsixts(evt.target.value) || this.$isemailEsixts(evt.target.value) || this.$isurlEsixts(evt.target.value))){
                this.isCustomFeatureNameValidated = false
            }else{
                this.isCustomFeatureNameValidated = true
            }
         }else if (evt.target.name === 'customFeatureValue'){
            if(evt.target.value && (this.$isPhoneNoEsixts(evt.target.value) || this.$isemailEsixts(evt.target.value) || this.$isurlEsixts(evt.target.value))){
                this.isCustomFeatureValueValidated = false
            }else{
                this.isCustomFeatureValueValidated = true
            }
         }
        },

        addCustomFeatureTag() {
            if( !this.isCustomFeatureNameValidated  || !this.isCustomFeatureValueValidated ){
             return false
            }
          
            if (this.customFeatureName === null || this.customFeatureName.trim() === '') {
                this.customFeatureName = null;
                return false;
            } else if (this.customFeatureValue === null || this.customFeatureValue.trim() === '') {
                this.customFeatureValue = null;
                return false;
            } else {
                let customTag = {
                    addedByUser: null,
                    label: this.customFeatureName,
                    mandatory: false,
                    name: this.customFeatureName,
                    values: [this.customFeatureValue],
                    selectedName: this.customFeatureValue
                }

                this.addedTags.push(customTag);
                this.offer.facets.push(customTag);
                this.customFeatureShow = false;
                //console.log(this.addedTags);
            }

        },
        addCustomTag(name) {
            if ((name == "mandatory" && this.customTagName != null)) {
                if (this.customTagName.trim() != '') {
                    //console.log(this.customTagName);
                    this.tagsValue.push(this.customTagName);
                    this.displayAddTagForm = false;
                    this.showAddTagBtn = true;
                } else {
                    this.customTagName = null;
                    return false;
                }
            } else if (name == "optional" && this.customTagNameOpt != null) {
                if (this.customTagNameOpt.trim() != '') {
                    this.OptTagsValue.push(this.customTagNameOpt);
                    this.displayAddTagFormOpt = false;
                    this.showAddTagBtnOpt = true;
                } else {
                    this.customTagNameOpt = null;
                    return false;
                }
            } else {
                return false;
            }
        },
        deleteCustomTag() {
            this.displayAddTagForm = false;
            this.showAddTagBtn = true;
        },
        showaddTagForm() {
            this.displayAddTagForm = true;
            this.showAddTagBtn = false;
            this.customTagName = null;
        },
        deleteCustomTagOpt() {
            this.displayAddTagFormOpt = false;
            this.showAddTagBtn = true;
        },
        showaddTagFormOpt() {
            this.displayAddTagFormOpt = true;
            this.showAddTagBtnOpt = false;
            this.customTagNameOpt = null;
        },
        selectDesireCategory(name, id) {
            // console.log(name);
            this.offer.desire = {};
            this.desire.category = name;
            this.isShowDivIfh = false;
            this.draftPaylod = {
                ...this.offer,
                categoryId: id,
                desire: {
                    category: null,
                    description: '',
                    desireType: 'item',
                    categoryId: id
                },
                offerId: this.offer.draftOfferId,
                offerType: "Item",
            };


            //this.offer.categoryId = id;
            this.$axios.$put(this.draftUrl, this.draftPaylod).then((res) => {
                //this.draftId = res.payload.draftOfferId;
                //   console.log(res.payload);
                this.offer = res.payload;


            }).catch(res => {
                console.log('FAILURE!!');

                //alert("Error! Please try again");
                this.showLoader = false;
            });
        },
        selectDesireCustomCat(name, ind) {
            // console.log(ind);
            // console.log(this.searchCatArrDesire[ind]);
            this.offer.desire = {};
            this.desire.category = name;
            this.isShowDivIfh = false;
            this.desire.customCategory = null;

            this.draftPaylod = {
                ...this.offer,
                categoryId: this.catIdStore ? this.catIdStore : this.offer.category.categoryId,
                offerId: this.offer.draftOfferId,
                offerType: "Item",
                desire: {
                    category: null,
                    description: '',
                    desireType: 'item',
                    categoryId: this.searchCatArrDesire[ind].categoryId
                }
            };


            this.$axios.$put(this.draftUrl, this.draftPaylod).then((res) => {
                //this.draftId = res.payload.draftOfferId;
                //  console.log(res.payload);
                this.offer = res.payload;
            }).catch(res => {
                console.log('FAILURE!!');

                //alert("Error! Please try again");
                this.showLoader = false;
            });


        },
        clearValue(evt) {
            evt.target.value = "";
        }
    },
    // beforeMount: function(){
    //     this.allAddresses()
    // }

})
</script>

<style scoped>
  .-z-1 {
    z-index: -1;
  }

  .origin-0 {
    transform-origin: 0%;
  }

  input[type="text"]:focus ~ label, input[type="email"]:focus ~ label, input[type="number"]:focus ~ label,
  input[type="text"]:not(:placeholder-shown) ~ label, input[type="email"]:not(:placeholder-shown) ~ label,
  input[type="number"]:not(:placeholder-shown) ~ label,
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

  input[type="text"]:focus ~ label, input[type="email"]:focus ~ label, input[type="number"]:focus ~ label,
  select:focus ~ label ,textarea:focus ~ label{
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(72, 206, 243, var(--tw-text-opacity));
    left: 0px;
  }

  input[type="text"]:not(:placeholder-shown) ~ label, textarea:not(:placeholder-shown) ~ label, input[type="number"]:not(:placeholder-shown) ~ label, select:not([value='']):valid ~ label{
      color: rgba(72, 206, 243, var(--tw-text-opacity));
  }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input.proAge::-webkit-outer-spin-button,
input.proAge::-webkit-inner-spin-button {
    -webkit-appearance: inner-spin-button !important;
    opacity: 1
}

.vue-advanced-cropper__foreground, .vue-advanced-cropper__background{
  background: #f9f9f9 !important;
  width: 100%  !important;
}


.btn-create-list{
    display: none !important;
    opacity: 0;
    visibility: hidden;
}
.middle-ver .last-border:last-child{
    border-bottom:1px solid #e5e7eb !important;
}
.shipping-section .accordion-button:not(.collapsed){
    color:#000 !important;
    opacity: 0.8 !important;
    background: none !important;
}
.shipping-section .accordion-button.collapsed,  .shipping-section .accordion-item{
    border-radius: 2px !important;

}
.shipping-section .accordion-button::after{
    transform: rotate(180deg) !important;
}
.shipping-section .accordion-button:not(.collapsed)::after{
    transform: rotate(0deg) !important;
}

</style>