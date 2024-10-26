<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
        Recent listings
      </h2>

      <div v-if="listings.length > 0" class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="listing of listings" :key="listing.offerId" class="group relative">
          <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img :src="listing.images[0].url" alt="Front of men&#039;s Basic Tee in black." class="w-full h-full object-center object-cover lg:w-full lg:h-full">
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="'/listing-details/' + listing.seOId">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ listing.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                Black
              </p>
            </div>
            <p class="text-sm font-medium text-gray-900">
              Rs.{{ listing.unitOfferValuation }}
            </p>
          </div>
        </div>
        <!-- More products... -->
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      listings: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created () {
    // axios.get('https://dev.api.gintaa.com/offers/v1/offers/all?page=0&size=8')
    //   .then((response) => {
    //   // JSON responses are automatically parsed.
    //     this.listings = response.data
    //   })
    //   .catch((e) => {
    //     this.errors.push(e)
    //   })
    this.fetchSomething()
  },
  methods: {
    async fetchSomething () {
      const data = await this.$axios.$get('/offers/v1/offers/all?page=0&size=8')
      this.listings = data.payload
    }
  }
}
</script>
