<template>
  <v-container>
    <v-layout row>
        <v-flex sm2>
          <v-radio-group v-model="project.type" label="Tipo de Projeto" @change="typeChanged()" row>
            <v-radio
              v-for="type in types"
              :key="type.id"
              :label="`${type.name}`"
              :value="type.value"
              :disabled="type.active"
              color="primary"
            ></v-radio>
          </v-radio-group>
        </v-flex>
      <v-layout row>
        <v-container>
          <v-layout row>
            <v-flex xs12 sm6 md3>
              <v-text-field v-model="project.aneelId" label="Código da ANEEL" required></v-text-field>
            </v-flex>
            <v-flex xs5 md4>
              <v-text-field
                type="date"
                v-model="project.start"
                label="Data de Início do Projeto"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field
                type="number"
                v-model="project.duration"
                label="Duração"
                suffix="meses"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md4>
              <v-text-field v-model="project.serviceOrder" label="Ordem de Serviço (ODS)" required></v-text-field>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12>
              <v-text-field
                v-model="project.title"
                label="Título do Projeto"
                counter="200"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
    </v-layout>
    <v-layout row>
      <v-flex sm2>
        <v-select
          v-model="project.segment"
          :items="segments"
          value="value"
          item-text="description"
          label="Segmento"
        ></v-select>
      </v-flex>
      <v-flex sm6>
        <v-select
          v-model="project.innovationPhase"
          :items="innovationPhases"
          value="value"
          item-text="description"
          label="Fase da Cadeia de Inovação"
        ></v-select>
      </v-flex>
      <v-flex sm5>
        <v-select
          v-model="project.product"
          :items="products"
          value="value"
          item-text="description"
          label="Tipo do Produto"
        ></v-select>
      </v-flex>
      <v-flex xs5 sm6>
        <v-select
          v-model="project.sharingType"
          :items="sharingTypes"
          value="value"
          item-text="description"
          label="Tipo de Compartilhamento"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-select
          v-model="project.topic"
          :items="topics"
          item-value="initials"
          item-text="description"
          label="Tema do Projeto"
          @change="topicChanged()"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 v-if="true">
        <v-textarea v-model="project.othertopic" label="Sugestão de Tema" auto-grow counter="1000"></v-textarea>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-select
          v-model="project.subtopic"
          :items="subtopics"
          value="initials"
          item-text="description"
          label="Subtema do Projeto"
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 v-if="true">
        <v-textarea
          v-model="project.othersubtopic"
          label="Sugestão de Subtema"
          auto-grow
          counter="1000"
        ></v-textarea>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.radioBox {
  border: 2px solid black;
  border-radius: 15px;
  padding: 20px;
  height: 120px;
  margin-bottom: 10px;
  margin-top: 0px;
  width: 200px;
}
</style>

<script>
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const ProjectsRepository = RepositoryFactory.get("projects");
export default {
  data() {
    return {
      project: {
        aneelId: "",
        title: "",
        start: "",
        duration: "",
        serviceOrder: "",
        type: "",
        innovationPhase: null,
        product: null,
        segment: null,
        topic: null,
        subtopic: null,
        sharingType: null
      },
      types: [],
      innovationPhases: [
        { value: "PB", description: "Pesquisa Básica Dirigida" },
        { value: "PA", description: "Pesquisa Aplicada" },
        { value: "DE", description: "Desenvolvimento Experimental" },
        { value: "CS", description: "Cabeça-de-série" },
        { value: "LP", description: "Lote Pioneiro" },
        { value: "IM", description: "Inserção no Mercado" }
      ],
      products: [
        { value: "CM", description: "Conceito ou Metodologia" },
        { value: "SW", description: "Software" },
        { value: "SM", description: "Sistema" },
        { value: "MS", description: "Material ou Substância" },
        { value: "CD", description: "Componente ou Dispositivo" },
        { value: "ME", description: "Máquina ou Equipamento" }
      ],
      segments: [
        { value: "G", description: "Geração" },
        { value: "T", description: "Transmissão" },
        { value: "D", description: "Distribuição" },
        { value: "C", description: "Comercialização" }
      ],
      topics: [],
      subtopics: [],
      sharingTypes: [
        { value: "DP", description: "Domínio Público" },
        {
          value: "EE",
          description: "Exclusivo da(s) empresa(s) de energia elétrica"
        },
        {
          value: "EX",
          description: "Exclusivo da(s) entidade(s) executora(s)"
        },
        {
          value: "CE",
          description:
            "Compartilhado  entre  as  empresa(s)  de  energia  elétrica e entidade(s) executora(s)"
        }
      ]
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      await ProjectsRepository.getTypes()
        .then(response => (this.types = response.data))
        .catch(error => console.log(error));
    },
    typeChanged() {
      ProjectsRepository.getTopics(this.project.type).then(
        response => (this.topics = response.data)
      );
    },
    topicChanged() {
      ProjectsRepository.getTopicSubtopic(this.project.topic).then(
        response => (this.subtopics = response.data)
      );
    }
  },
  watch: {
    project: {
      handler: function(val) {
        this.$emit("onProjectChange", val);
      },
      deep: true
    }
  }
};
</script>