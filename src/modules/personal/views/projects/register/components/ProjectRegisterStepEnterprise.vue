<template>
  <div>
    <div class="text-xs-right pt-2">
      <v-btn color="primary" @click.stop="dialog = true">Adicionar</v-btn>
    </div>

    <div>
      <v-data-table
        :headers="headers"
        :items="enterprises"
        select-all
        :pagination.sync="pagination"
        hide-actions
      >
        <template v-slot:headers="props">
          <tr>
            <th v-for="header in props.headers" :key="header.text">{{ header.text }}</th>
          </tr>
        </template>
        <template v-slot:items="props">
          <tr>
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.cnpj }}</td>
            <td>{{ props.item.company }}</td>
            <td>{{ props.item.trade }}</td>
            <td>
              <b-form-select id="input-11">
                <option :value="null" disabled>Tipo Empresa</option>
                <option
                  v-for="role in enterpriseRoles"
                  v-bind:key="role.value"
                  :value="role.value"
                >{{role.text}}</option>
              </b-form-select>
            </td>
            <td class="justify-center">
              <v-icon @click="deleteItem(props.item)">delete</v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
      <div class="text-xs-right pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </div>
    <EnterpriseDialog v-model="dialog" @onEnterpriseSelected="onEnterpriseSelected"/>
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
      headers: [
        { text: "Código da Empresa", value: "id" },
        { text: "CNPJ", value: "cnpj" },
        { text: "Razão Social", value: "company" },
        { text: "Nome Fantasia", value: "trade" },
        { text: "Tipo Empresa", value: "type" }
      ],
      enterprises: [],
      dialog: false,
      enterpriseRoles: [
        { text: "Proponente", value: "P" },
        { text: "Cooperada", value: "C" }
      ]
    };
  },
  methods: {
    onEnterpriseSelected(enterprises) {
      this.enterprises = this.enterprises.concat(enterprises);
    },
    deleteItem (item) {
        const index = this.enterprises.indexOf(item)
        this.enterprises.splice(index, 1)
      },
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