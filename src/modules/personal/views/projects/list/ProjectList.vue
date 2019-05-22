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
          <v-btn color="primary" to="/personal/projects/register">Novo</v-btn>
        </div>
      </v-layout>

      <v-card class="project-table-card">
        <v-data-table :headers="headers" :items="projects" :search="search">
          <template v-slot:items="props">
            <tr @click="goToProject(props.item.id)">
              <td>{{ props.item.aneelId }}</td>
              <td>{{ props.item.type }}</td>
              <td>{{ props.item.startDate }}</td>
              <td>{{ props.item.duration }}</td>
              <td>{{ props.item.serviceOrder }}</td>
              <td>{{ props.item.iron }}</td>
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
import router from "../../../../../router/router";
import api from "@/api/ProjectApi";
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Código ANEEL", value: "aneelId" },
        { text: "Titulo", value: "title" },
        { text: "Tipo do Projeto", value: "type" },
        { text: "Data de Inicio", value: "startDate" },
        { text: "Duração(meses)", value: "duration" },
        { text: "Ordem de Serviço(ODS)", value: "serviceOrder" },
        { text: "Empresa Proponente", value: "iron" },
        { text: "Status", value: "status" }
      ],
      projects: []
    };
  },
  methods: {
    goToProject() {
      const id = router.currentRoute.params.id;
      router.push({ path: `/project/${id}/info`});
    }
  },
  mounted() {
    api
      .listAllProjects()
      .then(response => {
        this.projects = response;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>