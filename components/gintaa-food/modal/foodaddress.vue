<template>
    <div class="">
      <!-- <div class="w-3/6">
          <div class="relative">
            <img src="images/login_bg.png"/>
            <div class="logo absolute top-12 w-full text-center">
                <div class="mb-8 w-full flex justify-center"><img src="images/logo.png"/></div>
          
                <div class="text-center text-white text-base">
                    <p>Trade, Barter or Bid for Products & <br>Services from Anyone</p>
                </div>
            </div>
          </div>
          </div> -->
      <form @submit.prevent="updateAddressInfo()">
        <h2 class="text-left text-xl pb-2 pt-4 font-bold text-gray-600">
           {{ $t('address') }}
        </h2>
        <div class="text-xs text-gray-500 pb-7">
         {{ $t('addressSubtext') }}
        </div>
        <!-- v-bind:class="{ ' h-[380px] pt-3 overflow-auto auto-scroll': isMode(mode) }" -->
        <div class="w-full mx-auto flex flex-col justify-center " >
          <div class="flex flex-col" v-bind:class="{ ' h-[380px] pt-3 overflow-auto auto-scroll':true }" >
            <!-- <div  class="flex flex-col">
              <div v-if="mode || showInputField.showNameField" class="relative z-0 w-full mb-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  v-on:keypress="isLetter($event)"
                  v-on:input="onChange(address.name, 'name')"
                  v-model="address.name"
                  placeholder=" "
                  autocomplete="off"
                  class="
                    pt-3
                    pb-2
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm text-gray-600
                  "
                />
                <label
                  for="name"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  >  {{ $t("enterName") }}
                </label>
                <span class="absolute text-xs text-red-400 mt-px">{{
                  errors.name
                }}</span>
              </div>
  
              <div v-if="mode || showInputField.showPhoneNumberField" class="relative z-0 w-full mb-6">
                <div class="absolute pb-2 font-normal  text-sm text-gray-700 left-0 -top-[12px] pr-3">
                  <span class="block text-[10px] text-gray-500 pb-1">
                    {{ $t("code") }}
  
                  </span>
                  
                </div>
                <input
                  type="text"
                  v-on:input="onChange(address.phoneNumber, 'phoneNumber')"
                  id="phoneNumber"
                  v-model="address.phoneNumber"
                  @keypress="isNumber($event)"
                  maxlength="10"
                  name="tel"
                  placeholder=" "
                  autocomplete="off"
                  class="
                    pt-3
                    pl-10
                    pb-2
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm
                  "
                />
                <label
                  for="tel"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                    pl-10
                  "
                  > {{ $t("enterphonenu") }}
                </label>
                <span class="absolute text-xs text-red-400 mt-px">{{
                  errors.phoneNumber
                }}</span>
                <span
                  class="
                    absolute
                    top-3
                    left-0
                    text-sm text-gray-600
                    block
                    pr-2
                    border-r
                  "
                  > {{ $t("nineone") }}
                </span>
              </div>
              <div v-if="mode || showInputField.showEmailField" class="relative z-0 w-full mb-6">
                <input
                  type="email"
                  v-on:input="onChange(address.email, 'email')"
                  id="email"
                  v-model="address.email"
                  name="email"
                  placeholder=" "
                  autocomplete="off"
                  class="
                    pt-3
                    pb-2
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm
                  "
                />
                <label
                  for="email"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  > {{ $t("enterEmailOpt") }}
                </label>
                <span class="absolute text-xs text-red-400 mt-px">{{
                  errors.email
                }}</span>
              </div>
            </div> -->
            
            <div class="relative z-0 w-full mb-6">
             
              <input
                type="text"
                id="addressLine"
                v-on:input="onChange(address.addressLine, 'addressLine')"
                name="addressLine"
                placeholder=" " 
                autocomplete="off"
                v-model="address.addressLine"
                class="
                  pt-3
                  pb-2
                  block
                  w-full
                  px-0
                  mt-0
                  bg-transparent
                  border-0 border-b
                  appearance-none
                  focus:outline-none focus:ring-0 focus:border-firoza
                  border-gray-200
                  text-sm
                "
              />
              <label
                for="addressLine"
                class="
                  absolute
                  duration-300
                  top-3
                  -z-1
                  origin-0
                  text-gray-500 text-sm
                "
                >{{ $t("addressLine") }}</label
              >
              <span class="absolute text-xs text-red-400 mt-px">{{
                errors.addressLine
              }}</span>
  
              <!-- v-validate.immediate="'required'" -->
            </div>
            <div class="flex flex-col">
              <div class="relative z-0 w-full mb-6">
                <input
                  type="text"
                  id="landmark"
                  name="landmark"
                  placeholder=" "
                  v-model="address.landmark"
                  autocomplete="off"
                  class="
                    pt-3
                    pb-2
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm
                  "
                />
                <label
                  for="landmark"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  >{{ $t("landmark") }}</label
                >
                <!-- <span class="text-sm text-red hidden" id="error">landmark is required</span> -->
              </div>
              <div class="relative z-0 w-full mb-6">
                <input
                  type="text"
                  id="flatNo"
                  name="flatNo"
                  placeholder=" "
                  v-model="address.flatNo"
                  autocomplete="off"
                  class="
                    pt-3
                    pb-2
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm
                  "
                />
                <label
                  for="flatNo"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  >{{ $t("house") }}
                </label>
                <span class="text-sm text-red hidden" id="error"
                  > House / Flat number is required</span
                >
              </div>
              <div class="relative z-0 w-full mb-6">
                <input
                  type="text"
                  name="area"
                  placeholder=" "
                  v-model="address.area"
                  autocomplete="off"
                  class="
                    pt-3
                    pb-2
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm
                  "
                />
                <label
                  for="area"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  >{{ $t("area") }}</label
                >
                <!-- <span class="text-sm text-red hidden" id="error">Phone is required</span> -->
              </div>
            </div>
            <div class="flex flex-col">
              <div class="relative z-0 mb-6">
                <input
                  type="text"
                  placeholder=" "
                  autocomplete="off"
                  @keypress="isNumber($event)"
                  maxlength="6"
                  v-on:input="onChange(address.zip, 'zip')"
                  name="pin"
                  v-model="address.zip"
                  class="
                    pt-3
                    pb-2
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm
                  "
                />
                <label
                  for="name"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  > {{ $t("pin") }}
                </label>
                <span class="absolute text-xs text-red-400 mt-px">{{
                  errors.zip
                }}</span>
              </div>
              <div class="relative z-0 w-full mb-6">
                <input
                  type="text"
                  v-on:input="onChange(address.city, 'city')"
                  name="city"
                  placeholder=" "
                  autocomplete="off"
                  v-model="address.city"
                  class="
                    pt-3
                    pb-2
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm
                  "
                />
                <label
                  for="city"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  > {{ $t("city") }}
                </label>
                <span class="absolute text-xs text-red-400 mt-px">{{
                  errors.city
                }}</span>
              </div>
              <div class="relative z-0 w-full mb-6">
                <select
                  name="State"
                  placeholder=" "
                  v-on:input="onChange(address.state, 'state')"
                  v-model="address.state"
                  onclick="this.setAttribute('value', this.value);"
                  class="
                    pt-3
                    pb-2
                    text-gray-600
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm
                  "
                >
                <option value="" disabled hidden></option>
                  
                <option value="Andhra Pradesh">{{$t('andhraPradesh')}}</option>
                <option value="Andaman and Nicobar Islands">{{$t('andaman') }}</option>
                <option value="Arunachal Pradesh">{{$t('arunachalPradesh') }}</option>
                <option value="Assam">{{$t('assam') }}</option>
                <option value="Bihar">{{$t('bihar') }}</option>
                <option value="Chandigarh">{{$t('chandigarh') }}</option>
                <option value="Chhattisgarh">{{$t('chhattisgarh') }}</option>
                <option value="Dadar and Nagar Haveli">{{$t('dadarHaveli') }}</option>
                <option value="Daman and Diu">{{$t('damanDiu') }}</option>
                <option value="Delhi">{{$t('delhi') }}</option>
                <option value="Lakshadweep">{{$t('lakshadweep') }}</option>
                <option value="Puducherry">{{$t('puducherry') }}</option>
                <option value="Goa">{{$t('goa') }}</option>
                <option value="Gujarat">{{$t('gujarat') }}</option>
                <option value="Haryana">{{$t('haryana') }}</option>
                <option value="Himachal Pradesh">{{$t('himachalPradesh') }}</option>
                <option value="Jammu and Kashmir">{{$t('jammuKashmir') }}</option>
                <option value="Jharkhand">{{$t('jharkhand') }}</option>
                <option value="Karnataka">{{$t('karnataka') }}</option>
                <option value="Kerala">{{$t('kerala') }}</option>
                <option value="Madhya Pradesh">{{$t('madhyaPradesh') }}</option>
                <option value="Maharashtra">{{$t('maharashtra') }}</option>
                <option value="Manipur">{{$t('manipur') }}</option>
                <option value="Meghalaya">{{$t('meghalaya') }}</option>
                <option value="Mizoram">{{$t('mizoram') }}</option>
                <option value="Nagaland">{{$t('nagaland') }}</option>
                <option value="Odisha">{{$t('odisha') }}</option>
                <option value="Punjab">{{$t('punjab') }}</option>
                <option value="Rajasthan">{{$t('rajasthan') }}</option>
                <option value="Sikkim">{{$t('sikkim') }}</option>
                <option value="Tamil Nadu">{{$t('tamilNadu') }}</option>
                <option value="Telangana">{{$t('telangana') }}</option>
                <option value="Tripura">{{$t('tripura') }}</option>
                <option value="Uttar Pradesh">{{$t('uttarPradesh') }}</option>
                <option value="Uttarakhand">{{$t('uttarakhand') }}</option>
                <option value="West Bengal" selected>{{$t('westBengal')}}</option>
                </select>
                <label
                  for="select"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  > {{ $t("state") }} </label
                >
                <span class="absolute text-xs text-red-400 mt-px">{{
                  errors.state
                }}</span>
                <span class="absolute right-0 top-[15px] -z-50">
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.75 1.25L7.5 8L14.25 1.25"
                      stroke="#9EA5AA"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div class="flex flex-col">
              <div  class="relative z-0 w-full mb-6">
                <input
                  name="country"
                  v-on:input="onChange(address.country, 'country')"
                  v-model="address.country"
                  aria-readonly=""
                  readonly
                  placeholder=" "
                  type="text"
                  class="
                    pt-3
                    pb-2
                    text-gray-600
                    block
                    w-full
                    px-0
                    mt-0
                    bg-transparent
                    border-0 border-b
                    appearance-none
                    focus:outline-none focus:ring-0 focus:border-firoza
                    border-gray-200
                    text-sm
                  "
                />
                  <!-- <option  value="India" selected>India</option>
                </select> -->
                <label
                  for="country"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  >{{ $t("country") }}</label
                >
                <span class="text-sm text-red hidden" id="error">{{
                  errors.country
                }}</span>
                <span class="absolute right-0 top-[15px] -z-50">
                  <svg
                    width="15"
                    height="9"
                    viewBox="0 0 15 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.75 1.25L7.5 8L14.25 1.25"
                      stroke="#9EA5AA"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <!-- <div class="relative z-0 w-full mb-6">
                <label class="text-gray-500 pb-2 text-xs block"
                  > {{ $t("addresstype") }} </label
                >
                <div
                  class="
                    space-y-4
                    sm:flex sm:items-center sm:space-y-0 sm:space-x-10
                  "
                >
                  <div class="flex items-center">
                    <input
                      id="home"
                      name="annotation"
                      type="radio"
                      v-on:change="onChange(address.annotation, 'annotation')"
                      v-model="address.annotation"
                      value="Home"
                      class="
                        focus:ring-firoza
                        h-4
                        w-4
                        text-firoza
                        border-gray-300
                      "
                    />
                    <label
                      for="home"
                      class="ml-3 block text-sm font-normal text-gray-500"
                    >
                       {{ $t("home") }}
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="work"
                      name="annotation"
                      type="radio"
                      v-on:change="onChange(address.annotation, 'annotation')"
                      v-model="address.annotation"
                      value="Work"
                      class="
                        focus:ring-firoza
                        h-4
                        w-4
                        text-ring-firoza
                        border-gray-300
                      "
                    />
                    <label
                      for="work"
                      class="ml-3 block text-sm font-normal text-gray-500"
                    >
                       {{ $t("work") }}
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="otherAnnotation"
                      name="annotation"
                      type="radio"
                      v-on:change="onChange(address.annotation, 'annotation')"
                      v-model="address.annotation"
                      value="Other"
                      class="
                        focus:ring-ring-firoza
                        h-4
                        w-4
                        text-ring-firoza
                        border-gray-300
                      "
                    />
                    <label
                      for="otherAnnotation"
                      class="ml-3 block text-sm font-normal text-gray-500"
                    >
                       {{ $t("other") }}
                    </label>
                  </div>
                </div>
                <div
                  class="relative z-0 w-full mb-6"
                  v-if="address.annotation === 'Other'"
                >
                  <input
                    type="text"
                    v-on:input="
                      onChange(address.annotationOther, 'annotationOther')
                    "
                    name="annotationOther"
                    :placeholder="$t('enterOtherAddress')"
                    autocomplete="off"
                    v-model="address.annotationOther"
                    class="
                      pt-3
                      pb-2
                      block
                      w-full
                      px-0
                      mt-0
                      bg-transparent
                      border-0 border-b
                      appearance-none
                      focus:outline-none focus:ring-0 focus:border-firoza
                      border-gray-200
                      text-sm
                    "
                  />
                  <span class="absolute text-xs text-red-400 mt-px">{{
                    errors.annotationOther
                  }}</span>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <!-- <div class=mb-4>
              <label class="block mb-2 text-darkcolor text-sm font-medium">Email or Phone</label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-14 focus:outline-none focus:shadow-outline text-sm"  type="text" placeholder="Enter your email or mobile number">
              </div> -->
        <!-- <div v-if="!mode" class="flex mt-6 items-center">
          <button
            :disabled="!isAddressFormValid"
            :class="!isAddressFormValid ? 'opacity-50' : ''"
            class="
              bg-firoza
              text-white
              font-bold
              py-1
              px-3
              h-12
              rounded
              w-full
              text-base  relative           
            "
          >
            <span  v-show="!loading">{{ $t("submit") }}</span>
            <div class="absolute right-2 top-0">
              <Spinner v-show="loading" class="w-4" />
            </div>
          </button>
        </div>  :disabled="!isAddressFormValid" -->
  
        <div
          v-if="!mode"
          class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
        >
          <button
            type="submit"
            :disabled="!isAddressFormValid"
            :class="!isAddressFormValid ? 'opacity-50' : ''"
            class="
              w-full
              relative
              min-w-[130px]
              inline-flex
              justify-center
              rounded
              border border-transparent
              shadow-sm
              px-4
              py-2
              bg-firoza
              text-base
              font-medium
              text-white
              sm:ml-3 sm:w-auto sm:text-sm
            "
          >
            <span  v-show="!loading">{{ $t("submit") }}</span>
            
              <Spinner v-show="loading" class="w-4 mx-auto absolute left-[30%]" />
            
          </button>
          <a @click="cancel"
            href="javascript:;"
            id="close-btns"
            class="
              mt-3
              w-full
              inline-flex
              justify-center
              rounded
              border border-gray-300
              shadow-sm
              px-4
              py-2
              bg-white
              text-base
              font-medium
              text-gray-700
              hover:bg-gray-50
              focus:outline-none
              sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
            "
          >
            {{ $t("cancel") }}
          </a>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  // import VeeValidate from 'vee-validate';
  // Vue.use(VeeValidate);
  import { mapState, mapGetters } from 'vuex'
  export default Vue.extend({
    name: "Foodaddress",
    props: ["userAddressInfo", "mode"],
    computed: {
      ...mapState({
        authUser: state => state.authUser
      })
    },
    mounted(){
     console.log("this.mode-----------------------------------",this.userAddressInfo,this.mode)
    },
    created() {
      this.setAddress(this.userAddressInfo);
    },
    data() {
      return {
        loading: false,
        apiUrls: this.$config.apiUrls,
        isAddressFormValid: false,
        errors: {
          name: "",
          phoneNumber: "",
          email: "",
          addressLine: "",
          city: "",
          zip: "",
          state: "",
          country: "",
          annotation: '',
          annotationOther: "",
        },
        showInputField:{
        showNameField:false,
        showPhoneNumberField:false,
        showEmailField:false
        },
        address: {
          addressId: "",
          name: "",
          phoneNumber: "",
          email: "",
          addressLine: "",
          lat: 0,
          lng: 0,
          flatNo: "",
          landmark: "",
          area: "",
          annotation: "",
          zip: "",
          city: "",
          state: "",
          country: "",
          default: true,
          annotationOther: "",
        },
      };
    },
    methods: {
      
      updateAddressInfo() {     
        this.setError();
        if (!this.isAddressFormValid) {
          return false;
        }
  
        // this.address.annotation =
        //   this.address.annotation === "Other"
        //     ? this.address.annotationOther
        //     : this.address.annotation;
  
  
        this.addAddress(this.address);
      },
      async addAddress(addObj: any) {
         //you will get this object
        console.log("---------------------------",addObj)

        if (addObj) {
          this.loading = true;
            try {
              const location = {
                    "addressLine" : addObj.addressLine,
                    "lat"         : addObj.lat,
                    "lng"         : addObj.lng,
                    "flatNo"      : addObj.flatNo,
                    "landmark"    : addObj.landmark,
                    "area"        : addObj.area,
                    "zip"         : addObj.zip,
                    "city"        : addObj.city,
                    "state"       : addObj.state,
                    "country"     : addObj.country
                  }
              
              const restaurantInfo = {
                                      location: location,
                                      rid: this.authUser.uid
                                    }
              const url   = '/flisting/v1/restaurant'
              const updateRestaurantData  = await this.$axios.$put(url, restaurantInfo);
                
              console.log("updateRestaurantData:", updateRestaurantData);
              
              if(updateRestaurantData && updateRestaurantData.success){
                this.loading = false;
                this.$emit("saveAddress", location);
              }
            } catch (error: any) {
              console.log(error);
              this.loading = false;
            }
          
        }
      },
      remove91ToPhoneNumber(phone: any) {
        console.log("remove91ToPhoneNumber",phone)
        if (phone === "") {
          return "";
        } else {
          let replaceString = "+91";
          if (phone && phone.includes(replaceString)) {
            phone = phone.replace(replaceString, "");
          }
          return phone;
        }
      },
      setAddress(addressObj: any) {
      //  console.log("addressObj", addressObj);
  
        // if(!addressObj.name){
        //  this.showInputField.showNameField = true
        // }
        //  if(!addressObj.phoneNumber){
        //  this.showInputField.showPhoneNumberField = true
        // }
        // if(!addressObj.email){
        //  this.showInputField.showEmailField = true
        // }
        
        // if(this.userAddressInfo.annotation){
        // console.log("this.userAddressInfo.annotation",this.userAddressInfo,this.userAddressInfo.annotation)
  
        //this.address.addressId = addressObj.addressId;
        console.log("addressObjaddressObjaddressObj",addressObj)
        this.address.addressLine = addressObj.addressLine;
        this.address.lat = addressObj.lat;
        this.address.lng = addressObj.lng;
        this.address.flatNo = addressObj.flatNo;
        this.address.landmark = addressObj.landmark;
        this.address.area = addressObj.area;
        this.address.zip = addressObj.zip;
        this.address.city = addressObj.city;
        this.address.area = addressObj.area;
        this.address.state = addressObj.state;
        this.address.country = addressObj.country;
       // this.address.name = addressObj.name;
       // this.address.email = addressObj.email;
       // this.address.phoneNumber = this.remove91ToPhoneNumber(addressObj.phoneNumber);
  
        // if (
        //   this.mode === 'edit' &&
        //   addressObj.annotation !== "Home" &&
        //   addressObj.annotation !== "Work"
        // ) {
        // //  console.log("Annotation Is other",this.address)
        //   this.address.annotation = "Other";
        //   this.address.annotationOther = addressObj.annotation;
  
        //  // console.log("this.address",this.address)
        // } else {
          
        //   // New Added Condition
        //   if(addressObj.annotation == "Home" ||
        //   addressObj.annotation == "Work"){
        //    this.address.annotation = addressObj.annotation;
        //   }else{
        //   this.address.annotation = 'Home'
        //   }
        //   //// End Added Condition
          
        // }
  
        // if (this.mode === 'add') {
        //   this.address.default = false;
        // }else{
        //   if(this.mode === 'edit'){
        //  //   console.log("Edit Mode",addressObj.default)
        //      this.address.default = addressObj.default
        //     // this.address.annotation = addressObj.annotation
        //   }
        // }
  
        this.setError();
        //console.log("this.address", this.address);
      },
  
      async onChange(fieldVal: any, fieldName: any) {
        switch (fieldName) {
          // case "name":
          //   if (!fieldVal) {
          //     this.errors.name = this.$t('nameRequired');
          //   } else {
          //     if (fieldVal.length < 2) {
          //       this.errors.name = this.$t('nameLength');
          //     } else {
          //       this.errors.name = "";
          //     }
          //   }
          //   break;
          // case "phoneNumber":
          //   if (!fieldVal) {
          //      this.errors.phoneNumber = "";
          //    // this.errors.phoneNumber = this.$t('phoneNuRequired');
          //   } else {
          //     if (!this.$isValidMobile(fieldVal)) {
          //       this.errors.phoneNumber = this.$t('enterValidNu');
          //     } else {
          //       this.errors.phoneNumber = "";
          //     }
          //   }
          //   break;
          // case "email":
          //   if (!fieldVal) {
          //     this.errors.email = "";
          //     //this.errors.email = this.$t('emailReq');
          //   } else {
          //     if (!this.$isValidEmail(fieldVal)) {
          //       this.errors.email = this.$t('enterAValidEmail');
          //     } else {
          //       this.errors.email = "";
          //     }
          //   }
          //   // code block
          //   break;
          case "addressLine":
            if (!fieldVal) {
              this.errors.addressLine = this.$t('addLineReq');
            } else {
              this.errors.addressLine = "";
            }
            // code block
            break;
          case "city":
            if (!fieldVal) {
              this.errors.city = this.$t('cityReq');
            } else {
              this.errors.city = "";
            }
            // code block
            break;
          case "zip":
            if (!fieldVal) {
              this.errors.zip = this.$t('pinCodeReq');
            } 
            else 
            {
              if (fieldVal.length < 6) {
                this.errors.zip = this.$t('invalidPinCode');
              } 
              else {
                const isValid = await this.isValidZipCode(fieldVal)
                if(!isValid){
                  this.errors.zip = this.$t('invalidPinCode');
                }else {
                  this.errors.zip = "";
                }
              }
            }
            // code block
            break;
          case "state":
            if (!fieldVal) {
              this.errors.state = this.$t('stateReq');
            } else {
              this.errors.state = "";
            }
            // code block
            break;
          case "country":
            if (!fieldVal) {
              this.errors.country = this.$t('countryReq');
            } else {
              this.errors.country = "";
            }
            // code block
            break;
          // case "annotation":
          //   if (!fieldVal) {
          //     this.errors.annotation = this.$t('addressTypeReq');
          //   } else {
          //     this.errors.annotation = "";
              
          //     if (this.address.annotation === "Other") {
          //       if (!this.address.annotationOther) {
          //         this.errors.annotationOther = " ";
          //       } else {
          //         this.errors.annotationOther = "";
          //       }
          //     } else {
          //       this.errors.annotationOther = "";
          //     }
  
          //   }
          //   // code block
          //   break;
  
          // case "annotationOther":
          //   if (this.address.annotation === "Other") {
          //     if (!this.address.annotationOther) {
          //       this.errors.annotationOther = "Save this address as";
          //     } else {
          //       this.errors.annotationOther = "";
          //     }
          //   } else {
          //     this.errors.annotationOther = "";
          //   }
          //   // code block
          //   break;
          default:
          // code block
        }
  
        this.validateForm();
      },
  
      isMode(mode:string){
       if(mode=== 'add' || mode=== 'edit' ){
         return true
       }else{
         return true
       }
      },
  
      isLetter(e:any) {
      let char = String.fromCharCode(e.keyCode); 
     // if(/^[A-Za-z]+$/.test(char)) return true;
      if(/^[a-zA-Z\s]+/.test(char)) return true; 
      else e.preventDefault();
      },
  
      isNumber(evt: any) {
        evt = evt ? evt : window.event;
        var charCode = evt.which ? evt.which : evt.keyCode;
        if (
          charCode > 31 &&
          (charCode < 48 || charCode > 57) &&
          charCode !== 46
        ) {
          evt.preventDefault();
        } else {
          return true;
        }
      },
      
      setError() {
        for (const [key, value] of Object.entries(this.address)) {
          this.onChange(value, key);
        //   console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
        }
        // console.log(this.errors)      
        // console.log("address:", this.address);
      },
  
      validateForm() {
        console.log('validateForm')  
        let obj: any = this.errors;
        for (var value in obj) {
          if (obj[value] != "") {
            this.isAddressFormValid = false;
            return false;
          } else {
            this.isAddressFormValid = true;
          }
        }
      },
  
      cancel(){
        this.$emit("cancel", 'cancel');
      },
  
      async isValidZipCode(zipcode: string){ 
        if(zipcode){
          let isValid: boolean
          try{            
            const reqUrl = `offers/v1/offers/verify-pincode/${zipcode}`
            const zipcodeResponse = await this.$axios.$get(reqUrl)
            console.log('zipcodeResponse:', zipcodeResponse)
            isValid = true
          } catch(error) {
            isValid = false
          }
          return isValid
        } else {
          return false
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
  
    input[type="text"]:focus ~ label,input[type="number"]:focus ~ label, input[type="email"]:focus ~ label,
    input[type="text"]:not(:placeholder-shown) ~ label, input[type="email"]:not(:placeholder-shown) ~ label,
    textarea:focus ~ label,
    textarea:not(:placeholder-shown) ~ label,
    select:focus ~ label,
    select:not([value='']):valid ~ label {
      /* @apply transform; scale-75; -translate-y-6; */
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate))
        skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      --tw-scale-x: 0.75;
      --tw-scale-y: 0.75;
      --tw-translate-y: -1.5rem;
    }
  
    input[type="text"]:focus ~ label, input[type="email"]:focus ~ label,
    select:focus ~ label {
      /* @apply text-black; left-0; */
      --tw-text-opacity: 1;
      color: rgba(72, 206, 243, var(--tw-text-opacity));
      left: 0px;
    }
  </style>