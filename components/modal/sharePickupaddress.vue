<template>
    <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div
                    class=" relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[750px] sm:p-6">
                    <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                        <a href="javascript:;"
                            @click="closePopup()"
                            class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span class="sr-only">Close</span>
                            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </a>
                    </div>


                     <div class="w-full">
                        <div class="text-lg font-medium  text-gray-700 mb-3">{{$t('selectYourAddress')}} </div>
                    </div> 
                    <div v-if="showLoader" class="w-full">
                        <div class="flex flex-col w-full">
                            <div class="p-4 max-w-[705px] w-full mx-auto">
                                <div class="flex space-x-4">
                                    <div class="rounded-full bg-slate-200 h-10 w-10" />
                                    <div class="flex-1 space-y-6 py-1">
                                        <div class="space-y-3">
                                            <div class="grid grid-cols-3 gap-28">
                                                <div class="h-2 bg-slate-200 rounded col-span-2" />
                                                <div class="h-2 bg-slate-200 rounded col-span-1" />
                                            </div>
                                            <div class="grid grid-cols-3 gap-28">
                                                <div class="h-2 bg-slate-200 rounded col-span-2" />
                                                <div class="h-2 bg-slate-200 rounded col-span-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                                <div class="flex space-x-4 mt-6">
                                    <div class="rounded-full bg-slate-200 h-10 w-10" />
                                    <div class="flex-1 space-y-6 py-1">
                                        <div class="space-y-3">
                                            <div class="grid grid-cols-3 gap-28">
                                                <div class="h-2 bg-slate-200 rounded col-span-2" />
                                                <div class="h-2 bg-slate-200 rounded col-span-1" />
                                            </div>
                                            <div class="grid grid-cols-3 gap-28">
                                                <div class="h-2 bg-slate-200 rounded col-span-2" />
                                                <div class="h-2 bg-slate-200 rounded col-span-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                                <div class="flex space-x-4 mt-6">
                                    <div class="rounded-full bg-slate-200 h-10 w-10" />
                                    <div class="flex-1 space-y-6 py-1">
                                        <div class="space-y-3">
                                            <div class="grid grid-cols-3 gap-28">
                                                <div class="h-2 bg-slate-200 rounded col-span-2" />
                                                <div class="h-2 bg-slate-200 rounded col-span-1" />
                                            </div>
                                            <div class="grid grid-cols-3 gap-28">
                                                <div class="h-2 bg-slate-200 rounded col-span-2" />
                                                <div class="h-2 bg-slate-200 rounded col-span-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        
                                
                            </div>
                        </div>
                    </div>
                    <!-- select address start -->
                    <div v-if="!showLoader && userAllAddress && userAllAddress.length" class="w-full">
                        <div class="w-full flex flex-col">
                            <div class="auto-scroll address-list-share pr-2 min-h-[150px] max-h-[360px]">
                            <ul class="float-left w-full  py-0 px-0 list-none text-left mt-1 border-l border-t border-gray-200">
                                <li 
                                    v-for="(address, index) in userAllAddress" 
                                    :key="'address-'+index" 
                                    @click="selectAddressForShare(address, index)"
                                    :class="selectedAddress.index === index ? 'active-share-address' : ''"
                                    class="text-sm  px-1 font-normal block w-full bg-transparent text-gray-700 cursor-pointer hover:bg-[##efefef] border-b border-gray-200 border-r">
                                    <a href="javascript:;" class="flex flex-col items-start relative px-4 py-3 ">
                                        <!-- <svg class=" absolute top-[1px] left-0" width="14" height="19" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#8CAEC5"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#8CAEC5"/>
                                        </svg> -->
                                        <div class="font-bold pb-2 text-gray-700 text-[13px]">{{ address.annotation === 'Home'? $t('home') : address.annotation === 'Work' ? $t('work') : $t(address.annotation) }}</div>
                                       <div class="text-[12px] pb-1">{{address.addressLine}}  </div> 
                                       <div class="text-[12px]">{{getAddressitemDet(address)}}</div>
                                    </a>
                                </li>
                                
                                <div class="w-full flex items-center justify-end mt-3">
                                    <a 
                                        @click="openAddAddressPopup({ mode: 'add', addressDet: addressDet})"
                                        href="javascript:;" 
                                        class="w-[130px] border border-firoza flex justify-center items-center bg-transparent
                                         py-1.5 px-3 rounded  text-firoza font-normal text-sm" >
                                         <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5" ><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" ></path></svg>
                                          <span >{{$t('addAddress')}}</span>
                                    </a>
                                </div>
                            </ul>
                        </div>
                        </div>
                        <!-- <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button
                                href="javascript:;"
                                :disabled="selectedAddress.index == null || false"
                                @click="shareSelectedAddress()"
                                :class="{'opacity-40 disabled' : selectedAddress.index == null}"
                                class="inline-flex w-full justify-center rounded-md border border-transparent bg-firoza px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-firoza focus:outline-none focus:ring-2 focus:ring-firoza focus:ring-offset-2 sm:col-start-2 sm:text-sm">
                                {{$t('shareAddress')}}
                            </button>
                            <a
                                href="javascript:;"
                                @click="resetSelection()"
                                class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-firoza focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm">
                                {{$t('cancel')}}
                            </a>
                        </div> -->

                    </div>

                    <!-- select address end -->

                    <!-- add adress start ! remove hidden class-->
                    <div v-if="!showLoader && !userAllAddress.length" class="w-full flex flex-col ">
                        <div class="flex items-center justify-center mt-6">
                            <img src="~/assets/images/city-logo.png" alt="image" width="200" height="170">
                        </div>
                        <div class="flex items-center justify-center mt-10">
                            <a
                                href="javascript:;"
                                @click="openAddAddressPopup()"
                                class="inline-flex w-[200px] justify-center rounded-md border border-transparent bg-firoza px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-firoza focus:outline-none focus:ring-2 focus:ring-firoza focus:ring-offset-2 sm:col-start-2 sm:text-sm">
                                Add adress
                            </a>
                        </div>
                    </div>
                    <!-- add adress end -->

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import moment from "moment";
export default Vue.extend({
    name: 'SharePickupAddress',
    props: ['offerData','allAddress'],
    data() {
        return {
            addressDet:{
         id: '',
         addressLine: '',
         lat: 0,
         lng: 0,
         flatNo: '',
         landmark: '',
         area: '',
         annotation: '',
         zip: '',
         city: '',
         state: '',
         country: '',
         name: '',
         email: '',
         phoneNumber: '',
         default: false
      },
            offerId: null,
            authUser : this.$store.state.authUser,
            userAllAddress: [],
            showLoader: false,
            selectedAddress: {
                address: {},
                index: null
            },


            dealDocumentData: {},
        }
    },
    computed: {
    },
    mounted() {        
        this.userAllAddress = this.allAddress
       // this.getUserAllAddress()

        // setTimeout(()=>{
        //     this.offerId = this.offerData.dealRefId
        //     this.fetchDealDocumentData()
        // }, 1000);
        
    },
    created() {
    },
    methods: {
        async getUserAllAddress() {
            this.showLoader = true;
            try {
                let url = `/users/v1/user/address/all`;
                const data = await this.$axios.$get(url);
                this.userAllAddress = data.payload;
                // console.log('userAllAddress:', this.userAllAddress)
                this.showLoader = false;
            } catch (error) {
                console.log(error);
                this.showLoader = false;
            }
        },
        getAddressitemDet(addressItemDet){
          const addDetArray = []
          if(addressItemDet){
          addDetArray.push(addressItemDet?.flatNo,addressItemDet?.area,
          addressItemDet?.city,addressItemDet?.landmark,addressItemDet?.state,addressItemDet?.zip)
        }

        if(addDetArray.length){
        var filtered = addDetArray.filter(function (el) {
        return el != null;
        });
        return filtered.join();
        }
     
        },
        selectAddressForShare(address, index){
            console.log("-------------------------------")
            this.$emit("selectedAddress", address);
            // this.selectedAddress.address    = address
            // this.selectedAddress.index      = index

        },
        resetSelection(){
            this.selectedAddress.address    = {}
            this.selectedAddress.index      = null
        },
        shareSelectedAddress(){
            console.log('selectedAddress:', this.selectedAddress)
            let shareAddress = ''
            if(this.selectedAddress.index != null) {
                const addressObj = this.selectedAddress.address
                if (addressObj.name ) {
                    shareAddress = shareAddress + `\nName: ${addressObj.name} `;
                }
                if (addressObj.flatNo ) {
                    shareAddress = shareAddress + `\nFlat No: ${addressObj.flatNo} `;
                }
                if (addressObj.addressLine) {
                    shareAddress = shareAddress + `\nAddress Line: ${addressObj.addressLine} `;
                }
                if (addressObj.area) {
                    shareAddress = shareAddress + `\nArea: ${addressObj.area} `;
                }
                if (addressObj.city) {
                    shareAddress = shareAddress + `\nCity: ${addressObj.city} `;
                }
                if (addressObj.state) {
                    shareAddress = shareAddress + `\nState: ${addressObj.state} `;
                }
                if (addressObj.zip) {
                    shareAddress = shareAddress + `\nZip: ${addressObj.zip} `;
                }
                if (addressObj.landmark) {
                    shareAddress = shareAddress + `\nLandmark: ${addressObj.landmark} `;
                }

                this.shareAddressToChat(shareAddress) 
            }            
        },
        

        closePopup(){
            this.$emit("closeAddressListModal", true);
        },


        openAddAddressPopup(){
          //  console.log("jjjjjjjjjjjjjjjjjjjjj")
           // this.closePopup()
            this.$emit("addAddresstoProfile", { mode: 'add', addressDet: this.addressDet});
        }
    }
})
</script>
  
<style scoped>
    .address-list-share{min-height: 150px; overflow-y: auto; overflow-x: hidden; max-height: 300px;}
    /* ul.address-list-share li{ border-bottom: 1px solid #e7e7e7; } */
    .address-list-share li:last-child{ border-bottom: 0px solid #e7e7e7; }
    .active-share-address { background-color: #efefef; padding-left:10px; padding-right:10px; }
</style>
  