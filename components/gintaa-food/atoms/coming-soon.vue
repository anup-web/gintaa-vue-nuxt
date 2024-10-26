<template>
       <section class="mx-auto max-w-[1920px] pb-4 px-4 md:px-8 xl:px-16 2xl:px-16 py-0 sm:pb-4 md:pb-4 lg:pb-10">
                    <div class="w-full">
                         <div class="w-full flex items-center justify-center mt-32">
                              <img src="~/assets/images/food/coming-soon.svg" alt="image" class="max-w-full" />
                         </div>  
                         <div class="w-full flex items-center justify-center text-center text-base font-medium text-gray-700 mt-6">
                            {{ $t('locationVerySoon') }} </div>
                         
                         <div class="w-full flex items-center justify-center text-center text-base text-gray-700 mt-2">
                            {{ $t('locationVerySoonPara') }}</div>
                        
                         </div>
       
    </section>
</template>
  
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
    name: 'ComingSoon',
    data: function () {
        return {
            placedOrders: []
        }
    },
    // props: ["orderStatus"],
    computed: {
        ...mapState({
            authUser: (state) => state.authUser,
        }),
    },
    mounted() {

    },

    methods: {


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
  