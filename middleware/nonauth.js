export default function ({ app, store, redirect }) {
  // If the user is not authenticated
  const token = app.$cookies.get('gintaa_token')
  if (token) {
    return redirect('/')
  }
}
