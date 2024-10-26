<template>
  <div class="product-details-page pt-[80px] lg:pt-12">
    <!-- <fullPageLoader v-if="loading" /> -->

    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
     <div class=" max-w-[1920px] mx-auto px-4 md:px-8 2xl:px-16 pt-10">
      <Breadcrumb :breadcrumb="breadcrumb" />
    </div>

    <!-- <fullPageLoader v-if="loading" /> -->

    <main class="relative flex-grow">
      <div class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16">
        <div class="flex pt-4 lg:pt-8 pb-16 lg:pb-20">
          <RandomSearchSidebarFilter
            :filter-objects="filterObjects"
            :initialFilterObj="filterObjects"
            :appliedFilters = "appliedFilters"
            @applyFilter="applyFilter"
            @initializeFilter="initializeFilter"
          />
          
          <div class="w-full lg:-ms-9 min-h-[500px] pl-6">
              <div
            v-show="!loading"
            class="
              flex-shrink-0
              font-normal
              lg:font-medium
              text-[10px]
              lg:text-sm
              text-gray-600
              leading-4
              md:me-6
              lg:hidden
              mt-0.5
              ml-4
              lg:ml-8 hidden
            "
          >
            {{ itemsFoundText }}
          </div>
          
          <!-- <div class="w-full flex justify-end pr-4 sm:pr-4 md:pr-0 lg:pr-0 xl:pr-0 2xl:pr-0">
                <SearchUpperbarFilter v-show="filterObjects.length > 1" :filter-objects="filterObjects" @applyFilter="applyFilter" @initializeFilter="initializeFilter"/>
           </div> -->
          
            <div v-if="allRandomSearchList.length" class="mx-auto pb-14">
              <div
                
                class="
                  recentlisting
                  grid grid-cols-1
                  sm:grid-cols-1
                  lg:grid-cols-1
                  2xl:grid-cols-1
                "
              >
                <randomListingCard
                  v-for="listing in allRandomSearchList"
                  :key="listing.offferId"
                  :listing="listing"
                />
              </div>
            </div>

            <div
              v-show="!loading && allRandomSearchList.length <= 0"
              class="text-center min-h-[400px]"
            >
              <div class="flex w-full justify-center">
                <img src="~/assets/images/notfound.svg" alt="notfound" class="w-[245px]" />
              </div>
              <div
                class="font-bold text-xl text-center pt-3 pb-4 text-gray-600"
              >
                {{ $t("oopsNoFound") }}
              </div>
              <p class="text-sm text-gray-600">
                {{ $t("oopsNoFoundPara") }}
                <!-- What you search was unfortunately not found -->
              </p>
            </div>

            <Trigger @triggerIntersected="loadMore" />

            <div v-show="randomloading" class="py-6 flex justify-center">
              <Spinner />
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
    <!-- Mobile filter start here v-if="showMobileFilter"-->
    <div  :class="[showMobileFilter ? '' : 'hidden', 'fixed z-50 inset-0 overflow-hidden']" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
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
                  Filters
                </h2>
              </div>

              <div class="px-6">
                <MobilesidebarRandomSearchFilter :appliedFilters = "appliedFilters" :filter-objects="filterObjects" @applyFilter="applyFilter" @initializeFilter="initializeFilter" />
              </div>

              <div class="item-found bg-green text-white fixed z-50 bottom-0 w-full text-center">
                <div class="flex-shrink-0  font-medium text-sm text-white leading-4 p-4">
                  {{ loading ? 'Loading...' : itemsFoundText }}
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
import Vue from "vue";

import randomListingCard from "../components/listings/randomListingCard.vue";

