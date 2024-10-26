<template>
  <div class="rejection-reasons">
    
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span class=" sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">

          <div class="bg-white px-4 pt-3 pb-3">
            <div class="sm:flex sm:items-start">
              <div class="flex items-center justify-center h-6 w-6 rounded-full bg-red-100 ">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.1529 0.2929C6.3404 0.1054 6.5948 0 6.86 0H15.14C15.4052 0 15.6596 0.1054 15.8471 0.2929L21.7071 6.1529C21.8946 6.3404 22 6.5948 22 6.86V15.14C22 15.4052 21.8946 15.6596 21.7071 15.8471L15.8471 21.7071C15.6596 21.8946 15.4052 22 15.14 22H6.86C6.5948 22 6.3404 21.8946 6.1529 21.7071L0.2929 15.8471C0.1054 15.6596 0 15.4052 0 15.14V6.86C0 6.5948 0.1054 6.3404 0.2929 6.1529L6.1529 0.2929ZM7.2742 2L2 7.2742V14.7258L7.2742 20H14.7258L20 14.7258V7.2742L14.7258 2H7.2742Z"
                    fill="#FC3939" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M14.7071 7.29287C15.0976 7.68338 15.0976 8.31657 14.7071 8.70707L8.70707 14.7071C8.31657 15.0976 7.68338 15.0976 7.29287 14.7071C6.90237 14.3166 6.90237 13.6834 7.29287 13.2929L13.2929 7.29287C13.6834 6.90237 14.3166 6.90237 14.7071 7.29287Z"
                    fill="#FC3939" />
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M7.29287 7.29287C7.68338 6.90237 8.31657 6.90237 8.70707 7.29287L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L7.29287 8.70707C6.90237 8.31657 6.90237 7.68338 7.29287 7.29287Z"
                    fill="#FC3939" />
                </svg>

              </div>
              <div class="text-left ml-2">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title"> {{ $t('rejectOffer') }}</h3>
                <!-- <div class="mt-2">
                  <p class="text-sm text-gray-500"> {{ $t('rejectOfferPara') }}</p>
                </div> -->
              </div>
            </div>
          </div>
          <div class="w-full px-4 flex text-sm text-gray-900 mb-10">{{ $t('rejectOfferPara') }}</div>
          <div class="w-full px-4 flex text-sm text-gray-900">{{$t('Reasonforcancellation')}}</div>
          
          <div class="w-full px-4 mt-2 mb-4">
            <div class="flex justify-start">
              <div>
                <div v-for="(reason, i) in reasonlist" :key="i">
                  <div class="form-check">
                    <input @change="makeReasonList(reason.categoryName)"
                      class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-firoza checked:border-firoza focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio" name="flexRadioDefault" :id="`flexRadioDefault${i}`">
                      <label class="form-check-label inline-block text-gray-500 text-[13px]" :for="`flexRadioDefault${i}`">
                        {{ reason.categoryName }}
                      </label>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="relative z-0 w-full mb-4 px-4">
            <textarea name="description" placeholder=" " minlength="2" maxlength="3000" v-model="reasons.comment"
              class="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b appearance-none focus:outline-none focus:ring-0 focus:border-firoza border-gray-200 text-sm"></textarea>
            <label for="name" class="absolute duration-300 top-3 -z-1 origin-0 text-gray-500 text-sm">{{$t('typeYourComment')}}</label>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button  :class="disableBtn ? 'opacity-50' : 'opacity-100'" :disabled='disableBtn' @click="sendReasons()" type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            {{ $t('cl_submit') }} </button>
          <button @click="cancelPopup()" type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{{
                $t('cancel')
            }}</button>
        </div>
       
        </div>

        <!-- <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button @click="sendReasons()" type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
            {{ $t('proceedBtn') }} </button>
          <button @click="closePopup('reject')" type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">{{
                $t('cancel')
            }}</button>
        </div> -->
      </div>
    
  </div>
</template>

