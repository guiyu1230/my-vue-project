import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Details from '@/pages/details'
import Car from '@/pages/details/car'
import Earth from '@/pages/details/earth'
import Loud from '@/pages/details/loud'
import Hill from '@/pages/details/hill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
    	path: '/details',
    	name: 'Details',
    	component: Details,
      redirect: '/details/earth',
      children:[
        {
          path: 'earth',
          name: 'Earth',
          component: Earth,
        },
        {
          path: 'loud',
          name: 'Loud',
          component: Loud,
        },
        {
          path: 'car',
          name: 'Car',
          component: Car,
        },
        {
          path: 'hill',
          name: 'Hill',
          component: Hill,
        }
      ]
    }
  ]
})
