import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import messages from './messages'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages
})

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
