<template>
  <div>
    <Toolbar :collapse.sync="collapsed" />
    <SideBar :collapsed="collapsed" @modelSelected="modelSelected" />
    <v-content>
      <v-container fluid class="ma-0">
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </div>
</template>

<style>
v-container {
  max-width: 100%;
}
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