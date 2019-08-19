import Vue from 'vue';
import App from './App.vue';
import router from './workspace/router/router';
import store from './workspace/store/store';
import moment from 'moment'

import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './assets/icons/css/tst-element.css'
Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#3e8f52',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
  },
});


import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

Vue.filter('formatDate', function (value:Date) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
});


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // vuetify,
  render: (h) => h(App),
}).$mount('#app');
