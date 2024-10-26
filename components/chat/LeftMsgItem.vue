<template>
  <div class="w-full mb-4 px-4 flex justify-start ">
    <div class="max-w-[88%] flex justify-start">
      <div class="max-w-full relative bg-[#F6F8FC] rounded p-2 msg-cotainer mgs-before-left break-words">
        <div v-if="message.messageType == 'HTML'" class="w-full text-xsb text-[rgba(0, 0, 0, 0.6)] ">
          <ChatReplyViewLeft v-if="message.replyObj" :message="message" />
          <span class="wrapword" v-if="!readMore">{{ message.messageBody | truncate(150) }}</span>
          <span class="wrapword"  v-else>{{ message.messageBody }}</span>
        </div>

        

        <div v-else-if="message.messageType == 'IMAGE'" class="send-image-view overflow-hidden w-64">
          <ChatReplyViewLeft v-if="message.replyObj" :message="message" />
          <!-- single image send start -->
          <div class="overflow-hidden w-full h-52 float-left">
            <img :src="message.messageAttr.mediaUrls[0]" :alt="message.messageBody" class="w-full h-52 object-cover rounded">
          </div>
          <!-- single image send end -->
          <div class="w-full flex justify-start text-xsb text-[rgba(0, 0, 0, 0.6)] ">
            <span>{{ message.messageBody | truncate(150) }}</span>
          </div>
        </div>

       

        <div v-else-if="message.messageType == 'VIDEO'" class="send-image-view overflow-hidden w-64">
          <ChatReplyViewLeft v-if="message.replyObj" :message="message" />
          <div class="overflow-hidden w-full h-52 float-left">
            <video controls class="w-full h-52 bg-black rounded">
              <source :src="message.messageAttr.mediaUrls[0]" type="video/mp4" class="w-full h-full">
            </video>
          </div>
          <div class="w-full flex justify-start text-xsb text-[rgba(0, 0, 0, 0.6)] ">
            <span>{{ message.messageBody | truncate(150) }}</span>
          </div>
        </div>

       

        <div v-else-if="message.messageType == 'AUDIO_RECORDING'" class="w-full text-xsb text-white ">
          <ChatReplyViewLeft v-if="message.replyObj" :message="message" />
          <audio controls class="h-10 w-[275px]">
            <source :src="message.messageAttr.mediaUrls[0]">
            Your browser does not support the audio element.
          </audio>
        </div>

        

        <div v-else-if="message.messageType == 'FILE'" class="w-full ">
          <ChatReplyViewLeft v-if="message.replyObj" :message="message" />
          <a :href="message.messageAttr.mediaUrls[0]" target="_blank" class="flex items-start cursor-pointer">
            <div class="flex items-center justify-center h-6 w-6 bg-green rounded">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C11 0.447715 10.5523 0 10 0C9.44771 0 9 0.447715 9 1V10.5858L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L9.29218 13.7064C9.29459 13.7088 9.29702 13.7112 9.29945 13.7136C9.3938 13.8063 9.50195 13.8764 9.61722 13.9241C9.73425 13.9727 9.8625 13.9996 9.997 14L10 14L10.003 14C10.2746 13.9992 10.5208 13.8901 10.7005 13.7136C10.703 13.7112 10.7054 13.7088 10.7078 13.7064L15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289C15.3166 6.90237 14.6834 6.90237 14.2929 7.29289L11 10.5858V1ZM1 12C1.55228 12 2 12.4477 2 13V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H17C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V13C18 12.4477 18.4477 12 19 12C19.5523 12 20 12.4477 20 13V17C20 17.7957 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7957 20 17 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.31607 18.5587 0 17.7957 0 17V13C0 12.4477 0.447715 12 1 12Z" fill="#ffffff" />
              </svg>
            </div>
            <span class="text-xsb text-[rgba(0, 0, 0, 0.6)] pl-2 overflow-hidden">{{ message.messageBody | truncate(150) }}</span>
          </a>
        </div>

        

        <div v-else-if="message.messageType == 'OFFER'" class="w-60">
          <ChatReplyViewLeft v-if="message.replyObj" :message="message" />
          <a :href="getLink" target="_blank" class="group box-border overflow-hidden flex p-3 mb-1 cursor-pointer flex-col items-start bg-[#f1f1f1] relative">
            <div class="product-img flex mb-2 md:mb-2 h-44 justify-center w-full items-center overflow-hidden">
              <img :src="message.messageAttr.offerUrl" :alt="message.messageBody" class="bg-gray-300 object-cover  m-w-full max-w-[100%] transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
            </div>
            <div class="product-title w-full overflow-hidden px-1">
              <h2 class="text-heading font-semibold truncate text-sm text-gray-600">
                {{ message.messageAttr.offerName | truncate(150) }}
              </h2>
            </div>
          </a>
        </div>

        <div v-if="message.messageBody.length > 150" class="w-full flex justify-end">
          <div v-if="!readMore" class="flex items-center text-xs text-gray-700 cursor-pointer" @click="readMore = true">
            <span class="pr-1"> Read more </span>
            <svg width="8" height="6" viewBox="0 0 14 8" fill="none">
              <path d="M0.8 1.7L7 8L13.2 1.7C13.4 1.5 13.5 1.2 13.5 1C13.5 0.8 13.4 0.5 13.2 0.3C13 0.1 12.8 0 12.5 0H1.5C1.2 0 1 0.1 0.8 0.3C0.6 0.5 0.5 0.7 0.5 1C0.5 1.3 0.6 1.5 0.8 1.7Z" fill="rgb(55 65 81)" />
            </svg>
          </div>
          <div v-if="readMore" class="flex items-center text-xs text-gray-700 cursor-pointer" @click="readMore = false">
            <span class="pr-1"> Read less  </span>
            <svg width="8" height="6" viewBox="0 0 13 8" fill="none">
              <path d="M12.7 6.3L6.5 0L0.3 6.3C0.1 6.5 0 6.8 0 7C0 7.2 0.1 7.5 0.3 7.7C0.5 7.9 0.7 8 1 8H12C12.3 8 12.5 7.9 12.7 7.7C12.9 7.5 13 7.2 13 7C13 6.8 12.9 6.5 12.7 6.3Z" fill="rgb(55 65 81)" />
            </svg>
          </div>
        </div>

        <div class="w-full flex justify-end msg-time-bottom ">
          <div class="text-xs text-[rgba(0, 0, 0, 0.6)] flex self-end mr-2">
            {{ $moment(message.messageTime).format('hh:mm A') }}
          </div>

          <div class="double-check flex self-end">
            <!-- <svg width="20" height="20" viewBox="0 0 24 24" fill="none" >
              <path d="M9.17206 18.657C8.90686 18.6569 8.65255 18.5515 8.46506 18.364L2.80806 12.707C2.6259 12.5184 2.5251 12.2658 2.52738 12.0036C2.52966 11.7414 2.63483 11.4906 2.82024 11.3052C3.00565 11.1198 3.25646 11.0146 3.51865 11.0123C3.78085 11.01 4.03345 11.1108 4.22206 11.293L9.17206 16.243L19.7781 5.636C19.9667 5.45384 20.2193 5.35305 20.4815 5.35532C20.7437 5.3576 20.9945 5.46277 21.1799 5.64818C21.3653 5.83359 21.4705 6.0844 21.4727 6.3466C21.475 6.60879 21.3742 6.8614 21.1921 7.05L9.87906 18.364C9.69156 18.5515 9.43725 18.6569 9.17206 18.657V18.657Z" fill="#acacac"/>
              </svg> -->
            <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
              <path d="M11.602 13.76L13.014 15.172L21.48 6.706L22.894 8.12L13.014 18L6.65 11.636L8.064 10.222L10.189 12.347L11.602 13.759V13.76ZM11.604 10.932L16.556 5.979L17.966 7.389L13.014 12.342L11.604 10.932ZM8.777 16.587L7.364 18L1 11.636L2.414 10.222L3.827 11.635L3.826 11.636L8.777 16.587V16.587Z" fill="#acacac"/>
              </svg> -->

            <!-- <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11.602 13.76L13.014 15.172L21.48 6.706L22.894 8.12L13.014 18L6.65 11.636L8.064 10.222L10.189 12.347L11.602 13.759V13.76ZM11.604 10.932L16.556 5.979L17.966 7.389L13.014 12.342L11.604 10.932ZM8.777 16.587L7.364 18L1 11.636L2.414 10.222L3.827 11.635L3.826 11.636L8.777 16.587V16.587Z" fill="#59a3ef" />
            </svg> -->
          </div>
        </div>
      </div>
      <ChatMessageOptions :message="message" :user="user" />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'ChatLeftMsgItem',
  props: ['message', 'user'],
  data () {
    return {
      readMore: false
    }
  },
  computed: {
    getLink () {
      return this.localePath(`/p/${this.slugify(this.message.messageAttr.offerName)}/${this.message.messageAttr.offerId}`)
    }
  },
  methods: {
    slugify (text) {
      return text
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
    }
  }
})
</script>

<style scoped>
.wrapword{
  word-wrap: break-word;   
  white-space: -moz-pre-wrap; 
  white-space: pre-wrap;
 }

</style>