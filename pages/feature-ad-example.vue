<template>
    <div class="shipment-tracking-page pt-[80px] lg:pt-12 bg-[#f1f1f1]">
        <!--//////////header///////////-->
        <Header/>
        <!--////////Breadcrumb//////////-->
            <div class="mx-auto max-w-[1920px]  md:px-8 2xl:px-16 pt-10 hidden md:flex">
             <breadcrumb  v-if="breadcrumb.length > 0" :breadcrumb="breadcrumb"/>
        </div>
      <div class="container max-w-[1920px] mx-auto px-4 md:px-8 2xl:px-16 pt-5"> 
           <div class="w-full mb-14 mt-4">
          <div class="text-base text-gray-900 font-medium uppercase w-full flex items-center justify-center text-center">{{ $t('featuredTagTitle') }}</div>
          <div class="w-full mb-6 mt-4"> 
               <div class="text-base text-gray-900 w-full flex items-center justify-center text-center">{{ $t('premiumAdsHomeTitle') }}</div>    
               <div class="w-full flex items-center justify-center mt-3">                
                    <img src="~/assets/images/tag/home-page.png" alt="image" class=" max-w-full" />
               </div>
          </div>  
           
           <div class="w-full mb-6"> 
               <div class="text-base text-gray-900 w-full flex items-center justify-center text-center">{{ $t('premiumAdsSearchTitle') }}</div>  
               <div class="w-full flex items-center justify-center mt-3">               
                    <img src="~/assets/images/tag/search-page.png" alt="image" class=" max-w-full" />
               </div>
           </div> 
           
            <div class="w-full mb-6"> 
               <div class="text-base text-gray-900 w-full flex items-center justify-center text-center">{{ $t('premiumAdsCategoryTitle') }}</div> 
               <div class="w-full flex items-center justify-center mt-3">               
                    <img src="~/assets/images/tag/category-page.png" alt="image" class=" max-w-full" />
               </div>
           </div> 


           <div class="w-full mb-6"> 
               <div class="text-base text-gray-900 w-full flex items-center justify-center text-center">{{ $t('premiumAdsMenuTitle') }}</div> 
           <div class="w-full flex items-center justify-center mt-3">               
                <img src="~/assets/images/tag/menubar.png" alt="image" class=" max-w-full" />
           </div>
           </div> 


            </div> 
               
      </div>
      <!--footer section goes here-->
      <Footer/>
    
    
    
      
    
    </div> 
    </template>
    
    
    
    
    
    
    
    <script lang="ts">
    
    import Vue from 'vue'
    
    
    export default Vue.extend({     
      name: 'featureadexample',
    data() {
    return {
      breadcrumb: [
        {
          name: this.$t('premiumAd'),
        },
      ],
    }
  },
    
    })
    
    </script>
    
    