<template>
  <div v-if="message.replyObj.messageType == 'HTML'" class="w-full">
    <div class="w-full bg-[#cbe7a5] relative rounded py-1 pr-1 pl-2 border-l-[0.188rem] border-[#a9cf78] mb-1">
      <div class="w-full text-sm text-gray-700 mb-1">
        {{ displayName }}
      </div>
      <div class="w-full text-xs text-white">
        {{ message.replyObj.messageBody | truncate(100) }}
      </div>
    </div>
  </div>

  <div v-else-if="message.replyObj.messageType == 'IMAGE'" class="w-full">
    <div class="w-full bg-[#cbe7a5] flex items-center justify-between relative rounded py-1 pr-1 pl-2 border-l-[0.188rem] border-[#a9cf78] mb-1">
      <div class="mr-5">
        <div class="text-sm text-gray-700 mb-1">
          {{ displayName }}
        </div>
        <div class="flex items-center text-xs text-white">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path d="M9.99977 7.69238C8.30747 7.69238 6.92285 9.077 6.92285 10.7693C6.92285 12.4616 8.30747 13.8462 9.99977 13.8462C11.6921 13.8462 13.0767 12.4616 13.0767 10.7693C13.0767 9.077 11.6921 7.69238 9.99977 7.69238Z" fill="#ffffff" />
            <path d="M17.6921 5.38454H15.6921C15.1537 5.38454 14.6921 5.11531 14.3844 4.69223L13.4998 3.34608C13.2306 2.69223 12.5767 2.30762 11.8844 2.30762H8.1152C7.42289 2.30762 6.76904 2.69223 6.46135 3.34608L5.57674 4.69223C5.3075 5.11531 4.8075 5.38454 4.26904 5.38454H2.3075C1.46135 5.38454 0.769043 6.07685 0.769043 6.923V16.1538C0.769043 16.9999 1.46135 17.6922 2.3075 17.6922H17.6921C18.5383 17.6922 19.2306 16.9999 19.2306 16.1538V6.923C19.2306 6.07685 18.5383 5.38454 17.6921 5.38454ZM9.99981 15.3845C7.46135 15.3845 5.38443 13.3076 5.38443 10.7692C5.38443 8.23069 7.46135 6.15377 9.99981 6.15377C12.5383 6.15377 14.6152 8.23069 14.6152 10.7692C14.6152 13.3076 12.5383 15.3845 9.99981 15.3845Z" fill="#ffffff" />
          </svg>

          <span class="text-white text-xs ml-2">Photo</span>
        </div>
      </div>
      <div class="flex-shrink-0 h-10 w-10 relative">
        <img class="h-10 w-10 rounded" :src="message.replyObj.messageAttr.mediaUrls[0]" alt="image">
      </div>
    </div>
  </div>

  <div v-else-if="message.replyObj.messageType == 'VIDEO'" class="w-full">
    <div class="w-full bg-[#cbe7a5] flex items-center justify-between relative rounded py-1 pr-1 pl-2 border-l-[0.188rem] border-[#a9cf78] mb-1">
      <div class="mr-5">
        <div class="text-sm text-gray-700 mb-1">
          {{ displayName }}
        </div>
        <div class="flex items-center text-xs text-white">
          <svg width="12" height="12" viewBox="0 0 20 15" fill="none">
            <path d="M18.27 0.38L14 5V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V12C0 12.5304 0.210714 13.0391 0.585786 13.4142C0.960859 13.7893 1.46957 14 2 14H12C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12V9.5L18.29 13.79C18.4293 13.9304 18.6071 14.0264 18.8009 14.0658C18.9947 14.1052 19.1958 14.0862 19.3789 14.0113C19.5619 13.9363 19.7186 13.8088 19.8292 13.6448C19.9397 13.4809 19.9992 13.2878 20 13.09V1.09C20.0055 0.887146 19.9491 0.687428 19.8384 0.517376C19.7276 0.347324 19.5678 0.214985 19.38 0.137939C19.1923 0.0608925 18.9856 0.0427843 18.7873 0.08602C18.589 0.129256 18.4086 0.231789 18.27 0.38V0.38Z" fill="#ffffff" />
          </svg>

          <span class="text-white text-xs ml-2">video</span>
        </div>
      </div>
      <div class="flex-shrink-0 h-10 w-10 relative">
        <video controls class="w-full h-10 bg-black rounded">
          <source :src="message.replyObj.messageAttr.mediaUrls[0]" type="video/mp4" class="w-full h-full">
        </video>
      </div>
    </div>
  </div>

  <div v-else-if="message.replyObj.messageType == 'FILE'" class="w-full">
    <div class="w-full bg-[#cbe7a5] relative rounded py-1 pr-1 pl-2 border-l-[0.188rem] border-[#a9cf78] mb-1">
      <div class="w-full text-sm text-gray-700 mb-1">
        {{ displayName }}
      </div>
      <div class="w-full flex items-center text-xs text-white">
        <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C11 0.447715 10.5523 0 10 0C9.44771 0 9 0.447715 9 1V10.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L9.29218 13.7064C9.29459 13.7088 9.29702 13.7112 9.29945 13.7136C9.3938 13.8063 9.50195 13.8764 9.61722 13.9241C9.73425 13.9727 9.8625 13.9996 9.997 14L10 14L10.003 14C10.2746 13.9992 10.5208 13.8901 10.7005 13.7136C10.703 13.7112 10.7054 13.7088 10.7078 13.7064L15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289L11 10.5858V1ZM1 12C1.55228 12 2 12.4477 2 13V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13V17C20 17.7957 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7957 20 17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7957 0 17V13C0 12.4477 0.447715 12 1 12Z" fill="#ffffff" />
        </svg>
        <span class="text-white text-xs ml-2">{{ message.replyObj.messageBody | truncate(100) }}</span>
      </div>
    </div>
  </div>

  <div v-else-if="message.replyObj.messageType == 'AUDIO_RECORDING'" class="w-full">
    <div class="w-full bg-[#cbe7a5] relative rounded py-1 pr-1 pl-2 border-l-[0.188rem] border-[#a9cf78] mb-1">
      <div class="w-full text-sm text-gray-700 mb-1">
        {{ displayName }}
      </div>
      <div class="w-full flex items-center text-xs text-white">
        <svg width="14" height="14" viewBox="0 0 18 17" fill="none">
          <path d="M9.0211 0.848898C6.82909 0.84411 4.64183 1.64877 2.94201 3.24213C-0.143984 6.13483 -0.736962 10.7977 1.46586 14.3594V14.4902C1.46586 15.6708 2.41237 16.6216 3.59083 16.6303C3.59058 16.619 3.58932 16.608 3.58932 16.5967V10.1576C2.70656 10.1647 1.95385 10.7004 1.63232 11.4652C1.01464 8.88596 1.78238 6.08823 3.81998 4.17826C6.56228 1.60772 10.7612 1.43457 13.7058 3.77061C16.0642 5.64162 17.0369 8.66217 16.3657 11.4632C16.0437 10.6995 15.2917 10.1647 14.4097 10.1576V16.5967C14.4097 16.608 14.4085 16.619 14.4082 16.6303C15.5867 16.6216 16.5332 15.6708 16.5332 14.4902V14.3002C16.5878 14.2523 16.634 14.1955 16.6696 14.1322C18.8624 10.3342 17.9392 5.49094 14.5035 2.76528C12.893 1.48764 10.9552 0.853124 9.02109 0.848898H9.0211ZM4.18751 10.1576V16.6323H4.59315C4.84385 16.6323 5.04592 16.4302 5.04592 16.1795V10.6103C5.04592 10.3596 4.84385 10.1576 4.59315 10.1576H4.18751ZM13.4054 10.1576C13.1547 10.1576 12.9527 10.3596 12.9527 10.6103V16.1795C12.9527 16.4302 13.1547 16.6323 13.4054 16.6323H13.8111V10.1576H13.4054Z" fill="#ffffff" />
        </svg>
        <span class="text-white text-xs ml-2">02:12 audio</span>
      </div>
    </div>
  </div>

  <div v-else-if="message.replyObj.messageType == 'OFFER'" class="w-full">
    <div class="w-full bg-[#cbe7a5] flex items-center relative rounded py-1 pr-1 pl-2 border-l-[0.188rem] border-[#a9cf78] mb-1">
      <div class="flex-shrink-0 h-10 w-10 relative">
        <img class="h-10 w-10 rounded" :src="message.replyObj.messageAttr.offerUrl" alt="image">
      </div>
      <div class="ml-3">
        <div class="text-sm text-gray-700 mb-1">
          Listing #{{ message.replyObj.messageAttr.offerId }}
        </div>
        <div class="flex items-center text-xs text-white">
          {{ message.replyObj.messageAttr.offerName | truncate(100) }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'ReplyViewRight',
  props: ['message'],
  data () {
    return {
      readMore: false
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    displayName () {
      return this.authUser.uid === this.message.replyObj.senderId ? 'You' : this.message.replyObj.senderName
    }
  }
})
</script>
