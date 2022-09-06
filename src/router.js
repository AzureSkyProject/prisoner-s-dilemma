import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Single from './views/Single/index.vue'
import Calc from './views/Calc/index.vue'
import Blank from './views/Blank/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: { name: 'single' },
      children: [
        {
          path: 'single',
          name: 'single',
          component: Single
        },
        {
          path: 'calc',
          name: 'calc',
          component: Calc
        },
        {
          path: 'blank',
          name: 'blank',
          component: Blank
        }
      ]
    }
  ]
})
