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
              <td class="text-xs-right">R${{ this.sum() }}</td>
              <td v-if="this.expenses.length>0">
                <v-btn  color="primary" :href="report()">Relatório de despesas</v-btn>
              </td>
              <div>
                <v-pagination v-model="page" :length="pageCount"></v-pagination>
              </div>
            </template>
            <template v-slot:item.data="{ item }">
              <span>{{item.data|formatDate}}</span>
            </template>
            <template v-slot:item.actions="{item}">
              <td>
                <v-btn
                  v-if="item.image != null && item.image != ''  "
                  text
                  small
                  color="primary"
                  target="_blank" rel="noopener noreferrer"
                  :href="item.image"
                >Anexo</v-btn>
              </td>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <expense-register-dialog v-model="dialog" isProject="false" />
  </div>
</template>

<style>
</style>

<script lang="ts">
import ExpenseRegisterView from '../expenses-register/ExpensesRegister.vue';
import Vue from 'vue';
import Component from 'vue-class-component';
import { Expense } from '../../../domain/entities';
import store from '@/domain/store';
import { AxiosResponse } from 'axios';
import { FETCH_PROJECT_EXPENSES } from '../../../domain/store/actions.type';
const baseURL = `${process.env.VUE_APP_BASE_API_URL}`;
@Component({
  components: {
    'expense-register-dialog': ExpenseRegisterView,
  },
})
export default class ProjectListView extends Vue {
  search: string = '';
  page: number = 1;
  pageCount: number = 0;
  itemsPerPage: number = 8;
  dialog: boolean = false;
  expenses: Expense[] = [];

  headers = [
    { text: 'Código da Despesa', value: 'id' },
    { text: 'Data', value: 'data' },
    { text: 'Número do Documento', value: 'documentNumber' },
    { text: 'Beneficiado', value: 'recipient' },
    { text: 'Valor R$', value: 'value' },
    { text: '', value: 'actions', sortable: false },
  ];

  created() {
    this.fetch();
  }

  async fetch() {
    
    var projectId = this.$route.params.id;
    store
      .dispatch(FETCH_PROJECT_EXPENSES, projectId)
      .then((response: AxiosResponse) => {
        this.expenses = response.data;
      })
      .catch((error) => {
        console.log('Error Loading Projects expenses ' + error);
      });
  }

  openExpense(value: any) {}

  sum() {
    var sum = 0;
    this.expenses.forEach((e) => {
      sum += e.value;
    });
    return sum;
  }

  report() {
    var projectId = this.$route.params.id;
    var reportUrl = baseURL + `/report?projetoId=${projectId}`;
    return reportUrl;
  }
}
</script>