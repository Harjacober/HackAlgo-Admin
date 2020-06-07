import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { Login, Register, Recover, ChangePassword } from '../views/Auth';
import { isUserLoggedIn } from '../utils/auth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'default' },
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { layout: 'blank', guest: true },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { layout: 'blank', guest: true },
  },
  {
    path: '/recover-password',
    name: 'recover-password',
    component: Recover,
    meta: { layout: 'blank', guest: true },
  },
  {
    path: '/change-password',
    name: 'change-password',
    component: ChangePassword,
    meta: { layout: 'blank', guest: true },
  },
  {
    path: '/contest',
    name: 'contests',
    component: () => import(/* webpackChunkName: "contest" */ '../views/contest/index.vue'),
  },
  {
    path: '/problemset',
    name: 'problem set',
    component: () => import(/* webpackChunkName: "problemset" */ '../views/problemSet/index.vue'),
  },
  {
    path: '/problemset/create',
    name: 'create problemset',
    component: () => import(/* webpackChunkName: "create-problemset" */ '../views/problemSet/create.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // Non-guest routes require authentication
  // And guest routes are only accessible to non-logged in users
  if (isUserLoggedIn()) {
    if (to.matched.some(record => record.meta.guest)) {
      next({
        name: 'home',
      });
    } else {
      next();
    }
  } else if (!to.matched.some(record => record.meta.guest)) {
    next({
      name: 'login',
      params: { nextUrl: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
