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
import { toolbarItens } from '../router/router';
@Component({})
export default class ActionsSideBar extends Vue {
  @Prop()
  value: boolean;

  toolbarItens = toolbarItens;

  get show() {
    return this.value;
  }

  set show(value) {
    this.$emit('input', value);
  }
}
</script>
