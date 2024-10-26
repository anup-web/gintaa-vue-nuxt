<template>
  <div class="similar-product-section py-8" v-if="showDealSection">
    <div class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
      <div class="mx-auto">
        <div class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
          <h3
            class="
              section-title
              text-gray-600 text-base
              md:text-2xl
              font-bold
              px-5
              relative
              mb-2
              inline-block
              before:bg-green
              before:absolute
              before:w-12
              before:h-0.5
              before:top-4
              before:-left-14
              after:bg-green
              after:absolute
              after:w-12
              after:h-0.5
              after:top-4
              after:-right-14
            "
          >
            <span class="">{{ $t('offers') }}</span>
          </h3>
        </div>

        <div
          v-show="offers.length > 0"
          class="
            grid grid-cols-1
            sm:grid-cols-1
            xl:grid-cols-3
            gap-x-3
            lg:gap-x-5
            xl:gap-x-7
            gap-y-3
            xl:gap-y-5
            2xl:gap-y-8
          "
        >
          <div v-for="offer of offers" :key="offer.dealRefId">
            <OfferItemCard :offer="offer" />
          </div>
        </div>

        <div v-if="offers.length > 3" class="flex justify-center pt-12">
          <a
            href="/my-offers"
            class="
              border border-firoza
              bg-transparent
              py-2
              px-8
              rounded
              inline-block
              text-firoza
              font-medium
              text-base
              hover:bg-firoza
              transition
              hover:text-white
              flex
              items-center
              h-14
            "
            >{{ $t('viewAllProducts') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  name: "UserDeals",
  props: ["offerId"],
  computed: {},
  data() {
    return {
      showDealSection: false,
      offers: [],
    };
  },
  mounted() {
    this.getDeals(this.offerId);
  },
  methods: {
    async getDeals(offerId) {
      try {
        const url = `/deals/v1/deals/offer/${offerId}`;
        const data = await this.$axios.$get(url);
        if (data.payload && data.payload.length > 0) {
          this.showDealSection = true;
          this.$emit("isOfferInitiated", true);
          this.offers = data.payload.slice(0, 3);
          const dealStatusList = [
            "INITIATED",
            "REVISED",
            "ACCEPTED",
            "PARTIAL_CLOSED",
          ];

        } else {
          this.$emit("isOfferInitiated", false);
        }
        console.log("data", data);
      } catch (error) {
        this.offers = [];
        this.showDealSection = false;
        console.log(error);
      }
    },
  },
});
</script>


<style scoped>
.full-list-auto {
  min-height: 90vh;
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>