export default {
  nitro: {
    preset: 'firebase'
},
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'birthday-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    // [
    //   '@nuxtjs/firebase', 
    //   {
    //     config: {
    //       apiKey: "AIzaSyCsxYxi9zlUPuvoShKjTrPYP0BjU4qFCiM",
    //       authDomain: "cake-force.firebaseapp.com",
    //       projectId: "cake-force",
    //       storageBucket: "cake-force.appspot.com",
    //       messagingSenderId: "56652711190",
    //       appId: "1:56652711190:web:224ecd82da95779e427c37"
    //     },
    //     services: {
    //       firestore: true
    //     }
    //   }
    // ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
}
