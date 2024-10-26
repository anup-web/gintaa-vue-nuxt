<template>
    <div class="testimonial-sliderh" v-if="topSellerList && topSellerList.length > 0">
              
      <div class="mx-auto max-w-[1920px]  md:px-8 2xl:px-16 pt-0 lg:pt-0 pb-2 lg:pb-2 sectionp-25">
        <div class="w-full relative htitle-24 top-category-sec ">
           <div class="text-center mb-4 md:mb-5 lg:mb-8 2xl:mb-8 pt-4 independence-head">
            <h3 class="section-title text-[14px] md:text-[20px] uppercase font-bold px-5 relative mb-2 inline-block">
              <a @click="getViewAllUrl(section_title,section_description)"  class=" cursor-pointer text-gray-700"><span> {{ section_title }}  </span></a>
            </h3>
            <span class="hidden lg:block text-gray-600 text-sm font-medium">{{section_description}}</span>
          </div> 
  
          <div class="w-full" >
            <a v-if="topSellerList && topSellerList.length > 4" @click="getViewAllUrl(section_title,section_description)" class=" cursor-pointer absolute text-sm right-0 top-[45px] z-40  hidden lg:block bg-firoza text-white px-3 py-2 rounded-sm">
              {{ $t('viewAllProducts') }}
            </a>
          <div class="px-4 md:px-0 tpc-custom">
               <!-- <div class="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
                  
                <div class="relative px-7">
                     <div class="bg-white shadow-sm ">
                      <div class="flex items-center justify-center relative group bg-green h-[40px]">
                    <span class="text-sm text-center text-white font-medium truncate">Bagbazar Market testing seller</span> 
                    <div class="absolute top-[20px] flex flex-col items-center hidden w-full group-hover:block ">
                      <div class="rounded text-left z-10 px-2 py-1 bg-gray-100 shadow-lg absolute ">
                        <span class="text-sm text-centewhite font-medium ">Bagbazar Market testing seller</span>                           
                      </div> 
                    </div>
      
                   </div>
                   
                   <div><img src="~/assets/images/dec-home/shop-top.png" alt="image" class="w-full absolute top-[39px] left-[0px]" /></div>

                    <div class="px-3 py-4 pt-20">
                      <a href="/my-profile" class="cursor-pointer">
                        <div class="flex items-center justify-center">
                          <img src="https://dev.cdn.gintaa.com/users/q00HIDbr9KeRjQopN8z8koVLff73/avatar/6PIa37aqxdndtcvHhkVPFc_ui.jpg" alt="image" class="w-28 h-28 rounded-full border-[6px] border-[#D5F1AB]"></div></a>
                         
                          <div class="flex items-center justify-between mt-6">
                          <div class="flex flex-col">
                            <div class="text-base font-medium text-gray-900 text-center">165</div>
                            <div class="text-sm text-gray-900 text-center">Followers</div>
                          </div>
                          <div class="flex flex-col">
                            <div class="text-base font-medium text-gray-900 text-center">4.3</div>
                            <div class="text-sm text-gray-900 text-center">Ratings</div>
                          </div>
                          <div class="flex flex-col">
                            <div class="text-base font-medium text-gray-900 text-center">48</div>
                            <div class="text-sm text-gray-900 text-center">Listings</div>
                          </div>
                        </div>
                         
                         
                         
                          <div class="flex items-center justify-center mt-4 px-4">
                            <a class="cursor-pointer text-center flex items-center justify-center py-2 w-full text-sm px-4 text-white border mb-0 text-firoza border-firoza bg-tranparent"><span>Follow</span>
                             </a>
                          </div>


                    </div>



                     </div>
                     </div>


               </div> -->

          <VueSlickCarousel class="vcustom-slider hidden" v-bind="settings">
            
            <div v-for="(selllerDet,index) in topSellerList" :key="index" >
              <div @click="logeventOnBtnClick(selllerDet.uid)">
               <MarketSellerCard :selllerDet="selllerDet" />
              </div>
               </div>
        </VueSlickCarousel>
      </div>
      </div>
  
      </div>
  
        </div>
  
     <div class="flex justify-center">
        <a @click="getViewAllUrl(section_title,section_description)" class="min-w-[95px] cursor-pointer flex justify-center items-center border border-firoza bg-transparent py-1 px-2 rounded  text-firoza font-medium text-sm hover:bg-firoza transition hover:text-white h-9  md:hidden mt-3 mb-0 sm:mb-4 md:mb-4 md:mt-0 lg:mb-4 xl:mb-4 2xl:mb-4">
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
      name: 'SellerInMarketPlace',
      props: ["section_title", "section_description", "market_name", "item_show_number"],
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
        CDN_BASE_URL: this.$config.CDN_BASE_URL,
        // market_title:'Bagbazar Market',
        // market_name:'Bagbazar',    
        settings: [{
              "arrows": true,
              "dots": false,
              "touchMove": true,
              "swipe": true,
              "speed": 500,
              "infinite": true,
              "initialSlide": 0,
              "slidesToShow": 5, 
              "slidesToScroll": 5,               
              "responsive": [ 
              {
                "breakpoint": 1536,
                "settings": {
                  "slidesToShow": 5, 
                  "slidesToScroll":5,             
                }
              },
              {
                "breakpoint": 1400,
                "settings": {
                  "slidesToShow": 4, 
                  "slidesToScroll":4,             
                }
              },     
              {
                "breakpoint": 1024,
                "settings": {
                  "slidesToShow": 4, 
                  "slidesToScroll":4,             
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
                  "touchMove": true,
                   "swipe": true,                       
                }
              },
              {
                "breakpoint": 550,
                "settings": {
                  "slidesToShow": 1, 
                  "slidesToScroll": 1,
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
  mounted () {
    
  },
  beforeMount() {
    this.getTopsellerList()
  },
  methods: {
    logeventOnBtnClick(sId)
    {
      if (sId) {
        try {
          const analyticsdata = {
            channel_id: 'WEB',
            user_id: this.authUser ? this.authUser?.uid : null,
            section_name: this.market_name,
            market_name: this.market_name,
            seller_id: sId,
          };
          this.$fire.analytics.logEvent('gintaa_home_section_clicked', analyticsdata)
          console.log('gintaa_home_section_clicked event log successfully', analyticsdata);
        } catch (e) {
          console.log('Gintaa analytics error:', e);
        }
      }
    },

    getViewAllUrl(sectionTitle:any,sectionDescription:any){
      // console.log("sectionTitle",sectionTitle,sectionDescription)
       this.$router.push ({ path: this.localePath(`/selleralllistings`), query: {market_name: this.market_name, sectionTitle: sectionTitle ,sectionDescription : sectionDescription } })
    
       try {
        const analyticsData = {
          channel_id: 'WEB',
          user_id: this.authUser ? this.authUser?.uid : null,
          section_name : sectionTitle,
          market_name: this.market_name,
          // query_url: `${this.CDN_BASE_URL}/selleralllistings?market_name=${this.market_name}&sectionTitle=${sectionTitle}&sectionDescription=${sectionDescription}`, 
          
        };
        this.$fire.analytics.logEvent('gintaa_home_section_clicked', analyticsData)
        console.log('gintaa_home_section_clicked event log successfully', analyticsData);
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
      },
    async getTopsellerList(){
      try {
        let url = `users/v1/user/market/all-sellers/${this.market_name}`;
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
<style scoped>
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