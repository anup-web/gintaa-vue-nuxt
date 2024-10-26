export default ({ app }, inject) => {
  inject('getFirstName', (name) => {
    return name ? name.replace(/ .*/, '') : ''
  })
  inject('isNumber', (evt) => {
    evt = (evt) || window.event
    const charCode = (evt.which) ? evt.which : evt.keyCode
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
      evt.preventDefault()
    } else {
      return true
    }
  }),
  inject('getDisplayAddress', (address) => {
    return [address.addressLine, address.area, address.city, address.state, address.country, address.zip].filter((a) => a !== null & a !== '').join(', ')
  })
}
