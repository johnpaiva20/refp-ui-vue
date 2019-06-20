<template>
  <div>
    <b-container width="200px" fluid>
      <!-- Inicio Linha 1 -->
      <b-row>
        <!-- Inicio Coluna 1 -->
        <b-col md="3">
          <v-radio-group v-model="project.type" row @change="typeChanged()">
            <v-radio
              v-for="type in types"
              :key="type.id"
              :label="`${type.name}`"
              :value="type.value"
              :disabled="type.active"
              color="primary"
            ></v-radio>
          </v-radio-group>
        </b-col>

        <b-col md="2">
          <b-form-group
            ref="form"
            id="fieldset-1"
            class="inputFormStyle"
            label="Código da ANEEL"
            label-for="input-1"
          >
            <b-form-input required id="input-1" type="text" v-model="project.aneelId" trim></b-form-input>
          </b-form-group>
        </b-col>
        <!-- Fim coluna 1 -->
        <!-- Inicio Coluna 2 na linha 1 -->
        <b-col md="2">
          <b-form-group id="fieldset-1" label="Data Início do Projeto" label-for="input-2">
            <b-form-input id="input-2" type="date" v-model="project.start" trim></b-form-input>
          </b-form-group>
        </b-col>
        <!--Fim da coluna 2 na linha 1 -->
        <!-- Inicio da coluna 3 na linha 1 -->
        <b-col md="2">
          <b-form-group id="fieldset-1" label="Duração (Em meses)" label-for="input-3">
            <b-form-input id="input-3" placeholder="Ex: 12 meses" v-model="project.duration" trim></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group
            id="fieldset-1"
            class="inputFormStyle"
            label="Ordem de Serviço (ODS)"
            label-for="input-6"
          >
            <b-form-input id="input-6" type="text" v-model="project.serviceOrder" trim></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <!-- Fim linha 1 -->

      <!-- Inicio Linha 2 -->
      <b-row>
        <!-- Inicio Coluna Central -->
        <b-col md="12">
          <b-form-group id="fieldset-1" label="Título do Projeto" label-for="input-5">
            <b-form-input id="input-5" type="text" v-model="project.title" trim></b-form-input>
          </b-form-group>
        </b-col>
        <!-- Fim Coluna Central -->
      </b-row>
      <!-- Fim linha 2  -->

      <!-- Inicio Linha 3 -->
      <b-row>
        <!-- Inicio Coluna 1 -->
        <!-- Fim coluna 1 -->
        <!-- Inicio Coluna 2 na linha 3 -->

        <b-col md="2">
          <b-form-group id="fieldset-1" label="Segmento" label-for="input-9">
            <b-form-select id="input-9" v-model="project.segment">
              <option :value="null" disabled>Segmentos</option>
              <option v-for="segment in segments" v-bind:key="segment.value" :value="segment.value">{{segment.name}}</option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="3">
          <b-form-group id="fieldset-1" label="Fase de Cadeia" label-for="input-7">
            <b-form-select id="input-7" v-model="project.innovationPhase">
              <option :value="null" disabled>Fase de Cadeia</option>
              <option v-for="phase in innovationPhases" v-bind:key="phase.value" :value="phase.value">{{phase.name}}</option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <!--Fim da coluna 2 na linha 3 -->
        <!-- Inicio da coluna 3 na linha 3 -->
        <b-col md="3">
          <b-form-group id="fieldset-1" label="Tipo do Produto" label-for="input-8">
            <b-form-select id="input-8" v-model="project.product">
              <option :value="null" disabled>Tipo de Produto</option>
              <option v-for="product in products" v-bind:key="product.value" :value="product.value">{{product.name}}</option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <!-- Fim da coluna 3 na linha 3 -->
        <!-- Inicio da coluna 4 na linha 3 -->
        <b-col md="4">
          <b-form-group id="fieldset-1" label="Tipo de Compartilhamento" label-for="input-8">
            <b-form-select id="input-8" v-model="project.sharingType" :options="sharingTypes"></b-form-select>
          </b-form-group>
        </b-col>
        <!--Fim da coluna 4 na linha 3 -->
      </b-row>
      <!-- Fim linha 3 -->

      <!-- Inicio Linha 4 -->
      <b-row>
        <!-- Inicio Coluna Central -->
        <b-col md="12">
          <b-form-group id="fieldset-1" label="Escolha o Tema do Projeto" label-for="input-10">
            <b-form-select id="input-10" v-model="project.topic" @change="topicChanged()">
              <option :value="null" disabled>Tema</option>
              <option
                v-for="topic in topics"
                v-bind:key="topic.id"
                :value="topic.initials"
              >{{topic.description}}</option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <!-- Fim Coluna Central -->
      </b-row>
      <!-- Fim linha 4  -->

      <!-- Inicio Linha 5 -->
      <b-row v-if="false">
        <!-- Inicio Coluna Central -->
        <b-col md="12">
          <b-form-group id="fieldset-1" label="Escolha o Subtema do Projeto" label-for="input-11">
            <b-form-select id="input-11" v-model="project.subtopic">
              <option :value="null" disabled>Subtema</option>
              <option
                v-for="subtopic in subtopics"
                v-bind:key="subtopic.value"
                :value="subtopic.initials"
              >{{subtopic.description}}</option>
            </b-form-select>
          </b-form-group>
        </b-col>
        <!-- Fim Coluna Central -->
      </b-row>
      <!-- Fim linha 5  -->
    </b-container>
  </div>
</template>

<style>
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
      innovationPhases: [],
      products: [],
      segments: [],
      topics: [],
      subtopics: [],
      sharingTypes: [
        { value: null, text: "Tipo de Compartilhamento" },
        { value: "DP", text: "Domínio Público " },
        {
          value: "EE",
          text: "Exclusivo da(s) empresa(s) de energia elétrica  "
        },
        { value: "EX", text: "Exclusivo da(s) entidade(s) executora(s)" },
        {
          value: "CE",
          text:
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

      await ProjectsRepository.getProducts().then(
        response => (this.products = response.data)
      );
      await ProjectsRepository.getSegments().then(
        response => (this.segments = response.data)
      );
      await ProjectsRepository.getInnovationPhases().then(
        response => (this.innovationPhases = response.data)
      );
      await ProjectsRepository.getSharingTypes().then(
        response => (this.sharingTypes = response.data)
      );
    },
    typeChanged() {
      ProjectsRepository.getTopics(this.project.type).then(
        response => (this.topics = response.data)
      );
    },
    topicChanged() {
      ProjectsRepository.getTopicSubtopic(this.project.topic).then(
        response => (this.subtopics=response.data)
      );
    },
  },
  watch: {
    project: {
      handler: function(val) {
        this.$emit("onProjectChange",val);
      },
      deep: true
    }
  }
};
</script>