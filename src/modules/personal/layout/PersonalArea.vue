<template>
  <div>
    <Toolbar :collapse.sync="collapsed" />
    <PersonalSideBar :collapsed="collapsed" />
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
import Toolbar from "@/components/Toolbar";
import PersonalSideBar from "../layout/PersonalSideBar";
export default {
  components: {
    Toolbar,
    PersonalSideBar
  },
  data() {
    return { collapsed: false };
  },
  methods: {}
};
</script>