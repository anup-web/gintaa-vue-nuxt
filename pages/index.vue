<template>
  <div class="relative overflow-hidden">
    <Header @selectedLocation="selectedLocation" />

    <!-- @isEligibleToviewFood="isEligibleToviewFood" <section v-if="!remoteData" class="pt-[102px] lg:pt-[62px] flex justify-center content-center py-100">
      
      <div class="py-5 h-screen flex justify-center items-center">
        <Spinner />
      </div>
    </section> -->

    <section class="pt-[102px] lg:pt-[62px] hidden md:block">

      <div id="carouselCaptions" class="carousel slide relative" data-bs-ride="carousel" data-interval="2000">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" class="active" aria-current="true"
            aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="3" aria-label="Slide 4" />

          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="4" aria-label="Slide 5" />
          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="5" aria-label="Slide 6" />
          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="6" aria-label="Slide 7" />

          <button v-if="isElegibaleForFood" type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="7"
            aria-label="Slide 8" />

        </div>
        <div class="carousel-inner  relative w-full overflow-hidden">
          <div v-if="isElegibaleForFood" class="carousel-item active relative float-left w-full">
            <a :href="localePath('/gintaa-food')"><img :src="getTopBannerImageUrl('food_banner1.webp')"
                class="block w-full" alt="gintaa food">
            </a>

          </div>

          <div :class="!isElegibaleForFood ? 'active' : ''" class="carousel-item  relative float-left w-full">
            <a :href="localePath('/search?ff=tt_COIN&searchText=shirt')"><img
                :src="getTopBannerImageUrl('t-shirt-redeem-coin-2.webp')" class="block w-full" alt="Buy t-shirt at gintaa with gintaa coins">
            </a>

          </div>

          <div class="carousel-item  relative float-left w-full">
            <a :href="localePath('/coupon/all-coupons')">
              <img :src="getTopBannerImageUrl('coinredemption.webp')" class="block w-full" alt="Reedem your gintaa coin in time">
            </a>

          </div>

          <div class="carousel-item  relative float-left w-full">
            <a :href="localePath('/list')">
              <img :src="getTopBannerImageUrl('negotiate-banner.webp')" class="block w-full" alt="Negotiate online and buy at best price">
            </a>

          </div>

          <div class="carousel-item  relative float-left w-full">
            <a href="javascript:;" @click="redirectToPageFromTopBanner('/listing/item', 'sell-puja-new.webp')">
              <img :src="getTopBannerImageUrl('sell-puja-new.webp')" class="block w-full" alt="Sell products @0% commission">
            </a>
          </div>

          <div class="carousel-item  relative float-left w-full">
            <a @click="referFriend">
              <img :src="getTopBannerImageUrl('web-banner-refer-earn.webp')" class="block w-full cursor-pointer"
                alt="Refer & earn gintaa coins">
            </a>


          </div>

          <div class="carousel-item  relative float-left w-full">
            <a v-if="matchlink" :href="localePath(matchlink)">
              <img :src="getTopBannerImageUrl('exchange-new-puja.webp')" class="block w-full" alt="Take what you need, give what you don't">
            </a>

          </div>

          <div class="carousel-item    relative float-left w-full">
            <a href="javascript:;"
              @click="redirectToPageFromTopBanner('/listing/item', 'buy_sell_exchange_puja_new.webp')">
              <img :src="getTopBannerImageUrl('buy_sell_exchange_puja_new.webp')" class="block w-full" alt="Buy, Sell & Exchange online">
            </a>


          </div>


        </div>

        <button
          class="carousel-control-prev absolute top-0 bottom-0  items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 hidden"
          type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0  items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 hidden"
          type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>

    <section class="pt-[102px] lg:pt-[62px] md:hidden">
      <!-- <img src="~/assets/images/gold_barter1.jpg" class="max-w-full" alt=""> -->
      <div id="carouselCaptionsmob" class="carousel slide relative" data-bs-ride="carousel">
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button type="button" data-bs-target="#carouselCaptionsmob" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselCaptionsmob" data-bs-slide-to="1" aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselCaptionsmob" data-bs-slide-to="2" aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselCaptionsmob" data-bs-slide-to="3" aria-label="Slide 4" />

          <button type="button" data-bs-target="#carouselCaptionsmob" data-bs-slide-to="4" aria-label="Slide 5" />
          <button type="button" data-bs-target="#carouselCaptionsmob" data-bs-slide-to="5" aria-label="Slide 6" />
          <button type="button" data-bs-target="#carouselCaptionsmob" data-bs-slide-to="6" aria-label="Slide 7" />
          <button v-if="isElegibaleForFood" type="button" data-bs-target="#carouselCaptionsmob" data-bs-slide-to="7"
            aria-label="Slide 8" />


        </div>
        <div class="carousel-inner relative w-full overflow-hidden">

          <div v-if="isElegibaleForFood" class="carousel-item active relative float-left w-full">

            <a :href="localePath('/gintaa-food')"> <img
                :src="getTopBannerImageUrl('food_banner_web-mobile.jpg', 'MOBILE')" class="block w-full"
                alt="gintaa food"></a>
          </div>

          <div :class="!isElegibaleForFood ? 'active' : ''" class="carousel-item  relative float-left w-full">

            <a :href="localePath('/search?ff=tt_COIN&searchText=shirt')"> <img
                :src="getTopBannerImageUrl('reedim-coin-with-tshirt-for-mobile-web.webp', 'MOBILE')" class="block w-full"
                alt="Coin reedemtion"></a>


          </div>

          <div class="carousel-item  relative float-left w-full">
            <a :href="localePath('/coupon/all-coupons')">
              <img :src="getTopBannerImageUrl('coinredemption.webp', 'MOBILE')" class="block w-full" alt="gintaa Tshirt">
            </a>

          </div>

          <div class="carousel-item  relative float-left w-full">
            <a :href="localePath('/list')">
              <img :src="getTopBannerImageUrl('negotiate-banner.webp', 'MOBILE')" class="block w-full"
                alt="toys exchange">
            </a>
            <div class="carousel-caption hidden md:block absolute text-left">
              <h5 class="text-2xl pb-5 font-medium">
                {{ $t('downloadGintaaNow') }}
              </h5>
              <div class="flex justify-left sm:justify-start space-s-2 md:space-s-3 px-6 sm:px-0">
                <a class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                  href="https://apps.apple.com/in/app/gintaa/id1583773926" target="_blank"><img
                    src="~/assets/images/app-store.svg" alt="App Store" class="lg:w-40 2xl:w-auto" width="190"
                    height="41"></a><a
                  class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                  href="https://play.google.com/store/apps/details?id=com.asconsoft.gintaa.prod" target="_blank"><img
                    src="~/assets/images/play-store.svg" alt="Play Store" class="w-36 lg:w-40 2xl:w-auto ml-3" width="190"
                    height="41"></a>
              </div>
            </div>
          </div>

          <div class="carousel-item  relative float-left w-full">


            <!-- <a href="javascript:;" @click="redirectToPageFromTopBanner('/wallet/my-wallet')">  -->
            <a href="javascript:;" @click="redirectToPageFromTopBanner('/listing/item')"> <img
                :src="getTopBannerImageUrl('sell-puja.jpg', 'MOBILE')" class="block w-full" alt="...">
            </a>
            <!-- </a> -->
            <!-- <a v-if="matchlink" :href="localePath('/list')" class="absolute w-full top-0 h-full block "></a> -->
          </div>


          <div class="carousel-item  relative float-left w-full">
            <a @click="referFriend">
              <img :src="getTopBannerImageUrl('referearn.webp', 'MOBILE')" class="block w-full cursor-pointer"
                alt="toys exchange">
            </a>
            <div class="carousel-caption hidden md:block absolute text-left">
              <h5 class="text-2xl pb-5 font-medium">
                {{ $t('downloadGintaaNow') }}
              </h5>
              <div class="flex justify-left sm:justify-start space-s-2 md:space-s-3 px-6 sm:px-0">
                <a class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                  href="https://apps.apple.com/in/app/gintaa/id1583773926" target="_blank"><img
                    src="~/assets/images/app-store.svg" alt="App Store" class="lg:w-40 2xl:w-auto" width="190"
                    height="41"></a><a
                  class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                  href="https://play.google.com/store/apps/details?id=com.asconsoft.gintaa.prod" target="_blank"><img
                    src="~/assets/images/play-store.svg" alt="Play Store" class="w-36 lg:w-40 2xl:w-auto ml-3" width="190"
                    height="41"></a>
              </div>
            </div>
          </div>

          <div class="carousel-item relative float-left w-full">
            <!-- <a href="javascript:;" @click="redirectToPageFromTopBanner('/my-listings')">  -->
            <img :src="getTopBannerImageUrl('exchange-puja-mod.jpg', 'MOBILE')" class="block w-full" alt="watch exchange">
            <a v-if="matchlink" :href="localePath(matchlink)" class="absolute w-full top-0 h-full block "></a>
            <!-- </a> -->
            <div class="carousel-caption hidden md:block absolute text-left">
              <h5 class="text-2xl pb-5 font-medium">
                {{ $t('downloadGintaaNow') }}
              </h5>
              <div class="flex justify-left sm:justify-start space-s-2 md:space-s-3 px-6 sm:px-0">
                <a class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                  href="https://apps.apple.com/in/app/gintaa/id1583773926" target="_blank"><img
                    src="~/assets/images/app-store.svg" alt="App Store" class="w-36 lg:w-40 2xl:w-auto" width="190"
                    height="41"></a><a
                  class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                  href="https://play.google.com/store/apps/details?id=com.asconsoft.gintaa.prod" target="_blank"><img
                    src="~/assets/images/play-store.svg" alt="Play Store" class="w-36 lg:w-40 2xl:w-auto ml-3" width="190"
                    height="41"></a>
              </div>
            </div>
          </div>

          <div class="carousel-item  relative float-left w-full">
            <a href="javascript:;" @click="redirectToPageFromTopBanner('/listing/item')">
              <img :src="getTopBannerImageUrl('buy-sell-exchange-puja.jpg', 'MOBILE')" class="block w-full" alt="barter">
            </a>
            <div class="carousel-caption hidden md:block absolute text-left">
              <h5 class="text-2xl pb-5 font-medium">
                {{ $t('downloadGintaaNow') }}
              </h5>
              <div class="flex justify-left sm:justify-start space-s-2 md:space-s-3 px-6 sm:px-0">
                <a class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                  href="https://apps.apple.com/in/app/gintaa/id1583773926" target="_blank"><img
                    src="~/assets/images/app-store.svg" alt="App Store" class="lg:w-40 2xl:w-auto" width="190"
                    height="41"></a><a
                  class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                  href="https://play.google.com/store/apps/details?id=com.asconsoft.gintaa.prod" target="_blank"><img
                    src="~/assets/images/play-store.svg" alt="Play Store" class="w-36 lg:w-40 2xl:w-auto ml-3" width="190"
                    height="41"></a>
              </div>
            </div>
          </div>


        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0  items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 hidden"
          type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0  items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 hidden"
          type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>





    <Trigger @triggerIntersected="loadSection('showHomeContent')" />
    <Trigger @triggerIntersected="scrollImpression('top_categories')" />

    <!-- Top Categories -->
    <div v-if="remoteData.web_home_top_categories"
      class="mx-auto max-w-[1920px]  md:px-8 2xl:px-16 pt-2 lg:pt-10 pb-3 lg:pb-10 sectionp-1">
      <div class="top-category-sec tpc-custom popular-brand-scroll top-circle">
        <div class="text-center mb-3 sm:mb-3 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-7 3xl:mb-8 independence-head htitle-17">
          <h3
            class="section-title text-gray-600 text-[15px] md:text-2xl  font-bold px-5 relative mb-0 sm:mb-0 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] md:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] md:after:top-4 after:-right-14">
            <!-- <span class=""> Top Categories</span> -->
            <span class="">{{ remoteData.web_home_top_categories.title }}</span>
          </h3>
          <!-- <span class=" hidden md:block text-gray-400 text-sm font-normal">List your old products and explore varieties of items to find just what you need in exchange.
          </span> -->
          <span class=" hidden md:block text-gray-400 text-sm font-normal">
            {{ remoteData.web_home_top_categories.description }}
          </span>
        </div>

        <div v-if="remoteData.web_home_top_categories.payload" class="w-full">
          <div class="px-2 md:px-0">
            <VueSlickCarousel class="vcustom-slider" v-bind="settings">
              <div v-for="(item, index) in getFilteredCategory(remoteData.web_home_top_categories.payload)"
                :key="index + item.title">
                <a :href="localePath(item.redirect_url && item.redirect_url != '' ? item.redirect_url : 'javascript:;')"
                  class="group overflow-hidden flex rounded-md cursor-pointer pe-0  flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow "
                  :title="item.title">
                  <div class="mb-3 md:mb-3.5 mx-auto">
                    <img :src="item.image_url" :alt="item.title"
                      class=" object-cover rounded-s-md w-full rounded-md transition duration-200 ease-in group-hover:rounded-b-none hover:rounded-none max-w-full mx-auto">
                  </div>
                  <div class="product-title w-full overflow-hidden px-4">
                    <h2 class="text-heading font-semibold truncate mb-1 text-[9px] md:text-sm text-gray-600 text-center">
                      {{
                        item.title
                      }}</h2>
                  </div>
                </a>
              </div>
            </VueSlickCarousel>
          </div>
        </div>

      </div>
    </div>

    <!-- <pre>{{remoteData.web_home_category_wise_product_list}}</pre> -->

    <!-- Feature List Section Start -->
    <Trigger @triggerIntersected="loadSection('showHomeContent')" />
    <Trigger @triggerIntersected="scrollImpression('premium_lisitng')" />
    <div v-if="
      remoteData.web_home_category_wise_product_list &&
      remoteData.web_home_category_wise_product_list.premium_listing &&
      remoteData.web_home_category_wise_product_list.premium_listing.visibility"
      class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 pb-3 lg:pb-0">
      <!-- <div  class="text-center mb-6 block sm:block md:mb-6 md:hidden lg:mb-6 lg:hidden xl:hidden 2xl:mb-6 2xl:hidden 3xl:mb-6 3xl:hidden independence-head">
        </div> -->
      <PremiumLisitngs :web_home_premium_lisitng="remoteData.web_home_category_wise_product_list.premium_listing" />
    </div>

    <!-- Feature List Section End -->




    <!--////////////////////////////////////////////////////////////////////////////// Hot Deals ///////////////////////////////////////////////////////////-->
    <Trigger @triggerIntersected="loadSection('showHomeContent')" />
    <Trigger @triggerIntersected="scrollImpression('hot_deals')" />
    <div v-if="
      remoteData.web_home_category_wise_product_list &&
      remoteData.web_home_category_wise_product_list.hot_deals &&
      remoteData.web_home_category_wise_product_list.hot_deals.visibility"
      class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16 py-0 lg:pb-10 sectionp-3">

      <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.hot_deals.section_title"
        :section_description="remoteData.web_home_category_wise_product_list.hot_deals.section_description"
        :search_value="remoteData.web_home_category_wise_product_list.hot_deals.search_value"
        :item_show_number="remoteData.web_home_category_wise_product_list.hot_deals.item_show_number"
        :filter_type="remoteData.web_home_category_wise_product_list.hot_deals.filter_type"
        class="independence-head htitle-18" />
    </div>

    <!--baazar kolkota add-->
    <!-- <SponsoredMBaazar />  -->
    <!-- <SponsoredAviationCollege /> -->
    <div class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16 py-0 ">
      <div class="">
        <div class="sponsered-img  mx-auto relative gap-x-5 px-3 lg:px-0 grid grid-cols-1 lg:grid-cols-2">
          <div>
            <SponsoredMBaazar />
          </div>

          <div>
            <SponsoredAviationCollege />
          </div>

        </div>
      </div>
    </div>


    <div v-if="showHomeContent">

      <Trigger @triggerIntersected="loadSection('showHomeContent')" />
      <!-- <div v-if="
        remoteData.web_home_category_wise_product_list &&
        remoteData.web_home_category_wise_product_list.buy_with_coins &&
        remoteData.web_home_category_wise_product_list.buy_with_coins.visibility
      " class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16 py-2 lg:pb-14 sectionp-4">

        <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.buy_with_coins.section_title"
          :section_description="remoteData.web_home_category_wise_product_list.buy_with_coins.section_description"
          :search_value="remoteData.web_home_category_wise_product_list.buy_with_coins.search_value"
          :item_show_number="remoteData.web_home_category_wise_product_list.buy_with_coins.item_show_number"
          :filter_type="remoteData.web_home_category_wise_product_list.buy_with_coins.filter_type"
          class="independence-head htitle-18 newyear-heading" />
      </div> -->

      <!--my city -->
      <client-only>
        <Trigger @triggerIntersected="scrollImpression('near_me')" />
        <div v-if="authUser" class="mx-auto max-w-[1920px] px-0  md:px-8 2xl:px-16  lg:pb-10 sectionp-9">
          <HomeOfferNearMe :selectedAddress="selectedAddress" class="independence-head  htitle-4 htitle-22" />
        </div>
      </client-only>

      <div
        class="text-center block px-4 mb-0 mt-1 sm:mb-0 sm:block md:mb-5 md:hidden lg:mb-8 xl:mb-8 2xl:mb-8 3xl:mb-8 how-gworks-mob">
        <a :href="localePath('/about/how-gintaa-works')"> <img src="~/assets/images/dec-home/how-gintaa-works.webp"
            alt="how gintaa works" class="w-full h-auto rounded" /> </a>
      </div>

      <div class="px-4 md:px-0 buy-sell-mob mb-0 mt-3 block sm:block md:hidden">
        <div class="grid grid-cols-3 sm:grid-cols-3 gap-x-2">
          <div class="w-full text-center">
            <a :href="localePath('/list')" class="bg-[#F0F0F0] relative text-center rounded-md min-h-[70px] block ">
              <img src="~/assets/images/buy-home.png" class="mx-auto" alt="buy" />
              <span
                class="bg-firoza text-white text-sm font-medium -bottom-[4px] absolute py-1  bg-skew-home text-center left-[9%] w-[80%]">{{
                  $t('matchHome')
                }}</span>
            </a>
            <p class="text-[11px] text-gray-500 leading-[18px] mt-3">{{ $t('matchesHomePara') }}</p>
          </div>
          <div class="w-full text-center">
            <a href="javascript:void(0);" @click="redirectToPageFromTopBanner('/listing/item')"
              class="bg-[#F0F0F0] relative text-center rounded-md min-h-[70px] block ">
              <img src="~/assets/images/sell-home.png" class="mx-auto" alt="image" />
              <span
                class="bg-[#EEBF01] text-white text-sm font-medium -bottom-[4px] absolute py-1  bg-skew-home text-center left-[9%] w-[80%]">{{
                  $t('listingsboxSell')
                }}</span>
            </a>
            <p class="text-[11px] text-gray-500 leading-[18px] mt-3">{{ $t('listingboxpara') }}</p>
          </div>
          <div class="w-full text-center">
            <a :href="localePath(exchangeLink)" class="bg-[#F0F0F0] relative text-center rounded-md min-h-[70px] block ">
              <img src="~/assets/images/exchange-home.png" class="mx-auto" alt="exchange" />
              <span
                class="bg-[#8EC13E] text-white text-sm font-medium -bottom-[4px] absolute py-1  bg-skew-home text-center left-[9%] w-[80%]">{{
                  $t('exchangeHome')
                }}</span>
            </a>
            <p class="text-[11px] text-gray-500 leading-[18px] mt-3">{{ $t('exchangeHomePara') }}</p>
          </div>
        </div>
      </div>

      <!--////////////////////////////////////////////////////////////////////////////// Redeem Gift start ///////////////////////////////////////////////////////////-->
      <Trigger @triggerIntersected="scrollImpression('redeem_with_coins')" />
      <HomeGiftVoucherRedeemtion :buy_with_coins="remoteData.web_home_category_wise_product_list.buy_with_coins" />
      <Trigger @triggerIntersected="loadSection('showHomeContent')" />
      <Trigger @triggerIntersected="scrollImpression('web_home_popular_brands')" />


      <div
        class="mx-auto max-w-[1200px] hidden sm:hidden md:block md:px-8 xl:px-8 pt-3 pb-1 how-gintaa-title sm:pt-3 md:pt-5 md:pb-10 lg:pt-0 xl:pt-0 2xl:pt-0">

        <div
          class="text-center hidden mb-3 sm:mb-3 sm:hidden md:mb-5 md:block lg:mb-8 lg:block xl:mb-8 xl:block 2xl:mb-8 2xl:block 3xl:mb-8 3xl:block independence-head htitle-16">
          <h2
            class="section-title hheading-title text-gray-600 text-[15px] md:text-2xl  font-bold px-5 mb-0 sm:mb-0 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2 relative inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] md:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] md:after:top-4 after:-right-14">
            <a :href="localePath('/about/how-gintaa-works')">
              <span class="">{{ $t('headingthreestep') }}</span></a>
          </h2>

        </div>



        <div class="md:grid hidden md:grid-cols-3 lg:grid-cols-3 gap-5 xl:gap-10">

          <div class="relative">
            <div class="p-6 bg-homematch-bg min-h-[170px] md:min-h-[320px] relative overflow-hidden">


              <h2 class="text-[22px] xl:text-[30px] 2xl:text-[32px] text-firoza pb-2 md:pb-3  font-medium relative">
                {{ $t('matchHome') }}

              </h2>
              <p class="text-sm md:text-base font-medium text-white pb-3 mb:pb-4 leading-[24px]">{{ $t('matchesHomePara')
              }}
              </p>
              <div class="pt-2 pb-6 min-h-[125px] hidden md:block">
                <img src="~/assets/images/matches1.png" class="max-w-100 w-[190px]" alt="image" />
              </div>

              <a :href="localePath('/list')"
                class="min-w-[150px] text-center py-3 rounded-sm text-sm px-5 inline-block text-firoza border-firoza border mb-0 hover:bg-firoza hover:text-white transition-all viewb-2">
                {{ $t('viewlistings') }}


              </a>
            </div>
            <!-- <div class="absolute top-0 right-2">
               <img src="~/assets/images/dec-home/how-gw.webp" alt="image" width="90" />
          </div> -->
          </div>

          <div class="relative">
            <div class="relative bg-homelist-bg p-6 min-h-[170px] md:min-h-[320px]  overflow-hidden">

              <h2 class="text-[22px] xl:text-[30px] 2xl:text-[32px] pb-2 md:pb-3   font-medium text-green relative">
                {{ $t('listingsboxSell') }}

              </h2>
              <p class="text-sm md:text-base font-medium text-white pb-3 mb:pb-4 leading-[24px]">{{ $t('listingboxpara')
              }}
              </p>
              <div class="pt-2 pb-6 min-h-[125px] hidden md:block">
                <img src="~/assets/images/listing1.png" class="max-w-100 w-[190px]" alt="listing1" />
              </div>
              <a href="javascript:void(0);" @click="redirectToPageFromTopBanner('/listing/item')"
                class="min-w-[150px] text-center text-sm rounded-sm py-3 px-8 inline-block text-green border-green border mb-0 hover:bg-green hover:text-white transition-all viewb-3">{{
                  $t('createListingHome')
                }}
              </a>
            </div>
            <!-- <div class="absolute top-0 right-2">
               <img src="~/assets/images/dec-home/how-gw.webp" alt="image" width="90" />
          </div> -->
          </div>

          <div class="relative">
            <div class="p-6 bg-homeexchange-bg min-h-[170px] md:min-h-[320px] relative overflow-hidden ">


              <h2 class="text-[22px] xl:text-[30px] 2xl:text-[32px] text-green pb-2 md:pb-3   font-medium relative">
                {{ $t('exchangeHome') }}

              </h2>
              <p class="text-sm md:text-base font-medium text-white pb-3 mb:pb-4 leading-[24px]">
                {{ $t('exchangeHomePara') }}
              </p>
              <div class="pt-2 pb-6 min-h-[125px] hidden md:block">
                <img src="~/assets/images/exchange1.png" class="max-w-100 w-[190px]" alt="image" />
              </div>
              <!-- :href="localePath(exchangeLink)" -->
              <a @click="viewExchangeOffer(exchangeLink)"
                class="min-w-[150px] cursor-pointer text-center py-3 rounded-sm text-sm px-7 inline-block text-green border-green border mb-0 hover:bg-green hover:text-white transition-all">{{
                  $t('viewAvailableOffers')
                }}
              </a>
            </div>
            <!-- <div class="absolute top-0 right-2">
               <img src="~/assets/images/dec-home/how-gw.webp" alt="image" width="90" />
          </div> -->
          </div>

        </div>


      </div>


      <div class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16 pb-0 lg:py-0 lg:pb-0 sectionp-5">
        <div
          v-if="remoteData.web_home_popular_brands && remoteData.web_home_popular_brands.payload && remoteData.web_home_popular_brands.payload.length">
          <homePopularBrand :popularBrandData="remoteData.web_home_popular_brands" class="independence-head htitle-10 " />
        </div>
      </div>

      <!-- <Trigger @triggerIntersected="loadSection('showHomeContent')" />
    <Trigger @triggerIntersected="scrollImpression('TopSeller')" />
      <TopSeller />  -->

      <Trigger @triggerIntersected="loadSection('showHomeContent')" />


      <div v-if="
        remoteData.web_home_marketplace &&
        remoteData.web_home_marketplace.hatibagan &&
        remoteData.web_home_marketplace.hatibagan.visibility
      "
        class="mx-auto max-w-[1920px] px-0 mb-3 mt-3 md:px-8 2xl:px-16 pb-4 lg:pb-4 lg:mb-10 lg:mt-0 sectionp-4 hatibagan-market">
        <Trigger
          @triggerIntersected="scrollImpression(remoteData.web_home_marketplace.hatibagan.market_name, remoteData.web_home_marketplace.hatibagan.market_name)" />

        <HomeSellerInMarketPlace :section_title="remoteData.web_home_marketplace.hatibagan.section_title"
          :section_description="remoteData.web_home_marketplace.hatibagan.section_description"
          :market_name="remoteData.web_home_marketplace.hatibagan.market_name"
          :item_show_number="remoteData.web_home_marketplace.hatibagan.item_show_number" />
      </div>
      <!-- <TutorialVideoMobile /> -->

      <!--  -->
      <!--////////////////////////////////////////////////////////////////////////////// Hatibagan Market///////////////////////////////////////////////////////////-->
      <Trigger @triggerIntersected="loadSection('showHomeContent')" />

      <div v-if="
        remoteData.web_home_category_wise_product_list &&
        remoteData.web_home_category_wise_product_list.hatibagan_market &&
        remoteData.web_home_category_wise_product_list.hatibagan_market.visibility
      " class="mx-auto max-w-[1920px] pb-3 sm:pb-0 md:pb-0 px-0 md:px-8 2xl:px-16 py-0 lg:pb-10 sectionp-4">
        <Trigger @triggerIntersected="scrollImpression('hatibagan_market')" />

        <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.hatibagan_market.section_title"
          :section_description="remoteData.web_home_category_wise_product_list.hatibagan_market.section_description"
          :search_value="remoteData.web_home_category_wise_product_list.hatibagan_market.search_value"
          :item_show_number="remoteData.web_home_category_wise_product_list.hatibagan_market.item_show_number"
          :filter_type="remoteData.web_home_category_wise_product_list.hatibagan_market.filter_type"
          class="independence-head htitle-18" />
      </div>


      <!--//////////////////////////////////////////////////////////////////////////////Head Phones///////////////////////////////////////////////////////////-->
      <Trigger @triggerIntersected="loadSection('showHomeContent')" />
      <Trigger @triggerIntersected="scrollImpression('head_phones')" />
      <div v-if="
        remoteData.web_home_category_wise_product_list &&
        remoteData.web_home_category_wise_product_list.head_phones &&
        remoteData.web_home_category_wise_product_list.head_phones.visibility
      " class="mx-auto max-w-[1920px] pb-3 sm:pb-0 md:pb-0 px-0 md:px-8 2xl:px-16 py-0 lg:pb-10 sectionp-4">

        <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.head_phones.section_title"
          :section_description="remoteData.web_home_category_wise_product_list.head_phones.section_description"
          :search_value="remoteData.web_home_category_wise_product_list.head_phones.search_value"
          :item_show_number="remoteData.web_home_category_wise_product_list.head_phones.item_show_number"
          :filter_type="remoteData.web_home_category_wise_product_list.head_phones.filter_type"
          class="independence-head htitle-18" />
      </div>

      <!--//////////////////////////////////////////////////////////////////////////////Mobile phones///////////////////////////////////////////////////////////-->
      <Trigger @triggerIntersected="loadSection('mobile_phones')" />
      <Trigger @triggerIntersected="scrollImpression('mobile_phones')" />
      <div v-if="
        remoteData.web_home_category_wise_product_list &&
        remoteData.web_home_category_wise_product_list.mobile_phones &&
        remoteData.web_home_category_wise_product_list.mobile_phones.visibility
      " class="mx-auto max-w-[1920px] pb-3 sm:pb-0 md:pb-0 px-0 md:px-8 2xl:px-16 py-0 lg:pb-10 sectionp-5">
        <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.mobile_phones.section_title"
          :section_description="remoteData.web_home_category_wise_product_list.mobile_phones.section_description"
          :search_value="remoteData.web_home_category_wise_product_list.mobile_phones.search_value"
          :item_show_number="remoteData.web_home_category_wise_product_list.mobile_phones.item_show_number"
          :filter_type="remoteData.web_home_category_wise_product_list.mobile_phones.filter_type"
          class="independence-head htitle-19" />
      </div>


      <!--watches  section start here-->
      <Trigger @triggerIntersected="loadSection('watches')" />
      <Trigger @triggerIntersected="scrollImpression('watches')" />
      <div v-if="
        remoteData.web_home_category_wise_product_list &&
        remoteData.web_home_category_wise_product_list.watches &&
        remoteData.web_home_category_wise_product_list.watches.visibility
      " class="mx-auto max-w-[1920px] pb-3 sm:pb-0 md:pb-0 px-0 md:px-8 2xl:px-16 py-0 lg:pb-10 sectionp-6">
        <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.watches.section_title"
          :section_description="remoteData.web_home_category_wise_product_list.watches.section_description"
          :search_value="remoteData.web_home_category_wise_product_list.watches.search_value"
          :item_show_number="remoteData.web_home_category_wise_product_list.watches.item_show_number"
          :filter_type="remoteData.web_home_category_wise_product_list.watches.filter_type"
          class="independence-head htitle-2 htitle-20" />
      </div>


      <div v-if="remoteData.web_home_when_desirables_met_affordability"
        class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 hidden sectionp-7">
        <!-- bg-[#f0eae5] -->
        <!--Luxury-->
        <div class="mx-auto  pb-10 lg:pb-10">
          <div class="text-center mb-3 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 independence-head htitle-1 htitle-21">
            <h3
              class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] lg:after:top-4 after:-right-14">
              <!-- <span class=""> When Desirables Met Affordability </span> -->
              <span class="">{{ remoteData.web_home_when_desirables_met_affordability.title }}</span>
            </h3>
            <span class="hidden lg:block text-gray-400 text-sm font-normal">{{
              remoteData.web_home_when_desirables_met_affordability.description
            }}</span>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-2.5 md:gap-3 lg:gap-2 xl:gap-2">
            <a v-for="(item, index) in remoteData.web_home_when_desirables_met_affordability.payload"
              :key="index + item.title"
              :href="localePath(item.redirect_url && item.redirect_url != '' ? item.redirect_url : 'javascript:;')"
              class="h-full group flex justify-center relative overflow-hidden flex-col" :title="item.title">
              <div class="product-img flex mb-2 md:mb-3.5">
                <img :src="item.image_url" :alt="item.title"
                  class="bg-gray-300 object-cover w-full rounded-md  transform transition duration-300 ease-in-out group-hover:opacity-90 group-hover:scale-105">
              </div>
              <div
                class=" px-8 pt-2 lg:pt-5 bg-white  text-gray-600 font-medium  rounded-tl-lg text-center text-sm lg:text-xl">
                {{ item.title }}</div>
            </a>
          </div>
        </div>
      </div>
      <!--//////////////////////////////////////////////////////////////////////////////Sarees & Lehengas///////////////////////////////////////////////////////////-->



      <!--refer a friend -->
      <div v-if="remoteData.web_home_refer_a_friend"
        class="mx-auto pb-3 mt-0 sm:pb-8 sm:mt-0 md:pb-8 md:mt-0 lg:mb-10 lg:mt-0 xl:mb-10 xl:mt-0 2xl:mb-10 2xl:mt-0 lg:pb-0 mr-4 ml-4 md:mr-0 md:ml-0 refer-earn">

        <a href="javascript:;" @click="referFriend" class="h-full group flex justify-center relative overflow-hidden ">
          <img :src="remoteData.web_home_refer_a_friend.image_url" class="max-w-full  border-independence"
            alt="Refer a friend">
        </a>
      </div>

      <!-- Start New Item Section -->
      <Trigger @triggerIntersected="loadSection('new_items')" />
      <Trigger @triggerIntersected="scrollImpression('new_items')" />
      <div v-if="
        remoteData.web_home_category_wise_product_list &&
        remoteData.web_home_category_wise_product_list.new_items &&
        remoteData.web_home_category_wise_product_list.new_items.visibility
      " class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16 py-0 lg:pb-10 sectionp-8">

        <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.new_items.section_title"
          :section_description="remoteData.web_home_category_wise_product_list.new_items.section_description"
          :search_value="remoteData.web_home_category_wise_product_list.new_items.search_value"
          :item_show_number="remoteData.web_home_category_wise_product_list.new_items.item_show_number"
          :filter_type="remoteData.web_home_category_wise_product_list.new_items.filter_type"
          class="independence-head durga-puja-red htitle-3" />
      </div>
      <!-- End New Item Section -->



      <Trigger @triggerIntersected="loadSection('sarees_lehengas')" />
      <Trigger @triggerIntersected="scrollImpression('sarees_lehengas')" />
      <div v-if="
        remoteData.web_home_category_wise_product_list &&
        remoteData.web_home_category_wise_product_list.sarees_lehengas &&
        remoteData.web_home_category_wise_product_list.sarees_lehengas.visibility
      " class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16  lg:pb-10 sectionp-10">


        <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.sarees_lehengas.section_title"
          :section_description="remoteData.web_home_category_wise_product_list.sarees_lehengas.section_description"
          :search_value="remoteData.web_home_category_wise_product_list.sarees_lehengas.search_value"
          :item_show_number="remoteData.web_home_category_wise_product_list.sarees_lehengas.item_show_number"
          :filter_type="remoteData.web_home_category_wise_product_list.sarees_lehengas.filter_type"
          class="independence-head durga-puja-red htitle-5 mt-3 sm:mt-4 md:mt-8 lg:mt-0 xl:mt-0 2xl:mt-0" />
      </div>


      <!--//////////////////////////////////////////////////////////////////////////////Dresses///////////////////////////////////////////////////////////-->
      <Trigger @triggerIntersected="loadSection('dresses')" />
      <Trigger @triggerIntersected="scrollImpression('dresses')" />
      <div v-if="
        remoteData.web_home_category_wise_product_list &&
        remoteData.web_home_category_wise_product_list.dresses &&
        remoteData.web_home_category_wise_product_list.dresses.visibility
      "
        class="mx-auto max-w-[1920px] pb-3 px-0 md:px-8 2xl:px-16 py-0 lg:pb-10 mt-2 sm:mt-0 sm:pb-0 md:mt-0 md:pb-0 lg:mt-0 xl:mt-0 2xl:mt-0 sectionp-11">

        <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.dresses.section_title"
          :section_description="remoteData.web_home_category_wise_product_list.dresses.section_description"
          :search_value="remoteData.web_home_category_wise_product_list.dresses.search_value"
          :item_show_number="remoteData.web_home_category_wise_product_list.dresses.item_show_number"
          :filter_type="remoteData.web_home_category_wise_product_list.dresses.filter_type"
          class="independence-head durga-puja-red htitle-5" />
      </div>

      <!--//////////////////////////////////////////////////////////////////////////////T-shirt///////////////////////////////////////////////////////////-->
      <Trigger @triggerIntersected="loadSection('t_shirt')" />
      <Trigger @triggerIntersected="scrollImpression('t_shirt')" />
      <div v-if="
        remoteData.web_home_category_wise_product_list &&
        remoteData.web_home_category_wise_product_list.t_shirt &&
        remoteData.web_home_category_wise_product_list.t_shirt.visibility
      " class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16 py-0 lg:pb-10 sectionp-12">

        <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.t_shirt.section_title"
          :section_description="remoteData.web_home_category_wise_product_list.t_shirt.section_description"
          :search_value="remoteData.web_home_category_wise_product_list.t_shirt.search_value"
          :item_show_number="remoteData.web_home_category_wise_product_list.t_shirt.item_show_number"
          :filter_type="remoteData.web_home_category_wise_product_list.t_shirt.filter_type"
          class="independence-head durga-puja-red htitle-6" />
      </div>

      <!--//////////////////////////////////////////////////////////////////////////////kurtas///////////////////////////////////////////////////////////-->
      <Trigger @triggerIntersected="loadSection('kurtas')" />
      <Trigger @triggerIntersected="scrollImpression('kurtas')" />
      <div v-if="
        remoteData.web_home_category_wise_product_list &&
        remoteData.web_home_category_wise_product_list.kurtas &&
        remoteData.web_home_category_wise_product_list.kurtas.visibility
      " class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16 py-0 lg:pb-10 sectionp-13">

        <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.kurtas.section_title"
          :section_description="remoteData.web_home_category_wise_product_list.kurtas.section_description"
          :search_value="remoteData.web_home_category_wise_product_list.kurtas.search_value"
          :item_show_number="remoteData.web_home_category_wise_product_list.kurtas.item_show_number"
          :filter_type="remoteData.web_home_category_wise_product_list.kurtas.filter_type"
          class="independence-head durga-puja-red htitle-23" />
      </div>


      <!--//////////////////////////////////////////////////////////////////////////////bags///////////////////////////////////////////////////////////-->
      <Trigger @triggerIntersected="loadSection('bags')" />
      <Trigger @triggerIntersected="scrollImpression('bags')" />
      <div v-if="
        remoteData.web_home_category_wise_product_list &&
        remoteData.web_home_category_wise_product_list.bags &&
        remoteData.web_home_category_wise_product_list.bags.visibility
      " class="mx-auto max-w-[1920px] pb-3 px-0 md:px-8 2xl:px-16 py-0 sm:pb-0 md:pb-0 lg:pb-10 sectionp-14">

        <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.bags.section_title"
          :section_description="remoteData.web_home_category_wise_product_list.bags.section_description"
          :search_value="remoteData.web_home_category_wise_product_list.bags.search_value"
          :item_show_number="remoteData.web_home_category_wise_product_list.bags.item_show_number"
          :filter_type="remoteData.web_home_category_wise_product_list.bags.filter_type"
          class="independence-head durga-puja-red htitle-7" />
      </div>

      <!--shoes  section   section start here-->
      <Trigger @triggerIntersected="loadSection('shoes_sandals')" />
      <Trigger @triggerIntersected="scrollImpression('shoes_sandals')" />
      <div v-if="
        remoteData.web_home_category_wise_product_list &&
        remoteData.web_home_category_wise_product_list.shoes_sandals &&
        remoteData.web_home_category_wise_product_list.shoes_sandals.visibility
      " class="mx-auto max-w-[1920px] px-0 md:px-8 2xl:px-16 py-0 lg:pb-10 sectionp-15">

        <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.shoes_sandals.section_title"
          :section_description="remoteData.web_home_category_wise_product_list.shoes_sandals.section_description"
          :search_value="remoteData.web_home_category_wise_product_list.shoes_sandals.search_value"
          :item_show_number="remoteData.web_home_category_wise_product_list.shoes_sandals.item_show_number"
          :filter_type="remoteData.web_home_category_wise_product_list.shoes_sandals.filter_type"
          class="independence-head durga-puja-red htitle-8" />
      </div>
      <!--shoes section   section end here-->

      <!--//////////////////////////////////////////////////////////////////////////////recommended listing///////////////////////////////////////////////////////////-->


      <div v-if="remoteData" class="mx-auto max-w-[1920px] px-0  md:px-8 2xl:px-16 py-0 lg:pb-10 sectionp-16">
        <!--barter  section start here-->
        <!--/////////////////////////////////////////////////sponsored///////////////////////////////////////////////////-->
        <div class="mx-auto">
          <div class="">
            <div class="sponsered-img  mx-auto relative gap-x-5 px-3 lg:px-0 grid grid-cols-1 lg:grid-cols-2">
              <div class="asconera-video">

                <SponsoredBaazarKolkata />
                <!-- <div class="relative p-2 bg-gray-100" v-show="showAsconEraVideoClickbtn" @click="showAsconEraVideo()">

                <a href="javascript:;" @click="logEventOnBtnClickForVideo(getAsconVideoUrl())"
                  class="absolute z-20 top-0 left-0 bottom-0 right-0 flex items-center justify-center ">
                  <img src="~/assets/images/play.png" alt="Play "
                    class="w-[80px] sm:w-[90px] md:w-[90px] lg:w-[134px] xl:w-[134px] 2xl:w-[134px] z-30" /></a>
                <img :src="getAsconEraimgUrlLogo()" class="absolute z-20 top-5 w-[80px] lg:w-[120px] left-5"
                  alt="Ason era" />
                <img :src="getAsconEraimgUrlName()" class="mx-auto max-w-full hidden md:block" alt="Ason era" />
                <img :src="getAsconEraimgUrlNameMobile()" class="mx-auto max-w-full md:hidden" alt="Ason era" />
                <p
                  class="text-white lg:text-[18px] xl:text-[20px] 2xl:text-[24px] z-20 absolute font-medium w-full text-center bottom-14 lg:bottom-20 ">
                  Where convenience <span class="text-[#fbeda9]">meets reliability</span></p>
                <div class="bg-black bg-opacity-20 absolute top-0 left-0 w-full z-10 h-full"></div>

                <div
                  class="text-right text-[15px] py-1 px-2 z-20 bg-[#f7b900] text-[#000] font-medium absolute right-5 top-3 ">
                  <a href="https://asconera.com/" target="_blank">{{ $t('sponsor_txt') }}</a>

                </div>
              </div>

              <div v-if="!showAsconEraVideoClickbtn" class="w-full max-w-[1130px]">
                <div
                  class="text-right text-[15px] py-1 px-2 z-20 bg-[#f7b900] text-[#000] font-medium absolute right-2 bottom-10 ">
                  <a href="https://asconera.com/" target="_blank">{{ $t('sponsor_txt') }}</a>

                </div>
                <iframe id="ascon-era-video" class="video-responsive h-[340px]" width="100%" :src="getAsconVideoUrl()"
                  title="Ascon era" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div> -->
              </div>
              <div class="dash-video">
                <!--baazar kolkota add-->
                <SponsoredDashVideo />

              </div>

            </div>
          </div>

        </div>





        <!--//////////// Start price filter here ///////////-->

        <div
          v-if="remoteData.web_home_category_wise_product_list && remoteData.web_home_category_wise_product_list.within_price_range"
          v-for="(within_price_range, index) of remoteData.web_home_category_wise_product_list.within_price_range"
          :key="'price_filter' + index" class="w-full lg:pb-10 mt-3 sm:mt-8 md:mt-8 lg:mt-0 xl:mt-0 2xl:mt-0">

          <HomeRecentTop :section_title="within_price_range.section_title"
            :section_description="within_price_range.section_description" :search_value="within_price_range.search_value"
            :item_show_number="within_price_range.item_show_number" :filter_type="within_price_range.filter_type"
            class="independence-head htitle-9" />
        </div>
        <!--//////////// End price filter here ///////////-->



        <!--////////////////////////////////////////////almost new section start here//////////////////////////////////////////-->

        <div v-if="remoteData.web_home_the_restart_of_something_beautiful" class="mx-auto pb-10 hidden">
          <div class="text-center mb-3 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8 ">
            <h3
              class="section-title text-gray-600  text-[15px] md:text-2xl  font-bold px-5 relative mb-0 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] lg:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5 after:top-[11px] lg:after:top-4 after:-right-14">
              <!-- <span class="">The Re-Start of Something Beautiful </span> -->
              <span class="">{{ remoteData.web_home_the_restart_of_something_beautiful.title }}</span>
            </h3>
            <!-- <span class="hidden lg:block text-gray-400 text-sm font-normal">Your belongings deserve a new lease of life. Explore a wide range of <br>pre-owned products that are willing to be adopted by you!
          </span> -->
            <span class="hidden lg:block text-gray-400 text-sm font-normal">
              {{ remoteData.web_home_the_restart_of_something_beautiful.description }}
            </span>
          </div>

          <div
            v-if="remoteData.web_home_the_restart_of_something_beautiful.payload && remoteData.web_home_the_restart_of_something_beautiful.payload.length"
            class=" hidden sm:flex grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5">
            <div class="mx-auto col-span-1 sm:col-span-2">
              <a :href="localePath(remoteData.web_home_the_restart_of_something_beautiful.payload[0].redirect_url && remoteData.web_home_the_restart_of_something_beautiful.payload[0].redirect_url != '' ? remoteData.web_home_the_restart_of_something_beautiful.payload[0].redirect_url : 'javascript:;')"
                class="h-full group flex justify-center relative overflow-hidden">
                <img :src="remoteData.web_home_the_restart_of_something_beautiful.payload[0].image_url" class="max-w-full"
                  alt="image">
              </a>
            </div>
            <div class="mx-auto col-span-full sm:col-span-5">
              <a :href="localePath(remoteData.web_home_the_restart_of_something_beautiful.payload[1].redirect_url && remoteData.web_home_the_restart_of_something_beautiful.payload[1].redirect_url != '' ? remoteData.web_home_the_restart_of_something_beautiful.payload[1].redirect_url : 'javascript:;')"
                class="h-full group flex justify-center relative overflow-hidden">
                <img :src="remoteData.web_home_the_restart_of_something_beautiful.payload[1].image_url" class="max-w-full"
                  alt="image">
              </a>
            </div>
            <div class="mx-auto col-span-1 sm:col-span-2">
              <a :href="localePath(remoteData.web_home_the_restart_of_something_beautiful.payload[2].redirect_url && remoteData.web_home_the_restart_of_something_beautiful.payload[2].redirect_url != '' ? remoteData.web_home_the_restart_of_something_beautiful.payload[2].redirect_url : 'javascript:;')"
                class="h-full group flex justify-center relative overflow-hidden">
                <img :src="remoteData.web_home_the_restart_of_something_beautiful.payload[2].image_url" class="max-w-full"
                  alt="image">
              </a>
            </div>
          </div>
          <!--for mobile explore almost new-->
          <div v-if="remoteData.web_home_the_restart_of_something_beautiful.payload"
            class="sm:hidden grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5">
            <div class="mx-auto col-span-1 sm:col-span-2">
              <a :href="localePath(remoteData.web_home_the_restart_of_something_beautiful.payload[0].redirect_url && remoteData.web_home_the_restart_of_something_beautiful.payload[0].redirect_url != '' ? remoteData.web_home_the_restart_of_something_beautiful.payload[0].redirect_url : 'javascript:;')"
                class="h-full group flex justify-center relative overflow-hidden">
                <img :src="remoteData.web_home_the_restart_of_something_beautiful.payload[0].image_url" class="max-w-full"
                  alt="image">
              </a>
            </div>
            <div class="mx-auto col-span-1 sm:col-span-2">
              <a :href="localePath(remoteData.web_home_the_restart_of_something_beautiful.payload[2].redirect_url && remoteData.web_home_the_restart_of_something_beautiful.payload[2].redirect_url != '' ? remoteData.web_home_the_restart_of_something_beautiful.payload[2].redirect_url : 'javascript:;')"
                class="h-full group flex justify-center relative overflow-hidden">
                <img :src="remoteData.web_home_the_restart_of_something_beautiful.payload[2].image_url" class="max-w-full"
                  alt="image">
              </a>
            </div>
            <div class="mx-auto col-span-full sm:col-span-5">
              <a :href="localePath(remoteData.web_home_the_restart_of_something_beautiful.payload[1].redirect_url && remoteData.web_home_the_restart_of_something_beautiful.payload[1].redirect_url != '' ? remoteData.web_home_the_restart_of_something_beautiful.payload[1].redirect_url : 'javascript:;')"
                class="h-full group flex justify-center relative overflow-hidden">
                <img :src="remoteData.web_home_the_restart_of_something_beautiful.payload[1].image_url" class="max-w-full"
                  alt="image">
              </a>
            </div>
          </div>
        </div>


        <!--match made in gintaa-->
        <div v-show="remoteData.web_home_match_made_in_gintaa"
          class="mx-auto mt-3 mr-4 ml-4 sm:mt-0 md:mt-0 md:mr-0 md:ml-0 md:px-0 pb-0 mb-5 lg:mt-0 lg:pb-0 lg:mb-10 xl:mt-0 2xl:mt-0 border-independence exchange-img">
          <div class="rounded-md overflow-hidden lg:block relative">
            <div class="flex justify-between">
              <div
                class="group w-2/4 flex justify-center items-end relative transition duration-200 ease-in flex-row-reverse bg-gray-100">
                <div id="carouselCrossfade" class="carousel slide carousel-fade relative" data-bs-ride="carousel">
                  <div v-if="remoteData.web_home_match_made_in_gintaa.left_banner_payload"
                    class="carousel-inner relative w-full overflow-hidden">
                    <div v-for="(item, index) in remoteData.web_home_match_made_in_gintaa.left_banner_payload"
                      :key="index + 'match_made_in_gintaa_left'" :class="index === 0 ? 'active' : ''"
                      class="carousel-item float-left w-full">
                      <img :src="item.image_url" class="block w-full" alt="image">
                    </div>
                    <div class="carousel-item float-left w-full">
                      <img :src="remoteData.web_home_match_made_in_gintaa.left_banner_payload[0].image_url"
                        class="block w-full" alt="image">
                    </div>


                  </div>
                </div>
              </div>

              <div
                class="group w-2/4 flex justify-center items-end relative transition duration-200 ease-in flex-row-reverse bg-stone-200">
                <div id="carouselCrossfaderight" class="carousel slide carousel-fade relative" data-bs-ride="carousel">
                  <div v-if="remoteData.web_home_match_made_in_gintaa.right_banner_payload"
                    class="carousel-inner relative w-full overflow-hidden">
                    <div v-for="(item, index) in remoteData.web_home_match_made_in_gintaa.right_banner_payload"
                      :key="index + 'match_made_in_gintaa_right'" :class="index === 0 ? 'active' : ''"
                      class="carousel-item float-left w-full">
                      <img :src="item.image_url" class="block w-full" alt="Wild Landscape">
                    </div>

                    <div class="carousel-item float-left w-full">
                      <img :src="remoteData.web_home_match_made_in_gintaa.right_banner_payload[0].image_url"
                        class="block w-full" alt="Wild Landscape">
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div class="absolute top-12 md:top-20 w-full flex justify-center lg:hidden">
              <img src="~/assets/images/exchange-arrow.svg" class="max-w-full w-[85px]" alt="arrow" />

            </div>

            <div class="relative lg:absolute w-full text-center lg:bottom-[30%] xl:bottom-[35%]">
              <div class="hidden lg:flex justify-center w-full pb-5">
                <img src="~/assets/images/exchange-arrow.svg" class="max-w-full" alt="arrow" />

              </div>
              <h2
                class="text-base lg:text-3xl xl:text-[28px] 2xl:text-4xl text-gray-900 font-bold pb-3 sm:text-gray-900 md:text-gray-900 lg:pb-5 pt-3 lg:pt-0 lg:text-white xl:text-white 2xl:text-white">
                <!-- Match Made in gintaa -->
                {{ remoteData.web_home_match_made_in_gintaa.title }}
              </h2>
              <p
                class="text-[11px] lg:text-sm text-gray-500 leading-5 pb-5 w-full sm:text-gray-500 md:text-gray-500 lg:w-[280px] lg:text-white xl:w-80 xl:text-white 2xl:text-white mx-auto">
                <!-- Browse, list or explore, find items that other users are willing to trade, <br>then negotiate and seal the deal. -->
                {{ remoteData.web_home_match_made_in_gintaa.description }}
              </p>
              <!-- Explore matches -->
              <!-- <a :href="authUser ? remoteData.web_home_match_made_in_gintaa.redirect_url : '/login'" class="inline-block border-2 border-gray-900 text-gray-900 text-center text-sm px-3 py-2 lg:py-4 min-w-[120px] lg:min-w-[200px] bg-white rounded-sm font-bold hover:bg-firoza hover:text-white hover:border-firoza transition">
             
              {{remoteData.web_home_match_made_in_gintaa.link_button}}
            </a> -->
              <a v-if="matchlink" :href="localePath(matchlink)"
                class="inline-block border-2 border-gray-900 text-gray-900 text-center text-sm px-3 py-2 lg:py-4 min-w-[120px] lg:min-w-[200px] bg-white rounded-sm font-bold hover:bg-firoza hover:text-white hover:border-firoza transition">

                {{ remoteData.web_home_match_made_in_gintaa.link_button }}
              </a>
              <p
                class="text-[11px] lg:text-sm text-gray-500 leading-5 pt-4 sm:text-gray-500 md:text-gray-500 lg:text-white xl:text-white 2xl:text-white">
                <!-- (only for your products, not you :P) -->
                {{ remoteData.web_home_match_made_in_gintaa.description_1 }}
              </p>
            </div>

            <!-- <div class="absolute top-0 left-2">
               <img src="~/assets/images/dec-home/christmas-ball1.webp" alt="image" class="w-[42px] sm:w-[70px] md:w-[72px] lg:w-[100px] xl:w-[140px] 2xl:w-[140px]" />
          </div> -->

            <!-- <div class="absolute top-0 right-2">
               <img src="~/assets/images/dec-home/christmas-ball2.webp" alt="image" class="w-[42px] sm:w-[70px] md:w-[72px] lg:w-[100px] xl:w-[140px] 2xl:w-[140px]" />
          </div> -->


          </div>
        </div>

        <!-- Start live_plants section -->
        <Trigger @triggerIntersected="loadSection('live_plants')" />
        <Trigger @triggerIntersected="scrollImpression('live_plants')" />
        <div v-if="
          remoteData.web_home_category_wise_product_list &&
          remoteData.web_home_category_wise_product_list.live_plants &&
          remoteData.web_home_category_wise_product_list.live_plants.visibility
        " class="w-full pb-3 md:pb-8 lg:pb-10">
          <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.live_plants.section_title"
            :section_description="remoteData.web_home_category_wise_product_list.live_plants.section_description"
            :search_value="remoteData.web_home_category_wise_product_list.live_plants.search_value"
            :item_show_number="remoteData.web_home_category_wise_product_list.live_plants.item_show_number"
            :filter_type="remoteData.web_home_category_wise_product_list.live_plants.filter_type"
            :sort_type="remoteData.web_home_category_wise_product_list.live_plants.sort_type"
            class="independence-head htitle-11" />
        </div>
        <!-- End live_plants section -->

        <!--bike section   section start here-->
        <Trigger @triggerIntersected="loadSection('bikes')" />
        <Trigger @triggerIntersected="scrollImpression('bikes')" />
        <div v-if="
          remoteData.web_home_category_wise_product_list &&
          remoteData.web_home_category_wise_product_list.bikes &&
          remoteData.web_home_category_wise_product_list.bikes.visibility
        " class="w-full  md:pb-8 lg:pb-10">
          <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.bikes.section_title"
            :section_description="remoteData.web_home_category_wise_product_list.bikes.section_description"
            :search_value="remoteData.web_home_category_wise_product_list.bikes.search_value"
            :item_show_number="remoteData.web_home_category_wise_product_list.bikes.item_show_number"
            :filter_type="remoteData.web_home_category_wise_product_list.bikes.filter_type"
            class="independence-head htitle-11" />
        </div>
        <!--bike section   section end here-->
        <!--mbaazar add-->

        <!--books  section start here-->
        <Trigger @triggerIntersected="loadSection('books')" />
        <Trigger @triggerIntersected="scrollImpression('books')" />
        <div v-if="
          remoteData.web_home_category_wise_product_list &&
          remoteData.web_home_category_wise_product_list.books &&
          remoteData.web_home_category_wise_product_list.books.visibility
        " class="w-full md:pb-8 lg:pb-10 mt-1 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">

          <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.books.section_title"
            :section_description="remoteData.web_home_category_wise_product_list.books.section_description"
            :search_value="remoteData.web_home_category_wise_product_list.books.search_value"
            :item_show_number="remoteData.web_home_category_wise_product_list.books.item_show_number"
            :filter_type="remoteData.web_home_category_wise_product_list.books.filter_type"
            class="independence-head htitle-12" />
        </div>



        <!--//////////////////////////////////////////////////////////////////////////////Diwali Offers///////////////////////////////////////////////////////////-->
        <Trigger @triggerIntersected="loadSection('diwali_offers')" />
        <Trigger @triggerIntersected="scrollImpression('diwali_offers')" />
        <div v-if="
          remoteData.web_home_category_wise_product_list &&
          remoteData.web_home_category_wise_product_list.diwali_offers &&
          remoteData.web_home_category_wise_product_list.diwali_offers.visibility
        " class="w-full mt-3 md:mt-0 md:pb-8 lg:pb-10">
          <HomeRecentTop :section_title="remoteData.web_home_category_wise_product_list.diwali_offers.section_title"
            :section_description="remoteData.web_home_category_wise_product_list.diwali_offers.section_description"
            :search_value="remoteData.web_home_category_wise_product_list.diwali_offers.search_value"
            :item_show_number="remoteData.web_home_category_wise_product_list.diwali_offers.item_show_number"
            :filter_type="remoteData.web_home_category_wise_product_list.diwali_offers.filter_type"
            :sort_type="remoteData.web_home_category_wise_product_list.diwali_offers.sort_type"
            class="independence-head big-title htitle-18" />
        </div>

        <!-- <SponsoredAviationCollege />  -->

        <div class="w-full lg:pb-0 mt-3 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0">
          <HomeRecentListing class="independence-head htitle-13" />
        </div>

        <div class="w-full lg:pb-0 mt-3 pb-3 sm:pb-0 sm:mt-0 md:mt-0 md:pb-0 lg:mt-0 xl:mt-0 2xl:mt-0">
          <HomeLastViewedListing class="independence-head big-title htitle-13" />
        </div>

      </div>

      <div v-if="isElegibaleForFood" class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 py-0 lg:pb-8 cursor-pointer">
        <a @click="registerRes()"><img src="~/assets/images/register-your-restaurant.webp" class="max-w-full" /></a>
      </div>

      <GintaaFoodAtomsLogoutConfirmation v-if="showLogoutConfirmationPopup" @cancelLogout="cancelLogout" />
      <!--//////////////////////////////////////////////////////////////////////////////watches///////////////////////////////////////////////////////////-->

      <!-- <TutorialVideo class="block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden"  /> -->

      <!--Academy banner start here-->
      <div v-if="remoteData.web_home_tutorial_videos"
        class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 py-0 lg:pb-8 home-video">
        <!-- <div  class="text-center mb-6 block sm:block md:mb-6 md:hidden lg:mb-6 lg:hidden xl:hidden 2xl:mb-6 2xl:hidden 3xl:mb-6 3xl:hidden independence-head">
          <h3  class="section-title text-gray-600 text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] md:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] md:after:top-4 after:-right-14"><span >
            {{ $t("WatchMeNow") }}
            </span></h3> </div> -->

        <HomeTutorialVideo :tutorialVideoList="remoteData.web_home_tutorial_videos" />

      </div>

      <!-- Acdemy Video Ends -->
      <!--testimonial section start here-->

      <TestimonilaHome class="independence-head htitle-15" />

      <!--download app-->
      <div v-if="remoteData.web_home_bottom_banner"
        class="mx-auto max-w-[1920px] pb-4 px-4 md:px-8 2xl:px-16 py-0 sm:pb-4 md:pb-4 lg:pb-10">
        <div
          class="flex justify-between items-end relative rounded-lg bg-gray-200 pt-5 md:pt-8 lg:pt-10 xl:pt-14 px-6 md:px-12 lg:px-20 2xl:px-24 3xl:px-36 border-independence gstore">
          <div
            class="flex-shrink-0 w-full sm:w-60 md:w-96 lg:w-auto lg:max-w-lg xl:max-w-3xl lg:flex lg:items-center pb-5 md:pb-8 lg:pb-12 xl:pb-16 z-10">
            <div class="py-4 md:py-6 xl:py-8 text-left sm:text-start">

              <div v-html="remoteData.web_home_bottom_banner.description_html"></div>
              <div class="flex justify-center sm:justify-start space-s-2 md:space-s-3 px-6 sm:px-0">
                <a v-if="remoteData.web_home_bottom_banner.ios_app_store"
                  class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                  :href="remoteData.web_home_bottom_banner.ios_app_store.redirect_url && remoteData.web_home_bottom_banner.ios_app_store.redirect_url != '' ? remoteData.web_home_bottom_banner.ios_app_store.redirect_url : 'javascript:;'"
                  :target="remoteData.web_home_bottom_banner.ios_app_store.target">
                  <img :src="remoteData.web_home_bottom_banner.ios_app_store.image" alt="App Store" class="" width="209"
                    height="60">
                </a>
                <a v-if="remoteData.web_home_bottom_banner.google_play_store"
                  class="inline-flex transition duration-200 ease-in hover:box-shadow hover:opacity-80"
                  :href="remoteData.web_home_bottom_banner.google_play_store.redirect_url && remoteData.web_home_bottom_banner.google_play_store.redirect_url != '' ? remoteData.web_home_bottom_banner.google_play_store.redirect_url : 'javascript:;'"
                  :target="remoteData.web_home_bottom_banner.google_play_store.target">
                  <img :src="remoteData.web_home_bottom_banner.google_play_store.image" alt="Play Store" class="ml-3"
                    width="209" height="60">
                </a>
              </div>
            </div>
          </div>
          <div v-if="remoteData.web_home_bottom_banner.mobile_1"
            class="hidden sm:flex items-end ps-4 -me-0.5 2xl:-me-1.5 w-60 md:w-72 lg:w-96 xl:w-auto z-10">
            <span>
              <img :src="remoteData.web_home_bottom_banner.mobile_1.image" alt="Play Store" class="m-w-full">
            </span>
          </div>

          <!-- <div class="absolute top-0 left-2">
               <img src="~/assets/images/dec-home/download-app-hanging-ball1.webp" alt="image" class="h-[120px] sm:h-auto md:h-auto lg:h-auto xl:h-auto 2xl:h-auto" />
          </div> -->

          <!-- <div class="absolute top-0 right-2">
               <img src="~/assets/images/dec-home/download-app-hanging-ball2.webp" alt="image" class="h-[120px] sm:h-auto md:h-auto lg:h-auto xl:h-auto 2xl:h-auto" />
          </div> -->


        </div>
      </div>


      <!--third design start here-->
      <div>
        <div class="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 py-0 lg:pb-10">
          <div class="flex w-full flex-col lg:flex-row md:space-x-4">
            <div
              class="w-full   relative md:w-full lg:basis-1/2 bg-[#fafbf6] border-independence before:bg-green before:absolute before:w-full before:h-[100px]  before:bottom-[0px] before:left-[0px]">
              <div class="pt-3  p-[10px] xl:p-[15px] 2xl:p-[30px] ">
                <div class="text-center mb-6 md:mb-6 lg:mb-6 2xl:mb-6 3xl:mb-6  ">
                  <h3
                    class="section-title text-gray-600 text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] md:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] md:after:top-4 after:-right-14">

                    <span class="">{{ $t('advisoryCommitteeHead') }}</span>
                  </h3>
                  <!-- <div class=" hidden md:block text-gray-400 text-sm font-normal" v-html="$t('advisoryCommitteePara')">

          </div> -->

                </div>

                <div class="flex w-100 justify-center">




                  <!-- <div class="bg-white board-box relative p-4 xl:p-4 2xl:p-10 mb-6 flex flex-col justify-center text-center min-h-[430px] items-start w-full">
                  <div class="w-[85px] h-[85px] bg-gray-50 rounded-full  mx-auto  board-img-box">
                    <div class="w-[85px] h-[85px] bg-gray-50 rounded-full ">
                      <img src="~/assets/images/no-image_suman.png" class="rounded-full w-[85px] h-[85px] border-4 border-green" alt="image"/>
                    </div>
                      
                  </div>
                  <div class="pt-5 mt-2 relative w-full text-center">
                      <h5 class="text-[16px] text-gray-600 font-medium pb-2">{{$t('sumanGuptaName')}}</h5>
                      <div class="text-xs text-gray-400 font-medium">{{$t('sumanGuptaPosition')}}</div>
                      </div>
                     <div class="pt-5 xl:pt-6 2xl:pt-8">
                       <p class="text-[14px] text-gray-500 leading-[24px]">{{$t('sumanGuptaDescription')}}</p> 
                       </div>
                      

                </div> -->
                  <div
                    class="bg-white board-box relative p-4 xl:p-4 2xl:p-10 mb-6 flex flex-col justify-center text-center min-h-[430px] items-start">
                    <div class="w-[85px] h-[85px] bg-gray-50 rounded-full  mx-auto  board-img-box  ">

                      <img src="~/assets/images/souvik_roy.png"
                        class="rounded-full w-[85px] h-[85px] border-4 border-green" alt="image" />


                    </div>
                    <div class="pt-5 mt-2 relative text-center w-full ">
                      <h5 class="text-[16px] text-gray-600 font-medium pb-2">{{ $t('souvikRoyName') }}</h5>
                      <div class="text-xs text-gray-400 font-medium">{{ $t('souvikRoyPosition') }}</div>
                    </div>
                    <div class="pt-5 xl:pt-6 2xl:pt-8">
                      <p class="text-[14px] text-gray-500 leading-[24px]">{{ $t('souvikRoyDescription') }} </p>
                    </div>


                  </div>


                </div>
              </div>
            </div>
            <div
              class="w-full  md:w-full lg:basis-1/2 bg-[#f2fafc] border-independence before:bg-firoza before:absolute before:w-full before:h-[100px]  before:bottom-[0px] before:left-[0px] relative ">
              <div class="pt-3  p-[10px] xl:p-[15px] 2xl:p-[30px] ">
                <div class="text-center mb-6 md:mb-6 lg:mb-6 2xl:mb-6 3xl:mb-6 ">
                  <h3
                    class="section-title text-gray-600 text-[15px] md:text-2xl  font-bold px-5 relative mb-2 inline-block before:bg-green before:absolute before:w-12 before:h-0.5  before:top-[11px] md:before:top-4 before:-left-14 after:bg-green after:absolute after:w-12 after:h-0.5  after:top-[11px] md:after:top-4 after:-right-14">

                    <span class="">{{ $t('inspirationalCommitteeHead') }}</span>
                  </h3>
                  <!-- <div class=" hidden md:block text-gray-400 text-sm font-normal" v-html="$t('advisoryBoardmemberPara')">

          </div> -->

                </div>
                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-10">
                  <div
                    class="bg-white board-box relative p-4 xl:p-4 2xl:p-10 mb-6 flex flex-col justify-center text-center min-h-[430px] items-start">

                    <div class="w-[85px] h-[85px] bg-gray-50 rounded-full  mx-auto  board-img-box">
                      <img src="~/assets/images/jayanta.png" class="rounded-full w-[85px] h-[85px] border-4 border-firoza"
                        alt="image" />
                    </div>
                    <div class="pt-5 mt-2 relative text-center w-full">
                      <h5 class="text-[16px] text-gray-600 font-medium pb-2">{{ $t('jayantaChaudhuriName') }}</h5>
                      <div class="text-xs text-gray-400 font-medium">{{ $t('jayantaChaudhuriPosition') }}</div>
                    </div>

                    <div class="pt-5 xl:pt-6 2xl:pt-8">
                      <p class="text-[14px] text-gray-500 leading-[24px]">{{ $t('jayantaChaudhuriDescription') }}</p>
                    </div>


                  </div>
                  <div
                    class="bg-white board-box relative p-4 xl:p-4 2xl:p-10 mb-6 flex flex-col justify-center text-center min-h-[430px] items-start">

                    <div class="w-[85px] h-[85px] bg-gray-50 rounded-full  mx-auto  board-img-box">
                      <img src="~/assets/images/sunanda_banerjee.png"
                        class="rounded-full w-[85px] h-[85px] border-4 border-firoza" alt="image" />
                    </div>
                    <div class="pt-5 mt-2 relative text-center w-full">
                      <h5 class="text-[16px] text-gray-600 font-medium pb-2">{{ $t('sunandaBanerjeeName') }}</h5>
                      <div class="text-xs text-gray-400 font-medium">{{ $t('sunandaBanerjeePosition') }}</div>
                    </div>


                    <div class="pt-5 xl:pt-6 2xl:pt-8">
                      <p class="text-[14px] text-gray-500 leading-[24px]">{{ $t('sunandaBanerjeeDescription') }} </p>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>


      </div>
    </div>

    <ReferFriend v-if="showSahreModal && currentUrl" :currentUrl="currentUrl" :referralLink="referralLink"
      :referralCode="referralCode" :showSahreModal="showSahreModal" @closeReferModal="closeReferModal" />

    <!-- <div v-if="featureListPopup" class="container">
          <premium-live @closePremiumPopup="closePremiumPopup"/></div> -->


    <!--footer section start here-->
    <Footer />
    <!--food pop up-->
    <div v-if="showfoodPopup && isElegibaleForFood" class="relative z-[999999999]" aria-labelledby="modal-title"
      role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="flex min-h-full items-center justify-center">
        <div class="fixed top-[25%] z-[999999999] w-[300px] h-[360px]">
          <a @click="closeFoodPopup()" class="cursor-pointer absolute right-1 -top-6"><svg width="20" height="20"
              viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M13.8326 6.97549C14.0558 6.75233 14.0558 6.39052 13.8326 6.16737C13.6095 5.94421 13.2477 5.94421 13.0245 6.16737L10 9.19188L6.97549 6.16737C6.75233 5.94421 6.39052 5.94421 6.16737 6.16737C5.94421 6.39052 5.94421 6.75233 6.16737 6.97549L9.19188 10L6.16737 13.0245C5.94421 13.2477 5.94421 13.6095 6.16737 13.8326C6.39052 14.0558 6.75233 14.0558 6.97549 13.8326L10 10.8081L13.0245 13.8326C13.2477 14.0558 13.6095 14.0558 13.8326 13.8326C14.0558 13.6095 14.0558 13.2477 13.8326 13.0245L10.8081 10L13.8326 6.97549Z"
                fill="black" />
            </svg>
          </a>
          <a :href="localePath('/gintaa-food')" class="block absolute bottom-0 right-0 h-[325px] w-full">
          </a>
          <iframe style="border: none" width="300" height="360" src="https://rive.app/s/ON8z8LpuIUue0-guabvy-g/embed"
            scrolling="no" allowfullscreen></iframe>
          <!-- <iframe style="border: none" width="238" height="275" src="https://rive.app/s/RvahdtZAnkOyAuFlepKe9g/embed" allowfullscreen></iframe> -->
          <!-- <a :href="localePath('/gintaa-food')">
     <img src="https://dev.cdn.gintaa.com/web/web_new/top-banners/food/delivery-animation.jpg"/>  </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import OfferNearMe from '~/components/home/offer-near-me.vue'
