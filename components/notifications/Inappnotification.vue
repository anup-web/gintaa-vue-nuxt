<template>
  <div>
   <div class="max-w-full sm:max-w-full px-4 sm:px-6 md:px-0 md:max-w-[600px] lg:max-w-[800px] 2xl:max-w-[800px] mx-auto">         
     <fullPageLoader v-if="loading" />
     <div class=" pt-4 md:min-h-[550px] mt-0 lg:mt-2 pb-12  ">
         <div class="relative">
           
           <ul v-if="notificationList.length" >
               <!-- <NuxtLink to="/listing-details/pay-now">Payment</NuxtLink> -->
               <li 
                 v-for="(notification, index) in notificationList"
                 :key="index"
                 @click="redirectToDetailsPage(notification, index)"
                 class=" relative mb-2 cursor-pointer">
                   <div class="bg-white shadow px-12 py-3  relative pl-[80px] min-h-[75px]">
                     <img v-if="!notification.imagePath" src="~/assets/images/notification-icon.svg" :alt="notification.title" class="absolute left-3 top-3 w-[50px] h-[50px] rounded-full"/>
                     <img v-else="!notification.imagePath" :src="notification.imagePath" :alt="notification.title" class="absolute left-3 top-3 w-[50px] h-[50px] rounded-full"/>
                     
                     
                     <div v-if="!notification.read" class="h-2 w-2 rounded-full bg-rose-700 absolute right-4 top-6"></div>
                     <h2 class="font-medium text-sm text-gray-500 pb-3 break-words">{{notification.title}}</h2>
                     <div class="text-xsb text-gray-500 break-words">{{notification.content}}</div>
                     <div class="text-[11px] text-gray-400 pt-2">{{notification.createDateTime.seconds | SecondToDisplayTime}}</div>
 
                     <!-- <div class="text-[11px] text-gray-400 pt-2"> -->
                       <ListingPublishDet :cDate="notification.createDateTime"/>
                       <!-- {{$moment(notification.createDateTime).fromNow()}}-->
                       <!-- </div>  -->
                   </div>   
               </li>
               <li v-show="paginateLoading" class=" py-6 flex justify-center">
                 <Spinner />
               </li>
               <Trigger @triggerIntersected="loadMore" />
           </ul>
           <div v-else-if="!loading" class="flex flex-col justify-center py-8 bg-white shadow-sm">
             <div class="text-center text-sm text-gray-600 pb-8 font-medium">No notifications yet!</div>
             <div class="w-[200px] h-[200px] bg-[#FBF8EE] rounded-full mx-auto flex justify-center items-center">
                 <img src="~/assets/images/no-notification.svg" alt="no-notification"/>
             </div>
             <div class="text-center text-sm text-gray-600 pt-8">You're all caught up for now. <br>
 We'll notify you when something comes up.</div>
           </div>
         </div>
     </div>    
   </div>
  </div>
 </template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import SecondToDisplayTime from '../../filters/SecondToDisplayTime';
export default Vue.extend({
  name: 'Inappnotification',
  props: ["notificationType"],
  filters:{
    SecondToDisplayTime
  },
  data() {
    return {
      loading: true,
      paginateLoading: false,
      authUser : this.$store.state.authUser,   
      collectionName: "users",
      subPath: "app_notifications",
      notificationList: [],
      perPageLimit: 50,
      lastDocId: null
    }
  },

  mounted(){
    // this.getNotificationList(this.authUser.uid, null);
    this.getNotificationList()
    // this.setAllNotificationAsSeen(null);
  },
  methods: {

    
    async getNotificationList(lastDocId = null){
  

        const fireFunctionName: string = 'showAppNotification';
        const projectId = this.$fireModule.apps[0].options.projectId
        const region = this.$fire.functions._region
        const url = `https://${region}-${projectId}.cloudfunctions.net/${fireFunctionName}`

        try{

          const appcheckToken = await this.$fire.appCheck.getToken()
          const headers = {
            'X-Firebase-AppCheck': appcheckToken.token,
            'Accept-Language': this.$i18n.locale
          }
          // appType = 'FOOD_APP' | 'MAIN_APP'

          let appType = 'MAIN_APP'
          if(this.notificationType && this.notificationType === 'FOOD'){
            appType = 'FOOD_APP'
          }

          let requestPayloadData =  {data : {lastDocId: lastDocId, appType: appType}};

          const notificationResp = await this.$axios.$post(url, requestPayloadData, { headers })

          console.log("notificationResp:", notificationResp.result)
          // this.notificationList = 
          if(notificationResp.result && notificationResp.result.length){
            this.lastDocId = notificationResp.result[notificationResp.result.length - 1].docId;

            this.notificationList.push(...notificationResp.result) ;
          }           
          this.loading = false
          this.paginateLoading = false

        } catch(error) {
          // this.notificationList = []
          this.loading = false
          this.paginateLoading = false
          console.log(error)

        }
    },

    setAllNotificationAsSeen(businessId: string): any{
      const fireFunctionName: string = 'seeAllAppNotifications';
      // const firebaseFun = this.angularFireFun.httpsCallable(fireFunctionName);
      let requestPayloadData = (businessId) ? {businessId: businessId} : {};
      this.$fire.functions.httpsCallable(fireFunctionName)(requestPayloadData).then((resp) => {
        console.log('seenAll resp', resp)
      })
      // return firebaseFun(requestPayloadData)
    },

    notificationMarkedAsRead(documentId: string): any{
      const fireFunctionName: string = 'readApp';
      // const firebaseFun = this.angularFireFun.httpsCallable(fireFunctionName);
      // let requestPayloadData = {"documentId": documentId}
      // return firebaseFun(requestPayloadData)

      this.$fire.functions.httpsCallable(fireFunctionName)({
        documentId: documentId
      }).then((resp) => {
        console.log('readApp resp', resp)
      })
    },

    redirectToDetailsPage(noti: any, index: number) {
      console.log('noti:', noti);
      this.notificationList[index]['read'] = true
      this.notificationMarkedAsRead(noti.docId);
      // let redirectUrl = (!noti.link.includes('http')) ? 'https://'+noti.link : noti.link;
      let redirectUrl = (!noti.link.includes('http')) ? '/'+noti.link : noti.link;
      // window.open(routeData.href, '_blank');;
      // console.log('redirectUrl', redirectUrl)
      console.log('noti:', redirectUrl);
      if (process.client) {
        window.open(redirectUrl, '_blank');
        // window.location.href = redirectUrl;
      }
    },

    loadMore () {
      if (!this.loading && !this.paginateLoading) {
        this.paginateLoading = true
        this.getNotificationList(this.lastDocId)
        
        // let lastIndex = this.notificationList.length - 1
        // let lastVisible = this.notificationList[lastIndex]['lastSnap']
        //  this.getNotificationList(this.authUser.uid, lastVisible);
      }
    },
  }
})
</script>