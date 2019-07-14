<template>
  <v-toolbar  fixed extended extension-height="7" width="100" >
    <!-- <v-toolbar-side-icon>
      <v-icon color="primary">menu</v-icon>
    </v-toolbar-side-icon> -->
    <b-img
      src="https://static.wixstatic.com/media/2e3c1d_01c80b05edac4ad89bee60d42f622cba~mv2.png/v1/fill/w_141,h_36,al_c,q_80,usm_0.66_1.00_0.01/2e3c1d_01c80b05edac4ad89bee60d42f622cba~mv2.webp"
      fluid
      alt="Responsive image"
      width="100px"
    ></b-img>
    <v-spacer></v-spacer>
    <v-btn large icon v-for="item in toolbarItens" v-bind:key="item.id">
      <v-icon size="24" class="primary--text" v-on:click="handle(item.action)">{{item.icon}}</v-icon>
    </v-btn>
    <v-progress-linear slot="extension" :size="100" :indeterminate="false"></v-progress-linear>
  </v-toolbar>
</template>

<style>
.v-toolbar__extension {
  padding: 0px !important;
}

.v-progress-linear {
  -moz-transform: scale(1, -1);
  -webkit-transform: scale(1, -1);
  -o-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  transform: scale(1, -1);
}
</style>

 <script>
import router from "../router/router";
export default {
  data() {
    return {
      toolbarItens: [
        {
          id: 2,
          description: "notifications",
          icon: "notifications",
          action: "notifications"
        },
        {
          id: 1,
          description: "logout",
          icon: "power_settings_new",
          action: "logout"
        }
      ]
    };
  },
  methods: {
    logout() {
      router.push({ path: "/" });
    },

    handle(action) {
      switch (action) {
        case "logout":
          this.logout();
          break;
      }
    }
  }
};
</script>


