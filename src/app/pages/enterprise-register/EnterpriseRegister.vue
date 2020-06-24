<template>
  <v-dialog v-model="show" persistent max-width="600px">
    <v-card>
      <v-card-title class="headline primary white--text" primary-title>
        {{formTitle}}
        <v-spacer></v-spacer>
        <v-btn icon @click="close()">
          <v-icon class="white--text">close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="pa-0">
        <v-form ref="form" class="ma-5">
          <v-row>
            <v-col cols="5" class="pa-0 pr-1">
              <v-text-field v-model="enterprise.cnpj" :disabled="isEditMode" label="CNPJ" required outlined dense />
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
        <v-btn color="primary" @click="save()">{{saveButton}}</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
      v-model="snackbar.show"
      bottom
      multi-line
      right
      :timeout="3000"
      :color="snackbar.color"
    >{{snackbar.message}}</v-snackbar>
  </v-dialog>
</template>

<style>
</style>



<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Enterprise } from '@/domain/entities';
import store from '@/domain/store';
import { AxiosResponse } from 'axios';
import { SAVE_ENTERPRISE } from '../../../domain/store/actions.type';
import Snackbar from '../../utils/snackbar';
export type VForm = Vue & {
  validate: () => boolean;
  reset: () => boolean;
};

@Component({})
export default class EnterpriseRegisterView extends Vue {
  @Prop()
  value: boolean;

  @Prop()
  edit: boolean;

  @Prop()
  enterprise: Enterprise;

  title: String = !this.isEditMode ? 'Cadastro de Empresa' : 'Editar Empresa';

  saveButton: String = !this.isEditMode ? 'Salvar' : 'Atualizar';

  snackbar: Snackbar = { show: false, message: '', color: 'info' };

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

  get formTitle() {
    return this.isEditMode === false ?'Cadastro de Empresa' : 'Editar Empresa';
  }

  async save() {
    if (!this.isEditMode) {
      store
        .dispatch(SAVE_ENTERPRISE, this.enterprise)
        .then((response: AxiosResponse) => {
          if (response.status == 201) {
            this.snackbar = {
              show: true,
              message: 'Empresa criada com sucesso',
              color: 'success',
            };
            this.$parent.$emit('add');
            if (this.snackbar.show) {
              this.close();
            }
          } else {
            this.snackbar = {
              show: true,
              message: response.data.message,
              color: 'info',
            };
          }
        })
        .catch((error) => {
          this.snackbar = {
            show: true,
            message: error.message,
            color: 'error',
          };
        });
    } else {
      this.close();
    }
  }

  close() {
    this.show = false;
  }
}
</script>
