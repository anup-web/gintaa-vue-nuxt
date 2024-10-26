<template>
  <div class="product-details-page pt-[80px] lg:pt-12 ">
    <!--//////////header///////////-->
    <Header />
    <!--////////Breadcrumb//////////-->
    <div class=" max-w-[1920px] mx-auto px-4 md:px-8 2xl:px-16 pt-10">
      <Breadcrumb :breadcrumb="breadcrumb" />
    </div>

    <main class="relative flex-grow">
      <div class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 min-h-[400px]">
        <div class="flex pt-4 lg:pt-8 pb-16 lg:pb-20">
          
          <SidebarFilter v-if="allOffrCount > 0" v-show="showsideFilter" :filter-objects="filterObjects" @applyFilter="applyFilter" @initializeFilter="initializeFilter" />
          <div   class="w-full lg:-ms-9">
            <div  v-if="allOffrCount> 0 && showsideFilter"  class="flex flex-col lg:flex-row items-center mb-7 justify-between">
              <div    class="flex flex-col w-full ml-3 lg:ml-0 lg:mr-10 lg:max-w-[650px] 2xl:max-w-[800px]">
                <form class="flex w-full relative rounded-md" role="search">
                  <label for="top-bar-search" class="flex flex-1 items-center py-0.5">
                    <input
                      id=""
                      v-model="search"
                      type="text"
                      autocomplete="off"
                      class="w-full h-full flex item-center appearance-none transition duration-300 ease-in-out text-heading text-sm placeholder-gray-500 overflow-hidden rounded-lg focus:outline-none focus:ring-0 bg-gray-100 ps-10 pe-12 md:ps-14 border border-border-200 focus:border-accent focus:bg-light py-4 px-5"
                      name="search"
                      :placeholder=" $t('searchOfferHere') "
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
              <div class="flex lg:justify-end items-start lg:items-center w-full justify-start">
                <div class="flex-shrink-0  font-medium text-sm text-gray-600 leading-4 md:me-6 ml-4  lg:block mt-0.5 lg:ml-8">
                  {{ itemsFoundText }}
                </div>

