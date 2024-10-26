    <!-- Modal Start Of Add Address Account -->
 <template>
  <div
    class="fixed bg-gray-800/[.5] z-40 inset-0"
    id="add-address-modal"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-md md:max-w-md md:w-5/6">
      <div
        class="
          bg-white
          py-8
          px-4
          sm:shadow sm:rounded-lg sm:px-10
          relative
          overflow-auto
          h-[500px]
        "
      >
        <a  v-if="editAddressDetails.mode !== 'edit'" href="javascript:;" class="absolute left-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H1C0.447715 9 0 8.55228 0 8Z"
              fill="#7B7E80"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.70711 0.292893C9.09763 0.683417 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C-0.0976311 8.31658 -0.0976311 7.68342 0.292893 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z"
              fill="#7B7E80"
            />
          </svg>
        </a>

        <button
          v-on:click="closeModal()"
          type="button"
          id="close-btns"
          class="
            absolute
            z-40
            top-0
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

        <form @submit.prevent="updateAddressInfo()">
          <h2 class="text-left text-xl pb-2 pt-4 font-bold text-gray-600">
            Address
          </h2>
          <div class="text-xs text-gray-500 pb-7">
            Fill in your exact address details you can change it later
          </div>
          <div class="relative z-0 w-full mb-2">
            <!-- <h3 class="font-medium text-base text-gray-600">Contact Details</h3> -->
          </div>
          <div class="w-full mx-auto flex flex-col justify-center">
            <div class="flex flex-col">
              <!-- <div class="flex flex-col ">
                      <div class="relative z-0 w-full  mb-6 ">
                      <input type="text"  name="name"  placeholder=" "   class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm text-gray-600"
                      />
                      <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Enter Name </label>
                      <span class="text-sm text-red hidden" id="error">Phone is required</span>
                      </div>
                      
                      <div class="relative z-0 w-full mb-6">
                      <input type="tel"  name="tel"  placeholder=" "   class="pt-3 pl-10 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                      />
                      <label for="tel" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm pl-10">Enter Phone </label>
                      <span class="text-sm text-red hidden" id="error">Phone is required</span>
                      <span class="absolute top-3 left-0 text-sm text-gray-600 block pr-2 border-r">+ 91 </span>
                      </div>
                      <div class="relative z-0 w-full mb-6">
                      <input type="email"  name="name"  placeholder=" "   class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"
                      />
                      <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Enter Email </label>
                      <span class="text-sm text-red hidden" id="error">Phone is required</span>
                      </div>
                      
                      
                      
                      </div> -->
              <!-- <div class="relative z-0 w-full mb-6">
                      <h3 class="font-medium text-base text-gray-600">Address Details</h3>
                      </div> -->

