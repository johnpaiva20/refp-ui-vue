<template>
  <div>
    <v-layout row-padding row>
      <div class="search-field">
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Pesquisar"
          outline
          single-line
          hide-details
        ></v-text-field>
      </div>
      <div>
        <!-- <v-btn flat icon color="primary">
          <v-icon>filter_list</v-icon>
        </v-btn>-->
      </div>
      <v-spacer></v-spacer>
      <v-btn color="primary">Adicionar</v-btn>
    </v-layout>

    <v-card class="table-position">
      <v-data-table
        :headers="headers"
        :items="enterprises"
        :search="search"
        :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            @page-count="pageCount = $event"
            @click:row="goToProject"
            height="450"
    
      >
      </v-data-table>
      <div>
            <v-pagination v-model="page" :length="pageCount"></v-pagination>
          </div>
    </v-card>
  </div>
</template>

<style>
.table-position {
  top: 30px;
}

.search-field {
  padding-left: 16px;
}

.search-field > v-text-field {
  width: 300px;
}

.btn-new {
  position: relative;
  left: 742px;
}

.row-padding {
  padding-left: 10px;
  padding-right: 10px;
}
</style>


<script>
export default {
  created() {
  //  this.fetch();
  },
  methods: {
    async fetch() {
      // this.isLoading = true;
      // let id = this.$router.currentRoute.params.id;
      // const { data } = await ProjectsRepository.listProjectEnterprises(id);
      // this.isLoading = false;
      // this.projects = data;
    },
  },
  data() {
    return {
      pagination: {},
      search: '',
      headers: [
        { text: 'Código da Empresa', value: 'id' },
        { text: 'Nome Fantasia', value: 'trade' },
        { text: 'Razão Social', value: 'company' },
        { text: 'CNPJ', value: 'cnpj' },
        { text: 'Sigla', value: 'initials' },
      ],
      enterprises: [],
    };
  },
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