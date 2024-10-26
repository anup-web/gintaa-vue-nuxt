<template>

  <div class="mx-auto mt-5 lg:mt-0 lg:pb-10">
            <div class="">
              <Trigger @triggerIntersected="scrollEvent()" />
              <div class="sponsered-img max-w-[1130px] mx-auto relative px-0 lg:px-0 ">
                <div class="relative p-2 bg-gray-100" v-show="showMBaazarVideoBtn" @click="showMBaazarVideo()">
  
                  <a href="javascript:;" @click="logEventOnBtnClick(getMBazarimgUrlName(),getMBazarMobimgUrlName(),getmBazarVideoUrl())"
                    class="absolute z-20 top-0 left-0 bottom-0 right-0 flex items-center justify-center ">
                    <img src="~/assets/images/play.png" alt="Play "
                      class="w-[80px] sm:w-[90px] md:w-[90px] lg:w-[134px] xl:w-[134px] 2xl:w-[134px] z-30" /></a>
                  <!-- <img :src="getAsconEraimgUrlLogo()" class="absolute z-20 top-5 w-[80px] lg:w-[120px] left-5"
                    alt="Ason era" /> https://dev.cdn.gintaa.com/web/web_new/sponsored/baazar_kolkata.webp -->
                  <img :src="getMBazarimgUrlName()" class="mx-auto max-w-full hidden md:block" alt="Baazar Kolkata" />
                  <img :src="getMBazarMobimgUrlName()" class="mx-auto max-w-full md:hidden" alt="Baazar Kolkata" />
                  
                  <div class="bg-black bg-opacity-20 absolute top-0 left-0 w-full z-10 h-full"></div>
  
                   <div
                    class="text-right text-[15px] py-1 px-2 z-20 bg-[#f7b900] text-[#000] font-medium absolute left-5 top-3 ">
                    <a href="https://www.mbaazar.in/" target="_blank">{{ $t('sponsor_txt') }}</a>
  
                  </div> 
                </div>
  
                 <div v-if="!showMBaazarVideoBtn" class="w-full max-w-[1130px] bg-black">
                  <div
                class="text-right text-[15px] py-1 px-2 z-20 bg-[#f7b900] text-[#000] font-medium absolute right-2 bottom-10 ">
                <a href="https://www.mbaazar.in/" target="_blank">{{ $t('sponsor_txt') }}</a>

              </div> 
                
                  <!-- <iframe id="ascon-era-video" class="video-responsive h-[340px]" width="100%" :src="getAsconVideoUrl()"
                    title="Ascon era" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe> -->

                  <video autoplay="true"
                  
                  :src="getmBazarVideoUrl()"
                  class="video-responsive xl:h-[280px] 2xl:h-[340px]" width="100%"
                  controls
                /> 
                </div> 
              </div>
            </div>
  
          </div>
  
  </template>
  
  
  <script lang="ts">
 import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
name: 'MBaazar',

data() {
  return {
  showMBaazarVideoBtn :true,
  CDN_BASE_URL: this.$config.CDN_BASE_URL,
  sponsorlink: "https://www.mbaazar.in/",
sponsoredBy: "MBaazar"
}
},


computed: {
  ...mapState({
    authUser: state => state.authUser
  }),
  ...mapGetters({
    isLoggedIn: 'isLoggedIn'
  })
},

methods:{
  showMBaazarVideo(){
  this.showMBaazarVideoBtn = !this.showMBaazarVideoBtn
  
  },
 

  getMBazarimgUrlName() {
    let imageUrl = ''
    switch (this.$i18n.locale) {
      case 'en':
        imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/m-bajar-thumbnails.webp`
        break;
      default:
        imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/m-bajar-thumbnails.webp`
    }

    return imageUrl
   
  },

      
  getMBazarMobimgUrlName() {
    
    let imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/mbazar-Thumbnail-mobile.webp`
    return imageUrl
   
  },
  getmBazarVideoUrl() {
    return `${this.CDN_BASE_URL}/web/web_new/sponsored/mbaazar_Landscape.mp4`
  },
  logEvent(analyticsdata: any) {

try {
const analyticsData = {
  channel_id: 'WEB',
  user_id: analyticsdata?.user_id,
  image_url: analyticsdata?.imageUrl ,
  video_url: analyticsdata?.videoUrl,
  sponsor_link: analyticsdata?.sponsor_link,
  sponsored_by: analyticsdata?.sponsored_by,
};
this.$fire.analytics.logEvent('gintaa_home_section_clicked', analyticsData)
console.log('Gintaa gintaa_home_section_clicked event log successfully', analyticsData);
} catch (e) {
console.log('Gintaa analytics error:', e);
}
},
logEventOnBtnClick(imageUrlName, mobImageUrlName, videoUrl) {
    
    if (imageUrlName || mobImageUrlName) {
     
      const analyticsdata = {
        channel_id: 'WEB',
        user_id: this.authUser ? this.authUser?.uid : null,
        imageUrl: imageUrlName?imageUrlName:mobImageUrlName,
        videoUrl: videoUrl,
        sponsor_link: this.sponsorlink,
        sponsored_by: this.sponsoredBy,
      };
      this.logEvent(analyticsdata)
    }
  },

  scrollEvent()
  {
     try {
      const analyticsData = {
        channel_id: 'WEB',
        user_id: this.authUser ? this.authUser?.uid : null,
        sponsor_link: this.sponsorlink,
        video_url: this.getmBazarVideoUrl(),
        sponsored_by: this.sponsoredBy,
      };
      this.$fire.analytics.logEvent('gintaa_ad_impression_banner', analyticsData)
      console.log('gintaa_ad_impression_banner event log successfully', analyticsData);
    } catch (e) {
      console.log('Gintaa analytics error:', e);
    }
  },
}

});

  </script>