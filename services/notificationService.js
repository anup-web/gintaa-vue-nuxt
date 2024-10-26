export class NotificationService {
    dealChats = []
    authUser = null
    fire = null
    unreadChatCount = 0
    constructor(authUser, fire) {
        this.authUser = authUser
        this.fire = fire
        this.subscribeTradingChatDeals ()
    }
    allUnreadChatCount(){
      this.unreadChatCount = 0
      console.log('dealChats:', this.dealChats)
      if(this.dealChats.length) {
        this.dealChats.map((item)=>{
          let count = 0
          if(item?.unreadMessageDetails && item?.unreadMessageDetails[this.authUser.uid]){
            count = item?.unreadMessageDetails[this.authUser.uid]
          } 

          this.unreadChatCount += count
        })
      }

      console.log('unreadChatCount:', this.unreadChatCount)
    }
    
    subscribeTradingChatDeals () {
        const vm = this
        if (process.client) {
            console.log('fire:', this.fire)
            this.fire.firestore
            .collection('tradingChatDeals')
            .where('participants', 'array-contains-any', [this.authUser?.uid])
            .orderBy('createdAt', 'desc').limit(100)
            .onSnapshot((querySnapshot) => {
                vm.dealChats = []
                querySnapshot.forEach((doc) => {
                const data = doc.data()
                data.dealRefId = doc.id
                vm.dealChats.push(data)
                // console.log('deal', doc.id, data)
                })
                this.allUnreadChatCount()
            })
        }
      }
      
      totalUnreadChat(){
          return this.unreadChatCount
      }
}