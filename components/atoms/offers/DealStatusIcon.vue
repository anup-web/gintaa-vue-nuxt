<template>
  <IconsOutgoing v-if="currentState === 'Outgoing'" />
  <IconsIncoming v-else-if="currentState === 'Incoming'" />
  <IconsRevised v-else-if="currentState === 'Revised'" />
  <IconsRejected v-else-if="currentState === 'Rejected'" />
  <IconsAccepted v-else-if="currentState === 'Accepted'" />
  <IconsPartialClosed v-else-if="currentState === 'Partial Closed'" />
  <IconsClosed v-else-if="currentState === 'Closed'" />

  <IconsReported v-else-if="currentState === 'Reported'" />
  <IconsCancelled v-else-if="currentState === 'Cancelled'" />
  <IconsPaymentFailed v-else-if="currentState === 'Payment Failed'" />
  <IconsOrderProcessed v-else-if="currentState === 'Order Processed'" />
  <IconsShipmentFailed v-else-if="currentState === 'Shipment Failed'" />
  <IconsRefundInitiated v-else-if="currentState === 'Refund Initiated'" />
  <IconsRefundCompleted v-else-if="currentState === 'Refund Completed'" />
  <IconsPaymentRefunded v-else-if="currentState === 'Payment Refunded'" />
  <IconsDelivered v-else-if="currentState === 'Delivered'" />
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'DealStatusIcon',
  props: ['offer'],
  computed: {
    currentState () {
      if (this.offer?.dealStatus?.dealStatus === 'INITIATED') {
        return this.offer.callerIsReceiver ? 'Incoming' : 'Outgoing'
      }

      const words = this.offer?.dealStatus?.dealStatus.toLowerCase().split('_')
      return words.map((word) => {
        return word[0].toUpperCase() + word.substring(1)
      }).join(' ')
    }
  }
})
</script>
