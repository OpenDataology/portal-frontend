/*
main.js

Copyright (c) 2022 The OpenDataology Authors 
All rights reserved.

SPDX-License-Identifier: Apache-2.0
*/



import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import VueAxios from 'vue-axios'
import ElementUI from '../src/pulgins/elementUI'
import './assets/styles/styles.css'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en'

// Vue.use(ElementUI, { locale })
Vue.use(router)
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // var _this = this;
  if(to.meta.requireAuth){
    if(JSON.parse(sessionStorage.getItem("userId"))==null){
      console.log('not login',)
      alert("please login")
      return;
      // next('licenseAll')
    } else {
      next()
    }
  }
  else {
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
//   render: h => h(App)
// }).$mount('#app')
