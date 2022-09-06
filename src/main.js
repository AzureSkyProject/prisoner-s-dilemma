import Vue from 'vue'
import ElementUI from "element-ui";
import App from './App.vue'
import router from './router'
import store from './store'
import "element-ui/lib/theme-chalk/index.css";
import './common/less/animate.min.less'
// Vue自定义指令
import TLDs from "./common/fastRegister/directives";

Vue.use(TLDs);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
