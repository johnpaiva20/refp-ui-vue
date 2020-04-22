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
            :items-per-page="itemsPerPage"
            hide-default-footer
            @page-count="pageCount = $event"
           :loading="isLoading"
            height="430"
          ></v-data-table>
          <div>
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <expense-register-dialog v-model="dialog" />
  </div>
</template>

<style>
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import ExpenseRegisterView from '../expenses-register/ExpensesRegister.vue';
import store from '@/domain/store';
import { AxiosResponse } from 'axios';
import { FETCH_EXPENSES } from '../../../domain/store/actions.type';
@Component({
  components: {
    'expense-register-dialog': ExpenseRegisterView,
  },
})
export default class ExpenseList extends Vue {
  search: string = '';
  page: number = 1;
  pageCount: number = 0;
  itemsPerPage: number = 8;
  dialog: boolean = false;

  headers = [
    { text: 'Código do Membro', value: 'id' },
    { text: 'Nome', value: 'name' },
    { text: 'Função', value: 'degree' },
    { text: 'Titulação', value: 'role' },
    { text: 'CPF', value: 'cpf' },
  ];
  expenses = [];

  get isLoading() {
    return this.$store.state.expense.isLoadingeExpenses;
  }

  created() {
    this.fetch();
  }

  async fetch() {
    store
      .dispatch(FETCH_EXPENSES)
      .then((response: AxiosResponse) => {
        this.expenses = response.data;
      })
      .catch((error) => {
        console.log('Error Loading Expenses ' + error);
      });
  }
}
</script>

