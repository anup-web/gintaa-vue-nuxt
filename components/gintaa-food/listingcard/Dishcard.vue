<template>
    <div class="flex py-1 justify-between">    
      <div class="pr-4 flex flex-col pt-1.5">
          <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg>                  -->
          <!-- <GintaaFoodListingcardFoodIndicator :foodType="food.type"/> -->
     
          
          <div class="text-left text-[14px] font-medium text-gray-600 mt-2 relative pl-7 z-[5]">
            <svg class="absolute left-0 top-[2px]"
            v-if="food.type === 'NON_VEG'"
            width="16" height="16" viewBox="0 0 20 19" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="18"
                stroke="#EE1029"></rect>
            <circle cx="10" cy="9" r="5" fill="#EE1029"></circle>
        </svg> 
        <svg class="absolute left-0 top-[2px]"
            v-if="food.type === 'VEG'"
            width="16" height="15" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"/>
            <circle cx="10" cy="9" r="5" fill="#1FBE58"/>
        </svg>
                {{food.name}}
            </div>
          <div
                class="flex items-center text-base text-gray-700 mt-2">
                <svg width="7" height="12" viewBox="0 0 11 18" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" opacity="0.7"
                          d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                          fill="black"></path>
                </svg>
                <span class="pl-0.5">{{food.price}}</span>
          </div>

          <!-- <div class="flex items-center">
                <div class="flex items-center">
                    <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900"
                          viewBox="0 0 46 44" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                              fill="#FFB801" />
                    </svg>
                    <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900"
                          viewBox="0 0 46 44" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                              fill="#FFB801" />
                    </svg>
                    <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900"
                          viewBox="0 0 46 44" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                              fill="#FFB801" />
                    </svg>
                    <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900"
                          viewBox="0 0 46 44" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                              fill="#FFB801" />
                    </svg>
                    <svg class="flex-shrink-0 w-4 h-4 mr-0.5 text-gray-900"
                          viewBox="0 0 46 44" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                              fill="#DADADA" />
                    </svg>
                </div>
                <div class="text-sm text-gray-900 text-center ml-2">4.4(50)
                </div>
          </div> -->


          <div class="flex item-center">
                <div class="flex flex-col mt-1">
                    <div>
                        <div class="text-[12px] text-gray-500 float-left leading-[22px]">
                            {{food.description}}
                        </div>
                    </div>
                    <!-- <div class="text-xs font-medium text-gray-700 mt-1">
                        Read More
                    </div> -->
                </div>
          </div>
      </div>

      <div class="ml-2">
          <div :class="!food.stockAvailable ? 'grayscale' : ''" class="w-[150px] h-[120px] overflow-hidden">
          <img v-if="food.imageUrl" :src="food.imageUrl" :alt="food.imageUrl"
                class="object-cover  max-h-full w-[100%]  transition duration-200 ease-in rounded-md" />

                <img v-else src="~/assets/images/food/consumer/no-dish.jpg" alt="icon"
                class="object-cover  max-h-full w-[100%]  transition duration-200 ease-in rounded-md" />

                <div v-if="!food.stockAvailable" class="absolute bottom-0 w-full text-sm font-bold bg-opacity-30 bg-black py-1 text-center xl:font-[15px] 2xl:font-base"><span class="block text-white">OUT OF STOCK</span></div>
        
            </div>      
          <!-- <button type="button" class="border border-green mt-2 w-[95px] flex justify-center items-center bg-transparent h-8 py-1 px-3 rounded-full text-base text-green">
  <span>Add</span>
  </button>                   -->
          <!-- <div
                class="mt-2 w-[95px] rounded-full border border-green flex items-center justify-between">
                <span
                    class="cursor-pointer px-1 border-r border-green py-1 h-7 w-7 flex items-center justify-center"><svg
                          width="12" height="2" viewBox="0 0 12 2"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line x1="1" y1="1" x2="11" y2="1"
                              stroke="#8EC641" stroke-width="2"
                              stroke-linecap="round" />
                    </svg>
                </span>
                <div
                    class="flex items-center justify-center text-green text-sm px-2">
                    1</div>
                <span
                    class="cursor-pointer px-1 border-l border-green py-1 w-7 h-7 flex items-center justify-center"><svg
                          width="24" height="24" viewBox="0 0 24 24"
                          fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5Z"
                              fill="#8bc63e" />
                    </svg>
                </span>
          </div> -->
      </div>
  </div>
</template>
          
            
            
<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
export default Vue.extend({
    name: 'Dishcard',
    props: ['food'],
    data() {
        return {
            btnloading: false
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
    mounted() {
        // if (this.authUser) {
        // }
      //  console.log('food:', this.food)
    },
    methods: {
        
    }
})

</script>

<style scoped>
        /* @media only screen and (min-device-width: 0px) and (max-device-width: 410px){
        .shop-top{ height: 45px; }
        .market-local-card{ padding: 0px 40px;}
      }
      
      @media only screen and (min-device-width: 411px) and (max-device-width: 480px){
        .shop-top{ height: 45px; }
        .market-local-card{ padding: 0px 45px; }
      }
     
      @media only screen and (min-device-width: 481px) and (max-device-width: 550px){
        .shop-top{ height: 45px; }
        .market-local-card{ padding: 0px 50px; }
      } */
     
      @media only screen and (min-device-width: 0px) and (max-device-width: 767px){
        .market-local-card{ width: 270px; }
      }
      @media only screen and (min-device-width: 1200px) and (max-device-width: 1400px){
        .market-local-card{ width: 260px; }
      }
      @media only screen and (min-device-width: 1701px) and (max-device-width: 3000px){
        .market-local-card{ width: 270px; }
      }
      </style>