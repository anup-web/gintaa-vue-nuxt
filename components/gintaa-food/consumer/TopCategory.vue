<template>
  
    <div  class="px-3 md:px-7 xl:px-16 mb-0 lg:mb-7 bg-[#ffffff] pt-4 pb-4 lg:pt-12 lg:pb-12 top-category-sec food-scroll food-category">

      
      <!-- <div  class="w-full rounded pb-3 bg-white shadow-md ">
                 <div class="flex flex-col px-6 py-4">
                      <div class="h-32 w-full bg-slate-200 rounded shimmerBG"></div>
                      <div class="flex item-center justify-center mt-4">
                           <div class="h-2 w-32 bg-slate-200 rounded shimmerBG mt-3"></div>
                      </div>
                 </div>
            </div> -->

            <!-- Seamer Loading Start  -->

            <div v-if="categoryList && categoryList.length === 0 && loading" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 gap-8 ">
            <div class="w-full rounded pb-3 bg-white shadow-md ">
                 <div class="flex flex-col px-6 py-4">
                      <div class="h-32 w-full bg-slate-200 rounded shimmerBG"></div>
                      <div class="flex item-center justify-center mt-4">
                           <div class="h-2 w-32 bg-slate-200 rounded shimmerBG mt-3"></div>
                      </div>
                 </div>
            </div>
            <div class="w-full rounded pb-3 bg-white shadow-md ">
                 <div class="flex flex-col px-6 py-4">
                      <div class="h-32 w-full bg-slate-200 rounded shimmerBG"></div>
                      <div class="flex item-center justify-center mt-4">
                           <div class="h-2 w-32 bg-slate-200 rounded shimmerBG mt-3"></div>
                      </div>
                 </div>
            </div>
            <div class="hidden md:block w-full rounded pb-3 bg-white shadow-md ">
                 <div class="flex flex-col px-6 py-4">
                      <div class="h-32 w-full bg-slate-200 rounded shimmerBG"></div>
                      <div class="flex item-center justify-center mt-4">
                           <div class="h-2 w-32 bg-slate-200 rounded shimmerBG mt-3"></div>
                      </div>
                 </div>
            </div>
            <div class="hidden md:block w-full rounded pb-3 bg-white shadow-md ">
                 <div class="flex flex-col px-6 py-4">
                      <div class="h-32 w-full bg-slate-200 rounded shimmerBG"></div>
                      <div class="flex item-center justify-center mt-4">
                           <div class="h-2 w-32 bg-slate-200 rounded shimmerBG mt-3"></div>
                      </div>
                 </div>
            </div>
            <div class=" hidden md:block w-full rounded pb-3 bg-white shadow-md ">
                 <div class="flex flex-col px-6 py-4">
                      <div class="h-32 w-full bg-slate-200 rounded shimmerBG"></div>
                      <div class="flex item-center justify-center mt-4">
                           <div class="h-2 w-32 bg-slate-200 rounded shimmerBG mt-3"></div>
                      </div>
                 </div>
            </div>
          </div>
          <!-- Seamer Loading End  -->
      <!-- #F8F9FF -->
      <div class="" v-else >
        <VueSlickCarousel class="vcustom-slider" v-bind="settings">
            
            <div v-for="(item, i) in categoryList" :key="i" :value="item.id" >
               <!-- @click="redirectToSearch(item)" -->
                <a  :href="localePath(`/gintaa-food/search?cid=${item.id}`)" class="cursor-pointer">
                  <div class="">
                <div class=" p-2">
                    <img v-if="item.imageURL" :src="item.imageURL" class="rounded-md mx-auto max-w-full"/>
                    <img v-else src="~/assets/images/food/food_category_no_images.jpg" class="rounded-md mx-auto max-w-full"/>
                </div>
              <div class="text-[11px] font-bold lg:text-sm md:font-medium text-gray-500 pt-1 lg:pt-3 text-center truncate">{{item.name}}</div></div>
                <!-- <div class="bg-white rounded-md ">
                <div class="w-auto sm:w-auto md:w-[150px] rounded-full mx-auto border border-[#8EC23C] p-2">
                    <img v-if="item.imageURL" :src="item.imageURL" class="rounded-full mx-auto max-w-full"/>
                    <img v-else src="~/assets/images/food/consumer/cat_biriyani.jpg" class="rounded-full mx-auto max-w-full"/>
                </div>
              <div class="text-sm font-medium text-gray-400 pt-3 text-center">{{item.name}}</div></div> -->
            </a>
            </div>
       
  
    
       </VueSlickCarousel>
      </div>
    </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import VueSlickCarousel from 'vue-slick-carousel'
  export default Vue.extend({
    name: 'TopCategory',
    components: { VueSlickCarousel },
    data () {
  return {
    loading:true,
    categoryList:[],
    settings: [{
           "arrows": true,
           "dots": false,
        //    "fade": true,
           "speed": 1000,
           "infinite": true,
           "initialSlide": 0,
           "slidesToShow": 7, 
           "slidesToScroll": 7, 
           "swipe": true, 
             "touchMove": true,
           "autoplay": false,
           "pauseOnHover": true,
         
        //    "centerPadding": "10px",
        //    "centerMode": true,
                   
           "responsive": [
           {
             "breakpoint": 1024,
             "settings": {
               "slidesToShow": 5, 
               "slidesToScroll":5,
                          
             }
           },
           {
             "breakpoint": 1023,
             "settings": {
               "slidesToShow": 4, 
               "slidesToScroll": 4,             
             }
           },          
           {
             "breakpoint": 800,
             "settings": {
               "slidesToShow": 4,
               "slidesToScroll": 4, 
               "swipe": true,
                //  "swipeToSlide": true,                         
             }
           },
           {
             "breakpoint": 480,
             "settings": {
               "slidesToShow": 4, 
               "slidesToScroll": 4,
               "rows": 2,
               "swipe": true,
                //  "swipeToSlide": true,
                //  "centerMode": true,
                //  "centerPadding": "5px",
                          
             }
           }
         ]
         }]
  }
},

mounted(){
    this.getMasterCategory()
   },
   methods: {
    async getMasterCategory() {

      this.categoryList = []
      try {
        const url = `/flisting/v1/category/CATEGORY`
        const data = await this.$axios.$get(url);
        console.log(" category data", data)
        this.categoryList = data.payload
        console.log(" this.categoryList", this.categoryList)
        this.loading = false
      } catch (error) {
        console.log(error);
        this.loading = false
     //   this.showLoader = false
      }
        

    },

    redirectToSearch(selectedMasterCat){
      this.$router.push(
                { 
                    path: (`/gintaa-food/search`), 
                    query: {
                        cid : selectedMasterCat.id
                    }
                })
    }
   
   }
  });
  </script>
  <style>
  .top-category-sec .vcustom-slider .slick-slide {
    padding-right: 40px!important;
  }
   
  @media only screen and (min-device-width: 0px) and (max-device-width: 767px){
   .food-category .vcustom-slider .slick-slide {
       padding-right: 10px!important;
   }  
 }
  
</style>