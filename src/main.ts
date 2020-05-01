import Vue from 'vue'
import App from './components/App'
import store from './store/'
import '@/assets/css/index.css'
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
