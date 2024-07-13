import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,
  target: 'static',
  head: {
    titleTemplate: '%s - web-wizard',
    title: 'web-wizard',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    '~/assets/styles/main.css',
    '~/assets/css/tailwind.css',
  ],
  plugins: ['@/plugins/vuetify.js', '@/plugins/supabase.js'],
  publicRuntimeConfig: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: './vuetify.options.js',
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        }
      }
    }
  },
  build: {
    extend(config, ctx) {}
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  }
}








// import colors from 'vuetify/es5/util/colors'
//
// export default {
//   // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
//   ssr: false,
//
//   // Target: https://go.nuxtjs.dev/config-target
//   target: 'static',
//
//   // Global page headers: https://go.nuxtjs.dev/config-head
//   head: {
//     titleTemplate: '%s - web-wizard',
//     title: 'web-wizard',
//     htmlAttrs: {
//       lang: 'en',
//     },
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: '' },
//       { name: 'format-detection', content: 'telephone=no' },
//     ],
//     link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
//   },
//
//   // Global CSS: https://go.nuxtjs.dev/config-css
//   css: [
//     '~/assets/styles/main.css',
//     '~/assets/css/tailwind.css',
//   ],
//
//   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
//   plugins: ['@/plugins/vuetify.js', '@/plugins/supabase.js'],
//
//   // Add environment variables
//   publicRuntimeConfig: {
//     SUPABASE_URL: process.env.SUPABASE_URL,
//     SUPABASE_KEY: process.env.SUPABASE_KEY,
//   },
//
//   // Auto import components: https://go.nuxtjs.dev/config-components
//   components: true,
//
//   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
//   buildModules: [
//     // https://go.nuxtjs.dev/vuetify
//     '@nuxtjs/vuetify',
//     '@nuxtjs/eslint-module',
//     '@nuxtjs/tailwindcss',
//     '@nuxtjs/composition-api/module',
//   ],
//
//   // Modules: https://go.nuxtjs.dev/config-modules
//   modules: [
//     '@nuxtjs/tailwindcss',
//
//   ],
//
//   // // Axios module configuration: https://go.nuxtjs.dev/config-axios
//   // axios: {
//   //   // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
//   //   baseURL: process.env.BASE_URL || 'http://localhost:3000',
//   // },
//
//
//   // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
//   vuetify: {
//     customVariables: ['~/assets/variables.scss'],
//     optionsPath: './vuetify.options.js',
//     theme: {
//       dark: false,
//       themes: {
//         light: {
//           primary: '#1976D2',
//           secondary: '#424242',
//           accent: '#82B1FF',
//           error: '#FF5252',
//           info: '#2196F3',
//           success: '#4CAF50',
//           warning: '#FFC107'
//         }
//       }
//     }
//   },
//
//   // Build Configuration: https://go.nuxtjs.dev/config-build
//   build: {
//     extend(config, ctx) {}
//   },
//
//   // Server Configuration
//   server: {
//     host: '0.0.0.0', // Allow access from external devices
//     port: 3000, // or any port you prefer
//   }
// }