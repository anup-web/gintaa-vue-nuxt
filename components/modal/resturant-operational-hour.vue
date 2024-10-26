<template>
    <div class="fixed z-50 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">


        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">

            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


            <div
                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                <button @click="cancel()" type="button" class="bg-white rounded-md text-gray-400 absolute right-1 top-1">
                    <span class="sr-only">Close</span>
                    <!-- Heroicon name: outline/x -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div class="w-full flex flex-col px-4 py-4">
                    <div class="flex items-center justify-between">
                        <div class="text-base text-gray-900 pr-2 flex-1">Restaurant operational hours</div>
                        <a :disabled="!isFormValid" :class="!isFormValid ? 'opacity-50' : 'opacity-100 cursor-pointer'"
                            type="button" @click="isFormValid ? addMoreSlot() : false"
                            class="border border-firoza flex justify-center mr-6 items-center bg-transparent
                                                             py-1 px-1 rounded text-firoza font-normal text-sm w-[130px] flex-shrink-0">
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>Add time solts </span>
                        </a>
                    </div>
                    <div class="flex flex-col w-[265px] mt-6">
                        <div class="flex items-center justify-between mb-2">
                            <div class="text-sm text-gray-700 font-normal w-[112px] flex items-center ">Opens
                                at
                            </div>
                            <div class="text-sm text-gray-700 font-normal w-[112px] flex items-center">Closes
                                at
                            </div>
                        </div>
                        <div v-for="(openCloseTime, index) in resOpenCloseTime" :key="index"
                            class="flex items-center justify-between relative mb-3">
                            <div class="text-sm text-gray-700 font-normal ">
                                <div class="relative z-0 order-date-picker">
                                    <client-only>
                                        <vue-timepicker placeholder="Open Time" hide-clear-button
                                            v-model="openCloseTime.openingTime" :hour-range="hourRange" format="HH:00:00"
                                            @change="changeHandler(openCloseTime.openingTime, openCloseTime.closingTime)"
                                            close-on-complete></vue-timepicker>
                                        <!-- <date-picker id="date" v-model="date"  range :hour-range="hourRange"
                                        placeholder="Date" :clearable="true"  @input="onDateTimeChange" /> -->
                                    </client-only>
                                </div>
                            </div>
                            <div class="text-base text-gray-700 font-normal">to</div>
                            <div class="text-sm text-gray-700 font-normal ">
                                <div class="relative z-0 order-date-picker">
                                    <client-only>
                                        <vue-timepicker placeholder="Close Time" hide-clear-button
                                            v-model="openCloseTime.closingTime" :hour-range="hourRange"
                                            :disabled="openCloseTime.openingTime == ''" format="HH:00:00"
                                            @change="changeCloseHandler(openCloseTime.openingTime, openCloseTime.closingTime)"
                                            close-on-complete></vue-timepicker>
                                        <!-- <date-picker id="date" v-model="date"  range 
                                        placeholder="Date" :clearable="true"  @input="onDateTimeChange"  /> -->
                                    </client-only>
                                </div>
                            </div>
                            <div v-if="index !== 0" @click="deleteItem(index)"
                                class="flex justify-center items-center bg-white rounded-sm shadow cursor-pointer w-7 h-7 absolute right-[-40px]">
                                <svg width="18" height="18" viewBox="0 0 24 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                                        fill="#FC2323"></path>
                                </svg>
                            </div>
                            <!-- <div v-model="date" @input="onDateTimeChange" class="flex justify-center items-center bg-white rounded-sm shadow cursor-pointer w-7 h-7 absolute right-[-40px]"><svg width="18" height="18" viewBox="0 0 24 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z" fill="#FC2323"></path></svg></div> -->
                        </div>
                        <!-- <div class="flex items-center justify-between relative mb-3">
                          <div class="text-sm text-gray-700 font-normal border border-gray-400 rounded px-2 py-1 w-[100px] h-8 flex items-center justify-center"> <span>7:30 am</span></div>
                          <div class="text-base text-gray-700 font-normal">to</div>
                          <div class="text-sm text-gray-700 font-normal border border-gray-400 rounded px-2 py-1 w-[100px] h-8 flex items-center justify-center"><span>9:30 pm</span></div>
                          <div class="flex justify-center items-center bg-white rounded-sm shadow cursor-pointer w-7 h-7 absolute right-[-40px]"><svg width="18" height="18" viewBox="0 0 24 28" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z" fill="#FC2323"></path></svg></div>
                      </div> -->
                        <!-- <a :disabled="!isFormValid" :class="!isFormValid ? 'opacity-0' : 'opacity-100 cursor-pointer'" type="button" @click="isFormValid ? addMoreSlot() : false" class="border border-firoza flex justify-center mt-2 items-center bg-transparent
                                     py-1 px-1 rounded text-firoza font-normal text-sm w-[130px]">
                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clip-rule="evenodd" />
                    </svg>
                    <span>Add time solts </span>
                </a> -->


                    </div>

                </div>

                <div class="bg-gray-50 px-4 py-2 flex justify-end mt-10">
                    <a :disabled="!isFormValid" :class="!isFormValid ? 'opacity-50' : 'opacity-100 cursor-pointer'"
                        type="button" @click="isFormValid ? submitTimes() : false" class="border border-green flex justify-center items-center bg-green
                                                          py-2 px-8 rounded text-white font-normal text-base ">
                        <span v-show="!loading">Submit</span>
                        <Spinner v-show="loading" />
                    </a>
                </div>



            </div>
        </div>
    </div>
