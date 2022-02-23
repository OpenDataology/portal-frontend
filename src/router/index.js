import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/licenseAll',
        component: () => import('../views/licenseAll.vue')
      },{
        path: '/HelloWorld',
        component: () => import('../components/HelloWorld.vue')
      },{
        path: '/licenseInfo',
        component: () => import('../views/licenseInfo.vue'),
        props: route => ({id: route.query.id})
      },{
        path: '/dataSetAll',
        component: () => import('../views/dataSetAll.vue'),
      },{
        path: '/dataSetInfo',
        component: () => import('../views/dataSetInfo.vue'),
        props: route => ({id: route.query.id})
      },
    
    ]
  })