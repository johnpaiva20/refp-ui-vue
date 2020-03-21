<template>
  <div>
    <v-layout row>
      <div class="search-field">
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Pesquisar"
          box
          single-line
          hide-details
        ></v-text-field>
      </div>
      <v-spacer></v-spacer>

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
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.degree }}</td>
          <td>{{ props.item.role }}</td>
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
  padding-left: 5px;
}

.search-field > v-text-field {
  width: 300px;
}

.btn-new {
  padding-right: 5px;
}
</style>


<script>

export default {
  created() {
    this.fetch();
  },
  data() {
    return {
      pagination: {},
      search: '',
      headers: [
        { text: 'Código do Membro', value: 'id' },
        { text: 'Nome', value: 'name' },
        { text: 'Função', value: 'degree' },
        { text: 'Titulação', value: 'role' },
        { text: 'CPF', value: 'cpf' },
      ],
      members: [],
    };
  },
  methods: {
    async fetch() {
      // this.isLoading = true;
      // let id = this.$router.currentRoute.params.id;
      // const { data } = await ProjectsRepository.listProjectMembers(id);
      // this.isLoading = false;
      // this.enterprises = data;
    },
    goToMember() {
      const id = this.$router.currentRoute.params.id;
      this.$router.push({ path: `/member/${id}` });
    },
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