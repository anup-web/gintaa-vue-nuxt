<template>
    <div class="recentcardtop mt-2 h-[17px] w-full">
        <div v-if="listing.freeShipping && listing.cod" class="flex items-center pl-[4px]">
            <img src="~/assets/images/truck.svg" width="16" height="13" alt="Free Delivery & COD"/>
             <span class="text-gray-600 text-[11px] ml-2">Free Delivery & COD</span>
        </div>
        <div v-else-if="listing.freeShipping && !listing.cod" class="flex items-center pl-[4px]">
            <img src="~/assets/images/truck.svg" width="16" height="13" alt="Free Delivery"/>
             <span class="text-gray-600 text-[11px] ml-2">Free Delivery</span>
        </div>
        <div v-else-if="!listing.freeShipping && listing.cod" class="flex items-center pl-[2px]">
            <img src="~/assets/images/cod.svg" width="18" height="18" alt="COD Available"/>
             <span class="text-gray-600 text-[11px] ml-2">COD Available</span>
            
        </div>

            <!-- <pre>{{listing}}</pre> -->
    </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
    name: "freeDeliveryCod",
    props: ["listing"],
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
</style>