<template>
       <div class="w-full flex flex-col">

         <div v-if="showLoader" class="fixed w-full h-full z-50 top-0 left-0 bg-black opacity-40"></div>
        <div
          class="flex flex-col w-full mt-10 pt-5 px-4 border-t border-slate-200"
        >
          <div v-if="!allBankAccountDetails.length" class="w-full flex items-center">
            <h2 class="text-base text-gray-900 font-medium">Bank accounts</h2>
          </div>

          <div
            v-if="!allBankAccountDetails.length"
            class="w-full flex justify-center items-center mt-5 pt-5"
          >
            <p class="text-sm text-darkcolor">
              Add your bank account or any UPI account to withdraw your money
              from gintaa
            </p>
          </div>

          <div
            v-if="!allBankAccountDetails.length"
            class="w-full flex justify-center items-center pt-5"
          >
            <button
              v-on:click="openBankAcntModal()"
              type="submit"
              id="open-bank-accont"
              class="
                transition-all
                flex
                justify-center
                items-center
                border border-firoza
                bg-firoza
                py-2
                px-6
                rounded
                font-normal
                text-base text-white
                hover:bg-firoza hover:border-firoza
              "
            >
              <span>Add account </span>
            </button>
          </div>

          <div
            v-if="allBankAccountDetails.length"
            class="
              flex flex-col
              w-full
              mt-5
              pt-5
              px-4
              border-t border-slate-200
            "
          >
            <div class="w-full flex items-center justify-between">
              <h2 class="text-base text-gray-900 font-normal">Bank accounts</h2>
              <button
                v-on:click="openBankAcntModal()"
                type="button"
                class="
                  border border-firoza
                  flex
                  justify-center
                  items-center
                  bg-transparent
                  py-2
                  px-4
                  rounded
                  text-firoza
                  font-normal
                  text-base
                "
              >
                <svg
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Add bank account </span>
              </button>
            </div>

            <div class="flex flex-col w-full mt-5">
              <div
                class="
                  grid grid-cols-1
                  gap-y-10
                  sm:grid-cols-2
                  gap-x-6
                  lg:grid-cols-2
                  xl:grid-cols-2 xl:gap-x-8
                "
              >
                <div
                  v-for="item in allBankAccountDetails"
                  :key="item.id"
                  class="
                    flex flex-col
                    w-full
                    bg-white
                    rounded-md
                    shadow
                    relative
                  "
                >
                  <div
                    v-if="item.default"
                    class="w-full flex items-center justify-end mt-3 px-6"
                  >
                    <div class="text-sm text-green">Default account</div>
                  </div>
                  <div class="w-full flex mt-2 px-6">
                    <div
                      v-if="item.bankAccountDetails"
                      class="text-xsb text-gray-600"
                    >
                      Account Number -
                      {{ item.bankAccountDetails.accountNumber }}
                    </div>
                  </div>

                  <div
                    v-if="!item.bankAccountDetails"
                    class="w-full flex mt-2 px-6"
                  >
                    <div class="text-xsb text-gray-600">
                      UPI Id - {{ item.upiId }}
                    </div>
                  </div>
                  <div
                    v-if="item.bankAccountDetails"
                    class="w-full flex mt-2 px-6"
                  >
                    <div class="text-xsb text-gray-600">
                      {{ item.bankAccountDetails.bankName }}
                    </div>
                  </div>
                  <div class="w-full flex mt-2 px-6">
                    <div class="text-xsb text-gray-600">
                      {{ item.nickName }}
                    </div>
                  </div>

                  <div v-if="!item.valid" class="w-full flex mt-2 px-6">
                    <div
                      class="
                        flex
                        justify-center
                        items-center
                        bg-white
                        rounded-sm
                        cursor-pointer
                        w-6
                        h-6
                      "
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M15.3644 25.1369C15.6272 25.0882 15.8899 25.0394 16.1401 24.9785C16.3029 24.9419 16.453 24.8322 16.5406 24.6982C16.6282 24.5518 16.6533 24.3811 16.6157 24.2226C16.5406 23.9423 16.2903 23.7472 15.99 23.7472C15.9399 23.7472 15.8899 23.7594 15.8399 23.7716C15.6022 23.8325 15.377 23.8813 15.1391 23.9179C14.7888 23.9788 14.5636 24.308 14.6262 24.6493C14.6512 24.8077 14.7513 24.954 14.8889 25.0516C15.0016 25.1247 15.1267 25.1613 15.2518 25.1613C15.2893 25.1492 15.3268 25.1492 15.3644 25.1369ZM24.7487 9.52085C24.8112 9.52085 24.8863 9.50864 24.9488 9.48425C25.2867 9.37452 25.4744 9.02096 25.3618 8.69184C25.2742 8.44803 25.1867 8.20425 25.0865 7.96044C24.9864 7.71663 24.7487 7.57034 24.486 7.57034C24.3984 7.57034 24.3233 7.58255 24.2482 7.61914C24.0856 7.68004 23.9605 7.802 23.8979 7.94826C23.8353 8.09455 23.8228 8.27738 23.8979 8.42367C23.9854 8.6431 24.073 8.86255 24.1481 9.08197C24.1857 9.20385 24.2733 9.3136 24.3858 9.39897C24.486 9.48431 24.611 9.52085 24.7487 9.52085ZM19.1933 23.7349C19.3058 23.7349 19.4184 23.7106 19.5186 23.6497C19.7438 23.5156 19.9815 23.3815 20.1942 23.2474C20.3318 23.1499 20.4319 23.0158 20.4695 22.8451C20.507 22.6867 20.4695 22.5159 20.3819 22.3696C20.2567 22.199 20.0566 22.0893 19.8439 22.0893C19.7188 22.0893 19.5936 22.1258 19.4936 22.199C19.2933 22.3331 19.0931 22.455 18.8804 22.5647C18.5676 22.7354 18.4675 23.1255 18.6427 23.418C18.6928 23.5034 18.7553 23.5643 18.8304 23.6131C18.9304 23.6863 19.0555 23.7349 19.1933 23.7349ZM24.9989 13.4584C25.099 13.5315 25.2241 13.5681 25.3494 13.5681H25.3618C25.7122 13.5681 26 13.2877 26 12.9585C26 12.7025 26 12.4466 25.9874 12.1905C25.975 11.8492 25.6872 11.5932 25.3494 11.5932H25.3243C24.9739 11.6053 24.6987 11.898 24.7112 12.2393C24.7237 12.4709 24.7237 12.7025 24.7112 12.9342C24.7237 13.1414 24.8238 13.3365 24.9989 13.4584ZM23.2847 19.4073C23.1721 19.3221 23.0345 19.2855 22.8969 19.2855C22.6967 19.2855 22.509 19.383 22.3839 19.5415C22.2462 19.7244 22.0961 19.9072 21.9335 20.0901C21.7083 20.3583 21.7332 20.7484 22.0085 20.9679C22.021 20.98 22.0335 20.9922 22.0586 21.0044C22.1713 21.0776 22.2963 21.1142 22.434 21.1142C22.6216 21.1142 22.7969 21.0288 22.922 20.8948C23.0971 20.6997 23.2598 20.4925 23.4224 20.2852C23.6226 20.0169 23.5601 19.6147 23.2847 19.4073ZM24.9989 15.6649C24.9364 15.6405 24.8738 15.6405 24.8112 15.6405C24.5235 15.6405 24.2857 15.8112 24.1981 16.0793C24.123 16.2988 24.0479 16.5182 23.9604 16.7376C23.8603 17.0059 23.9479 17.3105 24.1856 17.469C24.2231 17.4934 24.2732 17.5178 24.3233 17.5421C24.3982 17.5665 24.4734 17.5788 24.5485 17.5788C24.8112 17.5788 25.049 17.4203 25.149 17.1764C25.2366 16.9448 25.3242 16.7009 25.4118 16.445C25.5245 16.1281 25.3368 15.7746 24.9989 15.6649ZM22.3714 4.51051C22.4339 4.51051 22.4965 4.474 22.5214 4.43741C22.5464 4.40081 22.5589 4.33986 22.5339 4.27894L21.5956 0.987447L20.6071 2.37717L20.2442 2.14554C18.0921 0.743697 15.6021 0 13.0246 0C12.2738 0 11.523 0.0609823 10.7723 0.195036C10.447 0.256018 10.1091 0.316971 9.78387 0.40228L9.74631 0.414488C6.85597 1.13374 4.37844 2.75507 2.58927 5.0835L2.56427 5.12C2.56427 5.13221 2.55174 5.13221 2.55174 5.14439C2.48914 5.22976 2.42655 5.30286 2.37658 5.3882C2.27646 5.52228 2.1889 5.65643 2.10127 5.79051L2.07624 5.83925C0.599851 8.0579 -0.10089 10.6179 0.0117025 13.2511C0.0117025 13.2633 0.0117025 13.2755 0.0117025 13.2877C0.0241721 13.5315 0.049264 13.7875 0.0742642 14.0435L0.086795 14.0923C0.111826 14.3605 0.149387 14.6165 0.19948 14.8603C0.662382 17.469 1.92618 19.834 3.84059 21.6748L3.85313 21.687C4.36612 22.1746 4.92914 22.6378 5.51723 23.0401C7.08134 24.1128 8.83304 24.8321 10.6974 25.1491C10.735 25.1612 10.7724 25.1612 10.81 25.1612C11.1228 25.1612 11.3856 24.9418 11.4356 24.6493C11.4606 24.4786 11.4231 24.32 11.3355 24.186C11.2355 24.0519 11.0853 23.9543 10.9226 23.9299C9.92159 23.7593 8.95816 23.4545 8.0447 23.04L8.03226 23.0278C8.01973 23.0278 8.01973 23.0157 8.00726 23.0157C7.79458 22.9182 7.58183 22.8206 7.39412 22.7109H7.38159L7.31899 22.6743C6.95615 22.4793 6.60584 22.2599 6.26803 22.0282C3.71544 20.2728 2.01377 17.6518 1.47572 14.6408C0.93769 11.6297 1.63837 8.60647 3.44022 6.11957C4.22853 5.02243 5.20439 4.08378 6.318 3.32791L6.35557 3.30361C8.33251 1.97478 10.6348 1.27994 13.0372 1.27994C15.3519 1.27994 17.5917 1.93827 19.5186 3.19385L19.894 3.43766L18.9055 4.83957L22.3714 4.51051ZM19.8438 17.1887C20.0064 17.1887 20.1566 17.1033 20.2317 16.9571C20.3443 16.7499 20.2567 16.4938 20.044 16.3842L12.7868 12.727V5.01037C12.7868 4.77877 12.5866 4.5837 12.3488 4.5837C12.1111 4.5837 11.911 4.77874 11.911 5.01037V13.239L19.6436 17.14C19.7062 17.1765 19.7687 17.1887 19.8438 17.1887Z"
                          fill="#F29100"
                        />
                      </svg>
                    </div>
                    <div class="text-xsb text-gray-600 ml-3">
                      Verification in progress
                    </div>
                  </div>

                  <div v-if="item.valid" class="w-full flex mt-2 px-6">
                    <div
                      class="
                        flex
                        justify-center
                        items-center
                        bg-white
                        rounded-sm
                        cursor-pointer
                        w-6
                        h-6
                      "
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 13"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071L0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289C0.683417 5.90237 1.31658 5.90237 1.70711 6.29289L6 10.5858L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893Z"
                          fill="#6FBD09"
                        />
                      </svg>
                    </div>
                    <div class="text-xsb text-gray-600 ml-3">Verified</div>
                  </div>

                  <div
                    class="
                      flex
                      w-full
                      mt-2
                      pt-2
                      pb-2
                      px-6
                      border-t border-slate-200
                    "
                  >
                    <div v-if="!item.default" 
                      class="w-full flex items-center justify-between space-x-4"
                    >
                      <div 
                        v-on:click="openModal(item.id)"
                        class="
                          flex
                          justify-center
                          items-center
                          bg-white
                          rounded-sm
                          shadow
                          cursor-pointer
                          w-7
                          h-7
                        "
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 28"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                            fill="#FC2323"
                          />
                        </svg>
                      </div>

                      <div  class="form-check form-switch">
                        <label
                          class="
                            form-check-label
                            inline-block
                            text-gray-500 text-sm
                          "
                          for="flexSwitchCheckDefault"
                          >set as default</label
                        >
                        <input  v-on:click="makeFundAccountDefault(item.id)"
                          class="
                            form-check-input
                            appearance-none
                            w-9
                            -ml-10
                            rounded-full
                            float-left
                            h-5
                            align-top
                            bg-no-repeat bg-contain bg-gray-300
                            focus:outline-none
                            cursor-pointer
                            shadow-sm
                          "
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </div>

                       <div v-if="showLoader" class="bg-white rounded-full shadow w-12 h-12 mx-auto flex items-center justify-center">
                        <div style="border-top-color:transparent"
                            class="w-8 h-8 border-4 border-green border-solid rounded-full animate-spin"></div>

                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div class="flex flex-col w-full mt-5 pb-5">
            <div class="w-full flex items-center mb-4">
              <svg
                width="43"
                height="40"
                viewBox="0 0 55 52"
                fill="none"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="55" height="52" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0"
                      transform="translate(-0.00340424 -0.0974026) scale(0.0110638 0.0116745)"
                    />
                  </pattern>
                  <image
                    id="image0"
                    width="91"
                    height="94"
                    xlink:href="data:image/png;base64,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"
                  />
                </defs>
              </svg>
              <h2 class="text-base text-gray-900 font-normal ml-2 mt-2">
                Tips
              </h2>
            </div>
            <div class="w-full mb-2 pl-4 flex">
              <div class="mr-2 flex justify-start">
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                  <path
                    d="M9 6.15674L0.75 12.2189L0.75 0.0945606L9 6.15674Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </div>
              <div class="tips-list">
                <p class="text-darkcolor text-xs">
                  Add your bank account or any UPI account to withdraw your
                  money from gintaa
                </p>
              </div>
            </div>

            <div class="w-full mb-2 pl-4 flex">
              <div class="mr-2 flex justify-start">
                <svg width="9" height="13" viewBox="0 0 9 13" fill="none">
                  <path
                    d="M9 6.15674L0.75 12.2189L0.75 0.0945606L9 6.15674Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </div>
              <div class="tips-list">
                <p class="text-darkcolor text-xs">
                  Receive money in your default bank account
                </p>
              </div>
            </div>
          </div>
        
      

    <!-- Add Bank Account Modal -->
    <div v-if="showbankAcntmodal" class="container">
      <AddBankAccount ref="modal" />
    </div>
    <!-- Add Bank Account Modal End -->

    <!-- Delete Bank Account Modal -->
    <div
      v-if="showdltbankAcntmodal"
      class="container"
    >
      <DeleteBankAccount ref="modal"  :deletedItemDetails="deletedItemDetails" />
    </div>
    <!-- Add Bank Account Modal End -->
  </div>
