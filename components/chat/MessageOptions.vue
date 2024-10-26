<template>
  <div class="flex justify-center">
    <div class="dropstart relative">
      <button
        id="dropdownMenuButton1s"
        class="bg-transparent rounded-full flex items-center text-gray-400 "
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <svg width="6" height="22" class="h-4 w-4" viewBox="0 0 4 18" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2ZM0 9C0 7.89543 0.89543 7 2 7C3.10457 7 4 7.89543 4 9C4 10.1046 3.10457 11 2 11C0.89543 11 0 10.1046 0 9ZM2 14C0.89543 14 0 14.8954 0 16C0 17.1046 0.89543 18 2 18C3.10457 18 4 17.1046 4 16C4 14.8954 3.10457 14 2 14Z" fill="#121212" />
        </svg>
      </button>
      <ul
        class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg
                        mt-1 hidden m-0 bg-clip-padding border-none"
        aria-labelledby="dropdownMenuButton1s"
      >
        <li>
          <a
            class="dropdown-item text-sm cursor-pointer py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            @click="reply()"
          >Reply</a>
        </li>
        <li v-if="message.messageType == 'HTML'">
          <a
            class="dropdown-item text-sm cursor-pointer py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            @click="copy()"
          >{{ $t('copy') }}</a>
        </li>
        <li>
          <a
            class="dropdown-item text-sm cursor-pointer py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
            @click="deleteForMe()"
          > {{ $t('deleteForMe') }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'ChatMsgOption',
  props: ['message', 'user'],
  data () {
    return {
      chatCol: this.$route.params.listing_id ? 'tradingChatOffers' : 'tradingChatDeals',
      list_deal_id: this.$route.params.listing_id || this.$route.params.dealRefId,
      room_id: this.$route.params.room_id
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    })
  },
  methods: {
    reply () {
      this.$store.dispatch('chat/reply/setMessage', { message: this.message, user: this.user })
    },
    async copy () {
      try {
        await navigator.clipboard.writeText(this.message.messageBody)
        // alert('Copied')
      } catch ($e) {
        // alert('Cannot copy')
      }
    },
    deleteForMe () {
      let deletedForMe = []
      if (this.message.deletedForMe && this.message.deletedForMe.length > 0) {
        deletedForMe = this.message.deletedForMe.slice()
      }

      deletedForMe.push(this.authUser.uid)

      const uniqDeletedForMe = [...new Set(deletedForMe)]

      this.$fire.firestore
        .collection(this.chatCol)
        .doc(this.list_deal_id)
        .collection('rooms')
        .doc(this.room_id)
        .collection('messages')
        .doc(this.message.message_id)
        .update({
          deletedForMe: uniqDeletedForMe
        })
    }
  }
})
</script>
