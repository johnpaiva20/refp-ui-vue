import Vue from 'vue'
import App from './App.vue'


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)


import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css' 
Vue.use(Vuetify, {
  iconfont: 'md',
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
