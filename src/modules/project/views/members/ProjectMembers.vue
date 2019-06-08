<template>
  <div class="enterprise-table">
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
        <v-btn color="primary">Adicionar</v-btn>
      </div>
    </v-layout>

    <v-card class="project-table-card">
      <v-data-table :headers="headers" :items="desserts" :search="search">
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
    </v-card>
  </div>
</template>

<style>
.enterprise-table {
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
const ProjectsRepository = RepositoryFactory.get("projects");
export default {
  created() {
    this.fetch();
  },
  data() {
    return {
      search: "",
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
       let id = this.$router.currentRoute.params.id;
      const { data } = await ProjectsRepository.get(id);
      this.isLoading = false;
      this.enterprises = data;
    },
    goToMember() {
      const id = this.$router.currentRoute.params.id;
      this.$router.push({ path: `/member/${id}` });
    }
  }
};
</script>