<template>
            <div v-if="offerData.offerHistory.length" class="relative w-full flex-col  px-3 py-3 mt-2  scroll-smooth overflow-auto will-change-scroll auto-scroll text-left">
           <ul>
            <li v-for="(history, index) in  getHistory(offerData.offerHistory)" :key="index+'history'" class="w-full flex flex-col mb-2">
              <div  class="w-full mt-2 text-xs text-gray-400 text-[11px] ">
                {{history.displayDate}}
              </div>
              <div v-for="(message, i) in history.displayMessages" :key="i+message" class="w-full text-xsb mt-1 text-gray-500">
                {{message}}
              </div>
            </li>
           </ul>
          </div>
      

</template>

<script lang="ts">
import Vue from 'vue'
import moment from "moment";
export default Vue.extend({
  name: 'OfferHistoryCard',
  props: ['offer'],
  data() {
  return {
  apiUrls: this.$config.apiUrls,
  offerData: {
  updateCounter : null,
  offerHistory: [],
  timeOffset: this.$config.timeOffset,
  dealSentTimeStamp:this.offer?.dealSentTimeStamp,
  
  }
  }},
  mounted(){
  // console.log(this.offer)
  // this.dealSentTimeStamp = this.offer.dealSentTimeStamp
   if(this.offer.revisionHistoryDeltaViews){
    
    this.getOfferHistory(this.offer.revisionHistoryDeltaViews)
   }
   
  },
  computed: {

    },
    methods:{
     async getOfferHistory(offerHistoryResponse:any){
       // console.log("offerHistoryResponse",offerHistoryResponse)
        if(offerHistoryResponse && offerHistoryResponse.length>0){
        const offerHistoryData = offerHistoryResponse;
        for (const history  of offerHistoryData) {          
        this.processOfferHistryData(history);
        }
    
         }
         this.processInitiateOfferHistory();
 
     },

  processInitiateOfferHistory(){
      const historyObject = {
        displayDate: '',
        displayName: '',
        action: '',
        displayMessages: []
      }
     
     let displayTime   = moment(this.offerData.dealSentTimeStamp).add(this.timeOffset, 'minutes').format('lll');
     let displayMsg  = 'Offer was Initiated';
      
      historyObject.displayDate = displayTime;
      //historyObject.displayName = displayName;
      historyObject.action      = 'INITIATED';
      historyObject.displayMessages.push(displayMsg);

    //   this.offerData.requestedOffers.map((item, index)=>{
    //     let offerTitle    = item.offerName;
    //     let slNo = index + 1
    //     // let displayMsg = slNo + '. ' + offerTitle;
    //     let displayMsg = offerTitle;
    //     historyObject.displayMessages.push(displayMsg);
    //   })
      
      this.offerData.offerHistory.push(historyObject);
      //console.log("this.offerData",this.offerData)
    },

    checkStatus(dealStatusCode:any){
     if(dealStatusCode === 'PARTIAL_CLOSED'){
       return 'PARTIAL CLOSED'
     }else{
       return dealStatusCode
     }
    },

   processOfferHistryData(offerHistory: any){
     // console.log('history:', offerHistory);

     // return
      //let currentUser         = this.authUser;
      //const revisionUserId  = offerHistory.revisionUserId;
      // console.log('currentUser:', currentUser);

      const historyObject = {
        displayDate: '',
        displayName: '',
        action: '',
        displayMessages: []
      }

      ////////// Start Process Display Name///////////////////////
    //   let displayName = ''
    //   if(revisionUserId === currentUser.uid){
    //     displayName = 'You';
    //   } else if(revisionUserId === this.offerData.receiverUserInfo?.id){
    //     displayName = this.offerData.receiverUserInfo?.name.trim();
    //   } else {
    //     displayName = this.offerData.senderUserInfo?.name.trim();
    //   }
    //   historyObject.displayName = displayName;    
      ////////// End Process Display Name///////////////////////


      ///////////// Start Process display date ////////////////
      const createdDate         = offerHistory.createdDate;
      historyObject.displayDate = moment(createdDate).add(this.timeOffset, 'minutes').format("lll");
      ///////////// End Process display date /////////////////

      /////////////// Start Process Action //////////////////////
      
      const otherChanges    = offerHistory?.otherChanges;
      if(otherChanges.dealStatusCode.newValue != otherChanges.dealStatusCode.prevValue) {
        
        const dealStatusCode  = otherChanges?.dealStatusCode?.newValue;
        historyObject.action  = dealStatusCode;
        
        let displayMsg = 'This Offer was' + ' ' + this.checkStatus(dealStatusCode) ;
        historyObject.displayMessages.push(displayMsg);
      }
      
      /////////////// End Process Action ///////////////////////


      /////////////// Start Process Activity //////////////////////  

      //------------- Start Payment revice --------------//  
      if(otherChanges.requestedAmount != undefined) {        
        let newValue = otherChanges?.requestedAmount.newValue;
        let prevValue = otherChanges?.requestedAmount.prevValue;   
        
        let displayMsg =  ' Changed Requested amount from ' + prevValue + ' to ' + newValue;
        historyObject.displayMessages.push(displayMsg);
      }    
      //------------- End Payment revice --------------// 


      //------------- Start Delivery Preferance revice ------------// 
      if(otherChanges.dealDeliveryMethod != undefined) {  
        let newValueId = otherChanges.dealDeliveryMethod.newValue.id;
        let newValue = (newValueId === "Self") ? 'Personal Meeting' : otherChanges.dealDeliveryMethod.newValue.name;
        
        let prevValueId = otherChanges.dealDeliveryMethod.prevValue.id;
        let prevValue =  (prevValueId === "Self") ? 'Personal Meeting' : otherChanges?.dealDeliveryMethod.prevValue.name;   
        
        let displayMsg =  'changed offer devivery preference as ' + newValue + ' from ' + prevValue;
        historyObject.displayMessages.push(displayMsg);
      }    
      //------------- End Delivery Preferance revice --------------// 


      //------------- Start Gintaa Junction revice ------------// 
      if(otherChanges.dealJunction != undefined) {  
        let newValue = otherChanges.dealJunction.newValue.name;
        
        let prevValue =  null;
        if(otherChanges.dealJunction.prevValue) {
          prevValue =  otherChanges.dealJunction.prevValue.name;
        }
        
        let displayMsg =  'selected gintaa junction as ' + newValue;
        displayMsg += prevValue ? ' from ' + prevValue : '';
        historyObject.displayMessages.push(displayMsg);
      }    
      //------------- End Gintaa Junction revice --------------// 

      //------------- Start Gintaa Junction meeting time revice ------------// 
      if(otherChanges.meetingStartTime != undefined) {  
        let newStartTime = otherChanges.meetingStartTime.newValue;
        let newValue = moment(newStartTime).format("lll");
        
        let prevValue =  null;
        if(otherChanges.meetingStartTime.prevValue) {
          let prevStartTime = otherChanges.meetingStartTime.prevValue;
          prevValue =  moment(prevStartTime).format("lll");
        }
        
        let displayMsg =  ' Meeting Time was set at ' + newValue;
        displayMsg += prevValue ? ' instead ' + prevValue : '';
        historyObject.displayMessages.push(displayMsg);
      }    
      //------------- End Gintaa Junction meeting time revice --------------// 


      /////////////// End Process Activity ///////////////////////

    //  console.log('historyObject:', historyObject);
      //if(otherChanges.dealStatusCode.newValue != otherChanges.dealStatusCode.prevValue) {
        //this.offerData.offerHistory.push(historyObject);
     // }

      if(historyObject.displayMessages.length){
       // console.log("-------------------------------------",historyObject)
        this.offerData.offerHistory.push(historyObject);
        //console.log(this.offerData.offerHistory.length)
      }

     // console.log("this.offerData",this.offerData.offerHistory)

    },
    getHistory(msgHist:any){
    if(msgHist && msgHist.length>3) {
        const slicemsgHist =   msgHist.slice(0,3)
        return slicemsgHist
    } else{
      return msgHist
    }
    }
    }

})
</script>
<style scoped>
.accepted, .closed{
  color: #8bc63e !important;
}
.revised, .incoming{
  color: #48CEF3 !important;
}
.rejected{
  color: #FC2323 !important;
}
.exchange-image .exchange-card {
  width: 80px !important;
}
</style>