<template>
  <div>
    <Toolbar />
    <PersonalSideBar />
    <v-content>
      <v-container fluid class="pa-1 window">
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
  </div>
</template>

<style>
.window {
  position: relative;
  top:72px;
}
</style>



<script>
import Toolbar from "@/components/Toolbar";
import PersonalSideBar from "../layout/PersonalSideBar";
export default {
  components: {
    Toolbar,
    PersonalSideBar
  },
  data() {
    return {};
  },
  methods: {}
};
</script>