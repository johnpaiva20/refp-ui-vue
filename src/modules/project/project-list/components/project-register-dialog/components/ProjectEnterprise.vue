<template>
  <div>
    <v-container fluid ma-0 pa-2>
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
      <enterprise-dialog v-model="dialog" @onSelected="onSelected" />
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


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Emit } from 'vue-property-decorator';
import { Project } from '../../../../../../workspace/models/Project';
import EnterpriseDialog from '../components/EnterpriseDialog.vue';
import { Enterprise } from '../../../../../../workspace/models/Enterprise';
import { ProjectEnterprise } from '../../../../../../workspace/models/ProjectEnterprise';
@Component({
  components: {
    'enterprise-dialog': EnterpriseDialog,
  },
})
export default class ProjectCardComponent extends Vue {
  @Prop()
  project: Project;

  enterprises: Enterprise[] = [];

  dialog = false;

  pagination = {
    rowsPerPage: 0,
    totalItems: 0,
  };
  headers = [
    { text: 'Código da Empresa', value: 'id' },
    { text: 'CNPJ', value: 'cnpj' },
    { text: 'Razão Social', value: 'company' },
    { text: 'Nome Fantasia', value: 'trade' },
    { text: 'Tipo Empresa', value: 'type' },
  ];

  enterpriseRoles = [
    { text: 'Proponente', value: 'P' },
    { text: 'Cooperada', value: 'C' },
  ];

  snackbar = {
    show: false,
    color: 'primary',
    message: '',
  };

  onSelected(enterprises: Enterprise[]) {
    enterprises.forEach((e: Enterprise) => {
      if (this.enterprises.includes(e)) {
        this.snackbar.show = true;
        this.snackbar.message = 'Empresa adicionada anteriormente';
        this.snackbar.color = 'error';
      } else {
        this.enterprises.push(e);
      }
    });
  }

  get pages() {
    if (
      this.pagination.rowsPerPage == null ||
      this.pagination.totalItems == null
    )
      return 0;

    return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage);
  }

  set pages(value) {
    this.$emit('input', value);
  }
}
</script>