<div v-show="offers.length > 0"  class="hidden items-center ml-5 xl:flex  grid-list-view-offer">
                      <a  class="flex justify-center items-center  w-10 h-10 mr-1 cursor-pointer" :class= "{'grid-active': setGridActiveClass}" @click="makeClassActive('grdBtn')">
                      <!-- <svg width="25" height="24" viewBox="0 0 26 25" fill="none" >
                          <rect width="10" height="10" rx="2" fill="black" fill-opacity="0.3"/>
                          <rect y="15" width="10" height="10" rx="2" fill="black" fill-opacity="0.3"/>
                          <rect x="16" width="10" height="10" rx="2" fill="black" fill-opacity="0.3"/>
                          <rect x="16" y="15" width="10" height="10" rx="2" fill="black" fill-opacity="0.3"/>
                          </svg> --><svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						  <path d="M14 20.4V14.6C14 14.2686 14.2686 14 14.6 14H20.4C20.7314 14 21 14.2686 21 14.6V20.4C21 20.7314 20.7314 21 20.4 21H14.6C14.2686 21 14 20.7314 14 20.4Z" stroke="currentColor" stroke-width="1.5"></path>
						  <path d="M3 20.4V14.6C3 14.2686 3.26863 14 3.6 14H9.4C9.73137 14 10 14.2686 10 14.6V20.4C10 20.7314 9.73137 21 9.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="currentColor" stroke-width="1.5"></path>
						  <path d="M14 9.4V3.6C14 3.26863 14.2686 3 14.6 3H20.4C20.7314 3 21 3.26863 21 3.6V9.4C21 9.73137 20.7314 10 20.4 10H14.6C14.2686 10 14 9.73137 14 9.4Z" stroke="currentColor" stroke-width="1.5"></path>
						  <path d="M3 9.4V3.6C3 3.26863 3.26863 3 3.6 3H9.4C9.73137 3 10 3.26863 10 3.6V9.4C10 9.73137 9.73137 10 9.4 10H3.6C3.26863 10 3 9.73137 3 9.4Z" stroke="currentColor" stroke-width="1.5"></path>
						</svg>
                     </a>
                     <a class="flex justify-center items-center  w-10 h-10 cursor-pointer " :class= "{'grid-active': setListActiveClass}" @click="makeClassActive('listBtn')">
                      <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8 6L20 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
							<path d="M4 6.01L4.01 5.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
							<path d="M4 12.01L4.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
							<path d="M4 18.01L4.01 17.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
							<path d="M8 12L20 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
							<path d="M8 18L20 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
						</svg>
                      <!-- <svg width="30" height="25" viewBox="0 0 24 14" fill="none" >
                            <path d="M0 8H2.66667V5.33333H0V8ZM0 13.3333H2.66667V10.6667H0V13.3333ZM0 2.66667H2.66667V0H0V2.66667ZM5.33333 8H24V5.33333H5.33333V8ZM5.33333 13.3333H24V10.6667H5.33333V13.3333ZM5.33333 0V2.66667H24V0H5.33333Z" fill="rgb(156 163 175)"/>
                            </svg> -->
                     </a>
                </div>


                
              </div>
            </div>
            <div v-show="offers.length > 0" class="moneycardoffer inmoney grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 "  :class="[setGridActiveClass ? 'xl:grid-cols-2' : 'xl:grid-cols-1']">
              <div v-for="offer of offers" :key="offer.dealRefId">
                <OfferListItem :offer="offer" class="myofferlist" :class="offer.currentState === 'EXPIRED' ? 'expired-offer' : ''" />
              </div>
              <router-link to="/cart/seller-buy-step-1">
              <div class="group box-border overflow-hidden flex p-3  cursor-pointer pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5  shadow relative myofferlist">
                <div class="w-full flex justify-between mb-4">
                      <div class="flex flex-col">
                     <div class="text-sm text-gray-700 font-medium">Order id - 123456789 </div>
                     <div class="text-sm text-[11px]">20/07/21, 10:30 am</div>
                    </div>
                    <div class="text-sm text-green font-medium">Sell - (new order)</div>
                 </div>
                 <div class="w-full flex items-center justify-between mb-4">
                  <a href="/my-profile" class="inline-block " target="_blank">
                                        <div class="flex items-center">
                                              <div class="h-10 w-10  bg-gray-200 flex items-center justify-center rounded-full mr-2 relative">
                                                  <img src="https://dev.cdn.gintaa.com/users/q00HIDbr9KeRjQopN8z8koVLff73/avatar/thumbs/6PIa37aqxdndtcvHhkVPFc_ui_200x200.jpg" alt="Tushar" class="w-10 h-10 rounded-full">
                                              </div>
                                              <div class="flex flex-col">
                                                    <div class="text-gray-700 text-[12px] font-medium"> Rakesh Mondal</div>
                                                    <div class="text-gray-700 text-[11px]"> (You) </div>
                                              </div>
                                              
                                        </div>
                    </a>
                    <a href="/my-profile" class="inline-block " target="_blank">
                                        <div class="flex items-center">
                                              <div class="flex flex-col">
                                                    <div class="text-gray-700 text-[12px] font-medium"> Supradip Chkrabortty</div>                                                    
                                              </div>
                                              <div class="h-10 w-10  bg-gray-200 flex items-center justify-center rounded-full ml-2 relative">
                                                  <img src="https://dev.cdn.gintaa.com/users/llpTWpEsbCNiInPFZuwYoYd9GKH3/avatar/thumbs/5R6dJtrBHYAtBGtEnoMNz1_Antitheftbagpackw300_200x200.jpeg" alt="Tushar" class="w-10 h-10 rounded-full">
                                              </div>                                     
                                        </div>
                    </a>
                 </div>
                <div class="flex w-full">
                          <div class="w-32 h-32 p-1 bg-white shadow cursor-pointer flex items-center justify-center">
                          <img src="https://cdn.gintaa.com/offers/image/20230409/E3tPYV7BLoijSFRaGQ2CT/thumbs/4b8JF3yi7v0d0WWfZ6Ds4S_imagecropper1681069705280_200x200.jpg" alt="image" class="max-w-full max-h-32 mx-auto">
                        </div>
                          <div class="ml-4 flex-auto">
                            <div class="text-heading font-medium mb-2 text-base text-gray-600 cursor-pointer">B11 Bluetooth Headset</div>
                            <div class="text-heading font-medium text-base text-gray-700 flex items-center relative mb-1"><span class="text-sm text-gray-500 font-normal">Condition</span> <span class="mr-2 pl-2">:</span> <span class="text-sm text-gray-500 font-normal flex items-center">New</span></div>
                            <div  class="w-full flex mb-3 items-center">
                              <div class="flex items-center text-base text-firoza font-medium mr-4">
                                         <svg width="10" height="12" viewBox="0 0 12 21" fill="none" class="mr-[3px]"><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.899857C0 0.402883 0.402877 6.41971e-06 0.89985 6.398e-06L11.1001 5.95252e-06C11.5971 5.93082e-06 12 0.402883 12 0.899856C12 1.39683 11.5971 1.79971 11.1001 1.79971L8.48344 1.79971C9.31657 2.64601 9.89112 3.73607 10.0833 4.9492H11.1001C11.5971 4.9492 12 5.35208 12 5.84905C12 6.34602 11.5971 6.7489 11.1001 6.7489H10.0833C9.63929 9.55203 7.15366 11.6981 4.15385 11.6981H2.61079L10.119 19.0174C10.4795 19.3688 10.4795 19.9386 10.119 20.29C9.75851 20.6414 9.17405 20.6414 8.81356 20.29L0 11.6982L6.84803e-05 11.6981H0V10.8984C0 10.3461 0.447715 9.8984 1 9.8984H4.15385C6.1307 9.8984 7.78502 8.5522 8.20477 6.7489L0.899851 6.7489C0.402877 6.7489 0 6.34602 0 5.84905C0 5.35208 0.402877 4.9492 0.899851 4.9492L8.20476 4.9492C7.785 3.14592 6.13069 1.79974 4.15385 1.79974H0.899851C0.402877 1.79974 0 1.39686 0 0.899889V0.899857Z" fill="#48CEF3"></path></svg> 
                                         <span class="pl-0.5">1000</span>
                                    </div> 
                                     
                              <div class="flex items-center">
                                   <svg  width="10" height="12" viewBox="0 0 11 18" fill="none" class="mr-[3px]"><path  opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                                   <span  class="items-center text-base font-normal text-gray-500 relative flex after:left-0 after:absolute after:w-[100%] after:h-[1px] after:bg-gray-500 after:top-[11px] ">2000</span> 
                              </div> 
                              <div class="text-base text-green font-medium pl-5">(50% Off)</div>                            
                              
                           </div>                          
                      </div>
                  </div>                  
              </div>
             </router-link>
            </div>
            <div v-show="!loading && offers.length <= 0" class="text-center">
              <div class="flex w-full justify-center">
                <img src="~/assets/images/notfound.svg" alt="notfound" class="w-[245px]">
              </div>
              <div class="w-full flex justify-center items-center">
              <div class="font-bold text-xl text-center pt-3 pb-4 text-gray-600">
               {{ $t('oopsNoOffer') }}
              </div>
              </div>
              <div class="w-full flex justify-center items-center">
              <p class="text-sm text-gray-600">
                {{ $t('oopsNoOfferPara') }}
              </p>
              </div>

               <div class="w-full flex justify-center items-center mt-4">
                  <a :href="localePath('/exchange')" class="py-3 rounded-sm text-sm px-8  inline-block text-firoza border-firoza border mb-0 hover:bg-firoza hover:text-white transition-all">
                 {{$t('viewRecentOffersNo')}}</a>
               </div>
            </div>
            <div v-show="loading" class="py-6 flex justify-center">
              <Spinner />
            </div>

            <Trigger @triggerIntersected="loadMore" />
          </div>
        </div>
      </div>
    </main>

    <!--footer section goes here-->
    
    <Footer  :offerCountForFooter='offerCountForFooter' />

     
    <div v-if="allOffrCount > 0" @click="showMobileFilter = !showMobileFilter">
      <MobileFilter />
    </div>
    <!-- Mobile filter start here -->

    <!--filter options-->
    <div :class="[showMobileFilter ? '' : 'hidden', 'fixed z-50 inset-0 overflow-hidden']" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
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
                <MobileSearchSidebarFilter  :filter-objects="filterObjects" @applyFilter="applyFilter" @initializeFilter="initializeFilter" />
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
  name: 'MyOffers',
  middleware: 'authenticated',
  data () {
    return {
      breadcrumb: [{
        name: this.$t('myExchanges')
      },
      {
        name: this.$t('all')
      }
      ],
      filterObjects: [],
      search: '',
      offers: [],
      loading: true,
      itemsFoundText: '',
      page: 0,
      enableSearchMore: true,
      searchParams: {},
      showMobileFilter: false,
      ifFilterApplied:false,
      showsideFilter:false,
      offerCountForFooter: null,
      allOffrCount :0,
      setGridActiveClass:Boolean,
      setListActiveClass:Boolean,
      initialOfferStatus:'',
      searchText :''
    }
  },
  created () {
    this.initializeFilter();
    if(this.$route.query?.transactionType === 'exchange'){
     this.filterObjects.map((filterObject) => {
         filterObject.filters.map((el) => {
             if(el.value==='EXCHANGE'){
               el.selected =  true
             }
         })
       })
     }else if(this.$route.query?.transactionType && this.$route.query?.transactionType !== 'exchange' && this.$route.query?.type && this.$route.query?.status ){
      this.filterObjects.map((filterObject) => {
         filterObject.filters.map((el) => {
             if(el.value==='CASH'){
               el.selected =  true
             }
             if(el.value === 'COIN'){
               el.selected =  true
             }

             if(this.$route.query?.type === 'SENT'){
              if(el.value === 'SENT'){
               el.selected =  true
             }
             }
             if(this.$route.query?.type === 'RECEIVED'){
              if(el.value === 'RECEIVED'){
               el.selected =  true
             }
             }
             if(el.value ==='CLOSED'){
               el.selected =  true
             }
         })
       })
     }

    this.logEvent_gintaa_myoffers();
  },
  computed: {
      // isHotListing(){
      //   return this.processIsHotListing()
      // }
  },
  beforeMount () {
    if(window.localStorage.getItem("setGridActiveClass") === 'true'){
    this.setGridActiveClass = true
    this.setListActiveClass = false
    }else if(window.localStorage.getItem("setListActiveClass") === 'true' ){
    this.setGridActiveClass = false
    this.setListActiveClass = true
    }else{
    this.setGridActiveClass = true
    this.setListActiveClass = false
    }
   
    this.getAllOfferCount()
    this.getOffers()
  //  console.log("this.$route.query?.trasactionType",this.$route.query?.transactionType ,this.filterObjects)
   
  },
  methods: {
    async logEvent () {
      try {
        await this.$fire.analytics.logEvent('analytics_button_clicked')
      } catch (e) {

      }
    },
    applyFilter (params) {
     // console.log("filter Applied",params)
      if(params){
        this.ifFilterApplied = true
      }else{
        this.ifFilterApplied = false
      }
      console.log("Params",params.type)
      if(params && params?.type && params?.type === 'RECEIVED,SENT'){
        params.type = 'ALL'
      }
      //console.log("this.search",this.search)
      if(this.search){
        const searchtext = `&searchText=${this.search}`
        this.searchText  = searchtext
       // console.log("this.searchText",decodeURIComponent(this.searchText))
      }else{
        this.searchText  = ''
      }
      
     // console.log("Params",params)
      this.searchParams = params
      this.enableSearchMore = true
      this.page = 0
      this.offers = []
      this.getOffers()
    },
    initializeFilter () {
    //  console.log("Initialized")
      this.filterObjects = [
      {
          name: this.$t('transaction_type'),
          type: 'checkbox',
          paramName: 'transactionType',
          filters: [
            {
              name: this.$t('cash'),
              value: 'CASH',
              selected: false
            },
            {
              name: this.$t('gintaaCoin'),
              value: 'COIN',
              selected: false
            },
            {
              name: this.$t('exchange'),
              value: 'EXCHANGE',
              selected: false
            } 
          ]
        },

        {
          name: this.$t('offer_state'),
          type: 'checkbox',
          paramName: 'status',
          filters: [
            {
              name: this.$t('accepted'),
              value: 'ACCEPTED',
              selected: false
            },
            {
              name: this.$t('initiated'),
              value: 'INITIATED',
              selected: false
            },
            // {
            //   name: this.$t('outgoing'),
            //   value: 'status=INITIATED',
            //   selected: false
            // },
            {
              name: this.$t('closed'),
              value: 'CLOSED',
              selected: false
            },
            {
              name: this.$t('rejected'),
              value: 'REJECTED',
              selected: false
            },
            {
              name: this.$t('revised'),
              value: 'REVISED',
              selected: false
            },
            // {
            //   name: this.$t('partial_closed'),
            //   value: 'PARTIAL_CLOSED',
            //   selected: false
            // },
            {
              name: this.$t('expired'),
              value: 'EXPIRED',
              selected: false
            }
            // ,
            // {
            //   name: this.$t('reported'),
            //   value: 'status=REPORTED&type=ALL',
            //   selected: false
            // }
          ]
        },

        {
          name: this.$t('offer_type'),
          type: 'checkbox',
          paramName: 'type',
          filters: [
            {
              name: this.$t('incoming'),
              value: 'RECEIVED',
              selected: false
            },
            {
              name: this.$t('outgoing'),
              value: 'SENT',
              selected: false
            }
           
          ]
        },
        {
          name: 'Time Filter',
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
        },
        {
          name: 'Favourite',
          type: 'checkbox',
          paramName: 'onlyFavourite',
          filters: [
            {
              name: this.$t('only_favourite'),
              value: true,
              selected: false
            }
          ]
        }
      ]
     // this.checkIsFiltedApplied()
    },

    makeClassActive(btnName){
    
    if(btnName === 'grdBtn'){
    this.setGridActiveClass = true
    this.setListActiveClass = false
    }else{
    this.setGridActiveClass = false
    this.setListActiveClass = true
    }
    window.localStorage.setItem("setGridActiveClass", this.setGridActiveClass);
    window.localStorage.setItem("setListActiveClass", this.setListActiveClass);
    },
    async getOffers () {
      this.loading = true
      this.itemsFoundText = ''
      try {
        // for offers - default all
        if (!this.searchParams.hasOwnProperty('status')) {
          this.initialOfferStatus = '&status=ALL'
          //this.searchParams.status = 'status=ALL&type=ALL'
        }else{
          this.initialOfferStatus= ''
        }

        const p = new URLSearchParams(this.searchParams).toString() 
        const url = `/dview/v1/deals?${p}${this.searchText}${this.initialOfferStatus}&page=${this.page}&size=12`
        const data = await this.$axios.$get(url)
        const countUrl = `dview/v1/deals/filter/count?${p}${this.searchText}${this.initialOfferStatus}&page=${this.page}&size=12`
        this.getOfferCount(countUrl)
        
        if (this.page === 0) {
          this.offers = data.payload
          this.checkIsFiltedApplied()
        } else if (data.payload.length > 0) {
          this.checkIsFiltedApplied()
          this.offers.push(...data.payload)
        }

        this.offerCountForFooter = this.offers.length;
        this.enableSearchMore = data.payload.length > 0

        this.loading = false
      } catch (error) {
        if (this.page === 1) {
          this.offers = []
        }
        this.loading = false
        this.enableSearchMore = false
      }

     // this.itemsFoundText = this.offers.length > 0 ? `${this.offers.length} ${this.$t('offers')}` : this.$t('noOffer')
    },

    async getOfferCount(countUrl) {
      try {
       const offerCount = await this.$axios.$get(countUrl)

       if(offerCount.payload === 1){
       this.itemsFoundText = offerCount.payload > 0 ? `${offerCount.payload} ${this.$t('offer')}` : this.$t('noOffer')
       }else{
        this.itemsFoundText = offerCount.payload > 0 ? `${offerCount.payload} ${this.$t('offers')}` : this.$t('noOffer')
       }
      
      } catch (error) {
        
        
      }
    },
    async getAllOfferCount() {
      try {
      //&type=ALL
       let url = `dview/v1/deals/filter/count?status=ALL&page=${this.page}&size=12`
       const allOfferofferCount = await this.$axios.$get(url)
       this.allOffrCount = allOfferofferCount.payload
       
      } catch (error) {
        
        console.log("error",error)
      }
    },
    loadMore () {
      if (!this.loading && this.enableSearchMore) {
        this.page++
        this.getOffers()
      }
    },
    onChangeSearch: _.debounce(function () {
      this.applyFilter(this.searchParams)
    }, 800),

checkIsFiltedApplied(){
  if(this.ifFilterApplied){
    this.showsideFilter = true
   }else{
    if(this.offers.length>0){
     this.showsideFilter = true
    }else{
      this.showsideFilter = false
    }
  }
},
      

    async logEvent_gintaa_myoffers() {
      try {                
        const analyticsData = {
          channel_id:    'WEB',
          user_id: this.$fire.auth && this.$fire.auth.currentUser ? this.$fire.auth.currentUser.uid : null
        };
       // console.log(analyticsData)
        if(analyticsData.user_id){
          await this.$fire.analytics.logEvent('gintaa_myoffers', analyticsData) 
        }
       // console.log('Gintaa analytics event log successfully');     
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
.moneycardoffer .moneymyoffershow{
  position: absolute;
  bottom: 50px;
  z-index: 999;
}
.myofferlist .imgmyoffer{
  width: 100px !important;
}
.mobile-btn {
    box-shadow: 0 0 4px 0 rgb(0 0 0 / 20%);
}
.grid-active{
  /* background-color: #48CEF3; */
}
.grid-active svg path {
  /* fill: #FFFFFF; */
  stroke:#73bf45;
}
</style>