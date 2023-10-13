import { createRouter, createWebHistory } from "vue-router";
import Shop from "../components/Shop.vue";
import Cart from "../components/Cart.vue";
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    }
  ]
})

export default router

