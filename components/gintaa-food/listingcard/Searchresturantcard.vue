<template>
    <div class="w-full">

        <div
            class="p-3 bg-[#FAFAFA] rounded-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <a :href="localePath(`/gintaa-food/resturant/rdetails/${listing.rid}`)" class="block cursor-pointer">
                <div :class="isImageWillGrayScale(listing) ? 'grayscale' : ''"
                    class="restaurant-img h-[180px] w-full overflow-hidden flex justify-center items-center rounded-xl  ">
                    <img v-if="getResturantImageUrl(listing.photoUrl)" :src="getResturantImageUrl(listing.photoUrl)"
                        class="object-cover  h-full w-[100%] rounded-xl transition duration-200 ease-in "
                        alt="Restaurent name" />

                    <img v-else src="~/assets/images/food/consumer/restaurant-no-image.jpg"
                        class="object-cover  h-full rounded-xl w-[100%]  transition duration-200 ease-in "
                        alt="Restaurent name" />

                    <div v-if="(listing.distance > 5 || listing.distance === 'Infinity')"
                        class="absolute bottom-0 w-full text-sm font-bold bg-opacity-30 bg-black py-1 text-center xl:font-[15px] 2xl:font-base"><span
                            class="block text-white uppercase">{{ $t('unavailableForDelivery') }}</span></div>
                            <div v-if="(listing.distance < 5 && listing.status === 'OFFLINE')" class="absolute bottom-0 w-full text-sm font-bold bg-opacity-30 bg-black py-1 text-center xl:font-[15px] 2xl:font-base"><span class="block text-white uppercase">{{ $t('offline') }}</span></div>
                </div>
                <div class="mt-5 mb-1">
                    <h2 class="res-name truncate text-sm md:text-base font-semibold text-gray-600">{{ listing.name }} </h2>
                </div>
                <div class="res-category text-[14px] text-gray-600 mb-2 w-full truncate h-[18px]">{{ listing.description }}
                </div>
                <div v-if="listing.location" class="res-location text-xs text-gray-400 mb-2 h-[25px] truncate">
                    {{ getAddressitemDet(listing.location) }}
                </div>
                <div class="km text-xs text-gray-400 relative font-medium flex items-center"><span v-if="listing.distance">{{
                    tofixedTwoDigitIndistance(listing.distance) }} Km</span> 
                    <div class="w-1 h-1 bg-gray-500 rounded-full mx-2"></div>
                    <span v-if="listing.deliveryTime"> {{
        listing.deliveryTime }} Mins (Approx) </span>
                    <div v-if="isResturantRatingExists(listing.avgRating)"
                        class="rating bg-[#8EC23C] px-2 py-1 text-sm font-medium text-white  leading-3 absolute right-0 top-0 flex items-center ">
                        {{ tofixedTwoDigit(listing.avgRating) }}

                        <svg width="12" height="12" class="ml-1" viewBox="0 0 46 44" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                fill="#ffffff"></path>
                        </svg>
                    </div>
                </div>
            </a>
        </div>

    </div>
</template>
          
            
            
<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
export default Vue.extend({
    name: 'Searchresturantcard',
    props: ['listing'],
    middleware: 'authenticated',
    asyncData() {
        return {
            topsellerList: [],
            loading: true,

        }
    },
    data() {
        return {
            btnloading: false
        }
    },
    computed: {
        ...mapState({
            authUser: state => state.authUser
        }),
        ...mapGetters({
            isLoggedIn: 'isLoggedIn'
        })
    },

    beforeMount() {
        // console.log("selllerDet---------------------",this.listing)
    },
    methods: {

        isImageWillGrayScale(resLisitng) {
            if (resLisitng.status === 'OFFLINE') {
                return true
            } else if (resLisitng.distance > 5) {
                return true
            } else if (resLisitng.distance === 'Infinity') {
                return true
            } else {
                return false
            }
        },

        tofixedTwoDigitIndistance(distance: any) {
            if (distance) {
                if (distance === 'Infinity') {
                    return distance
                } else {
                    return distance.toFixed(1)
                }

            }
        },

        getResturantImageUrl(imageUrl: any) {
            const defaultImage = "~/assets/images/profile/chatu-noimg.svg";
            if (imageUrl && !imageUrl.match("deleted.jpeg") && imageUrl !== 'null') {
                return imageUrl;
            } else {
                return false;
            }
        },

        isResturantRatingExists(resturantRet: any) {
            if (resturantRet && resturantRet !== null && resturantRet !== 0 && resturantRet !== '') {
                return true
            } else {
                return false
            }
        },

        tofixedTwoDigit(rating: any) {
            if (rating) {
                return rating.toFixed(1)
            }
        },

        getAddressitemDet(addressItemDet: any) {
            const addDetArray = []
            if (addressItemDet) {
                addDetArray.push(addressItemDet?.addressLine, addressItemDet?.flatNo, addressItemDet?.area,
                    addressItemDet?.city, addressItemDet?.landmark, addressItemDet?.state, addressItemDet?.zip)
            }
            if (addDetArray.length) {
                var filtered = addDetArray.filter(function (el) {
                    return el != null;
                });
                return filtered.join();
            }
        },

        slugify(text) {
            if (text) {
                return text
                    .toString() // Cast to string
                    .toLowerCase() // Convert the string to lowercase letters
                    .normalize('NFD') // The normalize() method returns the Unicode Normalization Form of a given string.
                    .trim() // Remove whitespace from both sides of a string
                    .replace(/\s+/g, '-') // Replace spaces with -
                    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
                    .replace(/\-\-+/g, '-') // Replace multiple - with single -
            }
            return text
        },

    }



})

</script>
            
<style scoped>
/* @media only screen and (min-device-width: 0px) and (max-device-width: 410px){
        .shop-top{ height: 45px; }
        .market-local-card{ padding: 0px 40px;}
      }
      
      @media only screen and (min-device-width: 411px) and (max-device-width: 480px){
        .shop-top{ height: 45px; }
        .market-local-card{ padding: 0px 45px; }
      }
     
      @media only screen and (min-device-width: 481px) and (max-device-width: 550px){
        .shop-top{ height: 45px; }
        .market-local-card{ padding: 0px 50px; }
      } */

@media only screen and (min-device-width: 0px) and (max-device-width: 767px) {
    .market-local-card {
        width: 270px;
    }
}

@media only screen and (min-device-width: 1200px) and (max-device-width: 1400px) {
    .market-local-card {
        width: 260px;
    }
}

@media only screen and (min-device-width: 1701px) and (max-device-width: 3000px) {
    .market-local-card {
        width: 270px;
    }
}</style>