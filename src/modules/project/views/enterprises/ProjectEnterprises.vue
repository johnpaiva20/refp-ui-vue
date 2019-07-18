<template>
  <div>
    <v-layout row>
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
        <v-btn flat icon color="primary">
          <v-icon>filter_list</v-icon>
        </v-btn>
      </div>

      <div class="btn-new">
        <v-btn color="primary">Adicionar</v-btn>
      </div>
    </v-layout>

    <v-card class="table-position">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        hide-actions
        :pagination.sync="pagination"
      >
        <template v-slot:items="props">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.trade }}</td>
          <td>{{ props.item.company }}</td>
          <td>{{ props.item.cnpj }}</td>
          <td>{{ props.item.initials}}</td>
        </template>
        <template v-slot:no-results>
          <v-alert
            :value="true"
            color="error"
            icon="warning"
          >Sua pesquisa por "{{ search }}" não encontrou resultados.</v-alert>
        </template>
      </v-data-table>
      <div class="text-xs-right pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
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
</style>


<script>
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const ProjectsRepository = RepositoryFactory.get("projects");
export default {
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.isLoading = true;
      let id = this.$router.currentRoute.params.id;
      const { data } = await ProjectsRepository.listProjectEnterprises(id);
      this.isLoading = false;
      this.projects = data;
    }
  },
  data() {
    return {
      pagination: {},
      search: "",
      headers: [
        { text: "Código da Empresa", value: "id" },
        { text: "Nome Fantasia", value: "trade" },
        { text: "Razão Social", value: "company" },
        { text: "CNPJ", value: "cnpj" },
        { text: "Sigla", value: "initials" }
      ],
      enterprises: []
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
    }
  }
};
</script>