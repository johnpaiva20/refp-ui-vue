<template>
  <v-app>
    <div class="project-table">
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
        <div>
          <v-btn flat icon color="primary">
            <v-icon>filter_list</v-icon>
          </v-btn>
        </div>

        <div class="btn-new">
          <v-btn color="primary" to="/personal/members/register">Novo</v-btn>
        </div>
      </v-layout>

      <v-card class="project-table-card">
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
  </v-app>
</template>

<style>
.project-table {
  position: relative;
  top: 50px;
  padding: 30px 5px 15px 5px;
}

.project-table-card {
  top: 40px;
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
const MmebersRepository = RepositoryFactory.get("members");
export default {
  created() {
    this.fetch();
  },
  data() {
    return {
      search: "",
      pagination: {},
      headers: [
        { text: "Código do Membro", value: "id" },
        { text: "Nome", value: "name" },
        { text: "Função", value: "degree" },
        { text: "Titulação", value: "role" },
        { text: "CPF", value: "cpf" }
      ],
      members: []
    };
  },
  methods: {
    async fetch() {
      this.isLoading = true;
      const { data } = await MmebersRepository.getMembers();
      this.isLoading = false;
      this.enterprises = data;
    },
    goToMember() {
      const id = this.$router.currentRoute.params.id;
      this.$router.push({ path: `/member/${id}` });
    }
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