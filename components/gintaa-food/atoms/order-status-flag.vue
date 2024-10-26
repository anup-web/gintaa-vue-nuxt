<template>
  <section class="footer-trust relative bg-white z-20">
    
    <!-- For INITIATED state -->
    <button 
        v-if="orderStatus === 'INITIATED'"
        type="button" class="border border-[#1e91cf] flex justify-center items-center bg-[#1e91cf] py-0.5 px-2 rounded-full text-[10px] text-[#ffffff]">
        <span>{{orderStatus}}</span>
    </button> 


    <!-- For FAILED state -->
    <button 
        v-if="orderStatus === 'FAILED'"
        type="button" class="border border-[#f44455] flex justify-center items-center bg-[#f44455] py-0.5 px-2 rounded-sm text-[10px] text-[#fff]">
        <span>{{orderStatus}}</span>
    </button> 

    
    <!-- For PLACED state -->
    <button 
        v-if="orderStatus === 'PLACED'"
        type="button" class="border border-[#54b7d3] flex justify-center items-center bg-[#54b7d3] py-0.5 px-2 rounded-sm text-[10px] text-[#25B900]">
        <span>{{orderStatus}}</span>
    </button>


    <!-- For ACCEPTED state -->
    <button 
        v-if="orderStatus === 'ACCEPTED'"
        type="button" class="border border-[#6e81dc] flex justify-center items-center bg-[#6e81dc] py-0.5 px-2 rounded-sm text-[10px] text-[#fff]">
        <!-- <span>{{orderStatus}}</span> -->
        <span>PREPARING</span>
    </button> 


    <!-- For PREPARED state -->
    <button 
        v-if="orderStatus === 'PREPARED'"
        type="button" class="border border-[#ffc700] flex justify-center items-center bg-[#ffc700] py-0.5 px-2 rounded-sm text-[10px] text-[#000]">
        <!-- <span>{{orderStatus}}</span> -->
        <span>PICKED UP</span>
    </button>


    <!-- For DELIVERED state -->
    <button 
        v-if="orderStatus === 'DELIVERED'"
        type="button" class="border border-[#36c703] flex justify-center items-center bg-[#36c703] py-0.5 px-2 rounded-sm text-[10px] text-[#fff]">
        <span>{{orderStatus}}</span>
    </button> 


    <!-- For CANCELED state -->
    <button 
        v-if="orderStatus === 'CANCELED'"
        type="button" class="border border-[#f0361e] flex justify-center items-center bg-[#f0361e] py-0.5 px-2 rounded-sm text-[10px] text-[#ffffff]">
        <span>{{orderStatus}}</span>
    </button>

    
  </section>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'OrderStatusFlag',
  props: ["orderStatus"],
 
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
}</style>
