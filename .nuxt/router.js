import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ff580d76 = () => interopDefault(import('..\\pages\\bill.vue' /* webpackChunkName: "pages/bill" */))
const _09092980 = () => interopDefault(import('..\\pages\\order.vue' /* webpackChunkName: "pages/order" */))
const _0fa85a3e = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _6bf57548 = () => interopDefault(import('..\\pages\\stock.vue' /* webpackChunkName: "pages/stock" */))
const _ac4cc400 = () => interopDefault(import('..\\pages\\table.vue' /* webpackChunkName: "pages/table" */))
const _1f832df8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/bill",
    component: _ff580d76,
    name: "bill"
  }, {
    path: "/order",
    component: _09092980,
    name: "order"
  }, {
    path: "/register",
    component: _0fa85a3e,
    name: "register"
  }, {
    path: "/stock",
    component: _6bf57548,
    name: "stock"
  }, {
    path: "/table",
    component: _ac4cc400,
    name: "table"
  }, {
    path: "/",
    component: _1f832df8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
