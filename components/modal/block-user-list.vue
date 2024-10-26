<template>
    <div 
      class="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[310px] md:w-[430px]"
          >
            <div @click="closeBlockUserList" class="absolute top-0 right-0  pt-3 pr-3 sm:block">
              <button
                type="button"
                class="rounded-full bg-gray-400 text-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-firoza focus:ring-offset-2 p-0.5"
              >
                <span class="sr-only">Close</span>
  
                <svg
                  class="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
  
            <div class="w-full bg-gray-200 px-4 py-3 mb-4">
              <div class="text-sm font-medium text-gray-700">Block User List</div>
            </div>


            <div v-show="!loading && blockUserList.length <= 0" class="text-center text-sm text-gray-500 min-h-[200px] flex flex-col w-full items-center">
              <div class="mb-5"><img src="~/assets/images/no-followers.png"/></div>
              No Block user found
            </div>
  
            <div
              class="w-full px-4 min-h-[100px] max-h-[400px] overflow-auto auto-scroll"
              >
              <div
                v-for="(item,index) in blockUserList"
                :key="index"
                class="w-full flex justify-between items-center mb-2.5"
                >
                <a :href="localePath(getLink(item.id))" class="flex items-center">
                  <div class="flex-shrink-0">
                    <ProfileAvatar :image-url="item.imageUrl" />
                    <!-- <img class="h-9 w-9 rounded-full" :src="item.photoUrl" alt="image"> -->
                  </div>
                  <div class="ml-3">
                    <div class="text-[11px] text-sm font-medium text-gray-500">
                      {{item.name}}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div
              class="w-full px-4 min-h-[100px] max-h-[400px] overflow-auto auto-scroll"
              v-if="loading"
              >
              <div  class=" py-6 flex justify-center">
                <Spinner />
              </div>
            </div>
          
           
        </div>

        
         
      </div>
  
        </div>


    </div>
  </template>
  <script lang="ts">
 import {
    mapState,
    mapGetters
} from 'vuex'
import Vue from 'vue'
export default Vue.extend({
    middleware: "authenticated",
    // props: ["totalfollowerCount"],
    name: 'block-user-list',
    computed: {
        ...mapState({
            authUser: state => state.authUser
        }),
        ...mapGetters({
            isLoggedIn: 'isLoggedIn'
        })
    },
    data() {
        return {
            showFollowerList:false,
            page: 0,
            loading: false,
            enableSearchMore: false,
            blockUserList: [],
            viewUnfollowPopup: false,
            followCount:null,
            btnloading:false,
            indexValue:null
        }
    },
    beforeMount() {
        this.getBlockUserList()
    },
    mounted() {
    },
    methods: {

      closeBlockUserList(){
        this.$emit('closeBlockUserList', true);
      },
      
      getLink(uId:any) {
          if (uId) {
              return '/profile/view/' + uId + ''
          }
      },
    
      async getBlockUserList() {
          this.loading = true
          try {
            const url = `/users/v1/user/report/blocked-users`
            const data = await this.$axios.$get(url)

            // console.log("data", data)

            if(data.payload) {
              this.blockUserList = data.payload
            } else {
              this.blockUserList = []
            }
            this.loading = false

          } catch (error) {
            this.loading = false
            this.blockUserList = []
          }
      },

    }


})
  </script>
  
  <style>
  .fav-color path {
    fill: #ee2a7b !important;
  }
  </style>
  