import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

// Async load FontAwesome
const loadFontAwesome = async () => {
  await import('@fortawesome/fontawesome-free/css/all.css')
}
loadFontAwesome()

const app = createApp(App)
app.use(router)
app.mount('#app')
