const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.{js,ts}',
    'nuxt.config.{js,ts}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      // serif: ['Merriweather', 'serif'],
    },

    extend: {
      fontFamily: {
        sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },

      fontSize: {
        xsb: '13px'
      },
      colors: {
        green: '#8bc63e',
        greendark: '#76AF2A',
        errortext: '#FC2323',
        darkcolor: '#4b6e82',
        firoza: '#48CEF3',
        facebook: '#3c5a9a',
        twitter: '#2175d1',
        linkedin: '#007bb6',
        instaf: '#fdb35c',
        instam: '#c83687',
        instal: '#7050bf',
        darkgreen: '#6B9C2E',
        lightgrey: '#E6E8F0',
        lightgreen: '#dcfce7',
        firozadark: '#39C3E9'
      },

      lineHeight: {
        leading48: '48px'
      },

      backgroundImage: {
      'profle-pattern': "url('~/assets/images/profile/profile-top-bg.svg')",
      'login-bg': "url('~/assets/images/bg.png')",
      'wallet-cbg-one': "url('~/assets/images/offer/wallet-bg-1.svg')", 
      'wallet-cbg-two': "url('~/assets/images/offer/wallet-bg-2.svg')", 
      'wallet-unlock': "url('~/assets/images/offer/unlock.webp')",
      'wallet-cbg-three': "url('~/assets/images/offer/wallet-bg-3.svg')", 
      'wallet-refer-bg': "url('~/assets/images/offer/refer.jpg')",
      'homelist-bg': "url('~/assets/images/listing.png')",
      'homematch-bg': "url('~/assets/images/matches.png')",  
      'homeexchange-bg': "url('~/assets/images/exchange.png')", 
      'wallet-referfriend-bg': "url('~/assets/images/refer-bg-friend.png')",   
      },

      backgroundPosition: {
        'top-4': 'bottom -3.438rem center'
      }

    }
  },
  variants: {
    extend: {}
  },
  variants: {
    display: ['group-hover']
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
