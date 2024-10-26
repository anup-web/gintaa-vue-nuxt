<template>
 <div>
   <Header/>
    <section class="bg-gray-100 sm:bg-gray-100 pt-[110px] lg:pt-[90px]">
      <div class="md:max-w-[800px] lg:max-w-[800px] 2xl:max-w-[800px] mx-auto">
         <div class="px-2 lg:px-0">
            <Breadcrumb  :breadcrumb="breadcrumb"/>
         </div>
          <NotificationsInappnotification :notificationType="'MAIN'"/>  
      </div>
    </section>
    <Footer/>
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


