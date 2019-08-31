<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import api from './workspace/api/api.config';
import router from './workspace/router/router';
@Component({})
export default class App extends Vue {
  created() {
    api.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
        }
        throw err;
      });
    });
    api.interceptors.request.use(
      function(config) {
        let token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `${token}`;
        }
        return config;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
  }
}
</script>

