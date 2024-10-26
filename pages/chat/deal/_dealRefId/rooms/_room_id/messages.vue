<template>
  <div v-if="loading" class="p-4 max-w-[705px] w-full mx-auto mb-10">
    <div class="animate-bounce flex space-x-4">
      <div class="rounded-full bg-slate-200 h-10 w-10" />
      <div class="flex-1 space-y-6 py-1">
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
        </div>
      </div>
    </div>

    <div class="animate-bounce flex space-x-4 mt-8">
      <div class="rounded-full bg-slate-200 h-10 w-10" />
      <div class="flex-1 space-y-6 py-1">
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
        </div>
      </div>
    </div>

    <div class="animate-bounce flex space-x-4 mt-8">
      <div class="rounded-full bg-slate-200 h-10 w-10" />
      <div class="flex-1 space-y-6 py-1">
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
        </div>
      </div>
    </div>

    <div class="animate-bounce flex space-x-4 mt-8">
      <div class="rounded-full bg-slate-200 h-10 w-10" />
      <div class="flex-1 space-y-6 py-1">
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
        </div>
      </div>
    </div>

    <div class="animate-bounce flex space-x-4 mt-8">
      <div class="rounded-full bg-slate-200 h-10 w-10" />
      <div class="flex-1 space-y-6 py-1">
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
        </div>
      </div>
    </div>

    <div class="animate-bounce flex space-x-4 mt-8">
      <div class="rounded-full bg-slate-200 h-10 w-10" />
      <div class="flex-1 space-y-6 py-1">
        <div class="space-y-3">
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
          <div class="grid grid-cols-3 gap-28">
            <div class="h-2 bg-slate-200 rounded col-span-2" />
            <div class="h-2 bg-slate-200 rounded col-span-1" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="w-full flex flex-col bg-white rounded relative">
    <div class="w-full chat-header-top fixed top-0 left-0 z-50">
      <ChatHeader :user="otherUser" :deal="deal" />
    </div>
    <!-- recipientId -->
    <div id="chatBox" class="w-full overflow-x-hidden overflow-y-auto auto-scroll-chat chat-container-content">
      <div class="w-full h-full flex flex-col flex-auto">
        <!-- no offer chat start -->
        <div v-if="!Object.keys(dayWiseChats) || !Object.keys(dayWiseChats).length" class="flex flex-col w-full pt-10">
          <div class="w-full flex justify-center items-center pt-4">
            <img width="200" height="200" src="~/assets/images/chat/chat-noffer.png"
              alt="iamges">
          </div>

          <div class="w-full flex justify-center items-center pt-3">
            <div class="text-sm text-gray-500 text-center font-normal">
                {{$t('noOfferChat')}}
            </div>
          </div>
        </div>
        <!-- no offer chat end -->
        <div v-for="day of Object.keys(dayWiseChats)" :key="day">
          <div class="w-full flex flex-col relative">
            <div class="flex items-center justify-center relative pt-3.5 pb-4">
              <div class="text-sm bg-white w-64 text-center z-20 text-gray-700">
                {{ day }}
              </div>
              <div class="w-full absolute top-5 border-t border-gray-400 chr-line" />
            </div>
          </div>

          <div v-for="message of dayWiseChats[day]" :key="message.message_id">
            <div v-if="!(message.deletedForMe && message.deletedForMe.includes(authUser.uid))">
              <ChatRightMsgItem v-if="message.recipientId !== authUser.uid" :message="message" :user="authUser" />
              <ChatLeftMsgItem v-if="message.recipientId === authUser.uid" :message="message" :user="otherUser" />
            </div>
          </div>
        </div>
        <ChatUploadingSpinner v-show="uploading" />
      </div>
      <!-- <ChatMessageReplyCancel v-if="replyMessage" /> -->
    </div>
    <div class="w-full chat-footer-bottom relative">
      <ChatMessageReplyCancel v-if="replyMessage" />
      <ChatFooter :deal="deal" :msg-len="messages.length" @onLoading="onUploading" />
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import { mapState } from 'vuex'
import _ from 'lodash'

