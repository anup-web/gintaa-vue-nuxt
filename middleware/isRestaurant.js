export default async function ({ app, store, redirect, route, $config }) {
  // If the user is not authenticated
  const token = app.$cookies.get('gintaa_token')
  // const isSuspended = this.parseJwt(token)
  // console.log("isSuspended",isSuspended)

  // const currentUrl = app.ssrContext && app.ssrContext.url
  // console.log("authUser currentUrl",route)
  const currentPath = route.path
  if(token){
    //console.log("token Exists ------------------------------------------------")
  
    const authUser =   JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
    console.log("authUser",authUser)
    const isRestaurant = authUser && authUser.role && authUser.role === 'RESTAURANT' ? true : false
    

    // If is non-restaurant access restaurant page, it should redirect to home page
    if(!isRestaurant && currentPath.includes('gintaa-food/vendor')){
      if(!currentPath.includes('gintaa-food/register-restaurant')){
        return redirect('/')
      }        
    }


    // If is non-restaurant access restaurant page, it should redirect to home page
    // if(!isRestaurant){
    //   // if(localStorage.selectedAddress)
    //   if(currentPath.includes('gintaa-food/location') && localStorage.selectedAddress){
    //     return redirect('gintaa-food/')
    //   } else {
    //     return redirect('gintaa-food/location')
    //   }      
    // }

    
    // If is restaurant but incomplete profile then redirect to onboarding page
    if(isRestaurant){
      const restaurant_id = authUser.user_id
      try{
        const data = await fetch(`${$config.API_BASE}/flisting/v1/restaurant/${restaurant_id}`).then((r) => r.json());
      
        console.log('authUser Restaurant Data:', data)
        if(data && data.payload){
          const restaurantData = data.payload

          const isCompleted           = restaurantData.verificationStatus === 'ACCEPTED' && restaurantData.onboardingCompleted ? true : false
          const isAccepted            = restaurantData.verificationStatus === 'ACCEPTED' && !restaurantData.onboardingCompleted ? true : false
          const isPending             = restaurantData.verificationStatus === 'PENDING' && !restaurantData.onboardingCompleted ? true : false
          const isRejected            = restaurantData.verificationStatus === 'REJECTED' && !restaurantData.onboardingCompleted ? true : false
          const isPendingInformation  = restaurantData.verificationStatus === null && !restaurantData.onboardingCompleted ? true : false
          
          // Loged in restaurant should redirect to vendor page
          if( isCompleted &&
              !currentPath.includes('gintaa-food/vendor') &&
              !currentPath.includes('gintaa-food/register-restaurant/onboard-successful')
          ){
            return redirect('/gintaa-food/vendor')
          }

          // For approved restaurant
          if( isAccepted &&
              !currentPath.includes('gintaa-food/register-restaurant/complete-profile') &&
              !currentPath.includes('gintaa-food/register-restaurant/ACCEPTED')
          ){

            if (  !restaurantData.workingIntervals || 
                  !restaurantData.deliveryCharge || 
                  !restaurantData.deliveryTime || 
                  restaurantData.discountPercent !== null  || 
                  !restaurantData.minOrderPrice  ) {
              // this.currentStep = 4
              if(!currentPath.includes('gintaa-food/register-restaurant/complete-profile?currentStep=4')){
                return redirect('/gintaa-food/register-restaurant/complete-profile?currentStep=4')
              }
            } else {
              // this.currentStep = 5
              if(!currentPath.includes('gintaa-food/register-restaurant/complete-profile?currentStep=5')){
                return redirect('/gintaa-food/register-restaurant/complete-profile?currentStep=5')
              }
            }

            // return redirect('/gintaa-food/vendor')
          }

          // For pending restaurant
          if(isPending && !currentPath.includes('gintaa-food/register-restaurant/PENDING')){
            return redirect('/gintaa-food/register-restaurant/PENDING')
          }
          
          // For rejected restaurant
          if(isRejected && 
            !currentPath.includes('gintaa-food/register-restaurant/basic-info') &&
            !currentPath.includes('gintaa-food/register-restaurant/REJECTED')
          ){
            return redirect('/gintaa-food/register-restaurant/REJECTED')
          }


          if(isPendingInformation && 
            !currentPath.includes('gintaa-food/register-restaurant/basic-info')
          ){
            return redirect('/gintaa-food/register-restaurant/basic-info')
          }


          // if( restaurantData 
          //     && restaurantData.photoUrl 
          // ){
          //   if(currentPath !== '/maintenance' 
          //       && !currentPath.includes('legal/gintaa-food')
          //       && currentPath.includes('gintaa-food/vendor/signup')
          //     ){
          //     // return redirect('/gintaa-food/vendor')
          //   }
          // } else {
          //   if(currentPath !== '/maintenance'              
          //     && !currentPath.includes('legal/gintaa-food')
          //     && !currentPath.includes('gintaa-food/vendor/signup') 
          //   ){
          //     // return redirect('/gintaa-food/vendor/signup')
          //   }
          // }
        } else {
          if(currentPath !== '/maintenance'  
            && !currentPath.includes('legal/gintaa-food')
            && !currentPath.includes('gintaa-food/vendor/signup') 
          ){
            return redirect('/gintaa-food/register-restaurant/basic-info')
          }
        }
      } catch(err){
        console.log('authUser Restaurant Data err:', err)
      }
      
    }


    // // If restaurant access non restaurant page, it should redirect to restaurant page
    // if(isRestaurant 
    //     && (currentPath !== '/maintenance'
    //     && !currentPath.includes('legal/gintaa-food') 
    //     && !currentPath.includes('gintaa-food/vendor') )
    //   ){
    //   return redirect('/gintaa-food/vendor')
    // }

    
  } else {
    if(currentPath.includes('gintaa-food/vendor') && !currentPath.includes('gintaa-food/register-restaurant')){
      return redirect('/')
    }
  }

  // parseJwt(token){
  //   return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
  // }
}
