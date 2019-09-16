<template>
  <v-dialog v-model="show" persistent full-width>
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
    >{{snackbar.message}}</v-snackbar>
  </v-dialog>
</template>

<style>
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ProjectRegister from '../../project-register/ProjectRegister.vue';
import step1 from '../../project-register/components/ProjectRegisterStepBasicInformation.vue';
import step2 from '../../project-register/components/ProjectRegisterStepEnterprise.vue';
import step3 from '../../project-register/components/ProjectAccountCategories.vue';
import step4 from '../../project-register/components/ProjectRegisterStepConfirmation.vue';
import { Prop } from 'vue-property-decorator';
import { Project } from '../../../../workspace/models/Project';
import { RepositoryFactory } from '../../../../repositories/RepositoryFactory';
import { Enterprise } from '../../../../workspace/models/Enterprise';
import { ProjectEnterprise } from '../../../../workspace/models/ProjectEnterprise';
import { AccountCategory } from '../../../../workspace/models/AccountCategory';
const ProjectsRepository = RepositoryFactory.getProjectRepository();
@Component({
  components: {
    'project-register': ProjectRegister,
    step1,
    step2,
    step3,
    step4,
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
     this.show = false
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