<script>
import Vue from "vue";
import offerDetailsTipsInfo from '~/components/tips/offerDetailsTipsInfo.vue';
export default Vue.extend({
  name: 'rejectionReasons',
  components: { offerDetailsTipsInfo },
  middleware: 'authenticated',

  data() {
    return {
      disableBtn: true,
      selectedReasons: [],
      reasons: {selectedReason: '', comment:''},
      showAddaddressPopup: false,
      reasonlist: [],
      editOrAddAddressDetails: { mode: 'add', addressDet: {} },
      addressDet: {
        id: '',
        addressLine: '',
        lat: 0,
        lng: 0,
        flatNo: '',
        landmark: '',
        area: '',
        annotation: '',
        zip: '',
        city: '',
        state: '',
        country: '',
        name: '',
        email: '',
        phoneNumber: '',
        default: false
      },
      breadcrumb: [],
      rejectlist: [],
      // breadcrumb: [
      //   {
      //     name: this.$t('myExchanges'),
      //     href: '/my-offers'
      //   }
      // ],
      displayModalTips: false,
      offerId: this.$route.params.offer_id,
      authUser: this.$store.state.authUser,
      queryParams: this.$route.query,
      loading: true,
      showSharePhonePopup: false,
      showShareAddressPopup: false,
      showRejectOfferModal: false,
      showAcceptOfferModal: false,
      showCloseOfferModal: false,
      showViewOtpModal: false,
      showUserRatingPopup: false,
      showPlatformRatingPopup: false,
      showReachargWalletPopup: false,
      returnUrl: '/offers/details/' + this.$route.params.offer_id,
      currentWalletBallance: 0,
      walletDetails: {
        netCount: 0,
        netLien: 0,
        netReward: 0
      },
      showResponseMessage: {
        showPopup: false,
        status: null,
        message: null
        // showPopup: true,
        // status: 'error',
        // message: "This is a test error message"
      },
      apiUrls: this.$config.apiUrls,
      timeOffset: this.$config.timeOffset, // in minutes
      deficitAmount: 0,
      offerData: {
        allStates: [],
        currentState: '',
        currentStetPosition: 0,
        senderUserInfo: {
          id: null,
          name: null,
          imageUrl: null
        },
        dealSentTimeStamp: null,
        receiverUserInfo: {
          id: null,
          name: null,
          imageUrl: null
        },
        leftPanelUserInfo: {
          id: null,
          name: null,
          imageUrl: null
        },
        rightPanelUserInfo: {
          id: null,
          name: null,
          imageUrl: null,
          averageRating: null
        },
        requestedAmount: null,
        requestedOffers: [],
        invoiceUrl: null,
        dealRefId: null,
        dealStatus: {
          dealStatus: null,
          dealStatusDesc: null
        },
        initiatorPaidAmount: null,
        callerIsReceiver: false,
        dealDeliveryMethod: {},
        triggeredByUserId: null,
        initiatorAwb: null,
        dealRatedByReceiver: false,
        dealRatedBySender: false,
        updateCounter: null,
        requestedAmountPaidByInitiatingUser: null,
        offerHistory: [],
        offeredOffers: [],
        leftPanelOffers: [],
        rightPanelOffers: [],
        leftPanelRequestedAmount: null,
        rightPanelRequestedAmount: null,
        receiverLienAmount: null,
        receiverDebitAmount: null,
        initiatorLienAmount: null,
        initiatorDebitAmount: null,
        receiverPaidAmount: false,
        transactionMode: null,
        clickable: true,
        initiatorContact: null,
        initiatorAgreedShareContact: false,
        receiverContact: null,
        receiverAgreedShareContact: false
      },
      closeOfferOtp: null,
      otp: {
        otp: '',
        error: null,
        valid: false
      },
      buttonVisibility: {
        rejectButton: false,
        acceptButton: false,
        reviseButton: false,
        editButton: false,
        closeButton: false,
        payButton: false,
        otpButton: false,
        ratingButton: false,
        reportButton: false,
        chatButton: false,
        trackButton: false,
        sharePhoneNumberButton: false,
        shareAddressButton: false
      },
      ratedUserInfo: {
        id: null,
        imageUrl: null,
        name: null
      },
      ratingProperty: {
        ratingQuestions: [],
        ratingStarValues: [this.$t('terrible'), this.$t('poor'), this.$t('average'), this.$t('average'), this.$t('excellent')],
        hoverStarIndex: -1,
        selectedStarIndex: -1,
        selectedRatingQuestion: {
          questionId: null,
          question: null,
          rating: 0,
          displayOrderIndex: -1,
          predictedAnswers: []
        },
        selectedRatingAnswerIndex: [],
        ratingComment: null
      },

      platformratingProperty: {
        hoverStarIndex: -1,
        selectedStarIndex: -1,
      },

      isFormValid: false,
      platFormRatingObj: {
        ratingFor: "PLATFORM",
        rating: null,
        questionAndAnswers: [
          {
            questionId: "",
            question: "",
            answers: [{}]
          }
        ],
        comment: ""
      },

      answersRegardingQuestions: [],
      platFormratingQuestions: [],
      dealDocumentData: {},
      sharablePhoneNumber: this.$store.state.authUser && this.$store.state.authUser.phoneNumber ? this.$store.state.authUser.phoneNumber : null,

      partnerContactDetails: {
        partnerName: "",
        partnerContact: "",
        contactType: 'mobile'
      }



    }
  },
  mounted() {
    console.log("-----------------------------------------")
    this.getRejectReasons();
  },
  methods: {
    makeReasonList(str) {
      this.reasons.selectedReason = str;
      if(this.reasons.selectedReason)
      this.disableBtn=false;
      // this.selectedReasons.push(str);
    },
    getRejectReasons() {
      this.$axios.$get('/deals/v1/deals/reject/category').then((res) => {
        // console.log("Reject Cate---------------------", res.payload);
        this.reasonlist = res.payload;

      }).catch(res => {
        console.log(res);
      });
    },
    sendReasons() {
      this.$emit('selectedReasonToRejectOffer', this.reasons);
    },
    cancelPopup()
    {
      this.$emit('cancelRejectPopup', false);
    },
  }
});
</script>