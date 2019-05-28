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
            <br>
            <v-btn class="btnStep" color="primary" @click="e1 = 2">Continue</v-btn>

            <v-btn flat>Cancelar</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <step2></step2>
            <br>
            <v-btn class="btnStep" color="primary" @click="e1 = 3">Continue</v-btn>

            <v-btn flat>Voltar</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <step3></step3>
            <br>
             <v-btn class="btnStep" color="primary">Confirmar</v-btn>
             <v-btn class="btnStep" color="primary">Cancelar</v-btn>

            <v-btn flat>Voltar</v-btn>
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
  background-color: white;
  
}
.btnStep{
  float: right;
}
</style>

<script>
import step1 from "./components/ProjectRegisterStepBasicInformation";
import step2 from "./components/ProjectRegisterStepEnterprise";
import step3 from "./components/ProjectRegisterStepConfirmation";
export default {
  components: {
    step1,
    step2,
    step3,
  },
  data() {
    return {
      e1: 0
    };
  }
};
</script>