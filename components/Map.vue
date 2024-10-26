<template>
  <div>
    <h2 class="text-left text-xl pb-1 font-bold text-gray-600 -mt-3">
      {{ $t('addLocation') }}
      <!-- <span class="text-gray-500 font-normal text-xs">(Optional)</span>   -->
     
    </h2>
    <div class="text-xs text-gray-500 pb-2">
      {{ $t('subtextLocation') }} 
    </div>
    <div class="relative">
       <span class="absolute text-xs text-red-400 mt-px -top-3"> {{ showMapError }}</span>
      <div class="absolute text-xs text-red-400 mt-px">                 
                    </div>
    </div>

    <div class="relative w-full mb-6">
      <div class="relative z-0 w-full mb-2">
        <!-- <input type="text"  name="name"  placeholder=" "   class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"/> -->
        <gmap-autocomplete
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
        <!-- <label for="locationAutoComplete" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Type your address here</label> -->

        <!-- <gmap-autocomplete class="introInput" >
                <template v-slot:input="slotProps">
                  <v-text-field outlined
                      prepend-inner-icon="place"
                      placeholder="Location Of Event"
                      ref="input"
                      v-on:listeners="slotProps.listeners"
                      v-on:attrs="slotProps.attrs">
                  </v-text-field>
                </template>
              </gmap-autocomplete> -->
        <!-- <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Type your address here</label> -->
        <!-- <a
          href="javascript:;"
          @click="geolocate()"
          class="absolute top-1 right-0 bg-white block p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 0C11.4477 0 11 0.447715 11 1V3.05493C6.82838 3.51608 3.51608 6.82838 3.05493 11H1C0.447715 11 0 11.4477 0 12C0 12.5523 0.447715 13 1 13H3.05493C3.51608 17.1716 6.82838 20.4839 11 20.9451V23C11 23.5523 11.4477 24 12 24C12.5523 24 13 23.5523 13 23V20.9451C17.1716 20.4839 20.4839 17.1716 20.9451 13H23C23.5523 13 24 12.5523 24 12C24 11.4477 23.5523 11 23 11H20.9451C20.4839 6.82838 17.1716 3.51608 13 3.05493V1C13 0.447715 12.5523 0 12 0ZM19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              fill="#8F95B2"
            />
          </svg>
        </a> -->
      </div>
      <!-- <div>
              <img src="~assets/images/map.png" class="max-w-full h-[320px]"/>
            </div> -->
      <div>
        <GmapMap
          class="max-w-full h-[320px]"
          :center="center"
          :zoom="zoom"
          map-style-id="roadmap"
          :options="mapOptions"
          ref="mapRef"
          @click="handleMapClick"
        >
          <GmapMarker
            :position="marker.position"
            :clickable="true"
            :draggable="true"
            @drag="handleMarkerDrag"
            @click="panToMarker"
          />
        </GmapMap>
        <!-- <a href="javascript:;" @click="geolocate">Detect Location</a>
              <p>Selected Position: {{ marker.position }}</p> -->
      </div>
    </div>

    <!-- <div class=mb-4>
              <label class="block mb-2 text-darkcolor text-sm font-medium">Email or Phone</label>
              <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-14 focus:outline-none focus:shadow-outline text-sm"  type="text" placeholder="Enter your email or mobile number">
          </div> -->
    <!-- <div >
            <router-link to="/authentication/add-address" tag="button" class="w-full">
              <button class="bg-green text-white font-bold py-2 px-3 h-14 rounded w-full opacity-50"  >
                  next
                </button>
                </router-link>
          </div> -->
           
    <div class="flex mt-6 items-center">
      <!-- <a href="/authentication/upload-photo" class="flex items-center justify-center text-center mr-6 py-1 px-3 h-12 rounded border-0 border-gray-300 w-30  text-base leading-10 font-bold text-gray-400"> 
              Back </a> -->
              <!-- Please choose address from map -->


      <button
        href="javascript:;"
        class="
          bg-firoza
          text-white
          font-bold
          py-1
          px-3
          h-12
          rounded
          w-full
          text-base
        "
        @click="submitLocation()"
      >
         {{ $t('next') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { getGoogleMapsAPI } from 'gmap-vue';
export default Vue.extend({
  props:["mode"],
  name: "Map",
  computed: {
    // The below example is the same as writing
    // google() {
    //   return getGoogleMapsAPI();
    // },
    // google: getGoogleMapsAPI,
  },
  mounted() {
    console.log("this.mode",this.mode)
    this.geolocate();
  },
  data() {
    return {
      marker: { position: { lat: 10, lng: 10 } },
      center: { lat: 10, lng: 10 },
      mapOptions: {
        // disableDefaultUI: true,
      },
      zoom: 14,
      addressObj: {
        place_id: null,
        name: null,
        formatted_address: null,
        address_components: [],
      },
      showMapError: ''
    };
  },
  methods: {
    getSearchLocation(e: any) {
      console.log("Search Position:", e);
      this.showMapError = '';
      this.addressObj = {
        place_id: e.place_id,
        name: e.name,
        formatted_address: e.formatted_address,
        address_components: e.address_components
      };

      console.log("addressObj:", this.addressObj);

      let selectedLat = e.geometry.location.lat();
      let selectedLng = e.geometry.location.lng();
      this.marker.position = {
        lat: selectedLat,
        lng: selectedLng,
      };
      this.center = {
        lat: selectedLat,
        lng: selectedLng,
      };
    },
    async autocompleteUser(e: any) {
      // console.log('autocompleteUser e:', e)
      // console.log('autocompleteUser value:', value)
      // console.log('autocompleteUser index:', index)
    },

    //detects location from browser
    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log("position:", position);
        this.marker.position = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.panToMarker();
        this.getStreetAddressFrom(position.coords.latitude, position.coords.longitude);
      });
    },
    //sets the position of marker when dragged
    handleMarkerDrag(e: any) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      console.log("Drag map:", e);
      
      this.getStreetAddressFrom(this.marker.position.lat, this.marker.position.lng);
    },
    //Moves the map view port to marker
    panToMarker() {
      console.log("position:", this.marker.position);
      // this.$refs.mapRef.panTo(this.marker.position);
      // this.$refs.mapRef.setZoom(18);
    },
    //Moves the marker to click position on the map
    handleMapClick(e: any) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      console.log("click map:", e);      
      this.getStreetAddressFrom(this.marker.position.lat, this.marker.position.lng);
    },

    submitLocation() {
      const formAddressObject = this.convertLocatinAddressObjToFormAddressObj();
      console.log("formAddressObject",formAddressObject);

      if(!formAddressObject.addressLine){
        this.showMapError = this.$t('chooseAddressMap')
        return false
      }
     
      if(!formAddressObject.addressLine){
        if(this.mode && this.mode == 'add'){
        this.showMapError = this.$t('chooseAddressMap')
        }else{
       this.showMapError = this.$t('chooseAddressMap')
       this.$emit('selectedLocation', formAddressObject);
        }
     
      }else{
       // this.showMapError = "Please choose address from map"
       this.$emit('selectedLocation', formAddressObject);
      }
      
      
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
        this.addressObj.address_components.map((item: any)=>{
          
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

    async getStreetAddressFrom(lat: number, long: number) {
      // try {
      //     var {
      //       data
      //     } = await this.$axios.get(
      //       "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
      //       lat +
      //       "," +
      //       long +
      //       "&key="+this.$config.googleMapApiKey
      //     );
      //     if (data.error_message) {
      //       console.log('geocode address:', data.error_message)
      //     } else {
      //       // this.address = data.results[0].formatted_address;
      //       console.log('geocode address:', data);
      //     }
      // } catch (error) {
      //     // console.log('geocode address error:', error.message);
      // }
    }
  },
});
</script>
