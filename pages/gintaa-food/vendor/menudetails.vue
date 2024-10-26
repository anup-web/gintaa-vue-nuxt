<template>
    <div class="relative bg-[#f8f8f8] min-h-screen">
     
         <GintaaFoodVendorSidebar/> 
         <div class="content-wrapper content-wrapper-min pl-0 relative z-10 sm:pl-0 md:pl-[180px] lg:pl-[220px] xl:pl-[280px] 2xl:pl-[320px]">   
            <!-- <fullPageLoader v-if="showSeamerLoader" />    -->
             <GintaaFoodVendorHeader @resturantStatus = "resturantStatus"/>
             <div class="content pt-[60px] pb-[100px] px-4 sm:pt-[60px] sm:px-4 sm:pb-[100px] md:px-4 md:pt-[100px] lg:px-8 md:pb-0">
                <div class="flex items-center justify-between mb-2">
                    <div class="text-right text-base font-medium">{{ $t('viewFood') }}</div> 
                    <div class="items-center justify-center hidden sm:hidden md:flex">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5.37766L17.5 12.3568V20.0002H12.5V15.0002H7.5V20.0002H2.5V12.3568L10 5.37766ZM20 10.1235L10 0.833496L0 10.111L1.13417 11.3318L10 3.1085L18.8658 11.3443L20 10.1235Z" fill="#8EC23C"/>
                        </svg>
                         <span class="text-sm text-green ml-2">Home  / Menu / View Food</span>
                    </div>
                </div>

                <div class="bg-white rounded-sm shadow-sm p-6 mt-6">
                    <div class="flex flex-row w-full">
                        <div class="basis-1/4">
                            <div class="pr-3">
                                <img src="https://dev.cdn.gintaa.com/users/ckytGO6QvjRr4S6oVZhOrp8BK2o2/food-listings/orphan/6aQKLBrYb0SJjLK2k0yoQW_momo.jpg" alt="iimagecon" class="max-w-full"/>
                            </div>
                        </div>
                        <div class="basis-3/4">
                          
                           
                            <div class="food-details px-5 ">
                                <div class="w-[50%] bg-[#8BC63E] bg-opacity-20 p-3 flex flex-col border-l-2 border-[#8BC63E] rounded-md mb-3">
                                    <div class="font-bold text-base text-[#8BC63E] pb-2">Item under review</div>
                                    <!-- <div class="text-xs text-gray-500">The price is too high</div> -->

                                </div>

                                <div class="w-[50%] bg-[#FC2323] bg-opacity-20 p-3 flex flex-col border-l-2 border-[#FC2323] rounded-md mb-3">
                                    <div class="font-bold text-base text-[#FC2323] pb-2">Fix your reject item</div>
                                    <div class="text-xs text-gray-500">The price is too high</div>

                                </div>
                                <div class="text-base font-medium text-gray-600 pb-3">Mayo Sandwich Veg</div>
                                <div class="font-bold text-[20px] pb-3 relative pl-3">
                                    <svg class="absolute left-0 top-2" width="7" height="12" viewBox="0 0 11 18" fill="none" ><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.787369C0 0.352518 0.352517 0 0.787369 0H9.71263C10.1475 0 10.5 0.352517 10.5 0.787369C10.5 1.22222 10.1475 1.57474 9.71263 1.57474L7.423 1.57474C8.15198 2.31524 8.65471 3.26904 8.82286 4.33052H9.71263C10.1475 4.33052 10.5 4.68304 10.5 5.11789C10.5 5.55274 10.1475 5.90526 9.71263 5.90526H8.82288C8.4344 8.35801 6.25946 10.2358 3.63462 10.2358H2.28446L8.85412 16.6402C9.16954 16.9477 9.16954 17.4462 8.85412 17.7537C8.5387 18.0612 8.02729 18.0612 7.71187 17.7537L0 10.2359L3.52184e-05 10.2358H0V9.6611C0 9.10882 0.447716 8.6611 1 8.6611H3.63462C5.36438 8.6611 6.81192 7.48316 7.17918 5.90526L0.78737 5.90526C0.352518 5.90526 0 5.55274 0 5.11789C0 4.68304 0.352517 4.33052 0.787369 4.33052L7.17915 4.33052C6.81185 2.75267 5.36434 1.57478 3.63462 1.57478H0.787369C0.352517 1.57478 0 1.22226 0 0.787408V0.787369Z" fill="black"></path></svg>
                                    255</div>
                                <div class="font-bold text-[16px] pb-3 flex items-center"><span class="block mr-2">Food type :</span>   <svg width="20" height="20" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-2"><rect x="0.5" y="0.5" width="19" height="18" stroke="#1FBE58"></rect> <circle cx="10" cy="9" r="5" fill="#1FBE58"></circle></svg> </div>
                                <div class="font-bold text-[16px] pb-3 flex items-center"><span class="block mr-2">Category :</span>   <span class="font-normal text-sm">Main</span></div>
                                <div class="font-bold text-[16px] pb-3 flex items-center"><span class="block mr-2">Sub Category :</span>   <span class="font-normal text-sm">Demo</span></div>
                                <div class="des text-[13px] text-gray-500">Chop all the veggies finely, then add mayonnaise, salt & black pepper. And keep it aside for 10 mins Take 4 slices of brown bread and spread the mixture on each of it. Then cover it with another bread. Grill it or you can also make it in sandwich maker. And serve fresh.</div>

                                <div class="flex justify-start mt-4 w-full">
                                    <a href="#" class="mr-2 bg-orange-500 block px-5 py-3 text-sm text-white rounded-sm min-w-[120px] text-center ">Edit</a>
                                    <a href="#" class="ml-1 bg-errortext block px-5 py-3 text-sm text-white rounded-sm min-w-[120px] text-center">Delete</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    </div>
                </div>
                </div>

                <GintaaFoodVendorFooter />

                
             </div>

    
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from "vuex";

