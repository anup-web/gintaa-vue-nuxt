export const state = () => ({
  replyMessage: null,
  user: null
})

export const mutations = {
  setMessage (state, data) {
    console.log(data)
    if (data) {
      state.replyMessage = data.message
      state.user = data.user
    } else {
      state.replyMessage = null
      state.user = null
    }
  }
}

export const actions = {
  setMessage ({ commit }, data) {
    commit('setMessage', data)
  }
}
