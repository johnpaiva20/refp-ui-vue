<template>
  <v-dialog v-model="show" persistent width="800px">
    <v-card>
      <v-card-title class="header-color">Selecionar Empresas</v-card-title>
      <div style="padding:5px 5px 5px 5px;">
        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="enterprises"
          :search="search"
          :pagination.sync="pagination"
          select-all
          hide-actions
        >
          <template v-slot:headers="props">
            <tr>
              <th>
                <v-checkbox
                  :input-value="props.all"
                  :indeterminate="props.indeterminate"
                  color="primary"
                  hide-details
                  @click.stop="toggleAllModal"
                ></v-checkbox>
              </th>
              <th v-for="header in props.headers" :key="header.text">{{ header.text }}</th>
            </tr>
          </template>
          <template v-slot:items="props">
            <tr
              :active="props.selected"
              @click="props.selected = !props.selected"
            >
              <td>
                <v-checkbox :input-value="props.selected" color="primary" hide-details></v-checkbox>
              </td>
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.cnpj }}</td>
              <td>{{ props.item.company }}</td>
              <td>{{ props.item.trade }}</td>
              <td>{{ props.item.initials }}</td>
            </tr>
          </template>
        </v-data-table>
        <div class="text-xs-right pt-2">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn flat="flat" @click="show = false">Cancelar</v-btn>

        <v-btn color="primary" @click="add">Adicionar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<style>
.header-color {
  background-color: #3e8f52;
  color: white;
  font-size: 20px;
}
</style>



<script>
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const EnterprisesRepository = RepositoryFactory.get("enterprises");
export default {
  props: {
    value: Boolean,
    enterprisesSelected:Array
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      pagination: {},
      selected: [],
      search: "",
      headers: [
        { text: "Código da Empresa", value: "id" },
        { text: "CNPJ", value: "cnpj" },
        { text: "Razão Social", value: "company" },
        { text: "Nome Fantasia", value: "trade" },
        { text: "Sigla", value: "initials" }
      ],
      enterprises: []
    };
  },
  methods: {
    async fetchData() {
      console.log(this.enterprisesSelected)
      await EnterprisesRepository.get()
        .then(response => (this.enterprises = response.data))
        .catch(error => console.log(error));
    },
    toggleAllModal() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.enterprises.slice();
    },
    add() {
      this.$emit("onEnterpriseSelected", this.selected);
      this.show = false;
    },
    close() {
      this.show = false;
    }
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
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