export default{
  name: 'MenuDetailsPage',
    data(){
        return{
            //authUser : this.$store.state.authUser,
            showSeamerLoader: true,
            errorMenuFetch : false,
            menuListItems : [],
            active : false,
            isAccordionOpen : false,
            deleteFoodID : '',
            showDeleteFoodModal : false,
            loading: false,
            resStatus:''
        }
    },
    computed:{
        ...mapState({
            authUser: (state) => state.authUser,
            }),
    },
    mounted(){
        this.getAllMenuItems();
    },
    methods:{

        resturantStatus(resStatus){
    console.log("resStatus",resStatus)
    this.resStatus = resStatus
    },
        async getAllMenuItems(){
            try {
                this.menuListItems = [];
                const restaurantId = this.authUser ? this.authUser?.uid : "";
                let url = `/flisting/v1/food-listing/restaurant/${restaurantId}?stockAvailable=false`;
                const res = await this.$axios.$get(url);
                if(res){
                    this.showSeamerLoader = false;
                }
                const menuList = res.payload;
                menuList.map((item) =>{
                    this.menuListItems.push(item);
                });

               //  this.menuListItems = []
                // console.log(this.menuListItems);
            } catch (error) {
                this.showSeamerLoader = false;
                this.errorMenuFetch = true;
            }
        },
        async markFoodItemsOutOfStock(foodItemId,status){
            try {
                //this.showSeamerLoader = true;
                status = !status;
                let url = `/flisting/v1/food-listing/${foodItemId}?available=${status}`
                const res = await this.$axios.post(url)
                console.log(res.data);
                if(res.status == 200){
                    console.log(res.data.payload.stockAvailable);
                };
                //this.getAllMenuItems();
                // setTimeout(() => {
                //     this.showSeamerLoader = false;
                // }, 200);
            } catch (error) {
                //this.showSeamerLoader = false;
                this.errorMenuFetch = true;
            }
        },
        redirectToEditPage(foodID){
            if(this.resStatus === 'ONLINE'){
             this.showMakeResOfflineMsg()
            return false
           }
            
            this.$router.push(
                { 
                    path: (`/gintaa-food/vendor/add-menu?`), 
                    query: {
                        food_id : foodID
                    }
                })
        },

        showMakeResOfflineMsg(){
    Vue.$toast.warning('Can not update restaurant while restaurant is Online!')
    
    },
        showRemoveFoodItemPopup(food) {
            if(this.resStatus === 'ONLINE'){
             this.showMakeResOfflineMsg()
            return false
           }
            this.showDeleteFoodModal = true;
            this.deleteFoodID = food.id;
        },
        closeRemoveFoodItemPopup() {
            this.showDeleteFoodModal = false;
        },
        async deleteItem() {
            console.log(this.deleteFoodID);
            this.loading = true;
            let rid = this.authUser ? this.authUser?.uid : '';
            try {
                const url = `/flisting/v1/food-listing/${this.deleteFoodID}`;
                const data = await this.$axios.$delete(url);
                if (data.success) {
                    console.log(data);
                    this.getAllMenuItems();
                    Vue.$toast.success(data?.message);
                    this.closeRemoveFoodItemPopup();
                }
                this.loading = false
            } catch (error: any) {
                this.loading = false;
                this.closeRemoveFoodItemPopup();
                Vue.$toast.error(error?.response?.data?.message);
                console.log(error);
            }
        },
    }
}
</script>


<style scoped>
    .sub-menu-bg{ background-color: #ffffff!important; border-radius: 0px!important; -webkit-border-radius: 0px!important; -moz-border-radius: 0px!important; }


.accordion-button::after{
  width: 1rem !important;
  height: 1rem !important;
  background-size: 1rem !important;
  background-image: url(~/assets/images/down-arrow.svg) !important;
}

.accordion-button:not(.collapsed)::after{
  background-image: url(~/assets/images/down-arrow.svg) !important; 
  transform: rotate(-180deg) !important;
}
.accordion-item:first-of-type{

border-top-left-radius: 0rem !important;
  border-top-right-radius: 0rem !important;

}
.accordion-item:not(:first-of-type) {
  border-top: 1px solid #e5e7eb !important;
}
.accordion-item:last-of-type{
border-bottom-right-radius: 0rem !important;
  border-bottom-left-radius: 0rem !important;

}
.accordion-button:not(.collapsed){
box-shadow: none !important;
border-bottom: 1px solid #e5e7eb !important;
}

.whitespace-break-spaces{
    white-space: break-spaces;
}

</style>