<template>
  <v-navigation-drawer  v-model="show" app temporary right width="400">
    <v-toolbar flat color="primary">
      <v-toolbar-title class="white--text">{{component}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        v-for="item in toolbarItens"
        v-bind:key="item.id"
        v-on:click="handle(item)"
      >
        <v-icon class="white--text">{{item.icon}}</v-icon>
      </v-btn>
    </v-toolbar>
    <notification-list />
  </v-navigation-drawer>
</template>

<style scoped>
.backgroud {
  background-color: #fafafa;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { toolbarItens } from '@/app/navigator';
import NotificationListComponent from './NotificationListComponent.vue';
@Component({
  components: {
    'notification-list': NotificationListComponent,
  },
})
export default class ActionsSideBar extends Vue {
  @Prop()
  value: boolean;

  @Prop()
  model: string;

  toolbarItens = toolbarItens;

  get show() {
    return this.value;
  }

  set show(value) {
    this.$emit('input', value);
  }

  get component() {
    return this.model;
  }

  set component(value) {
    this.$emit('input', value);
  }

  logout() {
    this.$store.dispatch('logout').then(() => {
      this.$router.push('/');
    });
  }

  collapseActionsDrawer(model: string) {
    this.model = model;
     this.show = !this.show;
  }

  handle(item: any) {
    let description =item.description
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
