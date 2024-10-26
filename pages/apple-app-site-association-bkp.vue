<template>
 <div>
  
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'apple-app-site-association',
  mounted(){
    if(process.client){
      this.downloadJsonFile()
    }
  },
  methods: {
    downloadJsonFile() {
      let envirment = this.$config.CURRENT_ENV
      let url = `/apple-app-site-association-${envirment}`
      window.open(url)
    }
  }

})
</script>


