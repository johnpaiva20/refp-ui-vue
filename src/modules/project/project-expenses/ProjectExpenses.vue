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
        <v-btn color="primary" @click.stop="dialog = true">Adicionar</v-btn>
      </div>
    </v-layout>
    <v-card class="table-position">
      <v-data-table
        :headers="headers"
        :items="expenses"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        height="450"
        hide-default-footer
        @page-count="pageCount = $event"
        @click:row="openExpense"
      ></v-data-table>
      <div>
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
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
  page: number = 1;
  pageCount: number = 0;
  itemsPerPage: number = 10;

  expenses = [];

  headers = [
    { text: 'Data', value: 'aneelId', width: '1%' },
    { text: 'Tipo do Documento', value: 'title', width: '1%' },
    { text: 'Número do Documento', value: 'start', width: '1%' },
    { text: 'Beneficiado', value: 'duration', width: '1%' },
    { text: 'Valor', value: 'serviceOrder', width: '1%' },
  ];

  openExpense(value: any) {}
}
</script>