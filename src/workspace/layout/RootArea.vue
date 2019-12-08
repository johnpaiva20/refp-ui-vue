<template>
  <div>
    <Toolbar :collapse.sync="collapsed" :actionsCollapsed.sync="actionsCollapsed" />
    <SideBar :collapsed="collapsed" @modelSelected="modelSelected" />
    <ActionsSideBar :actionsCollapsed="actionsCollapsed" />
    <v-content>
      <!-- <v-expansion-panels accordion>
        <v-expansion-panel v-for="(item,i) in 1" :key="i">
          <v-expansion-panel-header>Item</v-expansion-panel-header>
          <v-expansion-panel-content>
            <project-info-card :project="value" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>-->
      <v-container fluid class="ma-0 container">
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </div>
</template>

<style>
.container {
  max-width: 100% !important;
}
</style>

<script>
import Toolbar from './Toolbar';
import SideBar from './SideBar';
import ActionsSideBar from './ActionsSideBar';
import { ProjectInfoCardComponent } from '../../modules/project/project-info';
import { Project } from '../models';
export default {
  components: {
    Toolbar,
    SideBar,
    ActionsSideBar,
    'project-info-card': ProjectInfoCardComponent,
  },
  watch: {
    $route(to) {
      this.handlerRoute(to);
    },
  },
  data() {
    return {
      collapsed: false,
      actionsCollapsed: false,
      project: false,
      root: false,
      model: {
        title: '',
      },
      value: new Project(),
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