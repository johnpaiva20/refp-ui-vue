<template>
  <v-content>
    <Toolbar :collapse.sync="collapsed" :actionsCollapsed.sync="actionsCollapsed" />
    <ActionsSideBar :actionsCollapsed="actionsCollapsed" />
    <SideBar :collapsed.sync="collapsed" />
    <!-- <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item,i) in 1" :key="i">
          <v-expansion-panel-header>Item</v-expansion-panel-header>
          <v-expansion-panel-content>
            <project-info-card :project="value" />
          </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>-->
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
  font-size: 30px;
}
</style>


<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { ProjectInfoCardComponent } from '../../modules/project/project-info';
import SideBar from './SideBar.vue';
import Toolbar from './Toolbar.vue';
import { Project } from '../models';
import ActionsSideBar from './ActionsSideBar.vue';

@Component({
  components: {
    Toolbar,
    SideBar,
    ActionsSideBar,
    'project-info-card': ProjectInfoCardComponent,
  },
})
export default class RooArea extends Vue {
  collapsed: Boolean = false;
  actionsCollapsed: Boolean = false;
  project: Boolean = false;
  root: Boolean = false;
  model = {
    title: '',
  };
  value: Project = new Project();

  @Watch('$route', { immediate: true, deep: true })
  handlerRoute(to: any) {
    this.model.title = to.name
    if (
      to.params &&
      (new RegExp(/\bproject\b/).test(to.path) &&
        !new RegExp(/\binfo\b/).test(to.path))
    ) {
      this.project = true;
    } else {
      this.project = false;
    }
  }
}
</script>