<template>
  <v-dialog v-model="show" persistent max-width="800px">
    <v-card>
      <v-card-title class="headline primary white--text" primary-title>
        Adicionar Despesa
        <v-spacer></v-spacer>
        <v-btn icon @click="close()">
          <v-icon class="white--text">close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="pa-0">
        <v-form class="ma-5">
          <v-row>
            <v-col class="pa-0 mr-2" cols="8" v-if="!isProject">
              <v-autocomplete
                v-model="expense.projResource.codigo"
                outlined
                dense
                label="Projeto"
                :items="projects"
                item-text="title"
                item-value="id"
                :loading="isLoading"
              >
                <template v-slot:no-data>
                  <v-list-item>
                    <v-list-item-title>
                      Procure por
                      <strong>Projetos</strong>
                    </v-list-item-title>
                  </v-list-item>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col class="pa-0">
              <v-select
                v-model="expense.expenseType"
                :items="accountingCategories"
                :value="value"
                item-text="description"
                label="Rubrica"
                required
                dense
                outlined
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="2" class="pa-0 mr-2">
              <v-text-field
                v-model="expense.data"
                type="date"
                label="Data"
                required
                outlined
                dense
              />
            </v-col>
            <v-col cols="6" class="pa-0 mr-2">
              <v-text-field
                label="Número do Documento"
                v-model="expense.documentNumber"
                required
                outlined
                dense
              />
            </v-col>
            <v-col class="pa-0">
              <v-select
                v-model="expense.documentType"
                :items="documentTypes"
                :value="value"
                item-text="description"
                label="Tipo de Documento"
                required
                dense
                outlined
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="pa-0 mr-2">
              <v-text-field
                label="Beneficiado"
                v-model="expense.recipient"
                required
                outlined
                dense
              />
            </v-col>
            <v-col cols="5" class="pa-0 mr-2">
              <v-text-field
                label="CNPJ/CPF"
                v-model="expense.cpfCnpj"
                required
                outlined
                dense
              />
            </v-col>
          </v-row>

          <v-row>
            <v-col class="pa-0">
              <v-textarea
                label="Justificativa do gasto"
                v-model="expense.justify"
                auto-grow
                outlined
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="pa-0 mr-2">
              <v-file-input
                label="Anexar Documento"
                type="file"
                id="file"
                ref="file"
                @change="onAddFiles"
                outlined
                dense
                accept="image/jpeg"
              ></v-file-input>
            </v-col>
            <v-col cols="4" class="pa-0">
              <v-text-field
                label="Valor"
                type="number"
                v-model="expense.value"
                required
                outlined
                dense
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close()">Cancelar</v-btn>
        <v-btn color="primary" @click="save()">Salvar</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
      v-model="snackbar.show"
      :bottom="true"
      :multi-line="true"
      :right="true"
      :timeout="3000"
      :vertical="false"
      :color="snackbar.color"
    >{{snackbar.message}}</v-snackbar>
  </v-dialog>
</template> 

<style>
</style>
 

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import store from '../../../domain/store';
import {
  FETCH_PROJECTS,
  SAVE_EXPENSE,
} from '../../../domain/store/actions.type';
import { Project, Expense } from '../../../domain/entities';
import { AxiosResponse } from 'axios';
import Snackbar from '../../utils/snackbar';
import ConverterUtil from '../../../domain/utils/converter_utils';

@Component({})
export default class ExpenseRegisterView extends Vue {
  @Prop()
  value: boolean;

  @Prop()
  isProject: boolean;

  projects: Project[] = [];

  current: File;

  documentTypes = [{ value: 'NF', description: 'Nota Fiscal' }];

  accountingCategories = [
    { value: 'RH', description: 'Recursos Humanos' },
    { value: 'MC', description: 'Materiais de Consumo' },
    { value: 'MP', description: 'Materiais Permanentes e Equipamentos' },
    { value: 'ST', description: 'Serviços de Terceiros' },
    { value: 'VD', description: 'Viagens e Diárias' },
    { value: 'OU', description: 'Outros' },
  ];

  snackbar: Snackbar = { show: false, message: '', color: 'error' };

  expense: Expense = new Expense();

  file: File;

  created() {
    if (!this.isProject) {
      this.fetchProjects();
    } else {
      var projectId = this.$route.params.id;
      this.expense.projResource.codigo = Number(projectId);
    }
  }

  async fetchProjects() {
    store
      .dispatch(FETCH_PROJECTS)
      .then((response: AxiosResponse) => {
        this.projects = response.data;
      })
      .catch((error) => {
        console.log('Error Loading Projects ' + error);
      });
  }

  get show() {
    return this.value;
  }

  set show(value) {
    this.$emit('input', value);
  }

  async save() {
    if (this.file) {
      await ConverterUtil.getBase64Promise(this.file).then((data) => {
        this.expense.image = 'data:image/jpeg;base64,'+ String(data);
      });
    }
    store
      .dispatch(SAVE_EXPENSE, this.expense)
      .then((response: AxiosResponse) => {
        if (response.status == 201) {
          this.snackbar = {
            show: true,
            message: 'Despesa Criada com sucesso',
            color: 'success',
          };

          this.close();
        } else {
          this.snackbar = {
            show: true,
            message: response.data.message,
            color: 'info',
          };
        }
      })
      .catch((error) => {
        console.log(error)
        this.snackbar = { show: true, message: error.message, color: 'error' };
      });
  }

  close() {
    this.show = false;
  }

  get isLoading() {
    return this.$store.state.project.isLoadingProjects;
  }

  onAddFiles(file: any) {
    this.file = file;
  }
}
</script>