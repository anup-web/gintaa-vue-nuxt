<template>
    <div class="relative bg-[#f8f8f8] min-h-screen">

        <GintaaFoodVendorSidebar />
        <noListing v-if="showNoLisitngPage"></noListing>
        <div
            class="content-wrapper content-wrapper-min pl-0 relative z-10 sm:pl-0 md:pl-[180px] lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px]">
            <!-- <fullPageLoader v-if="showSeamerLoader" />    -->
            <GintaaFoodVendorHeader @resturantStatus="resturantStatus" />
            <div
                class="content pt-[60px] pb-[100px] px-4 sm:pt-[60px] sm:px-4 sm:pb-[100px] md:px-4 md:pt-[100px] lg:px-8 md:pb-0">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-right text-base font-medium">{{ $t('viewFood') }}</div>
                    <div class="items-center justify-center hidden sm:hidden md:flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 5.37766L17.5 12.3568V20.0002H12.5V15.0002H7.5V20.0002H2.5V12.3568L10 5.37766ZM20 10.1235L10 0.833496L0 10.111L1.13417 11.3318L10 3.1085L18.8658 11.3443L20 10.1235Z"
                                fill="#8EC23C" />
                        </svg>
                        <span class="text-sm text-green ml-2">Home / Menu / Food Details</span>
                    </div>
                </div>

                <div class="w-full flex min-h-[250px] justify-center items-center" v-if="loadingFoodDet">
                    <Spinner />
                </div>
                
                <div v-if="foodDet" class="bg-white rounded-sm shadow-sm p-6 mt-6">
                    <div class="flex flex-col w-full sm:flex-row md:flex-row relative">
                        <div class="basis-full sm:basis-1/4 md:basis-1/4">
                            <div class="pr-0 sm:pr-3 md:pr-3 relative">
                                <img v-if="foodDet.imageUrl" :src="foodDet.imageUrl" :alt="foodDet.imageUrl"
                                    class="max-w-full" />
                                <img v-else src="~/assets/images/food/consumer/no-dish.jpg" alt="no-dish.jpg"
                                    class="max-w-full" />
                            </div>
