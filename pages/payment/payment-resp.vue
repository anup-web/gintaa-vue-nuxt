<template>
    <div>
        <div v-if="showLoader" class="fixed w-full h-full z-50 top-0 left-0 bg-black opacity-40"></div>
        
        <Header />
        <section class="pt-16">
        </section>
        <div class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 py-14">
            <h1>Payment Response</h1>
            <p v-if="this.$route.query.redirect_status">Payment Status: {{this.$route.query.redirect_status}}</p>
            <p v-if="paymentStatus">Payment Status: {{paymentStatus}}</p>
            <!-- {{this.order_id}} -->
        </div>
        <div v-if="showLoader" class="bg-white rounded-full shadow w-12 h-12 mx-auto flex items-center justify-center">
            <div style="border-top-color:transparent"
                class="w-8 h-8 border-4 border-green border-solid rounded-full animate-spin"></div>

        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Payment-Response",
    
    data() {
        return {
            apiUrls: this.$config.apiUrls,
            order_id: (process.client && this.$route.query.order_id) ? this.$route.query.order_id : null,
            paymentStatus: null,
            showLoader: true
        }
    },
    async created() {
        if(this.order_id) {
            let updateStatus = await this.updatePaymentStatus();
            if(updateStatus && updateStatus.data && updateStatus.data.payload) {
                this.paymentStatus = updateStatus.data.payload.paymentStatus;
                this.showLoader = false;
            }
            // console.log('updateStatus:', updateStatus)
        }

        if(this.$route.query.redirect_status){
            // this.paymentStatus = this.$route.query.redirect_status;
            this.showLoader = false;
        }
        
    },
    methods: {
        async updatePaymentStatus() {
            const requestUrl = this.apiUrls.updatePaymentStatus;
            const requestObj = {orderId: this.order_id}
            let updateStatus = await this.$axios.post(requestUrl, requestObj)
                .then(function (response) {
                    console.log(response);
                    return response;
                })
                .catch(function (error) {
                    console.log(error);
                });
            return updateStatus;
        }
    }
})
</script>