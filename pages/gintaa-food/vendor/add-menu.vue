<template>
  <div class="relative bg-[#f8f8f8] min-h-screen">

    <GintaaFoodVendorSidebar />
    <div
      class="content-wrapper content-wrapper-min pl-0 relative z-10 sm:pl-0 md:pl-[180px] lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px]">
      <fullPageLoader v-if="showLoader" />
      <GintaaFoodVendorHeader />
      <div class="content pt-[60px] pb-[100px] px-4 sm:pt-[60px] sm:px-4 sm:pb-[100px] md:pt-[100px] md:px-4 lg:px-8 md:pb-0">
        <div class="flex items-center justify-between mb-4">
          <div class="text-right text-base font-medium">{{ $t('foodaddMenu') }}</div>
          <div class="items-center justify-center hidden sm:hidden md:flex">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 5.37766L17.5 12.3568V20.0002H12.5V15.0002H7.5V20.0002H2.5V12.3568L10 5.37766ZM20 10.1235L10 0.833496L0 10.111L1.13417 11.3318L10 3.1085L18.8658 11.3443L20 10.1235Z"
                fill="#8EC23C" />
            </svg>
            <span class="text-sm text-green ml-2">Home / Add Menu</span>
          </div>
        </div>
        <div class="table-content bg-white rounded-sm pt-4 pb-6 shadow-sm max-w-[1100px] mx-auto">

          <div class="px-2 sm:px-2 md:px-2 lg:px-6 xl:px-8 ">
            <!-- <div class="sm:flex sm:items-center">
              <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold text-gray-900">{{ $t('foodaddMenu') }}</h1>

              </div>

            </div> -->
            <div class="mt-2 flex flex-col">

              <div class="grid grid-cols-2 gap-4 sm:gap-4 md:gap-4 lg:gap-8 mb-8">
                <!-- @input="handleChange" -->
                <div class="relative z-0 w-full ">

                  <div v-if="ownerCategoryList && ownerCategoryList.length > 0">
                    <select placeholder="" id="selectCat" @change="onChange($event)" v-model="foodDetails.categoryId"
                      name="categoryname"
                      class="text-gray-600  block w-full mt-0 bg-transparent border-0 border-b appearance-none  focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm p-2 ">
                      <!-- <option>Select</option> -->
                      <option value="" disabled hidden>Select Category</option>
                      <option v-for="(item, i) in ownerCategoryList" :key="'categoryname-' + i" :value="item.categoryId">
                        {{ item.name }}
                      </option>


                    </select>
                    <label for="select" class=" absolute  duration-300 top-3 -z-1  origin-0 text-gray-500 text-sm ">
                      {{ $t('cl_Category') }} </label>

                    <span class="absolute right-0 top-[15px] -z-50">
                      <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    </span>
                  </div>

                  <div v-if="ownerCategoryList.length == 0 && !showLoader"
                    class="w-full rounded bg-[#ebf8ff] px-1.5 py-1 mt-1">
                    <div class="flex items-center relative ">
                      <div
                        class="w-4 h-4 flex items-center justify-center border border-[#4B6E82] rounded-full absolute left-0">
                        <span class="text-sm text-[#4B6E82] rotate-180 font-bold ">!</span>
                      </div>
                      <div class="text-xs text-gray-500 pl-6">
                        {{ $t('foodCategoryPara') }}. {{ $t('cannotAddFoodMsg') }}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="relative z-0 w-full flex flex-col items-end sm:flex-col sm:items-end md:flex-col md:items-end lg:flex-row lg:items-start">
                  <div v-if="ownerSubCategoryList.length"
                    class="relative z-0 w-full mb-2 mr-0 sm:mr-0 sm:mb-2 md:mr-0 md:mb-2 lg:mr-4 lg:mb-0">
                    <select placeholder="" v-model="foodDetails.subCategoryId" name="subcategoryname"
                      @input="handleChange" @change="onSubCategoryChange($event)"
                      class="text-gray-600  block w-full mt-0 bg-transparent border-0 border-b appearance-none  focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm p-2 ">
                      <option value="" disabled hidden>Select Sub Category</option>
                      <option v-for="(item, i) in ownerSubCategoryList" :key="i" :value="item.subCategoryId">{{ item.name
                      }} </option>


                    </select>
                    <label for="select" class=" absolute  duration-300 top-3 -z-1  origin-0 text-gray-500 text-sm ">
                      {{ $t('cl_Sub_Category') }} </label>

                    <span class="absolute right-0 top-[15px] -z-50">
                      <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <a :href="localePath('/gintaa-food/vendor/add-category')"
                    class="bg-green text-white text-xs px-1 py-2 rounded text-center w-[100px] sm:w-[100px] md:w-[100px] lg:w-[120px] flex items-center justify-center h-[34px]">
                    {{ $t('foodViewCategory') }}</a>
                </div>



              </div>

              <div class="grid grid-cols-1">
                <div class="relative z-0 w-full mb-8">
                  <input type="text" name="name" placeholder=" " @input="handleChange" autocomplete="off"
                    v-model="foodDetails.name"
                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
                  <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{
                    $t('foodName') }}</label>
                  <p class="text-xs text-red-600" v-if="!namevalid">{{ namemessage }}</p>


                </div>
              </div>
              <div class="grid grid-cols-1 gap-2 mt-6 sm:grid-cols-1 md:grid-cols-2 md:gap-2 lg:gap-8">

                <div class="relative z-0 w-full ">
                  <input type="number" name="price" placeholder=" " @keydown="limitDecimalPlaces($event, 2)"
                    @input="handleChange" autocomplete="off" v-model="foodDetails.price" maxlength="4"
                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
                  <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{
                    $t('foodPrice') }}</label>
                  <p class="text-xs text-red-600" v-if="!priceValid">{{ pricemessge }}</p>

                </div>
                <div class="relative z-0 w-full mt-6">
                  <div class="flex items-center ">
                    <div class="mr-4 text-sm text-gray-500">{{ $t('foodType') }}</div>


                    <div class="flex items-center space-x-10">
                      <div v-for="(item, i) in foodTypeList" :key="i" class="flex items-center">
                        <input name="type" :value="item.value" type="radio" v-model="foodDetails.type"
                          @input="handleChange" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500">
                        <label for="veg" class="ml-3 block text-sm  text-gray-400">{{ item.foodtype }} </label>
                      </div>
                    </div>


                  </div>
                </div>



              </div>
              <div class="grid grid-cols-1">
                <div class="relative z-0 w-full mt-6 mb-6">
                  <textarea name="description" placeholder=" " @input="handleChange" minlength="2" maxlength="3000"
                    v-model="foodDetails.description"
                    class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
                  <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{
                    $t('cl_Description')
                  }}</label>

                  <p class="text-xs text-red-600" v-if="!descriptionValid">{{ descriptionmessge }}</p>

                </div>

              </div>

              <div  class="grid grid-cols-1" v-if="this.uploadedImages.length == 0">
                <div class="mb-3 text-xs text-gray-400">{{ $t('uploadImage') }}</div>


                <div   id="beforeUpload" @click="uploadMedia('before')" @dragover.prevent @drop="dropFiles"
                  class="grid grid-cols-12 gap-x-2 cursor-pointer">
                  <input type="file" @click="clearValue($event)" @change="filesChange($event)" accept="image/*"
                    id="fileUpload" class="hidden input-file">

                  <div id="preview">
                    <img v-if="imageUrl" :src="imageUrl" />
                  </div>

                  <div
                    class="col-span-12  h-[50vh] sm:h-[230px] flex flex-col justify-center  p-2 text-center border border-dashed  align-middle rounded bg-[#F6F9FE] border-firoza">
                    <div class="text-center ">
                      <img class="w-[200px] mx-auto " src="~/assets/images/upload.png" alt="upload" />
                    </div>

                    <div class="text-center mt-[-30px] mb-5">
                      <button
                        class="bg-firoza z-1 text-white font-base py-1 px-3  sm:h-12 rounded w-34 sm:w-56 text-base capitalize">
                        {{ $t('cl_Browse') }}
                      </button>
                    </div>

                  </div>



                </div>



              </div>

              <div v-if="this.uploadedImages.length > 0">
              <div class="mb-3 text-xs text-gray-400">{{ $t('uploadImage') }}</div>
              <div 
                  class="p-2   border border-firoza border-dashed grid grid-cols-4 gap-x-2"
                  id="">
                  <div class="">
                  
                  <div v-for="(item, i) in uploadedImages" :key="i"
                    class="relative border-r-0 border-b-0    sm:col-span-3 p-[5px] align-middle">
                    <!-- <div v-if="offerStage == 'Failed' && item.safe == false" title="Image Upload Failed" class="rounded-md bg-red-50 p-2 mb-2  border-errortext absolute left-2 top-2"><svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.97623 0.385841C10.4255 0.132888 10.9324 0 11.448 0C11.9636 0 12.4705 0.132888 12.9198 0.385841C13.3691 0.638795 13.7456 1.00328 14.013 1.44412L14.0159 1.44886L22.4859 15.5889L22.494 15.6027C22.756 16.0563 22.8946 16.5706 22.896 17.0945C22.8975 17.6183 22.7618 18.1334 22.5024 18.5885C22.243 19.0436 21.8689 19.4228 21.4174 19.6885C20.966 19.9541 20.4528 20.0969 19.929 20.1027L19.918 20.1028L2.97802 20.1027H2.96703C2.44322 20.097 1.93006 19.9541 1.47859 19.6885C1.02712 19.4228 0.653071 19.0436 0.393668 18.5885C0.134265 18.1334 -0.00145493 17.6183 1.17626e-05 17.0945C0.00147851 16.5706 0.140081 16.0563 0.402028 15.6027L0.410152 15.5889L8.88015 1.44887L9.738 1.96273L8.88302 1.44412C9.15042 1.00328 9.52694 0.638795 9.97623 0.385841ZM10.5942 2.47938L2.13071 16.6086C2.04553 16.7584 2.00049 16.9277 2 17.1001C1.99951 17.2747 2.04475 17.4464 2.13122 17.5981C2.21769 17.7498 2.34237 17.8762 2.49286 17.9647C2.64204 18.0525 2.81141 18.1 2.98442 18.1027H19.9116C20.0846 18.1 20.254 18.0525 20.4032 17.9647C20.5537 17.8762 20.6783 17.7498 20.7648 17.5981C20.8513 17.4464 20.8965 17.2747 20.896 17.1001C20.8956 16.9277 20.8505 16.7584 20.7654 16.6086L12.303 2.48137L12.3018 2.47938C12.2127 2.33333 12.0877 2.21255 11.9386 2.12861C11.7889 2.0443 11.6199 2 11.448 2C11.2762 2 11.1072 2.0443 10.9574 2.12861C10.8083 2.21255 10.6833 2.33333 10.5942 2.47938ZM11.448 6.10274C12.0003 6.10274 12.448 6.55046 12.448 7.10274V11.1027C12.448 11.655 12.0003 12.1027 11.448 12.1027C10.8957 12.1027 10.448 11.655 10.448 11.1027V7.10274C10.448 6.55046 10.8957 6.10274 11.448 6.10274ZM11.448 14.1027C10.8957 14.1027 10.448 14.5505 10.448 15.1027C10.448 15.655 10.8957 16.1027 11.448 16.1027H11.458C12.0103 16.1027 12.458 15.655 12.458 15.1027C12.458 14.5505 12.0103 14.1027 11.458 14.1027H11.448Z" fill="#FD3E3E"/>
