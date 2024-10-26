<template>
    <section class="mx-auto max-w-[1920px] pb-4 px-4 md:px-8 xl:px-16 2xl:px-16 py-0 sm:pb-4 md:pb-4 lg:pb-10">
                    <div class="w-full">
                         <div class="w-full flex items-center justify-center mt-20 mb-10">
                              <img src="~/assets/images/food/coming-soon.svg" alt="image" class="max-w-full" />
                         </div>  
                         <div class="w-full flex items-center justify-center text-center text-base font-medium text-gray-700 mt-6">
                          Just a little more waiting </div>
                          <div class="w-full flex items-center justify-center text-center text-xl font-medium text-gray-500 mt-0">
                          We will be there soon</div>
                         <div class="w-full flex items-center justify-center text-center text-base text-gray-700 mt-6">
                          Sorry, online ordering isn’t available to your location yet.</div>
                        
                         </div>
       
    </section>
    
</template>
<script lang="ts">
  import Vue from 'vue'
 
  export default Vue.extend({
    name: 'comingSoon',
   
  });
  </script>
