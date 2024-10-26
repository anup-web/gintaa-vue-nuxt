<template>
  <div v-if="listing" class="relative w-full recentcardtop">
    <div class="w-full relative flex">
      <div class="img-content mr-5">
        <a
          :href="localePath(listLink)"
          target="_blank"
          class="product-img relative flex mb-3 md:mb-3.5 h-[120px] lg:h-[190px] 2xl:h-[210px]
            justify-center w-full items-center overflow-hidden">
          <img v-if="imageUrl" :src="imageUrl" :alt="listing.name" class="bg-gray-300 object-cover
              max-h-[100%] max-w-[100%] transition duration-200 ease-in group-hover:rounded-b-none
              hover:rounded-none" />
          <img v-else src="~/assets/images/uplaod-default-img.png" :alt="listing.name"
            class="bg-gray-300 object-cover max-h-[100%] max-w-[100%] transition duration-200
              ease-in group-hover:rounded-b-none hover:rounded-none"/>
        </a>
      </div>

      <div>
        <div class="product-title w-full overflow-hidden">
          <h2 class="text-heading font-semibold truncate mb-3 text-sm text-gray-600">
            {{ listing.name }}
          </h2>

          <div class=" mb-3">
            <div class="flex items-center mb-3">
              <div class="text-gray-500 text-sm font-normal flex item-center">
                <span> {{ $t("valueText") }} : </span>
                <span class="flex items-center mr-1 ml-1 font-medium">
                  <img src="~/assets/images/coin.svg" alt="coin" class="mr-1 w-[18px] ionm-pot" />                 
                  {{ listing.unitOfferValuation }}
                </span>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-xs text-gray-400 bottom-0 overflow-hidden truncate flex items-center
                  relative pl-[25px] w-full">
                <svg width="13" height="17" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="absolute left-0 top:0">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5547 23.8321C10.2188 24.056 9.78066 24.0556 9.44476 23.8317L9.4419 23.8298L9.43524 23.8253L9.41232 23.8098C9.39285 23.7966 9.36508 23.7776 9.32956 23.753C9.25853 23.7038 9.15646 23.6321 9.02779 23.5392C8.77055 23.3534 8.40636 23.0822 7.97082 22.7354C7.10133 22.043 5.93939 21.0428 4.77405 19.8127C2.48426 17.3958 0 13.9019 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 13.9019 17.5157 17.3958 15.226 19.8127C14.0606 21.0428 12.8987 22.043 12.0292 22.7354C11.5936 23.0822 11.2295 23.3534 10.9722 23.5392C10.8435 23.6321 10.7415 23.7038 10.6704 23.753C10.6349 23.7776 10.6072 23.7966 10.5877 23.8098L10.5648 23.8253L10.5581 23.8298L10.556 23.8312L10.5547 23.8321ZM4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315Z"
                    fill="#5f5f5f" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10Z"
                    fill="#5f5f5f" />
                </svg>

                {{ getCityName(listing.location) }}
              </div>
            </div>
          </div>

        

          <!-- <listingUserDetails :listing="listing" v-if="!type && listing.user" /> -->
        </div>
      </div>
    </div>
    <!-- <div v-if="isDraft" class="absolute cursor-pointer right-0 rounded-[4px] top-1 bg-white shadow px-1.5 py-1.5 text-xs" @click="deleteDraft(listing)">
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83431 1.83431C5.98434 1.68429 6.18783 1.6 6.4 1.6H9.6C9.81217 1.6 10.0157 1.68429 10.1657 1.83431C10.3157 1.98434 10.4 2.18783 10.4 2.4V3.2H5.6V2.4C5.6 2.18783 5.68429 1.98434 5.83431 1.83431ZM4 3.2V2.4C4 1.76348 4.25286 1.15303 4.70294 0.702944C5.15303 0.252856 5.76348 0 6.4 0H9.6C10.2365 0 10.847 0.252856 11.2971 0.702944C11.7471 1.15303 12 1.76348 12 2.4V3.2H13.6H15.2C15.6418 3.2 16 3.55817 16 4C16 4.44183 15.6418 4.8 15.2 4.8H14.4V15.2C14.4 15.8365 14.1471 16.447 13.6971 16.8971C13.247 17.3471 12.6365 17.6 12 17.6H4C3.36348 17.6 2.75303 17.3471 2.30294 16.8971C1.85286 16.447 1.6 15.8365 1.6 15.2V4.8H0.8C0.358172 4.8 0 4.44183 0 4C0 3.55817 0.358172 3.2 0.8 3.2H2.4H4ZM3.2 4.8V15.2C3.2 15.4122 3.28429 15.6157 3.43431 15.7657C3.58434 15.9157 3.78783 16 4 16H12C12.2122 16 12.4157 15.9157 12.5657 15.7657C12.7157 15.6157 12.8 15.4122 12.8 15.2V4.8H11.2H4.8H3.2Z" fill="#FC2323" />
      </svg>
    </div> -->

    <!-- <favourite  v-if="listingItemSatus.offerId" :listingItemSatus = "listingItemSatus" @saveListingStatus="saveListingStatus"/> -->
  </div>
