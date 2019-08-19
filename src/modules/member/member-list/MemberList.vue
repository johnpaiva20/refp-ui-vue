<template>
  <div>
    <v-layout row class="row-padding">
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
      <v-spacer></v-spacer>
      <div>
        <v-btn color="primary" to="/personal/members/register">Novo</v-btn>
      </div>
    </v-layout>

    <v-card class="table-position">
      <v-data-table
        :headers="headers"
        :items="members"
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

.row-padding {
  padding-left: 10px;
  padding-right: 10px;
}
</style>


<script>
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
const MmebersRepository = RepositoryFactory.get('members');
export default {
  created() {
    this.fetch();
  },
  data() {
    return {
      search: '',
      pagination: {},
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
      this.isLoading = true;
      const { data } = await MmebersRepository.listMembers();
      this.isLoading = false;
      this.enterprises = data;
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