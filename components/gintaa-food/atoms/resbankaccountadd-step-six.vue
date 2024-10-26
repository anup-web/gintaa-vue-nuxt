<template>
    <div class="basis-full border-0 sm:border-0 sm:basis-full md:border-0 md:basis-full lg:basis-1/2 lg:border-l border-gray-200">
        <div class="w-full pl-0 pr-0 sm:pl-6 sm:pr-6 md:pl-6 md:pr-6 lg:pr-0">
            <div class="w-full bg-white px-0 sm:px-0 md:px-6 py-4 rounded-md relative">
                <GintaaFoodAtomsGeneralLogout/>
                <div class="text-base text-gray-700 font-medium text-center mb-6">{{ $t('completeRestaurantInfo') }}</div>
                <div class="flex flex-col w-full mx-auto relative overflow-x-visible px-8 sm:px-8 md:px-8">
                    <div class="w-full mb-12 relative">
                        <ol role="list" class="flex items-center w-full relative status-offer-mob-desk">
                            <li class="relative flex items-center w-full">
                                <div class="flex items-center text-white relative group">
                                    <div
                                        class="flex items-center justify-center rounded transition duration-500 ease-in-out w-8 h-8 py-3 bg-[#1FBE58]">
                                        <span class="hidden">1</span>
                                        <svg x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                            class="w-5 h-5 text-white">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div
                                        class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-[11px] sm:text-xs md:text-xs capitalize text-gray-500">
                                        {{ $t('restaurantInformation') }}</div>
                                </div>
                                <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-[#1FBE58]">
                                </div>
                            </li>

                            <li class="relative flex items-center">
                                <div class="flex items-center text-white relative group">
                                    <div class="group relative w-8 h-8 flex items-center justify-center rounded bg-firoza">
                                        2
                                    </div>

                                    <div
                                        class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-[11px] sm:text-xs md:text-xs capitalize text-gray-500 text-firoza">
                                        {{ $t('bankDetails') }}</div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="w-full flex flex-col mt-2">
                    <div class="text-sm text-gray-500 font-medium">{{ $t('bankDetails') }}</div>
                    <div class="relative z-0 w-full mb-2 mt-4">

                        <div v-if="failureMessage"
                             class="w-full bg-[#ffe9e9] rounded-lg px-4 py-2 border-l-8 border-[#FF0000] mb-4">
                                                       <ul 
                                                            class=" text-sm text-gray-900">
                                                            <li>{{failureMessage}}</li>

                                                       </ul>
                                                  </div>
                        <div class="flex items-center space-x-6">
                            <div v-for="paymenttype in paymentTypes" :key="paymenttype.id" class="flex items-center">
                                <input v-on:change="chnagePaymentMethod(paymenttype.slug)"
                                    v-bind:checked="paymenttype.checked" name="annotation" type="radio"
                                    :id="paymenttype.name" :value="paymenttype.name"
                                    class="focus:ring-firoza h-4 w-4 text-firoza border-gray-300">
                                <label for="home" class="ml-3 block text-sm font-normal text-gray-500">{{ paymenttype.name
                                }}</label>
                            </div>

                        </div>
                    </div>
                    <div class="w-full mt-3">

                        <div class="relative z-0 w-full mb-6" v-if="paymentTypeBank">
                            <input type="text" name="name" placeholder=" " autocomplete="off"
                                v-on:input="onChangeBankDet(acntDetailsObj.nickName, 'nickName')"
                                v-model="acntDetailsObj.nickName"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label for="name"
                                class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('accountHolderName') }}</label>
                            <div class="absolute w-full flex items-center justify-between ">
                                <div class="text-xs text-red-400 mt-px relative">{{ errorListForBank.nickName }}</div>
                            </div>
                        </div>

                        <div class="relative z-0 w-full mb-6" v-if="paymentTypeBank">
                            <input type="password" name="name" placeholder=" " v-on:input="
                                onChangeBankDet(acntDetailsObj.accountNumber, 'accountNumber')" autocomplete="off"
                                @keypress="isNumber($event)" maxlength="18" v-model="acntDetailsObj.accountNumber"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('enterAccountNumber') }}</label>
                            <div class="absolute w-full flex items-center justify-between ">
                                <div class="text-xs text-red-400 mt-px relative">{{ errorListForBank.accountNumber }}</div>
                            </div>
                        </div>

                        <div class="relative z-0 w-full mb-6" v-if="paymentTypeBank">
                            <input type="password" name="name"
                                v-on:input="onChangeBankDet(acntDetailsObj.confirmaccountNumber, 'confirmaccountNumber')"
                                @keypress="isNumber($event)" v-model="acntDetailsObj.confirmaccountNumber" placeholder=" "
                                maxlength="18" autocomplete="off"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label for="name"
                                class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('confirmAccountNumber') }}</label>
                            <div class="absolute w-full flex items-center justify-between ">
                                <div class="text-xs text-red-400 mt-px relative">{{ errorListForBank.confirmaccountnumber }}
                                </div>
                            </div>
                        </div>
                        <div class="relative z-0 w-full mb-6" v-if="paymentTypeBank">
                            <input v-on:input="onChangeBankDet(acntDetailsObj.ifsc, 'ifsc')" v-model="acntDetailsObj.ifsc"
                                @input="acntDetailsObj.ifsc = $event.target.value.toUpperCase()" type="text" name="name"
                                placeholder=" " autocomplete="off"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('enterIfscCode') }}</label>
                            <div class="absolute w-full flex items-center justify-between ">
                                <div class="text-xs text-red-400 mt-px relative"> {{ errorListForBank.ifsc }}</div>
                            </div>
                        </div>

                        <div class="relative z-0 w-full mb-6" v-if="!paymentTypeBank">
                            <input v-on:input="onChangeUpiDet(acntDetailsObj.nickName, 'upiNickName')"
                                v-model="acntDetailsObj.nickName" autocomplete="off" type="text" name="name" placeholder=" "
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm" />
                            <label for="name"
                                class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('accountHolderName') }}</label>
                            <div class="absolute text-xs text-red-400 mt-px">
                                {{ errorListForUpi.nickName }}
                            </div>
                        </div>



                        <div class="relative z-0 w-full mb-6" v-if="!paymentTypeBank">
                            <input v-on:input="onChangeUpiDet(acntDetailsObj.upiId, 'upiId')" type="email"
                                autocomplete="off" placeholder=" " v-model="acntDetailsObj.upiId" name="name"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('upiId') }}</label>
                            <div class="absolute w-full flex items-center justify-between ">
                                <div class="text-xs text-red-400 mt-px relative">{{ errorListForUpi.upiId }}</div>
                            </div>
                        </div>

                    </div>


                    <div class="w-full flex items-center justify-between mt-6">
                        <a @click="backToPreviuosScreen()"
                            class="cursor-pointer bg-transparent border border-firoza text-firoza font-bold py-1 px-3 h-11 mr-10 w-full rounded text-base flex items-center justify-center">
                            <svg width="20" height="13" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M27.125 8.99996C27.125 8.75132 27.0262 8.51287 26.8504 8.33705C26.6746 8.16124 26.4361 8.06246 26.1875 8.06246H4.07562L9.97625 2.16371C10.1523 1.98768 10.2512 1.74892 10.2512 1.49996C10.2512 1.25101 10.1523 1.01225 9.97625 0.836213C9.80021 0.660176 9.56145 0.561279 9.3125 0.561279C9.06355 0.561279 8.82479 0.660176 8.64875 0.836213L1.14875 8.33621C1.06144 8.4233 0.992177 8.52675 0.944914 8.64065C0.897652 8.75455 0.873325 8.87665 0.873325 8.99996C0.873325 9.12328 0.897652 9.24538 0.944914 9.35928C0.992177 9.47317 1.06144 9.57663 1.14875 9.66371L8.64875 17.1637C8.82479 17.3398 9.06355 17.4386 9.3125 17.4386C9.56145 17.4386 9.80021 17.3398 9.97625 17.1637C10.1523 16.9877 10.2512 16.7489 10.2512 16.5C10.2512 16.251 10.1523 16.0123 9.97625 15.8362L4.07562 9.93746H26.1875C26.4361 9.93746 26.6746 9.83869 26.8504 9.66288C27.0262 9.48706 27.125 9.2486 27.125 8.99996V8.99996Z"
                                    fill="#48CEF3" />
                            </svg>
                            <span class="pl-1">{{ $t('cl_Back') }}</span>
                        </a>

                        <a v-if="selectedPaymentType === 'UPI' && !upiEditMode" :disabled="!isUpiDetailsValid"
                            :class="!isUpiDetailsValid ? 'opacity-50' : 'opacity-100 cursor-pointer'"
                            @click="isUpiDetailsValid ? addUpiDet() : false"
                            class="bg-firoza text-white font-bold py-1 px-3 h-11 ml-10 w-full rounded text-base flex items-center justify-center">
                            <span class="pr-1">{{ $t('submit') }}</span>
                            <span class="pr-1">
                                <Spinner v-show="loading" class="w-4" />
                            </span>
                        </a>

                        <a v-if="selectedPaymentType === 'UPI' && upiEditMode" :disabled="!isUpiDetailsValid"
                            :class="!isUpiDetailsValid ? 'opacity-50' : 'opacity-100 cursor-pointer'"
                            @click="isUpiDetailsValid ? updateUpiDet() : false"
                            class="bg-firoza text-white font-bold py-1 px-3 h-11 ml-10 w-full rounded text-base flex items-center justify-center">
                            <span class="pr-1">{{ $t('cl_update') }}</span>
                            <span class="pr-1">
                                <Spinner v-show="loading" class="w-4" />
                            </span>
                        </a>

                        <a v-if="selectedPaymentType === 'BANK' && !bankEditMode" :disabled="!isBankDetailsValid"
                            :class="!isBankDetailsValid ? 'opacity-50' : 'opacity-100 cursor-pointer'"
                            @click="isBankDetailsValid ? addBankDet() : false"
                            class="bg-firoza text-white font-bold py-1 px-3 h-11 ml-10 w-full rounded text-base flex items-center justify-center">
                            <span class="pr-1">{{ $t('submit') }}</span>
                            <span class="pr-1">
                                <Spinner v-show="loading" class="w-4" />
                            </span>
                        </a>

                        <a v-if="selectedPaymentType === 'BANK' && bankEditMode" :disabled="!isBankDetailsValid"
                            :class="!isBankDetailsValid ? 'opacity-50' : 'opacity-100 cursor-pointer'"
                            @click="isBankDetailsValid ? updateBankDet() : false"
                            class="bg-firoza text-white font-bold py-1 px-3 h-11 ml-10 w-full rounded text-base flex items-center justify-center">
                            <span class="pr-1">{{ $t('cl_update') }}</span>
                            <span class="pr-1">
                                <Spinner v-show="loading" class="w-4" />
                            </span>
                        </a>
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
    name: 'ResbankaccountaddStepSix',
    components: {
        Cropper
    },
    data() {
        return {
            failureMessage:null,
            selectedEditedId: null,
            selectedUpiEditedId: null,
            bankEditMode: false,
            upiEditMode: false,
            loading: false,
            product: null,
            isBankDetailsValid: false,
            isUpiDetailsValid: false,
            isFormValid: false,
            resAccountDet: [],
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

    computed: {
        ...mapState({
            authUser: (state) => state.authUser,
        }),
    },
    mounted() {
        this.chnagePaymentMethod("BANK");
        //    if(this.authUser && this.authUser.uid){
        //      this.restaurantInfo.rid = this.authUser.uid
        //      this.getRestaurantDetails() 
        //    }
        this.getResBankAcntDet()
    },
    methods: {

        async updateUpiDet() {
            console.log("-----------------Upi det added")
            this.paymentPostObject = {
              id : this.selectedUpiEditedId,
              paymentType: "UPI",
              upiId: this.acntDetailsObj.upiId,
              nickName: this.acntDetailsObj.nickName
            };
            this.loading = true;
            try {
      
              let url = `/users/v1/user/fund-account/update`;
              const data = await this.$axios.$put(url, this.paymentPostObject);
              console.log("Data", data)
              if (data.success) {
                if (data && data?.payload?.valid) {
                        Vue.$toast.success(data?.message);
                        this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant/onboard-successful`) })
                    } else {
                        Vue.$toast.error(data?.payload?.failureMessage);
                    }
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
      

        async updateBankDet() {
            //console.log("''''''''''''''''UpdateBank")
            this.paymentPostObject = {
                paymentType: "BANK",
                bankAccountDetails: {
                    accountNumber: this.acntDetailsObj.accountNumber,
                    ifsc: this.acntDetailsObj.ifsc,
                },
                nickName: this.acntDetailsObj.nickName,
                id: this.selectedEditedId,
            };
            this.loading = true;
            try {

                let url = `/users/v1/user/fund-account/update`;
                const data = await this.$axios.$put(url, this.paymentPostObject);
                console.log("Data", data)
                if (data.success) {

                    if (data && data?.payload?.valid) {
                        Vue.$toast.success(data?.message);
                        this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant/onboard-successful`) })
                    } else {
                        Vue.$toast.error(data?.payload?.failureMessage);
                    }
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

        async getResBankAcntDet() {
            try {
                const url = `/users/v1/user/fund-account/all`
                const data = await this.$axios.$get(url);
                if (data && data.payload) {
                    console.log(" data.payload", data.payload)
                    this.resAccountDet = data.payload
                    console.log(" this.resAccountDet", this.resAccountDet[0])
                    if (this.resAccountDet.length) {
                        const bankAccount = this.resAccountDet.filter((obj) => {
                            return (obj.paymentType === 'BANK' && obj.valid === false);
                        });

                        const upiAccount = this.resAccountDet.filter((obj) => {
                            return (obj.paymentType === 'UPI' && obj.valid === false);
                        });
                        console.log("bankAccount", bankAccount)

                        this.acntDetailsObj.nickName = bankAccount[0]?.nickName
                        this.acntDetailsObj.accountNumber = bankAccount[0]?.bankAccountDetails?.accountNumber
                        this.acntDetailsObj.confirmaccountNumber = bankAccount[0]?.bankAccountDetails?.accountNumber
                        this.acntDetailsObj.ifsc = bankAccount[0]?.bankAccountDetails?.ifsc
                        this.acntDetailsObj.upiId = upiAccount[0]?.upiId ? upiAccount[0]?.upiId : ''
                        this.selectedEditedId = bankAccount[0]?.id
                        this.selectedUpiEditedId = upiAccount[0]?.id
                        if (bankAccount.length > 0) {

                            if(!bankAccount[0]?.valid){
                            this.failureMessage = bankAccount[0]?.failureMessage
                            }
                            
                            this.bankEditMode = true
                            this.isBankDetailsValid = true
                        }

                        if (upiAccount.length > 0) {
                            if(!upiAccount[0]?.valid){
                                this.failureMessage = upiAccount[0]?.failureMessage
                            }
                            this.upiEditMode = true
                            this.isUpiDetailsValid = true
                        }

                    }

                }
            } catch (error) {
                // this.showLoader = false
                console.log(error);
            }
        },

        backToPreviuosScreen() {
            this.$emit('setCurrentStep', 4);
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

        async addUpiDet() {
           // console.log("-----------------Upi det added")
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


                    if (data && data?.payload?.valid) {
                        Vue.$toast.success(data?.message);
                        this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant/onboard-successful`) })
                    } else {
                        Vue.$toast.error(data?.payload?.failureMessage);
                        this.getResBankAcntDet()
                    }





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
                    if (data && data?.payload?.valid) {
                        Vue.$toast.success(data?.message);
                        this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant/onboard-successful`) })
                    } else {
                        Vue.$toast.error(data?.payload?.failureMessage);
                        this.getResBankAcntDet()
                    }


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
                            console.log("value.trim()", value.trim())
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

        // handleChange(evt) {
        //      let keyName = evt.target.name;

        // },


        closeeditIntevalModal() {
            this.showEdittimeModal = false
        },

        editedInterValTime(resIntervalLst) {
            this.closeeditIntevalModal()
            this.workingIntervals = resIntervalLst
        },

        editResOperationHour(editeditem) {
            console.log("editeditem", editeditem)
            this.editeditem = editeditem
            this.showEdittimeModal = true
        },

        cancelDltTimeInterval() {
            this.deleteTimeIntervalModal = false
            this.deletedInterval.workingIntervals = []
        },

        closeaddIntevalModal() {
            this.showaddTimeSlotModal = false
        },

        addedInterValTime(workIntervalList) {
            this.workingIntervals = workIntervalList
            this.closeaddIntevalModal()
        },
        addTimeSlots() {
            this.showaddTimeSlotModal = true
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

        addAddress() {
            this.showaddAddressModal = true
        },
        closeMapModal() {
            this.showaddAddressModal = false
        },


        uploadImage(event: any) {

            /// Reference to the DOM input element
            const { files } = event.target;
            // Ensure that you have a file before attempting to read it
            if (files && files[0]) {
                // 1. Revoke the object URL, to allow the garbage collector to destroy the uploaded before file
                if (this.image.src) {
                    URL.revokeObjectURL(this.image.src);
                }
                // 2. Create the blob link to the file to optimize performance:
                const blob = URL.createObjectURL(files[0]);
                console.log('File details', files[0]);
                // 3. Update the image. The type will be derived from the extension and it can lead to an incorrect result:
                this.image = {
                    src: blob,
                    type: files[0].type,
                    name: files[0].name
                };
            }
        },



        processDisplayAddress(location: any) {
            let addressLine: string = ''
            if (location) {
                if (location.addressLine) {
                    addressLine += location.addressLine + ', '
                }
                if (location.area) {
                    addressLine += location.area + ', '
                }
                if (location.city) {
                    addressLine += location.city + ', '
                }
                if (location.landmark) {
                    addressLine += location.landmark + ', '
                }
                if (location.state) {
                    addressLine += location.state + ', '
                }
                if (location.country) {
                    addressLine += location.country + ', '
                }
                if (location.zip) {
                    addressLine += location.zip
                }

                // addressLine = addressLine.trim()
            }
            return addressLine
        },
        savedAddress(location: any) {
            console.log("location:", location)
            if (location) {
                this.restaurantInfo.location = location
                // this.validation.location.valid = true
            }
        },
        handleChange(evt) {
            let keyName = evt.target.name;
            console.log('keyName:', keyName)
            switch (keyName) {
                case 'resturantName':

                    if (evt.target.value) {
                        this.basciInfoValidation.errorResturantName = ""
                    } else {
                        this.basciInfoValidation.errorResturantName = "Resturant Name Required"
                    }
                    this.checkIsBasicInfoValidated()
                    break;
                case 'resturnatOwnername':

                    if (evt.target.value) {
                        this.basciInfoValidation.errorResturnatOwnername = ""
                    } else {
                        this.basciInfoValidation.errorResturnatOwnername = "Resturant Owner Name Required"
                    }
                    this.checkIsBasicInfoValidated()
                    break;
                default:
                // text = "Looking forward to the Weekend";

            }


            // console.log('validation:', this.validation)
        },

        checkIsBasicInfoValidated() {
            console.log("this.restaurantInfo", this.restaurantInfo)
            if (this.restaurantInfo.resturnatOwnername && this.restaurantInfo.resturantName) {
                this.basicFormValid = true
            } else {
                this.basicFormValid = false
            }
        }
    }
}
</script>
   
   
   
<style>
.rating-sec .vue-star-rating .vue-star-rating-star {

    margin-right: 2px !important;

}

.rating-sec .vue-star-rating .vue-star-rating-rating-text {
    font-size: 13px !important;
    color: #007185 !important
}

.-z-1 {
     z-index: -1;
   }
 
   .origin-0 {
     transform-origin: 0%;
   }
 
   input[type="text"]:focus ~ label, input[type="email"]:focus ~ label, input[type="number"]:focus ~ label, input[type="password"]:focus ~ label,
   input[type="text"]:not(:placeholder-shown) ~ label, input[type="email"]:not(:placeholder-shown) ~ label,
   input[type="number"]:not(:placeholder-shown) ~ label, input[type="password"]:not(:placeholder-shown) ~ label,
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
 
   input[type="text"]:focus ~ label, input[type="email"]:focus ~ label, input[type="number"]:focus ~ label, input[type="password"]:focus ~ label,
   select:focus ~ label ,textarea:focus ~ label{
     /* @apply text-black; left-0; */
     --tw-text-opacity: 1;
     color: rgba(72, 206, 243, var(--tw-text-opacity));
     left: 0px;
   }
 
   input[type="text"]:not(:placeholder-shown) ~ label, textarea:not(:placeholder-shown) ~ label, input[type="number"]:not(:placeholder-shown) ~ label, input[type="password"]:not(:placeholder-shown) ~ label, select:not([value='']):valid ~ label{
       color: rgba(72, 206, 243, var(--tw-text-opacity));
   }

.order-date-picker .mx-datepicker-range {
    width: 210px;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    height: 30px;
    padding: 0px 1px 0px 6px;
}

input[type="text"]:focus~label,
input[type="email"]:focus~label, input[type="number"]:focus~label, input[type="password"]:focus~label,
select:focus~label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(72, 206, 243, var(--tw-text-opacity));
    left: 0px;
}
</style>
   