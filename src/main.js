import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import './assets/styles/styles.css'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(router)
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
//   render: h => h(App)
// }).$mount('#app')
