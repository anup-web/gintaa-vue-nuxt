<template>
  
        <div class="w-full flex flex-col bg-white rounded pb-2 relative">
          
              <div class="flex flex-col w-full">

                <div class="w-full flex flex-col px-5 py-1.5 user-list bg-[#dce3d8] rounded-t h-[48px]">
                <div v-if="listing" class="flex items-center">
                  <div class="pre-page mr-5 cursor-pointer"><svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.4477 0.4477 7 1 7H15C15.5523 7 16 7.4477 16 8C16 8.5523 15.5523 9 15 9H1C0.4477 9 0 8.5523 0 8Z" fill="#565656"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70708 0.292875C9.09758 0.683375 9.09758 1.31657 8.70708 1.70707L2.41417 7.99997L8.70708 14.2929C9.09758 14.6834 9.09758 15.3166 8.70708 15.7071C8.31658 16.0976 7.68337 16.0976 7.29287 15.7071L0.292875 8.70708C-0.097625 8.31658 -0.097625 7.68337 0.292875 7.29287L7.29287 0.292875C7.68337 -0.097625 8.31658 -0.097625 8.70708 0.292875Z" fill="#565656"/>
                  </svg>
                  </div>
                  <div class="flex-shrink-0 h-9 w-9 relative">
                    <img class="h-9 w-9 rounded-full" :src="listing.images[0].url" :alt="listing.name">
                  </div>
                  <div class="ml-3">
                    <div class="text-sm font-normal text-gray-900">
                      {{ listing.name | truncate(50) }}
                    </div>
                  </div>
                </div>
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
                <!-- no offer list start -->

                <div v-if="rooms.length == 0 && !loading" class="flex flex-col w-full pt-10 pb-14">
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

                <div class="w-full user-container-content auto-scroll">
                  <div v-if="rooms.length > 0" class="w-full bg-white">
                  <div v-for="room of rooms" :key="room.id" class="w-full bg-[#f8ffff] py-2 mt-1" >
                    <ChatUserItem :room="room" />
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
  name: 'UserChatListing',
  middleware: 'authenticated',
  data () {
    return {
      loading: true,
      rooms: [],
      listing: null
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    breadcrumb () {
      return [{
        name: this.$t('chat'),
        href: this.localePath('/chat/offer-listing')
      },
      {
        name: this.listing ? this.listing.name : ''
      }
      ]
    }
  },
  created () {
    if (process.client) {
      this.subscribeTradingChatOffers()
    }
    this.getListingDetails()
  },
  methods: {
    subscribeTradingChatOffers () {
      const vm = this

      this.$fire.firestore
        .collection('tradingChatOffers')
        .doc(this.$route.params.listing_id)
        .collection('rooms')
        // .where('participants', 'array-contains-any', [this.authUser.uid])
        .orderBy('createdAt', 'desc').limit(100)
        .onSnapshot((querySnapshot) => {
          vm.rooms = []
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.room_id = doc.id
            vm.rooms.push(data)
            console.log('room', doc.id, data)
          })
          vm.loading = false
        })
    },
    async getListingDetails () {
      const res = await this.$axios.get(`/offers/v1/offers/oid/${this.$route.params.listing_id}`)

      this.listing = res.data.payload
      console.log('listing', this.listing)
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

.user-container-content {
    min-height: 50vh;
    max-height: 70vh;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