</template>

<script lang= "ts">
export default {
  name: "BankAccounts",
  //components: { "add-bank-account": addBankAccount },
  mounted() {
    this.getAllFundAccountDetails();
  },
  data() {
    return {
      showLoader:false,
      showbankAcntmodal: false,
      showdltbankAcntmodal: false,
      allBankAccountDetails: [{}],
      deletedItemDetails: {
        showdltbankAcntmodal: false,
        fundAccountId: "",
      },
    };
  },
  created() {
 this.$on("closeModal",(section:any) => {
      this.showbankAcntmodal=  false;
      this.showdltbankAcntmodal= false;

      console.log(section)
      if(section){
          this.getAllFundAccountDetails();
      }
    })
  },

  methods: {
    openBankAcntModal() {
      console.log("-------------------");
      this.showbankAcntmodal = true;
    },
    async getAllFundAccountDetails() {
      try {
        let url = `/users/v1/user/fund-account/all`;
        const data = await this.$axios.$get(url);
        this.allBankAccountDetails = data.payload;
        console.log("Data",  this.allBankAccountDetails);
        // console.log("===========",this.userDetails.averageRating)
        // if (this.userDetails) {
        //   this.userRating = Math.round(this.userDetails.averageRating);
        // }
        // console.log("this.userDetails",this.userDetails);
      } catch (error) {
        console.log(error);
      }
    },

    openModal(fundAccountId: string) {
        console.log("---",fundAccountId)
      this.showdltbankAcntmodal = true;
      this.deletedItemDetails.showdltbankAcntmodal = true;
      this.deletedItemDetails.fundAccountId = fundAccountId;
    },



async makeFundAccountDefault(fundAccountId:string) {
  this.showLoader = true;
      try {
        let url = `/users/v1/user/fund-account/change/default/${fundAccountId}`;
        const data = await this.$axios.$put(url);
        this.showLoader = false;
        if(data.success){
            this.getAllFundAccountDetails();
        }
      } catch (error) {
         this.showLoader = false;
        console.log(error);
      }
    },

  },
};
</script>
