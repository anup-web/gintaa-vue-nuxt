<template>
  <div class="product-details-page pt-[80px] lg:pt-12">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->

    <!-- <div v-if="showLoader" class="fixed w-full h-full z-50 top-0 left-0 bg-black opacity-40"></div> -->
    <div class="container max-w-8xl mx-auto px-4 md:px-8 2xl:px-16 pt-3">
      <div class="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
        <div class="basis-3/12 sm:basis-full md:basis-5/12 lg:basis-1/3 xl:basis-3/12">
          <div class="relative w-full h-full rounded-md pb-4 border-r border-gray-200 bg-gray-50 border-l">
            <div class="w-full flex justify-center items-center pt-5">
              <div
                class="user-profile relative bg-white cursor-pointer rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 flex justify-center items-center">
                <div title="Blocked"  v-if="isUserBlocked" class="absolute w-100 text-center h-full top-0 justify-center items-center flex"><svg width="110" height="96" viewBox="0 0 110 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.35" fill-rule="evenodd" clip-rule="evenodd" d="M47.929 1.84123C50.0876 0.634139 52.5229 0 55 0C57.4771 0 59.9124 0.634139 62.071 1.84123C64.2295 3.04832 66.0384 4.78761 67.3231 6.8913L67.3369 6.91396L108.03 74.3898L108.069 74.4557C109.327 76.6205 109.993 79.0748 110 81.5745C110.007 84.0742 109.355 86.5322 108.109 88.7039C106.862 90.8756 105.065 92.6853 102.896 93.953C100.727 95.2207 98.262 95.9022 95.7454 95.9297L95.6926 95.9302L14.3074 95.9299H14.2546C11.738 95.9025 9.27264 95.2207 7.10363 93.953C4.9346 92.6853 3.13757 90.8756 1.89131 88.7039C0.645051 86.5322 -0.00698995 84.0742 5.65115e-05 81.5745C0.00710326 79.0748 0.672994 76.6205 1.93147 74.4557L1.9705 74.3898L42.6631 6.914L46.7845 9.36612L42.6769 6.8913C43.9616 4.78761 45.7705 3.04832 47.929 1.84123ZM50.8981 11.8316L10.2366 79.2558C9.82738 79.9706 9.61099 80.7785 9.60867 81.6012C9.60632 82.4344 9.82367 83.2538 10.2391 83.9777C10.6545 84.7016 11.2535 85.3048 11.9765 85.7274C12.6932 86.1462 13.5069 86.3731 14.3381 86.386H95.6619C96.4931 86.3731 97.3068 86.1462 98.0235 85.7274C98.7465 85.3048 99.3455 84.7016 99.7609 83.9777C100.176 83.2538 100.394 82.4344 100.391 81.6012C100.389 80.7786 100.173 79.9708 99.7635 79.256L59.1077 11.8411L59.1019 11.8316C58.674 11.1346 58.0733 10.5583 57.357 10.1577C56.6375 9.75534 55.8257 9.54396 55 9.54396C54.1743 9.54396 53.3625 9.75534 52.643 10.1577C51.9267 10.5583 51.326 11.1346 50.8981 11.8316ZM55 29.1222C57.6534 29.1222 59.8043 31.2587 59.8043 33.8942V52.9821C59.8043 55.6176 57.6534 57.7541 55 57.7541C52.3466 57.7541 50.1957 55.6176 50.1957 52.9821V33.8942C50.1957 31.2587 52.3466 29.1222 55 29.1222ZM55 67.298C52.3466 67.298 50.1957 69.4345 50.1957 72.07C50.1957 74.7055 52.3466 76.842 55 76.842H55.048C57.7014 76.842 59.8524 74.7055 59.8524 72.07C59.8524 69.4345 57.7014 67.298 55.048 67.298H55Z" fill="#FC2323"/>
</svg>