export default Vue.extend({
  name: 'DealChatDetails',
  middleware: 'authenticated',
  data () {
    return {
      loading: true,
      messages: [],
      deal: null,
      otherUser: null,
      chatCol: 'tradingChatDeals',
      dealDocumentData: null,
      recipId: null
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapState({
      uploading: state => state.chat.upload.uploading
    }),
    ...mapState({
      replyMessage: state => state.chat.reply.replyMessage
    }),
    dayWiseChats () {
      if (this.messages && this.messages.length > 0) {
        const groupedData = _.groupBy(this.messages, (el) => {
          const today = this.$moment().format('YYYYMMDD')
          const yesterday = this.$moment().subtract(1, 'd').format('YYYYMMDD')
          const day = this.$moment(el.messageTime)
          const dayFormatted = day.format('YYYYMMDD')

          if (dayFormatted === today) {
            return this.$t('days.today')
          } else if (dayFormatted === yesterday) {
            return this.$t('days.yesterday')
          } else {
            return day.format('MMM Do, yyyy')
          }
        })
      //  console.log(groupedData)
        return groupedData
      }

      return {}
    },
    breadcrumb () {
      return [{
        name: this.$t('chat'),
        href: this.localePath('/chat/offer-listing')
      },
      {
        name: this.deal ? this.deal.requestedOffers[0].offerName : ''
      }
      ]
    }
  },
  created () {
    if (process.client) {
      this.subscribeTradingChatOffers()
      this.getOtherUser()
      this.updateReadStatus()
    }
    this.getDealDetails()
  },
  methods: {
    onUploading () {
      setTimeout(() => {
        // const container = this.$refs.chatBox
        const container = this.$el.querySelector('#chatBox')
        container.scrollTop = container.scrollHeight
      }, 200)
    },
    async copyURL (mytext) {
      try {
        await navigator.clipboard.writeText(mytext)
        alert('Copied')
      } catch ($e) {
        alert('Cannot copy')
      }
    },
    subscribeTradingChatOffers () {
      const vm = this

      this.$fire.firestore
        .collection(this.chatCol)
        .doc(this.$route.params.dealRefId)
        .collection('rooms')
        .doc(this.$route.params.room_id)
        .collection('messages')
        // .where('offerId', '=', this.$route.params.listing_id)
        .orderBy('messageTime', 'asc').limit(300)
        .onSnapshot((querySnapshot) => {
          vm.messages = []
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.message_id = doc.id
            vm.messages.push(data)
          //  console.log('message', doc.id, data)
          })
          vm.loading = false
          this.updateReadStatus() 
          vm.onUploading()
        })


        this.$fire.firestore
        .collection(this.chatCol)
        .doc(this.$route.params.dealRefId)
        .onSnapshot((doc) => {
          this.dealDocumentData = null
          this.dealDocumentData =  doc.data();
         // console.log('vm.dealDocumentData:', this.dealDocumentData)
        })
    },
    async getDealDetails () {
      const res = await this.$axios.get(`dview/v1/deals/${this.$route.params.dealRefId}`)

      this.deal = res.data.payload
     // console.log('deal', this.deal)
    },
    async getOtherUser () {
      this.loading = true
      try {
        const senderId = this.authUser.uid
        const recipId = this.$route.params.room_id.replace(senderId, '').replace('_', '')
        this.recipId = recipId

        const url = `/users/v1/user/${recipId}`
        const data = await this.$axios.$get(url)
        this.otherUser = data.payload
        this.otherUser.identityId = recipId
        this.loading = false
      } catch (error) {
        this.otherUser = null
        this.loading = false
      }
    },
    async updateReadStatus () {
      try {
        const msgUnreadRef = this.$fire.firestore
          .collection('tradingChatDeals')
          .doc(this.$route.params.dealRefId)
          .collection('rooms')
          .doc(this.$route.params.room_id)
          .collection('messages')
          .where('isRead', '==', false)
          .where('recipientId', '==', this.authUser.uid)
          .orderBy('messageTime', 'asc').limit(300)

        const batch = this.$fire.firestore.batch()

        const querySnapshot = await msgUnreadRef.get()
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log('binod', doc.id, ' => ', doc.data())
          const docRef = this.$fire.firestore
            .collection(this.chatCol)
            .doc(this.$route.params.dealRefId)
            .collection('rooms')
            .doc(this.$route.params.room_id)
            .collection('messages')
            .doc(doc.id)

          batch.update(docRef, { isRead: true, isDelivered: true })

          const senderId = this.authUser.uid
          const recipId = this.recipId

          let unreadMessageDetails = {}
          unreadMessageDetails[senderId] = 0
          unreadMessageDetails[recipId] = this.dealDocumentData?.unreadMessageDetails[recipId]

          this.$fire.firestore
          .collection(this.chatCol)
          .doc(this.$route.params.dealRefId)
          .update({unreadMessageDetails: unreadMessageDetails})
        })

        batch.commit()
      } catch (error) {
       // console.log('Error: ', error)
      }
    }
  }
})
</script>

<style scoped>
   .chat-container-content{
    /* height: calc(100vh - 270px); */
    height: calc(100vh - 154px);
    /* height: 306px; */
    margin-top: 85px;
  }

 .chat-list-auto{
      min-height: 50vh;
      max-height: 50vh;
    }

    .mgs-before-left:before, .mgs-before-right:before {
    content: "";
    height: 16px;
    position: absolute;
    bottom: 0;
    width: 17px;
    background-position: 100% 100%;
    background-repeat: no-repeat;
}

.mgs-before-right:before {
    right: -8px;
    background-image: url(~/assets/images/chat/shape-1.svg);
}

.mgs-before-left:before {
    left: -8px;
    background-image: url(~/assets/images/chat/shape-2.svg);
}
</style>
