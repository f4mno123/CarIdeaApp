import { createRouter, createWebHistory } from 'vue-router';
import AuthorizationComponent from '../components/AuthorizationComponents/Authorization.vue';
import Main from '../components/Main.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      children: [
        {
          path: 'login',
          component: AuthorizationComponent,
          props: { typeOfAuthorization: 'login'}
        },
        {
          path: 'register',
          component: AuthorizationComponent,
          props: { typeOfAuthorization: 'register'}
        }

      ]
    },
    {
      path: '/main',
      component: Main
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/main'
    }
  ]
})



export default router
