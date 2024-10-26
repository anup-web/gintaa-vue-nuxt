<template>
 
 <div class="absolute right-2 cursor-pointer top-2 rounded-full p-2 bg-white border flex items-center justify-center drop-shadow-sm z-40">
   <svg width="16" height="16" viewBox="0 0 24 24" v-on:click="makeFav(listing)" v-bind:class="{ 'fav-color': listing.favourite}"  fill="none" xmlns="http://www.w3.org/2000/svg"> 
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9501 1.99805C16.0963 1.99805 15.2508 2.16628 14.462 2.49312C13.6732 2.81994 12.9564 3.29911 12.3528 3.90293L12.0001 4.25566L11.6472 3.90277C10.428 2.68354 8.77437 1.99858 7.05012 1.99858C5.32587 1.99858 3.67224 2.68354 2.45301 3.90277C1.23378 5.12199 0.548828 6.77562 0.548828 8.49987C0.548828 10.2241 1.23378 11.8778 2.45301 13.097L11.293 21.937C11.6835 22.3275 12.3167 22.3275 12.7072 21.937L21.5472 13.097C22.1511 12.4934 22.6301 11.7768 22.9569 10.988C23.2837 10.1992 23.4519 9.35372 23.4519 8.49987C23.4519 7.64602 23.2837 6.80054 22.9569 6.01173C22.6301 5.22306 22.1508 4.50615 21.5471 3.9026C20.9435 3.29885 20.2269 2.81991 19.4383 2.49312C18.6495 2.16628 17.804 1.99805 16.9501 1.99805Z" fill="#b3b3b3" />
      </svg>
      <!-- <div>{{listing.favourite}}</div> -->

      
            </div>
            

</template>
<script lang="ts">
import { mapState, mapGetters } from 'vuex'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Vue from 'vue'
export default Vue.extend({
  middleware: "authenticated",
  name: 'Favourite',
  components:{VueToast},
  props: ['listing'],
    computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
    data () {
    return {
    viewloginModal :false
    }
    },
    mounted(){ 
    },
    methods:{

     async makeFav(listing:any){
      if(!this.isLoggedIn){
        this.$router.push({ path: `/login` })
        if (process.client) {
        const currentUrl = window.location.pathname
        console.log("currentUrl",currentUrl)
        window.localStorage.setItem("setPath",`${currentUrl}`);
      }
      return
      }

       const offerId = listing.offerId || listing.oid

        try {
        if(listing?.favourite){
            
        const url = `/offers/v1/offer/favourites/oid/${offerId}`
        const data = await this.$axios.$delete(url)
        if(data.success){
        listing.favourite = !listing.favourite;
        Vue.$toast.open(data.message);
        this.$emit("removeFromFav", true);
        }
        }else{
        const url = `/offers/v1/offer/favourites/oid/${offerId}`
        const data = await this.$axios.$post(url)
        if(data.success){
        Vue.$toast.open(data.message);
        listing.favourite = !listing.favourite;
        }
        }
      } catch (error) {
        console.log(error)
      }
      }

    }


})

</script>



<style>
.fav-color path{
  fill:#EE2a7b !important;
}
</style>

