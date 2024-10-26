<template>
   <div class="mx-auto mb-0 lg:mb-14 mt-0 sm:mt-8 md:mt-8 lg:mt-0 xl:mt-0 2xl:mt-0">
      <div class="text-center mb-3 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 ">
         <h3
            class="section-title text-gray-600  text-base md:text-2xl  font-bold px-5 relative mb-0 sm:mb-2 md:mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-4 after:-right-14">
            <!-- <span class="">Popular Brands </span> -->
            <span class="">{{title}}</span>
         </h3>
         <!-- <span class="block text-gray-400 text-sm font-normal">Exclusive items</span> -->
         <span class="hidden md:block text-gray-400 text-sm font-normal">{{description}}</span>
      </div>
      <div v-if="brandList && brandList.length" class="w-full relative top-category-sec popular-brand-scroll tpc-custom">
         <VueSlickCarousel class="vcustom-slider" v-bind="settings">
            <a v-for="(item, index) in brandList" :key="item.title+index" :href="item.redirect_url" class="group flex justify-center text-center relative overflow-hidden rounded-md">
               <span>
                  <img 
                     :src="item.background_image_url"
                     :alt="item.title"
                     class="rounded-md object-cover transform transition-transform ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125" />
               </span>
               <div
                  class="absolute top-0 left-0 bg-black w-full h-full opacity-10 transition-opacity duration-500 group-hover:opacity-40">
               </div>
               <div class="absolute top-0 left-0 h-full w-full flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-8 xl:p-8 2xl:p-8">
                  <img 
                     :src="item.logo_url"
                     :alt="item.title"
                     class="flex-shrink-0 max-w-full">
               </div>
            </a>
         </VueSlickCarousel>

      </div>
   </div>
</template>

<script>
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
export default Vue.extend({
  name: 'popularBrand',
  components: { VueSlickCarousel },
  props: ["popularBrandData"],
  data () {
    return {
      title: null,
      description: null,
      brandList: [],
      settings: [{
             "arrows": true,
             "dots": false,
             "speed": 500,
             "infinite": true,
             "initialSlide": 0,
             "slidesToShow": 5, 
             "slidesToScroll": 5, 
             "swipe": true,
             "responsive": [
             {
               "breakpoint": 1024,
               "settings": {
                 "slidesToShow": 3, 
                 "swipe": true,             
               }
             },
             {
               "breakpoint": 1023,
               "settings": {
                 "slidesToShow": 3, 
                 "swipe": true,             
               }
             },          
             {
               "breakpoint": 800,
               "settings": {
                 "slidesToShow": 3,
                 "slidesToScroll": 3, 
                 "swipe": true,                        
               }
             },
             {
               "breakpoint": 480,
               "settings": {
                 "slidesToShow": 3, 
                 "centerMode": true,
                 "centerPadding": "20px",
                   "swipe": true,             
               }
             }
           ]
           }]
    }
  },
  mounted(){
      // console.log('popularBrandData:', this.popularBrandData )
      if(this.popularBrandData) {
         this.title        = this.popularBrandData.title
         this.description  = this.popularBrandData.description
         this.brandList    = this.popularBrandData.payload
      }
  },
  methods: {
   
  }
})

</script>
<style scoped>
@media only screen and (max-width: 600px) {
   .recentlisting .mobile-last:nth-child(5){
   display: none;

}

}
.recentlisting .mobile-last:nth-child(5){
   border-right: 0 !important;

}
.top-category-sec .vcustom-slider .slick-next{
  top:30% !important;
}
</style>