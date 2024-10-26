    <!-- Modal Start Of Deleting Bank Account And Address -->
    <template>
        <!-- This example requires Tailwind CSS v2.0+ -->
      <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true" id="crop-image-modal">
        <!--
          Background backdrop, show/hide based on modal state.
      
          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center  text-center sm:items-center sm:p-0">
            <!--
              Modal panel, show/hide based on modal state.
      
              Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                To: "opacity-100 translate-y-0 sm:scale-100"
              Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 sm:scale-100"
                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            -->
            <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-3  text-left  transition-all sm:my-8 sm:w-full max-w-[550px] sm:p-6">
              <div
            class="flex items-end mt-5 pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          >
            <div
              class="inline-block bg-white
                rounded-lg
                text-left
                transform
                transition-all
                align-middle
                          w-full
                
              "
            >
              
              <div class="flex flex-col w-full px-6">
                <!-- <h1 class="text-base text-gray-900 font-medium">{{$t('profilePhoto')}}</h1> -->
              </div>
              <div class="w-full flex-col flex justify-center items-center">
                 <!-- <ImageCropper/> -->
                              <!-- Start for image cropper -->
                              <!-- v-if="image.src" -->
                              <div class=" w-full h-[400px]" >
                                <cropper v-if="image && image[indexVal].src" ref="cropper"
                                :stencil-props="{aspectRatio: 16/16}"
                           default-boundaries="fill"
                            image-restriction="stencil"
                            image-class="cropper__image"
                            :default-size="defaultSize"
                           class="cropper"  :src="image[indexVal].src" /> 
                               
                              </div>
                               <div class="flex justify-center pt-2 w-full items-center mt-2">
                                <a  @click="rotateLeft()" href="#" class="mr-3" title="Rotate Left"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.19306 7H9C9.55229 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9H4C3.44772 9 3 8.55228 3 8V3C3 2.44772 3.44772 2 4 2C4.55228 2 5 2.44772 5 3V5.27035C6.72511 3.18251 9.19577 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.87111 22 2.64406 18.1388 2.0671 13.1647C1.99286 12.5246 2.52233 12 3.16667 12C3.6269 12 3.99544 12.3742 4.04274 12.832C4.45891 16.8593 7.86268 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.60638 4 7.55354 5.0787 6.19306 7Z" fill="#8CAEC5"/>
      </svg>
      </a>
      
      <a  @click="rotateRight()" href="#" class="mr-3" title="Rotate Left">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8069 5H13C12.4477 5 12 5.44772 12 6V6C12 6.55228 12.4477 7 13 7H18C18.5523 7 19 6.55228 19 6V1C19 0.447715 18.5523 0 18 0V0C17.4477 0 17 0.447715 17 1V3.27035C15.2749 1.18251 12.8042 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.1289 20 19.3559 16.1388 19.9329 11.1647C20.0071 10.5246 19.4777 10 18.8333 10V10C18.3731 10 18.0046 10.3742 17.9573 10.832C17.5411 14.8593 14.1373 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C12.3936 2 14.4465 3.0787 15.8069 5Z" fill="#8CAEC5"/>
      </svg>
      
      </a>
                                <a href="javascript:;" class="border rounded border-gray-300 shadow-sm px-2 md:px-4 py-2 bg-white text-xs md:text-base font-medium text-gray-700 text-center" @click="cancelCropping('cancel')">{{$t('cancel')}}</a>
                  
                   <!-- @click="skipImage(indexVal)" -->
                    <a href="javascript:;"  class="rounded border border-transparent shadow-sm px-2 md:px-4 py-2 border-firoza text-xs md:text-base font-medium text-firoza ml-3 min-w-[100px] text-center relative" @click="skipImage(image[indexVal])"  > <span>{{$t('skip')}}</span>
                    <Spinner v-show="loading" class="absolute right-2 top-1 w-5"/></a>
                 
                 <a href="javascript:;" v-if="showCropandNext" class="rounded border border-transparent shadow-sm px-2 md:px-4 py-2 bg-firoza text-xs md:text-base font-medium text-white ml-3 min-w-[110px] md:min-w-[120px] text-center relative" @click="cropImage()"> <span>{{$t('cropNext')}}</span>
                    <Spinner v-show="loading" class="absolute right-2 top-1 w-5"/></a>
      
                    <a href="javascript:;" v-if="showCropandSave" class="rounded border border-transparent shadow-sm px-2 md:px-4 py-2 bg-firoza text-xs md:text-base font-medium text-white ml-3 min-w-[110px] md:min-w-[120px] text-center relative" @click="cropImage()"> <span>{{$t('cropSave')}}</span>
                    <Spinner v-show="loading" class="absolute right-2 top-1 w-5"/></a>
                                </div>
                              <!-- End for image cropper -->
              </div>
              <div class="w-full flex justify-center items-center pt-3 px-6">
                <div class="text-base text-gray-900 text-center font-normal">
                 
                </div>
              </div>
            
             
            </div>
          </div>
             
            </div>
          </div>
        </div>
      </div>
      
      </template>
      
      <script lang="ts">
      import Vue from "vue";
      
      
      export default Vue.extend({
        name: "cropFoodimage",
        props: ["image","rawImageList"],
      
        mounted() {
          let modal = document.getElementById("crop-image-modal")!;
          modal.style.display = "block";
        console.log("image", this.image ,this.image.length);
          if(this.image && this.image?.length  === 1){
          this.showCropandSave  = true,
          this.showCropandNext  = false
          }else{
          this.showCropandSave  = false,
          this.showCropandNext  = true
          }
      
        },
        data() {
          return {
           profileImageUrl: null,
           apiUrls: this.$config.apiUrls,
           loading:false,
           cropListItem : [],
           indexVal:0,
           isCancel : false,
          showCropandSave : false,
          showCropandNext : false,
          };
        },
        methods: {
          cancelCropping(value:string){
            this.isCancel  = true
            this.closeModal();
          },
          closeModal() {
            let modal = document.getElementById("crop-image-modal")!;
            modal.style.display = "none";
           // this.$parent.$emit("closeModal");this.cropListItem
            this.$emit('closeCropListingModal',this.isCancel);
          },
      
          closeModalWithRes() {
            let modal = document.getElementById("crop-image-modal")!;
            modal.style.display = "none";
            this.$parent.$emit("closeModal", "ImageUploaded");
          },
      
         //Skiip Image Function Now not Need As While skipping it is doing 
          skipImage(indxVal:any){
          if(this.image.length === 1 ){
           this.cropListItem.push(this.rawImageList[this.indexVal])
          this.$emit('saveimg', this.cropListItem);
          this.closeModal()
          }else{
          this.cropListItem.push(this.rawImageList[this.indexVal])
          if(this.image.length - this.indexVal === 1){
          this.$emit('saveimg', this.cropListItem);
          this.closeModal()
          }
          this.indexVal = this.indexVal + 1
          if(this.image.length - this.indexVal === 1){
          this.showCropandSave = true
          this.showCropandNext = false
          }else{
          this.showCropandSave = false
          this.showCropandNext = true
            }
      
         
          }
          
          },
      
          rotateLeft(){
          this.$refs.cropper.rotate(-90);
          },
      
          rotateRight(){
          this.$refs.cropper.rotate(90);
          },
             cropImage() {
            if(this.image){
              if(this.image.length - this.indexVal === 1){
           const result :any = this.$refs.cropper.getResult();
            let dataUrl = result.canvas.toDataURL(this.image[this.indexVal].type);
            this.profileImageUrl = dataUrl;
            let image = this.dataURLtoFile(dataUrl, ''+this.image[this.indexVal].name);
            this.cropListItem.push(image)
           // console.log(this.cropListItem)
            this.$emit('saveimg', this.cropListItem);
            this.closeModal()
              }else{
            this.indexVal = this.indexVal + 1
            const result = this.$refs.cropper.getResult();
            // console.log('result:', result);
            let dataUrl = result.canvas.toDataURL(this.image[this.indexVal].type);
            this.profileImageUrl = dataUrl;
            let image = this.dataURLtoFile(dataUrl, ''+this.image[this.indexVal].name);
            this.cropListItem.push(image)
            if(this.image.length - this.indexVal === 1){
              this.showCropandSave = true
              this.showCropandNext = false
            }else{
               this.showCropandSave = false
              this.showCropandNext = true
            }
            
      
           // console.log(this.cropListItem)
              }
            }
           
          },
              dataURLtoFile(dataurl: string, filename: string) {
              let arr = dataurl.split(','),
                  mime = arr[0].match(/:(.*?);/)[1],
                  bstr = atob(arr[1]), 
                  n = bstr.length, 
                  u8arr = new Uint8Array(n);
                  
              while(n--){
                  u8arr[n] = bstr.charCodeAt(n);
              }
              return new File([u8arr], filename, {type:mime});
          },
      
           async uploadProfileImageToServer(requestBody: any) {
            this.loading = true;
            if(requestBody){
              try{
              let updateUserData = await this.$axios.post(this.apiUrls.uploadProfileImgUrl, requestBody);
             // console.log('uploadProfileImage:', updateUserData);
              if(updateUserData.data.success){
              this.closeModalWithRes();
              }else{
      
              }
              this.loading = false;
              } catch (error) {
              this.loading = false;
              console.log(error);
            }
            }
          },
      
           defaultSize({ imageSize, visibleArea }) {
             // console.log("imageSize,visibleArea",imageSize,visibleArea)
              this.imageWidth = (visibleArea || imageSize).width
              this.imageHeignt = (visibleArea || imageSize).height
                  return {
                      width: (visibleArea || imageSize).width,
                      height: (visibleArea || imageSize).height,
                  };
              },
      
              setDefaultSize(){
              //    defaultSize({ imageSize, visibleArea }) {
              // console.log("imageSize,visibleArea",imageSize,visibleArea)
              // 	return {
              // 		width: (visibleArea || imageSize).width,
              // 		height: (visibleArea || imageSize).height,
              // 	};
              // }
       
              }
        },
      });
      </script>
      
      <style scoped>
      .mx-datepicker {
        width: 100%;
      }
      .vue-advanced-cropper__foreground, .vue-advanced-cropper__background{
        background: #f9f9f9 !important;
        width: 100%  !important;
      }
      
      .address-mheight{ min-height: 3.125rem; }
      
      /* .vue-advanced-cropper__foreground{
      
        min-height: 200px;
      
      } */
      
      @media only screen and (min-device-width: 0px) and (max-device-width: 767px){
      svg.promocode-svg path{
        fill:#48CEF3;
      }
      
      }
      
      </style>
      
      
      
          <!-- Modal End -->