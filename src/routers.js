/**
 * Created by liang.shan on 2016/12/2.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from './components/404.vue'
import Dashboard from './components/dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

export default router
