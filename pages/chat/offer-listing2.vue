<template>
  <div class="w-full flex flex-col bg-white rounded pb-2 relative">
    
    <div class="flex flex-col w-full">
     
      <div class="w-full flex flex-row items-center px-5 py-2 user-list bg-[#dce3d8] rounded-t h-[40px] mb-1">
          <div class="text-gray-900 text-base mr-4">Offers</div>
          <span v-if="dealChatUnreadCount" class="flex justify-center items-center h-6 w-6 text-xs text-white rounded-full ring-4 ring-rose-200 bg-rose-400">
            {{dealChatUnreadCount}}
          </span>
      </div>
        <div v-if="loading" class="flex flex-col w-full">
          <div class="p-4 max-w-[705px] w-full mx-auto">
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

            <div class="animate-bounce flex space-x-4 mt-6">
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

            <div class="animate-bounce flex space-x-4 mt-6">
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

            <div class="animate-bounce flex space-x-4 mt-6">
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

            <div class="animate-bounce flex space-x-4 mt-6">
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

            <div class="animate-bounce flex space-x-4 mt-6">
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
        </div>
        <div v-if="!loading" class="flex flex-col w-full">
          <!-- no offer list start -->
          <div v-if="!dealChats.length" class="flex flex-col w-full pt-10 pb-14">
            <div class="w-full flex justify-center items-center pt-4">
              <img
                width="320"
                height="213"
                src="~/assets/images/chat/chat-noffer.png"
                alt="iamges"
              >
            </div>

            <div class="w-full flex justify-center items-center pt-3">
              <div class="text-sm text-gray-500 text-center font-normal">
                {{ $t('noOfferchat') }}
              </div>
            </div>
          </div>
          <!-- no offer list end -->

          

          <div v-if="dealChats.length > 0" class="w-full offer-container-content auto-scroll-chat">
            <div v-for="(chat, index) in dealChats" :key="'chat-list-' + index">
              <ChatOfferItem :chat="chat" />
            </div>
          </div>
        </div>


      
    </div>
  </div>
</template>

<script>

import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'ChatOfferListing',
  middleware: 'authenticated',
  data () {
    return {
      breadcrumb: [{
        name: this.$t('chat')
      }
      ],
      loading: true,
      listingChats: [],
      dealChats: []
    }
  },
  head () {
    return {
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex,nofollow'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    listingChatUnreadCount () {
      return 0
    },
    dealChatUnreadCount () {
      let unreadChatCount = 0
      if(this.dealChats.length) {
        this.dealChats.map((item)=>{
          let count = 0
          if(item?.unreadMessageDetails && item?.unreadMessageDetails[this.authUser.uid]){
            count = item?.unreadMessageDetails[this.authUser.uid]
          } 

          unreadChatCount += count
        })
      }
      return unreadChatCount
    }
  },
  created () {
    if (process.client) {
      // this.subscribeTradingChatOffers()
      this.subscribeTradingChatDeals()
    }
  },
  methods: {
    subscribeTradingChatOffers () {
      const vm = this

      this.$fire.firestore
        .collection('tradingChatOffers')
        .where('participants', 'array-contains-any', [this.authUser.uid])
        .orderBy('createdAt', 'desc').limit(100)
        .onSnapshot((querySnapshot) => {
          vm.listingChats = []
          querySnapshot.forEach((doc) => {
            vm.listingChats.push(doc.data())
            // console.log('listing', doc.id, doc.data())
          })
          vm.loading = false
        })
    },
    subscribeTradingChatDeals () {
      const vm = this

      this.$fire.firestore
        .collection('tradingChatDeals')
        .where('participants', 'array-contains-any', [this.authUser.uid])
        .orderBy('createdAt', 'desc').limit(100)
        .onSnapshot((querySnapshot) => {
          vm.dealChats = []
          querySnapshot.forEach((doc) => {
            let data = JSON.parse(JSON.stringify(doc.data()));
            data['dealRefId'] = doc.id
            vm.dealChats.push(data)
            // console.log('deal', doc.id, data)
            // console.log('dealChats:', vm.dealChats)
          })
          
          vm.loading = false
        })
    }
  }
})
</script>

<style scoped>
  .nav-links{
    border-color: #ededed;
  }
  .nav-links.active {
    color: #48CEF3!important;
    border-color: #48CEF3!important;
}

.listing-container-content{
    min-height: 50vh;
    max-height: 66vh;
    overflow-x: hidden;
    overflow-y: auto;
  }

     .offer-container-content{
    min-height: 87vh;
    max-height: 87vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
