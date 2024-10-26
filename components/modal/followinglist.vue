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
            <div @click="closeList" class="absolute top-0 right-0  pt-3 pr-3 sm:block">
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
              <div class="text-[11px] text-sm font-medium text-gray-700">{{ $t('following') }}({{totalFollowingNumber}})</div>
            </div>


            <div v-show="!loading && myFollowingList.length <= 0" class="text-center text-sm text-gray-400 min-h-[200px] flex flex-col w-full items-center">

              <div class="mb-5"><img src="~/assets/images/no-followings.png"/></div>
              {{ $t('notFollowing') }}
            </div>
  
            <div
              
              class="w-full px-4 min-h-[100px] max-h-[400px] overflow-auto auto-scroll"
            >
              <div
                v-for="item in myFollowingList"
                :key="item.uid"
                class="w-full flex justify-between items-center mb-2.5"
              >
                <a  :href="localePath(getLink(item.uid))" class="flex items-center">
                  <div class="flex-shrink-0">
                    <div class="img-followlist rounded-full border border-gray-100 w-9 h-9 flex justify-center items-center">
                    <ProfileAvatar :image-url="item.photoUrl" />
                  </div>
                    <!-- <img class="h-9 w-9 rounded-full" :src="item.photoUrl" alt="image"> -->
                  </div>
                  <div class="ml-3">
                    <div class="text-[11px] text-sm font-medium text-gray-500">
                      {{item.name}}
                    </div>
                  </div>
                </a>
                <a
                  @click="showUnfollowPopup(item)"
                  class="cursor-pointer text-center flex items-center justify-center  py-2 rounded-sm text-sm px-4 text-gray-400 border-gray-200 border mb-0  transition-all hg-follw"
                >
                  <span>{{$t('followingText')}}</span>
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

       
      <div
        v-if="viewUnfollowPopup"
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
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="pb-4 pt-6">
                <div class="flex items-center justify-center">

                  <div class="w-[90px] h-[90px] mx-auto border border-gray-100 flex justify-center items-center rounded-full unfollow-img-modal overflow-hidden">
                  <ProfileAvatar :image-url="uDetails.imgUrl" />
                  <!-- <img src="https://dev.cdn.gintaa.com/offers/image/20221111/rNRRNjkRgXhY3BPfdV0c9/thumbs/6tFJA92f5L17WhrFO9xyV2_71NzGbD3ydLUL1440_200x200.jpg"
                         alt="image" class="w-32 h-32 rounded-full"/> -->
                        </div>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <h3
                    class="text-sm font-medium leading-6 text-gray-500"
                    id="modal-title"
                  >
                  {{$t('UnFollowText')}}  <span class="font-bold">{{uDetails.name}}?</span>
                  </h3>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse mt-2">
                <button
                  @click="confirmUnfollow"
                  type="button"
                  class="w-full min-w-[130px] relative inline-flex justify-center rounded border  shadow-sm px-4 py-2 border-1 border-errortext text-base font-medium text-errortext hover:bg-red-700 hover:text-white focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm"
                >
                  <span v-show="!loading">  {{$t('UnFollowbtn')}}</span>
                  <Spinner v-show="loading" />
                </button>
              
                <button
                  type="button"  @click="closeModal"
                  class="mt-3 w-full inline-flex justify-center rounded border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                {{$t('cancel')}}
                </button>
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
    name: 'followinglist',
    props: ["totlalfollowingCount"],
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
            followText: null,
            isUserFollowed: Boolean,
            showFolloingList:false,
            page: 0,
            loading: true,
            enableSearchMore: false,
            myFollowingList: [],
            viewUnfollowPopup: false,
            uDetails: {
                uid: '',
                name: '',
                imgUrl: '',

            },
            followCount:null,
            totalFollowingNumber:null
        }
    },
    beforeMount() {
        // this.checkTheUserisFollowed(this.identityId)
        this.totalFollowingNumber =     this.totlalfollowingCount
        this.getMyFollowingList()
    },
    mounted() {
        
        // console.log("identityId",this.identityId)

    },
    methods: {

        closeList(){
         this.showFolloingList = false
         this.$emit('closeList', true);
        },

           getLink(uId:any) {
            if (uId) {
                return '/profile/view/' + uId + ''
            }
        },


        showUnfollowPopup(uDet: any) {
            //console.log("uDetails",uDetails)
            this.uDetails.uid = uDet.uid
            this.uDetails.name = uDet.name
            this.uDetails.imgUrl = uDet.photoUrl
            this.viewUnfollowPopup = true
        },

        closeModal() {
            this.viewUnfollowPopup = false
        },
        async getMyFollowingList() {
            this.loading = true
            try {
                const url = `/users/v1/user/followings?&size=12&page=${this.page}`
                const dataP = this.$axios.$get(url)
                const data = await dataP

              //  console.log("data", data)
                this.followCount = data.payload.followCount
                if (this.page === 0) {
                    this.myFollowingList = data.payload.followerList
                } else if (data.payload.followerList.length > 0) {
                    this.myFollowingList.push(...data.payload.followerList)
                }

                if(this.myFollowingList && this.myFollowingList.length > 0){
                    this.showFolloingList = true
                }

                this.enableSearchMore = data.payload.followerList.length > 0

               // console.log("this.enableSearchMore",this.enableSearchMore)

                this.loading = false
            } catch (error) {
                if (this.page === 0) {
                    this.myFollowingList = []
                }
                this.loading = false
                this.enableSearchMore = false
            }
        },

        // async confirmUnfollow(){

        // },


        async confirmUnfollow() {

            try {
                // const url = '';
                this.loading = true

                let url = `/users/v1/user/unfollow/` + this.uDetails.uid
                const data = await this.$axios.$delete(url);
              //  console.log("Data", data)
                if (data.success) {
                    if (this.myFollowingList.length) {
                        this.myFollowingList = this.myFollowingList.filter(listing => listing?.uid !== this.uDetails.uid)
                    }
                    this.totalFollowingNumber = this.totalFollowingNumber - 1
                    this.$emit('decreaseFollowingNumber', this.totalFollowingNumber);
                    this.viewUnfollowPopup = false
                    
                }
                this.loading = false


            } catch (error) {
                this.loading = false
                console.log(error);
            }

        },

 loadMore () {
 //   console.log("----------------------------------------------")
    if (!this.loading && this.enableSearchMore) {
      this.page++
      this.getMyFollowingList()
    }
  },



    }


})
  </script>
  
  <style>
  .fav-color path {
    fill: #ee2a7b !important;
  }
  .unfollow-img-modal .unfollow-img {
    width: 90px;
    height: 90px;
  }
  .img-followlist .unfollow-img {

    

  }
  </style>
  