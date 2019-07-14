<template>
  <div>
    <div class="search-field">
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Pesquisar"
        outline
        single-line
        hide-details
        class="labelSearch"
      ></v-text-field>
    </div>

    <div class="btn-new">
      <v-btn color="primary" to="/personal/projects/register">Novo</v-btn>
    </div>

    <v-card class="project-table-card">
      <v-data-table
        :headers="headers"
        :items="projects"
        :search="search"
        hide-actions
        :pagination.sync="pagination"
        loading="isLoading"
      >
        <template v-slot:items="props">
          <tr @click="goToProject(props.item)">
            <td>{{ props.item.aneelId }}</td>
            <td>{{ props.item.title }}</td>
            <td>{{ props.item.type }}</td>
            <td>{{ props.item.start }}</td>
            <td>{{ props.item.duration }}</td>
            <td>{{ props.item.serviceOrder }}</td>
            <td>{{ props.item.principalEnterprise }}</td>
            <td>{{ props.item.status }}</td>
          </tr>
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
.statusAberto {
  color: green;
  font-weight: bold;
}
.statusFechado {
  color: red;
  font-weight: bold;
}
.project-table {
  position: relative;
  padding: 30px 5px 15px 5px;
}

.project-table-card {
  top: 40px;
}

.search-field {
  padding-left: 5px;
  padding-top: 5px;
}

.search-field > v-text-field {
  width: 300px;
}

.btn-new {
  position: relative;
  left: 742px;
}
.labelSearch {
  width: 300px;
}
</style>


<script>
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const ProjectsRepository = RepositoryFactory.get("projects");

export default {
  data() {
    return {
      search: "",
      pagination: {},
      isLoading: false,
      headers: [
        { text: "Código ANEEL", value: "aneelId" },
        { text: "Titulo", value: "title" },
        { text: "Tipo do Projeto", value: "type" },
        { text: "Data de Inicio", value: "start" },
        { text: "Duração(meses)", value: "duration" },
        { text: "Ordem de Serviço(ODS)", value: "serviceOrder" },
        { text: "Empresa Proponente", value: "principalEnterprise" },
        { text: "Status", value: "status" }
      ],
      projects: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      this.isLoading = true;
      const { data } = await ProjectsRepository.get();
      this.isLoading = false;
      this.projects = data;
    },
    goToProject(project) {
      this.$router.push({
        path: `/project/${project.id}/info`,
        params: { id: project.id }
      });
    }
  },
  mounted() {},
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