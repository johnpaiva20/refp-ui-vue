<template>
  <v-app-bar fixed app :clipped-left="true" extended extension-height="7">
    <v-app-bar-nav-icon @click="collapseDrawer">
      <v-icon color="primary">menu</v-icon>
    </v-app-bar-nav-icon>
    <b-img
      src="https://static.wixstatic.com/media/2e3c1d_01c80b05edac4ad89bee60d42f622cba~mv2.png/v1/fill/w_141,h_36,al_c,q_80,usm_0.66_1.00_0.01/2e3c1d_01c80b05edac4ad89bee60d42f622cba~mv2.webp"
      fluid
      alt="Responsive image"
      width="100px"
    ></b-img>
    <v-spacer></v-spacer>
    <v-btn
      icon
      v-for="item in toolbarItens"
      v-bind:key="item.id"
      v-on:click="handle(item.action)"
    >
      <v-icon  class="primary--text">{{item.icon}}</v-icon>
    </v-btn>
    <v-progress-linear slot="extension" :size="100" :indeterminate="false"></v-progress-linear>
  </v-app-bar>
</template>

<style lang="scss">
.v-toolbar__extension {
  padding: 0px !important;
}
</style>

 <script>
export default {
  data() {
    return {
      collapse: Boolean,
      toolbarItens: [
        // {
        //   id: 2,
        //   description: 'notifications',
        //   icon: 'notifications',
        //   action: 'notifications',
        // },
        {
          id: 1,
          description: 'logout',
          icon: 'power_settings_new',
          action: 'logout',
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/');
      });
    },
    collapseDrawer() {
      this.collapse = !this.collapse;
      this.$emit('update:collapse', this.collapse);
    },
    handle(action) {
      switch (action) {
        case 'logout':
          this.logout();
          break;
      }
    },
  },
};
</script>


