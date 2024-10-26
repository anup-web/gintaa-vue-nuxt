<template>
    <div class="w-full">
        <div class="w-full  pb-3 bg-[#FAFAFA] rounded-lg relative transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div class="border-b border-gray-200 px-4 py-3  relative pr-[40px]">
                <div class="w-full">
                    <div class="text-left text-[13px] font-medium text-gray-500 pb-1">By {{ listing.foodResName }}</div>
                    <div v-if="listing.avgRating" class="flex items-center bg-green px-1 py-[1px] w-[40px]">
                        <span class="text-xs text-white mr-1">{{ tofixedTwoDigit(listing.avgRating) }}</span>
                        <svg width="12" height="12" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                fill="#ffffff"></path>
                        </svg>
                    </div>
                </div>
                <a :href="localePath(`/gintaa-food/resturant/rdetails/${listing.rid}`)" class="absolute right-2 top-4">
                    <svg width="18" height="16" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.405 17.2438C14.405 17.2438 20.0312 11.6125 22.2237 9.41875C22.4062 9.23625 22.4975 8.99625 22.4975 8.75625C22.4975 8.51625 22.4062 8.2775 22.2237 8.09375C20.0325 5.90125 14.405 0.27125 14.405 0.27125C14.225 0.09 13.9875 0 13.75 0C13.5087 0 13.2688 0.0924996 13.085 0.27625C12.7188 0.64125 12.7163 1.23375 13.08 1.59625L19.3025 7.81875H0.9375C0.42 7.81875 0 8.23875 0 8.75625C0 9.27375 0.42 9.69375 0.9375 9.69375H19.3025L13.0787 15.9175C12.7175 16.2787 12.7212 16.87 13.0862 17.235C13.2712 17.42 13.5125 17.5125 13.7525 17.5125C13.99 17.5125 14.225 17.4225 14.405 17.2438Z"
                            fill="#646464" />
                    </svg>
                </a>

            </div>

            <div class="flex px-4 mt-4">

                <div class="mr-4 flex flex-1 flex-col ">
                    <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect>
                            <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle>
                        </svg> -->
                    <svg v-if="listing.type === 'NON_VEG'" width="20" height="20" viewBox="0 0 20 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect>
                        <circle cx="10" cy="9" r="5" fill="#EE1029"></circle>
                    </svg>
                    <svg v-if="listing.type === 'VEG'" width="20" height="19" viewBox="0 0 20 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58" />
                        <circle cx="10" cy="9" r="5" fill="#1FBE58" />
                    </svg>
                    <!-- <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="19" height="18" stroke="#EE1029"></rect> <circle cx="10" cy="9" r="5" fill="#EE1029"></circle></svg> -->
                    <div class="text-left text-sm font-medium text-gray-600 mt-3">{{ listing.name }}</div>
                    <div class="flex items-center text-[13px] text-gray-500 font-medium mt-1">
                        <svg width="6" height="11" viewBox="0 0 11 18" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z"
                                fill="black"></path>
                        </svg>
                        <span class="pl-0.5">{{ listing.price }}</span>
                    </div>
                    <div class="text-left text-[12px] text-gray-500 mt-3 h-[39px] overflow-hidden">{{ listing.description }}
                    </div>
                </div>
                <div class="flex-shrink-0">
                    <div class="h-32 w-32 overflow-hidden">
                        <img v-if="listing.imageUrl" :src="listing.imageUrl" :alt="listing.imageUrl"
                            class="object-cover rounded-md h-full w-[100%]  transition duration-200 ease-in " />
                        <img v-else src="~/assets/images/food/consumer/no-dish.jpg" alt="no-dish"
                            class="object-cover rounded-md h-full w-[100%]  transition duration-200 ease-in " />
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
          
            
            
<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
export default Vue.extend({
    name: 'Searchrdishcard',
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
        console.log("selllerDet---------------------", this.listing)
    },
    methods: {

        resturantLink() {
            this.$router.push(`gintaa-food/resturant/rdetails/` + this.listing.rid);

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
                addDetArray.push(addressItemDet?.name + `\n` + addressItemDet?.addressLine, addressItemDet?.flatNo, addressItemDet?.area,
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
}
</style>