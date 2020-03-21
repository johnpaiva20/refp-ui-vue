<template>
  <v-dialog v-model="show" persistent max-width="800px">
    <v-card>
      <v-card-title class="headline primary white--text" primary-title>
        Cadastro de Membro
        <v-spacer></v-spacer>
        <v-btn icon @click="close()">
          <v-icon class="white--text">close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="pa-0">
        <v-form class="ma-5">
        <v-row class="mb-2">
          <v-col cols="12" class="pa-0 pr-1">
            <v-avatar size="160" color="primary">
              <v-icon dark>mdi-account-circle</v-icon>
            </v-avatar>
          </v-col>
        </v-row>
          <v-row>
            <v-col cols="12" class="pa-0 pr-1">
              <v-text-field v-model="member.name" label="Nome Completo" required outlined dense />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="4" class="pa-0 pr-1">
              <v-radio-group v-model="member.brazilian" label="Brasileiro?" class="ma-0 pa-0" row>
                <v-radio color="primary" label="Sim" value="S"></v-radio>
                <v-radio color="primary" label="Não" value="N"></v-radio>
              </v-radio-group>
            </v-col>

            <v-col cols="3" class="pa-0 pr-1">
              <v-text-field
                v-model="member.company"
                :label="member.brazilian=='S'?'CPF':'Documento'"
                required
                outlined
                dense
              />
            </v-col>
            <v-col cols="5" class="pa-0">
              <v-text-field v-model="member.email" label="Email" required outlined dense />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="3" class="pa-0 pr-1">
              <v-text-field
                v-model="member.trade"
                label="Data de Nascimento"
                type="date"
                required
                outlined
                dense
              />
            </v-col>
            <v-col cols="4" class="pa-0">
              <v-select
                v-model="member.nomination"
                :items="nominations"
                value="value"
                item-text="description"
                label="Titulação"
                required
                dense
                outlined
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
import { Member } from '@/domain/entities';

interface Snackbar {
  show: boolean;
  message: string;
}

@Component({})
export default class MemberRegisterView extends Vue {
  @Prop()
  value: boolean;

  member: Member = new Member();

  snackbar: Snackbar = { show: false, message: '' };

  nominations = [
    { value: 'G', description: 'Doutor' },
    { value: 'T', description: 'Transmissão' },
    { value: 'D', description: 'Distribuição' },
    { value: 'C', description: 'Comercialização' },
  ];

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