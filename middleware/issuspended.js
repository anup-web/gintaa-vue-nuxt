export default function ({ app, store, redirect }) {
  // If the user is not authenticated
  const token = app.$cookies.get('gintaa_token')
  
  // console.log("isSuspended",isSuspended)
  if (!token) {
    if (app.ssrContext && app.ssrContext.url !== '/') {
      return redirect(`/login?from=${app.ssrContext.url}`)
    } else {
      return redirect('/login')
    }
  }else{
  const isSuspended = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    if (token && !isSuspended.suspended) {
     return redirect('/')
    }
  }

}
