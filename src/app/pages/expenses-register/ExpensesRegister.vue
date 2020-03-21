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
            <v-col class="pa-0 mr-2" cols="8">
              <v-autocomplete
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
                      Procure por projetos
                      <strong>Projetos</strong>
                    </v-list-item-title>
                  </v-list-item>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col class="pa-0">
              <v-select
                :items="segments"
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
              <v-text-field type="date" label="Data" required outlined dense />
            </v-col>
            <v-col cols="6" class="pa-0 mr-2">
              <v-text-field label="Número do Documento" required outlined dense />
            </v-col>
            <v-col class="pa-0">
              <v-select
                :items="segments"
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
            <v-col class="pa-0">
              <v-textarea label="Justificativa do gasto" auto-grow outlined></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" class="pa-0 mr-2">
              <v-file-input multiple label="Anexar Documento" outlined dense></v-file-input>
            </v-col>
            <v-col cols="4" class="pa-0">
              <v-text-field label="Valor" required outlined dense />
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
    <!-- <v-snackbar
      v-model="snackbar"
      :bottom="true"
      :multi-line="true"
      :right="true"
      :timeout="3000"
      :vertical="false"
      color="error"
    >{{snackbar.message}}</v-snackbar>-->
  </v-dialog>
</template> 

<style>
</style>
 

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import store from '../../../domain/store';
import { FETCH_PROJECTS } from '../../../domain/store/actions.type';
import { Project } from '../../../domain/entities';
import { AxiosResponse } from 'axios';

interface Snackbar {
  show: boolean;
  message: string;
}

@Component({})
export default class ExpenseRegisterView extends Vue {
  @Prop()
  value: boolean;

  projects: Project[] = [];
  segments = [{ value: 'N', description: 'Nota Fiscal' }];

  created() {
    this.fetchProjects();
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

  save() {}

  close() {
    this.show = false;
  }

   get isLoading() {
    return this.$store.state.project.isLoadingProjects;
  }

}
</script>