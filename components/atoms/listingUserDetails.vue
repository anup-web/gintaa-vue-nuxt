<template>
<div class="w-full rating-sec ">
   <a :href="localePath( '/profile/view/' + listing.user.identityId + '')"  class="username-rate flex items-center justify-between  text-gray-600  w-full  relative truncate overflow-hidden min-h-[36px] mt-1">

   <div class="flex items-center relative pl-8 sm:pl-8 md:pl-8 lg:pl-8 xl:pl-8 2xl:pl-8 ">
      <div v-if="getProfileImageUrl(listing.user.imageUrl)" class="bg-gray-100 w-6 h-6 rounded-full sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6 absolute left-0 ">
         <img 
            :src="getProfileImageUrl(listing.user.imageUrl)"
            class="w-6 h-6 rounded-full sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6"
            :alt="listing.user.identityId"
            >
      </div>
      <div v-else class="mr-2 bg-gray-100 w-6 h-6 rounded-full sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6 flex justify-center items-center absolute left-0">
         <img 
            class="max-w-full rounded-full w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-6 2xl:h-6"
            src="~/assets/images/profile/chatu-noimg.svg"
            :alt="listing.user.identityId"
            >
      </div>
      <div v-if="listing.user.name" class="user-name-card  list-userd text-[11px] sm:[11px] md:text-xs lg:text-xs xl:text-xs 2xl:text-xs uname-tuncate">
      {{listing.user.name | truncate(20)}}</div></div>

       <!-- <star-rating v-if="listing.user.averageRating && listing.user.averageRating!== '0.0' " v-model = "rateVale"  inactive-color="#ffffff"
       read-only
             :increment="0.1"
             active-color="#ffa41c"
             :border-width="1"
              border-color="#d15f0b"
             :animate="false"
             :rounded-corners="true"
             max-rating="1"
             v-bind:star-size="13"> </star-rating> -->
       <div v-if="listing.user.averageRating && listing.user.averageRating!== '0.0'" class="text-gray-600 flex items-center absolute right-0">
         <svg  class="w-3 h-3 sm:w-3 sm:h-3 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-3 xl:h-3 2xl:w-3 2xl:h-3"      
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
         <span  class="pl-1 font-medium text-[11px] sm:pl-1 sm:text-[11px] md:pl-1 md:text-xs lg:pl-1 lg:text-xs xl:pl-1 xl:text-xs 2xl:pl-1 2xl:text-xs">{{listing.user.averageRating}}</span>
      </div> 
      <div v-else   class="text-gray-600 text-sm flex items-center">
         <svg  class="w-3 h-3 sm:w-3 sm:h-3 md:w-3 md:h-3 lg:w-3 lg:h-3 xl:w-3 xl:h-3 2xl:w-3 2xl:h-3" viewBox="0 0 22 22" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9053 1.51093C11.7509 1.19807 11.4323 1 11.0834 1C10.7345 1 10.4158 1.19807 10.2614 1.51093L7.64195 6.81759L1.78412 7.67381C1.43894 7.72426 1.15231 7.96626 1.04472 8.2981C0.937122 8.62994 1.02721 8.99409 1.27711 9.2375L5.51505 13.3653L4.51489 19.1967C4.4559 19.5406 4.59729 19.8882 4.8796 20.0933C5.16192 20.2984 5.53618 20.3254 5.84502 20.163L11.0834 17.4082L16.3217 20.163C16.6305 20.3254 17.0048 20.2984 17.2871 20.0933C17.5694 19.8882 17.7108 19.5406 17.6518 19.1967L16.6517 13.3653L20.8896 9.2375C21.1395 8.99409 21.2296 8.62994 21.122 8.2981C21.0144 7.96626 20.7278 7.72426 20.3826 7.67381L14.5248 6.81759L11.9053 1.51093Z" fill="#A5A3A1" />
         </svg>
         <span  class="pl-1 font-medium text-[10px] flex hidden">{{$t('notRated')}}</span>
      </div>
   </a>
    <div v-if="isSearchPage && listing.user.campaignName" class="promocode absolute left-[10px] top-[175px] bg-firoza text-[10px] px-2 py-1 rounded-sm leading-[13px] text-white">{{listing.user.campaignName}}</div>
   
   </div>
</template>
<script lang="ts">
   import Vue from 'vue'

   export default Vue.extend({
   name: "listingUserDetails",
   props:["listing"],
  
   data(){
   return{
     isSearchPage : false,
     rating:0
   }
   },
     computed: {
    rateVale(){
   // console.log("this.listing.user.averageRating",this.listing.user.averageRating)
   return 1 ;
   // return Number(this.listing.user.averageRating)
    }
    },
   mounted(){
     if(this.$route.path.includes('search')){
      this.isSearchPage = true
     }else{
       this.isSearchPage = false
     }
   },
     methods: {

     setRating(rating:any){
        console.log("rating",rating)
      //return Number(rating)
      this.rating= Number(rating);
    },

      getRating(rating:number){
       if(rating){
         return rating
         // console.log("rating",rating)
         // console.log("Number(rating)",Number(rating))
         // return Number(rating)
       }
      },
     
         getProfileImageUrl(imageUrl: string) {
           // console.log("imageUrl",imageUrl)
         const defaultImage = "~/assets/images/profile/chatu-noimg.svg";
         if(imageUrl && !imageUrl.match("deleted.jpeg") && imageUrl!== 'null'){
          // console.log("Iamge Exists")
           return imageUrl;
         }else{
         return false;
         }
         
       },
   
       checkifRatingNull(avgRating:any){
        if(avgRating=== null || avgRating === '' ){
            console.log("yes null")
            return true
        }else{
            return false
        }
       }
   
     }
   })
</script>
<style scoped>
.rating-sec .vue-star-rating .vue-star-rating-star{

   margin-right: 2px !important;

}
.rating-sec .vue-star-rating .vue-star-rating-rating-text{
   font-size: 13px !important;
   color:#007185!important
}

@media only screen and (min-device-width: 0px) and (max-device-width: 360px){
   .uname-tuncate{ width: 85px; overflow: hidden; }
}

@media only screen and (min-device-width: 361px) and (max-device-width: 450px){
   .uname-tuncate{ width: 85px; overflow: hidden; }
}
</style>