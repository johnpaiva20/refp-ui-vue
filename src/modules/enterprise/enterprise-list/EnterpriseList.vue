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
            :items="enterprises"
            :search="search"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            @page-count="pageCount = $event"
            height="430"
          />
          <div>
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <enterprise-register-dialog v-model="dialog" />
  </div>
</template>

<style>
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
import EnterpriseRegisterView from '../enterprise-register/EnterpriseRegister.vue';
const EnterprisesRepository = RepositoryFactory.getEnterpriseRepository();

@Component({
  components: {
    'enterprise-register-dialog': EnterpriseRegisterView,
  },
})
export default class EnterpriseListView extends Vue {
  search: string = '';
  page: number = 1;
  pageCount: number = 0;
  itemsPerPage: number = 8;
  dialog: boolean = false;

  headers = [
    { text: 'Código da Empresa', value: 'id' },
    { text: 'Nome Fantasia', value: 'trade' },
    { text: 'Razão Social', value: 'company' },
    { text: 'CNPJ', value: 'cnpj' },
    { text: 'Sigla', value: 'initials' },
  ];
  enterprises = [];

  created() {
    this.fetch();
  }

  async fetch() {
    EnterprisesRepository.listEnterprises().then((response) => {
      this.enterprises = response.data;
    });
  }

  goToEnterprise() {
    const id = this.$router.currentRoute.params.id;
    this.$router.push({ path: `/enterprise/${id}` });
  }
}
</script>