</template>
   
<script lang="ts">
import Vue from "vue";
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'

export default Vue.extend({
    name: "resturantOperationalHour",
    //  props: ["showmodal", 'preDefineAmount', 'returnUrl'],
    components: {
        VueTimepicker
    },

    mounted() {

    },
    data() {
        return {
            hourRange: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            resOpenCloseTime: [
                {
                    openingTime: "",
                    closingTime: ""
                }],
            authUser: this.$store.state.authUser,
            valiDationMsg: '',
            viewModal: false,
            btnloading: false,
            loading: false,
            isFormValid: false,
        };
    },
    methods: {

        getClosedHourRange(openTime) {
            console.log("----------------------", openTime)

            if (openTime.substring(0, 2) > 9) {
                console.log(openTime.substring(0, 2))
                this.selectedHour = +openTime.substring(0, 2)
            } else {
                console.log(openTime.substring(1, 2))
                this.selectedHour = +openTime.substring(1, 2)
            }

            const index = this.hourRange.indexOf(this.selectedHour);

            console.log("index", index);
            if (index > -1) { // only splice array when item is found
                this.hourRange.splice(index, 1); // 2nd parameter means remove one item only
            }
            console.log("this.hourRange", this.hourRange)

        },


        getHourRange(hourSelected) {

            const hour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
            //   if (hourSelected) {
            this.selectedHour = hourSelected
            //    if (hourSelected.substring(0, 2) > 9) {
            //        console.log(hourSelected.substring(0, 2))
            //        this.selectedHour = hourSelected.substring(0, 2)
            //    } else {
            //        console.log(hourSelected.substring(1, 2))
            //        this.selectedHour = hourSelected.substring(1, 2)
            //    }
            // }

            console.log("hourSelected", hourSelected)
            let hourRageObj: any = []

            for (let i = +this.selectedHour + 1; i < 24; i++) {
                hourRageObj.push(i)
            }
            this.hourRange = hourRageObj
            console.log("this.resOpenCloseTime", this.resOpenCloseTime)
            console.log("hourRageObj", hourRageObj, Math.max(...this.resOpenCloseTime.map(o => +o.openingTime.substring(0, 2))))

        },

        changeHandler(openingTime, closingTime) {
            if (openingTime == closingTime) {
                // console.log("open close time same")
                Vue.$toast.error('Open time  and Closing time can not be same');
                this.isFormValid = false
                return false
            } else {
                // console.log("open close time not same")
            }
            this.checkIfOpenIngOrClosingIsBlank()
            //   this.checkOverLap()
        },

        changeCloseHandler(openingTime, closingTime) {
            console.log(openingTime, closingTime)
            if (openingTime == closingTime) {
                // console.log("open close time same")
                Vue.$toast.error('Open time  and Closing time can not be same');
                this.isFormValid = false
                return false
            } else {
                // console.log("open close time not same")
            }
            // this.checkOverLap()
            this.checkIfOpenIngOrClosingIsBlank()
        },

        checkOverLap() {
            const arr = this.resOpenCloseTime
            const overlapping = (a, b) => {
                const getMinutes = s => {
                    const p = s.split(':').map(Number);
                    console.log("p", p)
                    return p[0] * 60 + p[1];
                };
                return getMinutes(a.closingTime) >= getMinutes(b.openingTime) && getMinutes(b.closingTime) >= getMinutes(a.openingTime);
            };
            const isOverlapping = (arr) => {
                let i, j;
                for (i = 0; i < arr.length - 1; i++) {
                    for (j = i + 1; j < arr.length; j++) {
                        if (overlapping(arr[i], arr[j])) {
                            return true;
                        }
                    };
                };
                return false;
            };

            let isoverlapped = isOverlapping(arr)
            console.log("isoverlapped",isoverlapped);

            return isoverlapped;

           // console.log(isOverlapping(arr));
        },

        setMaxSelectedNumber() {
            let maxSelectedNumber = 0
            let maxOpeningTime = Math.max(...this.resOpenCloseTime.map(o => +o.openingTime.substring(0, 2)))
            let maxClosingTime = Math.max(...this.resOpenCloseTime.map(o => +o.closingTime.substring(0, 2)))

            if (+maxOpeningTime > +maxClosingTime) {
                maxSelectedNumber = maxOpeningTime
            } else {
                maxSelectedNumber = maxClosingTime
            }
            // console.log("maxSelectedNumber",maxSelectedNumber)
            // if(eventData.data?.HH){
            this.getHourRange(maxSelectedNumber)
            // }
        },

        checkIfOpenIngOrClosingIsBlank() {
            let blnkobj = this.resOpenCloseTime.find(o => (o.openingTime == "" || o.closingTime == ""));
            if (blnkobj && blnkobj !== undefined) {
                //console.log("Balnk Obj exists")
                this.isFormValid = false
            } else {
                const isOverlapped = this.checkOverLap()
                if (isOverlapped) {
                    Vue.$toast.error('Selected time can not be overlapped');
                    this.isFormValid = false
                } else {
                    this.isFormValid = true
                }

               // console.log("isOverlapped---------------", isOverlapped)



            }
        },


        checkIstimeOverlap() {

        },

        deleteItem(index) {
            console.log("index", index)
            if (index > -1) { // only splice array when item is found
                this.resOpenCloseTime.splice(index, 1); // 2nd parameter means remove one item only
            }

            this.checkIfOpenIngOrClosingIsBlank()
            // this.setMaxSelectedNumber()
        },

        addMoreSlot() {
            this.resOpenCloseTime.push({
                openingTime: "",
                closingTime: ""
            })

            this.checkIfOpenIngOrClosingIsBlank()
        },

        async submitTimes() {

            {
                let postObj = { rid: this.authUser.uid, workingIntervals: this.resOpenCloseTime }
                this.loading = true
                try {
                    const url = `/flisting/v1/restaurant/working-intervals`
                    const data = await this.$axios.$post(url, postObj);
                    console.log("data", data)
                    if (data.success) {
                        Vue.$toast.success(data?.message);
                        this.$emit("intervaltimeAddSuccessFull", true);
                        this.$emit("addedInterValTime", data?.payload?.workingIntervals ? data?.payload?.workingIntervals : []);
                        // this.cancelDlt()
                        // this.getResBankAcntDet()
                    }
                    this.loading = false
                } catch (error: any) {
                    this.loading = false
                    Vue.$toast.error(error?.response?.data?.message);
                    console.log(error);
                }
            }
            // console.log("this.resOpenCloseTime", this.resOpenCloseTime)
        },


        cancel() {
            this.$emit("closeaddIntevalModal", true);
        },
        isNumber(evt: any) {
            evt = (evt) || window.event
            const charCode = (evt.which) ? evt.which : evt.keyCode
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                evt.preventDefault()
            } else {
                return true
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

input[type="text"]:focus~label,
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
   
   
   
   