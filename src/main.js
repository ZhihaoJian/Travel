import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes/Routes'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont.css'
import 'fastclick'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
