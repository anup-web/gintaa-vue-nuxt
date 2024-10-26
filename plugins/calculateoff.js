export default ({ app }, inject) => {
    inject('cacculateoffpercentage', (price,unitOffervaluation) => {
        if(price && unitOffervaluation){
        let diffValue =  price - unitOffervaluation
        if(diffValue && diffValue > 0){
            let percentageVal =  (+diffValue/ price) * 100
            if (+percentageVal < 1  ){
               return null 
            }else if (+percentageVal > 99){
             return 99
            }else{
               return Math.round((diffValue/ price) * 100)
            }
            
          }
        }
      //return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    })
    
  }
  