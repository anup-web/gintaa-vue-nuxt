<template>
  <div class="product-details-page pt-[80px] lg:pt-12 ">
    <!--//////////header///////////-->
    <Header :fixedFilters="fixedFilters" />


    <!--////////Breadcrumb//////////-->
    <div class=" max-w-[1920px] mx-auto px-4 md:px-8 2xl:px-16 pt-10">
      <Breadcrumb :breadcrumb="breadcrumb" />
    </div>
    <main class="relative flex-grow">
      <div class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16 relative  " @click="searchPageClicked">
        <div class="flex pt-4 lg:pt-8 pb-16 lg:pb-20">
          <!-- <div  v-show="filterObjects.length <= 0" class="flex-shrink-0 pe-24 hidden md:block w-96 " /> -->
          <SearchSidebarFilter v-if="filterObjects.length > 1" :filter-objects="filterObjects"
            @applyFilter="applyFilter" @initializeFilter="initializeFilter" />
          <div class="w-full lg:-ms-9">
            <div
              class="flex flex-col lg:flex-row  items-start lg:items-center mb-3 lg:mb-7 justify-items-start  lg:justify-between">
              <h1 class="text-lg px-4 lg:px-0 lg:text-2xl font-bold text-heading  lg:inline-flex pb-1 capitalize">
                {{ $route.query.searchText || '' }}
              </h1>
              <div class="sorting flex items-center">
                <div v-show="!loading"
                  class="search-count flex-shrink-0 font-normal lg:font-medium text-[10px] lg:text-sm text-gray-600 leading-4 md:me-6  lg:block mt-0.5 ml-4 lg:ml-8">
                  {{ itemsFoundText }}
                </div>

                <!-- v-if="showbackground" -->
                <!-- <div v-if="viewbackground" class="fixed left-40 right-40 w-full bg-black bg-opacity-30 top-[60px] z-40 h-full" ></div>
               -->

                <SearchUpperbarFilter v-show="filterObjects.length > 1" :filter-objects="filterObjects"
                  @applyFilter="applyFilter" @initializeFilter="initializeFilter" @isDropDownOpen="isDropDownOpen"
                  :clicked="clicked" />

              </div>
            </div>

            <!-- <div class="w-full  wear-tabs ">
              <ul class="nav nav-tabs flex flex-row md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 items-center justify-center" id="tabs-tab3"  role="tablist">
                  <li class="nav-item" role="presentation">
                    <a href="#tabs-home3" class="nav-link w-full block text-xs bg-transparent text-white px-3 py-2 border-x-0 border-t-0 border-b-2 border-transparent hover:border-transparent hover:bg-gray-100 focus:border-transparent sm:text-sm sm:px-4 md:text-sm md:px-4 active
                    " id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3"
                      aria-selected="true">Mens Wear</a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a href="#tabs-profile3" class="nav-link w-full block text-xs bg-transparent text-white px-3 py-2 border-x-0 border-t-0 border-b-2 border-transparent hover:border-transparent hover:bg-gray-100 focus:border-transparent sm:text-sm sm:px-4 md:text-sm md:px-4
                    " id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab"
                      aria-controls="tabs-profile3" aria-selected="false">Womans Wear</a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a href="#tabs-messages3" class="nav-link w-full block text-xs bg-transparent text-white px-4 py-2 border-x-0 border-t-0 border-b-2 border-transparent hover:border-transparent hover:bg-gray-100 focus:border-transparent sm:text-sm sm:px-4 md:text-sm md:px-4
                    " id="tabs-messages-tab3" data-bs-toggle="pill" data-bs-target="#tabs-messages3" role="tab"
                      aria-controls="tabs-messages3" aria-selected="false">Kids Wear</a>
                  </li>
              </ul>

              <div class="w-full flex justify-end mb-4">
              <div class="sorting flex items-center">
              <div v-show="!loading" class="search-count flex-shrink-0 font-normal lg:font-medium text-[10px] lg:text-sm text-gray-600 leading-4 md:me-6  lg:block mt-0.5 ml-4 lg:ml-8">
                {{ itemsFoundText }}
              </div>
              <SearchUpperbarFilter v-show="filterObjects.length > 1" :filter-objects="filterObjects" @applyFilter="applyFilter" @initializeFilter="initializeFilter"  @isDropDownOpen="isDropDownOpen" :clicked="clicked"/>
               
              </div>
              </div>

              <div class="tab-content" id="tabs-tabContent3">
                <div class="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
                  Womans Wear
                </div>
                <div class="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                  Womans Wear
                </div>
                <div class="tab-pane fade" id="tabs-messages3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
                  Kids Wear
                </div>
              </div>
            </div>  -->

            <div v-show="listings.length > 0"
              class="mylisting-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              <div v-for="(listing, index) in listings" :key="listing.offerId + listing.draftOfferId + listing.oid"
                class="group box-border overflow-hidden flex px-2 py-4 md:px-4 md:py-5  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 border-r border-t border-gray-200 nth-child-3n:border-right-0   relative">
                <div class="w-full" @click="logEventOnBtnClick(listing.oid, index)">
                  <ListingItem :listing="listing" />
                </div>
              </div>
            </div>


            <div v-show="loading" class="py-6 flex justify-center min-h-[400px]">
              <Spinner />
            </div>


            <Trigger @triggerIntersected="loadMore" />
            <div v-show="!loading && listings.length <= 0" class="text-center min-h-[400px]">
              <div class="flex w-full justify-center">
                <img src="~/assets/images/notfound.svg" alt="notfound" class="w-[245px]">
              </div>
              <div class="font-bold text-xl text-center pt-3 pb-4 text-gray-600">
                {{ $t('oopsNoFound') }}
              </div>
              <p class="text-sm text-gray-600">
                {{ $t('oopsNoFoundPara') }}
                <!-- What you search was unfortunately not found -->
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>

    <!--footer section goes here-->
    <Footer />
    <!--mobile filter clickable-->
    <div @click="showMobileFilter = !showMobileFilter">
      <MobileFilter />
    </div>
    <!-- Mobile filter start here -->

    <!--filter options-->
    <div :class="[showMobileFilter ? '' : 'hidden', 'fixed z-50 inset-0 overflow-hidden']"
      aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div class="absolute inset-0 overflow-hidden">
        <!-- Background overlay, show/hide based on slide-over state. -->
        <!-- <div class="absolute inset-0" aria-hidden="true"></div> -->

        <div class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
          <div class="pointer-events-auto w-screen max-w-md relative">
            <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div
                class="w-full border-b border-gray-100 flex justify-between items-center relative pe-5 md:pe-7 flex-shrink-0 py-0.5">
                <button
                  class="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
                  aria-label="close" @click="showMobileFilter = false">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                    class="text-black" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48"
                      d="M244 400L100 256l144-144M120 256h292" />
                  </svg>
                </button>
                <h2 class="font-bold text-xl md:text-2xl m-0 text-heading w-full text-center pe-6">
                  Filters
                </h2>
              </div>

              <div class="px-6">
                <MobilesidebarFilter :filter-objects="filterObjects" @applyFilter="applyFilter"
                  @initializeFilter="initializeFilter" />
              </div>

              <div
                class="item-found bg-white text-gray-600 border-t border-t-gray-200 mobile-btn fixed z-50 bottom-0 w-full text-center">
                <div class="flex  font-medium text-sm text-gray-600 leading-4 p-4 justify-between items-center">
                  <div class="flex flex-col">
                    <div class="" v-if="loading">Loading... </div>
                    <div v-else class="text-normal text-[12px]">{{ itemsFoundText }} </div>

                  </div>
                  <a href="javascript:void(0)" @click="showMobileFilter = false"
                    class="bg-green text-white px-3 py-3 inline-block text-sm min-w-[130px] rounded-sm text-center">Apply</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'GlobalSearch',
  data() {
    return {
      breadcrumb: [
        {
          name: this.$t('search')
        }
      ],
      filterObjects: [],
      search: '',
      listings: [],
      loading: true,
      itemsFoundText: '',
      page: 0,
      enableSearchMore: true,
      searchParams: {},
      showMobileFilter: false,
      appliedFilters: null,
      categories: [],
      fixedFilters: null,
      maxPrice: 0,
      minPrice: 0,
      allFilters: [],
      totalCount: 0,
      sortParamsdata: '',
      viewbackground: false,
      clicked: '',
      seedvalue: '',
      viewallFeatureList: false,
      enablePremiumSearch: true
    }
  },
  async fetch() {
    // await this.getListings()
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
  },
  created() {
    this.initializeFilter()
  },
  beforeMount() {

    if (this.$route.query.seedvalue) {
      this.seedvalue = this.$route.query.seedvalue
    }

    if (this.$route.query.viewallFeatureList) {
      this.viewallFeatureList = true
    }

    if (this.$route.query?.searchText) {
      this.sortParamsdata = ''
    } else {
      this.sortParamsdata = '&sort=publishedDate,desc'
    }
    // this.getListings()

    this.getAllLisitngs()


  },
  mounted() {
    if (this.$route.query?.catgoryName) {
      this.breadcrumb.push({
        name: this.$route.query?.catgoryName
      })
    }

  },
  methods: {
    async getAllLisitngs() {

      let [pListing, listing] = await Promise.all([this.getPreiumList(), this.getListings()]);


      if (pListing.length) {
        this.listings.push(...pListing)
      }
      if (listing.length) {
        this.listings.push(...listing)
      }

    },
    async logEventOnBtnClick(oId, ind) {
      if (this.$route.query.searchText && this.$route.query.searchText !== '') {
        try {
          const analyticsData = {
            channel_id: 'WEB',
            user_id: this.authUser ? this.authUser?.uid : null,
            query_text: this.$route.query.searchText,
            listing_position: ind,
            listing_id: oId,

          };
          await this.$fire.analytics.logEvent('gintaa_search_listing_click', analyticsData)
        } catch (e) {
          console.log('Gintaa analytics error:=====', e);
        }
      }

    },
    async logEvent(searchData) {

      try {
        const analyticsData = {
          channel_id: 'WEB',
          search_user_id: searchData?.search_user_id, //current userid
          search_user_name: searchData?.search_user_name, //current user name
          query_text: searchData?.query_text,
          category_id: searchData?.category_id,
          facets: [], // string[ ]
        };
        await this.$fire.analytics.logEvent('gintaa_search', analyticsData)
        console.log('Gintaa analytics event log successfully');
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },

    async logEventWithSearchText(searchData) {

      try {
        //console.log('=====searchData:', searchData);
        const analyticsData = {
          channel_id: 'WEB',
          user_id: searchData?.user_id, //current userid
          query_text: searchData?.query_text
        };
        await this.$fire.analytics.logEvent('gintaa_search_query', analyticsData)
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },
    applyFilter(params, sortParamsdata) {
      this.sortParamsdata = sortParamsdata
      this.searchParams = params
      this.enableSearchMore = true
      this.enablePremiumSearch = true
      this.listings = []
      this.page = 0
      this.totalCount = 0
      // this.getListings()
      this.getAllLisitngs()
    },
    initializeFilter() {
      this.filterObjects = []
    },
    prepareFilter_old() {
      if (this.filterObjects.length > 0) {
        return
      }
      try {
        if (this.primaryFacets && this.primaryFacets.length > 0) {
          this.primaryFacets.forEach((pFacet) => {
            const filterObj = {
              name: pFacet.key,
              type: 'checkbox',
              paramName: pFacet.key,
              filters: []
            }

            if (pFacet.secondaryFacets && pFacet.secondaryFacets.length > 0) {
              pFacet.secondaryFacets.forEach((sFacet) => {
                const filter = {
                  name: sFacet.key,
                  value: sFacet.key,
                  selected: false
                }

                filterObj.filters.push(filter)
              })
            }

            if (filterObj.filters.length > 0) {
              this.filterObjects.push(filterObj)
            }
          })
        }
      } catch (e) {
        console.log(e)
      }
    },
    prepareFilter() {
      if (this.filterObjects.length > 0) {
        return
      }
      try {

        const filterObj = {
          name: "Sort",
          paramName: "sort",
          showFilter: false,
          type: "sortfilter",
          filters: [
            { count: 923, name: this.$t('relevance'), selected: this.$route.query?.searchText ? true : false, show: this.$route.query.searchText ? true : false, type: 'sortlist', value: "relevance" },
            { count: 923, name: this.$t('priceLowToHigh'), selected: false, type: 'sortlist', show: true, value: "unitOfferValuation,asc" },
            { count: 923, name: this.$t('priceHighToLow'), selected: false, type: 'sortlist', show: true, value: "unitOfferValuation,desc" },
            { count: 923, name: this.$t('newest'), selected: this.$route.query?.searchText ? false : true, show: true, type: 'sortlist', value: "publishedDate,desc" }
          ]

        }
        this.filterObjects.push(filterObj)
        if (this.allFilters && this.allFilters.length > 0) {
          this.allFilters.forEach((pFacet) => {
            if (pFacet.type.toLowerCase() === 'checkbox' || pFacet.type.toLowerCase() === 'dropdown' || pFacet.type.toLowerCase() === 'radio') {
              const filterObj = {
                name: pFacet.name,
                type: pFacet.type.toLowerCase(),
                paramName: pFacet.queryProperty,
                filters: [],
                showFilter: false // this is for dropdown only
              }

              if (pFacet.values && pFacet.values.length > 0) {
                pFacet.values.forEach((sFacet) => {
                  const filter = {
                    id: pFacet.type?.toLowerCase(),
                    name: sFacet.name,
                    value: sFacet.queryValue,
                    count: sFacet.count,
                    selected: false
                  }

                  filterObj.filters.push(filter)
                })
              }

              if (filterObj.filters.length > 0) {
                this.filterObjects.push(filterObj)
              }
            } else if (pFacet.type.toLowerCase() === 'slider' && pFacet.name.toLowerCase() === 'price') {

              // Start Process selected range //
              let selectedPriceFilter = this.appliedFilters && this.appliedFilters.pr ? this.appliedFilters.pr : null

              let selectedPriceRange = []
              if (selectedPriceFilter) {
                selectedPriceRange = selectedPriceFilter.split('::')
                pFacet.range.minValue = +selectedPriceRange[0]
                pFacet.range.maxValue = +selectedPriceRange[1]
              } else {
                selectedPriceRange = [pFacet.range.minValue, pFacet.range.maxValue]
              }
              // End Process selected range //

              const filterObj = {
                name: pFacet.name,
                type: pFacet.type.toLowerCase(),
                paramName: pFacet.queryProperty,
                range: pFacet.range,
                filters: [],
                selectedRange: selectedPriceRange //[pFacet.range.minValue, pFacet.range.maxValue]
              }
              this.filterObjects.push(filterObj)
            }
          })
        }
      } catch (e) {
        console.log(e)
      }
    },
    async getListings() {
      this.loading = true
      let listings = []
      try {
        const searchText = this.$route.query.searchText || ''

        let p = ''
        if (this.searchParams.f) {
          p = new URLSearchParams(this.searchParams).toString()
        } else {
          if (this.$route.query.f) {
            const f = this.$route.query.f
            p = `f=${f}`
          }

        }

        // process cid
        let cidParams = ''
        if (this.$route.query.cid) {
          cidParams = `&fcid=${this.$route.query.cid}`
        }

        if (this.$route.query.fcid) {
          cidParams = `&fcid=${this.$route.query.fcid}`
        }

        // process searchText
        let searchParams = ''
        if (this.$route.query.searchText) {
          searchParams = `&q=${this.$route.query.searchText}`
          const searchData = {
            channel_id: 'WEB',
            user_id: this.authUser ? this.authUser?.uid : null,
            query_text: this.$route.query.searchText,

          };
          this.logEventWithSearchText(searchData)
        }

        let searchFrom = ''
        if (this.$route.query.src) {
          searchFrom = `&src=${this.$route.query.src}`
        } else {
          searchFrom = `&src=search`
        }

        if (this.$route.query.seedvalue) {
          this.seedvalue = this.$route.query.seedvalue
        }

        if (this.$route.query.viewallFeatureList) {
          this.viewallFeatureList = true
        }

        // added For Home page ff
        let ffvalue = ''
        if (this.$route.query.ff) {
          const ff = this.$route.query.ff
          ffvalue = `&ff=feat_false~${ff}`
        } else {
          ffvalue = `&ff=feat_false`
        }

        const searchData = {
          channel_id: 'WEB',
          search_user_id: '',
          search_user_name: '', //current user name
          query_text: this.$route.query.searchText,
          category_id: cidParams,
          facets: this.convertFacetsToArray(this.searchParams.f) // string[ ]
        };

        if (this.authUser) {
          searchData.search_user_id = this.authUser?.uid
          searchData.search_user_name = this.authUser?.displayName
        }
        this.logEvent(searchData)

        let url = ''

        console.log("searchText", searchText)

        if (this.seedvalue) {
          url = `/search/v1/search/random?${p}${searchFrom}${searchParams}&page=${this.page}${cidParams}${this.sortParamsdata}&size=12&ff=feat_true&aggr=true&seed=${this.seedvalue}`
        } else if (this.viewallFeatureList) {
          url = `/search/v1/search/random?${p}${searchFrom}${searchParams}&page=${this.page}${cidParams}${this.sortParamsdata}&size=12&ff=feat_true&aggr=true`
        } else if (searchText) {
          url = `/search/v1/search?${p}${searchFrom}${ffvalue}${searchParams}&page=${this.page}${cidParams}&size=12${this.sortParamsdata}`
        } else {
          url = `/search/v1/search?${p}${searchFrom}${ffvalue}${searchParams}&page=${this.page}${cidParams}&size=12${this.sortParamsdata}`
        }

        const data = await this.$axios.$get(url)

        if (this.page === 0) {

          // if(this.listings.length > 0 ){
          // this.listings.push(...data.payload.searchResult)
          // }else{
          // this.listings = data.payload.searchResult
          // }

          listings = data.payload.searchResult




          //  set Filters
          this.appliedFilters = data.payload.appliedFilters
          this.categories = data.payload.categories

          this.fixedFilters = data.payload?.fixedFilters.hasOwnProperty('cid') ? data.payload?.fixedFilters : data.payload?.appliedFilters
          this.maxPrice = data.payload.maxPrice
          this.minPrice = data.payload.minPrice
          this.allFilters = data.payload.allFilters


          this.totalCount = data.payload.count

          this.prepareFilter()
        } else if (data.payload.searchResult.length > 0) {
          // this.listings.push(...data.payload.searchResult)
          listings = data.payload.searchResult
        } else {
          this.enableSearchMore = false
        }
        this.loading = false

      } catch (error) {
        console.log(error)
        if (this.page === 0) {
          // this.listings = []
          listings = []
        }
        this.enableSearchMore = false
        this.loading = false
      }
      this.itemsFoundText = this.totalCount > 0 ? (this.totalCount === 1 ? `${this.totalCount}` + this.$t('ItemsFoundSe') : `${this.totalCount}` + this.$t('MulItemsFoundSe')) : this.$t('noItemFoundSe')
      return listings
    },

    async getPreiumList() {

      //   console.log("this.seedvalue",this.seedvalue)
      const searchText = this.$route.query.searchText || ''

      if (!this.enablePremiumSearch || this.seedvalue || this.viewallFeatureList || searchText) {
        return []
      }



      let p = ''
      if (this.searchParams.f) {
        p = new URLSearchParams(this.searchParams).toString()
      } else {
        if (this.$route.query.f) {
          const f = this.$route.query.f
          p = `f=${f}`
        }

      }

      // process cid
      let cidParams = ''
      if (this.$route.query.cid) {
        cidParams = `&fcid=${this.$route.query.cid}`
      }

      if (this.$route.query.fcid) {
        cidParams = `&fcid=${this.$route.query.fcid}`
      }

      // process searchText
      let searchParams = ''

      let searchFrom = ''
      if (this.$route.query.src) {
        searchFrom = `&src=${this.$route.query.src}`
      } else {
        searchFrom = `&src=search`
      }

      if (this.$route.query.seedvalue) {
        this.seedvalue = this.$route.query.seedvalue
      }

      if (this.$route.query.viewallFeatureList) {
        this.viewallFeatureList = true
      }

      // added For Home page ff
      let ffvalue = ''
      if (this.$route.query.ff) {
        const ff = this.$route.query.ff
        ffvalue = `&ff=feat_true~${ff}`
      } else {
        ffvalue = `&ff=feat_true`
      }

      try {
        let purl = `/search/v1/search/random?${p}${searchFrom}${ffvalue}${searchParams}&page=${this.page}${cidParams}&size=2${this.sortParamsdata}`
        const data = await this.$axios.$get(purl);
       // console.log("data", data)
        if (data.payload.searchResult.length === 0) {
          this.enablePremiumSearch = false
        }
        return data.payload.searchResult
      } catch (error) {

        console.log(error);
        return []
      }

      return []


    },
    loadMore() {
      if (!this.loading && this.enableSearchMore) {
        this.page++
        // this.getListings()
        this.getAllLisitngs()
      }
    },
    convertFacetsToArray(facets) {
      if (!facets) {
        return []
      }
      // console.log("facets",facets)
      let facetsArr = decodeURI(facets).split('~');
      let facetsObj = {};
      facetsArr.map((item) => {
        let items = item.split('_');
        facetsObj[items[0]] = items[1].split('|');
      });
      return facetsObj;
    },

    isDropDownOpen(params) {
      console.log("params")
      this.viewbackground = params
    },

    searchPageClicked() {
      console.log('clicked')
      this.clicked = true
    }


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

.mylisting-grid .group:last-child {
  border-right: 0 !important;
}

/* .mobilefilter-show .hidden {
  display: block !important;
} */
@media (min-width:320px) {
  .group:nth-child(2n+0) {
    border-right: 0 !important;
  }

  .mylisting-grid .group:nth-child(3),
  .mylisting-grid .group:nth-child(4),
  .mylisting-grid .group:nth-child(5) {
    border-top: 1px solid rgb(229 231 235) !important;
  }
}

@media (min-width:640px) {
  .group:nth-child(3n+0) {
    border-right: 0 !important;
  }

  .group:nth-child(2n+0) {
    border-right: 1px solid rgb(229 231 235) !important;
  }
}

@media (min-width:1280px) {

  .group:nth-child(4n+0) {
    border-right: 0px solid rgb(229 231 235) !important;
  }

  .group:nth-child(3n+0) {
    border-right: 1px solid rgb(229 231 235) !important;
  }

}

@media (min-width:1536px) {
  .group:nth-child(5n+0) {
    border-right: 0 !important;
  }

  .group:nth-child(4n+0) {
    border-right: 1px solid rgb(229 231 235) !important;
  }

  .mylisting-grid .group:nth-child(1),
  .mylisting-grid .group:nth-child(2),
  .mylisting-grid .group:nth-child(3),
  .mylisting-grid .group:nth-child(4),
  .mylisting-grid .group:nth-child(5) {
    border-top: 0 !important;
  }
}

@media (max-width:659px) {

  .mylisting-grid .group:nth-child(3),
  .mylisting-grid .group:nth-child(4),
  .mylisting-grid .group:nth-child(5) {
    border-top: 1px solid rgb(229 231 235) !important;
  }

  @media (max-width:1280px) {
    .pe-24 {
      -webkit-padding-end: 4rem !important;
      padding-inline-end: 4rem !important;
    }
  }
}

.mobile-btn {
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 20%);
}

.wear-tabs .nav-tabs .nav-link {
  color: #2e2e2e;
  border-color: #999999;
}


.wear-tabs .nav-tabs .nav-link.active {
  color: #48CEF3;
  border-color: #48CEF3;
}
</style>