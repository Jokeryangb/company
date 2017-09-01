import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Join from '@/components/join'
import JobsDetails from '@/components/JobsDetails'
import product from '@/components/product'
import methods from '@/components/methods'
import example from '@/components/example'
import about from '@/components/about'
import JavaEngineer from '@/components/JavaEngineer'
import operations from '@/components/operations'
import sales from '@/components/sales'
import bussiness from '@/components/Bussiness'

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
      path:'/product',
      component:product,
    },
    {
      path:'/JobsDetails',
      component:JobsDetails,
    },
    {
      path:'/methods',
      component:methods,
    },
    {
      path:'/example',
      component:example,
    },
    {
      path:'/about',
      component:about,
    },
    {
      path:'/JavaEngineer',
      component:JavaEngineer
    },
    {
      path:'/operations',
      component:operations
    },
    {
      path:'/sales',
      component:sales
    },
    {
      path:'/Business',
      component:bussiness
    },
    {
      path: '/index.html',
      component: Hello,
    }
  ]
})
