<template>
  <div class="testimonial-sliderh">
            
    <div class="mx-auto max-w-[1920px]  md:px-8 2xl:px-16 pt-5 lg:pt-14 pb-5 lg:pb-14 sectionp-25">
      <div class="w-full relative independence-head htitle-24 top-category-sec">
        <div class="text-center mb-4 md:mb-5 lg:mb-8 2xl:mb-8">
          <h3 class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
            <a href="#" class="text-gray-600"><span> Top Seller </span></a>
          </h3>
          
        </div>

        <div class="w-full">
        <div class="px-4 md:px-0 ">
        <VueSlickCarousel class="vcustom-slider" v-bind="settings">
          
                       <!-- Start Video No 1 -->

          <div class="video relative border-independence">

<div class="cursor-pointer relative" v-show="showFirstVideoClickbtn" @click="showFirstVideo()">

  <img :src="getFisrtimgUrlName()" class="max-w-full" alt="first item" />
  <a href="javascript:;"
    class="absolute z-20 top-0 left-0 bottom-0 right-0 flex items-center justify-center ">
    <img src="~/assets/images/play.png"
      class="w-[80px] sm:w-[80px] md:w-[80px] lg:w-[100px] xl:w-[100px] 2xl:w-[100px]" alt="play" /></a>

</div>
<iframe id="gintaa-tutorial-video" v-if="!showFirstVideoClickbtn" class="video-responsive max-h-[503px]"
  width="100%" height="100%" :src="getFirstVideoUrl()" title="Youtube Video" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>

</div>

<!-- End Video No 1 -->


<!-- Start Video No 2 -->

<div class="video relative border-independence">

<div class="cursor-pointer relative" v-show="showClickbtn" @click="showVideo()">

  <img :src="getimgUrlName()" class="max-w-full" />
  <a href="javascript:;"
    class="absolute z-20 top-0 left-0 bottom-0 right-0 flex items-center justify-center ">
    <img src="~/assets/images/play.png"
      class="w-[80px] sm:w-[80px] md:w-[80px] lg:w-[100px] xl:w-[100px] 2xl:w-[100px]" alt="play" /></a>

</div>
<iframe id="gintaa-tutorial-video" v-if="!showClickbtn" class="video-responsive max-h-[503px]" width="100%"
  height="100%" :src="getVideoUrl()" title="Youtube Video" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>

</div>

<!-- End Video No 2 -->

<!-- Start Video No 3 -->
<div class="video relative border-independence">

<div class="cursor-pointer relative" v-show="showThirdClickbtn" @click="showThirdVideo()">

  <img :src="getThirdimgUrlName()" class="max-w-full" alt="third item" />
  <a href="javascript:;"
    class="absolute z-20 top-0 left-0 bottom-0 right-0 flex items-center justify-center ">
    <img src="~/assets/images/play.png"
      class="w-[80px] sm:w-[80px] md:w-[80px] lg:w-[100px] xl:w-[100px] 2xl:w-[100px]" alt="play" /></a>

</div>
<iframe id="gintaa-tutorial-video" v-if="!showThirdClickbtn" class="video-responsive max-h-[503px]"
  width="100%" height="100%" :src="getThirdVideoUrl()" title="Youtube Video" frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>

</div>


      </VueSlickCarousel>
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
    name: 'TutorialVideoMobile',
    components: { VueSlickCarousel },
    data () {
  return {
        
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
               "slidesToShow": 2,
               "slidesToScroll": 2, 
                 "swipeToSlide": true,                         
             }
           },
           {
             "breakpoint": 480,
             "settings": {
               "slidesToShow": 1, 
               "slidesToScroll": 1,
                 "swipeToSlide": true,             
             }
           }
         ]
         }]
  }
},
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
  </style>