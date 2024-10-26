export default function ({ app, store, redirect }) {
  // If the user is not authenticated
  const token = app.$cookies.get('gintaa_token')
  // const isSuspended = this.parseJwt(token)
  // console.log("isSuspended",isSuspended)
  if (!token) {
    if (app.ssrContext && app.ssrContext.url !== '/') {
      return redirect(`/login?from=${app.ssrContext.url}`)
    } else {
      return redirect('/login')
    }
  }else{
    if(token){
      //console.log("token Exists ------------------------------------------------")
    
     const isSuspended =   JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
     //console.log("isSuspended",isSuspended)
     if(isSuspended?.suspended){
      return redirect('/activate-account')
     }else{
      //return redirect('/')
     }
    }
  }

  // parseJwt(token){
  //   return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  // }
}
