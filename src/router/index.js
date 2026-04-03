import { createRouter, createWebHistory } from 'vue-router'

// Імпорт компонентів сторінок
import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import Contact from '../pages/Contact.vue'
import ProductDetail from '../pages/ProductDetail.vue' // Додаємо нову сторінку

const routes = [
  { 
    path: '/', 
    name: 'Home',
    component: Home 
  },
  { 
    path: '/catalog', 
    name: 'Catalog',
    component: Catalog 
  },
  { 
    path: '/contact', 
    name: 'Contact',
    component: Contact 
  },
  { 
    // Динамічний маршрут для деталей товару
    path: '/product/:id', 
    name: 'ProductDetail',
    component: ProductDetail,
    props: true // Дозволяє передавати :id як prop у компонент
  }
]

const router = createRouter({
  // Використовуємо історію браузера
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Прокрутка вгору при переході на нову сторінку
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router