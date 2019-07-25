const pkg = require('./package')


module.exports = {
  server: {
    port: 82,
    host: '0.0.0.0'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'vvild 小野雾化电子烟 - 小野官方网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { hid: 'keywords', name: 'keywords', content: pkg.keywords[0] }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/png', href: '/logo-icon.jpg' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {},

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/route',
    { src: '~plugins/ba.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {},
    publicPath: '//vvild-static.tcka.cn/resources/'
  },
}
