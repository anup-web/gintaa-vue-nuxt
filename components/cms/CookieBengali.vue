<template>
             <div>
            <h1 v-if="isFromWeb()" class="text-lg md:text-xl lg:text-[24px] text-gray-900 font-semibold mb-4 lg:mb-7 text-center">কুকি পলিসি</h1>

         <div class="term-para text-sm text-gray-600">
           <p class="mb-6"> <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com</a>-এ আমাদের ওয়েবসাইটের মাধ্যমে আমাদের পরিষেবা প্রদানের সময় কুকি ব্যবহার করি।</p>
             <p class="mb-6 leading-6">সাধারণত কুকি হল একটি ছোট ফাইল যা আমাদের দ্বারা আপনার কম্পিউটারের হার্ড ড্রাইভে রাখা হয় যা আপনার ব্যবহারের ধরণ, আপনি যে ধরনের ব্রাউজার ব্যবহার করেন, আপনার আগ্রহ সম্পর্কে জানতে সাহায্য করে। কুকিগুলি ট্রাফিক এবং ব্রাউজিংয়ের ফ্রিকোয়েন্সি বিশ্লেষণ এবং পরিমাপ করতে, পরিষেবাগুলি সংজ্ঞায়িত করতে এবং <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com</a> ব্যক্তিগতকৃত ব্যবহারকারীর অভিজ্ঞতা অফার করতে সহায়তা করে। আপনি যদি কুকিজকে আপনার কম্পিউটারে থাকার অনুমতি দেন তাহলে আপনার দ্বিতীয়বার ওয়েবসাইট ভিসিট থেকে আপনি আমাদের ওয়েবসাইটে কাজ করার সহজতা পাবেন।
</p>
               <p class="mb-6">আপনার ব্যক্তিগত ডেটা বা সংবেদনশীল ব্যক্তিগত ডেটা কুকিগুলিতে সংরক্ষণ করা হয় না এবং কুকিগুলি আপনার ডিভাইসের ক্ষতি করে না৷ <a href="https://gintaa.com/" target="_blank" class="text-firoza">www.gintaa.com</a> -এর ব্যবহার চালিয়ে যাওয়ার মাধ্যমে, আপনি আমাদের কুকি নীতির ব্যবহারে সম্মত হন৷</p>
         </div>

            </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CookieBengali',
  methods:{
    isFromWeb(){
      if(this.$route.query.fromMobileApp === null){
        return false
      }else{
        return true
      }
    }
  }
});
</script>
