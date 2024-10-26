<template>
 <div  
      class="grid gap-x-8 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-3 mt-4">

      <div  v-for="item of 6" :key="item"  class="w-full rounded pb-3 bg-white shadow-md ">
                      <div class="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                            <div class="h-2 w-32 bg-slate-200 rounded shimmerBG"></div>
                            <div class="h-2 w-12 bg-slate-200 rounded shimmerBG"></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG"></div>
                      </div>
                  <div class="flex px-4 mt-4">
                  <div class="mr-4 flex flex-1 flex-col ">
                        <div class="h-6 w-6 bg-slate-200 rounded shimmerBG"></div>
                        <div class="h-2 w-32 bg-slate-200 rounded shimmerBG mt-4"></div>
                        <div class="h-2 w-12 bg-slate-200 rounded shimmerBG mt-4"></div>
                        <div class="grid gap-x-8 gap-y-4 grid-cols-4 mt-6">
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG"></div>
                            <div class="h-2 w-8 bg-slate-200 rounded shimmerBG"></div>
                            <div class="h-2 w-6 bg-slate-200 rounded shimmerBG"></div>
                            <div class="h-2 w-8 bg-slate-200 rounded shimmerBG"></div>
                            <div class="h-2 w-6 bg-slate-200 rounded shimmerBG"></div>
                            <div class="h-2 w-10 bg-slate-200 rounded shimmerBG"></div>
                            <div class="h-2 w-8 bg-slate-200 rounded shimmerBG"></div>
                            <div class="h-2 w-6 bg-slate-200 rounded shimmerBG"></div>
                        </div>
                  </div>
                  <div class="flex-shrink-0">
                    <div class="h-32 w-32 bg-slate-200 rounded shimmerBG"></div>
                  </div>
                </div>
                </div>

     
      </div>
      </template>

<script lang="ts">
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default Vue.extend({
    name: 'Search',
    components: {
        // SplitCarousel,
        // SplitCarouselItem
        VueSlickCarousel,

    },

    data: function () {
        return {
           
            selectedAddress: null,
         
        }
    },

});
</script>

<style scoped>

.search-tabs .nav-tabs .nav-link.active {
    color: #ffffff;
    border-color: #48CEF3;
}

.search-tabs .nav-tabs .nav-link {
    color: #48CEF3;
}

.search-tabs ul li:nth-child(1){
    width: 145px;
}
.search-tabs ul li:nth-child(2){
    width: 82px;
}
 </style>
      