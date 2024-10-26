<template>
  <div >
    <Header v-if="isFromWeb()" /> 
    <section :class="isFromWeb()? 'pt-[90px]' : 'pt-[1px]'" class="bg-[#F6F8FC] md:bg-[#ffffff]   min-h-[500px] flex flex-col pt-[90px] md:pt-0">
        <div class="py-8 lg:pt-28 lg:pb-20">
        <div class="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10 overflow-hidden">
            <div class="flex flex-col w-full mx-auto max-w-[1200px]">

               <!-- <HowWorksEnglish/> -->
               <HowWorksEnglish v-if="$i18n.locale == 'en'" />
               <HowWorksHindi v-if="$i18n.locale == 'hi'" />
                <HowWorksBengali v-if="$i18n.locale == 'bn'" />
            </div>
        </div>
        </div>
    </section>
   <Footer  v-if="isFromWeb()"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default{
  name: 'HowGintaaWorksPage',
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
      title: "What is gintaa? How it works? | Step-by-step guide to buy, sell or exchange on gintaa",
      meta: [{
        hid: 'description',
        name: 'description',
        content: "gintaa is India’s first 3-in-1 app to Buy-Sell-Exchange. Steps to know how to buy, sell, exchange and use gintaa coins and its other benefits. Read Now!"
      }]
    }
  }
}
</script>