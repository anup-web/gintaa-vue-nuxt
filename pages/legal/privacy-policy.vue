<template>
  <div>
      <Header v-if="isFromWeb()"/> 
    <section :class="isFromWeb()? 'pt-[90px]' : 'pt-[1px]'" class="bg-[#ffffff]   min-h-[500px] flex flex-col md:pt-0">
        <div class="py-8 pt-4 lg:pt-28 lg:pb-20">
        <div class="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
            <div class="flex flex-col w-full mx-auto max-w-[1200px]">
               <!-- <PrivacyEnglish/> -->
                <PrivacyEnglish v-if="$i18n.locale == 'en'" />
               <PrivacyHindi v-if="$i18n.locale == 'hi'" />
                <PrivacyBengali v-if="$i18n.locale == 'bn'" />
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
  name: 'PrivacyPolicyPage',

  computed:{
  },
   
  mounted() {
    this.onScrollHandler()
  },
  methods:{
    isFromWeb(){
      if(this.$route.query.fromMobileApp === null){
        console.log("yes from mobile")
        return false
      }else{
        console.log("no not from mobile")
        return true
      }
    },
    onScrollHandler(){
      if(process.client){
        window.onscroll = (ev)=>{
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            console.log('end_scroll')
            // window.FLUTTER_CHANNEL.postMessage('end_scroll');
            window.postMessage('end_scroll');
          }
        };
      }
    }
  },
  head() {  
    return {
      title: "Privacy Policy | gintaa India | gintaa Customer service",
      meta: [{
        hid: 'description',
        name: 'description',
        content: "This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit gintaa e-platform. Please read it carefully."
      }]
    }
  }
}
</script>