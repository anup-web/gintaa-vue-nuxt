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
            <div @click="closeFollowerList" class="absolute top-0 right-0  pt-3 pr-3 sm:block">
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
              <div class="text-sm font-medium text-gray-700">{{ $t('followers') }}({{this.totalfollowerCount}})</div>
            </div>


            <div v-show="!loading && myFollowerList.length <= 0" class="text-center text-sm text-gray-500 min-h-[200px] flex flex-col w-full items-center">
              <div class="mb-5"><img src="~/assets/images/no-followers.png"/></div>
              {{ $t('noFollowers') }}
            </div>
  
            <div
             
              class="w-full px-4 min-h-[100px] max-h-[400px] overflow-auto auto-scroll"
            >
              <div
                v-for="(item,index) in myFollowerList"
                :key="index"
                class="w-full flex justify-between items-center mb-2.5"
              >
                <a  :href="localePath(getLink(item.uid))" class="flex items-center">
                  <div class="flex-shrink-0">
                    <ProfileAvatar :image-url="item.photoUrl" />
                    <!-- <img class="h-9 w-9 rounded-full" :src="item.photoUrl" alt="image"> -->
                  </div>
                  <div class="ml-3">
                    <div class="text-[11px] text-sm font-medium text-gray-500">
                      {{item.name}}
                    </div>
                  </div>
                </a>

                 <a @click="followAndUnfollow(item,index)" :class="!item.followEnabled ? 'border-gray-200 border text-gray-500  bg-white ' : 'text-white border-firoza bg-firoza'" class=" cursor-pointer text-center flex items-center justify-center py-1 h-[31px] rounded-md text-sm px-6  border mb-0 hover:bg-firoza hover:text-white transition-all hg-follw w-[80px]" >
                 <span v-if="index !== indexValue" > {{item.followEnabled ?  $t('follow') : $t('unfollow') }}</span> 
                 <Spinner v-show="btnloading && index === indexValue" />
                  </a> 
                
              </div>

              <div v-show="loading" class=" py-6 flex justify-center">
              <Spinner />
            </div>

            <Trigger @triggerIntersected="loadMore" />
              
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
    props: ["totalfollowerCount"],
    name: 'followerslist',
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
            isUserFollowed: Boolean,
            showFollowerList:false,
            page: 0,
            loading: false,
            enableSearchMore: false,
            myFollowerList: [],
            viewUnfollowPopup: false,
            followCount:null,
            btnloading:false,
            indexValue:null
        }
    },
    beforeMount() {
        this.getMyFollowersList()
    },
    mounted() {
    },
    methods: {

     async followAndUnfollow(selectedUser:any ,indValue:any){
      this.indexValue = indValue
     //  console.log("selectedUser",selectedUser)
       this.btnloading = true

       if(selectedUser.followEnabled){
      //  console.log("Yess clicking On follow")
        try { 
          let url = `/users/v1/user/follow/`+selectedUser.uid
                    const data = await this.$axios.$post(url);
                    if(data.success){
                      this.btnloading = false
                      this.indexValue = null
                      return  selectedUser.followEnabled = false
                    }
                    // this.btnloading = false
        }catch (error) {

          this.btnloading = false
                
                console.log(error);
                }
        
        
       }else if (!selectedUser.followEnabled){
        try {

        
        let url = `/users/v1/user/unfollow/`+selectedUser.uid
                    const data = await this.$axios.$delete(url);
                    
                    if(data.success){
                      this.btnloading = false
                      this.indexValue = null
                      return  selectedUser.followEnabled = true
                    }
                   
                  }catch (error) {
                    this.btnloading = false
                console.log(error);
                }
        
       }
       //return  selectedUser.followEnabled = !selectedUser.followEnabled

      },

        closeFollowerList(){
         this.showFollowerList = false
         this.$emit('closeFollowerUserList', true);
        },
        
        getLink(uId:any) {
            if (uId) {
                return '/profile/view/' + uId + ''
            }
        },
     
        async getMyFollowersList() {
            this.loading = true
            try {
                const url = `/users/v1/user/followers?&size=12&page=${this.page}`
                const dataP = this.$axios.$get(url)
                const data = await dataP

               // console.log("data", data)
                this.followCount = data.payload.followCount

                if (this.page === 0) {
                    this.myFollowerList = data.payload.followerList
                } else if (data.payload.followerList.length > 0) {
                    this.myFollowerList.push(...data.payload.followerList)
                }

                if(this.myFollowerList && this.myFollowerList.length > 0){
                    this.showFollowerList = true
                }

                this.enableSearchMore = data.payload.followerList.length > 0

                this.loading = false
            } catch (error) {
                if (this.page === 0) {
                    this.myFollowerList = []
                }
                this.loading = false
                this.enableSearchMore = false
            }
        },

 loadMore () {
  //  console.log("---------------------------------------------- is calling")
    if (!this.loading && this.enableSearchMore) {
      this.page++
      this.getMyFollowersList()
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
  