<template>
<div  class="relative z-50 "  aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            class="inline-block bg-white rounded-lg text-left shadow-xl transform transition-all align-middle max-w-sm w-full pt-3">
            <!-- <button @click="cancelDlt()" type="button" id="close-btns"
              class="absolute z-40 top-0 right-0 inline-flex rounded-md border border-transparent px-4 py-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z"
                  fill="black" fill-opacity="0.3"></path>
              </svg>
            </button> -->
            <!-- <div class="flex flex-col w-full px-6">
              <h1 class="text-base text-gray-900 font-normal">Confirmation</h1>
            </div> -->
            <!-- <div class="w-full flex justify-center items-center pt-3 px-6 mt-1">
              <div class="rounded-full border border-dotted border-red-600 w-12 h-12 flex justify-center items-center">
                <svg width="25" height="25" viewBox="0 0 24 28" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8.75147 3.55152C8.97652 3.32648 9.28174 3.20005 9.6 3.20005H14.4C14.7183 3.20005 15.0235 3.32648 15.2485 3.55152C15.4736 3.77656 15.6 4.08179 15.6 4.40005V5.60005H8.4V4.40005C8.4 4.08179 8.52643 3.77656 8.75147 3.55152ZM6 5.60005V4.40005C6 3.44527 6.37929 2.52959 7.05442 1.85446C7.72955 1.17933 8.64522 0.800049 9.6 0.800049H14.4C15.3548 0.800049 16.2705 1.17933 16.9456 1.85446C17.6207 2.52959 18 3.44527 18 4.40005V5.60005H20.4H22.8C23.4627 5.60005 24 6.13731 24 6.80005C24 7.46279 23.4627 8.00005 22.8 8.00005H21.6V23.6C21.6 24.5548 21.2207 25.4705 20.5456 26.1456C19.8705 26.8208 18.9548 27.2 18 27.2H6C5.04522 27.2 4.12955 26.8208 3.45442 26.1456C2.77928 25.4705 2.4 24.5548 2.4 23.6V8.00005H1.2C0.537258 8.00005 0 7.46279 0 6.80005C0 6.13731 0.537258 5.60005 1.2 5.60005H3.6H6ZM4.8 8.00005V23.6C4.8 23.9183 4.92643 24.2235 5.15147 24.4486C5.37652 24.6736 5.68174 24.8 6 24.8H18C18.3183 24.8 18.6235 24.6736 18.8485 24.4486C19.0736 24.2235 19.2 23.9183 19.2 23.6V8.00005H16.8H7.2H4.8Z"
                    fill="#FC2323"></path>
                </svg>
              </div>
            </div> -->
            <div class="w-full flex justify-center items-center pt-1 px-6 mt-3 py-4">
              <div class="text-base text-gray-700 text-center">{{ $t('loggedOut') }} </div>
            </div>
            <!-- <div class="w-full flex justify-center items-center px-6">
              <div class="text-sm text-red-600 text-center">permanently?</div>
            </div> -->
            <div class="w-full flex items-center justify-between mt-10 px-6 bg-gray-50 py-1 rounded-br-lg rounded-bl-lg">
              <button  type="submit" @click="cancelRegistration" class="flex items-center justify-center text-center mr-6 py-1 px-3 h-12 rounded border-0 border-gray-300 w-30 text-base leading-10 font-bold text-gray-400
                         w-full"> <span>{{ $t('cancel') }} </span>
              </button>

              <button type="submit" @click="processToregistrationPage()"
                class="transition-all w-full flex justify-center ml-3 items-center border border-firoza
                       bg-firoza py-2 px-6 rounded font-normal text-base text-white hover:bg-firoza hover:border-firoza">
                <span >{{ $t('yesButton') }}</span>
                
                <svg role="status" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-firoza" style="display: none;">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"></path>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
    name: 'LogoutConfirmation',
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

        cancelRegistration(){
          this.$emit('cancelLogout', true);
        },

        processToregistrationPage(){
        this.logOut()
        },
        logOut() {
           
            if (window.localStorage.getItem("setPath") != null) {
                window.localStorage.removeItem("setPath");
            }
            window.localStorage.removeItem("setGridActiveClass");
            window.localStorage.removeItem("setListActiveClass");

            this.$fire.auth.signOut()
            this.$router.push({ path: this.localePath(`/gintaa-food/register-restaurant`)})
            // if (this.$route.path === '/' || this.$route.path === '') {
            //     window.location.reload(true)
            // } else {
            //     this.$router.replace({ path: this.localePath('/') })
            // }
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
  