import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-icons-sharp/material-icons-sharp.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Import our design system
import './assets/design-system.css'

const pinia = createPinia()
const app = createApp(App)

app.use(Quasar, {
  plugins: {
    // Notify,
    // Dialog,
    // Loading
  },
  config: {
    brand: {
      primary: '#8BC34A',   // EAN Green
      secondary: '#1E4788', // EAN Blue
      accent: '#757B7A',    // EAN Gray
      
      dark: '#1d1d1d',
      
      positive: '#21BA45',
      negative: '#C10015',
      info: '#31CCEC',
      warning: '#F2C037'
    }
  }
})

app.use(pinia)
app.use(router)

app.mount('#app')