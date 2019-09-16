<template>
  <v-form>
    <v-container fluid ma-0 pa-2 >
      <v-layout row>
        <v-flex sm3>
          <v-radio-group
            v-model="project.type.id"
            label="Tipo de Projeto"
            class="radioBox"
            @change="typeChanged()"
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
            :rules="rules.aneelId"
            required
          ></v-text-field>
        </v-flex>

        <v-flex sm2>
          <v-text-field
            type="date"
            v-model="project.serviceOrder.begin"
            label="Data de Início"
            :rules="rules.start"
            required
          ></v-text-field>
        </v-flex>

        <v-flex sm2>
          <v-text-field
            type="number"
            v-model="project.duration"
            label="Duração"
            suffix="meses"
            :rules="rules.duration"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs5 md3 sm12>
          <v-text-field
            v-model="project.serviceOrder.order"
            label="Ordem de Serviço (ODS)"
            :rules="rules.serviceOrder"
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
            :rules="rules.title"
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
  width: 267px;
}
.container-margin {
  margin-right: 5px;
}
</style>

<script>
import { RepositoryFactory } from '@/repositories/RepositoryFactory';
const ProjectsRepository = RepositoryFactory.get('projects');
export default {
  props: ['project'],
  data() {
    return {
      rules: {
        aneelId: [(v) => !!v || 'Campo obrigatório'],
        serviceOrder: [(v) => !!v || 'Campo obrigatório'],
        title: [
          (v) => !!v || 'Campo obrigatório',
          (v) => v.length < 200 || 'Máximo 200 caracteres',
        ],
        duration: [
          (v) => !!v || 'Campo obrigatório',
          (v) => 0 < v || 'Número inválido',
          (v) => 48 >= v || 'Máximo 48 meses',
        ],
        start: [(v) => !!v || 'Campo obrigatório'],
        othertopic: [(v) => !!v || 'Campo obrigatório'],
        othersubtopic: [(v) => !!v || 'Campo obrigatório'],
      },
      types: [],
      innovationPhases: [
        { value: 'PB', description: 'Pesquisa Básica Dirigida' },
        { value: 'PA', description: 'Pesquisa Aplicada' },
        { value: 'DE', description: 'Desenvolvimento Experimental' },
        { value: 'CS', description: 'Cabeça-de-série' },
        { value: 'LP', description: 'Lote Pioneiro' },
        { value: 'IM', description: 'Inserção no Mercado' },
      ],
      products: [
        { value: 'CM', description: 'Conceito ou Metodologia' },
        { value: 'SW', description: 'Software' },
        { value: 'SM', description: 'Sistema' },
        { value: 'MS', description: 'Material ou Substância' },
        { value: 'CD', description: 'Componente ou Dispositivo' },
        { value: 'ME', description: 'Máquina ou Equipamento' },
      ],
      segments: [
        { value: 'G', description: 'Geração' },
        { value: 'T', description: 'Transmissão' },
        { value: 'D', description: 'Distribuição' },
        { value: 'C', description: 'Comercialização' },
      ],
      topics: [],
      othertopic: false,
      subtopics: [],
      othersubtopic: false,
      sharingTypes: [
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
      ],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      ProjectsRepository.listProjectTypes()
        .then((response) => {
          this.types = response.data;
          this.typeChanged();
        })
        .catch((error) => console.log(error));

      ProjectsRepository.listProjectProductTypes()
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => console.log(error));
    },
    typeChanged() {
      ProjectsRepository.listProjectTopics(this.project.type.id).then(
        (response) => (this.topics = response.data)
      );
    },
    topicChanged() {
      let topic = this.topics.find((o) => o.id == this.project.topic.id);

      if (topic.initials == 'OU') {
        this.othertopic = true;
      } else {
        this.othertopic = false;
      }

      ProjectsRepository.listProjectSubtopics(topic.initials).then(
        (response) => (this.subtopics = response.data)
      );
    },
    subtopicChanged() {
      if (this.project.subtopic.initials == 'OU') {
        this.othersubtopic = true;
      } else {
        this.othersubtopic = false;
      }
    },
  },
};
</script>