import { createRouter, createWebHistory } from 'vue-router'
import InicioSesion from '../views/autenticacion/InicioSesion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio-sesion',
      component: InicioSesion
    },
    {
      path: '/olvido-password',
      name: 'olvido-password',
      component: () => import('../views/autenticacion/OlvidoPassword.vue')
    },    
  ],
})

export default router