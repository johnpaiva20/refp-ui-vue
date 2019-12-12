<template>
  <v-navigation-drawer class="primary" v-model="show" app temporary right width="300">
    <v-toolbar flat color="primary">
      <v-spacer></v-spacer>
      <v-btn
        icon
        v-for="item in toolbarItens"
        v-bind:key="item.id"
        v-on:click="handle(item.action)"
      >
        <v-icon class="white--text">{{item.icon}}</v-icon>
      </v-btn>
    </v-toolbar>
    <h1>{{component}} Leonad</h1>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { toolbarItens } from '../router/router';
@Component({})
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
    console.log(model);
    this.model = model
  }

  handle(action: string) {
    switch (action) {
      case 'logout':
        this.logout();
        break;
      case 'notifications':
        this.collapseActionsDrawer('notifications');
        break;
      case 'settings':
        this.collapseActionsDrawer('settings');
        break;
    }
  }
}
</script>
