<template>
  <div>
    <div class="text-xs-right pt-2">
      <v-btn color="primary" @click="dialog = true">Adicionar</v-btn>
    </div>

    <div>
      <v-data-table
        :headers="headers"
        :items="enterprises"
        :pagination.sync="pagination"
        hide-actions
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.company }}</td>
          <td>{{ props.item.cnpj }}</td>
          <td>{{ props.item.trade }}</td>
          <td>{{ props.item.initals }}</td>
          <td>{{ props.item.type }}</td>
        </template>
      </v-data-table>
      <div class="text-xs-right pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </div>
    <!-- Dialog -->
    <v-dialog v-model="dialog" persistent width="800px">
      <v-card>
        <v-card-title class="header-color">Selecionar Empresas</v-card-title>
        <div style="padding:5px 5px 5px 5px;">
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>

          <v-data-table
            v-model="selected"
            :headers="headersDialog"
            :items="enterprisesDialog"
            :search="search"
            :pagination.sync="paginationDialog"
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
              <tr
                :active="props.selectedDialog"
                @click="props.selectedDialog = !props.selectedDialog"
              >
                <td>
                  <v-checkbox :input-value="props.selectedDialog" color="primary" hide-details></v-checkbox>
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
            <v-pagination v-model="paginationDialog.page" :length="pagesDialog"></v-pagination>
          </div>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn flat="flat" @click="dialog = false">Cancelar</v-btn>

          <v-btn color="primary" @click="dialog = false">Adicionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>
.divTable {
  margin-top: 30px;
}
.btnAddEnterprise {
  margin-top: 0px;
}
.divBtn {
  margin-top: 5px;
  margin-bottom: 35px;
}
.header-color {
  background-color: #3e8f52;
  color: white;
  font-size: 20px;
}
</style>



<script>
export default {
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
        { text: "Sigla", value: "initials" },
        { text: "Tipo Empresa", value: "type" }
      ],
      enterprises: [],
      //Dialog
      dialog: false,
      paginationDialog: {},
      selectedDialog: [],
      headersDialog: [
        { text: "Código da Empresa", value: "id" },
        { text: "CNPJ", value: "cnpj" },
        { text: "Razão Social", value: "company" },
        { text: "Nome Fantasia", value: "trade" },
        { text: "Sigla", value: "initials" }
      ],
      enterprisesDialog: []
    };
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
    pagesDialog() {
      if (
        this.paginationDialog.rowsPerPage == null ||
        this.paginationDialog.totalItems == null
      )
        return 0;

      return Math.ceil(
        this.paginationDialog.totalItems / this.paginationDialog.rowsPerPage
      );
    }
  }
};
</script>