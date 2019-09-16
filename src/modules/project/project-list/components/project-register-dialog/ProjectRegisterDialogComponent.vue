<template>
  <v-dialog v-model="show" persistent full-width>
    <v-toolbar height="40" color="primary">
      <v-toolbar-title class="white--text">Cadastro de Projetos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn icon @click="cancel()">
          <v-icon class="white--text">clear</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step editable step="1">Informações Básicas</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="2">Tema</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="3">Empresas</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="4">Categorias Coontabeis</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step editable step="5">Confirmação</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1" style="padding: 0px">
          <step1 :project="project"></step1>

          <v-btn class="btnStep" color="primary" @click="e1 = 2">Continue</v-btn>

          <v-btn flat @click="cancel()">Cancelar</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2" style="padding: 0px">
          <step2 :project="project" ></step2>
          <v-btn class="btnStep" color="primary" @click="e1 = 3">Continue</v-btn>

          <v-btn flat @click="e1 = 1">Voltar</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3" style="padding: 0px">
          <step3 @update-enterprises-selected="onUpdateEnterpisesSelected"></step3>
          <v-btn class="btnStep" color="primary" @click="e1 = 4">Continue</v-btn>

          <v-btn flat @click="e1 = 2">Voltar</v-btn>
        </v-stepper-content>

        <v-stepper-content step="4" style="padding: 0px">
          <step4 :type="project.type.id" @update-account-categories="onUpdateAccountCategories"></step4>
          <v-btn class="btnStep" color="primary" @click="e1 = 5">Continue</v-btn>

          <v-btn flat @click="e1 = 3">Voltar</v-btn>
        </v-stepper-content>

        <v-stepper-content step="5" style="padding: 0px">
          <step5 :project="project"></step5>
          <div>
            <v-btn class="btnStep" color="primary" @click="save">Confirmar</v-btn>
            <v-btn class="btnStep" @click="cancel()">Cancelar</v-btn>
          </div>
          <v-btn flat @click="e1 = 4">Voltar</v-btn>
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
    >{{snackbar.message}}</v-snackbar>
  </v-dialog>
</template>

<style>
.step {
  padding: 0px;
}
.btnStep {
  float: right;
}
</style>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { RepositoryFactory } from '../../../../../repositories/RepositoryFactory';
import { Enterprise } from '../../../../../workspace/models/Enterprise';
import { AccountCategory } from '../../../../../workspace/models/AccountCategory';
import { Project } from '../../../../../workspace/models/Project';
import step1 from './components/ProjectBasicInformation.vue';
import step2 from './components/ProjectTopicInformation.vue';
import step3 from './components/ProjectEnterprise.vue';
import step4 from './components/ProjectAccountCategories.vue';
import step5 from './components/ProjectConfirmation.vue';

const ProjectsRepository = RepositoryFactory.getProjectRepository();
@Component({
  components: {
    step1,
    step2,
    step3,
    step4,
    step5
  },
})
export default class ProjectCardComponent extends Vue {
  @Prop()
  value: boolean;

  e1: number = 0;

  project: Project = new Project();
  

  snackbar = { show: false, message: '' };

  get show() {
    return this.value;
  }

  set show(value) {
    this.$emit('input', value);
  }

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
        this.snackbar.show = true;
        this.snackbar.message = error.response.data.message;
      });
  }

  cancel() {
    this.show = false;
  }

  onUpdateEnterpisesSelected(enterprises: Enterprise[]) {
    //   const selectedEnterprises: ProjectEnterprise[] = [];
    //   enterprises.forEach((e) => {
    //     selectedEnterprises.push({
    //       enterprise: { id: e.id },
    //       type: e.type,
    //     });
    //   });
    //   this.project.enterprises = selectedEnterprises;
  }

  onUpdateAccountCategories(categories: AccountCategory[]) {
    this.project.accountCategories = categories;
  }
}
</script>