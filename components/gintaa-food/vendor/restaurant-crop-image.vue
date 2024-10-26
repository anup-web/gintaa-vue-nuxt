    <!-- Modal Start Of Deleting Bank Account And Address -->
    <template>
  <div
    class="fixed hidden bg-gray-800/[.5] z-[50] inset-0 overflow-y-hidden"
    id="crop-image-modal"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end mt-5 pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="
          inline-block
          bg-white
          rounded-lg
          text-left
          shadow-xl
          transform
          transition-all
          align-middle
          max-w-md
          w-full
          pt-3
        "
      >
        <!-- <button
          type="button"
          @click="cancelCropping()"
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
        </button> -->
        <div class="flex flex-col w-full px-6">
          <h1 class="text-base text-gray-900 font-medium">{{$t('profilePhoto')}}</h1>
        </div>
        <div class="w-full flex-col flex justify-center items-center pt-5 px-6">
           <!-- <ImageCropper/> -->
                        <!-- Start for image cropper -->
                        <!-- v-if="image.src" -->
                        <div class="max-h-[400px] overflow-hidden w-full auto-scroll" >
                           <cropper v-if="image.src" ref="cropper" 
                            class="cropper max-w-full max-h-full " 
                            :auto-zoom="true"
                            image-restriction="stencil"
                            :default-size="defaultSize"
                            :src="image.src" /> 
                         
                        </div>
                         <div class="flex justify-end items-center pt-2 w-full">
                          <a href="javascript:;" class="border rounded border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700" @click="cancelCropping()">{{$t('cancel')}}</a>
                          <a href="javascript:;" class="rounded border border-transparent shadow-sm px-4 py-2 bg-green text-base font-medium text-white ml-3 w-[140px] text-center relative" @click="cropImage()"> <span>{{$t('cropSave')}}</span>
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
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "restaurantCropImage",
  props: ["image"],

  mounted() {
    let modal = document.getElementById("crop-image-modal")!;
    modal.style.display = "block";
    console.log("image", this.image);
    // if (this.deletedItemDetails.showdeletemodal) {
    //   let modal = document.getElementById("crop-image-modal")!;
    //   modal.style.display = "block";
    // }
  },
  data() {
    return {
     profileImageUrl: null,
     apiUrls: this.$config.apiUrls,
     loading:false
    };
  },
  methods: {
    cancelCropping(){
      this.closeModal();
    },
    closeModal() {
      let modal = document.getElementById("crop-image-modal")!;
      modal.style.display = "none";
      this.$parent.$emit("closeModal");
    },

    defaultSize({ imageSize, visibleArea }) {
       // console.log("imageSize,visibleArea",imageSize,visibleArea)
			return {
				width: (visibleArea || imageSize).width,
				height: (visibleArea || imageSize).height,
			};
		},

    closeModalWithRes() {
      let modal = document.getElementById("crop-image-modal")!;
      modal.style.display = "none";
      this.$parent.$emit("closeModal", "ImageUploaded");
    },
    cropImage() {
      const result = this.$refs.cropper.getResult();
      // console.log('result:', result);
      let dataUrl = result.canvas.toDataURL(this.image.type);
      this.profileImageUrl = dataUrl;
      let image = this.dataURLtoFile(dataUrl, ''+this.image.name);

      const formData = new FormData();
      formData.append('file', image);
      this.uploadProfileImageToServer(formData);
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
        console.log('uploadProfileImage:', updateUserData);
        if(updateUserData.data.success){
          this.$emit("updateUserData", updateUserData.data);
          this.closeModalWithRes();
        }else{

        }
        this.loading = false;
        } catch (error) {
        this.loading = false;
        console.log(error);
      }
      }
    }
  },
});
</script>


    <!-- Modal End -->