<template >
  <div class="similar-product-section py-8">
    <div class="">
      <div class="mx-auto pb-14">
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
            <span class="">{{ $t('matches') }}</span>
          </h3>
        </div>

         <!-- <div v-show="loading" class="py-6 flex justify-center">
              <Spinner />
            </div> -->

        <div  v-if="showPotentialLisitngs"  class="potentialgrid mylisting-grid flex flex-wrap justfy-start lg:justify-center">
              <div v-for="listing of listings" :key="listing.oid" class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-b border-gray-200 w-3/6  relative">
                <ListingCard :listing="listing" />
              </div>
            </div>

            
      <Trigger @triggerIntersected="loadMore" />

      <div v-show="loading" class="py-6 flex justify-center">
              <Spinner />
            </div>


        <!-- <div v-if="totallistingItems.length > 10" class="flex justify-center pt-12">
          <a
            @click="getLink"
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
              cursor-pointer
              hover:text-white
              flex
              items-center
              h-14
            "
            > {{ $t('viewAllProducts') }}
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "potentialListings",
  props: ["offerId"],

  mounted() {
    this.getPotentialMatches(this.offerId);
  },

  data() {
    return {
      listings: [],
      enableSearchMore: true,
      page: 0,
      loading: true,
      showPotentialLisitngs:false,
      listingItems: [{}],
      totallistingItems:[{}]
    };
  },
  methods: {
    async getPotentialMatches(offerId) {
       this.loading = true
      try {
        let url=  `/search/v1/search/match-result/oid?offerId=${offerId}&page=${this.page}&size=7`
        //let url = `/search/v1/search/match-result/oid?offerId=${offerId}&matchCountMax=9999`
        const data = await this.$axios.$get(url);
        //console.log("data.payload",data,data.payload)
        if(data.payload){
       // console.log("------MAticng found")
        const  potentialObj = data.payload?.hits;
        if(potentialObj.length){
        const pObj = potentialObj.map(a => a.sourceAsMap);

         if (this.page === 0) {
          this.showPotentialLisitngs = true
          this.listings = pObj
        //  data.payload
        } else if (data.payload?.hits.length > 0) {
          this.listings.push(...pObj)
        }

        this.enableSearchMore = data.payload?.hits.length > 0

        this.loading = false
        }else{
        //this.listingItems = [{}]
        }
        }else{
       // this.showPotentialLisitngs = false
        //console.log("------ no MAticng found")
        }
      } catch (error) {
         if (this.page === 0) {
          this.listings = []
        }
        this.loading = false
        this.enableSearchMore = false
      }
    },

    loadMore(){
     if (!this.loading && this.enableSearchMore) {
       this.page++;
       this.getPotentialMatches(this.offerId);
      }
    },
    transform(images) {
      if (images) {
        return (
          images.filter((image) => image.cover === true)[0]?.url ||
          images[0].url
        );
      }
      return null;
    },
    
   getLink(){
    this.$router.push({ path: '/view-all/potentiallisting', query: { id: this.offerId }})
   }

    //
  },

};
</script>
<style scoped>
.potentialgrid .group:nth-child(2n+0){
  border-right: 0 !important;
}
</style>