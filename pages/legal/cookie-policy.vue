<template>
  <div>
    <Header v-if="isFromWeb()" /> 
    <section :class="isFromWeb()? 'pt-[90px]' : 'pt-[1px]'" class="bg-[#ffffff]   min-h-[500px] flex flex-col md:pt-0">
        <div class="py-8 pt-4 lg:pt-28 lg:pb-20">
        <div class="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
            <div class="flex flex-col w-full mx-auto max-w-[1200px]">
               <!-- <CookieEnglish/> -->
               <CookieEnglish v-if="$i18n.locale == 'en'" />
               <CookieHindi v-if="$i18n.locale == 'hi'" />
                <CookieBengali v-if="$i18n.locale == 'bn'" />
            </div>
        </div>
        </div>
    </section>
   <Footer v-if="isFromWeb()"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default{
  name: 'CookiePolicyPage',
 methods:{
    isFromWeb(){
      if(this.$route.query.fromMobileApp === null){
        return false
      }else{
        return true
      }
    }
  },
  head() {  
    return {
      title: "Cookie Policy | gintaa India | gintaa Customer service",
      meta: [{
        hid: 'description',
        name: 'description',
        content: "We in the time of providing our service through our website use cookie to allow an ease of operation and advantages of necessary features at gintaa."
      }]
    }
  }
}
</script>