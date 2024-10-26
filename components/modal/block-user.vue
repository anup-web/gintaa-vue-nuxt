<template>
  <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true"> 
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div class="fixed inset-0 z-50 overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">     
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
          <div class="absolute top-0 right-0 pt-2 pr-2 block">
            <button 
              type="button" 
              @click="hideModal()"
              class="rounded-md bg-white text-gray-400">
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="flex flex-col w-full px-6 mt-2">
              <div class="text-base text-gray-900 font-normal">Block User</div>
          </div>
          <div class="w-full flex justify-center items-center pt-5 px-6">
              <div class="user-profile relative bg-white cursor-pointer rounded-full w-32 h-32">
                <!-- <img src="https://dev.cdn.gintaa.com/users/1nBHsSv562MvdKqX1Z0i63j2JK93/avatar/3s97YHsVrCFo2lwLORIeEs_1668599500799" alt="iamges" class="w-32 h-32 rounded-full">  -->
                <!-- <img src="~/assets/images/profile/chatu-noimg.svg" alt="images" class="rounded-full w-32 h-32"> -->
                <img
                  v-if="getImageUrl(user.photoUrl)"
                  class="w-32 h-32 rounded-full"
                  :src="getImageUrl(user.photoUrl)"
                  alt="iamges"
                /> 
                <img
                  v-else
                  width="100"
                  height="100"
                  class="rounded-full"
                  src="~/assets/images/profile/chatu-noimg.svg"
                  alt="images"
                />
              </div>
          </div>

          <div class="w-full flex justify-center items-center pt-3 px-6">
            <div class="text-base text-gray-900 text-center font-normal">{{ user.displayName }}</div>
          </div>

          <div class="w-full flex justify-center items-center pt-2 px-6">
            <div class="text-sm text-gray-500 text-center">Please input the reasons why you want to block this user</div>
          </div>

          <div class="flex flex-col w-full px-6 mt-2">
            <div class="mb-3 w-full">
              <label for="exampleFormControlTextarea1" class="form-label inline-block mb-1 text-gray-700 text-base">
                    Your comment                        
              </label>
              <textarea  
                id="exampleFormControlTextarea1" rows="2" 
                placeholder="Your comment" 
                v-model="blockUserDetails.comments"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:border-blue-600 focus:outline-none">
                </textarea>
            </div>'
            <div v-if="blockUserErrorMsg" class="rounded-sm bg-red-50 p-3 border-red-300 border">
              <h3 class="text-sm font-medium text-red-800"> {{ blockUserErrorMsg }}</h3>
            </div>
          </div>
            
          <div v-show="!loading" class="bg-gray-50 py-3 flex justify-end px-6">          
            <button 
              type="button" 
              class="flex justify-center rounded-md bg-transparent px-3 py-2 text-sm  text-gray-900 w-[100px] "
              @click="hideModal()"
              >Cancel</button>
            <button 
              type="button" 
              class="flex justify-center rounded-md bg-red-500 px-3 py-2 text-sm  text-white w-[100px]"
              :class="!blockUserDetails.comments?'opacity-50':''"
              :disabled="!blockUserDetails.comments"
              @click="blockUser()"
              >Submit</button>
          </div>
            
          <div v-show="loading" class="bg-gray-50 py-3 flex justify-end px-6">          
            <Spinner />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "block-user",
  props: ["user","otherUserId"],

  computed: {},

  mounted() {
  },

  data() {
    return {
     blockUserDetails: {
        userId: this.otherUserId,
        block: true,
        comments: null
      },

      isFormValid: false,
      loading:false,
      blockUserErrorMsg: null
    };
  },
  methods: {
    hideModal() {
      this.$emit("closeBlockModal", true);
    },

    async getReportCategories() {
      try {
        let url = `/users/v1/user/report/category`;
        const data = await this.$axios.$get(url);
        if (data.payload) {
         
          this.cateGoryList = data.payload;
          this.cateGoryList = this.cateGoryList.map((v) => ({
            ...v,
            isActive: false,
          }));
        }
        //console.log("Data:", data);
      } catch (error) {
        console.log(error);
      }
    },

    getImageUrl(imageUrl: string) {
      if (imageUrl && imageUrl.includes("deleted.jpeg")) {
        return "";
      } else {
        return imageUrl;
      }
    },

    onChangeCommentInput() {
      if (!this.blockUserDetails.comments.length) {
        this.isFormValid = false;
      } else {
        this.validateForm(this.cateGoryList);
      }
    },

    validateForm(categoryList: any) {
      const cateGoryList = categoryList.filter(
        (category: any) => category.isActive
      );

      if (cateGoryList.length && this.blockUserDetails.comments.length) {
        this.isFormValid = true;
      } else {
        this.isFormValid = false;
      }
    },

     changeCatgryType(category: any) {
      category.isActive = !category.isActive;
      this.validateForm(this.cateGoryList);
    },

    async blockUser() {
      // const cateGoryList = this.cateGoryList.filter(
      //   (category: any) => category.isActive
      // );
      // this.blockUserDetails.reportCategoryNames = cateGoryList.map(
      //   (a: any) => a.categoryName
      // );
      const reportObj:any = this.blockUserDetails;
      // reportObj.userId    = this.otherUserId
      
      // let url = "/users/v1/user/report"

      console.log('reportObj:', reportObj)

      // return false
      try {
        this.loading = true
        this.blockUserErrorMsg = null
        let url = `/users/v1/user/report`;
        const data = await this.$axios.$post(url, reportObj);
        console.log("Data", data);
        if(data.success) {
          this.hideModal();
          this.$emit("successBlock", true);
        } else {
          this.blockUserErrorMsg = data.message
        }
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        console.log('error:', error)
        this.blockUserErrorMsg = error.response.data.message
      }
    },
  },
});
</script>
<style scoped>
.shareoptions a {
  font-size: 11px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 15px;
  text-align: center;
}
.shareoptions a:last-child {
  margin-right: 0;
}

.drop::before{
  content: '';
  border-bottom: 10px solid #ffffff;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  right: 20px;
  top:-8px;

}
.drop{
  box-shadow: rgb(165 165 165) -1px -1px 10px 0px;
}
@media (max-width: 767px) {
  .shareoptions a{
    margin-right: 5px !important;
  }
  
}

.report-modal-ascroll{
    min-height: 60vh;
    max-height: 80vh;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>