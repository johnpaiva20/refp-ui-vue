<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<style>
</style>

<script>
import api from "./workspace/api/api.config";
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  },
  created() {
    api.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
          resolve.toString();
          reject.toString();
        }
        throw err;
      });
    });
    api.interceptors.request.use(
      function(config) {
        let token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
        }
        return config;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
  }
};
</script>