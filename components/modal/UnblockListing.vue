<template>
    <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-50 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
                    <div class="absolute top-0 right-0 pt-2 pr-2 block">
                        <button @click="closeModal" type="button" class="rounded-md bg-white text-gray-400">
                            <span class="sr-only">Close</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div class="flex flex-col w-full px-6 mt-2">
                        <div class="text-base text-gray-900 font-normal">Unblock Listing</div>
                    </div>
                    <div class="w-full flex justify-center items-center pt-5 px-6">
                        <div class="user-profile relative bg-white cursor-pointer rounded-full w-32 h-32">
                            <img :src="filterCoverImage(productDet.images)" alt="iamges" class="w-32 h-32 rounded-full">
                        </div>
                    </div>

                    <div class="w-full flex justify-center items-center pt-3 px-6">
                        <div class="text-base text-gray-900 text-center font-normal">{{productDet.name}}</div>
                    </div>

                    <div class="w-full flex justify-center items-center pt-2 px-6">
                        <div class="text-sm text-gray-500 text-center"> Do you want to unblock this
                            listing ?</div>
                    </div>

                    <!-- <div class="flex flex-col w-full px-6 mt-2">
                        <div class="mb-3 w-full">
                            <label for="exampleFormControlTextarea1"
                                class="form-label inline-block mb-1 text-gray-700 text-base">
                                Your comment
                            </label>
                            <textarea rows="2" name="blockcomments" placeholder="Your comment" v-model="comments"
                                @input="handleChange"
                                class="form-control block w-full px-3
                              py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                              rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:border-blue-600 focus:outline-none">
                      </textarea>
                        </div>
                    </div> -->

                    <div class="bg-gray-50 py-3 flex justify-end px-6">
                        <button type="button" @click="cancelBlock"
                            class="flex justify-center rounded-md bg-transparent px-3 py-2 text-sm  text-gray-900 w-[100px] ">Cancel</button>
                        <button
                            @click="UnblokeLisitng()" type="button"
                            class="flex justify-center rounded-md bg-red-500 px-3 py-2 text-sm  text-white w-[100px]">
                            <span v-show="!loading">{{ $t('cl_submit') }}</span>
                            <Spinner v-show="loading" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "BlocktListing",
    props: ["showUnblockPopup", "productDet"],

    mounted() {
      //  console.log("showUnblockPopup", this.showUnblockPopup, this.productDet);
    },
    data() {
        return {
            isformValid: false,
            showLoader: false,
            product: null,
            cateGoryList: [{}],
            comments: '',
            errorMsg: "",
            isFormValid: false,
            loading: false
        };
    },
    methods: {

        filterCoverImage(imageList) {
            var coverImg = imageList.filter(function (el) {
                return el.cover;
            });

            if (coverImg && coverImg.length) {
                return coverImg[0]?.url
            }

        },

        async UnblokeLisitng() {
           
            this.loading = true;
            const offerId = this.productDet.offerId
           
            try {
                let url = `/offers/v1/blocked/offer/user/unblock/${offerId}`;
                const data = await this.$axios.$delete(url);
                if (data.success) {
                    Vue.$toast.success(data?.message);
                    this.$emit("unblockSuccess", true);
                } else {

                }
                this.loading = false;


            } catch (error: any) {
                console.log(error);
                Vue.$toast.error(error?.response?.data?.message);
                this.loading = false;
            }
        },
        closeModal() {
            this.$emit('closeUnblockModal');
        },
        cancelBlock(){
           this.closeModal() 
        }


    },
});
</script>
  
  
<style scoped>.reportlisting-modal-ascroll {
    min-height: 50vh;
    max-height: 80vh;
    overflow-x: hidden;
    overflow-y: auto;
}</style>