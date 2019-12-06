<template>
  <div>
    <v-layout row class="row-padding">
      <div>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Pesquisar"
          outline
          single-line
          hide-details
          dense
        ></v-text-field>
      </div>
      <v-spacer></v-spacer>
      <div>
        <v-btn color="primary" @click.stop="dialog = true">Novo</v-btn>
      </div>
    </v-layout>
    <v-card class="table-position">
      <v-data-table
        :headers="headers"
        :items="projects"
        :search="search"
        :pagination.sync="pagination"
        hide-actions
        height="450"
        hide-default-footer
      >
        <template v-slot:items="props">
          <tr @click="goToProject(props.item)">
            <td>{{ props.item.aneelId }}</td>
            <td style="width:50px">{{ props.item.title }}</td>
            <td>{{ props.item.serviceOrder.begin | formatDate }}</td>
            <td>{{ props.item.duration }} meses</td>
            <td>{{ props.item.serviceOrder.order }}</td>
            <td>{{ props.item.principalEnterprise }}</td>
          </tr>
        </template>
      </v-data-table>
      <div class="text-right">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </v-card>
    <project-register-dialog v-model="dialog" />
  </div>
</template>

<style>
.search-field {
  padding-left: 5px;
}

.search-field > v-text-field {
  width: 300px;
}

.row-padding {
  padding-left: 10px;
  padding-right: 10px;
}

.btn-new {
  padding-right: 5px;
}
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
const ProjectsRepository = RepositoryFactory.getProjectRepository();
import ProjectCardComponent from './components/ProjectCardComponent.vue';
import { ProjectStatusEnum } from '../../../workspace/enums/ProjectStatusEnum';
import ProjectRegisterDialog from './components/project-register-dialog/ProjectRegisterDialogComponent.vue';
import { Project } from '../../../workspace/models';
@Component({
  components: {
    'project-card': ProjectCardComponent,
    'project-register-dialog': ProjectRegisterDialog,
  },
})
export default class ProjectListView extends Vue {
  search: string = '';
  pagination = { rowsPerPage: 8, totalItems: 0 };

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
        this.pagination.totalItems = this.projects.length;
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

  get pages() {
    if (
      this.pagination.rowsPerPage == null ||
      this.pagination.totalItems == null
    )
      return 0;

    return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage);
  }

  set pages(value) {
    this.$emit('input', value);
  }
}
</script>

