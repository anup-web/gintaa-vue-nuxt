<template>
  <!-- Modal -->
  <div
    class="fixed hidden bg-gray-800/[.5] z-50 inset-0 overflow-y-hidden"
    id="icon-modals"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
  <div v-if="showLoader" class="fixed w-full h-full z-50 top-0 left-0 bg-black opacity-40"></div>
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
          px-6
          py-3 reportlisting-modal-ascroll auto-scroll
        "
      >
        <button
          v-on:click="closeModal()"
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

        <div class="flex flex-col w-full">
          <h1 class="text-base text-gray-900 font-normal">{{$t('report')}}</h1>
        </div>

        <div class="w-full flex justify-center items-center mt-5 pt-1 mb-5">
          <div class="text-sm text-gray-500 text-center">
            {{$t('reportListingPara')}}
           
          </div>
        </div>

        <div class="flex flex-col w-full mt-3">
          <ul class="float-left">
            <li  v-for="category in cateGoryList"
                :key="category.id"   @click="changeCatgryType(category)" class="float-left">
              <div
                class="
                  bg-slate-400
                  py-2
                  px-3
                  rounded-md
                  text-sm text-white
                  mb-3
                  mr-2 capitalize
                "

                v-bind:class="{ 'bg-gray-700': category.isActive }"
              >
               <a href="#"> {{category.categoryName}} </a>
              </div>
            </li>
           
          </ul>
        </div>

         <div v-if="showLoader" class="bg-white rounded-full shadow w-12 h-12 mx-auto flex items-center justify-center">
                        <div style="border-top-color:transparent"
                            class="w-8 h-8 border-4 border-green border-solid rounded-full animate-spin"></div>

                    </div>

        <div class="flex flex-col w-full mt-3">
          <div class="mb-3 w-full">
            <label
              for="exampleFormControlTextarea1"
              class="form-label inline-block mb-1 text-gray-700 text-base"
            >
              {{$t('yourComment')}}</label
            >
            <textarea

              v-model="reportListingDet.reportComment"
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
              :placeholder="$t('yourComment')"
            ></textarea>
          </div>
        </div>

          <div class="absolute items-center flex w-full text-sm text-red-400 mt-px"> <span class="mr-1">{{errorMsg}} </span></div> 

        <div class="w-full flex items-center justify-between pt-4">
          <button v-on:click="closeModal()"
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
            <span>{{$t('cancel')}} </span>
          </button>

          <button
            v-on:click="reportListing()"
            
            type="submit"
            :disabled="!isFormValid || loading" :class="[isFormValid || loading ? '' : 'opacity-50', 'bg-firoza flex justify-center text-white font-bold py-2 px-3 h-12 rounded w-full text-base leading-[34px]']"
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
            <span v-show="!loading">{{$t('submit')}} </span>
            <Spinner v-show="loading" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ReportListing",
  props: ["showmodal" ,"offerId"],

  mounted() {
    console.log("showmodal", this.showmodal);

    if (this.showmodal) {
      let modal = document.getElementById("icon-modals")!;
      modal.style.display = "block";
    }
   
    this.getReportCategories();
  },
  data() {
    return {
    showLoader: false,
    product: null,
    cateGoryList:[{}],
    reportListingDet:{
    offerId : "",
    reportComment : "",
    reportCategoryNames :  [""]
},
errorMsg: "",
isFormValid:false,
loading:false
    };
  },
  methods: {
    async getReportCategories() {
      this.showLoader = true;
      try {
        let url = `/offers/v1/offers/report/categories`;
        const data = await this.$axios.$get(url);
        if(data.payload){
        this.cateGoryList = data.payload;
          this.cateGoryList = this.cateGoryList.map((v) => ({
            ...v,
            isActive: false,
          }));
        }else{

        }
        this.showLoader = false;
        
        console.log("Data",data)
      } catch (error) {
        console.log(error);
        this.showLoader = false;
      }
    },

    changeCatgryType(category:any){
       category.isActive = !category.isActive;
      console.log("this.cateGoryList", this.cateGoryList);

      this.validateForm(this.cateGoryList);
    },

    async reportListing() {

      this.loading = true

        const cateGoryList = this.cateGoryList.filter(
        (category: any) => category.isActive
      );
      this.reportListingDet.reportCategoryNames = cateGoryList.map(
        (a: any) => a.categoryName
      );
      this.reportListingDet.offerId = this.offerId;
      const abondonRequest = this.reportListingDet;
      
      try {
        
        let url = `/offers/v1/offers/report`;
        const data = await this.$axios.$post(url,abondonRequest);
        console.log("Data",data)
        if(data.success){
        console.log("Data.success",data.success)
        this.closeModal();
        this.$emit("reportSuccess", data.message);

        }else{

        }
        
         this.loading = false
        
      } catch (error:any) {
        
        console.log(error);
        console.log(error.response.data)
         this.errorMsg = error.response.data.message
         console.log(this.errorMsg)
         this.loading = false
      }
    },
    closeModal() {
      let modal = document.getElementById("icon-modals")!;
      modal.style.display = "none";
      this.$parent.$emit('closeModal');
    },
    validateForm(categoryList: any) {
      const cateGoryList = categoryList.filter(
        (category: any) => category.isActive
      );

      if (cateGoryList.length) {
        this.isFormValid = true;
      } else {
        this.isFormValid = false;
      }
    },

  },
});
</script>


<style scoped>
     .reportlisting-modal-ascroll{
    min-height: 50vh;
    max-height: 80vh;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>