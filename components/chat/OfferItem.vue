<template>
  <a :href="localePath(chatlink)" class="w-full flex flex-col bg-[#f8ffff] py-2 border-b-4 border-gray-100 cursor-pointer">
    <div class="w-full flex justify-between px-5">
      <div class="flex">
        <div class="flex-shrink-0 h-8 w-8 relative offeritem">
          <img v-if="otherUser.imageUrl && !otherUser.imageUrl.includes('deleted.jpeg')" class="h-8 w-8 rounded-full" :src="otherUser.imageUrl" :alt="otherUser.name">
          <img v-else class="h-8 w-8 rounded-full" src="~/assets/images/profile/profile.jpg" :alt="otherUser.name">
          <span :class="userOnlineStatus ? 'bg-green ring-white' : 'bg-gray-300 ring-white'" class="absolute top-0 left-0 block h-2 w-2 rounded-full ring-2" />
            
          <!-- <span class="absolute top-0 left-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green" /> -->
          <!-- <span class="absolute top-0 left-0 block h-2 w-2 rounded-full ring-2 ring-white bg-gray-400"></span>  -->

        </div>
        <div class="w-full ml-3 ">
          <div class="w-full flex items-center justify-between ">
            <div class="text-sm font-normal text-gray-900">
              <!-- {{ otherUser.name | fName }}, Sep 23 -->
              {{ otherUser.name }}, {{ $moment(chat.createdAt).format('MMM DD, YY') }}
            </div>
            <!-- <div class="flex justify-end text-xs font-normal text-gray-400">
              {{ $moment(chat.createdAt).fromNow() }}
            </div> -->
          </div>

          <div class="w-full flex items-center gap-2 mt-1">
            <img v-if="ownerOffer && ownerOffer.images && ownerOffer.images.length" class="h-6 w-6 rounded" :src="ownerOffer.images[0].url" :alt="ownerOffer.offerName">
            <div v-else class="text-sm text-gray-700">
              {{ chat.requestedAmount }}
            </div>

            <div class="flex items-center px-2">
              <img src="~/assets/images/barter_green_blue.png" alt="barter">
            </div>
            <img v-if="otherOffer && otherOffer.images && otherOffer.images.length" class="h-6 w-6 rounded" :src="otherOffer.images[0].url" :alt="otherOffer.offerName">
            <div v-else class="text-sm text-gray-700">
              {{ chat.requestedAmount }}
            </div>
          </div>
          <!-- Last msg -->
          <div v-if="lm.msg" class="w-full flex items-center justify-between ">
            <div class="text-[11px] font-normal text-gray-500 break-words">
              {{ lm.msg.messageBody | truncate(150) }}
              <!-- <span class="text-[12px] text-[#4d8603] block">Typing....</span> -->
              <!-- <TypingIndecator/> -->
            </div>
            <!-- <div class="flex justify-end">
             <span class="flex justify-center items-center h-6 w-6 text-xs text-white rounded-full ring-4 ring-rose-200 bg-rose-400">3</span> 
             </div> -->
          </div>
        </div>
      </div>
      
      <div class="cright block">
         <div class="flex justify-end text-xs font-normal text-gray-400">{{ $moment(chat.createdAt).fromNow() }}</div>
          <div v-if="unreadChatCount" class="flex justify-end mt-4">
            <span class="flex justify-center items-center h-6 w-6 text-xs text-white rounded-full ring-4 ring-rose-200 bg-rose-400">
              {{unreadChatCount}}
            </span>
         </div>
     </div>

    </div>
    
  </a>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'OfferChatItem',
  props: ['chat'],
  data () {
    return {
      lm: {
        msg: ''
      },
      userOnlineStatus: false
    }
  },
  computed: {
    chatlink () {
      const roomId = this.$store.state.authUser.uid === this.chat.receiver.identityId ? `${this.chat.sender.identityId}_${this.$store.state.authUser.uid}` : `${this.$store.state.authUser.uid}_${this.chat.receiver.identityId}`
      return `/chat/deal/${this.chat.dealRefId}/rooms/${roomId}/messages`
    },
    otherUser () {
      return this.$store.state.authUser.uid === this.chat.receiver.identityId ? this.chat.sender : this.chat.receiver
    },
    ownerOffer () {
      return this.$store.state.authUser.uid === this.chat.receiver.identityId ? this.chat.requestedOffers[0] : this.chat.offeredOffers && this.chat.offeredOffers.length > 0 ? this.chat.offeredOffers[0] : null
    },
    otherOffer () {
      return this.$store.state.authUser.uid !== this.chat.receiver.identityId ? this.chat.requestedOffers[0] : this.chat.offeredOffers && this.chat.offeredOffers.length > 0 ? this.chat.offeredOffers[0] : null
    },
    isBarter () {
      return this.chat.offeredOffers && this.chat.offeredOffers.length > 0
    },
    unreadChatCount() {
      return this.chat?.unreadMessageDetails && this.chat?.unreadMessageDetails[this.$store.state.authUser.uid] ? this.chat.unreadMessageDetails[this.$store.state.authUser.uid] : 0
    }
  },
  created () {
    // console.log(this.chat)
    this.$fire.firestore
      .collection('tradingChatDeals')
      .doc(this.chat.dealRefId)
      .collection('rooms')
      .limit(1)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((roomDoc) => {
          // const roomData = roomDoc.data()
          // console.log('room', roomDoc.id, roomData)

          this.$fire.firestore
            .collection('tradingChatDeals')
            .doc(this.chat.dealRefId)
            .collection('rooms')
            .doc(roomDoc.id)
            .collection('messages')
            .orderBy('messageTime', 'desc').limit(1)
            .onSnapshot((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const message = doc.data()
                console.log('message-deal', doc.id, message)
                this.lm.msg = message
              })
            })
        })
      })

      this.userUpdatedStatus();
  },
  methods: {
    userUpdatedStatus() {
      const otherUserId   = this.otherUser.identityId;
      
      console.log('otherUserId:', otherUserId)
      const userOnlineStatusRef = this.$fire.database.ref(`status/${otherUserId}`);
        
      userOnlineStatusRef.on('value', (snapshot)=>{
        console.log('otherUserId:', otherUserId)
        console.log('snapVal:', snapshot.val())
        const snapVal = snapshot.val()
        this.userOnlineStatus = snapVal && snapVal?.state !== 'offline' || false            
      });
    }
  }
})
</script>
<style scoped>

    .offer-container-content{
    min-height: 68vh;
    max-height: 68vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

</style>
