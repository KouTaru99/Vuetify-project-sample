/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { VApp, VMain, VContainer, VRow, VCol, VCard, VImg, VBtn, VIcon, VOverlay, VProgressCircular, VSnackbar } from 'vuetify/components'
import { Ripple } from 'vuetify/directives'

// Import styles một lần
import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  components: {
    VApp,
    VMain,
    VContainer,
    VRow,
    VCol,
    VCard,
    VImg,
    VBtn,
    VIcon,
    VOverlay,
    VProgressCircular,
    VSnackbar
  },
  directives: {
    Ripple: {
      default: Ripple,
      props: ['disabled'],
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#d50000',
          secondary: '#111113',
          surface: '#202124',
          'surface-variant': '#303134',
        },
      },
    },
  },
})
