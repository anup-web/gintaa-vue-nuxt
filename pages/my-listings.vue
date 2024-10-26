<template>
  <div class="product-details-page pt-[80px] lg:pt-12 ">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class=" max-w-[1920px] mx-auto px-4 md:px-8 2xl:px-16 pt-10">
      <Breadcrumb :breadcrumb="breadcrumb" />
    </div>
    <main class="relative flex-grow">
      <div class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16">
        <div  class="flex pt-8 pb-16 lg:pb-20 min-h-[200px] lg:min-h-[450px]">
          <SidebarFilter v-if="totalListCount > 0"   :filter-objects="filterObjects" @clearAll="clearAll" @applyFilter="applyFilter" @initializeFilter="initializeFilter" />
          <div class="w-full lg:-ms-9">
            <div  v-if="totalListCount > 0"  class="flex items-center mb-7 justify-between">
              <div class=" flex-col w-full hidden lg:flex  mr-8 lg:max-w-[500px] 2xl:max-w-[800px]">
                <form class="flex w-full relative rounded-md" role="search">
                  <label for="top-bar-search" class="flex flex-1 items-center py-0.5">
                    <input
                      v-model="search"
                      type="text"
                      autocomplete="off"
                      class="w-full h-full flex item-center appearance-none transition duration-300 ease-in-out text-heading text-sm placeholder-gray-500 overflow-hidden rounded-lg focus:outline-none focus:ring-0 bg-gray-100 ps-10 pe-12 md:ps-14 border border-border-200 focus:border-accent focus:bg-light py-4 px-5"
                      name="search"
                      :placeholder="$t('searchYourListingsHere')"
                      value=""
                      @input="onChangeSearch"
                    >
                  <!-- <input id="top-bar-search" class="text-heading b pl-4 pr-4 outline-none w-full ps-5   bg-skin-full text-skin-base text-sm lg:text-15px rounded-md transition-all  text-gray-500 h-11 bg-gray-100 placeholder-text-gray-500 placeholder-opacity-100"  placeholder="Search" aria-label="top-bar-search"  value="" name="search"> -->
                  </label>
                  <button type="submit" class="w-14 md:w-16 h-full absolute top-0 right-1 flex flex-shrink-0 justify-center items-center focus:outline-none">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="w-5 h-5 text-skin-base ttext-gray-400"><path d="M19.0144 17.9256L13.759 12.6703C14.777 11.4129 15.3899 9.81507 15.3899 8.07486C15.3899 4.04156 12.1081 0.759766 8.07483 0.759766C4.04152 0.759766 0.759766 4.04152 0.759766 8.07483C0.759766 12.1081 4.04156 15.3899 8.07486 15.3899C9.81507 15.3899 11.4129 14.777 12.6703 13.759L17.9256 19.0144C18.0757 19.1645 18.2728 19.24 18.47 19.24C18.6671 19.24 18.8642 19.1645 19.0144 19.0144C19.3155 18.7133 19.3155 18.2266 19.0144 17.9256ZM8.07486 13.8499C4.89009 13.8499 2.2998 11.2596 2.2998 8.07483C2.2998 4.89006 4.89009 2.29976 8.07486 2.29976C11.2596 2.29976 13.8499 4.89006 13.8499 8.07483C13.8499 11.2596 11.2596 13.8499 8.07486 13.8499Z" fill="#b6becb" /></svg>
                  </button>
                </form>
              </div>
              <div v-show="!loading" class="flex-shrink-0  font-medium text-sm text-gray-600 leading-4 md:me-6 ml-4  lg:block mt-0.5 lg:ml-8">
                {{ itemsFoundText }}
              </div>
              <div class="ml-3">
                <a :href="localePath('/matches')" class="w-[138px] py-2 lg:py-3 mr-2 lg:mr-0 rounded-sm text-sm px-2 lg:px-6 2xl:px-6 inline-block text-firoza border-firoza border mb-0 hover:bg-firoza hover:text-white transition-all text-center">{{$t('viewMatches')}}</a>
              </div>
            </div>

            <div v-show="listings.length > 0" class="mylisting-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              <div v-for="listing of listings" :key="listing.offerId + listing.draftOfferId" class="group box-border overflow-hidden flex px-4 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-t border-gray-200 nth-child-3n:border-right-0   relative my-listing-new">
                <ListingItem :listing="listing" type ="mylisting" isMyListing= 'isMyListing' :returnUrl= "returnUrl" :eligibleForFeature="eligibleForFeature" />
              </div>
            </div>

            <div v-show="!loading && listings.length <= 0" class="text-center">
              <div class="flex w-full justify-center">
                <img src="~/assets/images/notfound.svg" alt="notfound" class="w-[245px]">
              </div>
              <div class="w-full flex justify-center items-center pt-3" v-show="totalListCount > 0">
              <div class="font-bold text-xl text-center pt-3 pb-4 text-gray-600">
                {{$t('opsNoItemFound')}}
              </div>
              </div>
             <div class="w-full flex flex-col justify-center items-center pt-3" v-show="totalListCount <= 0">
              
              <p class="font-bold text-xl text-center pt-3 pb-4 text-gray-600">
                {{$t('younoHaveListingNow')}}
              </p>
              <div class="w-full flex justify-center items-center pt-3">
              <a :href="localePath('/listing/item')" class="py-2 rounded-sm text-sm px-8 border-firoza mr-5 inline-block text-firoza  border mb-0 hover:bg-firoza hover:text-white transition-all">List for Free</a>
              </div>
              </div>
              
            </div>

             

            <div v-show="loading" class=" py-6 flex justify-center">
              <Spinner />
            </div>

            <Trigger @triggerIntersected="loadMore" />
          </div>
        </div>
      </div>
    </main>

    <ConfirmDialog />

    <!--footer section goes here-->
    <Footer />
    <div v-if="totalListCount > 0" @click="showMobileFilter = !showMobileFilter">
      <MobileFilter />
    </div>
    <!-- Mobile filter start here -->

    <!--filter options-->
    <div   :class="[showMobileFilter ? '' : 'hidden', 'fixed z-50 inset-0 overflow-hidden']" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div class="absolute inset-0 overflow-hidden">
        <!-- Background overlay, show/hide based on slide-over state. -->
        <!-- <div class="absolute inset-0" aria-hidden="true"></div> -->

        <div class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
          <div class="pointer-events-auto w-screen max-w-md relative">
            <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div class="w-full border-b border-gray-100 flex justify-between items-center relative pe-5 md:pe-7 flex-shrink-0 py-0.5">
                <button class="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60" aria-label="close" @click="showMobileFilter = false">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="text-black"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  ><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292" /></svg>
                </button><h2 class="font-bold text-xl md:text-2xl m-0 text-heading w-full text-center pe-6">
                  {{ $t('filters') }}
                </h2>
              </div>

              <div class="px-6">
                <MobileSearchSidebarFilter   :filter-objects="filterObjects" @clearAll="clearAll" @applyFilter="applyFilter" @initializeFilter="initializeFilter" />
              </div>
