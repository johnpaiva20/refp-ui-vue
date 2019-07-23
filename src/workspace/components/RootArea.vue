<template>
  <div>
    <Toolbar :collapse.sync="collapsed" />
    <SideBar :collapsed="collapsed" :menu-items="menuItens" />
    <v-content>
      <v-container fluid class="pa-1">
        <!-- <v-subheader>Projetos</v-subheader> -->
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </div>
</template>

<style>
</style>

<script>
import Toolbar from "./Toolbar";
import SideBar from "./SideBar";
export default {
  components: {
    Toolbar,
    SideBar
  },
  data() {
    return { collapsed: false, menuItens: [] };
  },
  methods: {}
};
</script>