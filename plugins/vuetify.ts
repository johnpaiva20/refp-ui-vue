import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '../../assets/icons/css/tst-element.css'
Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
}
);

// export default new Vuetify({
//   icons: {
//     iconfont: 'md',
//   },
//   theme: {
//     themes: {
//       light: {
//         primary: '#3e8f52',
//         secondary: '#b0bec5',
//         accent: '#8c9eff',
//         error: '#b71c1c',
//       },
//     },
//   },
// });
