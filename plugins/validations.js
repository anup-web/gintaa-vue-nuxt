export default ({ app }, inject) => {
  inject('isValidEmail', (email) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  })

  inject('isValidMobile', (mobile) => {
    return /^[6-9]\d{9}$/gi.test(mobile)
  })

  inject('isValidIfsc', (ifsc) => {
    return (/^[A-Za-z]{4}0[A-Z0-9a-z]{6}$/.test(ifsc))
  })

  inject('isValidUpi', (upi) => {
    return (/[a-zA-Z0-9._-]{2,256}@[a-zA-Z]{2,64}/.test(upi))
  })  

  inject('isValidName', (name) => {
    return (/^[a-zA-Z]+( [a-zA-Z]+)+$/.test(name))
  })  

  inject('isAlphabetExists', (value) => {
     //console.log("value",value)
    return (/[a-zA-Z]/.test(value))
  })  

  inject('isPhoneNoEsixts', (phonenoExists) => {
   return (new RegExp('[6-9]\\d{9,}').test(phonenoExists))
  }) 

 inject('isemailEsixts', (emailExists) => {
  return (new RegExp('((?!\\.)[\\w-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$').test(emailExists))
 }) 

 inject('isurlEsixts', (urlExists) => {
  return (new RegExp('((http:\\/\\/|https:\\/\\/)?(www.)?(([a-zA-Z0-9-]){2,}\\.){1,4}([a-zA-Z]){2,6}(\\/([a-zA-Z-_\\/\\.0-9#:?=&;,]*)?)?)').test(urlExists))
 }) 
 



  
}
