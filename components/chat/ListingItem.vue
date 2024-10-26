<template>
  <a :href="localePath(chatlink)" class="w-full flex flex-col bg-[#f8ffff] py-2 cursor-pointer mb-1">
    <div class="w-full block px-5 sm:block md:flex md:items-center md:justify-between lg:flex lg:items-center lg:justify-between xl:flex xl:items-center xl:justify-between 2xl:flex 2xl:items-center 2xl:justify-between">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-9 w-9 relative">
          <img v-if="chat.offerDetails.offerImage" class="h-9 w-9 rounded-full" :src="chat.offerDetails.offerImage" :alt="chat.offerDetails.offerName" >
          <img v-else class="h-9 w-9 rounded-full" src="~/assets/images/profile/profile.jpg" :alt="chat.offerDetails.offerName"> 
        </div>
        <div class="ml-3">
          <div class="text-sm font-normal text-gray-900 listing-item">
            {{ chat.offerDetails.offerName | truncate(40) }}
          </div>
          <div v-if="lm.msg" class="text-xs font-normal text-gray-400">
            <!-- K.Konstantinopolskiy: <span class="text-gray-700">Hey! I have a goo..</span> -->
            {{ lm.displayName }}: <span class="text-gray-700">{{ lm.msg.messageBody | truncate(150) }}</span>
          </div>
        </div>
      </div>

      <div class="cright flex items-center justify-between mt-2 sm:flex sm:items-center sm:justify-between sm:mt-2 md:block md:mt-0 lg:block lg:mt-0 xl:block xl:mt-0 2xl:block 2xl:mt-0">
        <div class="flex justify-end text-[10px] font-normal text-gray-400">
          <!-- {{ $moment(chat.createdAt).format('DD/MM/yyyy hh:mm A') }} -->
          {{ $moment(chat.createdAt).fromNow() }}
        </div>
        <!-- <div class="flex justify-end mt-0 sm:mt-0 md:mt-2 lg:mt-2 xl:mt-2 2xl:mt-2">
          <span class="flex justify-center items-center h-6 w-6 text-xs text-white rounded-full ring-4 ring-rose-200 bg-rose-400">3</span>
        </div> -->
      </div>
    </div>
  </a>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'ChatListing',
  props: ['chat'],
  data () {
    return {
      lm: {
        displayName: '',
        msg: ''
      }
    }
  },
  computed: {
    chatlink () {
      return this.chat.offerOwnerDetails.identityId === this.$store.state.authUser.uid ? `/chat/offers/${this.chat.offerDetails.offerId}/users` : `/chat/offers/${this.chat.offerDetails.offerId}/rooms/${this.$store.state.authUser.uid}_${this.chat.offerOwnerDetails.identityId}/messages`
    }
  },
  created () {
    this.$fire.firestore
      .collection('tradingChatOffers')
      .doc(this.chat.offerDetails.offerId)
      .collection('rooms')
      // .orderBy('messageTime', 'asc')
      .limit(6)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((roomDoc) => {
          const roomData = roomDoc.data()
          // console.log('room', roomDoc.id, roomData)
          // this.lm.displayName = data

          this.$fire.firestore
            .collection('tradingChatOffers')
            .doc(this.chat.offerDetails.offerId)
            .collection('rooms')
            .doc(roomDoc.id)
            .collection('messages')
            .orderBy('messageTime', 'desc').limit(1)
            .onSnapshot((querySnapshot) => {
              // vm.messages = []
              querySnapshot.forEach((doc) => {
                const message = doc.data()
                // console.log('message', message.id, message)
                if (this.lm.msg && this.$moment(this.lm.msg.messageTime) < this.$moment(message.messageTime)) {
                  this.lm.displayName = this.chat.offerOwnerDetails.identityId === message.recipientId ? roomData.chatInitiatorDetails.name : roomData.offerOwnerDetails.name
                  this.lm.msg = message
                } else if (!this.lm.msg) {
                  this.lm.displayName = this.chat.offerOwnerDetails.identityId === message.recipientId ? roomData.chatInitiatorDetails.name : roomData.offerOwnerDetails.name
                  this.lm.msg = message
                }
              })
            })
        })
      })
  }
})
</script>

<style scoped>

  .listing-container-content{
    min-height: 66vh;
    max-height: 66vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

</style>
