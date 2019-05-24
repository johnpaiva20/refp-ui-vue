<template>
  <v-toolbar fixed extended extension-height="7" width="100">
    <div class="logoMenu">
      <b-img
        src="https://static.wixstatic.com/media/2e3c1d_01c80b05edac4ad89bee60d42f622cba~mv2.png/v1/fill/w_141,h_36,al_c,q_80,usm_0.66_1.00_0.01/2e3c1d_01c80b05edac4ad89bee60d42f622cba~mv2.webp"
        fluid
        alt="Responsive image"
      ></b-img>
    </div>
    <v-spacer></v-spacer>
    <v-btn large icon>
      <v-icon size="24" class="primary--text">notifications</v-icon>
    </v-btn>
    <v-btn large icon>
      <v-icon size="24" class="primary--text" v-on:click="logout()">power_settings_new</v-icon>
    </v-btn>
    <v-progress-linear slot="extension" :size="100" :indeterminate="false"></v-progress-linear>
  </v-toolbar>
</template>


<style>
.logoMenu {
  background-color: #f5f5f5;
  margin-left: 18px;
  margin-top: 10px;
}
</style>

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


