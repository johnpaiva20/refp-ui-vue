import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import moment from 'moment'

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

import "chart.js";
import "hchs-vue-charts";
Vue.use(window.VueCharts);

import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#3e8f52',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
  },
});

import Vuebar from 'vuebar';
Vue.use(Vuebar);

import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);

import fontello from './assets/icons/css/refp-element-icon-font.css';
Vue.use(fontello);


Vue.config.productionTip = false;

Vue.filter('formatDate', function (value) {

  if (value) {

    return moment(String(value)).format('DD/MM/YYYY')

  }

});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
