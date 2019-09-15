<template>
  <div>
    <Toolbar :collapse.sync="collapsed" />
    <SideBar :collapsed="collapsed" @modelSelected="modelSelected" />
    <v-content>
      <!-- <v-container fluid class="pa-1"> -->
      <v-container fluid>
        <!-- <v-subheader>{{model.title}}</v-subheader>

        <v-card v-if="project">
          <v-card-title>Teste</v-card-title>
        </v-card>-->
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

<style>
</style>

<script>
import Toolbar from './Toolbar';
import SideBar from './SideBar';
export default {
  components: {
    Toolbar,
    SideBar,
  },
  watch: {
    $route(to) {
      this.handlerRoute(to);
    },
  },
  data() {
    return {
      collapsed: false,
      project: false,
      root: false,
      model: {
        title: '',
      },
    };
  },
  methods: {
    handlerRoute(to) {
      if (
        to.params &&
        (new RegExp(/\bproject\b/).test(to.path) &&
          !new RegExp(/\binfo\b/).test(to.path))
      ) {
        this.project = true;
      } else {
        this.project = false;
      }
    },
    modelSelected(model) {
      this.model.title = model.title;
    },
  },
};
</script>