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
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({})
export default class ActionsSideBar extends Vue {
  @Prop()
  collapsed: Boolean;

  toolbarItens = [
    {
      id: 2,
      description: 'notifications',
      icon: 'notifications',
      action: 'notifications',
    },
    {
      id: 1,
      description: 'logout',
      icon: 'power_settings_new',
      action: 'logout',
    },
  ];

  get show() {
    return this.collapsed;
  }

  set show(value) {
    this.$emit('input', value);
  }
}
</script>
