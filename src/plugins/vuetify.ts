/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#111113',
          secondary: '#ccc',
          // Thêm các màu custom
        },
      },
      dark: {
        colors: {
          primary: '#d50000',  // Google's blue color in dark mode,
          secondary: '#111113',
          surface: '#202124',  // Dark background
          'surface-variant': '#303134',  // Slightly lighter dark
        },
      },
    },
  },
})