<div class="relative z-0 w-full mb-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  v-model="address.name"
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
                  >Name</label
                >
                <span class="text-sm text-red hidden" id="error"
                  >Name is required</span
                >
              </div>

              <!-- <div class="relative z-0 w-full mb-6">
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  v-model="address.PhoneNumber"
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
                  for="phone"
                  class="
                    absolute
                    duration-300
                    top-3
                    -z-1
                    origin-0
                    text-gray-500 text-sm
                  "
                  >Phone Number</label
                >
                <span class="text-sm text-red hidden" id="error"
                  >Phone Number required</span
                >
              </div> -->

               <div class="relative z-0 w-full mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  v-model="address.email"
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
                  >Email</label
                >
                <span class="text-sm text-red hidden" id="error"
                  >Email required</span
                >
              </div>



              <div class="relative z-0 w-full mb-6">
                <input
                  type="text"
                  id="addressLine"
                  name="addressLine"
                  placeholder=" "
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
                  >Address line</label
                >
                <span class="text-sm text-red hidden" id="error"
                  >Address Line is required</span
                >
              </div>
              <div class="flex flex-col">
                <div class="relative z-0 w-full mb-6">
                  <input
                    type="text"
                    id="landmark"
                    name="landmark" placeholder=" "
                    v-model="address.landmark"
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
                    >Landmark (Optional)</label
                  >
                  <!-- <span class="text-sm text-red hidden" id="error">landmark is required</span> -->
                </div>
                <div class="relative z-0 w-full mb-6">
                  <input
                    type="text"
                    id="flatNo"
                    name="flatNo" placeholder=" "
                    v-model="address.flatNo"
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
                    >House / Flat number
                  </label>
                  <span class="text-sm text-red hidden" id="error"
                    >House / Flat number is required</span
                  >
                </div>
                <div class="relative z-0 w-full mb-6">
                  <input
                    type="text"
                    name="area"
                    placeholder=" "
                    v-model="address.area"
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
                    >Area (Optional)</label
                  >
                  <!-- <span class="text-sm text-red hidden" id="error">Phone is required</span> -->
                </div>
              </div>
              <div class="flex flex-col">
                <div class="relative z-0 mb-6">
                  <input
                    type="text"
                    name="pin"
                    placeholder=" "
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
                    >Pin
                  </label>
                  <span class="text-sm text-red hidden" id="error"
                    >Pin is required</span
                  >
                </div>
                <div class="relative z-0 w-full mb-6">
                  <input
                    type="text"
                    name="city"
                    placeholder=" "
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
                    for="name"
                    class="
                      absolute
                      duration-300
                      top-3
                      -z-1
                      origin-0
                      text-gray-500 text-sm
                    "
                    >City
                  </label>
                  <span class="text-sm text-red hidden" id="error"
                    >City is required</span
                  >
                </div>
                <div class="relative z-0 w-full mb-6">
                  <select
                    name="State"
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
                    <option value="West Bengal" selected>West Bengal</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
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
                    >State</label
                  >
                  <span class="text-xs terrortext hidden" id="error"
                    >State is required</span
                  >
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
                <div class="relative z-0 w-full mb-6">
                  <select
                    name="country"
                    v-model="address.country"
                    aria-readonly=""
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
                    <option value="India" selected>India</option>
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
                    >Country</label
                  >
                  <span class="text-xs terrortext hidden" id="error"
                    >Phone is required</span
                  >
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
                <div class="relative z-0 w-full mb-6">
                  <label class="text-gray-500 pb-2 text-xs block"
                    >Address Type</label
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
                        Home
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="work"
                        name="annotation"
                        type="radio"
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
                        Work
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="other"
                        name="annotation"
                        type="radio"
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
                        for="other"
                        class="ml-3 block text-sm font-normal text-gray-500"
                      >
                        Other
                      </label>
                    </div>
                  </div>
                  <div
                    class="relative z-0 w-full mb-6"
                    v-if="address.annotation === 'Other'"
                  >
                    <input
                      type="text"
                      name="city"
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
                    <span class="text-sm text-red hidden" id="error"
                      >Anotation is required</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class=mb-4>
                <label class="block mb-2 text-darkcolor text-sm font-medium">Email or Phone</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight h-14 focus:outline-none focus:shadow-outline text-sm"  type="text" placeholder="Enter your email or mobile number">
                </div> -->
          <div class="flex mt-6 items-center">
            <!-- <a href="/authentication/add-map" class="flex items-center justify-center text-center mr-6 py-1 px-3 h-12 rounded border-0 border-gray-300 w-30  text-base leading-10 font-bold text-gray-400"> 
                    back </a> -->
            <!-- <router-link
              to="/authentication/add-address"
              tag="button"
              class="rounded w-full"
            > -->
            <button
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
                opacity-50
              "
            >
              {{ btnTitle }}
            </button>
            <!-- </router-link> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "addUserAddress",
  props: ["editAddressDetails"],

  mounted() {
    console.log(
      "editAddressDetails",
      this.editAddressDetails,
      this.editAddressDetails.addressDet.id
    );
    console.log("Address To add");
    if (this.editAddressDetails && this.editAddressDetails.mode === "edit") {
      this.setValue(this.editAddressDetails.addressDet);
      let modal = document.getElementById("add-address-modal")!;
      modal.style.display = "block";
      this.btnTitle = "Update";
    }

    //this.chnagePaymentMethod("BANK");
  },
  data() {
    return {
      btnTitle: "",
      address: {
        name: null,
        phoneNumber: '',
        email: null,
        addressLine: null,
        lat: null,
        lng: null,
        flatNo: null,
        landmark: null,
        area: null,
        annotation: "",
        zip: null,
        city: null,
        state: null,
        country: null,
        default: true,
        annotationOther: "",
      },
    };
  },
  methods: {
    setValue(addressDetails: any) {
      this.address.name = addressDetails.name;
      this.address.addressLine = addressDetails.addressLine;
      this.address.landmark = addressDetails.landmark;
      this.address.lat = addressDetails.lat;
      this.address.lng = addressDetails.lng;
      this.address.flatNo = addressDetails.flatNo;
      this.address.zip = addressDetails.zip;
      this.address.city = addressDetails.city;
      this.address.state = addressDetails.state;
      this.address.country = addressDetails.country;
      this.address.name = addressDetails.name;
      this.address.phoneNumber = addressDetails.phoneNumber;
      this.address.default = addressDetails.default;
      //this.address.phoneNumber = this.remove91ToPhoneNumber(addressDetails.phoneNumber);
      this.address.email = addressDetails.email;

      console.log("addressDetails.annotation", addressDetails.annotation ,addressDetails.phoneNumber);

      if (addressDetails.annotation === "Home") {
        this.address.annotation = "Home";
      } else {
        if (addressDetails.annotation === "Work") {
          this.address.annotation = "Work";
        } else {
          this.address.annotation = "Other";
          this.address.annotationOther = addressDetails.annotation;
        }
      }

    //   if (
    //     addressDetails.annotation != "Home" ||
    //     addressDetails.annotation != "Other" ||
    //     addressDetails.annotation != "Work"
    //   ) {
    //     console.log("Address Annotation Is not Home");
    //     this.address.annotation = "Other";
    //     this.address.annotationOther = addressDetails.annotation;
    //   } else {
    //     this.address.annotation = addressDetails.annotation;
    //   }
    },
    cancelDelete() {
      this.closeModal();
    },
    closeModalWithRes() {
      let modal = document.getElementById("add-address-modal")!;
      modal.style.display = "none";
      this.$parent.$emit("closeModal", "EditAddress");
    },
    closeModal() {
      let modal = document.getElementById("add-address-modal")!;
      modal.style.display = "none";
      this.$parent.$emit("closeModal");
    },

    async updateAddressInfo() {
      if (this.address.annotation === "Other") {
        this.address.annotation = this.address.annotationOther;
      } else {
        this.address.annotationOther = "";
      }

      try {
        console.log("this.paymentPostObject", this.address);
        let url = `/users/v1/user/address/${this.editAddressDetails.addressDet.id}`;
        const data = await this.$axios.$put(url, this.address);
        if (data.success) {
          this.closeModalWithRes();
        }
      } catch (error) {
        console.log(error);
      }
      console.log("This.address", this.address);
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
  },
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



    <!-- Modal End -->