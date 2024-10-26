<template>
  <div
    class="fixed z-50 inset-0 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
    id="add-map-modal"
  >
    <div
      class="
        flex
        items-end
        justify-center
        min-h-screen
        pt-4
        px-4
        pb-20
        text-center
        sm:block sm:p-0
      "
    >

    
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >

      <div
        class="
          inline-block
          align-bottom
          bg-white
          rounded-lg
          text-left
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
        "
      >

      <button v-if="showAddressModal && editOrAddAddressDetails.mode === 'add' "
          v-on:click="backTomap()"
          type="button"
          id="back-btns"
          class="
            absolute
            z-40
            top-1
            left-0
            inline-flex
            rounded-md
            border border-transparent
            px-4
            py-2
            cursor-pointer
          "
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-16370014=""><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z" fill="#7B7E80" data-v-16370014=""></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z" fill="#7B7E80" data-v-16370014=""></path></svg>
        </button>


       <!-- For Close Modal Start -->
        <button
          v-on:click="closeModal()"
          type="button"
          id="back-btns"
          class="
            absolute
            z-40
            top-1
            right-0
            inline-flex
            rounded-md
            border border-transparent
            px-4
            py-2
          "
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
              fill="black"
              fill-opacity="0.3"
            />
          </svg>
        </button>
      
        <!-- <form class="">  -->
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

           <Map @selectedLocation="selectedLocation" v-if="editOrAddAddressDetails.mode === 'add' && !showAddressModal " :mode='editOrAddAddressDetails.mode'  />

           <client-only>
              <Address  :userAddressInfo="userAddressInfo" :mode="mode" @saveAddress="saveAddress" @cancel="cancel" @editAddress="editAddress"  v-if="editOrAddAddressDetails.mode === 'edit' || showAddressModal  " />
           </client-only>
         
          <!-- <Address  :userAddressInfo="userAddressInfo"  :mode="mode" v-if="showAddressModal" /> -->
        </div>

        <!-- <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-firoza text-base font-medium text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">Next</button>
        <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
      </div> -->
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapGetters } from 'vuex'
// import { getGoogleMapsAPI } from 'gmap-vue';
export default Vue.extend({
  name: "gMap",
  props: ["editOrAddAddressDetails"],
    computed: {
    ...mapState({
      authUser: (state:any) => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    }),
  },
  mounted() {
   // console.log("editOrAddAddressDetails", this.editOrAddAddressDetails);
    if (this.editOrAddAddressDetails.mode === "edit") {
      this.mode = this.editOrAddAddressDetails.mode;
      this.showAddressModal = true;
      this.setUserAddressInfo();
    } else {
      this.setUserAddressInfo();
      this.mode = this.editOrAddAddressDetails.mode;
      this.showAddressModal = false;
    }
    let modal = document.getElementById("add-map-modal")!;
    modal.style.display = "block";
    // this.chnagePaymentMethod("BANK");
  },
  data() {
    return {
      showAddressModal: false,
      mode : '',
      userAddressInfo: {
        addressId: null,
        name: '',
        phoneNumber: '',
        email: '',
        addressLine: null,
        lat: null,
        lng: null,
        flatNo: null,
        landmark: null,
        area: null,
        annotation: null,
        zip: null,
        city: null,
        state: null,
        country: null,
        default:false
      },
    };
  },
  
  methods: {
    selectedLocation(location: any) {
      //console.log("location:", location);
      this.showAddressModal = true;
      this.userAddressInfo = location;

      if(this.editOrAddAddressDetails.mode === "add"){
          this.userAddressInfo.name = this.authUser.displayName;
          this.userAddressInfo.email = this.authUser.email;
          this.userAddressInfo.phoneNumber = this.remove91ToPhoneNumber(this.authUser.phoneNumber);
        }

     // console.log("this.userAddressInfo",this.userAddressInfo);
      //this.changeCurrentStepNext(this.step);
    },

    setUserAddressInfo(){
     this.userAddressInfo.addressId = this.editOrAddAddressDetails.addressDet?.id;
     this.userAddressInfo.addressLine = this.editOrAddAddressDetails.addressDet?.addressLine;
     this.userAddressInfo.lat = this.editOrAddAddressDetails.addressDet?.lat;
     this.userAddressInfo.lng = this.editOrAddAddressDetails.addressDet?.lng;
     this.userAddressInfo.flatNo = this.editOrAddAddressDetails.addressDet?.flatNo;
     this.userAddressInfo.landmark = this.editOrAddAddressDetails.addressDet?.landmark;
     this.userAddressInfo.area = this.editOrAddAddressDetails.addressDet?.area;
     this.userAddressInfo.annotation = this.editOrAddAddressDetails.addressDet?.annotation;
     this.userAddressInfo.zip = this.editOrAddAddressDetails.addressDet?.zip;
     this.userAddressInfo.city = this.editOrAddAddressDetails.addressDet?.city;
     this.userAddressInfo.area = this.editOrAddAddressDetails.addressDet?.area;
     this.userAddressInfo.state = this.editOrAddAddressDetails.addressDet?.state;
     this.userAddressInfo.country = this.editOrAddAddressDetails.addressDet?.country;
     this.userAddressInfo.name = this.editOrAddAddressDetails.addressDet?.name;
     this.userAddressInfo.email =  this.editOrAddAddressDetails.addressDet?.email;
     this.userAddressInfo.phoneNumber = this.editOrAddAddressDetails.addressDet?.phoneNumber;
     this.userAddressInfo.default = this.editOrAddAddressDetails.addressDet?.default;
    },

       editAddress(saveData: any) {
       if(saveData.success){
         this.closeModalWithRes();
       }
    },

    cancel(){
    this.closeModal()
    },

    saveAddress(saveData: any){
      console.log("Add Data:",saveData)
      if(saveData.data.success){              
        this.$emit("savedAddress", saveData.data.payload);
        this.closeModalWithRes();
      }
    },
    backTomap(){
    // console.log("Back To Map")
     this.showAddressModal = false;
    },

    closeModalWithRes() {
      let modal = document.getElementById("add-map-modal")!;
      modal.style.display = "none";
      this.$parent.$emit("closeModal", "Address");
    },
    closeModal() {
      let modal = document.getElementById("add-map-modal")!;
      modal.style.display = "none";
      this.$parent.$emit("closeModal");
    },

    remove91ToPhoneNumber(phone: any) {
    //console.log("remove91ToPhoneNumber",phone)
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
  },
});
</script>


<style>
.-z-1 {
  z-index: -1;
}

.origin-0 {
  transform-origin: 0%;
}

input[type="text"]:focus ~ label,
input[type="email"]:focus ~ label,
input[type="tel"]:focus ~ label,
input[type="text"]:not(:placeholder-shown) ~ label,
input[type="email"]:not(:placeholder-shown) ~ label,
input[type="tel"]:not(:placeholder-shown) ~ label,
textarea:focus ~ label,
textarea:not(:placeholder-shown) ~ label,
select:focus ~ label,
select:not([value=""]):valid ~ label {
  /* @apply transform; scale-75; -translate-y-6; */
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  --tw-scale-x: 0.75;
  --tw-scale-y: 0.75;
  --tw-translate-y: -1.5rem;
}

input[type="text"]:focus ~ label,
input[type="email"]:focus ~ label,
select:focus ~ label {
  /* @apply text-black; left-0; */
  --tw-text-opacity: 1;
  color: rgba(72, 206, 243, var(--tw-text-opacity));
  left: 0px;
}
</style>



    <!-- Modal End -->