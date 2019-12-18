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

      <v-col cols="3" class="mr-5">
        <label class="text-end label d-block primary--text">Ricardo Lourenço de Souza</label>
        <label class="text-end d-block primary--text secondary-label">Diretor Geral</label>
      </v-col>

      <div class="line mr-5"></div>

      <v-tooltip v-for="item in toolbarItens" v-bind:key="item.id" bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" v-on:click.stop="handle(item)">
            <v-icon class="primary--text">{{item.icon}}</v-icon>
          </v-btn>
        </template>
        <span>{{item.description}}</span>
      </v-tooltip>

      <v-progress-linear slot="extension" :size="100" :indeterminate="false"></v-progress-linear>
    </v-app-bar>
    <menu-sidebar v-model="collapse" />
    <actions-sidebar v-model="opened" :model="model" />
  </nav>
</template>

<style lang="scss">
.v-toolbar__extension {
  padding: 0px !important;
}
.label {
  font-size: 15px;
}
.secondary-label {
  font-size: 12px;
}
.line {
  border-style: solid;
  border-left-width: 1px;
  border-color: #3e8f52;
  height: 50px;
}
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { toolbarItens } from '../router/router';
import SideBar from './SideBar.vue';
import ActionsSideBar from './ActionsSideBar.vue';
@Component({
  components: {
    'menu-sidebar': SideBar,
    'actions-sidebar': ActionsSideBar,
  },
})
export default class Toolbar extends Vue {
  collapse: Boolean | null = null;
  opened: Boolean | null = null;
  toolbarItens = toolbarItens;
  model: string | null = null;

  logout() {
    this.$store.dispatch('logout').then(() => {
      this.$router.push('/');
    });
  }

  collapseDrawer() {
    this.collapse = !this.collapse;
  }

  collapseActionsDrawer(model: string) {
    this.model = model;
    this.opened = !this.opened;
  }

  handle(item: any) {
    let description = item.description;
    switch (item.action) {
      case 'logout':
        this.logout();
        break;
      case 'notifications':
        this.collapseActionsDrawer(description);
        break;
      case 'settings':
        this.collapseActionsDrawer(description);
        break;
    }
  }
}
</script>



