export const state = () => ({
  data: null,
  showModal: false,
  delete: false
})

export const mutations = {
  show (state, data) {
    state.data = data
    state.showModal = true
    state.delete = false
  },
  hide (state, data = null) {
    state.data = data
    state.showModal = false
    state.delete = false
  },
  confirm (state) {
    state.delete = true
    state.showModal = false
  }
}

export const actions = {
//   show ({ commit, state }, products) {
  show ({ commit }, data) {
    commit('show', data)
  },
  hide (context) {
    context.commit('hide')
  },
  confirm (context) {
    context.commit('confirm')
  }
}
