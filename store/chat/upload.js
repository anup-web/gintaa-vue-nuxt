export const state = () => ({
  uploading: false
})

export const mutations = {
  setLoading (state, uploading) {
    state.uploading = uploading
  }
}

export const actions = {
  setLoading ({ commit }, uploading) {
    commit('setLoading', uploading)
  }
}
