<template>
  <div class="relative bg-[#edf0f5] min-h-screen">

    <GintaaFoodVendorSidebar />
    <div class="content-wrapper content-wrapper-min pl-0 relative z-10 sm:pl-0 md:pl-[180px] lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px]">
      <fullPageLoader v-if="showLoader" />
      <GintaaFoodVendorHeader />
      <div class="content pt-[60px] pb-[100px] px-4 sm:pt-[60px] sm:px-4 sm:pb-[100px] md:pt-[100px] md:px-4 md:pb-0 lg:px-8">
        <div class="flex items-center justify-between mb-4">
                    <div class="text-right text-base font-medium">Add Category</div> 
                    <div class="items-center justify-center hidden sm:hidden md:flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5.37766L17.5 12.3568V20.0002H12.5V15.0002H7.5V20.0002H2.5V12.3568L10 5.37766ZM20 10.1235L10 0.833496L0 10.111L1.13417 11.3318L10 3.1085L18.8658 11.3443L20 10.1235Z" fill="#8EC23C"/>
                        </svg>
                         <span class="text-sm text-green ml-2">Home / Add Category</span>
                    </div>
                </div>

        <div  v-if="categoryList && categoryList.length > 0" class="table-content bg-white rounded-sm py-6 shadow-sm max-w-[1100px] mx-auto">

          <div class="px-4 sm:px-4 md:px-4 lg:px-6 ">
            <div class="sm:flex sm:items-center">
              <div class="sm:flex-auto">
                <h1 class="text-[15px] font-medium text-[#303e67]">{{ $t('foodAddCategory') }}</h1>

              </div>

            </div>
            <div class="mt-6 flex flex-col">
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 md:grid-cols-2 md:gap-8">

                <div class="relative z-0 w-full ">
                  <select placeholder=" " v-model="selectedCategory"
                    class="text-gray-600  block w-full mt-0 bg-transparent border-0 border-b appearance-none  focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm p-2 ">
                    <option :value="{}" disabled hidden>Select Category</option>
                    <option v-for="(item, i) in categoryList" :key="i" :value="item">{{ item.name }}</option>
                  </select>
                  <label for="select" class=" absolute  duration-300 top-3 -z-1  origin-0 text-gray-500 text-sm ">
                    {{ $t('foodCategory') }} </label>

                  <span class="absolute right-0 top-[15px] -z-50">
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>

                <div class="ml-2 flex justify-end">
                  <button :disabled="!selectedCategory.id" @click="addCategory()"
                    :class="!selectedCategory.id ? 'opacity-50' : 'opacity-100'"
                    class="bg-green text-white text-base px-3 py-2 rounded text-center min-w-[150px]">
                    <!-- Add Category  {{$t('cl_Add')}} -->
                    <span v-show="!loading">{{ $t('foodAddCategory') }}</span>
                    <Spinner v-show="loading" />
                  </button>
                </div>

              </div>



            </div>
          </div>




        </div>

        <div class="table-content bg-white rounded-sm py-6 shadow-sm max-w-[1100px] mx-auto mt-3">

          <div v-if="allDetailsOfResturant && allDetailsOfResturant.length" class="px-4 sm:px-4 md:px-4 lg:px-6">
            <h1 class="text-[15px] font-medium text-[#303e67]">{{ $t('foodAddedCategory') }}</h1>
            <div class="w-full mt-4">
              <div class="accordion" id="accordionExample5">

                <div v-for="(item, i) in allDetailsOfResturant " :key="i"
                  class="accordion-item bg-white border border-gray-200 mb-4 rounded-none">
                  <h2 class="accordion-header mb-0 relative" id="headingOne5">
                    <button class="relative flex items-center w-full py-3 px-4 text-sm font-medium text-gray-600 text-left bg-white
                                                    border-0 rounded-none transition focus:outline-none" type="button"
                      data-bs-toggle="collapse" :data-bs-target="'#subcategory-expandable-container' + i"
                      aria-expanded="false" aria-controls="collapseOne5"
                      :class="item.subCategories && item.subCategories.length > 0 ? 'accordion-button' : ''">
                      {{ item.name }}
                    </button>

                    <!-- delete Category Button -->
                    <div
                      v-if="item.subCategories && item.foodListings && item.subCategories.length == 0 && item.foodListings.length == 0"
                      @click="deleteitem(item, 'category')"
                      class="flex justify-center items-center border border-[#FC2323] rounded cursor-pointer w-5 h-5 absolute top-[12px] left-[130px] z-20 sm:left-[185px] md:left-[185px]">
                      <svg width="12" height="12" viewBox="0 0 24 28" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                          fill="#FC2323"></path>
                      </svg>
                    </div>

                    <button  type="submit" @click="addSubCategory(item)"
                      class=" absolute top-[8px] right-[55px] z-20 border border-firoza flex justify-center items-center bg-transparent py-1 px-2 rounded-md  text-firoza font-normal text-[11px] sm:text-sm sm:right-[75px] md:text-sm md:right-[75px]">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 hidden sm:block md:block">
                        <path fill-rule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clip-rule="evenodd"></path>
                      </svg>
                      <span> {{ $t('foodAddSubcategory') }} </span>
                    </button>
                  </h2>
                  <div v-if="item.subCategories && item.subCategories.length > 0"
                    :id="'subcategory-expandable-container' + i" class="accordion-collapse collapse show"
                    aria-labelledby="headingOne5">
                    <div class="accordion-body py-0 px-0">
                      <div class="w-full px-4 py-4">
                        <ul class="ml-0">
                          <li v-for="(itemk, j) in item.subCategories " :key="j"
                            class="  py-2 border-l border-gray-200 pl-6 relative before:absolute before:w-[12px] before:h-[1px] before:bg-gray-300 before:top-4 before:left-0 ">
                            <div class="flex items-center">
                              <div class="text-sm text-gray-700">{{ itemk.name }}</div>
                              <div class="flex items-center ml-4">

                                <div v-if="itemk.foodListings && itemk.foodListings.length == 0"
                                  @click="deleteitem(itemk, 'subcategory')"
                                  class="flex justify-center items-center border-0 border-[#FC2323] rounded cursor-pointer w-5 h-5">
                                  <svg width="14" height="14" viewBox="0 0 24 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                                      fill="#FC2323"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </li>


                        </ul>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
          <div v-if="allDetailsOfResturant && allDetailsOfResturant.length == 0 && !showLoader" class="text-center py-10">
            {{ $t('notCategory') }}</div>
        </div>

      </div>

    </div>

    <GintaaFoodVendorFooter />

    <!-- Add Sub Category modal start -->
    <div v-if="showSubCategoryAddModal" class="relative z-50 " aria-labelledby="modal-title" role="dialog"
      aria-modal="true">

      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex min-h-full items-start justify-center p-4 text-center sm:p-0">

          <div
            class="relative transform overflow-hidden rounded-lg bg-white px-0 pt-2 pb-4 text-left shadow-xl transition-all sm:my-4 sm:w-full sm:max-w-sm ">

            <div class="w-full">
              <div class="flex items-center justify-between border-b-2 border-gray-200 px-4 pb-2">
                <div class="text-base text-gray-900 font-medium">{{ $t('foodAddSubcategory') }}</div>
                <div class="absolute top-0 right-0 pt-2 pr-2 block">
                  <button @click="closeSubcatModal()" type="button" class="rounded-md bg-white text-gray-400 ">
                    <span class="sr-only">Close</span>

                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="w-full text-gray-900 text-sm px-4 py-2">{{ $t('foodCategory') }}: <span class="ml-1">{{
                this.selectedMasterCategory.name }}</span></div>
              <div class="w-full px-4 pb-2">
                <form role="search" class="flex w-full relative rounded-md mb-2 sm:mb-0 md:mb-0"><label
                    for="top-bar-search" class="flex flex-1 items-center "><input id="search at header" type="text"
                      autocomplete="off" name="search" v-model="search" placeholder="Search" value=""
                      class="w-full h-full flex item-center appearance-none transition duration-300 ease-in-out text-heading text-sm placeholder-gray-500 overflow-hidden rounded focus:outline-none focus:ring-0 bg-gray-100 ps-10 pe-12 md:ps-14 border border-border-200 focus:border-accent focus:bg-light py-2 px-4"></label>
                  <span
                    class="w-12 md:w-12 h-full absolute top-0 right-0 flex flex-shrink-0 justify-center items-center focus:outline-none"><svg
                      width="20" height="20" viewBox="0 0 20 20" fill="none"
                      class="w-5 h-5 text-skin-base ttext-gray-400">
                      <path
                        d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z"
                        fill="#888a8f"></path>
                    </svg></span>
                </form>
              </div>

              <div class="w-full px-4 mt-2">
                <div class="w-full subcategory-list auto-scroll">

                  <ul>
                    <li v-for="(subCitem, i) in filteredList" :key="i" @click="selectSubCategory(subCitem)"
                      class="text-gray-500 text-sm py-1.5 pl-2 cursor-pointer relative hover:bg-gray-100">
                      <span> {{ subCitem.name }}</span>
                      <span v-if="subCitem.selected" class="absolute top-[8px] right-4">
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z"
                            fill="#8BC63E" />
                        </svg>
                      </span>
                    </li>

                  </ul>
                </div>
              </div>


              <div :disabled="!isSubCategorySelected" :class="!isSubCategorySelected ? 'opacity-50' : 'opacity-100'"
                class="w-full px-4 mt-4">
                <button type="button" @click="isSubCategorySelected ? submitSubcateGory() : false"
                  class="w-full border border-firoza flex justify-center items-center py-1.5 px-4 rounded bg-firoza text-base text-white">
                  <span v-show="!loading">{{ $t('cl_Add') }}</span>
                  <Spinner v-show="loading" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Add Sub Category modal end -->


    <!-- Remove Category confirm modal start -->
    <div v-if="showremovemodal" class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
            <div class="absolute top-0 right-0 pt-4 pr-4 block">
              <button @click="closedeletePopup" type="button"
                class="rounded-md bg-white text-gray-400 hover:text-gray-500 ">
                <span class="sr-only">Close</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                  aria-hidden="true">
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
                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{{ consformationMesage }}
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">{{ catname }}</p>
                </div>
              </div>
            </div>
            <div class="mt-8 sm:mt-8 flex justify-end">
              <button type="button" @click="closedeletePopup"
                class="flex w-[85px] justify-center items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">{{ $t('cancel') }}</button>
              <button type="button" @click="removecategoryOrSubctegory"
                class="flex w-[85px] justify-center items-center rounded-md bg-errortext px-3 py-2 text-sm font-semibold text-white ml-3 ">
                <span v-show="!loading">{{ $t('remove') }}</span>
                <Spinner v-show="loading" />
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Remove Category confirm modal end -->


  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapState } from "vuex";
