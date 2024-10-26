import initialState from './state'

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_AUTH_USER: (state, { authUser }) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email,
      phoneNumber: authUser.phoneNumber,
      idToken: authUser._delegate.accessToken,
      displayName: authUser.displayName,
      photoURL: authUser.photoURL,
      userLoginTimeDet: authUser?.metadata
    }
  },
  SET_ADDRESSES: (state, { addresses }) => {
    state.addresses = addresses
  },
  SET_PROFILE: (state, { profile }) => {
    state.profile = profile
  }
}
