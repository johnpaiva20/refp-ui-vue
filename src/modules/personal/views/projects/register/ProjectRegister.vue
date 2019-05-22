<template>
  <v-app>
    <div class="project-step">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step editable step="1">Informações Básicas</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable step="2">Empresas</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step editable step="3">Confirmação</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <step1></step1>

            <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-btn color="primary">Confirmar</v-btn>

            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
  </v-app>
</template>



<style>
.project-step {
  position: relative;
  top: 50px;
  padding: 30px 5px 15px 5px;
}
</style>

<script>
import step1 from "./components/ProjectRegisterStepBasicInformation";
export default {
  components: {
    step1
  },
  data() {
    return {
      e1: 0
    };
  }
};
</script>