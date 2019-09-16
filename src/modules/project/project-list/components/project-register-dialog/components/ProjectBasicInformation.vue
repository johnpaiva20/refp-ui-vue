<template>
  <v-form>
    <v-container fluid ma-0 pa-2>
      <v-layout row>
        <v-flex sm3>
          <v-radio-group
            v-model="project.type.id"
            label="Tipo de Projeto"
            class="radioBox"
            row
          >
            <v-radio
              v-for="type in types"
              :key="type.id"
              :label="`${type.description}`"
              :value="type.id"
              :disabled="!type.active"
              color="primary"
            ></v-radio>
          </v-radio-group>
        </v-flex>

        <v-flex xs12 sm2>
          <v-text-field
            v-model="project.aneelId"
            label="Código da ANEEL"
            :rules="aneelIdRule"
            required
          ></v-text-field>
        </v-flex>

        <v-flex sm2>
          <v-text-field
            type="date"
            v-model="project.serviceOrder.begin"
            label="Data de Início"
            :rules="startRule"
            required
          ></v-text-field>
        </v-flex>

        <v-flex sm2>
          <v-text-field
            type="number"
            v-model="project.duration"
            label="Duração"
            suffix="meses"
            :rules="durationRule"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs5 md3 sm12>
          <v-text-field
            v-model="project.serviceOrder.order"
            label="Ordem de Serviço (ODS)"
            :rules="serviceOrderRule"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs12>
          <v-text-field
            v-model="project.title"
            label="Título do Projeto"
            counter="200"
            maxlenght="200"
            :rules="titleRule"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex sm2>
          <v-select
            v-model="project.segment"
            :items="segments"
            value="value"
            item-text="description"
            label="Segmento"
            required
          ></v-select>
        </v-flex>
        <v-flex sm6>
          <v-select
            v-model="project.innovationPhase"
            :items="innovationPhases"
            value="value"
            item-text="description"
            label="Fase da Cadeia de Inovação"
            required
          ></v-select>
        </v-flex>
        <v-flex sm5>
          <v-select
            v-model="project.product.type.id"
            :items="products"
            value="value"
            item-value="id"
            item-text="description"
            label="Tipo do Produto"
            required
          ></v-select>
        </v-flex>
        <v-flex xs5 sm6>
          <v-select
            v-model="project.sharingType"
            :items="sharingTypes"
            value="value"
            item-text="description"
            label="Tipo de Compartilhamento"
            required
          ></v-select>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<style>
.radioBox {
  border: 2px solid #9e9e9e;
  border-radius: 15px;
  padding: 5px;
  height: 95px;
  width: 310px;
}
.container-margin {
  margin-right: 5px;
}
</style>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { Topic } from '../../../../../../workspace/models/Topic';
import { Subtopic } from '../../../../../../workspace/models/Subtopic';
import { ProjectType } from '../../../../../../workspace/models/ProjectType';
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
const ProjectsRepository = RepositoryFactory.getProjectRepository();
@Component({})
export default class ProjectTopicInfomationComponent extends Vue {
  @Prop()
  project: Project;

  aneelIdRule = [(v: any) => !!v || 'Campo obrigatório'];
  serviceOrderRule = [(v: any) => !!v || 'Campo obrigatório'];
  titleRule = [
    (v: any) => !!v || 'Campo obrigatório',
    (v: any) => v.length < 200 || 'Máximo 200 caracteres',
  ];
  durationRule = [
    (v: any) => !!v || 'Campo obrigatório',
    (v: any) => 0 < v || 'Número inválido',
    (v: any) => 48 >= v || 'Máximo 48 meses',
  ];
  startRule = [(v: any) => !!v || 'Campo obrigatório'];
  othertopicRule = [(v: any) => !!v || 'Campo obrigatório'];
  othersubtopicRule = [(v: any) => !!v || 'Campo obrigatório'];


  types = [];
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

  created() {
    this.fetchData();
  }

  fetchData() {
    ProjectsRepository.listProjectTypes()
      .then((response) => {
        this.types = response.data;
      })
      .catch((error) => console.log(error));

    ProjectsRepository.listProjectProductTypes()
      .then((response) => {
        this.products = response.data;
      })
      .catch((error) => console.log(error));
  }
 
}
</script>

