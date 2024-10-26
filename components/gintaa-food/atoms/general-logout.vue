<template>
    <a @click="logOut()" class="cursor-pointer text-base text-gray-700 font-medium absolute top-[-10px] right-4 sm:top-[-10px] md:top-[-10px] lg:top-[2px]">{{ $t('logout') }}</a>
</template>
  
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
    name: 'GenralLogout',
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
        logOut() {
           
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
  