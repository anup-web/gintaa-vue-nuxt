<template>
  <div class="w-full">
    <!-- chat msg search start -->
    <!-- <div class="w-full chat-footer-bottom via-blue-50 shadow-lg rounded-t px-5 py-3">
    <div class="w-full relative float-none flex-row flex-nowrap flex grow items-center flex-basis-[auto] h-[30px] chat-input-msg">
         <div class="flex static float-none box-border msg-chat-left">
             <div class="pr-2 cursor-pointer">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z" fill="#121212"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="#121212"/>
                            </svg>
              </div>
         </div>

         <div class="flex static float-none box-border flex-auto overflow-visible whitespace-nowrap msg-chat-middle">
             <div class="w-full relative flex items-center pl-2">
                <input type="text" name="text" class=" block w-full outline-none pr-12 bg-transparent pl-2" placeholder="Search ...">
            </div>
         </div>

         <div class="flex static float-none min-w-[auto] box-border w-[auto] items-center msg-chat-right">
              <div class="flex justify-between items-center pl-2">
                   <span class="cursor-pointer h-6 w-6 flex justify-center items-center">
                   <svg width="8" height="14" viewBox="0 0 8 14" fill="none" >
                  <path d="M7 1L1 7L7 13" stroke="#494949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg></span>
                  <span class="cursor-pointer h-6 w-6 flex justify-center items-center ml-6">
                     <svg width="8" height="14" viewBox="0 0 8 14" fill="none" >
                      <path d="M1 13L7 7L0.999999 1" stroke="#494949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </span>

              </div>

         </div>
    </div>
    </div>  -->

    <!-- chat msg search end -->

    <div class="w-full flex flex-row pb-2 pt-2 px-5 bg-gray-300 rounded-t h-[52px]">
      <div class="w-full flex items-center justify-between">
        <div v-if="user" class="flex items-center">
          <a :href="localePath('/chat/offer-listing2')" class="pre-page mr-5 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.4477 0.4477 7 1 7H15C15.5523 7 16 7.4477 16 8C16 8.5523 15.5523 9 15 9H1C0.4477 9 0 8.5523 0 8Z" fill="#000"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70708 0.292875C9.09758 0.683375 9.09758 1.31657 8.70708 1.70707L2.41417 7.99997L8.70708 14.2929C9.09758 14.6834 9.09758 15.3166 8.70708 15.7071C8.31658 16.0976 7.68337 16.0976 7.29287 15.7071L0.292875 8.70708C-0.097625 8.31658 -0.097625 7.68337 0.292875 7.29287L7.29287 0.292875C7.68337 -0.097625 8.31658 -0.097625 8.70708 0.292875Z" fill="#000"/>
            </svg>
          </a>
          <div class="flex-shrink-0 h-9 w-9 relative">
            <img v-if="user.photoURL" class="h-9 w-9 rounded-full" :src="user.photoURL" :alt="user.displayName">
            <img v-else class="h-9 w-9 rounded-full" src="~/assets/images/profile/profile.jpg" :alt="user.displayName">
            
            <span :class="userOnlineStatus ? 'bg-green ring-white' : 'bg-gray-300 ring-white'" class="absolute top-0 left-0 block h-2 w-2 rounded-full ring-2" />
            <!-- <span class="absolute top-0 left-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green" />
            <span class="absolute top-0 left-0 block h-2 w-2 rounded-full ring-2 ring-white bg-gray-400"></span>  -->
          </div>
          <div class="ml-3">
            <div class="text-sm font-normal text-black">
              {{ user.displayName | truncate(45) }}
              <!-- <span class="text-[12px] text-[#4d8603] block">Typing....</span> -->
              <TypingIndecator v-if="isPartnerTyping"/>
            </div>
          </div>
        </div>

        <div v-if="user && !isBlocked" class="flex justify-center">
          <div class="dropstart relative">
            <button
              id="dropdownMenuButton1s"
              class="bg-transparent rounded-full flex items-center text-gray-400 "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg width="6" height="22" class="h-4 w-4" viewBox="0 0 4 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2ZM0 9C0 7.89543 0.89543 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.89543 11 0 10.1046 0 9ZM2 14C0.89543 14 0 14.8954 0 16C0 17.1046 0.89543 18 2 18C3.10457 18 4 17.1046 4 16C4 14.8954 3.10457 14 2 14Z" fill="#606060" />
              </svg>
            </button>
            <ul
              class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg
                        mt-1 hidden m-0 bg-clip-padding border-none"
              aria-labelledby="dropdownMenuButton1s"
            >
              <!-- <li>
                <a
                  class="cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  @click="toggleBlock()"
                >{{ isBlocked ? 'Unblock Block' : 'Block Chat' }}</a>
              </li> -->
              <li>
                <a
                  class="cursor-pointer dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  @click="reportUser()"
                >{{$t('reportUser')}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div v-if="listing" class="w-full flex flex-col bg-gray-200 border-l-4 border-indigo-500 px-4 py-1">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-7 w-7 relative">
          <img class="h-7 w-7 rounded-full" 
          v-if="listing && listing.images && deal.images.length > 0 && listing.images[0].url"
          :src="listing.images[0].url" :alt="listing.name">
        </div>
        <div class="ml-3">
          <div class="text-sm font-normal text-gray-900 cursor-pointer">
            {{ listing.name | truncate(40) }}
          </div>
        </div>
      </div>
    </div>

    <div v-if="deal" class="w-full flex flex-col bg-gray-200 border-l-4 border-indigo-500 px-4 py-1">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-7 w-7 relative">
          <img 
            class="h-7 w-7 rounded-full"
            v-if="deal && deal.requestedOffers && deal.requestedOffers.length > 0 && deal.requestedOffers[0].images && deal.requestedOffers[0].images.length > 1 && deal.requestedOffers[0].images[0].url"
            :src="deal.requestedOffers[0].images[0].url" 
            :alt="deal.requestedOffers[0].name">
        </div>
        <div class="ml-3">
          <div class="text-sm font-normal text-gray-900 cursor-pointer">
            {{ deal.requestedOffers[0].offerName | truncate(50) }}
          </div>
        </div>
      </div>
    </div>

    <ReportUser v-if="showReportUserModal && otherUserId" :showReportUserModal="showReportUserModal" :user="user" :otherUserId="otherUserId" @closeReportModal="closeReportModal" @successReport="successReport"/>

    <!-- <div class="w-full flex flex-col bg-gray-200 border-l-4 border-green px-4 py-1">
          <div class="w-full flex items-center gap-2">
               <img class="h-6 w-6 rounded" src="~/assets/images/jewellery/bangles.jpg" alt="image">
               <div class="flex items-center px-2">
                   <img src="~/assets/images/barter_green_blue.png" alt="icon" />
               </div>
            <img class="h-6 w-6 rounded" src="~/assets/images/explore_barter/gadgets.jpg" alt="image">

        </div>
     </div>   -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Vue from 'vue'
import TypingIndecator from '../atoms/TypingIndecator.vue'
export default Vue.extend({
    name: "ChatHeader",
    props: ["listing", "user", "deal"],
    data() {
      return {
        isBlocked: false,
        chatCol: this.$route.params.listing_id ? "tradingChatOffers" : "tradingChatDeals",
        list_deal_id: this.$route.params.listing_id || this.$route.params.dealRefId,
        room_id: this.$route.params.room_id,
        showReportUserModal: false,
        otherUserId: "",
        userChatTypingStatusPath: 'userChat',
        isPartnerTyping: false,
        userOnlineStatus: false
      };
    },
    computed: {
        ...mapState({
            authUser: state => state.authUser
        })
    },
    created() {
        this.$fire.firestore
            .collection(this.chatCol)
            .doc(this.list_deal_id)
            .collection("rooms")
            .doc(this.room_id)
            .onSnapshot((room) => {
            if (room.exists) {
                const data = room.data();
                this.isBlocked = data.isBlocked;
            }
        });

      this.userChatTypingStatus();
      this.userUpdatedStatus()
    },
    methods: {
        toggleBlock() {
            this.$fire.firestore
                .collection(this.chatCol)
                .doc(this.list_deal_id)
                .collection("rooms")
                .doc(this.room_id)
                .update({
                isBlocked: !this.isBlocked
            });
        },
        reportUser() {
            const otherUId = this.room_id.replace(this.authUser?.uid, "").replace("_", "");
            this.otherUserId = otherUId;
            this.showReportUserModal = !this.showReportUserModal;
            
        },
        closeReportModal() {
            this.showReportUserModal = false;
        },
        successReport() {
            console.log("Success Reporting");
        },
        backToListPage() {
            let redirectpath = this.localePath(`/chat/offer-listing2`);
            this.$router.push({ path: redirectpath });
        },
        userChatTypingStatus(){
          try{
            const room_id     = this.room_id;
            const currentUserId    = this.authUser?.uid;
            const partnerId   = this.$route.params.room_id.replace(currentUserId, '').replace('_', '');
            const userChatRef = this.$fire.database.ref(`${this.userChatTypingStatusPath}/${room_id}_${this.list_deal_id}/${partnerId}`);
            
            userChatRef.on('value', (snapshot)=>{
              const snapVal = snapshot.val()
              this.isPartnerTyping = snapVal?.typing || false
              
            });
          } catch(err){
            console.log(err)
          }
        },
        userUpdatedStatus() {
          const currentUserId    = this.authUser?.uid;
          const otherUserId   = this.$route.params.room_id.replace(currentUserId, '').replace('_', '');
          
          const userChatRef = this.$fire.database.ref(`status/${otherUserId}`);
            
          userChatRef.on('value', (snapshot)=>{
            const snapVal = snapshot.val()
            this.userOnlineStatus = snapVal?.state !== 'offline' || false            
          });
          
        }
    },
    components: { TypingIndecator }
})
</script>
