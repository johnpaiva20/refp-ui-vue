<template>
  <v-form>
    <v-container>
      <v-layout row>
        <v-flex sm3>
          <v-radio-group
            v-model="project.type"
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

        <v-flex xs12 sm6 md3>
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
            v-model="project.start"
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

        <v-flex xs12 md4>
          <v-text-field
            v-model="project.serviceOrder"
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
        <v-flex xs12 v-if="othertopic">
          <v-textarea
            v-model="project.othertopic"
            label="Sugestão de Tema"
            auto-grow
            counter="1000"
          ></v-textarea>
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
            @change="subtopicChanged()"
          ></v-select>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 v-if="othersubtopic">
          <v-textarea
            v-model="project.othersubtopic"
            label="Sugestão de Subtema"
            auto-grow
            counter="1000"
          ></v-textarea>
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
</style>

<script>
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const ProjectsRepository = RepositoryFactory.get("projects");
export default {
  data() {
    return {
      rules: {
        aneelId: [v => !!v || "Campo obrigatório"],
        serviceOrder: [v => !!v || "Campo obrigatório"],
        title: [
          v => !!v || "Campo obrigatório",
          v => v.length < 200 || "Máximo 200 caracteres"
        ],
        duration: [
          v => !!v || "Campo obrigatório",
          v => 0 < v || "Número inválido",
          v => 48 >= v || "Máximo 48 meses"
        ],
        start: [v => !!v || "Campo obrigatório"],
        othertopic: [v => !!v || "Campo obrigatório"],
        othersubtopic: [v => !!v || "Campo obrigatório"]
      },
      project: {
        aneelId: "",
        title: "",
        start: "",
        duration: "",
        serviceOrder: "",
        type: "PD",
        innovationPhase: null,
        product: null,
        segment: null,
        topic: null,
        othertopic: null,
        subtopic: null,
        othersubtopic: null,
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
      othertopic: false,
      subtopics: [],
      othersubtopic: false,
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
        .then(response => {
          this.types = response.data;
          this.typeChanged();
        })
        .catch(error => console.log(error));
    },
    typeChanged() {
      ProjectsRepository.getTopics(this.project.type).then(
        response => (this.topics = response.data)
      );
    },
    topicChanged() {
      if (this.project.topic == "OU") {
        this.othertopic = true;
      } else {
        this.othertopic = false;
      }
      ProjectsRepository.getTopicSubtopic(this.project.topic).then(
        response => (this.subtopics = response.data)
      );
    },
    subtopicChanged() {
      if (this.project.subtopic == "OU") {
        this.othersubtopic = true;
      } else {
        this.othersubtopic = false;
      }
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