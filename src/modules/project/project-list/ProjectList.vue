<template>
  <div>
    <v-row class="ma-1">
      <div>
        <v-text-field v-model="search" append-icon="search" label="Pesquisar" outlined dense></v-text-field>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-btn color="primary" @click.stop="dialog = true">Novo</v-btn>
      </div>
    </v-row>
    <v-row class="ma-1">
      <v-card>
        <v-data-table
          :headers="headers"
          :items="projects"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          height="100%"
          hide-default-footer
          @page-count="pageCount = $event"
          @click:row="goToProject"
        ></v-data-table>
        <div>
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
      </v-card>
    </v-row>
    <project-register-dialog v-model="dialog" />
  </div>
</template>

<style>
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
const ProjectsRepository = RepositoryFactory.getProjectRepository();
import { ProjectStatusEnum } from '../../../workspace/enums/ProjectStatusEnum';
import ProjectRegisterDialog from './components/project-register-dialog/ProjectRegisterDialogComponent.vue';
import { Project } from '../../../workspace/models';
@Component({
  components: {
    'project-register-dialog': ProjectRegisterDialog,
  },
})
export default class ProjectListView extends Vue {
  search: string = '';
  page: number = 1;
  pageCount: number = 0;
  itemsPerPage: number = 8;

  headers = [
    { text: 'Código ANEEL', value: 'aneelId', width: '1%' },
    { text: 'Titulo', value: 'title', width: '1%' },
    { text: 'Data de Inicio', value: 'start', width: '1%' },
    { text: 'Duração', value: 'duration', width: '1%' },
    { text: 'Ordem de Serviço', value: 'serviceOrder', width: '1%' },
  ];

  pluralization = {
    month: 'mês | {count} meses',
  };
  projects: Project[] = [];
  dialog: boolean = false;

  created() {
    this.fetch();
  }

  async fetch() {
    ProjectsRepository.listProjects()
      .then((response) => {
        this.projects = response.data;
      })
      .catch(() => console.log('Error Loading Projects'));
  }

  goToProject(project: Project) {
    this.$router.push({
      path: `/project/${project.id}/info`,
      params: { id: project.id.toString() },
    });
  }

  getProjectStatus(status: String) {
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