<div class="item-found bg-white text-gray-600 border-t border-t-gray-200 mobile-btn fixed z-50 bottom-0 w-full text-center">
                <div class="flex  font-medium text-sm text-gray-600 leading-4 p-4 justify-between items-center">
                  <div class="flex flex-col">
                  <div class="" v-if="loading">Loading... </div>
                    <div v-else class="text-normal text-[12px]">{{ itemsFoundText }} </div>
                    
                    </div>
                    <a href="javascript:void(0)" @click="showMobileFilter = false" class="bg-green text-white px-3 py-3 inline-block text-sm min-w-[130px] rounded-sm text-center">Apply</a>
                </div>
              
              </div>
              <!-- <div class="item-found bg-green text-white fixed z-50 bottom-0 w-full text-center">
                <div class="flex-shrink-0  font-medium text-sm text-white leading-4 p-4">
                  {{ loading ? 'Loading...' : itemsFoundText }}
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'

export default Vue.extend({
  name: 'MyListings',
  middleware: 'authenticated',
  asyncData () {
    return {
      filterObjects: [],
      search: '',
      listings: [],
      totalCount: 0,
      loading: true,
      page: 0,
      enableSearchMore: true,
      searchParams: {},
      showMobileFilter: false,
      cateGoryList:[{}],
      totalListCount:0,
      eligibleForFeature:true,
      returnUrl:'/my-listings'
    }
  },
  data(){
    return {
      authUser : this.$store.state.authUser,
      breadcrumb: [{
        name: this.$t('listing')
      },
      {
        name: this.$t('all')
      }
      ],
    }
  },
  computed: {
    itemsFoundText () {

      if(this.totalCount === 1){
      return this.totalCount > 0 ? `${this.totalCount}` +this.$t('ItemsFoundSe')  : this.$t('noItemFoundSe')
      }else{
      return this.totalCount > 0 ? `${this.totalCount}` +this.$t('MulItemsFoundSe')  : this.$t('noItemFoundSe')
      }
      
    }
  },
  created () {
    this.initializeFilter()
    if (process.client) {
      this.logEvent();
    }
  },
  beforeMount () {
    this.getTotalListingCount()
    this.getListings()
   // this.checkEligibility()
  },
  mounted () {
    this.getAllVerticle()
    this.$store.watch(state => state.dialogs.confirm.delete, (newValue, oldValue) => {
      if (newValue) {
        const draftOfferId = this.$store.state.dialogs.confirm.data.draftOfferId
        if (draftOfferId) {
          this.deleteDraft(draftOfferId)
        }
      }
    })
  },
  methods: {

    async  checkEligibility(){
        try {
        let url = `/subscription/v1/subscription/featured-listing/eligibility`;
        const data = await this.$axios.$get(url);
        console.log("data",data)
        if (data.success) {
          if(data.payload?.eligibleForFeature && data.payload?.listingFeatureCapacity > 0){
            this.eligibleForFeature = true
          }else{
            this.eligibleForFeature = false
          }
        }else{

        }
         
      } catch (error) {
        
        console.log(error);
        return false
      }
           
        },
    async logEvent() {
      try {
        const analyticsData = {
          user_id: this.authUser?.uid,
          channel_id: 'WEB'
        };
        await this.$fire.analytics.logEvent('gintaa_mylistings', analyticsData) 
            
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },
    applyFilter (params) {

      
      this.searchParams = params
      console.log("this.searchParams",this.searchParams)
      this.enableSearchMore = true
      this.page = 0
      this.listings = []
      this.getListings()
    },

  clearAll(){
      if(this.cateGoryList){
        this.cateGoryList.forEach(function(v){ v.selected = false });
        this.initializeFilter()
      }else{
       this.getAllVerticle()
      }
    },
    initializeFilter () {

      //this.getAllVerticle()
      this.filterObjects = [
         {
          name: this.$t('all'),
          type: 'dropdown',
          paramName: 'cids',
          showFilter:false,
          filters: this.cateGoryList
        },
        {
          name: this.$t('listingStatus'),
          type: 'checkbox',
          paramName: 'states',
          filters: [
            {
              name: this.$t('published'),
              value: 'active',
              selected: false
            },
            {
              name: this.$t('draft'),
              value: 'draft',
              selected: false
            },
            {
              name: this.$t('hidden'),
              value: 'hidden',
              selected: false
            },
              {
              name: this.$t('underreview'),
              value: 'review',
              selected: false
            },
              {
              name: this.$t('failed'),
              value: 'failed',
              selected: false
            },
            {
              name: this.$t('soldOut'),
              value: 'completed',
              selected: false
            },
            {
              name: this.$t('blocked'),
              value: 'blocked',
              selected: false
            }
          ]
        },
        {
          name: this.$t('condition_Text'),
          type: 'checkbox',
          paramName: 'itemConditions',
          filters: [
            {
              name: this.$t('usedCondition'),
              value: 'Used',
              selected: false
            },
            // {
            //   name: 'Refurbished',
            //   value: 'refurbished',
            //   selected: false
            // },
            {
              name: this.$t('newCondition'),
              value: 'New',
              selected: false
            }
          ]
        },
        {
          name: this.$t('time_filter'),
          type: 'date',
          paramName: ['startDate', 'endDate'],
          filters: [
            {
              name: this.$t('last_7_day'),
              value: this.$moment().subtract(7, 'days').format('YYYYMMDD'),
              selected: false
            },
            {
              name: this.$t('last_15_day'),
              value: this.$moment().subtract(15, 'days').format('YYYYMMDD'),
              selected: false
            },
            {
              name: this.$t('last_1_month'),
              value: this.$moment().subtract(1, 'months').format('YYYYMMDD'),
              selected: false
            },
            {
              name: this.$t('last_3_month'),
              value: this.$moment().subtract(3, 'months').format('YYYYMMDD'),
              selected: false
            },
            {
              name: this.$t('last_6_month'),
              value: this.$moment().subtract(6, 'months').format('YYYYMMDD'),
              selected: false
            }
          ]
        }
      ]
    },
    async getListings () {
      this.loading = true
      try {
        // for listings
        // if (this.searchParams.hasOwnProperty('states') && this.searchParams.states.includes('completed')) {
        //   this.searchParams['show-completed-offers'] = true
        //   this.searchParams.states = this.searchParams.states.replace(',completed', '').replace('completed', '')
        // } else {
        //   this.searchParams['show-completed-offers'] = false
        // }

       // this.searchParams['show-completed-offers'] = true

        //If no Searchtext then deleting the searchtext Key. 
        if (this.search.trim()) {
        this.searchParams.searchText = this.search
        }else{
        this.searchParams =   _.omit(this.searchParams,'searchText');
        }

        const p = new URLSearchParams(this.searchParams).toString()
        const url = `/offers/v1/offers/filter?${p}&size=12&page=${this.page}&sort=publishedDate`
        const dataP = this.$axios.$get(url)
        this.getListingsCount(p)
        const data = await dataP

        if (this.page === 0) {
          this.listings = data.payload
        } else if (data.payload.length > 0) {
          this.listings.push(...data.payload)
        }

        this.enableSearchMore = data.payload.length > 0

        this.loading = false
      } catch (error) {
        if (this.page === 0) {
          this.listings = []
        }
        this.loading = false
        this.enableSearchMore = false
      }
    },

        async getAllVerticle() {
        try {
          let url = `/offers/v1/offers/user/vertical`;
          const data = await this.$axios.$get(url);
         
          if (data.success) {

          this.cateGoryList = data.payload;
          this.cateGoryList = this.cateGoryList.map((v) => ({
            ...v,
            name: v.label,
            value: v.verticalId,
            selected: false
          }));

          this.cateGoryList.forEach(function(v){ delete v.label ,delete v.verticalId });
          
          //For Zero index all item has inserted ##started ##End
          let zeroIndexValue = {name:this.$t('all'),selected:false,value:''}
          this.cateGoryList.splice(0, 0, zeroIndexValue);
          this.cateGoryList.join()
          // End
      
            
           
            this.initializeFilter()
          } else {

          }
        } catch (error) {
          console.log(error);
          
        }
     
    },
    async getListingsCount (p) {

      try {
     // const url = `/offers/v1/offers/filter/count?${p}&size=12&page=${this.page}&searchText=${this.search}&sort=publishedDate`
       
      const url = `/offers/v1/offers/filter/count?${p}&size=12&page=${this.page}&sort=publishedDate`

       const data = await this.$axios.$get(url)

        this.totalCount = data.payload
      } catch (error) {
        this.totalCount = 0
      }
    },
     async getTotalListingCount () {
      try {
       
      const url = `/offers/v1/offers/filter/count?&size=12&page=${this.page}&sort=publishedDate`

       const data = await this.$axios.$get(url)

        this.totalListCount = data.payload
      } catch (error) {
        this.totalListCount = 0
      }
    },
    loadMore () {
    
      if (!this.loading && this.enableSearchMore) {
        this.page++
        this.getListings()
      }
    },
    onChangeSearch: _.debounce(function () {
      this.applyFilter(this.searchParams)
    }, 800),
    async deleteDraft (draftOfferId) {
      this.listings = this.listings.filter(listing => listing.draftOfferId !== draftOfferId)
      const url = `/offers/v1/draft/offers/${draftOfferId}`
      await this.$axios.$delete(url)
      
      this.logEventAfterDeleteDraft(this.$store.state.dialogs.confirm.data)
    },

   async logEventAfterDeleteDraft(draftData) {
      try {
        const analyticsData = {
          user_id:       this.authUser?.uid,
          channel_id:    'WEB',
          listing_id:    draftData?.draftOfferId,
          listing_type:  draftData?.offerType,
          exchange_mode: draftData?.exchangeMode,
          category_id:   draftData?.category?.categoryId
        };
       
        await this.$fire.analytics.logEvent('gintaa_draft_listing_delete', analyticsData) 
      
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },
  }
})
</script>

<style scoped>
.pe-24 {
    -webkit-padding-end: 6rem;
    padding-inline-end: 6rem;
}
.flex-shrink-0 {
    flex-shrink: 0;
}
.mylisting-grid .group:last-child{
    border-right: 0 !important;
  }

/* .mobilefilter-show .hidden {
  display: block !important;
} */
@media (min-width:320px)  {
  .group:nth-child(2n+0){
    border-right: 0 !important;
  }
  .mylisting-grid .group:nth-child(3), .mylisting-grid .group:nth-child(4), .mylisting-grid .group:nth-child(5){
    border-top: 1px solid rgb(229 231 235) !important;
  }
}
@media (min-width:640px)  {
  .group:nth-child(3n+0){
    border-right: 0 !important;
  }
  .group:nth-child(2n+0){
    border-right: 1px solid rgb(229 231 235) !important;
  }
  }

@media (min-width:1280px)  {

  .group:nth-child(4n+0){
   border-right: 0px solid rgb(229 231 235) !important;
  }
  .group:nth-child(3n+0){
    border-right: 1px solid rgb(229 231 235) !important;
  }

}

@media (min-width:1536px)  {
  .group:nth-child(5n+0){
    border-right: 0 !important;
  }
  .group:nth-child(4n+0){
    border-right: 1px solid rgb(229 231 235) !important;
  }
}
 .mylisting-grid .group:nth-child(1), .mylisting-grid .group:nth-child(2), .mylisting-grid .group:nth-child(3), .mylisting-grid .group:nth-child(4), .mylisting-grid .group:nth-child(5){
    border-top: 0 !important;
  }
@media (max-width:659px)  {
  .mylisting-grid .group:nth-child(3), .mylisting-grid .group:nth-child(4), .mylisting-grid .group:nth-child(5){
    border-top: 1px solid rgb(229 231 235) !important;
  }
}
 .Blocked{
  background: #E80F0F !important;
  color: #fff !important;
}
.Completed{
    background: #F47960 !important;
    color: #fff !important;
}
.mobile-btn {
    box-shadow: 0 0 4px 0 rgb(0 0 0 / 20%);
}

</style>
