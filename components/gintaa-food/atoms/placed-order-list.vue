<template>
    <section class="footer-trust relative bg-white z-20">

        <GintaaFoodModalAcceptorderlist v-if="placedOrders && placedOrders.length > 0" :placedOrders="placedOrders"
            @acceptSuccesful="acceptSuccesful" />


    </section>
</template>
  
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
    name: 'PlacedOrderList',
    data: function () {
        return {
            CDN_BASE_URL: this.$config.CDN_BASE_URL,
            placedOrders : [],
            audio : new Audio(`${this.$config.CDN_BASE_URL}/web/web_new/audio/notification/restaurant-getting-new-order-notification-bell.mp3`)
        }},
    // props: ["orderStatus"],
    computed: {
        ...mapState({
            authUser: (state) => state.authUser,
        }),
    },
    mounted() {
        this.readOrderStatusFromRealTimeDb()
        console.log("--------------------placed orderlist calledSSS")
    },

    methods: {

        async readOrderStatusFromRealTimeDb() {
            try {
                // /restaurant_orders/${FirebaseAuth.instance.currentUser?.uid ?? ''}/PLACED
                let rid = this.authUser ? this.authUser?.uid : ''
                const offerRef = await this.$fire.database.ref(`restaurant_orders/${rid}/PLACED`).on("value", (value: any) => {
                    // this.placedOrders = []
                    console.log("real time db called", value)
                    this.getCurrentOrders()
                })
            } catch (e) {
                console.log('restaurant_orders:', e)
                this.getCurrentOrders()
            }
        },

        acceptSuccesful(){
            // if()
            this.stopPlaySound()
            const currentPath = this.$route.path
            console.log("currentPath",currentPath)
            if(currentPath && currentPath !== '/gintaa-food/vendor'){
                this.$router.push({path: '/gintaa-food/vendor'});
            }else{
                if(currentPath && currentPath == '/gintaa-food/vendor'){
                    this.$emit("fetchOrderList", true);
                }
            }
            //  this.$emit("acceptSuccesful", true);
        },

        async getCurrentOrders() {
          
          let rid = this.authUser ? this.authUser?.uid : ''

          try {
              const url = `/forder/v1/order/restaurant/current/${rid}?showAll=true`;
              const data = await this.$axios.$get(url);
              // console.log("Data", data)

              let allCurrentOrders = data.payload

              if (allCurrentOrders && allCurrentOrders.length) {
                  var pOrders = allCurrentOrders.filter(function (el) { return el.orderStatus === "PLACED" });
                  
                  this.placedOrders = pOrders
                  

                  if(this.placedOrders && this.placedOrders.length > 0){
                      this.playSound()
                  }
                  if(this.placedOrders.length === 0 ){
                    this.stopPlaySound()
                    this.$emit("noPlacedorderFound", true);
                  }
                  
              }
            
          } catch (error) {
              this.placedOrders = []
              
          }



      },

    //   playSound(){
    //         try{
    //             console.log('Play sound')
    //             var audio = new Audio(`${this.CDN_BASE_URL}/web/web_new/audio/notification/restaurant-getting-new-order-notification-bell.mp3`);
    //             audio.pause();
    //             audio.currentTime = 0;
    //             audio.play();
    //         } catch(e){
    //             console.log('Play sound err: ', e)
    //         }
    //     },

        playSound(){
            try{
                console.log('Play sound')
                this.audio.pause();
                this.audio.currentTime = 0;
                this.audio.play();
            } catch(e){
                console.log('Play sound err: ', e)
            }
        },
        stopPlaySound(){
            this.audio.pause();
            this.audio.currentTime = 0;
        }

    }

})
</script>
  
  
<style scoped>
iframe {
    display: block;
    background: transparent;
    border: none;
    height: 460px;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.cssanimation {
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
}

.fadeInBottom {
    animation-name: fadeInBottom
}

@keyframes fadeInBottom {
    from {
        opacity: 0;
        transform: translateY(100%);
    }

    to {
        opacity: 1
    }
}

.ccount-blink {
    animation: blink-animation 3s steps(5, start) infinite;
    -webkit-animation: blink-animation 3s steps(5, start) infinite;
}

@keyframes blink-animation {
    to {
        visibility: hidden;
    }
}

@-webkit-keyframes blink-animation {
    to {
        visibility: hidden;
    }
}

.animate-ping {
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {

    75%,
    100% {
        transform: scale(2);
        opacity: 0;
    }
}

@media only screen and (min-device-width: 0px) and (max-device-width: 400px) {
    .chat-window {
        width: 100%;
        right: 0px;
        left: 0px;
    }
}
</style>
  