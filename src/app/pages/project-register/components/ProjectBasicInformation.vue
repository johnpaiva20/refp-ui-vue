<template>
  <v-form ref="basic" class="ma-5">
    <v-row>
      <v-col cols="3" sm="3" class="pt-0 pl-0 pb-0">
        <v-radio-group v-model="project.type" label="Tipo de Projeto" class="radioBox ma-0" :value="project.type">
          <v-radio
            v-for="type in types"
            :key="type.id"
            :label="`${type.description}`"
            :value="type.value"
            :disabled="!type.active"
            color="primary"
            class="radio"
          ></v-radio>
        </v-radio-group>
      </v-col>

      <v-col class="pt-0">
        <v-row>
          <v-col cols="3" class="pa-0">
            <v-text-field
              v-model="project.aneelId"
              label="Código da ANEEL"
              :rules="aneelIdRule"
              required
              outlined
              dense
            />
          </v-col>
          <v-col cols="2" class="pt-0 pl-2 pr-0">
            <v-text-field
              type="date"
              v-model="project.serviceOrder.begin"
              label="Data de Início"
              :rules="startRule"
              required
              outlined
              dense
            />
          </v-col>
          <v-col cols="2" class="pt-0 pl-2 pr-0">
            <v-text-field
              type="number"
              v-model="project.duration"
              label="Duração"
              suffix="meses"
              :rules="durationRule"
              required
              outlined
              dense
            />
          </v-col>
          <v-col class="pt-0">
            <v-text-field
              v-model="project.serviceOrder.number"
              label="Ordem de Serviço (ODS)"
              :rules="serviceOrderRule"
              required
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4" class="pa-0">
            <v-select
              v-model="project.segment"
              :items="segments"
              :value="value"
              item-text="description"
              label="Segmento"
              required
              dense
              outlined
            />
          </v-col>
          <v-col cols="4" class="pt-0 pl-2">
            <v-select
              v-model="project.product.type.id"
              :items="products"
              :value="value"
              item-value="id"
              item-text="description"
              label="Tipo do Produto"
              required
              dense
              outlined
            />
          </v-col>
          <v-col cols="4" class="pt-0 pl-2">
            <v-select
              v-model="project.innovationPhase"
              :items="innovationPhases"
              :value="value"
              item-text="description"
              label="Fase da Cadeia de Inovação"
              required
              dense
              outlined
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="pa-0">
      <v-col class="pa-0">
        <v-text-field
          v-model="project.title"
          label="Título do Projeto"
          counter="200"
          maxlenght="200"
          :rules="titleRule"
          required
          outlined
          dense
        />
      </v-col>
    </v-row>

    <v-row class="pa-0">
      <v-col class="pa-0">
        <v-select
          v-model="project.sharingType"
          :items="sharingTypes"
          :value="value"
          item-text="description"
          label="Tipo de Compartilhamento"
          required
          dense
          outlined
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<style>
.radioBox {
  border: 1.5px solid #9e9e9e;
  border-radius: 10px;
  padding-left: 5px;
  height: 70%;
  width: 100%;
}
.radio {
  padding-top: 3%;
}
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { Topic, Subtopic, ProjectType, Project } from '@/domain/entities';
import { ProjectTypeEnum } from '../../../../domain/enums/ProjectTypeEnum';

@Component({})
export default class ProjectBasicInfomationComponent extends Vue {
  @Prop()
  project: Project;

  v: Function = () =>{};
  aneelIdRule = [(v: string) => !!v || 'Campo obrigatório'];
  serviceOrderRule = [(v: string) => !!v || 'Campo obrigatório'];
  titleRule = [
    (v: string) => !!v || 'Campo obrigatório',
    (v: string) => v.length < 200 || 'Máximo 200 caracteres',
  ];
  durationRule = [
    (v: number) => !!v || 'Campo obrigatório',
    (v: number) => 0 < v || 'Número inválido',
    (v: number) => 48 >= v || 'Máximo 48 meses',
  ];
  startRule = [(v: Date) => !!v || 'Campo obrigatório'];
  othertopicRule = [(v: any) => !!v || 'Campo obrigatório'];
  othersubtopicRule = [(v: any) => !!v || 'Campo obrigatório'];

  types = [
    {
      id: 1,
      value: 'DEVELOPMENT_SEARCH',
      description: 'Pesquisa & Desenvolvimento',
      active: true,
    },
    {
      id: 2,
      value: 'ENERGY_EFFICIENCY',
      description: 'Eficiência Energética',
      active: false,
    },
  ];

  innovationPhases = [
    { value: 'PB', description: 'Pesquisa Básica Dirigida' },
    { value: 'PA', description: 'Pesquisa Aplicada' },
    { value: 'DE', description: 'Desenvolvimento Experimental' },
    { value: 'CS', description: 'Cabeça-de-série' },
    { value: 'LP', description: 'Lote Pioneiro' },
    { value: 'IM', description: 'Inserção no Mercado' },
  ];
  products = [
    { value: 'CM', description: 'Conceito ou Metodologia' },
    { value: 'SW', description: 'Software' },
    { value: 'SM', description: 'Sistema' },
    { value: 'MS', description: 'Material ou Substância' },
    { value: 'CD', description: 'Componente ou Dispositivo' },
    { value: 'ME', description: 'Máquina ou Equipamento' },
  ];
  segments = [
    { value: 'G', description: 'Geração' },
    { value: 'T', description: 'Transmissão' },
    { value: 'D', description: 'Distribuição' },
    { value: 'C', description: 'Comercialização' },
  ];
  topics = [];
  othertopic = false;
  subtopics = [];
  othersubtopic = false;
  sharingTypes = [
    { value: 'DP', description: 'Domínio Público' },
    {
      value: 'EE',
      description: 'Exclusivo da(s) empresa(s) de energia elétrica',
    },
    {
      value: 'EX',
      description: 'Exclusivo da(s) entidade(s) executora(s)',
    },
    {
      value: 'CE',
      description:
        'Compartilhado  entre  as  empresa(s)  de  energia  elétrica e entidade(s) executora(s)',
    },
  ];
}
</script>

