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
        <!-- <v-tabs v-model="tab" color="cyan" grow>
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="item in tabItems" :key="item.id" :to="item.path">{{ item.text }}</v-tab>
        </v-tabs>-->
      </v-container>
    </v-content>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Toolbar from './Toolbar';
import SideBar from './SideBar';
export default {
  components: {
    Toolbar,
    SideBar,
  },
  data() {
    return {
      collapsed: false,
      menuItens: [],
      tab: null,
      tabItems: [
        { id: 1, text: 'web', path: '' },
        { id: 2, text: 'shopping', path: '' },
        { id: 3, text: 'videos', path: '' },
        { id: 4, text: 'images', path: '' },
        { id: 5, text: 'news', path: '' },
      ],
    };
  },
  methods: {},
};
</script>