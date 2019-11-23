<template>
  <div class="project-expanses-container">
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
            <td style="width:50px">{{ props.item.title }}</td>
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
  </div>
</template>

<style>
</style>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
@Component({})
export default class ProjectListView extends Vue {
  search: string = '';
  pagination = { rowsPerPage: 8, totalItems: 0 };

  headers = [
    { text: 'Código ANEEL', value: 'aneelId', width: '1%' },
    { text: 'Titulo', value: 'title', width: '1%' },
    { text: 'Tipo do Projeto', value: 'type', width: '1%' },
    { text: 'Data de Inicio', value: 'start', width: '1%' },
    { text: 'Duração', value: 'duration', width: '1%' },
    { text: 'Ordem de Serviço', value: 'serviceOrder', width: '1%' },
    {
      text: 'Empresa Proponente',
      value: 'principalEnterprise',
      width: '1%',
    },
    { text: 'Status', value: 'status', width: '1%' },
  ];

  pluralization = {
    month: 'mês | {count} meses',
  };

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