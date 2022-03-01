import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        component: () => import('../views/licenseAll.vue')
      },
      {
        path: '/licenseAll',
        component: () => import('../views/licenseAll.vue')
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
      {
        path:"/searchLicense",
        component:()=>import("../components/Search/searchLicense.vue"),
      },{
        path:"/searchDataset",
        component:()=>import("../components/Search/searchDataset.vue"),
      },{
        path:"/Export",
        component:()=>import("../components/Export/Export.vue"),
      },,{
        path:"/licenseTypeAll",
        component:()=>import("../views/licenseTypeAll.vue"),
      }
    
    ]
  })