<!--                         
                            <div v-if="foodDet.lastReviewStage === 'PENDING'" class=" absolute top-0 right-0 w-[200px] text-sm font-bold rounded bg-[#8297e5] bg-red-500 py-1 text-center xl:font-[15px] 2xl:font-base"><span class="block text-white">Your Food is Under Review</span></div>
                            <div v-if="foodDet.lastReviewStage === 'REJECTED'" class="absolute top-0 right-0 w-[200px] text-sm font-bold rounded bg-red-500 py-1 text-center xl:font-[15px] 2xl:font-base"><span class="block text-white">Your Food is Rejected . Fix your rejected item</span></div>    
                         -->
                        </div>
                        <div class="basis-full sm:basis-3/4 md:basis-3/4">

                            <div v-if="foodDet.lastReviewStage === 'PENDING'" class="w-[50%] bg-[#8BC63E] bg-opacity-20 p-3 flex flex-col border-l-2 border-[#8BC63E] rounded-md mb-3">
                                    <div class="font-bold text-base text-[#8BC63E] pb-2">{{ $t('itemUnderReview') }}</div>
                                    
                                <ul v-if="chngesObj.length" class="list-disc pl-4">
                                    <li  v-for="item in chngesObj" :key="item" class="text-sm text-gray-700 py-1">{{item}}</li>                              
                                </ul>
                                    <!-- <div class="text-xs text-gray-500">The price is too high</div> -->
                                </div>
                                <div  v-if="foodDet.lastReviewStage === 'REJECTED'" class="w-[50%] bg-[#FC2323] bg-opacity-20 p-3 flex flex-col border-l-2 border-[#FC2323] rounded-md mb-3">
                                    <div class="font-bold text-base text-[#FC2323] pb-2">Fix your reject item</div>
                                    <!-- <div v-if="foodDet.rejectionReason && foodDet.lastReviewStage === 'REJECTED'" class="w-[200px] text-sm font-bold rounded bg-red-500 py-1 text-center xl:font-[15px] 2xl:font-base"><span class="block text-white">{{foodDet.rejectionReason}}</span></div> -->
                                    <div v-if="foodDet.rejectionReason && foodDet.lastReviewStage === 'REJECTED'" class="text-xs text-gray-500">{{foodDet.rejectionReason}}</div>
                                </div>


                            <div class="food-details px-0 mt-4 sm:px-5 sm:mt-0 md:px-5 md:mt-0">
                                <div class="text-base font-medium text-gray-600 pb-3">{{foodDet.name}}</div>
                                <div class="font-bold text-[20px] pb-3 relative pl-3">
                                    <svg class="absolute left-0 top-2" width="7" height="12" viewBox="0 0 11 18"
                                        fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                            fill="black"></path>
                                    </svg>
                                    {{ foodDet.price }}
                                </div>
                                <div class="font-bold text-[16px] pb-3 flex items-center"><span class="block mr-2">{{ $t('foodType') }}
                                        :</span> <svg v-if="foodDet.type == 'VEG'" width="20" height="20"
                                        viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2">
                                        <rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect>
                                        <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle>
                                    </svg>
                                    <svg v-if="foodDet.type == 'NON_VEG'" width="20" height="20" viewBox="0 0 20 19"
                                        fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2">
                                        <rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect>
                                        <circle cx="10" cy="9" r="5" fill="#EE1029"></circle>
                                    </svg>
                                </div>
                                <div class="font-bold text-[16px] pb-3 flex items-center"><span class="block mr-2">{{ $t('foodCategory') }}
                                        :</span> <span class="font-normal text-sm">{{ foodDet.categoryName }}</span></div>
                                <div class="font-bold text-[16px] pb-3 flex items-center"><span class="block mr-2">{{ $t('cl_Sub_Category') }} :</span> 
                                <span class="font-normal text-sm">{{ foodDet.subCategoryName }}</span></div>
                                    
                                    <div class="flex items-center">
                                    <div class="text-base text-gray-700 font-medium w-[90px]">
                                        <div v-if="foodDet.stockAvailable">{{ $t('inStock') }}</div>
                                        <div v-else>{{ $t('outStock') }} </div>
                                    </div>
                                    <div class="form-check form-switch pl-4"><label for="flexSwitchCheckDefault"
                                            class="form-check-label inline-block text-gray-500 text-sm">
                                        </label>
                                        <input type="checkbox" role="switch" id="flexSwitchCheckDefault"
                                            :checked="foodDet.stockAvailable"
                                            class="form-check-input appearance-none w-9 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300
                                                                                    focus:outline-none cursor-pointer shadow-sm"
                                            @click="markFoodItemsOutOfStock(foodDet.id, foodDet.stockAvailable)">
                                    </div>
                                    </div>

                                    
                                <div class="des text-[13px] text-gray-500 mt-4">{{ foodDet.description }}</div>

                                <!-- <div v-if="foodDet.rejectionReason && foodDet.lastReviewStage === 'REJECTED'" class="w-[200px] text-sm font-bold rounded bg-red-500 py-1 text-center xl:font-[15px] 2xl:font-base"><span class="block text-white">{{foodDet.rejectionReason}}</span></div> -->
<!-- 
                                <div v-if="chngesObj.length" class="bg-[#d6fff9] rounded divide-y divide-blue-200 divide-solid mt-4 py-1">
                                    <div  v-for="item in chngesObj" :key="item" class="text-sm text-gray-700 py-1.5 px-4">{{item}}</div>                              
                               </div> -->

                                <div class="flex justify-start mt-4 w-full">
                                    <a @click="!foodDet.stockAvailable ? redirectToEditPage(foodDet.id) : false" :class="foodDet.stockAvailable ? 'opacity-50' : 'opacity-100 cursor-pointer'"
                                        class=" mr-2 bg-orange-500 block px-5 py-3 text-sm text-white rounded-sm min-w-[120px] text-center ">{{ $t('editBtn') }}</a>
                                    <a @click="!foodDet.stockAvailable ? deleteFoodItem(foodDet.id) : false" :class="foodDet.stockAvailable ? 'opacity-50' : 'opacity-100 cursor-pointer'"
                                        class=" ml-1 bg-errortext block px-5 py-3 text-sm text-white rounded-sm min-w-[120px] text-center">{{ $t('deleteBtn') }}</a>

                                  
                                </div>

                               
                            </div>

                        </div>
                    </div>

                </div>

                <div v-if="showDeleteFoodModal" class="relative z-50 " aria-labelledby="modal-title" role="dialog"
                    aria-modal="true">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div class="fixed inset-0 z-50 overflow-y-auto">
                        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                            <div
                                class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                                <div class="absolute top-0 right-0 pt-4 pr-4 block">
                                    <button @click="closeRemoveFoodItemPopup" type="button"
                                        class="rounded-md bg-white text-gray-400 hover:text-gray-500 ">
                                        <span class="sr-only">Close</span>
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="sm:flex sm:items-start">
                                    <div
                                        class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg width="20" height="20" viewBox="0 0 24 28" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                                                fill="#FC2323"></path>
                                        </svg>
                                    </div>
                                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{{ $t('deleteFoodItem') }}</h3>
                                    </div>
                                </div>
                                <div class="mt-8 sm:mt-8 flex justify-end">
                                    <button type="button" @click="closeRemoveFoodItemPopup"
                                        class="flex w-[85px] justify-center items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">{{ $t('cancel') }}</button>
                                    <button type="button" @click="deleteItem"
                                        class="flex w-[85px] justify-center items-center rounded-md bg-errortext px-3 py-2 text-sm font-semibold text-white ml-3 ">
                                        <span v-show="!loading">{{ $t('remove') }}</span>
                                        <Spinner v-show="loading" />
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <GintaaFoodVendorFooter />


    </div>
