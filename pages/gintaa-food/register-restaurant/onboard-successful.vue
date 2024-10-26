<template>
    <div class="checkout-details-page bg-[#f2f2f2] min-h-screen w-full flex items-center justify-center">

        <div class="w-full pt-[0px] lg:pt-[0px] pb-10">
            <div class="container max-w-6xl mx-auto px-4 md:px-8 2xl:px-16 pt-5">
                <div class="w-full bg-white px-4 py-6 sm:px-6 md:px-6">
                    <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row">
                        <GintaaFoodAtomsRegisterResSidebar />

                        <div class="basis-full border-0 sm:border-0 sm:basis-full md:border-0 md:basis-full lg:basis-1/2 lg:border-l border-gray-200">
                            <div class="w-full pl-0 pr-0 sm:pl-6 sm:pr-6 md:pl-6 md:pr-6 lg:pr-0">
                                <div class="w-full bg-white px-0 sm:px-0 md:px-6 py-4 rounded-md relative">
                                    <GintaaFoodAtomsGeneralLogout/>
                                    <div class="w-full">
                                        <div class="w-full flex items-center justify-center mt-20">
                                            <div
                                                class="w-[80px] h-[80px] bg-[#1FBE58] rounded-full flex items-center justify-center">
                                                <svg width="34" height="28" viewBox="0 0 44 34" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M14 26.8955L3.5 16.2388L0 19.791L14 34L44 3.55224L40.5 0L14 26.8955Z"
                                                        fill="white" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            class="w-full flex items-center justify-center text-center text-2xl font-medium text-[#1FBE58] mt-6">
                                            {{ $t('congratulations') }}</div>
                                        <div
                                            class="w-full flex items-center justify-center text-center text-sm text-gray-700 mt-12">
                                            {{ $t('restaurantOnboarded') }}</div>
                                        <div
                                            class="w-full flex items-center justify-center text-center text-sm text-gray-700 mt-2 mb-20 font-medium">
                                            {{ $t('thankYou') }}</div>
                                            <div class="cursor-pointer w-full px-14 flex items-center justify-center">
                                            <a @click="goToDashBoard()" class="transition-all w-full flex justify-center items-center bg-firoza py-2 px-6 rounded font-normal text-base text-white ">
                                                <span >{{ $t('goDashboard') }}</span>                                                 
                                            </a>
                                           </div>
                                    </div>





                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    </div>
</template>
     
<script lang="ts">
import Vue from 'vue'
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import { mapState } from "vuex";
export default {
    name: 'OnboardSuccessful',

    data() {
        return {
            currentStep: 0,
            isNotgstregistered: false,
            showaddAddressModal: false,
            loading: false,
            showLoader: true,
            basicDocFormValid: false,
            isTermAndConditonChecked: true,
            image: {
                src: null,
                type: null, //"image/jpg",
                name: null
            },
            resDocValidation: {
                errorResturantFassai: null,
                errorResturnatLicense: null,
                errorResturnatgst: null
            },
            restaurantInfo: {
                rid: null,
                photoUrl: null,
                fssaiNumber: null,
                licenseNumber: null,
                minOrderPrice: null,
                gstNumber: null,
                gstPercent: 5,
                deliveryTime: null,
                discountPercent: null,
                deliveryCharge: null,
                location: null,
                resturantName: null,
                ownerName: null,
                verificationStatus: null,
            },

        }
    },

    computed: {
        ...mapState({
            authUser: (state) => state.authUser,
        }),
    },
    mounted() {
        console.log("this.authUser ", this.authUser)
        if (this.authUser && this.authUser.uid) {
            this.restaurantInfo.rid = this.authUser.uid
            this.getRestaurantDetails()
        }
    },
    methods: {

        goToDashBoard(){
            this.$router.push(this.localePath('/gintaa-food/vendor'));
        },

        setCurrentStep(currentStep) {
            this.currentStep = currentStep
        },

        async getRestaurantDetails() {
            try {
                const url = `/flisting/v1/restaurant/${this.restaurantInfo.rid}`
                const data = await this.$axios.$get(url);
                if (data && data.payload) {
                    console.log(" data.payload in index Page", data.payload)
                    const restaurantData = data.payload

                    console.log('restaurantData:', restaurantData);

                    this.workingIntervals = restaurantData.workingIntervals ? restaurantData.workingIntervals : []

                    if (restaurantData && restaurantData.photoUrl) {
                        this.restaurantInfo.photoUrl = restaurantData.photoUrl
                    }

                    this.restaurantInfo.fssaiNumber = restaurantData.fssaiNumber
                    this.restaurantInfo.gstNumber = restaurantData.gstNumber
                    this.restaurantInfo.gstPercent = restaurantData.gstPercent
                    this.restaurantInfo.minOrderPrice = restaurantData.minOrderPrice
                    this.restaurantInfo.status = restaurantData.status
                    this.restaurantInfo.name = restaurantData.name
                    this.restaurantInfo.phoneNumber = restaurantData.phoneNumber
                    this.restaurantInfo.email = restaurantData.email
                    this.restaurantInfo.location = restaurantData.location
                    this.restaurantInfo.deliveryCharge = restaurantData.deliveryCharge,
                        this.restaurantInfo.deliveryTime = restaurantData.deliveryTime,
                        this.restaurantInfo.discountPercent = restaurantData.discountPercent
                    this.restaurantInfo.licenseNumber = restaurantData.licenseNumber
                    this.restaurantInfo.ownerName = restaurantData.ownerName
                    this.restaurantInfo.verificationStatus = restaurantData.verificationStatus

                    console.log("restaurantData.verificationStatus", restaurantData.verificationStatus, restaurantData.onboardingCompleted)

                    if (restaurantData.verificationStatus === 'ACCEPTED' && restaurantData.onboardingCompleted) {
                        //this.$router.push(this.localePath('/my-listings'));
                    }
                }





                //  this.setTheCurrentStep()

                this.showLoader = false

            } catch (error) {
                this.showLoader = false
                console.log(error);
            }
        },

        //&& this.restaurantInfo.verificationStatus === null

        setTheCurrentStep() {
            if (!this.restaurantInfo.name || !this.restaurantInfo.ownerName) {
                this.currentStep = 2
            } else {
                this.currentStep = 3
            }

            console.log(" this.currentStep = 2", this.currentStep)
        },



        logout() {
            // this.calluserActivity()
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


    }
}
</script>
  
<style scoped>.dsDoM {
    padding-bottom: 0px !important;
}</style>
     
     
     