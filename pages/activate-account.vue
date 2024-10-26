<template>
    <div class="pt-[110px] lg:pt-[90px]">
         <!--//////////header///////////-->
        <!-- <Header /> -->
        <!--////////Breadcrumb//////////-->
        <!-- <div class="container max-w-8xl mx-auto md:px-8 2xl:px-16">
             <breadcumb />
        </div> -->

        <div class="single-product-block pt-6 pb-10">
            <div class="container max-w-8xl mx-auto md:px-8 2xl:px-16">
                  <div class="px-12 py-4 relative">
                       <!-- <div class="w-full flex justify-center items-center">
                             <div class="text-2xl text-green font-medium">{{$t('congratulation')}} !</div>                    
                       </div> -->
                       <div class="w-full flex justify-center items-center py-8">                                                   
                             <img src="~/assets/images/active-account.svg" class="" alt="image">
                       </div>
                       <div class="w-full flex-col flex justify-center items-center">                                                   
                             <div class="text-[22px] text-gray-500 pt-3  text-center"> {{$t('welcome_back_to_gintaa')}} </div>
                             <p class="text-[14px] text-gray-500 pt-4  text-center w-full  lg:w-[40%]"> {{$t('acnt_restore_msg')}} </p>
                       </div>
                       <div  class=" cursor-pointer flex justify-center items-center mt-8">                            
                            <a @click="activeMyaccount()"  class="flex items-center justify-center bg-firoza text-white py-2 px-10 h-10 rounded text-sm md:text-base min-w-[80px] md:min-w-[120px]"><span v-show="!loading">{{$t('reactivate')}} </span>
            <Spinner v-show="loading" /></a>
                       </div>    
                  </div>
            </div>
        </div>
        <Footer /> 


        
        


    </div>
</template>

<script>
import Vue from 'vue'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
export default Vue.extend({
  middleware: "issuspended",
  name: 'activateAccount',
  components:{VueToast},
  data () {
    return {
      acntDeltConfirmation: false,
      loading: false,
      fbloading: false,
      provider: null,
      socialError: null,
      credential: null,
      anonymousUser: null
    }
  },
  created() {
  const token = this.$cookies.get('gintaa_token')
  if (token){
  const isSuspended =   JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
     if(!isSuspended?.suspended){ 
      this.$router.push(this.localePath('/'));
     }
  }else{
      this.$router.push(this.localePath('/'));
  }
    
  },
//     beforeMount() {
//     const token = this.$cookies.get('gintaa_token')
//     const isSuspended =   JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
//      if(!isSuspended?.suspended){ 
//       this.$router.push(this.localePath('/'));
//      }
   
//     },

  methods:{
    async activeMyaccount(){
      this.loading = true
      const requestBody = 'Delete my account'
     try {
            let url = `/users/v1/user/reactivate`;
            const reactiveRes = await this.$axios.$post(url);
             //console.log("deleteRes",deleteRes)
            Vue.$toast.open(reactiveRes.message);
            if(reactiveRes.success){

                  this.logout()
            }
            this.loading = false;
          } catch (error) {
            this.loading = false;
          }

    },
    openDltAcntpopup(){
      this.acntDeltConfirmation = true
    },
    cancelDeletingAcnt(){
    this.acntDeltConfirmation = false
    },
  logout () {
      //this.calluserActivity()
       if (window.localStorage.getItem("setPath") != null) {
           window.localStorage.removeItem("setPath");
      }
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
