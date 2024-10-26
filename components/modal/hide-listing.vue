<template>
  <div
    class="fixed hidden bg-gray-800/[.5] z-50 inset-0 overflow-y-hidden"
    id="hide-modals"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end mt-5 pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="
          inline-block
          bg-white
          rounded-lg
          text-left
          shadow-xl
          transform
          transition-all
          align-middle
          max-w-md
          w-full
          pt-3
        "
      >
        <button
          v-on:click="cancelHide()"
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
        <div class="flex flex-col w-full px-6">
          <h1 class="text-base text-gray-900 font-normal">
            <span v-if="!hidingItemDetails.listingStaus"> {{ $t('hideText') }} </span>
            <span v-if="hidingItemDetails.listingStaus">{{ $t('unHideText') }} </span> {{ $t('listings') }}
          </h1>
        </div>
        <div class="w-full flex justify-center items-center pt-5 px-6">
          <div
            class="
              user-profile
              relative
              bg-white
              cursor-pointer
              rounded-full
              w-32
              h-32
            "
          >
            <img              
              class="rounded-full h-32 w-32"
              :src="hidingItemDetails.offerImgUrl"
              :alt="hidingItemDetails.listingName"
            />
          </div>
        </div>
        <div class="w-full flex justify-center items-center pt-3 px-6">
          <div class="text-base text-gray-900 text-center font-normal">
            {{ hidingItemDetails.listingName }}
          </div>
        </div>
        <div class="w-full flex justify-center items-center pt-3 px-6 mt-1">
          <div
            class="
              rounded-full
              border border-dotted border-gray-600
              w-12
              h-12
              flex
              justify-center
              items-center
            "
          >
            <svg
              v-if="!hidingItemDetails.listingStaus"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_717_647)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.9977 13C19.3682 12.9985 18.7408 13.0703 18.1279 13.2137C17.5902 13.3396 17.0522 13.0057 16.9263 12.4679C16.8004 11.9302 17.1343 11.3922 17.6721 11.2663C18.4355 11.0876 19.2171 10.9983 20.0012 11L20.0023 11L20 12V11L20.0012 11C23.9001 11.0005 26.8957 13.2267 28.8545 15.3161C29.8432 16.3706 30.5979 17.4213 31.1057 18.2075C31.3601 18.6015 31.5542 18.9317 31.686 19.166C31.752 19.2833 31.8025 19.3767 31.8372 19.4425C31.8546 19.4753 31.8681 19.5013 31.8777 19.5198L31.889 19.5421L31.8925 19.5489L31.8936 19.5512L29.858 19.9978C29.7488 19.8093 29.6044 19.5694 29.4256 19.2926C28.9646 18.5787 28.2818 17.6294 27.3955 16.684C25.6045 14.7736 23.1005 13 20 13L19.9977 13ZM29.858 19.9978C29.3406 20.8982 28.7439 21.7511 28.0748 22.5462C27.7193 22.9688 27.7736 23.5996 28.1962 23.9552C28.6187 24.3108 29.2496 24.2565 29.6052 23.8339C30.479 22.7953 31.2421 21.6684 31.8819 20.4714C32.0348 20.1854 32.0395 19.8429 31.8944 19.5528L29.858 19.9978C29.8892 20.0517 29.8326 19.9526 29.858 19.9978ZM13.4531 13.2652C13.8512 12.9612 14.4129 12.9987 14.7671 13.3529L18.5832 17.169C18.5855 17.1713 18.5878 17.1736 18.5901 17.1759L22.824 21.4098C22.8264 21.4122 22.8287 21.4145 22.8311 21.4169L26.6471 25.2329C26.8511 25.4369 26.9571 25.7191 26.9378 26.007C26.9184 26.2949 26.7757 26.5604 26.5462 26.7353C24.6671 28.1677 22.3789 28.9613 20.0163 28.9999L20 29C16.1005 29 13.1045 26.7736 11.1455 24.684C10.1568 23.6294 9.40207 22.5787 8.89434 21.7926C8.63985 21.3985 8.44579 21.0684 8.31397 20.834C8.24802 20.7168 8.19754 20.6233 8.16275 20.5576C8.14536 20.5247 8.13188 20.4988 8.12234 20.4802L8.11099 20.458L8.10754 20.4512L8.10637 20.4488C8.10637 20.4488 8.10557 20.4472 9 20L8.10557 20.4472C7.96026 20.1566 7.96521 19.8135 8.11884 19.5272C9.43015 17.0835 11.2489 14.9484 13.4531 13.2652ZM10.1426 20.0032C10.2516 20.1916 10.3959 20.4311 10.5744 20.7075C11.0354 21.4213 11.7182 22.3706 12.6045 23.3161C14.3939 25.2248 16.8951 26.9969 19.9918 27C21.5373 26.9734 23.0437 26.5524 24.3714 25.7856L22.0497 23.464C21.891 23.5635 21.7251 23.652 21.5531 23.7286C21.0625 23.9472 20.5328 24.0648 19.9957 24.0742C19.4586 24.0837 18.9252 23.9849 18.4271 23.7837C17.929 23.5826 17.4766 23.2831 17.0967 22.9033C16.7169 22.5235 16.4175 22.071 16.2163 21.5729C16.0151 21.0749 15.9163 20.5414 15.9258 20.0043C15.9353 19.4672 16.0528 18.9375 16.2714 18.4469C16.3481 18.2749 16.4365 18.109 16.536 17.9503L13.9871 15.4013C12.4503 16.7014 11.1493 18.2582 10.1426 20.0032ZM18.0279 19.4421C17.9637 19.6346 17.9291 19.836 17.9255 20.0396C17.9207 20.3081 17.9701 20.5749 18.0707 20.8239C18.1713 21.0729 18.321 21.2992 18.511 21.4891C18.7009 21.679 18.9271 21.8287 19.1761 21.9293C19.4252 22.0299 19.6919 22.0793 19.9604 22.0745C20.164 22.071 20.3655 22.0363 20.5579 21.9721L18.0279 19.4421Z"
                  fill="#8CAEC5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L31.7071 30.2929C32.0976 30.6834 32.0976 31.3166 31.7071 31.7071C31.3166 32.0976 30.6834 32.0976 30.2929 31.7071L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289Z"
                  fill="#8CAEC5"
                />
              </g>
              <defs>
                <clipPath id="clip0_717_647">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(8 8)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              v-if="hidingItemDetails.listingStaus"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.1407 20C10.25 20.1889 10.3949 20.4296 10.5744 20.7075C11.0354 21.4213 11.7182 22.3706 12.6045 23.3161C14.3955 25.2264 16.8995 27 20 27C23.1005 27 25.6045 25.2264 27.3955 23.3161C28.2818 22.3706 28.9646 21.4213 29.4256 20.7075C29.6051 20.4296 29.75 20.1889 29.8593 20C29.75 19.8111 29.6051 19.5704 29.4256 19.2925C28.9646 18.5787 28.2818 17.6294 27.3955 16.6839C25.6045 14.7736 23.1005 13 20 13C16.8995 13 14.3955 14.7736 12.6045 16.6839C11.7182 17.6294 11.0354 18.5787 10.5744 19.2925C10.3949 19.5704 10.25 19.8111 10.1407 20ZM31 20C31.8944 19.5528 31.8943 19.5524 31.8941 19.5521L31.8925 19.5489L31.889 19.542L31.8777 19.5198C31.8681 19.5013 31.8546 19.4753 31.8372 19.4424C31.8025 19.3767 31.752 19.2832 31.686 19.166C31.5542 18.9316 31.3601 18.6015 31.1057 18.2075C30.5979 17.4213 29.8432 16.3706 28.8545 15.3161C26.8955 13.2264 23.8995 11 20 11C16.1005 11 13.1045 13.2264 11.1455 15.3161C10.1568 16.3706 9.40207 17.4213 8.89434 18.2075C8.63985 18.6015 8.44579 18.9316 8.31397 19.166C8.24802 19.2832 8.19754 19.3767 8.16275 19.4424C8.14536 19.4753 8.13188 19.5013 8.12234 19.5198L8.11099 19.542L8.10754 19.5489L8.10637 19.5512C8.10619 19.5516 8.10557 19.5528 9 20L8.10557 19.5528C7.96481 19.8343 7.96481 20.1657 8.10557 20.4472L9 20C8.10557 20.4472 8.10539 20.4468 8.10557 20.4472L8.10754 20.4511L8.11099 20.458L8.12234 20.4802C8.13188 20.4987 8.14536 20.5247 8.16275 20.5576C8.19754 20.6233 8.24802 20.7168 8.31397 20.834C8.44579 21.0684 8.63985 21.3985 8.89434 21.7925C9.40207 22.5787 10.1568 23.6294 11.1455 24.6839C13.1045 26.7736 16.1005 29 20 29C23.8995 29 26.8955 26.7736 28.8545 24.6839C29.8432 23.6294 30.5979 22.5787 31.1057 21.7925C31.3601 21.3985 31.5542 21.0684 31.686 20.834C31.752 20.7168 31.8025 20.6233 31.8372 20.5576C31.8546 20.5247 31.8681 20.4987 31.8777 20.4802L31.889 20.458L31.8925 20.4511L31.8936 20.4488C31.8938 20.4484 31.8944 20.4472 31 20ZM31 20L31.8944 20.4472C32.0352 20.1657 32.0348 19.8336 31.8941 19.5521L31 20Z"
                fill="#8CAEC5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18ZM16 20C16 17.7909 17.7909 16 20 16C22.2091 16 24 17.7909 24 20C24 22.2091 22.2091 24 20 24C17.7909 24 16 22.2091 16 20Z"
                fill="#8CAEC5"
              />
            </svg>
          </div>
        </div>
        <div class="w-full flex justify-center items-center pt-1 px-6 mt-3">
          <div class="text-sm text-gray-500 text-center">
           

           <span v-if="!hidingItemDetails.listingStaus">  {{$t('hideListingParaNew')}} </span>
            <span v-if="hidingItemDetails.listingStaus"> {{$t('unhideListingParaNew')}} </span> 
            <!-- <span v-if="!hidingItemDetails.listingStaus">{{ $t('hideText') }} </span> -->
            <!-- <span v-if="hidingItemDetails.listingStaus">{{ $t('unHideText') }} </span>  {{ $t('thisListing') }}
            <span v-if="hidingItemDetails.listingStaus">{{ $t('hideText') }} </span> -->
            <!-- <span v-if="!hidingItemDetails.listingStaus">{{ $t('unHideText') }} </span> {{ $t('itFrom') }} -->
          </div>
        </div>
        <div
          class="
            w-full
            flex
            items-center
            justify-between
            mt-10
            px-6
            bg-gray-50
            py-1
            rounded-br-lg rounded-bl-lg
          "
        >
          <button
            v-on:click="cancelHide()"
            type="submit"
            class="
              flex
              items-center
              justify-center
              text-center
              mr-6
              py-1
              px-3
              h-12
              rounded
              border-0 border-gray-300
              w-30
              text-base
              leading-10
              font-bold
              text-gray-400
              w-full
            "
          >
            <span> {{ $t('cancelBtn') }} </span>
          </button>
          <button  :disabled="loading" :class="[loading ? '' : 'bg-firoza flex justify-center text-white font-bold py-2 px-3 h-12 rounded w-full text-base leading-[34px]']"
            v-on:click="confirm()"
            type="submit"
            class="
              transition-all
              w-full
              flex
              justify-center
              ml-3
              items-center
              border border-red-500
              bg-red-500
              py-2
              px-6
              rounded
              font-normal
              text-base text-white
              
            "
          >     
            <span v-show="!loading">{{ btnTitle }} </span>
            <Spinner v-show="loading" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "hide-listing",
  props: ["hidingItemDetails"],

  mounted() {
      const vm = this
    console.log("showmodal", this.hidingItemDetails);
    if (this.hidingItemDetails.showhidelistingmodal) {
      if (this.hidingItemDetails.listingStaus) {
        this.btnTitle = this.$t('unHideText');
      } else {
        this.btnTitle = this.$t('hideText');
      }
      let modal = document.getElementById("hide-modals")!;
      modal.style.display = "block";
    }
  },
  data() {
    return {
      loading:false,
      product: null,
      btnTitle: "",
      url: "",
    };
  },
  methods: {
    cancelHide() {
      this.closeModal();
    },
    closeModal() {
      let modal = document.getElementById("hide-modals")!;
      modal.style.display = "none";
      this.$parent.$emit("closeModal", "closeModalInListingDetails");
    },
    async confirm() {
     
      try {
        this.loading = true;
        if (!this.hidingItemDetails.listingStaus) {
          //console.log("btnTitle is hide");
          this.url = `/offers/v1/published/offers/hide/${this.hidingItemDetails.offerId}`;
        } else {
          this.url = `/offers/v1/published/offers/unhide/${this.hidingItemDetails.offerId}`;
        }
        const data = await this.$axios.$post(this.url);
        if (data.success) {
        this.closeModal();
        this.$router.push({ path: this.localePath('/my-listings') })
        }
        this.loading = false;
        console.log("data", data);
      } catch (error) {
        this.loading = false;
        console.log("error", error);
      }
    },
  },
});
</script>