</svg></div> -->

                    <!-- <div v-if="offerStage == 'Failed' && item.safe == false" title="Image Upload Failed" class=" bg-red-500 font-semibold p-1 mb-2 absolute  px-1 top-4 left-4  text-center text-white text-xs">
    ERROR
</div> -->
                    <div @click="deleteImage(item)"
                      class="absolute cursor-pointer right-[5px] top-[5px] z-1 rounded-[50%] border border-[#fc2323] h-6 w-6 bg-white drop-shadow pt-[2px]">

                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto" fill="none" viewBox="0 0 24 24"
                        stroke="#FC2323">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>

                    </div>
                    <!-- <div
                      class="cursor-pointer absolute left-1 bottom-[1px]  z-1 bg-white/[0.9] border border-green text-black font-base text-xs py-1 px-2">
                       <div class="flex">
                        <div class="pt-0 mr-1">
                          <div v-if="item.cover" class="selected">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="#6B9C2E">
                              <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                            </svg>
                          </div>

                          <div v-if="!item.cover" class="notSelected pt-[2px] mr-1">
                            <div class="rounded-[50%] h-3 w-3 bg-white border border-gray-700"></div>
                          </div>
                        </div>
                        <div>Cover Photo</div>
                      </div> 

                    </div> -->

                    <img :src="item.url" class="mx-auto block h-[150px] rounded" alt="..." />

                  </div>
                </div>


                </div>
              </div>
              <div class="pt-5 text-right">
                <button :disabled="!isFoodformValid" :class="!isFoodformValid ? 'opacity-50' : 'opacity-100'"
                  @click="submitOrUpdateFood()"
                  class="bg-green text-white text-sm px-5 py-3 rounded text-center min-w-[200px]">
                  <span v-show="!loading">{{ btnTitle }}</span>
                  <Spinner v-show="loading" />

                </button>
              </div>


            </div>
          </div>

          <!-- Add menu start -->
          <!-- <div class="w-full px-4 py-8">
                                       <div class="flex items-center justify-center mb-4">
                                            <img src="~assets/images/food/add-food.svg" alt="image" class=" max-w-full" />                              
                                       </div>
                                       <div class="flex items-center justify-center text-base text-gray-700 font-medium text-center">You don’t have any item</div>
                                       <div class="flex items-center justify-center text-base text-gray-700 text-center">Add items to receive the orders</div>
                                       <div class="flex items-center justify-center mt-4">
                                        <a href="/gintaa-food/vendor/add-menu" class="border border-green flex justify-center items-center bg-green w-[85px] py-1 px-2 rounded text-xs text-white">
                                              <span>Add Menu</span>
                                        </a> 
                                       </div>
                                  </div> -->
          <!-- Add menu end -->


        </div>

      </div>

      <CropFoodimage v-if="imageList.length > 0" :image="imageList" :rawImageList="rawImageList" @saveimg="saveimg"
        @closeCropListingModal="closeCropListingModal" />

    </div>
    <GintaaFoodVendorFooter />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from "vuex";
