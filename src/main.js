import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTheMask from 'vue-the-mask';
import router from './routes';
import money from 'v-money';
import InputFacade from 'vue-input-facade';
import "./global.css";

Vue.config.productionTip = false;
Vue.use(VueTheMask);
Vue.use(money, { precision: 2 });
Vue.use(InputFacade);

Vue.prototype.$bus = new Vue();
new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
