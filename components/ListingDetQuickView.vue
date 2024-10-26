<template>
<div>
 <div v-show="loading" class="py-6 flex justify-center min-h-[400px]">
              <Spinner />
            </div>
 <div v-if="product && !loading" class="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div class="product-details-image px-4 sm:px-4 md:px-0 2xl:px-0 relative">
            <!-- <div class="absolute right-0 cursor-pointer z-20">
              <favourite v-if="shownotOwnersIcon" :listing="product" />
            </div> -->

            <!-- <p v-if="checkQuantity(product.quantity)" class="text-errortext text-xl absolute z-20 py-2 px-3 border-2 border-errortext top-4 -rotate-12">
              {{ $t('soldOut') }}
            </p> -->
            <!-- <ul
              class="hidden md:grid grid-cols-2 lg:grid-cols-2 md:gap-3 sm:gap-2 xs:gap-1 "
            >
              
              <li v-for="(item,index) in product.images" :key="index">
                <div
                  id="open-btn"
                  class="product-img flex cursor-pointer"
                 
                >
                  <img
                    :src="item.url"
                    :alt="product.name"
                    class="
                      bg-gray-300
                      max-w-full
                      transition
                      duration-200
                      ease-in
                      group-hover:rounded-b-none
                      hover:rounded-none
                    "
                  >
                </div>
              </li>
              

              <li v-for="item in product.videos" :key="item.url">
                <div
                  id="open-btn"
                  class="product-img flex cursor-pointer"
                >
                  <video
                    :id="item.id"
                    :src="item.url"
                    class="
                      bg-gray-300
                      max-w-full
                      transition
                      duration-200
                      ease-in
                      group-hover:rounded-b-none
                      hover:rounded-none
                    "
                    controls
                  />
                </div>
              </li>

            
            </ul> -->
            <div id="carouselCaptions" class="carousel slide relative" data-bs-ride="carousel">
              <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  v-for="(item,index) in product.images"
                  :key="index"
                  type="button"
                  :data-bs-slide-to="`${index}`"
                  data-bs-target="#carouselCaptions"
                  :class="{ 'active': index === 0 }"
                  aria-current="true"
                  aria-label="Slide 1"
                />
              </div>

              <ul
                class="carousel-inner relative w-full overflow-hidden h-80"
              >
                <li v-for="(item,index) in product.images" :key="index" :class="{ 'active': index === 0 }" class="carousel-item   relative float-left w-full">
                  <img
                    :src="item.url"
                    :alt="product.name"
                    class="mx-auto max-w-full"
                  >
                </li>
              </ul>

              <button
                class="carousel-control-prev absolute z-10 top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselCaptions"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next absolute z-10 top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselCaptions"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="product-details-des">
            <div class="xl:max-h-[400px] 2xl:max-h-[500px] overflow-auto auto-scroll">
            <div
              class="
                border-b border-slate-100
                pb-4
                pr-32
                relative
                mb-3
                px-4
                sm:px-4
                md:px-0
                2xl:px-0
                md:pr-14
                2xl:pr-20
              "
            >
              <h3
                class="
                  font-medium
                  text-sm
                  sm:text-base
                  md:text-xl
                  capitalize
                  text-gray-700
                "
              >
                {{ product.name }}
              </h3>

              
            </div>

            <div
              class="
                pb-4
                mb-6
                lg:border-b border-slate-100
                px-4
                sm:px-4
                md:px-0
                2xl:px-0
                border-b-4
              "
            >

          <!-- close For Now -->
            
              <div class="view mb-3">
                <ul class="flex items-center">
                  <li
                    

                    class="text-[11px] mr-3 text-gray-500 pr-3 relative  after:absolute after:w-[1px] after:h-[14px] after:bg-gray-200 after:right-0 after:top-1.5"
                  >
                    {{ listingStatistics.viewCount }} 
                    <span v-if="listingStatistics.viewCount > 1">{{ $t('views') }}</span>
                    <span v-else>{{ $t('view') }}</span>
                  </li>
                  <li
                    

                    class="text-[11px] mr-3 text-gray-500 pr-3 relative  after:absolute after:w-[1px] after:h-[14px] after:bg-gray-200 after:right-0 after:top-1.5"
                  >
                    {{ listingStatistics.favouriteCount }} <span v-if="listingStatistics.favouriteCount > 1" > {{ $t('likes') }} </span>
                     <span v-else>{{ $t('like') }}</span>
                  </li>
                  <li class="text-[11px] text-gray-500">
                    {{ $t('postedOn') }} {{ transformDate(product.publishedDate) }}
                  </li>
                </ul>
              </div> 


              <div class="flex flex-col sm:flex-col md:flex-col lg:flex-col">
                <ul class="flex items-center mb-3">
                  <li class="text-xsb mr-4 text-gray-500 pr-2">
                    {{ $t('productAge') }} :
                    <span class="font-medium  text-firoza">{{
                      convertProductAge(product.productAge)
                    }}</span>
                    
                     <!-- <span class="font-medium  text-firoza">Month</span><span v-if="product.productAge > 1" class="text-firoza">s</span>
                  -->
                  </li>
                  <li class="text-xsb mr-2 text-gray-500 pr-2">
                    {{ $t('quantity') }} :
                    <span class="font-medium text-gray-600">{{ product.quantity }} {{ product.unit
                    }}<span v-if="product.quantity > 1">s</span></span>
                  </li>
                </ul>
                <div class="text-xsb text-gray-500 mb-3">
                  {{ $t('location') }} :
                  <span
                    v-if="product.location.city"
                    class="font-medium text-gray-600"
                  >{{ product.location.city }}</span>
                </div>
              </div>
              <div  class="mb-3 flex items-center">
                <span
                  class="text-xsb text-gray-500 pr-4 block"
                > {{ $t('marketValue') }} :
                </span>

                <span
                  class="text-2xl text-gray-600 flex items-center font-medium quick-gcr"
                >
                <svg width="12" height="17" viewBox="0 0 11 18" fill="none" class="mr-1">
                                  <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black" />
                    </svg>
                  

                  <span>{{ product.unitOfferValuation }}</span>

                  <!-- <span v-if="product.exchangeMode === 'Barter'" class="text-2xl">{{ product.unitOfferValuation }}</span> -->

                </span>

                <!-- <span
                  v-if="product.exchangeMode === 'Money'"
                  class="text-xsb text-gray-600 flex items-center font-medium"
                >
                  <svg
                    width="7"
                    height="14"
                    viewBox="0 0 11 18"
                    fill="none"
                    class="mr-1"
                  >
                    <path
                      opacity="0.7"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                      fill="black"
                    />
                  </svg>
                  {{ product.unitOfferValuation }}
                </span> -->
              </div>
              
              
            </div>
       
            <div
              v-if="product.facets"
              class="
                description-attachment
                lg:border-b border-slate-100
                pb-4
                mb-5
                px-4
                sm:px-4
                md:px-0
                2xl:px-0
                border-b-4
              "
            >
              <div class="product-features mb-5">
                <h4 class="text-base mb-4 font-medium text-gray-700">
                  {{ $t('productFeatures') }}
                </h4>
                <div
                  v-for="item in product.facets"
                  :key="item.name"
                  class="feature-row flex w-full mb-3"
                >
                  <div
                    class="
                      feature-name
                      w-2/6
                      text-xs
                      font-normal
                      text-gray-600
                      pr-2
                    "
                  >
                    {{ item.name }} :
                  </div>
                  <div
                    class="feature-ans w-4/6 text-xsb font-medium text-gray-700"
                  >
                    {{ item.values[0] }}
                  </div>
                </div>
              </div>
              <div v-if="product.description" class="product-description mb-5">
                <h4 class="text-base mb-4 font-medium text-gray-700">
                  {{ $t('Description') }}
                </h4>
                <p  class="text-sm text-gray-500 font-normal">
                  {{ product.description }}
                </p>
              </div>
              <div
                v-if="product.documents.length"
                class="document-attachment doc-three mb-5"
              >
                <h4 class="text-base mb-4 font-medium text-gray-700">
                  {{ $t('attachment') }}
                </h4>

                <ul class="flex items-center">
                  <li
                    v-for="item in product.documents"
                    :key="item.id"
                    class="mr-4"
                  >
                    <a
                      href="#"
                      class="
                        flex flex-wrap
                        items-center p-2 text-xsb text-gray-500
                        pl-0
                        transition
                        relative
                        hover:text-green
                      "
                     
                    >

                     <!-- @click="preViewFile(item)" -->
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="pl">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 3.44772 5.44772 3 6 3H13V6C13 7.65685 14.3431 9 16 9H19V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4ZM17.5858 7L15 4.41421V6C15 6.55228 15.4477 7 16 7H17.5858ZM6 1C4.34315 1 3 2.34315 3 4V20C3 21.6569 4.34315 23 6 23H18C19.6569 23 21 21.6569 21 20V8C21 7.73478 20.8946 7.48043 20.7071 7.29289L14.7071 1.29289C14.5196 1.10536 14.2652 1 14 1H6ZM7 9C7 8.44772 7.44772 8 8 8H10C10.5523 8 11 8.44772 11 9C11 9.55229 10.5523 10 10 10H8C7.44772 10 7 9.55229 7 9ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H8ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16H8Z" fill="#8CAEC5" />
                      </svg>
                      <span class="pl-2"> {{ item.orgName | truncate(15, '...') }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              
              class="mb-5 px-4 sm:px-4 md:px-0 2xl:px-0"
            >
              <h4 class="text-base mb-4 font-medium text-gray-700">
                {{ $t('soldBy') }}
              </h4>

              <!-- :to="getLink(product.user.identityId)" -->
              <!-- :to= 'profile/view/llpTWpEsbCNiInPFZuwYoYd9GKH3' v-if="product.user.identityId" to="getLink(product.user.identityId)" -->
              <nuxt-link :to="localePath(getLink(product.user.identityId))"  class="px-4 py-3 pr-5 bg-[#F6F8FC] items-center inline-block">
                <div class="flex items-center">
                  <div
                    class="
                      h-10
                      w-10
                      bg-gray-200
                      flex
                      items-center
                      justify-center
                      rounded-full
                      mr-5
                      relative
                    "
                  >
                    <ProfileAvatar :image-url="product.user.imageUrl" />
                    <!-- <img
                      :src="product.user.imageUrl"
                      class="w-10 h-10 rounded-full"
                    > -->

                    <span
                      v-if="userStatus && userStatus=== 'online'"
                      class="
                        w-2.5
                        h-2.5
                        bg-green
                        block
                        absolute
                        left-0
                        bottom-1
                        rounded-full
                        border-2 border-white
                      "
                    />
                  </div>
                  <div class="text-sm text-gray-600 font-medium mr-12">
                    {{ product.user.name }}
                    <span class="text-xs block font-normal">{{ userStatus }}</span>
                  </div>
                  <div
                    class="text-gray-600 text-sm flex"
                  >
                    <svg
                      v-if="product.user.averageRating"
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.8221 1.42792C11.6677 1.11506 11.349 0.916992 11.0001 0.916992C10.6512 0.916992 10.3326 1.11506 10.1781 1.42792L7.5587 6.73459L1.70087 7.5908C1.35569 7.64125 1.06906 7.88326 0.961466 8.2151C0.85387 8.54694 0.943953 8.91109 1.19385 9.15449L5.4318 13.2822L4.43163 19.1137C4.37265 19.4576 4.51404 19.8052 4.79635 20.0103C5.07867 20.2154 5.45293 20.2424 5.76177 20.08L11.0001 17.3252L16.2384 20.08C16.5473 20.2424 16.9216 20.2154 17.2039 20.0103C17.4862 19.8052 17.6276 19.4576 17.5686 19.1137L16.5684 13.2822L20.8064 9.15449C21.0563 8.91109 21.1463 8.54694 21.0387 8.2151C20.9312 7.88326 20.6445 7.64125 20.2994 7.5908L14.4415 6.73459L11.8221 1.42792Z"
                        fill="#FF9500"
                      />
                    </svg>

                    <svg v-if="!product.user.averageRating" width="18" height="18" viewBox="0 0 22 22" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9053 1.51093C11.7509 1.19807 11.4323 1 11.0834 1C10.7345 1 10.4158 1.19807 10.2614 1.51093L7.64195 6.81759L1.78412 7.67381C1.43894 7.72426 1.15231 7.96626 1.04472 8.2981C0.937122 8.62994 1.02721 8.99409 1.27711 9.2375L5.51505 13.3653L4.51489 19.1967C4.4559 19.5406 4.59729 19.8882 4.8796 20.0933C5.16192 20.2984 5.53618 20.3254 5.84502 20.163L11.0834 17.4082L16.3217 20.163C16.6305 20.3254 17.0048 20.2984 17.2871 20.0933C17.5694 19.8882 17.7108 19.5406 17.6518 19.1967L16.6517 13.3653L20.8896 9.2375C21.1395 8.99409 21.2296 8.62994 21.122 8.2981C21.0144 7.96626 20.7278 7.72426 20.3826 7.67381L14.5248 6.81759L11.9053 1.51093Z" fill="#A5A3A1" />
                    </svg>

                    <span v-if="product.user.averageRating" class="pl-3 font-medium">{{
                      product.user.averageRating
                    }}</span>
                    <span v-else class="pl-3 font-medium">{{ $t('noRating') }}</span>
                  </div>
                </div>
              </nuxt-link>
            </div>
        </div>
        <div
                
                class="
                  pb-3
                  fixed
                  bottom-0
                  bg-white
                  z-20
                  w-full
                  md:relative
                  pt-3
                  md:pt-0 md:border-none
                  left-0
                  shadow
                  md:shadow-none
                "
              >
              <!-- v-if="isLoggedIn" -->
                <div
                  
                  class="
                    flex flex-wrap
                    items-center
                    w-full mt-1
                    justify-center
                    md:justify-start
                  "
                >
                
                  <!-- <a
                    @click="getOtherUserChatLink(product.offerId,product.user.identityId)"
                    class="
                      border border-firoza
                      bg-transparent
                      px-3
                      sm:px-8
                      md:px-10
                      lg:px-10
                      rounded
                      block
                      text-firoza
                      font-medium
                      text-base
                      mr-8
                      h-12
                      leading-leading48
                      cursor-pointer
                    "
                  >  {{ $t('chatNow') }} </a> -->
                
                
                
                <button
                    
                    :class="{ 'opacity-40 disabled': !product.quantity }"
                    class="
                      transition-all
                      border border-firoza
                      bg-firoza
                      px-8
                      sm:px-10
                      md:px-14
                      rounded
                      block
                      font-medium
                      text-base
                      h-12
                      leading-leading48
                      text-white
                      hover:bg-firoza hover:border-firoza
                    "
                    @click="suggestOffer(product.offerId)"
                  >
                    {{ $t('makeOffer') }}
                  </button>
                  <!-- @click="suggestOffer(product.offerId)" -->
                </div>
              </div>


          </div>
        </div>

        </div>
</template>
<script>

import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import moment from 'moment'
export default Vue.extend({
  components: {},
  name: 'ListingDetQuickView',
  props: ['offerId', 'offered_offer_id'],

    data () {
        
     // console.log("this.listing",this.listing)
    return {
      //product: null,
      loading:true,
      product:null,
      listingItemSatus : {
        offerId:'',
        favourite: Boolean,
      },

    listingStatistics: {
        viewCount: null,
        favouriteCount: null,
        commentCount: null,
        dealCount: null
      },
    yrsCount : '',
    userStatus: '',
      mnthCount : '',
      listingItem:{}
    }},

  computed: {

  ...mapState({
      authUser: state => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    }),

    // filterImage (imageList) {
    //   return  imageList.sort((a, b) => !(a.cover ^ b.cover) ? 0 : a.cover ? -1 : 1)
    // },
    imageUrl () {
      if (this.listing.image) {
        return this.listing.image.url
      } else if (this.listing.images && this.listing.images.length > 0) {
           return (
          this.listing.images.filter((image) => image.cover === true)[0]?.url ||
          this.listing.images[0].url
        );
       // return this.listing.images[0].url
      }

      return null
    },
    isDraft () {
      return this.isDraftListing()
    }
  },

 mounted(){
    console.log("type",this.product ,this.offerId)
    this.fetchData(this.offerId)
    this.getlistingStatistic(this.offerId)
    this.getDealCount(this.offerId)
    },

  methods: {

    async fetchData (offerId) {
    const data = await this.$axios.get(`${this.$config.API_BASE}/offers/v1/offers/oid/${offerId}`)
    console.log(data)
    if(data && data.data.payload ){
    this.product = data.data.payload
    this.filterImage(this.product.images)
    this.loading = false
    //this.showListDetails = true
    }else{
     this.loading = false 
    }
    },

        filterImage (imageList) {
      const FilteredImglist = imageList.sort((a, b) => !(a.cover ^ b.cover) ? 0 : a.cover ? -1 : 1)
    },
    

    async getlistingStatistic (offerId) {
      try {
        const url = `/statistics/v1/statistics/offer/oid/${offerId}`
        const data = await this.$axios.$get(url)
        this.listingStatistics.viewCount = data.payload?.viewCount
        this.listingStatistics.favouriteCount = data.payload?.favouriteCount
        this.listingStatistics.commentCount = data.payload?.commentCount
      } catch (error) {
        console.log(error)
      }
    },

    async getDealCount (offerId) {
      try {
        const url = `/deals/v1/deals/offer/${offerId}/count`
        const data = await this.$axios.$get(url)
        this.listingStatistics.dealCount = data.payload.onGoingDealCount
      } catch (error) {
        console.log(error)
      }
    },


getOtherUserChatLink (OfferId, offerOwnerId) {
      const currentUserId = this.authUser?.uid
      const roomId = `${currentUserId}_${offerOwnerId}`
      this.$router.push({ path: `/chat/offers/${OfferId}/rooms/${roomId}/messages` })
     // return `/chat/offers/${OfferId}/rooms/${roomId}/messages`
       if(this.authUser == null){
        window.localStorage.setItem("setPath",`/chat/offers/${OfferId}/rooms/${roomId}/messages`);
      }
    },




  suggestOffer (offerId) {
    this.$router.push({ path: this.localePath(`/offers/suggest/${offerId}`), query: { offered_offer_id: this.offered_offer_id } })       
  },
      
  transformDate (value) {
      if (value) {
        return moment(value).format(' MMMM D , YYYY, h:mm:ss a')
      }
    },

   listLink () {

    this.$emit("listingDet", this.listing);
    //return this.isDraftListing() ? `/listing/item?id=${this.listing.draftOfferId}` : `/p/${this.listing.seOId || this.slugify(this.listing.name)}/${this.listing.offerId || this.listing.oid}`
    },

 getLink (uId) {
      if (uId) {
        return '/profile/view/' + uId + ''
      }
    },

convertProductAge(ageInMonth){

    if(ageInMonth > 12){
      console.log(ageInMonth / 12 )
      if((ageInMonth / 12 | 0) > 1){
        this.yrsCount = 's'
      }else{
       this.yrsCount = ''
      }
      if(ageInMonth % 12 > 1){
        this.mnthCount = 's'
      }else{
       this.mnthCount = ''
      }
     return (ageInMonth / 12 | 0) + " year" +`${this.yrsCount}`+ " " + ageInMonth % 12 +" month" +`${this.mnthCount}`
      }else{
      if(ageInMonth > 1){
       return  ageInMonth + " "+ "Months"
        }else{
         return ageInMonth +" "+ "Month"
       }
         
      }

     
    },
    isDraftListing () {
      return !this.listing.offerId && !this.listing.oid
    },
    deleteDraft (listing) {
      this.$store.dispatch('dialogs/confirm/show', listing)
    },
    slugify (text) {
      return text
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
    },

    getCityName(location){
    // console.log("location",location);
     if(location && location.city){
       return location.city
     }else{
       return null
     }
    },
     removeFromFav(status){
     console.log("status",status)
     if(status){
      this.$emit("removeFromFav", true);
     }
    }

  }
})
</script>

<style>
.fav-color path{
  fill:#EE2a7b !important;
}
</style>
