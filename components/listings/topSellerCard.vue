<template>
  <div>
    <a :href="localePath(getLink(selllerDet.uid))" class="cursor-pointer">
      <div class="flex items-center justify-center">
        <img v-if="getTopsellerImageUrl(selllerDet.photoURL)" :src="getTopsellerImageUrl(selllerDet.photoURL)"
          :alt="selllerDet.photoURL"
          class="w-28 h-28 rounded-full sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-28 lg:h-28 xl:w-28 xl:h-28 2xl:w-28 2xl:h-28" />
        <img v-else src="~/assets/images/profile/chatu-noimg.svg" alt="image"
          class="w-28 h-28 rounded-full sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-28 lg:h-28 xl:w-28 xl:h-28 2xl:w-28 2xl:h-28 border border-gray-200" />
      </div>
    </a>
    <div class="flex items-center justify-center mt-2 relative group h-[20px]">
        <span class="text-sm text-center text-gray-700 font-medium truncate">{{ selllerDet.displayName }}</span> 
        <div class="absolute top-[20px] flex flex-col items-center hidden w-full group-hover:block ">
          <div class="rounded text-left z-10 px-2 py-1 bg-gray-100 shadow-lg absolute ">
            <span class="text-sm text-center text-gray-700 font-medium ">{{ selllerDet.displayName }}</span>                           
          </div> 
        </div>
      
      </div>
      <div   class="flex items-center justify-center mt-1 h-[17px]">
       <div v-if="isSellerRatingExists(selllerDet.averageRating)" class="text-gray-600 flex items-center ">
        <svg viewBox="0 0 22 22" fill="none" class="w-3 h-3">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z"
            fill="#FF9500"></path>
        </svg>
        <span class="pl-1 font-medium text-[11px]">{{ tofixedTwoDigit(selllerDet.averageRating) }}</span>
      </div> 

      <!-- <div v-else class="justify-center flex w-full">
                      <svg class="w-3 h-3 text-gray-400  mb-2" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="pl-1 font-normal text-[11px] text-gray-400">{{$t('notRated')}}</span>
                    </div> -->

    </div>
    
                    
    <div class="flex items-center justify-center mt-1"><span
        class="text-sm text-center text-gray-700">{{ selllerDet.followerCount ? selllerDet.followerCount : 0 }}
        {{ $t('followers') }} </span> <span  class="text-sm  text-gray-700" v-if="getCountOFFollowers(selllerDet.followerCount)">s</span></div>

    <div v-if="authUser && authUser.uid !== selllerDet.uid" class="flex items-center justify-center mt-2">
      <a @click="followAndUnfollow(selllerDet)"
        :class="!selllerDet.followEnabled && isLoggedIn ? 'border-gray-200 border text-gray-500  bg-white ' : 'text-white border-firoza bg-firoza'"
        class=" cursor-pointer text-center flex items-center justify-center py-1 w-[100px] h-[30px] bg-firoza rounded-sm text-sm px-4 text-white border mb-0 ">
        <span v-if="!btnloading">{{ selllerDet.followEnabled || !isLoggedIn ? $t('follow') : $t('unfollow') }}</span>
        <span v-if="btnloading">
          <Spinner v-show="btnloading" />
        </span>
      </a>
    </div>
    <div v-if="authUser && authUser.uid === selllerDet.uid" class="flex items-center justify-center mt-2">
      <a :href="localePath(getLink(selllerDet.uid))"
        class="bg-white text-firoza border-firoza cursor-pointer text-center flex items-center justify-center py-1 w-[150px] h-[30px] bg-firoza rounded-lg text-sm px-4 text-white border mb-0 ">
        <span>{{ $t('myAccount') }}</span>
      </a>
    </div>
    <div v-if="!authUser" class="flex items-center justify-center mt-2">
      <a :href="localePath(getLink(selllerDet.uid))"
        class="bg-white text-firoza border-firoza cursor-pointer text-center flex items-center justify-center py-1 w-[150px] h-[30px] bg-firoza rounded-sm text-sm px-4 text-white border mb-0 ">
        <span>{{ $t('follow') }}</span>
      </a>
    </div>
  </div>



</template>
    
      
      
<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
export default Vue.extend({
  name: 'TopSellerCard',
  props: ['selllerDet'],
  middleware: 'authenticated',
  asyncData() {
    return {
      topsellerList: [],
      loading: true,

    }
  },
  data() {
    return {
      btnloading: false
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },

  beforeMount() {

  },
  methods: {

    isSellerRatingExists(sellerRatings:any){
     if(sellerRatings && sellerRatings!== null && sellerRatings!== 0 && sellerRatings!== ''){
      return true
     }else{
      return false
     }
    },

    async followAndUnfollow(selectedUser: any, indValue: any) {

      if (!this.isLoggedIn) {
        this.$router.push({ path: `/login` })
        if (process.client) {
          const currentUrl = window.location.pathname
          console.log("currentUrl", currentUrl)
          window.localStorage.setItem("setPath", `${currentUrl}`);
        }
        return
      }
      //   this.indexValue = indValue

      this.btnloading = true

      if (selectedUser.followEnabled) {
        //  console.log("Yess clicking On follow")
        try {
          let url = `/users/v1/user/follow/` + selectedUser.uid
          const data = await this.$axios.$post(url);
          if (data.success) {
            this.btnloading = false
            //   this.indexValue = null
            return selectedUser.followEnabled = false
          }
          this.btnloading = false
        } catch (error) {

          this.btnloading = false

          console.log(error);
        }


      } else if (!selectedUser.followEnabled) {
        try {


          let url = `/users/v1/user/unfollow/` + selectedUser.uid
          const data = await this.$axios.$delete(url);

          if (data.success) {
            this.btnloading = false
            //   this.indexValue = null
            return selectedUser.followEnabled = true
          }

        } catch (error) {
          this.btnloading = false
          console.log(error);
        }

      }
    },


    getLink(uId: any) {
      if (this.authUser && this.authUser.uid === uId) {
        return '/my-profile'
      } else {
        return '/profile/view/' + uId + ''
      }
    },

    tofixedTwoDigit(rating: any) {
      if (rating) {
        return rating.toFixed(1)
      }
    },

    getCountOFFollowers(floowercount: any) {
      if (floowercount > 1 && this.$i18n.locale && this.$i18n.locale === 'en') {
        return true
      }
    },

    getTopsellerImageUrl(imageUrl: any) {
      const defaultImage = "~/assets/images/profile/chatu-noimg.svg";
      if (imageUrl && !imageUrl.match("deleted.jpeg") && imageUrl !== 'null') {
        return imageUrl;
      } else {
        return false;
      }
    }
  }



})

</script>
      