</template>
<script>
import Vue from "vue";
import favourite from "../atoms/favourite.vue";
export default Vue.extend({
  components: { favourite },
  name: "myPotentialListingCard",
  props: ["listing","type", "isMyListing"],

  data() {
    return {
      //listing: null,
      loading : false,
      listingItemSatus: {
        offerId: "",
        favourite: Boolean,
      },
      listingItem: {},
    };
  },

  computed: {
    listLink() {
      return this.isDraftListing()
        ? `/listing/item?id=${this.listing?.draftOfferId}`
       // : `/p/${this.listing?.seOId || this.slugify(this.listing.name)}/${
          : `/p/${this.slugify(this.listing?.seOId) || this.$createSlugUrl(this.listing)}/${
            this.listing?.offerId || this.listing?.oid
          }`;
    },

    imageUrl() {
      if (this.listing.image) {
         if(this.listing.image.thumbnails){
          return this.listing.image.thumbnails['200x200']
        }else{
        return this.listing.image.url
        }
      } else if (this.listing.images && this.listing.images.length > 0) {
        return (
          this.listing.images.filter((image) => image.cover === true)[0]?.url ||
          this.listing.images[0].url
        );
        // return this.listing.images[0].url
      }

      return null;
    },
    isDraft() {
      return this.isDraftListing();
    },
  },

  mounted() {
   // console.log("listing", this.listing, this.$route.query?.id);
    // if (this.$route.query?.id) {
    //   this.fetchData(this.$route.query?.id);
    // }
  },

  methods: {
    async fetchData(offerId) {
      this.loading = true
      const data = await this.$axios.get(
        `${this.$config.API_BASE}/offers/v1/offers/oid/${offerId}`
      );
      console.log(data);
      if (data && data.data.payload) {
        this.listing = data.data.payload;
        this.loading = false
        //this.loading = false
        //this.showListDetails = true
      } else {
        //this.loading = false
      }
    },
    isDraftListing() {
      return !this.listing.offerId && !this.listing.oid;
    },
    deleteDraft(listing) {
      this.$store.dispatch("dialogs/confirm/show", listing);
    },
    slugify(text) {
      if(text){
      return text
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .normalize("NFD") // The normalize() method returns the Unicode Normalization Form of a given string.
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-"); // Replace multiple - with single -
      }
      
    },

    getCityName(location) {
      // console.log("location",location);
      if (location && location.city) {
        return location.city;
      } else {
        return null;
      }
    },
    removeFromFav(status) {
      console.log("status", status);
      if (status) {
        this.$emit("removeFromFav", true);
      }
    },
  },
});
</script>

<style>
.fav-color path {
  fill: #ee2a7b !important;
}

.recentcardtop:nth-child(5n + 0) .group {
  border-right: 0 !important;
}
@media only screen and (max-width: 767px) {
  .recentcardtop:nth-child(5n + 0) .group {
    border-right: 1px solid rgb(229 231 235) !important;
  }
}
</style>

