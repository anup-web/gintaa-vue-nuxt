<template> 
  <div class="absolute right-2 cursor-pointer top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40">
    <svg 
      v-if="foodType === 'NON_VEG'"
      width="20" height="20" viewBox="0 0 20 19" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="19" height="18"
        stroke="#EE1029"></rect>
      <circle cx="10" cy="9" r="5" fill="#EE1029"></circle>
    </svg> 
    <svg 
      v-if="foodType === 'VEG'"
      width="20" height="20" viewBox="0 0 20 19" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="19" height="18"
        stroke="#EE1029"></rect>
      <circle cx="10" cy="9" r="5" fill="#EE1029"></circle>
    </svg> 
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FoodIndicator',
  props: ['foodType'],
  mounted(){ 
  },
  methods:{
  }
})
</script>



<style>
.fav-color path{
  fill:#EE2a7b !important;
}
</style>

