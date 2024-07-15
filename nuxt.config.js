
export default {
  ssr: false,
  target: 'static',
  generate: {
    dir: 'dist' // this is the default value, so it may not be necessary
  },
  head: {
    titleTemplate: '%s - Guiding Light',
    title: 'Guiding Light',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { hid: 'description', name: 'description', content: 'Guiding Light - Empowering the community through various activities, projects, and services.' },
      { name: 'format-detection', content: 'telephone=no' },
      // Open Graph / Facebook
      { property: 'og:site_name', content: 'Guiding Light' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.guiding-light.com' },
      { property: 'og:title', content: 'Guiding Light' },
      { property: 'og:description', content: 'Empowering the community through various activities, projects, and services.' },
      { property: 'og:image', content: '/images/og-image.jpg' },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@GuidingLight' },
      { name: 'twitter:url', content: 'https://www.guiding-light.com' },
      { name: 'twitter:title', content: 'Guiding Light' },
      { name: 'twitter:description', content: 'Empowering the community through various activities, projects, and services.' },
      { name: 'twitter:image', content: '/images/twitter-image.jpg' },
      // Additional meta tags
      { name: 'keywords', content: 'guiding light, community, activities, projects, services, empowerment' },
      { name: 'author', content: 'Guiding Light Team' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/gl.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap' },
    ],
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
    // Extend Webpack configuration as needed
    extend(config, { isDev, isClient }) {
      if (isClient) {
        // Add custom Webpack configuration here
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  }
}