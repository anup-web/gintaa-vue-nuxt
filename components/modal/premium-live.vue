<template>
    <!--start premium tag modal -->
<div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true"> 
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">    
      <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[750px] premium-tag-bg">
        <div class="w-full flex flex-row items-center justify-center px-4 relative mt-[180px] mb-2 sm:mt-[344px] md:mt-[344px] title-mtop">
             <div class="text-base text-gray-700 font-medium">{{$t('premiumLiveTitle')}}</div>
       </div>
       <div class="w-full flex flex-row items-center justify-center px-4 mt-2">
              <div class="text-sm text-gray-500">{{$t('premiumLivePara')}}</div>
       </div>      
        
        <div class="w-full flex flex-row items-center justify-center px-4 mt-4">
          <button type="button" class="flex w-32 h-10 justify-center rounded-sm border border-gray-300 bg-transparent px-4 py-2 text-sm text-gray-700 " @click="closePremiumPup()"><span>{{$t('skip')}}</span></button>
          <button type="button" class="flex w-32 h-10 justify-center rounded-sm border border-transparent bg-firoza px-4 py-2 text-sm text-white ml-4" @click="seeMore()"><span>{{$t('premiumSeeMore')}}</span></button>
        </div>
      </div>
    </div>
  </div>
</div>
<!--premium tag modal end -->
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "premiumLive",
  methods: {
    closePremiumPup(){
      window.localStorage.setItem("skipfeatureList",'true');
      this.$emit(
          "closePremiumPopup",true );
    },

    seeMore(){
      window.localStorage.setItem("skipfeatureList",'true');
      this.$emit("closePremiumPopup",true);
      this.$router.push({ path: this.localePath(`/search`), query: {viewallFeatureList : 'true'  }})
    }
  }
});
</script>

<style scoped>
.premium-tag-bg{
    background-image: url(~/assets/images/dec-home/premium-bg.jpg);
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% auto;
}
</style>