<template>
  <div class="fixed top-0 bg-white  shadow-sm w-full py-2 sm:py-2 md:py-5 right-0 z-40">
    <div class="pl-0 sm:pl-0 md:pl-[180px] lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px]">
      <div class="flex flex-row items-center justify-between">
        <div >
          <div class="pl-4">
            <a 
              href="javascript:;" 
              class="hidden sm:hideen md:hidden">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0 1C0 0.447715 0.358172 0 0.8 0H15.2C15.6418 0 16 0.447715 16 1C16 1.55228 15.6418 2 15.2 2H0.8C0.358172 2 0 1.55228 0 1ZM0 7C0 6.44772 0.358172 6 0.8 6H15.2C15.6418 6 16 6.44772 16 7C16 7.55228 15.6418 8 15.2 8H0.8C0.358172 8 0 7.55228 0 7ZM0.8 12C0.358172 12 0 12.4477 0 13C0 13.5523 0.358172 14 0.8 14H15.2C15.6418 14 16 13.5523 16 13C16 12.4477 15.6418 12 15.2 12H0.8Z"
                  fill="#8CAEC5" />
              </svg>
            </a>
            <a href="#" class="block sm:block md:hidden" title="gintaa">
              <img src="~/assets/images/food/food-only.svg" alt="logo" class="w-[70px]"/>
           </a>
          </div>
        </div>
        <div >
          <client-only>
            <ul v-if="authUser" class="pr-4 space-x-3 sm:space-x-4 sm:pr-4 md:pr-8 md:space-x-4 lg:space-x-3 xl:space-x-8 items-center flex justify-end">
              <li>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    value="" 
                    :checked="restaurantInfo.status !== 'OFFLINE' ? true : false"
                    @change="changeOnlineStatus($event)"
                    class="sr-only peer">
                  <div
                    class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                  </div>
                  <span 
                    v-if="restaurantInfo.status === 'OFFLINE'"
                    class="ml-1 sm:ml-3 md:ml-3 text-sm font-medium text-gray-900 text-gray-300">{{ $t('offline') }}</span>
                  <span 
                    v-else
                    class="ml-1 sm:ml-3 md:ml-3 text-sm font-medium text-gray-900 text-blue-600">{{ $t('resOnline') }}</span>
                </label>
                <GintaaFoodAtomsPlacedOrderList  @acceptSuccesful="acceptSuccesful" @fetchOrderList="fetchOrderList" @noPlacedorderFound="noPlacedorderFound"/>
                <!-- <label class="flex items-center relative w-max cursor-pointer select-none">
        
                    <input type="checkbox" class="appearance-none transition-colors cursor-pointer w-[90px] h-7 rounded-full focus:outline-none  bg-red-500" />
                    <span class="absolute font-medium text-xs uppercase right-1 text-white"> Offline </span>
                    <span class="absolute font-medium text-xs uppercase right-8 text-white">  </span>
                    <span class="w-7 h-7 right-[32px] absolute rounded-full transform transition-transform bg-gray-200" />
                  </label> -->
              </li>
              <li class="relative group">
                <a href="/gintaa-food/vendor/notification"
                  class="flex items-center justify-center w-[32px] h-[32px] sm:w-[32px] sm:h-[32px] md:w-[37px] md:h-[37px] rounded-sm border-[#8CAEC5] border relative ">
                  <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13.0201 3.67805C13.0369 3.56 13.0456 3.43935 13.0456 3.31667C13.0456 1.91064 11.9058 0.770836 10.4997 0.770836C9.09371 0.770836 7.95391 1.91064 7.95391 3.31667C7.95391 3.4394 7.96259 3.56011 7.97938 3.6782C4.28581 4.76552 1.5896 8.18143 1.5896 12.2271L1.5896 19.8646C0.886585 19.8646 0.316681 20.4345 0.316681 21.1375C0.316681 21.8405 0.886585 22.4104 1.5896 22.4104H19.4104C20.1134 22.4104 20.6833 21.8405 20.6833 21.1375C20.6833 20.4345 20.1134 19.8646 19.4104 19.8646L19.4104 12.2271C19.4104 8.18124 16.714 4.76519 13.0201 3.67805ZM7.95429 23.6832C7.95443 25.0891 9.09419 26.2288 10.5001 26.2288C11.9061 26.2288 13.0458 25.0891 13.046 23.6832H7.95429ZM16.8645 12.2272V19.8646H4.13534V12.2272C4.13534 8.71212 6.98486 5.8626 10.4999 5.8626L10.776 5.86848C14.163 6.01303 16.8645 8.80462 16.8645 12.2272Z"
                      fill="#8CAEC5" />
                  </svg>
                  <span
                    v-if="notification.unseenNotificationCount"
                    class="text-[9px] absolute block pl-[6px] pr-[6px] rounded-full pt-[2px] pb-[2px] -top-[10px] -right-[10px] bg-[#ef3022] text-white">
                    {{notification.unseenNotificationCount}}
                  </span>

                </a>
                <!-- <div class=" absolute hidden   pt-[10px] group-hover:block w-[400px] right-0 z-50 ">
                  <div class="drop drop-notification  bg-white text-gray-600 before:shadow-[2xl] before:top-1 rounded">
                    <h2 class="px-3 py-3 border-b border-gray-200 font-medium text-sm text-[#536598] relative">
                      Notifications
                      <a href="#" class="absolute right-2 text-[13px]">Check All</a>
                    </h2>
                    <ul>
                      <li class=" relative mb-2 cursor-pointer">
                        <div class="bg-white shadow px-6 py-3  relative pl-[80px] min-h-[65px]">
                          <img src="~/assets/images/notification-icon.svg"
                            class="absolute left-3 top-3 w-[40px] h-[40px] rounded-full" />


                          <h2 class="font-medium text-[13px] text-[#6f7fa9] pb-2 break-words pr-5 relative">Demo title
                            goes
                            <span class="text-[11px] text-gray-400  absolute right-0 top-0">8 days ago</span>
                          </h2>
                          <div class="text-xs text-gray-500 break-words">Lorem ipsum type setting</div>

                        </div>
                      </li>
                      <li class=" relative mb-2 cursor-pointer">
                        <div class="bg-white shadow px-6 py-3  relative pl-[80px] min-h-[65px]">
                          <img src="~/assets/images/notification-icon.svg"
                            class="absolute left-3 top-3 w-[40px] h-[40px] rounded-full" />


                          <h2 class="font-medium text-[13px] text-[#6f7fa9] pb-2 break-words pr-5 relative">Demo title
                            goes
                            <span class="text-[11px] text-gray-400  absolute right-0 top-0">8 days ago</span>
                          </h2>
                          <div class="text-xs text-gray-500 break-words">Lorem ipsum type setting</div>

                        </div>
                      </li>
                      <li class=" relative mb-2 cursor-pointer">
                        <div class="bg-white shadow px-6 py-3  relative pl-[80px] min-h-[65px]">
                          <img src="~/assets/images/notification-icon.svg"
                            class="absolute left-3 top-3 w-[40px] h-[40px] rounded-full" />


                          <h2 class="font-medium text-[13px] text-[#6f7fa9] pb-2 break-words pr-5 relative">Demo title
                            goes
                            <span class="text-[11px] text-gray-400  absolute right-0 top-0">8 days ago</span>
                          </h2>
                          <div class="text-xs text-gray-500 break-words">Lorem ipsum type setting</div>

                        </div>
                      </li>
                    </ul>
                  </div>
                </div> -->

              </li>

              <li class="group relative"><a href="#" class="flex items-center">
                  <span class="flex justify-center items-center w-[32px] h-[32px] sm:w-[32px] sm:h-[32px] md:w-[37px] md:h-[37px] rounded-sm border-[#8CAEC5] border mr-2 sm:mr-3 md:mr-3">
                    <!-- <img src="~/assets/images/bcreation.jpg" class="max-w-full rounded-sm" /> -->
                    <img v-if="restaurantInfo.photoUrl" :src="restaurantInfo.photoUrl" :alt="firstName" class="w-[26px] h-[26px] sm:w-[26px] sm:h-[26px] md:w-[32px] md:h-[32px] rounded-sm">
                    <img v-else src="~/assets/images/profile/chatu-noimg.svg" :alt="firstName" class="max-w-full rounded-sm">
                  </span>
                  <span class="text-sm text-gray-500 leading-[30px] block ">
                    <!-- {{authUser.displayName | truncate(15,'...') }} -->
                    {{ firstName }}
                    <!-- Abhaya -->
                  </span>
                </a>
                <div class=" absolute hidden   pt-[10px] group-hover:block w-[200px] right-0 z-50 ">
                  <ul class="drop  bg-white text-gray-600 before:shadow-[2xl] before:top-1 rounded">
                    <li class="text-xsb">
                      <a :href="localePath('/gintaa-food/vendor/restaurant-profile')"
                        class=" border-b bg-white rounded-t border-gray-200 hover:text-firoza py-3 px-4  whitespace-no-wrap flex items-center transition-all">
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                          class="mr-4 transition-all">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8.5 2C6.84315 2 5.5 3.34315 5.5 5C5.5 6.65685 6.84315 8 8.5 8C10.1569 8 11.5 6.65685 11.5 5C11.5 3.34315 10.1569 2 8.5 2ZM3.5 5C3.5 2.23858 5.73858 0 8.5 0C11.2614 0 13.5 2.23858 13.5 5C13.5 7.76142 11.2614 10 8.5 10C5.73858 10 3.5 7.76142 3.5 5ZM1.46447 13.4645C2.40215 12.5268 3.67392 12 5 12H12C13.3261 12 14.5979 12.5268 15.5355 13.4645C16.4732 14.4021 17 15.6739 17 17V19C17 19.5523 16.5523 20 16 20C15.4477 20 15 19.5523 15 19V17C15 16.2043 14.6839 15.4413 14.1213 14.8787C13.5587 14.3161 12.7956 14 12 14H5C4.20435 14 3.44129 14.3161 2.87868 14.8787C2.31607 15.4413 2 16.2044 2 17V19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19V17C0 15.6739 0.526784 14.4021 1.46447 13.4645ZM23.7071 7.70711C24.0976 7.31658 24.0976 6.68342 23.7071 6.29289C23.3166 5.90237 22.6834 5.90237 22.2929 6.29289L19 9.58579L17.7071 8.29289C17.3166 7.90237 16.6834 7.90237 16.2929 8.29289C15.9024 8.68342 15.9024 9.31658 16.2929 9.70711L18.2929 11.7071C18.6834 12.0976 19.3166 12.0976 19.7071 11.7071L23.7071 7.70711Z"
                            fill="#616364" />
                        </svg>

                        {{ $t('myAccount') }}</a>
                    </li>
                    <li class="text-xsb">
                      <a class=" bg-white border-b rounded-b border-gray-200 hover:text-firoza transition-all py-3 px-4  whitespace-no-wrap flex items-center cursor-pointer"
                        @click="confirmLogout()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                          class="mr-4 transition-all">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5 4C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H9C9.55228 2 10 2.44772 10 3C10 3.55228 9.55228 4 9 4H5Z"
                            fill="#616364" />
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M15.2929 6.29289C15.6834 5.90237 16.3166 5.90237 16.7071 6.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L16.7071 17.7071C16.3166 18.0976 15.6834 18.0976 15.2929 17.7071C14.9024 17.3166 14.9024 16.6834 15.2929 16.2929L19.5858 12L15.2929 7.70711C14.9024 7.31658 14.9024 6.68342 15.2929 6.29289Z"
                            fill="#616364" />
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8 12C8 11.4477 8.44772 11 9 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H9C8.44772 13 8 12.5523 8 12Z"
                            fill="#616364" />
                        </svg>

                        {{ $t('logout') }}</a>
                    </li>
                  </ul>
                </div>

              </li>
            </ul>
          </client-only>

        </div>
      </div>
    </div>

    <!-- Start Manage logout confirm popup -->
    <div v-if="isConfirmLogout"
      class="bg-white fixed z-[99999999] top-[50%] left-[50%]  shadow [290px] md:w-[400px]  translate-x-[-50%] translate-y-[-50%] p-4 rounded-md mx-auto">

      <div class="w-[50px] h-[50px] rounded-full border border-firoza border-1 mx-auto flex justify-center items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="transition-all">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M5 4C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H9C9.55228 20 10 20.4477 10 21C10 21.5523 9.55228 22 9 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7957 2 19V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H9C9.55228 2 10 2.44772 10 3C10 3.55228 9.55228 4 9 4H5Z"
            fill="#48CEF3" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M15.2929 6.29289C15.6834 5.90237 16.3166 5.90237 16.7071 6.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L16.7071 17.7071C16.3166 18.0976 15.6834 18.0976 15.2929 17.7071C14.9024 17.3166 14.9024 16.6834 15.2929 16.2929L19.5858 12L15.2929 7.70711C14.9024 7.31658 14.9024 6.68342 15.2929 6.29289Z"
            fill="#48CEF3" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M8 12C8 11.4477 8.44772 11 9 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H9C8.44772 13 8 12.5523 8 12Z"
            fill="#48CEF3" />
        </svg>
      </div>
      <h1 class="text-center text-[16px] font-medium pt-[15px] pb-[10px]">{{ $t('confirmLogoutPop') }}</h1>
      <h3 class="text-center text-[13px] text-[#4a4a4a] font-normal">{{ $t('logoutConfirm') }}</h3>
      <div class="mt-[25px] flex justify-end w-full items-center">
        <div><button @click="logout"
            class=" px-3 py-2  rounded text-sm font-medium text-green">{{ $t('yesLogout') }}</button>
        </div>
        <div class="pl-5"><button @click="cancelLogout()"
            class=" px-3 py-2  rounded text-sm font-medium text-green">{{ $t('cancelBtn') }}</button></div>
      </div>

    </div>
    <div v-if="isConfirmLogout" class="fixed w-full h-full z-[9999999] top-0 left-0 bg-black opacity-40">
    </div>
    <!-- End Manage logout confirm popup -->
    
    <!-- Start vendor mobile menus -->
    <div  aria-labelledby="modal-title" role="dialog" aria-modal="true" class="fixed z-50 inset-0 overflow-y-auto hidden">
         <div  class="flex items-start justify-start min-h-screen px-4">
              <div  aria-hidden="true" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
         <div  class="bg-white p-4 overflow-x-hidden overflow-y-auto shadow-xl transform transition-all fixed top-0 left-0 max-w-full h-screen auto-scroll sm:max-w-[500px] md:max-w-[500px] lg:max-w-[500px] xl:max-w-[500px] 2xl:max-w-[500px]">
        <div  class="block sm:block absolute top-0 right-0 pt-4 pr-4">
              <a  href="javascript:;" type="button" class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span  class="sr-only">Close</span> 
                  <svg  fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </a>
       </div>
       <div  class="w-full flex flex-col">
            <div  class="flex flex-col w-full">
              <h1  class="text-lg text-gray-900 font-normal">{{ $t('foodMenus') }}</h1>
              <div>
                  <ul class="flex-1 space-y-0 sm:space-y-0 md:space-y-0 lg:space-y-3">
                      <li>
                         <a href="/gintaa-food/vendor/add-category" title="Add Category" class="text-sm py-2 pl-5 flex items-center text-gray-700  relative ">
                             <span class="menu-name">{{ $t('foodAddCategory') }}</span>
                         </a>
                      </li> 
                      <li>
                         <a href="/gintaa-food/vendor/add-menu" title="Add Menu" class="text-sm py-2 pl-5 flex items-center text-gray-700  relative ">
                             <span class="menu-name">{{ $t('foodaddMenu') }}</span>
                         </a>
                      </li> 
                      <li>
                          <a href="/gintaa-food/vendor/menu" title="View Menu" class="text-sm py-2 pl-5 flex items-center text-gray-700  relative ">
                            <span class="menu-name">{{ $t('viewMenu') }}</span>
                          </a>
                        </li>

                        <li>
                          <a href="/gintaa-food/vendor/payments" title="payments" class="text-sm py-2 pl-5 flex items-center text-gray-700  relative ">
                            <span class="menu-name"> {{ $t('foodPayments') }} </span>
                          </a>
                        </li>

                      </ul>
                    </div>
            </div>

      </div>
    </div>
  </div>
 </div>
 <!-- End vendor mobile menus -->

  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import search from '~/pages/search.vue'

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      pageName: 'Header',
      showAddMobilePopup: false,
      current_env: this.$config.CURRENT_ENV,
      mainSearch: this.$route.query.searchText || '',
      showMobileMenu: false,
      showHamburgermenu: false,
      notification: {
        collectionName: 'users',
        unseenNotificationCount: 0
      },
      remoteData: {
        web_home_top_categories: {},

      },
      isConfirmLogout: false,
      searchHistory: [],
      showSearchHistory: false,
      showbackground: false,
      showSearch: false,
      loading: false,
      dealChats: [],
      cateGoryList: [], //this.$config.CURRENT_ENV === 'dev'? verticalListDev : this.$config.CURRENT_ENV === 'beta' ? verticalListBeta : verticalListProd,
      showPromocodePopup: false,
      isCouponFormValid: false,
      loadingApplyBtn: false,
      promocode: '',
      promocodeErrmsg: '',
      showAddressSidebar: false,
      selectedAddress: null,

      addressObj: {
        place_id: null,
        name: null,
        formatted_address: null,
        address_components: [],
      },
      marker: { position: { lat: 10, lng: 10 } },
      restaurantInfo: {
        rid: null,
        photoUrl: null,
        fssaiNumber: null,
        tradeLicense: null,
        minOrderPrice: null,
        gstNumber: null,
        gstPercent: 5,
        estimateDeleveryTime: null,
        discountAmount: null,
        status: 'OFFLINE'
      },
      expendLeftNavBar: true
    }

  },

  head() {
    let currentUrl = this.$route.fullPath
    return {
      meta: [
        // for ios app open
        { name: 'apple-itunes-app', content: `app-id=1583773926, app-argument=${currentUrl}` },
      ]
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapState({
      firstName: (state) => {
        return state.authUser.displayName ? state.authUser.displayName.replace(/ .*/, '') : ''
      }
    }),
    ...mapState({
      addresses: (state) => {
        return state.addresses
      }
    }),
    ...mapState({
      profileData: (state) => {
        return state.profile
      }
    })
  },
  beforeMount() {
    if (this.authUser) {
      this.$store.dispatch('getProfile', { self: this })
    }
  },
  mounted() {
    this.implementClarityCode();
    this.implementFacebookCode();

    if (this.authUser) {
      // this.$store.dispatch('getAddresses', { self: this })
      // this.$store.dispatch('getProfile', { self: this })
      this.getUnseenNotificationCount(this.authUser?.uid, null)

      this.restaurantInfo.rid = this.authUser.uid
      this.getRestaurantDetails() 
    }
  },
  methods: {
    acceptSuccesful(){
     console.log("order accepted")
    // this.$emit("acceptSuccesful", true);
    },
    fetchOrderList(){
    console.log("fetch list again")
    this.$emit("fechTheOrdersAgain", true);
    },
    noPlacedorderFound(){
      this.$emit("npPlacedOrderFound", true);
    },
    implementClarityCode() {
      if (process.client) {

        if (this.current_env === 'dev') {
          // for DEV enviroment
          (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
          })(window, document, "clarity", "script", "dgo33n0hkn");

        } else if (this.current_env === 'beta') {
          // for BETA enviroment
          (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
          })(window, document, "clarity", "script", "dhq8xnr708");

        } else if (this.current_env === 'prod') {
          // for BETA enviroment
          (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
          })(window, document, "clarity", "script", "dhvxcgx2iu");
        }
      }
    },

    implementFacebookCode() {
      //  console.log("this.current_env",this.current_env)
      if (process.client) {

        if (this.current_env === 'dev') {
          // for DEV enviroment

        } else if (this.current_env === 'beta') {
          // for BETA enviroment

        } else if (this.current_env === 'prod') {
          // for Prod enviroment
          //  console.log("Called event")

          !function (f, b, e, v, n, t, s) {
            if (f.fbq) return; n = f.fbq = function () {
              n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
            n.queue = []; t = b.createElement(e); t.async = !0;
            t.src = v; s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
          }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '615425790324579');
          fbq('track', 'PageView');

        }
      }
    },

    getUnseenNotificationCount(userId, businessId) {
      return this.$fire.firestore.collection(this.notification.collectionName)
        .doc(userId)
        .onSnapshot((res) => {
          const userData = res.data()
          const notificationStat = userData.notificationStat
          let unSeenNotificationCount = 0
          if (notificationStat) {
            unSeenNotificationCount = (!businessId) ? notificationStat.food : notificationStat[businessId]
          }
          // console.log('unSeenNotificationCount:', unSeenNotificationCount);
          this.notification.unseenNotificationCount = unSeenNotificationCount
          return unSeenNotificationCount
        })
    },
    cancelLogout(){
      this.isConfirmLogout = false;      
    },
    confirmLogout(){
      this.isConfirmLogout = true;
    },
    logout(){
      this.calluserActivity()
      if (window.localStorage.getItem("setPath") != null) {
        window.localStorage.removeItem("setPath");
      }
      window.localStorage.removeItem("setGridActiveClass");
      window.localStorage.removeItem("setListActiveClass");
     
      this.$fire.auth.signOut()
      if (this.$route.path === '/' || this.$route.path === '') {
        window.location.reload(true)
      } else {
        this.$router.replace({ path: this.localePath('/') })
      }
    },
    async calluserActivity() {
      const pathName = 'LOGOUT'
      const projectId = this.$fireModule.apps[0].options.projectId
      const region = this.$fire.functions._region
      const url = `https://${region}-${projectId}.cloudfunctions.net/userActivity`
      try {
        const appcheckToken = await this.$fire.appCheck.getToken()
        const headers = {
          'X-Firebase-AppCheck': appcheckToken.token,
          'Accept-Language': this.$i18n.locale
        }
        const userActivity = await this.$axios.$post(url, { data: { url: pathName } }, { headers })
      } catch (error) {
        console.log(error)
      }
    },
    async getRestaurantDetails() {
      try {
        const url = `/flisting/v1/restaurant/${this.restaurantInfo.rid}`
        const data = await this.$axios.$get(url);
        if(data && data.payload){
          const restaurantData = data.payload

          if( restaurantData && restaurantData.photoUrl){
            this.restaurantInfo.photoUrl = restaurantData.photoUrl
          }
          
          this.restaurantInfo.fssaiNumber   = restaurantData.fssaiNumber
          this.restaurantInfo.gstNumber     = restaurantData.gstNumber
          this.restaurantInfo.gstPercent    = restaurantData.gstPercent
          this.restaurantInfo.minOrderPrice = restaurantData.minOrderPrice
          this.restaurantInfo.status        = restaurantData.status
        }

        this.showLoader = false
        this.$emit('resturantStatus',  this.restaurantInfo.status);

        
      } catch (error) {
        this.showLoader = false
        console.log(error);
      }
    },
    async changeOnlineStatus(event){
      try{
        console.log('Update online status:', event)
        let url = ''
        if(this.restaurantInfo.status === 'OFFLINE'){
          // Change to ONLINE
          this.restaurantInfo.status = 'ONLINE'
          url = `/flisting/v1/restaurant/${this.restaurantInfo.rid}/online`
        } else {
          // Change to OFFLINE
          this.restaurantInfo.status = 'OFFLINE'
          url = `/flisting/v1/restaurant/${this.restaurantInfo.rid}/offline`
        }
        this.$emit('resturantStatus', this.restaurantInfo.status);
        const requestBody = {}
        const data = await this.$axios.$post(url, requestBody);
        console.log('Update online status:', data)

      } catch(err){
        console.log('Update online status: err', err)
      }
    }
  }
});
</script>
<style>
input:checked {
  background-color: #22c55e;
  /* bg-green-500 */
}

input:checked~span:last-child {
  --tw-translate-x: 1.75rem;
  /* translate-x-7 */
}

.drop::before {
  content: '';
  border-bottom: 10px solid #ffffff;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: absolute;
  right: 60px;

}

.drop.drop-notification::before {
  right: 15px;
}

.drop {
  box-shadow: rgb(165 165 165) -1px -1px 10px 0px;
}

ul.drop li a:hover svg path {
  fill: #48CEF3 !important;

}

ul.drop li a:hover svg path {
  stroke: #48CEF3 !important;

}</style>