import { createRouter, createWebHistory } from 'vue-router';
const AuthorizationComponent = () => import('../components/Screens/AuthorizationScreen/AuthorizationScreen.vue');
const Main = () => import('../components/Screens/Main.vue');
const ItemScreen = () => import('../components/Screens/ItemScreen.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      children: [
        {
          path: 'login',
          component: AuthorizationComponent,
          props: { typeOfAuthorization: 'login'},
          name: 'login'
        },
        {
          path: 'register',
          component: AuthorizationComponent,
          props: { typeOfAuthorization: 'register'},
          name: 'register'
        }

      ]
    },
    {
      path: '/main',
      component: Main,
      name: 'main'
    },
    {
      path: '/item/:postId',
      name: 'item',
      component: () => import('../components/Screens/ItemScreen.vue'),
      props: true
    },
    {
      path: '/:catchAll(.*)',
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('token')) {
          next('/main');
        }
        next('/login');
      }
    }
  ]
})



export default router
