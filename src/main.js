import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Імпортуємо всі ваші стилі
import './assets/css/style.css'
import './assets/css/header.css'
import './assets/css/middle.css'
import './assets/css/footer.css'
import './assets/css/responsive.css'

createApp(App).use(router).mount('#app')