<template>

  <div class="mx-auto mt-5 lg:mt-0 pb-5 lg:pb-14 ">
            <div class="">
              <Trigger @triggerIntersected="scrollEvent()" />
              <div class="sponsered-img max-w-[1130px] mx-auto relative px-0 lg:px-0 ">
                <div class="relative p-2 bg-gray-100" v-show="showAviationVideoBtn" @click="showAviationVideo()">
  
                  <a href="javascript:;" @click="logEventOnBtnClick(getAviationimgUrlName(),getAviationMobimgUrlName(),getAviationVideoUrl())"
                    class="absolute z-20 top-0 left-0 bottom-0 right-0 flex items-center justify-center ">
                    <img src="~/assets/images/play.png" alt="Play "
                      class="w-[80px] sm:w-[90px] md:w-[90px] lg:w-[134px] xl:w-[134px] 2xl:w-[134px] z-30" /></a>
                  <!-- <img :src="getAsconEraimgUrlLogo()" class="absolute z-20 top-5 w-[80px] lg:w-[120px] left-5"
                    alt="Ason era" /> https://dev.cdn.gintaa.com/web/web_new/sponsored/baazar_kolkata.webp -->
                  <img :src="getAviationimgUrlName()" class="mx-auto max-w-full hidden md:block" alt="Jt Aviation College" />
                  <img :src="getAviationMobimgUrlName()" class="mx-auto max-w-full md:hidden" alt="Jt Aviation College" />
                  
                  <div class="bg-black bg-opacity-20 absolute top-0 left-0 w-full z-10 h-full"></div>
  
                   <div
                    class="text-right text-[15px] py-1 px-2 z-20 bg-[#f7b900] text-[#000] font-medium absolute right-2 top-3 ">
                    <a href="https://jtaviation.in/" target="_blank">{{ $t('sponsor_txt') }}</a>
  
                  </div> 
                </div>
  
                 <div v-if="!showAviationVideoBtn" class="w-full max-w-[1130px] bg-black">
                  <div
                class="text-right text-[15px] py-1 px-2 z-20 bg-[#f7b900] text-[#000] font-medium absolute right-2 bottom-10 ">
                <a href="https://jtaviation.in/" target="_blank">{{ $t('sponsor_txt') }}</a>

              </div> 
                
                  <!-- <iframe id="ascon-era-video" class="video-responsive h-[340px]" width="100%" :src="getAsconVideoUrl()"
                    title="Ascon era" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe> -->

                  <video autoplay="true"
                  
                  :src="getAviationVideoUrl()"
                  class="video-responsive h-[340px]" width="100%"
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
name: 'Aviation',

data() {
  return {
  showAviationVideoBtn :true,
  CDN_BASE_URL: this.$config.CDN_BASE_URL,
  sponsorlink: "https://jtaviation.in/",
  sponsoredBy: "JT Aviation"
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
  showAviationVideo(){
  this.showAviationVideoBtn = !this.showAviationVideoBtn
  
  },
 

  getAviationimgUrlName() {
    let imageUrl = ''
    switch (this.$i18n.locale) {
      case 'en':
        imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/jt-aveation-videothumb.jpg`
        break;
      default:
        imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/jt-aveation-videothumb.jpg`
    }

    return imageUrl
   
  },

      
  getAviationMobimgUrlName() {
    
    let imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/jtthumb-mobile.webp`
    return imageUrl
   
  },
  getAviationVideoUrl() {
    return `${this.CDN_BASE_URL}/web/web_new/sponsored/JT_Aviation_College_ABP_Video.mp4`
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
          video_url: this.getAviationVideoUrl(),
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