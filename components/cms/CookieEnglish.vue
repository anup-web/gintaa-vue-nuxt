<template>
             <div>
            <h1 v-if="isFromWeb()" class="text-lg md:text-xl lg:text-[24px] text-gray-900 font-semibold mb-4 lg:mb-7 text-center">Cookies & Policy</h1>

         <div class="term-para text-sm text-gray-600">
           <p class="mb-6">We at <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com</a> in the course of providing our service through our website use cookies.</p>
             <p class="mb-6 leading-6">A cookie is a small file placed by us on the hard drive of your computer which helps us to learn about your usage pattern, the type of browser you use, your interests. Cookies also helps in analysing and measuring traffic and frequency of browsing, define services and offers personalized user experience <a href="https://gintaa.com/" target="_blank" class="text-firoza"> www.gintaa.com.</a> In effect you will have an ease of operation on our website from your second visit if you allow Cookies to remain on your computer.</p>
               <p class="mb-6">Your Personal Data or Sensitive Personal Data are not stored in cookies and cookies do not harm your device.By continuing to use <a href="https://gintaa.com/" target="_blank" class="text-firoza"> www.gintaa.com,</a> you agree to our use of Cookie Policy.</p>
         </div>

            </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CookieEnglish',
   methods:{
    isFromWeb(){
      if(this.$route.query.fromMobileApp === null){
        return false
      }else{
        return true
      }
    }
  }
});
</script>
