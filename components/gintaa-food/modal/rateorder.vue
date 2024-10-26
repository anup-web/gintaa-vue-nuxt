<template>
    <div class="relative z-50 " aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed inset-0 z-50 overflow-y-auto">
            <div class="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">

                <div
                    class="relative transform overflow-hidden rounded-lg bg-white px-0 pt-2 pb-4 text-left shadow-xl transition-all sm:my-4 sm:w-full sm:max-w-sm ">

                    <div class="w-full">
                        <div class="flex items-center justify-between border-b-2 border-gray-200 px-4 pb-2">
                            <div class="text-base text-gray-900">{{ $t('rating') }}</div>
                            <div class="absolute top-0 right-0 pt-2 pr-2 block">
                                <button @click="closeRateModal()" type="button" class="rounded-md bg-white text-gray-400 ">
                                    <span class="sr-only">Close</span>

                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="w-full flex items-center justify-center mt-6">
                            <img src="~/assets/images/food/rating-image.svg" alt="icon" class="w-[105px] h-[94px]" />
                        </div>

                        <div class="w-full flex items-center justify-center mt-2">
                            <div class="text-firoza text-base font-medium">{{ $t('lovedIt') }}</div>
                        </div>

                        <div class="w-full flex items-center justify-center">
                            <div class="text-gray-700 text-xs">{{ $t('rateYourRestaurant') }}</div>
                        </div>

                        <div class="w-full flex items-center justify-center mt-3">
                            <Ratingstar 
                                ratingFor="RESTAURANT"
                                :foodListingId="restaurantId"
                                @selectedRating="onSelectedRating" 
                                @hoverRating="onHoverRating"/>
                            <!-- <div class="flex items-center">
                                <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-900" viewBox="0 0 46 44" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                        fill="#FFB801" />
                                </svg>
                                <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-900" viewBox="0 0 46 44" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                        fill="#FFB801" />
                                </svg>
                                <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-900" viewBox="0 0 46 44" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                        fill="#FFB801" />
                                </svg>
                                <svg class="flex-shrink-0 w-5 h-5 mr-2 text-gray-900" viewBox="0 0 46 44" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                        fill="#FFB801" />
                                </svg>
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-900" viewBox="0 0 46 44" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23 0L28.3883 16.5836H45.8254L31.7185 26.8328L37.1068 43.4164L23 33.1672L8.89315 43.4164L14.2815 26.8328L0.174644 16.5836H17.6117L23 0Z"
                                        fill="#DADADA" />
                                </svg>
                            </div> -->
                        </div>

                        <!-- <div class="w-full flex items-center justify-center mt-3">
                            <div class="text-[#00C5FF] text-sm font-medium">Very Good</div>
                        </div> -->

                        <div class="w-full flex items-center justify-center mt-3">
                            <div class="rounded-md px-4 py-4 shadow-md w-[350px]">
                                <div class="text-gray-900 text-sm ">{{ $t('didyoulikethetaste') }}</div>

                                <div class=""
                                v-for="(item, foodListingId,findex) in ratingObject.itemsRating" 
                                :key="'itemsRating-'+findex">
                                    <div class="text-gray-900 text-sm  mt-3 mb-1">{{ratingObject.itemsRating[foodListingId].name}}</div>
                                    <div class="flex items-center justify-between">
                                        <Ratingstar
                                            ratingFor="FOOD"
                                            :foodListingId="foodListingId"
                                            @selectedRating="onSelectedRating" 
                                            @hoverRating="onHoverRating"/>
                                        <!-- <div class="flex items-center bg-[#F2F2F2] w-[135px] rounded-full px-3 py-1">
                                            <svg v-for="(number,index) in 5"  
                                                @click="setItemRating(index,foodListingId)" 
                                                @mouseover="onHoverItemrating(index,foodListingId)" 
                                                @mouseleave="onHoverItemrating(-1,foodListingId)" 
                                                :class="ratingObject.itemsRating[foodListingId].hoverStarIndex >= index ? 'text-yellow-500' : ratingObject.itemsRating[foodListingId].rating > index ? 'text-yellow-500' : ''" 
                                                class="w-5 h-5 text-gray-500" 
                                                viewBox="0 0 20 20" 
                                                fill="currentColor">

                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div> 
                                        <div class="text-[#00C5FF] text-sm font-medium">
                                            Excellent
                                        </div> -->
                                        
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="w-full flex flex-col mt-3 px-4">
                            <div class="flex justify-center mt-2">
                                <div class="mb-3 w-full">
                                    <textarea 
                                        v-model="ratingObject.reviewComments"
                                        @input="onInputDescription()"
                                        class="form-control block w-full px-0 py-1.5 text-base font-normal text-gray-700 text-xs
                                        bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out
                                        m-0 focus:text-gray-700 focus:bg-white focus:border-firoza focus:outline-none"
                                        id="exampleFormControlTextarea1" 
                                        rows="2" 
                                        maxlength="300"
                                        placeholder="Write your review">
                                    </textarea>
                                    
                                    <p 
                                        v-if="error.reviewComments"
                                        class="text-xs text-red-600">
                                        {{error.reviewComments}}
                                    </p>
                                </div>
                            </div>

                            <button
                                v-if="!showLoader"
                                :disabled="!isValidForm"
                                :class="!isValidForm ? 'opacity-50' : ''"
                                class="bg-firoza text-white w-full py-2 px-4 rounded text-base flex items-center justify-center"
                                @click="submitRating()"
                                >
                                <span>{{ $t('submit') }}</span>
                            </button>
                            <button
                                v-if="showLoader"
                                class="bg-firoza text-white w-full py-2 px-4 rounded text-base flex items-center justify-center"
                                >
                                <span><Spinner class="w-4" /></span>
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
   
