    <!-- Modal Start Of Deleting Bank Account And Address -->
    <template>
  <div
    class="fixed hidden bg-gray-800/[.5] z-50 inset-0 overflow-y-hidden"
    id="delete-modals"
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
          type="button"
          v-on:click="cancelDelete()"
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
          <h1 class="text-base text-gray-900 font-normal">{{$t('confirmation') }}</h1>
        </div>
        <div class="w-full flex justify-center items-center pt-5 px-6">
          <div
            class=" user-profile  relative   bg-gray-100  
              rounded-full
              w-32
              h-32
            "
          >
            <img             
              class="rounded-full  w-32 h-32"
              :src="deletedItemDetails.offerImgUrl"
              :alt="deletedItemDetails.listingName"
            />
          </div>
        </div>
        <div class="w-full flex justify-center items-center pt-3 px-6">
          <div class="text-base text-gray-900 text-center font-normal">
            {{ deletedItemDetails.listingName }}
          </div>
        </div>
        <div class="w-full flex justify-center items-center pt-3 px-6 mt-1">
          <div
            class="
              rounded-full
              border border-dotted border-red-600
              w-12
              h-12
              flex
              justify-center
              items-center
            "
          >
            <svg width="25" height="25" viewBox="0 0 24 28" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                fill="#FC2323"
              />
            </svg>
          </div>
        </div>
        <div class="w-full flex justify-center items-center pt-1 px-6 mt-3">
          <div class="text-sm text-gray-500 text-center">
           {{$t('doYouDeleteListing') }}
          </div>
        </div>
        <div class="w-full flex justify-center items-center px-6">
          <div class="text-sm text-red-600 text-center"> {{$t('permanently') }}</div>
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
            v-on:click="cancelDelete()"
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
            <span>{{$t('cancel') }}? </span>
          </button>
          <button  :disabled="loading" :class="[loading ? '' : 'bg-firoza flex justify-center text-white font-bold py-2 px-3 h-12 rounded w-full text-base leading-[34px]']"
            v-on:click="confirmDelete()"
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
            <span  v-show="!loading">{{$t('yesDelete')}} </span>
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
  name: "DeleteListing",
  props: ["deletedItemDetails"],

  mounted() {
    console.log("showmodal", this.deletedItemDetails);
    if (this.deletedItemDetails.showdeletemodal) {
      let modal = document.getElementById("delete-modals")!;
      modal.style.display = "block";
    }
  },
  data() {
    return {
      product: null,
      listingItems: [{}],
      loading:false
    };
  },
  methods: {
    cancelDelete() {
      this.closeModal();
    },
    closeModal() {
      let modal = document.getElementById("delete-modals")!;
      modal.style.display = "none";
      this.$parent.$emit("closeModal", "closeModalInListingReport");
    },
    async confirmDelete() {
      this.logEvent()
      try {
        this.loading = true
        let url = `/offers/v1/offers/${this.deletedItemDetails.offerId}`;
        const data = await this.$axios.$delete(url);
        if(data.success){
            this.closeModal();
             this.$router.push({ path: this.localePath('/my-listings') })
        }
        console.log("data",data)
         this.loading = false
      } catch (error) {
        this.loading = false
        console.log("error", error);
      }
    },

    async logEvent() {
      try {
        const analyticsData = {
          user_id:       this.deletedItemDetails?.user_id,
          channel_id:    'WEB',
          listing_id:    this.deletedItemDetails?.offerId,
          listing_type:  this.deletedItemDetails?.listing_type,
          exchange_mode: this.deletedItemDetails?.exchange_mode,
          category_id:   this.deletedItemDetails?.category_id
        };
        console.log(analyticsData)
        await this.$fire.analytics.logEvent('gintaa_product_listing_delete', analyticsData) 
       // console.log('Gintaa analytics event log successfully');     
      } catch (e) {
        console.log('Gintaa analytics error:', e);
      }
    },

  },
});
</script>


    <!-- Modal End -->