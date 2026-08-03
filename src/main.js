import './assets/main.css'
import './assets/fonts.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/tokens.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
