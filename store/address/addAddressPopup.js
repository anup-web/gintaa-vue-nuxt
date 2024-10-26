export const state = () => ({
    openAddress: null
  })
  
  export const mutations = {
    openAddressPopup (state, data) {
      console.log(data)
      if (data) {
        console.log("-----------------------------")
        state.openAddress = data.showaddresspopup
      } else {
        state.openAddress = null
      }
    }
  }
  
  export const actions = {
    openAddressPopup ({ commit }, data) {
      commit('openAddressPopup', data)
    }
  }

// ==================================================

// export const state = () => ({
//     chatRoomPath: null,
//     openChat: null
//   })
  
//   export const mutations = {
//     openChatRoom (state, data) {
//       console.log(data)
//       if (data) {
//         state.chatRoomPath = data.chatRoomPath
//         state.openChat = data.openChat
//       } else {
//         state.chatRoomPath = null
//         state.openChat = null
//       }
//     }
//   }
  
//   export const actions = {
//     openChatRoom ({ commit }, data) {
//       commit('openChatRoom', data)
//     }
//   }
  

  
  