import SellerInMarketPlace from '~/components/home/sellerInMarketPlace.vue'
import PremiumLisitngs from '~/components/home/premium-lisitngs.vue'
import PremiumLive from '~/components/modal/premium-live.vue'

// import { SplitCarousel, SplitCarouselItem } from 'vue-split-carousel'
export default Vue.extend({
  // middleware: "isuserdeactivated",
  name: 'IndexPage',
  components: {
    // SplitCarousel,
    // SplitCarouselItem
    VueSlickCarousel,
    PremiumLisitngs,
    PremiumLive
  },
  asyncData() {
    return {

    }
  },
  data() {
    return {
      showLogoutConfirmationPopup: false,
      pinEligibleCodeList: [],
      showfoodPopup: false,
      isElegibaleForFood: false,
      featureListPopup: false,
      showHomeContent: false,
      showClickbtn: true,
      showFirstVideoClickbtn: true,
      showThirdClickbtn: true,
      showFourthClickbtn: true,
      showAsconEraVideoClickbtn: true,
      showSahreModal: false,
      currentUrl: '',
      referralCode: '',
      CDN_BASE_URL: this.$config.CDN_BASE_URL,
      remotConfigSuffix: this.$config.remotConfigSuffix,
      gcpSubFolder: this.$config.gcpSubFolder,
      remoteData: {
        web_home_top_categories: null,
        // web_home_when_desirables_met_affordability: null,
        web_home_the_restart_of_something_beautiful: null,
        web_home_youre_beautiful_its_true: null,
        // web_home_bookworms_book_your_books: null,
        web_home_branded_fashion_at_unbelievable_deals: null,
        web_home_barter_with_gintaa_coins: {},
        web_home_refer_a_friend: null,
        web_home_living_like_no_other: {},
        web_home_gadget_in_budget: {},
        web_home_new_top_brands: {},
        web_home_top_banners: {},
        web_home_match_made_in_gintaa: {},
        web_home_trade_smarter_lets_barter: {},
        web_home_barter_for_free: {},
        web_home_bottom_banner: {},
        web_home_download_our_app: {},
        web_home_address: {},
        web_home_category_wise_product_list: {},
        web_home_popular_brands: {},
        web_home_marketplace: {},
        web_sponsored_ad: {},
        web_home_tutorial_videos: {}
      },
      listLink: '',
      exchangeLink: '',
      matchlink: '',
      settings: [{
        "arrows": true,
        "dots": false,
        "speed": 500,
        "infinite": true,
        "initialSlide": 0,
        "slidesToShow": 8,
        "slidesToScroll": 8,
        "touchMove": true,
        "swipe": true,

        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 5,
              "slidesToScroll": 5,
            }
          },
          {
            "breakpoint": 1023,
            "settings": {
              "slidesToShow": 5,
              "slidesToScroll": 5,
              "touchMove": true,
              "swipe": true,
            }
          },
          {
            "breakpoint": 800,
            "settings": {
              "slidesToShow": 4,
              "slidesToScroll": 4,
              "touchMove": true,
              "swipe": true,
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 4,
              // "centerMode": true,
              // "centerPadding": "20px",
              "touchMove": true,
              "swipe": true,
              "slidesToScroll": 4,
            }
          }
        ]
      }],
      selectedAddress: null
    }
  },
  head() {
    return {
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': "https://schema.org/",
            '@type': 'WebSite',
            name: 'gintaa',
            url: 'https://gintaa.com/',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://gintaa.com/{search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }
        }
      ],
    }
  },
  // async fetch () {
  //   await this.fetchAndProcessCmsData()
  // },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
  beforeMount() {
    //this.readDataFromStrapi()
  },
  mounted() {
    // this.readDataFromStrapi()
    // window.localStorage.setItem("skipfeatureList",true);

    // console.log("window.localStorage.setItem",window.localStorage.getItem("skipfeatureList"))
    if (this.authUser) {
      this.getReferrelLink();
    }

    this.fetchAndProcessCmsData()

    const token = this.$cookies.get('gintaa_token')
    if (token) {
      this.listLink = `/my-listings`
      this.exchangeLink = `/my-offers`
      this.matchlink = '/matches'
    } else {
      this.listLink = `/list`
      this.exchangeLink = `/exchange`
      this.matchlink = '/all-matches'
    }
    // setTimeout(() => {
    //   if(this.isLoggedIn){
    //    this.listLink     =  `/my-listings`
    //    this.exchangeLink =  `/my-offers`
    //    this.matchlink    =  '/matches'  
    //   }else{
    //    this.listLink     = `/list`
    //    this.exchangeLink =  `/exchange`
    //    this.matchlink    =  '/all-matches' 
    //   }
    // }, 1500)
    // console.log("------------------------------------------------",this.remoteData.web_home_top_categories.payload)
  },
  created() {
    const vm = this
    this.$fire.auth.onAuthStateChanged((user) => {
      this.authenticatedUser = user
      if (user && !user.displayName && !user.isAnonymous) {
        vm.$router.push({ path: '/auth/signup' })
      }
    })

    // if (process.client) {
    //   this.readRemoteConfig()
    // }

    // console.log('this.remoteData:', this.remoteData);
  },
  methods: {

    cancelLogout() {
      this.showLogoutConfirmationPopup = false
    },

    registerRes() {
      if (this.authUser) {
        this.showLogoutConfirmationPopup = true
      } else {
        this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant`) })
      }

    },

    getFilteredCategory(topcategoryList) {
      if (this.isElegibaleForFood) {
        return topcategoryList
      } else {
        return topcategoryList.slice(1, topcategoryList.length)
      }

    },

    // isEligibleToviewFood(eligibilityStatus) {
    //   // console.log("eligibilityStatus",eligibilityStatus)
    //   if (eligibilityStatus) {
    //     this.showfoodPopup = true
    //     this.isElegibaleForFood = true
    //   } else {
    //     this.showfoodPopup = false
    //     this.isElegibaleForFood = false
    //   }
    // },

    closeFoodPopup() {
      this.showfoodPopup = false
    },
    closePremiumPopup() {
      this.featureListPopup = false
    },


    async checkFoodViewEligibility() {
      try {
        let url = `/forder/v1/eligibility?pincode=${this.selectedAddress?.zip}`;
        
        const data = await this.$axios.$get(url);
       // console.log("data to check eligibility",data.payload)
        let isUserEligibleForFood = data.payload?.eligible
        if (isUserEligibleForFood) {
          this.showfoodPopup = true
          this.isElegibaleForFood = true
        } else {
          this.showfoodPopup = false
          this.isElegibaleForFood = false
        }
       // this.isEligibleForFood = data?.payload?.eligible
      
       
      } catch (error) {
        console.log(error);

      }

    },
 
    viewExchangeOffer(exchngelink) {
      //console.log("elink",exchngelink)
      if (exchngelink === '/my-offers') {
        this.$router.push({ path: this.localePath(`/my-offers`), query: { transactionType: 'exchange' } })
      } else {
        this.$router.push({ path: this.localePath(`/exchange`) })
      }
    },

    logEvent(analyticsdata) {

      try {
        //console.log('=====searchData:', searchData);
        const analyticsData = {
          channel_id: 'WEB',
          user_id: analyticsdata?.user_id,
          banner_link: analyticsdata?.banner_link,
          image_url: analyticsdata?.imageUrl //user message
        };
        this.$fire.analytics.logEvent('gintaa_banner_click', analyticsData)
        //  console.log('Gintaa gintaa_banner_click event log successfully', analyticsData);
      } catch (e) {
        //  console.log('Gintaa analytics error:', e);
      }
    },

    logEventOnBtnClick(path, imageName) {
      let imageUrl = ''
      if (imageName) {
        const channelId = 'WEB'
        const localLangPath = this.gcpSubFolder[this.$i18n.locale] ? this.gcpSubFolder[this.$i18n.locale] : '';
        const channelPath = channelId === 'WEB' ? '' : 'mobile/'
        const basePath = this.CDN_BASE_URL + '/web/web_new/top-banners/';
        imageUrl = basePath + channelPath + localLangPath + imageName;
        const analyticsdata = {
          channel_id: 'WEB',
          user_id: this.authUser ? this.authUser?.uid : null,
          banner_link: window.location.host + path,
          imageUrl: imageUrl
        };
        this.logEvent(analyticsdata)
      }
    },
    logEventOnBtnClickForVideo(videoUrl) {
      if (videoUrl) {
        try {
          const analyticsdata = {
            channel_id: 'WEB',
            user_id: this.authUser ? this.authUser?.uid : null,
            videoUrl: videoUrl,
            sponsor_link: "https://asconera.com/",
            sponsored_by: "Ascon Era",
          };
          this.$fire.analytics.logEvent('gintaa_home_section_clicked', analyticsdata)
          //   console.log('gintaa_home_section_clicked event log successfully', analyticsdata);
        } catch (e) {
          //  console.log('Gintaa analytics error:', e);
        }

      }
    },
    async fetchAndProcessCmsData() {
      try {
        let locale = this.$i18n.locale
        // delete this.$axios.defaults.headers.common["Authorization"];
        // const data = await this.$axios.get(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`)
        const data = await fetch(`${this.$config.CMS_API_BASE}/api/webs?locale=${locale}`).then((r) => r.json());
        // console.log('index CMS Data:', data)
        let responseData
        if (data) {
          responseData = data.data
          responseData.map((item) => {
            const key = item.attributes.parameter;
            // console.log('keys:', key)
            if (this.remoteData[key] !== undefined) {
              let paramVal = item.attributes.value;
              // console.log('paramVal:', key, paramVal);
              this.remoteData[key] = paramVal || {};
            } else {
              // console.log('other keys:', key)
            }
          })

        }
        return responseData
      } catch (error) {
        console.log(error);
        return error
      }
    },

    getimgUrlName() {
      const localLangPath = this.gcpSubFolder[this.$i18n.locale] ? this.gcpSubFolder[this.$i18n.locale] : '';
      const lowerCasePath = localLangPath?.toLowerCase()
      return `${this.CDN_BASE_URL}/web/web_new/video-thumb/${localLangPath?.toLowerCase()}how-to-login-video.jpg`
    },

    getThirdimgUrlName() {
      const localLangPath = this.gcpSubFolder[this.$i18n.locale] ? this.gcpSubFolder[this.$i18n.locale] : '';
      const lowerCasePath = localLangPath?.toLowerCase()
      return `${this.CDN_BASE_URL}/web/web_new/video-thumb/${localLangPath?.toLowerCase()}create_listing.jpg`
    },

    getFourthimgUrlName() {
      const localLangPath = this.gcpSubFolder[this.$i18n.locale] ? this.gcpSubFolder[this.$i18n.locale] : '';
      const lowerCasePath = localLangPath?.toLowerCase()
      return `${this.CDN_BASE_URL}/web/web_new/video-thumb/${localLangPath?.toLowerCase()}exchange.jpg`
    },
    getFisrtimgUrlName() {
      const localLangPath = this.gcpSubFolder[this.$i18n.locale] ? this.gcpSubFolder[this.$i18n.locale] : '';
      const lowerCasePath = localLangPath?.toLowerCase()
      return `${this.CDN_BASE_URL}/web/web_new/video-thumb/${localLangPath?.toLowerCase()}doodle-video-thumbnails.jpg`

    },

    getAsconEraimgUrlLogo() {

      return "https://dev.cdn.gintaa.com/web/web_new/sponsored/ascon-era-logo.png"
      //  const localLangPath = this.gcpSubFolder[this.$i18n.locale] ? this.gcpSubFolder[this.$i18n.locale] : '';
      // const lowerCasePath = localLangPath?.toLowerCase()
      // return  `${this.CDN_BASE_URL}/web/web_new/video-thumb/${localLangPath?.toLowerCase()}doodle-video-thumbnails.jpg`

    },

    getAsconEraimgUrlName() {
      let imageUrl = ''
      switch (this.$i18n.locale) {
        case 'bn':
          imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/ascon-era-new-animation.gif`
          break;
        case 'hi':
          imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/ascon-era-new-animation.gif`
        case 'en':
          imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/ascon-era-new-animation.gif`
          break;
        default:
          imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/ascon-era-new-animation.gif`
      }

      return imageUrl
      // return "https://dev.cdn.gintaa.com/web/web_new/sponsored/ascon_era.webp"
      //  const localLangPath = this.gcpSubFolder[this.$i18n.locale] ? this.gcpSubFolder[this.$i18n.locale] : '';
      // const lowerCasePath = localLangPath?.toLowerCase()
      // return  `${this.CDN_BASE_URL}/web/web_new/video-thumb/${localLangPath?.toLowerCase()}doodle-video-thumbnails.jpg`

    },

    getAsconEraimgUrlNameMobile() {
      let imageUrl = ''
      switch (this.$i18n.locale) {
        case 'bn':
          imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/mobile-animation.gif`
          break;
        case 'hi':
          imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/mobile-animation.gif`
        case 'en':
          imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/mobile-animation.gif`
          break;
        default:
          imageUrl = `${this.CDN_BASE_URL}/web/web_new/sponsored/mobile-animation.gif`
      }

      return imageUrl
      // return "https://dev.cdn.gintaa.com/web/web_new/sponsored/ascon_era.webp"
      //  const localLangPath = this.gcpSubFolder[this.$i18n.locale] ? this.gcpSubFolder[this.$i18n.locale] : '';
      // const lowerCasePath = localLangPath?.toLowerCase()
      // return  `${this.CDN_BASE_URL}/web/web_new/video-thumb/${localLangPath?.toLowerCase()}doodle-video-thumbnails.jpg`

    },
    getVideoUrl() {
      if (this.$i18n.locale === 'hi') {
        return "https://www.youtube.com/embed/sevIeQ0y7bQ?autoplay=1&unmute=1&rel=0"
      } else {
        if (this.$i18n.locale === 'bn') {
          return "https://www.youtube.com/embed/3MpYj6GmRWo?autoplay=1&unmute=1&rel=0"
        } else {
          return "https://www.youtube.com/embed/MISi-zci40E?autoplay=1&unmute=1&rel=0"
        }
      }

    },

    getThirdVideoUrl() {
      if (this.$i18n.locale === 'hi') {
        return "https://www.youtube.com/embed/z0vz-rAGXAU?autoplay=1&unmute=1&rel=0"
      } else {
        if (this.$i18n.locale === 'bn') {
          return "https://www.youtube.com/embed/bjIfyWkNsDA?autoplay=1&unmute=1&rel=0"
        } else {
          return "https://www.youtube.com/embed/TVhjRqJF2q0?autoplay=1&unmute=1&rel=0"
        }
      }

    },

    getFourthVideoUrl() {
      if (this.$i18n.locale === 'hi') {
        return "https://www.youtube.com/embed/PlMG6Iv8G9A?autoplay=1&unmute=1&rel=0"
      } else {
        if (this.$i18n.locale === 'bn') {
          return "https://www.youtube.com/embed/Z2gyd5usK5I?autoplay=1&unmute=1&rel=0"
        } else {
          return "https://www.youtube.com/embed/lkET3b-QIb8?autoplay=1&unmute=1&rel=0"
        }
      }

    },


    getFirstVideoUrl() {
      if (this.$i18n.locale === 'hi') {
        return "https://www.youtube.com/embed/5aYH8VC5lws?autoplay=1&unmute=1&rel=0"
      } else {
        if (this.$i18n.locale === 'bn') {
          return "https://www.youtube.com/embed/5aYH8VC5lws?autoplay=1&unmute=1&rel=0"
        } else {
          return "https://www.youtube.com/embed/5aYH8VC5lws?autoplay=1&unmute=1&rel=0"
        }
      }

    },

    showAsconEraVideo() {
      this.showAsconEraVideoClickbtn = !this.showAsconEraVideoClickbtn
    },

    getAsconVideoUrl() {
      return 'https://www.youtube.com/embed/SO2wxR08CMU?autoplay=1&unmute=1&rel=0'
    },

    showVideo() {
      this.showClickbtn = !this.showClickbtn
      if (!this.showFirstVideoClickbtn) {
        this.showFirstVideoClickbtn = true
      } else if (!this.showThirdClickbtn) {
        this.showThirdClickbtn = true
      } else if (!this.showFourthClickbtn) {
        this.showFourthClickbtn = true
      }

    },

    showFirstVideo() {
      this.showFirstVideoClickbtn = !this.showFirstVideoClickbtn
      if (!this.showClickbtn) {
        this.showClickbtn = true
      } else if (!this.showThirdClickbtn) {
        this.showThirdClickbtn = true
      } else if (!this.showFourthClickbtn) {
        this.showFourthClickbtn = true
      }

    },

    showThirdVideo() {
      this.showThirdClickbtn = !this.showThirdClickbtn
      if (!this.showFirstVideoClickbtn) {
        this.showFirstVideoClickbtn = true
      } else if (!this.showClickbtn) {
        this.showClickbtn = true
      } else if (!this.showFourthClickbtn) {
        this.showFourthClickbtn = true
      }

    },

    showFourthVideo() {
      this.showFourthClickbtn = !this.showFourthClickbtn
      if (!this.showFirstVideoClickbtn) {
        this.showFirstVideoClickbtn = true
      } else if (!this.showClickbtn) {
        this.showClickbtn = true
      } else if (!this.showThirdClickbtn) {
        this.showThirdClickbtn = true
      }

    },

    async readRemoteConfig() {
      try {
        await this.$fire.remoteConfig.fetchAndActivate()
      } catch (e) {
        alert(e)
        return
      }

      const remoteData = await this.$fire.remoteConfig.getAll()

      if (remoteData) {
        // const localeSiff = this.$i18n.locale === 'hi' ? '_hi' : ''
        const localeSiff = this.remotConfigSuffix[this.$i18n.locale] ? this.remotConfigSuffix[this.$i18n.locale] : '';

        Object.keys(this.remoteData).map((key, index) => {
          const hKey = key + localeSiff
          this.remoteData[key] = remoteData[hKey] && remoteData[hKey]._value ? JSON.parse(remoteData[hKey]._value) : {}
        })
      }

      // remoteData.web_home_premium_lisitng console.log('remoteData:', this.remoteData)
      //  console.log('remoteDataweb_home_premium_lisitng:', this.remoteData.web_home_premium_lisitng)
    },
    async getReferrelLink() {
      this.showLoader = true;
      try {
        let url = `/users/v1/user/profile`;
        const data = await this.$axios.$get(url);

        if (data.success) {
          this.referralLink = data.payload.referralLink
          this.referralCode = data.payload?.referralCode
          this.getReferelPoint(this.referralLink)
        }

      } catch (error) {
        console.log(error);
      }
    },
    async getReferelPoint(RefLink) {
      try {
        let url = `/wallet/v1/wallet/configuration/get-invite-coin-value`;
        const data = await this.$axios.$get(url);

        if (data.success) {

          let siteUrl = ''
          if (this.$i18n.locale === 'hi') {
            siteUrl = `मैं आपको भारत के पहले बुद्धिमान/प्रज्ञ, सरल और सुरक्षित वस्तु विनिमय ऐप जिंटा में शामिल होने के लिए आमंत्रित कर रहा हूं। यह मेरा रेफ़रल यूआरएल है- URLLINK  लिंक का उपयोग करके साइन अप करें, और जिंटा से जुड़ने के लिए इनाम स्वरुप आपको आपके जिंटा वॉलेट में  जिंटा सिक्के/जिंटा मुद्राए (जीसी) अर्जित करेंगे/ कमाएंगे!`
          } else if (this.$i18n.locale === 'bn') {
            siteUrl = `আমি আপনাকে ভারতের প্রথম বুদ্ধিমান, সহজ এবং সুরক্ষিত এক্সচেঞ্জ অ্যাপ gintaa-এ যোগ দিতে আমন্ত্রণ জানাচ্ছি। এখানে আমার রেফারেল URL- URLLINK  লিঙ্কটি ব্যবহার করে সাইন আপ করুন এবং আপনার যোগদানের পুরষ্কার হিসাবে COINAMOUNT gintaa কয়েন উপার্জন করুন!`
          } else {
            siteUrl = `I’m inviting you to join gintaa, India's first intelligent, simple, & secure exchange app. Here is my referral URL- URLLINK. Sign up using it,and you'll earn COINAMOUNT gintaa coins (gc) as your joining reward!`;
          }

          // const siteUrl = `I’m inviting you to join gintaa, India's first intelligent, simple, & secure barter app. Here is my referral URL- URLLINK. Sign up using it,and you'll earn COINAMOUNT gintaa coins (gc) as your joining reward!`
          let replaceLink = siteUrl.replace('URLLINK', this.referralLink)
          this.currentUrl = replaceLink.replace('COINAMOUNT', data?.payload?.LOGIN_REFEREE)
          // console.log("this.currentUrl",this.currentUrl)
        }

      } catch (error) {
        console.log(error);
      }
    },
    referFriend() {
      if (this.isLoggedIn) {
        this.showSahreModal = !this.showSahreModal
      } else {
        let localPath = this.localePath('/wallet/my-wallet');
        window.localStorage.setItem("setPath", localPath);
        this.$router.push(this.localePath('/login'));
      }
      //this.showSahreModal = !this.showSahreModal
    },
    closeReferModal() {
      this.showSahreModal = !this.showSahreModal
    },

    redirectToPageFromTopBanner(path, imageName) {
      let imageUrl = ''
      if (imageName) {
        const channelId = 'WEB'
        const localLangPath = this.gcpSubFolder[this.$i18n.locale] ? this.gcpSubFolder[this.$i18n.locale] : '';
        const channelPath = channelId === 'WEB' ? '' : 'mobile/'
        const basePath = this.CDN_BASE_URL + '/web/web_new/top-banners/';
        imageUrl = basePath + channelPath + localLangPath + imageName;

        const analyticsdata = {
          channel_id: 'WEB',
          user_id: this.authUser ? this.authUser?.uid : null,
          banner_link: window.location.host + path,
          imageUrl: imageUrl
        };
        this.logEvent(analyticsdata)
      }

      if (path) {
        let localPath = this.localePath(path);
        if (!this.authUser) {
          window.localStorage.setItem("setPath", localPath);
          this.$router.push(this.localePath('/login'));
        } else {
          this.$router.push(localPath);

        }

      }

    },
    getTopBannerImageUrl(imageName, channelId = 'WEB') {
      if (imageName) {
        // const localLangPath = this.$i18n.locale === 'hi' ? 'Hindi/' : '';
        const localLangPath = this.gcpSubFolder[this.$i18n.locale] ? this.gcpSubFolder[this.$i18n.locale] : '';
        const channelPath = channelId === 'WEB' ? '' : 'mobile/'
        const basePath = this.CDN_BASE_URL + '/web/web_new/top-banners/';
        return basePath + channelPath + localLangPath + imageName;
      }
    },
    selectedLocation(location) {
      //  console.log("Home selectedLocation:", location)
      this.selectedAddress = location
      // && this.authUser
      if (this.selectedAddress) {
       // this.readDataFromStrapi()
        this.checkFoodViewEligibility()
      }
     // console.log("this.selectedAddress from header", this.selectedAddress)
    },

    loadSection(section_name) {
      // console.log('====loadSection====')
      // console.log('loadSection:', section_name)
      if (section_name === 'showHomeContent') {
        this.showHomeContent = true
      } else if (this.remoteData.web_home_category_wise_product_list[section_name]) {
        this.remoteData.web_home_category_wise_product_list[section_name].visibility = true
      }
    },

    scrollImpression(secName, marketname = null) {
      // console.log('scrolled Section:', secName);
      if (secName) {
        try {
          const analyticsdata = {
            channel_id: 'WEB',
            user_id: this.authUser ? this.authUser?.uid : null,
            section_name: secName,
            market_name: marketname

          };
          this.$fire.analytics.logEvent('gintaa_ad_impression_banner', analyticsdata)
          // console.log('gintaa_ad_impression_banner event log successfully', analyticsdata);
        } catch (e) {
          console.log('Gintaa analytics error:', e);
        }

      }

    },

  }
})
</script>
<style scoped>
.carousel-caption {
  left: 5% !important;
  right: 5% !important;

}

.top-box {
  box-shadow: -0.966px 2.903px 7px 0px rgb(0 0 0 / 5%);
}

.step {
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

.step-curve::after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border-bottom: 22px solid #75B422;
  border-right: 20px solid transparent;
  right: -20px;
  top: 0;

}

.step-curve::before {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border-top: 22px solid #75B422;
  border-left: 17px solid transparent;
  left: 0px;
  bottom: -22px;

}

.step-curveblue::after {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border-bottom: 22px solid #48CEF3;
  border-right: 20px solid transparent;
  right: -20px;
  top: 0;

}

.step-curveblue::before {
  position: absolute;
  content: '';
  width: 0;
  height: 0;
  border-top: 22px solid #48CEF3;
  border-left: 17px solid transparent;
  left: 0px;
  bottom: -22px;
}

.top-category-sec .vcustom-slider .slick-next {

  top: 30% !important;

}

.board-box {
  /* -webkit-box-shadow: 0 20px 20px 0 rgb(0 11 40 / 8%);
    box-shadow: 0 20px 20px 0 rgb(0 11 40 / 8%); */
  box-shadow: 0 10px 50px 0 rgb(26 38 74 / 7%);


}

.board-img-box {
  -webkit-box-shadow: 0 3px 7px 0 rgb(26 38 74 / 15%);
  box-shadow: 0 3px 7px 0 rgb(26 38 74 / 15%);

}

.bg-skew-home {
  -webkit-transform: perspective(100px) rotateX(50deg);
}

.rs-symbol {
  position: relative;
  display: inline-block;
  padding-left: 10px;
}


.take-pick {
  background: linear-gradient(270deg, #48CEF3 1.9%, #32CDF8 96.19%);
}

/* .bg-homematch-bg, .bg-homeexchange-bg, .bg-homelist-bg, .product-img img, .border-independence{
 border-width: 6px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #ff812c, #ffffff, #41a103) 46;} */
</style>