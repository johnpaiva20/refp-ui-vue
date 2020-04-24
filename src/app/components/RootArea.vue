<template>
  <v-content>
    <Toolbar />
    <v-container fluid class="ma-0 p-2 container">
      <label class="pageTitle">{{model.title}}</label>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-container>
  </v-content>
</template>

<style>
.container {
  max-width: 100% !important;
}
.pageTitle {
  color: #3e8f52;
  font-size: 25px;
}
</style>


<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import SideBar from './SideBar.vue';
import Toolbar from './Toolbar.vue';
import ActionsSideBar from './ActionsSideBar.vue';

@Component({
  components: {
    Toolbar,
  },
})
export default class RooArea extends Vue {
  model = {
    title: '',
  };

  get isProject() {
    return this.$store.state.application.isProject;
  }

  @Watch('$route', { immediate: true, deep: true })
  handlerRoute(to: any) {
    this.model.title = to.name;
  }
}
</script>