import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/atendente/TabsPage.vue'
import TabsPageCliente from '../views/cliente/TabsPageCliente.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'atendente/tab1'
  },
  {
    path: '/atendente/',
    component: TabsPage,
    children: [
      {
        path: '/atendente',
        redirect: 'atendente/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/atendente/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/atendente/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/atendente/Tab3Page.vue')
      }
    ]
  },
  {
    path: '/cliente/',
    component: TabsPageCliente,
    children: [
      {
        path: '/cliente',
        redirect: 'cliente/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/cliente/Tab1PageCliente.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/cliente/Tab2PageCliente.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/cliente/Tab3PageCliente.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
