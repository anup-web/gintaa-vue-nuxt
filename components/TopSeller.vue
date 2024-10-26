<template>
  <div class="testimonial-sliderh" v-if="topSellerList && topSellerList.length > 0">
            
    <div class="mx-auto max-w-[1920px]  md:px-8 2xl:px-16 pt-5 lg:pt-0 pb-5 lg:pb-14 sectionp-25">
      <div class="w-full relative independence-head htitle-24 top-category-sec">
        <div class="text-center mb-4 md:mb-5 lg:mb-8 2xl:mb-8">
          <h3 class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
            <a :href="localePath('/top-seller-list')" class="text-gray-600"><span> {{ $t('topseller') }}  </span></a>
          </h3>
          
        </div>

        <div class="w-full" >
          <a :href="localePath('/top-seller-list')" class="absolute text-sm right-0 top-[45px] z-40  hidden lg:block bg-firoza text-white px-3 py-2 rounded-sm">
       {{ $t('viewAllProducts') }}
      </a>
        <div class="px-4 md:px-0 tpc-custom">
        <VueSlickCarousel class="vcustom-slider" v-bind="settings">
          
          <div v-for="(selllerDet,index) in topSellerList" :key="index" class="border border-gray-200 rounded-lg bg-white px-2 py-4 shadow-sm ">
          
            <TopSellerCard :selllerDet="selllerDet" />
            
             </div>
      </VueSlickCarousel>
    </div>
    </div>

    </div>

      </div>

     <div class="flex justify-center">
      <a :href="localePath('/top-seller-list')" class="min-w-[150px] flex justify-center items-center border border-firoza bg-transparent py-1 px-8 rounded  text-firoza font-medium text-base hover:bg-firoza transition hover:text-white h-12  md:hidden mt-0 mb-0 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4">
       {{ $t('viewAllProducts') }}
      </a>
    </div> 
        </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import VueSlickCarousel from 'vue-slick-carousel'
  import { mapState, mapGetters } from 'vuex'
  export default Vue.extend({
    name: 'TopSeller',
    components: { VueSlickCarousel },
    computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
    data () {
  return {
        
    settings: [{
           "arrows": true,
           "dots": false,
           "speed": 500,
           "infinite": true,
           "initialSlide": 0,
           "slidesToShow": 6, 
           "slidesToScroll": 6, 
           "touchMove": true,
             "swipe": true,
           "responsive": [
           {
             "breakpoint": 1024,
             "settings": {
               "slidesToShow": 6, 
               "slidesToScroll":6,             
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
               "touchMove": true,
             "swipe": true,                        
             }
           },
           {
             "breakpoint": 480,
             "settings": {
               "slidesToShow": 2, 
               "slidesToScroll": 2,
               "touchMove": true,
             "swipe": true,             
             }
           }
         ]
         }],
         topSellerList : [],
         btnloading : false,
         indexValue :null
  }
},
beforeMount() {
  this.getTopsellerList()
},
methods: {
  async getTopsellerList(){
    try {
                
      let url = `/statistics/v1/statistics/offer/top-sellers`;
      const data = await this.$axios.$get(url);
      if (data.payload && data.payload.length > 0 ) {
        this.topSellerList = data.payload
        
      } else {

      }
      
      } catch (error) {
      
      console.log(error);
      }
  },


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
  </style>