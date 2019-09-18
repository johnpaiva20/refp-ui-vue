<template>
  <div>
    <v-layout row class="row-padding">
      <div class="search-field">
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Pesquisar"
          outline
          single-line
          hide-details
          height="22"
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
      >
        <template v-slot:items="props">
          <tr @click="goToProject(props.item)">
            <td>{{ props.item.aneelId }}</td>
            <td>{{ props.item.title }}</td>
            <td>{{ props.item.type.description }}</td>
            <td>{{ props.item.serviceOrder.begin | formatDate }}</td>
            <td>{{ props.item.duration }} meses</td>
            <td>{{ props.item.serviceOrder.order }}</td>
            <td>{{ props.item.principalEnterprise }}</td>
            <td>{{ getProjectStatus(props.item.status) }}</td>
          </tr>
        </template>

        <template v-slot:no-results>
          <v-alert
            :value="true"
            color="error"
            icon="warning"
          >Sua pesquisa por "{{ search }}" não encontrou resultados.</v-alert>
        </template>
        <template v-slot:no-data>
          <v-alert :value="true" color="primary" icon="info">Nenhum Projeto cadastrado</v-alert>
        </template>
      </v-data-table>
      <div class="text-xs-right pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </v-card>
    <project-register-dialog v-model="dialog"/>
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


<script>
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
const ProjectsRepository = RepositoryFactory.get('projects');
import ProjectCardComponent from './components/ProjectCardComponent';
import { ProjectStatusEnum } from '../../../workspace/enums/ProjectStatusEnum';
import ProjectRegisterDialog from './components/project-register-dialog/ProjectRegisterDialogComponent';

export default {
  components: {
    'project-card': ProjectCardComponent,
    'project-register-dialog': ProjectRegisterDialog,
  },
  data() {
    return {
      search: '',
      pagination: { rowsPerPage: 8 },
      headers: [
        { text: 'Código ANEEL', value: 'aneelId' },
        { text: 'Titulo', value: 'title' },
        { text: 'Tipo do Projeto', value: 'type' },
        { text: 'Data de Inicio', value: 'start' },
        { text: 'Duração', value: 'duration' },
        { text: 'Ordem de Serviço', value: 'serviceOrder' },
        { text: 'Empresa Proponente', value: 'principalEnterprise' },
        { text: 'Status', value: 'status' },
      ],
      pluralization: {
        month: 'mês | {count} meses',
      },
      projects: [],
      dialog: false,
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      ProjectsRepository.listProjects()
        .then((response) => {
          this.projects = response.data;
        })
        .catch(() => console.log('Error Loading Projects'));
    },
    goToProject(project) {
      this.$router.push({
        path: `/project/${project.id}/info`,
        params: { id: project.id },
      });
    },
    getProjectStatus(status) {
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
    },
  },
  mounted() {},
  computed: {
    pages() {
      if (
        this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      )
        return 0;

      return Math.ceil(
        this.pagination.totalItems / this.pagination.rowsPerPage
      );
    },
  },
};
</script>