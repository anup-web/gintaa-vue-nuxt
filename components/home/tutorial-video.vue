<template>
    <div class="testimonial-sliderh">
              
      <div class="sectionp-25">
        <div class="w-full relative independence-head htitle-24 top-category-sec tutorial-video-sec">
          <div class="text-center mb-3 md:mb-5 lg:mb-8 2xl:mb-8">
            <h3 class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-0 sm:mb-2 md:mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
              <a href="#" class="text-gray-600"><span> {{ $t("WatchMeNow") }} </span></a>
            </h3>
            
          </div>
  
          <div class="w-full">
          <div class="px-0 md:px-0 " v-if="tutorialVideoList.length">
          <VueSlickCarousel class="vcustom-slider" v-bind="settings">
            
            <!-- <div class="mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"> -->

                <!-- Start Video No 1 -->
                <div  v-for="(item, index) in tutorialVideoList" :key="index" class="video relative border-independence">
                <div class="cursor-pointer relative"  @click="playVideoUrl(item)">
                    <img :src="item.web_thumbnail_url" class="max-w-full web-view" alt="first item"  />
                    <img :src="item.mob_thumbnail_url" class="max-w-full mob-view" alt="first item"  />
                    
                    <a href="javascript:;"
                    class="absolute z-20 top-0 left-0 bottom-0 right-0 flex items-center justify-center ">
                    <img src="~/assets/images/play.png"
                        class="w-[50px] sm:w-[50px] md:w-[80px] lg:w-[100px] xl:w-[100px] 2xl:w-[100px]" alt="play" /></a>
                        
                </div>
                <div class="text-[10px] text-gray-500 font-medium mt-1 mob-view-title">{{ item.title }}</div>
                </div>
        </VueSlickCarousel>
      </div>
      </div>
  
      </div>
  
        </div>
        
        <div v-if="showVideoPopup" class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div class="relative transform overflow-hidden rounded-lg bg-white px-2 pt-5 pb-2 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-2">
        <div class="absolute top-0 right-0 pt-1 pr-1 ">
          <button @click="closeVideoPopup" type="button" class="rounded-md bg-white text-gray-400">
            <span class="sr-only">Close</span>
            
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="w-full mt-3 h-[300px] sm:h-[300px] sm:mt-6 md:h-[420px] md:mt-6">          
             <iframe id="gintaa-tutorial-video"  class="video-responsive max-h-[503px]"
                    width="100%" height="100%" :src=videoUrl title="Youtube Video" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>            
        </div>
       
      </div>
    </div>
  </div>
</div>
          </div>

          
  </template>
  <script lang="ts">
    import Vue from 'vue'
    import VueSlickCarousel from 'vue-slick-carousel'
    export default Vue.extend({
      name: 'TutorialVideo',
      components: { VueSlickCarousel },
      props: ["tutorialVideoList"],
      data () {
    return {
      showVideoPopup:false,
      tutorialVideo: [],
      videoUrl:'',
      settings: [{
             "arrows": true,
             "dots": false,
             "speed": 500,
             "infinite": true,
             "initialSlide": 0,
             "slidesToShow": 3, 
             "slidesToScroll": 3, 
             "swipeToSlide": true,
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
                 "slidesToShow": 3, 
                 "slidesToScroll": 3,             
               }
             },          
             {
               "breakpoint": 800,
               "settings": {
                 "slidesToShow": 3,
                 "slidesToScroll": 3, 
                   "swipeToSlide": true,                         
               }
             },
             {
               "breakpoint": 480,
               "settings": {
                 "slidesToShow": 3, 
                 "slidesToScroll": 3,
                   "swipeToSlide": true,             
               }
             }
           ]
           }]
    } 
  },
  mounted(){
   
  },
  beforeMount(){
   // getFisrtimgUrlName
  },

  methods :{

    playVideoUrl(videoDet:any){
    this.videoUrl = videoDet?.video_url
    this.showVideoPopup = true
    },

    closeVideoPopup(){
      this.showVideoPopup = false
      this.videoUrl = ''
   
    }

    }
    });
    </script>
    <<style scoped>
    .test-content{
      background-color: #fff;
      position: relative;
      /* -webkit-box-shadow: 0 20px 20px 0 rgb(0 11 40 / 8%);
    box-shadow: 0 20px 20px 0 rgb(0 11 40 / 8%); */
    }
    /* .test-content::before {
    position: absolute;
    width: 0;
    height: 0;
    content: "";
    border-top: 45px solid #ffffff;
    border-right: 10px solid transparent;
    border-bottom: 0;
    border-left: 50px solid transparent;
    bottom: -24px;
    left: 20px;
    /* box-shadow: 0 20px 20px 0 rgb(0 11 40 / 8%); */
  
  .circle-bg {
  background-color: #ffffff;
    -webkit-box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);
    box-shadow: 0 0 20px 3px rgb(0 0 0 / 5%);
  }

  @media only screen and (min-device-width: 0px) and (max-device-width: 767px){
       .web-view { display: none!important; }
  }
  @media only screen and (min-device-width: 768px) and (max-device-width: 2000px){
    .mob-view { display: none!important; }  
    .mob-view-title { display: none!important; } 
  }
    </style>