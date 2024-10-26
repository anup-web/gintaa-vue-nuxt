<template>
    <div class="recentcardtop">
        <div :to="getListingDetailsLink(listing)" target="_blank"  class="group box-border overflow-hidden flex   cursor-pointer   items-start bg-white transition duration-200 ease-in-out transform  border-b border-gray-200 relative">
            
                <div class="flex w-full  lg:pt-3 pb-3">
                    <div class="w-[250px]">

                <img v-if="listing.image.url"  :src="listing.image.url" :alt="listing.image.url" class="bg-gray-300 object-cover  max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none"> 
                <img v-else src="~/assets/images/uplaod-default-img.png" :alt="listing.image.url" class="bg-gray-300 object-cover max-h-[100%] max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
      
            
                    </div>
                    <div class="w-full">
                        <div class="flex w-full">
                            <div class="w-2/6">
                                <div class="pl-5">
                                <h2 class="text-heading font-semibold truncate mb-3 text-[19px] text-gray-600">
                                                {{listing.name}}
                                            </h2>

                                           
                                    <div class="text-gray-500 mb-3 truncate text-xs 2xl:text-sm lg:text-xs font-normal flex item-center mr-1">
                                        <span> {{$t('valueText')}} : </span>
                                        <span class="flex items-center ml-2 font-medium">
                                            <img src="~/assets/images/coin.svg" alt="coin" class="mr-1 w-[18px]" />
                                    
                                        {{listing.unitOfferValuation}}
                                        </span>
                                    </div>
                                    <div class="flex">
                <div class="text-xs  text-gray-400 bottom-0  flex items-center relative pl-[25px] w-full">
                    <svg
                    width="13"
                    height="17"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute left-0 top:0 "
                    >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#5f5f5f" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#5f5f5f" />
                    </svg>
                    {{listing.location.city}}
                </div>
                                    </div>
                                <div class="text-heading font-medium text-base text-gray-700 mb-1 truncate   flex items-center pl-[65px] mt-4 relative">
                                                <img src="~/assets/images/barter_green_blue.png" alt="barter" class="absolute left-0">

                                                <span class="mr-2">:</span>
                                                <span class="text-xs lg:text-sm text-gray-500 font-normal flex items-center">
                                                    
                                                    <span v-if="listing.free">Free</span>
                                                    <span v-else-if="listing.desire">
                                                        {{listing.desire.desireType}}
                                                    </span>
                                                    <span v-else class="flex items-center">
                                                        <img src="~/assets/images/coin.svg" alt="coin" class="mr-1 w-[18px]" />
                                                    
                                                    {{listing.unitOfferValuation}}
                                                    </span>
                                                </span>
                                            </div>


                            
                    
                                </div>
                            </div>
                            <div class="w-4/6">
                                            <div class="product-features mb-5">
               <h2 class="text-heading font-semibold truncate mb-3 text-[16px] text-gray-600">
                                                Product features
                                            </h2>
                <div class="feature-row flex w-full mb-2">
                  <div class="feature-name w-1/6  text-xs   font-normal  text-gray-600 pr-2" >
                   Wattage :

                  </div>
                  <div  class="feature-ans w-5/6 text-xsb font-medium text-gray-700"  >
                    100 - 199 Watt
                  </div>
                </div>
                <div class="feature-row flex w-full mb-2">
                  <div class="feature-name w-1/6  text-xs   font-normal  text-gray-600 pr-2" >
                  Brands  :

                  </div>
                  <div  class="feature-ans w-5/6 text-xsb font-medium text-gray-700"  >
                   Wireless
                  </div>
                </div>
                 <div class="feature-row flex w-full mb-2">
                  <div class="feature-name w-1/6  text-xs   font-normal  text-gray-600 pr-2" >
                  Speaker Features :

                  </div>
                  <div  class="feature-ans w-5/6 text-xsb font-medium text-gray-700"  >
                   Remote Control
                  </div>
                </div>

                 <div class="feature-row flex w-full mb-2">
                  <div class="feature-name w-1/6  text-xs   font-normal  text-gray-600 pr-2" >
                 Color  :

                  </div>
                  <div  class="feature-ans w-5/6 text-xsb font-medium text-gray-700"  >
                   Grey
                  </div>
                </div>

              </div>
                                
                            </div>
                        </div>
                    </div>
                    
              <!-- <div  class="flex-shrink-0 pe-24 hidden lg:block w-[200px] relative" >

 <favourite :listing="listing"/>
            <nuxt-link :to="getListingDetailsLink(listing)" target="_blank" v-for="img in listing.images" v-if="img.cover" :key="img.id" class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[180px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                <img :src="img.url" :alt="listing.name" class="bg-gray-300 object-cover  max-h-full max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
            </nuxt-link>
              </div> -->
               <!-- <div class="w-full lg:-ms-9">
                   <div class="pl-5">

                    <div class="product-title w-full overflow-hidden">
            <h2 class="text-heading font-semibold truncate mb-3 text-sm text-gray-600">
                {{listing.name}}
            </h2>

            <div class="flex item-center flex-col mb-1 lg:mb-3">
                <div class="">
                <div class="text-gray-500 mb-3 truncate text-xs 2xl:text-sm lg:text-xs font-normal flex item-center mr-1">
                    <span> Value : </span>
                    <span class="flex items-center ml-2 font-medium">
                        <img src="~/assets/images/coin.svg" class="mr-1 w-[18px]" />
                   
                    {{listing.unitOfferValuation}}
                    </span>
                </div>
                </div>
                <div class="flex">
                <div class="text-xs  text-gray-400 bottom-0  flex items-center relative pl-[25px] w-full">
                    <svg
                    width="13"
                    height="17"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute left-0 top:0 "
                    >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#5f5f5f" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#5f5f5f" />
                    </svg>
                    {{listing.location.city}}
                </div>
                </div>
            </div>
                
            </div>
            
           
            <div class="text-heading font-medium text-base text-gray-700 mb-1 truncate   flex items-center pl-[48px] relative">
                <img src="~/assets/images/barter_green_blue.png" class="absolute left-0">

                <span class="mr-2">:</span>
                <span class="text-xs lg:text-sm text-gray-500 font-normal flex items-center">
                    
                    <span v-if="listing.free">Free</span>
                    <span v-else-if="listing.desire">
                        {{listing.desire.desireType}}
                    </span>
                    <span v-else class="flex items-center">
                        <img src="~/assets/images/coin.svg" class="mr-1 w-[18px]" />
                       
                    {{listing.unitOfferValuation}}
                    </span>
                </span>
            </div>
            <div class="text-[11px]  md:hidden text-gray-400 bottom-0 overflow-hidden truncate flex items-center relative pl-[25px] w-full mb-1">
                    <svg
                    width="11"
                    height="15"
                    viewBox="0 0 20 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute left-0 top:0 "
                    >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#5f5f5f" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#5f5f5f" />
                    </svg>
                    {{listing.location.city}}
                </div>



               </div>
                </div> -->

 </div>
           
           
        </div>
    </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'homeListingCard',
  props: ['listing'],
  computed:{
  imageUrl () {
     console.log("this.listing.image",this.listing.image.url)
      if (this.listing.image) {
        return this.listing.image.url
      } else if (this.listing.images && this.listing.images.length > 0) {
           return (
          this.listing.images.filter((image) => image.cover === true)[0]?.url ||
          this.listing.images[0].url
        );
       // return this.listing.images[0].url
      }

      return null
    },
  },
  mounted(){
      console.log("------------------------------------")
  },

  methods: {      
    getListingDetailsLink(listing){
     // return `/p/${listing.seOId ||  this.slugify(listing.name)}/${listing.offerId || listing.oid}`;
      return `/p/${this.slugify(listing.seOId) ||  this.$createSlugUrl(listing)}/${listing.offerId || listing.oid}`;
    },
    slugify (text) {
        if(text){
         return text
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        }
     
    }
  }
})
</script>
<style scoped>
 .recentcardtop:nth-child(5n+0) .group{
    border-right: 0 !important;
    
}
@media only screen and (max-width: 767px) {
   .recentcardtop:nth-child(5n+0) .group{
       border-right: 1px solid rgb(229 231 235) !important;
   }
    
}
</style>