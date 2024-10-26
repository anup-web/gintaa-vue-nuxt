import Vue from 'vue'
const filter = function (text = '', length, clamp) {
  clamp = clamp || '...'
  //   const node = document.createElement('div')
  //   node.innerHTML = text
  //   const content = node.textContent
  //   return content.length > length ? content.slice(0, length) + clamp : content

  return text.length > length ? text.slice(0, length) + clamp : text
}

Vue.filter('truncate', filter)

const filterFname = function (text = '') {
  return text.replace(/ .*/, '')
}

Vue.filter('fName', filterFname)