export default Vue.extend({
  name: "ViewAll",
  components: { randomListingCard },
  data() {
    return {
      breadcrumb: [
        {
          name: "All Products",
        },
      ],
      randomloading: true,
      loading: true,
      apiUrls: this.$config.apiUrls,
      allRandomSearchList: [],
      enableSearchMore: true,
      page: 0,
      seed: "",
      seedvalue: "",
      appliedFilters: null,
      categories: [],
      fixedFilters: null,
      allFilters: [],
      filterObjects: [],
      searchParams: {},
      itemsFoundText: "",
      totalCount: 0,
      showMobileFilter: false,
      sortParamsdata:'&sort=publishedDate,desc',
      cid:'',
      filteredCategory:''
    };
  },
  created() {
    this.initializeFilter();
  },
  beforeMount (){
   this.getAllVerticle()
  },
  mounted() {
    this.getallList();
    
  },
  methods: {

        async getAllVerticle() {
        try {
          let url = `/categories/v1/verticals`;
          const data = await this.$axios.$get(url);
         if (data.success) {
          this.cateGoryList = data.payload;
          this.cateGoryList = this.cateGoryList.map((v) => ({
            ...v,
            name: v.label,
            cid: v.verticalId,
            selected: false,
            value:v.verticalId,
          }));

           this.cateGoryList.forEach(function(v){ delete v.label ,delete v.verticalId });
          } else {

          }
        } catch (error) {
          console.log(error);
          
        }
     
    },
    async getallList() {
    
      this.randomloading = true;
     //  this.loading =  true;
      try {
        if (this.seed && this.page !== 0) {
          this.seedvalue = `&seed=${this.seed}`;
        } else {
          this.seedvalue = ``;
        }

       // console.log("this.searchParams.f",this.searchParams.f)
        let p = "";
        if (this.searchParams.f) {
          this.seedvalue = `&seed=${this.seed}`;
          p = new URLSearchParams(this.searchParams)
          p = p.toString();
          p = `&${p}`;
        } else {
        
        }
         const url = `/search/v1/search?&page=${this.page}${this.sortParamsdata}&size=20${p}${this.cid}&i18nReqd=true`;
        //const url = `/search/v1/search/random?page=${this.page}&size=20${this.seedvalue}${p}`;
        const data = await this.$axios.$get(url);

        // if(this.cid && this.filteredCategory && (this.cid === this.filteredCategory)){
        //   this.filterObjects = []
        // }
        if (data.payload) {
          this.seed = data.payload.seed;
        }
        if (this.page === 0) {
          this.appliedFilters = data.payload?.appliedFilters;
          this.allFilters = data.payload?.allFilters;
          this.prepareFilter();
          this.allRandomSearchList = data.payload.searchResult;
        } else if (data.payload.searchResult.length > 0) {
          this.allRandomSearchList.push(...data.payload.searchResult);
        }


         if(this.page === 0 && !this.searchParams.f ){
         // console.log("page size zero")
          this.filterObjects = []
          this.prepareFilter();
        }
       
        this.enableSearchMore = data.payload.searchResult.length > 0;
        this.totalCount = this.totalCount + data.payload.searchResult.length;

        this.randomloading = false;
        this.loading = false;
      } catch (error) {
        if (this.page === 0) {
          this.allRandomSearchList = [];
        }
        this.enableSearchMore = false;
        console.log(error);
        this.randomloading = false;
      }
      this.itemsFoundText =
        this.totalCount > 0
          ? `${this.totalCount} Items Found`
          : this.$t("noItemFoundSe");
    },

    applyFilter(params,selectedCategory) {

    //  console.log("params--------",params,selectedCategory)

      if(params?.clearFilter && selectedCategory?.clearCategory){
        this.searchParams = ''
        this.cid = ''
      }
      if(selectedCategory && selectedCategory['&fcid=']){
        this.searchParams = ''
        this.cid =  `${"&fcid=" +  selectedCategory['&fcid=']}`
      }
    
      this.sortParamsdata = '&sort=publishedDate,desc'
      this.searchParams = params;
      this.enableSearchMore = true;
      this.listings = [];
      this.page = 0;
      this.totalCount = 0;
      this.getallList();
    },
    initializeFilter() {
      this.filterObjects = [];
      this.getallList();
    },

    prepareFilter() {
         
           
      if (this.filterObjects.length > 0) {
       // this.filterObjects = [];
        return;
      }
      try {

          const filterObj = {
                   name: "Sort",
                   paramName: "sort",
                   showFilter: false,
                   type: "sortfilter",
                  filters: [
                    {count: 923,name: "Relevance",selected: this.$route.query?.searchText ? true:false,show:this.$route.query.searchText?true:false ,type:'sortlist',value: "relevance"},
                    {count: 923,name: "Price : Low to High",selected: false,type:'sortlist',show:true,value: "unitOfferValuation,asc"},
                    {count: 923,name: "Price : High to Low",selected: false,type:'sortlist',show:true,value: "unitOfferValuation,desc"},
                    {count: 923,name: "Newest First",selected: this.$route.query?.searchText? false:true, show:true ,type:'sortlist',value: "publishedDate,desc"}
                   ]
                
              }
        const CategoryList = {
          name: this.$t('listinig_category'),
          type: 'dropdown',
          paramName: 'cid=',
          showFilter:false,
          filters: this.cateGoryList
        }

        this.filterObjects.push(filterObj)
       // if(CategoryList.length > 0){
         this.filterObjects.push(CategoryList)
       // }
       

        if (this.allFilters && this.allFilters.length > 0) {
          this.allFilters.forEach((pFacet) => {
            if (
              pFacet.type.toLowerCase() === "checkbox" ||
              pFacet.type.toLowerCase() === "dropdown" ||
              pFacet.type.toLowerCase() === "radio"
            ) {
              const filterObj = {
                name: pFacet.name,
                type: pFacet.type.toLowerCase(),
                paramName: pFacet.queryProperty,
                filters: [],
                showFilter: false, // this is for dropdown only
              };

              if (pFacet.values && pFacet.values.length > 0) {
                pFacet.values.forEach((sFacet) => {
                  const filter = {
                    name: sFacet.name,
                    value: sFacet.queryValue,
                    count: sFacet.count,
                    selected: false,
                  };

                  filterObj.filters.push(filter);
                });
              }

              if (filterObj.filters.length > 0) {
                this.filterObjects.push(filterObj);
              }
            } else if (pFacet.type.toLowerCase() === "slider" && pFacet.name.toLowerCase() === 'price') {
              const filterObj = {
                name: pFacet.name,
                type: pFacet.type.toLowerCase(),
                paramName: pFacet.queryProperty,
                range: pFacet.range,
                filters: [],
                selectedRange: [pFacet.range.minValue, pFacet.range.maxValue],
              };
              this.filterObjects.push(filterObj);
            }
            
          });
        }
      } catch (e) {
        console.log(e);
      }
    },



    loadMore() {
     
      if (!this.randomloading && this.enableSearchMore) {
        this.page++;
        this.getallList();
      }
    },
  },
});
</script>
<style scoped>
/* @media (min-width: 1024px) {
  .recentlisting .recentcardtop:nth-child(5n+0) .group{
    border-right: 0 !important;
    
}
} */
.recentlisting .recentcardtop:nth-child(6n + 0) .group {
  border-right: 0 !important;
}
/* @media (min-width: 1536px) {
  .recentlisting .recentcardtop:nth-child(6n+0) .group{
    border-right: 0 !important;
    
}
.recentlisting .recentcardtop:nth-child(5n+0) .group{
    border-right: 1px solid #000 !important;
}
} */

.recentlisting .recentcardtop:last-child .group {
  border-right: 0 !important;
}
.pe-24 {
    -webkit-padding-end: 6rem;
    padding-inline-end: 6rem;
}
@media (max-width:1023px)  {
    .pe-24 {
    -webkit-padding-end: 3rem !important;
    padding-inline-end: 3rem !important;
}
}
</style>