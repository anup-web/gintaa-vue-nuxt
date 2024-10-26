<template>
    <div class="checkout-details-page bg-[#f2f2f2] min-h-screen w-full flex items-center justify-center">
       <fullPageLoader v-if="showLoader" />
      
    <div class="w-full pt-[0px] lg:pt-[0px] pb-10">
     <div class="container max-w-6xl mx-auto px-4 md:px-8 2xl:px-16 pt-5"> 
          <div class="w-full bg-white px-4 py-6 sm:px-6 md:px-6">
           <div class="flex flex-col sm:flex-col md:flex-col lg:flex-row">
             <GintaaFoodAtomsRegisterResSidebar/>
            
             <GintaaFoodAtomsRestimeselectionStepFive v-if="currentStep && currentStep === 4" @setCurrentStep="setCurrentStep"/>
             <GintaaFoodAtomsResbankaccountaddStepSix v-if="currentStep && currentStep === 5" @setCurrentStep="setCurrentStep"/>
                           
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
    middleware: "authenticated",
    name: 'CompleteProfile',
  
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
          onboardingCompleted : null,
        },
  
      }
    },
  
    computed: {
      ...mapState({
        authUser: (state) => state.authUser,
      }),
    },
    mounted() {
      console.log("this.authUser ",this.authUser )
      if (this.authUser && this.authUser.uid) {
        this.restaurantInfo.rid = this.authUser.uid
        this.getRestaurantDetails()
      }
    },
    methods: {
  
      setCurrentStep(currentStep){
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
            this.restaurantInfo.onboardingCompleted = restaurantData.onboardingCompleted
          }
  
  
         this.setTheCurrentStep()

          // console.log("this.restaurantInfo.verificationStatus",this.restaurantInfo.verificationStatus,this.restaurantInfo.onboardingCompleted)

          // if (this.restaurantInfo.verificationStatus === 'ACCEPTED' && !this.restaurantInfo.onboardingCompleted) {
          //           this.setTheCurrentStep()
          //       } else if (this.restaurantInfo.verificationStatus === 'REJECTED') {
          //         this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant/basic-info`) })
          //       } else if (this.restaurantInfo.verificationStatus === 'PENDING' && !this.restaurantInfo.onboardingCompleted) {
          //           this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant/${this.restaurantInfo.verificationStatus}`) })
          //       }else if(this.restaurantInfo.verificationStatus === 'ACCEPTED' && this.restaurantInfo.onboardingCompleted){
          //           this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant/onboard-successful`) })
          //       }
  
          this.showLoader = false
  
        } catch (error) {
          this.showLoader = false
          console.log(error);
        }
      },
  
      //&& this.restaurantInfo.verificationStatus === null
  
      setTheCurrentStep() {
        if ( this.workingIntervals.length ==  0 || this.restaurantInfo.deliveryCharge == null || !this.restaurantInfo.deliveryTime || this.restaurantInfo.discountPercent == null || !this.restaurantInfo.minOrderPrice  ) {
          this.currentStep = 4
        } else {
          this.currentStep = 5
        }
  
        console.log(" this.currentStep ", this.currentStep)
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
  

  <style scoped>
      .dsDoM {            
           padding-bottom: 0px!important;            
       }
  </style>
  
  
  