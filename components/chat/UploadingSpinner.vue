<template>
  <div class="w-full mb-4 px-4 flex justify-end ">
    <div class="max-w-[95%] flex justify-end">
      <div class="max-w-full relative bg-darkcolor rounded-lg p-2 msg-cotainer mgs-before-right">
        <div class="w-full flex justify-start text-xsb text-white ">
          <span class="mr-2">Uploading</span>
          <Spinner />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'ChatRightMsgItem',
  props: ['message'],
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
