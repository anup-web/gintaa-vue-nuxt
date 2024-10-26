<template>
  <div class="group  w-full mt-0-exchangecard mt-5 box-border overflow-hidden flex p-3 pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5  shadow relative">
    <div class="product-img flex h-64 justify-center w-full  items-center overflow-hidden">
      <div class="subd-price">
        <div class="w-full flex items-center justify-center">
         <img v-if="transactionMode === 'COIN'" src="~assets/images/gintaa-coin-bag.svg" alt="gintaa-coin" class="w-[130px]  exchange-card mx-auto max-w-full imgmyoffer listing-page-coin-view"/>
         <img v-if="transactionMode === 'CASH'" src="~assets/images/gintaa-rupees-new-symbol.svg" alt="gintaa-rupees" class="w-[130px]  exchange-card mx-auto max-w-full imgmyoffer listing-page-money-view"/>
         </div>
        <div class="w-full flex items-center justify-center mt-2 text-center moneymyoffershow">
          <span v-if="amount > 0" class="text-base lg:text-xl text-gray-800 font-medium "> {{ amount }} </span>
          <span v-else class="text-lg  text-gray-800"> Money </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'ListingItemMoney',
  props: ['amount','transactionMode'],
  mounted(){
   
  }
})
</script>

<style scoped>
.exchangecard-money .h-64{
  height: auto !important;
}
.exchangecard-money.mt-0-exchangecard{

  margin-top: 0 !important;
  padding: 0 !important;

}
.deal-money-card .listing-page-coin-view{
  width: 80px !important;

}
.deal-money-card .listing-page-money-view{
  width: 110px !important;

}

</style>