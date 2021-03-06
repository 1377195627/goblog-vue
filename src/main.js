// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMDCAdapter from 'vue-mdc-adapter'
import './theme.scss'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueMDCAdapter)

Vue.prototype.$http = axios

axios.get("/api/name")
  .then(r=>{
    if (r.data === 'blog no install') {
      router.push({path:"/install"})
    }
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
