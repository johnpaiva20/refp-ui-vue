<template>
  <v-dialog v-model="show" persistent max-width="600px">
    <v-card>
      <v-card-title class="headline primary white--text" primary-title>
        Cadastro de Empresa
        <v-spacer></v-spacer>
        <v-btn icon @click="close()">
          <v-icon class="white--text">close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="pa-0">
        <v-form ref="form" class="ma-5">
          <v-row>
            <v-col cols="5" class="pa-0 pr-1">
              <v-text-field v-model="enterprise.cnpj" label="CNPJ" required outlined dense />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3" class="pa-0 pr-1">
              <v-text-field v-model="enterprise.initials" label="Sigla" required outlined dense />
            </v-col>

            <v-col cols="9" class="pa-0">
              <v-text-field
                v-model="enterprise.company"
                label="Razão Social"
                required
                outlined
                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="pa-0 pr-1">
              <v-text-field
                v-model="enterprise.trade"
                label="Nome Fantasia"
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
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
import { Enterprise } from '../../../workspace/models/Enterprise';
export type VForm = Vue & {
  validate: () => boolean;
  reset: () => boolean;
};
const EnterprisesRepository = RepositoryFactory.getEnterpriseRepository();

interface Snackbar {
  show: boolean;
  message: string;
}

@Component({})
export default class EnterpriseRegisterView extends Vue {
  @Prop()
  value: boolean;

  @Prop()
  edit: boolean;

  @Prop()
  enterprise: Enterprise;

  snackbar: Snackbar = { show: false, message: '' };

  get show() {
    return this.value;
  }

  set show(value) {
    this.$emit('input', value);
  }

  get isEditMode() {
    return this.edit;
  }

  set isEditMode(value) {
    this.$emit('input', value);
  }

  get form() {
    return this.$refs.form as VForm;
  }

  save() {
    EnterprisesRepository.createEnterprise(this.enterprise)
      .then(() => {
        this.$parent.$emit('added');
        this.close();
      })
      .catch((error) => console.log('Error: ' + error));
  }

  close() {
    this.show = false;
  }
}
</script>
