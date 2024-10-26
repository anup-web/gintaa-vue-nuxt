<template>
  <div v-if="getProfileImageUrl(imageUrl)">
    <img :src="getProfileImageUrl(imageUrl)" alt="profile-img" class="w-9 h-9 rounded-full unfollow-img" >
  </div>
  <div v-else>
    <img class="w-9 h-9 rounded-full" alt="profile-img" src="~/assets/images/profile/chatu-noimg.svg">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "ProfileAvatar",
  props: ["imageUrl"],

  data() {
    return {

    }
  },
  mounted() {
    // console.log("================",this.imageUrl)
  },
  methods: {

    getProfileImageUrl(imageUrl: string) {
      //     console.log("imageUrl",imageUrl)
      const defaultImage = "~/assets/images/profile/chatu-noimg.svg";
      if (imageUrl && !imageUrl.match("deleted.jpeg") && imageUrl !== null) {
        // console.log("Iamge Exists")
        return imageUrl;
      } else {
        return false;
      }

    },

  }
})
</script>
