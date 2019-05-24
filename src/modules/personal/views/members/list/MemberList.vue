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
        <v-data-table :headers="headers" :items="desserts" :search="search">
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.calories }}</td>
            <td>{{ props.item.fat }}</td>
            <td>{{ props.item.carbs }}</td>
            <td>{{ props.item.protein }}</td>
            <td>{{ props.item.iron }}</td>
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
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Código do Membro", align: "left", value: "name" },
        { text: "Nome", value: "calories" },
        { text: "Função", value: "fat" },
        { text: "Titulação", value: "carbs" },
        { text: "CPF", value: "protein" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        }
      ]
    };
  }
};
</script>