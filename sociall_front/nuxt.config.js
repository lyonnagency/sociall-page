export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    //title: 'Social Events' || '',
    titleTemplate: 'Sociall Events | %s',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''},
      {name: 'theme-color', content: '#63507C'},
      {name: 'msapplication-navbutton-colo', content: '#63507C'},
      {name: 'apple-mobile-web-app-status-bar-style', content: '#63507C'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      {rel:'canonical', href:'http://sociallevents.com'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */

  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    '@assets/styles/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/validator'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  server: {
    //host: '192.168.100.4',
    //host: '192.168.1.86',

  },
  axios: {
    //baseURL: 'http://192.168.100.4:8000',
    //baseURL: 'http://192.168.1.86:8000',
    baseURL: 'http://api.sociallevents.com/',
    credentials: true,
    proxyHeaders: false,
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
