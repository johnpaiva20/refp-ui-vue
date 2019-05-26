<template>
  <v-dialog v-model="dialog" persistent width="800px">
    <v-card>
      <v-card-title class="header-color">Selecionar Empresas</v-card-title>
      <div style="padding:5px 5px 5px 5px;">
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>

        <v-data-table
          v-model="selected"
          :headers="headers"
          :items="enterprises"
          :search="search"
          :pagination.sync="pagination"
          select-all
          hide-actions
          item-key="id"
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
            <tr :active="props.selected" @click="props.selected = !props.selected">
              <td>
                <v-checkbox :input-value="props.selected" color="primary" hide-details></v-checkbox>
              </td>
              <td>{{ props.item.id }}</td>
              <td class="text-xs-right">{{ props.item.cnpj }}</td>
              <td class="text-xs-right">{{ props.item.company }}</td>
              <td class="text-xs-right">{{ props.item.trade }}</td>
              <td class="text-xs-right">{{ props.item.initials }}</td>
            </tr>
          </template>
        </v-data-table>
        <div class="text-xs-right pt-2">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn flat="flat" @click="dialog = false">Cancelar</v-btn>

        <v-btn color="primary" @click="dialog = false">Adicionar</v-btn>
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
export default {
  props: { show: Boolean },
  created() {
    this.dialog = this.show;
  },
  data() {
    return {
      pagination: {},
      selected: [],
      search: "",
      dialog: false,
      headers: [
        { text: "Código da Empresa", value: "id" },
        { text: "CNPJ", value: "cnpj" },
        { text: "Razão Social", value: "company" },
        { text: "Nome Fantasia", value: "trade" },
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
    toggleAllModal() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.enterprises.slice();
    },
    close() {
      this.$emit("onDialogClose", this.selected);
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
