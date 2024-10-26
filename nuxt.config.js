const runEnv = process.env.NODE_ENV

const sitePref = runEnv === 'development' ? 'dev.' : runEnv === 'alpha' ? 'alpha.' : runEnv === 'beta' ? 'beta.' : ''
const apiPref = runEnv === 'development' ? 'dev.api.' : runEnv === 'alpha' ? 'alpha.api.' : runEnv === 'beta' ? 'beta.api.' : 'api2.'
const stripePublishableKey = runEnv === 'development' ? 'pk_test_51JjnGpSBIGusfDAdU4lHYo10nFlbJHdzHmEFSYPiulT8e7NNMdl8EbT5sXifTkrsyTADJR39xVru7YX6wQrmPdGl00v3CdLljJ' : runEnv === 'alpha' ? 'pk_test_51JjnGpSBIGusfDAdU4lHYo10nFlbJHdzHmEFSYPiulT8e7NNMdl8EbT5sXifTkrsyTADJR39xVru7YX6wQrmPdGl00v3CdLljJ' : runEnv === 'beta' ? 'pk_live_51JjnGpSBIGusfDAdsDRK1FzcArc2HtkEjrlpU7TeuqKlupnFhVcZsw3qq7MO4ZCx8H9CUVhrGITKB12LE1xJJEsV00vbmxpETE' : 'pk_live_51JjnGpSBIGusfDAdsDRK1FzcArc2HtkEjrlpU7TeuqKlupnFhVcZsw3qq7MO4ZCx8H9CUVhrGITKB12LE1xJJEsV00vbmxpETE'
const cdnBaseUrl = runEnv === 'development' ? 'https://dev.cdn.gintaa.com' : runEnv === 'alpha' ? 'https://alpha.cdn.gintaa.com' : runEnv === 'beta' ? 'https://beta.cdn.gintaa.com' : 'https://cdn.gintaa.com'
const smartLookId = runEnv === 'development' ? 'cb2dd367434a87e720e81d15d69807ff56771733' : runEnv === 'beta' ? '5a0e9843a78d0e93c6f43e7b66250e97b3b9273b' : '250db831e95fa4272df77611e9f8f3d0bae64d25'
const siteUrl = 'https://PREFIXgintaa.com'
const baseURL = siteUrl.replace('PREFIX', sitePref)
const apiURL = siteUrl.replace('PREFIX', apiPref)

const strapiApiPref = runEnv === 'development' ? 'dev.cmsapi.' : runEnv === 'alpha' ? 'alpha.cms.' : runEnv === 'beta' ? 'beta.cmsapi.' : 'cmsapi.'
const cmsSiteUrl = 'https://PREFIXgintaa.com'
const strapiApiURL = cmsSiteUrl.replace('PREFIX', strapiApiPref)

const currentEnv = runEnv === 'development' ? 'dev' : runEnv === 'alpha' ? 'alpha' : runEnv === 'beta' ? 'beta' : 'prod'

const cashfreeSdkPath = currentEnv === 'dev' ? 'https://sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js' : 'https://sdk.cashfree.com/js/ui/2.0.0/cashfree.prod.js'

const tz = 'Asia/Kolkata'

