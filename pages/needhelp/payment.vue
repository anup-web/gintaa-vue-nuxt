<template>
  <div>
    <Header v-if="isFromWeb()" /> 
    <section :class="isFromWeb()? 'pt-[90px]' : 'pt-[5px]'" class="bg-[#ffffff]   min-h-[500px] flex flex-col md:pt-0">
        <div class="py-8 pt-4 lg:pt-28 lg:pb-20">
        <div class="mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10">
            <div class="flex flex-col w-full mx-auto max-w-[1200px]">
               <!-- <PaymentEnglish/> -->
               <PaymentEnglish v-if="$i18n.locale == 'en'" />
               <PaymentHindi v-if="$i18n.locale == 'hi'" />
               <PaymentBengali v-if="$i18n.locale == 'bn'" />
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
  name: 'PaymentPage',
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
      title: "gintaa coin | gintaa India",
      meta: [{
        hid: 'description',
        name: 'description',
        content: "gintaa coin is a reusable digital currency that users can earn in their gintaa Wallet while using the gintaa app or the platform. Read more"
      }]
    }
  }
}
</script>