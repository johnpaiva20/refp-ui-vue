<template>
  <nav>
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
      <v-col cols="3" class="mr-10">
        <label class="label">Ricardo Lourenço de Souza</label>
      </v-col>
      <v-btn
        icon
        v-for="item in toolbarItens"
        v-bind:key="item.id"
        v-on:click.stop="handle(item.action)"
      >
        <v-icon class="primary--text">{{item.icon}}</v-icon>
      </v-btn>
      <v-progress-linear slot="extension" :size="100" :indeterminate="false"></v-progress-linear>
    </v-app-bar>
    <sidebar v-model="collapse" />
    <actions-sidebar v-model="opened" />
  </nav>
</template>

<style lang="scss">
.v-toolbar__extension {
  padding: 0px !important;
}
.label {
  font-size: 15px;
}
</style>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { toolbarItens } from '../router/router';
import SideBar from './SideBar.vue';
import ActionsSideBar from './ActionsSideBar.vue';
@Component({
  components: {
    sidebar: SideBar,
    'actions-sidebar': ActionsSideBar,
  },
})
export default class Toolbar extends Vue {
  collapse: Boolean | null = null;
  opened: Boolean | null = null;
  toolbarItens = toolbarItens;

  logout() {
    this.$store.dispatch('logout').then(() => {
      this.$router.push('/');
    });
  }

  collapseDrawer() {
    this.collapse = !this.collapse;
  }

  collapseActionsDrawer() {
    this.opened = !this.opened;
  }

  handle(action: string) {
    switch (action) {
      case 'logout':
        this.logout();
        break;
      case 'notifications':
        this.collapseActionsDrawer();
        break;
    }
  }
}
</script>



