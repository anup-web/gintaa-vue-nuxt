<template>
    <div v-if="premiumListings.length">
        <div class="mx-auto pb-0 home-recent-listing relative sm:pb-0 md:pb-10 lg:pb-10 xl:pb-10 2xl:pb-10">
            <div class="text-center mb-3 md:mb-5 lg:mb-8 2xl:mb-8  independence-head">
                <h3
                    class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-0 sm:mb-2 md:mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
                    <a @click="redirectToViewAllPage()" class="text-gray-600 cursor-pointer">
                        <span class="">{{ web_home_premium_lisitng.section_title }}</span>
                    </a>

                </h3>
                <span class="hidden lg:block text-gray-400 text-sm font-normal">{{
                    web_home_premium_lisitng.section_description
                }}
                </span>
            </div>
            <a v-if="premiumListings && premiumListings.length > 4" @click="redirectToViewAllPage()"
                class=" cursor-pointer absolute text-sm right-0 top-[45px] z-40  hidden lg:block bg-firoza text-white px-3 py-2 rounded-sm">
                {{ $t('viewAllProducts') }}
            </a>
            <div
                class="recentlisting offer-near-me-scroll recntlisting-grid-home pl-0 md:pl-0   border-gray-200 md:border-b-0 top-category-sec next-prev-arrow-top">
                <VueSlickCarousel class="vcustom-slider" v-bind="settings">
                    <div v-for="listing in premiumListings" :key="listing.offferId"
                        class="mobile-last group box-border overflow-hidden flex px-2 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-t  md:border-t-0 border-r border-b md:border-b-0  border-gray-200 rounded-0 md:rounded-0   relative">
                        <ListingItem :listing="listing" />
                    </div>
                </VueSlickCarousel>
            </div>
        </div>

        <div class="flex justify-center">
            <a @click="redirectToViewAllPage()"
                class="cursor-pointer min-w-[95px] flex justify-center items-center border border-firoza bg-transparent py-1 px-2 rounded  text-firoza font-medium text-sm hover:bg-firoza transition hover:text-white h-9  md:hidden mt-3 mb-0 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-4 viewb-4">
                {{ $t('viewAllProducts') }}
            </a>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
export default Vue.extend({
    name: 'PremiumListings',
    props: ["web_home_premium_lisitng"],
    components: {
        VueSlickCarousel
    },
    data() {
        return {
            loading: false,
            apiUrls: this.$config.apiUrls,
            premiumListings: [],
            seedValue: '',
            featureListingId: [],
            settings: [{
                "arrows": true,
                "dots": false,
                "speed": 500,
                "infinite": true,
                "initialSlide": 0,
                "slidesToShow": 5,
                "slidesToScroll": 5,
                "touchMove": true,
                "swipe": true,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                        }
                    },
                    {
                        "breakpoint": 1023,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                        }
                    },
                    {
                        "breakpoint": 800,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,

                        }
                    },
                    {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,

                        }
                    }
                ]
            }]
        }
    },
    mounted() {
        this.getFeaturedListing()
    },
    methods: {

        redirectToViewAllPage() {
            this.$router.push({ path: this.localePath(`/search`), query: { seedvalue: this.seedValue } })
        },
        async getFeaturedListing() {
            this.loading = true
            const requestPath = `/search/v1/search/random?page=0&size=10&ff=feat_true&aggr=false`
            const featuredListingResponse = await this.$axios.get(requestPath)
                .then((response) => {
                    return response.data
                })
                .catch((error) => {
                    return error.response.data
                })
            this.loading = false
            // console.log('featuredListingResponse:', featuredListingResponse)
            if (featuredListingResponse && featuredListingResponse.success) {
                this.premiumListings = featuredListingResponse.payload?.searchResult
                this.seedValue = featuredListingResponse.payload?.seed

                if (this.premiumListings.length > 0) {
                    for (var i = 0; i < this.premiumListings.length; i++) {
                        this.featureListingId.push(this.premiumListings[i].oid);
                    }
                }

                if(this.featureListingId.length > 0){
                    for (var i = 0; i < this.featureListingId.length; i++) {
                        this.callFeaturedImpressionAnalytics(this.featureListingId[i])
                      //  this.featureListingId.push(this.premiumListings[i].oid);
                    }
                
                }

            }

            //  console.log('premiumListings:', this.premiumListings)
        },

        callFeaturedImpressionAnalytics(lisitngId){
    try {
        const analyticsData = {
          channel_id: 'WEB',
          listing_id: lisitngId,
          click_source: 'home' //user message
        };
       // console.log("analyticsData in loop",analyticsData)
        this.$fire.analytics.logEvent('gintaa_featured_listing_impression', analyticsData)
      } catch (e) {
        
      }
        }



    }
})
</script>
<style scoped>
.top-category-sec .vcustom-slider .slick-next {

    top: 30% !important;

}
</style>