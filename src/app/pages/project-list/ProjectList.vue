<template>
  <div>
    <v-row class="ma-1">
      <v-col cols="3" class="ma-0 pa-0">
        <v-text-field v-model="search" append-icon="search" label="Pesquisar" outlined dense></v-text-field>
      </v-col>

      <v-spacer></v-spacer>
      <v-col sm="1" class="ma-0 pa-0 pl-5">
        <v-btn color="primary" @click.stop="dialog = true">Novo</v-btn>
      </v-col>
    </v-row>

    <v-row class="ma-1">
      <v-col cols="12" class="ma-0 pa-0">
        <v-card>
          <v-data-table
            :headers="headers"
            :items="projects"
            :search="search"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            :loading="isLoading"
            loading-text="Carregando Projetos"
            hide-default-footer
            @page-count="pageCount = $event"
            @click:row="goToProject"
            height="430"
          >
            <template v-slot:item.serviceOrder.begin="{ item }">
              <span>{{item.serviceOrder.begin|formatDate}}</span>
            </template>
            <template v-slot:item.serviceOrder.duration="{ item }">
              <span>{{item.serviceOrder.duration}}</span>
            </template>
             <template v-slot:item.actions="{item}">
              <td>
                <v-btn text small color="primary"  :href="report(item)" >Totalização</v-btn>
              </td>
            </template>
          </v-data-table>
          <div>
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <project-register-dialog v-model="dialog" />
  </div>
</template>

<style>
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { ProjectStatusEnum } from '@/domain/enums/ProjectStatusEnum';
import ProjectRegisterDialog from '@/app/pages/project-register/ProjectRegisterDialogComponent.vue';
import { Project } from '@/domain/entities';
import store from '@/domain/store';
import { FETCH_PROJECTS } from '@/domain/store/actions.type';
import { AxiosResponse } from 'axios';
import { SET_PROJECT } from '../../../domain/store/mutations.type';
import DateUtils from '@/domain/utils/date_util';
import { Watch } from 'vue-property-decorator';
const baseURL = `${process.env.VUE_APP_BASE_API_URL}`;
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
    { text: 'Data de Inicio', value: 'serviceOrder.begin', width: '1%' },
    { text: 'Duração', value: 'serviceOrder.duration', width: '1%' },
    { text: 'Ordem de Serviço', value: 'serviceOrder.number', width: '1%' },
    { text: 'Relatório', value: 'actions', sortable: false },
  ];

  pluralization = {
    month: 'mês | {count} meses',
  };
  projects: Project[] = [];
  dialog: boolean = false;

  @Watch('page', { immediate: true, deep: true })
  handlerPageChange(newValue: any, oldValue: any) {
  }

  get isLoading() {
    return this.$store.state.project.isLoadingProjects;
  }

  created() {
    this.fetch();
  }

  async fetch() {
    store
      .dispatch(FETCH_PROJECTS)
      .then((response: AxiosResponse) => {
        this.projects = response.data;
      })
      .catch((error) => {
        console.log('Error Loading Projects ' + error);
      });
  }

  goToProject(project: Project) {
    store.commit(SET_PROJECT);
    this.$router.push({
      path: `/project/${project.id}/info`,
      params: { id: project.id.toString() },
    });
  }
report(item:Project){
    var reportUrl = baseURL+`/totalization?projetoId=${item.id}`
    return reportUrl;
  }

}
</script>

