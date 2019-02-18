// const pkg = require('./package')
import webpack from 'webpack'
const meta = require('./meta')
module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: meta.name,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: meta.description
      },
      {
        name: 'keywords',
        content: meta.keywords
      },
      {
        name: 'image',
        content: meta.image
      },
      // Google
      {
        itemprop: 'name',
        content: meta.name
      },
      {
        itemprop: 'description',
        content: meta.description
      },
      {
        itemprop: 'image',
        content: meta.image
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:title',
        content: meta.name
      },
      {
        name: 'twitter:description',
        content: meta.description
      },
      // Open Graph
      {
        name: 'og:title',
        content: meta.name
      },
      {
        name: 'og:description',
        content: meta.description
      },
      {
        name: 'og:image',
        content: meta.image
      },
      {
        name: 'og:url',
        content: meta.url
      },
      {
        name: 'og:site_name',
        content: meta.name
      },
      {
        name: 'og:type',
        content: 'website'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        lazyload: true,
        href:
          'https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3F51B5' },

  /*
   ** Global CSS
   */
  css: ['~assets/styles/main'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-lazyload'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // Doc: https://bootstrap-vue.js.org/docs/
    [
      'bootstrap-vue/nuxt',
      {
        css: false
      }
    ],
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    proxy: true
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api/': {
      target:
        'http://www.behance.net/v2/users/Vaanres/projects?api_key=A3XrFvC6jnX6dLGSipermgOApEKZ6AU6',
      pathRewrite: { '^/api/': '' }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        _: 'lodash'
        // ...etc.
      })
    ]
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}
