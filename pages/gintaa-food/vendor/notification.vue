<template>
 <div class="relative bg-[#f8f8f8] min-h-screen">
    <GintaaFoodVendorSidebar />
    <div class="content-wrapper content-wrapper-min pl-0 relative z-10 sm:pl-0 md:pl-[180px] lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px]">  
      <!--//////////header///////////-->
      <GintaaFoodVendorHeader />
      <!--////////Breadcrumb//////////-->
      <section class="bg-gray-100 sm:bg-gray-100 pt-[60px] sm:pt-[60px] md:pt-[100px]">
        <div class="w-full px-8 sm:w-full sm:px-8 md:px-0 md:max-w-[520px] lg:max-w-[740px] 2xl:max-w-[800px] mx-auto">
          <div class="px-2 lg:px-0 hidden sm:hidden md:block">
              <Breadcrumb  :breadcrumb="breadcrumb"/>
          </div>
            <NotificationsInappnotification :notificationType="'FOOD'"/>
        </div>
      </section>
  </div>
   
  <GintaaFoodVendorFooter />

 </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NotificationPage',
  data() {
    return {
      breadcrumb: [
        {
          name: this.$t('notifications'),
          // href: '/my-offers'
        }
      ],
      
    }
  }

})
</script>


