import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'
import Contact from '../pages/Contact.vue'
import ProductDetail from '../pages/ProductDetail.vue'

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
    path: '/product/:id', 
    name: 'ProductDetail',
    component: ProductDetail,
    props: true 
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router