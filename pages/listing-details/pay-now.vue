<template>
    <div>
        <Header />
        <section class="pt-16">
        </section>
        <div class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 py-14">
            <h1>Pay Now Page</h1>
            <form @submit.prevent="payNow()">
                <ul>
                    <li>
                        <input type="text" v-model="orderId" placeholder="orderId" name="order_id" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                    </li>               
                    <li>
                        <input type="submit" name="pay-now-submit" value="Pay Now" class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white">
                    </li>
                </ul>
                
            </form>
        </div>

    </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'PayNowPage',
  asyncData() {
    return {
      orderId: ''
    }
  },
  methods: {
      payNow() {
          console.log('orderId:', this.orderId);
          this.$router.push('/payment/'+this.orderId);
      }
  }
})
</script>