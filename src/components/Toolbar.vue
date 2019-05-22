<template>
  <v-toolbar fixed extended extension-height="7">
    <v-spacer></v-spacer>
    <v-btn large icon>
      <v-icon size="24" class="primary--text" v-on:click="logout()">power_settings_new</v-icon>
    </v-btn>
    <v-progress-linear slot="extension"  :size="150" :indeterminate="false" class="ml-0"></v-progress-linear>
  </v-toolbar>
</template>

 <script>
import router from "../router/router";

export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      router.push({ path: "/" });
    }
  }
};
</script>


