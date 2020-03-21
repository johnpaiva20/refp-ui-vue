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
          <v-file-input multiple label="Anexar Documento" outlined dense></v-file-input>
          <v-col cols="2" class="pt-0 pl-2 pr-0">
            <v-text-field type="date" label="Data" required outlined dense />
          </v-col>
          <v-col cols="4" class="pa-0">
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
          <v-col cols="12" sm="6">
            <v-textarea label="Justificativa do gasto" auto-grow outlined></v-textarea>
          </v-col>
          <v-col cols="3" class="pa-0">
            <v-text-field
              label="Número do Documento"
              :rules="aneelIdRule"
              required
              outlined
              dense
            />
          </v-col>
          <v-col cols="4" class="pa-0">
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
           <v-col cols="3" class="pa-0">
            <v-text-field
              label="Valor"
              :rules="aneelIdRule"
              required
              outlined
              dense
            />
          </v-col>
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

interface Snackbar {
  show: boolean;
  message: string;
}

@Component({})
export default class ExpenseRegisterView extends Vue {
  @Prop()
  value: boolean;

  segments = [{ value: 'N', description: 'Nota Fiscal' }];

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
}
</script>