<template>
  <v-dialog v-model="show" persistent>
    <v-card>
      <v-card-title class="headline primary white--text" primary-title>
        Cadastro de Projetos
        <v-spacer></v-spacer>
        <v-btn icon @click="close()">
          <v-icon class="white--text">close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="pa-0">
        <v-stepper v-model="e1">
          <v-stepper-header>
            <template v-for="step in steps">
              <v-stepper-step
                :key="`${step.id}-step`"
                :complete="e1 > step.id"
                :step="step.id"
                editable
              >{{ step.title }}</v-stepper-step>

              <v-divider v-if="step.id !== steps" :key="step.id"></v-divider>
            </template>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content
              class="pa-2"
              v-for="step in steps"
              :key="`${step.id}-content`"
              :step="step.id"
            >
              <template>
                <component :is="step.component" v-bind="{project:project}"></component>
              </template>

              <v-btn text @click="close()">Cancelar</v-btn>
              <v-btn text v-if="!isFirstStep()" @click="previousStep(step.id)">Voltar</v-btn>
              <v-btn
                v-if="!isLastStep()"
                class="btnNextStep"
                color="primary"
                @click="nextStep(step.id)"
              >Continuar</v-btn>
              <v-btn
                v-if="isLastStep()"
                class="btnNextStep"
                color="primary"
                :loading="isLoading"
                @click="save()"
              >
                <v-icon>save</v-icon>Salvar
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-card-text>
    </v-card>
    <v-snackbar
      v-model="snackbar.show"
      bottom
      multi-line
      right
      :timeout="3000"
      :color="snackbar.color"
    >{{snackbar.message}}</v-snackbar>
  </v-dialog>
</template>

<style>
.btnNextStep {
  float: right;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import {
  Enterprise,
  AccountCategory,
  Project,
  ProjectType,
} from '@/domain/entities';
import ProjectBasicInformation from './components/ProjectBasicInformation.vue';
import step2 from './components/ProjectTopicInformation.vue';
import step3 from './components/ProjectEnterprise.vue';
import ProjectAccountCategories from './components/ProjectAccountCategories.vue';
import ProjectConfirmation from './components/ProjectConfirmation.vue';
import { ProjectStatusEnum } from '@/domain/enums';
import store from '../../../domain/store';
import { SAVE_PROJECT } from '../../../domain/store/actions.type';
import { ProjectTypeEnum } from '../../../domain/enums/ProjectTypeEnum';
import { SET_PROJECT } from '../../../domain/store/mutations.type';
import { AxiosResponse } from 'axios';
import Snackbar from '@/app/utils/snackbar'

@Component({
  components: {
    'project-basic-information': ProjectBasicInformation,
    step2,
    step3,
    'project-account-categories': ProjectAccountCategories,
    'project-confirmation': ProjectConfirmation,
  },
})
export default class ProjectCardComponent extends Vue {
  @Prop()
  value: boolean;

  e1: number = 0;

  steps = [
    {
      id: 1,
      title: 'Informações Básicas',
      component: 'project-basic-information',
    },
    {
      id: 2,
      title: 'Rubricas',
      component: 'project-account-categories',
    },
    {
      id: 3,
      title: 'Confirmação',
      component: 'project-confirmation',
    },
  ];

  project: Project = new Project(ProjectTypeEnum.DEVELOPMENT_SEARCH);

  snackbar: Snackbar = { show: false, message: '', color: 'error' };

  get show() {
    return this.value;
  }

  set show(value) {
    this.$emit('input', value);
  }

  get isLoading() {
    return this.$store.state.application.isLoading;
  }

  nextStep(n: number) {
    console.log(this.$refs)
    if (n === this.steps.length) {
      this.e1 = n;
    } else {
      this.e1 = n + 1;
    }
  }

  previousStep(n: number) {
    if (n === 1) {
      this.e1 = 1;
    } else {
      this.e1 = n - 1;
    }
  }

  isLastStep() {
    return this.e1 === this.steps.length;
  }

  isFirstStep() {
    return this.e1 === 1;
  }

  save() {
    store
      .dispatch(SAVE_PROJECT, this.project)
      .then((response: AxiosResponse) => {
        if (response.status == 201) {
          console.log(JSON.stringify(response))
          let id = response.data.id;
          store.commit(SET_PROJECT);
          this.$router.push({
            path: `/project/${id}/info`,
            params: { id: id },
          });
        } else {
          this.snackbar = {
            show: true,
            message: response.data.message,
            color: 'info',
          };
        }
      })
      .catch((error) => {
        this.snackbar = { show: true, message: error.message };
      });
  }

  close() {
    this.show = false;
    this.project = new Project(
      ProjectTypeEnum.DEVELOPMENT_SEARCH,
      ProjectStatusEnum.InProgress
    );
  }
}
</script>