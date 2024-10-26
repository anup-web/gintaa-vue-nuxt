<template>
    <div class="w-full bg-white py-4 mt-4 block items-center justify-between mb-[70px] sm:block sm:mb-[70px] md:block md:mb-0 md:pl-[180px] lg:block xl:flex lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px]">
        <div class="text-xs text-gray-500 pl-0 text-center sm:pl-0 md:pl-0 lg:pl-6">&copy; {{ $t('copyRight') }} <a href="https://asconsoftech.com/" target="_blank" class="font-bold">{{ $t('asconSoftech') }}</a></div>
        <div class="block items-center justify-center mt-1 pr-0 sm:pr-0 sm:flex sm:mt-1 md:pr-0 md:mt-1 lg:pr-0 lg:mt-1 xl:pr-6 xl:mt-0">
          <div class="flex items-center justify-center"><a href="/legal/gintaa-food/restaurant-terms-condition" target="_blank" class="transition-colors duration-200 hover:text-green text-gray-500 text-xs">{{ $t('termsConditions') }}</a></div>
          <div class="w-[1px] h-[8px] bg-gray-500 mx-2 hidden sm:block"></div>
          <div class="text-gray-500 text-xs text-center sm:text-right"> {{ $t('grievanceOfficer') }}: {{ $t('grievanceDetails') }}</div>
       </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer',

});
</script>