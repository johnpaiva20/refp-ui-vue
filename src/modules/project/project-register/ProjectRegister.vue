<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step editable step="1">Informações Básicas</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="2">Empresas</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="3">Categorias Coontabeis</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="4">Confirmação</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1" style="padding: 0px;">
          <step1 :project="project"></step1>

          <v-btn class="btnStep" color="primary" @click="e1 = 2">Continue</v-btn>

          <v-btn flat @click="cancel()">Cancelar</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2" style="padding: 0px;">
          <step2 @update-enterprises-selected="onUpdateEnterpisesSelected"></step2>
          <v-btn class="btnStep" color="primary" @click="e1 = 3">Continue</v-btn>

          <v-btn flat @click="e1 = 1">Voltar</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3" style="padding: 0px;">
          <step3 :type="project.type.id" @update-account-categories="onUpdateAccountCategories"></step3>
          <v-btn class="btnStep" color="primary" @click="e1 = 4">Continue</v-btn>

          <v-btn flat @click="e1 = 2">Voltar</v-btn>
        </v-stepper-content>

        <v-stepper-content step="4" style="padding: 0px;">
          <step4 :project="project"></step4>
          <div>
            <v-btn class="btnStep" color="primary" @click="save">Confirmar</v-btn>
            <v-btn class="btnStep" @click="cancel()">Cancelar</v-btn>
          </div>
          <v-btn flat @click="e1 = 3">Voltar</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <v-snackbar
      v-model="snackbar"
      :bottom="true"
      :multi-line="true"
      :right="true"
      :timeout="3000"
      :vertical="false"
      color="error"
    >{{snackbarError}}</v-snackbar>
  </div>
</template>

<style>
.step {
  padding: 0px;
}
.btnStep {
  float: right;
}
</style>

<script>
import step1 from './components/ProjectRegisterStepBasicInformation';
import step2 from './components/ProjectRegisterStepEnterprise';
import step3 from './components/ProjectAccountCategories';
import step4 from './components/ProjectRegisterStepConfirmation';

import { RepositoryFactory } from '@/repositories/RepositoryFactory';
const ProjectsRepository = RepositoryFactory.get('projects');

export default {
  components: {
    step1,
    step2,
    step3,
    step4,
  },
  data() {
    return {
      e1: 0,
      project: {
        aneelId: '',
        title: '',
        duration: '',
        status: 'IN_PROGRESS',
        serviceOrder: {
          order: '',
          begin: '',
        },
        type: { id: 'PD' },
        innovationPhase: null,
        product: {
          type: {
            id: 0,
          },
        },
        segment: null,
        topic: {
          id: 0,
          description: '',
          initials: '',
        },
        othertopic: null,
        subtopic: {
          id: 0,
          description: '',
          initials: '',
        },
        othersubtopic: null,
        sharingType: null,
        enterprises: [],
        accountCategories: [],
      },
      snackbar: false,
      snackbarError: '',
    };
  },
  methods: {
    save() {
      ProjectsRepository.createProject(this.project)
        .then((response) => {
          let id = response.data.id;

          this.$router.push({
            path: `/project/${id}/info`,
            params: { id: id },
          });
        })
        .catch((error) => {
          this.snackbar = true;
          this.snackbarError = error.response.data.message;
        });
    },
    cancel() {
      this.$router.push('/personal/projects');
    },
    onUpdateEnterpisesSelected(enterprises) {
      const selectedEnterprises = [];
      enterprises.forEach((e) => {
        selectedEnterprises.push({
          enterprise: { id: e.id },
          type: e.type,
        });
      });
      this.project.enterprises = selectedEnterprises;
    },
    onUpdateAccountCategories(categories) {
      this.project.accountCategories = categories;
    },
  },
};
</script>