export default {
  name: 'addCategoryPage',

  data: function () {
    return {
      showremovemodal: false,
      deletetype: '',
      deletedId: '',
      consformationMesage: '',
      catname: '',
      search: '',
      categoryList: [],
      subcategoryList: [],
      rawMasterSubcategoryList: [],
      selectedCategory: {},
      selectedSubCategory: {},
      selectedMasterCategory: {},
      editMode: false,
      btnTitle: '',
      allDetailsOfResturant: [],
      showSubCategoryAddModal: false,
      isSubCategorySelected: false,
      addedMasterCat: [],
      addedMasterSubCat: [],
      loading: false,
      showLoader: true,

    }
  },

  computed: {
    filteredList() {
      this.subcategoryList.map((subCatItem: any) => {
        if (subCatItem) {
          subCatItem.selected = false
        }
      })
      this.isSubCategorySelected = false
      return this.subcategoryList.filter(subCitem => {
        return subCitem.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },

    ...mapState({
      authUser: (state) => state.authUser,
    }),
  },

  beforeMount() {
    this.getAllFoodCategoryAndSubcategory()
  },

  mounted() {
    //  this.getCategoryMasterList()
    this.getSubcategoryMasterList()

  },

  methods: {

    closedeletePopup() {
      this.showremovemodal = false
    },



    deleteitem(itemVal, deletetype) {
      console.log("itemVal", itemVal, deletetype)
      this.deletedId = itemVal.id
      this.deletetype = deletetype
      if (deletetype == 'category') {
        this.consformationMesage = 'Do you want to delete the category ? '
      } else {
        this.consformationMesage = 'Do you want to delete the subcategory ?'
      }
      this.catname = itemVal.name
      this.showremovemodal = true
    },

    removecategoryOrSubctegory() {
      if (this.deletetype == 'category') {
        this.deleteCategory()
      } else {
        this.deletesubCategory()
      }
    },
    async deleteCategory() {
      this.loading = true
      let rid = this.authUser ? this.authUser?.uid : ''
      try {
        const url = `/flisting/v1/restaurant/category/${rid}/delete/${this.deletedId}`
        const data = await this.$axios.$delete(url);
        if (data.success) {
          this.getAllFoodCategoryAndSubcategory()
          Vue.$toast.success(data?.message);
          this.closedeletePopup()
        }
        this.loading = false
      } catch (error: any) {
        this.loading = false
        Vue.$toast.error(error?.response?.data?.message);
        console.log(error);
      }
    },

    async deletesubCategory() {
      this.loading = true
      let rid = this.authUser ? this.authUser?.uid : ''
      try {
        const url = `/flisting/v1/restaurant/sub-category/${rid}/delete/${this.deletedId}`
        const data = await this.$axios.$delete(url);
        if (data.success) {
          this.getAllFoodCategoryAndSubcategory()
          Vue.$toast.success(data?.message);
          this.closedeletePopup()
        }
        this.loading = false
      } catch (error: any) {
        this.loading = false
        Vue.$toast.error(error?.response?.data?.message);
        console.log(error);
      }
    },

    closeSubcatModal() {
      this.subcategoryList = this.rawMasterSubcategoryList
      this.subcategoryList.map((subCatItem: any) => {
        if (subCatItem) {
          subCatItem.selected = false
        }
      })
      this.showSubCategoryAddModal = false
      this.isSubCategorySelected = false
      this.search = ''
    },
    async addSubCategory(masterCategory) {
      // this.addedMasterSubCat = []
     // console.log("add subcategory", masterCategory)
      this.selectedMasterCategory = masterCategory
      if (this.addedMasterSubCat && this.addedMasterSubCat.length > 0) {
            this.addedMasterSubCat = []
          }
          if (masterCategory && masterCategory.subCategories.length > 0) {
            for (let i = 0; i < masterCategory.subCategories.length; i++) {
              this.addedMasterSubCat.push(masterCategory.subCategories[i].masterCategoryId)
            }
            
          }

      if (this.addedMasterSubCat && this.addedMasterSubCat.length > 0) {
        for (let j = 0; j < this.addedMasterSubCat.length; j++) {
          this.subcategoryList = this.subcategoryList.filter(item => item.id !== this.addedMasterSubCat[j])
        }
      }

      // console.log(" this.subcategoryList", this.subcategoryList)

      if (this.subcategoryList.length > 0) {
        this.showSubCategoryAddModal = true
      } else {
        Vue.$toast.warning('You have added all the subcategories .Please delete before adding a new one');
      }




    },

    async getCategoryMasterList() {
      this.categoryList = []
      try {
        let foodId = this.$route.query?.food_id
        const url = `/flisting/v1/category/CATEGORY`
        const data = await this.$axios.$get(url);
       // console.log(" category data", data)
        this.categoryList = data.payload

        //Filtering The category Obj
        if (this.addedMasterCat.length) {
          for (let j = 0; j < this.addedMasterCat.length; j++) {
            this.categoryList = this.categoryList.filter(item => item.id !== this.addedMasterCat[j])
          }
        }
        this.showLoader = false
        //End Filtering The category Obj
      } catch (error) {
        console.log(error);
        this.showLoader = false
      }

    },


    async submitSubcateGory() {
      this.loading = true
      let postObj = {
        rid: this.authUser ? this.authUser?.uid : '',
        categoryId: this.selectedMasterCategory.id, //this.selectedSubCategory.id,
        categoryMasterId: this.selectedSubCategory.id  //this.selectedMasterCategory.id 
      }

      try {
        const url = '/flisting/v1/restaurant/sub-category'
        const data = await this.$axios.$post(url, postObj);
        if (data.success) {
          this.getAllFoodCategoryAndSubcategory()
          this.closeSubcatModal()
          Vue.$toast.success(data?.message);
        }
        this.loading = false
      } catch (error: any) {
        this.loading = false
        Vue.$toast.error(error?.response?.data?.message);
        console.log(error);
      }
    },

    async getSubcategoryMasterList() {
      try {
        let foodId = this.$route.query?.food_id
        const url = `/flisting/v1/category/SUB_CATEGORY`
        const data = await this.$axios.$get(url);
        const subCategoryList = data.payload
        subCategoryList.map((subCatItem: any) => {
          if (subCatItem) {
            subCatItem['selected'] = false
          }
        })
        this.subcategoryList = subCategoryList
        this.rawMasterSubcategoryList = subCategoryList

      //  console.log("subCategoryListsubCategoryListsubCategoryListsubCategoryList", this.subcategoryList)
      } catch (error) {
        console.log(error);
      }
    },

    selectSubCategory(SubCategory) {
      this.subcategoryList.map((subCatItem: any) => {
        if (subCatItem) {
          subCatItem.selected = false
        }
      })
      SubCategory.selected = true
      this.selectedSubCategory = SubCategory
      this.isSubCategorySelected = true
     // console.log(this.selectedSubCategory)
    },
    async addCategory() {
     // console.log("selectedCategory", this.selectedCategory)
      this.loading = true
      let postObj = {
        rid: this.authUser ? this.authUser?.uid : '',
        categoryMasterId: this.selectedCategory.id
      }

      try {
        const url = '/flisting/v1/restaurant/category'
        const data = await this.$axios.$post(url, postObj);
        if (data.success) {
          this.loading = false
          Vue.$toast.success(data?.message);
          this.getAllFoodCategoryAndSubcategory()
          this.selectedCategory = {}
        }
      //  console.log("-------------------------", data)
      } catch (error: any) {
        this.loading = false
        Vue.$toast.error(error?.response?.data?.message);
        //  console.log(error?.response?.data?.message);
      }

    },

    async getAllFoodCategoryAndSubcategory() {
      this.allDetailsOfResturant = []
      try {
        let restaurantId = this.authUser ? this.authUser?.uid : ''
        const url = `/flisting/v1/food-listing/restaurant/${restaurantId}?stockAvailable=false`
        const data = await this.$axios.$get(url);
        //  console.log("------------------------- data for resturant", data)
        this.allDetailsOfResturant = data.payload
        // console.log("this.allDetailsOfResturant", this.allDetailsOfResturant)
        if(this.addedMasterCat.length > 0){
          this.addedMasterCat = []
        }
        if (this.allDetailsOfResturant && this.allDetailsOfResturant.length > 0) {
          let arrayObj: any = []
          for (let i = 0; i < this.allDetailsOfResturant.length; i++) {
            this.addedMasterCat.push(this.allDetailsOfResturant[i].masterCategoryId)
          }

          // const selectedSubCategories = this.allDetailsOfResturant.map(item => {
          //   return item.subCategories
          // })
          // let addedSubcategoryList = selectedSubCategories.flat(1)
          
          // if (this.addedMasterSubCat && this.addedMasterSubCat.length > 0) {
          //   this.addedMasterSubCat = []
          // }
          // if (addedSubcategoryList && addedSubcategoryList.length > 0) {
          //   for (let i = 0; i < addedSubcategoryList.length; i++) {
          //     this.addedMasterSubCat.push(addedSubcategoryList[i].masterCategoryId)
          //   }
            
          // }

         
          // this.getSubcategoryMasterList()
        }

        this.getCategoryMasterList()
      //  this.showLoader = false




      } catch (error) {
        console.log(error);
        this.showLoader = false
      }
    }

  }
}
</script>

<style>
.-z-1 {
  z-index: -1;
}

.origin-0 {
  transform-origin: 0%;
}

input[type="text"]:focus~label,
input[type="email"]:focus~label,
input[type="text"]:not(:placeholder-shown)~label,
input[type="email"]:not(:placeholder-shown)~label,
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
select:focus~label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(72, 206, 243, var(--tw-text-opacity));
  left: 0px;
}

input[type="text"]:not(:placeholder-shown)~label,
select:not([value='']):valid~label {
  color: rgba(72, 206, 243, var(--tw-text-opacity));
}

.subcategory-list {
  min-height: 150px;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 300px;
}


.accordion-button:not(.collapsed)::after {
  background-image: url(~/assets/images/down-arrow.svg) !important;
  transform: rotate(-180deg) !important;
}

.accordion-button::after {
  width: 1rem !important;
  height: 1rem !important;
  background-size: 1rem !important;
  background-image: url(~/assets/images/down-arrow.svg) !important;
}

.accordion-item:first-of-type {

  border-top-left-radius: 0rem !important;
  border-top-right-radius: 0rem !important;

}

.accordion-item:not(:first-of-type) {
  border-top: 1px solid #e5e7eb !important;
}

.accordion-item:last-of-type {
  border-bottom-right-radius: 0rem !important;
  border-bottom-left-radius: 0rem !important;

}

.accordion-button:not(.collapsed) {
  box-shadow: none !important;
  border-bottom: 1px solid #e5e7eb !important;
}</style>