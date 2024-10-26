<template>
    <section class="pt-[102px] lg:pt-[92px]   mb-0 relative bg-[#ffffff] px-3 mt-2 md:mt-0 xl:px-16">
        <VueSlickCarousel class="vcustom-slider" v-bind="settings">
          <div 
            v-for="(banneritem, index) in food_top_banner_images"
            :key="'banner_'+index" > 
            <a :target="banneritem.target ? banneritem.target : ''" :href="banneritem.link ? banneritem.link : 'javascript:;'" 
              v-on:click="clickOnImage(banneritem, index)">
              <img :src="getTopBannerImageUrl(banneritem.web)" :alt="banneritem.alt"   class="rounded-lg"      /> 
              <!-- <div>{{ index }}</div> -->
            </a>
            <!-- <img :src="getTopBannerImageUrl(banner.mob, 'mobile')" :alt="banner.alt" class="rounded-lg"/> -->
          
          </div>
          <!-- <div> <img src="https://dev.cdn.gintaa.com/web/web_new/top-banners/food/food_banner_two.webp" class="rounded-lg"/></div>
            <div> <img src="https://dev.cdn.gintaa.com/web/web_new/top-banners/food/food_banner_seven.webp" class="rounded-lg"/></div>
            <div> <img src="https://dev.cdn.gintaa.com/web/web_new/top-banners/food/food_banner_three.webp" class="rounded-lg"/></div>
         <div> <img src="https://dev.cdn.gintaa.com/web/web_new/top-banners/food/food_banner_four.webp" class="rounded-lg"/></div> -->
        </VueSlickCarousel>

        <GintaaFoodAtomsLogoutConfirmation v-if="showLogoutConfirmationPopup" @cancelLogout="cancelLogout" />
       
    </section>
    
</template>
<script lang="ts">
  import Vue from 'vue'
  import { mapState, mapGetters } from 'vuex'
  import VueSlickCarousel from 'vue-slick-carousel'
  export default Vue.extend({
    name: 'TopBanner',
    components: { VueSlickCarousel },
    data () {
      return {
        showLogoutConfirmationPopup: false,
        settings: [{
              "arrows": false,
              "dots": true,
              // "fade": true,
              "speed": 1000,
            //    "infinite": true,
              "initialSlide": 0,
              "slidesToShow": 1, 
              "slidesToScroll": 1, 
              "swipe": true, 
              "touchMove": true,
              "autoplay": true,
              "pauseOnHover": true,
            
            //    "centerPadding": "10px",
            //    "centerMode": true,
                      
              "responsive": [
              {
                "breakpoint": 1024,
                "settings": {
                  "slidesToShow": 3, 
                  "slidesToScroll":3,
                              
                }
              },
              {
                "breakpoint": 1023,
                "settings": {
                  "slidesToShow":1, 
                  "slidesToScroll": 1,             
                }
              },          
              {
                "breakpoint": 800,
                "settings": {
                  "slidesToShow": 1,
                  "slidesToScroll": 1, 
                  "swipe": true, 
                "touchMove": true,                     
                }
              },
              {
                "breakpoint": 480,
                "settings": {
                  "slidesToShow": 1, 
                  "slidesToScroll": 1,
                  "swipe": true, 
                    "touchMove": true,
                    //  "centerMode": true,
                    //  "centerPadding": "5px",

                              
                }
              }
            ]
          }],
          
          CDN_BASE_URL: this.$config.CDN_BASE_URL,
          remotConfigSuffix: this.$config.remotConfigSuffix,
          gcpSubFolder: this.$config.gcpSubFolder,
          food_top_banner_images: [  
            {web:'food_banner1.webp', mob:'food_banner1.webp', type:null, alt: 'gintaa food', link:'gintaa-food/search?searchText=Chinese'},
            {web:'food_banner_two.webp', mob:'food_banner_two.webp', type:null, alt: 'gintaa food', link:null},
            {web:'guarantee.webp', mob:'guarantee.webp', type:null, alt: 'gintaa food', link:'legal/gintaa-food/lowest-menu-price', target:'blank'},
            {web:'restaurant_banner.webp', mob:'restaurant_banner.webp', type:'register', alt: 'gintaa Restaurants', link:null},
            // {web:'food_banner_seven.webp', mob:'food_banner_seven.webp', type:null, alt: 'gintaa food', link:null},
            {web:'food_banner3.webp', mob:'food_banner3.webp', type:null, alt: 'gintaa food', link:'gintaa-food/search?searchText=Biriyani'},
            // {web:'food_banner_three.webp', mob:'food_banner_three.webp', alt: 'food_banner_three'},
            {web:'food_banner_four.webp', mob:'food_banner_four.webp', type:null, alt: 'gintaa food', link:'gintaa-food/search?searchText=Chicken'}
          ]
          
      }
    },
    computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapState({
      firstName: (state) => {
        return state.authUser.displayName ? state.authUser.displayName.replace(/ .*/, '') : ''
      }
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
    mounted() {

    },
    methods: {

      getIndexImageUrl(indexVal){
       console.log("indexVal",indexVal)
      },

      clickOnImage(bannerItem: any, index: number){
         console.log("bannerItem",bannerItem)
         if(bannerItem.type === 'register'){
          if(this.authUser){
          this.showLogoutConfirmationPopup = true
          }else{
            this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant`)})
          }
         }
         console.log("index",index)
      },

      cancelLogout(){
        this.showLogoutConfirmationPopup = false
      },
      
      getTopBannerImageUrl(imageName: string, channelId = 'WEB') {
        if (imageName) {
          // const localLangPath = this.$i18n.locale === 'hi' ? 'Hindi/' : '';
          const localLangPath = this.gcpSubFolder[this.$i18n.locale] ? this.gcpSubFolder[this.$i18n.locale] : '';
          const channelPath = channelId === 'WEB' ? '' : 'mobile/'
          const basePath = this.CDN_BASE_URL + '/web/web_new/top-banners/food/';
          return basePath + channelPath + localLangPath + imageName;
        }
      },
    }
  });
  </script>
  <style>
  .slick-dots{
    bottom:25px !important;
  }
</style>