export default {
  // bridge: false,
  loading: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // title: 'gintaa | Best One-Stop Online Barter Marketplace in India',
    // title: "gintaa- India's #1 Online Marketplace To Exchange Products",
    title: "gintaa | Your go-to platform for shopping & ordering food online",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: 'List products on gintaa, explore product or luxury barter matches, negotiate and seal the deal. Meet sellers personally to check product quality or get door-step delivery. ' },
      { hid: 'description', name: 'description', content: 'Discover the best shopping and food ordering experience with gintaa. Shop & order food online at the lowest Price and enjoy deals on every purchase. Explore gintaa Now!' },
      { name: 'Keywords', content: "online shopping, online shopping in india, Buy online, sell online, exchange online, gintaa, gintaa online shopping, online shopping site, online shopping store, gintaa food, order food online," },
      {
        hid: 'schema',
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          "name": 'gintaa',
          "url": 'https://gintaa.com/',
          "logo": 'https://cdn.gintaa.com/web/web_new/logo/logo.png',
          "contactPoint": {
            '@type': 'ContactPoint',
            "telephone": '080-69188100',
            "contactType": 'customer service',
            "areaServed": 'IN'
          },
          "sameAs": [
            'https://www.facebook.com/Onlygintaa/',
            'https://www.instagram.com/gintaa.in/',
            'https://www.linkedin.com/company/gintaa/',
            'https://twitter.com/gintaa_in'
          ]
        }
      },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      { name: 'og_site_name', property: 'og:site-name', content: 'gintaa.com' },
      { name: 'og-title', property: 'og:title', content: "gintaa | Your go-to platform for shopping & ordering food online" },
      { property: 'og:description', content: "Discover the best shopping and food ordering experience with gintaa. Shop & order food online at the lowest Price and enjoy deals on every purchase. Explore gintaa Now!" },
      { name: 'og-url', property: 'og:url', content: 'https://gintaa.com/' },
      { name: 'twitter:card', content: 'app' },
      { name: 'twitter:site', content: '@gintaa' },
      { name: 'twitter:creator', content: '@gintaa' },
      { name: 'twitter:title', content: "gintaa | Your go-to platform for shopping & ordering food online" },
      { name: 'twitter:description', content: "Discover the best shopping and food ordering experience with gintaa. Shop & order food online at the lowest Price and enjoy deals on every purchase. Explore gintaa Now!" },
      { name: 'twitter:app:country', content: 'IN' },
      { name: 'twitter:app:name:googleplay', content: 'gintaa' },
      { name: 'twitter:image', content: 'https://cdn.gintaa.com/web/web_new/logo/logo.png' },
      { name: 'google-site-verification', content: 'Te1zse9EmoD6dos_VI8ET0hKwTqgbT9Y5VGsCMJGJB0' },
      { name: 'p:domain_verify', content: '55ec2bee3c7a267d6e91409a98824773' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://cdn.gintaa.com' },
      { rel: 'preconnect', href: 'https://gintaa.com' },
      { rel: 'prefetch', href: 'https://connect.facebook.net' },
      { rel: 'dns-prefetch', href: 'https://cdn.gintaa.com' },
      { rel: 'dns-prefetch', href: 'https://gintaa.com' },
      { rel: 'dns-prefetch', href: 'https://connect.facebook.net' },
      { rel: 'canonical', href: 'https://gintaa.com/' }
    ],
    script: [
      {
        src: cashfreeSdkPath //"https://sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios',
    { src: '~node_modules/tw-elements/dist/js/index.min.js', ssr: false },
    '@/plugins/validations',
    '@/plugins/calculateoff',
    '@/plugins/listingslug',
    '@/plugins/truncatetext',
    '@/plugins/utils',
    { src: '~/plugins/appcheck', ssr: false },
    '@/plugins/emoji-picker',
    { src: '~/plugins/google-maps', ssr: false },
    '@/plugins/toaster',
   // { src: '~/plugins/vue-record', ssr: false },
    { src: '~/plugins/vue-ellipse-progress', ssr: false },
    {src: '~/plugins/star-rating.js', mode: 'client'},
    {src: '~/plugins/vue-audio-recorder.js', mode: 'client'},
    {src: '~/plugins/flip-countdown.js', mode: 'client'}
    // '@/plugins/service'    
    // {src: 'https://sdk.cashfree.com/js/ui/2.0.0/cashfree.sandbox.js', ssr: false}
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: {
    dirs: [
      '~/components',
      '~/components/auth',
      '~/components/atoms',
      '~/components/atoms/offers',
      '~/components/modal',
      '~/components/offers',
      '~/components/listings',
      '~/components/cms'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss'
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
    'cookie-universal-nuxt',
    // ['cookie-universal-nuxt', { alias: 'cookiz' }]
    '@nuxtjs/moment',
    '@nuxtjs/i18n',
    'vue-social-sharing/nuxt',
    // 'nuxt-smartlook',
    // ['nuxt-gmaps', {
    //   key: 'AIzaSyCN8NceFYZg-ggg4jKbT2QIIg7jQtOg20Y'
    //   // you can use libraries: ['places']
    // }]
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }]
  ],
  robots: {
    UserAgent: '*',
    Disallow: '/admin',
    Allow: '/'
  },

  smartlook: {
    id: smartLookId,
	 //enabled: true //process.env.NODE_ENV === 'production',
    enabled: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // https://nuxtjs.org/tutorials/moving-from-nuxtjs-dotenv-to-runtime-config/
    baseURL: apiURL
    // proxy: true
  },
  // proxy: {
  //   '/users/v1/': {
  //     target: apiURL,
  //     changeOrigin: true
  //   },
  //   '/statistics/v1/': {
  //     target: apiURL,
  //     changeOrigin: true
  //   },
  //   '/search/v1/': {
  //     target: apiURL,
  //     changeOrigin: true
  //   },
  //   '/offers/v1/': {
  //     target: apiURL,
  //     changeOrigin: true
  //   },
  //   '/ratings/v1/': {
  //     target: apiURL,
  //     changeOrigin: true
  //   },
  //   '/qna/v1/': {
  //     target: apiURL,
  //     changeOrigin: true
  //   },
  //   '/wallet/v1/': {
  //     target: apiURL,
  //     changeOrigin: true
  //   },
  //   '/deals/v1/': {
  //     target: apiURL,
  //     changeOrigin: true
  //   },
  //   '/dview/v1/': {
  //     target: apiURL,
  //     changeOrigin: true
  //   },
  //   '/categories/v1/': {
  //     target: apiURL,
  //     changeOrigin: true
  //   },
  //   '/payments/v1/': {
  //     target: apiURL,
  //     changeOrigin: true
  //   }
  // },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  moment: {
    defaultTimezone: tz
  },
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
        name: 'English'
      },
      {
        code: 'hi',
        file: 'hi-IN.js',
        name: 'हिन्दी'
      },
      {
        code: 'bn',
        file: 'bn-IN.js',
        name: 'বাংলা'
      }
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {}
      }
    },
    transpile: [/^vue2-google-maps($|\/)/]
  },

  env: {
    FIRE_ENV: process.env.NODE_ENV
  },
  firebase: {
    config: {
      development: {
        apiKey: 'AIzaSyCI4zVAfZVZqrKKFnlH8NEhby6S1NrUuHg',
        authDomain: 'gintaa-cloud-develop.firebaseapp.com',
        databaseURL: 'https://gintaa-cloud-develop-default-rtdb.asia-southeast1.firebasedatabase.app',
        projectId: 'gintaa-cloud-develop',
        storageBucket: 'gintaa-cloud-develop.appspot.com',
        messagingSenderId: '478502639208',
        appId: '1:478502639208:web:46883e31855148f4d5cddd',
        measurementId: 'G-G5PB4Y2X2E',
        appCheckReCapchaV3Key: '6LcB8rEbAAAAAOuftjS4KVH5tnSTN8yhkhig_Gna'
      },
      alpha: {
        apiKey: 'AIzaSyDF8q5f7ErhnFfy9261MdnJi2mAJw_pgjk',
        authDomain: 'gintaa-cloud-alpha.firebaseapp.com',
        databaseURL: 'https://gintaa-cloud-alpha.firebaseio.com',
        projectId: 'gintaa-cloud-alpha',
        storageBucket: 'gintaa-cloud-alpha.appspot.com',
        messagingSenderId: '574114177967',
        appId: '1:574114177967:web:e671f92319b1b055d7455a',
        measurementId: 'G-6D3XWVX73P',
        appCheckReCapchaV3Key: '6LcPnM0bAAAAANao_klTUMiZyU8hjqLnFVFBionv'
      },
      beta: {
        apiKey: "AIzaSyAMuqZpveXFYhjWGHz7sQ1NX4SZjDHrxtY",
        authDomain: "gintaa-cloud-beta.firebaseapp.com",
        databaseURL: "https://gintaa-cloud-beta-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "gintaa-cloud-beta",
        storageBucket: "gintaa-cloud-beta.appspot.com",
        messagingSenderId: "502790464629",
        appId: "1:502790464629:web:d5da49c0e5914a94f0043c",
        measurementId: "G-LYGWTZNBCG",
        appCheckReCapchaV3Key: '6Lfu2AgcAAAAAFyP5AmQs9Rj-yP44YhDvIgfYKgD'
      },
      prod: {
        apiKey: 'AIzaSyDQv7d-VwzbCzWTy17EY9a3jjqb3ovDNCA',
        authDomain: 'gintaa-cloud-prod.firebaseapp.com',
        databaseURL: 'https://gintaa-cloud-prod-default-rtdb.asia-southeast1.firebasedatabase.app',
        projectId: 'gintaa-cloud-prod',
        storageBucket: 'gintaa-cloud-prod.appspot.com',
        messagingSenderId: '417223880744',
        appId: '1:417223880744:web:dda7f45feb9ec5646b851d',
        measurementId: 'G-1S4E0ZVVQX',
        appCheckReCapchaV3Key: '6Ldz2QgcAAAAAKgmCckIHDA9uluSwmGK81cybxQ1'
      }
    },
    services: {
      auth: {
        initialize: {
          // onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          onAuthStateChangedAction: 'onAuthStateChanged'
        },
        ssr: true
      },
      firestore: true,
      functions: {
        location: 'asia-south1'
        // emulatorPort: runEnv === 'development' ? 3000 : undefined
      },
      storage: true,
      database: true,
      messaging: {
        createServiceWorker: false
        // actions: [
        //   {
        //     action: 'randomName',
        //     url: 'randomUrl'
        //   }
        // ],
        // fcmPublicVapidKey: '<publicVapidKey>' // OPTIONAL : Sets vapid key for FCM after initialization
      },
      performance: true,
      analytics: true,
      remoteConfig: true,
      appCheck: true
    }
  },
  analytics: {
    collectionEnabled: true // default
  },
  remoteConfig: {
    settings: {
      fetchTimeoutMillis: runEnv === 'development' || runEnv === 'alpha' ? 10000 : 60000, // 60000, // default
      minimumFetchIntervalMillis: runEnv === 'development' || runEnv === 'alpha' ? 120000 : 43200000 // 43200000 // default
    },
    defaultConfig: {
      // 'welcome_message': 'Welcome'
    }
  },
  ssr: true,
  target: 'server',
  publicRuntimeConfig: {
    API_BASE: apiURL,
    BASE_URL: baseURL,
    CMS_API_BASE: strapiApiURL,
    CURRENT_ENV: currentEnv,
    googleMapApiKey: 'AIzaSyCN8NceFYZg-ggg4jKbT2QIIg7jQtOg20Y',
    stripe_publishable_key: stripePublishableKey,
    CDN_BASE_URL: cdnBaseUrl,
    timeOffset: 330, // in minutes
    timezone: tz,
    offerMinInsuranceLimit: 5000,
    actionCodeSettings: {
      // url: 'https://full url',
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: 'com.asconsoft.gintaa.dev'
      },
      android: {
        packageName: 'com.asconsoft.gintaa.dev',
        installApp: true,
        minimumVersion: '12'
      },
      dynamicLinkDomain: 'devlinks.gintaa.com'
    },
    remotConfigSuffix: {
      'en': '',
      'hi': '_hi',
      'bn': '_bn'
    },
    gcpSubFolder: {
      'en': '',
      'hi': 'Hindi/',
      'bn': 'Bengali/'
    },
    apiUrls: {
      // Start Profile Path //
      userProfile: 'users/v1/user/profile',
      sendOtpForEmail: 'users/v1/user/email/initiate/{email}',
      verifyOtpForEmail: 'users/v1/user/email/update',
      sendOtpForPhone: 'users/v1/user/mobile/initiate/{mobile}',
      verifyOtpForPhone: 'users/v1/user/mobile/update',
      userAddress: 'users/v1/user/address',
      uploadProfileImgUrl: 'users/v1/user/image',
      // End Profile Path //

      // Start Payment path //
      registerPayment: 'deals/v1/deals/register-payment/{dealId}',
      updatePaymentStatus: 'payments/v1/payments/update-payment-status',
      // End Payment path //

      // start offer path //
      offerDetails: 'dview/v1/deals/{offerId}',
      rejectOffer: 'deals/v1/deals/reject/{offerId}',
      acceptDeal: 'deals/v1/deals/accept',
      offerHistory: 'dview/v1/deals/revision-delta/{offerId}?numberOfDeltas={updateCounter}',
      reportOffer: 'offers/v1/offers/report',

      closeOfferOtp: 'deals/v1/deals/generateOtpForClose/{offerId}',
      closeOffer: 'deals/v1/deals/close',
      
      //---- rating-----/
      ratingQuestion: 'users/v1/user/rating/question',
      postUserRating: 'users/v1/user/rating',
      // End offer path //


      // Start Home page path //
      recentListing: 'offers/v1/offers/all',
      lastVuedListing: 'offers/v1/offers/lastViewed',
      recommendedListing: 'statistics/v1/analytics/offers/recommended',
      // End Home page path //

      // Start Coupon redeemtion path //
      allCouponList: '/wallet/v1/wallet/coupon-code/all'
      // End Coupon redeemtion path //

    },
    format: {
      date: 'DD/MM/YYYY',
      time: 'hh:mm a'
    }
  },
  privateRuntimeConfig: {
    API_SECRET: '123'
  },

  // Custom route
  router: {
   // middleware: ['isuserdeactivated'], //'maintenance', 
   middleware: ['maintenance', 'isRestaurant'], //'maintenance', 
   
    // extendRoutes(routes, resolve) {
    //   // routes.push({
    //   //   name: 'assetlinks',
    //   //   path: '/.well-known/assetlinks',
    //   //   component: resolve(__dirname, 'pages/well-known/assetlinks.vue')
    //   // })
    // }
  }
  
}