<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from 'vuex'
import spinner from "../../atoms/spinner.vue";
import Ratingstar from "../../atoms/Ratingstar.vue";
export default Vue.extend({
    components: { spinner, Ratingstar },
    name: "Rateorder",
    props: ["orderDetails"],
    computed: {
        ...mapState({
            authUser: state => state.authUser
        })
    },
    data() {
        return {
            platformratingProperty:{
                hoverStarIndex: -1,
                selectedStarIndex: -1,
            },
            orderId: null,
            maxIndexVal: null,
            showLoader: false,
            showDetModal: false,
            ordertoViewDetails: {},
            setIndexValue: 0,
            selectedAcceptedId: '',
            orderListToAccept: [],
           
            currentRateObj : {
                foodListingId : "",
                rating : null,
                // "reviewComments" : "test review comments2"
            },
            totalFoodToRate : [],
            ratingObject: {
                rating: -1,
                reviewComments: null,
                itemsRating: {}
            },
            restaurantId: null,
            isValidForm: false,            
            error:{
                reviewComments: null
            }

        };
    },
    beforeMount(){        
        this.processRatingObject()
    },
    mounted() {
        console.log('orderDetails:', this.orderDetails)
    //  for (let i = 0; i < this.orderDetails.length; i++) {
    //     this.totalFoodToRate.push(this.currentRateObj)
    //  }
    },
    created() {

    },

    methods: {

        // setItemRating(index,itemId){
        //     this.ratingObject.itemsRating[itemId].hoverStarIndex = index

        //     const rating = index++
        //     this.ratingObject.itemsRating[itemId].rating = rating
        //     console.log('setItemRating:', this.ratingObject.itemsRating[itemId].hoverStarIndex)
        // },
        
        // onHoverItemrating(index,itemId){            
        //     this.ratingObject.itemsRating[itemId].hoverStarIndex = index
        //     console.log('onHoverItemrating:', this.ratingObject.itemsRating[itemId].hoverStarIndex)
        // },
        onSelectedRating(ratingData: any){
            console.log('onSelectedRating:', ratingData)
            const foodListingId = ratingData.foodListingId
            const rating        = ratingData.rating
            const ratingFor     = ratingData.ratingFor
            if(ratingFor === 'FOOD'){                
                this.ratingObject.itemsRating[foodListingId].rating = rating
            }
            if(ratingFor === 'RESTAURANT'){                
                this.ratingObject.rating = rating
            }

            this.formValidation()
        },
        onHoverRating(hoberRating: any){
            // console.log('onHoverRating:', hoberRating)
        },

        closeRateModal(){
            this.totalFoodToRate = []
            this.$emit("closeRatePopUp", false);
        },

        processRatingObject(){
            // this.orderId        = this.orderDetails && this.orderDetails.orderId ? this.orderDetails.orderId : null
            this.orderId        = this.orderDetails && this.orderDetails.id ? this.orderDetails.id : null
            this.restaurantId   = this.orderDetails && this.orderDetails.restaurant ? this.orderDetails.restaurant.rid : null
            if(this.orderDetails && this.orderDetails.orderDetails){
                this.orderDetails.orderDetails.map((foodItem: any)=>{
                    let item = foodItem
                    item['rating'] = -1
                    this.ratingObject.itemsRating[item.foodListingId] = item
                    
                })

                console.log('ratingObject:', this.ratingObject)
            }
        },
        onInputDescription(){
            console.log('onInputDescription:', this.ratingObject)
            this.formValidation()
        },

        async submitRating(){

            console.log('submitRating:', this.ratingObject)
            try{
                this.showLoader = true
                let postObj = {
                    rating: this.ratingObject.rating + 1
                }
                if(this.ratingObject.reviewComments){
                    postObj['reviewComments'] = this.ratingObject.reviewComments
                }

                if(this.ratingObject.itemsRating){
                    const itemsRatingObj = this.ratingObject.itemsRating
                    for (const foodListingId in itemsRatingObj) {
                        if(itemsRatingObj[foodListingId] && itemsRatingObj[foodListingId].rating >= 0){
                            const itemRating = itemsRatingObj[foodListingId].rating + 1 
                            const foodRatingObject = {
                                foodListingId: foodListingId,
                                rating: itemRating                          
                            }

                            if(!postObj['itemsRating']){
                                postObj['itemsRating'] = []
                            }

                            postObj['itemsRating'].push(foodRatingObject)
                        }
                    }
                }

                console.log('postObj:', postObj)

            
                const url   = `/forder/v1/order/rate/${this.orderId}`
                const data  = await this.$axios.$post(url, postObj);
                console.log('Update Restaurant info:', data)
                
                this.closeRateModal()
                this.showLoader = false
                
                this.$emit("ratedOrderId", this.orderId);
                
            } catch(err){
                this.showLoader = false
                console.log(err)
                // console.error(err.toString())
            }
        },
        formValidation(){
            this.isValidForm = true
            if(this.ratingObject.rating < 0){
                this.isValidForm = false
            }
            if(this.ratingObject.reviewComments && this.ratingObject.reviewComments !== '' && (this.ratingObject.reviewComments.length < 10 || this.ratingObject.reviewComments.length > 300)){
                this.isValidForm = false
                this.error.reviewComments = "Review comment should within 10 to 300 character"
            } else {
                this.error.reviewComments = null
            }

        }

    }
});
</script>
<style scoped>
.-z-1 {
    z-index: -1;
}

.origin-0 {
    transform-origin: 0%;
}

input[type="text"]:focus~label,
input[type="number"]:focus~label,
input[type="email"]:focus~label,
input[type="text"]:not(:placeholder-shown)~label,
input[type="email"]:not(:placeholder-shown)~label,
textarea:focus~label,
textarea:not(:placeholder-shown)~label,
select:focus~label,
select:not([value='']):valid~label {
    /* @apply transform; scale-75; -translate-y-6; */
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-scale-x: 0.75;
    --tw-scale-y: 0.75;
    --tw-translate-y: -1.5rem;
}

input[type="text"]:focus~label,
input[type="email"]:focus~label,
select:focus~label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(72, 206, 243, var(--tw-text-opacity));
    left: 0px;
}
</style>