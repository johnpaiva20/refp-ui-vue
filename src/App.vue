<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  //created() {
  //     api.interceptors.response.use(undefined, function(err) {
  //       return new Promise(function(resolve, reject) {
  //         if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
  //           this.$store.dispatch("logout");
  //           resolve.toString();
  //           reject.toString();
  //         }
  //         throw err;
  //       });
  //     });
  //     api.interceptors.request.use(
  //       function(config) {
  //         let token = localStorage.getItem("token");
  //         if (token) {
  //           config.headers.Authorization = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  //         }
  //         return config;
  //       },
  //       function(error) {
  //         return Promise.reject(error);
  //       }
  //     );
  //   }
})
export default class App extends Vue {}
</script>

