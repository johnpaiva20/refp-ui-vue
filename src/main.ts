import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts';
import vuetify from '../plugins/vuetify';
import App from './App.vue';
import router from './app/navigator';
import DateUtil from './domain/utils/date_util';
import ProjectStatus from './domain/enums/ProjectStatusEnum';
import store from './domain/store';

Vue.use(BootstrapVue);
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.filter('formatDate', (value: Date) => DateUtil.formatDate(value));
Vue.filter('projectStatus', (value: string) => ProjectStatus.projectStatus(value));

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
