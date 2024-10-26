export default function ({ $axios, store, $cookies, $config, app }) {
  $axios.setHeader('channelid', 'WEB')
  $axios.setHeader('timezone', $config.timezone)
  $axios.setHeader('Accept-Language', app.i18n.locale)

  const token = $cookies.get('gintaa_token')
  if (token) {
    $axios.setToken(token, 'Bearer')
  }
  if (process.client) {
    if (store.state.authUser) {
      $axios.setToken(store.state.authUser.idToken, 'Bearer')
    }
  }
}
