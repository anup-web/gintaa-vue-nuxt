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
                                        class="flex items-center justify-center rounded transition duration-500 ease-in-out w-8 h-8 py-3 bg-firoza">
                                        <span class="">1</span>
                                        <svg x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                                            class="w-5 h-5 text-white hidden">
                                            <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div
                                        class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-[11px] sm:text-xs md:text-xs capitalize text-firoza">
                                        {{ $t('restaurantInformation') }}</div>
                                </div>
                                <div class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-200"></div>
                            </li>

                            <li class="relative flex items-center">
                                <div class="flex items-center text-gray-500 relative group">
                                    <div
                                        class="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded hover:border-gray-400">
                                        2
                                    </div>

                                    <div
                                        class="desk absolute top-0 -ml-12 text-center mt-12 w-32 text-[11px] sm:text-xs md:text-xs capitalize text-gray-500">
                                        {{ $t('bankDetails') }}</div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="w-full flex flex-col mt-2">
                    <!-- <div class="text-sm text-gray-700 font-medium mb-4">Restaurant operational Details</div> -->
                    <div class="w-full">
                        <div 
                            class="flex flex-col w-full ">
                            <div class="w-full flex justify-between">
                                <div class="flex flex-col">
                                    <div class="text-base text-gray-900 font-medium">{{ $t('restaurantOperationalHours') }}</div>

                                </div>


                            </div>
                            <div class="flex flex-col mt-4">
                                
                                <div v-if="workingIntervals && workingIntervals.length">
                                    <div v-for="(item, index) in workingIntervals " :key="index"
                                        class="flex items-center justify-between relative mb-4">

                                        <div class="flex items-center justify-between">
                                        <div class="block items-center justify-between mr-4 border-b border-gray-200 pb-1 w-[85px] sm:flex sm:w-[150px] md:flex md:w-[150px]">
                                            <div class="text-sm text-gray-700 font-normal">{{ $t('OpensAt') }}</div>
                                            <div class="text-sm text-gray-700 font-normal">{{ tConvert(item.openingTime) }} </div>  
                                        </div>
                                        <div class="block items-center justify-between ml-4 border-b border-gray-200 pb-1 w-[85px] sm:flex sm:w-[150px] md:flex md:w-[150px]">
                                            <div class="text-sm text-gray-700 font-normal">{{ $t('ClosesAt') }}</div>
                                            <div class="text-sm text-gray-700 font-normal ">{{ tConvert(item.closingTime) }} </div>
                                        </div> 
                                        </div>                                     
                                        
                                        <div class="flex items-center">
                                        <div class="flex justify-center items-center bg-white rounded-sm shadow cursor-pointer w-7 h-7 mr-4">
                                            <svg @click="deleteTImeInterval(item)" width="18" height="18"
                                                viewBox="0 0 24 28" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                                                    fill="#FC2323"></path>
                                            </svg>
                                        </div>
                                        <a @click="editResOperationHour(item)"
                                            class="flex justify-center items-center border border-amber-500 rounded cursor-pointer w-7 h-7"><svg
                                                width="16" height="16" viewBox="0 0 27 27" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M21.5604 2.573C21.8266 2.46273 22.1119 2.40598 22.4001 2.40598C22.6882 2.40598 22.9735 2.46273 23.2397 2.573C23.5059 2.68326 23.7478 2.84488 23.9515 3.04862C24.1553 3.25237 24.3169 3.49424 24.4272 3.76044C24.5374 4.02664 24.5942 4.31196 24.5942 4.60009C24.5942 4.88823 24.5374 5.17355 24.4272 5.43974C24.3169 5.70595 24.1553 5.94782 23.9515 6.15157L9.39416 20.709L8.66592 19.3579C8.33215 18.7387 7.82429 18.2308 7.20508 17.8971L6.42217 17.4751L20.8486 3.04862C21.0523 2.84488 21.2942 2.68326 21.5604 2.573ZM4.81948 19.223L3.71034 23.2898L7.60149 22.2286L6.96886 21.0549C6.63509 20.4357 6.12723 19.9279 5.50803 19.5941L4.81948 19.223ZM22.4001 0.00598145C21.7968 0.00598145 21.1994 0.124811 20.642 0.355687C20.0846 0.586563 19.5782 0.924963 19.1515 1.35157L2.95155 17.5516C2.80388 17.6992 2.69731 17.8829 2.64236 18.0844L0.84236 24.6844C0.729054 25.0998 0.847048 25.5441 1.15155 25.8486C1.45605 26.1531 1.90036 26.2711 2.31582 26.1578L8.91582 24.3578C9.11729 24.3029 9.30094 24.1963 9.44861 24.0486L25.6486 7.84862C26.0752 7.42202 26.4136 6.91557 26.6445 6.35819C26.8754 5.8008 26.9942 5.2034 26.9942 4.60009C26.9942 3.99679 26.8754 3.39939 26.6445 2.842C26.4136 2.28462 26.0752 1.77817 25.6486 1.35157C25.222 0.924963 24.7156 0.586563 24.1582 0.355687C23.6008 0.124811 23.0034 0.00598145 22.4001 0.00598145Z"
                                                    fill="rgb(245 158 11)"></path>
                                            </svg></a>
                                        </div>    
                                    </div>
                                </div>


                            </div>
                        </div>
                        <button @click="addTimeSlots()" type="button" class="border border-firoza flex justify-center items-center bg-transparent
                                                   py-2 px-2 rounded text-firoza font-normal text-xs h-[25px] mb-4">
                            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5">
                                <path fill-rule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <span>{{ $t('addSlotTime') }}</span>
                        </button>
                    </div>

                    <div class="w-full mt-3">
                        <div class="relative z-0 w-full mb-6">
                            <input type="text" name="gstPercent" :disabled="true" v-model="restaurantInfo.gstPercent"
                                placeholder=" " autocomplete="off"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('gstPercentage') }}</label>
                            <!-- <div class="absolute w-full flex items-center justify-between ">
                                <div class="text-xs text-red-400 mt-px relative">Enter a valid GST Percentage</div>
                            </div> -->
                        </div>

                        <div class="relative z-0 w-full mb-6">
                            <input type="number" name="deliveryTime" placeholder=" " @keypress="isNumber($event)"
                                v-model="restaurantInfo.deliveryTime" @input="handleChange" autocomplete="off"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label for="name"
                                class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('estimatedDeliveryTime') }}</label>
                            <div class="absolute w-full flex items-center justify-between ">
                                <div class="text-xs text-red-400 mt-px relative">
                                    {{ resDocValidation.errorResturantEstimateDeliveryTime }}</div>
                            </div>
                        </div>
                        <!-- <div class="relative z-0 w-full mb-6">
                            <input type="number" name="packingCharge" @keypress="isNumber($event)" placeholder=" "
                                v-model="restaurantInfo.packingCharge" @input="handleChange" autocomplete="off"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label for="name"
                                class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">Packing
                                Charges(Rs)</label>
                            <div class="absolute w-full flex items-center justify-between ">
                                <div class="text-xs text-red-400 mt-px relative">{{ resDocValidation.errorResturnatPacking
                                }}
                                </div>
                            </div>
                        </div> -->
                        <div class="relative z-0 w-full mb-6">
                            <input type="number" name="discountPercent" placeholder=" " @keypress="isNumber($event)"
                                v-model="restaurantInfo.discountPercent" @input="handleChange" autocomplete="off"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label for="name"
                                class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('discountPercentage') }}</label>
                            <div class="absolute w-full flex items-center justify-between ">
                                <div class="text-xs text-red-400 mt-px relative">{{ resDocValidation.errorResturnatDiscount
                                }}
                                </div>
                            </div>

                            <!-- <div class="absolute right-0 top-[10px]">
                                <div class="relative flex flex-col items-end group">
                                    <div class="pl-2">
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M2.25 8.5C2.25 5.04822 5.04822 2.25 8.5 2.25C11.9518 2.25 14.75 5.04822 14.75 8.5C14.75 11.9518 11.9518 14.75 8.5 14.75C5.04822 14.75 2.25 11.9518 2.25 8.5ZM8.5 0.25C3.94365 0.25 0.25 3.94365 0.25 8.5C0.25 13.0563 3.94365 16.75 8.5 16.75C13.0563 16.75 16.75 13.0563 16.75 8.5C16.75 3.94365 13.0563 0.25 8.5 0.25ZM7.97437 6.14375C8.11333 6.28472 8.28854 6.35521 8.5 6.35521C8.71146 6.35521 8.88364 6.28472 9.01656 6.14375C9.15552 6.00278 9.225 5.82488 9.225 5.61007C9.225 5.39525 9.15552 5.22072 9.01656 5.08646C8.88364 4.94548 8.71146 4.875 8.5 4.875C8.28854 4.875 8.11333 4.94548 7.97437 5.08646C7.84146 5.22072 7.775 5.39525 7.775 5.61007C7.775 5.82488 7.84146 6.00278 7.97437 6.14375ZM7.775 11.3999C7.775 11.8004 8.09961 12.125 8.50005 12.125C8.90049 12.125 9.2251 11.8004 9.2251 11.3999V7.77505C9.2251 7.37462 8.90049 7.05 8.50005 7.05C8.09961 7.05 7.775 7.37462 7.775 7.77505V11.3999Z"
                                                fill="#379DE2" />
                                        </svg>
                                    </div>
                                    <div
                                        class="absolute top-[-15px] right-[30px] flex flex-col items-center hidden group-hover:flex">
                                        <div
                                            class="relative w-[250px] rounded text-left z-10 p-2 text-xs text-white bg-gray-500 shadow-lg">
                                            This means the more score you have, your products are likely to sell faster.
                                        </div>
                                        <div class="w-3 h-3 -mt-2 rotate-45 bg-gray-500 absolute right-[-6px] top-[26px]">
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <!-- <div class="relative z-0 w-full mb-4">
                            <select placeholder="" id="selectCat" name="categoryname"
                                class="text-gray-600  block w-full mt-0 bg-transparent border-0 border-b appearance-none  focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm p-2 ">

                                <option value="" disabled hidden>Select Category</option>
                                <option v-for="(item, i) in cuisenCategoryList" :key="i" :value="item.value">
                                    {{ item.catName }}
                                </option>
                            </select>
                            <label for="select" class=" absolute  duration-300 top-3 -z-1  origin-0 text-gray-500 text-sm ">
                                Cuisine Type </label>
                            <span class="absolute right-0 top-[15px] -z-50">
                                <svg width="15" height="9" viewBox="0 0 15 9" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.75 1.25L7.5 8L14.25 1.25" stroke="#9EA5AA" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </span>
                        </div> -->


                    </div>

                    <div class="w-full">
                        <div class="relative z-0 w-full mb-6">
                            <input type="number" name="deliveryCharge" placeholder=" " @keypress="isNumber($event)"
                                v-model="restaurantInfo.deliveryCharge" @input="handleChange" autocomplete="off"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label for="name"
                                class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('deliveryCharges') }}</label>
                            <div class="absolute w-full flex items-center justify-between ">
                                <div class="text-xs text-red-400 mt-px relative">
                                    {{ resDocValidation.errorResturnatDeliveryCahrge }}</div>
                            </div>
                        </div>

                        <div class="relative z-0 w-full mb-6">
                            <input type="number" name="minOrderPrice" placeholder=" " @keypress="isNumber($event)"
                                v-model="restaurantInfo.minOrderPrice" @input="handleChange" autocomplete="off"
                                minlength="1" maxlength="300"
                                class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm">
                            <label for="name"
                                class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{ $t('minimumOrderPrice') }}</label>
                            <div class="absolute w-full flex items-center justify-between ">
                                <div class="text-xs text-red-400 mt-px relative">
                                    {{ resDocValidation.errorResturnatMinimumOrderPrice }}</div>
                            </div>
                        </div>



                    </div>
                    <a :disabled="!isFormValidated" :class="!isFormValidated ? 'opacity-50' : 'opacity-100 cursor-pointer'"
                        @click="isFormValidated ? updateResturantdet() : false"
                        class="bg-firoza text-white font-bold py-1 px-3 h-11 rounded w-full text-base flex items-center justify-center mt-4">
                        <!-- <span class="pr-1">Next</span> -->
                        <span v-show="!loading" class="pr-1">{{ $t('next') }}</span>
                        <span class="pr-1">
                            <Spinner v-show="loading" class="w-4" />
                        </span>
                        <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M1.875 15C1.875 14.7513 1.97377 14.5129 2.14959 14.3371C2.3254 14.1612 2.56386 14.0625 2.8125 14.0625H24.9244L19.0238 8.16371C18.8477 7.98768 18.7488 7.74892 18.7488 7.49996C18.7488 7.25101 18.8477 7.01225 19.0238 6.83621C19.1998 6.66018 19.4385 6.56128 19.6875 6.56128C19.9365 6.56128 20.1752 6.66018 20.3512 6.83621L27.8512 14.3362C27.9386 14.4233 28.0078 14.5268 28.0551 14.6407C28.1023 14.7545 28.1267 14.8766 28.1267 15C28.1267 15.1233 28.1023 15.2454 28.0551 15.3593C28.0078 15.4732 27.9386 15.5766 27.8512 15.6637L20.3512 23.1637C20.1752 23.3398 19.9365 23.4386 19.6875 23.4386C19.4385 23.4386 19.1998 23.3398 19.0238 23.1637C18.8477 22.9877 18.7488 22.7489 18.7488 22.5C18.7488 22.251 18.8477 22.0122 19.0238 21.8362L24.9244 15.9375H2.8125C2.56386 15.9375 2.3254 15.8387 2.14959 15.6629C1.97377 15.4871 1.875 15.2486 1.875 15Z"
                                fill="white" />
                        </svg>
                    </a>
                </div>

            </div>

            <!-- Time Interval delete confirm modal start -->
            <div v-if="deleteTimeIntervalModal" class="relative z-50 " aria-labelledby="modal-title" role="dialog"
                aria-modal="true">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div class="fixed inset-0 z-50 overflow-y-auto">
                    <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <div
                            class="inline-block bg-white rounded-lg text-left shadow-xl transform transition-all align-middle max-w-md w-full pt-3">
                            <button @click="cancelDltTimeInterval()" type="button" id="close-btns"
                                class="absolute z-40 top-0 right-0 inline-flex rounded-md border border-transparent px-4 py-2">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                                        fill="black" fill-opacity="0.3"></path>
                                </svg>
                            </button>
                            <div class="flex flex-col w-full px-6">
                                <h1 class="text-base text-gray-900 font-normal">{{ $t('confirmation') }}</h1>
                            </div>
                            <div class="w-full flex justify-center items-center pt-3 px-6 mt-1">
                                <div
                                    class="rounded-full border border-dotted border-red-600 w-12 h-12 flex justify-center items-center">
                                    <svg width="25" height="25" viewBox="0 0 24 28" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                                            fill="#FC2323"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="w-full flex justify-center items-center pt-1 px-6 mt-3">
                                <div class="text-sm text-gray-500 text-center">{{ $t('timeInterval') }} </div>
                            </div>
                            <div class="w-full flex justify-center items-center px-6">
                                <div class="text-sm text-red-600 text-center">{{ $t('permanently') }}</div>
                            </div>
                            <div
                                class="w-full flex items-center justify-between mt-10 px-6 bg-gray-50 py-1 rounded-br-lg rounded-bl-lg">
                                <button @click="cancelDltTimeInterval()" type="submit" class="flex items-center justify-center text-center mr-6 py-1 px-3 h-12 rounded border-0 border-gray-300 w-30 text-base leading-10 font-bold text-gray-400
                                 w-full"> <span> {{ $t('cancel') }}</span>
                                </button>

                                <button type="submit" @click="confirmDeleteTimeInterval()"
                                    class="transition-all w-full flex justify-center ml-3 items-center border border-red-500
                               bg-red-500 py-2 px-6 rounded font-normal text-base text-white hover:bg-firoza hover:border-firoza">
                                    <span v-show="!loading" class="capitalize">{{ $t('yesDelete') }}</span>
                                    <Spinner v-show="loading" />
                                    <svg role="status" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-firoza"
                                        style="display: none;">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- Time Interval delete confirm modal end-->

            <resturantOperationalHour v-if="showaddTimeSlotModal" @closeaddIntevalModal="closeaddIntevalModal"
                @addedInterValTime="addedInterValTime" />

            <editResturantOperationalHour v-if="showEdittimeModal" @closeeditIntevalModal="closeeditIntevalModal"
                :editeditem="editeditem" :workingIntervals="workingIntervals" @editedInterValTime="editedInterValTime" />
        </div>
    </div>
