import { createRouter, createWebHistory } from 'vue-router';
const AuthorizationComponent = () => import('../components/Screens/AuthorizationScreen/AuthorizationScreen.vue');
const Main = () => import('../components/Screens/Main.vue');
const ItemScreen = () => import('../components/Screens/ItemScreen.vue');
const OwnListings = () => import('../components/Screens/OwnListings.vue');
const PageNotFound = () => import('../components/Screens/PageNotFound.vue');
const CartComponent = () => import('../components/ReusableComponents/CartComponent.vue');

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
      path: '/own-listings',
      name: 'own-listings',
      component: () => import('../components/Screens/OwnListings.vue')
    },

    {
      path: '/:catchAll(.*)',
      component: () => import('../components/Screens/PageNotFound.vue')
    }
    
  ]
})


router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && to.name !== 'register' && !localStorage.getItem('token')) {
    next('/auth/login');
  } else {
    next();
  }
});



export default router