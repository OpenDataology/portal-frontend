import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [

      /**
       * 
       * Home page
       * 
       */
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
     

      /**
       * Search page
       * 
       *  */ 



     {
        path:"/typeLicense",
        component:()=>import("../views/typeLicense.vue"),
      },{
        path:"/typeDataSpecificLicense",
        component:()=>import("../views/typeDataSpecificLicense.vue"),
      },{
        path:"/typeDataSourceTermsofUse",
        component:()=>import("../views/typeDataSourceTermsofUse.vue"),
      },
      /**
       * Search components
       * 
       *  */ 
       {
        path:"/searchLicense",
        component:()=>import("../components/Search/searchLicense.vue"),
      },{
        path:"/searchDataset",
        component:()=>import("../components/Search/searchDataset.vue"),
      },
      {
        path:"/searchTypeLicense",
        component:()=>import("../components/Search/searchTypeLicense.vue"),
      },
      {
        path:"/searchTypeDataSpecificLicense",
        component:()=>import("../components/Search/searchTypeDataSpecificLicense.vue"),
      },{
        path:"/searchTypeDataSourceTermsofUse",
        component:()=>import("../components/Search/searchTypeDataSourceTermsofUse.vue"),
      },{
        path:"/searchDatasetInfo",
        component:()=>import("../components/Search/searchDatasetInfo.vue"),
      },{
        path:"/searchLicenseInfo",
        component:()=>import("../components/Search/searchLicenseInfo.vue"),
      },


      /**
       * 
       * Export
       * 
       * 
       */
      {
        path:"/Export",
        component:()=>import("../components/Export/Export.vue"),
      }
    
    ]
  })