import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/howtouse',
    name: 'HowToUse',
    component: () => import('../views/HowToUse.vue'),
  },
  {
    path: '/instaone',
    name: 'InstaOneView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/InstaOne.vue'),
  },

  {
    path: '/instamany',
    name: 'InstaManyView',
    component: () => import('../views/InstaMany.vue'),
  },
  {
    path: '/instasum',
    name: 'InstaSumView',
    component: () => import('../views/InstaSum.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
