<template>
  <div>
    <v-row class="ma-1">
      <v-col cols="3" class="ma-0 pa-0">
        <v-text-field v-model="search" append-icon="search" label="Pesquisar" outlined dense></v-text-field>
      </v-col>

      <v-spacer></v-spacer>
      <v-col sm="1" class="ma-0 pa-0 pl-5">
        <v-btn color="primary" @click.stop="newEnterprise">Novo</v-btn>
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
            :loading="isLoading"
            height="430"
            @click:row="openEnterprise"
          />
          <div>
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <enterprise-register-dialog v-model="dialog" :edit="edit" :enterprise="enterprise" />
  </div>
</template>

<style>
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EnterpriseRegisterView from '../enterprise-register/EnterpriseRegister.vue';
import { Enterprise } from '@/domain/entities';
import { FETCH_ENTERPRISES } from '../../../domain/store/actions.type';
import store from '@/domain/store';
import { AxiosResponse } from 'axios';
@Component({
  components: {
    'enterprise-register-dialog': EnterpriseRegisterView,
  },
})
export default class EnterpriseListView extends Vue {
  
  search: string = '';
  page: number = 0;
  pageCount: number = 0;
  itemsPerPage: number = 8;
  
  dialog: boolean = false;
  edit: boolean = false;

  enterprise: Enterprise = new Enterprise();

  headers = [
    { text: 'Código da Empresa', value: 'id' },
    { text: 'Nome Fantasia', value: 'trade' },
    { text: 'Razão Social', value: 'company' },
    { text: 'CNPJ', value: 'cnpj' },
    { text: 'Sigla', value: 'initials' },
  ];

  enterprises: Enterprise[] = [];

  get isLoading() {
    return this.$store.state.enterprise.isLoadingenterprises;
  }

  created() {
    this.fetch();
  }

  mounted() {
    this.$on('added', () => {
      this.fetch();
    });
  }

  async fetch() {
    store
      .dispatch(FETCH_ENTERPRISES)
      .then((response: AxiosResponse) => {
        this.enterprises = response.data;
      })
      .catch((error) => {
        console.log('Error Loading EnterpriseS ' + error);
      });
  }

  openDialog() {
    this.dialog = true;
  }

  newEnterprise() {
    this.enterprise = new Enterprise();
    this.openDialog();
  }

  openEnterprise(enterprise: Enterprise) {
    this.edit = true;
    this.enterprise = enterprise;
    this.openDialog();
  }
}
</script>