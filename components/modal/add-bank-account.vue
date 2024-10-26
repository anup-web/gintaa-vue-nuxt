    <!-- Modal Start Of Add bank Account -->
<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="fixed z-50 inset-0 overflow-y-auto" id="add-bank-account-modal" aria-labelledby="modal-title"
      role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form>
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-lightgreen sm:mx-0 sm:h-10 sm:w-10">
                  <!-- Heroicon name: outline/exclamation -->
                  <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9V16H5V9H2ZM8 9V16H11V9H8ZM0 21H19V18H0V21ZM14 9V16H17V9H14ZM9.5 0L0 5V7H19V5L9.5 0Z"
                      fill="#8BC63E" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Add bank account</h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">Please enter your correct bank or UPI details carefully. They will
                      be used for all refunds, margins and bonus payments</p>
                  </div>
                </div>
              </div>

              <div class="flex flex-col w-full mt-4">
                <div class="mt-2 space-x-4 flex items-center">
                  <div class="flex items-center" v-for="paymenttype in paymentTypes" :key="paymenttype.id">
                    <input v-on:change="chnagePaymentMethod(paymenttype.slug)" v-bind:checked="paymenttype.checked"
                      name="bank" :id="paymenttype.name" :value="paymenttype.name" type="radio" class="
                            focus:ring-indigo-500
                            h-4
                            w-4
                            text-indigo-600
                            border-gray-300
                          " />
                    <label :for="paymenttype.name" class="pl-2 block text-sm font-normal text-gray-700">
                      <div class="flex items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4 10V17H7V10H4ZM10 10V17H13V10H10ZM2 22H21V19H2V22ZM16 10V17H19V10H16ZM11.5 1L2 6V8H21V6L11.5 1Z"
                            fill="#8CAEC5" />
                        </svg>
                        <span class="pl-2"> {{ paymenttype.name }} </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <!-- v-on:keypress="isLetter($event)" -->

              <div class="flex flex-col w-full mt-1">
                <div class="grid grid-cols-6 gap-x-6 gap-y-3">
                  <div class="col-span-6" v-if="paymentTypeBank">
                    <div class="relative z-0 w-full mt-3">
                      <input type="text" v-on:input="onChangeBankDet(acntDetailsObj.nickName, 'nickName')"
                        v-model="acntDetailsObj.nickName" autocomplete="off" placeholder=" " class="
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
                            " />
                      <label class="
                              absolute
                              duration-300
                              top-3
                              -z-1
                              origin-0
                              text-gray-500 text-sm
                            ">Your Name</label>
                      <div class="absolute text-xs text-red-400 mt-px">
                        {{ errorListForBank.nickName }}
                      </div>
                    </div>
                  </div>

                  <div class="col-span-6" v-if="paymentTypeBank">
                    <div class="relative z-0 w-full mt-3">
                      <input v-on:input="
                        onChangeBankDet(acntDetailsObj.accountNumber, 'accountNumber')" v-model="acntDetailsObj.accountNumber" autocomplete="off" @keypress="isNumber($event)" maxlength="18"
                        type="password" name="name" placeholder=" " class="
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
                            " />
                      <label for="name" class="
                              absolute
                              duration-300
                              top-3
                              -z-1
                              origin-0
                              text-gray-500 text-sm
                            ">Account number</label>
                      <div class="absolute text-xs text-red-400 mt-px">
                        {{ errorListForBank.accountNumber }}
                      </div>
                    </div>
                  </div>

                  <div class="col-span-6" v-if="paymentTypeBank">
                    <div class="relative z-0 w-full mt-3">
                      <input v-on:input="
                        onChangeBankDet(
                          acntDetailsObj.confirmaccountNumber,
                          'confirmaccountNumber'
                        )
                      " @keypress="isNumber($event)" v-model="acntDetailsObj.confirmaccountNumber" autocomplete="off" type="password"
                        maxlength="18" name="name" placeholder=" " class="
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
                            " />
                      <label for="name" class="
                              absolute
                              duration-300
                              top-3
                              -z-1
                              origin-0
                              text-gray-500 text-sm
                            ">Re-Enter Account Number</label>
                      <div class="absolute text-xs text-red-400 mt-px">
                        {{ errorListForBank.confirmaccountnumber }}
                      </div>
                    </div>
                  </div>

                  <div class="col-span-6" v-if="paymentTypeBank">
                    <div class="relative z-0 w-full mt-3">
                      <input v-on:input="onChangeBankDet(acntDetailsObj.ifsc, 'ifsc')" v-model="acntDetailsObj.ifsc"
                        @input="
                          acntDetailsObj.ifsc = $event.target.value.toUpperCase()
                        " type="text" autocomplete="off" name="name" placeholder=" " class="
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
                            " />
                      <label for="name" class="
                              absolute
                              duration-300
                              top-3
                              -z-1
                              origin-0
                              text-gray-500 text-sm
                            ">IFSC</label>
                      <div class="absolute text-xs text-red-400 mt-px">
                        {{ errorListForBank.ifsc }}
                      </div>
                    </div>
                  </div>

                  <div class="col-span-6" v-if="!paymentTypeBank">
                    <div class="relative z-0 w-full mt-3">
                      <input v-on:input="onChangeUpiDet(acntDetailsObj.nickName, 'upiNickName')"
                        v-model="acntDetailsObj.nickName" autocomplete="off" type="text" name="name" placeholder=" " class="
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
                            " />
                      <label for="name" class="
                              absolute
                              duration-300
                              top-3
                              -z-1
                              origin-0
                              text-gray-500 text-sm
                            ">Your Name</label>
                      <div class="absolute text-xs text-red-400 mt-px">
                        {{ errorListForUpi.nickName }}
                      </div>
                    </div>
                  </div>

                  <div class="col-span-6" v-if="!paymentTypeBank">
                    <div class="relative z-0 w-full mt-3">
                      <input v-on:input="onChangeUpiDet(acntDetailsObj.upiId, 'upiId')" type="email"
                        v-model="acntDetailsObj.upiId" name="name" autocomplete="off" placeholder="UPI Id" class="
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
                            " />
                      <label for="name" class="
                              absolute
                              duration-300
                              top-3
                              -z-1
                              origin-0
                              text-gray-500 text-sm
                            ">UPI Id</label>
                      <div class="absolute text-xs text-red-400 mt-px">
                        {{ errorListForUpi.upiId }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="absolute text-xs text-red-400 mt-px">
                {{ errMsg }}
              </div> -->

              <!-- v-on:click="addBankDet()" -->
            <!-- <div class="flex flex-col w-full mt-8">
            <button  
              type="submit"
              class="
                transition-all
                flex
                justify-center
                w-full
                items-center
                border border-green
                bg-green
                py-2
                px-6
                rounded
                font-normal
                text-base text-white
                hover:bg-firoza hover:border-firoza
              "
            >
              <span>submit</span>
              <Spinner v-show="loading"/>
            </button>
                  </div> -->

            </div>

            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <a v-if="selectedPaymentType === 'UPI'" :disabled="!isUpiDetailsValid"
                :class="!isUpiDetailsValid ? 'opacity-50' : 'opacity-100 cursor-pointer'"
                @click="isUpiDetailsValid ? addUpiDet() : false"
                class="w-full relative min-w-[130px] inline-flex justify-center rounded border border-transparent shadow-sm px-4 py-2 bg-firoza text-base font-medium text-white  sm:ml-3 sm:w-auto sm:text-sm">Submit
                <div class="absolute -right-2 top-0">
                  <Spinner v-show="loading" class="w-4" />
                </div>
              </a>
              <a v-if="selectedPaymentType === 'BANK'" :disabled="!isBankDetailsValid"
                :class="!isBankDetailsValid ? 'opacity-50' : 'opacity-100 cursor-pointer'"
                @click="isBankDetailsValid ? addBankDet() : false"
                class="w-full relative min-w-[130px] inline-flex justify-center rounded border border-transparent shadow-sm px-4 py-2 bg-firoza text-base font-medium text-white  sm:ml-3 sm:w-auto sm:text-sm">Submit
                <div class="absolute -right-2 top-0">
                  <Spinner v-show="loading" class="w-4" />
                </div>
              </a>
              <button type="button" v-on:click="closeModal()" id="close-btns"
                class="mt-3 w-full inline-flex justify-center rounded border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
            </div>
          </form>

        </div>
      </div>
    </div>



  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "addBankAccount",
  // props: ["deletedItemDetails"],

  mounted() {
    let modal = document.getElementById("add-bank-account-modal")!;
    modal.style.display = "block";
    this.chnagePaymentMethod("BANK");
    // this.onChangeBankDet('nickName','')
  },
  data() {
    return {
      loading: false,
      product: null,
      isBankDetailsValid: false,
      isUpiDetailsValid: false,
      isFormValid: false,
      errorListForBank: {
        nickName: "",
        accountNumber: "",
        confirmaccountnumber: "",
        ifsc: "",
      },
      errorListForUpi: {
        nickName: "",
        upiId: "",
      },
      paymentTypes: [
        { id: 1, name: "Bank", slug: "BANK", checked: true },
        { id: 2, name: "UPI Id", slug: "UPI", checked: false },
      ],
      selectedPaymentType: "BANK",
      acntDetailsObj: {
        nickName: "",
        accountNumber: "",
        confirmaccountNumber: "",
        ifsc: "",
        upiId: "",
      },
      paymentPostObject: {},
      paymentTypeBank: true,
      errMsg: ''
    };
  },
  methods: {
    cancelDelete() {
      this.closeModal();
    },
    closeModalWithRes() {
      let modal = document.getElementById("add-bank-account-modal")!;
      modal.style.display = "none";
      this.$emit('accountAdded', true);
    },
    closeModal() {
      let modal = document.getElementById("add-bank-account-modal")!;
      modal.style.display = "none";
      this.$emit('closeaddAcntMod', true);
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

    chnagePaymentMethod(paymentTyp: string) {
      console.log("paymentTyp", paymentTyp);
      if (paymentTyp === "UPI") {
        this.paymentTypeBank = false;
      } else {
        this.paymentTypeBank = true;
      }
      this.selectedPaymentType = paymentTyp;
      this.checkBankErrorExistOrnot()
      this.checkUpiErrorExistOrnot()
    },

    async addUpiDet() {
      console.log("-----------------Upi det added")
      this.paymentPostObject = {
        paymentType: "UPI",
        upiId: this.acntDetailsObj.upiId,
        nickName: this.acntDetailsObj.nickName,
        default: true,
      };
      this.loading = true;
      try {

        let url = `/users/v1/user/fund-account`;
        const data = await this.$axios.$post(url, this.paymentPostObject);
        console.log("Data", data)
        if (data.success) {
          this.closeModalWithRes();
          Vue.$toast.success(data?.message);
        } else {
          console.log("Data", data)
          if (!data.success) {
            console.log("message", data.message)
            this.errMsg = data.message
            Vue.$toast.error(this.errMsg);
          }
        }
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        this.errMsg = error.response.data.message
        Vue.$toast.error(this.errMsg);
      }
    },

    async addBankDet() {
      this.paymentPostObject = {
        paymentType: "BANK",
        bankAccountDetails: {
          accountNumber: this.acntDetailsObj.accountNumber,
          ifsc: this.acntDetailsObj.ifsc,
          //name : this.acntDetailsObj.name
        },
        nickName: this.acntDetailsObj.nickName,
        default: true,
      };
      this.loading = true;
      try {

        let url = `/users/v1/user/fund-account`;
        const data = await this.$axios.$post(url, this.paymentPostObject);
        console.log("Data", data)
        if (data.success) {
          this.closeModalWithRes();
          Vue.$toast.success(data?.message);
        } else {
          console.log("Data", data)
          if (!data.success) {
            console.log("message", data.message)
            this.errMsg = data.message
            Vue.$toast.error(this.errMsg);
          }
        }
        this.loading = false;
      } catch (error: any) {
        this.loading = false;
        this.errMsg = error.response.data.message
        Vue.$toast.error(this.errMsg);

      }
    },

    onChangeBankDet(value: any, fieldName: any) {
      switch (fieldName) {
        case "nickName":
          if (!value) {
            this.isBankDetailsValid = false;
            this.isUpiDetailsValid = false
            this.errorListForBank.nickName = "Name is required";
            this.errorListForUpi.nickName = "Name is required"
          } else {
            if (value.length < 3) {
              this.isBankDetailsValid = false;
              this.isUpiDetailsValid = false
              this.errorListForBank.nickName = "Name must be minimum 3 character long";
              this.errorListForUpi.nickName = "Name must be minimum 3 character long"
            } else {
              console.log("value.trim()",value.trim())
              if (!this.$isValidName(value.trim())) {
                this.isBankDetailsValid = false;
                this.isUpiDetailsValid = false
                this.errorListForBank.nickName = "Inavalid Name";
                this.errorListForUpi.nickName = "Inavalid Name"
              } else {
                this.errorListForBank.nickName = "";
                this.errorListForUpi.nickName = "";

                this.checkBankErrorExistOrnot()
                this.checkUpiErrorExistOrnot()
                // this.errorListForUpi.nickName = "";
              }


            }
          }
          // code block
          break;
        case "accountNumber":
          if (!value) {
            this.isBankDetailsValid = false;
            this.errorListForBank.accountNumber = "Account Number is required";
          } else {
            if (value.length < 9) {
              this.isBankDetailsValid = false;
              this.errorListForBank.accountNumber = " Account number must be minimum 9 characters long";
            } else {
              this.errorListForBank.accountNumber = "";
              this.checkBankErrorExistOrnot()
              if (this.acntDetailsObj.confirmaccountNumber) {
                this.checkAccountNumberMatch()
              }

            }
          }
          break;
        case "confirmaccountNumber":
          console.log("Case confirm")
          if (!value) {
            this.isBankDetailsValid = false;
            this.errorListForBank.confirmaccountnumber = "Confirm Account Number is required";
          } else {

            if (this.acntDetailsObj.accountNumber) {
              this.checkAccountNumberMatch()
              // if (this.acntDetailsObj.accountNumber !== this.acntDetailsObj.confirmaccountNumber) {
              //   this.isBankDetailsValid = false;
              //   this.errorListForBank.confirmaccountnumber = " Account Numbers do not match";
              // } else {
              //   this.errorListForBank.confirmaccountnumber = "";
              //   this.checkBankErrorExistOrnot()
              // }

            }

          }
          break;

        case "ifsc":
          if (!value) {
            this.isBankDetailsValid = false;
            this.errorListForBank.ifsc = "IFSC is required";
          } else {

            if (value) {
              if (value.length < 11) {
                this.isBankDetailsValid = false;
                this.errorListForBank.ifsc = "IFSC must be minimum 11 characters long";
              } else {

                if (!this.$isValidIfsc(value)) {
                  this.isBankDetailsValid = false;
                  this.errorListForBank.ifsc = "Invalid IFSC Code";
                } else {
                  // this.isBankDetailsValid = false;
                  this.errorListForBank.ifsc = "";
                  this.checkBankErrorExistOrnot()

                }
                //const isValidIfsc = this.$isValidIfsc(value);

              }

            }

          }
          break;

        //  case "upiNickName":
        //   if (!value) {
        //     this.isBankDetailsValid = false;
        //     this.errorListForUpi.nickName = "Name is required";
        //     this.errorListForBank.nickName = "Name is required";
        //   } else {
        //     if (value.length < 3) {
        //       this.isBankDetailsValid = false;
        //       this.errorListForUpi.nickName = "Name must be minimum 3 character long";
        //       this.errorListForBank.nickName = "Name must be minimum 3 character long";
        //     } else {
        //       if(!this.$isValidName(value)){
        //       this.isBankDetailsValid = false;
        //       this.errorListForBank.nickName = "Inavalid Name";
        //       this.errorListForUpi.nickName  = "Inavalid Name"
        //       }else{
        //       this.errorListForBank.nickName = "";
        //       this.errorListForUpi.nickName = "";
        //       }

        //     }
        //   }
        //   // code block
        //   break;

        //   case "upiId":
        // if (!value) {
        //   this.isBankDetailsValid = false;
        //   this.errorListForUpi.upiId = "UPI-ID is required";
        // } else {
        //   if (!this.$isValidUpi(value)) {
        //     this.isBankDetailsValid = false;
        //     this.errorListForUpi.upiId = "UPI-Id is invalid";
        //   } else {
        //     this.errorListForUpi.upiId = "";

        //   }
        // }
        // code block
        //  break;
        default:
        // code block
      }

      // Name must be minimum 3 character long
      // console.log(this.selectedPaymentType);
    },

    checkAccountNumberMatch() {
      if (this.acntDetailsObj.accountNumber !== this.acntDetailsObj.confirmaccountNumber) {
        this.isBankDetailsValid = false;
        this.errorListForBank.confirmaccountnumber = " Account Numbers do not match";
      } else {
        this.errorListForBank.confirmaccountnumber = "";
        this.checkBankErrorExistOrnot()
      }
    },

    onChangeUpiDet(value: any, fieldName: any) {
      console.log("upi change")
      switch (fieldName) {
        case "upiNickName":
          if (!value) {
            this.isBankDetailsValid = false;
            this.isUpiDetailsValid = false
            this.errorListForUpi.nickName = "Name is required";
            this.errorListForBank.nickName = "Name is required";
          } else {
            if (value.length < 3) {
              this.isBankDetailsValid = false;
              this.isUpiDetailsValid = false
              this.errorListForUpi.nickName = "Name must be minimum 3 character long";
              this.errorListForBank.nickName = "Name must be minimum 3 character long";
            } else {
              if (!this.$isValidName(value)) {
                this.isBankDetailsValid = false;
                this.isUpiDetailsValid = false
                this.errorListForBank.nickName = "Inavalid Name";
                this.errorListForUpi.nickName = "Inavalid Name"
              } else {
                this.errorListForBank.nickName = "";
                this.errorListForUpi.nickName = "";
                this.checkBankErrorExistOrnot()
                this.checkUpiErrorExistOrnot()
              }

            }
          }
          // code block
          break;

        case "upiId":
          if (!value) {
            this.isUpiDetailsValid = false;
            this.errorListForUpi.upiId = "UPI-ID is required";
          } else {
            if (!this.$isValidUpi(value)) {
              this.isUpiDetailsValid = false;
              this.errorListForUpi.upiId = "UPI-Id is invalid";
            } else {
              this.errorListForUpi.upiId = "";
              this.checkUpiErrorExistOrnot()

            }
          }
          // code block
          break;
        default:
        // code block
      }
    },

    checkBankErrorExistOrnot() {

      console.log("this.acntDetailsObj.", this.acntDetailsObj)

      if (this.acntDetailsObj.nickName == '' || this.acntDetailsObj.accountNumber == '' || this.acntDetailsObj.confirmaccountnumber == '' || this.acntDetailsObj.ifsc == '') {
        this.isBankDetailsValid = false
      } else if (this.errorListForBank.nickName || this.errorListForBank.accountNumber || this.errorListForBank.confirmaccountnumber || this.errorListForBank.ifsc) {
        this.isBankDetailsValid = false
      } else {
        this.isBankDetailsValid = true
      }
    },

    checkUpiErrorExistOrnot() {

      if (this.acntDetailsObj.nickName == '' || this.acntDetailsObj.upiId == '') {
        this.isUpiDetailsValid = false
      } else if (this.errorListForBank.nickName || this.errorListForBank.upiId) {
        this.isUpiDetailsValid = false
      } else {
        this.isUpiDetailsValid = true
      }
    },

    checkBankDetailsErros(bankDetailsErrorObj: any) {
      if (!this.errorListForBank.nickName && !this.errorListForBank.accountNumber && !this.errorListForBank.confirmaccountnumber && !this.errorListForBank.ifsc) {
        return true;
      } else {
        return false
      }
    },

    checkUpiDetailsErros(upiDetailsErrorObj: any) {
      if (!this.errorListForUpi.nickName && !this.errorListForUpi.upiId) {
        return true;
      } else {
        return false
      }
    }
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

input[type="text"]:focus~label,
input[type="email"]:focus~label,
input[type="tel"]:focus~label,
input[type="password"]:focus~label,
input[type="text"]:not(:placeholder-shown)~label,
input[type="email"]:not(:placeholder-shown)~label,
input[type="tel"]:not(:placeholder-shown)~label,
input[type="password"]:not(:placeholder-shown)~label,
textarea:focus~label,
textarea:not(:placeholder-shown)~label,
select:focus~label,
select:not([value=""]):valid~label {
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




    <!-- Modal End -->