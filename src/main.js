import Vue from 'vue';
import App from './App.vue';
import routes from './routes';
import Router from 'vue-router';
import store from '@/store';

Vue.config.productionTip = false;
Vue.use(Router);
const router = new Router({routes});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

