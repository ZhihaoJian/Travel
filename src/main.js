import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes/Routes'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Store from './store/index';
import 'swiper/dist/css/swiper.css'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont.css'
import 'fastclick'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(VueRouter)

new Vue({
  router,
  store: Store,
  render: h => h(App)
}).$mount('#app')
