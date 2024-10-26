<template>
  <div class="product-details-page pt-[80px] lg:pt-12">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class="w-full bg-[#f9f9f9] pb-14 pt-6">
    <!-- <div class="max-w-[705px] mx-auto pt-10">
      <Breadcrumb :breadcrumb="breadcrumb" />
    </div> -->

    <div class="container mx-auto">
      <div class="max-w-[705px] h-[460px] mx-auto bg-white rounded flex items-center space-x-4 mt-5 relative auto-scroll overflow-hidden">
        <iframe :src="chatRoomPath" frameborder="0" gesture="media"  allow="encrypted-media" seamless="seamless" allowfullscreen></iframe>
      </div>
    </div>
    </div>
    <!--footer section goes here-->
    <Footer />
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
      dealChats: [],
      chatRoomPath: this.$route.query.chatroom ? this.$route.query.chatroom :'/chat/offer-listing2'
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
      return 0
    }
  },
  created () {
    if (process.client) {
      this.subscribeTradingChatOffers()
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
            const data = doc.data()
            data.dealRefId = doc.id
            vm.dealChats.push(data)
            // console.log('deal', doc.id, data)
          })
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

   iframe {
    display: block;       
    background: transparent;
    border: none;        
    height: 460px;
    width: 100%; 
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0; 
    overflow: hidden;
}
</style>
