<template>
  <div>
    <div class="text-xs-right pt-2">
      <v-btn color="primary" @click.stop="dialog = true">Adicionar</v-btn>
    </div>

    <div>
      <v-data-table
        :headers="headers"
        :items="enterprises"
        :pagination.sync="pagination"
        hide-actions
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
    <EnterpriseDialog v-model="dialog" />
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
import EnterpriseDialog from "./EnterpriseDialog";
export default {
  components: {
    EnterpriseDialog
  },
  data() {
    return {
      pagination: {},
      selected: [],
      headers: [
        { text: "Código da Empresa", value: "id" },
        { text: "CNPJ", value: "cnpj" },
        { text: "Razão Social", value: "company" },
        { text: "Nome Fantasia", value: "trade" },
        { text: "Sigla", value: "initials" },
        { text: "Tipo Empresa", value: "type" }
      ],
      enterprises: [],
      dialog: false
    };
  },
  methods: {
    onDialogClose(enterprises) {
      console.log(enterprises);
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