</template>
  
<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex';
import Spinner from '../../../../components/atoms/spinner.vue';
export default Vue.extend({
    // name: 'Nearbyresturant',
    // props:['selectedAddress'],
    components: {},
    data() {
        return {

            showNoLisitngPage: false,
            showAddaddressPopup: false,
            page: 0,
            defaultSize: 20,
            foodDet: null,
            resStatus: '',
            showDeleteFoodModal: false,
            deletdFoodId: '',
            loading: false,
            loadingFoodDet: true,
          
            pendingChanges: {
            name: null,
            description: null,
            categoryName: null,
            subCategoryName : null,
            type : null,
            price: null
            },
            currentFoodSituation: {
            name: null,
            description: null,
            categoryName: null,
            subCategoryName : null,
            type : null,
            price: null
            },
            chngesObj : []



        }
    },

    computed: {
        ...mapState({
            authUser: (state) => state.authUser
        }),
        ...mapGetters({
            isLoggedIn: 'isLoggedIn'
        })
    },
    created() {
    },
    mounted() {
        console.log("menu det called")
        this.getFoodDet()
    },
    methods: {

        setChangesObj(){
            console.log("set change object called")
          this.currentFoodSituation.name = this.foodDet.name
          this.currentFoodSituation.description = this.foodDet.description
          this.currentFoodSituation.categoryName = this.foodDet.categoryName
          this.currentFoodSituation.subCategoryName  = this.foodDet.subCategoryName
          this.currentFoodSituation.type  = this.foodDet.type
          this.currentFoodSituation.price = this.foodDet.price

          this.pendingChanges.name = this.foodDet.pendingChanges.name
          this.pendingChanges.description = this.foodDet.pendingChanges.description
          this.pendingChanges.categoryName = this.foodDet.pendingChanges.categoryName
          this.pendingChanges.subCategoryName  = this.foodDet.pendingChanges.subCategoryName
          this.pendingChanges.type  = this.foodDet.pendingChanges.type
          this.pendingChanges.price = this.foodDet.pendingChanges.price

          this.setValueToChnagesObj(this.currentFoodSituation,this.pendingChanges)
            
        },

        setValueToChnagesObj(currentSituation,pendingChange){

            if(pendingChange.name){
                this.chngesObj.push(`Your Food Name was changed From '${currentSituation.name}' to '${pendingChange.name}' `)
            } 
            if (pendingChange.description){
                this.chngesObj.push(`Your Food Description was changed From  '${currentSituation.description}' to '${pendingChange.description}' `)
            }
              if (pendingChange.categoryName){
                this.chngesObj.push(`Your Food Category was changed From '${currentSituation.categoryName}' to '${pendingChange.categoryName}' `)
              }
              if (pendingChange.subCategoryName){
                this.chngesObj.push(`Your Food Sub category was changed From '${currentSituation.subCategoryName}' to '${pendingChange.subCategoryName}' `)
              }
              if (pendingChange.type){
                this.chngesObj.push(`Your Food Type was changed From '${currentSituation.type}' to '${pendingChange.type}' `)
              }
              if (pendingChange.price){
                this.chngesObj.push(`Your Food Price was changed From '${currentSituation.price}' to '${pendingChange.price}'`)
            }

            console.log(" this.chngesObj", this.chngesObj)

        },
        async markFoodItemsOutOfStock(foodItemId, status) {
            try {
                status = !status;
                let url = `/flisting/v1/food-listing/${foodItemId}?available=${status}`
                const res = await this.$axios.post(url)
                console.log(res.data);
                if (res.status == 200) {
                    this.foodDet = res.data.payload
                  
                   // console.log(res.payload.stockAvailable);
                };
                
            } catch (error) {
                //this.showSeamerLoader = false;
                //this.errorMenuFetch = true;
            }
        },
        resturantStatus(resStatus) {
            console.log("resStatus", resStatus)
            this.resStatus = resStatus
        },
        deleteFoodItem(deletedId) {
            if (this.resStatus === 'ONLINE') {
                this.showMakeResOfflineMsg()
                return false
            }
            this.showDeleteFoodModal = true
            this.deletdFoodId = deletedId
        },

        closeRemoveFoodItemPopup() {
            this.showDeleteFoodModal = false;
        },
        async deleteItem() {
            console.log(this.deletdFoodId);
            this.loading = true;
            let rid = this.authUser ? this.authUser?.uid : '';
            try {
                const url = `/flisting/v1/food-listing/${this.deletdFoodId}`;
                const data = await this.$axios.$delete(url);
                if (data.success) {
                    // console.log(data);
                    this.$router.push({ path: (`/gintaa-food/vendor/menu`) })
                    Vue.$toast.success(data?.message);
                    this.closeRemoveFoodItemPopup();
                    this.deletdFoodId = ''
                }
                this.loading = false
            } catch (error: any) {
                this.loading = false;
                this.closeRemoveFoodItemPopup();
                Vue.$toast.error(error?.response?.data?.message);
                console.log(error);
            }
        },

        redirectToEditPage(foodId) {
            if (this.resStatus === 'ONLINE') {
                this.showMakeResOfflineMsg()
                return false
            }
            this.$router.push(
                {
                    path: (`/gintaa-food/vendor/add-menu?`),
                    query: {
                        food_id: foodId
                    }
                })
        },

        showMakeResOfflineMsg() {
            Vue.$toast.warning('Can not update restaurant while restaurant is Online!')

        },
        async getFoodDet() {

            try {
                const url = `/flisting/v1/food-listing/${this.$route.params.foodid}`;
                const data = await this.$axios.$get(url);
                this.foodDet = data.payload
                  if(this.foodDet && this.foodDet.pendingChanges){
                    this.setChangesObj()
                   }
                this.loadingFoodDet = false
            } catch (error) {
                this.loadingFoodDet = false
                if (error && (error?.response?.status === 404 || error?.response?.status === 403)) {
                    this.showNoLisitngPage = true
                }
            }



        }


    }
})

