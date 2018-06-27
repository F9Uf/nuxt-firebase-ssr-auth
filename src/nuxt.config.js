module.exports = {
  /*
  ** Headers of the page
  */
  head: {
<<<<<<< HEAD
    title: 'CALUMOZ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Calumoz is a Money Management Online' }
=======
    title: 'Nuxt.js * Firebase PWA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js * Firebase = SPA * SSR * PWA * Serverless' }
>>>>>>> 8acbe69e0cd73ecd7d12b019e83aa61b8233826c
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildDir: '../functions/nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    babel: {
      presets: [
        'env',
        'stage-0'
      ],
      plugins: [
        ['transform-runtime', {
          polyfill: true,
          regenerator: true
        }],
      ],
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
<<<<<<< HEAD
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    },
    vendor: [
      '@/plugins/firebase-client-init.js'
    ]
=======
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
>>>>>>> 8acbe69e0cd73ecd7d12b019e83aa61b8233826c
  },
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
<<<<<<< HEAD
    name: 'CALUMOZ',
    lang: 'en'
  },
  plugins: [
    {src: '@/plugins/firebase-client-init.js' , ssr: false},
    {src: '@/plugins/auth-cookie.js', ssr: false}
  ],
  serverMiddleware: [
    '~/serverMiddleware/validateFirebaseIdToken'
  ]
=======
    name: 'Nuxt.js Firebase PWA',
    lang: 'ja'
  }
>>>>>>> 8acbe69e0cd73ecd7d12b019e83aa61b8233826c
}
