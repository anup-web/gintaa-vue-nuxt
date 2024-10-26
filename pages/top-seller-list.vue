<template>
    <div class="product-details-page pt-[80px] lg:pt-12 view-all-listing ">
        <!--//////////header///////////-->
        <Header />
        <!--////////Breadcrumb//////////-->
        <div class="max-w-[1920px] mx-auto px-4 md:px-8 2xl:px-16 pt-10">
            <breadcrumb :breadcrumb="breadcrumb" />
        </div>
        <div
            class=" max-w-[1920px] mx-auto px-4 md:px-8 2xl:px-16 pt-0 min-h-screen sm:pt-0 md:pt-4 lg:pt-6 xl:pt-6 2xl:pt-6">


            <div class="text-center mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 ">
                <h3
                    class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
                    <span class=""> {{ $t('topseller') }} </span>
                </h3>

            </div>
            <div class="mx-auto pb-14">

                <div v-show="alltopsellerList.length > 0"
                    class="recentlisting recntlisting-grid-home gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
                    <div v-for="(selllerDet, index) in alltopsellerList" :key="index"
                        class="border border-gray-200 rounded-lg bg-white px-2 py-4 shadow-sm">

                        <TopSellerCard :selllerDet="selllerDet" />

                    </div>

                </div>





            </div>

            <div v-show="loading" class=" py-6 flex justify-center w-full">
                <Spinner />
            </div>

            <Trigger @triggerIntersected="loadMore" />
        </div>
        <!--footer section goes here-->
        <Footer />





    </div>
</template>
  
    
    
    
    
    
<script lang="ts">
import Vue from 'vue'
import topSellerCard from '~/components/listings/topSellerCard.vue'


export default Vue.extend({
    components: {
        topSellerCard
    },
    name: 'topsellerlist',
    asyncData() {
        return {

            alltopsellerList: [],
            loading: true,
            page: 0,
            enableSearchMore: true,

        }
    },
    data() {
        return {
            breadcrumb: [{
                name: this.$t('topseller')
            }
            ]
        }
    },

    beforeMount() {
        this.gettopSellerList()
    },
    methods: {
        async gettopSellerList() {
            this.loading = true
            try {

               // console.log("this.page", this.page)
                let url = `/statistics/v1/statistics/offer/top-sellers?&size=10&page=${this.page}`;
                const dataP = this.$axios.$get(url)

                const data = await dataP

               // console.log("data.payload", data.payload)

                if (this.page === 0) {
                    this.alltopsellerList = data.payload
                } else if (data.payload.length > 0) {
                    this.alltopsellerList.push(...data.payload)
                }

                this.enableSearchMore = data.payload.length > 0

                this.loading = false
            } catch (error) {
                if (this.page === 0) {
                    this.alltopsellerList = []
                }
                this.loading = false
                this.enableSearchMore = false
            }
        },

        loadMore() {
          //  console.log("this.page before", this.page)
            if (!this.loading && this.enableSearchMore) {
                this.page++
              //  console.log("this.page after", this.page)
                this.gettopSellerList()
            }
        },
        getLink(uId: any) {
            if (uId) {
                return '/profile/view/' + uId + ''
            }
        },

        tofixedTwoDigit(rating: any) {
            if (rating) {
                return rating.toFixed(1)
            }
        },

        getCountOFFollowers(floowercount: any) {
            if (floowercount > 1 && this.$i18n.locale && this.$i18n.locale === 'en') {
                return true
            }
        }
    }

})

</script>
    
<style scoped>
.recentlisting .recentcardtop:nth-child(6n+0) .group {
    border-right: 0 !important;
}

.recentlisting .recentcardtop:last-child .group {
    border-right: 0 !important;

}
</style>