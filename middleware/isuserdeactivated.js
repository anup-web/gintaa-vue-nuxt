export default function ({app,redirect,route}) {
 const token = app.$cookies.get('gintaa_token')
 if(token){
  const isSuspended = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  if (token && isSuspended?.suspended) {
   return redirect('/activate-account')
  }else{
   // return redirect('/')
  }
 }else{
  
 }
 
 
}