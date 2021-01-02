import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import router from './router'
import 'vant/lib/index.css';
import { Popup } from 'vant';

Vue.config.productionTip = false
Vue.use(Vant)
Vue.use(Popup)

Vue.prototype.$EventBus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
