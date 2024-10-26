<template>
  <div>
    <div v-if="recommendedListing && recommendedListing.length" class="mx-auto pb-14">
      <div class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 ">
        <h3 class="section-title text-gray-600  text-base md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
          <span class="">Handpicked listings for you </span>
        </h3>
        <span class="hidden lg:block text-gray-400 text-sm font-normal">A wide range of exclusive items in value for money exchange deals. </span>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-6">
        <homeListingCard v-for="listing in recommendedListing" :key="listing.offferId" :listing="listing" />
      </div>

      <div class="flex justify-center pt-12">
        <a href="/view-all/recomendedlisting" class="border border-firoza bg-transparent py-2 px-8 rounded  text-firoza font-medium text-base hover:bg-firoza transition hover:text-white flex items-center h-14">
         {{ $t('viewAllProducts') }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import homeListingCard from '../listings/homeListingCard.vue'

export default Vue.extend({
  name: 'RecomendedListing',
  components: { homeListingCard },
  data () {
    return {
      loading: false,
      apiUrls: this.$config.apiUrls,
      recommendedListing: []
    }
  },
  mounted () {
    this.getrecommendedListing()
  },
  methods: {
    async getrecommendedListing () {
      this.loading = true
      const params = '?page=0&size=18'
      const requestPath = this.apiUrls.recommendedListing + params
      const recommendedListingResponse = await this.$axios.get(requestPath)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error.response.data
        })
      this.loading = false
      console.log('recommendedListingResponse:', recommendedListingResponse)
      if (recommendedListingResponse && recommendedListingResponse.success) {
        this.recommendedListing = recommendedListingResponse.payload
      }

      console.log('recommendedListing:', this.recommendedListing)
    }

  }
})
</script>
