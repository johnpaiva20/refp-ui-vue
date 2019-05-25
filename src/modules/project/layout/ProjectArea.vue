<template>
  <div>
    <Toolbar/>
    <ProjectsSideBar/>
    <v-content>
      <v-container fluid class="pa-0 ma-0">
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </div>
</template>




<script>
import Toolbar from "../../../components/Toolbar";
import ProjectsSideBar from "../layout/ProjectsSideBar";
export default {
  components: {
    Toolbar,
    ProjectsSideBar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>