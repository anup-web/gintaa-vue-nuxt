export default {
  async nuxtServerInit ({ dispatch }, ctx) {
    // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'

    /** Get the VERIFIED authUser on the server */
    if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
      const { allClaims: claims, ...authUser } = ctx.res.locals.user

      console.info(
        'Auth User verified on server-side. User: ',
        authUser,
        'Claims:',
        claims
      )

      await dispatch('onAuthStateChanged', {
        authUser,
        claims
      })
    }
  },

  async onAuthStateChanged ({ commit }, { authUser }) {
    if (!authUser || (authUser && authUser.isAnonymous)) {
      this.$cookies.set('gintaa_token', null)
      commit('RESET_STORE')
      return
    }
    if (authUser && authUser.getIdToken) {
      try {
        const idToken = await authUser.getIdToken(true)

        // ctx.app.$cookies.set('gintaa-token', idToken, {
        //   path: '/',
        //   maxAge: 60 * 60 * 24 * 7
        // })

        this.$cookies.set('gintaa_token', idToken)
      } catch (e) {
        console.error(e)
      }
    }
    commit('SET_AUTH_USER', { authUser })
  },

  checkVuexStore (ctx) {
    if (this.$fire.auth === null) {
      throw 'Vuex Store example not working - this.$fire.auth cannot be accessed.'
    }

    alert(
      'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
    )
  },

  async getAddresses ({ commit }) {
    try {
      const data = await this.$axios.$get('/users/v1/user/address/all')
      commit('SET_ADDRESSES', { addresses: data.payload })
    } catch (e) {
      console.log(e)
    }
  },

  async getProfile ({ commit }) {
    try {
      const data = await this.$axios.$get('/users/v1/user/profile')
      commit('SET_PROFILE', { profile: data.payload })
    } catch (e) {
      console.log(e)
    }
  }
}
