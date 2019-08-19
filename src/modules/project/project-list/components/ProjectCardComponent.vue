<template>
  <v-card class="mx-auto" color="#FFFFFF">
    <label>{{project.aneelId}}</label>
    <label>{{project.title}}</label>
    <label>CELP</label>
    <label>{{getProjectStatus(project.status)}}</label>
  </v-card>
</template>

<style>
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Project } from '../../../../workspace/models/Project';
import { ProjectStatusEnum } from '../../../../workspace/enums/ProjectStatusEnum';
@Component({})
export default class ProjectCardComponent extends Vue {
  @Prop()
  project!: Project;

  projectStatus!: string;

  getProjectStatus(status: string) {
    switch (status) {
      case ProjectStatusEnum.InProgress:
        return 'Em andamento';
      case ProjectStatusEnum.Cancelled:
        return 'Cancelado';
      case ProjectStatusEnum.Finished:
        return 'Finalizado';
      case ProjectStatusEnum.AboutToBegin:
        return 'A ser iniciado em breve';
      default:
        return 'Indefinido';
    }
  }
}
</script>