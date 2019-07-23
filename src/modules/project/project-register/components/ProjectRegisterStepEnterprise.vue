<template>
  <div>
    <v-container style="padding:5px">
      <div class="text-xs-right pt-2">
        <v-btn color="primary" @click.stop="dialog = true">Adicionar</v-btn>
      </div>
      <div>
        <v-data-table
          :headers="headers"
          :items="enterprises"
          :pagination.sync="pagination"
          select-all
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
                <v-flex xs12 sm6 d-flex>
                  <v-select
                    :items="enterpriseRoles"
                    label="Tipo de empresa"
                    style="margin-top:10px;"
                    v-model="props.item.type"
                    solo
                    @change="setEnterpriseType(props.item)"
                  ></v-select>
                </v-flex>
                <!-- <b-form-select id="input-11">
                <option :value="null" disabled>Tipo Empresa</option>
                <option
                  v-for="role in enterpriseRoles"
                  v-bind:key="role.value"
                  :value="role.value"
                >{{role.text}}</option>
                </b-form-select>-->
              </td>
              <td class="justify-center">
                <v-icon @click="deleteItem(props.item)">delete</v-icon>
              </td>
            </tr>
          </template>
          <template v-slot:no-data>
            <v-alert :value="true" color="primary" icon="info">Nenhuma empresa adiconada</v-alert>
          </template>
        </v-data-table>
        <!-- <div class="text-xs-right pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div>-->
      </div>
      <EnterpriseDialog v-model="dialog" @onEnterpriseSelected="onEnterpriseSelected" />
      <v-snackbar
        v-model="snackbar.show"
        :bottom="true"
        :multi-line="true"
        :right="true"
        :timeout="3000"
        :vertical="false"
        :color="snackbar.color"
      >
        <v-icon color="white">error_outline</v-icon>
        {{snackbar.message}}
      </v-snackbar>
    </v-container>
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
      dialog: false,
      enterpriseRoles: [
        { text: "Proponente", value: "P" },
        { text: "Cooperada", value: "C" }
      ],
      enterprises: [],
      snackbar: {
        show: false,
        color: "primary",
        message: ""
      }
    };
  },
  methods: {
    onEnterpriseSelected(enterprises) {
      enterprises.forEach(e => {
        if (this.enterprises.includes(e)) {
          this.snackbar.show = true;
          this.snackbar.message = "Empresa adicionada anteriormente";
          this.snackbar.color = "error";
        } else {
          this.enterprises.push(e);
        }
      });
      this.enterprisesChanged();
    },
    deleteItem(item) {
      const index = this.enterprises.indexOf(item);
      this.enterprises.splice(index, 1);
    },
    setEnterpriseType(item) {
      const index = this.enterprises.indexOf(item);
      this.enterprises[index].type = item.type;
      this.enterprisesChanged();
    },
    enterprisesChanged() {
      this.$emit("update-enterprises-selected", this.enterprises);
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