import {
    Cropper
} from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";

export default {
  name: 'AddMenuPage',
  components: {
    Cropper
  },
  data: function () {
    return {
      loading: false,
      isFoodformValid: false,
      showLoader: true,
      imageUrl: '',
      file: '',
      imageDetails: [],
      uploadedImages: [],
      videoDetails: [],
      totalFile: [],
      isAvailable: true,
      image: {
        src: null,
        type: null,
        name: null
      },
      imageList: [],
      videoList: [],
      rawImageList: [],
      foodTypeList: [{
        'value': 'NON_VEG',
        // 'checked': true,
        'foodtype': 'Non Veg' //this.$t('usedCondition')
      },
      {
        'value': 'VEG',
        // 'checked': false,
        'foodtype': 'Veg'//this.$t('newCondition')
      }],
      gstValueList: [{
        'value': 0,
        'selected': true,
        'conditionText': 0
      },
      {
        'value': 5,
        'selected': false,
        'conditionText': 5
      }

      ],
      foodDetails: {
        rid: '',
        name: '',
        categoryId: '',
        subCategoryId: '',
        price: null,
        type: '',
        description: ''
      },

      foodDetailsEditObj: {
        rid:'',
        name: '',
        categoryId: '',
        subCategoryId: '',
        price: null,
        type: '',
        description: ''
      },
      editMode: false,
      btnTitle: '',
      ownerCategoryList: [],
      ownerSubCategoryList: [],
      isPriceValid: true,

      namevalid: false,
      namemessage: '',
      priceValid: false,
      pricemessge: '',
      descriptionValid: true,
      descriptionmessge: '',
      imagesIdList : [],

    }
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),

  },

  beforeMount() {
    this.getResuturantCategoryList()
    // this.foodDetails.gstValue = 5
  },

  mounted() {
    // console.log("this.authuser",this.authUser)

    this.foodDetails.rid = this.authUser ? this.authUser?.uid : ''

    if (this.$route.query?.food_id) {
      this.editMode = true
      this.namevalid = true,
        this.priceValid = true,
        this.descriptionValid = true,
        this.getFoodById()
    }


    if (!this.editMode) {
      this.foodDetails.type = 'VEG'
    }

    if (this.editMode) {
      this.btnTitle = this.$t('cl_update');
      this.isFoodformValid = true
    } else {
      this.btnTitle = this.$t('cl_submit');
    }
    // this.checkIsFormValid()
    // this.getResuturantCategoryList()

  },

  methods: {

    handleChange(evt) {
      let fieldName = evt.target.name;

      switch (fieldName) {

        case 'price':
          if (evt.target.value < 1) {
            this.foodDetails.price = null
          }
          if (!this.foodDetails.price) {
            this.pricemessge = "Price is required"
            this.priceValid = false
          } else if (this.foodDetails.price > 9999) {
            this.pricemessge = "Food Price Should be within 1 to 9999"
            this.priceValid = false
          } else {
            this.priceValid = true
            this.pricemessge = ''
          }

          break;


        case 'name':

          if (!this.foodDetails.name) {
            this.namevalid = false,
              this.namemessage = "Food Name is Required"
          } else if (this.foodDetails.name.length > 99) {
            this.namevalid = false,
              this.namemessage = "Food Name Will be Within 100 character"
          } else {
            this.namevalid = true,
              this.namemessage = ''
          }

          break;
        case 'description':

          if (this.foodDetails.description.length > 2999) {
            this.descriptionValid = false
            this.descriptionmessge = "Description Will be within 3000 Character"
          } else {
            this.descriptionValid = true
            this.descriptionmessge = ""
          }

          break;
        default:
        // text = "Looking forward to the Weekend";
      }


      this.checkIsFormValid()
    },

    async onChange(event) {
      this.showLoader = true

      this.foodDetails.categoryId = event.target.value
      let categoryId = event.target.value
      let restaurantId = this.authUser ? this.authUser?.uid : ''

      try {
        const url = `/flisting/v1/restaurant/sub-category/${restaurantId}/all/${categoryId}`
        const data = await this.$axios.$get(url);
        //this.setEditableObj(data.payload)
        this.ownerSubCategoryList = data.payload
        //  console.log(" subcategory by owner ", this.ownerSubCategoryList)
        this.showLoader = false
        this.foodDetails.subCategoryId = ''
        this.checkIsFormValid()
      } catch (error) {
        this.showLoader = false
        console.log(error);

      }

    },

    async getResuturantCategoryList() {
      try {
        // console.log('call in update paymnet status')
        let restaurantId = this.authUser ? this.authUser?.uid : ''
        const url = `/flisting/v1/restaurant/category/${restaurantId}/all`
        const data = await this.$axios.$get(url);
        //this.setEditableObj(data.payload)
        this.ownerCategoryList = data.payload
        this.showLoader = false
      } catch (error) {
        this.showLoader = false
        console.log(error);

      }

    },
    async getFoodById() {
      try {
        // console.log('call in update paymnet status')
        let foodId = this.$route.query?.food_id
        const url = `/flisting/v1/food-listing/${foodId}`
        const data = await this.$axios.$get(url);
        this.setEditableObj(data.payload)
        //  console.log("data By food Id", data)
      } catch (error) {
        console.log(error);

      }

    },

    setEditableObj(foodDet) {
      

      this.foodDetails.rid = foodDet.restaurant.rid
      this.foodDetails.name = foodDet.name,
      this.foodDetails.price = foodDet.price,
      this.foodDetails.type = foodDet.type,
      this.foodDetails.description = foodDet.description
      this.foodDetails.categoryId = foodDet.categoryId
      this.uploadedImages = foodDet.images ? foodDet.images : []

      //Hold Edited Obj
      this.foodDetailsEditObj.rid = foodDet.restaurant.rid,
      this.foodDetailsEditObj.name = foodDet.name,
      this.foodDetailsEditObj.price = foodDet.price,
      this.foodDetailsEditObj.type = foodDet.type,
      this.foodDetailsEditObj.description = foodDet.description
      this.foodDetailsEditObj.categoryId = foodDet.categoryId
      this.fetchOwnerSunCategoryList(foodDet)
    },

    resetObj(foodDet) {
      this.foodDetails.rid = this.authUser ? this.authUser?.uid : ''
      this.foodDetails.name = '',
        this.foodDetails.price = null,
        this.foodDetails.type = 'VEG',
        this.foodDetails.description = ''
      this.foodDetails.subCategoryId = ''
      this.foodDetails.categoryId = ''
      this.ownerSubCategoryList = [],
        this.namevalid = false,
        this.namemessage = '',
        this.priceValid = false,
        this.pricemessge = '',
        this.descriptionValid = true,
        this.descriptionmessge = '',
        this.uploadedImages = []
        this.imagesIdList = []
    },

    async fetchOwnerSunCategoryList(foodDet) {
      // console.log("foodDet", foodDet)
      this.showLoader = true
      let categoryId = this.foodDetails.categoryId
      let restaurantId = this.authUser ? this.authUser?.uid : ''

      try {
        const url = `/flisting/v1/restaurant/sub-category/${restaurantId}/all/${categoryId}`
        const data = await this.$axios.$get(url);
        this.ownerSubCategoryList = data.payload
        this.showLoader = false
        this.foodDetails.subCategoryId = foodDet.subCategoryId
        // Hold  Edited Subgategory Value
        this.foodDetailsEditObj.subCategoryId = foodDet.subCategoryId

        console.log("foodDetailsEditObj",this.foodDetailsEditObj , this.foodDetails)
      } catch (error) {
        this.showLoader = false
        console.log(error);

      }

    },



    onSubCategoryChange(event) {
      this.checkIsFormValid()
    },

    checkIsFormValid() {

      if (!this.namevalid || !this.priceValid || !this.descriptionValid || this.foodDetails.categoryId == ''
      ) {
        this.isFoodformValid = false
      } else {
        if (this.ownerSubCategoryList && this.ownerSubCategoryList.length > 0) {
        //  console.log("ownerSubCategoryList length grater than 0")
          if (this.foodDetails.subCategoryId == '') {
            this.isFoodformValid = false
          } else {
            this.isFoodformValid = true
          }
        } else {
          this.isFoodformValid = true
        }

      }


    },
    toggleCheckbox() {
      this.isAvailable = !this.isAvailable
    },
    async filesChange(e) {
      this.file = e.target.files || e.dataTransfer.files;
     // console.log("this.file", this.file)

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

    },

    upload(ind, file) {


     // console.log("file-----", file)

      if (!this.editMode) {
        this.uploadMediaUrl = `/flisting/v1/food-listing/image`;
        var formData = new FormData();
        formData.append("file", file);
        formData.append('displayIndex', 0);
        formData.append('isCover', 'true');
      }

      if (this.editMode) {
        this.uploadMediaUrl = `/flisting/v1/food-listing/image`;
        var formData = new FormData();
        formData.append("file", file);
        formData.append('displayIndex', 0);
        formData.append('isCover', 'true');
        formData.append('foodId', this.$route.query?.food_id);
      }
      var custCall = this.$axios.$post(this.uploadMediaUrl, formData, {
        timeout: 300000
      }).then((res) => {
        console.log("res", res)
        Vue.$toast.success(res?.message);
        this.uploadedImages.push(res.payload)
       
     for (let i = 0; i <  this.uploadedImages.length; i++) {
      this.imagesIdList.push(this.uploadedImages[i].id)
      }
   //   console.log("this.imagesIdList",this.imagesIdList)
      this.showLoader = false
      // return custCall;
      })
        .catch(res => {
          this.showLoader = false
          console.log('FAILURE!!');
          Vue.$toast.error(res?.response?.data?.message);
         // this.errMssg = res.response.data.message ? res.response.data.message : this.staticErrorMsg;
        });

    },

    async deleteImage(deletedImageDet) {
     // console.log("deletedImageDet", deletedImageDet ,deletedImageDet.id)
     this.showLoader = true
      
      try {
        const url = `/flisting/v1/food-listing/image?imageId=${deletedImageDet.id}`
        const Ddata = await this.$axios.$delete(url);
        if(Ddata.success){
          Vue.$toast.success(Ddata?.message);
          this.uploadedImages = []
          this.imagesIdList = []
        }
        this.showLoader = false
        console.log("data", Ddata)
      } catch (error:any) {
        Vue.$toast.error(error?.response?.data?.message);
        this.showLoader = false
        console.log(error);

      }
    },

    //For Uploading Crop Images
    async saveimg(file) {
      console.log("file", file)
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

    clearValue(evt) {
      evt.target.value = "";
    },

    dropFiles(evt) {
      // evt.stopPropagation();
      // evt.preventDefault();
      // this.showLoader = true;
      // if (this.totalFile.length > 0) {
      //     this.afterUploadSt = true;
      // }
      // this.filesChange(evt);

      // this.counter = 0;
    },

    uploadMedia(state) {

      console.log("state", state)
      //this.counter = 0;
      let uploadButton = document.getElementById('fileUpload');
      uploadButton.click();
      // this.counter = 0;
      // let uploadButton = document.getElementById('fileUpload');
      // uploadButton.click();
      // if (state == "after") {
      //   this.afterUploadSt = true;
      // }


    },

    submitOrUpdateFood() {
      if (this.editMode) {
        this.updateFood()
      } else {
        this.submitFood()
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

    async submitFood() {
      //  console.log("this.foodDet", this.foodDetails)

      this.loading = true

      if (this.foodDetails.subCategoryId) {
        this.foodDetails.categoryId = ''
      }
      this.foodDetails.mediaId = this.imagesIdList
      try {
        const url = '/flisting/v1/food-listing/add'
        const data = await this.$axios.$post(url, this.foodDetails);
        // console.log("-------------------------", data)
        this.loading = false
        if (data.success) {
          Vue.$toast.success(data?.message);
          this.resetObj()
          this.isFoodformValid = false
        }
      } catch (error) {
        console.log(error);
        this.loading = false
      }
    },

    async updateFood() {

      let updatedDet = this.diff(this.foodDetailsEditObj,this.foodDetails)
      console.log("updatedDet",updatedDet)
      
      if(Object.keys(updatedDet).length === 0 ){
        this.$router.push(
            {
              path: (`/gintaa-food/vendor/menu`)
            })
        // Vue.$toast.warning("Please change any of the basic value of menu to update the menu");
         return false
      }
      updatedDet.rid = this.foodDetails.rid
    //  console.log("updatedDet",updatedDet)

      // if(updatedDet.description == ""){
      //   updatedDet.description = null
      // }

      this.loading = true

      if (this.foodDetails.subCategoryId) {
        this.foodDetails.categoryId = ''
      }

      if (updatedDet.subCategoryId) {
        updatedDet.categoryId = ''
      }
      try {
        let foodId = this.$route.query?.food_id
        const url = `/flisting/v1/food-listing/${foodId}`
        const data = await this.$axios.$put(url, updatedDet);
        if (data.success) {
          Vue.$toast.success(data?.message);
          this.$router.push(
            {
              path: (`/gintaa-food/vendor/menu`)
            })
          // /gintaa-food/vendor/menu
        }
        this.loading = false
      } catch (error: any) {
        this.loading = false
        Vue.$toast.error(error?.response?.data?.message);
        console.log(error);
      }
    },

   diff(obj1, obj2) {
    // console.log("obj1",obj1)
    // console.log("obj2",obj2)
    // console.log("obj1---obj2",obj1,obj2)
    // console.log("description.suncategorytrim",obj1['description'],obj2['description'])
   
    if(obj1['subCategoryId'] !== null && obj1['subCategoryId'].trim() == ''){
      obj1['subCategoryId'] = null
    }
    if(obj2['subCategoryId'] !== null && obj2['subCategoryId'].trim() == ''){
      obj2['subCategoryId'] = null
    }
   
    if(obj1['description'] !== null && obj1['description'].trim() == ''){
      obj1['description'] = null
    }

    if(obj2['description'] !== null && obj2['description'].trim() == ''){
      obj2['description'] = null
    }
   
    if(!obj1['description'] && !obj2['description']){
      delete obj1['description']
      delete obj2['description']
    }

    if(!obj1['subCategoryId'] && !obj2['subCategoryId']){
      delete obj1['subCategoryId']
      delete obj2['subCategoryId']
    }
   
  var result = {};
  for (let key in obj1) {
    if (obj2[key] != obj1[key]) result[key] = obj2[key];
    if (typeof obj2[key] == 'array' && typeof obj1[key] == 'array')
      result[key] = arguments.callee(obj1[key], obj2[key]);
    if (typeof obj2[key] == 'object' && typeof obj1[key] == 'object')
      result[key] = arguments.callee(obj1[key], obj2[key]);
  }
  return result;
}


  },



}
</script>
<style scoped>
.-z-1 {
  z-index: -1;
}

.origin-0 {
  transform-origin: 0%;
}

input[type="text"]:focus~label,
input[type="email"]:focus~label,
input[type="number"]:focus~label,
input[type="text"]:not(:placeholder-shown)~label,
input[type="email"]:not(:placeholder-shown)~label,
input[type="number"]:not(:placeholder-shown)~label,
textarea:focus~label,
textarea:not(:placeholder-shown)~label,
select:focus~label,
select:not([value='']):valid~label {
  /* @apply transform; scale-75; -translate-y-6; */
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-scale-x: 0.75;
  --tw-scale-y: 0.75;
  --tw-translate-y: -1.5rem;
}

input[type="text"]:focus~label,
input[type="email"]:focus~label,
input[type="number"]:focus~label,
select:focus~label,
textarea:focus~label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(72, 206, 243, var(--tw-text-opacity));
  left: 0px;
}

input[type="text"]:not(:placeholder-shown)~label,
textarea:not(:placeholder-shown)~label,
input[type="number"]:not(:placeholder-shown)~label,
select:not([value='']):valid~label {
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

.btn-create-list {
  display: none !important;
  opacity: 0;
  visibility: hidden;
}

.middle-ver .last-border:last-child {
  border-bottom: 1px solid #e5e7eb !important;
}

.shipping-section .accordion-button:not(.collapsed) {
  color: #000 !important;
  opacity: 0.8 !important;
  background: none !important;
}

.shipping-section .accordion-button.collapsed,
.shipping-section .accordion-item {
  border-radius: 2px !important;

}

.shipping-section .accordion-button::after {
  transform: rotate(180deg) !important;
}

.shipping-section .accordion-button:not(.collapsed)::after {
  transform: rotate(0deg) !important;
}</style>