</template>
   
   
   
   
   
   
<script lang="ts">
import Vue from 'vue'
import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
import { mapState } from "vuex";
export default {
    name: 'RestimeselectionStepFive',
    components: {
        Cropper
    },
    data() {
        return {
            cuisenCategoryList: [
                { catName: 'Main Course', value: 'Main Course' },
                { catName: 'Italian', value: 'Italian' },
                { catName: 'Starter', value: 'Starter' }
            ],
            showEdittimeModal: false,
            editeditem: {},
            deletedInterval: {
                rid: '',
                workingIntervals: [
                ]
            },
            loading: false,
            deleteTimeIntervalModal: false,
            workingIntervals: [],
            showaddAddressModal: false,
            showaddTimeSlotModal: false,
            showLoader: true,
            basicFormValid: false,
            basciInfoValidation: {
                errorResturantName: '',
                errorResturnatOwnername: ''
            },
            resDocValidation: {
                errorResturantEstimateDeliveryTime: null,
                errorResturnatPacking: null,
                errorResturnatDiscount: null,
                errorResturnatDeliveryCahrge: null,
                errorResturnatMinimumOrderPrice: null
            },
            restaurantInfo: {
                rid: null,
                photoUrl: null,
                fssaiNumber: null,
                licenseNumber: null,
                minOrderPrice: null,
                gstNumber: null,
                gstPercent: 5,
                deliveryTime: null,
                packingCharge: null,
                discountPercent: null,
                deliveryCharge: null,
                location: null,
                resturantName: null,
                resturnatOwnername: null
            },
            isFormValidated: false,

        }
    },

    computed: {
        ...mapState({
            authUser: (state) => state.authUser,
        }),
    },
    mounted() {
        if (this.authUser && this.authUser.uid) {
            this.restaurantInfo.rid = this.authUser.uid
            this.getRestaurantDetails()
        }
    },
    methods: {

        async updateResturantdet() {
            this.loading = true
            console.log('restaurantInfo:', this.restaurantInfo)




            // return 
            try {
                const url = '/flisting/v1/restaurant'
                const data = await this.$axios.$put(url, this.restaurantInfo);
                console.log('Update Restaurant info:', data)
                if (data.success) {
                    Vue.$toast.success(data?.message);
                    // this.$emit('setCurrentStep', 3);
                    this.$emit('setCurrentStep', 5);
                    // this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant/${data.payload.verificationStatus}`)})

                } else {
                    Vue.$toast.error(data?.message);
                }

                this.loading = false



            } catch (error: any) {

                Vue.$toast.error(error.response.data.message);
                this.loading = false

            }
        },


        deleteTImeInterval(item) {
            console.log("item", item)
            if (this.deletedInterval.workingIntervals.length) {
                this.deletedInterval.workingIntervals = []
            }
            this.deletedInterval.rid = this.authUser?.uid
            this.deletedInterval.workingIntervals.push(item.id)
            this.deleteTimeIntervalModal = true

            console.log("this.deletedInterval", this.deletedInterval)
        },

        async confirmDeleteTimeInterval() {
            console.log("this.deletedInterval", this.deletedInterval)
            let postObj = this.deletedInterval
            console.log("postObj", postObj)
            //let params = {this.deletedInterval}
            this.loading = true
            try {
                const url = `/flisting/v1/restaurant/working-intervals`
                const data = await this.$axios.$delete(url, { data: postObj });
                if (data.success) {
                    Vue.$toast.success(data?.message);
                    // this.cancelDlt()
                    this.setTimeInterval()
                    this.deleteTimeIntervalModal = false
                    this.deletedInterval.workingIntervals = []
                }
                this.loading = false
            } catch (error: any) {
                this.deletedInterval.workingIntervals = []
                this.loading = false
                Vue.$toast.error(error?.response?.data?.message);
                console.log(error);
            }
        },

        async setTimeInterval(){
            try {
                const url = `/flisting/v1/restaurant/${this.restaurantInfo.rid}`
                const data = await this.$axios.$get(url);
                if (data && data.payload) {
                    const restaurantData = data.payload

                    if (restaurantData.workingIntervals !== null) {
                        this.workingIntervals = restaurantData.workingIntervals ? restaurantData.workingIntervals : []
                    } else if (restaurantData.workingIntervals == null) {
                        this.workingIntervals = []
                    }

                    this.checkIfFormValidated()



                }

                this.showLoader = false


            } catch (error) {
                this.showLoader = false
                console.log(error);

            }
        },


        tConvert(time) {
            // Check correct time format and split into components
            time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

            if (time.length > 1) { // If time format correct
                time = time.slice(1);  // Remove full string match value
                time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
                time[0] = +time[0] % 12 || 12; // Adjust hours
            }
            return time.join(''); // return adjusted time or original string
        },

        async getRestaurantDetails() {
            try {
                const url = `/flisting/v1/restaurant/${this.restaurantInfo.rid}`
                const data = await this.$axios.$get(url);
                if (data && data.payload) {
                    const restaurantData = data.payload



                    this.restaurantInfo.fssaiNumber = restaurantData.fssaiNumber
                    this.restaurantInfo.gstNumber = restaurantData.gstNumber
                    this.restaurantInfo.gstPercent = 5
                    this.restaurantInfo.minOrderPrice = restaurantData.minOrderPrice
                    this.restaurantInfo.location = restaurantData.location
                    this.restaurantInfo.licenseNumber = restaurantData.licenseNumber
                    this.restaurantInfo.deliveryTime = restaurantData.deliveryTime
                    this.restaurantInfo.discountPercent = restaurantData.discountPercent
                    this.restaurantInfo.deliveryCharge = restaurantData.deliveryCharge

                    console.log("restaurantData.workingIntervals", restaurantData.workingIntervals)

                    if (restaurantData.workingIntervals !== null) {
                        this.workingIntervals = restaurantData.workingIntervals ? restaurantData.workingIntervals : []
                    } else if (restaurantData.workingIntervals == null) {
                        this.workingIntervals = []
                    }

                    this.checkIfFormValidated()



                }

                this.showLoader = false


            } catch (error) {
                this.showLoader = false
                console.log(error);

            }
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
        handleChange(evt) {
            let fieldName = evt.target.name;
            console.log("keyName", fieldName)

            switch (fieldName) {

                case 'minOrderPrice':


                    if (!this.restaurantInfo.minOrderPrice) {
                        this.resDocValidation.errorResturnatMinimumOrderPrice = "Minimum order price is required"
                    } else if (this.restaurantInfo.minOrderPrice.length > 5) {
                        this.resDocValidation.errorResturnatMinimumOrderPrice = "Minimum order price shuld withing 0 to 99999"
                    } else {
                        this.resDocValidation.errorResturnatMinimumOrderPrice = null
                    }
                    this.checkIfFormValidated()

                    break;
                case 'deliveryTime':


                    if (!this.restaurantInfo.deliveryTime) {
                        this.resDocValidation.errorResturantEstimateDeliveryTime = "Estimate Delivery Time is required"
                    } else if (this.restaurantInfo.deliveryTime > 120) {
                        this.resDocValidation.errorResturantEstimateDeliveryTime = "Estimate Delivery Time should not be more than 120 minutes"
                    } else {
                        this.resDocValidation.errorResturantEstimateDeliveryTime = null

                    }
                    this.checkIfFormValidated()
                    break;
                case 'discountPercent':


                    if (!this.restaurantInfo.discountPercent) {

                        this.resDocValidation.errorResturnatDiscount = "Discount Percent is required"
                    } else if (this.restaurantInfo.discountPercent > 100) {
                        this.resDocValidation.errorResturnatDiscount = "Discount Percent should not be more than 100"
                    } else {
                        this.resDocValidation.errorResturnatDiscount = null

                    }
                    this.checkIfFormValidated()

                    break;
                case 'deliveryCharge':


                    if (!this.restaurantInfo.deliveryCharge) {
                        this.resDocValidation.errorResturnatDeliveryCahrge = "Delivery Charge is required"
                        this.restaurantInfo.deliveryCharge = null
                    } else if (this.restaurantInfo.deliveryCharge >= 1000) {
                        this.resDocValidation.errorResturnatDeliveryCahrge = "Delivery Charge should not be more than 999"
                    } else {
                        this.resDocValidation.errorResturnatDeliveryCahrge = null

                    }
                    this.checkIfFormValidated()

                    break;
                // case 'packingCharge':

                //     console.log("this.restaurantInfo.packingCharge", this.restaurantInfo.packingCharge)


                //     if (!this.restaurantInfo.packingCharge) {
                //         this.resDocValidation.errorResturnatPacking = "Packaging Charge is required"
                //     } else if (this.restaurantInfo.packingCharge >= 1000) {
                //         this.resDocValidation.errorResturnatPacking = "Packaging Charge should not be more than 999"
                //     } else {
                //         this.resDocValidation.errorResturnatPacking = null

                //     }
                //     this.checkIfFormValidated()

                //     break;
                default:
                // text = "Looking forward to the Weekend";
            }

        },

        checkIfFormValidated() {

           // console.log("this.restaurantInfo",this.restaurantInfo)

          //  console.log("this.restaurantInfo.deliveryCharge", this.restaurantInfo.deliveryCharge, this.restaurantInfo.discountPercent, this.restaurantInfo.deliveryTime, this.restaurantInfo.minOrderPrice)



            if (this.restaurantInfo.deliveryCharge !== null && this.restaurantInfo.discountPercent !== null && this.restaurantInfo.deliveryTime && this.restaurantInfo.minOrderPrice && this.workingIntervals.length > 0) {
                console.log("Every thing Fine")

                if (this.resDocValidation.errorResturantEstimateDeliveryTime || this.resDocValidation.errorResturnatDiscount || this.resDocValidation.errorResturnatDeliveryCahrge || this.resDocValidation.errorResturnatMinimumOrderPrice) {
                    this.isFormValidated = false
                } else {
                    this.isFormValidated = true
                }

            } else {
                console.log("Every thing not Fine")
                this.isFormValidated = false
            }

        },


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
            this.checkIfFormValidated()
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
 
   input[type="text"]:focus ~ label, input[type="email"]:focus ~ label, input[type="number"]:focus ~ label,
   input[type="text"]:not(:placeholder-shown) ~ label, input[type="email"]:not(:placeholder-shown) ~ label,
   input[type="number"]:not(:placeholder-shown) ~ label,
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
 
   input[type="text"]:focus ~ label, input[type="email"]:focus ~ label, input[type="number"]:focus ~ label,
   select:focus ~ label ,textarea:focus ~ label{
     /* @apply text-black; left-0; */
     --tw-text-opacity: 1;
     color: rgba(72, 206, 243, var(--tw-text-opacity));
     left: 0px;
   }
 
   input[type="text"]:not(:placeholder-shown) ~ label, textarea:not(:placeholder-shown) ~ label, input[type="number"]:not(:placeholder-shown) ~ label, select:not([value='']):valid ~ label{
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
input[type="email"]:focus~label,
select:focus~label {
    /* @apply text-black; left-0; */
    --tw-text-opacity: 1;
    color: rgba(72, 206, 243, var(--tw-text-opacity));
    left: 0px;
}</style>
   