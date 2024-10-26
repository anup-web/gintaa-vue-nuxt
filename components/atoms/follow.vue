<template>
 
 <a v-if="followText" @click="followAndUnfollow" class=" cursor-pointer text-center flex items-center justify-center py-1 h-[31px] rounded-sm text-sm px-6 text-white border-firoza bg-firoza border mb-0 hover:bg-firoza hover:text-white transition-all hg-follw" >
                 <span v-show="!loading">{{this.followText}}</span> 
                 <Spinner v-show="loading" /> </a>
               
   
   </template>
   <script lang="ts">
   import { mapState, mapGetters } from 'vuex'
//    import VueToast from 'vue-toast-notification';
//    import 'vue-toast-notification/dist/theme-sugar.css';
   import Vue from 'vue'
   export default Vue.extend({
     middleware: "authenticated",
     name: 'follow',
   //components:{VueToast},
     props: ['identityId'],
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
       followText : null,
       viewloginModal :false,
       isUserFollowed : Boolean,
       apiUrl:'',
       apiMethod:'',
       loading:''
       }
       },
       beforeMount(){
     this.checkTheUserisFollowed(this.identityId)
       },
       mounted(){ 
        console.log("identityId",this.identityId)
        
       },
       methods:{

       async checkTheUserisFollowed(identityId:any){
            try {
                const url = `/users/v1/user/is-user-followed/`+identityId;
                const data = await this.$axios.$get(url);
                console.log("data",data)
                if (data.payload) {
                this.isUserFollowed = true
                this.followText = this.$t('unfollow')
                } else {
                this.isUserFollowed = false
                this.followText = this.$t('follow')
                }
                //this.markAsSoldLoading = false
                } catch (error) {
                
                console.log(error);
                }
        },

        async followAndUnfollow(){

            try {
                // const url = '';
                this.loading = true
                if(this.isUserFollowed){
                    this.apiUrl = `/users/v1/user/unfollow/`+this.identityId
                    const data = await this.$axios.$delete(this.apiUrl);
                    console.log("Data",data)
                    if(data.success){
                    this.isUserFollowed = false
                    this.followText = this.$t('follow')
                    }
                    this.loading = false
                   
                }else{
                    this.apiUrl = `/users/v1/user/follow/`+this.identityId
                    const data = await this.$axios.$post(this.apiUrl);
                    if(data.success){
                    this.isUserFollowed = true
                    this.followText = this.$t('unfollow')
                    }
                    this.loading = false
                }
               
                } catch (error) {
                this.loading = false
                console.log(error);
                }
        
        },
   
    
   
       }
   
   
   })
   
   </script>
   
   
   
   <style>
   .fav-color path{
     fill:#EE2a7b !important;
   }
   </style>
   
   