</div>
                <img v-if="getImageUrl(otherUserDetails.photoUrl)"
                  class="rounded-full w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48"
                  :src="getImageUrl(otherUserDetails.photoUrl)" alt="iamges" />

                <img v-else class="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-28 md:h-28"
                  src="~/assets/images/profile/chatu-noimg.svg" alt="iamges" />
              </div>
            </div>

            <div class="w-full flex items-center justify-center mt-3 user-fbtton">
              <follow v-if="userdetails && userdetails.identityId" :identityId="userdetails.identityId" />
            </div>
            <!-- <div class="w-full flex items-center justify-center mt-3">
              <a href="#" class="text-center flex items-center justify-center py-1 h-[31px] rounded-lg text-sm px-4 text-firoza border-firoza border mb-0 hover:bg-firoza hover:text-white transition-all hg-follw" >
                 <span>Follow</span>  </a>
            </div> -->

            <div class="w-full relative profile-details pl-4 pr-2 mt-5">
              <div class="w-full text-base text-gray-900 font-normal">
                {{ otherUserDetails.displayName }}
              </div>

              <div v-if="userStatus" class="w-full flex items-center mt-1">
                <span v-if="userStatus && userStatus === 'online'" class="text-green">
                  <svg width="10" height="10">
                    <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                  </svg></span>

                <span v-else class="text-gray-400">
                  <svg width="10" height="10">
                    <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                  </svg></span>

                <span class="ml-2 text-xs text-gray-700 font-normal">{{ userStatus }}</span>
              </div>

              <div class="w-full flex flex-col mt-3">
                <div class="w-full flex flex-col">
                  <span class="text-sm text-gray-700 font-normal">
                    {{ $t('rating') }}
                  </span>
                </div>
                <div class="w-full flex items-center mt-1">
                  <div class="flex items-center space-x-1">
                    <svg v-if="getRoundedValue(otherUserDetails.averageRating)" class="w-4 h-4 text-yellow-500"
                      viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg v-if="!getRoundedValue(otherUserDetails.averageRating)" class="w-4 h-4 text-gray-500"
                      viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div class="flex items-center ml-2.5">
                    <div class="text-xs text-gray-500">
                      {{ getRating(otherUserDetails.averageRating) }}
                    </div>
                    <span v-if="otherUserDetails.totalRatings" class="text-xs text-gray-400">({{
                      otherUserDetails.totalRatings
                    }} votes)</span>
                  </div>
                </div>
              </div>

              <div v-if="otherUserDetails.closedDealsCount !== null" class="w-full flex flex-col mt-3">
                <div class="flex items-center">
                  <svg width="22" height="18" viewBox="0 0 26 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M21.0924 3.20104L19.1586 1.09375C18.7307 0.631485 18.1525 0.372132 17.5499 0.372137H8.33613C7.73488 0.372137 7.15394 0.633335 6.72738 1.09375L4.79363 3.20104H0.999879C0.447594 3.20104 -0.00012207 3.64876 -0.00012207 4.20104V4.3282C-0.00012207 4.88137 0.448979 5.32945 1.00215 5.32819L3.89988 5.32162H5.60207L8.10863 2.59453C8.14925 2.57682 8.18694 2.56017 8.22452 2.54357C8.26206 2.52699 8.29961 2.5104 8.34019 2.49271H10.6436L9.07144 4.06432C7.87707 5.25521 7.808 7.26511 8.89269 8.54896C9.49394 9.26615 11.3789 10.3729 13.0161 8.74375L13.3493 8.41172L17.7449 12.2987C17.883 12.4227 17.9033 12.6484 17.7936 12.799L16.7333 14.2245C16.6196 14.375 16.4164 14.4016 16.2743 14.2776L15.3033 13.4188L14.0846 15.0346C13.8408 15.3578 13.4752 15.2471 13.3533 15.1409L11.8583 13.7464L11.2246 14.5964C10.6599 15.3534 9.63207 15.4685 8.978 14.8885L5.02519 10.9927H3.89988H0.999878C0.447593 10.9927 -0.00012207 11.4404 -0.00012207 11.9927V12.1177C-0.00012207 12.67 0.447593 13.1177 0.999878 13.1177H1.12694C0.962081 12.9244 0.862313 12.6721 0.862313 12.3961C0.862313 11.7876 1.34734 11.2942 1.94565 11.2942C2.54396 11.2942 3.02898 11.7876 3.02898 12.3961C3.02898 12.6721 2.92921 12.9244 2.76435 13.1177H3.89582H4.2655L7.70238 16.5C8.95769 17.6112 10.7005 17.6378 11.9924 16.6682C12.5002 17.1464 13.0486 17.3721 13.6621 17.3721C14.4014 17.3721 15.0961 17.0445 15.6446 16.3096C16.5424 16.6948 17.6027 16.4247 18.2446 15.5659L19.3089 14.1359C19.5364 13.8305 19.6786 13.4807 19.7518 13.1177H22.1039H23.2312C23.0663 12.9244 22.9665 12.6721 22.9665 12.3961C22.9665 11.7876 23.4516 11.2942 24.0499 11.2942C24.6482 11.2942 25.1332 11.7876 25.1332 12.3961C25.1332 12.6721 25.0334 12.9244 24.8686 13.1177H24.9999C25.5522 13.1177 25.9999 12.67 25.9999 12.1177V11.9927C25.9999 11.4404 25.5522 10.9927 24.9999 10.9927H22.0999H19.2886C19.1952 10.8688 19.0896 10.7536 18.9758 10.6518L14.8036 6.95964L15.3114 6.45495C15.5755 6.18932 15.5958 5.74219 15.3521 5.45443L14.9093 4.93646C14.6655 4.6487 14.2552 4.63099 13.9911 4.89219L11.7486 7.13229C11.3627 7.51745 10.7046 7.54844 10.343 7.13229C9.96519 6.69401 9.99769 6.0211 10.3918 5.63151L13.0568 2.97083C13.3574 2.66979 13.7474 2.50599 14.1536 2.50599L17.5539 2.49714C17.6393 2.49714 17.7205 2.53255 17.7774 2.59896L20.2839 5.32604H22.0999H24.9999C25.5522 5.32604 25.9999 4.87833 25.9999 4.32604V4.20104C25.9999 3.64876 25.5522 3.20104 24.9999 3.20104H21.0924Z"
                      fill="#8CAEC5" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M1.12694 13.1177H2.76435C2.92921 12.9244 3.02898 12.6721 3.02898 12.3961C3.02898 11.7876 2.54396 11.2942 1.94565 11.2942C1.34734 11.2942 0.862313 11.7876 0.862313 12.3961C0.862313 12.6721 0.962081 12.9244 1.12694 13.1177Z"
                      fill="#8CAEC5" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M25.1332 12.3961C25.1332 12.6721 25.0334 12.9244 24.8686 13.1177H23.2312C23.0663 12.9244 22.9665 12.6721 22.9665 12.3961C22.9665 11.7876 23.4516 11.2942 24.0499 11.2942C24.6482 11.2942 25.1332 11.7876 25.1332 12.3961Z"
                      fill="#8CAEC5" />
                  </svg>
                  <div class="text-sm text-gray-700 font-normal ml-2">
                    <span class="font-bold"> {{ otherUserDetails.closedDealsCount }} </span>
                    {{ $t(getOffersCountMsg(otherUserDetails.closedDealsCount)) }}
                  </div>
                </div>
              </div>

              <div class="flex items-center mt-4">
                <svg width="17" height="16" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.9374 6.42856H13.8124V4.28571H12.7499V6.42856H10.6249V7.49999H12.7499V9.64285H13.8124V7.49999H15.9374V6.42856Z"
                    fill="#888A8F"></path>
                  <path
                    d="M5.3125 1.07143C6.8 1.07143 7.96875 2.25 7.96875 3.75C7.96875 5.25 6.8 6.42857 5.3125 6.42857C3.825 6.42857 2.65625 5.25 2.65625 3.75C2.65625 2.25 3.825 1.07143 5.3125 1.07143ZM5.3125 0C3.24062 0 1.59375 1.66071 1.59375 3.75C1.59375 5.83928 3.24062 7.5 5.3125 7.5C7.38437 7.5 9.03125 5.83928 9.03125 3.75C9.03125 1.66071 7.38437 0 5.3125 0Z"
                    fill="#888A8F"></path>
                  <path
                    d="M10.625 15H9.5625V12.3214C9.5625 10.8214 8.39375 9.64284 6.90625 9.64284H3.71875C2.23125 9.64284 1.0625 10.8214 1.0625 12.3214V15H0V12.3214C0 10.2321 1.64687 8.57141 3.71875 8.57141H6.90625C8.97812 8.57141 10.625 10.2321 10.625 12.3214V15Z"
                    fill="#888A8F"></path>
                </svg>
                <div class="text-sm text-gray-700 font-normal ml-2">
                  <span class="font-bold"> {{
                    otherUserDetails.followerCount ? otherUserDetails.followerCount : 0
                  }}</span>
                  {{ $t( 'followers') }}
                </div>

              </div>
              <div class="flex items-center">
              <div v-if="!isUserReported && !isMyListing" class="flex mt-4 mr-2">
                <button type="submit" v-on:click="openModal()" id="report-user"
                  class="border border-errortext flex justify-center items-center bg-transparent rounded text-errortext font-normal py-1 px-2 text-xs">
                  {{ $t('reportUser') }}
                </button>
              </div>
              <div v-if="!showUnblockUserLoader" class="flex mt-4">
                <button type="submit" 
                  v-if="!isUserBlocked"
                  @click="openModal('BLOCKUSER')" 
                  class="border border-errortext flex justify-center items-center bg-transparent rounded text-errortext font-normal py-1 px-2.5 text-xs">
                       Block User
                </button>
                <button type="submit" 
                  v-if="isUserBlocked"
                  @click="unBlockUser()" 
                  class="border border-gray-300 flex justify-center items-center bg-transparent rounded text-gray-500 font-normal py-1 px-2.5 text-xs">
                       Unblock User
                </button>
              </div>
              <div v-if="showUnblockUserLoader" class="flex mt-4">
                <Spinner/>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="basis-9/12 sm:basis-full md:basis-7/12 lg:basis-2/3 xl:basis-9/12">
          <div
            class="relative w-full flex flex-col pl-0 mt-5 sm:pl-0 sm:mt-10 md:pl-8 md:mt-0 lg:pl-8 lg:mt-0 xl:pl-8 xl:mt-0 2xl:pl-8 2xl:mt-0">
            <!-- <div class="pb-4 pt-5">
               <breadcrumb /> 
            </div> -->

            <!-- No Need Of Feedback -->
            <!-- <UserAllFeedback v-if="userdetails.identityId" :userdetails="userdetails"/> -->
            <!-- No Need Of Feedback -->

            <div class="w-full flex items-center justify-between mt-0 sm:mt-0 md:mt-4 lg:mt-4 xl:mt-4 2xl:mt-4">
              <h2 class="text-xl text-gray-900 font-medium">
                {{ $t('listings') }}
              </h2>
            </div>

            <!-- <div v-if="showLoader" class="bg-white rounded-full shadow w-12 h-12 mx-auto flex items-center justify-center">
           
              
              <div style="border-top-color:transparent"
             class="w-8 h-8 border-4 border-green border-solid rounded-full animate-spin"></div>
                    </div> -->

            <div  class="w-full flex flex-col mt-5 mb-5">
              <div v-if="showLisitng" class="mylisting-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="listing of listingItems" :key="listing.offerId"
                  class="group box-border overflow-hidden flex p-4 cursor-pointer pe-0 flex-col items-start transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 relative border-r border-b">
                  <ListingCard :listing="listing" :isMyListing="isMyListing" type="userAllListings" />
                </div>
              </div>

              <div v-if="listingItems.length === 0 && !showLoader" class="flex w-full justify-center flex-col mt-6">
              <img src="~/assets/images/notfound.svg" alt="notfound" class="w-[245px] mx-auto" />
              <div class="flex items-center justify-center">{{ $t( 'noListingAvailable') }}</div>
            </div>
            </div>

            

          

            <div v-show="showLoader" class="py-6 flex justify-center min-h-[400px] loading-class">
              <Spinner />
            </div>

            <Trigger @triggerIntersected="loadMore" />
          </div>
        </div>
      </div>
    </div>
    <!--footer section goes here-->
    <Footer />

    <!-- add user report modal end -->

    <client-only>
      <ReportUser 
        v-if="showReportUserModal && otherUserId" 
        :showReportUserModal="showReportUserModal"
        :user="otherUserDetails" 
        :otherUserId="otherUserId" 
        @closeReportModal="closeReportModal"
        @successReport="successReport" />
    </client-only>


    

  <!-- block user modal end  -->
  <client-only>
    <BlockUser 
      v-if="showBlockUserModal && otherUserId"
      :user="otherUserDetails" 
      :otherUserId="otherUserId" 
      @closeBlockModal="closeBlockModal"
      @successBlock="successBlock"/>
  </client-only>
  <!-- block user modal end  -->

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  mapState,
  mapGetters
} from 'vuex'
import UserAllListing from "~/components/UserAllListings.vue";
import UserAllFeedback from "~/components/UserAllFeedBack.vue";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
export default Vue.extend({
  name: "OtherProfile",
  components: {
    UserAllListing,
    UserAllFeedback,
    //VueToast
  },
  data() {
    return {
      identityId: null,
      otherUserDetails: [{}],
      userdetails: { identityId: "", name: "" },
      showReportUserModal: false,
      showBlockUserModal: false,
      cateGoryList: [{}],
      loading: false,
      showLoader: true,
      listingItems: [],
      showLisitng: false,
      userStatus: '',
      otherUserId: '',
      isUserReported: true,
      isUserBlocked: false,
      isMyListing: false,
      page: 0,
      enableSearchMore: true,
      showUnblockUserLoader: false
    };
  },

  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
  },
  mounted() {

    if (this.authUser) {
      //  console.log("this.authUser",this.authUser.uid)
      if (this.authUser?.uid === this.$route.params.uid) {
        this.$router.push(this.localePath('/my-listings'));
        this.isMyListing = true
      }
    }

    const userId = this.$route.params.uid;
    //  this.identityId = this.$route.params.uid
    this.$fire.firestore.collection('status').doc(this.$route.params.uid).onSnapshot((userActivityStatus: any) => {
      if (userActivityStatus.exists) {
        this.userStatus = userActivityStatus.data().state
      }
    })
    this.userdetails.identityId = this.$route.params.uid;
    this.getUserAllListings(this.$route.params.uid);

    if (this.authUser) {
      this.checkIftheUserReported()
      this.checkIftheUserBlocked()
    }

  },



  async fetch() {

    const data = await this.$axios.get(`${this.$config.API_BASE}/users/v1/user/${this.$route.params.uid}`)
    // console.log("Data",data)
    // const data = await fetch(
    //   `${this.$config.API_BASE}/users/v1/user/${this.$route.params.uid}`
    // ).then((r) => r.json());
    this.otherUserDetails = data.data.payload;
    //  console.log("this.otherUserDetails",this.otherUserDetails)
  },
  methods: {
    getRating(userRating: any) {
      if (userRating) {
        return userRating;
      } else {
        return "Not Rated";
      }
    },

    async getUserAllListings(uid: string) {
      this.showLoader = true;
      try {
        let url = `/offers/v1/offers/all/${uid}?show-completed-offers=true&show-my-offers=false&size=12&page=${this.page}`;
        const data = await this.$axios.$get(url);
        // this.listingItems = data.payload;

        if (this.page === 0) {
          this.listingItems = data.payload
        } else if (data.payload.length > 0) {
          this.listingItems.push(...data.payload)
        }

        this.enableSearchMore = data.payload.length > 0

        this.loading = false
        if (this.listingItems) {
          this.showLisitng = true
        }
        this.showLoader = false;
      } catch (error) {
        if (this.page === 0) {
          this.listingItems = []
        }
        this.enableSearchMore = false

        this.showLoader = false;
        console.log(error);
      }
    },

    loadMore() {
      if (!this.showLoader && this.enableSearchMore) {
        this.page++
        this.getUserAllListings(this.$route.params.uid);
      }
    },
    getRoundedValue(userRating: any) {
      if (userRating) {
        return Math.round(userRating);
      } else {
        return 0;
      }
    },
    closeReportModal() {
      this.showReportUserModal = false;
    },
    closeBlockModal() {
      this.showBlockUserModal = false;
    },
    successReport() {
      this.isUserBlocked = true
      Vue.$toast.open('User Reported/Blocked successfully');
    },
    successBlock() {
      this.isUserBlocked = true
      Vue.$toast.open('User Reported/Blocked successfully');
    },

    getImageUrl(imageUrl: string) {
      if (imageUrl && imageUrl.includes("deleted.jpeg")) {
        return "";
      } else {
        return imageUrl;
      }
    },
    openModal(modalType: string = 'REPORTUSER') {
      this.otherUserId = this.$route.params.uid
      switch(modalType) {
        case "REPORTUSER":
          this.showReportUserModal = true;
          break;
        case "BLOCKUSER":
          this.showBlockUserModal = true
          break;
        default:
          this.showReportUserModal = true;
      }
      
    },

    async checkIftheUserReported() {
      try {
        let url = `/users/v1/user/report/check-reported/${this.$route.params.uid}`;
        const data = await this.$axios.$get(url);
        if (data.payload) {
          this.isUserReported = true
        } else {
          this.isUserReported = false

        }
      } catch (error: any) {
        console.log(error);
      }
    },

    async checkIftheUserBlocked() {
      try {
        let url = `/users/v1/user/report/check-blocked-both/${this.$route.params.uid}`;
        const data = await this.$axios.$get(url);
        if (data.payload) {
          this.isUserBlocked = data.payload.callerHasBlockedUser//true
        } else {
          this.isUserBlocked = false
        }
      } catch (error: any) {
        console.log(error);
        this.isUserBlocked = false
      }
    },

    getOffersCountMsg(dealCount: number) {
      if (dealCount && dealCount === 1) {
        return 'itemSoldText'
      } else {
        return 'itemsSoldText'
      }
    },

    async unBlockUser(){
      this.showUnblockUserLoader = true
      try {
        let url = `/users/v1/user/report/unblock/${this.$route.params.uid}`;
        const data = await this.$axios.$delete(url);
        if (data && data.success) {
          this.isUserBlocked = false
        } else {
          this.isUserBlocked = true
        }
        this.showUnblockUserLoader = false
      } catch (error: any) {
        console.log(error);
        this.isUserBlocked = true
        this.showUnblockUserLoader = false
      }
    }

  },
});
</script>

<style scoped>
.mylisting-grid .group:last-child {
  border-right: 0px solid #fff !important;
}

.mylisting-grid .group:nth-child(3n + 3) {
  border-right: 0 !important;
}

@media only screen and (min-device-width: 0px) and (max-device-width: 639px) {
  .mylisting-grid .group:nth-child(3n + 3) {
    border-right: 1px solid rgb(229 231 235) !important;
  }

  .mylisting-grid .group:nth-child(2n + 2) {
    border-right: 0 !important;
  }
}
</style>