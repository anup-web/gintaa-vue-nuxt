<template>

  <div class="mx-auto pb-3 md:pb-8 lg:pb-10 mt-4 sm:mt-0 md:mt-0">
            <div class="">
              <Trigger @triggerIntersected="scrollEvent()" />
              <div class="sponsered-img max-w-[1130px] mx-auto relative px-0 lg:px-0 ">
                <div class="relative p-2 bg-gray-100" v-show="showBazarKolkataVideoBtn" @click="showBazarKolkataVideo()">
  
                  <a href="javascript:;" @click="logEventOnBtnClick(getBazarKolimgUrlName(),getBazarKolMobimgUrlName(),getBazarKolkataVideoUrl())"
                    class="absolute z-20 top-0 left-0 bottom-0 right-0 flex items-center justify-center ">
                    <img src="~/assets/images/play.png" alt="Play "
                      class="w-[80px] sm:w-[90px] md:w-[90px] lg:w-[134px] xl:w-[134px] 2xl:w-[134px] z-30" /></a>
                  <!-- <img :src="getAsconEraimgUrlLogo()" class="absolute z-20 top-5 w-[80px] lg:w-[120px] left-5"
                    alt="Ason era" /> -->
                  <img :src="getBazarKolimgUrlName()" class="mx-auto max-w-full hidden md:block" alt="Baazar Kolkata" />
                  <img :src="getBazarKolMobimgUrlName()" class="mx-auto max-w-full md:hidden" alt="Baazar Kolkata" />
                  
                  <div class="bg-black bg-opacity-20 absolute top-0 left-0 w-full z-10 h-full"></div>
  
                  <div
                    class="text-right text-[13px] py-1 px-2 z-20 bg-[#f7b900] text-[#000] font-medium absolute left-2 top-[8px] ">
                    <a href="https://www.baazarkolkata.com/" target="_blank">{{ $t('sponsor_txt') }}</a>
  
                  </div> 
                </div>
  
                 <div v-if="!showBazarKolkataVideoBtn" class="w-full max-w-[1130px]">
                   <div
                    class="text-right text-[13px] py-1 px-2 z-20 bg-[#f7b900] text-[#000] font-medium absolute right-2 bottom-10 ">
                    <a href="https://www.baazarkolkata.com/" target="_blank">{{ $t('sponsor_txt') }}</a>
  
                  </div> 
                  <iframe id="bazar-kolkata-video" class="video-responsive xl:h-[280px] 2xl:h-[340px]" width="100%" :src="getBazarKolkataVideoUrl()"
                    title="Bazar Kolkata " frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                </div> 
              </div>
            </div>
  
          </div>
  
  </template>
  
  
  <script lang="ts">
  import Vue from 'vue'
  import { mapState, mapGetters } from 'vuex'
  
  export default Vue.extend({
    name: 'BaazarKolkata',
  
    data() {
      return {
      showBazarKolkataVideoBtn :true,
      CDN_BASE_URL: this.$config.CDN_BASE_URL,
      sponsorlink: "https://www.baazarkolkata.com/",
      sponsoredBy: "Baazar Kolkata"
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
      showBazarKolkataVideo(){
      this.showBazarKolkataVideoBtn = !this.showBazarKolkataVideoBtn
      },
  
      getBazarKolimgUrlName() {
        let imageUrl = ''
        switch (this.$i18n.locale) {
          case 'en':
            imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/bazar-kolkata-thumbnai_870.webp`
            break;
          default:
            imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/bazar-kolkata-thumbnai_870.webp`
        }
  
        return imageUrl
       
      }, 
      
      getBazarKolMobimgUrlName() {
        
        let imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/Thumbnail-mobile_baazarkolkata.webp`
        return imageUrl
       
      },
      getBazarKolkataVideoUrl() {
        // return 'https://www.youtube.com/embed/03ymn7MFy3g?autoplay=1&unmute=1&rel=0'
        return `${this.CDN_BASE_URL}/web/web_new/sponsored/april-baazar-kolkata2.mp4`
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
            video_url: this.getBazarKolkataVideoUrl(),
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