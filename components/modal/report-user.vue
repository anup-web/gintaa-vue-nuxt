<template>
 <div
        v-if="showReportModal"
        class="fixed z-50 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
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

          <!-- Design For Report User -->
          <div
            class="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-[450px] sm:w-full report-modal-ascroll auto-scroll
            "
          >
            <div class="bg-white">
              <div>
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

                  <div class="flex flex-col w-full px-6">
                    <h1 class="text-base text-gray-900 font-normal">
                      {{ $t('report') }} 
                    </h1>
                  </div>
                  <!-- {{ otherUserDetails.displayName }} -->

                  <div
                    class="w-full flex justify-center items-center pt-5 px-6"
                  >
                    <div
                      class="
                        user-profile
                        relative
                        bg-white
                        cursor-pointer
                        rounded-full
                        w-32
                        h-32
                      "
                    >
                      <img
                        v-if="getImageUrl(user.photoUrl)"
                        class="w-32 h-32 rounded-full"
                        :src="getImageUrl(user.photoUrl)"
                        alt="iamges"
                      /> 
<!--  -->
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

                  <div
                    class="w-full flex justify-center items-center pt-3 px-6"
                  >
                    <div
                      class="text-base text-gray-900 text-center font-normal"
                    >
                       {{ user.displayName }} 
                    </div>
                  </div>

                  <div
                    class="w-full flex justify-center items-center pt-1 px-6"
                  >
                    <div class="text-sm text-gray-500 text-center">
                      {{ $t('reportPara') }}
                    </div>
                  </div>

                  <div class="float-left w-full mt-3 px-6">
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
                          <a href="#">{{ category.categoryName }}</a>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div class="flex flex-col w-full px-6">
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
                       {{ $t('yourComment') }}
                        
                        </label
                      >
                      <textarea
                        v-model="reportUserDetails.comments"
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

                  <!-- <div class="flex flex-col w-full px-6">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="candidates"
                          name="candidates"
                          :checked="reportUserDetails.block"
                          v-model="reportUserDetails.block"
                          type="checkbox"
                          class="
                            focus:ring-indigo-500
                            h-4
                            w-4
                            text-indigo-600
                            border-gray-300
                            rounded
                          "
                        />
                      </div>
                     
                      <div class="ml-3 text-sm">
                        <label
                          for="candidates"
                          class="font-normal text-gray-700"
                          
                          > {{ $t('block') }}  {{ user.displayName }} </label
                        >
                      </div>
                    </div>
                  </div> -->

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

                    <button
                    :disabled="!isFormValid || loading" :class="[isFormValid || loading ? '' : 'opacity-50', 'bg-firoza flex justify-center text-white font-bold py-2 px-3 h-12 rounded w-full text-base leading-[34px]']"
                      v-on:click="reportUser()"
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
                      <span v-show="!loading">{{ $t('submit') }} </span>
                      <Spinner v-show="loading" />
                    </button>
                  </div>
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
export default Vue.extend({
  name: "Reportuser",
  props: ["showReportUserModal","user","otherUserId"],

  computed: {},

  mounted() {
      this.getReportCategories()
  },

  data() {
    return {
     showReportModal: this.showReportUserModal,
     cateGoryList: [{}],
     reportUserDetails: {
        userId: "",
        report: true,
        block: false,
        comments: "",
        reportCategoryNames: [""],
      },

      isFormValid: false,
      loading:false
    };
  },
  methods: {
    hideModal() {
      this.showReportModal = false;
      this.$emit("closeReportModal", true);
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
      if (!this.reportUserDetails.comments.length) {
        this.isFormValid = false;
      } else {
        this.validateForm(this.cateGoryList);
      }
    },

    validateForm(categoryList: any) {
      const cateGoryList = categoryList.filter(
        (category: any) => category.isActive
      );

      if (cateGoryList.length && this.reportUserDetails.comments.length) {
        this.isFormValid = true;
      } else {
        this.isFormValid = false;
      }
    },

     changeCatgryType(category: any) {
      category.isActive = !category.isActive;
      this.validateForm(this.cateGoryList);
    },

    async reportUser() {
      const cateGoryList = this.cateGoryList.filter(
        (category: any) => category.isActive
      );
      this.reportUserDetails.reportCategoryNames = cateGoryList.map(
        (a: any) => a.categoryName
      );
      const reportObj:any = this.reportUserDetails;
      reportObj.userId    = this.otherUserId
      
      // let url = "/users/v1/user/report"
      try {
        this.loading = true
        let url = `/users/v1/user/report`;
        const data = await this.$axios.$post(url, reportObj);
        //console.log("Data", data);
        if (data.success) {
         
          this.hideModal();
          this.$emit("successReport", true);
        } else {
          
          if (!data.success) {
          }
        }
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        // this.errMsg = error.response.data.message
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