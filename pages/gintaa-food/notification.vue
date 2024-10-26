<template>
 <div>   
    <!--//////////header///////////-->
    <GintaaFoodConsumerHeader />
    <!--////////Breadcrumb//////////-->
    <section class="bg-gray-100 sm:bg-gray-100 pt-[110px] lg:pt-[90px] user">
      <div class="md:max-w-[800px] lg:max-w-[800px] 2xl:max-w-[800px] mx-auto">
        <div class="px-8 sm:px-8 md:px-8 lg:px-0 xl:px-0 2xl:px-0 hidden md:flex">
            <Breadcrumb :breadcrumb="breadcrumb" />
        </div>
          <NotificationsInappnotification :notificationType="'FOOD'"/>  
      </div>
    </section>
    <!--footer section goes here-->
    <GintaaFoodConsumerFooter />
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


