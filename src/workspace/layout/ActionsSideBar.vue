<template>
  <v-navigation-drawer v-model="show" absolute temporary right width="300">
    <v-app-bar fixed app :clipped-left="true" extended extension-height="7">
      <v-spacer></v-spacer>
      <v-btn
        icon
        v-for="item in toolbarItens"
        v-bind:key="item.id"
        v-on:click="handle(item.action)"
      >
        <v-icon class="primary--text">{{item.icon}}</v-icon>
      </v-btn>
    </v-app-bar>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({})
export default class ActionsSideBar extends Vue {
  @Prop()
  actionsCollapsed: boolean;

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
    return this.actionsCollapsed;
  }

  set show(value) {
    this.$emit('input', value);
  }
}
</script>
