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
          <v-btn color="primary" to="../register/components">Novo</v-btn>
        </div>
      </v-layout>

      <v-card class="project-table-card">
        <v-data-table :headers="headers" :items="enterprises" :search="search">
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
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Código da Empresa", value: "id" },
        { text: "Nome Fantasia", value: "trade" },
        { text: "Razão Social", value: "company" },
        { text: "CNPJ", value: "cnpj" },
        { text: "Sigla", value: "initials" }
      ],
      enterprises: [
        {
          id: 1,
          company: "CELPE",
          trade: "CELPE",
          cnpj: "83.564.577/0001-53",
          initials: "CELPE"
        }
      ]
    };
  },
  methods: {
    goToEnterprise() {
      const id = router.currentRoute.params.id;
      router.push({ path: `/enterprise/${id}/info`});
    }
  }
};
</script>