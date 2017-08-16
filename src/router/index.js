import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Join from '@/components/join'
import JobsDetails from '@/components/JobsDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello,

    },
    {
      path:'/join',
      component:Join,
    },
    {
      path:'/JobsDetails',
      component:JobsDetails,
    },
    {
      path: '/index.html',
      component: Hello,
    }
  ]
})
