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
            :items="expenses"
            :search="search"
            :page.sync="page"
            hide-default-footer
            @page-count="pageCount = $event"
            @click:row="openExpense"
            height="430"
          >
            <template slot="footer">
              <td>
                <strong>Total</strong>
              </td>
              <td class="text-xs-right">{{ 0 }}</td>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
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