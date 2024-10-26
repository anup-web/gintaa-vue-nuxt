<template>
             <div>
            <h1 v-if="isFromWeb()" class="text-lg md:text-xl lg:text-[24px] text-gray-900 font-semibold mb-4 lg:mb-7 text-center">कुकी नीति</h1>

         <div class="term-para text-sm text-gray-600">
           <p class="mb-6">हम  <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com</a> पर अपनी वेबसाइट के माध्यम से अपनी सेवा प्रदान करने के क्रम में कुकीज़ का उपयोग करते हैं।</p>
             <p class="mb-6 leading-6">कुकी हमारे द्वारा आपके कंप्यूटर की हार्ड ड्राइव पर रखी गई एक छोटी फ़ाइल है जो हमें आपके उपयोग पैटर्न, आपके द्वारा उपयोग किए जाने वाले ब्राउज़र के प्रकार, आपकी रुचियों के बारे में जानने में मदद करती है। कुकीज़ ना केवल ट्रैफ़िक और ब्राउज़िंग की आवृत्ति को मापने और उसका विश्लेषण करने में मदद करती है, बल्कि सेवाओं को परिभाषित करती है और व्यक्तिगत उपयोगकर्ता का अनुभव<a href="https://gintaa.com/" target="_blank" class="text-firoza"> www.gintaa.com</a> पर प्रदान करती है।वास्तव में यदि आप कुकीज़ को अपने कंप्यूटर पर रहने देते हैं, तो हमारी वेबसाइट पर आपकी दूसरी यात्रा से आपको संचालन में आसानी होगी।</p>
               <p class="mb-6">आपका व्यक्तिगत डेटा या संवेदनशील व्यक्तिगत डेटा कुकीज़ में संग्रहीत नहीं किया जाता है और कुकीज़ आपके डिवाइस को नुकसान नहीं पहुंचाती हैं।</p>
               <p>  <a href="https://gintaa.com/" target="_blank" class="text-firoza"> www.gintaa.com,</a> का उपयोग जारी रखते हुए, आप हमारे कुकी नीति के उपयोग से सहमत हैं।
</p>
         </div>

            </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CookieHindi',
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
