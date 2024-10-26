<template>
     <div class="checkout-details-page">
         <!--//////////header///////////-->
         <GintaaFoodConsumerHeader/>
        
      <div class="w-full min-h-screen bg-cover loction-bg">
       <div class="container max-w-6xl mx-auto min-h-screen flex items-center justify-center "> 
            <div class="relative rounded-md bg-white sm:w-full sm:max-w-lg px-6 pt-8 pb-14 mt-[60px]">
                 <div class="flex items-center justify-center">
                     <img src="~/assets/images/food/food-logo.svg" alt="gintaa food" class="w-[130px] h-auto">
                 </div>
                 <div class="flex items-center justify-center mt-20 px-0 sm:px-0 md:px-6">
                  <div class="w-full flex flex-col">
                    <div class="font-medium text-gray-700 text-[24px]">{{ $t('notMoodCook') }}</div>
                    <div class="text-base text-gray-900 mb-4">{{ $t('orderFoodClick') }}</div>                          
                    <client-only>
                       <div class="relative flex w-full flex-wrap items-stretch border border-solid border-firoza rounded-md h-[50px]">
                             
                              <!-- Start Google autocomplete search area -->
                              <gmap-autocomplete
                                class="w-full border-0 border-gray-300 bg-gray-100 h-12 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                                @place_changed="getSearchLocation($event)"
                                @input="autocompleteUser($event)"
                                v-on:keydown.enter.prevent="onBlurSearchInput"
                              >
                                <template v-slot:input="slotProps">
                                  <v-text-field
                                    prepend-inner-icon="place"
                                    ref="input"
                                    v-on:listeners="slotProps.listeners"
                                    v-on:attrs="slotProps.attrs"
                                  >
                                  </v-text-field>
                                </template>
                              </gmap-autocomplete>                              
                              <!-- End Google autocomplete search area -->

                              <!-- <button  class="relative z-[2] bg-transparent px-2 py-2.5 text-sm text-gray-700 font-medium flex items-center justify-center" type="button"> 
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C11.4477 0 11 0.447715 11 1V3.05493C6.82838 3.51608 3.51608 6.82838 3.05493 11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H3.05493C3.51608 17.1716 6.82838 20.4839 11 20.9451V23C11 23.5523 11.4477 24 12 24C12.5523 24 13 23.5523 13 23V20.9451C17.1716 20.4839 20.4839 17.1716 20.9451 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H20.9451C20.4839 6.82838 17.1716 3.51608 13 3.05493V1C13 0.447715 12.5523 0 12 0ZM19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#474747"/>
                                </svg>
                                <span class="pl-1">Locate Me </span>
                              </button> -->
                              <a 
                                href="javascript:;"
                                @click="submitLocation()"
                                class=" z-[2] bg-firoza px-4 py-2.5 text-sm font-medium text-white absolute right-0 h-[48px] leading-[32px]"  type="button"> 
                                {{ $t('findFood') }}
                              </a>

                      
                            <!-- <div  class=" absolute  w-[100%] top-[44px] shadow-lg z-50">
                              <ul class="bg-white text-gray-600 rounded shadow-lg py-2">                    
                                <li>
                                  <a href="#" class=" bg-white rounded-t  hover:text-firoza py-2 px-2 flex items-center whitespace-no-wrap transition-all">
                                    <div  class="flex items-center relative">
                                          <svg  width="13" height="15" viewBox="0 0 20 24" fill="none" class="absolute left-0 top-0"><path  fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#475569"></path> <path  fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#475569"></path></svg>                              
                                          <div  class="text-left text-xs font-medium text-gray-700 ml-5">New Town, West Bengal, India</div>                               
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a href="#" class=" bg-white rounded-t  hover:text-firoza py-2 px-2 flex items-center whitespace-no-wrap transition-all">
                                    <div  class="flex items-center relative">
                                          <svg  width="13" height="15" viewBox="0 0 20 24" fill="none" class="absolute left-0 top-0"><path  fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#475569"></path> <path  fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#475569"></path></svg>                              
                                          <div  class="text-left text-xs font-medium text-gray-700 ml-5">New Town, West Bengal, India</div>                               
                                    </div>
                                  </a>
                                </li>

                                <li>
                                  <a href="#" class=" bg-white rounded-t  hover:text-firoza py-2 px-2 flex items-center whitespace-no-wrap transition-all">
                                    <div  class="flex items-center relative">
                                          <svg  width="13" height="15" viewBox="0 0 20 24" fill="none" class="absolute left-0 top-0"><path  fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z" fill="#475569"></path> <path  fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z" fill="#475569"></path></svg>                              
                                          <div  class="text-left text-xs font-medium text-gray-700 ml-5">New Town, West Bengal, India</div>                               
                                    </div>
                                  </a>
                                </li>
                          
                              </ul>
                            </div> -->
                      </div>
                      
                    </client-only>
                </div>
              </div>
            </div>
       </div>
      </div>

       <!--footer section goes here-->
       <!-- <GintaaFoodConsumerFooter/> -->
     
     
       
     
     </div> 
     </template>
     
     
     
     
     
     
     <script lang="ts">
     
     import Vue from 'vue'
     
     
     export default Vue.extend({     
        name: 'foodCheckoutPage',
        data() {
          return {
            showMapError: '',
            addressObj: {
              place_id: null,
              name: null,
              formatted_address: null,
              address_components: [],
            },
            marker: { position: { lat: 10, lng: 10 } },
          }
        },
        beforeMount(){
          if(localStorage.selectedAddress){
            this.$router.push(this.localePath('/gintaa-food'));
          }
        },
        mounted() {
        },
        methods:{
            
          getSearchLocation(e) {
            console.log("Search Position:", e);
            this.showMapError = '';
            this.addressObj = {
              place_id: e.place_id,
              name: e.name,
              formatted_address: e.formatted_address,
              address_components: e.address_components
            };

          //  console.log("addressObj:", this.addressObj);

            let selectedLat = e.geometry.location.lat();
            let selectedLng = e.geometry.location.lng();

            this.marker.position.lat = selectedLat
            this.marker.position.lng = selectedLng

            console.log("addressObj:", selectedLat, selectedLng);
            // this.submitLocation()
          },
          
          async autocompleteUser(e) {
            console.log('autocompleteUser e:', e)
            // console.log('autocompleteUser value:', value)
            // console.log('autocompleteUser index:', index)
          },
    
          convertLocatinAddressObjToFormAddressObj(){
            const userAddressInfo = {
              addressId   : null,
              name        : null,
              phoneNumber : null,
              email       : null,
              addressLine : null,
              lat         : 0,
              lng         : 0,
              flatNo      : null,
              landmark    : null,
              area        : null,
              annotation  : null,
              zip         : null,
              city        : null,
              state       : null,
              country     : null
            }

            userAddressInfo.addressLine = (this.addressObj.name) ? this.addressObj.name : null;

            userAddressInfo.lat = this.marker.position.lat;
            userAddressInfo.lng = this.marker.position.lng;

            if(this.addressObj.address_components) {
              this.addressObj.address_components.map((item)=>{
                
                if(item.types.includes('route')){
                  userAddressInfo.addressLine = (userAddressInfo.addressLine) ? userAddressInfo.addressLine+','+item.long_name : item.long_name;
                }

                if(item.types.includes('sublocality_level_1')){
                  userAddressInfo.area = item.long_name;
                }

                if(item.types.includes('country')){
                  userAddressInfo.country = item.long_name;
                }

                if(item.types.includes('administrative_area_level_1')){
                  userAddressInfo.state = item.long_name;
                }

                if(item.types.includes('locality')){
                  userAddressInfo.city = item.long_name;
                }

                if(item.types.includes('postal_code')){
                  userAddressInfo.zip = item.long_name;
                }

                if(item.types.includes('street_number')){
                  let street_number = item.long_name;
                }

                if(item.types.includes('"administrative_area_level_2"')){
                  let distric = item.long_name;
                }

              });
            }

            return userAddressInfo;
          },
    
          submitLocation() {
            const formAddressObject = this.convertLocatinAddressObjToFormAddressObj();
            console.log("formAddressObject",formAddressObject);
            
            if(formAddressObject.addressLine){
              this.selectDefaultAddress(formAddressObject)
            }      
            
          },
          
          selectDefaultAddress(selectedAddress: any){
            // this.selectedAddress = selectedAddress
            localStorage.selectedAddress = JSON.stringify(selectedAddress)
            this.$emit('selectedLocation', selectedAddress);
            // this.openCloseAddressSideBar()
            this.$router.push(this.localePath('/gintaa-food'));

          },
        }
     })
     
     </script>
     
     <style>
     
     .loction-bg{    
      background-image: url(~/assets/images/food/loction-bg.webp);
      background-repeat: no-repeat;         
      background-position: top center;
    }
     
     </style>
     
     