import { createRouter, createWebHistory } from 'vue-router'
import ByNotesView from '../views/ByNotesView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'byNotes',
      component: ByNotesView
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
