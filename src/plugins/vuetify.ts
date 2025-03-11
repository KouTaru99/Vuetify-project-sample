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
import { VApp, VMain, VContainer, VRow, VCol, VCard, VImg, VBtn, VIcon, VOverlay, VProgressCircular, VSnackbar, VSelect } from 'vuetify/components'
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
    VSnackbar,
    VSelect
  },
  directives: {
    Ripple: {
      default: Ripple,
      props: ['disabled'],
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
    },
  },
})
