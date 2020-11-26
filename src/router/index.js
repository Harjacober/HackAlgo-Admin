import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import {
  Login, Register, Recover, ChangePassword, VerifyCode,
} from '../views/Auth';


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
    meta: { layout: 'blank' },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { layout: 'blank' },
  },
  {
    path: '/recover-password',
    name: 'recover-password',
    component: Recover,
  },
  {
    path: '/change-password',
    name: 'change-password',
    component: ChangePassword,
  },
  {
    path: '/verify-code',
    name: 'verify-code',
    component: VerifyCode,
    meta: { layout: 'blank' },
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

export default router;
