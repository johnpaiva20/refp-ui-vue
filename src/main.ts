import Vue from 'vue';
import App from './App.vue';
import router from './workspace/router/router';
import store from './workspace/store/store';
import moment from 'moment'

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

Vue.filter('formatDate', function (value: Date) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
});

import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

import vuetify from '../plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
