
    <template>
  <div
    class="fixed  bg-gray-800/[.5] z-40 inset-0 overflow-y-hidden"
    id="list-success-modals"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end mt-24 pt-4 px-4 pb-20 text-center sm:block sm:p-0 "
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
          max-w-2xl
          w-full
          pt-3
          
        "
      >
        <button
          type="button"
          v-on:click="myList()"
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
        
        
    
        <div class="w-full flex justify-center items-center pt-3 pb-3 px-6 mt-1">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="25" cy="25" r="25" fill="#DCFCE7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M35.8839 18.6161C36.372 19.1043 36.372 19.8957 35.8839 20.3839L22.1339 34.1339C21.6457 34.622 20.8543 34.622 20.3661 34.1339L14.1161 27.8839C13.628 27.3957 13.628 26.6043 14.1161 26.1161C14.6043 25.628 15.3957 25.628 15.8839 26.1161L21.25 31.4822L34.1161 18.6161C34.6043 18.128 35.3957 18.128 35.8839 18.6161Z" fill="#3BB468"/>
</svg>
        </div>
        <div v-if="coinsCredited > 0" class="text-center">
          <h1  class="text-lg text-gray-900 font-normal">{{$t('cl_Youreonaroll')}}</h1>
        </div>
        <p v-if="!qValuePublished" class="text-sm text-gray-500 text-center">{{$t('cl_Youhavesuccessfullypostedthelist')}}</p>
        <!-- <p v-if="!qValuePublished" class="text-sm text-gray-500 text-center">{{$t('cl_Youhavesuccessfullypostedthelist')}}</p> -->
        <!-- <p v-if="qValuePublished" class="text-sm text-gray-500 text-center">You have successfully updated the list</p> -->
        <div v-if="(coinsCredited == 0 || coinsCredited == '' || coinsCredited == null )" class="text-center">
          <p>{{listName}}</p>
          <p v-if="!qValuePublished">{{$t('cl_better_luck')}}</p>
        </div>
        <p v-if="qValuePublished" class="text-sm text-gray-500 text-center">{{$t('cl_Youhavesuccessfullyupdatedthelist')}}</p>
        <!-- <div class="w-full flex justify-center items-center pt-3 pb-3 px-6 mt-1">
          <div :class="qValuePublished ? 'flex justify-center': 'flex justify-end'" class="flex justify-end"><img class="w-[50%]" src="~/assets/images/list-sucess.png"/></div>
          <div v-if="!qValuePublished && coinsCredited > 0" class="ml-2">{{$t('cl_Youveearned')}} <span class="text-firoza font-bold">{{coinsCredited}} {{$t('cl_gcoins')}}</span> <br><span class="text-sm">{{$t('cl_Forlisting')}} {{listName}}</span></div>
          <div class="ml-2 mt-2 text-center" v-if="coinsCredited == 0 && !qValuePublished">Better luck next time to earn gintaa coins<br><span class="text-sm">List name - {{listName}}</span></div>
        </div> -->

        <div class="w-full flex justify-center items-center pt-3 pb-3 px-6 mt-1">
          <div :class="qValuePublished || (coinsCredited == 0 || coinsCredited == '' || coinsCredited == null ) ? 'flex justify-center': 'flex justify-end'" class="flex justify-end"><img class="w-[50%]" src="~/assets/images/list-sucess.png" alt="list sucess"/></div>
          <div v-if="!qValuePublished && coinsCredited > 0" class="ml-2">{{$t('cl_Youveearned')}} <span class="text-firoza font-bold">{{coinsCredited}} {{$t('cl_gcoins')}}</span> <br><span class="text-sm">{{$t('cl_Forlisting')}} {{listName}}</span></div>
          
          <!-- <div class="ml-2 mt-2 text-center" v-if="(coinsCredited == 0 || coinsCredited == '' || coinsCredited == null )&& !qValuePublished">Better luck next time to earn gintaa coins<br><span class="text-sm">List name - {{listName}}</span></div> -->
        </div>
         
        <p class="text-sm text-gray-500 text-center">{{$t('cl_Gotoyour')}} <a class="text-firoza cursor-pointer" @click="goToWallet()">{{$t('cl_wallet')}}</a> {{$t('cl_checktotalgintaacoinbalance')}} </p>
       
       
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
            rounded-br-lg rounded-bl-lg mb-4
          "
        >
          <button
            v-on:click="myList()"
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
              border border-green
              w-30
              text-base
              leading-10
              font-bold
              text-green
              w-full
            "
          >
            <span>{{$t('cl_ViewMyList')}}</span>
          </button>
          <button
            v-on:click="createList()"
            type="submit"
            class="
              transition-all
              w-full
              flex
              justify-center
              ml-3
              items-center
              border border-firoza
              bg-firoza
              py-2
              px-6
              rounded
              font-normal
              text-base text-white
              hover:bg-firoza hover:border-firoza
            "
          >
            <span>{{$t('cl_AddProduct')}}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: ['listName','coinsCredited','qValuePublished'],
  methods:{
      myList(){
          this.$emit('showList', true);
      },
      createList(){
        this.$router.go();
      },
      goToWallet(){
        this.$router.push('/wallet/my-wallet');
      }
  },
});
</script>


    <!-- Modal End -->
