<template>
    <div class="recentcardtop">
        <div :href="localePath(listing)" target="_blank"  class="mobile-last group box-border overflow-hidden flex px-2 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-t  md:border-t-0 border-r border-b md:border-b-0  border-gray-200 rounded-0 md:rounded-0 relative home-listing-card">
            <!-- <div class="absolute right-2 top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3" />
                </svg>
            </div> -->
            <newTag v-if="listing.itemCondition ==='New'"/>
            <div class="list-premium-tag-1">
            <premiumTag v-if="listing.featured"/>
            </div>
            <favourite :listing="listing"/>
            <a :href="localePath(getListingDetailsLink(listing))" target="_blank" v-for="img in listing.images" v-if="img.cover" :key="img.id" class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[180px] 2xl:h-[210px] justify-center w-full items-center overflow-hidden">
                <img :src="getimageThumbnil(img)" :alt="listing.name" class="bg-gray-300 object-cover  max-h-full max-w-[100%]  transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none">
            </a>
            <div class="product-title w-full overflow-hidden px-1">
            <h2 class="text-heading font-medium truncate mb-1 text-sm text-gray-500 ">
                {{listing.name}}
            </h2>

            <div class="flex flex-col mb-1 lg:mb-1">
                <div class="w-full flex items-center mb-1.5">
                <div class="text-gray-600 text-sm md:text-[18px] relative font-bold w-full flex items-start flex-col sm:flex-row sm:items-center md:flex-row md:items-center lg:flex-row lg:items-center xl:flex-row xl:items-center 2xl:flex-row 2xl:items-center prod-price ">
                    <!-- <span> {{$t('valueText')}} : </span> -->
                    <span class="float-left font-bold  mr-[8px] hlm-coin relative" :class="checkIsAffiliated(listing) ? 'pl-[22px]' : 'pl-[10px]'">
                        <!-- <img src="~/assets/images/coin.svg" class="mr-1 w-[18px]" alt="coin"/> -->

                        <img v-if="checkIsAffiliated(listing)" alt="coin" src="~assets/images/offer/coin-value.svg"
                  class="absolute w-[18px] top-[2px] left-[0px]">
                   
                  <svg v-else width="6" height="11" viewBox="0 0 11 18" fill="none" class="absolute top-[3px] left-[2px]">
                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black" />
                    </svg>  
                    {{listing.unitOfferValuation}}
                    </span>
                    
                    <div class="float-left">
                    <div class="flex items-center">
                     <span v-if="listing.price && listing.price > listing.unitOfferValuation " class="items-center text-[12px] font-normal text-gray-500 relative flex after:left-0 after:absolute after:w-[100%] after:h-[1px] after:bg-gray-500 after:top-[10px] ">
                        <svg width="5" height="10" viewBox="0 0 11 18" fill="none" class="mr-[1px]">
                        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black" />
                    </svg>   {{listing.price}}</span>
                    <span v-if="listing.price && listing.price > listing.unitOfferValuation && checkOffPercentage(listing) " class="text-[13px] text-[#3B9A01] pl-[9px] font-medium">{{checkOffPercentage(listing)}}% {{ $t('cl_off') }}</span> 
                    </div>
                    </div>
                </div>
                 <!-- <div class="flex items-center" v-if="listing.price && listing.price > listing.unitOfferValuation">
                            <span   class="  text-[13px] block font-normal  pl-2 text-gray-400 line-through lt-price">
                            {{listing.price}}
                          </span>

                           <span class="text-[#31b801] text-[13px] font-medium block ml-2 discount-percentage">{{getDiscountPercentage(listing.unitOfferValuation,listing.price)}}</span>
                        </div> -->
                </div>
                <div class="flex items-center justify-between w-full">
                <div class="text-[11px]  text-gray-400 bottom-0 overflow-hidden truncate flex items-center relative pl-[20px]">
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
                
                 <!-- <ListingPublishDet :cDate="listing.createdDate"/> -->
                </div>
                
            </div>
            
            </div>

            <!--this section  for desire section-->
            <!-- <div class="text-heading font-medium text-base text-gray-700 mb-1 truncate   flex items-center pl-[48px] relative">
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
            </div> -->
           
            <!-- <div class="text-[11px]  md:hidden text-gray-400 bottom-0 overflow-hidden truncate flex items-center relative pl-[25px] w-full mb-1">
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
                </div> -->
                <freeDeliveryCod :listing="listing"/>
                <listingUserDetails :listing="listing"/>
                
                 <!-- <a href="#" class="username-rate text-xs text-gray-600 flex items-center">
                <div class="h-10 w-10 bg-gray-200 flex  items-center justify-center  rounded-full  mr-3  relative">
                    <img src="https://dev.cdn.gintaa.com/users/llpTWpEsbCNiInPFZuwYoYd9GKH3/avatar/3Xs3Zq4k57dqFroE3rT8ne_Sample1right.jpg" class="w-10 h-10 rounded-full">
                </div>
                <div class="user-name-card mr-3">Abhaya Das</div>
                 <div class="text-gray-600 text-sm flex ">
                      <svg                    
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z"
                        fill="#FF9500"
                      />
                    </svg>
                    <span  class="pl-2 font-medium">4.2</span>
                 </div>

                 <div class="text-gray-600 text-sm flex hidden">
                     
                    <svg  width="18" height="18" viewBox="0 0 22 22" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9053 1.51093C11.7509 1.19807 11.4323 1 11.0834 1C10.7345 1 10.4158 1.19807 10.2614 1.51093L7.64195 6.81759L1.78412 7.67381C1.43894 7.72426 1.15231 7.96626 1.04472 8.2981C0.937122 8.62994 1.02721 8.99409 1.27711 9.2375L5.51505 13.3653L4.51489 19.1967C4.4559 19.5406 4.59729 19.8882 4.8796 20.0933C5.16192 20.2984 5.53618 20.3254 5.84502 20.163L11.0834 17.4082L16.3217 20.163C16.6305 20.3254 17.0048 20.2984 17.2871 20.0933C17.5694 19.8882 17.7108 19.5406 17.6518 19.1967L16.6517 13.3653L20.8896 9.2375C21.1395 8.99409 21.2296 8.62994 21.122 8.2981C21.0144 7.96626 20.7278 7.72426 20.3826 7.67381L14.5248 6.81759L11.9053 1.51093Z" fill="#A5A3A1" />
                    </svg>
                <span  class="pl-2 font-medium">Not Rated</span>

                 </div>
                
            </a> -->
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import ListingPublishDet from '../atoms/ListingPublishDet.vue';
import freeDeliveryCod from '../atoms/listing/freeDeliveryCod.vue';
export default Vue.extend({
    name: "homeListingCard",
    props: ["listing"],
    methods: {

        checkIsAffiliated(product) {
      //  console.log("product.user",product.user)
      if (product.user?.gintaaAffiliated) {
        return true
      } else {
        return false
      }
    },

checkOffPercentage(productDet){
let diffValue =  +productDet?.price - +productDet?.unitOfferValuation
 if(diffValue > 0){
    return this.$cacculateoffpercentage(+productDet?.price,+productDet?.unitOfferValuation)
  // return (Math.round((diffValue/ price) * 100))
 }else{
    return null
 }

// unitOfferValuation
// price  round(2.49)

},
        getListingDetailsLink(listing) {
            // return `/p/${listing.seOId || this.slugify(listing.name)}/${listing.offerId || listing.oid}`;
            return `/p/${this.slugify(listing.seOId) || this.$createSlugUrl(listing)}/${listing.offerId || listing.oid}`;
        },
        getDiscountPercentage(unitOfferVal, marketValue) {
            const disCountPer = Math.round((((marketValue - unitOfferVal) / marketValue) * 100).toFixed(2));
            if (disCountPer > 0) {
                return "(" + disCountPer + "%" + "Off" + ")";
            }
            else {
                return null;
            }
            //return Math.round(disCountPer)
        },
        // const diffDays = this.$moment().diff(lastUpdateDate, 'days')
        getimageThumbnil(imgDet) {
            if (imgDet.thumbnails) {
                return imgDet.thumbnails["200x200"];
            }
            else {
                return imgDet.url;
            }
        },
        slugify(text) {
            if(text){
             return text
                .toString() // Cast to string
                .toLowerCase() // Convert the string to lowercase letters
                .normalize("NFD") // The normalize() method returns the Unicode Normalization Form of a given string.
                .trim() // Remove whitespace from both sides of a string
                .replace(/\s+/g, "-") // Replace spaces with -
                .replace(/[^\w\-]+/g, "") // Remove all non-word chars
                .replace(/\-\-+/g, "-"); // Replace multiple - with single -
            }
            
        }
    },
    components: { ListingPublishDet, freeDeliveryCod }
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

@media only screen and (min-device-width: 0px) and (max-device-width: 480px){
   .lt-price, .discount-percentage, .prod-price{ font-size: 12px;} 
}  
@media (min-width:1280px)  {
 
   .recntlisting-grid-home .recentcardtop:nth-child(1) .group, .recntlisting-grid-home .recentcardtop:nth-child(2) .group, .recntlisting-grid-home .recentcardtop:nth-child(3) .group, .recntlisting-grid-home .recentcardtop:nth-child(4) .group, .recntlisting-grid-home .recentcardtop:nth-child(5) .group{
    border-top: 0 !important;
  }
}  

   

@media only screen and (min-device-width: 0px) and (max-device-width: 1023px){
    .list-premium-tag-1 .premium-tag {
	left: 0!important; top: 110px!important;
}
}   

@media only screen and (min-device-width: 1024px) and (max-device-width: 1535px){
    .list-premium-tag-1 .premium-tag {
	left: 0!important; top: 174px!important;
}
} 

@media only screen and (min-device-width: 1536px) and (max-device-width: 2000px){
    .list-premium-tag-1 .premium-tag {
	left: 0!important; top: 182px!important;
}
} 
</style>