</script>

<style scoped>
li.select-menu {
    border-left: 6px solid #8bc63e;
}

li.select-menu a {
    color: #8bc63e;
    font-weight: 500;
}

.sticky-header {
    position: fixed;
    width: 100%;
    top: 40px;
    left: 0;
    z-index: 9;
}

.sticky-header .sticky-banner {
    width: 180px;
    height: 120px;
}

.sticky-header .banner-top {
    padding-top: 5px;
    padding-bottom: 5px;
}

.sticky-leftpanel {
    position: fixed;
    top: 220px;
}

.sticky-tab {
    position: fixed;
    top: 199px;
    background-color: #f0f5f7;
    width: 672px;
    padding: 22px 0px 10px 0px;
    z-index: 9;
}

.sticky-list {
    margin-left: 220px;
    margin-top: 150px;
}

.current-tab {
    background-color: #48CEF3;
    color: #FFFFFF;
    border: 1px solid #48CEF3;
}

.current-tab-veg {
    background-color: #1FBE58;
    color: #FFFFFF;
    border: 1px solid #1FBE58;
}

.current-tab-non {
    background-color: #EE1029;
    color: #FFFFFF;
    border: 1px solid #EE1029;
}

.sticky-alllist {
    padding-top: 145px;
}

.download-app-bg {
    background-image: url(~/assets/images/food/app-bg.png);
    background-repeat: no-repeat;
    background-position: center top;
    height: 189px;
    width: 293px;
}

/* .food-list-height div.list-height:last-child{ min-height: 500px;} */


@media only screen and (min-device-width: 0px) and (max-device-width: 1023px) {

    .sticky-header,
    .sticky-leftpanel,
    .sticky-tab,
    .sticky-list,
    .sticky-alllist {
        position: relative !important;
        top: 0px !important;
        left: 0px !important;
        right: 0px !important;
        margin: 0px !important;
        padding: 0px !important;
        width: auto !important;
    }
}

.active-cat-menu {
    padding-top: 300px;
}
</style>